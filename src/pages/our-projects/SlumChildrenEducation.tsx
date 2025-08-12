import Layout from "@/components/Layout";
import ConfigSections from "@/components/ConfigSections";
import HeroCarousel from "@/components/HeroCarousel";
import VideoCards from "@/components/VideoCards";

const SlumChildrenEducation = () => {

    return (
        <Layout>
            <HeroCarousel pageKey="slum-children" />
            <ConfigSections page="slum-children" />
            <VideoCards pageKey="slum-children" />
        </Layout>
    );
};

export default SlumChildrenEducation;
