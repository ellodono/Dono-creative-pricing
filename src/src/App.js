import { useState } from "react";

const categories = [
  {
    id: "shortform", label: "Short Form", icon: "⚡",
    description: "Reels, TikToks, YouTube Shorts — under 3 min",
    tiers: [
      { name: "Basic", myRate: "$800", myRange: "$600 – $1,000", color: "#FF6B35",
        deliverables: ["1 edited video (up to 60 sec)", "Optimized for 1 platform", "Licensed background music", "Subtitles / captions", "1 revision round", "Delivered in 3 days", "MP4 export (1080p)"] },
      { name: "Standard", myRate: "$2,000", myRange: "$1,500 – $2,500", color: "#FF8C5A", popular: true,
        deliverables: ["1 edited video (up to 90 sec)", "2 platform-optimized exports", "Gimbal + lighting on set", "Color grade + sound design", "Animated text / motion graphics", "Licensed music + voiceover mix", "2 revision rounds", "Delivered in 48 hrs", "MP4 + RAW footage included"] },
      { name: "Premium", myRate: "$5,000+", myRange: "$4,000 – $7,000+", color: "#FFB085",
        deliverables: ["1–3 edited videos (up to 2 min each)", "All-platform exports (16:9, 9:16, 1:1)", "Cinema camera + full production kit", "Drone / aerial footage", "VFX + advanced motion graphics", "Full color grade + Dolby sound mix", "Script / creative direction", "Rush delivery available", "Unlimited revisions", "Full RAW footage archive", "Usage rights included"] },
    ],
  },
  {
    id: "longform", label: "Long Form", icon: "🎬",
    description: "YouTube, brand films, event coverage — 5 to 30+ min",
    tiers: [
      { name: "Basic", myRate: "$2,500", myRange: "$2,000 – $3,000", color: "#4ECDC4",
        deliverables: ["1 edited video (5–15 min)", "Single camera setup", "Interview + b-roll coverage", "Titles, lower thirds, end card", "Licensed music", "1 revision round", "Delivered in 5 days", "1080p MP4 export"] },
      { name: "Standard", myRate: "$6,000", myRange: "$5,000 – $8,000", color: "#6EDDD5", popular: true,
        deliverables: ["1 edited video (15–30 min)", "Multi-camera setup", "Professional lighting package", "Color grade + sound mix", "Animated intro / outro", "Chapter markers + timestamps", "Subtitles file (.srt)", "2 revision rounds", "Delivered in 3 days", "4K MP4 + RAW footage"] },
      { name: "Premium", myRate: "$18,000+", myRange: "$15,000 – $25,000+", color: "#90EDE8",
        deliverables: ["1 edited video (30–60+ min)", "Full production crew (DP, AC, sound)", "Cinema-grade camera package", "Multi-location shooting", "Original music licensing", "Full color grade (DaVinci Resolve)", "Dolby-certified audio mix", "Motion graphic package", "Unlimited revisions", "Priority delivery", "Full RAW footage archive", "Broadcast-ready deliverables"] },
    ],
  },
  {
    id: "documentary", label: "Documentary", icon: "🎞",
    description: "Brand stories, mini-docs, short docs — 10 to 60+ min",
    tiers: [
      { name: "Basic", myRate: "$4,000", myRange: "$3,000 – $5,000", color: "#A78BFA",
        deliverables: ["Mini-doc up to 15 min", "1–2 interview subjects", "2 shoot days", "Narration + title cards", "Licensed music bed", "1 revision round", "2-week turnaround", "1080p MP4 export"] },
      { name: "Standard", myRate: "$12,000", myRange: "$10,000 – $15,000", color: "#C4B5FD", popular: true,
        deliverables: ["Documentary up to 30 min", "3–5 interview subjects", "3–5 shoot days", "Multi-location coverage", "Pro color grade + sound design", "Custom lower thirds + titles", "Archival / B-roll research", "2 revision rounds", "1-week turnaround", "4K export + RAW archive"] },
      { name: "Premium", myRate: "$40,000+", myRange: "$30,000 – $80,000+", color: "#DDD6FE",
        deliverables: ["Full documentary 45–90 min", "Unlimited subjects & locations", "Full production team", "Travel & location fees included", "Original score composed", "Festival delivery specs (DCP)", "Trailer + short-form cut included", "Unlimited revisions", "Subtitles in 2 languages", "Full RAW archive", "Broadcast + streaming rights"] },
    ],
  },
  {
    id: "musicvideo", label: "Music Video", icon: "🎵",
    description: "Official videos, performance shoots, lyric videos",
    tiers: [
      { name: "Basic", myRate: "$2,000", myRange: "$1,500 – $2,500", color: "#F472B6",
        deliverables: ["1 music video (full song length)", "1 location", "Solo shooter", "Cut-to-beat editing", "Basic color grade", "1 revision round", "3-day turnaround", "1080p MP4 export"] },
      { name: "Standard", myRate: "$7,000", myRange: "$5,000 – $10,000", color: "#F9A8D4", popular: true,
        deliverables: ["1 music video (full song)", "Concept development + storyboard", "2–3 locations", "Lighting & art direction", "Cinematic color grade", "VFX / transitions", "Vertical cut for socials", "2 revision rounds", "5-day turnaround", "4K MP4 + RAW footage"] },
      { name: "Premium", myRate: "$25,000+", myRange: "$20,000 – $50,000+", color: "#FBCFE8",
        deliverables: ["1 music video (full song)", "Full creative direction + treatment", "Multiple scenes / set designs", "Full production crew", "Drone + specialty camera rigs", "VFX + compositing", "Director + DP collaboration", "Wardrobe + styling", "Vertical + horizontal exports", "BTS content included", "Unlimited revisions", "Priority delivery", "Full RAW archive"] },
    ],
  },
  {
    id: "smallbiz", label: "Small Business", icon: "🏪",
    description: "Promos, testimonials, product showcases, social ads",
    tiers: [
      { name: "Basic", myRate: "$1,200", myRange: "$1,000 – $1,500", color: "#34D399",
        deliverables: ["1 promo video (60–90 sec)", "1 location (your space)", "2–3 hr shoot", "Logo animation", "Licensed music", "Subtitles", "1 revision round", "3-day turnaround", "1080p MP4 export"] },
      { name: "Standard", myRate: "$3,500", myRange: "$2,500 – $5,000", color: "#6EE7B7", popular: true,
        deliverables: ["2 videos (hero video + short ad cut)", "Half or full shoot day", "Lighting + gimbal", "Color grade + sound design", "Animated graphics + CTA", "Vertical + horizontal exports", "Subtitles + captions", "2 revision rounds", "2-day turnaround", "4K MP4 + RAW footage"] },
      { name: "Premium", myRate: "$10,000+", myRange: "$8,000 – $15,000+", color: "#A7F3D0",
        deliverables: ["3–5 video package (hero + ads + social)", "Multi-day production", "Drone + multi-camera", "Talent casting + styling", "Full color grade + Dolby audio", "All-platform exports", "Ad-ready deliverables (Meta, YouTube)", "Unlimited revisions", "Rush available", "Full RAW archive", "Commercial usage rights"] },
    ],
  },
  {
    id: "largebiz", label: "Large Business", icon: "🏢",
    description: "Brand campaigns, TV commercials, corporate productions",
    tiers: [
      { name: "Basic", myRate: "$8,000", myRange: "$6,000 – $10,000", color: "#FCD34D",
        deliverables: ["1 brand video (60–120 sec)", "1-day shoot", "Small crew (2–3 people)", "Polished edit + branding", "Logo animation + CTA", "2 platform exports", "2 revision rounds", "5-day turnaround", "4K MP4 export"] },
      { name: "Standard", myRate: "$25,000", myRange: "$20,000 – $35,000", color: "#FDE68A", popular: true,
        deliverables: ["2–3 videos (hero + social cuts)", "Multi-day shoot", "Full production crew", "Location scouting", "Talent + wardrobe coordination", "Color mastering + sound mix", "All-platform exports", "Subtitle files", "3 revision rounds", "Priority turnaround", "4K + RAW archive", "Broadcast-ready file specs"] },
      { name: "Premium", myRate: "$75,000+", myRange: "$50,000 – $150,000+", color: "#FEF3C7",
        deliverables: ["Full campaign (5–10+ videos)", "Agency-level production", "Creative direction + scripting", "Talent casting + management", "Multi-location + travel included", "Drone + specialty rigs", "Broadcast-certified deliverables", "Dolby Vision + Atmos audio", "Dedicated project manager", "All-platform + TV exports", "Unlimited revisions", "Full RAW archive", "Full commercial usage rights", "Performance reporting package"] },
    ],
  },
];

const addons = [
  { label: "Drone / Aerial Footage", price: "+$500 – $1,200" },
  { label: "Rush Delivery (under 48hr)", price: "+35–50%" },
  { label: "Commercial Usage License", price: "+50–100%" },
  { label: "Extra Revision Round", price: "+$200 – $600" },
  { label: "Script / Creative Direction", price: "+$300 – $1,000" },
  { label: "Hair, Makeup & Styling", price: "+$400 – $800" },
  { label: "Monthly Retainer (4–8 vids/mo)", price: "$3,000 – $8,000/mo" },
  { label: "Performance Bonus (per 1M views)", price: "+$500 – $2,000" },
];

const bookingTerms = [
  "Dono Creative rates reflect a proven track record: 2.5M+ views and 450K+ likes year to date.",
  "50% deposit required to secure your booking date. Balance due on delivery.",
  "Commercial broadcast and paid ad usage rights are negotiated separately.",
  "Rush fees apply for turnarounds under 48 hours.",
  "Travel outside 50-mile radius billed at cost + $75/hr travel time.",
  "To book or inquire: hello@donocreative.com",
];

export default function PriceGuide() {
  const [active, setActive] = useState("shortform");
  const current = categories.find((c) => c.id === active);

  return (
    <div style={{ fontFamily: "monospace", background: "#080A0F", minHeight: "100vh", color: "#E8E4D9" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=IBM+Plex+Mono:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .cat-btn { transition: all 0.15s; }
        .cat-btn:hover { opacity: 0.8; }
        .tier-card { transition: transform 0.18s, box-shadow 0.18s; }
        .tier-card:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(0,0,0,0.5); }
        .addon-row { transition: background 0.12s; }
        .addon-row:hover { background: #0C0E16 !important; }
      `}</style>

      {/* HEADER */}
      <div style={{ background: "#07080C", borderBottom: "1px solid #12141E", padding: "40px 24px 32px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(ellipse at 80% 50%, rgba(255,107,53,0.07) 0%, transparent 65%)" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(255,107,53,0.4), transparent)" }} />

        <div style={{ maxWidth: 920, margin: "0 auto", position: "relative" }}>
          {/* Brand */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <div style={{ width: 38, height: 38, borderRadius: 6, background: "#FF6B35", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Bebas Neue', sans-serif", fontSize: 18, color: "#07080C", letterSpacing: "0.04em", flexShrink: 0 }}>
              DC
            </div>
            <div>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 20, color: "#FFFFFF", letterSpacing: "0.12em", lineHeight: 1 }}>DONO CREATIVE</div>
              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: "#3A3D50", letterSpacing: "0.15em", textTransform: "uppercase", marginTop: 2 }}>donocreative.com · @ellodono</div>
            </div>
          </div>

          {/* Stats badge */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#FF6B35" }} />
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, letterSpacing: "0.24em", color: "#FF6B35", textTransform: "uppercase" }}>
              2.5M+ Views · 450K+ Likes YTD · Proven Performance
            </span>
          </div>

          <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(42px, 8vw, 76px)", letterSpacing: "0.05em", lineHeight: 0.92, color: "#FFFFFF" }}>
            VIDEOGRAPHY<br />
            <span style={{ WebkitTextStroke: "1.5px #FF6B35", color: "transparent" }}>RATE GUIDE</span>
          </h1>
          <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: "#3A3D50", letterSpacing: "0.06em", textTransform: "uppercase", marginTop: 16 }}>
            Professional video production — 2026
          </p>
        </div>
      </div>

      {/* BODY */}
      <div style={{ maxWidth: 920, margin: "0 auto", padding: "28px 16px 80px" }}>

        {/* Category Nav */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 32 }}>
          {categories.map((cat) => (
            <button key={cat.id} className="cat-btn" onClick={() => setActive(cat.id)} style={{
              background: active === cat.id ? "#FF6B35" : "#0D0F18",
              color: active === cat.id ? "#07080C" : "#5A5D70",
              border: "1px solid", borderColor: active === cat.id ? "#FF6B35" : "#12141E",
              borderRadius: 2, padding: "7px 14px", cursor: "pointer",
              fontSize: 10, fontFamily: "'IBM Plex Mono', monospace",
              letterSpacing: "0.1em", fontWeight: active === cat.id ? "600" : "400",
              textTransform: "uppercase",
            }}>
              {cat.icon} {cat.label}
            </button>
          ))}
        </div>

        {/* Section Header */}
        <div style={{ marginBottom: 24 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 5 }}>
            <div style={{ width: 24, height: 2, background: "#FF6B35" }} />
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 30, letterSpacing: "0.06em", color: "#FFFFFF" }}>{current.label}</h2>
          </div>
          <p style={{ fontFamily: "'IBM Plex Mono', monospace", marginLeft: 36, color: "#3A3D50", fontSize: 10, letterSpacing: "0.06em", textTransform: "uppercase" }}>{current.description}</p>
        </div>

        {/* Tier Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(255px, 1fr))", gap: 12, marginBottom: 48 }}>
          {current.tiers.map((tier, i) => (
            <div key={tier.name} className="tier-card" style={{
              background: tier.popular ? "#0D0F18" : "#09090F",
              border: "1px solid", borderColor: tier.popular ? tier.color + "44" : "#12141E",
              borderRadius: 6, padding: "26px 20px 22px", position: "relative", display: "flex", flexDirection: "column",
            }}>
              {tier.popular && <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, transparent, ${tier.color}, transparent)`, borderRadius: "6px 6px 0 0" }} />}

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, letterSpacing: "0.2em", color: tier.color, textTransform: "uppercase" }}>
                  0{i + 1} — {tier.name}
                </span>
                {tier.popular && (
                  <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 8, letterSpacing: "0.12em", color: tier.color, border: `1px solid ${tier.color}44`, background: tier.color + "11", padding: "2px 7px", borderRadius: 2, textTransform: "uppercase" }}>
                    Popular
                  </span>
                )}
              </div>

              <div style={{ marginBottom: 20 }}>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 40, color: "#FFFFFF", lineHeight: 1, letterSpacing: "0.02em" }}>{tier.myRate}</div>
                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: "#2A2D3A", marginTop: 3 }}>Range: {tier.myRange}</div>
              </div>

              <div style={{ borderTop: "1px solid #12141E", paddingTop: 16 }}>
                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 8, color: "#3A3D50", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 12 }}>Deliverables</div>
                {tier.deliverables.map((d) => (
                  <div key={d} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 8 }}>
                    <span style={{ color: tier.color, fontSize: 8, marginTop: 3, flexShrink: 0 }}>▸</span>
                    <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: "#8A8D9E", letterSpacing: "0.02em", lineHeight: 1.5 }}>{d}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Add-ons */}
        <div style={{ marginBottom: 40 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div style={{ width: 24, height: 2, background: "#FF6B35" }} />
            <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 24, letterSpacing: "0.06em", color: "#FFFFFF" }}>Add-Ons & Upgrades</h3>
          </div>
          <div style={{ border: "1px solid #12141E", borderRadius: 6, overflow: "hidden" }}>
            {addons.map((addon, i) => (
              <div key={addon.label} className="addon-row" style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                padding: "13px 20px", borderBottom: i < addons.length - 1 ? "1px solid #0C0D14" : "none",
                background: i % 2 === 0 ? "#09090F" : "#0A0B12",
              }}>
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: "#8A8D9E" }}>{addon.label}</span>
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: "#FF6B35", fontWeight: 500 }}>{addon.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div style={{ padding: "20px 24px", background: "#0D0F18", border: "1px solid #12141E", borderLeft: "3px solid #FF6B35", borderRadius: 4 }}>
          <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: "#FF6B35", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 12 }}>Booking Terms</div>
          {bookingTerms.map((note, i) => (
            <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 7 }}>
              <span style={{ color: "#FF6B35", fontSize: 8, marginTop: 3, flexShrink: 0 }}>◈</span>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: "#3A3D50", lineHeight: 1.6 }}>{note}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
