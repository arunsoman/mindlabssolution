import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Monitor, Smartphone, Settings2, BarChart3, ChevronRight, Star } from "lucide-react"
import { PortfolioSection } from "@/components/sections/portfolio-section"
import Image from "next/image"
import ProductsSection from "@/components/sections/products-section "

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background py-20 md:py-32">
        <Image
          src="https://mls-371939617.imgix.net/images/slider/05.jpg?w=1800&auto=format&fit=crop&q=80"
          alt="Technology Background"
          fill
          className="object-cover object-center"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/95" />
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Empowering Businesses with Next-Gen Solutions
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Transform your business with cutting-edge technology solutions. Expert team, proven results, and innovative approaches to drive your success.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
              <Button size="lg">
                Explore Our Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Watch Our Story
              </Button>
            </div>
          </div>
        </div>
      </section>
    <ProductsSection/>
      {/* Portfolio Section */}
      <PortfolioSection />

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold">What Our Clients Say</h2>
            <p className="mb-12 text-muted-foreground">
              Don't just take our word for it
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO, TechCorp",
                content: "Working with MindLabs has been transformative for our business. Their expertise and dedication are unmatched.",
                rating: 5,
              },
              {
                name: "Michael Chen",
                role: "CTO, InnovateCo",
                content: "The team's technical knowledge and problem-solving abilities exceeded our expectations.",
                rating: 5,
              },
              {
                name: "Emily Brown",
                role: "Director, FutureScale",
                content: "MindLabs delivered our project on time and within budget. Their attention to detail is impressive.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="transition-all hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="mb-4 text-muted-foreground">{testimonial.content}</p>
                  <div className="flex items-center">
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
  {/* Rest of the sections remain unchanged */}
      {/* Services Section */}
      <section className="bg-muted/50 py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Empowering Growth Through Digital Transformation.</h2>
            <p className="mb-12 text-muted-foreground">
              Trusted by Fortune 100 companies and leading brands to drive innovation and elevate enterprise solutions.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Monitor className="h-10 w-10" />,
                title: "Web & Mobile App Development",
                services: [
                  "E-commerce strategy",
                  "Custom design",
                  "Front-End development",
                  "Business intelligence",
                ],
              },
              {
                icon: <Smartphone className="h-10 w-10" />,
                title: "Data Management",
                services: [
                  "iOS",
                  "Android",
                  "Hybrid platform",
                  "User testing",
                ],
              },
              {
                icon: <Settings2 className="h-10 w-10" />,
                title: "Product Engineering",
                services: [
                  "UI/UX design",
                  "Visual design",
                  "Brand identity",
                ],
              },
              {
                icon: <BarChart3 className="h-10 w-10" />,
                title: "Big Data & Analytics",
                services: [
                  "Marketing Strategy",
                  "Paid Media",
                  "Influencer Marketing",
                ],
              },
            ].map((service, index) => (
              <Card key={index} className="group transition-all hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-6 rounded-full bg-primary/10 p-3 text-primary w-fit">
                    {service.icon}
                  </div>
                  <h3 className="mb-4 text-xl font-semibold">{service.title}</h3>
                  <ul className="mb-6 space-y-3">
                    {service.services.map((item, i) => (
                      <li key={i} className="flex items-center text-muted-foreground">
                        <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button variant="link" className="group-hover:text-primary p-0">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    
      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground">
        <div className="container py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Ready to Transform Your Business?</h2>
            <p className="mb-8 text-primary-foreground/90">
              Let's discuss how we can help you achieve your goals
            </p>
            <Button size="lg" variant="secondary">
              Get Started Today
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}