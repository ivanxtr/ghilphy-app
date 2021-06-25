import React,{ useEffect, useCallback, useState } from 'react'
import { Layout } from 'antd';
import Slider from './Slider'
import ViewContent from './ViewContent'
import { ApiCallsFactory } from '../factories/index'

type trendingAssetsTypes = {
  data: {}[]
}

const App = () => {
  const { Header } = Layout;
  const [data, setData] = useState<trendingAssetsTypes>({data: []})

  const getTrending = useCallback(async (category: string, endpoint: string) => {
    const customData = new ApiCallsFactory(`/${category}/${endpoint}?api_key=${process.env.REACT_APP_KEY}&limit=25`)
    const response = await customData.getData()
    setData(response.data)
  },[])

  const getSearch = useCallback(async (category: string, endpoint: string) => {
    const customData = new ApiCallsFactory(`/${category}/${endpoint}?api_key=${process.env.REACT_APP_KEY}&q=homer&limit=20`)
    const response = await customData.getData()
    setData(response.data)
  },[])

  const getByCustomSearch = useCallback(async (category: string, endpoint: string, subCategory: string) => {
    const customData = new ApiCallsFactory(`/${category}/${endpoint}?api_key=${process.env.REACT_APP_KEY}&q=${subCategory}&limit=20`)
    const response = await customData.getData()
    setData(response.data)
  },[])

  const chooseCategory = (category: string) => {
    switch (category) {
      case 'trending gifs':
        return getTrending('gifs', 'trending')
      case 'trending stickers':
        return getTrending('stickers', 'trending')
      case 'translate gifs':
        return getSearch('gifs', 'search')
      case 'translate stickers':
        return getSearch('stickers', 'search')
      case 'coiding':
        return getByCustomSearch('gifs', 'search', 'coiding')
      case 'coding':
        return getByCustomSearch('gifs', 'search', 'coding')
      case 'grinning':
        return getByCustomSearch('gifs', 'search', 'grinning') 
      case 'happy':
        return getByCustomSearch('gifs', 'search', 'happy') 
      default:
        break;
    }
  }

  // mount
  useEffect(() => {
    getTrending('gifs', 'trending')
  },[getTrending])

  return(
    <Layout>
      <Header className="header">
        <h1 className="text-white">Gilphy App</h1>
      </Header>
      <Layout>
        <Slider chooseCategory={chooseCategory} />
        <Layout style={{ padding: '0 24px 24px' }}>
          <ViewContent data={data}/>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default App
