export default function Footer() {
    return (
        <footer className="w-full bg-white border-t border-gray-100 pt-16 pb-8 mt-20">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-[#922b2b] rounded-xl flex items-center justify-center rotate-3">
                                <span className="text-white font-black text-xl">C</span>
                            </div>
                            <span className="text-2xl font-black text-gray-900 tracking-tighter italic">Cario</span>
                        </div>
                        <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
                            Our vision is to provide convenience and help increase your sales business with premium car rental services.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-base font-bold text-gray-900 mb-6">About</h3>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-sm text-gray-500 hover:text-[#922b2b] transition-colors">How it works</a></li>
                            <li><a href="#" className="text-sm text-gray-500 hover:text-[#922b2b] transition-colors">Featured</a></li>
                            <li><a href="#" className="text-sm text-gray-500 hover:text-[#922b2b] transition-colors">Partnership</a></li>
                            <li><a href="#" className="text-sm text-gray-500 hover:text-[#922b2b] transition-colors">Bussiness Relation</a></li>
                        </ul>
                    </div>

                    {/* Community */}
                    <div>
                        <h3 className="text-base font-bold text-gray-900 mb-6">Community</h3>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-sm text-gray-500 hover:text-[#922b2b] transition-colors">Events</a></li>
                            <li><a href="#" className="text-sm text-gray-500 hover:text-[#922b2b] transition-colors">Blog</a></li>
                            <li><a href="#" className="text-sm text-gray-500 hover:text-[#922b2b] transition-colors">Podcast</a></li>
                            <li><a href="#" className="text-sm text-gray-500 hover:text-[#922b2b] transition-colors">Invite a friend</a></li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h3 className="text-base font-bold text-gray-900 mb-6">Socials</h3>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-sm text-gray-500 hover:text-[#922b2b] transition-colors">Discord</a></li>
                            <li><a href="#" className="text-sm text-gray-500 hover:text-[#922b2b] transition-colors">Instagram</a></li>
                            <li><a href="#" className="text-sm text-gray-500 hover:text-[#922b2b] transition-colors">Twitter</a></li>
                            <li><a href="#" className="text-sm text-gray-500 hover:text-[#922b2b] transition-colors">Facebook</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col md:flex-row items-center gap-2 text-center md:text-left">
                        <p className="text-sm font-bold text-gray-900">
                            ©2026 Cario. All rights reserved
                        </p>
                        <span className="hidden md:block text-gray-300">|</span>
                        <p className="text-sm font-medium text-gray-500">
                            Developed by <span className="text-[#922b2b] font-bold">Ali Huzaifa AHK</span>
                        </p>
                    </div>

                    <div className="flex items-center gap-8">
                        <a href="#" className="text-sm font-bold text-gray-900 hover:text-[#922b2b] transition-colors">Privacy & Policy</a>
                        <a href="#" className="text-sm font-bold text-gray-900 hover:text-[#922b2b] transition-colors">Terms & Condition</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}