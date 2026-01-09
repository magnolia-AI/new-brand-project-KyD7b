export type Category = "WORLD" | "LOCAL" | "SPORT" | "CULTURE" | "BUSINESS" | "SCIENCE" | "NEWS";

export interface Article {
  id: number;
  title: string;
  description: string;
  category: Category;
  image: string;
  time: string;
  isBreaking?: boolean;
  author: string;
}

export const ARTICLES: Article[] = [
  {
    id: 1,
    title: "Global Summit Reaches Historic Climate Agreement",
    description: "World leaders commit to aggressive carbon reduction targets in unexpected breakthrough at COP30.",
    category: "WORLD",
    image: "/images/global-summit.jpg",
    time: "2 MIN AGO",
    isBreaking: true,
    author: "Jane Doe"
  },
  {
    id: 2,
    title: "Local Hero Saves Neighborhood from Flash Flood",
    description: "Courageous act of bravery as resident rescues three families before emergency services arrived.",
    category: "LOCAL",
    image: "/images/local-hero.jpg",
    time: "15 MIN AGO",
    author: "John Smith"
  },
  {
    id: 3,
    title: "Star Striker Signs Record-Breaking Contract",
    description: "The league's top scorer secures move to champions in a deal worth over $250 million.",
    category: "SPORT",
    image: "/images/star-striker.jpg",
    time: "1 HOUR AGO",
    author: "Sport Reporter"
  },
  {
    id: 4,
    title: "New Study Reveals Secret to Long-Term Memory",
    description: "Scientists discover neural pathway that explains why some memories last a lifetime while others fade.",
    category: "SCIENCE",
    image: "/images/science-study.jpg",
    time: "3 HOURS AGO",
    author: "Dr. Aris"
  },
  {
    id: 5,
    title: "Modern Art Exhibition Opens to Critical Acclaim",
    description: "The city's newest gallery features provocative works that challenge digital-age perceptions.",
    category: "CULTURE",
    image: "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?q=80&w=2145&auto=format&fit=crop",
    time: "5 HOURS AGO",
    author: "Ava Culture"
  },
  {
    id: 6,
    title: "Tech Giants Announce Strategic Merger",
    description: "Two of the world's largest software firms to combine forces in a move that could redefine the industry.",
    category: "BUSINESS",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    time: "6 HOURS AGO",
    author: "Rich Midas"
  },
  {
    id: 7,
    title: "The Future of AI: What to Expect in 2026",
    description: "Experts predict a shift toward more personalized, edge-computing based AI systems.",
    category: "SCIENCE",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    time: "8 HOURS AGO",
    author: "Byte Master"
  },
  {
    id: 8,
    title: "Championship Finals: Underdog Team Takes Lead",
    description: "A stunning performance in the first half leaves the favorites scrambling to recover.",
    category: "SPORT",
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=2070&auto=format&fit=crop",
    time: "10 HOURS AGO",
    author: "Sport Reporter"
  }
];

