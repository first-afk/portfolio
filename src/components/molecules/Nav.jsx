import { navLinks } from "../../../constants";
import Button from "../atoms/Button";
import Modal from "./Modal";

const Nav = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-transparent w-full fixed top-0 z-99">
      <Button color="primary" variant="primary" size="small" ariaLabel="contact">
        Schedule Meeting
      </Button>
      <div className="hidden md:block">
        <ul className="flex-center lg:gap-10 gap-7 md:mx-10">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} className="text-white hover:text-primary">
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <Modal
        className="block md:hidden"
      >
        <ul className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} className="text-white hover:text-primary">
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </Modal>
    </nav>
  );
};

export default Nav;
