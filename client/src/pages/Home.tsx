/**
 * Indigo Saffron Archive design reminder: preserve the reference's long-form
 * festival archive rhythm, use parchment, indigo and saffron, with Fraunces
 * editorial display type and DM Sans metadata.
 */
import { FormEvent, useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  Camera,
  Check,
  ChevronRight,
  Copy,
  Heart,
  Home as HomeIcon,
  Instagram,
  Landmark,
  Mail,
  MapPin,
  Menu,
  MessageCircleHeart,
  Phone,
  Sparkles,
  Trophy,
  UsersRound,
  X,
} from "lucide-react";
import { toast } from "sonner";

const assets = {
  logo: "/manus-storage/softwarebois-mark_dbac1f76.png",
  hero: "/manus-storage/hero-ganesha_48507333.jpg",
  violetIdol: "/manus-storage/idol-violet_62b990de.jpg",
  saffronIdol: "/manus-storage/idol-saffron_3bf12cf1.jpg",
  auction: "/manus-storage/auction-celebration_76fb153f.jpg",
  group: "/manus-storage/community-group_717ee9c7.jpg",
  community: "/manus-storage/festival-community_b13efdbb.jpg",
  procession: "/manus-storage/festival-procession_e0d6d95a.jpg",
  idol: "/manus-storage/festival-idol_963d95ea.jpg",
};

const navItems = [
  ["Idols", "gallery"],
  ["Nimarjanam", "immersion"],
  ["Winners", "winners"],
  ["Laddu Auction", "auction"],
  ["The Gang", "gang"],
  ["Members", "members"],
  ["Donate", "donate"],
  ["Find Us", "find-us"],
] as const;

const archive = [
  { year: "2026", date: "14 Sep 2026", sponsor: "Idol preparations in progress", image: assets.hero, status: "Soon", disabled: true },
  { year: "2025", date: "27 Aug 2025", sponsor: "Idol hosted by Choppala Ravi", image: assets.violetIdol, status: "Album" },
  { year: "2024", date: "07 Sep 2024", sponsor: "Idol hosted by Kranti Kiran", image: assets.saffronIdol, status: "Album" },
  { year: "2023", date: "19 Sep 2023", sponsor: "Idol hosted by Annamreddi Venu", image: assets.idol, status: "Album" },
  { year: "2022", date: "31 Aug 2022", sponsor: "Idol hosted by Senior Team", image: assets.procession, status: "Album" },
  { year: "2021", date: "10 Sep 2021", sponsor: "Idol hosted by Lagudu Naveen", image: assets.community, status: "Album" },
];

const immersionAlbums = [
  { year: "2025", image: assets.violetIdol, description: "Photos and videos from the send-off." },
  { year: "2024", image: assets.saffronIdol, description: "Photos and videos from the send-off." },
  { year: "2023", image: assets.idol, description: "Photos and videos from the send-off." },
  { year: "2022", image: assets.procession, description: "165 photos from the send-off." },
];

const winners = [
  {
    year: "2025",
    rows: [["1st Prize", "Sai Ganesh", "5 kg Ganesh laddu"], ["2nd Prize", "Akhil", "4 kg Ganesh laddu"], ["3rd Prize", "Uday", "3 kg Ganesh laddu"]],
  },
  {
    year: "2024",
    rows: [["1st Prize", "Allu Shanmukh", "5 kg laddu"], ["2nd Prize", "Vinay A", "4 kg laddu"], ["3rd Prize", "Ramesh", "3 kg laddu"]],
  },
  {
    year: "2023",
    rows: [["1st Prize", "Ganesh", "3 kg Ganesh laddu"], ["2nd Prize", "Renuka", "4 kg Ganesh laddu"], ["3rd Prize", "Sai Kiran", "3 kg Ganesh laddu"]],
  },
];

const members = [
  { name: "Tarun Teja", role: "Founder", initials: "TT", hue: "#7f6fbb" },
  { name: "Pavan", role: "Treasurer", initials: "P", hue: "#c58645" },
  { name: "Akhil Hari", role: "Event Organizer", initials: "AH", hue: "#537f78" },
  { name: "Balu", role: "Creative Director", initials: "B", hue: "#9c5e6a" },
  { name: "Sravan", role: "Volunteer", initials: "S", hue: "#4063a8" },
];

function SectionHeading({ icon, eyebrow, title, description }: { icon: React.ReactNode; eyebrow: string; title: string; description: string }) {
  return (
    <div className="section-heading">
      <div className="eyebrow"><span className="section-seal">{icon}</span>{eyebrow}</div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const [openMenu, setOpenMenu] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyUpi = async () => {
    await navigator.clipboard?.writeText("softwarebois@upi");
    setCopied(true);
    toast.success("UPI ID copied to your clipboard");
    window.setTimeout(() => setCopied(false), 1800);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.currentTarget.reset();
    toast.success("Thank you — your message has been recorded.");
  };

  const handleArchiveAction = (label: string) => toast(`${label} will open shortly.`);

  return (
    <div className="archive-shell">
      <header className="site-header">
        <div className="nav-shell">
          <button className="brand" onClick={() => scrollToId("top")} aria-label="Softwarebois home">
            <span className="brand-emblem"><img src={assets.logo} alt="" /></span>
            <span className="brand-word">Softwarebois</span>
          </button>
          <nav className="desktop-nav" aria-label="Main navigation">
            {navItems.map(([label, id]) => <button key={id} onClick={() => scrollToId(id)}>{label}</button>)}
          </nav>
          <button className="follow-button" onClick={() => toast("Instagram follow link coming soon.")}><Instagram size={15} /> Follow</button>
          <button className="menu-button" onClick={() => setOpenMenu(!openMenu)} aria-label="Toggle navigation menu">{openMenu ? <X /> : <Menu />}</button>
        </div>
        {openMenu && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {navItems.map(([label, id]) => (
              <button key={id} onClick={() => { scrollToId(id); setOpenMenu(false); }}>{label}<ChevronRight size={16} /></button>
            ))}
          </nav>
        )}
      </header>

      <main id="top">
        <section className="hero" style={{ backgroundImage: `url(${assets.hero})` }}>
          <div className="hero-overlay" />
          <div className="hero-content">
            <div className="hero-kicker"><span className="mini-logo"><img src={assets.logo} alt="" /></span><div><strong>RAMPURAM, PENDURTHI, 531173</strong><span>Ganesh Chaturthi community archive</span></div></div>
            <h1>Softwarebois</h1>
            <p>A youth group from Rampuram village celebrating Ganesh Chaturthi every year with idols, immersion, lucky draws, laddu auctions, and community memories.</p>
            <div className="hero-actions">
              <button className="button primary" onClick={() => scrollToId("gallery")}><Camera size={16} /> View Gallery</button>
              <button className="button light" onClick={() => scrollToId("donate")}><Heart size={16} /> Support Next Year</button>
            </div>
            <div className="countdown-wrap">
              <div className="countdown-title">Aagaman <em>Loading</em>........</div>
              <div className="countdown">
                {[["23", "Days"], ["17", "Hours"], ["54", "Minutes"], ["02", "Seconds"]].map(([value, label]) => <div className="count-card" key={label}><b>{value}</b><span>{label}</span></div>)}
              </div>
            </div>
          </div>
        </section>

        <section className="event-ribbon" aria-label="Community details">
          <span><CalendarDays size={15} /> Ganesh Chaturthi 2026</span><span><UsersRound size={15} /> Rampuram youth group</span><span><Landmark size={15} /> Donations through UPI</span>
        </section>

        <section className="chapter" id="gallery">
          <div className="wide-container">
            <SectionHeading icon={<Camera size={14} />} eyebrow="Gallery" title="Our idols, year by year" description="A living archive of the Ganesh idols welcomed home by Softwarebois, with sponsor notes and albums collected in one place." />
            <div className="archive-grid">
              {archive.map((card) => (
                <article className={`archive-card ${card.year === "2025" ? "featured-record" : ""}`} key={card.year}>
                  <img src={card.image} alt={`${card.year} Ganesh Chaturthi archive`} />
                  <div className="archive-copy">
                    <div className="card-topline"><h3>{card.year}</h3><span>{card.status}</span></div>
                    <p className="small-line">{card.date}</p><p className="small-line">{card.sponsor}</p>
                    <button className="archive-action" disabled={card.disabled} onClick={() => handleArchiveAction(`${card.year} gallery`)}>{card.disabled ? "Preparing this chapter" : `Open ${card.year} memories`}</button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="chapter divider" id="immersion">
          <div className="wide-container">
            <SectionHeading icon={<Sparkles size={14} />} eyebrow="Immersion" title="Nimarjanam memories" description="The final send-off each year, with colors, water, drums, and the walk that closes the celebration." />
            <div className="immersion-grid">
              {immersionAlbums.map((album) => <article className="immersion-card" key={album.year}><img src={album.image} alt={`${album.year} immersion memories`} /><div><div className="card-topline"><h3>{album.year}</h3><span>Album</span></div><p className="small-line">Immersion album</p><p>{album.description}</p><button className="archive-action" onClick={() => handleArchiveAction(`${album.year} immersion album`)}>Open the {album.year} send-off</button></div></article>)}
            </div>
          </div>
        </section>

        <section className="chapter divider" id="winners">
          <div className="wide-container">
            <SectionHeading icon={<Trophy size={14} />} eyebrow="Lucky draw" title="Winners each year" description="Names pulled from the box, prizes handed over, and cheers earned fair and square." />
            <div className="winners-grid">
              {winners.map((table) => <article className="winner-card" key={table.year}><div className="winner-title"><Trophy size={15} /> Lucky Draw Winners, {table.year}</div><div className="winner-table"><div className="winner-row winner-head"><span>Prize</span><span>Winner</span><span>Prize item</span></div>{table.rows.map((row) => <div className="winner-row" key={row[0]}><strong>{row[0]}</strong><span>{row[1]}</span><span>{row[2]}</span></div>)}</div></article>)}
            </div>
          </div>
        </section>

        <section className="chapter divider" id="auction">
          <div className="wide-container">
            <SectionHeading icon={<Landmark size={14} />} eyebrow="Auction" title="Laddu Auction" description="The first laddu auction is highlighted as its own story, with the winning bid and winner details easy to scan." />
            <div className="auction-layout"><img src={assets.auction} alt="Community members celebrating the laddu auction" /><div className="auction-summary"><span className="gold-label">2025</span><h3>Rs. 16,000</h3><h4>Won by Kiran and Sravan</h4><p>The auction contribution helps carry the celebration forward into next year, supporting setup, decorations, prizes, and prasadam.</p></div></div>
          </div>
        </section>

        <section className="chapter divider" id="gang">
          <div className="wide-container">
            <SectionHeading icon={<UsersRound size={14} />} eyebrow="The gang" title="Softwarebois, together" description="The friends and volunteers who show up every year and make the celebration feel like home." />
            <figure className="group-photo"><img src={assets.group} alt="Softwarebois community volunteers together" /><figcaption>One pandal, many hands, and a shared reason to return every year.</figcaption></figure>
          </div>
        </section>

        <section className="chapter divider" id="members">
          <div className="wide-container">
            <SectionHeading icon={<UsersRound size={14} />} eyebrow="Softwarebois" title="The hands behind the pandal" description="The people who arrange the lights, remember the small details, and return every year to bring our Ganesh Chaturthi home." />
            <div className="member-strip" role="list">{members.map((member, index) => <article key={member.name} className="member-card" role="listitem"><span className="member-folio">Member / 0{index + 1}</span><div className="member-avatar" style={{ background: member.hue }}>{member.initials}</div><h3>{member.name}</h3><p>{member.role}</p></article>)}</div>
            <div className="member-footer"><div className="scroll-indicator"><span /></div><button className="button primary compact" onClick={() => toast("The full member list will be added soon.")}>Meet every volunteer</button></div>
          </div>
        </section>

        <section className="chapter divider" id="donate">
          <div className="wide-container">
            <SectionHeading icon={<Heart size={14} />} eyebrow="Support" title="Chip in for next year" description="Contributions support the pandal, decorations, prasadam, sound system, idol, and lucky draw gifts." />
            <div className="support-layout">
              <div className="qr-card" aria-label="QR code placeholder"><div className="qr-folio">RAMPURAM LEDGER / 2026</div><div className="qr-grid"><div className="qr-center">₹</div></div><span>Scan to add your share through UPI</span></div>
              <div className="support-card"><div className="upi-apps"><span>PhonePe</span><span>Google Pay</span><span>Paytm</span><span>BHIM</span></div><h3>Keep the lights on next year</h3><p>Scan the QR code or use the UPI ID below from any UPI app.</p><div className="upi-id"><div><span>UPI ID</span><b>softwarebois@upi</b></div><button onClick={copyUpi}>{copied ? <Check size={15} /> : <Copy size={15} />}{copied ? "Copied" : "Copy"}</button></div><button className="button primary compact" onClick={() => toast("Opening your preferred UPI app is not available in this preview.")}><Heart size={14} /> Add your share via UPI</button><div className="support-needs"><span>⌂ Ganesh Idol</span><span>▦ Pandal</span><span>◇ Decorations</span><span>◌ Sound System</span><span>♡ Prasadam</span><span>▥ Lucky Draw Gifts</span></div></div>
            </div>
          </div>
        </section>

        <section className="chapter divider" id="find-us">
          <div className="wide-container">
            <SectionHeading icon={<MapPin size={14} />} eyebrow="Find us" title="The way back to Rampuram" description="Visit the pandal in Rampuram, or find a familiar Softwarebois voice for celebration updates and contributions." />
            <div className="contact-grid"><article className="contact-card"><div className="contact-icon"><HomeIcon size={20} /></div><h3>Softwarebois</h3><p>Rampuram Village<br />Pendurthi Mandal, Visakhapatnam<br />Andhra Pradesh, 531173</p><button className="button primary compact" onClick={() => toast("Map directions will open shortly.")}><MapPin size={14} /> Pin the pandal</button></article><article className="contact-card"><div className="contact-icon saffron"><MessageCircleHeart size={20} /></div><h3>Reach our circle</h3><a href="tel:+919059307481"><Phone size={13} /> +91 90593 07481</a><a href="tel:+919391277632"><Phone size={13} /> +91 93912 77632</a><a href="tel:+917386616435"><Phone size={13} /> +91 73866 16435</a><a href="mailto:softwarebois@gmail.com"><Mail size={13} /> softwarebois@gmail.com</a></article></div>
          </div>
        </section>

        <section className="chapter divider feedback-section" id="feedback">
          <div className="wide-container">
            <SectionHeading icon={<Mail size={14} />} eyebrow="Advice / concerns" title="Leave a note in the ledger" description="Send a suggestion, concern, or idea directly to the Softwarebois team. Your email helps us return with an answer when needed." />
            <form className="feedback-form" onSubmit={handleSubmit}><label>Your email<input type="email" required placeholder="yourname@example.com" /></label><label>Your note<textarea required maxLength={2000} placeholder="What should the next celebration remember?" /></label><button className="button primary compact" type="submit">Send it to the group <ArrowRight size={14} /></button></form>
          </div>
        </section>
      </main>

      <footer><div className="wide-container footer-content"><span className="footer-identity"><img src={assets.logo} alt="" />2026 Softwarebois, Rampuram, Visakhapatnam</span><button onClick={() => toast("Instagram follow link coming soon.")}><Instagram size={15} /> @software_bois</button></div></footer>
    </div>
  );
}
