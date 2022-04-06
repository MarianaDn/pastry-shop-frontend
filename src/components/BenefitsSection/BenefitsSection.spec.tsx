import { render, screen } from '@testing-library/react';
import { BenefitsSection } from './BenefitsSection';

describe('<StyledGrid />', () => {
  it('should renders benefits section', () => {
    render(<BenefitsSection />);

    const section = screen.getByTestId('benefitsSection');

    expect(section).toBeInTheDocument();
  });
});
