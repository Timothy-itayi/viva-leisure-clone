const Hamburger = ({ isOpen }: { isOpen: boolean }) => {
    return (
      <div className="group h-20 w-20 rounded-lg">
        <div className="grid justify-items-center gap-1.5">
          <span
            className={`h-1 w-8 rounded-full bg-white transition ${
              isOpen ? 'rotate-45 translate-y-2.5' : ''
            }`}
          ></span>
          <span
            className={`h-1 w-8 rounded-full bg-white transition ${
              isOpen ? 'scale-0' : ''
            }`}
          ></span>
          <span
            className={`h-1 w-8 rounded-full bg-white transition ${
              isOpen ? '-rotate-45 -translate-y-2.5' : ''
            }`}
          ></span>
        </div>
      </div>
    );
  };
  
  export default Hamburger;
  