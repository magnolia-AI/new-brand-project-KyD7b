import { ARTICLES } from "@/lib/data";
import { notFound } from "next/navigation";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const categorySlug = slug.toUpperCase();
  
  // Custom theme colors based on slug
  const themes: Record<string, string> = {
    sport: "text-sport-pink border-sport-pink",
    culture: "text-culture-violet border-culture-violet",
    news: "text-destructive border-destructive",
    business: "text-blue-600 border-blue-600",
  };

  const themeClass = themes[slug] || "text-black border-black";

  // Filter articles for this category
  // If slug is 'news', show 'WORLD' and 'LOCAL' 
  let filteredArticles = ARTICLES.filter(a => a.category === categorySlug);
  
  if (slug === 'news') {
    filteredArticles = ARTICLES.filter(a => ['WORLD', 'LOCAL'].includes(a.category));
  }

  if (filteredArticles.length === 0 && slug !== 'opinion') {
    // If we have no articles and it's not a known empty category
    // but for this demo let's just show an empty state for 'opinion'
    if (slug !== 'news' && slug !== 'sport' && slug !== 'culture' && slug !== 'business') {
        notFound();
    }
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className={`border-b-8 mb-8 pb-4 ${themeClass}`}>
        <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter">
          {slug === 'news' ? 'LATEST NEWS' : slug}
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article) => (
            <Card key={article.id} className="border-0 bg-transparent shadow-none group cursor-pointer">
              <div className={`relative aspect-video overflow-hidden border-2 border-black`}>
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
                <p className="text-base font-body text-slate-600 line-clamp-3">
                  {article.description}
                </p>
                <div className="flex justify-between items-center pt-4">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    {article.author} • {article.time}
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))
        ) : (
          <div className="col-span-full py-20 text-center border-2 border-dashed border-slate-300">
            <p className="text-2xl font-heading font-bold text-slate-400 uppercase tracking-widest">
              No new reports in {slug} at this moment
            </p>
            <Button variant="link" asChild className="mt-4">
              <Link href="/">RETURN TO FRONT PAGE</Link>
            </Button>
          </div>
        )}
      </div>

      {/* Featured in other categories */}
      {filteredArticles.length > 0 && (
        <section className="mt-20 border-t-4 border-black pt-8">
            <h3 className="text-2xl font-black italic mb-8">MORE FROM THE GAZETTE</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {ARTICLES.filter(a => a.category !== categorySlug).slice(0, 4).map(article => (
                    <Link href={`/category/${article.category.toLowerCase()}`} key={article.id} className="group">
                        <div className="border-l-4 border-primary pl-4">
                            <h4 className="font-heading font-black text-xs text-primary mb-1">{article.category}</h4>
                            <p className="font-heading font-bold text-sm uppercase group-hover:underline">{article.title}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
      )}
    </main>
  );
}

// Reusing Button for the empty state
import { Button } from "@/components/ui/button";

