class Api::V1::BaseController < ActionController::API
  respond_to :json

  include AbstractController::Translation

  private
  def render_success response_params = {}
    render json: {success: true, data: response_params[:data]},  status: 200
  end

  def render_error response_params = {}
    render json: {success: false, errors: response_params[:errors]}, status: 400
  end
end
