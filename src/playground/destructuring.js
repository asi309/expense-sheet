const book = {
    title: "Ego is the enemy",
    author: "Ryan Holiday",
    publisher: {
        //name: "Penguin"
    }
};

const {name: publisherName = 'Self-Published'} = book.publisher;

console.log(publisherName);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [order, , mediumPrice] = item;

console.log(`A medium ${order} costs ${mediumPrice}`);