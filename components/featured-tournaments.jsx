import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const tournaments = [
  {
    id: 1,
    title: "League of Legends World Championship",
    prizePool: "$2,000,000",
    date: "Dec 15-20, 2023",
    status: "Upcoming",
    statusColor: "bg-[#3B82F6]",
    image: "/league-of-legends-esports-tournament-arena.png",
  },
  {
    id: 2,
    title: "CS:GO Major Tournament",
    prizePool: "$1,000,000",
    date: "Nov 5-12, 2023",
    status: "Live Now",
    statusColor: "bg-[#22C55E]",
    image: "/counter-strike-esports-tournament.png",
  },
  {
    id: 3,
    title: "Fortnite Champion Series",
    prizePool: "$3,000,000",
    date: "Jan 10-15, 2024",
    status: "Upcoming",
    statusColor: "bg-[#3B82F6]",
    image: "/fortnite-esports-tournament.png",
  },
  {
    id: 4,
    title: "DOTA 2 International",
    prizePool: "$4,500,000",
    date: "Oct 15-20, 2023",
    status: "Ended",
    statusColor: "bg-[#6B7280]",
    image: "/dota-2-esports-tournament.png",
  },
];

export default function FeaturedTournaments() {
  return (
    <section className="bg-[#111827] pt-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="my-text text-[28px] leading-[33px] text-white mb-12">
          Featured Tournaments
        </h2>

        {/* Tournaments Grid */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tournaments.map((tournament) => (
                <div
                  key={tournament.id}
                  className="rounded-lg overflow-hidden hover:bg-slate-700 transition-colors"
                >
                  <div className="aspect-video relative">
                    <img
                      src={tournament.image || "/placeholder.svg"}
                      alt={tournament.name}
                      className="w-full h-full object-cover"
                    />
                    <div
                      className={`absolute top-3 right-3 px-3  py-1 rounded-full text-white text-sm my-text font-medium ${tournament.statusColor}`}
                    >
                      {tournament.status}
                    </div>
                  </div>

                  <div className="rounded-b-[4px] p-6 bg-white/[7%] hover:border-[1px] hover:border-white/[7%] hover:bg-[#111827] transition-all duration-700 shadow-[0_2px_4px_-2px_rgba(0,0,0,0.1),0_4px_6px_-1px_rgba(0,0,0,0.1)]">
                    <div className="">
                      <div className="flex gap-2">
                        <h3 className="text-white my-text text-[20px] leading-[25px] h-20 line-clamp-2">
                          {tournament.title}
                        </h3>
                      </div>

                      <div className="space-y-3 flex justify-between items-center mb-4">
                        <div className="flex flex-col justify-between text-sm">
                          <span className="text-[#9CA3AF] text-[12px] leading-[24px] my-text">
                            Prize Pool
                          </span>
                          <span className="text-[#4ADE80] text-[18px] leading-[24px] my-text">
                            {tournament.prizePool}
                          </span>
                        </div>
                        <div className="flex flex-col justify-between text-sm">
                          <span className="text-[#9CA3AF] text-[12px] leading-[24px] ml-auto my-text">
                            Date
                          </span>
                          <span className="text-white text-[15px] leading-[24px] my-text">
                            {tournament.date}
                          </span>
                        </div>
                      </div>

                      <Button className="w-full h-[40px] p-0 bg-[#9D0C0F] hover:bg-[#9D0C0F]/40 hover:border-[1px] hover:border-[#9D0C0F] transition-all duration-500 cursor-pointer my-text text-white text-[14px] rounded-[4px]">
                        {tournament.status === "Live Now"
                          ? "Watch Live"
                          : tournament.status === "Upcoming"
                          ? "Join Now"
                          : "View Results"}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
