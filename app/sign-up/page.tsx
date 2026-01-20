'use client';
import Link from 'next/link';

const SignUp = () => {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      {/* Main Card */}
      <div className="w-full max-w-[400px] rounded-xl border border-gray-200 bg-white shadow-sm">
        
        {/* Header */}
        <div className="flex flex-col space-y-1.5 p-6 pb-4">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-semibold leading-none tracking-tight">
              Create an account
            </h3>
            <button className="text-sm font-medium text-black hover:underline">
              <Link href="./../login">Login</Link>
            </button>
          </div>
          <p className="text-sm text-gray-500">
            Enter your details below to create your account
          </p>
        </div>

        {/* Form Content */}
        <div className="p-6 pt-0">
          <div className="grid gap-4">
            
            {/* Name Field */}
            <div className="grid gap-2">
              <label 
                htmlFor="name" 
                className="text-sm font-medium leading-none"
              >
                Full Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="John Doe"
                className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
              />
            </div>

            {/* Phone Number Field */}
            <div className="grid gap-2">
              <label 
                htmlFor="phone" 
                className="text-sm font-medium leading-none"
              >
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="+251 912345678"
                className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
              />
            </div>

            {/* Email Field */}
            <div className="grid gap-2">
              <label 
                htmlFor="email" 
                className="text-sm font-medium leading-none"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="m@example.com"
                className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
              />
            </div>

            {/* Password Field */}
            <div className="grid gap-2">
              <label 
                htmlFor="password" 
                className="text-sm font-medium leading-none"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
              />
            </div>

            {/* Submit Button */}
            <div className="grid gap-2 pt-2">
              <button className="inline-flex items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-black/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2">
                Create Account
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;