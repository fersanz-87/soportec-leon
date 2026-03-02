export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface Brand {
  id: string;
  name: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string | null;
  equipment: string;
  text: string;
  rating: number;
}

export interface ContactFormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  equipmentType: string;
  brand: string;
  model: string;
  serviceType: string;
  message: string;
}

export interface DifferentiatorItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  address: string;
  phone: string;
  whatsapp: string;
  email: string;
  workshopHours: string;
  homeServiceHours: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  socialMedia: {
    facebook: string;
    whatsapp: string;
    instagram: string;
  };
}
