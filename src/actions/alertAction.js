import { ALERT_TEXT_ADD } from "../constants/action-constants";

export const alertText = (payload) => ({
    type: ALERT_TEXT_ADD,
    payload,
})