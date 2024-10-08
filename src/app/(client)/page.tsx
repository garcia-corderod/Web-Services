import Button from "@/components/Button";
import ProjectCards from "@/components/ProjectCards";
import "@fortawesome/fontawesome-free/css/all.css";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { AccordionVariant } from "@/components/Accordion";
import { Testimonials } from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="flex h-[87vh] flex-col items-start justify-center md:p-16 p-2 overflow-hidden max-w-full">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          autoPlay
          loop
          muted
        >
          <source src="/video-2.mp4" type="video/mp4" />
        </video>
        {/* hero content left aligned */}
        <div className="flex flex-col items-start justify-center w-full text-[#f7f7f7]">
          <h1 className="text-4xl font-bold">
            Stay Ahead with
            <br /> Visionary Edge
          </h1>
          <p className="mt-4 leading-5 md:w-1/2">
            Visionary Edge drives success with cutting-edge strategies and
            innovative solutions, blending insights and expertise to keep your
            brand ahead of trends.
          </p>
          <div className="flex mt-8 gap-4">
            <Button
              buttonSize="btn--medium"
              buttonStyle="btn--primary"
              type="button"
              text={<Link href="/contact">Get Started</Link>}
            />
            <Button
              buttonSize="btn--medium"
              buttonStyle="btn--nav"
              type="button"
              text={<Link href="/about">Learn More</Link>}
            />
          </div>
        </div>
      </section>
      <main>
        <section>About</section>
        <section></section>
        <section></section>
        <section></section>
        <section className="p-8 w-full h-[60vh]">
          <Newsletter />
        </section>
        {/* Project Cards Section */}
        <section className="max-w-full min-h-screen overflow-x-hidden">
          <h2 className="text-3xl font-bold text-center px-5 pb-5">Projects</h2>
          <p className="text-center pb-5 text-lg">
            Here are some of the projects that I have worked on
          </p>
          <ProjectCards />
          <div className="flex justify-center items-center content-center gap-4 p-5 mb-8">
            <Button
              buttonSize="btn--medium"
              buttonStyle="btn--primary"
              type="button"
              text={<Link href="/portfolio">View More</Link>}
            />
            <Button
              buttonSize="btn--medium"
              buttonStyle="btn--outline"
              type="button"
              text={<Link href="/contact">Contact</Link>}
            />
          </div>
        </section>
        {/* Testimonial Section */}
        <section className="flex max-w-full py-12">
          <div className="w-full flex items-center justify-center">
            <Testimonials />
          </div>
        </section>
        {/* FAQ Section */}
        <section className="max-w-full py-12">
          <h2 className="text-center text-3xl font-bold capitalize">
            Frequently asked questions
          </h2>
          <p className="text-center text-lg p-5 ">
            Here are some answers to some of the questions
            <br />
            that are most frequently asked
          </p>
          <div className="p-4">
            <AccordionVariant />
          </div>
        </section>
        {/* Contact Form Section */}
        <section className="flex justify-center items-center min-h-screen w-full">
          <ContactForm
            heading="Still Have a Question?"
            text="Contact us toady with any question or leave your information and we will
        get in contact with you."
          />
        </section>
      </main>
    </div>
  );
}
