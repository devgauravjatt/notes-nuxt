# Notes App

A modern, full-stack notes application built with Nuxt 3, featuring user authentication and real-time note management.

## Features

- **User Authentication** - Secure registration and login with JWT tokens
- **Note Management** - Create, read, update, and delete personal notes
- **Modern UI** - Clean interface built with TailwindCSS and custom fonts
- **Database Integration** - Prisma ORM with MySQL for data persistence
- **Server-Side Rendering** - Powered by Nuxt 3 for optimal performance

## Tech Stack

- **Framework:** Nuxt 3
- **Database:** MySQL with Prisma ORM
- **Authentication:** JWT with bcryptjs
- **Styling:** TailwindCSS
- **Validation:** validator.js
- **Utilities:** VueUse, SweetAlert2

## Prerequisites

- Node.js (v18 or higher)
- MySQL database
- npm, pnpm, yarn, or bun

## Setup

1. **Install dependencies:**

```bash
npm install
```

2. **Configure environment variables:**

Create a `.env` file in the root directory:

```env
DATABASE_URL="mysql://user:password@localhost:3306/notes_db"
JWT_SECRET="your-secret-key-here"
```

3. **Set up the database:**

```bash
# Generate Prisma Client
npx prisma generate

# Run database migrations
npx prisma migrate dev

# (Optional) Seed the database
npx prisma db seed
```

## Development

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

## Production

Build and preview the application for production:

```bash
# Build
npm run build

# Preview
npm run preview
```

## Project Structure

```
├── components/       # Vue components
├── pages/           # Application routes
│   ├── index.vue    # Notes dashboard
│   ├── login.vue    # Login page
│   └── register.vue # Registration page
├── server/          # API endpoints
├── prisma/          # Database schema and migrations
├── middleware/      # Route middleware
├── lib/             # Utility functions
└── assets/          # Global styles and assets
```

## API Endpoints

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Authenticate user
- `GET /api/notes` - Get user notes
- `POST /api/notes` - Create a new note
- `PUT /api/notes/:id` - Update a note
- `DELETE /api/notes/:id` - Delete a note

## Database Schema

### User

- id (Int, Primary Key)
- email (String, Unique)
- password (String)
- salt (String)
- createdAt (DateTime)
- updatedAt (DateTime)

### Note

- id (Int, Primary Key)
- userId (Int, Foreign Key)
- text (Text)
- createdAt (DateTime)
- updatedAt (DateTime)

## Resources

- [Nuxt 3 Documentation](https://nuxt.com/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
