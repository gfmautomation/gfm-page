import styles from '../styles/home.module.css'
import Link from 'next/link';
import Image from 'next/image'
export default function Navbar () {
	return (
		<nav>
		 <div className="logo">
		 <Image
              src="/logo_long.png"
              alt="GFM Automation logo"
              width={150}
              height={150}
              priority
            />
		 </div>
		 <Link href="/">Home</Link>
		 <Link href="/mission">Mission</Link>
		 <Link href="/ourteam">Our Team</Link>
		 <Link href="/contactus" style={{ border: '0px'}}>Contact Us</Link>
		</nav>
	);
}