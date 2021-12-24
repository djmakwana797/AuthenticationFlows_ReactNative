import React, {useState, useMemo, useEffect} from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignInScreen from '../screens/SignInScreen'
import SignUpScreen from '../screens/SignUpScreen'
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen'
import HomeScreen from '../screens/HomeScreen'
import { AuthContext } from '../components/Context/Context'

const Stack = createNativeStackNavigator()

const Navigation = () => {
    const [isLoading, setisLoading] = useState(true)
    const [userToken, setuserToken] = useState(null)

    const authContext = useMemo(() => ({
        signIn: () => {
            setuserToken('asdf')
            setisLoading(false)
        },
        signOut: () => {
            setuserToken(null)
            setisLoading(false)
        },
        signUp: () => {
            setuserToken('asdf')
            setisLoading(false)
        }
    }))

    useEffect(() => {
        setTimeout(() => {
            setisLoading(false)
        }, 1000)
    }, [])

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
                <ActivityIndicator size="large" />
            </View>
        )
    }
    return (
        <AuthContext.Provider value={authContext}>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                { userToken==null?(
                    <>
                    <Stack.Screen name='SignIn' component={SignInScreen} />
                    <Stack.Screen name='SignUp' component={SignUpScreen} />
                    <Stack.Screen name='ForgotPassword' component={ForgotPasswordScreen} />
                    </>
                ):(
                    <Stack.Screen name='Home' component={HomeScreen} />
                )}
                </Stack.Navigator>
            </NavigationContainer>
        </AuthContext.Provider>
    )
}

export default Navigation

//useMemo - returns a memoized value
//memoization is a concept used in general when we don’t need to recompute 
// the function with a given argument for the next time as it returns the cached result

//useEffect - The Effect Hook lets you perform side effects in functional components. 
// It is a close replacement for componentDidMount(), componentDidUpdate() and componentWillUnmount() method.