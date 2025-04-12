import { View ,Text,StyleSheet } from "react-native";

export default function Index () {
    return (
        <View style={styles.container} > 
             
            <Text style={styles.title}>Hellow, Elon Musk!!</Text> 
        
        <text> bem vindo feinando</text>
        </View>
    )
}
// vai mexer na posicao do texto, use flex 1 pra mexer diretamente na tela toda 
const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection:"column",
},

title: {
    color: "red",
    fontSize: 22,
}
})
    