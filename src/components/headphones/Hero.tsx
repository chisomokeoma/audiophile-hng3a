import AppHeader from "../AppHeader"

function Hero() {
  return (
    <section className="w-full font-manrope bg-black aspect-24/12 sm:aspect-48/21 lg:aspect-90/21 relative">
      <AppHeader/>
      <div className="container">
        <h2 className="uppercase text-white text-[1.75rem]/[100%] sm:text-[2.5rem]/[110%] tracking-[0.125rem] sm:tracking-[0.08931rem] font-bold text-center absolute bottom-8 sm:bottom-[6.06rem] left-1/2 -translate-x-1/2">HEADPHONES</h2>
      </div>
    </section>
  )
}

export default Hero