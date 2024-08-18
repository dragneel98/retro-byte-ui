// import { Meta, StoryObj } from '@storybook/react';
// import imgAd from '/assets/addImage.jpg';
// import { AdCard } from './adCart';

// const meta: Meta<typeof AdCard> = {
//     title: 'Cards/AdCard',
//     component: AdCard,
//     tags: ['autodocs'],
//     args: {
//         image: "https://picsum.photos/seed/picsum/800/600",
//         title: "Sample Ad Title",
//         description: "This is a sample description for the ad.",
//     },
// };

// export default meta;

// type Story = StoryObj<typeof AdCard>;

// export const Default: Story = {
//     args: {
//         image: imgAd,
//         title: "Ad Card Example",
//         description: "This is an example of an ad card component.",
//     },
// };

import { Meta, StoryObj } from '@storybook/react';
import { AdCard } from './adCard';
import imgAd from '/assets/addImage.jpg';  // Asegúrate de que la ruta sea correcta
import adIcon from '/assets/adIcon.jpg';    // Asegúrate de que la ruta sea correcta

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
