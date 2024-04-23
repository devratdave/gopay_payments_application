import { atom } from "recoil";

export const balanceAtom = atom<Number>({
    key: "balance",
    default: 0
})