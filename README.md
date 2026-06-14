# NewNew

Projet full-stack simple (API Node/Express + frontend React).

## Description

Ce dépôt contient une API Node.js (dossier `api/`) et une application React (dossier `client/frontend/`). L'API expose des routes pour les utilisateurs et les services; le frontend consomme ces endpoints.

## Structure

- `api/` : serveur Express, connexion MongoDB.
- `client/frontend/` : application React créée avec `react-scripts`.

## Prérequis

- Node.js (>= 16 recommandé)
- npm
- MongoDB en fonctionnement (local ou cloud)

## Configuration

- API : définit la variable d'environnement `MONGO` pour la chaîne de connexion MongoDB.
- Le serveur API écoute par défaut sur le port `8800`.
- Note : le secret JWT est actuellement codé en dur dans `api/veriftoken.js`.

## Installation

1. Installer et lancer l'API :

```bash
cd api
npm install
# Démarrer en développement (nodemon)
npm start
```

2. Installer et lancer le frontend :

```bash
cd client/frontend
npm install
npm start
```

Le frontend démarre normalement sur http://localhost:3000 et communique avec l'API sur http://localhost:8800.

## Déploiement

- Construire le frontend : `npm run build` depuis `client/frontend`.
- Déployer l'API sur le service de votre choix (Heroku, Render, VPS), en configurant `MONGO` dans les variables d'environnement.

## Contribuer

- Ouvrez une issue pour discuter des changements.
- Créez une branche de fonctionnalité et proposez une pull request.

## Licence

Licence MIT — voir les fichiers projet ou ajoutez un fichier LICENSE si nécessaire.

---

Si vous voulez, je peux :
- ajouter un exemple de fichier `.env`,
- sécuriser le secret JWT en utilisant une variable d'environnement,
- ou préparer un script `docker-compose` pour lancer l'API + MongoDB.
