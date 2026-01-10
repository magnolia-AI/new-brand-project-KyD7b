import Link from "next/link";
import { notFound } from "next/navigation";
import { NEWS_ARTICLES, CATEGORIES } from "@/lib/data";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = CATEGORIES.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  const articles = NEWS_ARTICLES.filter(
    (a) => a.category.toLowerCase() === slug.toLowerCase()
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Category Header */}
      <div 
        className="py-12 border-b-8 border-black text-white"
        style={{ backgroundColor: category.color }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-7xl md:text-9xl font-black italic tracking-tighter uppercase leading-none">
            {category.name}
          </h1>
          <p className="mt-4 font-heading text-xl font-bold tracking-widest uppercase">
            The Latest in {category.name} • Live Coverage
          </p>
        </div>
      </div>

      <nav className="bg-black text-white px-4 border-b border-white/20">
        <div className="container mx-auto">
          <ul className="flex overflow-x-auto whitespace-nowrap gap-6 py-3 font-heading text-sm uppercase font-bold tracking-wider">
            <li><Link href="/" className="hover:text-primary transition-colors">START</Link></li>
            {CATEGORIES.map((cat) => (
              <li key={cat.slug}>
                <Link 
                  href={`/category/${cat.slug}`} 
                  className={`hover:text-primary transition-colors ${cat.slug === slug ? 'text-primary' : ''}`}
                >
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12">
        {articles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {articles.map((article) => (
              <Card key={article.id} className="border-0 bg-transparent shadow-none group cursor-pointer">
                <div className="relative aspect-[16/9] overflow-hidden border-4 border-black mb-4">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                  <div 
                    className="absolute top-0 right-0 px-4 py-1 text-white font-black italic text-sm"
                    style={{ backgroundColor: category.color }}
                  >
                    {article.category}
                  </div>
                </div>
                <CardHeader className="p-0">
                  <CardTitle className="text-3xl leading-tight group-hover:underline decoration-4">
                    {article.title}
                  </CardTitle>
                  <p className="mt-3 text-lg font-body text-slate-700 line-clamp-3">
                    {article.description}
                  </p>
                  <div className="flex items-center gap-4 mt-6 text-xs font-black uppercase tracking-widest text-slate-500">
                    <span>{article.time}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                    <span>{article.author}</span>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 border-4 border-dashed border-slate-200">
            <h2 className="text-3xl font-black italic text-slate-300">NO STORIES YET</h2>
            <p className="font-body text-slate-400">Our reporters are currently investigating more {category.name} stories.</p>
          </div>
        )}

        {/* Section Divider */}
        <div className="mt-20 border-t-8 border-black pt-12">
          <h2 className="text-4xl font-black italic mb-8">TRENDING IN {category.name}</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
                <div key={i} className="flex gap-6 group cursor-pointer border-b border-slate-100 pb-4">
                    <span className="text-6xl font-black text-slate-100 group-hover:text-primary transition-colors italic">0{i}</span>
                    <div>
                        <h4 className="font-heading font-black text-xl uppercase leading-none group-hover:underline">
                            Major development expected in upcoming {category.name} report
                        </h4>
                        <p className="text-sm font-body text-slate-500 mt-1">Updates arriving in real-time as the story breaks.</p>
                    </div>
                </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

