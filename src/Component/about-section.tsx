export default function AboutSection() {
    return (
        <section id="about" className="bg-slate-50 py-20 lg:py-28">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">About Dev2Go</h2>
                        <div className="w-20 h-1 bg-slate-900 mx-auto"></div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                        <div className="space-y-6">
                            <h3 className="text-xl font-semibold text-slate-900">Our Expertise</h3>
                            <p className="text-slate-600 leading-relaxed">
                                At Dev2Go, our specialties lie in IT staff augmentation that helps businesses scale quickly and
                                efficiently. Whether you need recruitment talent for a day, a month, or a year, we provide the
                                flexibility and expertise to meet your unique needs.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                Our approach is simple yet effective: we take the time to understand your unique challenges and match
                                you with the right talent, ensuring seamless integration into your team.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-xl font-semibold text-slate-900">Our Commitment</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Our commitment goes beyond filling roles—we aim to build lasting partnerships. With a proven track
                                record in various industries, our experts are handpicked to align with your business objectives.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                We ensure that both clients and our company achieve meaningful, long-lasting outcomes through strategic
                                talent placement and ongoing support.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
