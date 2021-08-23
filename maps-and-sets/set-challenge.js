//Letters Guessed
//You are playing a game of snowman with a friend and keep track of
//letters that have been guessed using Set().
//Follow the tasks below to test your knowledge.

//1. So far, your friend has gussed the following letters: r, s, t, l, n, e.
//Create a Set using the letters guessed thus far.

const guessedLetters = new Set();
guessedLetters.add('r');
guessedLetters.add('s');
guessedLetters.add('t');
guessedLetters.add('l');
guessedLetters.add('n');
guessedLetters.add('e');

//2. Your friend takes another guess: p. Before you add it to the set check
//to see if the Set has 'p'. If not, add it to the Set.

if (!guessedLetters.has('p')) {
    guessedLetters.add('p')
}

//3. At this point, we will assume your friend hasn't tried to guess the same letter twice.
//The size of the Set will indicate how many guesses he's made. How many guesses
//has your friend made?

console.log('guesses made: ', guessedLetters.size);

//4. Delete the letter 'l' from your Set.

guessedLetters.delete('l');

//5. What is the second value in your Set?

const values = guessedLetters.values();
values.next();
console.log('second value', values.next().value);

//6. What is the first entry in your Set?

const entries = guessedLetters.entries();
console.log('first entry: ', entries.next().value);

//7. For each entry in your Set, log out whether the guess was a consonant or a vowel.
//This one is a little challenging!
const vowels = ["a", "e", "i", "o", "u"];

const vowelsSet = new Set(vowels);
guessedLetters.forEach(value => {
    vowelsSet.has(value) ? console.log('vowel: ', value) : console.log('consonant: ', value);
});

//8. Clear your Set!
guessedLetters.clear();
console.log('Did my set clear?', guessedLetters.size);