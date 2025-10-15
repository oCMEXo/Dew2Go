import React, { Suspense, ReactNode, useEffect } from "react"
import "./globals.css"

interface RootLayoutProps {
    children: ReactNode
}

export const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
    // Устанавливаем метаданные динамически (аналог metadata из Next.js)
    useEffect(() => {
        document.title = "Imperial Innovations - High-Tech Project Development"

        const metaDescription = document.querySelector("meta[name='description']")
        if (metaDescription) {
            metaDescription.setAttribute(
                "content",
                "We create high-tech projects and are ready for cooperation. Expert team specializing in modern web development."
            )
        } else {
            const meta = document.createElement("meta")
            meta.name = "description"
            meta.content =
                "We create high-tech projects and are ready for cooperation. Expert team specializing in modern web development."
            document.head.appendChild(meta)
        }
    }, [])

    return (
        <div lang="en" className="scroll-smooth font-sans antialiased">
            <Suspense fallback={null}>{children}</Suspense>
        </div>
    )
}

export default RootLayout

