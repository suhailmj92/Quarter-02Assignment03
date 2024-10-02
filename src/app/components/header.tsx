 import Link from "next/link" ;


export default function Header() {
    return (
        <div className="Header">
            
            <ul className="header-buttons">

               <Link href={"/"}>   
               <li>Main Page</li>
               </Link>
               
                <Link href={"/about-us"}>    
                <li>About</li>
                </Link>

                <Link href={"/contact-us"}>
                <li>Contact Us</li>
                </Link>
                
                <Link href={"/jobs"}>
                <li>Jobs</li>
                </Link>


                <Link href={"/sign-in"}>
                <li>Sign In</li>
                </Link>
                
                <Link href={"/responsive"}>
                <li>Responsive</li>
                </Link>

            </ul>
        </div>
    )
}