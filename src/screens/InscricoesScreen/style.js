import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`
export const Scroll = styled.ScrollView``;

export const Texto = styled.Text`
    color: #333;
    font-size: 12px;
    text-align: center;
    margin-top: 5px;
`;
  
export const SubHeader = styled.View`
    flex-direction: row;
    borderBottomWidth: 1px;
    borderBottomColor: #ccc;
    height: 120px;
    align-items: center;
    padding-left: 5px;
`;

export const ItemView = styled.View`
    align-items: center;
    width: 70px;
    margin-left: 2px;
`;

export const Img = styled.Image`
    width: 60px;
    height: 60px;
    border-radius: 100px;
`;

export const Btn = styled.TouchableOpacity`
    width: 70px;
    height: 70px;
    align-items: center;
    justify-content: center;
    padding-bottom: 20px;
`;

export const BtnText = styled.Text`
    font-size: 14px;
    color: #338DFF;
`;

export const SubSubHeader = styled.View`
    height: 60px;
    flex-direction: row;
    align-items: center;
`;

export const BtnOptions = styled.TouchableOpacity`
    background-color: #eee;
    border-radius: 100px;
    padding: 10px;
    margin: 0 0 0 10px;
`;

export const BtnOptionsText = styled.Text`
    font-size: 12px;
`;

export const VideosView = styled.View``;
export const AllItemView = styled.View`
    width: 100%;
    
`;
export const VideoImg = styled.Image`
    width: 100%;
    height: 200px;
`;
export const Title = styled.Text`
    width: 88%;
`;
export const User = styled.Text`
    font-size: 12px;
    color: rgba(0, 0, 0, 0.5);
`;

export const ViewRow = styled.View`
    flex-direction: row;
    height: 108px;
    padding-top: 5px;
`;
export const LeftView = styled.View`
    margin: 10px 0 0 10px;
    width: 10%;
`;
export const RightView = styled.View`
    margin: 10px 0 0 10px;
    width: 90%;
`;

export const InfoView = styled.View`
    width: 100%;
    flex-direction: row;
`;
export const SubInfoView = styled.View`
    flex-direction: row;
    width: 90%;
    flex-wrap: wrap;
`;

export const UserPic = styled.Image`
    width: 40px;
    height: 40px;
    border-radius: 100px;
`;