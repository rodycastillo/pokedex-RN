import React from 'react'
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { usePokemonPaginated } from '../hooks/usePokemonPage'
import { styles } from '../theme/appTheme'

export const HomeScreen = () => {

    const {top} = useSafeAreaInsets();
    const { simplePokemonList, loadPokemons } = usePokemonPaginated();
    console.log(simplePokemonList);
    

    return (
        <>
            <Image 
                source={require('../assets/pokebola.png')}
                style={ styles.pokebolaBG }
            />
            <FlatList
                data={ simplePokemonList }
                keyExtractor={ (pokemon) => pokemon.id }
                showsVerticalScrollIndicator={ false }
                renderItem={({item})=> (
                    <Image
                        source={{ uri: item.picture }}
                        style={{
                            height: 100,
                            width: 100
                        }}
                    />
                )}
                // infiniti scroll
                onEndReached={ loadPokemons }
                onEndReachedThreshold={ 0.4 }
                ListFooterComponent={<ActivityIndicator style={{height:100}} size={ 20 }  color="grey"/>}
            />
            <Text style={{
                ...styles.title,
                ...styles.globalMargin,
                top: top + 20
            }}>Pokedex</Text>
        </>
    )
}
