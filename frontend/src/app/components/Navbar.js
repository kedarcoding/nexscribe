// components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-800 p-4">
      <ul className="flex space-x-8">
        <li>
          <Link href="/home" className="text-white hover:text-gray-400">
            Home
          </Link>
        </li>
        <li>
          <Link href="/blogs" className="text-white hover:text-gray-400">
            Blogs
          </Link>
        </li>
        <li>
          <Link href="/profile" className="text-white hover:text-gray-400">
            Profile
          </Link>
        </li>
        <li>
          <Link href="/login" className="text-white hover:text-gray-400">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
