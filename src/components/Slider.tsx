import { Layout, Menu } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

type propsType = {
  chooseCategory: (param: string) => void
}

const Slider = (props: propsType) => {
  const { SubMenu } = Menu;
  const { Sider } = Layout;
  const { chooseCategory } = props 
  return (
    <>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key="trending" icon={<UserOutlined />} title="Trending">
            <Menu.Item key="1" onClick={() => chooseCategory('trending gifs')}>Gifs</Menu.Item>
            <Menu.Item key="2" onClick={() => chooseCategory('trending stickers')}>Stickers</Menu.Item>
          </SubMenu>
          <SubMenu key="translate" icon={<LaptopOutlined />} title="Homer Simpson">
            <Menu.Item key="5" onClick={() => chooseCategory('translate gifs')}>Gifs</Menu.Item>
            <Menu.Item key="6" onClick={() => chooseCategory('translate stickers')}>Stickers</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<NotificationOutlined />} title="Random">
            <Menu.Item key="9" onClick={() => chooseCategory('coiding')}>coiding</Menu.Item>
            <Menu.Item key="10" onClick={() => chooseCategory('coding')}>coding</Menu.Item>
            <Menu.Item key="11" onClick={() => chooseCategory('grinning')}>grinning</Menu.Item>
            <Menu.Item key="12" onClick={() => chooseCategory('happy')}>happy</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    </>
  )
}

export default Slider
