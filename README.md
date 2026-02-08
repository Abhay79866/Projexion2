# Projexion - Conversion-First Web Design Dashboard

A premium, dark-themed dashboard for managing conversion-first web design projects. Built with React, Tailwind CSS, and Supabase.

## Features

-   **Premium Dark UI**: Glassmorphism navbar, vibrant accent colors, and sleek animations.
-   **Interactive Dashboard**: Track goals, monthly income, and active clients.
-   **Supabase Integration**: Real-time data persistence and user authentication.
-   **Responsive Design**: Fully optimized for all device sizes.

## tech Stack

-   **Frontend**: React, TypeScript, Vite
-   **Styling**: Tailwind CSS, Framer Motion, Lucide React
-   **Backend/Auth**: Supabase

## Local Development

1.  **Install dependencies**:
    ```bash
    npm install
    ```

2.  **Set up Environment Variables**:
    Create a `.env.local` file with your Supabase credentials:
    ```env
    VITE_SUPABASE_URL=your_supabase_url
    VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
    ```

3.  **Run the app**:
    ```bash
    npm run dev
    ```

## Deployment Instructions

### 1. Push to GitHub
Since Git might not be installed or configured, follow these manual steps in your terminal:

1.  Download and install Git from [git-scm.com](https://git-scm.com/).
2.  Initialize the repository:
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    git branch -M main
    ```
3.  Create a new repository on GitHub.
4.  Link and push:
    ```bash
    git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
    git push -u origin main
    ```

### 2. Deploy to Vercel
1.  Go to [Vercel](https://vercel.com) and sign in.
2.  Click **"Add New..."** -> **"Project"**.
3.  Import your new GitHub repository.
4.  Vercel will auto-detect Vite. Click **Deploy**.
5.  **Important**: Add your Supabase Environment Variables in the Vercel Project Settings under "Environment Variables".
