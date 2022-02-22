// import useSWR from 'swr';

// const fetcher = async (url) => {
//   const res = await fetch(url);
//   const data = await res.json();

//   if (res.status !== 200) {
//     throw new Error(data.message);
//   }
//   return data;
// };

export default function Users({ data }) {
  // const { data, error } = useSWR('/api/users', fetcher);

  // if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5">
        {data.map((user) => (
          <div key={user.id} className="min-w-full text-center mx-auto bg-white rounded-lg border border-gray-200 shadow-md ">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              {user.first_name} {user.last_name}
            </h5>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // TODO: do not call api routes in this function :) https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props#getserversideprops-or-api-routes
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/api/users`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
