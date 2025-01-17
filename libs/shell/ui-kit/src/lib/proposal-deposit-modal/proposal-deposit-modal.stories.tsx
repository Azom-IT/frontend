import { Meta, StoryObj } from '@storybook/react';
import { ProposalDepositModal as ProposalDepositModalComponent } from './proposal-deposit-modal';

const meta: Meta<typeof ProposalDepositModalComponent> = {
  component: ProposalDepositModalComponent,
  title: 'shell/ui-kit',
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof ProposalDepositModalComponent>;

export const ProposalDepositModal: Story = {
  args: {
    balance: 250,
    isOpen: true,
  },
};
