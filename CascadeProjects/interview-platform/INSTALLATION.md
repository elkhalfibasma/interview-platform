# 🚀 Installation - Interview Platform

## 📋 Prérequis

1. **Go 1.21+** - https://go.dev/dl/
2. **Firebase CLI** - `npm install -g firebase-tools`
3. **Compte Firebase gratuit** - https://console.firebase.google.com/

## ⚡ Installation Rapide (5 minutes)

### Étape 1: Configuration Firebase

1. **Créer un projet Firebase**:
   - Aller sur https://console.firebase.google.com/
   - Cliquer "Ajouter un projet"
   - Nom: "interview-platform" 
   - Activer Google Analytics (optionnel)

2. **Activer Authentication**:
   - Dans la console → Authentication → Get Started
   - Activer "Email/Password"
   - Activer "Google" (optionnel)

3. **Activer Firestore**:
   - Dans la console → Firestore Database → Create database
   - Mode: **Production**
   - Location: Choisir la plus proche

4. **Obtenir la configuration Web**:
   - Project Settings → General → Your apps
   - Cliquer Web app (</>) → Register app
   - Copier la configuration firebaseConfig
   - Coller dans `public/js/firebase-config.js`

5. **Télécharger Service Account Key**:
   - Project Settings → Service accounts
   - Generate new private key
   - Télécharger JSON
   - Renommer en `serviceAccountKey.json`
   - Placer dans `backend/serviceAccountKey.json`

### Étape 2: Configurer Firestore Rules

Dans Firebase Console → Firestore → Rules:
- Copier le contenu de `firestore.rules`
- Publier les règles

### Étape 3: Installer dépendances Go

```bash
cd C:\Users\user\CascadeProjects\interview-platform\backend
go mod download
```

### Étape 4: Démarrer le serveur

```bash
# Dans le dossier backend
go run main.go
```

Vous devriez voir:
```
🎯 Interview Platform Server
========================================
🚀 Server running on http://localhost:8080
📊 Firebase connected
========================================
```

### Étape 5: Accéder à l'application

Ouvrir le navigateur: **http://localhost:8080**

## ✅ Vérification

### Test 1: Backend Go
- Serveur démarre sans erreur
- Firebase connected ✅

### Test 2: Firebase Console
- Authentication activée
- Firestore créé
- Rules déployées

### Test 3: Application Web
- Landing page s'affiche
- Inscription fonctionne
- Login fonctionne
- Dashboard accessible

## 🛠️ Développement

### Émulateur Firebase (Optionnel)

Pour tester localement sans toucher la production:

```bash
# Installer Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Initialiser
firebase init

# Démarrer émulateurs
firebase emulators:start
```

Modifier `public/js/firebase-config.js`:
```javascript
if (window.location.hostname === 'localhost') {
  db.useEmulator("localhost", 8081);
  auth.useEmulator("http://localhost:9099");
}
```

## 🐛 Dépannage

### Erreur: "error initializing Firebase app"
- Vérifier que `serviceAccountKey.json` existe dans `/backend`
- Vérifier le chemin dans `main.go`

### Erreur: "CORS policy"
- Vérifier que le frontend accède à `http://localhost:8080`
- Vérifier la config CORS dans `main.go`

### Erreur: "permission-denied" (Firestore)
- Vérifier que les rules Firestore sont déployées
- Vérifier que l'utilisateur est authentifié

### Frontend ne se charge pas
- Vérifier que le serveur Go tourne
- Vérifier le dossier public est accessible
- Console navigateur (F12) pour erreurs

## 📦 Structure Minimale Requise

```
interview-platform/
├── backend/
│   ├── main.go
│   └── serviceAccountKey.json  ← À CRÉER
├── public/
│   ├── index.html
│   └── js/
│       └── firebase-config.js  ← MODIFIER CONFIG
├── firestore.rules
├── firebase.json
└── go.mod
```

## 🎉 Prêt!

Votre plateforme est maintenant fonctionnelle. 

Prochaines étapes:
1. Créer un compte (étudiant ou recruteur)
2. Explorer les fonctionnalités
3. Lancer une simulation d'interview
4. Consulter les rapports

**Bon coding! 💻**
