import {View, Text, StyleSheet, TextInput} from 'react-native';

export default function Novatarefa(){
    const [text, onChangeText] = React.useState('');

    return(
        <View style={styles.container}>
            <View style={styles.cabecalho}>
                <Text style={styles.titulo}>ADCIONAR TAREFA</Text>
            </View>
            <View>
                <Text>Nome da tarefa</Text>
            </View>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
            />
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
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10
    }
});