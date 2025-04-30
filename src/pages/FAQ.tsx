
import React, { useState } from 'react';
import Layout from '../components/layout/Layout';

const FAQ = () => {
  const [activeSection, setActiveSection] = useState<string | null>('ordering');
  
  const faqs = {
    ordering: [
      {
        question: 'How do I place an order?',
        answer: 'To place an order, browse our products, add items to your cart, and proceed to checkout. You\'ll need to create an account or log in, provide your shipping information, and select a payment method.'
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, and cash on delivery for eligible areas.'
      },
      {
        question: 'Can I modify or cancel my order?',
        answer: 'You can modify or cancel your order within 1 hour of placing it. To do so, go to your Orders page and select the order you wish to change. After this window, please contact our customer service team for assistance.'
      },
      {
        question: 'Is there a minimum order amount?',
        answer: 'There is no minimum order amount, but orders under $35 may incur a small delivery fee depending on your location.'
      }
    ],
    delivery: [
      {
        question: 'What are your delivery hours?',
        answer: 'We deliver from 8:00 AM to 9:00 PM, 7 days a week. You can select a 2-hour delivery window during checkout.'
      },
      {
        question: 'How much is delivery?',
        answer: 'Delivery is free on orders over $35. For smaller orders, a $4.99 delivery fee applies.'
      },
      {
        question: 'How do you ensure freshness during delivery?',
        answer: 'We use insulated packaging and ice packs for temperature-sensitive items. Our local delivery network ensures that groceries reach you quickly, often within hours of being harvested or prepared.'
      },
      {
        question: 'What areas do you deliver to?',
        answer: 'We currently deliver to most major metropolitan areas and surrounding suburbs. You can check if we deliver to your area by entering your ZIP code on our website.'
      }
    ],
    products: [
      {
        question: 'Are all your products organic?',
        answer: 'While we prioritize organic products, not all items are certified organic. We clearly label all organic products and provide detailed information about sourcing for all items.'
      },
      {
        question: 'How do you select your suppliers?',
        answer: 'We have strict criteria for our suppliers, including sustainable farming practices, fair labor standards, quality of produce, and reliability. We personally visit and vet all farms and production facilities.'
      },
      {
        question: 'What if I\'m not satisfied with the quality of my product?',
        answer: 'We have a 100% satisfaction guarantee. If you\'re not happy with any product, we\'ll refund your purchase or replace the item, no questions asked.'
      },
      {
        question: 'Do you sell local products?',
        answer: 'Yes! We prioritize local producers whenever possible. Each product description includes information about its origin so you can see exactly where your food comes from.'
      }
    ],
    account: [
      {
        question: 'How do I create an account?',
        answer: 'Click the "Sign Up" button in the top right corner of the website. Enter your email address and create a password. You\'ll also need to provide some basic information for delivery purposes.'
      },
      {
        question: 'Can I use Fresh Mart without creating an account?',
        answer: 'You need an account to place orders, but you can browse products without signing in.'
      },
      {
        question: 'How do I reset my password?',
        answer: 'Click on "Login," then "Forgot Password." Enter your email address, and we\'ll send you instructions to reset your password.'
      },
      {
        question: 'Can I have multiple delivery addresses?',
        answer: 'Yes, you can save multiple delivery addresses in your account settings and select the appropriate one during checkout.'
      }
    ],
    returns: [
      {
        question: 'What is your return policy?',
        answer: 'If you\'re not satisfied with a product, you can report the issue within 24 hours of delivery, and we\'ll process a refund or replacement.'
      },
      {
        question: 'How do I report a problem with my order?',
        answer: 'Go to your Orders page, select the problematic order, and click "Report an Issue." Alternatively, contact our customer service team directly.'
      },
      {
        question: 'Do I need to return the items I\'m not satisfied with?',
        answer: 'Generally, no. For most perishable items, we don\'t require you to return the product. For non-perishable items, we may occasionally request a return, which we\'ll arrange at no cost to you.'
      },
      {
        question: 'How long does it take to process a refund?',
        answer: 'Refunds are usually processed within 1-2 business days, but it may take 5-7 business days for the amount to appear in your account, depending on your bank.'
      }
    ]
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>
        
        {/* FAQ Categories */}
        <div className="mb-8 flex flex-wrap gap-2">
          <button
            onClick={() => setActiveSection('ordering')}
            className={`px-4 py-2 rounded-full ${
              activeSection === 'ordering'
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Ordering
          </button>
          <button
            onClick={() => setActiveSection('delivery')}
            className={`px-4 py-2 rounded-full ${
              activeSection === 'delivery'
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Delivery
          </button>
          <button
            onClick={() => setActiveSection('products')}
            className={`px-4 py-2 rounded-full ${
              activeSection === 'products'
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Products
          </button>
          <button
            onClick={() => setActiveSection('account')}
            className={`px-4 py-2 rounded-full ${
              activeSection === 'account'
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Account
          </button>
          <button
            onClick={() => setActiveSection('returns')}
            className={`px-4 py-2 rounded-full ${
              activeSection === 'returns'
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Returns & Refunds
          </button>
        </div>
        
        {/* FAQ Accordion */}
        <div className="space-y-4">
          {activeSection && faqs[activeSection as keyof typeof faqs].map((faq, index) => (
            <details key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <summary className="px-6 py-4 flex justify-between items-center cursor-pointer">
                <h3 className="text-lg font-medium">{faq.question}</h3>
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 py-4 border-t border-gray-200">
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
        
        {/* Contact */}
        <div className="mt-12 bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Still Have Questions?</h2>
          <p className="text-gray-700 mb-6">
            If you couldn't find the answer to your question, our customer service team is here to help.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Call Us</h3>
              <p className="text-gray-700">(555) 123-4567</p>
              <p className="text-gray-500 text-sm">Mon-Fri, 8am-8pm</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Email Us</h3>
              <p className="text-gray-700">support@freshmart.com</p>
              <p className="text-gray-500 text-sm">We'll respond within 24 hours</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Live Chat</h3>
              <p className="text-gray-700">Chat with our support team</p>
              <p className="text-gray-500 text-sm">Available 24/7</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FAQ;
