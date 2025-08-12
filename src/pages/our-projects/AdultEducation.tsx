import Layout from "@/components/Layout";
import ConfigSections from "@/components/ConfigSections";
import HeroCarousel from "@/components/HeroCarousel";
import VideoCards from "@/components/VideoCards";

const AdultEducation = () => {

    return (
        <Layout>
            <HeroCarousel pageKey="adult-education" />
            <ConfigSections page="adult-education" />
            <VideoCards pageKey="adult-education" />
        </Layout>
    );
};

export default AdultEducation;
