
import { MailIcon } from "lucide-react";

export const Contact = () => (
  <section
    id="contact"
    className="py-24  text-white"
  >
    <div className="max-w-3xl mx-auto px-6 text-center">
      <h3 className="text-4xl font-extrabold mb-4">Let’s Work Together</h3>
      <p className="text-gray-300 mb-10">
        I’m always open to discussing new projects, creative ideas or
        opportunities to be part of your vision.
      </p>

      <form
        className="bg-white/10 backdrop-blur-md p-8 rounded-3xl space-y-5 shadow-2xl max-w-xl mx-auto"
      >
        <div className="flex items-center gap-2 text-cyan-300">
          <MailIcon className="w-5 h-5" />
          <span>Drop me a message</span>
        </div>

        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded-xl bg-white/5 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-300"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded-xl bg-white/5 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-300"
        />
        <textarea
          placeholder="Your Message"
          rows={5}
          className="w-full p-3 rounded-xl bg-white/5 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-300"
        />
        <button
          type="submit"
          className="bg-cyan-400 hover:bg-cyan-500 text-black font-semibold px-6 py-3 rounded-xl transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  </section>
);
