import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

function NewsItem({ duck }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Rubber Duckies</title>
        <meta name="description" content="Rubber duckies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto">
        <div className="pt-4">
          <Link href="/">
            <a className="font-bold text-blue-600 underline">Go Duck</a>
          </Link>
        </div>
        <article className="text-center">
          <h1 className="text-4xl font-bold  my-8 text-red-600">
            Article: {duck?.title}
          </h1>
          <p>
            <strong>You are on the {router.query.slug} page</strong>
          </p>
          <p>{duck?.content}</p>
        </article>
      </main>
    </>
  );
}
export default NewsItem;

export async function getServerSideProps() {
  // https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props
  // If you export a function called getServerSideProps (Server-Side Rendering) from a page, Next.js will pre-render this page on each request using the data returned by getServerSideProps.

  return {
    props: {
      duck: {
        title: "Rubber Duckies",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium consequuntur ab magnam unde earum minima ullam. Beatae nulla perferendis saepe minima, eaque totam, consectetur aspernatur omnis dolorem quisquam ut iste."
      }
    }
  };
}
