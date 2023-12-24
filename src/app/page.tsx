import Image from 'next/image'
import './globals.css'
import Title from '@/components/Title/Title'
import Projects from '@/components/projects/Projects'
export default function Home() {
  return (
    <main className="main flex min-h-screen flex-col items-center justify-between ">
      <Title />
      <Projects />
    </main>
  )
}
