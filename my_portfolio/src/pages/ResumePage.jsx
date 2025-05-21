// src/pages/ResumePage.jsx
import Layout from '../components/layout/Layout';
import Education from '../components/resume/Education';
import Experience from '../components/resume/Experience';
import ResumeDownload from '../components/resume/ResumeDownload';
import SectionHeading from "../components/common/SectionHeading";

const ResumePage = () => {
  return (
    <Layout>
      <div className="py-16">
        <SectionHeading title="My Resume" subtitle="My formal education and experience" />
        
        <div className="max-w-4xl mx-auto px-4 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Education />
            <Experience />
          </div>
          
          <div className="mt-16">
            <ResumeDownload />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ResumePage;
