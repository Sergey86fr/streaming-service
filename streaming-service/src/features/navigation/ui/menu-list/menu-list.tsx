import { Link } from "react-router-dom"
import { MOVIE_LISTS, TOP_LISTS } from "../../model/top-lists"
import { Icon } from "../../../../shared/ui/icon-component/icon-component"


export const Menulist = () => {
    return <ul style={{padding:20, display:'flex', flexDirection:'column', gap:20}}>
        {TOP_LISTS.map((item) => (
            <li key={item.title}>
               <Link  to={item.url}>
                <Icon iconName={item.icon} color={"gray"}  />
                <span style={{color:"#000", marginLeft:20}}>{item.title}</span>
               </Link>
                </li>
        ))}
        {MOVIE_LISTS.map((item) => (
             <li key={item.title}>
               <Link to={item.url}>
                <Icon iconName={item.icon} color={"gray"}  />
                <span style={{color:"#000", marginLeft:20}}>{item.title}</span>
               </Link>
                </li>
        ))}
    </ul>
}