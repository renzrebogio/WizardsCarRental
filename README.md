# WizardsCarRental

A car rental web application built using React by the goat Zee

## 📦 Requirements

Before running the project, make sure you have the following installed:

* [Node.js](https://nodejs.org/) (Recommended: Latest LTS version)
* npm (comes with Node.js)
* Git

You can check if they are installed by running:

```bash
node -v
npm -v
git --version
```

---

# 🚀 Getting Started

## 1. Clone the Repository

Open your terminal or command prompt and run:

```bash
git clone https://github.com/renzrebogio/WizardsCarRental.git
```

---

## 2. Open the Project Folder

```bash
cd WizardsCarRental
```

---

## 3. Install Dependencies

This installs all required packages for the project.

```bash
npm install
```

Wait for the installation to finish.

---

## 4. Run the Development Server

Start the React development server:

```bash
npm run dev
```

After running the command, the terminal should show a local URL similar to:

```bash
http://localhost:5173/
```

Hold CTRL and click the link, or paste it into your browser.

---

# 🛠 Common Commands

## Start Development Server

```bash
npm run dev
```

## Build Production Version

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

---

# 📁 Project Structure

Example structure:

```bash
WizardsCarRental/
│
├── public/          # Static files
├── src/             # Main source code
│   ├── components/  # Reusable components
│   ├── pages/       # Website pages
│   ├── assets/      # Images and assets
│   └── App.jsx      # Main app component
│
├── package.json     # Project dependencies and scripts
├── vite.config.js   # Vite configuration
└── README.md
```

---

# ⚠️ Possible Issues

## "npm is not recognized"

Node.js is either not installed or not added to PATH.

Fix:

* Install Node.js from:
  [https://nodejs.org/](https://nodejs.org/)
* Restart terminal after installation.

---

## Port Already in Use

If localhost:5173 is already used by another application, Vite may use another port automatically.

Example:

```bash
http://localhost:5174/
```

---

## Missing node_modules

If the project does not run properly, delete `node_modules` and reinstall:

```bash
rm -rf node_modules
npm install
```

For Windows PowerShell:

```powershell
Remove-Item -Recurse -Force node_modules
npm install
```

---

# 🌿 Git Workflow

## Pull Latest Changes

Before working:

```bash
git pull origin main
```

---

## Create a New Branch

```bash
git checkout -b your-branch-name
```

Example:

```bash
git checkout -b feature-booking-page
```

---

## Save Changes

```bash
git add .
git commit -m "Your commit message"
```

---

## Push Changes

```bash
git push origin your-branch-name
```

---

# 📌 Notes

* Do not upload `.env` files.
* Always pull latest changes before starting work.
* Ask before modifying core configurations.
* Keep components reusable and organized.

---

# 👨‍💻 Tech Stack

* React
* Vite
* JavaScript
* CSS / Tailwind (if applicable)

---

# 📞 Contact

If something breaks or you encounter setup issues, message the goat Zee.
