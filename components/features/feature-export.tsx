import { Code2, FileCode2 } from "lucide-react";
import { motion } from "motion/react";

export function FeatureExport() {
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
          Native <span className="text-[#f59e0b]">Test Export</span>
        </h2>
        <p className="text-body-lg text-fog mb-10">
          Never get locked into a proprietary testing format. With a single command, Vantage converts all your recorded YAML traffic into native, runnable Jest (Supertest) or Pytest code.
        </p>
        
        <div className="text-caption text-ash uppercase tracking-widest mb-6">Supported Frameworks</div>
        <div className="flex flex-wrap gap-4 mb-10">
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg px-4 py-2">
            <FileCode2 className="w-5 h-5 text-paper" />
            <span className="text-mist font-[510]">Jest + Supertest</span>
          </div>
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg px-4 py-2">
            <Code2 className="w-5 h-5 text-paper" />
            <span className="text-mist font-[510]">Pytest + httpx</span>
          </div>
        </div>
      </div>
      
      {/* Code Mockup */}
      <div className="w-full rounded-xl bg-carbon border border-border shadow-2xl overflow-hidden relative flex flex-col min-w-0">
        <div className="absolute inset-0 shadow-[inset_0px_0px_0px_1px_rgba(35,37,42,1)] rounded-xl pointer-events-none z-10"></div>
        
        <div className="h-10 border-b border-border bg-void/30 flex items-center px-4 gap-2 shrink-0">
          <div className="w-3 h-3 rounded-full bg-coral-red"></div>
          <div className="w-3 h-3 rounded-full bg-[#f59e0b]"></div>
          <div className="w-3 h-3 rounded-full bg-pulse-green"></div>
          <div className="ml-4 text-caption text-ash font-mono">__tests__/vantage/get-api-todos.test.js</div>
        </div>

        <div className="p-6 font-mono text-[13px] bg-[#0a0a0a] overflow-x-auto text-left leading-relaxed">
          <div className="text-coral-red">const <span className="text-paper">request</span> = <span className="text-[#3b82f6]">require</span>(<span className="text-pulse-green">'supertest'</span>);</div>
          <div className="text-coral-red">const <span className="text-paper">app</span> = <span className="text-[#3b82f6]">require</span>(<span className="text-pulse-green">'../../src/app'</span>);</div>
          <br/>
          <div className="text-[#3b82f6]">describe(<span className="text-pulse-green">'GET /api/todos'</span>, <span className="text-coral-red">() =&gt;</span> {'{'}</div>
          <div className="pl-4 text-[#3b82f6]">it(<span className="text-pulse-green">'should return todos list'</span>, <span className="text-coral-red">async () =&gt;</span> {'{'}</div>
          <div className="pl-8 text-coral-red">const <span className="text-paper">res</span> = <span className="text-coral-red">await</span> request(app)</div>
          <div className="pl-12 text-mist">.get(<span className="text-pulse-green">'/api/todos'</span>)</div>
          <div className="pl-12 text-mist">.set(<span className="text-pulse-green">'Accept'</span>, <span className="text-pulse-green">'*/*'</span>);</div>
          <br/>
          <div className="pl-8 text-[#3b82f6]">expect<span className="text-mist">(res.status).</span>toBe<span className="text-mist">(</span><span className="text-[#f59e0b]">200</span><span className="text-mist">);</span></div>
          <div className="pl-8 text-[#3b82f6]">expect<span className="text-mist">(res.body).</span>toEqual<span className="text-mist">([</span></div>
          <div className="pl-12 text-mist">{'{'} id: <span className="text-[#f59e0b]">1</span>, title: <span className="text-pulse-green">'Learn Keploy'</span> {'}'},</div>
          <div className="pl-12 text-mist">{'{'} id: <span className="text-[#f59e0b]">2</span>, title: <span className="text-pulse-green">'Build Vantage'</span> {'}'},</div>
          <div className="pl-8 text-mist">]);</div>
          <div className="pl-4 text-mist">{'}'});</div>
          <div className="text-mist">{'}'});</div>
        </div>
      </div>
    </motion.div>
  );
}
