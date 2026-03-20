import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Experience } from '@/components/Experience';
import { Projects } from '@/components/Projects';
import { FeaturedBlogs } from '@/components/FeaturedBlogs';
import { ContactForm } from '@/components/ContactForm';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <FeaturedBlogs />
      <ContactForm />
    </>
  );
}
