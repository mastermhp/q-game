import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FilterIcon, Search } from "lucide-react";

export default function TournamentsPage() {
  const tournaments = [
    {
      id: 1,
      avatar: "/tav1.png",
      name: "Valorant Champions",
      game: "Valorant",
      prizePool: "$100,000",
      startDate: "Nov 15, 2024",
      endDate: "Nov 20, 2024",
      status: "Live Now",
      image: "/valorant-tournament-esports-arena-with-players.png",
      participants: 64,
    },
    {
      id: 2,
      avatar: "/tav2.png",
      name: "League of Legends World Championship",
      game: "League of Legends",
      prizePool: "$2,000,000",
      startDate: "Dec 15-20, 2023",
      endDate: "Dec 20, 2023",
      status: "Upcoming",
      image: "/league-of-legends-world-championship-stage.png",
      participants: 128,
    },
    {
      id: 3,
      avatar: "/tav3.png",
      name: "CS:GO Major Tournament",
      game: "Counter-Strike 2",
      prizePool: "$1,000,000",
      startDate: "Nov 5-12, 2023",
      endDate: "Nov 12, 2023",
      status: "Upcoming",
      image: "/counter-strike-tournament-arena-with-crowd.png",
      participants: 32,
    },
    {
      id: 4,
      avatar: "/tav1.png",
      name: "Fortnite Champion Series",
      game: "Fortnite",
      prizePool: "$3,000,000",
      startDate: "Jan 10-15, 2024",
      endDate: "Jan 15, 2024",
      status: "Upcoming",
      image: "/fortnite-championship-tournament-stage.png",
      participants: 256,
    },
    {
      id: 5,
      avatar: "/tav2.png",
      name: "DOTA 2 International",
      game: "DOTA 2",
      prizePool: "$4,500,000",
      startDate: "Oct 15-20, 2023",
      endDate: "Oct 20, 2023",
      status: "Completed",
      image: "/dota-2-international-tournament-stage-with-crowd.png",
      participants: 18,
    },
    // {
    //   id: 6,
    //   name: "Global Esports Championship",
    //   game: "Mixed Games",
    //   prizePool: "$125,000",
    //   startDate: "Dec 1, 2023",
    //   endDate: "Dec 10, 2023",
    //   status: "Completed",
    //   image: "/mixed-esports-tournament-with-multiple-games.png",
    //   participants: 200,
    // },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Live Now":
        return "bg-[#DCFCE7] text-[#166534]";
      case "Upcoming":
        return "bg-[#9D0C0F]/[8%] text-[#9D0C0F]";
      case "Completed":
        return "bg-white text-black";
      default:
        return "bg-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-[#111827]">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#9C0D0F] to-[#0C0114] py-24 ">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl leading-[48px] text-white mb-4">
            ALL TOURNAMENTS
          </h1>
          <p className="my-text text-[20px] leading-[28px] text-[#E5E7EB] max-w-3xl mx-auto">
            Find and join tournaments across your favorite competitive games.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="-mt-[30px] py-8 max-w-7xl mx-auto rounded-[4px] bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              <div className="flex flex-col">
                <label className="text-white my-text text-[14px]">Game</label>
                <select className="w-[270px] h-[36px] rounded-[6px] bg-[#EFEFEF1A] border-[1px] border-[#D1D5DB1C] my-text text-[16px] text-white px-4 py-2">
                  <option>All Games</option>
                  <option>Valorant</option>
                  <option>League of Legends</option>
                  <option>Counter-Strike 2</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label className="text-white my-text text-[14px]">Status</label>
                <select className="w-[270px] h-[36px] rounded-[6px] bg-[#EFEFEF1A] border-[1px] border-[#D1D5DB1C] my-text text-[16px] text-white px-4 py-2">
                  <option>All Status</option>
                  <option>status 1</option>
                  <option>status 2</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label className="text-white my-text text-[14px]">
                  Prize Pool: Up to $250,000
                </label>
                <select className="w-[270px] rounded-[6px] bg-[#EFEFEF1A] border-[1px] border-[#D1D5DB1C] my-text text-[16px] text-white px-4 py-2">
                  <option>Prize Pool</option>
                  <option>$0 - $10K</option>
                  <option>$10K - $100K</option>
                  <option>$100K+</option>
                </select>
              </div>
            </div>

            <div className="relative flex-1 max-w-md">
              <label className="text-white my-text text-[14px]">Search</label>

              <div className="">
                <Search className="absolute left-3 top-9 text-[#9CA3AF] w-4 h-4" />
                <Input
                  placeholder="Search tournaments..."
                  className=" h-[40px] pl-10 bg-[#EFEFEF1A] border-[1px] border-[#D1D5DB1C] my-text text-[16px] text-white placeholder:text-[#9CA3AF]"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <Button className="w-[150px] h-[40px] p-0 bg-[#9D0C0F] hover:bg-[#9D0C0F]/40 hover:border-[1px] hover:border-[#9D0C0F] transition-all duration-500 cursor-pointer my-text text-white text-[16px] rounded-[4px]">
              <FilterIcon className=" text-white w-4 h-4" />
              Apply Filters
            </Button>
          </div>
        </div>
      </section>

      {/* Tournaments Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                </div>
                <div className="rounded-b-[4px] p-6 bg-white/[7%] hover:border-[1px] hover:border-white/[7%] hover:bg-[#111827] transition-all duration-700 shadow-[0_2px_4px_-2px_rgba(0,0,0,0.1),0_4px_6px_-1px_rgba(0,0,0,0.1)]">
                  <div className="">
                    <div className="flex gap-2">
                      <img src={tournament.avatar} className="w-5 h-5 rounded-full" alt="" />
                      <h3 className="text-[14px] leading-[20px] my-text text-white mb-2">
                        {tournament.name}
                      </h3>
                      <div
                        className={`ml-auto px-3 py-1 rounded-full text-[12px] my-text  ${getStatusColor(
                          tournament.status
                        )}`}
                      >
                        {tournament.status}
                      </div>
                    </div>
                    <p className="text-slate-400 text-sm mb-14">
                      {tournament.game}
                    </p>

                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-white text-[16px] leading-[24px] my-text">
                          Prize Pool
                        </span>
                        <span className="text-green-400 text-[16px] leading-[24px] my-text">
                          {tournament.prizePool}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-white text-[16px] leading-[24px] my-text">
                          Date
                        </span>
                        <span className="text-white text-[16px] leading-[24px] my-text">
                          {tournament.startDate}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400 text-[12px] leading-[24px] my-text">
                          Participants
                        </span>
                        <span className="text-slate-400">
                          {tournament.participants}
                        </span>
                      </div>
                    </div>

                    <Button className="w-full h-[40px] p-0 bg-[#9D0C0F] hover:bg-[#9D0C0F]/40 hover:border-[1px] hover:border-[#9D0C0F] transition-all duration-500 cursor-pointer my-text text-white text-[14px] rounded-[4px]">
                      {tournament.status === "Live Now"
                        ? "Watch Live"
                        : tournament.status === "Upcoming"
                        ? "Register Now"
                        : "View Results"}
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
