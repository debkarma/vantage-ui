export function Footer() {
  return (
    <footer className="border-t border-border bg-void py-12 mt-auto">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center">
          <img 
            src="/logo.png" 
            alt="Vantage" 
            className="h-5 w-auto brightness-0 invert opacity-90" 
          />
        </div>
        <div className="flex items-center gap-6 text-caption text-ash">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-mist transition-colors">Twitter</a>
          <a href="https://github.com/debkarma/vantage" target="_blank" rel="noopener noreferrer" className="hover:text-mist transition-colors">GitHub</a>
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="hover:text-mist transition-colors">Discord</a>
        </div>
      </div>
    </footer>
  );
}
