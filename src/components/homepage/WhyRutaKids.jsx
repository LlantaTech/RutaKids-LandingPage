import React from 'react';
import { motion } from 'framer-motion';
import { FaBusAlt, FaMobileAlt, FaChalkboardTeacher } from 'react-icons/fa';

const iconVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: {
        scale: 1.2,
        rotate: [0, 5, -5, 5, -5, 0],
        transition: {
            duration: 1.5,
            ease: 'easeInOut'
        }
    }
};

const titleVariants = {
    initial: { opacity: 0, y: -20 },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: 'easeOut'
        }
    }
};

const bulletVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            delay: i * 0.15
        }
    })
};

const features = [
    {
        icon: FaBusAlt,
        title: 'Control del transporte escolar',
        description: 'Supervisa y gestiona de forma eficiente el transporte escolar con visibilidad en tiempo real.',
        bullets: [
            'Supervisa salidas y llegadas en tiempo real',
            'Tecnología RFID integrada',
            'Visibilidad total para el colegio'
        ]
    },
    {
        icon: FaMobileAlt,
        title: 'Comunicación instantánea',
        description: 'Mantén informadas a las familias con notificaciones automáticas y actualizaciones al instante.',
        bullets: [
            'Notificaciones automáticas a padres',
            'Actualizaciones al momento',
            'Mayor tranquilidad para las familias'
        ]
    },
    {
        icon: FaChalkboardTeacher,
        title: 'Gestión eficiente para colegios',
        description: 'Administra rutas, asistencia y estudiantes desde un panel web intuitivo y centralizado.',
        bullets: [
            'Panel web intuitivo y accesible',
            'Administra rutas, asistencia y más',
            'Optimización operativa diaria'
        ]
    }
];

export default function WhyRutaKids({ forwardedRef }) {
    return (
        <section
            id="¿Por_qué_elegirnos?"
            ref={forwardedRef}
            className="bg-blue-50  min-h-screen flex flex-col justify-center items-center px-6 py-16 sm:py-24 md:px-12 lg:px-24"
        >
            <motion.p
                className="text-lg sm:text-xl font-medium text-blue-600 uppercase tracking-wide mb-2 text-center"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6 }}
            >
                ¿Por qué elegirnos?
            </motion.p>
            <motion.h2
                className="text-3xl sm:text-5xl font-semibold text-gray-900 mb-16 text-center"
                variants={titleVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: false }}
            >
                Descubre los beneficios de RutaKids
            </motion.h2>

            <div className="grid gap-16 md:grid-cols-3">
                {features.map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                        <motion.div
                            key={index}
                            className="text-left group"
                            whileHover="hover"
                            whileTap={{ scale: 0.97 }}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                        >
                            <motion.div
                                variants={iconVariants}
                                className="p-4 rounded-full w-fit mb-4 text-blue-600"
                            >
                                <IconComponent size={48} />
                            </motion.div>
                            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-base sm:text-xl text-gray-600 mb-4">
                                {feature.description}
                            </p>
                            <ul className="text-sm sm:text-base list-disc text-gray-700 space-y-2 pl-6">
                                {feature.bullets.map((bullet, i) => (
                                    <motion.li
                                        key={i}
                                        custom={i}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: false }}
                                        variants={bulletVariants}
                                    >
                                        {bullet}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
