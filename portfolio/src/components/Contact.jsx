const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Let's Connect
        </h2>
        <p className="text-xl text-gray-600 mb-12">
          Interested in collaborating or have a question? Feel free to reach out!
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {/* Email */}
          <a
            href="mailto:eganbauersfeld@gmail.com"
            className="flex items-center justify-center gap-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow group"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
              <svg className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="text-left">
              <p className="text-sm text-gray-500">Email</p>
              <p className="text-gray-900 font-medium">eganbauersfeld@gmail.com</p>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/egan-bauersfeld"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow group"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
              <svg className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </div>
            <div className="text-left">
              <p className="text-sm text-gray-500">LinkedIn</p>
              <p className="text-gray-900 font-medium">Connect with me</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
