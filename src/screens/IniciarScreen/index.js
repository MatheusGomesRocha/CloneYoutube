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
  SubInfoView,
  DotView
} from './style';

export default () => {
  
  let videos = [
    {img: require('../../assets/images/thumbnail.png'), title: 'ASMR VOZ COM CILINDRO E SONS RELAXANTES', userPic: 'user-circle', user: 'Sweet Carol', views: '237 mil visualizações', date: 'há 1 ano' },
    {img: require('../../assets/images/thumbnail.png'), title: 'ASMR VOZ COM CILINDRO E SONS RELAXANTES', userPic: 'user-circle', user: 'Sweet Carol', views: '237 mil visualizações', date: 'há 9 horas' },
    {img: require('../../assets/images/thumbnail.png'), title: 'teste', userPic: 'user', user: 'userTeste', views: '157 mil visualizações', date: 'há 7 meses' },
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
                    <Icon name={v.userPic} size={40} />
                  </LeftView>
                  <RightView>
                    <Title>{v.title}</Title>
                    <SubInfoView>
                      <User>{v.user} -</User>
                      <Views> {v.views} -</Views>
                      <Date> {v.date} </Date>
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