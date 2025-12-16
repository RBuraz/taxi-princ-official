const text = {
  page: {
    title: "Naš Vozni Park",
    subtitle:
      "Moderni, udobni i sigurni automobili za sve vaše potrebe. Odabiremo vozilo koje najbolje odgovara vašim potrebama.",
    callToAction: "Za rezervaciju specifičnog vozila, nazovite nas!",
  },

  vehicles: [
    {
      name: "Standardni Taxi",
      seats: "4 putnika",
      features: ["Klima", "Wifi", "GPS"],
      description: "Savršen za gradsku vožnju i kraće relacije.",
      image: "/fleet/mercedes.jpg",
      phoneNumber: "+385955690132",
      phoneNumberFormatted: "+385 95 569 0132",
      whatsappNumber: "+385955690132",
      whatsappNumberFormatted: "+385 95 569 0132",
    },
    {
      name: "Minivan Taxi",
      seats: "7 putnika",
      features: ["Veliki prtljažnik", "Klima", "Wifi"],
      description: "Idealno za grupe, obitelji i aerodrom transfer.",
      image: "/fleet/mercedes.jpg",
    },
    {
      name: "Luksuzni Taxi",
      seats: "4 putnika",
      features: ["Premium interijer", "Bar", "TV"],
      description: "Za posebne prilike i poslovne sastanke.",
      image: "/fleet/mercedes.jpg",
    },
    {
      name: "Eco Taxi",
      seats: "4 putnika",
      features: ["Električni automobil", "Bez emisija", "Tiho"],
      description: "Ekološki prihvatljiv izbor za svakodnevne vožnje.",
      image: "/fleet/mercedes.jpg",
    },
  ],

  labels: {
    seats: "Broj sjedala:",
    equipment: "Oprema:",
    bookButton: "Naruči ovaj model",
  },

  fleetInfo: {
    title: "O našem voznom parku",
    points: [
      "Redovito servisirani automobili",
      "Kasko osiguranje za svaki automobil",
      "Moderni automobili mlađi od 3 godine",
      "Čišćenje i dezinfekcija svakodnevno",
    ],
  },
};

import Image from "next/image";

export default function Fleet() {
  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">
          {text.page.title}
        </h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          {text.page.subtitle}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {text.vehicles.map((vehicle, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200"
            >
              <div className="p-6">
                {/* Image container with fixed aspect ratio */}
                <div className="relative w-full aspect-video mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    fill // This makes the image fill the container
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    priority={index < 2} // Lazy load images except first two
                  />
                </div>

                <h3 className="text-2xl font-bold mb-2 text-center">
                  {vehicle.name}
                </h3>
                <p className="text-gray-600 text-center mb-4">
                  {vehicle.description}
                </p>

                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-bold">{text.labels.seats}</span>
                    <span>{vehicle.seats}</span>
                  </div>

                  <div>
                    <span className="font-bold">{text.labels.equipment}</span>
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
                    {text.labels.bookButton}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">{text.fleetInfo.title}</h2>
          <ul className="space-y-3">
            {text.fleetInfo.points.map((point, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
