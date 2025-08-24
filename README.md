
# Axios - AI Research Application
<img width="1354" height="542" alt="image" src="https://github.com/user-attachments/assets/fd609a44-77b6-4cdb-8d98-ed52730dbb75" />


A AI Research bot using OSS models built with Next.js, featuring fetching Real time data from Reddit, Facebook and Google / publicly available data.

## Used for

- **AI-Powered Chat**: Intelligent conversation capabilities with AI models
- **Research**: Intelligent Research capabilities with Flagship models.
- **Real-time Updates**: Live chat experience with instant message delivery
- **Marketing**: Via Reddit, and Facebook.
- **Protected Conversation**: Setup locally to protect Conversation.
- **Database Integration**: Supabase backend for data persistence

## 🛠️ Contribute if you are comfortable with

- **Tech stack**: Next, React18, Postgres, Clerk for Auth, Supabase DB integration, Nodejs, Npm, Vercel. 
  
=======
# Perplexity Clone - AI Chat Application

A modern, full-stack AI chat application built with Next.js, featuring real-time conversations, user authentication, and a beautiful responsive interface.

## 🚀 Features

- **AI-Powered Chat**: Intelligent conversation capabilities with AI models
- **User Authentication**: Secure sign-in/sign-up with Clerk
- **Real-time Updates**: Live chat experience with instant message delivery
- **Responsive Design**: Beautiful UI that works on all devices
- **Database Integration**: Supabase backend for data persistence
- **Modern Tech Stack**: Built with Next.js 15 and React 18

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 18, Tailwind CSS
- **Authentication**: Clerk
- **Database**: Supabase
- **Styling**: Tailwind CSS, shadcn/ui components
- **Deployment**: Vercel
- **Package Manager**: npm
>>>>>>> 50b0bd2 (search query database)

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js 18+ installed
- npm or yarn package manager
- Clerk account for authentication
- Supabase project for database

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd axios
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Variables

Create a `.env.local` file in the root directory:

```bash
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/

# Supabase Database
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
axios/
├── app/                    # Next.js app directory
│   ├── _components/       # Shared components
│   ├── (auth)/            # Authentication routes
│   ├── context/           # React context providers
│   ├── globals.css        # Global styles
│   ├── layout.js          # Root layout
│   └── page.js            # Home page
├── components/             # Reusable UI components
│   └── ui/                # shadcn/ui components
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions
├── services/               # External service integrations
│   └── supabase.jsx       # Supabase client
├── middleware.js           # Next.js middleware
└── package.json            # Dependencies and scripts
```

## 🔐 Authentication Setup

### Clerk Configuration

1. Create a Clerk account at [clerk.com](https://clerk.com)
2. Create a new application
3. Copy your publishable key and secret key
4. Add them to your `.env.local` file

### Supabase Setup

1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Create a `users` table with the following schema:

```sql
CREATE TABLE users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT,
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

3. Copy your project URL and anon key to `.env.local`

## 🚀 Deployment

### Vercel Deployment (Recommended)

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel --prod
   ```

3. **Add Environment Variables**:
   - Go to Vercel Dashboard → Your Project → Settings → Environment Variables
   - Add all variables from your `.env.local` file

### Manual Deployment

1. **Build locally**:
   ```bash
   npm run build
   ```

2. **Upload to Vercel**:
   - Drag and drop the `.next` and `public` folders
   - Or use the Vercel dashboard to connect your GitHub repository

## 📱 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🔧 Configuration

### Next.js Config

The project uses Next.js 15 with the app router. Key configurations are in `next.config.mjs`.

### Tailwind CSS

Custom Tailwind configuration is in `tailwind.config.js` with shadcn/ui components.

## 🐛 Troubleshooting

### Common Issues

1. **Middleware Errors**: Ensure Clerk environment variables are set correctly
2. **Build Failures**: Check that all required environment variables are present
3. **Authentication Issues**: Verify Clerk configuration and Supabase connection

### Debug Steps

1. Check browser console for errors
2. Verify environment variables are loaded
3. Test authentication flow step by step
4. Check Supabase logs for database errors

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


---

**Thanks for reading! 🚀**

## 📞 Support

If you encounter any issues or have questions:

1. Check the [troubleshooting](#troubleshooting) section
2. Search existing [GitHub issues](link-to-issues)
3. Create a new issue with detailed information

---

**Happy Coding! 🚀**
