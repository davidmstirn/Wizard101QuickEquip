import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'
import MyRouter from '../routes/MyRouter.js';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

describe('<WizardSelect />', () => {
  describe('clicking wizards', () => {
    beforeEach(() => {
      const history = createMemoryHistory();
      history.push('/select');
      render(
        <Router location={history.location} navigator={history}>
          <MyRouter />
        </Router>
      );
    });

    it('renders wizard selector', () => {
      expect(screen.getByTestId('wizardShow').textContent).toBe('Show');
      expect(screen.getByTestId('wizardEdit').textContent).toBe('Edit');
    });

    it('selects the second wizard', () => {
      userEvent.click(screen.getByTestId('wizardOption1'));
      expect(screen.getByTestId('wizardOption1').checked).toBe(true);
      expect(screen.getByTestId('wizardOption0').checked).toBe(false);
    });

    it('first wizard already selected', () => {
      userEvent.click(screen.getByTestId('wizardOption0'));
      expect(screen.getByTestId('wizardOption0').checked).toBe(true);
      expect(screen.getByTestId('wizardOption1').checked).toBe(false);
    });

    it('selects the second wizard, then the first, then the second again', () => {
      userEvent.click(screen.getByTestId('wizardOption1'));
      expect(screen.getByTestId('wizardOption1').checked).toBe(true);
      expect(screen.getByTestId('wizardOption0').checked).toBe(false);

      userEvent.click(screen.getByTestId('wizardOption0'));
      expect(screen.getByTestId('wizardOption0').checked).toBe(true);
      expect(screen.getByTestId('wizardOption1').checked).toBe(false);
      
      userEvent.click(screen.getByTestId('wizardOption1'));
      expect(screen.getByTestId('wizardOption1').checked).toBe(true);
      expect(screen.getByTestId('wizardOption0').checked).toBe(false);
    });
  });
});
