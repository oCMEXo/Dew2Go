import { CheckCircle2 } from "lucide-react"

export function ServicesSection() {
    const services = [
        "Faster Hiring Process",
        "Cost-Effectiveness",
        "Scalability and Flexibility",
        "Project Continuity",
        "Reduced Risk",
        "Access to Global Talent Pool",
        "Focus on Core Business",
    ]

    const benefits = [
        {
            title: "Speed & Efficiency",
            description: "Quickly access top-tier talent to meet your urgent needs.",
        },
        {
            title: "Proven Expertise",
            description: "Our team consists of experienced professionals with diverse expertise across various industries.",
        },
        {
            title: "Tailored Solutions",
            description: "We match talent based on your specific requirements, delivering optimized results.",
        },
        {
            title: "Long-term Partnership",
            description: "We are invested in your success, building ongoing, mutually beneficial relationships.",
        },
    ]

    return (
        <section id="services" className="bg-white py-20 lg:py-28">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="max-w-6xl mx-auto">
                    {/* Services List */}
                    <div className="mb-20">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">IT & Business Solutions</h2>
                            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                                Comprehensive services designed to accelerate your business growth
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {services.map((item, index) => (
                                <div key={index} className="flex items-start gap-3 p-6 bg-slate-50 rounded border border-slate-200">
                                    <CheckCircle2 className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                                    <span className="font-medium text-slate-900">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Why Choose Dev2Go */}
                    <div>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Why Choose Dev2Go</h2>
                            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                                Let us help you accelerate growth and achieve your business goals with a trusted partner in IT staff
                                augmentation
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="p-6 bg-slate-50 rounded border border-slate-200">
                                    <h3 className="font-semibold text-slate-900 mb-3 text-lg">{benefit.title}</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed">{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
