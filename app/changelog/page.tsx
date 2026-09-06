"use client";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { changelogData } from "@/lib/changelog-data";
import { motion } from "motion/react";

export default function ChangelogPage() {
  return (
    <div className="flex flex-col min-h-screen pt-[64px]">
      <Navbar />

      <main className="flex-grow pb-32">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 pt-16 md:pt-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-20 text-center md:text-left"
          >
            <h1 className="text-display mb-4">Changelog</h1>
            <p className="text-body-lg text-fog">
              New updates and improvements to Vantage.
            </p>
          </motion.div>

          <div className="relative">
            {/* The vertical timeline wire */}
            <div className="absolute left-[15px] md:left-[119px] top-4 bottom-0 w-px bg-border/50" />

            {changelogData.map((release, index) => (
              <motion.div
                key={release.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex flex-col md:flex-row gap-8 md:gap-16 mb-24 last:mb-0"
              >
                {/* Date / Node Column */}
                <div className="flex flex-row md:flex-col items-center md:items-end md:w-[120px] shrink-0 pt-1">
                  {/* The dot */}
                  <div className="absolute left-[11px] md:left-[115px] top-[10px] w-[9px] h-[9px] rounded-full bg-mist border-2 border-void ring-4 ring-void" />
                  
                  {/* Date Text */}
                  <span className="text-body-sm font-mono text-fog ml-10 md:ml-0 md:pr-10">
                    {release.date}
                  </span>
                </div>

                {/* Content Column */}
                <div className="flex-1 bg-void/50 rounded-xl p-0 md:p-0">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-sm font-mono text-mist bg-white/5 px-2 py-0.5 rounded-md border border-white/10">
                      {release.version}
                    </span>
                    <Badge type={release.category} />
                  </div>
                  
                  <h2 className="text-heading-sm mb-4 text-paper">{release.title}</h2>
                  
                  <p className="text-body text-fog mb-8 leading-relaxed">
                    {release.description}
                  </p>

                  {/* Features List */}
                  {release.features && release.features.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-caption text-mist font-[510] mb-3 uppercase tracking-wider">Features</h3>
                      <ul className="space-y-3">
                        {release.features.map((feature, i) => (
                          <li key={i} className="flex gap-3 text-body-sm text-fog">
                            <span className="text-pulse-green mt-1 text-[10px]">●</span>
                            <span dangerouslySetInnerHTML={{ __html: parseMarkdown(feature) }} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Improvements List */}
                  {release.improvements && release.improvements.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-caption text-mist font-[510] mb-3 uppercase tracking-wider">Improvements</h3>
                      <ul className="space-y-3">
                        {release.improvements.map((imp, i) => (
                          <li key={i} className="flex gap-3 text-body-sm text-fog">
                            <span className="text-signal-teal mt-1 text-[10px]">●</span>
                            <span dangerouslySetInnerHTML={{ __html: parseMarkdown(imp) }} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Fixes List */}
                  {release.fixes && release.fixes.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-caption text-mist font-[510] mb-3 uppercase tracking-wider">Fixes</h3>
                      <ul className="space-y-3">
                        {release.fixes.map((fix, i) => (
                          <li key={i} className="flex gap-3 text-body-sm text-fog">
                            <span className="text-coral-red mt-1 text-[10px]">●</span>
                            <span dangerouslySetInnerHTML={{ __html: parseMarkdown(fix) }} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

// Simple markdown parser for bolding and code blocks
function parseMarkdown(text: string) {
  let html = text.replace(/`([^`]+)`/g, '<code class="font-mono text-[13px] bg-white/10 px-1 py-0.5 rounded border border-white/10 text-mist">$1</code>');
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong class="font-[510] text-mist">$1</strong>');
  return html;
}

function Badge({ type }: { type: string }) {
  const colors = {
    Feature: "bg-pulse-green/10 text-pulse-green border-pulse-green/20",
    Improvement: "bg-signal-teal/10 text-signal-teal border-signal-teal/20",
    Fix: "bg-coral-red/10 text-coral-red border-coral-red/20",
  };

  const dots = {
    Feature: "bg-pulse-green",
    Improvement: "bg-signal-teal",
    Fix: "bg-coral-red",
  };

  const style = colors[type as keyof typeof colors] || "bg-white/10 text-mist border-white/20";
  const dotStyle = dots[type as keyof typeof dots] || "bg-mist";

  return (
    <span className={`flex items-center gap-1.5 px-2 py-0.5 rounded-full border text-[11px] uppercase tracking-wider font-[510] ${style}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${dotStyle}`} />
      {type}
    </span>
  );
}
