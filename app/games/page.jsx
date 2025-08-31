import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";

export default function GamesPage() {
  const games = [
    {
      id: 1,
      name: "Valorant",
      description: "Tactical first-person shooter with unique agent abilities.",
      image: "/games1.jpg",
      tournaments: 24,
    },
    {
      id: 2,
      name: "League of Legends",
      description: "The world's most popular MOBA with competitive gameplay.",
      image: "/games2.png",
      tournaments: 32,
    },
    {
      id: 3,
      name: "Counter-Strike 2",
      description: "Classic tactical FPS with precise gunplay and strategy.",
      image: "/games3.png",
      tournaments: 28,
    },
    {
      id: 4,
      name: "Dota 2",
      description: "Complex MOBA with deep strategic gameplay and heroes.",
      image: "/games4.png",
      tournaments: 18,
    },
    {
      id: 5,
      name: "Rocket League",
      description:
        "High-octane hybrid of arcade-style soccer and vehicular mayhem.",
      image: "/games5.jpg",
      tournaments: 15,
    },
    {
      id: 6,
      name: "Overwatch 2",
      description: "Team-based multiplayer first-person shooter with heroes.",
      image: "/games6.png",
      tournaments: 22,
    },
  ];

  return (
    <div className="min-h-screen bg-[#111827]">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#9C0D0F] to-[#0C0114] py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl leading-[48px] text-white mb-4">
            GAMES WE SUPPORT
          </h1>
          <p className="my-text text-[20px] leading-[28px] text-[#E5E7EB] max-w-3xl mx-auto">
            Our platform hosts tournaments across the world's most popular
            competitive games.
          </p>
        </div>
      </section>

      {/* Games Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {games.map((game) => (
              <div
                key={game.id}
                className="bg-[#1F2937] rounded-lg overflow-hidden hover:bg-[#111827] hover:border-[1px] hover:border-[#1F2937] duration-700 transition-colors"
              >
                <div className="aspect-video relative">
                  <img
                    src={game.image || "/placeholder.svg"}
                    alt={game.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-[20px] leading-[28px] my-text text-white mb-2">
                    {game.name}
                  </h3>
                  <p className="text-[#9CA3AF] my-text mb-4 text-[14px] leading-[20px]">
                    {game.description}
                  </p>
                  <div className="flex items-center justify-between">
                    {/* <span className="text-slate-400 text-sm">{game.tournaments} Tournaments</span> */}
                    <Button className="w-full h-[40px] p-0 bg-[#9D0C0F] hover:bg-[#9D0C0F]/40 hover:border-[1px] hover:border-[#9D0C0F] transition-all duration-500 cursor-pointer my-text text-white text-[14px] rounded-[4px]">
                      View Tournaments
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
