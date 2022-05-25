import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom';
import WizardSelect from '../routes/WizardSelect.js';

describe('<WizardSelect />', () => {
  describe('clicking the first wizard', () => {
    const mockCallback = jest.fn(x => x);
    beforeEach(async () => {
      let wizards = [
        { id: 0, name: "Matthew Firebringer", school: "Fire", level: 150 },
        { id: 1, name: "Artur Lifehaven", school: "Life", level: 150 }
      ]
      
      render(<BrowserRouter><WizardSelect wizards={wizards} setSelectedWizard={mockCallback} /></BrowserRouter>);
    });

    it('selects the second wizard', () => {
      userEvent.click(screen.getByTestId('wizardOption1'));
      expect(mockCallback.mock.calls.length).toBe(1);
      expect(mockCallback.mock.calls[0][0]).toBe(1);
    });

    it('selects the first wizard', () => {
      userEvent.click(screen.getByTestId('wizardOption0'));
      expect(mockCallback.mock.calls.length).toBe(1);
      expect(mockCallback.mock.calls[0][0]).toBe(0);
    });

    it('selects the first wizard, then the second, then the first again', () => {
      userEvent.click(screen.getByTestId('wizardOption0'));
      userEvent.click(screen.getByTestId('wizardOption1'));
      userEvent.click(screen.getByTestId('wizardOption0'));
      expect(mockCallback.mock.calls.length).toBe(3);
      expect(mockCallback.mock.calls[0][0]).toBe(0);
      expect(mockCallback.mock.calls[1][0]).toBe(1);
      expect(mockCallback.mock.calls[2][0]).toBe(0);
    });
  });
});