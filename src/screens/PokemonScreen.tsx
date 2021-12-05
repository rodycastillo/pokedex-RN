import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import  Icon from 'react-native-vector-icons/Ionicons';
import { RootStackParams } from '../navigator/Navigator';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FadeInImage } from '../components/FadeInImage';
import { usePokemon } from '../hooks/usePokemon';
import { PokemonDetails } from '../components/PokemonDetails';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'>{}

export const PokemonScreen = ({navigation, route}: Props) => {


    const { simplePokemon:pokemon, color } = route.params; 
    const { top } = useSafeAreaInsets();

    const {IsLoading, Pokemon} = usePokemon(pokemon.id);
    console.log(pokemon);
    


    return (
        <View style={{flex: 1}}>
            <View style={{...styles.headerContainer, backgroundColor: color}}>
                <TouchableOpacity
                    onPress={ () => navigation.pop() }
                    style={{
                        ...styles.backBtn,
                        top: top + 5
                    }}
                    activeOpacity={0.8}
                >
                    <Icon
                        name="arrow-back-outline"
                        size={ 35 }
                        color="white"
                    />
                </TouchableOpacity>
                <Text
                    style={{
                        ...styles.pokemonName,
                        top: top + 45
                    }}
                >{pokemon.name + '\n'} #{pokemon.id}</Text>

                <Image
                    source={ require('../assets/pokebola-blanca.png') }
                    style={ styles.pokebol }
                />
                <FadeInImage
                    uri={pokemon.picture}
                    style={ styles.pokemonImg }
                />        
            </View>
            
            {
                IsLoading 
                ?
                (<View style={ styles.loadingIndicator }>
                    <ActivityIndicator
                        color={color}
                        size={50}
                    />
                </View>)
                : (
                    <PokemonDetails
                        pokemon={ Pokemon }
                    />
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        height: 370,
        zIndex: 999,
        alignItems: 'center',
        borderBottomRightRadius: 1000,
        borderBottomLeftRadius: 1000
    },
    backBtn: {
        position: 'absolute',
        left: 20,

    },
    pokemonName: {
        color: 'white',
        fontSize: 40,
        alignSelf: 'flex-start',
        left: 20
    },
    pokebol: {
        width: 250,
        height: 250,
        bottom: -25,
        opacity: 0.7
    },
    pokemonImg: {
        width: 250,
        height: 250,
        position: 'absolute',
        bottom: -30
    },
    loadingIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
