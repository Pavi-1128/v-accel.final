import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | V-Accel",
  description: "Privacy Policy for V-Accel AI Dynamics Private Limited",
};

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">Privacy Policy</h1>
        <p className="text-gray-400 mb-8">Effective Date: May 22, 2025</p> 

        <div className="space-y-8">
          <p className="text-gray-300">
            At V-Accel AI Dynamics Private Limited (&quot;V-Accel,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), 
            we respect your privacy and are committed to protecting the personal information 
            you share with us. This Privacy Policy explains how we collect, use, disclose, 
            and secure your information when you interact with our website or services.
          </p>

          <section>
            <h2 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">1. Information We Collect</h2>
            <p className="text-gray-300 mb-4">We may collect the following categories of information:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>
                <strong>Personal Information:</strong> Name, email address, phone number, 
                company name, and any other information you voluntarily provide through 
                contact forms or inquiries.
              </li>
              <li>
                <strong>Technical Information:</strong> IP address, browser type, device 
                information, pages visited, time spent on our site, and other diagnostic 
                data collected automatically.
              </li>
              <li>
                <strong>Usage Information:</strong> Interactions with our website, including 
                time of access, features used, and navigation behavior.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">2. How We Use Your Information</h2>
            <p className="text-gray-300 mb-4">We use the collected information to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Provide and improve our services, including software development, AI/ML solutions, and DevOps support.</li>
              <li>Respond to your inquiries or service requests.</li>
              <li>Communicate updates, offers, and promotional content (you may opt out at any time).</li>
              <li>Analyze user behavior to enhance user experience and service quality.</li>
              <li>Maintain the security and integrity of our systems.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">3. Sharing and Disclosure</h2>
            <p className="text-gray-300 mb-4">
              We do not sell or rent your personal information. We may share your data under these conditions:
            </p> 
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>
                <strong>With Service Providers:</strong> To third-party vendors who help deliver 
                our services (e.g., cloud service providers, CRM tools, analytics).
              </li>
              <li>
                <strong>For Legal Reasons:</strong> When required by law, regulation, or legal 
                process to protect our rights or comply with obligations.
              </li>
              <li>
                <strong>In Business Transfers:</strong> In case of merger, acquisition, or sale 
                of company assets, your information may be transferred.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">4. Data Security</h2>
            <p className="text-gray-300">
              We take reasonable precautions to safeguard your data from unauthorized access, 
              use, or disclosure. However, no internet transmission or electronic storage is 
              completely secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">5. Your Rights</h2>
            <p className="text-gray-300 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Request access to or correction of your personal data.</li>
              <li>Withdraw consent or request deletion of your data (subject to legal obligations).</li>
              <li>Opt out of receiving non-essential communications.</li>
            </ul>
            <p className="text-gray-300 mt-4">
              To exercise these rights, please contact us at{" "}
              <a href="mailto:info@v-accel.ai" className="text-blue-400 hover:text-blue-300">
                info@v-accel.ai
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">6. Policy Updates</h2>
            <p className="text-gray-300">
              This policy may be updated from time to time. Changes take effect once posted on 
              our website. We recommend reviewing this policy periodically to stay informed. 
            </p> 
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">7. Contact Us</h2>
            <p className="text-gray-300 mb-2">
              If you have questions, concerns, or requests related to this Privacy Policy or 
              our data practices, please contact:
            </p>
            <p className="text-gray-300">
              V-Accel AI Dynamics Private Limited
              <br />
              Email:{" "}
              <a href="mailto:info@v-accel.ai" className="text-blue-400 hover:text-blue-300">
                info@v-accel.ai 
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 