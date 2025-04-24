// type AllType = {
//     name: string;
//     position: number;
//     color: string;
//     weight: number
//   }
  
//   function compare (top, bottom): AllType {
//     return {
//       name: top.name,
//       color: top.color,
//       position: bottom.position,
//       weight: bottom.weight,
//     }
//   }

type AllType = {
    name: string;
    position: number;
    color: string;
    weight: number
  }

  function compare(top: Pick<AllType, 'name' | 'color'>, bottom: Pick<AllType, 'position' | 'weight'>): AllType {
    return {
      name: top.name,
      color: top.color,
      position: bottom.position,
      weight: bottom.weight,
    };
  }

  const First = {
    name: 'Butterfly',
    color: 'orange',
  };
  
  const Second = {
    position: 42,
    weight: 1.45,
  };
  
  const result = compare(First, Second);
  console.log(result);