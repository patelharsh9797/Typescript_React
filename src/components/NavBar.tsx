const NavBar = () => {
  return (
    <nav className="container mx-auto flex items-center justify-between gap-4 px-6 py-4">
      <h1 className="cursor-pointer text-3xl font-bold hover:opacity-75">
        React TypeScript
      </h1>
      <ul className="hidden sm:flex items-center justify-center gap-8 text-xl font-semibold">
        <li className="cursor-pointer hover:opacity-75">Home</li>
        <li className="cursor-pointer hover:opacity-75">About</li>
        <li className="cursor-pointer hover:opacity-75">Contact</li>
      </ul>
    </nav>
  );
};

export default NavBar;
