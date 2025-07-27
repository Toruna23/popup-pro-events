'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  return (
    <div style={{ position: "relative", zIndex: 100, marginRight: 20 }}>
      <button
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((o) => !o)}
        style={{
          background: 'none',
          border: 'none',
          borderRadius: 8,
          width: 30,
          height: 30,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: 'none',
          cursor: 'pointer',
          padding: 0,
          transition: 'background 0.2s',
        }}
      >
        <div style={{ width: 18, height: 18, position: 'relative' }}>
          {/* Hamburger/X icon */}
          <span
            style={{
              position: 'absolute',
              top: open ? 8 : 2,
              left: 0,
              width: 18,
              height: 3,
              background: '#E4861B',
              borderRadius: 2,
              transition: 'all 0.3s',
              transform: open ? 'rotate(45deg)' : 'none',
            }}
          />
          <span
            style={{
              position: 'absolute',
              top: 8,
              left: 0,
              width: 18,
              height: 3,
              background: '#E4861B',
              borderRadius: 2,
              opacity: open ? 0 : 1,
              transition: 'all 0.3s',
            }}
          />
          <span
            style={{
              position: 'absolute',
              top: open ? 8 : 14,
              left: 0,
              width: 18,
              height: 3,
              background: '#E4861B',
              borderRadius: 2,
              transition: 'all 0.3s',
              transform: open ? 'rotate(-45deg)' : 'none',
            }}
          />
        </div>
      </button>
      {open && (
        <nav
          style={{
            position: "absolute",
            top: 38,
            right: 0,
            background: "#fff",
            border: "1px solid #ececec",
            borderRadius: 12,
            boxShadow: "0 8px 32px rgba(44,62,80,0.10)",
            padding: "1.2rem 2rem",
            minWidth: 180,
            display: "flex",
            flexDirection: "column",
            gap: "1.2rem",
          }}
        >
          {[
            { href: '/', label: 'Home' },
            { href: '/vendors', label: 'Vendors' },
            { href: '/login', label: 'Login' },
            { href: '/signup', label: 'Signup' },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                color: hovered === item.href ? '#fff' : '#23243a',
                fontWeight: 600,
                fontSize: '1.1rem',
                textDecoration: 'none',
                borderRadius: 8,
                background: hovered === item.href ? '#E4861B' : 'transparent',
                padding: '0.5rem 1rem',
                transition: 'background 0.2s, color 0.2s',
                cursor: 'pointer',
                display: 'block',
              }}
              onClick={() => setOpen(false)}
              onMouseEnter={() => setHovered(item.href)}
              onMouseLeave={() => setHovered(null)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </div>
  );
} 