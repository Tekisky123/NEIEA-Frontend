import Layout from "@/components/Layout";
import ConfigSections from "@/components/ConfigSections";
import HeroCarousel from "@/components/HeroCarousel";
import VideoCards from "@/components/VideoCards";

const Mission = () => {

    return (
        <Layout>
            <HeroCarousel pageKey="vision-mission" />
            <ConfigSections page="vision-mission" />
            <VideoCards pageKey="vision-mission" />
        </Layout>
    );
};

export default Mission;
