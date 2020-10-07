// import React, { useEffect, useState } from 'react';
// import '../App.css';
// import { loadCharactersApi } from "../loadApis/api.js";

// export const CharactersInformation = (props) => {
//   const [getCharacter, setGetCharacter] = useState(null);

//   useEffect(() => {
//     loadCharactersApi(props.character).then((character) => {
//       setGetCharacter(character.data.results[0]);
//     });
//   }, []);

//   return (
//     <div className="max-width-return">
//       {console.log(getCharacter)}
//       {getCharacter &&
//         <>
//           <section>
//             <img className="img-detailed" alt={getCharacter.name} src={`${getCharacter.thumbnail.path}.${getCharacter.thumbnail.extension}`}></img>
//           </section>
//           <aside className="width-aside">
//             <h1 className="font-roboto-title font-size-title">{getCharacter.name}</h1>
//             <h3 className="p-margin font-roboto-title">Comics</h3>
//             {getCharacter.comics.items.length === 0 ?
//               <p className="p-margin"></p> :
//               <p className="p-margin font-roboto-body font-size-body">
//                 {getCharacter.comics.items.map((comics, index) => <p className="list-creator" key={index}> {comics.name}/ </p>)}
//               </p>
//             }
//           </aside>
//         </>
//       }
//     </div>
//   );
// }