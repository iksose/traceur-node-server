export const fpRatio = Math.PI * 9.23 / 0.7734;

export function facePalmFactor(embarrassmentLevel, handSize) {
    return embarrassmentLevel / handSize * fpRatio;
}
