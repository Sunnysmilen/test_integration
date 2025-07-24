# Test d’intégration - Epetitpas

Ce projet est un test technique réalisé dans le cadre de ma candidature pour rejoindre l’équipe de **Epetitpas**.

---

## 📋 Objectif du projet

L’objectif principal est de développer une application simple permettant :

- L’inscription d’un utilisateur via un formulaire avec **nom** et **email**.
- La sauvegarde des données dans une base PostgreSQL via un backend Node.js, Express, Prisma.
- La redirection vers une page utilisateur affichant les informations de la personne inscrite.

---

## Fonctionnalités
✅: validé , 🟠: en cours de développement
[✅] Formulaire d’inscription avec validation basique.<br/>
[🟠] Sauvegarde sécurisée des données utilisateurs.<br/>
[✅] Affichage personnalisé des informations lors de la connexion.<br/>
[✅] Gestion des erreurs (email déjà utilisé, données manquantes, etc.).

---

## ⚙️ Technologies utilisées

- **Frontend** : ReactJS
- **Backend** : Node.js, Express, Prisma ORM
- **Base de données** : PostgreSQL

---

## Structure du projet

Le projet est organisé en deux dossiers principaux :

/client - frontend React <br/>
/server - backend Node.js / Express / Prisma

## Structure des fichiers

```
mon-projet/
├── client/               # Frontend React
│   ├── public/
│   ├── src/
│   │   ├── Assets/
│   │   ├── Components/
│   │   ├── Pages/
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── .env
│   ├── vite.config.ts
│   └── package.json
│
├── server/               # Backend Express
│   ├── prisma/
│   │   └── schema.prisma
│   ├── .env
│   ├── index.js
│   └── package.json
│
├── README.md
└── .gitignore
```

---

# Installation et lancement

# Pré-requis

- Node.js >= 16
- PostgreSQL installé et en service
- Un utilisateur PostgreSQL avec une base `myappdb`

## 📄 Clôner le projet

```bash
git clone git@github.com:Sunnysmilen/test_stage.git
```

## Initialiser le projet

```bash
npm init
```

## Configuration de l'environnement Prisma (.env) 

```env
DATABASE_URL="postgresql://postgres:<motdepasse>@localhost:5432/myappdb"
```

## Commandes nécessaires pour le projet

### Backend (dossier server)

#### Migration de la base

```bash
npx prisma migrate dev --name init
```

#### Frontend (dossier client)

Faire une copie du fichier  `.env.sample` dans client et server.
Renommer ce fichier `.env`.

### 🚀 Lancement des deux serveurs dans dossier root du projet (frontend et backend)

```
npm run dev
```
