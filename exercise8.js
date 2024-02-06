// Currying is a useful technique used in JavaScript applications.
// Please implement a curry() function, which accepts a function and return a curried one. 
// Note: this question asked in google, amazon, flipkart

const join = (a, b, c) => {
   return `${a}_${b}_${c}`
}

const curriedJoin = curry(join)

curriedJoin("doraemon", "nobita", "shizuka") // 'doraemon_nobita_shizuka'
curriedJoin("doraemon")("nobita", "shizuka") // 'doraemon_nobita_shizuka'
curriedJoin("doraemon", "nobita")("shizuka") // 'doraemon_nobita_shizuka'

// more to read: https://javascript.info/currying-partials
// Give it a shot! Try to solve the problem independently before the solution is sent the following morning.
