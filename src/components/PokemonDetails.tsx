import React from 'react'
import { Text, ScrollView, StyleSheet, View } from 'react-native';
import { PokemonFull } from '../interfaces/pokemonInterfaces';

interface Props {
    pokemon: PokemonFull
}

export const PokemonDetails = ({pokemon}: Props) => {
    return (
        <ScrollView
            style={{
                ...StyleSheet.absoluteFillObject,
            }}
        >
          <View
            style={{
                ...styles.container,
                marginTop: 390
            }}
          >
              <Text style={ styles.title }>Types</Text>
          </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20
    }
});
