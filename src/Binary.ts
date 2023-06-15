export class Binary {
  constructor(private text: string) {
    this.text = text;
  }

  textToBinary() {
    var buf = new ArrayBuffer(this.text.length * 8); // 2 bytes for each char
    var bufView = new BigInt64Array(buf);
    for (var i = 0, strLen = this.text.length; i < strLen; i++) {
      bufView[i] = BigInt(this.text.charCodeAt(i));
    }
    console.log(bufView);

    return buf;
  }
}
