export class Binary {
  constructor(private text: string) {
    this.text = text;
  }

  oldTextToBinary() {
    const buffer = new ArrayBuffer(this.text.length * 4); // 4 bytes for each char
    const bufferView = new Int32Array(buffer);
    for (let i = 0, strLen = this.text.length; i < strLen; i++) {
      bufferView[i] = this.text.charCodeAt(i);
    }

    return bufferView;
  }

  newTextToBinary() {
    const encoder = new TextEncoder();
    const encodedData = encoder.encode(this.text);
    const buffer = encodedData.buffer;
    const bufferView = new Uint8Array(buffer);
    return bufferView;
  }

  textToBase64() {
    const encoder = new TextEncoder();
    const data = encoder.encode(this.text);
    const base64String = btoa(String.fromCharCode(...data));
    return base64String;
  }
}
