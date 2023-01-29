// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let directorNames = moviesArray.map((item) => { 
        return item.director
    })
    return directorNames
};

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (moviesArray.length === 0) return 0;
    
        let getDirector = moviesArray.filter((item) => {
            return item.director == "Steven Spielberg"
        })
        let getGenero = getDirector.filter((item) =>{
            return item.genre.includes('Drama') == true
        })
    
    return getGenero.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) return 0
    let suma = moviesArray.reduce((acc, movie) => {
        if(!movie.score) return acc
        else return acc + movie.score;
    },0);
    let avg = suma / moviesArray.length;
    return Number(avg.toFixed(2));
    
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if (moviesArray.length === 0) return 0;
    let newArrOfDrama = [];
    let allScores = 0;
    if (typeof moviesArray == "object") moviesArray.forEach(movies => {
        movies.genre.forEach(estilos => {
            //if (estilos === "Drama") newArrOfDrama.push(movies);
            if (estilos !== "Drama") return 0
            else newArrOfDrama.push(movies)
        })
    })
    newArrOfDrama.forEach(movies => { 
        allScores += movies.score;
    })
    let promedio = Number((allScores / newArrOfDrama.length).toFixed(2));
    return promedio
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    function orderPor(objetos, propiedades, modosOrden) {
        return [...objetos].sort((a, b) => propiedades.reduce((acumulador, p, i) => {
            if (acumulador === 0) {
                let [m, n] = modosOrden && modosOrden[i] == 'DESCENDENTE' ? [b[p], a[p]] : [a[p], b[p]];
    
                acumulador = m > n ? 1 : m < n ? - 1 : 0;
            }
            console.log(acumulador)
            return acumulador;
        }, 0))
    }
    let resultado = orderPor(movies, ["year"], ['ASCENDENTE']);
    
    let orderAsc = [];
    resultado.forEach(result => {
        orderAsc.push(result.year)
    })
    return orderAsc;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let moviesCopie = Array.from(moviesArray);

    moviesCopie.sort((a,b) => {
        return a.title.localeCompare(b.title);
    })

    let moviesCopy20 = moviesCopie.slice(0,20);

    return moviesCopy20.map((movie) => movie.title)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    
}
