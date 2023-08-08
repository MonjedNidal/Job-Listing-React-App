import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./css/App.css";
import { useState, useEffect, createContext } from "react";
import Header from "./components/Header";
import Jobs from "./components/Jobs";
import FiltersSection from "./components/FiltersSection";
import Footer from "./components/Footer";
import Data from "./data.json";

export const FiltersContext = createContext(null);

function App() {
  const [filtersArray, setFiltersArray] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState(Data.jobs);

  const handleFilterAdded = (filterName) => {
    console.log(filtersArray);
    if (!filtersArray.includes(filterName)) {
      let tempArray = filtersArray;
      tempArray.push(filterName);
      setFiltersArray(tempArray);
      handleFiltersChanged();
    }
  };
  const handleFiltersChanged = () => {
    if (filtersArray[0]) {
      for (let i = 0; i < filtersArray.length; i++) {
        const filter = filtersArray[i];
        const updatedJobsArray = filteredJobs.filter(
          (job) =>
            job.role === filter ||
            job.level === filter ||
            job.languages.includes(filter)
        );
        console.log("updatedJobsArray : ", updatedJobsArray);
        setFilteredJobs(updatedJobsArray);
      }
    }
  };

  const handleClearFilters = () => {
    setFiltersArray([]);
  };

  const handleFilterRemoved = (filterName) => {
    const updatedFilterArray = filtersArray.filter(
      (filter) => filter !== filterName
    );
    setFiltersArray(updatedFilterArray);
    if (updatedFilterArray.length > 0) {
      for (let i = 0; i < updatedFilterArray.length; i++) {
        const filter = updatedFilterArray[i];
        const updatedJobsArray = Data.jobs.filter(
          (job) =>
            job.role === filter ||
            job.level === filter ||
            job.languages.includes(filter)
        );
        console.log("filtersArray : ", updatedFilterArray);
        console.log("updatedJobsArray : ", updatedJobsArray);
        setFilteredJobs(updatedJobsArray);
      }
    }
  };
  useEffect(() => {
    if (filtersArray.length === 0) {
      setFilteredJobs(Data.jobs);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filtersArray]);

  return (
    <div className="App d-flex flex-column align-items-center position-relative">
      <Header />
      <FiltersContext.Provider
        value={{ handleFilterAdded, handleFilterRemoved }}
      >
        {filtersArray[0] && (
          <FiltersSection
            filtersArray={filtersArray}
            handleClearFilters={handleClearFilters}
          />
        )}
        <Jobs filteredJobs={filteredJobs} setFiltersArray={setFiltersArray} />
      </FiltersContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
