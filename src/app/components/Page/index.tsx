import { Layout } from "antd";
import { Content, Footer } from "antd/es/layout/layout";
import Header from "../../Header";

export default function Page(){
    return (
        <Layout style={{width: '100%'}}>
            <Header/>
            <Content>
                    Content
            </Content>
            <Footer>
                Footer
            </Footer>
        </Layout>
    )



}