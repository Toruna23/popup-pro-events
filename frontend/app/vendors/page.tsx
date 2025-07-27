"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { fetchVendors } from '../../lib/api';
import styles from './Vendors.module.css';

interface Vendor {
  id: string;
  name: string;
  category: string;
  location: string;
  city: string;
  type?: string;
  experience?: string;
  availability?: string;
}

const filterFields = [
  { label: 'Category', value: 'category' },
  { label: 'City', value: 'city' },
  { label: 'Type', value: 'type' },
  { label: 'Experience', value: 'experience' },
  { label: 'Availability', value: 'availability' },
];

const filterOptions: { [key: string]: string[] } = {
  category: ['All', 'DJ', 'Band', 'Magician', 'Catering', 'Equipment', 'Musician', 'Staff', 'MC', 'Dancers', 'Photographer', 'Sound'],
  city: ['All', 'Cape Town', 'Durban', 'Johannesburg', 'Pretoria', 'Port Elizabeth', 'Bloemfontein'],
  type: ['All', 'Performer', 'Group'],
  experience: ['All', '3+ years', '4+ years', '5+ years', '6+ years', '7+ years', '8+ years', '9+ years', '10+ years', '11+ years', '12+ years', '13+ years', '15+ years'],
  availability: ['All', 'Available', 'Booked'],
};

export default function VendorsPage() {
  const [vendors, setVendors] = useState<Vendor[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterOpen, setFilterOpen] = useState(false);
  const [filterField, setFilterField] = useState('category');
  const [selectedOption, setSelectedOption] = useState('All');
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchVendors().then((data: unknown) => {
      setVendors(data as Vendor[]);
      setLoading(false);
    });
  }, []);

  const filteredVendors = vendors.filter((vendor) => {
    const matchesField = selectedOption === 'All' || (vendor[filterField as keyof Vendor] || '').toString() === selectedOption;
    const matchesSearch = vendor.name.toLowerCase().includes(search.toLowerCase());
    return matchesField && matchesSearch;
  });

  return (
    <main className={styles.main}>
      <h2 className={styles.title}>Browse Vendors</h2>
      <div className={styles.filterBar}>
        <select
          className={styles.filterFieldSelect}
          value={filterField}
          onChange={e => {
            setFilterField(e.target.value);
            setSelectedOption('All');
          }}
        >
          {filterFields.map(f => (
            <option key={f.value} value={f.value}>{f.label}</option>
          ))}
        </select>
        <button
          className={styles.filterButton}
          onClick={() => setFilterOpen((open) => !open)}
          type="button"
        >
          Filter
        </button>
        <div className={filterOpen ? `${styles.filterDropdown} open` : styles.filterDropdown}>
          {filterOptions[filterField].map((opt) => (
            <div
              key={opt}
              className={styles.filterOption}
              onClick={() => {
                setSelectedOption(opt);
                setFilterOpen(false);
              }}
              style={{ fontWeight: selectedOption === opt ? 700 : 400 }}
            >
              {opt}
            </div>
          ))}
        </div>
        <input
          className={styles.searchBar}
          type="text"
          placeholder="Search vendors..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      {loading ? (
        <div>Loading vendors...</div>
      ) : (
        <ul className={styles.list}>
          {filteredVendors.map((vendor) => (
            <li key={vendor.id} className={styles.vendor}>
              <Link href={`/vendors/${vendor.id}`} className={styles.name}>
                {vendor.name}
              </Link>
              <div className={styles.category}>{vendor.category}</div>
              <div className={styles.location}>{vendor.location}</div>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
} 