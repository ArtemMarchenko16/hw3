// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (let i = 0; i < 10; i++) {
//     document.write(`
//         <h1>hello</h1>
//         <h2>okten</h2>
//         <h3>kokos</h3>
//         <h4>ananas</h4>
//         <h5>watermelon</h5>
//         <h6>laptop</h6>
//         <h7>js</h7>
//         <h8>html</h8>
//         <h9>css</h9>
//         <h10>react</h10>
//     `)
//     break;
// }

// // // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let a = 0; a < 10; a++) {
//     document.write('<div>');
//     document.write('This is div number ' + a);
//     document.write('</div>');
// }

// // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let later = 0;
// while (later < 20) {
//     document.write(`<h1>hello okten!</h1>`);
//     later++
// }

// // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let text = 0;

// while (text < 20) {
//     document.write(`<h5>`)
//     document.write(`kokos is better than banana` + text)
//     document.write(`</h5>`)
//     text++
// }

// // - Використовуючи данні з масиву, за допомоги document.write та циклу
// // побудувати структуру по шаблону
// // Масив:
// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

// // ШАБЛОН:
// //  <ul>
// //     <li>ITEM OF ARRAY</li>
// //     <!--
// //         і тд інші об'єкти масиву
// //          ...
// //          ...
// //          ...
// //     -->
// // </ul>



// for (let i = 0; listOfItems.length; i++) {
//     document.write(`<ul>ITEM OF ARRAY</ul>`)
//     document.write(`<li>${listOfItems}</li>`)
//     break;
// }


// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон

// ШАБЛОН
//  <div class="product-card">
//         <h3 class="product-title">TITLE. Price - PRICE</h3>
//         <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];


for (let product of products) {
    document.write(`
    <div>
        <h3>Title: ${product.title} Price - ${product.price}</h3>
        <img src="${product.image}" alt="imageProducts" class="product-image">
     </div>
    `)
}


// --------------------
// є масив
let users = [
    { name: 'vasya', age: 31, status: false },
    { name: 'petya', age: 30, status: true },
    { name: 'kolya', age: 29, status: true },
    { name: 'olya', age: 28, status: false },
    { name: 'max', age: 30, status: true },
    { name: 'anya', age: 31, status: false },
    { name: 'oleg', age: 28, status: false },
    { name: 'andrey', age: 29, status: true },
    { name: 'masha', age: 30, status: true },
    { name: 'olya', age: 31, status: false },
    { name: 'max', age: 31, status: true }
];
//  за допомоги циклу вивести:
//  - користувачів зі статусом true

for (let i = 0; i < users.length; i++ ) {
    if (users[i].status === true) {
        document.write(`<br>${users[i].name} - ${users[i].status}<br>`);
    };
};
//  - користувачів зі статусом false

for (let i = 0; i < users.length; i++ ) {
    if (users[i].status === false) {
        document.write(`<br> ${users[i].name} - ${users[i].status}<br>`);
    };
};

//  - користувачів які старші за 30 років

for (let i = 0; i < users.length; i++ ) {
    if (users[i].age > 30) {
        document.write(`<br> ${users[i].name} - ${users[i].age}<br>`);
    };
};