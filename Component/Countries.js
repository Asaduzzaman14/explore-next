import { View, Text, ScrollView, StyleSheet, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import Country from './Country'

export default function Countries() {
    const [countries, setCountries] = useState([])
    const [search, setSearched] = useState([])


    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => {
                setSearched(data)
                setCountries(data)
            })

    }, [])

    const handelSearch = (text) => {
        const filtered = countries.filter(country => country.name.common.includes(text))
        setSearched(filtered)
    }
    return (
        <View>
            <Text style={styles.header}>Totla  Countries  {search.length}</Text>

            <TextInput
                onChangeText={handelSearch}
                style={styles.input}
            ></TextInput>

            <ScrollView>
                {
                    search.map(country => <Country
                        country={country}
                        key={country._id}
                    ></Country>)
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        marginTop: 50,
        fontSize: 40,
        color: 'red'
    },
    input: {
        height: 40,
        width: 12,
        borderWidth: 1,
        padding: 10
    }

})
