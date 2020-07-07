class Manager < ActiveRecord::Base
    has_many :manager_employees
    has_many :employees, through: :manager_employees
    

    # def manager_employees 
    #     ManagerEmployee.all.find do |me|
    #         me.manager == self 
    #     end
    # end
    # def manager_employees 
    #     ManagerEmployee.all.select do |me|
    #         me.manager == self 
    #     end
    # end

    # def employees 
    #     manager_employees.map do |me|
    #         me.employee
    #     end
    # end





    # def employees
    #     puts "this works"
    #     Employee.all.select do |employee|
    #         employee.manager_id == self.id
    #     end
    # end
end