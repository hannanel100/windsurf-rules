'use client';

import { SearchBar } from './search-bar';
import { CategoryTabs } from './tabs';

export function SearchSection() {
  return (
    <section className="mt-12">
      <SearchBar />
      <CategoryTabs />
    </section>
  );
}
