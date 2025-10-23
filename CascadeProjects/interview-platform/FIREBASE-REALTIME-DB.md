# 🔥 Configuration Firebase Realtime Database

## ✅ Tous les fichiers ont été adaptés pour Realtime Database !

---

## 📋 Étape 1: Configuration Firebase Console

### 1. Activer Realtime Database

1. Aller sur https://console.firebase.google.com/
2. Sélectionner votre projet "interview-platform"
3. Menu gauche → **Realtime Database** (pas Firestore!)
4. Cliquer **Create Database**
5. Location: Choisir la plus proche (ex: europe-west1)
6. Mode: **Locked mode** (on va changer les règles après)
7. Cliquer **Enable**

### 2. Déployer les Règles de Sécurité

1. Rester sur **Realtime Database**
2. Onglet **Rules**
3. Copier ces règles :

```json
{
  "rules": {
    "users": {
      "$uid": {
        ".read": "$uid === auth.uid",
        ".write": "$uid === auth.uid"
      }
    },
    "interviews": {
      "$interviewId": {
        ".read": "auth != null",
        ".write": "auth != null"
      }
    },
    "jobs": {
      ".read": "auth != null",
      "$jobId": {
        ".write": "auth != null"
      }
    },
    "applications": {
      ".read": "auth != null",
      ".write": "auth != null"
    }
  }
}
```

4. Cliquer **Publish** (Publier)

### 3. Obtenir le Database URL

1. Rester sur Realtime Database
2. En haut, vous verrez une URL du type :
   ```
   https://interview-platform-xxxxx-default-rtdb.firebaseio.com/
   ```
3. **Copier cette URL complète** (elle sera nécessaire pour la config)

---

## 📄 Étape 2: Modifier firebase-config.js

Ouvrir le fichier `public/js/firebase-config.js` et remplacer TOUTE la configuration :

```javascript
const firebaseConfig = {
  apiKey: "VOTRE_API_KEY",
  authDomain: "VOTRE_PROJECT.firebaseapp.com",
  databaseURL: "https://VOTRE_PROJECT-default-rtdb.firebaseio.com",  // ← URL COPIÉE CI-DESSUS
  projectId: "VOTRE_PROJECT_ID",
  storageBucket: "VOTRE_PROJECT.appspot.com",
  messagingSenderId: "VOTRE_MESSAGING_ID",
  appId: "VOTRE_APP_ID"
};
```

**⚠️ IMPORTANT:** La ligne `databaseURL` est **OBLIGATOIRE** pour Realtime Database !

**Où trouver ces valeurs ?**
- Firebase Console → Project Settings → Your apps → Config

---

## 🔄 Étape 3: Redémarrer le Serveur Go

```bash
# Arrêter le serveur (Ctrl + C)
# Puis redémarrer
cd C:\Users\user\CascadeProjects\interview-platform\backend
go run main.go
```

---

## ✅ Étape 4: Tester l'Inscription

1. Ouvrir http://localhost:8080/signup.html
2. Remplir le formulaire avec un **nouvel email** :
   ```
   Email: test@email.com
   Mot de passe: Test123456
   Nom: Test User
   Rôle: Étudiant
   Compétences: Java, JavaScript
   ```
3. Cliquer "S'inscrire gratuitement 🚀"

**Résultat attendu:** ✅ "Inscription réussie! Redirection..."

---

## 🔍 Vérifier dans Firebase Console

### Vérifier l'utilisateur créé:
1. Firebase Console → **Authentication** → **Users**
2. Vous devriez voir votre email

### Vérifier les données dans Realtime Database:
1. Firebase Console → **Realtime Database** → **Data**
2. Vous devriez voir :
   ```
   interview-platform-xxxxx-default-rtdb
   ├── users
   │   └── [votre-uid]
   │       ├── name: "Test User"
   │       ├── email: "test@email.com"
   │       ├── role: "student"
   │       ├── skills: ["Java", "JavaScript"]
   │       └── createdAt: "2024-..."
   ```

---

## 🎯 Différences Firestore vs Realtime Database

### Structure des Données

**Firestore** (avant):
```
users (collection)
  └── uid-123 (document)
      ├── name: "Test"
      ├── role: "student"
```

**Realtime Database** (maintenant):
```
users (nœud)
  └── uid-123 (nœud)
      ├── name: "Test"
      ├── role: "student"
```

### Code JavaScript

**Firestore** (avant):
```javascript
await firebase.firestore().collection('users').doc(uid).set(data);
const doc = await firebase.firestore().collection('users').doc(uid).get();
const userData = doc.data();
```

**Realtime Database** (maintenant):
```javascript
await firebase.database().ref('users/' + uid).set(data);
const snapshot = await firebase.database().ref('users/' + uid).once('value');
const userData = snapshot.val();
```

---

## 📊 Structure de la Base de Données

Votre Realtime Database aura cette structure :

```
interview-platform-xxxxx-default-rtdb
├── users
│   ├── uid-001
│   │   ├── name: "Jean Dupont"
│   │   ├── email: "jean@email.com"
│   │   ├── role: "student"
│   │   ├── skills: ["Java", "JavaScript"]
│   │   ├── createdAt: "2024-..."
│   │   └── profileComplete: true
│   └── uid-002
│       ├── name: "Marie Martin"
│       ├── role: "recruiter"
│       └── ...
│
├── interviews
│   ├── 1234567890
│   │   ├── userId: "uid-001"
│   │   ├── type: "oral"
│   │   ├── score: {...}
│   │   └── completedAt: "2024-..."
│   └── 1234567891
│       ├── userId: "uid-001"
│       ├── type: "technical"
│       └── result: {...}
│
└── jobs
    ├── job-001
    │   ├── title: "Senior Java Developer"
    │   ├── company: "TechCorp"
    │   ├── recruiterId: "uid-002"
    │   └── languages: ["Java", "Spring"]
    └── job-002
        └── ...
```

---

## 🐛 Dépannage

### Erreur: "Permission denied"
**Cause:** Règles Realtime Database non déployées  
**Solution:** 
1. Firebase Console → Realtime Database → Rules
2. Vérifier que les règles sont publiées
3. Attendre 30 secondes
4. Réessayer

### Erreur: "FIREBASE FATAL ERROR: Can't determine Firebase Database URL"
**Cause:** `databaseURL` manquant dans firebase-config.js  
**Solution:**
1. Aller sur Realtime Database dans Firebase Console
2. Copier l'URL affichée en haut
3. Ajouter `databaseURL: "https://..."` dans firebaseConfig

### Erreur: "Email already in use"
**Cause:** Email déjà enregistré (c'est normal!)  
**Solution:**
- Option A: Se connecter avec cet email
- Option B: Utiliser un autre email
- Option C: Supprimer l'utilisateur dans Authentication

### Les données ne s'enregistrent pas
**Vérifications:**
1. F12 → Console (vérifier erreurs)
2. Firebase Console → Realtime Database → Data (vérifier structure)
3. Firebase Console → Realtime Database → Usage (vérifier quotas)

---

## 💡 Quotas Gratuits Realtime Database

Firebase Realtime Database tier gratuit :
- **Connections simultanées**: 100
- **Storage**: 1 GB
- **Downloads**: 10 GB/mois
- **Uploads**: 10 GB/mois

**Largement suffisant pour vos tests !**

---

## ✅ Fichiers Modifiés (Automatiquement)

Tous ces fichiers ont été **automatiquement adaptés** pour Realtime Database :

1. ✅ `public/js/firebase-config.js` - Config Realtime DB
2. ✅ `public/signup.html` - Inscription avec RDB
3. ✅ `public/login.html` - Connexion avec RDB
4. ✅ `public/dashboard-student.html` - Dashboard étudiant RDB
5. ✅ `public/dashboard-recruiter.html` - Dashboard recruteur RDB
6. ✅ `public/interview-oral.html` - Sauvegarde interviews RDB
7. ✅ `public/interview-tech.html` - Sauvegarde quiz RDB

**Vous n'avez rien à modifier dans le code !**

---

## 🎉 Prêt à Utiliser !

Maintenant vous pouvez :

1. ✅ S'inscrire avec un nouvel email
2. ✅ Se connecter
3. ✅ Utiliser le dashboard
4. ✅ Faire des interviews orales
5. ✅ Passer des quiz techniques
6. ✅ Voir les rapports

**Toutes les données sont sauvegardées dans Firebase Realtime Database !**

---

## 📞 Aide Rapide

**Si l'inscription échoue:**
1. Vérifier que les règles sont déployées
2. Vérifier que `databaseURL` est dans firebase-config.js
3. F12 → Console pour voir l'erreur exacte
4. Firebase Console → Realtime Database → Data pour voir si les données arrivent

**Configuration minimale requise:**
- ✅ Realtime Database activée
- ✅ Règles déployées  
- ✅ `databaseURL` dans firebase-config.js
- ✅ Authentication activée (Email/Password)

---

**Bon coding avec Firebase Realtime Database! 🔥**
