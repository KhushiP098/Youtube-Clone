import React,{useContext} from 'react'
import {useNavigate} from "react-router-dom"
import LeftNavMenuItem  from './LeftNavMenuItems'
import {categories}  from '../utils/constants'
import {Context} from '../context/contextApi'


const LeftNav = () => {
  const {selectedCategory,setSelectedCategory,mobileMenu}=useContext(Context);
  const navigate=useNavigate();
  const clickHandler=(name,type)=>{
    switch(type){
      case "category":
        return setSelectedCategory(name)
      case "home":
        return setSelectedCategory(name)
      case "menu":
        return false
      default:
        break;

    }

  }

  return (
    <div className={`md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10 translate-x-[-240px] md:translate-x-0 transition-all ${mobileMenu? "translate-x-0":""}`}>
      <div className='flex px-5 flex-col' >
       
       {
        categories.map((item)=>{
          return(
            // react fragment is an empty tag 
            // for eg u can return only a single div inside the return statement .So,u can use fragment so
            // that u can return multiple divs inside  return statement 
             <React.Fragment key={item.name}> 
              <LeftNavMenuItem
                text={item.type==="home" ?"Home":item.name}
                icon={item.icon}
                action={()=>{clickHandler(item.name,item.type);
                navigate("/")}}
                className={`${selectedCategory===item.name? "bg-white/0.15":""}`}
              />

              {
                item.divider &&(
                <hr className='my-5 border-white/[0.2]'></hr>
              )}

             </React.Fragment>
          );
        })
       }
         <hr className='my-5 border-white/[0.2]'/>
         <div className='text-white/[0.5] text-[12px]'> 
           YouTube Clone By Khushi
         </div>
      </div>
    </div>
  );
}

export default LeftNav;
