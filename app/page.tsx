"use client"

import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

const topics = [
  {
    title: "ない形",
    desc: "Verb Negative Form",
    slug: "nai-kei",
    image: "https://images.unsplash.com/photo-1528164344705-47542687000d",
  },
  {
    title: "い形容詞",
    desc: "I-Adjective Form",
    slug: "i-keiyoushi",
    image: "https://images.unsplash.com/photo-1504788363733-507549153474",
  },
  {
    title: "可能形",
    desc: "Potential Form",
    slug: "kanoukei",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
  },
  {
    title: "関西弁",
    desc: "Kansai Dialect",
    slug: "kansai-ben",
    image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9",
  },
]

export default function Home() {
  const router = useRouter()

  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Zenbu Boku no Happyou 🇯🇵
        </h1>
        <p className="text-gray-400 text-lg">
          Click and enter the stage.
        </p>
      </section>

      {/* CARD GRID */}
      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-8 pb-20 max-w-7xl mx-auto">
        {topics.map((topic, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="relative rounded-3xl overflow-hidden cursor-pointer group shadow-2xl"
            onClick={() => router.push(`/${topic.slug}`)}
          >
            {/* Background Image */}
            <img
              src={topic.image}
              alt={topic.title}
              className="h-64 w-full object-cover group-hover:scale-110 transition duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition"></div>

            {/* Text */}
            <div className="absolute bottom-6 left-6">
              <h2 className="text-2xl font-bold">
                {topic.title}
              </h2>
              <p className="text-gray-300 text-sm">
                {topic.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-gray-500 text-sm border-t border-gray-800">
        © Kaelen
      </footer>

    </main>
  )
}
