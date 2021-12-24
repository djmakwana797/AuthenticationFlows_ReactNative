import { useNavigation } from '@react-navigation/native'
import React, {useState} from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'

export default function SignUpScreen() {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordRepeat, setPasswordRepeat] = useState('')

    const navigation = useNavigation()

    const onRegisterPressed = () => {
        navigation.navigate('SignIn')
    }

    const onTermsOfUsePressed = () => {
        console.warn('onTermsOfUsePressed')
    }

    const onPrivacyPolicyPressed = () => {
        console.warn('onPrivacyPolicyPressed')
    }

    const onSignInPressed = () => {
        navigation.navigate('SignIn')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create an account</Text>
            <CustomInput placeholder="Username" value={username} setValue={setUsername}/>
            <CustomInput placeholder="Email" value={email} setValue={setEmail}/>
            <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true}/>
            <CustomInput placeholder="Repeat Password" value={passwordRepeat} setValue={setPasswordRepeat} secureTextEntry={true}/>
            <CustomButton text="Register" onPress={onRegisterPressed}/>

            <Text style={styles.text}>
                By Registering, you confirm that you accept our {''}
                <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use</Text> and {' '}
                <Text style={styles.link} onPress={onPrivacyPolicyPressed}>Privacy Policy</Text>
            </Text>
            <CustomButton text="Have an account? Sign in" onPress={onSignInPressed} type="TERTIARY"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        padding: 20
    },
    title:{
        fontSize: 24,
        fontWeight:'bold',
        color: '#051c60',
        margin: 10,
    },
    text:{
        color: 'gray',
        marginVertical: 10,
    },
    link:{
        color: '#fdb075'
    }
})