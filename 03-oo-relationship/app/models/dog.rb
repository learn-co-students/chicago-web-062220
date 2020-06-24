require 'pry'

#[]
class Dog
    # now you are able to say what your name and breed is 
    attr_reader :name, :breed
    attr_accessor :owner
    @@all = []
    # ALL = []
    def initialize(name, breed, owner)
        @owner = owner 
        # instance variable
        # remember your name, breed, and optional fur color
        @name = name
        @breed = breed
        # @fur_colofr = fur_color
        # what kind of method is initialize? 
        # instance method
        # what should self be? 
        # thus self will be the instance => #<Dog#23946239476 @name>
        @@all << self 
    end

    def self.all
        @@all
    end

    def bark
        puts "woof my name is #{@name}"
        puts "woof my name is #{self.go_on_carpet}"
    end

    def go_on_carpet
        puts "oops"
    end
    

end

# How did I get my instance to remember some information? 
    # instance variables
# Remember information inside of my class 
    # class variable


# []
# binding.pry 
# dog1 = Dog.new("Fluffy", "German Shephard", "yellow")
# binding.pry 
# # [dog1]
# dog2 = Dog.new("Bixby", "Pitbull")
# binding.pry 
# []
# [dog2]
# [dog1, dog2]
# dog3 = Dog.new("Bixby", "Pitbull")
# [dog1,dog2,dog3]
# Dog => a list of all dogs 

# 1. We are dealing an object. How do we communicate with objects? 
# Object.method 
# Object.send(:method)

# I need a class method that will return all of my dog instances 

