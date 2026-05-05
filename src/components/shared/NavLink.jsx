"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const NavLink = ({href,children,className}) => {
    const pathname = usePathname();
    const isActive = pathname === href;
    console.log(isActive,href);
    return (
        <Link className={`${isActive? 'border-b-2 border-pink-700' : ''} ${className}`} href={href} >{children}</Link>
    );
};

export default NavLink;