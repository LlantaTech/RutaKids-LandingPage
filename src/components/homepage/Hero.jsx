import React from 'react';
import { motion } from 'framer-motion';
import heroImg from '/src/assets/images/heroLlanta.webp';
import { useTranslation, Trans } from 'react-i18next';

const Hero = () => {
    const { t } = useTranslation('hero');

    return (
        <section
            id="hero"
            className="min-h-screen w-full bg-white flex items-center justify-center px-4 pt-32 pb-24 sm:py-24 md:px-12 lg:px-24 overflow-x-hidden"
        >
            <div className="max-w-screen-xl w-full flex flex-col items-center justify-center text-center">
                {/* Contenedor Imagen + Texto */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full">
                    {/* Imagen */}
                    <motion.div
                        className="w-full md:w-1/2 flex justify-center"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                    >
                        <img
                            src={heroImg}
                            alt="RutaKids plataforma"
                            className="max-w-lg w-full rounded-2xl shadow-xl"
                        />
                    </motion.div>

                    {/* Texto */}
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <motion.h1
                            className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6"
                            initial={{ opacity: 0, y: -40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Trans i18nKey="title" t={t} components={{ 1: <span className="text-blue-600" /> }} />
                        </motion.h1>

                        <motion.p
                            className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-4"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            {t('subtitle')}
                        </motion.p>

                        <motion.p
                            className="italic text-sm sm:text-base text-gray-500 mb-6"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            {t('quote')}
                        </motion.p>

                        <motion.div
                            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <a
                                href="#contact"
                                className="bg-blue-600 text-white font-medium px-8 py-3 rounded-xl hover:bg-blue-700 transition-all"
                            >
                                {t('demo')}
                            </a>
                            <a href="#funciona" className="text-blue-600 font-medium hover:underline px-6 py-3">
                                {t('how')}
                            </a>
                        </motion.div>
                    </div>
                </div>

                {/* Trusted By */}
                <section
                    className="w-full mt-16 px-4 md:px-0"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <motion.p
                        className="uppercase text-sm text-gray-400 tracking-widest font-medium text-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        {t('trusted')}
                    </motion.p>

                    <motion.div
                        className="mt-10 flex flex-wrap items-center justify-center gap-8 md:gap-24"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <div className="mt-10 flex flex-wrap items-center justify-center gap-8 md:gap-24">
                            <img
                                src="https://i.ibb.co/xtvJMd4v/5.png"
                                alt="Despertares"
                                className="h-10 md:h-14 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transform hover:scale-105 transition duration-300"
                            />
                            <img
                                src="https://www.trilcelm.edu.pe/trujillo/images/LOGO-TRILCE-FONDO-BLANCO--01.png"
                                alt="Trilce"
                                className="h-10 md:h-14 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transform hover:scale-105 transition duration-300"
                            />
                            <img
                                src="https://i.ibb.co/PGDTMwSg/4.png"
                                alt="Fleming"
                                className="h-10 md:h-14 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transform hover:scale-105 transition duration-300"
                            />
                            <img
                                src="https://mlp.edu.pe/wp-content/uploads/2023/06/LOGO-Y-ESCUDO-COLEGIO-MAX-PLANCK-1.jpeg"
                                alt="Max Planck"
                                className="h-10 md:h-14 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transform hover:scale-105 transition duration-300"
                            />
                        </div>
                    </motion.div>
                </section>
            </div>
        </section>
    );
};

export default Hero;
