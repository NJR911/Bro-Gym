import Pricing from "../components/Layouts/pricing";
import Cards from "../components/landing page/cards";
import Header from "../components/landing page/header";
import Section from "../components/landing page/section";
import Testimonial from "../components/landing page/testimonial";


export default function Home(){

    return(
        <>
            <Header />
            <Cards />
            <Section />
            <Pricing />
            <Testimonial />
        </>
    )
}
