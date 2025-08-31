import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  const teamMembers = [
    {
      id: 1,
      name: "Alex Chen",
      role: "CEO & Founder",
      description:
        "Former professional esports player with 10+ years of competitive gaming experience.",
      image: "/member1.jpg",
    },
    {
      id: 2,
      name: "Sarah Davis",
      role: "Head of Operations",
      description:
        "Expert in tournament organization and community management with extensive esports background.",
      image: "/member2.jpg",
    },
    {
      id: 3,
      name: "Mike Rodriguez",
      role: "Marketing Lead",
      description:
        "Passionate about connecting brands with the gaming community and growing the esports ecosystem.",
      image: "/member3.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-[#111827]">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#9C0D0F] to-[#111827] py-24 ">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl leading-[48px] text-white mb-4">
            ABOUT OUR PLATFORM
          </h1>
          <p className="my-text text-[24px] leading-[28px] text-[#E5E7EB] max-w-3xl mx-auto mb-12">
            Passion for esports. Driven by Community.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-[#1F232D]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-[30px] leading-[36px] my-text text-white mb-8 text-center">
              Our Story
            </h2>
            <div className="p-8 mb-12">
              <p className="text-white text-[18px] text-center leading-[28px] my-text mb-6">
                BeSport.io was founded with a mission to bring together players,
                teams, and fans into one thriving esports ecosystem. What
                started as a small initiative to host local tournaments has
                grown into a global platform where competitors can showcase
                their skills, spectators can enjoy live action, and brands can
                connect with the esports community.
              </p>
              <p className="text-white text-[18px] text-center leading-[28px] my-text mb-6">
                We believe esports is more than just competition—it's about
                passion, teamwork, and building a global community. Our journey
                is driven by innovation, fairness, and a love for gaming.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-[#F9FAFB0D]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-[#1F2937] rounded-lg overflow-hidden hover:bg-[#111827] hover:border-[1px] hover:border-[#1F2937] duration-700 transition-colors"
              >
                <div className="aspect-video relative">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-[20px] leading-[28px] my-text text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-[#9D0C0F] font-semibold my-text mb-3">
                    {member.role}
                  </p>
                  <p className="text-[#9CA3AF] my-text mb-4 text-[14px] leading-[20px]">
                    {member.description}
                  </p>
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
