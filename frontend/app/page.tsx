'use client';
import styles from './Home.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const categories = [
  { name: 'Art', img: '/art.jpg' },
  { name: 'Sound', img: '/sound.jpg' },
  { name: 'Catering', img: '/catering.jpg' },
  { name: 'Staff', img: '/staff.jpg' },
  { name: 'Equipment', img: '/equipment.jpg' },
];

const testimonials = [
  {
    text: '“Popup-Pro made booking our wedding band so easy. The talent was top-notch and the process was seamless!”',
    author: '– Thandi, Cape Town',
  },
  {
    text: '“We found the perfect caterer for our corporate event. Highly recommend Popup-Pro!”',
    author: '– Sipho, Johannesburg',
  },
  {
    text: '“The staff and sound team were professional and friendly. Will use again!”',
    author: '– Ayesha, Durban',
  },
  {
    text: '“The magician wowed our guests and kept the kids entertained for hours!”',
    author: '– Lerato, Pretoria',
  },
  {
    text: '“Booking a photographer was so easy and the results were stunning!”',
    author: '– Johan, Stellenbosch',
  },
  {
    text: '“Popup-Pro helped us find the perfect MC for our awards night.”',
    author: '– Zanele, Bloemfontein',
  },
  {
    text: '“The event planning team took care of every detail. Stress-free experience!”',
    author: '– Mpho, Port Elizabeth',
  },
  {
    text: '“We loved the variety of acts available. Our party was a hit!”',
    author: '– Pieter, George',
  },
];

const categoryOptions = [
  {
    name: 'Musical Acts',
    img: '/sound.jpg',
    type: 'Entertainment',
    services: ['Bands', 'Singers', 'DJs', 'Choirs', 'Indigenous Acts'],
  },
  {
    name: 'Entertainers',
    img: '/art.jpg',
    type: 'Entertainment',
    services: ['Magicians', 'Jugglers', 'Dancers', 'Comedians', 'MCs'],
  },
  {
    name: 'Event Services',
    img: '/catering.jpg',
    type: 'Service',
    services: ['Event Planning', 'Catering', 'Photography', 'Logistics', 'Decor'],
  },
];
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const filterTypes = ['All', 'Creative', 'Technical', 'Service'];

export default function Home() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [carouselIdx, setCarouselIdx] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [search, setSearch] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [filter, setFilter] = useState('All');
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        setCarouselIdx((idx) => (idx + 1) % testimonials.length);
      }, 3500);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered]);

  // Only show first 3 categories as cards
  const visibleCategories = categoryOptions.slice(0, 3);
  // The rest are accessible via search/filter
  const filteredCategories = categoryOptions.filter(cat => {
    const matchesType = filter === 'All' || cat.type === filter;
    const matchesSearch = cat.name.toLowerCase().includes(search.toLowerCase());
    return matchesType && matchesSearch;
  });
  // If searching or filtering, show all matches; otherwise, show only the first 3
  const categoriesToShow = search || filter !== 'All' ? filteredCategories : visibleCategories;

  // Get three testimonials in a loop
  const getVisibleTestimonials = () => {
    // For infinite loop effect, add the last testimonial before the first, and the first after the last
    const n = testimonials.length;
    const idxs = [
      (carouselIdx - 1 + n) % n,
      carouselIdx % n,
      (carouselIdx + 1) % n,
    ];
    return idxs.map(i => testimonials[i]);
  };

  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Bring your celebration to life!</h1>
        <p className={styles.heroSubtitle}>
          Book local vendors & entertainers, and find inspiration for every occasion - big or small.
        </p>
        <div className={styles.ctaRow}>
          <Link href="/vendors" className={styles.ctaButtonPrimary}>
            Book Now
          </Link>
          <Link href="/signup" className={styles.ctaButtonSecondary}>
            Join as a Provider
          </Link>
        </div>
      </section>

      {/* Category Sections */}
      <section className={styles.categories}>
        <h2 className={styles.sectionTitle}>Browse by Category</h2>
        <p className={styles.subtitle} style={{ marginTop: '-0.5rem', marginBottom: '1.5rem', fontSize: '1.1rem', color: '#23243a', textAlign: 'center' }}>
          Find vendors & entertainers nationwide that best fit your event and budget
        </p>
        <div className={styles.categoryGrid}>
          {categoriesToShow.map((cat) => (
            <div className={styles.categoryCard} key={cat.name} tabIndex={0}>
              <div className={styles.categoryCardInner}>
                <div className={styles.categoryCardFront}>
                  <Image src={cat.img} alt={cat.name} width={120} height={120} className={styles.categoryImage} />
                  <div className={styles.categoryText}>{cat.name}</div>
                </div>
                <div className={styles.categoryCardBack}>
                  <div className={styles.categoryBackTitle}>{cat.name}</div>
                  <ul className={styles.categoryServices}>
                    {cat.services.map((service: string) => (
                      <li className={styles.categoryService} key={service}>{service}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials / Gallery Section */}
      <section className={styles.testimonials}>
        <h2 className={styles.sectionTitle}>What Our Clients Say</h2>
        <div
          className={styles.testimonialSlider}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ overflow: 'visible', width: '100%', maxWidth: 900, margin: '0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 600, position: 'relative', height: 220 }}>
            {getVisibleTestimonials().map((t, i) => {
              const isCenter = i === 1;
              return (
                <div
                  className={styles.testimonialCard}
                  key={i}
                  style={{
                    flex: isCenter ? '0 0 60%' : '0 0 20%',
                    minWidth: isCenter ? 320 : 120,
                    maxWidth: isCenter ? 360 : 140,
                    margin: isCenter ? '0 1.5rem' : '0 0.2rem',
                    zIndex: isCenter ? 2 : 1,
                    opacity: isCenter ? 1 : 0.7,
                    transform: isCenter ? 'scale(1)' : 'scale(0.7)',
                    filter: isCenter ? 'none' : 'blur(2px)',
                    transition: 'all 0.5s cubic-bezier(.4,1.3,.6,1)',
                    boxShadow: isCenter ? '0 2px 8px rgba(44, 62, 80, 0.10)' : 'none',
                    background: '#fff',
                  }}
                >
                  <p className={styles.testimonialText}>{t.text}</p>
                  <span className={styles.testimonialAuthor}>{t.author}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
