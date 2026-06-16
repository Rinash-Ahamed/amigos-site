import React from 'react'
import Footer from '../components/Footer'

const sizeSections = [
  {
    title: 'Men',
    rows: [
      ['S', '36', '30', '38'],
      ['M', '38', '32', '40'],
      ['L', '40', '34', '42'],
      ['XL', '42', '36', '44'],
    ],
  },
  {
    title: 'Women',
    rows: [
      ['S', '34', '28', '36'],
      ['M', '36', '30', '38'],
      ['L', '38', '32', '40'],
      ['XL', '40', '34', '42'],
    ],
  },
  {
    title: 'Kids',
    rows: [
      ['2-3Y', '21', '20', '22'],
      ['4-5Y', '23', '21', '24'],
      ['6-7Y', '25', '22', '26'],
      ['8-9Y', '27', '23', '28'],
    ],
  },
]

const css = `
.size-page { padding-top: 72px; min-height: 100vh; }
.size-hero {
  padding: 120px 48px 64px;
  border-bottom: 1px solid #1a1a1a;
}
.size-hero__eyebrow {
  font-family: 'Space Mono', monospace;
  font-size: 9px;
  letter-spacing: 0.35em;
  color: #6b6b6b;
  text-transform: uppercase;
  margin-bottom: 18px;
}
.size-hero__title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(44px, 8vw, 96px);
  font-weight: 900;
  line-height: 0.95;
  color: #f5f0eb;
  letter-spacing: -0.03em;
}
.size-hero__title em { color: #6b6b6b; font-style: italic; }
.size-content {
  padding: 64px 48px 100px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
  background: #1a1a1a;
}
.size-panel {
  background: #080808;
  padding: 36px;
}
.size-panel__title {
  font-family: 'Playfair Display', serif;
  font-size: 32px;
  color: #f5f0eb;
  margin-bottom: 24px;
}
.size-table {
  width: 100%;
  border-collapse: collapse;
}
.size-table th,
.size-table td {
  border-bottom: 1px solid #1a1a1a;
  padding: 12px 0;
  text-align: left;
}
.size-table th {
  font-family: 'Space Mono', monospace;
  font-size: 9px;
  letter-spacing: 0.18em;
  color: #6b6b6b;
  text-transform: uppercase;
}
.size-table td {
  font-family: 'Cormorant Garamond', serif;
  font-size: 18px;
  color: #c4c4c4;
}
.size-note {
  padding: 0 48px 80px;
  font-family: 'Cormorant Garamond', serif;
  font-size: 18px;
  line-height: 1.7;
  color: #9a9a9a;
  max-width: 780px;
}
@media (max-width: 1024px) {
  .size-content { grid-template-columns: 1fr; }
}
@media (max-width: 768px) {
  .size-hero { padding: 96px 24px 48px; }
  .size-content { padding: 40px 24px 72px; }
  .size-panel { padding: 28px; }
  .size-note { padding: 0 24px 64px; }
}
`

export default function SizeGuide() {
  return (
    <>
      <style>{css}</style>
      <div className="size-page">
        <section className="size-hero">
          <p className="size-hero__eyebrow">Fit Reference</p>
          <h1 className="size-hero__title">Size<br /><em>Guide.</em></h1>
        </section>

        <section className="size-content">
          {sizeSections.map((section) => (
            <div className="size-panel" key={section.title}>
              <h2 className="size-panel__title">{section.title}</h2>
              <table className="size-table">
                <thead>
                  <tr>
                    <th>Size</th>
                    <th>Chest</th>
                    <th>Waist</th>
                    <th>Hip</th>
                  </tr>
                </thead>
                <tbody>
                  {section.rows.map((row) => (
                    <tr key={row[0]}>
                      {row.map((cell) => <td key={cell}>{cell}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </section>

        <p className="size-note">
          Measurements are in inches and intended as a general guide. For tailored fits, compare with a garment that already fits well.
        </p>

        <Footer />
      </div>
    </>
  )
}
