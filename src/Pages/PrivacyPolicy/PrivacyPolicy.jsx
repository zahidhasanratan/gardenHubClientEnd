import React, { useEffect } from "react";

export const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Privacy Policy - Garden Hub";
  }, []);

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">
        Your privacy is important to us. This policy explains how we collect,
        use, and protect your information.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">
        1. Information We Collect
      </h2>
      <p>
        We collect information you provide directly, such as your name and
        email, as well as data about your usage of the site.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">
        2. How We Use Information
      </h2>
      <p>
        We use your information to improve our services, communicate with you,
        and for security purposes.
      </p>
    </main>
  );
};
