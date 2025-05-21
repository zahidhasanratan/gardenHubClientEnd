import React, { useEffect } from "react";

export const TermsOfService = () => {
  useEffect(() => {
    document.title = "Terms of Service - Garden Hub";
  }, []);

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <p className="mb-4">
        Welcome to Garden Hub! These Terms of Service govern your use of our
        website and services.
      </p>
      <p className="mb-2">
        By accessing or using our services, you agree to be bound by these
        terms. Please read them carefully.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">1. Use of Service</h2>
      <p>
        You agree to use Garden Hub responsibly and not to engage in any
        activity that may harm the platform or other users.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">2. User Content</h2>
      <p>
        Any content you submit must comply with our guidelines. We reserve the
        right to remove any inappropriate content.
      </p>
    </main>
  );
};
