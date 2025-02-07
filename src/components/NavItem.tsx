import Button from "./ui/Button.jsx";
import {SWContext} from "../utils/context.ts";
import {useContext} from "react";

interface Props {

    itemTitle:string;
}

const NavItem = ({itemTitle,}:Props) => {
    const {changePage} = useContext(SWContext)
    return (
        <Button callback={() => changePage(itemTitle)}>{itemTitle}</Button>
    );
};

export default NavItem;
