import { useState, useEffect } from 'react';
import { Delete, Check } from 'lucide-react';

interface CustomKeyboardProps {
  isOpen: boolean;
  onClose: () => void;
  onInput: (value: string) => void;
  currentValue: string;
  allowDecimal?: boolean;
  allowNegative?: boolean;
  allowOperators?: boolean;
}

export default function CustomKeyboard({
  isOpen,
  onClose,
  onInput,
  currentValue,
  allowDecimal = true,
  allowNegative = true,
  allowOperators = false,
}: CustomKeyboardProps) {
  const [inputBuffer, setInputBuffer] = useState(currentValue);

  useEffect(() => {
    setInputBuffer(currentValue);
  }, [currentValue]);

  const handleKeyPress = (key: string) => {
    let newValue = inputBuffer;

    if (key === 'backspace') {
      newValue = inputBuffer.slice(0, -1);
    } else if (key === 'clear') {
      newValue = '';
    } else if (key === '.') {
      // Only add decimal if not already present and allowed
      if (allowDecimal && !inputBuffer.includes('.')) {
        newValue = inputBuffer + key;
      }
    } else if (key === '-') {
      // Toggle negative sign if allowed
      if (allowNegative) {
        if (inputBuffer.startsWith('-')) {
          newValue = inputBuffer.slice(1);
        } else {
          newValue = '-' + inputBuffer;
        }
      }
    } else if (['+', '*', '/'].includes(key)) {
      // Add operators if allowed
      if (allowOperators) {
        newValue = inputBuffer + key;
      }
    } else {
      // Add number
      newValue = inputBuffer + key;
    }

    setInputBuffer(newValue);
    onInput(newValue);
  };

  const keys = [
    ['7', '8', '9'],
    ['4', '5', '6'],
    ['1', '2', '3'],
    ['0', '.', '-'],
  ];

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/20 z-40 transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Keyboard */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-3xl shadow-2xl border-t border-gray-200 animate-slide-up">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
          <div className="text-sm font-medium text-gray-700">Enter Value</div>
          <button
            onClick={onClose}
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-all duration-200 active:scale-95"
          >
            <Check size={16} />
            <span className="text-sm font-medium">Done</span>
          </button>
        </div>

        {/* Display */}
        <div className="px-4 py-4 bg-gray-50">
          <div className="bg-white rounded-xl p-4 border-2 border-blue-200 shadow-sm">
            <div className="text-right text-2xl font-semibold text-gray-900 min-h-[36px]">
              {inputBuffer || '0'}
            </div>
          </div>
        </div>

        {/* Keys */}
        <div className="p-4 pb-6">
          <div className="grid grid-cols-4 gap-2">
            {/* Number and basic keys */}
            <div className="col-span-3 grid grid-cols-3 gap-2">
              {keys.map((row, rowIndex) => (
                row.map((key, keyIndex) => {
                  const isDisabled =
                    (key === '.' && !allowDecimal) ||
                    (key === '-' && !allowNegative);

                  return (
                    <button
                      key={`${rowIndex}-${keyIndex}`}
                      onClick={() => handleKeyPress(key)}
                      disabled={isDisabled}
                      className={`
                        aspect-square rounded-xl text-xl font-semibold
                        transition-all duration-200 active:scale-95
                        ${
                          isDisabled
                            ? 'bg-gray-100 text-gray-300 cursor-not-allowed'
                            : 'bg-white hover:bg-gray-50 text-gray-900 shadow-sm border border-gray-200 active:shadow-inner'
                        }
                      `}
                    >
                      {key === '-' ? '±' : key}
                    </button>
                  );
                })
              ))}
            </div>

            {/* Right column - operators and controls */}
            <div className="flex flex-col gap-2">
              <button
                onClick={() => handleKeyPress('backspace')}
                className="aspect-square rounded-xl bg-orange-500 hover:bg-orange-600 text-white shadow-md transition-all duration-200 active:scale-95 active:shadow-inner flex items-center justify-center"
              >
                <Delete size={24} />
              </button>

              <button
                onClick={() => handleKeyPress('clear')}
                className="aspect-square rounded-xl bg-red-500 hover:bg-red-600 text-white text-sm font-semibold shadow-md transition-all duration-200 active:scale-95 active:shadow-inner"
              >
                C
              </button>

              {allowOperators && (
                <>
                  <button
                    onClick={() => handleKeyPress('+')}
                    className="aspect-square rounded-xl bg-blue-500 hover:bg-blue-600 text-white text-2xl font-bold shadow-md transition-all duration-200 active:scale-95 active:shadow-inner"
                  >
                    +
                  </button>
                  <button
                    onClick={() => handleKeyPress('*')}
                    className="aspect-square rounded-xl bg-blue-500 hover:bg-blue-600 text-white text-2xl font-bold shadow-md transition-all duration-200 active:scale-95 active:shadow-inner"
                  >
                    ×
                  </button>
                </>
              )}

              {!allowOperators && (
                <div className="flex-1"></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
