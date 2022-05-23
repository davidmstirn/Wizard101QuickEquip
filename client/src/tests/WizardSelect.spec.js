import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import WizardSelect from '../routes/WizardSelect.js';

describe('<WizardSelect />', () => {
  describe('clicking the first wizard', () => {
    beforeEach(async () => {
      let wizards = [
        { id: 0, name: "Matthew Firebringer", school: "Fire", level: 150 },
        { id: 1, name: "Artur Lifehaven", school: "Life", level: 150 }
      ]

      render(<BrowserRouter><WizardSelect wizards={wizards} /></BrowserRouter>);
    });

    it('selects the second wizard', () => {
      userEvent.click(screen.getByTestId('wizardOption1'));
      expect(screen.getByTestId('wizardOption1').checked).toEqual(true);
      expect(screen.getByTestId('wizardOption0').checked).toEqual(false);
    });

    it('selects the first wizard', () => {
      userEvent.click(screen.getByTestId('wizardOption0'));
      expect(screen.getByTestId('wizardOption0').checked).toEqual(true);
      expect(screen.getByTestId('wizardOption1').checked).toEqual(false);
    });
  });
});