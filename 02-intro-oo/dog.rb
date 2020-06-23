require 'pry'

class Dog
    # macros => key words/technically methods that executes some code for us 
    # the name of the argument that's being passed is the name of an instance variable with some information. 
    # we must want a method that is a reader that is also called name 
    # We must want that method to return that instance variable 
    attr_reader :name, :breed
    # attr_writer :name, :breed, :fur_color
    attr_accessor :fur_color
    def initialize(name, breed, fur_color=nil)
        # instance variable
        @name = name
        @breed = breed
        @fur_color = fur_color
    end

    # def name
    #    @name
    # end

    # def breed 
    #     @breed
    # end

    # def fur_color=(color)
    #     @fur_color = color 
    # end

    # def fur_color
    #     @fur_color #=> nil
    # end

end


 

# how do we create a new dog 
# version == instance
dog1 = Dog.new("Fluffy", "German Shephard", "yellow")
dog2 = Dog.new("Bixby", "Pitbull")
# Dog.send(:new)

# Not versatile == Not dynamic 
# Static 





# 1. I need the dog to remember it's name and breed 
# 2. Then I need to tell it how to tell me its name and breed





# how do we get ruby to know that a dog should be created with a name and a breed

binding.pry 