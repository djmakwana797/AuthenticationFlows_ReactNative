import React, {useState, useContext} from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import Logo from '../../../assets/images/d.png'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { AuthContext } from '../../components/Context/Context'

export default function SignInScreen() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigation = useNavigation()

    const {signIn} = useContext(AuthContext)

    const onSignInPressed = () => {
        signIn()
    }

    const onForgotPasswordPressed = () =>{
        navigation.navigate('ForgotPassword')
    }

    const onSignUpPressed = () =>{
        navigation.navigate('SignUp')
    }

    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.logo}/>
            <CustomInput placeholder="Username" value={username} setValue={setUsername}/>
            <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true}/>
            <CustomButton text="Sign In" onPress={onSignInPressed}/>
            <CustomButton text="Forgot Password?" onPress={onForgotPasswordPressed} type="TERTIARY"/>
            <CustomButton text="Don't have an account? Create here" onPress={onSignUpPressed} type="TERTIARY"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        padding: 20
    },
    logo:{
        height: 100,
        width: 100
    }
})