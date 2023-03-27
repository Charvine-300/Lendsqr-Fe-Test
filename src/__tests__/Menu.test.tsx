//jest.mock('react-router-dom', () => require('__mocks__/react-router-dom.mock'));
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

//Mock function for setSidebarToggle hook
const setSidebarToggle = jest.fn(); 

describe('Header', () => {
  test('Check if menu icon is present in component', () => {
    render(<Header sidebarToggle={''} setSidebarToggle={setSidebarToggle} />); //Component to be tested
    const imgElement = screen.getByAltText(/menu/i) as HTMLImageElement; //Searching for an element ot interact with
    expect(imgElement).toBeInTheDocument(); //Assertion of expectation of results of element interaction
  });
  
  test('Check if menu icon changes to close icon and back onclick', async () => {
    render(<Header sidebarToggle={''} setSidebarToggle={setSidebarToggle} />);
    const imgElement = await screen.getByAltText(/menu/i) as HTMLImageElement;

    //Simulate click event on menu icon to change to close icon
    fireEvent.click(imgElement, {target: { alt: 'close' }});
    await waitFor(() => {
      expect(imgElement).toHaveAttribute('alt' , 'close');
    });

    //Simulate click event on close icon to change back to menu icon
    fireEvent.click(imgElement, {target: { alt: 'menu' }});
    await waitFor(() => {
      expect(imgElement).toHaveAttribute('alt' , 'menu');
    });
   
  });
})


describe('Sidebar', () => {
  test('Check if sidebar is present in component', () => {
    render(<Sidebar display='' />);
    const sidebarElement = screen.getByTestId(/sidebar/i) as HTMLDivElement;
    expect(sidebarElement).toBeInTheDocument();
  });
});




