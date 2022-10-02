import { TitleTable, Container, Th, Td, TableContent } from './Table.styles';

export function Table({ dataTable }) {

    return (
        <>
            <TitleTable>Lista de cadastro</TitleTable>
            <Container>
                <TableContent>
                    <thead>
                        <tr>
                            <Th style={{ borderLeft: '0' }}></Th>
                            <Th >NOME</Th>
                            <Th >EMAIL</Th>
                            <Th >NASCIMENTO</Th>
                            <Th style={{ borderRight: '0' }}>TELEFONE</Th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataTable.map((user, index) => (
                            <tr key={index}>
                                <Td style={{ borderLeft: '0' }}>{index + 1}</Td>
                                <Td >{user.name}</Td>
                                <Td >{user.email}</Td>
                                <Td >{user.nascimento}</Td>
                                <Td style={{ borderRight: '0' }}>{user.telefone}</Td>
                            </tr>
                        ))}
                        {dataTable.length <= 3 && (
                            <>
                                <tr>
                                    <Td style={{ borderLeft: '0' }}>{dataTable.length + 1}</Td>
                                    <Td style={{ borderRight: '0' }}></Td>
                                    <Td style={{ borderRight: '0' }}></Td>
                                    <Td style={{ borderRight: '0' }}></Td>
                                    <Td style={{ borderRight: '0' }}></Td>
                                </tr>
                                <tr>
                                    <Td style={{ borderLeft: '0' }}>{dataTable.length + 2}</Td>
                                    <Td style={{ borderRight: '0' }}></Td>
                                    <Td style={{ borderRight: '0' }}></Td>
                                    <Td style={{ borderRight: '0' }}></Td>
                                    <Td style={{ borderRight: '0' }}></Td>
                                </tr>
                                <tr>
                                    <Td style={{ borderLeft: '0', borderBottom: '0' }}>{dataTable.length + 3}</Td>
                                    <Td style={{ borderRight: '0', borderBottom: '0' }}></Td>
                                    <Td style={{ borderRight: '0', borderBottom: '0' }}></Td>
                                    <Td style={{ borderRight: '0', borderBottom: '0' }}></Td>
                                    <Td style={{ borderRight: '0', borderBottom: '0' }}></Td>
                                </tr>

                            </>
                        )}
                    </tbody>
                </TableContent>
            </Container>
        </>
    )
}