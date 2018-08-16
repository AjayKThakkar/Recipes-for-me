# RECIPE-CREATOR
Hello, My name is Ajay Thakkar, thank you for your interest in looking at my app called Recipe Creator. This app allows users to sign, sign up, and add up to five ingredients as the site will generate a recipe based off those corresponding ingredients.

The Edamam API is used as a recipe database to filter recipes based off ingredient keywords. The Youtube API is shown on the index page of the site to help novices understand the cooking essentials needed for their pantry.

Testing for Recipe-Creator was done using Rspec and Jasmine/Enzyme. Tests are located in spec/. 

To Launch the application
➜ Clone repository
➜ bundle install
➜ yarn install
➜ bundle exec bin/rails db:create
➜ bundle exec bin/rails db:migrate
➜ bundle exec bin/rails db:seed
➜ bundle exec bin/rails s
  ~ (in another terminal window)
➜ yarn run start
  ~ (visit http://localhost:3000)
