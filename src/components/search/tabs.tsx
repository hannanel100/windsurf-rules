'use client';

import * as React from 'react';
import { Tabs, type Tab } from '@/components/ui/tabs';

const categories = [
  { id: 'laravel', name: 'Laravel', count: 1 },
  { id: 'nextjs', name: 'NextJS', count: 4 },
  { id: 'angular', name: 'Angular', count: 2 },
  { id: 'nuxtjs', name: 'NuxtJS', count: 2 },
  { id: 'flutter', name: 'Flutter', count: 2 },
  { id: 'vue', name: 'Vue', count: 3 },
  { id: 'django', name: 'Django', count: 1 },
  { id: 'react', name: 'React', count: 4 },
];

export function CategoryTabs() {
  const [activeCategory, setActiveCategory] = React.useState('all');

  const tabs: Tab[] = [
    { id: 'all', label: 'All' },
    ...categories.map(category => ({
      id: category.id,
      label: `${category.name} (${category.count})`
    }))
  ];

  return (
    <Tabs
      tabs={tabs}
      activeTab={activeCategory}
      onTabChange={setActiveCategory}
      className="mt-8"
    />
  );
}
