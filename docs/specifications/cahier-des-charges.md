# Cahier des charges

# 1. Présentation du projet

## 1.1 Nom du projet

**CodeLearnWay**

## 1.2 Type d'application

CodeLearnWay est une application web responsive et accessible dédiée à l'apprentissage de la programmation.

L'application propose :

- des leçons courtes ;
- des quiz ;
- des exercices interactifs ;
- un système de progression ;
- un système de points d'expérience (XP) ;
- un système de niveaux ;
- une interface d'administration du contenu pédagogique.

## 1.3 Concept

CodeLearnWay s'inspire des mécanismes de gamification utilisés par les plateformes modernes d'apprentissage.

L'objectif est de permettre à un utilisateur débutant d'apprendre progressivement les bases de la programmation grâce à des sessions courtes et interactives.

L'utilisateur peut :

- suivre des parcours pédagogiques ;
- consulter des leçons ;
- répondre à différents types de questions ;
- réaliser des exercices ;
- suivre sa progression ;
- gagner des points d'expérience ;
- débloquer des niveaux.

Des fonctionnalités supplémentaires de gamification, telles que les séries de connexion (*streaks*) et les badges, pourront être ajoutées dans les versions ultérieures.

---

# 2. Contexte et problématique

L'apprentissage de la programmation peut être difficile pour les débutants en raison de la quantité importante de notions à assimiler et du manque de pratique régulière.

Les ressources disponibles sont souvent :

- longues ;
- théoriques ;
- peu interactives ;
- difficiles à suivre pour un débutant.

CodeLearnWay cherche à répondre à cette problématique en proposant une expérience d'apprentissage :

- courte ;
- progressive ;
- interactive ;
- accessible aux débutants ;
- orientée vers la pratique ;
- motivante grâce à la gamification.

## Problématique

> Comment proposer une plateforme simple, interactive et progressive permettant aux débutants d'apprendre à coder, de pratiquer régulièrement et de développer leurs compétences étape par étape ?

---

# 3. Objectifs du projet

## 3.1 Objectif principal

Développer une plateforme web interactive permettant aux débutants d'apprendre la programmation à travers des cours, des quiz et des exercices.

## 3.2 Objectifs fonctionnels

L'application devra permettre :

- de créer un compte ;
- de se connecter ;
- de se déconnecter ;
- de consulter les parcours disponibles ;
- de consulter les leçons ;
- de suivre des leçons ;
- de répondre à des quiz ;
- de réaliser des exercices ;
- d'obtenir un score ;
- de gagner des XP ;
- de suivre sa progression ;
- de débloquer des niveaux ;
- de gérer son profil.

Les utilisateurs disposant de droits spécifiques pourront également gérer le contenu pédagogique.

## 3.3 Objectifs techniques

Le projet devra également démontrer la capacité à :

- concevoir une application en couches ;
- concevoir une base de données relationnelle ;
- développer une API REST ;
- sécuriser l'authentification ;
- gérer les autorisations ;
- appliquer des règles de validation ;
- gérer les erreurs ;
- écrire des tests automatisés ;
- utiliser Git ;
- mettre en place une intégration continue ;
- conteneuriser l'application avec Docker ;
- préparer son déploiement ;
- produire une documentation technique complète.

---

# 4. Utilisateurs et rôles

L'application possède trois rôles principaux :

- Visiteur ;
- Étudiant ;
- Administrateur / Formateur.

## 4.1 Visiteur

Un visiteur est un utilisateur non authentifié.

### Permissions

Il peut :

- consulter la page d'accueil ;
- consulter les parcours disponibles ;
- consulter les informations générales d'une formation ;
- accéder aux pages de connexion et d'inscription.

### Restrictions

Il ne peut pas :

- enregistrer sa progression ;
- gagner des XP ;
- accéder à son espace personnel ;
- répondre à des activités nécessitant une authentification ;
- gérer du contenu pédagogique.

## 4.2 Étudiant

L'étudiant est l'utilisateur principal de l'application.

### Permissions

Il peut :

- créer un compte ;
- se connecter ;
- se déconnecter ;
- modifier son profil ;
- consulter les parcours ;
- consulter les leçons ;
- commencer une leçon ;
- répondre aux questions ;
- réaliser des exercices ;
- terminer une leçon ;
- obtenir un score ;
- gagner des XP ;
- consulter son niveau ;
- consulter sa progression ;
- consulter son historique d'apprentissage.

Les badges et les séries quotidiennes pourront être ajoutés dans une version ultérieure.

## 4.3 Administrateur / Formateur

L'utilisateur disposant de droits d'administration peut gérer le contenu pédagogique.

### Permissions

Il peut :

- créer un parcours ;
- modifier un parcours ;
- supprimer un parcours ;
- créer une leçon ;
- modifier une leçon ;
- supprimer une leçon ;
- créer des questions ;
- modifier des questions ;
- supprimer des questions.

La consultation des utilisateurs et des statistiques pourra être ajoutée dans une version ultérieure.

La gestion des rôles doit être protégée par un système d'autorisation.

---

# 5. Périmètre fonctionnel

## 5.1 Authentification

L'application devra permettre :

- l'inscription ;
- la connexion ;
- la déconnexion ;
- la gestion de session ;
- la protection des routes privées ;
- la gestion des rôles ;
- la validation des informations d'identification.

Les mots de passe ne devront jamais être enregistrés en clair.

Ils devront être stockés sous forme de hash sécurisé à l'aide d'un algorithme adapté, par exemple bcrypt ou une solution équivalente.

## 5.2 Gestion du profil

Un utilisateur connecté pourra :

- consulter son profil ;
- modifier son nom ;
- modifier son nom d'utilisateur ;
- modifier certaines informations personnelles ;
- consulter son niveau ;
- consulter son nombre de XP ;
- consulter sa progression.

Un utilisateur ne pourra modifier que ses propres informations personnelles.

## 5.3 Parcours pédagogiques

Un parcours représente une thématique d'apprentissage.

### Exemples de parcours

- JavaScript débutant ;
- HTML & CSS ;
- Git & GitHub ;
- Python débutant.

Chaque parcours pourra contenir plusieurs leçons.

Un parcours devra notamment posséder :

- un titre ;
- une description ;
- un niveau de difficulté ;
- un ordre ou une structure pédagogique ;
- un ensemble de leçons.

## 5.4 Leçons

Une leçon contient :

- un titre ;
- une description ;
- du contenu pédagogique ;
- un niveau de difficulté ;
- un ordre ;
- plusieurs exercices.

Les leçons seront présentées progressivement selon l'ordre défini dans le parcours.

## 5.5 Exercices

Plusieurs types d'exercices pourront être proposés.

### Types inclus dans le MVP

#### QCM

L'utilisateur sélectionne une réponse parmi plusieurs propositions.

#### Vrai / Faux

L'utilisateur indique si une affirmation est vraie ou fausse.

### Types prévus pour une version ultérieure

- texte à compléter ;
- remise en ordre ;
- correction de code ;
- mini challenge.

---

# 6. Système de progression

La progression constitue une fonctionnalité centrale de CodeLearnWay.

Lorsqu'un utilisateur termine correctement une activité, il peut recevoir des points d'expérience, appelés **XP**.

## 6.1 Attribution des XP

| Action | XP attribués |
|---|---:|
| Question correcte | +10 XP |
| Leçon terminée | +50 XP |

Les XP sont attribués selon les règles métier définies par l'application.

Les XP associés à une même validation ne peuvent pas être attribués plusieurs fois.

## 6.2 Système de niveaux

Le niveau de l'utilisateur dépend de son nombre total de XP.

### Exemple de niveaux

| Niveau | XP minimum |
|---|---:|
| Niveau 1 | 0 XP |
| Niveau 2 | 100 XP |
| Niveau 3 | 250 XP |
| Niveau 4 | 500 XP |
| Niveau suivant | À définir |

Les valeurs pourront être adaptées pendant le développement.

## 6.3 Fonctionnalités prévues ultérieurement

Les fonctionnalités suivantes pourront être ajoutées après la validation du MVP :

- séries quotidiennes (*streaks*) ;
- badges ;
- statistiques avancées ;
- classement des utilisateurs ;
- notifications.

---

# 7. Système de badges

Le système de badges est prévu pour une version ultérieure de l'application.

Il pourra être intégré après la validation du MVP.

Des badges pourront être débloqués automatiquement selon certaines actions.

### Exemples de badges

- première leçon terminée ;
- 100 XP obtenus ;
- 5 leçons terminées ;
- 7 jours consécutifs ;
- premier challenge réussi ;
- parcours terminé.

Les badges permettront de démontrer l'implémentation de règles métier supplémentaires.

---

# 8. Règles métier principales

## BR-01 — Unicité de l'adresse email

Une adresse email ne peut être associée qu'à un seul compte.

## BR-02 — Sécurité du mot de passe

Un mot de passe doit respecter les règles minimales de sécurité définies par l'application.

## BR-03 — Protection des données personnelles

Un utilisateur non authentifié ne peut pas accéder aux données personnelles d'un autre utilisateur.

## BR-04 — Autorisation de gestion du contenu

Seuls les utilisateurs autorisés peuvent créer, modifier ou supprimer du contenu pédagogique.

## BR-05 — Authentification obligatoire pour la progression

Un utilisateur doit être authentifié pour enregistrer sa progression.

## BR-06 — Attribution des XP

Une activité terminée correctement peut attribuer des XP.

## BR-07 — Attribution unique des XP

Les XP associés à une activité ne peuvent être attribués qu'une seule fois pour une même validation.

Un utilisateur peut toutefois refaire une activité déjà terminée, mais ne reçoit pas à nouveau les XP associés à sa première validation.

## BR-08 — Association de la progression au compte

La progression d'un utilisateur est associée à son compte.

## BR-09 — Modification des informations personnelles

Un utilisateur ne peut modifier que ses propres informations personnelles.

## BR-10 — Cohérence des données

Les données supprimées doivent respecter les règles de cohérence et d'intégrité de la base de données.

## BR-11 — Association d'une leçon à un parcours

Une leçon appartient à un seul parcours.

## BR-12 — Ordre des leçons

Une leçon est accessible selon l'ordre défini dans son parcours.

Les règles exactes de déblocage pourront être précisées pendant la conception.

## BR-13 — Progression individuelle

La progression d'une leçon est propre à chaque utilisateur.

---

# 9. Exigences fonctionnelles

Les exigences fonctionnelles définissent les principales fonctionnalités attendues de l'application CodeLearnWay ainsi que leur niveau de priorité.

| ID | Exigence fonctionnelle | Priorité |
|---|---|---|
| FR-01 | Inscription | Must |
| FR-02 | Connexion | Must |
| FR-03 | Déconnexion | Must |
| FR-04 | Gestion du profil | Must |
| FR-05 | Consultation des parcours | Must |
| FR-06 | Consultation des leçons | Must |
| FR-07 | Réalisation d'un quiz | Must |
| FR-08 | Enregistrement de la progression | Must |
| FR-09 | Attribution des XP | Must |
| FR-10 | Système de niveaux | Must |
| FR-11 | Système de badges | Could |
| FR-12 | Création d'un parcours | Must |
| FR-13 | Modification d'un parcours | Must |
| FR-14 | Suppression d'un parcours | Must |
| FR-15 | Gestion des leçons | Must |
| FR-16 | Gestion des exercices | Must |
| FR-17 | Administration des utilisateurs | Could |
| FR-18 | Statistiques | Could |
| FR-19 | Notifications | Could |
| FR-20 | Classement des utilisateurs | Could |

## 9.1 Légende des priorités

- **Must** : fonctionnalité indispensable au MVP.
- **Should** : fonctionnalité importante mais non indispensable.
- **Could** : fonctionnalité optionnelle pouvant être ajoutée ultérieurement.

---

# 10. Exigences non fonctionnelles

## 10.1 Performance

L'application devra proposer des temps de réponse raisonnables.

Elle devra notamment :

- éviter les requêtes inutiles vers la base de données ;
- limiter les traitements coûteux ;
- charger les données de manière adaptée ;
- rester utilisable avec une connexion internet standard.

## 10.2 Sécurité

L'application devra notamment prévoir :

- le hashage sécurisé des mots de passe ;
- la validation des entrées utilisateur ;
- le contrôle des autorisations ;
- la protection des routes privées ;
- la gestion sécurisée des variables d'environnement ;
- la protection contre les injections SQL ;
- la limitation des informations exposées dans les messages d'erreur ;
- la gestion sécurisée des sessions ou des tokens ;
- la journalisation des erreurs techniques ;
- la protection des données personnelles.

## 10.3 Accessibilité

L'interface devra respecter autant que possible les bonnes pratiques d'accessibilité.

Elle devra notamment prévoir :

- la navigation au clavier ;
- un contraste suffisant ;
- des labels explicites ;
- une structure HTML sémantique ;
- des messages d'erreur compréhensibles ;
- une utilisation adaptée avec les technologies d'assistance.

## 10.4 Responsive Design

L'application devra fonctionner sur :

- smartphone ;
- tablette ;
- ordinateur.

L'interface devra s'adapter aux différentes tailles d'écran.

## 10.5 Maintenabilité

Le code devra être :

- organisé ;
- modulaire ;
- lisible ;
- documenté lorsque nécessaire ;
- testé ;
- versionné avec Git.

---

# 11. Architecture cible

L'application sera organisée selon une architecture en plusieurs couches.

```text
┌─────────────────────────────────────────┐
│           PRESENTATION LAYER             │
│             React / TypeScript           │
│                                         │
│       Components / Pages / Services      │
└────────────────────┬────────────────────┘
                     │ HTTP / REST
                     ▼
┌─────────────────────────────────────────┐
│             BUSINESS LAYER               │
│            Node.js / Express             │
│                                         │
│ Controllers / Services / Validation      │
│             Business Rules               │
└────────────────────┬────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────┐
│            DATA ACCESS LAYER              │
│                  Prisma                  │
│                                         │
│             Repositories / ORM           │
└────────────────────┬────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────┐
│                DATABASE                  │
│                PostgreSQL                │
│              Base de données SQL         │
└─────────────────────────────────────────┘
```

## 11.1 Technologies envisagées

### Frontend

- React ;
- TypeScript ;
- Vite ;
- HTML5 ;
- CSS3 ;
- React Router.

### Backend

- Node.js ;
- Express ;
- TypeScript.

### Base de données

- PostgreSQL.

### Accès aux données

- Prisma ORM.

### Authentification

- JWT ou mécanisme de session sécurisé ;
- bcrypt ou solution équivalente pour le hashage des mots de passe.

### Tests

- Vitest ;
- Supertest ;
- Playwright.

### DevOps

- Docker ;
- Docker Compose ;
- Git ;
- Gitea ;
- Gitea Actions.

---

# 12. Conception attendue

Le projet devra contenir une phase de conception complète.

## 12.1 Merise

Les documents suivants seront réalisés :

- MCD — Modèle Conceptuel de Données ;
- MLD — Modèle Logique de Données ;
- MPD — Modèle Physique de Données.

## 12.2 UML

Les diagrammes suivants seront réalisés :

- diagramme de cas d'utilisation ;
- diagramme de classes ;
- diagrammes de séquence ;
- éventuellement diagramme d'activité ;
- éventuellement diagramme d'états.

## 12.3 Maquettes et wireframes

Les interfaces principales seront conçues avant leur développement.

Les maquettes pourront concerner :

- la page d'accueil ;
- la page d'inscription ;
- la page de connexion ;
- le dashboard ;
- la liste des parcours ;
- la page d'un parcours ;
- la page d'une leçon ;
- la page d'un quiz ;
- la page de résultat ;
- la page du profil ;
- l'interface d'administration.

---

# 13. Tests

Le projet devra inclure une stratégie de tests.

## 13.1 Tests unitaires

Les tests unitaires pourront notamment couvrir :

- le calcul des XP ;
- le calcul du niveau ;
- la validation d'une réponse ;
- la validation des données ;
- la vérification des règles métier ;
- l'attribution des badges dans une version ultérieure.

## 13.2 Tests API

Les tests API pourront notamment couvrir :

- l'inscription ;
- la connexion ;
- la déconnexion ;
- la création d'une leçon ;
- la modification d'une leçon ;
- la suppression d'une leçon ;
- l'accès interdit à une route administrateur ;
- la sauvegarde de la progression ;
- l'attribution des XP.

## 13.3 Tests fonctionnels

### Scénario principal

1. L'utilisateur ouvre CodeLearnWay.
2. Il crée un compte.
3. Il se connecte.
4. Il sélectionne un parcours JavaScript.
5. Il démarre une leçon.
6. Il répond aux questions.
7. Il termine la leçon.
8. Ses XP sont mis à jour.
9. Sa progression est sauvegardée.
10. Le dashboard affiche la nouvelle progression.

---

# 14. Gestion de projet

Le développement sera organisé avec une méthode Kanban.

## 14.1 Colonnes Kanban

```text
BACKLOG
   ↓
TODO
   ↓
IN PROGRESS
   ↓
TEST
   ↓
CODE REVIEW
   ↓
DONE
```

## 14.2 Organisation des tâches

Chaque fonctionnalité importante sera divisée en tâches.

Les tâches pourront être reliées :

- aux exigences fonctionnelles ;
- aux issues ;
- aux branches Git ;
- aux commits Git ;
- aux Pull Requests.

## 14.3 Exemple de tâche

```text
Fonctionnalité : Inscription utilisateur

Tâches :

- créer le modèle User ;
- créer la migration Prisma ;
- créer la route POST /auth/register ;
- valider l'adresse email ;
- hasher le mot de passe ;
- gérer les emails déjà utilisés ;
- écrire les tests ;
- créer le formulaire React ;
- effectuer la Code Review.
```

---

# 15. Versioning Git

Le projet utilisera Git pour gérer les versions du code.

## 15.1 Branches principales

```text
main
develop
feature/auth
feature/lessons
feature/quiz
feature/progress
feature/admin
```

## 15.2 Convention des commits

Les commits devront être clairs et explicites.

### Format

```text
type(scope): description
```

### Exemples

```text
feat(auth): add user registration
feat(auth): implement login
feat(lesson): create lesson API
feat(quiz): add multiple choice questions
feat(progress): save user progress

fix(auth): validate duplicate email
fix(quiz): correct answer validation

test(quiz): add answer validation tests
test(auth): add registration tests

docs(architecture): add application architecture
docs(git): add Git workflow documentation
```

## 15.3 Règles Git

- Ne pas développer directement sur `main`.
- Ne pas pousser directement sur `main`.
- Créer une branche pour chaque fonctionnalité.
- Utiliser des messages de commit explicites.
- Vérifier le code avant chaque Pull Request.
- Faire une Code Review avant la fusion lorsque cela est possible.
- Ne jamais stocker de secrets dans Git.

---

# 16. CI/CD

Une pipeline CI/CD sera mise en place avec Gitea Actions.

## 16.1 Pipeline prévue

```text
Git Push
   ↓
Installation des dépendances
   ↓
Lint
   ↓
Tests unitaires
   ↓
Build
   ↓
Build Docker
   ↓
Déploiement
```

## 16.2 Objectifs de la pipeline

La pipeline devra permettre de :

- vérifier automatiquement la qualité du code ;
- exécuter les tests ;
- vérifier que le projet se compile correctement ;
- construire les images Docker ;
- détecter les erreurs avant la fusion ;
- empêcher autant que possible le déploiement d'une version qui échoue aux contrôles.

---

# 17. Déploiement

L'application sera préparée pour être déployée dans un environnement cloud ou sur un serveur compatible Docker.

## 17.1 Éléments à fournir

- Dockerfile frontend ;
- Dockerfile backend ;
- `docker-compose.yml` pour le développement ;
- fichier `.env.example` ;
- scripts de migration ;
- scripts de seed ;
- configuration CI/CD ;
- documentation d'installation ;
- documentation de déploiement.

## 17.2 Sécurité du déploiement

Les secrets ne devront jamais être stockés dans Git.

Cela concerne notamment :

- les mots de passe ;
- les clés JWT ;
- les tokens ;
- les clés API ;
- les identifiants de base de données ;
- les certificats privés.

Les secrets devront être configurés à l'aide :

- des variables d'environnement ;
- des secrets de la plateforme CI/CD ;
- d'un système de gestion des secrets adapté.

---

# 18. Documentation

Le repository contiendra notamment la structure suivante :

```text
/docs
├── specifications
├── merise
├── uml
├── architecture
├── mockups
├── testing
└── git-workflow.md
```

## 18.1 Contenu du dossier `docs`

### `docs/specifications`

- cahier des charges ;
- spécifications fonctionnelles ;
- spécifications techniques.

### `docs/merise`

- MCD ;
- MLD ;
- MPD.

### `docs/uml`

- diagrammes de cas d'utilisation ;
- diagramme de classes ;
- diagrammes de séquence ;
- autres diagrammes UML.

### `docs/architecture`

- architecture générale ;
- architecture frontend ;
- architecture backend ;
- organisation des dossiers.

### `docs/mockups`

- wireframes ;
- maquettes UI ;
- captures ou exports des interfaces.

### `docs/testing`

- stratégie de tests ;
- scénarios de tests ;
- résultats des tests ;
- documentation de la CI/CD.

## 18.2 README.md

Le fichier `README.md` devra présenter :

- le projet ;
- le problème traité ;
- les fonctionnalités ;
- les technologies ;
- l'architecture ;
- l'installation ;
- la configuration ;
- les commandes de lancement ;
- les tests ;
- le déploiement ;
- les variables d'environnement ;
- les améliorations futures.

---

# 19. Fonctionnalités futures

Les fonctionnalités suivantes pourront être ajoutées après la validation du MVP :

- éditeur de code intégré ;
- exécution de code dans un environnement sandbox ;
- authentification OAuth ;
- application mobile ;
- recommandations personnalisées ;
- fonctionnalités temps réel avec WebSocket ;
- système de certificats ;
- statistiques avancées ;
- notifications ;
- classement des utilisateurs.

Ces fonctionnalités ne font pas partie du périmètre du MVP initial.

---

# 20. MVP et évolutions

## 20.1 MVP

Le MVP correspond à la première version fonctionnelle de CodeLearnWay.

Il regroupe les fonctionnalités nécessaires pour permettre à un utilisateur de :

- créer un compte ;
- suivre un parcours ;
- consulter des leçons ;
- réaliser des exercices ;
- obtenir un score ;
- gagner des XP ;
- enregistrer sa progression.

### Authentification

- inscription ;
- connexion ;
- déconnexion ;
- hashage sécurisé des mots de passe ;
- gestion des rôles ;
- protection des routes privées.

### Apprentissage

- consultation des parcours ;
- consultation des leçons ;
- QCM ;
- exercices vrai / faux ;
- validation des réponses.

### Progression

- score ;
- XP ;
- niveau ;
- progression utilisateur.

### Administration

- création, modification et suppression des parcours ;
- création, modification et suppression des leçons ;
- création, modification et suppression des questions.

### Technique

- React ;
- TypeScript ;
- Node.js ;
- Express ;
- PostgreSQL ;
- Prisma ;
- API REST ;
- tests ;
- Docker ;
- Gitea Actions.

## 20.2 Version 2

Après validation du MVP, les fonctionnalités suivantes pourront être ajoutées :

- système de badges ;
- séries quotidiennes (*streaks*) ;
- texte à compléter ;
- remise en ordre de code ;
- correction de code ;
- statistiques avancées ;
- notifications ;
- classement des utilisateurs ;
- recommandations personnalisées.

---

# 21. Critères d'acceptation du MVP

Le MVP sera considéré comme fonctionnel lorsque :

1. Un visiteur peut créer un compte.
2. Un utilisateur peut se connecter et se déconnecter.
3. Le mot de passe n'est jamais stocké en clair.
4. Un utilisateur peut consulter un parcours.
5. Un utilisateur peut consulter et démarrer une leçon.
6. Un utilisateur peut répondre aux exercices.
7. Le système vérifie les réponses.
8. La progression est enregistrée dans une base de données SQL.
9. Les XP sont calculés selon les règles métier.
10. Les XP ne sont pas attribués plusieurs fois pour une même validation.
11. Un utilisateur ne peut pas accéder aux fonctionnalités administrateur sans autorisation.
12. Un administrateur peut créer, modifier et supprimer du contenu pédagogique.
13. Les erreurs sont gérées correctement.
14. Les principales fonctionnalités sont testées.
15. L'application peut être lancée avec Docker.
16. La documentation permet à un autre développeur d'installer le projet.
17. Le projet possède une pipeline CI/CD fonctionnelle.
18. Le code est versionné avec Git.

---

# 22. Livrables du projet

À la fin du projet, les livrables seront les suivants.

## 22.1 Conception

- cahier des charges ;
- spécifications fonctionnelles ;
- spécifications techniques ;
- MCD ;
- MLD ;
- MPD ;
- diagrammes UML ;
- architecture technique ;
- wireframes ;
- maquettes UI.

## 22.2 Développement

- frontend ;
- backend ;
- API REST ;
- base de données PostgreSQL ;
- système d'authentification ;
- système de progression ;
- système de niveaux ;
- interface d'administration.

## 22.3 Qualité

- tests automatisés ;
- validation des données ;
- gestion des erreurs ;
- sécurité ;
- gestion des autorisations ;
- Git ;
- CI/CD.

## 22.4 Déploiement

- Docker ;
- configuration ;
- scripts ;
- variables d'environnement ;
- solution d'hébergement ;
- documentation de déploiement.

## 22.5 Documentation

- README ;
- documentation technique ;
- documentation d'installation ;
- documentation de déploiement ;
- documentation utilisateur ;
- documentation de conception.