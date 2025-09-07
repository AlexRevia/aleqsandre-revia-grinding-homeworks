name = input("თქვენი სახელი: ")
choice = input("შეიყვანე არჩევანი (u ან l): ")

if choice == "u":
    print(name.upper())
elif choice == "l":
    print(name.lower())
else:
    print("wrong information")

