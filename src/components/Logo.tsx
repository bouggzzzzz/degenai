const Logo = () => {
  return (
    <div className="flex items-center justify-center space-x-2">
      <img
        src="/lovable-uploads/9b72b092-b343-41f2-a15b-162d37e87f80.png"
        alt="Degenai Logo"
        className="w-16 h-16"
      />
      <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
        DegenAI
      </h1>
    </div>
  );
};

export default Logo;