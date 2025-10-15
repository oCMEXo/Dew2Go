// import Image from "next/image"
import {Mail} from "lucide-react"

export default function TeamSection() {
    const team = [
        {
            name: "Alex Hermanovych",
            role: "Chief Executive Officer",
            image: "/ceo-alex.jpg",
            bio: "Alex Hermanovych, our CEO, leads Dev2Go with a clear, client-centric approach that has always prioritized long-term value over quick wins. His philosophy: 'Our clients' success is our success.' With years of experience in IT staff augmentation, Alex ensures that every solution is tailored to match your exact requirements.",
        },
        {
            name: "Mila Chekanovskaya",
            role: "Chief Operating Officer",
            image: "/coo-mila.jpg",
            email: "mila@dev2go.io",
            bio: "Mila Chekanovskaya, Co-Founder and COO of Dev2Go, brings a rich, diverse background in business development, account management, and quality assurance to our team. With her extensive experience in the IT industry, Mila ensures that both clients and our company achieve meaningful, long-lasting outcomes.",
        },
    ]

    return (
        <section id="team" className="py-20 lg:py-28 bg-slate-50">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Leadership Team</h2>
                    <div className="w-20 h-1 bg-slate-900 mx-auto"></div>
                </div>

                <div className="max-w-6xl mx-auto space-y-20">
                    {team.map((member, index) => (
                        <div
                            key={member.name}
                            className={`grid lg:grid-cols-5 gap-8 lg:gap-12 items-start ${
                                index % 2 === 1 ? "lg:grid-flow-dense" : ""
                            }`}
                        >
                            {/* Image */}
                            <div className={`lg:col-span-2 ${index % 2 === 1 ? "lg:col-start-4" : ""}`}>
                                <div className="relative aspect-[3/4] rounded overflow-hidden bg-slate-200">
                                    <img
                                        src={member.image || "/placeholder.svg"}
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Bio */}
                            <div className={`lg:col-span-3 ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">{member.role}</p>
                                        <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">{member.name}</h3>
                                    </div>
                                    <p className="text-slate-600 leading-relaxed">{member.bio}</p>
                                    {member.email && (
                                        <div className="flex items-center gap-2 pt-4">
                                            <Mail className="w-4 h-4 text-slate-400"/>

                                            <a href={`mailto:${member.email}`}
                                               className="text-slate-900 hover:text-slate-700 font-medium transition-colors"
                                            >
                                                {member.email}
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}