import Text from "./ui/Text.tsx";
import {useContext} from "react";
import {SWContext} from "../utils/context.ts";


const ErrorPage = () => {
    const{changeErrorFlag} = useContext(SWContext)
    changeErrorFlag(true)

    return (
        <Text>{`O-o-ps. something went wrong`}</Text>
    );
};

export default ErrorPage;
