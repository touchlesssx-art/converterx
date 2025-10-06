import { Home } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

export default function PrivacyPolicy({ onBack }: PrivacyPolicyProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between gap-2">
            <button
              onClick={onBack}
              className="flex items-center gap-1 sm:gap-2 text-gray-600 hover:text-blue-600 transition-colors flex-shrink-0"
            >
              <Home size={20} />
              <span className="font-medium text-sm sm:text-base">Back</span>
            </button>

            <h1 className="text-base sm:text-xl lg:text-2xl font-bold text-gray-900">
              Privacy Policy
            </h1>

            <div className="w-0 sm:w-16"></div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10">
          <div className="prose prose-sm sm:prose-base max-w-none">
            <p className="text-gray-600 mb-8">
              Please paste your privacy policy content here
            </p>

            {/* Example structure - replace with actual content */}
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Information Collection
            </h2>
            <p className="text-gray-700 mb-4">
              Your content here...
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Use of Information
            </h2>
            <p className="text-gray-700 mb-4">
              Your content here...
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Data Security
            </h2>
            <p className="text-gray-700 mb-4">
              Your content here...
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Third-Party Services
            </h2>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Example service 1</li>
              <li>Example service 2</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Contact Information
            </h2>
            <p className="text-gray-700 mb-4">
              Your content here...
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 py-6 text-center text-sm text-gray-500">
        <p>Made with precision and care</p>
      </footer>
    </div>
  );
}
