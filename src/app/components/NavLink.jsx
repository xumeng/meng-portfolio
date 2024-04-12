import Link from "next/link";

const NavLink = ({ href, title, size, target }) => {
  return (
    <Link
      href={href}
      target={target? target : "_self"}
      // className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
      className={`block py-2 pl-3 pr-4 text-[#ADB7BE] sm:${size ? size : 'text-xl'} rounded md:p-0 hover:text-white`}
    >
      {title}
    </Link>
  );
};

export default NavLink;
