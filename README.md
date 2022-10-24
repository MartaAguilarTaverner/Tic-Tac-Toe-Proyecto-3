# <font color="green">~Tic Tac Toe~ </font> <img src="/img/imgreadme/Screenshot_screen3tokens.png" width="40">

---

##<font color="darkgreen">Introduction</font> <img src="/img/imgreadme/Screenshot_screen3tokens.png" width="30">

This is a multiplayer Tic Tac Toe game made in **<font color="#ffcc00">JavaScript</font>**.
It has three different types of game, person vs person, person vs CPU or CPU vs CPU.
In this game both players will have three tokens, and after having the six in the board, the player has to click on the symbol that wishes to change and move it to the cell that she/he wants.
Due to the Responsive design made by Bootstrap used in both **<font color="orange">HTML5</font>** and **<font color="blue">CSS</font>** files, this game can be used in phones, computers and tablets.

Thanks to this project I was able to understand and learn JS and practice responsive design. I want to improve this tic tac toe in the future using new technologies to improve it (specially the CPU with AI).

---

##<font color="darkgreen">Tecnologies</font> <img src="/img/imgreadme/Screenshot_screen3tokens.png" width="30">
**- HTML5**
**- CSS3**
**- Bootstrap**
**- JavaScript**

---

##<font color="darkgreen">Pages and the Game</font> <img src="/img/imgreadme/Screenshot_screen3tokens.png" width="30">

### Start Game

In this page we have a button with an event on click to go to the page of SelectPlayers.

<center><img src="/img/imgreadme/Screenshot_start.png" width="400" height="200"></center>

### Select Players

In this page we have the forms for player one and player two and a button to confirm and Start Game with an event on click to go to the page of the game.

<center><img src="/img/imgreadme/Screenshot_newgame.png" width="400" ></center>

In the forms we have to choose between a person or CPU type of player and if it´s a person we have to put a name(required). This data will be saved in the Session Storage to be able to use it in the game page.

<center><img src="/img/imgreadme/Screenshot_formplayer.png" width="300"> <img src="/img/imgreadme/Screenshot_formCPU.png" width="300"></center>

### Game Window

In this page we have the board using a class and instanciating the item to start the game.
With the event on click we will be able to put and move the tokens.
We have in the left the data that we have caught of each player from the session storage, and the players turn. We have two buttons to clear the cells or restart choosing new players with an event on click.

<center><img src="/img/imgreadme/Screenshot_gamepc.png" width="400"></center>

## Winner Screen

In this page we have the name of the winner that we get thanks of the session storage of the game page, being able to determine what player wins and be able to show it in the screen. We have a button of New Game with an event on click to go to the page of Select Players and start a new game.

<center><img src="/img/imgreadme/Screenshot_winner.png" width="400"></center>
