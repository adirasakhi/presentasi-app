"use client"

import { motion } from "framer-motion"

export default function KansaiBen() {
  return (
    <main className="bg-black text-white min-h-screen overflow-x-hidden">

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6 relative">
        <img
          src="https://images.unsplash.com/photo-1590556409324-aa1d726e5c3c"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          alt="Osaka night"
        />
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-bold z-10"
        >
          関西弁
        </motion.h1>
        <p className="z-10 text-gray-300 mt-6 text-xl">
          More than just a dialect 🔥
        </p>
      </section>

      {/* PATTERN SHIFT */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <h2 className="text-5xl font-bold mb-12">Pattern Shift</h2>

        <div className="grid md:grid-cols-2 gap-10 text-3xl">
          <div>ない → へん</div>
          <div>だ → や</div>
          <div>よ → で</div>
          <div>の？ → ん？</div>
        </div>

        <p className="text-gray-400 mt-12 text-xl">
          Small change, different vibe 😎
        </p>
      </section>

      {/* SENTENCE TRANSFORMATION */}
      <section className="h-screen flex items-center px-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <img
            src="https://images.unsplash.com/photo-1526481280691-9063e42f8cdd"
            className="rounded-3xl shadow-2xl"
            alt="Japanese street"
          />

          <div className="space-y-6 text-2xl">
            <h2 className="text-4xl font-bold mb-6">Sentence Transformation</h2>

            <p>行かない → 行かへん</p>
            <p>そうだ → そうや</p>
            <p>いいよ → ええで</p>
            <p>何してるの？ → 何してるん？</p>
          </div>
        </div>
      </section>

      {/* COMMON EXPRESSIONS */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <h2 className="text-5xl font-bold mb-10">Common Expressions</h2>

        <div className="text-3xl space-y-6">
          <p>だめ → あかん</p>
          <p>本当 → ほんま</p>
          <p>ありがとう → おおきに</p>
          <p>違う → ちゃう</p>
        </div>
      </section>

      {/* WHERE USED */}
      <section className="h-screen flex items-center px-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/17/Japan_Kansai_region_map.png"
            className="rounded-3xl shadow-2xl bg-white"
            alt="Kansai map"
          />

          <div className="space-y-6">
            <h2 className="text-4xl font-bold mb-6">Where Is It Used? 🗾</h2>

            <p className="text-2xl">📍 大阪 (Osaka)</p>
            <p className="text-2xl">📍 京都 (Kyoto)</p>
            <p className="text-2xl">📍 神戸 (Kobe)</p>
            <p className="text-2xl">📍 奈良 (Nara)</p>

            <p className="text-gray-400 text-lg mt-6">
              Western Japan – Kansai Region
            </p>
          </div>
        </div>
      </section>

      {/* OSAKA ENERGY */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <img
          src="https://images.unsplash.com/photo-1503899036084-c55cdd92da26"
          className="w-[350px] md:w-[600px] rounded-3xl shadow-2xl mb-10"
          alt="Osaka city"
        />

        <h2 className="text-5xl font-bold mb-6">Osaka Energy 😆</h2>

        <p className="text-2xl text-gray-300 max-w-3xl">
          More expressive.  
          More spontaneous.  
          Often used in Japanese comedy 🔥
        </p>

        <p className="mt-8 text-4xl font-bold">
          なんでやねん！
        </p>
      </section>

      {/* PERSONAL REASON */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <h2 className="text-5xl font-bold mb-8">Why I Like It 🎥</h2>

        <p className="text-2xl text-gray-300 mb-8 max-w-3xl">
          Because it feels more emotional ❤️  
          More expressive 🔥  
          And honestly… it just sounds cool 😌
        </p>

        <iframe
          className="w-[350px] md:w-[600px] h-[200px] md:h-[350px] rounded-2xl"
          src="https://www.youtube.com/embed/5kRZlC1tK8Q"
          allowFullScreen
        ></iframe>

        <p className="text-gray-400 mt-6">
          特に「なんでやねん！」が大好きです 😂
        </p>
      </section>

      {/* CLOSING */}
      <section className="h-screen flex flex-col justify-center items-center text-center">
        <h2 className="text-6xl font-bold mb-6">
          おおきに 🙏
        </h2>
        <p className="text-gray-400 text-xl">
          Thank you for listening.
        </p>
      </section>

      <footer className="text-center py-6 text-gray-500 text-sm border-t border-gray-800">
        © Kaelen
      </footer>

    </main>
  )
}

