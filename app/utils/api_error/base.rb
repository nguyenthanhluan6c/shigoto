module APIError
  class Base < StandardError
    include ActiveModel::Serialization

    KEY = :base_error

    attr_reader :code, :message, :key

    def initialize
      error_type = I18n.t self.class.name.underscore.gsub(%r{\/}, ".")
      error_type.each do |attr, value|
        instance_variable_set("@#{attr}".to_sym, value)
      end
      @key = self.class::KEY
    end
  end

  #raise error in controller, example: raise APIError::Client::NotFound.new unless User.find(1)
  module Client
    class NotFound < APIError::Base
    end
    class InvalidAccessToken < APIError::Base
    end
    class AccessDeny < APIError::Base
    end
    class AppExpired < APIError::Base
    end
  end

  module Params
    class Required < APIError::Base
    end

    class Missing < APIError::Base
      attr_reader :error_fields

      def initialize error_fields
        error_type = I18n.t self.class.name.underscore.gsub(%r{\/}, ".")
        error_type.each do |attr, value|
          instance_variable_set("@#{attr}".to_sym, value)
        end
        @error_fields = error_fields
      end
    end
  end

  module Server
    class InternalError < APIError::Base
    end
    class BadGateway < APIError::Base
    end
  end

  module Authorize
    class TokenExpired < APIError::Base
    end

    class TokenUnknown < APIError::Base
    end

    class DoorkeeperError < APIError::Base
    end

    class InvalidConfirmationToken < APIError::Base
    end

    class UserActivated < APIError::Base
    end

    class UserInactive < APIError::Base
    end

    class TokenRevoked < APIError::Base
    end

    class Unauthorized < APIError::Base
      KEY = :unauthorized
    end
  end

  module Database
    class UserProfileReportExist < APIError::Base
    end
    class VideoReportExist < APIError::Base
    end
    class OfferExist < APIError::Base
    end
    class UserProfileNotExist < APIError::Base
    end
    class OfferNotExist < APIError::Base
    end
  end

  module Offer
    class NotAccepted < APIError::Base
    end

    class CanNotUnaccept < APIError::Base
    end
  end

  module Gift
    class NotEnoughPoint < APIError::Base; end
    class GiftTokenMismatched < APIError::Base; end
  end

  module Payment
    class StripeApiError < APIError::Base
      attr_reader :error

      def initialize exception
        @error = exception.response.data[:error]
      end
    end
    class TicketTokenMismatched < APIError::Base; end
  end

  module Appotapay
    class NotExists < APIError::Base; end
    class NotSupport < APIError::Base; end
    class AmountNotMatch < APIError::Base; end
    class TokenMismatched < APIError::Base; end
    class InputInvalid < APIError::Base; end
    class RequestInvalid < APIError::Base; end
    class NotActive < APIError::Base; end
    class InvalidCard < APIError::Base; end
  end

  module Exchange
    class MinimumRequirement < APIError::Base; end
    class NoteTicketConversionTokenMismatched < APIError::Exchange::MinimumRequirement; end
    class NotEnoughNote < APIError::Exchange::MinimumRequirement; end
    class TokenMismatched < APIError::Exchange::MinimumRequirement; end
    class StripeTransferError < APIError::Base; end
    class StripePayoutError < APIError::Base; end
    class PaypalApiError < APIError::Base; end
    class ConsecutiveTransactions < APIError::Exchange::MinimumRequirement; end
    class NotEnoughMinimumNotePoints < APIError::Exchange::MinimumRequirement
      def initialize
        i18n_path = self.class.name.underscore.gsub(%r{\/}, ".")
        @code = I18n.t "#{i18n_path}.code"
        @message = I18n.t "#{i18n_path}.message",
          min_note_points: Settings.exchange.minimum_note_points
      end
    end
    class ExceedMaximumNotePoints < APIError::Exchange::MinimumRequirement
      def initialize
        i18n_path = self.class.name.underscore.gsub(%r{\/}, ".")
        @code = I18n.t "#{i18n_path}.code"
        @message = I18n.t "#{i18n_path}.message",
          max_note_points: Settings.exchange.maximum_note_points
      end
    end
  end

  module AccountKit
    class AuthorizationCodeInvalid < APIError::Base; end
    class AuthorizationCodeExpired < APIError::Base; end
    class AccessTokenInvalid < APIError::Base; end
    class PhoneNumberMismatched < APIError::Base; end
    class PasscodeUnauthorized < APIError::Base; end
    class PhoneNumberNotVerified < APIError::Base; end
    class PasscodeNotSet < APIError::Base; end
    class VerifiedPhoneTokenInvalid < APIError::Base; end
  end

  module InAppHistories
    class PackageNameMismatched < APIError::Base; end
    class TokenAndProductIdMismatched < APIError::Base; end
  end
end
