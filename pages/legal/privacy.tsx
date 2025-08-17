import * as React from 'react';
import Head from 'next/head';

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | BuildLocal</title>
        <meta name="description" content="BuildLocal Privacy Policy" />
      </Head>
      <main className="min-h-screen bg-cream-50 dark:bg-gray-900 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-cream-100 dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-beige-200 dark:border-gray-700">
            <h1 className="text-3xl font-bold text-primary-800 dark:text-cream-100 mb-6">Privacy Policy</h1>
            
            <div className="space-y-6 text-primary-700 dark:text-cream-200">
              <section>
                <h2 className="text-xl font-semibold text-primary-800 dark:text-cream-100 mb-3">Information We Collect</h2>
                <p>We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, participate in our community, or contact us.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-primary-800 dark:text-cream-100 mb-3">How We Use Your Information</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To provide, maintain, and improve our services</li>
                  <li>To process transactions and send related information</li>
                  <li>To send you technical notices and support messages</li>
                  <li>To communicate with you about news and events</li>
                  <li>To monitor and analyze trends and usage</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-primary-800 dark:text-cream-100 mb-3">Information Sharing</h2>
                <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-primary-800 dark:text-cream-100 mb-3">Data Security</h2>
                <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-primary-800 dark:text-cream-100 mb-3">Your Rights</h2>
                <p>You have the right to access, update, or delete your personal information. You may also opt out of certain communications from us.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-primary-800 dark:text-cream-100 mb-3">Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us at privacy@buildlocal.org</p>
              </section>
            </div>

            <div className="mt-8 pt-6 border-t border-beige-300 dark:border-gray-600">
              <p className="text-sm text-primary-500 dark:text-cream-400">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default PrivacyPolicy;
