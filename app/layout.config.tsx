import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

import React from 'react';

import Image from 'next/image';

export const baseOptions: BaseLayoutProps = {
  themeSwitch: { enabled: false },
  nav: {
    title: (
      <div className="flex items-center h-full">
        <Image 
          src="/logo.png" 
          alt="Vantage Logo" 
          width={120} 
          height={24} 
          className="h-4 w-auto brightness-0 invert" 
          priority 
        />
      </div>
    ),
  },
  links: [
    {
      text: 'Back to Home',
      url: '/',
      active: 'nested-url',
    },
  ],
};
