require "sidekiq"
require "sidekiq/web"
# require "dotenv"

Sidekiq.configure_server do |config|
  config.redis = {url: "redis://#{ENV['REDIS_HOSTNAME']}:6379/0", namespace: ENV["SIDEKIQ_NAME_SPACE"]}
end

Sidekiq.configure_client do |config|
  config.redis = {url: "redis://#{ENV['REDIS_HOSTNAME']}:6379/0", namespace: ENV["SIDEKIQ_NAME_SPACE"]}
end
