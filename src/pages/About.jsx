import { motion } from "framer-motion";

const cardVariants = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", bounce: 0.2, duration: 0.8 },
  },
};

const ImageCard = ({ title, content, image, reverse }) => (
  <motion.div
    className={`flex flex-col md:flex-row items-center gap-8 bg-white p-6 md:p-10 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 ${
      reverse ? "md:flex-row-reverse" : ""
    }`}
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true, amount: 0.2 }}
    variants={cardVariants}
  >
    <img
      src={image}
      alt={title}
      className="w-full md:w-1/2 rounded-xl object-cover shadow-md h-64"
    />
    <div className="md:w-1/2 text-left">
      <h2 className="text-2xl font-semibold text-[#8F87F1] mb-3">{title}</h2>
      {Array.isArray(content) ? (
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          {content.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-700">{content}</p>
      )}
    </div>
  </motion.div>
);

export default function About() {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-indigo-100 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-[#8F87F1]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Crafting Style with a Conscience
        </motion.h1>
        <p className="mt-4 text-lg text-gray-600">
          A modern fashion & lifestyle brand blending Indian elegance with
          global appeal.
        </p>
      </div>
      <div className="space-y-12 max-w-6xl mx-auto">
        <ImageCard
          title="Our Story"
          image="/assets/images/w7.jpg"
          content="At ZOUK, we believe fashion should be an expression of both identity and values. Inspired by Indian culture and global trends, our bags, wallets, and travel accessories are designed for the confident and conscious."
        />
        <ImageCard
          title="What We Stand For"
          image="/assets/images/h7.jpg"
          reverse
          content={[
            <>
              <strong>Cruelty-Free Materials:</strong> 100% vegan – no leather,
              no harm.
            </>,
            <>
              <strong>Made in India:</strong> Handcrafted by local artisans.
            </>,
            <>
              <strong>Functional Fashion:</strong> Utility + style in perfect
              harmony.
            </>,
          ]}
        />
        <ImageCard
          title="Why Choose Us"
          image="/assets/images/a1.avif"
          content="We don't just sell fashion — we tell stories. Each product is a reflection of you: bold, intentional, and meaningful. Minimal waste, maximum impact."
        />
        <ImageCard
          title="Our Mission"
          image="/assets/images/bp5.jpg"
          reverse
          content="To redefine fashion through ethically crafted, purposeful products that empower people and promote sustainability — without compromising on style."
        />
      </div>
         
    </div>
  );
}
