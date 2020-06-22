require 'pry'

# map
def create_new_array_with_each
 new_array = []
    array.each do |ele|

    new_array << ele * 2
    end

    new_array
 end

 def with_map
    new_array = array.map do |ele|
        ele * 2
    end

    puts new_array
end

# select/filter

divisible_by_two = array.select do |ele|
    ele % 2 == 0
end

divisible_by_two.each {|ele| puts ele}

# find 
# [1,2,3]
 array.find do |ele|
    ele == 1
 end
 # array[0]






Tashawn Williams 

# 1. I am building a Dogs application. I need to a way to hold all the information (name, breed) about a SPECIFIC dog. Which datatype should I use?

# 2. Now, I need a way to hold a list of all of the plants in my app. Which datatype should I use? 
dogs = [
    {name: "Fluffy", breed: "German Shephard"},
    {name: "Scruff", breed: "Golden Retriever"},
    {name: "Scooby", breed: "Great Dane"},
    {name: "Shadow", breed: "Labrador Retriever"},
    {name: "Bixby", breed: "American Pitbull Terrier"}
]



# 3. I want to be to find all dogs with a specific breed. What iterator should I use? What datatype should be returned?
def find_all_breed(breed)
    dogs.select do |dog|
        dog[:breed] == breed
    end
end

find_all_breed("German Shephard")

# 4. I want to be able to find a single dog with a specific name. How do I do that? What datatype should be returned?

def find_by_name(name)
    array.find {|dog| dog[:name] == name}

end


# 6. I want a list of only the names of each dog. How do I do that? What datatype should be returned?

dogs.map do |dog|
    dog[:name]
end

