'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";


function Navigation() {
    const pathName = usePathname();
    return (
        <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
            <nav>
                <ul className="container mx-auto flex py-6 gap-12 p-4 items-center">
                    <li>
                        <Link href="/" className={pathName === "/" ? "text-blue-600" : "text-gray-600"}>
                            <Image src="/icons/nhc_dark.svg" alt="National Housing" width={48} height={48} />
                        </Link>
                    </li>
                    <li>
                        <Link href="/products" className={`font-abel ${pathName === "/products" ? "text-blue-600 font-bold" : "text-gray-600 "}`}>
                            Products
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className={`font-abel ${pathName === "/about" ? "text-blue-600 font-bold" : "text-gray-600 "}`}>
                            About
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation