"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DnsRecordUtility = void 0;
/* eslint-disable @typescript-eslint/prefer-for-of */
var stringbuilder_1 = require("@customtypes/stringbuilder");
var DnsRecordUtility = /** @class */ (function () {
    function DnsRecordUtility() {
    }
    DnsRecordUtility.getflags = function (e) {
        var property;
        var flags = [];
        for (property in e) {
            if (property.startsWith("flag_")) {
                if (e[property] == true) {
                    flags.push(property.replace("flag_", ""));
                }
            }
        }
        return flags.join(" ").trim();
    };
    DnsRecordUtility.toString = function (e) {
        var sb = new stringbuilder_1.StringBuilder();
        sb.appendLineFormat(";; ->>HEADER<<- opcode: {0}, status: {1}, id: {2}", e.opcode, e.rcode, e.id);
        sb.appendLineFormat(";; flags: {0}; QUERY: {1}, ANSWER: {2}, AUTHORITY: {3}, ADDITIONAL: {4}", this.getflags(e), e.questions.length, e.answers.length, e.authorities.length, e.additionals.length);
        sb.appendLine("");
        sb.appendLine(";; QUESTION SECTION:");
        for (var i = 0; i < e.questions.length; i++) {
            var q = e.questions[i];
            sb.appendLineFormat(";{0}.\t{1}\t{2}", q.name, q.class, q.type);
        }
        sb.appendLine("");
        sb.appendLine(";; ANSWER SECTION:");
        for (var i = 0; i < e.answers.length; i++) {
            var a = e.answers[i];
            sb.appendLineFormat("{0}.\t{1}\t{2}\t{3}\t{4}", a.name, a.ttl, a.class, a.type, a.data);
        }
        sb.appendLine("");
        return sb.toString();
    };
    return DnsRecordUtility;
}());
exports.DnsRecordUtility = DnsRecordUtility;
