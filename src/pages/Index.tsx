import { Phone, Mail, MapPin, Facebook, Youtube, Instagram, MessageCircle, Shield, Users, TrendingUp, FileText, ClipboardCheck, Lock, HeartHandshake, ExternalLink, ChevronRight, CheckCircle2 } from "lucide-react";
import vvlLogo from "@/assets/vvl-logo.png";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
    <div className="container mx-auto flex items-center justify-between py-3 px-4">
      <div className="flex items-center gap-3">
        <img src={vvlLogo} alt="VLS Logo" className="w-10 h-10 object-contain" />
        <span className="font-heading font-bold text-lg text-foreground">VLS Enterprises</span>
      </div>
      <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
        <a href="#about" className="hover:text-primary transition-colors">About</a>
        <a href="#services" className="hover:text-primary transition-colors">Services</a>
        <a href="#why" className="hover:text-primary transition-colors">Why Us</a>
        <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
      </div>
      <a href="https://app.vlsenterprises.in/login" target="_blank" rel="noopener noreferrer"
        className="bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
        Open Portal
      </a>
    </div>
  </nav>
);

const Hero = () => (
  <section className="hero-gradient min-h-screen flex items-center pt-20">
    <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
      <div className="flex-1 text-center lg:text-left">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
          <Shield size={16} /> Trusted Finance Partner
        </div>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-4">
          VLS Enterprises
        </h1>
        <p className="text-xl md:text-2xl font-heading font-semibold text-gradient mb-6">
          Finance & Collection Services
        </p>
        <p className="text-muted-foreground text-lg max-w-xl mb-8 leading-relaxed">
          A trusted small-scale finance service operating under the VLS group, focused on structured loan management and responsible collection practices.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <a href="https://app.vlsenterprises.in/login" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-xl text-base font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
            Get Started <ChevronRight size={18} />
          </a>
          <a href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-card text-foreground border border-border px-8 py-3.5 rounded-xl text-base font-semibold hover:bg-muted transition-colors">
            Contact Us
          </a>
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <div className="relative">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl bg-primary/5 border border-primary/10 flex items-center justify-center">
            <img src={vvlLogo} alt="VLS Enterprises Logo" className="w-48 h-48 md:w-60 md:h-60 object-contain drop-shadow-2xl" />
          </div>
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/10 rounded-2xl blur-2xl" />
          <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/10 rounded-2xl blur-2xl" />
        </div>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-20 bg-card">
    <div className="container mx-auto px-4 max-w-3xl text-center">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">About VLS Enterprises</h2>
      <div className="w-16 h-1 bg-primary rounded-full mx-auto mb-8" />
      <p className="text-muted-foreground text-lg leading-relaxed mb-4">
        VLS Enterprises operates as a finance services division under the VLS group. We provide structured small-scale lending and organized collection management for our customers.
      </p>
      <p className="text-muted-foreground text-lg leading-relaxed">
        Our focus is on maintaining transparent records, responsible financial tracking, and systematic customer management to ensure smooth financial operations.
      </p>
    </div>
  </section>
);

const services = [
  { icon: TrendingUp, title: "Small-scale Lending Support", color: "text-accent" },
  { icon: Users, title: "Customer Account Management", color: "text-primary" },
  { icon: ClipboardCheck, title: "Daily & Scheduled Collection Tracking", color: "text-accent" },
  { icon: FileText, title: "Structured Loan Monitoring", color: "text-primary" },
  { icon: Lock, title: "Digital Financial Record Maintenance", color: "text-accent" },
];

const Services = () => (
  <section id="services" className="py-20 section-alt">
    <div className="container mx-auto px-4">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-4">Our Finance Services</h2>
      <div className="w-16 h-1 bg-primary rounded-full mx-auto mb-12" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {services.map((s, i) => (
          <div key={i} className="bg-card rounded-2xl p-6 border border-border card-hover">
            <s.icon className={`${s.color} mb-4`} size={32} />
            <h3 className="font-heading font-semibold text-foreground text-lg">{s.title}</h3>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const whyItems = [
  "Operates under the trusted VLS brand",
  "Structured and organized financial processes",
  "Secure digital record management",
  "Dedicated support team",
  "Transparent customer tracking",
];

const WhyChoose = () => (
  <section id="why" className="py-20 bg-card">
    <div className="container mx-auto px-4 max-w-3xl">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-4">Why Choose VLS Enterprises</h2>
      <div className="w-16 h-1 bg-primary rounded-full mx-auto mb-12" />
      <div className="space-y-4">
        {whyItems.map((item, i) => (
          <div key={i} className="flex items-center gap-4 bg-secondary rounded-xl p-4">
            <CheckCircle2 className="text-accent shrink-0" size={22} />
            <span className="text-foreground font-medium">{item}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Portal = () => (
  <section className="py-20 hero-gradient">
    <div className="container mx-auto px-4 text-center max-w-2xl">
      <Lock className="mx-auto text-primary mb-4" size={40} />
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Authorized Access Portal</h2>
      <div className="w-16 h-1 bg-primary rounded-full mx-auto mb-8" />
      <p className="text-muted-foreground text-lg leading-relaxed mb-8">
        Our internal finance management system is designed for authorized staff and agents to manage customer records and collections securely.
      </p>
      <a href="https://app.vlsenterprises.in/login" target="_blank" rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-xl text-base font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
        Open Finance Portal <ExternalLink size={18} />
      </a>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-20 bg-card">
    <div className="container mx-auto px-4">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-4">Get in Touch</h2>
      <div className="w-16 h-1 bg-primary rounded-full mx-auto mb-12" />
      <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        <a href="tel:+919962028302" className="bg-secondary rounded-2xl p-6 text-center card-hover block">
          <Phone className="text-primary mx-auto mb-3" size={28} />
          <p className="font-semibold text-foreground">Phone</p>
          <p className="text-muted-foreground text-sm mt-1">+91 99 620 283 02</p>
        </a>
        <a href="mailto:saranraj87.ss@gmail.com" className="bg-secondary rounded-2xl p-6 text-center card-hover block">
          <Mail className="text-primary mx-auto mb-3" size={28} />
          <p className="font-semibold text-foreground">Email</p>
          <p className="text-muted-foreground text-sm mt-1">saranraj87.ss@gmail.com</p>
        </a>
         <a href="mailto:admin@vlsenterprises.in" className="bg-secondary rounded-2xl p-6 text-center card-hover block">
          <Mail className="text-primary mx-auto mb-3" size={28} />
          <p className="font-semibold text-foreground">Write us</p>
          <p className="text-muted-foreground text-sm mt-1">admin@vlsenterprises.in</p>
        </a>
        <div className="bg-secondary rounded-2xl p-6 text-center">
          <MapPin className="text-primary mx-auto mb-3" size={28} />
          <p className="font-semibold text-foreground">Location</p>
          <p className="text-muted-foreground text-sm mt-1">No.78.First Floor K.K.Salai  M.G.R Nagar Chennai. 78 (Near MGR Nagar Market)</p>
        </div>
      </div>
    </div>
  </section>
);

const socials = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: MessageCircle, label: "WhatsApp", href: "#" },
];

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground py-12">
    <div className="container mx-auto px-4 text-center">
      <div className="flex items-center justify-center gap-3 mb-4">
        <img src={vvlLogo} alt="VLS Logo" className="w-10 h-10 object-contain" />
        <span className="font-heading font-bold text-xl">VLS Enterprises</span>
      </div>
      <p className="text-primary-foreground/70 text-sm mb-2">Finance Services Division</p>
      <p className="text-primary-foreground/50 text-xs mb-6">Operated under VLS Construction</p>
      <div className="flex justify-center gap-4 mb-8">
        {socials.map((s, i) => (
          <a key={i} href={s.href} aria-label={s.label}
            className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
            <s.icon size={18} />
          </a>
        ))}
      </div>
      <div className="flex items-center justify-center gap-3 text-primary-foreground/50 text-xs">
        <span>Secure</span>
        <span>•</span>
        <span>Structured</span>
        <span>•</span>
        <span>Responsible</span>
      </div>
    </div>
  </footer>
);

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <Hero />
    <About />
    <Services />
    <WhyChoose />
    <Portal />
    <Contact />
    <Footer />
  </div>
);

export default Index;
