import FeatureSection from "../components/featureSection/FeatureSection";
import HeroText from "../components/HeroText";
import Navbar from "../components/Navbar";
import TestimonialSection from "../components/testimonialSection/TestimonialSection";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

import illustrationIntro from "../img/illustration-intro.svg";


export default function PageLayout() {
    return (
        <div className="min-w-[340px]">
            <header id="header" className="container mx-auto px-7 mb-4">
                <Navbar />
            </header>

            <section id="hero-section" className="container mx-auto px-7 mb-8 py-4">
                <div id="hero-container" className="flex flex-col-reverse items-center justify-center text-center md:flex-row md:text-left">
                    <HeroText />

                    <div className="max-w-xs">
                        <img src={ illustrationIntro } alt="illustration-intro" className="w-full" />
                    </div>
                </div>
            </section>

            <section id="feature-section" className="container mx-auto px-7 mb-14">
                <FeatureSection />
            </section>

            <section id="testimonial-section" className="container mx-auto px-7 mb-10">
                <TestimonialSection />
            </section>

            <section className="bg-brightRed bg-sample px-7 py-5 pb-12">
                <CTA />
            </section>

            <footer className="bg-veryDarkBlue mx-auto px-7 py-10">
                <Footer />
                <p className="text-brightRedSupLight text-center md:text-right md:-mt-20">Copyright &copy; 2022, All Rights Reserved</p>
            </footer>
        </div>
    )
}