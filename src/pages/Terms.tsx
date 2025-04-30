
import React from 'react';
import Layout from '../components/layout/Layout';

const Terms = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Terms & Conditions</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <p className="text-gray-700 mb-4">
            Last Updated: April 30, 2025
          </p>
          <p className="text-gray-700 mb-4">
            These Terms and Conditions ("Terms") govern your use of the Fresh Mart website and services.
            By accessing or using our website, you agree to be bound by these Terms. If you disagree with
            any part of the Terms, you may not access the website or use our services.
          </p>
        </div>
        
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">1. Account Registration</h2>
            <p className="text-gray-700 mb-4">
              To use certain features of our website, you may be required to register for an account. You agree to provide accurate,
              current, and complete information during the registration process and to update such information to keep it accurate,
              current, and complete.
            </p>
            <p className="text-gray-700">
              You are responsible for safeguarding the password that you use to access the website and for any activities or actions
              under your password. We encourage you to use strong passwords (passwords that use a combination of upper and lower case
              letters, numbers, and symbols) with your account.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">2. Products and Orders</h2>
            <p className="text-gray-700 mb-4">
              All products are subject to availability. We reserve the right to discontinue any product at any time and to limit the
              quantity of any product that you order.
            </p>
            <p className="text-gray-700 mb-4">
              Product images on our website are for illustrative purposes only. The actual product may vary slightly from the image
              shown. We make every effort to display as accurately as possible the colors, features, specifications, and details of the
              products available on the website. However, we cannot guarantee that your computer's display of any color will be accurate.
            </p>
            <p className="text-gray-700">
              Once you place an order, you will receive an email confirmation with your order details. We reserve the right to refuse or
              cancel any order for any reason, including but not limited to product availability, errors in product or pricing information,
              or problems identified by our payment processors.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">3. Pricing and Payment</h2>
            <p className="text-gray-700 mb-4">
              All prices are shown in US dollars and are subject to change without notice. We strive to provide accurate product and
              pricing information, but errors may occur. If we discover an error in the price of products you have ordered, we will
              inform you as soon as possible and give you the option of reconfirming your order at the correct price or canceling it.
            </p>
            <p className="text-gray-700">
              Payment for all orders must be made by credit card, PayPal, or other methods specified at the time of checkout. By
              submitting a payment, you represent and warrant that you are authorized to use the designated payment method and authorize
              us to charge your order to that method.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">4. Delivery and Shipping</h2>
            <p className="text-gray-700 mb-4">
              Delivery times are provided as estimates only and commencing from the date of shipping, rather than the date of order.
              We shall not be liable for any losses, liabilities, costs, damages, charges, or expenses arising out of late delivery.
            </p>
            <p className="text-gray-700">
              You are responsible for providing complete and accurate shipping information. We are not liable for any delays or issues
              arising from incorrect or incomplete delivery information.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">5. Returns and Refunds</h2>
            <p className="text-gray-700 mb-4">
              We stand behind the quality of our products. If you are not satisfied with your purchase for any reason, please contact
              us within 24 hours of delivery. We may offer a replacement or refund at our discretion.
            </p>
            <p className="text-gray-700">
              For perishable items, we generally do not require a return. For non-perishable items, we may request that you return the
              item in its original condition. If a return is requested, we will provide instructions and cover any return shipping costs.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">6. Intellectual Property</h2>
            <p className="text-gray-700 mb-4">
              The website and its original content, features, and functionality are owned by Fresh Mart and are protected by international
              copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>
            <p className="text-gray-700">
              You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish,
              download, store, or transmit any of the material on our website without our prior written consent.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">7. User Conduct</h2>
            <p className="text-gray-700 mb-4">
              You agree not to use the website:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>In any way that violates any applicable federal, state, local, or international law or regulation</li>
              <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail," "chain letter," "spam," or any other similar solicitation</li>
              <li>To impersonate or attempt to impersonate Fresh Mart, a Fresh Mart employee, another user, or any other person or entity</li>
              <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the website, or which may harm Fresh Mart or users of the website</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">8. Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              In no event shall Fresh Mart, its directors, employees, partners, agents, suppliers, or affiliates, be liable for any
              indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data,
              use, goodwill, or other intangible losses, resulting from:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Your access to or use of or inability to access or use the website</li>
              <li>Any conduct or content of any third party on the website</li>
              <li>Any content obtained from the website</li>
              <li>Unauthorized access, use or alteration of your transmissions or content</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">9. Changes to Terms</h2>
            <p className="text-gray-700">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we
              will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will
              be determined at our sole discretion.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">10. Contact Us</h2>
            <p className="text-gray-700">
              If you have any questions about these Terms, please contact us at:
            </p>
            <div className="mt-4">
              <p className="text-gray-700">Fresh Mart, Inc.</p>
              <p className="text-gray-700">123 Organic Lane</p>
              <p className="text-gray-700">Freshville, CA 94105</p>
              <p className="text-gray-700">Email: legal@freshmart.com</p>
              <p className="text-gray-700">Phone: (555) 123-4567</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Terms;
