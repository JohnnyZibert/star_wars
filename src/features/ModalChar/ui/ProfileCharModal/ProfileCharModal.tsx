import { Suspense } from 'react';
import { Modal } from 'src/shared/ui/Modal/Modal';
import { Loader } from 'src/shared/ui/Loader/Loader';
import { ProfileCharAsync } from '../PofileChar/ProfileChar.async';

interface IProfileCharModal {
    isOpen: boolean;
    onClose: () => void;
}

export const ProfileCharModal = ({ isOpen, onClose }: IProfileCharModal) => (
    <Modal
        isOpen={isOpen}
        onClose={onClose}
        lazy
        data-testid="profile"
    >
        <Suspense fallback={<Loader />}>
            <ProfileCharAsync />
        </Suspense>
    </Modal>
);
