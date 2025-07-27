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