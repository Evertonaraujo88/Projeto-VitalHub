import styled, { css } from "styled-components";

//Componente de botao - ButtonTabsStyle
export const ButtonTabsStyle = styled.TouchableHighlight`
  padding: 12px 14px;
  border-radius: 5px;

    /* se o botao estiver clicado, aplica-se o fundo azul, caso contrario, fundo transparente */
  ${(props) =>
    props.clickButton
      ? css`
          background-color: #496bba;
        `
      : css`
          background-color: transparent;
          border: 2px solid #607ec5;
        `}
`

export const ButtonTextStyle = styled.Text`
    font-size: 12px;
    font-family: MontserratAlternates_600SemiBold;

    /* se o clickButton for true a cor da fonte sera branca, scaso contratio ficara azul */
    ${(props) =>
    props.clickButton
      ? css`
          color: #fbfbfb;
        `
      : css`
          color: #607ec5;
          
        `}

`
