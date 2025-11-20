import { useCompany } from "../Context/CompanyContext";
import CompanyFilters from "../Components/CompanyFilters";
import CompanyTable from "../Components/CompanyTable";
import Loader from "../Components/Loader";
import Error from "../Components/Error";

function Home() {
  const { loading, error } = useCompany();

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#010914] via-[#2f4163] to-[#415A77] flex items-start justify-center py-16 px-6">

      <div className="w-full">

        <div className="mb-5 ">
          <CompanyFilters />
        </div>

        {loading && (
          <div className="flex justify-center py-20">
            <Loader />
          </div>
        )}

    
        {error && (
          <div className="flex justify-center py-20">
            <Error message={error} />
          </div>
        )}

        {!loading && !error && (
          <div className="overflow-x-auto rounded-2xl border border-gray-300 shadow-2xl bg-white">
            <CompanyTable />
          </div>
        )}
      </div>

    </div>
  );
}

export default Home;
