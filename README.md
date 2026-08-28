# Bruno Dev Portfolio

A modern, full-stack portfolio landing page built with Next.js, TypeScript, Tailwind CSS, and PostgreSQL.

## Tech Stack

- **Frontend:** Next.js 14, React 18, TypeScript, Tailwind CSS
- **Backend:** Next.js API Routes, Node.js
- **Database:** PostgreSQL with Prisma ORM
- **Form Validation:** React Hook Form + Zod
- **Styling:** Tailwind CSS

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   │   ├── contact/       # Contact form endpoint
│   │   └── portfolio/     # Portfolio data endpoint
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # Reusable React components
│   ├── Hero.tsx          # Landing hero section
│   ├── Navbar.tsx        # Navigation bar
│   ├── Portfolio.tsx     # Portfolio/projects section
│   ├── Contact.tsx       # Contact form
│   └── Footer.tsx        # Footer
└── lib/                   # Utility functions
    └── prisma.ts        # Prisma client singleton

prisma/
└── schema.prisma          # Database schema
```

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL 12+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/rukagana/Bruno-dev.git
   cd Bruno-dev
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Then edit `.env.local` with your PostgreSQL connection string and other configuration.

4. **Set up the database**
   ```bash
   npx prisma db push
   npx prisma generate
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to see the site.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:push` - Sync database with Prisma schema
- `npm run db:generate` - Generate Prisma client
- `npm run db:studio` - Open Prisma Studio

## Features

- ✨ Responsive hero landing page
- 📁 Portfolio/projects showcase
- 📧 Functional contact form with validation
- 🎨 Modern dark theme with Tailwind CSS
- 🔗 API endpoints for portfolio and contact management
- 📱 Mobile-first responsive design
- 🚀 Ready for deployment on Vercel or any Node.js host

## Database Schema

### Portfolio
```prisma
Portfolio {
  id: Int
  title: String
  description: String
  image: String? (optional)
  link: String? (optional)
  technologies: String[]
  createdAt: DateTime
  updatedAt: DateTime
}
```

### ContactMessage
```prisma
ContactMessage {
  id: Int
  name: String
  email: String
  subject: String
  message: String
  read: Boolean (default: false)
  createdAt: DateTime
}
```

## API Endpoints

### Contact
- `POST /api/contact` - Submit a contact form
- `GET /api/contact` - Retrieve all contact messages

### Portfolio
- `GET /api/portfolio` - Retrieve all portfolio items
- `POST /api/portfolio` - Add a new portfolio item

## Environment Variables

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/bruno_dev"

# API
NEXT_PUBLIC_API_URL="http://localhost:3000"

# Email (optional)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

## Deployment

### Deploy to Vercel

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repository
3. Add environment variables in Vercel dashboard
4. Deploy

### Deploy to Other Platforms

Make sure to:
- Set `DATABASE_URL` environment variable
- Run `npx prisma db push` after deployment
- Use a Node.js compatible host (Heroku, Railway, etc.)

## Contributing

Feel free to fork and submit pull requests for any improvements!

## License

MIT
