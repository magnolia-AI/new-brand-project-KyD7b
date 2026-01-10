import Link from "next/link";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <>
      <header className="bg-primary pt-6 pb-4 border-b-4 border-black">
        <div className="container mx-auto px-4">
          <Link href="/" className="flex flex-col items-center gap-2 hover:opacity-90 transition-opacity">
            <h1 className="text-6xl md:text-8xl font-black text-black tracking-tighter italic select-none">
              THE GAZETTE
            </h1>
            <div className="w-full flex justify-between border-y border-black/20 py-1 text-[10px] md:text-xs font-bold uppercase tracking-widest text-black/80">
              <span>EST. 2026</span>
              <span>FRIDAY, JANUARY 9, 2026</span>
              <span>LATEST NEWS</span>
            </div>
          </Link>
        </div>
      </header>

      <nav className="bg-black text-white sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <ul className="flex overflow-x-auto whitespace-nowrap gap-6 py-3 font-heading text-sm uppercase font-bold tracking-wider no-scrollbar">
            <li><Link href="/" className="hover:text-primary transition-colors">Start</Link></li>
            <li><Link href="/category/news" className="hover:text-primary transition-colors">News</Link></li>
            <li><Link href="/category/sport" className="hover:text-primary transition-colors hover:border-b-2 border-sport-pink">Sport</Link></li>
            <li><Link href="/category/culture" className="hover:text-primary transition-colors hover:border-b-2 border-culture-violet">Culture</Link></li>
            <li><Link href="/category/business" className="hover:text-primary transition-colors">Business</Link></li>
            <li><Link href="/category/opinion" className="hover:text-primary transition-colors">Opinion</Link></li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-black text-white mt-12 py-12">
      <div className="container mx-auto px-4 text-center space-y-6">
        <h2 className="text-4xl font-black text-primary italic underline decoration-primary underline-offset-8">THE GAZETTE</h2>
        <div className="flex flex-wrap justify-center gap-6 text-xs uppercase font-bold tracking-widest text-slate-400 font-heading">
          <Link href="#" className="hover:text-white transition-colors">About</Link>
          <Link href="#" className="hover:text-white transition-colors">Contact</Link>
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          <Link href="#" className="hover:text-white transition-colors text-destructive">News Tips</Link>
        </div>
        <p className="text-[10px] text-slate-600 font-body">
          &copy; 2026 THE GAZETTE MEDIA GROUP. ALL RIGHTS RESERVED. REGISTERED IN STOCKHOLM.
        </p>
      </div>
    </footer>
  );
}

