import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Eye, EyeOff, Mail, Lock, User, Github, Check, X } from 'lucide-react';

const SignUp: React.FC = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
  });

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isPasswordValid && passwordsMatch && formData.acceptTerms) {
      // Handle signup logic here
      console.log('Signup attempt:', formData);
    }
  };

  return (
    <>
      <Head>
        <title>Sign Up | OpenTokyo</title>
        <meta name="description" content="Create your OpenTokyo account" />
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
            <h2 className="text-3xl font-bold text-primary-800 dark:text-cream-100">Join OpenTokyo</h2>
            <p className="mt-2 text-primary-600 dark:text-cream-200">Create your account to get started</p>
          </div>

          {/* Signup Form */}
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="bg-cream-100 dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-beige-200 dark:border-gray-700">
              <div className="space-y-5">
                {/* Name Fields */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-primary-700 dark:text-cream-200 mb-2">
                      First name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-primary-400 dark:text-cream-400" />
                      </div>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="block w-full pl-10 pr-3 py-3 border border-beige-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-primary-900 dark:text-cream-100 placeholder-primary-400 dark:placeholder-cream-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                        placeholder="First name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-primary-700 dark:text-cream-200 mb-2">
                      Last name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="block w-full px-3 py-3 border border-beige-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-primary-900 dark:text-cream-100 placeholder-primary-400 dark:placeholder-cream-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="Last name"
                    />
                  </div>
                </div>

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
                      value={formData.email}
                      onChange={handleInputChange}
                      className="block w-full pl-10 pr-3 py-3 border border-beige-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-primary-900 dark:text-cream-100 placeholder-primary-400 dark:placeholder-cream-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-primary-700 dark:text-cream-200 mb-2">
                    Password
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
                      placeholder="Create a password"
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
                    Confirm Password
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
                      placeholder="Confirm your password"
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

                {/* Terms and Conditions */}
                <div className="flex items-start">
                  <input
                    id="acceptTerms"
                    name="acceptTerms"
                    type="checkbox"
                    required
                    checked={formData.acceptTerms}
                    onChange={handleInputChange}
                    className="mt-1 h-4 w-4 text-primary-500 focus:ring-primary-400 border-beige-300 dark:border-gray-600 rounded"
                  />
                  <label htmlFor="acceptTerms" className="ml-2 block text-sm text-primary-600 dark:text-cream-300">
                    I agree to the{' '}
                    <Link href="/legal/terms" className="text-primary-500 hover:text-primary-400 font-medium">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link href="/legal/privacy" className="text-primary-500 hover:text-primary-400 font-medium">
                      Privacy Policy
                    </Link>
                  </label>
                </div>

                {/* Signup Button */}
                <div>
                  <button
                    type="submit"
                    disabled={!isPasswordValid || !passwordsMatch || !formData.acceptTerms}
                    className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-400 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                  >
                    Create Account
                  </button>
                </div>

                {/* Divider */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-beige-300 dark:border-gray-600" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-cream-100 dark:bg-gray-800 text-primary-500 dark:text-cream-300">Or continue with</span>
                  </div>
                </div>

                {/* Social Signup */}
                <div>
                  <button
                    type="button"
                    className="group relative w-full flex justify-center items-center py-3 px-4 border border-beige-300 dark:border-gray-600 text-sm font-medium rounded-lg text-primary-700 dark:text-cream-200 bg-white dark:bg-gray-700 hover:bg-beige-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-400 transition-colors"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    Sign up with GitHub
                  </button>
                </div>
              </div>
            </div>

            {/* Login Link */}
            <div className="text-center">
              <p className="text-primary-600 dark:text-cream-300">
                Already have an account?{' '}
                <Link href="/auth/login" className="font-medium text-primary-500 hover:text-primary-400 transition-colors">
                  Sign in here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default SignUp;
