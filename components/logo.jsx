import React from 'react'
import { SparklesCore } from './ui/sparkles'
import Link from 'next/link'

const Logo = ({ children }) => {
    return (
        <div className="h-16 backgroud-melt w-auto bg-black flex flex-col items-center justify-center overflow-hidden rounded-md pl-2">
            <Link href={"/"}>
                <h1 className="text-2xl font-bold text-center text-white relative z-20">
                    {children}
                </h1>
            </Link>
            <div className="w-full h-1 relative">
                {/* Gradients */}
                <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-full blur-sm" />
                <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-full" />
                <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-full blur-sm" />
                <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-full" />

                {/* Core component */}
                <SparklesCore
                    background="transparent"
                    minSize={0.2}
                    maxSize={0.5}
                    particleDensity={1200}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                />
            </div>
        </div>
    )
}

export default Logo