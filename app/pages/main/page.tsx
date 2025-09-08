import Link from "next/link";

export default async function Home() {
  let response: string = "";

  try {
    const apiCall = await fetch("http:localhost:3000" + "/api/logs",{
      headers: {'Authorization': "Test Token"}
    });
    response = await apiCall.json();
  } catch (error) {
    console.error("❌ API fetch failed:", error);
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Algo Trading</h1>
      <p>{response ? response : "No token found"}</p>
      <Link href={'/'}>Home</Link>
    </div>
  );
}