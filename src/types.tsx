export interface ContactInfo {
    email: string;
    phone: string;
  }

export interface Location {
    country: string;
    city: string;
    address: string;
}

export interface UserProfile {
    userName: string;
    protoUrl: string | null;
    userDescription: string;
    openForWork: boolean
    contactInfo: ContactInfo;
    location: Location;
    interests: string[];
}