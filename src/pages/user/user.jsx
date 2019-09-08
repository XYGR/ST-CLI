import Taro,{Component} from '@tarojs/taro';
import {View} from '@tarojs/components';
import {connect} from '@tarojs/redux';

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

class User extends Component{
    config = {
        navigationBarTitleText: '我的'
    }

    render() {
        return (

            <View>
                User
            </View>
        )
    }
}


export default User
