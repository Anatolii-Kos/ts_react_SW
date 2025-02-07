import Button from "./ui/Button.jsx";

interface Props {
    changePage: (page:string)=>void;
    itemTitle:string;
}

const NavItem = ({itemTitle, changePage}:Props) => {
    return (
        <Button callback={() => changePage(itemTitle)}>{itemTitle}</Button>
    );
};

export default NavItem;
