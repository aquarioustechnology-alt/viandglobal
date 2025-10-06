import Image from "next/image"

export default function TermsContent() {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="">
          {/* Introduction */}
          <h5 className="apply-h5 mt-8 mb-4">Introduction</h5>
          <p className="apply-body-small mb-4">
            Welcome to Viand Global. These Terms and Conditions govern your use of our website and services related to
            agricultural exports. By accessing our website or engaging with our services, you agree to be bound by these
            terms.
          </p>
          <p className="apply-body-small mb-6">
            Please read these terms carefully before using our services. If you do not agree with any part of these
            terms, you should not use our website or services.
          </p>

          {/* Services */}
          <h5 className="apply-h5 mt-8 mb-4">Our Services</h5>
          <p className="apply-body-small mb-4">Viand Global provides the following services:</p>

          <div className="mb-6 space-y-2">
            <div className="flex items-start gap-3">
              <Image src="/icons/bullet-icon.svg" alt="" width={14} height={14} className="mt-2 flex-shrink-0" />
              <span className="apply-body-small">
                Export of premium agricultural products including Foxnut (Makhana), Wheat Bran, and Corn
              </span>
            </div>
            <div className="flex items-start gap-3">
              <Image src="/icons/bullet-icon.svg" alt="" width={14} height={14} className="mt-2 flex-shrink-0" />
              <span className="apply-body-small">Quality assurance and certification services</span>
            </div>
            <div className="flex items-start gap-3">
              <Image src="/icons/bullet-icon.svg" alt="" width={14} height={14} className="mt-2 flex-shrink-0" />
              <span className="apply-body-small">Custom packaging and private labeling solutions</span>
            </div>
            <div className="flex items-start gap-3">
              <Image src="/icons/bullet-icon.svg" alt="" width={14} height={14} className="mt-2 flex-shrink-0" />
              <span className="apply-body-small">Global logistics and shipping coordination</span>
            </div>
            <div className="flex items-start gap-3">
              <Image src="/icons/bullet-icon.svg" alt="" width={14} height={14} className="mt-2 flex-shrink-0" />
              <span className="apply-body-small">Market consultation and business development support</span>
            </div>
          </div>

          {/* Order Terms */}
          <h5 className="apply-h5 mt-8 mb-4">Order Terms & Conditions</h5>
          <p className="apply-body-small mb-4">When placing orders with Viand Global, the following terms apply:</p>

          <h5 className="apply-h5 mb-3">Order Placement</h5>
          <div className="mb-4 space-y-2">
            <div className="flex items-start gap-3">
              <Image src="/icons/bullet-icon.svg" alt="" width={14} height={14} className="mt-2 flex-shrink-0" />
              <span className="apply-body-small">
                All orders must be confirmed in writing with detailed specifications
              </span>
            </div>
            <div className="flex items-start gap-3">
              <Image src="/icons/bullet-icon.svg" alt="" width={14} height={14} className="mt-2 flex-shrink-0" />
              <span className="apply-body-small">Minimum order quantities may apply for certain products</span>
            </div>
            <div className="flex items-start gap-3">
              <Image src="/icons/bullet-icon.svg" alt="" width={14} height={14} className="mt-2 flex-shrink-0" />
              <span className="apply-body-small">
                Prices are subject to confirmation and may vary based on market conditions
              </span>
            </div>
            <div className="flex items-start gap-3">
              <Image src="/icons/bullet-icon.svg" alt="" width={14} height={14} className="mt-2 flex-shrink-0" />
              <span className="apply-body-small">Lead times will be communicated upon order confirmation</span>
            </div>
          </div>

          <h5 className="apply-h5 mb-3">Payment Terms</h5>
          <div className="mb-6 space-y-2">
            <div className="flex items-start gap-3">
              <Image src="/icons/bullet-icon.svg" alt="" width={14} height={14} className="mt-2 flex-shrink-0" />
              <span className="apply-body-small">Payment terms will be agreed upon before order confirmation</span>
            </div>
            <div className="flex items-start gap-3">
              <Image src="/icons/bullet-icon.svg" alt="" width={14} height={14} className="mt-2 flex-shrink-0" />
              <span className="apply-body-small">Advance payment may be required for new customers</span>
            </div>
            <div className="flex items-start gap-3">
              <Image src="/icons/bullet-icon.svg" alt="" width={14} height={14} className="mt-2 flex-shrink-0" />
              <span className="apply-body-small">Late payment charges may apply as per agreed terms</span>
            </div>
            <div className="flex items-start gap-3">
              <Image src="/icons/bullet-icon.svg" alt="" width={14} height={14} className="mt-2 flex-shrink-0" />
              <span className="apply-body-small">All payments must be made in the agreed currency</span>
            </div>
          </div>

          {/* Quality & Delivery */}
          <h5 className="apply-h5 mt-8 mb-4">Quality Assurance & Delivery</h5>
          <p className="apply-body-small mb-4">We are committed to delivering high-quality products:</p>
          <div className="mb-6 space-y-2">
            <div className="flex items-start gap-3">
              <Image src="/icons/bullet-icon.svg" alt="" width={14} height={14} className="mt-2 flex-shrink-0" />
              <span className="apply-body-small">All products undergo rigorous quality testing before shipment</span>
            </div>
            <div className="flex items-start gap-3">
              <Image src="/icons/bullet-icon.svg" alt="" width={14} height={14} className="mt-2 flex-shrink-0" />
              <span className="apply-body-small">Certificates of analysis and quality reports are provided</span>
            </div>
            <div className="flex items-start gap-3">
              <Image src="/icons/bullet-icon.svg" alt="" width={14} height={14} className="mt-2 flex-shrink-0" />
              <span className="apply-body-small">Delivery schedules are communicated and tracked</span>
            </div>
            <div className="flex items-start gap-3">
              <Image src="/icons/bullet-icon.svg" alt="" width={14} height={14} className="mt-2 flex-shrink-0" />
              <span className="apply-body-small">Force majeure events may affect delivery timelines</span>
            </div>
          </div>

          {/* Liability & Limitations */}
          <h5 className="apply-h5 mt-8 mb-4">Liability & Limitations</h5>
          <p className="apply-body-small mb-4">
            While we strive for excellence, certain limitations apply to our liability:
          </p>
          <div className="mb-6 space-y-2">
            <div className="flex items-start gap-3">
              <Image src="/icons/bullet-icon.svg" alt="" width={14} height={14} className="mt-2 flex-shrink-0" />
              <span className="apply-body-small">
                Our liability is limited to the value of the specific order in question
              </span>
            </div>
            <div className="flex items-start gap-3">
              <Image src="/icons/bullet-icon.svg" alt="" width={14} height={14} className="mt-2 flex-shrink-0" />
              <span className="apply-body-small">
                We are not liable for delays caused by customs, weather, or other external factors
              </span>
            </div>
            <div className="flex items-start gap-3">
              <Image src="/icons/bullet-icon.svg" alt="" width={14} height={14} className="mt-2 flex-shrink-0" />
              <span className="apply-body-small">Claims must be reported within 30 days of delivery</span>
            </div>
            <div className="flex items-start gap-3">
              <Image src="/icons/bullet-icon.svg" alt="" width={14} height={14} className="mt-2 flex-shrink-0" />
              <span className="apply-body-small">Consequential or indirect damages are excluded</span>
            </div>
          </div>

          {/* Intellectual Property */}
          <h5 className="apply-h5 mt-8 mb-4">Intellectual Property</h5>
          <p className="apply-body-small mb-4">
            All content on our website and marketing materials is protected by intellectual property rights:
          </p>
          <div className="mb-6 space-y-2">
            <div className="flex items-start gap-3">
              <Image src="/icons/bullet-icon.svg" alt="" width={14} height={14} className="mt-2 flex-shrink-0" />
              <span className="apply-body-small">
                Website content, logos, and trademarks are owned by Viand Global
              </span>
            </div>
            <div className="flex items-start gap-3">
              <Image src="/icons/bullet-icon.svg" alt="" width={14} height={14} className="mt-2 flex-shrink-0" />
              <span className="apply-body-small">Unauthorized use or reproduction is strictly prohibited</span>
            </div>
            <div className="flex items-start gap-3">
              <Image src="/icons/bullet-icon.svg" alt="" width={14} height={14} className="mt-2 flex-shrink-0" />
              <span className="apply-body-small">Product specifications and technical data remain confidential</span>
            </div>
          </div>

          {/* Governing Law */}
          <h5 className="apply-h5 mt-8 mb-4">Governing Law & Disputes</h5>
          <p className="apply-body-small mb-4">
            These terms are governed by Indian law, and any disputes will be resolved through:
          </p>
          <div className="mb-6 space-y-2">
            <div className="flex items-start gap-3">
              <Image src="/icons/bullet-icon.svg" alt="" width={14} height={14} className="mt-2 flex-shrink-0" />
              <span className="apply-body-small">Jurisdiction of courts in New Delhi, India</span>
            </div>
            <div className="flex items-start gap-3">
              <Image src="/icons/bullet-icon.svg" alt="" width={14} height={14} className="mt-2 flex-shrink-0" />
              <span className="apply-body-small">Arbitration proceedings as per Indian Arbitration Act</span>
            </div>
            <div className="flex items-start gap-3">
              <Image src="/icons/bullet-icon.svg" alt="" width={14} height={14} className="mt-2 flex-shrink-0" />
              <span className="apply-body-small">Mediation preferred for commercial dispute resolution</span>
            </div>
          </div>

          {/* Contact Information */}
          <h5 className="apply-h5 mt-8 mb-4">Contact Information</h5>
          <p className="apply-body-small mb-4">
            For any questions regarding these Terms & Conditions or to discuss specific contract terms, please contact
            us:
          </p>
          <p className="apply-body-small mb-2">
            <strong>Email:</strong>legal@viandglobal.com
          </p>
          <p className="apply-body-small mb-2">
            <strong>Phone:</strong> +91 817-790-9441, +91 727-651-5586
          </p>
          <p className="apply-body-small mb-6">
            <strong>Address:</strong> E-51 Chandra courtyard, Chandra vihar colony,
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
