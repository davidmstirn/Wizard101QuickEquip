import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import WizardSelect from '../components/WizardSelect.js';

describe('<WizardSelect />', () => {
  describe('clicking the first wizard', () => {
    beforeEach(async () => {
      let wizards = [
        { name: "Matthew Firebringer", school: "Fire", level: 150 }
      ]

      render(<WizardSelect wizards={wizards} />);

      userEvent.click(screen.getByTestId('wizardOption0'));
    });

    it('selects the wizard', () => {
      expect(screen.getByTestId('wizardOption0').checked).toEqual(true);
    });
  });
});