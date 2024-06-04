import { API_URL } from "../../../(home)/page";

async function getMovie(id: string) {
  // await new Promise((res) => setTimeout(res, 10000));
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

async function getVideos(id: string) {
  // await new Promise((res) => setTimeout(res, 10000));
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function MovieDetailPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);

  return <h1>{movie.title}</h1>;
}
