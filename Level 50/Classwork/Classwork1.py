# 1
num = 10
try:
    result = num + "5"
except TypeError:
    print("TypeError: მონაცემთა ტიპები არ ემთხვევა")
    

# 2
try:
    name = input("შეიყვანეთ თქვენი სახელი: ")
    
    if not name or any(char.isdigit() for char in name):
        raise ValueError("სახელი უნდა იყოს არაცარიელი და არ შეიცავდეს რიცხვებს")

    print(f"თქვენი სახელი: {name}")

except Exception as e:
    print(f"შეცდომა: {e}")
