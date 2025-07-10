import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import FiltersSection from "@/components/filters-section";
import PropertyCard from "@/components/property-card";
import InspirationSection from "@/components/inspiration-section";
import Footer from "@/components/footer";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import type { Property } from "@shared/schema";

export default function Home() {
  const { data: properties, isLoading } = useQuery<Property[]>({
    queryKey: ["/api/properties"],
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FiltersSection />
      
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {isLoading ? (
              // Loading skeleton
              Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="space-y-4">
                  <Skeleton className="h-64 w-full rounded-xl" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                    <Skeleton className="h-4 w-1/4" />
                  </div>
                </div>
              ))
            ) : properties?.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <p className="text-airbnb-gray text-lg">No properties found</p>
              </div>
            ) : (
              properties?.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))
            )}
          </div>
          
          {properties && properties.length > 0 && (
            <div className="text-center mt-12">
              <button className="bg-airbnb-red text-white px-8 py-3 rounded-lg hover:bg-red-600 transition-colors font-semibold">
                Show more places
              </button>
            </div>
          )}
        </div>
      </section>
      
      <InspirationSection />
      <Footer />
    </div>
  );
}
