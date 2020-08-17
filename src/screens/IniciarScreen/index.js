import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../../components/HeaderComponent';

import {
  Container,
  Scroll,
  Texto,
  VideosView,
  ItemView,
  Img,
  Title,
  User,
  Date,
  Views,
  ViewRow,
  LeftView,
  RightView,
  InfoView,
  SubInfoView,
  DotView,
  UserPic
} from './style';

import {FlatList} from 'react-native';
export default () => {
  
  let videos = [
    {img: require('../../assets/images/thumbnail_carol.png'), title: 'HAHHAHA ANDRÉ É TROUXÃO HHAHHAHAA', userPic: require('../../assets/images/carol_pic.jpg'), user: 'Sweet Carol', views: '237 mil visualizações', date: 'há 1 ano' },
    {img: require('../../assets/images/thumbnail_kuster.jpg'), title: 'COMENDO O CÚ DO CARLOS ANDRÉ, SERÁ SE GOSTEI?!', userPic: require('../../assets/images/kuster_pic.png'), user: 'Maicon Kuster', views: '1.3 mi visualizações', date: 'há 9 horas' },
    {img: require('../../assets/images/thumbnail.png'), title: 'teste', user: 'userTeste', userPic: require('../../assets/images/eu.jpeg'), views: '157 mil visualizações', date: 'há 7 meses' },
  ];

    return(
      <Container>
        <Header />
        <Scroll>
          <VideosView>
            {videos.map((v, k) => (
              <ItemView key={k}>
                <Img source={v.img} />
                <ViewRow>
                  <LeftView>
                    <UserPic source={v.userPic} />
                  </LeftView>
                  <RightView>
                    <InfoView>
                      <Title>{v.title}</Title>
                      <Icon name="ellipsis-v" size={20} color="#ccc"/>
                    </InfoView>
                    <SubInfoView>
                      <User>{v.user} - {v.views} - {v.date}</User>
                      
                    </SubInfoView>
                  </RightView>
                </ViewRow>
                
              </ItemView>
            ))}
          </VideosView>
        </Scroll>
      </Container>
    );
  }