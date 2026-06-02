import React, { useState } from 'react'
import Header from './components/Header'
import VideoGrid from './components/VideoGrid'
import './index.css'
import Login from './components/login'
export default function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
   if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />
  }
  return (
    <div className="flex flex-col h-screen bg-black">
    <Header  searchQuery={searchQuery} onSearchChange={setSearchQuery}/>
  <div className="flex flex-1 overflow-hidden">
    <VideoGrid activeCategory={activeCategory} onCategoryChange={setActiveCategory}/>
    </div>
    </div>
  )
}
