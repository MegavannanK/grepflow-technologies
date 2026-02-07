"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Cpu } from "lucide-react"

export function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 2000)

        return () => clearTimeout(timer)
    }, [])

    if (!isLoading) return null

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: isLoading ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
            <div className="flex flex-col items-center gap-4">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                    className="bg-primary text-primary-foreground p-4 rounded-2xl shadow-xl shadow-primary/20"
                >
                    <Cpu className="w-10 h-10 md:w-16 md:h-16" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl font-bold tracking-tight text-foreground"
                >
                    Grepflow<span className="text-primary"></span>
                </motion.div>

                <div className="w-48 h-1 bg-muted rounded-full overflow-hidden mt-4">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        className="h-full bg-primary"
                    />
                </div>
            </div>
        </motion.div>
    )
}
