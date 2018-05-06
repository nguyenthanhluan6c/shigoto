class Api::V1::Base::AuthorizeController < Api::V1::Base::BaseController
  before_action :doorkeeper_authorize!

  private
  def current_user
    @current_user ||= User.find(doorkeeper_token.resource_owner_id) if doorkeeper_token
  end

  def doorkeeper_unauthorized_render_options error: nil
    {json: hash_error[error.reason], serializer: Api::V1::Errors::ApiErrorsSerializer, status: :unauthorized}
  end

  def hash_error
    {
      expired: APIError::Authorize::TokenExpired.new,
      unknown: APIError::Authorize::TokenUnknown.new,
      revoked: APIError::Authorize::TokenRevoked.new
    }
  end
end
