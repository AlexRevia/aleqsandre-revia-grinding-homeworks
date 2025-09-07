def manual_index(main_str, search_str):
    main_len = len(main_str)
    search_len = len(search_str)
    
    for i in range(main_len - search_len + 1):
        if main_str[i:i + search_len] == search_str:
            return i 
    
    return -1


print(manual_index("hello world", "world"))
print(manual_index("abcdef", "cd"))         
print(manual_index("abcdef", "gh"))
