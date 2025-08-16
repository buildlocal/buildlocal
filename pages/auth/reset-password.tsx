import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Eye, EyeOff, Lock, CheckCircle, AlertCircle, Check, X } from 'lucide-react';

const ResetPassword: React.FC = () => {
  const router = useRouter();
  const { token } = router.query;
  
  const [formData, setFormData] = React.useState({
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [error, setError] = React.useState('');
  const [tokenValid, setTokenValid] = React.useState<boolean | null>(null);

  // Password validation
  const passwordRequirements = [
    { text: 'At least 8 characters', met: formData.password.length >= 8 },
    { text: 'Contains uppercase letter', met: /[A-Z]/.test(formData.password) },
    { text: 'Contains lowercase letter', met: /[a-z]/.test(formData.password) },
    { text: 'Contains number', met: /\d/.test(formData.password) },
    { text: 'Contains special character', met: /[!@#$%^&*(),.?":{}|<>]/.test(formData.password) }
  ];

  const isPasswordValid = passwordRequirements.every(req => req.met);
  const passwordsMatch = formData.password === formData.confirmPassword && formData.confirmPassword !== '';

  // Check token validity on component mount
  React.useEffect(() => {
    if (token) {
      // Simulate token validation
      setTimeout(() => {
        // For demo purposes, assume token is valid if it's present
        setTokenValid(true);
      }, 1000);
    }
  }, [token]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isPasswordValid || !passwordsMatch) {
      setError('Please ensure your password meets all requirements and passwords match.');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      // Simulate API call for password reset
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate potential errors
      if (Math.random() < 0.1) { // 10% chance of error for demo
        throw new Error('Password reset failed. Please try again.');
      }

      setIsSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Loading state for token validation
  if (tokenValid === null) {
    return (
      <>
        <Head>
          <title>Reset Password | OpenTokyo</title>
          <meta name="description" content="Reset your OpenTokyo account password" />
        </Head>
        <main className="min-h-screen bg-cream-50 dark:bg-gray-900 flex items-center justify-center py-12 px-4">
          <div className="max-w-md w-full space-y-8">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto"></div>
              <p className="mt-4 text-primary-600 dark:text-cream-300">Validating reset link...</p>
            </div>
          </div>
        </main>
      </>
    );
  }

  // Invalid token state
  if (tokenValid === false) {
    return (
      <>
        <Head>
          <title>Invalid Reset Link | OpenTokyo</title>
          <meta name="description" content="Invalid password reset link" />
        </Head>
        <main className="min-h-screen bg-cream-50 dark:bg-gray-900 flex items-center justify-center py-12 px-4">
          <div className="max-w-md w-full space-y-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-red-500 rounded-xl flex items-center justify-center">
                  <AlertCircle className="w-8 h-8 text-white" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-primary-800 dark:text-cream-100">Invalid reset link</h2>
              <p className="mt-2 text-primary-600 dark:text-cream-200">
                This password reset link is invalid or has expired.
              </p>
            </div>

            <div className="bg-cream-100 dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-beige-200 dark:border-gray-700 text-center">
              <p className="text-primary-600 dark:text-cream-300 mb-4">
                Please request a new password reset link to continue.
              </p>
              <Link
                href="/auth/forgot-password"
                className="inline-block w-full py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-400 transition-colors"
              >
                Request new reset link
              </Link>
            </div>
          </div>
        </main>
      </>
    );
  }

  // Success state
  if (isSuccess) {
    return (
      <>
        <Head>
          <title>Password Reset Successful | OpenTokyo</title>
          <meta name="description" content="Your password has been successfully reset" />
        </Head>
        <main className="min-h-screen bg-cream-50 dark:bg-gray-900 flex items-center justify-center py-12 px-4">
          <div className="max-w-md w-full space-y-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-primary-800 dark:text-cream-100">Password reset successful</h2>
              <p className="mt-2 text-primary-600 dark:text-cream-200">
                Your password has been successfully updated.
              </p>
            </div>

            <div className="bg-cream-100 dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-beige-200 dark:border-gray-700 text-center">
              <p className="text-primary-600 dark:text-cream-300 mb-4">
                You can now sign in with your new password.
              </p>
              <Link
                href="/auth/login"
                className="inline-block w-full py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-400 transition-colors"
              >
                Sign in to your account
              </Link>
            </div>
          </div>
        </main>
      </>
    );
  }

  // Reset password form
  return (
    <>
      <Head>
        <title>Reset Password | OpenTokyo</title>
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
            <h2 className="text-3xl font-bold text-primary-800 dark:text-cream-100">Reset your password</h2>
            <p className="mt-2 text-primary-600 dark:text-cream-200">
              Enter your new password below.
            </p>
          </div>

          {/* Reset Form */}
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="bg-cream-100 dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-beige-200 dark:border-gray-700">
              <div className="space-y-5">
                {/* Error Message */}
                {error && (
                  <div className="bg-red-50 dark:bg-red-900/50 border border-red-200 dark:border-red-800 rounded-lg p-4">
                    <div className="flex">
                      <AlertCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      <p className="text-sm text-red-700 dark:text-red-300">{error}</p>
                    </div>
                  </div>
                )}

                {/* New Password Field */}
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-primary-700 dark:text-cream-200 mb-2">
                    New Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-primary-400 dark:text-cream-400" />
                    </div>
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={formData.password}
                      onChange={handleInputChange}
                      className="block w-full pl-10 pr-12 py-3 border border-beige-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-primary-900 dark:text-cream-100 placeholder-primary-400 dark:placeholder-cream-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="Enter your new password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5 text-primary-400 dark:text-cream-400 hover:text-primary-600 dark:hover:text-cream-200" />
                      ) : (
                        <Eye className="h-5 w-5 text-primary-400 dark:text-cream-400 hover:text-primary-600 dark:hover:text-cream-200" />
                      )}
                    </button>
                  </div>

                  {/* Password Requirements */}
                  {formData.password && (
                    <div className="mt-3 space-y-2">
                      {passwordRequirements.map((req, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          {req.met ? (
                            <Check className="w-4 h-4 text-green-500" />
                          ) : (
                            <X className="w-4 h-4 text-red-500" />
                          )}
                          <span className={`text-xs ${req.met ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                            {req.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Confirm Password Field */}
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-primary-700 dark:text-cream-200 mb-2">
                    Confirm New Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-primary-400 dark:text-cream-400" />
                    </div>
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? 'text' : 'password'}
                      required
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="block w-full pl-10 pr-12 py-3 border border-beige-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-primary-900 dark:text-cream-100 placeholder-primary-400 dark:placeholder-cream-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="Confirm your new password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-5 w-5 text-primary-400 dark:text-cream-400 hover:text-primary-600 dark:hover:text-cream-200" />
                      ) : (
                        <Eye className="h-5 w-5 text-primary-400 dark:text-cream-400 hover:text-primary-600 dark:hover:text-cream-200" />
                      )}
                    </button>
                  </div>
                  {formData.confirmPassword && (
                    <div className="mt-2 flex items-center space-x-2">
                      {passwordsMatch ? (
                        <>
                          <Check className="w-4 h-4 text-green-500" />
                          <span className="text-xs text-green-600 dark:text-green-400">Passwords match</span>
                        </>
                      ) : (
                        <>
                          <X className="w-4 h-4 text-red-500" />
                          <span className="text-xs text-red-600 dark:text-red-400">Passwords don't match</span>
                        </>
                      )}
                    </div>
                  )}
                </div>

                {/* Reset Button */}
                <div>
                  <button
                    type="submit"
                    disabled={isLoading || !isPasswordValid || !passwordsMatch}
                    className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-400 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                  >
                    {isLoading ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Updating password...
                      </div>
                    ) : (
                      'Update password'
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Back to Login */}
            <div className="text-center">
              <Link 
                href="/auth/login" 
                className="text-primary-500 hover:text-primary-400 font-medium transition-colors"
              >
                Back to login
              </Link>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default ResetPassword;
