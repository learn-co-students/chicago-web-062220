class Appointment
    attr_accessor :doctor
    attr_reader :patient
    @@all = []
    def initialize(doctor, patient, day)
        @doctor = doctor 
        @patient = patient
        @day = day 
        Appointment.all << self
    end

    def self.all 
        @@all
    end

end