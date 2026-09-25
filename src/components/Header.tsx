"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  
  return (
    <header className="absolute w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center drop-shadow-md">
          <Image 
            src="/logo.png" 
            alt="Seres Salud Cursos" 
            width={360} 
            height={110} 
            className="object-contain"
            priority
          />
        </Link>
        
        {/* Nav Links */}
        <nav className="hidden md:flex justify-between items-center drop-shadow-md text-white w-full max-w-lg">
          <Link href="/" className="text-base font-semibold tracking-widest hover:text-[#fc0000] transition-colors uppercase">Inicio</Link>
          <div className="group relative">
            <Link href="/cursos" className="flex items-center gap-1 text-base font-semibold tracking-widest hover:text-[#fc0000] transition-colors uppercase py-2">
              Cursos 
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </Link>
            {/* Dropdown Menu */}
            <div className="absolute top-full left-0 w-[280px] bg-white shadow-xl rounded-b-lg overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 translate-y-2 group-hover:translate-y-0">
              <div className="flex flex-col py-2">
                <Link href="/cursos/rcp-y-dea" className="px-5 py-4 text-base font-semibold text-gray-800 hover:bg-gray-50 hover:text-[#fc0000] transition-colors border-b border-gray-100">
                  Cursos (RCP y DEA)
                </Link>
                <Link href="/cursos/primeros-auxilios" className="px-5 py-4 text-base font-semibold text-gray-800 hover:bg-gray-50 hover:text-[#fc0000] transition-colors border-b border-gray-100">
                  Cursos Primeros Auxilios
                </Link>
                <Link href="/cursos/rcp-dea-primeros-auxilios" className="px-5 py-4 text-base font-semibold text-gray-800 hover:bg-gray-50 hover:text-[#fc0000] transition-colors">
                  RCP, DEA y Primeros Auxilios
                </Link>
              </div>
            </div>
          </div>
          <Link href="/blog" className="text-base font-semibold tracking-widest hover:text-[#fc0000] transition-colors uppercase">Blog</Link>
          <Link href="/contacto" className="text-base font-semibold tracking-widest hover:text-[#fc0000] transition-colors uppercase">Contacto</Link>
        </nav>
      </div>
    </header>
  );
}
