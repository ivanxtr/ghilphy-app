import { Layout, Spin } from 'antd';

type propsTypes = {
  data: {
    data: {}[],
  }
}
type mappedType = { 
  images: { 
    fixed_width_small: { 
      url: string 
    } 
  },
  url: string
}

const ViewContent = (props: propsTypes) => {
  const { Content } = Layout;
  return(
    <>
      <Layout style={{ padding: '0 24px 24px' }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {
              props.data instanceof Array ?
                props.data.map((item: mappedType, index: number) => 
                  (<img
                    key={index}
                    src={item.images.fixed_width_small.url}
                    alt="test"
                    style={{ margin: 10, cursor: 'pointer' }}
                    onClick={() => window.open(item.url)}
                  />)
                ) 
                :
                <Spin tip="Loading..."/>
            }
          </Content> 
        </Layout>
    </>
  )
}

export default ViewContent
