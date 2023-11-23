import { ElementType } from 'react'
import { ChevronDown } from 'lucide-react'

export interface NavItemProps {
  title: string
  icon: ElementType
}
export function NavItem({ title, icon: Icon }: NavItemProps) {
  return (
    <a
      href=""
      className="flex items-center gap-3 rounded hover:bg-violet-50 px-2 py-3 group"
    >
      <Icon className="w-5 h-5 text-zinc-500" />
      <span className="font-medium text-zinc-900 group-hover:text-violet-500">
        {title}
      </span>
      <ChevronDown className="w-5 h-5 text-zinc-500 ml-auto  group-hover:text-violet-300" />
    </a>
  )
}
