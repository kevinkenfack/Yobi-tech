import React, { useState, useEffect } from 'react';
import { 
  ShoppingCart, Star, Laptop, Mouse, Keyboard, Monitor, 
  ArrowUpRight, Phone, MapPin, Mail, Clock, ChevronDown,
  Facebook, Instagram, Twitter
} from 'lucide-react';

const YobiTechStore = () => {
  const [scrolled, setScrolled] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const products = [
    {
      id: 1,
      name: "MacBook Pro M2",
      category: "Laptops",
      price: 1499.99,
      rating: 5,
      image: "/400.png",
      description: "Le dernier MacBook Pro avec puce M2, idéal pour les professionnels",
      specs: ["16GB RAM", "512GB SSD", "Écran 14 pouces"]
    },
    {
      id: 2,
      name: "Dell XPS 15",
      category: "Laptops",
      price: 1299.99,
      rating: 4.5,
      image: "/400.png",
      description: "Un laptop puissant avec écran InfinityEdge",
      specs: ["32GB RAM", "1TB SSD", "RTX 3050"]
    },
    {
      id: 3,
      name: "Logitech MX Master 3",
      category: "Souris",
      price: 99.99,
      rating: 4.8,
      image: "/400.png",
      description: "Souris sans fil ergonomique haut de gamme",
      specs: ["8000 DPI", "Bluetooth", "USB-C"]
    },
    {
      id: 4,
      name: "ROG Zephyrus G14",
      category: "Laptops",
      price: 1399.99,
      rating: 4.7,
      image: "/400.png",
      description: "Laptop gaming compact et puissant",
      specs: ["RTX 4060", "16GB RAM", "1TB SSD"]
    },
    {
      id: 5,
      name: "Clavier Mécanique Keychron K2",
      category: "Claviers",
      price: 89.99,
      rating: 4.6,
      image: "/400.png",
      description: "Clavier mécanique sans fil compact",
      specs: ["Switches Brown", "RGB", "Bluetooth"]
    },
    {
      id: 6,
      name: "LG UltraGear 27GN950",
      category: "Écrans",
      price: 799.99,
      rating: 4.9,
      image: "/400.png",
      description: "Moniteur gaming 4K 144Hz",
      specs: ["4K UHD", "1ms", "HDR600"]
    }
  ];

  const categories = [
    { name: "Tous", icon: <Laptop className="w-5 h-5" />, color: "from-blue-500/20 to-purple-500/20" },
    { name: "Laptops", icon: <Laptop className="w-5 h-5" />, color: "from-blue-500/20 to-purple-500/20" },
    { name: "Souris", icon: <Mouse className="w-5 h-5" />, color: "from-purple-500/20 to-pink-500/20" },
    { name: "Claviers", icon: <Keyboard className="w-5 h-5" />, color: "from-pink-500/20 to-red-500/20" },
    { name: "Écrans", icon: <Monitor className="w-5 h-5" />, color: "from-green-500/20 to-blue-500/20" },
  ];

  const filteredProducts = selectedCategory === 'Tous' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < Math.floor(rating) 
            ? "text-yellow-400 fill-yellow-400" 
            : "text-gray-400"
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Navigation */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-950/80 backdrop-blur-lg border-b border-white/5' : ''
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <div className="relative group">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-500 to-blue-500 p-[1px]">
                  <div className="w-full h-full rounded-2xl bg-gray-950/90 flex items-center justify-center">
                    <Laptop className="w-8 h-8 text-blue-400" />
                  </div>
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Yobi Tech
                </h1>
                <p className="text-sm text-gray-400">Votre expert en technologie</p>
              </div>
            </div>
            <button 
              onClick={() => setShowContact(!showContact)}
              className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl hover:bg-white/20 transition-all"
            >
              <Phone className="w-5 h-5" />
              <span className="hidden sm:inline">Contact</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${showContact ? 'rotate-180' : ''}`} />
            </button>
          </div>
          {showContact && (
            <div className="absolute top-full left-0 right-0 bg-gray-950/90 backdrop-blur-lg border-t border-white/5 py-4">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <div>
                    <p className="text-sm text-gray-400">Appelez-nous</p>
                    <p>+33 1 23 45 67 89</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <div>
                    <p className="text-sm text-gray-400">Visitez-nous</p>
                    <p>123 Rue du Commerce, Paris</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-blue-400" />
                  <div>
                    <p className="text-sm text-gray-400">Horaires</p>
                    <p>Lun-Sam: 9h-19h</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative pt-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl bg-gradient-to-br from-purple-900/50 via-blue-900/50 to-purple-900/50 p-[1px] mb-12">
            <div className="rounded-3xl bg-gray-950/95 p-8 backdrop-blur-xl">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                Bienvenue chez Yobi Tech
              </h2>
              <p className="text-gray-300 mb-6">
                Découvrez notre sélection premium de laptops et d'accessoires
              </p>
            </div>
          </div>
          
          {/* Categories Section */}
          <div className="space-y-4 mb-12">
            <h4 className="text-sm font-medium text-gray-400 tracking-wider">NOS CATÉGORIES</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`group relative overflow-hidden rounded-2xl backdrop-blur-sm border p-4 transition-all duration-300 
                    ${selectedCategory === category.name 
                      ? 'bg-white/20 border-white/20' 
                      : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10'}`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <div className="relative flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {category.icon}
                      <span className="font-medium">{category.name}</span>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-gray-400 transition-all duration-300 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </button>
              ))}
            </div>
          </div>
          
          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group relative">
                <div className="rounded-2xl bg-gradient-to-br from-purple-500/5 to-blue-500/5 p-[1px] transition-all duration-300 hover:from-purple-500/20 hover:to-blue-500/20">
                  <div className="rounded-2xl bg-gray-950/90 p-4 backdrop-blur-xl">
                    <div className="relative mb-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute top-2 right-2 bg-gray-950/70 backdrop-blur-sm rounded-full px-3 py-1 text-sm">
                        {product.category}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-gray-400 text-sm mb-3">{product.description}</p>
                    
                    <div className="flex items-center gap-2 mb-3">
                      {renderStars(product.rating)}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.specs.map((spec, index) => (
                        <span 
                          key={index}
                          className="text-xs bg-white/10 px-2 py-1 rounded-full"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-blue-400">
                        {product.price.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}
                      </span>
                      <button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105">
                        <ShoppingCart className="w-5 h-5" />
                        Acheter
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

       {/* Footer */}
       <footer className="bg-gray-900/50 border-t border-white/5 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span>+33 1 23 45 67 89</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span>contact@yobitech.fr</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span>123 Rue du Commerce, Paris</span>
                </div>
              </div>
            </div>

            {/* Horaires */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold mb-4">Horaires d'ouverture</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Lundi - Vendredi:</span>
                  <span>9h-19h</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Samedi:</span>
                  <span>10h-18h</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Dimanche:</span>
                  <span className="text-blue-400">Fermé</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold mb-4">Nos Services</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                  Réparation PC
                </li>
                <li className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                  Installation logiciels
                </li>
                <li className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                  Support technique
                </li>
                <li className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                  Configuration sur mesure
                </li>
              </ul>
            </div>

            {/* Réseaux sociaux */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold mb-4">Suivez-nous</h4>
              <div className="flex flex-col gap-4">
                <a href="#" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Facebook className="w-5 h-5" />
                  </div>
                  <span>Facebook</span>
                </a>
                <a href="#" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <span>Instagram</span>
                </a>
                <a href="#" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Twitter className="w-5 h-5" />
                  </div>
                  <span>Twitter</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="mt-12 pt-8 border-t border-white/5">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <a href="#" className="text-sm text-gray-400 hover:text-white">Mentions légales</a>
                <a href="#" className="text-sm text-gray-400 hover:text-white">CGV</a>
                <a href="#" className="text-sm text-gray-400 hover:text-white">Politique de confidentialité</a>
                <a href="#" className="text-sm text-gray-400 hover:text-white">Plan du site</a>
              </div>
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} Yobi Tech. Tous droits réservés.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default YobiTechStore;