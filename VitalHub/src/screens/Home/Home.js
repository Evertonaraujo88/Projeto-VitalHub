import CalendarList from "../../components/CalendarHome/CalendarHome";
import { Container} from "../../components/Container/Style";
import { Header } from "../../components/Header/Header";

export const Home = ({ navigation }) => {
    return(
        <Container>

            <Header/>

            <CalendarList/>

        </Container>
        
    );
}