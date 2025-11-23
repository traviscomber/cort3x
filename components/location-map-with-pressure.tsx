"use client"

import { useState } from "react"
import { LocationMap } from "./location-map"

interface Country {
  id: string
  name: string
  code: string
  flag_emoji: string
  coordinates: {
    lat: number
    lng: number
    city: string
  }
  mapPosition: {
    left: string
    top: string
  }
  timezone: string
  currency: string
  language: string
  regulatory_info: any
  compliance_requirements: any
  legal_framework: any
  business_requirements: any
}

const LOCATION_IMAGES: Record<string, string> = {
  chile: "/pressure-chile.png", // Placeholder for future image
  usa: "/pressure-usa.png", // Placeholder for future image
  indonesia: "/pressure-indonesia.png",
}

interface LocationMapWithPressureProps {
  countries: any[]
}

export function LocationMapWithPressure({ countries }: LocationMapWithPressureProps) {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null)

  const handleSelectCountry = (country: Country) => {
    console.log("[v0] Selected country:", country.id, country.name)
    console.log("[v0] Image path:", LOCATION_IMAGES[country.id])
    setSelectedCountry(country)
  }

  return (
    <div className="space-y-8">
      {/* Location Map */}
      <LocationMap countries={countries} onSelectCountry={handleSelectCountry} showDetails={false} />

      {/* The Pressure Is On Section - Shows location-specific image when selected */}
      {selectedCountry ? (
        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={LOCATION_IMAGES[selectedCountry.id] || "/placeholder.svg"}
            alt={`The Pressure Is On - ${selectedCountry.name}`}
            className="w-full h-auto"
          />
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-4xl font-bold mb-6 text-balance text-gray-900">The Pressure Is On:</h3>
            <p className="text-xl text-primary font-semibold mb-8 text-pretty">
              You need to drive innovation, align teams, and turn opportunities into results—fast.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-gray-400 text-sm">✕</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Too many ideas, too little impact</p>
                  <p className="text-sm text-gray-600">Promising concepts stall without proper execution.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-gray-400 text-sm">✕</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Disconnected efforts</p>
                  <p className="text-sm text-gray-600">Innovation feels siloed, not strategic.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-gray-400 text-sm">✕</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Missed opportunities</p>
                  <p className="text-sm text-gray-600">The market moves faster than you.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-gray-400 text-sm">✕</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Unclear ROI</p>
                  <p className="text-sm text-gray-600">Leadership wants outcomes, not activity.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Nov%206%2C%202025%2C%2004_23_00%20PM-W1O5SXXFizaRchwAnkfQbYGX5bEEHS.png"
              alt="Business team collaborating on innovation strategy"
              className="rounded-2xl shadow-xl w-full object-cover"
            />
          </div>
        </div>
      )}
    </div>
  )
}
