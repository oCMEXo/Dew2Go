import {Link} from "react-router-dom"
import  Button  from "../Component/ui/button"

export default function Header() {
    return (
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="flex items-center justify-between h-16">
                    <Link to="/" className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-slate-900 rounded flex items-center justify-center">
                            <span className="text-white font-bold text-lg">D2G</span>
                        </div>
                        <span className="text-xl font-semibold text-slate-900">Dev2Go</span>
                    </Link>

                    <nav className="hidden md:flex items-center gap-1">
                        <Link
                            to="/about"
                            className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded transition-colors"
                        >
                            About
                        </Link>
                        <Link
                            to="/services"
                            className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded transition-colors"
                        >
                            Services
                        </Link>
                        <Link
                            to="/team"
                            className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded transition-colors"
                        >
                            Team
                        </Link>
                        <Link
                            to="/contact"
                            className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded transition-colors"
                        >
                            Contact
                        </Link>
                        <Button className="ml-4 bg-slate-900 hover:bg-slate-800 text-white">Get Started</Button>
                    </nav>
                </div>
            </div>
        </header>
    )
}
