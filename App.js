import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useNetInfo} from "@react-native-community/netinfo"
import { WebView } from 'react-native-webview';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const netInfo = useNetInfo()

  if(netInfo.isConnected){
    return (
    <SafeAreaView style={{
      flex: 1,

    }}>
      <View
      style={{
        flex: 1,
  
      }}>
        
      <WebView source={{ uri:'https://app.pauloresolve.com.br/login'}} />
      </View>
      </SafeAreaView>
    );
   
  }else{
    return(
      <View style={styles.containerComponent}>
      <Text style={styles.textMessageConnection}>Sem conexão com a internet</Text>
    </View>
      )
   
  }

  
}

const styles = StyleSheet.create ({
  containerComponent: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#009688',
  },
  textMessageConnection: {fontSize: 24, fontWeight: 'bold', color: '#FFF'},
});
// "@react-native-community/netinfo": "9.3.0",
//     "expo": "~46.0.7",
//     "expo-status-bar": "~1.4.0",
//     "react": "18.0.0",
//     "react-dom": "18.0.0",
//     "react-native": "0.69.6",
//     "react-native-safe-area-context": "4.3.1",
//     "react-native-web": "~0.18.7",
//     "react-native-webview": "11.23.0"