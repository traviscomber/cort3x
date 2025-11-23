"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Globe, FileText, Scale, Building2, Clock, TrendingUp, Shield } from "lucide-react"

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

interface LocationMapProps {
  onSelectCountry?: (country: Country) => void
  selectedCountry?: string
  showDetails?: boolean
  countries?: any[]
}

const COUNTRIES: Country[] = [
  {
    id: "chile",
    name: "Chile",
    code: "CL",
    flag_emoji: "🇨🇱",
    coordinates: { lat: -33.4489, lng: -70.6693, city: "Santiago" },
    mapPosition: { left: "23%", top: "77%" }, // Matches Chile pin in map image
    timezone: "America/Santiago",
    currency: "CLP",
    language: "Spanish",
    regulatory_info: {},
    compliance_requirements: {},
    legal_framework: {},
    business_requirements: {},
  },
  {
    id: "usa",
    name: "United States",
    code: "US",
    flag_emoji: "🇺🇸",
    coordinates: { lat: 25.7617, lng: -80.1918, city: "Miami" },
    mapPosition: { left: "12%", top: "31%" }, // Matches USA pin in map image
    timezone: "America/New_York",
    currency: "USD",
    language: "English",
    regulatory_info: {},
    compliance_requirements: {},
    legal_framework: {},
    business_requirements: {},
  },
  {
    id: "indonesia",
    name: "Indonesia",
    code: "ID",
    flag_emoji: "🇮🇩",
    coordinates: { lat: -6.2088, lng: 106.8456, city: "Jakarta" },
    mapPosition: { left: "76%", top: "64%" }, // Matches Indonesia pin in map image
    timezone: "Asia/Jakarta",
    currency: "IDR",
    language: "Indonesian",
    regulatory_info: {},
    compliance_requirements: {},
    legal_framework: {},
    business_requirements: {},
  },
]

const LOCATION_TIPS = {
  chile: {
    setupTime: "2-3 weeks",
    keyBenefit: "Strong environmental regulations & carbon market leadership",
    advantages: ["Leading carbon pricing framework", "Innovation-friendly policies", "Strategic South American hub"],
  },
  usa: {
    setupTime: "1-2 weeks",
    keyBenefit: "Largest market access & advanced regulatory infrastructure",
    advantages: ["Mature compliance systems", "Extensive innovation grants", "Global business gateway"],
  },
  indonesia: {
    setupTime: "3-4 weeks",
    keyBenefit: "Emerging market opportunities & growing green economy",
    advantages: ["Rapid market growth", "Government incentives", "Southeast Asian access"],
  },
}

const LOCATION_IMAGES = {
  chile: "/pressure-chile.png", // Placeholder for future image
  usa: "/pressure-usa.png", // Placeholder for future image
  indonesia: "/pressure-indonesia.png",
}

export function LocationMap({ onSelectCountry, selectedCountry, showDetails = true, countries }: LocationMapProps) {
  const [selected, setSelected] = useState<string | undefined>(selectedCountry)

  const handleSelect = (country: Country) => {
    setSelected(country.id)
    onSelectCountry?.(country)
  }

  return (
    <div className="space-y-6">
      {/* Interactive World Map */}
      <Card className="p-6 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 border-amber-200">
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <Globe className="h-5 w-5 text-amber-700" />
            <h3 className="text-lg font-semibold text-amber-900">Select Your Location</h3>
          </div>

          {/* Static World Map */}
          <div className="relative w-full rounded-lg overflow-hidden border-2 border-amber-300 shadow-2xl">
            <div className="relative w-full" style={{ paddingBottom: "65%" }}>
              <img
                src="/map.jpg"
                alt="World Map showing Cort3x locations in USA, Chile, and Indonesia"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            {COUNTRIES.map((country) => {
              const isSelected = selected === country.id
              const tips = LOCATION_TIPS[country.id as keyof typeof LOCATION_TIPS]

              return (
                <Card
                  key={country.id}
                  className={`p-5 cursor-pointer transition-all hover:shadow-lg ${
                    isSelected
                      ? "ring-2 ring-primary bg-primary/5 border-primary"
                      : "hover:ring-2 hover:ring-amber-300 hover:border-amber-300"
                  }`}
                  onClick={() => handleSelect(country)}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-amber-100 to-orange-100 border border-amber-300">
                        <span className="text-xl font-bold text-amber-900">{country.code}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">{country.name}</h4>
                        <p className="text-sm text-muted-foreground">{country.coordinates.city}</p>
                      </div>
                    </div>
                    {isSelected && <Check className="h-5 w-5 text-primary flex-shrink-0" />}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge variant="secondary" className="text-xs bg-amber-100 text-amber-900">
                      {country.currency}
                    </Badge>
                    <Badge variant="secondary" className="text-xs bg-amber-100 text-amber-900">
                      {country.language}
                    </Badge>
                  </div>

                  {/* Tips section */}
                  <div className="space-y-2 pt-3 border-t border-gray-200">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">Setup:</span>
                      <span className="font-medium">{tips.setupTime}</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <TrendingUp className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground leading-relaxed">{tips.keyBenefit}</p>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <Shield className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {tips.advantages.map((advantage, idx) => (
                          <li key={idx}>• {advantage}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </Card>

      {/* Selected country details */}
      {showDetails && selected && <CountryDetails countryId={selected} />}
    </div>
  )
}

function CountryDetails({ countryId }: { countryId: string }) {
  const country = COUNTRIES.find((c) => c.id === countryId)

  if (!country) return null

  const details = [
    {
      icon: FileText,
      title: "Regulatory Framework",
      description: "Environmental regulations, innovation incentives, and data protection laws",
      color: "text-blue-600",
    },
    {
      icon: Scale,
      title: "Legal Compliance",
      description: "Business registration, reporting requirements, and labor laws",
      color: "text-purple-600",
    },
    {
      icon: Building2,
      title: "Business Setup",
      description: "Company structures, registration time, and capital requirements",
      color: "text-green-600",
    },
  ]

  return (
    <Card className="p-6 border-primary/20">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-4xl">{country.flag_emoji}</span>
        <div>
          <h3 className="text-xl font-bold">{country.name} Business Environment</h3>
          <p className="text-sm text-muted-foreground">Comprehensive regulatory and compliance information</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {details.map((detail, index) => (
          <Card key={index} className="p-4 hover:shadow-md transition-shadow border-gray-200">
            <detail.icon className={`h-8 w-8 ${detail.color} mb-3`} />
            <h4 className="font-semibold mb-2">{detail.title}</h4>
            <p className="text-sm text-muted-foreground">{detail.description}</p>
            <Button variant="link" className="mt-2 p-0 h-auto text-primary">
              View details →
            </Button>
          </Card>
        ))}
      </div>

      <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
        <p className="text-sm text-gray-700">
          <strong className="text-primary">Automatic Compliance:</strong> Our platform automatically applies{" "}
          {country.name}-specific regulations, legal requirements, and compliance standards to your projects, saving you
          time and reducing risk.
        </p>
      </div>
    </Card>
  )
}
