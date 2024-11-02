import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-12 md:py-16 lg:py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="/about" className="text-muted-foreground hover:text-foreground">About Us</a></li>
              <li><a href="/careers" className="text-muted-foreground hover:text-foreground">Careers</a></li>
              <li><a href="/press" className="text-muted-foreground hover:text-foreground">Press</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="/services/consulting" className="text-muted-foreground hover:text-foreground">Consulting</a></li>
              <li><a href="/services/development" className="text-muted-foreground hover:text-foreground">Development</a></li>
              <li><a href="/services/design" className="text-muted-foreground hover:text-foreground">Design</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="/contact" className="text-muted-foreground hover:text-foreground">Contact</a></li>
              <li><a href="/faq" className="text-muted-foreground hover:text-foreground">FAQ</a></li>
              <li><a href="/privacy" className="text-muted-foreground hover:text-foreground">Privacy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="mt-4 text-sm text-muted-foreground">Subscribe to our newsletter for updates and insights.</p>
            <form className="mt-4 flex space-x-2">
              <Input placeholder="Enter your email" type="email" />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between space-y-4 border-t pt-8 md:flex-row md:space-y-0">
          <p className="text-sm text-muted-foreground">© 2024 MindLabs Solutions. All rights reserved.</p>
          <div className="flex space-x-4">
            <Button variant="ghost" size="icon">
              <Twitter className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Facebook className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Instagram className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Github className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}