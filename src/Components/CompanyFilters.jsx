import { useCompany } from "../Context/CompanyContext";
import { Search } from "lucide-react";

export default function CompanyFilters() {
  const { filters, setFilters } = useCompany();

  return (
    <div className="w-full bg-white/95 backdrop-blur-md border border-gray-300 shadow-xl 
                    rounded-2xl p-7 flex flex-wrap gap-8 items-end">

    
      <div className="flex flex-col flex-1 min-w-[260px]">
        <label className="text-sm font-semibold text-gray-700 mb-2">Search Company</label>
        <div className="flex items-center bg-gray-100 rounded-xl px-4 py-3 
                        border border-gray-300 focus-within:ring-2 focus-within:ring-indigo-300 
                        hover:shadow-md transition-all">
          <Search size={20} className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Type company name..."
            value={filters.search}
            onChange={(e) => setFilters((f) => ({ ...f, search: e.target.value }))}
            className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-500"
          />
        </div>
      </div>

      <div className="flex flex-col min-w-[220px]">
        <label className="text-sm font-semibold text-gray-700 mb-2">Location</label>
        <select
          value={filters.location}
          onChange={(e) => setFilters((f) => ({ ...f, location: e.target.value }))}
          className="px-4 py-3 rounded-xl bg-gray-100 border border-gray-300 
                     hover:shadow-md focus:ring-2 focus:ring-indigo-300 outline-none transition-all"
        >
          <option value="All">All Locations</option>
<option value="California">California</option>
<option value="India">India</option>
<option value="Texas">Texas</option>
<option value="Canada">Canada</option>
<option value="Australia">Australia</option>
<option value="New York">New York</option>
<option value="Berlin">Berlin</option>
<option value="Singapore">Singapore</option>
<option value="London">London</option>
<option value="Dubai">Dubai</option>
<option value="Japan">Japan</option>
<option value="Sweden">Sweden</option>
<option value="San Francisco">San Francisco</option>
<option value="Chicago">Chicago</option>
<option value="Amsterdam">Amsterdam</option>
<option value="Israel">Israel</option>
<option value="Boston">Boston</option>
<option value="UK">UK</option>
<option value="Malaysia">Malaysia</option>


        </select>
      </div>

    
      <div className="flex flex-col min-w-[220px]">
        <label className="text-sm font-semibold text-gray-700 mb-2">Industry</label>
        <select
          value={filters.industry}
          onChange={(e) => setFilters((f) => ({ ...f, industry: e.target.value }))}
          className="px-4 py-3 rounded-xl bg-gray-100 border border-gray-300 
                     hover:shadow-md focus:ring-2 focus:ring-indigo-300 outline-none transition-all"
        >
        <option value="All">All Industries</option>
<option value="Technology">Technology</option>
<option value="IT Services">IT Services</option>
<option value="AI & Machine Learning">AI & Machine Learning</option>
<option value="Software Services">Software Services</option>
<option value="Fintech">Fintech</option>
<option value="Cloud Computing">Cloud Computing</option>
<option value="Cybersecurity">Cybersecurity</option>
<option value="Digital Services">Digital Services</option>
<option value="EdTech">EdTech</option>
<option value="Automation">Automation</option>
<option value="Data Analytics">Data Analytics</option>
<option value="Network Solutions">Network Solutions</option>
<option value="Software Consulting">Software Consulting</option>
<option value="Media & Advertising">Media & Advertising</option>
<option value="Hardware Solutions">Hardware Solutions</option>
<option value="Green Energy">Green Energy</option>
<option value="Cloud Services">Cloud Services</option>
<option value="AI Research">AI Research</option>
<option value="E-Commerce">E-Commerce</option>
<option value="Metaverse">Metaverse</option>
<option value="Robotics">Robotics</option>
<option value="SaaS">SaaS</option>
<option value="IoT">IoT</option>
<option value="BPO">BPO</option>
<option value="Retail">Retail</option>
<option value="Tech Services">Tech Services</option>
<option value="Logistics">Logistics</option>

        </select>
      </div>
    </div>
  );
}
