import React from 'react'
import SymbolicWebGraph from './components/SymbolicWebGraph'

export default function App() {
  return (
    <div className="App flex flex-col h-screen">
      {/* Header */}
      <header className="py-4 bg-gray-100 shadow">
        <h1 className="text-2xl font-bold text-center">Mātṛkā Symbolic Web</h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4">
        <div className="w-full h-full border rounded-lg overflow-hidden">
          <SymbolicWebGraph />
        </div>
      </main>

      {/* Footer (optional) */}
      <footer className="py-2 bg-gray-50 text-center text-sm">
        © 2025 Mātṛkā • Open Source Dream Graph System
      </footer>
    </div>
  )
}
