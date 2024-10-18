import React, { ReactNode } from "react";

interface DrawerProps {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Drawer: React.FC<DrawerProps> = ({ children, isOpen, setIsOpen }) => {
  return (
    <main
      className={
        `fixed overflow-hidden z-10 bg-black bg-opacity-50 inset-0 transform ease-in-out transition-all duration-300 ` +
        (isOpen
          ? `opacity-100 translate-x-0`
          : `opacity-0 -translate-x-full`)
      }
      style={{ top: '120px' }} // Drawer starts below the navbar
    >
      <section
        className={
          `absolute bg-black  opacity-90 h-full shadow-xl transform transition-all duration-300 ease-in-out ` +
          (isOpen ? `w-full` : `w-0`)
        }
      >
        <article className="absolute w-full pb-10 flex flex-col space-y-6 overflow-y-scroll h-auto">
          {children}
        </article>
      </section>
      <section
        className="w-screen h-full cursor-pointer"
        onClick={() => setIsOpen(false)}
      ></section>
    </main>
  );
};

export default Drawer;
