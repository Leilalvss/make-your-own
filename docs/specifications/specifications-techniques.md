
# CodeLearnWay - Spécifications techniques

## 1. Présentation du document

### 1.1. Objectif

Ce document décrit les choix techniques nécessaires à la conception, au développement, aux tests et au déploiement de l’application web **CodeLearnWay**.

Il précise notamment :

- l’architecture technique ;
- les technologies utilisées ;
- l’organisation du frontend et du backend ;
- la structure de la base de données ;
- les règles de sécurité ;
- les méthodes de test ;
- la gestion du code source ;
- le déploiement de l’application ;
- les outils de qualité et de CI/CD.

### 1.2. Public concerné

Ce document est destiné aux :

- développeurs frontend ;
- développeurs backend ;
- développeurs fullstack ;
- testeurs ;
- administrateurs système ;
- responsables du projet ;
- membres de l’équipe technique.

---

## 2. Présentation technique du projet

### 2.1. Type d’application

CodeLearnWay est une application web responsive permettant aux utilisateurs d’apprendre les bases de la programmation à travers :

- des parcours d’apprentissage ;
- des leçons ;
- des exercices interactifs ;
- des questions à choix multiples ;
- des questions Vrai/Faux ;
- un système de score ;
- un système d’expérience XP ;
- un suivi de progression.

### 2.2. Architecture générale

L’application repose sur une architecture en trois couches :

1. **Couche Présentation**
2. **Couche Métier**
3. **Couche Accès aux données**

Architecture globale :

```text
Utilisateur
    |
    v
Frontend React / TypeScript
    |
    | HTTP / REST API
    v
Backend Node.js / Express / TypeScript
    |
    v
Services métier et règles de gestion
    |
    v
Prisma ORM
    |
    v
Base de données PostgreSQL
```

### 2.3. Style d’architecture

L’application utilise une architecture :

- client-serveur ;
- modulaire ;
- orientée services ;
- basée sur une API REST ;
- organisée en couches ;
- évolutive et maintenable.

---

## 3. Technologies utilisées

### 3.1. Frontend

| Technologie | Utilisation |
|---|---|
| React | Création de l’interface utilisateur |
| TypeScript | Typage statique du code frontend |
| Vite | Initialisation et compilation du projet frontend |
| HTML5 | Structure sémantique des pages |
| CSS3 | Mise en forme et responsive design |
| React Router | Gestion de la navigation |
| Fetch API ou Axios | Communication avec l’API backend |

### 3.2. Backend

| Technologie | Utilisation |
|---|---|
| Node.js | Environnement d’exécution JavaScript |
| Express | Création du serveur HTTP et de l’API REST |
| TypeScript | Typage statique du code backend |
| Prisma | ORM et accès à la base de données |
| bcrypt | Hachage sécurisé des mots de passe |
| JWT ou session sécurisée | Authentification des utilisateurs |
| dotenv | Gestion des variables d’environnement |

### 3.3. Base de données

| Technologie | Utilisation |
|---|---|
| PostgreSQL | Stockage relationnel des données |
| Prisma Migrate | Gestion des migrations |
| Prisma Seed | Insertion de données initiales |
| SQL | Requêtes et gestion relationnelle |

### 3.4. Tests

| Outil | Utilisation |
|---|---|
| Vitest | Tests unitaires |
| Supertest | Tests des routes et de l’API |
| Playwright | Tests end-to-end |
| ESLint | Analyse statique du code |
| Prettier | Formatage automatique du code |

### 3.5. DevOps et déploiement

| Outil | Utilisation |
|---|---|
| Git | Gestion des versions |
| Gitea ou GitHub | Hébergement du dépôt Git |
| Docker | Conteneurisation de l’application |
| Docker Compose | Lancement des services en local |
| Gitea Actions ou GitHub Actions | Automatisation CI/CD |
| Nginx ou serveur équivalent | Distribution du frontend et reverse proxy éventuel |

---

## 4. Structure du projet

### 4.1. Organisation générale

Le projet est organisé en plusieurs parties :

```text
CodeLearnWay/
├── frontend/
├── backend/
├── docs/
├── docker-compose.yml
├── .env.example
├── .gitignore
├── README.md
└── package.json
```

### 4.2. Structure du frontend

```text
frontend/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── layouts/
│   ├── services/
│   ├── hooks/
│   ├── contexts/
│   ├── types/
│   ├── utils/
│   ├── routes/
│   ├── App.tsx
│   └── main.tsx
├── tests/
├── package.json
├── tsconfig.json
├── vite.config.ts
└── Dockerfile
```

### 4.3. Description des dossiers frontend

| Dossier | Responsabilité |
|---|---|
| `components/` | Composants réutilisables |
| `pages/` | Pages principales de l’application |
| `layouts/` | Structures communes des pages |
| `services/` | Communication avec l’API |
| `hooks/` | Hooks React personnalisés |
| `contexts/` | Gestion des états globaux |
| `types/` | Types TypeScript |
| `utils/` | Fonctions utilitaires |
| `routes/` | Configuration des routes |
| `assets/` | Images, icônes et fichiers statiques |
| `tests/` | Tests frontend |

### 4.4. Structure du backend

```text
backend/
├── src/
│   ├── config/
│   ├── controllers/
│   ├── services/
│   ├── repositories/
│   ├── routes/
│   ├── middlewares/
│   ├── validators/
│   ├── types/
│   ├── utils/
│   ├── app.ts
│   └── server.ts
├── prisma/
│   ├── schema.prisma
│   ├── migrations/
│   └── seed.ts
├── tests/
├── package.json
├── tsconfig.json
└── Dockerfile
```

### 4.5. Description des dossiers backend

| Dossier | Responsabilité |
|---|---|
| `config/` | Configuration de l’application |
| `controllers/` | Réception et traitement des requêtes HTTP |
| `services/` | Logique métier |
| `repositories/` | Accès aux données |
| `routes/` | Déclaration des routes API |
| `middlewares/` | Authentification, autorisation et gestion des erreurs |
| `validators/` | Validation des données entrantes |
| `types/` | Types et interfaces TypeScript |
| `utils/` | Fonctions utilitaires |
| `prisma/` | Schéma, migrations et seed de la base de données |
| `tests/` | Tests backend |

---

## 5. Architecture frontend

### 5.1. Responsabilités

Le frontend est responsable de :

- l’affichage des pages ;
- la navigation entre les écrans ;
- la gestion des formulaires ;
- la validation côté client ;
- l’affichage des messages d’erreur ;
- la communication avec l’API ;
- l’affichage de la progression ;
- l’expérience utilisateur ;
- l’adaptation aux différents écrans.

### 5.2. Pages principales

Les pages prévues sont :

- page d’accueil ;
- page d’inscription ;
- page de connexion ;
- tableau de bord ;
- liste des parcours ;
- détail d’un parcours ;
- détail d’une leçon ;
- page d’exercice ;
- page de résultat ;
- page de profil ;
- interface d’administration.

### 5.3. Composants réutilisables

Des composants réutilisables pourront être créés :

- `Button` ;
- `Input` ;
- `Modal` ;
- `Card` ;
- `Navbar` ;
- `Footer` ;
- `Loader` ;
- `ErrorMessage` ;
- `ProgressBar` ;
- `ExerciseCard` ;
- `LessonCard` ;
- `PathCard` ;
- `ProtectedRoute`.

### 5.4. Gestion de la navigation

La navigation sera gérée avec React Router.

Exemples de routes :

```text
/
/register
/login
/dashboard
/paths
/paths/:pathId
/lessons/:lessonId
/exercises/:exerciseId
/results/:resultId
/profile
/admin
```

### 5.5. Routes protégées

Les pages privées seront protégées par un composant de type :

```text
ProtectedRoute
```

Ce composant vérifie :

- si l’utilisateur est authentifié ;
- si son token ou sa session est valide ;
- si son rôle autorise l’accès à la page.

---

## 6. Architecture backend

### 6.1. Responsabilités

Le backend est responsable de :

- recevoir les requêtes HTTP ;
- vérifier les données reçues ;
- authentifier les utilisateurs ;
- vérifier les autorisations ;
- appliquer les règles métier ;
- communiquer avec la base de données ;
- calculer les scores ;
- calculer les XP ;
- enregistrer la progression ;
- retourner des réponses JSON ;
- gérer les erreurs.

### 6.2. Organisation en couches

Le backend est organisé de la manière suivante :

```text
Routes
   |
   v
Controllers
   |
   v
Services métier
   |
   v
Repositories
   |
   v
Prisma
   |
   v
PostgreSQL
```

### 6.3. Routes

Les routes définissent les endpoints disponibles dans l’API.

Exemples :

```text
/api/auth
/api/users
/api/paths
/api/lessons
/api/exercises
/api/progress
/api/admin
```

### 6.4. Controllers

Les controllers sont responsables de :

- récupérer les paramètres de la requête ;
- appeler le service adapté ;
- retourner la réponse HTTP ;
- gérer les codes de réponse ;
- ne pas contenir une logique métier trop importante.

### 6.5. Services

Les services contiennent la logique métier de l’application.

Exemples :

- `auth.service.ts` ;
- `user.service.ts` ;
- `path.service.ts` ;
- `lesson.service.ts` ;
- `exercise.service.ts` ;
- `progress.service.ts` ;
- `xp.service.ts`.

### 6.6. Repositories

Les repositories sont responsables de l’accès aux données.

Ils utilisent Prisma pour :

- rechercher des utilisateurs ;
- créer des parcours ;
- récupérer des leçons ;
- enregistrer les réponses ;
- sauvegarder la progression ;
- modifier ou supprimer des données.

---

## 7. API REST

### 7.1. Principes

L’API respecte les principes suivants :

- utilisation du protocole HTTP ;
- échanges au format JSON ;
- routes organisées par ressources ;
- utilisation des méthodes HTTP ;
- réponses avec des codes HTTP adaptés ;
- validation des données entrantes ;
- authentification des routes privées.

### 7.2. Méthodes HTTP

| Méthode | Utilisation |
|---|---|
| `GET` | Récupérer une ressource |
| `POST` | Créer une ressource ou effectuer une action |
| `PUT` | Remplacer une ressource |
| `PATCH` | Modifier partiellement une ressource |
| `DELETE` | Supprimer une ressource |

### 7.3. Endpoints d’authentification

| Méthode | Endpoint | Description |
|---|---|---|
| `POST` | `/api/auth/register` | Créer un compte |
| `POST` | `/api/auth/login` | Se connecter |
| `POST` | `/api/auth/logout` | Se déconnecter |
| `GET` | `/api/auth/me` | Récupérer l’utilisateur connecté |

### 7.4. Endpoints utilisateurs

| Méthode | Endpoint | Description |
|---|---|---|
| `GET` | `/api/users/me` | Récupérer son profil |
| `PATCH` | `/api/users/me` | Modifier son profil |
| `PATCH` | `/api/users/me/password` | Modifier son mot de passe |

### 7.5. Endpoints des parcours

| Méthode | Endpoint | Description |
|---|---|---|
| `GET` | `/api/paths` | Récupérer les parcours |
| `GET` | `/api/paths/:id` | Récupérer un parcours |
| `POST` | `/api/paths` | Créer un parcours |
| `PATCH` | `/api/paths/:id` | Modifier un parcours |
| `DELETE` | `/api/paths/:id` | Supprimer un parcours |

### 7.6. Endpoints des leçons

| Méthode | Endpoint | Description |
|---|---|---|
| `GET` | `/api/lessons/:id` | Récupérer une leçon |
| `POST` | `/api/lessons` | Créer une leçon |
| `PATCH` | `/api/lessons/:id` | Modifier une leçon |
| `DELETE` | `/api/lessons/:id` | Supprimer une leçon |

### 7.7. Endpoints des exercices

| Méthode | Endpoint | Description |
|---|---|---|
| `GET` | `/api/exercises/:id` | Récupérer un exercice |
| `POST` | `/api/exercises/:id/submit` | Envoyer une réponse |
| `POST` | `/api/exercises` | Créer un exercice |
| `PATCH` | `/api/exercises/:id` | Modifier un exercice |
| `DELETE` | `/api/exercises/:id` | Supprimer un exercice |

### 7.8. Endpoints de progression

| Méthode | Endpoint | Description |
|---|---|---|
| `GET` | `/api/progress` | Récupérer sa progression |
| `GET` | `/api/progress/:pathId` | Récupérer la progression d’un parcours |
| `POST` | `/api/progress` | Enregistrer une progression |
| `PATCH` | `/api/progress/:id` | Mettre à jour une progression |

---

## 8. Format des réponses API

### 8.1. Réponse de succès

Exemple :

```json
{
  "success": true,
  "data": {
    "id": "user-id",
    "email": "user@example.com"
  }
}
```

### 8.2. Réponse d’erreur

Exemple :

```json
{
  "success": false,
  "error": {
    "code": "INVALID_CREDENTIALS",
    "message": "Les identifiants sont incorrects."
  }
}
```

### 8.3. Codes HTTP utilisés

| Code | Signification |
|---|---|
| `200` | Requête réussie |
| `201` | Ressource créée |
| `204` | Requête réussie sans contenu |
| `400` | Requête incorrecte |
| `401` | Non authentifié |
| `403` | Accès interdit |
| `404` | Ressource introuvable |
| `409` | Conflit de données |
| `422` | Données non valides |
| `500` | Erreur interne du serveur |

---

## 9. Base de données

### 9.1. Système utilisé

La base de données utilisée est **PostgreSQL**.

PostgreSQL est choisi pour :

- sa fiabilité ;
- son modèle relationnel ;
- la gestion des contraintes ;
- la compatibilité avec Prisma ;
- la gestion des relations entre les données ;
- son utilisation courante dans les applications web.

### 9.2. ORM

L’accès à la base de données sera réalisé avec **Prisma ORM**.

Prisma permet :

- de définir les modèles de données ;
- de générer un client TypeScript ;
- d’exécuter des requêtes ;
- de gérer les relations ;
- de créer des migrations ;
- de faciliter la maintenance du schéma.

### 9.3. Entités principales

Les principales entités prévues sont :

- `User` ;
- `Role` ;
- `LearningPath` ;
- `Lesson` ;
- `Exercise` ;
- `Question` ;
- `Answer` ;
- `UserProgress` ;
- `ExerciseAttempt` ;
- `XPTransaction`.

### 9.4. Exemple de relations

```text
User
 ├── UserProgress
 ├── ExerciseAttempt
 └── XPTransaction

LearningPath
 └── Lesson
      └── Exercise
           └── Question
                └── Answer
```

### 9.5. Contraintes principales

La base de données doit respecter les contraintes suivantes :

- l’adresse email d’un utilisateur doit être unique ;
- les relations entre les entités doivent être cohérentes ;
- les identifiants doivent être uniques ;
- les données obligatoires ne doivent pas être nulles ;
- les suppressions doivent préserver l’intégrité référentielle ;
- les données personnelles doivent être protégées ;
- les migrations doivent être versionnées.

### 9.6. Migrations

Les modifications de la structure de la base de données seront effectuées avec Prisma Migrate.

Exemples de commandes :

```bash
npx prisma migrate dev
npx prisma migrate deploy
npx prisma generate
```

### 9.7. Données initiales

Un fichier `seed.ts` pourra être utilisé pour créer :

- un compte administrateur de test ;
- des parcours de démonstration ;
- des leçons ;
- des exercices ;
- des questions ;
- des réponses.

Les données de test ne doivent pas contenir de véritables informations personnelles.

---

## 10. Authentification et sécurité

### 10.1. Authentification

L’application utilisera :

- JWT sécurisé ;
- ou des sessions sécurisées.

La solution retenue devra permettre :

- l’identification de l’utilisateur ;
- la protection des routes privées ;
- la gestion de la déconnexion ;
- la vérification de l’expiration ;
- la gestion des rôles.

### 10.2. Mots de passe

Les mots de passe doivent :

- être hachés avec bcrypt ou une solution équivalente ;
- ne jamais être stockés en clair ;
- ne jamais apparaître dans les logs ;
- respecter une longueur minimale ;
- être transmis uniquement via HTTPS en production.

### 10.3. Autorisation

Le backend doit vérifier les droits de l’utilisateur avant chaque action sensible.

Exemples :

- un utilisateur ne peut modifier que son propre profil ;
- un étudiant ne peut pas modifier un parcours ;
- seul un administrateur peut gérer les contenus pédagogiques ;
- un utilisateur ne peut pas consulter la progression d’un autre utilisateur.

### 10.4. Validation des entrées

Les données reçues doivent être validées côté frontend et côté backend.

Les validations concernent notamment :

- les emails ;
- les mots de passe ;
- les identifiants ;
- les titres ;
- les descriptions ;
- les réponses aux exercices ;
- les paramètres des requêtes.

### 10.5. Protection contre les injections

L’application doit limiter les risques d’injection SQL grâce à :

- l’utilisation de Prisma ;
- des requêtes paramétrées ;
- la validation des entrées ;
- l’absence de concaténation SQL non contrôlée.

### 10.6. Variables d’environnement

Les informations sensibles doivent être stockées dans des variables d’environnement.

Exemples :

```env
DATABASE_URL=
JWT_SECRET=
PORT=
NODE_ENV=
CLIENT_URL=
```

Les fichiers contenant de véritables secrets ne doivent jamais être commités dans Git.

Un fichier `.env.example` sera fourni.

### 10.7. Gestion des erreurs

Les erreurs retournées à l’utilisateur ne doivent pas révéler :

- les mots de passe ;
- les tokens ;
- les requêtes SQL ;
- les chemins internes du serveur ;
- les informations sensibles ;
- les détails techniques inutiles.

---

## 11. Règles métier techniques

### 11.1. Gestion de l’XP

Les règles d’XP seront centralisées dans un service métier.

Exemple :

```text
Réponse correcte       : +10 XP
Leçon terminée         : +50 XP
Streak quotidien       : +20 XP
```

Le système doit vérifier qu’une même action ne donne pas plusieurs fois les mêmes XP, sauf si cela est explicitement autorisé.

### 11.2. Calcul du score

Le score est calculé à partir des réponses de l’utilisateur.

Exemple :

```text
Score = nombre de réponses correctes / nombre total de questions × 100
```

### 11.3. Calcul du niveau

Le niveau est calculé à partir du nombre total de XP.

Exemple :

```text
0 XP       → Niveau 1
100 XP     → Niveau 2
250 XP     → Niveau 3
500 XP     → Niveau 4
```

Les valeurs pourront être modifiées pendant le développement.

### 11.4. Sauvegarde de la progression

La progression doit être liée à l’identifiant de l’utilisateur.

Elle peut contenir :

- le parcours suivi ;
- les leçons terminées ;
- les exercices terminés ;
- les réponses correctes ;
- le score ;
- les XP obtenus ;
- la date de dernière activité.

---

## 12. Tests

### 12.1. Objectifs

Les tests permettent de vérifier :

- le bon fonctionnement des fonctionnalités ;
- la conformité aux règles métier ;
- la sécurité des routes ;
- la fiabilité des calculs ;
- la stabilité de l’application ;
- l’absence de régression.

### 12.2. Tests unitaires

Les tests unitaires porteront notamment sur :

- le calcul de l’XP ;
- le calcul du niveau ;
- la validation des réponses ;
- le calcul du score ;
- la validation des formulaires ;
- l’attribution des récompenses ;
- les fonctions utilitaires.

### 12.3. Tests d’intégration

Les tests d’intégration porteront notamment sur :

- l’inscription ;
- la connexion ;
- la déconnexion ;
- la création d’un parcours ;
- la création d’une leçon ;
- la création d’un exercice ;
- la sauvegarde de la progression ;
- l’accès aux routes protégées ;
- les permissions administrateur.

### 12.4. Tests end-to-end

Les tests end-to-end vérifieront les scénarios utilisateur complets.

Exemple de scénario principal :

```text
1. L’utilisateur ouvre CodeLearnWay.
2. Il crée un compte.
3. Il se connecte.
4. Il choisit un parcours JavaScript.
5. Il ouvre une leçon.
6. Il répond aux questions.
7. Il termine la leçon.
8. Le score est calculé.
9. Les XP sont attribués.
10. La progression est sauvegardée.
11. Le dashboard affiche les nouvelles données.
```

### 12.5. Commandes de test

Exemples :

```bash
npm run test
npm run test:watch
npm run test:coverage
npm run test:e2e
```

---

## 13. Qualité du code

### 13.1. TypeScript

Le projet utilise TypeScript afin de :

- réduire les erreurs de typage ;
- améliorer la lisibilité ;
- faciliter la maintenance ;
- améliorer l’autocomplétion ;
- sécuriser les échanges entre frontend et backend.

### 13.2. ESLint

ESLint sera utilisé pour détecter :

- les erreurs potentielles ;
- les variables inutilisées ;
- les mauvaises pratiques ;
- les incohérences de code.

Commande :

```bash
npm run lint
```

### 13.3. Prettier

Prettier sera utilisé pour uniformiser le formatage du code.

Exemple :

```bash
npm run format
```

### 13.4. Convention de nommage

Les conventions suivantes seront appliquées :

- composants React en `PascalCase` ;
- fonctions et variables en `camelCase` ;
- constantes globales en `UPPER_SNAKE_CASE` si nécessaire ;
- fichiers de composants en `PascalCase.tsx` ;
- fichiers de services en `kebab-case.service.ts` ou selon une convention définie ;
- noms de tables et modèles cohérents avec Prisma.

---

## 14. Gestion du code source

### 14.1. Outil utilisé

Le code source sera versionné avec Git.

Le dépôt pourra être hébergé sur :

- Gitea ;
- GitHub ;
- une autre plateforme Git compatible.

### 14.2. Branches principales

Branches prévues :

```text
main
develop
feature/*
fix/*
hotfix/*
docs/*
```

### 14.3. Convention de nommage des branches

Exemples :

```text
feature/authentication
feature/learning-paths
feature/exercise-validation
fix/login-error
docs/technical-specifications
```

### 14.4. Convention des commits

Les commits utiliseront une convention claire.

Exemples :

```text
feat: add user registration
fix: correct XP calculation
docs: add technical specifications
test: add authentication tests
refactor: improve progress service
chore: update dependencies
```

### 14.5. Revue de code

Avant la fusion d’une branche, il est recommandé de vérifier :

- la lisibilité du code ;
- le respect de l’architecture ;
- la présence des tests ;
- l’absence de secrets ;
- la conformité aux règles métier ;
- le résultat du lint ;
- le résultat du build.

---

## 15. Dockerisation

### 15.1. Objectif

Docker permet d’obtenir un environnement de développement reproductible.

Les services prévus sont :

- frontend ;
- backend ;
- PostgreSQL.

### 15.2. Services Docker

Architecture possible :

```text
Docker Compose
├── frontend
├── backend
└── database
```

### 15.3. Exemple de fichier Docker Compose

```yaml
services:
  frontend:
    build: ./frontend
    ports:
      - "5173:5173"
    depends_on:
      - backend

  backend:
    build: ./backend
    ports:
      - "3000:3000"
    depends_on:
      - database

  database:
    image: postgres:latest
    environment:
      POSTGRES_USER: codelearnway
      POSTGRES_PASSWORD: change_me
      POSTGRES_DB: codelearnway
    ports:
      - "5432:5432"
```

Les valeurs sensibles doivent être placées dans un fichier `.env` et non directement dans le dépôt.

### 15.4. Commandes Docker

Lancer les services :

```bash
docker compose up --build
```

Arrêter les services :

```bash
docker compose down
```

Afficher les logs :

```bash
docker compose logs -f
```

---

## 16. CI/CD

### 16.1. Objectif

Le pipeline CI/CD permet d’automatiser les vérifications et les étapes de livraison.

### 16.2. Étapes du pipeline

Le pipeline pourra effectuer les étapes suivantes :

```text
Installation des dépendances
        |
        v
Vérification du formatage
        |
        v
Lint
        |
        v
Tests unitaires
        |
        v
Tests d’intégration
        |
        v
Build frontend
        |
        v
Build backend
        |
        v
Création des images Docker
        |
        v
Déploiement éventuel
```

### 16.3. Outils possibles

Le pipeline peut être réalisé avec :

- Gitea Actions ;
- GitHub Actions ;
- GitLab CI ;
- un autre outil compatible avec le dépôt utilisé.

### 16.4. Conditions de validation

Une branche ne doit pas être fusionnée si :

- le lint échoue ;
- les tests échouent ;
- le build échoue ;
- une erreur de typage est détectée ;
- une vulnérabilité critique est identifiée.

---

## 17. Responsive design et accessibilité

### 17.1. Responsive design

L’interface doit fonctionner sur :

- smartphone ;
- tablette ;
- ordinateur portable ;
- écran desktop.

Les éléments doivent s’adapter à la largeur de l’écran :

- menus ;
- cartes ;
- formulaires ;
- boutons ;
- tableaux ;
- exercices ;
- barres de progression.

### 17.2. Accessibilité

L’application doit respecter les bonnes pratiques suivantes :

- utiliser des éléments HTML sémantiques ;
- associer chaque champ à un label ;
- permettre la navigation au clavier ;
- afficher des messages d’erreur compréhensibles ;
- conserver un contraste suffisant ;
- utiliser des textes alternatifs pour les images ;
- ne pas dépendre uniquement de la couleur ;
- conserver une structure de titres cohérente.

---

## 18. Journalisation et surveillance

### 18.1. Logs techniques

Le backend pourra enregistrer :

- les erreurs serveur ;
- les erreurs de base de données ;
- les requêtes importantes ;
- les événements d’authentification ;
- les erreurs de validation.

### 18.2. Informations à ne pas enregistrer

Les logs ne doivent pas contenir :

- les mots de passe ;
- les tokens complets ;
- les données personnelles inutiles ;
- les secrets d’environnement ;
- les informations sensibles.

### 18.3. Gestion des erreurs

Une gestion centralisée des erreurs sera mise en place avec un middleware Express.

Exemple de fonctionnement :

```text
Erreur dans une route
        |
        v
Middleware de gestion des erreurs
        |
        v
Log technique
        |
        v
Réponse JSON adaptée au client
```

---

## 19. Déploiement

### 19.1. Préparation

Avant le déploiement, les éléments suivants doivent être vérifiés :

- variables d’environnement configurées ;
- base de données disponible ;
- migrations exécutées ;
- build frontend réussi ;
- build backend réussi ;
- tests validés ;
- secrets protégés ;
- accès administrateur sécurisé.

### 19.2. Environnement de production

L’environnement de production doit utiliser :

- `NODE_ENV=production` ;
- HTTPS ;
- une base de données sécurisée ;
- des mots de passe forts ;
- des variables d’environnement protégées ;
- des logs contrôlés ;
- des sauvegardes de la base de données.

### 19.3. Documentation du déploiement

Le fichier `README.md` doit expliquer :

- les prérequis ;
- l’installation ;
- la configuration ;
- les variables d’environnement ;
- le lancement en développement ;
- le lancement avec Docker ;
- les migrations ;
- les tests ;
- le build ;
- le déploiement.

---

## 20. Performances

L’application doit limiter les traitements inutiles.

Les bonnes pratiques suivantes seront appliquées :

- éviter les requêtes SQL inutiles ;
- récupérer uniquement les champs nécessaires ;
- utiliser la pagination si nécessaire ;
- éviter les appels API répétitifs ;
- optimiser les composants React ;
- utiliser des index de base de données adaptés ;
- limiter la taille des réponses API ;
- compresser les ressources en production.

---

## 21. Évolutivité

L’architecture doit permettre d’ajouter ultérieurement :

- les badges ;
- les séries quotidiennes ;
- le classement ;
- les notifications ;
- les statistiques avancées ;
- les exercices de texte à compléter ;
- les exercices de remise en ordre ;
- les exercices de correction de code ;
- un éditeur de code ;
- un sandbox d’exécution ;
- l’authentification OAuth ;
- une application mobile ;
- les fonctionnalités temps réel avec WebSocket.

Les futures fonctionnalités devront respecter l’architecture existante et ne pas dégrader les fonctionnalités du MVP.

---

## 22. Contraintes techniques

Le projet doit respecter les contraintes suivantes :

- utiliser TypeScript pour le frontend et le backend ;
- utiliser React pour le frontend ;
- utiliser Node.js et Express pour le backend ;
- utiliser PostgreSQL comme base relationnelle ;
- utiliser Prisma pour l’accès aux données ;
- sécuriser les mots de passe ;
- protéger les routes privées ;
- valider les données entrantes ;
- versionner le code avec Git ;
- documenter les choix techniques ;
- écrire des tests ;
- fournir une configuration Docker ;
- prévoir une solution CI/CD ;
- ne jamais versionner de secrets.

---

## 23. Critères techniques d’acceptation

### 23.1. Architecture

- [ ] L’application respecte une architecture en couches.
- [ ] Le frontend et le backend sont séparés.
- [ ] La logique métier est centralisée dans les services.
- [ ] L’accès aux données est réalisé avec Prisma.

### 23.2. Frontend

- [ ] Le frontend utilise React et TypeScript.
- [ ] La navigation utilise React Router.
- [ ] Les pages principales sont disponibles.
- [ ] Les routes privées sont protégées.
- [ ] L’interface est responsive.
- [ ] Les erreurs sont affichées clairement.

### 23.3. Backend

- [ ] Le backend utilise Node.js et Express.
- [ ] L’API utilise le format JSON.
- [ ] Les routes sont organisées par ressources.
- [ ] Les données entrantes sont validées.
- [ ] Les erreurs sont gérées par un middleware centralisé.
- [ ] Les permissions sont vérifiées.

### 23.4. Base de données

- [ ] PostgreSQL est configuré.
- [ ] Prisma est installé et configuré.
- [ ] Les modèles principaux sont définis.
- [ ] Les migrations sont disponibles.
- [ ] Les données initiales peuvent être insérées.
- [ ] Les relations sont cohérentes.

### 23.5. Sécurité

- [ ] Les mots de passe sont hachés.
- [ ] Les secrets sont stockés dans des variables d’environnement.
- [ ] Les routes privées nécessitent une authentification.
- [ ] Les routes administrateur nécessitent une autorisation.
- [ ] Les messages d’erreur ne révèlent pas de données sensibles.

### 23.6. Tests et qualité

- [ ] Les tests unitaires sont présents.
- [ ] Les tests API sont présents.
- [ ] Les tests end-to-end principaux sont présents.
- [ ] ESLint fonctionne.
- [ ] Le build frontend fonctionne.
- [ ] Le build backend fonctionne.

### 23.7. Déploiement

- [ ] Les Dockerfiles sont disponibles.
- [ ] Le fichier Docker Compose est disponible.
- [ ] Le fichier `.env.example` est présent.
- [ ] Les commandes d’installation sont documentées.
- [ ] Le pipeline CI/CD est configuré ou documenté.

---

## 24. Conclusion

Les spécifications techniques de CodeLearnWay définissent une architecture moderne, modulaire et évolutive.

L’utilisation de React, TypeScript, Node.js, Express, PostgreSQL et Prisma permet de construire une application :

- maintenable ;
- sécurisée ;
- testable ;
- responsive ;
- évolutive ;
- adaptée aux besoins du projet.

Cette base technique permettra de développer le MVP puis d’ajouter progressivement les fonctionnalités prévues dans les versions futures.