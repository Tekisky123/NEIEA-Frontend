import Layout from "@/components/Layout";
import ConfigSections from "@/components/ConfigSections";
import HeroCarousel from "@/components/HeroCarousel";
import VideoCards from "@/components/VideoCards";

const SocialFinancial = () => {

    return (
        <Layout>
            <HeroCarousel pageKey="social-financial" />
            <ConfigSections page="social-financial" />
            <VideoCards pageKey="social-financial" />
        </Layout>
    );
};

export default SocialFinancial;
