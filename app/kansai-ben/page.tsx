"use client"

import { motion } from "framer-motion"

export default function KansaiBen() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#0a0f1f] text-white py-20 px-6 space-y-32">

      {/* HERO */}
      <section className="max-w-6xl mx-auto bg-[#111827]/80 backdrop-blur-lg rounded-3xl p-16 shadow-2xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-bold mb-6"
        >
          関西弁
        </motion.h1>
        <p className="text-gray-400 text-xl">
          Kansai Dialect — energetic, expressive, unforgettable 🔥
        </p>
      </section>

      {/* MAP SECTION */}
      <section className="max-w-6xl mx-auto bg-[#111827]/80 rounded-3xl p-16 shadow-2xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src="/kansai-map.jpg"
            className="rounded-2xl shadow-xl bg-white"
            alt="Kansai Map"
          />

          <div>
            <h2 className="text-4xl font-bold mb-6">
              Where is it used? 🗾
            </h2>
            <p className="text-2xl">📍 Osaka</p>
            <p className="text-2xl">📍 Kyoto</p>
            <p className="text-2xl">📍 Kobe</p>
            <p className="text-2xl">📍 Nara</p>
          </div>
        </div>
      </section>

      {/* COMPARISON IMAGE */}
      <section className="max-w-6xl mx-auto bg-[#111827]/80 rounded-3xl p-16 shadow-2xl text-center">
        <h2 className="text-4xl font-bold mb-12">
          Standard vs Kansai
        </h2>

        <img
          src="/kansai-chart.jpg"
          className="rounded-2xl shadow-2xl mx-auto"
          alt="Kansai comparison"
        />
      </section>

      {/* STRUCTURE */}
      <section className="max-w-6xl mx-auto bg-[#111827]/80 rounded-3xl p-16 shadow-2xl text-center">
        <h2 className="text-4xl font-bold mb-12">
          Pattern Shift
        </h2>

        <div className="grid md:grid-cols-2 gap-10 text-3xl">
          <div>ない → へん</div>
          <div>だ → や</div>
          <div>よ → で</div>
          <div>の？ → ん？</div>
        </div>
      </section>

      {/* PERSONAL */}
      <section className="max-w-6xl mx-auto bg-[#111827]/80 rounded-3xl p-16 shadow-2xl text-center">
        <h2 className="text-4xl font-bold mb-8">
          Why I Like Kansai-ben 🎥
        </h2>

        <p className="text-2xl text-gray-300 mb-8">
          It feels more emotional ❤️  
          More expressive 🔥  
          And honestly… it just sounds cool 😌
        </p>

        <iframe
          className="w-full md:w-[700px] h-[300px] md:h-[400px] rounded-2xl mx-auto"
          src="https://www.youtube.com/embed/5kRZlC1tK8Q"
          allowFullScreen
        ></iframe>
      </section>

      {/* CLOSING */}
      <section className="text-center">
        <h2 className="text-5xl font-bold mb-6">
          おおきに 🙏
        </h2>
        <p className="text-gray-400">
          Thank you for listening.
        </p>
      </section>

      <footer className="text-center text-gray-500 text-sm pt-10">
        © Kaelen
      </footer>

    </main>
  )
}
