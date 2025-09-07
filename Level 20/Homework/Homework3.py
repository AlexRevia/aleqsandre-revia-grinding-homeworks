# Write a program that takes a score (0-100) as input and outputs the grade based on the following rules:

# 90-100: A
# 80-89: B
# 70-79: C
# 60-69: D
# Below 60: F

score = float(input("Enter your score (0-100): "))

if 90 <= score <= 100:
    grade = "A"
elif 80 <= score < 90:
    grade = "B"
elif 70 <= score < 80:
    grade = "C"
elif 60 <= score < 70:
    grade = "D"
elif 0 <= score < 60:
    grade = "F"
else:
    grade = "Invalid score"

print("Your grade is:", grade)
