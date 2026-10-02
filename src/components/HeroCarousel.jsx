import { useState, useEffect } from 'react'
import { Play, ChevronRight, Trophy, ChevronLeft } from 'lucide-react'

function HeroCarousel({ slides, onSlideChange, currentSlide, onHoverSlide, externalSlideIndex }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [progress, setProgress] = useState(0)

  // Handle external slide index from PlayerCard hover
  useEffect(() => {
    if (externalSlideIndex !== null && externalSlideIndex !== currentIndex) {
      setCurrentIndex(externalSlideIndex)
      setProgress(0)
      setIsPaused(true)
    }
  }, [externalSlideIndex])

  useEffect(() => {
    if (onSlideChange) {
      onSlideChange(currentIndex)
    }
  }, [currentIndex, onSlideChange])

  useEffect(() => {
    let interval
    let progressInterval

    progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0
        }
        return prev + (100 / 70) // 7 seconds = 7000ms, update every 100ms
      })
    }, 100)

    interval = setInterval(() => {
      if (!isPaused) {
        setCurrentIndex((prev) => (prev + 1) % slides.length)
        setProgress(0)
      }
    }, 7000)

    return () => {
      clearInterval(interval)
      clearInterval(progressInterval)
    }
  }, [isPaused, slides.length])

  const handleMouseEnter = () => setIsPaused(true)
  const handleMouseLeave = () => {
    if (externalSlideIndex === null) {
      setIsPaused(false)
    }
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
    setProgress(0)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
    setProgress(0)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length)
    setProgress(0)
  }

  const currentSlideData = slides[currentIndex]

  return (
    <div
      className="relative h-[80vh] overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Image */}
      <div className="absolute inset-0" key={currentIndex}>
        <img
          src={currentSlideData.image}
          alt={currentSlideData.title}
          className="w-full h-full object-cover transition-all duration-1000 ease-in-out transform scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-fifa-bg via-fifa-bg/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-fifa-bg via-fifa-bg/30 to-transparent" />
        <div className="absolute inset-0 bg-black/30" />
        
        {/* Animated particles overlay */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-fifa-accent rounded-full animate-pulse" style={{ animationDelay: '0s' }} />
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-fifa-accent-secondary rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-fifa-accent rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-fifa-accent-secondary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center" key={currentIndex}>
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-2xl">
            {/* Category */}
            <div className="flex items-center gap-2 mb-4 opacity-0 animate-fadeIn" style={{ animationDelay: '200ms' }}>
              <div className="w-2 h-2 bg-fifa-accent rounded-full animate-pulse" />
              <span className="text-fifa-accent text-sm font-semibold tracking-wider uppercase">
                {currentSlideData.category}
              </span>
            </div>

            {/* Title */}
            <h1
              className="text-5xl md:text-7xl font-bold text-fifa-text mb-4 opacity-0 animate-slideUp"
              style={{ animationDelay: '300ms' }}
            >
              {currentSlideData.title}
            </h1>

            {/* Subtitle */}
            <p
              className="text-xl md:text-2xl text-fifa-text-secondary mb-4 opacity-0 animate-slideUp"
              style={{ animationDelay: '400ms' }}
            >
              {currentSlideData.subtitle}
            </p>

            {/* Description */}
            <p
              className="text-fifa-text-secondary mb-8 max-w-lg opacity-0 animate-fadeIn"
              style={{ animationDelay: '500ms' }}
            >
              {currentSlideData.description}
            </p>

            {/* Buttons */}
            <div
              className="flex flex-wrap gap-4 opacity-0 animate-fadeIn"
              style={{ animationDelay: '600ms' }}
            >
              <button
                onClick={currentSlideData.primaryAction}
                className="bg-fifa-accent text-fifa-bg px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:bg-fifa-accent/90 transition-colors"
              >
                {currentSlideData.type === 'match' ? (
                  <>
                    <Play className="w-5 h-5" />
                    {currentSlideData.primaryButton}
                  </>
                ) : (
                  currentSlideData.primaryButton
                )}
              </button>
              {currentSlideData.secondaryButton && (
                <button
                  onClick={currentSlideData.secondaryAction}
                  className="border border-white/20 text-fifa-text px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:bg-white/5 transition-colors"
                >
                  {currentSlideData.secondaryButton}
                  <ChevronRight className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 hover:bg-fifa-accent hover:text-fifa-bg text-white flex items-center justify-center transition-all z-20 backdrop-blur-sm border border-white/10 hover:border-fifa-accent"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 hover:bg-fifa-accent hover:text-fifa-bg text-white flex items-center justify-center transition-all z-20 backdrop-blur-sm border border-white/10 hover:border-fifa-accent"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
        <span className="text-fifa-text-secondary text-sm font-mono">
          {String(currentIndex + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </span>
        
        {/* Progress Bar */}
        <div className="w-32 h-1 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-fifa-accent transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Dots */}
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-fifa-accent w-6' : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.7s ease-out forwards;
        }
        .animate-slideUp {
          animation: slideUp 0.7s ease-out forwards;
        }
      `}</style>
    </div>
  )
}

export default HeroCarousel
