# You're a square!

def is_square(n):
    if n < 0: return False

    if int(n0.5)*int(n0.5)==n: return True
    return False


# Get the Middle Character

def get_middle(s):
    if len(s)%2 == 0:
        return s[len(s)//2-1:len(s)//2+1]
    else:
        return s[len(s)//2]


# Isograms

def is_isogram(string):
    string = string.lower()
    return len(string) == len(set(string))

# Jaden Casing Strings

def to_jaden_case(string):
    string = [i.capitalize() for i in string.split(" ")]
    return " ".join(string)

# Shortest Word

def find_short(s):
    s = s.split(" ")
    res = 1000000

    for i in s:
        if len(i) < res:
            res = len(i)
    return res


# String ends with?

def solution(text, ending):
    return text[len(ending)*-1:] == ending

# Mumbling

def accum(st):
    res = []

    for i in range(len(st)):
        chr = st[i]
        new_str = chr*(i+1)
        res.append(new_str.capitalize())

    return "-".join(res)