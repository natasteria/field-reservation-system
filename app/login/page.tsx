'use client';
import Link from 'next/link';

const Login = () => {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      {/* Main Card */}
      <div className="w-full max-w-[400px] rounded-xl border border-gray-200 bg-white shadow-sm">
        
        {/* Header */}
        <div className="flex flex-col space-y-1.5 p-6 pb-4">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-semibold leading-none tracking-tight">
              Login to your account
            </h3>
            <button className="text-sm font-medium text-black hover:underline">
              <Link href="./../sign-up">SignUp</Link>
            </button>
          </div>
          <p className="text-sm text-gray-500">
            Enter your email below to login to your account
          </p>
        </div>

        {/* Form Content */}
        <div className="p-6 pt-0">
          <div className="grid gap-4">
            
            {/* Email Field */}
            <div className="grid gap-2">
              <label 
                htmlFor="email" 
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="m@example.com"
                className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>

            {/* Password Field */}
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <label 
                  htmlFor="password" 
                  className="text-sm font-medium leading-none"
                >
                  Password
                </label>
                <button className="text-sm text-gray-500 hover:text-black underline-offset-4 hover:underline">
                  Forgot your password?
                </button>
              </div>
              <input
                id="password"
                type="password"
                className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
              />
            </div>

            {/* Buttons */}
            <div className="grid gap-2 pt-2">
              <button className="inline-flex items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-black/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2">
                Login
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;