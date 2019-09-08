import Taro, {Component} from '@tarojs/taro';
import {View} from '@tarojs/components';
import {connect} from '@tarojs/redux';
import './index.scss';

/*
* mapStateToProps,mapDisPatchToProps和@connect必须写在组件声明之前
*/

// mapStateToProps
const mapStateToProps = (state) => ({

})
// mapDisPatchToProps
const mapDisPatchToProps = (dispatch) => ({

})

@connect(mapStateToProps,mapDisPatchToProps)

class Index extends Component {

    config = {
        navigationBarTitleText: '首页'
    }

    componentWillReceiveProps() {

    }

    componentWillUnmount() {
    }

    componentDidShow() {
    }

    componentDidHide() {
    }

    render() {
        return (
            <View className='index'>
                Index
            </View>
        )
    }
}

export default Index
