# ⚡ Démarrage Rapide - Interview Platform

## 🎯 En 3 étapes (10 minutes)

### 1️⃣ Configuration Firebase (5 min)

**Créer projet Firebase**:
1. Aller sur https://console.firebase.google.com/
2. "Ajouter un projet" → Nom: `interview-platform`
3. Activer **Authentication** (Email/Password + Google optionnel)
4. Activer **Firestore Database** (mode production)

**Configuration Web**:
1. Project Settings → Your apps → Web (</>) 
2. Register app
3. Copier config → Coller dans `public/js/firebase-config.js`

**Service Account Key**:
1. Project Settings → Service accounts
2. Generate new private key → Télécharger JSON
3. Renommer `serviceAccountKey.json`
4. Placer dans `backend/serviceAccountKey.json`

**Firestore Rules**:
1. Firestore → Rules
2. Copier contenu de `firestore.rules`
3. Publier

### 2️⃣ Installation Go (2 min)

```bash
cd C:\Users\user\CascadeProjects\interview-platform\backend
go mod download
```

### 3️⃣ Démarrer (1 min)

```bash
# Dans backend/
go run main.go
```

Ouvrir: **http://localhost:8080** 🚀

---

## ✅ Checklist

- [ ] Firebase projet créé
- [ ] Authentication activée
- [ ] Firestore activée
- [ ] Config web copiée dans firebase-config.js
- [ ] serviceAccountKey.json téléchargé
- [ ] Rules Firestore déployées
- [ ] `go mod download` exécuté
- [ ] Serveur démarre sans erreur
- [ ] http://localhost:8080 accessible

---

## 🎨 Design McKinsey

### Palette
- **Bleu Marine**: `#001F3F` - Primary
- **Gris**: `#7F8C8D` - Secondary
- **Vert**: `#27AE60` - Success
- **Blanc/Noir**: Contrasts

### Typo
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)
- **Code**: Fira Code (monospace)

---

## 👥 Profils

### 🎓 Étudiant
- Simulations interviews (orales + techniques)
- Recherche emplois
- RDV recruteurs
- Rapports détaillés

### 💼 Recruteur
- Création offres
- Entretiens réels
- Gestion RDV
- Stats étudiants

---

## 🎤 Fonctionnalités Clés

### Interviews Orales
- WebRTC voice
- Questions comportementales AI
- Transcription automatique
- Analyse communication

### Interviews Techniques
- 4 langages: Java, C++, JS, Python
- 25+ questions par langage
- Évaluation AI temps réel
- Feedback détaillé

### Rapports
- Scores graphiques (Chart.js)
- Points forts/faibles
- Suggestions personnalisées
- Export PDF

---

## 🚀 Prochaines Étapes

1. **S'inscrire** comme étudiant ou recruteur
2. **Lancer simulation** interview orale
3. **Tester quiz** technique (Java recommandé)
4. **Consulter rapport** avec graphiques
5. **Explorer** offres d'emploi

---

## 📚 Docs Complètes

- **README.md** - Guide complet (10000+ mots)
- **INSTALLATION.md** - Installation détaillée
- **firestore.rules** - Règles sécurité Firebase

---

## ⚠️ Disclaimer

**Simulations AI éducatives uniquement.**
Ne remplace pas conseil professionnel en recrutement.

---

**Préparez-vous aux interviews tech avec notre AI gratuite!** 🎯

Design inspiré de McKinsey | Go + Firebase + Transformers.js
