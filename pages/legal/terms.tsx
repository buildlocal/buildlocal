import * as React from 'react';
import Head from 'next/head';

const TermsOfService: React.FC = () => {
  return (
    <>
      <Head>
        <title>Terms of Service | BuildLocal</title>
        <meta name="description" content="BuildLocal Terms of Service" />
      </Head>
      <main className="min-h-screen bg-cream-50 dark:bg-gray-900 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-cream-100 dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-beige-200 dark:border-gray-700">
            <h1 className="text-3xl font-bold text-primary-800 dark:text-cream-100 mb-6">Terms of Service</h1>
            
            <div className="space-y-6 text-primary-700 dark:text-cream-200">
              <section>
                <h2 className="text-xl font-semibold text-primary-800 dark:text-cream-100 mb-3">1. Acceptance of Terms</h2>
                <p>By accessing and using BuildLocal, you accept and agree to be bound by the terms and provision of this agreement.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-primary-800 dark:text-cream-100 mb-3">2. Use License</h2>
                <p>Permission is granted to temporarily download one copy of the materials on BuildLocal for personal, non-commercial transitory viewing only.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-primary-800 dark:text-cream-100 mb-3">3. Disclaimer</h2>
                <p>The materials on BuildLocal are provided on an 'as is' basis. BuildLocal makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-primary-800 dark:text-cream-100 mb-3">4. Limitations</h2>
                <p>In no event shall BuildLocal or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on BuildLocal, even if BuildLocal or an authorized representative has been notified orally or in writing of the possibility of such damage.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-primary-800 dark:text-cream-100 mb-3">5. Contact Information</h2>
                <p>If you have any questions about these Terms of Service, please contact us at legal@buildlocal.org</p>
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

export default TermsOfService;
