const text = {
  page: {
    title: "Cjenik Usluga",
    subtitle: "Transparentne cijene bez skrivenih troškova. Sve cijene su u kunama i uključuju PDV.",
    callToAction: "Za točnu cijenu određene relacije, nazovite nas odmah!",
    phoneButton: "📞 Pozovite za cijenu: ",
    phoneNumber: "095 569 0132",
    phoneLink: "+385955690132"
  },
  
  pricingItems: [
    {
      category: "Gradska vožnja",
      basePrice: "25 kn",
      perKm: "7 kn/km",
      waiting: "250 kn/h",
      description: "Unutar gradske zone"
    },
    {
      category: "Noćna vožnja",
      basePrice: "30 kn",
      perKm: "8 kn/km",
      waiting: "300 kn/h",
      description: "22:00 - 06:00"
    },
    {
      category: "Aerodrom transfer",
      basePrice: "200 kn",
      perKm: "10 kn/km",
      waiting: "300 kn/h",
      description: "Split Airport do centra"
    },
    {
      category: "Međugradska vožnja",
      basePrice: "100 kn",
      perKm: "9 kn/km",
      waiting: "250 kn/h",
      description: "Izvan gradske zone"
    }
  ],
  
  additionalInfo: {
    title: "Dodatne informacije",
    points: [
      "Minimalna cijena vožnje je <strong>25 kn</strong>",
      "Prvi kilometar uključen u početnu cijenu",
      "Cijena se obračunava po taksimetru",
      "Prihvaćamo gotovinu i kartice"
    ]
  },
  
  tableLabels: {
    basePrice: "Početna cijena",
    perKm: "Po kilometru",
    waiting: "Čekanje"
  }
};

export default function Pricing() {
  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">
          {text.page.title}
        </h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          {text.page.subtitle}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {text.pricingItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-lg border border-gray-200"
            >
              <h3 className="text-2xl font-bold mb-2">{item.category}</h3>
              <p className="text-gray-600 mb-6">{item.description}</p>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span>{text.tableLabels.basePrice}</span>
                  <span className="font-bold text-lg">{item.basePrice}</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span>{text.tableLabels.perKm}</span>
                  <span className="font-bold text-lg">{item.perKm}</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span>{text.tableLabels.waiting}</span>
                  <span className="font-bold text-lg">{item.waiting}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-yellow-50 p-8 rounded-lg border border-yellow-200 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            {text.additionalInfo.title}
          </h2>
          <div className="space-y-4">
            {text.additionalInfo.points.map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-yellow-500 font-bold">•</span>
                <p dangerouslySetInnerHTML={{ __html: point }} />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg mb-6">
            {text.page.callToAction}
          </p>
          <a 
            href={`tel:${text.page.phoneLink}`}
            className="inline-block bg-yellow-500 text-black px-8 py-4 rounded-lg text-xl font-bold hover:bg-yellow-600 transition"
          >
            {text.page.phoneButton}{text.page.phoneNumber}
          </a>
        </div>
      </div>
    </main>
  );
}