'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface Tab {
  id: string;
  label: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  className?: string;
}

export function Tabs({ tabs, activeTab, onTabChange, className }: TabsProps) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={cn(
            'px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200',
            activeTab === tab.id
              ? 'bg-primary text-white dark:text-white'
              : 'border text-primary hover:bg-primary-light dark:border-border dark:hover:bg-border'
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
