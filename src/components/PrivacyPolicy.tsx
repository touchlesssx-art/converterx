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

            {/* About ConverterX Section */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About ConverterX</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              ConverterX is a free and reliable tool designed to help users convert between various units including length, mass, temperature, time, and many more.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Our mission is to simplify daily tasks by offering accurate and fast conversion tools that anyone can use globally.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              ConverterX is developed with care and dedication to build the next-gen digital solutions.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              If you have any questions or concerns, feel free to contact us.
            </p>

            {/* Privacy Policy Section */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Information Collection
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              At ConverterX, we collect limited, non-personal data to help us understand and improve your experience. This may include:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Device type (e.g., phone, tablet, computer)</li>
              <li>Browser type and version</li>
              <li>Anonymous IP address</li>
              <li>Pages visited and time spent on the website</li>
            </ul>
            <p className="text-gray-700 mb-8 leading-relaxed">
              We do not collect personal data such as names, emails, or payment information unless explicitly provided.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Use of Information
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              The information we collect is used solely to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Monitor website performance</li>
              <li>Analyze user interactions (e.g., which pages are most visited)</li>
              <li>Improve website design, speed, and usability</li>
              <li>Troubleshoot technical issues</li>
            </ul>
            <p className="text-gray-700 mb-8 leading-relaxed">
              We are committed to maintaining transparency and only using data in ways that benefit your user experience.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Data Security
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We take data protection seriously. All collected information is:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Stored in secure environments</li>
              <li>Accessed only by authorized tools (e.g., Google Analytics)</li>
              <li>Not linked to any personal identity</li>
              <li>Never sold, rented, or misused</li>
            </ul>
            <p className="text-gray-700 mb-8 leading-relaxed">
              In future updates, we will implement further encryption and safety features as we grow.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Third-Party Services
            </h2>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>We use Google Analytics to track anonymous usage data.</li>
              <li>Google may collect anonymized traffic data for performance analysis.</li>
              <li>
                You can learn more here:{' '}
                <a
                  href="https://policies.google.com/technologies/partner-sites"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  https://policies.google.com/technologies/partner-sites
                </a>
              </li>
              <li>Cookies may also be used to remember preferences and enhance functionality.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Contact Information
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              If you have any questions, concerns, or requests related to privacy or data usage, feel free to contact us:
            </p>
            <div className="text-gray-700 mb-6 space-y-2">
              <p>📧 <a href="mailto:contact.converterx@gmail.com" className="text-blue-600 hover:text-blue-700">contact.converterx@gmail.com</a></p>
              <p>🌐 <a href="https://www.converterx.net" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">www.converterx.net</a></p>
            </div>
            <p className="text-gray-700 mb-8 leading-relaxed">
              We are here to ensure your privacy and trust remain protected.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 py-6 text-center text-sm text-gray-500">
        <p>Made with precision and care</p>
        <div className="flex items-center justify-center gap-4 mt-4">
          <a
            href="https://www.instagram.com/the.converterx/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
            aria-label="Instagram"
          >
            {/* Instagram SVG */}
          </a>
          <a
            href="https://www.tiktok.com/@the.converterx"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
            aria-label="TikTok"
          >
            {/* TikTok SVG */}
          </a>
        </div>
      </footer>
    </div>
  );
}
