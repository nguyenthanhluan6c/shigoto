class Api::V1::Errors::RecordNotFoundSerializer < Api::V1::Errors::BaseErrorsSerializer
  def errors
    [{code: 404, message: object.message}]
  end
end
