// src/pages/HobbiesPage.jsx
import Layout from '../components/layout/Layout';
import HobbiesList from '../components/hobbies/HobbiesList';
import SectionHeading from "../components/common/SectionHeading";

const HobbiesPage = () => {
  return (
    <Layout>
      <div className="py-16">
        <SectionHeading title="My Hobbies" subtitle="What I enjoy in my free time" />
        
        <div className="max-w-6xl mx-auto px-4 mt-12">
          <HobbiesList />
        </div>
      </div>
    </Layout>
  );
};

export default HobbiesPage;
