import Link from "next/link"
import { Container } from "@/components/ui/Container"
import { Cpu, Github, Twitter, Linkedin } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-[#020617] border-t border-white/5 py-12 md:py-16">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight mb-4 group">
                            <div className="bg-primary/10 text-primary p-2 rounded-xl group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                <Cpu className="w-5 h-5" />
                            </div>
                            <span className="text-foreground group-hover:text-primary transition-colors">Grepflow</span>
                        </Link>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Empowering businesses with cutting-edge products and technology services. Building the future, today.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-foreground">Company</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li><Link href="#about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="#careers" className="hover:text-primary transition-colors">Careers</Link></li>
                            <li><Link href="#blog" className="hover:text-primary transition-colors">Blog</Link></li>
                            <li><Link href="#contact" className="hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-foreground">Services</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li><Link href="#services" className="hover:text-primary transition-colors">Web Development</Link></li>
                            <li><Link href="#services" className="hover:text-primary transition-colors">Mobile Apps</Link></li>
                            <li><Link href="#services" className="hover:text-primary transition-colors">Cloud Solutions</Link></li>
                            <li><Link href="#services" className="hover:text-primary transition-colors">AI Integration</Link></li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-foreground">Connect</h3>
                        <div className="flex gap-4">
                            <Link href="#" className="p-2 bg-background border border-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
                                <Twitter className="w-4 h-4" />
                            </Link>
                            <Link href="#" className="p-2 bg-background border border-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
                                <Github className="w-4 h-4" />
                            </Link>
                            <Link href="#" className="p-2 bg-background border border-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
                                <Linkedin className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="border-t border-muted/50 pt-8 flex flex-col md:flex-row justify-between items-center bg-transparent gap-4 text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Grepflow Technologies. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-foreground">Privacy Policy</Link>
                        <Link href="#" className="hover:text-foreground">Terms of Service</Link>
                    </div>
                </div>
            </Container>
        </footer>
    )
}
