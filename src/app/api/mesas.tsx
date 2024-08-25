export async function getServerSideProps() {
  const res = await fetch("http://localhost:5000/api/mesas");
  const data = await res.json();
  return { props: { mesas: data.mesas } };
}
