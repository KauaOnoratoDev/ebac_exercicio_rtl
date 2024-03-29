import { render, screen } from '@testing-library/react';
import  Post from '.'

describe('Teste para o componente Post', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<Post imageUrl="https://via.placeholder.com/250x250">Teste</Post>)
        expect(screen.getByText('Teste')).toBeInTheDocument()
        expect(screen.getByTestId("post-comments")).toBeInTheDocument()
    });
})