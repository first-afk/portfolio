import Button from "../atoms/Button";
import Modal from "./Modal";

const Nav = ({children}) => {
  return (
    <nav className={`flex justify-between items-center p-4 bg-neutral-950 w-full fixed top-0 z-99`}>
      <Button color="primary" variant="primary" size="small" ariaLabel="contact">
        Schedule Meeting
      </Button>
      <div className="hidden md:block">
        <ul className="flex-center lg:gap-10 gap-7 md:mx-10">
          {children}
        </ul>
      </div>
      <Modal
        className="block md:hidden"
      >
        <ul className="flex flex-col gap-2">
          {children}
        </ul>
      </Modal>
    </nav>
  );
};

export default Nav;
