import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">Pitbull Coloring Book</h1>
        <p className="text-center text-neutral-400 mb-12">Choose a difficulty level to start coloring</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link href="/simple.html" className="block p-6 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors">
            <h2 className="text-2xl font-bold mb-2 text-green-400">Simple</h2>
            <p className="text-neutral-400">Basic poses perfect for beginners</p>
          </Link>
          
          <Link href="/medium.html" className="block p-6 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors">
            <h2 className="text-2xl font-bold mb-2 text-yellow-400">Medium</h2>
            <p className="text-neutral-400">More detail for intermediate colorers</p>
          </Link>
          
          <Link href="/complex.html" className="block p-6 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors">
            <h2 className="text-2xl font-bold mb-2 text-red-400">Complex</h2>
            <p className="text-neutral-400">Advanced designs for experienced artists</p>
          </Link>
        </div>
      </div>
    </main>
  )
}