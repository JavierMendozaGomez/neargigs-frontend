const INITIAL_STATE = {
    collection: [
        {
            id: '1',
            title:'The Buzzards'
        },
        {
            id: '2',
            title: 'System of a down'
        },
        {
            id: '3',
            title: 'The strokes'
        }
    ]
};

const ConcertsOverview = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default ConcertsOverview;