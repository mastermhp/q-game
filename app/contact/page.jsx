import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#9C0D0F] to-[#111827] py-24 ">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl leading-[48px] text-white mb-4">
            CONTACT US
          </h1>
          <p className="my-text text-[24px] leading-[28px] text-[#E5E7EB] max-w-3xl mx-auto mb-12">
            Got a question, idea, or partnership proposal? We'd love to hear
            from you!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-[#0C111B]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Contact Form */}
            <div className="bg-[#FFFFFF29] rounded-[8px] p-10">
              <h2 className="text-[24px] leading-[32px] my-text text-white mb-8">
                Send us a message
              </h2>

              <form className="space-y-8">
                <div>
                  <label className="block text-sm font-medium my-text text-[#D1D5DB] mb-2">
                    Name
                  </label>
                  <Input
                    type="text"
                    placeholder="Your name"
                    className="border-[#D1D5DB] text-white rounded-[6px] placeholder:text-[#D1D5DB]/50 my-text h-12"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium my-text text-[#D1D5DB] mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="Your email"
                    className="border-[#D1D5DB] text-white rounded-[6px] placeholder:text-[#D1D5DB]/50 my-text h-12"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium my-text text-[#D1D5DB] mb-2">
                    Subject
                  </label>
                  <Input
                    type="text"
                    placeholder="Subject"
                    className="border-[#D1D5DB] text-white rounded-[6px] placeholder:text-[#D1D5DB]/50 my-text h-12"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium my-text text-[#D1D5DB] mb-2">
                    Message
                  </label>
                  <Textarea
                    placeholder="Your message"
                    rows={6}
                    className="border-[#D1D5DB] text-white rounded-[6px] placeholder:text-[#D1D5DB]/50 my-text h-[140px] resize-none"
                  />
                </div>
                <Button className="w-full h-[44px] mt-8 p-0 bg-[#9D0C0F] hover:bg-[#9D0C0F]/40 hover:border-[1px] hover:border-[#9D0C0F] transition-all duration-500 cursor-pointer my-text text-white text-[16px] rounded-[4px]">
                  Submit Message
                </Button>
              </form>
            </div>

            {/* Right Side - Contact Info */}
            <div className="space-y-8">
              <div className="bg-[#FFFFFF29] rounded-[8px] p-8">
                <h2 className="text-[24px] leading-[32px] my-text text-white mb-6">
                  Get in Touch
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-13 h-13 bg-[#FFFFFF29] rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white text-[18px] leading-[28px] my-text mb-1">Email</h3>
                      <p className="text-white text-[16px] leading-[24px] my-text">support@esports.io</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-13 h-13 bg-[#FFFFFF29] rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white text-[18px] leading-[28px] my-text mb-1">Phone</h3>
                      <p className="text-white text-[16px] leading-[24px] my-text">+91 98765 43210</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-13 h-13 bg-[#FFFFFF29] rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white text-[18px] leading-[28px] my-text mb-1">Office</h3>
                      <p className="text-white text-[16px] leading-[24px] my-text">
                        Support to HQ, Bengaluru, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-[#FFFFFF29] rounded-[8px] overflow-hidden">
                <div className="aspect-video relative">
                  <img
                    src="/map.png"
                    alt="Office Location Map"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
