// src/components/contact/ContactForm.jsx
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    // Show success message (you can implement this)
    alert('Message sent successfully!');
  };
  
  return (
    <form onSubmit={handleSubmit} className="bg-gray-900 p-6 rounded-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-gray-400 mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-black border border-gray-800 rounded-md px-4 py-3 text-white focus:outline-none focus:border-cyan-400"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-gray-400 mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-black border border-gray-800 rounded-md px-4 py-3 text-white focus:outline-none focus:border-cyan-400"
          />
        </div>
      </div>
      
      <div className="mb-6">
        <label htmlFor="subject" className="block text-gray-400 mb-2">Subject</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full bg-black border border-gray-800 rounded-md px-4 py-3 text-white focus:outline-none focus:border-cyan-400"
        />
      </div>
      
      <div className="mb-8">
        <label htmlFor="message" className="block text-gray-400 mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="6"
          className="w-full bg-black border border-gray-800 rounded-md px-4 py-3 text-white focus:outline-none focus:border-cyan-400"
        ></textarea>
      </div>
      
      <button
        type="submit"
        className="bg-cyan-400 text-black font-medium px-8 py-3 rounded-md hover:bg-cyan-500 transition-colors"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;