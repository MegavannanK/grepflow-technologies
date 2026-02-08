"use client"

import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { motion } from "framer-motion"
import Image from "next/image"

/* 
  Ideally, use SVGs for logos. 
  For now, we will use the provided logo image.
*/
// Prefix path for GitHub Pages
const basePath = process.env.NODE_ENV === 'production' ? '/grepflow-technologies' : '';

const clients = [
    { name: "MIB Industries", logo: `${basePath}/images/mib-logo.jpg`, width: 200, height: 100 },
    // Add more clients here
]

export function Clients() {
    return (
        <Section id="clients" className="border-t border-muted/50 pb-0 md:pb-3">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Trusted by Market Leaders</h2>
                    <p className="text-muted-foreground">
                        Partnering with forward-thinking companies to build the future.
                    </p>
                </motion.div>

                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
                    {clients.map((client, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative h-40 w-80 flex items-center justify-center p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors"
                        >
                            {/* 
                  Using unoptimized images for valid export if external, 
                  but here we use local. Next.js <Image> needs width/height.
               */}
                            <Image
                                src={client.logo}
                                alt={`${client.name} logo`}
                                width={client.width}
                                height={client.height}
                                className="object-contain max-h-24 w-auto opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 footer-logo-filter"
                            />
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    )
}
