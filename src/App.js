import { useCallback, useEffect, useState } from "react";
import ListItem from "./components/ListItem";
import View from "./components/View";
import { cloneDeep } from "lodash";

function App() {
  const [val, setVal] = useState(0)
  const [multi, setMulti] = useState(false)
  const [show, setShow] = useState(false)
  const [list, setList] = useState([
    {id: 0, count: 2},
    {id: 1, count: 1},
    {id: 2, count: 3},
  ])

  const handleChange = e => {
    setVal(e.target.value)
  }

  const handleKeyDown = (e) => {
    if (e.shiftKey) {
      setMulti(true)
    }
  }

  const handleKeyUp = () => setMulti(false)

  useEffect(() => {
    window.addEventListener('keyup',handleKeyUp)
    window.addEventListener('keydown',handleKeyDown)
    return () => {
      window.removeEventListener('keyup',handleKeyUp)
      window.removeEventListener('keydown',handleKeyDown)
    }
  })

  const toggleShow = () => setShow(!show)
  const handleSetList = () => {
    const newList = [...list]
    newList[0].count += 1;
    setList(newList)
  }

  const incList = useCallback((idx) => {
    const newList = [...list]
    console.log(multi ? 'multi': 'single')
    newList[idx].count += multi ? 5 : 1;
    setList(newList)
  },[multi])

  return (
    <div className="App">
      <div>version: 0.0.1</div>
      <input type="text" onChange={handleChange}/>
      <button onClick={toggleShow}>Toggle {show ? 'Show' : 'Hidden'}</button>
      <div>Val: {val}</div>
      <div>Multi: {multi ? 'multi': 'single'}</div>
      <View show={show}></View>
      <button onClick={handleSetList}>change list</button>
      {list.map(l => <ListItem key={l.id} id={l.id} val={l.count} handler={incList} />)}
    </div>
  );
}

export default App;
