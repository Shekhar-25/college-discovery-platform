import { PrismaClient } from "@prisma/client";
import Link from "next/link";

const prisma = new PrismaClient();

export default async function CollegeDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const college = await prisma.college.findUnique({
    where: { id },
  });

  if (!college) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#0f172a",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "24px",
        }}
      >
        College Not Found
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <Link href="/colleges">
          <button
            style={{
              marginBottom: "25px",
              padding: "10px 18px",
              background: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            ← Back to Colleges
          </button>
        </Link>

        <div
          style={{
            background: "#1e293b",
            padding: "35px",
            borderRadius: "20px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
          }}
        >
          <h1
            style={{
              fontSize: "42px",
              marginBottom: "25px",
            }}
          >
            {college.name}
          </h1>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
              gap: "20px",
              marginBottom: "30px",
            }}
          >
            <div
              style={{
                background: "#334155",
                padding: "20px",
                borderRadius: "15px",
              }}
            >
              <h3>📍 Location</h3>
              <p>{college.location}</p>
            </div>

            <div
              style={{
                background: "#334155",
                padding: "20px",
                borderRadius: "15px",
              }}
            >
              <h3>⭐ Rating</h3>
              <p>{college.rating}/5</p>
            </div>

            <div
              style={{
                background: "#334155",
                padding: "20px",
                borderRadius: "15px",
              }}
            >
              <h3>💰 Fees</h3>
              <p>₹{college.fees.toLocaleString()}</p>
            </div>

            <div
              style={{
                background: "#334155",
                padding: "20px",
                borderRadius: "15px",
              }}
            >
              <h3>📈 Avg Placement</h3>
              <p>₹{college.avgPlacement.toLocaleString()}</p>
            </div>
          </div>

          <div
            style={{
              background: "#334155",
              padding: "25px",
              borderRadius: "15px",
            }}
          >
            <h2>Overview</h2>

            <p
              style={{
                color: "#cbd5e1",
                lineHeight: "1.8",
              }}
            >
              {college.overview}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}