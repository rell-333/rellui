import { Modal, ModalCloseContext, type ModalProps } from "./modal"
import { Button } from "./button"
import { useContext, useState, type ReactNode } from "react"

export interface AlertDialogProps {
    isOpen?: ModalProps["isOpen"]
    defaultOpen?: ModalProps["defaultOpen"]
    onOpenChange?: ModalProps["onOpenChange"]
    title: string
    description?: ReactNode
    actionLabel?: string
    cancelLabel?: string
    onAction: () => void | Promise<void>
    isDestructive?: boolean
}

export function AlertDialog({
                                isOpen,
                                defaultOpen,
                                onOpenChange,
                                title,
                                description,
                                actionLabel = "Confirm",
                                cancelLabel = "Cancel",
                                onAction,
                                isDestructive = false,
                            }: AlertDialogProps) {
    const [isActionLoading, setIsActionLoading] = useState(false)

    return (
        <Modal isOpen={isOpen} defaultOpen={defaultOpen} onOpenChange={onOpenChange}>
            <Modal.Backdrop isOpen={isOpen} onOpenChange={onOpenChange}>
                <Modal.Container size="sm">
                    <Modal.Dialog>
                        <Modal.Header>
                            <Modal.Heading>{title}</Modal.Heading>
                        </Modal.Header>
                        {description && <Modal.Body>{description}</Modal.Body>}
                        <Modal.Footer>
                            <AlertDialogActions
                                actionLabel={actionLabel}
                                cancelLabel={cancelLabel}
                                onAction={onAction}
                                isDestructive={isDestructive}
                                isActionLoading={isActionLoading}
                                setIsActionLoading={setIsActionLoading}
                            />
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    )
}

function AlertDialogActions({
                                actionLabel,
                                cancelLabel,
                                onAction,
                                isDestructive,
                                isActionLoading,
                                setIsActionLoading,
                            }: {
    actionLabel: string
    cancelLabel: string
    onAction: () => void | Promise<void>
    isDestructive: boolean
    isActionLoading: boolean
    setIsActionLoading: (v: boolean) => void
}) {
    const close = useContext(ModalCloseContext)

    return (
        <>
            <Button variant="secondary" size="sm" onPress={close}>
                {cancelLabel}
            </Button>
            <Button
                variant={isDestructive ? "danger" : "primary"}
                size="sm"
                isDisabled={isActionLoading}
                onPress={async () => {
                    setIsActionLoading(true)
                    try {
                        await onAction()
                    } finally {
                        setIsActionLoading(false)
                    }
                }}
            >
                {isActionLoading ? "Working…" : actionLabel}
            </Button>
        </>
    )
}