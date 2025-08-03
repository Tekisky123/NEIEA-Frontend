import Layout from "@/components/Layout";
import ConfigSections from "@/components/ConfigSections";
import HeroCarousel from "@/components/HeroCarousel";
import VideoCards from "@/components/VideoCards";

const AdvisoryBoard = () => {

    return (
        <Layout>
            <HeroCarousel pageKey="advisory-board" />
            <ConfigSections page="advisory-board" />
            <VideoCards pageKey="advisory-board" />
        </Layout>
    );
};

export default AdvisoryBoard;
