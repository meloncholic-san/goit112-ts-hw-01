// type Errors = {
//     email?: string[];
//     firstName?: string[];
//     lastName?: string[];
//     phone?: string[];
//   };
  
//   type Form = {
//     email: string | null;
//     firstName: string | null;
//     lastName: string | null;
//     phone: string | null;
//     errors: Errors;
//   };
  
//   // Реалізуйте Params так, 
//   // щоб унеможливити поле 'errors' з типу Form
//   type Params = Form;


type Errors = {
    email?: string[];
    firstName?: string[];
    lastName?: string[];
    phone?: string[];
  };
  
  type Form = {
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    phone: string | null;
    errors: Errors;
  };

type Params = Omit<Form, 'errors'>;
const params:Params = {
    email: '123qweqwe@gmail.com',
    firstName: 'Denis',
    lastName: "Panchenko",
    phone: '213-3213-321',
    //errors doesnt exists
}
console.log(params);