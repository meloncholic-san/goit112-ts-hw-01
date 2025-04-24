// type User = {
//     name: string;
//     surname: string;
//     email: string;
//     password: string;
//   }
  
//   function createOrUpdateUser(initialValues: User) {
//     // Оновлення користувача
//   }
  
//   createOrUpdateUser({ 
//     email: 'user@mail.com', 
//     password: 'password123' 
//   });


type User = {
    name: string;
    surname: string;
    email: string;
    password: string;
  }

  function createOrUpdateUser(data: Partial<User>):User {
    const defaultUser: User = {
        name: 'Denis',
        surname: 'Panchenko',
        email: '123qweqwe@gmail.com',
        password: '123qweqwe',
    }
    return {...defaultUser, ...data};
      }

  console.log(createOrUpdateUser({ 
    email: 'user@mail.com', 
    password: 'password123' 
  }));