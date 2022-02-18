import Head from "next/head";

function NotFound() {
  return (
    <>
      <Head>
        <title>404 Duck not found | Rubber Duckies</title>
        <meta name="description" content="Duckify" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto">
        <h1 className="text-4xl font-bold text-center my-8 text-red-600">
          404 Duck not found
        </h1>
      </main>
    </>
  );
}
export default NotFound;
