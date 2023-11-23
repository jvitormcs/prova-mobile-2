import styled from "styled-components/native";
import { Colors } from "../../config/Colors";

export const Container = styled.View`
  flex: 1;
  background-color: ${Colors.background};
`;

export const ImageContainer = styled.Pressable``;

export const Image = styled.Image`
  width: 180px;
  height: 147px;
`;

export const ViewInput = styled.View`
  width: 90%;
  justify-content: space-between;
  align-self: center;
  margin-top: 10px;
`;

export const ViewContent = styled.View`
  flex: 1;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const AreaInputButton = styled.View`

width: 100%;
display: flex;
justify-content: center;
align-items: center;

`

export const DolarArea = styled.View`
  background-color: ${Colors.outlineColor};
  width: 80%;
  height: 70px;
  display: flex;
  justify-content: center;
  border-radius: 15px;
  align-items: center;
`;

export const DolarRow = styled.View`

flex-direction: row;

`

export const DolarInfo = styled.Text`
  font-size: 16px;
`;

export const DolarResult = styled.Text`
  font-size: 16px;
`;

export const CircleButton = styled.TouchableOpacity`
  align-self: flex-end;
  margin-right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.outlineColor};

`

export const ModalTextArea = styled.View`

height: 60px;
justify-content: space-evenly;

`

export const ModalTitle = styled.Text`

font-size: 16px;
font-weight: 600;

`

export const ModalInfo = styled.Text``

export const Pressable = styled.Pressable`
margin-top: 10px;
align-self: center;

`
export const TextModalButton= styled.Text``