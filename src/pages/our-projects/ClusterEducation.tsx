import Layout from "@/components/Layout";
import ConfigSections from "@/components/ConfigSections";
import HeroCarousel from "@/components/HeroCarousel";
import VideoCards from "@/components/VideoCards";

const ClusterEducation = () => {

    return (
        <Layout>
            <HeroCarousel pageKey="cluster-education" />
            <ConfigSections page="cluster-education" />
            <VideoCards pageKey="cluster-education" />
        </Layout>
    );
};

export default ClusterEducation;
