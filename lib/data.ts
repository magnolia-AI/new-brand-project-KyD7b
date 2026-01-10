export interface Article {
  id: number;
  title: string;
  description: string;
  category: string;
  slug: string;
  image: string;
  time: string;
  isBreaking?: boolean;
  content?: string;
  author: string;
}

export const NEWS_ARTICLES: Article[] = [
  {
    id: 1,
    title: "Global Summit Reaches Historic Climate Agreement",
    description: "World leaders commit to aggressive carbon reduction targets in unexpected breakthrough at COP30.",
    category: "NEWS",
    slug: "global-summit-climate",
    image: "/images/global-summit.jpg",
    time: "2 MIN AGO",
    isBreaking: true,
    author: "ELENA RODRIGUEZ"
  },
  {
    id: 2,
    title: "Local Hero Saves Neighborhood from Flash Flood",
    description: "Courageous act of bravery as resident rescues three families before emergency services arrived.",
    category: "LOCAL",
    slug: "local-hero-flood",
    image: "/images/local-hero.jpg",
    time: "15 MIN AGO",
    isBreaking: false,
    author: "MARCUS CHEN"
  },
  {
    id: 3,
    title: "Star Striker Signs Record-Breaking Contract",
    description: "The league's top scorer secures move to champions in a deal worth over $250 million.",
    category: "SPORT",
    slug: "star-striker-contract",
    image: "/images/star-striker.jpg",
    time: "1 HOUR AGO",
    isBreaking: false,
    author: "TOMMY STERN"
  },
  {
    id: 4,
    title: "New Study Reveals Secret to Long-Term Memory",
    description: "Scientists discover neural pathway that explains why some memories last a lifetime while others fade.",
    category: "SCIENCE",
    slug: "memory-study-breakthrough",
    image: "/images/science-study.jpg",
    time: "3 HOURS AGO",
    isBreaking: false,
    author: "DR. SARAH VANCE"
  },
  {
    id: 5,
    title: "Opera House Premiere Receives 10-Minute Standing Ovation",
    description: "A bold new interpretation of 'Carmen' stuns critics and audiences alike at the city's grand theater.",
    category: "CULTURE",
    slug: "opera-house-carmen",
    image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?q=80&w=2069&auto=format&fit=crop",
    time: "4 HOURS AGO",
    isBreaking: false,
    author: "LUCIEN VIAL"
  },
  {
    id: 6,
    title: "Tech Giant Announces Revolutionary AI Chips",
    description: "New processing architecture promises 10x efficiency for local machine learning models.",
    category: "BUSINESS",
    slug: "ai-chip-revolution",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
    time: "5 HOURS AGO",
    isBreaking: false,
    author: "ALEX RIVERA"
  }
];

export const CATEGORIES = [
  { name: "News", slug: "news", color: "var(--destructive)" },
  { name: "Sport", slug: "sport", color: "var(--sport-pink)" },
  { name: "Culture", slug: "culture", color: "var(--culture-violet)" },
  { name: "Business", slug: "business", color: "black" },
  { name: "Opinion", slug: "opinion", color: "black" },
];

