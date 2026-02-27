import React from 'react';
import { Container } from '../../../../components/Layout';
import { GradientText } from '../../../../components/Button/GradientText';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const blogs = [
  {
    id: 1,
    title: "GST on Rental Income @18: Residential and Commercial Property",
    url: "/blog/gst-on-rental-income",
    image: "https://dynamic.realestateindia.com/blog_images/20240328171109_image1_350x350.jpg",
    excerpt: "Introduction GST on Sell is a very confusing topic, generally, people are confused about whet...",
    author: "Biranchi Narayan Mishra",
    authorUrl: "/blog/author/biranchi-narayan-mishra",
    category: "Property Finance",
    categoryUrl: "/blog/category/property-finance"
  },
  {
    id: 2,
    title: "Mohali Inviting Buyers for the Smart Investment in Real Estate",
    url: "/blog/mohali-inviting-buyers-for-the-smart-investment-in-real-estate",
    image: "https://dynamic.realestateindia.com/blog_images/20210731114917_image1_350x350.jpg",
    excerpt: "A good location is best known for its infrastructural developments happening around. Punjab is a...",
    author: "Biranchi Narayan Mishra",
    authorUrl: "/blog/author/biranchi-narayan-mishra",
    category: "Property Dealer",
    categoryUrl: "/blog/category/property-dealer"
  },
  {
    id: 3,
    title: "MCGM Property Tax - Pay MCGM (BMC) Property Tax Online 2024",
    url: "/blog/bmc-property-tax",
    image: "https://dynamic.realestateindia.com/blog_images/20240930164010_image1_350x350.jpg",
    excerpt: "Property tax contributes a large portion of the budget allocated to provide civic amenities in any c...",
    author: "Biranchi Narayan Mishra",
    authorUrl: "/blog/author/biranchi-narayan-mishra",
    category: "Property Tax",
    categoryUrl: "/blog/category/property-tax"
  },
  {
    id: 4,
    title: "Advantages of Free property ads posting sites to buyers and sellers",
    url: "/blog/advantages-of-free-property-ads-posting-sites-to-buyers-and-sellers",
    image: "https://dynamic.realestateindia.com/blog_images/20201023180401_image1_350x350.jpg",
    excerpt: "Earlier, property buying and selling was a critical affair. The owners and buyer were completely...",
    author: "Biranchi Narayan Mishra",
    authorUrl: "/blog/author/biranchi-narayan-mishra",
    category: "Property for Sell",
    categoryUrl: "/blog/category/property-for-sell"
  }
];

const Blogs = () => {
  const navigate = useNavigate();

  const handleBlogClick = (url) => {
    navigate(url);
  };

  const handleSeeAllBlogs = () => {
    navigate('/blog');
  };

  return (
    <section className="py-12 bg-white">
      <Container>
        <div className="text-center lg:text-start mb-8">
          <GradientText>
            Explore Real Estate Blogs
          </GradientText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="group cursor-pointer bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200"
              onClick={() => handleBlogClick(blog.url)}
            >
              {/* Blog Image */}
              <div className="blog_img">
                <img
                  loading="lazy"
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Blog Details */}
              <div className="p-4">
                <h3 className="blog-title text-lg font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                  <a
                    href={blog.url}
                    onClick={(e) => e.stopPropagation()}
                    className="hover:text-primary transition-colors duration-300"
                  >
                    {blog.title}
                  </a>
                </h3>

                <p className="blog-sd text-sm text-gray-600 mb-3 line-clamp-3">
                  {blog.excerpt}
                </p>

                <div className="blog-meta text-xs text-gray-500">
                  <span className="posted-by">
                    by{' '}
                    <a
                      href={blog.authorUrl}
                      className="text-primary hover:underline"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {blog.author}
                    </a>
                  </span>
                  {' | '}
                  <span className="posted-from">
                    in{' '}
                    <a
                      href={blog.categoryUrl}
                      className="text-primary hover:underline"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {blog.category}
                    </a>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See All Blogs Button */}
        <div className="text-center">
 <button
  onClick={handleSeeAllBlogs}
  className="cursor-pointer inline-flex items-center gap-2 px-6 py-3 border border-red-500 bg-white text-black hover:bg-black hover:text-white hover:border-transparent rounded-lg transition-colors duration-300 font-medium"
>
  See all Blog
  <FaLongArrowAltRight className="transition-transform duration-300 group-hover:translate-x-1" />
</button>

        </div>

        {/* About Section */}
        <div className="w-full mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center lg:text-start">
            Buy and Sell Properties in Ahmedabad
          </h2>
          <p className="text-gray-600 leading-relaxed text-start mx-auto">
            Welcome to ABC.com. We have been serving the needs of the real estate industry in Ahmedabad since 2007. Our single platform is designed to meet the needs of buyers, sellers and brokers of Ahmedabad properties. Our success is attributed to our understanding of the needs of our customers and consistently working to meet those needs utilizing innovative e-commerce solutions. If you are interested in purchasing a home or locate a rental property, you can search Ahmedabad properties using our portal to find the right residential property or commercial property to fit your needs. Search Ahmedabad properties in our enormous database by the type of property, the location and other attributes to quickly locate properties that meet your exact specifications. Do you have a commercial property or residential property to sell or sell? You can list your rental property or real estate on our website. Our real estate portal is structured to provide wider exposure, so your property will be seen by as many buyers as possible for a fast response to your listing. There is no charge for listing your property, just register with us and enter details and images of your property to get started.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Blogs;