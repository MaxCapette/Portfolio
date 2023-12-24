import Link from "next/link";
import Sneaker from "../../sneaker/page";
import "./header.css";
import Image from "next/image";
import DarkTheme from "./DarkTheme/DarkTheme";

export default function Header() {
  return (
    <header>
      <nav className=" headerNav flex items-center">
       
      
          <Sneaker />
       
        
      
         <DarkTheme />
      </nav>
    </header>
  );
}
