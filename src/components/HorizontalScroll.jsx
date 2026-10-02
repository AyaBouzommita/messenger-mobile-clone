import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useRef } from 'react'

function HorizontalScroll({ children, title }) {
  const scrollRef = useRef(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 400
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  const handleScroll = () => {
    if (scrollRef.current) {
      setShowLeftArrow(scrollRef.current.scrollLeft > 0)
      setShowRightArrow(
        scrollRef.current.scrollLeft <
        scrollRef.current.scrollWidth - scrollRef.current.clientWidth
      )
    }
  }

  return (
    <div className="relative group">
      {/* Title */}
      <h3 className="text-2xl font-bold text-fifa-text mb-4 flex items-center gap-2">
        {title}
        <span className="text-fifa-accent text-sm font-normal opacity-0 group-hover:opacity-100 transition-opacity">
          View all
        </span>
      </h3>

      {/* Scroll Container */}
      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={() => scroll('left')}
          className={`absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-fifa-bg to-transparent z-10 flex items-center justify-start pl-4 transition-all ${
            showLeftArrow ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="w-10 h-10 rounded-full bg-fifa-card border border-white/10 flex items-center justify-center hover:bg-fifa-accent hover:text-fifa-bg transition-all">
            <ChevronLeft className="w-5 h-5" />
          </div>
        </button>

        {/* Scroll Content */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {children}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll('right')}
          className={`absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-fifa-bg to-transparent z-10 flex items-center justify-end pr-4 transition-all ${
            showRightArrow ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="w-10 h-10 rounded-full bg-fifa-card border border-white/10 flex items-center justify-center hover:bg-fifa-accent hover:text-fifa-bg transition-all">
            <ChevronRight className="w-5 h-5" />
          </div>
        </button>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}

export default HorizontalScroll
