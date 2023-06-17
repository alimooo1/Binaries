export class Binary {
  constructor(private text: string) {
    this.text = text;
  }

  textToBinary() {
    const buffer = new ArrayBuffer(this.text.length * 4); // 4 bytes for each char
    const bufferView = new Int32Array(buffer);
    for (let i = 0, strLen = this.text.length; i < strLen; i++) {
      bufferView[i] = this.text.charCodeAt(i);
    }

    return bufferView;
  }

  textToBase64() {
    const encoder = new TextEncoder();
    const data = encoder.encode(this.text);
    const base64String = btoa(String.fromCharCode(...data));
    return base64String;
  }
}
