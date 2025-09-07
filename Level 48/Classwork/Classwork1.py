# 1
def greet(name, owner):
    if name == owner:
        return "Hello boss"
    return "Hello guest"

# 2
def rental_car_cost(d):
    # your code
    cost = d * 40
    if d >= 7:
        cost  -= 50
    elif d >= 3 and d < 7:
        cost -=20
    return cost

# 3
def quarter_of(month):
    if month < 4: return 1
    elif month < 7: return 2
    elif month < 10: return 3
    return 4


# 4
def remove_exclamation_marks(s):
    return s.replace("!","")


# 5
def points(games):
    total_points = 0

    for game in games:
        x = game[0]
        y = game[2]

        if x > y: total_points += 3
        elif x == y: total_points += 1

    return total_points

# 6
def get_volume_of_cuboid(length, width, height):
    return length*width*height