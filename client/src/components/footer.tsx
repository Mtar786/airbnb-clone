import { Globe, Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  const footerSections = [
    {
      title: "Support",
      links: [
        "Help Center",
        "AirCover",
        "Safety information",
        "Cancellation options",
        "Report neighborhood concern",
      ],
    },
    {
      title: "Hosting",
      links: [
        "Airbnb your home",
        "AirCover for Hosts",
        "Hosting resources",
        "Community forum",
        "Hosting responsibly",
      ],
    },
    {
      title: "Airbnb",
      links: [
        "Newsroom",
        "New features",
        "Careers",
        "Investors",
        "Gift cards",
      ],
    },
    {
      title: "Legal",
      links: [
        "Terms of Service",
        "Privacy Policy",
        "Cookie Policy",
        "Sitemap",
        "Company details",
      ],
    },
  ];

  return (
    <footer className="bg-airbnb-light border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-airbnb-dark mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <button className="text-airbnb-gray hover:text-airbnb-dark transition-colors text-left">
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <p className="text-airbnb-gray text-sm">© 2024 Airbnb, Inc. All rights reserved.</p>
              <div className="flex space-x-4">
                <button className="text-airbnb-gray hover:text-airbnb-dark transition-colors">Privacy</button>
                <button className="text-airbnb-gray hover:text-airbnb-dark transition-colors">Terms</button>
                <button className="text-airbnb-gray hover:text-airbnb-dark transition-colors">Sitemap</button>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-airbnb-gray" />
                <span className="text-airbnb-gray text-sm">English (US)</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-airbnb-gray text-sm">$ USD</span>
              </div>
              <div className="flex space-x-4">
                <button className="text-airbnb-gray hover:text-airbnb-dark transition-colors">
                  <Facebook className="w-4 h-4" />
                </button>
                <button className="text-airbnb-gray hover:text-airbnb-dark transition-colors">
                  <Twitter className="w-4 h-4" />
                </button>
                <button className="text-airbnb-gray hover:text-airbnb-dark transition-colors">
                  <Instagram className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
