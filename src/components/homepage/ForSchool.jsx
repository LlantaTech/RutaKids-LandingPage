import React from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaRoute, FaExclamationTriangle, FaDownload } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export default function ForSchool({ forwardedRef }) {
    const { t } = useTranslation('forSchool');
    const features = t('features', { returnObjects: true });

    const icons = [
        <FaChartLine />,
        <FaRoute />,
        <FaExclamationTriangle />,
        <FaDownload />
    ];

    return (
        <section
            id="colegios"
            className="w-full min-h-screen bg-gradient-to-r from-white to-blue-50 py-24 px-6 md:px-20 flex items-center justify-center"
            ref={forwardedRef}
        >
            <div className="max-w-screen-xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Texto */}
                <div className="text-center lg:text-left">
                    <motion.h2
                        className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {t('title')}
                    </motion.h2>

                    <motion.p
                        className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {t('description')}
                    </motion.p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="flex items-start gap-4 bg-white p-4 rounded-xl shadow hover:shadow-lg transition-all"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                            >
                                <div className="text-blue-600 text-xl">{icons[index]}</div>
                                <p className="text-gray-700 font-medium">{feature}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Imagen dashboard */}
                <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <img
                        src="src/assets/images/web.png"
                        alt="Dashboard plataforma web"
                        className="max-w-md w-full"
                    />
                </motion.div>
            </div>
        </section>
    );
};
