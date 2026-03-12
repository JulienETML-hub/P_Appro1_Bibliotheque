# 2.1 Guide d'installation

---

## 2.1.1 Environnement de base et applications requises

Sur un système **Windows 10**, installer les applications suivantes :

- **Node.js** (v24.x)
- **Docker Desktop**
- **Outils de développement** (ex. Visual Studio Code) *(si vous souhaitez modifier le projet)*
- **GitHub Desktop** *(facultatif)*

---

## 2.1.2 Installation du projet

### 1. Récupération du projet

Deux possibilités :

- Via Git :

```bash
git clone https://github.com/JulienETML-hub/P_Appro1_Bibliotheque
```

- Ou en téléchargeant directement la release suivant : 

---

### 2. Configuration du Backend

Se rendre dans le dossier :

```
P_Appro1_Bibliotheque/code/Noveling_Backend
```

Créer un fichier :

```
.env
```

⚠️ Activer l’affichage des extensions de fichiers dans l’explorateur Windows afin d’éviter de créer un fichier `.env.txt`.

Remplir le fichier `.env` comme indiqué ci-dessous :

- Modifier la valeur de `GOOGLE_BOOKS_API_KEY` avec votre propre clé Google Books API.  
  Vous pouvez obtenir une clé en suivant la documentation officielle Google Books API.

- Modifier la valeur de `JWT_SECRET`.  
  Vous pouvez mettre n’importe quelle valeur, mais celle-ci doit rester **strictement confidentielle**.

---

### 3. Démarrage de la base de données (Docker)

À la racine du projet, ouvrir une invite de commande et exécuter :

```bash
cd docker
docker compose up -d
```

Les conteneurs Docker (base de données) sont alors créés et démarrés.

---

### 4. Installation et démarrage du Backend

À la racine du projet :

```bash
cd code/Noveling_Backend
npm install
npm run dev
```

Le serveur backend démarre alors en mode développement.

---

### 5. Installation et démarrage du Frontend

Dans une nouvelle invite de commande, à la racine du projet :

```bash
cd code/Noveling_Frontend
npm install
npm run dev
```

L’application frontend démarre alors en mode développement.

---

## ✅ Résultat

Si toutes les étapes sont correctement exécutées :

- La base de données fonctionne via Docker
- Le backend est accessible
- Le frontend est accessible via l’URL locale affichée dans le terminal

L’application est maintenant prête à être utilisée en environnement de développement.
