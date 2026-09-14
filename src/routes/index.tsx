import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Box,
  ChevronRight,
  Gamepad2,
  History,
  Home,
  Layers3,
  LockKeyhole,
  Menu,
  MessageSquare,
  Search,
  ShieldCheck,
  UserRound,
  WalletCards,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";
import gameEgg from "@/assets/game-egg-heist.jpg";
import gameMoba from "@/assets/game-moba-arena.jpg";
import gameVoxel from "@/assets/game-voxel-world.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "IDZEE — ไอดีเกมราคาถูก พร้อมเล่นทันที" },
      { name: "description", content: "เลือกซื้อไอดี Roblox, ROV และ Minecraft ราคาคุ้ม ตรวจสอบแล้ว พร้อมส่งมอบ" },
      { property: "og:title", content: "IDZEE — ไอดีเกมราคาถูก พร้อมเล่นทันที" },
      { property: "og:description", content: "ตลาดไอดีเกมราคาคุ้ม ตรวจสอบแล้ว และพร้อมส่งมอบ" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const games = [
  { src: gameEgg, alt: "เกมผจญภัยขโมยไข่ทอง", label: "STEAL AN EGG", price: "59" },
  { src: gameMoba, alt: "เกมต่อสู้ออนไลน์ในสนามรบ", label: "ROV", price: "129" },
  { src: gameVoxel, alt: "เกมเอาชีวิตรอดโลกบล็อก", label: "MINECRAFT", price: "99" },
];

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <i /><i /><i />
    </span>
  );
}

function Sidebar({ open, onClose, onLogin }: { open: boolean; onClose: () => void; onLogin: () => void }) {
  const navItems = [
    { icon: Home, label: "หน้าแรก" },
    { icon: Box, label: "สินค้าทั้งหมด" },
    { icon: MessageSquare, label: "ติดต่อเรา" },
  ];
  const accountItems = [
    { icon: WalletCards, label: "กระเป๋าเงิน" },
    { icon: History, label: "ประวัติธุรกรรม" },
    { icon: UserRound, label: "บัญชีของฉัน" },
  ];
  return (
    <>
      <div className={`drawer-backdrop ${open ? "is-open" : ""}`} onClick={onClose} aria-hidden="true" />
      <aside className={`side-drawer ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <div className="drawer-head">
          <a className="drawer-brand" href="#top"><BrandMark /><strong>IDZEE</strong></a>
          <button className="icon-button" type="button" onClick={onClose} aria-label="ปิดเมนู"><X /></button>
        </div>
        <div className="drawer-rule" />
        <p className="drawer-label">ภาพรวม</p>
        <nav className="drawer-nav">
          {navItems.map(({ icon: Icon, label }, index) => (
            <a className={index === 0 ? "active" : ""} href={index === 0 ? "#top" : index === 1 ? "#popular" : "#contact"} key={label} onClick={onClose}>
              <Icon /><span>{label}</span>
            </a>
          ))}
        </nav>
        <div className="drawer-rule" />
        <p className="drawer-label">บัญชีผู้ใช้</p>
        <nav className="drawer-nav">
          {accountItems.map(({ icon: Icon, label }) => <button type="button" key={label} onClick={onLogin}><Icon /><span>{label}</span></button>)}
        </nav>
        <div className="drawer-login">
          <p>บัญชี</p>
          <button type="button" onClick={onLogin}>เข้าสู่ระบบ <ChevronRight /></button>
        </div>
      </aside>
    </>
  );
}

function LoginModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div className="modal-layer" role="dialog" aria-modal="true" aria-labelledby="login-title">
      <button className="modal-dismiss" type="button" onClick={onClose} aria-label="ปิดหน้าต่าง" />
      <section className="login-modal">
        <button className="modal-close icon-button" type="button" onClick={onClose} aria-label="ปิด"><X /></button>
        <BrandMark />
        <p className="modal-kicker">ยินดีต้อนรับกลับ</p>
        <h2 id="login-title">เข้าสู่ระบบ IDZEE</h2>
        <p className="modal-copy">เข้าสู่ระบบเพื่อดูไอดีที่ซื้อและประวัติรายการ</p>
        <form onSubmit={(event) => event.preventDefault()}>
          <label>อีเมล</label>
          <div className="field"><UserRound /><input type="email" placeholder="name@example.com" /></div>
          <label>รหัสผ่าน</label>
          <div className="field"><LockKeyhole /><input type="password" placeholder="••••••••" /></div>
          <button className="login-submit" type="submit">เข้าสู่ระบบ <ArrowRight /></button>
        </form>
        <button className="forgot-link" type="button">ลืมรหัสผ่าน?</button>
      </section>
    </div>
  );
}

function GameStack() {
  return (
    <div className="game-stage" aria-label="เกมยอดนิยมในร้าน">
      <div className="blue-halo" aria-hidden="true" />
      {games.map((game, index) => (
        <article className={`game-card game-card-${index + 1}`} key={game.label}>
          <img src={game.src} alt={game.alt} width={1024} height={768} />
          <div className="game-card-shade" />
          <span className="game-tag">{game.label}</span>
          <span className="game-price">เริ่ม ฿{game.price}</span>
        </article>
      ))}
      <div className="status-chip status-chip-top"><ShieldCheck /><span>ตรวจสอบแล้ว</span></div>
      <div className="status-chip status-chip-bottom"><Zap /><span>พร้อมส่งทันที</span></div>
    </div>
  );
}

function Index() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const openLogin = () => { setDrawerOpen(false); setLoginOpen(true); };

  return (
    <main className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="IDZEE หน้าแรก"><BrandMark /><span>IDZEE</span></a>
        <label className="search-box"><Search /><input type="search" placeholder="ค้นหาไอดีเกม" aria-label="ค้นหาไอดีเกม" /></label>
        <button className="login-button" type="button" onClick={openLogin}>เข้าสู่ระบบ</button>
        <button className="menu-button" type="button" onClick={() => setDrawerOpen(true)} aria-label="เปิดเมนู"><Menu /></button>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span className="live-dot" />ไอดีใหม่เข้าทุกวัน</div>
          <h1>ไอดีเกม<br /><span>ราคาดีที่สุด</span></h1>
          <p>รวมไอดี Roblox, ROV และ Minecraft<br className="desktop-break" /> คัดแล้วทุกไอดี พร้อมเล่นได้ทันที</p>
          <button className="primary-cta" type="button" onClick={() => document.getElementById("popular")?.scrollIntoView({ behavior: "smooth" })}>เลือกไอดีเกม <ArrowRight /></button>
          <div className="hero-proof"><span><ShieldCheck /> รับประกันทุกไอดี</span><i /><span>ส่งมอบไว 24 ชม.</span></div>
        </div>
        <GameStack />
      </section>

      <section className="popular-strip" id="popular">
        <p>เกมยอดนิยม</p>
        <div className="ticker"><span>STEAL AN EGG</span><i /><span>ROBLOX</span><i /><span>ROV</span><i /><span>MINECRAFT</span></div>
      </section>
      <section className="trust-band" id="contact">
        <div><strong>4.9/5</strong><span>คะแนนจากผู้ซื้อ</span></div>
        <div><strong>10K+</strong><span>ไอดีส่งมอบแล้ว</span></div>
        <div><strong>100%</strong><span>ตรวจสอบก่อนขาย</span></div>
      </section>

      <Sidebar open={drawerOpen} onClose={() => setDrawerOpen(false)} onLogin={openLogin} />
      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
    </main>
  );
}