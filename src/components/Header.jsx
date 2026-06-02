import { Search, Bell, User, Menu, Grid } from 'lucide-react'

export default function Header({ onMenuClick, searchQuery, onSearchChange }) {
  return (
    <header className="sticky top-0 z-50 bg-black border-b border-gray-800 px-4 py-3">
      <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-4">
      <button onClick={onMenuClick} className="p-2 hover:bg-gray-900 rounded-full">
          <Menu className="w-6 h-6" />
        </button>
        <span className="text-xl font-bold hidden sm:inline">YouTube</span>
        </div>
        <div className="flex-1 max-w-md flex items-center bg-gray-900 border border-gray-700 rounded-full">
        <input type="text" placeholder="Search"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="flex-1 bg-transparent px-4 py-2 outline-none text-white"/>
        <button className="p-3">
        <Search className="w-5 h-5" />
        </button>
        </div>
        <div className="flex items-center gap-2">
        <button className="p-2 hover:bg-gray-900 rounded-full">
         <Grid className="w-6 h-6" />
        </button>
        <button className="p-2 hover:bg-gray-900 rounded-full relative">
        <Bell className="w-6 h-6" />
        <span className="absolute top-1 right-1 w-2 h-2 bg-red-600 rounded-full"></span>
        </button>
        <button className="p-2 hover:bg-gray-900 rounded-full">
        <User className="w-6 h-6" />
        </button>
      </div>
      </div>
    </header>
  )
}