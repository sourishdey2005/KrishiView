
import React from 'react';

const DashboardPage: React.FC = () => {
  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-text-main-light dark:text-text-main-dark">
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="fixed top-0 left-0 right-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
          <div className="flex items-center p-4">
            <div className="flex size-10 shrink-0 items-center justify-center">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAmHvRZM7nDvH_kI92Byjsf8V5FdLiFZqE_CoSZXsiH9xpVUNzKG-b3dnFGvr8QrfOw4RghNanZt4lRqwWdsN0zyE04QyT9mEU_DOw_8srPS05tm1GfjrQBGzFftb-Y0khy9dDRIALPht7chtW0b3sO86Cj0bpppSyKGOOngHzDOk79x7O4pie2GpSRofP_IsyOP8PCqdSnq9XDpj_2YESFStettBLuHKzJOcqE2ECjXFVd27j2VREWOA18VmJbbR8JGhWOumcXAQEB")' }}
              ></div>
            </div>
            <h1 className="text-xl font-bold leading-tight tracking-[-0.015em] flex-1 text-center text-primary-brown dark:text-primary-green">KrishiRakshak</h1>
            <div className="flex w-auto items-center justify-end">
              <button className="flex items-center gap-1 text-primary-brown dark:text-primary-green text-base font-bold leading-normal tracking-[0.015em] shrink-0">
                <span>Eng</span>
                <span className="material-symbols-outlined text-xl">language</span>
              </button>
            </div>
          </div>
        </div>
        <main className="pt-20 pb-28">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-4 p-4">
            <div className="flex flex-col gap-2 pb-3 items-center text-center">
              <div className="w-full bg-card-bg-light dark:bg-card-bg-dark flex items-center justify-center bg-center bg-no-repeat aspect-square bg-cover rounded-xl shadow-md">
                <span className="material-symbols-outlined text-4xl text-primary-brown dark:text-primary-green">account_balance_wallet</span>
              </div>
              <div>
                <p className="text-base font-medium leading-normal">My Loans</p>
                <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm font-normal leading-normal">2 Active</p>
              </div>
            </div>
            <div className="flex flex-col gap-2 pb-3 items-center text-center">
              <div className="w-full bg-card-bg-light dark:bg-card-bg-dark flex items-center justify-center bg-center bg-no-repeat aspect-square bg-cover rounded-xl shadow-md">
                <span className="material-symbols-outlined text-4xl text-primary-brown dark:text-primary-green">potted_plant</span>
              </div>
              <div>
                <p className="text-base font-medium leading-normal">New Loan</p>
                <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm font-normal leading-normal">Apply Now</p>
              </div>
            </div>
            <div className="flex flex-col gap-2 pb-3 items-center text-center">
              <div className="w-full bg-card-bg-light dark:bg-card-bg-dark flex items-center justify-center bg-center bg-no-repeat aspect-square bg-cover rounded-xl shadow-md">
                <span className="material-symbols-outlined text-4xl text-primary-brown dark:text-primary-green">manage_search</span>
              </div>
              <div>
                <p className="text-base font-medium leading-normal">Track Status</p>
                <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm font-normal leading-normal">1 Pending</p>
              </div>
            </div>
          </div>
          <h2 className="text-primary-brown dark:text-primary-green text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Active Loans</h2>
          <div className="flex flex-col gap-4 px-4">
            <div className="flex flex-col items-stretch justify-start rounded-xl bg-card-bg-light dark:bg-card-bg-dark shadow-md overflow-hidden">
              <div
                className="w-full bg-center bg-no-repeat aspect-[2/1] bg-cover"
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDAYTCnq4O6h4Xfqbee4VkqmsQW2z9SRmsUc53HVS4iRT2OKStTmb1VufivzZuUNohRkd0W7tiVpUskh6UETo8y4pOV6S91mSJJQceax5T8OCfgcxurovDBaJ7HOS7beiz083QmD1zz34EYDZ7wDQX7jirPiNJtXw5FXFk8-X5QhfpFoIoHNh-RGuXzAgUC-V9IWMPq7LNYZLQL4TyCJmO0AGaDqTRmYGuyL13pN21JcD_oi6OcfZgn66EqMUchPl1rtbnRK8FyCS_z")' }}
              ></div>
              <div className="flex w-full flex-col items-stretch justify-center gap-2 p-4">
                <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm font-normal leading-normal">Loan ID: KRLN012345</p>
                <p className="text-lg font-bold leading-tight tracking-[-0.015em]">₹50,000 Crop Loan</p>
                <div className="flex items-end gap-3 justify-between">
                  <div className="flex flex-col gap-1">
                    <p className="text-base font-normal leading-normal">EMI: ₹4,500</p>
                    <p className="text-base font-normal leading-normal">Due: 15 July 2024</p>
                  </div>
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal">
                    <span className="truncate">Pay Now</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch justify-start rounded-xl bg-card-bg-light dark:bg-card-bg-dark shadow-md overflow-hidden">
              <div
                className="w-full bg-center bg-no-repeat aspect-[2/1] bg-cover"
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDDYOW3MLD3o8_-XFV0v1W5F_7TQI7Fr9lMIIQ92QkK47RQzyPfRLYuU5h_LAVUBzmetbQu-2wSDNRBqCSgN5-7yUOby8_V840p1RGLdHUKeDpxe4NdeY5R-gj3isd1Ri2Tmo5h2KXGcjeh6tY-86T-0Roa34C6aYf_158enM-L8m7zHHqoRtgoZnTnGl73UBApfBNOsuX66baQhapqBDANAfXrlXD_wzc6mvZ3VSewlTuirf3uBTgiY4jSVdA_QAzbYWSSA2VvUoVN")' }}
              ></div>
              <div className="flex w-full flex-col items-stretch justify-center gap-2 p-4">
                <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm font-normal leading-normal">Loan ID: KRLN012346</p>
                <p className="text-lg font-bold leading-tight tracking-[-0.015em]">₹1,20,000 Tractor Loan</p>
                <div className="flex items-end gap-3 justify-between">
                  <div className="flex flex-col gap-1">
                    <p className="text-base font-normal leading-normal">EMI: ₹10,000</p>
                    <p className="text-base font-normal leading-normal">Due: 20 July 2024</p>
                  </div>
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal">
                    <span className="truncate">Pay Now</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <h2 className="text-primary-brown dark:text-primary-green text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-8">Application Status</h2>
          <div className="px-4">
            <div className="rounded-xl p-4 bg-card-bg-light dark:bg-card-bg-dark shadow-md">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <p className="text-lg font-bold leading-tight tracking-[-0.015em]">Equipment Loan</p>
                  <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm font-normal">ID: KRAP987654</p>
                </div>
                <div className="text-sm font-medium text-primary bg-primary/20 px-2 py-1 rounded-full">Verifying</div>
              </div>
              <div className="flex items-center space-x-2 w-full text-xs text-center text-text-secondary-light dark:text-text-secondary-dark">
                <div className="flex-1">
                  <div className="w-full h-2 rounded-full bg-primary mb-1"></div>
                  <p className="font-medium text-primary-brown dark:text-primary-green">Submitted</p>
                </div>
                <div className="flex-1">
                  <div className="relative w-full h-2 rounded-full bg-primary/30 dark:bg-primary/20 mb-1">
                    <div className="absolute top-0 left-0 h-2 rounded-l-full bg-primary w-1/2"></div>
                  </div>
                  <p className="font-medium text-primary-brown dark:text-primary-green">Verification</p>
                </div>
                <div className="flex-1">
                  <div className="w-full h-2 rounded-full bg-primary/30 dark:bg-primary/20 mb-1"></div>
                  <p>Approval</p>
                </div>
                <div className="flex-1">
                  <div className="w-full h-2 rounded-full bg-primary/30 dark:bg-primary/20 mb-1"></div>
                  <p>Disbursal</p>
                </div>
              </div>
            </div>
          </div>
        </main>
        <button className="fixed z-40 bottom-24 right-4 flex items-center justify-center size-14 rounded-full bg-accent-terracotta text-white shadow-lg">
          <span className="material-symbols-outlined text-3xl">support_agent</span>
        </button>
        <nav className="fixed bottom-0 left-0 right-0 bg-card-bg-light/90 dark:bg-card-bg-dark/90 backdrop-blur-sm border-t border-black/10 dark:border-white/10 shadow-t-lg">
          <div className="flex justify-around items-center h-16">
            <a className="flex flex-col items-center justify-center w-full text-primary" href="#">
              <span className="material-symbols-outlined">payments</span>
              <span className="text-xs font-medium">Loans</span>
            </a>
            <a className="flex flex-col items-center justify-center w-full text-text-secondary-light dark:text-text-secondary-dark" href="#">
              <span className="material-symbols-outlined">partly_cloudy_day</span>
              <span className="text-xs font-medium">Weather</span>
            </a>
            <a className="flex flex-col items-center justify-center w-full text-text-secondary-light dark:text-text-secondary-dark" href="#">
              <span className="material-symbols-outlined">monitoring</span>
              <span className="text-xs font-medium">Market</span>
            </a>
            <a className="flex flex-col items-center justify-center w-full text-text-secondary-light dark:text-text-secondary-dark" href="#">
              <span className="material-symbols-outlined">person</span>
              <span className="text-xs font-medium">Profile</span>
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default DashboardPage;
