const submitSchemes = {
    button : {
        kind: 'box',
        className: 'btnContainer',
        children: [
            {
                kind: 'button',
                id: 'submitBtn',
                text: 'SUBMIT',
                onClick: 'onSubmit',
            }
        ]
    },
    alert : {
        kind: 'box',
        className: 'alertMsg',
        text: 'required fields not entered'
    }
}