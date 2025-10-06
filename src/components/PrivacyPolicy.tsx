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
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="24" height="24" rx="6" fill="url(#instagram-gradient-3)" />
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
                  id="instagram-gradient-3"
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
      </footer>
    </div>
  );
}
