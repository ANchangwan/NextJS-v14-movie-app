import { API_URL } from "../(home)/page";
import styles from "../../styles/movie-video.module.css";

async function getVideos(id: string) {
  // await new Promise((res) => setTimeout(res, 3000));
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return (
    <div className={styles.container}>
      {videos.map((video) => (
        <iframe
          key={video.id}
          src={`https://www.youtube.com/embed/${video.key}`}
          title={video.name}
        />
      ))}
    </div>
  );
}
