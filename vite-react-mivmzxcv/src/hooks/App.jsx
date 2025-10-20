// src/App.jsx
import React from 'react'
import ThemeSwitcher from './components/ThemeSwitcher'
import Schedule from './components/Schedule'
import TodoList from './components/TodoList'
import PomodoroTimer from './components/PomodoroTimer'
import StatsPanel from './components/StatsPanel'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="bg-white dark:bg-gray-800 shadow-sm p-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold">Planificateur & Révisions</h1>
        <ThemeSwitcher />
      </header>

      <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 md:grid-cols-4 gap-4">
        <aside className="md:col-span-1 space-y-4">
          <TodoList />
          <PomodoroTimer />
          <StatsPanel />
        </aside>
        <main className="md:col-span-3 space-y-4">
          <Schedule />
        </main>
      </div>
    </div>
  )
}
