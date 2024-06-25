import Link from "next/link";
import Image from "next/image";
import Logo from './dojo-logo.png'

function Navbar(props) {
  return (
    <nav>
      <Image
        src={Logo}
        alt={'Logo'}
        width={70}
        quality={100}
        placeholder="blur"
      />
      <Link href='/'>Dashboard</Link>
      <Link href='/tickets'>Tickets</Link>
    </nav>
  );
}

export default Navbar;