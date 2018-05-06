class Api::V1::Auth::SessionsController < Api::V1::Base::BaseController
  include Api::V1::Auth::DoorkeeperAuthorize

  def create
    if authorize_response.status == :unauthorized
      raise APIError::Authorize::Unauthorized
    end

    authorize_response_with_confirmed!

    render_success data: Api::V1::Auth::LoginSerializer.new(current_resouce, authorize_response.token).generate

  rescue Doorkeeper::Errors::DoorkeeperError => e
    raise APIError::Authorize::DoorkeeperError
  end

  def revoke
    revoke_token if authorized?
    render_success
  end

  private
  def current_resouce
    @current_resouce ||= User.find authorize_response.token.resource_owner_id
  end

  def authorize_response_with_confirmed!
    if current_resouce.respond_to?(:confirmed?) && !current_resouce.confirmed?
      raise APIError::Authorize::UserInactive
    end
  end
end
