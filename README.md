# Presentation Generator

A modern web application built with Next.js for creating and managing presentations with authentication and subscription features.

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework for production
- [Prisma](https://www.prisma.io/) - Next-generation ORM
- [Shadcn/ui](https://ui.shadcn.com/) - Beautiful and accessible UI components
- [Bun](https://bun.sh/) - Fast all-in-one JavaScript runtime & package manager
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework

## Features

- 🔐 Authentication system
- 💳 Subscription model
- 🎨 Theme support
- 📱 Responsive design
- 🛡️ Protected routes
- 🎯 Modern UI components

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) installed on your machine
- A database (configured in your Prisma schema)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Samurai1414/presentation-gen.git
cd presentation-gen
```

2. Install dependencies:
```bash
bun install
```

3. Set up your environment variables:
```bash
cp .env.example .env
```
Edit `.env` with your configuration.
```
# DATABASE_URL = 'YOUT_DATABASE_URL'
DATABASE_URL = 'postgresql://neondb_owner:npg_pvaxJ8snKNq5@ep-billowing-band-a8yv9s06-pooler.eastus2.azure.neon.tech/neondb?sslmode=require&channel_binding=require'

# NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY = 'YOUR_CLERK_PUBLISHABLE_KEY'
# CLERK_SECRET_KEY = 'YOUR_CLERK_SECRET_KEY'
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_YWRqdXN0ZWQtZ29yaWxsYS0zNy5jbGVyay5hY2NvdW50cy5kZXYk
CLERK_SECRET_KEY=sk_test_6UIJQ1JjNtRK8T841u41X0UaZSkt9g3RuoIpwHuol1

NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL = /callback
NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL = /callback

NEXT_PUBLIC_HOST_URL = 'http://localhost:3000'

OPENAI_API_KEY = 'YOUR_OPENAI_API_KEY'

LEMON_SQUEEZY_API_KEY = 'YOUR_LEMON_SQUEEZY_API_KEY'
LEMON_SQUEEZY_STORE_ID = 'YOUR_LEMON_SQUEEZY_STORE_ID'
LEMON_SQUEEZY_WEBHOOK_SECRET = 'YOUR_LEMON_SQUEEZY_WEBHOOK_SECRET'
NEXT_PUBLIC_LEMON_SQUEEZY_API = 'https://api.lemon.squeezy.com/v1'

LEMONSQUEEZY_API_KEY = {API_KEY}
LEMONSQUEEZY_STORE_ID = {STORE_ID}
LEMON_SQUEEZY_VARIANT_ID = {VARIANT_ID}
LEMONSQUEEZY_WEBHOOK_SECRET = {WEBHOOK_SECRET}
NEXT_PUBLIC_LEMON_SQUEEZY_API = 'https://api.lemon.squeezy.com/v1'

UPLOADCARE_PUBLIC_KEY = 'YOUR_UPLOADCARE_PUBLIC_KEY'

```

4. Set up the database:
```bash
bunx prisma generate
bunx prisma db push
```

### Development

1. Start the development server:
```bash
bun run dev
```

2. Open Prisma Studio to manage your database:
```bash
bunx prisma studio
```

The application will be available at [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── actions/       # Server actions
├── app/          # App router pages and layouts
├── components/   # UI components
├── hooks/        # Custom React hooks
├── lib/          # Utility functions and configurations
├── provider/     # Context providers
└── store/        # State management
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.