# AI Prompt Generator - Installation & Setup Guide

## 🚀 Quick Start (Recommended)

The **easiest way** to run this code is to use it directly in Claude's interface - no installation required! The React component will run automatically in the artifact above.

---

## 💻 Local Installation Options

### Option 1: Create React App (Beginner-Friendly)

#### Prerequisites
- Node.js (version 16 or higher) - [Download here](https://nodejs.org/)
- npm (comes with Node.js)

#### Step-by-Step Installation

1. **Create a new React project**
   ```bash
   npx create-react-app ai-prompt-generator
   cd ai-prompt-generator
   ```

2. **Install required dependencies**
   ```bash
   npm install lucide-react
   ```

3. **Replace the default App.js file**
   - Navigate to `src/App.js`
   - Delete all existing content
   - Copy the React component code from the artifact above
   - Paste it into `src/App.js`

4. **Update the import statement** (if needed)
   - Change the first line from:
     ```javascript
     import React, { useState } from 'react';
     ```
   - To:
     ```javascript
     import React, { useState } from 'react';
     import './App.css';
     ```

5. **Install Tailwind CSS** (for styling)
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

6. **Configure Tailwind**
   - Open `tailwind.config.js` and replace with:
     ```javascript
     module.exports = {
       content: [
         "./src/**/*.{js,jsx,ts,tsx}",
       ],
       theme: {
         extend: {},
       },
       plugins: [],
     }
     ```

7. **Add Tailwind to your CSS**
   - Open `src/index.css`
   - Replace content with:
     ```css
     @tailwind base;
     @tailwind components;
     @tailwind utilities;
     ```

8. **Run the application**
   ```bash
   npm start
   ```

The app will open in your browser at `http://localhost:3000`

---

### Option 2: Vite (Faster Development)

#### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

#### Installation Steps

1. **Create Vite React project**
   ```bash
   npm create vite@latest ai-prompt-generator -- --template react
   cd ai-prompt-generator
   npm install
   ```

2. **Install dependencies**
   ```bash
   npm install lucide-react
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

3. **Configure Tailwind** (same as Option 1, steps 6-7)

4. **Replace src/App.jsx**
   - Copy the React component code from the artifact
   - Paste into `src/App.jsx`

5. **Run the development server**
   ```bash
   npm run dev
   ```

---

### Option 3: Next.js (Full-Stack Framework)

#### Prerequisites
- Node.js (version 16 or higher)

#### Installation Steps

1. **Create Next.js project**
   ```bash
   npx create-next-app@latest ai-prompt-generator --typescript --tailwind --eslint
   cd ai-prompt-generator
   ```

2. **Install Lucide React**
   ```bash
   npm install lucide-react
   ```

3. **Create the component**
   - Create `components/PromptGenerator.js`
   - Copy the React component code from the artifact
   - Paste into this file

4. **Update pages/index.js**
   ```javascript
   import PromptGenerator from '../components/PromptGenerator'
   
   export default function Home() {
     return <PromptGenerator />
   }
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

---

## 🌐 Online Deployment Options

### Deploy to Vercel (Free)

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/ai-prompt-generator.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Click "New Project"
   - Import your repository
   - Deploy automatically

### Deploy to Netlify (Free)

1. **Build your project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop your `build` folder
   - Or connect your GitHub repository for automatic deployments

---

## 🔧 Troubleshooting

### Common Issues

**1. "Module not found: Can't resolve 'lucide-react'"**
```bash
npm install lucide-react
```

**2. Tailwind styles not working**
- Ensure Tailwind CSS is properly installed and configured
- Check that `@tailwind` directives are in your CSS file

**3. "npm command not found"**
- Install Node.js from [nodejs.org](https://nodejs.org/)
- Restart your terminal after installation

**4. Port already in use**
```bash
# Kill process on port 3000
npx kill-port 3000
# Or use a different port
npm start -- --port 3001
```

**5. Build errors**
- Clear node_modules and reinstall:
  ```bash
  rm -rf node_modules package-lock.json
  npm install
  ```

---

## 📱 Mobile/Tablet Considerations

The app is fully responsive and works on:
- ✅ Desktop browsers
- ✅ Mobile phones
- ✅ Tablets
- ✅ Touch devices

---

## 🎯 Usage Tips

1. **For AI Image Generation**
   - Copy the generated prompts
   - Use with Midjourney, DALL-E, Stable Diffusion, etc.
   - Experiment with different subjects for variety

2. **Customization**
   - Modify the arrays in the code to add your own:
     - Poses
     - Environments
     - Lighting styles
     - Color palettes
     - Effects

3. **Performance**
   - The app runs entirely in the browser
   - No server required
   - Works offline after initial load

---

## 🆘 Need Help?

**If you encounter issues:**

1. **Check the browser console** for error messages (F12 → Console)
2. **Verify all dependencies** are installed correctly
3. **Ensure Node.js version** is 16 or higher: `node --version`
4. **Try the online version** in Claude's interface first
5. **Check GitHub issues** for similar problems

**Alternative: Use the artifact directly in Claude's interface - no installation needed!**

---

## 📄 License

This code is provided as-is for educational and personal use. Feel free to modify and customize for your needs!