import {Link} from "react-router-dom"

export default function Footer() {
    return (
        <footer className="bg-slate-900 py-16">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                        <div className="md:col-span-2">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 bg-white rounded flex items-center justify-center">
                                    <span className="text-slate-900 font-bold text-lg">D2G</span>
                                </div>
                                <span className="text-xl font-semibold text-white">Dev2Go</span>
                            </div>
                            <p className="text-slate-400 leading-relaxed max-w-md">
                                Your trusted partner in IT staff augmentation. We connect businesses with top-tier technology
                                professionals to drive growth and innovation.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h4>
                            <ul className="space-y-3">
                                <li>
                                    <Link to="/about" className="text-slate-400 hover:text-white transition-colors text-sm">
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/services" className="text-slate-400 hover:text-white transition-colors text-sm">
                                        Services
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/team" className="text-slate-400 hover:text-white transition-colors text-sm">
                                        Team
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact" className="text-slate-400 hover:text-white transition-colors text-sm">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contact</h4>
                            <ul className="space-y-3 text-slate-400 text-sm">
                                <li>Warsaw, Poland</li>
                                <li>ul.Malborska, 15</li>
                                <li>
                                    <a href="mailto:info@dev2go.io" className="hover:text-white transition-colors">
                                        info@dev2go.io
                                    </a>
                                </li>
                                <li>+48 543 268 122</li>
                            </ul>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-slate-800">
                        <p className="text-sm text-slate-400 text-center">
                            © {new Date().getFullYear()} Dev2Go. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
