
import './App.css'
import { Banner } from './components/banner'
import { Content } from './components/content'
import { Header } from './components/header'
function App() {
  return (
    <div className="flex md:flex-row flex-col items-middle h-screen">
        <Header></Header>
        <main className='flex flex-col flex-[1] h-full'>
          <Banner className='grow-[2]'></Banner>
          <Content className='grow-[1]'></Content>
        </main>
    </div>
  )
}

export default App
