import { fireEvent, getByTestId, render, screen } from '@testing-library/react';
import PostComment from '.';
const arr = []
describe('Teste para o componente PostComment', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<PostComment />);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Deve adicionar dois comentarios corretamente', () => {
        render(<PostComment />)

        const textArea = screen.getByTestId('text-area')
        const botao = screen.getByTestId('btn-adicionar')

        fireEvent.change(textArea, {
            target: { value: "Comentario 1" },
        })
        fireEvent.click(botao)
        fireEvent.change(textArea, {
            target: { value: "Comentario 2" },
        })
        fireEvent.click(botao)
        
        expect(screen.getAllByTestId("comentario")).toHaveLength(2)
    })
});