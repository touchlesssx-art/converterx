import { useState, useEffect } from 'react';
import {
  Ruler,
  Square,
  Cuboid,
  Weight,
  Thermometer,
  Gauge,
  Clock,
  Zap,
  Flame,
  Wind,
  HardDrive,
  Layers,
  Triangle,
  Radio,
  Lightbulb,
  Move,
  Fuel,
  Home,
} from 'lucide-react';
import ConverterCard from './components/ConverterCard';
import PrivacyPolicy from './components/PrivacyPolicy';
import { conversionData } from './utils/conversionFactors';

// Map icon names to actual components
const iconMap: { [key: string]: any } = {
  Ruler,
  Square,
  Cuboid,
  Weight,
  Thermometer,
  Gauge,
  Clock,
  Zap,
  Flame,
  Wind,
  HardDrive,
  Layers,
  Triangle,
  Radio,
  Lightbulb,
  Move,
  Fuel,
};

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);

  // Get all categories
  const categories = Object.keys(conversionData);

  // Initialize state from URL on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const page = params.get('page');
    const category = params.get('category');

    if (page === 'privacy') {
      setShowPrivacyPolicy(true);
    } else if (category && conversionData[category]) {
      setSelectedCategory(category);
    }
  }, []);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const page = params.get('page');
      const category = params.get('category');

      if (page === 'privacy') {
        setShowPrivacyPolicy(true);
        setSelectedCategory(null);
      } else if (category && conversionData[category]) {
        setSelectedCategory(category);
        setShowPrivacyPolicy(false);
      } else {
        setSelectedCategory(null);
        setShowPrivacyPolicy(false);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Handle back to home
  const handleBackToHome = () => {
    setSelectedCategory(null);
    setShowPrivacyPolicy(false);
    window.history.pushState({}, '', '/');
  };

  // Handle category selection
  const handleCategorySelect = (categoryKey: string) => {
    setSelectedCategory(categoryKey);
    setShowPrivacyPolicy(false);
    window.history.pushState({}, '', `?category=${categoryKey}`);
  };

  // Handle privacy policy navigation
  const handlePrivacyPolicyClick = () => {
    setShowPrivacyPolicy(true);
    setSelectedCategory(null);
    window.history.pushState({}, '', '?page=privacy');
  };

  // Render privacy policy if selected
  if (showPrivacyPolicy) {
    return <PrivacyPolicy onBack={handleBackToHome} />;
  }

  // Render home screen with all categories
  if (!selectedCategory) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center gap-3">
              <img
                src="/image.png"
                alt="ConverterX Logo"
                className="w-14 h-14 rounded-lg"
              />
              <div>
                <h1 className="text-3xl font-bold text-gray-900">ConverterX</h1>
                <p className="text-sm text-gray-600">
                  Fast, accurate unit conversions
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Categories Grid */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Choose a Category
            </h2>
            <p className="text-gray-600">
              Select a unit type to start converting
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((categoryKey) => {
              const category = conversionData[categoryKey];
              const IconComponent = iconMap[category.icon];

              return (
                <button
                  key={categoryKey}
                  onClick={() => handleCategorySelect(categoryKey)}
                  className="group relative bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 active:scale-95 border-2 border-transparent hover:border-blue-200"
                >
                  <div className="flex flex-col items-center gap-3">
                    <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                      {IconComponent && (
                        <IconComponent
                          className="text-blue-600"
                          size={32}
                        />
                      )}
                    </div>
                    <h3 className="text-center font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                      {category.name}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-16 py-6 text-center text-sm text-gray-500">
          <p>Made with precision and care</p>
          <div className="flex items-center justify-center gap-4 mt-4 mb-2">
            <a
              href="https://www.instagram.com/the.converterx/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              aria-label="Instagram"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="24" height="24" rx="6" fill="url(#instagram-gradient)" />
                <path
                  d="M12 8.75C10.2051 8.75 8.75 10.2051 8.75 12C8.75 13.7949 10.2051 15.25 12 15.25C13.7949 15.25 15.25 13.7949 15.25 12C15.25 10.2051 13.7949 8.75 12 8.75ZM12 13.8333C11.0215 13.8333 10.1667 12.9785 10.1667 12C10.1667 11.0215 11.0215 10.1667 12 10.1667C12.9785 10.1667 13.8333 11.0215 13.8333 12C13.8333 12.9785 12.9785 13.8333 12 13.8333Z"
                  fill="white"
                />
                <path
                  d="M15.5 8.5C15.9142 8.5 16.25 8.16421 16.25 7.75C16.25 7.33579 15.9142 7 15.5 7C15.0858 7 14.75 7.33579 14.75 7.75C14.75 8.16421 15.0858 8.5 15.5 8.5Z"
                  fill="white"
                />
                <path
                  d="M16.5 5.5H7.5C6.11929 5.5 5 6.61929 5 8V16C5 17.3807 6.11929 18.5 7.5 18.5H16.5C17.8807 18.5 19 17.3807 19 16V8C19 6.61929 17.8807 5.5 16.5 5.5ZM17.5 16C17.5 16.5523 17.0523 17 16.5 17H7.5C6.94772 17 6.5 16.5523 6.5 16V8C6.5 7.44772 6.94772 7 7.5 7H16.5C17.0523 7 17.5 7.44772 17.5 8V16Z"
                  fill="white"
                />
                <defs>
                  <linearGradient
                    id="instagram-gradient"
                    x1="2"
                    y1="22"
                    x2="22"
                    y2="2"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FD5949" />
                    <stop offset="0.5" stopColor="#D6249F" />
                    <stop offset="1" stopColor="#285AEB" />
                  </linearGradient>
                </defs>
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@the.converterx"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              aria-label="TikTok"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="24" height="24" rx="6" fill="#000000" />
                <path
                  d="M16.6 5.82C15.9165 5.03962 15.5398 4.03743 15.54 3H12.45V15.4C12.4261 16.071 12.143 16.7066 11.6599 17.1729C11.1768 17.6393 10.5307 17.8999 9.85997 17.9C8.44997 17.9 7.26997 16.74 7.26997 15.3C7.26997 13.58 8.91997 12.29 10.63 12.82V9.66C7.18997 9.2 4.15997 11.88 4.15997 15.3C4.15997 18.63 6.91997 21 9.84997 21C12.99 21 15.54 18.45 15.54 15.3V9.01C16.793 9.90985 18.2975 10.3926 19.84 10.39V7.3C19.84 7.3 17.96 7.39 16.6 5.82Z"
                  fill="#EE1D52"
                />
                <path
                  d="M16.6 5.82C15.9165 5.03962 15.5398 4.03743 15.54 3H12.45V15.4C12.4261 16.071 12.143 16.7066 11.6599 17.1729C11.1768 17.6393 10.5307 17.8999 9.85997 17.9C8.44997 17.9 7.26997 16.74 7.26997 15.3C7.26997 13.58 8.91997 12.29 10.63 12.82V9.66C7.18997 9.2 4.15997 11.88 4.15997 15.3C4.15997 18.63 6.91997 21 9.84997 21C12.99 21 15.54 18.45 15.54 15.3V9.01C16.793 9.90985 18.2975 10.3926 19.84 10.39V7.3C19.84 7.3 17.96 7.39 16.6 5.82Z"
                  fill="#69C9D0"
                />
                <path
                  d="M16.6 5.82C15.9165 5.03962 15.5398 4.03743 15.54 3H12.45V15.4C12.4261 16.071 12.143 16.7066 11.6599 17.1729C11.1768 17.6393 10.5307 17.8999 9.85997 17.9C8.44997 17.9 7.26997 16.74 7.26997 15.3C7.26997 13.58 8.91997 12.29 10.63 12.82V9.66C7.18997 9.2 4.15997 11.88 4.15997 15.3C4.15997 18.63 6.91997 21 9.84997 21C12.99 21 15.54 18.45 15.54 15.3V9.01C16.793 9.90985 18.2975 10.3926 19.84 10.39V7.3C19.84 7.3 17.96 7.39 16.6 5.82Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
          <button
            onClick={handlePrivacyPolicyClick}
            className="mt-2 text-blue-600 hover:text-blue-700 underline transition-colors"
          >
            Privacy Policy
          </button>
        </footer>
      </div>
    );
  }

  // Render converter for selected category
  const category = conversionData[selectedCategory];
  const IconComponent = iconMap[category.icon];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between gap-2">
            <button
              onClick={handleBackToHome}
              className="flex items-center gap-1 sm:gap-2 text-gray-600 hover:text-blue-600 transition-colors flex-shrink-0"
            >
              <Home size={20} />
              <span className="font-medium text-sm sm:text-base">Back</span>
            </button>

            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              <div className="p-1.5 sm:p-2 bg-blue-500 rounded-lg flex-shrink-0">
                {IconComponent && (
                  <IconComponent className="text-white" size={20} />
                )}
              </div>
              <h1 className="text-base sm:text-xl lg:text-2xl font-bold text-gray-900 truncate">
                {category.name}
              </h1>
            </div>

            <div className="w-0 sm:w-16"></div>
          </div>
        </div>
      </header>

      {/* Converter */}
      <main className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-12">
        <ConverterCard category={selectedCategory} onBack={handleBackToHome} />
      </main>

      {/* Footer */}
      <footer className="mt-16 py-6 text-center text-sm text-gray-500">
        <p>Made with precision and care</p>
        <div className="flex items-center justify-center gap-4 mt-4 mb-2">
          <a
            href="https://www.instagram.com/the.converterx/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
            aria-label="Instagram"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="24" height="24" rx="6" fill="url(#instagram-gradient-2)" />
              <path
                d="M12 8.75C10.2051 8.75 8.75 10.2051 8.75 12C8.75 13.7949 10.2051 15.25 12 15.25C13.7949 15.25 15.25 13.7949 15.25 12C15.25 10.2051 13.7949 8.75 12 8.75ZM12 13.8333C11.0215 13.8333 10.1667 12.9785 10.1667 12C10.1667 11.0215 11.0215 10.1667 12 10.1667C12.9785 10.1667 13.8333 11.0215 13.8333 12C13.8333 12.9785 12.9785 13.8333 12 13.8333Z"
                fill="white"
              />
              <path
                d="M15.5 8.5C15.9142 8.5 16.25 8.16421 16.25 7.75C16.25 7.33579 15.9142 7 15.5 7C15.0858 7 14.75 7.33579 14.75 7.75C14.75 8.16421 15.0858 8.5 15.5 8.5Z"
                fill="white"
              />
              <path
                d="M16.5 5.5H7.5C6.11929 5.5 5 6.61929 5 8V16C5 17.3807 6.11929 18.5 7.5 18.5H16.5C17.8807 18.5 19 17.3807 19 16V8C19 6.61929 17.8807 5.5 16.5 5.5ZM17.5 16C17.5 16.5523 17.0523 17 16.5 17H7.5C6.94772 17 6.5 16.5523 6.5 16V8C6.5 7.44772 6.94772 7 7.5 7H16.5C17.0523 7 17.5 7.44772 17.5 8V16Z"
                fill="white"
              />
              <defs>
                <linearGradient
                  id="instagram-gradient-2"
                  x1="2"
                  y1="22"
                  x2="22"
                  y2="2"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FD5949" />
                  <stop offset="0.5" stopColor="#D6249F" />
                  <stop offset="1" stopColor="#285AEB" />
                </linearGradient>
              </defs>
            </svg>
          </a>
          <a
            href="https://www.tiktok.com/@the.converterx"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
            aria-label="TikTok"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="24" height="24" rx="6" fill="#000000" />
              <path
                d="M16.6 5.82C15.9165 5.03962 15.5398 4.03743 15.54 3H12.45V15.4C12.4261 16.071 12.143 16.7066 11.6599 17.1729C11.1768 17.6393 10.5307 17.8999 9.85997 17.9C8.44997 17.9 7.26997 16.74 7.26997 15.3C7.26997 13.58 8.91997 12.29 10.63 12.82V9.66C7.18997 9.2 4.15997 11.88 4.15997 15.3C4.15997 18.63 6.91997 21 9.84997 21C12.99 21 15.54 18.45 15.54 15.3V9.01C16.793 9.90985 18.2975 10.3926 19.84 10.39V7.3C19.84 7.3 17.96 7.39 16.6 5.82Z"
                fill="#EE1D52"
              />
              <path
                d="M16.6 5.82C15.9165 5.03962 15.5398 4.03743 15.54 3H12.45V15.4C12.4261 16.071 12.143 16.7066 11.6599 17.1729C11.1768 17.6393 10.5307 17.8999 9.85997 17.9C8.44997 17.9 7.26997 16.74 7.26997 15.3C7.26997 13.58 8.91997 12.29 10.63 12.82V9.66C7.18997 9.2 4.15997 11.88 4.15997 15.3C4.15997 18.63 6.91997 21 9.84997 21C12.99 21 15.54 18.45 15.54 15.3V9.01C16.793 9.90985 18.2975 10.3926 19.84 10.39V7.3C19.84 7.3 17.96 7.39 16.6 5.82Z"
                fill="#69C9D0"
              />
              <path
                d="M16.6 5.82C15.9165 5.03962 15.5398 4.03743 15.54 3H12.45V15.4C12.4261 16.071 12.143 16.7066 11.6599 17.1729C11.1768 17.6393 10.5307 17.8999 9.85997 17.9C8.44997 17.9 7.26997 16.74 7.26997 15.3C7.26997 13.58 8.91997 12.29 10.63 12.82V9.66C7.18997 9.2 4.15997 11.88 4.15997 15.3C4.15997 18.63 6.91997 21 9.84997 21C12.99 21 15.54 18.45 15.54 15.3V9.01C16.793 9.90985 18.2975 10.3926 19.84 10.39V7.3C19.84 7.3 17.96 7.39 16.6 5.82Z"
                fill="white"
              />
            </svg>
          </a>
        </div>
        <button
          onClick={handlePrivacyPolicyClick}
          className="mt-2 text-blue-600 hover:text-blue-700 underline transition-colors"
        >
          Privacy Policy
        </button>
      </footer>
    </div>
  );
}

export default App;
