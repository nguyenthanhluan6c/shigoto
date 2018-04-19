class Api::V1::Auth::SessionsController < Api::V1::BaseController
  include Api::V1::Auth::DoorkeeperAuthorize

  def create
    if authorize_response.status == :unauthorized
      render_error
    end

    token = authorize_response.token
    render_success data:    {
      token: token.token,
      refresh_token: token.refresh_token,
      expires_in: token.expires_in,
      created_at: token.created_at,
      user_id: current_resouce.id,
      user_email: current_resouce.email,
      name: current_resouce.name
    }

  rescue Doorkeeper::Errors::DoorkeeperError => e
    render_error
  end

  def revoke
    revoke_token if authorized?
    render_success
  end

  private
  def current_resouce
    @current_resouce ||= User.find authorize_response.token.resource_owner_id
  end
end
