# Configuration de l'Authentification - Karyla

## Problème résolu ✅

Votre système d'authentification n'était pas fonctionnel car :
1. **Pas de gestionnaire de soumission** - Le formulaire n'avait pas de `onSubmit`
2. **Pas de gestion d'état** - Les champs n'étaient pas contrôlés
3. **Pas de connexion au backend** - Aucun appel API
4. **Pas de gestion des erreurs** - Aucun feedback utilisateur
5. **Pas de stockage du token** - Aucune persistance

## Solutions implémentées 🔧

### 1. Page d'authentification complète (`src/app/auth/page.tsx`)
- ✅ Gestion d'état des formulaires
- ✅ Validation des champs
- ✅ Appels API vers le backend
- ✅ Gestion des erreurs et succès
- ✅ Indicateur de chargement
- ✅ Redirection après connexion

### 2. Contexte d'authentification (`src/context/AuthContext.tsx`)
- ✅ Gestion globale de l'état utilisateur
- ✅ Stockage sécurisé du token
- ✅ Fonctions login/logout
- ✅ Persistance de session

### 3. Configuration API (`src/lib/api.ts`)
- ✅ Configuration centralisée des appels API
- ✅ Gestion automatique des tokens
- ✅ Gestion des erreurs HTTP

### 4. Navbar mise à jour (`src/components/layout/Navbar.tsx`)
- ✅ Affichage de l'état de connexion
- ✅ Menu utilisateur avec déconnexion
- ✅ Nom de l'utilisateur connecté

## Configuration requise ⚙️

### 1. Variables d'environnement

Créez un fichier `.env.local` à la racine du projet :

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

### 2. Configuration du backend

Créez un fichier `.env` dans le dossier `backend/` :

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/karyla
JWT_SECRET=votre_secret_jwt_tres_securise_ici
CORS_ORIGIN=http://localhost:3000
```

### 3. Démarrage des services

#### Backend (Terminal 1)
```bash
cd backend
npm install
npm start
```

#### Frontend (Terminal 2)
```bash
npm install
npm run dev
```

## Fonctionnalités disponibles 🚀

### Connexion
- ✅ Validation des champs
- ✅ Vérification des identifiants
- ✅ Stockage du token JWT
- ✅ Redirection automatique

### Inscription
- ✅ Validation des champs
- ✅ Vérification de l'email unique
- ✅ Hachage sécurisé du mot de passe
- ✅ Confirmation de création

### Gestion de session
- ✅ Persistance de la connexion
- ✅ Affichage du nom utilisateur
- ✅ Menu de déconnexion
- ✅ Protection des routes (à implémenter)

## Prochaines étapes 📋

1. **Protection des routes** - Ajouter des middleware pour les pages privées
2. **Récupération de mot de passe** - Implémenter la fonctionnalité "mot de passe oublié"
3. **Profil utilisateur** - Page de gestion du profil
4. **Historique des commandes** - Lier les commandes à l'utilisateur connecté

## Test de l'authentification 🧪

1. Allez sur `http://localhost:3000/auth`
2. Créez un compte avec un email et mot de passe
3. Connectez-vous avec vos identifiants
4. Vérifiez que votre nom apparaît dans la navbar
5. Testez la déconnexion

## Dépannage 🔧

### Erreur "Cannot connect to API"
- Vérifiez que le backend est démarré sur le port 5000
- Vérifiez la variable `NEXT_PUBLIC_API_URL`

### Erreur "MongoDB connection failed"
- Vérifiez que MongoDB est installé et démarré
- Vérifiez la variable `MONGODB_URI`

### Erreur "JWT_SECRET not defined"
- Vérifiez que le fichier `.env` existe dans le dossier backend
- Vérifiez que `JWT_SECRET` est défini 