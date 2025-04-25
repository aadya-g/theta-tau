"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Download, ExternalLink } from "lucide-react"

// Dynamically import the PDF viewer component with no SSR
const PDFViewer = dynamic(() => import("./components/pdf-viewer").then((mod) => mod.default), {
  ssr: false,
  loading: () => (
    <div className="flex justify-center items-center h-[600px] w-full border border-red-800 shadow-md">
      <div className="animate-pulse text-red-700">Loading PDF viewer...</div>
    </div>
  ),
})

// Try different PDF paths to see which one works
const PDF_PATHS = [
  "/Semester-S25-Newsletter.pdf",
  "Semester-S25-Newsletter.pdf",
  "/semester-s25-newsletter.pdf",
  "/public/Semester-S25-Newsletter.pdf",
  "/alumni-letter/Semester-S25-Newsletter.pdf",
]

export default function AlumniLetterPage() {
  const [numPages, setNumPages] = useState<number | null>(null)
  const [pageNumber, setPageNumber] = useState<number>(1)
  const [pdfUrl, setPdfUrl] = useState(PDF_PATHS[0])
  const [testedPaths, setTestedPaths] = useState<{ [key: string]: boolean }>({})

  // Test different PDF paths to find one that works
  useEffect(() => {
    const testPdfPaths = async () => {
      const results: { [key: string]: boolean } = {}

      for (const path of PDF_PATHS) {
        try {
          const response = await fetch(path)
          results[path] = response.ok

          if (response.ok) {
            console.log(`PDF found at: ${path}`)
            setPdfUrl(path)
            break
          } else {
            console.log(`PDF not found at: ${path} (Status: ${response.status})`)
          }
        } catch (error) {
          console.error(`Error checking path ${path}:`, error)
          results[path] = false
        }
      }

      setTestedPaths(results)
    }

    testPdfPaths()
  }, [])

  function changePage(offset: number) {
    setPageNumber((prevPageNumber) => {
      const newPageNumber = prevPageNumber + offset
      return newPageNumber >= 1 && newPageNumber <= (numPages || 1) ? newPageNumber : prevPageNumber
    })
  }

  return (
    <div className="container mx-auto py-8 px-4 bg-gradient-to-b from-red-50 to-yellow-50 min-h-screen">
      <div className="flex justify-center mb-6">
        <div className="inline-flex items-center gap-3">
          <div className="h-10 w-10 bg-red-900 text-yellow-400 flex items-center justify-center font-bold text-xl rounded-full">
            θT
          </div>
          <h1 className="text-3xl font-bold text-red-900">Theta Tau</h1>
        </div>
      </div>
      <Card className="max-w-4xl mx-auto">
        <CardHeader className="bg-red-900 text-white">
          <CardTitle className="text-center text-2xl">Alumni Letter</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex justify-between mb-4">
            <div>
              <p className="text-xs text-gray-500">Current path: {pdfUrl}</p>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                asChild
                className="border-yellow-500 text-yellow-600 hover:bg-yellow-50 hover:text-yellow-700"
              >
                <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Open PDF
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                asChild
                className="border-yellow-500 text-yellow-600 hover:bg-yellow-50 hover:text-yellow-700"
              >
                <a href={pdfUrl} download>
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </a>
              </Button>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <PDFViewer
              pdfUrl={pdfUrl}
              pageNumber={pageNumber}
              onDocumentLoadSuccess={({ numPages }: { numPages: number }) => setNumPages(numPages)}
            />

            {numPages && (
              <div className="flex items-center justify-between w-full max-w-md mt-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => changePage(-1)}
                  disabled={pageNumber <= 1}
                  className="border-yellow-500 text-yellow-600 hover:bg-yellow-50 hover:text-yellow-700 disabled:opacity-50 disabled:border-gray-300 disabled:text-gray-400"
                >
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  Previous
                </Button>

                <p className="text-sm text-red-800">
                  Page {pageNumber} of {numPages}
                </p>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => changePage(1)}
                  disabled={pageNumber >= numPages}
                  className="border-yellow-500 text-yellow-600 hover:bg-yellow-50 hover:text-yellow-700 disabled:opacity-50 disabled:border-gray-300 disabled:text-gray-400"
                >
                  Next
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            )}
          </div>

          {/* Debug information - remove in production */}
          <div className="mt-8 p-4 bg-gray-100 rounded-md text-xs">
            <p className="font-medium mb-2">Path testing results:</p>
            <ul className="space-y-1">
              {Object.entries(testedPaths).map(([path, success]) => (
                <li key={path} className={success ? "text-green-600" : "text-red-600"}>
                  {path}: {success ? "✓ Found" : "✗ Not found"}
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
