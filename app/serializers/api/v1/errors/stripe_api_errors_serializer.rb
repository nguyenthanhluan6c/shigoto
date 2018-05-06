class Api::V1::Errors::StripeApiErrorsSerializer < Api::V1::Errors::BaseErrorsSerializer
  def errors
    [
      {
        code: I18n.t("api_error.payment.stripe_api_error.#{object.error[:type]}"),
        type: object.error[:type],
        message: object.error[:message]
      }
    ]
  end
end
