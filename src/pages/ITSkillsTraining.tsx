import Layout from "@/components/Layout";
import ConfigSections from "@/components/ConfigSections";
import HeroCarousel from "@/components/HeroCarousel";
import VideoCards from "@/components/VideoCards";

const ITSkillsTraining = () => {

    return (
        <Layout>
            <HeroCarousel pageKey="it-skills-training" />
            <ConfigSections page="it-skills-training" />
            <VideoCards pageKey="it-skills-training" />
        </Layout>
    );
};

export default ITSkillsTraining;
