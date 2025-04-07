import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaUserCheck, FaMapMarkedAlt, FaBell, FaSchool } from "react-icons/fa";

const steps = [
    {
        title: "Registro del estudiante",
        description:
            "Los colegios registran a los estudiantes y asignan rutas y paradas para asegurar una experiencia segura desde el primer día.",
        icon: <FaUserCheck size={36} className="text-blue-600" />,
        video: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmxjNWNnMTZ2bGY0bnVkYTQ4amNlcnNpMXIwMTlzY2hnZXJpMnVmNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l4FGEfO2es6g8w4AU/giphy.gif"
    },
    {
        title: "Monitoreo de ruta",
        description:
            "Monitorea en vivo el trayecto del bus escolar. Da a las familias la seguridad de saber dónde están sus hijos, en todo momento.",
        icon: <FaMapMarkedAlt size={36} className="text-blue-600" />,
        video: "https://media.giphy.com/media/QBd2kLB5qDmysEXre9/giphy.gif"
    },
    {
        title: "Notificaciones automáticas",
        description:
            "Recibe alertas instantáneas cuando tu hijo sube o baja del bus. Porque cada segundo de tranquilidad cuenta.",
        icon: <FaBell size={36} className="text-blue-600" />,
        video: "https://i.gifer.com/7SPR.gif"
    },
    {
        title: "Ingreso al colegio",
        description:
            "Confirma la llegada segura del estudiante al colegio. Seguridad garantizada desde el inicio hasta el aula.",
        icon: <FaSchool size={36} className="text-blue-600" />,
        video: "https://i.gifer.com/TngS.gif"
    }
];

export default function HowItWorks({ forwardedRef }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [fadeIn, setFadeIn] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFadeIn(false);
            setTimeout(() => {
                setActiveIndex((prev) => (prev + 1) % steps.length);
                setFadeIn(true);
            }, 300);
        }, 7000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section
            className="bg-white min-h-screen flex flex-col justify-center items-center px-6 py-16 sm:py-24 md:px-12 lg:px-24"
              id="¿Cómo_funciona?"
            ref={forwardedRef}
        >
            <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-2 z-10 relative"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.7 }}
            >
                ¿Cómo funciona?
            </motion.h2>

            <motion.p
                className="text-lg sm:text-xl md:text-2xl pb-10 text-gray-600 mt-2 text-center max-w-2xl z-10 relative mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.7, delay: 0.2 }}
            >
                Seguridad y tranquilidad en cada paso del camino escolar
            </motion.p>

            <div className="backdrop-blur-xl bg-white/60 border border-white/30 rounded-3xl shadow-2xl w-full max-w-screen-xl px-4 sm:px-6 md:p-14 py-10 transition-all duration-700 ease-in-out z-10 relative">
                {/* Paso por íconos */}
                <div className="flex flex-wrap justify-center sm:gap-8 md:gap-16 mb-12 sm:mb-16 relative">
                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            onClick={() => {
                                setFadeIn(false);
                                setTimeout(() => {
                                    setActiveIndex(idx);
                                    setFadeIn(true);
                                }, 300);
                            }}
                            className={`relative cursor-pointer transition-all duration-500 flex items-center justify-center ${
                                activeIndex === idx ? "scale-130 z-20" : "opacity-50 hover:opacity-100"
                            }`}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                        >
                            <div className="w-20 h-20 rounded-full flex items-center justify-center bg-blue-100 text-blue-600 shadow-[0_0_14px_4px_rgba(37,99,235,0.3)] transition-all duration-300 z-auto">
                                {step.icon}
                            </div>
                            {activeIndex === idx && (
                                <svg
                                    key={`circle-${activeIndex}`}
                                    className="absolute top-0 left-0 w-22 h-22 z-0 rotate-[-90deg]"
                                    viewBox="0 0 64 64"
                                >
                                    <circle
                                        cx="32"
                                        cy="32"
                                        r="30"
                                        fill="none"
                                        stroke="#2563eb"
                                        strokeWidth="1.5"
                                        strokeDasharray="188"
                                        strokeDashoffset="0"
                                        strokeLinecap="round"
                                        className="animate-circle-timer"
                                    />
                                </svg>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Contenido del paso */}
                <motion.div
                    className={`flex flex-col md:flex-row justify-between items-center gap-14 transition-all duration-700 ease-in-out transform ${
                        fadeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    key={activeIndex} // fuerza reinicio animación al cambiar de paso
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="w-full md:w-1/2">
                        <motion.p
                            className="uppercase text-sm text-blue-500 font-semibold mb-2 tracking-wide"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            Paso {activeIndex + 1} de {steps.length}
                        </motion.p>
                        <motion.h3
                            className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                        >
                            {steps[activeIndex].title}
                        </motion.h3>
                        <motion.p
                            className="text-lg md:text-xl text-gray-700 font-medium leading-relaxed"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            {steps[activeIndex].description}
                        </motion.p>
                    </div>

                    <motion.div
                        className="w-full md:w-1/2 flex justify-center"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className="bg-black w-full max-w-lg h-56 md:h-64 rounded-2xl shadow-xl overflow-hidden">
                            <img
                                src={steps[activeIndex].video}
                                alt="Paso visual"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Timer animation */}
            <style jsx>{`
                .animate-circle-timer {
                    animation: countdownCircle 7s linear forwards;
                }

                @keyframes countdownCircle {
                    from {
                        stroke-dashoffset: 0;
                    }
                    to {
                        stroke-dashoffset: 188;
                    }
                }
            `}</style>
        </section>
    );
}
