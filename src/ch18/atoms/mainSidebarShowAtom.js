import { atom } from "recoil";

export const mainSidebarShowAtom = atom({
    key: "mainSidebarShowState",        // key 여기서 key는 쓸 일은 없지만 형식상 적어놓는 것
    default: false                      // value
});