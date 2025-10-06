export default function MapSection() {
  return (
    <section className="py-12 sm:py-16 md:py-18 lg:py-20 xl:py-24 bg-white lg:pb-0">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10">
        <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-5 lg:mb-6">
            Visit Us
          </h2>
          <p className="body-small max-w-3xl mx-auto text-gray-600">
            Find our office Dhanbad, Jharkhand, India
          </p>
        </div>

        <div className="w-full rounded-[10px] overflow-hidden shadow-lg">
          <div className="h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] 2xl:h-[500px] w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.4067081615844!2d86.43115120000002!3d23.813120400000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6bca65e7ab85d%3A0x34035d8f51d3817a!2sChandra%20Courtyard!5e0!3m2!1sen!2sin!4v1751442118858!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Viyand Global Office Location - Kolkata, West Bengal, India"
            />

          
          </div>
        </div>
      </div>
    </section>
  )
}
