// src/pages/ProjectsPage.jsx
import Layout from '../components/layout/Layout';
import ProjectGrid from '../components/projects/ProjectGrid';
import BlogPosts from '../components/projects/BlogPosts';
import SectionHeading from "../components/common/SectionHeading";

const ProjectsPage = () => {
  return (
    <Layout>
      <div className="py-16">
        <SectionHeading title="Projects & Blogs" subtitle="My work and articles" />
        
        <div className="max-w-6xl mx-auto px-4 mt-12">
          <h3 className="text-2xl font-bold mb-6">Featured Projects</h3>
          <ProjectGrid />
          
          <h3 className="text-2xl font-bold mb-6 mt-16">Recent Blog Posts</h3>
          <BlogPosts />
        </div>
      </div>
    </Layout>
  );
};

export default ProjectsPage;