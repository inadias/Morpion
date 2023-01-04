

<h1>Project Morpion réalisé  par Reactjs </h1>
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
Fonction Progressbar.js => Ce composant contient la logique de la barre de progression  qui fait ma transition entre la page d'accueil et le jeu


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!




