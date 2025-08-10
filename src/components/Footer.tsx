import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
              src="./public/favicon.ico" // <-- Replace with your actual logo path
              alt="Lorvix Logo"
              className="h-8 w-8 object-contain"/>
              <span className="text-2xl font-bold">Lorvix Solutions</span>
            </div>
            <p className="text-sm text-background/80">
              Empowering businesses with innovative software solutions and professional web development services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-background/80 hover:text-background transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/software" className="text-sm text-background/80 hover:text-background transition-colors">
                  InvMaster Software
                </Link>
              </li>
              <li>
                <Link to="/web-development" className="text-sm text-background/80 hover:text-background transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-background/80 hover:text-background transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-sm text-background/80">Invoice Management</li>
              <li className="text-sm text-background/80">Business Software</li>
              <li className="text-sm text-background/80">Custom Web Development</li>
              <li className="text-sm text-background/80">E-commerce Solutions</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-background/80" />
                <span className="text-sm text-background/80">lorvixsolutions@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-background/80" />
                <span className="text-sm text-background/80">+91 9884948383</span>
                <span className="text-sm text-background/80">+91 7200159832</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-background/80" />
                <span className="text-sm text-background/80">Chennai</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-sm text-background/60">
            © 2024 Lorvix. All rights reserved. Empowering businesses with software solutions.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;