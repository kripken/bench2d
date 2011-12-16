var ba = void 0, ca = null;

function da() {
  return (function() {});
}

function ea(c) {
  return (function() {
    return c;
  });
}

var ia = [], na = typeof process === "object", qa = typeof window === "object", ra = typeof importScripts === "function", sa = !qa && !na && !ra;

if (na) {
  print = (function(c) {
    process.stdout.write(c + "\n");
  });
  printErr = (function(c) {
    process.stderr.write(c + "\n");
  });
  var va = require("fs");
  read = (function(c) {
    var f = va.readFileSync(c).toString();
    !f && c[0] != "/" && (c = __dirname.split("/").slice(0, -1).join("/") + "/src/" + c, f = va.readFileSync(c).toString());
    return f;
  });
  ia = process.argv.slice(2);
} else if (sa) this.read || (read = (function(c) {
  snarf(c);
})), ia = this.arguments ? arguments : scriptArgs; else if (qa) printErr = (function(c) {
  console.log(c);
}), read = (function(c) {
  var f = new XMLHttpRequest;
  f.open("GET", c, !1);
  f.send(ca);
  return f.responseText;
}), this.arguments && (ia = arguments); else if (ra) load = importScripts; else throw "Unknown runtime environment. Where are we?";

function za(c) {
  eval.call(ca, c);
}

typeof load == "undefined" && typeof read != "undefined" && (load = (function(c) {
  za(read(c));
}));

typeof printErr === "undefined" && (printErr = da());

typeof print === "undefined" && (print = printErr);

try {
  this.Module = Module;
} catch (Fa) {
  this.Module = Module = {};
}

if (!Module.arguments) Module.arguments = ia;

var Ka = {
  W: (function() {
    return a;
  }),
  V: (function(c) {
    a = c;
  }),
  aa: (function(c, f) {
    f = f || 1;
    return isNumber(c) && isNumber(f) ? Math.ceil(c / f) * f : "Math.ceil((" + c + ")/" + f + ")*" + f;
  }),
  O: (function(c) {
    return c in Ka.H || c in Ka.G;
  }),
  P: (function(c) {
    return c[c.length - 1] == "*";
  }),
  R: (function(c) {
    return isPointerType(c) ? !1 : /^\[\d+\ x\ (.*)\]/.test(c) ? !0 : /<?{ [^}]* }>?/.test(c) ? !0 : c[0] == "%";
  }),
  H: {
    i1: 0,
    i8: 0,
    i16: 0,
    i32: 0,
    i64: 0
  },
  G: {
    "float": 0,
    "double": 0
  },
  da: (function(c, f) {
    return (c | 0 | f | 0) + (Math.round(c / 4294967296) | Math.round(f / 4294967296)) * 4294967296;
  }),
  $: (function(c, f) {
    return ((c | 0) & (f | 0)) + (Math.round(c / 4294967296) & Math.round(f / 4294967296)) * 4294967296;
  }),
  ia: (function(c, f) {
    return ((c | 0) ^ (f | 0)) + (Math.round(c / 4294967296) ^ Math.round(f / 4294967296)) * 4294967296;
  }),
  o: (function(c) {
    if (Ka.e == 1) return 1;
    var f = {
      "%i1": 1,
      "%i8": 1,
      "%i16": 2,
      "%i32": 4,
      "%i64": 8,
      "%float": 4,
      "%double": 8
    }["%" + c];
    if (!f && c[c.length - 1] == "*") f = Ka.e;
    return f;
  }),
  M: (function(c) {
    return Math.max(Ka.o(c), Ka.e);
  }),
  J: (function(c, f) {
    var d = {};
    return f ? c.filter((function(c) {
      return d[c[f]] ? !1 : d[c[f]] = !0;
    })) : c.filter((function(c) {
      return d[c] ? !1 : d[c] = !0;
    }));
  }),
  set: (function() {
    for (var c = typeof arguments[0] === "object" ? arguments[0] : arguments, f = {}, d = 0; d < c.length; d++) f[c[d]] = 0;
    return f;
  }),
  q: (function(c) {
    c.b = 0;
    c.f = 0;
    var f = [], d = -1;
    c.t = c.g.map((function(e) {
      var g;
      if (Ka.O(e) || Ka.P(e)) e = g = Ka.o(e); else if (Ka.R(e)) g = Types.types[e].b, e = Types.types[e].f; else throw "Unclear type in struct: " + e + ", in " + c.S + " :: " + dump(Types.types[c.S]);
      e = c.ea ? 1 : Math.min(e, Ka.e);
      c.f = Math.max(c.f, e);
      e = Ka.p(c.b, e);
      c.b = e + g;
      d >= 0 && f.push(e - d);
      return d = e;
    }));
    c.b = Ka.p(c.b, c.f);
    if (f.length == 0) c.s = c.b; else if (Ka.J(f).length == 1) c.s = f[0];
    c.ca = c.s != 1;
    return c.t;
  }),
  L: (function(c, f, d) {
    var e, g;
    if (f) {
      d = d || 0;
      e = (typeof Types === "undefined" ? Ka.ha : Types.types)[f];
      if (!e) return ca;
      c || (c = (typeof Types === "undefined" ? Ka : Types).fa[f.replace(/.*\./, "")]);
      if (!c) return ca;
      e.g.length === c.length || Oa("Assertion failed: " + ("Number of named fields must match the type for " + f + ". Perhaps due to inheritance, which is not supported yet?"));
      g = e.t;
    } else e = {
      g: c.map((function(c) {
        return c[0];
      }))
    }, g = Ka.q(e);
    var i = {
      Z: e.b
    };
    f ? c.forEach((function(c, f) {
      if (typeof c === "string") i[c] = g[f] + d; else {
        var k, l;
        for (l in c) k = l;
        i[k] = Ka.L(c[k], e.g[f], g[f]);
      }
    })) : c.forEach((function(c, d) {
      i[c[1]] = g[d];
    }));
    return i;
  }),
  U: (function(c) {
    var f = a;
    a += c;
    return f;
  }),
  D: (function(c) {
    var f = Pa;
    Pa += c;
    if (Pa >= Qa) {
      for (; Qa <= Pa; ) Qa = Math.ceil(Qa * 1.25 / Sa) * Sa;
      c = b;
      Wa = b = new Int32Array(Qa);
      b.set(c);
      Xa = new Uint32Array(b.buffer);
      c = o;
      o = new Float64Array(Qa);
      o.set(c);
    }
    return f;
  }),
  p: (function(c, f) {
    return Math.ceil(c / (f ? f : 1)) * (f ? f : 1);
  }),
  e: 1,
  Y: 0
};

function Ya() {
  var c = [], f;
  for (f in this.j) c.push({
    T: f,
    K: this.j[f][0],
    ga: this.j[f][1],
    total: this.j[f][0] + this.j[f][1]
  });
  c.sort((function(c, d) {
    return d.total - c.total;
  }));
  for (f = 0; f < c.length; f++) {
    var d = c[f];
    print(d.T + " : " + d.total + " hits, %" + Math.ceil(100 * d.K / d.total) + " failures");
  }
}

function Za() {}

var $a = [];

function Oa(c) {
  print(c + ":\n" + Error().stack);
  throw "Assertion: " + c;
}

function ab(c, f, d) {
  d = d || "i8";
  d[d.length - 1] === "*" && (d = "i32");
  switch (d) {
   case "i1":
    b[c] = f;
    break;
   case "i8":
    b[c] = f;
    break;
   case "i16":
    b[c] = f;
    break;
   case "i32":
    b[c] = f;
    break;
   case "i64":
    b[c] = f;
    break;
   case "float":
    o[c] = f;
    break;
   case "double":
    o[c] = f;
    break;
   default:
    Oa("invalid type for setValue: " + d);
  }
}

Module.setValue = ab;

Module.getValue = (function(c, f) {
  f = f || "i8";
  f[f.length - 1] === "*" && (f = "i32");
  switch (f) {
   case "i1":
    return b[c];
   case "i8":
    return b[c];
   case "i16":
    return b[c];
   case "i32":
    return b[c];
   case "i64":
    return b[c];
   case "float":
    return o[c];
   case "double":
    return o[c];
   default:
    Oa("invalid type for setValue: " + f);
  }
  return ca;
});

var r = 1, w = 2;

Module.ALLOC_NORMAL = 0;

Module.ALLOC_STACK = r;

Module.ALLOC_STATIC = w;

function A(c, f, d) {
  var e, g;
  typeof c === "number" ? (e = !0, g = c) : (e = !1, g = c.length);
  for (var d = [ ib, Ka.U, Ka.D ][d === ba ? w : d](Math.max(g, 1)), i = typeof f === "string" ? f : ca, h = 0, j; h < g; ) {
    var k = e ? 0 : c[h];
    typeof k === "function" && (k = Ka.ba(k));
    j = i || f[h];
    j === 0 ? h++ : (ab(d + h, k, j), h += Ka.o(j));
  }
  return d;
}

Module.allocate = A;

function jb(c) {
  for (var f = "", d = 0, e, g = String.fromCharCode(0); ; ) {
    e = String.fromCharCode(Xa[c + d]);
    if (e == g) break;
    f += e;
    d += 1;
  }
  return f;
}

Module.Pointer_stringify = jb;

Module.Array_stringify = (function(c) {
  for (var f = "", d = 0; d < c.length; d++) f += String.fromCharCode(c[d]);
  return f;
});

var kb, Sa = 4096, Wa, b, Xa, o, a, lb, Pa, Qa = Module.TOTAL_MEMORY || 15e7;

Int32Array && Float64Array && (new Int32Array(1)).subarray && (new Int32Array(1)).set || Oa("Assertion failed: Cannot fallback to non-typed array case: Code is too specialized");

Wa = b = new Int32Array(Qa);

Xa = new Uint32Array(b.buffer);

o = new Float64Array(Qa);

for (var sb = mb("(null)"), tb = 0; tb < sb.length; tb++) b[tb] = sb[tb];

Module.HEAP = Wa;

Module.IHEAP = b;

Module.FHEAP = o;

lb = (a = Math.ceil(10 / Sa) * Sa) + 1048576;

Pa = Math.ceil(lb / Sa) * Sa;

function wb(c, f) {
  return Array.prototype.slice.call(b.subarray(c, c + f));
}

Module.Array_copy = wb;

function xb(c) {
  for (var f = 0; b[c + f]; ) f++;
  return f;
}

Module.String_len = xb;

function Db(c, f) {
  var d = xb(c);
  f && d++;
  var e = wb(c, d);
  f && (e[d - 1] = 0);
  return e;
}

Module.String_copy = Db;

function mb(c, f) {
  for (var d = [], e = 0; e < c.length; ) {
    var g = c.charCodeAt(e);
    g > 255 && (g &= 255);
    d.push(g);
    e += 1;
  }
  f || d.push(0);
  return d;
}

Module.intArrayFromString = mb;

Module.intArrayToString = (function(c) {
  for (var f = [], d = 0; d < c.length; d++) {
    var e = c[d];
    e > 255 && (e &= 255);
    f.push(String.fromCharCode(e));
  }
  return f.join("");
});

function Hb(c, f) {
  return c >= 0 ? c : f <= 32 ? 2 * Math.abs(1 << f - 1) + c : Math.pow(2, f) + c;
}

function Ib(c, f) {
  if (c <= 0) return c;
  var d = f <= 32 ? Math.abs(1 << f - 1) : Math.pow(2, f - 1);
  if (c >= d && (f <= 32 || c > d)) c = -2 * d + c;
  return c;
}

function Jb() {
  Kb();
  return 0;
}

Module._main = Jb;

function Lb(c, f) {
  o[c] += o[f];
  o[c + 1] += o[f + 1];
}

function Sb(c) {
  b[c] = Tb + 2;
  b[c] = $b + 2;
  b[c + 1] = 2;
  o[c + 2] = .009999999776482582;
  b[c + 37] = 0;
  ac(c + 3);
}

Sb.X = 1;

function ac(c) {
  o[c] = 0;
  o[c + 1] = 0;
}

function bc(c) {
  b[c] = Tb + 2;
  b[c] = jc + 2;
  b[c + 1] = 1;
  o[c + 2] = .009999999776482582;
  o[c + 7] = 0;
  o[c + 8] = 0;
  o[c + 9] = 0;
  o[c + 10] = 0;
  b[c + 11] = 0;
  b[c + 12] = 0;
}

function kc(c) {
  b[c + 14] = 0;
  lc(c + 1, 0, 0);
  o[c + 3] = 0;
  lc(c + 4, 0, 0);
  o[c + 6] = 0;
  o[c + 7] = 0;
  o[c + 8] = 0;
  b[c + 9] = 1;
  b[c + 10] = 1;
  b[c + 11] = 0;
  b[c + 12] = 0;
  b[c] = 0;
  b[c + 13] = 1;
  o[c + 15] = 1;
}

function lc(c, f, d) {
  o[c] = f;
  o[c + 1] = d;
}

function mc(c, f, d) {
  o[c] = f;
  o[c + 1] = d;
}

function Kb() {
  var c = a;
  a += 102913;
  var f = c + 2, d = c + 102562, e = c + 102578, g = c + 102591, i = c + 102593, h = c + 102595, j = c + 102633, k = c + 102635, l = c + 102637, m = c + 102639, n = c + 102641, p = c + 102657;
  mc(c, 0, -10);
  nc(f, c);
  var t, q;
  t = 0 == (b[f + 102544] & 1) ? 4 : 1;
  a : do if (t == 1) if (b[f + 102544] = 0, (b[f + 102544] & 1) != 0) t = 4; else if (q = b[f + 102538], b[f + 102538] == 0) t = 4; else for (;;) {
    oc(q, 1);
    var s = b[q + 24];
    q = s;
    if (s == 0) break a;
  } while (0);
  kc(d);
  d = pc(f, d);
  bc(e);
  mc(g, -40, 0);
  mc(i, 40, 0);
  t = e + 3;
  b[t] = b[g];
  o[t] = o[g];
  b[t + 1] = b[g + 1];
  o[t + 1] = o[g + 1];
  g = e + 5;
  b[g] = b[i];
  o[g] = o[i];
  b[g + 1] = b[i + 1];
  o[g + 1] = o[i + 1];
  b[e + 11] = 0;
  b[e + 12] = 0;
  sc(d, e, 0);
  Sb(h);
  b[h + 37] = 4;
  lc(h + 5, -.5, -.5);
  lc(h + 7, .5, -.5);
  lc(h + 9, .5, .5);
  lc(h + 11, -.5, .5);
  lc(h + 21, 0, -1);
  lc(h + 23, 1, 0);
  lc(h + 25, 0, 1);
  lc(h + 27, -1, 0);
  ac(h + 3);
  mc(j, -7, .75);
  mc(l, .5625, 1);
  mc(m, 1.125, 0);
  e = 0;
  i = n + 1;
  for (g = 0; ; ) {
    if (g >= 40) break;
    b[k] = b[j];
    o[k] = o[j];
    b[k + 1] = b[j + 1];
    o[k + 1] = o[j + 1];
    for (d = g = e; ; ) {
      if (d >= 40) break;
      kc(n);
      b[n] = 2;
      b[i] = b[k];
      o[i] = o[k];
      b[i + 1] = b[k + 1];
      o[i + 1] = o[k + 1];
      d = pc(f, n);
      sc(d, h, 5);
      Lb(k, m);
      g = d = g + 1;
    }
    Lb(j, l);
    e = g = e + 1;
  }
  for (j = h = 0; ; ) {
    if (j >= 64) break;
    tc(f, .01666666753590107, 3, 3);
    h = j = h + 1;
  }
  for (j = h = 0; ; ) {
    if (j >= 256) break;
    j = uc();
    tc(f, .01666666753590107, 3, 3);
    k = uc();
    b[p + h] = k - j;
    vc(wc, A([ (k - j) / 1e3 * 1e3 ], "double", r));
    h = j = h + 1;
  }
  h = b[xc];
  b[Fc] = Hb(10);
  if (Gc(h, Fc, 1) == -1 && h in Hc) Hc[h].error = !0;
  for (j = h = 0; ; ) if (h += b[p + j], j = k = j + 1, k >= 256) break;
  vc(wc, A([ h / 256 / 1e3 * 1e3 ], "double", r));
  Ic(f);
  a = c;
}

Kb.X = 1;

function Jc(c) {
  Kc(c);
  b[c + 7] = 0;
  b[c + 12] = 16;
  b[c + 13] = 0;
  var f = ib(b[c + 12] * 12);
  b[c + 11] = f;
  b[c + 9] = 16;
  b[c + 10] = 0;
  f = ib(b[c + 9] << 2);
  b[c + 8] = f;
}

function Lc(c, f) {
  var d;
  if ((b[c + 10] == b[c + 9] ? 1 : 2) == 1) {
    d = b[c + 8];
    b[c + 9] <<= 1;
    var e = ib(b[c + 9] << 2);
    b[c + 8] = e;
    e = d;
    d += 1 * ((b[c + 10] << 2) / 4);
    for (var g = b[c + 8]; e < d; e++, g++) b[g] = b[e], o[g] = o[e];
  }
  b[b[c + 8] + b[c + 10]] = f;
  b[c + 10] += 1;
}

Lc.X = 1;

function Mc(c, f) {
  var d, e;
  d = f == b[c + 14] ? 1 : 2;
  if (d == 1) e = 1; else if (d == 2) {
    d = b[c + 13] == b[c + 12] ? 3 : 4;
    if (d == 3) {
      e = b[c + 11];
      b[c + 12] <<= 1;
      d = ib(b[c + 12] * 12);
      b[c + 11] = d;
      d = e;
      e += 3 * (b[c + 13] * 12 / 12);
      for (var g = b[c + 11]; d < e; d++, g++) b[g] = b[d], o[g] = o[d];
    }
    b[b[c + 11] + b[c + 13] * 3] = f < b[c + 14] ? f : b[c + 14];
    b[b[c + 11] + b[c + 13] * 3 + 1] = f > b[c + 14] ? f : b[c + 14];
    b[c + 13] += 1;
    e = 1;
  }
  return e;
}

Mc.X = 1;

function Nc(c, f, d) {
  mc(c, o[f + 3] * o[d] - o[f + 2] * o[d + 1] + o[f], o[f + 2] * o[d] + o[f + 3] * o[d + 1] + o[f + 1]);
}

Nc.X = 1;

function C(c, f, d) {
  mc(c, o[f] - o[d], o[f + 1] - o[d + 1]);
}

function J(c, f) {
  return o[c] * o[f] + o[c + 1] * o[f + 1];
}

function Rc(c, f, d) {
  var e;
  e = o[d] - o[f];
  d = o[d + 1] - o[f + 1];
  mc(c, o[f + 3] * e + o[f + 2] * d, -o[f + 2] * e + o[f + 3] * d);
}

Rc.X = 1;

function K(c, f, d) {
  mc(c, f * o[d], f * o[d + 1]);
}

function N(c, f, d) {
  mc(c, o[f] + o[d], o[f + 1] + o[d + 1]);
}

function Sc(c, f, d, e, g) {
  var i = a;
  a += 6;
  var h = i + 2, j = i + 4;
  b[c + 15] = 0;
  Nc(i, d, f + 3);
  Nc(h, g, e + 3);
  C(j, h, i);
  d = J(j, j);
  g = o[f + 2] + o[e + 2];
  if ((d > g * g ? 2 : 1) == 1) b[c + 14] = 0, d = c + 12, f += 3, b[d] = b[f], o[d] = o[f], b[d + 1] = b[f + 1], o[d + 1] = o[f + 1], ac(c + 10), b[c + 15] = 1, e += 3, b[c] = b[e], o[c] = o[e], b[c + 1] = b[e + 1], o[c + 1] = o[e + 1], b[c + 4] = 0;
  a = i;
}

Sc.X = 1;

function Tc(c, f, d, e, g) {
  var i = a;
  a += 32;
  var h, j = i + 2, k, l, m, n, p, t = i + 4, q = i + 6, s = i + 8, u = i + 10, x = i + 12, v = i + 14, y = i + 16, z = i + 18, B = i + 20, E = i + 22, D = i + 24, H = i + 26, I = i + 28, M = i + 30;
  b[c + 15] = 0;
  Nc(i, g, e + 3);
  Rc(j, d, i);
  d = 0;
  g = -3.4028234663852886e+38;
  k = o[f + 2] + o[e + 2];
  l = b[f + 37];
  m = f + 5;
  f += 21;
  for (n = 0; ; ) {
    if (n >= l) {
      h = 6;
      break;
    }
    h = f + (n << 1);
    C(t, j, m + (n << 1));
    p = J(h, t);
    if (p > k) {
      h = 18;
      break;
    }
    h = p > g ? 4 : 5;
    h == 4 && (g = p, d = n);
    n += 1;
  }
  a : do if (h == 6) {
    t = d;
    if (t + 1 < l) h = 7; else {
      var G = 0;
      h = 8;
    }
    h == 7 && (G = t + 1);
    h = G;
    n = q;
    p = m + (t << 1);
    b[n] = b[p];
    o[n] = o[p];
    b[n + 1] = b[p + 1];
    o[n + 1] = o[p + 1];
    n = s;
    h = m + (h << 1);
    b[n] = b[h];
    o[n] = o[h];
    b[n + 1] = b[h + 1];
    o[n + 1] = o[h + 1];
    h = g < 1.1920928955078125e-7 ? 9 : 10;
    if (h == 9) b[c + 15] = 1, b[c + 14] = 1, t = c + 10, n = f + (d << 1), b[t] = b[n], o[t] = o[n], b[t + 1] = b[n + 1], o[t + 1] = o[n + 1], t = c + 12, N(x, q, s), K(u, .5, x), n = u, b[t] = b[n], o[t] = o[n], b[t + 1] = b[n + 1], o[t + 1] = o[n + 1], t = c, n = e + 3, b[t] = b[n], o[t] = o[n], b[t + 1] = b[n + 1], o[t + 1] = o[n + 1], b[c + 4] = 0; else if (h == 10) if (C(v, j, q), C(y, s, q), h = J(v, y), C(z, j, s), C(B, q, s), n = J(z, B), h = h <= 0 ? 11 : 13, h == 11) {
      if (Uc(j, q) > k * k) break a;
      b[c + 15] = 1;
      b[c + 14] = 1;
      t = c + 10;
      C(E, j, q);
      n = E;
      b[t] = b[n];
      o[t] = o[n];
      b[t + 1] = b[n + 1];
      o[t + 1] = o[n + 1];
      Vc(c + 10);
      t = c + 12;
      n = q;
      b[t] = b[n];
      o[t] = o[n];
      b[t + 1] = b[n + 1];
      o[t + 1] = o[n + 1];
      t = c;
      n = e + 3;
      b[t] = b[n];
      o[t] = o[n];
      b[t + 1] = b[n + 1];
      o[t + 1] = o[n + 1];
      b[c + 4] = 0;
    } else if (h == 13) if (h = n <= 0 ? 14 : 16, h == 14) {
      if (Uc(j, s) > k * k) break a;
      b[c + 15] = 1;
      b[c + 14] = 1;
      t = c + 10;
      C(D, j, s);
      n = D;
      b[t] = b[n];
      o[t] = o[n];
      b[t + 1] = b[n + 1];
      o[t + 1] = o[n + 1];
      Vc(c + 10);
      t = c + 12;
      n = s;
      b[t] = b[n];
      o[t] = o[n];
      b[t + 1] = b[n + 1];
      o[t + 1] = o[n + 1];
      t = c;
      n = e + 3;
      b[t] = b[n];
      o[t] = o[n];
      b[t + 1] = b[n + 1];
      o[t + 1] = o[n + 1];
      b[c + 4] = 0;
    } else if (h == 16) {
      N(I, q, s);
      K(H, .5, I);
      C(M, j, H);
      n = J(M, f + (t << 1));
      if (n > k) break a;
      b[c + 15] = 1;
      b[c + 14] = 1;
      n = c + 10;
      t = f + (t << 1);
      b[n] = b[t];
      o[n] = o[t];
      b[n + 1] = b[t + 1];
      o[n + 1] = o[t + 1];
      t = c + 12;
      n = H;
      b[t] = b[n];
      o[t] = o[n];
      b[t + 1] = b[n + 1];
      o[t + 1] = o[n + 1];
      t = c;
      n = e + 3;
      b[t] = b[n];
      o[t] = o[n];
      b[t + 1] = b[n + 1];
      o[t + 1] = o[n + 1];
      b[c + 4] = 0;
    }
  } while (0);
  a = i;
}

Tc.X = 1;

function Uc(c, f) {
  var d = a;
  a += 2;
  C(d, c, f);
  var e = J(d, d);
  a = d;
  return e;
}

function Vc(c) {
  var f, d, e;
  e = Wc(c);
  f = e < 1.1920928955078125e-7 ? 1 : 2;
  f == 1 ? d = 0 : f == 2 && (f = 1 / e, o[c] *= f, o[c + 1] *= f, d = e);
  return d;
}

function Wc(c) {
  return Xc(o[c] * o[c] + o[c + 1] * o[c + 1]);
}

function Yc(c, f, d, e, g) {
  var i = a;
  a += 56;
  var h = i + 2, j = i + 4, k = i + 6, l = i + 8, m;
  m = i + 10;
  var n;
  n = i + 12;
  var p = i + 14, t = i + 18, q = i + 20, s = i + 22, u = i + 24, x = i + 26, v = i + 28, y = i + 30, z = i + 32, B = i + 34, E = i + 36, D = i + 38, H = i + 40, I = i + 42, M = i + 44, G = i + 46, S = i + 48, P = i + 50, L = i + 52, T = i + 54;
  b[c + 15] = 0;
  Nc(h, g, e + 3);
  Rc(i, d, h);
  d = f + 3;
  b[j] = b[d];
  o[j] = o[d];
  b[j + 1] = b[d + 1];
  o[j + 1] = o[d + 1];
  d = f + 5;
  b[k] = b[d];
  o[k] = o[d];
  b[k + 1] = b[d + 1];
  o[k + 1] = o[d + 1];
  C(l, k, j);
  C(m, k, i);
  m = J(l, m);
  C(n, i, j);
  n = J(l, n);
  d = o[f + 2] + o[e + 2];
  b[p + 1] = 0;
  b[p + 3] = 0;
  g = n <= 0 ? 1 : 5;
  a : do if (g == 1) if (g = t, h = j, b[g] = b[h], o[g] = o[h], b[g + 1] = b[h + 1], o[g + 1] = o[h + 1], C(q, i, t), g = J(q, q), g > d * d) g = 16; else {
    g = b[f + 11] & 1 ? 3 : 4;
    if (g == 3) {
      var h = s, F = f + 7;
      b[h] = b[F];
      o[h] = o[F];
      b[h + 1] = b[F + 1];
      o[h + 1] = o[F + 1];
      h = u;
      F = j;
      b[h] = b[F];
      o[h] = o[F];
      b[h + 1] = b[F + 1];
      o[h + 1] = o[F + 1];
      C(x, u, s);
      C(v, u, i);
      h = J(x, v);
      if (h > 0) break a;
    }
    b[p] = 0;
    b[p + 2] = 0;
    b[c + 15] = 1;
    b[c + 14] = 0;
    ac(c + 10);
    h = c + 12;
    F = t;
    b[h] = b[F];
    o[h] = o[F];
    b[h + 1] = b[F + 1];
    o[h + 1] = o[F + 1];
    b[c + 4] = 0;
    h = c + 4;
    F = p;
    b[h] = b[F];
    o[h] = o[F];
    b[h + 1] = b[F + 1];
    o[h + 1] = o[F + 1];
    b[h + 2] = b[F + 2];
    o[h + 2] = o[F + 2];
    b[h + 3] = b[F + 3];
    o[h + 3] = o[F + 3];
    h = c;
    F = e + 3;
    b[h] = b[F];
    o[h] = o[F];
    b[h + 1] = b[F + 1];
    o[h + 1] = o[F + 1];
  } else if (g == 5) if (g = m <= 0 ? 6 : 10, g == 6) {
    g = y;
    h = k;
    b[g] = b[h];
    o[g] = o[h];
    b[g + 1] = b[h + 1];
    o[g + 1] = o[h + 1];
    C(z, i, y);
    g = J(z, z);
    if (g > d * d) break a;
    g = b[f + 12] & 1 ? 8 : 9;
    if (g == 8 && (h = B, F = f + 9, b[h] = b[F], o[h] = o[F], b[h + 1] = b[F + 1], o[h + 1] = o[F + 1], h = E, F = k, b[h] = b[F], o[h] = o[F], b[h + 1] = b[F + 1], o[h + 1] = o[F + 1], C(D, B, E), C(H, i, E), h = J(D, H), h > 0)) break a;
    b[p] = 1;
    b[p + 2] = 0;
    b[c + 15] = 1;
    b[c + 14] = 0;
    ac(c + 10);
    h = c + 12;
    F = y;
    b[h] = b[F];
    o[h] = o[F];
    b[h + 1] = b[F + 1];
    o[h + 1] = o[F + 1];
    b[c + 4] = 0;
    h = c + 4;
    F = p;
    b[h] = b[F];
    o[h] = o[F];
    b[h + 1] = b[F + 1];
    o[h + 1] = o[F + 1];
    b[h + 2] = b[F + 2];
    o[h + 2] = o[F + 2];
    b[h + 3] = b[F + 3];
    o[h + 3] = o[F + 3];
    h = c;
    F = e + 3;
    b[h] = b[F];
    o[h] = o[F];
    b[h + 1] = b[F + 1];
    o[h + 1] = o[F + 1];
  } else if (g == 10) {
    h = J(l, l);
    g = h > 0 ? 12 : 11;
    g == 11 && O(Zc, 127, $c, ad);
    g = 1 / h;
    K(G, m, j);
    K(S, n, k);
    N(M, G, S);
    K(I, g, M);
    C(P, i, I);
    g = J(P, P);
    if (g > d * d) break a;
    mc(L, -o[l + 1], o[l]);
    C(T, i, j);
    g = J(L, T) < 0 ? 14 : 15;
    g == 14 && lc(L, -o[L], -o[L + 1]);
    Vc(L);
    b[p] = 0;
    b[p + 2] = 1;
    b[c + 15] = 1;
    b[c + 14] = 1;
    h = c + 10;
    F = L;
    b[h] = b[F];
    o[h] = o[F];
    b[h + 1] = b[F + 1];
    o[h + 1] = o[F + 1];
    h = c + 12;
    F = j;
    b[h] = b[F];
    o[h] = o[F];
    b[h + 1] = b[F + 1];
    o[h + 1] = o[F + 1];
    b[c + 4] = 0;
    h = c + 4;
    F = p;
    b[h] = b[F];
    o[h] = o[F];
    b[h + 1] = b[F + 1];
    o[h + 1] = o[F + 1];
    b[h + 2] = b[F + 2];
    o[h + 2] = o[F + 2];
    b[h + 3] = b[F + 3];
    o[h + 3] = o[F + 3];
    h = c;
    F = e + 3;
    b[h] = b[F];
    o[h] = o[F];
    b[h + 1] = b[F + 1];
    o[h + 1] = o[F + 1];
  } while (0);
  a = i;
}

Yc.X = 1;

function Ld(c, f, d, e, g, i) {
  var h = a;
  a += 125;
  var j, k = h + 4, l, m, n = h + 6, p, t = h + 8, q, s, u, x, v = h + 10, y = h + 12, z = h + 14, B = h + 16, E = h + 18, D = h + 20, H = h + 22, I = h + 24, M = h + 26, G = h + 28, S = h + 30, P = h + 32, L = h + 34, T = h + 36, F = h + 38, X = h + 40, Z = h + 42, V = h + 44, aa = h + 46, ja = h + 48, Y = h + 50, W = h + 52, $ = h + 54, fa = h + 56, la = h + 58, ga = h + 60, ka = h + 62, oa = h + 64, ta = h + 66, Aa = h + 68, Ha = h + 70, Ba, Ra = h + 72, nb = h + 74, Da = h + 76, Ta = h + 79, La = h + 82, pa = h + 85, ha = h + 91, ya, xa, ua, Ia, ma, Ja, Ea = h + 105, wa = h + 107, Ma = h + 109, Ca = h + 115, Eb, Ub, Na, cc, Mb = h + 121, Ua, dc = h + 123, ub = c + 33, Va = a;
  a += 6;
  var Nb = Va + 2, Fb = Va + 4, yb = h + 2, zb = e + 2, bb = i + 2;
  o[Va] = o[zb + 1] * o[bb] - o[zb] * o[bb + 1];
  o[Va + 1] = o[zb + 1] * o[bb + 1] + o[zb] * o[bb];
  b[yb] = b[Va];
  o[yb] = o[Va];
  b[yb + 1] = b[Va + 1];
  o[yb + 1] = o[Va + 1];
  var Vb = e + 2;
  C(Fb, i, e);
  Md(Nb, Vb, Fb);
  b[h] = b[Nb];
  o[h] = o[Nb];
  b[h + 1] = b[Nb + 1];
  o[h + 1] = o[Nb + 1];
  a = Va;
  b[ub] = b[h];
  o[ub] = o[h];
  b[ub + 1] = b[h + 1];
  o[ub + 1] = o[h + 1];
  b[ub + 2] = b[h + 2];
  o[ub + 2] = o[h + 2];
  b[ub + 3] = b[h + 3];
  o[ub + 3] = o[h + 3];
  var Wb = c + 37;
  Nc(k, c + 33, g + 3);
  b[Wb] = b[k];
  o[Wb] = o[k];
  b[Wb + 1] = b[k + 1];
  o[Wb + 1] = o[k + 1];
  var cb = c + 39, vb = d + 7;
  b[cb] = b[vb];
  o[cb] = o[vb];
  b[cb + 1] = b[vb + 1];
  o[cb + 1] = o[vb + 1];
  var db = c + 41, Ga = d + 3;
  b[db] = b[Ga];
  o[db] = o[Ga];
  b[db + 1] = b[Ga + 1];
  o[db + 1] = o[Ga + 1];
  var Xb = c + 43, eb = d + 5;
  b[Xb] = b[eb];
  o[Xb] = o[eb];
  b[Xb + 1] = b[eb + 1];
  o[Xb + 1] = o[eb + 1];
  var Ab = c + 45, fb = d + 9;
  b[Ab] = b[fb];
  o[Ab] = o[fb];
  b[Ab + 1] = b[fb + 1];
  o[Ab + 1] = o[fb + 1];
  l = b[d + 11] & 1;
  m = b[d + 12] & 1;
  C(n, c + 43, c + 41);
  Vc(n);
  lc(c + 49, o[n + 1], -o[n]);
  var Bb = c + 49;
  C(t, c + 37, c + 41);
  p = J(Bb, t);
  x = u = s = q = 0;
  j = l & 1 ? 1 : 2;
  if (j == 1) {
    C(v, c + 41, c + 39);
    Vc(v);
    lc(c + 47, o[v + 1], -o[v]);
    u = Q(v, n) >= 0;
    var ec = c + 47;
    C(y, c + 37, c + 39);
    q = J(ec, y);
  }
  j = m & 1 ? 3 : 4;
  if (j == 3) {
    C(z, c + 45, c + 43);
    Vc(z);
    lc(c + 51, o[z + 1], -o[z]);
    x = Q(n, z) > 0;
    var fc = c + 51;
    C(B, c + 37, c + 43);
    s = J(fc, B);
  }
  j = l & 1 ? 5 : 34;
  a : do if (j == 5) if (m & 1) {
    j = u & 1 ? 7 : 14;
    do if (j == 7) if (x & 1) {
      if (q >= 0) {
        var ob = 1;
        j = 11;
      } else j = 9;
      j == 9 && (p >= 0 ? (ob = 1, j = 11) : ob = s >= 0);
      b[c + 62] = ob;
      var Ob = c + 53, Pb = c + 49;
      j = b[c + 62] & 1 ? 12 : 13;
      if (j == 12) {
        var pb = Ob, Yb = Pb;
        b[pb] = b[Yb];
        o[pb] = o[Yb];
        b[pb + 1] = b[Yb + 1];
        o[pb + 1] = o[Yb + 1];
        var Cb = c + 57, gc = c + 47;
        b[Cb] = b[gc];
        o[Cb] = o[gc];
        b[Cb + 1] = b[gc + 1];
        o[Cb + 1] = o[gc + 1];
        var qb = c + 59, Gb = c + 51;
        b[qb] = b[Gb];
        o[qb] = o[Gb];
        b[qb + 1] = b[Gb + 1];
        o[qb + 1] = o[Gb + 1];
        j = 61;
        break a;
      } else if (j == 13) {
        Nd(E, Pb);
        var rb = Ob, gb = E;
        b[rb] = b[gb];
        o[rb] = o[gb];
        b[rb + 1] = b[gb + 1];
        o[rb + 1] = o[gb + 1];
        var Zb = c + 57;
        Nd(D, c + 49);
        var hc = Zb, Qb = D;
        b[hc] = b[Qb];
        o[hc] = o[Qb];
        b[hc + 1] = b[Qb + 1];
        o[hc + 1] = o[Qb + 1];
        var yc = c + 59;
        Nd(H, c + 49);
        var ic = yc, hb = H;
        b[ic] = b[hb];
        o[ic] = o[hb];
        b[ic + 1] = b[hb + 1];
        o[ic + 1] = o[hb + 1];
        j = 61;
        break a;
      }
    } else j = 14; while (0);
    j = u & 1 ? 15 : 21;
    if (j == 15) {
      if (q >= 0) {
        var Yd = 1;
        j = 18;
      } else j = 16;
      j == 16 && (p >= 0 ? Yd = s >= 0 : (Yd = 0, j = 18));
      b[c + 62] = Yd;
      var Se = c + 53, Te = c + 49;
      j = b[c + 62] & 1 ? 19 : 20;
      if (j == 19) {
        var bd = Se, cd = Te;
        b[bd] = b[cd];
        o[bd] = o[cd];
        b[bd + 1] = b[cd + 1];
        o[bd + 1] = o[cd + 1];
        var dd = c + 57, ed = c + 47;
        b[dd] = b[ed];
        o[dd] = o[ed];
        b[dd + 1] = b[ed + 1];
        o[dd + 1] = o[ed + 1];
        var fd = c + 59, gd = c + 49;
        b[fd] = b[gd];
        o[fd] = o[gd];
        b[fd + 1] = b[gd + 1];
        o[fd + 1] = o[gd + 1];
        j = 61;
        break a;
      } else if (j == 20) {
        Nd(I, Te);
        var hd = Se, id = I;
        b[hd] = b[id];
        o[hd] = o[id];
        b[hd + 1] = b[id + 1];
        o[hd + 1] = o[id + 1];
        var yh = c + 57;
        Nd(M, c + 51);
        var jd = yh, kd = M;
        b[jd] = b[kd];
        o[jd] = o[kd];
        b[jd + 1] = b[kd + 1];
        o[jd + 1] = o[kd + 1];
        var zh = c + 59;
        Nd(G, c + 49);
        var ld = zh, md = G;
        b[ld] = b[md];
        o[ld] = o[md];
        b[ld + 1] = b[md + 1];
        o[ld + 1] = o[md + 1];
        j = 61;
        break a;
      }
    } else if (j == 21) if (j = x & 1 ? 22 : 28, j == 22) {
      if (s >= 0) {
        var Zd = 1;
        j = 25;
      } else j = 23;
      j == 23 && (q >= 0 ? Zd = p >= 0 : (Zd = 0, j = 25));
      b[c + 62] = Zd;
      var Ue = c + 53, Ve = c + 49;
      j = b[c + 62] & 1 ? 26 : 27;
      if (j == 26) {
        var nd = Ue, od = Ve;
        b[nd] = b[od];
        o[nd] = o[od];
        b[nd + 1] = b[od + 1];
        o[nd + 1] = o[od + 1];
        var pd = c + 57, qd = c + 49;
        b[pd] = b[qd];
        o[pd] = o[qd];
        b[pd + 1] = b[qd + 1];
        o[pd + 1] = o[qd + 1];
        var rd = c + 59, sd = c + 51;
        b[rd] = b[sd];
        o[rd] = o[sd];
        b[rd + 1] = b[sd + 1];
        o[rd + 1] = o[sd + 1];
        j = 61;
        break a;
      } else if (j == 27) {
        Nd(S, Ve);
        var td = Ue, ud = S;
        b[td] = b[ud];
        o[td] = o[ud];
        b[td + 1] = b[ud + 1];
        o[td + 1] = o[ud + 1];
        var Ah = c + 57;
        Nd(P, c + 49);
        var vd = Ah, wd = P;
        b[vd] = b[wd];
        o[vd] = o[wd];
        b[vd + 1] = b[wd + 1];
        o[vd + 1] = o[wd + 1];
        var Bh = c + 59;
        Nd(L, c + 47);
        var xd = Bh, qc = L;
        b[xd] = b[qc];
        o[xd] = o[qc];
        b[xd + 1] = b[qc + 1];
        o[xd + 1] = o[qc + 1];
        j = 61;
        break a;
      }
    } else if (j == 28) {
      if (q >= 0) j = 29; else {
        var zc = 0;
        j = 31;
      }
      j == 29 && (p >= 0 ? zc = s >= 0 : (zc = 0, j = 31));
      b[c + 62] = zc;
      var Oc = c + 53, $d = c + 49;
      j = b[c + 62] & 1 ? 32 : 33;
      if (j == 32) {
        var Pc = Oc, Qc = $d;
        b[Pc] = b[Qc];
        o[Pc] = o[Qc];
        b[Pc + 1] = b[Qc + 1];
        o[Pc + 1] = o[Qc + 1];
        var yd = c + 57, zd = c + 49;
        b[yd] = b[zd];
        o[yd] = o[zd];
        b[yd + 1] = b[zd + 1];
        o[yd + 1] = o[zd + 1];
        var Ad = c + 59, Bd = c + 49;
        b[Ad] = b[Bd];
        o[Ad] = o[Bd];
        b[Ad + 1] = b[Bd + 1];
        o[Ad + 1] = o[Bd + 1];
        j = 61;
        break a;
      } else if (j == 33) {
        Nd(T, $d);
        var Cd = Oc, Dd = T;
        b[Cd] = b[Dd];
        o[Cd] = o[Dd];
        b[Cd + 1] = b[Dd + 1];
        o[Cd + 1] = o[Dd + 1];
        var We = c + 57;
        Nd(F, c + 51);
        var Ed = We, Fd = F;
        b[Ed] = b[Fd];
        o[Ed] = o[Fd];
        b[Ed + 1] = b[Fd + 1];
        o[Ed + 1] = o[Fd + 1];
        var Gd = c + 59;
        Nd(X, c + 47);
        var rc = Gd, Xe = X;
        b[rc] = b[Xe];
        o[rc] = o[Xe];
        b[rc + 1] = b[Xe + 1];
        o[rc + 1] = o[Xe + 1];
        j = 61;
        break a;
      }
    }
  } else j = 34; while (0);
  if (j == 34) if (j = l & 1 ? 35 : 46, j == 35) {
    var jk = q >= 0;
    j = u & 1 ? 36 : 41;
    if (j == 36) {
      if (jk) {
        var kk = 1;
        j = 38;
      } else j = 37;
      j == 37 && (kk = p >= 0);
      b[c + 62] = kk;
      var Ac = c + 53, ae = c + 49;
      j = b[c + 62] & 1 ? 39 : 40;
      if (j == 39) {
        b[Ac] = b[ae];
        o[Ac] = o[ae];
        b[Ac + 1] = b[ae + 1];
        o[Ac + 1] = o[ae + 1];
        var Ye = c + 57, Ze = c + 47;
        b[Ye] = b[Ze];
        o[Ye] = o[Ze];
        b[Ye + 1] = b[Ze + 1];
        o[Ye + 1] = o[Ze + 1];
        var $e = c + 59;
        Nd(Z, c + 49);
        b[$e] = b[Z];
        o[$e] = o[Z];
        b[$e + 1] = b[Z + 1];
        o[$e + 1] = o[Z + 1];
      } else if (j == 40) {
        Nd(V, ae);
        b[Ac] = b[V];
        o[Ac] = o[V];
        b[Ac + 1] = b[V + 1];
        o[Ac + 1] = o[V + 1];
        var af = c + 57, bf = c + 49;
        b[af] = b[bf];
        o[af] = o[bf];
        b[af + 1] = b[bf + 1];
        o[af + 1] = o[bf + 1];
        var cf = c + 59;
        Nd(aa, c + 49);
        b[cf] = b[aa];
        o[cf] = o[aa];
        b[cf + 1] = b[aa + 1];
        o[cf + 1] = o[aa + 1];
      }
    } else if (j == 41) {
      if (jk) j = 42; else {
        var lk = 0;
        j = 43;
      }
      j == 42 && (lk = p >= 0);
      b[c + 62] = lk;
      var Bc = c + 53, be = c + 49;
      j = b[c + 62] & 1 ? 44 : 45;
      if (j == 44) {
        b[Bc] = b[be];
        o[Bc] = o[be];
        b[Bc + 1] = b[be + 1];
        o[Bc + 1] = o[be + 1];
        var df = c + 57, ef = c + 49;
        b[df] = b[ef];
        o[df] = o[ef];
        b[df + 1] = b[ef + 1];
        o[df + 1] = o[ef + 1];
        var ff = c + 59;
        Nd(ja, c + 49);
        b[ff] = b[ja];
        o[ff] = o[ja];
        b[ff + 1] = b[ja + 1];
        o[ff + 1] = o[ja + 1];
      } else if (j == 45) {
        Nd(Y, be);
        b[Bc] = b[Y];
        o[Bc] = o[Y];
        b[Bc + 1] = b[Y + 1];
        o[Bc + 1] = o[Y + 1];
        var gf = c + 57, hf = c + 49;
        b[gf] = b[hf];
        o[gf] = o[hf];
        b[gf + 1] = b[hf + 1];
        o[gf + 1] = o[hf + 1];
        var jf = c + 59;
        Nd(W, c + 47);
        b[jf] = b[W];
        o[jf] = o[W];
        b[jf + 1] = b[W + 1];
        o[jf + 1] = o[W + 1];
      }
    }
  } else if (j == 46) if (j = m & 1 ? 47 : 58, j == 47) {
    var mk = p >= 0;
    j = x & 1 ? 48 : 53;
    if (j == 48) {
      if (mk) {
        var nk = 1;
        j = 50;
      } else j = 49;
      j == 49 && (nk = s >= 0);
      b[c + 62] = nk;
      var Cc = c + 53, ce = c + 49;
      j = b[c + 62] & 1 ? 51 : 52;
      if (j == 51) {
        b[Cc] = b[ce];
        o[Cc] = o[ce];
        b[Cc + 1] = b[ce + 1];
        o[Cc + 1] = o[ce + 1];
        var kf = c + 57;
        Nd($, c + 49);
        b[kf] = b[$];
        o[kf] = o[$];
        b[kf + 1] = b[$ + 1];
        o[kf + 1] = o[$ + 1];
        var lf = c + 59, mf = c + 51;
        b[lf] = b[mf];
        o[lf] = o[mf];
        b[lf + 1] = b[mf + 1];
        o[lf + 1] = o[mf + 1];
      } else if (j == 52) {
        Nd(fa, ce);
        b[Cc] = b[fa];
        o[Cc] = o[fa];
        b[Cc + 1] = b[fa + 1];
        o[Cc + 1] = o[fa + 1];
        var nf = c + 57;
        Nd(la, c + 49);
        b[nf] = b[la];
        o[nf] = o[la];
        b[nf + 1] = b[la + 1];
        o[nf + 1] = o[la + 1];
        var of = c + 59, pf = c + 49;
        b[of] = b[pf];
        o[of] = o[pf];
        b[of + 1] = b[pf + 1];
        o[of + 1] = o[pf + 1];
      }
    } else if (j == 53) {
      if (mk) j = 54; else {
        var ok = 0;
        j = 55;
      }
      j == 54 && (ok = s >= 0);
      b[c + 62] = ok;
      var Dc = c + 53, de = c + 49;
      j = b[c + 62] & 1 ? 56 : 57;
      if (j == 56) {
        b[Dc] = b[de];
        o[Dc] = o[de];
        b[Dc + 1] = b[de + 1];
        o[Dc + 1] = o[de + 1];
        var qf = c + 57;
        Nd(ga, c + 49);
        b[qf] = b[ga];
        o[qf] = o[ga];
        b[qf + 1] = b[ga + 1];
        o[qf + 1] = o[ga + 1];
        var rf = c + 59, sf = c + 49;
        b[rf] = b[sf];
        o[rf] = o[sf];
        b[rf + 1] = b[sf + 1];
        o[rf + 1] = o[sf + 1];
      } else if (j == 57) {
        Nd(ka, de);
        b[Dc] = b[ka];
        o[Dc] = o[ka];
        b[Dc + 1] = b[ka + 1];
        o[Dc + 1] = o[ka + 1];
        var tf = c + 57;
        Nd(oa, c + 51);
        b[tf] = b[oa];
        o[tf] = o[oa];
        b[tf + 1] = b[oa + 1];
        o[tf + 1] = o[oa + 1];
        var uf = c + 59, vf = c + 49;
        b[uf] = b[vf];
        o[uf] = o[vf];
        b[uf + 1] = b[vf + 1];
        o[uf + 1] = o[vf + 1];
      }
    }
  } else if (j == 58) {
    b[c + 62] = p >= 0;
    var Ec = c + 53, ee = c + 49;
    j = b[c + 62] & 1 ? 59 : 60;
    if (j == 59) {
      b[Ec] = b[ee];
      o[Ec] = o[ee];
      b[Ec + 1] = b[ee + 1];
      o[Ec + 1] = o[ee + 1];
      var wf = c + 57;
      Nd(ta, c + 49);
      b[wf] = b[ta];
      o[wf] = o[ta];
      b[wf + 1] = b[ta + 1];
      o[wf + 1] = o[ta + 1];
      var xf = c + 59;
      Nd(Aa, c + 49);
      b[xf] = b[Aa];
      o[xf] = o[Aa];
      b[xf + 1] = b[Aa + 1];
      o[xf + 1] = o[Aa + 1];
    } else if (j == 60) {
      Nd(Ha, ee);
      b[Ec] = b[Ha];
      o[Ec] = o[Ha];
      b[Ec + 1] = b[Ha + 1];
      o[Ec + 1] = o[Ha + 1];
      var yf = c + 57, zf = c + 49;
      b[yf] = b[zf];
      o[yf] = o[zf];
      b[yf + 1] = b[zf + 1];
      o[yf + 1] = o[zf + 1];
      var Af = c + 59, Bf = c + 49;
      b[Af] = b[Bf];
      o[Af] = o[Bf];
      b[Af + 1] = b[Bf + 1];
      o[Af + 1] = o[Bf + 1];
    }
  }
  b[c + 32] = b[g + 37];
  Ba = 0;
  j = Ba < b[g + 37] ? 62 : 64;
  a : do if (j == 62) for (var gq = c, hq = c + 33, Cf = Ra, iq = c + 16, jq = c + 35, Df = nb; ; ) {
    var kq = gq + (Ba << 1);
    Nc(Ra, hq, g + 5 + (Ba << 1));
    var Ef = kq;
    b[Ef] = b[Cf];
    o[Ef] = o[Cf];
    b[Ef + 1] = b[Cf + 1];
    o[Ef + 1] = o[Cf + 1];
    var lq = iq + (Ba << 1);
    R(nb, jq, g + 21 + (Ba << 1));
    var Ff = lq;
    b[Ff] = b[Df];
    o[Ff] = o[Df];
    b[Ff + 1] = b[Df + 1];
    o[Ff + 1] = o[Df + 1];
    Ba += 1;
    if (Ba >= b[g + 37]) {
      j = 64;
      break a;
    }
  } while (0);
  o[c + 61] = .019999999552965164;
  b[f + 15] = 0;
  Od(Da, c);
  j = b[Da] == 0 ? 100 : 65;
  a : do if (j == 65) if (o[Da + 2] > o[c + 61]) j = 100; else {
    Pd(Ta, c);
    j = b[Ta] != 0 ? 67 : 68;
    if (j == 67 && o[Ta + 2] > o[c + 61]) {
      j = 100;
      break a;
    }
    j = b[Ta] == 0 ? 69 : 70;
    if (j == 69) {
      var Hd = La, Id = Da;
      b[Hd] = b[Id];
      o[Hd] = o[Id];
      b[Hd + 1] = b[Id + 1];
      o[Hd + 1] = o[Id + 1];
      b[Hd + 2] = b[Id + 2];
      o[Hd + 2] = o[Id + 2];
    } else if (j == 70) {
      var Rb = La;
      j = o[Ta + 2] > o[Da + 2] * .9800000190734863 + .0010000000474974513 ? 71 : 72;
      if (j == 71) {
        var Jd = Ta;
        b[Rb] = b[Jd];
        o[Rb] = o[Jd];
        b[Rb + 1] = b[Jd + 1];
        o[Rb + 1] = o[Jd + 1];
        b[Rb + 2] = b[Jd + 2];
        o[Rb + 2] = o[Jd + 2];
      } else if (j == 72) {
        var Kd = Da;
        b[Rb] = b[Kd];
        o[Rb] = o[Kd];
        b[Rb + 1] = b[Kd + 1];
        o[Rb + 1] = o[Kd + 1];
        b[Rb + 2] = b[Kd + 2];
        o[Rb + 2] = o[Kd + 2];
      }
    }
    var rk = f + 14;
    j = b[La] == 1 ? 74 : 84;
    if (j == 74) {
      b[rk] = 1;
      ya = 0;
      xa = J(c + 53, c + 16);
      ua = 1;
      var sk = c + 32;
      j = ua < b[sk] ? 75 : 79;
      b : do if (j == 75) for (var mq = c + 53, nq = c + 16; ; ) if (Ia = J(mq, nq + (ua << 1)), j = Ia < xa ? 77 : 78, j == 77 && (xa = Ia, ya = ua), ua += 1, ua >= b[sk]) {
        j = 79;
        break b;
      } while (0);
      ma = ya;
      if (ma + 1 < b[c + 32]) j = 80; else {
        var tk = 0;
        j = 81;
      }
      j == 80 && (tk = ma + 1);
      Ja = tk;
      var Gf = pa, Hf = c + (ma << 1);
      b[Gf] = b[Hf];
      o[Gf] = o[Hf];
      b[Gf + 1] = b[Hf + 1];
      o[Gf + 1] = o[Hf + 1];
      b[pa + 2] = 0;
      b[pa + 3] = ma & 255;
      b[pa + 4] = 1;
      b[pa + 5] = 0;
      var If = pa + 3, Jf = c + (Ja << 1);
      b[If] = b[Jf];
      o[If] = o[Jf];
      b[If + 1] = b[Jf + 1];
      o[If + 1] = o[Jf + 1];
      b[pa + 5] = 0;
      b[pa + 6] = Ja & 255;
      b[pa + 7] = 1;
      b[pa + 8] = 0;
      var uk = ha;
      j = b[c + 62] & 1 ? 82 : 83;
      if (j == 82) {
        b[uk] = 0;
        b[ha + 1] = 1;
        var Kf = ha + 2, Lf = c + 41;
        b[Kf] = b[Lf];
        o[Kf] = o[Lf];
        b[Kf + 1] = b[Lf + 1];
        o[Kf + 1] = o[Lf + 1];
        var Mf = ha + 4, Nf = c + 43;
        b[Mf] = b[Nf];
        o[Mf] = o[Nf];
        b[Mf + 1] = b[Nf + 1];
        o[Mf + 1] = o[Nf + 1];
        var Of = ha + 6, Pf = c + 49;
        b[Of] = b[Pf];
        o[Of] = o[Pf];
        b[Of + 1] = b[Pf + 1];
        o[Of + 1] = o[Pf + 1];
      } else if (j == 83) {
        b[uk] = 1;
        b[ha + 1] = 0;
        var Qf = ha + 2, Rf = c + 43;
        b[Qf] = b[Rf];
        o[Qf] = o[Rf];
        b[Qf + 1] = b[Rf + 1];
        o[Qf + 1] = o[Rf + 1];
        var Sf = ha + 4, Tf = c + 41;
        b[Sf] = b[Tf];
        o[Sf] = o[Tf];
        b[Sf + 1] = b[Tf + 1];
        o[Sf + 1] = o[Tf + 1];
        var oq = ha + 6;
        Nd(Ea, c + 49);
        var Uf = oq, Vf = Ea;
        b[Uf] = b[Vf];
        o[Uf] = o[Vf];
        b[Uf + 1] = b[Vf + 1];
        o[Uf + 1] = o[Vf + 1];
      }
    } else if (j == 84) {
      b[rk] = 2;
      var Wf = pa, Xf = c + 41;
      b[Wf] = b[Xf];
      o[Wf] = o[Xf];
      b[Wf + 1] = b[Xf + 1];
      o[Wf + 1] = o[Xf + 1];
      b[pa + 2] = 0;
      b[pa + 3] = b[La + 1] & 255;
      b[pa + 4] = 0;
      b[pa + 5] = 1;
      var Yf = pa + 3, Zf = c + 43;
      b[Yf] = b[Zf];
      o[Yf] = o[Zf];
      b[Yf + 1] = b[Zf + 1];
      o[Yf + 1] = o[Zf + 1];
      b[pa + 5] = 0;
      b[pa + 6] = b[La + 1] & 255;
      b[pa + 7] = 0;
      b[pa + 8] = 1;
      b[ha] = b[La + 1];
      if (b[ha] + 1 < b[c + 32]) j = 85; else {
        var vk = 0;
        j = 86;
      }
      j == 85 && (vk = b[ha] + 1);
      b[ha + 1] = vk;
      var $f = ha + 2, ag = c + (b[ha] << 1);
      b[$f] = b[ag];
      o[$f] = o[ag];
      b[$f + 1] = b[ag + 1];
      o[$f + 1] = o[ag + 1];
      var bg = ha + 4, cg = c + (b[ha + 1] << 1);
      b[bg] = b[cg];
      o[bg] = o[cg];
      b[bg + 1] = b[cg + 1];
      o[bg + 1] = o[cg + 1];
      var dg = ha + 6, eg = c + 16 + (b[ha] << 1);
      b[dg] = b[eg];
      o[dg] = o[eg];
      b[dg + 1] = b[eg + 1];
      o[dg + 1] = o[eg + 1];
    }
    lc(ha + 8, o[ha + 7], -o[ha + 6]);
    var pq = ha + 11;
    Nd(wa, ha + 8);
    var fg = pq, gg = wa;
    b[fg] = b[gg];
    o[fg] = o[gg];
    b[fg + 1] = b[gg + 1];
    o[fg + 1] = o[gg + 1];
    o[ha + 10] = J(ha + 8, ha + 2);
    o[ha + 13] = J(ha + 11, ha + 4);
    var wk = Qd(Ma, pa, ha + 8, o[ha + 10], b[ha]);
    Eb = wk;
    if (wk < 2) j = 100; else if (Eb = Qd(Ca, Ma, ha + 11, o[ha + 13], b[ha + 1]), Eb < 2) j = 100; else {
      j = b[La] == 1 ? 90 : 91;
      if (j == 90) {
        var hg = f + 10, ig = ha + 6;
        b[hg] = b[ig];
        o[hg] = o[ig];
        b[hg + 1] = b[ig + 1];
        o[hg + 1] = o[ig + 1];
        var jg = f + 12, kg = ha + 2;
        b[jg] = b[kg];
        o[jg] = o[kg];
        b[jg + 1] = b[kg + 1];
        o[jg + 1] = o[kg + 1];
      } else if (j == 91) {
        var lg = f + 10, mg = g + 21 + (b[ha] << 1);
        b[lg] = b[mg];
        o[lg] = o[mg];
        b[lg + 1] = b[mg + 1];
        o[lg + 1] = o[mg + 1];
        var ng = f + 12, og = g + 5 + (b[ha] << 1);
        b[ng] = b[og];
        o[ng] = o[og];
        b[ng + 1] = b[og + 1];
        o[ng + 1] = o[og + 1];
      }
      Na = Ub = 0;
      for (var qq = ha + 6, rq = ha + 2, sq = c + 61, tq = La, uq = c + 33, pg = dc; ; ) {
        C(Mb, Ca + Na * 3, rq);
        cc = J(qq, Mb);
        j = cc <= o[sq] ? 94 : 98;
        if (j == 94) {
          var xk = Ua = f + Ub * 5, yk = Ca + Na * 3;
          j = b[tq] == 1 ? 95 : 96;
          if (j == 95) {
            Rc(dc, uq, yk);
            var qg = xk;
            b[qg] = b[pg];
            o[qg] = o[pg];
            b[qg + 1] = b[pg + 1];
            o[qg + 1] = o[pg + 1];
            b[Ua + 4] = b[Ca + Na * 3 + 2];
            o[Ua + 4] = o[Ca + Na * 3 + 2];
          } else if (j == 96) {
            var rg = xk, sg = yk;
            b[rg] = b[sg];
            o[rg] = o[sg];
            b[rg + 1] = b[sg + 1];
            o[rg + 1] = o[sg + 1];
            b[Ua + 6] = b[Ca + Na * 3 + 5];
            b[Ua + 7] = b[Ca + Na * 3 + 4];
            b[Ua + 4] = b[Ca + Na * 3 + 3];
            b[Ua + 5] = b[Ca + Na * 3 + 2];
          }
          Ub += 1;
        }
        var zk = Na + 1;
        Na = zk;
        if (zk >= 2) {
          j = 99;
          break;
        }
      }
      b[f + 15] = Ub;
    }
  } while (0);
  a = h;
}

Ld.X = 1;

function Q(c, f) {
  return o[c] * o[f + 1] - o[c + 1] * o[f];
}

function Nd(c, f) {
  lc(c, -o[f], -o[f + 1]);
}

function R(c, f, d) {
  mc(c, o[f + 1] * o[d] - o[f] * o[d + 1], o[f] * o[d] + o[f + 1] * o[d + 1]);
}

function Md(c, f, d) {
  mc(c, o[f + 1] * o[d] + o[f] * o[d + 1], -o[f] * o[d] + o[f + 1] * o[d + 1]);
}

function Od(c, f) {
  var d = a;
  a += 2;
  var e, g, i;
  b[c] = 1;
  b[c + 1] = b[f + 62] & 1 ? 0 : 1;
  o[c + 2] = 3.4028234663852886e+38;
  g = 0;
  var h = f + 32;
  e = g < b[h] ? 1 : 5;
  a : do if (e == 1) for (var j = f + 53, k = f, l = f + 41, m = c + 2, n = c + 2; ; ) if (C(d, k + (g << 1), l), i = J(j, d), e = i < o[m] ? 3 : 4, e == 3 && (o[n] = i), g += 1, g >= b[h]) break a; while (0);
  a = d;
}

Od.X = 1;

function Pd(c, f) {
  var d = a;
  a += 12;
  var e, g, i = d + 2, h = d + 4, j, k = d + 6, l = d + 8, m = d + 10;
  b[c] = 0;
  b[c + 1] = -1;
  o[c + 2] = -3.4028234663852886e+38;
  mc(d, -o[f + 54], o[f + 53]);
  g = 0;
  for (var n = f + 32, p = f + 16, t = f + 41, q = f + 43, s = f + 61, u = f + 59, x = f + 53, v = c + 2, y = c + 1, z = c + 2, B = f + 57, E = f + 53; ; ) {
    if (g >= b[n]) {
      e = 10;
      break;
    }
    Nd(i, p + (g << 1));
    C(h, f + (g << 1), t);
    e = J(i, h);
    C(k, f + (g << 1), q);
    j = J(i, k);
    j = e < j ? e : j;
    if (j > o[s]) {
      e = 3;
      break;
    }
    e = J(i, d) >= 0 ? 5 : 6;
    e == 5 ? (C(l, i, u), e = J(l, x) < -.03490658849477768 ? 9 : 7) : e == 6 && (C(m, i, B), e = J(m, E) < -.03490658849477768 ? 9 : 7);
    e == 7 && (j > o[v] ? (b[c] = 2, b[y] = g, o[z] = j) : e = 9);
    g += 1;
  }
  e == 3 && (b[c] = 2, b[c + 1] = g, o[c + 2] = j);
  a = d;
}

Pd.X = 1;

function Rd(c, f, d, e, g) {
  var i = a;
  a += 56;
  var h, j, k, l = i + 1, m, n, p = i + 2, t = i + 6, q, s, u = i + 10, x, v, y, z = i + 16, B = i + 18, E = i + 20, D = i + 22, H = i + 24, I = i + 26, M = i + 28, G = i + 30, S = i + 32, P = i + 34, L, T, F = i + 36, X = i + 42, Z = i + 48, V, aa = i + 50, ja = i + 52;
  b[c + 15] = 0;
  j = o[f + 2] + o[e + 2];
  b[i] = 0;
  k = Sd(i, f, d, e, g);
  h = k > j ? 16 : 1;
  do if (h == 1) if (b[l] = 0, h = Sd(l, e, g, f, d), h > j) h = 16; else {
    h = h > k * .9800000190734863 + .0010000000474974513 ? 3 : 4;
    h == 3 ? (m = e, n = f, q = p, s = g, b[q] = b[s], o[q] = o[s], b[q + 1] = b[s + 1], o[q + 1] = o[s + 1], b[q + 2] = b[s + 2], o[q + 2] = o[s + 2], b[q + 3] = b[s + 3], o[q + 3] = o[s + 3], q = t, s = d, b[q] = b[s], o[q] = o[s], b[q + 1] = b[s + 1], o[q + 1] = o[s + 1], b[q + 2] = b[s + 2], o[q + 2] = o[s + 2], b[q + 3] = b[s + 3], o[q + 3] = o[s + 3], q = b[l], b[c + 14] = 2, s = 1) : h == 4 && (m = f, n = e, q = p, s = d, b[q] = b[s], o[q] = o[s], b[q + 1] = b[s + 1], o[q + 1] = o[s + 1], b[q + 2] = b[s + 2], o[q + 2] = o[s + 2], b[q + 3] = b[s + 3], o[q + 3] = o[s + 3], q = t, s = g, b[q] = b[s], o[q] = o[s], b[q + 1] = b[s + 1], o[q + 1] = o[s + 1], b[q + 2] = b[s + 2], o[q + 2] = o[s + 2], b[q + 3] = b[s + 3], o[q + 3] = o[s + 3], q = b[i], b[c + 14] = 1, s = 0);
    Td(u, m, p, q, n, t);
    h = b[m + 37];
    x = m + 5;
    v = q;
    if (q + 1 < h) h = 6; else {
      var Y = 0;
      h = 7;
    }
    h == 6 && (Y = q + 1);
    y = Y;
    L = z;
    T = x + (v << 1);
    b[L] = b[T];
    o[L] = o[T];
    b[L + 1] = b[T + 1];
    o[L + 1] = o[T + 1];
    L = B;
    x += y << 1;
    b[L] = b[x];
    o[L] = o[x];
    b[L + 1] = b[x + 1];
    o[L + 1] = o[x + 1];
    C(E, B, z);
    Vc(E);
    Ud(D, E);
    N(I, z, B);
    K(H, .5, I);
    R(M, p + 2, E);
    Ud(G, M);
    Nc(S, p, z);
    x = z;
    L = S;
    b[x] = b[L];
    o[x] = o[L];
    b[x + 1] = b[L + 1];
    o[x + 1] = o[L + 1];
    Nc(P, p, B);
    x = B;
    L = P;
    b[x] = b[L];
    o[x] = o[L];
    b[x + 1] = b[L + 1];
    o[x + 1] = o[L + 1];
    x = J(G, z);
    L = -J(M, z) + j;
    T = J(M, B) + j;
    var W = F, $ = u;
    Nd(Z, M);
    if (Qd(W, $, Z, L, v) < 2) h = 16; else if (v = Qd(X, F, M, T, y), v < 2) h = 16; else {
      v = c + 10;
      y = D;
      b[v] = b[y];
      o[v] = o[y];
      b[v + 1] = b[y + 1];
      o[v + 1] = o[y + 1];
      v = c + 12;
      y = H;
      b[v] = b[y];
      o[v] = o[y];
      b[v + 1] = b[y + 1];
      o[v + 1] = o[y + 1];
      y = v = 0;
      L = aa;
      T = ja;
      for (var W = ja + 1, $ = ja, fa = ja + 3, la = ja + 2; ; ) {
        h = J(G, X + y * 3) - x;
        h = h <= j ? 11 : 14;
        if (h == 11) {
          h = V = c + v * 5;
          Rc(aa, t, X + y * 3);
          b[h] = b[L];
          o[h] = o[L];
          b[h + 1] = b[L + 1];
          o[h + 1] = o[L + 1];
          b[V + 4] = b[X + y * 3 + 2];
          o[V + 4] = o[X + y * 3 + 2];
          h = s != 0 ? 12 : 13;
          if (h == 12) {
            var ga = V + 4;
            b[T] = b[ga];
            o[T] = o[ga];
            b[T + 1] = b[ga + 1];
            o[T + 1] = o[ga + 1];
            b[T + 2] = b[ga + 2];
            o[T + 2] = o[ga + 2];
            b[T + 3] = b[ga + 3];
            o[T + 3] = o[ga + 3];
            b[V + 4] = b[W];
            b[V + 5] = b[$];
            b[V + 6] = b[fa];
            b[V + 7] = b[la];
          }
          v += 1;
        }
        y = V = y + 1;
        if (V >= 2) {
          h = 15;
          break;
        }
      }
      b[c + 15] = v;
    }
  } while (0);
  a = i;
}

Rd.X = 1;

function Ud(c, f) {
  mc(c, 1 * o[f + 1], -1 * o[f]);
}

function Sd(c, f, d, e, g) {
  var i = a;
  a += 8;
  var h, j, k, l;
  h = i + 2;
  var m = i + 4, n = i + 6, p, t, q, s, u, x, v, y;
  k = b[f + 37];
  l = f + 21;
  Nc(h, g, e + 3);
  Nc(m, d, f + 3);
  C(i, h, m);
  Md(n, d + 2, i);
  m = 0;
  p = -3.4028234663852886e+38;
  t = 0;
  h = t < k ? 1 : 4;
  a : do if (h == 1) for (;;) if (q = J(l + (t << 1), n), h = q > p ? 2 : 3, h == 2 && (p = q, m = t), t += 1, t >= k) break a; while (0);
  l = Vd(f, d, m, e, g);
  h = m - 1 >= 0 ? 5 : 6;
  h == 5 ? s = m - 1 : h == 6 && (s = k - 1);
  n = Vd(f, d, s, e, g);
  m + 1 < k ? h = 8 : (u = 0, h = 9);
  h == 8 && (u = m + 1);
  p = Vd(f, d, u, e, g);
  h = n > l ? 10 : 12;
  if (h == 10) if (n > p) {
    y = -1;
    x = s;
    v = n;
    var z = -1;
    h = 15;
  } else h = 12;
  a : do if (h == 12) if (h = p > l ? 13 : 14, h == 13) {
    y = 1;
    x = u;
    v = p;
    z = 1;
    h = 15;
    break a;
  } else if (h == 14) {
    b[c] = m;
    j = l;
    h = 26;
    break a;
  } while (0);
  if (h == 15) {
    for (;;) {
      h = z == -1 ? 16 : 20;
      if (h == 16) {
        h = x - 1 >= 0 ? 17 : 18;
        if (h == 17) var B = x - 1; else h == 18 && (B = k - 1);
        m = B;
      } else if (h == 20) {
        if (x + 1 < k) h = 21; else {
          var E = 0;
          h = 22;
        }
        h == 21 && (E = x + 1);
        m = E;
      }
      l = Vd(f, d, m, e, g);
      if (l <= v) break;
      x = m;
      v = l;
      z = y;
    }
    b[c] = x;
    j = v;
  }
  a = i;
  return j;
}

Sd.X = 1;

function Td(c, f, d, e, g, i) {
  var h = a;
  a += 8;
  var j, k, l, m, n = h + 2, p = h + 4, t = h + 6;
  j = f + 21;
  k = b[g + 37];
  l = g + 5;
  m = g + 21;
  g = 0 <= e ? 1 : 2;
  g == 1 && (g = e < b[f + 37] ? 3 : 2);
  g == 2 && O(Wd, 151, Xd, fe);
  g = i + 2;
  R(n, d + 2, j + (e << 1));
  Md(h, g, n);
  d = 0;
  j = 3.4028234663852886e+38;
  n = 0;
  g = n < k ? 4 : 7;
  a : do if (g == 4) for (;;) if (f = J(h, m + (n << 1)), g = f < j ? 5 : 6, g == 5 && (j = f, d = n), n += 1, n >= k) break a; while (0);
  m = d;
  if (m + 1 < k) g = 8; else var q = 0, g = 9;
  g == 8 && (q = m + 1);
  k = q;
  Nc(p, i, l + (m << 1));
  b[c] = b[p];
  o[c] = o[p];
  b[c + 1] = b[p + 1];
  o[c + 1] = o[p + 1];
  b[c + 2] = e & 255;
  b[c + 3] = m & 255;
  b[c + 4] = 1;
  b[c + 5] = 0;
  p = c + 3;
  Nc(t, i, l + (k << 1));
  b[p] = b[t];
  o[p] = o[t];
  b[p + 1] = b[t + 1];
  o[p + 1] = o[t + 1];
  b[c + 5] = e & 255;
  b[c + 6] = k & 255;
  b[c + 7] = 1;
  b[c + 8] = 0;
  a = h;
}

Td.X = 1;

function Vd(c, f, d, e, g) {
  var i = a;
  a += 10;
  var h, j, k, l, m = i + 2, n, p, t = i + 4, q = i + 6, s = i + 8;
  h = c + 5;
  j = c + 21;
  k = b[e + 37];
  l = e + 5;
  e = 0 <= d ? 1 : 2;
  e == 1 && (e = d < b[c + 37] ? 3 : 2);
  e == 2 && O(Wd, 32, ge, fe);
  R(i, f + 2, j + (d << 1));
  Md(m, g + 2, i);
  c = 0;
  j = 3.4028234663852886e+38;
  n = 0;
  e = n < k ? 4 : 7;
  a : do if (e == 4) for (;;) if (p = J(l + (n << 1), m), e = p < j ? 5 : 6, e == 5 && (j = p, c = n), n += 1, n >= k) break a; while (0);
  Nc(t, f, h + (d << 1));
  Nc(q, g, l + (c << 1));
  C(s, q, t);
  f = J(s, i);
  a = i;
  return f;
}

Vd.X = 1;

function he(c, f, d, e, g, i) {
  var h = a;
  a += 60;
  var j, k = h + 2, l = h + 4, m = h + 6, n = h + 8, p = h + 10, t = h + 12, q = h + 14, s = h + 16, u = h + 18, x = h + 20, v, y = h + 22, z = h + 24, B = h + 26, E = h + 28, D = h + 30, H = h + 32, I = h + 34, M = h + 36, G = h + 38, S = h + 40, P = h + 42, L = h + 44, T = h + 46, F = h + 48, X = h + 50, Z = h + 52, V = h + 54, aa = h + 56, ja = h + 58;
  j = b[f + 15] == 0 ? 12 : 1;
  a : do if (j == 1) {
    j = b[f + 14];
    if (j == 0) j = 2; else if (j == 1) j = 5; else if (j == 2) j = 8; else break;
    if (j == 2) {
      lc(c, 1, 0);
      Nc(h, d, f + 12);
      Nc(k, g, f);
      j = Uc(h, k) > 1.4210854715202004e-14 ? 3 : 4;
      if (j == 3) {
        v = c;
        C(l, k, h);
        var Y = l;
        b[v] = b[Y];
        o[v] = o[Y];
        b[v + 1] = b[Y + 1];
        o[v + 1] = o[Y + 1];
        Vc(c);
      }
      K(n, e, c);
      N(m, h, n);
      K(t, i, c);
      C(p, k, t);
      v = c + 2;
      N(s, m, p);
      K(q, .5, s);
      Y = q;
      b[v] = b[Y];
      o[v] = o[Y];
      b[v + 1] = b[Y + 1];
      o[v + 1] = o[Y + 1];
    } else if (j == 5) {
      v = c;
      R(u, d + 2, f + 10);
      Y = u;
      b[v] = b[Y];
      o[v] = o[Y];
      b[v + 1] = b[Y + 1];
      o[v + 1] = o[Y + 1];
      Nc(x, d, f + 12);
      v = 0;
      if (v >= b[f + 15]) break a;
      for (var W = Y = c, $ = c, fa = c + 2, la = I; ; ) {
        Nc(y, g, f + v * 5);
        var ga = e;
        C(E, y, x);
        K(B, ga - J(E, Y), W);
        N(z, y, B);
        K(H, i, $);
        C(D, y, H);
        ga = fa + (v << 1);
        N(M, z, D);
        K(I, .5, M);
        b[ga] = b[la];
        o[ga] = o[la];
        b[ga + 1] = b[la + 1];
        o[ga + 1] = o[la + 1];
        v += 1;
        if (v >= b[f + 15]) break a;
      }
    } else if (j == 8) {
      j = c;
      R(G, g + 2, f + 10);
      v = G;
      b[j] = b[v];
      o[j] = o[v];
      b[j + 1] = b[v + 1];
      o[j + 1] = o[v + 1];
      Nc(S, g, f + 12);
      v = 0;
      j = v < b[f + 15] ? 9 : 11;
      b : do if (j == 9) {
        $ = W = Y = c;
        fa = c + 2;
        for (la = V; ; ) if (Nc(P, d, f + v * 5), ga = i, C(F, P, S), K(T, ga - J(F, Y), W), N(L, P, T), K(Z, e, $), C(X, P, Z), ga = fa + (v << 1), N(aa, X, L), K(V, .5, aa), b[ga] = b[la], o[ga] = o[la], b[ga + 1] = b[la + 1], o[ga + 1] = o[la + 1], v += 1, v >= b[f + 15]) {
          j = 11;
          break b;
        }
      } while (0);
      v = c;
      Nd(ja, c);
      Y = ja;
      b[v] = b[Y];
      o[v] = o[Y];
      b[v + 1] = b[Y + 1];
      o[v + 1] = o[Y + 1];
    }
  } while (0);
  a = h;
}

he.X = 1;

function ie(c) {
  var f;
  if (c > 0) {
    var d = c;
    f = 2;
  } else f = 1;
  f == 1 && (d = -c);
  return d;
}

function je(c) {
  b[c + 4] = 0;
  b[c + 5] = 0;
  o[c + 6] = 0;
}

function Qd(c, f, d, e, g) {
  var i = a;
  a += 6;
  var h, j, k = i + 2, l = i + 4;
  h = 0;
  j = J(d, f) - e;
  d = J(d, f + 3) - e;
  if (j <= 0) e = 1; else var m = d, e = 2;
  e == 1 && (m = h, h = m + 1, m = c + m * 3, b[m] = b[f], o[m] = o[f], b[m + 1] = b[f + 1], o[m + 1] = o[f + 1], b[m + 2] = b[f + 2], o[m + 2] = o[f + 2], m = d);
  if ((m <= 0 ? 3 : 4) == 3) m = h, h = m + 1, m = c + m * 3, e = f + 3, b[m] = b[e], o[m] = o[e], b[m + 1] = b[e + 1], o[m + 1] = o[e + 1], b[m + 2] = b[e + 2], o[m + 2] = o[e + 2];
  if ((j * d < 0 ? 5 : 6) == 5) j /= j - d, d = c + h * 3, C(l, f + 3, f), K(k, j, l), N(i, f, k), b[d] = b[i], o[d] = o[i], b[d + 1] = b[i + 1], o[d + 1] = o[i + 1], b[c + h * 3 + 2] = g & 255, b[c + h * 3 + 3] = b[f + 3], b[c + h * 3 + 4] = 0, b[c + h * 3 + 5] = 1, h += 1;
  a = i;
  return h;
}

Qd.X = 1;

function ke(c, f, d) {
  var e;
  e = b[f + 1];
  e = e == 0 ? 1 : e == 2 ? 2 : e == 3 ? 3 : e == 1 ? 10 : 11;
  e == 11 ? O(le, 81, me, ne) : e == 1 ? (b[c + 4] = f + 3, b[c + 5] = 1, o[c + 6] = o[f + 2]) : e == 2 ? (b[c + 4] = f + 5, b[c + 5] = b[f + 37], o[c + 6] = o[f + 2]) : e == 3 ? (e = 0 <= d ? 4 : 5, e == 4 && (e = d < b[f + 4] ? 6 : 5), e == 5 && O(le, 53, me, oe), e = b[f + 3] + (d << 1), b[c] = b[e], o[c] = o[e], b[c + 1] = b[e + 1], o[c + 1] = o[e + 1], e = d + 1 < b[f + 4] ? 7 : 8, e == 7 ? (e = c + 2, d = b[f + 3] + (d + 1 << 1), b[e] = b[d], o[e] = o[d], b[e + 1] = b[d + 1], o[e + 1] = o[d + 1]) : e == 8 && (d = c + 2, e = b[f + 3], b[d] = b[e], o[d] = o[e], b[d + 1] = b[e + 1], o[d + 1] = o[e + 1]), b[c + 4] = c, b[c + 5] = 2, o[c + 6] = o[f + 2]) : e == 10 && (b[c + 4] = f + 3, b[c + 5] = 2, o[c + 6] = o[f + 2]);
}

ke.X = 1;

function pe(c) {
  var f = a;
  a += 6;
  var d, e = f + 2, g = f + 4, i;
  i = c + 4;
  b[f] = b[i];
  o[f] = o[i];
  b[f + 1] = b[i + 1];
  o[f + 1] = o[i + 1];
  i = c + 13;
  b[e] = b[i];
  o[e] = o[i];
  b[e + 1] = b[i + 1];
  o[e + 1] = o[i + 1];
  C(g, e, f);
  i = -J(f, g);
  d = i <= 0 ? 1 : 2;
  if (d == 1) o[c + 6] = 1, b[c + 27] = 1; else if (d == 2) if (e = J(e, g), d = e <= 0 ? 3 : 4, d == 3) {
    o[c + 15] = 1;
    b[c + 27] = 1;
    e = g = c + 9;
    for (g += 9; e < g; e++, c++) b[c] = b[e], o[c] = o[e];
  } else d == 4 && (g = 1 / (e + i), o[c + 6] = e * g, o[c + 15] = i * g, b[c + 27] = 2);
  a = f;
}

pe.X = 1;

function qe(c, f) {
  var d = a;
  a += 4;
  var e, g = d + 2;
  e = b[f + 27];
  e = e == 0 ? 1 : e == 1 ? 2 : e == 2 ? 3 : e == 3 ? 4 : 5;
  e == 5 ? (O(le, 207, re, ne), b[c] = b[se], o[c] = o[se], b[c + 1] = b[se + 1], o[c + 1] = o[se + 1]) : e == 1 ? (O(le, 194, re, ne), b[c] = b[se], o[c] = o[se], b[c + 1] = b[se + 1], o[c + 1] = o[se + 1]) : e == 2 ? (g = f + 4, b[c] = b[g], o[c] = o[g], b[c + 1] = b[g + 1], o[c + 1] = o[g + 1]) : e == 3 ? (K(d, o[f + 6], f + 4), K(g, o[f + 15], f + 13), N(c, d, g)) : e == 4 && (b[c] = b[se], o[c] = o[se], b[c + 1] = b[se + 1], o[c + 1] = o[se + 1]);
  a = d;
}

function te(c) {
  return o[c] * o[c] + o[c + 1] * o[c + 1];
}

function ue(c) {
  var f = a;
  a += 12;
  var d, e = f + 2, g = f + 4, i = f + 6, h, j;
  d = f + 8;
  var k, l, m = f + 10, n, p;
  j = c + 4;
  b[f] = b[j];
  o[f] = o[j];
  b[f + 1] = b[j + 1];
  o[f + 1] = o[j + 1];
  j = c + 13;
  b[e] = b[j];
  o[e] = o[j];
  b[e + 1] = b[j + 1];
  o[e + 1] = o[j + 1];
  j = c + 22;
  b[g] = b[j];
  o[g] = o[j];
  b[g + 1] = b[j + 1];
  o[g + 1] = o[j + 1];
  C(i, e, f);
  h = J(f, i);
  j = J(e, i);
  h = -h;
  C(d, g, f);
  k = J(f, d);
  l = J(g, d);
  k = -k;
  C(m, g, e);
  n = J(e, m);
  m = J(g, m);
  n = -n;
  d = Q(i, d);
  i = d * Q(e, g);
  g = d * Q(g, f);
  p = d * Q(f, e);
  d = h <= 0 ? 1 : 3;
  d == 1 && (k <= 0 ? (o[c + 6] = 1, b[c + 27] = 1, d = 21) : d = 3);
  a : do if (d == 3) {
    d = j > 0 ? 4 : 7;
    do if (d == 4) if (h > 0) if (p <= 0) {
      l = 1 / (j + h);
      o[c + 6] = j * l;
      o[c + 15] = h * l;
      b[c + 27] = 2;
      break a;
    } else d = 7; else d = 7; while (0);
    d = l > 0 ? 8 : 11;
    do if (d == 8) if (k > 0) if (g <= 0) {
      j = 1 / (l + k);
      o[c + 6] = l * j;
      o[c + 24] = k * j;
      b[c + 27] = 2;
      for (var e = j = c + 18, t = j + 9, q = c + 9; e < t; e++, q++) b[q] = b[e], o[q] = o[e];
      break a;
    } else d = 11; else d = 11; while (0);
    d = j <= 0 ? 12 : 14;
    do if (d == 12) if (n <= 0) {
      o[c + 15] = 1;
      b[c + 27] = 1;
      j = c;
      c += 9;
      e = c;
      t = c + 9;
      for (q = j; e < t; e++, q++) b[q] = b[e], o[q] = o[e];
      break a;
    } else d = 14; while (0);
    d = l <= 0 & m <= 0 ? 15 : 16;
    if (d == 15) {
      o[c + 24] = 1;
      b[c + 27] = 1;
      q = c;
      e = t = c + 18;
      for (t += 9; e < t; e++, q++) b[q] = b[e], o[q] = o[e];
    } else if (d == 16) {
      d = m > 0 ? 17 : 20;
      do if (d == 17) if (n > 0) if (i <= 0) {
        j = 1 / (m + n);
        o[c + 15] = m * j;
        o[c + 24] = n * j;
        b[c + 27] = 2;
        j = c;
        c += 18;
        e = c;
        t = c + 9;
        for (q = j; e < t; e++, q++) b[q] = b[e], o[q] = o[e];
        break a;
      } else d = 20; else d = 20; while (0);
      e = 1 / (i + g + p);
      o[c + 6] = i * e;
      o[c + 15] = g * e;
      o[c + 24] = p * e;
      b[c + 27] = 3;
    }
  } while (0);
  a = f;
}

ue.X = 1;

function ve(c, f, d) {
  var e = a;
  a += 72;
  var g, i, h = e + 4, j = e + 8, k = e + 36, l = e + 39, m;
  g = e + 42;
  var n, p, t = e + 44, q = e + 46, s = e + 48, u = e + 50, x = e + 52, v = e + 56, y = e + 58, z = e + 60, B, E, D = e + 62, H = e + 64, I = e + 66, M = e + 68, G = e + 70;
  b[we] += 1;
  i = d + 7;
  n = d + 14;
  b[e] = b[n];
  o[e] = o[n];
  b[e + 1] = b[n + 1];
  o[e + 1] = o[n + 1];
  b[e + 2] = b[n + 2];
  o[e + 2] = o[n + 2];
  b[e + 3] = b[n + 3];
  o[e + 3] = o[n + 3];
  n = d + 18;
  b[h] = b[n];
  o[h] = o[n];
  b[h + 1] = b[n + 1];
  o[h + 1] = o[n + 1];
  b[h + 2] = b[n + 2];
  o[h + 2] = o[n + 2];
  b[h + 3] = b[n + 3];
  o[h + 3] = o[n + 3];
  xe(j, f, d, e, i, h);
  qe(g, j);
  n = 0;
  var S = j + 27, P = j + 27, L = j + 27, T = j + 27, F = e + 2, X = h + 2, Z = j + 27;
  g = 0;
  a : for (;;) {
    if (g >= 20) break;
    m = b[S];
    p = 0;
    g = p < m ? 3 : 4;
    b : do if (g == 3) for (;;) if (b[k + p] = b[j + p * 9 + 7], b[l + p] = b[j + p * 9 + 8], p += 1, p >= m) break b; while (0);
    g = b[P];
    g = g == 1 ? 9 : g == 2 ? 5 : g == 3 ? 6 : 7;
    g == 7 ? (O(le, 498, ye, ne), g = 8) : g == 5 ? (pe(j), g = 8) : g == 6 && (ue(j), g = 8);
    if (g == 8 && b[L] == 3) break a;
    qe(t, j);
    p = q;
    B = j;
    E = a;
    a += 4;
    var V = ba, aa = ba, aa = E + 2, V = b[B + 27], V = V == 1 ? 1 : V == 2 ? 2 : 5;
    V == 5 ? (O(le, 184, ze, ne), b[p] = b[se], o[p] = o[se], b[p + 1] = b[se + 1], o[p + 1] = o[se + 1]) : V == 1 ? Nd(p, B + 4) : V == 2 && (C(E, B + 13, B + 4), Nd(aa, B + 4), aa = Q(E, aa), V = aa > 0 ? 3 : 4, V == 3 ? Ae(p, 1, E) : V == 4 && Ud(p, E));
    a = E;
    if (te(q) < 1.4210854715202004e-14) break;
    p = j + b[T] * 9;
    B = d;
    Nd(u, q);
    Md(s, F, u);
    b[p + 7] = Be(B, s);
    B = p;
    E = Ce(d, b[p + 7]);
    Nc(x, e, E);
    b[B] = b[x];
    o[B] = o[x];
    b[B + 1] = b[x + 1];
    o[B + 1] = o[x + 1];
    B = i;
    Md(v, X, q);
    b[p + 8] = Be(B, v);
    B = p + 2;
    E = Ce(i, b[p + 8]);
    Nc(y, h, E);
    b[B] = b[y];
    o[B] = o[y];
    b[B + 1] = b[y + 1];
    o[B + 1] = o[y + 1];
    B = p + 4;
    C(z, p + 2, p);
    b[B] = b[z];
    o[B] = o[z];
    b[B + 1] = b[z + 1];
    o[B + 1] = o[z + 1];
    n += 1;
    b[De] += 1;
    E = B = 0;
    b : for (;;) {
      if (E >= m) {
        g = 16;
        break;
      }
      g = b[p + 7] == b[k + E] ? 13 : 15;
      if (g == 13 && b[p + 8] == b[l + E]) {
        g = 14;
        break b;
      }
      E += 1;
    }
    g == 14 && (B = 1);
    if (B & 1) break;
    b[Z] += 1;
    g = n;
  }
  b[Ee] = b[Ee] > n ? b[Ee] : n;
  Fe(j, c, c + 2);
  g = Ge(c, c + 2);
  o[c + 4] = g;
  b[c + 5] = n;
  He(j, f);
  g = b[d + 22] & 1 ? 19 : 23;
  a : do if (g == 19) {
    j = o[d + 6];
    f = o[i + 6];
    g = o[c + 4] > j + f ? 20 : 22;
    do if (g == 20) if (o[c + 4] > 1.1920928955078125e-7) {
      o[c + 4] -= j + f;
      C(D, c + 2, c);
      Vc(D);
      d = c;
      K(H, j, D);
      Lb(d, H);
      c += 2;
      K(I, f, D);
      Ie(c, I);
      break a;
    } else g = 22; while (0);
    N(G, c, c + 2);
    K(M, .5, G);
    f = c;
    j = M;
    b[f] = b[j];
    o[f] = o[j];
    b[f + 1] = b[j + 1];
    o[f + 1] = o[j + 1];
    f = c + 2;
    j = M;
    b[f] = b[j];
    o[f] = o[j];
    b[f + 1] = b[j + 1];
    o[f + 1] = o[j + 1];
    o[c + 4] = 0;
  } while (0);
  a = e;
}

ve.X = 1;

function xe(c, f, d, e, g, i) {
  var h = a;
  a += 20;
  var j, k, l, m = h + 2, n = h + 4, p = h + 6, t = h + 8, q = h + 10, s = h + 12, u = h + 14, x = h + 16, v = h + 18;
  j = b[f + 1] <= 3 ? 2 : 1;
  j == 1 && O(le, 102, Je, Ke);
  b[c + 27] = b[f + 1];
  k = 0;
  var y = c + 27;
  j = k < b[y] ? 3 : 5;
  a : do if (j == 3) for (var z = h, B = m, E = n, D = p, H = t; ; ) {
    l = c + k * 9;
    b[l + 7] = b[k + (f + 2)];
    b[l + 8] = b[k + (f + 5)];
    var I = Ce(d, b[l + 7]);
    b[z] = b[I];
    o[z] = o[I];
    b[z + 1] = b[I + 1];
    o[z + 1] = o[I + 1];
    I = Ce(g, b[l + 8]);
    b[B] = b[I];
    o[B] = o[I];
    b[B + 1] = b[I + 1];
    o[B + 1] = o[I + 1];
    I = l;
    Nc(n, e, h);
    b[I] = b[E];
    o[I] = o[E];
    b[I + 1] = b[E + 1];
    o[I + 1] = o[E + 1];
    I = l + 2;
    Nc(p, i, m);
    b[I] = b[D];
    o[I] = o[D];
    b[I + 1] = b[D + 1];
    o[I + 1] = o[D + 1];
    I = l + 4;
    C(t, l + 2, l);
    b[I] = b[H];
    o[I] = o[H];
    b[I + 1] = b[H + 1];
    o[I + 1] = o[H + 1];
    o[l + 6] = 0;
    k += 1;
    if (k >= b[y]) break a;
  } while (0);
  j = b[c + 27] > 1 ? 6 : 9;
  a : do if (j == 6) {
    k = o[f];
    l = Le(c);
    j = l < k * .5 ? 8 : 7;
    if (j == 7 && !(k * 2 < l | l < 1.1920928955078125e-7)) break a;
    b[c + 27] = 0;
  } while (0);
  j = b[c + 27] == 0 ? 10 : 11;
  j == 10 && (b[c + 7] = 0, b[c + 8] = 0, f = Ce(d, 0), b[q] = b[f], o[q] = o[f], b[q + 1] = b[f + 1], o[q + 1] = o[f + 1], g = Ce(g, 0), b[s] = b[g], o[s] = o[g], b[s + 1] = b[g + 1], o[s + 1] = o[g + 1], Nc(u, e, q), b[c] = b[u], o[c] = o[u], b[c + 1] = b[u + 1], o[c + 1] = o[u + 1], e = c + 2, Nc(x, i, s), b[e] = b[x], o[e] = o[x], b[e + 1] = b[x + 1], o[e + 1] = o[x + 1], i = c + 4, C(v, c + 2, c), b[i] = b[v], o[i] = o[v], b[i + 1] = b[v + 1], o[i + 1] = o[v + 1], b[c + 27] = 1);
  a = h;
}

xe.X = 1;

function Ce(c, f) {
  var d;
  d = 0 <= f ? 1 : 2;
  d == 1 && (d = f < b[c + 5] ? 3 : 2);
  d == 2 && O(Me, 103, Ne, Oe);
  return b[c + 4] + (f << 1);
}

function Fe(c, f, d) {
  var e = a;
  a += 22;
  var g, i = e + 2, h = e + 4, j = e + 6, k = e + 8, l = e + 10, m = e + 12, n = e + 14, p = e + 16, t = e + 18, q = e + 20;
  g = b[c + 27];
  g = g == 0 ? 1 : g == 1 ? 2 : g == 2 ? 3 : g == 3 ? 4 : 5;
  g == 5 ? O(le, 236, Pe, ne) : g == 1 ? O(le, 217, Pe, ne) : g == 2 ? (b[f] = b[c], o[f] = o[c], b[f + 1] = b[c + 1], o[f + 1] = o[c + 1], c += 2, b[d] = b[c], o[d] = o[c], b[d + 1] = b[c + 1], o[d + 1] = o[c + 1]) : g == 3 ? (K(i, o[c + 6], c), K(h, o[c + 15], c + 9), N(e, i, h), b[f] = b[e], o[f] = o[e], b[f + 1] = b[e + 1], o[f + 1] = o[e + 1], K(k, o[c + 6], c + 2), K(l, o[c + 15], c + 11), N(j, k, l), b[d] = b[j], o[d] = o[j], b[d + 1] = b[j + 1], o[d + 1] = o[j + 1]) : g == 4 && (K(p, o[c + 6], c), K(t, o[c + 15], c + 9), N(n, p, t), K(q, o[c + 24], c + 18), N(m, n, q), b[f] = b[m], o[f] = o[m], b[f + 1] = b[m + 1], o[f + 1] = o[m + 1], b[d] = b[f], o[d] = o[f], b[d + 1] = b[f + 1], o[d + 1] = o[f + 1]);
  a = e;
}

Fe.X = 1;

function Ie(c, f) {
  o[c] -= o[f];
  o[c + 1] -= o[f + 1];
}

function Ae(c, f, d) {
  mc(c, -f * o[d + 1], f * o[d]);
}

function Qe(c, f) {
  var d;
  d = 0 <= f ? 1 : 2;
  d == 1 && (d = f < b[c + 3] ? 3 : 2);
  d == 2 && O(Re, 97, tg, ug);
  d = 0 < b[c + 2] ? 5 : 4;
  d == 4 && O(Re, 98, tg, vg);
  b[b[c + 1] + f * 9 + 5] = b[c + 4];
  b[b[c + 1] + f * 9 + 8] = -1;
  b[c + 4] = f;
  b[c + 2] -= 1;
}

function Be(c, f) {
  var d, e, g, i, h;
  e = 0;
  g = J(b[c + 4], f);
  i = 1;
  var j = c + 5;
  d = i < b[j] ? 1 : 5;
  a : do if (d == 1) for (var k = c + 4; ; ) if (h = J(b[k] + (i << 1), f), d = h > g ? 3 : 4, d == 3 && (e = i, g = h), i += 1, i >= b[j]) break a; while (0);
  return e;
}

function Ge(c, f) {
  var d = a;
  a += 2;
  C(d, c, f);
  var e = Wc(d);
  a = d;
  return e;
}

function He(c, f) {
  var d, e;
  d = Le(c);
  o[f] = d;
  b[f + 1] = b[c + 27] & 65535;
  e = 0;
  var g = c + 27;
  d = e < b[g] ? 1 : 2;
  a : do if (d == 1) for (;;) if (b[e + (f + 2)] = b[c + e * 9 + 7] & 255, b[e + (f + 5)] = b[c + e * 9 + 8] & 255, e += 1, e >= b[g]) break a; while (0);
}

He.X = 1;

function Le(c) {
  var f = a;
  a += 4;
  var d, e, g = f + 2;
  d = b[c + 27];
  d = d == 0 ? 1 : d == 1 ? 2 : d == 2 ? 3 : d == 3 ? 4 : 5;
  d == 5 ? (O(le, 259, wg, ne), e = 0) : d == 1 ? (O(le, 246, wg, ne), e = 0) : d == 2 ? e = 0 : d == 3 ? e = Ge(c + 4, c + 13) : d == 4 && (C(f, c + 13, c + 4), C(g, c + 22, c + 4), e = Q(f, g));
  a = f;
  return e;
}

function Kc(c) {
  var f, d;
  b[c] = -1;
  b[c + 3] = 16;
  b[c + 2] = 0;
  f = ib(b[c + 3] * 36);
  b[c + 1] = f;
  f = b[c + 1];
  d = b[c + 3] * 36;
  for (var e = 0; e < 9 * (d / 36); e++) b[f + e] = 0, o[f + e] = 0;
  d = 0;
  e = c + 3;
  f = d < b[e] - 1 ? 1 : 3;
  a : do if (f == 1) for (var g = c + 1, i = c + 1; ; ) if (b[b[g] + d * 9 + 5] = d + 1, b[b[i] + d * 9 + 8] = -1, d += 1, d >= b[e] - 1) break a; while (0);
  b[b[c + 1] + (b[c + 3] - 1) * 9 + 5] = -1;
  b[b[c + 1] + (b[c + 3] - 1) * 9 + 8] = -1;
  b[c + 4] = 0;
  b[c + 5] = 0;
  b[c + 6] = 0;
}

Kc.X = 1;

function xg(c) {
  var f, d;
  f = b[c + 4] == -1 ? 1 : 7;
  if (f == 1) {
    f = b[c + 2] == b[c + 3] ? 3 : 2;
    f == 2 && O(Re, 61, yg, zg);
    d = b[c + 1];
    b[c + 3] <<= 1;
    f = ib(b[c + 3] * 36);
    b[c + 1] = f;
    f = d;
    d += 9 * (b[c + 2] * 36 / 36);
    for (var e = b[c + 1]; f < d; f++, e++) b[e] = b[f], o[e] = o[f];
    d = b[c + 2];
    e = c + 3;
    f = d < b[e] - 1 ? 4 : 6;
    a : do if (f == 4) for (var g = c + 1, i = c + 1; ; ) if (b[b[g] + d * 9 + 5] = d + 1, b[b[i] + d * 9 + 8] = -1, d += 1, d >= b[e] - 1) break a; while (0);
    b[b[c + 1] + (b[c + 3] - 1) * 9 + 5] = -1;
    b[b[c + 1] + (b[c + 3] - 1) * 9 + 8] = -1;
    b[c + 4] = b[c + 2];
  }
  f = b[c + 4];
  b[c + 4] = b[b[c + 1] + f * 9 + 5];
  b[b[c + 1] + f * 9 + 5] = -1;
  b[b[c + 1] + f * 9 + 6] = -1;
  b[b[c + 1] + f * 9 + 7] = -1;
  b[b[c + 1] + f * 9 + 8] = 0;
  b[b[c + 1] + f * 9 + 4] = 0;
  b[c + 2] += 1;
  return f;
}

xg.X = 1;

function Ag(c, f, d) {
  var e = a;
  a += 6;
  var g, i = e + 2, h = e + 4;
  g = xg(c);
  mc(e, .10000000149011612, .10000000149011612);
  var j = b[c + 1] + g * 9;
  C(i, f, e);
  b[j] = b[i];
  o[j] = o[i];
  b[j + 1] = b[i + 1];
  o[j + 1] = o[i + 1];
  i = b[c + 1] + g * 9 + 2;
  N(h, f + 2, e);
  b[i] = b[h];
  o[i] = o[h];
  b[i + 1] = b[h + 1];
  o[i + 1] = o[h + 1];
  b[b[c + 1] + g * 9 + 4] = d;
  b[b[c + 1] + g * 9 + 8] = 0;
  Bg(c, g);
  a = e;
  return g;
}

Ag.X = 1;

function Cg(c, f) {
  var d, e;
  e = 1;
  e == 1 && (d = o[c] <= o[f]);
  if (d & 1) e = 3; else {
    var g = 0;
    e = 4;
  }
  e == 3 && (g = o[c + 1] <= o[f + 1]);
  if (g & 1) e = 5; else {
    var i = 0;
    e = 6;
  }
  e == 5 && (i = o[f + 2] <= o[c + 2]);
  if (i & 1) e = 7; else {
    var h = 0;
    e = 8;
  }
  e == 7 && (h = o[f + 3] <= o[c + 3]);
  return h & 1;
}

Cg.X = 1;

function Bg(c, f) {
  var d = a;
  a += 24;
  var e, g, i, h, j = d + 4, k, l, m, n = d + 8, p = d + 12, t, q = d + 16, s = d + 20, u, x;
  b[c + 6] += 1;
  e = b[c] == -1 ? 1 : 2;
  a : do if (e == 1) b[c] = f, b[b[c + 1] + b[c] * 9 + 5] = -1; else if (e == 2) {
    g = d;
    e = b[c + 1] + f * 9;
    b[g] = b[e];
    o[g] = o[e];
    b[g + 1] = b[e + 1];
    o[g + 1] = o[e + 1];
    b[g + 2] = b[e + 2];
    o[g + 2] = o[e + 2];
    b[g + 3] = b[e + 3];
    o[g + 3] = o[e + 3];
    g = b[c];
    var v = c + 1, y = c + 1, z = c + 1, B = c + 1, E = c + 1, D = c + 1;
    u = c + 1;
    x = c + 1;
    var H = c + 1, I = c + 1, M = c + 1, G = c + 1, S = c + 1;
    b : for (;;) {
      if (b[b[v] + g * 9 + 6] == -1 != 0) break;
      i = b[b[y] + g * 9 + 6];
      h = b[b[z] + g * 9 + 7];
      e = Dg(b[B] + g * 9);
      Eg(j, b[E] + g * 9, d);
      k = Dg(j);
      l = k * 2;
      k = (k - e) * 2;
      e = b[b[D] + i * 9 + 6] == -1 ? 5 : 6;
      e == 5 ? (Eg(n, d, b[u] + i * 9), m = Dg(n) + k) : e == 6 && (Eg(p, d, b[G] + i * 9), m = Dg(b[S] + i * 9), e = Dg(p), m = e - m + k);
      e = b[b[x] + h * 9 + 6] == -1 ? 8 : 9;
      e == 8 ? (Eg(q, d, b[H] + h * 9), t = Dg(q) + k) : e == 9 && (Eg(s, d, b[I] + h * 9), t = Dg(b[M] + h * 9), e = Dg(s), t = e - t + k);
      e = l < m ? 11 : 12;
      if (e == 11 && l < t) break b;
      e = m < t ? 13 : 14;
      e == 13 ? g = i : e == 14 && (g = h);
    }
    i = b[b[c + 1] + g * 9 + 5];
    h = xg(c);
    b[b[c + 1] + h * 9 + 5] = i;
    b[b[c + 1] + h * 9 + 4] = 0;
    Eg(b[c + 1] + h * 9, d, b[c + 1] + g * 9);
    b[b[c + 1] + h * 9 + 8] = b[b[c + 1] + g * 9 + 8] + 1;
    e = i != -1 ? 16 : 20;
    e == 16 ? (l = b[c + 1] + i * 9, e = b[b[c + 1] + i * 9 + 6] == g ? 17 : 18, e == 17 ? b[l + 6] = h : e == 18 && (b[l + 7] = h), b[b[c + 1] + h * 9 + 6] = g, b[b[c + 1] + h * 9 + 7] = f, b[b[c + 1] + g * 9 + 5] = h, b[b[c + 1] + f * 9 + 5] = h) : e == 20 && (b[b[c + 1] + h * 9 + 6] = g, b[b[c + 1] + h * 9 + 7] = f, b[b[c + 1] + g * 9 + 5] = h, b[b[c + 1] + f * 9 + 5] = h, b[c] = h);
    g = b[b[c + 1] + f * 9 + 5];
    if (b[b[c + 1] + f * 9 + 5] == -1) e = 28; else {
      i = c + 1;
      h = c + 1;
      l = c + 1;
      v = c + 1;
      y = c + 1;
      z = c + 1;
      B = c + 1;
      E = c + 1;
      for (D = c + 1; ; ) {
        g = Fg(c, g);
        u = b[b[i] + g * 9 + 6];
        x = b[b[h] + g * 9 + 7];
        if (u != -1) {
          var P = b[b[h] + g * 9 + 7];
          e = 25;
        } else e = 24;
        e == 24 && (O(Re, 307, Gg, Hg), P = x);
        e = P != -1 ? 27 : 26;
        e == 26 && O(Re, 308, Gg, Ig);
        b[b[y] + g * 9 + 8] = (b[b[l] + u * 9 + 8] > b[b[v] + x * 9 + 8] ? b[b[l] + u * 9 + 8] : b[b[v] + x * 9 + 8]) + 1;
        Eg(b[z] + g * 9, b[B] + u * 9, b[E] + x * 9);
        g = u = b[b[D] + g * 9 + 5];
        if (u == -1) break a;
      }
    }
  } while (0);
  a = d;
}

Bg.X = 1;

function Jg(c, f) {
  var d, e, g, i, h, j;
  d = f == b[c] ? 1 : 2;
  a : do if (d == 1) b[c] = -1; else if (d == 2) {
    e = b[b[c + 1] + f * 9 + 5];
    g = b[b[c + 1] + e * 9 + 5];
    var k = b[c + 1] + e * 9;
    d = b[b[c + 1] + e * 9 + 6] == f ? 3 : 4;
    d == 3 ? i = b[k + 7] : d == 4 && (i = b[k + 6]);
    d = g != -1 ? 6 : 12;
    if (d == 6) {
      k = b[c + 1] + g * 9;
      d = b[b[c + 1] + g * 9 + 6] == e ? 7 : 8;
      d == 7 ? b[k + 6] = i : d == 8 && (b[k + 7] = i);
      b[b[c + 1] + i * 9 + 5] = g;
      Qe(c, e);
      e = g;
      if (g == -1) break a;
      g = c + 1;
      for (var k = c + 1, l = c + 1, m = c + 1, n = c + 1, p = c + 1, t = c + 1, q = c + 1, s = c + 1; ; ) if (e = Fg(c, e), h = b[b[g] + e * 9 + 6], j = b[b[k] + e * 9 + 7], Eg(b[l] + e * 9, b[m] + h * 9, b[n] + j * 9), b[b[q] + e * 9 + 8] = (b[b[p] + h * 9 + 8] > b[b[t] + j * 9 + 8] ? b[b[p] + h * 9 + 8] : b[b[t] + j * 9 + 8]) + 1, e = h = b[b[s] + e * 9 + 5], h == -1) break a;
    } else d == 12 && (b[c] = i, b[b[c + 1] + i * 9 + 5] = -1, Qe(c, e));
  } while (0);
}

Jg.X = 1;

function Kg(c, f, d, e) {
  var g = a;
  a += 12;
  var i, h, j = g + 4, k = g + 6, l = g + 8, m = g + 10;
  i = 0 <= f ? 1 : 2;
  i == 1 && (i = f < b[c + 3] ? 3 : 2);
  i == 2 && O(Re, 135, Lg, Mg);
  i = b[b[c + 1] + f * 9 + 6] == -1 ? 5 : 4;
  i == 4 && O(Re, 137, Lg, Ng);
  i = Cg(b[c + 1] + f * 9, d) ? 6 : 7;
  i == 6 ? h = 0 : i == 7 && (Jg(c, f), b[g] = b[d], o[g] = o[d], b[g + 1] = b[d + 1], o[g + 1] = o[d + 1], b[g + 2] = b[d + 2], o[g + 2] = o[d + 2], b[g + 3] = b[d + 3], o[g + 3] = o[d + 3], mc(j, .10000000149011612, .10000000149011612), C(k, g, j), b[g] = b[k], o[g] = o[k], b[g + 1] = b[k + 1], o[g + 1] = o[k + 1], i = g + 2, N(l, g + 2, j), b[i] = b[l], o[i] = o[l], b[i + 1] = b[l + 1], o[i + 1] = o[l + 1], K(m, 2, e), e = o[m], i = o[m] < 0 ? 8 : 9, i == 8 ? o[g] += e : i == 9 && (o[g + 2] += e), e = o[m + 1], i = o[m + 1] < 0 ? 11 : 12, i == 11 ? o[g + 1] += e : i == 12 && (o[g + 3] += e), m = b[c + 1] + f * 9, b[m] = b[g], o[m] = o[g], b[m + 1] = b[g + 1], o[m + 1] = o[g + 1], b[m + 2] = b[g + 2], o[m + 2] = o[g + 2], b[m + 3] = b[g + 3], o[m + 3] = o[g + 3], Bg(c, f), h = 1);
  a = g;
  return h;
}

Kg.X = 1;

function Dg(c) {
  return (o[c + 2] - o[c] + (o[c + 3] - o[c + 1])) * 2;
}

function Eg(c, f, d) {
  var e = a;
  a += 4;
  var g = e + 2;
  Og(e, f, d);
  b[c] = b[e];
  o[c] = o[e];
  b[c + 1] = b[e + 1];
  o[c + 1] = o[e + 1];
  c += 2;
  Pg(g, f + 2, d + 2);
  b[c] = b[g];
  o[c] = o[g];
  b[c + 1] = b[g + 1];
  o[c + 1] = o[g + 1];
  a = e;
}

function Fg(c, f) {
  var d, e, g, i, h, j, k, l, m;
  (f != -1 ? 2 : 1) == 1 && O(Re, 382, Qg, Rg);
  g = b[c + 1] + f * 9;
  d = b[g + 6] == -1 ? 4 : 3;
  a : do if (d == 3) if (b[g + 8] < 2) d = 4; else if (i = b[g + 6], h = b[g + 7], d = 0 <= i ? 6 : 7, d == 6 && (d = i < b[c + 3] ? 8 : 7), d == 7 && O(Re, 392, Qg, Sg), d = 0 <= h ? 9 : 10, d == 9 && (d = h < b[c + 3] ? 11 : 10), d == 10 && O(Re, 393, Qg, Tg), j = b[c + 1] + i * 9, k = b[c + 1] + h * 9, l = b[k + 8] - b[j + 8], d = b[k + 8] - b[j + 8] > 1 ? 12 : 29, d == 12) {
    i = b[k + 6];
    e = b[k + 7];
    l = b[c + 1] + i * 9;
    m = b[c + 1] + e * 9;
    d = 0 <= i ? 13 : 14;
    d == 13 && (d = i < b[c + 3] ? 15 : 14);
    d == 14 && O(Re, 407, Qg, Ug);
    d = 0 <= e ? 16 : 17;
    d == 16 && (d = e < b[c + 3] ? 18 : 17);
    d == 17 && O(Re, 408, Qg, Vg);
    b[k + 6] = f;
    b[k + 5] = b[g + 5];
    b[g + 5] = h;
    d = b[k + 5] != -1 ? 19 : 24;
    d == 19 ? (d = b[b[c + 1] + b[k + 5] * 9 + 6] == f ? 20 : 21, d == 20 ? b[b[c + 1] + b[k + 5] * 9 + 6] = h : d == 21 && (d = b[b[c + 1] + b[k + 5] * 9 + 7] == f ? 23 : 22, d == 22 && O(Re, 424, Qg, Wg), b[b[c + 1] + b[k + 5] * 9 + 7] = h)) : d == 24 && (b[c] = h);
    d = b[l + 8] > b[m + 8] ? 26 : 27;
    d == 26 ? (b[k + 7] = i, b[g + 7] = e, b[m + 5] = f, Eg(g, j, m), Eg(k, g, l), b[g + 8] = (b[j + 8] > b[m + 8] ? b[j + 8] : b[m + 8]) + 1, b[k + 8] = (b[g + 8] > b[l + 8] ? b[g + 8] : b[l + 8]) + 1) : d == 27 && (b[k + 7] = e, b[g + 7] = i, b[l + 5] = f, Eg(g, j, l), Eg(k, g, m), b[g + 8] = (b[j + 8] > b[l + 8] ? b[j + 8] : b[l + 8]) + 1, b[k + 8] = (b[g + 8] > b[m + 8] ? b[g + 8] : b[m + 8]) + 1);
    e = h;
    d = 48;
    break a;
  } else if (d == 29) if (d = l < -1 ? 30 : 47, d == 30) {
    h = b[j + 6];
    e = b[j + 7];
    l = b[c + 1] + h * 9;
    m = b[c + 1] + e * 9;
    d = 0 <= h ? 31 : 32;
    d == 31 && (d = h < b[c + 3] ? 33 : 32);
    d == 32 && O(Re, 467, Qg, Xg);
    d = 0 <= e ? 34 : 35;
    d == 34 && (d = e < b[c + 3] ? 36 : 35);
    d == 35 && O(Re, 468, Qg, Yg);
    b[j + 6] = f;
    b[j + 5] = b[g + 5];
    b[g + 5] = i;
    d = b[j + 5] != -1 ? 37 : 42;
    d == 37 ? (d = b[b[c + 1] + b[j + 5] * 9 + 6] == f ? 38 : 39, d == 38 ? b[b[c + 1] + b[j + 5] * 9 + 6] = i : d == 39 && (d = b[b[c + 1] + b[j + 5] * 9 + 7] == f ? 41 : 40, d == 40 && O(Re, 484, Qg, Zg), b[b[c + 1] + b[j + 5] * 9 + 7] = i)) : d == 42 && (b[c] = i);
    d = b[l + 8] > b[m + 8] ? 44 : 45;
    d == 44 ? (b[j + 7] = h, b[g + 6] = e, b[m + 5] = f, Eg(g, k, m), Eg(j, g, l), b[g + 8] = (b[k + 8] > b[m + 8] ? b[k + 8] : b[m + 8]) + 1, b[j + 8] = (b[g + 8] > b[l + 8] ? b[g + 8] : b[l + 8]) + 1) : d == 45 && (b[j + 7] = e, b[g + 6] = h, b[l + 5] = f, Eg(g, k, l), Eg(j, g, m), b[g + 8] = (b[k + 8] > b[l + 8] ? b[k + 8] : b[l + 8]) + 1, b[j + 8] = (b[g + 8] > b[m + 8] ? b[g + 8] : b[m + 8]) + 1);
    e = i;
    d = 48;
    break a;
  } else if (d == 47) {
    e = f;
    d = 48;
    break a;
  } while (0);
  d == 4 && (e = f);
  return e;
}

Fg.X = 1;

function Og(c, f, d) {
  mc(c, o[f] < o[d] ? o[f] : o[d], o[f + 1] < o[d + 1] ? o[f + 1] : o[d + 1]);
}

function Pg(c, f, d) {
  mc(c, o[f] > o[d] ? o[f] : o[d], o[f + 1] > o[d + 1] ? o[f + 1] : o[d + 1]);
}

function $g(c, f, d) {
  var e = a;
  a += 8;
  var g = e + 2, i = e + 4, h = e + 6;
  K(g, 1 - d, c + 2);
  K(i, d, c + 4);
  N(e, g, i);
  b[f] = b[e];
  o[f] = o[e];
  b[f + 1] = b[e + 1];
  o[f + 1] = o[e + 1];
  ah(f + 2, (1 - d) * o[c + 6] + d * o[c + 7]);
  R(h, f + 2, c);
  Ie(f, h);
  a = e;
}

function bh(c, f) {
  var d = a;
  a += 90;
  var e, g, i = d + 9, h, j, k, l, m = d + 18, n = d + 26, p = d + 49, t = d + 53, q = d + 57, s = d + 63, u, x, v, y = d + 88, z = d + 89, B, E, D, H, I, M, G;
  b[ch] += 1;
  b[c] = 0;
  o[c + 1] = o[f + 32];
  g = f + 7;
  u = e = f + 14;
  x = e + 9;
  for (v = d; u < x; u++, v++) b[v] = b[u], o[v] = o[u];
  u = e = f + 23;
  x = e + 9;
  for (v = i; u < x; u++, v++) b[v] = b[u], o[v] = o[u];
  dh(d);
  dh(i);
  h = o[f + 32];
  j = .004999999888241291 > o[f + 6] + o[g + 6] - .014999999664723873 ? .004999999888241291 : o[f + 6] + o[g + 6] - .014999999664723873;
  e = j > .0012499999720603228 ? 2 : 1;
  e == 1 && O(eh, 280, fh, gh);
  l = k = 0;
  b[m + 1] = 0;
  je(n);
  je(n + 7);
  u = f;
  x = f + 7;
  for (v = n; u < x; u++, v++) b[v] = b[u], o[v] = o[u];
  u = x = f + 7;
  x += 7;
  for (v = n + 7; u < x; u++, v++) b[v] = b[u], o[v] = o[u];
  b[n + 22] = 0;
  for (var S = n + 14, P = n + 18, L = q + 4, T = q + 4; ; ) {
    $g(d, p, k);
    $g(i, t, k);
    b[S] = b[p];
    o[S] = o[p];
    b[S + 1] = b[p + 1];
    o[S + 1] = o[p + 1];
    b[S + 2] = b[p + 2];
    o[S + 2] = o[p + 2];
    b[S + 3] = b[p + 3];
    o[S + 3] = o[p + 3];
    b[P] = b[t];
    o[P] = o[t];
    b[P + 1] = b[t + 1];
    o[P + 1] = o[t + 1];
    b[P + 2] = b[t + 2];
    o[P + 2] = o[t + 2];
    b[P + 3] = b[t + 3];
    o[P + 3] = o[t + 3];
    ve(q, m, n);
    if (o[L] <= 0) {
      e = 4;
      break;
    }
    if (o[T] < j + .0012499999720603228) {
      e = 6;
      break;
    }
    hh(s, m, f, d, g, i, k);
    u = 0;
    x = h;
    for (v = 0; ; ) {
      B = ih(s, y, z, x);
      if (B > j + .0012499999720603228) {
        e = 9;
        break;
      }
      if (B > j - .0012499999720603228) {
        e = 11;
        break;
      }
      E = jh(s, b[y], b[z], k);
      if (E < j - .0012499999720603228) {
        e = 13;
        break;
      }
      if (E <= j + .0012499999720603228) {
        e = 15;
        break;
      }
      D = 0;
      H = k;
      for (I = x; ; ) {
        e = (D & 1) != 0 ? 18 : 19;
        e == 18 ? M = H + (j - E) * (I - H) / (B - E) : e == 19 && (M = (H + I) * .5);
        G = jh(s, b[y], b[z], M);
        if (ie(G - j) < .0012499999720603228) {
          e = 21;
          break;
        }
        e = G > j ? 23 : 24;
        e == 23 ? (H = M, E = G) : e == 24 && (I = M, B = G);
        D = G = D + 1;
        b[kh] += 1;
        if (G == 50) {
          e = 26;
          break;
        }
      }
      e == 21 && (x = M);
      b[lh] = b[lh] > D ? b[lh] : D;
      v = B = v + 1;
      if (B == 8) {
        e = 27;
        break;
      }
    }
    e == 9 ? (b[c] = 4, o[c + 1] = h, u = 1) : e == 11 ? k = x : e == 13 ? (b[c] = 1, o[c + 1] = k, u = 1) : e == 15 && (b[c] = 3, o[c + 1] = k, u = 1);
    l += 1;
    b[mh] += 1;
    if (u & 1) {
      e = 30;
      break;
    }
    if (l == 20) {
      e = 29;
      break;
    }
  }
  e == 4 ? (b[c] = 2, o[c + 1] = 0) : e == 6 ? (b[c] = 3, o[c + 1] = k) : e == 29 && (b[c] = 1, o[c + 1] = k);
  b[nh] = b[nh] > l ? b[nh] : l;
  a = d;
}

bh.X = 1;

function dh(c) {
  var f;
  f = 6.2831854820251465 * oh(o[c + 6] / 6.2831854820251465);
  o[c + 6] -= f;
  o[c + 7] -= f;
}

function hh(c, f, d, e, g, i, h) {
  var j = a;
  a += 66;
  var k, l, m = j + 4, n = j + 8, p = j + 10, t = j + 12, q = j + 14, s = j + 16, u = j + 18, x = j + 20, v = j + 22, y = j + 24, z = j + 26, B = j + 28, E = j + 30, D = j + 32, H = j + 34, I = j + 36, M = j + 38, G = j + 40, S = j + 42, P = j + 44, L = j + 46, T = j + 48, F = j + 50, X = j + 52, Z = j + 54, V = j + 56, aa = j + 58, ja = j + 60, Y = j + 62, W = j + 64;
  b[c] = d;
  b[c + 1] = g;
  l = b[f + 1];
  (0 < l & l < 3 ? 2 : 1) == 1 && O(eh, 50, ph, qh);
  var $ = e;
  e += 9;
  for (var fa = c + 2; $ < e; $++, fa++) b[fa] = b[$], o[fa] = o[$];
  $ = i;
  e = i + 9;
  for (fa = c + 11; $ < e; $++, fa++) b[fa] = b[$], o[fa] = o[$];
  $g(c + 2, j, h);
  $g(c + 11, m, h);
  i = l == 1 ? 3 : 4;
  if (i == 3) b[c + 20] = 0, G = Ce(b[c], b[f + 2]), b[n] = b[G], o[n] = o[G], b[n + 1] = b[G + 1], o[n + 1] = o[G + 1], f = Ce(b[c + 1], b[f + 5]), b[p] = b[f], o[p] = o[f], b[p + 1] = b[f + 1], o[p + 1] = o[f + 1], Nc(t, j, n), Nc(q, m, p), m = c + 23, C(s, q, t), b[m] = b[s], o[m] = o[s], b[m + 1] = b[s + 1], o[m + 1] = o[s + 1], k = c = Vc(c + 23); else if (i == 4) if (t = c + 20, i = b[f + 2] == b[f + 3] ? 5 : 8, i == 5) {
    b[t] = 2;
    W = Ce(g, b[f + 5]);
    b[u] = b[W];
    o[u] = o[W];
    b[u + 1] = b[W + 1];
    o[u + 1] = o[W + 1];
    W = Ce(g, b[f + 6]);
    b[x] = b[W];
    o[x] = o[W];
    b[x + 1] = b[W + 1];
    o[x + 1] = o[W + 1];
    W = c + 23;
    C(y, x, u);
    Ud(v, y);
    b[W] = b[v];
    o[W] = o[v];
    b[W + 1] = b[v + 1];
    o[W + 1] = o[v + 1];
    Vc(c + 23);
    R(z, m + 2, c + 23);
    W = c + 21;
    N(E, u, x);
    K(B, .5, E);
    b[W] = b[B];
    o[W] = o[B];
    b[W + 1] = b[B + 1];
    o[W + 1] = o[B + 1];
    Nc(D, m, c + 21);
    m = Ce(d, b[f + 2]);
    b[H] = b[m];
    o[H] = o[m];
    b[H + 1] = b[m + 1];
    o[H + 1] = o[m + 1];
    Nc(I, j, H);
    C(M, I, D);
    m = J(M, z);
    if ((m < 0 ? 6 : 7) == 6) f = c + 23, Nd(G, c + 23), b[f] = b[G], o[f] = o[G], b[f + 1] = b[G + 1], o[f + 1] = o[G + 1], m = -m;
    k = m;
  } else if (i == 8) {
    b[t] = 1;
    G = Ce(b[c], b[f + 2]);
    b[S] = b[G];
    o[S] = o[G];
    b[S + 1] = b[G + 1];
    o[S + 1] = o[G + 1];
    G = Ce(b[c], b[f + 3]);
    b[P] = b[G];
    o[P] = o[G];
    b[P + 1] = b[G + 1];
    o[P + 1] = o[G + 1];
    G = c + 23;
    C(T, P, S);
    Ud(L, T);
    b[G] = b[L];
    o[G] = o[L];
    b[G + 1] = b[L + 1];
    o[G + 1] = o[L + 1];
    Vc(c + 23);
    R(F, j + 2, c + 23);
    G = c + 21;
    N(Z, S, P);
    K(X, .5, Z);
    b[G] = b[X];
    o[G] = o[X];
    b[G + 1] = b[X + 1];
    o[G + 1] = o[X + 1];
    Nc(V, j, c + 21);
    f = Ce(b[c + 1], b[f + 5]);
    b[aa] = b[f];
    o[aa] = o[f];
    b[aa + 1] = b[f + 1];
    o[aa + 1] = o[f + 1];
    Nc(ja, m, aa);
    C(Y, ja, V);
    m = J(Y, F);
    if ((m < 0 ? 9 : 10) == 9) f = c + 23, Nd(W, c + 23), b[f] = b[W], o[f] = o[W], b[f + 1] = b[W + 1], o[f + 1] = o[W + 1], m = -m;
    k = m;
  }
  a = j;
  return k;
}

hh.X = 1;

function ih(c, f, d, e) {
  var g = a;
  a += 52;
  var i, h = g + 4, j = g + 8, k = g + 10, l = g + 12, m = g + 14, n = g + 16, p = g + 18, t = g + 20, q = g + 22, s = g + 24, u = g + 26, x = g + 28, v = g + 30, y = g + 32, z = g + 34, B = g + 36, E = g + 38, D = g + 40, H = g + 42, I = g + 44, M = g + 46, G = g + 48, S = g + 50;
  $g(c + 2, g, e);
  $g(c + 11, h, e);
  e = b[c + 20];
  e = e == 0 ? 1 : e == 1 ? 2 : e == 2 ? 3 : 4;
  e == 4 ? (O(eh, 183, rh, ne), b[f] = -1, b[d] = -1, i = 0) : e == 1 ? (Md(j, g + 2, c + 23), s = h + 2, Nd(l, c + 23), Md(k, s, l), b[f] = Be(b[c], j), b[d] = Be(b[c + 1], k), f = Ce(b[c], b[f]), b[m] = b[f], o[m] = o[f], b[m + 1] = b[f + 1], o[m + 1] = o[f + 1], d = Ce(b[c + 1], b[d]), b[n] = b[d], o[n] = o[d], b[n + 1] = b[d + 1], o[n + 1] = o[d + 1], Nc(p, g, m), Nc(t, h, n), C(q, t, p), i = c = J(q, c + 23)) : e == 2 ? (R(s, g + 2, c + 23), Nc(u, g, c + 21), m = h + 2, Nd(v, s), Md(x, m, v), b[f] = -1, b[d] = Be(b[c + 1], x), c = Ce(b[c + 1], b[d]), b[y] = b[c], o[y] = o[c], b[y + 1] = b[c + 1], o[y + 1] = o[c + 1], Nc(z, h, y), C(B, z, u), i = c = J(B, s)) : e == 3 && (R(E, h + 2, c + 23), Nc(D, h, c + 21), h = g + 2, Nd(I, E), Md(H, h, I), b[d] = -1, b[f] = Be(b[c], H), c = Ce(b[c], b[f]), b[M] = b[c], o[M] = o[c], b[M + 1] = b[c + 1], o[M + 1] = o[c + 1], Nc(G, g, M), C(S, G, D), i = c = J(S, E));
  a = g;
  return i;
}

ih.X = 1;

function sh(c) {
  b[c] = th + 2;
  b[c + 3] = 0;
  b[c + 4] = 0;
}

function uh(c, f, d) {
  var e;
  e = 0 <= d ? 1 : 2;
  e == 1 && (e = d < b[c + 4] - 1 ? 3 : 2);
  e == 2 && O(vh, 89, wh, xh);
  b[f + 1] = 1;
  o[f + 2] = o[c + 2];
  e = f + 3;
  var g = b[c + 3] + (d << 1);
  b[e] = b[g];
  o[e] = o[g];
  b[e + 1] = b[g + 1];
  o[e + 1] = o[g + 1];
  e = f + 5;
  g = b[c + 3] + (d + 1 << 1);
  b[e] = b[g];
  o[e] = o[g];
  b[e + 1] = b[g + 1];
  o[e + 1] = o[g + 1];
  e = d > 0 ? 4 : 5;
  e == 4 ? (e = f + 7, g = b[c + 3] + (d - 1 << 1), b[e] = b[g], o[e] = o[g], b[e + 1] = b[g + 1], o[e + 1] = o[g + 1], b[f + 11] = 1) : e == 5 && (e = f + 7, g = c + 5, b[e] = b[g], o[e] = o[g], b[e + 1] = b[g + 1], o[e + 1] = o[g + 1], b[f + 11] = b[c + 9] & 1);
  e = d < b[c + 4] - 2 ? 7 : 8;
  e == 7 ? (e = f + 9, c = b[c + 3] + (d + 2 << 1), b[e] = b[c], o[e] = o[c], b[e + 1] = b[c + 1], o[e + 1] = o[c + 1], b[f + 12] = 1) : e == 8 && (d = f + 9, e = c + 7, b[d] = b[e], o[d] = o[e], b[d + 1] = b[e + 1], o[d + 1] = o[e + 1], b[f + 12] = b[c + 10] & 1);
}

uh.X = 1;

function Ch(c, f, d, e) {
  var g = a;
  a += 8;
  var i, h, j = g + 2, k = g + 4, l = g + 6;
  i = e < b[c + 4] ? 2 : 1;
  i == 1 && O(vh, 148, Dh, Eh);
  h = e + 1;
  i = h == b[c + 4] ? 3 : 4;
  i == 3 && (h = 0);
  Nc(g, d, b[c + 3] + (e << 1));
  Nc(j, d, b[c + 3] + (h << 1));
  Og(k, g, j);
  b[f] = b[k];
  o[f] = o[k];
  b[f + 1] = b[k + 1];
  o[f + 1] = o[k + 1];
  c = f + 2;
  Pg(l, g, j);
  b[c] = b[l];
  o[c] = o[l];
  b[c + 1] = b[l + 1];
  o[c + 1] = o[l + 1];
  a = g;
}

Ch.X = 1;

function jh(c, f, d, e) {
  var g = a;
  a += 52;
  var i, h = g + 4, j = g + 8, k = g + 10, l = g + 12, m = g + 14, n = g + 16, p = g + 18, t = g + 20, q = g + 22, s = g + 24, u = g + 26, x = g + 28, v = g + 30, y = g + 32, z = g + 34, B = g + 36, E = g + 38, D = g + 40, H = g + 42, I = g + 44, M = g + 46, G = g + 48, S = g + 50;
  $g(c + 2, g, e);
  $g(c + 11, h, e);
  e = b[c + 20];
  e = e == 0 ? 1 : e == 1 ? 2 : e == 2 ? 3 : 4;
  e == 4 ? (O(eh, 242, Fh, ne), i = 0) : e == 1 ? (Md(j, g + 2, c + 23), s = h + 2, Nd(l, c + 23), Md(k, s, l), f = Ce(b[c], f), b[m] = b[f], o[m] = o[f], b[m + 1] = b[f + 1], o[m + 1] = o[f + 1], d = Ce(b[c + 1], d), b[n] = b[d], o[n] = o[d], b[n + 1] = b[d + 1], o[n + 1] = o[d + 1], Nc(p, g, m), Nc(t, h, n), C(q, t, p), i = c = J(q, c + 23)) : e == 2 ? (R(s, g + 2, c + 23), Nc(u, g, c + 21), m = h + 2, Nd(v, s), Md(x, m, v), c = Ce(b[c + 1], d), b[y] = b[c], o[y] = o[c], b[y + 1] = b[c + 1], o[y + 1] = o[c + 1], Nc(z, h, y), C(B, z, u), i = c = J(B, s)) : e == 3 && (R(E, h + 2, c + 23), Nc(D, h, c + 21), h = g + 2, Nd(I, E), Md(H, h, I), c = Ce(b[c], f), b[M] = b[c], o[M] = o[c], b[M + 1] = b[c + 1], o[M + 1] = o[c + 1], Nc(G, g, M), C(S, G, D), i = c = J(S, E));
  a = g;
  return i;
}

jh.X = 1;

function ah(c, f) {
  var d = Gh(f);
  o[c] = d;
  d = Hh(f);
  o[c + 1] = d;
}

function Ih(c, f) {
  var d, e;
  e = Jh(f, 40);
  if (e == 0) {
    var g = 0;
    d = 2;
  } else d = 1;
  d == 1 && (b[e] = Tb + 2, b[e] = th + 2, b[e + 1] = 3, o[e + 2] = .009999999776482582, b[e + 3] = 0, b[e + 4] = 0, b[e + 9] = 0, b[e + 10] = 0, g = e);
  d = g;
  e = b[c + 3];
  var g = b[c + 4], i;
  i = b[d + 3] == 0 ? 1 : 2;
  i == 1 && (i = b[d + 4] == 0 ? 3 : 2);
  i == 2 && O(vh, 48, Kh, Lh);
  (g >= 2 ? 5 : 4) == 4 && O(vh, 49, Kh, Mh);
  b[d + 4] = g;
  g = ib(g << 3);
  b[d + 3] = g;
  g = e;
  e += 2 * ((b[d + 4] << 3) / 8);
  for (i = b[d + 3]; g < e; g++, i++) b[i] = b[g], o[i] = o[g];
  b[d + 9] = 0;
  b[d + 10] = 0;
  e = d + 5;
  g = c + 5;
  b[e] = b[g];
  o[e] = o[g];
  b[e + 1] = b[g + 1];
  o[e + 1] = o[g + 1];
  e = d + 7;
  g = c + 7;
  b[e] = b[g];
  o[e] = o[g];
  b[e + 1] = b[g + 1];
  o[e + 1] = o[g + 1];
  b[d + 9] = b[c + 9] & 1;
  b[d + 10] = b[c + 10] & 1;
  return d;
}

Ih.X = 1;

function Nh(c, f, d, e, g) {
  var i = a;
  a += 13;
  var h, j;
  h = g < b[c + 4] ? 2 : 1;
  h == 1 && O(vh, 129, Oh, Eh);
  bc(i);
  j = g + 1;
  h = j == b[c + 4] ? 3 : 4;
  h == 3 && (j = 0);
  h = i + 3;
  g = b[c + 3] + (g << 1);
  b[h] = b[g];
  o[h] = o[g];
  b[h + 1] = b[g + 1];
  o[h + 1] = o[g + 1];
  g = i + 5;
  c = b[c + 3] + (j << 1);
  b[g] = b[c];
  o[g] = o[c];
  b[g + 1] = b[c + 1];
  o[g + 1] = o[c + 1];
  f = Ph(i, f, d, e);
  a = i;
  return f;
}

Nh.X = 1;

function Qh(c, f) {
  b[c + 1] = b[f + 1];
  o[c + 2] = o[f + 2];
}

function Rh(c, f, d, e) {
  var g = a;
  a += 12;
  var i, h, j = g + 2, k = g + 4, l = g + 6, m = g + 8, n = g + 10;
  R(j, e + 2, c + 3);
  N(g, e, j);
  C(k, d, g);
  j = J(k, k) - o[c + 2] * o[c + 2];
  C(l, d + 2, d);
  c = J(k, l);
  e = J(l, l);
  j = c * c - e * j;
  i = j < 0 ? 2 : 1;
  a : do if (i == 1) if (e < 1.1920928955078125e-7) i = 2; else {
    h = c;
    i = j;
    i = Xc(i);
    h = -(h + i);
    i = 0 <= h ? 4 : 6;
    do if (i == 4) if (h <= o[d + 4] * e) {
      h /= e;
      o[f + 2] = h;
      d = f;
      K(n, h, l);
      N(m, k, n);
      k = d;
      b[k] = b[m];
      o[k] = o[m];
      b[k + 1] = b[m + 1];
      o[k + 1] = o[m + 1];
      Vc(f);
      h = 1;
      i = 7;
      break a;
    } else i = 6; while (0);
    h = 0;
    i = 7;
  } while (0);
  i == 2 && (h = 0);
  a = g;
  return h;
}

Rh.X = 1;

function Ph(c, f, d, e) {
  var g = a;
  a += 30;
  var i, h, j = g + 2, k = g + 4, l = g + 6, m = g + 8, n = g + 10, p = g + 12, t = g + 14, q = g + 16;
  i = g + 18;
  var s = g + 20, u = g + 22, x = g + 24, v = g + 26, y = g + 28, z = e + 2;
  C(j, d, e);
  Md(g, z, j);
  j = e + 2;
  C(l, d + 2, e);
  Md(k, j, l);
  C(m, k, g);
  e = c + 3;
  b[n] = b[e];
  o[n] = o[e];
  b[n + 1] = b[e + 1];
  o[n + 1] = o[e + 1];
  c += 5;
  b[p] = b[c];
  o[p] = o[c];
  b[p + 1] = b[c + 1];
  o[p + 1] = o[c + 1];
  C(t, p, n);
  mc(q, o[t + 1], -o[t]);
  Vc(q);
  C(i, n, g);
  t = J(q, i);
  c = J(q, m);
  i = c == 0 ? 1 : 2;
  a : do if (i == 1) h = 0; else if (i == 2) {
    h = t / c;
    i = h < 0 ? 4 : 3;
    do if (i == 3) if (o[d + 4] < h) i = 4; else if (K(u, h, m), N(s, g, u), C(x, p, n), e = J(x, x), i = e == 0 ? 6 : 7, i == 6) {
      h = 0;
      break a;
    } else if (i == 7) if (C(v, s, n), i = J(v, x) / e, i = i < 0 | 1 < i ? 8 : 9, i == 8) {
      h = 0;
      break a;
    } else if (i == 9) {
      o[f + 2] = h;
      i = t > 0 ? 10 : 11;
      i == 10 ? (Nd(y, q), q = f, b[q] = b[y], o[q] = o[y], b[q + 1] = b[y + 1], o[q + 1] = o[y + 1]) : i == 11 && (y = f, b[y] = b[q], o[y] = o[q], b[y + 1] = b[q + 1], o[y + 1] = o[q + 1]);
      h = 1;
      break a;
    } while (0);
    h = 0;
  } while (0);
  a = g;
  return h;
}

Ph.X = 1;

function Sh(c, f, d) {
  var e = a;
  a += 16;
  var g, i = e + 2, h, j = e + 4, k = e + 6, l = e + 8, m = e + 10, n = e + 12, p = e + 14;
  Nc(e, d, c + 5);
  b[i] = b[e];
  o[i] = o[e];
  b[i + 1] = b[e + 1];
  o[i + 1] = o[e + 1];
  h = 1;
  var t = c + 37;
  g = h < b[t] ? 1 : 3;
  a : do if (g == 1) for (var q = c + 5, s = e, u = k, x = i, v = l; ; ) if (Nc(j, d, q + (h << 1)), Og(k, e, j), b[s] = b[u], o[s] = o[u], b[s + 1] = b[u + 1], o[s + 1] = o[u + 1], Pg(l, i, j), b[x] = b[v], o[x] = o[v], b[x + 1] = b[v + 1], o[x + 1] = o[v + 1], h += 1, h >= b[t]) break a; while (0);
  mc(m, o[c + 2], o[c + 2]);
  C(n, e, m);
  b[f] = b[n];
  o[f] = o[n];
  b[f + 1] = b[n + 1];
  o[f + 1] = o[n + 1];
  c = f + 2;
  N(p, i, m);
  b[c] = b[p];
  o[c] = o[p];
  b[c + 1] = b[p + 1];
  o[c + 1] = o[p + 1];
  a = e;
}

Sh.X = 1;

function Th(c, f) {
  o[c] *= f;
  o[c + 1] *= f;
}

function Uh(c, f, d, e) {
  var g = a;
  a += 14;
  var i, h, j = g + 2, k = g + 4, l = g + 6, m = g + 8, n, p, t = g + 10, q, s = g + 12;
  n = e + 2;
  C(j, d, e);
  Md(g, n, j);
  j = e + 2;
  C(l, d + 2, e);
  Md(k, j, l);
  C(m, k, g);
  k = 0;
  l = o[d + 4];
  j = -1;
  n = 0;
  var u = c + 37, x = c + 21, v = c + 5, y = c + 21;
  a : for (;;) {
    if (n >= b[u]) {
      i = 14;
      break;
    }
    i = x + (n << 1);
    C(t, v + (n << 1), g);
    p = J(i, t);
    q = J(y + (n << 1), m);
    i = q == 0 ? 3 : 5;
    b : do if (i == 3) {
      if (p < 0) {
        i = 4;
        break a;
      }
    } else if (i == 5) {
      if (q < 0) i = 6; else {
        var z = q;
        i = 8;
      }
      do if (i == 6) if (p < k * q) {
        k = p / q;
        j = n;
        i = 11;
        break b;
      } else z = q, i = 8; while (0);
      z > 0 ? p < l * q ? l = p / q : i = 11 : i = 11;
    } while (0);
    if (l < k) {
      i = 12;
      break;
    }
    n += 1;
  }
  i == 14 ? (i = 0 <= k ? 15 : 16, i == 15 && (i = k <= o[d + 4] ? 17 : 16), i == 16 && O(Vh, 249, Wh, Xh), i = j >= 0 ? 18 : 19, i == 18 ? (o[f + 2] = k, R(s, e + 2, c + 21 + (j << 1)), b[f] = b[s], o[f] = o[s], b[f + 1] = b[s + 1], o[f + 1] = o[s + 1], h = 1) : i == 19 && (h = 0)) : i == 4 ? h = 0 : i == 12 && (h = 0);
  a = g;
  return h;
}

Uh.X = 1;

function Yh(c, f, d) {
  var e = a;
  a += 14;
  var g, i, h, j = e + 2, k, l = e + 4, m = e + 6, n, p, t = e + 8, q = e + 10, s, u, x, v = e + 12;
  g = b[c + 37] >= 3 ? 2 : 1;
  g == 1 && O(Vh, 306, Zh, $h);
  lc(e, 0, 0);
  h = i = 0;
  mc(j, 0, 0);
  k = 0;
  n = c + 37;
  g = k < b[n] ? 3 : 5;
  a : do if (g == 3) for (var y = c + 5; ; ) if (Lb(j, y + (k << 1)), k += 1, k >= b[n]) break a; while (0);
  Th(j, 1 / b[c + 37]);
  k = 0;
  y = c + 37;
  g = k < b[y] ? 6 : 11;
  a : do if (g == 6) for (var z = c + 5, B = c + 37, E = c + 5, D = l, H = l + 1, I = m, M = m + 1, G = c + 5; ; ) if (C(l, z + (k << 1), j), g = k + 1 < b[B] ? 8 : 9, g == 8 ? C(m, E + (k + 1 << 1), j) : g == 9 && C(m, G, j), n = Q(l, m), p = n * .5, i += p, p *= .3333333432674408, N(q, l, m), K(t, p, q), Lb(e, t), s = o[D], p = o[H], u = o[I], x = o[M], s = s * s + u * s + u * u, p = p * p + x * p + x * x, h += n * .0833333358168602 * (s + p), k += 1, k >= b[y]) break a; while (0);
  o[f] = d * i;
  (i > 1.1920928955078125e-7 ? 13 : 12) == 12 && O(Vh, 352, Zh, ai);
  Th(e, 1 / i);
  c = f + 1;
  N(v, e, j);
  b[c] = b[v];
  o[c] = o[v];
  b[c + 1] = b[v + 1];
  o[c + 1] = o[v + 1];
  o[f + 3] = d * h;
  o[f + 3] += o[f] * (J(f + 1, f + 1) - J(e, e));
  a = e;
}

Yh.X = 1;

function bi(c) {
  var f, d;
  b[c + 2] = 128;
  b[c + 1] = 0;
  d = ib(b[c + 2] << 3);
  b[c] = d;
  f = b[c];
  var e = b[c + 2] << 3;
  for (d = 0; d < 2 * (e / 8); d++) b[f + d] = 0, o[f + d] = 0;
  c += 3;
  for (d = 0; d < 14; d++) b[c + d] = 0, o[c + d] = 0;
  f = (b[ci] & 1) == 0 ? 1 : 10;
  if (f == 1) {
    c = 0;
    d = 1;
    for (f = 0; ; ) {
      f = f < 14 ? 5 : 4;
      f == 4 && O(di, 73, ei, fi);
      f = d <= b[gi + c] ? 6 : 7;
      f == 6 ? b[hi + d] = c & 255 : f == 7 && (c += 1, b[hi + d] = c & 255);
      d = f = d + 1;
      if (!(f <= 640)) break;
      f = c;
    }
    b[ci] = 1;
  }
}

bi.X = 1;

function ii(c, f, d) {
  var e;
  if ((d == 0 ? 8 : 1) == 1) {
    if (0 < d) {
      var g = d;
      e = 3;
    } else e = 2;
    e == 2 && (O(di, 164, ji, ki), g = d);
    e = g > 640 ? 4 : 5;
    e != 4 && e == 5 && (d = b[hi + d], (0 <= d & d < 14 ? 7 : 6) == 6 && O(di, 173, ji, li), b[f] = b[d + (c + 3)], b[d + (c + 3)] = f);
  }
}

ii.X = 1;

function mi(c, f) {
  return o[c] * o[f] + o[c + 1] * o[f + 1] + o[c + 2] * o[f + 2];
}

function ni(c, f, d) {
  oi(c, o[f + 1] * o[d + 2] - o[f + 2] * o[d + 1], o[f + 2] * o[d] - o[f] * o[d + 2], o[f] * o[d + 1] - o[f + 1] * o[d]);
}

ni.X = 1;

function pi(c, f, d) {
  var e, g, i, h;
  e = o[f];
  g = o[f + 3];
  i = o[f + 1];
  f = o[f + 4];
  h = e * f - g * i;
  if ((h != 0 ? 1 : 2) == 1) h = 1 / h;
  o[c] = h * (f * o[d] - g * o[d + 1]);
  o[c + 1] = h * (e * o[d + 1] - i * o[d]);
}

pi.X = 1;

function qi(c, f) {
  var d, e, g, i, h;
  d = o[c];
  e = o[c + 3];
  g = o[c + 1];
  i = o[c + 4];
  h = d * i - e * g;
  if ((h != 0 ? 1 : 2) == 1) h = 1 / h;
  o[f] = h * i;
  o[f + 3] = -h * e;
  o[f + 2] = 0;
  o[f + 1] = -h * g;
  o[f + 4] = h * d;
  o[f + 5] = 0;
  o[f + 6] = 0;
  o[f + 7] = 0;
  o[f + 8] = 0;
}

qi.X = 1;

function oi(c, f, d, e) {
  o[c] = f;
  o[c + 1] = d;
  o[c + 2] = e;
}

function Jh(c, f) {
  var d, e, g, i, h, j, k, l, m;
  d = f == 0 ? 1 : 2;
  if (d == 1) e = 0; else if (d == 2) if (0 < f ? (g = f, d = 4) : d = 3, d == 3 && (O(di, 104, ri, ki), g = f), d = g > 640 ? 5 : 6, d == 5) e = ib(f); else if (d == 6) if (g = b[hi + f], (0 <= g & g < 14 ? 8 : 7) == 7 && O(di, 112, ri, li), d = b[g + (c + 3)] != 0 ? 9 : 10, d == 9) i = b[g + (c + 3)], b[g + (c + 3)] = b[i], e = i; else if (d == 10) {
    d = b[c + 1] == b[c + 2] ? 11 : 12;
    if (d == 11) {
      e = b[c];
      b[c + 2] += 128;
      d = ib(b[c + 2] << 3);
      b[c] = d;
      d = e;
      e += 2 * ((b[c + 1] << 3) / 8);
      for (h = b[c]; d < e; d++, h++) b[h] = b[d], o[h] = o[d];
      d = b[c] + (b[c + 1] << 1);
      for (e = 0; e < 256; e++) b[d + e] = 0, o[d + e] = 0;
    }
    e = b[c] + (b[c + 1] << 1);
    d = ib(16384);
    b[e + 1] = d;
    h = b[gi + g];
    b[e] = h;
    j = 16384 / h | 0;
    (h * j <= 16384 ? 14 : 13) == 13 && O(di, 140, ri, si);
    k = 0;
    d = b[e + 1];
    if (k < j - 1) l = d, m = h, d = 15; else {
      i = d;
      var n = h;
      d = 16;
    }
    a : do if (d == 15) for (;;) if (l += k * m, m = b[e + 1] + (k + 1) * h, b[l] = m, k += 1, k < j - 1) l = b[e + 1], m = h; else {
      i = b[e + 1];
      n = h;
      break a;
    } while (0);
    b[i + (j - 1) * n] = 0;
    b[g + (c + 3)] = b[b[e + 1]];
    b[c + 1] += 1;
    e = b[e + 1];
  }
  return e;
}

Jh.X = 1;

function ti(c, f, d) {
  var e = a;
  a += 12;
  var g, i = e + 3, h = e + 6, j = e + 9;
  ni(e, f + 3, f + 6);
  g = mi(f, e);
  if ((g != 0 ? 1 : 2) == 1) g = 1 / g;
  var k = g;
  ni(i, f + 3, f + 6);
  o[c] = k * mi(d, i);
  i = g;
  ni(h, d, f + 6);
  o[c + 1] = i * mi(f, h);
  ni(j, f + 3, d);
  o[c + 2] = g * mi(f, j);
  a = e;
}

ti.X = 1;

function ui(c, f) {
  var d = a;
  a += 3;
  var e, g, i, h, j, k, l;
  ni(d, c + 3, c + 6);
  e = mi(c, d);
  if ((e != 0 ? 1 : 2) == 1) e = 1 / e;
  g = o[c];
  i = o[c + 3];
  h = o[c + 6];
  j = o[c + 4];
  k = o[c + 7];
  l = o[c + 8];
  o[f] = e * (j * l - k * k);
  o[f + 1] = e * (h * k - i * l);
  o[f + 2] = e * (i * k - h * j);
  o[f + 3] = o[f + 1];
  o[f + 4] = e * (g * l - h * h);
  o[f + 5] = e * (h * i - g * k);
  o[f + 6] = o[f + 2];
  o[f + 7] = o[f + 5];
  o[f + 8] = e * (g * j - i * i);
  a = d;
}

ui.X = 1;

function vi(c) {
  var f, d;
  f = c != c ? 1 : 2;
  if (f == 1) d = 0; else if (f == 2) {
    if (-Infinity < c) f = 3; else {
      var e = 0;
      f = 4;
    }
    f == 3 && (e = c < Infinity);
    d = e;
  }
  return d;
}

function wi(c) {
  b[c + 102400] = 0;
  b[c + 102401] = 0;
  b[c + 102402] = 0;
  b[c + 102499] = 0;
}

function xi(c) {
  var f;
  f = b[c + 102400] == 0 ? 2 : 1;
  f == 1 && O(yi, 32, zi, Ai);
  f = b[c + 102499] == 0 ? 4 : 3;
  f == 3 && O(yi, 33, zi, Bi);
}

function Ci(c, f) {
  var d, e;
  d = b[c + 102499] > 0 ? 2 : 1;
  d == 1 && O(yi, 63, Di, Ei);
  e = c + 102403 + b[c + 102499] * 3 - 3;
  d = f == b[e] ? 4 : 3;
  d == 3 && O(yi, 65, Di, Fi);
  d = b[e + 2] & 1 ? 5 : 6;
  d != 5 && d == 6 && (b[c + 102400] -= b[e + 1]);
  b[c + 102401] -= b[e + 1];
  b[c + 102499] -= 1;
}

Ci.X = 1;

function Gi(c) {
  return (b[c + 102517] & 2) == 2;
}

function U(c) {
  var f = a;
  a += 1;
  b[f] = arguments[U.length];
  Hi(c, b[f]);
  a = f;
}

function Ii(c, f) {
  var d, e;
  d = b[c + 102499] < 32 ? 2 : 1;
  d == 1 && O(yi, 38, Ji, Ki);
  e = c + 102403 + b[c + 102499] * 3;
  b[e + 1] = f;
  d = f + b[c + 102400] > 102400 ? 3 : 4;
  d == 3 ? (d = ib(f), b[e] = d, b[e + 2] = 1) : d == 4 && (b[e] = c + b[c + 102400], b[e + 2] = 0, b[c + 102400] += f);
  b[c + 102401] += f;
  b[c + 102402] = b[c + 102402] > b[c + 102401] ? b[c + 102402] : b[c + 102401];
  b[c + 102499] += 1;
  return b[e];
}

Ii.X = 1;

function Li(c) {
  var f = a;
  a += 2;
  Mi(f);
  b[c] = b[f];
  b[c + 1] = Math.floor(b[f + 1] * .0010000000474974513);
  a = f;
}

function Ni(c) {
  var f = a;
  a += 2;
  Mi(f);
  c = (b[f] - b[c]) * 1e3 + b[f + 1] * .0010000000474974513 - b[c + 1];
  a = f;
  return c;
}

function Oi(c, f, d) {
  var e;
  e = Pi(f + 1) ? 2 : 1;
  e == 1 && O(Qi, 27, Ri, Si);
  e = Pi(f + 4) ? 4 : 3;
  e == 3 && O(Qi, 28, Ri, Ti);
  e = vi(o[f + 3]) ? 6 : 5;
  e == 5 && O(Qi, 29, Ri, Ui);
  e = vi(o[f + 6]) ? 8 : 7;
  e == 7 && O(Qi, 30, Ri, Vi);
  e = vi(o[f + 8]) ? 9 : 10;
  e == 9 && (e = o[f + 8] >= 0 ? 11 : 10);
  e == 10 && O(Qi, 31, Ri, Wi);
  e = vi(o[f + 7]) ? 12 : 13;
  e == 12 && (e = o[f + 7] >= 0 ? 14 : 13);
  e == 13 && O(Qi, 32, Ri, Xi);
  b[c + 1] = 0;
  e = b[f + 12] & 1 ? 15 : 16;
  e == 15 && (b[c + 1] = (b[c + 1] | 8) & 65535);
  e = b[f + 11] & 1 ? 17 : 18;
  e == 17 && (b[c + 1] = (b[c + 1] | 16) & 65535);
  e = b[f + 9] & 1 ? 19 : 20;
  e == 19 && (b[c + 1] = (b[c + 1] | 4) & 65535);
  e = b[f + 10] & 1 ? 21 : 22;
  e == 21 && (b[c + 1] = (b[c + 1] | 2) & 65535);
  e = b[f + 13] & 1 ? 23 : 24;
  e == 23 && (b[c + 1] = (b[c + 1] | 32) & 65535);
  b[c + 22] = d;
  d = c + 3;
  e = f + 1;
  b[d] = b[e];
  o[d] = o[e];
  b[d + 1] = b[e + 1];
  o[d + 1] = o[e + 1];
  ah(c + 5, o[f + 3]);
  ac(c + 7);
  d = c + 9;
  e = c + 3;
  b[d] = b[e];
  o[d] = o[e];
  b[d + 1] = b[e + 1];
  o[d + 1] = o[e + 1];
  d = c + 11;
  e = c + 3;
  b[d] = b[e];
  o[d] = o[e];
  b[d + 1] = b[e + 1];
  o[d + 1] = o[e + 1];
  o[c + 13] = o[f + 3];
  o[c + 14] = o[f + 3];
  o[c + 15] = 0;
  b[c + 27] = 0;
  b[c + 28] = 0;
  b[c + 23] = 0;
  b[c + 24] = 0;
  d = c + 16;
  e = f + 4;
  b[d] = b[e];
  o[d] = o[e];
  b[d + 1] = b[e + 1];
  o[d + 1] = o[e + 1];
  o[c + 18] = o[f + 6];
  o[c + 33] = o[f + 7];
  o[c + 34] = o[f + 8];
  o[c + 35] = o[f + 15];
  ac(c + 19);
  o[c + 21] = 0;
  o[c + 36] = 0;
  b[c] = b[f];
  e = b[c] == 2 ? 25 : 26;
  e == 25 ? (o[c + 29] = 1, o[c + 30] = 1) : e == 26 && (o[c + 29] = 0, o[c + 30] = 0);
  o[c + 31] = 0;
  o[c + 32] = 0;
  b[c + 37] = b[f + 14];
  b[c + 25] = 0;
  b[c + 26] = 0;
}

Oi.X = 1;

function Pi(c) {
  var f;
  if (vi(o[c])) f = 1; else {
    var d = 0;
    f = 2;
  }
  f == 1 && (d = vi(o[c + 1]));
  return d;
}

function Yi(c) {
  var f = a;
  a += 16;
  var d, e, g = f + 2, i = f + 6, h = f + 8, j = f + 10, k = f + 12, l = f + 14;
  o[c + 29] = 0;
  o[c + 30] = 0;
  o[c + 31] = 0;
  o[c + 32] = 0;
  ac(c + 7);
  d = b[c] == 0 ? 2 : 1;
  do if (d == 1) if (b[c] == 1) d = 2; else {
    d = b[c] == 2 ? 5 : 4;
    d == 4 && O(Qi, 284, Zi, $i);
    d = f;
    b[d] = b[se];
    o[d] = o[se];
    b[d + 1] = b[se + 1];
    o[d + 1] = o[se + 1];
    e = b[c + 25];
    d = b[c + 25] != 0 ? 6 : 10;
    a : do if (d == 6) for (var m = g, n = c + 29, p = g, t = g + 1, q = g + 3, s = c + 31; ; ) {
      d = o[e] == 0 ? 9 : 8;
      if (d == 8) {
        var u = b[e + 3];
        kb[b[b[u] + 7]](u, g, o[e]);
        o[n] += o[m];
        K(i, o[p], t);
        Lb(f, i);
        o[s] += o[q];
      }
      e = u = b[e + 1];
      if (u == 0) break a;
    } while (0);
    e = c + 29;
    d = o[c + 29] > 0 ? 11 : 12;
    d == 11 ? (o[c + 30] = 1 / o[e], Th(f, o[c + 30])) : d == 12 && (o[e] = 1, o[c + 30] = 1);
    d = o[c + 31] > 0 ? 14 : 18;
    d == 14 && ((b[c + 1] & 16) != 0 ? d = 18 : (o[c + 31] -= o[c + 29] * J(f, f), d = o[c + 31] > 0 ? 17 : 16, d == 16 && O(Qi, 319, Zi, aj), o[c + 32] = 1 / o[c + 31], d = 19));
    d == 18 && (o[c + 31] = 0, o[c + 32] = 0);
    d = h;
    e = c + 11;
    b[d] = b[e];
    o[d] = o[e];
    b[d + 1] = b[e + 1];
    o[d + 1] = o[e + 1];
    d = c + 7;
    e = f;
    b[d] = b[e];
    o[d] = o[e];
    b[d + 1] = b[e + 1];
    o[d + 1] = o[e + 1];
    d = c + 9;
    e = c + 11;
    Nc(j, c + 3, c + 7);
    m = e;
    e = j;
    b[m] = b[e];
    o[m] = o[e];
    b[m + 1] = b[e + 1];
    o[m + 1] = o[e + 1];
    m = ib(2);
    bj(m, e);
    bj(d, m);
    d = c + 16;
    e = o[c + 18];
    C(l, c + 11, h);
    Ae(k, e, l);
    Lb(d, k);
    d = 20;
  } while (0);
  d == 2 && (g = c + 9, i = c + 3, b[g] = b[i], o[g] = o[i], b[g + 1] = b[i + 1], o[g + 1] = o[i + 1], g = c + 11, i = c + 3, b[g] = b[i], o[g] = o[i], b[g + 1] = b[i + 1], o[g + 1] = o[i + 1], o[c + 13] = o[c + 14]);
  a = f;
}

Yi.X = 1;

function cj(c) {
  var f = a;
  a += 8;
  var d;
  d = f + 4;
  var e = f + 6, g;
  ah(f + 2, o[c + 13]);
  g = c + 9;
  R(e, f + 2, c + 7);
  C(d, g, e);
  b[f] = b[d];
  o[f] = o[d];
  b[f + 1] = b[d + 1];
  o[f + 1] = o[d + 1];
  e = b[c + 22] + 102518;
  g = b[c + 25];
  d = b[c + 25] != 0 ? 1 : 3;
  a : do if (d == 1) for (var i = c + 3; ; ) {
    dj(g, e, f, i);
    var h = b[g + 1];
    g = h;
    if (h == 0) break a;
  } while (0);
  a = f;
}

function oc(c, f) {
  var d, e = c + 1, g = b[e];
  d = f & 1 ? 1 : 3;
  d == 1 ? (g & 2) == 0 && (b[c + 1] = (b[c + 1] | 2) & 65535, o[c + 36] = 0) : d == 3 && (b[e] = g & 65533, o[c + 36] = 0, ac(c + 16), o[c + 18] = 0, ac(c + 19), o[c + 21] = 0);
}

function ej(c, f) {
  var d, e, g;
  d = b[c] != 2 ? 1 : 3;
  d == 1 && (b[f] == 2 ? d = 3 : (e = 0, d = 10));
  if (d == 3) {
    g = b[c + 27];
    var i = b[c + 27];
    a : for (;;) {
      if (i == 0) {
        d = 9;
        break;
      }
      d = b[g] == f ? 6 : 8;
      if (d == 6 && (b[b[g + 1] + 16] & 1) == 0) {
        d = 7;
        break a;
      }
      g = i = b[g + 3];
    }
    d == 9 ? e = 1 : d == 7 && (e = 0);
  }
  return e;
}

ej.X = 1;

function fj(c, f) {
  var d, e, g, i;
  d = Gi(b[c + 22]) == 0 ? 2 : 1;
  d == 1 && O(Qi, 153, gj, hj);
  d = Gi(b[c + 22]) == 1 ? 3 : 4;
  d == 3 ? e = 0 : d == 4 && (e = b[c + 22], g = Jh(e, 44), g == 0 ? (i = 0, d = 6) : d = 5, d == 5 && (ij(g), i = g), jj(i, e, c, f), d = (b[c + 1] & 32) != 0 ? 7 : 8, d == 7 && (d = b[c + 22] + 102518, kj(i, d, c + 3)), b[i + 1] = b[c + 25], b[c + 25] = i, b[c + 26] += 1, b[i + 2] = c, d = o[i] > 0 ? 9 : 10, d == 9 && Yi(c), b[b[c + 22] + 102517] |= 1, e = i);
  return e;
}

fj.X = 1;

function sc(c, f, d) {
  var e = a;
  a += 9;
  lj(e + 6);
  b[e] = 0;
  b[e + 1] = 0;
  o[e + 2] = .20000000298023224;
  o[e + 3] = 0;
  o[e + 4] = 0;
  b[e + 5] = 0;
  b[e] = f;
  o[e + 4] = d;
  fj(c, e);
  a = e;
}

function lj(c) {
  b[c] = 1;
  b[c + 1] = -1;
  b[c + 2] = 0;
}

function mj(c) {
  Jc(c);
  b[c + 15] = 0;
  b[c + 16] = 0;
  b[c + 17] = nj;
  b[c + 18] = oj;
  b[c + 19] = 0;
}

function pj(c) {
  return b[c + 2];
}

function qj(c) {
  return (b[c + 1] & 2) == 2;
}

function rj(c, f) {
  var d, e, g;
  e = b[f + 12];
  g = b[f + 13];
  e = pj(e);
  g = pj(g);
  d = b[c + 18] != 0 ? 1 : 3;
  d == 1 && (b[f + 1] & 2) == 2 && (d = b[c + 18], kb[b[b[d] + 3]](d, f));
  d = b[f + 2] != 0 ? 4 : 5;
  d == 4 && (b[b[f + 2] + 3] = b[f + 3]);
  d = b[f + 3] != 0 ? 6 : 7;
  d == 6 && (b[b[f + 3] + 2] = b[f + 2]);
  d = f == b[c + 15] ? 8 : 9;
  d == 8 && (b[c + 15] = b[f + 3]);
  d = b[f + 6] != 0 ? 10 : 11;
  d == 10 && (b[b[f + 6] + 3] = b[f + 7]);
  d = b[f + 7] != 0 ? 12 : 13;
  d == 12 && (b[b[f + 7] + 2] = b[f + 6]);
  d = f + 4 == b[e + 28] ? 14 : 15;
  d == 14 && (b[e + 28] = b[f + 7]);
  d = b[f + 10] != 0 ? 16 : 17;
  d == 16 && (b[b[f + 10] + 3] = b[f + 11]);
  d = b[f + 11] != 0 ? 18 : 19;
  d == 18 && (b[b[f + 11] + 2] = b[f + 10]);
  d = f + 8 == b[g + 28] ? 20 : 21;
  d == 20 && (b[g + 28] = b[f + 11]);
  sj(f, b[c + 19]);
  b[c + 16] -= 1;
}

rj.X = 1;

function tj(c) {
  var f, d, e, g, i, h, j, k, l, m;
  d = b[c + 15];
  f = b[c + 15] != 0 ? 1 : 21;
  a : do if (f == 1) for (var n = c + 17, p = c + 17, t = c, q = c + 18; ; ) {
    e = b[d + 12];
    g = b[d + 13];
    i = b[d + 14];
    h = b[d + 15];
    j = pj(e);
    k = pj(g);
    f = (b[d + 1] & 8) != 0 ? 4 : 10;
    b : do if (f == 4) if (f = ej(k, j) == 0 ? 5 : 6, f == 5) {
      f = d;
      d = b[f + 3];
      rj(c, f);
      f = 2;
      break b;
    } else if (f == 6) {
      f = b[n] != 0 ? 7 : 9;
      do if (f == 7) if (f = b[p], kb[b[b[f] + 2]](f, e, g) != 0) f = 9; else {
        f = d;
        d = b[f + 3];
        rj(c, f);
        f = 2;
        break b;
      } while (0);
      b[d + 1] &= -9;
      f = 10;
      break b;
    } while (0);
    b : do if (f == 10) {
      if (qj(j)) f = 11; else {
        var s = 0;
        f = 12;
      }
      f == 11 && (s = b[j] != 0);
      l = s;
      if (qj(k)) f = 13; else {
        var u = 0;
        f = 14;
      }
      f == 13 && (u = b[k] != 0);
      m = u;
      f = (l & 1) == 0 ? 15 : 18;
      do if (f == 15) if ((m & 1) != 0) f = 18; else {
        var x = b[d + 3];
        d = x;
        f = 17;
        break b;
      } while (0);
      f = b[b[e + 6] + i * 7 + 6];
      m = b[b[g + 6] + h * 7 + 6];
      l = t;
      var v = m;
      m = ba;
      m = uj(l, f);
      f = uj(l, v);
      f = vj(m, f);
      l = d;
      f = (f & 1) == 0 ? 19 : 20;
      if (f == 19) {
        e = l;
        d = b[e + 3];
        rj(c, e);
        f = 2;
        break b;
      } else if (f == 20) {
        wj(l, b[q]);
        d = x = b[d + 3];
        f = 17;
        break b;
      }
    } while (0);
    f == 2 && (x = d);
    if (x == 0) break a;
  } while (0);
}

tj.X = 1;

function xj(c, f) {
  var d = a;
  a += 1;
  var e, g, i, h, j, k;
  g = b[c + 13] = 0;
  h = c + 10;
  e = g < b[h] ? 1 : 5;
  a : do if (e == 1) for (var l = c + 8, m = c + 14, n = c, p = c + 14, t = c; ; ) if (e = b[b[l] + g], b[m] = e, e = e == -1 ? 4 : 3, e == 3 && (i = uj(n, b[p]), yj(t, c, i)), g += 1, g >= b[h]) break a; while (0);
  b[c + 10] = 0;
  g = b[c + 11] + b[c + 13] * 3;
  e = b[c + 11];
  b[d] = 2;
  zj(e, g, d);
  g = 0;
  l = c + 13;
  e = g < b[l] ? 6 : 13;
  a : do if (e == 6) {
    m = c + 11;
    p = n = c;
    t = c + 11;
    for (i = c + 13; ; ) {
      h = b[m] + g * 3;
      j = Aj(n, b[h]);
      k = Aj(p, b[h + 1]);
      Bj(f, j, k);
      for (g += 1; ; ) {
        if (g >= b[i]) {
          e = 7;
          break;
        }
        j = b[t] + g * 3;
        if (b[j] != b[h]) {
          e = 7;
          break;
        }
        if (b[j + 1] != b[h + 1]) {
          e = 7;
          break;
        }
        g += 1;
      }
      if (g >= b[l]) break a;
    }
  } while (0);
  a = d;
}

xj.X = 1;

function uj(c, f) {
  var d;
  d = 0 <= f ? 1 : 2;
  d == 1 && (d = f < b[c + 3] ? 3 : 2);
  d == 2 && O(Cj, 159, Dj, Mg);
  return b[c + 1] + f * 9;
}

function Aj(c, f) {
  var d;
  d = 0 <= f ? 1 : 2;
  d == 1 && (d = f < b[c + 3] ? 3 : 2);
  d == 2 && O(Cj, 153, Ej, Mg);
  return b[b[c + 1] + f * 9 + 4];
}

function Bj(c, f, d) {
  var e, g, i, h, j, k, l, m, n, p;
  g = b[f + 4];
  i = b[d + 4];
  f = b[f + 5];
  d = b[d + 5];
  h = pj(g);
  j = pj(i);
  e = h == j ? 24 : 1;
  a : do if (e == 1) {
    for (k = e = b[j + 28]; ; ) {
      if (e == 0) break;
      e = b[k] == h ? 4 : 12;
      do if (e == 4) {
        l = b[b[k + 1] + 12];
        m = b[b[k + 1] + 13];
        n = b[b[k + 1] + 14];
        p = b[b[k + 1] + 15];
        e = l == g ? 5 : 8;
        do if (e == 5) if (m != i) e = 8; else if (n != f) e = 8; else if (p == d) break a; while (0);
        if (l != i) e = 12; else if (m != g) e = 12; else if (n != d) e = 12; else if (p == f) break a;
      } while (0);
      k = e = b[k + 3];
    }
    if (ej(j, h) == 0) e = 24; else {
      e = b[c + 17] != 0 ? 15 : 16;
      if (e == 15 && (k = b[c + 17], kb[b[b[k] + 2]](k, g, i) == 0)) break a;
      k = e = Fj(g, f, i, d, b[c + 19]);
      e == 0 ? e = 24 : (g = b[k + 12], i = b[k + 13], f = b[k + 14], d = b[k + 15], h = pj(g), j = pj(i), b[k + 2] = 0, b[k + 3] = b[c + 15], e = b[c + 15] != 0 ? 18 : 19, e == 18 && (b[b[c + 15] + 2] = k), b[c + 15] = k, b[k + 5] = k, b[k + 4] = j, b[k + 6] = 0, b[k + 7] = b[h + 28], e = b[h + 28] != 0 ? 20 : 21, e == 20 && (b[b[h + 28] + 2] = k + 4), b[h + 28] = k + 4, b[k + 9] = k, b[k + 8] = h, b[k + 10] = 0, b[k + 11] = b[j + 28], e = b[j + 28] != 0 ? 22 : 23, e == 22 && (b[b[j + 28] + 2] = k + 8), b[j + 28] = k + 8, oc(h, 1), oc(j, 1), b[c + 16] += 1);
    }
  } while (0);
}

Bj.X = 1;

function yj(c, f, d) {
  var e = a;
  a += 259;
  var g, i, h;
  b[e] = e + 1;
  b[e + 257] = 0;
  b[e + 258] = 256;
  Gj(e, c);
  c += 1;
  a : for (;;) {
    if (b[e + 257] <= 0) break;
    g = e;
    (b[g + 257] > 0 ? 2 : 1) == 1 && O(Hj, 67, Ij, Jj);
    b[g + 257] -= 1;
    i = b[b[g] + b[g + 257]];
    if (i != -1 && (h = b[c] + i * 9, vj(h, d))) if (g = b[h + 6] == -1 ? 7 : 9, g == 7) {
      if (g = Mc(f, i), (g & 1) == 0) break a;
    } else g == 9 && (Gj(e, h + 6), Gj(e, h + 7));
  }
  if ((b[e] != e + 1 ? 1 : 2) == 1) b[e] = 0;
  a = e;
}

yj.X = 1;

function zj(c, f, d) {
  var e = a;
  a += 18;
  var g, i, h, j, k, l, m = e + 3, n = e + 6, p = e + 9, t = e + 12, q = e + 15, s, u;
  a : for (;;) {
    s = h = (f - c) / 12 | 0;
    if (h == 0) {
      g = 49;
      break;
    } else if (h == 1) {
      g = 49;
      break;
    } else if (h == 2) {
      g = 2;
      break;
    } else if (h == 3) {
      g = 4;
      break;
    } else if (h == 4) {
      g = 5;
      break;
    } else if (h == 5) {
      g = 6;
      break;
    }
    var x = c;
    if (s <= 30) {
      g = 8;
      break;
    }
    i = x;
    h = f;
    h -= 3;
    l = s / 2 | 0;
    i += l * 3;
    g = s >= 1e3 ? 10 : 11;
    g == 10 ? (l = l / 2 | 0, u = Kj(c, c + l * 3, i, i + l * 3, h, d)) : g == 11 && (u = Lj(c, i, h, d));
    s = c;
    g = kb[b[d]](s, i) ? 28 : 13;
    if (g == 13) {
      for (;;) {
        h = l = h - 3;
        if (s == l) {
          g = 14;
          break;
        }
        if (kb[b[d]](h, i)) {
          g = 27;
          break;
        }
      }
      if (g == 14) {
        s += 3;
        h = f;
        i = b[d];
        h = g = h - 3;
        g = kb[i](c, g) ? 19 : 15;
        if (g == 15) {
          for (;;) {
            if (s == h) {
              g = 49;
              break a;
            }
            i = kb[b[d]](c, s);
            var v = s;
            if (i) break;
            s = v + 3;
          }
          g = v;
          i = h;
          l = g;
          b[t] = b[l];
          o[t] = o[l];
          b[t + 1] = b[l + 1];
          o[t + 1] = o[l + 1];
          b[t + 2] = b[l + 2];
          o[t + 2] = o[l + 2];
          l = i;
          b[g] = b[l];
          o[g] = o[l];
          b[g + 1] = b[l + 1];
          o[g + 1] = o[l + 1];
          b[g + 2] = b[l + 2];
          o[g + 2] = o[l + 2];
          g = t;
          b[i] = b[g];
          o[i] = o[g];
          b[i + 1] = b[g + 1];
          o[i + 1] = o[g + 1];
          b[i + 2] = b[g + 2];
          o[i + 2] = o[g + 2];
          u += 1;
          s += 3;
        }
        if (s == h) {
          g = 49;
          break a;
        }
        b : for (;;) if (g = kb[b[d]](c, s) ^ 1 ? 21 : 22, g == 21) s += 3; else if (g == 22) {
          for (;;) {
            var y = b[d];
            h = i = h - 3;
            if (!kb[y](c, i)) break;
          }
          y = s;
          if (s >= h) break b;
          g = y;
          i = h;
          l = g;
          b[p] = b[l];
          o[p] = o[l];
          b[p + 1] = b[l + 1];
          o[p + 1] = o[l + 1];
          b[p + 2] = b[l + 2];
          o[p + 2] = o[l + 2];
          l = i;
          b[g] = b[l];
          o[g] = o[l];
          b[g + 1] = b[l + 1];
          o[g + 1] = o[l + 1];
          b[g + 2] = b[l + 2];
          o[g + 2] = o[l + 2];
          g = p;
          b[i] = b[g];
          o[i] = o[g];
          b[i + 1] = b[g + 1];
          o[i + 1] = o[g + 1];
          b[i + 2] = b[g + 2];
          o[i + 2] = o[g + 2];
          u += 1;
          s += 3;
        }
        c = y;
        g = 1;
        continue a;
      } else g == 27 && (l = s, g = h, k = l, b[n] = b[k], o[n] = o[k], b[n + 1] = b[k + 1], o[n + 1] = o[k + 1], b[n + 2] = b[k + 2], o[n + 2] = o[k + 2], k = g, b[l] = b[k], o[l] = o[k], b[l + 1] = b[k + 1], o[l + 1] = o[k + 1], b[l + 2] = b[k + 2], o[l + 2] = o[k + 2], l = n, b[g] = b[l], o[g] = o[l], b[g + 1] = b[l + 1], o[g + 1] = o[l + 1], b[g + 2] = b[l + 2], o[g + 2] = o[l + 2], u += 1);
    }
    s += 3;
    g = s < h ? 29 : 36;
    b : do if (g == 29) for (;;) if (g = kb[b[d]](s, i) ? 30 : 31, g == 30) s += 3; else if (g == 31) {
      for (;;) if (g = b[d], h = l = h - 3, !(kb[g](l, i) ^ 1)) break;
      if (s > h) break b;
      l = s;
      g = h;
      k = l;
      b[m] = b[k];
      o[m] = o[k];
      b[m + 1] = b[k + 1];
      o[m + 1] = o[k + 1];
      b[m + 2] = b[k + 2];
      o[m + 2] = o[k + 2];
      k = g;
      b[l] = b[k];
      o[l] = o[k];
      b[l + 1] = b[k + 1];
      o[l + 1] = o[k + 1];
      b[l + 2] = b[k + 2];
      o[l + 2] = o[k + 2];
      l = m;
      b[g] = b[l];
      o[g] = o[l];
      b[g + 1] = b[l + 1];
      o[g + 1] = o[l + 1];
      b[g + 2] = b[l + 2];
      o[g + 2] = o[l + 2];
      u += 1;
      g = i == s ? 34 : 35;
      g == 34 && (i = h);
      s += 3;
    } while (0);
    g = s != i ? 37 : 39;
    g == 37 && (kb[b[d]](i, s) ? (h = s, j = i, i = h, b[e] = b[i], o[e] = o[i], b[e + 1] = b[i + 1], o[e + 1] = o[i + 1], b[e + 2] = b[i + 2], o[e + 2] = o[i + 2], i = j, b[h] = b[i], o[h] = o[i], b[h + 1] = b[i + 1], o[h + 1] = o[i + 1], b[h + 2] = b[i + 2], o[h + 2] = o[i + 2], h = e, b[j] = b[h], o[j] = o[h], b[j + 1] = b[h + 1], o[j + 1] = o[h + 1], b[j + 2] = b[h + 2], o[j + 2] = o[h + 2], u = j = u + 1, g = 40) : g = 39);
    g == 39 && (j = u);
    g = j == 0 ? 41 : 46;
    b : do if (g == 41) if (i = Mj(c, s, d), h = Mj(s + 3, f, d), i &= 1, g = h ? 42 : 44, g == 42) {
      if (i) {
        g = 49;
        break a;
      }
      f = s;
      g = 1;
      continue a;
    } else if (g == 44) {
      if (!i) break b;
      c = s + 3;
      g = 1;
      continue a;
    } while (0);
    g = ((s - c) / 12 | 0) < ((f - s) / 12 | 0) ? 47 : 48;
    g == 47 ? (zj(c, s, d), c = s + 3) : g == 48 && (zj(s + 3, f, d), f = s);
  }
  g == 2 ? (d = b[d], f = m = f - 3, kb[d](m, c) && (b[q] = b[c], o[q] = o[c], b[q + 1] = b[c + 1], o[q + 1] = o[c + 1], b[q + 2] = b[c + 2], o[q + 2] = o[c + 2], b[c] = b[f], o[c] = o[f], b[c + 1] = b[f + 1], o[c + 1] = o[f + 1], b[c + 2] = b[f + 2], o[c + 2] = o[f + 2], b[f] = b[q], o[f] = o[q], b[f + 1] = b[q + 1], o[f + 1] = o[q + 1], b[f + 2] = b[q + 2], o[f + 2] = o[q + 2])) : g == 4 ? Lj(c, c + 3, f - 3, d) : g == 5 ? Nj(c, c + 3, c + 6, f - 3, d) : g == 6 ? Kj(c, c + 3, c + 6, c + 9, f - 3, d) : g == 8 && Oj(x, f, d);
  a = e;
}

zj.X = 1;

function Lj(c, f, d, e) {
  var g = a;
  a += 15;
  var i, h = g + 3, j = g + 6, k = g + 9, l = g + 12, m, n;
  n = 0;
  i = kb[b[e]](f, c);
  var p = kb[b[e]](d, f);
  i = i ? 6 : 1;
  i == 6 ? (i = p ? 7 : 8, i == 7 ? (b[g] = b[c], o[g] = o[c], b[g + 1] = b[c + 1], o[g + 1] = o[c + 1], b[g + 2] = b[c + 2], o[g + 2] = o[c + 2], b[c] = b[d], o[c] = o[d], b[c + 1] = b[d + 1], o[c + 1] = o[d + 1], b[c + 2] = b[d + 2], o[c + 2] = o[d + 2], b[d] = b[g], o[d] = o[g], b[d + 1] = b[g + 1], o[d + 1] = o[g + 1], b[d + 2] = b[g + 2], o[d + 2] = o[g + 2], m = 1) : i == 8 && (b[h] = b[c], o[h] = o[c], b[h + 1] = b[c + 1], o[h + 1] = o[c + 1], b[h + 2] = b[c + 2], o[h + 2] = o[c + 2], b[c] = b[f], o[c] = o[f], b[c + 1] = b[f + 1], o[c + 1] = o[f + 1], b[c + 2] = b[f + 2], o[c + 2] = o[f + 2], b[f] = b[h], o[f] = o[h], b[f + 1] = b[h + 1], o[f + 1] = o[h + 1], b[f + 2] = b[h + 2], o[f + 2] = o[h + 2], n = 1, i = kb[b[e]](d, f) ? 9 : 10, i == 9 && (b[k] = b[f], o[k] = o[f], b[k + 1] = b[f + 1], o[k + 1] = o[f + 1], b[k + 2] = b[f + 2], o[k + 2] = o[f + 2], b[f] = b[d], o[f] = o[d], b[f + 1] = b[d + 1], o[f + 1] = o[d + 1], b[f + 2] = b[d + 2], o[f + 2] = o[d + 2], b[d] = b[k], o[d] = o[k], b[d + 1] = b[k + 1], o[d + 1] = o[k + 1], b[d + 2] = b[k + 2], o[d + 2] = o[k + 2], n = 2), m = n)) : i == 1 && (i = p ? 3 : 2, i == 3 ? (b[l] = b[f], o[l] = o[f], b[l + 1] = b[f + 1], o[l + 1] = o[f + 1], b[l + 2] = b[f + 2], o[l + 2] = o[f + 2], b[f] = b[d], o[f] = o[d], b[f + 1] = b[d + 1], o[f + 1] = o[d + 1], b[f + 2] = b[d + 2], o[f + 2] = o[d + 2], b[d] = b[l], o[d] = o[l], b[d + 1] = b[l + 1], o[d + 1] = o[l + 1], b[d + 2] = b[l + 2], o[d + 2] = o[l + 2], n = 1, i = kb[b[e]](f, c) ? 4 : 5, i == 4 && (b[j] = b[c], o[j] = o[c], b[j + 1] = b[c + 1], o[j + 1] = o[c + 1], b[j + 2] = b[c + 2], o[j + 2] = o[c + 2], b[c] = b[f], o[c] = o[f], b[c + 1] = b[f + 1], o[c + 1] = o[f + 1], b[c + 2] = b[f + 2], o[c + 2] = o[f + 2], b[f] = b[j], o[f] = o[j], b[f + 1] = b[j + 1], o[f + 1] = o[j + 1], b[f + 2] = b[j + 2], o[f + 2] = o[j + 2], n = 2), m = n) : i == 2 && (m = n));
  a = g;
  return m;
}

Lj.X = 1;

function Nj(c, f, d, e, g) {
  var i = a;
  a += 9;
  var h = i + 3, j = i + 6, k;
  k = Lj(c, f, d, g);
  if ((kb[b[g]](e, d) ? 1 : 4) == 1) b[j] = b[d], o[j] = o[d], b[j + 1] = b[d + 1], o[j + 1] = o[d + 1], b[j + 2] = b[d + 2], o[j + 2] = o[d + 2], b[d] = b[e], o[d] = o[e], b[d + 1] = b[e + 1], o[d + 1] = o[e + 1], b[d + 2] = b[e + 2], o[d + 2] = o[e + 2], b[e] = b[j], o[e] = o[j], b[e + 1] = b[j + 1], o[e + 1] = o[j + 1], b[e + 2] = b[j + 2], o[e + 2] = o[j + 2], k += 1, kb[b[g]](d, f) && (b[i] = b[f], o[i] = o[f], b[i + 1] = b[f + 1], o[i + 1] = o[f + 1], b[i + 2] = b[f + 2], o[i + 2] = o[f + 2], b[f] = b[d], o[f] = o[d], b[f + 1] = b[d + 1], o[f + 1] = o[d + 1], b[f + 2] = b[d + 2], o[f + 2] = o[d + 2], b[d] = b[i], o[d] = o[i], b[d + 1] = b[i + 1], o[d + 1] = o[i + 1], b[d + 2] = b[i + 2], o[d + 2] = o[i + 2], k += 1, kb[b[g]](f, c) && (b[h] = b[c], o[h] = o[c], b[h + 1] = b[c + 1], o[h + 1] = o[c + 1], b[h + 2] = b[c + 2], o[h + 2] = o[c + 2], b[c] = b[f], o[c] = o[f], b[c + 1] = b[f + 1], o[c + 1] = o[f + 1], b[c + 2] = b[f + 2], o[c + 2] = o[f + 2], b[f] = b[h], o[f] = o[h], b[f + 1] = b[h + 1], o[f + 1] = o[h + 1], b[f + 2] = b[h + 2], o[f + 2] = o[h + 2], k += 1));
  a = i;
  return k;
}

Nj.X = 1;

function Kj(c, f, d, e, g, i) {
  var h = a;
  a += 12;
  var j = h + 3, k = h + 6, l = h + 9, m;
  m = Nj(c, f, d, e, i);
  if ((kb[b[i]](g, e) ? 1 : 5) == 1) b[l] = b[e], o[l] = o[e], b[l + 1] = b[e + 1], o[l + 1] = o[e + 1], b[l + 2] = b[e + 2], o[l + 2] = o[e + 2], b[e] = b[g], o[e] = o[g], b[e + 1] = b[g + 1], o[e + 1] = o[g + 1], b[e + 2] = b[g + 2], o[e + 2] = o[g + 2], b[g] = b[l], o[g] = o[l], b[g + 1] = b[l + 1], o[g + 1] = o[l + 1], b[g + 2] = b[l + 2], o[g + 2] = o[l + 2], m += 1, kb[b[i]](e, d) && (b[j] = b[d], o[j] = o[d], b[j + 1] = b[d + 1], o[j + 1] = o[d + 1], b[j + 2] = b[d + 2], o[j + 2] = o[d + 2], b[d] = b[e], o[d] = o[e], b[d + 1] = b[e + 1], o[d + 1] = o[e + 1], b[d + 2] = b[e + 2], o[d + 2] = o[e + 2], b[e] = b[j], o[e] = o[j], b[e + 1] = b[j + 1], o[e + 1] = o[j + 1], b[e + 2] = b[j + 2], o[e + 2] = o[j + 2], m += 1, kb[b[i]](d, f) && (b[h] = b[f], o[h] = o[f], b[h + 1] = b[f + 1], o[h + 1] = o[f + 1], b[h + 2] = b[f + 2], o[h + 2] = o[f + 2], b[f] = b[d], o[f] = o[d], b[f + 1] = b[d + 1], o[f + 1] = o[d + 1], b[f + 2] = b[d + 2], o[f + 2] = o[d + 2], b[d] = b[h], o[d] = o[h], b[d + 1] = b[h + 1], o[d + 1] = o[h + 1], b[d + 2] = b[h + 2], o[d + 2] = o[h + 2], m += 1, kb[b[i]](f, c) && (b[k] = b[c], o[k] = o[c], b[k + 1] = b[c + 1], o[k + 1] = o[c + 1], b[k + 2] = b[c + 2], o[k + 2] = o[c + 2], b[c] = b[f], o[c] = o[f], b[c + 1] = b[f + 1], o[c + 1] = o[f + 1], b[c + 2] = b[f + 2], o[c + 2] = o[f + 2], b[f] = b[k], o[f] = o[k], b[f + 1] = b[k + 1], o[f + 1] = o[k + 1], b[f + 2] = b[k + 2], o[f + 2] = o[k + 2], m += 1)));
  a = h;
  return m;
}

Kj.X = 1;

function Oj(c, f, d) {
  var e = a;
  a += 3;
  var g, i, h, j, k;
  j = c + 6;
  Lj(c, c + 3, j, d);
  k = j + 3;
  g = k != f ? 1 : 8;
  a : do if (g == 1) for (var l = e; ; ) {
    g = kb[b[d]](k, j) ? 3 : 7;
    if (g == 3) {
      h = k;
      b[l] = b[h];
      o[l] = o[h];
      b[l + 1] = b[h + 1];
      o[l + 1] = o[h + 1];
      b[l + 2] = b[h + 2];
      o[l + 2] = o[h + 2];
      h = j;
      for (j = k; ; ) {
        i = h;
        b[j] = b[i];
        o[j] = o[i];
        b[j + 1] = b[i + 1];
        o[j + 1] = o[i + 1];
        b[j + 2] = b[i + 2];
        o[j + 2] = o[i + 2];
        j = h;
        if (j == c) {
          g = 6;
          break;
        }
        i = b[d];
        var m = h - 3;
        h = m;
        if (!kb[i](e, m)) {
          g = 6;
          break;
        }
      }
      h = e;
      b[j] = b[h];
      o[j] = o[h];
      b[j + 1] = b[h + 1];
      o[j + 1] = o[h + 1];
      b[j + 2] = b[h + 2];
      o[j + 2] = o[h + 2];
    }
    j = k;
    k += 3;
    if (k == f) break a;
  } while (0);
  a = e;
}

Oj.X = 1;

function vj(c, f) {
  var d = a;
  a += 8;
  var e, g, i = d + 2;
  e = d + 4;
  var h = d + 6;
  C(e, f, c + 2);
  b[d] = b[e];
  o[d] = o[e];
  b[d + 1] = b[e + 1];
  o[d + 1] = o[e + 1];
  C(h, c, f + 2);
  b[i] = b[h];
  o[i] = o[h];
  b[i + 1] = b[h + 1];
  o[i + 1] = o[h + 1];
  e = o[d] > 0 ? 2 : 1;
  a : do if (e == 1) if (o[d + 1] > 0) e = 2; else {
    e = o[i] > 0 ? 5 : 4;
    do if (e == 4) if (o[i + 1] > 0) e = 5; else {
      g = 1;
      e = 7;
      break a;
    } while (0);
    g = 0;
    e = 7;
  } while (0);
  e == 2 && (g = 0);
  a = d;
  return g;
}

vj.X = 1;

function ij(c) {
  lj(c + 8);
  b[c + 12] = 0;
  b[c + 2] = 0;
  b[c + 1] = 0;
  b[c + 6] = 0;
  b[c + 7] = 0;
  b[c + 3] = 0;
  o[c] = 0;
}

function Mj(c, f, d) {
  var e = a;
  a += 6;
  var g, i, h, j, k, l, m, n = e + 3;
  g = (f - c) / 12 | 0;
  g = g == 0 ? 1 : g == 1 ? 1 : g == 2 ? 2 : g == 3 ? 5 : g == 4 ? 6 : g == 5 ? 7 : 8;
  if (g == 8) {
    k = c + 6;
    Lj(c, c + 3, k, d);
    l = 0;
    m = k + 3;
    a : for (;;) {
      if (m == f) {
        g = 17;
        break;
      }
      g = kb[b[d]](m, k) ? 11 : 16;
      if (g == 11) {
        h = m;
        b[n] = b[h];
        o[n] = o[h];
        b[n + 1] = b[h + 1];
        o[n + 1] = o[h + 1];
        b[n + 2] = b[h + 2];
        o[n + 2] = o[h + 2];
        h = k;
        for (k = m; ; ) {
          i = h;
          b[k] = b[i];
          o[k] = o[i];
          b[k + 1] = b[i + 1];
          o[k + 1] = o[i + 1];
          b[k + 2] = b[i + 2];
          o[k + 2] = o[i + 2];
          k = h;
          if (k == c) {
            g = 14;
            break;
          }
          i = b[d];
          var p = h - 3;
          h = p;
          if (!kb[i](n, p)) {
            g = 14;
            break;
          }
        }
        h = n;
        b[k] = b[h];
        o[k] = o[h];
        b[k + 1] = b[h + 1];
        o[k + 1] = o[h + 1];
        b[k + 2] = b[h + 2];
        o[k + 2] = o[h + 2];
        l = k = l + 1;
        if (k == 8) {
          g = 15;
          break a;
        }
      }
      k = m;
      m += 3;
    }
    g == 17 ? j = 1 : g == 15 && (j = m + 3 == f);
  } else g == 1 ? j = 1 : g == 2 ? (d = b[d], f = j = f - 3, g = kb[d](j, c) ? 3 : 4, g == 3 && (b[e] = b[c], o[e] = o[c], b[e + 1] = b[c + 1], o[e + 1] = o[c + 1], b[e + 2] = b[c + 2], o[e + 2] = o[c + 2], b[c] = b[f], o[c] = o[f], b[c + 1] = b[f + 1], o[c + 1] = o[f + 1], b[c + 2] = b[f + 2], o[c + 2] = o[f + 2], b[f] = b[e], o[f] = o[e], b[f + 1] = b[e + 1], o[f + 1] = o[e + 1], b[f + 2] = b[e + 2], o[f + 2] = o[e + 2]), j = 1) : g == 5 ? (Lj(c, c + 3, f - 3, d), j = 1) : g == 6 ? (Nj(c, c + 3, c + 6, f - 3, d), j = 1) : g == 7 && (Kj(c, c + 3, c + 6, c + 9, f - 3, d), j = 1);
  a = e;
  return j;
}

Mj.X = 1;

function Gj(c, f) {
  var d;
  if ((b[c + 257] == b[c + 258] ? 1 : 3) == 1) {
    d = b[c];
    b[c + 258] <<= 1;
    var e = ib(b[c + 258] << 2);
    b[c] = e;
    e = d;
    d += 1 * ((b[c + 257] << 2) / 4);
    for (var g = b[c]; e < d; e++, g++) b[g] = b[e], o[g] = o[e];
  }
  b[b[c] + b[c + 257]] = b[f];
  b[c + 257] += 1;
}

Gj.X = 1;

function jj(c, f, d, e) {
  var g;
  b[c + 12] = b[e + 1];
  o[c + 4] = o[e + 2];
  o[c + 5] = o[e + 3];
  b[c + 2] = d;
  b[c + 1] = 0;
  d = c + 8;
  g = e + 6;
  b[d] = b[g];
  o[d] = o[g];
  b[d + 1] = b[g + 1];
  o[d + 1] = o[g + 1];
  b[d + 2] = b[g + 2];
  o[d + 2] = o[g + 2];
  b[c + 11] = b[e + 5] & 1;
  d = b[e];
  d = kb[b[b[d] + 2]](d, f);
  b[c + 3] = d;
  d = b[c + 3];
  d = kb[b[b[d] + 3]](d);
  f = Jh(f, d * 28);
  b[c + 6] = f;
  g = 0;
  f = g < d ? 1 : 3;
  a : do if (f == 1) for (var i = c + 6, h = c + 6; ; ) if (b[b[i] + g * 7 + 4] = 0, b[b[h] + g * 7 + 6] = -1, g += 1, g >= d) break a; while (0);
  b[c + 7] = 0;
  o[c] = o[e + 4];
}

jj.X = 1;

function Pj(c, f) {
  var d;
  d = b[c + 7] == 0 ? 2 : 1;
  d == 1 && O(Qj, 72, Rj, Sj);
  d = b[c + 3];
  d = kb[b[b[d] + 3]](d);
  ii(f, b[c + 6], d * 28);
  b[c + 6] = 0;
  d = b[b[c + 3] + 1];
  d = d == 0 ? 3 : d == 1 ? 4 : d == 2 ? 5 : d == 3 ? 6 : 7;
  d == 7 ? O(Qj, 115, Rj, ne) : d == 3 ? (d = b[c + 3], kb[b[b[d]]](d), ii(f, d, 20)) : d == 4 ? (d = b[c + 3], kb[b[b[d]]](d), ii(f, d, 48)) : d == 5 ? (d = b[c + 3], kb[b[b[d]]](d), ii(f, d, 152)) : d == 6 && (d = b[c + 3], kb[b[b[d]]](d), ii(f, d, 40));
  b[c + 3] = 0;
}

Pj.X = 1;

function kj(c, f, d) {
  var e, g, i;
  e = b[c + 7] == 0 ? 2 : 1;
  e == 1 && O(Qj, 124, Tj, Sj);
  e = b[c + 3];
  e = kb[b[b[e] + 3]](e);
  b[c + 7] = e;
  g = 0;
  var h = c + 7;
  e = g < b[h] ? 3 : 5;
  a : do if (e == 3) for (var j = c + 6, k = c + 3; ; ) {
    i = b[j] + g * 7;
    var l = b[k];
    kb[b[b[l] + 6]](l, i, d, g);
    var l = f, m = ba, m = Ag(l, i, i);
    b[l + 7] += 1;
    Lc(l, m);
    b[i + 6] = m;
    b[i + 4] = c;
    b[i + 5] = g;
    g += 1;
    if (g >= b[h]) break a;
  } while (0);
}

kj.X = 1;

function dj(c, f, d, e) {
  var g = a;
  a += 10;
  var i, h, j, k = g + 4, l = g + 8;
  i = b[c + 7] == 0 ? 4 : 1;
  a : do if (i == 1) {
    h = 0;
    var m = c + 7;
    if (h < b[m]) for (var n = c + 6, p = c + 3, t = c + 3; ; ) {
      j = b[n] + h * 7;
      var q = b[p];
      kb[b[b[q] + 6]](q, g, d, b[j + 5]);
      q = b[t];
      kb[b[b[q] + 6]](q, k, e, b[j + 5]);
      Eg(j, g, k);
      C(l, e, d);
      var q = f, s = b[j + 6];
      (Kg(q, s, j, l) & 1 ? 1 : 2) == 1 && Lc(q, s);
      h += 1;
      if (h >= b[m]) break a;
    } else i = 4;
  } while (0);
  a = g;
}

dj.X = 1;

function Uj(c) {
  Ci(b[c], b[c + 5]);
  Ci(b[c], b[c + 6]);
  Ci(b[c], b[c + 4]);
  Ci(b[c], b[c + 3]);
  Ci(b[c], b[c + 2]);
}

function Vj(c, f, d, e, g, i) {
  b[c + 10] = f;
  b[c + 11] = d;
  b[c + 12] = e;
  b[c + 7] = 0;
  b[c + 9] = 0;
  b[c + 8] = 0;
  b[c] = g;
  b[c + 1] = i;
  f = Ii(b[c], f << 2);
  b[c + 2] = f;
  d = Ii(b[c], d << 2);
  b[c + 3] = d;
  e = Ii(b[c], e << 2);
  b[c + 4] = e;
  e = Ii(b[c], b[c + 10] * 12);
  b[c + 6] = e;
  e = Ii(b[c], b[c + 10] * 12);
  b[c + 5] = e;
}

Vj.X = 1;

function Wj(c) {
  var f = a;
  a += 4;
  var d = f + 2;
  ah(c + 5, o[c + 14]);
  var e = c + 3, g = c + 11;
  R(d, c + 5, c + 7);
  C(f, g, d);
  b[e] = b[f];
  o[e] = o[f];
  b[e + 1] = b[f + 1];
  o[e + 1] = o[f + 1];
  a = f;
}

function Xj(c, f, d, e, g) {
  var i = a;
  a += 54;
  var h, j, k, l, m = i + 2, n, p = i + 4, t, q = i + 6, s = i + 8, u = i + 10, x = i + 12, v = i + 14, y = i + 22, z = i + 33, B, E, D, H, I = i + 46, M, G = i + 48, S, P = i + 50, L, T, F, X = i + 52, Z, V, aa, ja, Y, W, $, fa, la, ga, ka, oa, ta;
  Li(i);
  j = o[d];
  k = 0;
  var Aa = c + 7;
  h = k < b[Aa] ? 1 : 5;
  a : do if (h == 1) for (var Ha = c + 2, Ba = m, Ra = p, nb = c + 5, Da = m, Ta = c + 5, La = c + 6, pa = p, ha = c + 6; ; ) {
    l = b[b[Ha] + k];
    var ya = l + 11;
    b[Ba] = b[ya];
    o[Ba] = o[ya];
    b[Ba + 1] = b[ya + 1];
    o[Ba + 1] = o[ya + 1];
    n = o[l + 14];
    var xa = l + 16;
    b[Ra] = b[xa];
    o[Ra] = o[xa];
    b[Ra + 1] = b[xa + 1];
    o[Ra + 1] = o[xa + 1];
    t = o[l + 18];
    var ua = l + 9, Ia = l + 11;
    b[ua] = b[Ia];
    o[ua] = o[Ia];
    b[ua + 1] = b[Ia + 1];
    o[ua + 1] = o[Ia + 1];
    o[l + 13] = o[l + 14];
    h = b[l] == 2 ? 3 : 4;
    if (h == 3) {
      var ma = j;
      K(u, o[l + 35], e);
      K(x, o[l + 30], l + 19);
      N(s, u, x);
      K(q, ma, s);
      Lb(p, q);
      t += j * o[l + 32] * o[l + 21];
      Th(p, Yj(1 - j * o[l + 33], 0, 1));
      t *= Yj(1 - j * o[l + 34], 0, 1);
    }
    var Ja = b[nb] + k * 3;
    b[Ja] = b[Da];
    o[Ja] = o[Da];
    b[Ja + 1] = b[Da + 1];
    o[Ja + 1] = o[Da + 1];
    o[b[Ta] + k * 3 + 2] = n;
    var Ea = b[La] + k * 3;
    b[Ea] = b[pa];
    o[Ea] = o[pa];
    b[Ea + 1] = b[pa + 1];
    o[Ea + 1] = o[pa + 1];
    o[b[ha] + k * 3 + 2] = t;
    k += 1;
    if (k >= b[Aa]) {
      h = 5;
      break a;
    }
  } while (0);
  Li(i);
  for (var wa = d, Ma = d + 6, Ca = v; wa < Ma; wa++, Ca++) b[Ca] = b[wa], o[Ca] = o[wa];
  b[v + 6] = b[c + 5];
  b[v + 7] = b[c + 6];
  wa = d;
  Ma = d + 6;
  for (Ca = y; wa < Ma; wa++, Ca++) b[Ca] = b[wa], o[Ca] = o[wa];
  b[y + 6] = b[c + 3];
  b[y + 7] = b[c + 9];
  b[y + 8] = b[c + 5];
  b[y + 9] = b[c + 6];
  b[y + 10] = b[c];
  Zj(z, y);
  $j(z);
  h = b[d + 5] & 1 ? 7 : 16;
  h == 7 && ak(z);
  B = 0;
  for (var Eb = c + 8, Ub = c + 4; ; ) {
    if (B >= b[Eb]) {
      h = 20;
      break;
    }
    var Na = b[b[Ub] + B];
    kb[b[b[Na] + 7]](Na, v);
    B += 1;
  }
  var cc = Ni(i);
  o[f + 3] = cc;
  Li(i);
  E = 0;
  for (var Mb = c + 8, Ua = c + 4; ; ) {
    if (E >= b[d + 3]) {
      h = 30;
      break;
    }
    for (D = 0; ; ) {
      if (D >= b[Mb]) {
        h = 28;
        break;
      }
      var dc = b[b[Ua] + D];
      kb[b[b[dc] + 8]](dc, v);
      D += 1;
    }
    bk(z);
    E += 1;
  }
  ck(z);
  var ub = Ni(i);
  o[f + 4] = ub;
  H = 0;
  var Va = c + 7;
  h = H < b[Va] ? 33 : 39;
  a : do if (h == 33) for (var Nb = c + 5, Fb = I, yb = c + 5, zb = c + 6, bb = G, Vb = c + 6, Wb = c + 5, cb = I, vb = c + 5, db = c + 6, Ga = G, Xb = c + 6; ; ) {
    var eb = b[Nb] + H * 3;
    b[Fb] = b[eb];
    o[Fb] = o[eb];
    b[Fb + 1] = b[eb + 1];
    o[Fb + 1] = o[eb + 1];
    M = o[b[yb] + H * 3 + 2];
    var Ab = b[zb] + H * 3;
    b[bb] = b[Ab];
    o[bb] = o[Ab];
    b[bb + 1] = b[Ab + 1];
    o[bb + 1] = o[Ab + 1];
    S = o[b[Vb] + H * 3 + 2];
    K(P, j, G);
    h = J(P, P) > 4 ? 35 : 36;
    h == 35 && (L = 2 / Wc(P), Th(G, L));
    T = j * S;
    h = T * T > 2.4674012660980225 ? 37 : 38;
    h == 37 && (F = 1.5707963705062866 / ie(T), S *= F);
    K(X, j, G);
    Lb(I, X);
    M += j * S;
    var fb = b[Wb] + H * 3;
    b[fb] = b[cb];
    o[fb] = o[cb];
    b[fb + 1] = b[cb + 1];
    o[fb + 1] = o[cb + 1];
    o[b[vb] + H * 3 + 2] = M;
    var Bb = b[db] + H * 3;
    b[Bb] = b[Ga];
    o[Bb] = o[Ga];
    b[Bb + 1] = b[Ga + 1];
    o[Bb + 1] = o[Ga + 1];
    o[b[Xb] + H * 3 + 2] = S;
    H += 1;
    if (H >= b[Va]) {
      h = 39;
      break a;
    }
  } while (0);
  Li(i);
  V = Z = 0;
  var ec = c + 8, fc = c + 4;
  a : for (;;) {
    if (V >= b[d + 4]) {
      h = 53;
      break;
    }
    aa = dk(z);
    ja = 1;
    for (Y = 0; ; ) {
      if (Y >= b[ec]) {
        h = 49;
        break;
      }
      var ob = b[b[fc] + Y];
      W = kb[b[b[ob] + 9]](ob, v);
      if (ja & 1) h = 47; else {
        var Ob = 0;
        h = 48;
      }
      h == 47 && (Ob = W & 1);
      ja = Ob;
      Y += 1;
    }
    h = aa & 1 ? 50 : 52;
    if (h == 50 && ja & 1) {
      h = 51;
      break a;
    }
    V += 1;
  }
  h == 51 && (Z = 1);
  $ = 0;
  var Pb = c + 7;
  h = $ < b[Pb] ? 54 : 56;
  a : do if (h == 54) for (var pb = c + 2, Yb = c + 5, Cb = c + 5, gc = c + 6, qb = c + 6; ; ) {
    fa = b[b[pb] + $];
    var Gb = fa + 11, rb = b[Yb] + $ * 3;
    b[Gb] = b[rb];
    o[Gb] = o[rb];
    b[Gb + 1] = b[rb + 1];
    o[Gb + 1] = o[rb + 1];
    o[fa + 14] = o[b[Cb] + $ * 3 + 2];
    var gb = fa + 16, Zb = b[gc] + $ * 3;
    b[gb] = b[Zb];
    o[gb] = o[Zb];
    b[gb + 1] = b[Zb + 1];
    o[gb + 1] = o[Zb + 1];
    o[fa + 18] = o[b[qb] + $ * 3 + 2];
    Wj(fa);
    $ += 1;
    if ($ >= b[Pb]) {
      h = 56;
      break a;
    }
  } while (0);
  var hc = Ni(i);
  o[f + 5] = hc;
  ek(c, b[z + 10]);
  h = g & 1 ? 59 : 74;
  a : do if (h == 59) {
    la = 3.4028234663852886e+38;
    ga = 0;
    var Qb = c + 7;
    h = ga < b[Qb] ? 60 : 68;
    b : do if (h == 60) for (var yc = c + 2; ; ) {
      ka = b[b[yc] + ga];
      h = b[ka] == 0 ? 67 : 62;
      c : do if (h == 62) {
        h = (b[ka + 1] & 4) == 0 ? 65 : 63;
        do if (h == 63) if (o[ka + 18] * o[ka + 18] > .001218469929881394) h = 65; else if (J(ka + 16, ka + 16) > 9999999747378752e-20) h = 65; else {
          o[ka + 36] += j;
          la = la < o[ka + 36] ? la : o[ka + 36];
          h = 67;
          break c;
        } while (0);
        la = o[ka + 36] = 0;
      } while (0);
      ga += 1;
      if (ga >= b[Qb]) {
        h = 68;
        break b;
      }
    } while (0);
    if (la >= .5) if (Z & 1) {
      oa = 0;
      for (var ic = c + 7, hb = c + 2; ; ) {
        if (oa >= b[ic]) {
          h = 74;
          break a;
        }
        ta = b[b[hb] + oa];
        oc(ta, 0);
        oa += 1;
      }
    } else h = 74; else h = 74;
  } while (0);
  fk(z);
  a = i;
}

Xj.X = 1;

function Yj(c, f, d) {
  return f > (c < d ? c : d) ? f : c < d ? c : d;
}

function ek(c, f) {
  var d = a;
  a += 5;
  var e, g, i, h, j;
  e = b[c + 1] == 0 ? 6 : 1;
  a : do if (e == 1) {
    g = 0;
    var k = c + 9;
    if (g < b[k]) for (var l = c + 3, m = d + 4, n = c + 1, p = d, t = d + 2; ; ) {
      i = b[b[l] + g];
      h = f + g * 38;
      b[m] = b[h + 36];
      j = 0;
      e = j < b[h + 36] ? 4 : 5;
      b : do if (e == 4) for (;;) if (o[p + j] = o[h + j * 9 + 4], o[t + j] = o[h + j * 9 + 5], j += 1, j >= b[h + 36]) {
        e = 5;
        break b;
      } while (0);
      h = b[n];
      kb[b[b[h] + 5]](h, i, d);
      g += 1;
      if (g >= b[k]) break a;
    } else e = 6;
  } while (0);
  a = d;
}

ek.X = 1;

function nc(c, f) {
  bi(c);
  wi(c + 17);
  mj(c + 102518);
  b[c + 102545] = 0;
  b[c + 102546] = 0;
  b[c + 102538] = 0;
  b[c + 102539] = 0;
  b[c + 102540] = 0;
  b[c + 102541] = 0;
  b[c + 102548] = 1;
  b[c + 102549] = 1;
  b[c + 102550] = 0;
  b[c + 102551] = 1;
  b[c + 102544] = 1;
  var d = c + 102542;
  b[d] = b[f];
  o[d] = o[f];
  b[d + 1] = b[f + 1];
  o[d + 1] = o[f + 1];
  b[c + 102517] = 4;
  o[c + 102547] = 0;
  b[c + 102537] = c;
  for (var d = c + 102552, e = 0; e < 8; e++) b[d + e] = 0, o[d + e] = 0;
}

nc.X = 1;

function Ic(c) {
  var f, d, e;
  f = b[c + 102538];
  for (d = b[c + 102538]; ; ) {
    if (d == 0) break;
    d = b[f + 24];
    e = b[f + 25];
    for (f = b[f + 25]; ; ) {
      if (f == 0) break;
      f = b[e + 1];
      b[e + 7] = 0;
      Pj(e, c);
      e = f;
    }
    f = d;
  }
  xi(c + 17);
}

Ic.X = 1;

function gk(c, f, d, e) {
  var g = a;
  a += 32;
  var i, h, j, k = g + 11, l = g + 24, m, n = g + 26, p, t = g + 28, q, s = g + 30;
  i = d < b[c + 7] ? 2 : 1;
  i == 1 && O(hk, 386, ik, pk);
  i = e < b[c + 7] ? 4 : 3;
  i == 3 && O(hk, 387, ik, qk);
  h = 0;
  var u = c + 7;
  i = h < b[u] ? 5 : 7;
  a : do if (i == 5) for (var x = c + 2, v = c + 5, y = c + 5, z = c + 6, B = c + 6; ; ) {
    j = b[b[x] + h];
    var E = b[v] + h * 3, D = j + 11;
    b[E] = b[D];
    o[E] = o[D];
    b[E + 1] = b[D + 1];
    o[E + 1] = o[D + 1];
    o[b[y] + h * 3 + 2] = o[j + 14];
    E = b[z] + h * 3;
    D = j + 16;
    b[E] = b[D];
    o[E] = o[D];
    b[E + 1] = b[D + 1];
    o[E + 1] = o[D + 1];
    o[b[B] + h * 3 + 2] = o[j + 18];
    h += 1;
    if (h >= b[u]) break a;
  } while (0);
  b[g + 6] = b[c + 3];
  b[g + 7] = b[c + 9];
  b[g + 10] = b[c];
  i = f;
  h = f + 6;
  for (j = g; i < h; i++, j++) b[j] = b[i], o[j] = o[i];
  b[g + 8] = b[c + 5];
  b[g + 9] = b[c + 6];
  Zj(k, g);
  for (i = 0; ; ) {
    if (i >= b[f + 4]) break;
    h = Ak(k, d, e);
    if (h & 1) break;
    i += 1;
  }
  i = b[b[c + 2] + d] + 9;
  h = b[c + 5] + d * 3;
  b[i] = b[h];
  o[i] = o[h];
  b[i + 1] = b[h + 1];
  o[i + 1] = o[h + 1];
  o[b[b[c + 2] + d] + 13] = o[b[c + 5] + d * 3 + 2];
  i = b[b[c + 2] + e] + 9;
  d = b[c + 5] + e * 3;
  b[i] = b[d];
  o[i] = o[d];
  b[i + 1] = b[d + 1];
  o[i + 1] = o[d + 1];
  o[b[b[c + 2] + e] + 13] = o[b[c + 5] + e * 3 + 2];
  $j(k);
  for (i = 0; ; ) {
    if (i >= b[f + 3]) break;
    bk(k);
    i += 1;
  }
  f = o[f];
  e = 0;
  d = c + 7;
  i = e < b[d] ? 22 : 28;
  a : do if (i == 22) {
    h = c + 5;
    j = l;
    for (var u = c + 5, x = c + 6, v = n, y = c + 6, z = c + 5, B = l, E = c + 5, D = c + 6, H = n, I = c + 6, M = c + 2, G = l, S = n; ; ) {
      i = b[h] + e * 3;
      b[j] = b[i];
      o[j] = o[i];
      b[j + 1] = b[i + 1];
      o[j + 1] = o[i + 1];
      m = o[b[u] + e * 3 + 2];
      i = b[x] + e * 3;
      b[v] = b[i];
      o[v] = o[i];
      b[v + 1] = b[i + 1];
      o[v + 1] = o[i + 1];
      p = o[b[y] + e * 3 + 2];
      K(t, f, n);
      i = J(t, t) > 4 ? 24 : 25;
      i == 24 && (i = 2 / Wc(t), Th(n, i));
      q = f * p;
      i = q * q > 2.4674012660980225 ? 26 : 27;
      i == 26 && (q = 1.5707963705062866 / ie(q), p *= q);
      K(s, f, n);
      Lb(l, s);
      m += f * p;
      q = b[z] + e * 3;
      b[q] = b[B];
      o[q] = o[B];
      b[q + 1] = b[B + 1];
      o[q + 1] = o[B + 1];
      o[b[E] + e * 3 + 2] = m;
      q = b[D] + e * 3;
      b[q] = b[H];
      o[q] = o[H];
      b[q + 1] = b[H + 1];
      o[q + 1] = o[H + 1];
      o[b[I] + e * 3 + 2] = p;
      q = b[b[M] + e];
      var P = q + 11;
      b[P] = b[G];
      o[P] = o[G];
      b[P + 1] = b[G + 1];
      o[P + 1] = o[G + 1];
      o[q + 14] = m;
      m = q + 16;
      b[m] = b[S];
      o[m] = o[S];
      b[m + 1] = b[S + 1];
      o[m + 1] = o[S + 1];
      o[q + 18] = p;
      Wj(q);
      e += 1;
      if (e >= b[d]) break a;
    }
  } while (0);
  ek(c, b[k + 10]);
  fk(k);
  a = g;
}

gk.X = 1;

function pc(c, f) {
  var d, e, g;
  d = Gi(c) == 0 ? 2 : 1;
  d == 1 && O(Bk, 109, Ck, Dk);
  d = Gi(c) ? 3 : 4;
  d == 3 ? e = 0 : d == 4 && (e = Jh(c, 152), e == 0 ? (g = 0, d = 6) : d = 5, d == 5 && (Oi(e, f, c), g = e), b[g + 23] = 0, b[g + 24] = b[c + 102538], d = b[c + 102538] != 0 ? 7 : 8, d == 7 && (b[b[c + 102538] + 23] = g), b[c + 102538] = g, b[c + 102540] += 1, e = g);
  return e;
}

pc.X = 1;

function Ek(c) {
  b[c + 7] = 0;
  b[c + 9] = 0;
  b[c + 8] = 0;
}

function Fk(c, f) {
  (b[c + 7] < b[c + 10] ? 2 : 1) == 1 && O(Gk, 54, Hk, Ik);
  b[f + 2] = b[c + 7];
  b[b[c + 2] + b[c + 7]] = f;
  b[c + 7] += 1;
}

function Jk(c, f) {
  (b[c + 9] < b[c + 11] ? 2 : 1) == 1 && O(Gk, 62, Kk, Lk);
  var d = b[c + 9];
  b[c + 9] = d + 1;
  b[b[c + 3] + d] = f;
}

function Mk(c, f) {
  var d = a;
  a += 23;
  var e, g, i, h, j, k, l, m, n, p = d + 13, t = d + 21;
  o[c + 102555] = 0;
  o[c + 102556] = 0;
  o[c + 102557] = 0;
  Vj(d, b[c + 102540], b[c + 102534], b[c + 102541], c + 17, b[c + 102536]);
  g = b[c + 102538];
  e = b[c + 102538] != 0 ? 1 : 2;
  a : do if (e == 1) for (;;) if (b[g + 1] &= 65534, g = i = b[g + 24], i == 0) break a; while (0);
  g = b[c + 102533];
  e = b[c + 102533] != 0 ? 3 : 4;
  a : do if (e == 3) for (;;) if (b[g + 1] &= -2, g = i = b[g + 3], i == 0) break a; while (0);
  g = b[c + 102539];
  e = b[c + 102539] != 0 ? 5 : 6;
  a : do if (e == 5) for (;;) if (b[g + 15] = 0, g = i = b[g + 3], i == 0) break a; while (0);
  g = b[c + 102540];
  i = Ii(c + 17, g << 2);
  h = b[c + 102538];
  var q = c + 102542, s = c + 102544, u = p + 3, x = c + 102555, v = p + 4, y = c + 102556, z = p + 5, B = c + 102557, E = d + 7, D = d + 2;
  for (e = b[c + 102538]; ; ) {
    if (e == 0) break;
    e = (b[h + 1] & 1) != 0 ? 65 : 18;
    a : do if (e == 18) if (qj(h) == 0) e = 65; else if ((b[h + 1] & 32) == 32 == 0) e = 65; else if (b[h] == 0) e = 65; else {
      Ek(d);
      k = j = 0;
      j = k + 1;
      b[i + k] = h;
      b[h + 1] = (b[h + 1] | 1) & 65535;
      b : for (;;) {
        if (j <= 0) {
          e = 58;
          break;
        }
        j = e = j - 1;
        k = b[i + e];
        e = (b[k + 1] & 32) == 32 == 1 ? 29 : 28;
        e == 28 && O(Bk, 445, Nk, Ok);
        Fk(d, k);
        oc(k, 1);
        if (b[k] == 0) e = 25; else {
          l = b[k + 28];
          for (m = b[k + 28]; ; ) {
            if (m == 0) {
              e = 47;
              break;
            }
            m = b[l + 1];
            e = (b[m + 1] & 1) != 0 ? 46 : 36;
            e == 36 && ((b[m + 1] & 4) == 4 == 0 ? e = 46 : (b[m + 1] & 2) == 2 == 0 ? e = 46 : (e = b[b[m + 12] + 11] & 1, n = b[b[m + 13] + 11] & 1, e & 1 ? e = 46 : n & 1 ? e = 46 : (Jk(d, m), b[m + 1] |= 1, m = b[l], (b[m + 1] & 1) != 0 ? e = 46 : (e = j < g ? 45 : 44, e == 44 && O(Bk, 495, Nk, Pk), n = j, j = n + 1, b[i + n] = m, b[m + 1] = (b[m + 1] | 1) & 65535))));
            l = m = b[l + 3];
          }
          l = b[k + 27];
          for (k = b[k + 27]; ; ) {
            if (k == 0) {
              e = 25;
              continue b;
            }
            e = (b[b[l + 1] + 15] & 1) == 1 ? 57 : 50;
            e == 50 && (k = b[l], (b[k + 1] & 32) == 32 == 0 ? e = 57 : (e = d, m = b[l + 1], (b[e + 8] < b[e + 12] ? 2 : 1) == 1 && O(Gk, 68, Qk, Rk), n = b[e + 8], b[e + 8] = n + 1, b[b[e + 4] + n] = m, b[b[l + 1] + 15] = 1, (b[k + 1] & 1) != 0 ? e = 57 : (e = j < g ? 56 : 55, e == 55 && O(Bk, 524, Nk, Pk), m = j, j = m + 1, b[i + m] = k, b[k + 1] = (b[k + 1] | 1) & 65535)));
            l = k = b[l + 3];
          }
        }
      }
      Xj(d, p, f, q, b[s] & 1);
      o[x] += o[u];
      o[y] += o[v];
      o[B] += o[z];
      for (j = 0; ; ) {
        if (j >= b[E]) break a;
        k = b[b[D] + j];
        e = b[k] == 0 ? 63 : 64;
        e == 63 && (b[k + 1] &= 65534);
        j += 1;
      }
    } while (0);
    h = e = b[h + 24];
  }
  Ci(c + 17, i);
  Li(t);
  p = b[c + 102538];
  for (g = b[c + 102538]; ; ) {
    if (g == 0) break;
    e = (b[p + 1] & 1) == 0 ? 74 : 71;
    e == 71 && (b[p] == 0 || cj(p));
    p = g = b[p + 24];
  }
  p = c + 102518;
  xj(p, p);
  t = Ni(t);
  o[c + 102558] = t;
  Uj(d);
  a = d;
}

Mk.X = 1;

function Sk(c, f) {
  var d = a;
  a += 83;
  var e, g, i, h, j, k, l, m, n, p, t, q, s, u, x = d + 13, v = d + 46, y = d + 48, z = d + 57, B = d + 66, E = d + 68, D = d + 77;
  Vj(d, 64, 32, 0, c + 17, b[c + 102536]);
  e = b[c + 102551] & 1 ? 2 : 1;
  a : do if (e == 2) {
    g = b[c + 102538];
    e = b[c + 102538] != 0 ? 3 : 4;
    b : do if (e == 3) for (;;) {
      b[g + 1] &= 65534;
      o[g + 15] = 0;
      var H = b[g + 24];
      g = H;
      if (H == 0) {
        e = 4;
        break b;
      }
    } while (0);
    g = b[c + 102533];
    if (b[c + 102533] == 0) e = 1; else for (;;) if (b[g + 1] &= -34, b[g + 32] = 0, o[g + 33] = 1, g = H = b[g + 3], H == 0) {
      e = 1;
      break a;
    }
  } while (0);
  g = c + 102533;
  var H = x + 7, I = x + 14, M = x + 23, G = x + 32, S = v + 1, P = c + 102536, L = B + 1, T = d + 7, F = d + 10, X = d + 9, Z = d + 11, V = c + 102536, aa = D + 1, ja = D + 2, Y = D + 4, W = D + 3, $ = D + 5, fa = d + 7, la = d + 2, ga = c + 102518, ka = c + 102550;
  a : for (;;) {
    i = 0;
    h = 1;
    j = b[g];
    for (e = b[g]; ; ) {
      if (e == 0) break;
      e = (b[j + 1] & 4) == 4 == 0 ? 57 : 14;
      b : do if (e == 14) if (b[j + 32] > 8) e = 57; else {
        k = 1;
        e = (b[j + 1] & 32) != 0 ? 16 : 17;
        if (e == 16) k = o[j + 33]; else if (e == 17) {
          l = b[j + 12];
          m = b[j + 13];
          if (b[l + 11] & 1) break b;
          if (b[m + 11] & 1) break b;
          n = pj(l);
          p = pj(m);
          t = b[n];
          q = b[p];
          e = t == 2 ? 26 : 24;
          e == 24 && (q == 2 || O(Bk, 641, Tk, Uk));
          if (qj(n)) e = 28; else {
            var oa = 0;
            e = 29;
          }
          e == 28 && (oa = t != 0);
          s = oa;
          if (qj(p)) e = 31; else {
            var ta = 0;
            e = 32;
          }
          e == 31 && (ta = q != 0);
          u = ta;
          e = (s & 1) == 0 ? 33 : 34;
          if (e == 33 && (u & 1) == 0) break b;
          if ((b[n + 1] & 8) == 8) {
            var Aa = 1;
            e = 36;
          } else e = 35;
          e == 35 && (Aa = t != 2);
          t = Aa;
          if ((b[p + 1] & 8) == 8) {
            var Ha = 1;
            e = 38;
          } else e = 37;
          e == 37 && (Ha = q != 2);
          q = Ha;
          e = (t & 1) == 0 ? 39 : 40;
          if (e == 39 && (q & 1) == 0) break b;
          q = o[n + 15];
          t = o[p + 15];
          e = o[n + 15] < o[p + 15] ? 41 : 42;
          e == 41 ? (q = t, Vk(n + 7, q)) : e == 42 && t < o[n + 15] && (q = o[n + 15], Vk(p + 7, q));
          e = q < 1 ? 46 : 45;
          e == 45 && O(Bk, 676, Tk, Wk);
          e = b[j + 14];
          t = b[j + 15];
          s = x;
          je(s);
          je(s + 7);
          ke(x, Xk(l), e);
          ke(H, Xk(m), t);
          l = e = n + 7;
          m = e + 9;
          for (s = I; l < m; l++, s++) b[s] = b[l], o[s] = o[l];
          l = e = p + 7;
          m = e + 9;
          for (s = M; l < m; l++, s++) b[s] = b[l], o[s] = o[l];
          o[G] = 1;
          bh(v, x);
          l = o[S];
          e = b[v] == 3 ? 52 : 53;
          e == 52 ? k = q + (1 - q) * l < 1 ? q + (1 - q) * l : 1 : e == 53 && (k = 1);
          o[j + 33] = k;
          b[j + 1] |= 32;
        }
        k < h ? (i = j, h = k) : e = 57;
      } while (0);
      j = e = b[j + 3];
    }
    if (i == 0) {
      e = 60;
      break;
    }
    if (.9999988079071045 < h) {
      e = 60;
      break;
    }
    j = b[i + 12];
    e = b[i + 13];
    j = pj(j);
    k = pj(e);
    l = e = j + 7;
    m = e + 9;
    for (s = y; l < m; l++, s++) b[s] = b[l], o[s] = o[l];
    l = e = k + 7;
    m = e + 9;
    for (s = z; l < m; l++, s++) b[s] = b[l], o[s] = o[l];
    Yk(j, h);
    Yk(k, h);
    wj(i, b[P]);
    b[i + 1] &= -33;
    b[i + 32] += 1;
    e = (b[i + 1] & 4) == 4 == 0 ? 71 : 69;
    do if (e == 69) if ((b[i + 1] & 2) == 2 == 0) e = 71; else {
      oc(j, 1);
      oc(k, 1);
      Ek(d);
      Fk(d, j);
      Fk(d, k);
      Jk(d, i);
      b[j + 1] = (b[j + 1] | 1) & 65535;
      b[k + 1] = (b[k + 1] | 1) & 65535;
      b[i + 1] |= 1;
      b[B] = j;
      b[L] = k;
      for (e = i = 0; ; ) {
        if (e >= 2) break;
        p = b[B + i];
        e = b[p] == 2 ? 81 : 105;
        b : do if (e == 81) {
          n = b[p + 28];
          for (l = b[p + 28]; ; ) {
            if (l == 0) break b;
            if (b[T] == b[F]) break b;
            if (b[X] == b[Z]) break b;
            q = b[n + 1];
            e = (b[q + 1] & 1) != 0 ? 104 : 86;
            c : do if (e == 86) {
              t = b[n];
              e = b[t] == 2 ? 87 : 89;
              do if (e == 87) if ((b[p + 1] & 8) == 8 != 0) e = 89; else if ((b[t + 1] & 8) == 8 == 0) {
                e = 104;
                break c;
              } while (0);
              e = b[b[q + 12] + 11] & 1;
              l = b[b[q + 13] + 11] & 1;
              if (e & 1) e = 104; else if (l & 1) e = 104; else {
                l = e = t + 7;
                m = e + 9;
                for (s = E; l < m; l++, s++) b[s] = b[l], o[s] = o[l];
                e = (b[t + 1] & 1) == 0 ? 92 : 93;
                e == 92 && Yk(t, h);
                wj(q, b[V]);
                e = (b[q + 1] & 4) == 4 == 0 ? 95 : 96;
                if (e == 95) {
                  s = t + 7;
                  l = E;
                  for (m = E + 9; l < m; l++, s++) b[s] = b[l], o[s] = o[l];
                  Wj(t);
                } else if (e == 96) if (e = (b[q + 1] & 2) == 2 == 0 ? 98 : 99, e == 98) {
                  s = t + 7;
                  l = E;
                  for (m = E + 9; l < m; l++, s++) b[s] = b[l], o[s] = o[l];
                  Wj(t);
                } else if (e == 99) {
                  b[q + 1] |= 1;
                  Jk(d, q);
                  if ((b[t + 1] & 1) != 0) {
                    e = 104;
                    break c;
                  }
                  b[t + 1] = (b[t + 1] | 1) & 65535;
                  e = b[t] != 0 ? 102 : 103;
                  e == 102 && oc(t, 1);
                  Fk(d, t);
                }
              }
            } while (0);
            n = l = b[n + 3];
          }
        } while (0);
        i = e = i + 1;
      }
      o[D] = (1 - h) * o[f];
      o[aa] = 1 / o[D];
      o[ja] = 1;
      b[Y] = 20;
      b[W] = b[f + 3];
      b[$] = 0;
      gk(d, D, b[j + 2], b[k + 2]);
      for (h = 0; ; ) {
        if (h >= b[fa]) break;
        i = b[b[la] + h];
        b[i + 1] &= 65534;
        e = b[i] != 2 ? 113 : 110;
        b : do if (e == 110) if (cj(i), j = b[i + 28], b[i + 28] == 0) e = 113; else for (;;) if (b[b[j + 1] + 1] &= -34, j = k = b[j + 3], k == 0) break b; while (0);
        h += 1;
      }
      xj(ga, ga);
      if (b[ka] & 1) {
        e = 116;
        break a;
      } else {
        e = 6;
        continue a;
      }
    } while (0);
    h = i;
    i = ba;
    l = b[h + 1];
    i = 2;
    i == 1 ? b[h + 1] = l | 4 : i == 2 && (b[h + 1] = l & -5);
    h = j + 7;
    l = y;
    m = y + 9;
    for (s = h; l < m; l++, s++) b[s] = b[l], o[s] = o[l];
    h = k + 7;
    l = z;
    m = z + 9;
    for (s = h; l < m; l++, s++) b[s] = b[l], o[s] = o[l];
    Wj(j);
    Wj(k);
  }
  e == 60 ? b[c + 102551] = 1 : e == 116 && (b[c + 102551] = 0);
  Uj(d);
  a = d;
}

Sk.X = 1;

function Vk(c, f) {
  var d = a;
  a += 6;
  var e, g = d + 2, i = d + 4;
  (o[c + 8] < 1 ? 2 : 1) == 1 && O(Zk, 715, $k, Wk);
  e = (f - o[c + 8]) / (1 - o[c + 8]);
  var h = c + 2;
  K(g, 1 - e, c + 2);
  K(i, e, c + 4);
  N(d, g, i);
  b[h] = b[d];
  o[h] = o[d];
  b[h + 1] = b[d + 1];
  o[h + 1] = o[d + 1];
  o[c + 6] = (1 - e) * o[c + 6] + e * o[c + 7];
  o[c + 8] = f;
  a = d;
}

Vk.X = 1;

function Xk(c) {
  return b[c + 3];
}

function Yk(c, f) {
  var d = a;
  a += 4;
  var e = d + 2;
  Vk(c + 7, f);
  var g = c + 11, i = c + 9;
  b[g] = b[i];
  o[g] = o[i];
  b[g + 1] = b[i + 1];
  o[g + 1] = o[i + 1];
  o[c + 14] = o[c + 13];
  ah(c + 5, o[c + 14]);
  g = c + 3;
  i = c + 11;
  R(e, c + 5, c + 7);
  C(d, i, e);
  b[g] = b[d];
  o[g] = o[d];
  b[g + 1] = b[d + 1];
  o[g + 1] = o[d + 1];
  a = d;
}

function tc(c, f, d, e) {
  var g = a;
  a += 14;
  var i, h = g + 2, j = g + 8, k = g + 10, l = g + 12;
  Li(g);
  i = (b[c + 102517] & 1) != 0 ? 1 : 2;
  i == 1 && (i = c + 102518, xj(i, i), b[c + 102517] &= -2);
  b[c + 102517] |= 2;
  o[h] = f;
  b[h + 3] = d;
  b[h + 4] = e;
  i = f > 0 ? 3 : 4;
  i == 3 ? o[h + 1] = 1 / f : i == 4 && (o[h + 1] = 0);
  o[h + 2] = o[c + 102547] * f;
  b[h + 5] = b[c + 102548] & 1;
  Li(j);
  tj(c + 102518);
  f = Ni(j);
  o[c + 102553] = f;
  i = b[c + 102551] & 1 ? 6 : 8;
  i == 6 && o[h] > 0 && (Li(k), Mk(c, h), k = Ni(k), o[c + 102554] = k);
  i = b[c + 102549] & 1 ? 9 : 11;
  i == 9 && o[h] > 0 && (Li(l), Sk(c, h), l = Ni(l), o[c + 102559] = l);
  i = o[h] > 0 ? 12 : 13;
  i == 12 && (o[c + 102547] = o[h + 1]);
  i = (b[c + 102517] & 4) != 0 ? 14 : 15;
  if (i == 14) {
    l = b[c + 102538];
    h = b[c + 102538] != 0 ? 1 : 2;
    a : do if (h == 1) for (;;) if (ac(l + 19), o[l + 21] = 0, l = k = b[l + 24], k == 0) break a; while (0);
  }
  b[c + 102517] &= -3;
  h = Ni(g);
  o[c + 102552] = h;
  a = g;
}

tc.X = 1;

function al(c) {
  return b[b[c + 3] + 1];
}

function bl(c, f, d) {
  var e, c = f + 8, f = d + 8, d = b[c + 2] == b[f + 2] ? 1 : 3;
  d == 1 && (b[c + 2] == 0 ? d = 3 : (e = b[c + 2] > 0, d = 6));
  if (d == 3) {
    if ((b[f] & b[c + 1]) != 0) d = 4; else var g = 0, d = 5;
    d == 4 && (g = (b[f + 1] & b[c]) != 0);
    e = g & 1;
  }
  return e;
}

bl.X = 1;

function cl(c, f, d, e, g) {
  dl(c, f, d, e, g);
  b[c] = el + 2;
  f = al(b[c + 12]) == 3 ? 2 : 1;
  f == 1 && O(fl, 43, gl, hl);
  f = al(b[c + 13]) == 0 ? 4 : 3;
  f == 3 && O(fl, 44, gl, il);
}

cl.X = 1;

function jl(c, f, d, e) {
  var g = a;
  a += 13;
  var i;
  i = Xk(b[c + 12]);
  bc(g);
  uh(i, g, b[c + 14]);
  Yc(f, g, d, Xk(b[c + 13]), e);
  a = g;
}

jl.X = 1;

function kl(c, f, d, e, g) {
  dl(c, f, d, e, g);
  b[c] = ll + 2;
  f = al(b[c + 12]) == 3 ? 2 : 1;
  f == 1 && O(ml, 43, nl, hl);
  f = al(b[c + 13]) == 2 ? 4 : 3;
  f == 3 && O(ml, 44, nl, ol);
}

kl.X = 1;

function pl(c, f, d, e) {
  var g = a;
  a += 13;
  var i;
  i = Xk(b[c + 12]);
  bc(g);
  uh(i, g, b[c + 14]);
  c = Xk(b[c + 13]);
  i = a;
  a += 63;
  Ld(i, f, g, d, c, e);
  a = i;
  a = g;
}

pl.X = 1;

function ql(c, f, d) {
  dl(c, f, 0, d, 0);
  b[c] = rl + 2;
  f = al(b[c + 12]) == 0 ? 2 : 1;
  f == 1 && O(sl, 44, tl, ul);
  f = al(b[c + 13]) == 0 ? 4 : 3;
  f == 3 && O(sl, 45, tl, il);
}

function vl(c, f, d, e) {
  (0 <= d & d < 4 ? 2 : 1) == 1 && O(wl, 54, xl, yl);
  (0 <= e & e < 4 ? 4 : 3) == 3 && O(wl, 55, xl, zl);
  b[Al + d * 12 + e * 3] = c;
  b[Al + d * 12 + e * 3 + 1] = f;
  b[Al + d * 12 + e * 3 + 2] = 1;
  if ((d != e ? 5 : 6) == 5) b[Al + e * 12 + d * 3] = c, b[Al + e * 12 + d * 3 + 1] = f, b[Al + e * 12 + d * 3 + 2] = 0;
}

vl.X = 1;

function Fj(c, f, d, e, g) {
  var i, h, j, k, l;
  i = (b[Bl] & 1) == 0 ? 1 : 2;
  i == 1 && (vl(8, 10, 0, 0), vl(12, 14, 2, 0), vl(16, 18, 2, 2), vl(20, 22, 1, 0), vl(24, 26, 1, 2), vl(28, 30, 3, 0), vl(32, 34, 3, 2), b[Bl] = 1);
  j = al(c);
  k = al(d);
  (0 <= j & j < 4 ? 4 : 3) == 3 && O(wl, 80, Cl, yl);
  (0 <= k & k < 4 ? 6 : 5) == 5 && O(wl, 81, Cl, zl);
  l = b[Al + j * 12 + k * 3];
  i = b[Al + j * 12 + k * 3] != 0 ? 7 : 10;
  i == 7 ? (i = b[Al + j * 12 + k * 3 + 2] & 1 ? 8 : 9, i == 8 ? h = kb[l](c, f, d, e, g) : i == 9 && (h = kb[l](d, e, c, f, g))) : i == 10 && (h = 0);
  return h;
}

Fj.X = 1;

function sj(c, f) {
  var d, e, g;
  d = (b[Bl] & 1) == 1 ? 2 : 1;
  d == 1 && O(wl, 103, Dl, El);
  d = b[c + 31] > 0 ? 3 : 4;
  d == 3 && (oc(pj(b[c + 12]), 1), oc(pj(b[c + 13]), 1));
  e = al(b[c + 12]);
  g = al(b[c + 13]);
  d = 0 <= e ? 5 : 6;
  d == 5 && (d = g < 4 ? 7 : 6);
  d == 6 && O(wl, 114, Dl, Fl);
  d = 0 <= e ? 8 : 9;
  d == 8 && (d = g < 4 ? 10 : 9);
  d == 9 && O(wl, 115, Dl, Fl);
  kb[b[Al + e * 12 + g * 3 + 1]](c, f);
}

sj.X = 1;

function dl(c, f, d, e, g) {
  b[c] = Gl + 2;
  b[c + 1] = 4;
  b[c + 12] = f;
  b[c + 13] = e;
  b[c + 14] = d;
  b[c + 15] = g;
  b[c + 31] = 0;
  b[c + 2] = 0;
  b[c + 3] = 0;
  b[c + 5] = 0;
  b[c + 6] = 0;
  b[c + 7] = 0;
  b[c + 4] = 0;
  b[c + 9] = 0;
  b[c + 10] = 0;
  b[c + 11] = 0;
  b[c + 8] = 0;
  b[c + 32] = 0;
  f = Xc(o[b[c + 12] + 4] * o[b[c + 13] + 4]);
  o[c + 34] = f;
  o[c + 35] = o[b[c + 12] + 5] > o[b[c + 13] + 5] ? o[b[c + 12] + 5] : o[b[c + 13] + 5];
}

dl.X = 1;

function wj(c, f) {
  var d = a;
  a += 17;
  var e, g, i, h, j, k, l, m, n, p, t = d + 16, q, s;
  i = e = c + 16;
  e += 16;
  for (h = d; i < e; i++, h++) b[h] = b[i], o[h] = o[i];
  b[c + 1] |= 4;
  g = 0;
  i = (b[c + 1] & 2) == 2;
  e = b[b[c + 12] + 11] & 1;
  h = b[b[c + 13] + 11] & 1;
  e & 1 ? (j = 1, e = 2) : e = 1;
  e == 1 && (j = h & 1);
  h = pj(b[c + 12]);
  k = pj(b[c + 13]);
  l = h + 3;
  m = k + 3;
  e = j & 1 ? 3 : 4;
  do if (e == 3) {
    n = Xk(b[c + 12]);
    g = Xk(b[c + 13]);
    var u = n, x = b[c + 14], v = g, y = b[c + 15], z = l;
    n = m;
    g = a;
    a += 37;
    p = g + 23;
    q = g + 31;
    var B = g;
    je(B);
    je(B + 7);
    ke(g, u, x);
    ke(g + 7, v, y);
    u = g + 14;
    b[u] = b[z];
    o[u] = o[z];
    b[u + 1] = b[z + 1];
    o[u + 1] = o[z + 1];
    b[u + 2] = b[z + 2];
    o[u + 2] = o[z + 2];
    b[u + 3] = b[z + 3];
    o[u + 3] = o[z + 3];
    u = g + 18;
    b[u] = b[n];
    o[u] = o[n];
    b[u + 1] = b[n + 1];
    o[u + 1] = o[n + 1];
    b[u + 2] = b[n + 2];
    o[u + 2] = o[n + 2];
    b[u + 3] = b[n + 3];
    o[u + 3] = o[n + 3];
    b[g + 22] = 1;
    b[p + 1] = 0;
    ve(q, p, g);
    n = o[q + 4] < 11920928955078125e-22;
    a = g;
    g = n;
    b[c + 31] = 0;
  } else if (e == 4) {
    kb[b[b[c]]](c, c + 16, l, m);
    g = b[c + 31] > 0;
    n = 0;
    u = c + 31;
    e = n < b[u] ? 5 : 12;
    a : do if (e == 5) {
      x = c + 16;
      z = t;
      v = d + 15;
      y = d;
      for (B = t; ; ) {
        p = x + n * 5;
        o[p + 2] = 0;
        o[p + 3] = 0;
        b[z] = b[p + 4];
        o[z] = o[p + 4];
        for (q = 0; ; ) {
          if (q >= b[v]) {
            e = 11;
            break;
          }
          s = y + q * 5;
          if (b[s + 4] == b[B]) {
            e = 9;
            break;
          }
          q += 1;
        }
        e == 9 && (o[p + 2] = o[s + 2], o[p + 3] = o[s + 3]);
        n += 1;
        if (n >= b[u]) {
          e = 12;
          break a;
        }
      }
    } while (0);
    (g & 1) == (i & 1) ? e = 14 : (oc(h, 1), oc(k, 1));
  } while (0);
  t = b[c + 1];
  e = g & 1 ? 15 : 16;
  e == 15 ? b[c + 1] = t | 2 : e == 16 && (b[c + 1] = t & -3);
  if (((i & 1) == 0 ? 18 : 21) == 18 && (g & 1) == 1 && f != 0) kb[b[b[f] + 2]](f, c);
  if (((i & 1) == 1 ? 22 : 25) == 22 && (g & 1) == 0 && f != 0) kb[b[b[f] + 3]](f, c);
  if (((j & 1) == 0 ? 26 : 29) == 26 && g & 1 && f != 0) kb[b[b[f] + 4]](f, c, d);
  a = d;
}

wj.X = 1;

function Hl(c) {
  o[c] = 0;
  o[c + 2] = 0;
  o[c + 1] = 0;
  o[c + 3] = 0;
}

function fk(c) {
  Ci(b[c + 8], b[c + 10]);
  Ci(b[c + 8], b[c + 9]);
}

function Zj(c, f) {
  var d, e, g, i, h, j, k, l, m, n;
  e = f;
  for (var p = f + 6, t = c; e < p; e++, t++) b[t] = b[e], o[t] = o[e];
  b[c + 8] = b[f + 10];
  b[c + 12] = b[f + 7];
  e = Ii(b[c + 8], b[c + 12] * 88);
  b[c + 9] = e;
  e = Ii(b[c + 8], b[c + 12] * 152);
  b[c + 10] = e;
  b[c + 6] = b[f + 8];
  b[c + 7] = b[f + 9];
  b[c + 11] = b[f + 6];
  e = 0;
  p = c + 12;
  d = e < b[p] ? 1 : 10;
  a : do if (d == 1) for (var t = c + 11, q = c + 10, s = c + 9, u = c + 5, x = c + 2, v = c + 2; ; ) {
    g = b[b[t] + e];
    i = b[g + 12];
    h = b[g + 13];
    j = Xk(i);
    k = Xk(h);
    j = o[j + 2];
    l = o[k + 2];
    m = pj(i);
    n = pj(h);
    h = g + 16;
    i = b[h + 15];
    d = b[h + 15] > 0 ? 4 : 3;
    d == 3 && O(Il, 71, Jl, Kl);
    k = b[q] + e * 38;
    o[k + 34] = o[g + 34];
    o[k + 35] = o[g + 35];
    b[k + 28] = b[m + 2];
    b[k + 29] = b[n + 2];
    o[k + 30] = o[m + 30];
    o[k + 31] = o[n + 30];
    o[k + 32] = o[m + 32];
    o[k + 33] = o[n + 32];
    b[k + 37] = e;
    b[k + 36] = i;
    Hl(k + 24);
    Hl(k + 20);
    g = b[s] + e * 22;
    b[g + 8] = b[m + 2];
    b[g + 9] = b[n + 2];
    o[g + 10] = o[m + 30];
    o[g + 11] = o[n + 30];
    d = g + 12;
    var y = m + 7;
    b[d] = b[y];
    o[d] = o[y];
    b[d + 1] = b[y + 1];
    o[d + 1] = o[y + 1];
    d = g + 14;
    y = n + 7;
    b[d] = b[y];
    o[d] = o[y];
    b[d + 1] = b[y + 1];
    o[d + 1] = o[y + 1];
    o[g + 16] = o[m + 32];
    o[g + 17] = o[n + 32];
    d = g + 4;
    m = h + 10;
    b[d] = b[m];
    o[d] = o[m];
    b[d + 1] = b[m + 1];
    o[d + 1] = o[m + 1];
    d = g + 6;
    m = h + 12;
    b[d] = b[m];
    o[d] = o[m];
    b[d + 1] = b[m + 1];
    o[d + 1] = o[m + 1];
    b[g + 21] = i;
    o[g + 19] = j;
    o[g + 20] = l;
    b[g + 18] = b[h + 14];
    j = 0;
    d = j < i ? 5 : 9;
    b : do if (d == 5) for (;;) if (l = h + j * 5, m = k + j * 9, d = b[u] & 1 ? 6 : 7, d == 6 ? (o[m + 4] = o[x] * o[l + 2], o[m + 5] = o[v] * o[l + 3]) : d == 7 && (o[m + 4] = 0, o[m + 5] = 0), ac(m), ac(m + 2), o[m + 6] = 0, o[m + 7] = 0, o[m + 8] = 0, m = g + (j << 1), b[m] = b[l], o[m] = o[l], b[m + 1] = b[l + 1], o[m + 1] = o[l + 1], j += 1, j >= i) {
      d = 9;
      break b;
    } while (0);
    e += 1;
    if (e >= b[p]) break a;
  } while (0);
}

Zj.X = 1;

function $j(c) {
  var f = a;
  a += 54;
  var d, e, g, i, h, j, k, l, m, n, p, t, q, s = f + 2, u = f + 4, x, v = f + 6, y, z = f + 8, B, E = f + 10, D, H = f + 12, I = f + 16, M = f + 20, G = f + 22, S = f + 24, P = f + 26, L = f + 28, T, F, X, Z = f + 34, V = f + 36, aa, ja, Y, W = f + 38, $, fa, la, ga, ka = f + 40, oa = f + 42, ta = f + 44, Aa = f + 46, Ha = f + 48, Ba, Ra, nb, Da, Ta, La, pa, ha, ya, xa = f + 50;
  e = 0;
  var ua = c + 12;
  d = e < b[ua] ? 1 : 17;
  a : do if (d == 1) for (var Ia = c + 10, ma = c + 9, Ja = c + 11, Ea = f, wa = s, Ma = c + 6, Ca = u, Eb = c + 6, Ub = c + 7, Na = v, cc = c + 7, Mb = c + 6, Ua = z, dc = c + 6, ub = c + 7, Va = E, Nb = c + 7, Fb = H + 2, yb = I + 2, zb = H + 2, bb = H, Vb = M, Wb = I + 2, cb = I, vb = S, db = L, Ga = xa, Xb = L + 2, eb = Z, Ab = L + 2, fb = V; ; ) {
    g = b[Ia] + e * 38;
    i = b[ma] + e * 22;
    h = o[i + 19];
    j = o[i + 20];
    k = b[b[Ja] + b[g + 37]] + 16;
    l = b[g + 28];
    m = b[g + 29];
    n = o[g + 30];
    p = o[g + 31];
    t = o[g + 32];
    q = o[g + 33];
    var Bb = i + 12;
    b[Ea] = b[Bb];
    o[Ea] = o[Bb];
    b[Ea + 1] = b[Bb + 1];
    o[Ea + 1] = o[Bb + 1];
    var ec = i + 14;
    b[wa] = b[ec];
    o[wa] = o[ec];
    b[wa + 1] = b[ec + 1];
    o[wa + 1] = o[ec + 1];
    var fc = b[Ma] + l * 3;
    b[Ca] = b[fc];
    o[Ca] = o[fc];
    b[Ca + 1] = b[fc + 1];
    o[Ca + 1] = o[fc + 1];
    x = o[b[Eb] + l * 3 + 2];
    var ob = b[Ub] + l * 3;
    b[Na] = b[ob];
    o[Na] = o[ob];
    b[Na + 1] = b[ob + 1];
    o[Na + 1] = o[ob + 1];
    y = o[b[cc] + l * 3 + 2];
    var Ob = b[Mb] + m * 3;
    b[Ua] = b[Ob];
    o[Ua] = o[Ob];
    b[Ua + 1] = b[Ob + 1];
    o[Ua + 1] = o[Ob + 1];
    B = o[b[dc] + m * 3 + 2];
    var Pb = b[ub] + m * 3;
    b[Va] = b[Pb];
    o[Va] = o[Pb];
    b[Va + 1] = b[Pb + 1];
    o[Va + 1] = o[Pb + 1];
    D = o[b[Nb] + m * 3 + 2];
    d = b[k + 15] > 0 ? 4 : 3;
    d == 3 && O(Il, 168, Ll, Ml);
    ah(Fb, x);
    ah(yb, B);
    R(G, zb, f);
    C(M, u, G);
    b[bb] = b[Vb];
    o[bb] = o[Vb];
    b[bb + 1] = b[Vb + 1];
    o[bb + 1] = o[Vb + 1];
    R(P, Wb, s);
    C(S, z, P);
    b[cb] = b[vb];
    o[cb] = o[vb];
    b[cb + 1] = b[vb + 1];
    o[cb + 1] = o[vb + 1];
    he(L, k, H, h, I, j);
    var pb = g + 18;
    b[pb] = b[db];
    o[pb] = o[db];
    b[pb + 1] = b[db + 1];
    o[pb + 1] = o[db + 1];
    T = b[g + 36];
    F = 0;
    if (F < T) {
      var Yb = g;
      d = 5;
    } else {
      var Cb = g;
      d = 12;
    }
    b : do if (d == 5) for (;;) {
      var gc = X = Yb + F * 9;
      C(Z, Xb + (F << 1), u);
      var qb = gc;
      b[qb] = b[eb];
      o[qb] = o[eb];
      b[qb + 1] = b[eb + 1];
      o[qb + 1] = o[eb + 1];
      var Gb = X + 2;
      C(V, Ab + (F << 1), z);
      var rb = Gb;
      b[rb] = b[fb];
      o[rb] = o[fb];
      b[rb + 1] = b[fb + 1];
      o[rb + 1] = o[fb + 1];
      aa = Q(X, g + 18);
      ja = Q(X + 2, g + 18);
      Y = n + p + t * aa * aa + q * ja * ja;
      if (n + p + t * aa * aa + q * ja * ja > 0) d = 6; else {
        var gb = 0;
        d = 7;
      }
      d == 6 && (gb = 1 / Y);
      o[X + 6] = gb;
      Ud(W, g + 18);
      $ = Q(X, W);
      fa = Q(X + 2, W);
      la = n + p + t * $ * $ + q * fa * fa;
      if (n + p + t * $ * $ + q * fa * fa > 0) d = 8; else {
        var Zb = 0;
        d = 9;
      }
      d == 8 && (Zb = 1 / la);
      o[X + 7] = Zb;
      o[X + 8] = 0;
      var hc = g + 18;
      Ae(Aa, D, X + 2);
      N(ta, E, Aa);
      C(oa, ta, v);
      Ae(Ha, y, X);
      C(ka, oa, Ha);
      var Qb = J(hc, ka);
      ga = Qb;
      d = Qb < -1 ? 10 : 11;
      d == 10 && (o[X + 8] = -o[g + 35] * ga);
      F += 1;
      if (F < T) Yb = g; else {
        Cb = g;
        d = 12;
        break b;
      }
    } while (0);
    d = b[Cb + 36] == 2 ? 13 : 16;
    if (d == 13) {
      Ba = g;
      Ra = g + 9;
      nb = Q(Ba, g + 18);
      Da = Q(Ba + 2, g + 18);
      Ta = Q(Ra, g + 18);
      La = Q(Ra + 2, g + 18);
      pa = n + p + t * nb * nb + q * Da * Da;
      ha = n + p + t * Ta * Ta + q * La * La;
      ya = n + p + t * nb * Ta + q * Da * La;
      var yc = g;
      d = pa * pa < (pa * ha - ya * ya) * 1e3 ? 14 : 15;
      if (d == 14) {
        lc(yc + 24, pa, ya);
        lc(g + 26, ya, ha);
        var ic = g + 20;
        Nl(xa, g + 24);
        var hb = ic;
        b[hb] = b[Ga];
        o[hb] = o[Ga];
        b[hb + 1] = b[Ga + 1];
        o[hb + 1] = o[Ga + 1];
        b[hb + 2] = b[Ga + 2];
        o[hb + 2] = o[Ga + 2];
        b[hb + 3] = b[Ga + 3];
        o[hb + 3] = o[Ga + 3];
      } else d == 15 && (b[yc + 36] = 1);
    }
    e += 1;
    if (e >= b[ua]) {
      d = 17;
      break a;
    }
  } while (0);
  a = f;
}

$j.X = 1;

function Nl(c, f) {
  var d, e, g, i, h;
  d = o[f];
  e = o[f + 2];
  g = o[f + 1];
  i = o[f + 3];
  h = d * i - e * g;
  if ((h != 0 ? 1 : 2) == 1) h = 1 / h;
  o[c] = h * i;
  o[c + 2] = -h * e;
  o[c + 1] = -h * g;
  o[c + 3] = h * d;
}

Nl.X = 1;

function ak(c) {
  var f = a;
  a += 18;
  var d, e, g, i, h, j, k, l, m, n, p, t = f + 2, q, s = f + 4, u = f + 6, x, v, y = f + 8, z = f + 10, B = f + 12, E = f + 14, D = f + 16;
  e = 0;
  var H = c + 12;
  d = e < b[H] ? 1 : 5;
  a : do if (d == 1) for (var I = c + 10, M = c + 7, G = f, S = c + 7, P = c + 7, L = t, T = c + 7, F = s, X = c + 7, Z = f, V = c + 7, aa = c + 7, ja = t, Y = c + 7; ; ) {
    g = b[I] + e * 38;
    i = b[g + 28];
    h = b[g + 29];
    j = o[g + 30];
    k = o[g + 32];
    l = o[g + 31];
    m = o[g + 33];
    n = b[g + 36];
    p = b[M] + i * 3;
    b[G] = b[p];
    o[G] = o[p];
    b[G + 1] = b[p + 1];
    o[G + 1] = o[p + 1];
    p = o[b[S] + i * 3 + 2];
    q = b[P] + h * 3;
    b[L] = b[q];
    o[L] = o[q];
    b[L + 1] = b[q + 1];
    o[L + 1] = o[q + 1];
    q = o[b[T] + h * 3 + 2];
    d = g + 18;
    b[F] = b[d];
    o[F] = o[d];
    b[F + 1] = b[d + 1];
    o[F + 1] = o[d + 1];
    Ud(u, s);
    x = 0;
    d = x < n ? 3 : 4;
    b : do if (d == 3) for (;;) if (v = g + x * 9, K(z, o[v + 4], s), K(B, o[v + 5], u), N(y, z, B), p -= k * Q(v, y), K(E, j, y), Ie(f, E), q += m * Q(v + 2, y), K(D, l, y), Lb(t, D), x += 1, x >= n) {
      d = 4;
      break b;
    } while (0);
    g = b[X] + i * 3;
    b[g] = b[Z];
    o[g] = o[Z];
    b[g + 1] = b[Z + 1];
    o[g + 1] = o[Z + 1];
    o[b[V] + i * 3 + 2] = p;
    i = b[aa] + h * 3;
    b[i] = b[ja];
    o[i] = o[ja];
    b[i + 1] = b[ja + 1];
    o[i + 1] = o[ja + 1];
    o[b[Y] + h * 3 + 2] = q;
    e += 1;
    if (e >= b[H]) break a;
  } while (0);
  a = f;
}

ak.X = 1;

function Ol(c, f, d) {
  mc(c, o[f] * o[d] + o[f + 2] * o[d + 1], o[f + 1] * o[d] + o[f + 3] * o[d + 1]);
}

function bk(c) {
  var f = a;
  a += 126;
  var d, e, g, i, h, j, k, l, m, n, p, t = f + 2, q, s = f + 4, u = f + 6, x, v, y, z = f + 8, B = f + 10, E = f + 12, D = f + 14, H = f + 16, I, M, G, S, P = f + 18, L = f + 20, T = f + 22, F, X = f + 24, Z = f + 26, V = f + 28, aa = f + 30, ja = f + 32, Y, W, $, fa = f + 34, la = f + 36, ga = f + 38, ka, oa, ta = f + 40, Aa = f + 42, Ha = f + 44, Ba = f + 46, Ra = f + 48, nb = f + 50, Da = f + 52, Ta = f + 54, La = f + 56, pa = f + 58, ha = f + 60, ya, xa, ua = f + 62, Ia = f + 64, ma = f + 66, Ja = f + 68, Ea = f + 70, wa = f + 72, Ma = f + 74, Ca = f + 76, Eb = f + 78, Ub = f + 80, Na = f + 82, cc = f + 84, Mb = f + 86, Ua = f + 88, dc = f + 90, ub = f + 92, Va = f + 94, Nb = f + 96, Fb = f + 98, yb = f + 100, zb = f + 102, bb = f + 104, Vb = f + 106, Wb = f + 108, cb = f + 110, vb = f + 112, db = f + 114, Ga = f + 116, Xb = f + 118, eb = f + 120, Ab = f + 122, fb = f + 124;
  e = 0;
  var Bb = c + 12;
  d = e < b[Bb] ? 1 : 24;
  a : do if (d == 1) for (var ec = c + 10, fc = c + 7, ob = f, Ob = c + 7, Pb = c + 7, pb = t, Yb = c + 7, Cb = s, gc = c + 7, qb = f, Gb = c + 7, rb = c + 7, gb = t, Zb = c + 7, hc = ta, Qb = ta + 1, yc = ua, ic = ua + 1, hb = ma, Yd = ma + 1, Se = Ea, Te = Ea + 1, bd = ma, cd = ma + 1, dd = ua, ed = ma, fd = ma + 1, gd = ma, hd = ua + 1, id = ma, yh = cc, jd = cc + 1, kd = ma, zh = ma + 1, ld = ma, md = ua + 1, Zd = ma + 1, Ue = ma + 1, Ve = ua, nd = ma + 1, od = Fb, pd = Fb + 1, qd = ma, rd = ma + 1, sd = ma, td = ma + 1, ud = ua, Ah = ua + 1, vd = vb, wd = vb + 1, Bh = ma, xd = ma + 1; ; ) {
    g = b[ec] + e * 38;
    i = b[g + 28];
    h = b[g + 29];
    j = o[g + 30];
    k = o[g + 32];
    l = o[g + 31];
    m = o[g + 33];
    n = b[g + 36];
    var qc = b[fc] + i * 3;
    b[ob] = b[qc];
    o[ob] = o[qc];
    b[ob + 1] = b[qc + 1];
    o[ob + 1] = o[qc + 1];
    p = o[b[Ob] + i * 3 + 2];
    var zc = b[Pb] + h * 3;
    b[pb] = b[zc];
    o[pb] = o[zc];
    b[pb + 1] = b[zc + 1];
    o[pb + 1] = o[zc + 1];
    q = o[b[Yb] + h * 3 + 2];
    var Oc = g + 18;
    b[Cb] = b[Oc];
    o[Cb] = o[Oc];
    b[Cb + 1] = b[Oc + 1];
    o[Cb + 1] = o[Oc + 1];
    Ud(u, s);
    x = o[g + 34];
    d = n == 1 | n == 2 ? 4 : 3;
    d == 3 && O(Il, 311, Pl, Ql);
    v = 0;
    if (v < n) {
      var $d = g;
      d = 5;
    } else {
      var Pc = g;
      d = 6;
    }
    b : do if (d == 5) for (;;) if (y = $d + v * 9, Ae(D, q, y + 2), N(E, t, D), C(B, E, f), Ae(H, p, y), C(z, B, H), I = J(z, u), M = o[y + 7] * -I, G = x * o[y + 4], S = Yj(o[y + 5] + M, -G, G), M = S - o[y + 5], o[y + 5] = S, K(P, M, u), K(L, j, P), Ie(f, L), p -= k * Q(y, P), K(T, l, P), Lb(t, T), q += m * Q(y + 2, P), v += 1, v < n) $d = g; else {
      Pc = g;
      d = 6;
      break b;
    } while (0);
    var Qc = g;
    d = b[Pc + 36] == 1 ? 7 : 8;
    b : do if (d == 7) F = Qc, Ae(aa, q, F + 2), N(V, t, aa), C(Z, V, f), Ae(ja, p, F), C(X, Z, ja), Y = J(X, s), W = -o[F + 6] * (Y - o[F + 8]), $ = o[F + 4] + W > 0 ? o[F + 4] + W : 0, W = $ - o[F + 4], o[F + 4] = $, K(fa, W, s), K(la, j, fa), Ie(f, la), p -= k * Q(F, fa), K(ga, l, fa), Lb(t, ga), q += m * Q(F + 2, fa); else if (d == 8) {
      ka = Qc;
      oa = g + 9;
      mc(ta, o[ka + 4], o[oa + 4]);
      d = o[hc] >= 0 ? 9 : 10;
      d == 9 && (d = o[Qb] >= 0 ? 11 : 10);
      d == 10 && O(Il, 406, Pl, Rl);
      Ae(Ra, q, ka + 2);
      N(Ba, t, Ra);
      C(Ha, Ba, f);
      Ae(nb, p, ka);
      C(Aa, Ha, nb);
      Ae(pa, q, oa + 2);
      N(La, t, pa);
      C(Ta, La, f);
      Ae(ha, p, oa);
      C(Da, Ta, ha);
      ya = J(Aa, s);
      xa = J(Da, s);
      o[yc] = ya - o[ka + 8];
      o[ic] = xa - o[oa + 8];
      Ol(Ia, g + 24, ta);
      Ie(ua, Ia);
      Ol(Ja, g + 20, ua);
      Nd(ma, Ja);
      d = o[hb] >= 0 ? 12 : 14;
      do if (d == 12) if (o[Yd] >= 0) {
        C(Ea, ma, ta);
        K(wa, o[Se], s);
        K(Ma, o[Te], s);
        var yd = j;
        N(Eb, wa, Ma);
        K(Ca, yd, Eb);
        Ie(f, Ca);
        p -= k * (Q(ka, wa) + Q(oa, Ma));
        var zd = l;
        N(Na, wa, Ma);
        K(Ub, zd, Na);
        Lb(t, Ub);
        q += m * (Q(ka + 2, wa) + Q(oa + 2, Ma));
        o[ka + 4] = o[bd];
        o[oa + 4] = o[cd];
        d = 23;
        break b;
      } else d = 14; while (0);
      o[ed] = -o[ka + 6] * o[dd];
      ya = o[fd] = 0;
      xa = o[g + 25] * o[gd] + o[hd];
      d = o[id] >= 0 ? 15 : 17;
      do if (d == 15) if (xa >= 0) {
        C(cc, ma, ta);
        K(Mb, o[yh], s);
        K(Ua, o[jd], s);
        var Ad = j;
        N(ub, Mb, Ua);
        K(dc, Ad, ub);
        Ie(f, dc);
        p -= k * (Q(ka, Mb) + Q(oa, Ua));
        var Bd = l;
        N(Nb, Mb, Ua);
        K(Va, Bd, Nb);
        Lb(t, Va);
        q += m * (Q(ka + 2, Mb) + Q(oa + 2, Ua));
        o[ka + 4] = o[kd];
        o[oa + 4] = o[zh];
        d = 23;
        break b;
      } else d = 17; while (0);
      o[ld] = 0;
      o[Zd] = -o[oa + 6] * o[md];
      ya = o[g + 26] * o[Ue] + o[Ve];
      xa = 0;
      d = o[nd] >= 0 ? 18 : 20;
      do if (d == 18) if (ya >= 0) {
        C(Fb, ma, ta);
        K(yb, o[od], s);
        K(zb, o[pd], s);
        var Cd = j;
        N(Vb, yb, zb);
        K(bb, Cd, Vb);
        Ie(f, bb);
        p -= k * (Q(ka, yb) + Q(oa, zb));
        var Dd = l;
        N(cb, yb, zb);
        K(Wb, Dd, cb);
        Lb(t, Wb);
        q += m * (Q(ka + 2, yb) + Q(oa + 2, zb));
        o[ka + 4] = o[qd];
        o[oa + 4] = o[rd];
        d = 23;
        break b;
      } else d = 20; while (0);
      o[sd] = 0;
      o[td] = 0;
      var We = o[ud];
      ya = We;
      xa = o[Ah];
      if (We >= 0) if (xa >= 0) {
        C(vb, ma, ta);
        K(db, o[vd], s);
        K(Ga, o[wd], s);
        var Ed = j;
        N(eb, db, Ga);
        K(Xb, Ed, eb);
        Ie(f, Xb);
        p -= k * (Q(ka, db) + Q(oa, Ga));
        var Fd = l;
        N(fb, db, Ga);
        K(Ab, Fd, fb);
        Lb(t, Ab);
        q += m * (Q(ka + 2, db) + Q(oa + 2, Ga));
        o[ka + 4] = o[Bh];
        o[oa + 4] = o[xd];
      } else d = 23; else d = 23;
    } while (0);
    var Gd = b[gc] + i * 3;
    b[Gd] = b[qb];
    o[Gd] = o[qb];
    b[Gd + 1] = b[qb + 1];
    o[Gd + 1] = o[qb + 1];
    o[b[Gb] + i * 3 + 2] = p;
    var rc = b[rb] + h * 3;
    b[rc] = b[gb];
    o[rc] = o[gb];
    b[rc + 1] = b[gb + 1];
    o[rc + 1] = o[gb + 1];
    o[b[Zb] + h * 3 + 2] = q;
    e += 1;
    if (e >= b[Bb]) {
      d = 24;
      break a;
    }
  } while (0);
  a = f;
}

bk.X = 1;

function ck(c) {
  var f, d, e, g, i;
  d = 0;
  var h = c + 12;
  f = d < b[h] ? 1 : 5;
  a : do if (f == 1) for (var j = c + 10, k = c + 11; ; ) {
    e = b[j] + d * 38;
    g = b[b[k] + b[e + 37]] + 16;
    i = 0;
    f = i < b[e + 36] ? 3 : 4;
    b : do if (f == 3) for (;;) if (o[g + i * 5 + 2] = o[e + i * 9 + 4], o[g + i * 5 + 3] = o[e + i * 9 + 5], i += 1, i >= b[e + 36]) {
      f = 4;
      break b;
    } while (0);
    d += 1;
    if (d >= b[h]) break a;
  } while (0);
}

ck.X = 1;

function dk(c) {
  var f = a;
  a += 43;
  var d, e, g, i, h, j, k, l, m = f + 2, n, p, t, q = f + 4, s, u = f + 6, x, v, y = f + 8, z = f + 12, B = f + 16, E = f + 18, D = f + 20, H = f + 22, I = f + 24, M = f + 29, G = f + 31, S = f + 33, P = f + 35, L, T, F, X = f + 37, Z = f + 39, V = f + 41;
  g = e = 0;
  var aa = c + 12;
  d = g < b[aa] ? 1 : 7;
  a : do if (d == 1) for (var ja = c + 9, Y = f, W = m, $ = c + 6, fa = q, la = c + 6, ga = c + 6, ka = u, oa = c + 6, ta = c + 6, Aa = q, Ha = c + 6, Ba = c + 6, Ra = u, nb = c + 6, Da = y + 2, Ta = z + 2, La = y + 2, pa = y, ha = B, ya = z + 2, xa = z, ua = D, Ia = M, ma = I, Ja = G, Ea = I + 2, wa = I + 4; ; ) {
    i = b[ja] + g * 22;
    h = b[i + 8];
    j = b[i + 9];
    k = i + 12;
    b[Y] = b[k];
    o[Y] = o[k];
    b[Y + 1] = b[k + 1];
    o[Y + 1] = o[k + 1];
    k = o[i + 10];
    l = o[i + 16];
    n = i + 14;
    b[W] = b[n];
    o[W] = o[n];
    b[W + 1] = b[n + 1];
    o[W + 1] = o[n + 1];
    n = o[i + 11];
    p = o[i + 17];
    t = b[i + 21];
    s = b[$] + h * 3;
    b[fa] = b[s];
    o[fa] = o[s];
    b[fa + 1] = b[s + 1];
    o[fa + 1] = o[s + 1];
    s = o[b[la] + h * 3 + 2];
    x = b[ga] + j * 3;
    b[ka] = b[x];
    o[ka] = o[x];
    b[ka + 1] = b[x + 1];
    o[ka + 1] = o[x + 1];
    x = o[b[oa] + j * 3 + 2];
    v = 0;
    d = v < t ? 3 : 6;
    b : do if (d == 3) for (;;) {
      ah(Da, s);
      ah(Ta, x);
      R(E, La, f);
      C(B, q, E);
      b[pa] = b[ha];
      o[pa] = o[ha];
      b[pa + 1] = b[ha + 1];
      o[pa + 1] = o[ha + 1];
      R(H, ya, m);
      C(D, u, H);
      b[xa] = b[ua];
      o[xa] = o[ua];
      b[xa + 1] = b[ua + 1];
      o[xa + 1] = o[ua + 1];
      Sl(I, i, y, z, v);
      b[Ia] = b[ma];
      o[Ia] = o[ma];
      b[Ia + 1] = b[ma + 1];
      o[Ia + 1] = o[ma + 1];
      b[Ja] = b[Ea];
      o[Ja] = o[Ea];
      b[Ja + 1] = b[Ea + 1];
      o[Ja + 1] = o[Ea + 1];
      d = o[wa];
      C(S, G, q);
      C(P, G, u);
      e = e < d ? e : d;
      L = Yj((d + .004999999888241291) * .20000000298023224, -.20000000298023224, 0);
      d = Q(S, M);
      T = Q(P, M);
      F = k + n + l * d * d + p * T * T;
      if (k + n + l * d * d + p * T * T > 0) d = 4; else {
        var Ma = 0;
        d = 5;
      }
      d == 4 && (Ma = -L / F);
      L = Ma;
      K(X, L, M);
      K(Z, k, X);
      Ie(q, Z);
      s -= l * Q(S, X);
      K(V, n, X);
      Lb(u, V);
      x += p * Q(P, X);
      v += 1;
      if (v >= t) {
        d = 6;
        break b;
      }
    } while (0);
    i = b[ta] + h * 3;
    b[i] = b[Aa];
    o[i] = o[Aa];
    b[i + 1] = b[Aa + 1];
    o[i + 1] = o[Aa + 1];
    o[b[Ha] + h * 3 + 2] = s;
    h = b[Ba] + j * 3;
    b[h] = b[Ra];
    o[h] = o[Ra];
    b[h + 1] = b[Ra + 1];
    o[h + 1] = o[Ra + 1];
    o[b[nb] + j * 3 + 2] = x;
    g += 1;
    if (g >= b[aa]) break a;
  } while (0);
  a = f;
  return e >= -.014999999664723873;
}

dk.X = 1;

function Sl(c, f, d, e, g) {
  var i = a;
  a += 30;
  var h, j = i + 2, k = i + 4, l = i + 6, m = i + 8, n = i + 10, p = i + 12, t = i + 14, q = i + 16, s = i + 18, u = i + 20, x = i + 22, v = i + 24, y = i + 26, z = i + 28;
  h = b[f + 21] > 0 ? 2 : 1;
  h == 1 && O(Il, 617, Tl, Ul);
  h = b[f + 18];
  h = h == 0 ? 3 : h == 1 ? 4 : h == 2 ? 5 : 6;
  h == 3 ? (Nc(i, d, f + 6), Nc(j, e, f), C(k, j, i), b[c] = b[k], o[c] = o[k], b[c + 1] = b[k + 1], o[c + 1] = o[k + 1], Vc(c), q = c + 2, N(m, i, j), K(l, .5, m), b[q] = b[l], o[q] = o[l], b[q + 1] = b[l + 1], o[q + 1] = o[l + 1], C(n, j, i), o[c + 4] = J(n, c) - o[f + 19] - o[f + 20]) : h == 4 ? (R(p, d + 2, f + 4), b[c] = b[p], o[c] = o[p], b[c + 1] = b[p + 1], o[c + 1] = o[p + 1], Nc(t, d, f + 6), Nc(q, e, f + (g << 1)), C(s, q, t), o[c + 4] = J(s, c) - o[f + 19] - o[f + 20], c += 2, b[c] = b[q], o[c] = o[q], b[c + 1] = b[q + 1], o[c + 1] = o[q + 1]) : h == 5 && (R(u, e + 2, f + 4), b[c] = b[u], o[c] = o[u], b[c + 1] = b[u + 1], o[c + 1] = o[u + 1], Nc(x, e, f + 6), Nc(v, d, f + (g << 1)), C(y, v, x), o[c + 4] = J(y, c) - o[f + 19] - o[f + 20], f = c + 2, b[f] = b[v], o[f] = o[v], b[f + 1] = b[v + 1], o[f + 1] = o[v + 1], Nd(z, c), b[c] = b[z], o[c] = o[z], b[c + 1] = b[z + 1], o[c + 1] = o[z + 1]);
  a = i;
}

Sl.X = 1;

function Ak(c, f, d) {
  var e = a;
  a += 43;
  var g, i, h, j, k, l, m = e + 2, n, p, t, q, s, u = e + 4, x, v = e + 6, y, z, B = e + 8, E = e + 12, D = e + 16, H = e + 18, I = e + 20, M = e + 22, G = e + 24, S = e + 29, P = e + 31, L = e + 33, T = e + 35, F, X, Z, V = e + 37, aa = e + 39, ja = e + 41;
  h = i = 0;
  var Y = c + 12;
  g = h < b[Y] ? 1 : 13;
  a : do if (g == 1) for (var W = c + 9, $ = e, fa = m, la = c + 6, ga = u, ka = c + 6, oa = c + 6, ta = v, Aa = c + 6, Ha = c + 6, Ba = u, Ra = c + 6, nb = c + 6, Da = v, Ta = c + 6, La = B + 2, pa = E + 2, ha = B + 2, ya = B, xa = D, ua = E + 2, Ia = E, ma = I, Ja = S, Ea = G, wa = P, Ma = G + 2, Ca = G + 4; ; ) {
    j = b[W] + h * 22;
    k = b[j + 8];
    l = b[j + 9];
    n = j + 12;
    b[$] = b[n];
    o[$] = o[n];
    b[$ + 1] = b[n + 1];
    o[$ + 1] = o[n + 1];
    n = j + 14;
    b[fa] = b[n];
    o[fa] = o[n];
    b[fa + 1] = b[n + 1];
    o[fa + 1] = o[n + 1];
    n = b[j + 21];
    t = p = 0;
    g = k == f ? 4 : 3;
    g == 3 && (g = k == d ? 4 : 5);
    g == 4 && (p = o[j + 10], t = o[j + 16]);
    q = o[j + 11];
    s = o[j + 17];
    g = l == f ? 7 : 6;
    g == 6 && (g = l == d ? 7 : 8);
    g == 7 && (q = o[j + 11], s = o[j + 17]);
    x = b[la] + k * 3;
    b[ga] = b[x];
    o[ga] = o[x];
    b[ga + 1] = b[x + 1];
    o[ga + 1] = o[x + 1];
    x = o[b[ka] + k * 3 + 2];
    y = b[oa] + l * 3;
    b[ta] = b[y];
    o[ta] = o[y];
    b[ta + 1] = b[y + 1];
    o[ta + 1] = o[y + 1];
    y = o[b[Aa] + l * 3 + 2];
    z = 0;
    g = z < n ? 9 : 12;
    b : do if (g == 9) for (;;) {
      ah(La, x);
      ah(pa, y);
      R(H, ha, e);
      C(D, u, H);
      b[ya] = b[xa];
      o[ya] = o[xa];
      b[ya + 1] = b[xa + 1];
      o[ya + 1] = o[xa + 1];
      R(M, ua, m);
      C(I, v, M);
      b[Ia] = b[ma];
      o[Ia] = o[ma];
      b[Ia + 1] = b[ma + 1];
      o[Ia + 1] = o[ma + 1];
      Sl(G, j, B, E, z);
      b[Ja] = b[Ea];
      o[Ja] = o[Ea];
      b[Ja + 1] = b[Ea + 1];
      o[Ja + 1] = o[Ea + 1];
      b[wa] = b[Ma];
      o[wa] = o[Ma];
      b[wa + 1] = b[Ma + 1];
      o[wa + 1] = o[Ma + 1];
      g = o[Ca];
      C(L, P, u);
      C(T, P, v);
      i = i < g ? i : g;
      F = Yj((g + .004999999888241291) * .75, -.20000000298023224, 0);
      g = Q(L, S);
      X = Q(T, S);
      Z = p + q + t * g * g + s * X * X;
      if (p + q + t * g * g + s * X * X > 0) g = 10; else {
        var Eb = 0;
        g = 11;
      }
      g == 10 && (Eb = -F / Z);
      F = Eb;
      K(V, F, S);
      K(aa, p, V);
      Ie(u, aa);
      x -= t * Q(L, V);
      K(ja, q, V);
      Lb(v, ja);
      y += s * Q(T, V);
      z += 1;
      if (z >= n) {
        g = 12;
        break b;
      }
    } while (0);
    j = b[Ha] + k * 3;
    b[j] = b[Ba];
    o[j] = o[Ba];
    b[j + 1] = b[Ba + 1];
    o[j + 1] = o[Ba + 1];
    o[b[Ra] + k * 3 + 2] = x;
    k = b[nb] + l * 3;
    b[k] = b[Da];
    o[k] = o[Da];
    b[k + 1] = b[Da + 1];
    o[k + 1] = o[Da + 1];
    o[b[Ta] + l * 3 + 2] = y;
    h += 1;
    if (h >= b[Y]) break a;
  } while (0);
  a = e;
  return i >= -.007499999832361937;
}

Ak.X = 1;

function Vl(c, f, d) {
  dl(c, f, 0, d, 0);
  b[c] = Wl + 2;
  f = al(b[c + 12]) == 1 ? 2 : 1;
  f == 1 && O(Xl, 41, Yl, Zl);
  f = al(b[c + 13]) == 0 ? 4 : 3;
  f == 3 && O(Xl, 42, Yl, il);
}

function $l(c, f) {
  am(c, f);
  b[c] = bm + 2;
  var d = c + 21, e = f + 5;
  b[d] = b[e];
  o[d] = o[e];
  b[d + 1] = b[e + 1];
  o[d + 1] = o[e + 1];
  d = c + 23;
  e = f + 7;
  b[d] = b[e];
  o[d] = o[e];
  b[d + 1] = b[e + 1];
  o[d + 1] = o[e + 1];
  o[c + 27] = o[f + 9];
  o[c + 18] = o[f + 10];
  o[c + 19] = o[f + 11];
  o[c + 26] = 0;
  o[c + 25] = 0;
  o[c + 20] = 0;
}

$l.X = 1;

function cm(c, f, d) {
  dl(c, f, 0, d, 0);
  b[c] = dm + 2;
  f = al(b[c + 12]) == 1 ? 2 : 1;
  f == 1 && O(em, 41, fm, Zl);
  f = al(b[c + 13]) == 2 ? 4 : 3;
  f == 3 && O(em, 42, fm, ol);
}

function gm(c, f, d) {
  dl(c, f, 0, d, 0);
  b[c] = hm + 2;
  f = al(b[c + 12]) == 2 ? 2 : 1;
  f == 1 && O(im, 41, jm, km);
  f = al(b[c + 13]) == 0 ? 4 : 3;
  f == 3 && O(im, 42, jm, il);
}

function lm(c, f, d) {
  dl(c, f, 0, d, 0);
  b[c] = mm + 2;
  f = al(b[c + 12]) == 2 ? 2 : 1;
  f == 1 && O(nm, 44, om, km);
  f = al(b[c + 13]) == 2 ? 4 : 3;
  f == 3 && O(nm, 45, om, ol);
}

function pm(c, f, d) {
  Nc(c, f + 3, d);
}

function qm(c) {
  var f, d;
  f = b[b[c + 12] + 2];
  d = b[b[c + 13] + 2];
  U(rm, A(1, "i32", r));
  U(sm, A([ f ], "i32", r));
  U(tm, A([ d ], "i32", r));
  U(um, A([ b[c + 16] & 1 ], "i32", r));
  U(vm, A([ o[c + 21], o[c + 22] ], "double", r));
  U(wm, A([ o[c + 23], o[c + 24] ], "double", r));
  U(xm, A([ o[c + 27] ], "double", r));
  U(ym, A([ o[c + 18] ], "double", r));
  U(zm, A([ o[c + 19] ], "double", r));
  U(Am, A([ b[c + 14] ], "i32", r));
}

qm.X = 1;

function Bm(c, f) {
  var d = a;
  a += 32;
  var e, g, i = d + 2, h, j = d + 4, k, l = d + 6, m, n = d + 8, p = d + 10, t = d + 12, q = d + 14, s = d + 16, u = d + 18;
  e = d + 20;
  var x = d + 22, v = d + 24, y, z = d + 26, B = d + 28, E = d + 30;
  b[c + 28] = b[b[c + 12] + 2];
  b[c + 29] = b[b[c + 13] + 2];
  h = c + 36;
  m = b[c + 12] + 7;
  b[h] = b[m];
  o[h] = o[m];
  b[h + 1] = b[m + 1];
  o[h + 1] = o[m + 1];
  h = c + 38;
  m = b[c + 13] + 7;
  b[h] = b[m];
  o[h] = o[m];
  b[h + 1] = b[m + 1];
  o[h + 1] = o[m + 1];
  o[c + 40] = o[b[c + 12] + 30];
  o[c + 41] = o[b[c + 13] + 30];
  o[c + 42] = o[b[c + 12] + 32];
  o[c + 43] = o[b[c + 13] + 32];
  h = b[f + 6] + b[c + 28] * 3;
  b[d] = b[h];
  o[d] = o[h];
  b[d + 1] = b[h + 1];
  o[d + 1] = o[h + 1];
  g = o[b[f + 6] + b[c + 28] * 3 + 2];
  h = b[f + 7] + b[c + 28] * 3;
  b[i] = b[h];
  o[i] = o[h];
  b[i + 1] = b[h + 1];
  o[i + 1] = o[h + 1];
  h = o[b[f + 7] + b[c + 28] * 3 + 2];
  m = b[f + 6] + b[c + 29] * 3;
  b[j] = b[m];
  o[j] = o[m];
  b[j + 1] = b[m + 1];
  o[j + 1] = o[m + 1];
  k = o[b[f + 6] + b[c + 29] * 3 + 2];
  m = b[f + 7] + b[c + 29] * 3;
  b[l] = b[m];
  o[l] = o[m];
  b[l + 1] = b[m + 1];
  o[l + 1] = o[m + 1];
  m = o[b[f + 7] + b[c + 29] * 3 + 2];
  Cm(n, g);
  Cm(p, k);
  g = c + 32;
  C(q, c + 21, c + 36);
  R(t, n, q);
  b[g] = b[t];
  o[g] = o[t];
  b[g + 1] = b[t + 1];
  o[g + 1] = o[t + 1];
  n = c + 34;
  C(u, c + 23, c + 38);
  R(s, p, u);
  b[n] = b[s];
  o[n] = o[s];
  b[n + 1] = b[s + 1];
  o[n + 1] = o[s + 1];
  p = c + 30;
  N(v, j, c + 34);
  C(x, v, d);
  C(e, x, c + 32);
  b[p] = b[e];
  o[p] = o[e];
  b[p + 1] = b[e + 1];
  o[p + 1] = o[e + 1];
  x = Wc(c + 30);
  e = x > .004999999888241291 ? 1 : 2;
  e == 1 ? Th(c + 30, 1 / x) : e == 2 && lc(c + 30, 0, 0);
  e = Q(c + 32, c + 30);
  v = Q(c + 34, c + 30);
  j = o[c + 40] + o[c + 42] * e * e + o[c + 41] + o[c + 43] * v * v;
  o[c + 40] + o[c + 42] * e * e + o[c + 41] + o[c + 43] * v * v != 0 ? e = 4 : (y = 0, e = 5);
  e == 4 && (y = 1 / j);
  o[c + 44] = y;
  e = o[c + 18] > 0 ? 6 : 11;
  if (e == 6) {
    y = x - o[c + 27];
    x = o[c + 18] * 6.2831854820251465;
    e = o[c + 44] * 2 * o[c + 19] * x;
    x *= o[c + 44] * x;
    v = o[f];
    o[c + 25] = v * (e + v * x);
    if (o[c + 25] != 0) e = 7; else {
      var D = 0;
      e = 8;
    }
    e == 7 && (D = 1 / o[c + 25]);
    o[c + 25] = D;
    o[c + 20] = y * v * x * o[c + 25];
    D = j + o[c + 25];
    if (D != 0) e = 9; else {
      var H = 0;
      e = 10;
    }
    e == 9 && (H = 1 / D);
    o[c + 44] = H;
  } else e == 11 && (o[c + 25] = 0, o[c + 20] = 0);
  e = b[f + 5] & 1 ? 13 : 14;
  e == 13 ? (o[c + 26] *= o[f + 2], K(z, o[c + 26], c + 30), K(B, o[c + 40], z), Ie(i, B), h -= o[c + 42] * Q(c + 32, z), K(E, o[c + 41], z), Lb(l, E), m += o[c + 43] * Q(c + 34, z)) : e == 14 && (o[c + 26] = 0);
  z = b[f + 7] + b[c + 28] * 3;
  b[z] = b[i];
  o[z] = o[i];
  b[z + 1] = b[i + 1];
  o[z + 1] = o[i + 1];
  o[b[f + 7] + b[c + 28] * 3 + 2] = h;
  i = b[f + 7] + b[c + 29] * 3;
  b[i] = b[l];
  o[i] = o[l];
  b[i + 1] = b[l + 1];
  o[i + 1] = o[l + 1];
  o[b[f + 7] + b[c + 29] * 3 + 2] = m;
  a = d;
}

Bm.X = 1;

function Dm(c, f) {
  var d = a;
  a += 20;
  var e, g = d + 2, i, h = d + 4, j = d + 6, k = d + 8, l = d + 10, m = d + 12, n = d + 14, p = d + 16, t = d + 18;
  e = b[f + 7] + b[c + 28] * 3;
  b[d] = b[e];
  o[d] = o[e];
  b[d + 1] = b[e + 1];
  o[d + 1] = o[e + 1];
  e = o[b[f + 7] + b[c + 28] * 3 + 2];
  i = b[f + 7] + b[c + 29] * 3;
  b[g] = b[i];
  o[g] = o[i];
  b[g + 1] = b[i + 1];
  o[g + 1] = o[i + 1];
  i = o[b[f + 7] + b[c + 29] * 3 + 2];
  Ae(j, e, c + 32);
  N(h, d, j);
  Ae(l, i, c + 34);
  N(k, g, l);
  j = c + 30;
  C(m, k, h);
  h = -o[c + 44] * (J(j, m) + o[c + 20] + o[c + 25] * o[c + 26]);
  o[c + 26] += h;
  K(n, h, c + 30);
  K(p, o[c + 40], n);
  Ie(d, p);
  e -= o[c + 42] * Q(c + 32, n);
  K(t, o[c + 41], n);
  Lb(g, t);
  i += o[c + 43] * Q(c + 34, n);
  n = b[f + 7] + b[c + 28] * 3;
  b[n] = b[d];
  o[n] = o[d];
  b[n + 1] = b[d + 1];
  o[n + 1] = o[d + 1];
  o[b[f + 7] + b[c + 28] * 3 + 2] = e;
  e = b[f + 7] + b[c + 29] * 3;
  b[e] = b[g];
  o[e] = o[g];
  b[e + 1] = b[g + 1];
  o[e + 1] = o[g + 1];
  o[b[f + 7] + b[c + 29] * 3 + 2] = i;
  a = d;
}

Dm.X = 1;

function Em(c, f) {
  var d = a;
  a += 28;
  var e, g, i = d + 2, h = d + 4, j = d + 6, k = d + 8, l = d + 10, m = d + 12, n = d + 14, p = d + 16, t = d + 18, q = d + 20, s = d + 22, u = d + 24, x = d + 26;
  e = o[c + 18] > 0 ? 1 : 2;
  e == 1 ? g = 1 : e == 2 && (e = b[f + 6] + b[c + 28] * 3, b[d] = b[e], o[d] = o[e], b[d + 1] = b[e + 1], o[d + 1] = o[e + 1], e = o[b[f + 6] + b[c + 28] * 3 + 2], g = b[f + 6] + b[c + 29] * 3, b[i] = b[g], o[i] = o[g], b[i + 1] = b[g + 1], o[i + 1] = o[g + 1], g = o[b[f + 6] + b[c + 29] * 3 + 2], Cm(h, e), Cm(j, g), C(l, c + 21, c + 36), R(k, h, l), C(n, c + 23, c + 38), R(m, j, n), N(q, i, m), C(t, q, d), C(p, t, k), h = Vc(p), h -= o[c + 27], h = Yj(h, -.20000000298023224, .20000000298023224), j = -o[c + 44] * h, K(s, j, p), K(u, o[c + 40], s), Ie(d, u), e -= o[c + 42] * Q(k, s), K(x, o[c + 41], s), Lb(i, x), g += o[c + 43] * Q(m, s), k = b[f + 6] + b[c + 28] * 3, b[k] = b[d], o[k] = o[d], b[k + 1] = b[d + 1], o[k + 1] = o[d + 1], o[b[f + 6] + b[c + 28] * 3 + 2] = e, k = b[f + 6] + b[c + 29] * 3, b[k] = b[i], o[k] = o[i], b[k + 1] = b[i + 1], o[k + 1] = o[i + 1], o[b[f + 6] + b[c + 29] * 3 + 2] = g, g = ie(h) < .004999999888241291);
  a = d;
  return g;
}

Em.X = 1;

function Cm(c, f) {
  var d = Gh(f);
  o[c] = d;
  d = Hh(f);
  o[c + 1] = d;
}

function Fm(c, f) {
  am(c, f);
  b[c] = Gm + 2;
  var d = c + 18, e = f + 5;
  b[d] = b[e];
  o[d] = o[e];
  b[d + 1] = b[e + 1];
  o[d + 1] = o[e + 1];
  d = c + 20;
  e = f + 7;
  b[d] = b[e];
  o[d] = o[e];
  b[d + 1] = b[e + 1];
  o[d + 1] = o[e + 1];
  ac(c + 22);
  o[c + 24] = 0;
  o[c + 25] = o[f + 9];
  o[c + 26] = o[f + 10];
}

Fm.X = 1;

function Hm(c) {
  var f, d;
  f = b[b[c + 12] + 2];
  d = b[b[c + 13] + 2];
  U(Im, A(1, "i32", r));
  U(sm, A([ f ], "i32", r));
  U(tm, A([ d ], "i32", r));
  U(um, A([ b[c + 16] & 1 ], "i32", r));
  U(vm, A([ o[c + 18], o[c + 19] ], "double", r));
  U(wm, A([ o[c + 20], o[c + 21] ], "double", r));
  U(Jm, A([ o[c + 25] ], "double", r));
  U(Km, A([ o[c + 26] ], "double", r));
  U(Am, A([ b[c + 14] ], "i32", r));
}

Hm.X = 1;

function Lm(c, f) {
  var d = a;
  a += 30;
  var e, g, i, h, j = d + 2, k, l = d + 4, m = d + 6, n = d + 8, p = d + 10, t = d + 12, q = d + 14;
  e = d + 16;
  var s = d + 20, u = d + 24, x = d + 26, v = d + 28;
  b[c + 27] = b[b[c + 12] + 2];
  b[c + 28] = b[b[c + 13] + 2];
  i = c + 33;
  k = b[c + 12] + 7;
  b[i] = b[k];
  o[i] = o[k];
  b[i + 1] = b[k + 1];
  o[i + 1] = o[k + 1];
  i = c + 35;
  k = b[c + 13] + 7;
  b[i] = b[k];
  o[i] = o[k];
  b[i + 1] = b[k + 1];
  o[i + 1] = o[k + 1];
  o[c + 37] = o[b[c + 12] + 30];
  o[c + 38] = o[b[c + 13] + 30];
  o[c + 39] = o[b[c + 12] + 32];
  o[c + 40] = o[b[c + 13] + 32];
  g = o[b[f + 6] + b[c + 27] * 3 + 2];
  i = b[f + 7] + b[c + 27] * 3;
  b[d] = b[i];
  o[d] = o[i];
  b[d + 1] = b[i + 1];
  o[d + 1] = o[i + 1];
  i = o[b[f + 7] + b[c + 27] * 3 + 2];
  h = o[b[f + 6] + b[c + 28] * 3 + 2];
  k = b[f + 7] + b[c + 28] * 3;
  b[j] = b[k];
  o[j] = o[k];
  b[j + 1] = b[k + 1];
  o[j + 1] = o[k + 1];
  k = o[b[f + 7] + b[c + 28] * 3 + 2];
  Cm(l, g);
  Cm(m, h);
  g = c + 29;
  C(p, c + 18, c + 33);
  R(n, l, p);
  b[g] = b[n];
  o[g] = o[n];
  b[g + 1] = b[n + 1];
  o[g + 1] = o[n + 1];
  l = c + 31;
  C(q, c + 20, c + 35);
  R(t, m, q);
  b[l] = b[t];
  o[l] = o[t];
  b[l + 1] = b[t + 1];
  o[l + 1] = o[t + 1];
  m = o[c + 37];
  t = o[c + 38];
  q = o[c + 39];
  l = o[c + 40];
  o[e] = m + t + q * o[c + 30] * o[c + 30] + l * o[c + 32] * o[c + 32];
  o[e + 1] = -q * o[c + 29] * o[c + 30] - l * o[c + 31] * o[c + 32];
  o[e + 2] = o[e + 1];
  o[e + 3] = m + t + q * o[c + 29] * o[c + 29] + l * o[c + 31] * o[c + 31];
  n = c + 41;
  Nl(s, e);
  b[n] = b[s];
  o[n] = o[s];
  b[n + 1] = b[s + 1];
  o[n + 1] = o[s + 1];
  b[n + 2] = b[s + 2];
  o[n + 2] = o[s + 2];
  b[n + 3] = b[s + 3];
  o[n + 3] = o[s + 3];
  o[c + 45] = q + l;
  e = o[c + 45] > 0 ? 1 : 2;
  e == 1 && (o[c + 45] = 1 / o[c + 45]);
  s = c + 22;
  e = b[f + 5] & 1 ? 3 : 4;
  e == 3 ? (Th(s, o[f + 2]), o[c + 24] *= o[f + 2], mc(u, o[c + 22], o[c + 23]), K(x, m, u), Ie(d, x), i -= q * (Q(c + 29, u) + o[c + 24]), K(v, t, u), Lb(j, v), k += l * (Q(c + 31, u) + o[c + 24])) : e == 4 && (ac(s), o[c + 24] = 0);
  u = b[f + 7] + b[c + 27] * 3;
  b[u] = b[d];
  o[u] = o[d];
  b[u + 1] = b[d + 1];
  o[u + 1] = o[d + 1];
  o[b[f + 7] + b[c + 27] * 3 + 2] = i;
  u = b[f + 7] + b[c + 28] * 3;
  b[u] = b[j];
  o[u] = o[j];
  b[u + 1] = b[j + 1];
  o[u + 1] = o[j + 1];
  o[b[f + 7] + b[c + 28] * 3 + 2] = k;
  a = d;
}

Lm.X = 1;

function Mm(c, f) {
  var d = a;
  a += 26;
  var e, g = d + 2, i, h, j, k, l, m, n, p, t, q = d + 4, s = d + 6, u = d + 8, x = d + 10, v = d + 12, y = d + 14, z = d + 16, B = d + 18, E = d + 20, D = d + 22, H = d + 24;
  e = b[f + 7] + b[c + 27] * 3;
  b[d] = b[e];
  o[d] = o[e];
  b[d + 1] = b[e + 1];
  o[d + 1] = o[e + 1];
  e = o[b[f + 7] + b[c + 27] * 3 + 2];
  i = b[f + 7] + b[c + 28] * 3;
  b[g] = b[i];
  o[g] = o[i];
  b[g + 1] = b[i + 1];
  o[g + 1] = o[i + 1];
  i = o[b[f + 7] + b[c + 28] * 3 + 2];
  h = o[c + 37];
  j = o[c + 38];
  k = o[c + 39];
  l = o[c + 40];
  m = o[f];
  n = -o[c + 45] * (i - e);
  p = o[c + 24];
  t = m * o[c + 26];
  o[c + 24] = Yj(o[c + 24] + n, -t, t);
  n = o[c + 24] - p;
  e -= k * n;
  i += l * n;
  Ae(x, i, c + 31);
  N(u, g, x);
  C(s, u, d);
  Ae(v, e, c + 29);
  C(q, s, v);
  Ol(z, c + 41, q);
  Nd(y, z);
  q = c + 22;
  b[B] = b[q];
  o[B] = o[q];
  b[B + 1] = b[q + 1];
  o[B + 1] = o[q + 1];
  Lb(c + 22, y);
  q = m * o[c + 25];
  if ((te(c + 22) > q * q ? 1 : 2) == 1) Vc(c + 22), Th(c + 22, q);
  C(E, c + 22, B);
  b[y] = b[E];
  o[y] = o[E];
  b[y + 1] = b[E + 1];
  o[y + 1] = o[E + 1];
  K(D, h, y);
  Ie(d, D);
  e -= k * Q(c + 29, y);
  K(H, j, y);
  Lb(g, H);
  i += l * Q(c + 31, y);
  y = b[f + 7] + b[c + 27] * 3;
  b[y] = b[d];
  o[y] = o[d];
  b[y + 1] = b[d + 1];
  o[y + 1] = o[d + 1];
  o[b[f + 7] + b[c + 27] * 3 + 2] = e;
  e = b[f + 7] + b[c + 28] * 3;
  b[e] = b[g];
  o[e] = o[g];
  b[e + 1] = b[g + 1];
  o[e + 1] = o[g + 1];
  o[b[f + 7] + b[c + 28] * 3 + 2] = i;
  a = d;
}

Mm.X = 1;

function Nm(c, f) {
  var d = a;
  a += 40;
  var e, g, i, h, j = d + 4, k, l = d + 8, m = d + 10, n = d + 12, p = d + 14, t = d + 16, q = d + 18, s = d + 20, u = d + 24, x = d + 28, v = d + 30, y = d + 32, z = d + 34, B = d + 36, E = d + 38;
  am(c, f);
  b[c] = Om + 2;
  b[c + 18] = b[f + 5];
  b[c + 19] = b[f + 6];
  b[c + 20] = b[b[c + 18] + 1];
  b[c + 21] = b[b[c + 19] + 1];
  e = b[c + 20] == 1 ? 5 : 3;
  e == 3 && (b[c + 20] == 2 || O(Pm, 53, Qm, Rm));
  e = b[c + 21] == 1 ? 8 : 6;
  e == 6 && (b[c + 21] == 2 || O(Pm, 54, Qm, Sm));
  b[c + 22] = b[b[c + 18] + 12];
  b[c + 12] = b[b[c + 18] + 13];
  var D = b[c + 12] + 3;
  b[d] = b[D];
  o[d] = o[D];
  b[d + 1] = b[D + 1];
  o[d + 1] = o[D + 1];
  b[d + 2] = b[D + 2];
  o[d + 2] = o[D + 2];
  b[d + 3] = b[D + 3];
  o[d + 3] = o[D + 3];
  h = o[b[c + 12] + 14];
  D = b[c + 22] + 3;
  b[j] = b[D];
  o[j] = o[D];
  b[j + 1] = b[D + 1];
  o[j + 1] = o[D + 1];
  b[j + 2] = b[D + 2];
  o[j + 2] = o[D + 2];
  b[j + 3] = b[D + 3];
  o[j + 3] = o[D + 3];
  k = o[b[c + 22] + 14];
  D = b[f + 5];
  e = b[c + 20] == 1 ? 11 : 13;
  e == 11 ? (g = c + 28, j = D + 18, b[g] = b[j], o[g] = o[j], b[g + 1] = b[j + 1], o[g + 1] = o[j + 1], g = c + 24, j = D + 20, b[g] = b[j], o[g] = o[j], b[g + 1] = b[j + 1], o[g + 1] = o[j + 1], o[c + 36] = o[D + 30], ac(c + 32), g = h - k - o[c + 36]) : e == 13 && (g = c + 28, h = D + 18, b[g] = b[h], o[g] = o[h], b[g + 1] = b[h + 1], o[g + 1] = o[h + 1], g = c + 24, h = D + 20, b[g] = b[h], o[g] = o[h], b[g + 1] = b[h + 1], o[g + 1] = o[h + 1], o[c + 36] = o[D + 26], g = c + 32, D += 22, b[g] = b[D], o[g] = o[D], b[g + 1] = b[D + 1], o[g + 1] = o[D + 1], g = c + 28, b[l] = b[g], o[l] = o[g], b[l + 1] = b[g + 1], o[l + 1] = o[g + 1], g = j + 2, R(p, d + 2, c + 24), C(t, d, j), N(n, p, t), Md(m, g, n), C(q, m, l), g = J(q, c + 32));
  b[c + 23] = b[b[c + 19] + 12];
  b[c + 13] = b[b[c + 19] + 13];
  j = b[c + 13] + 3;
  b[s] = b[j];
  o[s] = o[j];
  b[s + 1] = b[j + 1];
  o[s + 1] = o[j + 1];
  b[s + 2] = b[j + 2];
  o[s + 2] = o[j + 2];
  b[s + 3] = b[j + 3];
  o[s + 3] = o[j + 3];
  l = o[b[c + 13] + 14];
  j = b[c + 23] + 3;
  b[u] = b[j];
  o[u] = o[j];
  b[u + 1] = b[j + 1];
  o[u + 1] = o[j + 1];
  b[u + 2] = b[j + 2];
  o[u + 2] = o[j + 2];
  b[u + 3] = b[j + 3];
  o[u + 3] = o[j + 3];
  m = o[b[c + 23] + 14];
  j = b[f + 6];
  e = b[c + 21] == 1 ? 17 : 18;
  e == 17 ? (s = c + 30, u = j + 18, b[s] = b[u], o[s] = o[u], b[s + 1] = b[u + 1], o[s + 1] = o[u + 1], s = c + 26, u = j + 20, b[s] = b[u], o[s] = o[u], b[s + 1] = b[u + 1], o[s + 1] = o[u + 1], o[c + 37] = o[j + 30], ac(c + 34), i = l - m - o[c + 37]) : e == 18 && (i = c + 30, l = j + 18, b[i] = b[l], o[i] = o[l], b[i + 1] = b[l + 1], o[i + 1] = o[l + 1], i = c + 26, l = j + 20, b[i] = b[l], o[i] = o[l], b[i + 1] = b[l + 1], o[i + 1] = o[l + 1], o[c + 37] = o[j + 26], i = c + 34, j += 22, b[i] = b[j], o[i] = o[j], b[i + 1] = b[j + 1], o[i + 1] = o[j + 1], i = c + 30, b[x] = b[i], o[x] = o[i], b[x + 1] = b[i + 1], o[x + 1] = o[i + 1], i = u + 2, R(z, s + 2, c + 26), C(B, s, u), N(y, z, B), Md(v, i, y), C(E, v, x), i = J(E, c + 34));
  o[c + 39] = o[f + 7];
  o[c + 38] = g + o[c + 39] * i;
  o[c + 40] = 0;
  a = d;
}

Nm.X = 1;

function Tm(c, f) {
  var d = a;
  a += 54;
  var e, g = d + 2, i, h = d + 4, j, k = d + 6, l = d + 8, m, n = d + 10, p = d + 12, t, q = d + 14, s = d + 16, u = d + 18, x = d + 20, v = d + 22, y = d + 24, z = d + 26, B = d + 28, E = d + 30, D = d + 32, H = d + 34, I = d + 36, M = d + 38, G = d + 40, S = d + 42, P = d + 44, L = d + 46, T = d + 48, F = d + 50, X = d + 52;
  b[c + 41] = b[b[c + 12] + 2];
  b[c + 42] = b[b[c + 13] + 2];
  b[c + 43] = b[b[c + 22] + 2];
  b[c + 44] = b[b[c + 23] + 2];
  i = c + 45;
  e = b[c + 12] + 7;
  b[i] = b[e];
  o[i] = o[e];
  b[i + 1] = b[e + 1];
  o[i + 1] = o[e + 1];
  i = c + 47;
  e = b[c + 13] + 7;
  b[i] = b[e];
  o[i] = o[e];
  b[i + 1] = b[e + 1];
  o[i + 1] = o[e + 1];
  i = c + 49;
  e = b[c + 22] + 7;
  b[i] = b[e];
  o[i] = o[e];
  b[i + 1] = b[e + 1];
  o[i + 1] = o[e + 1];
  i = c + 51;
  e = b[c + 23] + 7;
  b[i] = b[e];
  o[i] = o[e];
  b[i + 1] = b[e + 1];
  o[i + 1] = o[e + 1];
  o[c + 53] = o[b[c + 12] + 30];
  o[c + 54] = o[b[c + 13] + 30];
  o[c + 55] = o[b[c + 22] + 30];
  o[c + 56] = o[b[c + 23] + 30];
  o[c + 57] = o[b[c + 12] + 32];
  o[c + 58] = o[b[c + 13] + 32];
  o[c + 59] = o[b[c + 22] + 32];
  o[c + 60] = o[b[c + 23] + 32];
  i = b[f + 6] + b[c + 41] * 3;
  b[d] = b[i];
  o[d] = o[i];
  b[d + 1] = b[i + 1];
  o[d + 1] = o[i + 1];
  e = o[b[f + 6] + b[c + 41] * 3 + 2];
  i = b[f + 7] + b[c + 41] * 3;
  b[g] = b[i];
  o[g] = o[i];
  b[g + 1] = b[i + 1];
  o[g + 1] = o[i + 1];
  i = o[b[f + 7] + b[c + 41] * 3 + 2];
  j = b[f + 6] + b[c + 42] * 3;
  b[h] = b[j];
  o[h] = o[j];
  b[h + 1] = b[j + 1];
  o[h + 1] = o[j + 1];
  j = o[b[f + 6] + b[c + 42] * 3 + 2];
  h = b[f + 7] + b[c + 42] * 3;
  b[k] = b[h];
  o[k] = o[h];
  b[k + 1] = b[h + 1];
  o[k + 1] = o[h + 1];
  h = o[b[f + 7] + b[c + 42] * 3 + 2];
  m = b[f + 6] + b[c + 43] * 3;
  b[l] = b[m];
  o[l] = o[m];
  b[l + 1] = b[m + 1];
  o[l + 1] = o[m + 1];
  m = o[b[f + 6] + b[c + 43] * 3 + 2];
  l = b[f + 7] + b[c + 43] * 3;
  b[n] = b[l];
  o[n] = o[l];
  b[n + 1] = b[l + 1];
  o[n + 1] = o[l + 1];
  l = o[b[f + 7] + b[c + 43] * 3 + 2];
  t = b[f + 6] + b[c + 44] * 3;
  b[p] = b[t];
  o[p] = o[t];
  b[p + 1] = b[t + 1];
  o[p + 1] = o[t + 1];
  t = o[b[f + 6] + b[c + 44] * 3 + 2];
  p = b[f + 7] + b[c + 44] * 3;
  b[q] = b[p];
  o[q] = o[p];
  b[q + 1] = b[p + 1];
  o[q + 1] = o[p + 1];
  p = o[b[f + 7] + b[c + 44] * 3 + 2];
  Cm(s, e);
  Cm(u, j);
  Cm(x, m);
  Cm(v, t);
  o[c + 69] = 0;
  e = b[c + 20] == 1 ? 1 : 2;
  e == 1 ? (ac(c + 61), o[c + 65] = 1, o[c + 67] = 1, o[c + 69] += o[c + 57] + o[c + 59]) : e == 2 && (R(y, x, c + 32), C(B, c + 28, c + 49), R(z, x, B), C(D, c + 24, c + 45), R(E, s, D), s = c + 61, b[s] = b[y], o[s] = o[y], b[s + 1] = b[y + 1], o[s + 1] = o[y + 1], o[c + 67] = Q(z, y), o[c + 65] = Q(E, y), o[c + 69] += o[c + 55] + o[c + 53] + o[c + 59] * o[c + 67] * o[c + 67] + o[c + 57] * o[c + 65] * o[c + 65]);
  e = b[c + 21] == 1 ? 4 : 5;
  e == 4 ? (ac(c + 63), o[c + 66] = o[c + 39], o[c + 68] = o[c + 39], o[c + 69] += o[c + 39] * o[c + 39] * (o[c + 58] + o[c + 60])) : e == 5 && (R(H, v, c + 34), C(M, c + 30, c + 51), R(I, v, M), C(S, c + 26, c + 47), R(G, u, S), u = c + 63, K(P, o[c + 39], H), b[u] = b[P], o[u] = o[P], b[u + 1] = b[P + 1], o[u + 1] = o[P + 1], o[c + 68] = o[c + 39] * Q(I, H), o[c + 66] = o[c + 39] * Q(G, H), o[c + 69] += o[c + 39] * o[c + 39] * (o[c + 56] + o[c + 54]) + o[c + 60] * o[c + 68] * o[c + 68] + o[c + 58] * o[c + 66] * o[c + 66]);
  if (o[c + 69] > 0) e = 7; else {
    var Z = 0;
    e = 8;
  }
  e == 7 && (Z = 1 / o[c + 69]);
  o[c + 69] = Z;
  e = b[f + 5] & 1 ? 9 : 10;
  e == 9 ? (K(L, o[c + 53] * o[c + 40], c + 61), Lb(g, L), i += o[c + 57] * o[c + 40] * o[c + 65], K(T, o[c + 54] * o[c + 40], c + 63), Lb(k, T), h += o[c + 58] * o[c + 40] * o[c + 66], K(F, o[c + 55] * o[c + 40], c + 61), Ie(n, F), l -= o[c + 59] * o[c + 40] * o[c + 67], K(X, o[c + 56] * o[c + 40], c + 63), Ie(q, X), p -= o[c + 60] * o[c + 40] * o[c + 68]) : e == 10 && (o[c + 40] = 0);
  H = b[f + 7] + b[c + 41] * 3;
  b[H] = b[g];
  o[H] = o[g];
  b[H + 1] = b[g + 1];
  o[H + 1] = o[g + 1];
  o[b[f + 7] + b[c + 41] * 3 + 2] = i;
  g = b[f + 7] + b[c + 42] * 3;
  b[g] = b[k];
  o[g] = o[k];
  b[g + 1] = b[k + 1];
  o[g + 1] = o[k + 1];
  o[b[f + 7] + b[c + 42] * 3 + 2] = h;
  k = b[f + 7] + b[c + 43] * 3;
  b[k] = b[n];
  o[k] = o[n];
  b[k + 1] = b[n + 1];
  o[k + 1] = o[n + 1];
  o[b[f + 7] + b[c + 43] * 3 + 2] = l;
  n = b[f + 7] + b[c + 44] * 3;
  b[n] = b[q];
  o[n] = o[q];
  b[n + 1] = b[q + 1];
  o[n + 1] = o[q + 1];
  o[b[f + 7] + b[c + 44] * 3 + 2] = p;
  a = d;
}

Tm.X = 1;

function Um(c, f) {
  var d = a;
  a += 20;
  var e, g = d + 2, i, h = d + 4, j, k = d + 6, l, m, n = d + 8;
  m = d + 10;
  var p = d + 12, t = d + 14, q = d + 16, s = d + 18;
  e = b[f + 7] + b[c + 41] * 3;
  b[d] = b[e];
  o[d] = o[e];
  b[d + 1] = b[e + 1];
  o[d + 1] = o[e + 1];
  e = o[b[f + 7] + b[c + 41] * 3 + 2];
  i = b[f + 7] + b[c + 42] * 3;
  b[g] = b[i];
  o[g] = o[i];
  b[g + 1] = b[i + 1];
  o[g + 1] = o[i + 1];
  i = o[b[f + 7] + b[c + 42] * 3 + 2];
  j = b[f + 7] + b[c + 43] * 3;
  b[h] = b[j];
  o[h] = o[j];
  b[h + 1] = b[j + 1];
  o[h + 1] = o[j + 1];
  j = o[b[f + 7] + b[c + 43] * 3 + 2];
  l = b[f + 7] + b[c + 44] * 3;
  b[k] = b[l];
  o[k] = o[l];
  b[k + 1] = b[l + 1];
  o[k + 1] = o[l + 1];
  l = o[b[f + 7] + b[c + 44] * 3 + 2];
  var u = c + 61;
  C(n, d, h);
  n = J(u, n);
  u = c + 63;
  C(m, g, k);
  m = n + J(u, m);
  m += o[c + 65] * e - o[c + 67] * j + (o[c + 66] * i - o[c + 68] * l);
  m *= -o[c + 69];
  o[c + 40] += m;
  K(p, o[c + 53] * m, c + 61);
  Lb(d, p);
  e += o[c + 57] * m * o[c + 65];
  K(t, o[c + 54] * m, c + 63);
  Lb(g, t);
  i += o[c + 58] * m * o[c + 66];
  K(q, o[c + 55] * m, c + 61);
  Ie(h, q);
  j -= o[c + 59] * m * o[c + 67];
  K(s, o[c + 56] * m, c + 63);
  Ie(k, s);
  l -= o[c + 60] * m * o[c + 68];
  p = b[f + 7] + b[c + 41] * 3;
  b[p] = b[d];
  o[p] = o[d];
  b[p + 1] = b[d + 1];
  o[p + 1] = o[d + 1];
  o[b[f + 7] + b[c + 41] * 3 + 2] = e;
  e = b[f + 7] + b[c + 42] * 3;
  b[e] = b[g];
  o[e] = o[g];
  b[e + 1] = b[g + 1];
  o[e + 1] = o[g + 1];
  o[b[f + 7] + b[c + 42] * 3 + 2] = i;
  g = b[f + 7] + b[c + 43] * 3;
  b[g] = b[h];
  o[g] = o[h];
  b[g + 1] = b[h + 1];
  o[g + 1] = o[h + 1];
  o[b[f + 7] + b[c + 43] * 3 + 2] = j;
  h = b[f + 7] + b[c + 44] * 3;
  b[h] = b[k];
  o[h] = o[k];
  b[h + 1] = b[k + 1];
  o[h + 1] = o[k + 1];
  o[b[f + 7] + b[c + 44] * 3 + 2] = l;
  a = d;
}

Um.X = 1;

function Vm(c) {
  var f, d, e, g;
  f = b[b[c + 12] + 2];
  d = b[b[c + 13] + 2];
  e = b[b[c + 18] + 14];
  g = b[b[c + 19] + 14];
  U(Wm, A(1, "i32", r));
  U(sm, A([ f ], "i32", r));
  U(tm, A([ d ], "i32", r));
  U(um, A([ b[c + 16] & 1 ], "i32", r));
  U(Xm, A([ e ], "i32", r));
  U(Ym, A([ g ], "i32", r));
  U(Zm, A([ o[c + 39] ], "double", r));
  U(Am, A([ b[c + 14] ], "i32", r));
}

Vm.X = 1;

function $m(c, f) {
  var d = a;
  a += 70;
  var e, g, i = d + 2, h, j = d + 4, k, l = d + 6, m, n = d + 8, p = d + 10, t = d + 12, q = d + 14, s, u, x = d + 16, v = d + 18, y, z, B, E, D, H = d + 20, I = d + 22, M = d + 24, G = d + 26, S = d + 28, P = d + 30, L = d + 32, T = d + 34, F = d + 36, X = d + 38, Z = d + 40, V = d + 42, aa = d + 44, ja = d + 46, Y = d + 48, W = d + 50, $ = d + 52, fa = d + 54, la = d + 56, ga = d + 58, ka = d + 60, oa = d + 62, ta = d + 64, Aa = d + 66, Ha = d + 68;
  g = b[f + 6] + b[c + 41] * 3;
  b[d] = b[g];
  o[d] = o[g];
  b[d + 1] = b[g + 1];
  o[d + 1] = o[g + 1];
  g = o[b[f + 6] + b[c + 41] * 3 + 2];
  h = b[f + 6] + b[c + 42] * 3;
  b[i] = b[h];
  o[i] = o[h];
  b[i + 1] = b[h + 1];
  o[i + 1] = o[h + 1];
  h = o[b[f + 6] + b[c + 42] * 3 + 2];
  k = b[f + 6] + b[c + 43] * 3;
  b[j] = b[k];
  o[j] = o[k];
  b[j + 1] = b[k + 1];
  o[j + 1] = o[k + 1];
  k = o[b[f + 6] + b[c + 43] * 3 + 2];
  m = b[f + 6] + b[c + 44] * 3;
  b[l] = b[m];
  o[l] = o[m];
  b[l + 1] = b[m + 1];
  o[l + 1] = o[m + 1];
  m = o[b[f + 6] + b[c + 44] * 3 + 2];
  Cm(n, g);
  Cm(p, h);
  Cm(t, k);
  Cm(q, m);
  D = 0;
  e = b[c + 20] == 1 ? 1 : 2;
  e == 1 ? (ac(x), B = y = 1, D += o[c + 57] + o[c + 59], s = g - k - o[c + 36]) : e == 2 && (R(H, t, c + 32), C(M, c + 28, c + 49), R(I, t, M), C(S, c + 24, c + 45), R(G, n, S), b[x] = b[H], o[x] = o[H], b[x + 1] = b[H + 1], o[x + 1] = o[H + 1], B = Q(I, H), y = Q(G, H), D += o[c + 55] + o[c + 53] + o[c + 59] * B * B + o[c + 57] * y * y, C(P, c + 28, c + 49), C(F, d, j), N(T, G, F), Md(L, t, T), C(X, L, P), s = J(X, c + 32));
  e = b[c + 21] == 1 ? 4 : 5;
  e == 4 ? (ac(v), z = o[c + 39], E = o[c + 39], D += o[c + 39] * o[c + 39] * (o[c + 58] + o[c + 60]), u = h - m - o[c + 37]) : e == 5 && (R(Z, q, c + 34), C(aa, c + 30, c + 51), R(V, q, aa), C(Y, c + 26, c + 47), R(ja, p, Y), K(W, o[c + 39], Z), b[v] = b[W], o[v] = o[W], b[v + 1] = b[W + 1], o[v + 1] = o[W + 1], E = o[c + 39] * Q(V, Z), z = o[c + 39] * Q(ja, Z), D += o[c + 39] * o[c + 39] * (o[c + 56] + o[c + 54]) + o[c + 60] * E * E + o[c + 58] * z * z, C($, c + 30, c + 51), C(ga, i, l), N(la, ja, ga), Md(fa, q, la), C(ka, fa, $), u = J(ka, c + 34));
  n = s + o[c + 39] * u - o[c + 38];
  p = 0;
  (D > 0 ? 7 : 8) == 7 && (p = -n / D);
  K(oa, o[c + 53] * p, x);
  Lb(d, oa);
  g += o[c + 57] * p * y;
  K(ta, o[c + 54] * p, v);
  Lb(i, ta);
  h += o[c + 58] * p * z;
  K(Aa, o[c + 55] * p, x);
  Ie(j, Aa);
  k -= o[c + 59] * p * B;
  K(Ha, o[c + 56] * p, v);
  Ie(l, Ha);
  m -= o[c + 60] * p * E;
  x = b[f + 6] + b[c + 41] * 3;
  b[x] = b[d];
  o[x] = o[d];
  b[x + 1] = b[d + 1];
  o[x + 1] = o[d + 1];
  o[b[f + 6] + b[c + 41] * 3 + 2] = g;
  g = b[f + 6] + b[c + 42] * 3;
  b[g] = b[i];
  o[g] = o[i];
  b[g + 1] = b[i + 1];
  o[g + 1] = o[i + 1];
  o[b[f + 6] + b[c + 42] * 3 + 2] = h;
  i = b[f + 6] + b[c + 43] * 3;
  b[i] = b[j];
  o[i] = o[j];
  b[i + 1] = b[j + 1];
  o[i + 1] = o[j + 1];
  o[b[f + 6] + b[c + 43] * 3 + 2] = k;
  j = b[f + 6] + b[c + 44] * 3;
  b[j] = b[l];
  o[j] = o[l];
  b[j + 1] = b[l + 1];
  o[j + 1] = o[l + 1];
  o[b[f + 6] + b[c + 44] * 3 + 2] = m;
  a = d;
  return !0;
}

$m.X = 1;

function am(c, f) {
  b[c] = an + 2;
  (b[f + 2] != b[f + 3] ? 2 : 1) == 1 && O(bn, 173, cn, dn);
  b[c + 1] = b[f];
  b[c + 2] = 0;
  b[c + 3] = 0;
  b[c + 12] = b[f + 2];
  b[c + 13] = b[f + 3];
  b[c + 14] = 0;
  b[c + 16] = b[f + 4] & 1;
  b[c + 15] = 0;
  b[c + 17] = b[f + 1];
  b[c + 5] = 0;
  b[c + 4] = 0;
  b[c + 6] = 0;
  b[c + 7] = 0;
  b[c + 9] = 0;
  b[c + 8] = 0;
  b[c + 10] = 0;
  b[c + 11] = 0;
}

am.X = 1;

function en(c, f) {
  var d = a;
  a += 2;
  var e;
  am(c, f);
  b[c] = fn + 2;
  e = Pi(f + 5) ? 2 : 1;
  e == 1 && O(gn, 34, hn, jn);
  e = vi(o[f + 7]) ? 3 : 4;
  e == 3 && (e = o[f + 7] >= 0 ? 5 : 4);
  e == 4 && O(gn, 35, hn, kn);
  e = vi(o[f + 8]) ? 6 : 7;
  e == 6 && (e = o[f + 8] >= 0 ? 8 : 7);
  e == 7 && O(gn, 36, hn, ln);
  e = vi(o[f + 9]) ? 9 : 10;
  e == 9 && (e = o[f + 9] >= 0 ? 11 : 10);
  e == 10 && O(gn, 37, hn, mn);
  e = c + 20;
  var g = f + 5;
  b[e] = b[g];
  o[e] = o[g];
  b[e + 1] = b[g + 1];
  o[e + 1] = o[g + 1];
  e = c + 18;
  Rc(d, b[c + 13] + 3, c + 20);
  b[e] = b[d];
  o[e] = o[d];
  b[e + 1] = b[d + 1];
  o[e + 1] = o[d + 1];
  o[c + 27] = o[f + 7];
  ac(c + 25);
  o[c + 22] = o[f + 8];
  o[c + 23] = o[f + 9];
  o[c + 24] = 0;
  o[c + 28] = 0;
  a = d;
}

en.X = 1;

function nn(c, f) {
  var d = a;
  a += 24;
  var e, g = d + 2, i, h = d + 4, j, k, l = d + 6, m = d + 8, n = d + 10, p = d + 14, t = d + 18, q = d + 20, s = d + 22;
  b[c + 30] = b[b[c + 13] + 2];
  i = c + 33;
  e = b[c + 13] + 7;
  b[i] = b[e];
  o[i] = o[e];
  b[i + 1] = b[e + 1];
  o[i + 1] = o[e + 1];
  o[c + 35] = o[b[c + 13] + 30];
  o[c + 36] = o[b[c + 13] + 32];
  i = b[f + 6] + b[c + 30] * 3;
  b[d] = b[i];
  o[d] = o[i];
  b[d + 1] = b[i + 1];
  o[d + 1] = o[i + 1];
  e = o[b[f + 6] + b[c + 30] * 3 + 2];
  i = b[f + 7] + b[c + 30] * 3;
  b[g] = b[i];
  o[g] = o[i];
  b[g + 1] = b[i + 1];
  o[g + 1] = o[i + 1];
  i = o[b[f + 7] + b[c + 30] * 3 + 2];
  Cm(h, e);
  j = o[b[c + 13] + 29];
  k = o[c + 22] * 6.2831854820251465;
  e = j * 2 * o[c + 23] * k;
  j = j * k * k;
  k = o[f];
  (e + k * j > 1.1920928955078125e-7 ? 2 : 1) == 1 && O(gn, 125, on, pn);
  o[c + 28] = k * (e + k * j);
  e = o[c + 28] != 0 ? 3 : 4;
  e == 3 && (o[c + 28] = 1 / o[c + 28]);
  o[c + 24] = k * j * o[c + 28];
  e = c + 31;
  C(m, c + 18, c + 33);
  R(l, h, m);
  b[e] = b[l];
  o[e] = o[l];
  b[e + 1] = b[l + 1];
  o[e + 1] = o[l + 1];
  o[n] = o[c + 35] + o[c + 36] * o[c + 32] * o[c + 32] + o[c + 28];
  o[n + 1] = -o[c + 36] * o[c + 31] * o[c + 32];
  o[n + 2] = o[n + 1];
  o[n + 3] = o[c + 35] + o[c + 36] * o[c + 31] * o[c + 31] + o[c + 28];
  h = c + 37;
  Nl(p, n);
  b[h] = b[p];
  o[h] = o[p];
  b[h + 1] = b[p + 1];
  o[h + 1] = o[p + 1];
  b[h + 2] = b[p + 2];
  o[h + 2] = o[p + 2];
  b[h + 3] = b[p + 3];
  o[h + 3] = o[p + 3];
  n = c + 41;
  N(q, d, c + 31);
  C(t, q, c + 20);
  b[n] = b[t];
  o[n] = o[t];
  b[n + 1] = b[t + 1];
  o[n + 1] = o[t + 1];
  Th(c + 41, o[c + 24]);
  i *= .9800000190734863;
  t = c + 25;
  e = b[f + 5] & 1 ? 5 : 6;
  e == 5 ? (Th(t, o[f + 2]), K(s, o[c + 35], c + 25), Lb(g, s), i += o[c + 36] * Q(c + 31, c + 25)) : e == 6 && ac(t);
  s = b[f + 7] + b[c + 30] * 3;
  b[s] = b[g];
  o[s] = o[g];
  b[s + 1] = b[g + 1];
  o[s + 1] = o[g + 1];
  o[b[f + 7] + b[c + 30] * 3 + 2] = i;
  a = d;
}

nn.X = 1;

function qn(c, f) {
  var d = a;
  a += 22;
  var e, g = d + 2, i = d + 4, h = d + 6, j = d + 8, k = d + 10, l = d + 12, m = d + 14, n = d + 16, p = d + 18, t = d + 20;
  e = b[f + 7] + b[c + 30] * 3;
  b[d] = b[e];
  o[d] = o[e];
  b[d + 1] = b[e + 1];
  o[d + 1] = o[e + 1];
  e = o[b[f + 7] + b[c + 30] * 3 + 2];
  Ae(i, e, c + 31);
  N(g, d, i);
  i = c + 37;
  N(k, g, c + 41);
  K(l, o[c + 28], c + 25);
  N(m, k, l);
  Nd(j, m);
  Ol(h, i, j);
  g = c + 25;
  b[n] = b[g];
  o[n] = o[g];
  b[n + 1] = b[g + 1];
  o[n + 1] = o[g + 1];
  Lb(c + 25, h);
  g = o[f] * o[c + 27];
  if ((te(c + 25) > g * g ? 1 : 2) == 1) j = c + 25, k = Wc(c + 25), Th(j, g / k);
  C(p, c + 25, n);
  b[h] = b[p];
  o[h] = o[p];
  b[h + 1] = b[p + 1];
  o[h + 1] = o[p + 1];
  K(t, o[c + 35], h);
  Lb(d, t);
  e += o[c + 36] * Q(c + 31, h);
  h = b[f + 7] + b[c + 30] * 3;
  b[h] = b[d];
  o[h] = o[d];
  b[h + 1] = b[d + 1];
  o[h + 1] = o[d + 1];
  o[b[f + 7] + b[c + 30] * 3 + 2] = e;
  a = d;
}

qn.X = 1;

function rn(c) {
  o[c] = 0;
  o[c + 1] = 0;
  o[c + 2] = 0;
}

function sn(c, f, d, e) {
  o[c] = f;
  o[c + 1] = d;
  o[c + 2] = e;
}

function tn(c, f) {
  o[c] *= f;
  o[c + 1] *= f;
  o[c + 2] *= f;
}

function un(c, f) {
  var d = a;
  a += 2;
  am(c, f);
  b[c] = vn + 2;
  var e = c + 18, g = f + 5;
  b[e] = b[g];
  o[e] = o[g];
  b[e + 1] = b[g + 1];
  o[e + 1] = o[g + 1];
  e = c + 20;
  g = f + 7;
  b[e] = b[g];
  o[e] = o[g];
  b[e + 1] = b[g + 1];
  o[e + 1] = o[g + 1];
  e = c + 22;
  g = f + 9;
  b[e] = b[g];
  o[e] = o[g];
  b[e + 1] = b[g + 1];
  o[e + 1] = o[g + 1];
  Vc(c + 22);
  e = c + 24;
  Ae(d, 1, c + 22);
  b[e] = b[d];
  o[e] = o[d];
  b[e + 1] = b[d + 1];
  o[e + 1] = o[d + 1];
  o[c + 26] = o[f + 11];
  rn(c + 27);
  o[c + 65] = 0;
  o[c + 30] = 0;
  o[c + 31] = o[f + 13];
  o[c + 32] = o[f + 14];
  o[c + 33] = o[f + 16];
  o[c + 34] = o[f + 17];
  b[c + 35] = b[f + 12] & 1;
  b[c + 36] = b[f + 15] & 1;
  b[c + 37] = 0;
  ac(c + 48);
  ac(c + 50);
  a = d;
}

un.X = 1;

function wn(c, f) {
  var d = a;
  a += 44;
  var e, g, i = d + 2, h, j = d + 4, k, l = d + 6, m, n = d + 8, p = d + 10, t = d + 12, q = d + 14, s = d + 16, u = d + 18, x = d + 20, v = d + 22, y = d + 24;
  e = d + 26;
  var z = d + 28, B = d + 30, E = d + 32, D = d + 34, H = d + 36, I = d + 38, M = d + 40, G = d + 42;
  b[c + 38] = b[b[c + 12] + 2];
  b[c + 39] = b[b[c + 13] + 2];
  h = c + 40;
  m = b[c + 12] + 7;
  b[h] = b[m];
  o[h] = o[m];
  b[h + 1] = b[m + 1];
  o[h + 1] = o[m + 1];
  h = c + 42;
  m = b[c + 13] + 7;
  b[h] = b[m];
  o[h] = o[m];
  b[h + 1] = b[m + 1];
  o[h + 1] = o[m + 1];
  o[c + 44] = o[b[c + 12] + 30];
  o[c + 45] = o[b[c + 13] + 30];
  o[c + 46] = o[b[c + 12] + 32];
  o[c + 47] = o[b[c + 13] + 32];
  h = b[f + 6] + b[c + 38] * 3;
  b[d] = b[h];
  o[d] = o[h];
  b[d + 1] = b[h + 1];
  o[d + 1] = o[h + 1];
  g = o[b[f + 6] + b[c + 38] * 3 + 2];
  h = b[f + 7] + b[c + 38] * 3;
  b[i] = b[h];
  o[i] = o[h];
  b[i + 1] = b[h + 1];
  o[i + 1] = o[h + 1];
  h = o[b[f + 7] + b[c + 38] * 3 + 2];
  m = b[f + 6] + b[c + 39] * 3;
  b[j] = b[m];
  o[j] = o[m];
  b[j + 1] = b[m + 1];
  o[j + 1] = o[m + 1];
  k = o[b[f + 6] + b[c + 39] * 3 + 2];
  m = b[f + 7] + b[c + 39] * 3;
  b[l] = b[m];
  o[l] = o[m];
  b[l + 1] = b[m + 1];
  o[l + 1] = o[m + 1];
  m = o[b[f + 7] + b[c + 39] * 3 + 2];
  Cm(n, g);
  Cm(p, k);
  C(q, c + 18, c + 40);
  R(t, n, q);
  C(u, c + 20, c + 42);
  R(s, p, u);
  C(y, j, d);
  N(v, y, s);
  C(x, v, t);
  j = o[c + 44];
  p = o[c + 45];
  q = o[c + 46];
  u = o[c + 47];
  v = c + 48;
  R(e, n, c + 22);
  b[v] = b[e];
  o[v] = o[e];
  b[v + 1] = b[e + 1];
  o[v + 1] = o[e + 1];
  N(z, x, t);
  o[c + 54] = Q(z, c + 48);
  o[c + 55] = Q(s, c + 48);
  o[c + 65] = j + p + q * o[c + 54] * o[c + 54] + u * o[c + 55] * o[c + 55];
  e = o[c + 65] > 0 ? 1 : 2;
  e == 1 && (o[c + 65] = 1 / o[c + 65]);
  e = c + 50;
  R(B, n, c + 24);
  b[e] = b[B];
  o[e] = o[B];
  b[e + 1] = b[B + 1];
  o[e + 1] = o[B + 1];
  N(E, x, t);
  o[c + 52] = Q(E, c + 50);
  o[c + 53] = Q(s, c + 50);
  n = j + p + q * o[c + 52] * o[c + 52] + u * o[c + 53] * o[c + 53];
  t = q * o[c + 52] + u * o[c + 53];
  s = q * o[c + 52] * o[c + 54] + u * o[c + 53] * o[c + 55];
  B = q + u;
  (q + u == 0 ? 3 : 4) == 3 && (B = 1);
  E = q * o[c + 54] + u * o[c + 55];
  e = j + p + q * o[c + 54] * o[c + 54] + u * o[c + 55] * o[c + 55];
  sn(c + 56, n, t, s);
  sn(c + 59, t, B, E);
  sn(c + 62, s, E, e);
  e = b[c + 35] & 1 ? 5 : 14;
  a : do if (e == 5) if (n = J(c + 48, x), e = ie(o[c + 32] - o[c + 31]) < .009999999776482582 ? 6 : 7, e == 6) b[c + 37] = 3; else {
    if (e == 7) if (e = n <= o[c + 31] ? 8 : 10, e == 8) {
      if (b[c + 37] == 1) break a;
      b[c + 37] = 1;
      o[c + 29] = 0;
    } else if (e == 10) if (t = c + 37, e = n >= o[c + 32] ? 11 : 13, e == 11) {
      if (b[t] == 2) break a;
      b[c + 37] = 2;
      o[c + 29] = 0;
    } else e == 13 && (b[t] = 0, o[c + 29] = 0);
  } else e == 14 && (b[c + 37] = 0, o[c + 29] = 0); while (0);
  e = (b[c + 36] & 1) == 0 ? 16 : 17;
  e == 16 && (o[c + 30] = 0);
  x = c + 27;
  e = b[f + 5] & 1 ? 18 : 19;
  e == 18 ? (tn(x, o[f + 2]), o[c + 30] *= o[f + 2], K(H, o[c + 27], c + 50), K(I, o[c + 30] + o[c + 29], c + 48), N(D, H, I), H = o[c + 27] * o[c + 52] + o[c + 28] + (o[c + 30] + o[c + 29]) * o[c + 54], I = o[c + 27] * o[c + 53] + o[c + 28] + (o[c + 30] + o[c + 29]) * o[c + 55], K(M, j, D), Ie(i, M), h -= q * H, K(G, p, D), Lb(l, G), m += u * I) : e == 19 && (rn(x), o[c + 30] = 0);
  D = b[f + 7] + b[c + 38] * 3;
  b[D] = b[i];
  o[D] = o[i];
  b[D + 1] = b[i + 1];
  o[D + 1] = o[i + 1];
  o[b[f + 7] + b[c + 38] * 3 + 2] = h;
  i = b[f + 7] + b[c + 39] * 3;
  b[i] = b[l];
  o[i] = o[l];
  b[i + 1] = b[l + 1];
  o[i + 1] = o[l + 1];
  o[b[f + 7] + b[c + 39] * 3 + 2] = m;
  a = d;
}

wn.X = 1;

function xn(c, f) {
  sn(c, -o[f], -o[f + 1], -o[f + 2]);
}

function yn(c, f) {
  o[c] += o[f];
  o[c + 1] += o[f + 1];
  o[c + 2] += o[f + 2];
}

function zn(c, f, d) {
  mc(c, o[f] * o[d] + o[f + 3] * o[d + 1], o[f + 1] * o[d] + o[f + 4] * o[d + 1]);
}

function An(c, f) {
  var d = a;
  a += 73;
  var e, g, i = d + 2, h, j, k, l, m, n;
  n = d + 4;
  var p, t = d + 6, q = d + 8, s = d + 10, u = d + 12, x = d + 14, v;
  v = d + 16;
  var y = d + 18, z = d + 21, B = d + 24, E = d + 27, D = d + 30, H = d + 32, I = d + 34, M = d + 36, G = d + 38, S = d + 40, P = d + 42, L = d + 44, T = d + 47, F = d + 49, X = d + 51, Z = d + 53, V = d + 55, aa = d + 57, ja = d + 59, Y = d + 61, W = d + 63, $ = d + 65, fa = d + 67, la = d + 69, ga = d + 71;
  g = b[f + 7] + b[c + 38] * 3;
  b[d] = b[g];
  o[d] = o[g];
  b[d + 1] = b[g + 1];
  o[d + 1] = o[g + 1];
  g = o[b[f + 7] + b[c + 38] * 3 + 2];
  h = b[f + 7] + b[c + 39] * 3;
  b[i] = b[h];
  o[i] = o[h];
  b[i + 1] = b[h + 1];
  o[i + 1] = o[h + 1];
  h = o[b[f + 7] + b[c + 39] * 3 + 2];
  j = o[c + 44];
  k = o[c + 45];
  l = o[c + 46];
  m = o[c + 47];
  e = b[c + 36] & 1 ? 1 : 3;
  e == 1 && b[c + 37] != 3 && (e = c + 48, C(n, i, d), n = J(e, n) + o[c + 55] * h - o[c + 54] * g, n = o[c + 65] * (o[c + 34] - n), e = o[c + 30], p = o[f] * o[c + 33], o[c + 30] = Yj(o[c + 30] + n, -p, p), n = o[c + 30] - e, K(t, n, c + 48), e = n * o[c + 54], n *= o[c + 55], K(q, j, t), Ie(d, q), g -= l * e, K(s, k, t), Lb(i, s), h += m * n);
  t = c + 50;
  C(x, i, d);
  o[u] = J(t, x) + o[c + 53] * h - o[c + 52] * g;
  o[u + 1] = h - g;
  e = b[c + 35] & 1 ? 4 : 10;
  e == 4 && (b[c + 37] == 0 ? e = 10 : (x = c + 48, C(v, i, d), v = J(x, v) + o[c + 55] * h - o[c + 54] * g, oi(y, o[u], o[u + 1], v), v = c + 27, b[z] = b[v], o[z] = o[v], b[z + 1] = b[v + 1], o[z + 1] = o[v + 1], b[z + 2] = b[v + 2], o[z + 2] = o[v + 2], v = c + 56, xn(E, y), ti(B, v, E), yn(c + 27, B), e = b[c + 37] == 1 ? 6 : 7, e == 6 ? o[c + 29] = o[c + 29] > 0 ? o[c + 29] : 0 : e == 7 && (b[c + 37] != 2 || (o[c + 29] = o[c + 29] < 0 ? o[c + 29] : 0)), Nd(H, u), y = o[c + 29] - o[z + 2], mc(M, o[c + 62], o[c + 63]), K(I, y, M), C(D, H, I), pi(S, c + 56, D), mc(P, o[z], o[z + 1]), N(G, S, P), o[c + 27] = o[G], o[c + 28] = o[G + 1], D = c + 27, oi(L, o[D] - o[z], o[D + 1] - o[z + 1], o[D + 2] - o[z + 2]), b[B] = b[L], o[B] = o[L], b[B + 1] = b[L + 1], o[B + 1] = o[L + 1], b[B + 2] = b[L + 2], o[B + 2] = o[L + 2], K(F, o[B], c + 50), K(X, o[B + 2], c + 48), N(T, F, X), z = o[B] * o[c + 52] + o[B + 1] + o[B + 2] * o[c + 54], B = o[B] * o[c + 53] + o[B + 1] + o[B + 2] * o[c + 55], K(Z, j, T), Ie(d, Z), g -= l * z, K(V, k, T), Lb(i, V), h += m * B, e = 13));
  a : do if (e == 10) {
    T = c + 56;
    Nd(ja, u);
    pi(aa, T, ja);
    o[c + 27] += o[aa];
    o[c + 28] += o[aa + 1];
    K(Y, o[aa], c + 50);
    T = o[aa] * o[c + 52] + o[aa + 1];
    Z = o[aa] * o[c + 53] + o[aa + 1];
    K(W, j, Y);
    Ie(d, W);
    g -= l * T;
    K($, k, Y);
    Lb(i, $);
    h += m * Z;
    T = fa;
    Z = u;
    b[T] = b[Z];
    o[T] = o[Z];
    b[T + 1] = b[Z + 1];
    o[T + 1] = o[Z + 1];
    T = c + 50;
    C(la, i, d);
    o[u] = J(T, la) + o[c + 53] * h - o[c + 52] * g;
    o[u + 1] = h - g;
    e = ie(o[u]) > .009999999776482582 ? 12 : 11;
    if (e == 11 && ie(o[u + 1]) <= .009999999776482582) break a;
    zn(ga, c + 56, aa);
    o[u] = o[u];
  } while (0);
  u = b[f + 7] + b[c + 38] * 3;
  b[u] = b[d];
  o[u] = o[d];
  b[u + 1] = b[d + 1];
  o[u + 1] = o[d + 1];
  o[b[f + 7] + b[c + 38] * 3 + 2] = g;
  g = b[f + 7] + b[c + 39] * 3;
  b[g] = b[i];
  o[g] = o[i];
  b[g + 1] = b[i + 1];
  o[g + 1] = o[i + 1];
  o[b[f + 7] + b[c + 39] * 3 + 2] = h;
  a = d;
}

An.X = 1;

function Bn(c, f, d) {
  var e, g, i, h;
  e = o[f];
  g = o[f + 2];
  i = o[f + 1];
  f = o[f + 3];
  h = e * f - g * i;
  if ((h != 0 ? 1 : 2) == 1) h = 1 / h;
  o[c] = h * (f * o[d] - g * o[d + 1]);
  o[c + 1] = h * (e * o[d + 1] - i * o[d]);
}

Bn.X = 1;

function Cn(c, f) {
  var d = a;
  a += 71;
  var e, g, i = d + 2, h, j = d + 4, k = d + 6, l, m, n, p, t = d + 8, q = d + 10, s = d + 12, u = d + 14, x = d + 16;
  e = d + 18;
  var v = d + 20, y = d + 22, z = d + 24, B = d + 26, E = d + 28, D = d + 30, H = d + 33, I, M, G, S = d + 35, P = d + 44, L = d + 47, T = d + 50;
  I = d + 53;
  M = d + 57;
  G = d + 59;
  var F = d + 61, X = d + 63, Z = d + 65, V = d + 67, aa = d + 69;
  g = b[f + 6] + b[c + 38] * 3;
  b[d] = b[g];
  o[d] = o[g];
  b[d + 1] = b[g + 1];
  o[d + 1] = o[g + 1];
  g = o[b[f + 6] + b[c + 38] * 3 + 2];
  h = b[f + 6] + b[c + 39] * 3;
  b[i] = b[h];
  o[i] = o[h];
  b[i + 1] = b[h + 1];
  o[i + 1] = o[h + 1];
  h = o[b[f + 6] + b[c + 39] * 3 + 2];
  Cm(j, g);
  Cm(k, h);
  l = o[c + 44];
  m = o[c + 45];
  n = o[c + 46];
  p = o[c + 47];
  C(q, c + 18, c + 40);
  R(t, j, q);
  C(u, c + 20, c + 42);
  R(s, k, u);
  N(v, i, s);
  C(e, v, d);
  C(x, e, t);
  R(y, j, c + 22);
  N(z, x, t);
  q = Q(z, y);
  k = Q(s, y);
  R(B, j, c + 24);
  N(E, x, t);
  t = Q(E, B);
  E = Q(s, B);
  o[H] = J(B, x);
  o[H + 1] = h - g - o[c + 26];
  s = ie(o[H]);
  j = ie(o[H + 1]);
  u = v = 0;
  e = b[c + 35] & 1 ? 1 : 7;
  a : do if (e == 1) {
    var ja = z = J(y, x);
    e = ie(o[c + 32] - o[c + 31]) < .009999999776482582 ? 2 : 3;
    if (e == 2) u = Yj(ja, -.20000000298023224, .20000000298023224), s = s > ie(z) ? s : ie(z), v = 1; else if (e == 3) {
      var Y = z;
      e = ja <= o[c + 31] ? 4 : 5;
      if (e == 4) u = Yj(Y - o[c + 31] + .004999999888241291, -.20000000298023224, 0), s = s > o[c + 31] - z ? s : o[c + 31] - z, v = 1; else if (e == 5) {
        if (!(Y >= o[c + 32])) break a;
        u = Yj(z - o[c + 32] - .004999999888241291, 0, .20000000298023224);
        s = s > z - o[c + 32] ? s : z - o[c + 32];
        v = 1;
      }
    }
  } while (0);
  x = l + m + n * t * t + p * E * E;
  e = v & 1 ? 8 : 11;
  e == 8 ? (I = n * t + p * E, M = n * t * q + p * E * k, G = n + p, (G == 0 ? 9 : 10) == 9 && (G = 1), e = n * q + p * k, v = l + m + n * q * q + p * k * k, sn(S, x, I, M), sn(S + 3, I, G, e), sn(S + 6, M, e, v), o[P] = o[H], o[P + 1] = o[H + 1], o[P + 2] = u, xn(T, P), ti(L, S, T), b[D] = b[L], o[D] = o[L], b[D + 1] = b[L + 1], o[D + 1] = o[L + 1], b[D + 2] = b[L + 2], o[D + 2] = o[L + 2]) : e == 11 && (S = n * t + p * E, P = n + p, (P == 0 ? 12 : 13) == 12 && (P = 1), lc(I, x, S), lc(I + 2, S, P), Nd(G, H), Bn(M, I, G), o[D] = o[M], o[D + 1] = o[M + 1], o[D + 2] = 0);
  K(X, o[D], B);
  K(Z, o[D + 2], y);
  N(F, X, Z);
  y = o[D] * t + o[D + 1] + o[D + 2] * q;
  D = o[D] * E + o[D + 1] + o[D + 2] * k;
  K(V, l, F);
  Ie(d, V);
  g -= n * y;
  K(aa, m, F);
  Lb(i, aa);
  h += p * D;
  F = b[f + 6] + b[c + 38] * 3;
  b[F] = b[d];
  o[F] = o[d];
  b[F + 1] = b[d + 1];
  o[F + 1] = o[d + 1];
  o[b[f + 6] + b[c + 38] * 3 + 2] = g;
  g = b[f + 6] + b[c + 39] * 3;
  b[g] = b[i];
  o[g] = o[i];
  b[g + 1] = b[i + 1];
  o[g + 1] = o[i + 1];
  o[b[f + 6] + b[c + 39] * 3 + 2] = h;
  if (s <= .004999999888241291) e = 15; else {
    var W = 0;
    e = 16;
  }
  e == 15 && (W = j <= .03490658849477768);
  a = d;
  return W;
}

Cn.X = 1;

function Dn(c) {
  var f, d;
  f = b[b[c + 12] + 2];
  d = b[b[c + 13] + 2];
  U(En, A(1, "i32", r));
  U(sm, A([ f ], "i32", r));
  U(tm, A([ d ], "i32", r));
  U(um, A([ b[c + 16] & 1 ], "i32", r));
  U(vm, A([ o[c + 18], o[c + 19] ], "double", r));
  U(wm, A([ o[c + 20], o[c + 21] ], "double", r));
  U(Fn, A([ o[c + 22], o[c + 23] ], "double", r));
  U(Gn, A([ o[c + 26] ], "double", r));
  U(Hn, A([ b[c + 35] & 1 ], "i32", r));
  U(In, A([ o[c + 31] ], "double", r));
  U(Jn, A([ o[c + 32] ], "double", r));
  U(Kn, A([ b[c + 36] & 1 ], "i32", r));
  U(Ln, A([ o[c + 34] ], "double", r));
  U(Mn, A([ o[c + 33] ], "double", r));
  U(Am, A([ b[c + 14] ], "i32", r));
}

Dn.X = 1;

function Nn(c, f) {
  am(c, f);
  b[c] = On + 2;
  var d = c + 18, e = f + 5;
  b[d] = b[e];
  o[d] = o[e];
  b[d + 1] = b[e + 1];
  o[d + 1] = o[e + 1];
  d = c + 20;
  e = f + 7;
  b[d] = b[e];
  o[d] = o[e];
  b[d + 1] = b[e + 1];
  o[d + 1] = o[e + 1];
  d = c + 24;
  e = f + 9;
  b[d] = b[e];
  o[d] = o[e];
  b[d + 1] = b[e + 1];
  o[d + 1] = o[e + 1];
  d = c + 26;
  e = f + 11;
  b[d] = b[e];
  o[d] = o[e];
  b[d + 1] = b[e + 1];
  o[d + 1] = o[e + 1];
  o[c + 22] = o[f + 13];
  o[c + 23] = o[f + 14];
  (o[f + 15] != 0 ? 2 : 1) == 1 && O(Pn, 65, Qn, Rn);
  o[c + 29] = o[f + 15];
  o[c + 28] = o[f + 13] + o[c + 29] * o[f + 14];
  o[c + 30] = 0;
}

Nn.X = 1;

function Sn(c, f) {
  var d = a;
  a += 36;
  var e, g, i = d + 2, h;
  e = d + 4;
  var j, k = d + 6, l, m = d + 8, n = d + 10, p = d + 12, t = d + 14, q = d + 16, s = d + 18, u = d + 20, x = d + 22, v = d + 24, y = d + 26, z = d + 28, B = d + 30, E = d + 32, D = d + 34;
  b[c + 31] = b[b[c + 12] + 2];
  b[c + 32] = b[b[c + 13] + 2];
  h = c + 41;
  l = b[c + 12] + 7;
  b[h] = b[l];
  o[h] = o[l];
  b[h + 1] = b[l + 1];
  o[h + 1] = o[l + 1];
  h = c + 43;
  l = b[c + 13] + 7;
  b[h] = b[l];
  o[h] = o[l];
  b[h + 1] = b[l + 1];
  o[h + 1] = o[l + 1];
  o[c + 45] = o[b[c + 12] + 30];
  o[c + 46] = o[b[c + 13] + 30];
  o[c + 47] = o[b[c + 12] + 32];
  o[c + 48] = o[b[c + 13] + 32];
  h = b[f + 6] + b[c + 31] * 3;
  b[d] = b[h];
  o[d] = o[h];
  b[d + 1] = b[h + 1];
  o[d + 1] = o[h + 1];
  g = o[b[f + 6] + b[c + 31] * 3 + 2];
  h = b[f + 7] + b[c + 31] * 3;
  b[i] = b[h];
  o[i] = o[h];
  b[i + 1] = b[h + 1];
  o[i + 1] = o[h + 1];
  h = o[b[f + 7] + b[c + 31] * 3 + 2];
  l = b[f + 6] + b[c + 32] * 3;
  b[e] = b[l];
  o[e] = o[l];
  b[e + 1] = b[l + 1];
  o[e + 1] = o[l + 1];
  j = o[b[f + 6] + b[c + 32] * 3 + 2];
  l = b[f + 7] + b[c + 32] * 3;
  b[k] = b[l];
  o[k] = o[l];
  b[k + 1] = b[l + 1];
  o[k + 1] = o[l + 1];
  l = o[b[f + 7] + b[c + 32] * 3 + 2];
  Cm(m, g);
  Cm(n, j);
  g = c + 37;
  C(t, c + 24, c + 41);
  R(p, m, t);
  b[g] = b[p];
  o[g] = o[p];
  b[g + 1] = b[p + 1];
  o[g + 1] = o[p + 1];
  m = c + 39;
  C(s, c + 26, c + 43);
  R(q, n, s);
  b[m] = b[q];
  o[m] = o[q];
  b[m + 1] = b[q + 1];
  o[m + 1] = o[q + 1];
  n = c + 33;
  N(x, d, c + 37);
  C(u, x, c + 18);
  b[n] = b[u];
  o[n] = o[u];
  b[n + 1] = b[u + 1];
  o[n + 1] = o[u + 1];
  u = c + 35;
  N(y, e, c + 39);
  C(v, y, c + 20);
  b[u] = b[v];
  o[u] = o[v];
  b[u + 1] = b[v + 1];
  o[u + 1] = o[v + 1];
  v = Wc(c + 33);
  y = Wc(c + 35);
  e = v > .04999999701976776 ? 1 : 2;
  e == 1 ? Th(c + 33, 1 / v) : e == 2 && ac(c + 33);
  e = y > .04999999701976776 ? 4 : 5;
  e == 4 ? Th(c + 35, 1 / y) : e == 5 && ac(c + 35);
  e = Q(c + 37, c + 33);
  v = Q(c + 39, c + 35);
  o[c + 49] = o[c + 45] + o[c + 47] * e * e + o[c + 29] * o[c + 29] * (o[c + 46] + o[c + 48] * v * v);
  e = o[c + 49] > 0 ? 7 : 8;
  e == 7 && (o[c + 49] = 1 / o[c + 49]);
  e = b[f + 5] & 1 ? 9 : 10;
  e == 9 ? (o[c + 30] *= o[f + 2], K(z, -o[c + 30], c + 33), K(B, -o[c + 29] * o[c + 30], c + 35), K(E, o[c + 45], z), Lb(i, E), h += o[c + 47] * Q(c + 37, z), K(D, o[c + 46], B), Lb(k, D), l += o[c + 48] * Q(c + 39, B)) : e == 10 && (o[c + 30] = 0);
  z = b[f + 7] + b[c + 31] * 3;
  b[z] = b[i];
  o[z] = o[i];
  b[z + 1] = b[i + 1];
  o[z + 1] = o[i + 1];
  o[b[f + 7] + b[c + 31] * 3 + 2] = h;
  i = b[f + 7] + b[c + 32] * 3;
  b[i] = b[k];
  o[i] = o[k];
  b[i + 1] = b[k + 1];
  o[i + 1] = o[k + 1];
  o[b[f + 7] + b[c + 32] * 3 + 2] = l;
  a = d;
}

Sn.X = 1;

function Tn(c, f) {
  var d = a;
  a += 20;
  var e, g = d + 2, i, h = d + 4, j = d + 6, k = d + 8, l = d + 10, m = d + 12, n = d + 14, p = d + 16, t = d + 18;
  e = b[f + 7] + b[c + 31] * 3;
  b[d] = b[e];
  o[d] = o[e];
  b[d + 1] = b[e + 1];
  o[d + 1] = o[e + 1];
  e = o[b[f + 7] + b[c + 31] * 3 + 2];
  i = b[f + 7] + b[c + 32] * 3;
  b[g] = b[i];
  o[g] = o[i];
  b[g + 1] = b[i + 1];
  o[g + 1] = o[i + 1];
  i = o[b[f + 7] + b[c + 32] * 3 + 2];
  Ae(j, e, c + 37);
  N(h, d, j);
  Ae(l, i, c + 39);
  N(k, g, l);
  h = -o[c + 49] * (-J(c + 33, h) - o[c + 29] * J(c + 35, k));
  o[c + 30] += h;
  K(m, -h, c + 33);
  K(n, -o[c + 29] * h, c + 35);
  K(p, o[c + 45], m);
  Lb(d, p);
  e += o[c + 47] * Q(c + 37, m);
  K(t, o[c + 46], n);
  Lb(g, t);
  i += o[c + 48] * Q(c + 39, n);
  m = b[f + 7] + b[c + 31] * 3;
  b[m] = b[d];
  o[m] = o[d];
  b[m + 1] = b[d + 1];
  o[m + 1] = o[d + 1];
  o[b[f + 7] + b[c + 31] * 3 + 2] = e;
  e = b[f + 7] + b[c + 32] * 3;
  b[e] = b[g];
  o[e] = o[g];
  b[e + 1] = b[g + 1];
  o[e + 1] = o[g + 1];
  o[b[f + 7] + b[c + 32] * 3 + 2] = i;
  a = d;
}

Tn.X = 1;

function Un(c) {
  var f, d;
  f = b[b[c + 12] + 2];
  d = b[b[c + 13] + 2];
  U(Vn, A(1, "i32", r));
  U(sm, A([ f ], "i32", r));
  U(tm, A([ d ], "i32", r));
  U(um, A([ b[c + 16] & 1 ], "i32", r));
  U(Wn, A([ o[c + 18], o[c + 19] ], "double", r));
  U(Xn, A([ o[c + 20], o[c + 21] ], "double", r));
  U(vm, A([ o[c + 24], o[c + 25] ], "double", r));
  U(wm, A([ o[c + 26], o[c + 27] ], "double", r));
  U(Yn, A([ o[c + 22] ], "double", r));
  U(Zn, A([ o[c + 23] ], "double", r));
  U(Zm, A([ o[c + 29] ], "double", r));
  U(Am, A([ b[c + 14] ], "i32", r));
}

Un.X = 1;

function $n(c, f) {
  am(c, f);
  b[c] = ao + 2;
  var d = c + 18, e = f + 5;
  b[d] = b[e];
  o[d] = o[e];
  b[d + 1] = b[e + 1];
  o[d + 1] = o[e + 1];
  d = c + 20;
  e = f + 7;
  b[d] = b[e];
  o[d] = o[e];
  b[d + 1] = b[e + 1];
  o[d + 1] = o[e + 1];
  o[c + 30] = o[f + 9];
  rn(c + 22);
  o[c + 25] = 0;
  o[c + 31] = o[f + 11];
  o[c + 32] = o[f + 12];
  o[c + 27] = o[f + 15];
  o[c + 28] = o[f + 14];
  b[c + 29] = b[f + 10] & 1;
  b[c + 26] = b[f + 13] & 1;
  b[c + 57] = 0;
}

$n.X = 1;

function bo(c, f) {
  var d = a;
  a += 32;
  var e, g, i = d + 2, h, j = d + 4, k = d + 6, l = d + 8, m = d + 10, n = d + 12;
  e = d + 14;
  var p = d + 16, t = d + 18, q = d + 20, s = d + 22, u = d + 24, x = d + 26, v = d + 28, y = d + 30;
  g = b[f + 6] + b[c + 31] * 3;
  b[d] = b[g];
  o[d] = o[g];
  b[d + 1] = b[g + 1];
  o[d + 1] = o[g + 1];
  g = o[b[f + 6] + b[c + 31] * 3 + 2];
  h = b[f + 6] + b[c + 32] * 3;
  b[i] = b[h];
  o[i] = o[h];
  b[i + 1] = b[h + 1];
  o[i + 1] = o[h + 1];
  h = o[b[f + 6] + b[c + 32] * 3 + 2];
  Cm(j, g);
  Cm(k, h);
  C(m, c + 24, c + 41);
  R(l, j, m);
  C(e, c + 26, c + 43);
  R(n, k, e);
  N(t, d, l);
  C(p, t, c + 18);
  N(s, i, n);
  C(q, s, c + 20);
  j = Wc(p);
  k = Wc(q);
  e = j > .04999999701976776 ? 1 : 2;
  e == 1 ? Th(p, 1 / j) : e == 2 && ac(p);
  e = k > .04999999701976776 ? 4 : 5;
  e == 4 ? Th(q, 1 / k) : e == 5 && ac(q);
  e = Q(l, p);
  m = Q(n, q);
  e = o[c + 45] + o[c + 47] * e * e;
  t = o[c + 46] + o[c + 48] * m * m;
  m = e + o[c + 29] * o[c + 29] * t;
  e = e + o[c + 29] * o[c + 29] * t > 0 ? 7 : 8;
  e == 7 && (m = 1 / m);
  k = o[c + 28] - j - o[c + 29] * k;
  j = ie(k);
  k *= -m;
  K(u, -k, p);
  K(x, -o[c + 29] * k, q);
  K(v, o[c + 45], u);
  Lb(d, v);
  g += o[c + 47] * Q(l, u);
  K(y, o[c + 46], x);
  Lb(i, y);
  h += o[c + 48] * Q(n, x);
  l = b[f + 6] + b[c + 31] * 3;
  b[l] = b[d];
  o[l] = o[d];
  b[l + 1] = b[d + 1];
  o[l + 1] = o[d + 1];
  o[b[f + 6] + b[c + 31] * 3 + 2] = g;
  g = b[f + 6] + b[c + 32] * 3;
  b[g] = b[i];
  o[g] = o[i];
  b[g + 1] = b[i + 1];
  o[g + 1] = o[i + 1];
  o[b[f + 6] + b[c + 32] * 3 + 2] = h;
  a = d;
  return j < .004999999888241291;
}

bo.X = 1;

function co(c, f) {
  var d = a;
  a += 26;
  var e, g, i = d + 2, h, j = d + 4, k, l = d + 6, m = d + 8;
  e = d + 10;
  var n = d + 12, p = d + 14, t = d + 16, q = d + 18, s, u = d + 20, x = d + 22, v = d + 24;
  b[c + 33] = b[b[c + 12] + 2];
  b[c + 34] = b[b[c + 13] + 2];
  h = c + 39;
  g = b[c + 12] + 7;
  b[h] = b[g];
  o[h] = o[g];
  b[h + 1] = b[g + 1];
  o[h + 1] = o[g + 1];
  h = c + 41;
  g = b[c + 13] + 7;
  b[h] = b[g];
  o[h] = o[g];
  b[h + 1] = b[g + 1];
  o[h + 1] = o[g + 1];
  o[c + 43] = o[b[c + 12] + 30];
  o[c + 44] = o[b[c + 13] + 30];
  o[c + 45] = o[b[c + 12] + 32];
  o[c + 46] = o[b[c + 13] + 32];
  h = b[f + 6] + b[c + 33] * 3;
  b[d] = b[h];
  o[d] = o[h];
  b[d + 1] = b[h + 1];
  o[d + 1] = o[h + 1];
  g = o[b[f + 6] + b[c + 33] * 3 + 2];
  h = b[f + 7] + b[c + 33] * 3;
  b[i] = b[h];
  o[i] = o[h];
  b[i + 1] = b[h + 1];
  o[i + 1] = o[h + 1];
  h = o[b[f + 7] + b[c + 33] * 3 + 2];
  k = b[f + 6] + b[c + 34] * 3;
  b[j] = b[k];
  o[j] = o[k];
  b[j + 1] = b[k + 1];
  o[j + 1] = o[k + 1];
  k = o[b[f + 6] + b[c + 34] * 3 + 2];
  j = b[f + 7] + b[c + 34] * 3;
  b[l] = b[j];
  o[l] = o[j];
  b[l + 1] = b[j + 1];
  o[l + 1] = o[j + 1];
  j = o[b[f + 7] + b[c + 34] * 3 + 2];
  Cm(m, g);
  Cm(e, k);
  s = c + 35;
  C(p, c + 18, c + 39);
  R(n, m, p);
  b[s] = b[n];
  o[s] = o[n];
  b[s + 1] = b[n + 1];
  o[s + 1] = o[n + 1];
  m = c + 37;
  C(q, c + 20, c + 41);
  R(t, e, q);
  b[m] = b[t];
  o[m] = o[t];
  b[m + 1] = b[t + 1];
  o[m + 1] = o[t + 1];
  t = o[c + 43];
  q = o[c + 44];
  m = o[c + 45];
  n = o[c + 46];
  p = m + n == 0;
  o[c + 47] = t + q + o[c + 36] * o[c + 36] * m + o[c + 38] * o[c + 38] * n;
  o[c + 50] = -o[c + 36] * o[c + 35] * m - o[c + 38] * o[c + 37] * n;
  o[c + 53] = -o[c + 36] * m - o[c + 38] * n;
  o[c + 48] = o[c + 50];
  o[c + 51] = t + q + o[c + 35] * o[c + 35] * m + o[c + 37] * o[c + 37] * n;
  o[c + 54] = o[c + 35] * m + o[c + 37] * n;
  o[c + 49] = o[c + 53];
  o[c + 52] = o[c + 54];
  o[c + 55] = m + n;
  o[c + 56] = m + n;
  e = o[c + 56] > 0 ? 1 : 2;
  e == 1 && (o[c + 56] = 1 / o[c + 56]);
  e = (b[c + 26] & 1) == 0 ? 4 : 3;
  e == 3 && (e = p & 1 ? 4 : 5);
  e == 4 && (o[c + 25] = 0);
  e = b[c + 29] & 1 ? 6 : 18;
  a : do if (e == 6) if ((p & 1) != 0) e = 18; else if (s = k - g - o[c + 30], e = ie(o[c + 32] - o[c + 31]) < .06981317698955536 ? 8 : 9, e == 8) {
    b[c + 57] = 3;
    e = 19;
    break a;
  } else if (e == 9) if (e = s <= o[c + 31] ? 10 : 13, e == 10) {
    e = b[c + 57] != 1 ? 11 : 12;
    e == 11 && (o[c + 24] = 0);
    b[c + 57] = 1;
    e = 19;
    break a;
  } else if (e == 13) {
    var y = c + 57;
    e = s >= o[c + 32] ? 14 : 17;
    if (e == 14) {
      e = b[y] != 2 ? 15 : 16;
      e == 15 && (o[c + 24] = 0);
      b[c + 57] = 2;
      e = 19;
      break a;
    } else if (e == 17) {
      b[y] = 0;
      o[c + 24] = 0;
      e = 19;
      break a;
    }
  } while (0);
  e == 18 && (b[c + 57] = 0);
  g = c + 22;
  e = b[f + 5] & 1 ? 20 : 21;
  e == 20 ? (tn(g, o[f + 2]), o[c + 25] *= o[f + 2], mc(u, o[c + 22], o[c + 23]), K(x, t, u), Ie(i, x), h -= m * (Q(c + 35, u) + o[c + 25] + o[c + 24]), K(v, q, u), Lb(l, v), j += n * (Q(c + 37, u) + o[c + 25] + o[c + 24])) : e == 21 && (rn(g), o[c + 25] = 0);
  u = b[f + 7] + b[c + 33] * 3;
  b[u] = b[i];
  o[u] = o[i];
  b[u + 1] = b[i + 1];
  o[u + 1] = o[i + 1];
  o[b[f + 7] + b[c + 33] * 3 + 2] = h;
  i = b[f + 7] + b[c + 34] * 3;
  b[i] = b[l];
  o[i] = o[l];
  b[i + 1] = b[l + 1];
  o[i + 1] = o[l + 1];
  o[b[f + 7] + b[c + 34] * 3 + 2] = j;
  a = d;
}

co.X = 1;

function eo(c, f) {
  var d = a;
  a += 67;
  var e, g, i = d + 2, h, j, k, l, m, n, p, t, q = d + 4, s = d + 6, u = d + 8, x = d + 10, v = d + 12, y = d + 14, z = d + 17, B = d + 20, E = d + 23, D = d + 25, H = d + 27, I = d + 29, M = d + 31, G = d + 33, S = d + 35, P = d + 37, L = d + 39, T = d + 41, F = d + 43, X = d + 45, Z = d + 47, V = d + 49, aa = d + 51, ja = d + 53, Y = d + 55, W = d + 57, $ = d + 59, fa = d + 61, la = d + 63, ga = d + 65;
  g = b[f + 7] + b[c + 33] * 3;
  b[d] = b[g];
  o[d] = o[g];
  b[d + 1] = b[g + 1];
  o[d + 1] = o[g + 1];
  g = o[b[f + 7] + b[c + 33] * 3 + 2];
  h = b[f + 7] + b[c + 34] * 3;
  b[i] = b[h];
  o[i] = o[h];
  b[i + 1] = b[h + 1];
  o[i + 1] = o[h + 1];
  h = o[b[f + 7] + b[c + 34] * 3 + 2];
  j = o[c + 43];
  k = o[c + 44];
  l = o[c + 45];
  m = o[c + 46];
  n = l + m == 0;
  e = b[c + 26] & 1 ? 1 : 4;
  e == 1 && b[c + 57] != 3 && (n & 1) == 0 && (e = h - g - o[c + 28], e *= -o[c + 56], p = o[c + 25], t = o[f] * o[c + 27], o[c + 25] = Yj(o[c + 25] + e, -t, t), e = o[c + 25] - p, g -= l * e, h += m * e);
  e = b[c + 29] & 1 ? 5 : 18;
  do if (e == 5) if (b[c + 57] == 0) e = 18; else if ((n & 1) != 0) e = 18; else {
    Ae(x, h, c + 37);
    N(u, i, x);
    C(s, u, d);
    Ae(v, g, c + 35);
    C(q, s, v);
    e = h - g;
    oi(y, o[q], o[q + 1], e);
    ti(B, c + 47, y);
    xn(z, B);
    e = b[c + 57] == 3 ? 8 : 9;
    a : do if (e == 8) yn(c + 22, z); else if (e == 9) if (e = b[c + 57] == 1 ? 10 : 13, e == 10) e = o[c + 24] + o[z + 2], e = e < 0 ? 11 : 12, e == 11 ? (Nd(D, q), p = o[c + 24], mc(I, o[c + 53], o[c + 54]), K(H, p, I), N(E, D, H), pi(M, c + 47, E), o[z] = o[M], o[z + 1] = o[M + 1], o[z + 2] = -o[c + 24], o[c + 22] += o[M], o[c + 23] += o[M + 1], o[c + 24] = 0) : e == 12 && yn(c + 22, z); else if (e == 13) {
      if (b[c + 57] != 2) break a;
      e = o[c + 24] + o[z + 2];
      e = e > 0 ? 15 : 16;
      e == 15 ? (Nd(S, q), p = o[c + 24], mc(L, o[c + 53], o[c + 54]), K(P, p, L), N(G, S, P), pi(T, c + 47, G), o[z] = o[T], o[z + 1] = o[T + 1], o[z + 2] = -o[c + 24], o[c + 22] += o[T], o[c + 23] += o[T + 1], o[c + 24] = 0) : e == 16 && yn(c + 22, z);
    } while (0);
    mc(F, o[z], o[z + 1]);
    K(X, j, F);
    Ie(d, X);
    g -= l * (Q(c + 35, F) + o[z + 2]);
    K(Z, k, F);
    Lb(i, Z);
    h += m * (Q(c + 37, F) + o[z + 2]);
    e = 19;
  } while (0);
  e == 18 && (Ae(Y, h, c + 37), N(ja, i, Y), C(aa, ja, d), Ae(W, g, c + 35), C(V, aa, W), q = c + 47, Nd(fa, V), pi($, q, fa), o[c + 22] += o[$], o[c + 23] += o[$ + 1], K(la, j, $), Ie(d, la), g -= l * Q(c + 35, $), K(ga, k, $), Lb(i, ga), h += m * Q(c + 37, $));
  V = b[f + 7] + b[c + 33] * 3;
  b[V] = b[d];
  o[V] = o[d];
  b[V + 1] = b[d + 1];
  o[V + 1] = o[d + 1];
  o[b[f + 7] + b[c + 33] * 3 + 2] = g;
  g = b[f + 7] + b[c + 34] * 3;
  b[g] = b[i];
  o[g] = o[i];
  b[g + 1] = b[i + 1];
  o[g + 1] = o[i + 1];
  o[b[f + 7] + b[c + 34] * 3 + 2] = h;
  a = d;
}

eo.X = 1;

function fo(c, f) {
  var d = a;
  a += 34;
  var e, g, i = d + 2, h, j = d + 4, k = d + 6, l, m, n, p, t = d + 8, q = d + 10, s = d + 12, u = d + 14, x = d + 16, v = d + 18, y = d + 20, z = d + 22, B = d + 26, E = d + 28, D = d + 30, H = d + 32;
  g = b[f + 6] + b[c + 33] * 3;
  b[d] = b[g];
  o[d] = o[g];
  b[d + 1] = b[g + 1];
  o[d + 1] = o[g + 1];
  g = o[b[f + 6] + b[c + 33] * 3 + 2];
  h = b[f + 6] + b[c + 34] * 3;
  b[i] = b[h];
  o[i] = o[h];
  b[i + 1] = b[h + 1];
  o[i + 1] = o[h + 1];
  h = o[b[f + 6] + b[c + 34] * 3 + 2];
  Cm(j, g);
  Cm(k, h);
  l = 0;
  m = o[c + 45] + o[c + 46] == 0;
  e = b[c + 29] & 1 ? 1 : 10;
  do if (e == 1) if (b[c + 57] == 0) e = 10; else if ((m & 1) != 0) e = 10; else {
    n = h - g - o[c + 30];
    p = 0;
    e = b[c + 57] == 3 ? 4 : 5;
    a : do if (e == 4) l = Yj(n - o[c + 31], -.13962635397911072, .13962635397911072), p = -o[c + 56] * l, l = ie(l); else if (e == 5) if (e = b[c + 57] == 1 ? 6 : 7, e == 6) p = n - o[c + 31], l = -p, p = Yj(p + .03490658849477768, -.13962635397911072, 0), p *= -o[c + 56]; else if (e == 7) {
      if (b[c + 57] != 2) {
        e = 9;
        break a;
      }
      l = p = n - o[c + 32];
      p = Yj(p - .03490658849477768, 0, .13962635397911072);
      p *= -o[c + 56];
    } while (0);
    g -= o[c + 45] * p;
    h += o[c + 46] * p;
  } while (0);
  ah(j, g);
  ah(k, h);
  C(q, c + 18, c + 39);
  R(t, j, q);
  C(u, c + 20, c + 41);
  R(s, k, u);
  N(y, i, s);
  C(v, y, d);
  C(x, v, t);
  j = Wc(x);
  k = o[c + 43];
  q = o[c + 44];
  u = o[c + 45];
  v = o[c + 46];
  o[z] = k + q + u * o[t + 1] * o[t + 1] + v * o[s + 1] * o[s + 1];
  o[z + 1] = -u * o[t] * o[t + 1] - v * o[s] * o[s + 1];
  o[z + 2] = o[z + 1];
  o[z + 3] = k + q + u * o[t] * o[t] + v * o[s] * o[s];
  Bn(E, z, x);
  Nd(B, E);
  K(D, k, B);
  Ie(d, D);
  g -= u * Q(t, B);
  K(H, q, B);
  Lb(i, H);
  h += v * Q(s, B);
  t = b[f + 6] + b[c + 33] * 3;
  b[t] = b[d];
  o[t] = o[d];
  b[t + 1] = b[d + 1];
  o[t + 1] = o[d + 1];
  o[b[f + 6] + b[c + 33] * 3 + 2] = g;
  g = b[f + 6] + b[c + 34] * 3;
  b[g] = b[i];
  o[g] = o[i];
  b[g + 1] = b[i + 1];
  o[g + 1] = o[i + 1];
  o[b[f + 6] + b[c + 34] * 3 + 2] = h;
  if (j <= .004999999888241291) e = 11; else {
    var I = 0;
    e = 12;
  }
  e == 11 && (I = l <= .03490658849477768);
  a = d;
  return I;
}

fo.X = 1;

function go(c) {
  var f, d;
  f = b[b[c + 12] + 2];
  d = b[b[c + 13] + 2];
  U(ho, A(1, "i32", r));
  U(sm, A([ f ], "i32", r));
  U(tm, A([ d ], "i32", r));
  U(um, A([ b[c + 16] & 1 ], "i32", r));
  U(vm, A([ o[c + 18], o[c + 19] ], "double", r));
  U(wm, A([ o[c + 20], o[c + 21] ], "double", r));
  U(Gn, A([ o[c + 30] ], "double", r));
  U(Hn, A([ b[c + 29] & 1 ], "i32", r));
  U(io, A([ o[c + 31] ], "double", r));
  U(jo, A([ o[c + 32] ], "double", r));
  U(Kn, A([ b[c + 26] & 1 ], "i32", r));
  U(Ln, A([ o[c + 28] ], "double", r));
  U(ko, A([ o[c + 27] ], "double", r));
  U(Am, A([ b[c + 14] ], "i32", r));
}

go.X = 1;

function lo(c, f) {
  am(c, f);
  b[c] = mo + 2;
  var d = c + 18, e = f + 5;
  b[d] = b[e];
  o[d] = o[e];
  b[d + 1] = b[e + 1];
  o[d + 1] = o[e + 1];
  d = c + 20;
  e = f + 7;
  b[d] = b[e];
  o[d] = o[e];
  b[d + 1] = b[e + 1];
  o[d + 1] = o[e + 1];
  o[c + 22] = o[f + 9];
  o[c + 41] = 0;
  o[c + 24] = 0;
  b[c + 42] = 0;
  o[c + 23] = 0;
}

lo.X = 1;

function no(c, f) {
  var d = a;
  a += 32;
  var e, g, i = d + 2, h;
  e = d + 4;
  var j, k = d + 6, l, m = d + 8, n = d + 10, p = d + 12, t = d + 14, q = d + 16, s = d + 18, u = d + 20, x = d + 22, v = d + 24, y = d + 26, z = d + 28, B = d + 30;
  b[c + 25] = b[b[c + 12] + 2];
  b[c + 26] = b[b[c + 13] + 2];
  h = c + 33;
  l = b[c + 12] + 7;
  b[h] = b[l];
  o[h] = o[l];
  b[h + 1] = b[l + 1];
  o[h + 1] = o[l + 1];
  h = c + 35;
  l = b[c + 13] + 7;
  b[h] = b[l];
  o[h] = o[l];
  b[h + 1] = b[l + 1];
  o[h + 1] = o[l + 1];
  o[c + 37] = o[b[c + 12] + 30];
  o[c + 38] = o[b[c + 13] + 30];
  o[c + 39] = o[b[c + 12] + 32];
  o[c + 40] = o[b[c + 13] + 32];
  h = b[f + 6] + b[c + 25] * 3;
  b[d] = b[h];
  o[d] = o[h];
  b[d + 1] = b[h + 1];
  o[d + 1] = o[h + 1];
  g = o[b[f + 6] + b[c + 25] * 3 + 2];
  h = b[f + 7] + b[c + 25] * 3;
  b[i] = b[h];
  o[i] = o[h];
  b[i + 1] = b[h + 1];
  o[i + 1] = o[h + 1];
  h = o[b[f + 7] + b[c + 25] * 3 + 2];
  l = b[f + 6] + b[c + 26] * 3;
  b[e] = b[l];
  o[e] = o[l];
  b[e + 1] = b[l + 1];
  o[e + 1] = o[l + 1];
  j = o[b[f + 6] + b[c + 26] * 3 + 2];
  l = b[f + 7] + b[c + 26] * 3;
  b[k] = b[l];
  o[k] = o[l];
  b[k + 1] = b[l + 1];
  o[k + 1] = o[l + 1];
  l = o[b[f + 7] + b[c + 26] * 3 + 2];
  Cm(m, g);
  Cm(n, j);
  g = c + 29;
  C(t, c + 18, c + 33);
  R(p, m, t);
  b[g] = b[p];
  o[g] = o[p];
  b[g + 1] = b[p + 1];
  o[g + 1] = o[p + 1];
  m = c + 31;
  C(s, c + 20, c + 35);
  R(q, n, s);
  b[m] = b[q];
  o[m] = o[q];
  b[m + 1] = b[q + 1];
  o[m + 1] = o[q + 1];
  n = c + 27;
  N(v, e, c + 31);
  C(x, v, d);
  C(u, x, c + 29);
  b[n] = b[u];
  o[n] = o[u];
  b[n + 1] = b[u + 1];
  o[n + 1] = o[u + 1];
  e = Wc(c + 27);
  o[c + 23] = e;
  e = o[c + 23] - o[c + 22] > 0 ? 1 : 2;
  e == 1 ? b[c + 42] = 2 : e == 2 && (b[c + 42] = 0);
  u = c + 27;
  e = o[c + 23] > .004999999888241291 ? 4 : 5;
  if (e == 4) {
    Th(u, 1 / o[c + 23]);
    e = Q(c + 29, c + 27);
    u = Q(c + 31, c + 27);
    u = o[c + 37] + o[c + 39] * e * e + o[c + 38] + o[c + 40] * u * u;
    if (u != 0) e = 6; else {
      var E = 0;
      e = 7;
    }
    e == 6 && (E = 1 / u);
    o[c + 41] = E;
    e = b[f + 5] & 1 ? 8 : 9;
    e == 8 ? (o[c + 24] *= o[f + 2], K(y, o[c + 24], c + 27), K(z, o[c + 37], y), Ie(i, z), h -= o[c + 39] * Q(c + 29, y), K(B, o[c + 38], y), Lb(k, B), l += o[c + 40] * Q(c + 31, y)) : e == 9 && (o[c + 24] = 0);
    y = b[f + 7] + b[c + 25] * 3;
    b[y] = b[i];
    o[y] = o[i];
    b[y + 1] = b[i + 1];
    o[y + 1] = o[i + 1];
    o[b[f + 7] + b[c + 25] * 3 + 2] = h;
    i = b[f + 7] + b[c + 26] * 3;
    b[i] = b[k];
    o[i] = o[k];
    b[i + 1] = b[k + 1];
    o[i + 1] = o[k + 1];
    o[b[f + 7] + b[c + 26] * 3 + 2] = l;
  } else e == 5 && (ac(u), o[c + 41] = 0, o[c + 24] = 0);
  a = d;
}

no.X = 1;

function oo(c, f) {
  var d = a;
  a += 20;
  var e, g = d + 2, i, h = d + 4, j = d + 6, k = d + 8, l = d + 10, m = d + 12, n = d + 14, p = d + 16, t = d + 18;
  e = b[f + 7] + b[c + 25] * 3;
  b[d] = b[e];
  o[d] = o[e];
  b[d + 1] = b[e + 1];
  o[d + 1] = o[e + 1];
  e = o[b[f + 7] + b[c + 25] * 3 + 2];
  i = b[f + 7] + b[c + 26] * 3;
  b[g] = b[i];
  o[g] = o[i];
  b[g + 1] = b[i + 1];
  o[g + 1] = o[i + 1];
  i = o[b[f + 7] + b[c + 26] * 3 + 2];
  Ae(j, e, c + 29);
  N(h, d, j);
  Ae(l, i, c + 31);
  N(k, g, l);
  j = o[c + 23] - o[c + 22];
  l = c + 27;
  C(m, k, h);
  h = J(l, m);
  if ((j < 0 ? 1 : 2) == 1) h += o[f + 1] * j;
  h *= -o[c + 41];
  k = o[c + 24];
  o[c + 24] = 0 < o[c + 24] + h ? 0 : o[c + 24] + h;
  h = o[c + 24] - k;
  K(n, h, c + 27);
  K(p, o[c + 37], n);
  Ie(d, p);
  e -= o[c + 39] * Q(c + 29, n);
  K(t, o[c + 38], n);
  Lb(g, t);
  i += o[c + 40] * Q(c + 31, n);
  n = b[f + 7] + b[c + 25] * 3;
  b[n] = b[d];
  o[n] = o[d];
  b[n + 1] = b[d + 1];
  o[n + 1] = o[d + 1];
  o[b[f + 7] + b[c + 25] * 3 + 2] = e;
  e = b[f + 7] + b[c + 26] * 3;
  b[e] = b[g];
  o[e] = o[g];
  b[e + 1] = b[g + 1];
  o[e + 1] = o[g + 1];
  o[b[f + 7] + b[c + 26] * 3 + 2] = i;
  a = d;
}

oo.X = 1;

function po(c) {
  var f, d;
  f = b[b[c + 12] + 2];
  d = b[b[c + 13] + 2];
  U(qo, A(1, "i32", r));
  U(sm, A([ f ], "i32", r));
  U(tm, A([ d ], "i32", r));
  U(um, A([ b[c + 16] & 1 ], "i32", r));
  U(vm, A([ o[c + 18], o[c + 19] ], "double", r));
  U(wm, A([ o[c + 20], o[c + 21] ], "double", r));
  U(ro, A([ o[c + 22] ], "double", r));
  U(Am, A([ b[c + 14] ], "i32", r));
}

po.X = 1;

function so(c, f) {
  am(c, f);
  b[c] = to + 2;
  var d = c + 21, e = f + 5;
  b[d] = b[e];
  o[d] = o[e];
  b[d + 1] = b[e + 1];
  o[d + 1] = o[e + 1];
  d = c + 23;
  e = f + 7;
  b[d] = b[e];
  o[d] = o[e];
  b[d + 1] = b[e + 1];
  o[d + 1] = o[e + 1];
  o[c + 25] = o[f + 9];
  o[c + 18] = o[f + 10];
  o[c + 19] = o[f + 11];
  rn(c + 27);
}

so.X = 1;

function uo(c, f) {
  var d = a;
  a += 28;
  var e, g = d + 2, i, h = d + 4, j = d + 6, k = d + 8, l = d + 10, m = d + 12, n = d + 14, p = d + 16, t = d + 18, q = d + 20, s = d + 22, u = d + 24, x = d + 26;
  e = b[f + 6] + b[c + 25] * 3;
  b[d] = b[e];
  o[d] = o[e];
  b[d + 1] = b[e + 1];
  o[d + 1] = o[e + 1];
  e = o[b[f + 6] + b[c + 25] * 3 + 2];
  i = b[f + 6] + b[c + 26] * 3;
  b[g] = b[i];
  o[g] = o[i];
  b[g + 1] = b[i + 1];
  o[g + 1] = o[i + 1];
  i = o[b[f + 6] + b[c + 26] * 3 + 2];
  Cm(h, e);
  Cm(j, i);
  C(l, c + 18, c + 33);
  R(k, h, l);
  C(n, c + 20, c + 35);
  R(m, j, n);
  N(q, g, m);
  C(t, q, d);
  C(p, t, k);
  h = Vc(p);
  j = h - o[c + 22];
  j = Yj(j, 0, .20000000298023224);
  K(s, -o[c + 41] * j, p);
  K(u, o[c + 37], s);
  Ie(d, u);
  e -= o[c + 39] * Q(k, s);
  K(x, o[c + 38], s);
  Lb(g, x);
  i += o[c + 40] * Q(m, s);
  k = b[f + 6] + b[c + 25] * 3;
  b[k] = b[d];
  o[k] = o[d];
  b[k + 1] = b[d + 1];
  o[k + 1] = o[d + 1];
  o[b[f + 6] + b[c + 25] * 3 + 2] = e;
  e = b[f + 6] + b[c + 26] * 3;
  b[e] = b[g];
  o[e] = o[g];
  b[e + 1] = b[g + 1];
  o[e + 1] = o[g + 1];
  o[b[f + 6] + b[c + 26] * 3 + 2] = i;
  g = h - o[c + 22] < .004999999888241291;
  a = d;
  return g;
}

uo.X = 1;

function vo(c, f) {
  var d = a;
  a += 35;
  var e, g, i = d + 2, h, j = d + 4, k, l = d + 6, m = d + 8, n = d + 10;
  e = d + 12;
  var p = d + 14, t = d + 16, q = d + 18, s = d + 20, u, x = d + 29, v = d + 31, y = d + 33;
  b[c + 30] = b[b[c + 12] + 2];
  b[c + 31] = b[b[c + 13] + 2];
  h = c + 36;
  g = b[c + 12] + 7;
  b[h] = b[g];
  o[h] = o[g];
  b[h + 1] = b[g + 1];
  o[h + 1] = o[g + 1];
  h = c + 38;
  g = b[c + 13] + 7;
  b[h] = b[g];
  o[h] = o[g];
  b[h + 1] = b[g + 1];
  o[h + 1] = o[g + 1];
  o[c + 40] = o[b[c + 12] + 30];
  o[c + 41] = o[b[c + 13] + 30];
  o[c + 42] = o[b[c + 12] + 32];
  o[c + 43] = o[b[c + 13] + 32];
  h = b[f + 6] + b[c + 30] * 3;
  b[d] = b[h];
  o[d] = o[h];
  b[d + 1] = b[h + 1];
  o[d + 1] = o[h + 1];
  g = o[b[f + 6] + b[c + 30] * 3 + 2];
  h = b[f + 7] + b[c + 30] * 3;
  b[i] = b[h];
  o[i] = o[h];
  b[i + 1] = b[h + 1];
  o[i + 1] = o[h + 1];
  h = o[b[f + 7] + b[c + 30] * 3 + 2];
  k = b[f + 6] + b[c + 31] * 3;
  b[j] = b[k];
  o[j] = o[k];
  b[j + 1] = b[k + 1];
  o[j + 1] = o[k + 1];
  k = o[b[f + 6] + b[c + 31] * 3 + 2];
  j = b[f + 7] + b[c + 31] * 3;
  b[l] = b[j];
  o[l] = o[j];
  b[l + 1] = b[j + 1];
  o[l + 1] = o[j + 1];
  j = o[b[f + 7] + b[c + 31] * 3 + 2];
  Cm(m, g);
  Cm(n, k);
  var z = c + 32;
  C(p, c + 21, c + 36);
  R(e, m, p);
  b[z] = b[e];
  o[z] = o[e];
  b[z + 1] = b[e + 1];
  o[z + 1] = o[e + 1];
  m = c + 34;
  C(q, c + 23, c + 38);
  R(t, n, q);
  b[m] = b[t];
  o[m] = o[t];
  b[m + 1] = b[t + 1];
  o[m + 1] = o[t + 1];
  n = o[c + 40];
  t = o[c + 41];
  q = o[c + 42];
  m = o[c + 43];
  o[s] = n + t + o[c + 33] * o[c + 33] * q + o[c + 35] * o[c + 35] * m;
  o[s + 3] = -o[c + 33] * o[c + 32] * q - o[c + 35] * o[c + 34] * m;
  o[s + 6] = -o[c + 33] * q - o[c + 35] * m;
  o[s + 1] = o[s + 3];
  o[s + 4] = n + t + o[c + 32] * o[c + 32] * q + o[c + 34] * o[c + 34] * m;
  o[s + 7] = o[c + 32] * q + o[c + 34] * m;
  o[s + 2] = o[s + 6];
  o[s + 5] = o[s + 7];
  o[s + 8] = q + m;
  e = o[c + 18] > 0 ? 1 : 8;
  if (e == 1) {
    qi(s, c + 44);
    s = q + m;
    s > 0 ? e = 2 : (u = 0, e = 3);
    e == 2 && (u = 1 / s);
    e = u;
    u = k - g - o[c + 25];
    k = o[c + 18] * 6.2831854820251465;
    g = e * 2 * o[c + 19] * k;
    k *= e * k;
    p = o[f];
    o[c + 26] = p * (g + p * k);
    if (o[c + 26] != 0) e = 4; else {
      var B = 0;
      e = 5;
    }
    e == 4 && (B = 1 / o[c + 26]);
    o[c + 26] = B;
    o[c + 20] = u * p * k * o[c + 26];
    B = s + o[c + 26];
    if (B != 0) e = 6; else {
      var E = 0;
      e = 7;
    }
    e == 6 && (E = 1 / B);
    o[c + 52] = E;
  } else e == 8 && (ui(s, c + 44), o[c + 26] = 0, o[c + 20] = 0);
  E = c + 27;
  e = b[f + 5] & 1 ? 10 : 11;
  e == 10 ? (tn(E, o[f + 2]), mc(x, o[c + 27], o[c + 28]), K(v, n, x), Ie(i, v), h -= q * (Q(c + 32, x) + o[c + 29]), K(y, t, x), Lb(l, y), j += m * (Q(c + 34, x) + o[c + 29])) : e == 11 && rn(E);
  x = b[f + 7] + b[c + 30] * 3;
  b[x] = b[i];
  o[x] = o[i];
  b[x + 1] = b[i + 1];
  o[x + 1] = o[i + 1];
  o[b[f + 7] + b[c + 30] * 3 + 2] = h;
  i = b[f + 7] + b[c + 31] * 3;
  b[i] = b[l];
  o[i] = o[l];
  b[i + 1] = b[l + 1];
  o[i + 1] = o[l + 1];
  o[b[f + 7] + b[c + 31] * 3 + 2] = j;
  a = d;
}

vo.X = 1;

function wo(c) {
  var f, d;
  f = b[b[c + 12] + 2];
  d = b[b[c + 13] + 2];
  U(xo, A(1, "i32", r));
  U(sm, A([ f ], "i32", r));
  U(tm, A([ d ], "i32", r));
  U(um, A([ b[c + 16] & 1 ], "i32", r));
  U(vm, A([ o[c + 21], o[c + 22] ], "double", r));
  U(wm, A([ o[c + 23], o[c + 24] ], "double", r));
  U(Gn, A([ o[c + 25] ], "double", r));
  U(ym, A([ o[c + 18] ], "double", r));
  U(zm, A([ o[c + 19] ], "double", r));
  U(Am, A([ b[c + 14] ], "i32", r));
}

wo.X = 1;

function yo(c, f, d) {
  oi(c, o[f] + o[d], o[f + 1] + o[d + 1], o[f + 2] + o[d + 2]);
}

function zo(c, f, d) {
  oi(c, f * o[d], f * o[d + 1], f * o[d + 2]);
}

function Ao(c, f) {
  var d = a;
  a += 49;
  var e, g, i = d + 2, h, j, k, l, m, n, p = d + 4, t = d + 6, q = d + 8, s = d + 10, u = d + 12, x = d + 14, v = d + 16, y = d + 18, z = d + 20, B = d + 22, E = d + 24, D = d + 26, H = d + 28, I = d + 30, M = d + 32;
  n = d + 34;
  var G = d + 37, S = d + 40, P = d + 43, L = d + 45, T = d + 47;
  g = b[f + 7] + b[c + 30] * 3;
  b[d] = b[g];
  o[d] = o[g];
  b[d + 1] = b[g + 1];
  o[d + 1] = o[g + 1];
  g = o[b[f + 7] + b[c + 30] * 3 + 2];
  h = b[f + 7] + b[c + 31] * 3;
  b[i] = b[h];
  o[i] = o[h];
  b[i + 1] = b[h + 1];
  o[i + 1] = o[h + 1];
  h = o[b[f + 7] + b[c + 31] * 3 + 2];
  j = o[c + 40];
  k = o[c + 41];
  l = o[c + 42];
  m = o[c + 43];
  var F = h;
  e = o[c + 18] > 0 ? 1 : 2;
  e == 1 ? (n = -o[c + 52] * (F - g + o[c + 20] + o[c + 26] * o[c + 29]), o[c + 29] += n, g -= l * n, h += m * n, Ae(s, h, c + 34), N(q, i, s), C(t, q, d), Ae(u, g, c + 32), C(p, t, u), zn(v, c + 44, p), Nd(x, v), o[c + 27] += o[x], o[c + 28] += o[x + 1], b[y] = b[x], o[y] = o[x], b[y + 1] = b[x + 1], o[y + 1] = o[x + 1], K(z, j, y), Ie(d, z), g -= l * Q(c + 32, y), K(B, k, y), Lb(i, B), h += m * Q(c + 34, y)) : e == 2 && (Ae(I, F, c + 34), N(H, i, I), C(D, H, d), Ae(M, g, c + 32), C(E, D, M), oi(n, o[E], o[E + 1], h - g), p = c + 44, t = a, a += 12, q = t + 3, s = t + 6, u = t + 9, zo(q, o[n], p), zo(s, o[n + 1], p + 3), yo(t, q, s), zo(u, o[n + 2], p + 6), yo(S, t, u), a = t, xn(G, S), yn(c + 27, G), mc(P, o[G], o[G + 1]), K(L, j, P), Ie(d, L), g -= l * (Q(c + 32, P) + o[G + 2]), K(T, k, P), Lb(i, T), h += m * (Q(c + 34, P) + o[G + 2]));
  n = b[f + 7] + b[c + 30] * 3;
  b[n] = b[d];
  o[n] = o[d];
  b[n + 1] = b[d + 1];
  o[n + 1] = o[d + 1];
  o[b[f + 7] + b[c + 30] * 3 + 2] = g;
  g = b[f + 7] + b[c + 31] * 3;
  b[g] = b[i];
  o[g] = o[i];
  b[g + 1] = b[i + 1];
  o[g + 1] = o[i + 1];
  o[b[f + 7] + b[c + 31] * 3 + 2] = h;
  a = d;
}

Ao.X = 1;

function Bo(c, f) {
  var d = a;
  a += 60;
  var e, g, i = d + 2, h;
  e = d + 4;
  var j = d + 6, k, l, m, n, p = d + 8, t = d + 10, q = d + 12, s = d + 14, u, x, v = d + 16, y = d + 25, z = d + 27, B = d + 29, E = d + 31, D = d + 33, H = d + 35, I = d + 37, M = d + 39, G = d + 41, S = d + 43, P = d + 45, L = d + 48, T = d + 51, F = d + 54, X = d + 56, Z = d + 58;
  g = b[f + 6] + b[c + 30] * 3;
  b[d] = b[g];
  o[d] = o[g];
  b[d + 1] = b[g + 1];
  o[d + 1] = o[g + 1];
  g = o[b[f + 6] + b[c + 30] * 3 + 2];
  h = b[f + 6] + b[c + 31] * 3;
  b[i] = b[h];
  o[i] = o[h];
  b[i + 1] = b[h + 1];
  o[i + 1] = o[h + 1];
  h = o[b[f + 6] + b[c + 31] * 3 + 2];
  Cm(e, g);
  Cm(j, h);
  k = o[c + 40];
  l = o[c + 41];
  m = o[c + 42];
  n = o[c + 43];
  C(t, c + 21, c + 36);
  R(p, e, t);
  C(s, c + 23, c + 38);
  R(q, j, s);
  o[v] = k + l + o[p + 1] * o[p + 1] * m + o[q + 1] * o[q + 1] * n;
  o[v + 3] = -o[p + 1] * o[p] * m - o[q + 1] * o[q] * n;
  o[v + 6] = -o[p + 1] * m - o[q + 1] * n;
  o[v + 1] = o[v + 3];
  o[v + 4] = k + l + o[p] * o[p] * m + o[q] * o[q] * n;
  o[v + 7] = o[p] * m + o[q] * n;
  o[v + 2] = o[v + 6];
  o[v + 5] = o[v + 7];
  o[v + 8] = m + n;
  e = o[c + 18] > 0 ? 1 : 2;
  e == 1 ? (N(B, i, q), C(z, B, d), C(y, z, p), u = Wc(y), x = 0, pi(D, v, y), Nd(E, D), K(H, k, E), Ie(d, H), g -= m * Q(p, E), K(I, l, E), Lb(i, I), h += n * Q(q, E)) : e == 2 && (N(S, i, q), C(G, S, d), C(M, G, p), y = h - g - o[c + 25], u = Wc(M), x = ie(y), oi(P, o[M], o[M + 1], y), ti(T, v, P), xn(L, T), mc(F, o[L], o[L + 1]), K(X, k, F), Ie(d, X), g -= m * (Q(p, F) + o[L + 2]), K(Z, l, F), Lb(i, Z), h += n * (Q(q, F) + o[L + 2]));
  p = b[f + 6] + b[c + 30] * 3;
  b[p] = b[d];
  o[p] = o[d];
  b[p + 1] = b[d + 1];
  o[p + 1] = o[d + 1];
  o[b[f + 6] + b[c + 30] * 3 + 2] = g;
  g = b[f + 6] + b[c + 31] * 3;
  b[g] = b[i];
  o[g] = o[i];
  b[g + 1] = b[i + 1];
  o[g + 1] = o[i + 1];
  o[b[f + 6] + b[c + 31] * 3 + 2] = h;
  if (u <= .004999999888241291) e = 4; else {
    var V = 0;
    e = 5;
  }
  e == 4 && (V = x <= .03490658849477768);
  a = d;
  return V;
}

Bo.X = 1;

function Co(c, f) {
  var d = a;
  a += 2;
  am(c, f);
  b[c] = Do + 2;
  var e = c + 20, g = f + 5;
  b[e] = b[g];
  o[e] = o[g];
  b[e + 1] = b[g + 1];
  o[e + 1] = o[g + 1];
  e = c + 22;
  g = f + 7;
  b[e] = b[g];
  o[e] = o[g];
  b[e + 1] = b[g + 1];
  o[e + 1] = o[g + 1];
  e = c + 24;
  g = f + 9;
  b[e] = b[g];
  o[e] = o[g];
  b[e + 1] = b[g + 1];
  o[e + 1] = o[g + 1];
  e = c + 26;
  Ae(d, 1, c + 24);
  b[e] = b[d];
  o[e] = o[d];
  b[e + 1] = b[d + 1];
  o[e + 1] = o[d + 1];
  o[c + 52] = 0;
  o[c + 28] = 0;
  o[c + 53] = 0;
  o[c + 29] = 0;
  o[c + 54] = 0;
  o[c + 30] = 0;
  o[c + 31] = o[f + 12];
  o[c + 32] = o[f + 13];
  b[c + 33] = b[f + 11] & 1;
  o[c + 18] = o[f + 14];
  o[c + 19] = o[f + 15];
  o[c + 55] = 0;
  o[c + 56] = 0;
  ac(c + 44);
  ac(c + 46);
  a = d;
}

Co.X = 1;

function Eo(c, f) {
  var d = a;
  a += 44;
  var e, g, i, h, j, k, l = d + 2, m, n = d + 4, p, t = d + 6, q, s = d + 8, u = d + 10, x = d + 12, v = d + 14, y = d + 16, z = d + 18, B = d + 20, E = d + 22, D = d + 24;
  e = d + 26;
  var H = d + 28, I = d + 30, M = d + 32, G = d + 34, S = d + 36, P = d + 38, L = d + 40, T = d + 42;
  b[c + 34] = b[b[c + 12] + 2];
  b[c + 35] = b[b[c + 13] + 2];
  m = c + 36;
  h = b[c + 12] + 7;
  b[m] = b[h];
  o[m] = o[h];
  b[m + 1] = b[h + 1];
  o[m + 1] = o[h + 1];
  m = c + 38;
  h = b[c + 13] + 7;
  b[m] = b[h];
  o[m] = o[h];
  b[m + 1] = b[h + 1];
  o[m + 1] = o[h + 1];
  o[c + 40] = o[b[c + 12] + 30];
  o[c + 41] = o[b[c + 13] + 30];
  o[c + 42] = o[b[c + 12] + 32];
  o[c + 43] = o[b[c + 13] + 32];
  g = o[c + 40];
  i = o[c + 41];
  h = o[c + 42];
  j = o[c + 43];
  m = b[f + 6] + b[c + 34] * 3;
  b[d] = b[m];
  o[d] = o[m];
  b[d + 1] = b[m + 1];
  o[d + 1] = o[m + 1];
  k = o[b[f + 6] + b[c + 34] * 3 + 2];
  m = b[f + 7] + b[c + 34] * 3;
  b[l] = b[m];
  o[l] = o[m];
  b[l + 1] = b[m + 1];
  o[l + 1] = o[m + 1];
  m = o[b[f + 7] + b[c + 34] * 3 + 2];
  q = b[f + 6] + b[c + 35] * 3;
  b[n] = b[q];
  o[n] = o[q];
  b[n + 1] = b[q + 1];
  o[n + 1] = o[q + 1];
  p = o[b[f + 6] + b[c + 35] * 3 + 2];
  q = b[f + 7] + b[c + 35] * 3;
  b[t] = b[q];
  o[t] = o[q];
  b[t + 1] = b[q + 1];
  o[t + 1] = o[q + 1];
  q = o[b[f + 7] + b[c + 35] * 3 + 2];
  Cm(s, k);
  Cm(u, p);
  C(v, c + 20, c + 36);
  R(x, s, v);
  C(z, c + 22, c + 38);
  R(y, u, z);
  N(D, n, y);
  C(E, D, d);
  C(B, E, x);
  n = c + 46;
  R(e, s, c + 26);
  b[n] = b[e];
  o[n] = o[e];
  b[n + 1] = b[e + 1];
  o[n + 1] = o[e + 1];
  N(H, B, x);
  o[c + 50] = Q(H, c + 46);
  o[c + 51] = Q(y, c + 46);
  o[c + 52] = g + i + h * o[c + 50] * o[c + 50] + j * o[c + 51] * o[c + 51];
  e = o[c + 52] > 0 ? 1 : 2;
  e == 1 && (o[c + 52] = 1 / o[c + 52]);
  o[c + 54] = 0;
  o[c + 55] = 0;
  o[c + 56] = 0;
  e = o[c + 18] > 0 ? 3 : 8;
  e == 3 ? (e = c + 44, R(I, s, c + 24), b[e] = b[I], o[e] = o[I], b[e + 1] = b[I + 1], o[e + 1] = o[I + 1], N(M, B, x), o[c + 48] = Q(M, c + 44), o[c + 49] = Q(y, c + 44), s = g + i + h * o[c + 48] * o[c + 48] + j * o[c + 49] * o[c + 49], s > 0 && (o[c + 54] = 1 / s, B = J(B, c + 44), y = o[c + 18] * 6.2831854820251465, x = o[c + 54] * 2 * o[c + 19] * y, y *= o[c + 54] * y, I = o[f], o[c + 56] = I * (x + I * y), e = o[c + 56] > 0 ? 5 : 6, e == 5 && (o[c + 56] = 1 / o[c + 56]), o[c + 55] = B * I * y * o[c + 56], o[c + 54] = s + o[c + 56], o[c + 54] > 0 && (o[c + 54] = 1 / o[c + 54]))) : e == 8 && (o[c + 30] = 0);
  e = b[c + 33] & 1 ? 10 : 12;
  e == 10 ? (o[c + 53] = h + j, o[c + 53] > 0 && (o[c + 53] = 1 / o[c + 53])) : e == 12 && (o[c + 53] = 0, o[c + 29] = 0);
  e = b[f + 5] & 1 ? 14 : 15;
  e == 14 ? (o[c + 28] *= o[f + 2], o[c + 30] *= o[f + 2], o[c + 29] *= o[f + 2], K(S, o[c + 28], c + 46), K(P, o[c + 30], c + 44), N(G, S, P), S = o[c + 28] * o[c + 50] + o[c + 30] * o[c + 48] + o[c + 29], P = o[c + 28] * o[c + 51] + o[c + 30] * o[c + 49] + o[c + 29], K(L, o[c + 40], G), Ie(l, L), m -= o[c + 42] * S, K(T, o[c + 41], G), Lb(t, T), q += o[c + 43] * P) : e == 15 && (o[c + 28] = 0, o[c + 30] = 0, o[c + 29] = 0);
  G = b[f + 7] + b[c + 34] * 3;
  b[G] = b[l];
  o[G] = o[l];
  b[G + 1] = b[l + 1];
  o[G + 1] = o[l + 1];
  o[b[f + 7] + b[c + 34] * 3 + 2] = m;
  l = b[f + 7] + b[c + 35] * 3;
  b[l] = b[t];
  o[l] = o[t];
  b[l + 1] = b[t + 1];
  o[l + 1] = o[t + 1];
  o[b[f + 7] + b[c + 35] * 3 + 2] = q;
  a = d;
}

Eo.X = 1;

function Fo(c, f) {
  var d = a;
  a += 20;
  var e, g, i, h, j, k = d + 2, l, m = d + 4, n, p = d + 6, t = d + 8, q = d + 10, s = d + 12, u = d + 14, x = d + 16, v = d + 18;
  e = o[c + 40];
  g = o[c + 41];
  i = o[c + 42];
  h = o[c + 43];
  j = b[f + 7] + b[c + 34] * 3;
  b[d] = b[j];
  o[d] = o[j];
  b[d + 1] = b[j + 1];
  o[d + 1] = o[j + 1];
  j = o[b[f + 7] + b[c + 34] * 3 + 2];
  l = b[f + 7] + b[c + 35] * 3;
  b[k] = b[l];
  o[k] = o[l];
  b[k + 1] = b[l + 1];
  o[k + 1] = o[l + 1];
  l = o[b[f + 7] + b[c + 35] * 3 + 2];
  n = c + 44;
  C(m, k, d);
  n = -o[c + 54] * (J(n, m) + o[c + 49] * l - o[c + 48] * j + o[c + 55] + o[c + 56] * o[c + 30]);
  o[c + 30] += n;
  K(p, n, c + 44);
  m = n * o[c + 48];
  n *= o[c + 49];
  K(t, e, p);
  Ie(d, t);
  j -= i * m;
  K(q, g, p);
  Lb(k, q);
  l += h * n;
  p = -o[c + 53] * (l - j - o[c + 32]);
  t = o[c + 29];
  q = o[f] * o[c + 31];
  o[c + 29] = Yj(o[c + 29] + p, -q, q);
  p = o[c + 29] - t;
  j -= i * p;
  l += h * p;
  p = c + 46;
  C(s, k, d);
  p = -o[c + 52] * (J(p, s) + o[c + 51] * l - o[c + 50] * j);
  o[c + 28] += p;
  K(u, p, c + 46);
  s = p * o[c + 50];
  p *= o[c + 51];
  K(x, e, u);
  Ie(d, x);
  j -= i * s;
  K(v, g, u);
  Lb(k, v);
  l += h * p;
  e = b[f + 7] + b[c + 34] * 3;
  b[e] = b[d];
  o[e] = o[d];
  b[e + 1] = b[d + 1];
  o[e + 1] = o[d + 1];
  o[b[f + 7] + b[c + 34] * 3 + 2] = j;
  e = b[f + 7] + b[c + 35] * 3;
  b[e] = b[k];
  o[e] = o[k];
  b[e + 1] = b[k + 1];
  o[e + 1] = o[k + 1];
  o[b[f + 7] + b[c + 35] * 3 + 2] = l;
  a = d;
}

Fo.X = 1;

function Go(c) {
  var f, d;
  f = b[b[c + 12] + 2];
  d = b[b[c + 13] + 2];
  U(Ho, A(1, "i32", r));
  U(sm, A([ f ], "i32", r));
  U(tm, A([ d ], "i32", r));
  U(um, A([ b[c + 16] & 1 ], "i32", r));
  U(vm, A([ o[c + 20], o[c + 21] ], "double", r));
  U(wm, A([ o[c + 22], o[c + 23] ], "double", r));
  U(Fn, A([ o[c + 24], o[c + 25] ], "double", r));
  U(Kn, A([ b[c + 33] & 1 ], "i32", r));
  U(Ln, A([ o[c + 32] ], "double", r));
  U(ko, A([ o[c + 31] ], "double", r));
  U(ym, A([ o[c + 18] ], "double", r));
  U(zm, A([ o[c + 19] ], "double", r));
  U(Am, A([ b[c + 14] ], "i32", r));
}

Go.X = 1;

function Io(c, f) {
  var d = a;
  a += 32;
  var e, g, i = d + 2, h, j = d + 4;
  e = d + 6;
  var k = d + 8, l = d + 10, m = d + 12, n = d + 14, p = d + 16, t = d + 18, q = d + 20, s = d + 22, u = d + 24, x, v = d + 26, y = d + 28, z = d + 30;
  g = b[f + 6] + b[c + 34] * 3;
  b[d] = b[g];
  o[d] = o[g];
  b[d + 1] = b[g + 1];
  o[d + 1] = o[g + 1];
  g = o[b[f + 6] + b[c + 34] * 3 + 2];
  h = b[f + 6] + b[c + 35] * 3;
  b[i] = b[h];
  o[i] = o[h];
  b[i + 1] = b[h + 1];
  o[i + 1] = o[h + 1];
  h = o[b[f + 6] + b[c + 35] * 3 + 2];
  Cm(j, g);
  Cm(e, h);
  C(l, c + 20, c + 36);
  R(k, j, l);
  C(n, c + 22, c + 38);
  R(m, e, n);
  C(q, i, d);
  N(t, q, m);
  C(p, t, k);
  R(s, j, c + 26);
  N(u, p, k);
  j = Q(u, s);
  m = Q(m, s);
  p = J(p, s);
  k = o[c + 40] + o[c + 41] + o[c + 42] * o[c + 50] * o[c + 50] + o[c + 43] * o[c + 51] * o[c + 51];
  e = k != 0 ? 1 : 2;
  e == 1 ? x = -p / k : e == 2 && (x = 0);
  K(v, x, s);
  s = x * j;
  x *= m;
  K(y, o[c + 40], v);
  Ie(d, y);
  g -= o[c + 42] * s;
  K(z, o[c + 41], v);
  Lb(i, z);
  h += o[c + 43] * x;
  v = b[f + 6] + b[c + 34] * 3;
  b[v] = b[d];
  o[v] = o[d];
  b[v + 1] = b[d + 1];
  o[v + 1] = o[d + 1];
  o[b[f + 6] + b[c + 34] * 3 + 2] = g;
  g = b[f + 6] + b[c + 35] * 3;
  b[g] = b[i];
  o[g] = o[i];
  b[g + 1] = b[i + 1];
  o[g + 1] = o[i + 1];
  o[b[f + 6] + b[c + 35] * 3 + 2] = h;
  i = ie(p) <= .004999999888241291;
  a = d;
  return i;
}

Io.X = 1;

function bj(c, f) {
  for (var d = f, e = f + 2, g = c; d < e; d++, g++) b[g] = b[d], o[g] = o[d];
}

function uc() {
  Jo === ba && (Jo = Date.now());
  return Math.floor((Date.now() - Jo) * 1);
}

var Jo, Ko = 13, Lo = 9, Mo = 22, No = 5, Oo = 21, Po = 6;

function Qo(c) {
  Ro || (Ro = A([ 0 ], "i32", w));
  b[Ro] = c;
}

var Ro, So = 0, xc = 0, To = 0, Uo = 2, Hc = [ ca ], Vo = !0;

function Wo(c, f) {
  if (typeof c !== "string") return ca;
  f === ba && (f = "/");
  c && c[0] == "/" && (f = "");
  for (var d = (f + "/" + c).split("/").reverse(), e = [ "" ]; d.length; ) {
    var g = d.pop();
    g == "" || g == "." || (g == ".." ? e.length > 1 && e.pop() : e.push(g));
  }
  return e.length == 1 ? "/" : e.join("/");
}

function Xo(c, f, d) {
  var e = {
    Q: !1,
    m: !1,
    error: 0,
    name: ca,
    path: ca,
    object: ca,
    w: !1,
    A: ca,
    z: ca
  }, c = Wo(c);
  if (c == "/") e.Q = !0, e.m = e.w = !0, e.name = "/", e.path = e.A = "/", e.object = e.z = Yo; else if (c !== ca) for (var d = d || 0, c = c.slice(1).split("/"), g = Yo, i = [ "" ]; c.length; ) {
    if (c.length == 1 && g.c) e.w = !0, e.A = i.length == 1 ? "/" : i.join("/"), e.z = g, e.name = c[0];
    var h = c.shift();
    if (g.c) if (g.C) {
      if (!g.a.hasOwnProperty(h)) {
        e.error = 2;
        break;
      }
    } else {
      e.error = Ko;
      break;
    } else {
      e.error = 20;
      break;
    }
    g = g.a[h];
    if (g.link && !(f && c.length == 0)) {
      if (d > 40) {
        e.error = 40;
        break;
      }
      e = Wo(g.link, i.join("/"));
      return Xo([ e ].concat(c).join("/"), f, d + 1);
    }
    i.push(h);
    if (c.length == 0) e.m = !0, e.path = i.join("/"), e.object = g;
  }
  return e;
}

function Zo(c, f, d, e, g) {
  c || (c = "/");
  if (typeof c === "string") $o(), c = Xo(c, ba), c.m ? c = c.object : (Qo(c.error), c = ca);
  if (!c) throw Qo(Ko), Error("Parent path must exist.");
  if (!c.c) throw Qo(20), Error("Parent must be a folder.");
  if (!c.write && !Vo) throw Qo(Ko), Error("Parent folder must be writeable.");
  if (!f || f == "." || f == "..") throw Qo(2), Error("Name must not be empty.");
  if (c.a.hasOwnProperty(f)) throw Qo(17), Error("Can't overwrite object.");
  c.a[f] = {
    C: e === ba ? !0 : e,
    write: g === ba ? !1 : g,
    timestamp: Date.now(),
    N: Uo++
  };
  for (var i in d) d.hasOwnProperty(i) && (c.a[f][i] = d[i]);
  return c.a[f];
}

function ap(c, f) {
  return Zo("/", c, {
    c: !0,
    h: !1,
    a: {}
  }, !0, f);
}

function bp(c, f, d, e) {
  if (!d && !e) throw Error("A device must have at least one callback defined.");
  var g = {
    h: !0,
    input: d,
    d: e,
    c: !1
  };
  return Zo(c, f, g, Boolean(d), Boolean(e));
}

function $o() {
  Yo || (Yo = {
    C: !0,
    write: !1,
    c: !0,
    h: !1,
    timestamp: Date.now(),
    N: 1,
    a: {}
  });
}

var cp, Yo;

function Gc(c, f, d) {
  var e = Hc[c];
  if (e) if (e.i) if (d < 0) return Qo(Mo), -1; else if (e.object.h) if (e.object.d) {
    for (var g = 0; g < d; g++) try {
      e.object.d(b[f + g]);
    } catch (i) {
      return Qo(No), -1;
    }
    e.object.timestamp = Date.now();
    return g;
  } else return Qo(Po), -1; else {
    g = e.position;
    c = Hc[c];
    if (!c || c.object.h) Qo(Lo), f = -1; else if (c.i) if (c.object.c) Qo(Oo), f = -1; else if (d < 0 || g < 0) Qo(Mo), f = -1; else {
      for (var h = c.object.a; h.length < g; ) h.push(0);
      for (var j = 0; j < d; j++) h[g + j] = Xa[f + j];
      c.object.timestamp = Date.now();
      f = j;
    } else Qo(Ko), f = -1;
    f != -1 && (e.position += f);
    return f;
  } else return Qo(Ko), -1; else return Qo(Lo), -1;
}

function dp(c, f) {
  function d(c) {
    var d;
    d = c === "float" || c === "double" ? o[f + g] : b[f + g];
    g += Ka.M(c);
    return Number(d);
  }
  for (var e = c, g = 0, i = [], h, j; ; ) {
    var k = e;
    h = b[e];
    if (h === 0) break;
    j = b[e + 1];
    if (h == "%".charCodeAt(0)) {
      var l = !1, m = !1, n = !1, p = !1;
      a : for (;;) {
        switch (j) {
         case "+".charCodeAt(0):
          l = !0;
          break;
         case "-".charCodeAt(0):
          m = !0;
          break;
         case "#".charCodeAt(0):
          n = !0;
          break;
         case "0".charCodeAt(0):
          if (p) break a; else {
            p = !0;
            break;
          }
         default:
          break a;
        }
        e++;
        j = b[e + 1];
      }
      var t = 0;
      if (j == "*".charCodeAt(0)) t = d("i32"), e++, j = b[e + 1]; else for (; j >= "0".charCodeAt(0) && j <= "9".charCodeAt(0); ) t = t * 10 + (j - "0".charCodeAt(0)), e++, j = b[e + 1];
      var q = !1;
      if (j == ".".charCodeAt(0)) {
        var s = 0, q = !0;
        e++;
        j = b[e + 1];
        if (j == "*".charCodeAt(0)) s = d("i32"), e++; else for (;;) {
          j = b[e + 1];
          if (j < "0".charCodeAt(0) || j > "9".charCodeAt(0)) break;
          s = s * 10 + (j - "0".charCodeAt(0));
          e++;
        }
        j = b[e + 1];
      } else s = 6;
      var u;
      switch (String.fromCharCode(j)) {
       case "h":
        j = b[e + 2];
        j == "h".charCodeAt(0) ? (e++, u = 1) : u = 2;
        break;
       case "l":
        j = b[e + 2];
        j == "l".charCodeAt(0) ? (e++, u = 8) : u = 4;
        break;
       case "L":
       case "q":
       case "j":
        u = 8;
        break;
       case "z":
       case "t":
       case "I":
        u = 4;
        break;
       default:
        u = ca;
      }
      u && e++;
      j = b[e + 1];
      if ("d,i,u,o,x,X,p".split(",").indexOf(String.fromCharCode(j)) != -1) {
        k = j == "d".charCodeAt(0) || j == "i".charCodeAt(0);
        u = u || 4;
        h = d("i" + u * 8);
        u <= 4 && (h = (k ? Ib : Hb)(h & Math.pow(256, u) - 1, u * 8));
        var x = Math.abs(h), v, k = "";
        if (j == "d".charCodeAt(0) || j == "i".charCodeAt(0)) v = Ib(h, 8 * u).toString(10); else if (j == "u".charCodeAt(0)) v = Hb(h, 8 * u).toString(10), h = Math.abs(h); else if (j == "o".charCodeAt(0)) v = (n ? "0" : "") + x.toString(8); else if (j == "x".charCodeAt(0) || j == "X".charCodeAt(0)) {
          k = n ? "0x" : "";
          if (h < 0) {
            h = -h;
            v = (x - 1).toString(16);
            n = [];
            for (x = 0; x < v.length; x++) n.push((15 - parseInt(v[x], 16)).toString(16));
            for (v = n.join(""); v.length < u * 2; ) v = "f" + v;
          } else v = x.toString(16);
          j == "X".charCodeAt(0) && (k = k.toUpperCase(), v = v.toUpperCase());
        } else j == "p".charCodeAt(0) && (x === 0 ? v = "(nil)" : (k = "0x", v = x.toString(16)));
        if (q) for (; v.length < s; ) v = "0" + v;
        for (l && (k = h < 0 ? "-" + k : "+" + k); k.length + v.length < t; ) m ? v += " " : p ? v = "0" + v : k = " " + k;
        v = k + v;
        v.split("").forEach((function(c) {
          i.push(c.charCodeAt(0));
        }));
      } else if ("f,F,e,E,g,G".split(",").indexOf(String.fromCharCode(j)) != -1) {
        h = d(u === 4 ? "float" : "double");
        if (isNaN(h)) v = "nan", p = !1; else if (isFinite(h)) {
          q = !1;
          u = Math.min(s, 20);
          if (j == "g".charCodeAt(0) || j == "G".charCodeAt(0)) q = !0, s = s || 1, u = parseInt(h.toExponential(u).split("e")[1], 10), s > u && u >= -4 ? (j = (j == "g".charCodeAt(0) ? "f" : "F").charCodeAt(0), s -= u + 1) : (j = (j == "g".charCodeAt(0) ? "e" : "E").charCodeAt(0), s--), u = Math.min(s, 20);
          if (j == "e".charCodeAt(0) || j == "E".charCodeAt(0)) v = h.toExponential(u), /[eE][-+]\d$/.test(v) && (v = v.slice(0, -1) + "0" + v.slice(-1)); else if (j == "f".charCodeAt(0) || j == "F".charCodeAt(0)) v = h.toFixed(u);
          k = v.split("e");
          if (q && !n) for (; k[0].length > 1 && k[0].indexOf(".") != -1 && (k[0].slice(-1) == "0" || k[0].slice(-1) == "."); ) k[0] = k[0].slice(0, -1); else for (n && v.indexOf(".") == -1 && (k[0] += "."); s > u++; ) k[0] += "0";
          v = k[0] + (k.length > 1 ? "e" + k[1] : "");
          j == "E".charCodeAt(0) && (v = v.toUpperCase());
          l && h >= 0 && (v = "+" + v);
        } else v = (h < 0 ? "-" : "") + "inf", p = !1;
        for (; v.length < t; ) m ? v += " " : v = p && (v[0] == "-" || v[0] == "+") ? v[0] + "0" + v.slice(1) : (p ? "0" : " ") + v;
        j < "a".charCodeAt(0) && (v = v.toUpperCase());
        v.split("").forEach((function(c) {
          i.push(c.charCodeAt(0));
        }));
      } else if (j == "s".charCodeAt(0)) {
        (l = d("i8*")) ? (l = Db(l), q && l.length > s && (l = l.slice(0, s))) : l = mb("(null)", !0);
        if (!m) for (; l.length < t--; ) i.push(" ".charCodeAt(0));
        i = i.concat(l);
        if (m) for (; l.length < t--; ) i.push(" ".charCodeAt(0));
      } else if (j == "c".charCodeAt(0)) {
        for (m && i.push(d("i8")); --t > 0; ) i.push(" ".charCodeAt(0));
        m || i.push(d("i8"));
      } else if (j == "n".charCodeAt(0)) m = d("i32*"), b[m] = i.length; else if (j == "%".charCodeAt(0)) i.push(h); else for (x = k; x < e + 2; x++) i.push(b[x]);
      e += 2;
    } else i.push(h), e += 1;
  }
  return i;
}

function vc(c, f) {
  var d = b[xc], e = dp(c, f), g = Ka.W();
  var i = A(e, "i8", r), e = e.length * 1;
  if (e == 0) d = 0; else if (i = Gc(d, i, e), i == -1) {
    if (Hc[d]) Hc[d].error = !0;
    d = -1;
  } else d = Math.floor(i / 1);
  Ka.V(g);
  return d;
}

var Xc = Math.sqrt;

function O(c, f, d, e) {
  throw "Assertion failed: " + jb(e) + ", at: " + [ jb(c), f, jb(d) ];
}

var Gh = Math.sin, Hh = Math.cos, oh = Math.floor;

function ib(c) {
  return Ka.D(c || 1);
}

var Hi = vc;

function Mi(c) {
  var f = Ka.q({
    g: [ "i32", "i32" ]
  }), d = Date.now();
  b[c + f[0]] = Math.floor(d / 1e3);
  b[c + f[1]] = Math.floor((d - 1e3 * Math.floor(d / 1e3)) * 1e3);
}

((function(c, f, d) {
  if (!cp) {
    cp = !0;
    $o();
    c || (c = (function() {
      if (!c.l || !c.l.length) {
        var d;
        typeof window != "undefined" && typeof window.prompt == "function" ? d = window.prompt("Input: ") : typeof readline == "function" && (d = readline());
        d || (d = "");
        c.l = mb(d + "\n", !0);
      }
      return c.l.shift();
    }));
    f || (f = (function(c) {
      c === ca || c === "\n".charCodeAt(0) ? (f.B(f.buffer.join("")), f.buffer = []) : f.buffer.push(String.fromCharCode(c));
    }));
    if (!f.B) f.B = print;
    if (!f.buffer) f.buffer = [];
    d || (d = f);
    ap("tmp", !0);
    var e = ap("dev", !1), g = bp(e, "stdin", c), i = bp(e, "stdout", ca, f), d = bp(e, "stderr", ca, d);
    bp(e, "tty", c, f);
    Hc[1] = {
      path: "/dev/stdin",
      object: g,
      position: 0,
      v: !0,
      i: !1,
      u: !1,
      error: !1,
      r: !1,
      F: []
    };
    Hc[2] = {
      path: "/dev/stdout",
      object: i,
      position: 0,
      v: !1,
      i: !0,
      u: !1,
      error: !1,
      r: !1,
      F: []
    };
    Hc[3] = {
      path: "/dev/stderr",
      object: d,
      position: 0,
      v: !1,
      i: !0,
      u: !1,
      error: !1,
      r: !1,
      F: []
    };
    So = A([ 1 ], "void*", w);
    xc = A([ 2 ], "void*", w);
    To = A([ 3 ], "void*", w);
    Hc[So] = Hc[1];
    Hc[xc] = Hc[2];
    Hc[To] = Hc[3];
    A([ A([ 0, So, xc, To ], "void*", w) ], "void*", w);
  }
}))();

$a.push({
  n: (function() {
    cp && (Hc[2].object.d.buffer.length > 0 && Hc[2].object.d("\n".charCodeAt(0)), Hc[3].object.d.buffer.length > 0 && Hc[3].object.d("\n".charCodeAt(0)));
  })
});

Qo(0);

var Fc = A([ 0 ], "i8", w);

Module.I = (function(c) {
  function f() {
    for (var c = 0; c < 0; c++) e.push(0);
  }
  var d = c.length + 1, e = [ A(mb("/bin/this.program"), "i8", w) ];
  f();
  for (var g = 0; g < d - 1; g += 1) e.push(A(mb(c[g]), "i8", w)), f();
  e.push(0);
  e = A(e, "i32", w);
  return Jb();
});

var wc, Tb, ep, fp, gp, Zc, $c, ad, Wd, Xd, fe, ge, we, De, Ee, le, me, oe, ye, wg, Pe, Me, Ne, Oe, ze, re, Je, Ke, Re, yg, zg, tg, ug, vg, Ng, Lg, Gg, Hg, Ig, Qg, Rg, Sg, Tg, Ug, Vg, Wg, Xg, Yg, Zg, ch, mh, nh, kh, lh, eh, fh, gh, Fh, rh, ph, qh, th, vh, Lh, Kh, Mh, wh, xh, Oh, Eh, Dh, hp, ip, jp, kp, lp, mp, jc, np, op, Vh, Wh, Xh, Zh, $h, ai, $b, pp, qp, gi, hi, ci, di, ei, fi, ri, ki, li, si, ji, rp, sp, tp, se, Za = (function() {
  b[nj] = up + 2;
  $a.push({
    n: 4,
    k: nj
  });
  b[oj] = vp + 2;
  $a.push({
    n: 6,
    k: oj
  });
}), yi, zi, Ai, Bi, Ji, Ki, Di, Ei, Fi, Qi, Ri, Si, Ti, Ui, Vi, Wi, Xi, hj, gj, Zi, $i, aj, nj, oj, Ej, Mg, Hj, Ij, Jj, Dj, vp, wp, xp, Qj, Rj, Sj, Tj, hk, ik, pk, qk, Bk, Ck, Dk, Nk, Ok, Pk, Tk, Uk, Wk, Cj, Zk, $k, Gk, Qk, Rk, Kk, Lk, Hk, Ik, up, yp, zp, el, fl, gl, Ap, Bp, Cp, Dp, ll, ml, nl, hl, Ep, Fp, rl, sl, tl, ul, Gp, Hp, Al, Bl, wl, xl, yl, zl, Cl, Dl, El, Fl, Gl, Il, Jl, Kl, Ll, Ml, Pl, Ql, Rl, Tl, Ul, Wl, Xl, Yl, Ip, Jp, dm, em, fm, Zl, Kp, Lp, hm, im, jm, il, Mp, Np, mm, nm, om, km, ol, Op, Pp, bm, rm, xm, Qp, Rp, Sp, Tp, Gm, Im, Jm, Km, Up, Vp, Om, Pm, Qm, Rm, Sm, Wm, Xm, Ym, Wp, Xp, bn, ne, an, cn, dn, Yp, fn, gn, hn, jn, kn, ln, mn, on, pn, Zp, $p, aq, vn, En, In, Jn, Mn, bq, cq, Pn, On, Qn, Rn, Vn, Wn, Xn, Yn, Zn, Zm, dq, eq, ao, ho, Hn, io, jo, fq, vq, mo, qo, ro, wq, xq, to, xo, Gn, yq, zq, Do, Ho, sm, tm, um, vm, wm, Fn, Kn, Ln, ko, ym, zm, Am, Aq, Bq;

wc = A([ 37, 102, 10, 0 ], "i8", w);

Tb = A([ 0, 0, 36, 38, 40, 40, 40, 40, 40, 40 ], "i8*", w);

A(1, "void*", w);

fp = A([ 55, 98, 50, 83, 104, 97, 112, 101, 0 ], "i8", w);

gp = A(2, "i8*", w);

Zc = A([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 108, 108, 105, 115, 105, 111, 110, 47, 98, 50, 67, 111, 108, 108, 105, 100, 101, 69, 100, 103, 101, 46, 99, 112, 112, 0 ], "i8", w);

$c = A([ 118, 111, 105, 100, 32, 98, 50, 67, 111, 108, 108, 105, 100, 101, 69, 100, 103, 101, 65, 110, 100, 67, 105, 114, 99, 108, 101, 40, 98, 50, 77, 97, 110, 105, 102, 111, 108, 100, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 69, 100, 103, 101, 83, 104, 97, 112, 101, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 67, 105, 114, 99, 108, 101, 83, 104, 97, 112, 101, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 41, 0 ], "i8", w);

ad = A([ 100, 101, 110, 32, 62, 32, 48, 46, 48, 102, 0 ], "i8", w);

Wd = A([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 108, 108, 105, 115, 105, 111, 110, 47, 98, 50, 67, 111, 108, 108, 105, 100, 101, 80, 111, 108, 121, 103, 111, 110, 46, 99, 112, 112, 0 ], "i8", w);

Xd = A([ 118, 111, 105, 100, 32, 98, 50, 70, 105, 110, 100, 73, 110, 99, 105, 100, 101, 110, 116, 69, 100, 103, 101, 40, 98, 50, 67, 108, 105, 112, 86, 101, 114, 116, 101, 120, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 80, 111, 108, 121, 103, 111, 110, 83, 104, 97, 112, 101, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 44, 32, 105, 110, 116, 51, 50, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 80, 111, 108, 121, 103, 111, 110, 83, 104, 97, 112, 101, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 41, 0 ], "i8", w);

fe = A([ 48, 32, 60, 61, 32, 101, 100, 103, 101, 49, 32, 38, 38, 32, 101, 100, 103, 101, 49, 32, 60, 32, 112, 111, 108, 121, 49, 45, 62, 109, 95, 118, 101, 114, 116, 101, 120, 67, 111, 117, 110, 116, 0 ], "i8", w);

ge = A([ 102, 108, 111, 97, 116, 51, 50, 32, 98, 50, 69, 100, 103, 101, 83, 101, 112, 97, 114, 97, 116, 105, 111, 110, 40, 99, 111, 110, 115, 116, 32, 98, 50, 80, 111, 108, 121, 103, 111, 110, 83, 104, 97, 112, 101, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 44, 32, 105, 110, 116, 51, 50, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 80, 111, 108, 121, 103, 111, 110, 83, 104, 97, 112, 101, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 41, 0 ], "i8", w);

we = A(1, "i32", w);

De = A(1, "i32", w);

Ee = A(1, "i32", w);

le = A([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 108, 108, 105, 115, 105, 111, 110, 47, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 46, 99, 112, 112, 0 ], "i8", w);

me = A([ 118, 111, 105, 100, 32, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 80, 114, 111, 120, 121, 58, 58, 83, 101, 116, 40, 99, 111, 110, 115, 116, 32, 98, 50, 83, 104, 97, 112, 101, 32, 42, 44, 32, 105, 110, 116, 51, 50, 41, 0 ], "i8", w);

oe = A([ 48, 32, 60, 61, 32, 105, 110, 100, 101, 120, 32, 38, 38, 32, 105, 110, 100, 101, 120, 32, 60, 32, 99, 104, 97, 105, 110, 45, 62, 109, 95, 99, 111, 117, 110, 116, 0 ], "i8", w);

ye = A([ 118, 111, 105, 100, 32, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 40, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 79, 117, 116, 112, 117, 116, 32, 42, 44, 32, 98, 50, 83, 105, 109, 112, 108, 101, 120, 67, 97, 99, 104, 101, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 73, 110, 112, 117, 116, 32, 42, 41, 0 ], "i8", w);

wg = A([ 102, 108, 111, 97, 116, 51, 50, 32, 98, 50, 83, 105, 109, 112, 108, 101, 120, 58, 58, 71, 101, 116, 77, 101, 116, 114, 105, 99, 40, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", w);

Pe = A([ 118, 111, 105, 100, 32, 98, 50, 83, 105, 109, 112, 108, 101, 120, 58, 58, 71, 101, 116, 87, 105, 116, 110, 101, 115, 115, 80, 111, 105, 110, 116, 115, 40, 98, 50, 86, 101, 99, 50, 32, 42, 44, 32, 98, 50, 86, 101, 99, 50, 32, 42, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", w);

Me = A([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 108, 108, 105, 115, 105, 111, 110, 47, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 46, 104, 0 ], "i8", w);

Ne = A([ 99, 111, 110, 115, 116, 32, 98, 50, 86, 101, 99, 50, 32, 38, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 80, 114, 111, 120, 121, 58, 58, 71, 101, 116, 86, 101, 114, 116, 101, 120, 40, 105, 110, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", w);

Oe = A([ 48, 32, 60, 61, 32, 105, 110, 100, 101, 120, 32, 38, 38, 32, 105, 110, 100, 101, 120, 32, 60, 32, 109, 95, 99, 111, 117, 110, 116, 0 ], "i8", w);

ze = A([ 98, 50, 86, 101, 99, 50, 32, 98, 50, 83, 105, 109, 112, 108, 101, 120, 58, 58, 71, 101, 116, 83, 101, 97, 114, 99, 104, 68, 105, 114, 101, 99, 116, 105, 111, 110, 40, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", w);

re = A([ 98, 50, 86, 101, 99, 50, 32, 98, 50, 83, 105, 109, 112, 108, 101, 120, 58, 58, 71, 101, 116, 67, 108, 111, 115, 101, 115, 116, 80, 111, 105, 110, 116, 40, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", w);

Je = A([ 118, 111, 105, 100, 32, 98, 50, 83, 105, 109, 112, 108, 101, 120, 58, 58, 82, 101, 97, 100, 67, 97, 99, 104, 101, 40, 99, 111, 110, 115, 116, 32, 98, 50, 83, 105, 109, 112, 108, 101, 120, 67, 97, 99, 104, 101, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 80, 114, 111, 120, 121, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 80, 114, 111, 120, 121, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 41, 0 ], "i8", w);

Ke = A([ 99, 97, 99, 104, 101, 45, 62, 99, 111, 117, 110, 116, 32, 60, 61, 32, 51, 0 ], "i8", w);

Re = A([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 108, 108, 105, 115, 105, 111, 110, 47, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 46, 99, 112, 112, 0 ], "i8", w);

yg = A([ 105, 110, 116, 51, 50, 32, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 65, 108, 108, 111, 99, 97, 116, 101, 78, 111, 100, 101, 40, 41, 0 ], "i8", w);

zg = A([ 109, 95, 110, 111, 100, 101, 67, 111, 117, 110, 116, 32, 61, 61, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", w);

tg = A([ 118, 111, 105, 100, 32, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 70, 114, 101, 101, 78, 111, 100, 101, 40, 105, 110, 116, 51, 50, 41, 0 ], "i8", w);

ug = A([ 48, 32, 60, 61, 32, 110, 111, 100, 101, 73, 100, 32, 38, 38, 32, 110, 111, 100, 101, 73, 100, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", w);

vg = A([ 48, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 111, 117, 110, 116, 0 ], "i8", w);

A([ 118, 111, 105, 100, 32, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 68, 101, 115, 116, 114, 111, 121, 80, 114, 111, 120, 121, 40, 105, 110, 116, 51, 50, 41, 0 ], "i8", w);

Ng = A([ 109, 95, 110, 111, 100, 101, 115, 91, 112, 114, 111, 120, 121, 73, 100, 93, 46, 73, 115, 76, 101, 97, 102, 40, 41, 0 ], "i8", w);

Lg = A([ 98, 111, 111, 108, 32, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 77, 111, 118, 101, 80, 114, 111, 120, 121, 40, 105, 110, 116, 51, 50, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 65, 65, 66, 66, 32, 38, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 86, 101, 99, 50, 32, 38, 41, 0 ], "i8", w);

Gg = A([ 118, 111, 105, 100, 32, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 73, 110, 115, 101, 114, 116, 76, 101, 97, 102, 40, 105, 110, 116, 51, 50, 41, 0 ], "i8", w);

Hg = A([ 99, 104, 105, 108, 100, 49, 32, 33, 61, 32, 40, 45, 49, 41, 0 ], "i8", w);

Ig = A([ 99, 104, 105, 108, 100, 50, 32, 33, 61, 32, 40, 45, 49, 41, 0 ], "i8", w);

Qg = A([ 105, 110, 116, 51, 50, 32, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 66, 97, 108, 97, 110, 99, 101, 40, 105, 110, 116, 51, 50, 41, 0 ], "i8", w);

Rg = A([ 105, 65, 32, 33, 61, 32, 40, 45, 49, 41, 0 ], "i8", w);

Sg = A([ 48, 32, 60, 61, 32, 105, 66, 32, 38, 38, 32, 105, 66, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", w);

Tg = A([ 48, 32, 60, 61, 32, 105, 67, 32, 38, 38, 32, 105, 67, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", w);

Ug = A([ 48, 32, 60, 61, 32, 105, 70, 32, 38, 38, 32, 105, 70, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", w);

Vg = A([ 48, 32, 60, 61, 32, 105, 71, 32, 38, 38, 32, 105, 71, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", w);

Wg = A([ 109, 95, 110, 111, 100, 101, 115, 91, 67, 45, 62, 112, 97, 114, 101, 110, 116, 93, 46, 99, 104, 105, 108, 100, 50, 32, 61, 61, 32, 105, 65, 0 ], "i8", w);

Xg = A([ 48, 32, 60, 61, 32, 105, 68, 32, 38, 38, 32, 105, 68, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", w);

Yg = A([ 48, 32, 60, 61, 32, 105, 69, 32, 38, 38, 32, 105, 69, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", w);

Zg = A([ 109, 95, 110, 111, 100, 101, 115, 91, 66, 45, 62, 112, 97, 114, 101, 110, 116, 93, 46, 99, 104, 105, 108, 100, 50, 32, 61, 61, 32, 105, 65, 0 ], "i8", w);

A([ 105, 110, 116, 51, 50, 32, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 67, 111, 109, 112, 117, 116, 101, 72, 101, 105, 103, 104, 116, 40, 105, 110, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", w);

A([ 118, 111, 105, 100, 32, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 86, 97, 108, 105, 100, 97, 116, 101, 83, 116, 114, 117, 99, 116, 117, 114, 101, 40, 105, 110, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", w);

A([ 109, 95, 110, 111, 100, 101, 115, 91, 105, 110, 100, 101, 120, 93, 46, 112, 97, 114, 101, 110, 116, 32, 61, 61, 32, 40, 45, 49, 41, 0 ], "i8", w);

A([ 99, 104, 105, 108, 100, 49, 32, 61, 61, 32, 40, 45, 49, 41, 0 ], "i8", w);

A([ 99, 104, 105, 108, 100, 50, 32, 61, 61, 32, 40, 45, 49, 41, 0 ], "i8", w);

A([ 110, 111, 100, 101, 45, 62, 104, 101, 105, 103, 104, 116, 32, 61, 61, 32, 48, 0 ], "i8", w);

A([ 48, 32, 60, 61, 32, 99, 104, 105, 108, 100, 49, 32, 38, 38, 32, 99, 104, 105, 108, 100, 49, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", w);

A([ 48, 32, 60, 61, 32, 99, 104, 105, 108, 100, 50, 32, 38, 38, 32, 99, 104, 105, 108, 100, 50, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", w);

A([ 109, 95, 110, 111, 100, 101, 115, 91, 99, 104, 105, 108, 100, 49, 93, 46, 112, 97, 114, 101, 110, 116, 32, 61, 61, 32, 105, 110, 100, 101, 120, 0 ], "i8", w);

A([ 109, 95, 110, 111, 100, 101, 115, 91, 99, 104, 105, 108, 100, 50, 93, 46, 112, 97, 114, 101, 110, 116, 32, 61, 61, 32, 105, 110, 100, 101, 120, 0 ], "i8", w);

A([ 118, 111, 105, 100, 32, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 86, 97, 108, 105, 100, 97, 116, 101, 77, 101, 116, 114, 105, 99, 115, 40, 105, 110, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", w);

A([ 110, 111, 100, 101, 45, 62, 104, 101, 105, 103, 104, 116, 32, 61, 61, 32, 104, 101, 105, 103, 104, 116, 0 ], "i8", w);

A([ 97, 97, 98, 98, 46, 108, 111, 119, 101, 114, 66, 111, 117, 110, 100, 32, 61, 61, 32, 110, 111, 100, 101, 45, 62, 97, 97, 98, 98, 46, 108, 111, 119, 101, 114, 66, 111, 117, 110, 100, 0 ], "i8", w);

A([ 97, 97, 98, 98, 46, 117, 112, 112, 101, 114, 66, 111, 117, 110, 100, 32, 61, 61, 32, 110, 111, 100, 101, 45, 62, 97, 97, 98, 98, 46, 117, 112, 112, 101, 114, 66, 111, 117, 110, 100, 0 ], "i8", w);

A([ 118, 111, 105, 100, 32, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 86, 97, 108, 105, 100, 97, 116, 101, 40, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", w);

A([ 48, 32, 60, 61, 32, 102, 114, 101, 101, 73, 110, 100, 101, 120, 32, 38, 38, 32, 102, 114, 101, 101, 73, 110, 100, 101, 120, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", w);

A([ 71, 101, 116, 72, 101, 105, 103, 104, 116, 40, 41, 32, 61, 61, 32, 67, 111, 109, 112, 117, 116, 101, 72, 101, 105, 103, 104, 116, 40, 41, 0 ], "i8", w);

A([ 109, 95, 110, 111, 100, 101, 67, 111, 117, 110, 116, 32, 43, 32, 102, 114, 101, 101, 67, 111, 117, 110, 116, 32, 61, 61, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", w);

A([ 105, 110, 116, 51, 50, 32, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 71, 101, 116, 77, 97, 120, 66, 97, 108, 97, 110, 99, 101, 40, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", w);

A([ 110, 111, 100, 101, 45, 62, 73, 115, 76, 101, 97, 102, 40, 41, 32, 61, 61, 32, 102, 97, 108, 115, 101, 0 ], "i8", w);

ch = A(1, "i32", w);

mh = A(1, "i32", w);

nh = A(1, "i32", w);

kh = A(1, "i32", w);

lh = A(1, "i32", w);

eh = A([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 108, 108, 105, 115, 105, 111, 110, 47, 98, 50, 84, 105, 109, 101, 79, 102, 73, 109, 112, 97, 99, 116, 46, 99, 112, 112, 0 ], "i8", w);

fh = A([ 118, 111, 105, 100, 32, 98, 50, 84, 105, 109, 101, 79, 102, 73, 109, 112, 97, 99, 116, 40, 98, 50, 84, 79, 73, 79, 117, 116, 112, 117, 116, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 79, 73, 73, 110, 112, 117, 116, 32, 42, 41, 0 ], "i8", w);

gh = A([ 116, 97, 114, 103, 101, 116, 32, 62, 32, 116, 111, 108, 101, 114, 97, 110, 99, 101, 0 ], "i8", w);

Fh = A([ 102, 108, 111, 97, 116, 51, 50, 32, 98, 50, 83, 101, 112, 97, 114, 97, 116, 105, 111, 110, 70, 117, 110, 99, 116, 105, 111, 110, 58, 58, 69, 118, 97, 108, 117, 97, 116, 101, 40, 105, 110, 116, 51, 50, 44, 32, 105, 110, 116, 51, 50, 44, 32, 102, 108, 111, 97, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", w);

rh = A([ 102, 108, 111, 97, 116, 51, 50, 32, 98, 50, 83, 101, 112, 97, 114, 97, 116, 105, 111, 110, 70, 117, 110, 99, 116, 105, 111, 110, 58, 58, 70, 105, 110, 100, 77, 105, 110, 83, 101, 112, 97, 114, 97, 116, 105, 111, 110, 40, 105, 110, 116, 51, 50, 32, 42, 44, 32, 105, 110, 116, 51, 50, 32, 42, 44, 32, 102, 108, 111, 97, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", w);

ph = A([ 102, 108, 111, 97, 116, 51, 50, 32, 98, 50, 83, 101, 112, 97, 114, 97, 116, 105, 111, 110, 70, 117, 110, 99, 116, 105, 111, 110, 58, 58, 73, 110, 105, 116, 105, 97, 108, 105, 122, 101, 40, 99, 111, 110, 115, 116, 32, 98, 50, 83, 105, 109, 112, 108, 101, 120, 67, 97, 99, 104, 101, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 80, 114, 111, 120, 121, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 83, 119, 101, 101, 112, 32, 38, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 80, 114, 111, 120, 121, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 83, 119, 101, 101, 112, 32, 38, 44, 32, 102, 108, 111, 97, 116, 51, 50, 41, 0 ], "i8", w);

qh = A([ 48, 32, 60, 32, 99, 111, 117, 110, 116, 32, 38, 38, 32, 99, 111, 117, 110, 116, 32, 60, 32, 51, 0 ], "i8", w);

th = A([ 0, 0, 42, 44, 46, 48, 50, 52, 54, 56 ], "i8*", w);

A(1, "void*", w);

vh = A([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 108, 108, 105, 115, 105, 111, 110, 47, 83, 104, 97, 112, 101, 115, 47, 98, 50, 67, 104, 97, 105, 110, 83, 104, 97, 112, 101, 46, 99, 112, 112, 0 ], "i8", w);

A([ 118, 111, 105, 100, 32, 98, 50, 67, 104, 97, 105, 110, 83, 104, 97, 112, 101, 58, 58, 67, 114, 101, 97, 116, 101, 76, 111, 111, 112, 40, 99, 111, 110, 115, 116, 32, 98, 50, 86, 101, 99, 50, 32, 42, 44, 32, 105, 110, 116, 51, 50, 41, 0 ], "i8", w);

Lh = A([ 109, 95, 118, 101, 114, 116, 105, 99, 101, 115, 32, 61, 61, 32, 95, 95, 110, 117, 108, 108, 32, 38, 38, 32, 109, 95, 99, 111, 117, 110, 116, 32, 61, 61, 32, 48, 0 ], "i8", w);

Kh = A([ 118, 111, 105, 100, 32, 98, 50, 67, 104, 97, 105, 110, 83, 104, 97, 112, 101, 58, 58, 67, 114, 101, 97, 116, 101, 67, 104, 97, 105, 110, 40, 99, 111, 110, 115, 116, 32, 98, 50, 86, 101, 99, 50, 32, 42, 44, 32, 105, 110, 116, 51, 50, 41, 0 ], "i8", w);

Mh = A([ 99, 111, 117, 110, 116, 32, 62, 61, 32, 50, 0 ], "i8", w);

wh = A([ 118, 111, 105, 100, 32, 98, 50, 67, 104, 97, 105, 110, 83, 104, 97, 112, 101, 58, 58, 71, 101, 116, 67, 104, 105, 108, 100, 69, 100, 103, 101, 40, 98, 50, 69, 100, 103, 101, 83, 104, 97, 112, 101, 32, 42, 44, 32, 105, 110, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", w);

xh = A([ 48, 32, 60, 61, 32, 105, 110, 100, 101, 120, 32, 38, 38, 32, 105, 110, 100, 101, 120, 32, 60, 32, 109, 95, 99, 111, 117, 110, 116, 32, 45, 32, 49, 0 ], "i8", w);

Oh = A([ 118, 105, 114, 116, 117, 97, 108, 32, 98, 111, 111, 108, 32, 98, 50, 67, 104, 97, 105, 110, 83, 104, 97, 112, 101, 58, 58, 82, 97, 121, 67, 97, 115, 116, 40, 98, 50, 82, 97, 121, 67, 97, 115, 116, 79, 117, 116, 112, 117, 116, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 82, 97, 121, 67, 97, 115, 116, 73, 110, 112, 117, 116, 32, 38, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 44, 32, 105, 110, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", w);

Eh = A([ 99, 104, 105, 108, 100, 73, 110, 100, 101, 120, 32, 60, 32, 109, 95, 99, 111, 117, 110, 116, 0 ], "i8", w);

Dh = A([ 118, 105, 114, 116, 117, 97, 108, 32, 118, 111, 105, 100, 32, 98, 50, 67, 104, 97, 105, 110, 83, 104, 97, 112, 101, 58, 58, 67, 111, 109, 112, 117, 116, 101, 65, 65, 66, 66, 40, 98, 50, 65, 65, 66, 66, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 44, 32, 105, 110, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", w);

ip = A([ 49, 50, 98, 50, 67, 104, 97, 105, 110, 83, 104, 97, 112, 101, 0 ], "i8", w);

jp = A(3, "i8*", w);

kp = A([ 0, 0, 58, 60, 62, 64, 66, 68, 70, 72 ], "i8*", w);

A(1, "void*", w);

lp = A([ 49, 51, 98, 50, 67, 105, 114, 99, 108, 101, 83, 104, 97, 112, 101, 0 ], "i8", w);

mp = A(3, "i8*", w);

jc = A([ 0, 0, 74, 76, 78, 80, 82, 84, 86, 88 ], "i8*", w);

A(1, "void*", w);

np = A([ 49, 49, 98, 50, 69, 100, 103, 101, 83, 104, 97, 112, 101, 0 ], "i8", w);

op = A(3, "i8*", w);

Vh = A([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 108, 108, 105, 115, 105, 111, 110, 47, 83, 104, 97, 112, 101, 115, 47, 98, 50, 80, 111, 108, 121, 103, 111, 110, 83, 104, 97, 112, 101, 46, 99, 112, 112, 0 ], "i8", w);

A([ 118, 111, 105, 100, 32, 98, 50, 80, 111, 108, 121, 103, 111, 110, 83, 104, 97, 112, 101, 58, 58, 83, 101, 116, 40, 99, 111, 110, 115, 116, 32, 98, 50, 86, 101, 99, 50, 32, 42, 44, 32, 105, 110, 116, 51, 50, 41, 0 ], "i8", w);

A([ 51, 32, 60, 61, 32, 99, 111, 117, 110, 116, 32, 38, 38, 32, 99, 111, 117, 110, 116, 32, 60, 61, 32, 56, 0 ], "i8", w);

A([ 101, 100, 103, 101, 46, 76, 101, 110, 103, 116, 104, 83, 113, 117, 97, 114, 101, 100, 40, 41, 32, 62, 32, 49, 46, 49, 57, 50, 48, 57, 50, 57, 48, 69, 45, 48, 55, 70, 32, 42, 32, 49, 46, 49, 57, 50, 48, 57, 50, 57, 48, 69, 45, 48, 55, 70, 0 ], "i8", w);

Wh = A([ 118, 105, 114, 116, 117, 97, 108, 32, 98, 111, 111, 108, 32, 98, 50, 80, 111, 108, 121, 103, 111, 110, 83, 104, 97, 112, 101, 58, 58, 82, 97, 121, 67, 97, 115, 116, 40, 98, 50, 82, 97, 121, 67, 97, 115, 116, 79, 117, 116, 112, 117, 116, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 82, 97, 121, 67, 97, 115, 116, 73, 110, 112, 117, 116, 32, 38, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 44, 32, 105, 110, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", w);

Xh = A([ 48, 46, 48, 102, 32, 60, 61, 32, 108, 111, 119, 101, 114, 32, 38, 38, 32, 108, 111, 119, 101, 114, 32, 60, 61, 32, 105, 110, 112, 117, 116, 46, 109, 97, 120, 70, 114, 97, 99, 116, 105, 111, 110, 0 ], "i8", w);

Zh = A([ 118, 105, 114, 116, 117, 97, 108, 32, 118, 111, 105, 100, 32, 98, 50, 80, 111, 108, 121, 103, 111, 110, 83, 104, 97, 112, 101, 58, 58, 67, 111, 109, 112, 117, 116, 101, 77, 97, 115, 115, 40, 98, 50, 77, 97, 115, 115, 68, 97, 116, 97, 32, 42, 44, 32, 102, 108, 111, 97, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", w);

$h = A([ 109, 95, 118, 101, 114, 116, 101, 120, 67, 111, 117, 110, 116, 32, 62, 61, 32, 51, 0 ], "i8", w);

ai = A([ 97, 114, 101, 97, 32, 62, 32, 49, 46, 49, 57, 50, 48, 57, 50, 57, 48, 69, 45, 48, 55, 70, 0 ], "i8", w);

$b = A([ 0, 0, 90, 92, 94, 96, 98, 100, 102, 104 ], "i8*", w);

A(1, "void*", w);

pp = A([ 49, 52, 98, 50, 80, 111, 108, 121, 103, 111, 110, 83, 104, 97, 112, 101, 0 ], "i8", w);

qp = A(3, "i8*", w);

A([ 98, 50, 86, 101, 99, 50, 32, 67, 111, 109, 112, 117, 116, 101, 67, 101, 110, 116, 114, 111, 105, 100, 40, 99, 111, 110, 115, 116, 32, 98, 50, 86, 101, 99, 50, 32, 42, 44, 32, 105, 110, 116, 51, 50, 41, 0 ], "i8", w);

A([ 99, 111, 117, 110, 116, 32, 62, 61, 32, 51, 0 ], "i8", w);

gi = A([ 16, 32, 64, 96, 128, 160, 192, 224, 256, 320, 384, 448, 512, 640 ], "i32", w);

hi = A(641, "i8", w);

ci = A(1, "i8", w);

di = A([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 109, 109, 111, 110, 47, 98, 50, 66, 108, 111, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 46, 99, 112, 112, 0 ], "i8", w);

ei = A([ 98, 50, 66, 108, 111, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 58, 58, 98, 50, 66, 108, 111, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 40, 41, 0 ], "i8", w);

fi = A([ 106, 32, 60, 32, 98, 50, 95, 98, 108, 111, 99, 107, 83, 105, 122, 101, 115, 0 ], "i8", w);

ri = A([ 118, 111, 105, 100, 32, 42, 98, 50, 66, 108, 111, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 58, 58, 65, 108, 108, 111, 99, 97, 116, 101, 40, 105, 110, 116, 51, 50, 41, 0 ], "i8", w);

ki = A([ 48, 32, 60, 32, 115, 105, 122, 101, 0 ], "i8", w);

li = A([ 48, 32, 60, 61, 32, 105, 110, 100, 101, 120, 32, 38, 38, 32, 105, 110, 100, 101, 120, 32, 60, 32, 98, 50, 95, 98, 108, 111, 99, 107, 83, 105, 122, 101, 115, 0 ], "i8", w);

si = A([ 98, 108, 111, 99, 107, 67, 111, 117, 110, 116, 32, 42, 32, 98, 108, 111, 99, 107, 83, 105, 122, 101, 32, 60, 61, 32, 98, 50, 95, 99, 104, 117, 110, 107, 83, 105, 122, 101, 0 ], "i8", w);

ji = A([ 118, 111, 105, 100, 32, 98, 50, 66, 108, 111, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 58, 58, 70, 114, 101, 101, 40, 118, 111, 105, 100, 32, 42, 44, 32, 105, 110, 116, 51, 50, 41, 0 ], "i8", w);

rp = A([ 0, 0, 106, 108, 40, 40, 40, 40, 40, 40 ], "i8*", w);

A(1, "void*", w);

sp = A([ 54, 98, 50, 68, 114, 97, 119, 0 ], "i8", w);

tp = A(2, "i8*", w);

se = A(2, "float", w);

A([ 2, 2, 1 ], "i32", w);

yi = A([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 109, 109, 111, 110, 47, 98, 50, 83, 116, 97, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 46, 99, 112, 112, 0 ], "i8", w);

zi = A([ 98, 50, 83, 116, 97, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 58, 58, 126, 98, 50, 83, 116, 97, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 40, 41, 0 ], "i8", w);

Ai = A([ 109, 95, 105, 110, 100, 101, 120, 32, 61, 61, 32, 48, 0 ], "i8", w);

Bi = A([ 109, 95, 101, 110, 116, 114, 121, 67, 111, 117, 110, 116, 32, 61, 61, 32, 48, 0 ], "i8", w);

Ji = A([ 118, 111, 105, 100, 32, 42, 98, 50, 83, 116, 97, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 58, 58, 65, 108, 108, 111, 99, 97, 116, 101, 40, 105, 110, 116, 51, 50, 41, 0 ], "i8", w);

Ki = A([ 109, 95, 101, 110, 116, 114, 121, 67, 111, 117, 110, 116, 32, 60, 32, 98, 50, 95, 109, 97, 120, 83, 116, 97, 99, 107, 69, 110, 116, 114, 105, 101, 115, 0 ], "i8", w);

Di = A([ 118, 111, 105, 100, 32, 98, 50, 83, 116, 97, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 58, 58, 70, 114, 101, 101, 40, 118, 111, 105, 100, 32, 42, 41, 0 ], "i8", w);

Ei = A([ 109, 95, 101, 110, 116, 114, 121, 67, 111, 117, 110, 116, 32, 62, 32, 48, 0 ], "i8", w);

Fi = A([ 112, 32, 61, 61, 32, 101, 110, 116, 114, 121, 45, 62, 100, 97, 116, 97, 0 ], "i8", w);

Qi = A([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 98, 50, 66, 111, 100, 121, 46, 99, 112, 112, 0 ], "i8", w);

Ri = A([ 98, 50, 66, 111, 100, 121, 58, 58, 98, 50, 66, 111, 100, 121, 40, 99, 111, 110, 115, 116, 32, 98, 50, 66, 111, 100, 121, 68, 101, 102, 32, 42, 44, 32, 98, 50, 87, 111, 114, 108, 100, 32, 42, 41, 0 ], "i8", w);

Si = A([ 98, 100, 45, 62, 112, 111, 115, 105, 116, 105, 111, 110, 46, 73, 115, 86, 97, 108, 105, 100, 40, 41, 0 ], "i8", w);

Ti = A([ 98, 100, 45, 62, 108, 105, 110, 101, 97, 114, 86, 101, 108, 111, 99, 105, 116, 121, 46, 73, 115, 86, 97, 108, 105, 100, 40, 41, 0 ], "i8", w);

Ui = A([ 98, 50, 73, 115, 86, 97, 108, 105, 100, 40, 98, 100, 45, 62, 97, 110, 103, 108, 101, 41, 0 ], "i8", w);

Vi = A([ 98, 50, 73, 115, 86, 97, 108, 105, 100, 40, 98, 100, 45, 62, 97, 110, 103, 117, 108, 97, 114, 86, 101, 108, 111, 99, 105, 116, 121, 41, 0 ], "i8", w);

Wi = A([ 98, 50, 73, 115, 86, 97, 108, 105, 100, 40, 98, 100, 45, 62, 97, 110, 103, 117, 108, 97, 114, 68, 97, 109, 112, 105, 110, 103, 41, 32, 38, 38, 32, 98, 100, 45, 62, 97, 110, 103, 117, 108, 97, 114, 68, 97, 109, 112, 105, 110, 103, 32, 62, 61, 32, 48, 46, 48, 102, 0 ], "i8", w);

Xi = A([ 98, 50, 73, 115, 86, 97, 108, 105, 100, 40, 98, 100, 45, 62, 108, 105, 110, 101, 97, 114, 68, 97, 109, 112, 105, 110, 103, 41, 32, 38, 38, 32, 98, 100, 45, 62, 108, 105, 110, 101, 97, 114, 68, 97, 109, 112, 105, 110, 103, 32, 62, 61, 32, 48, 46, 48, 102, 0 ], "i8", w);

A([ 118, 111, 105, 100, 32, 98, 50, 66, 111, 100, 121, 58, 58, 83, 101, 116, 84, 121, 112, 101, 40, 98, 50, 66, 111, 100, 121, 84, 121, 112, 101, 41, 0 ], "i8", w);

hj = A([ 109, 95, 119, 111, 114, 108, 100, 45, 62, 73, 115, 76, 111, 99, 107, 101, 100, 40, 41, 32, 61, 61, 32, 102, 97, 108, 115, 101, 0 ], "i8", w);

gj = A([ 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 98, 50, 66, 111, 100, 121, 58, 58, 67, 114, 101, 97, 116, 101, 70, 105, 120, 116, 117, 114, 101, 40, 99, 111, 110, 115, 116, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 68, 101, 102, 32, 42, 41, 0 ], "i8", w);

A([ 118, 111, 105, 100, 32, 98, 50, 66, 111, 100, 121, 58, 58, 68, 101, 115, 116, 114, 111, 121, 70, 105, 120, 116, 117, 114, 101, 40, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 41, 0 ], "i8", w);

A([ 102, 105, 120, 116, 117, 114, 101, 45, 62, 109, 95, 98, 111, 100, 121, 32, 61, 61, 32, 116, 104, 105, 115, 0 ], "i8", w);

A([ 109, 95, 102, 105, 120, 116, 117, 114, 101, 67, 111, 117, 110, 116, 32, 62, 32, 48, 0 ], "i8", w);

A([ 102, 111, 117, 110, 100, 0 ], "i8", w);

Zi = A([ 118, 111, 105, 100, 32, 98, 50, 66, 111, 100, 121, 58, 58, 82, 101, 115, 101, 116, 77, 97, 115, 115, 68, 97, 116, 97, 40, 41, 0 ], "i8", w);

$i = A([ 109, 95, 116, 121, 112, 101, 32, 61, 61, 32, 98, 50, 95, 100, 121, 110, 97, 109, 105, 99, 66, 111, 100, 121, 0 ], "i8", w);

aj = A([ 109, 95, 73, 32, 62, 32, 48, 46, 48, 102, 0 ], "i8", w);

A([ 118, 111, 105, 100, 32, 98, 50, 66, 111, 100, 121, 58, 58, 83, 101, 116, 77, 97, 115, 115, 68, 97, 116, 97, 40, 99, 111, 110, 115, 116, 32, 98, 50, 77, 97, 115, 115, 68, 97, 116, 97, 32, 42, 41, 0 ], "i8", w);

A([ 118, 111, 105, 100, 32, 98, 50, 66, 111, 100, 121, 58, 58, 83, 101, 116, 84, 114, 97, 110, 115, 102, 111, 114, 109, 40, 99, 111, 110, 115, 116, 32, 98, 50, 86, 101, 99, 50, 32, 38, 44, 32, 102, 108, 111, 97, 116, 51, 50, 41, 0 ], "i8", w);

A([ 118, 111, 105, 100, 32, 98, 50, 66, 111, 100, 121, 58, 58, 83, 101, 116, 65, 99, 116, 105, 118, 101, 40, 98, 111, 111, 108, 41, 0 ], "i8", w);

A([ 32, 32, 98, 50, 66, 111, 100, 121, 68, 101, 102, 32, 98, 100, 59, 10, 0 ], "i8", w);

A([ 32, 32, 98, 100, 46, 116, 121, 112, 101, 32, 61, 32, 98, 50, 66, 111, 100, 121, 84, 121, 112, 101, 40, 37, 100, 41, 59, 10, 0 ], "i8", w);

A([ 32, 32, 98, 100, 46, 112, 111, 115, 105, 116, 105, 111, 110, 46, 83, 101, 116, 40, 37, 46, 49, 53, 108, 101, 102, 44, 32, 37, 46, 49, 53, 108, 101, 102, 41, 59, 10, 0 ], "i8", w);

A([ 32, 32, 98, 100, 46, 97, 110, 103, 108, 101, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0 ], "i8", w);

A([ 32, 32, 98, 100, 46, 108, 105, 110, 101, 97, 114, 86, 101, 108, 111, 99, 105, 116, 121, 46, 83, 101, 116, 40, 37, 46, 49, 53, 108, 101, 102, 44, 32, 37, 46, 49, 53, 108, 101, 102, 41, 59, 10, 0 ], "i8", w);

A([ 32, 32, 98, 100, 46, 97, 110, 103, 117, 108, 97, 114, 86, 101, 108, 111, 99, 105, 116, 121, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0 ], "i8", w);

A([ 32, 32, 98, 100, 46, 108, 105, 110, 101, 97, 114, 68, 97, 109, 112, 105, 110, 103, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0 ], "i8", w);

A([ 32, 32, 98, 100, 46, 97, 110, 103, 117, 108, 97, 114, 68, 97, 109, 112, 105, 110, 103, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0 ], "i8", w);

A([ 32, 32, 98, 100, 46, 97, 108, 108, 111, 119, 83, 108, 101, 101, 112, 32, 61, 32, 98, 111, 111, 108, 40, 37, 100, 41, 59, 10, 0 ], "i8", w);

A([ 32, 32, 98, 100, 46, 97, 119, 97, 107, 101, 32, 61, 32, 98, 111, 111, 108, 40, 37, 100, 41, 59, 10, 0 ], "i8", w);

A([ 32, 32, 98, 100, 46, 102, 105, 120, 101, 100, 82, 111, 116, 97, 116, 105, 111, 110, 32, 61, 32, 98, 111, 111, 108, 40, 37, 100, 41, 59, 10, 0 ], "i8", w);

A([ 32, 32, 98, 100, 46, 98, 117, 108, 108, 101, 116, 32, 61, 32, 98, 111, 111, 108, 40, 37, 100, 41, 59, 10, 0 ], "i8", w);

A([ 32, 32, 98, 100, 46, 97, 99, 116, 105, 118, 101, 32, 61, 32, 98, 111, 111, 108, 40, 37, 100, 41, 59, 10, 0 ], "i8", w);

A([ 32, 32, 98, 100, 46, 103, 114, 97, 118, 105, 116, 121, 83, 99, 97, 108, 101, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0 ], "i8", w);

A([ 32, 32, 98, 111, 100, 105, 101, 115, 91, 37, 100, 93, 32, 61, 32, 109, 95, 119, 111, 114, 108, 100, 45, 62, 67, 114, 101, 97, 116, 101, 66, 111, 100, 121, 40, 38, 98, 100, 41, 59, 10, 0 ], "i8", w);

A([ 32, 32, 123, 10, 0 ], "i8", w);

A([ 32, 32, 125, 10, 0 ], "i8", w);

nj = A(1, "i32 (...)**", w);

oj = A(1, "i32 (...)**", w);

Ej = A([ 118, 111, 105, 100, 32, 42, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 71, 101, 116, 85, 115, 101, 114, 68, 97, 116, 97, 40, 105, 110, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", w);

Mg = A([ 48, 32, 60, 61, 32, 112, 114, 111, 120, 121, 73, 100, 32, 38, 38, 32, 112, 114, 111, 120, 121, 73, 100, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", w);

Hj = A([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 109, 109, 111, 110, 47, 98, 50, 71, 114, 111, 119, 97, 98, 108, 101, 83, 116, 97, 99, 107, 46, 104, 0 ], "i8", w);

Ij = A([ 105, 110, 116, 32, 98, 50, 71, 114, 111, 119, 97, 98, 108, 101, 83, 116, 97, 99, 107, 60, 105, 110, 116, 44, 32, 50, 53, 54, 62, 58, 58, 80, 111, 112, 40, 41, 0 ], "i8", w);

Jj = A([ 109, 95, 99, 111, 117, 110, 116, 32, 62, 32, 48, 0 ], "i8", w);

Dj = A([ 99, 111, 110, 115, 116, 32, 98, 50, 65, 65, 66, 66, 32, 38, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 71, 101, 116, 70, 97, 116, 65, 65, 66, 66, 40, 105, 110, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", w);

vp = A([ 0, 0, 6, 110, 112, 114, 116, 118 ], "i8*", w);

A(1, "void*", w);

wp = A([ 49, 55, 98, 50, 67, 111, 110, 116, 97, 99, 116, 76, 105, 115, 116, 101, 110, 101, 114, 0 ], "i8", w);

xp = A(2, "i8*", w);

Qj = A([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 98, 50, 70, 105, 120, 116, 117, 114, 101, 46, 99, 112, 112, 0 ], "i8", w);

Rj = A([ 118, 111, 105, 100, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 58, 58, 68, 101, 115, 116, 114, 111, 121, 40, 98, 50, 66, 108, 111, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 32, 42, 41, 0 ], "i8", w);

Sj = A([ 109, 95, 112, 114, 111, 120, 121, 67, 111, 117, 110, 116, 32, 61, 61, 32, 48, 0 ], "i8", w);

Tj = A([ 118, 111, 105, 100, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 58, 58, 67, 114, 101, 97, 116, 101, 80, 114, 111, 120, 105, 101, 115, 40, 98, 50, 66, 114, 111, 97, 100, 80, 104, 97, 115, 101, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 41, 0 ], "i8", w);

A([ 32, 32, 32, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 68, 101, 102, 32, 102, 100, 59, 10, 0 ], "i8", w);

A([ 32, 32, 32, 32, 102, 100, 46, 102, 114, 105, 99, 116, 105, 111, 110, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0 ], "i8", w);

A([ 32, 32, 32, 32, 102, 100, 46, 114, 101, 115, 116, 105, 116, 117, 116, 105, 111, 110, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0 ], "i8", w);

A([ 32, 32, 32, 32, 102, 100, 46, 100, 101, 110, 115, 105, 116, 121, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0 ], "i8", w);

A([ 32, 32, 32, 32, 102, 100, 46, 105, 115, 83, 101, 110, 115, 111, 114, 32, 61, 32, 98, 111, 111, 108, 40, 37, 100, 41, 59, 10, 0 ], "i8", w);

A([ 32, 32, 32, 32, 102, 100, 46, 102, 105, 108, 116, 101, 114, 46, 99, 97, 116, 101, 103, 111, 114, 121, 66, 105, 116, 115, 32, 61, 32, 117, 105, 110, 116, 49, 54, 40, 37, 100, 41, 59, 10, 0 ], "i8", w);

A([ 32, 32, 32, 32, 102, 100, 46, 102, 105, 108, 116, 101, 114, 46, 109, 97, 115, 107, 66, 105, 116, 115, 32, 61, 32, 117, 105, 110, 116, 49, 54, 40, 37, 100, 41, 59, 10, 0 ], "i8", w);

A([ 32, 32, 32, 32, 102, 100, 46, 102, 105, 108, 116, 101, 114, 46, 103, 114, 111, 117, 112, 73, 110, 100, 101, 120, 32, 61, 32, 105, 110, 116, 49, 54, 40, 37, 100, 41, 59, 10, 0 ], "i8", w);

A([ 32, 32, 32, 32, 98, 50, 67, 105, 114, 99, 108, 101, 83, 104, 97, 112, 101, 32, 115, 104, 97, 112, 101, 59, 10, 0 ], "i8", w);

A([ 32, 32, 32, 32, 115, 104, 97, 112, 101, 46, 109, 95, 114, 97, 100, 105, 117, 115, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0 ], "i8", w);

A([ 32, 32, 32, 32, 115, 104, 97, 112, 101, 46, 109, 95, 112, 46, 83, 101, 116, 40, 37, 46, 49, 53, 108, 101, 102, 44, 32, 37, 46, 49, 53, 108, 101, 102, 41, 59, 10, 0 ], "i8", w);

A([ 32, 32, 32, 32, 98, 50, 69, 100, 103, 101, 83, 104, 97, 112, 101, 32, 115, 104, 97, 112, 101, 59, 10, 0 ], "i8", w);

A([ 32, 32, 32, 32, 115, 104, 97, 112, 101, 46, 109, 95, 118, 101, 114, 116, 101, 120, 48, 46, 83, 101, 116, 40, 37, 46, 49, 53, 108, 101, 102, 44, 32, 37, 46, 49, 53, 108, 101, 102, 41, 59, 10, 0 ], "i8", w);

A([ 32, 32, 32, 32, 115, 104, 97, 112, 101, 46, 109, 95, 118, 101, 114, 116, 101, 120, 49, 46, 83, 101, 116, 40, 37, 46, 49, 53, 108, 101, 102, 44, 32, 37, 46, 49, 53, 108, 101, 102, 41, 59, 10, 0 ], "i8", w);

A([ 32, 32, 32, 32, 115, 104, 97, 112, 101, 46, 109, 95, 118, 101, 114, 116, 101, 120, 50, 46, 83, 101, 116, 40, 37, 46, 49, 53, 108, 101, 102, 44, 32, 37, 46, 49, 53, 108, 101, 102, 41, 59, 10, 0 ], "i8", w);

A([ 32, 32, 32, 32, 115, 104, 97, 112, 101, 46, 109, 95, 118, 101, 114, 116, 101, 120, 51, 46, 83, 101, 116, 40, 37, 46, 49, 53, 108, 101, 102, 44, 32, 37, 46, 49, 53, 108, 101, 102, 41, 59, 10, 0 ], "i8", w);

A([ 32, 32, 32, 32, 115, 104, 97, 112, 101, 46, 109, 95, 104, 97, 115, 86, 101, 114, 116, 101, 120, 48, 32, 61, 32, 98, 111, 111, 108, 40, 37, 100, 41, 59, 10, 0 ], "i8", w);

A([ 32, 32, 32, 32, 115, 104, 97, 112, 101, 46, 109, 95, 104, 97, 115, 86, 101, 114, 116, 101, 120, 51, 32, 61, 32, 98, 111, 111, 108, 40, 37, 100, 41, 59, 10, 0 ], "i8", w);

A([ 32, 32, 32, 32, 98, 50, 80, 111, 108, 121, 103, 111, 110, 83, 104, 97, 112, 101, 32, 115, 104, 97, 112, 101, 59, 10, 0 ], "i8", w);

A([ 32, 32, 32, 32, 98, 50, 86, 101, 99, 50, 32, 118, 115, 91, 37, 100, 93, 59, 10, 0 ], "i8", w);

A([ 32, 32, 32, 32, 118, 115, 91, 37, 100, 93, 46, 83, 101, 116, 40, 37, 46, 49, 53, 108, 101, 102, 44, 32, 37, 46, 49, 53, 108, 101, 102, 41, 59, 10, 0 ], "i8", w);

A([ 32, 32, 32, 32, 115, 104, 97, 112, 101, 46, 83, 101, 116, 40, 118, 115, 44, 32, 37, 100, 41, 59, 10, 0 ], "i8", w);

A([ 32, 32, 32, 32, 98, 50, 67, 104, 97, 105, 110, 83, 104, 97, 112, 101, 32, 115, 104, 97, 112, 101, 59, 10, 0 ], "i8", w);

A([ 32, 32, 32, 32, 115, 104, 97, 112, 101, 46, 67, 114, 101, 97, 116, 101, 67, 104, 97, 105, 110, 40, 118, 115, 44, 32, 37, 100, 41, 59, 10, 0 ], "i8", w);

A([ 32, 32, 32, 32, 115, 104, 97, 112, 101, 46, 109, 95, 112, 114, 101, 118, 86, 101, 114, 116, 101, 120, 46, 83, 101, 116, 40, 37, 46, 49, 53, 108, 101, 102, 44, 32, 37, 46, 49, 53, 108, 101, 102, 41, 59, 10, 0 ], "i8", w);

A([ 32, 32, 32, 32, 115, 104, 97, 112, 101, 46, 109, 95, 110, 101, 120, 116, 86, 101, 114, 116, 101, 120, 46, 83, 101, 116, 40, 37, 46, 49, 53, 108, 101, 102, 44, 32, 37, 46, 49, 53, 108, 101, 102, 41, 59, 10, 0 ], "i8", w);

A([ 32, 32, 32, 32, 115, 104, 97, 112, 101, 46, 109, 95, 104, 97, 115, 80, 114, 101, 118, 86, 101, 114, 116, 101, 120, 32, 61, 32, 98, 111, 111, 108, 40, 37, 100, 41, 59, 10, 0 ], "i8", w);

A([ 32, 32, 32, 32, 115, 104, 97, 112, 101, 46, 109, 95, 104, 97, 115, 78, 101, 120, 116, 86, 101, 114, 116, 101, 120, 32, 61, 32, 98, 111, 111, 108, 40, 37, 100, 41, 59, 10, 0 ], "i8", w);

A([ 10, 0 ], "i8", w);

A([ 32, 32, 32, 32, 102, 100, 46, 115, 104, 97, 112, 101, 32, 61, 32, 38, 115, 104, 97, 112, 101, 59, 10, 0 ], "i8", w);

A([ 32, 32, 32, 32, 98, 111, 100, 105, 101, 115, 91, 37, 100, 93, 45, 62, 67, 114, 101, 97, 116, 101, 70, 105, 120, 116, 117, 114, 101, 40, 38, 102, 100, 41, 59, 10, 0 ], "i8", w);

hk = A([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 98, 50, 73, 115, 108, 97, 110, 100, 46, 99, 112, 112, 0 ], "i8", w);

ik = A([ 118, 111, 105, 100, 32, 98, 50, 73, 115, 108, 97, 110, 100, 58, 58, 83, 111, 108, 118, 101, 84, 79, 73, 40, 99, 111, 110, 115, 116, 32, 98, 50, 84, 105, 109, 101, 83, 116, 101, 112, 32, 38, 44, 32, 105, 110, 116, 51, 50, 44, 32, 105, 110, 116, 51, 50, 41, 0 ], "i8", w);

pk = A([ 116, 111, 105, 73, 110, 100, 101, 120, 65, 32, 60, 32, 109, 95, 98, 111, 100, 121, 67, 111, 117, 110, 116, 0 ], "i8", w);

qk = A([ 116, 111, 105, 73, 110, 100, 101, 120, 66, 32, 60, 32, 109, 95, 98, 111, 100, 121, 67, 111, 117, 110, 116, 0 ], "i8", w);

Bk = A([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 98, 50, 87, 111, 114, 108, 100, 46, 99, 112, 112, 0 ], "i8", w);

Ck = A([ 98, 50, 66, 111, 100, 121, 32, 42, 98, 50, 87, 111, 114, 108, 100, 58, 58, 67, 114, 101, 97, 116, 101, 66, 111, 100, 121, 40, 99, 111, 110, 115, 116, 32, 98, 50, 66, 111, 100, 121, 68, 101, 102, 32, 42, 41, 0 ], "i8", w);

Dk = A([ 73, 115, 76, 111, 99, 107, 101, 100, 40, 41, 32, 61, 61, 32, 102, 97, 108, 115, 101, 0 ], "i8", w);

A([ 118, 111, 105, 100, 32, 98, 50, 87, 111, 114, 108, 100, 58, 58, 68, 101, 115, 116, 114, 111, 121, 66, 111, 100, 121, 40, 98, 50, 66, 111, 100, 121, 32, 42, 41, 0 ], "i8", w);

A([ 109, 95, 98, 111, 100, 121, 67, 111, 117, 110, 116, 32, 62, 32, 48, 0 ], "i8", w);

A([ 98, 50, 74, 111, 105, 110, 116, 32, 42, 98, 50, 87, 111, 114, 108, 100, 58, 58, 67, 114, 101, 97, 116, 101, 74, 111, 105, 110, 116, 40, 99, 111, 110, 115, 116, 32, 98, 50, 74, 111, 105, 110, 116, 68, 101, 102, 32, 42, 41, 0 ], "i8", w);

A([ 118, 111, 105, 100, 32, 98, 50, 87, 111, 114, 108, 100, 58, 58, 68, 101, 115, 116, 114, 111, 121, 74, 111, 105, 110, 116, 40, 98, 50, 74, 111, 105, 110, 116, 32, 42, 41, 0 ], "i8", w);

A([ 109, 95, 106, 111, 105, 110, 116, 67, 111, 117, 110, 116, 32, 62, 32, 48, 0 ], "i8", w);

Nk = A([ 118, 111, 105, 100, 32, 98, 50, 87, 111, 114, 108, 100, 58, 58, 83, 111, 108, 118, 101, 40, 99, 111, 110, 115, 116, 32, 98, 50, 84, 105, 109, 101, 83, 116, 101, 112, 32, 38, 41, 0 ], "i8", w);

Ok = A([ 98, 45, 62, 73, 115, 65, 99, 116, 105, 118, 101, 40, 41, 32, 61, 61, 32, 116, 114, 117, 101, 0 ], "i8", w);

Pk = A([ 115, 116, 97, 99, 107, 67, 111, 117, 110, 116, 32, 60, 32, 115, 116, 97, 99, 107, 83, 105, 122, 101, 0 ], "i8", w);

Tk = A([ 118, 111, 105, 100, 32, 98, 50, 87, 111, 114, 108, 100, 58, 58, 83, 111, 108, 118, 101, 84, 79, 73, 40, 99, 111, 110, 115, 116, 32, 98, 50, 84, 105, 109, 101, 83, 116, 101, 112, 32, 38, 41, 0 ], "i8", w);

Uk = A([ 116, 121, 112, 101, 65, 32, 61, 61, 32, 98, 50, 95, 100, 121, 110, 97, 109, 105, 99, 66, 111, 100, 121, 32, 124, 124, 32, 116, 121, 112, 101, 66, 32, 61, 61, 32, 98, 50, 95, 100, 121, 110, 97, 109, 105, 99, 66, 111, 100, 121, 0 ], "i8", w);

Wk = A([ 97, 108, 112, 104, 97, 48, 32, 60, 32, 49, 46, 48, 102, 0 ], "i8", w);

A([ 118, 111, 105, 100, 32, 98, 50, 87, 111, 114, 108, 100, 58, 58, 68, 114, 97, 119, 83, 104, 97, 112, 101, 40, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 67, 111, 108, 111, 114, 32, 38, 41, 0 ], "i8", w);

A([ 118, 101, 114, 116, 101, 120, 67, 111, 117, 110, 116, 32, 60, 61, 32, 56, 0 ], "i8", w);

A([ 98, 50, 86, 101, 99, 50, 32, 103, 40, 37, 46, 49, 53, 108, 101, 102, 44, 32, 37, 46, 49, 53, 108, 101, 102, 41, 59, 10, 0 ], "i8", w);

A([ 109, 95, 119, 111, 114, 108, 100, 45, 62, 83, 101, 116, 71, 114, 97, 118, 105, 116, 121, 40, 103, 41, 59, 10, 0 ], "i8", w);

A([ 98, 50, 66, 111, 100, 121, 42, 42, 32, 98, 111, 100, 105, 101, 115, 32, 61, 32, 40, 98, 50, 66, 111, 100, 121, 42, 42, 41, 98, 50, 65, 108, 108, 111, 99, 40, 37, 100, 32, 42, 32, 115, 105, 122, 101, 111, 102, 40, 98, 50, 66, 111, 100, 121, 42, 41, 41, 59, 10, 0 ], "i8", w);

A([ 98, 50, 74, 111, 105, 110, 116, 42, 42, 32, 106, 111, 105, 110, 116, 115, 32, 61, 32, 40, 98, 50, 74, 111, 105, 110, 116, 42, 42, 41, 98, 50, 65, 108, 108, 111, 99, 40, 37, 100, 32, 42, 32, 115, 105, 122, 101, 111, 102, 40, 98, 50, 74, 111, 105, 110, 116, 42, 41, 41, 59, 10, 0 ], "i8", w);

A([ 123, 10, 0 ], "i8", w);

A([ 125, 10, 0 ], "i8", w);

A([ 98, 50, 70, 114, 101, 101, 40, 106, 111, 105, 110, 116, 115, 41, 59, 10, 0 ], "i8", w);

A([ 98, 50, 70, 114, 101, 101, 40, 98, 111, 100, 105, 101, 115, 41, 59, 10, 0 ], "i8", w);

A([ 106, 111, 105, 110, 116, 115, 32, 61, 32, 78, 85, 76, 76, 59, 10, 0 ], "i8", w);

A([ 98, 111, 100, 105, 101, 115, 32, 61, 32, 78, 85, 76, 76, 59, 10, 0 ], "i8", w);

Cj = A([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 108, 108, 105, 115, 105, 111, 110, 47, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 46, 104, 0 ], "i8", w);

A([ 118, 111, 105, 100, 32, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 82, 97, 121, 67, 97, 115, 116, 40, 98, 50, 87, 111, 114, 108, 100, 82, 97, 121, 67, 97, 115, 116, 87, 114, 97, 112, 112, 101, 114, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 82, 97, 121, 67, 97, 115, 116, 73, 110, 112, 117, 116, 32, 38, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", w);

A([ 114, 46, 76, 101, 110, 103, 116, 104, 83, 113, 117, 97, 114, 101, 100, 40, 41, 32, 62, 32, 48, 46, 48, 102, 0 ], "i8", w);

Zk = A([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 109, 109, 111, 110, 47, 98, 50, 77, 97, 116, 104, 46, 104, 0 ], "i8", w);

$k = A([ 118, 111, 105, 100, 32, 98, 50, 83, 119, 101, 101, 112, 58, 58, 65, 100, 118, 97, 110, 99, 101, 40, 102, 108, 111, 97, 116, 51, 50, 41, 0 ], "i8", w);

Gk = A([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 98, 50, 73, 115, 108, 97, 110, 100, 46, 104, 0 ], "i8", w);

Qk = A([ 118, 111, 105, 100, 32, 98, 50, 73, 115, 108, 97, 110, 100, 58, 58, 65, 100, 100, 40, 98, 50, 74, 111, 105, 110, 116, 32, 42, 41, 0 ], "i8", w);

Rk = A([ 109, 95, 106, 111, 105, 110, 116, 67, 111, 117, 110, 116, 32, 60, 32, 109, 95, 106, 111, 105, 110, 116, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", w);

Kk = A([ 118, 111, 105, 100, 32, 98, 50, 73, 115, 108, 97, 110, 100, 58, 58, 65, 100, 100, 40, 98, 50, 67, 111, 110, 116, 97, 99, 116, 32, 42, 41, 0 ], "i8", w);

Lk = A([ 109, 95, 99, 111, 110, 116, 97, 99, 116, 67, 111, 117, 110, 116, 32, 60, 32, 109, 95, 99, 111, 110, 116, 97, 99, 116, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", w);

Hk = A([ 118, 111, 105, 100, 32, 98, 50, 73, 115, 108, 97, 110, 100, 58, 58, 65, 100, 100, 40, 98, 50, 66, 111, 100, 121, 32, 42, 41, 0 ], "i8", w);

Ik = A([ 109, 95, 98, 111, 100, 121, 67, 111, 117, 110, 116, 32, 60, 32, 109, 95, 98, 111, 100, 121, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", w);

up = A([ 0, 0, 4, 120, 122 ], "i8*", w);

A(1, "void*", w);

yp = A([ 49, 53, 98, 50, 67, 111, 110, 116, 97, 99, 116, 70, 105, 108, 116, 101, 114, 0 ], "i8", w);

zp = A(2, "i8*", w);

el = A([ 0, 0, 124, 126, 128 ], "i8*", w);

A(1, "void*", w);

fl = A([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 67, 111, 110, 116, 97, 99, 116, 115, 47, 98, 50, 67, 104, 97, 105, 110, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 46, 99, 112, 112, 0 ], "i8", w);

gl = A([ 98, 50, 67, 104, 97, 105, 110, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 58, 58, 98, 50, 67, 104, 97, 105, 110, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 40, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 105, 110, 116, 51, 50, 44, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 105, 110, 116, 51, 50, 41, 0 ], "i8", w);

Ap = A([ 50, 51, 98, 50, 67, 104, 97, 105, 110, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 0 ], "i8", w);

Bp = A([ 57, 98, 50, 67, 111, 110, 116, 97, 99, 116, 0 ], "i8", w);

Cp = A(2, "i8*", w);

Dp = A(3, "i8*", w);

ll = A([ 0, 0, 130, 132, 134 ], "i8*", w);

A(1, "void*", w);

ml = A([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 67, 111, 110, 116, 97, 99, 116, 115, 47, 98, 50, 67, 104, 97, 105, 110, 65, 110, 100, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 46, 99, 112, 112, 0 ], "i8", w);

nl = A([ 98, 50, 67, 104, 97, 105, 110, 65, 110, 100, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 58, 58, 98, 50, 67, 104, 97, 105, 110, 65, 110, 100, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 40, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 105, 110, 116, 51, 50, 44, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 105, 110, 116, 51, 50, 41, 0 ], "i8", w);

hl = A([ 109, 95, 102, 105, 120, 116, 117, 114, 101, 65, 45, 62, 71, 101, 116, 84, 121, 112, 101, 40, 41, 32, 61, 61, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 101, 95, 99, 104, 97, 105, 110, 0 ], "i8", w);

Ep = A([ 50, 52, 98, 50, 67, 104, 97, 105, 110, 65, 110, 100, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 0 ], "i8", w);

Fp = A(3, "i8*", w);

rl = A([ 0, 0, 136, 138, 140 ], "i8*", w);

A(1, "void*", w);

sl = A([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 67, 111, 110, 116, 97, 99, 116, 115, 47, 98, 50, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 46, 99, 112, 112, 0 ], "i8", w);

tl = A([ 98, 50, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 58, 58, 98, 50, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 40, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 41, 0 ], "i8", w);

ul = A([ 109, 95, 102, 105, 120, 116, 117, 114, 101, 65, 45, 62, 71, 101, 116, 84, 121, 112, 101, 40, 41, 32, 61, 61, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 101, 95, 99, 105, 114, 99, 108, 101, 0 ], "i8", w);

Gp = A([ 49, 53, 98, 50, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 0 ], "i8", w);

Hp = A(3, "i8*", w);

Al = A(48, "%class.b2Contact.289* (%class.b2Fixture.281*, i32, %class.b2Fixture.281*, i32, %class.b2BlockAllocator.74*)*;void (%class.b2Contact.289*, %class.b2BlockAllocator.74*)*;i8;%class.b2Contact.289* (%class.b2Fixture.281*, i32, %class.b2Fixture.281*, i32, %class.b2BlockAllocator.74*)*;void (%class.b2Contact.289*, %class.b2BlockAllocator.74*)*;i8;%class.b2Contact.289* (%class.b2Fixture.281*, i32, %class.b2Fixture.281*, i32, %class.b2BlockAllocator.74*)*;void (%class.b2Contact.289*, %class.b2BlockAllocator.74*)*;i8;%class.b2Contact.289* (%class.b2Fixture.281*, i32, %class.b2Fixture.281*, i32, %class.b2BlockAllocator.74*)*;void (%class.b2Contact.289*, %class.b2BlockAllocator.74*)*;i8;%class.b2Contact.289* (%class.b2Fixture.281*, i32, %class.b2Fixture.281*, i32, %class.b2BlockAllocator.74*)*;void (%class.b2Contact.289*, %class.b2BlockAllocator.74*)*;i8;%class.b2Contact.289* (%class.b2Fixture.281*, i32, %class.b2Fixture.281*, i32, %class.b2BlockAllocator.74*)*;void (%class.b2Contact.289*, %class.b2BlockAllocator.74*)*;i8;%class.b2Contact.289* (%class.b2Fixture.281*, i32, %class.b2Fixture.281*, i32, %class.b2BlockAllocator.74*)*;void (%class.b2Contact.289*, %class.b2BlockAllocator.74*)*;i8;%class.b2Contact.289* (%class.b2Fixture.281*, i32, %class.b2Fixture.281*, i32, %class.b2BlockAllocator.74*)*;void (%class.b2Contact.289*, %class.b2BlockAllocator.74*)*;i8;%class.b2Contact.289* (%class.b2Fixture.281*, i32, %class.b2Fixture.281*, i32, %class.b2BlockAllocator.74*)*;void (%class.b2Contact.289*, %class.b2BlockAllocator.74*)*;i8;%class.b2Contact.289* (%class.b2Fixture.281*, i32, %class.b2Fixture.281*, i32, %class.b2BlockAllocator.74*)*;void (%class.b2Contact.289*, %class.b2BlockAllocator.74*)*;i8;%class.b2Contact.289* (%class.b2Fixture.281*, i32, %class.b2Fixture.281*, i32, %class.b2BlockAllocator.74*)*;void (%class.b2Contact.289*, %class.b2BlockAllocator.74*)*;i8;%class.b2Contact.289* (%class.b2Fixture.281*, i32, %class.b2Fixture.281*, i32, %class.b2BlockAllocator.74*)*;void (%class.b2Contact.289*, %class.b2BlockAllocator.74*)*;i8;%class.b2Contact.289* (%class.b2Fixture.281*, i32, %class.b2Fixture.281*, i32, %class.b2BlockAllocator.74*)*;void (%class.b2Contact.289*, %class.b2BlockAllocator.74*)*;i8;%class.b2Contact.289* (%class.b2Fixture.281*, i32, %class.b2Fixture.281*, i32, %class.b2BlockAllocator.74*)*;void (%class.b2Contact.289*, %class.b2BlockAllocator.74*)*;i8;%class.b2Contact.289* (%class.b2Fixture.281*, i32, %class.b2Fixture.281*, i32, %class.b2BlockAllocator.74*)*;void (%class.b2Contact.289*, %class.b2BlockAllocator.74*)*;i8;%class.b2Contact.289* (%class.b2Fixture.281*, i32, %class.b2Fixture.281*, i32, %class.b2BlockAllocator.74*)*;void (%class.b2Contact.289*, %class.b2BlockAllocator.74*)*;i8".split(";"), w);

Bl = A(1, "i8", w);

wl = A([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 67, 111, 110, 116, 97, 99, 116, 115, 47, 98, 50, 67, 111, 110, 116, 97, 99, 116, 46, 99, 112, 112, 0 ], "i8", w);

xl = A([ 115, 116, 97, 116, 105, 99, 32, 118, 111, 105, 100, 32, 98, 50, 67, 111, 110, 116, 97, 99, 116, 58, 58, 65, 100, 100, 84, 121, 112, 101, 40, 98, 50, 67, 111, 110, 116, 97, 99, 116, 67, 114, 101, 97, 116, 101, 70, 99, 110, 32, 42, 44, 32, 98, 50, 67, 111, 110, 116, 97, 99, 116, 68, 101, 115, 116, 114, 111, 121, 70, 99, 110, 32, 42, 44, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 84, 121, 112, 101, 44, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 84, 121, 112, 101, 41, 0 ], "i8", w);

yl = A([ 48, 32, 60, 61, 32, 116, 121, 112, 101, 49, 32, 38, 38, 32, 116, 121, 112, 101, 49, 32, 60, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 101, 95, 116, 121, 112, 101, 67, 111, 117, 110, 116, 0 ], "i8", w);

zl = A([ 48, 32, 60, 61, 32, 116, 121, 112, 101, 50, 32, 38, 38, 32, 116, 121, 112, 101, 50, 32, 60, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 101, 95, 116, 121, 112, 101, 67, 111, 117, 110, 116, 0 ], "i8", w);

Cl = A([ 115, 116, 97, 116, 105, 99, 32, 98, 50, 67, 111, 110, 116, 97, 99, 116, 32, 42, 98, 50, 67, 111, 110, 116, 97, 99, 116, 58, 58, 67, 114, 101, 97, 116, 101, 40, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 105, 110, 116, 51, 50, 44, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 105, 110, 116, 51, 50, 44, 32, 98, 50, 66, 108, 111, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 32, 42, 41, 0 ], "i8", w);

Dl = A([ 115, 116, 97, 116, 105, 99, 32, 118, 111, 105, 100, 32, 98, 50, 67, 111, 110, 116, 97, 99, 116, 58, 58, 68, 101, 115, 116, 114, 111, 121, 40, 98, 50, 67, 111, 110, 116, 97, 99, 116, 32, 42, 44, 32, 98, 50, 66, 108, 111, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 32, 42, 41, 0 ], "i8", w);

El = A([ 115, 95, 105, 110, 105, 116, 105, 97, 108, 105, 122, 101, 100, 32, 61, 61, 32, 116, 114, 117, 101, 0 ], "i8", w);

Fl = A([ 48, 32, 60, 61, 32, 116, 121, 112, 101, 65, 32, 38, 38, 32, 116, 121, 112, 101, 66, 32, 60, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 101, 95, 116, 121, 112, 101, 67, 111, 117, 110, 116, 0 ], "i8", w);

Gl = A([ 0, 0, 40, 142, 144 ], "i8*", w);

A(1, "void*", w);

Il = A([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 67, 111, 110, 116, 97, 99, 116, 115, 47, 98, 50, 67, 111, 110, 116, 97, 99, 116, 83, 111, 108, 118, 101, 114, 46, 99, 112, 112, 0 ], "i8", w);

Jl = A([ 98, 50, 67, 111, 110, 116, 97, 99, 116, 83, 111, 108, 118, 101, 114, 58, 58, 98, 50, 67, 111, 110, 116, 97, 99, 116, 83, 111, 108, 118, 101, 114, 40, 98, 50, 67, 111, 110, 116, 97, 99, 116, 83, 111, 108, 118, 101, 114, 68, 101, 102, 32, 42, 41, 0 ], "i8", w);

Kl = A([ 112, 111, 105, 110, 116, 67, 111, 117, 110, 116, 32, 62, 32, 48, 0 ], "i8", w);

Ll = A([ 118, 111, 105, 100, 32, 98, 50, 67, 111, 110, 116, 97, 99, 116, 83, 111, 108, 118, 101, 114, 58, 58, 73, 110, 105, 116, 105, 97, 108, 105, 122, 101, 86, 101, 108, 111, 99, 105, 116, 121, 67, 111, 110, 115, 116, 114, 97, 105, 110, 116, 115, 40, 41, 0 ], "i8", w);

Ml = A([ 109, 97, 110, 105, 102, 111, 108, 100, 45, 62, 112, 111, 105, 110, 116, 67, 111, 117, 110, 116, 32, 62, 32, 48, 0 ], "i8", w);

Pl = A([ 118, 111, 105, 100, 32, 98, 50, 67, 111, 110, 116, 97, 99, 116, 83, 111, 108, 118, 101, 114, 58, 58, 83, 111, 108, 118, 101, 86, 101, 108, 111, 99, 105, 116, 121, 67, 111, 110, 115, 116, 114, 97, 105, 110, 116, 115, 40, 41, 0 ], "i8", w);

Ql = A([ 112, 111, 105, 110, 116, 67, 111, 117, 110, 116, 32, 61, 61, 32, 49, 32, 124, 124, 32, 112, 111, 105, 110, 116, 67, 111, 117, 110, 116, 32, 61, 61, 32, 50, 0 ], "i8", w);

Rl = A([ 97, 46, 120, 32, 62, 61, 32, 48, 46, 48, 102, 32, 38, 38, 32, 97, 46, 121, 32, 62, 61, 32, 48, 46, 48, 102, 0 ], "i8", w);

Tl = A([ 118, 111, 105, 100, 32, 98, 50, 80, 111, 115, 105, 116, 105, 111, 110, 83, 111, 108, 118, 101, 114, 77, 97, 110, 105, 102, 111, 108, 100, 58, 58, 73, 110, 105, 116, 105, 97, 108, 105, 122, 101, 40, 98, 50, 67, 111, 110, 116, 97, 99, 116, 80, 111, 115, 105, 116, 105, 111, 110, 67, 111, 110, 115, 116, 114, 97, 105, 110, 116, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 44, 32, 105, 110, 116, 51, 50, 41, 0 ], "i8", w);

Ul = A([ 112, 99, 45, 62, 112, 111, 105, 110, 116, 67, 111, 117, 110, 116, 32, 62, 32, 48, 0 ], "i8", w);

Wl = A([ 0, 0, 146, 148, 150 ], "i8*", w);

A(1, "void*", w);

Xl = A([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 67, 111, 110, 116, 97, 99, 116, 115, 47, 98, 50, 69, 100, 103, 101, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 46, 99, 112, 112, 0 ], "i8", w);

Yl = A([ 98, 50, 69, 100, 103, 101, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 58, 58, 98, 50, 69, 100, 103, 101, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 40, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 41, 0 ], "i8", w);

Ip = A([ 50, 50, 98, 50, 69, 100, 103, 101, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 0 ], "i8", w);

Jp = A(3, "i8*", w);

dm = A([ 0, 0, 152, 154, 156 ], "i8*", w);

A(1, "void*", w);

em = A([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 67, 111, 110, 116, 97, 99, 116, 115, 47, 98, 50, 69, 100, 103, 101, 65, 110, 100, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 46, 99, 112, 112, 0 ], "i8", w);

fm = A([ 98, 50, 69, 100, 103, 101, 65, 110, 100, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 58, 58, 98, 50, 69, 100, 103, 101, 65, 110, 100, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 40, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 41, 0 ], "i8", w);

Zl = A([ 109, 95, 102, 105, 120, 116, 117, 114, 101, 65, 45, 62, 71, 101, 116, 84, 121, 112, 101, 40, 41, 32, 61, 61, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 101, 95, 101, 100, 103, 101, 0 ], "i8", w);

Kp = A([ 50, 51, 98, 50, 69, 100, 103, 101, 65, 110, 100, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 0 ], "i8", w);

Lp = A(3, "i8*", w);

hm = A([ 0, 0, 158, 160, 162 ], "i8*", w);

A(1, "void*", w);

im = A([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 67, 111, 110, 116, 97, 99, 116, 115, 47, 98, 50, 80, 111, 108, 121, 103, 111, 110, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 46, 99, 112, 112, 0 ], "i8", w);

jm = A([ 98, 50, 80, 111, 108, 121, 103, 111, 110, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 58, 58, 98, 50, 80, 111, 108, 121, 103, 111, 110, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 40, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 41, 0 ], "i8", w);

il = A([ 109, 95, 102, 105, 120, 116, 117, 114, 101, 66, 45, 62, 71, 101, 116, 84, 121, 112, 101, 40, 41, 32, 61, 61, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 101, 95, 99, 105, 114, 99, 108, 101, 0 ], "i8", w);

Mp = A([ 50, 53, 98, 50, 80, 111, 108, 121, 103, 111, 110, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 0 ], "i8", w);

Np = A(3, "i8*", w);

mm = A([ 0, 0, 164, 166, 168 ], "i8*", w);

A(1, "void*", w);

nm = A([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 67, 111, 110, 116, 97, 99, 116, 115, 47, 98, 50, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 46, 99, 112, 112, 0 ], "i8", w);

om = A([ 98, 50, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 58, 58, 98, 50, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 40, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 41, 0 ], "i8", w);

km = A([ 109, 95, 102, 105, 120, 116, 117, 114, 101, 65, 45, 62, 71, 101, 116, 84, 121, 112, 101, 40, 41, 32, 61, 61, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 101, 95, 112, 111, 108, 121, 103, 111, 110, 0 ], "i8", w);

ol = A([ 109, 95, 102, 105, 120, 116, 117, 114, 101, 66, 45, 62, 71, 101, 116, 84, 121, 112, 101, 40, 41, 32, 61, 61, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 101, 95, 112, 111, 108, 121, 103, 111, 110, 0 ], "i8", w);

Op = A([ 49, 54, 98, 50, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 0 ], "i8", w);

Pp = A(3, "i8*", w);

bm = A([ 0, 0, 170, 172, 174, 176, 178, 180, 182, 184, 186, 188 ], "i8*", w);

A(1, "void*", w);

rm = A([ 32, 32, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 74, 111, 105, 110, 116, 68, 101, 102, 32, 106, 100, 59, 10, 0 ], "i8", w);

xm = A([ 32, 32, 106, 100, 46, 108, 101, 110, 103, 116, 104, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0 ], "i8", w);

Qp = A([ 49, 53, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 74, 111, 105, 110, 116, 0 ], "i8", w);

Rp = A([ 55, 98, 50, 74, 111, 105, 110, 116, 0 ], "i8", w);

Sp = A(2, "i8*", w);

Tp = A(3, "i8*", w);

Gm = A([ 0, 0, 190, 192, 194, 196, 198, 200, 202, 204, 206, 208 ], "i8*", w);

A(1, "void*", w);

A([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 74, 111, 105, 110, 116, 115, 47, 98, 50, 70, 114, 105, 99, 116, 105, 111, 110, 74, 111, 105, 110, 116, 46, 99, 112, 112, 0 ], "i8", w);

A([ 118, 111, 105, 100, 32, 98, 50, 70, 114, 105, 99, 116, 105, 111, 110, 74, 111, 105, 110, 116, 58, 58, 83, 101, 116, 77, 97, 120, 70, 111, 114, 99, 101, 40, 102, 108, 111, 97, 116, 51, 50, 41, 0 ], "i8", w);

A([ 98, 50, 73, 115, 86, 97, 108, 105, 100, 40, 102, 111, 114, 99, 101, 41, 32, 38, 38, 32, 102, 111, 114, 99, 101, 32, 62, 61, 32, 48, 46, 48, 102, 0 ], "i8", w);

A([ 118, 111, 105, 100, 32, 98, 50, 70, 114, 105, 99, 116, 105, 111, 110, 74, 111, 105, 110, 116, 58, 58, 83, 101, 116, 77, 97, 120, 84, 111, 114, 113, 117, 101, 40, 102, 108, 111, 97, 116, 51, 50, 41, 0 ], "i8", w);

A([ 98, 50, 73, 115, 86, 97, 108, 105, 100, 40, 116, 111, 114, 113, 117, 101, 41, 32, 38, 38, 32, 116, 111, 114, 113, 117, 101, 32, 62, 61, 32, 48, 46, 48, 102, 0 ], "i8", w);

Im = A([ 32, 32, 98, 50, 70, 114, 105, 99, 116, 105, 111, 110, 74, 111, 105, 110, 116, 68, 101, 102, 32, 106, 100, 59, 10, 0 ], "i8", w);

Jm = A([ 32, 32, 106, 100, 46, 109, 97, 120, 70, 111, 114, 99, 101, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0 ], "i8", w);

Km = A([ 32, 32, 106, 100, 46, 109, 97, 120, 84, 111, 114, 113, 117, 101, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0 ], "i8", w);

Up = A([ 49, 53, 98, 50, 70, 114, 105, 99, 116, 105, 111, 110, 74, 111, 105, 110, 116, 0 ], "i8", w);

Vp = A(3, "i8*", w);

Om = A([ 0, 0, 210, 212, 214, 216, 218, 220, 222, 224, 226, 228 ], "i8*", w);

A(1, "void*", w);

Pm = A([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 74, 111, 105, 110, 116, 115, 47, 98, 50, 71, 101, 97, 114, 74, 111, 105, 110, 116, 46, 99, 112, 112, 0 ], "i8", w);

Qm = A([ 98, 50, 71, 101, 97, 114, 74, 111, 105, 110, 116, 58, 58, 98, 50, 71, 101, 97, 114, 74, 111, 105, 110, 116, 40, 99, 111, 110, 115, 116, 32, 98, 50, 71, 101, 97, 114, 74, 111, 105, 110, 116, 68, 101, 102, 32, 42, 41, 0 ], "i8", w);

Rm = A([ 109, 95, 116, 121, 112, 101, 65, 32, 61, 61, 32, 101, 95, 114, 101, 118, 111, 108, 117, 116, 101, 74, 111, 105, 110, 116, 32, 124, 124, 32, 109, 95, 116, 121, 112, 101, 65, 32, 61, 61, 32, 101, 95, 112, 114, 105, 115, 109, 97, 116, 105, 99, 74, 111, 105, 110, 116, 0 ], "i8", w);

Sm = A([ 109, 95, 116, 121, 112, 101, 66, 32, 61, 61, 32, 101, 95, 114, 101, 118, 111, 108, 117, 116, 101, 74, 111, 105, 110, 116, 32, 124, 124, 32, 109, 95, 116, 121, 112, 101, 66, 32, 61, 61, 32, 101, 95, 112, 114, 105, 115, 109, 97, 116, 105, 99, 74, 111, 105, 110, 116, 0 ], "i8", w);

A([ 118, 111, 105, 100, 32, 98, 50, 71, 101, 97, 114, 74, 111, 105, 110, 116, 58, 58, 83, 101, 116, 82, 97, 116, 105, 111, 40, 102, 108, 111, 97, 116, 51, 50, 41, 0 ], "i8", w);

A([ 98, 50, 73, 115, 86, 97, 108, 105, 100, 40, 114, 97, 116, 105, 111, 41, 0 ], "i8", w);

Wm = A([ 32, 32, 98, 50, 71, 101, 97, 114, 74, 111, 105, 110, 116, 68, 101, 102, 32, 106, 100, 59, 10, 0 ], "i8", w);

Xm = A([ 32, 32, 106, 100, 46, 106, 111, 105, 110, 116, 49, 32, 61, 32, 106, 111, 105, 110, 116, 115, 91, 37, 100, 93, 59, 10, 0 ], "i8", w);

Ym = A([ 32, 32, 106, 100, 46, 106, 111, 105, 110, 116, 50, 32, 61, 32, 106, 111, 105, 110, 116, 115, 91, 37, 100, 93, 59, 10, 0 ], "i8", w);

Wp = A([ 49, 49, 98, 50, 71, 101, 97, 114, 74, 111, 105, 110, 116, 0 ], "i8", w);

Xp = A(3, "i8*", w);

bn = A([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 74, 111, 105, 110, 116, 115, 47, 98, 50, 74, 111, 105, 110, 116, 46, 99, 112, 112, 0 ], "i8", w);

A([ 115, 116, 97, 116, 105, 99, 32, 98, 50, 74, 111, 105, 110, 116, 32, 42, 98, 50, 74, 111, 105, 110, 116, 58, 58, 67, 114, 101, 97, 116, 101, 40, 99, 111, 110, 115, 116, 32, 98, 50, 74, 111, 105, 110, 116, 68, 101, 102, 32, 42, 44, 32, 98, 50, 66, 108, 111, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 32, 42, 41, 0 ], "i8", w);

ne = A([ 102, 97, 108, 115, 101, 0 ], "i8", w);

A([ 115, 116, 97, 116, 105, 99, 32, 118, 111, 105, 100, 32, 98, 50, 74, 111, 105, 110, 116, 58, 58, 68, 101, 115, 116, 114, 111, 121, 40, 98, 50, 74, 111, 105, 110, 116, 32, 42, 44, 32, 98, 50, 66, 108, 111, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 32, 42, 41, 0 ], "i8", w);

an = A([ 0, 0, 40, 40, 40, 40, 230, 232, 234, 40, 40, 40 ], "i8*", w);

A(1, "void*", w);

cn = A([ 98, 50, 74, 111, 105, 110, 116, 58, 58, 98, 50, 74, 111, 105, 110, 116, 40, 99, 111, 110, 115, 116, 32, 98, 50, 74, 111, 105, 110, 116, 68, 101, 102, 32, 42, 41, 0 ], "i8", w);

dn = A([ 100, 101, 102, 45, 62, 98, 111, 100, 121, 65, 32, 33, 61, 32, 100, 101, 102, 45, 62, 98, 111, 100, 121, 66, 0 ], "i8", w);

Yp = A([ 47, 47, 32, 68, 117, 109, 112, 32, 105, 115, 32, 110, 111, 116, 32, 115, 117, 112, 112, 111, 114, 116, 101, 100, 32, 102, 111, 114, 32, 116, 104, 105, 115, 32, 106, 111, 105, 110, 116, 32, 116, 121, 112, 101, 46, 10, 0 ], "i8", w);

fn = A([ 0, 0, 236, 238, 240, 242, 244, 246, 248, 250, 252, 254 ], "i8*", w);

A(1, "void*", w);

gn = A([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 74, 111, 105, 110, 116, 115, 47, 98, 50, 77, 111, 117, 115, 101, 74, 111, 105, 110, 116, 46, 99, 112, 112, 0 ], "i8", w);

hn = A([ 98, 50, 77, 111, 117, 115, 101, 74, 111, 105, 110, 116, 58, 58, 98, 50, 77, 111, 117, 115, 101, 74, 111, 105, 110, 116, 40, 99, 111, 110, 115, 116, 32, 98, 50, 77, 111, 117, 115, 101, 74, 111, 105, 110, 116, 68, 101, 102, 32, 42, 41, 0 ], "i8", w);

jn = A([ 100, 101, 102, 45, 62, 116, 97, 114, 103, 101, 116, 46, 73, 115, 86, 97, 108, 105, 100, 40, 41, 0 ], "i8", w);

kn = A([ 98, 50, 73, 115, 86, 97, 108, 105, 100, 40, 100, 101, 102, 45, 62, 109, 97, 120, 70, 111, 114, 99, 101, 41, 32, 38, 38, 32, 100, 101, 102, 45, 62, 109, 97, 120, 70, 111, 114, 99, 101, 32, 62, 61, 32, 48, 46, 48, 102, 0 ], "i8", w);

ln = A([ 98, 50, 73, 115, 86, 97, 108, 105, 100, 40, 100, 101, 102, 45, 62, 102, 114, 101, 113, 117, 101, 110, 99, 121, 72, 122, 41, 32, 38, 38, 32, 100, 101, 102, 45, 62, 102, 114, 101, 113, 117, 101, 110, 99, 121, 72, 122, 32, 62, 61, 32, 48, 46, 48, 102, 0 ], "i8", w);

mn = A([ 98, 50, 73, 115, 86, 97, 108, 105, 100, 40, 100, 101, 102, 45, 62, 100, 97, 109, 112, 105, 110, 103, 82, 97, 116, 105, 111, 41, 32, 38, 38, 32, 100, 101, 102, 45, 62, 100, 97, 109, 112, 105, 110, 103, 82, 97, 116, 105, 111, 32, 62, 61, 32, 48, 46, 48, 102, 0 ], "i8", w);

on = A([ 118, 105, 114, 116, 117, 97, 108, 32, 118, 111, 105, 100, 32, 98, 50, 77, 111, 117, 115, 101, 74, 111, 105, 110, 116, 58, 58, 73, 110, 105, 116, 86, 101, 108, 111, 99, 105, 116, 121, 67, 111, 110, 115, 116, 114, 97, 105, 110, 116, 115, 40, 99, 111, 110, 115, 116, 32, 98, 50, 83, 111, 108, 118, 101, 114, 68, 97, 116, 97, 32, 38, 41, 0 ], "i8", w);

pn = A([ 100, 32, 43, 32, 104, 32, 42, 32, 107, 32, 62, 32, 49, 46, 49, 57, 50, 48, 57, 50, 57, 48, 69, 45, 48, 55, 70, 0 ], "i8", w);

Zp = A([ 49, 50, 98, 50, 77, 111, 117, 115, 101, 74, 111, 105, 110, 116, 0 ], "i8", w);

$p = A(3, "i8*", w);

aq = A([ 77, 111, 117, 115, 101, 32, 106, 111, 105, 110, 116, 32, 100, 117, 109, 112, 105, 110, 103, 32, 105, 115, 32, 110, 111, 116, 32, 115, 117, 112, 112, 111, 114, 116, 101, 100, 46, 10, 0 ], "i8", w);

vn = A([ 0, 0, 256, 258, 260, 262, 264, 266, 268, 270, 272, 274 ], "i8*", w);

A(1, "void*", w);

A([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 74, 111, 105, 110, 116, 115, 47, 98, 50, 80, 114, 105, 115, 109, 97, 116, 105, 99, 74, 111, 105, 110, 116, 46, 99, 112, 112, 0 ], "i8", w);

A([ 118, 111, 105, 100, 32, 98, 50, 80, 114, 105, 115, 109, 97, 116, 105, 99, 74, 111, 105, 110, 116, 58, 58, 83, 101, 116, 76, 105, 109, 105, 116, 115, 40, 102, 108, 111, 97, 116, 51, 50, 44, 32, 102, 108, 111, 97, 116, 51, 50, 41, 0 ], "i8", w);

En = A([ 32, 32, 98, 50, 80, 114, 105, 115, 109, 97, 116, 105, 99, 74, 111, 105, 110, 116, 68, 101, 102, 32, 106, 100, 59, 10, 0 ], "i8", w);

In = A([ 32, 32, 106, 100, 46, 108, 111, 119, 101, 114, 84, 114, 97, 110, 115, 108, 97, 116, 105, 111, 110, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0 ], "i8", w);

Jn = A([ 32, 32, 106, 100, 46, 117, 112, 112, 101, 114, 84, 114, 97, 110, 115, 108, 97, 116, 105, 111, 110, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0 ], "i8", w);

Mn = A([ 32, 32, 106, 100, 46, 109, 97, 120, 77, 111, 116, 111, 114, 70, 111, 114, 99, 101, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0 ], "i8", w);

bq = A([ 49, 54, 98, 50, 80, 114, 105, 115, 109, 97, 116, 105, 99, 74, 111, 105, 110, 116, 0 ], "i8", w);

cq = A(3, "i8*", w);

Pn = A([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 74, 111, 105, 110, 116, 115, 47, 98, 50, 80, 117, 108, 108, 101, 121, 74, 111, 105, 110, 116, 46, 99, 112, 112, 0 ], "i8", w);

A([ 118, 111, 105, 100, 32, 98, 50, 80, 117, 108, 108, 101, 121, 74, 111, 105, 110, 116, 68, 101, 102, 58, 58, 73, 110, 105, 116, 105, 97, 108, 105, 122, 101, 40, 98, 50, 66, 111, 100, 121, 32, 42, 44, 32, 98, 50, 66, 111, 100, 121, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 86, 101, 99, 50, 32, 38, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 86, 101, 99, 50, 32, 38, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 86, 101, 99, 50, 32, 38, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 86, 101, 99, 50, 32, 38, 44, 32, 102, 108, 111, 97, 116, 51, 50, 41, 0 ], "i8", w);

A([ 114, 97, 116, 105, 111, 32, 62, 32, 49, 46, 49, 57, 50, 48, 57, 50, 57, 48, 69, 45, 48, 55, 70, 0 ], "i8", w);

On = A([ 0, 0, 276, 278, 280, 282, 284, 286, 288, 290, 292, 294 ], "i8*", w);

A(1, "void*", w);

Qn = A([ 98, 50, 80, 117, 108, 108, 101, 121, 74, 111, 105, 110, 116, 58, 58, 98, 50, 80, 117, 108, 108, 101, 121, 74, 111, 105, 110, 116, 40, 99, 111, 110, 115, 116, 32, 98, 50, 80, 117, 108, 108, 101, 121, 74, 111, 105, 110, 116, 68, 101, 102, 32, 42, 41, 0 ], "i8", w);

Rn = A([ 100, 101, 102, 45, 62, 114, 97, 116, 105, 111, 32, 33, 61, 32, 48, 46, 48, 102, 0 ], "i8", w);

Vn = A([ 32, 32, 98, 50, 80, 117, 108, 108, 101, 121, 74, 111, 105, 110, 116, 68, 101, 102, 32, 106, 100, 59, 10, 0 ], "i8", w);

Wn = A([ 32, 32, 106, 100, 46, 103, 114, 111, 117, 110, 100, 65, 110, 99, 104, 111, 114, 65, 46, 83, 101, 116, 40, 37, 46, 49, 53, 108, 101, 102, 44, 32, 37, 46, 49, 53, 108, 101, 102, 41, 59, 10, 0 ], "i8", w);

Xn = A([ 32, 32, 106, 100, 46, 103, 114, 111, 117, 110, 100, 65, 110, 99, 104, 111, 114, 66, 46, 83, 101, 116, 40, 37, 46, 49, 53, 108, 101, 102, 44, 32, 37, 46, 49, 53, 108, 101, 102, 41, 59, 10, 0 ], "i8", w);

Yn = A([ 32, 32, 106, 100, 46, 108, 101, 110, 103, 116, 104, 65, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0 ], "i8", w);

Zn = A([ 32, 32, 106, 100, 46, 108, 101, 110, 103, 116, 104, 66, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0 ], "i8", w);

Zm = A([ 32, 32, 106, 100, 46, 114, 97, 116, 105, 111, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0 ], "i8", w);

dq = A([ 49, 51, 98, 50, 80, 117, 108, 108, 101, 121, 74, 111, 105, 110, 116, 0 ], "i8", w);

eq = A(3, "i8*", w);

ao = A([ 0, 0, 296, 298, 300, 302, 304, 306, 308, 310, 312, 314 ], "i8*", w);

A(1, "void*", w);

A([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 74, 111, 105, 110, 116, 115, 47, 98, 50, 82, 101, 118, 111, 108, 117, 116, 101, 74, 111, 105, 110, 116, 46, 99, 112, 112, 0 ], "i8", w);

A([ 118, 111, 105, 100, 32, 98, 50, 82, 101, 118, 111, 108, 117, 116, 101, 74, 111, 105, 110, 116, 58, 58, 83, 101, 116, 76, 105, 109, 105, 116, 115, 40, 102, 108, 111, 97, 116, 51, 50, 44, 32, 102, 108, 111, 97, 116, 51, 50, 41, 0 ], "i8", w);

A([ 108, 111, 119, 101, 114, 32, 60, 61, 32, 117, 112, 112, 101, 114, 0 ], "i8", w);

ho = A([ 32, 32, 98, 50, 82, 101, 118, 111, 108, 117, 116, 101, 74, 111, 105, 110, 116, 68, 101, 102, 32, 106, 100, 59, 10, 0 ], "i8", w);

Hn = A([ 32, 32, 106, 100, 46, 101, 110, 97, 98, 108, 101, 76, 105, 109, 105, 116, 32, 61, 32, 98, 111, 111, 108, 40, 37, 100, 41, 59, 10, 0 ], "i8", w);

io = A([ 32, 32, 106, 100, 46, 108, 111, 119, 101, 114, 65, 110, 103, 108, 101, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0 ], "i8", w);

jo = A([ 32, 32, 106, 100, 46, 117, 112, 112, 101, 114, 65, 110, 103, 108, 101, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0 ], "i8", w);

fq = A([ 49, 53, 98, 50, 82, 101, 118, 111, 108, 117, 116, 101, 74, 111, 105, 110, 116, 0 ], "i8", w);

vq = A(3, "i8*", w);

mo = A([ 0, 0, 316, 318, 320, 322, 324, 326, 328, 330, 332, 334 ], "i8*", w);

A(1, "void*", w);

qo = A([ 32, 32, 98, 50, 82, 111, 112, 101, 74, 111, 105, 110, 116, 68, 101, 102, 32, 106, 100, 59, 10, 0 ], "i8", w);

ro = A([ 32, 32, 106, 100, 46, 109, 97, 120, 76, 101, 110, 103, 116, 104, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0 ], "i8", w);

wq = A([ 49, 49, 98, 50, 82, 111, 112, 101, 74, 111, 105, 110, 116, 0 ], "i8", w);

xq = A(3, "i8*", w);

to = A([ 0, 0, 336, 338, 340, 342, 344, 346, 348, 350, 352, 354 ], "i8*", w);

A(1, "void*", w);

xo = A([ 32, 32, 98, 50, 87, 101, 108, 100, 74, 111, 105, 110, 116, 68, 101, 102, 32, 106, 100, 59, 10, 0 ], "i8", w);

Gn = A([ 32, 32, 106, 100, 46, 114, 101, 102, 101, 114, 101, 110, 99, 101, 65, 110, 103, 108, 101, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0 ], "i8", w);

yq = A([ 49, 49, 98, 50, 87, 101, 108, 100, 74, 111, 105, 110, 116, 0 ], "i8", w);

zq = A(3, "i8*", w);

Do = A([ 0, 0, 356, 358, 360, 362, 364, 366, 368, 370, 372, 374 ], "i8*", w);

A(1, "void*", w);

Ho = A([ 32, 32, 98, 50, 87, 104, 101, 101, 108, 74, 111, 105, 110, 116, 68, 101, 102, 32, 106, 100, 59, 10, 0 ], "i8", w);

sm = A([ 32, 32, 106, 100, 46, 98, 111, 100, 121, 65, 32, 61, 32, 98, 111, 100, 105, 101, 115, 91, 37, 100, 93, 59, 10, 0 ], "i8", w);

tm = A([ 32, 32, 106, 100, 46, 98, 111, 100, 121, 66, 32, 61, 32, 98, 111, 100, 105, 101, 115, 91, 37, 100, 93, 59, 10, 0 ], "i8", w);

um = A([ 32, 32, 106, 100, 46, 99, 111, 108, 108, 105, 100, 101, 67, 111, 110, 110, 101, 99, 116, 101, 100, 32, 61, 32, 98, 111, 111, 108, 40, 37, 100, 41, 59, 10, 0 ], "i8", w);

vm = A([ 32, 32, 106, 100, 46, 108, 111, 99, 97, 108, 65, 110, 99, 104, 111, 114, 65, 46, 83, 101, 116, 40, 37, 46, 49, 53, 108, 101, 102, 44, 32, 37, 46, 49, 53, 108, 101, 102, 41, 59, 10, 0 ], "i8", w);

wm = A([ 32, 32, 106, 100, 46, 108, 111, 99, 97, 108, 65, 110, 99, 104, 111, 114, 66, 46, 83, 101, 116, 40, 37, 46, 49, 53, 108, 101, 102, 44, 32, 37, 46, 49, 53, 108, 101, 102, 41, 59, 10, 0 ], "i8", w);

Fn = A([ 32, 32, 106, 100, 46, 108, 111, 99, 97, 108, 65, 120, 105, 115, 65, 46, 83, 101, 116, 40, 37, 46, 49, 53, 108, 101, 102, 44, 32, 37, 46, 49, 53, 108, 101, 102, 41, 59, 10, 0 ], "i8", w);

Kn = A([ 32, 32, 106, 100, 46, 101, 110, 97, 98, 108, 101, 77, 111, 116, 111, 114, 32, 61, 32, 98, 111, 111, 108, 40, 37, 100, 41, 59, 10, 0 ], "i8", w);

Ln = A([ 32, 32, 106, 100, 46, 109, 111, 116, 111, 114, 83, 112, 101, 101, 100, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0 ], "i8", w);

ko = A([ 32, 32, 106, 100, 46, 109, 97, 120, 77, 111, 116, 111, 114, 84, 111, 114, 113, 117, 101, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0 ], "i8", w);

ym = A([ 32, 32, 106, 100, 46, 102, 114, 101, 113, 117, 101, 110, 99, 121, 72, 122, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0 ], "i8", w);

zm = A([ 32, 32, 106, 100, 46, 100, 97, 109, 112, 105, 110, 103, 82, 97, 116, 105, 111, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0 ], "i8", w);

Am = A([ 32, 32, 106, 111, 105, 110, 116, 115, 91, 37, 100, 93, 32, 61, 32, 109, 95, 119, 111, 114, 108, 100, 45, 62, 67, 114, 101, 97, 116, 101, 74, 111, 105, 110, 116, 40, 38, 106, 100, 41, 59, 10, 0 ], "i8", w);

Aq = A([ 49, 50, 98, 50, 87, 104, 101, 101, 108, 74, 111, 105, 110, 116, 0 ], "i8", w);

Bq = A(3, "i8*", w);

A([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 82, 111, 112, 101, 47, 98, 50, 82, 111, 112, 101, 46, 99, 112, 112, 0 ], "i8", w);

A([ 118, 111, 105, 100, 32, 98, 50, 82, 111, 112, 101, 58, 58, 73, 110, 105, 116, 105, 97, 108, 105, 122, 101, 40, 99, 111, 110, 115, 116, 32, 98, 50, 82, 111, 112, 101, 68, 101, 102, 32, 42, 41, 0 ], "i8", w);

A([ 100, 101, 102, 45, 62, 99, 111, 117, 110, 116, 32, 62, 61, 32, 51, 0 ], "i8", w);

b[Tb + 1] = gp;

ep = A([ 1, 0 ], [ "i8*", 0 ], w);

b[gp] = ep + 2;

b[gp + 1] = fp;

b[th + 1] = jp;

hp = A([ 2, 0 ], [ "i8*", 0 ], w);

b[jp] = hp + 2;

b[jp + 1] = ip;

b[jp + 2] = gp;

b[kp + 1] = mp;

b[mp] = hp + 2;

b[mp + 1] = lp;

b[mp + 2] = gp;

b[jc + 1] = op;

b[op] = hp + 2;

b[op + 1] = np;

b[op + 2] = gp;

b[$b + 1] = qp;

b[qp] = hp + 2;

b[qp + 1] = pp;

b[qp + 2] = gp;

b[rp + 1] = tp;

b[tp] = ep + 2;

b[tp + 1] = sp;

b[vp + 1] = xp;

b[xp] = ep + 2;

b[xp + 1] = wp;

b[up + 1] = zp;

b[zp] = ep + 2;

b[zp + 1] = yp;

b[el + 1] = Dp;

b[Cp] = ep + 2;

b[Cp + 1] = Bp;

b[Dp] = hp + 2;

b[Dp + 1] = Ap;

b[Dp + 2] = Cp;

b[ll + 1] = Fp;

b[Fp] = hp + 2;

b[Fp + 1] = Ep;

b[Fp + 2] = Cp;

b[rl + 1] = Hp;

b[Hp] = hp + 2;

b[Hp + 1] = Gp;

b[Hp + 2] = Cp;

b[Gl + 1] = Cp;

b[Wl + 1] = Jp;

b[Jp] = hp + 2;

b[Jp + 1] = Ip;

b[Jp + 2] = Cp;

b[dm + 1] = Lp;

b[Lp] = hp + 2;

b[Lp + 1] = Kp;

b[Lp + 2] = Cp;

b[hm + 1] = Np;

b[Np] = hp + 2;

b[Np + 1] = Mp;

b[Np + 2] = Cp;

b[mm + 1] = Pp;

b[Pp] = hp + 2;

b[Pp + 1] = Op;

b[Pp + 2] = Cp;

b[bm + 1] = Tp;

b[Sp] = ep + 2;

b[Sp + 1] = Rp;

b[Tp] = hp + 2;

b[Tp + 1] = Qp;

b[Tp + 2] = Sp;

b[Gm + 1] = Vp;

b[Vp] = hp + 2;

b[Vp + 1] = Up;

b[Vp + 2] = Sp;

b[Om + 1] = Xp;

b[Xp] = hp + 2;

b[Xp + 1] = Wp;

b[Xp + 2] = Sp;

b[an + 1] = Sp;

b[fn + 1] = $p;

b[$p] = hp + 2;

b[$p + 1] = Zp;

b[$p + 2] = Sp;

b[vn + 1] = cq;

b[cq] = hp + 2;

b[cq + 1] = bq;

b[cq + 2] = Sp;

b[On + 1] = eq;

b[eq] = hp + 2;

b[eq + 1] = dq;

b[eq + 2] = Sp;

b[ao + 1] = vq;

b[vq] = hp + 2;

b[vq + 1] = fq;

b[vq + 2] = Sp;

b[mo + 1] = xq;

b[xq] = hp + 2;

b[xq + 1] = wq;

b[xq + 2] = Sp;

b[to + 1] = zq;

b[zq] = hp + 2;

b[zq + 1] = yq;

b[zq + 2] = Sp;

b[Do + 1] = Bq;

b[Bq] = hp + 2;

b[Bq + 1] = Aq;

b[Bq + 2] = Sp;

kb = [ 0, 0, (function(c, f) {
  var d, e;
  d = b[c] < b[f] ? 1 : 2;
  d == 1 ? e = 1 : d == 2 && (d = b[c] == b[f] ? 3 : 4, d == 3 ? e = b[c + 1] < b[f + 1] : d == 4 && (e = 0));
  return e;
}), 0, da(), 0, da(), 0, (function(c, f, d, e, g) {
  e = Jh(g, 144);
  if (e == 0) var i = 0, f = 2; else f = 1;
  f == 1 && (ql(e, c, d), i = e);
  return i;
}), 0, (function(c, f) {
  kb[b[b[c] + 1]](c);
  ii(f, c, 144);
}), 0, (function(c, f, d, e, g) {
  e = Jh(g, 144);
  if (e == 0) var i = 0, f = 2; else f = 1;
  f == 1 && (gm(e, c, d), i = e);
  return i;
}), 0, (function(c, f) {
  kb[b[b[c] + 1]](c);
  ii(f, c, 144);
}), 0, (function(c, f, d, e, g) {
  e = Jh(g, 144);
  if (e == 0) var i = 0, f = 2; else f = 1;
  f == 1 && (lm(e, c, d), i = e);
  return i;
}), 0, (function(c, f) {
  kb[b[b[c] + 1]](c);
  ii(f, c, 144);
}), 0, (function(c, f, d, e, g) {
  e = Jh(g, 144);
  if (e == 0) var i = 0, f = 2; else f = 1;
  f == 1 && (Vl(e, c, d), i = e);
  return i;
}), 0, (function(c, f) {
  kb[b[b[c] + 1]](c);
  ii(f, c, 144);
}), 0, (function(c, f, d, e, g) {
  e = Jh(g, 144);
  if (e == 0) var i = 0, f = 2; else f = 1;
  f == 1 && (cm(e, c, d), i = e);
  return i;
}), 0, (function(c, f) {
  kb[b[b[c] + 1]](c);
  ii(f, c, 144);
}), 0, (function(c, f, d, e, g) {
  var i;
  i = Jh(g, 144);
  if (i == 0) var h = 0, g = 2; else g = 1;
  g == 1 && (cl(i, c, f, d, e), h = i);
  return h;
}), 0, (function(c, f) {
  kb[b[b[c] + 1]](c);
  ii(f, c, 144);
}), 0, (function(c, f, d, e, g) {
  var i;
  i = Jh(g, 144);
  if (i == 0) var h = 0, g = 2; else g = 1;
  g == 1 && (kl(i, c, f, d, e), h = i);
  return h;
}), 0, (function(c, f) {
  kb[b[b[c] + 1]](c);
  ii(f, c, 144);
}), 0, da(), 0, da(), 0, (function() {
  throw "Pure virtual function called!";
}), 0, sh, 0, (function(c) {
  sh(c);
}), 0, Ih, 0, (function(c) {
  return b[c + 4] - 1;
}), 0, ea(0), 0, Nh, 0, Ch, 0, (function(c, f) {
  o[f] = 0;
  ac(f + 1);
  o[f + 3] = 0;
}), 0, da(), 0, da(), 0, (function(c, f) {
  var d, e;
  e = Jh(f, 20);
  if (e == 0) {
    var g = 0;
    d = 2;
  } else d = 1;
  d == 1 && (b[e] = Tb + 2, b[e] = kp + 2, b[e + 1] = 0, o[e + 2] = 0, ac(e + 3), g = e);
  d = g;
  Qh(d, c);
  e = d + 3;
  g = c + 3;
  b[e] = b[g];
  o[e] = o[g];
  b[e + 1] = b[g + 1];
  o[e + 1] = o[g + 1];
  return d;
}), 0, ea(1), 0, (function(c, f, d) {
  var e = a;
  a += 6;
  var g = e + 2, i = e + 4;
  R(g, f + 2, c + 3);
  N(e, f, g);
  C(i, d, e);
  c = J(i, i) <= o[c + 2] * o[c + 2];
  a = e;
  return c;
}), 0, Rh, 0, (function(c, f, d) {
  var e = a;
  a += 4;
  var g = e + 2;
  R(g, d + 2, c + 3);
  N(e, d, g);
  lc(f, o[e] - o[c + 2], o[e + 1] - o[c + 2]);
  lc(f + 2, o[e] + o[c + 2], o[e + 1] + o[c + 2]);
  a = e;
}), 0, (function(c, f, d) {
  o[f] = d * 3.1415927410125732 * o[c + 2] * o[c + 2];
  var d = f + 1, e = c + 3;
  b[d] = b[e];
  o[d] = o[e];
  b[d + 1] = b[e + 1];
  o[d + 1] = o[e + 1];
  o[f + 3] = o[f] * (o[c + 2] * .5 * o[c + 2] + J(c + 3, c + 3));
}), 0, da(), 0, da(), 0, (function(c, f) {
  var d, e;
  e = Jh(f, 48);
  if (e == 0) {
    var g = 0;
    d = 2;
  } else d = 1;
  d == 1 && (bc(e), g = e);
  d = g;
  Qh(d, c);
  e = d + 3;
  g = c + 3;
  b[e] = b[g];
  o[e] = o[g];
  b[e + 1] = b[g + 1];
  o[e + 1] = o[g + 1];
  e = d + 5;
  g = c + 5;
  b[e] = b[g];
  o[e] = o[g];
  b[e + 1] = b[g + 1];
  o[e + 1] = o[g + 1];
  e = d + 7;
  g = c + 7;
  b[e] = b[g];
  o[e] = o[g];
  b[e + 1] = b[g + 1];
  o[e + 1] = o[g + 1];
  e = d + 9;
  g = c + 9;
  b[e] = b[g];
  o[e] = o[g];
  b[e + 1] = b[g + 1];
  o[e + 1] = o[g + 1];
  b[d + 11] = b[c + 11] & 1;
  b[d + 12] = b[c + 12] & 1;
  return d;
}), 0, ea(1), 0, ea(0), 0, Ph, 0, (function(c, f, d) {
  var e = a;
  a += 14;
  var g = e + 2, i = e + 4, h = e + 6, j = e + 8, k = e + 10, l = e + 12;
  Nc(e, d, c + 3);
  Nc(g, d, c + 5);
  Og(i, e, g);
  Pg(h, e, g);
  mc(j, o[c + 2], o[c + 2]);
  C(k, i, j);
  b[f] = b[k];
  o[f] = o[k];
  b[f + 1] = b[k + 1];
  o[f + 1] = o[k + 1];
  c = f + 2;
  N(l, h, j);
  b[c] = b[l];
  o[c] = o[l];
  b[c + 1] = b[l + 1];
  o[c + 1] = o[l + 1];
  a = e;
}), 0, (function(c, f) {
  var d = a;
  a += 4;
  var e = d + 2;
  o[f] = 0;
  var g = f + 1;
  N(e, c + 3, c + 5);
  K(d, .5, e);
  b[g] = b[d];
  o[g] = o[d];
  b[g + 1] = b[d + 1];
  o[g + 1] = o[d + 1];
  o[f + 3] = 0;
  a = d;
}), 0, da(), 0, da(), 0, (function(c, f) {
  var d, e;
  e = Jh(f, 152);
  if (e == 0) {
    var g = 0;
    d = 2;
  } else d = 1;
  d == 1 && (Sb(e), g = e);
  d = g;
  Qh(d, c);
  e = d + 3;
  g = c + 3;
  b[e] = b[g];
  o[e] = o[g];
  b[e + 1] = b[g + 1];
  o[e + 1] = o[g + 1];
  e = g = c + 5;
  g += 16;
  for (var i = d + 5; e < g; e++, i++) b[i] = b[e], o[i] = o[e];
  e = g = c + 21;
  g += 16;
  for (i = d + 21; e < g; e++, i++) b[i] = b[e], o[i] = o[e];
  b[d + 37] = b[c + 37];
  return d;
}), 0, ea(1), 0, (function(c, f, d) {
  var e = a;
  a += 6;
  var g, i, h = e + 2, j, k = e + 4;
  j = f + 2;
  C(h, d, f);
  Md(e, j, h);
  f = 0;
  d = c + 37;
  h = c + 21;
  for (c += 5; ; ) {
    if (f >= b[d]) {
      g = 5;
      break;
    }
    j = h + (f << 1);
    C(k, e, c + (f << 1));
    j = J(j, k);
    if (j > 0) {
      g = 3;
      break;
    }
    f += 1;
  }
  g == 5 ? i = 1 : g == 3 && (i = 0);
  a = e;
  return i;
}), 0, Uh, 0, Sh, 0, Yh, 0, da(), 0, da(), 0, da(), 0, da(), 0, da(), 0, da(), 0, da(), 0, da(), 0, bl, 0, jl, 0, da(), 0, da(), 0, pl, 0, da(), 0, da(), 0, (function(c, f, d, e) {
  Sc(f, Xk(b[c + 12]), d, Xk(b[c + 13]), e);
}), 0, da(), 0, da(), 0, da(), 0, da(), 0, (function(c, f, d, e) {
  Yc(f, Xk(b[c + 12]), d, Xk(b[c + 13]), e);
}), 0, da(), 0, da(), 0, (function(c, f, d, e) {
  var g = Xk(b[c + 12]), c = Xk(b[c + 13]), i = a;
  a += 63;
  Ld(i, f, g, d, c, e);
  a = i;
}), 0, da(), 0, da(), 0, (function(c, f, d, e) {
  Tc(f, Xk(b[c + 12]), d, Xk(b[c + 13]), e);
}), 0, da(), 0, da(), 0, (function(c, f, d, e) {
  Rd(f, Xk(b[c + 12]), d, Xk(b[c + 13]), e);
}), 0, da(), 0, da(), 0, (function(c, f) {
  pm(c, b[f + 12], f + 21);
}), 0, (function(c, f) {
  pm(c, b[f + 13], f + 23);
}), 0, (function(c, f, d) {
  K(c, d * o[f + 26], f + 30);
}), 0, ea(0), 0, qm, 0, da(), 0, da(), 0, Bm, 0, Dm, 0, Em, 0, (function(c, f) {
  pm(c, b[f + 12], f + 18);
}), 0, (function(c, f) {
  pm(c, b[f + 13], f + 20);
}), 0, (function(c, f, d) {
  K(c, d, f + 22);
}), 0, (function(c, f) {
  return f * o[c + 24];
}), 0, Hm, 0, da(), 0, da(), 0, Lm, 0, Mm, 0, ea(1), 0, (function(c, f) {
  pm(c, b[f + 12], f + 24);
}), 0, (function(c, f) {
  pm(c, b[f + 13], f + 26);
}), 0, (function(c, f, d) {
  var e = a;
  a += 2;
  K(e, o[f + 40], f + 61);
  K(c, d, e);
  a = e;
}), 0, (function(c, f) {
  return f * o[c + 40] * o[c + 65];
}), 0, Vm, 0, da(), 0, da(), 0, Tm, 0, Um, 0, $m, 0, (function() {
  U(Yp, A(1, "i32", r));
}), 0, da(), 0, da(), 0, (function(c, f) {
  var d = f + 20;
  b[c] = b[d];
  o[c] = o[d];
  b[c + 1] = b[d + 1];
  o[c + 1] = o[d + 1];
}), 0, (function(c, f) {
  pm(c, b[f + 13], f + 18);
}), 0, (function(c, f, d) {
  K(c, d, f + 25);
}), 0, ea(0), 0, (function() {
  U(aq, A(1, "i32", r));
}), 0, da(), 0, da(), 0, nn, 0, qn, 0, ea(1), 0, (function(c, f) {
  pm(c, b[f + 12], f + 18);
}), 0, (function(c, f) {
  pm(c, b[f + 13], f + 20);
}), 0, (function(c, f, d) {
  var e = a;
  a += 6;
  var g = e + 2, i = e + 4;
  K(g, o[f + 27], f + 50);
  K(i, o[f + 30] + o[f + 29], f + 48);
  N(e, g, i);
  K(c, d, e);
  a = e;
}), 0, (function(c, f) {
  return f * o[c + 28];
}), 0, Dn, 0, da(), 0, da(), 0, wn, 0, An, 0, Cn, 0, (function(c, f) {
  pm(c, b[f + 12], f + 24);
}), 0, (function(c, f) {
  pm(c, b[f + 13], f + 26);
}), 0, (function(c, f, d) {
  var e = a;
  a += 2;
  K(e, o[f + 30], f + 35);
  K(c, d, e);
  a = e;
}), 0, ea(0), 0, Un, 0, da(), 0, da(), 0, Sn, 0, Tn, 0, bo, 0, (function(c, f) {
  pm(c, b[f + 12], f + 18);
}), 0, (function(c, f) {
  pm(c, b[f + 13], f + 20);
}), 0, (function(c, f, d) {
  var e = a;
  a += 2;
  mc(e, o[f + 22], o[f + 23]);
  K(c, d, e);
  a = e;
}), 0, (function(c, f) {
  return f * o[c + 24];
}), 0, go, 0, da(), 0, da(), 0, co, 0, eo, 0, fo, 0, (function(c, f) {
  pm(c, b[f + 12], f + 18);
}), 0, (function(c, f) {
  pm(c, b[f + 13], f + 20);
}), 0, (function(c, f, d) {
  K(c, d * o[f + 24], f + 27);
}), 0, ea(0), 0, po, 0, da(), 0, da(), 0, no, 0, oo, 0, uo, 0, (function(c, f) {
  pm(c, b[f + 12], f + 21);
}), 0, (function(c, f) {
  pm(c, b[f + 13], f + 23);
}), 0, (function(c, f, d) {
  var e = a;
  a += 2;
  mc(e, o[f + 27], o[f + 28]);
  K(c, d, e);
  a = e;
}), 0, (function(c, f) {
  return f * o[c + 29];
}), 0, wo, 0, da(), 0, da(), 0, vo, 0, Ao, 0, Bo, 0, (function(c, f) {
  pm(c, b[f + 12], f + 20);
}), 0, (function(c, f) {
  pm(c, b[f + 13], f + 22);
}), 0, (function(c, f, d) {
  var e = a;
  a += 6;
  var g = e + 2, i = e + 4;
  K(g, o[f + 28], f + 46);
  K(i, o[f + 30], f + 44);
  N(e, g, i);
  K(c, d, e);
  a = e;
}), 0, (function(c, f) {
  return f * o[c + 29];
}), 0, Go, 0, da(), 0, da(), 0, Eo, 0, Fo, 0, Io, 0, Jc, 0, da(), 0, Kc, 0, da(), 0, bi, 0, (function(c) {
  var f;
  f = 0;
  var d = c + 1, c = f < b[d] ? 1 : 3;
  a : do if (c == 1) for (;;) if (f += 1, f >= b[d]) break a; while (0);
}), 0, wi, 0, xi, 0, (function(c) {
  Li(c);
}), 0, Oi, 0, da(), 0, mj, 0, ij, 0, Vj, 0, Uj, 0, nc, 0, Ic, 0, cl, 0, kl, 0, ql, 0, Zj, 0, fk, 0, Vl, 0, cm, 0, gm, 0, lm, 0, $l, 0, Fm, 0, Nm, 0, en, 0, un, 0, Nn, 0, $n, 0, lo, 0, so, 0, Co, 0, (function(c) {
  b[c] = 0;
  b[c + 1] = 0;
  b[c + 2] = 0;
  b[c + 3] = 0;
  b[c + 4] = 0;
  b[c + 5] = 0;
  b[c + 6] = 0;
  ac(c + 7);
  o[c + 10] = 1;
  o[c + 11] = .10000000149011612;
}), 0, da(), 0 ];

Module.FUNCTION_TABLE = kb;

function Cq(c) {
  c = c || Module.arguments;
  Za();
  var f = ca;
  if (Module._main) {
    for (f = Module.I(c); $a.length > 0; ) {
      var c = $a.pop(), d = c.n;
      typeof d === "number" && (d = kb[d]);
      d(c.k === ba ? ca : c.k);
    }
    Ya();
  }
  return f;
}

Module.run = Cq;

try {
  Vo = !1;
} catch (Dq) {}

Module.noInitialRun || Cq();
