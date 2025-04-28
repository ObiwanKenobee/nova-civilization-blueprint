import React from 'react';
import { Helmet } from 'react-helmet-async';

// Mock blog posts data that would eventually come from Supabase
const blogPosts = [
  {
    id: 1,
    title: "How To Build a New Civilization After Systemic Collapse",
    excerpt: "The breakdown of traditional systems presents a unique opportunity to rebuild with wisdom, justice, and farsightedness.",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    author: "Elena Vasquez",
    date: "2025-04-12",
    readTime: "9 min read",
    slug: "how-to-build-new-civilization"
  },
  {
    id: 2,
    title: "Ethical Technology: Designing AI That Honors Human Dignity",
    excerpt: "As artificial intelligence becomes increasingly powerful, we must ensure it serves humanity's highest values rather than undermining them.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80",
    author: "Marcus Chen",
    date: "2025-04-05",
    readTime: "7 min read",
    slug: "ethical-technology-ai"
  },
  {
    id: 3,
    title: "Governance Models for the Planetary Era",
    excerpt: "Traditional nation-state governance is inadequate for addressing global challenges. Here's how new governance models can transform our approach.",
    image: "https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    author: "Sophia Williams",
    date: "2025-03-29",
    readTime: "12 min read",
    slug: "governance-models-planetary-era"
  },
  {
    id: 4,
    title: "Spiritual Leadership: Guiding with Wisdom in Times of Change",
    excerpt: "In an era of transformation, leadership must evolve beyond management to embody wisdom, compassion, and cosmic perspective.",
    image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    author: "Amara Johnson",
    date: "2025-03-22",
    readTime: "8 min read",
    slug: "spiritual-leadership"
  }
];

const BlogPostCard = ({ post }) => {
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="h-48 overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 hover:text-cosmic-dark transition-colors">
          <a href={`/blog/${post.slug}`}>{post.title}</a>
        </h3>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span>{post.author}</span>
          <div className="flex items-center">
            <span className="mr-3">{post.date}</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

const FeaturedPost = ({ post }) => {
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow md:flex">
      <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-8 md:w-1/2 flex flex-col justify-center">
        <span className="text-cosmic-dark font-semibold mb-2">Featured Article</span>
        <h2 className="text-2xl font-bold mb-4 hover:text-cosmic-dark transition-colors">
          <a href={`/blog/${post.slug}`}>{post.title}</a>
        </h2>
        <p className="text-gray-600 mb-6">{post.excerpt}</p>
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span>{post.author}</span>
          <div className="flex items-center">
            <span className="mr-3">{post.date}</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

const Blog = () => {
  // Featured post is the first one in our array
  const featuredPost = blogPosts[0];
  // Other posts are the rest
  const otherPosts = blogPosts.slice(1);

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-[#f5f7ff] to-white">
      <Helmet>
        <title>Blog | PAX NOVA</title>
        <meta name="description" content="Visionary articles on ethical civilization building, spiritual leadership, and creating a just and beautiful future for humanity." />
        <meta name="keywords" content="new civilization blog, ethical technology, spiritual leadership, governance models, planetary future" />
        <link rel="canonical" href="https://paxnova.org/blog" />
      </Helmet>
      
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center cosmic-text">Visionary Perspectives</h1>
        
        <p className="text-xl text-center mb-16 max-w-3xl mx-auto">
          Deep insights and practical wisdom for building a just, ethical, and beautiful civilization
        </p>
        
        <section className="mb-16">
          <FeaturedPost post={featuredPost} />
        </section>
        
        <section>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        </section>
        
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-6">Subscribe to Our Newsletter</h2>
          <p className="mb-6 max-w-lg mx-auto">Get the latest visionary articles, resources, and updates delivered directly to your inbox.</p>
          
          <form className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cosmic-light"
              required
            />
            <button
              type="submit"
              className="bg-cosmic-gradient text-white px-6 py-3 rounded-r-lg hover:opacity-90 transition-opacity"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Blog;
