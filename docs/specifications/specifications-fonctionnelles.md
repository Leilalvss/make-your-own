
# Spécifications fonctionnelles

## 1. Présentation du document

### 1.1 Nom du projet

**CodeLearnWay**

### 1.2 Objet du document

Ce document décrit les fonctionnalités attendues de l'application web **CodeLearnWay**.

Il précise :

- les fonctionnalités disponibles pour chaque type d'utilisateur ;
- les règles de fonctionnement de l'application ;
- les interactions principales ;
- les données manipulées ;
- les fonctionnalités incluses dans le MVP ;
- les fonctionnalités prévues pour les versions ultérieures.

### 1.3 Public concerné

Ce document est destiné :

- aux développeurs frontend ;
- aux développeurs backend ;
- aux concepteurs de la base de données ;
- aux testeurs ;
- aux responsables du projet ;
- aux personnes chargées de la Code Review.

---

# 2. Présentation générale de l'application

## 2.1 Description

CodeLearnWay est une application web responsive et accessible dédiée à l'apprentissage de la programmation.

Elle permet aux utilisateurs débutants de :

- suivre des parcours pédagogiques ;
- consulter des leçons courtes ;
- répondre à des quiz ;
- réaliser des exercices interactifs ;
- obtenir des scores ;
- gagner des points d'expérience (XP) ;
- suivre leur progression ;
- débloquer des niveaux.

L'application comprend également une interface permettant aux administrateurs ou formateurs de gérer le contenu pédagogique.

## 2.2 Objectif principal

L'objectif principal est de proposer une expérience d'apprentissage :

- simple ;
- progressive ;
- interactive ;
- accessible aux débutants ;
- orientée vers la pratique ;
- motivante grâce à la gamification.

## 2.3 Périmètre du MVP

Le MVP comprend :

- l'inscription ;
- la connexion ;
- la déconnexion ;
- la gestion du profil ;
- la consultation des parcours ;
- la consultation des leçons ;
- les exercices QCM ;
- les exercices Vrai / Faux ;
- la validation des réponses ;
- le calcul du score ;
- l'attribution des XP ;
- le système de niveaux ;
- l'enregistrement de la progression ;
- la gestion administrative des parcours ;
- la gestion administrative des leçons ;
- la gestion administrative des exercices ;
- les tests ;
- Docker ;
- la CI/CD.

Les badges, les séries quotidiennes, les statistiques avancées et les autres fonctionnalités de gamification sont prévues pour une version ultérieure.

---

# 3. Utilisateurs et rôles

L'application possède trois rôles principaux :

- Visiteur ;
- Étudiant ;
- Administrateur / Formateur.

## 3.1 Visiteur

Le visiteur est un utilisateur non authentifié.

### Fonctionnalités autorisées

Le visiteur peut :

- consulter la page d'accueil ;
- consulter les parcours disponibles ;
- consulter les informations générales d'un parcours ;
- accéder à la page de connexion ;
- accéder à la page d'inscription.

### Fonctionnalités interdites

Le visiteur ne peut pas :

- enregistrer sa progression ;
- gagner des XP ;
- accéder à son espace personnel ;
- modifier son profil ;
- gérer le contenu pédagogique ;
- accéder aux données personnelles des utilisateurs.

## 3.2 Étudiant

L'étudiant est l'utilisateur principal de l'application.

### Fonctionnalités autorisées

L'étudiant peut :

- créer un compte ;
- se connecter ;
- se déconnecter ;
- consulter son profil ;
- modifier son profil ;
- consulter les parcours ;
- consulter les leçons ;
- commencer une leçon ;
- répondre aux exercices ;
- obtenir un score ;
- terminer une leçon ;
- gagner des XP ;
- consulter son niveau ;
- consulter sa progression ;
- consulter son historique d'apprentissage.

### Fonctionnalités non disponibles dans le MVP

Les fonctionnalités suivantes pourront être ajoutées ultérieurement :

- consulter les badges ;
- consulter les séries quotidiennes ;
- consulter les statistiques avancées ;
- consulter le classement des utilisateurs ;
- recevoir des notifications.

## 3.3 Administrateur / Formateur

L'administrateur ou le formateur est un utilisateur possédant des droits spécifiques.

### Fonctionnalités autorisées

Il peut :

- créer un parcours ;
- consulter un parcours ;
- modifier un parcours ;
- supprimer un parcours ;
- créer une leçon ;
- consulter une leçon ;
- modifier une leçon ;
- supprimer une leçon ;
- créer un exercice ;
- modifier un exercice ;
- supprimer un exercice ;
- créer une question ;
- modifier une question ;
- supprimer une question.

### Fonctionnalités prévues ultérieurement

- consulter la liste des utilisateurs ;
- consulter les statistiques globales ;
- gérer les rôles ;
- gérer les badges ;
- gérer les notifications.

---

# 4. Authentification

## 4.1 Inscription

### Description

Un visiteur peut créer un compte utilisateur.

### Données nécessaires

Le formulaire d'inscription peut contenir :

- nom ;
- nom d'utilisateur ;
- adresse email ;
- mot de passe ;
- confirmation du mot de passe.

### Règles fonctionnelles

- L'adresse email doit être valide.
- L'adresse email doit être unique.
- Le mot de passe doit respecter les règles minimales de sécurité.
- Le mot de passe et sa confirmation doivent être identiques.
- Le mot de passe ne doit jamais être enregistré en clair.
- Le compte doit être créé uniquement si toutes les validations sont réussies.

### Résultat attendu

Après une inscription réussie :

- le compte est enregistré ;
- l'utilisateur peut se connecter ;
- un message de confirmation est affiché.

### Cas d'erreur

Le système doit afficher une erreur si :

- l'adresse email est déjà utilisée ;
- l'adresse email est invalide ;
- le mot de passe est trop faible ;
- les mots de passe ne correspondent pas ;
- un champ obligatoire est vide.

---

## 4.2 Connexion

### Description

Un utilisateur enregistré peut se connecter à l'application.

### Données nécessaires

- adresse email ou nom d'utilisateur ;
- mot de passe.

### Règles fonctionnelles

- Les identifiants doivent être vérifiés.
- Le compte doit exister.
- Le mot de passe doit être correct.
- Une session ou un token sécurisé doit être créé après une connexion réussie.

### Résultat attendu

Après une connexion réussie :

- l'utilisateur est authentifié ;
- il est redirigé vers son espace personnel ;
- ses informations de session sont disponibles.

### Cas d'erreur

Le système doit afficher une erreur si :

- le compte n'existe pas ;
- le mot de passe est incorrect ;
- les champs obligatoires sont vides ;
- le compte n'est pas autorisé à se connecter.

---

## 4.3 Déconnexion

### Description

Un utilisateur connecté peut se déconnecter.

### Résultat attendu

Après la déconnexion :

- la session est invalidée ou le token est supprimé ;
- l'utilisateur est considéré comme non authentifié ;
- l'accès aux routes privées est bloqué ;
- l'utilisateur est redirigé vers une page publique.

---

## 4.4 Gestion des routes privées

Les pages privées doivent être accessibles uniquement aux utilisateurs authentifiés.

### Exemples de routes privées

- dashboard ;
- profil ;
- progression ;
- historique d'apprentissage ;
- espace administrateur.

Un utilisateur non authentifié doit être redirigé vers la page de connexion.

---

## 4.5 Gestion des rôles

L'application doit vérifier les autorisations avant l'accès aux fonctionnalités protégées.

### Exemple

Un étudiant ne peut pas :

- créer un parcours ;
- modifier une leçon ;
- supprimer un exercice ;
- accéder à l'espace administrateur.

Seuls les utilisateurs disposant des droits nécessaires peuvent effectuer ces actions.

---

# 5. Gestion du profil

## 5.1 Consultation du profil

Un utilisateur connecté peut consulter :

- son nom ;
- son nom d'utilisateur ;
- son adresse email ;
- son niveau ;
- son nombre de XP ;
- sa progression.

## 5.2 Modification du profil

Un utilisateur connecté peut modifier certaines informations personnelles :

- nom ;
- nom d'utilisateur ;
- autres informations autorisées.

### Règles fonctionnelles

- L'utilisateur doit être authentifié.
- L'utilisateur ne peut modifier que ses propres informations.
- Les nouvelles données doivent être validées.
- L'adresse email doit rester unique si elle peut être modifiée.
- Les données sensibles ne doivent pas être exposées inutilement.

---

# 6. Parcours pédagogiques

## 6.1 Consultation des parcours

Un visiteur ou un étudiant peut consulter la liste des parcours disponibles.

### Informations affichées

Chaque parcours peut afficher :

- titre ;
- description ;
- niveau de difficulté ;
- nombre de leçons ;
- durée estimée ;
- état de progression pour un étudiant connecté.

## 6.2 Consultation d'un parcours

Un utilisateur peut consulter les détails d'un parcours.

### Informations affichées

- titre ;
- description ;
- niveau de difficulté ;
- liste des leçons ;
- ordre des leçons ;
- progression de l'utilisateur ;
- état de chaque leçon.

## 6.3 Création d'un parcours

Un administrateur ou un formateur autorisé peut créer un parcours.

### Données nécessaires

- titre ;
- description ;
- niveau de difficulté ;
- ordre ou position ;
- statut de publication, si nécessaire.

### Règles fonctionnelles

- L'utilisateur doit posséder les droits nécessaires.
- Le titre est obligatoire.
- Les données doivent être validées.
- Le parcours doit être enregistré en base de données.

## 6.4 Modification d'un parcours

Un administrateur ou un formateur autorisé peut modifier un parcours existant.

Il peut modifier :

- le titre ;
- la description ;
- le niveau de difficulté ;
- l'ordre ;
- le statut de publication.

## 6.5 Suppression d'un parcours

Un administrateur ou un formateur autorisé peut supprimer un parcours.

### Règles fonctionnelles

- L'utilisateur doit être autorisé.
- La suppression doit respecter l'intégrité de la base de données.
- Le système doit gérer les leçons associées.
- Une confirmation peut être demandée avant la suppression.

---

# 7. Gestion des leçons

## 7.1 Consultation d'une leçon

Un étudiant peut consulter une leçon accessible dans un parcours.

### Informations affichées

- titre ;
- description ;
- contenu pédagogique ;
- niveau de difficulté ;
- ordre ;
- liste des exercices ;
- état de progression.

## 7.2 Accès progressif aux leçons

Les leçons peuvent être accessibles selon l'ordre défini dans le parcours.

### Exemple

```text
Leçon 1 : accessible
Leçon 2 : accessible après la Leçon 1
Leçon 3 : accessible après la Leçon 2
```

Les règles exactes de déblocage devront être précisées pendant la conception.

## 7.3 Création d'une leçon

Un administrateur ou un formateur autorisé peut créer une leçon.

### Données nécessaires

- parcours associé ;
- titre ;
- description ;
- contenu pédagogique ;
- niveau de difficulté ;
- ordre.

### Règles fonctionnelles

- Une leçon doit appartenir à un parcours.
- Le titre est obligatoire.
- Le contenu doit être validé.
- L'ordre doit être cohérent avec les autres leçons du parcours.

## 7.4 Modification d'une leçon

Un utilisateur autorisé peut modifier :

- le titre ;
- la description ;
- le contenu ;
- le niveau de difficulté ;
- l'ordre ;
- le parcours associé, si cela est autorisé.

## 7.5 Suppression d'une leçon

Un utilisateur autorisé peut supprimer une leçon.

La suppression doit respecter les règles de cohérence de la base de données et gérer les exercices associés.

---

# 8. Gestion des exercices

## 8.1 Types d'exercices du MVP

Le MVP comprend deux types d'exercices :

- QCM ;
- Vrai / Faux.

## 8.2 QCM

### Description

L'utilisateur sélectionne une réponse parmi plusieurs propositions.

### Données nécessaires

- énoncé ;
- liste des propositions ;
- réponse correcte ;
- explication éventuelle ;
- nombre de XP attribués ;
- exercice associé à une leçon.

### Fonctionnement

1. L'utilisateur consulte la question.
2. Il sélectionne une proposition.
3. Il valide sa réponse.
4. Le système vérifie la réponse.
5. Le système affiche le résultat.
6. Le système met à jour le score.
7. Le système attribue les XP si la réponse est correcte et si les conditions sont respectées.

## 8.3 Vrai / Faux

### Description

L'utilisateur indique si une affirmation est vraie ou fausse.

### Données nécessaires

- affirmation ;
- réponse correcte ;
- explication éventuelle ;
- nombre de XP attribués ;
- exercice associé à une leçon.

### Fonctionnement

1. L'utilisateur lit l'affirmation.
2. Il choisit « Vrai » ou « Faux ».
3. Il valide sa réponse.
4. Le système vérifie la réponse.
5. Le système affiche le résultat.
6. Le score est mis à jour.
7. Les XP sont attribués selon les règles métier.

## 8.4 Création d'un exercice

Un administrateur ou un formateur autorisé peut créer un exercice.

### Données nécessaires

- leçon associée ;
- type d'exercice ;
- énoncé ;
- réponse correcte ;
- propositions, si nécessaire ;
- explication éventuelle ;
- ordre d'affichage.

## 8.5 Modification d'un exercice

Un utilisateur autorisé peut modifier :

- le type ;
- l'énoncé ;
- les propositions ;
- la réponse correcte ;
- l'explication ;
- l'ordre.

## 8.6 Suppression d'un exercice

Un utilisateur autorisé peut supprimer un exercice.

La suppression doit respecter les règles d'intégrité de la base de données.

## 8.7 Exercices prévus pour une version ultérieure

- texte à compléter ;
- remise en ordre ;
- correction de code ;
- mini challenge ;
- éditeur de code intégré ;
- exécution de code dans un environnement sandbox.

---

# 9. Validation des réponses

## 9.1 Fonctionnement général

Lorsqu'un utilisateur valide une réponse, le système doit :

1. identifier l'exercice ;
2. récupérer la réponse correcte ;
3. comparer la réponse de l'utilisateur à la réponse attendue ;
4. déterminer si la réponse est correcte ;
5. afficher le résultat ;
6. mettre à jour le score ;
7. enregistrer la tentative si nécessaire ;
8. attribuer les XP selon les règles métier.

## 9.2 Réponse correcte

Si la réponse est correcte :

- un message de réussite est affiché ;
- le score est mis à jour ;
- les XP peuvent être attribués ;
- la progression de l'utilisateur peut être enregistrée.

## 9.3 Réponse incorrecte

Si la réponse est incorrecte :

- un message d'erreur ou de correction est affiché ;
- la réponse correcte peut être présentée ;
- aucun XP de réussite ne doit être attribué ;
- l'utilisateur peut éventuellement réessayer.

---

# 10. Système de score

## 10.1 Calcul du score

Le score dépend des réponses de l'utilisateur aux exercices.

Le système peut calculer :

- le nombre de réponses correctes ;
- le nombre de réponses incorrectes ;
- le pourcentage de réussite ;
- le score final d'une leçon ou d'un quiz.

## 10.2 Affichage du score

Le score peut être affiché :

- après chaque réponse ;
- à la fin d'un quiz ;
- à la fin d'une leçon ;
- dans le dashboard ;
- dans l'historique d'apprentissage.

Les règles précises de calcul du score devront être définies pendant la conception technique.

---

# 11. Système de progression

## 11.1 Enregistrement de la progression

Un étudiant authentifié peut enregistrer sa progression.

La progression peut contenir :

- le parcours commencé ;
- les leçons consultées ;
- les leçons terminées ;
- les exercices réalisés ;
- les réponses données ;
- les scores obtenus ;
- les XP gagnés ;
- la date de dernière activité.

## 11.2 Progression par parcours

Le système peut afficher :

- le nombre de leçons terminées ;
- le nombre total de leçons ;
- le pourcentage de progression ;
- la dernière leçon consultée ;
- les leçons encore accessibles.

## 11.3 Progression par leçon

Le système peut afficher :

- le statut de la leçon ;
- les exercices terminés ;
- le score obtenu ;
- la date de complétion ;
- les XP gagnés.

## 11.4 Historique d'apprentissage

L'étudiant peut consulter son historique d'apprentissage.

L'historique peut contenir :

- les leçons terminées ;
- les quiz réalisés ;
- les scores obtenus ;
- les XP gagnés ;
- les dates d'activité.

---

# 12. Attribution des XP

## 12.1 Règles d'attribution

Les XP sont attribués selon les règles métier de l'application.

| Action | XP attribués |
|---|---:|
| Question correcte | +10 XP |
| Leçon terminée | +50 XP |

## 12.2 Conditions d'attribution

- L'utilisateur doit être authentifié.
- L'activité doit être correctement terminée.
- Les règles métier doivent être respectées.
- Les XP ne doivent pas être attribués plusieurs fois pour une même validation.

## 12.3 Nouvelle tentative

Un utilisateur peut refaire une activité déjà terminée.

Cependant, les XP associés à la première validation ne doivent pas être attribués une deuxième fois, sauf si une règle spécifique l'autorise.

---

# 13. Système de niveaux

## 13.1 Principe

Le niveau de l'utilisateur dépend de son nombre total de XP.

## 13.2 Exemple de niveaux

| Niveau | XP minimum |
|---|---:|
| Niveau 1 | 0 XP |
| Niveau 2 | 100 XP |
| Niveau 3 | 250 XP |
| Niveau 4 | 500 XP |
| Niveau suivant | À définir |

## 13.3 Affichage du niveau

Le niveau peut être affiché :

- dans le profil ;
- dans le dashboard ;
- dans les résultats d'un quiz ;
- dans la page de progression.

Les valeurs pourront être adaptées pendant le développement.

---

# 14. Dashboard

## 14.1 Description

Le dashboard est l'espace personnel de l'étudiant.

## 14.2 Informations affichées

Le dashboard peut afficher :

- le nom de l'utilisateur ;
- le niveau actuel ;
- le nombre total de XP ;
- la progression générale ;
- les parcours commencés ;
- les dernières leçons consultées ;
- les dernières activités réalisées ;
- les scores récents.

## 14.3 Actions disponibles

L'étudiant peut :

- reprendre une leçon ;
- consulter un parcours ;
- consulter sa progression ;
- consulter son profil ;
- se déconnecter.

---

# 15. Interface d'administration

## 15.1 Description

L'interface d'administration permet aux utilisateurs autorisés de gérer le contenu pédagogique.

## 15.2 Gestion des parcours

L'administrateur peut :

- afficher la liste des parcours ;
- créer un parcours ;
- modifier un parcours ;
- supprimer un parcours ;
- consulter les détails d'un parcours.

## 15.3 Gestion des leçons

L'administrateur peut :

- afficher la liste des leçons ;
- créer une leçon ;
- modifier une leçon ;
- supprimer une leçon ;
- associer une leçon à un parcours.

## 15.4 Gestion des exercices

L'administrateur peut :

- afficher la liste des exercices ;
- créer un exercice ;
- modifier un exercice ;
- supprimer un exercice ;
- associer un exercice à une leçon.

## 15.5 Contrôle des autorisations

L'accès à l'interface d'administration doit être protégé.

Un étudiant ou un visiteur ne doit pas pouvoir accéder aux fonctionnalités administratives.

---

# 16. Gestion des erreurs

L'application doit afficher des messages d'erreur compréhensibles.

## 16.1 Erreurs de validation

Exemples :

- champ obligatoire vide ;
- adresse email invalide ;
- mot de passe trop faible ;
- format incorrect ;
- réponse non sélectionnée.

## 16.2 Erreurs d'authentification

Exemples :

- identifiants incorrects ;
- session expirée ;
- utilisateur non authentifié ;
- token invalide.

## 16.3 Erreurs d'autorisation

Exemples :

- accès interdit ;
- rôle insuffisant ;
- action non autorisée.

## 16.4 Erreurs techniques

Exemples :

- serveur indisponible ;
- erreur de connexion à la base de données ;
- ressource introuvable ;
- erreur interne.

Les messages affichés à l'utilisateur ne doivent pas exposer d'informations techniques sensibles.

---

# 17. Règles métier fonctionnelles

Les principales règles métier sont les suivantes :

| ID | Règle |
|---|---|
| BR-01 | Une adresse email ne peut être associée qu'à un seul compte. |
| BR-02 | Un mot de passe doit respecter les règles minimales de sécurité. |
| BR-03 | Un utilisateur non authentifié ne peut pas accéder aux données personnelles d'un autre utilisateur. |
| BR-04 | Seuls les utilisateurs autorisés peuvent gérer le contenu pédagogique. |
| BR-05 | Un utilisateur doit être authentifié pour enregistrer sa progression. |
| BR-06 | Une activité correctement terminée peut attribuer des XP. |
| BR-07 | Les XP d'une même validation ne peuvent être attribués qu'une seule fois. |
| BR-08 | La progression est associée au compte de l'utilisateur. |
| BR-09 | Un utilisateur ne peut modifier que ses propres informations personnelles. |
| BR-10 | Les suppressions doivent respecter l'intégrité de la base de données. |
| BR-11 | Une leçon appartient à un seul parcours. |
| BR-12 | Une leçon est accessible selon l'ordre défini dans son parcours. |
| BR-13 | La progression d'une leçon est propre à chaque utilisateur. |

---

# 18. Exigences d'accessibilité et de responsive design

## 18.1 Accessibilité

L'application devra respecter autant que possible les bonnes pratiques d'accessibilité.

Elle devra notamment prévoir :

- une navigation au clavier ;
- des labels explicites ;
- un contraste suffisant ;
- une structure HTML sémantique ;
- des messages d'erreur compréhensibles ;
- des boutons et champs de formulaire accessibles ;
- une compatibilité avec les technologies d'assistance.

## 18.2 Responsive Design

L'application devra fonctionner sur :

- smartphone ;
- tablette ;
- ordinateur.

Les pages devront s'adapter aux différentes tailles d'écran.

---

# 19. Fonctionnalités futures

Les fonctionnalités suivantes pourront être ajoutées après la validation du MVP :

- système de badges ;
- séries quotidiennes (*streaks*) ;
- statistiques avancées ;
- notifications ;
- classement des utilisateurs ;
- recommandations personnalisées ;
- authentification OAuth ;
- éditeur de code intégré ;
- exécution de code dans un environnement sandbox ;
- application mobile ;
- fonctionnalités temps réel avec WebSocket ;
- système de certificats.

Ces fonctionnalités ne font pas partie du périmètre initial du MVP.

---

# 20. Critères d'acceptation fonctionnels

Le système sera considéré comme fonctionnel lorsque :

1. Un visiteur peut créer un compte.
2. Un utilisateur peut se connecter.
3. Un utilisateur peut se déconnecter.
4. Les mots de passe ne sont jamais stockés en clair.
5. Un utilisateur peut consulter les parcours disponibles.
6. Un étudiant peut consulter une leçon.
7. Un étudiant peut démarrer une leçon.
8. Un étudiant peut répondre aux exercices QCM.
9. Un étudiant peut répondre aux exercices Vrai / Faux.
10. Le système vérifie les réponses.
11. Le système affiche le résultat d'une réponse.
12. Le score est mis à jour correctement.
13. Les XP sont attribués selon les règles métier.
14. Les XP ne sont pas attribués plusieurs fois pour une même validation.
15. La progression est enregistrée dans la base de données.
16. Un étudiant peut consulter son niveau et sa progression.
17. Un utilisateur peut modifier son propre profil.
18. Un étudiant ne peut pas accéder aux fonctionnalités administratives.
19. Un administrateur peut créer un parcours.
20. Un administrateur peut modifier un parcours.
21. Un administrateur peut supprimer un parcours.
22. Un administrateur peut gérer les leçons.
23. Un administrateur peut gérer les exercices.
24. Les erreurs sont gérées correctement.
25. Les routes privées sont protégées.
26. Les principales fonctionnalités sont testées.
27. L'application fonctionne sur smartphone, tablette et ordinateur.