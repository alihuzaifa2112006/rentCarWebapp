'use client';

import { useState, useCallback } from "react";
import Navbar from "../components/Navbar";
import Home from "./components/Home";
import Cars from "./components/Cars.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Footer from "../components/Footer";

export default function AppHome() {
  const [filters, setFilters] = useState({
    search: '',
    seats: [],
    maxPrice: 50000 // Match Sidebar default for PKR
  });

  const handleFilterChange = useCallback((newFilters) => {
    setFilters(newFilters);
  }, []);

  return (
    <div className="mainContainer min-h-screen bg-white">
      <Navbar />
      <div className="bg-gray-50">
        <Home />

        {/* Container for Sidebar and Cars */}
        <div className="max-w-[1440px] mt-12 mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="sideWithHome flex flex-col lg:flex-row gap-8 lg:gap-12 mb-20">
            <Sidebar onFilterChange={handleFilterChange} />
            <div className="flex-1">
              <Cars filters={filters} />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
