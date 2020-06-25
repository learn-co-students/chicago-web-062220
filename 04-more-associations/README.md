## Ruby OO Relationships/Associations (One to Many)


# Question
    - Attrs 
    - invoking instance methods 
    - intialize 
    - when do we use initialize
        - it will always run first 
    - self.class 


# Prerequisites

- Data Types
    - Object
- Methods
    - difference between defining and invoking a method
- Variables and Scope
    - instance variable
- Classes
- Instances
    - methods
    - attributes
    - attr macros
- 

# What We'll Review

- Has many/Belongs to Associations
- Testing our code with a single file
- Single Source of Truth (SSOT)

# What We'll Learn Today

- process
    1. Strategize
        - readme
        - know all the models
        - know what methods we're being asked and what exactly it's suppose to do
        - *go back to the source code and see how much they've already done for you*
    2. Implement
        - binding.pry
        - *Test all assumptions*
    3. Test
        - console.rb
        - binding.pry
        - test all assumptions
    4. Refactor
        - Read errors
        - Use correct iterators
    5. Test
        - Are you doing what you were asked to do? vs Doing what you want to do?
- Many to Many Associations/has many, through
- Join Models

Owner has many Dogs 

Strategize
- Has many
- Belongs to 

Many to Many/Has Many, Through

Owner still has many dogs
Dog can have/can be associated with many Owners

Many to many association
    - this causes a problem because our initialize will have to be rewritten
    - we solve this problem by using a join class 


Doctor has many Patients
Patient has many Doctors





