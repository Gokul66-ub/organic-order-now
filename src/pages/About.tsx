
import React from 'react';
import Layout from '../components/layout/Layout';

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">About Fresh Mart</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <h2 className="text-xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-700 mb-4">
            Fresh Mart was founded in 2020 with a simple mission: to make fresh, organic groceries accessible to everyone.
            What started as a small family business has grown into a trusted online marketplace for premium quality produce
            and pantry essentials.
          </p>
          <p className="text-gray-700 mb-4">
            Our founder, Sarah Johnson, was frustrated with the lack of truly fresh produce in conventional supermarkets.
            Having grown up on a farm, she knew the difference between freshly harvested vegetables and those that had
            been sitting in warehouses for weeks. She envisioned a service that would connect local farmers directly with
            consumers, ensuring maximum freshness and supporting sustainable farming practices.
          </p>
          <p className="text-gray-700">
            Today, Fresh Mart partners with over 100 organic farms and artisanal producers across the country to bring
            you the best selection of sustainably sourced groceries delivered straight to your door.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <h2 className="text-xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            At Fresh Mart, we believe that everyone deserves access to nutritious, sustainably grown food.
            Our mission is to revolutionize grocery shopping by providing:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>The freshest organic produce sourced directly from local farms</li>
            <li>A convenient online shopping experience with fast, reliable delivery</li>
            <li>Fair prices that make organic food accessible to more households</li>
            <li>Support for sustainable farming practices that protect our environment</li>
            <li>Transparent information about where your food comes from</li>
          </ul>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Our Values</h2>
            <ul className="space-y-4">
              <li>
                <h3 className="font-medium text-primary">Freshness First</h3>
                <p className="text-gray-700">We prioritize freshness above all else, working with local farms to minimize the time between harvest and delivery.</p>
              </li>
              <li>
                <h3 className="font-medium text-primary">Environmental Stewardship</h3>
                <p className="text-gray-700">We support sustainable farming practices and minimize our carbon footprint through eco-friendly packaging and operations.</p>
              </li>
              <li>
                <h3 className="font-medium text-primary">Community Support</h3>
                <p className="text-gray-700">We believe in strengthening local food systems and supporting the farmers who grow our food.</p>
              </li>
              <li>
                <h3 className="font-medium text-primary">Transparency</h3>
                <p className="text-gray-700">We provide clear information about sourcing, pricing, and business practices.</p>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Our Commitment</h2>
            <p className="text-gray-700 mb-4">
              We're committed to making a positive impact on our food system and environment. This means:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Sourcing 100% organic produce whenever possible</li>
              <li>Zero tolerance for harmful pesticides and GMOs</li>
              <li>Fair partnerships with farmers and producers</li>
              <li>Reducing food waste through careful inventory management</li>
              <li>Using recyclable, compostable, or reusable packaging</li>
              <li>Supporting food access initiatives in underserved communities</li>
              <li>Transparency in our supply chain and business practices</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Join Our Journey</h2>
          <p className="text-gray-700 mb-4">
            We're grateful to have you as part of the Fresh Mart community. Together, we can build a more sustainable,
            healthy, and delicious future. Whether you're a long-time customer or just discovering us, thank you for
            supporting our mission.
          </p>
          <p className="text-gray-700">
            Have questions or feedback? We'd love to hear from you! Contact our team at support@freshmart.com or
            call us at (555) 123-4567.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
