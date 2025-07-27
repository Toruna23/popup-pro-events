"use client";
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { fetchVendorById } from '../../../lib/api';
import Image from 'next/image';
import styles from './VendorProfile.module.css';
import Link from 'next/link';

interface VendorDetail {
  id: string;
  name: string;
  category: string;
  location: string;
  description: string;
  image: string;
}

export default function VendorProfilePage() {
  const params = useParams();
  const id = Array.isArray(params?.id) ? params.id[0] : params?.id;
  const [vendor, setVendor] = useState<VendorDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchVendorById(id as string).then((data: unknown) => {
        setVendor(data as VendorDetail);
        setLoading(false);
      });
    }
  }, [id]);

  if (loading) {
    return <main className={styles.main}><div>Loading vendor...</div></main>;
  }
  if (!vendor) {
    return <main className={styles.main}><div>Vendor not found.</div></main>;
  }

  return (
    <main className={styles.main}>
      <div className={styles.card}>
        <Image
          src={vendor.image || '/globe.svg'}
          alt={vendor.name}
          width={200}
          height={200}
          className={styles.image}
        />
        <h2 className={styles.title}>{vendor.name}</h2>
        <div className={styles.category}>{vendor.category}</div>
        <div className={styles.location}>{vendor.location}</div>
        <p className={styles.description}>{vendor.description}</p>
        <Link href={`/vendors/${vendor.id}/book`} className={styles.button}>
          Request Booking
        </Link>
      </div>
    </main>
  );
} 