import { unmountComponentAtNode } from "react-dom";
import { screen, render, fireEvent, getByTestId } from '@testing-library/react';
import '@testing-library/jest-dom';
import TourCard from "./tourCard";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

const fakeTour={
    'id': '1234',
    'name': 'fakeTour',
    'image':'fakeImage',
    'description': `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Explicabo, nihil labore sunt quaerat tempora fugit delectus facilis 
                    tempore provident sit quia veniam, nulla repellat amet molestiae fuga ab ipsam dolores.`,
    'price' : 1234,
    'rate': 4

}
describe('Should Render Component Correctly',()=>{
  it('whenRenderes_thenTourDataIsSet',()=>{
    render(<TourCard tour={fakeTour}/>);
    expect(screen.getByRole('img').getAttribute('src')).toEqual('fakeImage');
    expect(screen.getByText(fakeTour.name)).toBeInTheDocument();
    expect(screen.getByText(`${fakeTour.price}$`)).toBeInTheDocument();
    expect(screen.getByText(fakeTour.rate)).toBeInTheDocument();
    expect(screen.getByText(fakeTour.description.substr(0,50))).toBeInTheDocument();

  });
});

describe('Should have more less functionality',()=>{
  it('whenRenderes_thenMoreIsShown',()=>{
    render(<TourCard tour={fakeTour}/>);
    expect(screen.getByText('...more')).toBeInTheDocument();
    expect(screen.getByText('...less').getAttribute("class")).toEqual('less-text');

  });
  it('whenMoreClicked_thenTextIsShown',()=>{
    render(<TourCard tour={fakeTour}/>);
    fireEvent(
      screen.getByTestId('more-span'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    );
    expect(screen.getByText('...more').getAttribute("class")).toEqual('less-text');
    expect(screen.getByText('...less').getAttribute("class")).toContain('more-text');

  });

});
