# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create name: "User", email: "user@example.com", password: "123456789", password_confirmation: "123456789"
20.times do |n|
  User.create name: "User #{n}", email: "user#{n}@example.com", password: "123456789", password_confirmation: "123456789"
end
