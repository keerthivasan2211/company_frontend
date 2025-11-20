import { Menu, Building2, UserCircle } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full bg-white/90 backdrop-blur-md border-b border-gray-300 shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">

     
        <div className="flex items-center gap-3">
          <Building2 size={28} className="text-indigo-600" />
          <h1 className="text-xl font-bold text-gray-800 tracking-wide">
            Frontlines Dashboard
          </h1>
        </div>


        <div className="flex items-center gap-6">
          <Menu size={24} className="text-gray-700 cursor-pointer hover:text-indigo-600 transition" />
          <UserCircle size={28} className="text-gray-700 cursor-pointer hover:text-indigo-600 transition" />
        </div>
      </div>
    </header>
  );
}
