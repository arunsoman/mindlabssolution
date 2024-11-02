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
    imageSrc: "https://mls-371939617.imgix.net/images/project/01.jpg?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    title: "Afghanistan International Bank",
    category: "Banking & Payments",
    imageSrc: "https://mls-371939617.imgix.net/images/project/02.jpg?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    title: "Afghanistan United Bank",
    category: "Banking & Payments",
    imageSrc: "https://mls-371939617.imgix.net/images/project/03.jpg?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    title: "Kam Air",
    category: "Aviation",
    imageSrc: "https://mls-371939617.imgix.net/images/project/04.jpg?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    title: "MTN",
    category: "Telecom",
    imageSrc: "https://mls-371939617.imgix.net/images/project/05.jpg?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    title: "AWCC My Money",
    category: "Telecom",
    imageSrc: "https://mls-371939617.imgix.net/images/project/06.jpg?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    title: "Ghazanfar Bank",
    category: "Banking",
    imageSrc: "https://mls-371939617.imgix.net/images/project/07.jpg?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    title: "Islamic Bank of Afghanistan",
    category: "Banking",
    imageSrc: "https://mls-371939617.imgix.net/images/project/08.jpg?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    title: "The First MicroFinance Bank",
    category: "Banking",
    imageSrc: "https://mls-371939617.imgix.net/images/project/09.jpg?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
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