# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)



users = [
    {
        email: "Jacobsdfk@gmail.com",
        password: "123456",
        password_confirmation: "123456",
    }
]

songs = [
    {
        title: "Animals",
        artist: "Nickelback",
        user_id: 1,
    },
    {
        title: "Forrest Gump",
        artist: "Frank Ocean",
        user_id: 1,
    },
    {
        title: "Alien Boy",
        artist: "Oliver Tree",
        user_id: 1,
    },
    {
        title: "Lonely",
        artist: "Benee",
        user_id: 1,
    }
]



songs.each do |attribute|
    user = User.find 1
    user.songs.create attribute
    puts "creating #{attribute}"
end

users.each do |attribute|
    User.create attribute
    puts "creating #{attribute}"
end