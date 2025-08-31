import Header from "@/components/header"
import Footer from "@/components/footer"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#0C111B]">
      <Header />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-[36px] leading-[40px] my-text text-white mb-8">Privacy Policy</h1>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Table of Contents */}
            <div className="lg:col-span-1">
              <div className="bg-[#E2E2E221] rounded-lg p-6 sticky top-8">
                <h2 className="text-lg my-text text-white mb-6">Table of Contents</h2>
                <nav className="space-y-2">
                  <a href="#introduction" className="block my-text text-slate-300 hover:text-[#9D0C0F] text-sm">
                    Introduction
                  </a>
                  <a href="#data-we-collect" className="block my-text text-slate-300 hover:text-[#9D0C0F] text-sm">
                    Data We Collect
                  </a>
                  <a href="#how-we-use-data" className="block my-text text-slate-300 hover:text-[#9D0C0F] text-sm">
                    How We Use Data
                  </a>
                  <a href="#your-rights" className="block my-text text-slate-300 hover:text-[#9D0C0F] text-sm">
                    Your Rights
                  </a>
                  <a href="#cookies-policy" className="block my-text text-slate-300 hover:text-[#9D0C0F] text-sm">
                    Cookies Policy
                  </a>
                  <a href="#sharing-disclosure" className="block my-text text-slate-300 hover:text-[#9D0C0F] text-sm">
                    Sharing & Disclosure
                  </a>
                  <a href="#contact-information" className="block my-text text-slate-300 hover:text-[#9D0C0F] text-sm">
                    Contact Information
                  </a>
                </nav>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-3 space-y-8">
              <section id="introduction">
                <h2 className="text-2xl font-bold text-white mb-4 my-text">1. Introduction</h2>
                <p className="text-slate-300 leading-relaxed mb-4 my-text">
                  We value your privacy and are committed to protecting your personal information. This Privacy Policy
                  explains how we collect, use, and safeguard your data when you interact with our platform. By using
                  our services, you agree to the practices described in this policy.
                </p>
              </section>

              <section id="data-we-collect">
                <h2 className="text-2xl font-bold text-white mb-4 my-text">2. Data We Collect</h2>
                <p className="text-slate-300 leading-relaxed mb-4 my-text">
                  We may collect the following types of information:
                </p>
                <ul className="text-slate-300 space-y-2 ml-6 my-text">
                  <li className="list-disc">
                    Personal Information: Name, email address, phone number, billing details, and login credentials.
                  </li>
                  <li className="list-disc">
                    Usage Information: Pages visited, time spent, clicks, and interactions with our platform.
                  </li>
                  <li className="list-disc">
                    Technical Information: IP address, browser type, device information, and location data.
                  </li>
                  <li className="list-disc">Communication Information: Messages, subscriptions, and order history.</li>
                </ul>
              </section>

              <section id="how-we-use-data">
                <h2 className="text-2xl font-bold text-white mb-4 my-text">3. How We Use Data</h2>
                <p className="text-slate-300 leading-relaxed mb-4 my-text">We use your data to:</p>
                <ul className="text-slate-300 space-y-2 ml-6 my-text">
                  <li className="list-disc">Provide and improve our services.</li>
                  <li className="list-disc">Process payments and manage subscriptions.</li>
                  <li className="list-disc">Personalize user experience with recommendations and content.</li>
                  <li className="list-disc">Send updates, newsletters, and promotional offers.</li>
                  <li className="list-disc">Ensure platform security and prevent fraud.</li>
                </ul>
              </section>

              <section id="sharing-disclosure">
                <h2 className="text-2xl font-bold text-white mb-4 my-text">4. Sharing & Disclosure</h2>
                <p className="text-slate-300 leading-relaxed mb-4 my-text">
                  We do not sell your data to third parties. However, we may share information with:
                </p>
                <ul className="text-slate-300 space-y-2 ml-6 my-text">
                  <li className="list-disc">
                    Service Providers: Payment gateways, analytics tools, or cloud hosting providers.
                  </li>
                  <li className="list-disc">
                    Legal Authorities: When required to comply with applicable laws or respond to legal requests.
                  </li>
                  <li className="list-disc">
                    Business Transfers: In case of mergers, acquisitions, or sale of assets.
                  </li>
                </ul>
              </section>

              <section id="your-rights">
                <h2 className="text-2xl font-bold text-white mb-4 my-text">5. Your Rights</h2>
                <p className="text-slate-300 leading-relaxed mb-4 my-text">You have the right to:</p>
                <ul className="text-slate-300 space-y-2 ml-6 my-text">
                  <li className="list-disc">Access and request a copy of your personal data.</li>
                  <li className="list-disc">Correct or update inaccurate information.</li>
                  <li className="list-disc">Request deletion of your data ("Right to be Forgotten").</li>
                  <li className="list-disc">Withdraw consent for marketing communications.</li>
                  <li className="list-disc">File a complaint with your local data protection authority.</li>
                </ul>
              </section>

              <section id="cookies-policy">
                <h2 className="text-2xl font-bold text-white mb-4 my-text">6. Cookies Policy</h2>
                <p className="text-slate-300 leading-relaxed mb-4 my-text">Our platform uses cookies to:</p>
                <ul className="text-slate-300 space-y-2 ml-6 my-text">
                  <li className="list-disc">Remember user preferences and login sessions.</li>
                  <li className="list-disc">Analyze traffic and improve functionality.</li>
                  <li className="list-disc">Deliver personalized ads and promotions.</li>
                </ul>
                <p className="text-slate-300 leading-relaxed mt-4 my-text">
                  You can disable cookies in your browser settings, but some features may not function properly without
                  them.
                </p>
              </section>

              <section id="contact-information">
                <h2 className="text-2xl font-bold text-white mb-4 my-text">7. Contact Information</h2>
                <p className="text-slate-300 leading-relaxed my-text">
                  If you have any questions about our Privacy Policy or how we handle your data, please contact our Data
                  Protection Officer at privacy@esports.com or through the contact form on our website.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
