import { useEffect, useState } from "react";
import { BookingDialog } from "@/components/BookingDialog";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown, Menu, Phone, X } from "lucide-react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Logo } from "@/components/Logo";
import { products, site } from "@/content/site";

export default function Layout() {
  const [t, n] = useState(!1),
    [r, o] = useState(!1),
    s = useNavigate(),
    i = useLocation();
  return (
    useEffect(() => {
      const l = () => {
        o(window.scrollY > 20);
      };
      return (window.addEventListener("scroll", l), () => window.removeEventListener("scroll", l));
    }, []),
    useEffect(() => {
      (n(!1), window.scrollTo(0, 0));
    }, [i.pathname]),
    (
      <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/30">
        <motion.nav
          initial={{
            y: -100,
          }}
          animate={{
            y: 0,
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
          className={`fixed top-0 w-full z-50 transition-all duration-500 ${r ? "py-5" : "py-7 bg-transparent"}`}
        >
          <div className={`mx-auto transition-all duration-500 ${r ? "max-w-7xl px-6" : "container px-6"}`}>
            <div
              className={`flex items-center justify-between transition-all duration-500 min-h-[56px] ${r ? "glass-card border border-white/10 bg-[#0a0a0c]/90 backdrop-blur-2xl px-8 py-4 rounded-full shadow-[0_20px_40px_rgba(0,0,0,0.4)]" : ""}`}
            >
              <div className="flex items-center gap-2 cursor-pointer group shrink-0" onClick={() => s("/")}>
                <div className="relative">
                  <div className="absolute -inset-2 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Logo className="h-9 sm:h-10 relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]" />
                </div>
              </div>
              <div className="hidden xl:flex items-center gap-6 2xl:gap-8 text-sm font-bold text-white/80 ml-8">
                <a
                  href="/about"
                  className="hover:text-white transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary hover:after:w-full after:transition-all after:duration-300 whitespace-nowrap"
                >
                  About
                </a>
                <DropdownMenu>
                  <DropdownMenuTrigger className="hover:text-white transition-colors outline-none flex items-center gap-1 cursor-pointer group whitespace-nowrap">
                    {"Products "}
                    <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-[#0a0a0c]/95 backdrop-blur-xl border-white/10 text-white mt-4 p-2 min-w-[240px] shadow-[0_20px_40px_rgba(0,0,0,0.6)] rounded-xl">
                    <DropdownMenuItem
                      className="cursor-pointer hover:bg-white/10 focus:bg-white/10 rounded-lg transition-colors py-3"
                      onClick={() => s("/products")}
                    >
                      All Products
                    </DropdownMenuItem>
                    <div className="h-px bg-white/10 my-1" />
                    {products.map((l, c) => (
                      <DropdownMenuItem
                        className="cursor-pointer hover:bg-white/10 focus:bg-white/10 rounded-lg transition-colors py-2 text-white/80 hover:text-white"
                        onClick={() => s(l.path)}
                        key={c}
                      >
                        {l.label}
                      </DropdownMenuItem>
                    ))}
                    <div className="h-px bg-white/10 my-1" />
                    <DropdownMenuItem
                      className="cursor-pointer hover:bg-white/10 focus:bg-white/10 rounded-lg transition-colors py-3"
                      onClick={() => s("/industries")}
                    >
                      Industries
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <a
                  href="/how-it-works"
                  className="hover:text-white transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary hover:after:w-full after:transition-all after:duration-300 whitespace-nowrap"
                >
                  How It Works
                </a>
                <a
                  href="/testimonials"
                  className="hover:text-white transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary hover:after:w-full after:transition-all after:duration-300 whitespace-nowrap"
                >
                  Testimonials
                </a>
                <a
                  href="/pricing"
                  className="hover:text-white transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary hover:after:w-full after:transition-all after:duration-300 whitespace-nowrap"
                >
                  Pricing
                </a>
                <a
                  href="/blog"
                  className="hover:text-white transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary hover:after:w-full after:transition-all after:duration-300 whitespace-nowrap"
                >
                  Blog
                </a>
                <a
                  href="/contact"
                  className="hover:text-white transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary hover:after:w-full after:transition-all after:duration-300 whitespace-nowrap"
                >
                  Contact
                </a>
              </div>
              <div className="hidden xl:flex items-center gap-4">
                <Button
                  variant="ghost"
                  onClick={() => (window.location.href = site.loginUrl)}
                  className="text-white hover:text-white hover:bg-white/10 transition-all duration-300 font-bold rounded-full px-6 h-10"
                >
                  Log In
                </Button>
                <BookingDialog>
                  <Button className="bg-white text-black hover:bg-white/90 font-bold shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] hover:scale-105 transition-all duration-300 rounded-full px-6 h-10 group relative overflow-hidden">
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-shine" />
                    <span className="relative z-10 flex items-center gap-2">
                      {"Book Appointment "}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </BookingDialog>
              </div>
              <button
                aria-label={t ? "Close menu" : "Open menu"}
                className="xl:hidden text-white p-2 hover:text-primary transition-colors"
                onClick={() => n(!t)}
              >
                {t ? <X /> : <Menu />}
              </button>
            </div>
          </div>
          <AnimatePresence>
            {t && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: -20,
                  scale: 0.95,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: -20,
                  scale: 0.95,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="xl:hidden absolute top-full left-4 right-4 mt-4 max-h-[calc(100svh-7rem)] overflow-y-auto bg-[#0a0a0c]/95 backdrop-blur-3xl border border-white/10 rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
              >
                <div className="p-6 flex flex-col gap-6">
                  <a
                    href="/about"
                    className="text-white/80 hover:text-white font-bold text-lg transition-colors flex items-center justify-between group"
                  >
                    {"About "}
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                  </a>
                  <div>
                    <div className="text-white/40 font-bold text-sm mb-4 uppercase tracking-wider">Products</div>
                    <div className="flex flex-col gap-4">
                      <a
                        href="/products"
                        className="text-white/80 hover:text-white font-bold text-lg transition-colors"
                      >
                        All Products
                      </a>
                      {products.map((l) => (
                        <a
                          key={l.path}
                          href={l.path}
                          className="text-white/60 hover:text-white transition-colors pl-4 border-l border-white/10"
                        >
                          {l.label}
                        </a>
                      ))}
                      <a
                        href="/industries"
                        className="text-white/80 hover:text-white font-bold text-lg transition-colors"
                      >
                        Industries
                      </a>
                    </div>
                  </div>
                  <a
                    href="/how-it-works"
                    className="text-white/80 hover:text-white font-bold text-lg transition-colors flex items-center justify-between group"
                  >
                    {"How It Works "}
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                  </a>
                  <a
                    href="/testimonials"
                    className="text-white/80 hover:text-white font-bold text-lg transition-colors flex items-center justify-between group"
                  >
                    {"Testimonials "}
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                  </a>
                  <a
                    href="/pricing"
                    className="text-white/80 hover:text-white font-bold text-lg transition-colors flex items-center justify-between group"
                  >
                    {"Pricing "}
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                  </a>
                  <a
                    href="/blog"
                    className="text-white/80 hover:text-white font-bold text-lg transition-colors flex items-center justify-between group"
                  >
                    {"Blog "}
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                  </a>
                  <a
                    href="/contact"
                    className="text-white/80 hover:text-white font-bold text-lg transition-colors flex items-center justify-between group"
                  >
                    {"Contact "}
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                  </a>
                  <div className="h-px bg-white/10 my-2" />
                  <div className="flex flex-col gap-4">
                    {site.phone && (
                      <a href={site.phoneHref} className="flex items-center justify-center gap-2 text-lg font-bold text-white h-14 rounded-full border border-white/20">
                        <Phone className="w-5 h-5" /> Call {site.phone}
                      </a>
                    )}
                    <Button
                      variant="outline"
                      onClick={() => (window.location.href = site.loginUrl)}
                      className="w-full text-white border-white/20 hover:bg-white/10 text-lg h-14 rounded-full font-bold"
                    >
                      Log In
                    </Button>
                    <BookingDialog>
                      <Button className="w-full bg-white text-black hover:bg-white/90 text-lg h-14 rounded-full font-bold shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                        Book Appointment
                      </Button>
                    </BookingDialog>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
        <main className="flex-1 w-full flex flex-col">
          <Outlet />
        </main>
        <footer className="relative bg-[#030303] text-foreground py-32 px-4 border-t border-white/5 mt-auto overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_100%,#000_70%,transparent_100%)]" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-t from-primary/20 to-transparent blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: !0,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="lg:col-span-4"
              >
                <Logo className="h-12 mb-8 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:scale-105 transition-transform duration-300 origin-left" />
                <p className="text-white/60 text-lg leading-relaxed mb-8">
                  We build and manage AI-driven growth systems that get you found on Google and AI search, capture every lead, follow up automatically, and turn more inquiries into booked business.
                </p>
                {site.phone && (
                  <a href={site.phoneHref} className="block text-white text-lg font-bold mb-8 hover:text-primary transition-colors">
                    {site.phone}
                  </a>
                )}
                <div className="flex gap-4">
                  {site.social.twitter && (
                  <a
                    href={site.social.twitter} aria-label="Twitter"
                    className="w-12 h-12 rounded-full glass-card border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] text-white"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                  )}
                  {site.social.instagram && (
                  <a
                    href={site.social.instagram} aria-label="Instagram"
                    className="w-12 h-12 rounded-full glass-card border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] text-white"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  )}
                </div>
              </motion.div>
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: !0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.1,
                }}
                className="lg:col-span-3 lg:col-start-6"
              >
                <h3 className="font-black text-white mb-8 tracking-widest text-sm uppercase">Products</h3>
                <ul className="space-y-4 text-base text-white/70 font-medium">
                  {products.map((l, c) => (
                    <li key={c}>
                      <a href={l.path} className="hover:text-white transition-colors flex items-center gap-3 group">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:scale-150 group-hover:bg-primary transition-all duration-300" />
                        <span className="group-hover:translate-x-2 transition-transform duration-300">{l.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: !0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.2,
                }}
                className="lg:col-span-2"
              >
                <h3 className="font-black text-white mb-8 tracking-widest text-sm uppercase">Company</h3>
                <ul className="space-y-4 text-base text-white/70 font-medium">
                  {[
                    {
                      label: "About Us",
                      path: "/about",
                    },
                    {
                      label: "How It Works",
                      path: "/how-it-works",
                    },
                    {
                      label: "Testimonials",
                      path: "/testimonials",
                    },
                    {
                      label: "Industries",
                      path: "/industries",
                    },
                    {
                      label: "Service Areas",
                      path: "/areas",
                    },
                    {
                      label: "Pricing",
                      path: "/pricing",
                    },
                    {
                      label: "Blog",
                      path: "/blog",
                    },
                    {
                      label: "Contact Us",
                      path: "/contact",
                    },
                  ].map((l, c) => (
                    <li key={c}>
                      <a href={l.path} className="hover:text-white transition-colors flex items-center gap-3 group">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:scale-150 group-hover:bg-primary transition-all duration-300" />
                        <span className="group-hover:translate-x-2 transition-transform duration-300">{l.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: !0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.3,
                }}
                className="lg:col-span-2"
              >
                <h3 className="font-black text-white mb-8 tracking-widest text-sm uppercase">Legal</h3>
                <ul className="space-y-4 text-base text-white/70 font-medium">
                  {[
                    {
                      label: "Terms of Use",
                      path: "/legal",
                    },
                    {
                      label: "Privacy Policy",
                      path: "/legal",
                    },
                  ].map((l, c) => (
                    <li key={c}>
                      <a href={l.path} className="hover:text-white transition-colors flex items-center gap-3 group">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:scale-150 group-hover:bg-primary transition-all duration-300" />
                        <span className="group-hover:translate-x-2 transition-transform duration-300">{l.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
            <motion.div
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{
                once: !0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.5,
              }}
              className="flex flex-col md:flex-row justify-between items-center text-sm font-medium text-white/40 pt-8 border-t border-white/10"
            >
              <div>
                {"© "}
                {new Date().getFullYear()}
                {" Raindrop Marketing. All Rights Reserved."}
              </div>
              <div className="mt-4 md:mt-0 flex gap-8">
                <a href="/legal" className="hover:text-white transition-colors">
                  Privacy
                </a>
                <a href="/legal" className="hover:text-white transition-colors">
                  Terms
                </a>
              </div>
            </motion.div>
          </div>
        </footer>
      </div>
    )
  );
}
