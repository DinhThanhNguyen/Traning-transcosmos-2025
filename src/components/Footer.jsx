export default function Footer() {

  return (
    <footer className="bg-black text-gray-400 py-10 mt-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Grid links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Investor Relations
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Speed Test
              </a>
            </li>
          </ul>

          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Jobs
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Cookie Preferences
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Legal Notices
              </a>
            </li>
          </ul>

          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Account
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Ways to Watch
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Corporate Information
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Only on Netflix
              </a>
            </li>
          </ul>

          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Media Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms of Use
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Language */}
        <div className="mt-6">
          <select className="bg-black border border-gray-600 text-gray-300 text-sm px-4 py-2">
            <option>English</option>
            <option>Tiếng Việt</option>
          </select>
        </div>
      </div>
    </footer>
  );
}
