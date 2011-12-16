var ga = void 0, ja = null;

function ka() {
  return (function() {});
}

function la(a) {
  return (function() {
    return a;
  });
}

var ma = [], na = typeof process === "object", ta = typeof window === "object", va = typeof importScripts === "function", xa = !ta && !na && !va;

if (na) {
  print = (function(a) {
    process.stdout.write(a + "\n");
  });
  printErr = (function(a) {
    process.stderr.write(a + "\n");
  });
  var za = require("fs");
  read = (function(a) {
    var f = za.readFileSync(a).toString();
    !f && a[0] != "/" && (a = __dirname.split("/").slice(0, -1).join("/") + "/src/" + a, f = za.readFileSync(a).toString());
    return f;
  });
  ma = process.argv.slice(2);
} else if (xa) this.read || (read = (function(a) {
  snarf(a);
})), ma = this.arguments ? arguments : scriptArgs; else if (ta) printErr = (function(a) {
  console.log(a);
}), read = (function(a) {
  var f = new XMLHttpRequest;
  f.open("GET", a, !1);
  f.send(ja);
  return f.responseText;
}), this.arguments && (ma = arguments); else if (va) load = importScripts; else throw "Unknown runtime environment. Where are we?";

function Ca(a) {
  eval.call(ja, a);
}

typeof load == "undefined" && typeof read != "undefined" && (load = (function(a) {
  Ca(read(a));
}));

typeof printErr === "undefined" && (printErr = ka());

typeof print === "undefined" && (print = printErr);

try {
  this.Module = Module;
} catch (Ga) {
  this.Module = Module = {};
}

if (!Module.arguments) Module.arguments = ma;

var Ha = {
  W: (function() {
    return b;
  }),
  V: (function(a) {
    b = a;
  }),
  aa: (function(a, f) {
    f = f || 4;
    return isNumber(a) && isNumber(f) ? Math.ceil(a / f) * f : "Math.ceil((" + a + ")/" + f + ")*" + f;
  }),
  O: (function(a) {
    return a in Ha.H || a in Ha.G;
  }),
  P: (function(a) {
    return a[a.length - 1] == "*";
  }),
  R: (function(a) {
    return isPointerType(a) ? !1 : /^\[\d+\ x\ (.*)\]/.test(a) ? !0 : /<?{ [^}]* }>?/.test(a) ? !0 : a[0] == "%";
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
  da: (function(a, f) {
    return (a | 0 | f | 0) + (Math.round(a / 4294967296) | Math.round(f / 4294967296)) * 4294967296;
  }),
  $: (function(a, f) {
    return ((a | 0) & (f | 0)) + (Math.round(a / 4294967296) & Math.round(f / 4294967296)) * 4294967296;
  }),
  ia: (function(a, f) {
    return ((a | 0) ^ (f | 0)) + (Math.round(a / 4294967296) ^ Math.round(f / 4294967296)) * 4294967296;
  }),
  o: (function(a) {
    if (Ha.e == 1) return 1;
    var f = {
      "%i1": 1,
      "%i8": 1,
      "%i16": 2,
      "%i32": 4,
      "%i64": 8,
      "%float": 4,
      "%double": 8
    }["%" + a];
    if (!f && a[a.length - 1] == "*") f = Ha.e;
    return f;
  }),
  M: (function(a) {
    return Math.max(Ha.o(a), Ha.e);
  }),
  J: (function(a, f) {
    var d = {};
    return f ? a.filter((function(a) {
      return d[a[f]] ? !1 : d[a[f]] = !0;
    })) : a.filter((function(a) {
      return d[a] ? !1 : d[a] = !0;
    }));
  }),
  set: (function() {
    for (var a = typeof arguments[0] === "object" ? arguments[0] : arguments, f = {}, d = 0; d < a.length; d++) f[a[d]] = 0;
    return f;
  }),
  q: (function(a) {
    a.b = 0;
    a.f = 0;
    var f = [], d = -1;
    a.t = a.g.map((function(c) {
      var h;
      if (Ha.O(c) || Ha.P(c)) c = h = Ha.o(c); else if (Ha.R(c)) h = Types.types[c].b, c = Types.types[c].f; else throw "Unclear type in struct: " + c + ", in " + a.S + " :: " + dump(Types.types[a.S]);
      c = a.ea ? 1 : Math.min(c, Ha.e);
      a.f = Math.max(a.f, c);
      c = Ha.p(a.b, c);
      a.b = c + h;
      d >= 0 && f.push(c - d);
      return d = c;
    }));
    a.b = Ha.p(a.b, a.f);
    if (f.length == 0) a.s = a.b; else if (Ha.J(f).length == 1) a.s = f[0];
    a.ca = a.s != 1;
    return a.t;
  }),
  L: (function(a, f, d) {
    var c, h;
    if (f) {
      d = d || 0;
      c = (typeof Types === "undefined" ? Ha.ha : Types.types)[f];
      if (!c) return ja;
      a || (a = (typeof Types === "undefined" ? Ha : Types).fa[f.replace(/.*\./, "")]);
      if (!a) return ja;
      Ia(c.g.length === a.length, "Number of named fields must match the type for " + f + ". Perhaps due to inheritance, which is not supported yet?");
      h = c.t;
    } else c = {
      g: a.map((function(a) {
        return a[0];
      }))
    }, h = Ha.q(c);
    var i = {
      Z: c.b
    };
    f ? a.forEach((function(a, f) {
      if (typeof a === "string") i[a] = h[f] + d; else {
        var p, o;
        for (o in a) p = o;
        i[p] = Ha.L(a[p], c.g[f], h[f]);
      }
    })) : a.forEach((function(a, c) {
      i[a[1]] = h[c];
    }));
    return i;
  }),
  U: (function(a) {
    var f = b;
    b += a;
    b = Math.ceil(b / 4) * 4;
    return f;
  }),
  D: (function(a) {
    var f = Ka;
    Ka += a;
    Ka = Math.ceil(Ka / 4) * 4;
    if (Ka >= La) {
      for (; La <= Ka; ) La = Math.ceil(La * 1.25 / Oa) * Oa;
      var a = e, d = new ArrayBuffer(La);
      e = new Int8Array(d);
      Pa = new Int16Array(d);
      g = new Int32Array(d);
      Qa = new Uint8Array(d);
      Ra = new Uint16Array(d);
      Wa = new Uint32Array(d);
      q = new Float32Array(d);
      e.set(a);
    }
    return f;
  }),
  p: (function(a, f) {
    return Math.ceil(a / (f ? f : 4)) * (f ? f : 4);
  }),
  e: 4,
  Y: 0
};

function Xa() {
  var a = [], f;
  for (f in this.j) a.push({
    T: f,
    K: this.j[f][0],
    ga: this.j[f][1],
    total: this.j[f][0] + this.j[f][1]
  });
  a.sort((function(a, d) {
    return d.total - a.total;
  }));
  for (f = 0; f < a.length; f++) {
    var d = a[f];
    print(d.T + " : " + d.total + " hits, %" + Math.ceil(100 * d.K / d.total) + " failures");
  }
}

function Ya() {}

var Za = [], ab = new ArrayBuffer(8), bb = new Int32Array(ab), gb = new Float64Array(ab);

function hb(a) {
  print(a + ":\n" + Error().stack);
  throw "Assertion: " + a;
}

function Ia(a, f) {
  a || hb("Assertion failed: " + f);
}

function ib(a, f, d) {
  d = d || "i8";
  d[d.length - 1] === "*" && (d = "i32");
  switch (d) {
   case "i1":
    e[a] = f;
    break;
   case "i8":
    e[a] = f;
    break;
   case "i16":
    Pa[a >> 1] = f;
    break;
   case "i32":
    g[a >> 2] = f;
    break;
   case "i64":
    g[a >> 2] = f;
    break;
   case "float":
    q[a >> 2] = f;
    break;
   case "double":
    gb[0] = f;
    g[a >> 2] = bb[0];
    g[a + 4 >> 2] = bb[1];
    break;
   default:
    hb("invalid type for setValue: " + d);
  }
}

Module.setValue = ib;

Module.getValue = (function(a, f) {
  f = f || "i8";
  f[f.length - 1] === "*" && (f = "i32");
  switch (f) {
   case "i1":
    return e[a];
   case "i8":
    return e[a];
   case "i16":
    return Pa[a >> 1];
   case "i32":
    return g[a >> 2];
   case "i64":
    return g[a >> 2];
   case "float":
    return q[a >> 2];
   case "double":
    return bb[0] = g[a >> 2], bb[1] = g[a + 4 >> 2], gb[0];
   default:
    hb("invalid type for setValue: " + f);
  }
  return ja;
});

var v = 1, y = 2;

Module.ALLOC_NORMAL = 0;

Module.ALLOC_STACK = v;

Module.ALLOC_STATIC = y;

function F(a, f, d) {
  var c, h;
  typeof a === "number" ? (c = !0, h = a) : (c = !1, h = a.length);
  for (var d = [ jb, Ha.U, Ha.D ][d === ga ? y : d](Math.max(h, 1)), i = typeof f === "string" ? f : ja, j = 0, k; j < h; ) {
    var p = c ? 0 : a[j];
    typeof p === "function" && (p = Ha.ba(p));
    k = i || f[j];
    k === 0 ? j++ : (ib(d + j, p, k), j += Ha.o(k));
  }
  return d;
}

Module.allocate = F;

function kb(a) {
  for (var f = "", d = 0, c, h = String.fromCharCode(0); ; ) {
    c = String.fromCharCode(Qa[a + d]);
    if (c == h) break;
    f += c;
    d += 1;
  }
  return f;
}

Module.Pointer_stringify = kb;

Module.Array_stringify = (function(a) {
  for (var f = "", d = 0; d < a.length; d++) f += String.fromCharCode(a[d]);
  return f;
});

var nb, Oa = 4096, e, Qa, Pa, Ra, g, Wa, q, b, ob, Ka, La = Module.TOTAL_MEMORY || 15e7;

Ia(!!Int32Array && !!Float64Array && !!(new Int32Array(1)).subarray && !!(new Int32Array(1)).set, "Cannot fallback to non-typed array case: Code is too specialized");

var pb = new ArrayBuffer(La);

e = new Int8Array(pb);

Pa = new Int16Array(pb);

g = new Int32Array(pb);

Qa = new Uint8Array(pb);

Ra = new Uint16Array(pb);

Wa = new Uint32Array(pb);

q = new Float32Array(pb);

g[0] = 255;

Ia(Qa[0] === 255 && Qa[3] === 0, "Typed arrays 2 must be run on a little-endian system");

for (var tb = sb("(null)"), xb = 0; xb < tb.length; xb++) e[xb] = tb[xb];

Module.HEAP = ga;

Module.HEAP8 = e;

Module.HEAP16 = Pa;

Module.HEAP32 = g;

Module.HEAPU8 = Qa;

Module.HEAPU16 = Ra;

Module.HEAPU32 = Wa;

Module.HEAPF32 = q;

ob = (b = Math.ceil(10 / Oa) * Oa) + 1048576;

Ka = Math.ceil(ob / Oa) * Oa;

function Ab(a, f) {
  return Array.prototype.slice.call(e.subarray(a, a + f));
}

Module.Array_copy = Ab;

function Bb(a) {
  for (var f = 0; e[a + f]; ) f++;
  return f;
}

Module.String_len = Bb;

function Cb(a, f) {
  var d = Bb(a);
  f && d++;
  var c = Ab(a, d);
  f && (c[d - 1] = 0);
  return c;
}

Module.String_copy = Cb;

function sb(a, f) {
  for (var d = [], c = 0; c < a.length; ) {
    var h = a.charCodeAt(c);
    h > 255 && (h &= 255);
    d.push(h);
    c += 1;
  }
  f || d.push(0);
  return d;
}

Module.intArrayFromString = sb;

Module.intArrayToString = (function(a) {
  for (var f = [], d = 0; d < a.length; d++) {
    var c = a[d];
    c > 255 && (c &= 255);
    f.push(String.fromCharCode(c));
  }
  return f.join("");
});

function Db(a, f) {
  return a >= 0 ? a : f <= 32 ? 2 * Math.abs(1 << f - 1) + a : Math.pow(2, f) + a;
}

function Eb(a, f) {
  if (a <= 0) return a;
  var d = f <= 32 ? Math.abs(1 << f - 1) : Math.pow(2, f - 1);
  if (a >= d && (f <= 32 || a > d)) a = -2 * d + a;
  return a;
}

function Ib() {
  Jb();
  return 0;
}

Module._main = Ib;

function Qb(a) {
  g[a >> 2] = Rb + 8;
}

function Sb(a, f) {
  q[a >> 2] += q[f >> 2];
  q[a + 4 >> 2] += q[f + 4 >> 2];
}

function Vb(a) {
  Qb(a);
  g[a >> 2] = Wb + 8;
  g[a + 4 >> 2] = 2;
  q[a + 8 >> 2] = .009999999776482582;
  g[a + 148 >> 2] = 0;
  Xb(a + 12);
}

Vb.X = 1;

function Xb(a) {
  q[a >> 2] = 0;
  q[a + 4 >> 2] = 0;
}

function Yb(a) {
  Qb(a);
  g[a >> 2] = Zb + 8;
  g[a + 4 >> 2] = 1;
  q[a + 8 >> 2] = .009999999776482582;
  q[a + 28 >> 2] = 0;
  q[a + 32 >> 2] = 0;
  q[a + 36 >> 2] = 0;
  q[a + 40 >> 2] = 0;
  e[a + 44] = 0;
  e[a + 45] = 0;
}

function $b(a) {
  g[a + 44 >> 2] = 0;
  ac(a + 4, 0, 0);
  q[a + 12 >> 2] = 0;
  ac(a + 16, 0, 0);
  q[a + 24 >> 2] = 0;
  q[a + 28 >> 2] = 0;
  q[a + 32 >> 2] = 0;
  e[a + 36] = 1;
  e[a + 37] = 1;
  e[a + 38] = 0;
  e[a + 39] = 0;
  g[a >> 2] = 0;
  e[a + 40] = 1;
  q[a + 48 >> 2] = 1;
}

function ac(a, f, d) {
  q[a >> 2] = f;
  q[a + 4 >> 2] = d;
}

function kc(a, f, d) {
  q[a >> 2] = f;
  q[a + 4 >> 2] = d;
}

function Jb() {
  var a = b;
  b += 104412;
  var f = a + 8, d = a + 103036, c = a + 103088, h = a + 103136, i = a + 103144, j = a + 103152, k = a + 103304, p = a + 103312, o = a + 103320, l = a + 103328, m = a + 103336, n = a + 103388;
  kc(a, 0, -10);
  lc(f, a);
  var r, s;
  r = 0 == (e[f + 102976] & 1) ? 4 : 1;
  a : do if (r == 1) if (e[f + 102976] = 0, (e[f + 102976] & 1) != 0) r = 4; else if (s = g[f + 102952 >> 2], g[f + 102952 >> 2] == 0) r = 4; else for (;;) {
    mc(s, 1);
    var u = g[s + 96 >> 2];
    s = u;
    if (u == 0) break a;
  } while (0);
  $b(d);
  d = nc(f, d);
  Yb(c);
  kc(h, -40, 0);
  kc(i, 40, 0);
  r = c + 12;
  for (s = h + 8; h < s; ) e[r++] = e[h++];
  h = i;
  r = c + 20;
  for (s = h + 8; h < s; ) e[r++] = e[h++];
  e[c + 44] = 0;
  e[c + 45] = 0;
  oc(d, c, 0);
  Vb(j);
  g[j + 148 >> 2] = 4;
  ac(j + 20, -.5, -.5);
  ac(j + 28, .5, -.5);
  ac(j + 36, .5, .5);
  ac(j + 44, -.5, .5);
  ac(j + 84, 0, -1);
  ac(j + 92, 1, 0);
  ac(j + 100, 0, 1);
  ac(j + 108, -1, 0);
  Xb(j + 12);
  kc(k, -7, .75);
  kc(o, .5625, 1);
  kc(l, 1.125, 0);
  c = 0;
  i = m + 4;
  for (h = 0; ; ) {
    if (h >= 40) break;
    d = k;
    r = p;
    for (s = d + 8; d < s; ) e[r++] = e[d++];
    for (d = h = c; ; ) {
      if (d >= 40) break;
      $b(m);
      g[m >> 2] = 2;
      d = p;
      r = i;
      for (s = d + 8; d < s; ) e[r++] = e[d++];
      d = nc(f, m);
      oc(d, j, 5);
      Sb(p, l);
      h = d = h + 1;
    }
    Sb(k, o);
    c = h = c + 1;
  }
  for (k = j = 0; ; ) {
    if (k >= 64) break;
    sc(f, .01666666753590107, 3, 3);
    j = k = j + 1;
  }
  for (k = j = 0; ; ) {
    if (k >= 256) break;
    k = tc();
    sc(f, .01666666753590107, 3, 3);
    p = tc();
    g[n + (j << 2) >> 2] = p - k;
    uc(vc, F([ (p - k) / 1e3 * 1e3, 0, 0, 0, 0, 0, 0, 0 ], [ "double", 0, 0, 0, 0, 0, 0, 0 ], v));
    j = k = j + 1;
  }
  j = g[wc >> 2];
  e[xc] = Db(10);
  if (yc(j, xc, 1) == -1 && j in zc) zc[j].error = !0;
  for (k = j = 0; ; ) if (j += g[n + (k << 2) >> 2], k = p = k + 1, p >= 256) break;
  uc(vc, F([ j / 256 / 1e3 * 1e3, 0, 0, 0, 0, 0, 0, 0 ], [ "double", 0, 0, 0, 0, 0, 0, 0 ], v));
  Ac(f);
  b = a;
}

Jb.X = 1;

function Bc(a) {
  Cc(a);
  g[a + 28 >> 2] = 0;
  g[a + 48 >> 2] = 16;
  g[a + 52 >> 2] = 0;
  var f = jb(g[a + 48 >> 2] * 12);
  g[a + 44 >> 2] = f;
  g[a + 36 >> 2] = 16;
  g[a + 40 >> 2] = 0;
  f = jb(g[a + 36 >> 2] << 2);
  g[a + 32 >> 2] = f;
}

function Dc(a, f) {
  var d;
  if ((g[a + 40 >> 2] == g[a + 36 >> 2] ? 1 : 2) == 1) {
    d = g[a + 32 >> 2];
    g[a + 36 >> 2] <<= 1;
    var c = jb(g[a + 36 >> 2] << 2);
    g[a + 32 >> 2] = c;
    var h = g[a + 32 >> 2], c = g[a + 40 >> 2] << 2, i;
    i = d + c;
    if (h % 4 == d % 4 && c > 8) {
      for (; d % 4 !== 0 && d < i; ) e[h++] = e[d++];
      d >>= 2;
      h >>= 2;
      for (c = i >> 2; d < c; ) g[h++] = g[d++];
      d <<= 2;
      h <<= 2;
    }
    for (; d < i; ) e[h++] = e[d++];
  }
  g[g[a + 32 >> 2] + (g[a + 40 >> 2] << 2) >> 2] = f;
  g[a + 40 >> 2] += 1;
}

Dc.X = 1;

function Ec(a, f) {
  var d, c;
  d = f == g[a + 56 >> 2] ? 1 : 2;
  if (d == 1) c = 1; else if (d == 2) {
    d = g[a + 52 >> 2] == g[a + 48 >> 2] ? 3 : 4;
    if (d == 3) {
      c = g[a + 44 >> 2];
      g[a + 48 >> 2] <<= 1;
      d = jb(g[a + 48 >> 2] * 12);
      g[a + 44 >> 2] = d;
      var h = g[a + 44 >> 2];
      d = g[a + 52 >> 2] * 12;
      var i;
      i = c + d;
      if (h % 4 == c % 4 && d > 8) {
        for (; c % 4 !== 0 && c < i; ) e[h++] = e[c++];
        c >>= 2;
        h >>= 2;
        for (d = i >> 2; c < d; ) g[h++] = g[c++];
        c <<= 2;
        h <<= 2;
      }
      for (; c < i; ) e[h++] = e[c++];
    }
    g[g[a + 44 >> 2] + g[a + 52 >> 2] * 12 >> 2] = f < g[a + 56 >> 2] ? f : g[a + 56 >> 2];
    g[g[a + 44 >> 2] + g[a + 52 >> 2] * 12 + 4 >> 2] = f > g[a + 56 >> 2] ? f : g[a + 56 >> 2];
    g[a + 52 >> 2] += 1;
    c = 1;
  }
  return c;
}

Ec.X = 1;

function Hc(a, f, d) {
  kc(a, q[f + 12 >> 2] * q[d >> 2] - q[f + 8 >> 2] * q[d + 4 >> 2] + q[f >> 2], q[f + 8 >> 2] * q[d >> 2] + q[f + 12 >> 2] * q[d + 4 >> 2] + q[f + 4 >> 2]);
}

Hc.X = 1;

function J(a, f, d) {
  kc(a, q[f >> 2] - q[d >> 2], q[f + 4 >> 2] - q[d + 4 >> 2]);
}

function S(a, f) {
  return q[a >> 2] * q[f >> 2] + q[a + 4 >> 2] * q[f + 4 >> 2];
}

function Ic(a, f, d) {
  var c;
  c = q[d >> 2] - q[f >> 2];
  d = q[d + 4 >> 2] - q[f + 4 >> 2];
  kc(a, q[f + 12 >> 2] * c + q[f + 8 >> 2] * d, -q[f + 8 >> 2] * c + q[f + 12 >> 2] * d);
}

Ic.X = 1;

function T(a, f, d) {
  kc(a, f * q[d >> 2], f * q[d + 4 >> 2]);
}

function V(a, f, d) {
  kc(a, q[f >> 2] + q[d >> 2], q[f + 4 >> 2] + q[d + 4 >> 2]);
}

function Jc(a, f, d, c, h) {
  var i = b;
  b += 24;
  var j = i + 8, k = i + 16;
  g[a + 60 >> 2] = 0;
  Hc(i, d, f + 12);
  Hc(j, h, c + 12);
  J(k, j, i);
  d = S(k, k);
  h = q[f + 8 >> 2] + q[c + 8 >> 2];
  if ((d > h * h ? 2 : 1) == 1) {
    g[a + 56 >> 2] = 0;
    f += 12;
    d = a + 48;
    for (h = f + 8; f < h; ) e[d++] = e[f++];
    Xb(a + 40);
    g[a + 60 >> 2] = 1;
    f = c + 12;
    d = a;
    for (h = f + 8; f < h; ) e[d++] = e[f++];
    g[a + 16 >> 2] = 0;
  }
  b = i;
}

Jc.X = 1;

function Kc(a, f, d, c, h) {
  var i = b;
  b += 128;
  var j, k = i + 8, p, o, l, m, n, r = i + 16, s = i + 24, u = i + 32, w = i + 40, t = i + 48, A = i + 56, C = i + 64, z = i + 72, B = i + 80, D = i + 88, H = i + 96, G = i + 104, N = i + 112, M = i + 120;
  g[a + 60 >> 2] = 0;
  Hc(i, h, c + 12);
  Ic(k, d, i);
  d = 0;
  h = -3.4028234663852886e+38;
  p = q[f + 8 >> 2] + q[c + 8 >> 2];
  o = g[f + 148 >> 2];
  l = f + 20;
  f += 84;
  for (m = 0; ; ) {
    if (m >= o) {
      j = 6;
      break;
    }
    j = f + (m << 3);
    J(r, k, l + (m << 3));
    n = S(j, r);
    if (n > p) {
      j = 18;
      break;
    }
    j = n > h ? 4 : 5;
    j == 4 && (h = n, d = m);
    m += 1;
  }
  a : do if (j == 6) {
    r = d;
    if (r + 1 < o) j = 7; else {
      var O = 0;
      j = 8;
    }
    j == 7 && (O = r + 1);
    j = O;
    n = s;
    var R;
    m = l + (r << 3);
    for (R = m + 8; m < R; ) e[n++] = e[m++];
    n = u;
    m = l + (j << 3);
    for (R = m + 8; m < R; ) e[n++] = e[m++];
    j = h < 1.1920928955078125e-7 ? 9 : 10;
    if (j == 9) {
      g[a + 60 >> 2] = 1;
      g[a + 56 >> 2] = 1;
      m = f + (d << 3);
      n = a + 40;
      for (R = m + 8; m < R; ) e[n++] = e[m++];
      r = a + 48;
      V(t, s, u);
      T(w, .5, t);
      m = w;
      n = r;
      for (R = m + 8; m < R; ) e[n++] = e[m++];
      m = c + 12;
      n = a;
      for (R = m + 8; m < R; ) e[n++] = e[m++];
      g[a + 16 >> 2] = 0;
    } else if (j == 10) if (J(A, k, s), J(C, u, s), j = S(A, C), J(z, k, u), J(B, s, u), m = S(z, B), j = j <= 0 ? 11 : 13, j == 11) {
      if (Lc(k, s) > p * p) break a;
      g[a + 60 >> 2] = 1;
      g[a + 56 >> 2] = 1;
      r = a + 40;
      J(D, k, s);
      m = D;
      n = r;
      for (R = m + 8; m < R; ) e[n++] = e[m++];
      Mc(a + 40);
      m = s;
      n = a + 48;
      for (R = m + 8; m < R; ) e[n++] = e[m++];
      m = c + 12;
      n = a;
      for (R = m + 8; m < R; ) e[n++] = e[m++];
      g[a + 16 >> 2] = 0;
    } else if (j == 13) if (j = m <= 0 ? 14 : 16, j == 14) {
      if (Lc(k, u) > p * p) break a;
      g[a + 60 >> 2] = 1;
      g[a + 56 >> 2] = 1;
      r = a + 40;
      J(H, k, u);
      m = H;
      n = r;
      for (R = m + 8; m < R; ) e[n++] = e[m++];
      Mc(a + 40);
      m = u;
      n = a + 48;
      for (R = m + 8; m < R; ) e[n++] = e[m++];
      m = c + 12;
      n = a;
      for (R = m + 8; m < R; ) e[n++] = e[m++];
      g[a + 16 >> 2] = 0;
    } else if (j == 16) {
      V(N, s, u);
      T(G, .5, N);
      J(M, k, G);
      m = S(M, f + (r << 3));
      if (m > p) break a;
      g[a + 60 >> 2] = 1;
      g[a + 56 >> 2] = 1;
      m = f + (r << 3);
      n = a + 40;
      for (R = m + 8; m < R; ) e[n++] = e[m++];
      m = G;
      n = a + 48;
      for (R = m + 8; m < R; ) e[n++] = e[m++];
      m = c + 12;
      n = a;
      for (R = m + 8; m < R; ) e[n++] = e[m++];
      g[a + 16 >> 2] = 0;
    }
  } while (0);
  b = i;
}

Kc.X = 1;

function Lc(a, f) {
  var d = b;
  b += 8;
  J(d, a, f);
  var c = S(d, d);
  b = d;
  return c;
}

function Mc(a) {
  var f, d, c;
  c = Nc(a);
  f = c < 1.1920928955078125e-7 ? 1 : 2;
  f == 1 ? d = 0 : f == 2 && (f = 1 / c, q[a >> 2] *= f, q[a + 4 >> 2] *= f, d = c);
  return d;
}

function Nc(a) {
  return Oc(q[a >> 2] * q[a >> 2] + q[a + 4 >> 2] * q[a + 4 >> 2]);
}

function Pc(a, f, d, c, h) {
  var i = b;
  b += 212;
  var j;
  j = i + 8;
  var k = i + 16, p = i + 24, o = i + 32, l;
  l = i + 40;
  var m;
  m = i + 48;
  var n = i + 56, r = i + 60, s = i + 68, u = i + 76, w = i + 84, t = i + 92, A = i + 100, C = i + 108, z = i + 116, B = i + 124, D = i + 132, H = i + 140, G = i + 148, N = i + 156, M = i + 164, O = i + 172, R = i + 180, W = i + 188, E = i + 196, Q = i + 204;
  g[a + 60 >> 2] = 0;
  Hc(j, h, c + 12);
  Ic(i, d, j);
  var K, P, h = f + 12;
  K = k;
  for (P = h + 8; h < P; ) e[K++] = e[h++];
  h = f + 20;
  K = p;
  for (P = h + 8; h < P; ) e[K++] = e[h++];
  J(o, p, k);
  J(l, p, i);
  l = S(o, l);
  J(m, i, k);
  m = S(o, m);
  d = q[f + 8 >> 2] + q[c + 8 >> 2];
  e[n + 1] = 0;
  e[n + 3] = 0;
  j = m <= 0 ? 1 : 5;
  a : do if (j == 1) {
    j = r;
    h = k;
    K = j;
    for (P = h + 8; h < P; ) e[K++] = e[h++];
    J(s, i, r);
    h = S(s, s);
    if (h > d * d) j = 16; else {
      j = e[f + 44] & 1 ? 3 : 4;
      if (j == 3) {
        K = u;
        h = f + 28;
        for (P = h + 8; h < P; ) e[K++] = e[h++];
        K = w;
        h = k;
        for (P = h + 8; h < P; ) e[K++] = e[h++];
        J(t, w, u);
        J(A, w, i);
        h = S(t, A);
        if (h > 0) break a;
      }
      e[n] = 0;
      e[n + 2] = 0;
      g[a + 60 >> 2] = 1;
      g[a + 56 >> 2] = 0;
      Xb(a + 40);
      h = r;
      K = a + 48;
      for (P = h + 8; h < P; ) e[K++] = e[h++];
      g[a + 16 >> 2] = 0;
      h = n;
      K = a + 16;
      for (P = h + 4; h < P; ) e[K++] = e[h++];
      h = c + 12;
      K = a;
      for (P = h + 8; h < P; ) e[K++] = e[h++];
    }
  } else if (j == 5) if (j = l <= 0 ? 6 : 10, j == 6) {
    j = C;
    h = p;
    K = j;
    for (P = h + 8; h < P; ) e[K++] = e[h++];
    J(z, i, C);
    h = S(z, z);
    if (h > d * d) break a;
    j = e[f + 45] & 1 ? 8 : 9;
    if (j == 8) {
      K = B;
      h = f + 36;
      for (P = h + 8; h < P; ) e[K++] = e[h++];
      K = D;
      h = p;
      for (P = h + 8; h < P; ) e[K++] = e[h++];
      J(H, B, D);
      J(G, i, D);
      h = S(H, G);
      if (h > 0) break a;
    }
    e[n] = 1;
    e[n + 2] = 0;
    g[a + 60 >> 2] = 1;
    g[a + 56 >> 2] = 0;
    Xb(a + 40);
    h = C;
    K = a + 48;
    for (P = h + 8; h < P; ) e[K++] = e[h++];
    g[a + 16 >> 2] = 0;
    h = n;
    K = a + 16;
    for (P = h + 4; h < P; ) e[K++] = e[h++];
    h = c + 12;
    K = a;
    for (P = h + 8; h < P; ) e[K++] = e[h++];
  } else if (j == 10) {
    h = S(o, o);
    j = h > 0 ? 12 : 11;
    j == 11 && X(Qc, 127, Rc, Sc);
    h = 1 / h;
    T(O, l, k);
    T(R, m, p);
    V(M, O, R);
    T(N, h, M);
    J(W, i, N);
    h = S(W, W);
    if (h > d * d) break a;
    kc(E, -q[o + 4 >> 2], q[o >> 2]);
    J(Q, i, k);
    j = S(E, Q) < 0 ? 14 : 15;
    j == 14 && ac(E, -q[E >> 2], -q[E + 4 >> 2]);
    Mc(E);
    e[n] = 0;
    e[n + 2] = 1;
    g[a + 60 >> 2] = 1;
    g[a + 56 >> 2] = 1;
    h = E;
    K = a + 40;
    for (P = h + 8; h < P; ) e[K++] = e[h++];
    h = k;
    K = a + 48;
    for (P = h + 8; h < P; ) e[K++] = e[h++];
    g[a + 16 >> 2] = 0;
    h = n;
    K = a + 16;
    for (P = h + 4; h < P; ) e[K++] = e[h++];
    h = c + 12;
    K = a;
    for (P = h + 8; h < P; ) e[K++] = e[h++];
  } while (0);
  b = i;
}

Pc.X = 1;

function Vc(a, f, d, c, h, i) {
  var j = b;
  b += 500;
  var k, p = j + 16, o, l, m = j + 24, n, r = j + 32, s, u, w, t, A = j + 40, C = j + 48, z = j + 56, B = j + 64, D = j + 72, H = j + 80, G = j + 88, N = j + 96, M = j + 104, O = j + 112, R = j + 120, W = j + 128, E = j + 136, Q = j + 144, K = j + 152, P = j + 160, aa = j + 168, ba = j + 176, Y = j + 184, ra = j + 192, ca = j + 200, ea = j + 208, U = j + 216, fa = j + 224, wa = j + 232, Da = j + 240, ha = j + 248, sa = j + 256, Ja = j + 264, Sa = j + 272, Ta = j + 280, ua, Aa = j + 288, lb = j + 296, Ua = j + 304, Va = j + 316, Ma = j + 328, Ba = j + 340, oa = j + 364, da, pa, qa, cb, ya, ub, vb = j + 420, mb = j + 428, db = j + 436, $a = j + 460, yb, Kb, eb, Lb, Fb = j + 484, fb, bc = j + 492, pc = a + 132, zb = b;
  b += 24;
  var cc = zb + 8, Tb = zb + 16, Mb = j + 8, wb = c + 8, Nb = i + 8;
  q[zb >> 2] = q[wb + 4 >> 2] * q[Nb >> 2] - q[wb >> 2] * q[Nb + 4 >> 2];
  q[zb + 4 >> 2] = q[wb + 4 >> 2] * q[Nb + 4 >> 2] + q[wb >> 2] * q[Nb >> 2];
  var qb, Ob, Pb;
  qb = zb;
  Ob = Mb;
  for (Pb = qb + 8; qb < Pb; ) e[Ob++] = e[qb++];
  var dc = c + 8;
  J(Tb, i, c);
  Wc(cc, dc, Tb);
  qb = cc;
  Ob = j;
  for (Pb = qb + 8; qb < Pb; ) e[Ob++] = e[qb++];
  b = zb;
  var x, I, L, rb;
  x = j;
  I = pc;
  L = x + 16;
  if (I % 4 == x % 4) {
    for (; x % 4 !== 0 && x < L; ) e[I++] = e[x++];
    x >>= 2;
    I >>= 2;
    for (rb = L >> 2; x < rb; ) g[I++] = g[x++];
    x <<= 2;
    I <<= 2;
  }
  for (; x < L; ) e[I++] = e[x++];
  var ec = a + 148;
  Hc(p, a + 132, h + 12);
  x = p;
  I = ec;
  for (L = x + 8; x < L; ) e[I++] = e[x++];
  x = d + 28;
  I = a + 156;
  for (L = x + 8; x < L; ) e[I++] = e[x++];
  x = d + 12;
  I = a + 164;
  for (L = x + 8; x < L; ) e[I++] = e[x++];
  x = d + 20;
  I = a + 172;
  for (L = x + 8; x < L; ) e[I++] = e[x++];
  x = d + 36;
  I = a + 180;
  for (L = x + 8; x < L; ) e[I++] = e[x++];
  o = e[d + 44] & 1;
  l = e[d + 45] & 1;
  J(m, a + 172, a + 164);
  Mc(m);
  ac(a + 196, q[m + 4 >> 2], -q[m >> 2]);
  var fc = a + 196;
  J(r, a + 148, a + 164);
  n = S(fc, r);
  t = w = u = s = 0;
  k = o & 1 ? 1 : 2;
  if (k == 1) {
    J(A, a + 164, a + 156);
    Mc(A);
    ac(a + 188, q[A + 4 >> 2], -q[A >> 2]);
    w = Z(A, m) >= 0;
    var ia = a + 188;
    J(C, a + 148, a + 156);
    s = S(ia, C);
  }
  k = l & 1 ? 3 : 4;
  if (k == 3) {
    J(z, a + 180, a + 172);
    Mc(z);
    ac(a + 204, q[z + 4 >> 2], -q[z >> 2]);
    t = Z(m, z) > 0;
    var Ea = a + 204;
    J(B, a + 148, a + 172);
    u = S(Ea, B);
  }
  k = o & 1 ? 5 : 34;
  a : do if (k == 5) if (l & 1) {
    k = w & 1 ? 7 : 14;
    do if (k == 7) if (t & 1) {
      if (s >= 0) {
        var Fa = 1;
        k = 11;
      } else k = 9;
      k == 9 && (n >= 0 ? (Fa = 1, k = 11) : Fa = u >= 0);
      e[a + 248] = Fa;
      var gc = a + 212, hc = a + 196;
      k = e[a + 248] & 1 ? 12 : 13;
      if (k == 12) {
        x = hc;
        I = gc;
        for (L = x + 8; x < L; ) e[I++] = e[x++];
        x = a + 188;
        I = a + 228;
        for (L = x + 8; x < L; ) e[I++] = e[x++];
        x = a + 204;
        I = a + 236;
        for (L = x + 8; x < L; ) e[I++] = e[x++];
        k = 61;
        break a;
      } else if (k == 13) {
        Xc(D, hc);
        x = D;
        I = gc;
        for (L = x + 8; x < L; ) e[I++] = e[x++];
        var qc = a + 228;
        Xc(H, a + 196);
        x = H;
        I = qc;
        for (L = x + 8; x < L; ) e[I++] = e[x++];
        var Fc = a + 236;
        Xc(G, a + 196);
        x = G;
        I = Fc;
        for (L = x + 8; x < L; ) e[I++] = e[x++];
        k = 61;
        break a;
      }
    } else k = 14; while (0);
    k = w & 1 ? 15 : 21;
    if (k == 15) {
      if (s >= 0) {
        var Ub = 1;
        k = 18;
      } else k = 16;
      k == 16 && (n >= 0 ? Ub = u >= 0 : (Ub = 0, k = 18));
      e[a + 248] = Ub;
      var ic = a + 212, jc = a + 196;
      k = e[a + 248] & 1 ? 19 : 20;
      if (k == 19) {
        x = jc;
        I = ic;
        for (L = x + 8; x < L; ) e[I++] = e[x++];
        x = a + 188;
        I = a + 228;
        for (L = x + 8; x < L; ) e[I++] = e[x++];
        x = a + 196;
        I = a + 236;
        for (L = x + 8; x < L; ) e[I++] = e[x++];
        k = 61;
        break a;
      } else if (k == 20) {
        Xc(N, jc);
        x = N;
        I = ic;
        for (L = x + 8; x < L; ) e[I++] = e[x++];
        var Gc = a + 228;
        Xc(M, a + 204);
        x = M;
        I = Gc;
        for (L = x + 8; x < L; ) e[I++] = e[x++];
        var Tc = a + 236;
        Xc(O, a + 196);
        x = O;
        I = Tc;
        for (L = x + 8; x < L; ) e[I++] = e[x++];
        k = 61;
        break a;
      }
    } else if (k == 21) if (k = t & 1 ? 22 : 28, k == 22) {
      if (u >= 0) {
        var rc = 1;
        k = 25;
      } else k = 23;
      k == 23 && (s >= 0 ? rc = n >= 0 : (rc = 0, k = 25));
      e[a + 248] = rc;
      var Uc = a + 212, Yd = a + 196;
      k = e[a + 248] & 1 ? 26 : 27;
      if (k == 26) {
        x = Yd;
        I = Uc;
        for (L = x + 8; x < L; ) e[I++] = e[x++];
        x = a + 196;
        I = a + 228;
        for (L = x + 8; x < L; ) e[I++] = e[x++];
        x = a + 204;
        I = a + 236;
        for (L = x + 8; x < L; ) e[I++] = e[x++];
        k = 61;
        break a;
      } else if (k == 27) {
        Xc(R, Yd);
        x = R;
        I = Uc;
        for (L = x + 8; x < L; ) e[I++] = e[x++];
        var Ff = a + 228;
        Xc(W, a + 196);
        x = W;
        I = Ff;
        for (L = x + 8; x < L; ) e[I++] = e[x++];
        var Gf = a + 236;
        Xc(E, a + 188);
        x = E;
        I = Gf;
        for (L = x + 8; x < L; ) e[I++] = e[x++];
        k = 61;
        break a;
      }
    } else if (k == 28) {
      if (s >= 0) k = 29; else {
        var id = 0;
        k = 31;
      }
      k == 29 && (n >= 0 ? id = u >= 0 : (id = 0, k = 31));
      e[a + 248] = id;
      var Zd = a + 212, $d = a + 196;
      k = e[a + 248] & 1 ? 32 : 33;
      if (k == 32) {
        x = $d;
        I = Zd;
        for (L = x + 8; x < L; ) e[I++] = e[x++];
        x = a + 196;
        I = a + 228;
        for (L = x + 8; x < L; ) e[I++] = e[x++];
        x = a + 196;
        I = a + 236;
        for (L = x + 8; x < L; ) e[I++] = e[x++];
        k = 61;
        break a;
      } else if (k == 33) {
        Xc(Q, $d);
        x = Q;
        I = Zd;
        for (L = x + 8; x < L; ) e[I++] = e[x++];
        var Hf = a + 228;
        Xc(K, a + 204);
        x = K;
        I = Hf;
        for (L = x + 8; x < L; ) e[I++] = e[x++];
        var If = a + 236;
        Xc(P, a + 188);
        x = P;
        I = If;
        for (L = x + 8; x < L; ) e[I++] = e[x++];
        k = 61;
        break a;
      }
    }
  } else k = 34; while (0);
  if (k == 34) if (k = o & 1 ? 35 : 46, k == 35) {
    var ae = s >= 0;
    k = w & 1 ? 36 : 41;
    if (k == 36) {
      if (ae) {
        var be = 1;
        k = 38;
      } else k = 37;
      k == 37 && (be = n >= 0);
      e[a + 248] = be;
      var ce = a + 212, de = a + 196;
      k = e[a + 248] & 1 ? 39 : 40;
      if (k == 39) {
        x = de;
        I = ce;
        for (L = x + 8; x < L; ) e[I++] = e[x++];
        x = a + 188;
        I = a + 228;
        for (L = x + 8; x < L; ) e[I++] = e[x++];
        var Jf = a + 236;
        Xc(aa, a + 196);
        x = aa;
        I = Jf;
        for (L = x + 8; x < L; ) e[I++] = e[x++];
      } else if (k == 40) {
        Xc(ba, de);
        x = ba;
        I = ce;
        for (L = x + 8; x < L; ) e[I++] = e[x++];
        x = a + 196;
        I = a + 228;
        for (L = x + 8; x < L; ) e[I++] = e[x++];
        var Kf = a + 236;
        Xc(Y, a + 196);
        x = Y;
        I = Kf;
        for (L = x + 8; x < L; ) e[I++] = e[x++];
      }
    } else if (k == 41) {
      if (ae) k = 42; else {
        var ee = 0;
        k = 43;
      }
      k == 42 && (ee = n >= 0);
      e[a + 248] = ee;
      var fe = a + 212, ge = a + 196;
      k = e[a + 248] & 1 ? 44 : 45;
      if (k == 44) {
        x = ge;
        I = fe;
        for (L = x + 8; x < L; ) e[I++] = e[x++];
        x = a + 196;
        I = a + 228;
        for (L = x + 8; x < L; ) e[I++] = e[x++];
        var Lf = a + 236;
        Xc(ra, a + 196);
        x = ra;
        I = Lf;
        for (L = x + 8; x < L; ) e[I++] = e[x++];
      } else if (k == 45) {
        Xc(ca, ge);
        x = ca;
        I = fe;
        for (L = x + 8; x < L; ) e[I++] = e[x++];
        x = a + 196;
        I = a + 228;
        for (L = x + 8; x < L; ) e[I++] = e[x++];
        var Mf = a + 236;
        Xc(ea, a + 188);
        x = ea;
        I = Mf;
        for (L = x + 8; x < L; ) e[I++] = e[x++];
      }
    }
  } else if (k == 46) if (k = l & 1 ? 47 : 58, k == 47) {
    var he = n >= 0;
    k = t & 1 ? 48 : 53;
    if (k == 48) {
      if (he) {
        var ie = 1;
        k = 50;
      } else k = 49;
      k == 49 && (ie = u >= 0);
      e[a + 248] = ie;
      var je = a + 212, ke = a + 196;
      k = e[a + 248] & 1 ? 51 : 52;
      if (k == 51) {
        x = ke;
        I = je;
        for (L = x + 8; x < L; ) e[I++] = e[x++];
        var Nf = a + 228;
        Xc(U, a + 196);
        x = U;
        I = Nf;
        for (L = x + 8; x < L; ) e[I++] = e[x++];
        x = a + 204;
        I = a + 236;
        for (L = x + 8; x < L; ) e[I++] = e[x++];
      } else if (k == 52) {
        Xc(fa, ke);
        x = fa;
        I = je;
        for (L = x + 8; x < L; ) e[I++] = e[x++];
        var Of = a + 228;
        Xc(wa, a + 196);
        x = wa;
        I = Of;
        for (L = x + 8; x < L; ) e[I++] = e[x++];
        x = a + 196;
        I = a + 236;
        for (L = x + 8; x < L; ) e[I++] = e[x++];
      }
    } else if (k == 53) {
      if (he) k = 54; else {
        var le = 0;
        k = 55;
      }
      k == 54 && (le = u >= 0);
      e[a + 248] = le;
      var me = a + 212, ne = a + 196;
      k = e[a + 248] & 1 ? 56 : 57;
      if (k == 56) {
        x = ne;
        I = me;
        for (L = x + 8; x < L; ) e[I++] = e[x++];
        var Pf = a + 228;
        Xc(Da, a + 196);
        x = Da;
        I = Pf;
        for (L = x + 8; x < L; ) e[I++] = e[x++];
        x = a + 196;
        I = a + 236;
        for (L = x + 8; x < L; ) e[I++] = e[x++];
      } else if (k == 57) {
        Xc(ha, ne);
        x = ha;
        I = me;
        for (L = x + 8; x < L; ) e[I++] = e[x++];
        var Qf = a + 228;
        Xc(sa, a + 204);
        x = sa;
        I = Qf;
        for (L = x + 8; x < L; ) e[I++] = e[x++];
        x = a + 196;
        I = a + 236;
        for (L = x + 8; x < L; ) e[I++] = e[x++];
      }
    }
  } else if (k == 58) {
    e[a + 248] = n >= 0;
    var oe = a + 212, pe = a + 196;
    k = e[a + 248] & 1 ? 59 : 60;
    if (k == 59) {
      x = pe;
      I = oe;
      for (L = x + 8; x < L; ) e[I++] = e[x++];
      var Rf = a + 228;
      Xc(Ja, a + 196);
      x = Ja;
      I = Rf;
      for (L = x + 8; x < L; ) e[I++] = e[x++];
      var Sf = a + 236;
      Xc(Sa, a + 196);
      x = Sa;
      I = Sf;
      for (L = x + 8; x < L; ) e[I++] = e[x++];
    } else if (k == 60) {
      Xc(Ta, pe);
      x = Ta;
      I = oe;
      for (L = x + 8; x < L; ) e[I++] = e[x++];
      x = a + 196;
      I = a + 228;
      for (L = x + 8; x < L; ) e[I++] = e[x++];
      x = a + 196;
      I = a + 236;
      for (L = x + 8; x < L; ) e[I++] = e[x++];
    }
  }
  g[a + 128 >> 2] = g[h + 148 >> 2];
  ua = 0;
  k = ua < g[h + 148 >> 2] ? 62 : 64;
  a : do if (k == 62) for (var Tf = a, Uf = a + 132, Vf = Aa, Wf = a + 64, Xf = a + 140, Na = lb; ; ) {
    var Gb = Tf + (ua << 3);
    Hc(Aa, Uf, h + 20 + (ua << 3));
    x = Vf;
    I = Gb;
    for (L = x + 8; x < L; ) e[I++] = e[x++];
    var Hb = Wf + (ua << 3);
    Yc(lb, Xf, h + 84 + (ua << 3));
    x = Na;
    I = Hb;
    for (L = x + 8; x < L; ) e[I++] = e[x++];
    ua += 1;
    if (ua >= g[h + 148 >> 2]) {
      k = 64;
      break a;
    }
  } while (0);
  q[a + 244 >> 2] = .019999999552965164;
  g[f + 60 >> 2] = 0;
  Zc(Ua, a);
  k = g[Ua >> 2] == 0 ? 100 : 65;
  a : do if (k == 65) if (q[Ua + 8 >> 2] > q[a + 244 >> 2]) k = 100; else {
    $c(Va, a);
    k = g[Va >> 2] != 0 ? 67 : 68;
    if (k == 67 && q[Va + 8 >> 2] > q[a + 244 >> 2]) {
      k = 100;
      break a;
    }
    k = g[Va >> 2] == 0 ? 69 : 70;
    if (k == 69) {
      var qe = Ma;
      x = Ua;
      I = qe;
      L = x + 12;
      if (I % 4 == x % 4) {
        for (; x % 4 !== 0 && x < L; ) e[I++] = e[x++];
        x >>= 2;
        I >>= 2;
        for (rb = L >> 2; x < rb; ) g[I++] = g[x++];
        x <<= 2;
        I <<= 2;
      }
      for (; x < L; ) e[I++] = e[x++];
    } else if (k == 70) {
      var jd = Ma;
      k = q[Va + 8 >> 2] > q[Ua + 8 >> 2] * .9800000190734863 + .0010000000474974513 ? 71 : 72;
      if (k == 71) {
        x = Va;
        I = jd;
        L = x + 12;
        if (I % 4 == x % 4) {
          for (; x % 4 !== 0 && x < L; ) e[I++] = e[x++];
          x >>= 2;
          I >>= 2;
          for (rb = L >> 2; x < rb; ) g[I++] = g[x++];
          x <<= 2;
          I <<= 2;
        }
        for (; x < L; ) e[I++] = e[x++];
      } else if (k == 72) {
        x = Ua;
        I = jd;
        L = x + 12;
        if (I % 4 == x % 4) {
          for (; x % 4 !== 0 && x < L; ) e[I++] = e[x++];
          x >>= 2;
          I >>= 2;
          for (rb = L >> 2; x < rb; ) g[I++] = g[x++];
          x <<= 2;
          I <<= 2;
        }
        for (; x < L; ) e[I++] = e[x++];
      }
    }
    var kd = f + 56;
    k = g[Ma >> 2] == 1 ? 74 : 84;
    if (k == 74) {
      g[kd >> 2] = 1;
      da = 0;
      pa = S(a + 212, a + 64);
      qa = 1;
      var re = a + 128;
      k = qa < g[re >> 2] ? 75 : 79;
      b : do if (k == 75) for (var Yf = a + 212, Zf = a + 64; ; ) if (cb = S(Yf, Zf + (qa << 3)), k = cb < pa ? 77 : 78, k == 77 && (pa = cb, da = qa), qa += 1, qa >= g[re >> 2]) {
        k = 79;
        break b;
      } while (0);
      ya = da;
      if (ya + 1 < g[a + 128 >> 2]) k = 80; else {
        var se = 0;
        k = 81;
      }
      k == 80 && (se = ya + 1);
      ub = se;
      var $f = Ba;
      x = a + (ya << 3);
      I = $f;
      for (L = x + 8; x < L; ) e[I++] = e[x++];
      e[Ba + 8] = 0;
      e[Ba + 9] = ya & 255;
      e[Ba + 10] = 1;
      e[Ba + 11] = 0;
      var ag = Ba + 12;
      x = a + (ub << 3);
      I = ag;
      for (L = x + 8; x < L; ) e[I++] = e[x++];
      e[Ba + 20] = 0;
      e[Ba + 21] = ub & 255;
      e[Ba + 22] = 1;
      e[Ba + 23] = 0;
      var ld = oa;
      k = e[a + 248] & 1 ? 82 : 83;
      if (k == 82) {
        g[ld >> 2] = 0;
        g[oa + 4 >> 2] = 1;
        var bg = oa + 8;
        x = a + 164;
        I = bg;
        for (L = x + 8; x < L; ) e[I++] = e[x++];
        var cg = oa + 16;
        x = a + 172;
        I = cg;
        for (L = x + 8; x < L; ) e[I++] = e[x++];
        var dg = oa + 24;
        x = a + 196;
        I = dg;
        for (L = x + 8; x < L; ) e[I++] = e[x++];
      } else if (k == 83) {
        g[ld >> 2] = 1;
        g[oa + 4 >> 2] = 0;
        var eg = oa + 8;
        x = a + 172;
        I = eg;
        for (L = x + 8; x < L; ) e[I++] = e[x++];
        var Bo = oa + 16;
        x = a + 164;
        I = Bo;
        for (L = x + 8; x < L; ) e[I++] = e[x++];
        var Co = oa + 24;
        Xc(vb, a + 196);
        var Do = Co;
        x = vb;
        I = Do;
        for (L = x + 8; x < L; ) e[I++] = e[x++];
      }
    } else if (k == 84) {
      g[kd >> 2] = 2;
      var Eo = Ba;
      x = a + 164;
      I = Eo;
      for (L = x + 8; x < L; ) e[I++] = e[x++];
      e[Ba + 8] = 0;
      e[Ba + 9] = g[Ma + 4 >> 2] & 255;
      e[Ba + 10] = 0;
      e[Ba + 11] = 1;
      var Fo = Ba + 12;
      x = a + 172;
      I = Fo;
      for (L = x + 8; x < L; ) e[I++] = e[x++];
      e[Ba + 20] = 0;
      e[Ba + 21] = g[Ma + 4 >> 2] & 255;
      e[Ba + 22] = 0;
      e[Ba + 23] = 1;
      g[oa >> 2] = g[Ma + 4 >> 2];
      if (g[oa >> 2] + 1 < g[a + 128 >> 2]) k = 85; else {
        var Qi = 0;
        k = 86;
      }
      k == 85 && (Qi = g[oa >> 2] + 1);
      g[oa + 4 >> 2] = Qi;
      var Go = oa + 8;
      x = a + (g[oa >> 2] << 3);
      I = Go;
      for (L = x + 8; x < L; ) e[I++] = e[x++];
      var Ho = oa + 16;
      x = a + (g[oa + 4 >> 2] << 3);
      I = Ho;
      for (L = x + 8; x < L; ) e[I++] = e[x++];
      var Io = oa + 24;
      x = a + 64 + (g[oa >> 2] << 3);
      I = Io;
      for (L = x + 8; x < L; ) e[I++] = e[x++];
    }
    ac(oa + 32, q[oa + 28 >> 2], -q[oa + 24 >> 2]);
    var Jo = oa + 44;
    Xc(mb, oa + 32);
    var Ko = Jo;
    x = mb;
    I = Ko;
    for (L = x + 8; x < L; ) e[I++] = e[x++];
    q[oa + 40 >> 2] = S(oa + 32, oa + 8);
    q[oa + 52 >> 2] = S(oa + 44, oa + 16);
    var Ri = ad(db, Ba, oa + 32, q[oa + 40 >> 2], g[oa >> 2]);
    yb = Ri;
    if (Ri < 2) k = 100; else if (yb = ad($a, db, oa + 44, q[oa + 52 >> 2], g[oa + 4 >> 2]), yb < 2) k = 100; else {
      k = g[Ma >> 2] == 1 ? 90 : 91;
      if (k == 90) {
        x = oa + 24;
        I = f + 40;
        for (L = x + 8; x < L; ) e[I++] = e[x++];
        x = oa + 8;
        I = f + 48;
        for (L = x + 8; x < L; ) e[I++] = e[x++];
      } else if (k == 91) {
        x = h + 84 + (g[oa >> 2] << 3);
        I = f + 40;
        for (L = x + 8; x < L; ) e[I++] = e[x++];
        x = h + 20 + (g[oa >> 2] << 3);
        I = f + 48;
        for (L = x + 8; x < L; ) e[I++] = e[x++];
      }
      eb = Kb = 0;
      for (var Lo = oa + 24, Mo = oa + 8, No = a + 244, Oo = Ma, Po = a + 132, Qo = bc; ; ) {
        J(Fb, $a + eb * 12, Mo);
        Lb = S(Lo, Fb);
        k = Lb <= q[No >> 2] ? 94 : 98;
        if (k == 94) {
          var Si = fb = f + Kb * 20, Ti = $a + eb * 12;
          k = g[Oo >> 2] == 1 ? 95 : 96;
          if (k == 95) {
            Ic(bc, Po, Ti);
            x = Qo;
            I = Si;
            for (L = x + 8; x < L; ) e[I++] = e[x++];
            x = $a + eb * 12 + 8;
            I = fb + 16;
            for (L = x + 4; x < L; ) e[I++] = e[x++];
          } else if (k == 96) {
            x = Ti;
            I = Si;
            for (L = x + 8; x < L; ) e[I++] = e[x++];
            e[fb + 18] = e[$a + eb * 12 + 11];
            e[fb + 19] = e[$a + eb * 12 + 10];
            e[fb + 16] = e[$a + eb * 12 + 9];
            e[fb + 17] = e[$a + eb * 12 + 8];
          }
          Kb += 1;
        }
        var Ui = eb + 1;
        eb = Ui;
        if (Ui >= 2) {
          k = 99;
          break;
        }
      }
      g[f + 60 >> 2] = Kb;
    }
  } while (0);
  b = j;
}

Vc.X = 1;

function Z(a, f) {
  return q[a >> 2] * q[f + 4 >> 2] - q[a + 4 >> 2] * q[f >> 2];
}

function Xc(a, f) {
  ac(a, -q[f >> 2], -q[f + 4 >> 2]);
}

function Yc(a, f, d) {
  kc(a, q[f + 4 >> 2] * q[d >> 2] - q[f >> 2] * q[d + 4 >> 2], q[f >> 2] * q[d >> 2] + q[f + 4 >> 2] * q[d + 4 >> 2]);
}

function Wc(a, f, d) {
  kc(a, q[f + 4 >> 2] * q[d >> 2] + q[f >> 2] * q[d + 4 >> 2], -q[f >> 2] * q[d >> 2] + q[f + 4 >> 2] * q[d + 4 >> 2]);
}

function Zc(a, f) {
  var d = b;
  b += 8;
  var c, h, i;
  g[a >> 2] = 1;
  g[a + 4 >> 2] = e[f + 248] & 1 ? 0 : 1;
  q[a + 8 >> 2] = 3.4028234663852886e+38;
  h = 0;
  var j = f + 128;
  c = h < g[j >> 2] ? 1 : 5;
  a : do if (c == 1) for (var k = f + 212, p = f, o = f + 164, l = a + 8, m = a + 8; ; ) if (J(d, p + (h << 3), o), i = S(k, d), c = i < q[l >> 2] ? 3 : 4, c == 3 && (q[m >> 2] = i), h += 1, h >= g[j >> 2]) break a; while (0);
  b = d;
}

Zc.X = 1;

function $c(a, f) {
  var d = b;
  b += 48;
  var c, h, i = d + 8, j = d + 16, k, p = d + 24, o = d + 32, l = d + 40;
  g[a >> 2] = 0;
  g[a + 4 >> 2] = -1;
  q[a + 8 >> 2] = -3.4028234663852886e+38;
  kc(d, -q[f + 216 >> 2], q[f + 212 >> 2]);
  h = 0;
  for (var m = f + 128, n = f + 64, r = f + 164, s = f + 172, u = f + 244, w = f + 236, t = f + 212, A = a + 8, C = a + 4, z = a + 8, B = f + 228, D = f + 212; ; ) {
    if (h >= g[m >> 2]) {
      c = 10;
      break;
    }
    Xc(i, n + (h << 3));
    J(j, f + (h << 3), r);
    c = S(i, j);
    J(p, f + (h << 3), s);
    k = S(i, p);
    k = c < k ? c : k;
    if (k > q[u >> 2]) {
      c = 3;
      break;
    }
    c = S(i, d) >= 0 ? 5 : 6;
    c == 5 ? (J(o, i, w), c = S(o, t) < -.03490658849477768 ? 9 : 7) : c == 6 && (J(l, i, B), c = S(l, D) < -.03490658849477768 ? 9 : 7);
    c == 7 && (k > q[A >> 2] ? (g[a >> 2] = 2, g[C >> 2] = h, q[z >> 2] = k) : c = 9);
    h += 1;
  }
  c == 3 && (g[a >> 2] = 2, g[a + 4 >> 2] = h, q[a + 8 >> 2] = k);
  b = d;
}

$c.X = 1;

function bd(a, f, d, c, h) {
  var i = b;
  b += 212;
  var j, k, p, o = i + 4, l, m, n = i + 8, r = i + 24, s, u, w = i + 40, t, A, C, z = i + 64, B = i + 72, D = i + 80, H = i + 88, G = i + 96, N = i + 104, M = i + 112, O = i + 120, R = i + 128, W = i + 136, E, Q, K = i + 144, P = i + 168, aa = i + 192, ba, Y = i + 200, ra = i + 208;
  g[a + 60 >> 2] = 0;
  k = q[f + 8 >> 2] + q[c + 8 >> 2];
  g[i >> 2] = 0;
  p = cd(i, f, d, c, h);
  j = p > k ? 16 : 1;
  do if (j == 1) if (g[o >> 2] = 0, j = cd(o, c, h, f, d), j > k) j = 16; else {
    j = j > p * .9800000190734863 + .0010000000474974513 ? 3 : 4;
    if (j == 3) {
      l = c;
      m = f;
      s = n;
      var ca;
      E = h;
      Q = s;
      ca = E + 16;
      if (Q % 4 == E % 4) {
        for (; E % 4 !== 0 && E < ca; ) e[Q++] = e[E++];
        E >>= 2;
        Q >>= 2;
        for (s = ca >> 2; E < s; ) g[Q++] = g[E++];
        E <<= 2;
        Q <<= 2;
      }
      for (; E < ca; ) e[Q++] = e[E++];
      s = r;
      E = d;
      Q = s;
      ca = E + 16;
      if (Q % 4 == E % 4) {
        for (; E % 4 !== 0 && E < ca; ) e[Q++] = e[E++];
        E >>= 2;
        Q >>= 2;
        for (s = ca >> 2; E < s; ) g[Q++] = g[E++];
        E <<= 2;
        Q <<= 2;
      }
      for (; E < ca; ) e[Q++] = e[E++];
      s = g[o >> 2];
      g[a + 56 >> 2] = 2;
      u = 1;
    } else if (j == 4) {
      l = f;
      m = c;
      s = n;
      E = d;
      Q = s;
      ca = E + 16;
      if (Q % 4 == E % 4) {
        for (; E % 4 !== 0 && E < ca; ) e[Q++] = e[E++];
        E >>= 2;
        Q >>= 2;
        for (s = ca >> 2; E < s; ) g[Q++] = g[E++];
        E <<= 2;
        Q <<= 2;
      }
      for (; E < ca; ) e[Q++] = e[E++];
      s = r;
      E = h;
      Q = s;
      ca = E + 16;
      if (Q % 4 == E % 4) {
        for (; E % 4 !== 0 && E < ca; ) e[Q++] = e[E++];
        E >>= 2;
        Q >>= 2;
        for (s = ca >> 2; E < s; ) g[Q++] = g[E++];
        E <<= 2;
        Q <<= 2;
      }
      for (; E < ca; ) e[Q++] = e[E++];
      s = g[i >> 2];
      g[a + 56 >> 2] = 1;
      u = 0;
    }
    dd(w, l, n, s, m, r);
    j = g[l + 148 >> 2];
    t = l + 20;
    A = s;
    if (s + 1 < j) j = 6; else {
      var ea = 0;
      j = 7;
    }
    j == 6 && (ea = s + 1);
    C = ea;
    Q = z;
    E = t + (A << 3);
    for (ca = E + 8; E < ca; ) e[Q++] = e[E++];
    Q = B;
    E = t + (C << 3);
    for (ca = E + 8; E < ca; ) e[Q++] = e[E++];
    J(D, B, z);
    Mc(D);
    ed(H, D);
    V(N, z, B);
    T(G, .5, N);
    Yc(M, n + 8, D);
    ed(O, M);
    Hc(R, n, z);
    t = z;
    E = R;
    Q = t;
    for (ca = E + 8; E < ca; ) e[Q++] = e[E++];
    Hc(W, n, B);
    t = B;
    E = W;
    Q = t;
    for (ca = E + 8; E < ca; ) e[Q++] = e[E++];
    t = S(O, z);
    E = -S(M, z) + k;
    Q = S(M, B) + k;
    ca = K;
    var U = w;
    Xc(aa, M);
    if (ad(ca, U, aa, E, A) < 2) j = 16; else if (E = ad(P, K, M, Q, C), E < 2) j = 16; else {
      E = H;
      Q = a + 40;
      for (ca = E + 8; E < ca; ) e[Q++] = e[E++];
      E = G;
      Q = a + 48;
      for (ca = E + 8; E < ca; ) e[Q++] = e[E++];
      C = A = 0;
      for (var U = Y, fa = ra, wa = ra + 1, Da = ra, ha = ra + 3, sa = ra + 2; ; ) {
        j = S(O, P + C * 12) - t;
        j = j <= k ? 11 : 14;
        if (j == 11) {
          j = ba = a + A * 20;
          Ic(Y, r, P + C * 12);
          E = U;
          Q = j;
          for (ca = E + 8; E < ca; ) e[Q++] = e[E++];
          E = P + C * 12 + 8;
          Q = ba + 16;
          for (ca = E + 4; E < ca; ) e[Q++] = e[E++];
          j = u != 0 ? 12 : 13;
          if (j == 12) {
            E = ba + 16;
            Q = fa;
            for (ca = E + 4; E < ca; ) e[Q++] = e[E++];
            e[ba + 16] = e[wa];
            e[ba + 17] = e[Da];
            e[ba + 18] = e[ha];
            e[ba + 19] = e[sa];
          }
          A += 1;
        }
        C = E = C + 1;
        if (E >= 2) {
          j = 15;
          break;
        }
      }
      g[a + 60 >> 2] = A;
    }
  } while (0);
  b = i;
}

bd.X = 1;

function ed(a, f) {
  kc(a, 1 * q[f + 4 >> 2], -1 * q[f >> 2]);
}

function cd(a, f, d, c, h) {
  var i = b;
  b += 32;
  var j, k, p, o;
  j = i + 8;
  var l = i + 16, m = i + 24, n, r, s, u, w, t, A, C;
  p = g[f + 148 >> 2];
  o = f + 84;
  Hc(j, h, c + 12);
  Hc(l, d, f + 12);
  J(i, j, l);
  Wc(m, d + 8, i);
  l = 0;
  n = -3.4028234663852886e+38;
  r = 0;
  j = r < p ? 1 : 4;
  a : do if (j == 1) for (;;) if (s = S(o + (r << 3), m), j = s > n ? 2 : 3, j == 2 && (n = s, l = r), r += 1, r >= p) break a; while (0);
  o = fd(f, d, l, c, h);
  j = l - 1 >= 0 ? 5 : 6;
  j == 5 ? u = l - 1 : j == 6 && (u = p - 1);
  m = fd(f, d, u, c, h);
  l + 1 < p ? j = 8 : (w = 0, j = 9);
  j == 8 && (w = l + 1);
  n = fd(f, d, w, c, h);
  j = m > o ? 10 : 12;
  if (j == 10) if (m > n) {
    C = -1;
    t = u;
    A = m;
    var z = -1;
    j = 15;
  } else j = 12;
  a : do if (j == 12) if (j = n > o ? 13 : 14, j == 13) {
    C = 1;
    t = w;
    A = n;
    z = 1;
    j = 15;
    break a;
  } else if (j == 14) {
    g[a >> 2] = l;
    k = o;
    j = 26;
    break a;
  } while (0);
  if (j == 15) {
    for (;;) {
      j = z == -1 ? 16 : 20;
      if (j == 16) {
        j = t - 1 >= 0 ? 17 : 18;
        if (j == 17) var B = t - 1; else j == 18 && (B = p - 1);
        l = B;
      } else if (j == 20) {
        if (t + 1 < p) j = 21; else {
          var D = 0;
          j = 22;
        }
        j == 21 && (D = t + 1);
        l = D;
      }
      o = fd(f, d, l, c, h);
      if (o <= A) break;
      t = l;
      A = o;
      z = C;
    }
    g[a >> 2] = t;
    k = A;
  }
  b = i;
  return k;
}

cd.X = 1;

function dd(a, f, d, c, h, i) {
  var j = b;
  b += 32;
  var k, p, o, l, m = j + 8, n = j + 16, r = j + 24;
  k = f + 84;
  p = g[h + 148 >> 2];
  o = h + 20;
  l = h + 84;
  h = 0 <= c ? 1 : 2;
  h == 1 && (h = c < g[f + 148 >> 2] ? 3 : 2);
  h == 2 && X(gd, 151, hd, md);
  h = i + 8;
  Yc(m, d + 8, k + (c << 3));
  Wc(j, h, m);
  d = 0;
  k = 3.4028234663852886e+38;
  m = 0;
  h = m < p ? 4 : 7;
  a : do if (h == 4) for (;;) if (f = S(j, l + (m << 3)), h = f < k ? 5 : 6, h == 5 && (k = f, d = m), m += 1, m >= p) break a; while (0);
  l = d;
  if (l + 1 < p) h = 8; else var s = 0, h = 9;
  h == 8 && (s = l + 1);
  p = s;
  Hc(n, i, o + (l << 3));
  s = a;
  for (h = n + 8; n < h; ) e[s++] = e[n++];
  e[a + 8] = c & 255;
  e[a + 9] = l & 255;
  e[a + 10] = 1;
  e[a + 11] = 0;
  s = a + 12;
  Hc(r, i, o + (p << 3));
  n = r;
  for (h = n + 8; n < h; ) e[s++] = e[n++];
  e[a + 20] = c & 255;
  e[a + 21] = p & 255;
  e[a + 22] = 1;
  e[a + 23] = 0;
  b = j;
}

dd.X = 1;

function fd(a, f, d, c, h) {
  var i = b;
  b += 40;
  var j, k, p, o, l = i + 8, m, n, r = i + 16, s = i + 24, u = i + 32;
  j = a + 20;
  k = a + 84;
  p = g[c + 148 >> 2];
  o = c + 20;
  c = 0 <= d ? 1 : 2;
  c == 1 && (c = d < g[a + 148 >> 2] ? 3 : 2);
  c == 2 && X(gd, 32, nd, md);
  Yc(i, f + 8, k + (d << 3));
  Wc(l, h + 8, i);
  a = 0;
  k = 3.4028234663852886e+38;
  m = 0;
  c = m < p ? 4 : 7;
  a : do if (c == 4) for (;;) if (n = S(o + (m << 3), l), c = n < k ? 5 : 6, c == 5 && (k = n, a = m), m += 1, m >= p) break a; while (0);
  Hc(r, f, j + (d << 3));
  Hc(s, h, o + (a << 3));
  J(u, s, r);
  f = S(u, i);
  b = i;
  return f;
}

fd.X = 1;

function od(a, f, d, c, h, i) {
  var j = b;
  b += 240;
  var k, p = j + 8, o = j + 16, l = j + 24, m = j + 32, n = j + 40, r = j + 48, s = j + 56, u = j + 64, w = j + 72, t = j + 80, A, C = j + 88, z = j + 96, B = j + 104, D = j + 112, H = j + 120, G = j + 128, N = j + 136, M = j + 144, O = j + 152, R = j + 160, W = j + 168, E = j + 176, Q = j + 184, K = j + 192, P = j + 200, aa = j + 208, ba = j + 216, Y = j + 224, ra = j + 232;
  k = g[f + 60 >> 2] == 0 ? 12 : 1;
  a : do if (k == 1) {
    k = g[f + 56 >> 2];
    if (k == 0) k = 2; else if (k == 1) k = 5; else if (k == 2) k = 8; else break;
    if (k == 2) {
      ac(a, 1, 0);
      Hc(j, d, f + 48);
      Hc(p, h, f);
      k = Lc(j, p) > 1.4210854715202004e-14 ? 3 : 4;
      if (k == 3) {
        var ca = a;
        J(o, p, j);
        var ea, U;
        ea = o;
        for (U = ea + 8; ea < U; ) e[ca++] = e[ea++];
        Mc(a);
      }
      T(m, c, a);
      V(l, j, m);
      T(r, i, a);
      J(n, p, r);
      ca = a + 8;
      V(u, l, n);
      T(s, .5, u);
      ea = s;
      for (U = ea + 8; ea < U; ) e[ca++] = e[ea++];
    } else if (k == 5) {
      ca = a;
      Yc(w, d + 8, f + 40);
      ea = w;
      for (U = ea + 8; ea < U; ) e[ca++] = e[ea++];
      Hc(t, d, f + 48);
      A = 0;
      if (A >= g[f + 60 >> 2]) break a;
      for (var fa = a, wa = a, Da = a, ha = a + 8, sa = N; ; ) {
        Hc(C, h, f + A * 20);
        ea = c;
        J(D, C, t);
        T(B, ea - S(D, fa), wa);
        V(z, C, B);
        T(G, i, Da);
        J(H, C, G);
        ca = ha + (A << 3);
        V(M, z, H);
        T(N, .5, M);
        ea = sa;
        for (U = ea + 8; ea < U; ) e[ca++] = e[ea++];
        A += 1;
        if (A >= g[f + 60 >> 2]) break a;
      }
    } else if (k == 8) {
      k = a;
      Yc(O, h + 8, f + 40);
      ea = O;
      ca = k;
      for (U = ea + 8; ea < U; ) e[ca++] = e[ea++];
      Hc(R, h, f + 48);
      A = 0;
      k = A < g[f + 60 >> 2] ? 9 : 11;
      b : do if (k == 9) {
        Da = wa = fa = a;
        ha = a + 8;
        for (sa = ba; ; ) {
          Hc(W, d, f + A * 20);
          ea = i;
          J(K, W, R);
          T(Q, ea - S(K, fa), wa);
          V(E, W, Q);
          T(aa, c, Da);
          J(P, W, aa);
          ca = ha + (A << 3);
          V(Y, P, E);
          T(ba, .5, Y);
          ea = sa;
          for (U = ea + 8; ea < U; ) e[ca++] = e[ea++];
          A += 1;
          if (A >= g[f + 60 >> 2]) {
            k = 11;
            break b;
          }
        }
      } while (0);
      ca = a;
      Xc(ra, a);
      ea = ra;
      for (U = ea + 8; ea < U; ) e[ca++] = e[ea++];
    }
  } while (0);
  b = j;
}

od.X = 1;

function pd(a) {
  var f;
  if (a > 0) {
    var d = a;
    f = 2;
  } else f = 1;
  f == 1 && (d = -a);
  return d;
}

function qd(a) {
  g[a + 16 >> 2] = 0;
  g[a + 20 >> 2] = 0;
  q[a + 24 >> 2] = 0;
}

function ad(a, f, d, c, h) {
  var i = b;
  b += 24;
  var j, k, p = i + 8, o = i + 16;
  j = 0;
  k = S(d, f) - c;
  d = S(d, f + 12) - c;
  if (k <= 0) c = 1; else var l = d, c = 2;
  if (c == 1) {
    c = j;
    j = c + 1;
    var m, n, l = f, c = a + c * 12;
    m = l + 12;
    if (c % 4 == l % 4) {
      for (; l % 4 !== 0 && l < m; ) e[c++] = e[l++];
      l >>= 2;
      c >>= 2;
      for (n = m >> 2; l < n; ) g[c++] = g[l++];
      l <<= 2;
      c <<= 2;
    }
    for (; l < m; ) e[c++] = e[l++];
    l = d;
  }
  if ((l <= 0 ? 3 : 4) == 3) {
    c = j;
    j = c + 1;
    l = f + 12;
    c = a + c * 12;
    m = l + 12;
    if (c % 4 == l % 4) {
      for (; l % 4 !== 0 && l < m; ) e[c++] = e[l++];
      l >>= 2;
      c >>= 2;
      for (n = m >> 2; l < n; ) g[c++] = g[l++];
      l <<= 2;
      c <<= 2;
    }
    for (; l < m; ) e[c++] = e[l++];
  }
  if ((k * d < 0 ? 5 : 6) == 5) {
    d = k / (k - d);
    k = a + j * 12;
    J(o, f + 12, f);
    T(p, d, o);
    V(i, f, p);
    l = i;
    c = k;
    for (m = l + 8; l < m; ) e[c++] = e[l++];
    e[a + j * 12 + 8] = h & 255;
    e[a + j * 12 + 9] = e[f + 9];
    e[a + j * 12 + 10] = 0;
    e[a + j * 12 + 11] = 1;
    j += 1;
  }
  b = i;
  return j;
}

ad.X = 1;

function rd(a, f, d) {
  var c;
  c = g[f + 4 >> 2];
  c = c == 0 ? 1 : c == 2 ? 2 : c == 3 ? 3 : c == 1 ? 10 : 11;
  if (c == 11) X(sd, 81, td, ud); else if (c == 1) g[a + 16 >> 2] = f + 12, g[a + 20 >> 2] = 1, q[a + 24 >> 2] = q[f + 8 >> 2]; else if (c == 2) g[a + 16 >> 2] = f + 20, g[a + 20 >> 2] = g[f + 148 >> 2], q[a + 24 >> 2] = q[f + 8 >> 2]; else if (c == 3) {
    c = 0 <= d ? 4 : 5;
    c == 4 && (c = d < g[f + 16 >> 2] ? 6 : 5);
    c == 5 && X(sd, 53, td, vd);
    var h, i;
    c = g[f + 12 >> 2] + (d << 3);
    h = a;
    for (i = c + 8; c < i; ) e[h++] = e[c++];
    c = d + 1 < g[f + 16 >> 2] ? 7 : 8;
    if (c == 7) {
      c = g[f + 12 >> 2] + (d + 1 << 3);
      h = a + 8;
      for (i = c + 8; c < i; ) e[h++] = e[c++];
    } else if (c == 8) {
      c = g[f + 12 >> 2];
      h = a + 8;
      for (i = c + 8; c < i; ) e[h++] = e[c++];
    }
    g[a + 16 >> 2] = a;
    g[a + 20 >> 2] = 2;
    q[a + 24 >> 2] = q[f + 8 >> 2];
  } else c == 10 && (g[a + 16 >> 2] = f + 12, g[a + 20 >> 2] = 2, q[a + 24 >> 2] = q[f + 8 >> 2]);
}

rd.X = 1;

function wd(a) {
  var f = b;
  b += 24;
  var d, c = f + 8, h = f + 16, i, j;
  i = a + 16;
  d = f;
  for (j = i + 8; i < j; ) e[d++] = e[i++];
  i = a + 52;
  d = c;
  for (j = i + 8; i < j; ) e[d++] = e[i++];
  J(h, c, f);
  i = -S(f, h);
  d = i <= 0 ? 1 : 2;
  if (d == 1) q[a + 24 >> 2] = 1, g[a + 108 >> 2] = 1; else if (d == 2) if (c = S(c, h), d = c <= 0 ? 3 : 4, d == 3) {
    q[a + 60 >> 2] = 1;
    g[a + 108 >> 2] = 1;
    i = a + 36;
    d = a;
    j = i + 36;
    if (d % 4 == i % 4) {
      for (; i % 4 !== 0 && i < j; ) e[d++] = e[i++];
      i >>= 2;
      d >>= 2;
      for (a = j >> 2; i < a; ) g[d++] = g[i++];
      i <<= 2;
      d <<= 2;
    }
    for (; i < j; ) e[d++] = e[i++];
  } else d == 4 && (h = 1 / (c + i), q[a + 24 >> 2] = c * h, q[a + 60 >> 2] = i * h, g[a + 108 >> 2] = 2);
  b = f;
}

wd.X = 1;

function xd(a, f) {
  var d = b;
  b += 16;
  var c, h = d + 8;
  c = g[f + 108 >> 2];
  c = c == 0 ? 1 : c == 1 ? 2 : c == 2 ? 3 : c == 3 ? 4 : 5;
  if (c == 5) {
    X(sd, 207, yd, ud);
    var i, h = zd;
    c = a;
    for (i = h + 8; h < i; ) e[c++] = e[h++];
  } else if (c == 1) {
    X(sd, 194, yd, ud);
    h = zd;
    c = a;
    for (i = h + 8; h < i; ) e[c++] = e[h++];
  } else if (c == 2) {
    h = f + 16;
    c = a;
    for (i = h + 8; h < i; ) e[c++] = e[h++];
  } else if (c == 3) T(d, q[f + 24 >> 2], f + 16), T(h, q[f + 60 >> 2], f + 52), V(a, d, h); else if (c == 4) {
    h = zd;
    c = a;
    for (i = h + 8; h < i; ) e[c++] = e[h++];
  }
  b = d;
}

function Ad(a) {
  return q[a >> 2] * q[a >> 2] + q[a + 4 >> 2] * q[a + 4 >> 2];
}

function Bd(a) {
  var f = b;
  b += 48;
  var d;
  d = f + 8;
  var c = f + 16, h = f + 24, i, j, k = f + 32, p, o, l = f + 40, m, n, r, s, u;
  n = a + 16;
  r = f;
  for (s = n + 8; n < s; ) e[r++] = e[n++];
  n = a + 52;
  r = d;
  for (s = n + 8; n < s; ) e[r++] = e[n++];
  n = a + 88;
  r = c;
  for (s = n + 8; n < s; ) e[r++] = e[n++];
  J(h, d, f);
  i = S(f, h);
  j = S(d, h);
  i = -i;
  J(k, c, f);
  p = S(f, k);
  o = S(c, k);
  p = -p;
  J(l, c, d);
  m = S(d, l);
  l = S(c, l);
  m = -m;
  n = Z(h, k);
  h = n * Z(d, c);
  c = n * Z(c, f);
  k = n * Z(f, d);
  d = i <= 0 ? 1 : 3;
  d == 1 && (p <= 0 ? (q[a + 24 >> 2] = 1, g[a + 108 >> 2] = 1, d = 21) : d = 3);
  a : do if (d == 3) {
    d = j > 0 ? 4 : 7;
    do if (d == 4) if (i > 0) if (k <= 0) {
      o = 1 / (j + i);
      q[a + 24 >> 2] = j * o;
      q[a + 60 >> 2] = i * o;
      g[a + 108 >> 2] = 2;
      break a;
    } else d = 7; else d = 7; while (0);
    d = o > 0 ? 8 : 11;
    do if (d == 8) if (p > 0) if (c <= 0) {
      j = 1 / (o + p);
      q[a + 24 >> 2] = o * j;
      q[a + 96 >> 2] = p * j;
      g[a + 108 >> 2] = 2;
      n = a + 72;
      r = a + 36;
      s = n + 36;
      if (r % 4 == n % 4) {
        for (; n % 4 !== 0 && n < s; ) e[r++] = e[n++];
        n >>= 2;
        r >>= 2;
        for (u = s >> 2; n < u; ) g[r++] = g[n++];
        n <<= 2;
        r <<= 2;
      }
      for (; n < s; ) e[r++] = e[n++];
      break a;
    } else d = 11; else d = 11; while (0);
    d = j <= 0 ? 12 : 14;
    do if (d == 12) if (m <= 0) {
      q[a + 60 >> 2] = 1;
      g[a + 108 >> 2] = 1;
      n = a + 36;
      r = a;
      s = n + 36;
      if (r % 4 == n % 4) {
        for (; n % 4 !== 0 && n < s; ) e[r++] = e[n++];
        n >>= 2;
        r >>= 2;
        for (u = s >> 2; n < u; ) g[r++] = g[n++];
        n <<= 2;
        r <<= 2;
      }
      for (; n < s; ) e[r++] = e[n++];
      break a;
    } else d = 14; while (0);
    d = o <= 0 & l <= 0 ? 15 : 16;
    if (d == 15) {
      q[a + 96 >> 2] = 1;
      g[a + 108 >> 2] = 1;
      n = a + 72;
      r = a;
      s = n + 36;
      if (r % 4 == n % 4) {
        for (; n % 4 !== 0 && n < s; ) e[r++] = e[n++];
        n >>= 2;
        r >>= 2;
        for (u = s >> 2; n < u; ) g[r++] = g[n++];
        n <<= 2;
        r <<= 2;
      }
      for (; n < s; ) e[r++] = e[n++];
    } else if (d == 16) {
      d = l > 0 ? 17 : 20;
      do if (d == 17) if (m > 0) if (h <= 0) {
        j = 1 / (l + m);
        q[a + 60 >> 2] = l * j;
        q[a + 96 >> 2] = m * j;
        g[a + 108 >> 2] = 2;
        n = a + 72;
        r = a;
        s = n + 36;
        if (r % 4 == n % 4) {
          for (; n % 4 !== 0 && n < s; ) e[r++] = e[n++];
          n >>= 2;
          r >>= 2;
          for (u = s >> 2; n < u; ) g[r++] = g[n++];
          n <<= 2;
          r <<= 2;
        }
        for (; n < s; ) e[r++] = e[n++];
        break a;
      } else d = 20; else d = 20; while (0);
      n = 1 / (h + c + k);
      q[a + 24 >> 2] = h * n;
      q[a + 60 >> 2] = c * n;
      q[a + 96 >> 2] = k * n;
      g[a + 108 >> 2] = 3;
    }
  } while (0);
  b = f;
}

Bd.X = 1;

function Cd(a, f, d) {
  var c = b;
  b += 288;
  var h, i, j = c + 16, k = c + 32, p = c + 144, o = c + 156, l, m = c + 168, n, r = c + 176, s = c + 184, u = c + 192, w = c + 200, t = c + 208, A = c + 224, C = c + 232, z = c + 240, B, D, H = c + 248, G = c + 256, N = c + 264, M = c + 272, O = c + 280;
  g[Dd >> 2] += 1;
  i = d + 28;
  var R;
  B = d + 56;
  D = c;
  R = B + 16;
  if (D % 4 == B % 4) {
    for (; B % 4 !== 0 && B < R; ) e[D++] = e[B++];
    B >>= 2;
    D >>= 2;
    for (h = R >> 2; B < h; ) g[D++] = g[B++];
    B <<= 2;
    D <<= 2;
  }
  for (; B < R; ) e[D++] = e[B++];
  B = d + 72;
  D = j;
  R = B + 16;
  if (D % 4 == B % 4) {
    for (; B % 4 !== 0 && B < R; ) e[D++] = e[B++];
    B >>= 2;
    D >>= 2;
    for (h = R >> 2; B < h; ) g[D++] = g[B++];
    B <<= 2;
    D <<= 2;
  }
  for (; B < R; ) e[D++] = e[B++];
  Ed(k, f, d, c, i, j);
  xd(m, k);
  var m = 0, W = k + 108, E = k + 108, Q = k + 108, K = k + 108, P = c + 8, aa = j + 8, ba = k + 108;
  h = 0;
  a : for (;;) {
    if (h >= 20) break;
    l = g[W >> 2];
    n = 0;
    h = n < l ? 3 : 4;
    b : do if (h == 3) for (;;) if (g[p + (n << 2) >> 2] = g[k + n * 36 + 28 >> 2], g[o + (n << 2) >> 2] = g[k + n * 36 + 32 >> 2], n += 1, n >= l) break b; while (0);
    h = g[E >> 2];
    h = h == 1 ? 9 : h == 2 ? 5 : h == 3 ? 6 : 7;
    h == 7 ? (X(sd, 498, Fd, ud), h = 8) : h == 5 ? (wd(k), h = 8) : h == 6 && (Bd(k), h = 8);
    if (h == 8 && g[Q >> 2] == 3) break a;
    xd(r, k);
    n = s;
    D = k;
    B = b;
    b += 16;
    var Y = ga;
    R = ga;
    R = B + 8;
    Y = g[D + 108 >> 2];
    Y = Y == 1 ? 1 : Y == 2 ? 2 : 5;
    if (Y == 5) {
      X(sd, 184, Gd, ud);
      Y = R = D = ga;
      D = zd;
      R = n;
      for (Y = D + 8; D < Y; ) e[R++] = e[D++];
    } else Y == 1 ? Xc(n, D + 16) : Y == 2 && (J(B, D + 52, D + 16), Xc(R, D + 16), R = Z(B, R), Y = R > 0 ? 3 : 4, Y == 3 ? Hd(n, 1, B) : Y == 4 && ed(n, B));
    b = B;
    if (Ad(s) < 1.4210854715202004e-14) break;
    n = k + g[K >> 2] * 36;
    B = d;
    Xc(w, s);
    Wc(u, P, w);
    g[n + 28 >> 2] = Id(B, u);
    D = n;
    B = Jd(d, g[n + 28 >> 2]);
    Hc(t, c, B);
    B = t;
    for (R = B + 8; B < R; ) e[D++] = e[B++];
    B = i;
    Wc(A, aa, s);
    g[n + 32 >> 2] = Id(B, A);
    D = n + 8;
    B = Jd(i, g[n + 32 >> 2]);
    Hc(C, j, B);
    B = C;
    for (R = B + 8; B < R; ) e[D++] = e[B++];
    D = n + 16;
    J(z, n + 8, n);
    B = z;
    for (R = B + 8; B < R; ) e[D++] = e[B++];
    m += 1;
    g[Kd >> 2] += 1;
    D = B = 0;
    b : for (;;) {
      if (D >= l) {
        h = 16;
        break;
      }
      h = g[n + 28 >> 2] == g[p + (D << 2) >> 2] ? 13 : 15;
      if (h == 13 && g[n + 32 >> 2] == g[o + (D << 2) >> 2]) {
        h = 14;
        break b;
      }
      D += 1;
    }
    h == 14 && (B = 1);
    if (B & 1) break;
    g[ba >> 2] += 1;
    h = m;
  }
  g[Ld >> 2] = g[Ld >> 2] > m ? g[Ld >> 2] : m;
  Md(k, a, a + 8);
  j = Nd(a, a + 8);
  q[a + 16 >> 2] = j;
  g[a + 20 >> 2] = m;
  Od(k, f);
  h = e[d + 88] & 1 ? 19 : 23;
  a : do if (h == 19) {
    k = q[d + 24 >> 2];
    f = q[i + 24 >> 2];
    h = q[a + 16 >> 2] > k + f ? 20 : 22;
    do if (h == 20) if (q[a + 16 >> 2] > 1.1920928955078125e-7) {
      q[a + 16 >> 2] -= k + f;
      J(H, a + 8, a);
      Mc(H);
      d = a;
      T(G, k, H);
      Sb(d, G);
      a += 8;
      T(N, f, H);
      Pd(a, N);
      break a;
    } else h = 22; while (0);
    V(O, a, a + 8);
    T(M, .5, O);
    B = M;
    D = a;
    for (R = B + 8; B < R; ) e[D++] = e[B++];
    B = M;
    D = a + 8;
    for (R = B + 8; B < R; ) e[D++] = e[B++];
    q[a + 16 >> 2] = 0;
  } while (0);
  b = c;
}

Cd.X = 1;

function Ed(a, f, d, c, h, i) {
  var j = b;
  b += 80;
  var k, p, o, l = j + 8, m = j + 16, n = j + 24, r = j + 32, s, u = j + 40, w = j + 48, t = j + 56, A = j + 64, C = j + 72;
  k = Ra[f + 4 >> 1] <= 3 ? 2 : 1;
  k == 1 && X(sd, 102, Qd, Rd);
  g[a + 108 >> 2] = Ra[f + 4 >> 1];
  p = 0;
  var z = a + 108;
  k = p < g[z >> 2] ? 3 : 5;
  a : do if (k == 3) for (var B = j, D = l, H = m, G = n, N = r; ; ) {
    o = a + p * 36;
    g[o + 28 >> 2] = Qa[p + (f + 6)];
    g[o + 32 >> 2] = Qa[p + (f + 9)];
    var M, O;
    s = Jd(d, g[o + 28 >> 2]);
    M = B;
    for (O = s + 8; s < O; ) e[M++] = e[s++];
    s = Jd(h, g[o + 32 >> 2]);
    M = D;
    for (O = s + 8; s < O; ) e[M++] = e[s++];
    M = o;
    Hc(m, c, j);
    s = H;
    for (O = s + 8; s < O; ) e[M++] = e[s++];
    M = o + 8;
    Hc(n, i, l);
    s = G;
    for (O = s + 8; s < O; ) e[M++] = e[s++];
    M = o + 16;
    J(r, o + 8, o);
    s = N;
    for (O = s + 8; s < O; ) e[M++] = e[s++];
    q[o + 24 >> 2] = 0;
    p += 1;
    if (p >= g[z >> 2]) break a;
  } while (0);
  k = g[a + 108 >> 2] > 1 ? 6 : 9;
  a : do if (k == 6) {
    s = q[f >> 2];
    p = Sd(a);
    k = p < s * .5 ? 8 : 7;
    if (k == 7 && !(s * 2 < p | p < 1.1920928955078125e-7)) break a;
    g[a + 108 >> 2] = 0;
  } while (0);
  k = g[a + 108 >> 2] == 0 ? 10 : 11;
  if (k == 10) {
    g[a + 28 >> 2] = 0;
    g[a + 32 >> 2] = 0;
    s = Jd(d, 0);
    M = u;
    for (O = s + 8; s < O; ) e[M++] = e[s++];
    s = Jd(h, 0);
    M = w;
    for (O = s + 8; s < O; ) e[M++] = e[s++];
    Hc(t, c, u);
    s = t;
    M = a;
    for (O = s + 8; s < O; ) e[M++] = e[s++];
    f = a + 8;
    Hc(A, i, w);
    s = A;
    M = f;
    for (O = s + 8; s < O; ) e[M++] = e[s++];
    i = a + 16;
    J(C, a + 8, a);
    s = C;
    M = i;
    for (O = s + 8; s < O; ) e[M++] = e[s++];
    g[a + 108 >> 2] = 1;
  }
  b = j;
}

Ed.X = 1;

function Jd(a, f) {
  var d;
  d = 0 <= f ? 1 : 2;
  d == 1 && (d = f < g[a + 20 >> 2] ? 3 : 2);
  d == 2 && X(Td, 103, Ud, Vd);
  return g[a + 16 >> 2] + (f << 3);
}

function Md(a, f, d) {
  var c = b;
  b += 88;
  var h, i = c + 8, j = c + 16, k = c + 24, p = c + 32, o = c + 40, l = c + 48, m = c + 56, n = c + 64, r = c + 72, s = c + 80;
  h = g[a + 108 >> 2];
  h = h == 0 ? 1 : h == 1 ? 2 : h == 2 ? 3 : h == 3 ? 4 : 5;
  if (h == 5) X(sd, 236, Wd, ud); else if (h == 1) X(sd, 217, Wd, ud); else if (h == 2) {
    i = a;
    j = f;
    for (l = i + 8; i < l; ) e[j++] = e[i++];
    i = a + 8;
    j = d;
    for (l = i + 8; i < l; ) e[j++] = e[i++];
  } else if (h == 3) {
    T(i, q[a + 24 >> 2], a);
    T(j, q[a + 60 >> 2], a + 36);
    V(c, i, j);
    i = c;
    j = f;
    for (l = i + 8; i < l; ) e[j++] = e[i++];
    T(p, q[a + 24 >> 2], a + 8);
    T(o, q[a + 60 >> 2], a + 44);
    V(k, p, o);
    i = k;
    j = d;
    for (l = i + 8; i < l; ) e[j++] = e[i++];
  } else if (h == 4) {
    T(n, q[a + 24 >> 2], a);
    T(r, q[a + 60 >> 2], a + 36);
    V(m, n, r);
    T(s, q[a + 96 >> 2], a + 72);
    V(l, m, s);
    i = l;
    j = f;
    for (l = i + 8; i < l; ) e[j++] = e[i++];
    i = f;
    j = d;
    for (l = i + 8; i < l; ) e[j++] = e[i++];
  }
  b = c;
}

Md.X = 1;

function Pd(a, f) {
  q[a >> 2] -= q[f >> 2];
  q[a + 4 >> 2] -= q[f + 4 >> 2];
}

function Hd(a, f, d) {
  kc(a, -f * q[d + 4 >> 2], f * q[d >> 2]);
}

function Xd(a, f) {
  var d;
  d = 0 <= f ? 1 : 2;
  d == 1 && (d = f < g[a + 12 >> 2] ? 3 : 2);
  d == 2 && X(te, 97, ue, ve);
  d = 0 < g[a + 8 >> 2] ? 5 : 4;
  d == 4 && X(te, 98, ue, we);
  g[g[a + 4 >> 2] + f * 36 + 20 >> 2] = g[a + 16 >> 2];
  g[g[a + 4 >> 2] + f * 36 + 32 >> 2] = -1;
  g[a + 16 >> 2] = f;
  g[a + 8 >> 2] -= 1;
}

function Id(a, f) {
  var d, c, h, i, j;
  c = 0;
  h = S(g[a + 16 >> 2], f);
  i = 1;
  var k = a + 20;
  d = i < g[k >> 2] ? 1 : 5;
  a : do if (d == 1) for (var p = a + 16; ; ) if (j = S(g[p >> 2] + (i << 3), f), d = j > h ? 3 : 4, d == 3 && (c = i, h = j), i += 1, i >= g[k >> 2]) break a; while (0);
  return c;
}

function Nd(a, f) {
  var d = b;
  b += 8;
  J(d, a, f);
  var c = Nc(d);
  b = d;
  return c;
}

function Od(a, f) {
  var d, c;
  d = Sd(a);
  q[f >> 2] = d;
  Pa[f + 4 >> 1] = g[a + 108 >> 2] & 65535;
  c = 0;
  var h = a + 108;
  d = c < g[h >> 2] ? 1 : 2;
  a : do if (d == 1) for (;;) if (e[c + (f + 6)] = g[a + c * 36 + 28 >> 2] & 255, e[c + (f + 9)] = g[a + c * 36 + 32 >> 2] & 255, c += 1, c >= g[h >> 2]) break a; while (0);
}

Od.X = 1;

function Sd(a) {
  var f = b;
  b += 16;
  var d, c, h = f + 8;
  d = g[a + 108 >> 2];
  d = d == 0 ? 1 : d == 1 ? 2 : d == 2 ? 3 : d == 3 ? 4 : 5;
  d == 5 ? (X(sd, 259, xe, ud), c = 0) : d == 1 ? (X(sd, 246, xe, ud), c = 0) : d == 2 ? c = 0 : d == 3 ? c = Nd(a + 16, a + 52) : d == 4 && (J(f, a + 52, a + 16), J(h, a + 88, a + 16), c = Z(f, h));
  b = f;
  return c;
}

function Cc(a) {
  var f, d;
  g[a >> 2] = -1;
  g[a + 12 >> 2] = 16;
  g[a + 8 >> 2] = 0;
  f = jb(g[a + 12 >> 2] * 36);
  g[a + 4 >> 2] = f;
  d = g[a + 12 >> 2] * 36;
  var c, h;
  f = g[a + 4 >> 2];
  d = f + d;
  h = 0;
  h < 0 && (h += 256);
  for (h = h + (h << 8) + (h << 16) + h * 16777216; f % 4 !== 0 && f < d; ) e[f++] = 0;
  f >>= 2;
  for (c = d >> 2; f < c; ) g[f++] = h;
  for (f <<= 2; f < d; ) e[f++] = 0;
  d = 0;
  c = a + 12;
  f = d < g[c >> 2] - 1 ? 1 : 3;
  a : do if (f == 1) {
    h = a + 4;
    for (var i = a + 4; ; ) if (g[g[h >> 2] + d * 36 + 20 >> 2] = d + 1, g[g[i >> 2] + d * 36 + 32 >> 2] = -1, d += 1, d >= g[c >> 2] - 1) break a;
  } while (0);
  g[g[a + 4 >> 2] + (g[a + 12 >> 2] - 1) * 36 + 20 >> 2] = -1;
  g[g[a + 4 >> 2] + (g[a + 12 >> 2] - 1) * 36 + 32 >> 2] = -1;
  g[a + 16 >> 2] = 0;
  g[a + 20 >> 2] = 0;
  g[a + 24 >> 2] = 0;
}

Cc.X = 1;

function ye(a) {
  var f, d;
  f = g[a + 16 >> 2] == -1 ? 1 : 7;
  if (f == 1) {
    f = g[a + 8 >> 2] == g[a + 12 >> 2] ? 3 : 2;
    f == 2 && X(te, 61, ze, Ae);
    d = g[a + 4 >> 2];
    g[a + 12 >> 2] <<= 1;
    f = jb(g[a + 12 >> 2] * 36);
    g[a + 4 >> 2] = f;
    var c = g[a + 4 >> 2];
    f = g[a + 8 >> 2] * 36;
    var h;
    h = d + f;
    if (c % 4 == d % 4 && f > 8) {
      for (; d % 4 !== 0 && d < h; ) e[c++] = e[d++];
      d >>= 2;
      c >>= 2;
      for (f = h >> 2; d < f; ) g[c++] = g[d++];
      d <<= 2;
      c <<= 2;
    }
    for (; d < h; ) e[c++] = e[d++];
    d = g[a + 8 >> 2];
    c = a + 12;
    f = d < g[c >> 2] - 1 ? 4 : 6;
    a : do if (f == 4) {
      h = a + 4;
      for (var i = a + 4; ; ) if (g[g[h >> 2] + d * 36 + 20 >> 2] = d + 1, g[g[i >> 2] + d * 36 + 32 >> 2] = -1, d += 1, d >= g[c >> 2] - 1) break a;
    } while (0);
    g[g[a + 4 >> 2] + (g[a + 12 >> 2] - 1) * 36 + 20 >> 2] = -1;
    g[g[a + 4 >> 2] + (g[a + 12 >> 2] - 1) * 36 + 32 >> 2] = -1;
    g[a + 16 >> 2] = g[a + 8 >> 2];
  }
  f = g[a + 16 >> 2];
  g[a + 16 >> 2] = g[g[a + 4 >> 2] + f * 36 + 20 >> 2];
  g[g[a + 4 >> 2] + f * 36 + 20 >> 2] = -1;
  g[g[a + 4 >> 2] + f * 36 + 24 >> 2] = -1;
  g[g[a + 4 >> 2] + f * 36 + 28 >> 2] = -1;
  g[g[a + 4 >> 2] + f * 36 + 32 >> 2] = 0;
  g[g[a + 4 >> 2] + f * 36 + 16 >> 2] = 0;
  g[a + 8 >> 2] += 1;
  return f;
}

ye.X = 1;

function Be(a, f, d) {
  var c = b;
  b += 24;
  var h, i = c + 8, j = c + 16;
  h = ye(a);
  kc(c, .10000000149011612, .10000000149011612);
  var k = g[a + 4 >> 2] + h * 36;
  J(i, f, c);
  var p;
  for (p = i + 8; i < p; ) e[k++] = e[i++];
  k = g[a + 4 >> 2] + h * 36 + 8;
  V(j, f + 8, c);
  i = j;
  for (p = i + 8; i < p; ) e[k++] = e[i++];
  g[g[a + 4 >> 2] + h * 36 + 16 >> 2] = d;
  g[g[a + 4 >> 2] + h * 36 + 32 >> 2] = 0;
  Ce(a, h);
  b = c;
  return h;
}

Be.X = 1;

function De(a) {
  return g[a + 24 >> 2] == -1;
}

function Ee(a, f) {
  var d, c;
  c = 1;
  c == 1 && (d = q[a >> 2] <= q[f >> 2]);
  if (d & 1) c = 3; else {
    var h = 0;
    c = 4;
  }
  c == 3 && (h = q[a + 4 >> 2] <= q[f + 4 >> 2]);
  if (h & 1) c = 5; else {
    var i = 0;
    c = 6;
  }
  c == 5 && (i = q[f + 8 >> 2] <= q[a + 8 >> 2]);
  if (i & 1) c = 7; else {
    var j = 0;
    c = 8;
  }
  c == 7 && (j = q[f + 12 >> 2] <= q[a + 12 >> 2]);
  return j & 1;
}

Ee.X = 1;

function Ce(a, f) {
  var d = b;
  b += 96;
  var c, h, i, j, k = d + 16, p, o, l, m = d + 32, n = d + 48, r, s = d + 64, u = d + 80, w, t;
  g[a + 24 >> 2] += 1;
  c = g[a >> 2] == -1 ? 1 : 2;
  a : do if (c == 1) g[a >> 2] = f, g[g[a + 4 >> 2] + g[a >> 2] * 36 + 20 >> 2] = -1; else if (c == 2) {
    c = d;
    h = g[a + 4 >> 2] + f * 36;
    i = h + 16;
    if (c % 4 == h % 4) {
      for (; h % 4 !== 0 && h < i; ) e[c++] = e[h++];
      h >>= 2;
      c >>= 2;
      for (j = i >> 2; h < j; ) g[c++] = g[h++];
      h <<= 2;
      c <<= 2;
    }
    for (; h < i; ) e[c++] = e[h++];
    h = g[a >> 2];
    var A = a + 4, C = a + 4, z = a + 4, B = a + 4, D = a + 4, H = a + 4;
    w = a + 4;
    t = a + 4;
    var G = a + 4, N = a + 4, M = a + 4, O = a + 4, R = a + 4;
    b : for (;;) {
      if (De(g[A >> 2] + h * 36) != 0) break;
      i = g[g[C >> 2] + h * 36 + 24 >> 2];
      j = g[g[z >> 2] + h * 36 + 28 >> 2];
      c = Fe(g[B >> 2] + h * 36);
      Ge(k, g[D >> 2] + h * 36, d);
      p = Fe(k);
      o = p * 2;
      p = (p - c) * 2;
      c = De(g[H >> 2] + i * 36) ? 5 : 6;
      c == 5 ? (Ge(m, d, g[w >> 2] + i * 36), l = Fe(m) + p) : c == 6 && (Ge(n, d, g[O >> 2] + i * 36), l = Fe(g[R >> 2] + i * 36), c = Fe(n), l = c - l + p);
      c = De(g[t >> 2] + j * 36) ? 8 : 9;
      c == 8 ? (Ge(s, d, g[G >> 2] + j * 36), r = Fe(s) + p) : c == 9 && (Ge(u, d, g[N >> 2] + j * 36), r = Fe(g[M >> 2] + j * 36), c = Fe(u), r = c - r + p);
      c = o < l ? 11 : 12;
      if (c == 11 && o < r) break b;
      c = l < r ? 13 : 14;
      c == 13 ? h = i : c == 14 && (h = j);
    }
    i = g[g[a + 4 >> 2] + h * 36 + 20 >> 2];
    j = ye(a);
    g[g[a + 4 >> 2] + j * 36 + 20 >> 2] = i;
    g[g[a + 4 >> 2] + j * 36 + 16 >> 2] = 0;
    Ge(g[a + 4 >> 2] + j * 36, d, g[a + 4 >> 2] + h * 36);
    g[g[a + 4 >> 2] + j * 36 + 32 >> 2] = g[g[a + 4 >> 2] + h * 36 + 32 >> 2] + 1;
    c = i != -1 ? 16 : 20;
    c == 16 ? (o = g[a + 4 >> 2] + i * 36, c = g[g[a + 4 >> 2] + i * 36 + 24 >> 2] == h ? 17 : 18, c == 17 ? g[o + 24 >> 2] = j : c == 18 && (g[o + 28 >> 2] = j), g[g[a + 4 >> 2] + j * 36 + 24 >> 2] = h, g[g[a + 4 >> 2] + j * 36 + 28 >> 2] = f, g[g[a + 4 >> 2] + h * 36 + 20 >> 2] = j, g[g[a + 4 >> 2] + f * 36 + 20 >> 2] = j) : c == 20 && (g[g[a + 4 >> 2] + j * 36 + 24 >> 2] = h, g[g[a + 4 >> 2] + j * 36 + 28 >> 2] = f, g[g[a + 4 >> 2] + h * 36 + 20 >> 2] = j, g[g[a + 4 >> 2] + f * 36 + 20 >> 2] = j, g[a >> 2] = j);
    h = g[g[a + 4 >> 2] + f * 36 + 20 >> 2];
    if (g[g[a + 4 >> 2] + f * 36 + 20 >> 2] == -1) c = 28; else {
      i = a + 4;
      j = a + 4;
      o = a + 4;
      A = a + 4;
      C = a + 4;
      z = a + 4;
      B = a + 4;
      D = a + 4;
      for (H = a + 4; ; ) {
        h = He(a, h);
        w = g[g[i >> 2] + h * 36 + 24 >> 2];
        t = g[g[j >> 2] + h * 36 + 28 >> 2];
        if (w != -1) {
          var W = g[g[j >> 2] + h * 36 + 28 >> 2];
          c = 25;
        } else c = 24;
        c == 24 && (X(te, 307, Ie, Je), W = t);
        c = W != -1 ? 27 : 26;
        c == 26 && X(te, 308, Ie, Ke);
        g[g[C >> 2] + h * 36 + 32 >> 2] = (g[g[o >> 2] + w * 36 + 32 >> 2] > g[g[A >> 2] + t * 36 + 32 >> 2] ? g[g[o >> 2] + w * 36 + 32 >> 2] : g[g[A >> 2] + t * 36 + 32 >> 2]) + 1;
        Ge(g[z >> 2] + h * 36, g[B >> 2] + w * 36, g[D >> 2] + t * 36);
        h = w = g[g[H >> 2] + h * 36 + 20 >> 2];
        if (w == -1) break a;
      }
    }
  } while (0);
  b = d;
}

Ce.X = 1;

function Le(a, f) {
  var d, c, h, i, j, k;
  d = f == g[a >> 2] ? 1 : 2;
  a : do if (d == 1) g[a >> 2] = -1; else if (d == 2) {
    c = g[g[a + 4 >> 2] + f * 36 + 20 >> 2];
    h = g[g[a + 4 >> 2] + c * 36 + 20 >> 2];
    var p = g[a + 4 >> 2] + c * 36;
    d = g[g[a + 4 >> 2] + c * 36 + 24 >> 2] == f ? 3 : 4;
    d == 3 ? i = g[p + 28 >> 2] : d == 4 && (i = g[p + 24 >> 2]);
    d = h != -1 ? 6 : 12;
    if (d == 6) {
      p = g[a + 4 >> 2] + h * 36;
      d = g[g[a + 4 >> 2] + h * 36 + 24 >> 2] == c ? 7 : 8;
      d == 7 ? g[p + 24 >> 2] = i : d == 8 && (g[p + 28 >> 2] = i);
      g[g[a + 4 >> 2] + i * 36 + 20 >> 2] = h;
      Xd(a, c);
      c = h;
      if (h == -1) break a;
      h = a + 4;
      for (var p = a + 4, o = a + 4, l = a + 4, m = a + 4, n = a + 4, r = a + 4, s = a + 4, u = a + 4; ; ) if (c = He(a, c), j = g[g[h >> 2] + c * 36 + 24 >> 2], k = g[g[p >> 2] + c * 36 + 28 >> 2], Ge(g[o >> 2] + c * 36, g[l >> 2] + j * 36, g[m >> 2] + k * 36), g[g[s >> 2] + c * 36 + 32 >> 2] = (g[g[n >> 2] + j * 36 + 32 >> 2] > g[g[r >> 2] + k * 36 + 32 >> 2] ? g[g[n >> 2] + j * 36 + 32 >> 2] : g[g[r >> 2] + k * 36 + 32 >> 2]) + 1, c = j = g[g[u >> 2] + c * 36 + 20 >> 2], j == -1) break a;
    } else d == 12 && (g[a >> 2] = i, g[g[a + 4 >> 2] + i * 36 + 20 >> 2] = -1, Xd(a, c));
  } while (0);
}

Le.X = 1;

function Me(a, f, d, c) {
  var h = b;
  b += 48;
  var i, j, k = h + 16, p = h + 24, o = h + 32, l = h + 40;
  i = 0 <= f ? 1 : 2;
  i == 1 && (i = f < g[a + 12 >> 2] ? 3 : 2);
  i == 2 && X(te, 135, Ne, Oe);
  i = De(g[a + 4 >> 2] + f * 36) ? 5 : 4;
  i == 4 && X(te, 137, Ne, Pe);
  i = Ee(g[a + 4 >> 2] + f * 36, d) ? 6 : 7;
  if (i == 6) j = 0; else if (i == 7) {
    Le(a, f);
    var m;
    i = d;
    d = h;
    j = i + 16;
    if (d % 4 == i % 4) {
      for (; i % 4 !== 0 && i < j; ) e[d++] = e[i++];
      i >>= 2;
      d >>= 2;
      for (m = j >> 2; i < m; ) g[d++] = g[i++];
      i <<= 2;
      d <<= 2;
    }
    for (; i < j; ) e[d++] = e[i++];
    kc(k, .10000000149011612, .10000000149011612);
    J(p, h, k);
    i = p;
    d = h;
    for (j = i + 8; i < j; ) e[d++] = e[i++];
    p = h + 8;
    V(o, h + 8, k);
    i = o;
    d = p;
    for (j = i + 8; i < j; ) e[d++] = e[i++];
    T(l, 2, c);
    c = q[l >> 2];
    i = q[l >> 2] < 0 ? 8 : 9;
    i == 8 ? q[h >> 2] += c : i == 9 && (q[h + 8 >> 2] += c);
    c = q[l + 4 >> 2];
    i = q[l + 4 >> 2] < 0 ? 11 : 12;
    i == 11 ? q[h + 4 >> 2] += c : i == 12 && (q[h + 12 >> 2] += c);
    l = g[a + 4 >> 2] + f * 36;
    i = h;
    d = l;
    j = i + 16;
    if (d % 4 == i % 4) {
      for (; i % 4 !== 0 && i < j; ) e[d++] = e[i++];
      i >>= 2;
      d >>= 2;
      for (m = j >> 2; i < m; ) g[d++] = g[i++];
      i <<= 2;
      d <<= 2;
    }
    for (; i < j; ) e[d++] = e[i++];
    Ce(a, f);
    j = 1;
  }
  b = h;
  return j;
}

Me.X = 1;

function Fe(a) {
  return (q[a + 8 >> 2] - q[a >> 2] + (q[a + 12 >> 2] - q[a + 4 >> 2])) * 2;
}

function Ge(a, f, d) {
  var c = b;
  b += 16;
  var h = c + 8;
  Qe(c, f, d);
  var i, j, k;
  i = c;
  j = a;
  for (k = i + 8; i < k; ) e[j++] = e[i++];
  a += 8;
  Re(h, f + 8, d + 8);
  i = h;
  j = a;
  for (k = i + 8; i < k; ) e[j++] = e[i++];
  b = c;
}

function He(a, f) {
  var d, c, h, i, j, k, p, o, l;
  (f != -1 ? 2 : 1) == 1 && X(te, 382, Se, Te);
  h = g[a + 4 >> 2] + f * 36;
  d = De(h) ? 4 : 3;
  a : do if (d == 3) if (g[h + 32 >> 2] < 2) d = 4; else if (i = g[h + 24 >> 2], j = g[h + 28 >> 2], d = 0 <= i ? 6 : 7, d == 6 && (d = i < g[a + 12 >> 2] ? 8 : 7), d == 7 && X(te, 392, Se, Ue), d = 0 <= j ? 9 : 10, d == 9 && (d = j < g[a + 12 >> 2] ? 11 : 10), d == 10 && X(te, 393, Se, Ve), k = g[a + 4 >> 2] + i * 36, p = g[a + 4 >> 2] + j * 36, o = g[p + 32 >> 2] - g[k + 32 >> 2], d = g[p + 32 >> 2] - g[k + 32 >> 2] > 1 ? 12 : 29, d == 12) {
    i = g[p + 24 >> 2];
    c = g[p + 28 >> 2];
    o = g[a + 4 >> 2] + i * 36;
    l = g[a + 4 >> 2] + c * 36;
    d = 0 <= i ? 13 : 14;
    d == 13 && (d = i < g[a + 12 >> 2] ? 15 : 14);
    d == 14 && X(te, 407, Se, We);
    d = 0 <= c ? 16 : 17;
    d == 16 && (d = c < g[a + 12 >> 2] ? 18 : 17);
    d == 17 && X(te, 408, Se, Xe);
    g[p + 24 >> 2] = f;
    g[p + 20 >> 2] = g[h + 20 >> 2];
    g[h + 20 >> 2] = j;
    d = g[p + 20 >> 2] != -1 ? 19 : 24;
    d == 19 ? (d = g[g[a + 4 >> 2] + g[p + 20 >> 2] * 36 + 24 >> 2] == f ? 20 : 21, d == 20 ? g[g[a + 4 >> 2] + g[p + 20 >> 2] * 36 + 24 >> 2] = j : d == 21 && (d = g[g[a + 4 >> 2] + g[p + 20 >> 2] * 36 + 28 >> 2] == f ? 23 : 22, d == 22 && X(te, 424, Se, Ye), g[g[a + 4 >> 2] + g[p + 20 >> 2] * 36 + 28 >> 2] = j)) : d == 24 && (g[a >> 2] = j);
    d = g[o + 32 >> 2] > g[l + 32 >> 2] ? 26 : 27;
    d == 26 ? (g[p + 28 >> 2] = i, g[h + 28 >> 2] = c, g[l + 20 >> 2] = f, Ge(h, k, l), Ge(p, h, o), g[h + 32 >> 2] = (g[k + 32 >> 2] > g[l + 32 >> 2] ? g[k + 32 >> 2] : g[l + 32 >> 2]) + 1, g[p + 32 >> 2] = (g[h + 32 >> 2] > g[o + 32 >> 2] ? g[h + 32 >> 2] : g[o + 32 >> 2]) + 1) : d == 27 && (g[p + 28 >> 2] = c, g[h + 28 >> 2] = i, g[o + 20 >> 2] = f, Ge(h, k, o), Ge(p, h, l), g[h + 32 >> 2] = (g[k + 32 >> 2] > g[o + 32 >> 2] ? g[k + 32 >> 2] : g[o + 32 >> 2]) + 1, g[p + 32 >> 2] = (g[h + 32 >> 2] > g[l + 32 >> 2] ? g[h + 32 >> 2] : g[l + 32 >> 2]) + 1);
    c = j;
    d = 48;
    break a;
  } else if (d == 29) if (d = o < -1 ? 30 : 47, d == 30) {
    j = g[k + 24 >> 2];
    c = g[k + 28 >> 2];
    o = g[a + 4 >> 2] + j * 36;
    l = g[a + 4 >> 2] + c * 36;
    d = 0 <= j ? 31 : 32;
    d == 31 && (d = j < g[a + 12 >> 2] ? 33 : 32);
    d == 32 && X(te, 467, Se, Ze);
    d = 0 <= c ? 34 : 35;
    d == 34 && (d = c < g[a + 12 >> 2] ? 36 : 35);
    d == 35 && X(te, 468, Se, $e);
    g[k + 24 >> 2] = f;
    g[k + 20 >> 2] = g[h + 20 >> 2];
    g[h + 20 >> 2] = i;
    d = g[k + 20 >> 2] != -1 ? 37 : 42;
    d == 37 ? (d = g[g[a + 4 >> 2] + g[k + 20 >> 2] * 36 + 24 >> 2] == f ? 38 : 39, d == 38 ? g[g[a + 4 >> 2] + g[k + 20 >> 2] * 36 + 24 >> 2] = i : d == 39 && (d = g[g[a + 4 >> 2] + g[k + 20 >> 2] * 36 + 28 >> 2] == f ? 41 : 40, d == 40 && X(te, 484, Se, af), g[g[a + 4 >> 2] + g[k + 20 >> 2] * 36 + 28 >> 2] = i)) : d == 42 && (g[a >> 2] = i);
    d = g[o + 32 >> 2] > g[l + 32 >> 2] ? 44 : 45;
    d == 44 ? (g[k + 28 >> 2] = j, g[h + 24 >> 2] = c, g[l + 20 >> 2] = f, Ge(h, p, l), Ge(k, h, o), g[h + 32 >> 2] = (g[p + 32 >> 2] > g[l + 32 >> 2] ? g[p + 32 >> 2] : g[l + 32 >> 2]) + 1, g[k + 32 >> 2] = (g[h + 32 >> 2] > g[o + 32 >> 2] ? g[h + 32 >> 2] : g[o + 32 >> 2]) + 1) : d == 45 && (g[k + 28 >> 2] = c, g[h + 24 >> 2] = j, g[o + 20 >> 2] = f, Ge(h, p, o), Ge(k, h, l), g[h + 32 >> 2] = (g[p + 32 >> 2] > g[o + 32 >> 2] ? g[p + 32 >> 2] : g[o + 32 >> 2]) + 1, g[k + 32 >> 2] = (g[h + 32 >> 2] > g[l + 32 >> 2] ? g[h + 32 >> 2] : g[l + 32 >> 2]) + 1);
    c = i;
    d = 48;
    break a;
  } else if (d == 47) {
    c = f;
    d = 48;
    break a;
  } while (0);
  d == 4 && (c = f);
  return c;
}

He.X = 1;

function Qe(a, f, d) {
  kc(a, q[f >> 2] < q[d >> 2] ? q[f >> 2] : q[d >> 2], q[f + 4 >> 2] < q[d + 4 >> 2] ? q[f + 4 >> 2] : q[d + 4 >> 2]);
}

function Re(a, f, d) {
  kc(a, q[f >> 2] > q[d >> 2] ? q[f >> 2] : q[d >> 2], q[f + 4 >> 2] > q[d + 4 >> 2] ? q[f + 4 >> 2] : q[d + 4 >> 2]);
}

function bf(a, f, d) {
  var c = b;
  b += 32;
  var h = c + 8, i = c + 16, j = c + 24;
  T(h, 1 - d, a + 8);
  T(i, d, a + 16);
  V(c, h, i);
  var k, h = c, i = f;
  for (k = h + 8; h < k; ) e[i++] = e[h++];
  cf(f + 8, (1 - d) * q[a + 24 >> 2] + d * q[a + 28 >> 2]);
  Yc(j, f + 8, a);
  Pd(f, j);
  b = c;
}

function df(a, f) {
  var d = b;
  b += 340;
  var c, h, i = d + 36, j, k, p, o, l = d + 72, m = d + 84, n = d + 176, r = d + 192, s = d + 208, u = d + 232, w, t, A, C = d + 332, z = d + 336, B, D, H, G, N, M, O;
  g[ef >> 2] += 1;
  g[a >> 2] = 0;
  q[a + 4 >> 2] = q[f + 128 >> 2];
  h = f + 28;
  w = f + 56;
  t = d;
  A = w + 36;
  if (t % 4 == w % 4) {
    for (; w % 4 !== 0 && w < A; ) e[t++] = e[w++];
    w >>= 2;
    t >>= 2;
    for (B = A >> 2; w < B; ) g[t++] = g[w++];
    w <<= 2;
    t <<= 2;
  }
  for (; w < A; ) e[t++] = e[w++];
  w = f + 92;
  t = i;
  A = w + 36;
  if (t % 4 == w % 4) {
    for (; w % 4 !== 0 && w < A; ) e[t++] = e[w++];
    w >>= 2;
    t >>= 2;
    for (B = A >> 2; w < B; ) g[t++] = g[w++];
    w <<= 2;
    t <<= 2;
  }
  for (; w < A; ) e[t++] = e[w++];
  ff(d);
  ff(i);
  j = q[f + 128 >> 2];
  k = .004999999888241291 > q[f + 24 >> 2] + q[h + 24 >> 2] - .014999999664723873 ? .004999999888241291 : q[f + 24 >> 2] + q[h + 24 >> 2] - .014999999664723873;
  c = k > .0012499999720603228 ? 2 : 1;
  c == 1 && X(gf, 280, hf, jf);
  o = p = 0;
  Pa[l + 4 >> 1] = 0;
  qd(m);
  qd(m + 28);
  w = f;
  t = m;
  A = w + 28;
  if (t % 4 == w % 4) {
    for (; w % 4 !== 0 && w < A; ) e[t++] = e[w++];
    w >>= 2;
    t >>= 2;
    for (B = A >> 2; w < B; ) g[t++] = g[w++];
    w <<= 2;
    t <<= 2;
  }
  for (; w < A; ) e[t++] = e[w++];
  w = f + 28;
  t = m + 28;
  A = w + 28;
  if (t % 4 == w % 4) {
    for (; w % 4 !== 0 && w < A; ) e[t++] = e[w++];
    w >>= 2;
    t >>= 2;
    for (B = A >> 2; w < B; ) g[t++] = g[w++];
    w <<= 2;
    t <<= 2;
  }
  for (; w < A; ) e[t++] = e[w++];
  e[m + 88] = 0;
  for (var R = m + 56, W = m + 72, E = s + 16, Q = s + 16; ; ) {
    bf(d, n, p);
    bf(i, r, p);
    w = n;
    t = R;
    A = w + 16;
    if (t % 4 == w % 4) {
      for (; w % 4 !== 0 && w < A; ) e[t++] = e[w++];
      w >>= 2;
      t >>= 2;
      for (B = A >> 2; w < B; ) g[t++] = g[w++];
      w <<= 2;
      t <<= 2;
    }
    for (; w < A; ) e[t++] = e[w++];
    w = r;
    t = W;
    A = w + 16;
    if (t % 4 == w % 4) {
      for (; w % 4 !== 0 && w < A; ) e[t++] = e[w++];
      w >>= 2;
      t >>= 2;
      for (B = A >> 2; w < B; ) g[t++] = g[w++];
      w <<= 2;
      t <<= 2;
    }
    for (; w < A; ) e[t++] = e[w++];
    Cd(s, l, m);
    if (q[E >> 2] <= 0) {
      c = 4;
      break;
    }
    if (q[Q >> 2] < k + .0012499999720603228) {
      c = 6;
      break;
    }
    kf(u, l, f, d, h, i, p);
    w = 0;
    t = j;
    for (A = 0; ; ) {
      B = lf(u, C, z, t);
      if (B > k + .0012499999720603228) {
        c = 9;
        break;
      }
      if (B > k - .0012499999720603228) {
        c = 11;
        break;
      }
      D = mf(u, g[C >> 2], g[z >> 2], p);
      if (D < k - .0012499999720603228) {
        c = 13;
        break;
      }
      if (D <= k + .0012499999720603228) {
        c = 15;
        break;
      }
      H = 0;
      G = p;
      for (N = t; ; ) {
        c = (H & 1) != 0 ? 18 : 19;
        c == 18 ? M = G + (k - D) * (N - G) / (B - D) : c == 19 && (M = (G + N) * .5);
        O = mf(u, g[C >> 2], g[z >> 2], M);
        if (pd(O - k) < .0012499999720603228) {
          c = 21;
          break;
        }
        c = O > k ? 23 : 24;
        c == 23 ? (G = M, D = O) : c == 24 && (N = M, B = O);
        H = O = H + 1;
        g[nf >> 2] += 1;
        if (O == 50) {
          c = 26;
          break;
        }
      }
      c == 21 && (t = M);
      g[of >> 2] = g[of >> 2] > H ? g[of >> 2] : H;
      A = B = A + 1;
      if (B == 8) {
        c = 27;
        break;
      }
    }
    c == 9 ? (g[a >> 2] = 4, q[a + 4 >> 2] = j, w = 1) : c == 11 ? p = t : c == 13 ? (g[a >> 2] = 1, q[a + 4 >> 2] = p, w = 1) : c == 15 && (g[a >> 2] = 3, q[a + 4 >> 2] = p, w = 1);
    o += 1;
    g[pf >> 2] += 1;
    if (w & 1) {
      c = 30;
      break;
    }
    if (o == 20) {
      c = 29;
      break;
    }
  }
  c == 4 ? (g[a >> 2] = 2, q[a + 4 >> 2] = 0) : c == 6 ? (g[a >> 2] = 3, q[a + 4 >> 2] = p) : c == 29 && (g[a >> 2] = 1, q[a + 4 >> 2] = p);
  g[qf >> 2] = g[qf >> 2] > o ? g[qf >> 2] : o;
  b = d;
}

df.X = 1;

function ff(a) {
  var f;
  f = 6.2831854820251465 * rf(q[a + 24 >> 2] / 6.2831854820251465);
  q[a + 24 >> 2] -= f;
  q[a + 28 >> 2] -= f;
}

function kf(a, f, d, c, h, i, j) {
  var k = b;
  b += 264;
  var p, o, l = k + 16, m = k + 32, n = k + 40, r = k + 48, s = k + 56, u = k + 64, w = k + 72, t = k + 80, A = k + 88, C = k + 96, z = k + 104, B = k + 112, D = k + 120, H = k + 128, G = k + 136, N = k + 144, M = k + 152, O = k + 160, R = k + 168, W = k + 176, E = k + 184, Q = k + 192, K = k + 200, P = k + 208, aa = k + 216, ba = k + 224, Y = k + 232, ra = k + 240, ca = k + 248, ea = k + 256;
  g[a >> 2] = d;
  g[a + 4 >> 2] = h;
  o = Ra[f + 4 >> 1];
  (0 < o & o < 3 ? 2 : 1) == 1 && X(gf, 50, sf, tf);
  var U, fa, wa;
  U = a + 8;
  fa = c + 36;
  if (U % 4 == c % 4) {
    for (; c % 4 !== 0 && c < fa; ) e[U++] = e[c++];
    c >>= 2;
    U >>= 2;
    for (wa = fa >> 2; c < wa; ) g[U++] = g[c++];
    c <<= 2;
    U <<= 2;
  }
  for (; c < fa; ) e[U++] = e[c++];
  c = i;
  U = a + 44;
  fa = c + 36;
  if (U % 4 == c % 4) {
    for (; c % 4 !== 0 && c < fa; ) e[U++] = e[c++];
    c >>= 2;
    U >>= 2;
    for (wa = fa >> 2; c < wa; ) g[U++] = g[c++];
    c <<= 2;
    U <<= 2;
  }
  for (; c < fa; ) e[U++] = e[c++];
  bf(a + 8, k, j);
  bf(a + 44, l, j);
  c = o == 1 ? 3 : 4;
  if (c == 3) {
    g[a + 80 >> 2] = 0;
    c = Jd(g[a >> 2], Qa[f + 6]);
    U = m;
    for (fa = c + 8; c < fa; ) e[U++] = e[c++];
    c = Jd(g[a + 4 >> 2], Qa[f + 9]);
    U = n;
    for (fa = c + 8; c < fa; ) e[U++] = e[c++];
    Hc(r, k, m);
    Hc(s, l, n);
    f = a + 92;
    J(u, s, r);
    c = u;
    U = f;
    for (fa = c + 8; c < fa; ) e[U++] = e[c++];
    p = a = Mc(a + 92);
  } else if (c == 4) if (r = a + 80, c = Qa[f + 6] == Qa[f + 7] ? 5 : 8, c == 5) {
    g[r >> 2] = 2;
    c = Jd(h, Qa[f + 9]);
    U = w;
    for (fa = c + 8; c < fa; ) e[U++] = e[c++];
    c = Jd(h, Qa[f + 10]);
    U = t;
    for (fa = c + 8; c < fa; ) e[U++] = e[c++];
    ea = a + 92;
    J(C, t, w);
    ed(A, C);
    c = A;
    U = ea;
    for (fa = c + 8; c < fa; ) e[U++] = e[c++];
    Mc(a + 92);
    Yc(z, l + 8, a + 92);
    ea = a + 84;
    V(D, w, t);
    T(B, .5, D);
    c = B;
    U = ea;
    for (fa = c + 8; c < fa; ) e[U++] = e[c++];
    Hc(H, l, a + 84);
    c = Jd(d, Qa[f + 6]);
    U = G;
    for (fa = c + 8; c < fa; ) e[U++] = e[c++];
    Hc(N, k, G);
    J(M, N, H);
    f = S(M, z);
    if ((f < 0 ? 6 : 7) == 6) {
      l = a + 92;
      Xc(O, a + 92);
      c = O;
      U = l;
      for (fa = c + 8; c < fa; ) e[U++] = e[c++];
      f = -f;
    }
    p = f;
  } else if (c == 8) {
    g[r >> 2] = 1;
    c = Jd(g[a >> 2], Qa[f + 6]);
    U = R;
    for (fa = c + 8; c < fa; ) e[U++] = e[c++];
    c = Jd(g[a >> 2], Qa[f + 7]);
    U = W;
    for (fa = c + 8; c < fa; ) e[U++] = e[c++];
    O = a + 92;
    J(Q, W, R);
    ed(E, Q);
    c = E;
    U = O;
    for (fa = c + 8; c < fa; ) e[U++] = e[c++];
    Mc(a + 92);
    Yc(K, k + 8, a + 92);
    O = a + 84;
    V(aa, R, W);
    T(P, .5, aa);
    c = P;
    U = O;
    for (fa = c + 8; c < fa; ) e[U++] = e[c++];
    Hc(ba, k, a + 84);
    c = Jd(g[a + 4 >> 2], Qa[f + 9]);
    U = Y;
    for (fa = c + 8; c < fa; ) e[U++] = e[c++];
    Hc(ra, l, Y);
    J(ca, ra, ba);
    f = S(ca, K);
    if ((f < 0 ? 9 : 10) == 9) {
      l = a + 92;
      Xc(ea, a + 92);
      c = ea;
      U = l;
      for (fa = c + 8; c < fa; ) e[U++] = e[c++];
      f = -f;
    }
    p = f;
  }
  b = k;
  return p;
}

kf.X = 1;

function lf(a, f, d, c) {
  var h = b;
  b += 208;
  var i, j = h + 16, k = h + 32, p = h + 40, o = h + 48, l = h + 56, m = h + 64, n = h + 72, r = h + 80, s = h + 88, u = h + 96, w = h + 104, t = h + 112, A = h + 120, C = h + 128, z = h + 136, B = h + 144, D = h + 152, H = h + 160, G = h + 168, N = h + 176, M = h + 184, O = h + 192, R = h + 200;
  bf(a + 8, h, c);
  bf(a + 44, j, c);
  c = g[a + 80 >> 2];
  c = c == 0 ? 1 : c == 1 ? 2 : c == 2 ? 3 : 4;
  if (c == 4) X(gf, 183, uf, ud), g[f >> 2] = -1, g[d >> 2] = -1, i = 0; else if (c == 1) {
    Wc(k, h + 8, a + 92);
    u = j + 8;
    Xc(o, a + 92);
    Wc(p, u, o);
    g[f >> 2] = Id(g[a >> 2], k);
    g[d >> 2] = Id(g[a + 4 >> 2], p);
    f = Jd(g[a >> 2], g[f >> 2]);
    k = l;
    for (p = f + 8; f < p; ) e[k++] = e[f++];
    f = Jd(g[a + 4 >> 2], g[d >> 2]);
    k = m;
    for (p = f + 8; f < p; ) e[k++] = e[f++];
    Hc(n, h, l);
    Hc(r, j, m);
    J(s, r, n);
    i = a = S(s, a + 92);
  } else if (c == 2) {
    Yc(u, h + 8, a + 92);
    Hc(w, h, a + 84);
    l = j + 8;
    Xc(A, u);
    Wc(t, l, A);
    g[f >> 2] = -1;
    g[d >> 2] = Id(g[a + 4 >> 2], t);
    f = Jd(g[a + 4 >> 2], g[d >> 2]);
    k = C;
    for (p = f + 8; f < p; ) e[k++] = e[f++];
    Hc(z, j, C);
    J(B, z, w);
    i = a = S(B, u);
  } else if (c == 3) {
    Yc(D, j + 8, a + 92);
    Hc(H, j, a + 84);
    j = h + 8;
    Xc(N, D);
    Wc(G, j, N);
    g[d >> 2] = -1;
    g[f >> 2] = Id(g[a >> 2], G);
    f = Jd(g[a >> 2], g[f >> 2]);
    k = M;
    for (p = f + 8; f < p; ) e[k++] = e[f++];
    Hc(O, h, M);
    J(R, O, H);
    i = a = S(R, D);
  }
  b = h;
  return i;
}

lf.X = 1;

function vf(a) {
  g[a >> 2] = wf + 8;
  g[a + 12 >> 2] = 0;
  g[a + 16 >> 2] = 0;
}

function xf(a, f, d) {
  var c;
  c = 0 <= d ? 1 : 2;
  c == 1 && (c = d < g[a + 16 >> 2] - 1 ? 3 : 2);
  c == 2 && X(yf, 89, zf, Af);
  g[f + 4 >> 2] = 1;
  q[f + 8 >> 2] = q[a + 8 >> 2];
  var h, i;
  c = g[a + 12 >> 2] + (d << 3);
  h = f + 12;
  for (i = c + 8; c < i; ) e[h++] = e[c++];
  c = g[a + 12 >> 2] + (d + 1 << 3);
  h = f + 20;
  for (i = c + 8; c < i; ) e[h++] = e[c++];
  c = d > 0 ? 4 : 5;
  if (c == 4) {
    c = g[a + 12 >> 2] + (d - 1 << 3);
    h = f + 28;
    for (i = c + 8; c < i; ) e[h++] = e[c++];
    e[f + 44] = 1;
  } else if (c == 5) {
    c = a + 20;
    h = f + 28;
    for (i = c + 8; c < i; ) e[h++] = e[c++];
    e[f + 44] = e[a + 36] & 1;
  }
  c = d < g[a + 16 >> 2] - 2 ? 7 : 8;
  if (c == 7) {
    c = g[a + 12 >> 2] + (d + 2 << 3);
    h = f + 36;
    for (i = c + 8; c < i; ) e[h++] = e[c++];
    e[f + 45] = 1;
  } else if (c == 8) {
    c = a + 28;
    h = f + 36;
    for (i = c + 8; c < i; ) e[h++] = e[c++];
    e[f + 45] = e[a + 37] & 1;
  }
}

xf.X = 1;

function Bf(a, f, d, c) {
  var h = b;
  b += 32;
  var i, j, k = h + 8, p = h + 16, o = h + 24;
  i = c < g[a + 16 >> 2] ? 2 : 1;
  i == 1 && X(yf, 148, Cf, Df);
  j = c + 1;
  i = j == g[a + 16 >> 2] ? 3 : 4;
  i == 3 && (j = 0);
  Hc(h, d, g[a + 12 >> 2] + (c << 3));
  Hc(k, d, g[a + 12 >> 2] + (j << 3));
  Qe(p, h, k);
  a = p;
  d = f;
  for (c = a + 8; a < c; ) e[d++] = e[a++];
  f += 8;
  Re(o, h, k);
  a = o;
  d = f;
  for (c = a + 8; a < c; ) e[d++] = e[a++];
  b = h;
}

Bf.X = 1;

function mf(a, f, d, c) {
  var h = b;
  b += 208;
  var i, j = h + 16, k = h + 32, p = h + 40, o = h + 48, l = h + 56, m = h + 64, n = h + 72, r = h + 80, s = h + 88, u = h + 96, w = h + 104, t = h + 112, A = h + 120, C = h + 128, z = h + 136, B = h + 144, D = h + 152, H = h + 160, G = h + 168, N = h + 176, M = h + 184, O = h + 192, R = h + 200;
  bf(a + 8, h, c);
  bf(a + 44, j, c);
  c = g[a + 80 >> 2];
  c = c == 0 ? 1 : c == 1 ? 2 : c == 2 ? 3 : 4;
  if (c == 4) X(gf, 242, Ef, ud), i = 0; else if (c == 1) {
    Wc(k, h + 8, a + 92);
    u = j + 8;
    Xc(o, a + 92);
    Wc(p, u, o);
    f = Jd(g[a >> 2], f);
    p = l;
    for (o = f + 8; f < o; ) e[p++] = e[f++];
    f = Jd(g[a + 4 >> 2], d);
    p = m;
    for (o = f + 8; f < o; ) e[p++] = e[f++];
    Hc(n, h, l);
    Hc(r, j, m);
    J(s, r, n);
    i = a = S(s, a + 92);
  } else if (c == 2) {
    Yc(u, h + 8, a + 92);
    Hc(w, h, a + 84);
    l = j + 8;
    Xc(A, u);
    Wc(t, l, A);
    f = Jd(g[a + 4 >> 2], d);
    p = C;
    for (o = f + 8; f < o; ) e[p++] = e[f++];
    Hc(z, j, C);
    J(B, z, w);
    i = a = S(B, u);
  } else if (c == 3) {
    Yc(D, j + 8, a + 92);
    Hc(H, j, a + 84);
    d = h + 8;
    Xc(N, D);
    Wc(G, d, N);
    f = Jd(g[a >> 2], f);
    p = M;
    for (o = f + 8; f < o; ) e[p++] = e[f++];
    Hc(O, h, M);
    J(R, O, H);
    i = a = S(R, D);
  }
  b = h;
  return i;
}

mf.X = 1;

function cf(a, f) {
  var d = fg(f);
  q[a >> 2] = d;
  d = gg(f);
  q[a + 4 >> 2] = d;
}

function hg(a, f) {
  var d, c;
  c = ig(f, 40);
  if (c == 0) {
    var h = 0;
    d = 2;
  } else d = 1;
  d == 1 && (Qb(c), g[c >> 2] = wf + 8, g[c + 4 >> 2] = 3, q[c + 8 >> 2] = .009999999776482582, g[c + 12 >> 2] = 0, g[c + 16 >> 2] = 0, e[c + 36] = 0, e[c + 37] = 0, h = c);
  d = h;
  c = g[a + 12 >> 2];
  var h = g[a + 16 >> 2], i;
  i = g[d + 12 >> 2] == 0 ? 1 : 2;
  i == 1 && (i = g[d + 16 >> 2] == 0 ? 3 : 2);
  i == 2 && X(yf, 48, jg, kg);
  (h >= 2 ? 5 : 4) == 4 && X(yf, 49, jg, lg);
  g[d + 16 >> 2] = h;
  h = jb(h << 3);
  g[d + 12 >> 2] = h;
  i = g[d + 12 >> 2];
  var h = g[d + 16 >> 2] << 3, j;
  j = c + h;
  if (i % 4 == c % 4 && h > 8) {
    for (; c % 4 !== 0 && c < j; ) e[i++] = e[c++];
    c >>= 2;
    i >>= 2;
    for (h = j >> 2; c < h; ) g[i++] = g[c++];
    c <<= 2;
    i <<= 2;
  }
  for (; c < j; ) e[i++] = e[c++];
  e[d + 36] = 0;
  e[d + 37] = 0;
  c = a + 20;
  h = d + 20;
  for (i = c + 8; c < i; ) e[h++] = e[c++];
  c = a + 28;
  h = d + 28;
  for (i = c + 8; c < i; ) e[h++] = e[c++];
  e[d + 36] = e[a + 36] & 1;
  e[d + 37] = e[a + 37] & 1;
  return d;
}

hg.X = 1;

function mg(a, f, d, c, h) {
  var i = b;
  b += 48;
  var j, k;
  j = h < g[a + 16 >> 2] ? 2 : 1;
  j == 1 && X(yf, 129, ng, Df);
  Yb(i);
  k = h + 1;
  j = k == g[a + 16 >> 2] ? 3 : 4;
  j == 3 && (k = 0);
  var p, h = g[a + 12 >> 2] + (h << 3);
  j = i + 12;
  for (p = h + 8; h < p; ) e[j++] = e[h++];
  h = g[a + 12 >> 2] + (k << 3);
  j = i + 20;
  for (p = h + 8; h < p; ) e[j++] = e[h++];
  a = og(i, f, d, c);
  b = i;
  return a;
}

mg.X = 1;

function pg(a, f) {
  g[a + 4 >> 2] = g[f + 4 >> 2];
  q[a + 8 >> 2] = q[f + 8 >> 2];
}

function qg(a, f, d, c) {
  var h = b;
  b += 48;
  var i, j, k = h + 8, p = h + 16, o = h + 24, l = h + 32, m = h + 40;
  Yc(k, c + 8, a + 12);
  V(h, c, k);
  J(p, d, h);
  k = S(p, p) - q[a + 8 >> 2] * q[a + 8 >> 2];
  J(o, d + 8, d);
  a = S(p, o);
  c = S(o, o);
  k = a * a - c * k;
  i = k < 0 ? 2 : 1;
  a : do if (i == 1) if (c < 1.1920928955078125e-7) i = 2; else {
    j = a;
    i = k;
    i = Oc(i);
    j = -(j + i);
    i = 0 <= j ? 4 : 6;
    do if (i == 4) if (j <= q[d + 16 >> 2] * c) {
      j /= c;
      q[f + 8 >> 2] = j;
      d = f;
      T(m, j, o);
      V(l, p, m);
      p = l;
      o = d;
      for (l = p + 8; p < l; ) e[o++] = e[p++];
      Mc(f);
      j = 1;
      i = 7;
      break a;
    } else i = 6; while (0);
    j = 0;
    i = 7;
  } while (0);
  i == 2 && (j = 0);
  b = h;
  return j;
}

qg.X = 1;

function og(a, f, d, c) {
  var h = b;
  b += 120;
  var i, j, k = h + 8, p = h + 16, o = h + 24, l = h + 32, m = h + 40, n = h + 48;
  i = h + 56;
  var r = h + 64, s = h + 72, u = h + 80, w = h + 88, t = h + 96, A = h + 104, C = h + 112, z = c + 8;
  J(k, d, c);
  Wc(h, z, k);
  k = c + 8;
  J(o, d + 8, c);
  Wc(p, k, o);
  J(l, p, h);
  c = a + 12;
  p = m;
  for (o = c + 8; c < o; ) e[p++] = e[c++];
  c = a + 20;
  p = n;
  for (o = c + 8; c < o; ) e[p++] = e[c++];
  J(i, n, m);
  kc(r, q[i + 4 >> 2], -q[i >> 2]);
  Mc(r);
  J(s, m, h);
  a = S(r, s);
  s = S(r, l);
  i = s == 0 ? 1 : 2;
  a : do if (i == 1) j = 0; else if (i == 2) {
    j = a / s;
    i = j < 0 ? 4 : 3;
    do if (i == 3) if (q[d + 16 >> 2] < j) i = 4; else if (T(w, j, l), V(u, h, w), J(t, n, m), c = S(t, t), i = c == 0 ? 6 : 7, i == 6) {
      j = 0;
      break a;
    } else if (i == 7) if (J(A, u, m), i = S(A, t) / c, i = i < 0 | 1 < i ? 8 : 9, i == 8) {
      j = 0;
      break a;
    } else if (i == 9) {
      q[f + 8 >> 2] = j;
      i = a > 0 ? 10 : 11;
      if (i == 10) {
        Xc(C, r);
        c = C;
        p = f;
        for (o = c + 8; c < o; ) e[p++] = e[c++];
      } else if (i == 11) {
        c = r;
        p = f;
        for (o = c + 8; c < o; ) e[p++] = e[c++];
      }
      j = 1;
      break a;
    } while (0);
    j = 0;
  } while (0);
  b = h;
  return j;
}

og.X = 1;

function rg(a, f, d) {
  var c = b;
  b += 64;
  var h, i = c + 8, j, k = c + 16, p = c + 24, o = c + 32, l = c + 40, m = c + 48, n = c + 56;
  Hc(c, d, a + 20);
  var r, s, u;
  r = c;
  s = i;
  for (u = r + 8; r < u; ) e[s++] = e[r++];
  j = 1;
  var w = a + 148;
  h = j < g[w >> 2] ? 1 : 3;
  a : do if (h == 1) for (var t = a + 20, A = c, C = p, z = i, B = o; ; ) {
    Hc(k, d, t + (j << 3));
    Qe(p, c, k);
    r = C;
    s = A;
    for (u = r + 8; r < u; ) e[s++] = e[r++];
    Re(o, i, k);
    r = B;
    s = z;
    for (u = r + 8; r < u; ) e[s++] = e[r++];
    j += 1;
    if (j >= g[w >> 2]) break a;
  } while (0);
  kc(l, q[a + 8 >> 2], q[a + 8 >> 2]);
  J(m, c, l);
  r = m;
  s = f;
  for (u = r + 8; r < u; ) e[s++] = e[r++];
  a = f + 8;
  V(n, i, l);
  r = n;
  s = a;
  for (u = r + 8; r < u; ) e[s++] = e[r++];
  b = c;
}

rg.X = 1;

function sg(a, f) {
  q[a >> 2] *= f;
  q[a + 4 >> 2] *= f;
}

function tg(a, f, d, c) {
  var h = b;
  b += 56;
  var i, j, k = h + 8, p = h + 16, o = h + 24, l = h + 32, m, n, r = h + 40, s, u = h + 48;
  m = c + 8;
  J(k, d, c);
  Wc(h, m, k);
  k = c + 8;
  J(o, d + 8, c);
  Wc(p, k, o);
  J(l, p, h);
  p = 0;
  o = q[d + 16 >> 2];
  k = -1;
  m = 0;
  var w = a + 148, t = a + 84, A = a + 20, C = a + 84;
  a : for (;;) {
    if (m >= g[w >> 2]) {
      i = 14;
      break;
    }
    i = t + (m << 3);
    J(r, A + (m << 3), h);
    n = S(i, r);
    s = S(C + (m << 3), l);
    i = s == 0 ? 3 : 5;
    b : do if (i == 3) {
      if (n < 0) {
        i = 4;
        break a;
      }
    } else if (i == 5) {
      if (s < 0) i = 6; else {
        var z = s;
        i = 8;
      }
      do if (i == 6) if (n < p * s) {
        p = n / s;
        k = m;
        i = 11;
        break b;
      } else z = s, i = 8; while (0);
      z > 0 ? n < o * s ? o = n / s : i = 11 : i = 11;
    } while (0);
    if (o < p) {
      i = 12;
      break;
    }
    m += 1;
  }
  if (i == 14) if (i = 0 <= p ? 15 : 16, i == 15 && (i = p <= q[d + 16 >> 2] ? 17 : 16), i == 16 && X(ug, 249, vg, wg), i = k >= 0 ? 18 : 19, i == 18) {
    q[f + 8 >> 2] = p;
    Yc(u, c + 8, a + 84 + (k << 3));
    a = u;
    for (d = a + 8; a < d; ) e[f++] = e[a++];
    j = 1;
  } else i == 19 && (j = 0); else i == 4 ? j = 0 : i == 12 && (j = 0);
  b = h;
  return j;
}

tg.X = 1;

function xg(a, f, d) {
  var c = b;
  b += 56;
  var h, i, j, k = c + 8, p, o = c + 16, l = c + 24, m, n, r = c + 32, s = c + 40, u, w, t, A = c + 48;
  h = g[a + 148 >> 2] >= 3 ? 2 : 1;
  h == 1 && X(ug, 306, yg, zg);
  ac(c, 0, 0);
  j = i = 0;
  kc(k, 0, 0);
  p = 0;
  m = a + 148;
  h = p < g[m >> 2] ? 3 : 5;
  a : do if (h == 3) for (var C = a + 20; ; ) if (Sb(k, C + (p << 3)), p += 1, p >= g[m >> 2]) break a; while (0);
  sg(k, 1 / g[a + 148 >> 2]);
  p = 0;
  C = a + 148;
  h = p < g[C >> 2] ? 6 : 11;
  a : do if (h == 6) for (var z = a + 20, B = a + 148, D = a + 20, H = o, G = o + 4, N = l, M = l + 4, O = a + 20; ; ) if (J(o, z + (p << 3), k), h = p + 1 < g[B >> 2] ? 8 : 9, h == 8 ? J(l, D + (p + 1 << 3), k) : h == 9 && J(l, O, k), m = Z(o, l), n = m * .5, i += n, n *= .3333333432674408, V(s, o, l), T(r, n, s), Sb(c, r), u = q[H >> 2], n = q[G >> 2], w = q[N >> 2], t = q[M >> 2], u = u * u + w * u + w * w, n = n * n + t * n + t * t, j += m * .0833333358168602 * (u + n), p += 1, p >= g[C >> 2]) break a; while (0);
  q[f >> 2] = d * i;
  (i > 1.1920928955078125e-7 ? 13 : 12) == 12 && X(ug, 352, yg, Ag);
  sg(c, 1 / i);
  a = f + 4;
  V(A, c, k);
  k = A;
  A = a;
  for (a = k + 8; k < a; ) e[A++] = e[k++];
  q[f + 12 >> 2] = d * j;
  q[f + 12 >> 2] += q[f >> 2] * (S(f + 4, f + 4) - S(c, c));
  b = c;
}

xg.X = 1;

function Bg(a) {
  var f, d;
  g[a + 8 >> 2] = 128;
  g[a + 4 >> 2] = 0;
  d = jb(g[a + 8 >> 2] << 3);
  g[a >> 2] = d;
  f = g[a + 8 >> 2] << 3;
  var c, h;
  d = g[a >> 2];
  f = d + f;
  h = 0;
  h < 0 && (h += 256);
  for (h = h + (h << 8) + (h << 16) + h * 16777216; d % 4 !== 0 && d < f; ) e[d++] = 0;
  d >>= 2;
  for (c = f >> 2; d < c; ) g[d++] = h;
  for (d <<= 2; d < f; ) e[d++] = 0;
  d = a + 12;
  f = d + 56;
  h = 0;
  h < 0 && (h += 256);
  for (h = h + (h << 8) + (h << 16) + h * 16777216; d % 4 !== 0 && d < f; ) e[d++] = 0;
  d >>= 2;
  for (c = f >> 2; d < c; ) g[d++] = h;
  for (d <<= 2; d < f; ) e[d++] = 0;
  f = (e[Cg] & 1) == 0 ? 1 : 10;
  if (f == 1) {
    a = 0;
    d = 1;
    for (f = 0; ; ) {
      f = f < 14 ? 5 : 4;
      f == 4 && X(Dg, 73, Eg, Fg);
      f = d <= g[Gg + (a << 2) >> 2] ? 6 : 7;
      f == 6 ? e[Hg + d] = a & 255 : f == 7 && (a += 1, e[Hg + d] = a & 255);
      d = f = d + 1;
      if (!(f <= 640)) break;
      f = a;
    }
    e[Cg] = 1;
  }
}

Bg.X = 1;

function Ig(a, f, d) {
  var c;
  if ((d == 0 ? 8 : 1) == 1) {
    if (0 < d) {
      var h = d;
      c = 3;
    } else c = 2;
    c == 2 && (X(Dg, 164, Jg, Kg), h = d);
    c = h > 640 ? 4 : 5;
    c != 4 && c == 5 && (d = Qa[Hg + d], (0 <= d & d < 14 ? 7 : 6) == 6 && X(Dg, 173, Jg, Lg), g[f >> 2] = g[a + 12 + (d << 2) >> 2], g[a + 12 + (d << 2) >> 2] = f);
  }
}

Ig.X = 1;

function Mg(a, f) {
  return q[a >> 2] * q[f >> 2] + q[a + 4 >> 2] * q[f + 4 >> 2] + q[a + 8 >> 2] * q[f + 8 >> 2];
}

function Ng(a, f, d) {
  Og(a, q[f + 4 >> 2] * q[d + 8 >> 2] - q[f + 8 >> 2] * q[d + 4 >> 2], q[f + 8 >> 2] * q[d >> 2] - q[f >> 2] * q[d + 8 >> 2], q[f >> 2] * q[d + 4 >> 2] - q[f + 4 >> 2] * q[d >> 2]);
}

Ng.X = 1;

function Pg(a, f, d) {
  var c, h, i, j;
  c = q[f >> 2];
  h = q[f + 12 >> 2];
  i = q[f + 4 >> 2];
  f = q[f + 16 >> 2];
  j = c * f - h * i;
  if ((j != 0 ? 1 : 2) == 1) j = 1 / j;
  q[a >> 2] = j * (f * q[d >> 2] - h * q[d + 4 >> 2]);
  q[a + 4 >> 2] = j * (c * q[d + 4 >> 2] - i * q[d >> 2]);
}

Pg.X = 1;

function Qg(a, f) {
  var d, c, h, i, j;
  d = q[a >> 2];
  c = q[a + 12 >> 2];
  h = q[a + 4 >> 2];
  i = q[a + 16 >> 2];
  j = d * i - c * h;
  if ((j != 0 ? 1 : 2) == 1) j = 1 / j;
  q[f >> 2] = j * i;
  q[f + 12 >> 2] = -j * c;
  q[f + 8 >> 2] = 0;
  q[f + 4 >> 2] = -j * h;
  q[f + 16 >> 2] = j * d;
  q[f + 20 >> 2] = 0;
  q[f + 24 >> 2] = 0;
  q[f + 28 >> 2] = 0;
  q[f + 32 >> 2] = 0;
}

Qg.X = 1;

function Og(a, f, d, c) {
  q[a >> 2] = f;
  q[a + 4 >> 2] = d;
  q[a + 8 >> 2] = c;
}

function ig(a, f) {
  var d, c, h, i, j, k, p, o, l;
  d = f == 0 ? 1 : 2;
  if (d == 1) c = 0; else if (d == 2) if (0 < f ? (h = f, d = 4) : d = 3, d == 3 && (X(Dg, 104, Rg, Kg), h = f), d = h > 640 ? 5 : 6, d == 5) c = jb(f); else if (d == 6) if (h = Qa[Hg + f], (0 <= h & h < 14 ? 8 : 7) == 7 && X(Dg, 112, Rg, Lg), d = g[a + 12 + (h << 2) >> 2] != 0 ? 9 : 10, d == 9) i = g[a + 12 + (h << 2) >> 2], g[a + 12 + (h << 2) >> 2] = g[i >> 2], c = i; else if (d == 10) {
    d = g[a + 4 >> 2] == g[a + 8 >> 2] ? 11 : 12;
    if (d == 11) {
      c = g[a >> 2];
      g[a + 8 >> 2] += 128;
      d = jb(g[a + 8 >> 2] << 3);
      g[a >> 2] = d;
      j = g[a >> 2];
      d = g[a + 4 >> 2] << 3;
      k = c + d;
      if (j % 4 == c % 4 && d > 8) {
        for (; c % 4 !== 0 && c < k; ) e[j++] = e[c++];
        c >>= 2;
        j >>= 2;
        for (d = k >> 2; c < d; ) g[j++] = g[c++];
        c <<= 2;
        j <<= 2;
      }
      for (; c < k; ) e[j++] = e[c++];
      j = g[a >> 2] + (g[a + 4 >> 2] << 3);
      k = j + 1024;
      c = 0;
      c < 0 && (c += 256);
      for (c = c + (c << 8) + (c << 16) + c * 16777216; j % 4 !== 0 && j < k; ) e[j++] = 0;
      j >>= 2;
      for (d = k >> 2; j < d; ) g[j++] = c;
      for (j <<= 2; j < k; ) e[j++] = 0;
    }
    c = g[a >> 2] + (g[a + 4 >> 2] << 3);
    d = jb(16384);
    g[c + 4 >> 2] = d;
    j = g[Gg + (h << 2) >> 2];
    g[c >> 2] = j;
    k = 16384 / j | 0;
    (j * k <= 16384 ? 14 : 13) == 13 && X(Dg, 140, Rg, Sg);
    p = 0;
    d = g[c + 4 >> 2];
    if (p < k - 1) o = d, l = j, d = 15; else {
      i = d;
      var m = j;
      d = 16;
    }
    a : do if (d == 15) for (;;) if (o += p * l, l = g[c + 4 >> 2] + (p + 1) * j, g[o >> 2] = l, p += 1, p < k - 1) o = g[c + 4 >> 2], l = j; else {
      i = g[c + 4 >> 2];
      m = j;
      break a;
    } while (0);
    g[i + (k - 1) * m >> 2] = 0;
    g[a + 12 + (h << 2) >> 2] = g[g[c + 4 >> 2] >> 2];
    g[a + 4 >> 2] += 1;
    c = g[c + 4 >> 2];
  }
  return c;
}

ig.X = 1;

function Tg(a, f, d) {
  var c = b;
  b += 48;
  var h, i = c + 12, j = c + 24, k = c + 36;
  Ng(c, f + 12, f + 24);
  h = Mg(f, c);
  if ((h != 0 ? 1 : 2) == 1) h = 1 / h;
  var p = h;
  Ng(i, f + 12, f + 24);
  q[a >> 2] = p * Mg(d, i);
  i = h;
  Ng(j, d, f + 24);
  q[a + 4 >> 2] = i * Mg(f, j);
  Ng(k, f + 12, d);
  q[a + 8 >> 2] = h * Mg(f, k);
  b = c;
}

Tg.X = 1;

function Ug(a, f) {
  var d = b;
  b += 12;
  var c, h, i, j, k, p, o;
  Ng(d, a + 12, a + 24);
  c = Mg(a, d);
  if ((c != 0 ? 1 : 2) == 1) c = 1 / c;
  h = q[a >> 2];
  i = q[a + 12 >> 2];
  j = q[a + 24 >> 2];
  k = q[a + 16 >> 2];
  p = q[a + 28 >> 2];
  o = q[a + 32 >> 2];
  q[f >> 2] = c * (k * o - p * p);
  q[f + 4 >> 2] = c * (j * p - i * o);
  q[f + 8 >> 2] = c * (i * p - j * k);
  q[f + 12 >> 2] = q[f + 4 >> 2];
  q[f + 16 >> 2] = c * (h * o - j * j);
  q[f + 20 >> 2] = c * (j * i - h * p);
  q[f + 24 >> 2] = q[f + 8 >> 2];
  q[f + 28 >> 2] = q[f + 20 >> 2];
  q[f + 32 >> 2] = c * (h * k - i * i);
  b = d;
}

Ug.X = 1;

function Vg(a) {
  var f, d;
  f = a != a ? 1 : 2;
  if (f == 1) d = 0; else if (f == 2) {
    if (-Infinity < a) f = 3; else {
      var c = 0;
      f = 4;
    }
    f == 3 && (c = a < Infinity);
    d = c;
  }
  return d;
}

function Wg(a) {
  g[a + 102400 >> 2] = 0;
  g[a + 102404 >> 2] = 0;
  g[a + 102408 >> 2] = 0;
  g[a + 102796 >> 2] = 0;
}

function Xg(a) {
  var f;
  f = g[a + 102400 >> 2] == 0 ? 2 : 1;
  f == 1 && X(Yg, 32, Zg, $g);
  f = g[a + 102796 >> 2] == 0 ? 4 : 3;
  f == 3 && X(Yg, 33, Zg, ah);
}

function bh(a, f) {
  var d, c;
  d = g[a + 102796 >> 2] > 0 ? 2 : 1;
  d == 1 && X(Yg, 63, ch, dh);
  c = a + 102412 + g[a + 102796 >> 2] * 12 - 12;
  d = f == g[c >> 2] ? 4 : 3;
  d == 3 && X(Yg, 65, ch, eh);
  d = e[c + 8] & 1 ? 5 : 6;
  d != 5 && d == 6 && (g[a + 102400 >> 2] -= g[c + 4 >> 2]);
  g[a + 102404 >> 2] -= g[c + 4 >> 2];
  g[a + 102796 >> 2] -= 1;
}

bh.X = 1;

function fh(a) {
  return (g[a + 102868 >> 2] & 2) == 2;
}

function $(a) {
  var f = b;
  b += 4;
  g[f >> 2] = arguments[$.length];
  gh(a, g[f >> 2]);
  b = f;
}

function hh(a, f) {
  var d, c;
  d = g[a + 102796 >> 2] < 32 ? 2 : 1;
  d == 1 && X(Yg, 38, ih, jh);
  c = a + 102412 + g[a + 102796 >> 2] * 12;
  g[c + 4 >> 2] = f;
  d = f + g[a + 102400 >> 2] > 102400 ? 3 : 4;
  d == 3 ? (d = jb(f), g[c >> 2] = d, e[c + 8] = 1) : d == 4 && (g[c >> 2] = a + g[a + 102400 >> 2], e[c + 8] = 0, g[a + 102400 >> 2] += f);
  g[a + 102404 >> 2] += f;
  g[a + 102408 >> 2] = g[a + 102408 >> 2] > g[a + 102404 >> 2] ? g[a + 102408 >> 2] : g[a + 102404 >> 2];
  g[a + 102796 >> 2] += 1;
  return g[c >> 2];
}

hh.X = 1;

function kh(a) {
  var f = b;
  b += 8;
  lh(f);
  g[a >> 2] = g[f >> 2];
  g[a + 4 >> 2] = Math.floor(g[f + 4 >> 2] * .0010000000474974513);
  b = f;
}

function mh(a) {
  var f = b;
  b += 8;
  lh(f);
  a = (g[f >> 2] - g[a >> 2]) * 1e3 + g[f + 4 >> 2] * .0010000000474974513 - Wa[a + 4 >> 2];
  b = f;
  return a;
}

function nh(a, f, d) {
  var c;
  c = oh(f + 4) ? 2 : 1;
  c == 1 && X(ph, 27, qh, rh);
  c = oh(f + 16) ? 4 : 3;
  c == 3 && X(ph, 28, qh, sh);
  c = Vg(q[f + 12 >> 2]) ? 6 : 5;
  c == 5 && X(ph, 29, qh, th);
  c = Vg(q[f + 24 >> 2]) ? 8 : 7;
  c == 7 && X(ph, 30, qh, uh);
  c = Vg(q[f + 32 >> 2]) ? 9 : 10;
  c == 9 && (c = q[f + 32 >> 2] >= 0 ? 11 : 10);
  c == 10 && X(ph, 31, qh, vh);
  c = Vg(q[f + 28 >> 2]) ? 12 : 13;
  c == 12 && (c = q[f + 28 >> 2] >= 0 ? 14 : 13);
  c == 13 && X(ph, 32, qh, wh);
  Pa[a + 4 >> 1] = 0;
  c = e[f + 39] & 1 ? 15 : 16;
  c == 15 && (Pa[a + 4 >> 1] = (Ra[a + 4 >> 1] | 8) & 65535);
  c = e[f + 38] & 1 ? 17 : 18;
  c == 17 && (Pa[a + 4 >> 1] = (Ra[a + 4 >> 1] | 16) & 65535);
  c = e[f + 36] & 1 ? 19 : 20;
  c == 19 && (Pa[a + 4 >> 1] = (Ra[a + 4 >> 1] | 4) & 65535);
  c = e[f + 37] & 1 ? 21 : 22;
  c == 21 && (Pa[a + 4 >> 1] = (Ra[a + 4 >> 1] | 2) & 65535);
  c = e[f + 40] & 1 ? 23 : 24;
  c == 23 && (Pa[a + 4 >> 1] = (Ra[a + 4 >> 1] | 32) & 65535);
  g[a + 88 >> 2] = d;
  var h, d = f + 4;
  c = a + 12;
  for (h = d + 8; d < h; ) e[c++] = e[d++];
  cf(a + 20, q[f + 12 >> 2]);
  Xb(a + 28);
  d = a + 12;
  c = a + 36;
  for (h = d + 8; d < h; ) e[c++] = e[d++];
  d = a + 12;
  c = a + 44;
  for (h = d + 8; d < h; ) e[c++] = e[d++];
  q[a + 52 >> 2] = q[f + 12 >> 2];
  q[a + 56 >> 2] = q[f + 12 >> 2];
  q[a + 60 >> 2] = 0;
  g[a + 108 >> 2] = 0;
  g[a + 112 >> 2] = 0;
  g[a + 92 >> 2] = 0;
  g[a + 96 >> 2] = 0;
  d = f + 16;
  c = a + 64;
  for (h = d + 8; d < h; ) e[c++] = e[d++];
  q[a + 72 >> 2] = q[f + 24 >> 2];
  q[a + 132 >> 2] = q[f + 28 >> 2];
  q[a + 136 >> 2] = q[f + 32 >> 2];
  q[a + 140 >> 2] = q[f + 48 >> 2];
  Xb(a + 76);
  q[a + 84 >> 2] = 0;
  q[a + 144 >> 2] = 0;
  g[a >> 2] = g[f >> 2];
  c = g[a >> 2] == 2 ? 25 : 26;
  c == 25 ? (q[a + 116 >> 2] = 1, q[a + 120 >> 2] = 1) : c == 26 && (q[a + 116 >> 2] = 0, q[a + 120 >> 2] = 0);
  q[a + 124 >> 2] = 0;
  q[a + 128 >> 2] = 0;
  g[a + 148 >> 2] = g[f + 44 >> 2];
  g[a + 100 >> 2] = 0;
  g[a + 104 >> 2] = 0;
}

nh.X = 1;

function oh(a) {
  var f;
  if (Vg(q[a >> 2])) f = 1; else {
    var d = 0;
    f = 2;
  }
  f == 1 && (d = Vg(q[a + 4 >> 2]));
  return d;
}

function xh(a) {
  var f = b;
  b += 64;
  var d, c, h = f + 8, i = f + 24, j = f + 32, k = f + 40, p = f + 48, o = f + 56;
  q[a + 116 >> 2] = 0;
  q[a + 120 >> 2] = 0;
  q[a + 124 >> 2] = 0;
  q[a + 128 >> 2] = 0;
  Xb(a + 28);
  d = g[a >> 2] == 0 ? 2 : 1;
  do if (d == 1) if (g[a >> 2] == 1) d = 2; else {
    d = g[a >> 2] == 2 ? 5 : 4;
    d == 4 && X(ph, 284, yh, zh);
    c = f;
    var l, m;
    d = zd;
    l = c;
    for (m = d + 8; d < m; ) e[l++] = e[d++];
    c = g[a + 100 >> 2];
    d = g[a + 100 >> 2] != 0 ? 6 : 10;
    a : do if (d == 6) {
      var n = h;
      l = a + 116;
      m = h;
      for (var r = h + 4, s = h + 12, u = a + 124; ; ) {
        d = q[c >> 2] == 0 ? 9 : 8;
        if (d == 8) {
          var w = g[c + 12 >> 2];
          nb[g[g[w >> 2] + 28 >> 2]](w, h, q[c >> 2]);
          q[l >> 2] += q[n >> 2];
          T(i, q[m >> 2], r);
          Sb(f, i);
          q[u >> 2] += q[s >> 2];
        }
        c = w = g[c + 4 >> 2];
        if (w == 0) break a;
      }
    } while (0);
    c = a + 116;
    d = q[a + 116 >> 2] > 0 ? 11 : 12;
    d == 11 ? (q[a + 120 >> 2] = 1 / q[c >> 2], sg(f, q[a + 120 >> 2])) : d == 12 && (q[c >> 2] = 1, q[a + 120 >> 2] = 1);
    d = q[a + 124 >> 2] > 0 ? 14 : 18;
    d == 14 && ((Ra[a + 4 >> 1] & 16) != 0 ? d = 18 : (q[a + 124 >> 2] -= q[a + 116 >> 2] * S(f, f), d = q[a + 124 >> 2] > 0 ? 17 : 16, d == 16 && X(ph, 319, yh, Ah), q[a + 128 >> 2] = 1 / q[a + 124 >> 2], d = 19));
    d == 18 && (q[a + 124 >> 2] = 0, q[a + 128 >> 2] = 0);
    c = j;
    d = a + 44;
    l = c;
    for (m = d + 8; d < m; ) e[l++] = e[d++];
    d = f;
    l = a + 28;
    for (m = d + 8; d < m; ) e[l++] = e[d++];
    n = a + 36;
    l = a + 44;
    Hc(k, a + 12, a + 28);
    d = c = k;
    for (m = d + 8; d < m; ) e[l++] = e[d++];
    d = n;
    n = jb(8);
    Bh(n, c);
    Bh(d, n);
    d = a + 64;
    c = q[a + 72 >> 2];
    J(o, a + 44, j);
    Hd(p, c, o);
    Sb(d, p);
    d = 20;
  } while (0);
  if (d == 2) {
    d = a + 12;
    l = a + 36;
    for (m = d + 8; d < m; ) e[l++] = e[d++];
    d = a + 12;
    l = a + 44;
    for (m = d + 8; d < m; ) e[l++] = e[d++];
    q[a + 52 >> 2] = q[a + 56 >> 2];
  }
  b = f;
}

xh.X = 1;

function Ch(a) {
  var f = b;
  b += 32;
  var d;
  d = f + 16;
  var c = f + 24, h;
  cf(f + 8, q[a + 52 >> 2]);
  h = a + 36;
  Yc(c, f + 8, a + 28);
  J(d, h, c);
  c = f;
  for (h = d + 8; d < h; ) e[c++] = e[d++];
  c = g[a + 88 >> 2] + 102872;
  h = g[a + 100 >> 2];
  d = g[a + 100 >> 2] != 0 ? 1 : 3;
  a : do if (d == 1) for (var i = a + 12; ; ) {
    Dh(h, c, f, i);
    var j = g[h + 4 >> 2];
    h = j;
    if (j == 0) break a;
  } while (0);
  b = f;
}

function mc(a, f) {
  var d, c = a + 4, h = Ra[c >> 1];
  d = f & 1 ? 1 : 3;
  d == 1 ? (h & 2) == 0 && (Pa[a + 4 >> 1] = (Ra[a + 4 >> 1] | 2) & 65535, q[a + 144 >> 2] = 0) : d == 3 && (Pa[c >> 1] = h & 65533, q[a + 144 >> 2] = 0, Xb(a + 64), q[a + 72 >> 2] = 0, Xb(a + 76), q[a + 84 >> 2] = 0);
}

function Eh(a) {
  return g[a + 48 >> 2];
}

function Fh(a) {
  return g[a + 52 >> 2];
}

function Gh(a, f) {
  var d, c, h;
  d = g[a >> 2] != 2 ? 1 : 3;
  d == 1 && (g[f >> 2] == 2 ? d = 3 : (c = 0, d = 10));
  if (d == 3) {
    h = g[a + 108 >> 2];
    var i = g[a + 108 >> 2];
    a : for (;;) {
      if (i == 0) {
        d = 9;
        break;
      }
      d = g[h >> 2] == f ? 6 : 8;
      if (d == 6 && (e[g[h + 4 >> 2] + 61] & 1) == 0) {
        d = 7;
        break a;
      }
      h = i = Wa[h + 12 >> 2];
    }
    d == 9 ? c = 1 : d == 7 && (c = 0);
  }
  return c;
}

Gh.X = 1;

function Hh(a, f) {
  var d, c, h, i;
  d = fh(g[a + 88 >> 2]) == 0 ? 2 : 1;
  d == 1 && X(ph, 153, Ih, Jh);
  d = fh(g[a + 88 >> 2]) == 1 ? 3 : 4;
  d == 3 ? c = 0 : d == 4 && (c = g[a + 88 >> 2], h = ig(c, 44), h == 0 ? (i = 0, d = 6) : d = 5, d == 5 && (Kh(h), i = h), Lh(i, c, a, f), d = (Ra[a + 4 >> 1] & 32) != 0 ? 7 : 8, d == 7 && (d = g[a + 88 >> 2] + 102872, Mh(i, d, a + 12)), g[i + 4 >> 2] = g[a + 100 >> 2], g[a + 100 >> 2] = i, g[a + 104 >> 2] += 1, g[i + 8 >> 2] = a, d = q[i >> 2] > 0 ? 9 : 10, d == 9 && xh(a), g[g[a + 88 >> 2] + 102868 >> 2] |= 1, c = i);
  return c;
}

Hh.X = 1;

function oc(a, f, d) {
  var c = b;
  b += 28;
  Nh(c + 22);
  g[c >> 2] = 0;
  g[c + 4 >> 2] = 0;
  q[c + 8 >> 2] = .20000000298023224;
  q[c + 12 >> 2] = 0;
  q[c + 16 >> 2] = 0;
  e[c + 20] = 0;
  g[c >> 2] = f;
  q[c + 16 >> 2] = d;
  Hh(a, c);
  b = c;
}

function Nh(a) {
  Pa[a >> 1] = 1;
  Pa[a + 2 >> 1] = -1;
  Pa[a + 4 >> 1] = 0;
}

function Oh(a) {
  Bc(a);
  g[a + 60 >> 2] = 0;
  g[a + 64 >> 2] = 0;
  g[a + 68 >> 2] = Ph;
  g[a + 72 >> 2] = Qh;
  g[a + 76 >> 2] = 0;
}

function Rh(a) {
  return g[a + 8 >> 2];
}

function Sh(a) {
  return (g[a + 4 >> 2] & 2) == 2;
}

function Th(a) {
  return (Ra[a + 4 >> 1] & 2) == 2;
}

function Uh(a, f) {
  var d, c, h;
  c = Eh(f);
  h = Fh(f);
  c = Rh(c);
  h = Rh(h);
  d = g[a + 72 >> 2] != 0 ? 1 : 3;
  d == 1 && Sh(f) && (d = g[a + 72 >> 2], nb[g[g[d >> 2] + 12 >> 2]](d, f));
  d = g[f + 8 >> 2] != 0 ? 4 : 5;
  d == 4 && (g[g[f + 8 >> 2] + 12 >> 2] = g[f + 12 >> 2]);
  d = g[f + 12 >> 2] != 0 ? 6 : 7;
  d == 6 && (g[g[f + 12 >> 2] + 8 >> 2] = g[f + 8 >> 2]);
  d = f == g[a + 60 >> 2] ? 8 : 9;
  d == 8 && (g[a + 60 >> 2] = g[f + 12 >> 2]);
  d = g[f + 24 >> 2] != 0 ? 10 : 11;
  d == 10 && (g[g[f + 24 >> 2] + 12 >> 2] = g[f + 28 >> 2]);
  d = g[f + 28 >> 2] != 0 ? 12 : 13;
  d == 12 && (g[g[f + 28 >> 2] + 8 >> 2] = g[f + 24 >> 2]);
  d = f + 16 == g[c + 112 >> 2] ? 14 : 15;
  d == 14 && (g[c + 112 >> 2] = g[f + 28 >> 2]);
  d = g[f + 40 >> 2] != 0 ? 16 : 17;
  d == 16 && (g[g[f + 40 >> 2] + 12 >> 2] = g[f + 44 >> 2]);
  d = g[f + 44 >> 2] != 0 ? 18 : 19;
  d == 18 && (g[g[f + 44 >> 2] + 8 >> 2] = g[f + 40 >> 2]);
  d = f + 32 == g[h + 112 >> 2] ? 20 : 21;
  d == 20 && (g[h + 112 >> 2] = g[f + 44 >> 2]);
  Vh(f, g[a + 76 >> 2]);
  g[a + 64 >> 2] -= 1;
}

Uh.X = 1;

function Wh(a) {
  var f, d, c, h, i, j, k, p, o, l;
  d = g[a + 60 >> 2];
  f = g[a + 60 >> 2] != 0 ? 1 : 21;
  a : do if (f == 1) for (var m = a + 68, n = a + 68, r = a, s = a + 72; ; ) {
    c = Eh(d);
    h = Fh(d);
    i = g[d + 56 >> 2];
    j = g[d + 60 >> 2];
    k = Rh(c);
    p = Rh(h);
    f = (g[d + 4 >> 2] & 8) != 0 ? 4 : 10;
    b : do if (f == 4) if (f = Gh(p, k) == 0 ? 5 : 6, f == 5) {
      f = d;
      d = g[f + 12 >> 2];
      Uh(a, f);
      f = 2;
      break b;
    } else if (f == 6) {
      f = g[m >> 2] != 0 ? 7 : 9;
      do if (f == 7) if (f = g[n >> 2], nb[g[g[f >> 2] + 8 >> 2]](f, c, h) != 0) f = 9; else {
        f = d;
        d = g[f + 12 >> 2];
        Uh(a, f);
        f = 2;
        break b;
      } while (0);
      g[d + 4 >> 2] &= -9;
      f = 10;
      break b;
    } while (0);
    b : do if (f == 10) {
      if (Th(k)) f = 11; else {
        var u = 0;
        f = 12;
      }
      f == 11 && (u = g[k >> 2] != 0);
      o = u;
      if (Th(p)) f = 13; else {
        var w = 0;
        f = 14;
      }
      f == 13 && (w = g[p >> 2] != 0);
      l = w;
      f = (o & 1) == 0 ? 15 : 18;
      do if (f == 15) if ((l & 1) != 0) f = 18; else {
        var t = g[d + 12 >> 2];
        d = t;
        f = 17;
        break b;
      } while (0);
      f = g[g[c + 24 >> 2] + i * 28 + 24 >> 2];
      l = g[g[h + 24 >> 2] + j * 28 + 24 >> 2];
      o = r;
      var A = l;
      l = ga;
      l = Xh(o, f);
      f = Xh(o, A);
      f = Yh(l, f);
      o = d;
      f = (f & 1) == 0 ? 19 : 20;
      if (f == 19) {
        c = o;
        d = g[c + 12 >> 2];
        Uh(a, c);
        f = 2;
        break b;
      } else if (f == 20) {
        Zh(o, g[s >> 2]);
        d = t = g[d + 12 >> 2];
        f = 17;
        break b;
      }
    } while (0);
    f == 2 && (t = d);
    if (t == 0) break a;
  } while (0);
}

Wh.X = 1;

function $h(a, f) {
  var d = b;
  b += 4;
  var c, h, i, j, k, p;
  h = g[a + 52 >> 2] = 0;
  j = a + 40;
  c = h < g[j >> 2] ? 1 : 5;
  a : do if (c == 1) for (var o = a + 32, l = a + 56, m = a, n = a + 56, r = a; ; ) if (c = g[g[o >> 2] + (h << 2) >> 2], g[l >> 2] = c, c = c == -1 ? 4 : 3, c == 3 && (i = Xh(m, g[n >> 2]), ai(r, a, i)), h += 1, h >= g[j >> 2]) break a; while (0);
  g[a + 40 >> 2] = 0;
  h = g[a + 44 >> 2] + g[a + 52 >> 2] * 12;
  c = g[a + 44 >> 2];
  g[d >> 2] = 2;
  bi(c, h, d);
  h = 0;
  o = a + 52;
  c = h < g[o >> 2] ? 6 : 13;
  a : do if (c == 6) {
    l = a + 44;
    n = m = a;
    r = a + 44;
    for (i = a + 52; ; ) {
      j = g[l >> 2] + h * 12;
      k = ci(m, g[j >> 2]);
      p = ci(n, g[j + 4 >> 2]);
      di(f, k, p);
      for (h += 1; ; ) {
        if (h >= g[i >> 2]) {
          c = 7;
          break;
        }
        k = g[r >> 2] + h * 12;
        if (g[k >> 2] != g[j >> 2]) {
          c = 7;
          break;
        }
        if (g[k + 4 >> 2] != g[j + 4 >> 2]) {
          c = 7;
          break;
        }
        h += 1;
      }
      if (h >= g[o >> 2]) break a;
    }
  } while (0);
  b = d;
}

$h.X = 1;

function Xh(a, f) {
  var d;
  d = 0 <= f ? 1 : 2;
  d == 1 && (d = f < g[a + 12 >> 2] ? 3 : 2);
  d == 2 && X(ei, 159, fi, Oe);
  return g[a + 4 >> 2] + f * 36;
}

function ci(a, f) {
  var d;
  d = 0 <= f ? 1 : 2;
  d == 1 && (d = f < g[a + 12 >> 2] ? 3 : 2);
  d == 2 && X(ei, 153, gi, Oe);
  return g[g[a + 4 >> 2] + f * 36 + 16 >> 2];
}

function di(a, f, d) {
  var c, h, i, j, k, p, o, l, m, n;
  h = g[f + 16 >> 2];
  i = g[d + 16 >> 2];
  f = g[f + 20 >> 2];
  d = g[d + 20 >> 2];
  j = Rh(h);
  k = Rh(i);
  c = j == k ? 24 : 1;
  a : do if (c == 1) {
    for (p = c = g[k + 112 >> 2]; ; ) {
      if (c == 0) break;
      c = g[p >> 2] == j ? 4 : 12;
      do if (c == 4) {
        o = Eh(g[p + 4 >> 2]);
        l = Fh(g[p + 4 >> 2]);
        m = g[g[p + 4 >> 2] + 56 >> 2];
        n = g[g[p + 4 >> 2] + 60 >> 2];
        c = o == h ? 5 : 8;
        do if (c == 5) if (l != i) c = 8; else if (m != f) c = 8; else if (n == d) break a; while (0);
        if (o != i) c = 12; else if (l != h) c = 12; else if (m != d) c = 12; else if (n == f) break a;
      } while (0);
      p = c = Wa[p + 12 >> 2];
    }
    if (Gh(k, j) == 0) c = 24; else {
      c = g[a + 68 >> 2] != 0 ? 15 : 16;
      if (c == 15 && (p = g[a + 68 >> 2], nb[g[g[p >> 2] + 8 >> 2]](p, h, i) == 0)) break a;
      p = c = hi(h, f, i, d, g[a + 76 >> 2]);
      c == 0 ? c = 24 : (h = Eh(p), i = Fh(p), f = g[p + 56 >> 2], d = g[p + 60 >> 2], j = Rh(h), k = Rh(i), g[p + 8 >> 2] = 0, g[p + 12 >> 2] = g[a + 60 >> 2], c = g[a + 60 >> 2] != 0 ? 18 : 19, c == 18 && (g[g[a + 60 >> 2] + 8 >> 2] = p), g[a + 60 >> 2] = p, g[p + 20 >> 2] = p, g[p + 16 >> 2] = k, g[p + 24 >> 2] = 0, g[p + 28 >> 2] = g[j + 112 >> 2], c = g[j + 112 >> 2] != 0 ? 20 : 21, c == 20 && (g[g[j + 112 >> 2] + 8 >> 2] = p + 16), g[j + 112 >> 2] = p + 16, g[p + 36 >> 2] = p, g[p + 32 >> 2] = j, g[p + 40 >> 2] = 0, g[p + 44 >> 2] = g[k + 112 >> 2], c = g[k + 112 >> 2] != 0 ? 22 : 23, c == 22 && (g[g[k + 112 >> 2] + 8 >> 2] = p + 32), g[k + 112 >> 2] = p + 32, mc(j, 1), mc(k, 1), g[a + 64 >> 2] += 1);
    }
  } while (0);
}

di.X = 1;

function ai(a, f, d) {
  var c = b;
  b += 1036;
  var h, i, j;
  g[c >> 2] = c + 4;
  g[c + 1028 >> 2] = 0;
  g[c + 1032 >> 2] = 256;
  ii(c, a);
  a += 4;
  a : for (;;) {
    if (g[c + 1028 >> 2] <= 0) break;
    h = c;
    (g[h + 1028 >> 2] > 0 ? 2 : 1) == 1 && X(ji, 67, ki, li);
    g[h + 1028 >> 2] -= 1;
    i = g[g[h >> 2] + (g[h + 1028 >> 2] << 2) >> 2];
    if (i != -1 && (j = g[a >> 2] + i * 36, Yh(j, d))) if (h = De(j) ? 7 : 9, h == 7) {
      if (h = Ec(f, i), (h & 1) == 0) break a;
    } else h == 9 && (ii(c, j + 24), ii(c, j + 28));
  }
  if ((g[c >> 2] != c + 4 ? 1 : 2) == 1) g[c >> 2] = 0;
  b = c;
}

ai.X = 1;

function bi(a, f, d) {
  var c = b;
  b += 72;
  var h, i, j, k, p, o, l = c + 12, m = c + 24, n = c + 36, r = c + 48, s = c + 60, u, w, t;
  a : for (;;) {
    u = k = (f - a) / 12 | 0;
    if (k == 0) {
      h = 49;
      break;
    } else if (k == 1) {
      h = 49;
      break;
    } else if (k == 2) {
      h = 2;
      break;
    } else if (k == 3) {
      h = 4;
      break;
    } else if (k == 4) {
      h = 5;
      break;
    } else if (k == 5) {
      h = 6;
      break;
    }
    var A = a;
    if (u <= 30) {
      h = 8;
      break;
    }
    i = A;
    k = f;
    k -= 12;
    t = u / 2 | 0;
    i += t * 12;
    h = u >= 1e3 ? 10 : 11;
    h == 10 ? (t = t / 2 | 0, w = mi(a, a + t * 12, i, i + t * 12, k, d)) : h == 11 && (w = ni(a, i, k, d));
    u = a;
    h = nb[g[d >> 2]](u, i) ? 28 : 13;
    if (h == 13) {
      for (;;) {
        k = t = k - 12;
        if (u == t) {
          h = 14;
          break;
        }
        if (nb[g[d >> 2]](k, i)) {
          h = 27;
          break;
        }
      }
      if (h == 14) {
        u += 12;
        k = f;
        i = g[d >> 2];
        k = h = k - 12;
        h = nb[i](a, h) ? 19 : 15;
        if (h == 15) {
          for (;;) {
            if (u == k) {
              h = 49;
              break a;
            }
            i = nb[g[d >> 2]](a, u);
            var C = u;
            if (i) break;
            u = C + 12;
          }
          o = C;
          i = k;
          h = o;
          var z, B;
          t = r;
          z = h + 12;
          if (t % 4 == h % 4) {
            for (; h % 4 !== 0 && h < z; ) e[t++] = e[h++];
            h >>= 2;
            t >>= 2;
            for (B = z >> 2; h < B; ) g[t++] = g[h++];
            h <<= 2;
            t <<= 2;
          }
          for (; h < z; ) e[t++] = e[h++];
          h = i;
          t = o;
          z = h + 12;
          if (t % 4 == h % 4) {
            for (; h % 4 !== 0 && h < z; ) e[t++] = e[h++];
            h >>= 2;
            t >>= 2;
            for (B = z >> 2; h < B; ) g[t++] = g[h++];
            h <<= 2;
            t <<= 2;
          }
          for (; h < z; ) e[t++] = e[h++];
          h = r;
          t = i;
          z = h + 12;
          if (t % 4 == h % 4) {
            for (; h % 4 !== 0 && h < z; ) e[t++] = e[h++];
            h >>= 2;
            t >>= 2;
            for (B = z >> 2; h < B; ) g[t++] = g[h++];
            h <<= 2;
            t <<= 2;
          }
          for (; h < z; ) e[t++] = e[h++];
          w += 1;
          u += 12;
        }
        if (u == k) {
          h = 49;
          break a;
        }
        b : for (;;) if (h = nb[g[d >> 2]](a, u) ^ 1 ? 21 : 22, h == 21) u += 12; else if (h == 22) {
          for (;;) {
            var D = g[d >> 2];
            k = i = k - 12;
            if (!nb[D](a, i)) break;
          }
          D = u;
          if (u >= k) break b;
          o = D;
          i = k;
          h = o;
          t = n;
          z = h + 12;
          if (t % 4 == h % 4) {
            for (; h % 4 !== 0 && h < z; ) e[t++] = e[h++];
            h >>= 2;
            t >>= 2;
            for (B = z >> 2; h < B; ) g[t++] = g[h++];
            h <<= 2;
            t <<= 2;
          }
          for (; h < z; ) e[t++] = e[h++];
          h = i;
          t = o;
          z = h + 12;
          if (t % 4 == h % 4) {
            for (; h % 4 !== 0 && h < z; ) e[t++] = e[h++];
            h >>= 2;
            t >>= 2;
            for (B = z >> 2; h < B; ) g[t++] = g[h++];
            h <<= 2;
            t <<= 2;
          }
          for (; h < z; ) e[t++] = e[h++];
          h = n;
          t = i;
          z = h + 12;
          if (t % 4 == h % 4) {
            for (; h % 4 !== 0 && h < z; ) e[t++] = e[h++];
            h >>= 2;
            t >>= 2;
            for (B = z >> 2; h < B; ) g[t++] = g[h++];
            h <<= 2;
            t <<= 2;
          }
          for (; h < z; ) e[t++] = e[h++];
          w += 1;
          u += 12;
        }
        a = D;
        h = 1;
        continue a;
      } else if (h == 27) {
        p = u;
        o = k;
        h = p;
        t = m;
        z = h + 12;
        if (t % 4 == h % 4) {
          for (; h % 4 !== 0 && h < z; ) e[t++] = e[h++];
          h >>= 2;
          t >>= 2;
          for (B = z >> 2; h < B; ) g[t++] = g[h++];
          h <<= 2;
          t <<= 2;
        }
        for (; h < z; ) e[t++] = e[h++];
        h = o;
        t = p;
        z = h + 12;
        if (t % 4 == h % 4) {
          for (; h % 4 !== 0 && h < z; ) e[t++] = e[h++];
          h >>= 2;
          t >>= 2;
          for (B = z >> 2; h < B; ) g[t++] = g[h++];
          h <<= 2;
          t <<= 2;
        }
        for (; h < z; ) e[t++] = e[h++];
        h = m;
        t = o;
        z = h + 12;
        if (t % 4 == h % 4) {
          for (; h % 4 !== 0 && h < z; ) e[t++] = e[h++];
          h >>= 2;
          t >>= 2;
          for (B = z >> 2; h < B; ) g[t++] = g[h++];
          h <<= 2;
          t <<= 2;
        }
        for (; h < z; ) e[t++] = e[h++];
        w += 1;
      }
    }
    u += 12;
    h = u < k ? 29 : 36;
    b : do if (h == 29) for (;;) if (h = nb[g[d >> 2]](u, i) ? 30 : 31, h == 30) u += 12; else if (h == 31) {
      for (;;) if (h = g[d >> 2], k = t = k - 12, !(nb[h](t, i) ^ 1)) break;
      if (u > k) break b;
      p = u;
      o = k;
      h = p;
      t = l;
      z = h + 12;
      if (t % 4 == h % 4) {
        for (; h % 4 !== 0 && h < z; ) e[t++] = e[h++];
        h >>= 2;
        t >>= 2;
        for (B = z >> 2; h < B; ) g[t++] = g[h++];
        h <<= 2;
        t <<= 2;
      }
      for (; h < z; ) e[t++] = e[h++];
      h = o;
      t = p;
      z = h + 12;
      if (t % 4 == h % 4) {
        for (; h % 4 !== 0 && h < z; ) e[t++] = e[h++];
        h >>= 2;
        t >>= 2;
        for (B = z >> 2; h < B; ) g[t++] = g[h++];
        h <<= 2;
        t <<= 2;
      }
      for (; h < z; ) e[t++] = e[h++];
      h = l;
      t = o;
      z = h + 12;
      if (t % 4 == h % 4) {
        for (; h % 4 !== 0 && h < z; ) e[t++] = e[h++];
        h >>= 2;
        t >>= 2;
        for (B = z >> 2; h < B; ) g[t++] = g[h++];
        h <<= 2;
        t <<= 2;
      }
      for (; h < z; ) e[t++] = e[h++];
      w += 1;
      h = i == u ? 34 : 35;
      h == 34 && (i = k);
      u += 12;
    } while (0);
    h = u != i ? 37 : 39;
    if (h == 37) if (nb[g[d >> 2]](i, u)) {
      j = u;
      k = i;
      h = i = j;
      t = c;
      z = h + 12;
      if (t % 4 == h % 4) {
        for (; h % 4 !== 0 && h < z; ) e[t++] = e[h++];
        h >>= 2;
        t >>= 2;
        for (B = z >> 2; h < B; ) g[t++] = g[h++];
        h <<= 2;
        t <<= 2;
      }
      for (; h < z; ) e[t++] = e[h++];
      h = i = k;
      t = j;
      z = h + 12;
      if (t % 4 == h % 4) {
        for (; h % 4 !== 0 && h < z; ) e[t++] = e[h++];
        h >>= 2;
        t >>= 2;
        for (B = z >> 2; h < B; ) g[t++] = g[h++];
        h <<= 2;
        t <<= 2;
      }
      for (; h < z; ) e[t++] = e[h++];
      h = j = c;
      t = k;
      z = h + 12;
      if (t % 4 == h % 4) {
        for (; h % 4 !== 0 && h < z; ) e[t++] = e[h++];
        h >>= 2;
        t >>= 2;
        for (B = z >> 2; h < B; ) g[t++] = g[h++];
        h <<= 2;
        t <<= 2;
      }
      for (; h < z; ) e[t++] = e[h++];
      w = j = w + 1;
      h = 40;
    } else h = 39;
    h == 39 && (j = w);
    h = j == 0 ? 41 : 46;
    b : do if (h == 41) if (i = oi(a, u, d), k = oi(u + 12, f, d), i &= 1, h = k ? 42 : 44, h == 42) {
      if (i) {
        h = 49;
        break a;
      }
      f = u;
      h = 1;
      continue a;
    } else if (h == 44) {
      if (!i) break b;
      a = u + 12;
      h = 1;
      continue a;
    } while (0);
    h = ((u - a) / 12 | 0) < ((f - u) / 12 | 0) ? 47 : 48;
    h == 47 ? (bi(a, u, d), a = u + 12) : h == 48 && (bi(u + 12, f, d), f = u);
  }
  if (h == 2) {
    if (d = g[d >> 2], f = l = f - 12, nb[d](l, a)) {
      h = a;
      t = s;
      z = h + 12;
      if (t % 4 == h % 4) {
        for (; h % 4 !== 0 && h < z; ) e[t++] = e[h++];
        h >>= 2;
        t >>= 2;
        for (B = z >> 2; h < B; ) g[t++] = g[h++];
        h <<= 2;
        t <<= 2;
      }
      for (; h < z; ) e[t++] = e[h++];
      h = f;
      t = a;
      z = h + 12;
      if (t % 4 == h % 4) {
        for (; h % 4 !== 0 && h < z; ) e[t++] = e[h++];
        h >>= 2;
        t >>= 2;
        for (B = z >> 2; h < B; ) g[t++] = g[h++];
        h <<= 2;
        t <<= 2;
      }
      for (; h < z; ) e[t++] = e[h++];
      h = s;
      t = f;
      z = h + 12;
      if (t % 4 == h % 4) {
        for (; h % 4 !== 0 && h < z; ) e[t++] = e[h++];
        h >>= 2;
        t >>= 2;
        for (B = z >> 2; h < B; ) g[t++] = g[h++];
        h <<= 2;
        t <<= 2;
      }
      for (; h < z; ) e[t++] = e[h++];
    }
  } else h == 4 ? ni(a, a + 12, f - 12, d) : h == 5 ? pi(a, a + 12, a + 24, f - 12, d) : h == 6 ? mi(a, a + 12, a + 24, a + 36, f - 12, d) : h == 8 && qi(A, f, d);
  b = c;
}

bi.X = 1;

function ni(a, f, d, c) {
  var h = b;
  b += 60;
  var i, j = h + 12, k = h + 24, p = h + 36, o = h + 48, l, m;
  m = 0;
  i = nb[g[c >> 2]](f, a);
  var n = nb[g[c >> 2]](d, f);
  i = i ? 6 : 1;
  if (i == 6) if (i = n ? 7 : 8, i == 7) {
    l = a;
    m = h;
    n = l + 12;
    if (m % 4 == l % 4) {
      for (; l % 4 !== 0 && l < n; ) e[m++] = e[l++];
      l >>= 2;
      m >>= 2;
      for (i = n >> 2; l < i; ) g[m++] = g[l++];
      l <<= 2;
      m <<= 2;
    }
    for (; l < n; ) e[m++] = e[l++];
    l = d;
    m = a;
    n = l + 12;
    if (m % 4 == l % 4) {
      for (; l % 4 !== 0 && l < n; ) e[m++] = e[l++];
      l >>= 2;
      m >>= 2;
      for (i = n >> 2; l < i; ) g[m++] = g[l++];
      l <<= 2;
      m <<= 2;
    }
    for (; l < n; ) e[m++] = e[l++];
    l = h;
    m = d;
    n = l + 12;
    if (m % 4 == l % 4) {
      for (; l % 4 !== 0 && l < n; ) e[m++] = e[l++];
      l >>= 2;
      m >>= 2;
      for (i = n >> 2; l < i; ) g[m++] = g[l++];
      l <<= 2;
      m <<= 2;
    }
    for (; l < n; ) e[m++] = e[l++];
    l = 1;
  } else {
    if (i == 8) {
      l = a;
      m = j;
      n = l + 12;
      if (m % 4 == l % 4) {
        for (; l % 4 !== 0 && l < n; ) e[m++] = e[l++];
        l >>= 2;
        m >>= 2;
        for (i = n >> 2; l < i; ) g[m++] = g[l++];
        l <<= 2;
        m <<= 2;
      }
      for (; l < n; ) e[m++] = e[l++];
      l = f;
      m = a;
      n = l + 12;
      if (m % 4 == l % 4) {
        for (; l % 4 !== 0 && l < n; ) e[m++] = e[l++];
        l >>= 2;
        m >>= 2;
        for (i = n >> 2; l < i; ) g[m++] = g[l++];
        l <<= 2;
        m <<= 2;
      }
      for (; l < n; ) e[m++] = e[l++];
      l = j;
      m = f;
      n = l + 12;
      if (m % 4 == l % 4) {
        for (; l % 4 !== 0 && l < n; ) e[m++] = e[l++];
        l >>= 2;
        m >>= 2;
        for (i = n >> 2; l < i; ) g[m++] = g[l++];
        l <<= 2;
        m <<= 2;
      }
      for (; l < n; ) e[m++] = e[l++];
      m = 1;
      i = nb[g[c >> 2]](d, f) ? 9 : 10;
      if (i == 9) {
        l = f;
        m = p;
        n = l + 12;
        if (m % 4 == l % 4) {
          for (; l % 4 !== 0 && l < n; ) e[m++] = e[l++];
          l >>= 2;
          m >>= 2;
          for (i = n >> 2; l < i; ) g[m++] = g[l++];
          l <<= 2;
          m <<= 2;
        }
        for (; l < n; ) e[m++] = e[l++];
        l = d;
        m = f;
        n = l + 12;
        if (m % 4 == l % 4) {
          for (; l % 4 !== 0 && l < n; ) e[m++] = e[l++];
          l >>= 2;
          m >>= 2;
          for (i = n >> 2; l < i; ) g[m++] = g[l++];
          l <<= 2;
          m <<= 2;
        }
        for (; l < n; ) e[m++] = e[l++];
        l = p;
        m = d;
        n = l + 12;
        if (m % 4 == l % 4) {
          for (; l % 4 !== 0 && l < n; ) e[m++] = e[l++];
          l >>= 2;
          m >>= 2;
          for (i = n >> 2; l < i; ) g[m++] = g[l++];
          l <<= 2;
          m <<= 2;
        }
        for (; l < n; ) e[m++] = e[l++];
        m = 2;
      }
      l = m;
    }
  } else if (i == 1) if (i = n ? 3 : 2, i == 3) {
    l = f;
    m = o;
    n = l + 12;
    if (m % 4 == l % 4) {
      for (; l % 4 !== 0 && l < n; ) e[m++] = e[l++];
      l >>= 2;
      m >>= 2;
      for (i = n >> 2; l < i; ) g[m++] = g[l++];
      l <<= 2;
      m <<= 2;
    }
    for (; l < n; ) e[m++] = e[l++];
    l = d;
    m = f;
    n = l + 12;
    if (m % 4 == l % 4) {
      for (; l % 4 !== 0 && l < n; ) e[m++] = e[l++];
      l >>= 2;
      m >>= 2;
      for (i = n >> 2; l < i; ) g[m++] = g[l++];
      l <<= 2;
      m <<= 2;
    }
    for (; l < n; ) e[m++] = e[l++];
    l = o;
    m = d;
    n = l + 12;
    if (m % 4 == l % 4) {
      for (; l % 4 !== 0 && l < n; ) e[m++] = e[l++];
      l >>= 2;
      m >>= 2;
      for (i = n >> 2; l < i; ) g[m++] = g[l++];
      l <<= 2;
      m <<= 2;
    }
    for (; l < n; ) e[m++] = e[l++];
    m = 1;
    i = nb[g[c >> 2]](f, a) ? 4 : 5;
    if (i == 4) {
      l = a;
      m = k;
      n = l + 12;
      if (m % 4 == l % 4) {
        for (; l % 4 !== 0 && l < n; ) e[m++] = e[l++];
        l >>= 2;
        m >>= 2;
        for (i = n >> 2; l < i; ) g[m++] = g[l++];
        l <<= 2;
        m <<= 2;
      }
      for (; l < n; ) e[m++] = e[l++];
      l = f;
      m = a;
      n = l + 12;
      if (m % 4 == l % 4) {
        for (; l % 4 !== 0 && l < n; ) e[m++] = e[l++];
        l >>= 2;
        m >>= 2;
        for (i = n >> 2; l < i; ) g[m++] = g[l++];
        l <<= 2;
        m <<= 2;
      }
      for (; l < n; ) e[m++] = e[l++];
      l = k;
      m = f;
      n = l + 12;
      if (m % 4 == l % 4) {
        for (; l % 4 !== 0 && l < n; ) e[m++] = e[l++];
        l >>= 2;
        m >>= 2;
        for (i = n >> 2; l < i; ) g[m++] = g[l++];
        l <<= 2;
        m <<= 2;
      }
      for (; l < n; ) e[m++] = e[l++];
      m = 2;
    }
    l = m;
  } else i == 2 && (l = m);
  b = h;
  return l;
}

ni.X = 1;

function pi(a, f, d, c, h) {
  var i = b;
  b += 36;
  var j = i + 12, k = i + 24, p;
  p = ni(a, f, d, h);
  if ((nb[g[h >> 2]](c, d) ? 1 : 4) == 1) {
    var o, l, m, n;
    o = d;
    l = k;
    m = o + 12;
    if (l % 4 == o % 4) {
      for (; o % 4 !== 0 && o < m; ) e[l++] = e[o++];
      o >>= 2;
      l >>= 2;
      for (n = m >> 2; o < n; ) g[l++] = g[o++];
      o <<= 2;
      l <<= 2;
    }
    for (; o < m; ) e[l++] = e[o++];
    o = c;
    l = d;
    m = o + 12;
    if (l % 4 == o % 4) {
      for (; o % 4 !== 0 && o < m; ) e[l++] = e[o++];
      o >>= 2;
      l >>= 2;
      for (n = m >> 2; o < n; ) g[l++] = g[o++];
      o <<= 2;
      l <<= 2;
    }
    for (; o < m; ) e[l++] = e[o++];
    o = k;
    l = c;
    m = o + 12;
    if (l % 4 == o % 4) {
      for (; o % 4 !== 0 && o < m; ) e[l++] = e[o++];
      o >>= 2;
      l >>= 2;
      for (n = m >> 2; o < n; ) g[l++] = g[o++];
      o <<= 2;
      l <<= 2;
    }
    for (; o < m; ) e[l++] = e[o++];
    p += 1;
    if (nb[g[h >> 2]](d, f)) {
      o = f;
      l = i;
      m = o + 12;
      if (l % 4 == o % 4) {
        for (; o % 4 !== 0 && o < m; ) e[l++] = e[o++];
        o >>= 2;
        l >>= 2;
        for (n = m >> 2; o < n; ) g[l++] = g[o++];
        o <<= 2;
        l <<= 2;
      }
      for (; o < m; ) e[l++] = e[o++];
      o = d;
      l = f;
      m = o + 12;
      if (l % 4 == o % 4) {
        for (; o % 4 !== 0 && o < m; ) e[l++] = e[o++];
        o >>= 2;
        l >>= 2;
        for (n = m >> 2; o < n; ) g[l++] = g[o++];
        o <<= 2;
        l <<= 2;
      }
      for (; o < m; ) e[l++] = e[o++];
      o = i;
      l = d;
      m = o + 12;
      if (l % 4 == o % 4) {
        for (; o % 4 !== 0 && o < m; ) e[l++] = e[o++];
        o >>= 2;
        l >>= 2;
        for (n = m >> 2; o < n; ) g[l++] = g[o++];
        o <<= 2;
        l <<= 2;
      }
      for (; o < m; ) e[l++] = e[o++];
      p += 1;
      if (nb[g[h >> 2]](f, a)) {
        o = a;
        l = j;
        m = o + 12;
        if (l % 4 == o % 4) {
          for (; o % 4 !== 0 && o < m; ) e[l++] = e[o++];
          o >>= 2;
          l >>= 2;
          for (n = m >> 2; o < n; ) g[l++] = g[o++];
          o <<= 2;
          l <<= 2;
        }
        for (; o < m; ) e[l++] = e[o++];
        o = f;
        l = a;
        m = o + 12;
        if (l % 4 == o % 4) {
          for (; o % 4 !== 0 && o < m; ) e[l++] = e[o++];
          o >>= 2;
          l >>= 2;
          for (n = m >> 2; o < n; ) g[l++] = g[o++];
          o <<= 2;
          l <<= 2;
        }
        for (; o < m; ) e[l++] = e[o++];
        o = j;
        l = f;
        m = o + 12;
        if (l % 4 == o % 4) {
          for (; o % 4 !== 0 && o < m; ) e[l++] = e[o++];
          o >>= 2;
          l >>= 2;
          for (n = m >> 2; o < n; ) g[l++] = g[o++];
          o <<= 2;
          l <<= 2;
        }
        for (; o < m; ) e[l++] = e[o++];
        p += 1;
      }
    }
  }
  b = i;
  return p;
}

pi.X = 1;

function mi(a, f, d, c, h, i) {
  var j = b;
  b += 48;
  var k = j + 12, p = j + 24, o = j + 36, l;
  l = pi(a, f, d, c, i);
  if ((nb[g[i >> 2]](h, c) ? 1 : 5) == 1) {
    var m, n, r, s;
    m = c;
    n = o;
    r = m + 12;
    if (n % 4 == m % 4) {
      for (; m % 4 !== 0 && m < r; ) e[n++] = e[m++];
      m >>= 2;
      n >>= 2;
      for (s = r >> 2; m < s; ) g[n++] = g[m++];
      m <<= 2;
      n <<= 2;
    }
    for (; m < r; ) e[n++] = e[m++];
    m = h;
    n = c;
    r = m + 12;
    if (n % 4 == m % 4) {
      for (; m % 4 !== 0 && m < r; ) e[n++] = e[m++];
      m >>= 2;
      n >>= 2;
      for (s = r >> 2; m < s; ) g[n++] = g[m++];
      m <<= 2;
      n <<= 2;
    }
    for (; m < r; ) e[n++] = e[m++];
    m = o;
    n = h;
    r = m + 12;
    if (n % 4 == m % 4) {
      for (; m % 4 !== 0 && m < r; ) e[n++] = e[m++];
      m >>= 2;
      n >>= 2;
      for (s = r >> 2; m < s; ) g[n++] = g[m++];
      m <<= 2;
      n <<= 2;
    }
    for (; m < r; ) e[n++] = e[m++];
    l += 1;
    if (nb[g[i >> 2]](c, d)) {
      m = d;
      n = k;
      r = m + 12;
      if (n % 4 == m % 4) {
        for (; m % 4 !== 0 && m < r; ) e[n++] = e[m++];
        m >>= 2;
        n >>= 2;
        for (s = r >> 2; m < s; ) g[n++] = g[m++];
        m <<= 2;
        n <<= 2;
      }
      for (; m < r; ) e[n++] = e[m++];
      m = c;
      n = d;
      r = m + 12;
      if (n % 4 == m % 4) {
        for (; m % 4 !== 0 && m < r; ) e[n++] = e[m++];
        m >>= 2;
        n >>= 2;
        for (s = r >> 2; m < s; ) g[n++] = g[m++];
        m <<= 2;
        n <<= 2;
      }
      for (; m < r; ) e[n++] = e[m++];
      m = k;
      n = c;
      r = m + 12;
      if (n % 4 == m % 4) {
        for (; m % 4 !== 0 && m < r; ) e[n++] = e[m++];
        m >>= 2;
        n >>= 2;
        for (s = r >> 2; m < s; ) g[n++] = g[m++];
        m <<= 2;
        n <<= 2;
      }
      for (; m < r; ) e[n++] = e[m++];
      l += 1;
      if (nb[g[i >> 2]](d, f)) {
        m = f;
        n = j;
        r = m + 12;
        if (n % 4 == m % 4) {
          for (; m % 4 !== 0 && m < r; ) e[n++] = e[m++];
          m >>= 2;
          n >>= 2;
          for (s = r >> 2; m < s; ) g[n++] = g[m++];
          m <<= 2;
          n <<= 2;
        }
        for (; m < r; ) e[n++] = e[m++];
        m = d;
        n = f;
        r = m + 12;
        if (n % 4 == m % 4) {
          for (; m % 4 !== 0 && m < r; ) e[n++] = e[m++];
          m >>= 2;
          n >>= 2;
          for (s = r >> 2; m < s; ) g[n++] = g[m++];
          m <<= 2;
          n <<= 2;
        }
        for (; m < r; ) e[n++] = e[m++];
        m = j;
        n = d;
        r = m + 12;
        if (n % 4 == m % 4) {
          for (; m % 4 !== 0 && m < r; ) e[n++] = e[m++];
          m >>= 2;
          n >>= 2;
          for (s = r >> 2; m < s; ) g[n++] = g[m++];
          m <<= 2;
          n <<= 2;
        }
        for (; m < r; ) e[n++] = e[m++];
        l += 1;
        if (nb[g[i >> 2]](f, a)) {
          m = a;
          n = p;
          r = m + 12;
          if (n % 4 == m % 4) {
            for (; m % 4 !== 0 && m < r; ) e[n++] = e[m++];
            m >>= 2;
            n >>= 2;
            for (s = r >> 2; m < s; ) g[n++] = g[m++];
            m <<= 2;
            n <<= 2;
          }
          for (; m < r; ) e[n++] = e[m++];
          m = f;
          n = a;
          r = m + 12;
          if (n % 4 == m % 4) {
            for (; m % 4 !== 0 && m < r; ) e[n++] = e[m++];
            m >>= 2;
            n >>= 2;
            for (s = r >> 2; m < s; ) g[n++] = g[m++];
            m <<= 2;
            n <<= 2;
          }
          for (; m < r; ) e[n++] = e[m++];
          m = p;
          n = f;
          r = m + 12;
          if (n % 4 == m % 4) {
            for (; m % 4 !== 0 && m < r; ) e[n++] = e[m++];
            m >>= 2;
            n >>= 2;
            for (s = r >> 2; m < s; ) g[n++] = g[m++];
            m <<= 2;
            n <<= 2;
          }
          for (; m < r; ) e[n++] = e[m++];
          l += 1;
        }
      }
    }
  }
  b = j;
  return l;
}

mi.X = 1;

function qi(a, f, d) {
  var c = b;
  b += 12;
  var h, i, j, k, p;
  k = a + 24;
  ni(a, a + 12, k, d);
  p = k + 12;
  h = p != f ? 1 : 8;
  a : do if (h == 1) for (var o = c; ; ) {
    h = nb[g[d >> 2]](p, k) ? 3 : 7;
    if (h == 3) {
      j = p;
      var l, m, n;
      i = j;
      l = o;
      m = i + 12;
      if (l % 4 == i % 4) {
        for (; i % 4 !== 0 && i < m; ) e[l++] = e[i++];
        i >>= 2;
        l >>= 2;
        for (n = m >> 2; i < n; ) g[l++] = g[i++];
        i <<= 2;
        l <<= 2;
      }
      for (; i < m; ) e[l++] = e[i++];
      j = k;
      for (k = p; ; ) {
        i = j;
        l = k;
        m = i + 12;
        if (l % 4 == i % 4) {
          for (; i % 4 !== 0 && i < m; ) e[l++] = e[i++];
          i >>= 2;
          l >>= 2;
          for (n = m >> 2; i < n; ) g[l++] = g[i++];
          i <<= 2;
          l <<= 2;
        }
        for (; i < m; ) e[l++] = e[i++];
        k = j;
        if (k == a) {
          h = 6;
          break;
        }
        i = g[d >> 2];
        j = l = j - 12;
        if (!nb[i](c, l)) {
          h = 6;
          break;
        }
      }
      i = j = c;
      l = k;
      m = i + 12;
      if (l % 4 == i % 4) {
        for (; i % 4 !== 0 && i < m; ) e[l++] = e[i++];
        i >>= 2;
        l >>= 2;
        for (n = m >> 2; i < n; ) g[l++] = g[i++];
        i <<= 2;
        l <<= 2;
      }
      for (; i < m; ) e[l++] = e[i++];
    }
    k = p;
    p += 12;
    if (p == f) break a;
  } while (0);
  b = c;
}

qi.X = 1;

function Yh(a, f) {
  var d = b;
  b += 32;
  var c, h, i = d + 8, j = d + 16;
  c = d + 24;
  J(j, f, a + 8);
  var k, p;
  k = d;
  for (p = j + 8; j < p; ) e[k++] = e[j++];
  J(c, a, f + 8);
  j = c;
  k = i;
  for (p = j + 8; j < p; ) e[k++] = e[j++];
  c = q[d >> 2] > 0 ? 2 : 1;
  a : do if (c == 1) if (q[d + 4 >> 2] > 0) c = 2; else {
    c = q[i >> 2] > 0 ? 5 : 4;
    do if (c == 4) if (q[i + 4 >> 2] > 0) c = 5; else {
      h = 1;
      c = 7;
      break a;
    } while (0);
    h = 0;
    c = 7;
  } while (0);
  c == 2 && (h = 0);
  b = d;
  return h;
}

Yh.X = 1;

function Kh(a) {
  Nh(a + 32);
  g[a + 40 >> 2] = 0;
  g[a + 8 >> 2] = 0;
  g[a + 4 >> 2] = 0;
  g[a + 24 >> 2] = 0;
  g[a + 28 >> 2] = 0;
  g[a + 12 >> 2] = 0;
  q[a >> 2] = 0;
}

function oi(a, f, d) {
  var c = b;
  b += 24;
  var h, i, j, k, p, o, l, m = c + 12;
  h = (f - a) / 12 | 0;
  h = h == 0 ? 1 : h == 1 ? 1 : h == 2 ? 2 : h == 3 ? 5 : h == 4 ? 6 : h == 5 ? 7 : 8;
  if (h == 8) {
    p = a + 24;
    ni(a, a + 12, p, d);
    o = 0;
    l = p + 12;
    a : for (;;) {
      if (l == f) {
        h = 17;
        break;
      }
      h = nb[g[d >> 2]](l, p) ? 11 : 16;
      if (h == 11) {
        j = l;
        var n, r, s;
        i = j;
        n = m;
        r = i + 12;
        if (n % 4 == i % 4) {
          for (; i % 4 !== 0 && i < r; ) e[n++] = e[i++];
          i >>= 2;
          n >>= 2;
          for (s = r >> 2; i < s; ) g[n++] = g[i++];
          i <<= 2;
          n <<= 2;
        }
        for (; i < r; ) e[n++] = e[i++];
        j = p;
        for (p = l; ; ) {
          i = j;
          n = p;
          r = i + 12;
          if (n % 4 == i % 4) {
            for (; i % 4 !== 0 && i < r; ) e[n++] = e[i++];
            i >>= 2;
            n >>= 2;
            for (s = r >> 2; i < s; ) g[n++] = g[i++];
            i <<= 2;
            n <<= 2;
          }
          for (; i < r; ) e[n++] = e[i++];
          p = j;
          if (p == a) {
            h = 14;
            break;
          }
          i = g[d >> 2];
          j = n = j - 12;
          if (!nb[i](m, n)) {
            h = 14;
            break;
          }
        }
        i = j = m;
        n = p;
        r = i + 12;
        if (n % 4 == i % 4) {
          for (; i % 4 !== 0 && i < r; ) e[n++] = e[i++];
          i >>= 2;
          n >>= 2;
          for (s = r >> 2; i < s; ) g[n++] = g[i++];
          i <<= 2;
          n <<= 2;
        }
        for (; i < r; ) e[n++] = e[i++];
        o = p = o + 1;
        if (p == 8) {
          h = 15;
          break a;
        }
      }
      p = l;
      l += 12;
    }
    h == 17 ? k = 1 : h == 15 && (k = l + 12 == f);
  } else if (h == 1) k = 1; else if (h == 2) {
    d = g[d >> 2];
    f = k = f - 12;
    h = nb[d](k, a) ? 3 : 4;
    if (h == 3) {
      i = a;
      n = c;
      r = i + 12;
      if (n % 4 == i % 4) {
        for (; i % 4 !== 0 && i < r; ) e[n++] = e[i++];
        i >>= 2;
        n >>= 2;
        for (s = r >> 2; i < s; ) g[n++] = g[i++];
        i <<= 2;
        n <<= 2;
      }
      for (; i < r; ) e[n++] = e[i++];
      i = f;
      n = a;
      r = i + 12;
      if (n % 4 == i % 4) {
        for (; i % 4 !== 0 && i < r; ) e[n++] = e[i++];
        i >>= 2;
        n >>= 2;
        for (s = r >> 2; i < s; ) g[n++] = g[i++];
        i <<= 2;
        n <<= 2;
      }
      for (; i < r; ) e[n++] = e[i++];
      i = c;
      n = f;
      r = i + 12;
      if (n % 4 == i % 4) {
        for (; i % 4 !== 0 && i < r; ) e[n++] = e[i++];
        i >>= 2;
        n >>= 2;
        for (s = r >> 2; i < s; ) g[n++] = g[i++];
        i <<= 2;
        n <<= 2;
      }
      for (; i < r; ) e[n++] = e[i++];
    }
    k = 1;
  } else h == 5 ? (ni(a, a + 12, f - 12, d), k = 1) : h == 6 ? (pi(a, a + 12, a + 24, f - 12, d), k = 1) : h == 7 && (mi(a, a + 12, a + 24, a + 36, f - 12, d), k = 1);
  b = c;
  return k;
}

oi.X = 1;

function ii(a, f) {
  var d;
  if ((g[a + 1028 >> 2] == g[a + 1032 >> 2] ? 1 : 3) == 1) {
    d = g[a >> 2];
    g[a + 1032 >> 2] <<= 1;
    var c = jb(g[a + 1032 >> 2] << 2);
    g[a >> 2] = c;
    var h = g[a >> 2], c = g[a + 1028 >> 2] << 2, i;
    i = d + c;
    if (h % 4 == d % 4 && c > 8) {
      for (; d % 4 !== 0 && d < i; ) e[h++] = e[d++];
      d >>= 2;
      h >>= 2;
      for (c = i >> 2; d < c; ) g[h++] = g[d++];
      d <<= 2;
      h <<= 2;
    }
    for (; d < i; ) e[h++] = e[d++];
  }
  g[g[a >> 2] + (g[a + 1028 >> 2] << 2) >> 2] = g[f >> 2];
  g[a + 1028 >> 2] += 1;
}

ii.X = 1;

function Lh(a, f, d, c) {
  var h;
  g[a + 40 >> 2] = g[c + 4 >> 2];
  q[a + 16 >> 2] = q[c + 8 >> 2];
  q[a + 20 >> 2] = q[c + 12 >> 2];
  g[a + 8 >> 2] = d;
  g[a + 4 >> 2] = 0;
  var i, d = c + 22;
  h = a + 32;
  for (i = d + 6; d < i; ) e[h++] = e[d++];
  e[a + 38] = e[c + 20] & 1;
  d = Wa[c >> 2];
  d = nb[g[g[d >> 2] + 8 >> 2]](d, f);
  g[a + 12 >> 2] = d;
  d = g[a + 12 >> 2];
  d = nb[g[g[d >> 2] + 12 >> 2]](d);
  f = ig(f, d * 28);
  g[a + 24 >> 2] = f;
  h = 0;
  f = h < d ? 1 : 3;
  a : do if (f == 1) {
    i = a + 24;
    for (var j = a + 24; ; ) if (g[g[i >> 2] + h * 28 + 16 >> 2] = 0, g[g[j >> 2] + h * 28 + 24 >> 2] = -1, h += 1, h >= d) break a;
  } while (0);
  g[a + 28 >> 2] = 0;
  q[a >> 2] = q[c + 16 >> 2];
}

Lh.X = 1;

function ri(a, f) {
  var d;
  d = g[a + 28 >> 2] == 0 ? 2 : 1;
  d == 1 && X(si, 72, ti, ui);
  d = g[a + 12 >> 2];
  d = nb[g[g[d >> 2] + 12 >> 2]](d);
  Ig(f, g[a + 24 >> 2], d * 28);
  g[a + 24 >> 2] = 0;
  d = g[g[a + 12 >> 2] + 4 >> 2];
  d = d == 0 ? 3 : d == 1 ? 4 : d == 2 ? 5 : d == 3 ? 6 : 7;
  d == 7 ? X(si, 115, ti, ud) : d == 3 ? (d = g[a + 12 >> 2], nb[g[g[d >> 2] >> 2]](d), Ig(f, d, 20)) : d == 4 ? (d = g[a + 12 >> 2], nb[g[g[d >> 2] >> 2]](d), Ig(f, d, 48)) : d == 5 ? (d = g[a + 12 >> 2], nb[g[g[d >> 2] >> 2]](d), Ig(f, d, 152)) : d == 6 && (d = g[a + 12 >> 2], nb[g[g[d >> 2] >> 2]](d), Ig(f, d, 40));
  g[a + 12 >> 2] = 0;
}

ri.X = 1;

function Mh(a, f, d) {
  var c, h, i;
  c = g[a + 28 >> 2] == 0 ? 2 : 1;
  c == 1 && X(si, 124, vi, ui);
  c = g[a + 12 >> 2];
  c = nb[g[g[c >> 2] + 12 >> 2]](c);
  g[a + 28 >> 2] = c;
  h = 0;
  var j = a + 28;
  c = h < g[j >> 2] ? 3 : 5;
  a : do if (c == 3) for (var k = a + 24, p = a + 12; ; ) {
    i = g[k >> 2] + h * 28;
    var o = g[p >> 2];
    nb[g[g[o >> 2] + 24 >> 2]](o, i, d, h);
    var o = f, l = ga, l = Be(o, i, i);
    g[o + 28 >> 2] += 1;
    Dc(o, l);
    g[i + 24 >> 2] = l;
    g[i + 16 >> 2] = a;
    g[i + 20 >> 2] = h;
    h += 1;
    if (h >= g[j >> 2]) break a;
  } while (0);
}

Mh.X = 1;

function Dh(a, f, d, c) {
  var h = b;
  b += 40;
  var i, j, k, p = h + 16, o = h + 32;
  i = g[a + 28 >> 2] == 0 ? 4 : 1;
  a : do if (i == 1) {
    j = 0;
    var l = a + 28;
    if (j < g[l >> 2]) for (var m = a + 24, n = a + 12, r = a + 12; ; ) {
      k = g[m >> 2] + j * 28;
      var s = g[n >> 2];
      nb[g[g[s >> 2] + 24 >> 2]](s, h, d, g[k + 20 >> 2]);
      s = g[r >> 2];
      nb[g[g[s >> 2] + 24 >> 2]](s, p, c, g[k + 20 >> 2]);
      Ge(k, h, p);
      J(o, c, d);
      var s = f, u = g[k + 24 >> 2];
      (Me(s, u, k, o) & 1 ? 1 : 2) == 1 && Dc(s, u);
      j += 1;
      if (j >= g[l >> 2]) break a;
    } else i = 4;
  } while (0);
  b = h;
}

Dh.X = 1;

function wi(a) {
  bh(g[a >> 2], g[a + 20 >> 2]);
  bh(g[a >> 2], g[a + 24 >> 2]);
  bh(g[a >> 2], g[a + 16 >> 2]);
  bh(g[a >> 2], g[a + 12 >> 2]);
  bh(g[a >> 2], g[a + 8 >> 2]);
}

function xi(a, f, d, c, h, i) {
  g[a + 40 >> 2] = f;
  g[a + 44 >> 2] = d;
  g[a + 48 >> 2] = c;
  g[a + 28 >> 2] = 0;
  g[a + 36 >> 2] = 0;
  g[a + 32 >> 2] = 0;
  g[a >> 2] = h;
  g[a + 4 >> 2] = i;
  f = hh(g[a >> 2], f << 2);
  g[a + 8 >> 2] = f;
  d = hh(g[a >> 2], d << 2);
  g[a + 12 >> 2] = d;
  c = hh(g[a >> 2], c << 2);
  g[a + 16 >> 2] = c;
  c = hh(g[a >> 2], g[a + 40 >> 2] * 12);
  g[a + 24 >> 2] = c;
  c = hh(g[a >> 2], g[a + 40 >> 2] * 12);
  g[a + 20 >> 2] = c;
}

xi.X = 1;

function yi(a) {
  var f = b;
  b += 16;
  var d = f + 8;
  cf(a + 20, q[a + 56 >> 2]);
  var c = a + 12, h = a + 44;
  Yc(d, a + 20, a + 28);
  J(f, h, d);
  a = f;
  for (d = a + 8; a < d; ) e[c++] = e[a++];
  b = f;
}

function zi(a, f, d, c, h) {
  var i = b;
  b += 216;
  var j, k, p, o, l = i + 8, m, n = i + 16, r, s = i + 24, u = i + 32, w = i + 40, t = i + 48, A = i + 56, C = i + 88, z = i + 132, B, D, H, G, N = i + 184, M, O = i + 192, R, W = i + 200, E, Q, K, P = i + 208, aa, ba, Y, ra, ca, ea, U, fa, wa, Da, ha, sa, Ja;
  kh(i);
  k = q[d >> 2];
  p = 0;
  var Sa = a + 28;
  j = p < g[Sa >> 2] ? 1 : 5;
  a : do if (j == 1) for (var Ta = a + 8, ua = l, Aa = n, lb = a + 20, Ua = l, Va = a + 20, Ma = a + 24, Ba = n, oa = a + 24; ; ) {
    o = g[g[Ta >> 2] + (p << 2) >> 2];
    var da, pa, qa, cb;
    da = o + 44;
    pa = ua;
    for (qa = da + 8; da < qa; ) e[pa++] = e[da++];
    m = q[o + 56 >> 2];
    da = o + 64;
    pa = Aa;
    for (qa = da + 8; da < qa; ) e[pa++] = e[da++];
    r = q[o + 72 >> 2];
    da = o + 44;
    pa = o + 36;
    for (qa = da + 8; da < qa; ) e[pa++] = e[da++];
    q[o + 52 >> 2] = q[o + 56 >> 2];
    j = g[o >> 2] == 2 ? 3 : 4;
    if (j == 3) {
      var ya = k;
      T(w, q[o + 140 >> 2], c);
      T(t, q[o + 120 >> 2], o + 76);
      V(u, w, t);
      T(s, ya, u);
      Sb(n, s);
      r += k * q[o + 128 >> 2] * q[o + 84 >> 2];
      sg(n, Ai(1 - k * q[o + 132 >> 2], 0, 1));
      r *= Ai(1 - k * q[o + 136 >> 2], 0, 1);
    }
    var ub = g[lb >> 2] + p * 12;
    da = Ua;
    pa = ub;
    for (qa = da + 8; da < qa; ) e[pa++] = e[da++];
    q[g[Va >> 2] + p * 12 + 8 >> 2] = m;
    var vb = g[Ma >> 2] + p * 12;
    da = Ba;
    pa = vb;
    for (qa = da + 8; da < qa; ) e[pa++] = e[da++];
    q[g[oa >> 2] + p * 12 + 8 >> 2] = r;
    p += 1;
    if (p >= g[Sa >> 2]) {
      j = 5;
      break a;
    }
  } while (0);
  kh(i);
  da = d;
  pa = A;
  qa = da + 24;
  if (pa % 4 == da % 4) {
    for (; da % 4 !== 0 && da < qa; ) e[pa++] = e[da++];
    da >>= 2;
    pa >>= 2;
    for (cb = qa >> 2; da < cb; ) g[pa++] = g[da++];
    da <<= 2;
    pa <<= 2;
  }
  for (; da < qa; ) e[pa++] = e[da++];
  g[A + 24 >> 2] = g[a + 20 >> 2];
  g[A + 28 >> 2] = g[a + 24 >> 2];
  da = d;
  pa = C;
  qa = da + 24;
  if (pa % 4 == da % 4) {
    for (; da % 4 !== 0 && da < qa; ) e[pa++] = e[da++];
    da >>= 2;
    pa >>= 2;
    for (cb = qa >> 2; da < cb; ) g[pa++] = g[da++];
    da <<= 2;
    pa <<= 2;
  }
  for (; da < qa; ) e[pa++] = e[da++];
  g[C + 24 >> 2] = g[a + 12 >> 2];
  g[C + 28 >> 2] = g[a + 36 >> 2];
  g[C + 32 >> 2] = g[a + 20 >> 2];
  g[C + 36 >> 2] = g[a + 24 >> 2];
  g[C + 40 >> 2] = g[a >> 2];
  Bi(z, C);
  Ci(z);
  j = e[d + 20] & 1 ? 7 : 16;
  j == 7 && Di(z);
  B = 0;
  for (var mb = a + 32, db = a + 16; ; ) {
    if (B >= g[mb >> 2]) {
      j = 20;
      break;
    }
    var $a = g[g[db >> 2] + (B << 2) >> 2];
    nb[g[g[$a >> 2] + 28 >> 2]]($a, A);
    B += 1;
  }
  var yb = mh(i);
  q[f + 12 >> 2] = yb;
  kh(i);
  D = 0;
  for (var Kb = a + 32, eb = a + 16; ; ) {
    if (D >= g[d + 12 >> 2]) {
      j = 30;
      break;
    }
    for (H = 0; ; ) {
      if (H >= g[Kb >> 2]) {
        j = 28;
        break;
      }
      var Lb = g[g[eb >> 2] + (H << 2) >> 2];
      nb[g[g[Lb >> 2] + 32 >> 2]](Lb, A);
      H += 1;
    }
    Ei(z);
    D += 1;
  }
  Fi(z);
  var Fb = mh(i);
  q[f + 16 >> 2] = Fb;
  G = 0;
  var fb = a + 28;
  j = G < g[fb >> 2] ? 33 : 39;
  a : do if (j == 33) for (var bc = a + 20, pc = N, zb = a + 20, cc = a + 24, Tb = O, Mb = a + 24, wb = a + 20, Nb = N, qb = a + 20, Ob = a + 24, Pb = O, dc = a + 24; ; ) {
    da = g[bc >> 2] + G * 12;
    pa = pc;
    for (qa = da + 8; da < qa; ) e[pa++] = e[da++];
    M = q[g[zb >> 2] + G * 12 + 8 >> 2];
    da = g[cc >> 2] + G * 12;
    pa = Tb;
    for (qa = da + 8; da < qa; ) e[pa++] = e[da++];
    R = q[g[Mb >> 2] + G * 12 + 8 >> 2];
    T(W, k, O);
    j = S(W, W) > 4 ? 35 : 36;
    j == 35 && (E = 2 / Nc(W), sg(O, E));
    Q = k * R;
    j = Q * Q > 2.4674012660980225 ? 37 : 38;
    j == 37 && (K = 1.5707963705062866 / pd(Q), R *= K);
    T(P, k, O);
    Sb(N, P);
    M += k * R;
    var x = g[wb >> 2] + G * 12;
    da = Nb;
    pa = x;
    for (qa = da + 8; da < qa; ) e[pa++] = e[da++];
    q[g[qb >> 2] + G * 12 + 8 >> 2] = M;
    var I = g[Ob >> 2] + G * 12;
    da = Pb;
    pa = I;
    for (qa = da + 8; da < qa; ) e[pa++] = e[da++];
    q[g[dc >> 2] + G * 12 + 8 >> 2] = R;
    G += 1;
    if (G >= g[fb >> 2]) {
      j = 39;
      break a;
    }
  } while (0);
  kh(i);
  ba = aa = 0;
  var L = a + 32, rb = a + 16;
  a : for (;;) {
    if (ba >= g[d + 16 >> 2]) {
      j = 53;
      break;
    }
    Y = Gi(z);
    ra = 1;
    for (ca = 0; ; ) {
      if (ca >= g[L >> 2]) {
        j = 49;
        break;
      }
      var ec = g[g[rb >> 2] + (ca << 2) >> 2];
      ea = nb[g[g[ec >> 2] + 36 >> 2]](ec, A);
      if (ra & 1) j = 47; else {
        var fc = 0;
        j = 48;
      }
      j == 47 && (fc = ea & 1);
      ra = fc;
      ca += 1;
    }
    j = Y & 1 ? 50 : 52;
    if (j == 50 && ra & 1) {
      j = 51;
      break a;
    }
    ba += 1;
  }
  j == 51 && (aa = 1);
  U = 0;
  var ia = a + 28;
  j = U < g[ia >> 2] ? 54 : 56;
  a : do if (j == 54) for (var Ea = a + 8, Fa = a + 20, gc = a + 20, hc = a + 24, qc = a + 24; ; ) {
    fa = g[g[Ea >> 2] + (U << 2) >> 2];
    da = g[Fa >> 2] + U * 12;
    pa = fa + 44;
    for (qa = da + 8; da < qa; ) e[pa++] = e[da++];
    q[fa + 56 >> 2] = q[g[gc >> 2] + U * 12 + 8 >> 2];
    da = g[hc >> 2] + U * 12;
    pa = fa + 64;
    for (qa = da + 8; da < qa; ) e[pa++] = e[da++];
    q[fa + 72 >> 2] = q[g[qc >> 2] + U * 12 + 8 >> 2];
    yi(fa);
    U += 1;
    if (U >= g[ia >> 2]) {
      j = 56;
      break a;
    }
  } while (0);
  var Fc = mh(i);
  q[f + 20 >> 2] = Fc;
  Hi(a, g[z + 40 >> 2]);
  j = h & 1 ? 59 : 74;
  a : do if (j == 59) {
    wa = 3.4028234663852886e+38;
    Da = 0;
    var Ub = a + 28;
    j = Da < g[Ub >> 2] ? 60 : 68;
    b : do if (j == 60) for (var ic = a + 8; ; ) {
      ha = g[g[ic >> 2] + (Da << 2) >> 2];
      j = g[ha >> 2] == 0 ? 67 : 62;
      c : do if (j == 62) {
        j = (Ra[ha + 4 >> 1] & 4) == 0 ? 65 : 63;
        do if (j == 63) if (q[ha + 72 >> 2] * q[ha + 72 >> 2] > .001218469929881394) j = 65; else if (S(ha + 64, ha + 64) > 9999999747378752e-20) j = 65; else {
          q[ha + 144 >> 2] += k;
          wa = wa < q[ha + 144 >> 2] ? wa : q[ha + 144 >> 2];
          j = 67;
          break c;
        } while (0);
        wa = q[ha + 144 >> 2] = 0;
      } while (0);
      Da += 1;
      if (Da >= g[Ub >> 2]) {
        j = 68;
        break b;
      }
    } while (0);
    if (wa >= .5) if (aa & 1) {
      sa = 0;
      for (var jc = a + 28, Gc = a + 8; ; ) {
        if (sa >= g[jc >> 2]) {
          j = 74;
          break a;
        }
        Ja = g[g[Gc >> 2] + (sa << 2) >> 2];
        mc(Ja, 0);
        sa += 1;
      }
    } else j = 74; else j = 74;
  } while (0);
  Ii(z);
  b = i;
}

zi.X = 1;

function Ai(a, f, d) {
  return f > (a < d ? a : d) ? f : a < d ? a : d;
}

function Hi(a, f) {
  var d = b;
  b += 20;
  var c, h, i, j, k;
  c = g[a + 4 >> 2] == 0 ? 6 : 1;
  a : do if (c == 1) {
    h = 0;
    var p = a + 36;
    if (h < g[p >> 2]) for (var o = a + 12, l = d + 16, m = a + 4, n = d, r = d + 8; ; ) {
      i = g[g[o >> 2] + (h << 2) >> 2];
      j = f + h * 152;
      g[l >> 2] = g[j + 144 >> 2];
      k = 0;
      c = k < g[j + 144 >> 2] ? 4 : 5;
      b : do if (c == 4) for (;;) if (q[n + (k << 2) >> 2] = q[j + k * 36 + 16 >> 2], q[r + (k << 2) >> 2] = q[j + k * 36 + 20 >> 2], k += 1, k >= g[j + 144 >> 2]) {
        c = 5;
        break b;
      } while (0);
      j = g[m >> 2];
      nb[g[g[j >> 2] + 20 >> 2]](j, i, d);
      h += 1;
      if (h >= g[p >> 2]) break a;
    } else c = 6;
  } while (0);
  b = d;
}

Hi.X = 1;

function lc(a, f) {
  Bg(a);
  Wg(a + 68);
  Oh(a + 102872);
  g[a + 102980 >> 2] = 0;
  g[a + 102984 >> 2] = 0;
  g[a + 102952 >> 2] = 0;
  g[a + 102956 >> 2] = 0;
  g[a + 102960 >> 2] = 0;
  g[a + 102964 >> 2] = 0;
  e[a + 102992] = 1;
  e[a + 102993] = 1;
  e[a + 102994] = 0;
  e[a + 102995] = 1;
  e[a + 102976] = 1;
  var d, c, h;
  d = f;
  c = a + 102968;
  for (h = d + 8; d < h; ) e[c++] = e[d++];
  g[a + 102868 >> 2] = 4;
  q[a + 102988 >> 2] = 0;
  g[a + 102948 >> 2] = a;
  var i;
  c = a + 102996;
  h = c + 32;
  i = 0;
  i < 0 && (i += 256);
  for (i = i + (i << 8) + (i << 16) + i * 16777216; c % 4 !== 0 && c < h; ) e[c++] = 0;
  c >>= 2;
  for (d = h >> 2; c < d; ) g[c++] = i;
  for (c <<= 2; c < h; ) e[c++] = 0;
}

lc.X = 1;

function Ac(a) {
  var f, d, c;
  f = g[a + 102952 >> 2];
  for (d = g[a + 102952 >> 2]; ; ) {
    if (d == 0) break;
    d = g[f + 96 >> 2];
    c = g[f + 100 >> 2];
    for (f = g[f + 100 >> 2]; ; ) {
      if (f == 0) break;
      f = g[c + 4 >> 2];
      g[c + 28 >> 2] = 0;
      ri(c, a);
      c = f;
    }
    f = d;
  }
  Xg(a + 68);
}

Ac.X = 1;

function Ji(a, f, d, c) {
  var h = b;
  b += 128;
  var i, j, k, p = h + 44, o, l = h + 96, m = h + 104, n = h + 112, r = h + 120, s;
  i = d < g[a + 28 >> 2] ? 2 : 1;
  i == 1 && X(Ki, 386, Li, Mi);
  i = c < g[a + 28 >> 2] ? 4 : 3;
  i == 3 && X(Ki, 387, Li, Ni);
  j = 0;
  var u = a + 28;
  i = j < g[u >> 2] ? 5 : 7;
  a : do if (i == 5) for (var w = a + 8, t = a + 20, A = a + 20, C = a + 24, z = a + 24; ; ) {
    k = g[g[w >> 2] + (j << 2) >> 2];
    var B = g[t >> 2] + j * 12, D;
    o = k + 44;
    for (D = o + 8; o < D; ) e[B++] = e[o++];
    q[g[A >> 2] + j * 12 + 8 >> 2] = q[k + 56 >> 2];
    B = g[C >> 2] + j * 12;
    o = k + 64;
    for (D = o + 8; o < D; ) e[B++] = e[o++];
    q[g[z >> 2] + j * 12 + 8 >> 2] = q[k + 72 >> 2];
    j += 1;
    if (j >= g[u >> 2]) break a;
  } while (0);
  g[h + 24 >> 2] = g[a + 12 >> 2];
  g[h + 28 >> 2] = g[a + 36 >> 2];
  g[h + 40 >> 2] = g[a >> 2];
  o = f;
  B = h;
  D = o + 24;
  if (B % 4 == o % 4) {
    for (; o % 4 !== 0 && o < D; ) e[B++] = e[o++];
    o >>= 2;
    B >>= 2;
    for (i = D >> 2; o < i; ) g[B++] = g[o++];
    o <<= 2;
    B <<= 2;
  }
  for (; o < D; ) e[B++] = e[o++];
  g[h + 32 >> 2] = g[a + 20 >> 2];
  g[h + 36 >> 2] = g[a + 24 >> 2];
  Bi(p, h);
  for (o = 0; ; ) {
    if (o >= g[f + 16 >> 2]) break;
    i = Oi(p, d, c);
    if (i & 1) break;
    o += 1;
  }
  i = g[g[a + 8 >> 2] + (d << 2) >> 2] + 36;
  o = g[a + 20 >> 2] + d * 12;
  B = i;
  for (D = o + 8; o < D; ) e[B++] = e[o++];
  q[g[g[a + 8 >> 2] + (d << 2) >> 2] + 52 >> 2] = q[g[a + 20 >> 2] + d * 12 + 8 >> 2];
  i = g[g[a + 8 >> 2] + (c << 2) >> 2] + 36;
  o = g[a + 20 >> 2] + c * 12;
  B = i;
  for (D = o + 8; o < D; ) e[B++] = e[o++];
  q[g[g[a + 8 >> 2] + (c << 2) >> 2] + 52 >> 2] = q[g[a + 20 >> 2] + c * 12 + 8 >> 2];
  Ci(p);
  for (o = 0; ; ) {
    if (o >= g[f + 12 >> 2]) break;
    Ei(p);
    o += 1;
  }
  f = q[f >> 2];
  c = 0;
  k = a + 28;
  i = c < g[k >> 2] ? 22 : 28;
  a : do if (i == 22) for (var u = a + 20, w = l, t = a + 20, A = a + 24, C = m, z = a + 24, H = a + 20, G = l, N = a + 20, M = a + 24, O = m, R = a + 24, W = a + 8, E = l, Q = m; ; ) {
    o = g[u >> 2] + c * 12;
    B = w;
    for (D = o + 8; o < D; ) e[B++] = e[o++];
    d = q[g[t >> 2] + c * 12 + 8 >> 2];
    o = g[A >> 2] + c * 12;
    B = C;
    for (D = o + 8; o < D; ) e[B++] = e[o++];
    j = q[g[z >> 2] + c * 12 + 8 >> 2];
    T(n, f, m);
    i = S(n, n) > 4 ? 24 : 25;
    i == 24 && (o = 2 / Nc(n), sg(m, o));
    o = f * j;
    i = o * o > 2.4674012660980225 ? 26 : 27;
    i == 26 && (o = 1.5707963705062866 / pd(o), j *= o);
    T(r, f, m);
    Sb(l, r);
    d += f * j;
    B = g[H >> 2] + c * 12;
    o = G;
    for (D = o + 8; o < D; ) e[B++] = e[o++];
    q[g[N >> 2] + c * 12 + 8 >> 2] = d;
    B = g[M >> 2] + c * 12;
    o = O;
    for (D = o + 8; o < D; ) e[B++] = e[o++];
    q[g[R >> 2] + c * 12 + 8 >> 2] = j;
    s = g[g[W >> 2] + (c << 2) >> 2];
    o = E;
    B = s + 44;
    for (D = o + 8; o < D; ) e[B++] = e[o++];
    q[s + 56 >> 2] = d;
    o = Q;
    B = s + 64;
    for (D = o + 8; o < D; ) e[B++] = e[o++];
    q[s + 72 >> 2] = j;
    yi(s);
    c += 1;
    if (c >= g[k >> 2]) break a;
  } while (0);
  Hi(a, g[p + 40 >> 2]);
  Ii(p);
  b = h;
}

Ji.X = 1;

function nc(a, f) {
  var d, c, h;
  d = fh(a) == 0 ? 2 : 1;
  d == 1 && X(Pi, 109, Vi, Wi);
  d = fh(a) ? 3 : 4;
  d == 3 ? c = 0 : d == 4 && (c = ig(a, 152), c == 0 ? (h = 0, d = 6) : d = 5, d == 5 && (nh(c, f, a), h = c), g[h + 92 >> 2] = 0, g[h + 96 >> 2] = g[a + 102952 >> 2], d = g[a + 102952 >> 2] != 0 ? 7 : 8, d == 7 && (g[g[a + 102952 >> 2] + 92 >> 2] = h), g[a + 102952 >> 2] = h, g[a + 102960 >> 2] += 1, c = h);
  return c;
}

nc.X = 1;

function Xi(a) {
  g[a + 28 >> 2] = 0;
  g[a + 36 >> 2] = 0;
  g[a + 32 >> 2] = 0;
}

function Yi(a, f) {
  (g[a + 28 >> 2] < g[a + 40 >> 2] ? 2 : 1) == 1 && X(Zi, 54, $i, aj);
  g[f + 8 >> 2] = g[a + 28 >> 2];
  g[g[a + 8 >> 2] + (g[a + 28 >> 2] << 2) >> 2] = f;
  g[a + 28 >> 2] += 1;
}

function bj(a) {
  return (g[a + 4 >> 2] & 4) == 4;
}

function cj(a, f) {
  (g[a + 36 >> 2] < g[a + 44 >> 2] ? 2 : 1) == 1 && X(Zi, 62, dj, ej);
  var d = g[a + 36 >> 2];
  g[a + 36 >> 2] = d + 1;
  g[g[a + 12 >> 2] + (d << 2) >> 2] = f;
}

function fj(a, f) {
  var d = b;
  b += 92;
  var c, h, i, j, k, p, o, l, m, n = d + 52, r = d + 84;
  q[a + 103008 >> 2] = 0;
  q[a + 103012 >> 2] = 0;
  q[a + 103016 >> 2] = 0;
  xi(d, g[a + 102960 >> 2], g[a + 102936 >> 2], g[a + 102964 >> 2], a + 68, g[a + 102944 >> 2]);
  h = g[a + 102952 >> 2];
  c = g[a + 102952 >> 2] != 0 ? 1 : 2;
  a : do if (c == 1) for (;;) if (Pa[h + 4 >> 1] = Ra[h + 4 >> 1] & 65534, h = i = g[h + 96 >> 2], i == 0) break a; while (0);
  h = g[a + 102932 >> 2];
  c = g[a + 102932 >> 2] != 0 ? 3 : 4;
  a : do if (c == 3) for (;;) if (g[h + 4 >> 2] &= -2, h = i = g[h + 12 >> 2], i == 0) break a; while (0);
  h = g[a + 102956 >> 2];
  c = g[a + 102956 >> 2] != 0 ? 5 : 6;
  a : do if (c == 5) for (;;) if (e[h + 60] = 0, h = i = g[h + 12 >> 2], i == 0) break a; while (0);
  h = g[a + 102960 >> 2];
  i = hh(a + 68, h << 2);
  j = g[a + 102952 >> 2];
  var s = a + 102968, u = a + 102976, w = n + 12, t = a + 103008, A = n + 16, C = a + 103012, z = n + 20, B = a + 103016, D = d + 28, H = d + 8;
  for (c = g[a + 102952 >> 2]; ; ) {
    if (c == 0) break;
    c = (Ra[j + 4 >> 1] & 1) != 0 ? 65 : 18;
    a : do if (c == 18) if (Th(j) == 0) c = 65; else if ((Ra[j + 4 >> 1] & 32) == 32 == 0) c = 65; else if (g[j >> 2] == 0) c = 65; else {
      Xi(d);
      p = k = 0;
      k = p + 1;
      g[i + (p << 2) >> 2] = j;
      Pa[j + 4 >> 1] = (Ra[j + 4 >> 1] | 1) & 65535;
      b : for (;;) {
        if (k <= 0) {
          c = 58;
          break;
        }
        k = c = k - 1;
        p = g[i + (c << 2) >> 2];
        c = (Ra[p + 4 >> 1] & 32) == 32 == 1 ? 29 : 28;
        c == 28 && X(Pi, 445, gj, hj);
        Yi(d, p);
        mc(p, 1);
        if (g[p >> 2] == 0) c = 25; else {
          o = g[p + 112 >> 2];
          for (l = g[p + 112 >> 2]; ; ) {
            if (l == 0) {
              c = 47;
              break;
            }
            l = g[o + 4 >> 2];
            c = (g[l + 4 >> 2] & 1) != 0 ? 46 : 36;
            c == 36 && (bj(l) == 0 ? c = 46 : Sh(l) == 0 ? c = 46 : (c = e[g[l + 48 >> 2] + 38] & 1, m = e[g[l + 52 >> 2] + 38] & 1, c & 1 ? c = 46 : m & 1 ? c = 46 : (cj(d, l), g[l + 4 >> 2] |= 1, l = g[o >> 2], (Ra[l + 4 >> 1] & 1) != 0 ? c = 46 : (c = k < h ? 45 : 44, c == 44 && X(Pi, 495, gj, ij), m = k, k = m + 1, g[i + (m << 2) >> 2] = l, Pa[l + 4 >> 1] = (Ra[l + 4 >> 1] | 1) & 65535))));
            o = l = Wa[o + 12 >> 2];
          }
          o = g[p + 108 >> 2];
          for (p = g[p + 108 >> 2]; ; ) {
            if (p == 0) {
              c = 25;
              continue b;
            }
            c = (e[g[o + 4 >> 2] + 60] & 1) == 1 ? 57 : 50;
            c == 50 && (p = g[o >> 2], (Ra[p + 4 >> 1] & 32) == 32 == 0 ? c = 57 : (c = d, l = g[o + 4 >> 2], (g[c + 32 >> 2] < g[c + 48 >> 2] ? 2 : 1) == 1 && X(Zi, 68, jj, kj), m = g[c + 32 >> 2], g[c + 32 >> 2] = m + 1, g[g[c + 16 >> 2] + (m << 2) >> 2] = l, e[g[o + 4 >> 2] + 60] = 1, (Ra[p + 4 >> 1] & 1) != 0 ? c = 57 : (c = k < h ? 56 : 55, c == 55 && X(Pi, 524, gj, ij), l = k, k = l + 1, g[i + (l << 2) >> 2] = p, Pa[p + 4 >> 1] = (Ra[p + 4 >> 1] | 1) & 65535)));
            o = p = Wa[o + 12 >> 2];
          }
        }
      }
      zi(d, n, f, s, e[u] & 1);
      q[t >> 2] += q[w >> 2];
      q[C >> 2] += q[A >> 2];
      q[B >> 2] += q[z >> 2];
      for (k = 0; ; ) {
        if (k >= g[D >> 2]) break a;
        p = g[g[H >> 2] + (k << 2) >> 2];
        c = g[p >> 2] == 0 ? 63 : 64;
        c == 63 && (Pa[p + 4 >> 1] = Ra[p + 4 >> 1] & 65534);
        k += 1;
      }
    } while (0);
    j = c = Wa[j + 96 >> 2];
  }
  bh(a + 68, i);
  kh(r);
  n = g[a + 102952 >> 2];
  for (h = g[a + 102952 >> 2]; ; ) {
    if (h == 0) break;
    c = (Ra[n + 4 >> 1] & 1) == 0 ? 74 : 71;
    c == 71 && (g[n >> 2] == 0 || Ch(n));
    n = h = g[n + 96 >> 2];
  }
  n = a + 102872;
  $h(n, n);
  r = mh(r);
  q[a + 103020 >> 2] = r;
  wi(d);
  b = d;
}

fj.X = 1;

function lj(a, f) {
  var d = b;
  b += 332;
  var c, h, i, j, k, p, o, l, m, n, r, s, u, w, t = d + 52, A = d + 184, C = d + 192, z = d + 228, B = d + 264, D = d + 272, H = d + 308;
  xi(d, 64, 32, 0, a + 68, g[a + 102944 >> 2]);
  c = e[a + 102995] & 1 ? 2 : 1;
  a : do if (c == 2) {
    h = g[a + 102952 >> 2];
    c = g[a + 102952 >> 2] != 0 ? 3 : 4;
    b : do if (c == 3) for (;;) {
      Pa[h + 4 >> 1] = Ra[h + 4 >> 1] & 65534;
      q[h + 60 >> 2] = 0;
      var G = g[h + 96 >> 2];
      h = G;
      if (G == 0) {
        c = 4;
        break b;
      }
    } while (0);
    h = g[a + 102932 >> 2];
    if (g[a + 102932 >> 2] == 0) c = 1; else for (;;) if (g[h + 4 >> 2] &= -34, g[h + 128 >> 2] = 0, q[h + 132 >> 2] = 1, h = G = g[h + 12 >> 2], G == 0) {
      c = 1;
      break a;
    }
  } while (0);
  h = a + 102932;
  var G = t + 28, N = t + 56, M = t + 92, O = t + 128, R = A + 4, W = a + 102944, E = B + 4, Q = d + 28, K = d + 40, P = d + 36, aa = d + 44, ba = a + 102944, Y = H + 4, ra = H + 8, ca = H + 16, ea = H + 12, U = H + 20, fa = d + 28, wa = d + 8, Da = a + 102872, ha = a + 102994;
  a : for (;;) {
    i = 0;
    j = 1;
    k = g[h >> 2];
    for (c = g[h >> 2]; ; ) {
      if (c == 0) break;
      c = bj(k) == 0 ? 57 : 14;
      b : do if (c == 14) if (g[k + 128 >> 2] > 8) c = 57; else {
        p = 1;
        c = (g[k + 4 >> 2] & 32) != 0 ? 16 : 17;
        if (c == 16) p = q[k + 132 >> 2]; else if (c == 17) {
          o = Eh(k);
          l = Fh(k);
          if (e[o + 38] & 1) break b;
          if (e[l + 38] & 1) break b;
          m = Rh(o);
          n = Rh(l);
          r = g[m >> 2];
          s = g[n >> 2];
          c = r == 2 ? 26 : 24;
          c == 24 && (s == 2 || X(Pi, 641, mj, nj));
          if (Th(m)) c = 28; else {
            var sa = 0;
            c = 29;
          }
          c == 28 && (sa = r != 0);
          u = sa;
          if (Th(n)) c = 31; else {
            var Ja = 0;
            c = 32;
          }
          c == 31 && (Ja = s != 0);
          w = Ja;
          c = (u & 1) == 0 ? 33 : 34;
          if (c == 33 && (w & 1) == 0) break b;
          if (oj(m)) {
            var Sa = 1;
            c = 36;
          } else c = 35;
          c == 35 && (Sa = r != 2);
          r = Sa;
          if (oj(n)) {
            var Ta = 1;
            c = 38;
          } else c = 37;
          c == 37 && (Ta = s != 2);
          s = Ta;
          c = (r & 1) == 0 ? 39 : 40;
          if (c == 39 && (s & 1) == 0) break b;
          s = q[m + 60 >> 2];
          r = q[n + 60 >> 2];
          c = q[m + 60 >> 2] < q[n + 60 >> 2] ? 41 : 42;
          c == 41 ? (s = r, pj(m + 28, s)) : c == 42 && r < q[m + 60 >> 2] && (s = q[m + 60 >> 2], pj(n + 28, s));
          c = s < 1 ? 46 : 45;
          c == 45 && X(Pi, 676, mj, qj);
          c = g[k + 56 >> 2];
          r = g[k + 60 >> 2];
          u = t;
          qd(u);
          qd(u + 28);
          rd(t, rj(o), c);
          rd(G, rj(l), r);
          o = m + 28;
          l = N;
          m = o + 36;
          if (l % 4 == o % 4) {
            for (; o % 4 !== 0 && o < m; ) e[l++] = e[o++];
            o >>= 2;
            l >>= 2;
            for (r = m >> 2; o < r; ) g[l++] = g[o++];
            o <<= 2;
            l <<= 2;
          }
          for (; o < m; ) e[l++] = e[o++];
          o = n + 28;
          l = M;
          m = o + 36;
          if (l % 4 == o % 4) {
            for (; o % 4 !== 0 && o < m; ) e[l++] = e[o++];
            o >>= 2;
            l >>= 2;
            for (r = m >> 2; o < r; ) g[l++] = g[o++];
            o <<= 2;
            l <<= 2;
          }
          for (; o < m; ) e[l++] = e[o++];
          q[O >> 2] = 1;
          df(A, t);
          n = q[R >> 2];
          c = g[A >> 2] == 3 ? 52 : 53;
          c == 52 ? p = s + (1 - s) * n < 1 ? s + (1 - s) * n : 1 : c == 53 && (p = 1);
          q[k + 132 >> 2] = p;
          g[k + 4 >> 2] |= 32;
        }
        p < j ? (i = k, j = p) : c = 57;
      } while (0);
      k = c = Wa[k + 12 >> 2];
    }
    if (i == 0) {
      c = 60;
      break;
    }
    if (.9999988079071045 < j) {
      c = 60;
      break;
    }
    k = Eh(i);
    c = Fh(i);
    k = Rh(k);
    p = Rh(c);
    o = k + 28;
    l = C;
    m = o + 36;
    if (l % 4 == o % 4) {
      for (; o % 4 !== 0 && o < m; ) e[l++] = e[o++];
      o >>= 2;
      l >>= 2;
      for (r = m >> 2; o < r; ) g[l++] = g[o++];
      o <<= 2;
      l <<= 2;
    }
    for (; o < m; ) e[l++] = e[o++];
    o = p + 28;
    l = z;
    m = o + 36;
    if (l % 4 == o % 4) {
      for (; o % 4 !== 0 && o < m; ) e[l++] = e[o++];
      o >>= 2;
      l >>= 2;
      for (r = m >> 2; o < r; ) g[l++] = g[o++];
      o <<= 2;
      l <<= 2;
    }
    for (; o < m; ) e[l++] = e[o++];
    sj(k, j);
    sj(p, j);
    Zh(i, g[W >> 2]);
    g[i + 4 >> 2] &= -33;
    g[i + 128 >> 2] += 1;
    c = bj(i) == 0 ? 71 : 69;
    do if (c == 69) if (Sh(i) == 0) c = 71; else {
      mc(k, 1);
      mc(p, 1);
      Xi(d);
      Yi(d, k);
      Yi(d, p);
      cj(d, i);
      Pa[k + 4 >> 1] = (Ra[k + 4 >> 1] | 1) & 65535;
      Pa[p + 4 >> 1] = (Ra[p + 4 >> 1] | 1) & 65535;
      g[i + 4 >> 2] |= 1;
      g[B >> 2] = k;
      g[E >> 2] = p;
      for (c = i = 0; ; ) {
        if (c >= 2) break;
        n = g[B + (i << 2) >> 2];
        c = g[n >> 2] == 2 ? 81 : 105;
        b : do if (c == 81) {
          s = g[n + 112 >> 2];
          for (o = g[n + 112 >> 2]; ; ) {
            if (o == 0) break b;
            if (g[Q >> 2] == g[K >> 2]) break b;
            if (g[P >> 2] == g[aa >> 2]) break b;
            u = g[s + 4 >> 2];
            c = (g[u + 4 >> 2] & 1) != 0 ? 104 : 86;
            c : do if (c == 86) {
              w = g[s >> 2];
              c = g[w >> 2] == 2 ? 87 : 89;
              do if (c == 87) if (oj(n) != 0) c = 89; else if (oj(w) == 0) {
                c = 104;
                break c;
              } while (0);
              c = e[g[u + 48 >> 2] + 38] & 1;
              o = e[g[u + 52 >> 2] + 38] & 1;
              if (c & 1) c = 104; else if (o & 1) c = 104; else {
                o = w + 28;
                l = D;
                m = o + 36;
                if (l % 4 == o % 4) {
                  for (; o % 4 !== 0 && o < m; ) e[l++] = e[o++];
                  o >>= 2;
                  l >>= 2;
                  for (r = m >> 2; o < r; ) g[l++] = g[o++];
                  o <<= 2;
                  l <<= 2;
                }
                for (; o < m; ) e[l++] = e[o++];
                c = (Ra[w + 4 >> 1] & 1) == 0 ? 92 : 93;
                c == 92 && sj(w, j);
                Zh(u, g[ba >> 2]);
                c = bj(u) == 0 ? 95 : 96;
                if (c == 95) {
                  o = D;
                  l = w + 28;
                  m = o + 36;
                  if (l % 4 == o % 4) {
                    for (; o % 4 !== 0 && o < m; ) e[l++] = e[o++];
                    o >>= 2;
                    l >>= 2;
                    for (r = m >> 2; o < r; ) g[l++] = g[o++];
                    o <<= 2;
                    l <<= 2;
                  }
                  for (; o < m; ) e[l++] = e[o++];
                  yi(w);
                } else if (c == 96) if (c = Sh(u) == 0 ? 98 : 99, c == 98) {
                  o = D;
                  l = w + 28;
                  m = o + 36;
                  if (l % 4 == o % 4) {
                    for (; o % 4 !== 0 && o < m; ) e[l++] = e[o++];
                    o >>= 2;
                    l >>= 2;
                    for (r = m >> 2; o < r; ) g[l++] = g[o++];
                    o <<= 2;
                    l <<= 2;
                  }
                  for (; o < m; ) e[l++] = e[o++];
                  yi(w);
                } else if (c == 99) {
                  g[u + 4 >> 2] |= 1;
                  cj(d, u);
                  if ((Ra[w + 4 >> 1] & 1) != 0) {
                    c = 104;
                    break c;
                  }
                  Pa[w + 4 >> 1] = (Ra[w + 4 >> 1] | 1) & 65535;
                  c = g[w >> 2] != 0 ? 102 : 103;
                  c == 102 && mc(w, 1);
                  Yi(d, w);
                }
              }
            } while (0);
            s = o = Wa[s + 12 >> 2];
          }
        } while (0);
        i = c = i + 1;
      }
      q[H >> 2] = (1 - j) * q[f >> 2];
      q[Y >> 2] = 1 / q[H >> 2];
      q[ra >> 2] = 1;
      g[ca >> 2] = 20;
      g[ea >> 2] = g[f + 12 >> 2];
      e[U] = 0;
      Ji(d, H, g[k + 8 >> 2], g[p + 8 >> 2]);
      for (j = 0; ; ) {
        if (j >= g[fa >> 2]) break;
        i = g[g[wa >> 2] + (j << 2) >> 2];
        Pa[i + 4 >> 1] = Ra[i + 4 >> 1] & 65534;
        c = g[i >> 2] != 2 ? 113 : 110;
        b : do if (c == 110) if (Ch(i), k = g[i + 112 >> 2], g[i + 112 >> 2] == 0) c = 113; else for (;;) if (g[g[k + 4 >> 2] + 4 >> 2] &= -34, k = p = g[k + 12 >> 2], p == 0) break b; while (0);
        j += 1;
      }
      $h(Da, Da);
      if (e[ha] & 1) {
        c = 116;
        break a;
      } else {
        c = 6;
        continue a;
      }
    } while (0);
    j = i;
    i = ga;
    n = g[j + 4 >> 2];
    i = 2;
    i == 1 ? g[j + 4 >> 2] = n | 4 : i == 2 && (g[j + 4 >> 2] = n & -5);
    o = C;
    l = k + 28;
    m = o + 36;
    if (l % 4 == o % 4) {
      for (; o % 4 !== 0 && o < m; ) e[l++] = e[o++];
      o >>= 2;
      l >>= 2;
      for (r = m >> 2; o < r; ) g[l++] = g[o++];
      o <<= 2;
      l <<= 2;
    }
    for (; o < m; ) e[l++] = e[o++];
    o = z;
    l = p + 28;
    m = o + 36;
    if (l % 4 == o % 4) {
      for (; o % 4 !== 0 && o < m; ) e[l++] = e[o++];
      o >>= 2;
      l >>= 2;
      for (r = m >> 2; o < r; ) g[l++] = g[o++];
      o <<= 2;
      l <<= 2;
    }
    for (; o < m; ) e[l++] = e[o++];
    yi(k);
    yi(p);
  }
  c == 60 ? e[a + 102995] = 1 : c == 116 && (e[a + 102995] = 0);
  wi(d);
  b = d;
}

lj.X = 1;

function oj(a) {
  return (Ra[a + 4 >> 1] & 8) == 8;
}

function pj(a, f) {
  var d = b;
  b += 24;
  var c, h = d + 8, i = d + 16;
  (q[a + 32 >> 2] < 1 ? 2 : 1) == 1 && X(tj, 715, uj, qj);
  c = (f - q[a + 32 >> 2]) / (1 - q[a + 32 >> 2]);
  var j = a + 8;
  T(h, 1 - c, a + 8);
  T(i, c, a + 16);
  V(d, h, i);
  h = d;
  for (i = h + 8; h < i; ) e[j++] = e[h++];
  q[a + 24 >> 2] = (1 - c) * q[a + 24 >> 2] + c * q[a + 28 >> 2];
  q[a + 32 >> 2] = f;
  b = d;
}

pj.X = 1;

function rj(a) {
  return g[a + 12 >> 2];
}

function sj(a, f) {
  var d = b;
  b += 16;
  var c = d + 8;
  pj(a + 28, f);
  var h, i, j;
  h = a + 36;
  i = a + 44;
  for (j = h + 8; h < j; ) e[i++] = e[h++];
  q[a + 56 >> 2] = q[a + 52 >> 2];
  cf(a + 20, q[a + 56 >> 2]);
  i = a + 12;
  h = a + 44;
  Yc(c, a + 20, a + 28);
  J(d, h, c);
  h = d;
  for (j = h + 8; h < j; ) e[i++] = e[h++];
  b = d;
}

function sc(a, f, d, c) {
  var h = b;
  b += 56;
  var i, j = h + 8, k = h + 32, p = h + 40, o = h + 48;
  kh(h);
  i = (g[a + 102868 >> 2] & 1) != 0 ? 1 : 2;
  i == 1 && (i = a + 102872, $h(i, i), g[a + 102868 >> 2] &= -2);
  g[a + 102868 >> 2] |= 2;
  q[j >> 2] = f;
  g[j + 12 >> 2] = d;
  g[j + 16 >> 2] = c;
  i = f > 0 ? 3 : 4;
  i == 3 ? q[j + 4 >> 2] = 1 / f : i == 4 && (q[j + 4 >> 2] = 0);
  q[j + 8 >> 2] = q[a + 102988 >> 2] * f;
  e[j + 20] = e[a + 102992] & 1;
  kh(k);
  Wh(a + 102872);
  f = mh(k);
  q[a + 103e3 >> 2] = f;
  i = e[a + 102995] & 1 ? 6 : 8;
  i == 6 && q[j >> 2] > 0 && (kh(p), fj(a, j), p = mh(p), q[a + 103004 >> 2] = p);
  i = e[a + 102993] & 1 ? 9 : 11;
  i == 9 && q[j >> 2] > 0 && (kh(o), lj(a, j), o = mh(o), q[a + 103024 >> 2] = o);
  i = q[j >> 2] > 0 ? 12 : 13;
  i == 12 && (q[a + 102988 >> 2] = q[j + 4 >> 2]);
  i = (g[a + 102868 >> 2] & 4) != 0 ? 14 : 15;
  if (i == 14) {
    o = g[a + 102952 >> 2];
    j = g[a + 102952 >> 2] != 0 ? 1 : 2;
    a : do if (j == 1) for (;;) if (Xb(o + 76), q[o + 84 >> 2] = 0, o = p = g[o + 96 >> 2], p == 0) break a; while (0);
  }
  g[a + 102868 >> 2] &= -3;
  j = mh(h);
  q[a + 102996 >> 2] = j;
  b = h;
}

sc.X = 1;

function vj(a) {
  return g[g[a + 12 >> 2] + 4 >> 2];
}

function wj(a, f, d) {
  var c, a = f + 32, f = d + 32, d = Pa[a + 4 >> 1] == Pa[f + 4 >> 1] ? 1 : 3;
  d == 1 && (Pa[a + 4 >> 1] == 0 ? d = 3 : (c = Pa[a + 4 >> 1] > 0, d = 6));
  if (d == 3) {
    if ((Ra[f >> 1] & Ra[a + 2 >> 1]) != 0) d = 4; else var h = 0, d = 5;
    d == 4 && (h = (Ra[f + 2 >> 1] & Ra[a >> 1]) != 0);
    c = h & 1;
  }
  return c;
}

wj.X = 1;

function xj(a, f, d, c, h) {
  yj(a, f, d, c, h);
  g[a >> 2] = zj + 8;
  f = vj(g[a + 48 >> 2]) == 3 ? 2 : 1;
  f == 1 && X(Aj, 43, Bj, Cj);
  f = vj(g[a + 52 >> 2]) == 0 ? 4 : 3;
  f == 3 && X(Aj, 44, Bj, Dj);
}

xj.X = 1;

function Ej(a, f, d, c) {
  var h = b;
  b += 48;
  var i;
  i = rj(g[a + 48 >> 2]);
  Yb(h);
  xf(i, h, g[a + 56 >> 2]);
  Pc(f, h, d, rj(g[a + 52 >> 2]), c);
  b = h;
}

Ej.X = 1;

function Fj(a, f, d, c, h) {
  yj(a, f, d, c, h);
  g[a >> 2] = Gj + 8;
  f = vj(g[a + 48 >> 2]) == 3 ? 2 : 1;
  f == 1 && X(Hj, 43, Ij, Cj);
  f = vj(g[a + 52 >> 2]) == 2 ? 4 : 3;
  f == 3 && X(Hj, 44, Ij, Jj);
}

Fj.X = 1;

function Kj(a, f, d, c) {
  var h = b;
  b += 48;
  var i;
  i = rj(g[a + 48 >> 2]);
  Yb(h);
  xf(i, h, g[a + 56 >> 2]);
  a = rj(g[a + 52 >> 2]);
  i = b;
  b += 252;
  Vc(i, f, h, d, a, c);
  b = i;
  b = h;
}

Kj.X = 1;

function Lj(a, f, d) {
  yj(a, f, 0, d, 0);
  g[a >> 2] = Mj + 8;
  f = vj(g[a + 48 >> 2]) == 0 ? 2 : 1;
  f == 1 && X(Nj, 44, Oj, Pj);
  f = vj(g[a + 52 >> 2]) == 0 ? 4 : 3;
  f == 3 && X(Nj, 45, Oj, Dj);
}

function Qj(a, f, d, c) {
  (0 <= d & d < 4 ? 2 : 1) == 1 && X(Rj, 54, Sj, Tj);
  (0 <= c & c < 4 ? 4 : 3) == 3 && X(Rj, 55, Sj, Uj);
  g[Vj + d * 48 + c * 12 >> 2] = a;
  g[Vj + d * 48 + c * 12 + 4 >> 2] = f;
  e[Vj + d * 48 + c * 12 + 8] = 1;
  if ((d != c ? 5 : 6) == 5) g[Vj + c * 48 + d * 12 >> 2] = a, g[Vj + c * 48 + d * 12 + 4 >> 2] = f, e[Vj + c * 48 + d * 12 + 8] = 0;
}

Qj.X = 1;

function hi(a, f, d, c, h) {
  var i, j, k, p, o;
  i = (e[Wj] & 1) == 0 ? 1 : 2;
  i == 1 && (Qj(8, 10, 0, 0), Qj(12, 14, 2, 0), Qj(16, 18, 2, 2), Qj(20, 22, 1, 0), Qj(24, 26, 1, 2), Qj(28, 30, 3, 0), Qj(32, 34, 3, 2), e[Wj] = 1);
  k = vj(a);
  p = vj(d);
  (0 <= k & k < 4 ? 4 : 3) == 3 && X(Rj, 80, Xj, Tj);
  (0 <= p & p < 4 ? 6 : 5) == 5 && X(Rj, 81, Xj, Uj);
  o = g[Vj + k * 48 + p * 12 >> 2];
  i = g[Vj + k * 48 + p * 12 >> 2] != 0 ? 7 : 10;
  i == 7 ? (i = e[Vj + k * 48 + p * 12 + 8] & 1 ? 8 : 9, i == 8 ? j = nb[o](a, f, d, c, h) : i == 9 && (j = nb[o](d, c, a, f, h))) : i == 10 && (j = 0);
  return j;
}

hi.X = 1;

function Vh(a, f) {
  var d, c, h;
  d = (e[Wj] & 1) == 1 ? 2 : 1;
  d == 1 && X(Rj, 103, Yj, Zj);
  d = g[a + 124 >> 2] > 0 ? 3 : 4;
  d == 3 && (mc(Rh(Eh(a)), 1), mc(Rh(Fh(a)), 1));
  c = vj(Eh(a));
  h = vj(Fh(a));
  d = 0 <= c ? 5 : 6;
  d == 5 && (d = h < 4 ? 7 : 6);
  d == 6 && X(Rj, 114, Yj, $j);
  d = 0 <= c ? 8 : 9;
  d == 8 && (d = h < 4 ? 10 : 9);
  d == 9 && X(Rj, 115, Yj, $j);
  nb[g[Vj + c * 48 + h * 12 + 4 >> 2]](a, f);
}

Vh.X = 1;

function yj(a, f, d, c, h) {
  g[a >> 2] = ak + 8;
  g[a + 4 >> 2] = 4;
  g[a + 48 >> 2] = f;
  g[a + 52 >> 2] = c;
  g[a + 56 >> 2] = d;
  g[a + 60 >> 2] = h;
  g[a + 124 >> 2] = 0;
  g[a + 8 >> 2] = 0;
  g[a + 12 >> 2] = 0;
  g[a + 20 >> 2] = 0;
  g[a + 24 >> 2] = 0;
  g[a + 28 >> 2] = 0;
  g[a + 16 >> 2] = 0;
  g[a + 36 >> 2] = 0;
  g[a + 40 >> 2] = 0;
  g[a + 44 >> 2] = 0;
  g[a + 32 >> 2] = 0;
  g[a + 128 >> 2] = 0;
  f = Oc(q[g[a + 48 >> 2] + 16 >> 2] * q[g[a + 52 >> 2] + 16 >> 2]);
  q[a + 136 >> 2] = f;
  q[a + 140 >> 2] = q[g[a + 48 >> 2] + 20 >> 2] > q[g[a + 52 >> 2] + 20 >> 2] ? q[g[a + 48 >> 2] + 20 >> 2] : q[g[a + 52 >> 2] + 20 >> 2];
}

yj.X = 1;

function Zh(a, f) {
  var d = b;
  b += 68;
  var c, h, i, j, k, p, o, l, m, n, r, s = d + 64, u, w, t;
  m = a + 64;
  w = d;
  t = m + 64;
  if (w % 4 == m % 4) {
    for (; m % 4 !== 0 && m < t; ) e[w++] = e[m++];
    m >>= 2;
    w >>= 2;
    for (i = t >> 2; m < i; ) g[w++] = g[m++];
    m <<= 2;
    w <<= 2;
  }
  for (; m < t; ) e[w++] = e[m++];
  g[a + 4 >> 2] |= 4;
  h = 0;
  i = (g[a + 4 >> 2] & 2) == 2;
  c = e[g[a + 48 >> 2] + 38] & 1;
  j = e[g[a + 52 >> 2] + 38] & 1;
  c & 1 ? (k = 1, c = 2) : c = 1;
  c == 1 && (k = j & 1);
  j = Rh(g[a + 48 >> 2]);
  p = Rh(g[a + 52 >> 2]);
  o = j + 12;
  l = p + 12;
  c = k & 1 ? 3 : 4;
  do if (c == 3) {
    m = rj(g[a + 48 >> 2]);
    h = rj(g[a + 52 >> 2]);
    r = m;
    var A = g[a + 56 >> 2], C = h, z = g[a + 60 >> 2];
    n = o;
    m = l;
    h = b;
    b += 128;
    w = h + 92;
    t = h + 104;
    var B = h;
    qd(B);
    qd(B + 28);
    rd(h, r, A);
    rd(h + 28, C, z);
    A = h + 56;
    B = z = C = r = ga;
    r = n;
    C = A;
    z = r + 16;
    if (C % 4 == r % 4) {
      for (; r % 4 !== 0 && r < z; ) e[C++] = e[r++];
      r >>= 2;
      C >>= 2;
      for (B = z >> 2; r < B; ) g[C++] = g[r++];
      r <<= 2;
      C <<= 2;
    }
    for (; r < z; ) e[C++] = e[r++];
    n = h + 72;
    r = m;
    C = n;
    z = r + 16;
    if (C % 4 == r % 4) {
      for (; r % 4 !== 0 && r < z; ) e[C++] = e[r++];
      r >>= 2;
      C >>= 2;
      for (B = z >> 2; r < B; ) g[C++] = g[r++];
      r <<= 2;
      C <<= 2;
    }
    for (; r < z; ) e[C++] = e[r++];
    e[h + 88] = 1;
    Pa[w + 4 >> 1] = 0;
    Cd(t, w, h);
    m = q[t + 16 >> 2] < 11920928955078125e-22;
    b = h;
    h = m;
    g[a + 124 >> 2] = 0;
  } else if (c == 4) {
    nb[g[g[a >> 2] >> 2]](a, a + 64, o, l);
    h = g[a + 124 >> 2] > 0;
    n = 0;
    A = a + 124;
    c = n < g[A >> 2] ? 5 : 12;
    a : do if (c == 5) for (var C = a + 64, z = s, B = d + 60, D = d, H = s; ; ) {
      r = C + n * 20;
      q[r + 8 >> 2] = 0;
      q[r + 12 >> 2] = 0;
      m = r + 16;
      w = z;
      for (t = m + 4; m < t; ) e[w++] = e[m++];
      for (m = 0; ; ) {
        if (m >= g[B >> 2]) {
          c = 11;
          break;
        }
        u = D + m * 20;
        if (g[u + 16 >> 2] == g[H >> 2]) {
          c = 9;
          break;
        }
        m += 1;
      }
      c == 9 && (q[r + 8 >> 2] = q[u + 8 >> 2], q[r + 12 >> 2] = q[u + 12 >> 2]);
      n += 1;
      if (n >= g[A >> 2]) {
        c = 12;
        break a;
      }
    } while (0);
    (h & 1) == (i & 1) ? c = 14 : (mc(j, 1), mc(p, 1));
  } while (0);
  s = g[a + 4 >> 2];
  c = h & 1 ? 15 : 16;
  c == 15 ? g[a + 4 >> 2] = s | 2 : c == 16 && (g[a + 4 >> 2] = s & -3);
  if (((i & 1) == 0 ? 18 : 21) == 18 && (h & 1) == 1 && f != 0) nb[g[g[f >> 2] + 8 >> 2]](f, a);
  if (((i & 1) == 1 ? 22 : 25) == 22 && (h & 1) == 0 && f != 0) nb[g[g[f >> 2] + 12 >> 2]](f, a);
  if (((k & 1) == 0 ? 26 : 29) == 26 && h & 1 && f != 0) nb[g[g[f >> 2] + 16 >> 2]](f, a, d);
  b = d;
}

Zh.X = 1;

function bk(a) {
  q[a >> 2] = 0;
  q[a + 8 >> 2] = 0;
  q[a + 4 >> 2] = 0;
  q[a + 12 >> 2] = 0;
}

function Ii(a) {
  bh(g[a + 32 >> 2], g[a + 40 >> 2]);
  bh(g[a + 32 >> 2], g[a + 36 >> 2]);
}

function Bi(a, f) {
  var d, c, h, i, j, k, p, o, l, m, n, r, s;
  n = f;
  r = a;
  s = n + 24;
  if (r % 4 == n % 4) {
    for (; n % 4 !== 0 && n < s; ) e[r++] = e[n++];
    n >>= 2;
    r >>= 2;
    for (c = s >> 2; n < c; ) g[r++] = g[n++];
    n <<= 2;
    r <<= 2;
  }
  for (; n < s; ) e[r++] = e[n++];
  g[a + 32 >> 2] = g[f + 40 >> 2];
  g[a + 48 >> 2] = g[f + 28 >> 2];
  c = hh(g[a + 32 >> 2], g[a + 48 >> 2] * 88);
  g[a + 36 >> 2] = c;
  c = hh(g[a + 32 >> 2], g[a + 48 >> 2] * 152);
  g[a + 40 >> 2] = c;
  g[a + 24 >> 2] = g[f + 32 >> 2];
  g[a + 28 >> 2] = g[f + 36 >> 2];
  g[a + 44 >> 2] = g[f + 24 >> 2];
  c = 0;
  var u = a + 48;
  d = c < g[u >> 2] ? 1 : 10;
  a : do if (d == 1) for (var w = a + 44, t = a + 40, A = a + 36, C = a + 20, z = a + 8, B = a + 8; ; ) {
    h = g[g[w >> 2] + (c << 2) >> 2];
    i = g[h + 48 >> 2];
    d = g[h + 52 >> 2];
    j = rj(i);
    k = rj(d);
    j = q[j + 8 >> 2];
    p = q[k + 8 >> 2];
    o = Rh(i);
    l = Rh(d);
    i = h + 64;
    k = g[i + 60 >> 2];
    d = g[i + 60 >> 2] > 0 ? 4 : 3;
    d == 3 && X(ck, 71, dk, ek);
    m = g[t >> 2] + c * 152;
    q[m + 136 >> 2] = q[h + 136 >> 2];
    q[m + 140 >> 2] = q[h + 140 >> 2];
    g[m + 112 >> 2] = g[o + 8 >> 2];
    g[m + 116 >> 2] = g[l + 8 >> 2];
    q[m + 120 >> 2] = q[o + 120 >> 2];
    q[m + 124 >> 2] = q[l + 120 >> 2];
    q[m + 128 >> 2] = q[o + 128 >> 2];
    q[m + 132 >> 2] = q[l + 128 >> 2];
    g[m + 148 >> 2] = c;
    g[m + 144 >> 2] = k;
    bk(m + 96);
    bk(m + 80);
    h = g[A >> 2] + c * 88;
    g[h + 32 >> 2] = g[o + 8 >> 2];
    g[h + 36 >> 2] = g[l + 8 >> 2];
    q[h + 40 >> 2] = q[o + 120 >> 2];
    q[h + 44 >> 2] = q[l + 120 >> 2];
    n = o + 28;
    r = h + 48;
    for (s = n + 8; n < s; ) e[r++] = e[n++];
    n = l + 28;
    r = h + 56;
    for (s = n + 8; n < s; ) e[r++] = e[n++];
    q[h + 64 >> 2] = q[o + 128 >> 2];
    q[h + 68 >> 2] = q[l + 128 >> 2];
    n = i + 40;
    r = h + 16;
    for (s = n + 8; n < s; ) e[r++] = e[n++];
    n = i + 48;
    r = h + 24;
    for (s = n + 8; n < s; ) e[r++] = e[n++];
    g[h + 84 >> 2] = k;
    q[h + 76 >> 2] = j;
    q[h + 80 >> 2] = p;
    g[h + 72 >> 2] = g[i + 56 >> 2];
    j = 0;
    d = j < k ? 5 : 9;
    b : do if (d == 5) for (;;) {
      p = i + j * 20;
      o = m + j * 36;
      d = e[C] & 1 ? 6 : 7;
      d == 6 ? (q[o + 16 >> 2] = q[z >> 2] * q[p + 8 >> 2], q[o + 20 >> 2] = q[B >> 2] * q[p + 12 >> 2]) : d == 7 && (q[o + 16 >> 2] = 0, q[o + 20 >> 2] = 0);
      Xb(o);
      Xb(o + 8);
      q[o + 24 >> 2] = 0;
      q[o + 28 >> 2] = 0;
      q[o + 32 >> 2] = 0;
      n = p;
      r = h + (j << 3);
      for (s = n + 8; n < s; ) e[r++] = e[n++];
      j += 1;
      if (j >= k) {
        d = 9;
        break b;
      }
    } while (0);
    c += 1;
    if (c >= g[u >> 2]) break a;
  } while (0);
}

Bi.X = 1;

function Ci(a) {
  var f = b;
  b += 216;
  var d, c, h, i, j, k, p, o, l, m, n, r, s, u = f + 8, w = f + 16, t, A = f + 24, C, z = f + 32, B, D = f + 40, H, G = f + 48, N = f + 64, M = f + 80, O = f + 88, R = f + 96, W = f + 104, E = f + 112, Q, K, P, aa = f + 136, ba = f + 144, Y, ra, ca, ea = f + 152, U, fa, wa, Da, ha = f + 160, sa = f + 168, Ja = f + 176, Sa = f + 184, Ta = f + 192, ua, Aa, lb, Ua, Va, Ma, Ba, oa, da, pa = f + 200;
  c = 0;
  var qa = a + 48;
  d = c < g[qa >> 2] ? 1 : 17;
  a : do if (d == 1) for (var cb = a + 40, ya = a + 36, ub = a + 44, vb = f, mb = u, db = a + 24, $a = w, yb = a + 24, Kb = a + 28, eb = A, Lb = a + 28, Fb = a + 24, fb = z, bc = a + 24, pc = a + 28, zb = D, cc = a + 28, Tb = G + 8, Mb = N + 8, wb = G + 8, Nb = G, qb = M, Ob = N + 8, Pb = N, dc = R, x = E, I = pa, L = E + 8, rb = aa, ec = E + 8, fc = ba; ; ) {
    h = g[cb >> 2] + c * 152;
    i = g[ya >> 2] + c * 88;
    j = q[i + 76 >> 2];
    k = q[i + 80 >> 2];
    p = g[g[ub >> 2] + (g[h + 148 >> 2] << 2) >> 2] + 64;
    o = g[h + 112 >> 2];
    l = g[h + 116 >> 2];
    m = q[h + 120 >> 2];
    n = q[h + 124 >> 2];
    r = q[h + 128 >> 2];
    s = q[h + 132 >> 2];
    var ia, Ea, Fa, gc;
    ia = i + 48;
    Ea = vb;
    for (Fa = ia + 8; ia < Fa; ) e[Ea++] = e[ia++];
    ia = i + 56;
    Ea = mb;
    for (Fa = ia + 8; ia < Fa; ) e[Ea++] = e[ia++];
    ia = g[db >> 2] + o * 12;
    Ea = $a;
    for (Fa = ia + 8; ia < Fa; ) e[Ea++] = e[ia++];
    t = q[g[yb >> 2] + o * 12 + 8 >> 2];
    ia = g[Kb >> 2] + o * 12;
    Ea = eb;
    for (Fa = ia + 8; ia < Fa; ) e[Ea++] = e[ia++];
    C = q[g[Lb >> 2] + o * 12 + 8 >> 2];
    ia = g[Fb >> 2] + l * 12;
    Ea = fb;
    for (Fa = ia + 8; ia < Fa; ) e[Ea++] = e[ia++];
    B = q[g[bc >> 2] + l * 12 + 8 >> 2];
    ia = g[pc >> 2] + l * 12;
    Ea = zb;
    for (Fa = ia + 8; ia < Fa; ) e[Ea++] = e[ia++];
    H = q[g[cc >> 2] + l * 12 + 8 >> 2];
    d = g[p + 60 >> 2] > 0 ? 4 : 3;
    d == 3 && X(ck, 168, fk, gk);
    cf(Tb, t);
    cf(Mb, B);
    Yc(O, wb, f);
    J(M, w, O);
    ia = qb;
    Ea = Nb;
    for (Fa = ia + 8; ia < Fa; ) e[Ea++] = e[ia++];
    Yc(W, Ob, u);
    J(R, z, W);
    ia = dc;
    Ea = Pb;
    for (Fa = ia + 8; ia < Fa; ) e[Ea++] = e[ia++];
    od(E, p, G, j, N, k);
    ia = x;
    Ea = h + 72;
    for (Fa = ia + 8; ia < Fa; ) e[Ea++] = e[ia++];
    Q = g[h + 144 >> 2];
    K = 0;
    if (K < Q) {
      var hc = h;
      d = 5;
    } else {
      var qc = h;
      d = 12;
    }
    b : do if (d == 5) for (;;) {
      var Fc = P = hc + K * 36;
      J(aa, L + (K << 3), w);
      ia = rb;
      Ea = Fc;
      for (Fa = ia + 8; ia < Fa; ) e[Ea++] = e[ia++];
      var Ub = P + 8;
      J(ba, ec + (K << 3), z);
      ia = fc;
      Ea = Ub;
      for (Fa = ia + 8; ia < Fa; ) e[Ea++] = e[ia++];
      Y = Z(P, h + 72);
      ra = Z(P + 8, h + 72);
      ca = m + n + r * Y * Y + s * ra * ra;
      if (m + n + r * Y * Y + s * ra * ra > 0) d = 6; else {
        var ic = 0;
        d = 7;
      }
      d == 6 && (ic = 1 / ca);
      q[P + 24 >> 2] = ic;
      ed(ea, h + 72);
      U = Z(P, ea);
      fa = Z(P + 8, ea);
      wa = m + n + r * U * U + s * fa * fa;
      if (m + n + r * U * U + s * fa * fa > 0) d = 8; else {
        var jc = 0;
        d = 9;
      }
      d == 8 && (jc = 1 / wa);
      q[P + 28 >> 2] = jc;
      q[P + 32 >> 2] = 0;
      var Gc = h + 72;
      Hd(Sa, H, P + 8);
      V(Ja, D, Sa);
      J(sa, Ja, A);
      Hd(Ta, C, P);
      J(ha, sa, Ta);
      var Tc = S(Gc, ha);
      Da = Tc;
      d = Tc < -1 ? 10 : 11;
      d == 10 && (q[P + 32 >> 2] = -q[h + 140 >> 2] * Da);
      K += 1;
      if (K < Q) hc = h; else {
        qc = h;
        d = 12;
        break b;
      }
    } while (0);
    d = g[qc + 144 >> 2] == 2 ? 13 : 16;
    if (d == 13) {
      ua = h;
      Aa = h + 36;
      lb = Z(ua, h + 72);
      Ua = Z(ua + 8, h + 72);
      Va = Z(Aa, h + 72);
      Ma = Z(Aa + 8, h + 72);
      Ba = m + n + r * lb * lb + s * Ua * Ua;
      oa = m + n + r * Va * Va + s * Ma * Ma;
      da = m + n + r * lb * Va + s * Ua * Ma;
      var rc = h;
      d = Ba * Ba < (Ba * oa - da * da) * 1e3 ? 14 : 15;
      if (d == 14) {
        ac(rc + 96, Ba, da);
        ac(h + 104, da, oa);
        var Uc = h + 80;
        hk(pa, h + 96);
        ia = I;
        Ea = Uc;
        Fa = ia + 16;
        if (Ea % 4 == ia % 4) {
          for (; ia % 4 !== 0 && ia < Fa; ) e[Ea++] = e[ia++];
          ia >>= 2;
          Ea >>= 2;
          for (gc = Fa >> 2; ia < gc; ) g[Ea++] = g[ia++];
          ia <<= 2;
          Ea <<= 2;
        }
        for (; ia < Fa; ) e[Ea++] = e[ia++];
      } else d == 15 && (g[rc + 144 >> 2] = 1);
    }
    c += 1;
    if (c >= g[qa >> 2]) {
      d = 17;
      break a;
    }
  } while (0);
  b = f;
}

Ci.X = 1;

function hk(a, f) {
  var d, c, h, i, j;
  d = q[f >> 2];
  c = q[f + 8 >> 2];
  h = q[f + 4 >> 2];
  i = q[f + 12 >> 2];
  j = d * i - c * h;
  if ((j != 0 ? 1 : 2) == 1) j = 1 / j;
  q[a >> 2] = j * i;
  q[a + 8 >> 2] = -j * c;
  q[a + 4 >> 2] = -j * h;
  q[a + 12 >> 2] = j * d;
}

hk.X = 1;

function Di(a) {
  var f = b;
  b += 72;
  var d, c, h, i, j, k, p, o, l, m, n, r = f + 8, s, u = f + 16, w = f + 24, t, A, C = f + 32, z = f + 40, B = f + 48, D = f + 56, H = f + 64;
  c = 0;
  var G = a + 48;
  d = c < g[G >> 2] ? 1 : 5;
  a : do if (d == 1) for (var N = a + 40, M = a + 28, O = f, R = a + 28, W = a + 28, E = r, Q = a + 28, K = u, P = a + 28, aa = f, ba = a + 28, Y = a + 28, ra = r, ca = a + 28; ; ) {
    h = g[N >> 2] + c * 152;
    i = g[h + 112 >> 2];
    j = g[h + 116 >> 2];
    k = q[h + 120 >> 2];
    p = q[h + 128 >> 2];
    o = q[h + 124 >> 2];
    l = q[h + 132 >> 2];
    m = g[h + 144 >> 2];
    var ea;
    t = g[M >> 2] + i * 12;
    A = O;
    for (ea = t + 8; t < ea; ) e[A++] = e[t++];
    n = q[g[R >> 2] + i * 12 + 8 >> 2];
    t = g[W >> 2] + j * 12;
    A = E;
    for (ea = t + 8; t < ea; ) e[A++] = e[t++];
    s = q[g[Q >> 2] + j * 12 + 8 >> 2];
    t = h + 72;
    A = K;
    for (ea = t + 8; t < ea; ) e[A++] = e[t++];
    ed(w, u);
    t = 0;
    d = t < m ? 3 : 4;
    b : do if (d == 3) for (;;) if (A = h + t * 36, T(z, q[A + 16 >> 2], u), T(B, q[A + 20 >> 2], w), V(C, z, B), n -= p * Z(A, C), T(D, k, C), Pd(f, D), s += l * Z(A + 8, C), T(H, o, C), Sb(r, H), t += 1, t >= m) {
      d = 4;
      break b;
    } while (0);
    h = g[P >> 2] + i * 12;
    t = aa;
    A = h;
    for (ea = t + 8; t < ea; ) e[A++] = e[t++];
    q[g[ba >> 2] + i * 12 + 8 >> 2] = n;
    i = g[Y >> 2] + j * 12;
    t = ra;
    A = i;
    for (ea = t + 8; t < ea; ) e[A++] = e[t++];
    q[g[ca >> 2] + j * 12 + 8 >> 2] = s;
    c += 1;
    if (c >= g[G >> 2]) break a;
  } while (0);
  b = f;
}

Di.X = 1;

function ik(a, f, d) {
  kc(a, q[f >> 2] * q[d >> 2] + q[f + 8 >> 2] * q[d + 4 >> 2], q[f + 4 >> 2] * q[d >> 2] + q[f + 12 >> 2] * q[d + 4 >> 2]);
}

function Ei(a) {
  var f = b;
  b += 504;
  var d, c, h, i, j, k, p, o, l, m, n, r = f + 8, s, u = f + 16, w = f + 24, t, A, C, z = f + 32, B = f + 40, D = f + 48, H = f + 56, G = f + 64, N, M, O, R, W = f + 72, E = f + 80, Q = f + 88, K, P = f + 96, aa = f + 104, ba = f + 112, Y = f + 120, ra = f + 128, ca, ea, U, fa = f + 136, wa = f + 144, Da = f + 152, ha, sa, Ja = f + 160, Sa = f + 168, Ta = f + 176, ua = f + 184, Aa = f + 192, lb = f + 200, Ua = f + 208, Va = f + 216, Ma = f + 224, Ba = f + 232, oa = f + 240, da, pa, qa = f + 248, cb = f + 256, ya = f + 264, ub = f + 272, vb = f + 280, mb = f + 288, db = f + 296, $a = f + 304, yb = f + 312, Kb = f + 320, eb = f + 328, Lb = f + 336, Fb = f + 344, fb = f + 352, bc = f + 360, pc = f + 368, zb = f + 376, cc = f + 384, Tb = f + 392, Mb = f + 400, wb = f + 408, Nb = f + 416, qb = f + 424, Ob = f + 432, Pb = f + 440, dc = f + 448, x = f + 456, I = f + 464, L = f + 472, rb = f + 480, ec = f + 488, fc = f + 496;
  c = 0;
  var ia = a + 48;
  d = c < g[ia >> 2] ? 1 : 24;
  a : do if (d == 1) for (var Ea = a + 40, Fa = a + 28, gc = f, hc = a + 28, qc = a + 28, Fc = r, Ub = a + 28, ic = u, jc = a + 28, Gc = f, Tc = a + 28, rc = a + 28, Uc = r, Yd = a + 28, Ff = Ja, Gf = Ja + 4, id = qa, Zd = qa + 4, $d = ya, Hf = ya + 4, If = vb, ae = vb + 4, be = ya, ce = ya + 4, de = qa, Jf = ya, Kf = ya + 4, ee = ya, fe = qa + 4, ge = ya, Lf = Lb, Mf = Lb + 4, he = ya, ie = ya + 4, je = ya, ke = qa + 4, Nf = ya + 4, Of = ya + 4, le = qa, me = ya + 4, ne = Tb, Pf = Tb + 4, Qf = ya, oe = ya + 4, pe = ya, Rf = ya + 4, Sf = qa, Tf = qa + 4, Uf = dc, Vf = dc + 4, Wf = ya, Xf = ya + 4; ; ) {
    h = g[Ea >> 2] + c * 152;
    i = g[h + 112 >> 2];
    j = g[h + 116 >> 2];
    k = q[h + 120 >> 2];
    p = q[h + 128 >> 2];
    o = q[h + 124 >> 2];
    l = q[h + 132 >> 2];
    m = g[h + 144 >> 2];
    var Na, Gb, Hb;
    Na = g[Fa >> 2] + i * 12;
    Gb = gc;
    for (Hb = Na + 8; Na < Hb; ) e[Gb++] = e[Na++];
    n = q[g[hc >> 2] + i * 12 + 8 >> 2];
    Na = g[qc >> 2] + j * 12;
    Gb = Fc;
    for (Hb = Na + 8; Na < Hb; ) e[Gb++] = e[Na++];
    s = q[g[Ub >> 2] + j * 12 + 8 >> 2];
    Na = h + 72;
    Gb = ic;
    for (Hb = Na + 8; Na < Hb; ) e[Gb++] = e[Na++];
    ed(w, u);
    t = q[h + 136 >> 2];
    d = m == 1 | m == 2 ? 4 : 3;
    d == 3 && X(ck, 311, jk, kk);
    A = 0;
    if (A < m) {
      var qe = h;
      d = 5;
    } else {
      var jd = h;
      d = 6;
    }
    b : do if (d == 5) for (;;) if (C = qe + A * 36, Hd(H, s, C + 8), V(D, r, H), J(B, D, f), Hd(G, n, C), J(z, B, G), N = S(z, w), M = q[C + 28 >> 2] * -N, O = t * q[C + 16 >> 2], R = Ai(q[C + 20 >> 2] + M, -O, O), M = R - q[C + 20 >> 2], q[C + 20 >> 2] = R, T(W, M, w), T(E, k, W), Pd(f, E), n -= p * Z(C, W), T(Q, o, W), Sb(r, Q), s += l * Z(C + 8, W), A += 1, A < m) qe = h; else {
      jd = h;
      d = 6;
      break b;
    } while (0);
    var kd = h;
    d = g[jd + 144 >> 2] == 1 ? 7 : 8;
    b : do if (d == 7) K = kd, Hd(Y, s, K + 8), V(ba, r, Y), J(aa, ba, f), Hd(ra, n, K), J(P, aa, ra), ca = S(P, u), ea = -q[K + 24 >> 2] * (ca - q[K + 32 >> 2]), U = q[K + 16 >> 2] + ea > 0 ? q[K + 16 >> 2] + ea : 0, ea = U - q[K + 16 >> 2], q[K + 16 >> 2] = U, T(fa, ea, u), T(wa, k, fa), Pd(f, wa), n -= p * Z(K, fa), T(Da, o, fa), Sb(r, Da), s += l * Z(K + 8, fa); else if (d == 8) {
      ha = kd;
      sa = h + 36;
      kc(Ja, q[ha + 16 >> 2], q[sa + 16 >> 2]);
      d = q[Ff >> 2] >= 0 ? 9 : 10;
      d == 9 && (d = q[Gf >> 2] >= 0 ? 11 : 10);
      d == 10 && X(ck, 406, jk, lk);
      Hd(Aa, s, ha + 8);
      V(ua, r, Aa);
      J(Ta, ua, f);
      Hd(lb, n, ha);
      J(Sa, Ta, lb);
      Hd(Ba, s, sa + 8);
      V(Ma, r, Ba);
      J(Va, Ma, f);
      Hd(oa, n, sa);
      J(Ua, Va, oa);
      da = S(Sa, u);
      pa = S(Ua, u);
      q[id >> 2] = da - q[ha + 32 >> 2];
      q[Zd >> 2] = pa - q[sa + 32 >> 2];
      ik(cb, h + 96, Ja);
      Pd(qa, cb);
      ik(ub, h + 80, qa);
      Xc(ya, ub);
      d = q[$d >> 2] >= 0 ? 12 : 14;
      do if (d == 12) if (q[Hf >> 2] >= 0) {
        J(vb, ya, Ja);
        T(mb, q[If >> 2], u);
        T(db, q[ae >> 2], u);
        var re = k;
        V(yb, mb, db);
        T($a, re, yb);
        Pd(f, $a);
        n -= p * (Z(ha, mb) + Z(sa, db));
        var Yf = o;
        V(eb, mb, db);
        T(Kb, Yf, eb);
        Sb(r, Kb);
        s += l * (Z(ha + 8, mb) + Z(sa + 8, db));
        q[ha + 16 >> 2] = q[be >> 2];
        q[sa + 16 >> 2] = q[ce >> 2];
        d = 23;
        break b;
      } else d = 14; while (0);
      q[Jf >> 2] = -q[ha + 24 >> 2] * q[de >> 2];
      da = q[Kf >> 2] = 0;
      pa = q[h + 100 >> 2] * q[ee >> 2] + q[fe >> 2];
      d = q[ge >> 2] >= 0 ? 15 : 17;
      do if (d == 15) if (pa >= 0) {
        J(Lb, ya, Ja);
        T(Fb, q[Lf >> 2], u);
        T(fb, q[Mf >> 2], u);
        var Zf = k;
        V(pc, Fb, fb);
        T(bc, Zf, pc);
        Pd(f, bc);
        n -= p * (Z(ha, Fb) + Z(sa, fb));
        var se = o;
        V(cc, Fb, fb);
        T(zb, se, cc);
        Sb(r, zb);
        s += l * (Z(ha + 8, Fb) + Z(sa + 8, fb));
        q[ha + 16 >> 2] = q[he >> 2];
        q[sa + 16 >> 2] = q[ie >> 2];
        d = 23;
        break b;
      } else d = 17; while (0);
      q[je >> 2] = 0;
      q[Nf >> 2] = -q[sa + 24 >> 2] * q[ke >> 2];
      da = q[h + 104 >> 2] * q[Of >> 2] + q[le >> 2];
      pa = 0;
      d = q[me >> 2] >= 0 ? 18 : 20;
      do if (d == 18) if (da >= 0) {
        J(Tb, ya, Ja);
        T(Mb, q[ne >> 2], u);
        T(wb, q[Pf >> 2], u);
        var $f = k;
        V(qb, Mb, wb);
        T(Nb, $f, qb);
        Pd(f, Nb);
        n -= p * (Z(ha, Mb) + Z(sa, wb));
        var ag = o;
        V(Pb, Mb, wb);
        T(Ob, ag, Pb);
        Sb(r, Ob);
        s += l * (Z(ha + 8, Mb) + Z(sa + 8, wb));
        q[ha + 16 >> 2] = q[Qf >> 2];
        q[sa + 16 >> 2] = q[oe >> 2];
        d = 23;
        break b;
      } else d = 20; while (0);
      q[pe >> 2] = 0;
      q[Rf >> 2] = 0;
      var ld = q[Sf >> 2];
      da = ld;
      pa = q[Tf >> 2];
      if (ld >= 0) if (pa >= 0) {
        J(dc, ya, Ja);
        T(x, q[Uf >> 2], u);
        T(I, q[Vf >> 2], u);
        var bg = k;
        V(rb, x, I);
        T(L, bg, rb);
        Pd(f, L);
        n -= p * (Z(ha, x) + Z(sa, I));
        var cg = o;
        V(fc, x, I);
        T(ec, cg, fc);
        Sb(r, ec);
        s += l * (Z(ha + 8, x) + Z(sa + 8, I));
        q[ha + 16 >> 2] = q[Wf >> 2];
        q[sa + 16 >> 2] = q[Xf >> 2];
      } else d = 23; else d = 23;
    } while (0);
    var dg = g[jc >> 2] + i * 12;
    Na = Gc;
    Gb = dg;
    for (Hb = Na + 8; Na < Hb; ) e[Gb++] = e[Na++];
    q[g[Tc >> 2] + i * 12 + 8 >> 2] = n;
    var eg = g[rc >> 2] + j * 12;
    Na = Uc;
    Gb = eg;
    for (Hb = Na + 8; Na < Hb; ) e[Gb++] = e[Na++];
    q[g[Yd >> 2] + j * 12 + 8 >> 2] = s;
    c += 1;
    if (c >= g[ia >> 2]) {
      d = 24;
      break a;
    }
  } while (0);
  b = f;
}

Ei.X = 1;

function Fi(a) {
  var f, d, c, h, i;
  d = 0;
  var j = a + 48;
  f = d < g[j >> 2] ? 1 : 5;
  a : do if (f == 1) for (var k = a + 40, p = a + 44; ; ) {
    c = g[k >> 2] + d * 152;
    h = g[g[p >> 2] + (g[c + 148 >> 2] << 2) >> 2] + 64;
    i = 0;
    f = i < g[c + 144 >> 2] ? 3 : 4;
    b : do if (f == 3) for (;;) if (q[h + i * 20 + 8 >> 2] = q[c + i * 36 + 16 >> 2], q[h + i * 20 + 12 >> 2] = q[c + i * 36 + 20 >> 2], i += 1, i >= g[c + 144 >> 2]) {
      f = 4;
      break b;
    } while (0);
    d += 1;
    if (d >= g[j >> 2]) break a;
  } while (0);
}

Fi.X = 1;

function Gi(a) {
  var f = b;
  b += 172;
  var d, c, h, i, j, k, p, o, l = f + 8, m, n, r, s = f + 16, u, w = f + 24, t, A, C = f + 32, z = f + 48, B = f + 64, D = f + 72, H = f + 80, G = f + 88, N = f + 96, M = f + 116, O = f + 124, R = f + 132, W = f + 140, E, Q, K, P = f + 148, aa = f + 156, ba = f + 164;
  h = c = 0;
  var Y = a + 48;
  d = h < g[Y >> 2] ? 1 : 7;
  a : do if (d == 1) for (var ra = a + 36, ca = f, ea = l, U = a + 24, fa = s, wa = a + 24, Da = a + 24, ha = w, sa = a + 24, Ja = a + 24, Sa = s, Ta = a + 24, ua = a + 24, Aa = w, lb = a + 24, Ua = C + 8, Va = z + 8, Ma = C + 8, Ba = C, oa = B, da = z + 8, pa = z, qa = H, cb = M, ya = N, ub = O, vb = N + 8, mb = N + 16; ; ) {
    i = g[ra >> 2] + h * 88;
    j = g[i + 32 >> 2];
    k = g[i + 36 >> 2];
    E = i + 48;
    K = ca;
    for (Q = E + 8; E < Q; ) e[K++] = e[E++];
    p = q[i + 40 >> 2];
    o = q[i + 64 >> 2];
    E = i + 56;
    K = ea;
    for (Q = E + 8; E < Q; ) e[K++] = e[E++];
    m = q[i + 44 >> 2];
    n = q[i + 68 >> 2];
    r = g[i + 84 >> 2];
    E = g[U >> 2] + j * 12;
    K = fa;
    for (Q = E + 8; E < Q; ) e[K++] = e[E++];
    u = q[g[wa >> 2] + j * 12 + 8 >> 2];
    E = g[Da >> 2] + k * 12;
    K = ha;
    for (Q = E + 8; E < Q; ) e[K++] = e[E++];
    t = q[g[sa >> 2] + k * 12 + 8 >> 2];
    A = 0;
    d = A < r ? 3 : 6;
    b : do if (d == 3) for (;;) {
      cf(Ua, u);
      cf(Va, t);
      Yc(D, Ma, f);
      J(B, s, D);
      E = oa;
      K = Ba;
      for (Q = E + 8; E < Q; ) e[K++] = e[E++];
      Yc(G, da, l);
      J(H, w, G);
      E = qa;
      K = pa;
      for (Q = E + 8; E < Q; ) e[K++] = e[E++];
      mk(N, i, C, z, A);
      E = ya;
      K = cb;
      for (Q = E + 8; E < Q; ) e[K++] = e[E++];
      E = vb;
      K = ub;
      for (Q = E + 8; E < Q; ) e[K++] = e[E++];
      d = q[mb >> 2];
      J(R, O, s);
      J(W, O, w);
      c = c < d ? c : d;
      E = Ai((d + .004999999888241291) * .20000000298023224, -.20000000298023224, 0);
      d = Z(R, M);
      Q = Z(W, M);
      K = p + m + o * d * d + n * Q * Q;
      if (p + m + o * d * d + n * Q * Q > 0) d = 4; else {
        var db = 0;
        d = 5;
      }
      d == 4 && (db = -E / K);
      E = db;
      T(P, E, M);
      T(aa, p, P);
      Pd(s, aa);
      u -= o * Z(R, P);
      T(ba, m, P);
      Sb(w, ba);
      t += n * Z(W, P);
      A += 1;
      if (A >= r) {
        d = 6;
        break b;
      }
    } while (0);
    i = g[Ja >> 2] + j * 12;
    E = Sa;
    K = i;
    for (Q = E + 8; E < Q; ) e[K++] = e[E++];
    q[g[Ta >> 2] + j * 12 + 8 >> 2] = u;
    j = g[ua >> 2] + k * 12;
    E = Aa;
    K = j;
    for (Q = E + 8; E < Q; ) e[K++] = e[E++];
    q[g[lb >> 2] + k * 12 + 8 >> 2] = t;
    h += 1;
    if (h >= g[Y >> 2]) break a;
  } while (0);
  b = f;
  return c >= -.014999999664723873;
}

Gi.X = 1;

function mk(a, f, d, c, h) {
  var i = b;
  b += 120;
  var j, k = i + 8, p = i + 16, o = i + 24, l = i + 32, m = i + 40, n = i + 48, r = i + 56, s = i + 64, u = i + 72, w = i + 80, t = i + 88, A = i + 96, C = i + 104, z = i + 112;
  j = g[f + 84 >> 2] > 0 ? 2 : 1;
  j == 1 && X(ck, 617, nk, ok);
  j = g[f + 72 >> 2];
  j = j == 0 ? 3 : j == 1 ? 4 : j == 2 ? 5 : 6;
  if (j == 3) {
    Hc(i, d, f + 24);
    Hc(k, c, f);
    J(p, k, i);
    n = a;
    for (w = p + 8; p < w; ) e[n++] = e[p++];
    Mc(a);
    d = a + 8;
    V(l, i, k);
    T(o, .5, l);
    p = o;
    n = d;
    for (w = p + 8; p < w; ) e[n++] = e[p++];
    J(m, k, i);
    q[a + 16 >> 2] = S(m, a) - q[f + 76 >> 2] - q[f + 80 >> 2];
  } else if (j == 4) {
    Yc(n, d + 8, f + 16);
    p = n;
    n = a;
    for (w = p + 8; p < w; ) e[n++] = e[p++];
    Hc(r, d, f + 24);
    Hc(s, c, f + (h << 3));
    J(u, s, r);
    q[a + 16 >> 2] = S(u, a) - q[f + 76 >> 2] - q[f + 80 >> 2];
    p = s;
    n = a + 8;
    for (w = p + 8; p < w; ) e[n++] = e[p++];
  } else if (j == 5) {
    Yc(w, c + 8, f + 16);
    p = w;
    n = a;
    for (w = p + 8; p < w; ) e[n++] = e[p++];
    Hc(t, c, f + 24);
    Hc(A, d, f + (h << 3));
    J(C, A, t);
    q[a + 16 >> 2] = S(C, a) - q[f + 76 >> 2] - q[f + 80 >> 2];
    p = A;
    n = a + 8;
    for (w = p + 8; p < w; ) e[n++] = e[p++];
    Xc(z, a);
    p = z;
    n = a;
    for (w = p + 8; p < w; ) e[n++] = e[p++];
  }
  b = i;
}

mk.X = 1;

function Oi(a, f, d) {
  var c = b;
  b += 172;
  var h, i, j, k, p, o, l = c + 8, m, n, r, s, u, w = c + 16, t, A = c + 24, C, z, B = c + 32, D = c + 48, H = c + 64, G = c + 72, N = c + 80, M = c + 88, O = c + 96, R = c + 116, W = c + 124, E = c + 132, Q = c + 140, K, P, aa, ba = c + 148, Y = c + 156, ra = c + 164;
  j = i = 0;
  var ca = a + 48;
  h = j < g[ca >> 2] ? 1 : 13;
  a : do if (h == 1) for (var ea = a + 36, U = c, fa = l, wa = a + 24, Da = w, ha = a + 24, sa = a + 24, Ja = A, Sa = a + 24, Ta = a + 24, ua = w, Aa = a + 24, lb = a + 24, Ua = A, Va = a + 24, Ma = B + 8, Ba = D + 8, oa = B + 8, da = B, pa = H, qa = D + 8, cb = D, ya = N, ub = R, vb = O, mb = W, db = O + 8, $a = O + 16; ; ) {
    k = g[ea >> 2] + j * 88;
    p = g[k + 32 >> 2];
    o = g[k + 36 >> 2];
    K = k + 48;
    aa = U;
    for (P = K + 8; K < P; ) e[aa++] = e[K++];
    K = k + 56;
    aa = fa;
    for (P = K + 8; K < P; ) e[aa++] = e[K++];
    m = g[k + 84 >> 2];
    r = n = 0;
    h = p == f ? 4 : 3;
    h == 3 && (h = p == d ? 4 : 5);
    h == 4 && (n = q[k + 40 >> 2], r = q[k + 64 >> 2]);
    s = q[k + 44 >> 2];
    u = q[k + 68 >> 2];
    h = o == f ? 7 : 6;
    h == 6 && (h = o == d ? 7 : 8);
    h == 7 && (s = q[k + 44 >> 2], u = q[k + 68 >> 2]);
    K = g[wa >> 2] + p * 12;
    aa = Da;
    for (P = K + 8; K < P; ) e[aa++] = e[K++];
    t = q[g[ha >> 2] + p * 12 + 8 >> 2];
    K = g[sa >> 2] + o * 12;
    aa = Ja;
    for (P = K + 8; K < P; ) e[aa++] = e[K++];
    C = q[g[Sa >> 2] + o * 12 + 8 >> 2];
    z = 0;
    h = z < m ? 9 : 12;
    b : do if (h == 9) for (;;) {
      cf(Ma, t);
      cf(Ba, C);
      Yc(G, oa, c);
      J(H, w, G);
      K = pa;
      aa = da;
      for (P = K + 8; K < P; ) e[aa++] = e[K++];
      Yc(M, qa, l);
      J(N, A, M);
      K = ya;
      aa = cb;
      for (P = K + 8; K < P; ) e[aa++] = e[K++];
      mk(O, k, B, D, z);
      K = vb;
      aa = ub;
      for (P = K + 8; K < P; ) e[aa++] = e[K++];
      K = db;
      aa = mb;
      for (P = K + 8; K < P; ) e[aa++] = e[K++];
      h = q[$a >> 2];
      J(E, W, w);
      J(Q, W, A);
      i = i < h ? i : h;
      K = Ai((h + .004999999888241291) * .75, -.20000000298023224, 0);
      h = Z(E, R);
      P = Z(Q, R);
      aa = n + s + r * h * h + u * P * P;
      if (n + s + r * h * h + u * P * P > 0) h = 10; else {
        var yb = 0;
        h = 11;
      }
      h == 10 && (yb = -K / aa);
      K = yb;
      T(ba, K, R);
      T(Y, n, ba);
      Pd(w, Y);
      t -= r * Z(E, ba);
      T(ra, s, ba);
      Sb(A, ra);
      C += u * Z(Q, ba);
      z += 1;
      if (z >= m) {
        h = 12;
        break b;
      }
    } while (0);
    k = g[Ta >> 2] + p * 12;
    K = ua;
    aa = k;
    for (P = K + 8; K < P; ) e[aa++] = e[K++];
    q[g[Aa >> 2] + p * 12 + 8 >> 2] = t;
    p = g[lb >> 2] + o * 12;
    K = Ua;
    aa = p;
    for (P = K + 8; K < P; ) e[aa++] = e[K++];
    q[g[Va >> 2] + o * 12 + 8 >> 2] = C;
    j += 1;
    if (j >= g[ca >> 2]) break a;
  } while (0);
  b = c;
  return i >= -.007499999832361937;
}

Oi.X = 1;

function pk(a, f, d) {
  yj(a, f, 0, d, 0);
  g[a >> 2] = qk + 8;
  f = vj(g[a + 48 >> 2]) == 1 ? 2 : 1;
  f == 1 && X(rk, 41, sk, tk);
  f = vj(g[a + 52 >> 2]) == 0 ? 4 : 3;
  f == 3 && X(rk, 42, sk, Dj);
}

function uk(a, f) {
  vk(a, f);
  g[a >> 2] = wk + 8;
  var d, c, h;
  d = f + 20;
  c = a + 80;
  for (h = d + 8; d < h; ) e[c++] = e[d++];
  d = f + 28;
  c = a + 88;
  for (h = d + 8; d < h; ) e[c++] = e[d++];
  q[a + 104 >> 2] = q[f + 36 >> 2];
  q[a + 68 >> 2] = q[f + 40 >> 2];
  q[a + 72 >> 2] = q[f + 44 >> 2];
  q[a + 100 >> 2] = 0;
  q[a + 96 >> 2] = 0;
  q[a + 76 >> 2] = 0;
}

uk.X = 1;

function xk(a, f, d) {
  yj(a, f, 0, d, 0);
  g[a >> 2] = yk + 8;
  f = vj(g[a + 48 >> 2]) == 1 ? 2 : 1;
  f == 1 && X(zk, 41, Ak, tk);
  f = vj(g[a + 52 >> 2]) == 2 ? 4 : 3;
  f == 3 && X(zk, 42, Ak, Jj);
}

function Bk(a, f, d) {
  yj(a, f, 0, d, 0);
  g[a >> 2] = Ck + 8;
  f = vj(g[a + 48 >> 2]) == 2 ? 2 : 1;
  f == 1 && X(Dk, 41, Ek, Fk);
  f = vj(g[a + 52 >> 2]) == 0 ? 4 : 3;
  f == 3 && X(Dk, 42, Ek, Dj);
}

function Gk(a, f, d) {
  yj(a, f, 0, d, 0);
  g[a >> 2] = Hk + 8;
  f = vj(g[a + 48 >> 2]) == 2 ? 2 : 1;
  f == 1 && X(Ik, 44, Jk, Fk);
  f = vj(g[a + 52 >> 2]) == 2 ? 4 : 3;
  f == 3 && X(Ik, 45, Jk, Jj);
}

function Kk(a, f, d) {
  Hc(a, f + 12, d);
}

function Lk(a) {
  var f, d;
  f = g[g[a + 48 >> 2] + 8 >> 2];
  d = g[g[a + 52 >> 2] + 8 >> 2];
  $(Mk, F(1, "i32", v));
  $(Nk, F([ f, 0, 0, 0 ], [ "i32", 0, 0, 0 ], v));
  $(Ok, F([ d, 0, 0, 0 ], [ "i32", 0, 0, 0 ], v));
  $(Pk, F([ e[a + 61] & 1, 0, 0, 0 ], [ "i32", 0, 0, 0 ], v));
  $(Qk, F([ q[a + 80 >> 2], 0, 0, 0, 0, 0, 0, 0, q[a + 84 >> 2], 0, 0, 0, 0, 0, 0, 0 ], [ "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0 ], v));
  $(Rk, F([ q[a + 88 >> 2], 0, 0, 0, 0, 0, 0, 0, q[a + 92 >> 2], 0, 0, 0, 0, 0, 0, 0 ], [ "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0 ], v));
  $(Sk, F([ q[a + 104 >> 2], 0, 0, 0, 0, 0, 0, 0 ], [ "double", 0, 0, 0, 0, 0, 0, 0 ], v));
  $(Tk, F([ q[a + 68 >> 2], 0, 0, 0, 0, 0, 0, 0 ], [ "double", 0, 0, 0, 0, 0, 0, 0 ], v));
  $(Uk, F([ q[a + 72 >> 2], 0, 0, 0, 0, 0, 0, 0 ], [ "double", 0, 0, 0, 0, 0, 0, 0 ], v));
  $(Vk, F([ g[a + 56 >> 2], 0, 0, 0 ], [ "i32", 0, 0, 0 ], v));
}

Lk.X = 1;

function Wk(a, f) {
  var d = b;
  b += 128;
  var c, h, i = d + 8, j;
  c = d + 16;
  var k, p = d + 24, o, l = d + 32, m = d + 40, n = d + 48, r = d + 56, s = d + 64, u = d + 72, w = d + 80, t = d + 88, A = d + 96, C, z, B = d + 104, D = d + 112, H = d + 120;
  g[a + 108 >> 2] = g[g[a + 48 >> 2] + 8 >> 2];
  g[a + 112 >> 2] = g[g[a + 52 >> 2] + 8 >> 2];
  var G, N;
  C = g[a + 48 >> 2] + 28;
  G = a + 140;
  for (N = C + 8; C < N; ) e[G++] = e[C++];
  C = g[a + 52 >> 2] + 28;
  G = a + 148;
  for (N = C + 8; C < N; ) e[G++] = e[C++];
  q[a + 156 >> 2] = q[g[a + 48 >> 2] + 120 >> 2];
  q[a + 160 >> 2] = q[g[a + 52 >> 2] + 120 >> 2];
  q[a + 164 >> 2] = q[g[a + 48 >> 2] + 128 >> 2];
  q[a + 168 >> 2] = q[g[a + 52 >> 2] + 128 >> 2];
  C = g[f + 24 >> 2] + g[a + 108 >> 2] * 12;
  G = d;
  for (N = C + 8; C < N; ) e[G++] = e[C++];
  h = q[g[f + 24 >> 2] + g[a + 108 >> 2] * 12 + 8 >> 2];
  C = g[f + 28 >> 2] + g[a + 108 >> 2] * 12;
  G = i;
  for (N = C + 8; C < N; ) e[G++] = e[C++];
  j = q[g[f + 28 >> 2] + g[a + 108 >> 2] * 12 + 8 >> 2];
  C = g[f + 24 >> 2] + g[a + 112 >> 2] * 12;
  G = c;
  for (N = C + 8; C < N; ) e[G++] = e[C++];
  k = q[g[f + 24 >> 2] + g[a + 112 >> 2] * 12 + 8 >> 2];
  C = g[f + 28 >> 2] + g[a + 112 >> 2] * 12;
  G = p;
  for (N = C + 8; C < N; ) e[G++] = e[C++];
  o = q[g[f + 28 >> 2] + g[a + 112 >> 2] * 12 + 8 >> 2];
  Xk(l, h);
  Xk(m, k);
  h = a + 124;
  J(r, a + 80, a + 140);
  Yc(n, l, r);
  C = n;
  G = h;
  for (N = C + 8; C < N; ) e[G++] = e[C++];
  l = a + 132;
  J(u, a + 88, a + 148);
  Yc(s, m, u);
  C = s;
  G = l;
  for (N = C + 8; C < N; ) e[G++] = e[C++];
  m = a + 116;
  V(A, c, a + 132);
  J(t, A, d);
  J(w, t, a + 124);
  C = w;
  G = m;
  for (N = C + 8; C < N; ) e[G++] = e[C++];
  w = Nc(a + 116);
  c = w > .004999999888241291 ? 1 : 2;
  c == 1 ? sg(a + 116, 1 / w) : c == 2 && ac(a + 116, 0, 0);
  c = Z(a + 124, a + 116);
  t = Z(a + 132, a + 116);
  C = q[a + 156 >> 2] + q[a + 164 >> 2] * c * c + q[a + 160 >> 2] + q[a + 168 >> 2] * t * t;
  q[a + 156 >> 2] + q[a + 164 >> 2] * c * c + q[a + 160 >> 2] + q[a + 168 >> 2] * t * t != 0 ? c = 4 : (z = 0, c = 5);
  c == 4 && (z = 1 / C);
  q[a + 172 >> 2] = z;
  c = q[a + 68 >> 2] > 0 ? 6 : 11;
  if (c == 6) {
    z = w - q[a + 104 >> 2];
    w = q[a + 68 >> 2] * 6.2831854820251465;
    c = q[a + 172 >> 2] * 2 * q[a + 72 >> 2] * w;
    w *= q[a + 172 >> 2] * w;
    t = q[f >> 2];
    q[a + 96 >> 2] = t * (c + t * w);
    if (q[a + 96 >> 2] != 0) c = 7; else {
      var M = 0;
      c = 8;
    }
    c == 7 && (M = 1 / q[a + 96 >> 2]);
    q[a + 96 >> 2] = M;
    q[a + 76 >> 2] = z * t * w * q[a + 96 >> 2];
    M = C + q[a + 96 >> 2];
    if (M != 0) c = 9; else {
      var O = 0;
      c = 10;
    }
    c == 9 && (O = 1 / M);
    q[a + 172 >> 2] = O;
  } else c == 11 && (q[a + 96 >> 2] = 0, q[a + 76 >> 2] = 0);
  c = e[f + 20] & 1 ? 13 : 14;
  c == 13 ? (q[a + 100 >> 2] *= q[f + 8 >> 2], T(B, q[a + 100 >> 2], a + 116), T(D, q[a + 156 >> 2], B), Pd(i, D), j -= q[a + 164 >> 2] * Z(a + 124, B), T(H, q[a + 160 >> 2], B), Sb(p, H), o += q[a + 168 >> 2] * Z(a + 132, B)) : c == 14 && (q[a + 100 >> 2] = 0);
  B = g[f + 28 >> 2] + g[a + 108 >> 2] * 12;
  C = i;
  G = B;
  for (N = C + 8; C < N; ) e[G++] = e[C++];
  q[g[f + 28 >> 2] + g[a + 108 >> 2] * 12 + 8 >> 2] = j;
  i = g[f + 28 >> 2] + g[a + 112 >> 2] * 12;
  C = p;
  G = i;
  for (N = C + 8; C < N; ) e[G++] = e[C++];
  q[g[f + 28 >> 2] + g[a + 112 >> 2] * 12 + 8 >> 2] = o;
  b = d;
}

Wk.X = 1;

function Yk(a, f) {
  var d = b;
  b += 80;
  var c, h = d + 8, i, j = d + 16, k = d + 24, p = d + 32, o = d + 40, l = d + 48, m, n = d + 56, r = d + 64, s = d + 72, u, w;
  m = g[f + 28 >> 2] + g[a + 108 >> 2] * 12;
  u = d;
  for (w = m + 8; m < w; ) e[u++] = e[m++];
  c = q[g[f + 28 >> 2] + g[a + 108 >> 2] * 12 + 8 >> 2];
  m = g[f + 28 >> 2] + g[a + 112 >> 2] * 12;
  u = h;
  for (w = m + 8; m < w; ) e[u++] = e[m++];
  i = q[g[f + 28 >> 2] + g[a + 112 >> 2] * 12 + 8 >> 2];
  Hd(k, c, a + 124);
  V(j, d, k);
  Hd(o, i, a + 132);
  V(p, h, o);
  m = a + 116;
  J(l, p, j);
  m = -q[a + 172 >> 2] * (S(m, l) + q[a + 76 >> 2] + q[a + 96 >> 2] * q[a + 100 >> 2]);
  q[a + 100 >> 2] += m;
  T(n, m, a + 116);
  T(r, q[a + 156 >> 2], n);
  Pd(d, r);
  c -= q[a + 164 >> 2] * Z(a + 124, n);
  T(s, q[a + 160 >> 2], n);
  Sb(h, s);
  i += q[a + 168 >> 2] * Z(a + 132, n);
  n = g[f + 28 >> 2] + g[a + 108 >> 2] * 12;
  m = d;
  u = n;
  for (w = m + 8; m < w; ) e[u++] = e[m++];
  q[g[f + 28 >> 2] + g[a + 108 >> 2] * 12 + 8 >> 2] = c;
  c = g[f + 28 >> 2] + g[a + 112 >> 2] * 12;
  m = h;
  u = c;
  for (w = m + 8; m < w; ) e[u++] = e[m++];
  q[g[f + 28 >> 2] + g[a + 112 >> 2] * 12 + 8 >> 2] = i;
  b = d;
}

Yk.X = 1;

function Zk(a, f) {
  var d = b;
  b += 112;
  var c, h, i = d + 8, j = d + 16, k = d + 24, p = d + 32, o = d + 40, l = d + 48, m = d + 56, n = d + 64, r = d + 72, s = d + 80, u, w = d + 88, t = d + 96, A = d + 104;
  c = q[a + 68 >> 2] > 0 ? 1 : 2;
  if (c == 1) h = 1; else if (c == 2) {
    var C, z;
    u = g[f + 24 >> 2] + g[a + 108 >> 2] * 12;
    C = d;
    for (z = u + 8; u < z; ) e[C++] = e[u++];
    h = q[g[f + 24 >> 2] + g[a + 108 >> 2] * 12 + 8 >> 2];
    u = g[f + 24 >> 2] + g[a + 112 >> 2] * 12;
    C = i;
    for (z = u + 8; u < z; ) e[C++] = e[u++];
    c = q[g[f + 24 >> 2] + g[a + 112 >> 2] * 12 + 8 >> 2];
    Xk(j, h);
    Xk(k, c);
    J(o, a + 80, a + 140);
    Yc(p, j, o);
    J(m, a + 88, a + 148);
    Yc(l, k, m);
    V(s, i, l);
    J(r, s, d);
    J(n, r, p);
    u = Mc(n);
    j = u - q[a + 104 >> 2];
    j = Ai(j, -.20000000298023224, .20000000298023224);
    u = -q[a + 172 >> 2] * j;
    T(w, u, n);
    T(t, q[a + 156 >> 2], w);
    Pd(d, t);
    h -= q[a + 164 >> 2] * Z(p, w);
    T(A, q[a + 160 >> 2], w);
    Sb(i, A);
    c += q[a + 168 >> 2] * Z(l, w);
    p = g[f + 24 >> 2] + g[a + 108 >> 2] * 12;
    u = d;
    C = p;
    for (z = u + 8; u < z; ) e[C++] = e[u++];
    q[g[f + 24 >> 2] + g[a + 108 >> 2] * 12 + 8 >> 2] = h;
    p = g[f + 24 >> 2] + g[a + 112 >> 2] * 12;
    u = i;
    C = p;
    for (z = u + 8; u < z; ) e[C++] = e[u++];
    q[g[f + 24 >> 2] + g[a + 112 >> 2] * 12 + 8 >> 2] = c;
    h = pd(j) < .004999999888241291;
  }
  b = d;
  return h;
}

Zk.X = 1;

function Xk(a, f) {
  var d = fg(f);
  q[a >> 2] = d;
  d = gg(f);
  q[a + 4 >> 2] = d;
}

function $k(a, f) {
  vk(a, f);
  g[a >> 2] = al + 8;
  var d, c, h;
  d = f + 20;
  c = a + 68;
  for (h = d + 8; d < h; ) e[c++] = e[d++];
  d = f + 28;
  c = a + 76;
  for (h = d + 8; d < h; ) e[c++] = e[d++];
  Xb(a + 84);
  q[a + 92 >> 2] = 0;
  q[a + 96 >> 2] = q[f + 36 >> 2];
  q[a + 100 >> 2] = q[f + 40 >> 2];
}

$k.X = 1;

function bl(a) {
  var f, d;
  f = g[g[a + 48 >> 2] + 8 >> 2];
  d = g[g[a + 52 >> 2] + 8 >> 2];
  $(cl, F(1, "i32", v));
  $(Nk, F([ f, 0, 0, 0 ], [ "i32", 0, 0, 0 ], v));
  $(Ok, F([ d, 0, 0, 0 ], [ "i32", 0, 0, 0 ], v));
  $(Pk, F([ e[a + 61] & 1, 0, 0, 0 ], [ "i32", 0, 0, 0 ], v));
  $(Qk, F([ q[a + 68 >> 2], 0, 0, 0, 0, 0, 0, 0, q[a + 72 >> 2], 0, 0, 0, 0, 0, 0, 0 ], [ "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0 ], v));
  $(Rk, F([ q[a + 76 >> 2], 0, 0, 0, 0, 0, 0, 0, q[a + 80 >> 2], 0, 0, 0, 0, 0, 0, 0 ], [ "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0 ], v));
  $(dl, F([ q[a + 96 >> 2], 0, 0, 0, 0, 0, 0, 0 ], [ "double", 0, 0, 0, 0, 0, 0, 0 ], v));
  $(el, F([ q[a + 100 >> 2], 0, 0, 0, 0, 0, 0, 0 ], [ "double", 0, 0, 0, 0, 0, 0, 0 ], v));
  $(Vk, F([ g[a + 56 >> 2], 0, 0, 0 ], [ "i32", 0, 0, 0 ], v));
}

bl.X = 1;

function fl(a, f) {
  var d = b;
  b += 120;
  var c, h, i, j, k = d + 8, p, o = d + 16, l = d + 24, m = d + 32, n = d + 40, r = d + 48, s = d + 56, u = d + 64, w = d + 80, t = d + 96, A = d + 104, C = d + 112;
  g[a + 104 >> 2] = g[g[a + 48 >> 2] + 8 >> 2];
  g[a + 108 >> 2] = g[g[a + 52 >> 2] + 8 >> 2];
  var z, B;
  c = g[a + 48 >> 2] + 28;
  z = a + 128;
  for (B = c + 8; c < B; ) e[z++] = e[c++];
  c = g[a + 52 >> 2] + 28;
  z = a + 136;
  for (B = c + 8; c < B; ) e[z++] = e[c++];
  q[a + 144 >> 2] = q[g[a + 48 >> 2] + 120 >> 2];
  q[a + 148 >> 2] = q[g[a + 52 >> 2] + 120 >> 2];
  q[a + 152 >> 2] = q[g[a + 48 >> 2] + 128 >> 2];
  q[a + 156 >> 2] = q[g[a + 52 >> 2] + 128 >> 2];
  h = q[g[f + 24 >> 2] + g[a + 104 >> 2] * 12 + 8 >> 2];
  c = g[f + 28 >> 2] + g[a + 104 >> 2] * 12;
  z = d;
  for (B = c + 8; c < B; ) e[z++] = e[c++];
  i = q[g[f + 28 >> 2] + g[a + 104 >> 2] * 12 + 8 >> 2];
  j = q[g[f + 24 >> 2] + g[a + 108 >> 2] * 12 + 8 >> 2];
  c = g[f + 28 >> 2] + g[a + 108 >> 2] * 12;
  z = k;
  for (B = c + 8; c < B; ) e[z++] = e[c++];
  p = q[g[f + 28 >> 2] + g[a + 108 >> 2] * 12 + 8 >> 2];
  Xk(o, h);
  Xk(l, j);
  z = a + 112;
  J(n, a + 68, a + 128);
  Yc(m, o, n);
  c = m;
  for (B = c + 8; c < B; ) e[z++] = e[c++];
  z = a + 120;
  J(s, a + 76, a + 136);
  Yc(r, l, s);
  c = r;
  for (B = c + 8; c < B; ) e[z++] = e[c++];
  l = q[a + 144 >> 2];
  r = q[a + 148 >> 2];
  s = q[a + 152 >> 2];
  o = q[a + 156 >> 2];
  q[u >> 2] = l + r + s * q[a + 116 >> 2] * q[a + 116 >> 2] + o * q[a + 124 >> 2] * q[a + 124 >> 2];
  q[u + 4 >> 2] = -s * q[a + 112 >> 2] * q[a + 116 >> 2] - o * q[a + 120 >> 2] * q[a + 124 >> 2];
  q[u + 8 >> 2] = q[u + 4 >> 2];
  q[u + 12 >> 2] = l + r + s * q[a + 112 >> 2] * q[a + 112 >> 2] + o * q[a + 120 >> 2] * q[a + 120 >> 2];
  z = a + 160;
  hk(w, u);
  c = w;
  B = c + 16;
  if (z % 4 == c % 4) {
    for (; c % 4 !== 0 && c < B; ) e[z++] = e[c++];
    c >>= 2;
    z >>= 2;
    for (u = B >> 2; c < u; ) g[z++] = g[c++];
    c <<= 2;
    z <<= 2;
  }
  for (; c < B; ) e[z++] = e[c++];
  q[a + 176 >> 2] = s + o;
  c = q[a + 176 >> 2] > 0 ? 1 : 2;
  c == 1 && (q[a + 176 >> 2] = 1 / q[a + 176 >> 2]);
  u = a + 84;
  c = e[f + 20] & 1 ? 3 : 4;
  c == 3 ? (sg(u, q[f + 8 >> 2]), q[a + 92 >> 2] *= q[f + 8 >> 2], kc(t, q[a + 84 >> 2], q[a + 88 >> 2]), T(A, l, t), Pd(d, A), i -= s * (Z(a + 112, t) + q[a + 92 >> 2]), T(C, r, t), Sb(k, C), p += o * (Z(a + 120, t) + q[a + 92 >> 2])) : c == 4 && (Xb(u), q[a + 92 >> 2] = 0);
  t = g[f + 28 >> 2] + g[a + 104 >> 2] * 12;
  c = d;
  z = t;
  for (B = c + 8; c < B; ) e[z++] = e[c++];
  q[g[f + 28 >> 2] + g[a + 104 >> 2] * 12 + 8 >> 2] = i;
  i = g[f + 28 >> 2] + g[a + 108 >> 2] * 12;
  c = k;
  z = i;
  for (B = c + 8; c < B; ) e[z++] = e[c++];
  q[g[f + 28 >> 2] + g[a + 108 >> 2] * 12 + 8 >> 2] = p;
  b = d;
}

fl.X = 1;

function gl(a, f) {
  var d = b;
  b += 104;
  var c, h = d + 8, i, j, k, p, o, l, m, n, r, s = d + 16, u = d + 24, w = d + 32, t = d + 40, A = d + 48, C = d + 56, z = d + 64, B = d + 72, D = d + 80, H = d + 88, G = d + 96;
  m = g[f + 28 >> 2] + g[a + 104 >> 2] * 12;
  n = d;
  for (r = m + 8; m < r; ) e[n++] = e[m++];
  c = q[g[f + 28 >> 2] + g[a + 104 >> 2] * 12 + 8 >> 2];
  m = g[f + 28 >> 2] + g[a + 108 >> 2] * 12;
  n = h;
  for (r = m + 8; m < r; ) e[n++] = e[m++];
  i = q[g[f + 28 >> 2] + g[a + 108 >> 2] * 12 + 8 >> 2];
  j = q[a + 144 >> 2];
  k = q[a + 148 >> 2];
  p = q[a + 152 >> 2];
  o = q[a + 156 >> 2];
  l = q[f >> 2];
  m = -q[a + 176 >> 2] * (i - c);
  n = q[a + 92 >> 2];
  r = l * q[a + 100 >> 2];
  q[a + 92 >> 2] = Ai(q[a + 92 >> 2] + m, -r, r);
  m = q[a + 92 >> 2] - n;
  c -= p * m;
  i += o * m;
  Hd(t, i, a + 120);
  V(w, h, t);
  J(u, w, d);
  Hd(A, c, a + 112);
  J(s, u, A);
  ik(z, a + 160, s);
  Xc(C, z);
  m = a + 84;
  n = B;
  for (r = m + 8; m < r; ) e[n++] = e[m++];
  Sb(a + 84, C);
  l *= q[a + 96 >> 2];
  if ((Ad(a + 84) > l * l ? 1 : 2) == 1) Mc(a + 84), sg(a + 84, l);
  J(D, a + 84, B);
  m = D;
  n = C;
  for (r = m + 8; m < r; ) e[n++] = e[m++];
  T(H, j, C);
  Pd(d, H);
  c -= p * Z(a + 112, C);
  T(G, k, C);
  Sb(h, G);
  i += o * Z(a + 120, C);
  j = g[f + 28 >> 2] + g[a + 104 >> 2] * 12;
  m = d;
  n = j;
  for (r = m + 8; m < r; ) e[n++] = e[m++];
  q[g[f + 28 >> 2] + g[a + 104 >> 2] * 12 + 8 >> 2] = c;
  c = g[f + 28 >> 2] + g[a + 108 >> 2] * 12;
  m = h;
  n = c;
  for (r = m + 8; m < r; ) e[n++] = e[m++];
  q[g[f + 28 >> 2] + g[a + 108 >> 2] * 12 + 8 >> 2] = i;
  b = d;
}

gl.X = 1;

function hl(a, f) {
  var d = b;
  b += 160;
  var c, h, i, j, k = d + 16, p, o = d + 32, l = d + 40, m = d + 48, n = d + 56, r = d + 64, s = d + 72, u = d + 80, w = d + 96, t = d + 112, A = d + 120, C = d + 128, z = d + 136, B = d + 144, D = d + 152;
  vk(a, f);
  g[a >> 2] = il + 8;
  g[a + 68 >> 2] = g[f + 20 >> 2];
  g[a + 72 >> 2] = g[f + 24 >> 2];
  g[a + 76 >> 2] = g[g[a + 68 >> 2] + 4 >> 2];
  g[a + 80 >> 2] = g[g[a + 72 >> 2] + 4 >> 2];
  c = g[a + 76 >> 2] == 1 ? 5 : 3;
  c == 3 && (g[a + 76 >> 2] == 2 || X(jl, 53, kl, ll));
  c = g[a + 80 >> 2] == 1 ? 8 : 6;
  c == 6 && (g[a + 80 >> 2] == 2 || X(jl, 54, kl, ml));
  g[a + 84 >> 2] = g[g[a + 68 >> 2] + 48 >> 2];
  g[a + 48 >> 2] = g[g[a + 68 >> 2] + 52 >> 2];
  var H, G;
  c = g[a + 48 >> 2] + 12;
  H = d;
  G = c + 16;
  if (H % 4 == c % 4) {
    for (; c % 4 !== 0 && c < G; ) e[H++] = e[c++];
    c >>= 2;
    H >>= 2;
    for (p = G >> 2; c < p; ) g[H++] = g[c++];
    c <<= 2;
    H <<= 2;
  }
  for (; c < G; ) e[H++] = e[c++];
  j = q[g[a + 48 >> 2] + 56 >> 2];
  c = g[a + 84 >> 2] + 12;
  H = k;
  G = c + 16;
  if (H % 4 == c % 4) {
    for (; c % 4 !== 0 && c < G; ) e[H++] = e[c++];
    c >>= 2;
    H >>= 2;
    for (p = G >> 2; c < p; ) g[H++] = g[c++];
    c <<= 2;
    H <<= 2;
  }
  for (; c < G; ) e[H++] = e[c++];
  p = q[g[a + 84 >> 2] + 56 >> 2];
  var N = g[f + 20 >> 2];
  c = g[a + 76 >> 2] == 1 ? 11 : 13;
  if (c == 11) {
    c = N + 68;
    H = a + 108;
    for (G = c + 8; c < G; ) e[H++] = e[c++];
    c = N + 76;
    H = a + 92;
    for (G = c + 8; c < G; ) e[H++] = e[c++];
    q[a + 140 >> 2] = q[N + 116 >> 2];
    Xb(a + 124);
    h = j - p - q[a + 140 >> 2];
  } else if (c == 13) {
    c = N + 68;
    H = a + 108;
    for (G = c + 8; c < G; ) e[H++] = e[c++];
    c = N + 76;
    H = a + 92;
    for (G = c + 8; c < G; ) e[H++] = e[c++];
    q[a + 140 >> 2] = q[N + 100 >> 2];
    c = N + 84;
    H = a + 124;
    for (G = c + 8; c < G; ) e[H++] = e[c++];
    c = a + 108;
    H = o;
    for (G = c + 8; c < G; ) e[H++] = e[c++];
    h = k + 8;
    Yc(n, d + 8, a + 92);
    J(r, d, k);
    V(m, n, r);
    Wc(l, h, m);
    J(s, l, o);
    h = S(s, a + 124);
  }
  g[a + 88 >> 2] = g[g[a + 72 >> 2] + 48 >> 2];
  g[a + 52 >> 2] = g[g[a + 72 >> 2] + 52 >> 2];
  c = g[a + 52 >> 2] + 12;
  H = u;
  G = c + 16;
  if (H % 4 == c % 4) {
    for (; c % 4 !== 0 && c < G; ) e[H++] = e[c++];
    c >>= 2;
    H >>= 2;
    for (p = G >> 2; c < p; ) g[H++] = g[c++];
    c <<= 2;
    H <<= 2;
  }
  for (; c < G; ) e[H++] = e[c++];
  k = q[g[a + 52 >> 2] + 56 >> 2];
  c = g[a + 88 >> 2] + 12;
  H = w;
  G = c + 16;
  if (H % 4 == c % 4) {
    for (; c % 4 !== 0 && c < G; ) e[H++] = e[c++];
    c >>= 2;
    H >>= 2;
    for (p = G >> 2; c < p; ) g[H++] = g[c++];
    c <<= 2;
    H <<= 2;
  }
  for (; c < G; ) e[H++] = e[c++];
  o = q[g[a + 88 >> 2] + 56 >> 2];
  l = g[f + 24 >> 2];
  c = g[a + 80 >> 2] == 1 ? 17 : 18;
  if (c == 17) {
    c = l + 68;
    H = a + 116;
    for (G = c + 8; c < G; ) e[H++] = e[c++];
    c = l + 76;
    H = a + 100;
    for (G = c + 8; c < G; ) e[H++] = e[c++];
    q[a + 144 >> 2] = q[l + 116 >> 2];
    Xb(a + 132);
    i = k - o - q[a + 144 >> 2];
  } else if (c == 18) {
    c = l + 68;
    H = a + 116;
    for (G = c + 8; c < G; ) e[H++] = e[c++];
    c = l + 76;
    H = a + 100;
    for (G = c + 8; c < G; ) e[H++] = e[c++];
    q[a + 144 >> 2] = q[l + 100 >> 2];
    c = l + 84;
    H = a + 132;
    for (G = c + 8; c < G; ) e[H++] = e[c++];
    c = a + 116;
    H = t;
    for (G = c + 8; c < G; ) e[H++] = e[c++];
    i = w + 8;
    Yc(z, u + 8, a + 100);
    J(B, u, w);
    V(C, z, B);
    Wc(A, i, C);
    J(D, A, t);
    i = S(D, a + 132);
  }
  q[a + 152 >> 2] = q[f + 28 >> 2];
  q[a + 148 >> 2] = h + q[a + 152 >> 2] * i;
  q[a + 156 >> 2] = 0;
  b = d;
}

hl.X = 1;

function nl(a, f) {
  var d = b;
  b += 216;
  var c, h, i = d + 8, j, k, p = d + 24, o, l, m = d + 40, n, r, s = d + 56, u, w = d + 64, t = d + 72, A = d + 80, C = d + 88, z = d + 96, B = d + 104, D = d + 112, H = d + 120, G = d + 128, N = d + 136, M = d + 144, O = d + 152, R = d + 160, W = d + 168, E = d + 176, Q = d + 184, K = d + 192, P = d + 200, aa = d + 208;
  g[a + 160 >> 2] = g[g[a + 48 >> 2] + 8 >> 2];
  g[a + 164 >> 2] = g[g[a + 52 >> 2] + 8 >> 2];
  g[a + 168 >> 2] = g[g[a + 84 >> 2] + 8 >> 2];
  g[a + 172 >> 2] = g[g[a + 88 >> 2] + 8 >> 2];
  var ba, Y;
  c = g[a + 48 >> 2] + 28;
  ba = a + 176;
  for (Y = c + 8; c < Y; ) e[ba++] = e[c++];
  c = g[a + 52 >> 2] + 28;
  ba = a + 184;
  for (Y = c + 8; c < Y; ) e[ba++] = e[c++];
  c = g[a + 84 >> 2] + 28;
  ba = a + 192;
  for (Y = c + 8; c < Y; ) e[ba++] = e[c++];
  c = g[a + 88 >> 2] + 28;
  ba = a + 200;
  for (Y = c + 8; c < Y; ) e[ba++] = e[c++];
  q[a + 208 >> 2] = q[g[a + 48 >> 2] + 120 >> 2];
  q[a + 212 >> 2] = q[g[a + 52 >> 2] + 120 >> 2];
  q[a + 216 >> 2] = q[g[a + 84 >> 2] + 120 >> 2];
  q[a + 220 >> 2] = q[g[a + 88 >> 2] + 120 >> 2];
  q[a + 224 >> 2] = q[g[a + 48 >> 2] + 128 >> 2];
  q[a + 228 >> 2] = q[g[a + 52 >> 2] + 128 >> 2];
  q[a + 232 >> 2] = q[g[a + 84 >> 2] + 128 >> 2];
  q[a + 236 >> 2] = q[g[a + 88 >> 2] + 128 >> 2];
  c = g[f + 24 >> 2] + g[a + 160 >> 2] * 12;
  ba = d;
  for (Y = c + 8; c < Y; ) e[ba++] = e[c++];
  h = q[g[f + 24 >> 2] + g[a + 160 >> 2] * 12 + 8 >> 2];
  c = g[f + 28 >> 2] + g[a + 160 >> 2] * 12;
  ba = i;
  for (Y = c + 8; c < Y; ) e[ba++] = e[c++];
  j = q[g[f + 28 >> 2] + g[a + 160 >> 2] * 12 + 8 >> 2];
  c = g[f + 24 >> 2] + g[a + 164 >> 2] * 12;
  ba = d + 16;
  for (Y = c + 8; c < Y; ) e[ba++] = e[c++];
  k = q[g[f + 24 >> 2] + g[a + 164 >> 2] * 12 + 8 >> 2];
  c = g[f + 28 >> 2] + g[a + 164 >> 2] * 12;
  ba = p;
  for (Y = c + 8; c < Y; ) e[ba++] = e[c++];
  o = q[g[f + 28 >> 2] + g[a + 164 >> 2] * 12 + 8 >> 2];
  c = g[f + 24 >> 2] + g[a + 168 >> 2] * 12;
  ba = d + 32;
  for (Y = c + 8; c < Y; ) e[ba++] = e[c++];
  l = q[g[f + 24 >> 2] + g[a + 168 >> 2] * 12 + 8 >> 2];
  c = g[f + 28 >> 2] + g[a + 168 >> 2] * 12;
  ba = m;
  for (Y = c + 8; c < Y; ) e[ba++] = e[c++];
  n = q[g[f + 28 >> 2] + g[a + 168 >> 2] * 12 + 8 >> 2];
  c = g[f + 24 >> 2] + g[a + 172 >> 2] * 12;
  ba = d + 48;
  for (Y = c + 8; c < Y; ) e[ba++] = e[c++];
  r = q[g[f + 24 >> 2] + g[a + 172 >> 2] * 12 + 8 >> 2];
  c = g[f + 28 >> 2] + g[a + 172 >> 2] * 12;
  ba = s;
  for (Y = c + 8; c < Y; ) e[ba++] = e[c++];
  u = q[g[f + 28 >> 2] + g[a + 172 >> 2] * 12 + 8 >> 2];
  Xk(w, h);
  Xk(t, k);
  Xk(A, l);
  Xk(C, r);
  q[a + 272 >> 2] = 0;
  c = g[a + 76 >> 2] == 1 ? 1 : 2;
  if (c == 1) Xb(a + 240), q[a + 256 >> 2] = 1, q[a + 264 >> 2] = 1, q[a + 272 >> 2] += q[a + 224 >> 2] + q[a + 232 >> 2]; else if (c == 2) {
    Yc(z, A, a + 124);
    J(D, a + 108, a + 192);
    Yc(B, A, D);
    J(G, a + 92, a + 176);
    Yc(H, w, G);
    c = z;
    ba = a + 240;
    for (Y = c + 8; c < Y; ) e[ba++] = e[c++];
    q[a + 264 >> 2] = Z(B, z);
    q[a + 256 >> 2] = Z(H, z);
    q[a + 272 >> 2] += q[a + 216 >> 2] + q[a + 208 >> 2] + q[a + 232 >> 2] * q[a + 264 >> 2] * q[a + 264 >> 2] + q[a + 224 >> 2] * q[a + 256 >> 2] * q[a + 256 >> 2];
  }
  c = g[a + 80 >> 2] == 1 ? 4 : 5;
  if (c == 4) Xb(a + 248), q[a + 260 >> 2] = q[a + 152 >> 2], q[a + 268 >> 2] = q[a + 152 >> 2], q[a + 272 >> 2] += q[a + 152 >> 2] * q[a + 152 >> 2] * (q[a + 228 >> 2] + q[a + 236 >> 2]); else if (c == 5) {
    Yc(N, C, a + 132);
    J(O, a + 116, a + 200);
    Yc(M, C, O);
    J(W, a + 100, a + 184);
    Yc(R, t, W);
    w = a + 248;
    T(E, q[a + 152 >> 2], N);
    c = E;
    ba = w;
    for (Y = c + 8; c < Y; ) e[ba++] = e[c++];
    q[a + 268 >> 2] = q[a + 152 >> 2] * Z(M, N);
    q[a + 260 >> 2] = q[a + 152 >> 2] * Z(R, N);
    q[a + 272 >> 2] += q[a + 152 >> 2] * q[a + 152 >> 2] * (q[a + 220 >> 2] + q[a + 212 >> 2]) + q[a + 236 >> 2] * q[a + 268 >> 2] * q[a + 268 >> 2] + q[a + 228 >> 2] * q[a + 260 >> 2] * q[a + 260 >> 2];
  }
  if (q[a + 272 >> 2] > 0) c = 7; else {
    var ra = 0;
    c = 8;
  }
  c == 7 && (ra = 1 / q[a + 272 >> 2]);
  q[a + 272 >> 2] = ra;
  c = e[f + 20] & 1 ? 9 : 10;
  c == 9 ? (T(Q, q[a + 208 >> 2] * q[a + 156 >> 2], a + 240), Sb(i, Q), j += q[a + 224 >> 2] * q[a + 156 >> 2] * q[a + 256 >> 2], T(K, q[a + 212 >> 2] * q[a + 156 >> 2], a + 248), Sb(p, K), o += q[a + 228 >> 2] * q[a + 156 >> 2] * q[a + 260 >> 2], T(P, q[a + 216 >> 2] * q[a + 156 >> 2], a + 240), Pd(m, P), n -= q[a + 232 >> 2] * q[a + 156 >> 2] * q[a + 264 >> 2], T(aa, q[a + 220 >> 2] * q[a + 156 >> 2], a + 248), Pd(s, aa), u -= q[a + 236 >> 2] * q[a + 156 >> 2] * q[a + 268 >> 2]) : c == 10 && (q[a + 156 >> 2] = 0);
  N = g[f + 28 >> 2] + g[a + 160 >> 2] * 12;
  c = i;
  ba = N;
  for (Y = c + 8; c < Y; ) e[ba++] = e[c++];
  q[g[f + 28 >> 2] + g[a + 160 >> 2] * 12 + 8 >> 2] = j;
  i = g[f + 28 >> 2] + g[a + 164 >> 2] * 12;
  c = p;
  ba = i;
  for (Y = c + 8; c < Y; ) e[ba++] = e[c++];
  q[g[f + 28 >> 2] + g[a + 164 >> 2] * 12 + 8 >> 2] = o;
  p = g[f + 28 >> 2] + g[a + 168 >> 2] * 12;
  c = m;
  ba = p;
  for (Y = c + 8; c < Y; ) e[ba++] = e[c++];
  q[g[f + 28 >> 2] + g[a + 168 >> 2] * 12 + 8 >> 2] = n;
  m = g[f + 28 >> 2] + g[a + 172 >> 2] * 12;
  c = s;
  ba = m;
  for (Y = c + 8; c < Y; ) e[ba++] = e[c++];
  q[g[f + 28 >> 2] + g[a + 172 >> 2] * 12 + 8 >> 2] = u;
  b = d;
}

nl.X = 1;

function ol(a, f) {
  var d = b;
  b += 80;
  var c, h = d + 8, i, j = d + 16, k, p = d + 24, o, l, m = d + 32, n = d + 40, r = d + 48, s = d + 56, u = d + 64, w = d + 72, t, A;
  l = g[f + 28 >> 2] + g[a + 160 >> 2] * 12;
  t = d;
  for (A = l + 8; l < A; ) e[t++] = e[l++];
  c = q[g[f + 28 >> 2] + g[a + 160 >> 2] * 12 + 8 >> 2];
  l = g[f + 28 >> 2] + g[a + 164 >> 2] * 12;
  t = h;
  for (A = l + 8; l < A; ) e[t++] = e[l++];
  i = q[g[f + 28 >> 2] + g[a + 164 >> 2] * 12 + 8 >> 2];
  l = g[f + 28 >> 2] + g[a + 168 >> 2] * 12;
  t = j;
  for (A = l + 8; l < A; ) e[t++] = e[l++];
  k = q[g[f + 28 >> 2] + g[a + 168 >> 2] * 12 + 8 >> 2];
  l = g[f + 28 >> 2] + g[a + 172 >> 2] * 12;
  t = p;
  for (A = l + 8; l < A; ) e[t++] = e[l++];
  o = q[g[f + 28 >> 2] + g[a + 172 >> 2] * 12 + 8 >> 2];
  l = a + 240;
  J(m, d, j);
  l = S(l, m);
  m = a + 248;
  J(n, h, p);
  l += S(m, n);
  l += q[a + 256 >> 2] * c - q[a + 264 >> 2] * k + (q[a + 260 >> 2] * i - q[a + 268 >> 2] * o);
  l *= -q[a + 272 >> 2];
  q[a + 156 >> 2] += l;
  T(r, q[a + 208 >> 2] * l, a + 240);
  Sb(d, r);
  c += q[a + 224 >> 2] * l * q[a + 256 >> 2];
  T(s, q[a + 212 >> 2] * l, a + 248);
  Sb(h, s);
  i += q[a + 228 >> 2] * l * q[a + 260 >> 2];
  T(u, q[a + 216 >> 2] * l, a + 240);
  Pd(j, u);
  k -= q[a + 232 >> 2] * l * q[a + 264 >> 2];
  T(w, q[a + 220 >> 2] * l, a + 248);
  Pd(p, w);
  o -= q[a + 236 >> 2] * l * q[a + 268 >> 2];
  r = g[f + 28 >> 2] + g[a + 160 >> 2] * 12;
  l = d;
  t = r;
  for (A = l + 8; l < A; ) e[t++] = e[l++];
  q[g[f + 28 >> 2] + g[a + 160 >> 2] * 12 + 8 >> 2] = c;
  c = g[f + 28 >> 2] + g[a + 164 >> 2] * 12;
  l = h;
  t = c;
  for (A = l + 8; l < A; ) e[t++] = e[l++];
  q[g[f + 28 >> 2] + g[a + 164 >> 2] * 12 + 8 >> 2] = i;
  h = g[f + 28 >> 2] + g[a + 168 >> 2] * 12;
  l = j;
  t = h;
  for (A = l + 8; l < A; ) e[t++] = e[l++];
  q[g[f + 28 >> 2] + g[a + 168 >> 2] * 12 + 8 >> 2] = k;
  j = g[f + 28 >> 2] + g[a + 172 >> 2] * 12;
  l = p;
  t = j;
  for (A = l + 8; l < A; ) e[t++] = e[l++];
  q[g[f + 28 >> 2] + g[a + 172 >> 2] * 12 + 8 >> 2] = o;
  b = d;
}

ol.X = 1;

function pl(a) {
  var f, d, c, h;
  f = g[g[a + 48 >> 2] + 8 >> 2];
  d = g[g[a + 52 >> 2] + 8 >> 2];
  c = g[g[a + 68 >> 2] + 56 >> 2];
  h = g[g[a + 72 >> 2] + 56 >> 2];
  $(ql, F(1, "i32", v));
  $(Nk, F([ f, 0, 0, 0 ], [ "i32", 0, 0, 0 ], v));
  $(Ok, F([ d, 0, 0, 0 ], [ "i32", 0, 0, 0 ], v));
  $(Pk, F([ e[a + 61] & 1, 0, 0, 0 ], [ "i32", 0, 0, 0 ], v));
  $(rl, F([ c, 0, 0, 0 ], [ "i32", 0, 0, 0 ], v));
  $(sl, F([ h, 0, 0, 0 ], [ "i32", 0, 0, 0 ], v));
  $(tl, F([ q[a + 152 >> 2], 0, 0, 0, 0, 0, 0, 0 ], [ "double", 0, 0, 0, 0, 0, 0, 0 ], v));
  $(Vk, F([ g[a + 56 >> 2], 0, 0, 0 ], [ "i32", 0, 0, 0 ], v));
}

pl.X = 1;

function ul(a, f) {
  var d = b;
  b += 280;
  var c, h, i = d + 8, j, k = d + 16, p, o = d + 24, l, m = d + 32, n = d + 40, r = d + 48, s = d + 56, u, w, t = d + 64, A = d + 72, C, z, B, D, H, G = d + 80, N = d + 88, M = d + 96, O = d + 104, R = d + 112, W = d + 120, E = d + 128, Q = d + 136, K = d + 144, P = d + 152, aa = d + 160, ba = d + 168, Y = d + 176, ra = d + 184, ca = d + 192, ea = d + 200, U = d + 208, fa = d + 216, wa = d + 224, Da = d + 232, ha = d + 240, sa = d + 248, Ja = d + 256, Sa = d + 264, Ta = d + 272, ua, Aa;
  c = g[f + 24 >> 2] + g[a + 160 >> 2] * 12;
  ua = d;
  for (Aa = c + 8; c < Aa; ) e[ua++] = e[c++];
  h = q[g[f + 24 >> 2] + g[a + 160 >> 2] * 12 + 8 >> 2];
  c = g[f + 24 >> 2] + g[a + 164 >> 2] * 12;
  ua = i;
  for (Aa = c + 8; c < Aa; ) e[ua++] = e[c++];
  j = q[g[f + 24 >> 2] + g[a + 164 >> 2] * 12 + 8 >> 2];
  c = g[f + 24 >> 2] + g[a + 168 >> 2] * 12;
  ua = k;
  for (Aa = c + 8; c < Aa; ) e[ua++] = e[c++];
  p = q[g[f + 24 >> 2] + g[a + 168 >> 2] * 12 + 8 >> 2];
  c = g[f + 24 >> 2] + g[a + 172 >> 2] * 12;
  ua = o;
  for (Aa = c + 8; c < Aa; ) e[ua++] = e[c++];
  l = q[g[f + 24 >> 2] + g[a + 172 >> 2] * 12 + 8 >> 2];
  Xk(m, h);
  Xk(n, j);
  Xk(r, p);
  Xk(s, l);
  H = 0;
  c = g[a + 76 >> 2] == 1 ? 1 : 2;
  if (c == 1) Xb(t), B = C = 1, H += q[a + 224 >> 2] + q[a + 232 >> 2], u = h - p - q[a + 140 >> 2]; else if (c == 2) {
    Yc(G, r, a + 124);
    J(M, a + 108, a + 192);
    Yc(N, r, M);
    J(R, a + 92, a + 176);
    Yc(O, m, R);
    c = G;
    ua = t;
    for (Aa = c + 8; c < Aa; ) e[ua++] = e[c++];
    B = Z(N, G);
    C = Z(O, G);
    H += q[a + 216 >> 2] + q[a + 208 >> 2] + q[a + 232 >> 2] * B * B + q[a + 224 >> 2] * C * C;
    J(W, a + 108, a + 192);
    J(K, d, k);
    V(Q, O, K);
    Wc(E, r, Q);
    J(P, E, W);
    u = S(P, a + 124);
  }
  c = g[a + 80 >> 2] == 1 ? 4 : 5;
  if (c == 4) Xb(A), z = q[a + 152 >> 2], D = q[a + 152 >> 2], H += q[a + 152 >> 2] * q[a + 152 >> 2] * (q[a + 228 >> 2] + q[a + 236 >> 2]), w = j - l - q[a + 144 >> 2]; else if (c == 5) {
    Yc(aa, s, a + 132);
    J(Y, a + 116, a + 200);
    Yc(ba, s, Y);
    J(ca, a + 100, a + 184);
    Yc(ra, n, ca);
    T(ea, q[a + 152 >> 2], aa);
    c = ea;
    ua = A;
    for (Aa = c + 8; c < Aa; ) e[ua++] = e[c++];
    D = q[a + 152 >> 2] * Z(ba, aa);
    z = q[a + 152 >> 2] * Z(ra, aa);
    H += q[a + 152 >> 2] * q[a + 152 >> 2] * (q[a + 220 >> 2] + q[a + 212 >> 2]) + q[a + 236 >> 2] * D * D + q[a + 228 >> 2] * z * z;
    J(U, a + 116, a + 200);
    J(Da, i, o);
    V(wa, ra, Da);
    Wc(fa, s, wa);
    J(ha, fa, U);
    w = S(ha, a + 132);
  }
  c = u + q[a + 152 >> 2] * w - q[a + 148 >> 2];
  m = 0;
  (H > 0 ? 7 : 8) == 7 && (m = -c / H);
  T(sa, q[a + 208 >> 2] * m, t);
  Sb(d, sa);
  h += q[a + 224 >> 2] * m * C;
  T(Ja, q[a + 212 >> 2] * m, A);
  Sb(i, Ja);
  j += q[a + 228 >> 2] * m * z;
  T(Sa, q[a + 216 >> 2] * m, t);
  Pd(k, Sa);
  p -= q[a + 232 >> 2] * m * B;
  T(Ta, q[a + 220 >> 2] * m, A);
  Pd(o, Ta);
  l -= q[a + 236 >> 2] * m * D;
  t = g[f + 24 >> 2] + g[a + 160 >> 2] * 12;
  c = d;
  ua = t;
  for (Aa = c + 8; c < Aa; ) e[ua++] = e[c++];
  q[g[f + 24 >> 2] + g[a + 160 >> 2] * 12 + 8 >> 2] = h;
  h = g[f + 24 >> 2] + g[a + 164 >> 2] * 12;
  c = i;
  ua = h;
  for (Aa = c + 8; c < Aa; ) e[ua++] = e[c++];
  q[g[f + 24 >> 2] + g[a + 164 >> 2] * 12 + 8 >> 2] = j;
  i = g[f + 24 >> 2] + g[a + 168 >> 2] * 12;
  c = k;
  ua = i;
  for (Aa = c + 8; c < Aa; ) e[ua++] = e[c++];
  q[g[f + 24 >> 2] + g[a + 168 >> 2] * 12 + 8 >> 2] = p;
  k = g[f + 24 >> 2] + g[a + 172 >> 2] * 12;
  c = o;
  ua = k;
  for (Aa = c + 8; c < Aa; ) e[ua++] = e[c++];
  q[g[f + 24 >> 2] + g[a + 172 >> 2] * 12 + 8 >> 2] = l;
  b = d;
  return !0;
}

ul.X = 1;

function vk(a, f) {
  g[a >> 2] = vl + 8;
  (g[f + 8 >> 2] != g[f + 12 >> 2] ? 2 : 1) == 1 && X(wl, 173, xl, yl);
  g[a + 4 >> 2] = g[f >> 2];
  g[a + 8 >> 2] = 0;
  g[a + 12 >> 2] = 0;
  g[a + 48 >> 2] = g[f + 8 >> 2];
  g[a + 52 >> 2] = g[f + 12 >> 2];
  g[a + 56 >> 2] = 0;
  e[a + 61] = e[f + 16] & 1;
  e[a + 60] = 0;
  g[a + 64 >> 2] = g[f + 4 >> 2];
  g[a + 20 >> 2] = 0;
  g[a + 16 >> 2] = 0;
  g[a + 24 >> 2] = 0;
  g[a + 28 >> 2] = 0;
  g[a + 36 >> 2] = 0;
  g[a + 32 >> 2] = 0;
  g[a + 40 >> 2] = 0;
  g[a + 44 >> 2] = 0;
}

vk.X = 1;

function zl(a, f) {
  var d = b;
  b += 8;
  var c;
  vk(a, f);
  g[a >> 2] = Al + 8;
  c = oh(f + 20) ? 2 : 1;
  c == 1 && X(Bl, 34, Cl, Dl);
  c = Vg(q[f + 28 >> 2]) ? 3 : 4;
  c == 3 && (c = q[f + 28 >> 2] >= 0 ? 5 : 4);
  c == 4 && X(Bl, 35, Cl, El);
  c = Vg(q[f + 32 >> 2]) ? 6 : 7;
  c == 6 && (c = q[f + 32 >> 2] >= 0 ? 8 : 7);
  c == 7 && X(Bl, 36, Cl, Fl);
  c = Vg(q[f + 36 >> 2]) ? 9 : 10;
  c == 9 && (c = q[f + 36 >> 2] >= 0 ? 11 : 10);
  c == 10 && X(Bl, 37, Cl, Gl);
  var h, i;
  c = f + 20;
  h = a + 76;
  for (i = c + 8; c < i; ) e[h++] = e[c++];
  h = a + 68;
  Ic(d, g[a + 52 >> 2] + 12, a + 76);
  c = d;
  for (i = c + 8; c < i; ) e[h++] = e[c++];
  q[a + 104 >> 2] = q[f + 28 >> 2];
  Xb(a + 96);
  q[a + 84 >> 2] = q[f + 32 >> 2];
  q[a + 88 >> 2] = q[f + 36 >> 2];
  q[a + 92 >> 2] = 0;
  q[a + 108 >> 2] = 0;
  b = d;
}

zl.X = 1;

function Hl(a, f) {
  var d = b;
  b += 96;
  var c, h, i = d + 8, j, k = d + 16, p, o, l = d + 24, m = d + 32, n = d + 40, r = d + 56, s = d + 72, u = d + 80, w = d + 88;
  g[a + 116 >> 2] = g[g[a + 52 >> 2] + 8 >> 2];
  c = g[a + 52 >> 2] + 28;
  p = a + 128;
  for (o = c + 8; c < o; ) e[p++] = e[c++];
  q[a + 136 >> 2] = q[g[a + 52 >> 2] + 120 >> 2];
  q[a + 140 >> 2] = q[g[a + 52 >> 2] + 128 >> 2];
  c = g[f + 24 >> 2] + g[a + 116 >> 2] * 12;
  p = d;
  for (o = c + 8; c < o; ) e[p++] = e[c++];
  h = q[g[f + 24 >> 2] + g[a + 116 >> 2] * 12 + 8 >> 2];
  c = g[f + 28 >> 2] + g[a + 116 >> 2] * 12;
  p = i;
  for (o = c + 8; c < o; ) e[p++] = e[c++];
  j = q[g[f + 28 >> 2] + g[a + 116 >> 2] * 12 + 8 >> 2];
  Xk(k, h);
  p = q[g[a + 52 >> 2] + 116 >> 2];
  o = q[a + 84 >> 2] * 6.2831854820251465;
  c = p * 2 * q[a + 88 >> 2] * o;
  p = p * o * o;
  o = q[f >> 2];
  (c + o * p > 1.1920928955078125e-7 ? 2 : 1) == 1 && X(Bl, 125, Il, Jl);
  q[a + 108 >> 2] = o * (c + o * p);
  c = q[a + 108 >> 2] != 0 ? 3 : 4;
  c == 3 && (q[a + 108 >> 2] = 1 / q[a + 108 >> 2]);
  q[a + 92 >> 2] = o * p * q[a + 108 >> 2];
  p = a + 120;
  J(m, a + 68, a + 128);
  Yc(l, k, m);
  c = l;
  for (o = c + 8; c < o; ) e[p++] = e[c++];
  q[n >> 2] = q[a + 136 >> 2] + q[a + 140 >> 2] * q[a + 124 >> 2] * q[a + 124 >> 2] + q[a + 108 >> 2];
  q[n + 4 >> 2] = -q[a + 140 >> 2] * q[a + 120 >> 2] * q[a + 124 >> 2];
  q[n + 8 >> 2] = q[n + 4 >> 2];
  q[n + 12 >> 2] = q[a + 136 >> 2] + q[a + 140 >> 2] * q[a + 120 >> 2] * q[a + 120 >> 2] + q[a + 108 >> 2];
  k = a + 144;
  hk(r, n);
  c = r;
  p = k;
  o = c + 16;
  if (p % 4 == c % 4) {
    for (; c % 4 !== 0 && c < o; ) e[p++] = e[c++];
    c >>= 2;
    p >>= 2;
    for (n = o >> 2; c < n; ) g[p++] = g[c++];
    c <<= 2;
    p <<= 2;
  }
  for (; c < o; ) e[p++] = e[c++];
  n = a + 160;
  V(u, d, a + 120);
  J(s, u, a + 76);
  c = s;
  p = n;
  for (o = c + 8; c < o; ) e[p++] = e[c++];
  sg(a + 160, q[a + 92 >> 2]);
  j *= .9800000190734863;
  s = a + 96;
  c = e[f + 20] & 1 ? 5 : 6;
  c == 5 ? (sg(s, q[f + 8 >> 2]), T(w, q[a + 136 >> 2], a + 96), Sb(i, w), j += q[a + 140 >> 2] * Z(a + 120, a + 96)) : c == 6 && Xb(s);
  w = g[f + 28 >> 2] + g[a + 116 >> 2] * 12;
  c = i;
  p = w;
  for (o = c + 8; c < o; ) e[p++] = e[c++];
  q[g[f + 28 >> 2] + g[a + 116 >> 2] * 12 + 8 >> 2] = j;
  b = d;
}

Hl.X = 1;

function Kl(a, f) {
  var d = b;
  b += 88;
  var c, h = d + 8, i = d + 16, j = d + 24, k = d + 32, p = d + 40, o = d + 48, l = d + 56, m = d + 64, n = d + 72, r = d + 80, s, u, w;
  s = g[f + 28 >> 2] + g[a + 116 >> 2] * 12;
  u = d;
  for (w = s + 8; s < w; ) e[u++] = e[s++];
  c = q[g[f + 28 >> 2] + g[a + 116 >> 2] * 12 + 8 >> 2];
  Hd(i, c, a + 120);
  V(h, d, i);
  s = a + 144;
  V(p, h, a + 160);
  T(o, q[a + 108 >> 2], a + 96);
  V(l, p, o);
  Xc(k, l);
  ik(j, s, k);
  s = a + 96;
  u = m;
  for (w = s + 8; s < w; ) e[u++] = e[s++];
  Sb(a + 96, j);
  h = q[f >> 2] * q[a + 104 >> 2];
  if ((Ad(a + 96) > h * h ? 1 : 2) == 1) k = a + 96, p = Nc(a + 96), sg(k, h / p);
  J(n, a + 96, m);
  s = n;
  u = j;
  for (w = s + 8; s < w; ) e[u++] = e[s++];
  T(r, q[a + 136 >> 2], j);
  Sb(d, r);
  c += q[a + 140 >> 2] * Z(a + 120, j);
  j = g[f + 28 >> 2] + g[a + 116 >> 2] * 12;
  s = d;
  u = j;
  for (w = s + 8; s < w; ) e[u++] = e[s++];
  q[g[f + 28 >> 2] + g[a + 116 >> 2] * 12 + 8 >> 2] = c;
  b = d;
}

Kl.X = 1;

function Ll(a) {
  q[a >> 2] = 0;
  q[a + 4 >> 2] = 0;
  q[a + 8 >> 2] = 0;
}

function Ml(a, f, d, c) {
  q[a >> 2] = f;
  q[a + 4 >> 2] = d;
  q[a + 8 >> 2] = c;
}

function Nl(a, f) {
  q[a >> 2] *= f;
  q[a + 4 >> 2] *= f;
  q[a + 8 >> 2] *= f;
}

function Ol(a, f) {
  var d = b;
  b += 8;
  vk(a, f);
  g[a >> 2] = Pl + 8;
  var c, h, i;
  c = f + 20;
  h = a + 68;
  for (i = c + 8; c < i; ) e[h++] = e[c++];
  c = f + 28;
  h = a + 76;
  for (i = c + 8; c < i; ) e[h++] = e[c++];
  c = f + 36;
  h = a + 84;
  for (i = c + 8; c < i; ) e[h++] = e[c++];
  Mc(a + 84);
  h = a + 92;
  Hd(d, 1, a + 84);
  c = d;
  for (i = c + 8; c < i; ) e[h++] = e[c++];
  q[a + 100 >> 2] = q[f + 44 >> 2];
  Ll(a + 104);
  q[a + 252 >> 2] = 0;
  q[a + 116 >> 2] = 0;
  q[a + 120 >> 2] = q[f + 52 >> 2];
  q[a + 124 >> 2] = q[f + 56 >> 2];
  q[a + 128 >> 2] = q[f + 64 >> 2];
  q[a + 132 >> 2] = q[f + 68 >> 2];
  e[a + 136] = e[f + 48] & 1;
  e[a + 137] = e[f + 60] & 1;
  g[a + 140 >> 2] = 0;
  Xb(a + 184);
  Xb(a + 192);
  b = d;
}

Ol.X = 1;

function Ql(a, f) {
  var d = b;
  b += 176;
  var c, h, i = d + 8, j, k = d + 16, p, o = d + 24, l, m = d + 32, n = d + 40, r = d + 48, s = d + 56, u = d + 64, w = d + 72, t = d + 80, A = d + 88, C = d + 96, z = d + 104, B = d + 112, D = d + 120, H = d + 128, G = d + 136, N = d + 144, M = d + 152, O = d + 160, R = d + 168;
  g[a + 144 >> 2] = g[g[a + 48 >> 2] + 8 >> 2];
  g[a + 148 >> 2] = g[g[a + 52 >> 2] + 8 >> 2];
  var W, E;
  c = g[a + 48 >> 2] + 28;
  W = a + 152;
  for (E = c + 8; c < E; ) e[W++] = e[c++];
  c = g[a + 52 >> 2] + 28;
  W = a + 160;
  for (E = c + 8; c < E; ) e[W++] = e[c++];
  q[a + 168 >> 2] = q[g[a + 48 >> 2] + 120 >> 2];
  q[a + 172 >> 2] = q[g[a + 52 >> 2] + 120 >> 2];
  q[a + 176 >> 2] = q[g[a + 48 >> 2] + 128 >> 2];
  q[a + 180 >> 2] = q[g[a + 52 >> 2] + 128 >> 2];
  c = g[f + 24 >> 2] + g[a + 144 >> 2] * 12;
  W = d;
  for (E = c + 8; c < E; ) e[W++] = e[c++];
  h = q[g[f + 24 >> 2] + g[a + 144 >> 2] * 12 + 8 >> 2];
  c = g[f + 28 >> 2] + g[a + 144 >> 2] * 12;
  W = i;
  for (E = c + 8; c < E; ) e[W++] = e[c++];
  j = q[g[f + 28 >> 2] + g[a + 144 >> 2] * 12 + 8 >> 2];
  c = g[f + 24 >> 2] + g[a + 148 >> 2] * 12;
  W = k;
  for (E = c + 8; c < E; ) e[W++] = e[c++];
  p = q[g[f + 24 >> 2] + g[a + 148 >> 2] * 12 + 8 >> 2];
  c = g[f + 28 >> 2] + g[a + 148 >> 2] * 12;
  W = o;
  for (E = c + 8; c < E; ) e[W++] = e[c++];
  l = q[g[f + 28 >> 2] + g[a + 148 >> 2] * 12 + 8 >> 2];
  Xk(m, h);
  Xk(n, p);
  J(s, a + 68, a + 152);
  Yc(r, m, s);
  J(w, a + 76, a + 160);
  Yc(u, n, w);
  J(C, k, d);
  V(A, C, u);
  J(t, A, r);
  h = q[a + 168 >> 2];
  k = q[a + 172 >> 2];
  p = q[a + 176 >> 2];
  n = q[a + 180 >> 2];
  W = a + 184;
  Yc(z, m, a + 84);
  c = z;
  for (E = c + 8; c < E; ) e[W++] = e[c++];
  V(B, t, r);
  q[a + 208 >> 2] = Z(B, a + 184);
  q[a + 212 >> 2] = Z(u, a + 184);
  q[a + 252 >> 2] = h + k + p * q[a + 208 >> 2] * q[a + 208 >> 2] + n * q[a + 212 >> 2] * q[a + 212 >> 2];
  c = q[a + 252 >> 2] > 0 ? 1 : 2;
  c == 1 && (q[a + 252 >> 2] = 1 / q[a + 252 >> 2]);
  z = a + 192;
  Yc(D, m, a + 92);
  c = D;
  W = z;
  for (E = c + 8; c < E; ) e[W++] = e[c++];
  V(H, t, r);
  q[a + 200 >> 2] = Z(H, a + 192);
  q[a + 204 >> 2] = Z(u, a + 192);
  c = h + k + p * q[a + 200 >> 2] * q[a + 200 >> 2] + n * q[a + 204 >> 2] * q[a + 204 >> 2];
  m = p * q[a + 200 >> 2] + n * q[a + 204 >> 2];
  r = p * q[a + 200 >> 2] * q[a + 208 >> 2] + n * q[a + 204 >> 2] * q[a + 212 >> 2];
  u = p + n;
  (p + n == 0 ? 3 : 4) == 3 && (u = 1);
  D = p * q[a + 208 >> 2] + n * q[a + 212 >> 2];
  H = h + k + p * q[a + 208 >> 2] * q[a + 208 >> 2] + n * q[a + 212 >> 2] * q[a + 212 >> 2];
  Ml(a + 216, c, m, r);
  Ml(a + 228, m, u, D);
  Ml(a + 240, r, D, H);
  c = e[a + 136] & 1 ? 5 : 14;
  a : do if (c == 5) if (m = S(a + 184, t), c = pd(q[a + 124 >> 2] - q[a + 120 >> 2]) < .009999999776482582 ? 6 : 7, c == 6) g[a + 140 >> 2] = 3; else {
    if (c == 7) if (c = m <= q[a + 120 >> 2] ? 8 : 10, c == 8) {
      if (g[a + 140 >> 2] == 1) break a;
      g[a + 140 >> 2] = 1;
      q[a + 112 >> 2] = 0;
    } else if (c == 10) if (r = a + 140, c = m >= q[a + 124 >> 2] ? 11 : 13, c == 11) {
      if (g[r >> 2] == 2) break a;
      g[a + 140 >> 2] = 2;
      q[a + 112 >> 2] = 0;
    } else c == 13 && (g[r >> 2] = 0, q[a + 112 >> 2] = 0);
  } else c == 14 && (g[a + 140 >> 2] = 0, q[a + 112 >> 2] = 0); while (0);
  c = (e[a + 137] & 1) == 0 ? 16 : 17;
  c == 16 && (q[a + 116 >> 2] = 0);
  t = a + 104;
  c = e[f + 20] & 1 ? 18 : 19;
  c == 18 ? (Nl(t, q[f + 8 >> 2]), q[a + 116 >> 2] *= q[f + 8 >> 2], T(N, q[a + 104 >> 2], a + 192), T(M, q[a + 116 >> 2] + q[a + 112 >> 2], a + 184), V(G, N, M), N = q[a + 104 >> 2] * q[a + 200 >> 2] + q[a + 108 >> 2] + (q[a + 116 >> 2] + q[a + 112 >> 2]) * q[a + 208 >> 2], M = q[a + 104 >> 2] * q[a + 204 >> 2] + q[a + 108 >> 2] + (q[a + 116 >> 2] + q[a + 112 >> 2]) * q[a + 212 >> 2], T(O, h, G), Pd(i, O), j -= p * N, T(R, k, G), Sb(o, R), l += n * M) : c == 19 && (Ll(t), q[a + 116 >> 2] = 0);
  G = g[f + 28 >> 2] + g[a + 144 >> 2] * 12;
  c = i;
  W = G;
  for (E = c + 8; c < E; ) e[W++] = e[c++];
  q[g[f + 28 >> 2] + g[a + 144 >> 2] * 12 + 8 >> 2] = j;
  i = g[f + 28 >> 2] + g[a + 148 >> 2] * 12;
  c = o;
  W = i;
  for (E = c + 8; c < E; ) e[W++] = e[c++];
  q[g[f + 28 >> 2] + g[a + 148 >> 2] * 12 + 8 >> 2] = l;
  b = d;
}

Ql.X = 1;

function Rl(a, f) {
  Ml(a, -q[f >> 2], -q[f + 4 >> 2], -q[f + 8 >> 2]);
}

function Sl(a, f) {
  q[a >> 2] += q[f >> 2];
  q[a + 4 >> 2] += q[f + 4 >> 2];
  q[a + 8 >> 2] += q[f + 8 >> 2];
}

function Tl(a, f, d) {
  kc(a, q[f >> 2] * q[d >> 2] + q[f + 12 >> 2] * q[d + 4 >> 2], q[f + 4 >> 2] * q[d >> 2] + q[f + 16 >> 2] * q[d + 4 >> 2]);
}

function Ul(a, f) {
  var d = b;
  b += 292;
  var c, h, i = d + 8, j, k, p, o, l, m = d + 16, n, r = d + 24, s = d + 32, u = d + 40, w = d + 48, t = d + 56, A;
  A = d + 64;
  var C = d + 72, z = d + 84, B = d + 96, D = d + 108, H = d + 120, G = d + 128, N = d + 136, M = d + 144, O = d + 152, R = d + 160, W = d + 168, E = d + 176, Q = d + 188, K = d + 196, P = d + 204, aa = d + 212, ba = d + 220, Y = d + 228, ra = d + 236, ca = d + 244, ea = d + 252, U = d + 260, fa = d + 268, wa = d + 276, Da = d + 284, ha;
  c = g[f + 28 >> 2] + g[a + 144 >> 2] * 12;
  n = d;
  for (ha = c + 8; c < ha; ) e[n++] = e[c++];
  h = q[g[f + 28 >> 2] + g[a + 144 >> 2] * 12 + 8 >> 2];
  c = g[f + 28 >> 2] + g[a + 148 >> 2] * 12;
  n = i;
  for (ha = c + 8; c < ha; ) e[n++] = e[c++];
  j = q[g[f + 28 >> 2] + g[a + 148 >> 2] * 12 + 8 >> 2];
  k = q[a + 168 >> 2];
  p = q[a + 172 >> 2];
  o = q[a + 176 >> 2];
  l = q[a + 180 >> 2];
  c = e[a + 137] & 1 ? 1 : 3;
  c == 1 && g[a + 140 >> 2] != 3 && (c = a + 184, J(m, i, d), c = S(c, m) + q[a + 212 >> 2] * j - q[a + 208 >> 2] * h, c = q[a + 252 >> 2] * (q[a + 132 >> 2] - c), m = q[a + 116 >> 2], n = q[f >> 2] * q[a + 128 >> 2], q[a + 116 >> 2] = Ai(q[a + 116 >> 2] + c, -n, n), c = q[a + 116 >> 2] - m, T(r, c, a + 184), m = c * q[a + 208 >> 2], c *= q[a + 212 >> 2], T(s, k, r), Pd(d, s), h -= o * m, T(u, p, r), Sb(i, u), j += l * c);
  r = a + 192;
  J(t, i, d);
  q[w >> 2] = S(r, t) + q[a + 204 >> 2] * j - q[a + 200 >> 2] * h;
  q[w + 4 >> 2] = j - h;
  c = e[a + 136] & 1 ? 4 : 10;
  if (c == 4) if (g[a + 140 >> 2] == 0) c = 10; else {
    t = a + 184;
    J(A, i, d);
    A = S(t, A) + q[a + 212 >> 2] * j - q[a + 208 >> 2] * h;
    Og(C, q[w >> 2], q[w + 4 >> 2], A);
    c = a + 104;
    n = z;
    ha = c + 12;
    if (n % 4 == c % 4) {
      for (; c % 4 !== 0 && c < ha; ) e[n++] = e[c++];
      c >>= 2;
      n >>= 2;
      for (A = ha >> 2; c < A; ) g[n++] = g[c++];
      c <<= 2;
      n <<= 2;
    }
    for (; c < ha; ) e[n++] = e[c++];
    A = a + 216;
    Rl(D, C);
    Tg(B, A, D);
    Sl(a + 104, B);
    c = g[a + 140 >> 2] == 1 ? 6 : 7;
    c == 6 ? q[a + 112 >> 2] = q[a + 112 >> 2] > 0 ? q[a + 112 >> 2] : 0 : c == 7 && (g[a + 140 >> 2] != 2 || (q[a + 112 >> 2] = q[a + 112 >> 2] < 0 ? q[a + 112 >> 2] : 0));
    Xc(G, w);
    C = q[a + 112 >> 2] - q[z + 8 >> 2];
    kc(M, q[a + 240 >> 2], q[a + 244 >> 2]);
    T(N, C, M);
    J(H, G, N);
    Pg(R, a + 216, H);
    kc(W, q[z >> 2], q[z + 4 >> 2]);
    V(O, R, W);
    q[a + 104 >> 2] = q[O >> 2];
    q[a + 108 >> 2] = q[O + 4 >> 2];
    H = a + 104;
    Og(E, q[H >> 2] - q[z >> 2], q[H + 4 >> 2] - q[z + 4 >> 2], q[H + 8 >> 2] - q[z + 8 >> 2]);
    c = E;
    n = B;
    ha = c + 12;
    if (n % 4 == c % 4) {
      for (; c % 4 !== 0 && c < ha; ) e[n++] = e[c++];
      c >>= 2;
      n >>= 2;
      for (A = ha >> 2; c < A; ) g[n++] = g[c++];
      c <<= 2;
      n <<= 2;
    }
    for (; c < ha; ) e[n++] = e[c++];
    T(K, q[B >> 2], a + 192);
    T(P, q[B + 8 >> 2], a + 184);
    V(Q, K, P);
    z = q[B >> 2] * q[a + 200 >> 2] + q[B + 4 >> 2] + q[B + 8 >> 2] * q[a + 208 >> 2];
    B = q[B >> 2] * q[a + 204 >> 2] + q[B + 4 >> 2] + q[B + 8 >> 2] * q[a + 212 >> 2];
    T(aa, k, Q);
    Pd(d, aa);
    h -= o * z;
    T(ba, p, Q);
    Sb(i, ba);
    j += l * B;
    c = 13;
  }
  a : do if (c == 10) {
    Q = a + 216;
    Xc(ra, w);
    Pg(Y, Q, ra);
    q[a + 104 >> 2] += q[Y >> 2];
    q[a + 108 >> 2] += q[Y + 4 >> 2];
    T(ca, q[Y >> 2], a + 192);
    Q = q[Y >> 2] * q[a + 200 >> 2] + q[Y + 4 >> 2];
    aa = q[Y >> 2] * q[a + 204 >> 2] + q[Y + 4 >> 2];
    T(ea, k, ca);
    Pd(d, ea);
    h -= o * Q;
    T(U, p, ca);
    Sb(i, U);
    j += l * aa;
    Q = fa;
    c = w;
    n = Q;
    for (ha = c + 8; c < ha; ) e[n++] = e[c++];
    Q = a + 192;
    J(wa, i, d);
    q[w >> 2] = S(Q, wa) + q[a + 204 >> 2] * j - q[a + 200 >> 2] * h;
    q[w + 4 >> 2] = j - h;
    c = pd(q[w >> 2]) > .009999999776482582 ? 12 : 11;
    if (c == 11 && pd(q[w + 4 >> 2]) <= .009999999776482582) break a;
    Tl(Da, a + 216, Y);
    q[w >> 2] = q[w >> 2];
  } while (0);
  k = g[f + 28 >> 2] + g[a + 144 >> 2] * 12;
  c = d;
  n = k;
  for (ha = c + 8; c < ha; ) e[n++] = e[c++];
  q[g[f + 28 >> 2] + g[a + 144 >> 2] * 12 + 8 >> 2] = h;
  h = g[f + 28 >> 2] + g[a + 148 >> 2] * 12;
  c = i;
  n = h;
  for (ha = c + 8; c < ha; ) e[n++] = e[c++];
  q[g[f + 28 >> 2] + g[a + 148 >> 2] * 12 + 8 >> 2] = j;
  b = d;
}

Ul.X = 1;

function Vl(a, f, d) {
  var c, h, i, j;
  c = q[f >> 2];
  h = q[f + 8 >> 2];
  i = q[f + 4 >> 2];
  f = q[f + 12 >> 2];
  j = c * f - h * i;
  if ((j != 0 ? 1 : 2) == 1) j = 1 / j;
  q[a >> 2] = j * (f * q[d >> 2] - h * q[d + 4 >> 2]);
  q[a + 4 >> 2] = j * (c * q[d + 4 >> 2] - i * q[d >> 2]);
}

Vl.X = 1;

function Wl(a, f) {
  var d = b;
  b += 284;
  var c, h, i = d + 8, j, k = d + 16, p = d + 24, o, l, m, n, r = d + 32, s = d + 40, u = d + 48, w = d + 56, t = d + 64, A = d + 72, C = d + 80, z = d + 88, B = d + 96, D = d + 104, H = d + 112, G = d + 120, N = d + 132, M, O, R, W, E, Q = d + 140, K = d + 176, P = d + 188, aa = d + 200;
  R = d + 212;
  W = d + 228;
  E = d + 236;
  var ba = d + 244, Y = d + 252, ra = d + 260, ca = d + 268, ea = d + 276;
  O = g[f + 24 >> 2] + g[a + 144 >> 2] * 12;
  c = d;
  for (M = O + 8; O < M; ) e[c++] = e[O++];
  h = q[g[f + 24 >> 2] + g[a + 144 >> 2] * 12 + 8 >> 2];
  O = g[f + 24 >> 2] + g[a + 148 >> 2] * 12;
  c = i;
  for (M = O + 8; O < M; ) e[c++] = e[O++];
  j = q[g[f + 24 >> 2] + g[a + 148 >> 2] * 12 + 8 >> 2];
  Xk(k, h);
  Xk(p, j);
  o = q[a + 168 >> 2];
  l = q[a + 172 >> 2];
  m = q[a + 176 >> 2];
  n = q[a + 180 >> 2];
  J(s, a + 68, a + 152);
  Yc(r, k, s);
  J(w, a + 76, a + 160);
  Yc(u, p, w);
  V(C, i, u);
  J(A, C, d);
  J(t, A, r);
  Yc(z, k, a + 84);
  V(B, t, r);
  s = Z(B, z);
  p = Z(u, z);
  Yc(D, k, a + 92);
  V(H, t, r);
  r = Z(H, D);
  H = Z(u, D);
  q[N >> 2] = S(D, t);
  q[N + 4 >> 2] = j - h - q[a + 100 >> 2];
  u = pd(q[N >> 2]);
  k = pd(q[N + 4 >> 2]);
  O = M = 0;
  c = e[a + 136] & 1 ? 1 : 7;
  a : do if (c == 1) if (A = w = S(z, t), c = pd(q[a + 124 >> 2] - q[a + 120 >> 2]) < .009999999776482582 ? 2 : 3, c == 2) O = Ai(A, -.20000000298023224, .20000000298023224), u = u > pd(w) ? u : pd(w), M = 1; else if (c == 3) if (C = w, c = A <= q[a + 120 >> 2] ? 4 : 5, c == 4) O = Ai(C - q[a + 120 >> 2] + .004999999888241291, -.20000000298023224, 0), u = u > q[a + 120 >> 2] - w ? u : q[a + 120 >> 2] - w, M = 1; else if (c == 5) {
    if (!(C >= q[a + 124 >> 2])) break a;
    O = Ai(w - q[a + 124 >> 2] - .004999999888241291, 0, .20000000298023224);
    u = u > w - q[a + 124 >> 2] ? u : w - q[a + 124 >> 2];
    M = 1;
  } while (0);
  t = o + l + m * r * r + n * H * H;
  c = M & 1 ? 8 : 11;
  if (c == 8) {
    R = m * r + n * H;
    W = m * r * s + n * H * p;
    E = m + n;
    (E == 0 ? 9 : 10) == 9 && (E = 1);
    c = m * s + n * p;
    M = o + l + m * s * s + n * p * p;
    Ml(Q, t, R, W);
    Ml(Q + 12, R, E, c);
    Ml(Q + 24, W, c, M);
    q[K >> 2] = q[N >> 2];
    q[K + 4 >> 2] = q[N + 4 >> 2];
    q[K + 8 >> 2] = O;
    Rl(aa, K);
    Tg(P, Q, aa);
    O = P;
    c = G;
    M = O + 12;
    if (c % 4 == O % 4) {
      for (; O % 4 !== 0 && O < M; ) e[c++] = e[O++];
      O >>= 2;
      c >>= 2;
      for (N = M >> 2; O < N; ) g[c++] = g[O++];
      O <<= 2;
      c <<= 2;
    }
    for (; O < M; ) e[c++] = e[O++];
  } else c == 11 && (Q = m * r + n * H, K = m + n, (K == 0 ? 12 : 13) == 12 && (K = 1), ac(R, t, Q), ac(R + 8, Q, K), Xc(E, N), Vl(W, R, E), q[G >> 2] = q[W >> 2], q[G + 4 >> 2] = q[W + 4 >> 2], q[G + 8 >> 2] = 0);
  T(Y, q[G >> 2], D);
  T(ra, q[G + 8 >> 2], z);
  V(ba, Y, ra);
  z = q[G >> 2] * r + q[G + 4 >> 2] + q[G + 8 >> 2] * s;
  G = q[G >> 2] * H + q[G + 4 >> 2] + q[G + 8 >> 2] * p;
  T(ca, o, ba);
  Pd(d, ca);
  h -= m * z;
  T(ea, l, ba);
  Sb(i, ea);
  j += n * G;
  o = g[f + 24 >> 2] + g[a + 144 >> 2] * 12;
  O = d;
  c = o;
  for (M = O + 8; O < M; ) e[c++] = e[O++];
  q[g[f + 24 >> 2] + g[a + 144 >> 2] * 12 + 8 >> 2] = h;
  h = g[f + 24 >> 2] + g[a + 148 >> 2] * 12;
  O = i;
  c = h;
  for (M = O + 8; O < M; ) e[c++] = e[O++];
  q[g[f + 24 >> 2] + g[a + 148 >> 2] * 12 + 8 >> 2] = j;
  if (u <= .004999999888241291) c = 15; else {
    var U = 0;
    c = 16;
  }
  c == 15 && (U = k <= .03490658849477768);
  b = d;
  return U;
}

Wl.X = 1;

function Xl(a) {
  var f, d;
  f = g[g[a + 48 >> 2] + 8 >> 2];
  d = g[g[a + 52 >> 2] + 8 >> 2];
  $(Yl, F(1, "i32", v));
  $(Nk, F([ f, 0, 0, 0 ], [ "i32", 0, 0, 0 ], v));
  $(Ok, F([ d, 0, 0, 0 ], [ "i32", 0, 0, 0 ], v));
  $(Pk, F([ e[a + 61] & 1, 0, 0, 0 ], [ "i32", 0, 0, 0 ], v));
  $(Qk, F([ q[a + 68 >> 2], 0, 0, 0, 0, 0, 0, 0, q[a + 72 >> 2], 0, 0, 0, 0, 0, 0, 0 ], [ "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0 ], v));
  $(Rk, F([ q[a + 76 >> 2], 0, 0, 0, 0, 0, 0, 0, q[a + 80 >> 2], 0, 0, 0, 0, 0, 0, 0 ], [ "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0 ], v));
  $(Zl, F([ q[a + 84 >> 2], 0, 0, 0, 0, 0, 0, 0, q[a + 88 >> 2], 0, 0, 0, 0, 0, 0, 0 ], [ "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0 ], v));
  $($l, F([ q[a + 100 >> 2], 0, 0, 0, 0, 0, 0, 0 ], [ "double", 0, 0, 0, 0, 0, 0, 0 ], v));
  $(am, F([ e[a + 136] & 1, 0, 0, 0 ], [ "i32", 0, 0, 0 ], v));
  $(bm, F([ q[a + 120 >> 2], 0, 0, 0, 0, 0, 0, 0 ], [ "double", 0, 0, 0, 0, 0, 0, 0 ], v));
  $(cm, F([ q[a + 124 >> 2], 0, 0, 0, 0, 0, 0, 0 ], [ "double", 0, 0, 0, 0, 0, 0, 0 ], v));
  $(dm, F([ e[a + 137] & 1, 0, 0, 0 ], [ "i32", 0, 0, 0 ], v));
  $(em, F([ q[a + 132 >> 2], 0, 0, 0, 0, 0, 0, 0 ], [ "double", 0, 0, 0, 0, 0, 0, 0 ], v));
  $(fm, F([ q[a + 128 >> 2], 0, 0, 0, 0, 0, 0, 0 ], [ "double", 0, 0, 0, 0, 0, 0, 0 ], v));
  $(Vk, F([ g[a + 56 >> 2], 0, 0, 0 ], [ "i32", 0, 0, 0 ], v));
}

Xl.X = 1;

function gm(a, f) {
  vk(a, f);
  g[a >> 2] = hm + 8;
  var d, c, h;
  d = f + 20;
  c = a + 68;
  for (h = d + 8; d < h; ) e[c++] = e[d++];
  d = f + 28;
  c = a + 76;
  for (h = d + 8; d < h; ) e[c++] = e[d++];
  d = f + 36;
  c = a + 92;
  for (h = d + 8; d < h; ) e[c++] = e[d++];
  d = f + 44;
  c = a + 100;
  for (h = d + 8; d < h; ) e[c++] = e[d++];
  q[a + 84 >> 2] = q[f + 52 >> 2];
  q[a + 88 >> 2] = q[f + 56 >> 2];
  (q[f + 60 >> 2] != 0 ? 2 : 1) == 1 && X(im, 65, jm, km);
  q[a + 112 >> 2] = q[f + 60 >> 2];
  q[a + 108 >> 2] = q[f + 52 >> 2] + q[a + 112 >> 2] * q[f + 56 >> 2];
  q[a + 116 >> 2] = 0;
}

gm.X = 1;

function lm(a, f) {
  var d = b;
  b += 144;
  var c, h, i = d + 8, j, k = d + 16, p, o = d + 24, l, m = d + 32, n = d + 40, r = d + 48, s = d + 56, u = d + 64, w = d + 72, t = d + 80, A = d + 88, C = d + 96, z = d + 104, B = d + 112, D = d + 120, H = d + 128, G = d + 136;
  g[a + 120 >> 2] = g[g[a + 48 >> 2] + 8 >> 2];
  g[a + 124 >> 2] = g[g[a + 52 >> 2] + 8 >> 2];
  var N, M;
  c = g[a + 48 >> 2] + 28;
  N = a + 160;
  for (M = c + 8; c < M; ) e[N++] = e[c++];
  c = g[a + 52 >> 2] + 28;
  N = a + 168;
  for (M = c + 8; c < M; ) e[N++] = e[c++];
  q[a + 176 >> 2] = q[g[a + 48 >> 2] + 120 >> 2];
  q[a + 180 >> 2] = q[g[a + 52 >> 2] + 120 >> 2];
  q[a + 184 >> 2] = q[g[a + 48 >> 2] + 128 >> 2];
  q[a + 188 >> 2] = q[g[a + 52 >> 2] + 128 >> 2];
  c = g[f + 24 >> 2] + g[a + 120 >> 2] * 12;
  N = d;
  for (M = c + 8; c < M; ) e[N++] = e[c++];
  h = q[g[f + 24 >> 2] + g[a + 120 >> 2] * 12 + 8 >> 2];
  c = g[f + 28 >> 2] + g[a + 120 >> 2] * 12;
  N = i;
  for (M = c + 8; c < M; ) e[N++] = e[c++];
  j = q[g[f + 28 >> 2] + g[a + 120 >> 2] * 12 + 8 >> 2];
  c = g[f + 24 >> 2] + g[a + 124 >> 2] * 12;
  N = k;
  for (M = c + 8; c < M; ) e[N++] = e[c++];
  p = q[g[f + 24 >> 2] + g[a + 124 >> 2] * 12 + 8 >> 2];
  c = g[f + 28 >> 2] + g[a + 124 >> 2] * 12;
  N = o;
  for (M = c + 8; c < M; ) e[N++] = e[c++];
  l = q[g[f + 28 >> 2] + g[a + 124 >> 2] * 12 + 8 >> 2];
  Xk(m, h);
  Xk(n, p);
  h = a + 144;
  J(s, a + 92, a + 160);
  Yc(r, m, s);
  c = r;
  N = h;
  for (M = c + 8; c < M; ) e[N++] = e[c++];
  m = a + 152;
  J(w, a + 100, a + 168);
  Yc(u, n, w);
  c = u;
  N = m;
  for (M = c + 8; c < M; ) e[N++] = e[c++];
  n = a + 128;
  V(A, d, a + 144);
  J(t, A, a + 68);
  c = t;
  N = n;
  for (M = c + 8; c < M; ) e[N++] = e[c++];
  t = a + 136;
  V(z, k, a + 152);
  J(C, z, a + 76);
  c = C;
  N = t;
  for (M = c + 8; c < M; ) e[N++] = e[c++];
  k = Nc(a + 128);
  C = Nc(a + 136);
  c = k > .04999999701976776 ? 1 : 2;
  c == 1 ? sg(a + 128, 1 / k) : c == 2 && Xb(a + 128);
  c = C > .04999999701976776 ? 4 : 5;
  c == 4 ? sg(a + 136, 1 / C) : c == 5 && Xb(a + 136);
  c = Z(a + 144, a + 128);
  k = Z(a + 152, a + 136);
  q[a + 192 >> 2] = q[a + 176 >> 2] + q[a + 184 >> 2] * c * c + q[a + 112 >> 2] * q[a + 112 >> 2] * (q[a + 180 >> 2] + q[a + 188 >> 2] * k * k);
  c = q[a + 192 >> 2] > 0 ? 7 : 8;
  c == 7 && (q[a + 192 >> 2] = 1 / q[a + 192 >> 2]);
  c = e[f + 20] & 1 ? 9 : 10;
  c == 9 ? (q[a + 116 >> 2] *= q[f + 8 >> 2], T(B, -q[a + 116 >> 2], a + 128), T(D, -q[a + 112 >> 2] * q[a + 116 >> 2], a + 136), T(H, q[a + 176 >> 2], B), Sb(i, H), j += q[a + 184 >> 2] * Z(a + 144, B), T(G, q[a + 180 >> 2], D), Sb(o, G), l += q[a + 188 >> 2] * Z(a + 152, D)) : c == 10 && (q[a + 116 >> 2] = 0);
  B = g[f + 28 >> 2] + g[a + 120 >> 2] * 12;
  c = i;
  N = B;
  for (M = c + 8; c < M; ) e[N++] = e[c++];
  q[g[f + 28 >> 2] + g[a + 120 >> 2] * 12 + 8 >> 2] = j;
  i = g[f + 28 >> 2] + g[a + 124 >> 2] * 12;
  c = o;
  N = i;
  for (M = c + 8; c < M; ) e[N++] = e[c++];
  q[g[f + 28 >> 2] + g[a + 124 >> 2] * 12 + 8 >> 2] = l;
  b = d;
}

lm.X = 1;

function mm(a, f) {
  var d = b;
  b += 80;
  var c, h = d + 8, i, j = d + 16, k = d + 24, p = d + 32, o = d + 40, l, m = d + 48, n = d + 56, r = d + 64, s = d + 72, u, w;
  l = g[f + 28 >> 2] + g[a + 120 >> 2] * 12;
  u = d;
  for (w = l + 8; l < w; ) e[u++] = e[l++];
  c = q[g[f + 28 >> 2] + g[a + 120 >> 2] * 12 + 8 >> 2];
  l = g[f + 28 >> 2] + g[a + 124 >> 2] * 12;
  u = h;
  for (w = l + 8; l < w; ) e[u++] = e[l++];
  i = q[g[f + 28 >> 2] + g[a + 124 >> 2] * 12 + 8 >> 2];
  Hd(k, c, a + 144);
  V(j, d, k);
  Hd(o, i, a + 152);
  V(p, h, o);
  l = -q[a + 192 >> 2] * (-S(a + 128, j) - q[a + 112 >> 2] * S(a + 136, p));
  q[a + 116 >> 2] += l;
  T(m, -l, a + 128);
  T(n, -q[a + 112 >> 2] * l, a + 136);
  T(r, q[a + 176 >> 2], m);
  Sb(d, r);
  c += q[a + 184 >> 2] * Z(a + 144, m);
  T(s, q[a + 180 >> 2], n);
  Sb(h, s);
  i += q[a + 188 >> 2] * Z(a + 152, n);
  m = g[f + 28 >> 2] + g[a + 120 >> 2] * 12;
  l = d;
  u = m;
  for (w = l + 8; l < w; ) e[u++] = e[l++];
  q[g[f + 28 >> 2] + g[a + 120 >> 2] * 12 + 8 >> 2] = c;
  c = g[f + 28 >> 2] + g[a + 124 >> 2] * 12;
  l = h;
  u = c;
  for (w = l + 8; l < w; ) e[u++] = e[l++];
  q[g[f + 28 >> 2] + g[a + 124 >> 2] * 12 + 8 >> 2] = i;
  b = d;
}

mm.X = 1;

function nm(a) {
  var f, d;
  f = g[g[a + 48 >> 2] + 8 >> 2];
  d = g[g[a + 52 >> 2] + 8 >> 2];
  $(om, F(1, "i32", v));
  $(Nk, F([ f, 0, 0, 0 ], [ "i32", 0, 0, 0 ], v));
  $(Ok, F([ d, 0, 0, 0 ], [ "i32", 0, 0, 0 ], v));
  $(Pk, F([ e[a + 61] & 1, 0, 0, 0 ], [ "i32", 0, 0, 0 ], v));
  $(pm, F([ q[a + 68 >> 2], 0, 0, 0, 0, 0, 0, 0, q[a + 72 >> 2], 0, 0, 0, 0, 0, 0, 0 ], [ "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0 ], v));
  $(qm, F([ q[a + 76 >> 2], 0, 0, 0, 0, 0, 0, 0, q[a + 80 >> 2], 0, 0, 0, 0, 0, 0, 0 ], [ "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0 ], v));
  $(Qk, F([ q[a + 92 >> 2], 0, 0, 0, 0, 0, 0, 0, q[a + 96 >> 2], 0, 0, 0, 0, 0, 0, 0 ], [ "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0 ], v));
  $(Rk, F([ q[a + 100 >> 2], 0, 0, 0, 0, 0, 0, 0, q[a + 104 >> 2], 0, 0, 0, 0, 0, 0, 0 ], [ "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0 ], v));
  $(rm, F([ q[a + 84 >> 2], 0, 0, 0, 0, 0, 0, 0 ], [ "double", 0, 0, 0, 0, 0, 0, 0 ], v));
  $(sm, F([ q[a + 88 >> 2], 0, 0, 0, 0, 0, 0, 0 ], [ "double", 0, 0, 0, 0, 0, 0, 0 ], v));
  $(tl, F([ q[a + 112 >> 2], 0, 0, 0, 0, 0, 0, 0 ], [ "double", 0, 0, 0, 0, 0, 0, 0 ], v));
  $(Vk, F([ g[a + 56 >> 2], 0, 0, 0 ], [ "i32", 0, 0, 0 ], v));
}

nm.X = 1;

function tm(a, f) {
  vk(a, f);
  g[a >> 2] = um + 8;
  var d, c, h;
  d = f + 20;
  c = a + 68;
  for (h = d + 8; d < h; ) e[c++] = e[d++];
  d = f + 28;
  c = a + 76;
  for (h = d + 8; d < h; ) e[c++] = e[d++];
  q[a + 116 >> 2] = q[f + 36 >> 2];
  Ll(a + 84);
  q[a + 96 >> 2] = 0;
  q[a + 120 >> 2] = q[f + 44 >> 2];
  q[a + 124 >> 2] = q[f + 48 >> 2];
  q[a + 104 >> 2] = q[f + 60 >> 2];
  q[a + 108 >> 2] = q[f + 56 >> 2];
  e[a + 112] = e[f + 40] & 1;
  e[a + 100] = e[f + 52] & 1;
  g[a + 224 >> 2] = 0;
}

tm.X = 1;

function vm(a, f) {
  var d = b;
  b += 128;
  var c, h, i = d + 8, j;
  c = d + 16;
  var k = d + 24, p = d + 32, o = d + 40, l = d + 48, m = d + 56, n = d + 64, r = d + 72, s = d + 80, u = d + 88, w, t, A, C = d + 96, z = d + 104, B = d + 112, D = d + 120;
  w = g[f + 24 >> 2] + g[a + 120 >> 2] * 12;
  t = d;
  for (A = w + 8; w < A; ) e[t++] = e[w++];
  h = q[g[f + 24 >> 2] + g[a + 120 >> 2] * 12 + 8 >> 2];
  w = g[f + 24 >> 2] + g[a + 124 >> 2] * 12;
  t = i;
  for (A = w + 8; w < A; ) e[t++] = e[w++];
  j = q[g[f + 24 >> 2] + g[a + 124 >> 2] * 12 + 8 >> 2];
  Xk(c, h);
  Xk(k, j);
  J(o, a + 92, a + 160);
  Yc(p, c, o);
  J(m, a + 100, a + 168);
  Yc(l, k, m);
  V(r, d, p);
  J(n, r, a + 68);
  V(u, i, l);
  J(s, u, a + 76);
  w = Nc(n);
  t = Nc(s);
  c = w > .04999999701976776 ? 1 : 2;
  c == 1 ? sg(n, 1 / w) : c == 2 && Xb(n);
  c = t > .04999999701976776 ? 4 : 5;
  c == 4 ? sg(s, 1 / t) : c == 5 && Xb(s);
  c = Z(p, n);
  A = Z(l, s);
  c = q[a + 176 >> 2] + q[a + 184 >> 2] * c * c;
  k = q[a + 180 >> 2] + q[a + 188 >> 2] * A * A;
  A = c + q[a + 112 >> 2] * q[a + 112 >> 2] * k;
  c = c + q[a + 112 >> 2] * q[a + 112 >> 2] * k > 0 ? 7 : 8;
  c == 7 && (A = 1 / A);
  w = q[a + 108 >> 2] - w - q[a + 112 >> 2] * t;
  c = pd(w);
  w *= -A;
  T(C, -w, n);
  T(z, -q[a + 112 >> 2] * w, s);
  T(B, q[a + 176 >> 2], C);
  Sb(d, B);
  h += q[a + 184 >> 2] * Z(p, C);
  T(D, q[a + 180 >> 2], z);
  Sb(i, D);
  j += q[a + 188 >> 2] * Z(l, z);
  p = g[f + 24 >> 2] + g[a + 120 >> 2] * 12;
  w = d;
  t = p;
  for (A = w + 8; w < A; ) e[t++] = e[w++];
  q[g[f + 24 >> 2] + g[a + 120 >> 2] * 12 + 8 >> 2] = h;
  h = g[f + 24 >> 2] + g[a + 124 >> 2] * 12;
  w = i;
  t = h;
  for (A = w + 8; w < A; ) e[t++] = e[w++];
  q[g[f + 24 >> 2] + g[a + 124 >> 2] * 12 + 8 >> 2] = j;
  b = d;
  return c < .004999999888241291;
}

vm.X = 1;

function wm(a, f) {
  var d = b;
  b += 104;
  var c, h, i = d + 8, j, k, p = d + 24, o, l = d + 32, m = d + 40, n = d + 48, r = d + 56, s = d + 64, u = d + 72, w = d + 80, t = d + 88, A = d + 96;
  g[a + 128 >> 2] = g[g[a + 48 >> 2] + 8 >> 2];
  g[a + 132 >> 2] = g[g[a + 52 >> 2] + 8 >> 2];
  var C, z;
  c = g[a + 48 >> 2] + 28;
  C = a + 152;
  for (z = c + 8; c < z; ) e[C++] = e[c++];
  c = g[a + 52 >> 2] + 28;
  C = a + 160;
  for (z = c + 8; c < z; ) e[C++] = e[c++];
  q[a + 168 >> 2] = q[g[a + 48 >> 2] + 120 >> 2];
  q[a + 172 >> 2] = q[g[a + 52 >> 2] + 120 >> 2];
  q[a + 176 >> 2] = q[g[a + 48 >> 2] + 128 >> 2];
  q[a + 180 >> 2] = q[g[a + 52 >> 2] + 128 >> 2];
  c = g[f + 24 >> 2] + g[a + 128 >> 2] * 12;
  C = d;
  for (z = c + 8; c < z; ) e[C++] = e[c++];
  h = q[g[f + 24 >> 2] + g[a + 128 >> 2] * 12 + 8 >> 2];
  c = g[f + 28 >> 2] + g[a + 128 >> 2] * 12;
  C = i;
  for (z = c + 8; c < z; ) e[C++] = e[c++];
  j = q[g[f + 28 >> 2] + g[a + 128 >> 2] * 12 + 8 >> 2];
  c = g[f + 24 >> 2] + g[a + 132 >> 2] * 12;
  C = d + 16;
  for (z = c + 8; c < z; ) e[C++] = e[c++];
  k = q[g[f + 24 >> 2] + g[a + 132 >> 2] * 12 + 8 >> 2];
  c = g[f + 28 >> 2] + g[a + 132 >> 2] * 12;
  C = p;
  for (z = c + 8; c < z; ) e[C++] = e[c++];
  o = q[g[f + 28 >> 2] + g[a + 132 >> 2] * 12 + 8 >> 2];
  Xk(l, h);
  Xk(m, k);
  C = a + 136;
  J(r, a + 68, a + 152);
  Yc(n, l, r);
  c = n;
  for (z = c + 8; c < z; ) e[C++] = e[c++];
  l = a + 144;
  J(u, a + 76, a + 160);
  Yc(s, m, u);
  c = s;
  C = l;
  for (z = c + 8; c < z; ) e[C++] = e[c++];
  m = q[a + 168 >> 2];
  s = q[a + 172 >> 2];
  u = q[a + 176 >> 2];
  l = q[a + 180 >> 2];
  n = u + l == 0;
  q[a + 184 >> 2] = m + s + q[a + 140 >> 2] * q[a + 140 >> 2] * u + q[a + 148 >> 2] * q[a + 148 >> 2] * l;
  q[a + 196 >> 2] = -q[a + 140 >> 2] * q[a + 136 >> 2] * u - q[a + 148 >> 2] * q[a + 144 >> 2] * l;
  q[a + 208 >> 2] = -q[a + 140 >> 2] * u - q[a + 148 >> 2] * l;
  q[a + 188 >> 2] = q[a + 196 >> 2];
  q[a + 200 >> 2] = m + s + q[a + 136 >> 2] * q[a + 136 >> 2] * u + q[a + 144 >> 2] * q[a + 144 >> 2] * l;
  q[a + 212 >> 2] = q[a + 136 >> 2] * u + q[a + 144 >> 2] * l;
  q[a + 192 >> 2] = q[a + 208 >> 2];
  q[a + 204 >> 2] = q[a + 212 >> 2];
  q[a + 216 >> 2] = u + l;
  q[a + 220 >> 2] = u + l;
  c = q[a + 220 >> 2] > 0 ? 1 : 2;
  c == 1 && (q[a + 220 >> 2] = 1 / q[a + 220 >> 2]);
  c = (e[a + 100] & 1) == 0 ? 4 : 3;
  c == 3 && (c = n & 1 ? 4 : 5);
  c == 4 && (q[a + 96 >> 2] = 0);
  c = e[a + 112] & 1 ? 6 : 18;
  a : do if (c == 6) if ((n & 1) != 0) c = 18; else if (r = k - h - q[a + 116 >> 2], c = pd(q[a + 124 >> 2] - q[a + 120 >> 2]) < .06981317698955536 ? 8 : 9, c == 8) {
    g[a + 224 >> 2] = 3;
    c = 19;
    break a;
  } else if (c == 9) if (c = r <= q[a + 120 >> 2] ? 10 : 13, c == 10) {
    c = g[a + 224 >> 2] != 1 ? 11 : 12;
    c == 11 && (q[a + 92 >> 2] = 0);
    g[a + 224 >> 2] = 1;
    c = 19;
    break a;
  } else if (c == 13) if (C = a + 224, c = r >= q[a + 124 >> 2] ? 14 : 17, c == 14) {
    c = g[C >> 2] != 2 ? 15 : 16;
    c == 15 && (q[a + 92 >> 2] = 0);
    g[a + 224 >> 2] = 2;
    c = 19;
    break a;
  } else if (c == 17) {
    g[C >> 2] = 0;
    q[a + 92 >> 2] = 0;
    c = 19;
    break a;
  } while (0);
  c == 18 && (g[a + 224 >> 2] = 0);
  h = a + 84;
  c = e[f + 20] & 1 ? 20 : 21;
  c == 20 ? (Nl(h, q[f + 8 >> 2]), q[a + 96 >> 2] *= q[f + 8 >> 2], kc(w, q[a + 84 >> 2], q[a + 88 >> 2]), T(t, m, w), Pd(i, t), j -= u * (Z(a + 136, w) + q[a + 96 >> 2] + q[a + 92 >> 2]), T(A, s, w), Sb(p, A), o += l * (Z(a + 144, w) + q[a + 96 >> 2] + q[a + 92 >> 2])) : c == 21 && (Ll(h), q[a + 96 >> 2] = 0);
  w = g[f + 28 >> 2] + g[a + 128 >> 2] * 12;
  c = i;
  C = w;
  for (z = c + 8; c < z; ) e[C++] = e[c++];
  q[g[f + 28 >> 2] + g[a + 128 >> 2] * 12 + 8 >> 2] = j;
  i = g[f + 28 >> 2] + g[a + 132 >> 2] * 12;
  c = p;
  C = i;
  for (z = c + 8; c < z; ) e[C++] = e[c++];
  q[g[f + 28 >> 2] + g[a + 132 >> 2] * 12 + 8 >> 2] = o;
  b = d;
}

wm.X = 1;

function xm(a, f) {
  var d = b;
  b += 268;
  var c, h, i = d + 8, j, k, p, o, l, m, n, r, s = d + 16, u = d + 24, w = d + 32, t = d + 40, A = d + 48, C = d + 56, z = d + 68, B = d + 80, D = d + 92, H = d + 100, G = d + 108, N = d + 116, M = d + 124, O = d + 132, R = d + 140, W = d + 148, E = d + 156, Q = d + 164, K = d + 172, P = d + 180, aa = d + 188, ba = d + 196, Y = d + 204, ra = d + 212, ca = d + 220, ea = d + 228, U = d + 236, fa = d + 244, wa = d + 252, Da = d + 260;
  k = g[f + 28 >> 2] + g[a + 128 >> 2] * 12;
  p = d;
  for (o = k + 8; k < o; ) e[p++] = e[k++];
  h = q[g[f + 28 >> 2] + g[a + 128 >> 2] * 12 + 8 >> 2];
  k = g[f + 28 >> 2] + g[a + 132 >> 2] * 12;
  p = i;
  for (o = k + 8; k < o; ) e[p++] = e[k++];
  j = q[g[f + 28 >> 2] + g[a + 132 >> 2] * 12 + 8 >> 2];
  k = q[a + 168 >> 2];
  p = q[a + 172 >> 2];
  o = q[a + 176 >> 2];
  l = q[a + 180 >> 2];
  m = o + l == 0;
  c = e[a + 100] & 1 ? 1 : 4;
  c == 1 && g[a + 224 >> 2] != 3 && (m & 1) == 0 && (c = j - h - q[a + 108 >> 2], c *= -q[a + 220 >> 2], n = q[a + 96 >> 2], r = q[f >> 2] * q[a + 104 >> 2], q[a + 96 >> 2] = Ai(q[a + 96 >> 2] + c, -r, r), c = q[a + 96 >> 2] - n, h -= o * c, j += l * c);
  c = e[a + 112] & 1 ? 5 : 18;
  do if (c == 5) if (g[a + 224 >> 2] == 0) c = 18; else if ((m & 1) != 0) c = 18; else {
    Hd(t, j, a + 144);
    V(w, i, t);
    J(u, w, d);
    Hd(A, h, a + 136);
    J(s, u, A);
    c = j - h;
    Og(C, q[s >> 2], q[s + 4 >> 2], c);
    Tg(B, a + 184, C);
    Rl(z, B);
    c = g[a + 224 >> 2] == 3 ? 8 : 9;
    a : do if (c == 8) Sl(a + 84, z); else if (c == 9) if (c = g[a + 224 >> 2] == 1 ? 10 : 13, c == 10) c = q[a + 92 >> 2] + q[z + 8 >> 2], c = c < 0 ? 11 : 12, c == 11 ? (Xc(H, s), n = q[a + 92 >> 2], kc(N, q[a + 208 >> 2], q[a + 212 >> 2]), T(G, n, N), V(D, H, G), Pg(M, a + 184, D), q[z >> 2] = q[M >> 2], q[z + 4 >> 2] = q[M + 4 >> 2], q[z + 8 >> 2] = -q[a + 92 >> 2], q[a + 84 >> 2] += q[M >> 2], q[a + 88 >> 2] += q[M + 4 >> 2], q[a + 92 >> 2] = 0) : c == 12 && Sl(a + 84, z); else if (c == 13) {
      if (g[a + 224 >> 2] != 2) break a;
      c = q[a + 92 >> 2] + q[z + 8 >> 2];
      c = c > 0 ? 15 : 16;
      c == 15 ? (Xc(R, s), n = q[a + 92 >> 2], kc(E, q[a + 208 >> 2], q[a + 212 >> 2]), T(W, n, E), V(O, R, W), Pg(Q, a + 184, O), q[z >> 2] = q[Q >> 2], q[z + 4 >> 2] = q[Q + 4 >> 2], q[z + 8 >> 2] = -q[a + 92 >> 2], q[a + 84 >> 2] += q[Q >> 2], q[a + 88 >> 2] += q[Q + 4 >> 2], q[a + 92 >> 2] = 0) : c == 16 && Sl(a + 84, z);
    } while (0);
    kc(K, q[z >> 2], q[z + 4 >> 2]);
    T(P, k, K);
    Pd(d, P);
    h -= o * (Z(a + 136, K) + q[z + 8 >> 2]);
    T(aa, p, K);
    Sb(i, aa);
    j += l * (Z(a + 144, K) + q[z + 8 >> 2]);
    c = 19;
  } while (0);
  c == 18 && (Hd(ca, j, a + 144), V(ra, i, ca), J(Y, ra, d), Hd(ea, h, a + 136), J(ba, Y, ea), s = a + 184, Xc(fa, ba), Pg(U, s, fa), q[a + 84 >> 2] += q[U >> 2], q[a + 88 >> 2] += q[U + 4 >> 2], T(wa, k, U), Pd(d, wa), h -= o * Z(a + 136, U), T(Da, p, U), Sb(i, Da), j += l * Z(a + 144, U));
  ba = g[f + 28 >> 2] + g[a + 128 >> 2] * 12;
  k = d;
  p = ba;
  for (o = k + 8; k < o; ) e[p++] = e[k++];
  q[g[f + 28 >> 2] + g[a + 128 >> 2] * 12 + 8 >> 2] = h;
  h = g[f + 28 >> 2] + g[a + 132 >> 2] * 12;
  k = i;
  p = h;
  for (o = k + 8; k < o; ) e[p++] = e[k++];
  q[g[f + 28 >> 2] + g[a + 132 >> 2] * 12 + 8 >> 2] = j;
  b = d;
}

xm.X = 1;

function ym(a, f) {
  var d = b;
  b += 136;
  var c, h, i = d + 8, j, k = d + 16, p = d + 24, o, l, m, n, r = d + 32, s = d + 40, u = d + 48, w = d + 56, t = d + 64, A = d + 72, C = d + 80, z = d + 88, B = d + 104, D = d + 112, H = d + 120, G = d + 128;
  c = g[f + 24 >> 2] + g[a + 128 >> 2] * 12;
  l = d;
  for (m = c + 8; c < m; ) e[l++] = e[c++];
  h = q[g[f + 24 >> 2] + g[a + 128 >> 2] * 12 + 8 >> 2];
  c = g[f + 24 >> 2] + g[a + 132 >> 2] * 12;
  l = i;
  for (m = c + 8; c < m; ) e[l++] = e[c++];
  j = q[g[f + 24 >> 2] + g[a + 132 >> 2] * 12 + 8 >> 2];
  Xk(k, h);
  Xk(p, j);
  o = 0;
  l = q[a + 176 >> 2] + q[a + 180 >> 2] == 0;
  c = e[a + 112] & 1 ? 1 : 10;
  do if (c == 1) if (g[a + 224 >> 2] == 0) c = 10; else if ((l & 1) != 0) c = 10; else {
    m = j - h - q[a + 116 >> 2];
    n = 0;
    c = g[a + 224 >> 2] == 3 ? 4 : 5;
    a : do if (c == 4) o = Ai(m - q[a + 120 >> 2], -.13962635397911072, .13962635397911072), n = -q[a + 220 >> 2] * o, o = pd(o); else if (c == 5) if (c = g[a + 224 >> 2] == 1 ? 6 : 7, c == 6) n = m - q[a + 120 >> 2], o = -n, n = Ai(n + .03490658849477768, -.13962635397911072, 0), n *= -q[a + 220 >> 2]; else if (c == 7) {
      if (g[a + 224 >> 2] != 2) {
        c = 9;
        break a;
      }
      o = n = m - q[a + 124 >> 2];
      n = Ai(n - .03490658849477768, 0, .13962635397911072);
      n *= -q[a + 220 >> 2];
    } while (0);
    h -= q[a + 176 >> 2] * n;
    j += q[a + 180 >> 2] * n;
  } while (0);
  cf(k, h);
  cf(p, j);
  J(s, a + 68, a + 152);
  Yc(r, k, s);
  J(w, a + 76, a + 160);
  Yc(u, p, w);
  V(C, i, u);
  J(A, C, d);
  J(t, A, r);
  k = Nc(t);
  p = q[a + 168 >> 2];
  s = q[a + 172 >> 2];
  w = q[a + 176 >> 2];
  A = q[a + 180 >> 2];
  q[z >> 2] = p + s + w * q[r + 4 >> 2] * q[r + 4 >> 2] + A * q[u + 4 >> 2] * q[u + 4 >> 2];
  q[z + 4 >> 2] = -w * q[r >> 2] * q[r + 4 >> 2] - A * q[u >> 2] * q[u + 4 >> 2];
  q[z + 8 >> 2] = q[z + 4 >> 2];
  q[z + 12 >> 2] = p + s + w * q[r >> 2] * q[r >> 2] + A * q[u >> 2] * q[u >> 2];
  Vl(D, z, t);
  Xc(B, D);
  T(H, p, B);
  Pd(d, H);
  h -= w * Z(r, B);
  T(G, s, B);
  Sb(i, G);
  j += A * Z(u, B);
  r = g[f + 24 >> 2] + g[a + 128 >> 2] * 12;
  c = d;
  l = r;
  for (m = c + 8; c < m; ) e[l++] = e[c++];
  q[g[f + 24 >> 2] + g[a + 128 >> 2] * 12 + 8 >> 2] = h;
  h = g[f + 24 >> 2] + g[a + 132 >> 2] * 12;
  c = i;
  l = h;
  for (m = c + 8; c < m; ) e[l++] = e[c++];
  q[g[f + 24 >> 2] + g[a + 132 >> 2] * 12 + 8 >> 2] = j;
  if (k <= .004999999888241291) c = 11; else {
    var N = 0;
    c = 12;
  }
  c == 11 && (N = o <= .03490658849477768);
  b = d;
  return N;
}

ym.X = 1;

function zm(a) {
  var f, d;
  f = g[g[a + 48 >> 2] + 8 >> 2];
  d = g[g[a + 52 >> 2] + 8 >> 2];
  $(Am, F(1, "i32", v));
  $(Nk, F([ f, 0, 0, 0 ], [ "i32", 0, 0, 0 ], v));
  $(Ok, F([ d, 0, 0, 0 ], [ "i32", 0, 0, 0 ], v));
  $(Pk, F([ e[a + 61] & 1, 0, 0, 0 ], [ "i32", 0, 0, 0 ], v));
  $(Qk, F([ q[a + 68 >> 2], 0, 0, 0, 0, 0, 0, 0, q[a + 72 >> 2], 0, 0, 0, 0, 0, 0, 0 ], [ "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0 ], v));
  $(Rk, F([ q[a + 76 >> 2], 0, 0, 0, 0, 0, 0, 0, q[a + 80 >> 2], 0, 0, 0, 0, 0, 0, 0 ], [ "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0 ], v));
  $($l, F([ q[a + 116 >> 2], 0, 0, 0, 0, 0, 0, 0 ], [ "double", 0, 0, 0, 0, 0, 0, 0 ], v));
  $(am, F([ e[a + 112] & 1, 0, 0, 0 ], [ "i32", 0, 0, 0 ], v));
  $(Bm, F([ q[a + 120 >> 2], 0, 0, 0, 0, 0, 0, 0 ], [ "double", 0, 0, 0, 0, 0, 0, 0 ], v));
  $(Cm, F([ q[a + 124 >> 2], 0, 0, 0, 0, 0, 0, 0 ], [ "double", 0, 0, 0, 0, 0, 0, 0 ], v));
  $(dm, F([ e[a + 100] & 1, 0, 0, 0 ], [ "i32", 0, 0, 0 ], v));
  $(em, F([ q[a + 108 >> 2], 0, 0, 0, 0, 0, 0, 0 ], [ "double", 0, 0, 0, 0, 0, 0, 0 ], v));
  $(Dm, F([ q[a + 104 >> 2], 0, 0, 0, 0, 0, 0, 0 ], [ "double", 0, 0, 0, 0, 0, 0, 0 ], v));
  $(Vk, F([ g[a + 56 >> 2], 0, 0, 0 ], [ "i32", 0, 0, 0 ], v));
}

zm.X = 1;

function Em(a, f) {
  vk(a, f);
  g[a >> 2] = Fm + 8;
  var d, c, h;
  d = f + 20;
  c = a + 68;
  for (h = d + 8; d < h; ) e[c++] = e[d++];
  d = f + 28;
  c = a + 76;
  for (h = d + 8; d < h; ) e[c++] = e[d++];
  q[a + 84 >> 2] = q[f + 36 >> 2];
  q[a + 160 >> 2] = 0;
  q[a + 92 >> 2] = 0;
  g[a + 164 >> 2] = 0;
  q[a + 88 >> 2] = 0;
}

Em.X = 1;

function Gm(a, f) {
  var d = b;
  b += 128;
  var c, h, i = d + 8, j, k = d + 16, p, o = d + 24, l, m = d + 32, n = d + 40, r = d + 48, s = d + 56, u = d + 64, w = d + 72, t = d + 80, A = d + 88, C = d + 96, z = d + 104, B = d + 112, D = d + 120;
  g[a + 96 >> 2] = g[g[a + 48 >> 2] + 8 >> 2];
  g[a + 100 >> 2] = g[g[a + 52 >> 2] + 8 >> 2];
  var H, G;
  c = g[a + 48 >> 2] + 28;
  H = a + 128;
  for (G = c + 8; c < G; ) e[H++] = e[c++];
  c = g[a + 52 >> 2] + 28;
  H = a + 136;
  for (G = c + 8; c < G; ) e[H++] = e[c++];
  q[a + 144 >> 2] = q[g[a + 48 >> 2] + 120 >> 2];
  q[a + 148 >> 2] = q[g[a + 52 >> 2] + 120 >> 2];
  q[a + 152 >> 2] = q[g[a + 48 >> 2] + 128 >> 2];
  q[a + 156 >> 2] = q[g[a + 52 >> 2] + 128 >> 2];
  c = g[f + 24 >> 2] + g[a + 96 >> 2] * 12;
  H = d;
  for (G = c + 8; c < G; ) e[H++] = e[c++];
  h = q[g[f + 24 >> 2] + g[a + 96 >> 2] * 12 + 8 >> 2];
  c = g[f + 28 >> 2] + g[a + 96 >> 2] * 12;
  H = i;
  for (G = c + 8; c < G; ) e[H++] = e[c++];
  j = q[g[f + 28 >> 2] + g[a + 96 >> 2] * 12 + 8 >> 2];
  c = g[f + 24 >> 2] + g[a + 100 >> 2] * 12;
  H = k;
  for (G = c + 8; c < G; ) e[H++] = e[c++];
  p = q[g[f + 24 >> 2] + g[a + 100 >> 2] * 12 + 8 >> 2];
  c = g[f + 28 >> 2] + g[a + 100 >> 2] * 12;
  H = o;
  for (G = c + 8; c < G; ) e[H++] = e[c++];
  l = q[g[f + 28 >> 2] + g[a + 100 >> 2] * 12 + 8 >> 2];
  Xk(m, h);
  Xk(n, p);
  h = a + 112;
  J(s, a + 68, a + 128);
  Yc(r, m, s);
  c = r;
  H = h;
  for (G = c + 8; c < G; ) e[H++] = e[c++];
  m = a + 120;
  J(w, a + 76, a + 136);
  Yc(u, n, w);
  c = u;
  H = m;
  for (G = c + 8; c < G; ) e[H++] = e[c++];
  n = a + 104;
  V(C, k, a + 120);
  J(A, C, d);
  J(t, A, a + 112);
  c = t;
  H = n;
  for (G = c + 8; c < G; ) e[H++] = e[c++];
  c = Nc(a + 104);
  q[a + 88 >> 2] = c;
  c = q[a + 88 >> 2] - q[a + 84 >> 2] > 0 ? 1 : 2;
  c == 1 ? g[a + 164 >> 2] = 2 : c == 2 && (g[a + 164 >> 2] = 0);
  k = a + 104;
  c = q[a + 88 >> 2] > .004999999888241291 ? 4 : 5;
  if (c == 4) {
    sg(k, 1 / q[a + 88 >> 2]);
    c = Z(a + 112, a + 104);
    k = Z(a + 120, a + 104);
    k = q[a + 144 >> 2] + q[a + 152 >> 2] * c * c + q[a + 148 >> 2] + q[a + 156 >> 2] * k * k;
    if (k != 0) c = 6; else {
      var N = 0;
      c = 7;
    }
    c == 6 && (N = 1 / k);
    q[a + 160 >> 2] = N;
    c = e[f + 20] & 1 ? 8 : 9;
    c == 8 ? (q[a + 92 >> 2] *= q[f + 8 >> 2], T(z, q[a + 92 >> 2], a + 104), T(B, q[a + 144 >> 2], z), Pd(i, B), j -= q[a + 152 >> 2] * Z(a + 112, z), T(D, q[a + 148 >> 2], z), Sb(o, D), l += q[a + 156 >> 2] * Z(a + 120, z)) : c == 9 && (q[a + 92 >> 2] = 0);
    z = g[f + 28 >> 2] + g[a + 96 >> 2] * 12;
    c = i;
    H = z;
    for (G = c + 8; c < G; ) e[H++] = e[c++];
    q[g[f + 28 >> 2] + g[a + 96 >> 2] * 12 + 8 >> 2] = j;
    i = g[f + 28 >> 2] + g[a + 100 >> 2] * 12;
    c = o;
    H = i;
    for (G = c + 8; c < G; ) e[H++] = e[c++];
    q[g[f + 28 >> 2] + g[a + 100 >> 2] * 12 + 8 >> 2] = l;
  } else c == 5 && (Xb(k), q[a + 160 >> 2] = 0, q[a + 92 >> 2] = 0);
  b = d;
}

Gm.X = 1;

function Hm(a, f) {
  var d = b;
  b += 80;
  var c, h = d + 8, i, j = d + 16, k = d + 24, p = d + 32, o = d + 40, l, m = d + 48, n = d + 56, r = d + 64, s = d + 72, u, w;
  l = g[f + 28 >> 2] + g[a + 96 >> 2] * 12;
  u = d;
  for (w = l + 8; l < w; ) e[u++] = e[l++];
  c = q[g[f + 28 >> 2] + g[a + 96 >> 2] * 12 + 8 >> 2];
  l = g[f + 28 >> 2] + g[a + 100 >> 2] * 12;
  u = h;
  for (w = l + 8; l < w; ) e[u++] = e[l++];
  i = q[g[f + 28 >> 2] + g[a + 100 >> 2] * 12 + 8 >> 2];
  Hd(k, c, a + 112);
  V(j, d, k);
  Hd(o, i, a + 120);
  V(p, h, o);
  l = q[a + 88 >> 2] - q[a + 84 >> 2];
  k = a + 104;
  J(m, p, j);
  j = S(k, m);
  if ((l < 0 ? 1 : 2) == 1) j += q[f + 4 >> 2] * l;
  j *= -q[a + 160 >> 2];
  p = q[a + 92 >> 2];
  q[a + 92 >> 2] = 0 < q[a + 92 >> 2] + j ? 0 : q[a + 92 >> 2] + j;
  j = q[a + 92 >> 2] - p;
  T(n, j, a + 104);
  T(r, q[a + 144 >> 2], n);
  Pd(d, r);
  c -= q[a + 152 >> 2] * Z(a + 112, n);
  T(s, q[a + 148 >> 2], n);
  Sb(h, s);
  i += q[a + 156 >> 2] * Z(a + 120, n);
  n = g[f + 28 >> 2] + g[a + 96 >> 2] * 12;
  l = d;
  u = n;
  for (w = l + 8; l < w; ) e[u++] = e[l++];
  q[g[f + 28 >> 2] + g[a + 96 >> 2] * 12 + 8 >> 2] = c;
  c = g[f + 28 >> 2] + g[a + 100 >> 2] * 12;
  l = h;
  u = c;
  for (w = l + 8; l < w; ) e[u++] = e[l++];
  q[g[f + 28 >> 2] + g[a + 100 >> 2] * 12 + 8 >> 2] = i;
  b = d;
}

Hm.X = 1;

function Im(a) {
  var f, d;
  f = g[g[a + 48 >> 2] + 8 >> 2];
  d = g[g[a + 52 >> 2] + 8 >> 2];
  $(Jm, F(1, "i32", v));
  $(Nk, F([ f, 0, 0, 0 ], [ "i32", 0, 0, 0 ], v));
  $(Ok, F([ d, 0, 0, 0 ], [ "i32", 0, 0, 0 ], v));
  $(Pk, F([ e[a + 61] & 1, 0, 0, 0 ], [ "i32", 0, 0, 0 ], v));
  $(Qk, F([ q[a + 68 >> 2], 0, 0, 0, 0, 0, 0, 0, q[a + 72 >> 2], 0, 0, 0, 0, 0, 0, 0 ], [ "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0 ], v));
  $(Rk, F([ q[a + 76 >> 2], 0, 0, 0, 0, 0, 0, 0, q[a + 80 >> 2], 0, 0, 0, 0, 0, 0, 0 ], [ "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0 ], v));
  $(Km, F([ q[a + 84 >> 2], 0, 0, 0, 0, 0, 0, 0 ], [ "double", 0, 0, 0, 0, 0, 0, 0 ], v));
  $(Vk, F([ g[a + 56 >> 2], 0, 0, 0 ], [ "i32", 0, 0, 0 ], v));
}

Im.X = 1;

function Lm(a, f) {
  vk(a, f);
  g[a >> 2] = Mm + 8;
  var d, c, h;
  d = f + 20;
  c = a + 80;
  for (h = d + 8; d < h; ) e[c++] = e[d++];
  d = f + 28;
  c = a + 88;
  for (h = d + 8; d < h; ) e[c++] = e[d++];
  q[a + 96 >> 2] = q[f + 36 >> 2];
  q[a + 68 >> 2] = q[f + 40 >> 2];
  q[a + 72 >> 2] = q[f + 44 >> 2];
  Ll(a + 104);
}

Lm.X = 1;

function Nm(a, f) {
  var d = b;
  b += 112;
  var c, h = d + 8, i, j = d + 16, k = d + 24, p = d + 32, o = d + 40, l = d + 48, m = d + 56, n = d + 64, r = d + 72, s = d + 80, u, w = d + 88, t = d + 96, A = d + 104, C, z;
  u = g[f + 24 >> 2] + g[a + 96 >> 2] * 12;
  C = d;
  for (z = u + 8; u < z; ) e[C++] = e[u++];
  c = q[g[f + 24 >> 2] + g[a + 96 >> 2] * 12 + 8 >> 2];
  u = g[f + 24 >> 2] + g[a + 100 >> 2] * 12;
  C = h;
  for (z = u + 8; u < z; ) e[C++] = e[u++];
  i = q[g[f + 24 >> 2] + g[a + 100 >> 2] * 12 + 8 >> 2];
  Xk(j, c);
  Xk(k, i);
  J(o, a + 68, a + 128);
  Yc(p, j, o);
  J(m, a + 76, a + 136);
  Yc(l, k, m);
  V(s, h, l);
  J(r, s, d);
  J(n, r, p);
  j = Mc(n);
  u = j - q[a + 84 >> 2];
  u = Ai(u, 0, .20000000298023224);
  T(w, -q[a + 160 >> 2] * u, n);
  T(t, q[a + 144 >> 2], w);
  Pd(d, t);
  c -= q[a + 152 >> 2] * Z(p, w);
  T(A, q[a + 148 >> 2], w);
  Sb(h, A);
  i += q[a + 156 >> 2] * Z(l, w);
  p = g[f + 24 >> 2] + g[a + 96 >> 2] * 12;
  u = d;
  C = p;
  for (z = u + 8; u < z; ) e[C++] = e[u++];
  q[g[f + 24 >> 2] + g[a + 96 >> 2] * 12 + 8 >> 2] = c;
  c = g[f + 24 >> 2] + g[a + 100 >> 2] * 12;
  u = h;
  C = c;
  for (z = u + 8; u < z; ) e[C++] = e[u++];
  q[g[f + 24 >> 2] + g[a + 100 >> 2] * 12 + 8 >> 2] = i;
  h = j - q[a + 84 >> 2] < .004999999888241291;
  b = d;
  return h;
}

Nm.X = 1;

function Om(a, f) {
  var d = b;
  b += 140;
  var c, h, i = d + 8, j, k, p = d + 24, o;
  c = d + 32;
  var l = d + 40, m = d + 48, n = d + 56, r = d + 64, s = d + 72, u, w = d + 80, t, A = d + 116, C = d + 124, z = d + 132;
  g[a + 116 >> 2] = g[g[a + 48 >> 2] + 8 >> 2];
  g[a + 120 >> 2] = g[g[a + 52 >> 2] + 8 >> 2];
  var B, D;
  u = g[a + 48 >> 2] + 28;
  B = a + 140;
  for (D = u + 8; u < D; ) e[B++] = e[u++];
  u = g[a + 52 >> 2] + 28;
  B = a + 148;
  for (D = u + 8; u < D; ) e[B++] = e[u++];
  q[a + 156 >> 2] = q[g[a + 48 >> 2] + 120 >> 2];
  q[a + 160 >> 2] = q[g[a + 52 >> 2] + 120 >> 2];
  q[a + 164 >> 2] = q[g[a + 48 >> 2] + 128 >> 2];
  q[a + 168 >> 2] = q[g[a + 52 >> 2] + 128 >> 2];
  u = g[f + 24 >> 2] + g[a + 116 >> 2] * 12;
  B = d;
  for (D = u + 8; u < D; ) e[B++] = e[u++];
  h = q[g[f + 24 >> 2] + g[a + 116 >> 2] * 12 + 8 >> 2];
  u = g[f + 28 >> 2] + g[a + 116 >> 2] * 12;
  B = i;
  for (D = u + 8; u < D; ) e[B++] = e[u++];
  j = q[g[f + 28 >> 2] + g[a + 116 >> 2] * 12 + 8 >> 2];
  u = g[f + 24 >> 2] + g[a + 120 >> 2] * 12;
  B = d + 16;
  for (D = u + 8; u < D; ) e[B++] = e[u++];
  k = q[g[f + 24 >> 2] + g[a + 120 >> 2] * 12 + 8 >> 2];
  u = g[f + 28 >> 2] + g[a + 120 >> 2] * 12;
  B = p;
  for (D = u + 8; u < D; ) e[B++] = e[u++];
  o = q[g[f + 28 >> 2] + g[a + 120 >> 2] * 12 + 8 >> 2];
  Xk(c, h);
  Xk(l, k);
  B = a + 124;
  J(n, a + 80, a + 140);
  Yc(m, c, n);
  u = m;
  for (D = u + 8; u < D; ) e[B++] = e[u++];
  c = a + 132;
  J(s, a + 88, a + 148);
  Yc(r, l, s);
  u = r;
  B = c;
  for (D = u + 8; u < D; ) e[B++] = e[u++];
  u = q[a + 156 >> 2];
  l = q[a + 160 >> 2];
  r = q[a + 164 >> 2];
  s = q[a + 168 >> 2];
  q[w >> 2] = u + l + q[a + 128 >> 2] * q[a + 128 >> 2] * r + q[a + 136 >> 2] * q[a + 136 >> 2] * s;
  q[w + 12 >> 2] = -q[a + 128 >> 2] * q[a + 124 >> 2] * r - q[a + 136 >> 2] * q[a + 132 >> 2] * s;
  q[w + 24 >> 2] = -q[a + 128 >> 2] * r - q[a + 136 >> 2] * s;
  q[w + 4 >> 2] = q[w + 12 >> 2];
  q[w + 16 >> 2] = u + l + q[a + 124 >> 2] * q[a + 124 >> 2] * r + q[a + 132 >> 2] * q[a + 132 >> 2] * s;
  q[w + 28 >> 2] = q[a + 124 >> 2] * r + q[a + 132 >> 2] * s;
  q[w + 8 >> 2] = q[w + 24 >> 2];
  q[w + 20 >> 2] = q[w + 28 >> 2];
  q[w + 32 >> 2] = r + s;
  c = q[a + 68 >> 2] > 0 ? 1 : 8;
  if (c == 1) {
    Qg(w, a + 172);
    w = r + s;
    w > 0 ? c = 2 : (t = 0, c = 3);
    c == 2 && (t = 1 / w);
    h = k - h - q[a + 96 >> 2];
    c = q[a + 68 >> 2] * 6.2831854820251465;
    k = t * 2 * q[a + 72 >> 2] * c;
    t = t * c * c;
    m = q[f >> 2];
    q[a + 100 >> 2] = m * (k + m * t);
    if (q[a + 100 >> 2] != 0) c = 4; else {
      var H = 0;
      c = 5;
    }
    c == 4 && (H = 1 / q[a + 100 >> 2]);
    q[a + 100 >> 2] = H;
    q[a + 76 >> 2] = h * m * t * q[a + 100 >> 2];
    H = w + q[a + 100 >> 2];
    if (H != 0) c = 6; else {
      var G = 0;
      c = 7;
    }
    c == 6 && (G = 1 / H);
    q[a + 204 >> 2] = G;
  } else c == 8 && (Ug(w, a + 172), q[a + 100 >> 2] = 0, q[a + 76 >> 2] = 0);
  G = a + 104;
  c = e[f + 20] & 1 ? 10 : 11;
  c == 10 ? (Nl(G, q[f + 8 >> 2]), kc(A, q[a + 104 >> 2], q[a + 108 >> 2]), T(C, u, A), Pd(i, C), j -= r * (Z(a + 124, A) + q[a + 112 >> 2]), T(z, l, A), Sb(p, z), o += s * (Z(a + 132, A) + q[a + 112 >> 2])) : c == 11 && Ll(G);
  A = g[f + 28 >> 2] + g[a + 116 >> 2] * 12;
  u = i;
  B = A;
  for (D = u + 8; u < D; ) e[B++] = e[u++];
  q[g[f + 28 >> 2] + g[a + 116 >> 2] * 12 + 8 >> 2] = j;
  i = g[f + 28 >> 2] + g[a + 120 >> 2] * 12;
  u = p;
  B = i;
  for (D = u + 8; u < D; ) e[B++] = e[u++];
  q[g[f + 28 >> 2] + g[a + 120 >> 2] * 12 + 8 >> 2] = o;
  b = d;
}

Om.X = 1;

function Pm(a) {
  var f, d;
  f = g[g[a + 48 >> 2] + 8 >> 2];
  d = g[g[a + 52 >> 2] + 8 >> 2];
  $(Qm, F(1, "i32", v));
  $(Nk, F([ f, 0, 0, 0 ], [ "i32", 0, 0, 0 ], v));
  $(Ok, F([ d, 0, 0, 0 ], [ "i32", 0, 0, 0 ], v));
  $(Pk, F([ e[a + 61] & 1, 0, 0, 0 ], [ "i32", 0, 0, 0 ], v));
  $(Qk, F([ q[a + 80 >> 2], 0, 0, 0, 0, 0, 0, 0, q[a + 84 >> 2], 0, 0, 0, 0, 0, 0, 0 ], [ "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0 ], v));
  $(Rk, F([ q[a + 88 >> 2], 0, 0, 0, 0, 0, 0, 0, q[a + 92 >> 2], 0, 0, 0, 0, 0, 0, 0 ], [ "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0 ], v));
  $($l, F([ q[a + 96 >> 2], 0, 0, 0, 0, 0, 0, 0 ], [ "double", 0, 0, 0, 0, 0, 0, 0 ], v));
  $(Tk, F([ q[a + 68 >> 2], 0, 0, 0, 0, 0, 0, 0 ], [ "double", 0, 0, 0, 0, 0, 0, 0 ], v));
  $(Uk, F([ q[a + 72 >> 2], 0, 0, 0, 0, 0, 0, 0 ], [ "double", 0, 0, 0, 0, 0, 0, 0 ], v));
  $(Vk, F([ g[a + 56 >> 2], 0, 0, 0 ], [ "i32", 0, 0, 0 ], v));
}

Pm.X = 1;

function Rm(a, f, d) {
  Og(a, q[f >> 2] + q[d >> 2], q[f + 4 >> 2] + q[d + 4 >> 2], q[f + 8 >> 2] + q[d + 8 >> 2]);
}

function Sm(a, f, d) {
  Og(a, f * q[d >> 2], f * q[d + 4 >> 2], f * q[d + 8 >> 2]);
}

function Tm(a, f) {
  var d = b;
  b += 196;
  var c, h, i = d + 8, j, k, p, o, l, m, n = d + 16, r = d + 24, s = d + 32, u = d + 40, w = d + 48, t = d + 56, A = d + 64, C = d + 72, z = d + 80, B = d + 88, D = d + 96, H = d + 104, G = d + 112, N = d + 120, M = d + 128;
  m = d + 136;
  var O = d + 148, R = d + 160, W = d + 172, E = d + 180, Q = d + 188, K, P;
  c = g[f + 28 >> 2] + g[a + 116 >> 2] * 12;
  K = d;
  for (P = c + 8; c < P; ) e[K++] = e[c++];
  h = q[g[f + 28 >> 2] + g[a + 116 >> 2] * 12 + 8 >> 2];
  c = g[f + 28 >> 2] + g[a + 120 >> 2] * 12;
  K = i;
  for (P = c + 8; c < P; ) e[K++] = e[c++];
  j = q[g[f + 28 >> 2] + g[a + 120 >> 2] * 12 + 8 >> 2];
  k = q[a + 156 >> 2];
  p = q[a + 160 >> 2];
  o = q[a + 164 >> 2];
  l = q[a + 168 >> 2];
  K = j;
  c = q[a + 68 >> 2] > 0 ? 1 : 2;
  if (c == 1) {
    m = -q[a + 204 >> 2] * (K - h + q[a + 76 >> 2] + q[a + 100 >> 2] * q[a + 112 >> 2]);
    q[a + 112 >> 2] += m;
    h -= o * m;
    j += l * m;
    Hd(u, j, a + 132);
    V(s, i, u);
    J(r, s, d);
    Hd(w, h, a + 124);
    J(n, r, w);
    Tl(A, a + 172, n);
    Xc(t, A);
    q[a + 104 >> 2] += q[t >> 2];
    q[a + 108 >> 2] += q[t + 4 >> 2];
    c = t;
    K = C;
    for (P = c + 8; c < P; ) e[K++] = e[c++];
    T(z, k, C);
    Pd(d, z);
    h -= o * Z(a + 124, C);
    T(B, p, C);
    Sb(i, B);
    j += l * Z(a + 132, C);
  } else c == 2 && (Hd(N, K, a + 132), V(G, i, N), J(H, G, d), Hd(M, h, a + 124), J(D, H, M), Og(m, q[D >> 2], q[D + 4 >> 2], j - h), n = a + 172, r = b, b += 48, s = r + 12, u = r + 24, w = r + 36, Sm(s, q[m >> 2], n), Sm(u, q[m + 4 >> 2], n + 12), Rm(r, s, u), Sm(w, q[m + 8 >> 2], n + 24), Rm(R, r, w), b = r, Rl(O, R), Sl(a + 104, O), kc(W, q[O >> 2], q[O + 4 >> 2]), T(E, k, W), Pd(d, E), h -= o * (Z(a + 124, W) + q[O + 8 >> 2]), T(Q, p, W), Sb(i, Q), j += l * (Z(a + 132, W) + q[O + 8 >> 2]));
  k = g[f + 28 >> 2] + g[a + 116 >> 2] * 12;
  c = d;
  K = k;
  for (P = c + 8; c < P; ) e[K++] = e[c++];
  q[g[f + 28 >> 2] + g[a + 116 >> 2] * 12 + 8 >> 2] = h;
  h = g[f + 28 >> 2] + g[a + 120 >> 2] * 12;
  c = i;
  K = h;
  for (P = c + 8; c < P; ) e[K++] = e[c++];
  q[g[f + 28 >> 2] + g[a + 120 >> 2] * 12 + 8 >> 2] = j;
  b = d;
}

Tm.X = 1;

function Um(a, f) {
  var d = b;
  b += 240;
  var c, h, i = d + 8, j;
  c = d + 16;
  var k = d + 24, p, o, l, m, n = d + 32, r = d + 40, s = d + 48, u = d + 56, w, t, A = d + 64, C = d + 100, z = d + 108, B = d + 116, D = d + 124, H = d + 132, G = d + 140, N = d + 148, M = d + 156, O = d + 164, R = d + 172, W = d + 180, E = d + 192, Q = d + 204, K = d + 216, P = d + 224, aa = d + 232;
  p = g[f + 24 >> 2] + g[a + 116 >> 2] * 12;
  o = d;
  for (l = p + 8; p < l; ) e[o++] = e[p++];
  h = q[g[f + 24 >> 2] + g[a + 116 >> 2] * 12 + 8 >> 2];
  p = g[f + 24 >> 2] + g[a + 120 >> 2] * 12;
  o = i;
  for (l = p + 8; p < l; ) e[o++] = e[p++];
  j = q[g[f + 24 >> 2] + g[a + 120 >> 2] * 12 + 8 >> 2];
  Xk(c, h);
  Xk(k, j);
  p = q[a + 156 >> 2];
  o = q[a + 160 >> 2];
  l = q[a + 164 >> 2];
  m = q[a + 168 >> 2];
  J(r, a + 80, a + 140);
  Yc(n, c, r);
  J(u, a + 88, a + 148);
  Yc(s, k, u);
  q[A >> 2] = p + o + q[n + 4 >> 2] * q[n + 4 >> 2] * l + q[s + 4 >> 2] * q[s + 4 >> 2] * m;
  q[A + 12 >> 2] = -q[n + 4 >> 2] * q[n >> 2] * l - q[s + 4 >> 2] * q[s >> 2] * m;
  q[A + 24 >> 2] = -q[n + 4 >> 2] * l - q[s + 4 >> 2] * m;
  q[A + 4 >> 2] = q[A + 12 >> 2];
  q[A + 16 >> 2] = p + o + q[n >> 2] * q[n >> 2] * l + q[s >> 2] * q[s >> 2] * m;
  q[A + 28 >> 2] = q[n >> 2] * l + q[s >> 2] * m;
  q[A + 8 >> 2] = q[A + 24 >> 2];
  q[A + 20 >> 2] = q[A + 28 >> 2];
  q[A + 32 >> 2] = l + m;
  c = q[a + 68 >> 2] > 0 ? 1 : 2;
  c == 1 ? (V(B, i, s), J(z, B, d), J(C, z, n), w = Nc(C), t = 0, Pg(H, A, C), Xc(D, H), T(G, p, D), Pd(d, G), h -= l * Z(n, D), T(N, o, D), Sb(i, N), j += m * Z(s, D)) : c == 2 && (V(R, i, s), J(O, R, d), J(M, O, n), C = j - h - q[a + 96 >> 2], w = Nc(M), t = pd(C), Og(W, q[M >> 2], q[M + 4 >> 2], C), Tg(Q, A, W), Rl(E, Q), kc(K, q[E >> 2], q[E + 4 >> 2]), T(P, p, K), Pd(d, P), h -= l * (Z(n, K) + q[E + 8 >> 2]), T(aa, o, K), Sb(i, aa), j += m * (Z(s, K) + q[E + 8 >> 2]));
  n = g[f + 24 >> 2] + g[a + 116 >> 2] * 12;
  p = d;
  o = n;
  for (l = p + 8; p < l; ) e[o++] = e[p++];
  q[g[f + 24 >> 2] + g[a + 116 >> 2] * 12 + 8 >> 2] = h;
  h = g[f + 24 >> 2] + g[a + 120 >> 2] * 12;
  p = i;
  o = h;
  for (l = p + 8; p < l; ) e[o++] = e[p++];
  q[g[f + 24 >> 2] + g[a + 120 >> 2] * 12 + 8 >> 2] = j;
  if (w <= .004999999888241291) c = 4; else {
    var ba = 0;
    c = 5;
  }
  c == 4 && (ba = t <= .03490658849477768);
  b = d;
  return ba;
}

Um.X = 1;

function Vm(a, f) {
  var d = b;
  b += 8;
  vk(a, f);
  g[a >> 2] = Wm + 8;
  var c, h, i;
  c = f + 20;
  h = a + 76;
  for (i = c + 8; c < i; ) e[h++] = e[c++];
  c = f + 28;
  h = a + 84;
  for (i = c + 8; c < i; ) e[h++] = e[c++];
  c = f + 36;
  h = a + 92;
  for (i = c + 8; c < i; ) e[h++] = e[c++];
  h = a + 100;
  Hd(d, 1, a + 92);
  c = d;
  for (i = c + 8; c < i; ) e[h++] = e[c++];
  q[a + 204 >> 2] = 0;
  q[a + 108 >> 2] = 0;
  q[a + 208 >> 2] = 0;
  q[a + 112 >> 2] = 0;
  q[a + 212 >> 2] = 0;
  q[a + 116 >> 2] = 0;
  q[a + 120 >> 2] = q[f + 48 >> 2];
  q[a + 124 >> 2] = q[f + 52 >> 2];
  e[a + 128] = e[f + 44] & 1;
  q[a + 68 >> 2] = q[f + 56 >> 2];
  q[a + 72 >> 2] = q[f + 60 >> 2];
  q[a + 216 >> 2] = 0;
  q[a + 220 >> 2] = 0;
  Xb(a + 172);
  Xb(a + 180);
  b = d;
}

Vm.X = 1;

function Xm(a, f) {
  var d = b;
  b += 176;
  var c, h, i, j, k, p, o = d + 8, l, m = d + 16, n, r = d + 24, s, u = d + 32, w = d + 40, t = d + 48, A = d + 56, C = d + 64, z = d + 72, B = d + 80, D = d + 88, H = d + 96, G = d + 104, N = d + 112, M = d + 120, O = d + 128, R = d + 136, W = d + 144, E = d + 152, Q = d + 160, K = d + 168;
  g[a + 132 >> 2] = g[g[a + 48 >> 2] + 8 >> 2];
  g[a + 136 >> 2] = g[g[a + 52 >> 2] + 8 >> 2];
  var P, aa;
  c = g[a + 48 >> 2] + 28;
  P = a + 140;
  for (aa = c + 8; c < aa; ) e[P++] = e[c++];
  c = g[a + 52 >> 2] + 28;
  P = a + 148;
  for (aa = c + 8; c < aa; ) e[P++] = e[c++];
  q[a + 156 >> 2] = q[g[a + 48 >> 2] + 120 >> 2];
  q[a + 160 >> 2] = q[g[a + 52 >> 2] + 120 >> 2];
  q[a + 164 >> 2] = q[g[a + 48 >> 2] + 128 >> 2];
  q[a + 168 >> 2] = q[g[a + 52 >> 2] + 128 >> 2];
  h = q[a + 156 >> 2];
  i = q[a + 160 >> 2];
  j = q[a + 164 >> 2];
  k = q[a + 168 >> 2];
  c = g[f + 24 >> 2] + g[a + 132 >> 2] * 12;
  P = d;
  for (aa = c + 8; c < aa; ) e[P++] = e[c++];
  p = q[g[f + 24 >> 2] + g[a + 132 >> 2] * 12 + 8 >> 2];
  c = g[f + 28 >> 2] + g[a + 132 >> 2] * 12;
  P = o;
  for (aa = c + 8; c < aa; ) e[P++] = e[c++];
  l = q[g[f + 28 >> 2] + g[a + 132 >> 2] * 12 + 8 >> 2];
  c = g[f + 24 >> 2] + g[a + 136 >> 2] * 12;
  P = m;
  for (aa = c + 8; c < aa; ) e[P++] = e[c++];
  n = q[g[f + 24 >> 2] + g[a + 136 >> 2] * 12 + 8 >> 2];
  c = g[f + 28 >> 2] + g[a + 136 >> 2] * 12;
  P = r;
  for (aa = c + 8; c < aa; ) e[P++] = e[c++];
  s = q[g[f + 28 >> 2] + g[a + 136 >> 2] * 12 + 8 >> 2];
  Xk(u, p);
  Xk(w, n);
  J(A, a + 76, a + 140);
  Yc(t, u, A);
  J(z, a + 84, a + 148);
  Yc(C, w, z);
  V(H, m, C);
  J(D, H, d);
  J(B, D, t);
  p = a + 180;
  Yc(G, u, a + 100);
  c = G;
  P = p;
  for (aa = c + 8; c < aa; ) e[P++] = e[c++];
  V(N, B, t);
  q[a + 196 >> 2] = Z(N, a + 180);
  q[a + 200 >> 2] = Z(C, a + 180);
  q[a + 204 >> 2] = h + i + j * q[a + 196 >> 2] * q[a + 196 >> 2] + k * q[a + 200 >> 2] * q[a + 200 >> 2];
  c = q[a + 204 >> 2] > 0 ? 1 : 2;
  c == 1 && (q[a + 204 >> 2] = 1 / q[a + 204 >> 2]);
  q[a + 212 >> 2] = 0;
  q[a + 216 >> 2] = 0;
  q[a + 220 >> 2] = 0;
  c = q[a + 68 >> 2] > 0 ? 3 : 8;
  if (c == 3) {
    G = a + 172;
    Yc(M, u, a + 92);
    c = M;
    P = G;
    for (aa = c + 8; c < aa; ) e[P++] = e[c++];
    V(O, B, t);
    q[a + 188 >> 2] = Z(O, a + 172);
    q[a + 192 >> 2] = Z(C, a + 172);
    h = h + i + j * q[a + 188 >> 2] * q[a + 188 >> 2] + k * q[a + 192 >> 2] * q[a + 192 >> 2];
    h > 0 && (q[a + 212 >> 2] = 1 / h, B = S(B, a + 172), i = q[a + 68 >> 2] * 6.2831854820251465, c = q[a + 212 >> 2] * 2 * q[a + 72 >> 2] * i, i *= q[a + 212 >> 2] * i, u = q[f >> 2], q[a + 220 >> 2] = u * (c + u * i), c = q[a + 220 >> 2] > 0 ? 5 : 6, c == 5 && (q[a + 220 >> 2] = 1 / q[a + 220 >> 2]), q[a + 216 >> 2] = B * u * i * q[a + 220 >> 2], q[a + 212 >> 2] = h + q[a + 220 >> 2], q[a + 212 >> 2] > 0 && (q[a + 212 >> 2] = 1 / q[a + 212 >> 2]));
  } else c == 8 && (q[a + 116 >> 2] = 0);
  c = e[a + 128] & 1 ? 10 : 12;
  c == 10 ? (q[a + 208 >> 2] = j + k, q[a + 208 >> 2] > 0 && (q[a + 208 >> 2] = 1 / q[a + 208 >> 2])) : c == 12 && (q[a + 208 >> 2] = 0, q[a + 112 >> 2] = 0);
  c = e[f + 20] & 1 ? 14 : 15;
  c == 14 ? (q[a + 108 >> 2] *= q[f + 8 >> 2], q[a + 116 >> 2] *= q[f + 8 >> 2], q[a + 112 >> 2] *= q[f + 8 >> 2], T(W, q[a + 108 >> 2], a + 180), T(E, q[a + 116 >> 2], a + 172), V(R, W, E), j = q[a + 108 >> 2] * q[a + 196 >> 2] + q[a + 116 >> 2] * q[a + 188 >> 2] + q[a + 112 >> 2], k = q[a + 108 >> 2] * q[a + 200 >> 2] + q[a + 116 >> 2] * q[a + 192 >> 2] + q[a + 112 >> 2], T(Q, q[a + 156 >> 2], R), Pd(o, Q), l -= q[a + 164 >> 2] * j, T(K, q[a + 160 >> 2], R), Sb(r, K), s += q[a + 168 >> 2] * k) : c == 15 && (q[a + 108 >> 2] = 0, q[a + 116 >> 2] = 0, q[a + 112 >> 2] = 0);
  R = g[f + 28 >> 2] + g[a + 132 >> 2] * 12;
  c = o;
  P = R;
  for (aa = c + 8; c < aa; ) e[P++] = e[c++];
  q[g[f + 28 >> 2] + g[a + 132 >> 2] * 12 + 8 >> 2] = l;
  o = g[f + 28 >> 2] + g[a + 136 >> 2] * 12;
  c = r;
  P = o;
  for (aa = c + 8; c < aa; ) e[P++] = e[c++];
  q[g[f + 28 >> 2] + g[a + 136 >> 2] * 12 + 8 >> 2] = s;
  b = d;
}

Xm.X = 1;

function Ym(a, f) {
  var d = b;
  b += 80;
  var c, h, i, j, k, p = d + 8, o, l = d + 16, m = d + 24, n, r = d + 32, s = d + 40, u = d + 48, w = d + 56, t = d + 64, A = d + 72;
  c = q[a + 156 >> 2];
  h = q[a + 160 >> 2];
  i = q[a + 164 >> 2];
  j = q[a + 168 >> 2];
  var C, z;
  n = g[f + 28 >> 2] + g[a + 132 >> 2] * 12;
  C = d;
  for (z = n + 8; n < z; ) e[C++] = e[n++];
  k = q[g[f + 28 >> 2] + g[a + 132 >> 2] * 12 + 8 >> 2];
  n = g[f + 28 >> 2] + g[a + 136 >> 2] * 12;
  C = p;
  for (z = n + 8; n < z; ) e[C++] = e[n++];
  o = q[g[f + 28 >> 2] + g[a + 136 >> 2] * 12 + 8 >> 2];
  n = a + 172;
  J(l, p, d);
  l = -q[a + 212 >> 2] * (S(n, l) + q[a + 192 >> 2] * o - q[a + 188 >> 2] * k + q[a + 216 >> 2] + q[a + 220 >> 2] * q[a + 116 >> 2]);
  q[a + 116 >> 2] += l;
  T(m, l, a + 172);
  n = l * q[a + 188 >> 2];
  l *= q[a + 192 >> 2];
  T(r, c, m);
  Pd(d, r);
  k -= i * n;
  T(s, h, m);
  Sb(p, s);
  o += j * l;
  m = -q[a + 208 >> 2] * (o - k - q[a + 124 >> 2]);
  r = q[a + 112 >> 2];
  s = q[f >> 2] * q[a + 120 >> 2];
  q[a + 112 >> 2] = Ai(q[a + 112 >> 2] + m, -s, s);
  m = q[a + 112 >> 2] - r;
  k -= i * m;
  o += j * m;
  m = a + 180;
  J(u, p, d);
  m = -q[a + 204 >> 2] * (S(m, u) + q[a + 200 >> 2] * o - q[a + 196 >> 2] * k);
  q[a + 108 >> 2] += m;
  T(w, m, a + 180);
  u = m * q[a + 196 >> 2];
  m *= q[a + 200 >> 2];
  T(t, c, w);
  Pd(d, t);
  k -= i * u;
  T(A, h, w);
  Sb(p, A);
  o += j * m;
  c = g[f + 28 >> 2] + g[a + 132 >> 2] * 12;
  n = d;
  C = c;
  for (z = n + 8; n < z; ) e[C++] = e[n++];
  q[g[f + 28 >> 2] + g[a + 132 >> 2] * 12 + 8 >> 2] = k;
  k = g[f + 28 >> 2] + g[a + 136 >> 2] * 12;
  n = p;
  C = k;
  for (z = n + 8; n < z; ) e[C++] = e[n++];
  q[g[f + 28 >> 2] + g[a + 136 >> 2] * 12 + 8 >> 2] = o;
  b = d;
}

Ym.X = 1;

function Zm(a) {
  var f, d;
  f = g[g[a + 48 >> 2] + 8 >> 2];
  d = g[g[a + 52 >> 2] + 8 >> 2];
  $($m, F(1, "i32", v));
  $(Nk, F([ f, 0, 0, 0 ], [ "i32", 0, 0, 0 ], v));
  $(Ok, F([ d, 0, 0, 0 ], [ "i32", 0, 0, 0 ], v));
  $(Pk, F([ e[a + 61] & 1, 0, 0, 0 ], [ "i32", 0, 0, 0 ], v));
  $(Qk, F([ q[a + 76 >> 2], 0, 0, 0, 0, 0, 0, 0, q[a + 80 >> 2], 0, 0, 0, 0, 0, 0, 0 ], [ "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0 ], v));
  $(Rk, F([ q[a + 84 >> 2], 0, 0, 0, 0, 0, 0, 0, q[a + 88 >> 2], 0, 0, 0, 0, 0, 0, 0 ], [ "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0 ], v));
  $(Zl, F([ q[a + 92 >> 2], 0, 0, 0, 0, 0, 0, 0, q[a + 96 >> 2], 0, 0, 0, 0, 0, 0, 0 ], [ "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0 ], v));
  $(dm, F([ e[a + 128] & 1, 0, 0, 0 ], [ "i32", 0, 0, 0 ], v));
  $(em, F([ q[a + 124 >> 2], 0, 0, 0, 0, 0, 0, 0 ], [ "double", 0, 0, 0, 0, 0, 0, 0 ], v));
  $(Dm, F([ q[a + 120 >> 2], 0, 0, 0, 0, 0, 0, 0 ], [ "double", 0, 0, 0, 0, 0, 0, 0 ], v));
  $(Tk, F([ q[a + 68 >> 2], 0, 0, 0, 0, 0, 0, 0 ], [ "double", 0, 0, 0, 0, 0, 0, 0 ], v));
  $(Uk, F([ q[a + 72 >> 2], 0, 0, 0, 0, 0, 0, 0 ], [ "double", 0, 0, 0, 0, 0, 0, 0 ], v));
  $(Vk, F([ g[a + 56 >> 2], 0, 0, 0 ], [ "i32", 0, 0, 0 ], v));
}

Zm.X = 1;

function an(a, f) {
  var d = b;
  b += 128;
  var c, h, i = d + 8, j, k = d + 16, p = d + 24, o = d + 32, l = d + 40, m = d + 48, n = d + 56, r = d + 64, s = d + 72, u = d + 80, w = d + 88, t, A = d + 96, C, z, B = d + 104, D = d + 112, H = d + 120;
  t = g[f + 24 >> 2] + g[a + 132 >> 2] * 12;
  c = d;
  for (C = t + 8; t < C; ) e[c++] = e[t++];
  h = q[g[f + 24 >> 2] + g[a + 132 >> 2] * 12 + 8 >> 2];
  t = g[f + 24 >> 2] + g[a + 136 >> 2] * 12;
  c = i;
  for (C = t + 8; t < C; ) e[c++] = e[t++];
  j = q[g[f + 24 >> 2] + g[a + 136 >> 2] * 12 + 8 >> 2];
  Xk(k, h);
  Xk(p, j);
  J(l, a + 76, a + 140);
  Yc(o, k, l);
  J(n, a + 84, a + 148);
  Yc(m, p, n);
  J(u, i, d);
  V(s, u, m);
  J(r, s, o);
  Yc(w, k, a + 100);
  V(A, r, o);
  t = Z(A, w);
  m = Z(m, w);
  r = S(r, w);
  C = q[a + 156 >> 2] + q[a + 160 >> 2] + q[a + 164 >> 2] * q[a + 196 >> 2] * q[a + 196 >> 2] + q[a + 168 >> 2] * q[a + 200 >> 2] * q[a + 200 >> 2];
  c = C != 0 ? 1 : 2;
  c == 1 ? z = -r / C : c == 2 && (z = 0);
  T(B, z, w);
  w = z * t;
  z *= m;
  T(D, q[a + 156 >> 2], B);
  Pd(d, D);
  h -= q[a + 164 >> 2] * w;
  T(H, q[a + 160 >> 2], B);
  Sb(i, H);
  j += q[a + 168 >> 2] * z;
  B = g[f + 24 >> 2] + g[a + 132 >> 2] * 12;
  t = d;
  c = B;
  for (C = t + 8; t < C; ) e[c++] = e[t++];
  q[g[f + 24 >> 2] + g[a + 132 >> 2] * 12 + 8 >> 2] = h;
  h = g[f + 24 >> 2] + g[a + 136 >> 2] * 12;
  t = i;
  c = h;
  for (C = t + 8; t < C; ) e[c++] = e[t++];
  q[g[f + 24 >> 2] + g[a + 136 >> 2] * 12 + 8 >> 2] = j;
  i = pd(r) <= .004999999888241291;
  b = d;
  return i;
}

an.X = 1;

function Bh(a, f) {
  var d;
  for (d = f + 8; f < d; ) e[a++] = e[f++];
}

function tc() {
  bn === ga && (bn = Date.now());
  return Math.floor((Date.now() - bn) * 1);
}

var bn, cn = 13, dn = 9, en = 22, fn = 5, gn = 21, hn = 6;

function jn(a) {
  kn || (kn = F([ 0 ], "i32", y));
  g[kn >> 2] = a;
}

var kn, ln = 0, wc = 0, mn = 0, nn = 2, zc = [ ja ], on = !0;

function pn(a, f) {
  if (typeof a !== "string") return ja;
  f === ga && (f = "/");
  a && a[0] == "/" && (f = "");
  for (var d = (f + "/" + a).split("/").reverse(), c = [ "" ]; d.length; ) {
    var h = d.pop();
    h == "" || h == "." || (h == ".." ? c.length > 1 && c.pop() : c.push(h));
  }
  return c.length == 1 ? "/" : c.join("/");
}

function qn(a, f, d) {
  var c = {
    Q: !1,
    m: !1,
    error: 0,
    name: ja,
    path: ja,
    object: ja,
    w: !1,
    A: ja,
    z: ja
  }, a = pn(a);
  if (a == "/") c.Q = !0, c.m = c.w = !0, c.name = "/", c.path = c.A = "/", c.object = c.z = rn; else if (a !== ja) for (var d = d || 0, a = a.slice(1).split("/"), h = rn, i = [ "" ]; a.length; ) {
    if (a.length == 1 && h.c) c.w = !0, c.A = i.length == 1 ? "/" : i.join("/"), c.z = h, c.name = a[0];
    var j = a.shift();
    if (h.c) if (h.C) {
      if (!h.a.hasOwnProperty(j)) {
        c.error = 2;
        break;
      }
    } else {
      c.error = cn;
      break;
    } else {
      c.error = 20;
      break;
    }
    h = h.a[j];
    if (h.link && !(f && a.length == 0)) {
      if (d > 40) {
        c.error = 40;
        break;
      }
      c = pn(h.link, i.join("/"));
      return qn([ c ].concat(a).join("/"), f, d + 1);
    }
    i.push(j);
    if (a.length == 0) c.m = !0, c.path = i.join("/"), c.object = h;
  }
  return c;
}

function sn(a, f, d, c, h) {
  a || (a = "/");
  if (typeof a === "string") tn(), a = qn(a, ga), a.m ? a = a.object : (jn(a.error), a = ja);
  if (!a) throw jn(cn), Error("Parent path must exist.");
  if (!a.c) throw jn(20), Error("Parent must be a folder.");
  if (!a.write && !on) throw jn(cn), Error("Parent folder must be writeable.");
  if (!f || f == "." || f == "..") throw jn(2), Error("Name must not be empty.");
  if (a.a.hasOwnProperty(f)) throw jn(17), Error("Can't overwrite object.");
  a.a[f] = {
    C: c === ga ? !0 : c,
    write: h === ga ? !1 : h,
    timestamp: Date.now(),
    N: nn++
  };
  for (var i in d) d.hasOwnProperty(i) && (a.a[f][i] = d[i]);
  return a.a[f];
}

function un(a, f) {
  return sn("/", a, {
    c: !0,
    h: !1,
    a: {}
  }, !0, f);
}

function vn(a, f, d, c) {
  if (!d && !c) throw Error("A device must have at least one callback defined.");
  var h = {
    h: !0,
    input: d,
    d: c,
    c: !1
  };
  return sn(a, f, h, Boolean(d), Boolean(c));
}

function tn() {
  rn || (rn = {
    C: !0,
    write: !1,
    c: !0,
    h: !1,
    timestamp: Date.now(),
    N: 1,
    a: {}
  });
}

var wn, rn;

function yc(a, f, d) {
  var c = zc[a];
  if (c) if (c.i) if (d < 0) return jn(en), -1; else if (c.object.h) if (c.object.d) {
    for (var h = 0; h < d; h++) try {
      c.object.d(e[f + h]);
    } catch (i) {
      return jn(fn), -1;
    }
    c.object.timestamp = Date.now();
    return h;
  } else return jn(hn), -1; else {
    h = c.position;
    a = zc[a];
    if (!a || a.object.h) jn(dn), f = -1; else if (a.i) if (a.object.c) jn(gn), f = -1; else if (d < 0 || h < 0) jn(en), f = -1; else {
      for (var j = a.object.a; j.length < h; ) j.push(0);
      for (var k = 0; k < d; k++) j[h + k] = Qa[f + k];
      a.object.timestamp = Date.now();
      f = k;
    } else jn(cn), f = -1;
    f != -1 && (c.position += f);
    return f;
  } else return jn(cn), -1; else return jn(dn), -1;
}

function xn(a, f) {
  function d(a) {
    var c;
    c = a === "float" || a === "double" ? (bb[0] = g[f + h >> 2], bb[1] = g[f + h + 4 >> 2], gb[0]) : g[f + h >> 2];
    h += Ha.M(a);
    return Number(c);
  }
  for (var c = a, h = 0, i = [], j, k; ; ) {
    var p = c;
    j = e[c];
    if (j === 0) break;
    k = e[c + 1];
    if (j == "%".charCodeAt(0)) {
      var o = !1, l = !1, m = !1, n = !1;
      a : for (;;) {
        switch (k) {
         case "+".charCodeAt(0):
          o = !0;
          break;
         case "-".charCodeAt(0):
          l = !0;
          break;
         case "#".charCodeAt(0):
          m = !0;
          break;
         case "0".charCodeAt(0):
          if (n) break a; else {
            n = !0;
            break;
          }
         default:
          break a;
        }
        c++;
        k = e[c + 1];
      }
      var r = 0;
      if (k == "*".charCodeAt(0)) r = d("i32"), c++, k = e[c + 1]; else for (; k >= "0".charCodeAt(0) && k <= "9".charCodeAt(0); ) r = r * 10 + (k - "0".charCodeAt(0)), c++, k = e[c + 1];
      var s = !1;
      if (k == ".".charCodeAt(0)) {
        var u = 0, s = !0;
        c++;
        k = e[c + 1];
        if (k == "*".charCodeAt(0)) u = d("i32"), c++; else for (;;) {
          k = e[c + 1];
          if (k < "0".charCodeAt(0) || k > "9".charCodeAt(0)) break;
          u = u * 10 + (k - "0".charCodeAt(0));
          c++;
        }
        k = e[c + 1];
      } else u = 6;
      var w;
      switch (String.fromCharCode(k)) {
       case "h":
        k = e[c + 2];
        k == "h".charCodeAt(0) ? (c++, w = 1) : w = 2;
        break;
       case "l":
        k = e[c + 2];
        k == "l".charCodeAt(0) ? (c++, w = 8) : w = 4;
        break;
       case "L":
       case "q":
       case "j":
        w = 8;
        break;
       case "z":
       case "t":
       case "I":
        w = 4;
        break;
       default:
        w = ja;
      }
      w && c++;
      k = e[c + 1];
      if ("d,i,u,o,x,X,p".split(",").indexOf(String.fromCharCode(k)) != -1) {
        p = k == "d".charCodeAt(0) || k == "i".charCodeAt(0);
        w = w || 4;
        j = d("i" + w * 8);
        w <= 4 && (j = (p ? Eb : Db)(j & Math.pow(256, w) - 1, w * 8));
        var t = Math.abs(j), A, p = "";
        if (k == "d".charCodeAt(0) || k == "i".charCodeAt(0)) A = Eb(j, 8 * w).toString(10); else if (k == "u".charCodeAt(0)) A = Db(j, 8 * w).toString(10), j = Math.abs(j); else if (k == "o".charCodeAt(0)) A = (m ? "0" : "") + t.toString(8); else if (k == "x".charCodeAt(0) || k == "X".charCodeAt(0)) {
          p = m ? "0x" : "";
          if (j < 0) {
            j = -j;
            A = (t - 1).toString(16);
            m = [];
            for (t = 0; t < A.length; t++) m.push((15 - parseInt(A[t], 16)).toString(16));
            for (A = m.join(""); A.length < w * 2; ) A = "f" + A;
          } else A = t.toString(16);
          k == "X".charCodeAt(0) && (p = p.toUpperCase(), A = A.toUpperCase());
        } else k == "p".charCodeAt(0) && (t === 0 ? A = "(nil)" : (p = "0x", A = t.toString(16)));
        if (s) for (; A.length < u; ) A = "0" + A;
        for (o && (p = j < 0 ? "-" + p : "+" + p); p.length + A.length < r; ) l ? A += " " : n ? A = "0" + A : p = " " + p;
        A = p + A;
        A.split("").forEach((function(a) {
          i.push(a.charCodeAt(0));
        }));
      } else if ("f,F,e,E,g,G".split(",").indexOf(String.fromCharCode(k)) != -1) {
        j = d(w === 4 ? "float" : "double");
        if (isNaN(j)) A = "nan", n = !1; else if (isFinite(j)) {
          s = !1;
          w = Math.min(u, 20);
          if (k == "g".charCodeAt(0) || k == "G".charCodeAt(0)) s = !0, u = u || 1, w = parseInt(j.toExponential(w).split("e")[1], 10), u > w && w >= -4 ? (k = (k == "g".charCodeAt(0) ? "f" : "F").charCodeAt(0), u -= w + 1) : (k = (k == "g".charCodeAt(0) ? "e" : "E").charCodeAt(0), u--), w = Math.min(u, 20);
          if (k == "e".charCodeAt(0) || k == "E".charCodeAt(0)) A = j.toExponential(w), /[eE][-+]\d$/.test(A) && (A = A.slice(0, -1) + "0" + A.slice(-1)); else if (k == "f".charCodeAt(0) || k == "F".charCodeAt(0)) A = j.toFixed(w);
          p = A.split("e");
          if (s && !m) for (; p[0].length > 1 && p[0].indexOf(".") != -1 && (p[0].slice(-1) == "0" || p[0].slice(-1) == "."); ) p[0] = p[0].slice(0, -1); else for (m && A.indexOf(".") == -1 && (p[0] += "."); u > w++; ) p[0] += "0";
          A = p[0] + (p.length > 1 ? "e" + p[1] : "");
          k == "E".charCodeAt(0) && (A = A.toUpperCase());
          o && j >= 0 && (A = "+" + A);
        } else A = (j < 0 ? "-" : "") + "inf", n = !1;
        for (; A.length < r; ) l ? A += " " : A = n && (A[0] == "-" || A[0] == "+") ? A[0] + "0" + A.slice(1) : (n ? "0" : " ") + A;
        k < "a".charCodeAt(0) && (A = A.toUpperCase());
        A.split("").forEach((function(a) {
          i.push(a.charCodeAt(0));
        }));
      } else if (k == "s".charCodeAt(0)) {
        (o = d("i8*")) ? (o = Cb(o), s && o.length > u && (o = o.slice(0, u))) : o = sb("(null)", !0);
        if (!l) for (; o.length < r--; ) i.push(" ".charCodeAt(0));
        i = i.concat(o);
        if (l) for (; o.length < r--; ) i.push(" ".charCodeAt(0));
      } else if (k == "c".charCodeAt(0)) {
        for (l && i.push(d("i8")); --r > 0; ) i.push(" ".charCodeAt(0));
        l || i.push(d("i8"));
      } else if (k == "n".charCodeAt(0)) l = d("i32*"), g[l >> 2] = i.length; else if (k == "%".charCodeAt(0)) i.push(j); else for (t = p; t < c + 2; t++) i.push(e[t]);
      c += 2;
    } else i.push(j), c += 1;
  }
  return i;
}

function uc(a, f) {
  var d = g[wc >> 2], c = xn(a, f), h = Ha.W();
  var i = F(c, "i8", v), c = c.length * 1;
  if (c == 0) d = 0; else if (i = yc(d, i, c), i == -1) {
    if (zc[d]) zc[d].error = !0;
    d = -1;
  } else d = Math.floor(i / 1);
  Ha.V(h);
  return d;
}

var Oc = Math.sqrt;

function X(a, f, d, c) {
  throw "Assertion failed: " + kb(c) + ", at: " + [ kb(a), f, kb(d) ];
}

var fg = Math.sin, gg = Math.cos, rf = Math.floor;

function jb(a) {
  return Ha.D(a || 1);
}

var gh = uc;

function lh(a) {
  var f = Ha.q({
    g: [ "i32", "i32" ]
  }), d = Date.now();
  g[a + f[0] >> 2] = Math.floor(d / 1e3);
  g[a + f[1] >> 2] = Math.floor((d - 1e3 * Math.floor(d / 1e3)) * 1e3);
}

((function(a, f, d) {
  if (!wn) {
    wn = !0;
    tn();
    a || (a = (function() {
      if (!a.l || !a.l.length) {
        var c;
        typeof window != "undefined" && typeof window.prompt == "function" ? c = window.prompt("Input: ") : typeof readline == "function" && (c = readline());
        c || (c = "");
        a.l = sb(c + "\n", !0);
      }
      return a.l.shift();
    }));
    f || (f = (function(a) {
      a === ja || a === "\n".charCodeAt(0) ? (f.B(f.buffer.join("")), f.buffer = []) : f.buffer.push(String.fromCharCode(a));
    }));
    if (!f.B) f.B = print;
    if (!f.buffer) f.buffer = [];
    d || (d = f);
    un("tmp", !0);
    var c = un("dev", !1), h = vn(c, "stdin", a), i = vn(c, "stdout", ja, f), d = vn(c, "stderr", ja, d);
    vn(c, "tty", a, f);
    zc[1] = {
      path: "/dev/stdin",
      object: h,
      position: 0,
      v: !0,
      i: !1,
      u: !1,
      error: !1,
      r: !1,
      F: []
    };
    zc[2] = {
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
    zc[3] = {
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
    ln = F([ 1 ], "void*", y);
    wc = F([ 2 ], "void*", y);
    mn = F([ 3 ], "void*", y);
    zc[ln] = zc[1];
    zc[wc] = zc[2];
    zc[mn] = zc[3];
    F([ F([ 0, 0, 0, 0, ln, 0, 0, 0, wc, 0, 0, 0, mn, 0, 0, 0 ], "void*", y) ], "void*", y);
  }
}))();

Za.push({
  n: (function() {
    wn && (zc[2].object.d.buffer.length > 0 && zc[2].object.d("\n".charCodeAt(0)), zc[3].object.d.buffer.length > 0 && zc[3].object.d("\n".charCodeAt(0)));
  })
});

jn(0);

var xc = F([ 0 ], "i8", y);

Module.I = (function(a) {
  function f() {
    for (var a = 0; a < 3; a++) c.push(0);
  }
  var d = a.length + 1, c = [ F(sb("/bin/this.program"), "i8", y) ];
  f();
  for (var h = 0; h < d - 1; h += 1) c.push(F(sb(a[h]), "i8", y)), f();
  c.push(0);
  c = F(c, "i32", y);
  return Ib();
});

var vc, Rb, yn, zn, An, Qc, Rc, Sc, gd, hd, md, nd, Dd, Kd, Ld, sd, td, vd, Fd, xe, Wd, Td, Ud, Vd, Gd, yd, Qd, Rd, te, ze, Ae, ue, ve, we, Pe, Ne, Ie, Je, Ke, Se, Te, Ue, Ve, We, Xe, Ye, Ze, $e, af, ef, pf, qf, nf, of, gf, hf, jf, Ef, uf, sf, tf, wf, yf, kg, jg, lg, zf, Af, ng, Df, Cf, Bn, Cn, Dn, En, Fn, Gn, Zb, Hn, In, ug, vg, wg, yg, zg, Ag, Wb, Jn, Kn, Gg, Hg, Cg, Dg, Eg, Fg, Rg, Kg, Lg, Sg, Jg, Ln, Mn, Nn, zd, Ya = (function() {
  g[Ph >> 2] = On + 8;
  Za.push({
    n: 4,
    k: Ph
  });
  g[Qh >> 2] = Pn + 8;
  Za.push({
    n: 6,
    k: Qh
  });
}), Yg, Zg, $g, ah, ih, jh, ch, dh, eh, ph, qh, rh, sh, th, uh, vh, wh, Jh, Ih, yh, zh, Ah, Ph, Qh, gi, Oe, ji, ki, li, fi, Pn, Qn, Rn, si, ti, ui, vi, Ki, Li, Mi, Ni, Pi, Vi, Wi, gj, hj, ij, mj, nj, qj, ei, tj, uj, Zi, jj, kj, dj, ej, $i, aj, On, Sn, Tn, zj, Aj, Bj, Un, Vn, Wn, Xn, Gj, Hj, Ij, Cj, Yn, Zn, Mj, Nj, Oj, Pj, $n, ao, Vj, Wj, Rj, Sj, Tj, Uj, Xj, Yj, Zj, $j, ak, ck, dk, ek, fk, gk, jk, kk, lk, nk, ok, qk, rk, sk, bo, co, yk, zk, Ak, tk, eo, fo, Ck, Dk, Ek, Dj, go, ho, Hk, Ik, Jk, Fk, Jj, io, jo, wk, Mk, Sk, ko, lo, mo, no, al, cl, dl, el, oo, po, il, jl, kl, ll, ml, ql, rl, sl, qo, ro, wl, ud, vl, xl, yl, so, Al, Bl, Cl, Dl, El, Fl, Gl, Il, Jl, to, uo, vo, Pl, Yl, bm, cm, fm, wo, xo, im, hm, jm, km, om, pm, qm, rm, sm, tl, yo, zo, um, Am, am, Bm, Cm, Ao, Ro, Fm, Jm, Km, So, To, Mm, Qm, $l, Uo, Vo, Wm, $m, Nk, Ok, Pk, Qk, Rk, Zl, dm, em, Dm, Tk, Uk, Vk, Wo, Xo;

vc = F([ 37, 102, 10, 0 ], "i8", y);

Rb = F([ 0, 0, 0, 0, 0, 0, 0, 0, 36, 0, 0, 0, 38, 0, 0, 0, 40, 0, 0, 0, 40, 0, 0, 0, 40, 0, 0, 0, 40, 0, 0, 0, 40, 0, 0, 0, 40, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0 ], y);

F(1, "void*", y);

zn = F([ 55, 98, 50, 83, 104, 97, 112, 101, 0 ], "i8", y);

An = F(8, "i8*", y);

Qc = F([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 108, 108, 105, 115, 105, 111, 110, 47, 98, 50, 67, 111, 108, 108, 105, 100, 101, 69, 100, 103, 101, 46, 99, 112, 112, 0 ], "i8", y);

Rc = F([ 118, 111, 105, 100, 32, 98, 50, 67, 111, 108, 108, 105, 100, 101, 69, 100, 103, 101, 65, 110, 100, 67, 105, 114, 99, 108, 101, 40, 98, 50, 77, 97, 110, 105, 102, 111, 108, 100, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 69, 100, 103, 101, 83, 104, 97, 112, 101, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 67, 105, 114, 99, 108, 101, 83, 104, 97, 112, 101, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 41, 0 ], "i8", y);

Sc = F([ 100, 101, 110, 32, 62, 32, 48, 46, 48, 102, 0 ], "i8", y);

gd = F([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 108, 108, 105, 115, 105, 111, 110, 47, 98, 50, 67, 111, 108, 108, 105, 100, 101, 80, 111, 108, 121, 103, 111, 110, 46, 99, 112, 112, 0 ], "i8", y);

hd = F([ 118, 111, 105, 100, 32, 98, 50, 70, 105, 110, 100, 73, 110, 99, 105, 100, 101, 110, 116, 69, 100, 103, 101, 40, 98, 50, 67, 108, 105, 112, 86, 101, 114, 116, 101, 120, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 80, 111, 108, 121, 103, 111, 110, 83, 104, 97, 112, 101, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 44, 32, 105, 110, 116, 51, 50, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 80, 111, 108, 121, 103, 111, 110, 83, 104, 97, 112, 101, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 41, 0 ], "i8", y);

md = F([ 48, 32, 60, 61, 32, 101, 100, 103, 101, 49, 32, 38, 38, 32, 101, 100, 103, 101, 49, 32, 60, 32, 112, 111, 108, 121, 49, 45, 62, 109, 95, 118, 101, 114, 116, 101, 120, 67, 111, 117, 110, 116, 0 ], "i8", y);

nd = F([ 102, 108, 111, 97, 116, 51, 50, 32, 98, 50, 69, 100, 103, 101, 83, 101, 112, 97, 114, 97, 116, 105, 111, 110, 40, 99, 111, 110, 115, 116, 32, 98, 50, 80, 111, 108, 121, 103, 111, 110, 83, 104, 97, 112, 101, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 44, 32, 105, 110, 116, 51, 50, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 80, 111, 108, 121, 103, 111, 110, 83, 104, 97, 112, 101, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 41, 0 ], "i8", y);

Dd = F(1, "i32", y);

Kd = F(1, "i32", y);

Ld = F(1, "i32", y);

sd = F([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 108, 108, 105, 115, 105, 111, 110, 47, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 46, 99, 112, 112, 0 ], "i8", y);

td = F([ 118, 111, 105, 100, 32, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 80, 114, 111, 120, 121, 58, 58, 83, 101, 116, 40, 99, 111, 110, 115, 116, 32, 98, 50, 83, 104, 97, 112, 101, 32, 42, 44, 32, 105, 110, 116, 51, 50, 41, 0 ], "i8", y);

vd = F([ 48, 32, 60, 61, 32, 105, 110, 100, 101, 120, 32, 38, 38, 32, 105, 110, 100, 101, 120, 32, 60, 32, 99, 104, 97, 105, 110, 45, 62, 109, 95, 99, 111, 117, 110, 116, 0 ], "i8", y);

Fd = F([ 118, 111, 105, 100, 32, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 40, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 79, 117, 116, 112, 117, 116, 32, 42, 44, 32, 98, 50, 83, 105, 109, 112, 108, 101, 120, 67, 97, 99, 104, 101, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 73, 110, 112, 117, 116, 32, 42, 41, 0 ], "i8", y);

xe = F([ 102, 108, 111, 97, 116, 51, 50, 32, 98, 50, 83, 105, 109, 112, 108, 101, 120, 58, 58, 71, 101, 116, 77, 101, 116, 114, 105, 99, 40, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", y);

Wd = F([ 118, 111, 105, 100, 32, 98, 50, 83, 105, 109, 112, 108, 101, 120, 58, 58, 71, 101, 116, 87, 105, 116, 110, 101, 115, 115, 80, 111, 105, 110, 116, 115, 40, 98, 50, 86, 101, 99, 50, 32, 42, 44, 32, 98, 50, 86, 101, 99, 50, 32, 42, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", y);

Td = F([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 108, 108, 105, 115, 105, 111, 110, 47, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 46, 104, 0 ], "i8", y);

Ud = F([ 99, 111, 110, 115, 116, 32, 98, 50, 86, 101, 99, 50, 32, 38, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 80, 114, 111, 120, 121, 58, 58, 71, 101, 116, 86, 101, 114, 116, 101, 120, 40, 105, 110, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", y);

Vd = F([ 48, 32, 60, 61, 32, 105, 110, 100, 101, 120, 32, 38, 38, 32, 105, 110, 100, 101, 120, 32, 60, 32, 109, 95, 99, 111, 117, 110, 116, 0 ], "i8", y);

Gd = F([ 98, 50, 86, 101, 99, 50, 32, 98, 50, 83, 105, 109, 112, 108, 101, 120, 58, 58, 71, 101, 116, 83, 101, 97, 114, 99, 104, 68, 105, 114, 101, 99, 116, 105, 111, 110, 40, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", y);

yd = F([ 98, 50, 86, 101, 99, 50, 32, 98, 50, 83, 105, 109, 112, 108, 101, 120, 58, 58, 71, 101, 116, 67, 108, 111, 115, 101, 115, 116, 80, 111, 105, 110, 116, 40, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", y);

Qd = F([ 118, 111, 105, 100, 32, 98, 50, 83, 105, 109, 112, 108, 101, 120, 58, 58, 82, 101, 97, 100, 67, 97, 99, 104, 101, 40, 99, 111, 110, 115, 116, 32, 98, 50, 83, 105, 109, 112, 108, 101, 120, 67, 97, 99, 104, 101, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 80, 114, 111, 120, 121, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 80, 114, 111, 120, 121, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 41, 0 ], "i8", y);

Rd = F([ 99, 97, 99, 104, 101, 45, 62, 99, 111, 117, 110, 116, 32, 60, 61, 32, 51, 0 ], "i8", y);

te = F([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 108, 108, 105, 115, 105, 111, 110, 47, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 46, 99, 112, 112, 0 ], "i8", y);

ze = F([ 105, 110, 116, 51, 50, 32, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 65, 108, 108, 111, 99, 97, 116, 101, 78, 111, 100, 101, 40, 41, 0 ], "i8", y);

Ae = F([ 109, 95, 110, 111, 100, 101, 67, 111, 117, 110, 116, 32, 61, 61, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", y);

ue = F([ 118, 111, 105, 100, 32, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 70, 114, 101, 101, 78, 111, 100, 101, 40, 105, 110, 116, 51, 50, 41, 0 ], "i8", y);

ve = F([ 48, 32, 60, 61, 32, 110, 111, 100, 101, 73, 100, 32, 38, 38, 32, 110, 111, 100, 101, 73, 100, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", y);

we = F([ 48, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 111, 117, 110, 116, 0 ], "i8", y);

F([ 118, 111, 105, 100, 32, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 68, 101, 115, 116, 114, 111, 121, 80, 114, 111, 120, 121, 40, 105, 110, 116, 51, 50, 41, 0 ], "i8", y);

Pe = F([ 109, 95, 110, 111, 100, 101, 115, 91, 112, 114, 111, 120, 121, 73, 100, 93, 46, 73, 115, 76, 101, 97, 102, 40, 41, 0 ], "i8", y);

Ne = F([ 98, 111, 111, 108, 32, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 77, 111, 118, 101, 80, 114, 111, 120, 121, 40, 105, 110, 116, 51, 50, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 65, 65, 66, 66, 32, 38, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 86, 101, 99, 50, 32, 38, 41, 0 ], "i8", y);

Ie = F([ 118, 111, 105, 100, 32, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 73, 110, 115, 101, 114, 116, 76, 101, 97, 102, 40, 105, 110, 116, 51, 50, 41, 0 ], "i8", y);

Je = F([ 99, 104, 105, 108, 100, 49, 32, 33, 61, 32, 40, 45, 49, 41, 0 ], "i8", y);

Ke = F([ 99, 104, 105, 108, 100, 50, 32, 33, 61, 32, 40, 45, 49, 41, 0 ], "i8", y);

Se = F([ 105, 110, 116, 51, 50, 32, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 66, 97, 108, 97, 110, 99, 101, 40, 105, 110, 116, 51, 50, 41, 0 ], "i8", y);

Te = F([ 105, 65, 32, 33, 61, 32, 40, 45, 49, 41, 0 ], "i8", y);

Ue = F([ 48, 32, 60, 61, 32, 105, 66, 32, 38, 38, 32, 105, 66, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", y);

Ve = F([ 48, 32, 60, 61, 32, 105, 67, 32, 38, 38, 32, 105, 67, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", y);

We = F([ 48, 32, 60, 61, 32, 105, 70, 32, 38, 38, 32, 105, 70, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", y);

Xe = F([ 48, 32, 60, 61, 32, 105, 71, 32, 38, 38, 32, 105, 71, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", y);

Ye = F([ 109, 95, 110, 111, 100, 101, 115, 91, 67, 45, 62, 112, 97, 114, 101, 110, 116, 93, 46, 99, 104, 105, 108, 100, 50, 32, 61, 61, 32, 105, 65, 0 ], "i8", y);

Ze = F([ 48, 32, 60, 61, 32, 105, 68, 32, 38, 38, 32, 105, 68, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", y);

$e = F([ 48, 32, 60, 61, 32, 105, 69, 32, 38, 38, 32, 105, 69, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", y);

af = F([ 109, 95, 110, 111, 100, 101, 115, 91, 66, 45, 62, 112, 97, 114, 101, 110, 116, 93, 46, 99, 104, 105, 108, 100, 50, 32, 61, 61, 32, 105, 65, 0 ], "i8", y);

F([ 105, 110, 116, 51, 50, 32, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 67, 111, 109, 112, 117, 116, 101, 72, 101, 105, 103, 104, 116, 40, 105, 110, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", y);

F([ 118, 111, 105, 100, 32, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 86, 97, 108, 105, 100, 97, 116, 101, 83, 116, 114, 117, 99, 116, 117, 114, 101, 40, 105, 110, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", y);

F([ 109, 95, 110, 111, 100, 101, 115, 91, 105, 110, 100, 101, 120, 93, 46, 112, 97, 114, 101, 110, 116, 32, 61, 61, 32, 40, 45, 49, 41, 0 ], "i8", y);

F([ 99, 104, 105, 108, 100, 49, 32, 61, 61, 32, 40, 45, 49, 41, 0 ], "i8", y);

F([ 99, 104, 105, 108, 100, 50, 32, 61, 61, 32, 40, 45, 49, 41, 0 ], "i8", y);

F([ 110, 111, 100, 101, 45, 62, 104, 101, 105, 103, 104, 116, 32, 61, 61, 32, 48, 0 ], "i8", y);

F([ 48, 32, 60, 61, 32, 99, 104, 105, 108, 100, 49, 32, 38, 38, 32, 99, 104, 105, 108, 100, 49, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", y);

F([ 48, 32, 60, 61, 32, 99, 104, 105, 108, 100, 50, 32, 38, 38, 32, 99, 104, 105, 108, 100, 50, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", y);

F([ 109, 95, 110, 111, 100, 101, 115, 91, 99, 104, 105, 108, 100, 49, 93, 46, 112, 97, 114, 101, 110, 116, 32, 61, 61, 32, 105, 110, 100, 101, 120, 0 ], "i8", y);

F([ 109, 95, 110, 111, 100, 101, 115, 91, 99, 104, 105, 108, 100, 50, 93, 46, 112, 97, 114, 101, 110, 116, 32, 61, 61, 32, 105, 110, 100, 101, 120, 0 ], "i8", y);

F([ 118, 111, 105, 100, 32, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 86, 97, 108, 105, 100, 97, 116, 101, 77, 101, 116, 114, 105, 99, 115, 40, 105, 110, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", y);

F([ 110, 111, 100, 101, 45, 62, 104, 101, 105, 103, 104, 116, 32, 61, 61, 32, 104, 101, 105, 103, 104, 116, 0 ], "i8", y);

F([ 97, 97, 98, 98, 46, 108, 111, 119, 101, 114, 66, 111, 117, 110, 100, 32, 61, 61, 32, 110, 111, 100, 101, 45, 62, 97, 97, 98, 98, 46, 108, 111, 119, 101, 114, 66, 111, 117, 110, 100, 0 ], "i8", y);

F([ 97, 97, 98, 98, 46, 117, 112, 112, 101, 114, 66, 111, 117, 110, 100, 32, 61, 61, 32, 110, 111, 100, 101, 45, 62, 97, 97, 98, 98, 46, 117, 112, 112, 101, 114, 66, 111, 117, 110, 100, 0 ], "i8", y);

F([ 118, 111, 105, 100, 32, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 86, 97, 108, 105, 100, 97, 116, 101, 40, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", y);

F([ 48, 32, 60, 61, 32, 102, 114, 101, 101, 73, 110, 100, 101, 120, 32, 38, 38, 32, 102, 114, 101, 101, 73, 110, 100, 101, 120, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", y);

F([ 71, 101, 116, 72, 101, 105, 103, 104, 116, 40, 41, 32, 61, 61, 32, 67, 111, 109, 112, 117, 116, 101, 72, 101, 105, 103, 104, 116, 40, 41, 0 ], "i8", y);

F([ 109, 95, 110, 111, 100, 101, 67, 111, 117, 110, 116, 32, 43, 32, 102, 114, 101, 101, 67, 111, 117, 110, 116, 32, 61, 61, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", y);

F([ 105, 110, 116, 51, 50, 32, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 71, 101, 116, 77, 97, 120, 66, 97, 108, 97, 110, 99, 101, 40, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", y);

F([ 110, 111, 100, 101, 45, 62, 73, 115, 76, 101, 97, 102, 40, 41, 32, 61, 61, 32, 102, 97, 108, 115, 101, 0 ], "i8", y);

ef = F(1, "i32", y);

pf = F(1, "i32", y);

qf = F(1, "i32", y);

nf = F(1, "i32", y);

of = F(1, "i32", y);

gf = F([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 108, 108, 105, 115, 105, 111, 110, 47, 98, 50, 84, 105, 109, 101, 79, 102, 73, 109, 112, 97, 99, 116, 46, 99, 112, 112, 0 ], "i8", y);

hf = F([ 118, 111, 105, 100, 32, 98, 50, 84, 105, 109, 101, 79, 102, 73, 109, 112, 97, 99, 116, 40, 98, 50, 84, 79, 73, 79, 117, 116, 112, 117, 116, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 79, 73, 73, 110, 112, 117, 116, 32, 42, 41, 0 ], "i8", y);

jf = F([ 116, 97, 114, 103, 101, 116, 32, 62, 32, 116, 111, 108, 101, 114, 97, 110, 99, 101, 0 ], "i8", y);

Ef = F([ 102, 108, 111, 97, 116, 51, 50, 32, 98, 50, 83, 101, 112, 97, 114, 97, 116, 105, 111, 110, 70, 117, 110, 99, 116, 105, 111, 110, 58, 58, 69, 118, 97, 108, 117, 97, 116, 101, 40, 105, 110, 116, 51, 50, 44, 32, 105, 110, 116, 51, 50, 44, 32, 102, 108, 111, 97, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", y);

uf = F([ 102, 108, 111, 97, 116, 51, 50, 32, 98, 50, 83, 101, 112, 97, 114, 97, 116, 105, 111, 110, 70, 117, 110, 99, 116, 105, 111, 110, 58, 58, 70, 105, 110, 100, 77, 105, 110, 83, 101, 112, 97, 114, 97, 116, 105, 111, 110, 40, 105, 110, 116, 51, 50, 32, 42, 44, 32, 105, 110, 116, 51, 50, 32, 42, 44, 32, 102, 108, 111, 97, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", y);

sf = F([ 102, 108, 111, 97, 116, 51, 50, 32, 98, 50, 83, 101, 112, 97, 114, 97, 116, 105, 111, 110, 70, 117, 110, 99, 116, 105, 111, 110, 58, 58, 73, 110, 105, 116, 105, 97, 108, 105, 122, 101, 40, 99, 111, 110, 115, 116, 32, 98, 50, 83, 105, 109, 112, 108, 101, 120, 67, 97, 99, 104, 101, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 80, 114, 111, 120, 121, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 83, 119, 101, 101, 112, 32, 38, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 80, 114, 111, 120, 121, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 83, 119, 101, 101, 112, 32, 38, 44, 32, 102, 108, 111, 97, 116, 51, 50, 41, 0 ], "i8", y);

tf = F([ 48, 32, 60, 32, 99, 111, 117, 110, 116, 32, 38, 38, 32, 99, 111, 117, 110, 116, 32, 60, 32, 51, 0 ], "i8", y);

wf = F([ 0, 0, 0, 0, 0, 0, 0, 0, 42, 0, 0, 0, 44, 0, 0, 0, 46, 0, 0, 0, 48, 0, 0, 0, 50, 0, 0, 0, 52, 0, 0, 0, 54, 0, 0, 0, 56, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0 ], y);

F(1, "void*", y);

yf = F([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 108, 108, 105, 115, 105, 111, 110, 47, 83, 104, 97, 112, 101, 115, 47, 98, 50, 67, 104, 97, 105, 110, 83, 104, 97, 112, 101, 46, 99, 112, 112, 0 ], "i8", y);

F([ 118, 111, 105, 100, 32, 98, 50, 67, 104, 97, 105, 110, 83, 104, 97, 112, 101, 58, 58, 67, 114, 101, 97, 116, 101, 76, 111, 111, 112, 40, 99, 111, 110, 115, 116, 32, 98, 50, 86, 101, 99, 50, 32, 42, 44, 32, 105, 110, 116, 51, 50, 41, 0 ], "i8", y);

kg = F([ 109, 95, 118, 101, 114, 116, 105, 99, 101, 115, 32, 61, 61, 32, 95, 95, 110, 117, 108, 108, 32, 38, 38, 32, 109, 95, 99, 111, 117, 110, 116, 32, 61, 61, 32, 48, 0 ], "i8", y);

jg = F([ 118, 111, 105, 100, 32, 98, 50, 67, 104, 97, 105, 110, 83, 104, 97, 112, 101, 58, 58, 67, 114, 101, 97, 116, 101, 67, 104, 97, 105, 110, 40, 99, 111, 110, 115, 116, 32, 98, 50, 86, 101, 99, 50, 32, 42, 44, 32, 105, 110, 116, 51, 50, 41, 0 ], "i8", y);

lg = F([ 99, 111, 117, 110, 116, 32, 62, 61, 32, 50, 0 ], "i8", y);

zf = F([ 118, 111, 105, 100, 32, 98, 50, 67, 104, 97, 105, 110, 83, 104, 97, 112, 101, 58, 58, 71, 101, 116, 67, 104, 105, 108, 100, 69, 100, 103, 101, 40, 98, 50, 69, 100, 103, 101, 83, 104, 97, 112, 101, 32, 42, 44, 32, 105, 110, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", y);

Af = F([ 48, 32, 60, 61, 32, 105, 110, 100, 101, 120, 32, 38, 38, 32, 105, 110, 100, 101, 120, 32, 60, 32, 109, 95, 99, 111, 117, 110, 116, 32, 45, 32, 49, 0 ], "i8", y);

ng = F([ 118, 105, 114, 116, 117, 97, 108, 32, 98, 111, 111, 108, 32, 98, 50, 67, 104, 97, 105, 110, 83, 104, 97, 112, 101, 58, 58, 82, 97, 121, 67, 97, 115, 116, 40, 98, 50, 82, 97, 121, 67, 97, 115, 116, 79, 117, 116, 112, 117, 116, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 82, 97, 121, 67, 97, 115, 116, 73, 110, 112, 117, 116, 32, 38, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 44, 32, 105, 110, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", y);

Df = F([ 99, 104, 105, 108, 100, 73, 110, 100, 101, 120, 32, 60, 32, 109, 95, 99, 111, 117, 110, 116, 0 ], "i8", y);

Cf = F([ 118, 105, 114, 116, 117, 97, 108, 32, 118, 111, 105, 100, 32, 98, 50, 67, 104, 97, 105, 110, 83, 104, 97, 112, 101, 58, 58, 67, 111, 109, 112, 117, 116, 101, 65, 65, 66, 66, 40, 98, 50, 65, 65, 66, 66, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 44, 32, 105, 110, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", y);

Cn = F([ 49, 50, 98, 50, 67, 104, 97, 105, 110, 83, 104, 97, 112, 101, 0 ], "i8", y);

Dn = F(12, "i8*", y);

En = F([ 0, 0, 0, 0, 0, 0, 0, 0, 58, 0, 0, 0, 60, 0, 0, 0, 62, 0, 0, 0, 64, 0, 0, 0, 66, 0, 0, 0, 68, 0, 0, 0, 70, 0, 0, 0, 72, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0 ], y);

F(1, "void*", y);

Fn = F([ 49, 51, 98, 50, 67, 105, 114, 99, 108, 101, 83, 104, 97, 112, 101, 0 ], "i8", y);

Gn = F(12, "i8*", y);

Zb = F([ 0, 0, 0, 0, 0, 0, 0, 0, 74, 0, 0, 0, 76, 0, 0, 0, 78, 0, 0, 0, 80, 0, 0, 0, 82, 0, 0, 0, 84, 0, 0, 0, 86, 0, 0, 0, 88, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0 ], y);

F(1, "void*", y);

Hn = F([ 49, 49, 98, 50, 69, 100, 103, 101, 83, 104, 97, 112, 101, 0 ], "i8", y);

In = F(12, "i8*", y);

ug = F([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 108, 108, 105, 115, 105, 111, 110, 47, 83, 104, 97, 112, 101, 115, 47, 98, 50, 80, 111, 108, 121, 103, 111, 110, 83, 104, 97, 112, 101, 46, 99, 112, 112, 0 ], "i8", y);

F([ 118, 111, 105, 100, 32, 98, 50, 80, 111, 108, 121, 103, 111, 110, 83, 104, 97, 112, 101, 58, 58, 83, 101, 116, 40, 99, 111, 110, 115, 116, 32, 98, 50, 86, 101, 99, 50, 32, 42, 44, 32, 105, 110, 116, 51, 50, 41, 0 ], "i8", y);

F([ 51, 32, 60, 61, 32, 99, 111, 117, 110, 116, 32, 38, 38, 32, 99, 111, 117, 110, 116, 32, 60, 61, 32, 56, 0 ], "i8", y);

F([ 101, 100, 103, 101, 46, 76, 101, 110, 103, 116, 104, 83, 113, 117, 97, 114, 101, 100, 40, 41, 32, 62, 32, 49, 46, 49, 57, 50, 48, 57, 50, 57, 48, 69, 45, 48, 55, 70, 32, 42, 32, 49, 46, 49, 57, 50, 48, 57, 50, 57, 48, 69, 45, 48, 55, 70, 0 ], "i8", y);

vg = F([ 118, 105, 114, 116, 117, 97, 108, 32, 98, 111, 111, 108, 32, 98, 50, 80, 111, 108, 121, 103, 111, 110, 83, 104, 97, 112, 101, 58, 58, 82, 97, 121, 67, 97, 115, 116, 40, 98, 50, 82, 97, 121, 67, 97, 115, 116, 79, 117, 116, 112, 117, 116, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 82, 97, 121, 67, 97, 115, 116, 73, 110, 112, 117, 116, 32, 38, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 44, 32, 105, 110, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", y);

wg = F([ 48, 46, 48, 102, 32, 60, 61, 32, 108, 111, 119, 101, 114, 32, 38, 38, 32, 108, 111, 119, 101, 114, 32, 60, 61, 32, 105, 110, 112, 117, 116, 46, 109, 97, 120, 70, 114, 97, 99, 116, 105, 111, 110, 0 ], "i8", y);

yg = F([ 118, 105, 114, 116, 117, 97, 108, 32, 118, 111, 105, 100, 32, 98, 50, 80, 111, 108, 121, 103, 111, 110, 83, 104, 97, 112, 101, 58, 58, 67, 111, 109, 112, 117, 116, 101, 77, 97, 115, 115, 40, 98, 50, 77, 97, 115, 115, 68, 97, 116, 97, 32, 42, 44, 32, 102, 108, 111, 97, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", y);

zg = F([ 109, 95, 118, 101, 114, 116, 101, 120, 67, 111, 117, 110, 116, 32, 62, 61, 32, 51, 0 ], "i8", y);

Ag = F([ 97, 114, 101, 97, 32, 62, 32, 49, 46, 49, 57, 50, 48, 57, 50, 57, 48, 69, 45, 48, 55, 70, 0 ], "i8", y);

Wb = F([ 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0, 92, 0, 0, 0, 94, 0, 0, 0, 96, 0, 0, 0, 98, 0, 0, 0, 100, 0, 0, 0, 102, 0, 0, 0, 104, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0 ], y);

F(1, "void*", y);

Jn = F([ 49, 52, 98, 50, 80, 111, 108, 121, 103, 111, 110, 83, 104, 97, 112, 101, 0 ], "i8", y);

Kn = F(12, "i8*", y);

F([ 98, 50, 86, 101, 99, 50, 32, 67, 111, 109, 112, 117, 116, 101, 67, 101, 110, 116, 114, 111, 105, 100, 40, 99, 111, 110, 115, 116, 32, 98, 50, 86, 101, 99, 50, 32, 42, 44, 32, 105, 110, 116, 51, 50, 41, 0 ], "i8", y);

F([ 99, 111, 117, 110, 116, 32, 62, 61, 32, 51, 0 ], "i8", y);

Gg = F([ 16, 0, 0, 0, 32, 0, 0, 0, 64, 0, 0, 0, 96, 0, 0, 0, 128, 0, 0, 0, 160, 0, 0, 0, 192, 0, 0, 0, 224, 0, 0, 0, 256, 0, 0, 0, 320, 0, 0, 0, 384, 0, 0, 0, 448, 0, 0, 0, 512, 0, 0, 0, 640, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], y);

Hg = F(641, "i8", y);

Cg = F(1, "i8", y);

Dg = F([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 109, 109, 111, 110, 47, 98, 50, 66, 108, 111, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 46, 99, 112, 112, 0 ], "i8", y);

Eg = F([ 98, 50, 66, 108, 111, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 58, 58, 98, 50, 66, 108, 111, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 40, 41, 0 ], "i8", y);

Fg = F([ 106, 32, 60, 32, 98, 50, 95, 98, 108, 111, 99, 107, 83, 105, 122, 101, 115, 0 ], "i8", y);

Rg = F([ 118, 111, 105, 100, 32, 42, 98, 50, 66, 108, 111, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 58, 58, 65, 108, 108, 111, 99, 97, 116, 101, 40, 105, 110, 116, 51, 50, 41, 0 ], "i8", y);

Kg = F([ 48, 32, 60, 32, 115, 105, 122, 101, 0 ], "i8", y);

Lg = F([ 48, 32, 60, 61, 32, 105, 110, 100, 101, 120, 32, 38, 38, 32, 105, 110, 100, 101, 120, 32, 60, 32, 98, 50, 95, 98, 108, 111, 99, 107, 83, 105, 122, 101, 115, 0 ], "i8", y);

Sg = F([ 98, 108, 111, 99, 107, 67, 111, 117, 110, 116, 32, 42, 32, 98, 108, 111, 99, 107, 83, 105, 122, 101, 32, 60, 61, 32, 98, 50, 95, 99, 104, 117, 110, 107, 83, 105, 122, 101, 0 ], "i8", y);

Jg = F([ 118, 111, 105, 100, 32, 98, 50, 66, 108, 111, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 58, 58, 70, 114, 101, 101, 40, 118, 111, 105, 100, 32, 42, 44, 32, 105, 110, 116, 51, 50, 41, 0 ], "i8", y);

Ln = F([ 0, 0, 0, 0, 0, 0, 0, 0, 106, 0, 0, 0, 108, 0, 0, 0, 40, 0, 0, 0, 40, 0, 0, 0, 40, 0, 0, 0, 40, 0, 0, 0, 40, 0, 0, 0, 40, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0 ], y);

F(1, "void*", y);

Mn = F([ 54, 98, 50, 68, 114, 97, 119, 0 ], "i8", y);

Nn = F(8, "i8*", y);

zd = F(8, "float", y);

F([ 2, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], y);

Yg = F([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 109, 109, 111, 110, 47, 98, 50, 83, 116, 97, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 46, 99, 112, 112, 0 ], "i8", y);

Zg = F([ 98, 50, 83, 116, 97, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 58, 58, 126, 98, 50, 83, 116, 97, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 40, 41, 0 ], "i8", y);

$g = F([ 109, 95, 105, 110, 100, 101, 120, 32, 61, 61, 32, 48, 0 ], "i8", y);

ah = F([ 109, 95, 101, 110, 116, 114, 121, 67, 111, 117, 110, 116, 32, 61, 61, 32, 48, 0 ], "i8", y);

ih = F([ 118, 111, 105, 100, 32, 42, 98, 50, 83, 116, 97, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 58, 58, 65, 108, 108, 111, 99, 97, 116, 101, 40, 105, 110, 116, 51, 50, 41, 0 ], "i8", y);

jh = F([ 109, 95, 101, 110, 116, 114, 121, 67, 111, 117, 110, 116, 32, 60, 32, 98, 50, 95, 109, 97, 120, 83, 116, 97, 99, 107, 69, 110, 116, 114, 105, 101, 115, 0 ], "i8", y);

ch = F([ 118, 111, 105, 100, 32, 98, 50, 83, 116, 97, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 58, 58, 70, 114, 101, 101, 40, 118, 111, 105, 100, 32, 42, 41, 0 ], "i8", y);

dh = F([ 109, 95, 101, 110, 116, 114, 121, 67, 111, 117, 110, 116, 32, 62, 32, 48, 0 ], "i8", y);

eh = F([ 112, 32, 61, 61, 32, 101, 110, 116, 114, 121, 45, 62, 100, 97, 116, 97, 0 ], "i8", y);

ph = F([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 98, 50, 66, 111, 100, 121, 46, 99, 112, 112, 0 ], "i8", y);

qh = F([ 98, 50, 66, 111, 100, 121, 58, 58, 98, 50, 66, 111, 100, 121, 40, 99, 111, 110, 115, 116, 32, 98, 50, 66, 111, 100, 121, 68, 101, 102, 32, 42, 44, 32, 98, 50, 87, 111, 114, 108, 100, 32, 42, 41, 0 ], "i8", y);

rh = F([ 98, 100, 45, 62, 112, 111, 115, 105, 116, 105, 111, 110, 46, 73, 115, 86, 97, 108, 105, 100, 40, 41, 0 ], "i8", y);

sh = F([ 98, 100, 45, 62, 108, 105, 110, 101, 97, 114, 86, 101, 108, 111, 99, 105, 116, 121, 46, 73, 115, 86, 97, 108, 105, 100, 40, 41, 0 ], "i8", y);

th = F([ 98, 50, 73, 115, 86, 97, 108, 105, 100, 40, 98, 100, 45, 62, 97, 110, 103, 108, 101, 41, 0 ], "i8", y);

uh = F([ 98, 50, 73, 115, 86, 97, 108, 105, 100, 40, 98, 100, 45, 62, 97, 110, 103, 117, 108, 97, 114, 86, 101, 108, 111, 99, 105, 116, 121, 41, 0 ], "i8", y);

vh = F([ 98, 50, 73, 115, 86, 97, 108, 105, 100, 40, 98, 100, 45, 62, 97, 110, 103, 117, 108, 97, 114, 68, 97, 109, 112, 105, 110, 103, 41, 32, 38, 38, 32, 98, 100, 45, 62, 97, 110, 103, 117, 108, 97, 114, 68, 97, 109, 112, 105, 110, 103, 32, 62, 61, 32, 48, 46, 48, 102, 0 ], "i8", y);

wh = F([ 98, 50, 73, 115, 86, 97, 108, 105, 100, 40, 98, 100, 45, 62, 108, 105, 110, 101, 97, 114, 68, 97, 109, 112, 105, 110, 103, 41, 32, 38, 38, 32, 98, 100, 45, 62, 108, 105, 110, 101, 97, 114, 68, 97, 109, 112, 105, 110, 103, 32, 62, 61, 32, 48, 46, 48, 102, 0 ], "i8", y);

F([ 118, 111, 105, 100, 32, 98, 50, 66, 111, 100, 121, 58, 58, 83, 101, 116, 84, 121, 112, 101, 40, 98, 50, 66, 111, 100, 121, 84, 121, 112, 101, 41, 0 ], "i8", y);

Jh = F([ 109, 95, 119, 111, 114, 108, 100, 45, 62, 73, 115, 76, 111, 99, 107, 101, 100, 40, 41, 32, 61, 61, 32, 102, 97, 108, 115, 101, 0 ], "i8", y);

Ih = F([ 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 98, 50, 66, 111, 100, 121, 58, 58, 67, 114, 101, 97, 116, 101, 70, 105, 120, 116, 117, 114, 101, 40, 99, 111, 110, 115, 116, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 68, 101, 102, 32, 42, 41, 0 ], "i8", y);

F([ 118, 111, 105, 100, 32, 98, 50, 66, 111, 100, 121, 58, 58, 68, 101, 115, 116, 114, 111, 121, 70, 105, 120, 116, 117, 114, 101, 40, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 41, 0 ], "i8", y);

F([ 102, 105, 120, 116, 117, 114, 101, 45, 62, 109, 95, 98, 111, 100, 121, 32, 61, 61, 32, 116, 104, 105, 115, 0 ], "i8", y);

F([ 109, 95, 102, 105, 120, 116, 117, 114, 101, 67, 111, 117, 110, 116, 32, 62, 32, 48, 0 ], "i8", y);

F([ 102, 111, 117, 110, 100, 0 ], "i8", y);

yh = F([ 118, 111, 105, 100, 32, 98, 50, 66, 111, 100, 121, 58, 58, 82, 101, 115, 101, 116, 77, 97, 115, 115, 68, 97, 116, 97, 40, 41, 0 ], "i8", y);

zh = F([ 109, 95, 116, 121, 112, 101, 32, 61, 61, 32, 98, 50, 95, 100, 121, 110, 97, 109, 105, 99, 66, 111, 100, 121, 0 ], "i8", y);

Ah = F([ 109, 95, 73, 32, 62, 32, 48, 46, 48, 102, 0 ], "i8", y);

F([ 118, 111, 105, 100, 32, 98, 50, 66, 111, 100, 121, 58, 58, 83, 101, 116, 77, 97, 115, 115, 68, 97, 116, 97, 40, 99, 111, 110, 115, 116, 32, 98, 50, 77, 97, 115, 115, 68, 97, 116, 97, 32, 42, 41, 0 ], "i8", y);

F([ 118, 111, 105, 100, 32, 98, 50, 66, 111, 100, 121, 58, 58, 83, 101, 116, 84, 114, 97, 110, 115, 102, 111, 114, 109, 40, 99, 111, 110, 115, 116, 32, 98, 50, 86, 101, 99, 50, 32, 38, 44, 32, 102, 108, 111, 97, 116, 51, 50, 41, 0 ], "i8", y);

F([ 118, 111, 105, 100, 32, 98, 50, 66, 111, 100, 121, 58, 58, 83, 101, 116, 65, 99, 116, 105, 118, 101, 40, 98, 111, 111, 108, 41, 0 ], "i8", y);

F([ 32, 32, 98, 50, 66, 111, 100, 121, 68, 101, 102, 32, 98, 100, 59, 10, 0 ], "i8", y);

F([ 32, 32, 98, 100, 46, 116, 121, 112, 101, 32, 61, 32, 98, 50, 66, 111, 100, 121, 84, 121, 112, 101, 40, 37, 100, 41, 59, 10, 0 ], "i8", y);

F([ 32, 32, 98, 100, 46, 112, 111, 115, 105, 116, 105, 111, 110, 46, 83, 101, 116, 40, 37, 46, 49, 53, 108, 101, 102, 44, 32, 37, 46, 49, 53, 108, 101, 102, 41, 59, 10, 0 ], "i8", y);

F([ 32, 32, 98, 100, 46, 97, 110, 103, 108, 101, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0 ], "i8", y);

F([ 32, 32, 98, 100, 46, 108, 105, 110, 101, 97, 114, 86, 101, 108, 111, 99, 105, 116, 121, 46, 83, 101, 116, 40, 37, 46, 49, 53, 108, 101, 102, 44, 32, 37, 46, 49, 53, 108, 101, 102, 41, 59, 10, 0 ], "i8", y);

F([ 32, 32, 98, 100, 46, 97, 110, 103, 117, 108, 97, 114, 86, 101, 108, 111, 99, 105, 116, 121, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0 ], "i8", y);

F([ 32, 32, 98, 100, 46, 108, 105, 110, 101, 97, 114, 68, 97, 109, 112, 105, 110, 103, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0 ], "i8", y);

F([ 32, 32, 98, 100, 46, 97, 110, 103, 117, 108, 97, 114, 68, 97, 109, 112, 105, 110, 103, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0 ], "i8", y);

F([ 32, 32, 98, 100, 46, 97, 108, 108, 111, 119, 83, 108, 101, 101, 112, 32, 61, 32, 98, 111, 111, 108, 40, 37, 100, 41, 59, 10, 0 ], "i8", y);

F([ 32, 32, 98, 100, 46, 97, 119, 97, 107, 101, 32, 61, 32, 98, 111, 111, 108, 40, 37, 100, 41, 59, 10, 0 ], "i8", y);

F([ 32, 32, 98, 100, 46, 102, 105, 120, 101, 100, 82, 111, 116, 97, 116, 105, 111, 110, 32, 61, 32, 98, 111, 111, 108, 40, 37, 100, 41, 59, 10, 0 ], "i8", y);

F([ 32, 32, 98, 100, 46, 98, 117, 108, 108, 101, 116, 32, 61, 32, 98, 111, 111, 108, 40, 37, 100, 41, 59, 10, 0 ], "i8", y);

F([ 32, 32, 98, 100, 46, 97, 99, 116, 105, 118, 101, 32, 61, 32, 98, 111, 111, 108, 40, 37, 100, 41, 59, 10, 0 ], "i8", y);

F([ 32, 32, 98, 100, 46, 103, 114, 97, 118, 105, 116, 121, 83, 99, 97, 108, 101, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0 ], "i8", y);

F([ 32, 32, 98, 111, 100, 105, 101, 115, 91, 37, 100, 93, 32, 61, 32, 109, 95, 119, 111, 114, 108, 100, 45, 62, 67, 114, 101, 97, 116, 101, 66, 111, 100, 121, 40, 38, 98, 100, 41, 59, 10, 0 ], "i8", y);

F([ 32, 32, 123, 10, 0 ], "i8", y);

F([ 32, 32, 125, 10, 0 ], "i8", y);

Ph = F(4, "i32 (...)**", y);

Qh = F(4, "i32 (...)**", y);

gi = F([ 118, 111, 105, 100, 32, 42, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 71, 101, 116, 85, 115, 101, 114, 68, 97, 116, 97, 40, 105, 110, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", y);

Oe = F([ 48, 32, 60, 61, 32, 112, 114, 111, 120, 121, 73, 100, 32, 38, 38, 32, 112, 114, 111, 120, 121, 73, 100, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", y);

ji = F([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 109, 109, 111, 110, 47, 98, 50, 71, 114, 111, 119, 97, 98, 108, 101, 83, 116, 97, 99, 107, 46, 104, 0 ], "i8", y);

ki = F([ 105, 110, 116, 32, 98, 50, 71, 114, 111, 119, 97, 98, 108, 101, 83, 116, 97, 99, 107, 60, 105, 110, 116, 44, 32, 50, 53, 54, 62, 58, 58, 80, 111, 112, 40, 41, 0 ], "i8", y);

li = F([ 109, 95, 99, 111, 117, 110, 116, 32, 62, 32, 48, 0 ], "i8", y);

fi = F([ 99, 111, 110, 115, 116, 32, 98, 50, 65, 65, 66, 66, 32, 38, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 71, 101, 116, 70, 97, 116, 65, 65, 66, 66, 40, 105, 110, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", y);

Pn = F([ 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 110, 0, 0, 0, 112, 0, 0, 0, 114, 0, 0, 0, 116, 0, 0, 0, 118, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0 ], y);

F(1, "void*", y);

Qn = F([ 49, 55, 98, 50, 67, 111, 110, 116, 97, 99, 116, 76, 105, 115, 116, 101, 110, 101, 114, 0 ], "i8", y);

Rn = F(8, "i8*", y);

si = F([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 98, 50, 70, 105, 120, 116, 117, 114, 101, 46, 99, 112, 112, 0 ], "i8", y);

ti = F([ 118, 111, 105, 100, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 58, 58, 68, 101, 115, 116, 114, 111, 121, 40, 98, 50, 66, 108, 111, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 32, 42, 41, 0 ], "i8", y);

ui = F([ 109, 95, 112, 114, 111, 120, 121, 67, 111, 117, 110, 116, 32, 61, 61, 32, 48, 0 ], "i8", y);

vi = F([ 118, 111, 105, 100, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 58, 58, 67, 114, 101, 97, 116, 101, 80, 114, 111, 120, 105, 101, 115, 40, 98, 50, 66, 114, 111, 97, 100, 80, 104, 97, 115, 101, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 41, 0 ], "i8", y);

F([ 32, 32, 32, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 68, 101, 102, 32, 102, 100, 59, 10, 0 ], "i8", y);

F([ 32, 32, 32, 32, 102, 100, 46, 102, 114, 105, 99, 116, 105, 111, 110, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0 ], "i8", y);

F([ 32, 32, 32, 32, 102, 100, 46, 114, 101, 115, 116, 105, 116, 117, 116, 105, 111, 110, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0 ], "i8", y);

F([ 32, 32, 32, 32, 102, 100, 46, 100, 101, 110, 115, 105, 116, 121, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0 ], "i8", y);

F([ 32, 32, 32, 32, 102, 100, 46, 105, 115, 83, 101, 110, 115, 111, 114, 32, 61, 32, 98, 111, 111, 108, 40, 37, 100, 41, 59, 10, 0 ], "i8", y);

F([ 32, 32, 32, 32, 102, 100, 46, 102, 105, 108, 116, 101, 114, 46, 99, 97, 116, 101, 103, 111, 114, 121, 66, 105, 116, 115, 32, 61, 32, 117, 105, 110, 116, 49, 54, 40, 37, 100, 41, 59, 10, 0 ], "i8", y);

F([ 32, 32, 32, 32, 102, 100, 46, 102, 105, 108, 116, 101, 114, 46, 109, 97, 115, 107, 66, 105, 116, 115, 32, 61, 32, 117, 105, 110, 116, 49, 54, 40, 37, 100, 41, 59, 10, 0 ], "i8", y);

F([ 32, 32, 32, 32, 102, 100, 46, 102, 105, 108, 116, 101, 114, 46, 103, 114, 111, 117, 112, 73, 110, 100, 101, 120, 32, 61, 32, 105, 110, 116, 49, 54, 40, 37, 100, 41, 59, 10, 0 ], "i8", y);

F([ 32, 32, 32, 32, 98, 50, 67, 105, 114, 99, 108, 101, 83, 104, 97, 112, 101, 32, 115, 104, 97, 112, 101, 59, 10, 0 ], "i8", y);

F([ 32, 32, 32, 32, 115, 104, 97, 112, 101, 46, 109, 95, 114, 97, 100, 105, 117, 115, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0 ], "i8", y);

F([ 32, 32, 32, 32, 115, 104, 97, 112, 101, 46, 109, 95, 112, 46, 83, 101, 116, 40, 37, 46, 49, 53, 108, 101, 102, 44, 32, 37, 46, 49, 53, 108, 101, 102, 41, 59, 10, 0 ], "i8", y);

F([ 32, 32, 32, 32, 98, 50, 69, 100, 103, 101, 83, 104, 97, 112, 101, 32, 115, 104, 97, 112, 101, 59, 10, 0 ], "i8", y);

F([ 32, 32, 32, 32, 115, 104, 97, 112, 101, 46, 109, 95, 118, 101, 114, 116, 101, 120, 48, 46, 83, 101, 116, 40, 37, 46, 49, 53, 108, 101, 102, 44, 32, 37, 46, 49, 53, 108, 101, 102, 41, 59, 10, 0 ], "i8", y);

F([ 32, 32, 32, 32, 115, 104, 97, 112, 101, 46, 109, 95, 118, 101, 114, 116, 101, 120, 49, 46, 83, 101, 116, 40, 37, 46, 49, 53, 108, 101, 102, 44, 32, 37, 46, 49, 53, 108, 101, 102, 41, 59, 10, 0 ], "i8", y);

F([ 32, 32, 32, 32, 115, 104, 97, 112, 101, 46, 109, 95, 118, 101, 114, 116, 101, 120, 50, 46, 83, 101, 116, 40, 37, 46, 49, 53, 108, 101, 102, 44, 32, 37, 46, 49, 53, 108, 101, 102, 41, 59, 10, 0 ], "i8", y);

F([ 32, 32, 32, 32, 115, 104, 97, 112, 101, 46, 109, 95, 118, 101, 114, 116, 101, 120, 51, 46, 83, 101, 116, 40, 37, 46, 49, 53, 108, 101, 102, 44, 32, 37, 46, 49, 53, 108, 101, 102, 41, 59, 10, 0 ], "i8", y);

F([ 32, 32, 32, 32, 115, 104, 97, 112, 101, 46, 109, 95, 104, 97, 115, 86, 101, 114, 116, 101, 120, 48, 32, 61, 32, 98, 111, 111, 108, 40, 37, 100, 41, 59, 10, 0 ], "i8", y);

F([ 32, 32, 32, 32, 115, 104, 97, 112, 101, 46, 109, 95, 104, 97, 115, 86, 101, 114, 116, 101, 120, 51, 32, 61, 32, 98, 111, 111, 108, 40, 37, 100, 41, 59, 10, 0 ], "i8", y);

F([ 32, 32, 32, 32, 98, 50, 80, 111, 108, 121, 103, 111, 110, 83, 104, 97, 112, 101, 32, 115, 104, 97, 112, 101, 59, 10, 0 ], "i8", y);

F([ 32, 32, 32, 32, 98, 50, 86, 101, 99, 50, 32, 118, 115, 91, 37, 100, 93, 59, 10, 0 ], "i8", y);

F([ 32, 32, 32, 32, 118, 115, 91, 37, 100, 93, 46, 83, 101, 116, 40, 37, 46, 49, 53, 108, 101, 102, 44, 32, 37, 46, 49, 53, 108, 101, 102, 41, 59, 10, 0 ], "i8", y);

F([ 32, 32, 32, 32, 115, 104, 97, 112, 101, 46, 83, 101, 116, 40, 118, 115, 44, 32, 37, 100, 41, 59, 10, 0 ], "i8", y);

F([ 32, 32, 32, 32, 98, 50, 67, 104, 97, 105, 110, 83, 104, 97, 112, 101, 32, 115, 104, 97, 112, 101, 59, 10, 0 ], "i8", y);

F([ 32, 32, 32, 32, 115, 104, 97, 112, 101, 46, 67, 114, 101, 97, 116, 101, 67, 104, 97, 105, 110, 40, 118, 115, 44, 32, 37, 100, 41, 59, 10, 0 ], "i8", y);

F([ 32, 32, 32, 32, 115, 104, 97, 112, 101, 46, 109, 95, 112, 114, 101, 118, 86, 101, 114, 116, 101, 120, 46, 83, 101, 116, 40, 37, 46, 49, 53, 108, 101, 102, 44, 32, 37, 46, 49, 53, 108, 101, 102, 41, 59, 10, 0 ], "i8", y);

F([ 32, 32, 32, 32, 115, 104, 97, 112, 101, 46, 109, 95, 110, 101, 120, 116, 86, 101, 114, 116, 101, 120, 46, 83, 101, 116, 40, 37, 46, 49, 53, 108, 101, 102, 44, 32, 37, 46, 49, 53, 108, 101, 102, 41, 59, 10, 0 ], "i8", y);

F([ 32, 32, 32, 32, 115, 104, 97, 112, 101, 46, 109, 95, 104, 97, 115, 80, 114, 101, 118, 86, 101, 114, 116, 101, 120, 32, 61, 32, 98, 111, 111, 108, 40, 37, 100, 41, 59, 10, 0 ], "i8", y);

F([ 32, 32, 32, 32, 115, 104, 97, 112, 101, 46, 109, 95, 104, 97, 115, 78, 101, 120, 116, 86, 101, 114, 116, 101, 120, 32, 61, 32, 98, 111, 111, 108, 40, 37, 100, 41, 59, 10, 0 ], "i8", y);

F([ 10, 0 ], "i8", y);

F([ 32, 32, 32, 32, 102, 100, 46, 115, 104, 97, 112, 101, 32, 61, 32, 38, 115, 104, 97, 112, 101, 59, 10, 0 ], "i8", y);

F([ 32, 32, 32, 32, 98, 111, 100, 105, 101, 115, 91, 37, 100, 93, 45, 62, 67, 114, 101, 97, 116, 101, 70, 105, 120, 116, 117, 114, 101, 40, 38, 102, 100, 41, 59, 10, 0 ], "i8", y);

Ki = F([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 98, 50, 73, 115, 108, 97, 110, 100, 46, 99, 112, 112, 0 ], "i8", y);

Li = F([ 118, 111, 105, 100, 32, 98, 50, 73, 115, 108, 97, 110, 100, 58, 58, 83, 111, 108, 118, 101, 84, 79, 73, 40, 99, 111, 110, 115, 116, 32, 98, 50, 84, 105, 109, 101, 83, 116, 101, 112, 32, 38, 44, 32, 105, 110, 116, 51, 50, 44, 32, 105, 110, 116, 51, 50, 41, 0 ], "i8", y);

Mi = F([ 116, 111, 105, 73, 110, 100, 101, 120, 65, 32, 60, 32, 109, 95, 98, 111, 100, 121, 67, 111, 117, 110, 116, 0 ], "i8", y);

Ni = F([ 116, 111, 105, 73, 110, 100, 101, 120, 66, 32, 60, 32, 109, 95, 98, 111, 100, 121, 67, 111, 117, 110, 116, 0 ], "i8", y);

Pi = F([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 98, 50, 87, 111, 114, 108, 100, 46, 99, 112, 112, 0 ], "i8", y);

Vi = F([ 98, 50, 66, 111, 100, 121, 32, 42, 98, 50, 87, 111, 114, 108, 100, 58, 58, 67, 114, 101, 97, 116, 101, 66, 111, 100, 121, 40, 99, 111, 110, 115, 116, 32, 98, 50, 66, 111, 100, 121, 68, 101, 102, 32, 42, 41, 0 ], "i8", y);

Wi = F([ 73, 115, 76, 111, 99, 107, 101, 100, 40, 41, 32, 61, 61, 32, 102, 97, 108, 115, 101, 0 ], "i8", y);

F([ 118, 111, 105, 100, 32, 98, 50, 87, 111, 114, 108, 100, 58, 58, 68, 101, 115, 116, 114, 111, 121, 66, 111, 100, 121, 40, 98, 50, 66, 111, 100, 121, 32, 42, 41, 0 ], "i8", y);

F([ 109, 95, 98, 111, 100, 121, 67, 111, 117, 110, 116, 32, 62, 32, 48, 0 ], "i8", y);

F([ 98, 50, 74, 111, 105, 110, 116, 32, 42, 98, 50, 87, 111, 114, 108, 100, 58, 58, 67, 114, 101, 97, 116, 101, 74, 111, 105, 110, 116, 40, 99, 111, 110, 115, 116, 32, 98, 50, 74, 111, 105, 110, 116, 68, 101, 102, 32, 42, 41, 0 ], "i8", y);

F([ 118, 111, 105, 100, 32, 98, 50, 87, 111, 114, 108, 100, 58, 58, 68, 101, 115, 116, 114, 111, 121, 74, 111, 105, 110, 116, 40, 98, 50, 74, 111, 105, 110, 116, 32, 42, 41, 0 ], "i8", y);

F([ 109, 95, 106, 111, 105, 110, 116, 67, 111, 117, 110, 116, 32, 62, 32, 48, 0 ], "i8", y);

gj = F([ 118, 111, 105, 100, 32, 98, 50, 87, 111, 114, 108, 100, 58, 58, 83, 111, 108, 118, 101, 40, 99, 111, 110, 115, 116, 32, 98, 50, 84, 105, 109, 101, 83, 116, 101, 112, 32, 38, 41, 0 ], "i8", y);

hj = F([ 98, 45, 62, 73, 115, 65, 99, 116, 105, 118, 101, 40, 41, 32, 61, 61, 32, 116, 114, 117, 101, 0 ], "i8", y);

ij = F([ 115, 116, 97, 99, 107, 67, 111, 117, 110, 116, 32, 60, 32, 115, 116, 97, 99, 107, 83, 105, 122, 101, 0 ], "i8", y);

mj = F([ 118, 111, 105, 100, 32, 98, 50, 87, 111, 114, 108, 100, 58, 58, 83, 111, 108, 118, 101, 84, 79, 73, 40, 99, 111, 110, 115, 116, 32, 98, 50, 84, 105, 109, 101, 83, 116, 101, 112, 32, 38, 41, 0 ], "i8", y);

nj = F([ 116, 121, 112, 101, 65, 32, 61, 61, 32, 98, 50, 95, 100, 121, 110, 97, 109, 105, 99, 66, 111, 100, 121, 32, 124, 124, 32, 116, 121, 112, 101, 66, 32, 61, 61, 32, 98, 50, 95, 100, 121, 110, 97, 109, 105, 99, 66, 111, 100, 121, 0 ], "i8", y);

qj = F([ 97, 108, 112, 104, 97, 48, 32, 60, 32, 49, 46, 48, 102, 0 ], "i8", y);

F([ 118, 111, 105, 100, 32, 98, 50, 87, 111, 114, 108, 100, 58, 58, 68, 114, 97, 119, 83, 104, 97, 112, 101, 40, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 67, 111, 108, 111, 114, 32, 38, 41, 0 ], "i8", y);

F([ 118, 101, 114, 116, 101, 120, 67, 111, 117, 110, 116, 32, 60, 61, 32, 56, 0 ], "i8", y);

F([ 98, 50, 86, 101, 99, 50, 32, 103, 40, 37, 46, 49, 53, 108, 101, 102, 44, 32, 37, 46, 49, 53, 108, 101, 102, 41, 59, 10, 0 ], "i8", y);

F([ 109, 95, 119, 111, 114, 108, 100, 45, 62, 83, 101, 116, 71, 114, 97, 118, 105, 116, 121, 40, 103, 41, 59, 10, 0 ], "i8", y);

F([ 98, 50, 66, 111, 100, 121, 42, 42, 32, 98, 111, 100, 105, 101, 115, 32, 61, 32, 40, 98, 50, 66, 111, 100, 121, 42, 42, 41, 98, 50, 65, 108, 108, 111, 99, 40, 37, 100, 32, 42, 32, 115, 105, 122, 101, 111, 102, 40, 98, 50, 66, 111, 100, 121, 42, 41, 41, 59, 10, 0 ], "i8", y);

F([ 98, 50, 74, 111, 105, 110, 116, 42, 42, 32, 106, 111, 105, 110, 116, 115, 32, 61, 32, 40, 98, 50, 74, 111, 105, 110, 116, 42, 42, 41, 98, 50, 65, 108, 108, 111, 99, 40, 37, 100, 32, 42, 32, 115, 105, 122, 101, 111, 102, 40, 98, 50, 74, 111, 105, 110, 116, 42, 41, 41, 59, 10, 0 ], "i8", y);

F([ 123, 10, 0 ], "i8", y);

F([ 125, 10, 0 ], "i8", y);

F([ 98, 50, 70, 114, 101, 101, 40, 106, 111, 105, 110, 116, 115, 41, 59, 10, 0 ], "i8", y);

F([ 98, 50, 70, 114, 101, 101, 40, 98, 111, 100, 105, 101, 115, 41, 59, 10, 0 ], "i8", y);

F([ 106, 111, 105, 110, 116, 115, 32, 61, 32, 78, 85, 76, 76, 59, 10, 0 ], "i8", y);

F([ 98, 111, 100, 105, 101, 115, 32, 61, 32, 78, 85, 76, 76, 59, 10, 0 ], "i8", y);

ei = F([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 108, 108, 105, 115, 105, 111, 110, 47, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 46, 104, 0 ], "i8", y);

F([ 118, 111, 105, 100, 32, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 82, 97, 121, 67, 97, 115, 116, 40, 98, 50, 87, 111, 114, 108, 100, 82, 97, 121, 67, 97, 115, 116, 87, 114, 97, 112, 112, 101, 114, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 82, 97, 121, 67, 97, 115, 116, 73, 110, 112, 117, 116, 32, 38, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", y);

F([ 114, 46, 76, 101, 110, 103, 116, 104, 83, 113, 117, 97, 114, 101, 100, 40, 41, 32, 62, 32, 48, 46, 48, 102, 0 ], "i8", y);

tj = F([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 109, 109, 111, 110, 47, 98, 50, 77, 97, 116, 104, 46, 104, 0 ], "i8", y);

uj = F([ 118, 111, 105, 100, 32, 98, 50, 83, 119, 101, 101, 112, 58, 58, 65, 100, 118, 97, 110, 99, 101, 40, 102, 108, 111, 97, 116, 51, 50, 41, 0 ], "i8", y);

Zi = F([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 98, 50, 73, 115, 108, 97, 110, 100, 46, 104, 0 ], "i8", y);

jj = F([ 118, 111, 105, 100, 32, 98, 50, 73, 115, 108, 97, 110, 100, 58, 58, 65, 100, 100, 40, 98, 50, 74, 111, 105, 110, 116, 32, 42, 41, 0 ], "i8", y);

kj = F([ 109, 95, 106, 111, 105, 110, 116, 67, 111, 117, 110, 116, 32, 60, 32, 109, 95, 106, 111, 105, 110, 116, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", y);

dj = F([ 118, 111, 105, 100, 32, 98, 50, 73, 115, 108, 97, 110, 100, 58, 58, 65, 100, 100, 40, 98, 50, 67, 111, 110, 116, 97, 99, 116, 32, 42, 41, 0 ], "i8", y);

ej = F([ 109, 95, 99, 111, 110, 116, 97, 99, 116, 67, 111, 117, 110, 116, 32, 60, 32, 109, 95, 99, 111, 110, 116, 97, 99, 116, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", y);

$i = F([ 118, 111, 105, 100, 32, 98, 50, 73, 115, 108, 97, 110, 100, 58, 58, 65, 100, 100, 40, 98, 50, 66, 111, 100, 121, 32, 42, 41, 0 ], "i8", y);

aj = F([ 109, 95, 98, 111, 100, 121, 67, 111, 117, 110, 116, 32, 60, 32, 109, 95, 98, 111, 100, 121, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", y);

On = F([ 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 120, 0, 0, 0, 122, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0 ], y);

F(1, "void*", y);

Sn = F([ 49, 53, 98, 50, 67, 111, 110, 116, 97, 99, 116, 70, 105, 108, 116, 101, 114, 0 ], "i8", y);

Tn = F(8, "i8*", y);

zj = F([ 0, 0, 0, 0, 0, 0, 0, 0, 124, 0, 0, 0, 126, 0, 0, 0, 128, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0 ], y);

F(1, "void*", y);

Aj = F([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 67, 111, 110, 116, 97, 99, 116, 115, 47, 98, 50, 67, 104, 97, 105, 110, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 46, 99, 112, 112, 0 ], "i8", y);

Bj = F([ 98, 50, 67, 104, 97, 105, 110, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 58, 58, 98, 50, 67, 104, 97, 105, 110, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 40, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 105, 110, 116, 51, 50, 44, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 105, 110, 116, 51, 50, 41, 0 ], "i8", y);

Un = F([ 50, 51, 98, 50, 67, 104, 97, 105, 110, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 0 ], "i8", y);

Vn = F([ 57, 98, 50, 67, 111, 110, 116, 97, 99, 116, 0 ], "i8", y);

Wn = F(8, "i8*", y);

Xn = F(12, "i8*", y);

Gj = F([ 0, 0, 0, 0, 0, 0, 0, 0, 130, 0, 0, 0, 132, 0, 0, 0, 134, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0 ], y);

F(1, "void*", y);

Hj = F([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 67, 111, 110, 116, 97, 99, 116, 115, 47, 98, 50, 67, 104, 97, 105, 110, 65, 110, 100, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 46, 99, 112, 112, 0 ], "i8", y);

Ij = F([ 98, 50, 67, 104, 97, 105, 110, 65, 110, 100, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 58, 58, 98, 50, 67, 104, 97, 105, 110, 65, 110, 100, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 40, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 105, 110, 116, 51, 50, 44, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 105, 110, 116, 51, 50, 41, 0 ], "i8", y);

Cj = F([ 109, 95, 102, 105, 120, 116, 117, 114, 101, 65, 45, 62, 71, 101, 116, 84, 121, 112, 101, 40, 41, 32, 61, 61, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 101, 95, 99, 104, 97, 105, 110, 0 ], "i8", y);

Yn = F([ 50, 52, 98, 50, 67, 104, 97, 105, 110, 65, 110, 100, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 0 ], "i8", y);

Zn = F(12, "i8*", y);

Mj = F([ 0, 0, 0, 0, 0, 0, 0, 0, 136, 0, 0, 0, 138, 0, 0, 0, 140, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0 ], y);

F(1, "void*", y);

Nj = F([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 67, 111, 110, 116, 97, 99, 116, 115, 47, 98, 50, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 46, 99, 112, 112, 0 ], "i8", y);

Oj = F([ 98, 50, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 58, 58, 98, 50, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 40, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 41, 0 ], "i8", y);

Pj = F([ 109, 95, 102, 105, 120, 116, 117, 114, 101, 65, 45, 62, 71, 101, 116, 84, 121, 112, 101, 40, 41, 32, 61, 61, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 101, 95, 99, 105, 114, 99, 108, 101, 0 ], "i8", y);

$n = F([ 49, 53, 98, 50, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 0 ], "i8", y);

ao = F(12, "i8*", y);

Vj = F(192, [ "%class.b2Contact.289* (%class.b2Fixture.281*, i32, %class.b2Fixture.281*, i32, %class.b2BlockAllocator.74*)*", 0, 0, 0, "void (%class.b2Contact.289*, %class.b2BlockAllocator.74*)*", 0, 0, 0, "i8", 0, 0, 0, "%class.b2Contact.289* (%class.b2Fixture.281*, i32, %class.b2Fixture.281*, i32, %class.b2BlockAllocator.74*)*", 0, 0, 0, "void (%class.b2Contact.289*, %class.b2BlockAllocator.74*)*", 0, 0, 0, "i8", 0, 0, 0, "%class.b2Contact.289* (%class.b2Fixture.281*, i32, %class.b2Fixture.281*, i32, %class.b2BlockAllocator.74*)*", 0, 0, 0, "void (%class.b2Contact.289*, %class.b2BlockAllocator.74*)*", 0, 0, 0, "i8", 0, 0, 0, "%class.b2Contact.289* (%class.b2Fixture.281*, i32, %class.b2Fixture.281*, i32, %class.b2BlockAllocator.74*)*", 0, 0, 0, "void (%class.b2Contact.289*, %class.b2BlockAllocator.74*)*", 0, 0, 0, "i8", 0, 0, 0, "%class.b2Contact.289* (%class.b2Fixture.281*, i32, %class.b2Fixture.281*, i32, %class.b2BlockAllocator.74*)*", 0, 0, 0, "void (%class.b2Contact.289*, %class.b2BlockAllocator.74*)*", 0, 0, 0, "i8", 0, 0, 0, "%class.b2Contact.289* (%class.b2Fixture.281*, i32, %class.b2Fixture.281*, i32, %class.b2BlockAllocator.74*)*", 0, 0, 0, "void (%class.b2Contact.289*, %class.b2BlockAllocator.74*)*", 0, 0, 0, "i8", 0, 0, 0, "%class.b2Contact.289* (%class.b2Fixture.281*, i32, %class.b2Fixture.281*, i32, %class.b2BlockAllocator.74*)*", 0, 0, 0, "void (%class.b2Contact.289*, %class.b2BlockAllocator.74*)*", 0, 0, 0, "i8", 0, 0, 0, "%class.b2Contact.289* (%class.b2Fixture.281*, i32, %class.b2Fixture.281*, i32, %class.b2BlockAllocator.74*)*", 0, 0, 0, "void (%class.b2Contact.289*, %class.b2BlockAllocator.74*)*", 0, 0, 0, "i8", 0, 0, 0, "%class.b2Contact.289* (%class.b2Fixture.281*, i32, %class.b2Fixture.281*, i32, %class.b2BlockAllocator.74*)*", 0, 0, 0, "void (%class.b2Contact.289*, %class.b2BlockAllocator.74*)*", 0, 0, 0, "i8", 0, 0, 0, "%class.b2Contact.289* (%class.b2Fixture.281*, i32, %class.b2Fixture.281*, i32, %class.b2BlockAllocator.74*)*", 0, 0, 0, "void (%class.b2Contact.289*, %class.b2BlockAllocator.74*)*", 0, 0, 0, "i8", 0, 0, 0, "%class.b2Contact.289* (%class.b2Fixture.281*, i32, %class.b2Fixture.281*, i32, %class.b2BlockAllocator.74*)*", 0, 0, 0, "void (%class.b2Contact.289*, %class.b2BlockAllocator.74*)*", 0, 0, 0, "i8", 0, 0, 0, "%class.b2Contact.289* (%class.b2Fixture.281*, i32, %class.b2Fixture.281*, i32, %class.b2BlockAllocator.74*)*", 0, 0, 0, "void (%class.b2Contact.289*, %class.b2BlockAllocator.74*)*", 0, 0, 0, "i8", 0, 0, 0, "%class.b2Contact.289* (%class.b2Fixture.281*, i32, %class.b2Fixture.281*, i32, %class.b2BlockAllocator.74*)*", 0, 0, 0, "void (%class.b2Contact.289*, %class.b2BlockAllocator.74*)*", 0, 0, 0, "i8", 0, 0, 0, "%class.b2Contact.289* (%class.b2Fixture.281*, i32, %class.b2Fixture.281*, i32, %class.b2BlockAllocator.74*)*", 0, 0, 0, "void (%class.b2Contact.289*, %class.b2BlockAllocator.74*)*", 0, 0, 0, "i8", 0, 0, 0, "%class.b2Contact.289* (%class.b2Fixture.281*, i32, %class.b2Fixture.281*, i32, %class.b2BlockAllocator.74*)*", 0, 0, 0, "void (%class.b2Contact.289*, %class.b2BlockAllocator.74*)*", 0, 0, 0, "i8", 0, 0, 0, "%class.b2Contact.289* (%class.b2Fixture.281*, i32, %class.b2Fixture.281*, i32, %class.b2BlockAllocator.74*)*", 0, 0, 0, "void (%class.b2Contact.289*, %class.b2BlockAllocator.74*)*", 0, 0, 0, "i8", 0, 0, 0 ], y);

Wj = F(1, "i8", y);

Rj = F([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 67, 111, 110, 116, 97, 99, 116, 115, 47, 98, 50, 67, 111, 110, 116, 97, 99, 116, 46, 99, 112, 112, 0 ], "i8", y);

Sj = F([ 115, 116, 97, 116, 105, 99, 32, 118, 111, 105, 100, 32, 98, 50, 67, 111, 110, 116, 97, 99, 116, 58, 58, 65, 100, 100, 84, 121, 112, 101, 40, 98, 50, 67, 111, 110, 116, 97, 99, 116, 67, 114, 101, 97, 116, 101, 70, 99, 110, 32, 42, 44, 32, 98, 50, 67, 111, 110, 116, 97, 99, 116, 68, 101, 115, 116, 114, 111, 121, 70, 99, 110, 32, 42, 44, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 84, 121, 112, 101, 44, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 84, 121, 112, 101, 41, 0 ], "i8", y);

Tj = F([ 48, 32, 60, 61, 32, 116, 121, 112, 101, 49, 32, 38, 38, 32, 116, 121, 112, 101, 49, 32, 60, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 101, 95, 116, 121, 112, 101, 67, 111, 117, 110, 116, 0 ], "i8", y);

Uj = F([ 48, 32, 60, 61, 32, 116, 121, 112, 101, 50, 32, 38, 38, 32, 116, 121, 112, 101, 50, 32, 60, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 101, 95, 116, 121, 112, 101, 67, 111, 117, 110, 116, 0 ], "i8", y);

Xj = F([ 115, 116, 97, 116, 105, 99, 32, 98, 50, 67, 111, 110, 116, 97, 99, 116, 32, 42, 98, 50, 67, 111, 110, 116, 97, 99, 116, 58, 58, 67, 114, 101, 97, 116, 101, 40, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 105, 110, 116, 51, 50, 44, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 105, 110, 116, 51, 50, 44, 32, 98, 50, 66, 108, 111, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 32, 42, 41, 0 ], "i8", y);

Yj = F([ 115, 116, 97, 116, 105, 99, 32, 118, 111, 105, 100, 32, 98, 50, 67, 111, 110, 116, 97, 99, 116, 58, 58, 68, 101, 115, 116, 114, 111, 121, 40, 98, 50, 67, 111, 110, 116, 97, 99, 116, 32, 42, 44, 32, 98, 50, 66, 108, 111, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 32, 42, 41, 0 ], "i8", y);

Zj = F([ 115, 95, 105, 110, 105, 116, 105, 97, 108, 105, 122, 101, 100, 32, 61, 61, 32, 116, 114, 117, 101, 0 ], "i8", y);

$j = F([ 48, 32, 60, 61, 32, 116, 121, 112, 101, 65, 32, 38, 38, 32, 116, 121, 112, 101, 66, 32, 60, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 101, 95, 116, 121, 112, 101, 67, 111, 117, 110, 116, 0 ], "i8", y);

ak = F([ 0, 0, 0, 0, 0, 0, 0, 0, 40, 0, 0, 0, 142, 0, 0, 0, 144, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0 ], y);

F(1, "void*", y);

ck = F([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 67, 111, 110, 116, 97, 99, 116, 115, 47, 98, 50, 67, 111, 110, 116, 97, 99, 116, 83, 111, 108, 118, 101, 114, 46, 99, 112, 112, 0 ], "i8", y);

dk = F([ 98, 50, 67, 111, 110, 116, 97, 99, 116, 83, 111, 108, 118, 101, 114, 58, 58, 98, 50, 67, 111, 110, 116, 97, 99, 116, 83, 111, 108, 118, 101, 114, 40, 98, 50, 67, 111, 110, 116, 97, 99, 116, 83, 111, 108, 118, 101, 114, 68, 101, 102, 32, 42, 41, 0 ], "i8", y);

ek = F([ 112, 111, 105, 110, 116, 67, 111, 117, 110, 116, 32, 62, 32, 48, 0 ], "i8", y);

fk = F([ 118, 111, 105, 100, 32, 98, 50, 67, 111, 110, 116, 97, 99, 116, 83, 111, 108, 118, 101, 114, 58, 58, 73, 110, 105, 116, 105, 97, 108, 105, 122, 101, 86, 101, 108, 111, 99, 105, 116, 121, 67, 111, 110, 115, 116, 114, 97, 105, 110, 116, 115, 40, 41, 0 ], "i8", y);

gk = F([ 109, 97, 110, 105, 102, 111, 108, 100, 45, 62, 112, 111, 105, 110, 116, 67, 111, 117, 110, 116, 32, 62, 32, 48, 0 ], "i8", y);

jk = F([ 118, 111, 105, 100, 32, 98, 50, 67, 111, 110, 116, 97, 99, 116, 83, 111, 108, 118, 101, 114, 58, 58, 83, 111, 108, 118, 101, 86, 101, 108, 111, 99, 105, 116, 121, 67, 111, 110, 115, 116, 114, 97, 105, 110, 116, 115, 40, 41, 0 ], "i8", y);

kk = F([ 112, 111, 105, 110, 116, 67, 111, 117, 110, 116, 32, 61, 61, 32, 49, 32, 124, 124, 32, 112, 111, 105, 110, 116, 67, 111, 117, 110, 116, 32, 61, 61, 32, 50, 0 ], "i8", y);

lk = F([ 97, 46, 120, 32, 62, 61, 32, 48, 46, 48, 102, 32, 38, 38, 32, 97, 46, 121, 32, 62, 61, 32, 48, 46, 48, 102, 0 ], "i8", y);

nk = F([ 118, 111, 105, 100, 32, 98, 50, 80, 111, 115, 105, 116, 105, 111, 110, 83, 111, 108, 118, 101, 114, 77, 97, 110, 105, 102, 111, 108, 100, 58, 58, 73, 110, 105, 116, 105, 97, 108, 105, 122, 101, 40, 98, 50, 67, 111, 110, 116, 97, 99, 116, 80, 111, 115, 105, 116, 105, 111, 110, 67, 111, 110, 115, 116, 114, 97, 105, 110, 116, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 44, 32, 105, 110, 116, 51, 50, 41, 0 ], "i8", y);

ok = F([ 112, 99, 45, 62, 112, 111, 105, 110, 116, 67, 111, 117, 110, 116, 32, 62, 32, 48, 0 ], "i8", y);

qk = F([ 0, 0, 0, 0, 0, 0, 0, 0, 146, 0, 0, 0, 148, 0, 0, 0, 150, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0 ], y);

F(1, "void*", y);

rk = F([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 67, 111, 110, 116, 97, 99, 116, 115, 47, 98, 50, 69, 100, 103, 101, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 46, 99, 112, 112, 0 ], "i8", y);

sk = F([ 98, 50, 69, 100, 103, 101, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 58, 58, 98, 50, 69, 100, 103, 101, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 40, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 41, 0 ], "i8", y);

bo = F([ 50, 50, 98, 50, 69, 100, 103, 101, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 0 ], "i8", y);

co = F(12, "i8*", y);

yk = F([ 0, 0, 0, 0, 0, 0, 0, 0, 152, 0, 0, 0, 154, 0, 0, 0, 156, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0 ], y);

F(1, "void*", y);

zk = F([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 67, 111, 110, 116, 97, 99, 116, 115, 47, 98, 50, 69, 100, 103, 101, 65, 110, 100, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 46, 99, 112, 112, 0 ], "i8", y);

Ak = F([ 98, 50, 69, 100, 103, 101, 65, 110, 100, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 58, 58, 98, 50, 69, 100, 103, 101, 65, 110, 100, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 40, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 41, 0 ], "i8", y);

tk = F([ 109, 95, 102, 105, 120, 116, 117, 114, 101, 65, 45, 62, 71, 101, 116, 84, 121, 112, 101, 40, 41, 32, 61, 61, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 101, 95, 101, 100, 103, 101, 0 ], "i8", y);

eo = F([ 50, 51, 98, 50, 69, 100, 103, 101, 65, 110, 100, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 0 ], "i8", y);

fo = F(12, "i8*", y);

Ck = F([ 0, 0, 0, 0, 0, 0, 0, 0, 158, 0, 0, 0, 160, 0, 0, 0, 162, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0 ], y);

F(1, "void*", y);

Dk = F([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 67, 111, 110, 116, 97, 99, 116, 115, 47, 98, 50, 80, 111, 108, 121, 103, 111, 110, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 46, 99, 112, 112, 0 ], "i8", y);

Ek = F([ 98, 50, 80, 111, 108, 121, 103, 111, 110, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 58, 58, 98, 50, 80, 111, 108, 121, 103, 111, 110, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 40, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 41, 0 ], "i8", y);

Dj = F([ 109, 95, 102, 105, 120, 116, 117, 114, 101, 66, 45, 62, 71, 101, 116, 84, 121, 112, 101, 40, 41, 32, 61, 61, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 101, 95, 99, 105, 114, 99, 108, 101, 0 ], "i8", y);

go = F([ 50, 53, 98, 50, 80, 111, 108, 121, 103, 111, 110, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 0 ], "i8", y);

ho = F(12, "i8*", y);

Hk = F([ 0, 0, 0, 0, 0, 0, 0, 0, 164, 0, 0, 0, 166, 0, 0, 0, 168, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0 ], y);

F(1, "void*", y);

Ik = F([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 67, 111, 110, 116, 97, 99, 116, 115, 47, 98, 50, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 46, 99, 112, 112, 0 ], "i8", y);

Jk = F([ 98, 50, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 58, 58, 98, 50, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 40, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 41, 0 ], "i8", y);

Fk = F([ 109, 95, 102, 105, 120, 116, 117, 114, 101, 65, 45, 62, 71, 101, 116, 84, 121, 112, 101, 40, 41, 32, 61, 61, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 101, 95, 112, 111, 108, 121, 103, 111, 110, 0 ], "i8", y);

Jj = F([ 109, 95, 102, 105, 120, 116, 117, 114, 101, 66, 45, 62, 71, 101, 116, 84, 121, 112, 101, 40, 41, 32, 61, 61, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 101, 95, 112, 111, 108, 121, 103, 111, 110, 0 ], "i8", y);

io = F([ 49, 54, 98, 50, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 0 ], "i8", y);

jo = F(12, "i8*", y);

wk = F([ 0, 0, 0, 0, 0, 0, 0, 0, 170, 0, 0, 0, 172, 0, 0, 0, 174, 0, 0, 0, 176, 0, 0, 0, 178, 0, 0, 0, 180, 0, 0, 0, 182, 0, 0, 0, 184, 0, 0, 0, 186, 0, 0, 0, 188, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0 ], y);

F(1, "void*", y);

Mk = F([ 32, 32, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 74, 111, 105, 110, 116, 68, 101, 102, 32, 106, 100, 59, 10, 0 ], "i8", y);

Sk = F([ 32, 32, 106, 100, 46, 108, 101, 110, 103, 116, 104, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0 ], "i8", y);

ko = F([ 49, 53, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 74, 111, 105, 110, 116, 0 ], "i8", y);

lo = F([ 55, 98, 50, 74, 111, 105, 110, 116, 0 ], "i8", y);

mo = F(8, "i8*", y);

no = F(12, "i8*", y);

al = F([ 0, 0, 0, 0, 0, 0, 0, 0, 190, 0, 0, 0, 192, 0, 0, 0, 194, 0, 0, 0, 196, 0, 0, 0, 198, 0, 0, 0, 200, 0, 0, 0, 202, 0, 0, 0, 204, 0, 0, 0, 206, 0, 0, 0, 208, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0 ], y);

F(1, "void*", y);

F([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 74, 111, 105, 110, 116, 115, 47, 98, 50, 70, 114, 105, 99, 116, 105, 111, 110, 74, 111, 105, 110, 116, 46, 99, 112, 112, 0 ], "i8", y);

F([ 118, 111, 105, 100, 32, 98, 50, 70, 114, 105, 99, 116, 105, 111, 110, 74, 111, 105, 110, 116, 58, 58, 83, 101, 116, 77, 97, 120, 70, 111, 114, 99, 101, 40, 102, 108, 111, 97, 116, 51, 50, 41, 0 ], "i8", y);

F([ 98, 50, 73, 115, 86, 97, 108, 105, 100, 40, 102, 111, 114, 99, 101, 41, 32, 38, 38, 32, 102, 111, 114, 99, 101, 32, 62, 61, 32, 48, 46, 48, 102, 0 ], "i8", y);

F([ 118, 111, 105, 100, 32, 98, 50, 70, 114, 105, 99, 116, 105, 111, 110, 74, 111, 105, 110, 116, 58, 58, 83, 101, 116, 77, 97, 120, 84, 111, 114, 113, 117, 101, 40, 102, 108, 111, 97, 116, 51, 50, 41, 0 ], "i8", y);

F([ 98, 50, 73, 115, 86, 97, 108, 105, 100, 40, 116, 111, 114, 113, 117, 101, 41, 32, 38, 38, 32, 116, 111, 114, 113, 117, 101, 32, 62, 61, 32, 48, 46, 48, 102, 0 ], "i8", y);

cl = F([ 32, 32, 98, 50, 70, 114, 105, 99, 116, 105, 111, 110, 74, 111, 105, 110, 116, 68, 101, 102, 32, 106, 100, 59, 10, 0 ], "i8", y);

dl = F([ 32, 32, 106, 100, 46, 109, 97, 120, 70, 111, 114, 99, 101, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0 ], "i8", y);

el = F([ 32, 32, 106, 100, 46, 109, 97, 120, 84, 111, 114, 113, 117, 101, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0 ], "i8", y);

oo = F([ 49, 53, 98, 50, 70, 114, 105, 99, 116, 105, 111, 110, 74, 111, 105, 110, 116, 0 ], "i8", y);

po = F(12, "i8*", y);

il = F([ 0, 0, 0, 0, 0, 0, 0, 0, 210, 0, 0, 0, 212, 0, 0, 0, 214, 0, 0, 0, 216, 0, 0, 0, 218, 0, 0, 0, 220, 0, 0, 0, 222, 0, 0, 0, 224, 0, 0, 0, 226, 0, 0, 0, 228, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0 ], y);

F(1, "void*", y);

jl = F([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 74, 111, 105, 110, 116, 115, 47, 98, 50, 71, 101, 97, 114, 74, 111, 105, 110, 116, 46, 99, 112, 112, 0 ], "i8", y);

kl = F([ 98, 50, 71, 101, 97, 114, 74, 111, 105, 110, 116, 58, 58, 98, 50, 71, 101, 97, 114, 74, 111, 105, 110, 116, 40, 99, 111, 110, 115, 116, 32, 98, 50, 71, 101, 97, 114, 74, 111, 105, 110, 116, 68, 101, 102, 32, 42, 41, 0 ], "i8", y);

ll = F([ 109, 95, 116, 121, 112, 101, 65, 32, 61, 61, 32, 101, 95, 114, 101, 118, 111, 108, 117, 116, 101, 74, 111, 105, 110, 116, 32, 124, 124, 32, 109, 95, 116, 121, 112, 101, 65, 32, 61, 61, 32, 101, 95, 112, 114, 105, 115, 109, 97, 116, 105, 99, 74, 111, 105, 110, 116, 0 ], "i8", y);

ml = F([ 109, 95, 116, 121, 112, 101, 66, 32, 61, 61, 32, 101, 95, 114, 101, 118, 111, 108, 117, 116, 101, 74, 111, 105, 110, 116, 32, 124, 124, 32, 109, 95, 116, 121, 112, 101, 66, 32, 61, 61, 32, 101, 95, 112, 114, 105, 115, 109, 97, 116, 105, 99, 74, 111, 105, 110, 116, 0 ], "i8", y);

F([ 118, 111, 105, 100, 32, 98, 50, 71, 101, 97, 114, 74, 111, 105, 110, 116, 58, 58, 83, 101, 116, 82, 97, 116, 105, 111, 40, 102, 108, 111, 97, 116, 51, 50, 41, 0 ], "i8", y);

F([ 98, 50, 73, 115, 86, 97, 108, 105, 100, 40, 114, 97, 116, 105, 111, 41, 0 ], "i8", y);

ql = F([ 32, 32, 98, 50, 71, 101, 97, 114, 74, 111, 105, 110, 116, 68, 101, 102, 32, 106, 100, 59, 10, 0 ], "i8", y);

rl = F([ 32, 32, 106, 100, 46, 106, 111, 105, 110, 116, 49, 32, 61, 32, 106, 111, 105, 110, 116, 115, 91, 37, 100, 93, 59, 10, 0 ], "i8", y);

sl = F([ 32, 32, 106, 100, 46, 106, 111, 105, 110, 116, 50, 32, 61, 32, 106, 111, 105, 110, 116, 115, 91, 37, 100, 93, 59, 10, 0 ], "i8", y);

qo = F([ 49, 49, 98, 50, 71, 101, 97, 114, 74, 111, 105, 110, 116, 0 ], "i8", y);

ro = F(12, "i8*", y);

wl = F([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 74, 111, 105, 110, 116, 115, 47, 98, 50, 74, 111, 105, 110, 116, 46, 99, 112, 112, 0 ], "i8", y);

F([ 115, 116, 97, 116, 105, 99, 32, 98, 50, 74, 111, 105, 110, 116, 32, 42, 98, 50, 74, 111, 105, 110, 116, 58, 58, 67, 114, 101, 97, 116, 101, 40, 99, 111, 110, 115, 116, 32, 98, 50, 74, 111, 105, 110, 116, 68, 101, 102, 32, 42, 44, 32, 98, 50, 66, 108, 111, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 32, 42, 41, 0 ], "i8", y);

ud = F([ 102, 97, 108, 115, 101, 0 ], "i8", y);

F([ 115, 116, 97, 116, 105, 99, 32, 118, 111, 105, 100, 32, 98, 50, 74, 111, 105, 110, 116, 58, 58, 68, 101, 115, 116, 114, 111, 121, 40, 98, 50, 74, 111, 105, 110, 116, 32, 42, 44, 32, 98, 50, 66, 108, 111, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 32, 42, 41, 0 ], "i8", y);

vl = F([ 0, 0, 0, 0, 0, 0, 0, 0, 40, 0, 0, 0, 40, 0, 0, 0, 40, 0, 0, 0, 40, 0, 0, 0, 230, 0, 0, 0, 232, 0, 0, 0, 234, 0, 0, 0, 40, 0, 0, 0, 40, 0, 0, 0, 40, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0 ], y);

F(1, "void*", y);

xl = F([ 98, 50, 74, 111, 105, 110, 116, 58, 58, 98, 50, 74, 111, 105, 110, 116, 40, 99, 111, 110, 115, 116, 32, 98, 50, 74, 111, 105, 110, 116, 68, 101, 102, 32, 42, 41, 0 ], "i8", y);

yl = F([ 100, 101, 102, 45, 62, 98, 111, 100, 121, 65, 32, 33, 61, 32, 100, 101, 102, 45, 62, 98, 111, 100, 121, 66, 0 ], "i8", y);

so = F([ 47, 47, 32, 68, 117, 109, 112, 32, 105, 115, 32, 110, 111, 116, 32, 115, 117, 112, 112, 111, 114, 116, 101, 100, 32, 102, 111, 114, 32, 116, 104, 105, 115, 32, 106, 111, 105, 110, 116, 32, 116, 121, 112, 101, 46, 10, 0 ], "i8", y);

Al = F([ 0, 0, 0, 0, 0, 0, 0, 0, 236, 0, 0, 0, 238, 0, 0, 0, 240, 0, 0, 0, 242, 0, 0, 0, 244, 0, 0, 0, 246, 0, 0, 0, 248, 0, 0, 0, 250, 0, 0, 0, 252, 0, 0, 0, 254, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0 ], y);

F(1, "void*", y);

Bl = F([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 74, 111, 105, 110, 116, 115, 47, 98, 50, 77, 111, 117, 115, 101, 74, 111, 105, 110, 116, 46, 99, 112, 112, 0 ], "i8", y);

Cl = F([ 98, 50, 77, 111, 117, 115, 101, 74, 111, 105, 110, 116, 58, 58, 98, 50, 77, 111, 117, 115, 101, 74, 111, 105, 110, 116, 40, 99, 111, 110, 115, 116, 32, 98, 50, 77, 111, 117, 115, 101, 74, 111, 105, 110, 116, 68, 101, 102, 32, 42, 41, 0 ], "i8", y);

Dl = F([ 100, 101, 102, 45, 62, 116, 97, 114, 103, 101, 116, 46, 73, 115, 86, 97, 108, 105, 100, 40, 41, 0 ], "i8", y);

El = F([ 98, 50, 73, 115, 86, 97, 108, 105, 100, 40, 100, 101, 102, 45, 62, 109, 97, 120, 70, 111, 114, 99, 101, 41, 32, 38, 38, 32, 100, 101, 102, 45, 62, 109, 97, 120, 70, 111, 114, 99, 101, 32, 62, 61, 32, 48, 46, 48, 102, 0 ], "i8", y);

Fl = F([ 98, 50, 73, 115, 86, 97, 108, 105, 100, 40, 100, 101, 102, 45, 62, 102, 114, 101, 113, 117, 101, 110, 99, 121, 72, 122, 41, 32, 38, 38, 32, 100, 101, 102, 45, 62, 102, 114, 101, 113, 117, 101, 110, 99, 121, 72, 122, 32, 62, 61, 32, 48, 46, 48, 102, 0 ], "i8", y);

Gl = F([ 98, 50, 73, 115, 86, 97, 108, 105, 100, 40, 100, 101, 102, 45, 62, 100, 97, 109, 112, 105, 110, 103, 82, 97, 116, 105, 111, 41, 32, 38, 38, 32, 100, 101, 102, 45, 62, 100, 97, 109, 112, 105, 110, 103, 82, 97, 116, 105, 111, 32, 62, 61, 32, 48, 46, 48, 102, 0 ], "i8", y);

Il = F([ 118, 105, 114, 116, 117, 97, 108, 32, 118, 111, 105, 100, 32, 98, 50, 77, 111, 117, 115, 101, 74, 111, 105, 110, 116, 58, 58, 73, 110, 105, 116, 86, 101, 108, 111, 99, 105, 116, 121, 67, 111, 110, 115, 116, 114, 97, 105, 110, 116, 115, 40, 99, 111, 110, 115, 116, 32, 98, 50, 83, 111, 108, 118, 101, 114, 68, 97, 116, 97, 32, 38, 41, 0 ], "i8", y);

Jl = F([ 100, 32, 43, 32, 104, 32, 42, 32, 107, 32, 62, 32, 49, 46, 49, 57, 50, 48, 57, 50, 57, 48, 69, 45, 48, 55, 70, 0 ], "i8", y);

to = F([ 49, 50, 98, 50, 77, 111, 117, 115, 101, 74, 111, 105, 110, 116, 0 ], "i8", y);

uo = F(12, "i8*", y);

vo = F([ 77, 111, 117, 115, 101, 32, 106, 111, 105, 110, 116, 32, 100, 117, 109, 112, 105, 110, 103, 32, 105, 115, 32, 110, 111, 116, 32, 115, 117, 112, 112, 111, 114, 116, 101, 100, 46, 10, 0 ], "i8", y);

Pl = F([ 0, 0, 0, 0, 0, 0, 0, 0, 256, 0, 0, 0, 258, 0, 0, 0, 260, 0, 0, 0, 262, 0, 0, 0, 264, 0, 0, 0, 266, 0, 0, 0, 268, 0, 0, 0, 270, 0, 0, 0, 272, 0, 0, 0, 274, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0 ], y);

F(1, "void*", y);

F([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 74, 111, 105, 110, 116, 115, 47, 98, 50, 80, 114, 105, 115, 109, 97, 116, 105, 99, 74, 111, 105, 110, 116, 46, 99, 112, 112, 0 ], "i8", y);

F([ 118, 111, 105, 100, 32, 98, 50, 80, 114, 105, 115, 109, 97, 116, 105, 99, 74, 111, 105, 110, 116, 58, 58, 83, 101, 116, 76, 105, 109, 105, 116, 115, 40, 102, 108, 111, 97, 116, 51, 50, 44, 32, 102, 108, 111, 97, 116, 51, 50, 41, 0 ], "i8", y);

Yl = F([ 32, 32, 98, 50, 80, 114, 105, 115, 109, 97, 116, 105, 99, 74, 111, 105, 110, 116, 68, 101, 102, 32, 106, 100, 59, 10, 0 ], "i8", y);

bm = F([ 32, 32, 106, 100, 46, 108, 111, 119, 101, 114, 84, 114, 97, 110, 115, 108, 97, 116, 105, 111, 110, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0 ], "i8", y);

cm = F([ 32, 32, 106, 100, 46, 117, 112, 112, 101, 114, 84, 114, 97, 110, 115, 108, 97, 116, 105, 111, 110, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0 ], "i8", y);

fm = F([ 32, 32, 106, 100, 46, 109, 97, 120, 77, 111, 116, 111, 114, 70, 111, 114, 99, 101, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0 ], "i8", y);

wo = F([ 49, 54, 98, 50, 80, 114, 105, 115, 109, 97, 116, 105, 99, 74, 111, 105, 110, 116, 0 ], "i8", y);

xo = F(12, "i8*", y);

im = F([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 74, 111, 105, 110, 116, 115, 47, 98, 50, 80, 117, 108, 108, 101, 121, 74, 111, 105, 110, 116, 46, 99, 112, 112, 0 ], "i8", y);

F([ 118, 111, 105, 100, 32, 98, 50, 80, 117, 108, 108, 101, 121, 74, 111, 105, 110, 116, 68, 101, 102, 58, 58, 73, 110, 105, 116, 105, 97, 108, 105, 122, 101, 40, 98, 50, 66, 111, 100, 121, 32, 42, 44, 32, 98, 50, 66, 111, 100, 121, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 86, 101, 99, 50, 32, 38, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 86, 101, 99, 50, 32, 38, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 86, 101, 99, 50, 32, 38, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 86, 101, 99, 50, 32, 38, 44, 32, 102, 108, 111, 97, 116, 51, 50, 41, 0 ], "i8", y);

F([ 114, 97, 116, 105, 111, 32, 62, 32, 49, 46, 49, 57, 50, 48, 57, 50, 57, 48, 69, 45, 48, 55, 70, 0 ], "i8", y);

hm = F([ 0, 0, 0, 0, 0, 0, 0, 0, 276, 0, 0, 0, 278, 0, 0, 0, 280, 0, 0, 0, 282, 0, 0, 0, 284, 0, 0, 0, 286, 0, 0, 0, 288, 0, 0, 0, 290, 0, 0, 0, 292, 0, 0, 0, 294, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0 ], y);

F(1, "void*", y);

jm = F([ 98, 50, 80, 117, 108, 108, 101, 121, 74, 111, 105, 110, 116, 58, 58, 98, 50, 80, 117, 108, 108, 101, 121, 74, 111, 105, 110, 116, 40, 99, 111, 110, 115, 116, 32, 98, 50, 80, 117, 108, 108, 101, 121, 74, 111, 105, 110, 116, 68, 101, 102, 32, 42, 41, 0 ], "i8", y);

km = F([ 100, 101, 102, 45, 62, 114, 97, 116, 105, 111, 32, 33, 61, 32, 48, 46, 48, 102, 0 ], "i8", y);

om = F([ 32, 32, 98, 50, 80, 117, 108, 108, 101, 121, 74, 111, 105, 110, 116, 68, 101, 102, 32, 106, 100, 59, 10, 0 ], "i8", y);

pm = F([ 32, 32, 106, 100, 46, 103, 114, 111, 117, 110, 100, 65, 110, 99, 104, 111, 114, 65, 46, 83, 101, 116, 40, 37, 46, 49, 53, 108, 101, 102, 44, 32, 37, 46, 49, 53, 108, 101, 102, 41, 59, 10, 0 ], "i8", y);

qm = F([ 32, 32, 106, 100, 46, 103, 114, 111, 117, 110, 100, 65, 110, 99, 104, 111, 114, 66, 46, 83, 101, 116, 40, 37, 46, 49, 53, 108, 101, 102, 44, 32, 37, 46, 49, 53, 108, 101, 102, 41, 59, 10, 0 ], "i8", y);

rm = F([ 32, 32, 106, 100, 46, 108, 101, 110, 103, 116, 104, 65, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0 ], "i8", y);

sm = F([ 32, 32, 106, 100, 46, 108, 101, 110, 103, 116, 104, 66, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0 ], "i8", y);

tl = F([ 32, 32, 106, 100, 46, 114, 97, 116, 105, 111, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0 ], "i8", y);

yo = F([ 49, 51, 98, 50, 80, 117, 108, 108, 101, 121, 74, 111, 105, 110, 116, 0 ], "i8", y);

zo = F(12, "i8*", y);

um = F([ 0, 0, 0, 0, 0, 0, 0, 0, 296, 0, 0, 0, 298, 0, 0, 0, 300, 0, 0, 0, 302, 0, 0, 0, 304, 0, 0, 0, 306, 0, 0, 0, 308, 0, 0, 0, 310, 0, 0, 0, 312, 0, 0, 0, 314, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0 ], y);

F(1, "void*", y);

F([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 74, 111, 105, 110, 116, 115, 47, 98, 50, 82, 101, 118, 111, 108, 117, 116, 101, 74, 111, 105, 110, 116, 46, 99, 112, 112, 0 ], "i8", y);

F([ 118, 111, 105, 100, 32, 98, 50, 82, 101, 118, 111, 108, 117, 116, 101, 74, 111, 105, 110, 116, 58, 58, 83, 101, 116, 76, 105, 109, 105, 116, 115, 40, 102, 108, 111, 97, 116, 51, 50, 44, 32, 102, 108, 111, 97, 116, 51, 50, 41, 0 ], "i8", y);

F([ 108, 111, 119, 101, 114, 32, 60, 61, 32, 117, 112, 112, 101, 114, 0 ], "i8", y);

Am = F([ 32, 32, 98, 50, 82, 101, 118, 111, 108, 117, 116, 101, 74, 111, 105, 110, 116, 68, 101, 102, 32, 106, 100, 59, 10, 0 ], "i8", y);

am = F([ 32, 32, 106, 100, 46, 101, 110, 97, 98, 108, 101, 76, 105, 109, 105, 116, 32, 61, 32, 98, 111, 111, 108, 40, 37, 100, 41, 59, 10, 0 ], "i8", y);

Bm = F([ 32, 32, 106, 100, 46, 108, 111, 119, 101, 114, 65, 110, 103, 108, 101, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0 ], "i8", y);

Cm = F([ 32, 32, 106, 100, 46, 117, 112, 112, 101, 114, 65, 110, 103, 108, 101, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0 ], "i8", y);

Ao = F([ 49, 53, 98, 50, 82, 101, 118, 111, 108, 117, 116, 101, 74, 111, 105, 110, 116, 0 ], "i8", y);

Ro = F(12, "i8*", y);

Fm = F([ 0, 0, 0, 0, 0, 0, 0, 0, 316, 0, 0, 0, 318, 0, 0, 0, 320, 0, 0, 0, 322, 0, 0, 0, 324, 0, 0, 0, 326, 0, 0, 0, 328, 0, 0, 0, 330, 0, 0, 0, 332, 0, 0, 0, 334, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0 ], y);

F(1, "void*", y);

Jm = F([ 32, 32, 98, 50, 82, 111, 112, 101, 74, 111, 105, 110, 116, 68, 101, 102, 32, 106, 100, 59, 10, 0 ], "i8", y);

Km = F([ 32, 32, 106, 100, 46, 109, 97, 120, 76, 101, 110, 103, 116, 104, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0 ], "i8", y);

So = F([ 49, 49, 98, 50, 82, 111, 112, 101, 74, 111, 105, 110, 116, 0 ], "i8", y);

To = F(12, "i8*", y);

Mm = F([ 0, 0, 0, 0, 0, 0, 0, 0, 336, 0, 0, 0, 338, 0, 0, 0, 340, 0, 0, 0, 342, 0, 0, 0, 344, 0, 0, 0, 346, 0, 0, 0, 348, 0, 0, 0, 350, 0, 0, 0, 352, 0, 0, 0, 354, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0 ], y);

F(1, "void*", y);

Qm = F([ 32, 32, 98, 50, 87, 101, 108, 100, 74, 111, 105, 110, 116, 68, 101, 102, 32, 106, 100, 59, 10, 0 ], "i8", y);

$l = F([ 32, 32, 106, 100, 46, 114, 101, 102, 101, 114, 101, 110, 99, 101, 65, 110, 103, 108, 101, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0 ], "i8", y);

Uo = F([ 49, 49, 98, 50, 87, 101, 108, 100, 74, 111, 105, 110, 116, 0 ], "i8", y);

Vo = F(12, "i8*", y);

Wm = F([ 0, 0, 0, 0, 0, 0, 0, 0, 356, 0, 0, 0, 358, 0, 0, 0, 360, 0, 0, 0, 362, 0, 0, 0, 364, 0, 0, 0, 366, 0, 0, 0, 368, 0, 0, 0, 370, 0, 0, 0, 372, 0, 0, 0, 374, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0 ], y);

F(1, "void*", y);

$m = F([ 32, 32, 98, 50, 87, 104, 101, 101, 108, 74, 111, 105, 110, 116, 68, 101, 102, 32, 106, 100, 59, 10, 0 ], "i8", y);

Nk = F([ 32, 32, 106, 100, 46, 98, 111, 100, 121, 65, 32, 61, 32, 98, 111, 100, 105, 101, 115, 91, 37, 100, 93, 59, 10, 0 ], "i8", y);

Ok = F([ 32, 32, 106, 100, 46, 98, 111, 100, 121, 66, 32, 61, 32, 98, 111, 100, 105, 101, 115, 91, 37, 100, 93, 59, 10, 0 ], "i8", y);

Pk = F([ 32, 32, 106, 100, 46, 99, 111, 108, 108, 105, 100, 101, 67, 111, 110, 110, 101, 99, 116, 101, 100, 32, 61, 32, 98, 111, 111, 108, 40, 37, 100, 41, 59, 10, 0 ], "i8", y);

Qk = F([ 32, 32, 106, 100, 46, 108, 111, 99, 97, 108, 65, 110, 99, 104, 111, 114, 65, 46, 83, 101, 116, 40, 37, 46, 49, 53, 108, 101, 102, 44, 32, 37, 46, 49, 53, 108, 101, 102, 41, 59, 10, 0 ], "i8", y);

Rk = F([ 32, 32, 106, 100, 46, 108, 111, 99, 97, 108, 65, 110, 99, 104, 111, 114, 66, 46, 83, 101, 116, 40, 37, 46, 49, 53, 108, 101, 102, 44, 32, 37, 46, 49, 53, 108, 101, 102, 41, 59, 10, 0 ], "i8", y);

Zl = F([ 32, 32, 106, 100, 46, 108, 111, 99, 97, 108, 65, 120, 105, 115, 65, 46, 83, 101, 116, 40, 37, 46, 49, 53, 108, 101, 102, 44, 32, 37, 46, 49, 53, 108, 101, 102, 41, 59, 10, 0 ], "i8", y);

dm = F([ 32, 32, 106, 100, 46, 101, 110, 97, 98, 108, 101, 77, 111, 116, 111, 114, 32, 61, 32, 98, 111, 111, 108, 40, 37, 100, 41, 59, 10, 0 ], "i8", y);

em = F([ 32, 32, 106, 100, 46, 109, 111, 116, 111, 114, 83, 112, 101, 101, 100, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0 ], "i8", y);

Dm = F([ 32, 32, 106, 100, 46, 109, 97, 120, 77, 111, 116, 111, 114, 84, 111, 114, 113, 117, 101, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0 ], "i8", y);

Tk = F([ 32, 32, 106, 100, 46, 102, 114, 101, 113, 117, 101, 110, 99, 121, 72, 122, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0 ], "i8", y);

Uk = F([ 32, 32, 106, 100, 46, 100, 97, 109, 112, 105, 110, 103, 82, 97, 116, 105, 111, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0 ], "i8", y);

Vk = F([ 32, 32, 106, 111, 105, 110, 116, 115, 91, 37, 100, 93, 32, 61, 32, 109, 95, 119, 111, 114, 108, 100, 45, 62, 67, 114, 101, 97, 116, 101, 74, 111, 105, 110, 116, 40, 38, 106, 100, 41, 59, 10, 0 ], "i8", y);

Wo = F([ 49, 50, 98, 50, 87, 104, 101, 101, 108, 74, 111, 105, 110, 116, 0 ], "i8", y);

Xo = F(12, "i8*", y);

F([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 82, 111, 112, 101, 47, 98, 50, 82, 111, 112, 101, 46, 99, 112, 112, 0 ], "i8", y);

F([ 118, 111, 105, 100, 32, 98, 50, 82, 111, 112, 101, 58, 58, 73, 110, 105, 116, 105, 97, 108, 105, 122, 101, 40, 99, 111, 110, 115, 116, 32, 98, 50, 82, 111, 112, 101, 68, 101, 102, 32, 42, 41, 0 ], "i8", y);

F([ 100, 101, 102, 45, 62, 99, 111, 117, 110, 116, 32, 62, 61, 32, 51, 0 ], "i8", y);

g[Rb + 4 >> 2] = An;

yn = F([ 1, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, 0 ], y);

g[An >> 2] = yn + 8;

g[An + 4 >> 2] = zn;

g[wf + 4 >> 2] = Dn;

Bn = F([ 2, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, 0 ], y);

g[Dn >> 2] = Bn + 8;

g[Dn + 4 >> 2] = Cn;

g[Dn + 8 >> 2] = An;

g[En + 4 >> 2] = Gn;

g[Gn >> 2] = Bn + 8;

g[Gn + 4 >> 2] = Fn;

g[Gn + 8 >> 2] = An;

g[Zb + 4 >> 2] = In;

g[In >> 2] = Bn + 8;

g[In + 4 >> 2] = Hn;

g[In + 8 >> 2] = An;

g[Wb + 4 >> 2] = Kn;

g[Kn >> 2] = Bn + 8;

g[Kn + 4 >> 2] = Jn;

g[Kn + 8 >> 2] = An;

g[Ln + 4 >> 2] = Nn;

g[Nn >> 2] = yn + 8;

g[Nn + 4 >> 2] = Mn;

g[Pn + 4 >> 2] = Rn;

g[Rn >> 2] = yn + 8;

g[Rn + 4 >> 2] = Qn;

g[On + 4 >> 2] = Tn;

g[Tn >> 2] = yn + 8;

g[Tn + 4 >> 2] = Sn;

g[zj + 4 >> 2] = Xn;

g[Wn >> 2] = yn + 8;

g[Wn + 4 >> 2] = Vn;

g[Xn >> 2] = Bn + 8;

g[Xn + 4 >> 2] = Un;

g[Xn + 8 >> 2] = Wn;

g[Gj + 4 >> 2] = Zn;

g[Zn >> 2] = Bn + 8;

g[Zn + 4 >> 2] = Yn;

g[Zn + 8 >> 2] = Wn;

g[Mj + 4 >> 2] = ao;

g[ao >> 2] = Bn + 8;

g[ao + 4 >> 2] = $n;

g[ao + 8 >> 2] = Wn;

g[ak + 4 >> 2] = Wn;

g[qk + 4 >> 2] = co;

g[co >> 2] = Bn + 8;

g[co + 4 >> 2] = bo;

g[co + 8 >> 2] = Wn;

g[yk + 4 >> 2] = fo;

g[fo >> 2] = Bn + 8;

g[fo + 4 >> 2] = eo;

g[fo + 8 >> 2] = Wn;

g[Ck + 4 >> 2] = ho;

g[ho >> 2] = Bn + 8;

g[ho + 4 >> 2] = go;

g[ho + 8 >> 2] = Wn;

g[Hk + 4 >> 2] = jo;

g[jo >> 2] = Bn + 8;

g[jo + 4 >> 2] = io;

g[jo + 8 >> 2] = Wn;

g[wk + 4 >> 2] = no;

g[mo >> 2] = yn + 8;

g[mo + 4 >> 2] = lo;

g[no >> 2] = Bn + 8;

g[no + 4 >> 2] = ko;

g[no + 8 >> 2] = mo;

g[al + 4 >> 2] = po;

g[po >> 2] = Bn + 8;

g[po + 4 >> 2] = oo;

g[po + 8 >> 2] = mo;

g[il + 4 >> 2] = ro;

g[ro >> 2] = Bn + 8;

g[ro + 4 >> 2] = qo;

g[ro + 8 >> 2] = mo;

g[vl + 4 >> 2] = mo;

g[Al + 4 >> 2] = uo;

g[uo >> 2] = Bn + 8;

g[uo + 4 >> 2] = to;

g[uo + 8 >> 2] = mo;

g[Pl + 4 >> 2] = xo;

g[xo >> 2] = Bn + 8;

g[xo + 4 >> 2] = wo;

g[xo + 8 >> 2] = mo;

g[hm + 4 >> 2] = zo;

g[zo >> 2] = Bn + 8;

g[zo + 4 >> 2] = yo;

g[zo + 8 >> 2] = mo;

g[um + 4 >> 2] = Ro;

g[Ro >> 2] = Bn + 8;

g[Ro + 4 >> 2] = Ao;

g[Ro + 8 >> 2] = mo;

g[Fm + 4 >> 2] = To;

g[To >> 2] = Bn + 8;

g[To + 4 >> 2] = So;

g[To + 8 >> 2] = mo;

g[Mm + 4 >> 2] = Vo;

g[Vo >> 2] = Bn + 8;

g[Vo + 4 >> 2] = Uo;

g[Vo + 8 >> 2] = mo;

g[Wm + 4 >> 2] = Xo;

g[Xo >> 2] = Bn + 8;

g[Xo + 4 >> 2] = Wo;

g[Xo + 8 >> 2] = mo;

nb = [ 0, 0, (function(a, f) {
  var d, c;
  d = g[a >> 2] < g[f >> 2] ? 1 : 2;
  d == 1 ? c = 1 : d == 2 && (d = g[a >> 2] == g[f >> 2] ? 3 : 4, d == 3 ? c = g[a + 4 >> 2] < g[f + 4 >> 2] : d == 4 && (c = 0));
  return c;
}), 0, ka(), 0, ka(), 0, (function(a, f, d, c, h) {
  c = ig(h, 144);
  if (c == 0) var i = 0, f = 2; else f = 1;
  f == 1 && (Lj(c, a, d), i = c);
  return i;
}), 0, (function(a, f) {
  nb[g[g[a >> 2] + 4 >> 2]](a);
  Ig(f, a, 144);
}), 0, (function(a, f, d, c, h) {
  c = ig(h, 144);
  if (c == 0) var i = 0, f = 2; else f = 1;
  f == 1 && (Bk(c, a, d), i = c);
  return i;
}), 0, (function(a, f) {
  nb[g[g[a >> 2] + 4 >> 2]](a);
  Ig(f, a, 144);
}), 0, (function(a, f, d, c, h) {
  c = ig(h, 144);
  if (c == 0) var i = 0, f = 2; else f = 1;
  f == 1 && (Gk(c, a, d), i = c);
  return i;
}), 0, (function(a, f) {
  nb[g[g[a >> 2] + 4 >> 2]](a);
  Ig(f, a, 144);
}), 0, (function(a, f, d, c, h) {
  c = ig(h, 144);
  if (c == 0) var i = 0, f = 2; else f = 1;
  f == 1 && (pk(c, a, d), i = c);
  return i;
}), 0, (function(a, f) {
  nb[g[g[a >> 2] + 4 >> 2]](a);
  Ig(f, a, 144);
}), 0, (function(a, f, d, c, h) {
  c = ig(h, 144);
  if (c == 0) var i = 0, f = 2; else f = 1;
  f == 1 && (xk(c, a, d), i = c);
  return i;
}), 0, (function(a, f) {
  nb[g[g[a >> 2] + 4 >> 2]](a);
  Ig(f, a, 144);
}), 0, (function(a, f, d, c, h) {
  var i;
  i = ig(h, 144);
  if (i == 0) var j = 0, h = 2; else h = 1;
  h == 1 && (xj(i, a, f, d, c), j = i);
  return j;
}), 0, (function(a, f) {
  nb[g[g[a >> 2] + 4 >> 2]](a);
  Ig(f, a, 144);
}), 0, (function(a, f, d, c, h) {
  var i;
  i = ig(h, 144);
  if (i == 0) var j = 0, h = 2; else h = 1;
  h == 1 && (Fj(i, a, f, d, c), j = i);
  return j;
}), 0, (function(a, f) {
  nb[g[g[a >> 2] + 4 >> 2]](a);
  Ig(f, a, 144);
}), 0, ka(), 0, ka(), 0, (function() {
  throw "Pure virtual function called!";
}), 0, vf, 0, (function(a) {
  vf(a);
}), 0, hg, 0, (function(a) {
  return g[a + 16 >> 2] - 1;
}), 0, la(0), 0, mg, 0, Bf, 0, (function(a, f) {
  q[f >> 2] = 0;
  Xb(f + 4);
  q[f + 12 >> 2] = 0;
}), 0, ka(), 0, ka(), 0, (function(a, f) {
  var d, c;
  c = ig(f, 20);
  if (c == 0) {
    var h = 0;
    d = 2;
  } else d = 1;
  d == 1 && (Qb(c), g[c >> 2] = En + 8, g[c + 4 >> 2] = 0, q[c + 8 >> 2] = 0, Xb(c + 12), h = c);
  d = h;
  pg(d, a);
  var i;
  c = a + 12;
  h = d + 12;
  for (i = c + 8; c < i; ) e[h++] = e[c++];
  return d;
}), 0, la(1), 0, (function(a, f, d) {
  var c = b;
  b += 24;
  var h = c + 8, i = c + 16;
  Yc(h, f + 8, a + 12);
  V(c, f, h);
  J(i, d, c);
  a = S(i, i) <= q[a + 8 >> 2] * q[a + 8 >> 2];
  b = c;
  return a;
}), 0, qg, 0, (function(a, f, d) {
  var c = b;
  b += 16;
  var h = c + 8;
  Yc(h, d + 8, a + 12);
  V(c, d, h);
  ac(f, q[c >> 2] - q[a + 8 >> 2], q[c + 4 >> 2] - q[a + 8 >> 2]);
  ac(f + 8, q[c >> 2] + q[a + 8 >> 2], q[c + 4 >> 2] + q[a + 8 >> 2]);
  b = c;
}), 0, (function(a, f, d) {
  q[f >> 2] = d * 3.1415927410125732 * q[a + 8 >> 2] * q[a + 8 >> 2];
  var c, h, d = a + 12;
  c = f + 4;
  for (h = d + 8; d < h; ) e[c++] = e[d++];
  q[f + 12 >> 2] = q[f >> 2] * (q[a + 8 >> 2] * .5 * q[a + 8 >> 2] + S(a + 12, a + 12));
}), 0, ka(), 0, ka(), 0, (function(a, f) {
  var d, c;
  c = ig(f, 48);
  if (c == 0) {
    var h = 0;
    d = 2;
  } else d = 1;
  d == 1 && (Yb(c), h = c);
  d = h;
  pg(d, a);
  var i;
  c = a + 12;
  h = d + 12;
  for (i = c + 8; c < i; ) e[h++] = e[c++];
  c = a + 20;
  h = d + 20;
  for (i = c + 8; c < i; ) e[h++] = e[c++];
  c = a + 28;
  h = d + 28;
  for (i = c + 8; c < i; ) e[h++] = e[c++];
  c = a + 36;
  h = d + 36;
  for (i = c + 8; c < i; ) e[h++] = e[c++];
  e[d + 44] = e[a + 44] & 1;
  e[d + 45] = e[a + 45] & 1;
  return d;
}), 0, la(1), 0, la(0), 0, og, 0, (function(a, f, d) {
  var c = b;
  b += 56;
  var h = c + 8, i = c + 16, j = c + 24, k = c + 32, p = c + 40, o = c + 48;
  Hc(c, d, a + 12);
  Hc(h, d, a + 20);
  Qe(i, c, h);
  Re(j, c, h);
  kc(k, q[a + 8 >> 2], q[a + 8 >> 2]);
  J(p, i, k);
  a = p;
  d = f;
  for (h = a + 8; a < h; ) e[d++] = e[a++];
  f += 8;
  V(o, j, k);
  a = o;
  d = f;
  for (h = a + 8; a < h; ) e[d++] = e[a++];
  b = c;
}), 0, (function(a, f) {
  var d = b;
  b += 16;
  var c = d + 8;
  q[f >> 2] = 0;
  var h = f + 4;
  V(c, a + 12, a + 20);
  T(d, .5, c);
  var i, c = d;
  for (i = c + 8; c < i; ) e[h++] = e[c++];
  q[f + 12 >> 2] = 0;
  b = d;
}), 0, ka(), 0, ka(), 0, (function(a, f) {
  var d, c;
  c = ig(f, 152);
  if (c == 0) {
    var h = 0;
    d = 2;
  } else d = 1;
  d == 1 && (Vb(c), h = c);
  d = h;
  pg(d, a);
  var i, j;
  c = a + 12;
  h = d + 12;
  for (i = c + 8; c < i; ) e[h++] = e[c++];
  c = a + 20;
  h = d + 20;
  i = c + 64;
  if (h % 4 == c % 4) {
    for (; c % 4 !== 0 && c < i; ) e[h++] = e[c++];
    c >>= 2;
    h >>= 2;
    for (j = i >> 2; c < j; ) g[h++] = g[c++];
    c <<= 2;
    h <<= 2;
  }
  for (; c < i; ) e[h++] = e[c++];
  c = a + 84;
  h = d + 84;
  i = c + 64;
  if (h % 4 == c % 4) {
    for (; c % 4 !== 0 && c < i; ) e[h++] = e[c++];
    c >>= 2;
    h >>= 2;
    for (j = i >> 2; c < j; ) g[h++] = g[c++];
    c <<= 2;
    h <<= 2;
  }
  for (; c < i; ) e[h++] = e[c++];
  g[d + 148 >> 2] = g[a + 148 >> 2];
  return d;
}), 0, la(1), 0, (function(a, f, d) {
  var c = b;
  b += 24;
  var h, i, j = c + 8, k, p = c + 16;
  k = f + 8;
  J(j, d, f);
  Wc(c, k, j);
  f = 0;
  d = a + 148;
  j = a + 84;
  for (a += 20; ; ) {
    if (f >= g[d >> 2]) {
      h = 5;
      break;
    }
    k = j + (f << 3);
    J(p, c, a + (f << 3));
    k = S(k, p);
    if (k > 0) {
      h = 3;
      break;
    }
    f += 1;
  }
  h == 5 ? i = 1 : h == 3 && (i = 0);
  b = c;
  return i;
}), 0, tg, 0, rg, 0, xg, 0, ka(), 0, ka(), 0, ka(), 0, ka(), 0, ka(), 0, ka(), 0, ka(), 0, ka(), 0, wj, 0, Ej, 0, ka(), 0, ka(), 0, Kj, 0, ka(), 0, ka(), 0, (function(a, f, d, c) {
  Jc(f, rj(g[a + 48 >> 2]), d, rj(g[a + 52 >> 2]), c);
}), 0, ka(), 0, ka(), 0, ka(), 0, ka(), 0, (function(a, f, d, c) {
  Pc(f, rj(g[a + 48 >> 2]), d, rj(g[a + 52 >> 2]), c);
}), 0, ka(), 0, ka(), 0, (function(a, f, d, c) {
  var h = rj(g[a + 48 >> 2]), a = rj(g[a + 52 >> 2]), i = b;
  b += 252;
  Vc(i, f, h, d, a, c);
  b = i;
}), 0, ka(), 0, ka(), 0, (function(a, f, d, c) {
  Kc(f, rj(g[a + 48 >> 2]), d, rj(g[a + 52 >> 2]), c);
}), 0, ka(), 0, ka(), 0, (function(a, f, d, c) {
  bd(f, rj(g[a + 48 >> 2]), d, rj(g[a + 52 >> 2]), c);
}), 0, ka(), 0, ka(), 0, (function(a, f) {
  Kk(a, g[f + 48 >> 2], f + 80);
}), 0, (function(a, f) {
  Kk(a, g[f + 52 >> 2], f + 88);
}), 0, (function(a, f, d) {
  T(a, d * q[f + 100 >> 2], f + 116);
}), 0, la(0), 0, Lk, 0, ka(), 0, ka(), 0, Wk, 0, Yk, 0, Zk, 0, (function(a, f) {
  Kk(a, g[f + 48 >> 2], f + 68);
}), 0, (function(a, f) {
  Kk(a, g[f + 52 >> 2], f + 76);
}), 0, (function(a, f, d) {
  T(a, d, f + 84);
}), 0, (function(a, f) {
  return f * q[a + 92 >> 2];
}), 0, bl, 0, ka(), 0, ka(), 0, fl, 0, gl, 0, la(1), 0, (function(a, f) {
  Kk(a, g[f + 48 >> 2], f + 92);
}), 0, (function(a, f) {
  Kk(a, g[f + 52 >> 2], f + 100);
}), 0, (function(a, f, d) {
  var c = b;
  b += 8;
  T(c, q[f + 156 >> 2], f + 240);
  T(a, d, c);
  b = c;
}), 0, (function(a, f) {
  return f * q[a + 156 >> 2] * q[a + 256 >> 2];
}), 0, pl, 0, ka(), 0, ka(), 0, nl, 0, ol, 0, ul, 0, (function() {
  $(so, F(1, "i32", v));
}), 0, ka(), 0, ka(), 0, (function(a, f) {
  var d, c, h;
  d = f + 76;
  c = a;
  for (h = d + 8; d < h; ) e[c++] = e[d++];
}), 0, (function(a, f) {
  Kk(a, g[f + 52 >> 2], f + 68);
}), 0, (function(a, f, d) {
  T(a, d, f + 96);
}), 0, la(0), 0, (function() {
  $(vo, F(1, "i32", v));
}), 0, ka(), 0, ka(), 0, Hl, 0, Kl, 0, la(1), 0, (function(a, f) {
  Kk(a, g[f + 48 >> 2], f + 68);
}), 0, (function(a, f) {
  Kk(a, g[f + 52 >> 2], f + 76);
}), 0, (function(a, f, d) {
  var c = b;
  b += 24;
  var h = c + 8, i = c + 16;
  T(h, q[f + 104 >> 2], f + 192);
  T(i, q[f + 116 >> 2] + q[f + 112 >> 2], f + 184);
  V(c, h, i);
  T(a, d, c);
  b = c;
}), 0, (function(a, f) {
  return f * q[a + 108 >> 2];
}), 0, Xl, 0, ka(), 0, ka(), 0, Ql, 0, Ul, 0, Wl, 0, (function(a, f) {
  Kk(a, g[f + 48 >> 2], f + 92);
}), 0, (function(a, f) {
  Kk(a, g[f + 52 >> 2], f + 100);
}), 0, (function(a, f, d) {
  var c = b;
  b += 8;
  T(c, q[f + 116 >> 2], f + 136);
  T(a, d, c);
  b = c;
}), 0, la(0), 0, nm, 0, ka(), 0, ka(), 0, lm, 0, mm, 0, vm, 0, (function(a, f) {
  Kk(a, g[f + 48 >> 2], f + 68);
}), 0, (function(a, f) {
  Kk(a, g[f + 52 >> 2], f + 76);
}), 0, (function(a, f, d) {
  var c = b;
  b += 8;
  kc(c, q[f + 84 >> 2], q[f + 88 >> 2]);
  T(a, d, c);
  b = c;
}), 0, (function(a, f) {
  return f * q[a + 92 >> 2];
}), 0, zm, 0, ka(), 0, ka(), 0, wm, 0, xm, 0, ym, 0, (function(a, f) {
  Kk(a, g[f + 48 >> 2], f + 68);
}), 0, (function(a, f) {
  Kk(a, g[f + 52 >> 2], f + 76);
}), 0, (function(a, f, d) {
  T(a, d * q[f + 92 >> 2], f + 104);
}), 0, la(0), 0, Im, 0, ka(), 0, ka(), 0, Gm, 0, Hm, 0, Nm, 0, (function(a, f) {
  Kk(a, g[f + 48 >> 2], f + 80);
}), 0, (function(a, f) {
  Kk(a, g[f + 52 >> 2], f + 88);
}), 0, (function(a, f, d) {
  var c = b;
  b += 8;
  kc(c, q[f + 104 >> 2], q[f + 108 >> 2]);
  T(a, d, c);
  b = c;
}), 0, (function(a, f) {
  return f * q[a + 112 >> 2];
}), 0, Pm, 0, ka(), 0, ka(), 0, Om, 0, Tm, 0, Um, 0, (function(a, f) {
  Kk(a, g[f + 48 >> 2], f + 76);
}), 0, (function(a, f) {
  Kk(a, g[f + 52 >> 2], f + 84);
}), 0, (function(a, f, d) {
  var c = b;
  b += 24;
  var h = c + 8, i = c + 16;
  T(h, q[f + 108 >> 2], f + 180);
  T(i, q[f + 116 >> 2], f + 172);
  V(c, h, i);
  T(a, d, c);
  b = c;
}), 0, (function(a, f) {
  return f * q[a + 112 >> 2];
}), 0, Zm, 0, ka(), 0, ka(), 0, Xm, 0, Ym, 0, an, 0, Bc, 0, ka(), 0, Cc, 0, ka(), 0, Bg, 0, (function(a) {
  var f;
  f = 0;
  var d = a + 4, a = f < g[d >> 2] ? 1 : 3;
  a : do if (a == 1) for (;;) if (f += 1, f >= g[d >> 2]) break a; while (0);
}), 0, Wg, 0, Xg, 0, (function(a) {
  kh(a);
}), 0, nh, 0, ka(), 0, Oh, 0, Kh, 0, xi, 0, wi, 0, lc, 0, Ac, 0, xj, 0, Fj, 0, Lj, 0, Bi, 0, Ii, 0, pk, 0, xk, 0, Bk, 0, Gk, 0, uk, 0, $k, 0, hl, 0, zl, 0, Ol, 0, gm, 0, tm, 0, Em, 0, Lm, 0, Vm, 0, (function(a) {
  g[a >> 2] = 0;
  g[a + 4 >> 2] = 0;
  g[a + 8 >> 2] = 0;
  g[a + 12 >> 2] = 0;
  g[a + 16 >> 2] = 0;
  g[a + 20 >> 2] = 0;
  g[a + 24 >> 2] = 0;
  Xb(a + 28);
  q[a + 40 >> 2] = 1;
  q[a + 44 >> 2] = .10000000149011612;
}), 0, ka(), 0 ];

Module.FUNCTION_TABLE = nb;

function Yo(a) {
  a = a || Module.arguments;
  Ya();
  var f = ja;
  if (Module._main) {
    for (f = Module.I(a); Za.length > 0; ) {
      var a = Za.pop(), d = a.n;
      typeof d === "number" && (d = nb[d]);
      d(a.k === ga ? ja : a.k);
    }
    Xa();
  }
  return f;
}

Module.run = Yo;

try {
  on = !1;
} catch (Zo) {}

Module.noInitialRun || Yo();
