'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronRight, BookOpen, Layers } from 'lucide-react';

const branches = [
  { id: 'CSE', name: 'Computer Science', color: 'from-blue-500 to-cyan-500' },
  { id: 'IT', name: 'Information Tech', color: 'from-indigo-500 to-purple-500' },
  { id: 'ECE', name: 'Electronics', color: 'from-emerald-500 to-teal-500' },
  { id: 'EE', name: 'Electrical', color: 'from-orange-500 to-amber-500' },
  { id: 'ME', name: 'Mechanical', color: 'from-red-500 to-rose-500' },
  { id: 'CE', name: 'Civil', color: 'from-slate-500 to-gray-500' },
];

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
    <div className="max-w-4xl mx-auto space-y-12 py-12 px-4 sm:px-6">
      <div className="text-center space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-4 border border-blue-100">
          <BookOpen className="h-4 w-4" />
          <span>MAKAUT Syllabus Updated</span>
        </div>
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl md:text-7xl">
          Ace your <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Semesters</span>
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
          The ultimate repository for MAKAUT engineering students. Find structured notes, previous year questions, and complete syllabus in seconds.
        </p>
      </div>

      <div className="bg-white/80 backdrop-blur-xl shadow-xl shadow-blue-900/5 rounded-2xl border border-gray-100 p-6 sm:p-10 space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150">

        {/* Branch Selection */}
        <div className="space-y-5">
          <div className="flex items-center gap-2">
            <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
              <Layers className="h-5 w-5" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900">1. Select your Branch</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {branches.map(branch => (
              <button
                key={branch.id}
                onClick={() => setSelectedBranch(branch.id)}
                className={`relative overflow-hidden p-4 rounded-xl text-left transition-all duration-200 border-2 ${
                  selectedBranch === branch.id
                    ? 'border-blue-500 shadow-md transform -translate-y-1'
                    : 'border-transparent bg-gray-50 hover:bg-gray-100 hover:border-gray-200'
                }`}
              >
                <div className="flex flex-col gap-1 relative z-10">
                  <span className={`text-lg font-bold ${selectedBranch === branch.id ? 'text-blue-700' : 'text-gray-900'}`}>{branch.id}</span>
                  <span className={`text-xs ${selectedBranch === branch.id ? 'text-blue-500' : 'text-gray-500'}`}>{branch.name}</span>
                </div>
                {selectedBranch === branch.id && (
                  <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${branch.color} opacity-10 rounded-bl-full -mr-8 -mt-8`}></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Semester Selection */}
        <div className={`space-y-5 transition-opacity duration-300 ${!selectedBranch ? 'opacity-50 pointer-events-none' : 'opacity-100'}`}>
          <div className="flex items-center gap-2">
            <div className={`p-2 rounded-lg ${selectedBranch ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-100 text-gray-400'}`}>
              <BookOpen className="h-5 w-5" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900">2. Select your Semester</h2>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {semesters.map(sem => (
              <button
                key={sem}
                onClick={() => setSelectedSem(sem)}
                disabled={!selectedBranch}
                className={`py-3 px-4 rounded-xl text-lg font-semibold transition-all duration-200 border-2 ${
                  selectedSem === sem
                    ? 'bg-indigo-50 border-indigo-500 text-indigo-700 shadow-sm transform -translate-y-1'
                    : 'bg-gray-50 border-transparent text-gray-600 hover:bg-gray-100 hover:border-gray-200'
                }`}
              >
                {sem}
              </button>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            onClick={handleSearch}
            disabled={!selectedBranch || !selectedSem}
            className="group relative w-full flex justify-center items-center gap-2 py-4 px-4 rounded-xl text-lg font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-indigo-500/25"
          >
            <span>Explore Subjects</span>
            <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </div>
  );
}
