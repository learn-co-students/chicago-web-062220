class CreateManagerEmployees < ActiveRecord::Migration[6.0]
  def change
    create_table :manager_employees do |t|
      t.integer :manager_id
      t.integer :employee_id
    end
  end
end
