import styled from 'styled-components/native'

export const Container = styled.View`
    flex:1;

`

export const Header = styled.View`
    width: 100%;
    height: 15%;
    background-color: ${({ theme }) => theme.colors.primary};
    background-color: #2b7be3;

    padding-top: 12px;
    
    align-items: center;
    justify-content: center;

    
`

export const HeaderTitle = styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium};
     font-size: 16px;
     color: ${({ theme }) => theme.colors.shape};
`
export const Content = styled.View`
    width: 100%;
`

export const TitleForm = styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: 18px;
    color: ${({ theme }) => theme.colors.title};

    align-self: center;
    margin-bottom: 10px;
`
export const SubTitleForm = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 14px;
    color: ${({ theme }) => theme.colors.title};

    align-self: center;
    margin-bottom: 10px;
`
