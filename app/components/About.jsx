export default function About() {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative py-24 bg-[#922b2b]">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -right-20 -top-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-black/10 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 italic tracking-tighter">
                        REDEFINING THE ROAD
                    </h1>
                    <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto font-medium">
                        Cario is not just a car rental; it's your partner in every journey, providing premium rides with unparalleled convenience.
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="aspect-square bg-gray-100 rounded-[40px] overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="Luxury Car"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hidden md:block">
                                <span className="text-4xl font-black text-[#922b2b]">10+</span>
                                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mt-1">Years Excellence</p>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h2 className="text-sm font-bold text-[#922b2b] tracking-widest uppercase mb-3">Our Mission</h2>
                                <h3 className="text-4xl font-black text-gray-900 tracking-tight leading-tight">
                                    We provide the best <br /> customer experience.
                                </h3>
                            </div>
                            <p className="text-gray-500 text-lg leading-relaxed">
                                Our vision is to provide convenience and help increase your sales business with premium car rental services. We ensure every vehicle in our fleet meets the highest standards of safety and luxury.
                            </p>
                            <div className="grid grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-[#922b2b]">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h4 className="font-bold text-gray-900">Verified Fleet</h4>
                                    <p className="text-sm text-gray-500">All cars undergo 50+ quality checks.</p>
                                </div>
                                <div className="space-y-3">
                                    <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-[#922b2b]">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h4 className="font-bold text-gray-900">24/7 Support</h4>
                                    <p className="text-sm text-gray-500">Dedicated team for your assistance.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center space-y-2">
                            <h3 className="text-5xl font-black text-gray-900 tracking-tighter">500+</h3>
                            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Premium Cars</p>
                        </div>
                        <div className="text-center space-y-2">
                            <h3 className="text-5xl font-black text-gray-900 tracking-tighter">20k+</h3>
                            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Happy Clients</p>
                        </div>
                        <div className="text-center space-y-2">
                            <h3 className="text-5xl font-black text-[#922b2b] tracking-tighter">50+</h3>
                            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Cities Covered</p>
                        </div>
                        <div className="text-center space-y-2">
                            <h3 className="text-5xl font-black text-gray-900 tracking-tighter">100%</h3>
                            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Safe Rides</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Developer Section */}
            <section className="py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="w-24 h-24 bg-[#922b2b]/10 rounded-full flex items-center justify-center mx-auto mb-8 border-4 border-white shadow-xl">
                        <svg className="w-12 h-12 text-[#922b2b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                    </div>
                    <h2 className="text-sm font-bold text-[#922b2b] tracking-widest uppercase mb-4">Behind the Code</h2>
                    <h3 className="text-3xl font-black text-gray-900 mb-6 tracking-tight">Crafted with Passion</h3>
                    <p className="text-gray-500 text-lg leading-relaxed mb-10">
                        This platform is a result of meticulous design and robust engineering by
                        <span className="text-gray-900 font-bold"> Ali Huzaifa AHK</span>.
                        Our goal was to create a seamless interface that bridges the gap between luxury and accessibility.
                    </p>
                    <div className="flex justify-center gap-4">
                        <a
                            href="https://wa.me/923178386880"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#922b2b] text-white px-8 py-3 rounded-2xl font-bold shadow-lg shadow-[#922b2b]/20 hover:scale-105 transition-all inline-block"
                        >
                            Contact Developer
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}