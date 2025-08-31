import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Search,
  Star,
  ChevronLeft,
  ChevronRight,
  FilterIcon,
} from "lucide-react";

export default function CoursesPage() {
  const courses = [
    {
      id: 1,
      title: "Mastering FPS Aim & Reflexes",
      instructor: "Alex 'ProGamer' Johnson",
      instructorAvatar: "/tav1.png",
      description:
        "Improve your aim, reflexes and positioning in competitive FPS games with pro techniques.",
      rating: 4.8,
      reviews: 234,
      price: "$49.99",
      image: "/valorant-tournament-esports-arena-with-players.png",
      featured: false,
      category: "FPS",
    },
    {
      id: 2,
      title: "MOBA Strategy & Team Play",
      instructor: "Sarah 'StratQueen' Davis",
      instructorAvatar: "/tav2.png",
      description:
        "Learn advanced MOBA strategies, map awareness, and team coordination from a top player.",
      rating: 4.9,
      reviews: 189,
      price: "$59.99",
      image: "/league-of-legends-world-championship-stage.png",
      featured: true,
      category: "MOBA",
    },
    {
      id: 3,
      title: "Beginner's Guide to Battle Royale",
      instructor: "Mike 'SurvivalPro' Wilson",
      instructorAvatar: "/tav3.png",
      description:
        "Essential tips and strategies for surviving and winning in popular battle royale games.",
      rating: 4.7,
      reviews: 156,
      price: "Free",
      image: "/counter-strike-tournament-arena-with-crowd.png",
      featured: true,
      category: "Battle Royale",
    },
    {
      id: 4,
      title: "Advanced RTS Tactics",
      instructor: "David 'CommanderPro' Lee",
      instructorAvatar: "/tav1.png",
      description:
        "Master resource management, build orders, and army control in real-time strategy games.",
      rating: 4.6,
      reviews: 98,
      price: "$39.99",
      image: "/fortnite-championship-tournament-stage.png",
      featured: false,
      category: "RTS",
    },
    {
      id: 5,
      title: "Fighting Games: Combos & Timing",
      instructor: "Emma 'ComboQueen' Chen",
      instructorAvatar: "/tav2.png",
      description:
        "Learn frame data, combo execution, and mind games to dominate in fighting games.",
      rating: 4.8,
      reviews: 167,
      price: "$44.99",
      image: "/dota-2-international-tournament-stage-with-crowd.png",
      featured: true,
      category: "Fighting",
    },
    {
      id: 6,
      title: "Streaming & Content Creation",
      instructor: "Jake 'StreamMaster' Rodriguez",
      instructorAvatar: "/tav3.png",
      description:
        "Build your gaming brand and learn how to create engaging content for streaming platforms.",
      rating: 4.9,
      reviews: 203,
      price: "$69.99",
      image: "/mixed-esports-tournament-with-multiple-games.png",
      featured: true,
      category: "Content",
    },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating)
            ? "text-yellow-400 fill-current"
            : "text-gray-400"
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-[#111827]">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#9C0D0F] to-[#0C0114] py-24 ">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl leading-[48px] text-white mb-4">
            LEARN FROM THE PROS
          </h1>
          <p className="my-text text-[20px] leading-[28px] text-[#E5E7EB] max-w-3xl mx-auto">
            Enhance your skills with coaching from top esports players and
            trainers.
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-black">
        <div className="max-w-3xl mx-auto px-4">
          <div className="">
            <div className="relative flex-1 w-full mb-2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
              <Input
                placeholder="Search courses..."
                className=" h-[40px] pl-10 bg-[#EFEFEF1A] border-[1px] border-[#D1D5DB1C] my-text text-[16px] text-white placeholder:text-[#9CA3AF]"
              />
            </div>

            <div className="grid grid-cols-6 gap-2">
              <div className="flex items-center gap-2 rounded-[6px] my-text text-[16px] text-white px-4 py-2">
                <FilterIcon className=" text-white w-4 h-4" />
                Filters:
              </div>
              <select className="rounded-[6px] bg-[#EFEFEF1A] border-[1px] border-[#D1D5DB1C] my-text text-[14px] text-white px-4 py-2">
                <option>Category</option>
                <option>FPS</option>
                <option>MOBA</option>
                <option>Battle Royale</option>
                <option>RTS</option>
                <option>Fighting</option>
              </select>
              <select className="rounded-[6px] bg-[#EFEFEF1A] border-[1px] border-[#D1D5DB1C] my-text text-[14px] text-white px-4 py-2">
                <option>Price</option>
                <option>Free</option>
                <option>$0-$50</option>
                <option>$50+</option>
              </select>
              <select className="rounded-[6px] bg-[#EFEFEF1A] border-[1px] border-[#D1D5DB1C] my-text text-[14px] text-white px-4 py-2">
                <option>Language</option>
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
              <select className="rounded-[6px] bg-[#EFEFEF1A] border-[1px] border-[#D1D5DB1C] my-text text-[14px] text-white px-4 py-2">
                <option>Rating</option>
                <option>4.5+</option>
                <option>4.0+</option>
                <option>3.5+</option>
              </select>
              <Button className="h-[40px] p-0 bg-[#9D0C0F] hover:bg-[#9D0C0F]/40 hover:border-[1px] hover:border-[#9D0C0F] transition-all duration-500 cursor-pointer my-text text-white text-[16px] rounded-[4px]">
                Apply Filters
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white/[7%] rounded-lg overflow-hidden hover:border-[1px] hover:border-white/[7%] hover:bg-[#111827] transition-colors duration-700"
              >
                <div className="aspect-video relative">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  {course.featured && (
                    <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded text-xs font-semibold">
                      FEATURED
                    </div>
                  )}
                </div>
                <div className="rounded-b-[4px] p-6 shadow-[0_2px_4px_-2px_rgba(0,0,0,0.1),0_4px_6px_-1px_rgba(0,0,0,0.1)]">
                  <div className="">
                    <h3 className="text-[18px] leading-[20px] my-text text-white mb-3 line-clamp-2">
                      {course.title}
                    </h3>

                    <div className="flex items-center gap-3 mb-4">
                      <img
                        src={course.instructorAvatar || "/placeholder.svg"}
                        alt={course.instructor}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span className="text-[14px] leading-[20px] my-text text-white">
                        {course.instructor}
                      </span>
                    </div>
                    <h3 className="text-[14px] leading-[20px] my-text text-white mb-3 line-clamp-2">
                      {course.description}
                    </h3>

                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center gap-1">
                        {renderStars(course.rating)}
                      </div>
                      <span className="text-slate-300 text-sm">
                        ({course.reviews})
                      </span>
                      <span className="text-yellow-400 text-sm font-semibold">
                        {course.rating}
                      </span>
                      <span className="ml-auto text-xl font-bold text-white">
                        {course.price === "Free" ? (
                          <span className="text-green-400">Free</span>
                        ) : (
                          course.price
                        )}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <Button className="w-full h-[40px] p-0 bg-[#9D0C0F] hover:bg-[#9D0C0F]/40 hover:border-[1px] hover:border-[#9D0C0F] transition-all duration-500 cursor-pointer my-text text-white text-[14px] rounded-[4px]">
                        {/* <Button className="bg-red-600 hover:bg-red-700 text-white px-6"> */}
                        View Course
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <Button
              variant="outline"
              size="sm"
              className="border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <div className="flex gap-2">
              <Button size="sm" className="bg-red-600 hover:bg-red-700">
                1
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent"
              >
                2
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent"
              >
                3
              </Button>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
