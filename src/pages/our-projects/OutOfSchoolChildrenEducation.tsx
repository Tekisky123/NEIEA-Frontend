import Layout from "@/components/Layout";
import ConfigSections from "@/components/ConfigSections";
import HeroCarousel from "@/components/HeroCarousel";
import VideoCards from "@/components/VideoCards";

const OutOfSchoolChildrenEducation = () => {

    return (
        <Layout>
            <HeroCarousel pageKey="out-of-school" />
            <ConfigSections page="out-of-school" />
            <VideoCards pageKey="out-of-school" />
        </Layout>
    );
};

export default OutOfSchoolChildrenEducation;
