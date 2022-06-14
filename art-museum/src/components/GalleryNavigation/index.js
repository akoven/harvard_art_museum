import { NavLink } from "react-router-dom";

const GalleryNavigation = ({galleries}) => {
    console.log('galleries: ',galleries);
    return(
        <nav>
            <NavLink to='/'>
                <h1>Galleries</h1>
            </NavLink>
            <ul>
                {galleries.map(gallery => {
                    return(
                        <nav>
                            <NavLink activeStyle={{ fontWeight: "bold" }} key={gallery.id} to={`/galleries/${gallery.id}`}>{gallery.name}</NavLink>
                        </nav>
                    )
                })}
            </ul>
        </nav>
    )
}

export default GalleryNavigation;
