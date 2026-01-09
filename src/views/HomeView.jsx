import HeroSection from "../ui/HeroSection";
import PartCategories from "../ui/PartCategories";
import TrustSection from "../ui/TrustSection";
import NewsFeed from "../ui/NewsFeed";
import CompanyOverview from "../ui/CompanyOverview";

export default function HomeView() {
  return (
    <>
      <HeroSection />
      <PartCategories />
      <CompanyOverview />
      <NewsFeed />
      <TrustSection />
    </>
  );
}
