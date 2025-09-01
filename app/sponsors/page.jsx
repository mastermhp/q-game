import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Handshake } from "lucide-react";

export default function SponsorsPage() {
  const sponsors = [
    {
      id: 1,
      name: "XYZ Gaming",
      description:
        "Leading gaming hardware and peripherals company providing cutting-edge equipment.",
      logo: "/sp1.svg",
      // tier: "Platinum",
    },
    {
      id: 2,
      name: "NextGen Tech",
      description:
        "Professional streaming software and services for content creators and esports.",
      logo: "/sp2.svg",
      // tier: "Gold",
    },
    {
      id: 3,
      name: "ProSound Audio",
      description:
        "Modern banking solutions designed specifically for the gaming community.",
      logo: "/sp3.svg",
      // tier: "Gold",
    },
    {
      id: 4,
      name: "FastNet Broadband",
      description:
        "Premium energy drinks and supplements trusted by professional gamers worldwide.",
      logo: "/sp4.svg",
      // tier: "Silver",
    },
  ];

  return (
    <div className="min-h-screen bg-[#111827]">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#9C0D0F] to-[#111827] py-24 ">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl leading-[48px] text-white mb-4">
            OUR SPONSORS
          </h1>
          <p className="my-text text-[20px] leading-[28px] text-[#E5E7EB] max-w-3xl mx-auto">
            We're proud to be supported by industry leaders who help us grow and
            empower the gaming community.
          </p>
        </div>
      </section>

      {/* Sponsors Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {sponsors.map((sponsor) => (
              <div
                key={sponsor.id}
                className="bg-[#1F2937] rounded-lg p-6 text-center"
              >
                <div className="w-20 h-20 bg-[#1F2937] rounded-lg mx-auto mb-6 flex items-center justify-center">
                  <img
                    src={sponsor.logo || "/placeholder.svg"}
                    alt={sponsor.name}
                    className="w-14 h-14 object-contain"
                  />
                </div>
                <div className="mb-0">
                  {/* <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      sponsor.tier === "Platinum"
                        ? "bg-purple-600 text-white"
                        : sponsor.tier === "Gold"
                        ? "bg-yellow-600 text-white"
                        : "bg-gray-600 text-white"
                    }`}
                  >
                    {sponsor.tier} Sponsor
                  </span> */}
                </div>
                <h3 className="text-[18px] leading-[25px] my-text text-white mb-3">
                  {sponsor.name}
                </h3>
                <p className="text-[#9CA3AF] text-[15px] leading-[22px] my-text mb-6">
                  {sponsor.description}
                </p>
                <Button className="w-[150px] h-[40px] p-0 bg-[#9D0C0F] hover:bg-[#9D0C0F]/40 hover:border-[1px] hover:border-[#9D0C0F] transition-all duration-500 cursor-pointer my-text text-white text-[16px] rounded-[4px]">
                  Visit Website
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1F2937] py-20">
        {/* Partnership Section */}
        <div className=" text-center">
          <h2 className="text-[30px] leading-[36px] my-text text-white mb-4">
            Partner With Us
          </h2>
          <p className="text-[#D1D5DB] text-[18px] leading-[28px] my-text mb-8 max-w-2xl mx-auto">
            Becoming a partner means significant visibility in the esports
            community. From brand exposure during tournaments to direct
            engagement with players and fans, sponsorship offers a profitable
            opportunity.
          </p>
          <Button className="w-[250px] h-[40px] p-0 bg-[#9D0C0F] hover:bg-[#9D0C0F]/40 hover:border-[1px] hover:border-[#9D0C0F] transition-all duration-500 cursor-pointer my-text text-white text-[16px] rounded-[4px]">
          <Handshake className="w-6 h-6 mr-2"/>
            Become a Sponsor
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
