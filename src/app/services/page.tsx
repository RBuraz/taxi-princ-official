export default function Services() {
  const services = [
    {
      title: "Gradski prijevoz",
      description: "Brza i sigurna vožnja unutar grada po povoljnim cijenama.",
      icon: "🏙️"
    },
    {
      title: "Zračna luka transfer",
      description: "Transfer do/od zračne luke Split i drugih zračnih luka.",
      icon: "✈️"
    },
    {
      title: "Međugradski prijevoz",
      description: "Vožnje između gradova po cijeloj Hrvatskoj.",
      icon: "🚗"
    },
    {
      title: "Poslovni transfer",
      description: "Pouzdan prijevoz za poslovne sastanke i događaje.",
      icon: "💼"
    },
    {
      title: "Noćni prijevoz",
      description: "Siguran prijevoz noću, nakon izlazaka i zabava.",
      icon: "🌙"
    },
    {
      title: "Turistički prijevoz",
      description: "Vozimo turiste do svih znamenitosti i atrakcija.",
      icon: "🏛️"
    }
  ];

  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Naše Usluge</h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Pružamo širok spektar taxi usluga koje će zadovoljiti sve vaše potrebe.
          Bez obzira gdje idete, mi smo tu za vas!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-yellow-50 p-8 rounded-lg border border-yellow-200">
          <h2 className="text-2xl font-bold mb-4">Kako naručiti?</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="bg-yellow-500 text-black w-8 h-8 rounded-full flex items-center justify-center font-bold">1</span>
              <p>Nazovite nas na <strong>095 569 0132</strong></p>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-yellow-500 text-black w-8 h-8 rounded-full flex items-center justify-center font-bold">2</span>
              <p>Ili pošaljite poruku na WhatsApp</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-yellow-500 text-black w-8 h-8 rounded-full flex items-center justify-center font-bold">3</span>
              <p>Doznajte točnu cijenu prije vožnje</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}