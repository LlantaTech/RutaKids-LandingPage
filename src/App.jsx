import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect,useRef } from "react";

import NavBar from "./components/ui/NavBar";
import Hero from './components/homepage/Hero';
import WhyRutaKids from "./components/homepage/WhyRutaKids.jsx";
import HowItWorks from "./components/homepage/HowItWorks.jsx";
import ForParents from "./components/homepage/ForParents.jsx";
import ForSchool from "./components/homepage/ForSchool.jsx";
import Contact from "./components/homepage/Contact.jsx";
import Footer from "./components/ui/Footer.jsx";
import AboutUs from "./components/homepage/AboutUs.jsx";
import AboutTheProduct from "./components/homepage/AboutTheProduct.jsx";
import LanguageSwitcher from "./components/ui/LanguageSwitcher.jsx";


const App = () => {

    gsap.registerPlugin(ScrollTrigger);
    const sectionRefs = useRef([]); // Creating a sectionRefs array

    // Scrub animation of section headings
    useEffect(() => {
        //TODO Learn useContext and useRef here
        const sectionHeadings = document.querySelectorAll(".section-heading");
        sectionHeadings.forEach((heading) => {
            const headings = heading.querySelectorAll(".heading");

            headings.forEach((individualHeading) => {
                ScrollTrigger.create({
                    trigger: heading,
                    start: "top 550px",
                    end: "bottom 550px",
                    animation: gsap.to(individualHeading, {
                        opacity: 1,
                        y: 0,
                        ease: "power4.out",
                        duration: 1,
                    }),
                    toggleActions: "play none none none",

                });
                ScrollTrigger.refresh()
            });
        });
    }, []);



    return (
        <div className="bg-white w-full  box-border">

            <NavBar sectionRefs={sectionRefs.current}/>{" "}
            <main>
                <Hero/>
                <WhyRutaKids forwardedRef={(el) => (sectionRefs.current[0] = el)}/>{" "}
                <HowItWorks/>
                <ForParents forwardedRef={(el) => (sectionRefs.current[1] = el)}/>{" "}
                <ForSchool forwardedRef={(el) => (sectionRefs.current[2] = el)}/>{" "}
                <AboutUs/>
                <AboutTheProduct forwardedRef={(el) => (sectionRefs.current[3] = el)}/>{" "}
                <Contact/>
                <LanguageSwitcher/>
            </main>
            <Footer/>
        </div>
    );
};

export default App;
