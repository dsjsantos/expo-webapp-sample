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
    
    webview = null;

    constructor(props) {
        super(props);

        this.state = {
            uri: "http://github.com/dsjsantos",
            hooked: false,
            hookedURL: ""

        }
    }

    handleWebViewNavigationStateChange = newNavState => {
        // newNavState looks like this:
        // {
        //   url?: string;
        //   title?: string;
        //   loading?: boolean;
        //   canGoBack?: boolean;
        //   canGoForward?: boolean;
        // }
        const { url } = newNavState;
        if (!url) {
            return;
        }

        // handle specific doctypes
        if (url.includes('.pdf')) {
            this.webview.stopLoading();

            this.setState({
                hooked: true,
                hookedURL: url
            });
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
                { this.state.hooked &&
                <View style={styles.header}>
                    <Text style={styles.headertext}>{this.state.hookedURL}</Text>
                </View>
                }
                <WebView 
                    ref={ref => (this.webview = ref)}
                    source={{uri: this.state.uri}}
                    onNavigationStateChange={this.handleWebViewNavigationStateChange}
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