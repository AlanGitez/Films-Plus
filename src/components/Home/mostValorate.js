export const mostValorate = (movies, numberOfMovies) => {
    const mutableMovies = [...movies]
    const sortedMovies = mutableMovies?.sort((a, b) => a.vote_average - b.vote_average);

    if(numberOfMovies > sortedMovies.length) return sortedMovies;
    else return sortedMovies.splice(0, numberOfMovies);
};