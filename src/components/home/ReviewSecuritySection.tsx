"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register the ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

// Sample product images for the marquee
const productImages = [
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  "https://images.unsplash.com/photo-1560343090-f0409e92791a",
  "https://images.unsplash.com/photo-1546868871-7041f2a55e12",
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  "https://images.unsplash.com/photo-1572635196237-14b3f281503f",
  "https://images.unsplash.com/photo-1560393464-5c69a73c5770",
  
]

export const ReviewSecuritySection = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const paragraphRef = useRef<HTMLParagraphElement>(null)
  const marqueeRef = useRef<HTMLDivElement>(null)
  const imagesRef = useRef<(HTMLDivElement | null)[]>([])

  // Text fade-in animation with ScrollTrigger
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        headingRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        },
      )

      // Paragraph animation with slight delay
      gsap.fromTo(
        paragraphRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert() // Cleanup
  }, [])

  // Marquee animation
  useEffect(() => {
    if (!marqueeRef.current) return

    const marqueeItems = marqueeRef.current.children
    const totalWidth = Array.from(marqueeItems).reduce(
      (width, item) => width + (item as HTMLElement).offsetWidth + 32, // 32px is the gap
      0,
    )

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        repeat: -1,
        defaults: { ease: "none" },
      })

      tl.to(marqueeRef.current, {
        x: -totalWidth / 2,
        duration: 30,
        ease: "linear",
      })
    })

    return () => ctx.revert() // Cleanup
  }, [])

  // Image hover animations
  useEffect(() => {
    const imageElements = imagesRef.current.filter(Boolean)

    imageElements.forEach((el) => {
      if (!el) return

      // Create hover animations for each image
      el.addEventListener("mouseenter", () => {
        gsap.to(el, {
          scale: 1.05,
          y: -5,
          boxShadow: "0 0 20px rgba(215,153,33,0.3)",
          duration: 0.3,
          ease: "power2.out",
        })
      })

      el.addEventListener("mouseleave", () => {
        gsap.to(el, {
          scale: 1,
          y: 0,
          boxShadow: "0 0 0px rgba(215,153,33,0)",
          duration: 0.3,
          ease: "power2.in",
        })
      })
    })

    return () => {
      // Clean up event listeners
      imageElements.forEach((el) => {
        if (!el) return
        el.removeEventListener("mouseenter", () => {})
        el.removeEventListener("mouseleave", () => {})
      })
    }
  }, [])

  // Staggered image appearance animation
  useEffect(() => {
    const imageElements = imagesRef.current.filter(Boolean)

    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageElements,
        {
          opacity: 0,
          y: 30,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: marqueeRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      )
    })

    return () => ctx.revert() // Cleanup
  }, [])

  return (
    <section ref={sectionRef} className="py-24 px-4 bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2
            ref={headingRef}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
          >
            Are your reviews secure?
          </h2>
          <p ref={paragraphRef} className="text-gray-400 max-w-3xl mx-auto">
            Product reviews can easily be manipulated and cannot be trusted.
          </p>
        </div>

        {/* Marquee section */}
        <div className="relative overflow-hidden py-8">
          <div className="flex gap-8" ref={marqueeRef}>
            {[...productImages, ...productImages].map((src, idx) => (
              <div
                key={idx}
                ref={(el) => (imagesRef.current[idx] = el)}
                className="flex-shrink-0 w-40 h-40 relative rounded-2xl overflow-hidden border border-gray-800 shadow-lg transition-all duration-300"
              >
                <img
                  src={src || "/placeholder.svg"}
                  alt={`Product ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}