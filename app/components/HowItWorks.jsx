export default function HowItWorks() {
    const steps = [
        {
            number: "01",
            title: "Select Location",
            description: "Choose where you want to pick up your car. We have branches in all major cities of Pakistan.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            )
        },
        {
            number: "02",
            title: "Pick-up Date",
            description: "Select your pick-up and return dates. Our flexible timing fits your schedule perfectly.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            number: "03",
            title: "Book Your Car",
            description: "Browse our premium fleet and book the car that suits your style and needs best.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            )
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Header Section */}
            <section className="bg-gray-50 py-24">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-[#922b2b] text-sm font-extrabold tracking-[0.3em] uppercase mb-4">How it works</h2>
                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-6">
                        Rent with 3 Simple Steps
                    </h1>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
                        We have streamlined the car rental process to make it as smooth as possible for you.
                        No complex paperwork, just pure convenience.
                    </p>
                </div>
            </section>

            {/* Steps Section */}
            <section className="py-24">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
                        {steps.map((step, index) => (
                            <div key={index} className="relative group text-center">
                                {/* Connector Line (Desktop Only) */}
                                {index < steps.length - 1 && (
                                    <div className="hidden md:block absolute top-16 left-[60%] w-[80%] border-t-2 border-dashed border-gray-100 -z-0"></div>
                                )}

                                <div className="relative z-10">
                                    <div className="w-24 h-24 bg-white border border-gray-100 rounded-[32px] shadow-xl shadow-gray-100 flex items-center justify-center mx-auto mb-10 group-hover:bg-[#922b2b] transition-all duration-500 transform group-hover:-translate-y-2">
                                        <div className="text-[#922b2b] group-hover:text-white transition-colors duration-500">
                                            {step.icon}
                                        </div>
                                    </div>

                                    <span className="text-5xl font-black text-[#922b2b]/5 mb-4 block group-hover:text-[#922b2b]/10 transition-colors">
                                        {step.number}
                                    </span>

                                    <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">
                                        {step.title}
                                    </h3>

                                    <p className="text-gray-500 leading-relaxed text-sm md:text-base font-medium px-4">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Image & Detail Section */}
            <section className="py-24 bg-gray-50 overflow-hidden">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter leading-tight">
                                Quality Cars for <br /> <span className="text-[#922b2b]">Your Best Trips</span>
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                We prioritize your safety and comfort. Each vehicle in our fleet is regularly inspected and maintained by certified professionals to ensure you have a worry-free journey.
                            </p>
                            <div className="pt-4">
                                <button className="bg-[#922b2b] text-white px-10 py-4 rounded-2xl font-bold shadow-lg shadow-[#922b2b]/20 hover:scale-105 transition-all">
                                    Browse Our Fleet
                                </button>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-[#922b2b]/5 rounded-[60px] blur-3xl rotate-12"></div>
                            <img
                                src="https://purepng.com/public/uploads/large/purepng.com-nissan-gt-r-r35-white-carcarvehicletransportnissan-9615246738917qshk.png"
                                alt="Rent Process"
                                className="relative w-full drop-shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ / Call to Action */}
            <section className="py-24 text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="bg-[#922b2b] rounded-[40px] p-12 md:p-20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
                        <div className="relative z-10">
                            <h3 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tighter">
                                Ready to hit the road?
                            </h3>
                            <p className="text-white/80 text-lg mb-12">
                                Book your car now and get 20% off on your first rental.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <button className="bg-white text-[#922b2b] px-12 py-4 rounded-2xl font-extrabold hover:bg-gray-100 transition-all shadow-xl">
                                    Book Now
                                </button>
                                <button className="bg-transparent border-2 border-white/30 text-white px-12 py-4 rounded-2xl font-extrabold hover:bg-white/10 transition-all">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
