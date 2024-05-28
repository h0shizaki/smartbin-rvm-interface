import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
} from '@chakra-ui/react'
import {FC} from "react";

interface ConfirmModalProps {
    isOpen:boolean,
    onOpen: () => void,
    onConfirm: () => void,
    onClose: () => void,
    title?: string,
    body?: string,
}

export const ConfirmModal: FC<ConfirmModalProps> = ({isOpen, onOpen, onClose, onConfirm, title="Please Confirm", body="Select Yes or No"}) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{title}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    {body}
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={onConfirm}>
                        Confirm
                    </Button>
                    <Button variant="red" onClick={onClose}>
                        Cancel
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}