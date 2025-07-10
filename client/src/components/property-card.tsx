import { useState } from "react";
import { Link } from "wouter";
import { Heart, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import type { Property } from "@shared/schema";

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorited(!isFavorited);
  };

  return (
    <Link href={`/property/${property.id}`}>
      <Card className="group cursor-pointer border-none shadow-none hover:shadow-lg transition-shadow duration-300">
        <div className="relative overflow-hidden rounded-xl mb-4">
          <img
            src={property.imageUrl}
            alt={property.title}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <button
            onClick={handleFavoriteClick}
            className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-airbnb-light transition-colors"
          >
            <Heart
              className={`w-5 h-5 ${
                isFavorited 
                  ? "fill-airbnb-red text-airbnb-red" 
                  : "text-airbnb-dark"
              }`}
            />
          </button>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between items-start">
            <h3 className="font-semibold text-airbnb-dark group-hover:text-airbnb-red transition-colors line-clamp-1">
              {property.title}
            </h3>
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-airbnb-red fill-current" />
              <span className="text-sm font-medium">{property.rating}</span>
            </div>
          </div>
          <p className="text-airbnb-gray text-sm">{property.location}</p>
          <p className="text-airbnb-gray text-sm">
            {property.guests} guests • {property.bedrooms} bedroom{property.bedrooms !== 1 ? 's' : ''} • {property.beds} bed{property.beds !== 1 ? 's' : ''} • {property.baths} bath{property.baths !== 1 ? 's' : ''}
          </p>
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-airbnb-dark">${property.price}</span>
            <span className="text-airbnb-gray text-sm">night</span>
          </div>
        </div>
      </Card>
    </Link>
  );
}
