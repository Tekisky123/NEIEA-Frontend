import Layout from "@/components/Layout";
import ConfigSections from "@/components/ConfigSections";
import HeroCarousel from "@/components/HeroCarousel";
import VideoCards from "@/components/VideoCards";

const BlendedLearning = () => {

    return (
        <Layout>
            <HeroCarousel pageKey="blended-learning" />
            <ConfigSections page="blended-learning" />
            <VideoCards pageKey="blended-learning" />
        </Layout>
    );
};

export default BlendedLearning;
