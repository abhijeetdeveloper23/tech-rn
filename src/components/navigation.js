
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";
import EventListScreen from "../screens/EventListScreen";
import EventDetailsScreen from "../screens/EventDetailsScreen";
import TrackingScreen from "../screens/TrackingScreen";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {

   return( <NavigationContainer >
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName={
                "Home"
            }
        >
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="EventList" component={EventListScreen} />
            <Stack.Screen name="EventDetails" component={EventDetailsScreen} />
            <Stack.Screen name="Tracking" component={TrackingScreen} />
        </Stack.Navigator>
    </NavigationContainer>
    )
};
export default StackNavigator;
