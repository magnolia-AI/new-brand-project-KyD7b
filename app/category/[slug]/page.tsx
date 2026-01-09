import { notFound } from "next/navigation";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CATEGORY_DATA: Record<string, { title: string, color: string, description: string }> = {
  sport: {
    title: "Sport",
    color: "bg-sport-pink",
    description: "The latest scores, highlights, and expert analysis from the world of sports.",
  },
  culture: {
    title: "Culture",
    color: "bg-culture-violet",
    description: "Entertainment, arts, and the biggest cultural shifts happening right now.",
  },
  business: {
    title: "Business",
    color: "bg-black",
    description: "Markets, startups, and global economic trends that matter.",
  },
  news: {
    title: "News",
    color: "bg-destructive",
    description: "Breaking news and deep dives into current events around the globe.",
  },
  opinion: {
    title: "Opinion",
    color: "bg-primary",
    description: "Provocative ideas and sharp analysis from our columnists.",
  }
};

// Mock data for category articles
const MOCK_ARTICLES = [
  {
    id: 1,
    title: "The Future of Digital Currency in Emerging Markets",
    excerpt: "How mobile payments are reshaping economies and challenging traditional banking systems.",
    author: "MARCUS CHEN",
    time: "45 MIN AGO",
    isBreaking: false,
    image: "https://images.unsplash.com/photo-1518186211198-592f6f571556?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Behind the Scenes of the Year's Biggest Blockbuster",
    excerpt: "Director reveals the technical challenges of filming without CGI in remote locations.",
    author: "SARAH JENKINS",
    time: "2 HOURS AGO",
    isBreaking: true,
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Tech Giants Announce New Privacy Standards",
    excerpt: "A coordinated effort to standardize encryption across multiple platforms.",
    author: "ALEX RIVERA",
    time: "4 HOURS AGO",
    isBreaking: false,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
  }
];

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = CATEGORY_DATA[slug.toLowerCase()];

  if (!category) {
    notFound();
  }

  return (
    <div className="min-h-[70vh]">
      {/* Category Header */}
      <div className={`${category.title === 'Sport' ? 'bg-[#E34F96]' : category.title === 'Culture' ? 'bg-[#782F79]' : 'bg-black'} text-white py-12`}>
        <div className="container mx-auto px-4">
          <h1 className="text-6xl md:text-9xl font-black italic uppercase tracking-tighter mb-4">
            {category.title}
          </h1>
          <p className="text-xl md:text-2xl font-body max-w-2xl opacity-90">
            {category.description}
          </p>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MOCK_ARTICLES.map((article) => (
            <Card key={article.id} className="rounded-none border-2 border-black overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none transition-all cursor-pointer group">
              <div className="aspect-video relative overflow-hidden bg-slate-200">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                {article.isBreaking && (
                  <Badge className="absolute top-2 left-2 bg-destructive border-2 border-white rounded-none">
                    BREAKING
                  </Badge>
                )}
              </div>
              <CardHeader className="p-4">
                <CardTitle className="text-2xl font-black uppercase leading-tight group-hover:underline decoration-2">
                  {article.title}
                </CardTitle>
                <div className="flex items-center gap-2 mt-2 text-[10px] font-bold text-slate-500 uppercase">
                  <span>{article.time}</span>
                  <span>•</span>
                  <span>BY {article.author}</span>
                </div>
              </CardHeader>
              <CardContent className="px-4 pb-4">
                <p className="font-body text-sm text-slate-600">
                  {article.excerpt}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}

