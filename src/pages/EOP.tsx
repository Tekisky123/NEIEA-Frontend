import Layout from "@/components/Layout";
import ConfigSections from "@/components/ConfigSections";
import HeroCarousel from "@/components/HeroCarousel";
import VideoCards from "@/components/VideoCards";

const EOP = () => {

    return (
        <Layout>
            <HeroCarousel pageKey="eop" />
            <ConfigSections page="eop" />
            <VideoCards pageKey="eop" />
        </Layout>
    );
};

export default EOP;
