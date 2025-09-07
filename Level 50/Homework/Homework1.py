#1
try:
    user_input = input("Enter a number: ")
    number = float(user_input) 
    print("You entered:", number)
except ValueError:
    print("Error: That is not a valid number.")

#2
my_list = [1, 2, 3]
try:
    print("Accessing 5th element in the list:", my_list[4])
except IndexError:
    print("Error: Index out of range.")

#3
try:
    result = "The number is: " + 5
    print(result)
except TypeError:
    print("Error: You can't add a string and an integer.")
