import { ImageResponse } from "next/og";

export const alt = "RR Strength — Strength Coaching in Burgess Hill & Online";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "radial-gradient(120% 90% at 70% 15%, #2a2622 0%, #15130f 45%, #0b0a09 100%)",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 34,
            fontWeight: 700,
            letterSpacing: 2,
            color: "#f7f5f0",
          }}
        >
          <span style={{ color: "#c9452b" }}>RR</span>&nbsp;STRENGTH
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 78,
              fontWeight: 800,
              lineHeight: 1,
              textTransform: "uppercase",
              color: "#f7f5f0",
            }}
          >
            I&apos;ll get you stronger
          </div>
          <div
            style={{
              fontSize: 78,
              fontWeight: 800,
              lineHeight: 1,
              textTransform: "uppercase",
              color: "#c9452b",
            }}
          >
            — or your money back.
          </div>
          <div style={{ marginTop: 28, fontSize: 30, color: "#b5b0a6" }}>
            Strength coaching · Burgess Hill &amp; online · First session free
          </div>
        </div>
      </div>
    ),
    size
  );
}
