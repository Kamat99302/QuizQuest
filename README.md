# QuizQuest

Application de quiz interactive développée en React. Utilise l'API Open Trivia Database pour générer des questions de culture générale personnalisables avec scoring en temps réel, mode sombre et animations.

![QuizQuest Demo](./animation.gif)

## 🎯 Fonctionnalités

- **Personnalisation complète** : Choix de la difficulté (Easy/Medium/Hard), nombre de questions (5/10/15) et catégorie (Books, Films, Music, Video Games, Geography, History)
- **Questions aléatoires** : Génération dynamique via l'Open Trivia DB API
- **Mélange des réponses** : Les réponses sont mélangées aléatoirement pour éviter la répétition
- **Sélection interactive** : Interface intuitive avec feedback visuel au hover et au focus
- **Scoring en temps réel** : Calcul instantané du score final
- **Feedback visuel** : Affichage des bonnes réponses (vert) et mauvaises réponses (rouge)
- **Mode sombre** : Bascule entre thème clair et sombre
- **Design moderne** : Animations de formes géométriques et dégradés de couleurs
- **Navigation accessible** : Support complet du clavier avec ARIA labels
- **Responsive** : Interface adaptée mobile et desktop
- **Rejouabilité** : Possibilité de relancer un nouveau quiz avec de nouveaux paramètres

## 🛠️ Technologies

- React 19
- TypeScript
- CSS3 (animations, flexbox, media queries)
- Vite
- Open Trivia DB API
- he (décodage HTML)
- React Icons

## 🚀 Installation
```bash
# Cloner le projet
git clone https://github.com/Kamat99302/Quizzical.git

# Installer les dépendances
npm install

# Lancer en développement
npm run dev
```

## 💡 Utilisation

1. **Personnalise ton quiz** : Choisis la difficulté, le nombre de questions et la catégorie
2. Clique sur "Start Quiz" pour commencer
3. Réponds aux questions en sélectionnant une réponse
4. Clique sur "Check answers" pour voir ton score
5. Clique sur "New game" pour recommencer ou sur l'icône maison pour revenir au menu

## 🎨 Défis techniques

### 1. **Gestion d'état complexe**
Utilisation de 8 `useState` pour gérer l'état de l'application :
- Questions, réponses sélectionnées, score, état de complétion
- Paramètres utilisateur (difficulté, nombre, catégorie)
- Mode sombre

### 2. **Mélange aléatoire des réponses**
Combinaison des bonnes et mauvaises réponses avec mélange via `.sort(() => Math.random() - 0.5)` pour éviter que la bonne réponse soit toujours à la même position

### 3. **Décodage HTML**
Utilisation de la librairie `he` pour décoder les caractères HTML retournés par l'API (ex: `&quot;` → `"`, `&#039;` → `'`)

### 4. **Classes CSS dynamiques**
Application de différentes classes selon l'état du quiz :
- `selected` : réponse sélectionnée pendant le quiz (bleu)
- `correct-answer` : bonne réponse (vert) quand le quiz est terminé
- `wrong-answer` : mauvaise réponse sélectionnée (rouge)

### 5. **Validation des réponses**
Vérification que l'utilisateur a répondu à toutes les questions avant d'afficher les résultats avec message d'alerte

### 6. **Structure de données optimisée**
Utilisation d'un objet `{ 0: "answer1", 1: "answer2" }` pour stocker les réponses sélectionnées, avec l'index de la question comme clé

### 7. **Animations CSS avancées**
Formes géométriques animées en background (cercles, carrés, triangles) avec `@keyframes` et positionnement responsive selon la taille d'écran

### 8. **Accessibilité (a11y)**
- Labels ARIA sur tous les éléments interactifs
- Navigation au clavier complète (Tab, Enter)
- Effets `:focus-visible` pour distinguer navigation souris/clavier
- `fieldset` et `legend` pour regroupement sémantique des questions
- Attribut `disabled` sur les boutons après validation

### 9. **Dark mode**
Gestion du thème via `useEffect` et classe `.dark-mode` sur le body

### 10. **Organisation CSS modulaire**
Séparation des styles en deux fichiers :
- `index.css` : styles globaux, layout, animations
- `app.css` : styles des composants (StartScreen, Quiz, Results)

## 📁 Structure du projet
```
quizzical/
├── src/
│   ├── components/
│   │   ├── StartScreen.jsx
│   │   ├── Quiz.jsx
│   │   └── Question.jsx
│   ├── App.jsx
│   ├── App.css
│   └── index.css
├── public/
└── package.json
```

## 🎨 Architecture des composants

- **App** : Composant principal, gestion de l'état global et logique métier
- **StartScreen** : Écran de configuration (difficulté, nombre, catégorie)
- **Quiz** : Affichage de la liste des questions
- **Question** : Composant individuel de question avec ses réponses

## 🌐 Démo en ligne

[Voir la démo](https://quizzquestmatt.netlify.app/)

## 🔄 Évolutions futures possibles

- Ajout d'un timer par question
- Système de high scores avec localStorage
- Mode multijoueur
- Plus de catégories et modes de jeu (survival mode?)
- Statistiques de progression

## 📝 License

MIT

---

**Développé avec ❤️ par Matt** | [Portfolio](https://portfoliomattreact.netlify.app/) | [LinkedIn](https://www.linkedin.com/in/matthieu-juan-55568337a/)
