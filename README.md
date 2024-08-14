<p align="">
  <img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white" alt="shadcn/ui">
  <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" alt="Prisma">
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js">
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/Turborepo-EF4444?style=for-the-badge&logo=turborepo&logoColor=white" alt="Turborepo">
  <img src="https://img.shields.io/badge/npm_Workspaces-000000?style=for-the-badge&logo=npm&logoColor=white" alt="npm Workspaces">
</p>

# Career-Connect

Connect students with career opportunities using our modern, scalable web platform.

## Table of Contents

- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [For Fullstack Developers](#for-fullstack-developers)
  - [For Backend Developers](#for-backend-developers)
- [Database Operations](#database-operations)
- [Working with Common Packages](#working-with-common-packages)
- [Contributing](#contributing)
- [License](#license)
- [Deployment](#deployment)

## Tech Stack

- Next.js
- TypeScript
- Shadcn UI
- Prisma ORM
- PostgreSQL / SQLite
- Node.js
- Express.js
- Tailwind CSS
- Turborepo
- npm Workspaces

## Project Structure

The project is organized into multiple workspaces:

### Frontends

- Admin Dashboard
- Student Portal

### Common Packages

- TypeScript Configuration
- Tailwind Configuration
- UI Components (Shadcn UI)
- Common Types
- Database (Prisma)

## Features

- Student profile creation and management
- Job and internship listings
- Application tracking
- Company profiles and job posting
- Admin dashboard for platform management
- Real-time notifications
- Analytics and reporting
- Upcoming...

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- pnpm (version 8.15.6 or higher)

### For Fullstack Developers

1. Install dependencies:

   ```
   pnpm install
   ```

2. Run all services:
   ```
   pnpm dev
   ```

### For Backend Developers

1. Install dependencies:

   ```
   pnpm install
   ```

2. Run backend services:
   ```
   pnpm backend:dev
   ```

## Database Operations

- Preview database:

  ```
  pnpm db:studio
  ```

- Sync database schema:

  ```
  pnpm db:generate
  ```

- Push schema changes to database:
  ```
  pnpm db:push
  ```

## Working with Common Packages

### Common Types

To add or modify common types:

1. Navigate to `packages/types`
2. Add or modify type definitions
3. These types will be available to all parts of the project

### UI Components

To add or modify common UI components:

1. Navigate to `packages/ui`
2. Add or modify components
3. These components can be reused across all frontends

### Database Schema

To make changes to the database schema:

1. Navigate to `packages/database`
2. Modify the Prisma schema file
3. Run `pnpm db:generate` to update types
4. Run `pnpm db:push` to sync changes with the database

## Contributing

We welcome contributions to Career-Connect! Please follow these steps to contribute:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Submit a pull request

## Deployment

Instructions for deploying Career-Connect will be added here as the project progresses. We plan to support deployment on various cloud platforms and containerized environments.
