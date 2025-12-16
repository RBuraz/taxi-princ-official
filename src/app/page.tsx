export default function Home() {
  return (
    <main>
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Dobrodošli u TAXI PRINC</h1>
          <p className="text-xl mb-8">Najbrži i najpouzdaniji taxi servis u Hrvatskoj</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a 
              href="tel:+385955690132" 
              className="bg-black text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-800 transition"
            >
              Nazovite nas sada
            </a>
            <a 
              href="https://wa.me/+385955690132" 
              target="_blank"
              className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-green-700 transition"
            >
              WhatsApp narudžba
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Zašto odabrati nas?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-3">24/7 Dostupnost</h3>
              <p>Dostupni smo 24 sata dnevno, 7 dana u tjednu za sve vaše potrebe.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-3">Brza usluga</h3>
              <p>Vozimo do vas u rekordnom vremenu - u prosjeku 5-10 minuta.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-3">Pristupačne cijene</h3>
              <p>Transparentne cijene bez skrivenih troškova.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Trebate taxi?</h2>
          <p className="text-xl mb-8">Kontaktirajte nas odmah!</p>
          <a 
            href="tel:+385955690132" 
            className="inline-block bg-yellow-500 text-black px-8 py-4 rounded-lg text-xl font-bold hover:bg-yellow-600 transition"
          >
            📞 +385 95 569 0132
          </a>
        </div>
      </section>
    </main>
  );
}