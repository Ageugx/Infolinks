// vai mexer na posicao do texto, use flex 1 pra mexer diretamente na tela toda 
import {StyleSheet } from "react-native";

import { colors } from "@/styles/colors";

export const styles = StyleSheet.create({
container: {
    flex: 1, //considera toda a area util da tela para os componet
    justifyContent: "center",// justifica (ajusta) todos os elementos
    alignItems: "center",// alinha todos os elementos no centro
    flexDirection:"column",//organiza todos os elementos dentro
    // codigo para indentificar as extremidades do container
    borderColor:"red",
    borderWidth :5,
},

title: {
    color:  colors.green[900],
    fontSize: 22,
}
})