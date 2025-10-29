import Title from "@/app/components/Title";
import { getPopular } from "@/lib/api/tmdb";
import Grid from "@/app/components/Grid";

export const dynamic = 'force-dynamic';

const FilmesEmAlta = async () => {

    const filmes = await getPopular();
    return (
        <>
            <Title title="Filmes em alta" />
            <Grid filmes= {filmes} />
        </>
    );
}
export default FilmesEmAlta;