export default function Footer() {
  return (
    <footer className="w-full bg-white/90 backdrop-blur-md border-t border-gray-300 shadow-inner ">
      <div className="max-w-7xl mx-auto text-center py-5 px-4">
        <p className="text-gray-600 text-sm tracking-wide">
          © {new Date().getFullYear()} Frontlines Media — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
