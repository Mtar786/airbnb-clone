import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import type { Destination } from "@shared/schema";

export default function InspirationSection() {
  const { data: destinations, isLoading } = useQuery<Destination[]>({
    queryKey: ["/api/destinations"],
  });

  return (
    <section className="py-16 bg-airbnb-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-airbnb-dark mb-8">Inspiration for your next trip</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {isLoading ? (
            Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="h-48 w-full rounded-xl" />
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            ))
          ) : destinations?.length === 0 ? (
            <div className="col-span-full text-center py-8">
              <p className="text-airbnb-gray">No destinations available</p>
            </div>
          ) : (
            destinations?.map((destination) => (
              <div key={destination.id} className="group cursor-pointer">
                <img
                  src={destination.imageUrl}
                  alt={destination.name}
                  className="w-full h-48 object-cover rounded-xl mb-4 group-hover:opacity-90 transition-opacity"
                />
                <h3 className="font-semibold text-airbnb-dark">{destination.name}</h3>
                <p className="text-airbnb-gray text-sm">{destination.distance}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
