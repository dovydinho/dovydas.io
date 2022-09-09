export default async function fetcher() {
  const res = await fetch(input, init);
  return res.json();
}
