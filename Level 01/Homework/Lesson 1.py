from turtle import *


#we want to paint a house

#step 1: draw a square
speed(30)
width(7)
color("purple")
begin_fill()
forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)
end_fill()

#end of square

#drawing a door


forward(70)
color("red")
begin_fill()
left(90)
forward(120)   #height of the door
right(90)
forward(60)
right(90)
forward(120)
end_fill()

penup()
goto(200, 200)
pendown()

color("red")
begin_fill()
right(150)
forward(200)
left(120)
forward(200)
end_fill()
 
 #drawing a window
penup()
goto(15, 185)
pendown()
color("green")
begin_fill()
left(120)
forward(50)
right(90)
forward(50)
right(90)
forward(50)
right(90)
forward(50)
end_fill()
 
#drawing a second window
penup()
goto(185, 185)
pendown()
begin_fill()
left(90)
forward(50)
left(90)
forward(50)

left(90)
forward(50)
left(90)
forward(50)
end_fill()


exitonclick()
