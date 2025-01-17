import Logo from "../components/Logo";
import SearchBar from "../components/SearchBar";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1E1B4B] to-[#312E81] flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl mx-auto space-y-12 text-center">
        <Logo />
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-medium text-white/90">
            The World's Smartest Degenerate AI
          </h2>
          <p className="text-white/60">
            Powered by advanced memeology and quantum randomness
          </p>
        </div>
        <SearchBar />
        <div className="pt-8">
          <p className="text-sm text-white/40 animate-pulse">
            Warning: This AI might give you financial advice. Don't trust it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;