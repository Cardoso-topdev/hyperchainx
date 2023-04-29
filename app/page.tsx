import { Inter } from 'next/font/google'
import SplashHeader from './components/splash/SplashHeader'
import SplashMain from './components/splash/SplashMain'


export default function Home() {
  return (
    <main className="bg-backing">
      <SplashHeader />
      <SplashMain />
    </main>
  )
}
