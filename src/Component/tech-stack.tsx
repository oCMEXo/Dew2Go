export function TechStack() {
    const technologies = [
        { name: "JavaScript", color: "bg-yellow-500" },
        { name: "C#", color: "bg-purple-600" },
        { name: "Docker", color: "bg-blue-500" },
        { name: "HTML", color: "bg-orange-600" },
        { name: "CSS", color: "bg-blue-600" },
    ]

    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-muted-foreground tracking-wider uppercase mb-4">Our Expertise</h2>
                    <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground">PROGRAMMING LANGUAGES</h3>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
                    {technologies.map((tech) => (
                        <div
                            key={tech.name}
                            className="aspect-square rounded-xl bg-foreground flex items-center justify-center text-background text-3xl md:text-4xl font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
                        >
                            {tech.name}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
