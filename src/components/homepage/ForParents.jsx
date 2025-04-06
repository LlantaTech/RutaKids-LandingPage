import React from 'react';
import { motion } from 'framer-motion';
import { FaBell, FaMapMarkedAlt, FaCheckCircle, FaClock } from 'react-icons/fa';

const features = [
    {
        icon: <FaBell className="text-blue-600 text-xl" />,
        title: 'Notificaciones automáticas',
        description: 'Alertas al instante cuando el estudiante sube o baja del bus.',
    },
    {
        icon: <FaMapMarkedAlt className="text-blue-600 text-xl" />,
        title: 'Ubicación en tiempo real',
        description: 'Sigue el trayecto del bus desde el celular.',
    },
    {
        icon: <FaCheckCircle className="text-blue-600 text-xl" />,
        title: 'Confirmación de llegada',
        description: 'Recibe confirmación automática al llegar al colegio.',
    },
    {
        icon: <FaClock className="text-blue-600 text-xl" />,
        title: 'Historial completo',
        description: 'Accede a registros de viajes y asistencia escolar.',
    },
];

export default function  ParentsSection ({ forwardedRef }) {
    return (
        <section
            id="padres"
            className="w-full min-h-screen bg-gradient-to-r from-white to-blue-50 py-24 px-6 md:px-20 flex items-center justify-center"
            ref={forwardedRef}
        >
            <div className="max-w-screen-xl w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
                {/* Mockups animados */}
                <div className="relative w-full flex justify-center items-center min-h-[420px] sm:min-h-[480px]">
                    <motion.div
                        className="absolute"
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                    >
                        <img
                            src="https://codeminds-appsmoviles-sw65.github.io/CodeMinds-LandingPage/assets/atras.png"
                            alt="Mockup atras"
                            className="w-40 sm:w-48 md:w-56 lg:w-64 relative z-0 sm:translate-x-3 translate-x-10"
                        />
                    </motion.div>
                    <motion.div
                        className="absolute"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
                    >
                        <img
                            src="https://codeminds-appsmoviles-sw65.github.io/CodeMinds-LandingPage/assets/adelante.png"
                            alt="Mockup adelante"
                            className="w-40 sm:w-48 md:w-56 lg:w-64 relative z-10 sm:-translate-x-32 sm:translate-y-9 -translate-x-10 translate-y-10"
                        />
                    </motion.div>
                </div>

                {/* Texto funcional actualizado */}
                <div className="text-center lg:text-left">
                    <motion.h2
                        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Una app poderosa para los padres, tranquilidad para tu colegio
                    </motion.h2>

                    <motion.p
                        className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 leading-relaxed"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        RutaKids conecta a las familias con el colegio en tiempo real. Estas funciones mejoran la experiencia del padre y reducen la carga del colegio:
                    </motion.p>

                    {/* Tarjetas minimalistas funcionales */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                        {features.map((item, i) => (
                            <motion.div
                                key={i}
                                className="p-5 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition duration-300"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 * i }}
                            >
                                <div className="flex items-start gap-3">
                                    <div className="mt-1">{item.icon}</div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800 text-base mb-1">{item.title}</h4>
                                        <p className="text-sm text-gray-600">{item.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>


                    <motion.p
                        className="text-base text-gray-600 italic mt-8 mb-8"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        “Un colegio que informa y cuida, es un colegio en el que las familias confían.”
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/203px-Download_on_the_App_Store_Badge.svg.png?20170219160111"
                            alt="App Store"
                            className="h-12 sm:h-10 mx-auto sm:mx-0"
                        />
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                            alt="Google Play"
                            className="h-12 sm:h-10 mx-auto sm:mx-0"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
