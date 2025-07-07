# Alpha.AI - Intelligent Search Engine

## 🚀 Overview

Alpha.AI is a production-ready AI search engine that combines intelligent LLM routing with web search capabilities. It automatically selects the best AI model for each query and provides real-time insights through a dynamic right panel interface.

## ✨ Key Features

### 🧠 **Intelligent LLM Routing**
- **Automatic Model Selection** - No manual model picker needed
- **Query Analysis** - Detects intent (coding, research, creative, factual, math, conversational)
- **Complexity Assessment** - Routes to appropriate model based on query complexity
- **Fallback System** - Built-in error handling and model fallbacks

### 🔍 **Web Search Integration**
- **Tavily Integration** - Real-time web search for current information
- **Source Citations** - Automatic citation management with relevance scores
- **Smart Context** - Combines AI knowledge with current web data

### 🎨 **Modern UI/UX**
- **85/15 Layout** - Optimized chat area with dedicated right panel
- **Responsive Design** - Mobile-friendly with adaptive layouts
- **shadcn/ui Components** - Beautiful, accessible component library
- **Dark/Light Themes** - Automatic theme switching

### 📊 **Real-time Analytics**
- **Model Usage Tracking** - See which model is selected and why
- **Performance Metrics** - Response times, costs, and confidence scores
- **Source Management** - Categorized citations with quality indicators

## 🛠 Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **UI**: shadcn/ui, Tailwind CSS, Framer Motion
- **Backend**: Next.js API Routes, Supabase
- **AI Models**: Groq (Llama 3.1, Mixtral, Gemma 2)
- **Search**: Tavily Web Search API
- **Database**: Supabase with Row Level Security
- **State**: Zustand, React Query
- **Deployment**: Vercel

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Supabase account
- Groq API key
- Tavily API key

### Installation

1. **Clone and install dependencies**
```bash
git clone <your-repo>
cd alpha-ai-search
npm install
```

2. **Environment Setup**
```bash
cp .env.example .env.local
```

3. **Configure environment variables**
```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Groq
GROQ_API_KEY=your_groq_api_key

# Tavily
TAVILY_API_KEY=your_tavily_api_key

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
NODE_ENV=development
```

4. **Start development server**
```bash
npm run dev
```

Visit `http://localhost:3000` to see Alpha.AI in action!

## 🏗 Architecture

### Intelligent Routing System

Alpha.AI automatically analyzes each query and routes it to the optimal model:

```typescript
// Query Analysis Pipeline
Query → Intent Detection → Complexity Assessment → Model Selection → Execution
```

**Supported Models:**
- **Llama 3.1 8B Instant** - Fast responses for simple queries
- **Llama 3.1 70B Versatile** - High-quality reasoning for complex tasks
- **Mixtral 8x7B** - Multi-step reasoning and analysis
- **Gemma 2 9B IT** - Creative and conversational tasks

### Right Panel Analytics

The 15% right panel provides real-time insights:
- **Model Selection Reasoning** - Why this model was chosen
- **Performance Metrics** - Response time, token usage, costs
- **Source Citations** - Web search results with relevance scores
- **Query Analysis** - Intent, complexity, and routing decisions

## 📱 Usage Examples

### Coding Queries
```
"How do I implement authentication in Next.js with Supabase?"
→ Routes to Llama 3.1 8B Instant for fast code examples
```

### Research Questions
```
"What are the latest developments in AI language models in 2024?"
→ Routes to Llama 3.1 70B + enables web search for current info
```

### Creative Tasks
```
"Write a short story about an AI that learns to paint"
→ Routes to Gemma 2 9B IT for creative generation
```

### Complex Analysis
```
"Compare the pros and cons of different database architectures"
→ Routes to Mixtral 8x7B for detailed reasoning
```

## 🚀 Deployment

### Vercel Deployment

1. **Deploy to Vercel**
```bash
vercel deploy
```

2. **Configure Environment Variables**
Set all environment variables in Vercel dashboard

3. **Update Supabase Settings**
Add your Vercel domain to Supabase Auth settings

## 🙏 Acknowledgments

- **Groq** for fast LLM inference
- **Tavily** for web search capabilities
- **Supabase** for backend infrastructure
- **Vercel** for hosting and deployment
- **shadcn/ui** for beautiful components

---

Built with ❤️ for the AI-powered future of search.
