import { useEffect, useMemo, useState } from 'react';
import {
  Award,
  Baby,
  BookOpen,
  CalendarCheck,
  CheckCircle2,
  ChevronRight,
  Clock,
  Facebook,
  Gamepad2,
  GraduationCap,
  HeartHandshake,
  Instagram,
  LockKeyhole,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Music2,
  Paintbrush,
  Phone,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
  Trash2,
  Users,
  X,
} from 'lucide-react';

const STORAGE_KEY = 'arcoirisKidsSolicitudes';

// Edita este bloque para adaptar la demo a otro jardín, after school o cliente real.
const siteData = {
  businessName: 'Jardín Infantil Arcoíris Kids',
  shortName: 'Arcoíris Kids',
  phone: '+56 9 8765 4321',
  email: 'contacto@arcoiriskids.cl',
  address: 'Av. Los Jardines 1234, Ñuñoa, Santiago, RM',
  hours: 'Lunes a viernes, 07:30 a 19:00 hrs',
  whatsappNumber: '56987654321',
  whatsappMessage: 'Hola, quiero consultar por cupos para el jardín infantil y after school.',
  heroImage:
    'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1800&q=88',
  heroSupportImage:
    'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=700&q=86',
  aboutImage:
    'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=1200&q=86',
  gallery: [
    'https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1000&q=84',
    'https://images.unsplash.com/photo-1567057419565-4349c49d8a04?auto=format&fit=crop&w=900&q=84',
    'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=84',
    'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=900&q=84',
    'https://images.unsplash.com/photo-1526634332515-d56c5fd16991?auto=format&fit=crop&w=900&q=84',
    'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1000&q=84',
  ],
};

const navLinks = [
  ['Inicio', '#inicio'],
  ['Nosotros', '#nosotros'],
  ['Programas', '#programas'],
  ['Actividades', '#actividades'],
  ['Galería', '#galeria'],
  ['Testimonios', '#testimonios'],
  ['Contacto', '#contacto'],
];

const trustItems = [
  {
    icon: ShieldCheck,
    title: 'Seguridad y cuidado permanente',
    text: 'Protocolos claros, acceso controlado y espacios supervisados durante toda la jornada.',
  },
  {
    icon: Gamepad2,
    title: 'Aprendizaje mediante el juego',
    text: 'Experiencias lúdicas para estimular lenguaje, autonomía, creatividad y convivencia.',
  },
  {
    icon: HeartHandshake,
    title: 'Comunicación cercana',
    text: 'Contacto fluido con apoderados para acompañar avances, rutinas y necesidades.',
  },
  {
    icon: Baby,
    title: 'Espacios adaptados',
    text: 'Salas luminosas, rincones de exploración y mobiliario cómodo para niñas y niños.',
  },
];

const programs = [
  {
    icon: Baby,
    title: 'Jardín Infantil',
    age: '1 a 3 años',
    description: 'Cuidado cálido, estimulación temprana y rutinas seguras para los primeros años.',
    schedule: 'Media jornada o jornada completa',
  },
  {
    icon: GraduationCap,
    title: 'Preescolar',
    age: '3 a 5 años',
    description: 'Preparación integral con foco en autonomía, lenguaje, pensamiento lógico y convivencia.',
    schedule: '08:00 a 16:30 hrs',
  },
  {
    icon: Clock,
    title: 'After School',
    age: '5 a 10 años',
    description: 'Acompañamiento después del colegio, apoyo en tareas, colación y talleres recreativos.',
    schedule: '13:00 a 19:00 hrs',
  },
  {
    icon: Sparkles,
    title: 'Talleres y actividades',
    age: 'Todas las edades',
    description: 'Arte, música, movimiento, cuentos y dinámicas para descubrir talentos e intereses.',
    schedule: 'Bloques semanales',
  },
];

const activities = [
  [Paintbrush, 'Arte y creatividad', 'Expresión con materiales, colores y proyectos guiados.'],
  [Music2, 'Música y movimiento', 'Ritmo, coordinación, baile y conciencia corporal.'],
  [Gamepad2, 'Juegos educativos', 'Dinámicas para aprender a resolver, compartir y explorar.'],
  [CheckCircle2, 'Apoyo en tareas', 'Acompañamiento tranquilo para reforzar hábitos escolares.'],
  [BookOpen, 'Lectura y cuentos', 'Momentos de lenguaje, imaginación y conversación.'],
  [Sparkles, 'Talleres recreativos', 'Bloques entretenidos para cerrar el día con energía positiva.'],
];

const testimonials = [
  {
    name: 'Camila R.',
    text: 'Desde el primer día sentimos confianza. Mi hija llega feliz y hemos visto avances enormes en su autonomía.',
  },
  {
    name: 'Felipe M.',
    text: 'El after school nos resolvió la tarde con tranquilidad. Son cariñosas, organizadas y siempre comunican todo.',
  },
  {
    name: 'Daniela P.',
    text: 'Nos encantó el ambiente familiar. Las educadoras conocen a cada niño y eso se nota en el trato diario.',
  },
];

const heroStats = [
  ['+12', 'años de experiencia'],
  ['4:1', 'acompañamiento cercano'],
  ['07:30', 'inicio flexible'],
];

const heroProofCards = [
  [ShieldCheck, 'Ambiente seguro', 'Protocolos y espacios supervisados'],
  [Users, 'Educadoras calificadas', 'Equipo cercano y preparado'],
  [Clock, 'Horarios flexibles', 'Jornadas pensadas para familias'],
  [BookOpen, 'After School', 'Tareas, talleres y contención'],
];

const parentConfidenceItems = [
  [Award, 'Equipo preparado', 'Educadoras con enfoque respetuoso y rutinas claras.'],
  [ShieldCheck, 'Cuidado visible', 'Espacios supervisados y comunicación durante la jornada.'],
  [HeartHandshake, 'Relación cercana', 'Acompañamiento familiar sin fricción ni distancia.'],
];

const contactInitialForm = {
  name: '',
  phone: '',
  email: '',
  childAge: '',
  program: '',
  message: '',
};

function useRevealOnScroll(dependency) {
  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal:not(.is-visible)');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -7% 0px', threshold: 0.12 },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [dependency]);
}

function loadRequests() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

function saveRequests(requests) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(requests));
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [requests, setRequests] = useState(loadRequests);
  const [isAdmin, setIsAdmin] = useState(() => window.location.hash === '#admin-demo');

  useRevealOnScroll(isAdmin);

  useEffect(() => {
    const onHashChange = () => {
      const nextHash = window.location.hash;
      setMenuOpen(false);
      setIsAdmin(nextHash === '#admin-demo');

      if (nextHash === '#admin-demo') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      window.setTimeout(() => {
        document.querySelector(nextHash || '#inicio')?.scrollIntoView({ behavior: 'smooth' });
      }, 0);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    saveRequests(requests);
  }, [requests]);

  const whatsappUrl = useMemo(
    () => `https://wa.me/${siteData.whatsappNumber}?text=${encodeURIComponent(siteData.whatsappMessage)}`,
    [],
  );

  return (
    <div className="min-h-screen overflow-hidden text-ink" data-deployment="github-pages-2026-05-09-v2">
      <a href="#inicio" className="skip-link">
        Saltar al contenido
      </a>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {isAdmin ? (
        <AdminPanel requests={requests} setRequests={setRequests} />
      ) : (
        <main id="inicio">
          <Hero whatsappUrl={whatsappUrl} />
          <ParentConfidenceStrip />
          <TrustSection />
          <AboutSection />
          <ProgramsSection />
          <ActivitiesSection />
          <GallerySection />
          <TestimonialsSection />
          <CtaSection whatsappUrl={whatsappUrl} />
          <ContactSection setRequests={setRequests} />
        </main>
      )}
      <Footer />
      <a className="whatsapp-float" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Contactar por WhatsApp">
        <MessageCircle size={28} />
      </a>
    </div>
  );
}

function ParentConfidenceStrip() {
  return (
    <section className="-mt-4 px-4 pb-10 sm:px-6 lg:px-8">
      <div className="reveal mx-auto grid max-w-7xl gap-3 rounded-lg border border-white/80 bg-white/90 p-3 shadow-soft backdrop-blur md:grid-cols-3">
        {parentConfidenceItems.map(([Icon, title, text]) => (
          <div key={title} className="flex items-start gap-4 rounded-lg p-4 transition duration-300 hover:bg-creamsand">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-skysoft text-teal-800">
              <Icon size={22} />
            </span>
            <div>
              <h2 className="font-display text-lg font-black text-ink">{title}</h2>
              <p className="mt-1 text-sm font-semibold leading-6 text-slate-600">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <header className="site-header fixed inset-x-0 top-0 z-50 border-b border-sunsoft bg-white/90 shadow-[0_12px_30px_rgba(22,24,38,0.10)] backdrop-blur-xl">
      <nav className="section-shell flex h-[4.5rem] items-center justify-between gap-4 sm:h-20">
        <a href="#inicio" className="group flex items-center gap-3 focus-ring" onClick={() => setMenuOpen(false)}>
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-sunsoft text-teal-800 shadow-sm transition group-hover:scale-105 sm:h-12 sm:w-12">
            <Sparkles size={24} />
          </span>
          <span className="max-w-[11rem] font-display text-lg font-black leading-tight text-ink sm:max-w-none sm:text-xl">
            {siteData.shortName}
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map(([label, href]) => (
            <a key={label} className="rounded-full px-3 py-2 text-sm font-bold text-ink transition hover:bg-sunsoft hover:text-ink focus-ring" href={href}>
              {label}
            </a>
          ))}
        </div>

        <Button href="#contacto" className="hidden lg:inline-flex" size="sm">
          Agenda una visita
        </Button>

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-white/80 text-ink transition hover:bg-sunsoft focus-ring lg:hidden"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {menuOpen && (
        <div className="fixed inset-x-0 top-[4.5rem] z-40 max-h-[calc(100vh-4.5rem)] overflow-y-auto border-t border-sunsoft bg-creamsand px-4 py-4 shadow-soft sm:top-20 lg:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map(([label, href]) => (
              <a
                key={label}
                className="rounded-lg px-4 py-3 font-bold text-ink transition hover:bg-skysoft focus-ring"
                href={href}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
            <Button href="#contacto" className="mt-2 w-full" onClick={() => setMenuOpen(false)}>
              Agenda una visita
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero({ whatsappUrl }) {
  return (
    <section className="relative min-h-screen overflow-hidden bg-ink pt-24 text-white sm:pt-28">
      <img
        src={siteData.heroImage}
        alt="Niños compartiendo en un ambiente educativo y protegido"
        className="absolute inset-0 h-full w-full object-cover object-[58%_center] sm:object-center"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#161826]/90 via-[#237C90]/62 to-[#FF684F]/36" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#7A4A28]/76 via-[#6D4DD8]/18 to-[#FFE36E]/22" />

      <div className="section-shell relative z-10 flex min-h-[calc(100vh-6rem)] flex-col justify-center pb-10 pt-6 sm:pb-12 lg:pt-10">
        <div className="reveal hero-copy-panel max-w-3xl">
          <div className="trust-pill">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-mintsoft text-teal-800">
              <LockKeyhole size={15} />
            </span>
            Cupos abiertos 2026 · visitas guiadas en Santiago
          </div>
          <h1 className="mt-5 max-w-4xl font-display text-4xl font-black leading-[1.04] text-white sm:text-5xl lg:text-7xl">
            Un lugar donde tus hijos se sienten seguros, queridos y listos para aprender
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/80 sm:text-lg lg:text-xl">
            Jardín infantil y after school con una experiencia cálida, moderna y confiable para acompañar cada etapa con cariño, juego y comunicación cercana.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#contacto">
              Agenda una visita <CalendarCheck size={20} />
            </Button>
            <Button href="#programas" variant="secondary">
              Conoce nuestros programas <ChevronRight size={20} />
            </Button>
          </div>
          <div className="mt-7 hidden max-w-2xl grid-cols-3 gap-3 sm:grid">
            {heroStats.map(([value, label]) => (
              <div key={label} className="stat-tile">
                <p className="font-display text-2xl font-black text-white sm:text-3xl">{value}</p>
                <p className="mt-1 text-xs font-bold leading-snug text-white/72 sm:text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal mt-8 hidden gap-3 sm:grid sm:grid-cols-2 lg:grid-cols-4">
          {heroProofCards.map(([Icon, label, text]) => (
            <div key={label} className="hero-proof-card">
              <Icon className="text-sunsoft" size={24} />
              <div>
                <p className="text-sm font-extrabold leading-snug text-white">{label}</p>
                <p className="mt-1 text-xs font-semibold leading-5 text-white/66">{text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal mt-5 grid gap-3 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="hidden max-w-2xl items-center gap-3 rounded-lg border border-white/20 bg-white/10 p-3 shadow-soft backdrop-blur md:flex">
            <img
              src={siteData.heroSupportImage}
              alt="Niño realizando una actividad educativa"
              className="h-14 w-14 rounded-lg object-cover"
              loading="lazy"
            />
            <p className="text-sm font-semibold leading-6 text-white/75">
              Una visita guiada permite conocer salas, equipo, rutinas y disponibilidad de cupos antes de tomar una decisión.
            </p>
          </div>

          <div className="hidden rounded-lg border border-white/20 bg-white/10 p-4 text-right shadow-soft backdrop-blur xl:block">
            <p className="font-display text-3xl font-black text-sunsoft">98%</p>
            <p className="max-w-[12rem] text-xs font-extrabold leading-5 text-white/74">familias recomiendan la experiencia</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section className="section-pad bg-white/75">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Confianza para apoderados"
          title="La tranquilidad de dejar a tus hijos en buenas manos"
          intro="Una experiencia diseñada para que los niños disfruten su día y las familias se sientan informadas, escuchadas y acompañadas."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {trustItems.map(({ icon: Icon, title, text }) => (
            <article key={title} className="reveal soft-card p-6">
              <IconBadge icon={Icon} />
              <h3 className="mt-5 font-display text-xl font-black">{title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="nosotros" className="section-pad">
      <div className="section-shell grid items-center gap-10 lg:grid-cols-[0.92fr_1fr]">
        <div className="reveal relative">
          <div className="media-frame">
            <img
              src={siteData.aboutImage}
              alt="Sala infantil preparada para aprendizaje y juego"
              className="h-[24rem] w-full object-cover sm:h-[30rem]"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-5 right-4 rounded-lg border border-white/80 bg-sunsoft p-4 shadow-soft sm:right-6 sm:p-5">
            <p className="font-display text-3xl font-black text-teal-800">+12</p>
            <p className="text-sm font-extrabold text-slate-700">años de experiencia demo</p>
          </div>
        </div>
        <div className="reveal">
          <SectionHeading
            eyebrow="Sobre nosotros"
            title="Acompañamos cada etapa con cariño, propósito y familia"
            intro="Un proyecto educativo que combina cuidado afectivo, aprendizaje activo y una relación transparente con madres, padres y apoderados."
          />
          <p className="mt-6 text-lg leading-8 text-slate-600">
            En {siteData.businessName} creemos que la infancia merece un entorno seguro, alegre y estimulante. Nuestro equipo trabaja con una mirada integral que combina cuidado, aprendizaje activo, juego y acompañamiento emocional.
          </p>
          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {[
              ['Misión', 'Entregar experiencias educativas significativas que fortalezcan autonomía, creatividad y confianza.'],
              ['Valores', 'Cariño, respeto, seguridad, inclusión, colaboración y comunicación cercana.'],
              ['Familia', 'Construimos una relación transparente con apoderados para acompañar juntos cada avance.'],
              ['Desarrollo integral', 'Promovemos habilidades sociales, cognitivas, motrices y emocionales.'],
            ].map(([title, text]) => (
              <div key={title} className="info-tile">
                <h3 className="font-display text-lg font-black text-teal-800">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProgramsSection() {
  return (
    <section id="programas" className="section-pad section-tint">
      <div className="section-shell">
        <div className="reveal flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Programas"
            title="Opciones flexibles para distintas edades y rutinas"
            intro="Desde los primeros años hasta la tarde después del colegio, cada programa está pensado para sostener rutinas reales de familias reales."
          />
          <Button href="#contacto" variant="secondary" size="sm" className="w-fit">
            Consultar cupos <ChevronRight size={19} />
          </Button>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {programs.map(({ icon: Icon, title, age, description, schedule }) => (
            <article key={title} className="reveal soft-card flex min-h-[23rem] flex-col p-6">
              <IconBadge icon={Icon} tone="sun" />
              <h3 className="mt-5 font-display text-2xl font-black">{title}</h3>
              <p className="mt-2 text-xs font-extrabold uppercase tracking-[0.14em] text-teal-700">{age}</p>
              <p className="mt-4 flex-1 leading-7 text-slate-600">{description}</p>
              <p className="mt-5 rounded-lg bg-mintsoft px-4 py-3 text-sm font-bold text-teal-900">{schedule}</p>
              <Button href="#contacto" size="sm" className="mt-5 w-full">
                Consultar cupo
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ActivitiesSection() {
  return (
    <section id="actividades" className="section-pad">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Actividades"
          title="Días activos, entretenidos y con intención educativa"
          intro="Cada actividad tiene una intención: explorar, crear, moverse, conversar, resolver y volver a casa con una experiencia bonita que contar."
          centered
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map(([Icon, title, text]) => (
            <article key={title} className="reveal group soft-card flex gap-4 p-5">
              <IconBadge icon={Icon} compact />
              <div>
                <h3 className="font-display text-xl font-black">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  return (
    <section id="galeria" className="section-pad bg-[linear-gradient(135deg,#FFEBC2_0%,#FFD6E7_45%,#AEE8FF_100%)]">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Galería"
          title="Ambientes pensados para explorar, compartir y aprender"
          intro="Imágenes referenciales para mostrar el tipo de atmósfera cálida, luminosa y cuidada que transmite confianza en una visita."
        />
        <div className="mt-10 grid auto-rows-[12rem] gap-4 sm:auto-rows-[14rem] md:grid-cols-4">
          {siteData.gallery.map((src, index) => (
            <div
              key={src}
              className={`reveal overflow-hidden rounded-lg bg-white shadow-soft ${index === 0 || index === 5 ? 'md:col-span-2 md:row-span-2' : ''}`}
            >
              <img
                src={src}
                alt={`Imagen de muestra del jardín infantil ${index + 1}`}
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section id="testimonios" className="section-pad">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Testimonios"
          title="Familias que valoran la cercanía y el cuidado"
          intro="Comentarios ficticios para presentar el tono emocional que una web real puede recoger de sus apoderados."
          centered
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {testimonials.map(({ name, text }) => (
            <article key={name} className="reveal soft-card p-7">
              <Quote className="mb-5 text-coralsoft" size={34} />
              <div className="flex gap-1 text-amber-400" aria-label="5 estrellas">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={20} fill="currentColor" />
                ))}
              </div>
              <p className="mt-5 text-lg leading-8 text-slate-600">“{text}”</p>
              <p className="mt-6 font-display text-xl font-black text-teal-800">{name}</p>
              <p className="text-sm font-semibold text-slate-500">Apoderado/a</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaSection({ whatsappUrl }) {
  return (
    <section className="px-4 py-8 sm:px-6 lg:px-8">
      <div className="reveal mx-auto grid max-w-7xl gap-8 rounded-lg bg-[linear-gradient(135deg,#FF684F_0%,#FFB04D_26%,#6D4DD8_58%,#168CA0_100%)] px-6 py-12 text-white shadow-glow sm:px-10 lg:grid-cols-[1fr_auto] lg:items-center lg:py-14">
        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-sunsoft">Visita guiada</p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-black leading-tight sm:text-4xl">
            Agenda una visita y conoce nuestro espacio
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-white/72">
            Recorre salas, conoce al equipo y recibe orientación según edad, horarios y programa de interés.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
          <Button href={whatsappUrl} external variant="light">
            <MessageCircle size={20} /> Contactar por WhatsApp
          </Button>
          <Button href="#contacto" variant="sun">
            <Mail size={20} /> Enviar consulta
          </Button>
        </div>
      </div>
    </section>
  );
}

function ContactSection({ setRequests }) {
  const [form, setForm] = useState(contactInitialForm);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    setSuccess(false);
  }

  function validateForm() {
    const required = ['name', 'phone', 'email', 'childAge', 'program', 'message'];
    const nextErrors = required.reduce((acc, field) => {
      if (!form[field].trim()) acc[field] = 'Este campo es obligatorio.';
      return acc;
    }, {});

    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = 'Ingresa un correo válido.';
    }

    return nextErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validateForm();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setSuccess(false);
      return;
    }

    const request = {
      id: crypto.randomUUID(),
      ...form,
      createdAt: new Date().toLocaleString('es-CL', {
        dateStyle: 'medium',
        timeStyle: 'short',
      }),
    };

    setRequests((current) => [request, ...current]);
    setForm(contactInitialForm);
    setErrors({});
    setSuccess(true);
  }

  return (
    <section id="contacto" className="section-pad bg-white">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.82fr_1fr]">
        <div className="reveal">
          <SectionHeading
            eyebrow="Contacto"
            title="Conversemos sobre la mejor opción para tu familia"
            intro="Agenda una visita, resuelve dudas y recibe orientación según edad, horario y programa de interés."
          />
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Completa el formulario y revisaremos disponibilidad según edad, horario y programa de interés.
          </p>
          <div className="mt-8 grid gap-3">
            {[
              [MapPin, siteData.address],
              [Phone, siteData.phone],
              [Mail, siteData.email],
              [Clock, siteData.hours],
            ].map(([Icon, text]) => (
              <div key={text} className="info-row">
                <Icon className="mt-1 shrink-0 text-teal-700" />
                <p className="font-semibold leading-7 text-slate-700">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <form className="reveal soft-card p-5 sm:p-8" onSubmit={handleSubmit} noValidate>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Nombre del apoderado" name="name" value={form.name} onChange={updateField} error={errors.name} required />
            <Field label="Teléfono" name="phone" type="tel" value={form.phone} onChange={updateField} error={errors.phone} required />
            <Field label="Correo" name="email" type="email" value={form.email} onChange={updateField} error={errors.email} required />
            <Field label="Edad del niño" name="childAge" value={form.childAge} onChange={updateField} error={errors.childAge} required />
            <label className="sm:col-span-2">
              <span className="form-label">Programa de interés</span>
              <select
                name="program"
                value={form.program}
                onChange={updateField}
                className="form-control"
                aria-invalid={Boolean(errors.program)}
                required
              >
                <option value="">Selecciona una opción</option>
                {programs.map((program) => (
                  <option key={program.title} value={program.title}>
                    {program.title}
                  </option>
                ))}
              </select>
              {errors.program && <ErrorText>{errors.program}</ErrorText>}
            </label>
            <label className="sm:col-span-2">
              <span className="form-label">Mensaje</span>
              <textarea
                name="message"
                value={form.message}
                onChange={updateField}
                rows="5"
                className="form-control resize-none"
                placeholder="Cuéntanos edad, horario ideal o cualquier duda."
                aria-invalid={Boolean(errors.message)}
                required
              />
              {errors.message && <ErrorText>{errors.message}</ErrorText>}
            </label>
          </div>
          {success && (
            <p className="mt-5 rounded-lg bg-mintsoft px-4 py-3 font-bold text-teal-800" role="status">
              Solicitud enviada correctamente. Puedes verla en Admin Demo.
            </p>
          )}
          <Button as="button" type="submit" className="mt-6 w-full">
            Enviar solicitud <ChevronRight size={20} />
          </Button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, value, onChange, error, type = 'text', required = false }) {
  return (
    <label>
      <span className="form-label">{label}</span>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className="form-control"
        aria-invalid={Boolean(error)}
        required={required}
      />
      {error && <ErrorText>{error}</ErrorText>}
    </label>
  );
}

function AdminPanel({ requests, setRequests }) {
  function deleteRequest(id) {
    setRequests((current) => current.filter((request) => request.id !== id));
  }

  return (
    <main className="section-pad min-h-screen pt-32">
      <div className="section-shell">
        <div className="reveal flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <SectionHeading eyebrow="Panel privado demo" title="Solicitudes recibidas" />
            <p className="mt-4 max-w-2xl leading-7 text-slate-600">
              Solicitudes guardadas en este navegador mediante localStorage para presentar el flujo comercial sin backend.
            </p>
          </div>
          <button
            onClick={() => setRequests([])}
            disabled={requests.length === 0}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-red-50 px-5 py-3 font-extrabold text-red-700 transition hover:bg-red-100 focus-ring disabled:cursor-not-allowed disabled:opacity-45"
          >
            <Trash2 size={19} /> Limpiar todo
          </button>
        </div>

        <div className="mt-10 grid gap-5">
          {requests.length === 0 ? (
            <div className="reveal soft-card p-8 text-center">
              <p className="font-display text-2xl font-black">Aún no hay solicitudes.</p>
              <p className="mt-2 text-slate-600">Vuelve al sitio, envía una consulta demo y aparecerá acá.</p>
            </div>
          ) : (
            requests.map((request) => (
              <article key={request.id} className="soft-card p-5 sm:p-6">
                <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-start">
                  <div>
                    <h2 className="font-display text-2xl font-black text-teal-800">{request.name}</h2>
                    <p className="mt-1 text-sm font-bold text-slate-500">{request.createdAt}</p>
                  </div>
                  <button
                    onClick={() => deleteRequest(request.id)}
                    className="inline-flex w-fit items-center gap-2 rounded-full bg-red-50 px-4 py-2 font-bold text-red-700 transition hover:bg-red-100 focus-ring"
                  >
                    <Trash2 size={17} /> Eliminar
                  </button>
                </div>
                <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
                  <AdminDatum label="Teléfono" value={request.phone} />
                  <AdminDatum label="Correo" value={request.email} />
                  <AdminDatum label="Programa" value={request.program} />
                  <AdminDatum label="Edad del niño" value={request.childAge} />
                </div>
                <div className="mt-4 rounded-lg bg-creamsand p-4">
                  <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-teal-700">Mensaje</p>
                  <p className="mt-2 leading-7 text-slate-700">{request.message}</p>
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </main>
  );
}

function Footer() {
  return (
    <footer className="bg-[linear-gradient(135deg,#161826_0%,#7A4A28_52%,#25355F_100%)] px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.7fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-sunsoft text-teal-800">
              <Sparkles />
            </span>
            <p className="font-display text-2xl font-black">{siteData.businessName}</p>
          </div>
          <p className="mt-4 max-w-md leading-7 text-white/72">
            Demo premium para presentar una web comercial de jardín infantil y after school en Chile.
          </p>
          <div className="mt-5 flex gap-3">
            <a className="rounded-full bg-white/10 p-3 transition hover:bg-white/20 focus-ring" href="#" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a className="rounded-full bg-white/10 p-3 transition hover:bg-white/20 focus-ring" href="#" aria-label="Facebook">
              <Facebook size={20} />
            </a>
          </div>
        </div>
        <FooterBlock title="Contacto" items={[siteData.address, siteData.phone, siteData.email]} />
        <FooterBlock title="Horarios" items={[siteData.hours, 'Visitas guiadas con agenda previa']} />
        <div>
          <h3 className="font-display text-lg font-black">Links rápidos</h3>
          <div className="mt-4 flex flex-col gap-2">
            {navLinks.slice(0, 6).map(([label, href]) => (
              <a key={label} className="text-white/72 transition hover:text-white focus-ring" href={href}>
                {label}
              </a>
            ))}
            <a className="font-bold text-sunsoft transition hover:text-white focus-ring" href="#admin-demo">
              Admin Demo
            </a>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-sm text-white/55">
        © 2026 Jardín Infantil Arcoíris Kids. Sitio demo sin backend real.
      </p>
    </footer>
  );
}

function SectionHeading({ eyebrow, title, intro, centered = false }) {
  return (
    <div className={`reveal max-w-3xl ${centered ? 'mx-auto text-center' : ''}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {intro && <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">{intro}</p>}
    </div>
  );
}

function Button({ as, href, external = false, variant = 'primary', size = 'md', className = '', children, ...props }) {
  const Component = as === 'button' ? 'button' : 'a';
  const sizes = {
    sm: 'px-5 py-3 text-sm',
    md: 'px-6 py-4',
  };
  const variants = {
    primary: 'bg-coralsoft text-white shadow-glow hover:bg-[#E94B35] hover:shadow-xl',
    secondary: 'border border-lavendersoft bg-white/90 text-ink shadow-sm hover:bg-sunsoft hover:shadow-soft',
    light: 'bg-white text-ink shadow-sm hover:bg-skysoft hover:shadow-soft',
    sun: 'bg-sunsoft text-ink shadow-sm hover:bg-[#FFD95E] hover:shadow-soft',
  };

  return (
    <Component
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-extrabold transition hover:-translate-y-1 focus-ring ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

function IconBadge({ icon: Icon, tone = 'mint', compact = false }) {
  const tones = {
    mint: 'bg-mintsoft text-ink',
    sun: 'bg-sunsoft text-brownsoft',
  };
  return (
    <span className={`flex shrink-0 items-center justify-center rounded-lg ${compact ? 'h-12 w-12' : 'h-14 w-14'} ${tones[tone]}`}>
      <Icon size={compact ? 23 : 27} />
    </span>
  );
}

function AdminDatum({ label, value }) {
  return (
    <div className="rounded-lg bg-white p-4 shadow-sm">
      <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-teal-700">{label}</p>
      <p className="mt-1 break-words font-bold text-slate-700">{value}</p>
    </div>
  );
}

function FooterBlock({ title, items }) {
  return (
    <div>
      <h3 className="font-display text-lg font-black">{title}</h3>
      <div className="mt-4 space-y-3">
        {items.map((item) => (
          <p key={item} className="leading-7 text-white/72">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}

function ErrorText({ children }) {
  return <p className="mt-1 text-sm font-semibold text-red-600">{children}</p>;
}

export default App;
