class Api::V1::Base::AuthorizeController < Api::V1::Base::BaseController
  before_action :doorkeeper_authorize!

  private
  def current_user
    @current_user ||= User.find(doorkeeper_token.resource_owner_id) if doorkeeper_token
  end
end