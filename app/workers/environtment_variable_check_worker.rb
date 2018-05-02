class EnvirontmentVariableCheckWorker
  include Sidekiq::Worker

  def perform
    Sidekiq.logger.info "DEPLOY_REF #{ENV["DEPLOY_REF"]}"
    Sidekiq.logger.info "DEPLOY_REF_TYPE #{ENV["DEPLOY_REF_TYPE"]}"
    Sidekiq.logger.info "HOST #{ENV["HOST"]}"
    Sidekiq.logger.info "HOST #{ENV["HOST"]}"
    Sidekiq.logger.info "EMAIL_DOMAIN #{ENV["EMAIL_DOMAIN"]}"
    Sidekiq.logger.info "DEFAULT_MAILER_FROM #{ENV["DEFAULT_MAILER_FROM"]}"
  end
end
