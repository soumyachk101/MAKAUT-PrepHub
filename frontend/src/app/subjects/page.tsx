'use client';
import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

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
  // Start loading as true if branch/sem are present, otherwise false
  const [loading, setLoading] = useState(!!(branch && sem));

  // Reset loading when branch or sem changes.
  // This avoids setting state synchronously in an effect.
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

  if (!branch || !sem) return <div className="p-8 text-center">Missing branch or semester filters.</div>;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Subjects</h1>
        <p className="mt-2 text-gray-600">Showing subjects for {branch} - Semester {sem}</p>
      </div>

      {loading ? (
        <div className="text-center py-12 text-gray-500">Loading subjects...</div>
      ) : subjects.length === 0 ? (
        <div className="text-center py-12 text-gray-500 bg-white rounded-lg border border-dashed border-gray-300">
          No subjects found for this criteria.
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {subjects.map(subject => (
            <Link
              key={subject._id}
              href={`/subjects/${subject._id}`}
              className="group block bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md hover:border-blue-300 transition-all p-6"
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-2">
                    {subject.subjectCode}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 mb-2 line-clamp-2">
                    {subject.name}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-2">
                    {subject.syllabusDetails}
                  </p>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-blue-500 mt-1 flex-shrink-0" />
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
        <Suspense fallback={<div className="text-center py-12 text-gray-500">Loading...</div>}>
            <SubjectsList />
        </Suspense>
    );
}
