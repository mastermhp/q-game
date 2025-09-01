import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Check, DollarSign, Pointer } from "lucide-react";

export default function AffiliatePage() {
  const affiliate = [
    {
      id: 1,
      title: "Sign Up",
      description: "Join our affiliate program in minutes—simple and free.",
      image: "/af1.svg",
    },
    {
      id: 2,
      title: "Share Links",
      description:
        "Get your unique referral links to share across websites, blogs, or social media.",
      image: "/af2.svg",
    },
    {
      id: 3,
      title: "Earn Commissions",
      description:
        "Every time someone registers or purchases through your link, you earn real money.",
      image: "/af3.svg",
    },
  ];

  return (
    <div className="min-h-screen bg-[#111827]">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#9C0D0F] to-[#111827] py-24 ">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl leading-[48px] text-white mb-4">
            EARN WITH OUR AFFILIATE PROGRAM
          </h1>
          <p className="my-text text-[24px] leading-[28px] text-[#E5E7EB] max-w-3xl mx-auto mb-12">
            Promote tournaments, share your unique link, and earn commissions
            while helping us grow the global esports community.
          </p>
          <Button className="w-[120px] h-[50px] p-0 bg-[#9D0C0F] hover:bg-[#9D0C0F]/40 hover:border-[1px] hover:border-[#9D0C0F] transition-all duration-500 cursor-pointer my-text text-white text-[20px] shadow-xl rounded-[4px]">
            {/* <Handshake className="w-6 h-6 mr-2"/> */}
            Join
          </Button>
        </div>
      </section>


      {/* How It Works */}
      <section className="py-16 bg-[#00000052]">
        <div className="container mx-auto px-4">
          <h2 className="text-[24px] my-text text-white text-center mb-12">
            How It Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {affiliate.map((course) => (
              <div
                key={course.id}
                className="bg-white/[7%] rounded-lg overflow-hidden hover:border-[1px] hover:border-white/[7%] hover:bg-[#111827] transition-colors duration-700"
              >
                <div className="flex items-center justify-center p-8 relative">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="w-10 h-10 object-cover"
                  />
                </div>
                <div className="max-w-md mx-auto rounded-b-[4px] p-6 shadow-[0_2px_4px_-2px_rgba(0,0,0,0.1),0_4px_6px_-1px_rgba(0,0,0,0.1)]">
                  <div className="">
                    <div className="flex items-center justify-center text-[14px] leading-[20px] my-text text-white mb-6">
                      <span className="bg-[#DBEAFE2B] w-8 h-8 rounded-full py-1 px-3">
                        {course.id}
                      </span>
                      <h3 className="text-[18px] max-w-md mx-auto text-center leading-[20px] my-text text-white mb-3 line-clamp-2">
                        {course.title}
                      </h3>
                    </div>

                    <h3 className="text-[14px] text-center leading-[20px] my-text text-[#4B5563] mb-3 line-clamp-2">
                      {course.description}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="mt-6 py-16 bg-[#00000052]">
        <div className="container mx-auto px-4">
          {/* Why Join */}
          {/* <div className="bg-slate-800 rounded-lg p-8"> */}
          <h3 className="text-[24px] my-text text-white text-center mb-12">
            Why Join?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6 max-w-xl mx-auto">
            <div className="bg-[#EFF6FF1C] border-l-4 border-[#9D0C0F] h-[64px] flex items-center justify-start pl-6 gap-4">
              <img src="/af3.svg" className="w-8 h-8 mt-1 flex-shrink-0" />
              <span className="text-[#FFFFFF] text-[18px] leading-[28px] my-text">
                High commission rates on every referral
              </span>
            </div>
            <div className="bg-[#EFF6FF1C] border-l-4 border-[#9D0C0F] h-[64px] flex items-center justify-start pl-6 gap-4">
              <img src="/join2.svg" className="w-8 h-8 mt-1 flex-shrink-0" />{" "}
              <span className="text-[#FFFFFF] text-[18px] leading-[28px] my-text">
                Real-time tracking dashboard to monitor your earnings
              </span>
            </div>
            <div className="bg-[#EFF6FF1C] border-l-4 border-[#9D0C0F] h-[64px] flex items-center justify-start pl-6 gap-4">
              <img src="/join3.svg" className="w-8 h-8 mt-1 flex-shrink-0" />{" "}
              <span className="text-[#FFFFFF] text-[18px] leading-[28px] my-text">
                Access to marketing resources, banners, graphics, content
              </span>
            </div>
            <div className="bg-[#EFF6FF1C] border-l-4 border-[#9D0C0F] h-[64px] flex items-center justify-start pl-6 gap-4">
              <img src="/join4.svg" className="w-8 h-8 mt-1 flex-shrink-0" />{" "}
              <span className="text-[#FFFFFF] text-[18px] leading-[28px] my-text">
                Monthly payouts directly to your account
              </span>
            </div>
            <div className="bg-[#EFF6FF1C] border-l-4 border-[#9D0C0F] h-[64px] flex items-center justify-start pl-6 gap-4">
              <img src="/join5.svg" className="w-8 h-8 mt-1 flex-shrink-0" />{" "}
              <span className="text-[#FFFFFF] text-[18px] leading-[28px] my-text">
                Be part of a growing global esports community
              </span>
            </div>
            {/* </div> */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#9D0C0F]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-[30px] my-text leading-[36px] text-white mb-4">
            Ready to Start Earning?
          </h2>
          <p className="text-[20px] my-text leading-[28px] text-white mb-14">
            Join our affiliate program today and turn your passion for esports <br />
            into a profitable opportunity.
          </p>
          <Button className="w-[250px] h-[40px] p-0 bg-black hover:bg-black/40 hover:border-[1px] hover:border-[#9D0C0F] transition-all duration-500 cursor-pointer my-text text-white text-[16px] rounded-[4px]">
          <Pointer className="w-6 h-6 mr-2 rotate-90"/>
          {/* <Button className="bg-white text-red-600 hover:bg-red-50 px-8 py-3 text-lg font-semibold"> */}
            Sign up as an Affiliate
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
