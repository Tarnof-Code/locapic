import { React, useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import { ListItem, Input, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

import { connect } from 'react-redux';

import AsyncStorage from '@react-native-async-storage/async-storage';




function PoiScreen(props) {

    let listItems = (props.listPOI).map((l, i) => (
        <ListItem
            onPress={() => {
                props.onDelPOI(l);
                let temp = props.listPOI
                temp.splice(temp.indexOf(l), 1)
                console.log(temp.indexOf(l))
                console.log(temp)
                AsyncStorage.setItem("POI", JSON.stringify(temp))
            }


            }
            key={i} bottomDivider>
            <ListItem.Content>
                <ListItem.Title>Point d'intérêt {i + 1} : {l.titre}</ListItem.Title>
                <ListItem.Subtitle>Desc: {l.description}</ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    ))
    // console.log(props.listPOI)
    return (

        <View style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1, marginTop: 50 }}>
                {listItems}
            </ScrollView>

        </View>

    );
}



function mapStateToProps(state) {
    return { listPOI: state.POI }
}

function mapDispatchToProps(dispatch) {
    return {
        onDelPOI: function (POI) {
            dispatch({ type: 'delPOI', POI: POI })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PoiScreen);
