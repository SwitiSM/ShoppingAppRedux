import { createStackNavigator,createAppContainer} from 'react-navigation'
import LoginFrom from './screens/LoginForm'
import ShoppingItemsList from './screens/ShoppingItemsList';
import ItemDetails from './screens/ItemDetails'
const navigator = createStackNavigator({
    ShoppingList:{
        screen:ShoppingItemsList,
        navigationOptions: {
            title: 'shopping Items'
        }
    },
    ItemDetails:{
        screen:ItemDetails,
        navigationOptions: {
            title: 'Item Details'
        }
    }
},
{
initialRouteName:"ShoppingList"
})

export default createAppContainer(navigator)