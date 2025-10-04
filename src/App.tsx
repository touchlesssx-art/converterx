import { useState } from 'react';
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

  // Get all categories
  const categories = Object.keys(conversionData);

  // Handle back to home
  const handleBackToHome = () => {
    setSelectedCategory(null);
  };

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
                  onClick={() => setSelectedCategory(categoryKey)}
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
      </footer>
    </div>
  );
}

export default App;
