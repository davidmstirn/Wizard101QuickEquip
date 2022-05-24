import {render, screen} from '@testing-library/react';
import WizardBasicStats from '../components/WizardBasicStats';

describe('<WizardBasicStats />', () => {
  describe('showing the wizard basic stats', () => {
    beforeEach(async () => {
      render(<WizardBasicStats
        damage={[150, 9, 9, 0, 0, 0, 0, 4]}
        damageFlat={[20, 0, 0, 0, 0, 0, 0, 0]}
        resist={[23, 23, 23, 0, 0, 0, 0, 0]}
        resistFlat={[0, 0, 101, 0, 0, 0, 0, 0]}
        accuracy={[40, 6, 6, 0, 0, 0, 7, 0]} />);
    });

    it('wizard 1st damage displayed', () => {
      expect(screen.getByTestId('wizardTestDamage0')).toHaveTextContent('150');
    });

    it('wizard 4th damage empty', () => {
      expect(screen.getByTestId('wizardTestDamage3')).toHaveTextContent('');
    });

    it('wizard 1st flat damage displayed', () => {
      expect(screen.getByTestId('wizardTestFlatDamage0')).toHaveTextContent('20');
    });

    it('wizard 6th flat damage empty', () => {
      expect(screen.getByTestId('wizardTestFlatDamage5')).toHaveTextContent('');
    });

    it('wizard 1st resist displayed', () => {
      expect(screen.getByTestId('wizardTestResist0')).toHaveTextContent('23');
    });

    it('wizard 5th resist empty', () => {
      expect(screen.getByTestId('wizardTestResist4')).toHaveTextContent('');
    });

    it('wizard 3rd flat resist displayed', () => {
      expect(screen.getByTestId('wizardTestFlatResist2')).toHaveTextContent('101');
    });

    it('wizard 2nd flat resist empty', () => {
      expect(screen.getByTestId('wizardTestFlatResist1')).toHaveTextContent('');
    });

    it('wizard 7th accuracy displayed', () => {
      expect(screen.getByTestId('wizardTestAccuracy6')).toHaveTextContent('7');
    });

    it('wizard 8th accuracy empty', () => {
      expect(screen.getByTestId('wizardTestAccuracy7')).toHaveTextContent('');
    });
  });
});