import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import styles from "../../styles/Navbar.module.scss";

const navigation = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Posts", path: "/posts" },
  { id: 3, title: "Contacts", path: "/contacts" },
];

const Navbar: FC = () => {
  const { pathname } = useRouter();
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Image src="/logo.png" width={60} height={60} alt="Andrew Chon" />
      </div>
      <div className={styles.links}>
        {navigation.map(({ id, path, title }) => (
          <Link key={id} href={path}>
            <span className={pathname === path ? styles.active : null}>
              {title}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
