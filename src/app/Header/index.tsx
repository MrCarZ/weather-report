import { Typography } from "antd";
import HeaderButtonList from "./components/HeaderRightMenu";
import { StyledHeader } from "./styles";
import { Grid } from "../../styles/sharedStyles";

export default function Header(){

    return (
        <StyledHeader>
            <Typography.Title level={4} style={{margin: 'auto 2rem'}}>
                Weather Report 
            </Typography.Title>
            <HeaderButtonList/>
                
        </StyledHeader>
    )
}