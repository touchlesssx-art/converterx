import { useState, useEffect } from 'react';
import { ArrowLeftRight } from 'lucide-react';
import { convert, conversionData } from '../utils/conversionFactors';

interface ConverterCardProps {
  category: string;
  onBack?: () => void;
}

export default function ConverterCard({ category, onBack }: ConverterCardProps) {
  const categoryData = conversionData[category];

  if (!categoryData) {
    return <div>Category not found</div>;
  }

  const unitKeys = Object.keys(categoryData.units);
  const [fromUnit, setFromUnit] = useState(unitKeys[0]);
  const [toUnit, setToUnit] = useState(unitKeys[1] || unitKeys[0]);
  const [inputValue, setInputValue] = useState('0');
  const [result, setResult] = useState('0');

  // Perform conversion whenever input or units change
  useEffect(() => {
    const numValue = parseFloat(inputValue);
    if (isNaN(numValue)) {
      setResult('0');
      return;
    }

    const converted = convert(numValue, fromUnit, toUnit, category);
    // Round to 3 decimal places and remove trailing zeros
    setResult(parseFloat(converted.toFixed(3)).toString());
  }, [inputValue, fromUnit, toUnit, category]);

  // Handle input change
const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  let value = e.target.value;

  // Remove leading zeros unless it's a decimal like 0.5
  if (value.startsWith('0') && value.length > 1 && !value.startsWith('0.')) {
    value = value.replace(/^0+/, '');
  }

  // Allow empty, numbers, and decimal point
  if (value === '' || value === '-' || /^-?\d*\.?\d*$/.test(value)) {
    setInputValue(value);
  }
};

  // Animation state for arrow rotation
  const [isRotated, setIsRotated] = useState(false);

  // Swap from and to units
  const handleSwapUnits = () => {
    setIsRotated(prev => !prev);
    setFromUnit(toUnit);
    setToUnit(fromUnit);
  };

  // Handle long press for back navigation
  const [pressTimer, setPressTimer] = useState<number | null>(null);

  const handlePressStart = () => {
    const timer = window.setTimeout(() => {
      if (onBack) {
        onBack();
      }
    }, 500); // 500ms long press
    setPressTimer(timer);
  };

  const handlePressEnd = () => {
    if (pressTimer) {
      clearTimeout(pressTimer);
      setPressTimer(null);
    }
  };

  const handleClick = () => {
    handlePressEnd();
    handleSwapUnits();
  };


  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 transition-all duration-300 hover:shadow-xl">
      {/* Input Section */}
      <div className="mb-4 sm:mb-6">
        <label className="block text-xs sm:text-sm font-medium text-gray-600 mb-2">
          From
        </label>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
         <input
            type="number"
            inputMode="decimal"
            step="any"
            value={inputValue}
            onChange={handleInputChange}
            className="w-full sm:flex-1 px-3 sm:px-4 py-3 text-xl sm:text-2xl font-semibold text-gray-800 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
            placeholder="Enter value"
            autoFocus
          /> 
          <select
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value)}
            className="w-full sm:w-auto sm:min-w-[160px] px-3 sm:px-4 py-3 text-sm sm:text-base text-gray-800 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all cursor-pointer"
          >
            {unitKeys.map((key) => (
              <option key={key} value={key}>
                {categoryData.units[key].name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Swap Button */}
      <div className="flex justify-center mb-4 sm:mb-6">
        <button
          onClick={handleClick}
          onMouseDown={handlePressStart}
          onMouseUp={handlePressEnd}
          onMouseLeave={handlePressEnd}
          onTouchStart={handlePressStart}
          onTouchEnd={handlePressEnd}
          className="p-2.5 sm:p-3 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-full transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="Swap units (long press to go back)"
          title="Click to swap units, long press to go back"
        >
          <ArrowLeftRight
            size={20}
            className={`transition-transform duration-300 ${isRotated ? 'rotate-180' : 'rotate-0'}`}
          />
        </button>
      </div>

      {/* Result Section */}
      <div>
        <label className="block text-xs sm:text-sm font-medium text-gray-600 mb-2">
          To
        </label>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
          <div className="w-full sm:flex-1 px-3 sm:px-4 py-3 text-xl sm:text-2xl font-semibold text-blue-600 bg-blue-50 border-2 border-blue-200 rounded-xl break-all">
            {result}
          </div>
          <select
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value)}
            className="w-full sm:w-auto sm:min-w-[160px] px-3 sm:px-4 py-3 text-sm sm:text-base text-gray-800 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all cursor-pointer"
          >
            {unitKeys.map((key) => (
              <option key={key} value={key}>
                {categoryData.units[key].name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Info Text */}
      <div className="mt-4 sm:mt-6 text-center text-xs sm:text-sm text-gray-500 px-2">
        {inputValue && !isNaN(parseFloat(inputValue)) && (
          <p className="animate-fadeIn">
            {inputValue} {categoryData.units[fromUnit].name.toLowerCase()} ={' '}
            <span className="font-semibold text-blue-600">{result}</span>{' '}
            {categoryData.units[toUnit].name.toLowerCase()}
          </p>
        )}
      </div>
    </div>
  );
}
