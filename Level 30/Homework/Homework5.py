# COUNT

# Question 12
paragraph = "GOA is the best programming course"
count_the = paragraph.lower().count("the")
print("The word 'the' appears", count_the, "times in the paragraph.")

# Question 13
string = "Goa is fun and challenging"
character = input("Enter a character to count: ")
count_char = string.count(character)
print(f"The character '{character}' appears", count_char, "times in the string.")

# Question 14
def count_word_occurrences(text, word):
    return text.lower().count(word.lower())

text = "Learning Python is fun"
word = "Python"
occurrences = count_word_occurrences(text, word)
print(f"The word '{word}' appears", occurrences, "times in the text.")


