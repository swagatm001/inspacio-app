import { ProjectsHero } from "@/components/Hero";
import { projectConstants } from "@/constants/projects";
import { ContactForm } from "@/components/Contact";
import { Banner } from "@/components/Banner";
import { FAQ } from "@/components/FAQ";

const ContactUs = () => {
  return (
    <div>
      <ProjectsHero html={projectConstants.hero.text} />
      <FAQ />
      <ContactForm />
      <Banner />
    </div>
  );
};

export default ContactUs;
