import Home from "./pages/Home.jsx";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 mt-10">
        <Home />
      </main>

      <Footer />
    </div>
  );
}
