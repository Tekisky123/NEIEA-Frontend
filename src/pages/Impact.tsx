import Layout from "@/components/Layout";
import ConfigSections from "@/components/ConfigSections";
import HeroCarousel from "@/components/HeroCarousel";
import VideoCards from "@/components/VideoCards";

const Impact = () => {

    return (
        <Layout>
            <HeroCarousel pageKey="impact" />
            <ConfigSections page="impact" />
            <VideoCards pageKey="impact" />
        </Layout>
    );
};

export default Impact;
