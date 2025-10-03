import { useState } from 'react'
import './App.css'
import Header from './components/Header.tsx'
import MainContent from './components/MainContent.tsx'

export type TabType = 'venue' | 'caterer' | 'photographers' | 'bridal-makeup' | 'bridal-dresses'

function App() {
  const [activeTab, setActiveTab] = useState<TabType>('venue')
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab)
  }

  const handleAuthToggle = () => {
    setIsLoggedIn(!isLoggedIn)
  }

  return (
    <div className="app">
      <Header 
        activeTab={activeTab}
        onTabChange={handleTabChange}
        isLoggedIn={isLoggedIn}
        onAuthToggle={handleAuthToggle}
      />
      <MainContent activeTab={activeTab} />
    </div>
  )
}

export default App
