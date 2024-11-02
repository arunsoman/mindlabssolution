"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

interface PortfolioCardProps {
  title: string
  category: string
  imageSrc: string
  className?: string
}

export function PortfolioCard({ title, category, imageSrc, className }: PortfolioCardProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className={cn(
          "group relative cursor-pointer overflow-hidden rounded-lg",
          className
        )}>
          <Image
            src={imageSrc}
            alt={title}
            width={400}
            height={300}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="flex h-full flex-col items-center justify-center p-4 text-white">
              <h3 className="mb-2 text-xl font-bold">{title}</h3>
              <p className="mb-4 text-sm">{category}</p>
              <Button variant="outline" className="text-white hover:bg-white hover:text-black">
                View Project
              </Button>
            </div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[725px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4">
          <Image
            src={imageSrc}
            alt={title}
            width={677}
            height={451}
            className="rounded-lg object-cover"
          />
          <div className="space-y-4">
            <h4 className="font-semibold text-primary">{category}</h4>
            <p className="text-muted-foreground">
              Detailed project description and achievements would go here.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}