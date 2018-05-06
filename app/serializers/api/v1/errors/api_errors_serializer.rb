class Api::V1::Errors::ApiErrorsSerializer < Api::V1::Errors::BaseErrorsSerializer
  def errors
    [{code: object.code, key: object.key, class_name: object.class.name,
     message: object.message}]
  end
end
