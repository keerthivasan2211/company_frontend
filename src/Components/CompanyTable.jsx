import { useCompany } from "../Context/CompanyContext";
import { Building2, MapPin, Briefcase } from "lucide-react";

export default function CompanyTable() {
  const { filtered } = useCompany();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-6 px-4">
      {filtered.map((company) => (
        <div
          key={company.id}
          className="relative bg-white rounded-xl p-5 shadow-md border border-gray-200 
                     hover:shadow-xl hover:-translate-y-1 transition-all duration-300
                     hover:border-indigo-300 group"
        >
        
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-indigo-500 to-purple-500 rounded-t-xl opacity-80"></div>

         
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-lg font-semibold shadow-inner">
              {company.name.slice(0, 1)}
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-700 transition-all">
                {company.name}
              </h2>
              <p className="text-xs text-gray-500">Registered Company</p>
            </div>
          </div>

     
          <div className="space-y-3 text-gray-700">

            <div className="flex items-center gap-2">
              <MapPin size={17} className="text-blue-600" />
              <span className="font-medium text-gray-800 text-sm">{company.location}</span>
            </div>

            <div className="flex items-center gap-2">
              <Briefcase size={17} className="text-purple-600" />
              <span className="font-medium text-gray-800 text-sm">{company.industry}</span>
            </div>

            <div className="mt-1">
              <span className="bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full text-[10px] font-semibold">
                Active • Verified
              </span>
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-gray-200 flex justify-end">
            <button
              className="text-indigo-600 font-medium hover:text-indigo-800 transition-all text-xs flex items-center gap-1"
            >
              View →
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
