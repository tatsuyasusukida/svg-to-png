"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto">
      <h1 className="mt-4 mb-4 text-2xl">How to convert SVG to PNG with JavaScript</h1>
      <p className="mb-4">
        For information on this web page, please see the page below.
      </p>
      <nav className="mb-4">
        <Link href="https://gist.github.com/tatsuyasusukida/1261585e3422da5645a1cbb9cf8813d6" className="underline">
          Gist page
        </Link>
      </nav>
      <section className="mb-4">
        <h2 className="mb-4 text-xl">Original method</h2>
        <pre className="mb-4 border p-4">
          {'const svgDataBase64 = btoa(unescape(encodeURIComponent(svgData)))\n'}
          {'const svgDataUrl = `data:image/svg+xml;charset=utf-8;base64,${svgDataBase64}`'}
        </pre>
        <Link href="/original" className="underline">Original method demo</Link>
      </section>
      <section className="mb-4">
        <h2 className="mb-4 text-xl">Proposed method</h2>
        <pre className="mb-4 border p-4">
          {'const blob = new Blob([svgData], {type: "image/svg+xml" })\n'}
          {'const svgDataUrl = URL.createObjectURL(blob)'}
        </pre>
        <Link href="/proposed" className="underline">Proposed method demo</Link>
      </section>
    </main>
  )
}
