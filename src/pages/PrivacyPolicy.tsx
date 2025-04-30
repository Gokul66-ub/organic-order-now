
import React from 'react';
import Layout from '../components/layout/Layout';

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <p className="text-gray-700 mb-4">
            Last Updated: April 30, 2025
          </p>
          <p className="text-gray-700 mb-4">
            At Fresh Mart, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose,
            and safeguard your information when you visit our website or use our services. Please read this privacy policy carefully.
            If you do not agree with the terms of this privacy policy, please do not access the site.
          </p>
        </div>
        
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">1. Information We Collect</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-primary mb-2">Personal Data</h3>
                <p className="text-gray-700">
                  We may collect personal information that you voluntarily provide to us when you register on the website,
                  express interest in obtaining information about us or our products, or otherwise contact us. The personal
                  information we collect may include:
                </p>
                <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-1">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Postal address</li>
                  <li>Phone number</li>
                  <li>Credit card or payment information (through secure payment processors)</li>
                  <li>Password</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium text-primary mb-2">Automatically Collected Data</h3>
                <p className="text-gray-700">
                  When you visit our website, we may automatically collect certain information about your device, including:
                </p>
                <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-1">
                  <li>IP address</li>
                  <li>Browser type</li>
                  <li>Operating system</li>
                  <li>Referring URLs</li>
                  <li>Pages viewed</li>
                  <li>Time spent on pages</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">
              We may use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Processing and fulfilling your orders</li>
              <li>Creating and maintaining your account</li>
              <li>Responding to your inquiries and customer service requests</li>
              <li>Sending you order confirmations and updates</li>
              <li>Providing you with product or service information</li>
              <li>Sending you marketing and promotional communications (with your consent)</li>
              <li>Improving our website, products, and services</li>
              <li>Analyzing website usage and trends</li>
              <li>Protecting against fraud and unauthorized transactions</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">3. Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 mb-4">
              We use cookies and similar tracking technologies to track activity on our website and store certain information.
              Cookies are files with a small amount of data that may include an anonymous unique identifier. They are sent to
              your browser from a website and stored on your device.
            </p>
            <p className="text-gray-700">
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do
              not accept cookies, you may not be able to use some portions of our site.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">4. Data Security</h2>
            <p className="text-gray-700 mb-4">
              We have implemented appropriate technical and organizational security measures designed to protect the security of
              any personal information we process. However, please also remember that we cannot guarantee that the internet itself
              is 100% secure.
            </p>
            <p className="text-gray-700">
              Although we will do our best to protect your personal information, transmission of personal information to and from
              our website is at your own risk. You should only access our services within a secure environment.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">5. Data Retention</h2>
            <p className="text-gray-700">
              We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy
              policy, unless a longer retention period is required or permitted by law. When we have no ongoing legitimate business
              need to process your personal information, we will either delete or anonymize it.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">6. Your Privacy Rights</h2>
            <p className="text-gray-700 mb-4">
              You have certain rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>The right to access the personal information we have about you</li>
              <li>The right to request that we correct any personal information we have about you</li>
              <li>The right to request that we delete any personal information we have about you</li>
              <li>The right to opt-out of marketing communications</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">7. Changes to This Privacy Policy</h2>
            <p className="text-gray-700">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy
              periodically for any changes.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">8. Contact Us</h2>
            <p className="text-gray-700">
              If you have questions or comments about this Privacy Policy, please contact us at:
            </p>
            <div className="mt-4">
              <p className="text-gray-700">Fresh Mart, Inc.</p>
              <p className="text-gray-700">123 Organic Lane</p>
              <p className="text-gray-700">Freshville, CA 94105</p>
              <p className="text-gray-700">Email: privacy@freshmart.com</p>
              <p className="text-gray-700">Phone: (555) 123-4567</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
