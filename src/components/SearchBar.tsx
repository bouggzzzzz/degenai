import { useState } from "react";
import { Search } from "lucide-react";

const responses = [
  "According to my advanced AI algorithms... you should probably YOLO into memecoins 🚀",
  "Analyzing market data... nah just kidding, I'm just here for the memes 😎",
  "My neural networks suggest buying high and selling low. This is financial advice (just kidding) 🦍",
  "Processing your query... ERROR: Too much intelligence detected. Switching to degen mode 🧠",
  "Let me consult with my quantum computer... it says 'wen lambo?' 🏎️",
];

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsTyping(true);
    setResponse("");

    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex <= randomResponse.length) {
        setResponse(randomResponse.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
      }
    }, 50);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <form onSubmit={handleSearch} className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask the dumbest AI anything..."
          className="w-full px-4 py-3 rounded-full border-2 border-primary/20 focus:border-primary focus:outline-none bg-white/10 backdrop-blur-sm text-white placeholder:text-white/60"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-primary hover:bg-primary/80 transition-colors"
        >
          <Search className="w-5 h-5 text-white" />
        </button>
      </form>
      {response && (
        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-primary/20">
          <p className="text-white text-lg">{response}</p>
        </div>
      )}
    </div>
  );
};

export default SearchBar;