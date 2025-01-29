# Portfolio App

This is a portfolio application built with React, TypeScript, and Vite. It showcases personal projects, skills, and work experience.

# Visit the website 
 
 - https://pratiknichit.vercel.app/ 

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Dynamic Content](#dynamic-content)
- [License](#license)

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/portfolio-app.git
   ```

2. Navigate to the project directory:

   ```sh
   cd portfolio-app
   ```

3. Install the dependencies:

   ```sh
   npm install
   ```

## Usage

To start the development server, run:

```sh
npm run dev
```

Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Project Structure

```
portfolio-app/
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── public/
├── README.md
├── src/
│   ├── AboutPage.tsx
│   ├── App.css
│   ├── App.tsx
│   ├── assets/
│   ├── Components/
│   │   ├── ContactForm.tsx
│   │   ├── ExperienceCard.tsx
│   │   ├── FormModal.tsx
│   │   ├── LineIcon.tsx
│   │   ├── NavBar.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── SelfInfo.tsx
│   ├── ContactMe.tsx
│   ├── data.json
│   ├── ExperiencePage.tsx
│   ├── FooterSection.tsx
│   ├── HomePage.tsx
│   ├── index.css
│   ├── IntroPage.tsx
│   ├── main.tsx
│   ├── ProjectDetails.tsx
│   ├── ProjectPage.tsx
│   ├── types.ts
│   ├── vite-env.d.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the project for production.
- `npm run lint`: Runs ESLint to check for linting errors.
- `npm run preview`: Previews the production build.

## Dependencies

- `@emotion/react`
- `@emotion/styled`
- `@fontsource/roboto`
- `@hookform/resolvers`
- `@mui/icons-material`
- `@mui/material`
- `react`
- `react-dom`
- `react-hook-form`
- `react-markdown`
- `react-router-dom`
- `zod`

## Dynamic Content

The data for the portfolio is rendered dynamically from the [data.json](src/data.json) file. You can easily update the content by modifying the `data.json` file. This allows anyone to use the application and customize it with their own data.

## License

This project is licensed under the MIT License.
