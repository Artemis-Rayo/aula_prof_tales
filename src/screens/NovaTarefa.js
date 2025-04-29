import {View, Text, StyleSheet, TextInput} from 'react-native';

export default function Novatarefa(){
    return(
        <View style={styles.container}>
            <View style={styles.cabecalho}>
                <Text style={styles.titulo}>ADCIONAR TAREFA</Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.texto}>Nome da tarefa: </Text>
                    <TextInput style={styles.TextInput}/>

                <Text style={styles.categoria}>Categoria da Tarefa: </Text>

                <Text style={styles.texto1}>Descrição da Tarefa:</Text>
                    <TextInput style={styles.textoTarefa}/>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    cabecalho: {
        backgroundColor: 'blue',
        width: '100%',
        height: 60,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    titulo: {
        color: 'white',
        fontSize: 20,
        marginTop: 5,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    TextInput: {
        borderWidth: 1,
        padding: 10,
        borderColor: '#ccc',
        backgroundColor: 'white',
        borderRadius: 10
    },
    body: {
        padding: 15,
        flex: 1,
    },
    textoTarefa:{
        borderWidth: 1,
        padding: 10,
        borderColor: '#ccc',
        backgroundColor: 'white',
        borderRadius: 10
    }
});