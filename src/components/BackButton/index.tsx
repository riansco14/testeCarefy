import React from 'react'

import {Container} from './styles'
import { MaterialIcons } from '@expo/vector-icons'
import { useTheme } from 'styled-components'
import { BorderlessButtonProps } from 'react-native-gesture-handler'

interface Props extends BorderlessButtonProps{
    color?: string
}

export function BackButton({ color, ...rest }: Props) {
    const theme = useTheme()
    return (
        <Container {...rest}>
            <MaterialIcons
                name="chevron-left"
                size={30}
                color={color? color : theme.colors.shape}
            
            />
        </Container>
    )
}