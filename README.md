# Tasq-App

Tasq-App est une application simple développée avec NestJS qui permet aux utilisateurs de soumettre des tâches et de contacter l'administrateur.

## Fonctionnalités

- **Informations générales** : Les utilisateurs peuvent accéder à une page d'accueil qui affiche des informations générales sur l'application.

- **Soumission de tâches** : Les utilisateurs peuvent soumettre une description de la tâche qu'ils souhaitent ajouter.

- **Formulaire de contact** : Les utilisateurs peuvent utiliser un formulaire de contact pour envoyer des messages à l'administrateur.

## Prérequis

Assurez-vous d'avoir Node.js et npm installés sur votre machine.

## Installation

1. Cloner le repository :

```
git clone https://github.com/netanelango/tasq-app
```

2. Installer les dépendances :

```
cd tasq-app
npm install
```

## Configuration

Aucune configuration supplémentaire n'est requise.

## Utilisation

1. Démarrer l'application :

```
npm run start:dev
```

2. Accéder à l'application dans votre navigateur à l'adresse `http://localhost:3000`.

3. Utiliser les fonctionnalités suivantes :

   - Page d'accueil : `http://localhost:3000/info`
   - Soumission de tâches : Envoyer une requête POST à `http://localhost:3000/tasks` avec une description de la tâche au format JSON.
   - Formulaire de contact : Envoyer une requête à n'importe quelle URL de l'application.