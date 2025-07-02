### Nim The Game

#imports
import random
from random import randint


#Setup
r0 = randint(2, 10)
r1 = randint(2, 10)
r2 = randint(2, 10)
r3 = randint(2, 10)
validpiles = [1,2,3,4]
correctinput = False
print("Da Rules:\nChose to play against a Player or an Enemy(easy/hard)\nPick a Pile to subtract any number (turn out any amount of lights), up to the Pilesize, from.\nNow the enemy does the same.\nThe one who turns out the last light of the last Pile, loses!")


#Player
def _playerturn():
    global r0 ,r1, r2, r3, correctinput
    correctinput = False
    while correctinput == False:
        pilenumber = input("Wich pile?")
        if pilenumber == "1" or pilenumber == "2" or pilenumber == "3" or pilenumber == "4":
            pilenumber = int(pilenumber)
            while True:
                try:
                    lampcount = int(input("How many?"))
                    break
                except ValueError:
                    print("Please input a number!")
            if pilenumber == 1:
                if r0 >= lampcount > 0:
                    r0 = _ispileemthyorremove(pilenumber, r0, lampcount)
                else:
                    correctinput = False
            elif pilenumber == 2:
                if r1 >= lampcount > 0:
                    r1 = _ispileemthyorremove(pilenumber, r1, lampcount)
                else:
                    correctinput = False
            elif pilenumber == 3:
                chosenpilecount = r2
                if r2 >= lampcount > 0:
                    r2 = _ispileemthyorremove(pilenumber, r2, lampcount)
                else:
                    correctinput = False
            elif pilenumber == 4:
                if r3 >= lampcount > 0:
                     r3 = _ispileemthyorremove(pilenumber, r3, lampcount)
                else:
                    correctinput = False
            else:
                print("This shouldn´t happen?")
            if correctinput == True:
                return
            else:
                print("Chose a viable number of lamps!")
        else:
            print("Chose a existing pile!")


#easy enemy
def _easyenemy():
    done = False
    global r0 ,r1, r2, r3
    botpile = random.choice(validpiles)
    while done == False:
        if botpile == 1:
            botcount = randint(1, r0)
            r0 = _isPileEmthyOrRemoveEasy(botpile, r1, botcount)
            done = True
        elif botpile == 2:
            botcount = randint(1, r1)
            r1 = _isPileEmthyOrRemoveEasy(botpile, r1, botcount)
            done = True
        elif botpile == 3:
            botcount = randint(1, r2)
            r2 = _isPileEmthyOrRemoveEasy(botpile, r2, botcount)
            done = True
        elif botpile == 4:
            botcount = randint(1, r3)
            r3 = _isPileEmthyOrRemoveEasy(botpile, r3, botcount)
            done = True
        else:
            print("404")


'''#hard enemy
def _hardenemy():
    global r0 ,r1, r2, r3, correctinput
    done = False
    botpile = random.choice(validpiles)
    if botpile == 1:
        botcount = randint(1, r0)
        try:
            r0 = _smartpileemthyorremove(pile, currentpilecount, count, done)
            done = True
        except ValueError:
            pass
    elif botpile == 2:
        botcount = randint(1, r1)
        r1 = _ispileemthyorremove(botpile, r1, botcount)
    elif botpile == 3:
        botcount = randint(1, r2)
        r2 = _ispileemthyorremove(botpile, r2, botcount)
    elif botpile == 4:
        botcount = randint(1, r3)
        r3 = _ispileemthyorremove(botpile, r3, botcount)
    else:
        print("404")
'''

#pile remove function player
def _ispileemthyorremove(pile, currentpilecount, count):
    global correctinput
    currentpilecount = currentpilecount - count
    if currentpilecount == 0:
        global validpiles
        validpiles.remove(pile)
    correctinput = True
    return(currentpilecount)


#pile remove function easy enemy
def _isPileEmthyOrRemoveEasy(pile, currentpilecount, count):
    currentpilecount = currentpilecount - count
    if currentpilecount == 0:
        global validpiles
        validpiles.remove(pile)
    return(currentpilecount)


'''#smart pile remove function for hard enemy
def _smartpileemthyorremove(pile, currentpilecount, count, done):
    global validpiles
    currentpilecount = currentpilecount - count
    if nimSumme != 0:
        if currentpilecount == 0:
            validpiles.remove(pile)
        return(currentpilecount)
    else:
        raise TypeError("not a winning option")
'''


#Enemy/Gamemode options
enemySelectionComplete = False
while enemySelectionComplete == False:
    enemytype = input("Would you like a hard or easy enemy or play against another player?")
    if enemytype == "hard" or enemytype == "easy" or enemytype == "player":
        if enemytype == "hard":
            print("This enemy is currently unavailible, I´m sorry.")
        else:
            enemySelectionComplete = True
    else:
        print("Please input hard, easy or player!")


#Pile setup
print("These are the Piles: " + str(r0) + " " + str(r1) + " " + str(r2) + " " + str(r3))


#Gameloop
while (r0 == 0 and r1 == 0 and r2 == 0 and r3 == 0) == False:
    print("Player one's turn")
    _playerturn() 
    if (r0 == 0 and r1 == 0 and r2 == 0 and r3 == 0) == True:
        won = False
        break
    print("These are the Piles: " + str(r0) + " " + str(r1) + " " + str(r2) + " " + str(r3)+ "\n")
    if enemytype == "easy":
        print("easy bot's turn")
        _easyenemy()
    elif enemytype == "hard":
        print("hard bot's turn")
        '''_hardenemy()'''
    elif enemytype == "player":
        print("Player two's turn")
        _playerturn()
    else:
        pass
    print("These are the Piles: " + str(r0) + " " + str(r1) + " " + str(r2) + " " + str(r3) + "\n")
    if (r0 == 0 and r1 == 0 and r2 == 0 and r3 == 0) == True:
        won = True


#End message
if won == True and enemytype != "player":
    print("You won ;)")
elif won == True and enemytype == "player":
    print("Player one won ;)")
elif won == False and enemytype == "player":
    print("Player two won :)")
else:
    print("You lost :(\nGit good")
