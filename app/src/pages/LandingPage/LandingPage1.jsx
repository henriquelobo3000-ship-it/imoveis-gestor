import './landing.css'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Benefits } from './components/Benefits'
import { Gallery } from './components/Gallery'
import { CTA } from './components/CTA'

export function Landing() {
  return (
    <>
      <Header />
      <Hero />
      <Benefits />
      <Gallery />
      <CTA />
    </>
  )
}
export function Landing() {
  return (
    <div className="landing">
      <Header />
      <Hero />
      <Benefits />
      <Gallery />
      <CTA />
    </div>
  )
}
