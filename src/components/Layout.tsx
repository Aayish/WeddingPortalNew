import type { ReactNode } from 'react'
import Navigation from '../features/common/Navigation.tsx'
import Footer from './Footer.tsx'
import './Layout.css'

interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Navigation />
      <main className="layout-main">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout