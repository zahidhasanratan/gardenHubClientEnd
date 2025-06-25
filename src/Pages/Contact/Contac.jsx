import React from "react";

export const Contac = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-green-700 mb-6">📬 Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="text-gray-700 space-y-4">
          <p className="text-lg">
            We'd love to hear from you! Whether you have a gardening tip to
            share, a question, or just want to say hi—reach out any time.
          </p>

          <div>
            <h2 className="text-xl font-semibold text-green-600 mb-1">Email</h2>
            <p>support@gardenhub.com</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-green-600 mb-1">Phone</h2>
            <p>+1 (555) 123-4567</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-green-600 mb-1">
              Address
            </h2>
            <p>123 Green Street, Eco City, Earth 45678</p>
          </div>
        </div>

        {/* Embedded Map */}
        <div>
          <iframe
            title="Garden Hub Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.674149690208!2d90.40431941538524!3d23.761217794149236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a7a4e2b011%3A0xeda9d992a9026eb2!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1651671638220!5m2!1sen!2sbd"
            width="100%"
            height="300"
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg shadow-md border"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
