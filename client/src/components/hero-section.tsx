import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function HeroSection() {
  const [searchData, setSearchData] = useState({
    where: "",
    checkIn: "",
    checkOut: "",
    guests: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setSearchData(prev => ({ ...prev, [field]: value }));
  };

  const handleSearch = () => {
    // Mock search functionality
    console.log("Search data:", searchData);
  };

  return (
    <section className="bg-gradient-to-r from-pink-50 to-red-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-airbnb-dark mb-4">
            Not sure where to go? Perfect.
          </h1>
          <p className="text-xl text-airbnb-gray max-w-2xl mx-auto">
            Find unique places to stay, explore amazing destinations, and create unforgettable memories.
          </p>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-full shadow-lg p-2 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
            <div className="p-4 rounded-full hover:bg-airbnb-light transition-colors cursor-pointer">
              <label className="text-xs font-semibold text-airbnb-dark uppercase">Where</label>
              <Input
                type="text"
                placeholder="Search destinations"
                value={searchData.where}
                onChange={(e) => handleInputChange("where", e.target.value)}
                className="w-full border-none outline-none text-airbnb-dark bg-transparent p-0 h-auto focus-visible:ring-0"
              />
            </div>
            <div className="p-4 rounded-full hover:bg-airbnb-light transition-colors cursor-pointer">
              <label className="text-xs font-semibold text-airbnb-dark uppercase">Check In</label>
              <Input
                type="text"
                placeholder="Add dates"
                value={searchData.checkIn}
                onChange={(e) => handleInputChange("checkIn", e.target.value)}
                className="w-full border-none outline-none text-airbnb-dark bg-transparent p-0 h-auto focus-visible:ring-0"
              />
            </div>
            <div className="p-4 rounded-full hover:bg-airbnb-light transition-colors cursor-pointer">
              <label className="text-xs font-semibold text-airbnb-dark uppercase">Check Out</label>
              <Input
                type="text"
                placeholder="Add dates"
                value={searchData.checkOut}
                onChange={(e) => handleInputChange("checkOut", e.target.value)}
                className="w-full border-none outline-none text-airbnb-dark bg-transparent p-0 h-auto focus-visible:ring-0"
              />
            </div>
            <div className="flex items-center justify-between p-4">
              <div className="flex-1">
                <label className="text-xs font-semibold text-airbnb-dark uppercase">Who</label>
                <Input
                  type="text"
                  placeholder="Add guests"
                  value={searchData.guests}
                  onChange={(e) => handleInputChange("guests", e.target.value)}
                  className="w-full border-none outline-none text-airbnb-dark bg-transparent p-0 h-auto focus-visible:ring-0"
                />
              </div>
              <Button
                onClick={handleSearch}
                className="bg-airbnb-red text-white p-4 rounded-full hover:bg-red-600 transition-colors ml-4"
                size="icon"
              >
                <Search className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
