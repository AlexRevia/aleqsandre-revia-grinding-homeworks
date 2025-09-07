# საკლასო დავალება N1
num1 = int(input("Enter your number: "))
sum = 0

for i in range(num1):
    sum = sum + i

print(sum)

# საკლასო დავალება N1
correct_password = "Goa best"

attempts = 0

user_password = ""
while user_password != correct_password:  
    user_password = input("შეიყვანეთ პაროლი: ")
    attempts += 1 

print("Access granted")
print("მცდელობების რაოდენობა:", attempts)

#  საკლასო დავალება N3
import random

my_num = random.randint(1, 10)
attempts = 0

user_guess = -1
while user_guess != my_num:
    user_guess = int(input("გამოიცანით 1-დან 10-მდე რიცხვი: "))
    attempts += 1

print("You guessed!")
print("თქვენ დაგჭირდათ", attempts, "ცდა")
