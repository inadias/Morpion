

<h1>Project Morpion réalisé avec Reactjs </h1>
<h3> le principe du jeu est </h3>
<p>
L'interface du jeu est  tracer sur une feuille blanche. Une grille de 3 cases sur 3 (selon les variantes, il est possible d'augmenter le nombre de cases). Le but du jeu est d'aligner avant son adversaire 3 symboles identiques horizontalement, verticalement ou en diagonale.
</p>
le project est scindé est 3 composant :
class CLickerCol.js =>  ce composant contient les elements qui forme la grid du jeu Morpion  qui ensuite importer dans Interface.js pour l'afficher

Fonction Interface.js => Ce composant est imbrique la logique du jeu, à savoir :
<ul>
<li>le composant ClickedCol pour affiher les 9 cases qui forme le jeu</li>
<li> La logique qui permet de valider une case une fois clicker dessus </li>
<li> intègre des image à la place des "O" et des "X"</li>
<li> intègre des image à la place des "O" et des "X"</li>
</ul>

Pour le Css :
 inline css avec Bootstarp 
 dans le ficher App.css

Fonction Progressbar.js => Ce composant contient la logique de la barre de progression  qui fait ma transition entre la page d'accueil et le jeu
Fonction Result.js => Contient  un affichage d'un modal généré par Bootsrap. il s'affiche au moment au un joueur a gagné la partie .
 
 Required:
  Bootstrap v5 ou autre 
  si vous utiliser les éditeur IntelliJ, il suffira  de cloner le jeu pour qui install les liberaires nécessaires et qui sont listées dans dan package.json

## Scripts pour lancer le jeu

In the project directory, you can run:

### `npm start`

Une fois lancer il faut cliquer sur le lien dans la cli 
              Open [http://localhost:3000](http://localhost:3000) to view it in your browser.





