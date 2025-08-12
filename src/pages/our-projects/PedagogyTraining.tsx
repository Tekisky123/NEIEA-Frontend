import Layout from "@/components/Layout";
import ConfigSections from "@/components/ConfigSections";
import HeroCarousel from "@/components/HeroCarousel";
import VideoCards from "@/components/VideoCards";

const PedagogyTraining = () => {

    return (
        <Layout>
            <HeroCarousel pageKey="pedagogy-training" />
            <ConfigSections page="pedagogy-training" />
            <VideoCards pageKey="pedagogy-training" />
        </Layout>
    );
};

export default PedagogyTraining;
