import React, {useState} from 'react'
import { TextInput, HelperText } from 'react-native-paper'
import { Container, Label } from './styled'
import { Colors } from '../../config/Colors'


export default ( {
onFocus,
contextMenuHidden,
onKeyPress,
label,
value,
onChangeText,
HelpText,
visible,
children,
keyboardType,
onBlur,
onEndEditing,
onPressIn,
maxLength,
disabled,
onChange
} ) => {
    return(
        <Container>
                <TextInput

                    onFocus={onFocus}
                    onKeyPress={onKeyPress}
                    contextMenuHidden={contextMenuHidden}
                    mode='outlined'
                    placeholderTextColor={'#f9f9f9'}
                    activeOutlineColor={Colors.outlineActive}
                    outlineColor={Colors.outline}
                    keyboardType={keyboardType}
                    maxLength={maxLength}
                    onBlur={onBlur}
                    disabled={disabled}
                    outlineStyle={{
                        height: 55,
                        borderRadius: 30,
                        elevation: 5,
                        borderColor: children !== undefined ? Colors.errorOutline : Colors.outlineColor
                    }}
                    onChange={onChange}
                    style={{
                        backgroundColor: `${Colors.inputBackground}`,
                        paddingLeft: 10,
                    }}
                    contentStyle={{
                        color: '#f9f9f9'
                    }}
                    label={<Label>{label}</Label>}
                    value={value}
                    onChangeText={onChangeText}
                />
                {
                    HelpText === true && (
                        <HelperText type='error' style={{color: Colors.errorOutline, paddingTop: 20}} visible={visible} children={children} />
                    )
                }
        </Container>
    )

}