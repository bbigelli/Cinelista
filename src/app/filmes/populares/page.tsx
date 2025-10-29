import Grid from "@/app/components/Grid";
import Title from "@/app/components/Title";
import { getNowPlaying } from "@/lib/api/tmdb";

export const revalidate = 60;

const FilmesPopulares = async() => {

    const filmes = await getNowPlaying();
    return (
        <>
            <Title title="Filmes Populares" />
            <Grid filmes={filmes}/>
        </>
    );
}
export default FilmesPopulares;