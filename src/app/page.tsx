import Link from "next/link";

export default function HomePage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
        color: "white",
        fontFamily: "Arial, sans-serif",
        padding: "40px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "56px",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          🎓 College Discovery Platform
        </h1>

        <p
          style={{
            fontSize: "22px",
            color: "#cbd5e1",
            marginBottom: "40px",
          }}
        >
          Discover, compare and explore India's top engineering colleges
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <Link href="/colleges">
            <button
              style={{
                padding: "15px 30px",
                borderRadius: "12px",
                border: "none",
                background: "#2563eb",
                color: "white",
                fontSize: "16px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Browse Colleges
            </button>
          </Link>

          <Link href="/compare">
            <button
              style={{
                padding: "15px 30px",
                borderRadius: "12px",
                border: "none",
                background: "#16a34a",
                color: "white",
                fontSize: "16px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Compare Colleges
            </button>
          </Link>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
            marginTop: "70px",
          }}
        >
          <div
            style={{
              background: "#1e293b",
              padding: "25px",
              borderRadius: "15px",
            }}
          >
            <h2 style={{ fontSize: "40px" }}>30+</h2>
            <p>Top Engineering Colleges</p>
          </div>

          <div
            style={{
              background: "#1e293b",
              padding: "25px",
              borderRadius: "15px",
            }}
          >
            <h2 style={{ fontSize: "40px" }}>⚡</h2>
            <p>Instant Search</p>
          </div>

          <div
            style={{
              background: "#1e293b",
              padding: "25px",
              borderRadius: "15px",
            }}
          >
            <h2 style={{ fontSize: "40px" }}>📊</h2>
            <p>College Comparison</p>
          </div>

          <div
            style={{
              background: "#1e293b",
              padding: "25px",
              borderRadius: "15px",
            }}
          >
            <h2 style={{ fontSize: "40px" }}>🗄️</h2>
            <p>PostgreSQL Database</p>
          </div>
        </div>

        <div
          style={{
            marginTop: "70px",
            background: "#111827",
            padding: "30px",
            borderRadius: "20px",
            textAlign: "left",
          }}
        >
          <h2>🚀 Features</h2>

          <ul
            style={{
              lineHeight: "2",
              fontSize: "18px",
            }}
          >
            <li>✅ Search Colleges by Name</li>
            <li>✅ View Detailed College Information</li>
            <li>✅ Compare Two Colleges Side-by-Side</li>
            <li>✅ PostgreSQL Database Integration</li>
            <li>✅ Built with Next.js 16 + Prisma ORM</li>
            <li>✅ Dynamic Routing with App Router</li>
          </ul>
        </div>
      </div>
    </div>
  );
}