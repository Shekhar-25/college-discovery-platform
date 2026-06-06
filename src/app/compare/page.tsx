import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function ComparePage({
  searchParams,
}: {
  searchParams: Promise<{ college1?: string; college2?: string }>;
}) {
  const params = await searchParams;

  const colleges = await prisma.college.findMany();

  const college1 = params.college1
    ? await prisma.college.findUnique({
        where: { id: params.college1 },
      })
    : null;

  const college2 = params.college2
    ? await prisma.college.findUnique({
        where: { id: params.college2 },
      })
    : null;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>🏆 Compare Colleges</h1>

      <form method="GET" style={{ marginBottom: "30px" }}>
        <div style={{ marginBottom: "10px" }}>
          <label>College 1: </label>

          <select name="college1" defaultValue={params.college1 || ""}>
            <option value="">Select College</option>

            {colleges.map((college) => (
              <option key={college.id} value={college.id}>
                {college.name}
              </option>
            ))}
          </select>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>College 2: </label>

          <select name="college2" defaultValue={params.college2 || ""}>
            <option value="">Select College</option>

            {colleges.map((college) => (
              <option key={college.id} value={college.id}>
                {college.name}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          style={{
            padding: "8px 15px",
            background: "black",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Compare
        </button>
      </form>

      {college1 && college2 && (
        <table
          border={1}
          cellPadding={10}
          style={{
            borderCollapse: "collapse",
            width: "100%",
          }}
        >
          <thead>
            <tr>
              <th>Feature</th>
              <th>{college1.name}</th>
              <th>{college2.name}</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Location</td>
              <td>{college1.location}</td>
              <td>{college2.location}</td>
            </tr>

            <tr>
              <td>Fees</td>
              <td>₹{college1.fees.toLocaleString()}</td>
              <td>₹{college2.fees.toLocaleString()}</td>
            </tr>

            <tr>
              <td>Rating</td>
              <td>{college1.rating}</td>
              <td>{college2.rating}</td>
            </tr>

            <tr>
              <td>Average Placement</td>
              <td>₹{college1.avgPlacement.toLocaleString()}</td>
              <td>₹{college2.avgPlacement.toLocaleString()}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}