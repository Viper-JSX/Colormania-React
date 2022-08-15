import { ChangeColorModePayload } from "../typescript/types";
import { CHANGE_COLOR_MODE } from "./action_types";

export function chnageColorMode (payload: ChangeColorModePayload):any{
    return function(dispath : any): void{
        dispath({ type: CHANGE_COLOR_MODE, payload });
    }
}