import Button  from "../Component/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
    return (
        <section className="py-32 bg-background relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5" />

            <div className="container mx-auto px-6 lg:px-8 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="relative rounded-3xl bg-gradient-to-br from-primary via-primary/95 to-secondary p-12 md:p-16 lg:p-20 overflow-hidden shadow-2xl">
                        {/* Decorative Elements */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

                        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
                            <div className="flex-1">
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight text-balance">
                                    There are a million reasons to join us.
                                </h2>
                                <p className="text-xl text-white/80 leading-relaxed text-pretty">
                                    Let's build something extraordinary together. Our team is ready to transform your vision into reality.
                                </p>
                            </div>

                            <div className="flex-shrink-0">
                                <Button
                                    size="lg"
                                    className="bg-white text-primary hover:bg-white/90 text-lg px-10 py-7 h-auto font-semibold shadow-xl"
                                >
                                    Find the best for you
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
