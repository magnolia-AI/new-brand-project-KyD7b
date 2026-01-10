import Link from "next/link";
import { NEWS_ARTICLES, CATEGORIES } from "@/lib/data";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const breakingNews = NEWS_ARTICLES.find(a => a.isBreaking);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Newspaper Header */}
      <header className="bg-primary pt-6 pb-4 border-b-4 border-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-6xl md:text-8xl font-black text-black tracking-tighter italic select-none">
              THE GAZETTE
            </h1>
            <div className="w-full flex justify-between border-y border-black/20 py-1 text-xs font-bold uppercase tracking-widest text-black/80">
              <span>EST. 2026</span>
              <span>FRIDAY, JANUARY 9, 2026</span>
              <span>LATEST NEWS</span>
            </div>
          </div>
        </div>
      </header>

      {/* Nav */}
      <nav className="bg-black text-white sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <ul className="flex overflow-x-auto whitespace-nowrap gap-6 py-3 font-heading text-sm uppercase font-bold tracking-wider no-scrollbar">
            <li><Link href="/" className="hover:text-primary transition-colors text-primary">Start</Link></li>
            {CATEGORIES.map(cat => (
              <li key={cat.slug}>
                <Link 
                  href={`/category/${cat.slug}`} 
                  className={`hover:text-primary transition-colors ${cat.slug === 'news' ? 'text-destructive' : ''}`}
                >
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-6">
        {/* Breaking News Sticker */}
        {breakingNews && (
          <div className="breaking-banner mb-6 flex items-center gap-4 animate-in fade-in slide-in-from-top duration-500">
            <div className="bg-black text-white px-3 py-1 text-sm animate-pulse">BREAKING</div>
            <Link href={`/article/${breakingNews.slug}`} className="flex-1 truncate hover:underline">
              {breakingNews.title}
            </Link>
            <Link href={`/article/${breakingNews.slug}`}>
              <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-black hidden md:flex">
                READ NOW
              </Button>
            </Link>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-8">
            {/* Top Story */}
            {NEWS_ARTICLES.slice(0, 1).map((article) => (
              <Link key={article.id} href={`/article/${article.slug}`}>
                <Card className="overflow-hidden border-0 bg-transparent shadow-none group cursor-pointer mb-8">
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
                      <span>BY {article.author}</span>
                    </div>
                  </CardHeader>
                </Card>
              </Link>
            ))}

            {/* Sub-grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {NEWS_ARTICLES.slice(1, 6).map((article) => (
                <Link key={article.id} href={`/article/${article.slug}`}>
                  <Card className="border-0 bg-transparent shadow-none group cursor-pointer">
                    <div className={`relative aspect-square md:aspect-video overflow-hidden border-2 border-black ${article.category === 'SPORT' ? 'border-r-8 border-b-8 border-pink-500' : ''}`}>
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
                </Link>
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

      <footer className="bg-black text-white mt-12 py-12">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-4xl font-black text-primary italic">THE GAZETTE</h2>
          <div className="flex justify-center gap-6 text-xs uppercase font-bold tracking-widest text-slate-400 font-heading">
            <Link href="#">About</Link>
            <Link href="#">Contact</Link>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms</Link>
          </div>
          <p className="text-[10px] text-slate-600 font-body">
            &copy; 2026 THE GAZETTE MEDIA GROUP. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </div>
  );
}

