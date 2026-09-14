import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Gamepad2, Menu, ShieldCheck, Zap } from "lucide-react";
import gameCyber from "@/assets/game-cyber.jpg";
import gameFantasy from "@/assets/game-fantasy.jpg";
import gameTactical from "@/assets/game-tactical.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "IDZEE — ไอดีเกมราคาดี พร้อมเล่นทันที" },
      {
        name: "description",
        content: "เลือกซื้อไอดีเกมราคาคุ้ม ตรวจสอบแล้ว ส่งมอบไว พร้อมเริ่มเล่นได้ทันที",
      },
      { property: "og:title", content: "IDZEE — ไอดีเกมราคาดี พร้อมเล่นทันที" },
      {
        property: "og:description",
        content: "ตลาดไอดีเกมที่คัดมาแล้ว ราคาตรงไปตรงมา และพร้อมส่งมอบ",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const games = [
  { src: gameCyber, alt: "ไอดีเกมแนวไซเบอร์พังก์", label: "CYBER", tone: "cyan" },
  { src: gameFantasy, alt: "ไอดีเกมแนวแฟนตาซี", label: "FANTASY", tone: "gold" },
  { src: gameTactical, alt: "ไอดีเกมแนวแท็กติก", label: "TACTICAL", tone: "blue" },
];

function GameStack() {
  return (
    <div className="game-stage" aria-label="เกมยอดนิยมในร้าน">
      <div className="orbit orbit-one" aria-hidden="true" />
      <div className="orbit orbit-two" aria-hidden="true" />
      {games.map((game, index) => (
        <article className={`game-card game-card-${index + 1}`} key={game.label}>
          <img src={game.src} alt={game.alt} width={1024} height={768} />
          <div className="game-card-shade" />
          <span className={`game-tag game-tag-${game.tone}`}>{game.label}</span>
          <span className="game-price">เริ่ม ฿{index === 0 ? "89" : index === 1 ? "129" : "99"}</span>
        </article>
      ))}
      <div className="status-chip status-chip-top">
        <ShieldCheck size={17} aria-hidden="true" />
        <span>ตรวจสอบแล้ว</span>
      </div>
      <div className="status-chip status-chip-bottom">
        <Zap size={17} aria-hidden="true" />
        <span>รับไอดีทันที</span>
      </div>
    </div>
  );
}

function Index() {
  const scrollToGames = () => {
    document.getElementById("popular")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="IDZEE หน้าแรก">
          <span className="brand-mark"><Gamepad2 size={21} strokeWidth={2.5} /></span>
          <span>IDZEE</span>
        </a>
        <nav className="desktop-nav" aria-label="เมนูหลัก">
          <a href="#popular">ไอดีแนะนำ</a>
          <a href="#trust">ทำไมต้องเรา</a>
        </nav>
        <div className="nav-actions">
          <button className="login-button" type="button">เข้าสู่ระบบ</button>
          <button className="menu-button" type="button" aria-label="เปิดเมนู"><Menu size={24} /></button>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span className="live-dot" />ไอดีใหม่เข้าทุกวัน</div>
          <h1>ได้เกมที่ชอบ<br /><span>ในราคาที่ใช่</span></h1>
          <p>รวมไอดีเกมคัดคุณภาพ ราคาจับต้องได้<br className="desktop-break" /> เช็กแล้วทุกไอดี พร้อมเล่นได้ทันที</p>
          <button className="primary-cta" type="button" onClick={scrollToGames}>
            เลือกไอดีเกม <ArrowRight size={20} />
          </button>
          <div className="hero-proof" aria-label="จุดเด่นของร้าน">
            <span><ShieldCheck size={17} /> รับประกันทุกไอดี</span>
            <span>•</span>
            <span>ส่งมอบไว 24 ชม.</span>
          </div>
        </div>
        <GameStack />
      </section>

      <section className="popular-strip" id="popular">
        <p>เกมยอดนิยม</p>
        <div className="ticker" aria-label="รายชื่อหมวดเกม">
          <span>OPEN WORLD</span><i />
          <span>FPS</span><i />
          <span>MOBA</span><i />
          <span>RPG</span><i />
          <span>SPORT</span>
        </div>
      </section>

      <section className="trust-band" id="trust" aria-label="บริการที่ไว้ใจได้">
        <div><strong>4.9/5</strong><span>คะแนนจากผู้ซื้อ</span></div>
        <div><strong>10K+</strong><span>ไอดีส่งมอบแล้ว</span></div>
        <div><strong>100%</strong><span>ตรวจสอบก่อนขาย</span></div>
      </section>
    </main>
  );
}