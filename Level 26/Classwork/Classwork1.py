# Classwork N1
def greet(name):
    print("გამარჯობა", name)

user_name = input("შეიყვანეთ თქვენი სახელი: ")
greet(user_name)

# Classwork N2
def manual_range(start, end, step):
    for num in range(start, end, step):
        if num % 2 == 0:
            print(num)

manual_range(2, 20, 2)
manual_range(10, 50, 5)
manual_range(1, 30, 3)
manual_range(0, 100, 10)
manual_range(5, 25, 2)

# Classwork N3
def manual_len(lst):
    count = 0 
    for _ in lst:
        count += 1
    return count


my_list = [4, 7, 1, 9, 3]  
length = manual_len(my_list)
print("სიის სიგრძე:", length)
