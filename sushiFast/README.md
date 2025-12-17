# 🍣 SushiFast - Application React

> Application web de présentation des menus sushi développée avec React et Vite

[![React](https://img.shields.io/badge/React-19.2.0-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2.4-purple.svg)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.17-cyan.svg)](https://tailwindcss.com/)

##  Description

**SushiFast** est une application React moderne développée dans le cadre du TP noté R5.04 (MMI3 - IUT Meaux). Elle permet aux clients du restaurant SushiFast de découvrir l'ensemble des menus disponibles avec leurs détails complets : ingrédients, saveurs, prix et nombre de pièces.

##  Fonctionnalités

L'application propose les fonctionnalités suivantes :

- Page d'Accueil

- Page de Détails

- Saveurs Spéciales

- Sans California

- Calcul de Prix

- Extrêmes

##  Technologies Utilisées

- **React** 
- **Vite** 
- **React Router DOM**
- **TailwindCSS**
- **JavaScript**

## 📦 Installation

### Prérequis
- Node.js (version 16 ou supérieure)
- npm ou yarn

### Étapes d'installation

1. **Cloner le repository**
```bash
git clone <url-du-repository>
cd TpNoteCheurfa_Carpentier/sushiFast
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Lancer le serveur de développement**
```bash
npm run dev
```

4. **Ouvrir l'application**
L'application sera accessible à l'adresse : `http://localhost:5173`

## 🚀 Scripts Disponibles

```bash
npm run dev      # Lancer le serveur de développement
npm run build    # Créer une version de production
npm run preview  # Prévisualiser la version de production
npm run lint     # Vérifier le code avec ESLint
```

## 📁 Structure du Projet

```
sushiFast/
├── public/
│   ├── data/
│   │   └── boxes.json          # Données des menus
│   └── images/                 # Images des menus
├── src/
│   ├── api/
│   │   └── methods.jsx         # Fonctions API
│   ├── components/
│   │   ├── Header.jsx          # En-tête avec navigation
│   │   ├── Footer.jsx          # Pied de page
│   │   └── MenuCard.jsx        # Carte de menu réutilisable
│   ├── pages/
│   │   ├── Accueil.jsx         # Page d'accueil
│   │   ├── MenuDetail.jsx      # Détails d'un menu
│   │   ├── Saveurs.jsx         # Menus avec saveurs spéciales
│   │   ├── SansCalifornia.jsx  # Menus sans California
│   │   ├── Prix.jsx            # Calcul de prix
│   │   └── Extremes.jsx        # Menus min/max
│   ├── App.jsx                 # Composant principal
│   ├── main.jsx                # Point d'entrée
│   └── index.css               # Styles globaux
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Design

L'application utilise une palette de couleurs moderne :
- **Fond principal** : `#FAECE4` (beige clair)
- **Accent primaire** : Dégradé rose (`#ec4899` → `#db2777`)
- **Accent secondaire** : Dégradé violet (`#a855f7` → `#7c3aed`)
- **Typographie** : Police Inter de Google Fonts

### Fonctionnalités visuelles
- ✨ Animations fluides (fade-in, slide-in)
- 🎯 Effets de hover sur les cartes
- 📱 Design responsive (mobile, tablette, desktop)
- 🎨 Glassmorphism et dégradés modernes
- 🖱️ Scrollbar personnalisée

## 📊 Données

Les données sont stockées dans le fichier `public/data/boxes.json` avec la structure suivante :

```json
{
  "id": 1,
  "nom": "Tasty Blend",
  "pieces": 12,
  "prix": 12.50,
  "image": "tasty-blend",
  "aliments": [
    {
      "nom": "California Saumon Avocat",
      "quantite": 3
    }
  ],
  "saveurs": ["saumon", "avocat", "cheese"]
}
```

## 🔧 Configuration

### Vite Configuration
Le projet utilise Vite avec le plugin React pour un développement rapide et un build optimisé.

### TailwindCSS
TailwindCSS 4.x est configuré avec l'import direct dans `index.css`.

## 👥 Auteurs

- **Développé pour** : IUT Meaux - MMI3
- **Module** : R5.04 - TP noté React
- **Cas d'étude** : SushiFast

## 📝 Contraintes Techniques Respectées

✅ Utilisation du fichier `boxes.json` pour les données  
✅ Header et Footer présents sur toutes les pages  
✅ Framework CSS (TailwindCSS) utilisé  
✅ Routage implémenté avec React Router  
✅ Composants fonctionnels React  
✅ Code documenté avec JSDoc  
✅ README complet  

## 🌟 Fonctionnalités Bonus

- 🎨 Design moderne et attractif
- 📱 Responsive design complet
- ⚡ Animations et transitions fluides
- 🔍 Gestion des erreurs et états de chargement
- 📊 Statistiques détaillées sur chaque page
- 🖼️ Gestion des images manquantes
- 💡 Informations contextuelles sur chaque page

## 📄 Licence

Ce projet est développé dans un cadre pédagogique pour l'IUT de Meaux.

---

**Développé avec ❤️ pour le TP React - IUT Meaux MMI3**
