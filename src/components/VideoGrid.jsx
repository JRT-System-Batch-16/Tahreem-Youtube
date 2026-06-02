import VideoCard from './Video'
import ShortCard from './Short'
export default function VideoGrid({ activeCategory, onCategoryChange }) {
  const categories = ['All', 'Music', 'Indian pop music', 'Mixes', 'Pakistani dramas', 'Gaming', 'Movie musicals', 'Cartoon', 'korean Dramas', 'Funny Videos']
  const mockVideos = [
    {
      id: 1,
      title: '10x Your Work with Smart Tools That Streamline Projects, Docs, and Goals in ClickUp',
      channel: 'ClickUp',
      views: '100k',
      timestamp: '2 days ago',
      thumbnail: 'bg-gradient-to-br from-purple-600 to-blue-600',
      duration: '8:45'
    },
    {
      id: 2,
      title: 'Complete React JS Course | MERN Stack Development',
      channel: 'Sheryians Coding School',
      views: '200K',
      timestamp: '1 year ago',
      thumbnail: 'bg-gradient-to-br from-teal-600 to-cyan-700',
      duration: '3:26'
    },
    {
      id: 3,
      title: 'Heavy Rain - Multiple Flights Cancelled - Weather Update | 6 AM Headlines',
      channel: 'Geo News',
      views: '300K',
      timestamp: '8 hours ago',
      thumbnail: 'bg-gradient-to-br from-blue-600 to-orange-500',
      duration: '5:12'
    },
    {
      id: 4,
      title: 'The Future of Web Development 2024',
      channel: 'Tech Academy',
      views: '400K',
      timestamp: '3 weeks ago',
      thumbnail: 'bg-gradient-to-br from-green-600 to-blue-500',
      duration: '12:33'
    },
  ]
  const mockShorts = [
    {
      id: 'T1',
      thumbnail: 'bg-gradient-to-br from-red-600 to-pink-600',
      views: '2K'
    },
    {
      id: 'T2',
      thumbnail: 'bg-gradient-to-br from-purple-600 to-indigo-600',
      views: '3K'
    },
    {
      id: 'T3',
      thumbnail: 'bg-gradient-to-br from-green-600 to-teal-600',
      views: '4K'
    },
    {
      id: 'T4',
      thumbnail: 'bg-gradient-to-br from-orange-600 to-red-600',
      views: '5K'
    },
  ]
  return (
    <div className="flex-1 overflow-y-auto">
      <div className="sticky top-0 bg-black border-b border-gray-800 px-4 py-3 overflow-x-auto">
        <div className="flex gap-3 whitespace-nowrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`px-4 py-2 rounded-full font-medium transition-colors whitespace-nowrap ${
                activeCategory === category
                  ? 'bg-white text-black'
                  : 'bg-gray-900 text-white hover:bg-gray-800'
              }`}>
              {category}
            </button>
          ))}
      </div>
      </div>
      <div className="p-4 space-y-8">
      <div>
      <h2 className="text-white text-lg font-semibold mb-4">Videos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {mockVideos.map((video) => (
      <VideoCard key={video.id} {...video} />))}
    </div>
     </div>
        <div>
        <h2 className="text-white text-lg font-semibold mb-4">Shorts</h2>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {mockShorts.map((short) => (
          <ShortCard key={short.id} {...short} /> ))}
      </div>
      </div>
      </div>
    </div>
  )}
