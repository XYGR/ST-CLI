import '@tarojs/async-await'
import Taro, {Component} from '@tarojs/taro'
import {Provider} from '@tarojs/redux'
import Index from './pages/index'
import configStore from './store'

import './app.scss'

const store = configStore()

class App extends Component {

    config = {
        pages: [
            'pages/index/index',
            'pages/user/user'
        ],
        window: {
            backgroundTextStyle: 'light',
            navigationBarBackgroundColor: '#fff',
            navigationBarTitleText: 'WeChat',
            navigationBarTextStyle: 'black'
        },
        tabBar:{
            list:[
                {
                    pagePath:'pages/index/index',
                    text:'首页'
                },
                {
                    pagePath:'pages/user/user',
                    text:'我的'
                }
            ]
        }
    }

    componentDidMount() {
    }

    componentDidShow() {
    }

    componentDidHide() {
    }

    componentDidCatchError() {
    }

    // 在 App 类中的 render() 函数没有实际作用
    // 请勿修改此函数
    render() {
        return (
            <Provider store={store}>
                <Index/>
            </Provider>
        )
    }
}

Taro.render(<App/>, document.getElementById('app'))
