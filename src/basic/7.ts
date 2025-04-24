// const page1 = {
//     title: 'The awesome page',
//     likes: 100,
//     accounts: ['Max', 'Anton', 'Nikita'],
//     status: 'open',
//     details: {
//       createAt: new Date('2021-01-01'),
//       updateAt: new Date('2021-05-01'),
//     }
//   }
  
//   const page2 = {
//     title: 'Python or Js',
//     likes: 5,
//     accounts: ['Alex'],
//     status: 'close',
//   }

type Book = {
    title: string,
    likes: number,
    accounts: string[],
    status: 'open' | 'close',
    details?: {
        createAt: Date,
        updateAt: Date,
    }
}

const page1: Book = {
        title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
      createAt: new Date('2021-01-01'),
      updateAt: new Date('2021-05-01'),
    }
}
console.log(page1);

const page2: Book = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close',
}
console.log(page2);