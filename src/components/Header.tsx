const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-center py-4">
        <h1 className="text-2xl md:text-3xl font-display font-bold tracking-wide">
          <span className="text-gradient">Bilhares Alencar</span>
        </h1>
      </div>
    </header>
  );
};

export default Header;
