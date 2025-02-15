'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`block px-4 py-2 rounded-md transition-colors ${
        isActive
          ? 'bg-primary text-white'
          : 'text-text-secondary hover:bg-accent/20'
      }`}
    >
      {children}
    </Link>
  );
}