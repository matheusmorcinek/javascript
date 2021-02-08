const userLeft = false;
const userWatchingMemeVideo = true;

function watchTutorialPromise() {

    return new Promise((resolve, reject) => {

        if (userLeft) {

            reject({
                name: 'User Left',
                message: ':('
            });
        } else if (userWatchingMemeVideo) {

            reject({
                name: 'User Watching Meme video',
                message: 'User should be studying...'
            })
        } else {

            resolve('Thumbs up!!');
        }

    });
}

watchTutorialPromise().then((message) => {

    console.log(`Success: ${message}`);
}).catch((error) => {

    console.log(`${error.name} ${error.message}`);
});