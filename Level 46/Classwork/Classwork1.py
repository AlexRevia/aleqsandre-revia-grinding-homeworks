# classwork 1
def manual_list(start, end, step, user_num):
    result = []
    for num in range(start, end, step):
        if num > user_num:
            result.append(num)
    return result

print(manual_list(1, 20, 2, 5))
print(manual_list(10, 50, 5, 20))
print(manual_list(0, 30, 3, 10)) 

# classwork 2
numbers = [n for n in range(1, 101) if (n % 3 == 0) != (n % 5 == 0)]  
print(numbers)

# classwork 3
pal_numbers = [num for num in range(10, 201) if str(num)[::-1] == str(num)]
print(pal_numbers)

