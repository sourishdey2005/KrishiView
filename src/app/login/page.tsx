'use client';

import React, { useState } from 'react';

const LoginPage: React.FC = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [error, setError] = useState('');

  const handleRequestOtp = async () => {
    setError('');
    if (!/^\d{10}$/.test(mobileNumber)) {
      setError('Please enter a valid 10-digit mobile number');
      return;
    }

    try {
      const res = await fetch('http://localhost:5000/api/request-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mobileNumber }),
      });

      if (res.ok) {
        setOtpSent(true);
      } else {
        const data = await res.json();
        setError(data.error || 'Failed to send OTP');
      }
    } catch (err) {
      setError('An unexpected error occurred');
    }
  };

  const handleVerifyOtp = async () => {
    setError('');
    if (!/^\d{6}$/.test(otp)) {
      setError('Please enter a valid 6-digit OTP');
      return;
    }

    try {
      const res = await fetch('http://localhost:5000/api/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mobileNumber, otp }),
      });

      if (res.ok) {
        // In a real app, you'd redirect to the dashboard
        alert('Login successful!');
      } else {
        const data = await res.json();
        setError(data.error || 'Invalid OTP');
      }
    } catch (err) {
      setError('An unexpected error occurred');
    }
  };


  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-dark font-display group/design-root overflow-x-hidden">
      <header className="flex justify-between items-center p-4">
        <div></div> {/* Spacer */}
        <button className="flex items-center gap-1 text-white/80 dark:text-white/80 text-sm py-1 px-2 border border-white/20 rounded-full">
          <span className="material-symbols-outlined !text-base">language</span>
          <span>English</span>
          <span className="material-symbols-outlined !text-base">arrow_drop_down</span>
        </button>
      </header>
      <main className="flex flex-col items-center justify-center px-4 pt-8 pb-4 grow">
        {/* Logo & Tagline */}
        <div className="text-center mb-8">
          <h1 className="text-white text-5xl font-headline tracking-wide">KrishiRakshak</h1>
          <p className="text-kesar-gold/80 text-base font-normal leading-normal mt-1">Ancient Wisdom, Modern Security</p>
        </div>
        {/* Role Selector */}
        <div className="w-full max-w-md">
          <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-4 text-center">Select your role to continue</h3>
          <div className="flex px-4 py-3">
            <div className="flex h-10 flex-1 items-center justify-center rounded-xl bg-white/5 p-1">
              <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 has-[:checked]:bg-primary has-[:checked]:shadow-[0_0_8px_rgba(229,115,115,0.5)] has-[:checked]:text-white text-white/80 text-sm font-medium leading-normal transition-colors duration-300">
                <span className="truncate">Bank</span>
                <input className="invisible w-0" name="role-selector" type="radio" value="Bank" />
              </label>
              <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 has-[:checked]:bg-primary has-[:checked]:shadow-[0_0_8px_rgba(229,115,115,0.5)] has-[:checked]:text-white text-white/80 text-sm font-medium leading-normal transition-colors duration-300">
                <span className="truncate">Government</span>
                <input className="invisible w-0" name="role-selector" type="radio" value="Government" />
              </label>
              <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 has-[:checked]:bg-primary has-[:checked]:shadow-[0_0_8px_rgba(229,115,115,0.5)] has-[:checked]:text-white text-white/80 text-sm font-medium leading-normal transition-colors duration-300">
                <span className="truncate">Farmer</span>
                <input defaultChecked className="invisible w-0" name="role-selector" type="radio" value="Farmer" />
              </label>
            </div>
          </div>
        </div>
        {/* Login Form Area */}
        <div className="w-full max-w-md mt-6 space-y-4 px-4">
          {/* Farmer Login */}
          <div className="space-y-4">
            {!otpSent ? (
              <>
                <div className="relative">
                  <label className="block text-sm font-medium text-white/70 mb-1" htmlFor="mobile-number">Mobile Number</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-white/50">smartphone</span>
                    <input
                      className="w-full bg-white/10 border border-white/20 rounded-lg py-2.5 pl-10 pr-4 text-white placeholder-white/40 focus:ring-2 focus:ring-kesar-gold focus:border-kesar-gold transition-colors duration-300"
                      id="mobile-number"
                      placeholder="Enter your 10-digit mobile number"
                      type="tel"
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                    />
                  </div>
                </div>
                <button
                  className="w-full bg-primary text-white font-bold py-3 px-4 rounded-lg shadow-[0_4px_14px_rgba(229,115,115,0.3)] hover:bg-primary/90 transition-all duration-300"
                  onClick={handleRequestOtp}
                >
                  Get OTP
                </button>
              </>
            ) : (
              <>
                <div className="relative">
                  <label className="block text-sm font-medium text-white/70 mb-1" htmlFor="otp">OTP</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-white/50">password</span>
                    <input
                      className="w-full bg-white/10 border border-white/20 rounded-lg py-2.5 pl-10 pr-4 text-white placeholder-white/40 focus:ring-2 focus:ring-kesar-gold focus:border-kesar-gold transition-colors duration-300"
                      id="otp"
                      placeholder="Enter your 6-digit OTP"
                      type="text"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                    />
                  </div>
                </div>
                <button
                  className="w-full bg-primary text-white font-bold py-3 px-4 rounded-lg shadow-[0_4px_14px_rgba(229,115,115,0.3)] hover:bg-primary/90 transition-all duration-300"
                  onClick={handleVerifyOtp}
                >
                  Verify OTP
                </button>
              </>
            )}
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
            <div className="flex items-center justify-center gap-2 my-4">
              <hr className="w-full border-t border-white/20" />
              <span className="text-white/60 text-sm">OR</span>
              <hr className="w-full border-t border-white/20" />
            </div>
            <button className="w-full bg-transparent border-2 border-kesar-gold text-kesar-gold font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-kesar-gold/10 transition-colors duration-300">
              <span className="material-symbols-outlined">mic</span>
              Login with Voice
            </button>
          </div>
        </div>
      </main>
      <footer className="text-center p-4">
        <div className="flex justify-center gap-6 text-sm">
          <a className="text-white/60 hover:text-white transition-colors" href="#">Help</a>
          <a className="text-white/60 hover:text-white transition-colors" href="#">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
};

export default LoginPage;
