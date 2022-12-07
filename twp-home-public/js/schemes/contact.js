// contact 페이지 요소
const contact = {
    wrap: {
        kind: 'box',
        className: 'contactFormWrap',
        style: {
            background: '#f5f5f5',
            width: '100%',
            paddingBottom: 150
        }
    },
    form: {
        kind: 'form',
        className: 'contact-form',
        style: {
            width: '90%',
            margin: '0px auto',
            maxWidth: 825,
            padding: 20,
            display: 'grid',
            gridColumnGap: '16px',
            justifyItems: 'center',
            gridTemplateColumns: 'repeat(12, 1fr)',
        }
    },
    head: {
        kind: 'h2',
        style: {
            fontWeight: 'bold',
            padding: 30,
            fontSize: '2.5em',
            textAlign: 'center',
            marginTop: 30,
            // color: homepage.keyColor
        }
    },
    inputField: {
        kind: 'box',
        style: {
            textAlign: 'left'
        },
        children: [
            {
                kind: 'label',
                children: [
                    {
                        kind: 'span',
                        className: 'required',
                        text: '',
                        style:{
                            color: 'red',
                            marginLeft: 5
                        }
                    }
                ]
            },
            {
                kind: 'input'
            }
        ]
    },
    textareaField: {
        kind: 'box',
        style: {
            textAlign: 'left'
        },
        children: [
            {
                kind: 'label',
                children: [
                    {
                        kind: 'span',
                        className: 'required',
                        text: '*',
                        style:{
                            color: 'red',
                            marginLeft: 5
                        }
                    }
                ]
            },
            {
                kind: 'textarea'
            }
        ]
    },
    submitButton: {
        kind: 'input',
        className: 'submitButton',
        type: 'button',
        text: 'Submit',
    }
};