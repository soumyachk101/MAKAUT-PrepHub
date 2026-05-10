'use client';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, FileText, Download, Eye, BookOpen, Clock, FileQuestion, Calendar } from 'lucide-react';

interface Material {
  _id: string;
  title: string;
  type: string;
  fileUrl: string;
  createdAt: string;
}

export default function SubjectDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  const [materials, setMaterials] = useState<Material[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    if (id) {
      fetch(`http://localhost:5000/api/materials/${id}`)
        .then(res => res.json())
        .then(data => {
          if (isMounted) {
            setMaterials(data);
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
  }, [id]);

  const getMaterialIcon = (type: string) => {
    switch (type) {
      case 'Notes': return <BookOpen className="h-6 w-6 text-emerald-500" />;
      case 'PYQ': return <FileQuestion className="h-6 w-6 text-purple-500" />;
      case 'Organizer': return <Clock className="h-6 w-6 text-orange-500" />;
      case 'Syllabus': return <FileText className="h-6 w-6 text-blue-500" />;
      default: return <FileText className="h-6 w-6 text-gray-500" />;
    }
  };

  const getBadgeColor = (type: string) => {
    switch (type) {
      case 'Notes': return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'PYQ': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Organizer': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Syllabus': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header section */}
      <div className="flex items-center space-x-4 pb-4 border-b border-gray-200">
        <button
          onClick={() => router.back()}
          className="p-2.5 rounded-full hover:bg-gray-100 transition-colors bg-white shadow-sm border border-gray-200 group"
          aria-label="Go back"
        >
          <ArrowLeft className="h-5 w-5 text-gray-600 group-hover:text-gray-900 group-hover:-translate-x-0.5 transition-transform" />
        </button>
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">Study Materials</h1>
          <p className="text-gray-500 mt-1">Access notes, PYQs, and syllabus</p>
        </div>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-20 text-gray-500">
          <div className="w-10 h-10 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-4"></div>
          <p className="font-medium">Loading materials...</p>
        </div>
      ) : materials.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-gray-300 shadow-sm">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-50 mb-4">
            <FileText className="w-8 h-8 text-gray-300" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-1">No materials yet</h3>
          <p className="text-gray-500 max-w-sm mx-auto">We are working on adding study materials for this subject. Check back soon!</p>
        </div>
      ) : (
        <div className="bg-white shadow-md border border-gray-100 sm:rounded-2xl overflow-hidden">
          <ul className="divide-y divide-gray-100">
            {materials.map((material, idx) => (
              <li key={material._id} className="animate-in fade-in slide-in-from-bottom-2" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="px-4 py-5 sm:px-6 flex flex-col sm:flex-row sm:items-center justify-between hover:bg-slate-50 transition-colors gap-4">
                  <div className="flex items-start flex-1 min-w-0 pr-4">
                    <div className="flex-shrink-0 mr-4 mt-1 bg-white p-2 rounded-lg shadow-sm border border-gray-100">
                      {getMaterialIcon(material.type)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center flex-wrap gap-2 mb-1">
                        <p className="text-base font-semibold text-gray-900 truncate mr-2 hover:text-blue-600 transition-colors cursor-pointer">
                          {material.title}
                        </p>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold border ${getBadgeColor(material.type)}`}>
                          {material.type}
                        </span>
                      </div>
                      <p className="flex items-center text-sm text-gray-500">
                        <Calendar className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                        <span className="truncate">Added on {new Date(material.createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 sm:ml-auto pl-14 sm:pl-0">
                    <a
                      href={material.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                      title="View Document"
                    >
                      <Eye className="h-4 w-4" />
                      <span className="hidden sm:inline">View</span>
                    </a>
                    <a
                      href={material.fileUrl}
                      download
                      className="inline-flex items-center gap-1.5 px-3 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                      title="Download Document"
                    >
                      <Download className="h-4 w-4" />
                      <span className="hidden sm:inline">Download</span>
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
