'use client';
import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight, FolderOpen, Loader2 } from 'lucide-react';

interface Subject {
  _id: string;
  subjectCode: string;
  name: string;
  syllabusDetails: string;
}

function SubjectsList() {
  const searchParams = useSearchParams();
  const branch = searchParams.get('branch');
  const sem = searchParams.get('sem');

  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [loading, setLoading] = useState(!!(branch && sem));

  const [prevBranch, setPrevBranch] = useState(branch);
  const [prevSem, setPrevSem] = useState(sem);

  if (branch !== prevBranch || sem !== prevSem) {
    setPrevBranch(branch);
    setPrevSem(sem);
    setLoading(!!(branch && sem));
  }

  useEffect(() => {
    let isMounted = true;
    if (branch && sem) {
      fetch(`http://localhost:5000/api/subjects?branch=${branch}&sem=${sem}`)
        .then(res => res.json())
        .then(data => {
          if (isMounted) {
            setSubjects(data);
            setLoading(false);
          }
        })
        .catch(err => {
          console.error(err);
          if (isMounted) {
            setLoading(false);
          }
        });
    }
    return () => {
      isMounted = false;
    };
  }, [branch, sem]);

  if (!branch || !sem) return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="bg-yellow-50 text-yellow-800 p-4 rounded-lg border border-yellow-200">
        Please select a branch and semester from the home page.
      </div>
      <Link href="/" className="mt-4 text-blue-600 hover:underline flex items-center gap-1">
        Go back home
      </Link>
    </div>
  );

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
          <FolderOpen className="w-64 h-64" />
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-2 text-blue-100 mb-2 font-medium">
            <span>{branch}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-300"></span>
            <span>Semester {sem}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Available Subjects</h1>
          <p className="mt-2 text-blue-100 max-w-xl">
            Select a subject below to access notes, previous year questions, and complete syllabus.
          </p>
        </div>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-20 text-gray-500">
          <Loader2 className="w-8 h-8 animate-spin text-blue-500 mb-4" />
          <p className="font-medium">Loading subjects...</p>
        </div>
      ) : subjects.length === 0 ? (
        <div className="text-center py-16 px-4 bg-white rounded-2xl border border-dashed border-gray-300 shadow-sm">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
            <FolderOpen className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-1">No subjects found</h3>
          <p className="text-gray-500">We don&apos;t have any subjects listed for this branch and semester yet.</p>
          <Link href="/" className="mt-6 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
            Try another selection
          </Link>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {subjects.map((subject, idx) => (
            <Link
              key={subject._id}
              href={`/subjects/${subject._id}`}
              className="group block bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              <div className="h-2 bg-gradient-to-r from-blue-400 to-indigo-500 w-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold bg-blue-50 text-blue-700 border border-blue-100 mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      {subject.subjectCode}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 mb-2 line-clamp-2 leading-tight">
                      {subject.name}
                    </h3>
                    <p className="text-sm text-gray-500 line-clamp-2 mt-2">
                      {subject.syllabusDetails}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-2 rounded-full group-hover:bg-blue-50 transition-colors ml-4 flex-shrink-0">
                    <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function SubjectsPage() {
    return (
        <Suspense fallback={
          <div className="flex flex-col items-center justify-center py-20 text-gray-500">
            <Loader2 className="w-8 h-8 animate-spin text-blue-500 mb-4" />
            <p className="font-medium">Loading...</p>
          </div>
        }>
            <SubjectsList />
        </Suspense>
    );
}
