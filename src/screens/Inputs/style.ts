import { StyleSheet } from "react-native";
import { cores } from "../../styles/cores";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "white"
    },
    viewDados: {
        display: "flex",
        alignContent: 'space-between',
    },
    titulo: {
        fontWeight: '800',
        marginBottom: 40,
        marginTop: 40,
        fontSize: 25
    },
    input: {
        height: 50,
        borderWidth: 2,
        borderColor:  cores.black,
        marginBottom: 40,
        paddingLeft: 10,
        borderRadius: 30
    },
    botao: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: cores.black,
        height: 45,
        justifyContent: 'center',
        borderRadius: 30
    },
    botaoTexto: {
        fontSize: 20,
        fontWeight: '800',
        color: '#ffffff',
    }
})