import { useState } from "react"

// 白頭翁的特性
// 白頭翁的故事
// 白頭翁的美照
// 白頭翁的危機
export const Menu = () => {
  const [menus] = useState([
    {
      id: 1,
      title: '白頭翁的特性',
    },
    {
      id: 2,
      title: '白頭翁的故事',
    },
    {
      id: 3,
      title: '白頭翁的美照',
    },
    {
      id: 4,
      title: '白頭翁的危機',
    }
  ])
    return (
      // ul list
      <ul className="flex flex-col justify-center align-middle">
        {
          menus.map((menu) => {
            return (
              <li key={menu.id} className="p-[10px] text-center">
                <a href="#" className="text-[18px] px-2">{menu.title}</a>
              </li>
            )
          })
        }
      </ul>
    )
  }