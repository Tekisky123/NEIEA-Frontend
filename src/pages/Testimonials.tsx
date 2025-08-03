import Layout from "@/components/Layout";
import ConfigSections from "@/components/ConfigSections";
import HeroCarousel from "@/components/HeroCarousel";
import VideoCards from "@/components/VideoCards";

const Testimonials = () => {

    return (
        <Layout>
            <HeroCarousel pageKey="testimonials" />
            <ConfigSections page="testimonials" />
            <VideoCards pageKey="testimonials" />
        </Layout>
    );
};

export default Testimonials;
