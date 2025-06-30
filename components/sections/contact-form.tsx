'use client'

import { motion, useInView } from 'framer-motion'
import { slideInFromRight } from '@/lib/motion'  // make sure this is defined in your project
import { useRef, useState, ChangeEvent, FocusEvent, FormEvent } from 'react'
import emailjs from '@emailjs/browser'

// Type definitions
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface TouchedFields {
  name: boolean;
  email: boolean;
  subject: boolean;
  message: boolean;
}

type FormFieldName = keyof FormData

const formElementVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.5,
      ease: 'easeOut'
    }
  })
}

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut'
    }
  }
}

const headingVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
}

const subheadingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
      duration: 0.6,
      ease: 'easeOut'
    }
  }
}

const textVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.5,
      ease: 'easeOut'
    }
  })
}

const floatingTextVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 * i,
      duration: 0.8,
      ease: 'easeOut'
    }
  })
}

const floatingAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: 'easeInOut'
  }
}

export const ContactForm: React.FC = () => {
  const headingRef = useRef<HTMLDivElement>(null)
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.3 })
  const [isLoading, setIsLoading] = useState(false)

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [errors, setErrors] = useState<FormErrors>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [touched, setTouched] = useState<TouchedFields>({
    name: false,
    email: false,
    subject: false,
    message: false
  })

  const [toastMessage, setToastMessage] = useState<string>('')

  const showToast = (message: string) => {
    setToastMessage(message)
    setTimeout(() => setToastMessage(''), 3000)
  }

  const validateName = (name: string): string => {
    if (!name.trim()) return 'Name is required'
    if (name.trim().length < 3) return 'Name must be at least 3 characters'
    if (!/^[A-Za-z\s]+$/.test(name.trim())) return 'Only letters (a-z, A-Z) and spaces allowed'
    return ''
  }

  const validateEmail = (email: string): string => {
    if (!email.trim()) return 'Email is required'
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) return 'Please enter a valid email address'
    return ''
  }

  const validateSubject = (subject: string): string => {
    if (!subject.trim()) return 'Subject is required'
    if (subject.trim().length < 3) return 'Subject must be at least 3 characters'
    return ''
  }

  const validateMessage = (message: string): string => {
    if (!message.trim()) return 'Message is required'
    if (message.trim().length < 10) return 'Message must be at least 10 characters'
    return ''
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target
    const fieldName = name as FormFieldName

    setFormData(prev => ({
      ...prev,
      [fieldName]: value
    }))

    if (errors[fieldName]) {
      setErrors(prev => ({
        ...prev,
        [fieldName]: ''
      }))
    }
  }

  const handleBlur = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target
    const fieldName = name as FormFieldName

    setTouched(prev => ({
      ...prev,
      [fieldName]: true
    }))

    let error = ''
    switch (fieldName) {
      case 'name':
        error = validateName(value)
        break
      case 'email':
        error = validateEmail(value)
        break
      case 'subject':
        error = validateSubject(value)
        break
      case 'message':
        error = validateMessage(value)
        break
      default:
        const _exhaustiveCheck: never = fieldName
        break
    }

    setErrors(prev => ({
      ...prev,
      [fieldName]: error
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const response = await fetch('https://script.google.com/macros/s/AKfycbzrE_iCaGfEgI3m2N7GGATVg8mhFiopBoxabB433GGwmlIpcmYTYOLxoXarcfnesVLG6g/exec', {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    }),
  });

  const result = await response.json();
  if (result.result === 'success') {
    alert('Submitted successfully!');
  } else {
    alert('Submission failed.');
  }
};

  return (
    <div className="flex flex-col mx-10 min-[2560px]:mx-20 items-center justify-start gap-20 min-[2560px]:gap-32 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 min-[2560px]:px-48 pb-20 md:pb-40 min-[2560px]:pb-60 relative pt-20 md:pt-40 min-[2560px]:pt-60 w-full">
      {/* Toast Notification */}
          {toastMessage && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.8 }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 20,
            duration: 0.5
          }}
          className="fixed top-20 min-[2560px]:top-32 right-4 min-[2560px]:right-8 z-[9999] bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-6 py-3 min-[2560px]:px-8 min-[2560px]:py-4 rounded-lg shadow-xl backdrop-blur-sm border border-white/20 hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 min-[2560px]:text-lg"
        >
          {toastMessage}
        </motion.div>
      )}


      {/* Heading */}
      <div ref={headingRef} className="flex flex-col items-center gap-4 min-[2560px]:gap-8">
        <motion.h1
          variants={headingVariants}
          initial="hidden"
          animate={isHeadingInView ? 'visible' : 'hidden'}
          className="text-3xl sm:text-4xl md:text-5xl min-[2560px]:text-7xl font-bold text-center"
        >
          <motion.span
            custom={0}
            variants={textVariants}
            initial="hidden"
            animate={isHeadingInView ? 'visible' : 'hidden'}
            className="text-white"
          >
            Request for{' '}
          </motion.span>
          <motion.span
            custom={1}
            variants={textVariants}
            initial="hidden"
            animate={isHeadingInView ? 'visible' : 'hidden'}
            className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
          >
            Quote
          </motion.span>
        </motion.h1>
        <motion.p
          variants={subheadingVariants}
          initial="hidden"
          animate={isHeadingInView ? 'visible' : 'hidden'}
          className="text-base sm:text-lg md:text-xl min-[2560px]:text-2xl text-white/70 text-center max-w-md sm:max-w-xl md:max-w-2xl min-[2560px]:max-w-4xl"
        >
          Get in touch with us to discuss your project requirements and receive a detailed quote
        </motion.p>
      </div>

      <div className="flex flex-col gap-8 min-[2560px]:gap-16 w-full">
        <div className="flex flex-col lg:flex-row items-start justify-start gap-10 lg:gap-20 min-[2560px]:gap-32 w-full">
          {/* Form Section */}
          <motion.div
            variants={slideInFromRight(1)}
            initial="hidden"
            animate={isHeadingInView ? 'visible' : 'hidden'}
            className="p-4 sm:p-6 md:p-8 min-[2560px]:p-12 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl w-full lg:w-[600px] min-[2560px]:w-[800px] max-w-full"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 min-[2560px]:gap-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-[2560px]:gap-8">
                <motion.div
                  custom={0}
                  variants={formElementVariants}
                  initial="hidden"
                  animate={isHeadingInView ? 'visible' : 'hidden'}
                  className="flex flex-col gap-2 min-[2560px]:gap-3"
                >
                  <label htmlFor="name" className="text-white/80 text-sm min-[2560px]:text-base font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`px-4 py-3 min-[2560px]:px-6 min-[2560px]:py-4 rounded-lg bg-white/10 border text-white min-[2560px]:text-lg placeholder-gray-400 focus:outline-none transition-colors ${
                      errors.name && touched.name
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-white/20 focus:border-purple-500'
                    }`}
                    placeholder="Your name"
                  />
                  {errors.name && touched.name && (
                    <span className="text-red-400 text-xs min-[2560px]:text-sm">{errors.name}</span>
                  )}
                </motion.div>
                <motion.div
                  custom={1}
                  variants={formElementVariants}
                  initial="hidden"
                  animate={isHeadingInView ? 'visible' : 'hidden'}
                  className="flex flex-col gap-2 min-[2560px]:gap-3"
                >
                  <label htmlFor="email" className="text-white/80 text-sm min-[2560px]:text-base font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`px-4 py-3 min-[2560px]:px-6 min-[2560px]:py-4 rounded-lg bg-white/10 border text-white min-[2560px]:text-lg placeholder-gray-400 focus:outline-none transition-colors ${
                      errors.email && touched.email
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-white/20 focus:border-purple-500'
                    }`}
                    placeholder="your@email.com"
                  />
                  {errors.email && touched.email && (
                    <span className="text-red-400 text-xs min-[2560px]:text-sm">{errors.email}</span>
                  )}
                </motion.div>
              </div>
              <motion.div
                custom={2}
                variants={formElementVariants}
                initial="hidden"
                animate={isHeadingInView ? 'visible' : 'hidden'}
                className="flex flex-col gap-2 min-[2560px]:gap-3"
              >
                <label htmlFor="subject" className="text-white/80 text-sm min-[2560px]:text-base font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`px-4 py-3 min-[2560px]:px-6 min-[2560px]:py-4 rounded-lg bg-white/10 border text-white min-[2560px]:text-lg placeholder-gray-400 focus:outline-none transition-colors ${
                    errors.subject && touched.subject
                      ? 'border-red-500 focus:border-red-500'
                      : 'border-white/20 focus:border-purple-500'
                  }`}
                  placeholder="What's this about?"
                />
                {errors.subject && touched.subject && (
                  <span className="text-red-400 text-xs min-[2560px]:text-sm">{errors.subject}</span>
                )}
              </motion.div>
              <motion.div
                custom={3}
                variants={formElementVariants}
                initial="hidden"
                animate={isHeadingInView ? 'visible' : 'hidden'}
                className="flex flex-col gap-2 min-[2560px]:gap-3"
              >
                <label htmlFor="message" className="text-white/80 text-sm min-[2560px]:text-base font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`px-4 py-3 min-[2560px]:px-6 min-[2560px]:py-4 rounded-lg bg-white/10 border text-white min-[2560px]:text-lg placeholder-gray-400 focus:outline-none transition-colors resize-none ${
                    errors.message && touched.message
                      ? 'border-red-500 focus:border-red-500'
                      : 'border-white/20 focus:border-purple-500'
                  }`}
                  placeholder="Your message here..."
                />
                {errors.message && touched.message && (
                  <span className="text-red-400 text-xs min-[2560px]:text-sm">{errors.message}</span>
                )}
              </motion.div>
              <motion.button
                custom={4}
                variants={formElementVariants}
                initial="hidden"
                animate={isHeadingInView ? 'visible' : 'hidden'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isLoading}
                className={`mt-2 px-6 py-3 min-[2560px]:px-8 min-[2560px]:py-4 bg-gradient-to-r from-purple-500/90 to-cyan-500/90 text-white min-[2560px]:text-lg font-medium rounded-lg hover:opacity-90 transition-opacity ${
                  isLoading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>

          {/* Animated Text Section */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={isHeadingInView ? 'visible' : 'hidden'}
            className="w-full lg:w-[700px] min-[2560px]:w-[900px] h-full flex flex-col justify-start items-start gap-6 sm:gap-8 min-[2560px]:gap-12 mt-8 lg:mt-12 min-[2560px]:mt-16"
          >
            <motion.div
              custom={0}
              variants={floatingTextVariants}
              initial="hidden"
              animate={isHeadingInView ? 'visible' : 'hidden'}
              className="text-2xl sm:text-3xl md:text-4xl min-[2560px]:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
              whileInView={floatingAnimation}
            >
              Let&apos;s Build Something Amazing
            </motion.div>
            <motion.div
              custom={1}
              variants={floatingTextVariants}
              initial="hidden"
              animate={isHeadingInView ? 'visible' : 'hidden'}
              className="text-lg sm:text-xl md:text-2xl min-[2560px]:text-4xl text-white/80"
              whileInView={floatingAnimation}
            >
              Your Vision, Our Expertise
            </motion.div>
            {/* <motion.div
              custom={2}
              variants={floatingTextVariants}
              initial="hidden"
              animate={isHeadingInView ? 'visible' : 'hidden'}
              className="text-base sm:text-lg md:text-xl min-[2560px]:text-3xl text-white/60"
              whileInView={floatingAnimation}
            >
              Transform Your Ideas Into Reality
            </motion.div>
            <motion.div
              custom={3}
              variants={floatingTextVariants}
              initial="hidden"
              animate={isHeadingInView ? 'visible' : 'hidden'}
              className="text-sm sm:text-base md:text-lg min-[2560px]:text-2xl text-white/50 italic"
              whileInView={floatingAnimation}
            >
              Innovation Meets Excellence
            </motion.div>
            <motion.div
              custom={4}
              variants={floatingTextVariants}
              initial="hidden"
              animate={isHeadingInView ? 'visible' : 'hidden'}
              className="text-base sm:text-lg md:text-xl min-[2560px]:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500"
              whileInView={floatingAnimation}
            >
              Crafting Digital Experiences
            </motion.div>
            <motion.div
              custom={5}
              variants={floatingTextVariants}
              initial="hidden"
              animate={isHeadingInView ? 'visible' : 'hidden'}
              className="text-sm sm:text-base md:text-lg min-[2560px]:text-2xl text-white/40"
              whileInView={floatingAnimation}
            >
              Where Technology Meets Creativity
            </motion.div> */}
            <motion.div
              custom={6}
              variants={floatingTextVariants}
              initial="hidden"
              animate={isHeadingInView ? 'visible' : 'hidden'}
              className="text-lg sm:text-xl md:text-2xl min-[2560px]:text-4xl font-semibold text-white/70"
              whileInView={floatingAnimation}
            >
              Crafting digital experiences that transform dreams into code.<br/>
              Where innovation meets creativity and ideas become reality.
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
