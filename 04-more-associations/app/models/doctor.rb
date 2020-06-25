class Doctor
    attr_accessor :name, :specialty
    @@all = []
    def initialize(name, specialty)
        @name = name 
        @specialty = specialty
        Doctor.all << self
    end

    def self.all 
        @@all
    end

end