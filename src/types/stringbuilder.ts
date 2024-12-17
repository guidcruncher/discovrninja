export class StringBuilder {
  private strings: string[] = [];

  public append(value: string): void {
    this.strings.push(value);
  }

  public appendLine(value: string): void {
    this.strings.push(value);
    this.strings.push("\n");
  }

  public appendFormat(format: string, ...args: any[]): void {
    let value: string = format;
    for (let i = 0; i < args.length; i++) {
      value = value.replace("{" + i + "}", args[i]);
    }
    this.strings.push(value);
  }

  public appendLineFormat(format: string, ...args: any[]): void {
    let value: string = format;
    for (let i = 0; i < args.length; i++) {
      value = value.replace("{" + i + "}", args[i]);
    }
    this.strings.push(value);
    this.strings.push("\n");
  }

  public clear(): void {
    this.strings = [];
  }

  public toString(): string {
    return this.toStringDelimited("");
  }

  public toStringDelimited(seperator: string): string {
    return this.strings.join(seperator);
  }
}
