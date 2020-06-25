class Owner
    attr_accessor :name
    @@all = []
    def initialize(name)
        @name = name
        Owner.all << self
        # self.class.all << self 
        # @dogs = []
    end

    def self.all 
        @@all
    end
    
    def adopt_puppy(dog_instance)
        dog_instance.owner = self
    end


    def buy_puppy(name, breed)
        # instance method
        # self == owner instance
        new_dog = Dog.new(name, breed, self)
        # I am passing an instance of owner to my Dog
    end
    
    def dogs
        DogOwner.all.select do |dog_owner_instance|
            dog_owner_instance.owner == self
        end
    end


end