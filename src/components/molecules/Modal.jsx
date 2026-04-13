import { useEffect, useRef, useState } from "react";
import Hamburger from "hamburger-react";



const Modal = ({children, className = "", }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const handleToggle = () => {
    const nextOpen = !isOpen;
    setIsOpen(nextOpen);
  };
  return (
    <div ref={ref} className={className}>
      <Hamburger toggled={isOpen} size={20} toggle={handleToggle} />
      {isOpen && (
        <div className="flex flex-col fixed left-0 right-0 top-20 p-5 pt-0 bg-neutral-950 border-b border-b-white/20">
          {children}
        </div>
      )}
    </div>
  );
};

export default Modal;
