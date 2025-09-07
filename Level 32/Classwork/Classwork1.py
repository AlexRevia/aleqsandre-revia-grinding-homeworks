# Classwork N1
def generate_big_sentence(name, surname, age):
    sentence = "Hello, my name is {}, my surname is {}, and I am {} years old.".format(name, surname, age)
    print(sentence)

name = input("Enter your name: ")
surname = input("Enter your surname: ")
age = input("Enter your age: ")

generate_big_sentence(name, surname, age)

# Classwork N2
def generate_big_sentence(name, surname, age):
    sentence = f"Hello, my name is {name}, my surname is {surname}, and I am {age} years old."
    print(sentence)

name = input("Enter your name: ")
surname = input("Enter your surname: ")
age = input("Enter your age: ")

generate_big_sentence(name, surname, age)

# Classwork N3
def my_split(main_string, string_to_split):
    result = main_string.split(string_to_split)
    print(result)

main_string = input("შეიყვანეთ მთავარი ტექსტი: ")
string_to_split = input("შეიყვანეთ დასაყოფი ტექსტი: ")

my_split(main_string, string_to_split)

# Classwork N4
def manual_append(main_list, item_to_insert):
    main_list.insert(len(main_list), item_to_insert)

my_list = [1, 2, 3]
manual_append(my_list, 4)
print(my_list)

