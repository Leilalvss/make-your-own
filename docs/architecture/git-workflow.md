
# Git Workflow - CodeLearnWay

## 1. Objectif

Ce document décrit les règles d'utilisation de Git dans le projet **CodeLearnWay**.

L’objectif est de :

- garder un historique Git clair et compréhensible ;
- organiser le travail en équipe ;
- éviter les conflits entre les développeurs ;
- protéger la branche principale ;
- faciliter les Code Reviews ;
- automatiser les vérifications avec la CI/CD.

---

## 2. Dépôt Git

Le projet utilise Git pour gérer les versions du code.

Le dépôt distant peut être hébergé sur :

- GitHub ;
- GitLab ;
- Gitea ;
- ou une autre plateforme compatible avec Git.

Exemple de dépôt :

```text
https://github.com/organisation/codelearnway.git
```

---

## 3. Organisation des branches

Le projet utilise les branches suivantes :

| Branche | Rôle |
|---|---|
| `main` | Version stable et prête à être livrée |
| `develop` | Branche principale de développement |
| `feature/*` | Développement d’une nouvelle fonctionnalité |
| `fix/*` | Correction d’un bug classique |
| `hotfix/*` | Correction urgente en production |
| `docs/*` | Modification de la documentation |
| `test/*` | Ajout ou modification des tests |
| `refactor/*` | Amélioration du code sans changer le comportement |
| `chore/*` | Tâches techniques ou maintenance |
| `ci/*` | Configuration de la CI/CD |

### Exemple de structure

```text
main
│
└── develop
    │
    ├── feature/auth
    ├── feature/lessons
    ├── feature/quiz
    ├── feature/progress
    ├── feature/admin
    ├── fix/login-error
    ├── docs/git-workflow
    └── test/quiz-validation
```

---

## 4. Règles principales

Les règles suivantes doivent être respectées :

1. Ne pas développer directement sur `main`.
2. Ne pas pousser directement sur `main`.
3. Créer une branche pour chaque fonctionnalité ou correction.
4. Utiliser des noms de branches clairs.
5. Faire des commits petits et compréhensibles.
6. Vérifier le code avant de créer une Pull Request.
7. Faire relire le code par un autre développeur lorsque cela est possible.
8. Fusionner les branches uniquement après validation.
9. Garder les branches à jour avec `develop`.
10. Ne jamais envoyer de secrets ou de fichiers `.env` dans Git.

---

## 5. Convention de nommage des branches

Les branches doivent respecter le format suivant :

```text
type/description-courte
```

### Exemples

```bash
feature/user-registration
feature/user-login
feature/lesson-crud
feature/quiz-validation
feature/progress-tracking
feature/admin-dashboard
fix/duplicate-email
fix/login-error
docs/git-workflow
test/xp-calculation
refactor/auth-service
chore/update-dependencies
ci/github-actions
```

### Règles de nommage

- Utiliser uniquement des lettres minuscules.
- Utiliser des tirets `-` pour séparer les mots.
- Éviter les espaces et les caractères spéciaux.
- Utiliser un nom court mais explicite.
- Indiquer le type de travail au début du nom.

---

## 6. Convention des commits

Les messages de commit doivent suivre le format :

```text
type(scope): description
```

### Types de commits

| Type | Utilisation |
|---|---|
| `feat` | Ajout d’une fonctionnalité |
| `fix` | Correction d’un bug |
| `docs` | Modification de la documentation |
| `test` | Ajout ou modification de tests |
| `refactor` | Réorganisation ou amélioration du code |
| `style` | Modification du formatage ou du style |
| `chore` | Maintenance technique |
| `build` | Modification du système de build |
| `ci` | Modification de la CI/CD |

### Exemples de commits

```text
feat(auth): add user registration
feat(auth): add login endpoint
feat(lesson): create lesson API
feat(quiz): add multiple choice questions
feat(progress): save user progress

fix(auth): handle duplicate email validation
fix(quiz): correct answer validation
fix(progress): prevent duplicate XP rewards

docs(architecture): add technical architecture
docs(git): add Git workflow documentation

test(auth): add registration tests
test(quiz): add answer validation tests

refactor(auth): move logic into auth service
chore(deps): update dependencies
ci(github): add automated tests
```

### Règles des commits

Un bon commit doit être :

- court ;
- précis ;
- lié à une seule tâche ;
- écrit à l’impératif ou dans un style cohérent ;
- facilement compréhensible par un autre développeur.

Éviter les messages peu explicites :

```text
update
fix
test
changes
final
```

Préférer :

```text
feat(auth): add password validation
fix(lesson): prevent empty lesson title
test(progress): test XP calculation
```

---

## 7. Workflow de développement

### Étape 1 — Récupérer la branche `develop`

Avant de commencer une tâche :

```bash
git checkout develop
git pull origin develop
```

Cette étape permet de travailler avec la version la plus récente du projet.

---

### Étape 2 — Créer une branche de fonctionnalité

Créer une nouvelle branche à partir de `develop` :

```bash
git checkout -b feature/user-registration
```

Exemples :

```bash
git checkout -b feature/user-login
git checkout -b feature/lesson-crud
git checkout -b feature/quiz-validation
git checkout -b docs/git-workflow
```

---

### Étape 3 — Vérifier l’état du projet

Avant de modifier le code :

```bash
git status
```

Cette commande permet de voir :

- la branche actuelle ;
- les fichiers modifiés ;
- les fichiers non suivis ;
- les fichiers prêts à être commités.

---

### Étape 4 — Développer la fonctionnalité

Effectuer les modifications nécessaires dans le projet.

Exemples :

- créer une route API ;
- ajouter un composant React ;
- créer un service backend ;
- ajouter un modèle Prisma ;
- écrire des tests ;
- modifier la documentation.

---

### Étape 5 — Vérifier le code

Avant de créer un commit, lancer les vérifications disponibles :

```bash
npm run lint
npm run test
npm run build
```

#### `npm run lint`

Vérifie la qualité et le style du code avec ESLint.

#### `npm run test`

Exécute les tests automatisés du projet.

#### `npm run build`

Vérifie que le projet peut être compilé et construit correctement.

Si une commande échoue, il faut corriger le problème avant de continuer.

---

### Étape 6 — Vérifier les modifications

Afficher les fichiers modifiés :

```bash
git status
```

Afficher le détail des modifications :

```bash
git diff
```

---

### Étape 7 — Ajouter les fichiers au commit

Ajouter tous les fichiers modifiés :

```bash
git add .
```

Ou ajouter un fichier précis :

```bash
git add src/components/Login.tsx
```

---

### Étape 8 — Créer un commit

Créer un commit avec un message clair :

```bash
git commit -m "feat(auth): add user registration"
```

Autres exemples :

```bash
git commit -m "fix(auth): handle duplicate email"
git commit -m "test(quiz): add answer validation tests"
git commit -m "docs(git): add Git workflow documentation"
```

---

### Étape 9 — Envoyer la branche sur le dépôt distant

La première fois :

```bash
git push -u origin feature/user-registration
```

Pour les push suivants :

```bash
git push
```

---

## 8. Exemple complet de workflow

Voici un exemple complet pour développer une fonctionnalité d’inscription.

```bash
# 1. Aller sur develop
git checkout develop

# 2. Récupérer la dernière version
git pull origin develop

# 3. Créer une branche
git checkout -b feature/user-registration

# 4. Vérifier l’état du projet
git status

# 5. Développer la fonctionnalité
# Modifier les fichiers nécessaires

# 6. Vérifier le code
npm run lint
npm run test
npm run build

# 7. Ajouter les modifications
git add .

# 8. Créer le commit
git commit -m "feat(auth): add user registration"

# 9. Envoyer la branche
git push -u origin feature/user-registration
```

---

## 9. Pull Request

Après avoir envoyé une branche sur le dépôt distant, il faut créer une **Pull Request** vers `develop`.

### Exemple

```text
feature/user-registration → develop
```

### Contenu recommandé d’une Pull Request

La Pull Request doit contenir :

- un titre clair ;
- une description de la fonctionnalité ;
- les modifications principales ;
- les tests réalisés ;
- les éventuels problèmes connus ;
- des captures d’écran si l’interface a été modifiée.

### Exemple de titre

```text
feat(auth): add user registration
```

### Exemple de description

```markdown
## Description

Ajout du système d’inscription des utilisateurs.

## Modifications

- ajout de la route POST /auth/register ;
- validation de l’adresse email ;
- validation du mot de passe ;
- hashage du mot de passe ;
- gestion des emails déjà utilisés ;
- ajout des tests d’inscription.

## Vérifications

- [x] Lint
- [x] Tests
- [x] Build

## Résultat attendu

Un utilisateur peut créer un compte avec une adresse email et un mot de passe valides.
```

---

## 10. Code Review

Avant la fusion d’une Pull Request, le code doit être relu.

### Points à vérifier

- Le code respecte-t-il l’architecture du projet ?
- Les noms des variables et fonctions sont-ils clairs ?
- La fonctionnalité respecte-t-elle les exigences ?
- Les erreurs sont-elles correctement gérées ?
- Les données utilisateur sont-elles protégées ?
- Les règles d’autorisation sont-elles respectées ?
- Les tests sont-ils suffisants ?
- Le code contient-il des duplications inutiles ?
- Les requêtes vers la base de données sont-elles optimisées ?
- La documentation est-elle mise à jour si nécessaire ?

### Checklist de Code Review

```markdown
- [ ] Le code respecte l’architecture du projet.
- [ ] Les noms sont clairs et cohérents.
- [ ] Les erreurs sont correctement gérées.
- [ ] Les règles de sécurité sont respectées.
- [ ] Les tests nécessaires sont présents.
- [ ] Le lint passe correctement.
- [ ] Le build passe correctement.
- [ ] La documentation est mise à jour si nécessaire.
```

---

## 11. Mise à jour d’une branche

Si la branche `develop` a évolué pendant le développement, il faut mettre à jour sa branche.

```bash
git checkout develop
git pull origin develop

git checkout feature/user-registration
git merge develop
```

En cas de conflit :

1. ouvrir les fichiers concernés ;
2. corriger les conflits ;
3. vérifier le code ;
4. ajouter les fichiers corrigés ;
5. créer le commit de résolution.

```bash
git add .
git commit -m "fix: resolve merge conflicts"
git push
```

---

## 12. Fusion des branches

### Fusion vers `develop`

Les branches de fonctionnalités sont fusionnées vers `develop` après validation de la Pull Request.

```text
feature/* → develop
```

### Fusion vers `main`

Lorsque la version est stable et validée :

```text
develop → main
```

La branche `main` doit toujours contenir une version stable du projet.

---

## 13. Protection de la branche `main`

La branche `main` doit être protégée autant que possible.

### Règles recommandées

- Interdire les push directs.
- Utiliser obligatoirement une Pull Request.
- Exiger une Code Review.
- Exécuter automatiquement les tests.
- Vérifier le lint.
- Vérifier le build.
- Bloquer la fusion si les vérifications échouent.
- Ne pas fusionner du code contenant des secrets.

---

## 14. Git et CI/CD

La CI/CD permet d’automatiser les vérifications à chaque Push ou Pull Request.

### Workflow recommandé

```text
Git Push
   │
   ▼
Installation des dépendances
   │
   ▼
Lint
   │
   ▼
Tests unitaires
   │
   ▼
Build
   │
   ▼
Build Docker
   │
   ▼
Déploiement
```

### Objectifs

La CI/CD doit permettre de :

- détecter rapidement les erreurs ;
- vérifier la qualité du code ;
- exécuter les tests automatiquement ;
- vérifier que le projet se construit correctement ;
- construire les images Docker ;
- empêcher autant que possible le déploiement si une vérification échoue.

---

## 15. Commandes Git utiles

### Afficher la branche actuelle

```bash
git branch
```

### Afficher toutes les branches

```bash
git branch -a
```

### Changer de branche

```bash
git checkout develop
```

Ou avec la commande moderne :

```bash
git switch develop
```

### Créer une branche

```bash
git checkout -b feature/new-feature
```

Ou :

```bash
git switch -c feature/new-feature
```

### Afficher l’historique

```bash
git log --oneline
```

### Afficher les modifications

```bash
git diff
```

### Annuler les modifications locales d’un fichier

```bash
git restore fichier.ts
```

### Supprimer une branche locale

```bash
git branch -d feature/user-registration
```

### Récupérer les informations du dépôt distant

```bash
git fetch origin
```

### Mettre à jour la branche actuelle

```bash
git pull origin develop
```

---

## 16. Création du fichier `git-workflow.md`

Pour créer ce fichier dans le projet :

```bash
mkdir -p docs
touch docs/git-workflow.md
```

Pour l’ouvrir avec Visual Studio Code :

```bash
code docs/git-workflow.md
```

Après avoir copié ce document dans le fichier, enregistrer les modifications.

---

## 17. Commit de la documentation

Ajouter le fichier :

```bash
git add docs/git-workflow.md
```

Créer le commit :

```bash
git commit -m "docs(git): add Git workflow documentation"
```

Envoyer les modifications :

```bash
git push origin develop
```

Si le fichier a été créé dans une branche dédiée :

```bash
git push -u origin docs/git-workflow
```

---

## 18. Règles de sécurité

Les éléments suivants ne doivent jamais être envoyés dans Git :

```text
.env
.env.local
.env.production
node_modules/
dist/
build/
```

Le fichier `.gitignore` doit contenir les éléments sensibles ou générés :

```gitignore
node_modules/
dist/
build/
.env
.env.local
.env.production
coverage/
```

Les secrets doivent être stockés dans :

- les variables d’environnement ;
- les secrets GitHub/GitLab/Gitea ;
- le système de gestion des secrets utilisé pour le déploiement.

Ne jamais mettre dans le dépôt :

- les mots de passe ;
- les clés JWT ;
- les tokens ;
- les clés API ;
- les identifiants de base de données ;
- les certificats privés.

---

## 19. Bonnes pratiques

Pour garder un projet propre :

- faire des commits réguliers ;
- éviter les commits contenant trop de modifications différentes ;
- utiliser des messages de commit explicites ;
- synchroniser régulièrement sa branche ;
- vérifier le code avant chaque Push ;
- ne pas travailler directement sur `main` ;
- supprimer les branches fusionnées si elles ne sont plus nécessaires ;
- documenter les changements importants ;
- écrire des tests pour les fonctionnalités importantes ;
- ne jamais envoyer de secrets dans le dépôt.

---

## 20. Résumé du workflow

```text
1. Aller sur develop
2. Mettre develop à jour
3. Créer une branche feature/fix/docs
4. Développer la tâche
5. Lancer le lint
6. Lancer les tests
7. Lancer le build
8. Créer un commit clair
9. Push de la branche
10. Créer une Pull Request
11. Faire la Code Review
12. Fusionner vers develop
13. Fusionner vers main après validation
```

---

## Conclusion

Ce workflow permet de travailler de manière organisée sur **CodeLearnWay**.

Il facilite :

- le travail en équipe ;
- la gestion des fonctionnalités ;
- la correction des bugs ;
- la Code Review ;
- la CI/CD ;
- la maintenance du projet ;
- la livraison d’une version stable.