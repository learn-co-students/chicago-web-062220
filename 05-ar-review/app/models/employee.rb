class Employee < ActiveRecord::Base
    has_many :manager_employees
    has_many :managers, through: :manager_employees
    belongs_to :department
    has_many :calls 
    has_many :specialists, through: :calls

    def self.most_calls 
        self.all.max_by do |e|
            e.num_of_calls
        end
    end

    def num_of_calls
        self.calls.count
    end
end
