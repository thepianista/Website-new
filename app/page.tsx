import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src="/alpino-ai-logo-final.png" alt="Alpino AI" className="h-8" />
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link href="#leistungen" className="hover:text-teal-700 transition-colors">
              Leistungen
            </Link>
            <Link href="#branchen" className="hover:text-teal-700 transition-colors">
              Branchen
            </Link>
            <Link href="#warumki" className="hover:text-teal-700 transition-colors">
              Warum KI?
            </Link>
            <Link href="#ueber" className="hover:text-teal-700 transition-colors">
              Über uns
            </Link>
            <Link href="#blog" className="hover:text-teal-700 transition-colors">
              Blog
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="text-center py-20 bg-gradient-to-b from-teal-50 to-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Künstliche Intelligenz für Südtirols Betriebe
          </h1>
          <p className="text-teal-700 font-medium text-xl mb-6">Sicher. Verständlich. Sofort einsetzbar.</p>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg leading-relaxed">
            Wir unterstützen KMU im Handwerk, Handel und der Industrie mit verständlicher KI zur Automatisierung von
            Abläufen und zur Nutzung internen Wissens.
          </p>
          <Button asChild size="lg" className="bg-teal-700 hover:bg-teal-800">
            <Link href="#leistungen">Jetzt kennenlernen</Link>
          </Button>
        </div>
      </section>

      {/* Vorteile */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Ihre Vorteile auf einen Blick</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2 text-lg">Einfach bedienbar</h3>
                <p className="text-gray-600">Keine Vorkenntnisse nötig – Ihr Team nutzt KI direkt im Chat.</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2 text-lg">Datensicher & DSGVO-konform</h3>
                <p className="text-gray-600">Auf Wunsch lokal gehostet – Ihre Daten bleiben geschützt.</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2 text-lg">Spart Zeit & Nerven</h3>
                <p className="text-gray-600">Informationen, Anleitungen & Berichte in Sekunden abrufen.</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2 text-lg">Für Ihren Betrieb gemacht</h3>
                <p className="text-gray-600">Individuelle Konfiguration – exakt für Ihre Branche.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leistungsübersicht */}
      <section id="leistungen" className="bg-teal-50 py-16 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">So setzen wir KI in Ihrem Betrieb ein</h2>
          <p className="mb-8 text-lg text-gray-600 leading-relaxed">
            Unser System kombiniert einen KI-Chat-Assistenten mit automatisierten Berichten, Angebotsunterstützung und
            Kunden-Chatbots – modular und branchenangepasst.
          </p>
          <Button asChild size="lg" className="bg-teal-700 hover:bg-teal-800">
            <Link href="/leistungen">Unsere Leistungen entdecken</Link>
          </Button>
        </div>
      </section>

      {/* Referenz */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-semibold mb-8 text-gray-900">Was unsere Kunden sagen</h2>
          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-8">
              <blockquote className="text-xl italic text-gray-700 mb-6 leading-relaxed">
                „Mit Alpino AIs KI sparen wir 3 Stunden pro Woche bei der Angebotserstellung – und unsere Mitarbeiter
                nutzen sie täglich."
              </blockquote>
              <p className="text-gray-500 font-medium">– Tischlerei Kaufmann, Meran</p>
            </CardContent>
          </Card>
          <Button variant="link" asChild className="mt-6 text-teal-600 hover:underline">
            <Link href="/blog">Weitere Beispiele ansehen</Link>
          </Button>
        </div>
      </section>

      {/* Logos */}
      <section className="bg-white py-12 px-4 border-t border-b">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <a href="#" className="text-gray-400 hover:text-teal-700 transition-colors">
              <Linkedin className="w-8 h-8" />
            </a>
            <a href="#" className="text-gray-400 hover:text-teal-700 transition-colors">
              <Facebook className="w-8 h-8" />
            </a>
            <a href="#" className="text-gray-400 hover:text-teal-700 transition-colors">
              <Twitter className="w-8 h-8" />
            </a>
            <a href="#" className="text-gray-400 hover:text-teal-700 transition-colors">
              <Instagram className="w-8 h-8" />
            </a>
          </div>
        </div>
      </section>

      {/* Kontakt CTA */}
      <section className="bg-teal-50 py-16 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Bereit für Ihre erste KI-Lösung?</h2>
          <p className="mb-8 text-lg text-gray-600">Lassen Sie sich beraten oder testen Sie unsere Demo.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-teal-700 hover:bg-teal-800">
              <Link href="/kontakt">Jetzt Erstgespräch vereinbaren</Link>
            </Button>
            <Button variant="outline" asChild size="lg" className="border-teal-600 text-teal-600 hover:bg-teal-100">
              <Link href="/download/info.pdf">Infopaket herunterladen</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-sm text-center py-8">
        <div className="container mx-auto px-4">
          <p>
            &copy; 2025 Alpino AI GmbH –{" "}
            <Link href="/impressum" className="underline hover:text-teal-300 transition-colors">
              Impressum
            </Link>{" "}
            |{" "}
            <Link href="/datenschutz" className="underline hover:text-teal-300 transition-colors">
              Datenschutz
            </Link>
          </p>
        </div>
      </footer>
    </div>
  )
}
