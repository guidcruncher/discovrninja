 module.exports = (Handlebars) => {
   Handlebars.registerHelper("bool", function(operand_1, operator, operand_2) {
     var operators = {
         'eq': function(l, r) {
           return l == r;
         },
         'noteq': function(l, r) {
           return l != r;
         },
         'gt': function(l, r) {
           return Number(l) > Number(r);
         },
         'gte': function(l, r) {
           return Number(l) >= Number(r);
         },
         'lt': function(l, r) {
           return Number(l) < Number(r);
         },
         'lte': function(l, r) {
           return Number(l) <= Number(r);
         },
         'or': function(l, r) {
           return l || r;
         },
         'and': function(l, r) {
           return l && r;
         },
         '%': function(l, r) {
           return (l % r) === 0;
         },
         'in': function(l, r) {
           return (r.split(',').includes(l));
         },
         'notin': function(l, r) {
           return !(r.split(',').includes(l));
         }
       },
       result = operators[operator](operand_1, operand_2);

     if (result) return new Handlebars.SafeString("true");
     else return new Handlebars.SafeString("false");
   });
 };
