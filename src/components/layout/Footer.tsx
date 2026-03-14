import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube } from "lucide-react";
import Logo from "@/assets/logo.svg";

export function Footer() {
  return (
    <footer className="bg-bg-base border-t-2 border-border pt-20 pb-10 px-5 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="lg:col-span-2">
          <Link to="/">
            <img src={Logo} alt="Pexappeal Logo" className="w-32 mb-4" />
          </Link>
          <p className="font-body text-text-muted text-xl uppercase tracking-widest max-w-md">
            Louder than the Arabian Sea. Live band based in Goa, India.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-body text-accent font-bold tracking-widest uppercase mb-2">
            Navigation
          </h4>
          {["HOME", "ABOUT", "MUSIC", "CONTACT"].map((item) => (
            <Link
              key={item}
              to={item === "HOME" ? "/" : `/${item.toLowerCase()}`}
              className="font-display text-2xl text-text-main hover:text-accent transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-body text-accent font-bold tracking-widest uppercase mb-2">
            Connect
          </h4>
          <a
            href="tel:+919876543210"
            className="font-display text-2xl text-text-main hover:text-accent transition-colors"
          >
            +91 98765 43210
          </a>
          <a
            href="mailto:hello@pexappeal.com"
            className="font-display text-2xl text-text-main hover:text-accent transition-colors"
          >
            HELLO@PEXAPPEAL.COM
          </a>
          <div className="flex gap-4 mt-4">
            <a
              href="#"
              className="text-text-main hover:text-accent transition-colors"
            >
              <Instagram size={32} />
            </a>
            <a
              href="#"
              className="text-text-main hover:text-accent transition-colors"
            >
              <Facebook size={32} />
            </a>
            <a
              href="#"
              className="text-text-main hover:text-accent transition-colors"
            >
              <Youtube size={32} />
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t-2 border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-body text-text-muted font-bold tracking-widest uppercase">
          © {new Date().getFullYear()} PEXAPPEAL.
        </p>
        <p className="font-body text-text-muted font-bold tracking-widest uppercase">
          GOA, INDIA
        </p>
      </div>
    </footer>
  );
}
