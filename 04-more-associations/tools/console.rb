require 'pry' # => rubygems.org
require_relative '../app/models/dog'
require_relative '../app/models/owner'


owner = Owner.new("Jeff")
owner2 = Owner.new("Luis")
dog1 = Dog.new("Fluffy", "German Shephard", owner)
dog2 = Dog.new("Bixby", "Pitbull", owner)
owner2.adopt_puppy(dog1)
owner.dogs


binding.pry