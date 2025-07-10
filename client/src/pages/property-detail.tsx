import { useParams, Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft, Star, Users, Bed, Bath, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import Header from "@/components/header";
import Footer from "@/components/footer";
import type { Property } from "@shared/schema";

export default function PropertyDetail() {
  const { id } = useParams<{ id: string }>();
  const propertyId = parseInt(id || "0");

  const { data: property, isLoading, error } = useQuery<Property>({
    queryKey: ["/api/properties", propertyId],
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Skeleton className="h-8 w-32 mb-8" />
          <Skeleton className="h-96 w-full rounded-xl mb-8" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Skeleton className="h-8 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-20 w-full" />
            </div>
            <div>
              <Skeleton className="h-64 w-full rounded-xl" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !property) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Card className="max-w-md mx-auto">
            <CardContent className="pt-6 text-center">
              <h1 className="text-2xl font-bold text-airbnb-dark mb-4">Property not found</h1>
              <p className="text-airbnb-gray mb-6">The property you're looking for doesn't exist or has been removed.</p>
              <Link href="/">
                <Button className="bg-airbnb-red hover:bg-red-600">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/">
          <Button variant="ghost" className="mb-8 hover:bg-airbnb-light">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to properties
          </Button>
        </Link>

        <div className="space-y-8">
          {/* Property Image */}
          <div className="relative overflow-hidden rounded-xl">
            <img
              src={property.imageUrl}
              alt={property.title}
              className="w-full h-96 object-cover"
            />
            <button className="absolute top-4 right-4 p-3 bg-white rounded-full shadow-md hover:bg-airbnb-light transition-colors">
              <Heart className="w-5 h-5 text-airbnb-dark" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Property Details */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-airbnb-dark mb-2">{property.title}</h1>
                <p className="text-airbnb-gray mb-4">{property.location}</p>
                <div className="flex items-center space-x-4 text-sm text-airbnb-gray">
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{property.guests} guests</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Bed className="w-4 h-4" />
                    <span>{property.bedrooms} bedrooms</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Bath className="w-4 h-4" />
                    <span>{property.baths} baths</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-airbnb-red fill-current" />
                <span className="font-semibold">{property.rating}</span>
                <span className="text-airbnb-gray">· {property.propertyType}</span>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-xl font-semibold text-airbnb-dark mb-4">About this place</h3>
                <p className="text-airbnb-gray leading-relaxed">{property.description}</p>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-xl font-semibold text-airbnb-dark mb-4">Amenities</h3>
                <div className="flex flex-wrap gap-2">
                  {property.amenities.map((amenity, index) => (
                    <Badge key={index} variant="secondary" className="bg-airbnb-light text-airbnb-dark">
                      {amenity}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-xl font-semibold text-airbnb-dark mb-4">Host</h3>
                <div className="flex items-center space-x-4">
                  <img
                    src={property.hostImageUrl}
                    alt={property.hostName}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-airbnb-dark">{property.hostName}</p>
                    <p className="text-sm text-airbnb-gray">Host</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Card */}
            <div className="lg:sticky lg:top-8 lg:self-start">
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <span className="text-2xl font-bold text-airbnb-dark">${property.price}</span>
                      <span className="text-airbnb-gray ml-2">night</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-airbnb-red fill-current" />
                      <span className="text-sm font-medium">{property.rating}</span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="border border-gray-300 rounded-lg p-3">
                        <label className="text-xs font-semibold text-airbnb-dark uppercase">Check In</label>
                        <p className="text-sm text-airbnb-gray">Add dates</p>
                      </div>
                      <div className="border border-gray-300 rounded-lg p-3">
                        <label className="text-xs font-semibold text-airbnb-dark uppercase">Check Out</label>
                        <p className="text-sm text-airbnb-gray">Add dates</p>
                      </div>
                    </div>
                    <div className="border border-gray-300 rounded-lg p-3">
                      <label className="text-xs font-semibold text-airbnb-dark uppercase">Guests</label>
                      <p className="text-sm text-airbnb-gray">Add guests</p>
                    </div>
                  </div>

                  <Button className="w-full bg-airbnb-red hover:bg-red-600 text-white font-semibold py-3">
                    Reserve
                  </Button>

                  <p className="text-center text-sm text-airbnb-gray mt-4">
                    You won't be charged yet
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
