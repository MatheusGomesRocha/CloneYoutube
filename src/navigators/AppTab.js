import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Iniciar from '../screens/IniciarScreen';
import Explorar from '../screens/ExplorarScreen';
import Inscricoes from '../screens/InscricoesScreen';

const AppTab = createBottomTabNavigator();

export default () => {
    return(
        <AppTab.Navigator
            tabBarOptions={{ 
                activeTintColor: '#ff0000',    // Cor quando a tab estiver "focada"
                inactiveTintColor: '#434343',  // Cor quando não estiver "focada"
                style: {    // Estilo da TabBar
                    height: 50,
                    backgroundColor: '#fff',
                    borderTopWidth: 1,
                    borderTopColor: '#434343',
                    paddingTop: 8
                },
                labelStyle: {   // Estilo do Label
                    fontSize: 10,
                    paddingBottom: 2
                },
                keyboardHidesTabBar: true
            }}

            screenOptions={({route}) =>({           // Passando route como objeto para pegar o nome das rotas futuramente
                tabBarIcon: ({ focused }) => {      // Adicionando Icons dinamicamente
                    let icon = null;
                    switch(route.name) {
                        case 'home':
                            icon = "home";
                        break;
                        case 'explore':
                            icon = "compass";
                        break;
                        case 'subscribe':
                            icon = "play";   
                        break;
                        case 'notification':
                            icon = "bell";   
                        break;
                        case 'library':
                            icon = "outdent";   //outdent
                        break;
                    }
                    
                    // name no Icon irá receber a variável para ser adicionado dinamicamente
                    // Se a Tab estiver focado, irá receber a cor Preta ´para dar um destaque a mais dos outros 
                    return <Icon name={icon} size={25} style={{ color: focused ? '#ff0000' : '#666'}}/>
                }
            })} 
        >
            <AppTab.Screen name="home" component={Iniciar} options={{ tabBarLabel: 'Início'}}/>
            <AppTab.Screen name="explore" component={Explorar} options={{ tabBarLabel: 'Explorar'}}/>
            <AppTab.Screen name="subscribe" component={Inscricoes} options={{ tabBarLabel: 'Inscrições'}}/>
            <AppTab.Screen name="notification" component={Inscricoes} options={{ tabBarLabel: 'Notificações'}}/>
            <AppTab.Screen name="library" component={Inscricoes} options={{ tabBarLabel: 'Biblioteca'}}/>
        </AppTab.Navigator>
    );
}