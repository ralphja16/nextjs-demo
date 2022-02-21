import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import swanImage from '../../public/swan.jpeg';
export default function Swan() {
  return (
    <>
      <Head>
        <title>Rubber Duckies - Swan</title>
        <meta name="description" content="Also nice swans" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto p-4 ">
        <div className="pt-4">
          <Link href="/">
            <a className="font-bold text-blue-600 underline">Go Duck</a>
          </Link>
        </div>
        <h1 className="text-6xl text-bold text-blue-900 my-8 font-sans">Image Optimization</h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-4 my-8">
          {Array(4)
            .fill(0)
            .map((a, i) => {
              return (
                <article key={i}>
                  <div className="max-w-sm mx-auto bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ">
                    <div className="relative">
                      <Image src={swanImage} alt="swan"></Image>
                    </div>
                    <div className="p-5">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Some photo {i}</h5>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Are swans better than rubber ducks?</p>
                    </div>
                  </div>
                </article>
              );
            })}
        </div>

        <h2 className="text-2xl text-bold text-blue-900 my-8">Local images</h2>

        <hr />

        <h2 className="text-2xl text-bold text-blue-900 my-8">Remote images</h2>
        <p>
          Even remote images are dynamically optimized (delivered in <code>.webp</code> format). .
          <br />
          You need to change your <code>.next.config.js</code> file to allow the domain.
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 my-8">
          {Array(150)
            .fill(0)
            .map((a, i) => {
              return (
                <article key={i}>
                  <div className="max-w-sm mx-auto bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ">
                    <div className="relative h-44">
                      <Image src={'https://picsum.photos/300/200?random=' + i} alt="swan" layout="fill" objectFit="cover"></Image>
                    </div>
                    <div className="p-5">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Some photo {i}</h5>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Are swans better than rubber ducks?</p>
                    </div>
                  </div>
                </article>
              );
            })}
        </div>
      </main>
    </>
  );
}
