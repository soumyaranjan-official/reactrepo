// src/pages/ContactPage.jsx
import Layout from '../components/layout/Layout';

import ContactForm from '../components/contact/ContactForm';
import SectionHeading from "../components/common/SectionHeading";

const ContactPage = () => {
  return (
    <Layout>
      <div className="py-16">
        <SectionHeading title="Contact Me" subtitle="Get in touch" />
        
        <div className="max-w-4xl mx-auto px-4 mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
            
            <div className="bg-gray-900 p-6 rounded-md h-fit">
              <h4 className="text-xl font-bold mb-6">Contact Information</h4>
              
              <div className="space-y-4">
                <div>
                  <h5 className="text-cyan-400 mb-1">Email</h5>
                  <p className="text-gray-300">contact@example.com</p>
                </div>
                
                <div>
                  <h5 className="text-cyan-400 mb-1">Phone</h5>
                  <p className="text-gray-300">+91 123 456 7890</p>
                </div>
                
                <div>
                  <h5 className="text-cyan-400 mb-1">Location</h5>
                  <p className="text-gray-300">Bengaluru, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;