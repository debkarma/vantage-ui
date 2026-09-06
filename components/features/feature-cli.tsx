import { Terminal, Code2 } from "lucide-react";
import { Terminal as MagicTerminal, AnimatedSpan, TypingAnimation } from "@/components/ui/terminal";
import { motion } from "motion/react";

export function FeatureCLI() {
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
          Introducing <span className="text-pulse-green">Vantage CLI</span>
        </h2>
        <p className="text-body-lg text-fog mb-10">
          Run your entire test suite deterministically in CI or locally. Vantage CLI automatically provisions dependencies and runs tests in isolated environments.
        </p>
        
        <div className="text-caption text-ash uppercase tracking-widest mb-6">Integrates with</div>
        <div className="flex flex-wrap gap-4 mb-10">
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg px-4 py-2">
            <Terminal className="w-5 h-5 text-paper" />
            <span className="text-mist font-[510]">GitHub Actions</span>
          </div>
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg px-4 py-2">
            <Code2 className="w-5 h-5 text-paper" />
            <span className="text-mist font-[510]">GitLab CI</span>
          </div>
        </div>
      </div>

      {/* Terminal Mockup */}
      <div className="w-full relative flex flex-col items-center justify-center min-w-0">
        <MagicTerminal className="w-full bg-carbon border-border text-left shadow-2xl overflow-hidden [&_code]:overflow-hidden">
          <TypingAnimation className="text-mist mb-6 font-mono text-[12px] sm:text-[14px]">vantage test --target http://localhost:3000</TypingAnimation>
          <AnimatedSpan delay={1500} className="text-ash mb-2 font-mono text-[12px] sm:text-[14px] whitespace-pre-wrap">Spawning ephemeral PostgreSQL container...</AnimatedSpan>
          <AnimatedSpan delay={2500} className="text-ash mb-4 font-mono text-[12px] sm:text-[14px]">Starting target app: "npm start"</AnimatedSpan>
          
          <AnimatedSpan delay={3500} className="flex gap-2 sm:gap-4 items-center mb-2 font-mono text-[12px] sm:text-[14px]">
            <span className="text-pulse-green shrink-0">✔</span> <span className="text-mist break-all">GET /api/users</span> <span className="text-ash shrink-0">120ms</span>
          </AnimatedSpan>
          <AnimatedSpan delay={4000} className="flex gap-2 sm:gap-4 items-center mb-2 font-mono text-[12px] sm:text-[14px]">
            <span className="text-pulse-green shrink-0">✔</span> <span className="text-mist break-all">POST /api/auth</span> <span className="text-ash shrink-0">245ms</span>
          </AnimatedSpan>
          <AnimatedSpan delay={4500} className="flex gap-2 sm:gap-4 items-center mb-6 font-mono text-[12px] sm:text-[14px]">
            <span className="text-coral-red shrink-0">✖</span> <span className="text-mist break-all">PUT /api/settings</span> <span className="text-ash shrink-0">812ms</span>
          </AnimatedSpan>

          <AnimatedSpan delay={5000} className="text-coral-red font-[510] font-mono text-[12px] sm:text-[14px]">1 failed, 2 passed (1.1s)</AnimatedSpan>
        </MagicTerminal>
      </div>
    </motion.div>
  );
}
