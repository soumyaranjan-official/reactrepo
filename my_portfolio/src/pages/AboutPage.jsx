// src/pages/AboutPage.jsx
import Layout from '../components/layout/Layout';
import AboutContent from '../components/about/AboutContent';
import SkillsSection from '../components/about/SkillsSection';

const AboutPage = () => {
  return (
    <Layout>
      <div className="py-16">
        <AboutContent />
        <SkillsSection />
      </div>
    </Layout>
  );
};

export default AboutPage;