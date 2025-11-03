import { ReactNode } from 'react'

interface CategoryLayoutProps {
  children: ReactNode
}

export default function CategoryLayout({ children }: CategoryLayoutProps) {
  return (
    <div className="min-h-screen bg-neutral-50">
      {children}
    </div>
  )
}