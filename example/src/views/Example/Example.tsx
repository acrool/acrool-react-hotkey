import {hotkey} from '@acrool/react-hotkey';
import AcroolTable from '@acrool/react-table';


const Example = () => {


    return <div style={{display: 'flex', gap: '10px', alignItems: 'flex-start', width: '100%'}}>

        <AcroolTable
            isDark
            isVisiblePaginate={false}
            tableCellMediaSize={768}
            gap="10px"
            title={{
                name: {text: 'Name', col: '450px'},
                use: {text: 'Use', col: true},
            }}
            data={[
                {
                    id: 1,
                    onClickRow: () => {
                        hotkey.show();
                        // setTimeout(() => hotkey.hide(), 3000);
                    },
                    field: {
                        name: 'Default',
                        use: 'hotkey.show()',
                    }
                },
                {
                    id: 2,
                    onClickRow: () => {
                        hotkey.show({message: 'Loading and close after 3 seconds ...'});
                        setTimeout(() => hotkey.hide(), 3000);
                    },
                    field: {
                        name: 'Custom Message',
                        use: 'hotkey.show({message: \'Loading and close after 3 seconds ...\'})',
                    }
                },
                {
                    id: 3,
                    onClickRow: () => {
                        hotkey.show({message: 'Call shown 1'});

                        setTimeout(() => hotkey.show({message: 'Call shown 2'}), 1000);
                        setTimeout(() => hotkey.show({message: 'Call shown 3'}), 2000);

                        setTimeout(() => hotkey.hide(), 3000);
                        setTimeout(() => hotkey.hide(), 4000);
                    },
                    field: {
                        name: 'Call shown 3 times but hide 2 time',
                        use: '',
                    }
                },
                {
                    id: 4,
                    onClickRow: () => {
                        hotkey.show({message: 'Call shown 1'});

                        setTimeout(() => hotkey.show({message: 'Call shown 2'}), 1000);
                        setTimeout(() => hotkey.show({message: 'Call shown 3'}), 2000);

                        setTimeout(() => hotkey.hide(), 3000);
                        setTimeout(() => hotkey.hide(), 4000);
                        setTimeout(() => hotkey.hide(), 5000);
                    },
                    field: {
                        name: 'Call shown 3 times but hide 3 time',
                        use: '',
                    }
                },
                {
                    id: 5,
                    onClickRow: () => {
                        hotkey.show({message: 'Call shown 1'});
                        hotkey.show({message: 'Call shown 2'});
                        hotkey.show({message: 'Call shown 3'});

                        hotkey.hide();

                        setTimeout(() => {
                            hotkey.hide();
                            hotkey.hide();
                        }, 3000);
                    },
                    field: {
                        name: 'Call shown 3 times but hide 3 time and same time',
                        use: '',
                    }
                },
                {
                    id: 6,
                    onClickRow: () => {
                        hotkey.show({message: 'Call shown 1'});
                        hotkey.show({message: 'Call shown 2'});
                        hotkey.show({message: 'Call shown 3', queueKey: 'call1'});

                        setTimeout(() => {
                            hotkey.hide('call1');
                        },1000);

                        setTimeout(() => {
                            hotkey.hide();
                            hotkey.hide();
                        }, 3000);
                    },
                    field: {
                        name: 'Call shown queueKey hide sort',
                        use: '',
                    }
                },


            ]}

        />


    </div>;
};

export default Example;




