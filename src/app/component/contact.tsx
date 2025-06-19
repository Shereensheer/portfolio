
// File: components/Contact.tsx
export const Contact = () => (
  <section id="contact" className="py-20 bg-gray-50">
    <div className="max-w-2xl mx-auto px-4 text-center">
      <h3 className="text-3xl font-bold mb-6">Get in Touch</h3>
      <p className="text-gray-700 mb-8">
        Want to work together or have questions? Feel free to drop me a message.
      </p>
      <form className="space-y-4">
        <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-xl" />
        <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-xl" />
        <textarea placeholder="Your Message" rows={5} className="w-full p-3 border rounded-xl"></textarea>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </div>
  </section>
);