import Title from "@/app/components/Title";
import { getTopMovies } from "@/lib/api/tmdb";
import Grid from "@/app/components/Grid";

export const dynamic = 'force-static';

const TopFilmes = async () => {
    
    const filmes = await getTopMovies();
    return (
        <>
            <Title title="TopFilmes" />
            <Grid filmes={filmes}/>
        </>
    );
}
export default TopFilmes;