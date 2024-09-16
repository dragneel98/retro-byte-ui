import { Meta, StoryObj } from '@storybook/react';
import { AdCard } from './adCard';
import imgAd from '/assets/addImage.jpg';  
import adIcon from '/assets/adIcon.jpg';   

const meta: Meta<typeof AdCard> = {
    title: 'Cards/AdCard',
    component: AdCard,
    tags: ['autodocs'],
    args: {
        image: imgAd,
        adIcon: adIcon,
        title: "Ad Card Title",
        description: "This is a description for the ad card.",
        buttonText: "Learn More",
    },
};

export default meta;

type Story = StoryObj<typeof AdCard>;

export const Default: Story = {
    args: {
        image: imgAd,
        adIcon: adIcon,
        title: "Sample Ad Title",
        description: "This is an example description for the ad card.",
        buttonText: "Click Here",
    },
};
