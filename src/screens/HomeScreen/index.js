import React, {useContext} from 'react'
import { View, Text } from 'react-native'
import CustomButton from '../../components/CustomButton'
import { AuthContext } from '../../components/Context/Context'

const Home = () => {

    const {signOut} = useContext(AuthContext)
    return (
        <View style={{justifyContent:'center', alignItems:'center', flex:1, margin:20}}>
            <Text style={{fontSize:40}}>Welcome, home!</Text>
            <CustomButton text="Sign out" onPress={()=>signOut()}/>
        </View>
    )
}

export default Home
