import Link from 'next/link';
import { Search, BookOpen } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-blue-600" />
              <span className="font-bold text-xl text-gray-900">PrepHub</span>
            </Link>
          </div>

          <div className="flex items-center flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
            <div className="max-w-lg w-full lg:max-w-xs relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Search subjects or materials..."
                type="search"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
