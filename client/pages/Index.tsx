import { ArrowRight, CheckCircle, Star, Timer, Wand2, Shield, MessageSquare, Cpu, BarChart3, Wrench, Store, Building, Sprout, Mic, FileText, RefreshCcw, MapPin, Phone, Mail, Focus, Settings, Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Index() {
  const [selectedModule, setSelectedModule] = useState('automation')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({})

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }

  // Module data
  const modules: { [key: string]: { title: string; description: string; features: { icon: any; text: string }[] } } = {
    automation: {
      title: 'Angebotsautomatisierung',
      description: 'Schneller zu besseren Angeboten, weniger manuelle Arbeit',
      features: [
        { icon: Mic, text: 'Voicebot für automatische Angebotserstellung' },
        { icon: FileText, text: 'Intelligente Angebotstexte auf Basis von Kundendaten' },
        { icon: RefreshCcw, text: 'Nachkalkulation mit Echtzeit-Abgleich' }
      ]
    },
    planning: {
      title: 'Planung & Forecasting',
      description: 'Datenbasierte Prognosen für bessere Geschäftsentscheidungen',
      features: [
        { icon: BarChart3, text: 'Automatische Umsatzprognosen' },
        { icon: Timer, text: 'Ressourcenplanung in Echtzeit' },
        { icon: Settings, text: 'Anpassbare Dashboards' }
      ]
    },
    agents: {
      title: 'KI-Agenten & Automatisierung',
      description: 'Intelligente Automatisierung für wiederkehrende Aufgaben',
      features: [
        { icon: Cpu, text: 'Intelligente Workflow-Automatisierung' },
        { icon: MessageSquare, text: 'KI-gesteuerte Prozessoptimierung' },
        { icon: Shield, text: 'Sichere und überwachte Ausführung' }
      ]
    },
    chatbot: {
      title: 'Chatbot & Assistenzsysteme',
      description: 'Rund um die Uhr verfügbare digitale Assistenten',
      features: [
        { icon: MessageSquare, text: '24/7 Kundensupport' },
        { icon: Wand2, text: 'Natürliche Sprachverarbeitung' },
        { icon: Focus, text: 'Kontextbewusste Antworten' }
      ]
    },
    finance: {
      title: 'Controlling & Finanzen',
      description: 'Automatisierte Finanzanalyse und Berichterstattung',
      features: [
        { icon: BarChart3, text: 'Automatische Finanzberichte' },
        { icon: CheckCircle, text: 'Echtzeit-Kostenanalyse' },
        { icon: Star, text: 'Cashflow-Prognosen' }
      ]
    }
  }

  // Form validation
  const validateForm = () => {
    const errors: any = {}
    if (!formData.name.trim()) errors.name = 'Name ist erforderlich'
    if (!formData.email.trim()) errors.email = 'E-Mail ist erforderlich'
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Ungültige E-Mail-Adresse'
    if (!formData.company.trim()) errors.company = 'Unternehmen ist erforderlich'
    if (!formData.message.trim()) errors.message = 'Nachricht ist erforderlich'
    return errors
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errors = validateForm()
    if (Object.keys(errors).length === 0) {
      // Form is valid, handle submission
      console.log('Form submitted:', formData)
      // Reset form
      setFormData({ name: '', email: '', company: '', message: '' })
      setFormErrors({})
      alert('Nachricht gesendet! Wir melden uns bald bei Ihnen.')
    } else {
      setFormErrors(errors)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (formErrors[field]) {
      setFormErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  return (
    <div className="min-h-screen bg-alpino-bg font-sans">
      {/* Mobile Menu (outside main layout when open) */}
      {mobileMenuOpen && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-alpino-light-gray lg:hidden">
          <div className="px-6 py-4 space-y-4">
            <div className="flex justify-between items-center mb-4">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fb3fae325ea4245e4a7c2c59ae149a3b5%2F1dc4d41556ae4f4dbb86a86737ba7b3d?format=webp&width=800"
                alt="Alpino AI"
                className="h-10 w-auto"
              />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-alpino-green hover:text-alpino-green/80 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <button onClick={() => scrollToSection('implementation')} className="block text-alpino-green font-medium hover:text-alpino-green/80 transition-colors">Leistungen</button>
            <button onClick={() => scrollToSection('branchen')} className="block text-alpino-green font-medium hover:text-alpino-green/80 transition-colors">Branchen</button>
            <button onClick={() => scrollToSection('warum-ki')} className="block text-alpino-green font-medium hover:text-alpino-green/80 transition-colors">Warum KI?</button>
            <button onClick={() => scrollToSection('kontakt')} className="block text-alpino-green font-medium hover:text-alpino-green/80 transition-colors">Über uns</button>
            <button onClick={() => scrollToSection('kontakt')} className="block text-alpino-green font-medium hover:text-alpino-green/80 transition-colors">Blog</button>
            <button
              onClick={() => scrollToSection('kontakt')}
              className="w-full flex items-center justify-center gap-1 bg-alpino-green text-white px-4 py-3 rounded-2xl hover:bg-alpino-green/90 transition-all shadow-lg mt-4"
            >
              <span className="font-medium">Jetzt beraten lassen</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative pt-16 pb-16 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          {/* Device Frame with Header and Hero Content */}
          <div className="relative mb-16">
            <div className="mx-auto max-w-5xl relative">
              <svg className="w-full h-auto" viewBox="0 0 1282 814" fill="none">
                <g filter="url(#filter0_i_9_1559)">
                  <path d="M1240.5 1L1273 1C1277.42 1 1281 4.58172 1281 9V313.297V511.319C1281 515.737 1277.42 519.319 1273 519.319H1163C1158.58 519.319 1155 522.901 1155 527.319V693.932C1155 698.35 1151.42 701.932 1147 701.932H961M41.5 1H9C4.58172 1 1 4.58172 1 9V511.319C1 515.737 4.58172 519.319 9 519.319H121C125.418 519.319 129 522.901 129 527.319V693.932C129 698.35 132.582 701.932 137 701.932H321M321 701.932H641H961M321 701.932V805C321 809.418 324.582 813 329 813H953C957.418 813 961 809.418 961 805V701.932" stroke="#E9E9E9" strokeWidth="2"/>
                </g>
                <defs>
                  <filter id="filter0_i_9_1559" x="0" y="0" width="1282" height="814" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.350962 0 0 0 0 0.350962 0 0 0 0 0.350962 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_9_1559"/>
                  </filter>
                </defs>
              </svg>

              {/* Header positioned inside the device frame */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 lg:-translate-y-6 w-full max-w-5xl px-0 z-10">
                <header className="flex items-center justify-between w-full px-6 lg:px-8 py-3 bg-white rounded-xl border border-alpino-light-gray shadow-lg backdrop-blur-sm">
                  {/* Logo */}
                  <div className="flex items-center">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2Fb3fae325ea4245e4a7c2c59ae149a3b5%2F1dc4d41556ae4f4dbb86a86737ba7b3d?format=webp&width=800"
                      alt="Alpino AI"
                      className="h-14 w-auto"
                    />
                  </div>

                  {/* Navigation */}
                  <nav className="hidden lg:flex items-center gap-6">
                    <button onClick={() => scrollToSection('implementation')} className="text-alpino-green font-normal hover:text-alpino-green/80 transition-colors text-base">
                      Leistungen
                    </button>
                    <button onClick={() => scrollToSection('branchen')} className="text-alpino-green font-normal hover:text-alpino-green/80 transition-colors text-base">
                      Branchen
                    </button>
                    <button onClick={() => scrollToSection('warum-ki')} className="text-alpino-green font-normal hover:text-alpino-green/80 transition-colors text-base">
                      Warum KI?
                    </button>
                    <button onClick={() => scrollToSection('kontakt')} className="text-alpino-green font-normal hover:text-alpino-green/80 transition-colors text-base">
                      Über uns
                    </button>
                    <button onClick={() => scrollToSection('kontakt')} className="text-alpino-green font-normal hover:text-alpino-green/80 transition-colors text-base">
                      Blog
                    </button>
                  </nav>

                  {/* Mobile Menu Button */}
                  <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="lg:hidden text-alpino-green hover:text-alpino-green/80 transition-colors"
                  >
                    {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                  </button>

                  {/* CTA Button */}
                  <button
                    onClick={() => scrollToSection('kontakt')}
                    className="hidden lg:flex items-center gap-1 bg-alpino-green text-white px-4 py-3 rounded-2xl hover:bg-alpino-green/90 hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 shadow-lg"
                  >
                    <span className="font-normal text-base">Jetzt beraten lassen</span>
                    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
                      <path d="M10.7458 10.0001L7.59473 6.84904L8.49484 5.94893L12.546 10.0001L8.49484 14.0512L7.59473 13.1511L10.7458 10.0001Z" fill="white"/>
                    </svg>
                  </button>
                </header>
              </div>

              {/* Hero Content: on small screens offset below header, centered on md+ */}
              <div className="absolute inset-0 flex justify-center px-4 items-start pt-24 sm:pt-28 md:items-center md:pt-0">
                <div className="text-center max-w-3xl mx-auto">
                  {/* Tag */}
                  <div className="inline-flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-alpino-light-gray shadow-sm mb-8">
                    <Wand2 className="w-4 h-4 text-alpino-gray" />
                    <span className="text-xs font-urbanist text-alpino-gray">Speziell für Südtirol</span>
                  </div>

                  {/* Main Headline */}
                  <h1 className="text-3xl lg:text-5xl xl:text-6xl font-medium text-alpino-green mb-6 tracking-wide leading-tight">
                    Künstliche Intelligenz für Südtirols Betriebe
                  </h1>

                  {/* Subtitle */}
                  <p className="text-base lg:text-lg text-alpino-gray mb-8 max-w-2xl mx-auto font-light leading-relaxed">
                    Wir unterstützen KMU im Handwerk, Handel und der Industrie mit verständlicher KI zur Automatisierung von Abläufen und zur Nutzung internen Wissens.
                  </p>

                  {/* CTA Button */}
                  <button
                    onClick={() => scrollToSection('kontakt')}
                    className="inline-flex items-center gap-2 bg-alpino-green text-white px-6 py-3 rounded-2xl hover:bg-alpino-green/90 hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 shadow-lg mb-12"
                  >
                    <span className="font-medium">Jetzt kennenlernen</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>

                  {/* Trust Message */}
                  <p className="text-xl lg:text-3xl text-alpino-gray font-light">
                    Sicher. Verständlich. Sofort einsetzbar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 lg:px-10" id="vorteile">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-alpino-light-gray shadow-sm mb-8">
              <Star className="w-4 h-4 text-alpino-gray" />
              <span className="text-xs font-urbanist text-alpino-gray">Warum wir?</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-medium text-alpino-green mb-6 tracking-wide">
              Ihre Vorteile auf einen Blick
            </h2>
            <p className="text-lg text-alpino-gray max-w-3xl mx-auto font-light">
              Entdecken Sie, wie unsere Lösung Ihnen hilft, Prozesse zu optimieren, Kosten zu senken und Ihre digitalen Abläufe zukunftssicher zu gestalten.
            </p>
          </div>

          {/* Benefits Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Card 1 */}
            <div className="flex items-center gap-6 bg-white p-8 rounded-xl border border-alpino-light-gray shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <div className="w-1 h-32 bg-alpino-light-gray rounded-full"></div>
              <div className="flex-1">
                <MessageSquare className="w-8 h-8 text-black mb-4" />
                <h3 className="text-xl font-medium text-black mb-3">Einfach bedienbar</h3>
                <p className="text-lg text-alpino-gray font-light">
                  Keine Vorkenntnisse nötig – Ihr Team nutzt KI direkt im Chat.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex items-center gap-6 bg-white p-8 rounded-xl border border-alpino-light-gray shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <div className="w-1 h-32 bg-alpino-light-gray rounded-full"></div>
              <div className="flex-1">
                <Shield className="w-8 h-8 text-black mb-4" />
                <h3 className="text-xl font-medium text-black mb-3">Datensicher & DSGVO-konform</h3>
                <p className="text-lg text-alpino-gray font-light">
                  Auf Wunsch lokal gehostet – Ihre Daten bleiben geschützt.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex items-center gap-6 bg-white p-8 rounded-xl border border-alpino-light-gray shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <div className="w-1 h-32 bg-alpino-light-gray rounded-full"></div>
              <div className="flex-1">
                <Timer className="w-8 h-8 text-black mb-4" />
                <h3 className="text-xl font-medium text-black mb-3">Spart Zeit & Nerven</h3>
                <p className="text-lg text-alpino-gray font-light">
                  Informationen, Anleitungen & Berichte in Sekunden abrufen.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="flex items-center gap-6 bg-white p-8 rounded-xl border border-alpino-light-gray shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <div className="w-1 h-32 bg-alpino-light-gray rounded-full"></div>
              <div className="flex-1">
                <Wand2 className="w-8 h-8 text-black mb-4" />
                <h3 className="text-xl font-medium text-black mb-3">Für Ihren Betrieb gemacht</h3>
                <p className="text-lg text-alpino-gray font-light">
                  Individuelle Konfiguration – exakt für Ihre Branche.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why AI Section */}
      <section className="py-16 px-6 lg:px-10 bg-alpino-card-bg" id="warum-ki">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-alpino-light-gray shadow-sm mb-8">
                <Timer className="w-4 h-4 text-alpino-gray" />
                <span className="text-xs font-urbanist text-alpino-gray">
                  Wie viel Ihrer Arbeitszeit fließt in Aufgaben, die wirklich Wert schaffen?
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-medium text-alpino-green mb-6 tracking-wide">
                Warum jetzt KI? – Ihre Ziele im Fokus
              </h2>
            </div>
            <div>
              <p className="text-lg text-alpino-gray mb-8 font-light">
                Viele Unternehmen verschwenden täglich Zeit mit wiederkehrenden Aufgaben. Mit KI können Sie sich auf das Wesentliche konzentrieren.
              </p>
            </div>
          </div>

          {/* Goals Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="bg-white p-6 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <CheckCircle className="w-8 h-8 text-black mb-4" />
              <h3 className="text-lg font-medium text-black mb-2">Kosten reduzieren</h3>
              <p className="text-alpino-gray font-light">Weniger Fehler, schlankere Abläufe.</p>
            </div>
            <div className="bg-white p-6 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <CheckCircle className="w-8 h-8 text-black mb-4" />
              <h3 className="text-lg font-medium text-black mb-2">Umsatz steigern</h3>
              <p className="text-alpino-gray font-light">Schneller arbeiten, besser entscheiden.</p>
            </div>
            <div className="bg-white p-6 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <CheckCircle className="w-8 h-8 text-black mb-4" />
              <h3 className="text-lg font-medium text-black mb-2">Mitarbeiter entlasten</h3>
              <p className="text-alpino-gray font-light">Repetitives auslagern, Fokus gewinnen.</p>
            </div>
            <div className="bg-white p-6 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <CheckCircle className="w-8 h-8 text-black mb-4" />
              <h3 className="text-lg font-medium text-black mb-2">Fokus aufs Kerngeschäft</h3>
              <p className="text-alpino-gray font-light">Weniger Bürokratie, mehr Wirkung.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Section */}
      <section className="py-16 px-6 lg:px-10" id="implementation">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-alpino-light-gray shadow-sm mb-8">
              <Settings className="w-4 h-4 text-alpino-gray" />
              <span className="text-xs font-urbanist text-alpino-gray">Modular. Erweiterbar. Verständlich.</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-medium text-alpino-green mb-6 tracking-wide">
              So setzen wir KI in Ihrem Betrieb ein
            </h2>
            <p className="text-lg text-alpino-gray max-w-3xl mx-auto font-light">
              Automatisierte Prozesse, Entscheidungsunterstützung, Wissenssysteme – genau auf Ihre Bedürfnisse zugeschnitten.
            </p>
          </div>

          {/* Implementation Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-xl border border-alpino-light-gray shadow-sm overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <div className="h-56 bg-alpino-card-bg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-alpino-card-bg via-transparent to-alpino-card-bg"></div>
                <div className="flex justify-center items-center h-full space-x-4">
                  <motion.div
                    className="w-12 h-12 bg-white border border-alpino-light-gray rounded-sm shadow-sm"
                    animate={{ y: [-12, 12, -12], rotate: [-2, 2, -2], boxShadow: [
                      '0px 4px 10px rgba(0,0,0,0.08)',
                      '0px 12px 18px rgba(0,0,0,0.12)',
                      '0px 4px 10px rgba(0,0,0,0.08)'
                    ] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0 }}
                  />
                  <motion.div
                    className="w-12 h-12 bg-white border border-alpino-light-gray rounded-sm shadow-sm"
                    animate={{ y: [-12, 12, -12], rotate: [-2, 2, -2], boxShadow: [
                      '0px 4px 10px rgba(0,0,0,0.08)',
                      '0px 12px 18px rgba(0,0,0,0.12)',
                      '0px 4px 10px rgba(0,0,0,0.08)'
                    ] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.25 }}
                  />
                  <motion.div
                    className="w-12 h-12 bg-white border border-alpino-light-gray rounded-sm shadow-sm"
                    animate={{ y: [-12, 12, -12], rotate: [-2, 2, -2], boxShadow: [
                      '0px 4px 10px rgba(0,0,0,0.08)',
                      '0px 12px 18px rgba(0,0,0,0.12)',
                      '0px 4px 10px rgba(0,0,0,0.08)'
                    ] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-black mb-3">Automatisierte Prozesse</h3>
                <p className="text-sm text-alpino-gray font-light">
                  Manuelle Aufgaben automatisieren, um Zeit und Ressourcen zu sparen.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl border border-alpino-light-gray shadow-sm overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <div className="h-56 bg-alpino-card-bg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-alpino-card-bg via-transparent to-alpino-card-bg"></div>
                <div className="flex justify-center items-end h-full space-x-2 p-8">
                  <motion.div
                    className="w-8 h-16 bg-gray-200 rounded-t-lg"
                    style={{ transformOrigin: 'bottom' }}
                    animate={{ scaleY: [0.85, 1.05, 0.9, 1] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', delay: 0.1 }}
                  />
                  <motion.div
                    className="w-8 h-12 bg-gray-200 rounded-t-lg"
                    style={{ transformOrigin: 'bottom' }}
                    animate={{ scaleY: [0.8, 1, 0.85, 1] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', delay: 0.35 }}
                  />
                  <motion.div
                    className="w-8 h-24 bg-white border-2 border-gray-200 rounded-t-lg"
                    style={{ transformOrigin: 'bottom' }}
                    animate={{ scaleY: [0.9, 1.1, 0.95, 1.05] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-black mb-3">Entscheidungsunterstützung</h3>
                <p className="text-sm text-alpino-gray font-light">
                  Schneller bessere Entscheidungen treffen mit datenbasierten Empfehlungen.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl border border-alpino-light-gray shadow-sm overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <div className="h-56 bg-alpino-card-bg relative overflow-hidden p-8">
                <div className="absolute inset-0 bg-gradient-to-r from-alpino-card-bg via-transparent to-alpino-card-bg"></div>
                <motion.div
                  className="bg-white p-4 rounded-lg border border-alpino-light-gray shadow-sm max-w-xs mx-auto mt-8"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className="space-y-2">
                    <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-2 bg-gray-200 rounded w-full"></div>
                    <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                  </div>
                </motion.div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-black mb-3">Angebotshilfe</h3>
                <p className="text-sm text-alpino-gray font-light">
                  Automatisierte Angebotserstellung – schneller zum Kundenfeedback.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Cards Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {/* Chatbot Card */}
            <div className="bg-white rounded-xl border border-alpino-light-gray shadow-sm overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <div className="h-56 bg-alpino-card-bg relative overflow-hidden p-6">
                <div className="bg-white rounded-full px-4 py-2 max-w-md mx-auto mt-8">
                  <motion.p
                    className="text-sm text-alpino-gray"
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    Ich habe eine Frage zu meiner Rechnung.
                  </motion.p>
                </div>
                <motion.div
                  className="bg-white rounded-xl p-4 max-w-md mx-auto mt-4 border border-alpino-light-gray"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
                >
                  <p className="text-sm text-alpino-gray">Gerne! Nennen Sie mir bitte Ihre Rechnungsnummer.</p>
                </motion.div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-black mb-3">Chatbots</h3>
                <p className="text-sm text-alpino-gray font-light">
                  Rund um die Uhr verfügbar – für Kunden oder intern.
                </p>
              </div>
            </div>

            {/* Workflows Card */}
            <div className="bg-white rounded-xl border border-alpino-light-gray shadow-sm overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <div className="h-56 bg-alpino-card-bg relative overflow-hidden p-6">
                <svg viewBox="0 0 420 200" className="w-full h-full">
                  <defs>
                    <marker id="arrow" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8" />
                    </marker>
                    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Label: Daten */}
                  <text x="20" y="70" fontSize="12" fill="#0f172a">Daten</text>

                  {/* Main incoming arrow (straight line) */}
                  <motion.path
                    d="M 20 90 L 200 90"
                    stroke="#94a3b8"
                    strokeWidth="3"
                    fill="none"
                    markerEnd="url(#arrow)"
                    strokeDasharray="200"
                    initial={{ strokeDashoffset: 200 }}
                    animate={{ strokeDashoffset: [200, 0] }}
                    transition={{ duration: 1, ease: 'easeInOut', repeat: Infinity, repeatType: 'loop', repeatDelay: 1 }}
                    filter="url(#glow)"
                  />

                  {/* Split node */}
                  <motion.circle
                    cx="200" cy="90" r="4" fill="#64748b"
                    animate={{ r: [4, 6, 4] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                  />

                  {/* Branch 1: Verwaltung (straight line) */}
                  <motion.path
                    d="M 200 90 L 360 40"
                    stroke="#94a3b8"
                    strokeWidth="3"
                    fill="none"
                    markerEnd="url(#arrow)"
                    strokeDasharray="220"
                    initial={{ strokeDashoffset: 220 }}
                    animate={{ strokeDashoffset: [220, 0] }}
                    transition={{ duration: 0.9, ease: 'easeInOut', delay: 0.6, repeat: Infinity, repeatType: 'loop', repeatDelay: 1 }}
                  />
                  <text x="368" y="44" fontSize="12" fill="#0f172a">Verwaltung</text>

                  {/* Branch 2: Marketing (straight line) */}
                  <motion.path
                    d="M 200 90 L 360 90"
                    stroke="#94a3b8"
                    strokeWidth="3"
                    fill="none"
                    markerEnd="url(#arrow)"
                    strokeDasharray="200"
                    initial={{ strokeDashoffset: 200 }}
                    animate={{ strokeDashoffset: [200, 0] }}
                    transition={{ duration: 0.9, ease: 'easeInOut', delay: 0.8, repeat: Infinity, repeatType: 'loop', repeatDelay: 1 }}
                  />
                  <text x="368" y="94" fontSize="12" fill="#0f172a">Marketing</text>

                  {/* Branch 3: Produktion (straight line) */}
                  <motion.path
                    d="M 200 90 L 360 160"
                    stroke="#94a3b8"
                    strokeWidth="3"
                    fill="none"
                    markerEnd="url(#arrow)"
                    strokeDasharray="240"
                    initial={{ strokeDashoffset: 240 }}
                    animate={{ strokeDashoffset: [240, 0] }}
                    transition={{ duration: 1, ease: 'easeInOut', delay: 1, repeat: Infinity, repeatType: 'loop', repeatDelay: 1 }}
                  />
                  <text x="368" y="164" fontSize="12" fill="#0f172a">Produktion</text>

                  {/* Data packets: incoming */}
                  <motion.circle
                    r="4" fill="#22c55e"
                    initial={{ cx: 20, cy: 90, opacity: 0 }}
                    animate={{ cx: [20, 200], cy: [90, 90], opacity: [0, 1, 1, 0] }}
                    transition={{ times: [0, 0.1, 0.9, 1], duration: 1, ease: 'linear', repeat: Infinity, repeatDelay: 1 }}
                  />
                  <motion.circle
                    r="4" fill="#22c55e"
                    initial={{ cx: 20, cy: 90, opacity: 0 }}
                    animate={{ cx: [20, 200], cy: [90, 90], opacity: [0, 1, 1, 0] }}
                    transition={{ times: [0, 0.1, 0.9, 1], duration: 1, ease: 'linear', repeat: Infinity, repeatDelay: 1, delay: 0.3 }}
                  />

                  {/* Data packets: split to three branches */}
                  <motion.circle
                    r="4" fill="#22c55e"
                    initial={{ cx: 200, cy: 90, opacity: 0 }}
                    animate={{ cx: [200, 360], cy: [90, 40], opacity: [0, 1, 1, 0] }}
                    transition={{ times: [0, 0.1, 0.9, 1], duration: 0.9, ease: 'linear', repeat: Infinity, repeatDelay: 1, delay: 0.6 }}
                  />
                  <motion.circle
                    r="4" fill="#22c55e"
                    initial={{ cx: 200, cy: 90, opacity: 0 }}
                    animate={{ cx: [200, 360], cy: [90, 90], opacity: [0, 1, 1, 0] }}
                    transition={{ times: [0, 0.1, 0.9, 1], duration: 0.9, ease: 'linear', repeat: Infinity, repeatDelay: 1, delay: 0.8 }}
                  />
                  <motion.circle
                    r="4" fill="#22c55e"
                    initial={{ cx: 200, cy: 90, opacity: 0 }}
                    animate={{ cx: [200, 360], cy: [90, 160], opacity: [0, 1, 1, 0] }}
                    transition={{ times: [0, 0.1, 0.9, 1], duration: 1, ease: 'linear', repeat: Infinity, repeatDelay: 1, delay: 1 }}
                  />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-black mb-3">Branchenspezifische Workflows</h3>
                <p className="text-sm text-alpino-gray font-light">
                  Spezifisch für Ihre Branche – flexibel integrierbar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-16 px-6 lg:px-10" id="module">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-alpino-light-gray shadow-sm mb-8">
              <Settings className="w-4 h-4 text-alpino-gray" />
              <span className="text-xs font-urbanist text-alpino-gray">Flexible Bausteine für reale Herausforderungen</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-medium text-alpino-green mb-6 tracking-wide">
              Module & Anwendungsfälle
            </h2>
            <p className="text-lg text-alpino-gray max-w-3xl mx-auto font-light">
              Unsere KI-Module lassen sich flexibel kombinieren – passgenau für Ihre Geschäftsprozesse.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Module List */}
            <div className="space-y-1">
              <button
                onClick={() => setSelectedModule('automation')}
                className={`w-full text-left bg-white p-6 border-l-4 rounded-r-lg shadow-sm hover:shadow-lg transition-all duration-300 ${
                  selectedModule === 'automation' ? 'border-alpino-green' : 'border-alpino-light-gray hover:border-alpino-green/50'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white border border-alpino-light-gray rounded-full flex items-center justify-center">
                    <Wrench className="w-5 h-5 text-black" />
                  </div>
                  <h3 className="text-xl font-medium text-black">Angebotsautomatisierung</h3>
                </div>
              </button>
              <button
                onClick={() => setSelectedModule('planning')}
                className={`w-full text-left bg-white p-6 border-l-4 rounded-r-lg shadow-sm hover:shadow-lg transition-all duration-300 ${
                  selectedModule === 'planning' ? 'border-alpino-green' : 'border-alpino-light-gray hover:border-alpino-green/50'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white border border-alpino-light-gray rounded-full flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-black" />
                  </div>
                  <h3 className="text-xl font-medium text-black">Planung & Forecasting</h3>
                </div>
              </button>
              <button
                onClick={() => setSelectedModule('agents')}
                className={`w-full text-left bg-white p-6 border-l-4 rounded-r-lg shadow-sm hover:shadow-lg transition-all duration-300 ${
                  selectedModule === 'agents' ? 'border-alpino-green' : 'border-alpino-light-gray hover:border-alpino-green/50'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white border border-alpino-light-gray rounded-full flex items-center justify-center">
                    <Cpu className="w-5 h-5 text-black" />
                  </div>
                  <h3 className="text-xl font-medium text-black">KI-Agenten & Automatisierung</h3>
                </div>
              </button>
              <button
                onClick={() => setSelectedModule('chatbot')}
                className={`w-full text-left bg-white p-6 border-l-4 rounded-r-lg shadow-sm hover:shadow-lg transition-all duration-300 ${
                  selectedModule === 'chatbot' ? 'border-alpino-green' : 'border-alpino-light-gray hover:border-alpino-green/50'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white border border-alpino-light-gray rounded-full flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-black" />
                  </div>
                  <h3 className="text-xl font-medium text-black">Chatbot & Assistenzsysteme</h3>
                </div>
              </button>
              <button
                onClick={() => setSelectedModule('finance')}
                className={`w-full text-left bg-white p-6 border-l-4 rounded-r-lg shadow-sm hover:shadow-lg transition-all duration-300 ${
                  selectedModule === 'finance' ? 'border-alpino-green' : 'border-alpino-light-gray hover:border-alpino-green/50'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white border border-alpino-light-gray rounded-full flex items-center justify-center">
                    <span className="text-black font-bold">€</span>
                  </div>
                  <h3 className="text-xl font-medium text-black">Controlling & Finanzen</h3>
                </div>
              </button>
            </div>

            {/* Module Details */}
            <div className="bg-alpino-card-bg rounded-xl p-9 min-h-[400px] transition-all duration-500">
              <h3 className="text-2xl font-medium text-black mb-4">{modules[selectedModule].title}</h3>
              <p className="text-lg text-alpino-gray mb-12 font-light">
                {modules[selectedModule].description}
              </p>

              <div className="space-y-3">
                {modules[selectedModule].features.map((feature, index) => {
                  const IconComponent = feature.icon
                  return (
                    <div key={index} className="bg-white rounded-lg p-3 flex items-center gap-3 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5">
                      <IconComponent className="w-6 h-6 text-alpino-green" />
                      <span className="text-sm text-alpino-green font-light tracking-wide">
                        {feature.text}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 px-6 lg:px-10" id="branchen">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-alpino-light-gray shadow-sm mb-8">
              <Focus className="w-4 h-4 text-alpino-gray" />
              <span className="text-xs font-urbanist text-alpino-gray">Zielgerichtet & branchenspezifisch</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-medium text-alpino-green mb-6 tracking-wide">
              Branchen, für die wir arbeiten
            </h2>
            <p className="text-lg text-alpino-gray max-w-3xl mx-auto font-light">
              Unsere Lösungen sind ideal für verschiedene Branchen – praxisnah, modular und sofort einsatzbereit.
            </p>
          </div>

          {/* Industries Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 border-l-4 border-alpino-light-gray hover:border-alpino-green hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer rounded-r-lg">
              <Wrench className="w-8 h-8 text-alpino-green mb-4" />
              <h3 className="text-lg font-medium text-alpino-green mb-3">Handwerk</h3>
              <p className="text-alpino-gray font-light">
                Kosteneinsparung durch Automatisierung und bessere Auftragsplanung.
              </p>
            </div>
            <div className="p-6 border-l-4 border-alpino-light-gray hover:border-alpino-green hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer rounded-r-lg">
              <Store className="w-8 h-8 text-alpino-green mb-4" />
              <h3 className="text-lg font-medium text-alpino-green mb-3">Handel</h3>
              <p className="text-alpino-gray font-light">
                Bessere Kundenbindung und Umsatzsteigerung durch KI-gestützte Angebote.
              </p>
            </div>
            <div className="p-6 border-l-4 border-alpino-light-gray hover:border-alpino-green hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer rounded-r-lg">
              <Building className="w-8 h-8 text-alpino-green mb-4" />
              <h3 className="text-lg font-medium text-alpino-green mb-3">Industrie</h3>
              <p className="text-alpino-gray font-light">
                Optimierte Produktionsprozesse und Qualitätskontrolle mit KI.
              </p>
            </div>
            <div className="p-6 border-l-4 border-alpino-light-gray hover:border-alpino-green hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer rounded-r-lg">
              <Sprout className="w-8 h-8 text-alpino-green mb-4" />
              <h3 className="text-lg font-medium text-alpino-green mb-3">Landwirtschaft</h3>
              <p className="text-alpino-gray font-light">
                Ertragsprognosen und Ressourcenmanagement durch smarte KI-Lösungen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section (redesigned, responsive, CI-based) */}
      <section className="py-16 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl p-[1px] bg-gradient-to-br from-[#0b2c24] via-alpino-green to-[#0f372e] shadow-2xl">
            <div className="relative rounded-3xl bg-[#0f372e]">
              {/* subtle glow accents */}
              <div className="pointer-events-none absolute -left-20 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>
              <div className="pointer-events-none absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-white/10 blur-3xl"></div>

              {/* decorative mountain silhouette */}
              <svg className="pointer-events-none absolute inset-0 opacity-[0.08]" viewBox="0 0 800 300" preserveAspectRatio="none">
                <path d="M0 300 L140 180 L260 260 L360 120 L520 300 Z" fill="#ffffff" />
              </svg>

              <div className="relative px-6 py-10 lg:px-12 lg:py-14">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-white text-3xl lg:text-5xl font-medium leading-tight tracking-wide">
                      Warum KI in Ihrem Unternehmen einsetzen?
                    </h3>
                  </div>
                  <div className="flex lg:justify-end">
                    <div className="max-w-xl">
                      <p className="text-white/80 text-base lg:text-lg mb-6 font-light">
                        Erleben Sie unsere Lösungen live oder vereinbaren Sie ein kostenloses Erstgespräch.
                      </p>
                      <button
                        onClick={() => scrollToSection('kontakt')}
                        className="inline-flex items-center gap-2 rounded-full border-2 border-white/70 bg-white/10 px-5 py-3 text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-alpino-green"
                      >
                        Jetzt Demo testen
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 lg:px-10 bg-alpino-card-bg" id="kontakt">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-alpino-light-gray shadow-sm mb-8">
                <span className="text-xl">❓</span>
                <span className="text-xs font-urbanist text-alpino-gray">Noch Fragen?</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-medium text-alpino-green mb-6 tracking-wide">
                Lassen Sie uns gemeinsam starten
              </h2>
              <p className="text-lg text-alpino-gray font-light">
                Wir freuen uns auf Ihre Anfrage. Schreiben Sie uns einfach über das Formular oder direkt per E-Mail.
              </p>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-black font-medium mb-2">Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Ihr vollständiger Name"
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 ${
                        formErrors.name
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-alpino-light-gray focus:ring-alpino-green'
                      }`}
                    />
                    {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-black font-medium mb-2">E-Mail-Adresse</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="Ihre geschäftliche E-Mail-Adresse"
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 ${
                        formErrors.email
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-alpino-light-gray focus:ring-alpino-green'
                      }`}
                    />
                    {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
                  </div>
                </div>
                <div>
                  <label className="block text-black font-medium mb-2">Unternehmen</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    placeholder="Firmenname"
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 ${
                      formErrors.company
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-alpino-light-gray focus:ring-alpino-green'
                    }`}
                  />
                  {formErrors.company && <p className="text-red-500 text-sm mt-1">{formErrors.company}</p>}
                </div>
                <div>
                  <label className="block text-black font-medium mb-2">Nachricht</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Schreiben Sie uns Ihre Anfrage…"
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 ${
                      formErrors.message
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-alpino-light-gray focus:ring-alpino-green'
                    }`}
                  ></textarea>
                  {formErrors.message && <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>}
                </div>
                <button
                  type="submit"
                  className="w-full md:w-auto inline-flex items-center gap-2 bg-alpino-green text-white px-8 py-4 rounded-2xl hover:bg-alpino-green/90 hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 shadow-lg"
                >
                  <span className="font-medium">Nachricht senden</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-alpino-light-gray bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fb3fae325ea4245e4a7c2c59ae149a3b5%2F1dc4d41556ae4f4dbb86a86737ba7b3d?format=webp&width=800"
                alt="Alpino AI"
                className="h-12 w-auto mb-4"
              />
              <p className="text-lg text-alpino-gray font-light">
                Effizienz durch intelligente Lösungen.
              </p>
              
              {/* Contact Details */}
              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-alpino-gray" />
                  <span className="text-sm text-alpino-gray font-light tracking-wide">
                    Julius Durst 44, 39042 Brixen
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-6 h-6 text-alpino-gray" />
                  <span className="text-sm text-alpino-gray font-light tracking-wide">
                    +39 353 3767845
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-6 h-6 text-alpino-gray" />
                  <span className="text-sm text-alpino-gray font-light tracking-wide">
                    info@alpino-ai.com
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="lg:col-span-2">
              <div className="flex flex-wrap gap-8 lg:justify-end">
                <a href="#leistungen" className="text-lg text-alpino-green hover:text-alpino-green/80 transition-colors">Leistungen</a>
                <a href="#branchen" className="text-lg text-alpino-green hover:text-alpino-green/80 transition-colors">Branchen</a>
                <a href="#warum-ki" className="text-lg text-alpino-green hover:text-alpino-green/80 transition-colors">Warum KI?</a>
                <a href="#ueber-uns" className="text-lg text-alpino-green hover:text-alpino-green/80 transition-colors">Über uns</a>
                <a href="#blog" className="text-lg text-alpino-green hover:text-alpino-green/80 transition-colors">Blog</a>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-alpino-light-gray mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-alpino-gray font-light">
              2025 Alpino AI. Alle Rechte vorbehalten.
            </p>
            <div className="flex items-center gap-6 mt-4 md:mt-0">
              <button onClick={() => scrollToSection('kontakt')} className="text-sm text-alpino-gray hover:text-alpino-green transition-colors">Terms</button>
              <button onClick={() => scrollToSection('kontakt')} className="text-sm text-alpino-gray hover:text-alpino-green transition-colors border-l border-r border-alpino-gray px-4">Privacy Policy</button>
              <button onClick={() => scrollToSection('kontakt')} className="text-sm text-alpino-gray hover:text-alpino-green transition-colors">Cookies</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
