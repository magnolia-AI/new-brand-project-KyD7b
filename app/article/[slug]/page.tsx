import Link from "next/link";
import { notFound } from "next/navigation";
import { NEWS_ARTICLES, CATEGORIES } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = NEWS_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const category = CATEGORIES.find(c => c.name.toUpperCase() === article.category.toUpperCase());

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Article Header */}
      <header className="bg-black text-white py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-black italic text-primary">THE GAZETTE</Link>
          <div className="flex gap-4 items-center">
            <Badge variant="outline" className="text-white border-white/20 uppercase font-black">{article.category}</Badge>
            <div className="w-8 h-8 rounded-full bg-primary" />
          </div>
        </div>
      </header>

      <article className="container mx-auto px-4 mt-12 max-w-4xl">
        <div className="space-y-6">
          <Badge 
            className="rounded-none font-black px-4 py-1 text-base uppercase border-2 border-black"
            style={{ backgroundColor: category?.color || 'var(--primary)', color: 'white' }}
          >
            {article.category}
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-black italic uppercase leading-tight tracking-tighter">
            {article.title}
          </h1>

          <p className="text-2xl font-body text-slate-600 leading-relaxed italic border-l-8 border-primary pl-6 py-2">
            {article.description}
          </p>

          <div className="flex flex-col md:flex-row md:items-center justify-between border-y-2 border-black py-4 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-slate-200 border-2 border-black overflow-hidden">
                 <div className="bg-primary w-full h-full flex items-center justify-center font-black text-xl italic">
                   {article.author.charAt(0)}
                 </div>
              </div>
              <div>
                <p className="font-heading font-black uppercase text-sm">{article.author}</p>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{article.time} • 5 MIN READ</p>
              </div>
            </div>
            <div className="flex gap-2">
               <Button variant="outline" size="sm" className="rounded-none font-black italic border-2 border-black uppercase text-xs">Share Story</Button>
               <Button variant="outline" size="sm" className="rounded-none font-black italic border-2 border-black uppercase text-xs">Save</Button>
            </div>
          </div>
        </div>

        <figure className="mt-12 group">
          <div className="border-4 border-black overflow-hidden">
            <img 
              src={article.image} 
              alt={article.title} 
              className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <figcaption className="mt-3 text-xs font-bold uppercase text-slate-400 text-right italic">
            Photo: Getty Images / The Gazette News Service
          </figcaption>
        </figure>

        <div className="mt-12 font-body text-xl leading-relaxed text-slate-800 space-y-8 first-letter:text-7xl first-letter:font-black first-letter:mr-3 first-letter:float-left first-letter:leading-[0.8]">
          <p>
            In a significant development that has sent shockwaves across the {article.category.toLowerCase()} world, 
            experts are calling this a "pivotal moment" for the industry. The decision, which follows 
            months of intense deliberation and speculation, marks a major shift in the current landscape.
          </p>
          <p>
            According to sources close to the matter, the implications of this move go far beyond the 
            immediate headlines. "What we're seeing here is a fundamental restructuring of how things 
            work," said one senior official who spoke on the condition of anonymity. "The old rules 
            simply don't apply anymore."
          </p>
          <div className="bg-slate-50 border-4 border-black p-8 my-12 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-20 h-20 bg-primary/20 rounded-bl-full" />
             <blockquote className="text-3xl font-heading font-black italic uppercase leading-none">
               "This is more than just a headline. It's the beginning of a completely new chapter for everyone involved."
             </blockquote>
             <cite className="block mt-4 text-sm font-bold uppercase tracking-widest">— Official Statement</cite>
          </div>
          <p>
            As the story continues to develop, observers are keeping a close eye on the subsequent 
            reactions from key stakeholders. Preliminary data suggests that the public response 
            has been largely positive, though some skeptics remain concerned about the long-term 
            sustainability of these changes.
          </p>
          <p>
            The Gazette will continue to provide live updates as more information becomes available. 
            Check back for exclusive interviews and deep-dive analysis in our upcoming special edition.
          </p>
        </div>

        {/* Article Footer */}
        <div className="mt-20 pt-12 border-t-4 border-black">
          <h3 className="text-3xl font-black italic uppercase mb-8">Related Stories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {NEWS_ARTICLES.filter(a => a.id !== article.id).slice(0, 2).map(related => (
              <Link key={related.id} href={`/article/${related.slug}`} className="group">
                <div className="border-2 border-black aspect-video overflow-hidden">
                  <img src={related.image} alt={related.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                </div>
                <h4 className="mt-4 font-heading font-black text-xl uppercase group-hover:underline">{related.title}</h4>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}

