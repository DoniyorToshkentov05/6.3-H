import './style.css';

export default function Header() {
  return (
    <div className='heade'>
        <div className='heade2'>
           <img className='logo' src="src/components/Header/img/logo (7).png" alt="" />
           <button className='headbut'><img className='imm' src="src/components/Header/img/menu.png" alt="" /> <p className='ppp'>Каталог</p></button>
           <input  className='headinp'  type="search"  placeholder='Найти товар'  />
           <img className='headsearch' src="src/components/Header/img/search.png" alt="" />
           <img className='menu-icon' src="src/components/Header/img/MainMenu.png" alt="" />
           <img className='menu-iconn' src="src/components/Header/img/MainMenu (1).png" alt="" />
           <img className='menu-iconn' src="src/components/Header/img/MainMenu (2).png" alt="" />
           <img className='user' src="src/components/Header/img/UserMenuItem.png" alt="" />
        </div>
    </div>
  )
}
