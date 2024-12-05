/* eslint-disable @typescript-eslint/prefer-for-of */
import { StringBuilder } from "@customtypes/stringbuilder";

interface DnsRecord {
  id: number;
  type: string;
  flags: number;
  flag_qr: boolean;
  opcode: string;
  flag_aa: boolean;
  flag_tc: boolean;
  flag_rd: boolean;
  flag_ra: boolean;
  flag_z: boolean;
  flag_ad: boolean;
  flag_cd: boolean;
  rcode: string;
  questions: Question[];
  answers: Answer[];
  authorities: Authority[];
  additionals: any[];
}

interface Question {
  name: string;
  type: string;
  class: string;
}

interface Answer {
  name: string;
  type: string;
  ttl: number;
  class: string;
  flush: boolean;
  data: string;
}

interface Authority {
  name: string;
  type: string;
  ttl: number;
  class: string;
  flush: boolean;
  data: Data;
}

interface Data {
  mname: string;
  rname: string;
  serial: number;
  refresh: number;
  retry: number;
  expire: number;
  minimum: number;
}

class DnsRecordUtility {
  private static getflags(e: DnsRecord): string {
    let property: keyof typeof e;
    const flags: string[] = [];
    for (property in e) {
      if (property.startsWith("flag_")) {
        if (e[property] == true) {
          flags.push(property.replace("flag_", ""));
        }
      }
    }
    return flags.join(" ").trim();
  }

  public static toString(e: DnsRecord): string {
    const sb: StringBuilder = new StringBuilder();

    sb.appendLineFormat(
      ";; ->>HEADER<<- opcode: {0}, status: {1}, id: {2}",
      e.opcode,
      e.rcode,
      e.id,
    );
    sb.appendLineFormat(
      ";; flags: {0}; QUERY: {1}, ANSWER: {2}, AUTHORITY: {3}, ADDITIONAL: {4}",
      this.getflags(e),
      e.questions.length,
      e.answers.length,
      e.authorities.length,
      e.additionals.length,
    );
    sb.appendLine("");
    sb.appendLine(";; QUESTION SECTION:");

    for (let i = 0; i < e.questions.length; i++) {
      const q: any = e.questions[i];
      sb.appendLineFormat(";{0}.\t{1}\t{2}", q.name, q.class, q.type);
    }

    sb.appendLine("");
    sb.appendLine(";; ANSWER SECTION:");
    for (let i = 0; i < e.answers.length; i++) {
      const a: any = e.answers[i];
      sb.appendLineFormat(
        "{0}.\t{1}\t{2}\t{3}\t{4}",
        a.name,
        a.ttl,
        a.class,
        a.type,
        a.data,
      );
    }
    sb.appendLine("");

    return sb.toString();
  }
}

export { Answer, Authority, Data, DnsRecord, DnsRecordUtility, Question };
