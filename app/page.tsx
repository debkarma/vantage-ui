"use client";
import Link from "next/link";
import { ArrowRight, Terminal, CheckCircle2, Zap, LayoutDashboard, Code2, Copy, Check } from "lucide-react";
import { motion } from "motion/react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { ScriptCopyBtn } from "@/components/ui/script-copy-button";
import { FeatureUI } from "@/components/features/feature-ui";
import { FeatureCLI } from "@/components/features/feature-cli";
import { FeatureExport } from "@/components/features/feature-export";
import { FeatureInfrastructure } from "@/components/features/feature-infrastructure";
import { FeatureNoise } from "@/components/features/feature-noise";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const FADE_UP_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen pt-[64px]">
      <Navbar />

      <main className="flex-grow pb-24">
        {/* Hero Section */}
        <section className="relative w-full min-h-[calc(100vh-64px)] flex flex-col items-center justify-center text-center py-16 md:py-24 overflow-hidden mb-10 md:mb-20">
          {/* Background image & gradient masks */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 z-0 pointer-events-none select-none"
          >
            <img src="/hero-bg.jpg" alt="" className="w-full h-full object-cover object-[center_30%] opacity-110 mix-blend-screen" style={{ maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)' }} />
            <div className="absolute inset-0 bg-gradient-to-t from-void/40 via-void/20 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-void via-transparent to-transparent"></div>

            {/* Shooting Stars */}
            <ShootingStars
              starColor="#FFFFFF"
              trailColor="#FFFFFF"
              minSpeed={4}
              maxSpeed={12}
              minDelay={7000}
              maxDelay={12000}
            />
          </motion.div>

          <motion.div 
            initial="hidden"
            animate="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col items-center w-full"
          >


            <motion.h1 variants={FADE_UP_ANIMATION_VARIANTS} className="text-display max-w-4xl mb-6">
              Tests that write themselves
            </motion.h1>

            <motion.p variants={FADE_UP_ANIMATION_VARIANTS} className="text-body-lg text-fog max-w-2xl mb-10">
              Turn real API traffic into production-ready tests automatically.
            </motion.p>

            <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="flex flex-col sm:flex-row items-center gap-4">

              <Link href="/docs" className="bg-transparent text-mist border border-border rounded-md px-4 py-2.5 text-[14px] font-[400] hover:bg-white/5 transition-colors cursor-pointer inline-block text-center">
                Read the Docs -&gt;
              </Link>
            </motion.div>

            {/* Installation Command */}
            <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="mt-20 w-full max-w-[500px]">
              <ScriptCopyBtn
                showMultiplePackageOptions={true}
                codeLanguage="shell"
                lightTheme="nord"
                darkTheme="vitesse-dark"
                commandMap={{
                  npm: "npm install -D vantage-cli",
                  yarn: "yarn add -D vantage-cli",
                  pnpm: "pnpm add -D vantage-cli",
                  bun: "bun add -d vantage-cli",
                }}
              />
            </motion.div>
          </motion.div>
        </section>

        {/* Compatibility Strip */}
        <section className="border-y border-border py-12 bg-void/50">
          <div className="max-w-[1200px] mx-auto px-6 text-center">
            <p className="text-caption text-ash mb-8 uppercase tracking-widest">Works Seamlessly With Your Backend</p>
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-12 md:gap-24 opacity-60 grayscale">
              <div className="font-[510] text-xl text-mist">Node.js</div>
              <div className="font-[510] text-xl text-mist">Python</div>
              <div className="font-[510] text-xl text-mist">Go</div>
              <div className="font-[510] text-xl text-mist">Rust</div>
              <div className="font-[510] text-xl text-mist">Ruby</div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="max-w-[1200px] mx-auto px-4 sm:px-6 py-16 md:py-32 flex flex-col gap-20 md:gap-32">
          <FeatureCLI />
          <FeatureUI />
          <FeatureExport />
          <FeatureInfrastructure />
          <FeatureNoise />
        </section>
      </main>

      <Footer />
    </div>
  );
}
