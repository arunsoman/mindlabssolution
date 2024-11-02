"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { PortfolioCard } from "./portfolio-card"

const categories = [
  "All",
  "Insurance",
  "Banking & Payments",
  "Telecom",
  "Aviation",
] as const

const portfolioItems = [
  {
    title: "Phoenix Assurance",
    category: "Insurance",
    imageSrc: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    title: "Afghanistan International Bank",
    category: "Banking & Payments",
    imageSrc: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    title: "Afghanistan United Bank",
    category: "Banking & Payments",
    imageSrc: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    title: "Kam Air",
    category: "Aviation",
    imageSrc: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    title: "MTN",
    category: "Telecom",
    imageSrc: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    title: "AWCC My Money",
    category: "Telecom",
    imageSrc: "https://images.unsplash.com/photo-1534224039826-c7a0eda0e6b3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
]

export function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState<typeof categories[number]>("All")

  const filteredItems = portfolioItems.filter(
    item => activeCategory === "All" || item.category === activeCategory
  )

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            onClick={() => setActiveCategory(category)}
            className="transition-all"
          >
            {category}
          </Button>
        ))}
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item, index) => (
          <PortfolioCard
            key={index}
            {...item}
            className="aspect-[4/3]"
          />
        ))}
      </div>
    </div>
  )
}