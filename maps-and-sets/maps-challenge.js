//Maps: Challenge

//Below is a list of Oscar-winning Best Pictures from the last several years.
// 2020 - "Parasite"
// 2019 - "Green Book"
// 2018 - "The Shape of Water"
// 2017 - "Moonlight"
// 2016 - "Spotlight"
// 2015 - "Birdman"
// 2014 - "12 Years a Slave"
// 2013 - "Argo"

//1. Create a new Map with the Best Pictures list from above.
//Make sure your keys are the year, BUT they can be any format.

const oscarBestPictures = new Map();
oscarBestPictures.set(2020, "Parasite");
oscarBestPictures.set(2019, "Green Book");
oscarBestPictures.set(2018, "The Shape of Water");
oscarBestPictures.set(2017, "Moonlight");
oscarBestPictures.set(2016, "Spotlight");
oscarBestPictures.set(2015, "Birdman");
oscarBestPictures.set(2014, "12 Years a Slave");
oscarBestPictures.set(2013, "Argo");

console.table(oscarBestPictures);

//2. What film won best picture in 2015?

console.log('Best picture of 2015: ', oscarBestPictures.get(2015));

//3. Does this list contain Best Picture from 2010? 2018?

console.log('Does this list contain Best Picture from 2010 and 2018?');
console.log('2010 - ', oscarBestPictures.has(2010));
console.log('2018 - ', oscarBestPictures.has(2018));

//4. How many films are included in this list?

console.log('Films included in the Oscar list: ', oscarBestPictures.size);

//5. What is the second key in this movies Map?

const oscarBestPicturesKeys = oscarBestPictures.keys();
oscarBestPicturesKeys.next();
console.log('What is the second key in this movies Map? ', oscarBestPicturesKeys.next().value);

//6. What is the third value in this movies Map?

console.log('What is the third value in this movies Map?');
oscarBestPictures.forEach((value, key) => {
    if (key === 2018) {
        console.log(value);
    }
});

//7. What is the first set of entries in this movies Map?

const oscarBestPicturesEntries = oscarBestPictures.entries();

console.log('What is the first set of entries in this movies Map?', oscarBestPicturesEntries.next().value);

//8. Loop over the map, and if the movie won Best Picture before 2017,
//log it in the console. Include the year and the movie.

console.log('Best Picture before 2017');
oscarBestPictures.forEach((value, key) => {
    if (key <= 2017) {
        console.log(`Picure: ${value}, year: ${key}`);
    }
});

//9. Delete the Best Picture from 2013 from your movies Map.

console.log(oscarBestPictures.delete(2013));

//10. Clear your movies Map.

console.clear();
console.log(oscarBestPictures.size);