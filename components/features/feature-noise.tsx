import { Filter, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

export function FeatureNoise() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="grid md:grid-cols-2 gap-16 items-center mt-12"
    >
      <div className="flex flex-col items-start text-left">
        <h2 className="text-3xl md:text-[40px] font-[510] leading-tight mb-6">
          Smart <span className="text-coral-red">Noise Filtering</span>
        </h2>
        <p className="text-body-lg text-fog mb-10">
          Dynamic fields like timestamps, ETags, and randomly generated IDs cause false test failures. Vantage's intelligent diff engine automatically strips out configured noise before comparing responses.
        </p>
        
        <div className="text-caption text-ash uppercase tracking-widest mb-6">Ignored by Default</div>
        <div className="flex flex-wrap gap-4 mb-10">
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg px-4 py-2">
            <Filter className="w-5 h-5 text-paper" />
            <span className="text-mist font-[510]">Date & Timestamps</span>
          </div>
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg px-4 py-2">
            <Filter className="w-5 h-5 text-paper" />
            <span className="text-mist font-[510]">Trace IDs</span>
          </div>
        </div>
      </div>
      
      {/* Noise Mockup */}
      <div className="w-full rounded-xl bg-carbon border border-border shadow-2xl overflow-hidden relative flex flex-col min-w-0">
        <div className="absolute inset-0 shadow-[inset_0px_0px_0px_1px_rgba(35,37,42,1)] rounded-xl pointer-events-none z-10"></div>
        
        <div className="h-10 border-b border-border bg-void/30 flex items-center px-4 gap-2 shrink-0">
          <div className="w-3 h-3 rounded-full bg-coral-red"></div>
          <div className="w-3 h-3 rounded-full bg-[#f59e0b]"></div>
          <div className="w-3 h-3 rounded-full bg-pulse-green"></div>
          <div className="ml-4 text-caption text-ash font-mono">vantage.config.yaml</div>
        </div>

        <div className="p-6 font-mono text-[13px] bg-[#0a0a0a] overflow-x-auto text-left leading-relaxed">
          <div className="text-[#3b82f6]">version: <span className="text-[#f59e0b]">1</span></div>
          <div className="text-[#3b82f6]">app_port: <span className="text-[#f59e0b]">3000</span></div>
          <div className="text-[#3b82f6]">record_port: <span className="text-[#f59e0b]">6789</span></div>
          <br/>
          <div className="text-[#3b82f6]">noise:</div>
          <div className="pl-4 text-[#3b82f6]">headers:</div>
          <div className="pl-8 text-mist">- <span className="text-pulse-green">Date</span></div>
          <div className="pl-8 text-mist">- <span className="text-pulse-green">ETag</span></div>
          <div className="pl-8 text-mist">- <span className="text-pulse-green">X-Request-Id</span></div>
          <div className="pl-4 text-[#3b82f6]">body_fields:</div>
          <div className="pl-8 text-mist">- <span className="text-pulse-green">"$.createdAt"</span></div>
          <div className="pl-8 text-mist">- <span className="text-pulse-green">"$.user._id"</span></div>
        </div>
        
        <div className="p-4 bg-void/50 border-t border-border flex items-center justify-between text-[13px]">
           <div className="flex items-center gap-2 text-mist font-mono">
             <CheckCircle2 className="w-4 h-4 text-pulse-green" /> 100% Pass Rate
           </div>
           <div className="text-ash font-mono">No flaky tests</div>
        </div>
      </div>
    </motion.div>
  );
}
