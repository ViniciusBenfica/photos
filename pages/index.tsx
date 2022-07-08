import type { NextPage } from 'next'
import { useDispatch, useSelector } from 'react-redux'
import { changeUser, logout, selectUser } from "../redux/Slice/userSlice"

const Home: NextPage = () => {

  const dispatch = useDispatch()
  const {userName} = useSelector(selectUser)

  console.log(userName)

  const login = () => {
    
  }

  return (
    <div>
        React/Redux
        <button onClick={() => login()}>MAMIIIGU</button>
    </div>
  )
}

export default Home
