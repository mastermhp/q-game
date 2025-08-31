import { DollarSign } from "lucide-react";
import { Button } from "./ui/button";

export default function JoinAffiliate() {
  return (
    <section className="bg-[#1F2937] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#111827] rounded-[8px] max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="space-y-6 bg-[#111827] p-10">
              <h2 className="text-3xl my-text text-white">
                Join Our Affiliate Program
              </h2>
              <p className="text-gray-300 my-text text-[14px] leading-relaxed">
                Earn by referring players and learners to our platform. High
                commissions, easy tracking, and instant payouts.
              </p>
              <Button className="mt-6 h-[40px] p-0 bg-[#9D0C0F] hover:bg-[#9D0C0F]/40 hover:border-[1px] hover:border-[#9D0C0F] transition-all duration-500 cursor-pointer my-text text-white text-[14px] rounded-[4px]">
                <DollarSign className="w-5 h-5" />
                Become an Affiliate
              </Button>
            </div>

            {/* Right Stats Grid */}
            <div className="grid grid-cols-2 gap-4 bg-[#374151] rounded-r-[8px] p-10">
              {/* Commission Rate */}
              <div className="bg-[#1F2937] rounded-xl p-6 text-center">
                <div className="text-3xl my-text text-[#EC4899] mb-2">20%</div>
                <div className="text-gray-400 my-text text-sm">
                  Commission Rate
                </div>
              </div>

              {/* Paid to Affiliates */}
              <div className="bg-[#1F2937] rounded-xl p-6 text-center">
                <div className="text-3xl my-text text-[#EC4899] mb-2">
                  $100K+
                </div>
                <div className="text-gray-400 my-text text-sm">
                  Paid to Affiliates
                </div>
              </div>

              {/* Weekly Payouts */}
              <div className="bg-[#1F2937] rounded-xl p-6 text-center">
                <div className="text-3xl my-text text-[#EC4899] mb-2">
                  Weekly
                </div>
                <div className="text-gray-400 my-text text-sm">Payouts</div>
              </div>

              {/* 24/7 Support */}
              <div className="bg-[#1F2937] rounded-xl p-6 text-center">
                <div className="text-3xl my-text text-[#EC4899] mb-2">24/7</div>
                <div className="text-gray-400 my-text text-sm">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
