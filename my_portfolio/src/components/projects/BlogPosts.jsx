// src/components/projects/BlogPosts.jsx
import { Calendar, ArrowRight } from 'lucide-react';

const BlogPosts = () => {
  const blogs = [
    {
      id: 1,
      title: "Best Practices for DevOps Implementation",
      date: "May 15, 2025",
      excerpt: "Explore the essential practices for successful DevOps implementation in modern organizations.",
      link: "#"
    },
    {
      id: 2,
      title: "Cloud Migration Strategies for Enterprises",
      date: "April 28, 2025",
      excerpt: "Learn about effective strategies for migrating enterprise applications to the cloud.",
      link: "#"
    },
    {
      id: 3,
      title: "Securing Your Network Infrastructure",
      date: "April 10, 2025",
      excerpt: "Discover key techniques to enhance the security of your network infrastructure.",
      link: "#"
    }
  ];
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogs.map((blog) => (
        <div key={blog.id} className="bg-gray-900 rounded-md p-6">
          <div className="flex items-center text-sm text-gray-400 mb-4">
            <Calendar size={16} className="mr-2" />
            <span>{blog.date}</span>
          </div>
          
          <h4 className="text-xl font-bold mb-3">{blog.title}</h4>
          <p className="text-gray-400 mb-5">{blog.excerpt}</p>
          
          <a href={blog.link} className="text-cyan-400 flex items-center hover:underline">
            Read More <ArrowRight size={16} className="ml-2" />
          </a>
        </div>
      ))}
    </div>
  );
};

export default BlogPosts;
