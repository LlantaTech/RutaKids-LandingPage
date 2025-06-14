
import { useState, useEffect, useRef } from "react"
import { AnimatePresence } from "framer-motion"
import { gsap } from "gsap"

const LoadingScreen = ({ onLoadingComplete }) => {
    const [isComplete, setIsComplete] = useState(false)
    const containerRef = useRef(null)
    const tireRef = useRef(null)

    useEffect(() => {
        const tl = gsap.timeline()

        // Initial setup - tire starts off-screen left
        gsap.set(tireRef.current, {
            x: -200,
            rotation: 0,
        })

        // Animation sequence
        tl
            // 1. Roll in from left to center
            .to(tireRef.current, {
                x: 0,
                rotation: 720, // 2 full rotations while moving
                duration: 2,
                ease: "power2.out",
            })

            // 2. Stay in center and keep rotating
            .to(tireRef.current, {
                duration: 0.5,
                ease: "none",
            })

            // 3. Roll out to the right
            .to(tireRef.current, {
                x: 200,
                rotation: "+=720", // 2 more rotations while exiting
                duration: 1.8,
                ease: "power2.in",
            })

            // 4. Fade out and complete
            .to(containerRef.current, {
                opacity: 0,
                duration: 0.6,
                ease: "power2.inOut",
                onComplete: () => {
                    setIsComplete(true)
                    onLoadingComplete()
                },
            })

        return () => tl.kill()
    }, [onLoadingComplete])

    return (
        <AnimatePresence>
            {!isComplete && (
                <div
                    ref={containerRef}
                    className="fixed inset-0 z-[9999] bg-white flex items-center justify-center overflow-hidden"
                >
                    {/* Rolling tire */}
                    <div ref={tireRef} className="flex items-center justify-center">
                        <svg
                            width="100"
                            height="100"
                            viewBox="0 0 186 181"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-40 h-40"
                        >
                            <ellipse cx="93" cy="92.5" rx="93" ry="88.5" fill="white" />
                            <path
                                d="M64.7075 35.2801C65.3999 35.0006 66.1051 34.7323 66.8231 34.4751L69.035 33.7205C79.5686 30.3273 93.4745 28.8123 116.991 33.9385C127.499 36.2304 135.391 43.3523 140.507 51.3797C146.931 61.4644 150.701 75.0149 150.701 89.6722C150.701 104.335 146.931 117.88 140.507 127.965C135.384 135.992 127.492 143.114 116.991 145.406C93.4745 150.532 79.5686 149.017 69.035 145.63L66.8296 144.869C66.1194 144.613 65.4141 144.346 64.7139 144.07C55.7574 140.531 48.4423 133.035 43.4159 123.733C38.3318 114.325 35.2993 102.58 35.2993 89.6722C35.2993 76.7646 38.3318 65.0197 43.4159 55.6115C48.4423 46.3095 55.751 38.8131 64.7075 35.2801ZM112.234 44.9511C106.765 44.9511 100.469 48.4952 95.1734 56.8134C89.9868 64.9414 86.5889 76.5466 86.5889 89.6722C86.5889 102.798 89.9868 114.403 95.1734 122.531C100.469 130.849 106.765 134.393 112.234 134.393C117.702 134.393 123.998 130.849 129.294 122.531C134.48 114.403 137.878 102.798 137.878 89.6722C137.878 76.5466 134.48 64.9414 129.294 56.8134C123.998 48.4952 117.702 44.9511 112.234 44.9511ZM112.234 70.1067C116.76 70.1067 119.991 73.2316 121.902 76.5633C123.908 80.0628 125.056 84.7026 125.056 89.6722C125.056 94.6419 123.902 99.2817 121.902 102.781C119.991 106.113 116.76 109.238 112.234 109.238C107.707 109.238 104.476 106.113 102.566 102.781C100.565 99.2817 99.4112 94.6419 99.4112 89.6722C99.4112 84.7026 100.565 80.0628 102.566 76.5633C104.476 73.2372 107.707 70.1067 112.234 70.1067Z"
                                fill="#2563EB"
                            />
                        </svg>
                    </div>
                </div>
            )}
        </AnimatePresence>
    )
}

export default LoadingScreen
