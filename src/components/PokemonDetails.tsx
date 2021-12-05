import React from 'react'
import { Text, ScrollView, StyleSheet, View } from 'react-native';
import { PokemonFull } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';

interface Props {
    pokemon: PokemonFull
}

export const PokemonDetails = ({pokemon}: Props) => {
    return (
        <ScrollView
            showsVerticalScrollIndicator={ false }
            style={{
                ...StyleSheet.absoluteFillObject,
            }}
        >
          <View
            style={{
                ...styles.container,
                marginTop: 400
            }}
          >
              <Text style={ styles.title }>Types</Text>
              <View
                style={{flexDirection: 'row'}}
              >
                  {
                      pokemon.types.map(({type})=>(
                          <Text
                            style={{
                                ...styles.regularTxt,
                                marginRight: 10
                            }}
                            key={ type.name }
                          >
                              {type.name}
                          </Text>
                      ))
                  }
              </View>
              <Text style={ styles.title }>Peso</Text>
              <Text style={ styles.regularTxt }>{pokemon.weight} Kg</Text>
          </View>
              
          <View
            style={styles.container}
          >
            <Text style={ styles.title }>Sprites</Text>
          </View>

          <ScrollView
            horizontal={ true }
            showsHorizontalScrollIndicator={ false }
          >
              <FadeInImage
                uri={pokemon.sprites.front_default}
                style={ styles.basicStripe }
              />
              <FadeInImage
                uri={pokemon.sprites.back_default}
                style={ styles.basicStripe }
              />
              <FadeInImage
                uri={pokemon.sprites.front_shiny}
                style={ styles.basicStripe }
              />
              <FadeInImage
                uri={pokemon.sprites.back_shiny}
                style={ styles.basicStripe }
              />
          </ScrollView>
          <View style={ styles.container }>
            <Text style={ styles.title }>Abilities</Text>
            <View
                style={{flexDirection: 'row'}}
              >
                  {
                      pokemon.abilities.map(({ability})=>(
                          <Text
                            style={{
                                ...styles.regularTxt,
                                marginRight: 10
                            }}
                            key={ ability.name }
                          >
                              {ability.name}
                          </Text>
                      ))
                  }
              </View>
          </View>
          <View style={ styles.container }>
            <Text style={ styles.title }>Movements</Text>
            <View
                style={{flexDirection: 'row', flexWrap: 'wrap'}}
              >
                  {
                      pokemon.moves.map(({move})=>(
                          <Text
                            style={{
                                ...styles.regularTxt,
                                marginRight: 10
                            }}
                            key={ move.name }
                          >
                              {move.name}
                          </Text>
                      ))
                  }
              </View>
          </View>
          <View style={ styles.container }>
            <Text style={ styles.title }>Stats</Text>
            <View>
                  {
                      pokemon.stats.map((stat, i)=>(
                          <View key={ stat.stat.name + i}
                            style={{ flexDirection: 'row' }}
                          >
                              <Text
                            style={{
                                ...styles.regularTxt,
                                marginRight: 10,
                                width: 150
                            }}
                          >
                              {stat.stat.name}
                          </Text>
                          <Text
                            style={{
                                ...styles.regularTxt,
                                fontWeight: 'bold'
                            }}
                          >
                              {stat.base_stat}
                          </Text>
                          </View>
                      ))
                  }
              </View>
          </View>
          <View
            style={{
                marginBottom: 80,
                alignItems: 'center'
            }}
          >
            <FadeInImage
                uri={pokemon.sprites.front_default}
                style={ styles.basicStripe }
            />
          </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 22,
        marginTop: 20
    },
    regularTxt: {
        fontSize: 19,
    },
    basicStripe: {
        width: 90,
        height: 90
    }
});
