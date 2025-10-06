import Image from "next/image"

export default function PrivacyContent() {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="">
          {/* Introduction */}
          <h5 className="apply-h5 mt-8 mb-4">Introduction</h5>
          <p className="apply-body-small mb-4">
            At Viand Global, we are committed to protecting your privacy and ensuring the security of your personal
            information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when
            you visit our website or engage with our agricultural export services.
          </p>
          <p className="apply-body-small mb-6">
            By using our website and services, you consent to the practices described in this Privacy Policy.
          </p>

          {/* Data Collection */}
          <h5 className="apply-h5 mt-8 mb-4">Data Collection</h5>
          <p className="apply-body-small mb-4">We collect information from you in several ways:</p>

          <h5 className="apply-h5 mb-3">Information You Provide</h5>
          <div className="mb-4 space-y-2">
            <div className="flex items-start gap-3">
              <Image src="/icons/bullet-icon.svg" alt="" width={14} height={14} className="mt-2 flex-shrink-0" />
              <span className="apply-body-small">
                Contact information (name, email address, phone number, company details)
              </span>
            </div>
            <div className="flex items-start gap-3">
              <Image src="/icons/bullet-icon.svg" alt="" width={14} height={14} className="mt-2 flex-shrink-0" />
              <span className="apply-body-small">Business inquiries and communication preferences</span>
            </div>
            <div className="flex items-start gap-3">
              <Image src="/icons/bullet-icon.svg" alt="" width={14} height={14} className="mt-2 flex-shrink-0" />
              <span className="apply-body-small">Product specifications and order requirements</span>
            </div>
            <div className="flex items-start gap-3">
              <Image src="/icons/bullet-icon.svg" alt="" width={14} height={14} className="mt-2 flex-shrink-0" />
              <span className="apply-body-small">Feedback and testimonials</span>
            </div>
          </div>

          <h5 className="apply-h5 mb-3">Automatically Collected Information</h5>
          <div className="mb-6 space-y-2">
            <div className="flex items-start gap-3">
              <Image src="/icons/bullet-icon.svg" alt="" width={14} height={14} className="mt-2 flex-shrink-0" />
              <span className="apply-body-small">IP address and browser information</span>
            </div>
            <div className="flex items-start gap-3">
              <Image src="/icons/bullet-icon.svg" alt="" width={14} height={14} className="mt-2 flex-shrink-0" />
              <span className="apply-body-small">Website usage patterns and navigation data</span>
            </div>
            <div className="flex items-start gap-3">
              <Image src="/icons/bullet-icon.svg" alt="" width={14} height={14} className="mt-2 flex-shrink-0" />
              <span className="apply-body-small">Device information and operating system</span>
            </div>
            <div className="flex items-start gap-3">
              <Image src="/icons/bullet-icon.svg" alt="" width={14} height={14} className="mt-2 flex-shrink-0" />
              <span className="apply-body-small">Cookies and similar tracking technologies</span>
            </div>
          </div>

          {/* How We Use Your Data */}
          <h5 className="apply-h5 mt-8 mb-4">How We Use Your Data</h5>
          <p className="apply-body-small mb-4">We use the collected information for the following purposes:</p>
          <div className="mb-6 space-y-2">
            <div className="flex items-start gap-3">
              <Image src="/icons/bullet-icon.svg" alt="" width={14} height={14} className="mt-2 flex-shrink-0" />
              <span className="apply-body-small">Processing inquiries and quotations</span>
            </div>
            <div className="flex items-start gap-3">
              <Image src="/icons/bullet-icon.svg" alt="" width={14} height={14} className="mt-2 flex-shrink-0" />
              <span className="apply-body-small">Managing export orders and logistics</span>
            </div>
            <div className="flex items-start gap-3">
              <Image src="/icons/bullet-icon.svg" alt="" width={14} height={14} className="mt-2 flex-shrink-0" />
              <span className="apply-body-small">Providing customer support</span>
            </div>
            <div className="flex items-start gap-3">
              <Image src="/icons/bullet-icon.svg" alt="" width={14} height={14} className="mt-2 flex-shrink-0" />
              <span className="apply-body-small">Quality assurance and compliance</span>
            </div>
            <div className="flex items-start gap-3">
              <Image src="/icons/bullet-icon.svg" alt="" width={14} height={14} className="mt-2 flex-shrink-0" />
              <span className="apply-body-small">Sending product updates and newsletters</span>
            </div>
            <div className="flex items-start gap-3">
              <Image src="/icons/bullet-icon.svg" alt="" width={14} height={14} className="mt-2 flex-shrink-0" />
              <span className="apply-body-small">Market insights and industry news</span>
            </div>
            <div className="flex items-start gap-3">
              <Image src="/icons/bullet-icon.svg" alt="" width={14} height={14} className="mt-2 flex-shrink-0" />
              <span className="apply-body-small">Event invitations and announcements</span>
            </div>
            <div className="flex items-start gap-3">
              <Image src="/icons/bullet-icon.svg" alt="" width={14} height={14} className="mt-2 flex-shrink-0" />
              <span className="apply-body-small">Important policy or service changes</span>
            </div>
          </div>

          {/* Data Sharing */}
          <h5 className="apply-h5 mt-8 mb-4">Data Sharing</h5>
          <p className="apply-body-small mb-4">
            We respect your privacy and do not sell, trade, or rent your personal information to third parties. However,
            we may share your information in the following limited circumstances:
          </p>
          <div className="mb-6 space-y-2">
            <div className="flex items-start gap-3">
              <Image src="/icons/bullet-icon.svg" alt="" width={14} height={14} className="mt-2 flex-shrink-0" />
              <span className="apply-body-small">
                Trusted logistics partners, payment processors, and technology service providers who assist in our
                operations
              </span>
            </div>
            <div className="flex items-start gap-3">
              <Image src="/icons/bullet-icon.svg" alt="" width={14} height={14} className="mt-2 flex-shrink-0" />
              <span className="apply-body-small">
                When required by law, regulation, or legal process, including export compliance and customs
                documentation
              </span>
            </div>
            <div className="flex items-start gap-3">
              <Image src="/icons/bullet-icon.svg" alt="" width={14} height={14} className="mt-2 flex-shrink-0" />
              <span className="apply-body-small">
                In the event of a merger, acquisition, or sale of business assets, with appropriate confidentiality
                protections
              </span>
            </div>
          </div>

          {/* User Rights */}
          <h5 className="apply-h5 mt-8 mb-4">User Rights</h5>
          <p className="apply-body-small mb-4">You have several rights regarding your personal information:</p>
          <div className="mb-6 space-y-2">
            <div className="flex items-start gap-3">
              <Image src="/icons/bullet-icon.svg" alt="" width={14} height={14} className="mt-2 flex-shrink-0" />
              <span className="apply-body-small">
                Request access to your personal data and correct any inaccuracies
              </span>
            </div>
            <div className="flex items-start gap-3">
              <Image src="/icons/bullet-icon.svg" alt="" width={14} height={14} className="mt-2 flex-shrink-0" />
              <span className="apply-body-small">
                Request deletion of your personal information, subject to legal requirements
              </span>
            </div>
            <div className="flex items-start gap-3">
              <Image src="/icons/bullet-icon.svg" alt="" width={14} height={14} className="mt-2 flex-shrink-0" />
              <span className="apply-body-small">Receive your data in a structured, commonly used format</span>
            </div>
            <div className="flex items-start gap-3">
              <Image src="/icons/bullet-icon.svg" alt="" width={14} height={14} className="mt-2 flex-shrink-0" />
              <span className="apply-body-small">Unsubscribe from marketing communications at any time</span>
            </div>
          </div>

          {/* Contact Information */}
          <h5 className="apply-h5 mt-8 mb-4">Contact Information</h5>
          <p className="apply-body-small mb-4">
            If you have any questions about this Privacy Policy or wish to exercise your rights regarding your personal
            information, please contact us:
          </p>
          <p className="apply-body-small mb-2">
            <strong>Email:</strong> privacy@viandglobal.com
          </p>
          <p className="apply-body-small mb-2">
            <strong>Phone:</strong>+91 817-790-9441, +91 727-651-5586
          </p>
          <p className="apply-body-small mb-6">
            <strong>Address:</strong>E-51 Chandra courtyard, Chandra vihar colony,
Dhanbad, Jharkhand, India
          </p>

          <div className="border-t border-gray-200 pt-6 mt-8">
            <p className="text-sm text-gray-500 text-center">
              <strong>Last Updated:</strong> January 1, 2025
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
