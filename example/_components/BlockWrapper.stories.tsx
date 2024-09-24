import {HotkeyWrapper} from '@acrool/react-hotkey';
import {Flex} from '@acrool/react-grid';
import type {Meta, StoryObj} from '@storybook/react';
import {createElement} from 'react';

import Loader from '../src/components/Loader';



const meta = {
    title: 'Components/HotkeyWrapper',
    component: HotkeyWrapper,
    parameters: {
        layout: 'centered',
        actions: {argTypesRegex: '^on.*'},
        docs: {
            description: {
                component: 'Custom skeleton by component'
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {
        message: 'loading...'
    },
} satisfies Meta<typeof HotkeyWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;




export const Primary: Story = {
    args: {},
    render: function Render(args) {

        return <Flex className="gap-2" style={{background: '#000'}}>
            <HotkeyWrapper {...args}/>
        </Flex>;
    },
};


export const WithRenderLoader: Story = {
    args: {},
    render: function Render(args) {

        return <Flex className="gap-2" style={{background: '#000'}}>
            <HotkeyWrapper
                {...args}
                renderLoader={() => createElement(Loader, {width: '30px', height: '30px'}, null)}
            />
        </Flex>;
    },
};
