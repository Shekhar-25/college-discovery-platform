import { PrismaClient } from "@prisma/client";
import Link from "next/link";

const prisma = new PrismaClient();

export default async function CollegesPage({
  searchParams,
}: {
  searchParams: Promise<{ search?: string }>;
}) {
  const params = await searchParams;
  const search = params.search || "";

  const colleges = await prisma.college.findMany({
    where: search
      ? {
          name: {
            contains: search,
            mode: "insensitive",
          },
        }
      : {},
    orderBy: {
      rating: "desc",
    },
  });

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
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: "42px",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        >
          🎓 Explore Engineering Colleges
        </h1>

        <p
          style={{
            color: "#94a3b8",
            fontSize: "18px",
            marginBottom: "30px",
          }}
        >
          Search and discover top engineering colleges across India
        </p>

        <form
          method="GET"
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
            marginBottom: "25px",
          }}
        >
          <input
            type="text"
            name="search"
            placeholder="Search colleges..."
            defaultValue={search}
            style={{
              padding: "14px",
              width: "320px",
              borderRadius: "12px",
              border: "none",
              fontSize: "16px",
              outline: "none",
            }}
          />

          <button
            type="submit"
            style={{
              background: "#2563eb",
              color: "white",
              border: "none",
              padding: "14px 24px",
              borderRadius: "12px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            🔍 Search
          </button>
        </form>

        <div
          style={{
            marginBottom: "30px",
            fontSize: "18px",
            color: "#cbd5e1",
            fontWeight: "bold",
          }}
        >
          Total Colleges Found: {colleges.length}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "25px",
          }}
        >
          {colleges.length > 0 ? (
            colleges.map((college) => (
              <div
                key={college.id}
                style={{
                  background: "#1e293b",
                  borderRadius: "18px",
                  padding: "22px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
                }}
              >
                <h2
                  style={{
                    fontSize: "22px",
                    marginBottom: "15px",
                  }}
                >
                  {college.name}
                </h2>

                <p
                  style={{
                    color: "#cbd5e1",
                    marginBottom: "8px",
                  }}
                >
                  📍 {college.location}
                </p>

                <p
                  style={{
                    color: "#facc15",
                    marginBottom: "8px",
                  }}
                >
                  ⭐ Rating: {college.rating}
                </p>

                <p
                  style={{
                    color: "#4ade80",
                    marginBottom: "12px",
                  }}
                >
                  💰 Fees: ₹{college.fees.toLocaleString()}
                </p>

                <p
                  style={{
                    color: "#94a3b8",
                    minHeight: "60px",
                    lineHeight: "1.5",
                  }}
                >
                  {college.overview}
                </p>

                <Link href={`/colleges/${college.id}`}>
                  <button
                    style={{
                      marginTop: "18px",
                      width: "100%",
                      padding: "12px",
                      background: "#2563eb",
                      color: "white",
                      border: "none",
                      borderRadius: "10px",
                      cursor: "pointer",
                      fontWeight: "bold",
                      fontSize: "15px",
                    }}
                  >
                    View Details →
                  </button>
                </Link>
              </div>
            ))
          ) : (
            <div>
              <h2>No colleges found.</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}