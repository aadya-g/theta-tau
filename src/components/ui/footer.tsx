'use client'

import Link from "next/link"
import { Instagram, Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
    return (
        <footer className="border-t py-6 md:py-0">
            <div className="container flex flex-col gap-8 md:gap-12 px-4 md:px-6 py-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-lg font-semibold">About</h3>
                        <nav className="flex flex-col gap-2">
                            <Link className="text-sm text-muted-foreground hover:text-primary transition-colors" href="/about">
                                Our Story
                            </Link>
                            <Link className="text-sm text-muted-foreground hover:text-primary transition-colors" href="/recruitment">
                                Join Us
                            </Link>
                            <Link className="text-sm text-muted-foreground hover:text-primary transition-colors" href="/timeline">
                                History
                            </Link>
                        </nav>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-lg font-semibold">Resources</h3>
                        <nav className="flex flex-col gap-2">
                            <Link className="text-sm text-muted-foreground hover:text-primary transition-colors" href="/blog">
                                Blog
                            </Link>
                            <Link className="text-sm text-muted-foreground hover:text-primary transition-colors" href="#events">
                                Events
                            </Link>
                            <Link className="text-sm text-muted-foreground hover:text-primary transition-colors" href="#faq">
                                FAQ
                            </Link>
                        </nav>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-lg font-semibold">Legal</h3>
                        <nav className="flex flex-col gap-2">
                            <Link className="text-sm text-muted-foreground hover:text-primary transition-colors" href="/privacy">
                                Privacy Policy
                            </Link>
                            <Link className="text-sm text-muted-foreground hover:text-primary transition-colors" href="/terms">
                                Terms of Service
                            </Link>
                        </nav>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-lg font-semibold">Contact</h3>
                        <nav className="flex flex-col gap-2">
                            <a
                                href="mailto:contact@thetatau.org"
                                className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                            >
                                <Mail className="h-4 w-4" />
                                Email Us
                            </a>
                        </nav>
                        <div className="flex gap-4 mt-2">
                            <a
                                href="https://instagram.com/thetatau"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors"
                            >
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a
                                href="https://github.com/thetatau"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors"
                            >
                                <Github className="h-5 w-5" />
                            </a>
                            <a
                                href="https://linkedin.com/company/theta-tau"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors"
                            >
                                <Linkedin className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="border-t pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-muted-foreground text-center md:text-left">
                            © {new Date().getFullYear()} Theta Tau Engineering Fraternity. All rights reserved.
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Made with ♥️ by Theta Tau
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
