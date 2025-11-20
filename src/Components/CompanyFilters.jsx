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
<option value="India">India</option>
<option value="United States">United States</option>
<option value="United Kingdom">United Kingdom</option>
<option value="Canada">Canada</option>
<option value="Australia">Australia</option>
<option value="Germany">Germany</option>
<option value="France">France</option>
<option value="Singapore">Singapore</option>
<option value="Japan">Japan</option>
<option value="China">China</option>
<option value="South Korea">South Korea</option>
<option value="Brazil">Brazil</option>
<option value="Mexico">Mexico</option>
<option value="Spain">Spain</option>
<option value="Italy">Italy</option>
<option value="UAE">UAE</option>
<option value="Saudi Arabia">Saudi Arabia</option>
<option value="South Africa">South Africa</option>
<option value="Netherlands">Netherlands</option>
<option value="Sweden">Sweden</option>
<option value="Norway">Norway</option>
<option value="Denmark">Denmark</option>
<option value="Switzerland">Switzerland</option>
<option value="Ireland">Ireland</option>
<option value="Russia">Russia</option>
<option value="Malaysia">Malaysia</option>
<option value="Indonesia">Indonesia</option>
<option value="New Zealand">New Zealand</option>
<option value="Philippines">Philippines</option>
<option value="Bangladesh">Bangladesh</option>
<option value="Pakistan">Pakistan</option>
<option value="Sri Lanka">Sri Lanka</option>

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
<option value="Information Technology">Information Technology</option>
<option value="Software Development">Software Development</option>
<option value="AI & Machine Learning">AI & Machine Learning</option>
<option value="Cybersecurity">Cybersecurity</option>
<option value="Cloud Computing">Cloud Computing</option>
<option value="Data Analytics">Data Analytics</option>
<option value="E-Commerce">E-Commerce</option>
<option value="Fintech">Fintech</option>
<option value="EdTech">EdTech</option>
<option value="HealthTech">HealthTech</option>
<option value="Telecommunications">Telecommunications</option>
<option value="Digital Marketing">Digital Marketing</option>
<option value="Media & Advertising">Media & Advertising</option>
<option value="BPO & Outsourcing">BPO & Outsourcing</option>
<option value="SaaS Services">SaaS Services</option>
<option value="Consulting">Consulting</option>
<option value="Retail">Retail</option>
<option value="Manufacturing">Manufacturing</option>
<option value="Robotics">Robotics</option>
<option value="Automation">Automation</option>
<option value="Logistics">Logistics</option>
<option value="Green Energy">Green Energy</option>
<option value="IoT">Internet of Things (IoT)</option>
<option value="Blockchain">Blockchain</option>

        </select>
      </div>
    </div>
  );
}
