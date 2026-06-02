export default function ShortCard({ thumbnail, views }) {
  return (
    <div className="group cursor-pointer">
  <div className={`relative w-full aspect-[8/10] ${thumbnail} rounded-lg overflow-hidden mb-3 group-hover:rounded-lg transition-all`}>
   <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-all flex items-center justify-center">
     <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center group-hover:bg-opacity-30 transition-all">
      <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M8 5v14l11-7z" /></svg>
      </div>
      </div>
      <div className="absolute bottom-2 left-2 right-2 bg-black bg-opacity-80 px-3 py-1 rounded text-xs font-semibold text-white">{views} views
      </div>
      </div>
    </div>
  )
}
