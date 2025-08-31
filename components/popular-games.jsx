import { Card } from "@/components/ui/card"

const games = [
  {
    id: 1,
    title: "League of Legends",
    tournaments: "24 Tournaments",
    image: "/league-of-legends-game-screenshot.png",
  },
  {
    id: 2,
    title: "Counter-Strike 2",
    tournaments: "18 Tournaments",
    image: "/counter-strike-2-game-screenshot.png",
  },
  {
    id: 3,
    title: "DOTA 2",
    tournaments: "15 Tournaments",
    image: "/dota-2-game-screenshot.png",
  },
  {
    id: 4,
    title: "Fortnite",
    tournaments: "12 Tournaments",
    image: "/fortnite-game-screenshot.png",
  },
  {
    id: 5,
    title: "Valorant",
    tournaments: "10 Tournaments",
    image: "/valorant-game-screenshot.png",
  },
  {
    id: 6,
    title: "Apex Legends",
    tournaments: "8 Tournaments",
    image: "/apex-legends-game-screenshot.png",
  },
]

export default function PopularGames() {
  return (
    <section className="bg-[#111827] py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
         <h2 className="my-text text-[28px] leading-[33px] text-white mb-12">
          Popular Games
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game) => (
            <div
              key={game.id}
              className="h-[200px] w-full cursor-pointer rounded-[8px]"
            >
              <div className="relative h-full">
                <img src={game.image || "/placeholder.svg"} alt={game.title} className="w-full h-full rounded-[8px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-xl mb-1 my-text">{game.title}</h3>
                  <p className="text-gray-300 text-sm my-text">{game.tournaments}</p>
                </div>
                <div className="absolute top-0 w-full h-full rounded-[8px] bg-[#9D0C0F]/10 hover:bg-[#9D0C0F]/40 transition-all duration-700"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
