import NavItem from "./NavItem.jsx";
import {navItems} from "../utils/constants.js";

interface Props {
    changePage: (page:string)=>void;
}

const Navigation = ({changePage}:Props) => {
    return (
        <nav className={'fixed top-2 left-12'}>
            <div className={'flex gap-4'}>
                {navItems.map(item => <NavItem changePage={changePage} itemTitle={item} key={item}/>)}
            </div>
        </nav>
    );
};

export default Navigation;
