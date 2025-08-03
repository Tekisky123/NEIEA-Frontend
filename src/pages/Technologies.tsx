import Layout from "@/components/Layout";
import ConfigSections from "@/components/ConfigSections";
import HeroCarousel from "@/components/HeroCarousel";
import VideoCards from "@/components/VideoCards";

const Technologies = () => {

    return (
        <Layout>
            <HeroCarousel pageKey="technologies" />
            <ConfigSections page="technologies" />
            <VideoCards pageKey="technologies" />
        </Layout>
    );
};

export default Technologies;
