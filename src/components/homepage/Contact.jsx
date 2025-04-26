import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation, Trans } from 'react-i18next';

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: 'easeOut',
            delay
        }
    })
};

export default function Contact() {
    const { t } = useTranslation('contact');
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = t('errors.name');
        if (!formData.email.trim()) {
            newErrors.email = t('errors.email');
        } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(formData.email)) {
            newErrors.email = t('errors.invalid');
        }
        if (!formData.message.trim()) newErrors.message = t('errors.message');
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            alert(t('success'));
            setFormData({ name: '', email: '', message: '' });
            setErrors({});
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <section id="contactanos" className="w-full min-h-screen bg-white py-24 px-6 md:px-20 flex flex-col justify-center items-center">
            <div className="max-w-screen-xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                <motion.div
                    className="space-y-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    variants={fadeInUp}
                >
                    <motion.h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900" custom={0} variants={fadeInUp}>
                        <Trans i18nKey="title">
                            ¿Listo para transformar el <span className="text-blue-600">transporte escolar</span>?
                        </Trans>
                    </motion.h2>

                    <motion.p className="text-lg text-gray-700" custom={0.1} variants={fadeInUp}>
                        {t('subtitle')}
                    </motion.p>

                    <motion.form onSubmit={handleSubmit} className="space-y-4" initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }}>
                        <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-4" custom={0.2} variants={fadeInUp}>
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder={t('form.name')}
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition ${
                                        errors.name ? 'border-red-500' : 'focus:ring-blue-500'
                                    }`}
                                />
                                {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
                            </div>
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder={t('form.email')}
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition ${
                                        errors.email ? 'border-red-500' : 'focus:ring-blue-500'
                                    }`}
                                />
                                {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
                            </div>
                        </motion.div>

                        <motion.div custom={0.3} variants={fadeInUp}>
                            <textarea
                                name="message"
                                placeholder={t('form.message')}
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition ${
                                    errors.message ? 'border-red-500' : 'focus:ring-blue-500'
                                }`}
                            ></textarea>
                            {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message}</p>}
                        </motion.div>

                        <motion.button
                            type="submit"
                            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all"
                            custom={0.4}
                            variants={fadeInUp}
                        >
                            {t('form.submit')}
                        </motion.button>
                    </motion.form>
                </motion.div>

                <motion.div
                    className="w-full h-full"
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <div className="w-full h-[450px] shadow-xl rounded-xl overflow-hidden border">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.118359642551!2d-76.96548062512989!3d-12.104048942969593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c70ab77498c1%3A0xcce9f50642e7c684!2sUniversidad%20Peruana%20de%20Ciencias%20Aplicadas!5e0!3m2!1ses-419!2spe!4v1743938800464!5m2!1ses-419!2spe"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Mapa ubicación UPC"
                        ></iframe>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
