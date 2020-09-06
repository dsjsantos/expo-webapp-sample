import React, { Component } from 'react';
import { View, Text, Platform, StyleSheet, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';

const DEFAULT_REF = "";
const INJECTED_JS = null;

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const styles = {
    container: {
        flex:1,
        alignItems: 'flex-end',
        paddingTop: 25
    },    
    headeroff: {
        padding: 0
    },
    header: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "center",
        alignSelf: "stretch",
        backgroundColor: "#222",
        paddingTop: 10,
        paddingBottom: 10
    },
    headertext: {
        color: "#fff"
    },
    webview: {
        flex: 1,
        width: deviceWidth,
        height: deviceHeight,
        padding: 0,
        marginTop: 0
    }
}



class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            uri: "http://github.com/dsjsantos"
        }
    }

    render() {
/*
        return (
            <View style={styles.container}>
                <View style={styles.headeroff}></View>
                <WebView 
                    ref={DEFAULT_REF}
                    source={{uri: this.state.uri}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    scalesPageToFit={true}
                    allowsInlineMediaPlayback={true}
                    startInLoadingState={true}
                    injectedJavaScript={INJECTED_JS}
                    style={{ ...styles.webview, marginTop: 0 }} />
            </View>
        )
*/
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headertext}>Expo Test - WebApp ({Math.trunc(deviceWidth)}x{Math.trunc(deviceHeight)})</Text>
                </View>
                <WebView 
                    ref={DEFAULT_REF}
                    source={{uri: this.state.uri}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    scalesPageToFit={true}
                    allowsInlineMediaPlayback={true}
                    startInLoadingState={true}
                    injectedJavaScript={INJECTED_JS}
                    style={{ ...styles.webview }} />
            </View>
        )
    }
} export default App;