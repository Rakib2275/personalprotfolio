import {
  FaEnvelope,
  FaPhone,
  FaLocationDot,
} from "react-icons/fa6";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-slate-900 text-white py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            Contact <span className="text-cyan-400">Me</span>
          </h2>

          <p className="text-gray-400 mt-3">
            Feel free to contact me anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Info */}

          <div className="space-y-6">

            <div className="flex items-center gap-4 bg-slate-800 p-5 rounded-xl">
              <FaEnvelope className="text-3xl text-cyan-400" />

              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-gray-400">
                    rakib932676@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-slate-800 p-5 rounded-xl">
              <FaPhone className="text-3xl text-cyan-400" />

              <div>
                <h3 className="font-semibold text-lg">Phone</h3>
                <p className="text-gray-400">
                  +880 1889242275
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-slate-800 p-5 rounded-xl">
              <FaLocationDot className="text-3xl text-cyan-400" />

              <div>
                <h3 className="font-semibold text-lg">Location</h3>
                <p className="text-gray-400">
                  Dhaka, Bangladesh
                </p>
              </div>
            </div>

          </div>

          {/* Contact Form */}

          <form className="bg-slate-800 p-8 rounded-xl">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-slate-700 p-4 rounded-lg mb-5 outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-slate-700 p-4 rounded-lg mb-5 outline-none"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full bg-slate-700 p-4 rounded-lg mb-5 outline-none resize-none"
            ></textarea>

            <button
              className="bg-cyan-500 hover:bg-cyan-600 px-8 py-3 rounded-lg font-semibold duration-300"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};

export default Contact;