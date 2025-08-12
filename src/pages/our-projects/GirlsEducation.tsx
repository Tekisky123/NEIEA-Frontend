import Layout from "@/components/Layout";
import ConfigSections from "@/components/ConfigSections";
import HeroCarousel from "@/components/HeroCarousel";
import VideoCards from "@/components/VideoCards";

const GirlsEducation = () => {

    return (
        <Layout>
            <HeroCarousel pageKey="girls-education" />
            <ConfigSections page="girls-education" />
            <VideoCards pageKey="girls-education" />
        </Layout>
    );
};

export default GirlsEducation;
