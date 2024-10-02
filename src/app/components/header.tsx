 import Link from "next/link" ;


export default function Header() {
    return (
        <div className="Header">
            
            <ul className="header-buttons">

               <Link href={"/"}>   
               <li>Portfolio</li>
               </Link>
               
                <Link href={"/about-us"}>    
                <li>About</li>
                </Link>

                <Link href={"/contact-us"}>
                <li>Contact Me</li>
                </Link>

            </ul>
        </div>
    )
}