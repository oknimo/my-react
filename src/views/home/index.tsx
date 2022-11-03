import { useCallback, useEffect, useMemo, useState } from 'react'
import reactLogo from '@/assets/react.svg'
import { SET_LOADING,SET_TITLE } from '../../store/slices/system.slice'
import { useAppDispatch, useAppSelector } from '../../common/hooks'
import { Button } from 'antd'

function HomePage() {
  const [count, setCount] = useState(0)
  const loading = useAppSelector(state => state.system.loading)
  const title = useAppSelector(state => state.system.title)
  const dispatch = useAppDispatch()
  useEffect(() => {
    console.log(loading);
  }, [loading])

  const handAdd = () => {
    {console.log("handAdd")}
    setCount((count) => count + 1)
    // dispatch(SET_LOADING())
    dispatch(SET_TITLE({title: title + count}))
  }

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + {title}</h1>
      <div className="card">
        <button onClick={handAdd}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default HomePage
