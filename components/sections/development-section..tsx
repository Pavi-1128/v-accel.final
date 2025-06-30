import { motion } from 'framer-motion';

const stacks = [
  {
    title: 'Frontend',
    items: ['React.js', 'Next.js', 'TailwindCSS'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express.js', 'NestJS'],
  },
  {
    title: 'Mobile Apps',
    items: ['Flutter', 'React Native'],
  },
  {
    title: 'APIs',
    items: ['REST', 'GraphQL'],
  },
  {
    title: 'Database',
    items: ['MongoDB', 'PostgreSQL', 'MySQL'],
  },
  {
    title: 'Cloud',
    items: ['AWS', 'Azure'],
  },
  {
    title: 'Authentication',
    items: ['JWT', 'OAuth2'],
  },
  {
    title: 'Hosting',
    items: ['Vercel', 'AWS Elastic Beanstalk'],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

export default function DevelopmentSection() {
  return (
    <section className="relative w-full min-h-[700px] flex flex-col justify-center items-center overflow-hidden py-24 px-4 bg-gradient-to-b from-yellow-400 to-yellow-300">
      {/* SVG Mountain background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
        <svg viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover">
          <path fill="#222" fillOpacity="1" d="M0,256L80,229.3C160,203,320,149,480,154.7C640,160,800,224,960,229.3C1120,235,1280,181,1360,154.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" />
        </svg>
      </div>
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-4xl md:text-5xl font-bold text-center text-white drop-shadow-lg mb-4"
        >
          <span className="bg-white/80 px-4 py-1 rounded-xl text-black shadow-md">Custom Software Development</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="text-xl md:text-2xl text-black/90 font-medium text-center mb-12 max-w-3xl"
        >
          Revolutionize Your Operations: Transform with Software Tailored to Your Needs.
        </motion.p>
        {/* Cards */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full justify-center">
          {stacks.map((stack, i) => (
            <motion.div
              key={stack.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="rounded-2xl bg-white/20 backdrop-blur-lg border border-white/20 shadow-xl p-6 flex flex-col items-center min-h-[180px]"
            >
              <div className="text-lg font-bold text-black/90 mb-2 text-center">{stack.title}</div>
              <ul className="flex flex-col gap-1">
                {stack.items.map((item) => (
                  <li key={item} className="text-base text-black/80 font-medium text-center">{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 
