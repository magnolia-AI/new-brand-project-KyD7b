import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const NEWS_ARTICLES = [
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
    time: "15 MIN AGO",
    isBreaking: false
  },
  {
    id: 3,
    title: "Star Striker Signs Record-Breaking Contract",
    description: "The league's top scorer secures move to champions in a deal worth over $250 million.",
    category: "SPORT",
    image: "/images/star-striker.jpg",
    time: "1 HOUR AGO",
    isBreaking: false,
    theme: "sport"
  },
  {
    id: 4,
    title: "New Study Reveals Secret to Long-Term Memory",
    description: "Scientists discover neural pathway that explains why some memories last a lifetime while others fade.",
    category: "SCIENCE",
    image: "/images/science-study.jpg",
    time: "3 HOURS AGO",
    isBreaking: false
  }
];

export default function HomePage() {
  const breakingNews = NEWS_ARTICLES.find(a => a.isBreaking);

  return (
    <main className="container mx-auto px-4 py-6">
      {/* Breaking News Sticker */}
      {breakingNews && (
        <div className="breaking-banner mb-6 flex items-center gap-4 animate-in fade-in slide-in-from-top duration-500">
          <div className="bg-black text-white px-3 py-1 text-sm animate-pulse">BREAKING</div>
          <div className="flex-1 truncate">{breakingNews.title}</div>
          <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-black hidden md:flex">
            READ NOW
          </Button>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Column */}
        <div className="lg:col-span-8 space-y-8">
          {/* Top Story */}
          {NEWS_ARTICLES.slice(0, 1).map((article) => (
            <Card key={article.id} className="overflow-hidden border-0 bg-transparent shadow-none group cursor-pointer">
              <div className="relative aspect-video overflow-hidden border-2 border-black">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-black font-black uppercase rounded-none border-2 border-black px-3 py-1">
                    {article.category}
                  </Badge>
                </div>
              </div>
              <CardHeader className="px-0 pt-4">
                <CardTitle className="text-4xl md:text-6xl group-hover:underline decoration-4">
                  {article.title}
                </CardTitle>
                <p className="text-lg md:text-xl font-body leading-relaxed text-slate-700">
                  {article.description}
                </p>
                <div className="flex items-center gap-2 pt-2 text-xs font-bold text-slate-500">
                  <span>{article.time}</span>
                  <span>•</span>
                  <span>BY JANE DOE</span>
                </div>
              </CardHeader>
            </Card>
          ))}

          {/* Sub-grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {NEWS_ARTICLES.slice(1, 4).map((article) => (
              <Card key={article.id} className="border-0 bg-transparent shadow-none group cursor-pointer">
                <div className={`relative aspect-square md:aspect-video overflow-hidden border-2 border-black ${article.category === 'SPORT' ? 'border-r-8 border-b-8' : ''}`}>
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-0 left-0 bg-black text-white px-3 py-1 font-heading text-xs font-bold">
                    {article.category}
                  </div>
                </div>
                <CardHeader className="px-0 pt-4">
                  <CardTitle className="text-2xl group-hover:underline decoration-2">
                    {article.title}
                  </CardTitle>
                  <p className="text-base font-body text-slate-600 line-clamp-2">
                    {article.description}
                  </p>
                  <div className="pt-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    {article.time}
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-8">
          {/* Newsletter */}
          <Card className="bg-primary border-4 border-black p-6 rounded-none">
            <h3 className="text-2xl font-black italic mb-2 tracking-tight">GET THE SCOOP</h3>
            <p className="text-sm font-body font-medium mb-4">The biggest headlines delivered straight to your inbox every morning.</p>
            <div className="space-y-3">
              <input 
                type="email" 
                placeholder="name@example.com" 
                className="w-full p-3 bg-white border-2 border-black focus:outline-none placeholder:text-slate-400 font-heading uppercase text-xs font-bold"
              />
              <Button className="w-full bg-black text-white hover:bg-slate-800 rounded-none h-12 font-black italic">
                SUBSCRIBE NOW
              </Button>
            </div>
          </Card>

          {/* Trending */}
          <div className="border-t-4 border-black pt-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white p-4">
            <h3 className="text-xl font-black mb-4 italic underline decoration-primary underline-offset-4">MOST READ</h3>
            <div className="space-y-6">
              {[
                "10 Secrets to Better Sleep Revealed",
                "Stock Market Hits All-Time High Amidst Tech Boom",
                "NASA Discovery: Possible Liquid Water on Jupiter's Moon",
                "Iconic Restaurant Closes After 50 Years"
              ].map((item, i) => (
                <div key={i} className="flex gap-4 group cursor-pointer">
                  <span className="text-4xl font-black text-primary stroke-black/20 italic">{i + 1}</span>
                  <p className="font-heading font-black text-sm uppercase leading-tight group-hover:text-destructive transition-colors">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Live Indicator */}
          <div className="bg-destructive text-white p-4 font-heading font-bold animate-pulse">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full" />
              <span>LIVE UPDATES: ELECTION DAY 2026</span>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}

