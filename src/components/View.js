import { memo, useMemo } from "react";

function View({show}) {
  const fib = (n) => n < 2 ? n : fib(n-1)+fib(n-2)

  // const view = useMemo(() => {
  // },[])
  if (!show) return null;
  
  return (
    <div className="view">
      {fib(39)}
    </div>
  );
  // return view;
}

export default View;

// import React from 'react'
// const fib = (n) => n < 2 ? n : fib(n-1)+fib(n-2)
// export default class View extends React.Component {
//   render() {
//     return (
//       <div className="view">
//         {fib(39)}
//       </div>
//     );
//   }
// }
