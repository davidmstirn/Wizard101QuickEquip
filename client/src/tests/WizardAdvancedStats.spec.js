import {render, screen} from '@testing-library/react';
import { WizardAdvancedStatsPage } from '../components/WizardAdvancedStatsPage';

describe('<WizardAdvancedStatsPage />', () => {
  describe('showing the wizard advanced stats (page 1)', () => {
    beforeEach(async () => {
      let wizard = { id: 0, name: "Matthew Firebringer", school: "Fire", level: 150,
      damage: [150, 9, 9, 0, 0, 0, 0, 4],
      damageFlat: [20, 0, 0, 0, 0, 0, 0, 0],
      resist: [23, 23, 23, 23, 23, 23, 23, 23],
      resistFlat: [0, 0, 101, 0, 0, 0, 0, 0],
      accuracy: [40, 6, 6, 0, 0, 0, 0, 0],
      critical: [700, 90, 90, 0, 0, 0, 0, 0],
      block: [200, 220, 230, 200, 200, 200, 200, 200],
      pierce: [21, 0, 0, 0, 0, 0, 0, 0],
      stunResist: 5,
      healing: [23, 16] }
      
      render(<WizardAdvancedStatsPage wizard={wizard} page='1' />);
    });

    it('wizard 1st critical displayed', () => {
      expect(screen.getByTestId('wizardTestCritical0')).toHaveTextContent('700');
    });

    it('wizard 4th critical empty', () => {
      expect(screen.getByTestId('wizardTestCritical3')).toHaveTextContent('');
    });

    it('wizard 2nd block displayed', () => {
      expect(screen.getByTestId('wizardTestBlock1')).toHaveTextContent('220');
    });

    it('wizard 3rd block displayed', () => {
      expect(screen.getByTestId('wizardTestBlock2')).toHaveTextContent('230');
    });

    it('wizard 5th pierce empty', () => {
      expect(screen.getByTestId('wizardTestPierce4')).toHaveTextContent('');
    });

    it('wizard 6th pierce empty', () => {
      expect(screen.getByTestId('wizardTestPierce5')).toHaveTextContent('');
    });

    it('wizard stun resist displayed', () => {
      expect(screen.getByTestId('wizardTestStunResist')).toHaveTextContent('5%');
    });

    it('wizard incoming healing displayed', () => {
      expect(screen.getByTestId('wizardTestIncoming')).toHaveTextContent('23%');
    });

    it('wizard outgoing healing displayed', () => {
      expect(screen.getByTestId('wizardTestOutgoing')).toHaveTextContent('16%');
    });
  });

  describe('showing the wizard advanced stats (page 2)', () => {
    beforeEach(async () => {
      let wizard = { id: 0, name: "Matthew Firebringer", school: "Fire", level: 150,
      damage: [150, 9, 9, 0, 0, 0, 0, 4],
      damageFlat: [20, 0, 0, 0, 0, 0, 0, 0],
      resist: [23, 23, 23, 23, 23, 23, 23, 23],
      resistFlat: [0, 0, 101, 0, 0, 0, 0, 0],
      accuracy: [40, 6, 6, 0, 0, 0, 0, 0],
      critical: [700, 90, 90, 0, 0, 0, 0, 0],
      block: [200, 220, 230, 200, 200, 200, 200, 200],
      pierce: [21, 0, 0, 0, 0, 0, 0, 0],
      stunResist: 5,
      healing: [23, 16],
      pipConversion: [600, 200, 200, 110, 110, 110, 110, 0],
      powerPip: 99,
      shadowPip: 120 }
      
      render(<WizardAdvancedStatsPage wizard={wizard} page='2' />);
    });

    it('wizard 1st pip conversion displayed', () => {
      expect(screen.getByTestId('wizardTestPipConversion0')).toHaveTextContent('600');
    });

    it('wizard 8th pip conversion empty', () => {
      expect(screen.getByTestId('wizardTestPipConversion7')).toHaveTextContent('');
    });

    it('wizard power pip displayed', () => {
      expect(screen.getByTestId('wizardTestPowerPip')).toHaveTextContent('99%');
    });

    it('wizard shadow pip displayed', () => {
      expect(screen.getByTestId('wizardTestShadowPip')).toHaveTextContent('120');
    });
  });
});