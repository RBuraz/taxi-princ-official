export default function Fleet() {
  const vehicles = [
    {
      name: "Standardni Taxi",
      seats: "4 putnika",
      features: ["Klima", "Wifi", "GPS"],
      description: "Savršen za gradsku vožnju i kraće relacije.",
      image: "🚖"
    },
    {
      name: "Minivan Taxi",
      seats: "7 putnika",
      features: ["Veliki prtljažnik", "Klima", "Wifi"],
      description: "Idealno za grupe, obitelji i aerodrom transfer.",
      image: "🚐"
    },
    {
      name: "Luksuzni Taxi",
      seats: "4 putnika",
      features: ["Premium interijer", "Bar", "TV"],
      description: "Za posebne prilike i poslovne sastanke.",
      image: "🏎️"
    },
    {
      name: "Eco Taxi",
      seats: "4 putnika",
      features: ["Električni automobil", "Bez emisija", "Tiho"],
      description: "Ekološki prihvatljiv izbor za svakodnevne vožnje.",
      image: "🔋"
    }
  ];

  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Naš Vozni Park</h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Moderni, udobni i sigurni automobili za sve vaše potrebe. 
          Odabiremo vozilo koje najbolje odgovara vašim potrebama.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {vehicles.map((vehicle, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200"
            >
              <div className="p-8">
                <div className="text-6xl mb-4 text-center">{vehicle.image}</div>
                <h3 className="text-2xl font-bold mb-2 text-center">{vehicle.name}</h3>
                <p className="text-gray-600 text-center mb-4">{vehicle.description}</p>
                
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-bold">Broj sjedala:</span>
                    <span>{vehicle.seats}</span>
                  </div>
                  
                  <div>
                    <span className="font-bold">Oprema:</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {vehicle.features.map((feature, idx) => (
                        <span 
                          key={idx} 
                          className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition">
                    Naruči ovaj model
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">O našem voznom parku</h2>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>Redovito servisirani automobili</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>Kasko osiguranje za svaki automobil</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>Moderni automobili mlađi od 3 godine</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>Čišćenje i dezinfekcija svakodnevno</span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}