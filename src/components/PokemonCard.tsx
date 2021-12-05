import React from 'react'
import ImageColors from 'react-native-image-colors'

import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';
import { useState, useEffect } from 'react';
const {width} = Dimensions.get('window')
interface Props  {
    pokemon: SimplePokemon;
}
export const PokemonCard = ({pokemon}: Props) => {

    const [BgColor, setBgColor] = useState('grey')

    const getColors = async(uri: string) => {
        const colors = await ImageColors.getColors(uri, {});
   
        let primary;
   
        switch (colors.platform) {
           case 'android':
              primary = colors.dominant;
              
              break;
   
           case 'ios':
              primary = colors.primary;
        
           default:
              break;
        }
   
        setBgColor( primary || 'grey' );
        
   
        return [ primary ];
     }

    useEffect(() => {
        getColors(pokemon.picture);
    }, [])

    return (
        <TouchableOpacity
            activeOpacity={ 0.9 }
        >
            <View style={ {
                ...styles.cardContainer,
                width: width * 0.4,
                backgroundColor: BgColor
            } }>
                <View>
                    <Text style={styles.name}>{ pokemon.name }{'\n#'+ pokemon.id}</Text>

                </View>
                <View style={ styles.pokebolaContainer }>
                    <Image
                        style={ styles.pokebola }
                        source={require('../assets/pokebola-blanca.png')}
                    />
                </View>
                <FadeInImage
                        uri={ pokemon.picture }
                        style={styles.pokemonImage}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 10,
        height: 120,
        width: 160,
        marginBottom: 25,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        elevation: 15,
    },
    name: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        top: 20,
        left: 10
    },
    pokebola: {
        width: 100,
        height: 100,
        position: 'absolute',
        right: -25,
        bottom: -25
    },
    pokemonImage: {
        width: 120,
        height: 120,
        position: 'absolute',
        right: -8,
        bottom: -5,  
    },
    pokebolaContainer:{
        width: 100,
        height: 100,
        position: 'absolute',
        bottom: 0,
        right: 0,
        opacity: 0.5,
        overflow: 'hidden'
    },
})
