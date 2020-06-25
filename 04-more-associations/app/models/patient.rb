class Patient
    attr_reader :name
    @@all = []
    def initialize(name, sick=true, age)
        @name = name
        @age = age 
        @sick = sick
        Patient.all << self 
    end


    def appointments
        Appointment.all.select do |app|
            app.patient == self
        end
    end


    def doctors 
        appointments.map do |app|
            app.doctor
        end
    end

    def doctor_names
        doctors.map do |doctor|
            doctor.name
        end
    end

    def make_appointment(doctor, day)
        Appointment.new(doctor, self, "Monday")
    end

    def self.under_18
        self.all.select do |patient|
            patient.age < 18 
        end
    end


end