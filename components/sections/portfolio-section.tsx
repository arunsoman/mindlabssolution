import { PortfolioGrid } from "@/components/portfolio/portfolio-grid"

export function PortfolioSection() {
  return (
    <section className="bg-muted/30 py-20">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold">Let's have a look at what creativity is!</h2>
          <p className="mb-12 text-muted-foreground">
            Our clients are some of the most forward-looking companies in the world.
          </p>
        </div>
        <PortfolioGrid />
      </div>
    </section>
  )
}