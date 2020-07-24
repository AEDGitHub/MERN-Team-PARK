const arrayBufferToBase64 = (buffer) => {
    let binary = '';
    const bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => binary += String.fromCharCode(b));
    return window.btoa(binary);
};

export const processUserPhoto = (user) => {
    if (user.img) {
        const base64Flag = `data:${user.img.contentType};base64,`;
        const imageStr = arrayBufferToBase64(user.img.data.data);
        user.img = base64Flag + imageStr;
    }
}



