import { BaseAI } from '../../common/baseAI.mjs';

export class SnapAiBase extends BaseAI {
    constructor() {
        super();
        // Delay before AI calls snap
        this.snapDelay = null;
        // Chance the AI will correctly call Snap
        this.snapChance = null;
        // Chance on every turn that the AI will wrongly call Snap
        this.wrongSnap = null;
    }
};
