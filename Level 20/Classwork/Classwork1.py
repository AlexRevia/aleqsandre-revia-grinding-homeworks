# Checking the homework
# Write a program that takes two numbers and an operator (+, -, *, /) as input and performs the calculation. Display the result and end the program.
num1 = float(input("Enter number: "))
num2 = float(input("Enter number: "))
operator = input("Choose one operator: +, -, *, /, **, %  ")

if operator == "+":
    print(num1, "+", num2, "=", num1+num2)
elif operator == "-":
    print(num1, "-", num2, "=", num1-num2)
elif operator == "*":
    print(num1, "*", num2, "=", num1*num2)
elif operator == "/":
    if num2 == 0:
        print("გაყოფა 0-ზე არ შეიძლება")
    else:
        print(num1, "/", num2, "=", num1/num2)
elif operator == "**":
    print(num1, "**", num2, "=", num1**num2)
elif operator == "%":
    print(num1, "%", num2, "=", num1%num2)
else:
    print("Wrong operator")

# classwork N1
mylist = ["ვაშლი", "ატამი", "ბანანი", "მსხალი", "ფორთოხალი", "კივი", "ბალი", "ანანასი", "ხურმა", "მანგო"]

item_1 = mylist[0]
item_2 = mylist[1]
item_3 = mylist[2]
item_4 = mylist[3]
item_5 = mylist[4]
item_6 = mylist[5]
item_7 = mylist[6]
item_8 = mylist[7]
item_9 = mylist[8]
item_10 = mylist[9]

# classwork N2
num1 = int(input("შეიყვანეთ პირველი მთელი რიცხვი: "))
num2 = int(input("შეიყვანეთ მეორე მთელი რიცხვი: "))
num3 = int(input("შეიყვანეთ მესამე მთელი რიცხვი: "))

my_list = [num1, num2, num3]

print("თქვენი სია არის:", my_list)

