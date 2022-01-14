import { MODAL_SHOW, MODAL_HIDE } from "../constants/action-constants";

export const modalShow = (payload) => ({
    type: MODAL_SHOW,
    payload,
})

export const modalHide = () => ({
    type: MODAL_HIDE,
})
