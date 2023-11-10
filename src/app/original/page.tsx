"use client";

import Link from "next/link";
import { useEffect } from "react"

export default function Original() {
  useEffect(() => {
    const input = document.querySelector('#input') as SVGElement
    const output = document.querySelector('#output') as HTMLImageElement

    const svgData = new XMLSerializer().serializeToString(input)
    const svgDataBase64 = btoa(unescape(encodeURIComponent(svgData)))
    const svgDataUrl = `data:image/svg+xml;charset=utf-8;base64,${svgDataBase64}`

    const image = new Image()

    image.addEventListener('load', () => {
      const width = input.getAttribute('width') as string
      const height = input.getAttribute('height') as string
      const canvas = document.createElement('canvas')

      canvas.setAttribute('width', width)
      canvas.setAttribute('height', height)

      const context = canvas.getContext('2d') as CanvasRenderingContext2D
      context.drawImage(image, 0, 0, parseInt(width, 10), parseInt(height, 10))

      const dataUrl = canvas.toDataURL('image/png')
      output.src = dataUrl
    })

    image.src = svgDataUrl
  }, [])

  return (
    <main className="container mx-auto">
      <h1 className="mt-4 mb-4 text-2xl">Original method</h1>
      <nav className="mb-4">
        <Link href="/" className="underline">Back</Link>
      </nav>
      <pre className="mb-4 border p-4">
        {'const svgDataBase64 = btoa(unescape(encodeURIComponent(svgData)))\n'}
        {'const svgDataUrl = `data:image/svg+xml;charset=utf-8;base64,${svgDataBase64}`'}
      </pre>
      <section className="mb-4">
        <h2>Input SVG image</h2>
        <svg xmlns="http://www.w3.org/2000/svg" width="240" height="240" id="input">
          <circle cx="120" cy="120" r="90" fill="#888888" />
        </svg>
      </section>
      <section>
        <h2>Output PNG image</h2>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="" id="output"></img>
      </section>
    </main>
  )
}
