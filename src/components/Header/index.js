import { Link } from 'react-router-dom'

import './index.css'


const Header = () =>(
    <nav className="flex flex-col justify-center items-center mt-[10px] nav-header ml-[10px] mr-[10px]">
        <div className="">
            <h1 className="text-3xl font-bold ml-[70px]">My Blog</h1>
            <ul className="flex mt-[20px] mb-[10px]">
                <li>
                   <Link className='ml-[-100px] text-white cursor-pointer font-bold hover:text-blue-400' to = "/">Home</Link>
                </li>
                <li>
                    <Link className='ml-[100px] text-white cursor-pointer font-bold hover:text-blue-400' to = "/about">About</Link>
                </li>
                <li>
                    <Link className='ml-[100px] text-white cursor-pointer font-bold hover:text-blue-400' to= "/contact">Contact</Link>
                </li>
            </ul>
        </div>

    </nav>
)

export default Header