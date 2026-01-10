import Link from "next/link";
import { notFound } from "next/navigation";
import { NEWS_ARTICLES, CATEGORIES } from "@/lib/data";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

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
    <div className="min-h-screen bg-slate-50">
      {/* Category Hero Section */}
      <div 
        className="py-12 border-b-8 border-black text-white relative overflow-hidden"
        style={{ backgroundColor: category.color.startsWith('var') ? `oklch(${category.color})` : category.color }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-7xl md:text-9xl font-black italic tracking-tighter uppercase leading-none drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                {category.name}
              </h1>
              <p className="mt-4 font-heading text-xl font-bold tracking-widest uppercase bg-black text-white inline-block px-4 py-1 self-start">
                Live Coverage & Direct Reports
              </p>
            </div>
            <div className="hidden lg:block text-right">
              <span className="text-xs font-black uppercase tracking-[0.3em] opacity-70">Section 0{CATEGORIES.indexOf(category) + 1}</span>
            </div>
          </div>
        </div>
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 text-[20rem] font-black italic opacity-10 pointer-events-none select-none leading-none -mr-20 -mt-10">
            {category.name.charAt(0)}
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        <div className="flex items-center gap-4 mb-12 border-b-2 border-black pb-4">
            <h2 className="text-3xl font-black italic uppercase">Latest Stories</h2>
            <div className="flex-1 h-px bg-slate-200" />
            <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Sort: Newest First</div>
        </div>

        {articles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {articles.map((article) => (
              <Card key={article.id} className="border-0 bg-transparent shadow-none group cursor-pointer">
                <Link href={`/article/${article.slug}`}>
                  <div className="relative aspect-[16/9] overflow-hidden border-4 border-black mb-4 group-hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-shadow duration-300">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                    <div 
                      className="absolute top-0 right-0 px-4 py-1 text-white font-black italic text-sm border-l-4 border-b-4 border-black"
                      style={{ backgroundColor: category.color.startsWith('var') ? `oklch(${category.color})` : category.color }}
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
                </Link>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-32 border-8 border-double border-slate-200 bg-white shadow-inner">
            <div className="mb-4 text-6xl opacity-20 hover:opacity-100 transition-opacity cursor-default animate-bounce">📰</div>
            <h2 className="text-4xl font-black italic text-slate-300 uppercase tracking-tighter">NO STORIES YET</h2>
            <p className="font-body text-slate-400 mt-2 max-w-md mx-auto italic">Our reporters in {category.name} are currently investigating major leads. Check back in a few minutes.</p>
          </div>
        )}

        {/* Section Divider */}
        <div className="mt-24 border-t-8 border-black pt-12 relative">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black text-white px-8 py-2 font-black italic uppercase text-xl">
             Most Popular in {category.name}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
            {[1, 2, 3].map((i) => (
                <div key={i} className="flex gap-6 group cursor-pointer">
                    <span className="text-7xl font-black text-slate-200 group-hover:text-primary transition-colors italic leading-none">{i}</span>
                    <div>
                        <h4 className="font-heading font-black text-xl uppercase leading-tight group-hover:underline decoration-2">
                            Major breakthrough expected in upcoming {category.name} report
                        </h4>
                        <div className="flex items-center gap-2 mt-2">
                             <div className="w-2 h-2 rounded-full bg-destructive animate-pulse" />
                             <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Updated 5m ago</p>
                        </div>
                    </div>
                </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

