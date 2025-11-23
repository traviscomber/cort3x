"use client"

import type React from "react"
import { createBrowserClient } from "@/lib/supabase/client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Crown, Mail, Phone, MapPin, Building2, User, CheckCircle2, Loader2, Languages } from "lucide-react"

const translations = {
  id: {
    pageTitle: "Program Kemitraan Royal Pop Indonesia",
    subtitle: "Proyek Atlas Warisan Nasional",
    greeting: "Kepada Para Pemimpin Kesultanan Yang Terhormat",
    greetingDesc:
      "Dengan hormat dan penghormatan tertinggi, kami dengan rendah hati mempersembahkan kesempatan untuk melestarikan dan mengangkat warisan kerajaan Indonesia yang terhormat",
    introText1:
      "Royal Pop Indonesia - Atlas Warisan Nasional merupakan inisiatif pelestarian digital yang komprehensif yang dirancang khusus untuk mendokumentasikan, melindungi, dan merayakan warisan budaya yang mendalam dari kesultanan kerajaan Indonesia. Proyek ini membangun arsip digital profesional yang menghormati signifikansi historis, tradisi upacara, warisan arsitektur, dan kontribusi budaya berkelanjutan dari kesultanan di seluruh Nusantara.",
    introText2:
      "Platform kami berfungsi sebagai jembatan antara tradisi kerajaan berabad-abad dan teknologi pelestarian digital kontemporer, memastikan bahwa warisan kesultanan yang kaya tetap dapat diakses dan relevan untuk generasi saat ini dan masa depan, baik di Indonesia maupun di seluruh komunitas global.",
    partnershipFramework: "Kerangka Kemitraan Yang Terhormat:",
    benefit1Title: "Model Bagi Hasil (Komisi 20%):",
    benefit1Desc:
      "Kesultanan Anda menerima dua puluh persen (20%) dari semua pendapatan yang dihasilkan melalui aktivitas pariwisata, pengalaman budaya, program pendidikan, dan konten warisan yang secara langsung dikaitkan dengan partisipasi kesultanan Anda dalam platform Atlas Warisan Nasional.",
    benefit2Title: "Dokumentasi Warisan Profesional:",
    benefit2Desc:
      "Tim berpengalaman kami akan menyediakan layanan dokumentasi komprehensif termasuk penelitian sejarah, pengarsipan fotografi, pelestarian sejarah lisan, dokumentasi upacara, survei arsitektur, dan katalogisasi artefak—semua dilakukan dengan protokol budaya dan sensitivitas yang sesuai.",
    benefit3Title: "Visibilitas Internasional dan Domestik:",
    benefit3Desc:
      "Warisan kesultanan Anda akan dipresentasikan kepada audiens yang mencakup komunitas lokal, institusi nasional, organisasi budaya internasional, peneliti akademis, dan profesional pariwisata warisan melalui kehadiran digital multi-platform kami.",
    benefit4Title: "Program Warisan Pendidikan:",
    benefit4Desc:
      "Pengembangan materi pendidikan, pameran digital, tur virtual, dan konten interaktif yang dirancang untuk mentransmisikan pengetahuan tradisional, protokol kerajaan, praktik budaya, dan narasi sejarah kepada generasi muda dan sarjana yang tertarik.",
    benefit5Title: "Otoritas Editorial Penuh:",
    benefit5Desc:
      "Kesultanan Anda mempertahankan kontrol mutlak atas semua pembuatan konten, tinjauan, persetujuan, modifikasi, dan penghapusan. Tidak ada informasi yang akan dipublikasikan tanpa persetujuan tertulis eksplisit dari perwakilan yang ditunjuk Anda.",
    benefit6Title: "Protokol Sensitivitas Budaya:",
    benefit6Desc:
      "Semua aktivitas dokumentasi dan representasi mematuhi protokol budaya yang ditetapkan, pertimbangan agama, dan adat istiadat kerajaan yang spesifik untuk kesultanan Anda, dengan konsultasi berkelanjutan sepanjang kemitraan.",
    closingText:
      "Kami mengakui dan sangat menghormati tanggung jawab suci yang melekat dalam mewakili warisan kerajaan dengan martabat, akurasi, dan penghormatan yang layak diterimanya. Kemitraan ini didasarkan pada prinsip saling menghormati, sensitivitas budaya, komunikasi transparan, dan komitmen bersama untuk melestarikan warisan kerajaan Indonesia sebagai warisan hidup untuk generasi sekarang dan masa depan.",
    humilityText:
      "Kami mendekati kemitraan ini dengan kerendahan hati dan pengakuan bahwa setiap kesultanan mewakili berabad-abad tradisi, pemerintahan, pengelolaan budaya, dan kepemimpinan masyarakat. Merupakan kehormatan tulus kami untuk dipertimbangkan sebagai mitra kolaboratif dalam melestarikan dan berbagi warisan terhormat Anda dengan dunia.",
    formTitle: "Pertanyaan Kemitraan Resmi",
    formDesc: "Silakan berikan informasi kesultanan Anda yang terhormat untuk memulai diskusi kemitraan",
    sultanateInfo: "Informasi Kesultanan",
    sultanateName: "Nama Kesultanan",
    sultanateLocation: "Lokasi (Provinsi/Wilayah)",
    contactPerson: "Detail Kontak Person",
    fullName: "Nama Lengkap",
    titlePosition: "Gelar/Posisi",
    emailAddress: "Alamat Email",
    phoneNumber: "Nomor Telepon",
    preferredLanguage: "Bahasa Komunikasi yang Disukai",
    indonesian: "Bahasa Indonesia",
    english: "English",
    both: "Bahasa Indonesia & English",
    messageLabel: "Pesan atau Pertanyaan (Opsional)",
    messagePlaceholder: "Silakan bagikan minat khusus, pertanyaan, atau persyaratan mengenai kemitraan...",
    submitButton: "Kirim Pertanyaan Kemitraan",
    submittingButton: "Mengirim Pertanyaan...",
    responseTime:
      "Kami akan meninjau pertanyaan Anda dengan sangat hati-hati dan merespons dalam 2-3 hari kerja untuk membahas langkah selanjutnya.",
    expeditedContact:
      "Untuk pertimbangan yang dipercepat atau pertanyaan rahasia, silakan hubungi Direktur Kemitraan Senior kami di",
    confidentialityNote: "Semua pertanyaan ditangani dengan protokol kerahasiaan ketat dan sensitivitas budaya",
    thankYouTitle: "Terima Kasih Atas Perhatian Yang Mulia",
    thankYouDesc:
      "Pertanyaan kemitraan terhormat Anda telah diterima dan akan ditangani dengan tingkat penghormatan dan pertimbangan tertinggi.",
    thankYouMessage:
      "Tim kemitraan senior kami akan dengan cermat meninjau komunikasi Anda dan akan memiliki kehormatan untuk merespons dalam 2-3 hari kerja untuk membahas proyek Royal Pop Indonesia - Atlas Warisan Nasional dan peluang kemitraan terhormat yang tersedia untuk kesultanan Anda.",
  },
  en: {
    pageTitle: "Royal Pop Indonesia Partnership Program",
    subtitle: "National Heritage Atlas Project",
    greeting: "To Our Most Esteemed Sultanate Leaders",
    greetingDesc:
      "With the utmost respect and honor, we humbly present an opportunity to preserve and elevate Indonesia's distinguished royal heritage",
    introText1:
      "The Royal Pop Indonesia - National Heritage Atlas represents a comprehensive digital preservation initiative specifically designed to document, safeguard, and celebrate the profound cultural heritage of Indonesia's royal sultanates. This project establishes a professional digital archive that honors the historical significance, ceremonial traditions, architectural legacy, and ongoing cultural contributions of sultanates throughout the Indonesian archipelago.",
    introText2:
      "Our platform serves as a bridge between centuries of royal tradition and contemporary digital preservation technology, ensuring that the rich tapestry of sultanate heritage remains accessible and relevant for current and future generations, both within Indonesia and across the global community.",
    partnershipFramework: "Distinguished Partnership Framework:",
    benefit1Title: "Revenue Sharing Model (20% Commission):",
    benefit1Desc:
      "Your sultanate receives twenty percent (20%) of all revenue generated through tourism activities, cultural experiences, educational programs, and heritage content directly attributed to your sultanate's participation in the National Heritage Atlas platform.",
    benefit2Title: "Professional Heritage Documentation:",
    benefit2Desc:
      "Our experienced team will provide comprehensive documentation services including historical research, photographic archiving, oral history preservation, ceremonial documentation, architectural surveys, and artifact cataloging—all conducted with appropriate cultural protocols and sensitivity.",
    benefit3Title: "International and Domestic Visibility:",
    benefit3Desc:
      "Your sultanate's heritage will be presented to audiences spanning local communities, national institutions, international cultural organizations, academic researchers, and heritage tourism professionals through our multi-platform digital presence.",
    benefit4Title: "Educational Legacy Programs:",
    benefit4Desc:
      "Development of educational materials, digital exhibitions, virtual tours, and interactive content designed to transmit traditional knowledge, royal protocols, cultural practices, and historical narratives to younger generations and interested scholars.",
    benefit5Title: "Complete Editorial Authority:",
    benefit5Desc:
      "Your sultanate maintains absolute control over all content creation, review, approval, modification, and removal. No information will be published without explicit written consent from your designated representatives.",
    benefit6Title: "Cultural Sensitivity Protocols:",
    benefit6Desc:
      "All documentation and representation activities adhere to established cultural protocols, religious considerations, and royal customs specific to your sultanate, with continuous consultation throughout the partnership.",
    closingText:
      "We recognize and deeply respect the sacred responsibility inherent in representing royal heritage with the dignity, accuracy, and reverence it rightfully deserves. This partnership is founded upon principles of mutual respect, cultural sensitivity, transparent communication, and a shared commitment to preserving Indonesia's royal legacy as a living heritage for present and future generations.",
    humilityText:
      "We approach this partnership with humility and recognition that each sultanate represents centuries of tradition, governance, cultural stewardship, and community leadership. It is our sincere honor to be considered as a collaborative partner in preserving and sharing your distinguished heritage with the world.",
    formTitle: "Formal Partnership Inquiry",
    formDesc: "Please provide your distinguished sultanate's information to initiate partnership discussions",
    sultanateInfo: "Sultanate Information",
    sultanateName: "Sultanate Name",
    sultanateLocation: "Location (Province/Region)",
    contactPerson: "Contact Person Details",
    fullName: "Full Name",
    titlePosition: "Title/Position",
    emailAddress: "Email Address",
    phoneNumber: "Phone Number",
    preferredLanguage: "Preferred Communication Language",
    indonesian: "Bahasa Indonesia",
    english: "English",
    both: "Both Indonesian & English",
    messageLabel: "Message or Questions (Optional)",
    messagePlaceholder: "Please share any specific interests, questions, or requirements regarding the partnership...",
    submitButton: "Submit Partnership Inquiry",
    submittingButton: "Submitting Inquiry...",
    responseTime:
      "We will review your inquiry with the utmost care and respond within 2-3 business days to discuss next steps.",
    expeditedContact:
      "For expedited consideration or confidential inquiries, please contact our Senior Partnership Director at",
    confidentialityNote: "All inquiries are treated with strict confidentiality and cultural sensitivity protocols",
    thankYouTitle: "Thank You for Your Distinguished Attention",
    thankYouDesc:
      "Your esteemed partnership inquiry has been received and will be treated with the highest level of respect and consideration.",
    thankYouMessage:
      "Our senior partnership team will carefully review your communication and will have the honor of responding within 2-3 business days to discuss the Royal Pop Indonesia - National Heritage Atlas project and the distinguished partnership opportunities available to your sultanate.",
  },
}

export function PartnershipContactForm() {
  const [language, setLanguage] = useState<"id" | "en">("id")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    sultanateName: "",
    sultanateLocation: "",
    contactPersonName: "",
    contactPersonTitle: "",
    email: "",
    phone: "",
    preferredLanguage: "Indonesian",
    message: "",
  })

  const sultanates = [
    { name: "Kesultanan Yogyakarta", location: "Yogyakarta, Jawa Tengah" },
    { name: "Kesultanan Deli", location: "Medan, Sumatra Utara" },
    { name: "Kesultanan Ternate", location: "Ternate, Maluku Utara" },
    { name: "Kesultanan Kasepuhan Cirebon", location: "Cirebon, Jawa Barat" },
  ]

  const t = translations[language]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const supabase = createBrowserClient()

      const { error } = await supabase.from("sultanate_submissions").insert([
        {
          sultanate_name: formData.sultanateName,
          sultanate_region: formData.sultanateLocation,
          contact_title: "",
          contact_name: formData.contactPersonName,
          contact_position: formData.contactPersonTitle,
          contact_email: formData.email,
          contact_phone: formData.phone,
          preferred_communication: formData.preferredLanguage,
          message: formData.message,
          status: "new",
        },
      ])

      if (error) {
        console.error("[v0] Error submitting sultanate form:", error)
        alert(language === "id" ? "Terjadi kesalahan. Silakan coba lagi." : "An error occurred. Please try again.")
        setIsSubmitting(false)
        return
      }

      console.log("[v0] Sultanate contact form submitted successfully")
      setSubmitted(true)
    } catch (error) {
      console.error("[v0] Error submitting form:", error)
      alert(language === "id" ? "Terjadi kesalahan. Silakan coba lagi." : "An error occurred. Please try again.")
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-green-50 flex items-center justify-center p-4">
        <Card className="max-w-2xl w-full border-2 border-amber-200">
          <CardContent className="pt-12 pb-12 text-center">
            <div className="mb-6 flex justify-center">
              <div className="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle2 className="h-10 w-10 text-green-600" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.thankYouTitle}</h2>
            <p className="text-lg text-gray-600 mb-6">{t.thankYouDesc}</p>
            <p className="text-gray-600">{t.thankYouMessage}</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-green-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-end mb-6">
          <div className="flex items-center gap-2 bg-white rounded-full p-1 shadow-md border border-amber-200">
            <button
              onClick={() => setLanguage("id")}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                language === "id"
                  ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-md"
                  : "text-gray-600 hover:text-amber-600"
              }`}
            >
              <Languages className="h-4 w-4" />
              Bahasa Indonesia
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                language === "en"
                  ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-md"
                  : "text-gray-600 hover:text-amber-600"
              }`}
            >
              <Languages className="h-4 w-4" />
              English
            </button>
          </div>
        </div>

        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="h-20 w-20 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg">
              <Crown className="h-10 w-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">{t.pageTitle}</h1>
          <p className="text-xl text-gray-600 mb-2">{t.subtitle}</p>
          <div className="h-1 w-24 bg-gradient-to-r from-amber-500 to-orange-600 mx-auto rounded-full"></div>
        </div>

        {/* Introduction Card */}
        <Card className="mb-8 border-2 border-amber-200 bg-white/80 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-2xl text-amber-900">{t.greeting}</CardTitle>
            <CardDescription className="text-base text-gray-700 leading-relaxed">{t.greetingDesc}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-700">
            <p className="leading-relaxed">{t.introText1}</p>

            <p className="leading-relaxed">{t.introText2}</p>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-lg">
              <h3 className="font-bold text-amber-900 mb-3 text-lg">{t.partnershipFramework}</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold mt-1">•</span>
                  <span>
                    <strong>{t.benefit1Title}</strong> {t.benefit1Desc}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold mt-1">•</span>
                  <span>
                    <strong>{t.benefit2Title}</strong> {t.benefit2Desc}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold mt-1">•</span>
                  <span>
                    <strong>{t.benefit3Title}</strong> {t.benefit3Desc}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold mt-1">•</span>
                  <span>
                    <strong>{t.benefit4Title}</strong> {t.benefit4Desc}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold mt-1">•</span>
                  <span>
                    <strong>{t.benefit5Title}</strong> {t.benefit5Desc}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold mt-1">•</span>
                  <span>
                    <strong>{t.benefit6Title}</strong> {t.benefit6Desc}
                  </span>
                </li>
              </ul>
            </div>

            <p className="leading-relaxed">{t.closingText}</p>

            <p className="leading-relaxed italic text-gray-600 border-t border-amber-200 pt-4">{t.humilityText}</p>
          </CardContent>
        </Card>

        {/* Contact Form */}
        <Card className="border-2 border-amber-200 bg-white/80 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-900">{t.formTitle}</CardTitle>
            <CardDescription>{t.formDesc}</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Sultanate Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-amber-600" />
                  {t.sultanateInfo}
                </h3>

                <div>
                  <Label htmlFor="sultanateName" className="text-gray-700">
                    {t.sultanateName} <span className="text-red-500">*</span>
                  </Label>
                  <select
                    id="sultanateName"
                    name="sultanateName"
                    value={formData.sultanateName}
                    onChange={(e) => {
                      const selected = sultanates.find((s) => s.name === e.target.value)
                      setFormData({
                        ...formData,
                        sultanateName: e.target.value,
                        sultanateLocation: selected ? selected.location : "",
                      })
                    }}
                    required
                    className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="">{language === "id" ? "Pilih Kesultanan..." : "Select Sultanate..."}</option>
                    {sultanates.map((sultanate) => (
                      <option key={sultanate.name} value={sultanate.name}>
                        {sultanate.name}
                      </option>
                    ))}
                    <option value="other">
                      {language === "id" ? "Lainnya (Mitra Non-Kesultanan)" : "Other (Non-Sultanate Partner)"}
                    </option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="sultanateLocation" className="text-gray-700">
                    {t.sultanateLocation} <span className="text-red-500">*</span>
                  </Label>
                  <div className="relative mt-1.5">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="sultanateLocation"
                      name="sultanateLocation"
                      value={formData.sultanateLocation}
                      onChange={handleChange}
                      placeholder="e.g., Yogyakarta, Java"
                      required
                      readOnly={formData.sultanateName !== "other" && formData.sultanateName !== ""}
                      className={`pl-10 ${
                        formData.sultanateName !== "other" && formData.sultanateName !== ""
                          ? "bg-gray-50 cursor-not-allowed"
                          : ""
                      }`}
                    />
                  </div>
                </div>
              </div>

              {/* Contact Person Details */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                  <User className="h-5 w-5 text-amber-600" />
                  {t.contactPerson}
                </h3>

                <div>
                  <Label htmlFor="contactPersonName" className="text-gray-700">
                    {t.fullName} <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="contactPersonName"
                    name="contactPersonName"
                    value={formData.contactPersonName}
                    onChange={handleChange}
                    placeholder={language === "id" ? "Nama lengkap Anda" : "Your full name"}
                    required
                    className="mt-1.5"
                  />
                </div>

                <div>
                  <Label htmlFor="contactPersonTitle" className="text-gray-700">
                    {t.titlePosition} <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="contactPersonTitle"
                    name="contactPersonTitle"
                    value={formData.contactPersonTitle}
                    onChange={handleChange}
                    placeholder={
                      language === "id"
                        ? "e.g., Sekretaris Kerajaan, Direktur Urusan Budaya"
                        : "e.g., Royal Secretary, Cultural Affairs Director"
                    }
                    required
                    className="mt-1.5"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email" className="text-gray-700">
                      {t.emailAddress} <span className="text-red-500">*</span>
                    </Label>
                    <div className="relative mt-1.5">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="contact@sultanate.id"
                        required
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-gray-700">
                      {t.phoneNumber} <span className="text-red-500">*</span>
                    </Label>
                    <div className="relative mt-1.5">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+62 xxx xxxx xxxx"
                        required
                        className="pl-10"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="preferredLanguage" className="text-gray-700">
                    {t.preferredLanguage}
                  </Label>
                  <select
                    id="preferredLanguage"
                    name="preferredLanguage"
                    value={formData.preferredLanguage}
                    onChange={handleChange}
                    className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="Indonesian">{t.indonesian}</option>
                    <option value="English">{t.english}</option>
                    <option value="Both">{t.both}</option>
                  </select>
                </div>
              </div>

              {/* Additional Message */}
              <div>
                <Label htmlFor="message" className="text-gray-700">
                  {t.messageLabel}
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t.messagePlaceholder}
                  rows={5}
                  className="mt-1.5"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold py-6 text-lg shadow-lg"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    {t.submittingButton}
                  </>
                ) : (
                  <>
                    <Mail className="mr-2 h-5 w-5" />
                    {t.submitButton}
                  </>
                )}
              </Button>

              <p className="text-sm text-gray-500 text-center">{t.responseTime}</p>
            </form>
          </CardContent>
        </Card>

        {/* Footer Note */}
        <div className="mt-8 text-center text-sm text-gray-600">
          <p>
            {t.expeditedContact}{" "}
            <a href="mailto:partnerships@royalpop-indonesia.id" className="text-amber-600 hover:underline font-medium">
              partnerships@royalpop-indonesia.id
            </a>
          </p>
          <p className="mt-2 text-xs text-gray-500">{t.confidentialityNote}</p>
        </div>
      </div>
    </div>
  )
}
