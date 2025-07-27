// Mock data
const mockVendors = [
  { id: '1', name: 'DJ Spark', category: 'DJ', location: 'Cape Town', city: 'Cape Town', type: 'Performer', experience: '10+ years', availability: 'Available' },
  { id: '2', name: 'The Party Band', category: 'Band', location: 'Durban', city: 'Durban', type: 'Group', experience: '5+ years', availability: 'Available' },
  { id: '3', name: 'Magic Mike', category: 'Magician', location: 'Johannesburg', city: 'Johannesburg', type: 'Performer', experience: '8+ years', availability: 'Booked' },
  { id: '4', name: 'Chef Lindi', category: 'Catering', location: 'Pretoria', city: 'Pretoria', type: 'Performer', experience: '12+ years', availability: 'Available' },
  { id: '5', name: 'Stage Masters', category: 'Equipment', location: 'Cape Town', city: 'Cape Town', type: 'Group', experience: '15+ years', availability: 'Available' },
  { id: '6', name: 'Sax Queen', category: 'Musician', location: 'Port Elizabeth', city: 'Port Elizabeth', type: 'Performer', experience: '7+ years', availability: 'Booked' },
  { id: '7', name: 'Event Angels', category: 'Staff', location: 'Bloemfontein', city: 'Bloemfontein', type: 'Group', experience: '6+ years', availability: 'Available' },
  { id: '8', name: 'MC Lebo', category: 'MC', location: 'Johannesburg', city: 'Johannesburg', type: 'Performer', experience: '9+ years', availability: 'Available' },
  { id: '9', name: 'Dazzle Dancers', category: 'Dancers', location: 'Durban', city: 'Durban', type: 'Group', experience: '4+ years', availability: 'Booked' },
  { id: '10', name: 'PhotoPro', category: 'Photographer', location: 'Cape Town', city: 'Cape Town', type: 'Performer', experience: '11+ years', availability: 'Available' },
  { id: '11', name: 'SoundWorx', category: 'Sound', location: 'Pretoria', city: 'Pretoria', type: 'Group', experience: '13+ years', availability: 'Available' },
  { id: '12', name: 'Barista Bros', category: 'Catering', location: 'Johannesburg', city: 'Johannesburg', type: 'Group', experience: '3+ years', availability: 'Booked' },
  { id: '13', name: 'Lighting Legends', category: 'Equipment', location: 'Durban', city: 'Durban', type: 'Group', experience: '10+ years', availability: 'Available' },
];

type VendorDetail = {
  id: string;
  name: string;
  category: string;
  location: string;
  city: string;
  description: string;
  image: string;
  type: string;
  experience: string;
  availability: string;
};

const mockVendorDetails: { [key: string]: VendorDetail } = {
  '1': {
    id: '1',
    name: 'DJ Spark',
    category: 'DJ',
    location: 'Cape Town',
    city: 'Cape Town',
    description: 'Professional DJ with 10+ years of experience. Available for weddings, parties, and corporate events.',
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    type: 'Performer',
    experience: '10+ years',
    availability: 'Available',
  },
  '2': {
    id: '2',
    name: 'The Party Band',
    category: 'Band',
    location: 'Durban',
    city: 'Durban',
    description: 'Energetic party band for all occasions. Live music, covers, and more.',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80',
    type: 'Group',
    experience: '5+ years',
    availability: 'Available',
  },
  '3': {
    id: '3',
    name: 'Magic Mike',
    category: 'Magician',
    location: 'Johannesburg',
    city: 'Johannesburg',
    description: 'Award-winning magician for kids and adults. Make your event magical!',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    type: 'Performer',
    experience: '8+ years',
    availability: 'Booked',
  },
  '4': {
    id: '4',
    name: 'Chef Lindi',
    category: 'Catering',
    location: 'Pretoria',
    city: 'Pretoria',
    description: 'Award-winning chef for private and corporate events.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
    type: 'Performer',
    experience: '12+ years',
    availability: 'Available',
  },
  '5': {
    id: '5',
    name: 'Stage Masters',
    category: 'Equipment',
    location: 'Cape Town',
    city: 'Cape Town',
    description: 'Experts in stage setup and event equipment.',
    image: 'https://images.unsplash.com/photo-1515168833906-d2a3b82b302b?auto=format&fit=crop&w=400&q=80',
    type: 'Group',
    experience: '15+ years',
    availability: 'Available',
  },
  '6': {
    id: '6',
    name: 'Sax Queen',
    category: 'Musician',
    location: 'Port Elizabeth',
    city: 'Port Elizabeth',
    description: 'Talented saxophonist for all occasions.',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
    type: 'Performer',
    experience: '7+ years',
    availability: 'Booked',
  },
  '7': {
    id: '7',
    name: 'Event Angels',
    category: 'Staff',
    location: 'Bloemfontein',
    city: 'Bloemfontein',
    description: 'Professional event staffing solutions.',
    image: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=400&q=80',
    type: 'Group',
    experience: '6+ years',
    availability: 'Available',
  },
  '8': {
    id: '8',
    name: 'MC Lebo',
    category: 'MC',
    location: 'Johannesburg',
    city: 'Johannesburg',
    description: 'Experienced MC and event host.',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    type: 'Performer',
    experience: '9+ years',
    availability: 'Available',
  },
  '9': {
    id: '9',
    name: 'Dazzle Dancers',
    category: 'Dancers',
    location: 'Durban',
    city: 'Durban',
    description: 'Professional dance group for events.',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    type: 'Group',
    experience: '4+ years',
    availability: 'Booked',
  },
  '10': {
    id: '10',
    name: 'PhotoPro',
    category: 'Photographer',
    location: 'Cape Town',
    city: 'Cape Town',
    description: 'Expert event photographer.',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80',
    type: 'Performer',
    experience: '11+ years',
    availability: 'Available',
  },
  '11': {
    id: '11',
    name: 'SoundWorx',
    category: 'Sound',
    location: 'Pretoria',
    city: 'Pretoria',
    description: 'Sound engineering and event audio.',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80',
    type: 'Group',
    experience: '13+ years',
    availability: 'Available',
  },
  '12': {
    id: '12',
    name: 'Barista Bros',
    category: 'Catering',
    location: 'Johannesburg',
    city: 'Johannesburg',
    description: 'Coffee catering for events.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
    type: 'Group',
    experience: '3+ years',
    availability: 'Booked',
  },
  '13': {
    id: '13',
    name: 'Lighting Legends',
    category: 'Equipment',
    location: 'Durban',
    city: 'Durban',
    description: 'Lighting and event effects specialists.',
    image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b41?auto=format&fit=crop&w=400&q=80',
    type: 'Group',
    experience: '10+ years',
    availability: 'Available',
  },
};

export async function fetchVendors() {
  return new Promise(resolve => setTimeout(() => resolve(mockVendors), 500));
}

export async function fetchVendorById(id: string) {
  return new Promise(resolve => setTimeout(() => resolve(mockVendorDetails[id]), 500));
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
export async function submitBooking(data: any) {
  return new Promise(resolve => setTimeout(() => resolve({ success: true }), 700));
} 