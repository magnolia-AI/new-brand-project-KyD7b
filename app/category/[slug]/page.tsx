import Link from "next/link";
import { notFound } from "next/navigation";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ALL_ARTICLES, CATEGORIES } from "@/lib/data";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = CATEGORIES.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  // Filter articles. For "news", show everything that isn't Sport/Culture etc, 
  // or just everything if we want it as a general news feed.
  const articles = slug === "news" 
    ? ALL_ARTICLES.filter(a => ["WORLD", "LOCAL", "SCIENCE"].includes(a.category))
    : ALL_ARTICLES.filter(a => a.category.toLowerCase() === slug.toLowerCase());

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Newspaper Header */}
      <header className="bg-primary pt-6 pb-4 border-b-4 border-black">
        <div className="container mx-auto px-4 text-center">
          <Link href="/">
            <h1 className="text-6xl md:text-8xl font-black text-black tracking-tighter italic select-none">
              THE GAZETTE
            </h1>
          </Link>
        </div>
      </header>

      {/* Nav */}
      <nav className="bg-black text-white sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <ul className="flex overflow-x-auto whitespace-nowrap gap-6 py-3 font-heading text-sm uppercase font-bold tracking-wider no-scrollbar">
            <li><Link href="/" className="hover:text-primary transition-colors">Start</Link></li>
            {CATEGORIES.map((cat) => (
              <li key={cat.slug}>
                <Link 
                  href={`/category/${cat.slug}`} 
                  className={`hover:text-primary transition-colors ${slug === cat.slug ? 'text-primary' : ''}`}
                  style={slug === cat.slug ? { color: category.color === 'var(--primary)' ? 'black' : category.color } : {}}
                >
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        {/* Category Header */}
        <div 
          className="mb-12 border-b-8 border-black pb-4"
          style={{ borderBottomColor: category.color }}
        >
          <div className="flex items-baseline gap-4">
            <h2 className="text-7xl md:text-9xl font-black italic tracking-tighter uppercase" style={{ color: category.color }}>
              {category.name}
            </h2>
            <span className="text-sm font-bold text-slate-400 font-heading">LATEST STORIES</span>
          </div>
        </div>

        {articles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Card key={article.id} className="border-0 bg-transparent shadow-none group cursor-pointer">
                <div className="relative aspect-video overflow-hidden border-2 border-black" style={{ borderRightWidth: '6px', borderBottomWidth: '6px', borderRightColor: category.color, borderBottomColor: category.color }}>
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
                  <div className="flex items-center gap-2 mb-2 text-[10px] font-bold text-slate-500">
                    <span>{article.time}</span>
                  </div>
                  <CardTitle className="text-3xl group-hover:underline decoration-4 leading-tight mb-2" style={{ textDecorationColor: category.color }}>
                    {article.title}
                  </CardTitle>
                  <p className="text-base font-body text-slate-600 line-clamp-3 leading-relaxed">
                    {article.description}
                  </p>
                </CardHeader>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 border-4 border-dashed border-slate-200">
            <h3 className="text-2xl font-black italic text-slate-300">NO RECENT STORIES IN THIS SECTION</h3>
            <Button variant="outline" className="mt-4 rounded-none border-2 border-black font-bold">
              GO BACK TO START
            </Button>
          </div>
        )}

        {/* Dynamic Section Promo */}
        <section className="mt-16 bg-slate-100 p-8 border-t-2 border-black flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h3 className="text-2xl font-black italic mb-2 tracking-tight uppercase">THE {category.name} NEWSLETTER</h3>
            <p className="font-body text-slate-600">Exclusive investigative reporting and deep dives into {category.name.toLowerCase()} topics, delivered weekly.</p>
          </div>
          <div className="flex w-full md:w-auto gap-2">
            <input 
              placeholder="YOUR EMAIL" 
              className="px-4 py-2 border-2 border-black bg-white font-heading text-xs font-black uppercase w-full md:w-64"
            />
            <Button className="font-black italic rounded-none bg-black text-white px-8">JOIN</Button>
          </div>
        </section>
      </main>

      <footer className="bg-black text-white mt-12 py-12">
        <div className="container mx-auto px-4 text-center space-y-6">
          <Link href="/">
            <h2 className="text-4xl font-black text-primary italic">THE GAZETTE</h2>
          </Link>
          <div className="flex justify-center flex-wrap gap-6 text-xs uppercase font-bold tracking-widest text-slate-400 font-heading">
            <Link href="/">Start</Link>
            {CATEGORIES.map(cat => (
              <Link key={cat.slug} href={`/category/${cat.slug}`}>{cat.name}</Link>
            ))}
          </div>
          <p className="text-[10px] text-slate-600 font-body">
            &copy; 2026 THE GAZETTE MEDIA GROUP. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </div>
  );
}


