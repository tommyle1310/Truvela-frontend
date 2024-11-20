// Type for the Location
export type LocationType = {
    id: string;
    name: string;
    description: string;
};

// Type for Mapping Services to Locations
export type ServiceLocation = {
    id: string; // Unique identifier for the service-location mapping
    serviceName: string;
    allowedLocations: LocationType[];
};

// Example Data
export const locationTypes: LocationType[] = [
    { id: "location_1", name: "Massage Bed", description: "Standard massage table suitable for full-body treatments." },
    { id: "location_2", name: "Massage Chair", description: "Seated massage for quick relaxation or corporate settings." },
    { id: "location_3", name: "Floor (Tatami or Mats)", description: "For Thai or stretching-based therapies." },
    { id: "location_4", name: "Hydrotherapy Equipment", description: "For water-based therapies like underwater jet massages." },
    { id: "location_5", name: "Specialized Cushions or Bolsters", description: "Ideal for pregnancy massages or clients with mobility limitations." },
    { id: "location_6", name: "Room with Aromatherapy Setup", description: "Enhanced ambiance with scent diffusers for aromatherapy." },
    { id: "location_7", name: "Outdoor Area", description: "Relaxation massages in open-air environments like gardens or poolside." },
    { id: "location_8", name: "Sauna or Steam Room", description: "Pre-massage relaxation or thermal massages." },
    { id: "location_9", name: "Private Treatment Room", description: "High-privacy settings for exclusive treatments." },
    { id: "location_10", name: "Couples Room", description: "Double setup for couple or group therapy massages." },
    { id: "location_11", name: "Rehabilitation Room", description: "Ideal for therapeutic wellness and physical therapy." },
    { id: "location_12", name: "Spa Pod", description: "Compact capsules for tech-enhanced treatments." },
    { id: "location_13", name: "Dry Floating Bed", description: "Weightless therapies and lymphatic drainage sessions." },
    { id: "location_14", name: "Beachside Setup", description: "Relaxation-focused massages in outdoor settings." },
    { id: "location_15", name: "Hot Stone Setup", description: "Specialized area for hot stone massages." },
    { id: "location_16", name: "Foot Spa Chair", description: "Hand and foot care or reflexology treatments." },
];

// Mapping Services to Locations
export const serviceLocations: ServiceLocation[] = [
    {
        id: "mapping_1",
        serviceName: "Rooted Massage",
        allowedLocations: [locationTypes[1], locationTypes[6]], // Massage Chair, Outdoor Area
    },
    {
        id: "mapping_2",
        serviceName: "Healer Massage",
        allowedLocations: [locationTypes[0], locationTypes[8]], // Massage Bed, Private Treatment Room
    },
    {
        id: "mapping_3",
        serviceName: "Thai Massage",
        allowedLocations: [locationTypes[2]], // Floor (Tatami or Mats)
    },
    {
        id: "mapping_4",
        serviceName: "Aromatherapy Massage",
        allowedLocations: [locationTypes[5], locationTypes[8]], // Aromatherapy Setup, Private Treatment Room
    },
];
