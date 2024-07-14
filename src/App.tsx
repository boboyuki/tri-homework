
import { useState } from 'react'
import './App.css'
import { Banner } from './components/banner'
import { NormalHeader } from './components/header/normal-header'
function App() {
  const [intros] = useState([
    {
      id: 1,
      title: '外觀',
      content: '白頭鵯體長約17到22公分，額至頭頂純黑色而富有光澤，兩眼上方至後枕白色，形成一白色枕環。耳羽後部有一白斑，此白環與白斑在黑色的頭部均極為醒目，老鳥的枕羽(後頭部)更潔白，所以又叫「白頭翁」。'
    }, {
      id: 2,
      title: '棲地',
      content: '白頭翁和麻雀、綠繡眼合稱「城市三寶」，常成群出現在平原區灌木叢、丘陵樹林地帶，以及校園、公園、庭院、行道中的各種高高的電線與樹上。'
    },{
      id: 3,
      title: '食性',
      content: '以果樹的漿果和種子為主食，並時常飛入果園偷吃果實，還會吃嫩葉嫩芽，尤其是胡蝶蘭的嫩葉嫩芽葉，偶爾啄食昆蟲。'
    }
  ])
  return (
    <div className="flex flex-row align-middle h-screen">
        <NormalHeader></NormalHeader>
        <main className='flex flex-col grow-[1]'>
          <Banner></Banner>
          <div className="flex flex-1 flex-row align-middle justify-between bg-[#DCCCBC]">
            {
              intros.map((intro) => {
                return (
                  <div key={intro.id} className="flex-1 flex flex-row align-middle p-[50px]">
                      <div className='mr-[36px]'>
                        <h2 className="relative text-[36px] font-bold [writing-mode:vertical-lr] 
                        after:content-[''] after:w-[25px] after:h-[25px] after:absolute after:bottom-[-15px] after:right-[-6px] 
                        after:border-[8px] after:border-solid after:border-[#AA6666]/[.6] after:rounded-[50%]">{intro.title}</h2>
                      </div>
                      <p className="text-[16px]">{intro.content}</p>
                  </div>
                )
              })
            }
          </div>
        </main>
    </div>
  )
}

export default App
