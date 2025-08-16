import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Mail, ArrowLeft, Send, CheckCircle } from 'lucide-react';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <>
        <Head>
          <title>Check Your Email | OpenTokyo</title>
          <meta name="description" content="Password reset email sent" />
        </Head>
        <main className="min-h-screen bg-cream-50 dark:bg-gray-900 flex items-center justify-center py-12 px-4">
          <div className="max-w-md w-full space-y-8">
            {/* Success State */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-primary-800 dark:text-cream-100">Check your email</h2>
              <p className="mt-2 text-primary-600 dark:text-cream-200">
                We've sent a password reset link to
              </p>
              <p className="font-semibold text-primary-700 dark:text-cream-100">{email}</p>
            </div>

            <div className="bg-cream-100 dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-beige-200 dark:border-gray-700">
              <div className="text-center space-y-4">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto">
                  <Send className="w-6 h-6 text-primary-500" />
                </div>
                <p className="text-primary-600 dark:text-cream-300">
                  Click the link in the email to reset your password. If you don't see it, check your spam folder.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-primary-500 hover:text-primary-400 font-medium text-sm transition-colors"
                  >
                    Didn't receive the email? Try again
                  </button>
                </div>
              </div>
            </div>

            {/* Back to Login */}
            <div className="text-center">
              <Link 
                href="/auth/login" 
                className="inline-flex items-center text-primary-500 hover:text-primary-400 font-medium transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to login
              </Link>
            </div>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Forgot Password | OpenTokyo</title>
        <meta name="description" content="Reset your OpenTokyo account password" />
      </Head>
      <main className="min-h-screen bg-cream-50 dark:bg-gray-900 flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full space-y-8">
          {/* Header */}
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-primary-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-2xl">OT</span>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-primary-800 dark:text-cream-100">Forgot your password?</h2>
            <p className="mt-2 text-primary-600 dark:text-cream-200">
              No worries! Enter your email and we'll send you reset instructions.
            </p>
          </div>

          {/* Reset Form */}
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="bg-cream-100 dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-beige-200 dark:border-gray-700">
              <div className="space-y-5">
                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary-700 dark:text-cream-200 mb-2">
                    Email address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-primary-400 dark:text-cream-400" />
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="block w-full pl-10 pr-3 py-3 border border-beige-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-primary-900 dark:text-cream-100 placeholder-primary-400 dark:placeholder-cream-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <p className="mt-2 text-xs text-primary-500 dark:text-cream-400">
                    We'll send reset instructions to this email address.
                  </p>
                </div>

                {/* Reset Button */}
                <div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-400 disabled:bg-primary-300 disabled:cursor-not-allowed transition-colors"
                  >
                    {isLoading ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                      'Send reset instructions'
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Back to Login */}
            <div className="text-center">
              <Link 
                href="/auth/login" 
                className="inline-flex items-center text-primary-500 hover:text-primary-400 font-medium transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to login
              </Link>
            </div>
          </form>

          {/* Help Section */}
          <div className="bg-beige-100 dark:bg-gray-800 rounded-lg p-6 border border-beige-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-primary-800 dark:text-cream-100 mb-3">Need help?</h3>
            <div className="space-y-2 text-sm text-primary-600 dark:text-cream-300">
              <p>• Check your spam or junk folder for the reset email</p>
              <p>• Make sure you're using the email associated with your account</p>
              <p>• If you still can't access your account, contact our support team</p>
            </div>
            <div className="mt-4">
              <Link 
                href="/contact" 
                className="text-primary-500 hover:text-primary-400 font-medium text-sm transition-colors"
              >
                Contact Support →
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ForgotPassword;
