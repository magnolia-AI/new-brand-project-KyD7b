export type Article = {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  time: string;
  isBreaking?: boolean;
  content?: string;
};

export const ALL_ARTICLES: Article[] = [
  {
    id: 1,
    title: "Global Summit Reaches Historic Climate Agreement",
    description: "World leaders commit to aggressive carbon reduction targets in unexpected breakthrough at COP30.",
    category: "WORLD",
    image: "/images/global-summit.jpg",
    time: "2 MIN AGO",
    isBreaking: true
  },
  {
    id: 2,
    title: "Local Hero Saves Neighborhood from Flash Flood",
    description: "Courageous act of bravery as resident rescues three families before emergency services arrived.",
    category: "LOCAL",
    image: "/images/local-hero.jpg",
    time: "15 MIN AGO"
  },
  {
    id: 3,
    title: "Star Striker Signs Record-Breaking Contract",
    description: "The league's top scorer secures move to champions in a deal worth over $250 million.",
    category: "SPORT",
    image: "/images/star-striker.jpg",
    time: "1 HOUR AGO"
  },
  {
    id: 4,
    title: "New Study Reveals Secret to Long-Term Memory",
    description: "Scientists discover neural pathway that explains why some memories last a lifetime while others fade.",
    category: "SCIENCE",
    image: "/images/science-study.jpg",
    time: "3 HOURS AGO"
  },
  {
    id: 5,
    title: "New Museum of Modern Art Opens Downtown",
    description: "The city's newest cultural landmark features a massive collection of digital and physical installations.",
    category: "CULTURE",
    image: "https://images.unsplash.com/photo-1554941068-a252680d25d9?q=80&w=2070&auto=format&fit=crop",
    time: "5 HOURS AGO"
  },
  {
    id: 6,
    title: "Interest Rates Hold Steady Amid Inflation Hopes",
    description: "Central bank signal suggests the recent tightening cycle may finally be at an end.",
    category: "BUSINESS",
    image: "https://images.unsplash.com/photo-1611974714008-66d15274847b?q=80&w=2070&auto=format&fit=crop",
    time: "6 HOURS AGO"
  },
  {
    id: 7,
    title: "The Case for a Four-Day Work Week",
    description: "Opinion: Why the standard five-day model is a relic of the past that hurts productivity.",
    category: "OPINION",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop",
    time: "12 HOURS AGO"
  }
];

export const CATEGORIES = [
  { name: "News", slug: "news", color: "var(--destructive)" },
  { name: "Sport", slug: "sport", color: "var(--sport-pink)" },
  { name: "Culture", slug: "culture", color: "var(--culture-violet)" },
  { name: "Business", slug: "business", color: "var(--foreground)" },
  { name: "Opinion", slug: "opinion", color: "var(--primary)" },
];

