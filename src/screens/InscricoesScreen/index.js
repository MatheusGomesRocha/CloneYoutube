import React from 'react';
import Header from '../../components/HeaderComponent';

import {
  Container,

  Scroll,
  
  SubHeader,
  ItemView,
  Img,
  Texto,

  BtnText,
  Btn,

  SubSubHeader,
  BtnOptions,
  BtnOptionsText,

  VideosView,
  Title,
  User,
  AllItemView,
  VideoImg,
  ViewRow,
  LeftView,
  RightView,
  InfoView,
  SubInfoView,
  UserPic
} from './style';

export default () => {
  let videos = [
    {userPic: require('../../assets/images/carol_pic.jpg'), user: 'Sweet C...'},
    {userPic: require('../../assets/images/kuster_pic.png'), user: 'Maicon...'},
    {userPic: require('../../assets/images/inutilismo_pic.jpg'), user: 'Inutilistmo' },
    {userPic: require('../../assets/images/froid_pic.jpg'), user: 'Froid'},
    {userPic: require('../../assets/images/kuster_pic.png'), user: 'Froid'},
    {userPic: require('../../assets/images/kuster_pic.png'), user: 'Froid'},
    {userPic: require('../../assets/images/kuster_pic.png'), user: 'Froid'},
  ];

  let all = [
    {img: require('../../assets/images/ff_live.jpg'), title: 'JOÃOZINHOGAMEPLAY13 RUMO AO MESTRE FULL DIMA FREE FIRE ', userPic: require('../../assets/images/ff-Pic.jpg'), user: 'JoÃÃOzINhoGamePLAys13', views: '10 assistindo', date: 'há 1 ano' },
    {img: require('../../assets/images/lillixo_thumb.jpg'), title: 'LIL LIXO - NÃO LIGO PRA VOCÊ [CLIPE OFICIAL]', userPic: require('../../assets/images/kuster_pic.png'), user: 'Maicon Kuster', views: '4 mi de visualizações', date: 'há 2 anos' },
    {img: require('../../assets/images/thumbnail.png'), title: 'teste', user: 'userTeste', userPic: require('../../assets/images/eu.jpeg'), views: '157 mil visualizações', date: 'há 7 meses' },
  ];

    return(
      <Container>
          <Header />
          <SubHeader>
            <Scroll horizontal={true} showsHorizontalScrollIndicator={false}>
              {videos.map((v, k) => (
                <ItemView key={k}>
                    <Img source={v.userPic} />
                    <Texto> {v.user} </Texto>
                </ItemView>
              ))}
            </Scroll>
            <Btn>
              <BtnText> TODOS </BtnText>
            </Btn>
          </SubHeader>

          <SubSubHeader>
            <Scroll horizontal={true} showsHorizontalScrollIndicator={false}>

              <BtnOptions style={{backgroundColor: '#555'}}>
                <BtnOptionsText style={{color: '#fff'}}> Tudo </BtnOptionsText>
              </BtnOptions>
              <BtnOptions>
                <BtnOptionsText> Hoje </BtnOptionsText>
              </BtnOptions>
              <BtnOptions>
                <BtnOptionsText> Continuar assistindo </BtnOptionsText>
              </BtnOptions>
              <BtnOptions>
                <BtnOptionsText> Não assistido </BtnOptionsText>
              </BtnOptions>

            </Scroll>
          </SubSubHeader>

          <Scroll>
          <VideosView>
            {all.map((v, k) => (
              <AllItemView key={k}>
                <VideoImg source={v.img} />
                <ViewRow>
                  <LeftView>
                    <UserPic source={v.userPic} />
                  </LeftView>
                  <RightView>
                    <InfoView>
                      <Title>{v.title}</Title>
                    </InfoView>
                    <SubInfoView>
                      <User>{v.user} - {v.views} </User>
                      
                    </SubInfoView>
                  </RightView>
                </ViewRow>
                
              </AllItemView>
            ))}
          </VideosView>
        </Scroll>

      </Container>
    );
  }