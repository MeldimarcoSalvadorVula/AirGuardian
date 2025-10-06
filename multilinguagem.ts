import React, { useState } from 'react';
import { Globe, User, ShoppingCart, LogIn, Menu } from 'lucide-react';

const translations = {
  pt: {
    appTitle: 'Minha Loja Online',
    welcome: 'Bem-vindo',
    description: 'Este é um exemplo de aplicativo multilíngue em Angular',
    home: 'Início',
    products: 'Produtos',
    about: 'Sobre',
    contact: 'Contato',
    login: 'Entrar',
    cart: 'Carrinho',
    selectLanguage: 'Selecione o idioma',
    productTitle: 'Nossos Produtos',
    product1: 'Notebook Premium',
    product2: 'Smartphone Pro',
    product3: 'Fones Bluetooth',
    addToCart: 'Adicionar ao Carrinho',
    price: 'Preço',
    footerText: '© 2025 Minha Loja. Todos os direitos reservados.',
    currentLanguage: 'Idioma atual'
  },
  en: {
    appTitle: 'My Online Store',
    welcome: 'Welcome',
    description: 'This is an example of a multilingual application in Angular',
    home: 'Home',
    products: 'Products',
    about: 'About',
    contact: 'Contact',
    login: 'Login',
    cart: 'Cart',
    selectLanguage: 'Select language',
    productTitle: 'Our Products',
    product1: 'Premium Notebook',
    product2: 'Smartphone Pro',
    product3: 'Bluetooth Headphones',
    addToCart: 'Add to Cart',
    price: 'Price',
    footerText: '© 2025 My Store. All rights reserved.',
    currentLanguage: 'Current language'
  },
  es: {
    appTitle: 'Mi Tienda Online',
    welcome: 'Bienvenido',
    description: 'Este es un ejemplo de aplicación multilingüe en Angular',
    home: 'Inicio',
    products: 'Productos',
    about: 'Acerca de',
    contact: 'Contacto',
    login: 'Iniciar sesión',
    cart: 'Carrito',
    selectLanguage: 'Seleccionar idioma',
    productTitle: 'Nuestros Productos',
    product1: 'Notebook Premium',
    product2: 'Smartphone Pro',
    product3: 'Auriculares Bluetooth',
    addToCart: 'Añadir al Carrito',
    price: 'Precio',
    footerText: '© 2025 Mi Tienda. Todos los derechos reservados.',
    currentLanguage: 'Idioma actual'
  }
};

const MultilingualApp = () => {
  const [currentLang, setCurrentLang] = useState('pt');
  const [cartCount, setCartCount] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = translations[currentLang];

  const products = [
    { id: 1, name: t.product1, price: 'R$ 3.500,00', image: '💻' },
    { id: 2, name: t.product2, price: 'R$ 2.800,00', image: '📱' },
    { id: 3, name: t.product3, price: 'R$ 450,00', image: '🎧' }
  ];

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  const languageFlags = {
    pt: '🇧🇷',
    en: '🇺🇸',
    es: '🇪🇸'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-indigo-600 flex items-center gap-2">
              <Globe className="w-7 h-7" />
              {t.appTitle}
            </h1>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-6 items-center">
              <a href="#" className="text-gray-700 hover:text-indigo-600 transition">{t.home}</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600 transition">{t.products}</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600 transition">{t.about}</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600 transition">{t.contact}</a>
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-4">
              {/* Language Selector */}
              <div className="relative">
                <select
                  value={currentLang}
                  onChange={(e) => setCurrentLang(e.target.value)}
                  className="bg-indigo-50 border-2 border-indigo-200 rounded-lg px-3 py-2 pr-8 appearance-none cursor-pointer text-sm font-medium text-indigo-700 hover:bg-indigo-100 transition"
                >
                  <option value="pt">{languageFlags.pt} PT</option>
                  <option value="en">{languageFlags.en} EN</option>
                  <option value="es">{languageFlags.es} ES</option>
                </select>
              </div>

              {/* Cart */}
              <button className="relative p-2 hover:bg-gray-100 rounded-lg transition">
                <ShoppingCart className="w-6 h-6 text-gray-700" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Login */}
              <button className="hidden md:flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
                <LogIn className="w-4 h-4" />
                {t.login}
              </button>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 flex flex-col gap-3 border-t pt-4">
              <a href="#" className="text-gray-700 hover:text-indigo-600">{t.home}</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600">{t.products}</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600">{t.about}</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600">{t.contact}</a>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-12 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          {t.welcome}! 👋
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          {t.description}
        </p>
        <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-lg shadow-md">
          <Globe className="w-5 h-5 text-indigo-600" />
          <span className="font-medium text-gray-700">
            {t.currentLanguage}: <span className="text-indigo-600 font-bold">{languageFlags[currentLang]} {currentLang.toUpperCase()}</span>
          </span>
        </div>
      </section>

      {/* Products Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          {t.productTitle}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition transform hover:-translate-y-1">
              <div className="text-6xl mb-4 text-center">{product.image}</div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h4>
              <p className="text-gray-600 mb-4">
                <span className="font-semibold">{t.price}:</span> {product.price}
              </p>
              <button
                onClick={handleAddToCart}
                className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition font-medium flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-4 h-4" />
                {t.addToCart}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>{t.footerText}</p>
        </div>
      </footer>
    </div>
  );
};

export default MultilingualApp;
