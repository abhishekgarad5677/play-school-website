import AboutSection from "../components/AboutSection";
import Banner from "../components/Banner";
import ContactSection from "../components/ContactSection";
import CurriculumSection from "../components/CurriculumSection";
import FooterSection from "../components/FooterSection";
import SubscriptionSection from "../components/SubscriptionSection";
import UspSection from "../components/UspSection";


const DefaultLayout = () => {
    return (
        <div>
            <Banner />
            <AboutSection />
            <UspSection />
            <CurriculumSection />
            <SubscriptionSection />
            <ContactSection />
            {/* <FooterSection /> */}
        </div>
    )
}

export default DefaultLayout;