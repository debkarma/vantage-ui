import { Database, Server, Cpu } from "lucide-react";
import { motion } from "motion/react";

export function FeatureInfrastructure() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="grid md:grid-cols-2 gap-16 items-center mt-12"
    >
      
      {/* Infrastructure Mockup (Left) */}
      <div className="w-full rounded-xl bg-carbon border border-border shadow-2xl overflow-hidden relative aspect-[4/3] flex flex-col order-2 md:order-1 items-center justify-center p-8 min-w-0">
        <div className="absolute inset-0 shadow-[inset_0px_0px_0px_1px_rgba(35,37,42,1)] rounded-xl pointer-events-none z-10"></div>
        
        {/* Abstract diagram */}
        <div className="relative w-full h-full border border-white/5 rounded-lg bg-[#0a0a0a] flex items-center justify-between px-8">
           <div className="flex flex-col items-center gap-2">
             <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-lg">
               <Server className="w-8 h-8 text-mist" />
             </div>
             <span className="text-caption text-ash font-mono">vantage-cli</span>
           </div>
           
           <div className="h-px bg-gradient-to-r from-pulse-green/0 via-pulse-green to-pulse-green/0 w-24 relative">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-pulse-green shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse"></div>
           </div>

           <div className="flex flex-col items-center gap-2 relative">
             <div className="w-16 h-16 rounded-2xl bg-white/5 border border-pulse-green/30 flex items-center justify-center shadow-[0_0_15px_rgba(52,211,153,0.15)] relative overflow-hidden">
               <div className="absolute inset-0 bg-pulse-green/5"></div>
               <Database className="w-8 h-8 text-pulse-green relative z-10" />
             </div>
             <span className="text-caption text-pulse-green font-mono">ephemeral-db</span>
           </div>
        </div>
      </div>

      <div className="flex flex-col items-start text-left order-1 md:order-2">
        <h2 className="text-3xl md:text-[40px] font-[510] leading-tight mb-6">
          Ephemeral <span className="text-signal-teal">Infrastructure</span>
        </h2>
        <p className="text-body-lg text-fog mb-10">
          State leakage causes flaky tests. Vantage integrates deeply with Testcontainers to orchestrate isolated databases on the fly before firing test requests.
        </p>
        
        <div className="text-caption text-ash uppercase tracking-widest mb-6">Supported Engines</div>
        <div className="flex flex-wrap gap-4 mb-10">
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg px-4 py-2">
            <Database className="w-5 h-5 text-paper" />
            <span className="text-mist font-[510]">PostgreSQL</span>
          </div>
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg px-4 py-2">
            <Database className="w-5 h-5 text-paper" />
            <span className="text-mist font-[510]">MongoDB</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
