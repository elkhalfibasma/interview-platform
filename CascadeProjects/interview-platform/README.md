# 🎯 Real-Time AI Interview Platform - Style McKinsey

## 📋 Description

Plateforme d'interviews professionnelle en temps réel pour ingénieurs informatiques, avec design élégant style McKinsey, intégration Firebase gratuite, et AI locale pour simulations réalistes.

### ✨ Caractéristiques principales
- ✅ **Design McKinsey** - Élégant, minimaliste, professionnel
- ✅ **100% Gratuit** - Firebase tier gratuit, AI locale (Transformers.js)
- ✅ **Real-Time Voice** - WebRTC pour interviews orales en direct
- ✅ **Multi-Langages** - Quiz Java, C++, JavaScript, Python (25+ questions/langage)
- ✅ **Rapports AI** - Analyses détaillées avec graphiques Chart.js
- ✅ **2 Profils** - Étudiants (chercheurs) et Recruteurs (employeurs)

---

## 🚀 Stack Technique

### Backend
- **Go 1.21+** avec framework **Gin**
- **Firebase Admin SDK** pour auth et Firestore
- **PDF Generation** avec gofpdf

### Frontend
- **Svelte** (via CDN) - Réactivité
- **Tailwind CSS** (via CDN) - Design McKinsey
- **GSAP** (via CDN) - Animations fluides
- **Chart.js** (via CDN) - Graphiques

### Database & Auth
- **Firebase Firestore** (gratuit) - Base de données realtime
- **Firebase Auth** (gratuit) - Authentification sécurisée

### AI & Voice
- **Transformers.js** - AI locale (modèles Hugging Face)
- **Web Speech API** - Transcription voice gratuite
- **WebRTC** - Appels audio en temps réel

---

## 📁 Structure du Projet

```
interview-platform/
├── backend/
│   ├── main.go                    # Serveur Go principal
│   ├── handlers/
│   │   ├── auth.go               # Handlers Firebase Auth
│   │   ├── interviews.go         # Gestion interviews
│   │   ├── jobs.go               # Offres d'emploi
│   │   ├── quizzes.go            # Quiz techniques
│   │   └── reports.go            # Génération rapports
│   ├── models/
│   │   └── types.go              # Structures de données
│   └── utils/
│       ├── firebase.go           # Configuration Firebase
│       └── pdf.go                # Génération PDF
├── public/
│   ├── index.html                # Landing page
│   ├── login.html                # Authentification
│   ├── dashboard-student.html    # Dashboard étudiant
│   ├── dashboard-recruiter.html  # Dashboard recruteur
│   ├── interview-oral.html       # Interview orale
│   ├── interview-tech.html       # Interview technique
│   ├── reports.html              # Page rapports
│   ├── images/                   # Images Unsplash locales
│   ├── data/
│   │   ├── quiz-java.json       # Questions Java
│   │   ├── quiz-cpp.json        # Questions C++
│   │   ├── quiz-javascript.json # Questions JavaScript
│   │   └── quiz-python.json     # Questions Python
│   └── js/
│       ├── app.js               # Application principale
│       ├── firebase-config.js   # Config Firebase
│       └── ai-engine.js         # Moteur AI local
├── firebase.json                 # Configuration Firebase
├── firestore.rules              # Règles sécurité Firestore
└── go.mod                       # Dépendances Go
```

---

## 🔧 Installation

### Prérequis
1. **Go 1.21+** - [Télécharger](https://go.dev/dl/)
2. **Firebase CLI** - `npm install -g firebase-tools`
3. **Compte Firebase** (gratuit) - [Console Firebase](https://console.firebase.google.com/)

### Étape 1: Cloner et configurer

```bash
cd C:\Users\user\CascadeProjects\interview-platform

# Installer dépendances Go
go mod download
```

### Étape 2: Configuration Firebase

1. Créer un projet Firebase (gratuit):
   - Aller sur https://console.firebase.google.com/
   - Créer un nouveau projet "interview-platform"
   - Activer **Authentication** (Email/Password + Google)
   - Activer **Firestore Database** (mode production)

2. Obtenir les credentials:
   - Project Settings → Service accounts
   - Générer nouvelle clé privée → Télécharger JSON
   - Renommer en `serviceAccountKey.json` et placer dans `/backend`

3. Configuration Web:
   - Project Settings → General → Your apps
   - Ajouter une app Web
   - Copier la config Firebase dans `public/js/firebase-config.js`

### Étape 3: Firestore Rules

Dans la console Firebase, aller dans Firestore → Rules et copier le contenu de `firestore.rules`.

### Étape 4: Démarrer l'application

```bash
# Terminal 1: Démarrer backend Go
cd backend
go run main.go

# L'application démarre sur http://localhost:8080
```

### Étape 5: Accéder à l'application

Ouvrir le navigateur: `http://localhost:8080`

---

## 🎨 Design McKinsey

### Palette de couleurs
- **Bleu Marine**: `#001F3F` - Couleur principale (headers, boutons)
- **Gris Professionnel**: `#7F8C8D` - Texte secondaire
- **Vert Succès**: `#27AE60` - Actions positives, succès
- **Blanc/Noir**: Contrastes, backgrounds

### Typographie
- **Headings**: Serif élégant (Playfair Display)
- **Body**: Sans-serif moderne (Inter)
- **Code**: Monospace (Fira Code)

### Principes
- ✅ Espaces généreux (padding, margins)
- ✅ Grids symétriques
- ✅ Hiérarchie claire
- ✅ Minimalisme
- ✅ Focus sur données

---

## 👥 Profils Utilisateurs

### 🎓 Étudiants
- Simulations interviews (orales + techniques)
- Recherche offres d'emploi
- Prise de rendez-vous avec recruteurs
- Consultation rapports détaillés
- Choix langages: Java, C++, JavaScript, Python

### 💼 Recruteurs
- Création offres d'emploi
- Lancement entretiens réels
- Gestion rendez-vous
- Accès stats étudiants (anonymes)
- Création quiz techniques personnalisés

---

## 🎤 Fonctionnalités Interviews

### Interview Orale (Voice Agent)
1. **Connexion voice** via WebRTC
2. **Questions comportementales** posées par AI:
   - "Parlez-moi de votre meilleur projet"
   - "Comment gérez-vous les conflits en équipe?"
   - "Décrivez un défi technique que vous avez résolu"
3. **Réponses enregistrées** et transcrites (Web Speech API)
4. **Analyse AI** (Transformers.js):
   - Clarté de communication
   - Structure des réponses (STAR method)
   - Confiance vocale
   - Points d'amélioration

### Interview Technique
1. **Sélection langage**: Java, C++, JS, Python
2. **Quiz 25+ questions** (multiple choice + coding simulé)
3. **Exemples questions**:
   - **Java**: "Quelle est la différence entre == et .equals()?"
   - **C++**: "Qu'est-ce qu'un pointeur intelligent (smart pointer)?"
   - **JavaScript**: "Expliquez les promesses et async/await"
   - **Python**: "Différence entre list et tuple?"
4. **Évaluation temps réel** avec AI
5. **Feedback détaillé** par question

---

## 📊 Rapports & Analytics

### Rapport Oral
- **Score global**: /100 (communication, structure, technique)
- **Graphiques Chart.js**:
  - Barres: Scores par critère
  - Ligne: Progression dans le temps
- **Points forts/faibles** identifiés par AI
- **Suggestions personnalisées**
- **Export PDF** avec logo

### Rapport Technique
- **Taux de réussite**: % par langage
- **Graphiques**:
  - Pie chart: Répartition erreurs (syntaxe, logique, algorithme)
  - Barres: Scores par sujet (OOP, async, structures de données)
- **Justifications détaillées** pour chaque erreur
- **Code snippets** avec corrections
- **Export PDF/CSV**

---

## 🔐 Sécurité & Règles Firebase

### Firestore Rules
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users: lecture/écriture propres données uniquement
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Jobs: lecture publique, écriture recruteurs uniquement
    match /jobs/{jobId} {
      allow read: if request.auth != null;
      allow create, update: if request.auth != null && 
        get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'recruiter';
    }
    
    // Interviews: propriétaire uniquement
    match /interviews/{interviewId} {
      allow read, write: if request.auth != null && 
        resource.data.userId == request.auth.uid;
    }
  }
}
```

### Protection
- ✅ Authentification requise pour toutes routes
- ✅ CAPTCHA simple sur inscription
- ✅ Rate limiting Firebase (quotas gratuits)
- ✅ Validation côté serveur (Go)

---

## 🤖 AI Locale - Transformers.js

### Modèles utilisés (Hugging Face gratuits)
```javascript
// Analyse de texte (réponses)
import { pipeline } from '@xenova/transformers';

// Sentiment analysis
const sentiment = await pipeline('sentiment-analysis');
const result = await sentiment("Ma réponse à l'interview...");

// Question answering
const qa = await pipeline('question-answering');
```

### Évaluation Quiz
- Comparaison réponses avec base de données
- Scoring automatique
- Génération feedback contextuel
- Détection patterns d'erreurs

---

## 📱 Responsive Design

### Breakpoints Tailwind
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

### Adaptations
- Menu burger mobile
- Grids responsive (col-1 → col-3)
- Graphiques redimensionnables
- Voice UI adapté tactile

---

## 🎬 Animations GSAP

### Exemples
```javascript
// Fade-in sections au scroll
gsap.from('.section', {
  scrollTrigger: '.section',
  opacity: 0,
  y: 50,
  duration: 1
});

// Ondes audio pour voice
gsap.to('.voice-wave', {
  scaleY: 1.5,
  repeat: -1,
  yoyo: true,
  duration: 0.5
});
```

---

## 📦 Données Locales

### Quiz JSON Structure
```json
{
  "language": "Java",
  "difficulty": "medium",
  "questions": [
    {
      "id": 1,
      "question": "Quelle est la différence entre == et .equals() ?",
      "options": ["A", "B", "C", "D"],
      "correctAnswer": "B",
      "explanation": "== compare références, .equals() compare contenu",
      "category": "OOP",
      "difficulty": "easy"
    }
  ]
}
```

---

## 🌐 API Endpoints (Go)

### Auth
- `POST /api/auth/signup` - Inscription
- `POST /api/auth/login` - Connexion
- `GET /api/auth/verify` - Vérifier token

### Interviews
- `POST /api/interviews/oral/start` - Démarrer interview orale
- `POST /api/interviews/oral/submit` - Soumettre réponses
- `POST /api/interviews/tech/start` - Démarrer quiz technique
- `GET /api/interviews/history` - Historique

### Jobs
- `GET /api/jobs` - Liste offres
- `POST /api/jobs` - Créer offre (recruteur)
- `POST /api/jobs/:id/apply` - Postuler

### Reports
- `GET /api/reports/:id` - Obtenir rapport
- `GET /api/reports/:id/pdf` - Télécharger PDF

---

## ⚠️ Disclaimer

**Cette plateforme fournit des simulations AI à but éducatif.**
- Ne remplace pas un conseil professionnel en recrutement
- Les évaluations AI sont indicatives
- Respecte la vie privée (données Firebase sécurisées)

---

## 📊 Quotas Firebase Gratuits

### Firestore
- **Reads**: 50,000/jour
- **Writes**: 20,000/jour
- **Storage**: 1 GB

### Authentication
- **Email/Password**: Illimité
- **Google Sign-In**: Illimité

### Realtime Database
- **Connections**: 100 simultanées
- **Storage**: 1 GB

**Largement suffisant pour tests et petite échelle!**

---

## 🎯 Roadmap

### Version 1.0 (Actuelle)
- ✅ Auth Firebase
- ✅ Interviews orales/techniques
- ✅ Quiz multi-langages
- ✅ Rapports PDF
- ✅ Design McKinsey

### Version 1.1 (Future)
- [ ] Video calls (WebRTC + video)
- [ ] Whiteboard collaboratif (coding en direct)
- [ ] Plus de langages (Rust, Go, TypeScript)
- [ ] ML avancé (fine-tuning modèles)
- [ ] Mobile app (Flutter)

---

## 📞 Support

Pour questions ou bugs:
1. Vérifier les logs Go (`backend/main.go`)
2. Console Firebase pour erreurs
3. Console navigateur (F12)

---

## 📄 Licence

MIT License - 100% Open Source & Gratuit

---

**Préparez-vous aux interviews tech avec notre plateforme AI gratuite!** 🚀

_Design inspiré de McKinsey | Powered by Firebase & Go | AI by Transformers.js_
