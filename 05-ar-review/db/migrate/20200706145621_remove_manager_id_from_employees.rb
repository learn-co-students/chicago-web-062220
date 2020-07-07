class RemoveManagerIdFromEmployees < ActiveRecord::Migration[6.0]
  def change
    remove_column :employees, :manager_id
  end
end

