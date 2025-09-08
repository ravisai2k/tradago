// import { client } from "./services/mongodb"

import Link from "next/link";

// interface TokenResponse {
//   status: string;
//   message: string;
//   client_id: string;
//   jwtToken: string;
// }

export default async function Home() {
  // let response: TokenResponse | null = null;

  // const mongoConnect = async () => {
  //   try {
  //     await client.connect();
  //     await client.db("admin").command({ ping: 1 });
  //     console.log("Pinged your deployment. You successfully connected to MongoDB!");
  //   } finally {
  //     await client.close();
  //   }
  // }

  // try {
  //   const apiCall = await fetch("/api/test");
  //   response = await apiCall.json();
  // } catch (error) {
  //   console.error("❌ API fetch failed:", error);
  // }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Link href="/pages/main">
        Users
      </Link>
      {/* <h1 className="text-4xl font-bold">Algo Trading</h1>
      <p>{response?.jwtToken ?? "No token found"}</p>
      <button onClick={() => mongoConnect()}></button> */}
    </div>
  );
}