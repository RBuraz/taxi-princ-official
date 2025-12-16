import {
  Car,
  Facebook,
  Instagram,
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  // Svi tekstovi sakupjeni na jednom mjestu
  const text = {
    // Company Info
    company: {
      name: "TAXI PRINC",
      tagline: "Vodeći taxi servis u Hrvatskoj s preko 15 godina iskustva. Pružamo kvalitetan i pouzdan prijevoz 24/7.",
    },
    
    // Section Titles
    sections: {
      quickLinks: "Brzi linkovi",
      services: "Usluge",
      contact: "Kontakt",
    },

    // Quick Links
    quickLinks: [
      { name: "Početna", href: "/" },
      { name: "Usluge", href: "/services" },
      { name: "Vozni park", href: "/fleet" },
      { name: "Cjenik", href: "/pricing" },
      { name: "Kontakt", href: "/contact" },
    ],

    // Services
    services: [
      "Gradski prijevoz",
      "Zračna luka transfer",
      "Međugradski prijevoz",
      "Poslovni transfer",
      "Hitni slučajevi",
    ],

    // Contact Info
    contact: {
      phone: {
        number: "095 569 0132",
        link: "+385955690132",
        label: "Glavni broj",
      },
      email: {
        address: "info@taxiprinc.hr",
        link: "mailto:info@taxiprinc.hr",
      },
      address: "Matoševa 127, 21210 Solin, Hrvatska",
      hours: "Dostupni 24/7",
      whatsapp: {
        number: "+385 95 569 0132",
        link: "https://wa.me/+385955690132?text=Pozdrav, trebam taxi!",
      },
    },

    // Social Media
    social: {
      facebook: {
        url: "#",
        label: "Facebook",
      },
      instagram: {
        url: "#",
        label: "Instagram",
      },
    },

    // Legal
    legal: {
      copyright: `© ${new Date().getFullYear()} Taxi Princ. Sva prava pridržana.`,
      links: [
        { name: "Uvjeti korištenja", href: "/uvjeti" },
        { name: "Politika privatnosti", href: "/privatnost" },
      ],
    },
    
    // Aria Labels
    aria: {
      facebook: "Facebook",
      instagram: "Instagram",
    },
  };

  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-yellow-500 p-2 rounded-lg">
                <Car className="h-8 w-8 text-black" />
              </div>
              <h2 className="text-2xl font-bold text-yellow-500">
                {text.company.name}
              </h2>
            </div>
            <p className="text-gray-400 mb-4">
              {text.company.tagline}
            </p>
            <div className="flex gap-4">
              <a
                href={text.social.facebook.url}
                className="hover:text-yellow-500 transition-colors"
                aria-label={text.aria.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href={text.social.instagram.url}
                className="hover:text-yellow-500 transition-colors"
                aria-label={text.aria.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-500">
              {text.sections.quickLinks}
            </h3>
            <ul className="space-y-2">
              {text.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-yellow-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-500">
              {text.sections.services}
            </h3>
            <ul className="space-y-2">
              {text.services.map((service, index) => (
                <li key={index} className="text-gray-400">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Footer */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-500">
              {text.sections.contact}
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-yellow-500" />
                <div>
                  <a
                    href={`tel:${text.contact.phone.link}`}
                    className="hover:text-yellow-500 transition-colors text-lg font-medium"
                  >
                    {text.contact.phone.number}
                  </a>
                  <p className="text-gray-400 text-sm">
                    {text.contact.phone.label}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-yellow-500" />
                <a
                  href={text.contact.email.link}
                  className="hover:text-yellow-500 transition-colors"
                >
                  {text.contact.email.address}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-yellow-500" />
                <span className="text-gray-400">
                  {text.contact.address}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-yellow-500" />
                <span className="text-gray-400">
                  {text.contact.hours}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              {text.legal.copyright}
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              {text.legal.links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-yellow-500 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;