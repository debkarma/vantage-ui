import { Video, Network } from "lucide-react";
import { Terminal as MagicTerminal, AnimatedSpan, TypingAnimation } from "@/components/ui/terminal";
import { motion } from "motion/react";

export function FeatureUI() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="grid md:grid-cols-2 gap-16 items-center"
    >
      <div className="flex flex-col items-start text-left order-1 md:order-2">
        <h2 className="text-3xl md:text-[40px] font-[510] leading-tight mb-6">
          Record <span className="text-iris-violet">HTTP Requests</span>
        </h2>
        <p className="text-body-lg text-fog mb-10">
          Capture real traffic transparently. Vantage acts as a reverse proxy or middleware, recording every request and response deterministically without modifying your application logic.
        </p>
        
        <div className="text-caption text-ash uppercase tracking-widest mb-6">Capture from</div>
        <div className="flex flex-wrap gap-4 mb-10">
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg px-4 py-2">
            <Video className="w-5 h-5 text-paper" />
            <span className="text-mist font-[510]">Manual Testing (Postman)</span>
          </div>
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg px-4 py-2">
            <Network className="w-5 h-5 text-paper" />
            <span className="text-mist font-[510]">Live Environments</span>
          </div>
        </div>
      </div>
      
      {/* Terminal Mockup */}
      <div className="w-full relative flex flex-col items-center justify-center min-w-0 order-2 md:order-1">
        <MagicTerminal sequence={false} className="w-full bg-carbon border-border text-left shadow-2xl max-h-none overflow-hidden [&_code]:overflow-hidden">
          <div className="text-[#2EB9DF] font-mono text-[9px] sm:text-[10px] md:text-[12px] leading-tight mb-2 whitespace-pre">
{`  _    __            __                  
 | |  / /___ _____  / /_____ _____ ____  
 | | / / __ \`/ __ \\/ __/ __ \`/ __ \`/ _ \\ 
 | |/ / /_/ / / / / /_/ /_/ / /_/ /  __/ 
 |___/\\__,_/_/ /_/\\__/\\__,_/\\__, /\\___/  
                           /____/        `}
          </div>
          <div className="text-[#3b82f6] font-mono text-[14px] mb-4">
            version: 1.0.0-dev
          </div>
          
          <AnimatedSpan delay={100} className="text-[#f59e0b] font-[510] font-mono text-[13px] md:text-[14px]">
            ● RECORDING MODE
          </AnimatedSpan>
          <AnimatedSpan delay={150} className="text-ash mb-4 font-mono text-[13px] md:text-[14px]">
            Press 'q' to stop recording.
          </AnimatedSpan>

          <AnimatedSpan delay={500} className="font-mono text-[13px] md:text-[14px] flex gap-2">
            <span className="text-pulse-green">⚡</span> <span className="text-[#2EB9DF]">Vantage: INFO</span> <span className="text-mist">Config loaded (app_port: 5000, record_port: 6789)</span>
          </AnimatedSpan>
          
          <AnimatedSpan delay={800} className="font-mono text-[13px] md:text-[14px] flex gap-2">
            <span className="text-pulse-green">⚡</span> <span className="text-[#2EB9DF]">Vantage: INFO</span> <span className="text-mist">Created test-set-23</span>
          </AnimatedSpan>
          
          <AnimatedSpan delay={1200} className="font-mono text-[13px] md:text-[14px] flex gap-2">
            <span className="text-pulse-green">⚡</span> <span className="text-[#2EB9DF]">Vantage: INFO</span> <span className="text-mist">Record server listening on port 6789...</span>
          </AnimatedSpan>

          <AnimatedSpan delay={2000} className="font-mono text-[13px] md:text-[14px] flex gap-2">
            <span className="text-pulse-green">⚡</span> <span className="text-[#2EB9DF]">Vantage: INFO</span> <span className="text-mist">Spawning target app: python main.py</span>
          </AnimatedSpan>

          <AnimatedSpan delay={3000} className="font-mono text-[13px] md:text-[14px] flex flex-wrap gap-x-2">
            <span className="text-pulse-green shrink-0">⚡</span> <span className="text-pulse-green shrink-0">Vantage: SUCCESS</span> <span className="text-mist break-all">get-api-animals-1</span> <span className="text-ash shrink-0">&lt;- /api/animals</span>
          </AnimatedSpan>

          <AnimatedSpan delay={4000} className="font-mono text-[13px] md:text-[14px] flex flex-wrap gap-x-2">
            <span className="text-pulse-green shrink-0">⚡</span> <span className="text-pulse-green shrink-0">Vantage: SUCCESS</span> <span className="text-mist break-all">post-api-auth-register-farmer-1</span> <span className="text-ash shrink-0">&lt;- /api/auth/register/farmer</span>
          </AnimatedSpan>

        </MagicTerminal>
      </div>
    </motion.div>
  );
}
