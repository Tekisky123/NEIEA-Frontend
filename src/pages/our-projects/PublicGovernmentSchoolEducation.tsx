import Layout from "@/components/Layout";
import ConfigSections from "@/components/ConfigSections";
import HeroCarousel from "@/components/HeroCarousel";
import VideoCards from "@/components/VideoCards";

const PublicGovernmentSchoolEducation = () => {

    return (
        <Layout>
            <HeroCarousel pageKey="public-schools" />
            <ConfigSections page="public-schools" />
            <VideoCards pageKey="public-schools" />
        </Layout>
    );
};

export default PublicGovernmentSchoolEducation;
