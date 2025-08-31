import { Button } from "@/components/ui/button";
import { Trophy, BookOpen } from "lucide-react";

export default function Hero() {

  return (
    <section className="relative py-40 bg-[#111827] lg:py-56">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/homebg.jpg"
          alt="Esports Arena"
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111827]/0 to-[#111827]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-[40px] md:text-[64px] font-bold text-white mb-10 leading-[70px]">
            COMPETE, LEARN, AND <br /> WIN IN THE ULTIMATE <br /> ESPORTS ARENA
          </h1>
          <p className="my-text text-[16px] text-[#D1D5DB] mb-10">
            Join tournaments, take courses, and earn rewards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="w-[200px] h-[45px] p-0 bg-[#9D0C0F] hover:bg-[#9D0C0F]/40 hover:border-[1px] hover:border-[#9D0C0F] transition-all duration-500 cursor-pointer my-text text-white text-[14px] rounded-[4px]">
              <Trophy className="w-5 h-5" />
              <span className="">Join a Tournament</span>
            </Button>
            <Button className="w-[200px] h-[45px] p-0 border-[#4B5563] bg-[#1F293780] hover:bg-[#9D0C0F]/40 border-[1px] hover:border-[#9D0C0F] transition-all duration-500 cursor-pointer my-text text-white text-[14px] rounded-[4px]">
              <BookOpen className="w-5 h-5" />
              <span>Browse Courses</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
