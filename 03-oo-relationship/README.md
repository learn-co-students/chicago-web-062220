## Ruby OO Relationships/Associations (One to Many)


# Question
    - attr's
    - self vs @
        - self.class
        - class variable vs constants
        - @@all vs ALL 


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

# What We'll Learn Today

- class methods
- private methods
- `self`
- One to Many/Has Many, Belongs to


# Self

- self will always either be the Class object or the instance object






# Types of Associations

One to Many
- Has Many # => Owner
- Belongs to # => Dog
    - holds a reference to the other class
    - it is the Dog's responsibility to keep track of who its owner is 
    - The dog wears the collar 





- Many to Many/Has Many, Through






# Deliverables

<!-- 1. How do we retrieve a list of all Dogs -->
    <!-- Dog should know how to bark # => "woof my name is ____" -->
2. Build an Owner class
3. A dog should be associated with a single instance of owner

 How do I tell my instances that they are associated with eachother




4. Owner should be associated with many possible instances of dog
5. A dog should know who its owner is 
6. An Owner should know all of its dogs 

