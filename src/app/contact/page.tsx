export default function Contact() {
  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Kontaktirajte Nas</h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Dostupni smo 24/7 za sve vaše upite i narudžbe.
          Javite nam se na bilo koji način koji vam odgovara.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Brzi kontakt</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-yellow-100 p-3 rounded-lg">
                      <span className="text-xl">📞</span>
                    </div>
                    <div>
                      <p className="font-bold text-lg">Telefon</p>
                      <a 
                        href="tel:+385955690132" 
                        className="text-gray-600 hover:text-yellow-500 transition"
                      >
                        +385 95 569 0132
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <span className="text-xl">💬</span>
                    </div>
                    <div>
                      <p className="font-bold text-lg">WhatsApp</p>
                      <a 
                        href="https://wa.me/+385955690132" 
                        target="_blank"
                        className="text-gray-600 hover:text-green-500 transition"
                      >
                        Pošaljite poruku
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <span className="text-xl">✉️</span>
                    </div>
                    <div>
                      <p className="font-bold text-lg">Email</p>
                      <a 
                        href="mailto:info@taxiprinc.hr" 
                        className="text-gray-600 hover:text-blue-500 transition"
                      >
                        info@taxiprinc.hr
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-red-100 p-3 rounded-lg">
                      <span className="text-xl">📍</span>
                    </div>
                    <div>
                      <p className="font-bold text-lg">Adresa</p>
                      <p className="text-gray-600">Matoševa 127, 21210 Solin, Hrvatska</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Radno vrijeme</h2>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-bold text-green-600">Dostupni 24/7</p>
                  <p className="text-gray-600">Sve dane u tjednu, praznicima i vikendom</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h2 className="text-2xl font-bold mb-6">Pošaljite upit</h2>
              <form className="space-y-6">
                <div>
                  <label className="block mb-2 font-medium">Ime i prezime *</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder="Vaše ime i prezime"
                    required
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium">Telefon *</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder="Vaš broj telefona"
                    required
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder="Vaša email adresa"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium">Poruka *</label>
                  <textarea 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 h-32"
                    placeholder="Opišite vaš zahtjev..."
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-black text-white py-4 rounded-lg font-bold hover:bg-gray-800 transition"
                >
                  Pošaljite upit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}