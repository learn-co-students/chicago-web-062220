class Specialist < ActiveRecord::Base
    has_many :calls 
    has_many :employees, through: :calls
end