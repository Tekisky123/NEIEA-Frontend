import Layout from "@/components/Layout";
import ConfigSections from "@/components/ConfigSections";
import HeroCarousel from "@/components/HeroCarousel";
import VideoCards from "@/components/VideoCards";

const MadarsaEducation = () => {

    return (
        <Layout>
            <HeroCarousel pageKey="madarsa-education" />
            <ConfigSections page="madarsa-education" />
            <VideoCards pageKey="madarsa-education" />
        </Layout>
    );
};

export default MadarsaEducation;
