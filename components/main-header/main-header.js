import Link from "next/link";
import LogoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
import MainBackground from "./main-background.js"
import NavLink from "./nav-link";

export default function MainHeader() {
    return <>
        <MainBackground />
        <header className={classes.header}>
            <Link href="/" className={classes.logo}>
                <Image src={LogoImg} alt="A plate with food" priority/> 
                Foodie App
            </Link>

            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink href="/meals">Browser Meals</NavLink>
                    </li>
                    <li>
                        <NavLink href="/community">Foodie community</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    </>
}