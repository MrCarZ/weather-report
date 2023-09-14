import { Header } from "antd/es/layout/layout";
import { styled } from "../../styles/stitches.config";

export const StyledHeader = styled(Header, {
    width: '100%',
    backgroundColor: '#f9f9f9',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0px',
    boxShadow: '0 0 10px 1px rgba(0,0,0,0.05)',
    margin: '0 5px'
});