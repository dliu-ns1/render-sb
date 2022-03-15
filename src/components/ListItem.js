import { useMemo } from "react";

function ListItem({id,val,handler}) {
  // const fib = (n) => n < 2 ? n : fib(n-1)+fib(n-2)
  const row = useMemo(() => {
    return (
      <div className="list-item" onClick={() => handler(id)}>
        id: {id} 
        val: {val}
        time: {JSON.stringify(new Date())}
      </div>
    );
  },[id,val,handler])
  return row
  
  // return view;
}

export default ListItem;
