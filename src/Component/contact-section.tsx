// import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail } from "lucide-react"
// import React from "react"

export function ContactSection() {
    return (
        <section id="contact" className="bg-white py-20 lg:py-28">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                        {/* Left side - Contact Info */}
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8">Get in Touch</h2>
                            <p className="text-lg text-slate-600 mb-12">
                                Ready to enhance your team? Contact us to discuss your staffing needs.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-slate-100 rounded flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-5 h-5 text-slate-900" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-900 mb-1">Office Location</h3>
                                        <p className="text-slate-600">Warsaw, Poland</p>
                                        <p className="text-slate-600">ul.Malborska, 15</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-slate-100 rounded flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-5 h-5 text-slate-900" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-900 mb-1">Phone</h3>
                                        <p className="text-slate-600">+48 543 268 122</p>
                                        <p className="text-slate-600">+48 572 337 715</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-slate-100 rounded flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-5 h-5 text-slate-900" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                                        <a
                                            href="mailto:info@dev2go.io"
                                            className="text-slate-900 hover:text-slate-700 transition-colors font-medium"
                                        >
                                            info@dev2go.io
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right side - CTA */}
                        <div className="bg-slate-50 p-8 lg:p-12 rounded border border-slate-200">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Need to Fill IT Positions Fast?</h3>
                            <p className="text-slate-600 leading-relaxed mb-8">
                                Our staff augmentation services provide skilled professionals within 2-3 weeks at competitive rates,
                                ensuring rapid scalability without compromising quality. Whether you need software engineers, DevOps
                                experts, or QA specialists, we have the right talent ready to integrate seamlessly into your team.
                            </p>
                            <Button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-6 text-base h-auto w-full">
                                Request Consultation
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
