class Call < ActiveRecord::Base
    belongs_to :specialist
    belongs_to :employee
end