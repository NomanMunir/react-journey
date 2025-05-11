"use client";

import Link from "next/link";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
import MainheaderBackground from "./main-header-background";
import { usePathname } from "next/navigation";
import NavLink from "./nav-link";

export default function MainHeader() {
  const path = usePathname();
  return (
    <>
      <MainheaderBackground />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image
            src={logoImg.src}
            alt="A plate with food on it."
            width="1024"
            height="1024"
            priority
          />
          NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
