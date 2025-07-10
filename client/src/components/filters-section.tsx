import { useState } from "react";
import { Filter, Map } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FiltersSection() {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const toggleFilter = (filter: string) => {
    setActiveFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  const filters = [
    { id: "entire-homes", label: "Entire homes" },
    { id: "private-rooms", label: "Private rooms" },
    { id: "unique-stays", label: "Unique stays" },
  ];

  return (
    <section className="py-8 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-4 items-center justify-between">
          <div className="flex flex-wrap gap-4">
            <Button
              variant="outline"
              className="px-6 py-3 border-gray-300 rounded-full hover:border-airbnb-dark transition-colors"
            >
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant="outline"
                onClick={() => toggleFilter(filter.id)}
                className={`px-6 py-3 border-gray-300 rounded-full hover:border-airbnb-dark transition-colors ${
                  activeFilters.includes(filter.id) 
                    ? "bg-airbnb-red text-white border-airbnb-red hover:bg-red-600" 
                    : ""
                }`}
              >
                {filter.label}
              </Button>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              className="flex items-center space-x-2 px-4 py-2 border-gray-300 rounded-lg hover:bg-airbnb-light transition-colors"
            >
              <Map className="w-4 h-4" />
              <span>Show map</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
