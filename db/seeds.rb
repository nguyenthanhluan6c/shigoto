# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Faker::Config.locale = :en

User.create name: "User", email: "user@example.com", password: "123456789", password_confirmation: "123456789"
20.times do |n|
  User.create name: "User #{n}", email: "user#{n}@example.com", password: "123456789", password_confirmation: "123456789"
end

users = User.all.to_a
1000.times do
  Article.create title: Faker::Lorem.sentence, content: Faker::Lorem.paragraph, user: users.sample
end