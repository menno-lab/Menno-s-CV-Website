export function brightenColor(hex: string, brightnessFactor: number) {
    // Ensure the brightness factor is between 0 and 1
    brightnessFactor = Math.max(0, Math.min(1, brightnessFactor));

    // Convert the hex color value to RGB
    let r = parseInt(hex.substring(1, 3), 16);
    let g = parseInt(hex.substring(3, 5), 16);
    let b = parseInt(hex.substring(5, 7), 16);

    // Increase the brightness
    r = Math.min(255, Math.round(r + (255 - r) * brightnessFactor));
    g = Math.min(255, Math.round(g + (255 - g) * brightnessFactor));
    b = Math.min(255, Math.round(b + (255 - b) * brightnessFactor));

    // Convert the RGB values back to a hex value
    let brighterHex = '#' + r.toString(16).padStart(2, '0') + g.toString(16).padStart(2, '0') + b.toString(16).padStart(2, '0');

    return brighterHex;
}
