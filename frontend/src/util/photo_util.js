const arrayBufferToBase64 = (buffer) => {
    let binary = '';
    const bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => binary += String.fromCharCode(b));
    return window.btoa(binary);
};

export const processSinglePhoto = (object) => {
    if (object.img instanceof Object) {
        const base64Flag = `data:${object.img.contentType};base64,`;
        const imageStr = arrayBufferToBase64(object.img.data.data);
        object.img = base64Flag + imageStr;
    }
}



