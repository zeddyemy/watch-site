import React from "react";
import Section from "./Section";
import HeroHeader from "../sections/HeroHeader";
import About from "../sections/About";
import Collections from "../sections/Collections";
import Brands from "../sections/Brands";
import Testimonial from "../sections/Testimonial";


const Wrapper = () => {
    const heroSection = <HeroHeader key="1"/>;
	const aboutSection = <About key="1" />;
	const CollectionsSection = <Collections key="1" />;
	const brandsSection = <Brands key="1" />;
	const testimonialSection = <Testimonial key="1" />;

    
	return (
		<>
			<Section id="header" classes="py-0" components={[heroSection]} />

			<Section
				id="store"
				classes="bg-black py-8 pt-0"
				components={[aboutSection]}
			/>

			<Section
				id="collections"
				classes="py-0 pb-6"
				components={[CollectionsSection]}
			/>

			<Section
				id="brands"
				classes="py-6 bg-dark"
				components={[brandsSection]}
			/>

			<Section
				id="testimonial"
				classes=""
				components={[testimonialSection]}
			/>
		</>
	);
};

export default Wrapper;
