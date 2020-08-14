import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
`

export const Scroll = styled.ScrollView``;

export const VideosView = styled.View``;
export const ItemView = styled.View`
    width: 100%;
    borderTopWidth: 1px;
    borderTopColor: #ccc;

`;
export const Img = styled.Image`
    width: 100%;
`;
export const Title = styled.Text`
    width: 80%;
`;
export const User = styled.Text`
    font-size: 12px;
    color: rgba(0, 0, 0, 0.5);
`;
export const Date = styled.Text`
    font-size: 12px;
    color: rgba(0, 0, 0, 0.5);
`;
export const Views = styled.Text`
    font-size: 12px;
    color: rgba(0, 0, 0, 0.5);
`;
export const Texto = styled.Text`
    font-size: 10px;
    color: rgba(0, 0, 0, 0.5);
    margin-bottom: 10px;
`;
  
export const ViewRow = styled.View`
    flex-direction: row;
    height: 100px;
    align-items: flex-start;
`;
export const LeftView = styled.View`
    margin: 10px 0 0 10px;
`;
export const RightView = styled.View`
    margin: 10px 0 0 10px;
`;

export const SubInfoView = styled.View`
    flex-direction: row;
    width: 80%;
    flex-wrap: wrap;
`;

export const DotView = styled.View`
    height: 3px;
    width: 3px;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.5);
    margin-right: 20px;
`;