import { atomWithStorage } from 'jotai/utils';
import { atom } from 'jotai';


export const tokenAtom = atomWithStorage('token', null);

export const isConnectAtom = atom((get) => {
    const token = get(tokenAtom);
    return token !== null;
});