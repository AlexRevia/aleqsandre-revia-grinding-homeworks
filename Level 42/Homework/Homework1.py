# Homework N3
dict1 = {"name": "alex", "age": 15, "city": "Tbilisi", "job": "software engineer", "salary": 10000000000000000}
print(dict1.keys())

# Homework N4
dict2 = {"apple": 3, "banana": 5, "cherry": 7}
print(dict2.values())

# Homework N5
dict3 = {"brand": "Ford", "model": "Mustang", "year": 1964}
print(dict3.items())

# Homework N6
dict4 = {"A": 1, "B": 2, "C": 3}
for key, value in dict4.items():
    print(f"{key}: {value}")

# Homework N7
dict5 = {"x": 10, "y": 20, "z": 30}
key_to_check = "y"
print(key_to_check in dict5)

# Homework N9
dict6 = {"one": 1, "two": 2, "three": 3}
dict6["four"] = 4
print(dict6)

# Homework N10
dict7 = {"red": "#FF0000", "green": "#00FF00", "blue": "#0000FF"}
dict7.pop("green")
print(dict7)

# Homework N11
dict8 = {"a": 1, "b": 2}
dict9 = {"c": 3, "d": 4}
dict8.update(dict9)
print(dict8)

# Homework N12
dict10 = {"dog": "bark", "cat": "meow", "cow": "moo"}
print(len(dict10))

# Homework N13
def sum_numeric_values(dictionary):
    return sum(value for value in dictionary.values() if isinstance(value, (int, float)))

dict11 = {"a": 10, "b": 20, "c": "text", "d": 30.5}
print(sum_numeric_values(dict11))

# Homework N14
dict12 = {"name": "Alex", "age": 15, "city": "Tbilisi"}
dict12.clear()
print(dict12)

# Homework N15
my_info = {
    "name": "Alex",
    "age": 15,
    "city": "Tbilisi",
    "country": "Georgia",
    "hobby": "coding",
    "language": "Python",
    "height": 185,
    "weight": 65,
    "eye_color": "brown",
    "hair_color": "brown"
}
print(my_info)