export default function Contact() {
    return (
        <div className="bg-white min-h-screen">
            {/* Header Section */}
            <section className="bg-gray-50 py-24">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-[#922b2b] text-sm font-extrabold tracking-[0.3em] uppercase mb-4">Contact us</h2>
                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-6">
                        Get in Touch with Cario
                    </h1>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
                        Have questions? Our team is here to help you find the perfect ride for your next adventure.
                    </p>
                </div>
            </section>

            <section className="py-24">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Information */}
                        <div className="space-y-12">
                            <div>
                                <h3 className="text-2xl font-black text-gray-900 mb-8 pb-4 border-b-2 border-[#922b2b] w-fit">
                                    Contact Information
                                </h3>
                                <div className="space-y-8">
                                    <div className="flex gap-6">
                                        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-[#922b2b] shrink-0 border border-gray-100 shadow-sm">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-1">Our Office</h4>
                                            <p className="text-gray-500">DHA Phase 6, Karachi, Pakistan</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6">
                                        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-[#922b2b] shrink-0 border border-gray-100 shadow-sm">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 004.516 4.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-1">Phone Number</h4>
                                            <p className="text-gray-500">+92 313 1234567</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6">
                                        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-[#922b2b] shrink-0 border border-gray-100 shadow-sm">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-1">Email Address</h4>
                                            <p className="text-gray-500">support@cario.pk</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Social Media */}
                            <div>
                                <h4 className="font-bold text-gray-900 mb-6 uppercase text-xs tracking-[0.2em]">Follow Us</h4>
                                <div className="flex gap-4">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="w-12 h-12 bg-white border border-gray-100 rounded-xl shadow-sm hover:border-[#922b2b] hover:text-[#922b2b] cursor-pointer flex items-center justify-center transition-all">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                            </svg>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white rounded-[40px] p-8 md:p-12 border border-gray-100 shadow-2xl shadow-gray-100">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                                        <input
                                            type="text"
                                            placeholder="Ali Huzaifa"
                                            className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#922b2b] focus:bg-white transition-all text-sm"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                                        <input
                                            type="email"
                                            placeholder="ali@example.com"
                                            className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#922b2b] focus:bg-white transition-all text-sm"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 ml-1">Subject</label>
                                    <input
                                        type="text"
                                        placeholder="Car Rental Inquiry"
                                        className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#922b2b] focus:bg-white transition-all text-sm"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 ml-1">Message</label>
                                    <textarea
                                        rows="5"
                                        placeholder="How can we help you?"
                                        className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#922b2b] focus:bg-white transition-all text-sm resize-none"
                                    ></textarea>
                                </div>
                                <button className="w-full bg-[#922b2b] text-white py-5 rounded-2xl font-black shadow-xl shadow-[#922b2b]/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
                                    SEND MESSAGE
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
