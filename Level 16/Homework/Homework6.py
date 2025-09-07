# Prompt the user to enter a password. Keep asking until they enter the correct password.
correct_password = "secret123"
user_password = input("Enter your password: ")

while user_password != correct_password:
    print("Incorrect password. Please try again.")
    user_password = input("Enter your password: ")

print("Password accepted!")
