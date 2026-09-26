/* The scrolling row of tagged service photos in the closing "call to action" band (Services, Managed IT, Blog, blog
   articles, Contact). Markup is the template's marquee; app.js doubles the row and animates it, so this only supplies the
   items. `set="managed"` uses the tags from the Managed IT page's own service list. Photos: public/images/services and
   public/images/about (royalty-free Unsplash, prepared as WebP; width/height are the files' real size). */

type Item = { tag: string; src: string; w: number; h: number; alt: string };

const S = (file: string) => `/images/services/${file}.webp`;

const services: Item[] = [
  { tag: "Web Development", src: S("cta-web-development"), w: 800, h: 800, alt: "A laptop showing website code" },
  { tag: "Mobile Apps", src: S("cta-mobile-apps"), w: 640, h: 365, alt: "A mobile app on a smartphone" },
  { tag: "Cloud Migration", src: S("cta-cloud-migration"), w: 720, h: 720, alt: "Server racks in a data centre" },
  { tag: "Cybersecurity", src: S("cta-security"), w: 560, h: 908, alt: "A padlock on a keyboard" },
  { tag: "Digital Marketing", src: S("cta-digital-marketing"), w: 600, h: 900, alt: "Managing social media on a laptop and phone" },
  { tag: "ERP Systems", src: S("cta-erp"), w: 800, h: 800, alt: "A business ERP dashboard on a tablet" },
  { tag: "AI Chatbots", src: S("cta-ai-chatbots"), w: 960, h: 720, alt: "A chatbot conversation on a smartphone" },
  { tag: "Process Automation", src: S("cta-automation"), w: 560, h: 908, alt: "Interlocking gears" },
  { tag: "Corporate Branding", src: S("cta-branding"), w: 600, h: 900, alt: "A designer sketching on a drawing tablet" },
  { tag: "IT Support", src: S("cta-it-support"), w: 960, h: 720, alt: "A support agent taking a call" },
  { tag: "Custom Software", src: S("cta-custom-software"), w: 800, h: 800, alt: "Code on a laptop screen" },
  { tag: "IT Infrastructure", src: S("cta-it-infrastructure"), w: 640, h: 365, alt: "Server hardware" },
  { tag: "Network Setup", src: S("cta-network"), w: 800, h: 800, alt: "Network cables in a patch panel" },
  { tag: "SEO", src: S("cta-seo"), w: 560, h: 908, alt: "Search performance analytics" },
  { tag: "Custom AI", src: S("cta-custom-ai"), w: 600, h: 900, alt: "A robot with a camera head" },
];

const managed: Item[] = [
  { tag: "Web Design & Maintenance", src: S("cta-web-development"), w: 800, h: 800, alt: "A laptop showing website code" },
  { tag: "Hosting & Server Support", src: S("cta-cloud-migration"), w: 720, h: 720, alt: "Server racks in a data centre" },
  { tag: "Security & Data Backup", src: S("cta-security"), w: 560, h: 908, alt: "A padlock on a keyboard" },
  { tag: "SEO & Analytics", src: S("cta-seo"), w: 560, h: 908, alt: "Search performance analytics" },
  { tag: "Digital Marketing", src: S("cta-digital-marketing"), w: 600, h: 900, alt: "Managing social media on a laptop and phone" },
  { tag: "PC/Server Support", src: S("cta-it-support"), w: 960, h: 720, alt: "A support agent taking a call" },
  { tag: "Email & Domain Hosting", src: S("cta-network"), w: 800, h: 800, alt: "Network cables in a patch panel" },
  { tag: "IT Consulting", src: "/images/about/mission-team.webp", w: 1600, h: 1067, alt: "A team planning together at a whiteboard" },
  { tag: "HR/Payroll Web App", src: "/images/about/hero-04-laptop.webp", w: 840, h: 1050, alt: "A business dashboard on a laptop" },
  { tag: "AI Chatbots", src: S("cta-ai-chatbots"), w: 960, h: 720, alt: "A chatbot conversation on a smartphone" },
  { tag: "Process Automation", src: S("cta-automation"), w: 560, h: 908, alt: "Interlocking gears" },
  { tag: "Custom AI & ML", src: S("cta-custom-ai"), w: 600, h: 900, alt: "A robot with a camera head" },
];

export default function ServiceMarquee({ set = "services" }: { set?: "services" | "managed" }) {
  const items = set === "managed" ? managed : services;
  return (
    <div className="marquee marquee-left--gsap">
      <div className="marquee__toleft marquee__images">
        {items.map((item) => (
          <div className="marquee__item item-imageblock" key={item.tag}>
            <div className="marquee__tags">
              <span className="tag tag-s tag-medium-opposite mxd-scramble">{item.tag}</span>
            </div>
            <div className="marquee__image">
              <img loading="lazy" decoding="async" src={item.src} width={item.w} height={item.h} alt={item.alt} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
