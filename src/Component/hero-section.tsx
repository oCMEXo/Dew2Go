import React from "react"
import { Button } from "../Components/ui/button"

export function HeroSection() {
    return (
        <section className="relative bg-white pt-16">
            <div className="container mx-auto px-6 lg:px-12 py-20 lg:py-28">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left side */}
                    <div className="max-w-xl">
                        <div className="inline-block px-4 py-2 bg-slate-100 rounded-full text-sm font-medium text-slate-700 mb-6">
                            IT Staff Augmentation
                        </div>

                        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
                            Staff Augmentation Services
                        </h1>

                        <p className="text-lg text-slate-600 leading-relaxed mb-8">
                            Enhance your team with talented software engineers, DevOps and SRE specialists, detail-oriented QA
                            experts, seasoned project managers, and insightful business analysts.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-6 text-base h-auto">
                                Contact Us
                            </Button>

                            <Button
                                variant="outline"
                                className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-6 text-base h-auto bg-transparent"
                            >
                                Learn More
                            </Button>
                        </div>
                    </div>

                    {/* Right side */}
                    <div className="relative h-[400px] lg:h-[550px]">
                        <img
                            src="/developer-working-on-multiple-monitors-with-code.jpg"
                            alt="Professional developer workspace"
                            loading="lazy"
                            className="object-cover w-full h-full rounded"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
