import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaCopyright, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer h-max lg:justify-between justify-center lg:h-52 items-center p-4 bg-neutral text-neutral-content px-10">
      <aside className="items-center grid-flow-col">
        <p className="text-lg">
          Copyright <FaCopyright className="inline-block"/> {new Date().getFullYear()} - All right
          reserved
        </p>
      </aside>

      <h1 className="text-3xl text-center pb-20">Task Manager</h1>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-center">
        <a href="">
          <FaFacebookSquare className="size-8 text-purple-200" />
        </a>
        <a href="">
          <FaXTwitter className="size-8 text-black" />
        </a>
        <a href="">
          <FaInstagramSquare className="size-8 text-white" />
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
