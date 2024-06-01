'use client';

import Link from "next/link";
import { UrlObject } from "url";
import classes from './nav-link.module.css';
import { usePathname } from "next/navigation";

type Props = {
    href: string | UrlObject;
    children: React.ReactNode;
};
const NavLink: React.FC<Props> = (props: Props) => {
    const path = usePathname();
    return (
        <Link href={props.href} className={path.startsWith(props.href.toString()) ? `${classes.link} ${classes.active}` : classes.link}>{props.children}</Link>
    );
};

export default NavLink;