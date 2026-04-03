
import { useAtomValue } from 'jotai';

import { Navigate } from 'react-router';
import { isConnectAtom } from '../atoms/auth.atom';

export function ProtectedPage({ children }) {

    const isConnect = useAtomValue(isConnectAtom);

    if(!isConnect) {
        return <Navigate to='/auth/login' replace />
    }

    return children;
}