'use client';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, FileText, Download, Eye } from 'lucide-react';

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

  const getMaterialIcon = () => {
    return <FileText className="h-6 w-6 text-blue-500" />;
  };

  const getBadgeColor = (type: string) => {
    switch (type) {
      case 'Notes': return 'bg-green-100 text-green-800';
      case 'PYQ': return 'bg-purple-100 text-purple-800';
      case 'Organizer': return 'bg-orange-100 text-orange-800';
      case 'Syllabus': return 'bg-gray-100 text-gray-800';
      default: return 'bg-blue-100 text-blue-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <button
          onClick={() => router.back()}
          className="p-2 rounded-full hover:bg-gray-200 transition-colors"
          aria-label="Go back"
        >
          <ArrowLeft className="h-5 w-5 text-gray-600" />
        </button>
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Study Materials</h1>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-12 text-gray-500">Loading materials...</div>
      ) : materials.length === 0 ? (
        <div className="text-center py-12 text-gray-500 bg-white rounded-lg border border-dashed border-gray-300">
          No materials available for this subject yet.
        </div>
      ) : (
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {materials.map(material => (
              <li key={material._id}>
                <div className="px-4 py-4 sm:px-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
                  <div className="flex items-center flex-1 min-w-0 pr-4">
                    <div className="flex-shrink-0 mr-4">
                      {getMaterialIcon()}
                    </div>
                    <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                      <div>
                        <p className="text-sm font-medium text-blue-600 truncate">{material.title}</p>
                        <p className="mt-2 flex items-center text-sm text-gray-500">
                          <span className="truncate">Added on {new Date(material.createdAt).toLocaleDateString()}</span>
                        </p>
                      </div>
                      <div className="hidden md:block">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getBadgeColor(material.type)}`}>
                          {material.type}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <a
                      href={material.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center p-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      title="View PDF"
                    >
                      <Eye className="h-4 w-4" />
                    </a>
                    <a
                      href={material.fileUrl}
                      download
                      className="inline-flex items-center p-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      title="Download PDF"
                    >
                      <Download className="h-4 w-4" />
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
