import Link from 'next/link'

export default function Complex() {
  return (
    <main className="min-h-screen bg-neutral-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-red-400 hover:underline mb-8 inline-block">&larr; Back to Home</Link>
        <h1 className="text-4xl font-bold text-center mb-4">Complex Level</h1>
        <p className="text-center text-neutral-400 mb-12">Advanced designs for experienced artists</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="art-card p-4 bg-neutral-800 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-red-400">Playful Pitbull</h3>
            <img src="/complex/playful_complex.svg" alt="Playful Pitbull" className="w-full" />
          </div>
          <div className="art-card p-4 bg-neutral-800 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-red-400">Running Pitbull</h3>
            <img src="/complex/running_complex.svg" alt="Running Pitbull" className="w-full" />
          </div>
        </div>
      </div>
    </main>
  )
}