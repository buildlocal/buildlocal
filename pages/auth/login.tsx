import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Eye, EyeOff, Mail, Lock, User, Github } from 'lucide-react';

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', { email, password });
  };

  return (
    <>
      <Head>
        <title>Login | BuildLocal</title>
        <meta name="description" content="Login to your BuildLocal account" />
      </Head>
      <main className="min-h-screen bg-cream-50 dark:bg-gray-900 flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full space-y-8">
          {/* Header */}
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-primary-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-2xl">BL</span>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-primary-800 dark:text-cream-100">Welcome back</h2>
            <p className="mt-2 text-primary-600 dark:text-cream-200">Sign in to your BuildLocal account</p>
          </div>

          {/* Login Form */}
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
                      autoComplete="current-password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="block w-full pl-10 pr-12 py-3 border border-beige-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-primary-900 dark:text-cream-100 placeholder-primary-400 dark:placeholder-cream-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="Enter your password"
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
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-primary-500 focus:ring-primary-400 border-beige-300 dark:border-gray-600 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-primary-600 dark:text-cream-300">
                      Remember me
                    </label>
                  </div>

                  <div className="text-sm">
                    <Link href="/auth/forgot-password" className="font-medium text-primary-500 hover:text-primary-400 transition-colors">
                      Forgot password?
                    </Link>
                  </div>
                </div>

                {/* Login Button */}
                <div>
                  <button
                    type="submit"
                    className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-400 transition-colors"
                  >
                    Sign in
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

                {/* Social Login */}
                <div>
                  <button
                    type="button"
                    className="group relative w-full flex justify-center items-center py-3 px-4 border border-beige-300 dark:border-gray-600 text-sm font-medium rounded-lg text-primary-700 dark:text-cream-200 bg-white dark:bg-gray-700 hover:bg-beige-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-400 transition-colors"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    Sign in with GitHub
                  </button>
                </div>
              </div>
            </div>

            {/* Sign Up Link */}
            <div className="text-center">
              <p className="text-primary-600 dark:text-cream-300">
                Don't have an account?{' '}
                <Link href="/auth/signup" className="font-medium text-primary-500 hover:text-primary-400 transition-colors">
                  Sign up here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default Login;
