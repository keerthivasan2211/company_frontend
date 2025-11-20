import { createContext, useContext, useEffect, useState } from "react";

const CompanyContext = createContext();

export const CompanyProvider = ({ children }) => {
  const [companies, setCompanies] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [filters, setFilters] = useState({
    search: "",
    location: "All",
    industry: "All",
  });

 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://company-api-ehre.onrender.com");
        const data = await res.json();

        setCompanies(data);
        setFiltered(data);
      } catch (err) {
        setError("Unable to load company data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  useEffect(() => {
    let temp = [...companies];

    if (filters.search.trim() !== "") {
      temp = temp.filter((c) =>
        c.name.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    if (filters.location !== "All") {
      temp = temp.filter((c) => c.location === filters.location);
    }

    if (filters.industry !== "All") {
      temp = temp.filter((c) => c.industry === filters.industry);
    }

    setFiltered(temp);
  }, [filters, companies]);

  return (
    <CompanyContext.Provider
      value={{ filtered, filters, setFilters, loading, error }}
    >
      {children}
    </CompanyContext.Provider>
  );
};

export const useCompany = () => useContext(CompanyContext);
