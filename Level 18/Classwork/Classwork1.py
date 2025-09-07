# # დავალება 1
# for i in range(0, 21, 2):
#     print(i)

# # დავალება 2
# for i in range(1, 21, 2):
#     print(i)

# # დავალება 3
# for i in range(10, 31):
#     if i % 2 == 0:
#         print(str(i), " - even")
#     else:
#         print(str(i), " - odd")

# დავალება 4
num1 = int(input("Enter the first number (num1): "))
num2 = int(input("Enter the second number (num2): "))

sum_of_numbers = 0

if num1 > num2: 
    print("Even numbers:")
    for i in range(num2, num1):
        if i % 2 == 0:  # ლუწი რიცხვების შემოწმება
            print(i)
            sum_of_numbers += i
else: 
    print("Odd numbers:")
    for i in range(num1, num2): 
        if i % 2 != 0:  # კენტი რიცხვების შემოწმება
            print(i)
            sum_of_numbers += i

print("Sum of printed numbers:", sum_of_numbers)
