class Api::V1::Base::BaseController < ActionController::API
  respond_to :json

  include AbstractController::Translation
  include Api::V1::Base::ExceptionRescue
  include Api::V1::Base::ParamsValidator

  private
  def render_success response_params = {}
    render json: {success: true, data: response_params[:data]},  status: :ok
  end

  def render_error response_params = {}
    render json: {success: false, errors: response_params[:errors]}, status: :bad_request
  end
end
