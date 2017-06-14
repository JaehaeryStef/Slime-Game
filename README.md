# Slime-Game
A game where you eat slimes

<<<<<<< HEAD
https://abbemad.github.io/Slime-Game/
=======
Below a link to my current state of the game I am making, the goal is to eat as many "snots" as possible.

https://abbemad.github.io/Slime-Game/

![](https://github.com/abbemad/Slime-Game/blob/master/Klassendiagram-Slime.jpg)
>>>>>>> 98b0a059412e5f11e38bd1248b9996cd066f3e1f

Vooraf:
Probeer bij de volgende update van je game in de readme te zetten waar alles staat.

ClassDiagram:
Ziet er goed uit, mist eigenlijk nog wel het een en ander, zoals de observer bijvoorbeeld.

De game zelf:
Ik heb een aantal dingen opgemerkd:
- De snotspawn is niet helemaal geoptimaliseerd. Daarmee bedoel ik het spawnt buiten het speelscherm, dit zorgt ervoor dat de game niet echt speelbaar meer wordt. Je kan namelijk niet verder.

- Wanneer de timer is afgelopen, wordt de game beindigd maar er is geen optie om het nog een keer te spelen, dan zou je echt moeten refreshen. in de voorwaarde staat niet dat dit moet, maar als game mechanic zal dat wel gaaf zijn als je dat er in in plaatst.

Library: 
Er is nog geen library geiplementeerd, je had gezegd dat dit nog zal komen. Aangezien de deadline al is geweest zal ik hier alleen geen rekening meehouden met de peer-review. Ik zou het wel zo snel mogelijk fixen, green-sock en dan tweenlite of tweenmax heeft een super handige website. Je kan deze gebruiken om heel makkelijk wat animations erin te plaatsen. Bijvoorbeeld laat je player heen en weer over het scherm lopen bij het startscherm.

Composition:
Hoever ik kon zien is er geen composition toegevoegd aan de game.

Singleton: 
Er is geen singleton toegevoegd.

Observer:
De observer is toegevoegd, maar zo ver het er naaruit ziet op het moment is het nog niet volledig geimplementeerd.

Behaviour:
Er is een interface met behaviour, deze is ook gelinkt aan de player. Het enige wat mist is een behaviour zelf, wat je zou kunnen doen is daar de move functionaliteit erin zetten. 

Interface zit er in, zelfs meerdere keren.

Inheritance:
Je laat snot van gameobjects erven en dit ziet er goed uit.

Encupsulation:
Gebruik van public en private ziet er netjes uit

Namespace:
naam gebruik van functies en alles geeft helderheid over wat het doet.

Polymorfisme:
Niet geimplemteerd, je kan nog een andere snot zoeken. Iets van een gemene snot die punten laat verliezen. Laat deze erven van gameobjects en maak dan een array aan van gameobjects, waar je beide objecten aan laat maken.

Enumeraties:
Er is een class die enumkeys heet en daarmee geef je aan wat het keyboard toest nummer is. Deze link je aan links rechts etc, en deze roep je aan bij de functie. Slim

Gameloop:
Er is een gameloop.

