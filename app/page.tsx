import { Hero } from "@/components/hero"
import { Packages } from "@/components/packages"
import { Plans } from "@/components/plans"
import { Location } from "@/components/location"
import { BookingForm } from "@/components/booking-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Packages />
      <Plans />
      <Location />
      <BookingForm />
      <Footer />
    </main>
  )
}
