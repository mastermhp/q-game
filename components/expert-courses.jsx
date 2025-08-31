import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Pro League of Legends Strategy",
    instructor: "Alex 'ProGamer' Johnson",
    rating: 4.8,
    price: "$49.99",
    featured: true,
    image: "/league-of-legends-strategy-course.png",
  },
  {
    id: 2,
    title: "Advanced CS:GO Tactics",
    instructor: "Sarah 'HeadShot' Williams",
    rating: 4.7,
    price: "$39.99",
    featured: true,
    image: "/counter-strike-tactics-course.png",
  },
  {
    id: 3,
    title: "DOTA 2 Hero Mastery",
    instructor: "Michael 'DotaMaster' Chen",
    rating: 4.5,
    price: "$29.99",
    featured: true,
    image: "/dota-2-hero-mastery-course.png",
  },
  {
    id: 4,
    title: "Fortnite Building Techniques",
    instructor: "Emma 'BuildQueen' Davis",
    rating: 4.9,
    price: "$34.99",
    featured: true,
    image: "/fortnite-building-techniques-course.png",
  },
];

export default function ExpertCourses() {
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
    <section className="bg-[#111827] py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-1">
          <h2 className="my-text text-[28px] leading-[33px] text-white mb-12">
            Level Up with Expert Courses
          </h2>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="icon"
              className="border-slate-600 text-white hover:bg-slate-800 bg-transparent"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border-slate-600 text-white hover:bg-slate-800 bg-transparent"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white/[7%] rounded-lg overflow-hidden hover:border-[1px] hover:border-white/[7%] hover:bg-[#111827] transition-colors duration-700"
            >
              <div className="relative">
                <img
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                {course.featured && (
                  <div className="absolute top-3 right-3 bg-[#9D0C0F] my-text text-white px-2 py-1 rounded text-[12px] font-medium">
                    FEATURED
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-white font-semibold text-lg mb-2 my-text line-clamp-2">
                  {course.title}
                </h3>
                <p className="text-gray-400 my-text text-sm mb-3">
                  by {course.instructor}
                </p>

                <div className="flex items-center mb-8">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(course.rating)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-600"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-white text-sm ml-2">
                    ({course.rating})
                  </span>
                </div>

                <div className="flex items-center justify-between border-t border-slate-400 pt-4">
                  <span className="text-white font-bold text-[20px]">
                    {course.price}
                  </span>
                  <Button className="w-[120px] h-[36px] p-0 bg-[#9D0C0F] hover:bg-[#9D0C0F]/40 hover:border-[1px] hover:border-[#9D0C0F] transition-all duration-500 cursor-pointer my-text text-white text-[14px] rounded-[4px]">
                    View Course
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
