'use client';

import { useEffect, useRef, useState } from 'react';

interface MermaidProps {
  chart: string;
}

export function Mermaid({ chart }: MermaidProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string>('');

  useEffect(() => {
    let cancelled = false;

    async function render() {
      const mermaid = (await import('mermaid')).default;
      mermaid.initialize({
        startOnLoad: false,
        theme: 'dark',
        themeVariables: {
          background: '#161718',
          primaryColor: '#23252a',
          primaryBorderColor: '#383b3f',
          primaryTextColor: '#e8eaed',
          lineColor: '#62666d',
          edgeLabelBackground: '#161718',
          secondaryColor: '#23252a',
          tertiaryColor: '#23252a',
          fontFamily: 'Inter, sans-serif',
          fontSize: '14px',
        },
      });

      const id = `mermaid-${Math.random().toString(36).slice(2)}`;
      const { svg: rendered } = await mermaid.render(id, chart);
      if (!cancelled) setSvg(rendered);
    }

    render();
    return () => { cancelled = true; };
  }, [chart]);

  if (!svg) {
    return (
      <div className="flex items-center justify-center py-8 text-fd-muted-foreground text-sm">
        Loading diagram...
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className="my-6 overflow-x-auto rounded-lg border border-fd-border bg-[#161718] p-6"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
