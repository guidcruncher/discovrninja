 module.exports = (Handlebars) => {
   Handlebars.registerHelper("when", function(operand_1, operator, operand_2, options) {
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
         },
         'contains': function(l, r) {
           if (typeof l === "string")
             return l.includes(r);
           else
             return l ? (l[r] ? true : false) : false;
         },
         'notcontains': function(l, r) {
           if (typeof l === "string")
             return !l.includes(r);
           else
             return l ? !(l[r] ? true : false) : false;
         }
       },
       result = operators[operator](operand_1, operand_2);

     if (result) return options.fn(this);
     else return options.inverse(this);
   });
 };
