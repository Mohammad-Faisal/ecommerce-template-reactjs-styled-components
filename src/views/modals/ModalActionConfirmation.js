import React, {useState} from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

export default function ModalActionConfirmation  (props) {

    const [open , setOpen] = useState(false);
    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);

    return <Modal open={open} trigger={<Button secondary onClick={openModal}>{props.actionName}</Button>} basic size='small'>
        <Header icon='archive' content='Are you sure ?' />
        <Modal.Content>
            <p>{props.message}</p>
        </Modal.Content>
        <Modal.Actions>
            <Button basic color='red' inverted onClick={closeModal}>
                <Icon name='remove' /> No
            </Button>
            <Button color='green' inverted onClick={() => {
                closeModal();
                props.onConfirm();
            }}>
                <Icon name='checkmark' /> Yes
            </Button>
        </Modal.Actions>
    </Modal>
}

