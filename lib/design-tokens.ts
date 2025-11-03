// lib/design-tokens.ts
export const colors = {
  // Primary Brand Colors (Enhanced from original pink)
  primary: {
    50: '#fdf2f8',
    100: '#fce7f3',
    200: '#fbcfe8',
    300: '#f9a8d4',
    400: '#f472b6',  // Original pink-400
    500: '#ec4899',  // Enhanced for better contrast
    600: '#db2777',  // Hover states
    700: '#be185d',
    800: '#9d174d',
    900: '#831843',
  },
  
  // Neutrals (Keeping original grays)
  neutral: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',  // Original gray-200 (Cart sidebar)
    300: '#d1d5db',  // Original gray-300 (Cart badge border)
    400: '#9ca3af',
    500: '#6b7280',  // Original gray-500 (Headings)
    600: '#4b5563',  // Original gray-600 (Subheadings)
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },
  
  // Zinc Colors (From original project)
  zinc: {
    200: '#e4e4e7',  // Original border-zinc-200
    400: '#a1a1aa',  // Original bg-zinc-400 (Add to cart)
    700: '#3f3f46',  // Original text-zinc-700 (Product names)
  },
  
  // Accent Colors (Enhanced from original)
  accent: {
    gold: {
      400: '#facc15',  // Original yellow-400 (Cart buttons)
      500: '#eab308',  // Enhanced hover
    },
    coral: {
      300: '#f9a8d4',  // Original pink-300 (Remove button)
      400: '#f472b6',  // Original pink-400 (Cart badge)
      500: '#ec4899',  // Enhanced
    },
    blue: {
      300: '#93c5fd',  // Original blue-300 (Buy now button)
      400: '#60a5fa',
    },
    teal: {
      400: '#2dd4bf',  // Bangladeshi cultural accent
      500: '#14b8a6',
    }
  },
  
  // Functional Colors
  functional: {
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6',
  }
}

export const typography = {
  // Headings
  headings: {
    h1: 'text-4xl md:text-5xl lg:text-6xl font-bold',
    h2: 'text-3xl md:text-4xl font-semibold',
    h3: 'text-xl md:text-2xl font-semibold',
    h4: 'text-lg md:text-xl font-semibold',
  },
  
  // Body Text
  body: {
    large: 'text-lg',
    base: 'text-base',
    small: 'text-sm',
    xs: 'text-xs',
  },
  
  // Weights
  weights: {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  }
}

export const buttons = {
  // Primary Buttons
  primary: {
    base: 'bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl',
    small: 'bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200',
    large: 'bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200',
  },
  
  // Secondary Buttons (Gold accent)
  secondary: {
    base: 'bg-accent-gold-400 hover:bg-accent-gold-500 text-neutral-800 px-6 py-3 rounded-lg font-semibold transition-colors duration-200',
    small: 'bg-accent-gold-400 hover:bg-accent-gold-500 text-neutral-800 px-4 py-2 rounded-lg font-medium transition-colors duration-200',
  },
  
  // Outline Buttons
  outline: {
    base: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-50 px-6 py-3 rounded-lg font-semibold transition-colors duration-200',
    small: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-50 px-4 py-2 rounded-lg font-medium transition-colors duration-200',
  },
  
  // Ghost Buttons
  ghost: {
    base: 'text-neutral-600 hover:bg-neutral-100 px-4 py-2 rounded-lg font-medium transition-colors duration-200',
  }
}

export const cards = {
  product: {
    base: 'bg-white rounded-xl border border-zinc-200 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1',
    image: 'rounded-lg overflow-hidden bg-neutral-100',
  },
  category: {
    base: 'bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105',
  }
}

export const layout = {
  container: 'container mx-auto px-4 sm:px-6 lg:px-8',
  section: 'py-16 lg:py-24',
  grid: {
    products: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6',
    categories: 'grid md:grid-cols-2 lg:grid-cols-3 gap-8',
  }
}

export const animations = {
  transition: {
    default: 'transition-all duration-300',
    colors: 'transition-colors duration-200',
    transform: 'transition-transform duration-300',
  },
  hover: {
    lift: 'hover:-translate-y-1 hover:shadow-lg',
    scale: 'hover:scale-105',
  }
}