# classwork 1
dict1 = {
    "name": "alex",
    "surname": "revia",
    "academy": "GOA",
    "fav-color": "green",
    "city": "tbilisi",
    "goa-student": "true",
    "age": "15",
    "fav-programming-lang": "javascript"
}

print(dict1["name"])
print(dict1["surname"])
print(dict1["academy"])
print(dict1["fav-color"])
print(dict1["city"])
print(dict1["goa-student"])
print(dict1["age"])
print(dict1["fav-programming-lang"])

# classwork 2
my_dict = {
    'name': 'alex',
    'age': 15,
    'city': 'tbilisi',
    'academy': 'GOA',
    'hobby': 'programming'
}

print(my_dict.keys())
print(my_dict.values())
print(my_dict.items())

for key, value in my_dict.items():
    print(f"Key is {key} and value is {value}")

