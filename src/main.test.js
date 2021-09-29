import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Main from './main';

jest.mock("./data", () => {
    return {data:{'tour1':{
        'id': 'uuid',
        'name': 'Hello',
        'image':'/assets/image/istanbul.jpg',
        'description': `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Explicabo, nihil labore sunt quaerat tempora fugit delectus facilis 
                        tempore provident sit quia veniam, nulla repellat amet molestiae fuga ab ipsam dolores.`,
        'price' : 1234,
        'rate': 5
    }}};
  });

test('should have title correctly', () => {
    const{getByText}=render(<Main />);
    expect(getByText('Our Tours')).toBeInTheDocument();
});

test('should render tour component', () => {
    render(<Main />);
    expect(screen.getByText('Hello')).toBeInTheDocument();

});



