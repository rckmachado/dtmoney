import { Summary } from "../components/Summary";
import { TransactionTable } from "../components/TransactionTable";
import { Container } from "./styles";

export function Dashboard() {
    return (
        <Container>
            <Summary />
            <TransactionTable />
        </Container>
    );
}