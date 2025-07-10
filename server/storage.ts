import { properties, destinations, type Property, type InsertProperty, type Destination, type InsertDestination } from "@shared/schema";

export interface IStorage {
  // Properties
  getProperties(): Promise<Property[]>;
  getProperty(id: number): Promise<Property | undefined>;
  createProperty(property: InsertProperty): Promise<Property>;
  
  // Destinations
  getDestinations(): Promise<Destination[]>;
  getDestination(id: number): Promise<Destination | undefined>;
  createDestination(destination: InsertDestination): Promise<Destination>;
}

export class MemStorage implements IStorage {
  private properties: Map<number, Property>;
  private destinations: Map<number, Destination>;
  private currentPropertyId: number;
  private currentDestinationId: number;

  constructor() {
    this.properties = new Map();
    this.destinations = new Map();
    this.currentPropertyId = 1;
    this.currentDestinationId = 1;
    this.initializeMockData();
  }

  private initializeMockData() {
    // Initialize properties
    const mockProperties: Omit<Property, 'id'>[] = [
      {
        title: "Modern Downtown Apartment",
        description: "A beautiful modern apartment in the heart of the city with stunning views and all amenities.",
        location: "San Francisco, CA",
        price: "120.00",
        rating: "4.9",
        imageUrl: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        guests: 2,
        bedrooms: 1,
        beds: 1,
        baths: 1,
        propertyType: "Apartment",
        amenities: ["WiFi", "Kitchen", "Air conditioning", "Heating"],
        hostName: "Sarah",
        hostImageUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b865?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
        isAvailable: true,
        createdAt: new Date(),
      },
      {
        title: "Cozy Mountain Cabin",
        description: "Escape to this charming cabin nestled in the mountains, perfect for a peaceful retreat.",
        location: "Lake Tahoe, CA",
        price: "85.00",
        rating: "4.8",
        imageUrl: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        guests: 4,
        bedrooms: 2,
        beds: 2,
        baths: 1,
        propertyType: "Cabin",
        amenities: ["WiFi", "Kitchen", "Fireplace", "Hot tub"],
        hostName: "Michael",
        hostImageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
        isAvailable: true,
        createdAt: new Date(),
      },
      {
        title: "Beachfront Villa",
        description: "Luxury beachfront villa with private beach access and breathtaking ocean views.",
        location: "Malibu, CA",
        price: "350.00",
        rating: "5.0",
        imageUrl: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        guests: 8,
        bedrooms: 4,
        beds: 4,
        baths: 3,
        propertyType: "Villa",
        amenities: ["WiFi", "Kitchen", "Pool", "Beach access", "Air conditioning"],
        hostName: "Emma",
        hostImageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
        isAvailable: true,
        createdAt: new Date(),
      },
      {
        title: "Industrial Loft",
        description: "Stylish industrial loft with exposed brick walls and modern amenities in trendy Brooklyn.",
        location: "Brooklyn, NY",
        price: "95.00",
        rating: "4.7",
        imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        guests: 3,
        bedrooms: 1,
        beds: 1,
        baths: 1,
        propertyType: "Loft",
        amenities: ["WiFi", "Kitchen", "Air conditioning", "Heating", "Workspace"],
        hostName: "David",
        hostImageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
        isAvailable: true,
        createdAt: new Date(),
      },
      {
        title: "Countryside Cottage",
        description: "Charming countryside cottage surrounded by vineyards and rolling hills.",
        location: "Napa Valley, CA",
        price: "150.00",
        rating: "4.9",
        imageUrl: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        guests: 6,
        bedrooms: 3,
        beds: 3,
        baths: 2,
        propertyType: "Cottage",
        amenities: ["WiFi", "Kitchen", "Garden", "Fireplace", "Wine cellar"],
        hostName: "Lisa",
        hostImageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
        isAvailable: true,
        createdAt: new Date(),
      },
      {
        title: "Luxury Penthouse",
        description: "Spectacular penthouse with panoramic city views and premium amenities.",
        location: "Manhattan, NY",
        price: "500.00",
        rating: "4.8",
        imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        guests: 6,
        bedrooms: 3,
        beds: 3,
        baths: 2,
        propertyType: "Penthouse",
        amenities: ["WiFi", "Kitchen", "Gym", "Rooftop terrace", "Concierge"],
        hostName: "James",
        hostImageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
        isAvailable: true,
        createdAt: new Date(),
      },
      {
        title: "Rustic Farmhouse",
        description: "Spacious farmhouse with authentic rustic charm and modern comforts.",
        location: "Austin, TX",
        price: "200.00",
        rating: "4.6",
        imageUrl: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        guests: 10,
        bedrooms: 5,
        beds: 5,
        baths: 3,
        propertyType: "Farmhouse",
        amenities: ["WiFi", "Kitchen", "Fireplace", "BBQ area", "Farm animals"],
        hostName: "Maria",
        hostImageUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
        isAvailable: true,
        createdAt: new Date(),
      },
      {
        title: "Tropical Bungalow",
        description: "Paradise awaits in this tropical bungalow with private beach access.",
        location: "Maui, HI",
        price: "225.00",
        rating: "4.9",
        imageUrl: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        guests: 4,
        bedrooms: 2,
        beds: 2,
        baths: 2,
        propertyType: "Bungalow",
        amenities: ["WiFi", "Kitchen", "Beach access", "Snorkeling gear", "Outdoor shower"],
        hostName: "Alex",
        hostImageUrl: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
        isAvailable: true,
        createdAt: new Date(),
      },
    ];

    mockProperties.forEach(property => {
      const id = this.currentPropertyId++;
      this.properties.set(id, { ...property, id });
    });

    // Initialize destinations
    const mockDestinations: Omit<Destination, 'id'>[] = [
      {
        name: "Paris",
        imageUrl: "https://images.unsplash.com/photo-1502602898536-47ad22581b52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        description: "The City of Light awaits with its iconic landmarks and romantic atmosphere.",
        distance: "4 hour drive",
      },
      {
        name: "Tokyo",
        imageUrl: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        description: "Experience the perfect blend of traditional culture and modern innovation.",
        distance: "11 hour flight",
      },
      {
        name: "New York",
        imageUrl: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        description: "The city that never sleeps offers endless adventures and iconic sights.",
        distance: "5 hour flight",
      },
      {
        name: "London",
        imageUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        description: "Discover royal history, world-class museums, and charming neighborhoods.",
        distance: "8 hour flight",
      },
    ];

    mockDestinations.forEach(destination => {
      const id = this.currentDestinationId++;
      this.destinations.set(id, { ...destination, id });
    });
  }

  async getProperties(): Promise<Property[]> {
    return Array.from(this.properties.values());
  }

  async getProperty(id: number): Promise<Property | undefined> {
    return this.properties.get(id);
  }

  async createProperty(insertProperty: InsertProperty): Promise<Property> {
    const id = this.currentPropertyId++;
    const property: Property = { ...insertProperty, id, createdAt: new Date() };
    this.properties.set(id, property);
    return property;
  }

  async getDestinations(): Promise<Destination[]> {
    return Array.from(this.destinations.values());
  }

  async getDestination(id: number): Promise<Destination | undefined> {
    return this.destinations.get(id);
  }

  async createDestination(insertDestination: InsertDestination): Promise<Destination> {
    const id = this.currentDestinationId++;
    const destination: Destination = { ...insertDestination, id };
    this.destinations.set(id, destination);
    return destination;
  }
}

export const storage = new MemStorage();
