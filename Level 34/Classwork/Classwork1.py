# Classwork N1
def remove_by_indexes(main_list, indexes_list):
    for index in sorted(indexes_list, reverse=True):
        main_list.pop(index)
    return main_list

main_list = [10, 20, 30, 40, 50]
indexes_list = [1, 3]
result = remove_by_indexes(main_list, indexes_list)
print(result)

# Classwork N2
def remove_one_element(my_list, index):
    my_list.pop(index)
    print(my_list)

remove_one_element([10, 20, 30, 40, 50], 2)