import React from 'react'
import { Logo } from './Logo'
import { Search, Home } from 'lucide-react'
import { NavItem } from './MainNavigation/NavItem'
import { useSearch } from '@/src/hooks/Search'

export function Sidebar() {
  const { setSearchValue } = useSearch()

  function handleCreateContext(value: string) {
    setSearchValue(value)
  }

  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-300 px-5 py-8">
      <Logo />

      <div className="mx-1 flex items-center gap-2 w-full rounded border border-zinc-300 px-3 py-2 shadow-sm">
        <Search className="w-5 h-5 text-zinc-500" />
        <input
          className="flex-1 border-0 text-zinc-900 placeholder-zinc-600"
          placeholder="Busque seu herói"
          onChange={(e) => handleCreateContext(e.target.value)}
        />
      </div>

      <nav className="space-y-2">
        <NavItem title="Home" icon={Home} />
      </nav>
    </aside>
  )
}
