import Layout from "@/components/Layout";
import ConfigSections from "@/components/ConfigSections";
import HeroCarousel from "@/components/HeroCarousel";
import VideoCards from "@/components/VideoCards";

const TeachersTraining = () => {

    return (
        <Layout>
            <HeroCarousel pageKey="teachers-training" />
            <ConfigSections page="teachers-training" />
            <VideoCards pageKey="teachers-training" />
        </Layout>
    );
};

export default TeachersTraining;
