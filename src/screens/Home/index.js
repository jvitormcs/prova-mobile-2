import { StatusBar } from 'expo-status-bar';
import { Alert, Keyboard, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Formik } from 'formik';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { InputValidation } from '../../validation/InputValidate';
import { AreaInputButton, CircleButton, Container, DolarArea, DolarInfo, DolarResult, DolarRow, Image, ImageContainer, ModalInfo, ModalTextArea, ModalTitle, Pressable, TextModalButton, ViewContent, ViewInput } from './styled';
import CustomInput from '../../components/CustomInput';
import principalImage from '../../../assets/PrincipalImage.png'
import NetInfo from "@react-native-community/netinfo";
import { Modal, ModalContent } from 'react-native-modals'
import api from '../../services/api';
export default () => {

  const [fields, setFields] = useState({
    valueReal: ''
  })

  const [modalVisible, setModalVisible] = useState(false)

  const formInitialValues={
    valueReal: ''
  }

  const [dolar, setDolar] = useState(0)
  const [result, setResult] = useState(0)
  const [processing, setProcessing] = useState(false)

  const handleDolarInfo = async (real) => {
    setProcessing(true)
      Keyboard.dismiss()
      const res = await api.getInfoDolar()

      console.log(res)
      setDolar(Number(res?.USDBRL?.bid)?.toFixed(2))
      setResult(Number(real / res?.USDBRL?.bid)?.toFixed(2))
      setProcessing(false)


  }

  useEffect(() => {

    NetInfo.fetch().then(state => {
      console.log("Tipo de conexão", state.type);
      console.log("Está conectado?", state.isConnected);
      if(!state.isConnected)setModalVisible(true)
      
    });

  }, [])

  return (
    <Container >
     
      <Modal visible={modalVisible} onTouchOutside={() => setModalVisible(false)}>
        <ModalContent>
              <ModalTextArea>

            <ModalTitle>Atenção</ModalTitle>

            <ModalInfo>Parece que você está tentando acessar sem internet</ModalInfo>
              </ModalTextArea>
            <Pressable onPress={() => setModalVisible(false)}>
              <TextModalButton>Ok</TextModalButton>
            </Pressable>
        </ModalContent>
      </Modal>

      <Formik 
      validationSchema={InputValidation}
      initialValues={ formInitialValues}
      onSubmit={(values) => {
        handleDolarInfo(values?.valueReal)
      }}
      >
        {({handleBlur, handleChange, handleSubmit, isValid, errors, values, resetForm}) => (
            <ViewContent>
                 <ImageContainer onLongPress={()=>{
                   resetForm()
                    setDolar(0)
                    setResult(0)
                 }
                  }>
                  <Image source={principalImage} />
                 </ImageContainer>
      <StatusBar style="light" />
            <AreaInputButton>
            <ViewInput>
            <CustomInput
            contextMenuHidden={true}
            label={'Valor em real'}
            value={values?.valueReal}
            
            onChangeText={handleChange('valueReal')}
            HelpText
            keyboardType={'decimal-pad'}
            children={errors?.valueReal}
            visible={true}
            />
        </ViewInput>
            
              {
                !processing ? (
                  <DolarArea >
                  <DolarRow>

                <DolarInfo>Cotação do dólar Atual: </DolarInfo>
                <DolarInfo>{dolar}</DolarInfo>
              </DolarRow>
                {
                  result > 0 && (
                    
                    <DolarResult>{result}</DolarResult>
                    )
                  }
            </DolarArea>
                ) : (
                  <DolarArea >

<DolarInfo>Cotação do dólar Atual: </DolarInfo>
               </DolarArea>
                )

              }
            </AreaInputButton>

            <CircleButton onPress={handleSubmit} >
            <MaterialCommunityIcons name="arrow-left-top" size={24} color="#f9f9f9" />
            </CircleButton>
            </ViewContent>
)}

      </Formik>

    </Container>
  );
}
