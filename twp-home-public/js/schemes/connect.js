// contact 배너 요소
const connect = {
    wrap: {
        kind: 'box',
        className: 'connectWrap',
        children: [
            {
                kind: 'box',
                style: {
                    marginBottom: 20
                },
                children: [
                    {
                        kind: 'h4', //
                        text: 'Ready to get started?'
                    },
                    {
                        kind: 'h4',
                        text: 'Contact our team.',
                        style: {
                            marginTop: 10
                        }
                    }
                ]
            },
            {
                kind: 'a',
                text: 'Get In Touch',
            }
            
        ]
    },
};
