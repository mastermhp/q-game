import Header from "@/components/header"
import Hero from "@/components/hero"
import FeaturedTournaments from "@/components/featured-tournaments"
import PopularGames from "@/components/popular-games"
import ExpertCourses from "@/components/expert-courses"
import Sponsors from "@/components/sponsors"
import JoinAffiliate from "@/components/join-affiliate"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <Hero />
      <FeaturedTournaments />
      <PopularGames />
      <ExpertCourses />
      <Sponsors />
      <JoinAffiliate/>
      <Footer />
    </div>
  )
}
