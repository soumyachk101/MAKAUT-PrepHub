'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const branches = ['CSE', 'IT', 'ECE', 'EE', 'ME', 'CE'];
const semesters = Array.from({ length: 8 }, (_, i) => i + 1);

export default function Home() {
  const router = useRouter();
  const [selectedBranch, setSelectedBranch] = useState<string | null>(null);
  const [selectedSem, setSelectedSem] = useState<number | null>(null);

  const handleSearch = () => {
    if (selectedBranch && selectedSem) {
      router.push(`/subjects?branch=${selectedBranch}&sem=${selectedSem}`);
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8 py-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          Find your <span className="text-blue-600">study materials</span>
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
          Access structured notes, PYQs, and syllabus for all your semester subjects in one place.
        </p>
      </div>

      <div className="bg-white shadow rounded-lg p-6 sm:p-8 space-y-8">
        <div className="space-y-4">
          <h2 className="text-lg font-medium text-gray-900">1. Select your Branch</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {branches.map(branch => (
              <button
                key={branch}
                onClick={() => setSelectedBranch(branch)}
                className={`py-2 px-4 border rounded-md text-sm font-medium transition-colors ${
                  selectedBranch === branch
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                }`}
              >
                {branch}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-medium text-gray-900">2. Select your Semester</h2>
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-3">
            {semesters.map(sem => (
              <button
                key={sem}
                onClick={() => setSelectedSem(sem)}
                className={`py-2 px-4 border rounded-md text-sm font-medium transition-colors ${
                  selectedSem === sem
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                }`}
              >
                {sem}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleSearch}
          disabled={!selectedBranch || !selectedSem}
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-300 disabled:cursor-not-allowed transition-colors"
        >
          View Subjects
        </button>
      </div>
    </div>
  );
}
