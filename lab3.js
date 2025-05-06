const movies = [
    {
        title: "The Matrix",
        director: "Wachowski Brothers",
        year: 1999,
        rating: 8.7,
    },
    {
        title: "Inception",
        director: "Christopher Nolan",
        year: 2010,
        rating: 8.8,
    },
    {
        title: "Interstellar",
        director: "Christopher Nolan",
        year: 2014,
        rating: 8.6,
    },
    {
        title: "The Godfather",
        director: "Francis Ford Coppola",
        year: 1972,
        rating: 9.2,
    },
    {
        title: "The Dark Knight",
        director: "Christopher Nolan",
        year: 2008,
        rating: 9.0,
    },
    { title: "Fight Club", director: "David Fincher", year: 1999, rating: 8.8 },
];

// 1. احصل على عنوان أول فيلم تم إصداره بعد عام 2000.
let firstTitle = movies.find(function (currentValue) {
    return currentValue.year > 2000;
});
console.log(firstTitle.title);




// 2. احصل على عنوان أول فيلم تقييمه أعلى من 9.
let highRatingMovie = movies.find(function (currentValue) {
    return currentValue.rating > 9;
});
console.log(highRatingMovie.title);


// 3. احصل على الأفلام التي أخرجها "Christopher Nolan" فقط.
let nolanMovies = movies.filter(function (currentValue) {
    return currentValue.director === "Christopher Nolan";
});
console.log(nolanMovies);

// 4. احصل على الأفلام التي تم إصدارها قبل عام 2010.
let oldMovies = movies.filter(function (currentValue) {
    return currentValue.year < 2010;
});
console.log(oldMovies);

// 5. احصل على مصفوفة تحتوي فقط عناوين الأفلام.
let allTitles = movies.map(function (currentValue) {
    return currentValue.title;
});
console.log(allTitles);


// 6. احصل على متوسط تقييم جميع الأفلام.



// 7. قم بترتيب الأفلام حسب السنة (الأقدم إلى الأحدث).
let sortedYear = movies.sort(function (a, b) {
    return a.year - b.year;
});
console.log(sortedYear);



// 8. قم بترتيب الأفلام حسب التقييم (من الأعلى إلى الأقل).
let sortedRating = movies.sort(function (a, b) {
    return b.rating - a.rating;
});
console.log(sortedRating);



// 9. هل جميع الأفلام تقييمها أعلى من 8؟
let allAboveEight = movies.every(function (currentValue) {
    return currentValue.rating > 8;
});
console.log(allAboveEight);

// 10. هل يوجد فيلم واحد على الأقل تم إصداره في عام 1999؟
let seamYear = movies.some(function (currentValue) {
    return currentValue.year === 1999;
});
console.log(seamYear);

// 11. هل جميع الأفلام أخرجها نفس المخرج؟
let SameDirector = movies.every(function (currentValue) {
    return currentValue.director === movies[0].director;
});
console.log(SameDirector);

// 12. هل يوجد فيلم واحد على الأقل تقييمه أقل من 8.5؟