'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface linkProps {
    link:{
        id: number,
        label:string,
        href: string,
    }
   
}

const NavLink = ({link}:linkProps) => {
    const pathName = usePathname;
    const  [isActive,setIsActive] = useState(false);

    return(
        <Link className="md:text-sm p-1 lg:text-base xl:text-lg" href={link.href}>{link.label}</Link>
    )
}

export default NavLink;