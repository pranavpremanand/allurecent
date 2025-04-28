import Banner from "../components/website/Banner";
import WebsiteFooter from "../components/website/WebsiteFooter";
import WebsiteHeader from "../components/website/WebsiteHeader";

export default function PrivacyPolicy() {
  return (
    <>
      <WebsiteHeader />
      <Banner page="Privacy Policy" />
      <section className="bg-black text-white wrapper py-16">
        <div className="space-y-8">
          <div>
            <p>
              <strong>Effective Date:</strong> August 2024
            </p>
            <p>
              <strong>Last Updated:</strong> January 2025
            </p>
            <p className="mt-4">
              At Allurecent Software Solutions, we respect your privacy and are
              committed to protecting the personal information you share with
              us. This Privacy Policy outlines how we collect, use, disclose,
              and protect your information when you visit our website and use
              our services. By accessing or using our website, you agree to the
              terms of this Privacy Policy.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">
              1. Information We Collect
            </h2>
            <h3 className="text-xl font-medium mb-1">
              a. Personal Information
            </h3>
            <p>We may collect the following personal information:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company name</li>
              <li>Job title</li>
              <li>Payment information (if applicable)</li>
              <li>
                Other information you provide through forms, surveys, or contact
                requests
              </li>
            </ul>

            <h3 className="text-xl font-medium mt-4 mb-1">
              b. Non-Personal Information
            </h3>
            <p>We may collect non-personal information such as:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Referring/Exit pages</li>
              <li>Date and time of visit</li>
              <li>Clickstream data</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">
              2. How We Use Your Information
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>To provide and improve our services</li>
              <li>To communicate with you</li>
              <li>For marketing purposes (with opt-out option)</li>
              <li>To analyze and enhance website functionality</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">
              3. How We Share Your Information
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>With trusted service providers</li>
              <li>For legal compliance</li>
              <li>During business transfers</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">4. Data Security</h2>
            <p>
              We use encryption, access controls, and regular security audits to
              protect your information. However, no method of transmission or
              storage is 100% secure.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">
              5. Cookies and Tracking Technologies
            </h2>
            <p>
              We use cookies to enhance your browsing experience. You can manage
              cookies via your browser settings.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">
              6. Your Rights and Choices
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Access your information</li>
              <li>Request correction or deletion</li>
              <li>Opt-out of marketing communications</li>
              <li>Request data portability</li>
            </ul>
            <p className="mt-2">
              To exercise your rights, please contact us at{" "}
              <a
                href="mailto:stephenraj@allurecent.org"
                className="text-blue-600 underline"
              >
                stephenraj@allurecent.org
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">
              7. Third-Party Links
            </h2>
            <p>
              Our website may contain links to third-party sites. We are not
              responsible for their privacy practices.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">
              8. Children’s Privacy
            </h2>
            <p>
              Our services are not intended for children under 13. If we learn
              that we collected information from a child, we will delete it
              promptly.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">
              9. International Data Transfers
            </h2>
            <p>
              Your information may be transferred to and processed in countries
              outside of your own. By using our services, you consent to this
              transfer.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">
              10. Changes to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy. Please review it periodically.
              Changes will be reflected with an updated "Effective Date."
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">11. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact
              us:
            </p>
            <ul className="mt-2 space-y-1">
              <li>
                <strong>Allurecent Software Solutions</strong>
              </li>
              <li>
                Email:{" "}
                <a
                  href="mailto:stephenraj@allurecent.org"
                  className="text-blue-600 underline"
                >
                  stephenraj@allurecent.org
                </a>
              </li>
              <li>Phone: 9731068406 / 73384 53523</li>
              <li>
                Address: SPD Plaza, Koramangala Industrial Layout, 5th Block,
                Koramangala, Bengaluru, Karnataka 560034
              </li>
            </ul>
          </div>
        </div>
      </section>
      <WebsiteFooter />
    </>
  );
}
