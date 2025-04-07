import { motion, AnimatePresence } from "framer-motion";


export default function AboutTheProduct() {

    return (
        <section
            id="#about-the-product"
            className="bg-[#eaf3ff] h-screen flex items-center justify-center px-6 md:px-20"
        >
            <AnimatePresence mode="wait">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center max-w-5xl w-full"
                >
                    {/* TITULO */}
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-snug">
                        Conoce en 1 minuto por qué <span className="text-blue-600">RutaKids</span> es el futuro del transporte escolar
                    </h2>

                    {/* VIDEO */}
                    <div className="mt-10 rounded-xl overflow-hidden shadow-xl border border-blue-200 max-w-4xl mx-auto">
                        <iframe
                            src="https://www.youtube.com/embed/mco3UX9SqDA?autoplay=1&mute=1&controls=1&loop=1"
                            title="Video RutaKids"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                            className="w-full h-[240px] md:h-[420px]"
                        ></iframe>
                    </div>

                    {/* FRASE */}
                    <p className="mt-8 text-gray-600 italic text-sm md:text-base">
                        “Una herramienta tan simple de usar que cambia todo lo demás.”
                    </p>
                </motion.div>
            </AnimatePresence>
        </section>
    );
}
