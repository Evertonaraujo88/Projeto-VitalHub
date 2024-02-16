import { Container } from "../Container/Style";
import { InputPerfil } from "../Input/Style";
import { Label } from "../Label/Label";

export const BoxInput = () => ({
    textLable,
    placeHolder,
}) =>{
  return (
    <Container>
      <Label 
      textLabel={textLable}
      
      />

      <InputPerfil 
      placeHolder= {placeHolder}
      
      />
    </Container>
  )
}
