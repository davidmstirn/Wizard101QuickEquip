import {render, screen} from '@testing-library/react';
import WizardBio from '../components/WizardBio.js';

describe('<WizardBio />', () => {
  describe('showing the wizard bio', () => {
    beforeEach(async () => {
      render(<WizardBio level={150} school='Fire' />);
    });

    it('wizard level shows', () => {
      expect(screen.getByTestId('wizardTestLevel')).toHaveTextContent('Paragon (Level 150)');
    });

    it('wizard school shows', () => {
      expect(screen.getByTestId('wizardTestSchool')).toHaveTextContent('Fire');
    });

    it('wizard health shows', () => {
      expect(screen.getByTestId('wizardTestHealth')).not.toHaveTextContent('');
    });

    it('wizard mana shows', () => {
      expect(screen.getByTestId('wizardTestMana')).not.toHaveTextContent('');
    });
  });
});