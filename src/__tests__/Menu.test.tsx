//jest.mock('react-router-dom', () => require('__mocks__/react-router-dom.mock'));
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Router } from 'react-router-dom';
import React from 'react';

//Mock Component for Router 



test('Check if menu icon is present in component', () => {
  const setSidebarToggle = jest.fn(); 
  render(<Header sidebarToggle={''} setSidebarToggle={setSidebarToggle} />); //Component to be tested
  const imgElement = screen.getByTestId(/menu-icon/i) as HTMLImageElement; //Searching for an element ot interact with
  expect(imgElement).toBeInTheDocument(); //Assertion of expectation of results of element interaction
});


/*it('Sidebar opens and closes on menu icon click in mobile view', () => {
  render(<Sidebar display={''} />);
  const sidebarElement = screen.getByTitle(/sidebar/i) as HTMLDivElement;
  expect(sidebarElement).toBeInTheDocument();

})

//Using findBy and findAllBy queries asynchronously
it('Find DIV element in component asynchronously', async () => {  
  render(<Sidebar display='' />);
  const divElements = await screen.findByTitle(/sidebar/i) as HTMLDivElement;
  expect(divElements).toBeInTheDocument()
})

//Checking for non-existent elements
it('Check for non-existent div element', async () => {  
  render(<Sidebar display='' />);
  const divElements = await screen.queryByTitle(/chocolate-bar/i) as HTMLDivElement;
  expect(divElements).not.toBeInTheDocument()
})*/
