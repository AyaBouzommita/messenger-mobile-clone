import { useState, useEffect } from 'react'
import { Search, Camera, Edit, Plus, MessageCircle, Users, Compass, Phone, Video, Moon, Sun, ArrowLeft, Send, Smile, Image } from 'lucide-react'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('chats')
  const [darkMode, setDarkMode] = useState(false)
  const [selectedChat, setSelectedChat] = useState(null)
  const [messageInput, setMessageInput] = useState('')
  const [chatMessages, setChatMessages] = useState({})
  const [activeCategory, setActiveCategory] = useState('businesses')

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode')
    } else {
      document.body.classList.remove('dark-mode')
    }
  }, [darkMode])

  const stories = [
    { id: 1, name: 'Your Story', isUser: true, avatar: 'https://i.pravatar.cc/150?img=68' },
    { id: 2, name: 'Mia Reynolds', hasStory: true, avatar: 'https://i.pravatar.cc/150?img=5' },
    { id: 3, name: 'Loredaria Crisan', hasStory: true, avatar: 'https://i.pravatar.cc/150?img=9' },
    { id: 4, name: 'Jean-M Denis', hasStory: true, avatar: 'https://i.pravatar.cc/150?img=3' },
    { id: 5, name: 'Isaac Weinhausen', hasStory: true, avatar: 'https://i.pravatar.cc/150?img=11' },
  ]

  const chats = [
    {
      id: 1,
      name: 'Isaac Weinhausen',
      avatar: 'https://i.pravatar.cc/150?img=11',
      lastMessage: 'In definately int - now',
      time: '12:30',
      unread: true,
      hasMissedCall: true,
      messages: [
        { id: 1, text: 'Hey! How are you?', sent: false, time: '12:00' },
        { id: 2, text: 'In definately int - now', sent: false, time: '12:30' },
      ]
    },
    {
      id: 2,
      name: '101 Study Group',
      avatar: 'https://i.pravatar.cc/150?img=12',
      lastMessage: 'Kelly sent a sticker',
      time: '9m',
      unread: true,
      isGroup: true,
      messages: [
        { id: 1, text: 'Kelly sent a sticker', sent: false, sender: 'Kelly', time: '9m' },
      ]
    },
    {
      id: 3,
      name: 'Brendan Aronoff',
      avatar: 'https://i.pravatar.cc/150?img=15',
      lastMessage: 'You: Sure thing!',
      time: '1h',
      unread: false,
      messages: [
        { id: 1, text: 'Can you help me with the project?', sent: false, time: '55m' },
        { id: 2, text: 'Sure thing!', sent: true, time: '1h' },
      ]
    },
    {
      id: 4,
      name: 'Andrea Mittelstaedt',
      avatar: 'https://i.pravatar.cc/150?img=20',
      lastMessage: 'Thanks for the help',
      time: '2h',
      unread: false,
      messages: [
        { id: 1, text: 'I need some advice', sent: false, time: '1h 50m' },
        { id: 2, text: 'What do you need?', sent: true, time: '1h 55m' },
        { id: 3, text: 'Thanks for the help', sent: false, time: '2h' },
      ]
    },
    {
      id: 5,
      name: 'Design Team',
      avatar: 'https://i.pravatar.cc/150?img=25',
      lastMessage: 'Meeting at 3pm',
      time: '3h',
      unread: true,
      isGroup: true,
      messages: [
        { id: 1, text: 'Meeting at 3pm', sent: false, sender: 'Team Lead', time: '3h' },
      ]
    },
  ]

  const people = [
    {
      id: 1,
      name: 'Brendan Aronoff',
      avatar: 'https://i.pravatar.cc/150?img=15',
      online: true
    },
    {
      id: 2,
      name: 'Andrea Mittelstaedt',
      avatar: 'https://i.pravatar.cc/150?img=20',
      online: true
    },
    {
      id: 3,
      name: 'Mia Reynolds',
      avatar: 'https://i.pravatar.cc/150?img=5',
      online: false
    },
    {
      id: 4,
      name: 'Jean-M Denis',
      avatar: 'https://i.pravatar.cc/150?img=3',
      online: true
    },
    {
      id: 5,
      name: 'Loredaria Crisan',
      avatar: 'https://i.pravatar.cc/150?img=9',
      online: false
    },
  ]

  const businesses = [
    { id: 1, name: 'Nike', icon: '👟', color: '#ff6b6b' },
    { id: 2, name: 'Pinterest', icon: '📌', color: '#e74c3c' },
    { id: 3, name: 'Sephora', icon: '💄', color: '#d63384' },
    { id: 4, name: 'PayPal', icon: '💳', color: '#003087' },
    { id: 5, name: '1-800-FLOWERS', icon: '🌸', color: '#ff69b4' },
  ]

  const featured = [
    {
      id: 1,
      name: 'Fandango',
      icon: '🎬',
      description: 'Automated Messaging',
      color: '#6c5ce7'
    },
    {
      id: 2,
      name: 'Wall Street Journal',
      icon: '📰',
      description: 'Breaking news, investigative reporting',
      color: '#2c3e50'
    },
    {
      id: 3,
      name: 'Apple Music',
      icon: '🎵',
      description: 'Stream millions of songs',
      color: '#fa5252'
    },
  ]

  const handleChatClick = (chat) => {
    setSelectedChat(chat)
    if (!chatMessages[chat.id]) {
      setChatMessages(prev => ({
        ...prev,
        [chat.id]: chat.messages || []
      }))
    }
  }

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (messageInput.trim() && selectedChat) {
      const newMessage = {
        id: Date.now(),
        text: messageInput,
        sent: true,
        time: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })
      }
      setChatMessages(prev => ({
        ...prev,
        [selectedChat.id]: [...(prev[selectedChat.id] || []), newMessage]
      }))
      setMessageInput('')
    }
  }

  const handleBackToChats = () => {
    setSelectedChat(null)
  }

  const handleStoryClick = (story) => {
    if (story.isUser) {
      alert('Create your story!')
    } else {
      alert(`View ${story.name}'s story`)
    }
  }

  const handleVideoCall = (person) => {
    alert(`Starting video call with ${person.name}`)
  }

  const handleBusinessClick = (business) => {
    alert(`Opening ${business.name}`)
  }

  const handleFeaturedClick = (item) => {
    alert(`Opening ${item.name}`)
  }

  return (
    <div className={`messenger-mobile ${darkMode ? 'dark-mode' : ''}`}>
      {/* Status Bar */}
      <div className="status-bar">
        <span className="time">12:30</span>
        <div className="status-icons">
          <span className="status-icon">📶</span>
          <span className="status-icon">🔋</span>
        </div>
      </div>

      {/* Header */}
      <div className="header">
        {selectedChat ? (
          <div className="header-chat">
            <button className="back-button" onClick={handleBackToChats}>
              <ArrowLeft size={24} />
            </button>
            <div className="header-chat-info">
              <img src={selectedChat.avatar} alt={selectedChat.name} className="header-chat-avatar" />
              <div>
                <h2 className="header-chat-name">{selectedChat.name}</h2>
                <span className="header-chat-status">Active now</span>
              </div>
            </div>
            <div className="header-chat-actions">
              <button className="header-icon">
                <Video size={24} />
              </button>
              <button className="header-icon">
                <Phone size={24} />
              </button>
            </div>
          </div>
        ) : (
          <>
            <h1 className="header-title">
              {activeTab === 'chats' && 'Chats'}
              {activeTab === 'people' && 'People'}
              {activeTab === 'discover' && 'Discover'}
            </h1>
            <div className="header-icons">
              {activeTab === 'chats' && (
                <>
                  <button className="header-icon">
                    <Camera size={24} />
                  </button>
                  <button className="header-icon">
                    <Edit size={24} />
                  </button>
                </>
              )}
              {activeTab === 'people' && (
                <button className="header-icon">
                  <div className="profile-icon">
                    <img src="https://i.pravatar.cc/150?img=68" alt="Profile" />
                  </div>
                </button>
              )}
              <button className="header-icon" onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? <Sun size={24} /> : <Moon size={24} />}
              </button>
            </div>
          </>
        )}
      </div>

      {/* Search Bar */}
      {!selectedChat && (
        <div className="search-bar">
          <Search size={20} className="search-icon" />
          <input type="text" placeholder="Q Search" className="search-input" />
        </div>
      )}

      {/* Content */}
      <div className="content">
        {selectedChat ? (
          <div className="chat-conversation">
            <div className="messages-container">
              {(chatMessages[selectedChat.id] || []).map((message) => (
                <div key={message.id} className={`message ${message.sent ? 'sent' : 'received'}`}>
                  {message.sender && <span className="message-sender">{message.sender}</span>}
                  <div className="message-bubble">
                    <p>{message.text}</p>
                    <span className="message-time">{message.time}</span>
                  </div>
                </div>
              ))}
            </div>
            <form onSubmit={handleSendMessage} className="message-input-area">
              <button type="button" className="input-icon">
                <Plus size={24} />
              </button>
              <button type="button" className="input-icon">
                <Image size={24} />
              </button>
              <input
                type="text"
                placeholder="Aa"
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                className="message-input-field"
              />
              <button type="button" className="input-icon">
                <Smile size={24} />
              </button>
              <button type="submit" className="send-button">
                <Send size={24} />
              </button>
            </form>
          </div>
        ) : (
          <>
            {activeTab === 'chats' && (
              <div className="chats-tab">
                {/* Stories */}
                <div className="stories-section">
                  <div className="stories-scroll">
                    {stories.map((story) => (
                      <div key={story.id} className="story-item" onClick={() => handleStoryClick(story)}>
                        <div className={`story-avatar ${story.hasStory ? 'has-story' : ''} ${story.isUser ? 'user-story' : ''}`}>
                          {story.isUser && <div className="add-story"><Plus size={20} /></div>}
                          <img src={story.avatar} alt={story.name} />
                        </div>
                        <span className="story-name">{story.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Chat List */}
                <div className="chat-list">
                  {chats.map((chat) => (
                    <div key={chat.id} className="chat-item" onClick={() => handleChatClick(chat)}>
                      <div className="chat-avatar">
                        <img src={chat.avatar} alt={chat.name} />
                        {chat.unread && <div className="unread-dot" />}
                      </div>
                      <div className="chat-info">
                        <div className="chat-header">
                          <span className="chat-name">{chat.name}</span>
                          <div className="chat-meta">
                            <span className="chat-time">{chat.time}</span>
                            {chat.hasMissedCall && <Phone size={16} className="missed-call" />}
                          </div>
                        </div>
                        <span className="chat-message">{chat.lastMessage}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        {activeTab === 'people' && (
          <div className="people-tab">
            {/* Stories */}
            <div className="stories-section">
              <div className="stories-scroll">
                {stories.map((story) => (
                  <div key={story.id} className="story-item" onClick={() => handleStoryClick(story)}>
                    <div className={`story-avatar ${story.hasStory ? 'has-story' : ''} ${story.isUser ? 'user-story' : ''}`}>
                      {story.isUser && <div className="add-story"><Plus size={20} /></div>}
                      <img src={story.avatar} alt={story.name} />
                    </div>
                    <span className="story-name">{story.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* People List */}
            <div className="people-list">
              {people.map((person) => (
                <div key={person.id} className="person-item">
                  <div className="person-avatar">
                    <img src={person.avatar} alt={person.name} />
                    {person.online && <div className="online-dot" />}
                  </div>
                  <span className="person-name">{person.name}</span>
                  <button className="person-action" onClick={() => handleVideoCall(person)}>
                    <Video size={20} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'discover' && (
          <div className="discover-tab">
            {/* Category Tabs */}
            <div className="category-tabs">
              <button
                className={`category-tab ${activeCategory === 'businesses' ? 'active' : ''}`}
                onClick={() => setActiveCategory('businesses')}
              >
                BUSINESSES
              </button>
              <button
                className={`category-tab ${activeCategory === 'games' ? 'active' : ''}`}
                onClick={() => setActiveCategory('games')}
              >
                GAMES
              </button>
            </div>

            {/* Recently Used */}
            <div className="section">
              <div className="section-header">
                <h3 className="section-title">Recently Used</h3>
                <button className="see-all">SEE ALL</button>
              </div>
              <div className="horizontal-scroll">
                {businesses.map((business) => (
                  <div key={business.id} className="business-circle" onClick={() => handleBusinessClick(business)}>
                    <div className="business-icon" style={{ backgroundColor: business.color }}>
                      <span>{business.icon}</span>
                    </div>
                    <span className="business-name">{business.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured */}
            <div className="section">
              <div className="section-header">
                <h3 className="section-title">Featured</h3>
                <button className="see-all">SEE ALL</button>
              </div>
              <div className="featured-list">
                {featured.map((item) => (
                  <div key={item.id} className="featured-item" onClick={() => handleFeaturedClick(item)}>
                    <div className="featured-icon" style={{ backgroundColor: item.color }}>
                      <span>{item.icon}</span>
                    </div>
                    <div className="featured-info">
                      <span className="featured-name">{item.name}</span>
                      <span className="featured-desc">{item.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="bottom-nav">
        <button
          className={`nav-item ${activeTab === 'chats' ? 'active' : ''}`}
          onClick={() => setActiveTab('chats')}
        >
          <MessageCircle size={24} />
          <span>Chats</span>
        </button>
        <button
          className={`nav-item ${activeTab === 'people' ? 'active' : ''}`}
          onClick={() => setActiveTab('people')}
        >
          <Users size={24} />
          <span>People</span>
        </button>
        <button
          className={`nav-item ${activeTab === 'discover' ? 'active' : ''}`}
          onClick={() => setActiveTab('discover')}
        >
          <Compass size={24} />
          <span>Discover</span>
        </button>
      </div>
    </div>
  )
}

export default App
