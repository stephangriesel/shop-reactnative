import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

// https://reactnavigation.org/docs/stack-navigator/
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';

const ProductsNavigator = createStackNavigator(
    {
        ProductsOverview: ProductsOverviewScreen
    }
);


export default createAppContainer(ProductsNavigator);