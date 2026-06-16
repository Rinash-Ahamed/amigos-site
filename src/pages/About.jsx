import React, { useRef } from 'react'
import { useInView } from '../hooks/useInView'
import Footer from '../components/Footer'

const css = `
.about-page { padding-top: 72px; }
.about-hero {
  position: relative;
  height: 80vh;
  min-height: 500px;
  display: flex;
  align-items: center;
  overflow: hidden;
}
.about-hero__bg {
  position: absolute;
  inset: 0;
  background-image: url('https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1600&q=90&fit=crop');
  background-size: cover;
  background-position: center;
  filter: grayscale(100%) contrast(1.1);
}
.about-hero__overlay {
  position: absolute;
  inset: 0;
  background: rgba(8,8,8,0.72);
}
.about-hero__content {
  position: relative;
  z-index: 2;
  padding: 0 48px;
  max-width: 760px;
}
.about-hero__eyebrow {
  font-family: 'Space Mono', monospace;
  font-size: 9px;
  letter-spacing: 0.35em;
  color: #6b6b6b;
  text-transform: uppercase;
  margin-bottom: 20px;
}
.about-hero__title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(44px, 8vw, 100px);
  font-weight: 900;
  line-height: 0.92;
  letter-spacing: -0.03em;
  color: #f5f0eb;
  margin-bottom: 24px;
}
.about-hero__title em { font-style: italic; color: #9a9a9a; }
.about-hero__subtitle {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(18px, 2.5vw, 24px);
  font-style: italic;
  color: #9a9a9a;
  line-height: 1.6;
}
.about-body {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  padding: 100px 48px;
  border-top: 1px solid #1a1a1a;
}
.about-body__text-col {}
.about-body__section-num {
  font-family: 'Space Mono', monospace;
  font-size: 9px;
  letter-spacing: 0.3em;
  color: #3d3d3d;
  text-transform: uppercase;
  margin-bottom: 24px;
}
.about-body__heading {
  font-family: 'Playfair Display', serif;
  font-size: clamp(28px, 3.5vw, 44px);
  font-weight: 900;
  color: #f5f0eb;
  letter-spacing: -0.02em;
  line-height: 1.1;
  margin-bottom: 24px;
}
.about-body__para {
  font-family: 'Cormorant Garamond', serif;
  font-size: 18px;
  color: #9a9a9a;
  line-height: 1.8;
  margin-bottom: 20px;
}
.about-values {
  padding: 0 48px 100px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
  background: #1a1a1a;
}
.value-tile {
  background: #080808;
  padding: 48px 36px;
}
.value-tile__icon {
  font-size: 28px;
  margin-bottom: 20px;
}
.value-tile__title {
  font-family: 'Playfair Display', serif;
  font-size: 24px;
  font-weight: 700;
  color: #f5f0eb;
  margin-bottom: 12px;
  letter-spacing: -0.01em;
}
.value-tile__text {
  font-family: 'Cormorant Garamond', serif;
  font-size: 16px;
  color: #6b6b6b;
  line-height: 1.7;
}
@media (max-width: 768px) {
  .about-hero__content { padding: 0 24px; }
  .about-body { grid-template-columns: 1fr; gap: 40px; padding: 60px 24px; }
  .about-values { grid-template-columns: 1fr; padding: 0 24px 80px; }
}
`

export default function About() {
  return (
    <>
      <style>{css}</style>
      <div className="about-page">
        <div className="about-hero">
          <div className="about-hero__bg" />
          <div className="about-hero__overlay" />
          <div className="about-hero__content">
            <p className="about-hero__eyebrow">Our Story — Since 2024</p>
            <h1 className="about-hero__title">
              Fashion<br />
              <em>Reimagined.</em>
            </h1>
            <p className="about-hero__subtitle">
              One store. Fifty brands. Infinite styles.
            </p>
          </div>
        </div>

        <div className="about-body">
          <div className="about-body__text-col">
            <p className="about-body__section-num">01 / Our Mission</p>
            <h2 className="about-body__heading">Bringing the world's best fashion to your doorstep</h2>
            <p className="about-body__para">
              AMIGOS was born from a simple belief — fashion should be accessible, exciting, and personal. We are not just a store; we are a destination where style meets culture, where brands meet stories.
            </p>
            <p className="about-body__para">
              From casual basics to premium eveningwear, from kids' first outfits to workplace formals — AMIGOS is the one place that dresses every chapter of your life.
            </p>
          </div>
          <div className="about-body__text-col">
            <p className="about-body__section-num">02 / What We Do</p>
            <h2 className="about-body__heading">Curating culture, not just clothing</h2>
            <p className="about-body__para">
              We partner with over 50 premium and high-street brands, carefully selecting each collection to ensure variety, quality, and style. Our team of fashion editors curates new arrivals every season.
            </p>
            <p className="about-body__para">
              Men, Women, Kids — every age, every occasion, every mood. AMIGOS is where India comes to dress.
            </p>
          </div>
        </div>

        <div className="about-values">
          {[
            { icon: '◈', title: 'Multi-Brand', text: 'Over 50 premium brands under one roof, carefully curated for quality and style.' },
            { icon: '◉', title: 'For Everyone', text: 'Men, women, and children — fashion for every age, every occasion, every story.' },
            { icon: '◊', title: 'Made for India', text: 'Designed with the Indian consumer in mind — sizes, styles, and sensibilities that fit.' },
          ].map((v, i) => (
            <div className="value-tile" key={i}>
              <div className="value-tile__icon">{v.icon}</div>
              <div className="value-tile__title">{v.title}</div>
              <p className="value-tile__text">{v.text}</p>
            </div>
          ))}
        </div>

        <Footer />
      </div>
    </>
  )
}
