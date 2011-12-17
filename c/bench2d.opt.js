function a(c) {
  throw c;
}

var da = void 0, ea = !0, fa = null, ga = !1;

function ka() {
  return (function() {});
}

function pa(c) {
  return (function() {
    return c;
  });
}

var sa = [], ta = typeof process === "object", ua = typeof window === "object", va = typeof importScripts === "function", wa = !ua && !ta && !va;

if (ta) {
  print = (function(c) {
    process.stdout.write(c + "\n");
  });
  printErr = (function(c) {
    process.stderr.write(c + "\n");
  });
  var ya = require("fs");
  read = (function(c) {
    var d = ya.readFileSync(c).toString();
    !d && c[0] != "/" && (c = __dirname.split("/").slice(0, -1).join("/") + "/src/" + c, d = ya.readFileSync(c).toString());
    return d;
  });
  sa = process.argv.slice(2);
} else wa ? (this.read || (read = (function(c) {
  snarf(c);
})), sa = this.arguments ? arguments : scriptArgs) : ua ? (printErr = (function(c) {
  console.log(c);
}), read = (function(c) {
  var d = new XMLHttpRequest;
  d.open("GET", c, ga);
  d.send(fa);
  return d.responseText;
}), this.arguments && (sa = arguments)) : va ? load = importScripts : a("Unknown runtime environment. Where are we?");

function Aa(c) {
  eval.call(fa, c);
}

typeof load == "undefined" && typeof read != "undefined" && (load = (function(c) {
  Aa(read(c));
}));

typeof printErr === "undefined" && (printErr = ka());

typeof print === "undefined" && (print = printErr);

try {
  this.Module = Module;
} catch (Ca) {
  this.Module = Module = {};
}

if (!Module.arguments) Module.arguments = sa;

var Ia = {
  V: (function() {
    return b;
  }),
  U: (function(c) {
    b = c;
  }),
  aa: (function(c, d) {
    d = d || 1;
    return isNumber(c) && isNumber(d) ? Math.ceil(c / d) * d : "Math.ceil((" + c + ")/" + d + ")*" + d;
  }),
  N: (function(c) {
    return c in Ia.G || c in Ia.F;
  }),
  O: (function(c) {
    return c[c.length - 1] == "*";
  }),
  Q: (function(c) {
    return isPointerType(c) ? ga : /^\[\d+\ x\ (.*)\]/.test(c) ? ea : /<?{ [^}]* }>?/.test(c) ? ea : c[0] == "%";
  }),
  G: {
    i1: 0,
    i8: 0,
    i16: 0,
    i32: 0,
    i64: 0
  },
  F: {
    "float": 0,
    "double": 0
  },
  da: (function(c, d) {
    return (c | 0 | d | 0) + (Math.round(c / 4294967296) | Math.round(d / 4294967296)) * 4294967296;
  }),
  $: (function(c, d) {
    return ((c | 0) & (d | 0)) + (Math.round(c / 4294967296) & Math.round(d / 4294967296)) * 4294967296;
  }),
  ia: (function(c, d) {
    return ((c | 0) ^ (d | 0)) + (Math.round(c / 4294967296) ^ Math.round(d / 4294967296)) * 4294967296;
  }),
  o: (function(c) {
    if (Ia.e == 1) return 1;
    var d = {
      "%i1": 1,
      "%i8": 1,
      "%i16": 2,
      "%i32": 4,
      "%i64": 8,
      "%float": 4,
      "%double": 8
    }["%" + c];
    if (!d && c[c.length - 1] == "*") d = Ia.e;
    return d;
  }),
  L: (function(c) {
    return Math.max(Ia.o(c), Ia.e);
  }),
  I: (function(c, d) {
    var e = {};
    return d ? c.filter((function(c) {
      return e[c[d]] ? ga : e[c[d]] = ea;
    })) : c.filter((function(c) {
      return e[c] ? ga : e[c] = ea;
    }));
  }),
  set: (function() {
    for (var c = typeof arguments[0] === "object" ? arguments[0] : arguments, d = {}, e = 0; e < c.length; e++) d[c[e]] = 0;
    return d;
  }),
  q: (function(c) {
    c.b = 0;
    c.f = 0;
    var d = [], e = -1;
    c.t = c.g.map((function(f) {
      var g, i;
      Ia.N(f) || Ia.O(f) ? i = g = Ia.o(f) : Ia.Q(f) ? (g = Types.types[f].b, i = Types.types[f].f) : a("Unclear type in struct: " + f + ", in " + c.R + " :: " + dump(Types.types[c.R]));
      i = c.ea ? 1 : Math.min(i, Ia.e);
      c.f = Math.max(c.f, i);
      f = Ia.p(c.b, i);
      c.b = f + g;
      e >= 0 && d.push(f - e);
      return e = f;
    }));
    c.b = Ia.p(c.b, c.f);
    if (d.length == 0) c.s = c.b; else if (Ia.I(d).length == 1) c.s = d[0];
    c.ca = c.s != 1;
    return c.t;
  }),
  K: (function(c, d, e) {
    var f, g;
    if (d) {
      e = e || 0;
      f = (typeof Types === "undefined" ? Ia.ha : Types.types)[d];
      if (!f) return fa;
      c || (c = (typeof Types === "undefined" ? Ia : Types).fa[d.replace(/.*\./, "")]);
      if (!c) return fa;
      Ja(f.g.length === c.length, "Number of named fields must match the type for " + d + ". Perhaps due to inheritance, which is not supported yet?");
      g = f.t;
    } else f = {
      g: c.map((function(c) {
        return c[0];
      }))
    }, g = Ia.q(f);
    var i = {
      Z: f.b
    };
    d ? c.forEach((function(c, d) {
      if (typeof c === "string") i[c] = g[d] + e; else {
        var k, l;
        for (l in c) k = l;
        i[k] = Ia.K(c[k], f.g[d], g[d]);
      }
    })) : c.forEach((function(c, d) {
      i[c[1]] = g[d];
    }));
    return i;
  }),
  T: (function(c) {
    var d = b;
    b += c;
    return d;
  }),
  W: (function(c) {
    var d = Ka;
    Ka += c;
    if (Ka >= Na) {
      for (; Na <= Ka; ) Na = Sa(Na * 1.25);
      c = p;
      Ta = p = new Int32Array(Na);
      p.set(c);
      Xa = new Uint32Array(p.buffer);
      c = t;
      t = new Float64Array(Na);
      t.set(c);
    }
    return d;
  }),
  p: (function(c, d) {
    return Math.ceil(c / (d ? d : 1)) * (d ? d : 1);
  }),
  e: 1,
  Y: 0
};

function Ya() {
  var c = [], d;
  for (d in this.j) c.push({
    S: d,
    J: this.j[d][0],
    ga: this.j[d][1],
    total: this.j[d][0] + this.j[d][1]
  });
  c.sort((function(c, d) {
    return d.total - c.total;
  }));
  for (d = 0; d < c.length; d++) {
    var e = c[d];
    print(e.S + " : " + e.total + " hits, %" + Math.ceil(100 * e.J / e.total) + " failures");
  }
}

function $a() {}

var ab = [];

function eb(c) {
  print(c + ":\n" + Error().stack);
  a("Assertion: " + c);
}

function Ja(c, d) {
  c || eb("Assertion failed: " + d);
}

function fb(c, d, e) {
  e = e || "i8";
  e[e.length - 1] === "*" && (e = "i32");
  switch (e) {
   case "i1":
    p[c] = d;
    break;
   case "i8":
    p[c] = d;
    break;
   case "i16":
    p[c] = d;
    break;
   case "i32":
    p[c] = d;
    break;
   case "i64":
    p[c] = d;
    break;
   case "float":
    t[c] = d;
    break;
   case "double":
    t[c] = d;
    break;
   default:
    eb("invalid type for setValue: " + e);
  }
}

Module.setValue = fb;

Module.getValue = (function(c, d) {
  d = d || "i8";
  d[d.length - 1] === "*" && (d = "i32");
  switch (d) {
   case "i1":
    return p[c];
   case "i8":
    return p[c];
   case "i16":
    return p[c];
   case "i32":
    return p[c];
   case "i64":
    return p[c];
   case "float":
    return t[c];
   case "double":
    return t[c];
   default:
    eb("invalid type for setValue: " + d);
  }
  return fa;
});

var gb = 0, w = 1, A = 2;

Module.ALLOC_NORMAL = gb;

Module.ALLOC_STACK = w;

Module.ALLOC_STATIC = A;

function C(c, d, e) {
  var f, g;
  typeof c === "number" ? (f = ea, g = c) : (f = ga, g = c.length);
  for (var e = [ hb, Ia.T, Ia.W ][e === da ? A : e](Math.max(g, 1)), i = typeof d === "string" ? d : fa, h = 0, j; h < g; ) {
    var k = f ? 0 : c[h];
    typeof k === "function" && (k = Ia.ba(k));
    j = i || d[h];
    j === 0 ? h++ : (fb(e + h, k, j), h += Ia.o(j));
  }
  return e;
}

Module.allocate = C;

function ib(c) {
  for (var d = "", e = 0, f, g = String.fromCharCode(0); ; ) {
    f = String.fromCharCode(Xa[c + e]);
    if (f == g) break;
    d += f;
    e += 1;
  }
  return d;
}

Module.Pointer_stringify = ib;

Module.Array_stringify = (function(c) {
  for (var d = "", e = 0; e < c.length; e++) d += String.fromCharCode(c[e]);
  return d;
});

var qb, rb = 4096;

function Sa(c) {
  return Math.ceil(c / rb) * rb;
}

var Ta, p, Xa, t, b, sb, Ka, Na = Module.TOTAL_MEMORY || 10485760;

Ja(!!Int32Array && !!Float64Array && !!(new Int32Array(1)).subarray && !!(new Int32Array(1)).set, "Cannot fallback to non-typed array case: Code is too specialized");

Ta = p = new Int32Array(Na);

Xa = new Uint32Array(p.buffer);

t = new Float64Array(Na);

for (var ub = tb("(null)"), vb = 0; vb < ub.length; vb++) p[vb] = ub[vb];

Module.HEAP = Ta;

Module.IHEAP = p;

Module.FHEAP = t;

sb = (b = Sa(10)) + 1048576;

Ka = Sa(sb);

function wb(c, d) {
  return Array.prototype.slice.call(p.subarray(c, c + d));
}

Module.Array_copy = wb;

function Eb(c) {
  for (var d = 0; p[c + d]; ) d++;
  return d;
}

Module.String_len = Eb;

function Fb(c, d) {
  var e = Eb(c);
  d && e++;
  var f = wb(c, e);
  d && (f[e - 1] = 0);
  return f;
}

Module.String_copy = Fb;

function tb(c, d) {
  for (var e = [], f = 0; f < c.length; ) {
    var g = c.charCodeAt(f);
    g > 255 && (g &= 255);
    e.push(g);
    f += 1;
  }
  d || e.push(0);
  return e;
}

Module.intArrayFromString = tb;

Module.intArrayToString = (function(c) {
  for (var d = [], e = 0; e < c.length; e++) {
    var f = c[e];
    f > 255 && (f &= 255);
    d.push(String.fromCharCode(f));
  }
  return d.join("");
});

function Gb(c, d) {
  return c >= 0 ? c : d <= 32 ? 2 * Math.abs(1 << d - 1) + c : Math.pow(2, d) + c;
}

function Mb(c, d) {
  if (c <= 0) return c;
  var e = d <= 32 ? Math.abs(1 << d - 1) : Math.pow(2, d - 1);
  if (c >= e && (d <= 32 || c > e)) c = -2 * e + c;
  return c;
}

function Qb() {
  Rb();
  return 0;
}

Module._main = Qb;

function Sb(c, d) {
  t[c] += t[d];
  t[c + 1] += t[d + 1];
}

function Tb(c) {
  p[c] = $b + 2;
  p[c] = ac + 2;
  p[c + 1] = 2;
  t[c + 2] = .009999999776482582;
  p[c + 37] = 0;
  hc(c + 3);
}

Tb.X = 1;

function hc(c) {
  t[c] = 0;
  t[c + 1] = 0;
}

function ic(c) {
  p[c] = $b + 2;
  p[c] = jc + 2;
  p[c + 1] = 1;
  t[c + 2] = .009999999776482582;
  t[c + 7] = 0;
  t[c + 8] = 0;
  t[c + 9] = 0;
  t[c + 10] = 0;
  p[c + 11] = 0;
  p[c + 12] = 0;
}

function rc(c) {
  p[c + 14] = 0;
  sc(c + 1, 0, 0);
  t[c + 3] = 0;
  sc(c + 4, 0, 0);
  t[c + 6] = 0;
  t[c + 7] = 0;
  t[c + 8] = 0;
  p[c + 9] = 1;
  p[c + 10] = 1;
  p[c + 11] = 0;
  p[c + 12] = 0;
  p[c] = 0;
  p[c + 13] = 1;
  t[c + 15] = 1;
}

function sc(c, d, e) {
  t[c] = d;
  t[c + 1] = e;
}

function tc(c, d, e) {
  t[c] = d;
  t[c + 1] = e;
}

function uc(c) {
  vc(p[c + 8]);
  vc(p[c + 11]);
  wc(c);
}

function Rb() {
  var c = b;
  b += 102913;
  var d = c + 2, e = c + 102562, f = c + 102578, g = c + 102591, i = c + 102593, h = c + 102595, j = c + 102633, k = c + 102635, l = c + 102637, m = c + 102639, n = c + 102641, o = c + 102657;
  tc(c, 0, -10);
  xc(d, c);
  var r, q;
  r = 0 == (p[d + 102544] & 1) ? 4 : 1;
  a : do if (r == 1) if (p[d + 102544] = 0, (p[d + 102544] & 1) != 0) r = 4; else if (q = p[d + 102538], p[d + 102538] == 0) r = 4; else for (;;) {
    yc(q, 1);
    var s = p[q + 24];
    q = s;
    if (s == 0) break a;
  } while (0);
  rc(e);
  e = zc(d, e);
  ic(f);
  tc(g, -40, 0);
  tc(i, 40, 0);
  r = f + 3;
  p[r] = p[g];
  t[r] = t[g];
  p[r + 1] = p[g + 1];
  t[r + 1] = t[g + 1];
  g = f + 5;
  p[g] = p[i];
  t[g] = t[i];
  p[g + 1] = p[i + 1];
  t[g + 1] = t[i + 1];
  p[f + 11] = 0;
  p[f + 12] = 0;
  Cc(e, f, 0);
  Tb(h);
  p[h + 37] = 4;
  sc(h + 5, -.5, -.5);
  sc(h + 7, .5, -.5);
  sc(h + 9, .5, .5);
  sc(h + 11, -.5, .5);
  sc(h + 21, 0, -1);
  sc(h + 23, 1, 0);
  sc(h + 25, 0, 1);
  sc(h + 27, -1, 0);
  hc(h + 3);
  tc(j, -7, .75);
  tc(l, .5625, 1);
  tc(m, 1.125, 0);
  f = 0;
  i = n + 1;
  for (g = 0; ; ) {
    if (g >= 40) break;
    p[k] = p[j];
    t[k] = t[j];
    p[k + 1] = p[j + 1];
    t[k + 1] = t[j + 1];
    for (e = g = f; ; ) {
      if (e >= 40) break;
      rc(n);
      p[n] = 2;
      p[i] = p[k];
      t[i] = t[k];
      p[i + 1] = p[k + 1];
      t[i + 1] = t[k + 1];
      e = zc(d, n);
      Cc(e, h, 5);
      Sb(k, m);
      g = e = g + 1;
    }
    Sb(j, l);
    f = g = f + 1;
  }
  for (j = h = 0; ; ) {
    if (j >= 64) break;
    Dc(d, .01666666753590107, 3, 3);
    h = j = h + 1;
  }
  for (j = h = 0; ; ) {
    if (j >= 256) break;
    j = Ec();
    Dc(d, .01666666753590107, 3, 3);
    k = Ec();
    p[o + h] = k - j;
    Fc(Gc, C([ (k - j) / 1e3 * 1e3 ], "double", w));
    h = j = h + 1;
  }
  h = p[Hc];
  p[Pc] = Gb(10);
  if (Qc(h, Pc, 1) == -1 && h in Rc) Rc[h].error = ea;
  for (j = h = 0; ; ) if (h += p[o + j], j = k = j + 1, k >= 256) break;
  Fc(Gc, C([ h / 256 / 1e3 * 1e3 ], "double", w));
  Sc(d);
  b = c;
}

Rb.X = 1;

function Tc(c) {
  Uc(c);
  p[c + 7] = 0;
  p[c + 12] = 16;
  p[c + 13] = 0;
  var d = hb(p[c + 12] * 12);
  p[c + 11] = d;
  p[c + 9] = 16;
  p[c + 10] = 0;
  d = hb(p[c + 9] << 2);
  p[c + 8] = d;
}

function Vc(c, d) {
  var e;
  if ((p[c + 10] == p[c + 9] ? 1 : 2) == 1) {
    e = p[c + 8];
    p[c + 9] <<= 1;
    var f = hb(p[c + 9] << 2);
    p[c + 8] = f;
    for (var f = e, g = e + 1 * ((p[c + 10] << 2) / 4), i = p[c + 8]; f < g; f++, i++) p[i] = p[f], t[i] = t[f];
    vc(e);
  }
  p[p[c + 8] + p[c + 10]] = d;
  p[c + 10] += 1;
}

Vc.X = 1;

function Wc(c, d) {
  var e, f;
  e = d == p[c + 14] ? 1 : 2;
  if (e == 1) f = 1; else if (e == 2) {
    e = p[c + 13] == p[c + 12] ? 3 : 4;
    if (e == 3) {
      e = p[c + 11];
      p[c + 12] <<= 1;
      f = hb(p[c + 12] * 12);
      p[c + 11] = f;
      f = e;
      for (var g = e + 3 * (p[c + 13] * 12 / 12), i = p[c + 11]; f < g; f++, i++) p[i] = p[f], t[i] = t[f];
      vc(e);
    }
    p[p[c + 11] + p[c + 13] * 3] = d < p[c + 14] ? d : p[c + 14];
    p[p[c + 11] + p[c + 13] * 3 + 1] = d > p[c + 14] ? d : p[c + 14];
    p[c + 13] += 1;
    f = 1;
  }
  return f;
}

Wc.X = 1;

function Xc(c, d, e) {
  tc(c, t[d + 3] * t[e] - t[d + 2] * t[e + 1] + t[d], t[d + 2] * t[e] + t[d + 3] * t[e + 1] + t[d + 1]);
}

Xc.X = 1;

function J(c, d, e) {
  tc(c, t[d] - t[e], t[d + 1] - t[e + 1]);
}

function K(c, d) {
  return t[c] * t[d] + t[c + 1] * t[d + 1];
}

function ad(c, d, e) {
  var f;
  f = t[e] - t[d];
  e = t[e + 1] - t[d + 1];
  tc(c, t[d + 3] * f + t[d + 2] * e, -t[d + 2] * f + t[d + 3] * e);
}

ad.X = 1;

function N(c, d, e) {
  tc(c, d * t[e], d * t[e + 1]);
}

function O(c, d, e) {
  tc(c, t[d] + t[e], t[d + 1] + t[e + 1]);
}

function bd(c, d, e, f, g) {
  var i = b;
  b += 6;
  var h = i + 2, j = i + 4;
  p[c + 15] = 0;
  Xc(i, e, d + 3);
  Xc(h, g, f + 3);
  J(j, h, i);
  e = K(j, j);
  g = t[d + 2] + t[f + 2];
  if ((e > g * g ? 2 : 1) == 1) p[c + 14] = 0, e = c + 12, d += 3, p[e] = p[d], t[e] = t[d], p[e + 1] = p[d + 1], t[e + 1] = t[d + 1], hc(c + 10), p[c + 15] = 1, f += 3, p[c] = p[f], t[c] = t[f], p[c + 1] = p[f + 1], t[c + 1] = t[f + 1], p[c + 4] = 0;
  b = i;
}

bd.X = 1;

function cd(c, d, e, f, g) {
  var i = b;
  b += 32;
  var h, j = i + 2, k, l, m, n, o, r = i + 4, q = i + 6, s = i + 8, u = i + 10, x = i + 12, v = i + 14, y = i + 16, z = i + 18, B = i + 20, E = i + 22, D = i + 24, H = i + 26, I = i + 28, M = i + 30;
  p[c + 15] = 0;
  Xc(i, g, f + 3);
  ad(j, e, i);
  e = 0;
  g = -3.4028234663852886e+38;
  k = t[d + 2] + t[f + 2];
  l = p[d + 37];
  m = d + 5;
  d += 21;
  for (n = 0; ; ) {
    if (n >= l) {
      h = 6;
      break;
    }
    h = d + (n << 1);
    J(r, j, m + (n << 1));
    o = K(h, r);
    if (o > k) {
      h = 18;
      break;
    }
    h = o > g ? 4 : 5;
    h == 4 && (g = o, e = n);
    n += 1;
  }
  a : do if (h == 6) {
    r = e;
    if (r + 1 < l) h = 7; else {
      var G = 0;
      h = 8;
    }
    h == 7 && (G = r + 1);
    h = G;
    n = q;
    o = m + (r << 1);
    p[n] = p[o];
    t[n] = t[o];
    p[n + 1] = p[o + 1];
    t[n + 1] = t[o + 1];
    n = s;
    h = m + (h << 1);
    p[n] = p[h];
    t[n] = t[h];
    p[n + 1] = p[h + 1];
    t[n + 1] = t[h + 1];
    h = g < 1.1920928955078125e-7 ? 9 : 10;
    if (h == 9) p[c + 15] = 1, p[c + 14] = 1, r = c + 10, n = d + (e << 1), p[r] = p[n], t[r] = t[n], p[r + 1] = p[n + 1], t[r + 1] = t[n + 1], r = c + 12, O(x, q, s), N(u, .5, x), n = u, p[r] = p[n], t[r] = t[n], p[r + 1] = p[n + 1], t[r + 1] = t[n + 1], r = c, n = f + 3, p[r] = p[n], t[r] = t[n], p[r + 1] = p[n + 1], t[r + 1] = t[n + 1], p[c + 4] = 0; else if (h == 10) if (J(v, j, q), J(y, s, q), h = K(v, y), J(z, j, s), J(B, q, s), n = K(z, B), h = h <= 0 ? 11 : 13, h == 11) {
      if (dd(j, q) > k * k) break a;
      p[c + 15] = 1;
      p[c + 14] = 1;
      r = c + 10;
      J(E, j, q);
      n = E;
      p[r] = p[n];
      t[r] = t[n];
      p[r + 1] = p[n + 1];
      t[r + 1] = t[n + 1];
      ed(c + 10);
      r = c + 12;
      n = q;
      p[r] = p[n];
      t[r] = t[n];
      p[r + 1] = p[n + 1];
      t[r + 1] = t[n + 1];
      r = c;
      n = f + 3;
      p[r] = p[n];
      t[r] = t[n];
      p[r + 1] = p[n + 1];
      t[r + 1] = t[n + 1];
      p[c + 4] = 0;
    } else if (h == 13) if (h = n <= 0 ? 14 : 16, h == 14) {
      if (dd(j, s) > k * k) break a;
      p[c + 15] = 1;
      p[c + 14] = 1;
      r = c + 10;
      J(D, j, s);
      n = D;
      p[r] = p[n];
      t[r] = t[n];
      p[r + 1] = p[n + 1];
      t[r + 1] = t[n + 1];
      ed(c + 10);
      r = c + 12;
      n = s;
      p[r] = p[n];
      t[r] = t[n];
      p[r + 1] = p[n + 1];
      t[r + 1] = t[n + 1];
      r = c;
      n = f + 3;
      p[r] = p[n];
      t[r] = t[n];
      p[r + 1] = p[n + 1];
      t[r + 1] = t[n + 1];
      p[c + 4] = 0;
    } else if (h == 16) {
      O(I, q, s);
      N(H, .5, I);
      J(M, j, H);
      n = K(M, d + (r << 1));
      if (n > k) break a;
      p[c + 15] = 1;
      p[c + 14] = 1;
      n = c + 10;
      r = d + (r << 1);
      p[n] = p[r];
      t[n] = t[r];
      p[n + 1] = p[r + 1];
      t[n + 1] = t[r + 1];
      r = c + 12;
      n = H;
      p[r] = p[n];
      t[r] = t[n];
      p[r + 1] = p[n + 1];
      t[r + 1] = t[n + 1];
      r = c;
      n = f + 3;
      p[r] = p[n];
      t[r] = t[n];
      p[r + 1] = p[n + 1];
      t[r + 1] = t[n + 1];
      p[c + 4] = 0;
    }
  } while (0);
  b = i;
}

cd.X = 1;

function dd(c, d) {
  var e = b;
  b += 2;
  J(e, c, d);
  var f = K(e, e);
  b = e;
  return f;
}

function ed(c) {
  var d, e, f;
  f = fd(c);
  d = f < 1.1920928955078125e-7 ? 1 : 2;
  d == 1 ? e = 0 : d == 2 && (d = 1 / f, t[c] *= d, t[c + 1] *= d, e = f);
  return e;
}

function fd(c) {
  return gd(t[c] * t[c] + t[c + 1] * t[c + 1]);
}

function hd(c, d, e, f, g) {
  var i = b;
  b += 56;
  var h = i + 2, j = i + 4, k = i + 6, l = i + 8, m;
  m = i + 10;
  var n;
  n = i + 12;
  var o = i + 14, r = i + 18, q = i + 20, s = i + 22, u = i + 24, x = i + 26, v = i + 28, y = i + 30, z = i + 32, B = i + 34, E = i + 36, D = i + 38, H = i + 40, I = i + 42, M = i + 44, G = i + 46, S = i + 48, P = i + 50, L = i + 52, T = i + 54;
  p[c + 15] = 0;
  Xc(h, g, f + 3);
  ad(i, e, h);
  e = d + 3;
  p[j] = p[e];
  t[j] = t[e];
  p[j + 1] = p[e + 1];
  t[j + 1] = t[e + 1];
  e = d + 5;
  p[k] = p[e];
  t[k] = t[e];
  p[k + 1] = p[e + 1];
  t[k + 1] = t[e + 1];
  J(l, k, j);
  J(m, k, i);
  m = K(l, m);
  J(n, i, j);
  n = K(l, n);
  e = t[d + 2] + t[f + 2];
  p[o + 1] = 0;
  p[o + 3] = 0;
  g = n <= 0 ? 1 : 5;
  a : do if (g == 1) if (g = r, h = j, p[g] = p[h], t[g] = t[h], p[g + 1] = p[h + 1], t[g + 1] = t[h + 1], J(q, i, r), g = K(q, q), g > e * e) g = 16; else {
    g = p[d + 11] & 1 ? 3 : 4;
    if (g == 3) {
      var h = s, F = d + 7;
      p[h] = p[F];
      t[h] = t[F];
      p[h + 1] = p[F + 1];
      t[h + 1] = t[F + 1];
      h = u;
      F = j;
      p[h] = p[F];
      t[h] = t[F];
      p[h + 1] = p[F + 1];
      t[h + 1] = t[F + 1];
      J(x, u, s);
      J(v, u, i);
      h = K(x, v);
      if (h > 0) break a;
    }
    p[o] = 0;
    p[o + 2] = 0;
    p[c + 15] = 1;
    p[c + 14] = 0;
    hc(c + 10);
    h = c + 12;
    F = r;
    p[h] = p[F];
    t[h] = t[F];
    p[h + 1] = p[F + 1];
    t[h + 1] = t[F + 1];
    p[c + 4] = 0;
    h = c + 4;
    F = o;
    p[h] = p[F];
    t[h] = t[F];
    p[h + 1] = p[F + 1];
    t[h + 1] = t[F + 1];
    p[h + 2] = p[F + 2];
    t[h + 2] = t[F + 2];
    p[h + 3] = p[F + 3];
    t[h + 3] = t[F + 3];
    h = c;
    F = f + 3;
    p[h] = p[F];
    t[h] = t[F];
    p[h + 1] = p[F + 1];
    t[h + 1] = t[F + 1];
  } else if (g == 5) if (g = m <= 0 ? 6 : 10, g == 6) {
    g = y;
    h = k;
    p[g] = p[h];
    t[g] = t[h];
    p[g + 1] = p[h + 1];
    t[g + 1] = t[h + 1];
    J(z, i, y);
    g = K(z, z);
    if (g > e * e) break a;
    g = p[d + 12] & 1 ? 8 : 9;
    if (g == 8 && (h = B, F = d + 9, p[h] = p[F], t[h] = t[F], p[h + 1] = p[F + 1], t[h + 1] = t[F + 1], h = E, F = k, p[h] = p[F], t[h] = t[F], p[h + 1] = p[F + 1], t[h + 1] = t[F + 1], J(D, B, E), J(H, i, E), h = K(D, H), h > 0)) break a;
    p[o] = 1;
    p[o + 2] = 0;
    p[c + 15] = 1;
    p[c + 14] = 0;
    hc(c + 10);
    h = c + 12;
    F = y;
    p[h] = p[F];
    t[h] = t[F];
    p[h + 1] = p[F + 1];
    t[h + 1] = t[F + 1];
    p[c + 4] = 0;
    h = c + 4;
    F = o;
    p[h] = p[F];
    t[h] = t[F];
    p[h + 1] = p[F + 1];
    t[h + 1] = t[F + 1];
    p[h + 2] = p[F + 2];
    t[h + 2] = t[F + 2];
    p[h + 3] = p[F + 3];
    t[h + 3] = t[F + 3];
    h = c;
    F = f + 3;
    p[h] = p[F];
    t[h] = t[F];
    p[h + 1] = p[F + 1];
    t[h + 1] = t[F + 1];
  } else if (g == 10) {
    h = K(l, l);
    g = h > 0 ? 12 : 11;
    g == 11 && Q(id, 127, jd, Ud);
    g = 1 / h;
    N(G, m, j);
    N(S, n, k);
    O(M, G, S);
    N(I, g, M);
    J(P, i, I);
    g = K(P, P);
    if (g > e * e) break a;
    tc(L, -t[l + 1], t[l]);
    J(T, i, j);
    g = K(L, T) < 0 ? 14 : 15;
    g == 14 && sc(L, -t[L], -t[L + 1]);
    ed(L);
    p[o] = 0;
    p[o + 2] = 1;
    p[c + 15] = 1;
    p[c + 14] = 1;
    h = c + 10;
    F = L;
    p[h] = p[F];
    t[h] = t[F];
    p[h + 1] = p[F + 1];
    t[h + 1] = t[F + 1];
    h = c + 12;
    F = j;
    p[h] = p[F];
    t[h] = t[F];
    p[h + 1] = p[F + 1];
    t[h + 1] = t[F + 1];
    p[c + 4] = 0;
    h = c + 4;
    F = o;
    p[h] = p[F];
    t[h] = t[F];
    p[h + 1] = p[F + 1];
    t[h + 1] = t[F + 1];
    p[h + 2] = p[F + 2];
    t[h + 2] = t[F + 2];
    p[h + 3] = p[F + 3];
    t[h + 3] = t[F + 3];
    h = c;
    F = f + 3;
    p[h] = p[F];
    t[h] = t[F];
    p[h + 1] = p[F + 1];
    t[h + 1] = t[F + 1];
  } while (0);
  b = i;
}

hd.X = 1;

function Vd(c, d, e, f, g, i) {
  var h = b;
  b += 125;
  var j, k = h + 4, l, m, n = h + 6, o, r = h + 8, q, s, u, x, v = h + 10, y = h + 12, z = h + 14, B = h + 16, E = h + 18, D = h + 20, H = h + 22, I = h + 24, M = h + 26, G = h + 28, S = h + 30, P = h + 32, L = h + 34, T = h + 36, F = h + 38, Z = h + 40, aa = h + 42, W = h + 44, ca = h + 46, la = h + 48, $ = h + 50, X = h + 52, ba = h + 54, ha = h + 56, na = h + 58, ia = h + 60, ma = h + 62, qa = h + 64, xa = h + 66, Fa = h + 68, Pa = h + 70, Ga, Za = h + 72, xb = h + 74, La = h + 76, bb = h + 79, Ua = h + 82, ra = h + 85, ja = h + 91, Ea, Da, za, Qa, oa, Ra, Ma = h + 105, Ba = h + 107, Va = h + 109, Ha = h + 115, Nb, bc, Wa, kc, Ub = h + 121, cb, lc = h + 123, Cb = c + 33, db = b;
  b += 6;
  var Vb = db + 2, Ob = db + 4, Hb = h + 2, Ib = f + 2, jb = i + 2;
  t[db] = t[Ib + 1] * t[jb] - t[Ib] * t[jb + 1];
  t[db + 1] = t[Ib + 1] * t[jb + 1] + t[Ib] * t[jb];
  p[Hb] = p[db];
  t[Hb] = t[db];
  p[Hb + 1] = p[db + 1];
  t[Hb + 1] = t[db + 1];
  var cc = f + 2;
  J(Ob, i, f);
  Wd(Vb, cc, Ob);
  p[h] = p[Vb];
  t[h] = t[Vb];
  p[h + 1] = p[Vb + 1];
  t[h + 1] = t[Vb + 1];
  b = db;
  p[Cb] = p[h];
  t[Cb] = t[h];
  p[Cb + 1] = p[h + 1];
  t[Cb + 1] = t[h + 1];
  p[Cb + 2] = p[h + 2];
  t[Cb + 2] = t[h + 2];
  p[Cb + 3] = p[h + 3];
  t[Cb + 3] = t[h + 3];
  var dc = c + 37;
  Xc(k, c + 33, g + 3);
  p[dc] = p[k];
  t[dc] = t[k];
  p[dc + 1] = p[k + 1];
  t[dc + 1] = t[k + 1];
  var kb = c + 39, Db = e + 7;
  p[kb] = p[Db];
  t[kb] = t[Db];
  p[kb + 1] = p[Db + 1];
  t[kb + 1] = t[Db + 1];
  var lb = c + 41, Oa = e + 3;
  p[lb] = p[Oa];
  t[lb] = t[Oa];
  p[lb + 1] = p[Oa + 1];
  t[lb + 1] = t[Oa + 1];
  var ec = c + 43, mb = e + 5;
  p[ec] = p[mb];
  t[ec] = t[mb];
  p[ec + 1] = p[mb + 1];
  t[ec + 1] = t[mb + 1];
  var Jb = c + 45, nb = e + 9;
  p[Jb] = p[nb];
  t[Jb] = t[nb];
  p[Jb + 1] = p[nb + 1];
  t[Jb + 1] = t[nb + 1];
  l = p[e + 11] & 1;
  m = p[e + 12] & 1;
  J(n, c + 43, c + 41);
  ed(n);
  sc(c + 49, t[n + 1], -t[n]);
  var Kb = c + 49;
  J(r, c + 37, c + 41);
  o = K(Kb, r);
  x = u = s = q = 0;
  j = l & 1 ? 1 : 2;
  if (j == 1) {
    J(v, c + 41, c + 39);
    ed(v);
    sc(c + 47, t[v + 1], -t[v]);
    u = R(v, n) >= 0;
    var mc = c + 47;
    J(y, c + 37, c + 39);
    q = K(mc, y);
  }
  j = m & 1 ? 3 : 4;
  if (j == 3) {
    J(z, c + 45, c + 43);
    ed(z);
    sc(c + 51, t[z + 1], -t[z]);
    x = R(n, z) > 0;
    var nc = c + 51;
    J(B, c + 37, c + 43);
    s = K(nc, B);
  }
  j = l & 1 ? 5 : 34;
  a : do if (j == 5) if (m & 1) {
    j = u & 1 ? 7 : 14;
    do if (j == 7) if (x & 1) {
      if (q >= 0) {
        var yb = 1;
        j = 11;
      } else j = 9;
      j == 9 && (o >= 0 ? (yb = 1, j = 11) : yb = s >= 0);
      p[c + 62] = yb;
      var Wb = c + 53, Xb = c + 49;
      j = p[c + 62] & 1 ? 12 : 13;
      if (j == 12) {
        var zb = Wb, fc = Xb;
        p[zb] = p[fc];
        t[zb] = t[fc];
        p[zb + 1] = p[fc + 1];
        t[zb + 1] = t[fc + 1];
        var Lb = c + 57, oc = c + 47;
        p[Lb] = p[oc];
        t[Lb] = t[oc];
        p[Lb + 1] = p[oc + 1];
        t[Lb + 1] = t[oc + 1];
        var Ab = c + 59, Pb = c + 51;
        p[Ab] = p[Pb];
        t[Ab] = t[Pb];
        p[Ab + 1] = p[Pb + 1];
        t[Ab + 1] = t[Pb + 1];
        j = 61;
        break a;
      } else if (j == 13) {
        Xd(E, Xb);
        var Bb = Wb, ob = E;
        p[Bb] = p[ob];
        t[Bb] = t[ob];
        p[Bb + 1] = p[ob + 1];
        t[Bb + 1] = t[ob + 1];
        var gc = c + 57;
        Xd(D, c + 49);
        var pc = gc, Yb = D;
        p[pc] = p[Yb];
        t[pc] = t[Yb];
        p[pc + 1] = p[Yb + 1];
        t[pc + 1] = t[Yb + 1];
        var Ic = c + 59;
        Xd(H, c + 49);
        var qc = Ic, pb = H;
        p[qc] = p[pb];
        t[qc] = t[pb];
        p[qc + 1] = p[pb + 1];
        t[qc + 1] = t[pb + 1];
        j = 61;
        break a;
      }
    } else j = 14; while (0);
    j = u & 1 ? 15 : 21;
    if (j == 15) {
      if (q >= 0) {
        var he = 1;
        j = 18;
      } else j = 16;
      j == 16 && (o >= 0 ? he = s >= 0 : (he = 0, j = 18));
      p[c + 62] = he;
      var af = c + 53, bf = c + 49;
      j = p[c + 62] & 1 ? 19 : 20;
      if (j == 19) {
        var kd = af, ld = bf;
        p[kd] = p[ld];
        t[kd] = t[ld];
        p[kd + 1] = p[ld + 1];
        t[kd + 1] = t[ld + 1];
        var md = c + 57, nd = c + 47;
        p[md] = p[nd];
        t[md] = t[nd];
        p[md + 1] = p[nd + 1];
        t[md + 1] = t[nd + 1];
        var od = c + 59, pd = c + 49;
        p[od] = p[pd];
        t[od] = t[pd];
        p[od + 1] = p[pd + 1];
        t[od + 1] = t[pd + 1];
        j = 61;
        break a;
      } else if (j == 20) {
        Xd(I, bf);
        var qd = af, rd = I;
        p[qd] = p[rd];
        t[qd] = t[rd];
        p[qd + 1] = p[rd + 1];
        t[qd + 1] = t[rd + 1];
        var Lh = c + 57;
        Xd(M, c + 51);
        var sd = Lh, td = M;
        p[sd] = p[td];
        t[sd] = t[td];
        p[sd + 1] = p[td + 1];
        t[sd + 1] = t[td + 1];
        var Mh = c + 59;
        Xd(G, c + 49);
        var ud = Mh, vd = G;
        p[ud] = p[vd];
        t[ud] = t[vd];
        p[ud + 1] = p[vd + 1];
        t[ud + 1] = t[vd + 1];
        j = 61;
        break a;
      }
    } else if (j == 21) if (j = x & 1 ? 22 : 28, j == 22) {
      if (s >= 0) {
        var ie = 1;
        j = 25;
      } else j = 23;
      j == 23 && (q >= 0 ? ie = o >= 0 : (ie = 0, j = 25));
      p[c + 62] = ie;
      var cf = c + 53, df = c + 49;
      j = p[c + 62] & 1 ? 26 : 27;
      if (j == 26) {
        var wd = cf, xd = df;
        p[wd] = p[xd];
        t[wd] = t[xd];
        p[wd + 1] = p[xd + 1];
        t[wd + 1] = t[xd + 1];
        var yd = c + 57, zd = c + 49;
        p[yd] = p[zd];
        t[yd] = t[zd];
        p[yd + 1] = p[zd + 1];
        t[yd + 1] = t[zd + 1];
        var Ad = c + 59, Bd = c + 51;
        p[Ad] = p[Bd];
        t[Ad] = t[Bd];
        p[Ad + 1] = p[Bd + 1];
        t[Ad + 1] = t[Bd + 1];
        j = 61;
        break a;
      } else if (j == 27) {
        Xd(S, df);
        var Cd = cf, Dd = S;
        p[Cd] = p[Dd];
        t[Cd] = t[Dd];
        p[Cd + 1] = p[Dd + 1];
        t[Cd + 1] = t[Dd + 1];
        var Nh = c + 57;
        Xd(P, c + 49);
        var Ed = Nh, Fd = P;
        p[Ed] = p[Fd];
        t[Ed] = t[Fd];
        p[Ed + 1] = p[Fd + 1];
        t[Ed + 1] = t[Fd + 1];
        var Oh = c + 59;
        Xd(L, c + 47);
        var Gd = Oh, Ac = L;
        p[Gd] = p[Ac];
        t[Gd] = t[Ac];
        p[Gd + 1] = p[Ac + 1];
        t[Gd + 1] = t[Ac + 1];
        j = 61;
        break a;
      }
    } else if (j == 28) {
      if (q >= 0) j = 29; else {
        var Jc = 0;
        j = 31;
      }
      j == 29 && (o >= 0 ? Jc = s >= 0 : (Jc = 0, j = 31));
      p[c + 62] = Jc;
      var Yc = c + 53, je = c + 49;
      j = p[c + 62] & 1 ? 32 : 33;
      if (j == 32) {
        var Zc = Yc, $c = je;
        p[Zc] = p[$c];
        t[Zc] = t[$c];
        p[Zc + 1] = p[$c + 1];
        t[Zc + 1] = t[$c + 1];
        var Hd = c + 57, Id = c + 49;
        p[Hd] = p[Id];
        t[Hd] = t[Id];
        p[Hd + 1] = p[Id + 1];
        t[Hd + 1] = t[Id + 1];
        var Jd = c + 59, Kd = c + 49;
        p[Jd] = p[Kd];
        t[Jd] = t[Kd];
        p[Jd + 1] = p[Kd + 1];
        t[Jd + 1] = t[Kd + 1];
        j = 61;
        break a;
      } else if (j == 33) {
        Xd(T, je);
        var Ld = Yc, Md = T;
        p[Ld] = p[Md];
        t[Ld] = t[Md];
        p[Ld + 1] = p[Md + 1];
        t[Ld + 1] = t[Md + 1];
        var ef = c + 57;
        Xd(F, c + 51);
        var Nd = ef, Od = F;
        p[Nd] = p[Od];
        t[Nd] = t[Od];
        p[Nd + 1] = p[Od + 1];
        t[Nd + 1] = t[Od + 1];
        var Pd = c + 59;
        Xd(Z, c + 47);
        var Bc = Pd, ff = Z;
        p[Bc] = p[ff];
        t[Bc] = t[ff];
        p[Bc + 1] = p[ff + 1];
        t[Bc + 1] = t[ff + 1];
        j = 61;
        break a;
      }
    }
  } else j = 34; while (0);
  if (j == 34) if (j = l & 1 ? 35 : 46, j == 35) {
    var Dk = q >= 0;
    j = u & 1 ? 36 : 41;
    if (j == 36) {
      if (Dk) {
        var Ek = 1;
        j = 38;
      } else j = 37;
      j == 37 && (Ek = o >= 0);
      p[c + 62] = Ek;
      var Kc = c + 53, ke = c + 49;
      j = p[c + 62] & 1 ? 39 : 40;
      if (j == 39) {
        p[Kc] = p[ke];
        t[Kc] = t[ke];
        p[Kc + 1] = p[ke + 1];
        t[Kc + 1] = t[ke + 1];
        var gf = c + 57, hf = c + 47;
        p[gf] = p[hf];
        t[gf] = t[hf];
        p[gf + 1] = p[hf + 1];
        t[gf + 1] = t[hf + 1];
        var jf = c + 59;
        Xd(aa, c + 49);
        p[jf] = p[aa];
        t[jf] = t[aa];
        p[jf + 1] = p[aa + 1];
        t[jf + 1] = t[aa + 1];
      } else if (j == 40) {
        Xd(W, ke);
        p[Kc] = p[W];
        t[Kc] = t[W];
        p[Kc + 1] = p[W + 1];
        t[Kc + 1] = t[W + 1];
        var kf = c + 57, lf = c + 49;
        p[kf] = p[lf];
        t[kf] = t[lf];
        p[kf + 1] = p[lf + 1];
        t[kf + 1] = t[lf + 1];
        var mf = c + 59;
        Xd(ca, c + 49);
        p[mf] = p[ca];
        t[mf] = t[ca];
        p[mf + 1] = p[ca + 1];
        t[mf + 1] = t[ca + 1];
      }
    } else if (j == 41) {
      if (Dk) j = 42; else {
        var Fk = 0;
        j = 43;
      }
      j == 42 && (Fk = o >= 0);
      p[c + 62] = Fk;
      var Lc = c + 53, le = c + 49;
      j = p[c + 62] & 1 ? 44 : 45;
      if (j == 44) {
        p[Lc] = p[le];
        t[Lc] = t[le];
        p[Lc + 1] = p[le + 1];
        t[Lc + 1] = t[le + 1];
        var nf = c + 57, of = c + 49;
        p[nf] = p[of];
        t[nf] = t[of];
        p[nf + 1] = p[of + 1];
        t[nf + 1] = t[of + 1];
        var pf = c + 59;
        Xd(la, c + 49);
        p[pf] = p[la];
        t[pf] = t[la];
        p[pf + 1] = p[la + 1];
        t[pf + 1] = t[la + 1];
      } else if (j == 45) {
        Xd($, le);
        p[Lc] = p[$];
        t[Lc] = t[$];
        p[Lc + 1] = p[$ + 1];
        t[Lc + 1] = t[$ + 1];
        var qf = c + 57, rf = c + 49;
        p[qf] = p[rf];
        t[qf] = t[rf];
        p[qf + 1] = p[rf + 1];
        t[qf + 1] = t[rf + 1];
        var sf = c + 59;
        Xd(X, c + 47);
        p[sf] = p[X];
        t[sf] = t[X];
        p[sf + 1] = p[X + 1];
        t[sf + 1] = t[X + 1];
      }
    }
  } else if (j == 46) if (j = m & 1 ? 47 : 58, j == 47) {
    var Gk = o >= 0;
    j = x & 1 ? 48 : 53;
    if (j == 48) {
      if (Gk) {
        var Hk = 1;
        j = 50;
      } else j = 49;
      j == 49 && (Hk = s >= 0);
      p[c + 62] = Hk;
      var Mc = c + 53, me = c + 49;
      j = p[c + 62] & 1 ? 51 : 52;
      if (j == 51) {
        p[Mc] = p[me];
        t[Mc] = t[me];
        p[Mc + 1] = p[me + 1];
        t[Mc + 1] = t[me + 1];
        var tf = c + 57;
        Xd(ba, c + 49);
        p[tf] = p[ba];
        t[tf] = t[ba];
        p[tf + 1] = p[ba + 1];
        t[tf + 1] = t[ba + 1];
        var uf = c + 59, vf = c + 51;
        p[uf] = p[vf];
        t[uf] = t[vf];
        p[uf + 1] = p[vf + 1];
        t[uf + 1] = t[vf + 1];
      } else if (j == 52) {
        Xd(ha, me);
        p[Mc] = p[ha];
        t[Mc] = t[ha];
        p[Mc + 1] = p[ha + 1];
        t[Mc + 1] = t[ha + 1];
        var wf = c + 57;
        Xd(na, c + 49);
        p[wf] = p[na];
        t[wf] = t[na];
        p[wf + 1] = p[na + 1];
        t[wf + 1] = t[na + 1];
        var xf = c + 59, yf = c + 49;
        p[xf] = p[yf];
        t[xf] = t[yf];
        p[xf + 1] = p[yf + 1];
        t[xf + 1] = t[yf + 1];
      }
    } else if (j == 53) {
      if (Gk) j = 54; else {
        var Ik = 0;
        j = 55;
      }
      j == 54 && (Ik = s >= 0);
      p[c + 62] = Ik;
      var Nc = c + 53, ne = c + 49;
      j = p[c + 62] & 1 ? 56 : 57;
      if (j == 56) {
        p[Nc] = p[ne];
        t[Nc] = t[ne];
        p[Nc + 1] = p[ne + 1];
        t[Nc + 1] = t[ne + 1];
        var zf = c + 57;
        Xd(ia, c + 49);
        p[zf] = p[ia];
        t[zf] = t[ia];
        p[zf + 1] = p[ia + 1];
        t[zf + 1] = t[ia + 1];
        var Af = c + 59, Bf = c + 49;
        p[Af] = p[Bf];
        t[Af] = t[Bf];
        p[Af + 1] = p[Bf + 1];
        t[Af + 1] = t[Bf + 1];
      } else if (j == 57) {
        Xd(ma, ne);
        p[Nc] = p[ma];
        t[Nc] = t[ma];
        p[Nc + 1] = p[ma + 1];
        t[Nc + 1] = t[ma + 1];
        var Cf = c + 57;
        Xd(qa, c + 51);
        p[Cf] = p[qa];
        t[Cf] = t[qa];
        p[Cf + 1] = p[qa + 1];
        t[Cf + 1] = t[qa + 1];
        var Df = c + 59, Ef = c + 49;
        p[Df] = p[Ef];
        t[Df] = t[Ef];
        p[Df + 1] = p[Ef + 1];
        t[Df + 1] = t[Ef + 1];
      }
    }
  } else if (j == 58) {
    p[c + 62] = o >= 0;
    var Oc = c + 53, oe = c + 49;
    j = p[c + 62] & 1 ? 59 : 60;
    if (j == 59) {
      p[Oc] = p[oe];
      t[Oc] = t[oe];
      p[Oc + 1] = p[oe + 1];
      t[Oc + 1] = t[oe + 1];
      var Ff = c + 57;
      Xd(xa, c + 49);
      p[Ff] = p[xa];
      t[Ff] = t[xa];
      p[Ff + 1] = p[xa + 1];
      t[Ff + 1] = t[xa + 1];
      var Gf = c + 59;
      Xd(Fa, c + 49);
      p[Gf] = p[Fa];
      t[Gf] = t[Fa];
      p[Gf + 1] = p[Fa + 1];
      t[Gf + 1] = t[Fa + 1];
    } else if (j == 60) {
      Xd(Pa, oe);
      p[Oc] = p[Pa];
      t[Oc] = t[Pa];
      p[Oc + 1] = p[Pa + 1];
      t[Oc + 1] = t[Pa + 1];
      var Hf = c + 57, If = c + 49;
      p[Hf] = p[If];
      t[Hf] = t[If];
      p[Hf + 1] = p[If + 1];
      t[Hf + 1] = t[If + 1];
      var Jf = c + 59, Kf = c + 49;
      p[Jf] = p[Kf];
      t[Jf] = t[Kf];
      p[Jf + 1] = p[Kf + 1];
      t[Jf + 1] = t[Kf + 1];
    }
  }
  p[c + 32] = p[g + 37];
  Ga = 0;
  j = Ga < p[g + 37] ? 62 : 64;
  a : do if (j == 62) for (var Jq = c, Kq = c + 33, Lf = Za, Lq = c + 16, Mq = c + 35, Mf = xb; ; ) {
    var Nq = Jq + (Ga << 1);
    Xc(Za, Kq, g + 5 + (Ga << 1));
    var Nf = Nq;
    p[Nf] = p[Lf];
    t[Nf] = t[Lf];
    p[Nf + 1] = p[Lf + 1];
    t[Nf + 1] = t[Lf + 1];
    var Oq = Lq + (Ga << 1);
    U(xb, Mq, g + 21 + (Ga << 1));
    var Of = Oq;
    p[Of] = p[Mf];
    t[Of] = t[Mf];
    p[Of + 1] = p[Mf + 1];
    t[Of + 1] = t[Mf + 1];
    Ga += 1;
    if (Ga >= p[g + 37]) {
      j = 64;
      break a;
    }
  } while (0);
  t[c + 61] = .019999999552965164;
  p[d + 15] = 0;
  Yd(La, c);
  j = p[La] == 0 ? 100 : 65;
  a : do if (j == 65) if (t[La + 2] > t[c + 61]) j = 100; else {
    Zd(bb, c);
    j = p[bb] != 0 ? 67 : 68;
    if (j == 67 && t[bb + 2] > t[c + 61]) {
      j = 100;
      break a;
    }
    j = p[bb] == 0 ? 69 : 70;
    if (j == 69) {
      var Qd = Ua, Rd = La;
      p[Qd] = p[Rd];
      t[Qd] = t[Rd];
      p[Qd + 1] = p[Rd + 1];
      t[Qd + 1] = t[Rd + 1];
      p[Qd + 2] = p[Rd + 2];
      t[Qd + 2] = t[Rd + 2];
    } else if (j == 70) {
      var Zb = Ua;
      j = t[bb + 2] > t[La + 2] * .9800000190734863 + .0010000000474974513 ? 71 : 72;
      if (j == 71) {
        var Sd = bb;
        p[Zb] = p[Sd];
        t[Zb] = t[Sd];
        p[Zb + 1] = p[Sd + 1];
        t[Zb + 1] = t[Sd + 1];
        p[Zb + 2] = p[Sd + 2];
        t[Zb + 2] = t[Sd + 2];
      } else if (j == 72) {
        var Td = La;
        p[Zb] = p[Td];
        t[Zb] = t[Td];
        p[Zb + 1] = p[Td + 1];
        t[Zb + 1] = t[Td + 1];
        p[Zb + 2] = p[Td + 2];
        t[Zb + 2] = t[Td + 2];
      }
    }
    var Lk = d + 14;
    j = p[Ua] == 1 ? 74 : 84;
    if (j == 74) {
      p[Lk] = 1;
      Ea = 0;
      Da = K(c + 53, c + 16);
      za = 1;
      var Mk = c + 32;
      j = za < p[Mk] ? 75 : 79;
      b : do if (j == 75) for (var Pq = c + 53, Qq = c + 16; ; ) if (Qa = K(Pq, Qq + (za << 1)), j = Qa < Da ? 77 : 78, j == 77 && (Da = Qa, Ea = za), za += 1, za >= p[Mk]) {
        j = 79;
        break b;
      } while (0);
      oa = Ea;
      if (oa + 1 < p[c + 32]) j = 80; else {
        var Nk = 0;
        j = 81;
      }
      j == 80 && (Nk = oa + 1);
      Ra = Nk;
      var Pf = ra, Qf = c + (oa << 1);
      p[Pf] = p[Qf];
      t[Pf] = t[Qf];
      p[Pf + 1] = p[Qf + 1];
      t[Pf + 1] = t[Qf + 1];
      p[ra + 2] = 0;
      p[ra + 3] = oa & 255;
      p[ra + 4] = 1;
      p[ra + 5] = 0;
      var Rf = ra + 3, Sf = c + (Ra << 1);
      p[Rf] = p[Sf];
      t[Rf] = t[Sf];
      p[Rf + 1] = p[Sf + 1];
      t[Rf + 1] = t[Sf + 1];
      p[ra + 5] = 0;
      p[ra + 6] = Ra & 255;
      p[ra + 7] = 1;
      p[ra + 8] = 0;
      var Ok = ja;
      j = p[c + 62] & 1 ? 82 : 83;
      if (j == 82) {
        p[Ok] = 0;
        p[ja + 1] = 1;
        var Tf = ja + 2, Uf = c + 41;
        p[Tf] = p[Uf];
        t[Tf] = t[Uf];
        p[Tf + 1] = p[Uf + 1];
        t[Tf + 1] = t[Uf + 1];
        var Vf = ja + 4, Wf = c + 43;
        p[Vf] = p[Wf];
        t[Vf] = t[Wf];
        p[Vf + 1] = p[Wf + 1];
        t[Vf + 1] = t[Wf + 1];
        var Xf = ja + 6, Yf = c + 49;
        p[Xf] = p[Yf];
        t[Xf] = t[Yf];
        p[Xf + 1] = p[Yf + 1];
        t[Xf + 1] = t[Yf + 1];
      } else if (j == 83) {
        p[Ok] = 1;
        p[ja + 1] = 0;
        var Zf = ja + 2, $f = c + 43;
        p[Zf] = p[$f];
        t[Zf] = t[$f];
        p[Zf + 1] = p[$f + 1];
        t[Zf + 1] = t[$f + 1];
        var ag = ja + 4, bg = c + 41;
        p[ag] = p[bg];
        t[ag] = t[bg];
        p[ag + 1] = p[bg + 1];
        t[ag + 1] = t[bg + 1];
        var Rq = ja + 6;
        Xd(Ma, c + 49);
        var cg = Rq, dg = Ma;
        p[cg] = p[dg];
        t[cg] = t[dg];
        p[cg + 1] = p[dg + 1];
        t[cg + 1] = t[dg + 1];
      }
    } else if (j == 84) {
      p[Lk] = 2;
      var eg = ra, fg = c + 41;
      p[eg] = p[fg];
      t[eg] = t[fg];
      p[eg + 1] = p[fg + 1];
      t[eg + 1] = t[fg + 1];
      p[ra + 2] = 0;
      p[ra + 3] = p[Ua + 1] & 255;
      p[ra + 4] = 0;
      p[ra + 5] = 1;
      var gg = ra + 3, hg = c + 43;
      p[gg] = p[hg];
      t[gg] = t[hg];
      p[gg + 1] = p[hg + 1];
      t[gg + 1] = t[hg + 1];
      p[ra + 5] = 0;
      p[ra + 6] = p[Ua + 1] & 255;
      p[ra + 7] = 0;
      p[ra + 8] = 1;
      p[ja] = p[Ua + 1];
      if (p[ja] + 1 < p[c + 32]) j = 85; else {
        var Pk = 0;
        j = 86;
      }
      j == 85 && (Pk = p[ja] + 1);
      p[ja + 1] = Pk;
      var ig = ja + 2, jg = c + (p[ja] << 1);
      p[ig] = p[jg];
      t[ig] = t[jg];
      p[ig + 1] = p[jg + 1];
      t[ig + 1] = t[jg + 1];
      var kg = ja + 4, lg = c + (p[ja + 1] << 1);
      p[kg] = p[lg];
      t[kg] = t[lg];
      p[kg + 1] = p[lg + 1];
      t[kg + 1] = t[lg + 1];
      var mg = ja + 6, ng = c + 16 + (p[ja] << 1);
      p[mg] = p[ng];
      t[mg] = t[ng];
      p[mg + 1] = p[ng + 1];
      t[mg + 1] = t[ng + 1];
    }
    sc(ja + 8, t[ja + 7], -t[ja + 6]);
    var Sq = ja + 11;
    Xd(Ba, ja + 8);
    var og = Sq, pg = Ba;
    p[og] = p[pg];
    t[og] = t[pg];
    p[og + 1] = p[pg + 1];
    t[og + 1] = t[pg + 1];
    t[ja + 10] = K(ja + 8, ja + 2);
    t[ja + 13] = K(ja + 11, ja + 4);
    var Qk = $d(Va, ra, ja + 8, t[ja + 10], p[ja]);
    Nb = Qk;
    if (Qk < 2) j = 100; else if (Nb = $d(Ha, Va, ja + 11, t[ja + 13], p[ja + 1]), Nb < 2) j = 100; else {
      j = p[Ua] == 1 ? 90 : 91;
      if (j == 90) {
        var qg = d + 10, rg = ja + 6;
        p[qg] = p[rg];
        t[qg] = t[rg];
        p[qg + 1] = p[rg + 1];
        t[qg + 1] = t[rg + 1];
        var sg = d + 12, tg = ja + 2;
        p[sg] = p[tg];
        t[sg] = t[tg];
        p[sg + 1] = p[tg + 1];
        t[sg + 1] = t[tg + 1];
      } else if (j == 91) {
        var ug = d + 10, vg = g + 21 + (p[ja] << 1);
        p[ug] = p[vg];
        t[ug] = t[vg];
        p[ug + 1] = p[vg + 1];
        t[ug + 1] = t[vg + 1];
        var wg = d + 12, xg = g + 5 + (p[ja] << 1);
        p[wg] = p[xg];
        t[wg] = t[xg];
        p[wg + 1] = p[xg + 1];
        t[wg + 1] = t[xg + 1];
      }
      Wa = bc = 0;
      for (var Tq = ja + 6, Uq = ja + 2, Vq = c + 61, Wq = Ua, Xq = c + 33, yg = lc; ; ) {
        J(Ub, Ha + Wa * 3, Uq);
        kc = K(Tq, Ub);
        j = kc <= t[Vq] ? 94 : 98;
        if (j == 94) {
          var Rk = cb = d + bc * 5, Sk = Ha + Wa * 3;
          j = p[Wq] == 1 ? 95 : 96;
          if (j == 95) {
            ad(lc, Xq, Sk);
            var zg = Rk;
            p[zg] = p[yg];
            t[zg] = t[yg];
            p[zg + 1] = p[yg + 1];
            t[zg + 1] = t[yg + 1];
            p[cb + 4] = p[Ha + Wa * 3 + 2];
            t[cb + 4] = t[Ha + Wa * 3 + 2];
          } else if (j == 96) {
            var Ag = Rk, Bg = Sk;
            p[Ag] = p[Bg];
            t[Ag] = t[Bg];
            p[Ag + 1] = p[Bg + 1];
            t[Ag + 1] = t[Bg + 1];
            p[cb + 6] = p[Ha + Wa * 3 + 5];
            p[cb + 7] = p[Ha + Wa * 3 + 4];
            p[cb + 4] = p[Ha + Wa * 3 + 3];
            p[cb + 5] = p[Ha + Wa * 3 + 2];
          }
          bc += 1;
        }
        var Tk = Wa + 1;
        Wa = Tk;
        if (Tk >= 2) {
          j = 99;
          break;
        }
      }
      p[d + 15] = bc;
    }
  } while (0);
  b = h;
}

Vd.X = 1;

function R(c, d) {
  return t[c] * t[d + 1] - t[c + 1] * t[d];
}

function Xd(c, d) {
  sc(c, -t[d], -t[d + 1]);
}

function U(c, d, e) {
  tc(c, t[d + 1] * t[e] - t[d] * t[e + 1], t[d] * t[e] + t[d + 1] * t[e + 1]);
}

function Wd(c, d, e) {
  tc(c, t[d + 1] * t[e] + t[d] * t[e + 1], -t[d] * t[e] + t[d + 1] * t[e + 1]);
}

function Yd(c, d) {
  var e = b;
  b += 2;
  var f, g, i;
  p[c] = 1;
  p[c + 1] = p[d + 62] & 1 ? 0 : 1;
  t[c + 2] = 3.4028234663852886e+38;
  g = 0;
  var h = d + 32;
  f = g < p[h] ? 1 : 5;
  a : do if (f == 1) for (var j = d + 53, k = d, l = d + 41, m = c + 2, n = c + 2; ; ) if (J(e, k + (g << 1), l), i = K(j, e), f = i < t[m] ? 3 : 4, f == 3 && (t[n] = i), g += 1, g >= p[h]) break a; while (0);
  b = e;
}

Yd.X = 1;

function Zd(c, d) {
  var e = b;
  b += 12;
  var f, g, i = e + 2, h = e + 4, j, k = e + 6, l = e + 8, m = e + 10;
  p[c] = 0;
  p[c + 1] = -1;
  t[c + 2] = -3.4028234663852886e+38;
  tc(e, -t[d + 54], t[d + 53]);
  g = 0;
  for (var n = d + 32, o = d + 16, r = d + 41, q = d + 43, s = d + 61, u = d + 59, x = d + 53, v = c + 2, y = c + 1, z = c + 2, B = d + 57, E = d + 53; ; ) {
    if (g >= p[n]) {
      f = 10;
      break;
    }
    Xd(i, o + (g << 1));
    J(h, d + (g << 1), r);
    f = K(i, h);
    J(k, d + (g << 1), q);
    j = K(i, k);
    j = f < j ? f : j;
    if (j > t[s]) {
      f = 3;
      break;
    }
    f = K(i, e) >= 0 ? 5 : 6;
    f == 5 ? (J(l, i, u), f = K(l, x) < -.03490658849477768 ? 9 : 7) : f == 6 && (J(m, i, B), f = K(m, E) < -.03490658849477768 ? 9 : 7);
    f == 7 && (j > t[v] ? (p[c] = 2, p[y] = g, t[z] = j) : f = 9);
    g += 1;
  }
  f == 3 && (p[c] = 2, p[c + 1] = g, t[c + 2] = j);
  b = e;
}

Zd.X = 1;

function ae(c, d, e, f, g) {
  var i = b;
  b += 56;
  var h, j, k, l = i + 1, m, n, o = i + 2, r = i + 6, q, s, u = i + 10, x, v, y, z = i + 16, B = i + 18, E = i + 20, D = i + 22, H = i + 24, I = i + 26, M = i + 28, G = i + 30, S = i + 32, P = i + 34, L, T, F = i + 36, Z = i + 42, aa = i + 48, W, ca = i + 50, la = i + 52;
  p[c + 15] = 0;
  j = t[d + 2] + t[f + 2];
  p[i] = 0;
  k = be(i, d, e, f, g);
  h = k > j ? 16 : 1;
  do if (h == 1) if (p[l] = 0, h = be(l, f, g, d, e), h > j) h = 16; else {
    h = h > k * .9800000190734863 + .0010000000474974513 ? 3 : 4;
    h == 3 ? (m = f, n = d, q = o, s = g, p[q] = p[s], t[q] = t[s], p[q + 1] = p[s + 1], t[q + 1] = t[s + 1], p[q + 2] = p[s + 2], t[q + 2] = t[s + 2], p[q + 3] = p[s + 3], t[q + 3] = t[s + 3], q = r, s = e, p[q] = p[s], t[q] = t[s], p[q + 1] = p[s + 1], t[q + 1] = t[s + 1], p[q + 2] = p[s + 2], t[q + 2] = t[s + 2], p[q + 3] = p[s + 3], t[q + 3] = t[s + 3], q = p[l], p[c + 14] = 2, s = 1) : h == 4 && (m = d, n = f, q = o, s = e, p[q] = p[s], t[q] = t[s], p[q + 1] = p[s + 1], t[q + 1] = t[s + 1], p[q + 2] = p[s + 2], t[q + 2] = t[s + 2], p[q + 3] = p[s + 3], t[q + 3] = t[s + 3], q = r, s = g, p[q] = p[s], t[q] = t[s], p[q + 1] = p[s + 1], t[q + 1] = t[s + 1], p[q + 2] = p[s + 2], t[q + 2] = t[s + 2], p[q + 3] = p[s + 3], t[q + 3] = t[s + 3], q = p[i], p[c + 14] = 1, s = 0);
    ce(u, m, o, q, n, r);
    h = p[m + 37];
    x = m + 5;
    v = q;
    if (q + 1 < h) h = 6; else {
      var $ = 0;
      h = 7;
    }
    h == 6 && ($ = q + 1);
    y = $;
    L = z;
    T = x + (v << 1);
    p[L] = p[T];
    t[L] = t[T];
    p[L + 1] = p[T + 1];
    t[L + 1] = t[T + 1];
    L = B;
    x += y << 1;
    p[L] = p[x];
    t[L] = t[x];
    p[L + 1] = p[x + 1];
    t[L + 1] = t[x + 1];
    J(E, B, z);
    ed(E);
    de(D, E);
    O(I, z, B);
    N(H, .5, I);
    U(M, o + 2, E);
    de(G, M);
    Xc(S, o, z);
    x = z;
    L = S;
    p[x] = p[L];
    t[x] = t[L];
    p[x + 1] = p[L + 1];
    t[x + 1] = t[L + 1];
    Xc(P, o, B);
    x = B;
    L = P;
    p[x] = p[L];
    t[x] = t[L];
    p[x + 1] = p[L + 1];
    t[x + 1] = t[L + 1];
    x = K(G, z);
    L = -K(M, z) + j;
    T = K(M, B) + j;
    var X = F, ba = u;
    Xd(aa, M);
    if ($d(X, ba, aa, L, v) < 2) h = 16; else if (v = $d(Z, F, M, T, y), v < 2) h = 16; else {
      v = c + 10;
      y = D;
      p[v] = p[y];
      t[v] = t[y];
      p[v + 1] = p[y + 1];
      t[v + 1] = t[y + 1];
      v = c + 12;
      y = H;
      p[v] = p[y];
      t[v] = t[y];
      p[v + 1] = p[y + 1];
      t[v + 1] = t[y + 1];
      y = v = 0;
      L = ca;
      T = la;
      for (var X = la + 1, ba = la, ha = la + 3, na = la + 2; ; ) {
        h = K(G, Z + y * 3) - x;
        h = h <= j ? 11 : 14;
        if (h == 11) {
          h = W = c + v * 5;
          ad(ca, r, Z + y * 3);
          p[h] = p[L];
          t[h] = t[L];
          p[h + 1] = p[L + 1];
          t[h + 1] = t[L + 1];
          p[W + 4] = p[Z + y * 3 + 2];
          t[W + 4] = t[Z + y * 3 + 2];
          h = s != 0 ? 12 : 13;
          if (h == 12) {
            var ia = W + 4;
            p[T] = p[ia];
            t[T] = t[ia];
            p[T + 1] = p[ia + 1];
            t[T + 1] = t[ia + 1];
            p[T + 2] = p[ia + 2];
            t[T + 2] = t[ia + 2];
            p[T + 3] = p[ia + 3];
            t[T + 3] = t[ia + 3];
            p[W + 4] = p[X];
            p[W + 5] = p[ba];
            p[W + 6] = p[ha];
            p[W + 7] = p[na];
          }
          v += 1;
        }
        y = W = y + 1;
        if (W >= 2) {
          h = 15;
          break;
        }
      }
      p[c + 15] = v;
    }
  } while (0);
  b = i;
}

ae.X = 1;

function de(c, d) {
  tc(c, 1 * t[d + 1], -1 * t[d]);
}

function be(c, d, e, f, g) {
  var i = b;
  b += 8;
  var h, j, k, l;
  h = i + 2;
  var m = i + 4, n = i + 6, o, r, q, s, u, x, v, y;
  k = p[d + 37];
  l = d + 21;
  Xc(h, g, f + 3);
  Xc(m, e, d + 3);
  J(i, h, m);
  Wd(n, e + 2, i);
  m = 0;
  o = -3.4028234663852886e+38;
  r = 0;
  h = r < k ? 1 : 4;
  a : do if (h == 1) for (;;) if (q = K(l + (r << 1), n), h = q > o ? 2 : 3, h == 2 && (o = q, m = r), r += 1, r >= k) break a; while (0);
  l = ee(d, e, m, f, g);
  h = m - 1 >= 0 ? 5 : 6;
  h == 5 ? s = m - 1 : h == 6 && (s = k - 1);
  n = ee(d, e, s, f, g);
  m + 1 < k ? h = 8 : (u = 0, h = 9);
  h == 8 && (u = m + 1);
  o = ee(d, e, u, f, g);
  h = n > l ? 10 : 12;
  if (h == 10) if (n > o) {
    y = -1;
    x = s;
    v = n;
    var z = -1;
    h = 15;
  } else h = 12;
  a : do if (h == 12) if (h = o > l ? 13 : 14, h == 13) {
    y = 1;
    x = u;
    v = o;
    z = 1;
    h = 15;
    break a;
  } else if (h == 14) {
    p[c] = m;
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
      l = ee(d, e, m, f, g);
      if (l <= v) break;
      x = m;
      v = l;
      z = y;
    }
    p[c] = x;
    j = v;
  }
  b = i;
  return j;
}

be.X = 1;

function ce(c, d, e, f, g, i) {
  var h = b;
  b += 8;
  var j, k, l, m, n = h + 2, o = h + 4, r = h + 6;
  j = d + 21;
  k = p[g + 37];
  l = g + 5;
  m = g + 21;
  g = 0 <= f ? 1 : 2;
  g == 1 && (g = f < p[d + 37] ? 3 : 2);
  g == 2 && Q(fe, 151, ge, pe);
  g = i + 2;
  U(n, e + 2, j + (f << 1));
  Wd(h, g, n);
  e = 0;
  j = 3.4028234663852886e+38;
  n = 0;
  g = n < k ? 4 : 7;
  a : do if (g == 4) for (;;) if (d = K(h, m + (n << 1)), g = d < j ? 5 : 6, g == 5 && (j = d, e = n), n += 1, n >= k) break a; while (0);
  m = e;
  if (m + 1 < k) g = 8; else var q = 0, g = 9;
  g == 8 && (q = m + 1);
  k = q;
  Xc(o, i, l + (m << 1));
  p[c] = p[o];
  t[c] = t[o];
  p[c + 1] = p[o + 1];
  t[c + 1] = t[o + 1];
  p[c + 2] = f & 255;
  p[c + 3] = m & 255;
  p[c + 4] = 1;
  p[c + 5] = 0;
  o = c + 3;
  Xc(r, i, l + (k << 1));
  p[o] = p[r];
  t[o] = t[r];
  p[o + 1] = p[r + 1];
  t[o + 1] = t[r + 1];
  p[c + 5] = f & 255;
  p[c + 6] = k & 255;
  p[c + 7] = 1;
  p[c + 8] = 0;
  b = h;
}

ce.X = 1;

function ee(c, d, e, f, g) {
  var i = b;
  b += 10;
  var h, j, k, l, m = i + 2, n, o, r = i + 4, q = i + 6, s = i + 8;
  h = c + 5;
  j = c + 21;
  k = p[f + 37];
  l = f + 5;
  f = 0 <= e ? 1 : 2;
  f == 1 && (f = e < p[c + 37] ? 3 : 2);
  f == 2 && Q(fe, 32, qe, pe);
  U(i, d + 2, j + (e << 1));
  Wd(m, g + 2, i);
  c = 0;
  j = 3.4028234663852886e+38;
  n = 0;
  f = n < k ? 4 : 7;
  a : do if (f == 4) for (;;) if (o = K(l + (n << 1), m), f = o < j ? 5 : 6, f == 5 && (j = o, c = n), n += 1, n >= k) break a; while (0);
  Xc(r, d, h + (e << 1));
  Xc(q, g, l + (c << 1));
  J(s, q, r);
  d = K(s, i);
  b = i;
  return d;
}

ee.X = 1;

function re(c, d, e, f, g, i) {
  var h = b;
  b += 60;
  var j, k = h + 2, l = h + 4, m = h + 6, n = h + 8, o = h + 10, r = h + 12, q = h + 14, s = h + 16, u = h + 18, x = h + 20, v, y = h + 22, z = h + 24, B = h + 26, E = h + 28, D = h + 30, H = h + 32, I = h + 34, M = h + 36, G = h + 38, S = h + 40, P = h + 42, L = h + 44, T = h + 46, F = h + 48, Z = h + 50, aa = h + 52, W = h + 54, ca = h + 56, la = h + 58;
  j = p[d + 15] == 0 ? 12 : 1;
  a : do if (j == 1) {
    j = p[d + 14];
    if (j == 0) j = 2; else if (j == 1) j = 5; else if (j == 2) j = 8; else break;
    if (j == 2) {
      sc(c, 1, 0);
      Xc(h, e, d + 12);
      Xc(k, g, d);
      j = dd(h, k) > 1.4210854715202004e-14 ? 3 : 4;
      if (j == 3) {
        v = c;
        J(l, k, h);
        var $ = l;
        p[v] = p[$];
        t[v] = t[$];
        p[v + 1] = p[$ + 1];
        t[v + 1] = t[$ + 1];
        ed(c);
      }
      N(n, f, c);
      O(m, h, n);
      N(r, i, c);
      J(o, k, r);
      v = c + 2;
      O(s, m, o);
      N(q, .5, s);
      $ = q;
      p[v] = p[$];
      t[v] = t[$];
      p[v + 1] = p[$ + 1];
      t[v + 1] = t[$ + 1];
    } else if (j == 5) {
      v = c;
      U(u, e + 2, d + 10);
      $ = u;
      p[v] = p[$];
      t[v] = t[$];
      p[v + 1] = p[$ + 1];
      t[v + 1] = t[$ + 1];
      Xc(x, e, d + 12);
      v = 0;
      if (v >= p[d + 15]) break a;
      for (var X = $ = c, ba = c, ha = c + 2, na = I; ; ) {
        Xc(y, g, d + v * 5);
        var ia = f;
        J(E, y, x);
        N(B, ia - K(E, $), X);
        O(z, y, B);
        N(H, i, ba);
        J(D, y, H);
        ia = ha + (v << 1);
        O(M, z, D);
        N(I, .5, M);
        p[ia] = p[na];
        t[ia] = t[na];
        p[ia + 1] = p[na + 1];
        t[ia + 1] = t[na + 1];
        v += 1;
        if (v >= p[d + 15]) break a;
      }
    } else if (j == 8) {
      j = c;
      U(G, g + 2, d + 10);
      v = G;
      p[j] = p[v];
      t[j] = t[v];
      p[j + 1] = p[v + 1];
      t[j + 1] = t[v + 1];
      Xc(S, g, d + 12);
      v = 0;
      j = v < p[d + 15] ? 9 : 11;
      b : do if (j == 9) {
        ba = X = $ = c;
        ha = c + 2;
        for (na = W; ; ) if (Xc(P, e, d + v * 5), ia = i, J(F, P, S), N(T, ia - K(F, $), X), O(L, P, T), N(aa, f, ba), J(Z, P, aa), ia = ha + (v << 1), O(ca, Z, L), N(W, .5, ca), p[ia] = p[na], t[ia] = t[na], p[ia + 1] = p[na + 1], t[ia + 1] = t[na + 1], v += 1, v >= p[d + 15]) {
          j = 11;
          break b;
        }
      } while (0);
      v = c;
      Xd(la, c);
      $ = la;
      p[v] = p[$];
      t[v] = t[$];
      p[v + 1] = p[$ + 1];
      t[v + 1] = t[$ + 1];
    }
  } while (0);
  b = h;
}

re.X = 1;

function se(c) {
  var d;
  if (c > 0) {
    var e = c;
    d = 2;
  } else d = 1;
  d == 1 && (e = -c);
  return e;
}

function te(c) {
  p[c + 4] = 0;
  p[c + 5] = 0;
  t[c + 6] = 0;
}

function $d(c, d, e, f, g) {
  var i = b;
  b += 6;
  var h, j, k = i + 2, l = i + 4;
  h = 0;
  j = K(e, d) - f;
  e = K(e, d + 3) - f;
  if (j <= 0) f = 1; else var m = e, f = 2;
  f == 1 && (m = h, h = m + 1, m = c + m * 3, p[m] = p[d], t[m] = t[d], p[m + 1] = p[d + 1], t[m + 1] = t[d + 1], p[m + 2] = p[d + 2], t[m + 2] = t[d + 2], m = e);
  if ((m <= 0 ? 3 : 4) == 3) m = h, h = m + 1, m = c + m * 3, f = d + 3, p[m] = p[f], t[m] = t[f], p[m + 1] = p[f + 1], t[m + 1] = t[f + 1], p[m + 2] = p[f + 2], t[m + 2] = t[f + 2];
  if ((j * e < 0 ? 5 : 6) == 5) j /= j - e, e = c + h * 3, J(l, d + 3, d), N(k, j, l), O(i, d, k), p[e] = p[i], t[e] = t[i], p[e + 1] = p[i + 1], t[e + 1] = t[i + 1], p[c + h * 3 + 2] = g & 255, p[c + h * 3 + 3] = p[d + 3], p[c + h * 3 + 4] = 0, p[c + h * 3 + 5] = 1, h += 1;
  b = i;
  return h;
}

$d.X = 1;

function ue(c, d, e) {
  var f;
  f = p[d + 1];
  f = f == 0 ? 1 : f == 2 ? 2 : f == 3 ? 3 : f == 1 ? 10 : 11;
  f == 11 ? Q(ve, 81, we, xe) : f == 1 ? (p[c + 4] = d + 3, p[c + 5] = 1, t[c + 6] = t[d + 2]) : f == 2 ? (p[c + 4] = d + 5, p[c + 5] = p[d + 37], t[c + 6] = t[d + 2]) : f == 3 ? (f = 0 <= e ? 4 : 5, f == 4 && (f = e < p[d + 4] ? 6 : 5), f == 5 && Q(ve, 53, we, ye), f = p[d + 3] + (e << 1), p[c] = p[f], t[c] = t[f], p[c + 1] = p[f + 1], t[c + 1] = t[f + 1], f = e + 1 < p[d + 4] ? 7 : 8, f == 7 ? (f = c + 2, e = p[d + 3] + (e + 1 << 1), p[f] = p[e], t[f] = t[e], p[f + 1] = p[e + 1], t[f + 1] = t[e + 1]) : f == 8 && (e = c + 2, f = p[d + 3], p[e] = p[f], t[e] = t[f], p[e + 1] = p[f + 1], t[e + 1] = t[f + 1]), p[c + 4] = c, p[c + 5] = 2, t[c + 6] = t[d + 2]) : f == 10 && (p[c + 4] = d + 3, p[c + 5] = 2, t[c + 6] = t[d + 2]);
}

ue.X = 1;

function ze(c) {
  var d = b;
  b += 6;
  var e, f = d + 2, g = d + 4, i;
  i = c + 4;
  p[d] = p[i];
  t[d] = t[i];
  p[d + 1] = p[i + 1];
  t[d + 1] = t[i + 1];
  i = c + 13;
  p[f] = p[i];
  t[f] = t[i];
  p[f + 1] = p[i + 1];
  t[f + 1] = t[i + 1];
  J(g, f, d);
  i = -K(d, g);
  e = i <= 0 ? 1 : 2;
  if (e == 1) t[c + 6] = 1, p[c + 27] = 1; else if (e == 2) if (f = K(f, g), e = f <= 0 ? 3 : 4, e == 3) {
    t[c + 15] = 1;
    p[c + 27] = 1;
    f = g = c + 9;
    for (g += 9; f < g; f++, c++) p[c] = p[f], t[c] = t[f];
  } else e == 4 && (g = 1 / (f + i), t[c + 6] = f * g, t[c + 15] = i * g, p[c + 27] = 2);
  b = d;
}

ze.X = 1;

function Ae(c, d) {
  var e = b;
  b += 4;
  var f, g = e + 2;
  f = p[d + 27];
  f = f == 0 ? 1 : f == 1 ? 2 : f == 2 ? 3 : f == 3 ? 4 : 5;
  f == 5 ? (Q(ve, 207, Be, xe), p[c] = p[Ce], t[c] = t[Ce], p[c + 1] = p[Ce + 1], t[c + 1] = t[Ce + 1]) : f == 1 ? (Q(ve, 194, Be, xe), p[c] = p[Ce], t[c] = t[Ce], p[c + 1] = p[Ce + 1], t[c + 1] = t[Ce + 1]) : f == 2 ? (g = d + 4, p[c] = p[g], t[c] = t[g], p[c + 1] = p[g + 1], t[c + 1] = t[g + 1]) : f == 3 ? (N(e, t[d + 6], d + 4), N(g, t[d + 15], d + 13), O(c, e, g)) : f == 4 && (p[c] = p[Ce], t[c] = t[Ce], p[c + 1] = p[Ce + 1], t[c + 1] = t[Ce + 1]);
  b = e;
}

function De(c) {
  return t[c] * t[c] + t[c + 1] * t[c + 1];
}

function Ee(c) {
  var d = b;
  b += 12;
  var e, f = d + 2, g = d + 4, i = d + 6, h, j;
  e = d + 8;
  var k, l, m = d + 10, n, o;
  j = c + 4;
  p[d] = p[j];
  t[d] = t[j];
  p[d + 1] = p[j + 1];
  t[d + 1] = t[j + 1];
  j = c + 13;
  p[f] = p[j];
  t[f] = t[j];
  p[f + 1] = p[j + 1];
  t[f + 1] = t[j + 1];
  j = c + 22;
  p[g] = p[j];
  t[g] = t[j];
  p[g + 1] = p[j + 1];
  t[g + 1] = t[j + 1];
  J(i, f, d);
  h = K(d, i);
  j = K(f, i);
  h = -h;
  J(e, g, d);
  k = K(d, e);
  l = K(g, e);
  k = -k;
  J(m, g, f);
  n = K(f, m);
  m = K(g, m);
  n = -n;
  e = R(i, e);
  i = e * R(f, g);
  g = e * R(g, d);
  o = e * R(d, f);
  e = h <= 0 ? 1 : 3;
  e == 1 && (k <= 0 ? (t[c + 6] = 1, p[c + 27] = 1, e = 21) : e = 3);
  a : do if (e == 3) {
    e = j > 0 ? 4 : 7;
    do if (e == 4) if (h > 0) if (o <= 0) {
      l = 1 / (j + h);
      t[c + 6] = j * l;
      t[c + 15] = h * l;
      p[c + 27] = 2;
      break a;
    } else e = 7; else e = 7; while (0);
    e = l > 0 ? 8 : 11;
    do if (e == 8) if (k > 0) if (g <= 0) {
      j = 1 / (l + k);
      t[c + 6] = l * j;
      t[c + 24] = k * j;
      p[c + 27] = 2;
      for (var f = j = c + 18, r = j + 9, q = c + 9; f < r; f++, q++) p[q] = p[f], t[q] = t[f];
      break a;
    } else e = 11; else e = 11; while (0);
    e = j <= 0 ? 12 : 14;
    do if (e == 12) if (n <= 0) {
      t[c + 15] = 1;
      p[c + 27] = 1;
      j = c;
      c += 9;
      f = c;
      r = c + 9;
      for (q = j; f < r; f++, q++) p[q] = p[f], t[q] = t[f];
      break a;
    } else e = 14; while (0);
    e = l <= 0 & m <= 0 ? 15 : 16;
    if (e == 15) {
      t[c + 24] = 1;
      p[c + 27] = 1;
      q = c;
      f = r = c + 18;
      for (r += 9; f < r; f++, q++) p[q] = p[f], t[q] = t[f];
    } else if (e == 16) {
      e = m > 0 ? 17 : 20;
      do if (e == 17) if (n > 0) if (i <= 0) {
        j = 1 / (m + n);
        t[c + 15] = m * j;
        t[c + 24] = n * j;
        p[c + 27] = 2;
        j = c;
        c += 18;
        f = c;
        r = c + 9;
        for (q = j; f < r; f++, q++) p[q] = p[f], t[q] = t[f];
        break a;
      } else e = 20; else e = 20; while (0);
      f = 1 / (i + g + o);
      t[c + 6] = i * f;
      t[c + 15] = g * f;
      t[c + 24] = o * f;
      p[c + 27] = 3;
    }
  } while (0);
  b = d;
}

Ee.X = 1;

function Fe(c, d, e) {
  var f = b;
  b += 72;
  var g, i, h = f + 4, j = f + 8, k = f + 36, l = f + 39, m;
  g = f + 42;
  var n, o, r = f + 44, q = f + 46, s = f + 48, u = f + 50, x = f + 52, v = f + 56, y = f + 58, z = f + 60, B, E, D = f + 62, H = f + 64, I = f + 66, M = f + 68, G = f + 70;
  p[Ge] += 1;
  i = e + 7;
  n = e + 14;
  p[f] = p[n];
  t[f] = t[n];
  p[f + 1] = p[n + 1];
  t[f + 1] = t[n + 1];
  p[f + 2] = p[n + 2];
  t[f + 2] = t[n + 2];
  p[f + 3] = p[n + 3];
  t[f + 3] = t[n + 3];
  n = e + 18;
  p[h] = p[n];
  t[h] = t[n];
  p[h + 1] = p[n + 1];
  t[h + 1] = t[n + 1];
  p[h + 2] = p[n + 2];
  t[h + 2] = t[n + 2];
  p[h + 3] = p[n + 3];
  t[h + 3] = t[n + 3];
  He(j, d, e, f, i, h);
  Ae(g, j);
  n = 0;
  var S = j + 27, P = j + 27, L = j + 27, T = j + 27, F = f + 2, Z = h + 2, aa = j + 27;
  g = 0;
  a : for (;;) {
    if (g >= 20) break;
    m = p[S];
    o = 0;
    g = o < m ? 3 : 4;
    b : do if (g == 3) for (;;) if (p[k + o] = p[j + o * 9 + 7], p[l + o] = p[j + o * 9 + 8], o += 1, o >= m) break b; while (0);
    g = p[P];
    g = g == 1 ? 9 : g == 2 ? 5 : g == 3 ? 6 : 7;
    g == 7 ? (Q(ve, 498, Ie, xe), g = 8) : g == 5 ? (ze(j), g = 8) : g == 6 && (Ee(j), g = 8);
    if (g == 8 && p[L] == 3) break a;
    Ae(r, j);
    o = q;
    B = j;
    E = b;
    b += 4;
    var W = da, ca = da, ca = E + 2, W = p[B + 27], W = W == 1 ? 1 : W == 2 ? 2 : 5;
    W == 5 ? (Q(ve, 184, Je, xe), p[o] = p[Ce], t[o] = t[Ce], p[o + 1] = p[Ce + 1], t[o + 1] = t[Ce + 1]) : W == 1 ? Xd(o, B + 4) : W == 2 && (J(E, B + 13, B + 4), Xd(ca, B + 4), ca = R(E, ca), W = ca > 0 ? 3 : 4, W == 3 ? Ke(o, 1, E) : W == 4 && de(o, E));
    b = E;
    if (De(q) < 1.4210854715202004e-14) break;
    o = j + p[T] * 9;
    B = e;
    Xd(u, q);
    Wd(s, F, u);
    p[o + 7] = Le(B, s);
    B = o;
    E = Me(e, p[o + 7]);
    Xc(x, f, E);
    p[B] = p[x];
    t[B] = t[x];
    p[B + 1] = p[x + 1];
    t[B + 1] = t[x + 1];
    B = i;
    Wd(v, Z, q);
    p[o + 8] = Le(B, v);
    B = o + 2;
    E = Me(i, p[o + 8]);
    Xc(y, h, E);
    p[B] = p[y];
    t[B] = t[y];
    p[B + 1] = p[y + 1];
    t[B + 1] = t[y + 1];
    B = o + 4;
    J(z, o + 2, o);
    p[B] = p[z];
    t[B] = t[z];
    p[B + 1] = p[z + 1];
    t[B + 1] = t[z + 1];
    n += 1;
    p[Ne] += 1;
    E = B = 0;
    b : for (;;) {
      if (E >= m) {
        g = 16;
        break;
      }
      g = p[o + 7] == p[k + E] ? 13 : 15;
      if (g == 13 && p[o + 8] == p[l + E]) {
        g = 14;
        break b;
      }
      E += 1;
    }
    g == 14 && (B = 1);
    if (B & 1) break;
    p[aa] += 1;
    g = n;
  }
  p[Oe] = p[Oe] > n ? p[Oe] : n;
  Pe(j, c, c + 2);
  g = Qe(c, c + 2);
  t[c + 4] = g;
  p[c + 5] = n;
  Re(j, d);
  g = p[e + 22] & 1 ? 19 : 23;
  a : do if (g == 19) {
    j = t[e + 6];
    d = t[i + 6];
    g = t[c + 4] > j + d ? 20 : 22;
    do if (g == 20) if (t[c + 4] > 1.1920928955078125e-7) {
      t[c + 4] -= j + d;
      J(D, c + 2, c);
      ed(D);
      e = c;
      N(H, j, D);
      Sb(e, H);
      c += 2;
      N(I, d, D);
      Se(c, I);
      break a;
    } else g = 22; while (0);
    O(G, c, c + 2);
    N(M, .5, G);
    d = c;
    j = M;
    p[d] = p[j];
    t[d] = t[j];
    p[d + 1] = p[j + 1];
    t[d + 1] = t[j + 1];
    d = c + 2;
    j = M;
    p[d] = p[j];
    t[d] = t[j];
    p[d + 1] = p[j + 1];
    t[d + 1] = t[j + 1];
    t[c + 4] = 0;
  } while (0);
  b = f;
}

Fe.X = 1;

function He(c, d, e, f, g, i) {
  var h = b;
  b += 20;
  var j, k, l, m = h + 2, n = h + 4, o = h + 6, r = h + 8, q = h + 10, s = h + 12, u = h + 14, x = h + 16, v = h + 18;
  j = p[d + 1] <= 3 ? 2 : 1;
  j == 1 && Q(ve, 102, Te, Ue);
  p[c + 27] = p[d + 1];
  k = 0;
  var y = c + 27;
  j = k < p[y] ? 3 : 5;
  a : do if (j == 3) for (var z = h, B = m, E = n, D = o, H = r; ; ) {
    l = c + k * 9;
    p[l + 7] = p[k + (d + 2)];
    p[l + 8] = p[k + (d + 5)];
    var I = Me(e, p[l + 7]);
    p[z] = p[I];
    t[z] = t[I];
    p[z + 1] = p[I + 1];
    t[z + 1] = t[I + 1];
    I = Me(g, p[l + 8]);
    p[B] = p[I];
    t[B] = t[I];
    p[B + 1] = p[I + 1];
    t[B + 1] = t[I + 1];
    I = l;
    Xc(n, f, h);
    p[I] = p[E];
    t[I] = t[E];
    p[I + 1] = p[E + 1];
    t[I + 1] = t[E + 1];
    I = l + 2;
    Xc(o, i, m);
    p[I] = p[D];
    t[I] = t[D];
    p[I + 1] = p[D + 1];
    t[I + 1] = t[D + 1];
    I = l + 4;
    J(r, l + 2, l);
    p[I] = p[H];
    t[I] = t[H];
    p[I + 1] = p[H + 1];
    t[I + 1] = t[H + 1];
    t[l + 6] = 0;
    k += 1;
    if (k >= p[y]) break a;
  } while (0);
  j = p[c + 27] > 1 ? 6 : 9;
  a : do if (j == 6) {
    k = t[d];
    l = Ve(c);
    j = l < k * .5 ? 8 : 7;
    if (j == 7 && !(k * 2 < l | l < 1.1920928955078125e-7)) break a;
    p[c + 27] = 0;
  } while (0);
  j = p[c + 27] == 0 ? 10 : 11;
  j == 10 && (p[c + 7] = 0, p[c + 8] = 0, d = Me(e, 0), p[q] = p[d], t[q] = t[d], p[q + 1] = p[d + 1], t[q + 1] = t[d + 1], g = Me(g, 0), p[s] = p[g], t[s] = t[g], p[s + 1] = p[g + 1], t[s + 1] = t[g + 1], Xc(u, f, q), p[c] = p[u], t[c] = t[u], p[c + 1] = p[u + 1], t[c + 1] = t[u + 1], f = c + 2, Xc(x, i, s), p[f] = p[x], t[f] = t[x], p[f + 1] = p[x + 1], t[f + 1] = t[x + 1], i = c + 4, J(v, c + 2, c), p[i] = p[v], t[i] = t[v], p[i + 1] = p[v + 1], t[i + 1] = t[v + 1], p[c + 27] = 1);
  b = h;
}

He.X = 1;

function Me(c, d) {
  var e;
  e = 0 <= d ? 1 : 2;
  e == 1 && (e = d < p[c + 5] ? 3 : 2);
  e == 2 && Q(We, 103, Xe, Ye);
  return p[c + 4] + (d << 1);
}

function Pe(c, d, e) {
  var f = b;
  b += 22;
  var g, i = f + 2, h = f + 4, j = f + 6, k = f + 8, l = f + 10, m = f + 12, n = f + 14, o = f + 16, r = f + 18, q = f + 20;
  g = p[c + 27];
  g = g == 0 ? 1 : g == 1 ? 2 : g == 2 ? 3 : g == 3 ? 4 : 5;
  g == 5 ? Q(ve, 236, Ze, xe) : g == 1 ? Q(ve, 217, Ze, xe) : g == 2 ? (p[d] = p[c], t[d] = t[c], p[d + 1] = p[c + 1], t[d + 1] = t[c + 1], c += 2, p[e] = p[c], t[e] = t[c], p[e + 1] = p[c + 1], t[e + 1] = t[c + 1]) : g == 3 ? (N(i, t[c + 6], c), N(h, t[c + 15], c + 9), O(f, i, h), p[d] = p[f], t[d] = t[f], p[d + 1] = p[f + 1], t[d + 1] = t[f + 1], N(k, t[c + 6], c + 2), N(l, t[c + 15], c + 11), O(j, k, l), p[e] = p[j], t[e] = t[j], p[e + 1] = p[j + 1], t[e + 1] = t[j + 1]) : g == 4 && (N(o, t[c + 6], c), N(r, t[c + 15], c + 9), O(n, o, r), N(q, t[c + 24], c + 18), O(m, n, q), p[d] = p[m], t[d] = t[m], p[d + 1] = p[m + 1], t[d + 1] = t[m + 1], p[e] = p[d], t[e] = t[d], p[e + 1] = p[d + 1], t[e + 1] = t[d + 1]);
  b = f;
}

Pe.X = 1;

function Se(c, d) {
  t[c] -= t[d];
  t[c + 1] -= t[d + 1];
}

function Ke(c, d, e) {
  tc(c, -d * t[e + 1], d * t[e]);
}

function wc(c) {
  vc(p[c + 1]);
}

function $e(c, d) {
  var e;
  e = 0 <= d ? 1 : 2;
  e == 1 && (e = d < p[c + 3] ? 3 : 2);
  e == 2 && Q(Cg, 97, Dg, Eg);
  e = 0 < p[c + 2] ? 5 : 4;
  e == 4 && Q(Cg, 98, Dg, Fg);
  p[p[c + 1] + d * 9 + 5] = p[c + 4];
  p[p[c + 1] + d * 9 + 8] = -1;
  p[c + 4] = d;
  p[c + 2] -= 1;
}

function Le(c, d) {
  var e, f, g, i, h;
  f = 0;
  g = K(p[c + 4], d);
  i = 1;
  var j = c + 5;
  e = i < p[j] ? 1 : 5;
  a : do if (e == 1) for (var k = c + 4; ; ) if (h = K(p[k] + (i << 1), d), e = h > g ? 3 : 4, e == 3 && (f = i, g = h), i += 1, i >= p[j]) break a; while (0);
  return f;
}

function Qe(c, d) {
  var e = b;
  b += 2;
  J(e, c, d);
  var f = fd(e);
  b = e;
  return f;
}

function Re(c, d) {
  var e, f;
  e = Ve(c);
  t[d] = e;
  p[d + 1] = p[c + 27] & 65535;
  f = 0;
  var g = c + 27;
  e = f < p[g] ? 1 : 2;
  a : do if (e == 1) for (;;) if (p[f + (d + 2)] = p[c + f * 9 + 7] & 255, p[f + (d + 5)] = p[c + f * 9 + 8] & 255, f += 1, f >= p[g]) break a; while (0);
}

Re.X = 1;

function Ve(c) {
  var d = b;
  b += 4;
  var e, f, g = d + 2;
  e = p[c + 27];
  e = e == 0 ? 1 : e == 1 ? 2 : e == 2 ? 3 : e == 3 ? 4 : 5;
  e == 5 ? (Q(ve, 259, Gg, xe), f = 0) : e == 1 ? (Q(ve, 246, Gg, xe), f = 0) : e == 2 ? f = 0 : e == 3 ? f = Qe(c + 4, c + 13) : e == 4 && (J(d, c + 13, c + 4), J(g, c + 22, c + 4), f = R(d, g));
  b = d;
  return f;
}

function Uc(c) {
  var d, e;
  p[c] = -1;
  p[c + 3] = 16;
  p[c + 2] = 0;
  d = hb(p[c + 3] * 36);
  p[c + 1] = d;
  d = p[c + 1];
  e = p[c + 3] * 36;
  for (var f = 0; f < 9 * (e / 36); f++) p[d + f] = 0, t[d + f] = 0;
  e = 0;
  f = c + 3;
  d = e < p[f] - 1 ? 1 : 3;
  a : do if (d == 1) for (var g = c + 1, i = c + 1; ; ) if (p[p[g] + e * 9 + 5] = e + 1, p[p[i] + e * 9 + 8] = -1, e += 1, e >= p[f] - 1) break a; while (0);
  p[p[c + 1] + (p[c + 3] - 1) * 9 + 5] = -1;
  p[p[c + 1] + (p[c + 3] - 1) * 9 + 8] = -1;
  p[c + 4] = 0;
  p[c + 5] = 0;
  p[c + 6] = 0;
}

Uc.X = 1;

function Hg(c) {
  var d, e;
  d = p[c + 4] == -1 ? 1 : 7;
  if (d == 1) {
    d = p[c + 2] == p[c + 3] ? 3 : 2;
    d == 2 && Q(Cg, 61, Ig, Jg);
    d = p[c + 1];
    p[c + 3] <<= 1;
    e = hb(p[c + 3] * 36);
    p[c + 1] = e;
    e = d;
    for (var f = d + 9 * (p[c + 2] * 36 / 36), g = p[c + 1]; e < f; e++, g++) p[g] = p[e], t[g] = t[e];
    vc(d);
    e = p[c + 2];
    f = c + 3;
    d = e < p[f] - 1 ? 4 : 6;
    a : do if (d == 4) for (var g = c + 1, i = c + 1; ; ) if (p[p[g] + e * 9 + 5] = e + 1, p[p[i] + e * 9 + 8] = -1, e += 1, e >= p[f] - 1) break a; while (0);
    p[p[c + 1] + (p[c + 3] - 1) * 9 + 5] = -1;
    p[p[c + 1] + (p[c + 3] - 1) * 9 + 8] = -1;
    p[c + 4] = p[c + 2];
  }
  d = p[c + 4];
  p[c + 4] = p[p[c + 1] + d * 9 + 5];
  p[p[c + 1] + d * 9 + 5] = -1;
  p[p[c + 1] + d * 9 + 6] = -1;
  p[p[c + 1] + d * 9 + 7] = -1;
  p[p[c + 1] + d * 9 + 8] = 0;
  p[p[c + 1] + d * 9 + 4] = 0;
  p[c + 2] += 1;
  return d;
}

Hg.X = 1;

function Kg(c, d, e) {
  var f = b;
  b += 6;
  var g, i = f + 2, h = f + 4;
  g = Hg(c);
  tc(f, .10000000149011612, .10000000149011612);
  var j = p[c + 1] + g * 9;
  J(i, d, f);
  p[j] = p[i];
  t[j] = t[i];
  p[j + 1] = p[i + 1];
  t[j + 1] = t[i + 1];
  i = p[c + 1] + g * 9 + 2;
  O(h, d + 2, f);
  p[i] = p[h];
  t[i] = t[h];
  p[i + 1] = p[h + 1];
  t[i + 1] = t[h + 1];
  p[p[c + 1] + g * 9 + 4] = e;
  p[p[c + 1] + g * 9 + 8] = 0;
  Lg(c, g);
  b = f;
  return g;
}

Kg.X = 1;

function Mg(c, d) {
  var e, f;
  f = 1;
  f == 1 && (e = t[c] <= t[d]);
  if (e & 1) f = 3; else {
    var g = 0;
    f = 4;
  }
  f == 3 && (g = t[c + 1] <= t[d + 1]);
  if (g & 1) f = 5; else {
    var i = 0;
    f = 6;
  }
  f == 5 && (i = t[d + 2] <= t[c + 2]);
  if (i & 1) f = 7; else {
    var h = 0;
    f = 8;
  }
  f == 7 && (h = t[d + 3] <= t[c + 3]);
  return h & 1;
}

Mg.X = 1;

function Lg(c, d) {
  var e = b;
  b += 24;
  var f, g, i, h, j = e + 4, k, l, m, n = e + 8, o = e + 12, r, q = e + 16, s = e + 20, u, x;
  p[c + 6] += 1;
  f = p[c] == -1 ? 1 : 2;
  a : do if (f == 1) p[c] = d, p[p[c + 1] + p[c] * 9 + 5] = -1; else if (f == 2) {
    g = e;
    f = p[c + 1] + d * 9;
    p[g] = p[f];
    t[g] = t[f];
    p[g + 1] = p[f + 1];
    t[g + 1] = t[f + 1];
    p[g + 2] = p[f + 2];
    t[g + 2] = t[f + 2];
    p[g + 3] = p[f + 3];
    t[g + 3] = t[f + 3];
    g = p[c];
    var v = c + 1, y = c + 1, z = c + 1, B = c + 1, E = c + 1, D = c + 1;
    u = c + 1;
    x = c + 1;
    var H = c + 1, I = c + 1, M = c + 1, G = c + 1, S = c + 1;
    b : for (;;) {
      if (p[p[v] + g * 9 + 6] == -1 != 0) break;
      i = p[p[y] + g * 9 + 6];
      h = p[p[z] + g * 9 + 7];
      f = Ng(p[B] + g * 9);
      Og(j, p[E] + g * 9, e);
      k = Ng(j);
      l = k * 2;
      k = (k - f) * 2;
      f = p[p[D] + i * 9 + 6] == -1 ? 5 : 6;
      f == 5 ? (Og(n, e, p[u] + i * 9), m = Ng(n) + k) : f == 6 && (Og(o, e, p[G] + i * 9), m = Ng(p[S] + i * 9), f = Ng(o), m = f - m + k);
      f = p[p[x] + h * 9 + 6] == -1 ? 8 : 9;
      f == 8 ? (Og(q, e, p[H] + h * 9), r = Ng(q) + k) : f == 9 && (Og(s, e, p[I] + h * 9), r = Ng(p[M] + h * 9), f = Ng(s), r = f - r + k);
      f = l < m ? 11 : 12;
      if (f == 11 && l < r) break b;
      f = m < r ? 13 : 14;
      f == 13 ? g = i : f == 14 && (g = h);
    }
    i = p[p[c + 1] + g * 9 + 5];
    h = Hg(c);
    p[p[c + 1] + h * 9 + 5] = i;
    p[p[c + 1] + h * 9 + 4] = 0;
    Og(p[c + 1] + h * 9, e, p[c + 1] + g * 9);
    p[p[c + 1] + h * 9 + 8] = p[p[c + 1] + g * 9 + 8] + 1;
    f = i != -1 ? 16 : 20;
    f == 16 ? (l = p[c + 1] + i * 9, f = p[p[c + 1] + i * 9 + 6] == g ? 17 : 18, f == 17 ? p[l + 6] = h : f == 18 && (p[l + 7] = h), p[p[c + 1] + h * 9 + 6] = g, p[p[c + 1] + h * 9 + 7] = d, p[p[c + 1] + g * 9 + 5] = h, p[p[c + 1] + d * 9 + 5] = h) : f == 20 && (p[p[c + 1] + h * 9 + 6] = g, p[p[c + 1] + h * 9 + 7] = d, p[p[c + 1] + g * 9 + 5] = h, p[p[c + 1] + d * 9 + 5] = h, p[c] = h);
    g = p[p[c + 1] + d * 9 + 5];
    if (p[p[c + 1] + d * 9 + 5] == -1) f = 28; else {
      i = c + 1;
      h = c + 1;
      l = c + 1;
      v = c + 1;
      y = c + 1;
      z = c + 1;
      B = c + 1;
      E = c + 1;
      for (D = c + 1; ; ) {
        g = Pg(c, g);
        u = p[p[i] + g * 9 + 6];
        x = p[p[h] + g * 9 + 7];
        if (u != -1) {
          var P = p[p[h] + g * 9 + 7];
          f = 25;
        } else f = 24;
        f == 24 && (Q(Cg, 307, Qg, Rg), P = x);
        f = P != -1 ? 27 : 26;
        f == 26 && Q(Cg, 308, Qg, Sg);
        p[p[y] + g * 9 + 8] = (p[p[l] + u * 9 + 8] > p[p[v] + x * 9 + 8] ? p[p[l] + u * 9 + 8] : p[p[v] + x * 9 + 8]) + 1;
        Og(p[z] + g * 9, p[B] + u * 9, p[E] + x * 9);
        g = u = p[p[D] + g * 9 + 5];
        if (u == -1) break a;
      }
    }
  } while (0);
  b = e;
}

Lg.X = 1;

function Tg(c, d) {
  var e, f, g, i, h, j;
  e = d == p[c] ? 1 : 2;
  a : do if (e == 1) p[c] = -1; else if (e == 2) {
    f = p[p[c + 1] + d * 9 + 5];
    g = p[p[c + 1] + f * 9 + 5];
    var k = p[c + 1] + f * 9;
    e = p[p[c + 1] + f * 9 + 6] == d ? 3 : 4;
    e == 3 ? i = p[k + 7] : e == 4 && (i = p[k + 6]);
    e = g != -1 ? 6 : 12;
    if (e == 6) {
      k = p[c + 1] + g * 9;
      e = p[p[c + 1] + g * 9 + 6] == f ? 7 : 8;
      e == 7 ? p[k + 6] = i : e == 8 && (p[k + 7] = i);
      p[p[c + 1] + i * 9 + 5] = g;
      $e(c, f);
      f = g;
      if (g == -1) break a;
      g = c + 1;
      for (var k = c + 1, l = c + 1, m = c + 1, n = c + 1, o = c + 1, r = c + 1, q = c + 1, s = c + 1; ; ) if (f = Pg(c, f), h = p[p[g] + f * 9 + 6], j = p[p[k] + f * 9 + 7], Og(p[l] + f * 9, p[m] + h * 9, p[n] + j * 9), p[p[q] + f * 9 + 8] = (p[p[o] + h * 9 + 8] > p[p[r] + j * 9 + 8] ? p[p[o] + h * 9 + 8] : p[p[r] + j * 9 + 8]) + 1, f = h = p[p[s] + f * 9 + 5], h == -1) break a;
    } else e == 12 && (p[c] = i, p[p[c + 1] + i * 9 + 5] = -1, $e(c, f));
  } while (0);
}

Tg.X = 1;

function Ug(c, d, e, f) {
  var g = b;
  b += 12;
  var i, h, j = g + 4, k = g + 6, l = g + 8, m = g + 10;
  i = 0 <= d ? 1 : 2;
  i == 1 && (i = d < p[c + 3] ? 3 : 2);
  i == 2 && Q(Cg, 135, Vg, Wg);
  i = p[p[c + 1] + d * 9 + 6] == -1 ? 5 : 4;
  i == 4 && Q(Cg, 137, Vg, Xg);
  i = Mg(p[c + 1] + d * 9, e) ? 6 : 7;
  i == 6 ? h = 0 : i == 7 && (Tg(c, d), p[g] = p[e], t[g] = t[e], p[g + 1] = p[e + 1], t[g + 1] = t[e + 1], p[g + 2] = p[e + 2], t[g + 2] = t[e + 2], p[g + 3] = p[e + 3], t[g + 3] = t[e + 3], tc(j, .10000000149011612, .10000000149011612), J(k, g, j), p[g] = p[k], t[g] = t[k], p[g + 1] = p[k + 1], t[g + 1] = t[k + 1], i = g + 2, O(l, g + 2, j), p[i] = p[l], t[i] = t[l], p[i + 1] = p[l + 1], t[i + 1] = t[l + 1], N(m, 2, f), f = t[m], i = t[m] < 0 ? 8 : 9, i == 8 ? t[g] += f : i == 9 && (t[g + 2] += f), f = t[m + 1], i = t[m + 1] < 0 ? 11 : 12, i == 11 ? t[g + 1] += f : i == 12 && (t[g + 3] += f), m = p[c + 1] + d * 9, p[m] = p[g], t[m] = t[g], p[m + 1] = p[g + 1], t[m + 1] = t[g + 1], p[m + 2] = p[g + 2], t[m + 2] = t[g + 2], p[m + 3] = p[g + 3], t[m + 3] = t[g + 3], Lg(c, d), h = 1);
  b = g;
  return h;
}

Ug.X = 1;

function Ng(c) {
  return (t[c + 2] - t[c] + (t[c + 3] - t[c + 1])) * 2;
}

function Og(c, d, e) {
  var f = b;
  b += 4;
  var g = f + 2;
  Yg(f, d, e);
  p[c] = p[f];
  t[c] = t[f];
  p[c + 1] = p[f + 1];
  t[c + 1] = t[f + 1];
  c += 2;
  Zg(g, d + 2, e + 2);
  p[c] = p[g];
  t[c] = t[g];
  p[c + 1] = p[g + 1];
  t[c + 1] = t[g + 1];
  b = f;
}

function Pg(c, d) {
  var e, f, g, i, h, j, k, l, m;
  (d != -1 ? 2 : 1) == 1 && Q(Cg, 382, $g, ah);
  g = p[c + 1] + d * 9;
  e = p[g + 6] == -1 ? 4 : 3;
  a : do if (e == 3) if (p[g + 8] < 2) e = 4; else if (i = p[g + 6], h = p[g + 7], e = 0 <= i ? 6 : 7, e == 6 && (e = i < p[c + 3] ? 8 : 7), e == 7 && Q(Cg, 392, $g, bh), e = 0 <= h ? 9 : 10, e == 9 && (e = h < p[c + 3] ? 11 : 10), e == 10 && Q(Cg, 393, $g, ch), j = p[c + 1] + i * 9, k = p[c + 1] + h * 9, l = p[k + 8] - p[j + 8], e = p[k + 8] - p[j + 8] > 1 ? 12 : 29, e == 12) {
    i = p[k + 6];
    f = p[k + 7];
    l = p[c + 1] + i * 9;
    m = p[c + 1] + f * 9;
    e = 0 <= i ? 13 : 14;
    e == 13 && (e = i < p[c + 3] ? 15 : 14);
    e == 14 && Q(Cg, 407, $g, dh);
    e = 0 <= f ? 16 : 17;
    e == 16 && (e = f < p[c + 3] ? 18 : 17);
    e == 17 && Q(Cg, 408, $g, eh);
    p[k + 6] = d;
    p[k + 5] = p[g + 5];
    p[g + 5] = h;
    e = p[k + 5] != -1 ? 19 : 24;
    e == 19 ? (e = p[p[c + 1] + p[k + 5] * 9 + 6] == d ? 20 : 21, e == 20 ? p[p[c + 1] + p[k + 5] * 9 + 6] = h : e == 21 && (e = p[p[c + 1] + p[k + 5] * 9 + 7] == d ? 23 : 22, e == 22 && Q(Cg, 424, $g, fh), p[p[c + 1] + p[k + 5] * 9 + 7] = h)) : e == 24 && (p[c] = h);
    e = p[l + 8] > p[m + 8] ? 26 : 27;
    e == 26 ? (p[k + 7] = i, p[g + 7] = f, p[m + 5] = d, Og(g, j, m), Og(k, g, l), p[g + 8] = (p[j + 8] > p[m + 8] ? p[j + 8] : p[m + 8]) + 1, p[k + 8] = (p[g + 8] > p[l + 8] ? p[g + 8] : p[l + 8]) + 1) : e == 27 && (p[k + 7] = f, p[g + 7] = i, p[l + 5] = d, Og(g, j, l), Og(k, g, m), p[g + 8] = (p[j + 8] > p[l + 8] ? p[j + 8] : p[l + 8]) + 1, p[k + 8] = (p[g + 8] > p[m + 8] ? p[g + 8] : p[m + 8]) + 1);
    f = h;
    e = 48;
    break a;
  } else if (e == 29) if (e = l < -1 ? 30 : 47, e == 30) {
    h = p[j + 6];
    f = p[j + 7];
    l = p[c + 1] + h * 9;
    m = p[c + 1] + f * 9;
    e = 0 <= h ? 31 : 32;
    e == 31 && (e = h < p[c + 3] ? 33 : 32);
    e == 32 && Q(Cg, 467, $g, gh);
    e = 0 <= f ? 34 : 35;
    e == 34 && (e = f < p[c + 3] ? 36 : 35);
    e == 35 && Q(Cg, 468, $g, hh);
    p[j + 6] = d;
    p[j + 5] = p[g + 5];
    p[g + 5] = i;
    e = p[j + 5] != -1 ? 37 : 42;
    e == 37 ? (e = p[p[c + 1] + p[j + 5] * 9 + 6] == d ? 38 : 39, e == 38 ? p[p[c + 1] + p[j + 5] * 9 + 6] = i : e == 39 && (e = p[p[c + 1] + p[j + 5] * 9 + 7] == d ? 41 : 40, e == 40 && Q(Cg, 484, $g, ih), p[p[c + 1] + p[j + 5] * 9 + 7] = i)) : e == 42 && (p[c] = i);
    e = p[l + 8] > p[m + 8] ? 44 : 45;
    e == 44 ? (p[j + 7] = h, p[g + 6] = f, p[m + 5] = d, Og(g, k, m), Og(j, g, l), p[g + 8] = (p[k + 8] > p[m + 8] ? p[k + 8] : p[m + 8]) + 1, p[j + 8] = (p[g + 8] > p[l + 8] ? p[g + 8] : p[l + 8]) + 1) : e == 45 && (p[j + 7] = f, p[g + 6] = h, p[l + 5] = d, Og(g, k, l), Og(j, g, m), p[g + 8] = (p[k + 8] > p[l + 8] ? p[k + 8] : p[l + 8]) + 1, p[j + 8] = (p[g + 8] > p[m + 8] ? p[g + 8] : p[m + 8]) + 1);
    f = i;
    e = 48;
    break a;
  } else if (e == 47) {
    f = d;
    e = 48;
    break a;
  } while (0);
  e == 4 && (f = d);
  return f;
}

Pg.X = 1;

function Yg(c, d, e) {
  tc(c, t[d] < t[e] ? t[d] : t[e], t[d + 1] < t[e + 1] ? t[d + 1] : t[e + 1]);
}

function Zg(c, d, e) {
  tc(c, t[d] > t[e] ? t[d] : t[e], t[d + 1] > t[e + 1] ? t[d + 1] : t[e + 1]);
}

function jh(c, d, e) {
  var f = b;
  b += 8;
  var g = f + 2, i = f + 4, h = f + 6;
  N(g, 1 - e, c + 2);
  N(i, e, c + 4);
  O(f, g, i);
  p[d] = p[f];
  t[d] = t[f];
  p[d + 1] = p[f + 1];
  t[d + 1] = t[f + 1];
  kh(d + 2, (1 - e) * t[c + 6] + e * t[c + 7]);
  U(h, d + 2, c);
  Se(d, h);
  b = f;
}

function lh(c, d) {
  var e = b;
  b += 90;
  var f, g, i = e + 9, h, j, k, l, m = e + 18, n = e + 26, o = e + 49, r = e + 53, q = e + 57, s = e + 63, u, x, v, y = e + 88, z = e + 89, B, E, D, H, I, M, G;
  p[mh] += 1;
  p[c] = 0;
  t[c + 1] = t[d + 32];
  g = d + 7;
  u = f = d + 14;
  x = f + 9;
  for (v = e; u < x; u++, v++) p[v] = p[u], t[v] = t[u];
  u = f = d + 23;
  x = f + 9;
  for (v = i; u < x; u++, v++) p[v] = p[u], t[v] = t[u];
  nh(e);
  nh(i);
  h = t[d + 32];
  j = .004999999888241291 > t[d + 6] + t[g + 6] - .014999999664723873 ? .004999999888241291 : t[d + 6] + t[g + 6] - .014999999664723873;
  f = j > .0012499999720603228 ? 2 : 1;
  f == 1 && Q(oh, 280, ph, qh);
  l = k = 0;
  p[m + 1] = 0;
  te(n);
  te(n + 7);
  u = d;
  x = d + 7;
  for (v = n; u < x; u++, v++) p[v] = p[u], t[v] = t[u];
  u = x = d + 7;
  x += 7;
  for (v = n + 7; u < x; u++, v++) p[v] = p[u], t[v] = t[u];
  p[n + 22] = 0;
  for (var S = n + 14, P = n + 18, L = q + 4, T = q + 4; ; ) {
    jh(e, o, k);
    jh(i, r, k);
    p[S] = p[o];
    t[S] = t[o];
    p[S + 1] = p[o + 1];
    t[S + 1] = t[o + 1];
    p[S + 2] = p[o + 2];
    t[S + 2] = t[o + 2];
    p[S + 3] = p[o + 3];
    t[S + 3] = t[o + 3];
    p[P] = p[r];
    t[P] = t[r];
    p[P + 1] = p[r + 1];
    t[P + 1] = t[r + 1];
    p[P + 2] = p[r + 2];
    t[P + 2] = t[r + 2];
    p[P + 3] = p[r + 3];
    t[P + 3] = t[r + 3];
    Fe(q, m, n);
    if (t[L] <= 0) {
      f = 4;
      break;
    }
    if (t[T] < j + .0012499999720603228) {
      f = 6;
      break;
    }
    rh(s, m, d, e, g, i, k);
    u = 0;
    x = h;
    for (v = 0; ; ) {
      B = sh(s, y, z, x);
      if (B > j + .0012499999720603228) {
        f = 9;
        break;
      }
      if (B > j - .0012499999720603228) {
        f = 11;
        break;
      }
      E = th(s, p[y], p[z], k);
      if (E < j - .0012499999720603228) {
        f = 13;
        break;
      }
      if (E <= j + .0012499999720603228) {
        f = 15;
        break;
      }
      D = 0;
      H = k;
      for (I = x; ; ) {
        f = (D & 1) != 0 ? 18 : 19;
        f == 18 ? M = H + (j - E) * (I - H) / (B - E) : f == 19 && (M = (H + I) * .5);
        G = th(s, p[y], p[z], M);
        if (se(G - j) < .0012499999720603228) {
          f = 21;
          break;
        }
        f = G > j ? 23 : 24;
        f == 23 ? (H = M, E = G) : f == 24 && (I = M, B = G);
        D = G = D + 1;
        p[uh] += 1;
        if (G == 50) {
          f = 26;
          break;
        }
      }
      f == 21 && (x = M);
      p[vh] = p[vh] > D ? p[vh] : D;
      v = B = v + 1;
      if (B == 8) {
        f = 27;
        break;
      }
    }
    f == 9 ? (p[c] = 4, t[c + 1] = h, u = 1) : f == 11 ? k = x : f == 13 ? (p[c] = 1, t[c + 1] = k, u = 1) : f == 15 && (p[c] = 3, t[c + 1] = k, u = 1);
    l += 1;
    p[wh] += 1;
    if (u & 1) {
      f = 30;
      break;
    }
    if (l == 20) {
      f = 29;
      break;
    }
  }
  f == 4 ? (p[c] = 2, t[c + 1] = 0) : f == 6 ? (p[c] = 3, t[c + 1] = k) : f == 29 && (p[c] = 1, t[c + 1] = k);
  p[xh] = p[xh] > l ? p[xh] : l;
  b = e;
}

lh.X = 1;

function nh(c) {
  var d;
  d = 6.2831854820251465 * yh(t[c + 6] / 6.2831854820251465);
  t[c + 6] -= d;
  t[c + 7] -= d;
}

function rh(c, d, e, f, g, i, h) {
  var j = b;
  b += 66;
  var k, l, m = j + 4, n = j + 8, o = j + 10, r = j + 12, q = j + 14, s = j + 16, u = j + 18, x = j + 20, v = j + 22, y = j + 24, z = j + 26, B = j + 28, E = j + 30, D = j + 32, H = j + 34, I = j + 36, M = j + 38, G = j + 40, S = j + 42, P = j + 44, L = j + 46, T = j + 48, F = j + 50, Z = j + 52, aa = j + 54, W = j + 56, ca = j + 58, la = j + 60, $ = j + 62, X = j + 64;
  p[c] = e;
  p[c + 1] = g;
  l = p[d + 1];
  (0 < l & l < 3 ? 2 : 1) == 1 && Q(oh, 50, zh, Ah);
  var ba = f;
  f += 9;
  for (var ha = c + 2; ba < f; ba++, ha++) p[ha] = p[ba], t[ha] = t[ba];
  ba = i;
  f = i + 9;
  for (ha = c + 11; ba < f; ba++, ha++) p[ha] = p[ba], t[ha] = t[ba];
  jh(c + 2, j, h);
  jh(c + 11, m, h);
  i = l == 1 ? 3 : 4;
  if (i == 3) p[c + 20] = 0, G = Me(p[c], p[d + 2]), p[n] = p[G], t[n] = t[G], p[n + 1] = p[G + 1], t[n + 1] = t[G + 1], d = Me(p[c + 1], p[d + 5]), p[o] = p[d], t[o] = t[d], p[o + 1] = p[d + 1], t[o + 1] = t[d + 1], Xc(r, j, n), Xc(q, m, o), m = c + 23, J(s, q, r), p[m] = p[s], t[m] = t[s], p[m + 1] = p[s + 1], t[m + 1] = t[s + 1], k = c = ed(c + 23); else if (i == 4) if (r = c + 20, i = p[d + 2] == p[d + 3] ? 5 : 8, i == 5) {
    p[r] = 2;
    X = Me(g, p[d + 5]);
    p[u] = p[X];
    t[u] = t[X];
    p[u + 1] = p[X + 1];
    t[u + 1] = t[X + 1];
    X = Me(g, p[d + 6]);
    p[x] = p[X];
    t[x] = t[X];
    p[x + 1] = p[X + 1];
    t[x + 1] = t[X + 1];
    X = c + 23;
    J(y, x, u);
    de(v, y);
    p[X] = p[v];
    t[X] = t[v];
    p[X + 1] = p[v + 1];
    t[X + 1] = t[v + 1];
    ed(c + 23);
    U(z, m + 2, c + 23);
    X = c + 21;
    O(E, u, x);
    N(B, .5, E);
    p[X] = p[B];
    t[X] = t[B];
    p[X + 1] = p[B + 1];
    t[X + 1] = t[B + 1];
    Xc(D, m, c + 21);
    m = Me(e, p[d + 2]);
    p[H] = p[m];
    t[H] = t[m];
    p[H + 1] = p[m + 1];
    t[H + 1] = t[m + 1];
    Xc(I, j, H);
    J(M, I, D);
    m = K(M, z);
    if ((m < 0 ? 6 : 7) == 6) d = c + 23, Xd(G, c + 23), p[d] = p[G], t[d] = t[G], p[d + 1] = p[G + 1], t[d + 1] = t[G + 1], m = -m;
    k = m;
  } else if (i == 8) {
    p[r] = 1;
    G = Me(p[c], p[d + 2]);
    p[S] = p[G];
    t[S] = t[G];
    p[S + 1] = p[G + 1];
    t[S + 1] = t[G + 1];
    G = Me(p[c], p[d + 3]);
    p[P] = p[G];
    t[P] = t[G];
    p[P + 1] = p[G + 1];
    t[P + 1] = t[G + 1];
    G = c + 23;
    J(T, P, S);
    de(L, T);
    p[G] = p[L];
    t[G] = t[L];
    p[G + 1] = p[L + 1];
    t[G + 1] = t[L + 1];
    ed(c + 23);
    U(F, j + 2, c + 23);
    G = c + 21;
    O(aa, S, P);
    N(Z, .5, aa);
    p[G] = p[Z];
    t[G] = t[Z];
    p[G + 1] = p[Z + 1];
    t[G + 1] = t[Z + 1];
    Xc(W, j, c + 21);
    d = Me(p[c + 1], p[d + 5]);
    p[ca] = p[d];
    t[ca] = t[d];
    p[ca + 1] = p[d + 1];
    t[ca + 1] = t[d + 1];
    Xc(la, m, ca);
    J($, la, W);
    m = K($, F);
    if ((m < 0 ? 9 : 10) == 9) d = c + 23, Xd(X, c + 23), p[d] = p[X], t[d] = t[X], p[d + 1] = p[X + 1], t[d + 1] = t[X + 1], m = -m;
    k = m;
  }
  b = j;
  return k;
}

rh.X = 1;

function sh(c, d, e, f) {
  var g = b;
  b += 52;
  var i, h = g + 4, j = g + 8, k = g + 10, l = g + 12, m = g + 14, n = g + 16, o = g + 18, r = g + 20, q = g + 22, s = g + 24, u = g + 26, x = g + 28, v = g + 30, y = g + 32, z = g + 34, B = g + 36, E = g + 38, D = g + 40, H = g + 42, I = g + 44, M = g + 46, G = g + 48, S = g + 50;
  jh(c + 2, g, f);
  jh(c + 11, h, f);
  f = p[c + 20];
  f = f == 0 ? 1 : f == 1 ? 2 : f == 2 ? 3 : 4;
  f == 4 ? (Q(oh, 183, Bh, xe), p[d] = -1, p[e] = -1, i = 0) : f == 1 ? (Wd(j, g + 2, c + 23), s = h + 2, Xd(l, c + 23), Wd(k, s, l), p[d] = Le(p[c], j), p[e] = Le(p[c + 1], k), d = Me(p[c], p[d]), p[m] = p[d], t[m] = t[d], p[m + 1] = p[d + 1], t[m + 1] = t[d + 1], e = Me(p[c + 1], p[e]), p[n] = p[e], t[n] = t[e], p[n + 1] = p[e + 1], t[n + 1] = t[e + 1], Xc(o, g, m), Xc(r, h, n), J(q, r, o), i = c = K(q, c + 23)) : f == 2 ? (U(s, g + 2, c + 23), Xc(u, g, c + 21), m = h + 2, Xd(v, s), Wd(x, m, v), p[d] = -1, p[e] = Le(p[c + 1], x), c = Me(p[c + 1], p[e]), p[y] = p[c], t[y] = t[c], p[y + 1] = p[c + 1], t[y + 1] = t[c + 1], Xc(z, h, y), J(B, z, u), i = c = K(B, s)) : f == 3 && (U(E, h + 2, c + 23), Xc(D, h, c + 21), h = g + 2, Xd(I, E), Wd(H, h, I), p[e] = -1, p[d] = Le(p[c], H), c = Me(p[c], p[d]), p[M] = p[c], t[M] = t[c], p[M + 1] = p[c + 1], t[M + 1] = t[c + 1], Xc(G, g, M), J(S, G, D), i = c = K(S, E));
  b = g;
  return i;
}

sh.X = 1;

function Ch(c) {
  p[c] = Dh + 2;
  vc(p[c + 3]);
  p[c + 3] = 0;
  p[c + 4] = 0;
}

function Eh(c, d, e) {
  var f;
  f = 0 <= e ? 1 : 2;
  f == 1 && (f = e < p[c + 4] - 1 ? 3 : 2);
  f == 2 && Q(Fh, 89, Gh, Hh);
  p[d + 1] = 1;
  t[d + 2] = t[c + 2];
  f = d + 3;
  var g = p[c + 3] + (e << 1);
  p[f] = p[g];
  t[f] = t[g];
  p[f + 1] = p[g + 1];
  t[f + 1] = t[g + 1];
  f = d + 5;
  g = p[c + 3] + (e + 1 << 1);
  p[f] = p[g];
  t[f] = t[g];
  p[f + 1] = p[g + 1];
  t[f + 1] = t[g + 1];
  f = e > 0 ? 4 : 5;
  f == 4 ? (f = d + 7, g = p[c + 3] + (e - 1 << 1), p[f] = p[g], t[f] = t[g], p[f + 1] = p[g + 1], t[f + 1] = t[g + 1], p[d + 11] = 1) : f == 5 && (f = d + 7, g = c + 5, p[f] = p[g], t[f] = t[g], p[f + 1] = p[g + 1], t[f + 1] = t[g + 1], p[d + 11] = p[c + 9] & 1);
  f = e < p[c + 4] - 2 ? 7 : 8;
  f == 7 ? (f = d + 9, c = p[c + 3] + (e + 2 << 1), p[f] = p[c], t[f] = t[c], p[f + 1] = p[c + 1], t[f + 1] = t[c + 1], p[d + 12] = 1) : f == 8 && (e = d + 9, f = c + 7, p[e] = p[f], t[e] = t[f], p[e + 1] = p[f + 1], t[e + 1] = t[f + 1], p[d + 12] = p[c + 10] & 1);
}

Eh.X = 1;

function Ih(c, d, e, f) {
  var g = b;
  b += 8;
  var i, h, j = g + 2, k = g + 4, l = g + 6;
  i = f < p[c + 4] ? 2 : 1;
  i == 1 && Q(Fh, 148, Jh, Kh);
  h = f + 1;
  i = h == p[c + 4] ? 3 : 4;
  i == 3 && (h = 0);
  Xc(g, e, p[c + 3] + (f << 1));
  Xc(j, e, p[c + 3] + (h << 1));
  Yg(k, g, j);
  p[d] = p[k];
  t[d] = t[k];
  p[d + 1] = p[k + 1];
  t[d + 1] = t[k + 1];
  c = d + 2;
  Zg(l, g, j);
  p[c] = p[l];
  t[c] = t[l];
  p[c + 1] = p[l + 1];
  t[c + 1] = t[l + 1];
  b = g;
}

Ih.X = 1;

function th(c, d, e, f) {
  var g = b;
  b += 52;
  var i, h = g + 4, j = g + 8, k = g + 10, l = g + 12, m = g + 14, n = g + 16, o = g + 18, r = g + 20, q = g + 22, s = g + 24, u = g + 26, x = g + 28, v = g + 30, y = g + 32, z = g + 34, B = g + 36, E = g + 38, D = g + 40, H = g + 42, I = g + 44, M = g + 46, G = g + 48, S = g + 50;
  jh(c + 2, g, f);
  jh(c + 11, h, f);
  f = p[c + 20];
  f = f == 0 ? 1 : f == 1 ? 2 : f == 2 ? 3 : 4;
  f == 4 ? (Q(oh, 242, Ph, xe), i = 0) : f == 1 ? (Wd(j, g + 2, c + 23), s = h + 2, Xd(l, c + 23), Wd(k, s, l), d = Me(p[c], d), p[m] = p[d], t[m] = t[d], p[m + 1] = p[d + 1], t[m + 1] = t[d + 1], e = Me(p[c + 1], e), p[n] = p[e], t[n] = t[e], p[n + 1] = p[e + 1], t[n + 1] = t[e + 1], Xc(o, g, m), Xc(r, h, n), J(q, r, o), i = c = K(q, c + 23)) : f == 2 ? (U(s, g + 2, c + 23), Xc(u, g, c + 21), m = h + 2, Xd(v, s), Wd(x, m, v), c = Me(p[c + 1], e), p[y] = p[c], t[y] = t[c], p[y + 1] = p[c + 1], t[y + 1] = t[c + 1], Xc(z, h, y), J(B, z, u), i = c = K(B, s)) : f == 3 && (U(E, h + 2, c + 23), Xc(D, h, c + 21), h = g + 2, Xd(I, E), Wd(H, h, I), c = Me(p[c], d), p[M] = p[c], t[M] = t[c], p[M + 1] = p[c + 1], t[M + 1] = t[c + 1], Xc(G, g, M), J(S, G, D), i = c = K(S, E));
  b = g;
  return i;
}

th.X = 1;

function kh(c, d) {
  var e = Qh(d);
  t[c] = e;
  e = Rh(d);
  t[c + 1] = e;
}

function Sh(c, d) {
  var e, f;
  f = Th(d, 40);
  if (f == 0) {
    var g = 0;
    e = 2;
  } else e = 1;
  e == 1 && (p[f] = $b + 2, p[f] = Dh + 2, p[f + 1] = 3, t[f + 2] = .009999999776482582, p[f + 3] = 0, p[f + 4] = 0, p[f + 9] = 0, p[f + 10] = 0, g = f);
  e = g;
  f = p[c + 3];
  var g = p[c + 4], i;
  i = p[e + 3] == 0 ? 1 : 2;
  i == 1 && (i = p[e + 4] == 0 ? 3 : 2);
  i == 2 && Q(Fh, 48, Uh, Vh);
  (g >= 2 ? 5 : 4) == 4 && Q(Fh, 49, Uh, Wh);
  p[e + 4] = g;
  g = hb(g << 3);
  p[e + 3] = g;
  g = f;
  f += 2 * ((p[e + 4] << 3) / 8);
  for (i = p[e + 3]; g < f; g++, i++) p[i] = p[g], t[i] = t[g];
  p[e + 9] = 0;
  p[e + 10] = 0;
  f = e + 5;
  g = c + 5;
  p[f] = p[g];
  t[f] = t[g];
  p[f + 1] = p[g + 1];
  t[f + 1] = t[g + 1];
  f = e + 7;
  g = c + 7;
  p[f] = p[g];
  t[f] = t[g];
  p[f + 1] = p[g + 1];
  t[f + 1] = t[g + 1];
  p[e + 9] = p[c + 9] & 1;
  p[e + 10] = p[c + 10] & 1;
  return e;
}

Sh.X = 1;

function Xh(c, d, e, f, g) {
  var i = b;
  b += 13;
  var h, j;
  h = g < p[c + 4] ? 2 : 1;
  h == 1 && Q(Fh, 129, Yh, Kh);
  ic(i);
  j = g + 1;
  h = j == p[c + 4] ? 3 : 4;
  h == 3 && (j = 0);
  h = i + 3;
  g = p[c + 3] + (g << 1);
  p[h] = p[g];
  t[h] = t[g];
  p[h + 1] = p[g + 1];
  t[h + 1] = t[g + 1];
  g = i + 5;
  c = p[c + 3] + (j << 1);
  p[g] = p[c];
  t[g] = t[c];
  p[g + 1] = p[c + 1];
  t[g + 1] = t[c + 1];
  d = Zh(i, d, e, f);
  b = i;
  return d;
}

Xh.X = 1;

function $h(c, d) {
  p[c + 1] = p[d + 1];
  t[c + 2] = t[d + 2];
}

function ai(c, d, e, f) {
  var g = b;
  b += 12;
  var i, h, j = g + 2, k = g + 4, l = g + 6, m = g + 8, n = g + 10;
  U(j, f + 2, c + 3);
  O(g, f, j);
  J(k, e, g);
  j = K(k, k) - t[c + 2] * t[c + 2];
  J(l, e + 2, e);
  c = K(k, l);
  f = K(l, l);
  j = c * c - f * j;
  i = j < 0 ? 2 : 1;
  a : do if (i == 1) if (f < 1.1920928955078125e-7) i = 2; else {
    h = c;
    i = j;
    i = gd(i);
    h = -(h + i);
    i = 0 <= h ? 4 : 6;
    do if (i == 4) if (h <= t[e + 4] * f) {
      h /= f;
      t[d + 2] = h;
      e = d;
      N(n, h, l);
      O(m, k, n);
      k = e;
      p[k] = p[m];
      t[k] = t[m];
      p[k + 1] = p[m + 1];
      t[k + 1] = t[m + 1];
      ed(d);
      h = 1;
      i = 7;
      break a;
    } else i = 6; while (0);
    h = 0;
    i = 7;
  } while (0);
  i == 2 && (h = 0);
  b = g;
  return h;
}

ai.X = 1;

function Zh(c, d, e, f) {
  var g = b;
  b += 30;
  var i, h, j = g + 2, k = g + 4, l = g + 6, m = g + 8, n = g + 10, o = g + 12, r = g + 14, q = g + 16;
  i = g + 18;
  var s = g + 20, u = g + 22, x = g + 24, v = g + 26, y = g + 28, z = f + 2;
  J(j, e, f);
  Wd(g, z, j);
  j = f + 2;
  J(l, e + 2, f);
  Wd(k, j, l);
  J(m, k, g);
  f = c + 3;
  p[n] = p[f];
  t[n] = t[f];
  p[n + 1] = p[f + 1];
  t[n + 1] = t[f + 1];
  c += 5;
  p[o] = p[c];
  t[o] = t[c];
  p[o + 1] = p[c + 1];
  t[o + 1] = t[c + 1];
  J(r, o, n);
  tc(q, t[r + 1], -t[r]);
  ed(q);
  J(i, n, g);
  r = K(q, i);
  c = K(q, m);
  i = c == 0 ? 1 : 2;
  a : do if (i == 1) h = 0; else if (i == 2) {
    h = r / c;
    i = h < 0 ? 4 : 3;
    do if (i == 3) if (t[e + 4] < h) i = 4; else if (N(u, h, m), O(s, g, u), J(x, o, n), f = K(x, x), i = f == 0 ? 6 : 7, i == 6) {
      h = 0;
      break a;
    } else if (i == 7) if (J(v, s, n), i = K(v, x) / f, i = i < 0 | 1 < i ? 8 : 9, i == 8) {
      h = 0;
      break a;
    } else if (i == 9) {
      t[d + 2] = h;
      i = r > 0 ? 10 : 11;
      i == 10 ? (Xd(y, q), q = d, p[q] = p[y], t[q] = t[y], p[q + 1] = p[y + 1], t[q + 1] = t[y + 1]) : i == 11 && (y = d, p[y] = p[q], t[y] = t[q], p[y + 1] = p[q + 1], t[y + 1] = t[q + 1]);
      h = 1;
      break a;
    } while (0);
    h = 0;
  } while (0);
  b = g;
  return h;
}

Zh.X = 1;

function bi(c, d, e) {
  var f = b;
  b += 16;
  var g, i = f + 2, h, j = f + 4, k = f + 6, l = f + 8, m = f + 10, n = f + 12, o = f + 14;
  Xc(f, e, c + 5);
  p[i] = p[f];
  t[i] = t[f];
  p[i + 1] = p[f + 1];
  t[i + 1] = t[f + 1];
  h = 1;
  var r = c + 37;
  g = h < p[r] ? 1 : 3;
  a : do if (g == 1) for (var q = c + 5, s = f, u = k, x = i, v = l; ; ) if (Xc(j, e, q + (h << 1)), Yg(k, f, j), p[s] = p[u], t[s] = t[u], p[s + 1] = p[u + 1], t[s + 1] = t[u + 1], Zg(l, i, j), p[x] = p[v], t[x] = t[v], p[x + 1] = p[v + 1], t[x + 1] = t[v + 1], h += 1, h >= p[r]) break a; while (0);
  tc(m, t[c + 2], t[c + 2]);
  J(n, f, m);
  p[d] = p[n];
  t[d] = t[n];
  p[d + 1] = p[n + 1];
  t[d + 1] = t[n + 1];
  c = d + 2;
  O(o, i, m);
  p[c] = p[o];
  t[c] = t[o];
  p[c + 1] = p[o + 1];
  t[c + 1] = t[o + 1];
  b = f;
}

bi.X = 1;

function ci(c, d) {
  t[c] *= d;
  t[c + 1] *= d;
}

function di(c) {
  var d, e;
  e = 0;
  var f = c + 1;
  d = e < p[f] ? 1 : 3;
  a : do if (d == 1) for (var g = c; ; ) if (vc(p[p[g] + (e << 1) + 1]), e += 1, e >= p[f]) break a; while (0);
  vc(p[c]);
}

function ei(c, d, e, f) {
  var g = b;
  b += 14;
  var i, h, j = g + 2, k = g + 4, l = g + 6, m = g + 8, n, o, r = g + 10, q, s = g + 12;
  n = f + 2;
  J(j, e, f);
  Wd(g, n, j);
  j = f + 2;
  J(l, e + 2, f);
  Wd(k, j, l);
  J(m, k, g);
  k = 0;
  l = t[e + 4];
  j = -1;
  n = 0;
  var u = c + 37, x = c + 21, v = c + 5, y = c + 21;
  a : for (;;) {
    if (n >= p[u]) {
      i = 14;
      break;
    }
    i = x + (n << 1);
    J(r, v + (n << 1), g);
    o = K(i, r);
    q = K(y + (n << 1), m);
    i = q == 0 ? 3 : 5;
    b : do if (i == 3) {
      if (o < 0) {
        i = 4;
        break a;
      }
    } else if (i == 5) {
      if (q < 0) i = 6; else {
        var z = q;
        i = 8;
      }
      do if (i == 6) if (o < k * q) {
        k = o / q;
        j = n;
        i = 11;
        break b;
      } else z = q, i = 8; while (0);
      z > 0 ? o < l * q ? l = o / q : i = 11 : i = 11;
    } while (0);
    if (l < k) {
      i = 12;
      break;
    }
    n += 1;
  }
  i == 14 ? (i = 0 <= k ? 15 : 16, i == 15 && (i = k <= t[e + 4] ? 17 : 16), i == 16 && Q(fi, 249, gi, hi), i = j >= 0 ? 18 : 19, i == 18 ? (t[d + 2] = k, U(s, f + 2, c + 21 + (j << 1)), p[d] = p[s], t[d] = t[s], p[d + 1] = p[s + 1], t[d + 1] = t[s + 1], h = 1) : i == 19 && (h = 0)) : i == 4 ? h = 0 : i == 12 && (h = 0);
  b = g;
  return h;
}

ei.X = 1;

function ii(c, d, e) {
  var f = b;
  b += 14;
  var g, i, h, j = f + 2, k, l = f + 4, m = f + 6, n, o, r = f + 8, q = f + 10, s, u, x, v = f + 12;
  g = p[c + 37] >= 3 ? 2 : 1;
  g == 1 && Q(fi, 306, ji, ki);
  sc(f, 0, 0);
  h = i = 0;
  tc(j, 0, 0);
  k = 0;
  n = c + 37;
  g = k < p[n] ? 3 : 5;
  a : do if (g == 3) for (var y = c + 5; ; ) if (Sb(j, y + (k << 1)), k += 1, k >= p[n]) break a; while (0);
  ci(j, 1 / p[c + 37]);
  k = 0;
  y = c + 37;
  g = k < p[y] ? 6 : 11;
  a : do if (g == 6) for (var z = c + 5, B = c + 37, E = c + 5, D = l, H = l + 1, I = m, M = m + 1, G = c + 5; ; ) if (J(l, z + (k << 1), j), g = k + 1 < p[B] ? 8 : 9, g == 8 ? J(m, E + (k + 1 << 1), j) : g == 9 && J(m, G, j), n = R(l, m), o = n * .5, i += o, o *= .3333333432674408, O(q, l, m), N(r, o, q), Sb(f, r), s = t[D], o = t[H], u = t[I], x = t[M], s = s * s + u * s + u * u, o = o * o + x * o + x * x, h += n * .0833333358168602 * (s + o), k += 1, k >= p[y]) break a; while (0);
  t[d] = e * i;
  (i > 1.1920928955078125e-7 ? 13 : 12) == 12 && Q(fi, 352, ji, li);
  ci(f, 1 / i);
  c = d + 1;
  O(v, f, j);
  p[c] = p[v];
  t[c] = t[v];
  p[c + 1] = p[v + 1];
  t[c + 1] = t[v + 1];
  t[d + 3] = e * h;
  t[d + 3] += t[d] * (K(d + 1, d + 1) - K(f, f));
  b = f;
}

ii.X = 1;

function mi(c) {
  var d, e;
  p[c + 2] = 128;
  p[c + 1] = 0;
  e = hb(p[c + 2] << 3);
  p[c] = e;
  d = p[c];
  var f = p[c + 2] << 3;
  for (e = 0; e < 2 * (f / 8); e++) p[d + e] = 0, t[d + e] = 0;
  c += 3;
  for (e = 0; e < 14; e++) p[c + e] = 0, t[c + e] = 0;
  d = (p[ni] & 1) == 0 ? 1 : 10;
  if (d == 1) {
    c = 0;
    e = 1;
    for (d = 0; ; ) {
      d = d < 14 ? 5 : 4;
      d == 4 && Q(oi, 73, pi, qi);
      d = e <= p[ri + c] ? 6 : 7;
      d == 6 ? p[si + e] = c & 255 : d == 7 && (c += 1, p[si + e] = c & 255);
      e = d = e + 1;
      if (!(d <= 640)) break;
      d = c;
    }
    p[ni] = 1;
  }
}

mi.X = 1;

function ti(c, d, e) {
  var f;
  if ((e == 0 ? 8 : 1) == 1) {
    if (0 < e) {
      var g = e;
      f = 3;
    } else f = 2;
    f == 2 && (Q(oi, 164, ui, vi), g = e);
    f = g > 640 ? 4 : 5;
    f == 4 ? vc(d) : f == 5 && (e = p[si + e], (0 <= e & e < 14 ? 7 : 6) == 6 && Q(oi, 173, ui, wi), p[d] = p[e + (c + 3)], p[e + (c + 3)] = d);
  }
}

ti.X = 1;

function xi(c, d) {
  return t[c] * t[d] + t[c + 1] * t[d + 1] + t[c + 2] * t[d + 2];
}

function yi(c, d, e) {
  zi(c, t[d + 1] * t[e + 2] - t[d + 2] * t[e + 1], t[d + 2] * t[e] - t[d] * t[e + 2], t[d] * t[e + 1] - t[d + 1] * t[e]);
}

yi.X = 1;

function Ai(c, d, e) {
  var f, g, i, h;
  f = t[d];
  g = t[d + 3];
  i = t[d + 1];
  d = t[d + 4];
  h = f * d - g * i;
  if ((h != 0 ? 1 : 2) == 1) h = 1 / h;
  t[c] = h * (d * t[e] - g * t[e + 1]);
  t[c + 1] = h * (f * t[e + 1] - i * t[e]);
}

Ai.X = 1;

function Bi(c, d) {
  var e, f, g, i, h;
  e = t[c];
  f = t[c + 3];
  g = t[c + 1];
  i = t[c + 4];
  h = e * i - f * g;
  if ((h != 0 ? 1 : 2) == 1) h = 1 / h;
  t[d] = h * i;
  t[d + 3] = -h * f;
  t[d + 2] = 0;
  t[d + 1] = -h * g;
  t[d + 4] = h * e;
  t[d + 5] = 0;
  t[d + 6] = 0;
  t[d + 7] = 0;
  t[d + 8] = 0;
}

Bi.X = 1;

function zi(c, d, e, f) {
  t[c] = d;
  t[c + 1] = e;
  t[c + 2] = f;
}

function Th(c, d) {
  var e, f, g, i, h, j, k, l, m;
  e = d == 0 ? 1 : 2;
  if (e == 1) f = 0; else if (e == 2) if (0 < d ? (g = d, e = 4) : e = 3, e == 3 && (Q(oi, 104, Ci, vi), g = d), e = g > 640 ? 5 : 6, e == 5) f = hb(d); else if (e == 6) if (g = p[si + d], (0 <= g & g < 14 ? 8 : 7) == 7 && Q(oi, 112, Ci, wi), e = p[g + (c + 3)] != 0 ? 9 : 10, e == 9) i = p[g + (c + 3)], p[g + (c + 3)] = p[i], f = i; else if (e == 10) {
    e = p[c + 1] == p[c + 2] ? 11 : 12;
    if (e == 11) {
      e = p[c];
      p[c + 2] += 128;
      f = hb(p[c + 2] << 3);
      p[c] = f;
      f = e;
      h = e + 2 * ((p[c + 1] << 3) / 8);
      for (j = p[c]; f < h; f++, j++) p[j] = p[f], t[j] = t[f];
      f = p[c] + (p[c + 1] << 1);
      for (h = 0; h < 256; h++) p[f + h] = 0, t[f + h] = 0;
      vc(e);
    }
    f = p[c] + (p[c + 1] << 1);
    e = hb(16384);
    p[f + 1] = e;
    h = p[ri + g];
    p[f] = h;
    j = 16384 / h | 0;
    (h * j <= 16384 ? 14 : 13) == 13 && Q(oi, 140, Ci, Di);
    k = 0;
    e = p[f + 1];
    if (k < j - 1) l = e, m = h, e = 15; else {
      i = e;
      var n = h;
      e = 16;
    }
    a : do if (e == 15) for (;;) if (l += k * m, m = p[f + 1] + (k + 1) * h, p[l] = m, k += 1, k < j - 1) l = p[f + 1], m = h; else {
      i = p[f + 1];
      n = h;
      break a;
    } while (0);
    p[i + (j - 1) * n] = 0;
    p[g + (c + 3)] = p[p[f + 1]];
    p[c + 1] += 1;
    f = p[f + 1];
  }
  return f;
}

Th.X = 1;

function Ei(c, d, e) {
  var f = b;
  b += 12;
  var g, i = f + 3, h = f + 6, j = f + 9;
  yi(f, d + 3, d + 6);
  g = xi(d, f);
  if ((g != 0 ? 1 : 2) == 1) g = 1 / g;
  var k = g;
  yi(i, d + 3, d + 6);
  t[c] = k * xi(e, i);
  i = g;
  yi(h, e, d + 6);
  t[c + 1] = i * xi(d, h);
  yi(j, d + 3, e);
  t[c + 2] = g * xi(d, j);
  b = f;
}

Ei.X = 1;

function Fi(c, d) {
  var e = b;
  b += 3;
  var f, g, i, h, j, k, l;
  yi(e, c + 3, c + 6);
  f = xi(c, e);
  if ((f != 0 ? 1 : 2) == 1) f = 1 / f;
  g = t[c];
  i = t[c + 3];
  h = t[c + 6];
  j = t[c + 4];
  k = t[c + 7];
  l = t[c + 8];
  t[d] = f * (j * l - k * k);
  t[d + 1] = f * (h * k - i * l);
  t[d + 2] = f * (i * k - h * j);
  t[d + 3] = t[d + 1];
  t[d + 4] = f * (g * l - h * h);
  t[d + 5] = f * (h * i - g * k);
  t[d + 6] = t[d + 2];
  t[d + 7] = t[d + 5];
  t[d + 8] = f * (g * j - i * i);
  b = e;
}

Fi.X = 1;

function Gi(c) {
  var d, e;
  d = c != c ? 1 : 2;
  if (d == 1) e = 0; else if (d == 2) {
    if (-Infinity < c) d = 3; else {
      var f = 0;
      d = 4;
    }
    d == 3 && (f = c < Infinity);
    e = f;
  }
  return e;
}

function Hi(c) {
  p[c + 102400] = 0;
  p[c + 102401] = 0;
  p[c + 102402] = 0;
  p[c + 102499] = 0;
}

function Ii(c) {
  var d;
  d = p[c + 102400] == 0 ? 2 : 1;
  d == 1 && Q(Ji, 32, Ki, Li);
  d = p[c + 102499] == 0 ? 4 : 3;
  d == 3 && Q(Ji, 33, Ki, Mi);
}

function Ni(c, d) {
  var e, f;
  e = p[c + 102499] > 0 ? 2 : 1;
  e == 1 && Q(Ji, 63, Oi, Pi);
  f = c + 102403 + p[c + 102499] * 3 - 3;
  e = d == p[f] ? 4 : 3;
  e == 3 && Q(Ji, 65, Oi, Qi);
  e = p[f + 2] & 1 ? 5 : 6;
  e == 5 ? vc(d) : e == 6 && (p[c + 102400] -= p[f + 1]);
  p[c + 102401] -= p[f + 1];
  p[c + 102499] -= 1;
}

Ni.X = 1;

function Ri(c) {
  return (p[c + 102517] & 2) == 2;
}

function V(c) {
  var d = b;
  b += 1;
  p[d] = arguments[V.length];
  Si(c, p[d]);
  b = d;
}

function Ti(c, d) {
  var e, f;
  e = p[c + 102499] < 32 ? 2 : 1;
  e == 1 && Q(Ji, 38, Ui, Vi);
  f = c + 102403 + p[c + 102499] * 3;
  p[f + 1] = d;
  e = d + p[c + 102400] > 102400 ? 3 : 4;
  e == 3 ? (e = hb(d), p[f] = e, p[f + 2] = 1) : e == 4 && (p[f] = c + p[c + 102400], p[f + 2] = 0, p[c + 102400] += d);
  p[c + 102401] += d;
  p[c + 102402] = p[c + 102402] > p[c + 102401] ? p[c + 102402] : p[c + 102401];
  p[c + 102499] += 1;
  return p[f];
}

Ti.X = 1;

function Wi(c) {
  var d = b;
  b += 2;
  Xi(d);
  p[c] = p[d];
  p[c + 1] = Math.floor(p[d + 1] * .0010000000474974513);
  b = d;
}

function Yi(c) {
  var d = b;
  b += 2;
  Xi(d);
  c = (p[d] - p[c]) * 1e3 + p[d + 1] * .0010000000474974513 - p[c + 1];
  b = d;
  return c;
}

function Zi(c, d, e) {
  var f;
  f = $i(d + 1) ? 2 : 1;
  f == 1 && Q(aj, 27, bj, cj);
  f = $i(d + 4) ? 4 : 3;
  f == 3 && Q(aj, 28, bj, dj);
  f = Gi(t[d + 3]) ? 6 : 5;
  f == 5 && Q(aj, 29, bj, ej);
  f = Gi(t[d + 6]) ? 8 : 7;
  f == 7 && Q(aj, 30, bj, fj);
  f = Gi(t[d + 8]) ? 9 : 10;
  f == 9 && (f = t[d + 8] >= 0 ? 11 : 10);
  f == 10 && Q(aj, 31, bj, gj);
  f = Gi(t[d + 7]) ? 12 : 13;
  f == 12 && (f = t[d + 7] >= 0 ? 14 : 13);
  f == 13 && Q(aj, 32, bj, hj);
  p[c + 1] = 0;
  f = p[d + 12] & 1 ? 15 : 16;
  f == 15 && (p[c + 1] = (p[c + 1] | 8) & 65535);
  f = p[d + 11] & 1 ? 17 : 18;
  f == 17 && (p[c + 1] = (p[c + 1] | 16) & 65535);
  f = p[d + 9] & 1 ? 19 : 20;
  f == 19 && (p[c + 1] = (p[c + 1] | 4) & 65535);
  f = p[d + 10] & 1 ? 21 : 22;
  f == 21 && (p[c + 1] = (p[c + 1] | 2) & 65535);
  f = p[d + 13] & 1 ? 23 : 24;
  f == 23 && (p[c + 1] = (p[c + 1] | 32) & 65535);
  p[c + 22] = e;
  e = c + 3;
  f = d + 1;
  p[e] = p[f];
  t[e] = t[f];
  p[e + 1] = p[f + 1];
  t[e + 1] = t[f + 1];
  kh(c + 5, t[d + 3]);
  hc(c + 7);
  e = c + 9;
  f = c + 3;
  p[e] = p[f];
  t[e] = t[f];
  p[e + 1] = p[f + 1];
  t[e + 1] = t[f + 1];
  e = c + 11;
  f = c + 3;
  p[e] = p[f];
  t[e] = t[f];
  p[e + 1] = p[f + 1];
  t[e + 1] = t[f + 1];
  t[c + 13] = t[d + 3];
  t[c + 14] = t[d + 3];
  t[c + 15] = 0;
  p[c + 27] = 0;
  p[c + 28] = 0;
  p[c + 23] = 0;
  p[c + 24] = 0;
  e = c + 16;
  f = d + 4;
  p[e] = p[f];
  t[e] = t[f];
  p[e + 1] = p[f + 1];
  t[e + 1] = t[f + 1];
  t[c + 18] = t[d + 6];
  t[c + 33] = t[d + 7];
  t[c + 34] = t[d + 8];
  t[c + 35] = t[d + 15];
  hc(c + 19);
  t[c + 21] = 0;
  t[c + 36] = 0;
  p[c] = p[d];
  f = p[c] == 2 ? 25 : 26;
  f == 25 ? (t[c + 29] = 1, t[c + 30] = 1) : f == 26 && (t[c + 29] = 0, t[c + 30] = 0);
  t[c + 31] = 0;
  t[c + 32] = 0;
  p[c + 37] = p[d + 14];
  p[c + 25] = 0;
  p[c + 26] = 0;
}

Zi.X = 1;

function $i(c) {
  var d;
  if (Gi(t[c])) d = 1; else {
    var e = 0;
    d = 2;
  }
  d == 1 && (e = Gi(t[c + 1]));
  return e;
}

function ij(c) {
  var d = b;
  b += 16;
  var e, f, g = d + 2, i = d + 6, h = d + 8, j = d + 10, k = d + 12, l = d + 14;
  t[c + 29] = 0;
  t[c + 30] = 0;
  t[c + 31] = 0;
  t[c + 32] = 0;
  hc(c + 7);
  e = p[c] == 0 ? 2 : 1;
  do if (e == 1) if (p[c] == 1) e = 2; else {
    e = p[c] == 2 ? 5 : 4;
    e == 4 && Q(aj, 284, jj, kj);
    e = d;
    p[e] = p[Ce];
    t[e] = t[Ce];
    p[e + 1] = p[Ce + 1];
    t[e + 1] = t[Ce + 1];
    f = p[c + 25];
    e = p[c + 25] != 0 ? 6 : 10;
    a : do if (e == 6) for (var m = g, n = c + 29, o = g, r = g + 1, q = g + 3, s = c + 31; ; ) {
      e = t[f] == 0 ? 9 : 8;
      if (e == 8) {
        var u = p[f + 3];
        qb[p[p[u] + 7]](u, g, t[f]);
        t[n] += t[m];
        N(i, t[o], r);
        Sb(d, i);
        t[s] += t[q];
      }
      f = u = p[f + 1];
      if (u == 0) break a;
    } while (0);
    f = c + 29;
    e = t[c + 29] > 0 ? 11 : 12;
    e == 11 ? (t[c + 30] = 1 / t[f], ci(d, t[c + 30])) : e == 12 && (t[f] = 1, t[c + 30] = 1);
    e = t[c + 31] > 0 ? 14 : 18;
    e == 14 && ((p[c + 1] & 16) != 0 ? e = 18 : (t[c + 31] -= t[c + 29] * K(d, d), e = t[c + 31] > 0 ? 17 : 16, e == 16 && Q(aj, 319, jj, lj), t[c + 32] = 1 / t[c + 31], e = 19));
    e == 18 && (t[c + 31] = 0, t[c + 32] = 0);
    e = h;
    f = c + 11;
    p[e] = p[f];
    t[e] = t[f];
    p[e + 1] = p[f + 1];
    t[e + 1] = t[f + 1];
    e = c + 7;
    f = d;
    p[e] = p[f];
    t[e] = t[f];
    p[e + 1] = p[f + 1];
    t[e + 1] = t[f + 1];
    e = c + 9;
    f = c + 11;
    Xc(j, c + 3, c + 7);
    m = f;
    f = j;
    p[m] = p[f];
    t[m] = t[f];
    p[m + 1] = p[f + 1];
    t[m + 1] = t[f + 1];
    m = hb(2);
    mj(m, f);
    mj(e, m);
    vc(m);
    e = c + 16;
    f = t[c + 18];
    J(l, c + 11, h);
    Ke(k, f, l);
    Sb(e, k);
    e = 20;
  } while (0);
  e == 2 && (g = c + 9, i = c + 3, p[g] = p[i], t[g] = t[i], p[g + 1] = p[i + 1], t[g + 1] = t[i + 1], g = c + 11, i = c + 3, p[g] = p[i], t[g] = t[i], p[g + 1] = p[i + 1], t[g + 1] = t[i + 1], t[c + 13] = t[c + 14]);
  b = d;
}

ij.X = 1;

function nj(c) {
  var d = b;
  b += 8;
  var e;
  e = d + 4;
  var f = d + 6, g;
  kh(d + 2, t[c + 13]);
  g = c + 9;
  U(f, d + 2, c + 7);
  J(e, g, f);
  p[d] = p[e];
  t[d] = t[e];
  p[d + 1] = p[e + 1];
  t[d + 1] = t[e + 1];
  f = p[c + 22] + 102518;
  g = p[c + 25];
  e = p[c + 25] != 0 ? 1 : 3;
  a : do if (e == 1) for (var i = c + 3; ; ) {
    oj(g, f, d, i);
    var h = p[g + 1];
    g = h;
    if (h == 0) break a;
  } while (0);
  b = d;
}

function yc(c, d) {
  var e, f = c + 1, g = p[f];
  e = d & 1 ? 1 : 3;
  e == 1 ? (g & 2) == 0 && (p[c + 1] = (p[c + 1] | 2) & 65535, t[c + 36] = 0) : e == 3 && (p[f] = g & 65533, t[c + 36] = 0, hc(c + 16), t[c + 18] = 0, hc(c + 19), t[c + 21] = 0);
}

function pj(c, d) {
  var e, f, g;
  e = p[c] != 2 ? 1 : 3;
  e == 1 && (p[d] == 2 ? e = 3 : (f = 0, e = 10));
  if (e == 3) {
    g = p[c + 27];
    var i = p[c + 27];
    a : for (;;) {
      if (i == 0) {
        e = 9;
        break;
      }
      e = p[g] == d ? 6 : 8;
      if (e == 6 && (p[p[g + 1] + 16] & 1) == 0) {
        e = 7;
        break a;
      }
      g = i = p[g + 3];
    }
    e == 9 ? f = 1 : e == 7 && (f = 0);
  }
  return f;
}

pj.X = 1;

function qj(c, d) {
  var e, f, g, i;
  e = Ri(p[c + 22]) == 0 ? 2 : 1;
  e == 1 && Q(aj, 153, rj, sj);
  e = Ri(p[c + 22]) == 1 ? 3 : 4;
  e == 3 ? f = 0 : e == 4 && (f = p[c + 22], g = Th(f, 44), g == 0 ? (i = 0, e = 6) : e = 5, e == 5 && (tj(g), i = g), uj(i, f, c, d), e = (p[c + 1] & 32) != 0 ? 7 : 8, e == 7 && (e = p[c + 22] + 102518, vj(i, e, c + 3)), p[i + 1] = p[c + 25], p[c + 25] = i, p[c + 26] += 1, p[i + 2] = c, e = t[i] > 0 ? 9 : 10, e == 9 && ij(c), p[p[c + 22] + 102517] |= 1, f = i);
  return f;
}

qj.X = 1;

function Cc(c, d, e) {
  var f = b;
  b += 9;
  wj(f + 6);
  p[f] = 0;
  p[f + 1] = 0;
  t[f + 2] = .20000000298023224;
  t[f + 3] = 0;
  t[f + 4] = 0;
  p[f + 5] = 0;
  p[f] = d;
  t[f + 4] = e;
  qj(c, f);
  b = f;
}

function wj(c) {
  p[c] = 1;
  p[c + 1] = -1;
  p[c + 2] = 0;
}

function xj(c) {
  Tc(c);
  p[c + 15] = 0;
  p[c + 16] = 0;
  p[c + 17] = yj;
  p[c + 18] = zj;
  p[c + 19] = 0;
}

function Aj(c) {
  return p[c + 2];
}

function Bj(c) {
  return (p[c + 1] & 2) == 2;
}

function Cj(c, d) {
  var e, f, g;
  f = p[d + 12];
  g = p[d + 13];
  f = Aj(f);
  g = Aj(g);
  e = p[c + 18] != 0 ? 1 : 3;
  e == 1 && (p[d + 1] & 2) == 2 && (e = p[c + 18], qb[p[p[e] + 3]](e, d));
  e = p[d + 2] != 0 ? 4 : 5;
  e == 4 && (p[p[d + 2] + 3] = p[d + 3]);
  e = p[d + 3] != 0 ? 6 : 7;
  e == 6 && (p[p[d + 3] + 2] = p[d + 2]);
  e = d == p[c + 15] ? 8 : 9;
  e == 8 && (p[c + 15] = p[d + 3]);
  e = p[d + 6] != 0 ? 10 : 11;
  e == 10 && (p[p[d + 6] + 3] = p[d + 7]);
  e = p[d + 7] != 0 ? 12 : 13;
  e == 12 && (p[p[d + 7] + 2] = p[d + 6]);
  e = d + 4 == p[f + 28] ? 14 : 15;
  e == 14 && (p[f + 28] = p[d + 7]);
  e = p[d + 10] != 0 ? 16 : 17;
  e == 16 && (p[p[d + 10] + 3] = p[d + 11]);
  e = p[d + 11] != 0 ? 18 : 19;
  e == 18 && (p[p[d + 11] + 2] = p[d + 10]);
  e = d + 8 == p[g + 28] ? 20 : 21;
  e == 20 && (p[g + 28] = p[d + 11]);
  Dj(d, p[c + 19]);
  p[c + 16] -= 1;
}

Cj.X = 1;

function Ej(c) {
  var d, e, f, g, i, h, j, k, l, m;
  e = p[c + 15];
  d = p[c + 15] != 0 ? 1 : 21;
  a : do if (d == 1) for (var n = c + 17, o = c + 17, r = c, q = c + 18; ; ) {
    f = p[e + 12];
    g = p[e + 13];
    i = p[e + 14];
    h = p[e + 15];
    j = Aj(f);
    k = Aj(g);
    d = (p[e + 1] & 8) != 0 ? 4 : 10;
    b : do if (d == 4) if (d = pj(k, j) == 0 ? 5 : 6, d == 5) {
      d = e;
      e = p[d + 3];
      Cj(c, d);
      d = 2;
      break b;
    } else if (d == 6) {
      d = p[n] != 0 ? 7 : 9;
      do if (d == 7) if (d = p[o], qb[p[p[d] + 2]](d, f, g) != 0) d = 9; else {
        d = e;
        e = p[d + 3];
        Cj(c, d);
        d = 2;
        break b;
      } while (0);
      p[e + 1] &= -9;
      d = 10;
      break b;
    } while (0);
    b : do if (d == 10) {
      if (Bj(j)) d = 11; else {
        var s = 0;
        d = 12;
      }
      d == 11 && (s = p[j] != 0);
      l = s;
      if (Bj(k)) d = 13; else {
        var u = 0;
        d = 14;
      }
      d == 13 && (u = p[k] != 0);
      m = u;
      d = (l & 1) == 0 ? 15 : 18;
      do if (d == 15) if ((m & 1) != 0) d = 18; else {
        var x = p[e + 3];
        e = x;
        d = 17;
        break b;
      } while (0);
      d = p[p[f + 6] + i * 7 + 6];
      m = p[p[g + 6] + h * 7 + 6];
      l = r;
      var v = m;
      m = da;
      m = Fj(l, d);
      d = Fj(l, v);
      d = Gj(m, d);
      l = e;
      d = (d & 1) == 0 ? 19 : 20;
      if (d == 19) {
        f = l;
        e = p[f + 3];
        Cj(c, f);
        d = 2;
        break b;
      } else if (d == 20) {
        Hj(l, p[q]);
        e = x = p[e + 3];
        d = 17;
        break b;
      }
    } while (0);
    d == 2 && (x = e);
    if (x == 0) break a;
  } while (0);
}

Ej.X = 1;

function Ij(c, d) {
  var e = b;
  b += 1;
  var f, g, i, h, j, k;
  g = p[c + 13] = 0;
  h = c + 10;
  f = g < p[h] ? 1 : 5;
  a : do if (f == 1) for (var l = c + 8, m = c + 14, n = c, o = c + 14, r = c; ; ) if (f = p[p[l] + g], p[m] = f, f = f == -1 ? 4 : 3, f == 3 && (i = Fj(n, p[o]), Jj(r, c, i)), g += 1, g >= p[h]) break a; while (0);
  p[c + 10] = 0;
  g = p[c + 11] + p[c + 13] * 3;
  f = p[c + 11];
  p[e] = 2;
  Kj(f, g, e);
  g = 0;
  l = c + 13;
  f = g < p[l] ? 6 : 13;
  a : do if (f == 6) {
    m = c + 11;
    o = n = c;
    r = c + 11;
    for (i = c + 13; ; ) {
      h = p[m] + g * 3;
      j = Lj(n, p[h]);
      k = Lj(o, p[h + 1]);
      Mj(d, j, k);
      for (g += 1; ; ) {
        if (g >= p[i]) {
          f = 7;
          break;
        }
        j = p[r] + g * 3;
        if (p[j] != p[h]) {
          f = 7;
          break;
        }
        if (p[j + 1] != p[h + 1]) {
          f = 7;
          break;
        }
        g += 1;
      }
      if (g >= p[l]) break a;
    }
  } while (0);
  b = e;
}

Ij.X = 1;

function Fj(c, d) {
  var e;
  e = 0 <= d ? 1 : 2;
  e == 1 && (e = d < p[c + 3] ? 3 : 2);
  e == 2 && Q(Nj, 159, Oj, Wg);
  return p[c + 1] + d * 9;
}

function Lj(c, d) {
  var e;
  e = 0 <= d ? 1 : 2;
  e == 1 && (e = d < p[c + 3] ? 3 : 2);
  e == 2 && Q(Nj, 153, Pj, Wg);
  return p[p[c + 1] + d * 9 + 4];
}

function Mj(c, d, e) {
  var f, g, i, h, j, k, l, m, n, o;
  g = p[d + 4];
  i = p[e + 4];
  d = p[d + 5];
  e = p[e + 5];
  h = Aj(g);
  j = Aj(i);
  f = h == j ? 24 : 1;
  a : do if (f == 1) {
    for (k = f = p[j + 28]; ; ) {
      if (f == 0) break;
      f = p[k] == h ? 4 : 12;
      do if (f == 4) {
        l = p[p[k + 1] + 12];
        m = p[p[k + 1] + 13];
        n = p[p[k + 1] + 14];
        o = p[p[k + 1] + 15];
        f = l == g ? 5 : 8;
        do if (f == 5) if (m != i) f = 8; else if (n != d) f = 8; else if (o == e) break a; while (0);
        if (l != i) f = 12; else if (m != g) f = 12; else if (n != e) f = 12; else if (o == d) break a;
      } while (0);
      k = f = p[k + 3];
    }
    if (pj(j, h) == 0) f = 24; else {
      f = p[c + 17] != 0 ? 15 : 16;
      if (f == 15 && (k = p[c + 17], qb[p[p[k] + 2]](k, g, i) == 0)) break a;
      k = f = Qj(g, d, i, e, p[c + 19]);
      f == 0 ? f = 24 : (g = p[k + 12], i = p[k + 13], d = p[k + 14], e = p[k + 15], h = Aj(g), j = Aj(i), p[k + 2] = 0, p[k + 3] = p[c + 15], f = p[c + 15] != 0 ? 18 : 19, f == 18 && (p[p[c + 15] + 2] = k), p[c + 15] = k, p[k + 5] = k, p[k + 4] = j, p[k + 6] = 0, p[k + 7] = p[h + 28], f = p[h + 28] != 0 ? 20 : 21, f == 20 && (p[p[h + 28] + 2] = k + 4), p[h + 28] = k + 4, p[k + 9] = k, p[k + 8] = h, p[k + 10] = 0, p[k + 11] = p[j + 28], f = p[j + 28] != 0 ? 22 : 23, f == 22 && (p[p[j + 28] + 2] = k + 8), p[j + 28] = k + 8, yc(h, 1), yc(j, 1), p[c + 16] += 1);
    }
  } while (0);
}

Mj.X = 1;

function Jj(c, d, e) {
  var f = b;
  b += 259;
  var g, i, h;
  p[f] = f + 1;
  p[f + 257] = 0;
  p[f + 258] = 256;
  Rj(f, c);
  c += 1;
  a : for (;;) {
    if (p[f + 257] <= 0) break;
    g = f;
    (p[g + 257] > 0 ? 2 : 1) == 1 && Q(Sj, 67, Tj, Uj);
    p[g + 257] -= 1;
    i = p[p[g] + p[g + 257]];
    if (i != -1 && (h = p[c] + i * 9, Gj(h, e))) if (g = p[h + 6] == -1 ? 7 : 9, g == 7) {
      if (g = Wc(d, i), (g & 1) == 0) break a;
    } else g == 9 && (Rj(f, h + 6), Rj(f, h + 7));
  }
  if ((p[f] != f + 1 ? 1 : 2) == 1) vc(p[f]), p[f] = 0;
  b = f;
}

Jj.X = 1;

function Kj(c, d, e) {
  var f = b;
  b += 18;
  var g, i, h, j, k, l, m = f + 3, n = f + 6, o = f + 9, r = f + 12, q = f + 15, s, u;
  a : for (;;) {
    s = h = (d - c) / 12 | 0;
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
    h = d;
    h -= 3;
    l = s / 2 | 0;
    i += l * 3;
    g = s >= 1e3 ? 10 : 11;
    g == 10 ? (l = l / 2 | 0, u = Vj(c, c + l * 3, i, i + l * 3, h, e)) : g == 11 && (u = Wj(c, i, h, e));
    s = c;
    g = qb[p[e]](s, i) ? 28 : 13;
    if (g == 13) {
      for (;;) {
        h = l = h - 3;
        if (s == l) {
          g = 14;
          break;
        }
        if (qb[p[e]](h, i)) {
          g = 27;
          break;
        }
      }
      if (g == 14) {
        s += 3;
        h = d;
        i = p[e];
        h = g = h - 3;
        g = qb[i](c, g) ? 19 : 15;
        if (g == 15) {
          for (;;) {
            if (s == h) {
              g = 49;
              break a;
            }
            i = qb[p[e]](c, s);
            var v = s;
            if (i) break;
            s = v + 3;
          }
          g = v;
          i = h;
          l = g;
          p[r] = p[l];
          t[r] = t[l];
          p[r + 1] = p[l + 1];
          t[r + 1] = t[l + 1];
          p[r + 2] = p[l + 2];
          t[r + 2] = t[l + 2];
          l = i;
          p[g] = p[l];
          t[g] = t[l];
          p[g + 1] = p[l + 1];
          t[g + 1] = t[l + 1];
          p[g + 2] = p[l + 2];
          t[g + 2] = t[l + 2];
          g = r;
          p[i] = p[g];
          t[i] = t[g];
          p[i + 1] = p[g + 1];
          t[i + 1] = t[g + 1];
          p[i + 2] = p[g + 2];
          t[i + 2] = t[g + 2];
          u += 1;
          s += 3;
        }
        if (s == h) {
          g = 49;
          break a;
        }
        b : for (;;) if (g = qb[p[e]](c, s) ^ 1 ? 21 : 22, g == 21) s += 3; else if (g == 22) {
          for (;;) {
            var y = p[e];
            h = i = h - 3;
            if (!qb[y](c, i)) break;
          }
          y = s;
          if (s >= h) break b;
          g = y;
          i = h;
          l = g;
          p[o] = p[l];
          t[o] = t[l];
          p[o + 1] = p[l + 1];
          t[o + 1] = t[l + 1];
          p[o + 2] = p[l + 2];
          t[o + 2] = t[l + 2];
          l = i;
          p[g] = p[l];
          t[g] = t[l];
          p[g + 1] = p[l + 1];
          t[g + 1] = t[l + 1];
          p[g + 2] = p[l + 2];
          t[g + 2] = t[l + 2];
          g = o;
          p[i] = p[g];
          t[i] = t[g];
          p[i + 1] = p[g + 1];
          t[i + 1] = t[g + 1];
          p[i + 2] = p[g + 2];
          t[i + 2] = t[g + 2];
          u += 1;
          s += 3;
        }
        c = y;
        g = 1;
        continue a;
      } else g == 27 && (l = s, g = h, k = l, p[n] = p[k], t[n] = t[k], p[n + 1] = p[k + 1], t[n + 1] = t[k + 1], p[n + 2] = p[k + 2], t[n + 2] = t[k + 2], k = g, p[l] = p[k], t[l] = t[k], p[l + 1] = p[k + 1], t[l + 1] = t[k + 1], p[l + 2] = p[k + 2], t[l + 2] = t[k + 2], l = n, p[g] = p[l], t[g] = t[l], p[g + 1] = p[l + 1], t[g + 1] = t[l + 1], p[g + 2] = p[l + 2], t[g + 2] = t[l + 2], u += 1);
    }
    s += 3;
    g = s < h ? 29 : 36;
    b : do if (g == 29) for (;;) if (g = qb[p[e]](s, i) ? 30 : 31, g == 30) s += 3; else if (g == 31) {
      for (;;) if (g = p[e], h = l = h - 3, !(qb[g](l, i) ^ 1)) break;
      if (s > h) break b;
      l = s;
      g = h;
      k = l;
      p[m] = p[k];
      t[m] = t[k];
      p[m + 1] = p[k + 1];
      t[m + 1] = t[k + 1];
      p[m + 2] = p[k + 2];
      t[m + 2] = t[k + 2];
      k = g;
      p[l] = p[k];
      t[l] = t[k];
      p[l + 1] = p[k + 1];
      t[l + 1] = t[k + 1];
      p[l + 2] = p[k + 2];
      t[l + 2] = t[k + 2];
      l = m;
      p[g] = p[l];
      t[g] = t[l];
      p[g + 1] = p[l + 1];
      t[g + 1] = t[l + 1];
      p[g + 2] = p[l + 2];
      t[g + 2] = t[l + 2];
      u += 1;
      g = i == s ? 34 : 35;
      g == 34 && (i = h);
      s += 3;
    } while (0);
    g = s != i ? 37 : 39;
    g == 37 && (qb[p[e]](i, s) ? (h = s, j = i, i = h, p[f] = p[i], t[f] = t[i], p[f + 1] = p[i + 1], t[f + 1] = t[i + 1], p[f + 2] = p[i + 2], t[f + 2] = t[i + 2], i = j, p[h] = p[i], t[h] = t[i], p[h + 1] = p[i + 1], t[h + 1] = t[i + 1], p[h + 2] = p[i + 2], t[h + 2] = t[i + 2], h = f, p[j] = p[h], t[j] = t[h], p[j + 1] = p[h + 1], t[j + 1] = t[h + 1], p[j + 2] = p[h + 2], t[j + 2] = t[h + 2], u = j = u + 1, g = 40) : g = 39);
    g == 39 && (j = u);
    g = j == 0 ? 41 : 46;
    b : do if (g == 41) if (i = Xj(c, s, e), h = Xj(s + 3, d, e), i &= 1, g = h ? 42 : 44, g == 42) {
      if (i) {
        g = 49;
        break a;
      }
      d = s;
      g = 1;
      continue a;
    } else if (g == 44) {
      if (!i) break b;
      c = s + 3;
      g = 1;
      continue a;
    } while (0);
    g = ((s - c) / 12 | 0) < ((d - s) / 12 | 0) ? 47 : 48;
    g == 47 ? (Kj(c, s, e), c = s + 3) : g == 48 && (Kj(s + 3, d, e), d = s);
  }
  g == 2 ? (e = p[e], d = m = d - 3, qb[e](m, c) && (p[q] = p[c], t[q] = t[c], p[q + 1] = p[c + 1], t[q + 1] = t[c + 1], p[q + 2] = p[c + 2], t[q + 2] = t[c + 2], p[c] = p[d], t[c] = t[d], p[c + 1] = p[d + 1], t[c + 1] = t[d + 1], p[c + 2] = p[d + 2], t[c + 2] = t[d + 2], p[d] = p[q], t[d] = t[q], p[d + 1] = p[q + 1], t[d + 1] = t[q + 1], p[d + 2] = p[q + 2], t[d + 2] = t[q + 2])) : g == 4 ? Wj(c, c + 3, d - 3, e) : g == 5 ? Yj(c, c + 3, c + 6, d - 3, e) : g == 6 ? Vj(c, c + 3, c + 6, c + 9, d - 3, e) : g == 8 && Zj(x, d, e);
  b = f;
}

Kj.X = 1;

function Wj(c, d, e, f) {
  var g = b;
  b += 15;
  var i, h = g + 3, j = g + 6, k = g + 9, l = g + 12, m, n;
  n = 0;
  i = qb[p[f]](d, c);
  var o = qb[p[f]](e, d);
  i = i ? 6 : 1;
  i == 6 ? (i = o ? 7 : 8, i == 7 ? (p[g] = p[c], t[g] = t[c], p[g + 1] = p[c + 1], t[g + 1] = t[c + 1], p[g + 2] = p[c + 2], t[g + 2] = t[c + 2], p[c] = p[e], t[c] = t[e], p[c + 1] = p[e + 1], t[c + 1] = t[e + 1], p[c + 2] = p[e + 2], t[c + 2] = t[e + 2], p[e] = p[g], t[e] = t[g], p[e + 1] = p[g + 1], t[e + 1] = t[g + 1], p[e + 2] = p[g + 2], t[e + 2] = t[g + 2], m = 1) : i == 8 && (p[h] = p[c], t[h] = t[c], p[h + 1] = p[c + 1], t[h + 1] = t[c + 1], p[h + 2] = p[c + 2], t[h + 2] = t[c + 2], p[c] = p[d], t[c] = t[d], p[c + 1] = p[d + 1], t[c + 1] = t[d + 1], p[c + 2] = p[d + 2], t[c + 2] = t[d + 2], p[d] = p[h], t[d] = t[h], p[d + 1] = p[h + 1], t[d + 1] = t[h + 1], p[d + 2] = p[h + 2], t[d + 2] = t[h + 2], n = 1, i = qb[p[f]](e, d) ? 9 : 10, i == 9 && (p[k] = p[d], t[k] = t[d], p[k + 1] = p[d + 1], t[k + 1] = t[d + 1], p[k + 2] = p[d + 2], t[k + 2] = t[d + 2], p[d] = p[e], t[d] = t[e], p[d + 1] = p[e + 1], t[d + 1] = t[e + 1], p[d + 2] = p[e + 2], t[d + 2] = t[e + 2], p[e] = p[k], t[e] = t[k], p[e + 1] = p[k + 1], t[e + 1] = t[k + 1], p[e + 2] = p[k + 2], t[e + 2] = t[k + 2], n = 2), m = n)) : i == 1 && (i = o ? 3 : 2, i == 3 ? (p[l] = p[d], t[l] = t[d], p[l + 1] = p[d + 1], t[l + 1] = t[d + 1], p[l + 2] = p[d + 2], t[l + 2] = t[d + 2], p[d] = p[e], t[d] = t[e], p[d + 1] = p[e + 1], t[d + 1] = t[e + 1], p[d + 2] = p[e + 2], t[d + 2] = t[e + 2], p[e] = p[l], t[e] = t[l], p[e + 1] = p[l + 1], t[e + 1] = t[l + 1], p[e + 2] = p[l + 2], t[e + 2] = t[l + 2], n = 1, i = qb[p[f]](d, c) ? 4 : 5, i == 4 && (p[j] = p[c], t[j] = t[c], p[j + 1] = p[c + 1], t[j + 1] = t[c + 1], p[j + 2] = p[c + 2], t[j + 2] = t[c + 2], p[c] = p[d], t[c] = t[d], p[c + 1] = p[d + 1], t[c + 1] = t[d + 1], p[c + 2] = p[d + 2], t[c + 2] = t[d + 2], p[d] = p[j], t[d] = t[j], p[d + 1] = p[j + 1], t[d + 1] = t[j + 1], p[d + 2] = p[j + 2], t[d + 2] = t[j + 2], n = 2), m = n) : i == 2 && (m = n));
  b = g;
  return m;
}

Wj.X = 1;

function Yj(c, d, e, f, g) {
  var i = b;
  b += 9;
  var h = i + 3, j = i + 6, k;
  k = Wj(c, d, e, g);
  if ((qb[p[g]](f, e) ? 1 : 4) == 1) p[j] = p[e], t[j] = t[e], p[j + 1] = p[e + 1], t[j + 1] = t[e + 1], p[j + 2] = p[e + 2], t[j + 2] = t[e + 2], p[e] = p[f], t[e] = t[f], p[e + 1] = p[f + 1], t[e + 1] = t[f + 1], p[e + 2] = p[f + 2], t[e + 2] = t[f + 2], p[f] = p[j], t[f] = t[j], p[f + 1] = p[j + 1], t[f + 1] = t[j + 1], p[f + 2] = p[j + 2], t[f + 2] = t[j + 2], k += 1, qb[p[g]](e, d) && (p[i] = p[d], t[i] = t[d], p[i + 1] = p[d + 1], t[i + 1] = t[d + 1], p[i + 2] = p[d + 2], t[i + 2] = t[d + 2], p[d] = p[e], t[d] = t[e], p[d + 1] = p[e + 1], t[d + 1] = t[e + 1], p[d + 2] = p[e + 2], t[d + 2] = t[e + 2], p[e] = p[i], t[e] = t[i], p[e + 1] = p[i + 1], t[e + 1] = t[i + 1], p[e + 2] = p[i + 2], t[e + 2] = t[i + 2], k += 1, qb[p[g]](d, c) && (p[h] = p[c], t[h] = t[c], p[h + 1] = p[c + 1], t[h + 1] = t[c + 1], p[h + 2] = p[c + 2], t[h + 2] = t[c + 2], p[c] = p[d], t[c] = t[d], p[c + 1] = p[d + 1], t[c + 1] = t[d + 1], p[c + 2] = p[d + 2], t[c + 2] = t[d + 2], p[d] = p[h], t[d] = t[h], p[d + 1] = p[h + 1], t[d + 1] = t[h + 1], p[d + 2] = p[h + 2], t[d + 2] = t[h + 2], k += 1));
  b = i;
  return k;
}

Yj.X = 1;

function Vj(c, d, e, f, g, i) {
  var h = b;
  b += 12;
  var j = h + 3, k = h + 6, l = h + 9, m;
  m = Yj(c, d, e, f, i);
  if ((qb[p[i]](g, f) ? 1 : 5) == 1) p[l] = p[f], t[l] = t[f], p[l + 1] = p[f + 1], t[l + 1] = t[f + 1], p[l + 2] = p[f + 2], t[l + 2] = t[f + 2], p[f] = p[g], t[f] = t[g], p[f + 1] = p[g + 1], t[f + 1] = t[g + 1], p[f + 2] = p[g + 2], t[f + 2] = t[g + 2], p[g] = p[l], t[g] = t[l], p[g + 1] = p[l + 1], t[g + 1] = t[l + 1], p[g + 2] = p[l + 2], t[g + 2] = t[l + 2], m += 1, qb[p[i]](f, e) && (p[j] = p[e], t[j] = t[e], p[j + 1] = p[e + 1], t[j + 1] = t[e + 1], p[j + 2] = p[e + 2], t[j + 2] = t[e + 2], p[e] = p[f], t[e] = t[f], p[e + 1] = p[f + 1], t[e + 1] = t[f + 1], p[e + 2] = p[f + 2], t[e + 2] = t[f + 2], p[f] = p[j], t[f] = t[j], p[f + 1] = p[j + 1], t[f + 1] = t[j + 1], p[f + 2] = p[j + 2], t[f + 2] = t[j + 2], m += 1, qb[p[i]](e, d) && (p[h] = p[d], t[h] = t[d], p[h + 1] = p[d + 1], t[h + 1] = t[d + 1], p[h + 2] = p[d + 2], t[h + 2] = t[d + 2], p[d] = p[e], t[d] = t[e], p[d + 1] = p[e + 1], t[d + 1] = t[e + 1], p[d + 2] = p[e + 2], t[d + 2] = t[e + 2], p[e] = p[h], t[e] = t[h], p[e + 1] = p[h + 1], t[e + 1] = t[h + 1], p[e + 2] = p[h + 2], t[e + 2] = t[h + 2], m += 1, qb[p[i]](d, c) && (p[k] = p[c], t[k] = t[c], p[k + 1] = p[c + 1], t[k + 1] = t[c + 1], p[k + 2] = p[c + 2], t[k + 2] = t[c + 2], p[c] = p[d], t[c] = t[d], p[c + 1] = p[d + 1], t[c + 1] = t[d + 1], p[c + 2] = p[d + 2], t[c + 2] = t[d + 2], p[d] = p[k], t[d] = t[k], p[d + 1] = p[k + 1], t[d + 1] = t[k + 1], p[d + 2] = p[k + 2], t[d + 2] = t[k + 2], m += 1)));
  b = h;
  return m;
}

Vj.X = 1;

function Zj(c, d, e) {
  var f = b;
  b += 3;
  var g, i, h, j, k;
  j = c + 6;
  Wj(c, c + 3, j, e);
  k = j + 3;
  g = k != d ? 1 : 8;
  a : do if (g == 1) for (var l = f; ; ) {
    g = qb[p[e]](k, j) ? 3 : 7;
    if (g == 3) {
      h = k;
      p[l] = p[h];
      t[l] = t[h];
      p[l + 1] = p[h + 1];
      t[l + 1] = t[h + 1];
      p[l + 2] = p[h + 2];
      t[l + 2] = t[h + 2];
      h = j;
      for (j = k; ; ) {
        i = h;
        p[j] = p[i];
        t[j] = t[i];
        p[j + 1] = p[i + 1];
        t[j + 1] = t[i + 1];
        p[j + 2] = p[i + 2];
        t[j + 2] = t[i + 2];
        j = h;
        if (j == c) {
          g = 6;
          break;
        }
        i = p[e];
        var m = h - 3;
        h = m;
        if (!qb[i](f, m)) {
          g = 6;
          break;
        }
      }
      h = f;
      p[j] = p[h];
      t[j] = t[h];
      p[j + 1] = p[h + 1];
      t[j + 1] = t[h + 1];
      p[j + 2] = p[h + 2];
      t[j + 2] = t[h + 2];
    }
    j = k;
    k += 3;
    if (k == d) break a;
  } while (0);
  b = f;
}

Zj.X = 1;

function Gj(c, d) {
  var e = b;
  b += 8;
  var f, g, i = e + 2;
  f = e + 4;
  var h = e + 6;
  J(f, d, c + 2);
  p[e] = p[f];
  t[e] = t[f];
  p[e + 1] = p[f + 1];
  t[e + 1] = t[f + 1];
  J(h, c, d + 2);
  p[i] = p[h];
  t[i] = t[h];
  p[i + 1] = p[h + 1];
  t[i + 1] = t[h + 1];
  f = t[e] > 0 ? 2 : 1;
  a : do if (f == 1) if (t[e + 1] > 0) f = 2; else {
    f = t[i] > 0 ? 5 : 4;
    do if (f == 4) if (t[i + 1] > 0) f = 5; else {
      g = 1;
      f = 7;
      break a;
    } while (0);
    g = 0;
    f = 7;
  } while (0);
  f == 2 && (g = 0);
  b = e;
  return g;
}

Gj.X = 1;

function tj(c) {
  wj(c + 8);
  p[c + 12] = 0;
  p[c + 2] = 0;
  p[c + 1] = 0;
  p[c + 6] = 0;
  p[c + 7] = 0;
  p[c + 3] = 0;
  t[c] = 0;
}

function Xj(c, d, e) {
  var f = b;
  b += 6;
  var g, i, h, j, k, l, m, n = f + 3;
  g = (d - c) / 12 | 0;
  g = g == 0 ? 1 : g == 1 ? 1 : g == 2 ? 2 : g == 3 ? 5 : g == 4 ? 6 : g == 5 ? 7 : 8;
  if (g == 8) {
    k = c + 6;
    Wj(c, c + 3, k, e);
    l = 0;
    m = k + 3;
    a : for (;;) {
      if (m == d) {
        g = 17;
        break;
      }
      g = qb[p[e]](m, k) ? 11 : 16;
      if (g == 11) {
        h = m;
        p[n] = p[h];
        t[n] = t[h];
        p[n + 1] = p[h + 1];
        t[n + 1] = t[h + 1];
        p[n + 2] = p[h + 2];
        t[n + 2] = t[h + 2];
        h = k;
        for (k = m; ; ) {
          i = h;
          p[k] = p[i];
          t[k] = t[i];
          p[k + 1] = p[i + 1];
          t[k + 1] = t[i + 1];
          p[k + 2] = p[i + 2];
          t[k + 2] = t[i + 2];
          k = h;
          if (k == c) {
            g = 14;
            break;
          }
          i = p[e];
          var o = h - 3;
          h = o;
          if (!qb[i](n, o)) {
            g = 14;
            break;
          }
        }
        h = n;
        p[k] = p[h];
        t[k] = t[h];
        p[k + 1] = p[h + 1];
        t[k + 1] = t[h + 1];
        p[k + 2] = p[h + 2];
        t[k + 2] = t[h + 2];
        l = k = l + 1;
        if (k == 8) {
          g = 15;
          break a;
        }
      }
      k = m;
      m += 3;
    }
    g == 17 ? j = 1 : g == 15 && (j = m + 3 == d);
  } else g == 1 ? j = 1 : g == 2 ? (e = p[e], d = j = d - 3, g = qb[e](j, c) ? 3 : 4, g == 3 && (p[f] = p[c], t[f] = t[c], p[f + 1] = p[c + 1], t[f + 1] = t[c + 1], p[f + 2] = p[c + 2], t[f + 2] = t[c + 2], p[c] = p[d], t[c] = t[d], p[c + 1] = p[d + 1], t[c + 1] = t[d + 1], p[c + 2] = p[d + 2], t[c + 2] = t[d + 2], p[d] = p[f], t[d] = t[f], p[d + 1] = p[f + 1], t[d + 1] = t[f + 1], p[d + 2] = p[f + 2], t[d + 2] = t[f + 2]), j = 1) : g == 5 ? (Wj(c, c + 3, d - 3, e), j = 1) : g == 6 ? (Yj(c, c + 3, c + 6, d - 3, e), j = 1) : g == 7 && (Vj(c, c + 3, c + 6, c + 9, d - 3, e), j = 1);
  b = f;
  return j;
}

Xj.X = 1;

function Rj(c, d) {
  var e;
  if ((p[c + 257] == p[c + 258] ? 1 : 3) == 1) {
    e = p[c];
    p[c + 258] <<= 1;
    var f = hb(p[c + 258] << 2);
    p[c] = f;
    for (var f = e, g = e + 1 * ((p[c + 257] << 2) / 4), i = p[c]; f < g; f++, i++) p[i] = p[f], t[i] = t[f];
    e != c + 1 && vc(e);
  }
  p[p[c] + p[c + 257]] = p[d];
  p[c + 257] += 1;
}

Rj.X = 1;

function uj(c, d, e, f) {
  var g;
  p[c + 12] = p[f + 1];
  t[c + 4] = t[f + 2];
  t[c + 5] = t[f + 3];
  p[c + 2] = e;
  p[c + 1] = 0;
  e = c + 8;
  g = f + 6;
  p[e] = p[g];
  t[e] = t[g];
  p[e + 1] = p[g + 1];
  t[e + 1] = t[g + 1];
  p[e + 2] = p[g + 2];
  t[e + 2] = t[g + 2];
  p[c + 11] = p[f + 5] & 1;
  e = p[f];
  e = qb[p[p[e] + 2]](e, d);
  p[c + 3] = e;
  e = p[c + 3];
  e = qb[p[p[e] + 3]](e);
  d = Th(d, e * 28);
  p[c + 6] = d;
  g = 0;
  d = g < e ? 1 : 3;
  a : do if (d == 1) for (var i = c + 6, h = c + 6; ; ) if (p[p[i] + g * 7 + 4] = 0, p[p[h] + g * 7 + 6] = -1, g += 1, g >= e) break a; while (0);
  p[c + 7] = 0;
  t[c] = t[f + 4];
}

uj.X = 1;

function $j(c, d) {
  var e;
  e = p[c + 7] == 0 ? 2 : 1;
  e == 1 && Q(ak, 72, bk, ck);
  e = p[c + 3];
  e = qb[p[p[e] + 3]](e);
  ti(d, p[c + 6], e * 28);
  p[c + 6] = 0;
  e = p[p[c + 3] + 1];
  e = e == 0 ? 3 : e == 1 ? 4 : e == 2 ? 5 : e == 3 ? 6 : 7;
  e == 7 ? Q(ak, 115, bk, xe) : e == 3 ? (e = p[c + 3], qb[p[p[e]]](e), ti(d, e, 20)) : e == 4 ? (e = p[c + 3], qb[p[p[e]]](e), ti(d, e, 48)) : e == 5 ? (e = p[c + 3], qb[p[p[e]]](e), ti(d, e, 152)) : e == 6 && (e = p[c + 3], qb[p[p[e]]](e), ti(d, e, 40));
  p[c + 3] = 0;
}

$j.X = 1;

function vj(c, d, e) {
  var f, g, i;
  f = p[c + 7] == 0 ? 2 : 1;
  f == 1 && Q(ak, 124, dk, ck);
  f = p[c + 3];
  f = qb[p[p[f] + 3]](f);
  p[c + 7] = f;
  g = 0;
  var h = c + 7;
  f = g < p[h] ? 3 : 5;
  a : do if (f == 3) for (var j = c + 6, k = c + 3; ; ) {
    i = p[j] + g * 7;
    var l = p[k];
    qb[p[p[l] + 6]](l, i, e, g);
    var l = d, m = da, m = Kg(l, i, i);
    p[l + 7] += 1;
    Vc(l, m);
    p[i + 6] = m;
    p[i + 4] = c;
    p[i + 5] = g;
    g += 1;
    if (g >= p[h]) break a;
  } while (0);
}

vj.X = 1;

function oj(c, d, e, f) {
  var g = b;
  b += 10;
  var i, h, j, k = g + 4, l = g + 8;
  i = p[c + 7] == 0 ? 4 : 1;
  a : do if (i == 1) {
    h = 0;
    var m = c + 7;
    if (h < p[m]) for (var n = c + 6, o = c + 3, r = c + 3; ; ) {
      j = p[n] + h * 7;
      var q = p[o];
      qb[p[p[q] + 6]](q, g, e, p[j + 5]);
      q = p[r];
      qb[p[p[q] + 6]](q, k, f, p[j + 5]);
      Og(j, g, k);
      J(l, f, e);
      var q = d, s = p[j + 6];
      (Ug(q, s, j, l) & 1 ? 1 : 2) == 1 && Vc(q, s);
      h += 1;
      if (h >= p[m]) break a;
    } else i = 4;
  } while (0);
  b = g;
}

oj.X = 1;

function ek(c) {
  Ni(p[c], p[c + 5]);
  Ni(p[c], p[c + 6]);
  Ni(p[c], p[c + 4]);
  Ni(p[c], p[c + 3]);
  Ni(p[c], p[c + 2]);
}

function fk(c, d, e, f, g, i) {
  p[c + 10] = d;
  p[c + 11] = e;
  p[c + 12] = f;
  p[c + 7] = 0;
  p[c + 9] = 0;
  p[c + 8] = 0;
  p[c] = g;
  p[c + 1] = i;
  d = Ti(p[c], d << 2);
  p[c + 2] = d;
  e = Ti(p[c], e << 2);
  p[c + 3] = e;
  f = Ti(p[c], f << 2);
  p[c + 4] = f;
  f = Ti(p[c], p[c + 10] * 12);
  p[c + 6] = f;
  f = Ti(p[c], p[c + 10] * 12);
  p[c + 5] = f;
}

fk.X = 1;

function gk(c) {
  var d = b;
  b += 4;
  var e = d + 2;
  kh(c + 5, t[c + 14]);
  var f = c + 3, g = c + 11;
  U(e, c + 5, c + 7);
  J(d, g, e);
  p[f] = p[d];
  t[f] = t[d];
  p[f + 1] = p[d + 1];
  t[f + 1] = t[d + 1];
  b = d;
}

function hk(c, d, e, f, g) {
  var i = b;
  b += 54;
  var h, j, k, l, m = i + 2, n, o = i + 4, r, q = i + 6, s = i + 8, u = i + 10, x = i + 12, v = i + 14, y = i + 22, z = i + 33, B, E, D, H, I = i + 46, M, G = i + 48, S, P = i + 50, L, T, F, Z = i + 52, aa, W, ca, la, $, X, ba, ha, na, ia, ma, qa, xa;
  Wi(i);
  j = t[e];
  k = 0;
  var Fa = c + 7;
  h = k < p[Fa] ? 1 : 5;
  a : do if (h == 1) for (var Pa = c + 2, Ga = m, Za = o, xb = c + 5, La = m, bb = c + 5, Ua = c + 6, ra = o, ja = c + 6; ; ) {
    l = p[p[Pa] + k];
    var Ea = l + 11;
    p[Ga] = p[Ea];
    t[Ga] = t[Ea];
    p[Ga + 1] = p[Ea + 1];
    t[Ga + 1] = t[Ea + 1];
    n = t[l + 14];
    var Da = l + 16;
    p[Za] = p[Da];
    t[Za] = t[Da];
    p[Za + 1] = p[Da + 1];
    t[Za + 1] = t[Da + 1];
    r = t[l + 18];
    var za = l + 9, Qa = l + 11;
    p[za] = p[Qa];
    t[za] = t[Qa];
    p[za + 1] = p[Qa + 1];
    t[za + 1] = t[Qa + 1];
    t[l + 13] = t[l + 14];
    h = p[l] == 2 ? 3 : 4;
    if (h == 3) {
      var oa = j;
      N(u, t[l + 35], f);
      N(x, t[l + 30], l + 19);
      O(s, u, x);
      N(q, oa, s);
      Sb(o, q);
      r += j * t[l + 32] * t[l + 21];
      ci(o, ik(1 - j * t[l + 33], 0, 1));
      r *= ik(1 - j * t[l + 34], 0, 1);
    }
    var Ra = p[xb] + k * 3;
    p[Ra] = p[La];
    t[Ra] = t[La];
    p[Ra + 1] = p[La + 1];
    t[Ra + 1] = t[La + 1];
    t[p[bb] + k * 3 + 2] = n;
    var Ma = p[Ua] + k * 3;
    p[Ma] = p[ra];
    t[Ma] = t[ra];
    p[Ma + 1] = p[ra + 1];
    t[Ma + 1] = t[ra + 1];
    t[p[ja] + k * 3 + 2] = r;
    k += 1;
    if (k >= p[Fa]) {
      h = 5;
      break a;
    }
  } while (0);
  Wi(i);
  for (var Ba = e, Va = e + 6, Ha = v; Ba < Va; Ba++, Ha++) p[Ha] = p[Ba], t[Ha] = t[Ba];
  p[v + 6] = p[c + 5];
  p[v + 7] = p[c + 6];
  Ba = e;
  Va = e + 6;
  for (Ha = y; Ba < Va; Ba++, Ha++) p[Ha] = p[Ba], t[Ha] = t[Ba];
  p[y + 6] = p[c + 3];
  p[y + 7] = p[c + 9];
  p[y + 8] = p[c + 5];
  p[y + 9] = p[c + 6];
  p[y + 10] = p[c];
  jk(z, y);
  kk(z);
  h = p[e + 5] & 1 ? 7 : 16;
  h == 7 && lk(z);
  B = 0;
  for (var Nb = c + 8, bc = c + 4; ; ) {
    if (B >= p[Nb]) {
      h = 20;
      break;
    }
    var Wa = p[p[bc] + B];
    qb[p[p[Wa] + 7]](Wa, v);
    B += 1;
  }
  var kc = Yi(i);
  t[d + 3] = kc;
  Wi(i);
  E = 0;
  for (var Ub = c + 8, cb = c + 4; ; ) {
    if (E >= p[e + 3]) {
      h = 30;
      break;
    }
    for (D = 0; ; ) {
      if (D >= p[Ub]) {
        h = 28;
        break;
      }
      var lc = p[p[cb] + D];
      qb[p[p[lc] + 8]](lc, v);
      D += 1;
    }
    mk(z);
    E += 1;
  }
  nk(z);
  var Cb = Yi(i);
  t[d + 4] = Cb;
  H = 0;
  var db = c + 7;
  h = H < p[db] ? 33 : 39;
  a : do if (h == 33) for (var Vb = c + 5, Ob = I, Hb = c + 5, Ib = c + 6, jb = G, cc = c + 6, dc = c + 5, kb = I, Db = c + 5, lb = c + 6, Oa = G, ec = c + 6; ; ) {
    var mb = p[Vb] + H * 3;
    p[Ob] = p[mb];
    t[Ob] = t[mb];
    p[Ob + 1] = p[mb + 1];
    t[Ob + 1] = t[mb + 1];
    M = t[p[Hb] + H * 3 + 2];
    var Jb = p[Ib] + H * 3;
    p[jb] = p[Jb];
    t[jb] = t[Jb];
    p[jb + 1] = p[Jb + 1];
    t[jb + 1] = t[Jb + 1];
    S = t[p[cc] + H * 3 + 2];
    N(P, j, G);
    h = K(P, P) > 4 ? 35 : 36;
    h == 35 && (L = 2 / fd(P), ci(G, L));
    T = j * S;
    h = T * T > 2.4674012660980225 ? 37 : 38;
    h == 37 && (F = 1.5707963705062866 / se(T), S *= F);
    N(Z, j, G);
    Sb(I, Z);
    M += j * S;
    var nb = p[dc] + H * 3;
    p[nb] = p[kb];
    t[nb] = t[kb];
    p[nb + 1] = p[kb + 1];
    t[nb + 1] = t[kb + 1];
    t[p[Db] + H * 3 + 2] = M;
    var Kb = p[lb] + H * 3;
    p[Kb] = p[Oa];
    t[Kb] = t[Oa];
    p[Kb + 1] = p[Oa + 1];
    t[Kb + 1] = t[Oa + 1];
    t[p[ec] + H * 3 + 2] = S;
    H += 1;
    if (H >= p[db]) {
      h = 39;
      break a;
    }
  } while (0);
  Wi(i);
  W = aa = 0;
  var mc = c + 8, nc = c + 4;
  a : for (;;) {
    if (W >= p[e + 4]) {
      h = 53;
      break;
    }
    ca = ok(z);
    la = 1;
    for ($ = 0; ; ) {
      if ($ >= p[mc]) {
        h = 49;
        break;
      }
      var yb = p[p[nc] + $];
      X = qb[p[p[yb] + 9]](yb, v);
      if (la & 1) h = 47; else {
        var Wb = 0;
        h = 48;
      }
      h == 47 && (Wb = X & 1);
      la = Wb;
      $ += 1;
    }
    h = ca & 1 ? 50 : 52;
    if (h == 50 && la & 1) {
      h = 51;
      break a;
    }
    W += 1;
  }
  h == 51 && (aa = 1);
  ba = 0;
  var Xb = c + 7;
  h = ba < p[Xb] ? 54 : 56;
  a : do if (h == 54) for (var zb = c + 2, fc = c + 5, Lb = c + 5, oc = c + 6, Ab = c + 6; ; ) {
    ha = p[p[zb] + ba];
    var Pb = ha + 11, Bb = p[fc] + ba * 3;
    p[Pb] = p[Bb];
    t[Pb] = t[Bb];
    p[Pb + 1] = p[Bb + 1];
    t[Pb + 1] = t[Bb + 1];
    t[ha + 14] = t[p[Lb] + ba * 3 + 2];
    var ob = ha + 16, gc = p[oc] + ba * 3;
    p[ob] = p[gc];
    t[ob] = t[gc];
    p[ob + 1] = p[gc + 1];
    t[ob + 1] = t[gc + 1];
    t[ha + 18] = t[p[Ab] + ba * 3 + 2];
    gk(ha);
    ba += 1;
    if (ba >= p[Xb]) {
      h = 56;
      break a;
    }
  } while (0);
  var pc = Yi(i);
  t[d + 5] = pc;
  pk(c, p[z + 10]);
  h = g & 1 ? 59 : 74;
  a : do if (h == 59) {
    na = 3.4028234663852886e+38;
    ia = 0;
    var Yb = c + 7;
    h = ia < p[Yb] ? 60 : 68;
    b : do if (h == 60) for (var Ic = c + 2; ; ) {
      ma = p[p[Ic] + ia];
      h = p[ma] == 0 ? 67 : 62;
      c : do if (h == 62) {
        h = (p[ma + 1] & 4) == 0 ? 65 : 63;
        do if (h == 63) if (t[ma + 18] * t[ma + 18] > .001218469929881394) h = 65; else if (K(ma + 16, ma + 16) > 9999999747378752e-20) h = 65; else {
          t[ma + 36] += j;
          na = na < t[ma + 36] ? na : t[ma + 36];
          h = 67;
          break c;
        } while (0);
        na = t[ma + 36] = 0;
      } while (0);
      ia += 1;
      if (ia >= p[Yb]) {
        h = 68;
        break b;
      }
    } while (0);
    if (na >= .5) if (aa & 1) {
      qa = 0;
      for (var qc = c + 7, pb = c + 2; ; ) {
        if (qa >= p[qc]) {
          h = 74;
          break a;
        }
        xa = p[p[pb] + qa];
        yc(xa, 0);
        qa += 1;
      }
    } else h = 74; else h = 74;
  } while (0);
  qk(z);
  b = i;
}

hk.X = 1;

function ik(c, d, e) {
  return d > (c < e ? c : e) ? d : c < e ? c : e;
}

function pk(c, d) {
  var e = b;
  b += 5;
  var f, g, i, h, j;
  f = p[c + 1] == 0 ? 6 : 1;
  a : do if (f == 1) {
    g = 0;
    var k = c + 9;
    if (g < p[k]) for (var l = c + 3, m = e + 4, n = c + 1, o = e, r = e + 2; ; ) {
      i = p[p[l] + g];
      h = d + g * 38;
      p[m] = p[h + 36];
      j = 0;
      f = j < p[h + 36] ? 4 : 5;
      b : do if (f == 4) for (;;) if (t[o + j] = t[h + j * 9 + 4], t[r + j] = t[h + j * 9 + 5], j += 1, j >= p[h + 36]) {
        f = 5;
        break b;
      } while (0);
      h = p[n];
      qb[p[p[h] + 5]](h, i, e);
      g += 1;
      if (g >= p[k]) break a;
    } else f = 6;
  } while (0);
  b = e;
}

pk.X = 1;

function xc(c, d) {
  mi(c);
  Hi(c + 17);
  xj(c + 102518);
  p[c + 102545] = 0;
  p[c + 102546] = 0;
  p[c + 102538] = 0;
  p[c + 102539] = 0;
  p[c + 102540] = 0;
  p[c + 102541] = 0;
  p[c + 102548] = 1;
  p[c + 102549] = 1;
  p[c + 102550] = 0;
  p[c + 102551] = 1;
  p[c + 102544] = 1;
  var e = c + 102542;
  p[e] = p[d];
  t[e] = t[d];
  p[e + 1] = p[d + 1];
  t[e + 1] = t[d + 1];
  p[c + 102517] = 4;
  t[c + 102547] = 0;
  p[c + 102537] = c;
  for (var e = c + 102552, f = 0; f < 8; f++) p[e + f] = 0, t[e + f] = 0;
}

xc.X = 1;

function Sc(c) {
  var d, e, f;
  d = p[c + 102538];
  for (e = p[c + 102538]; ; ) {
    if (e == 0) break;
    e = p[d + 24];
    f = p[d + 25];
    for (d = p[d + 25]; ; ) {
      if (d == 0) break;
      d = p[f + 1];
      p[f + 7] = 0;
      $j(f, c);
      f = d;
    }
    d = e;
  }
  uc(c + 102518);
  Ii(c + 17);
  di(c);
}

Sc.X = 1;

function rk(c, d, e, f) {
  var g = b;
  b += 32;
  var i, h, j, k = g + 11, l = g + 24, m, n = g + 26, o, r = g + 28, q, s = g + 30;
  i = e < p[c + 7] ? 2 : 1;
  i == 1 && Q(sk, 386, tk, uk);
  i = f < p[c + 7] ? 4 : 3;
  i == 3 && Q(sk, 387, tk, vk);
  h = 0;
  var u = c + 7;
  i = h < p[u] ? 5 : 7;
  a : do if (i == 5) for (var x = c + 2, v = c + 5, y = c + 5, z = c + 6, B = c + 6; ; ) {
    j = p[p[x] + h];
    var E = p[v] + h * 3, D = j + 11;
    p[E] = p[D];
    t[E] = t[D];
    p[E + 1] = p[D + 1];
    t[E + 1] = t[D + 1];
    t[p[y] + h * 3 + 2] = t[j + 14];
    E = p[z] + h * 3;
    D = j + 16;
    p[E] = p[D];
    t[E] = t[D];
    p[E + 1] = p[D + 1];
    t[E + 1] = t[D + 1];
    t[p[B] + h * 3 + 2] = t[j + 18];
    h += 1;
    if (h >= p[u]) break a;
  } while (0);
  p[g + 6] = p[c + 3];
  p[g + 7] = p[c + 9];
  p[g + 10] = p[c];
  i = d;
  h = d + 6;
  for (j = g; i < h; i++, j++) p[j] = p[i], t[j] = t[i];
  p[g + 8] = p[c + 5];
  p[g + 9] = p[c + 6];
  jk(k, g);
  for (i = 0; ; ) {
    if (i >= p[d + 4]) break;
    h = wk(k, e, f);
    if (h & 1) break;
    i += 1;
  }
  i = p[p[c + 2] + e] + 9;
  h = p[c + 5] + e * 3;
  p[i] = p[h];
  t[i] = t[h];
  p[i + 1] = p[h + 1];
  t[i + 1] = t[h + 1];
  t[p[p[c + 2] + e] + 13] = t[p[c + 5] + e * 3 + 2];
  i = p[p[c + 2] + f] + 9;
  e = p[c + 5] + f * 3;
  p[i] = p[e];
  t[i] = t[e];
  p[i + 1] = p[e + 1];
  t[i + 1] = t[e + 1];
  t[p[p[c + 2] + f] + 13] = t[p[c + 5] + f * 3 + 2];
  kk(k);
  for (i = 0; ; ) {
    if (i >= p[d + 3]) break;
    mk(k);
    i += 1;
  }
  d = t[d];
  f = 0;
  e = c + 7;
  i = f < p[e] ? 22 : 28;
  a : do if (i == 22) {
    h = c + 5;
    j = l;
    for (var u = c + 5, x = c + 6, v = n, y = c + 6, z = c + 5, B = l, E = c + 5, D = c + 6, H = n, I = c + 6, M = c + 2, G = l, S = n; ; ) {
      i = p[h] + f * 3;
      p[j] = p[i];
      t[j] = t[i];
      p[j + 1] = p[i + 1];
      t[j + 1] = t[i + 1];
      m = t[p[u] + f * 3 + 2];
      i = p[x] + f * 3;
      p[v] = p[i];
      t[v] = t[i];
      p[v + 1] = p[i + 1];
      t[v + 1] = t[i + 1];
      o = t[p[y] + f * 3 + 2];
      N(r, d, n);
      i = K(r, r) > 4 ? 24 : 25;
      i == 24 && (i = 2 / fd(r), ci(n, i));
      q = d * o;
      i = q * q > 2.4674012660980225 ? 26 : 27;
      i == 26 && (q = 1.5707963705062866 / se(q), o *= q);
      N(s, d, n);
      Sb(l, s);
      m += d * o;
      q = p[z] + f * 3;
      p[q] = p[B];
      t[q] = t[B];
      p[q + 1] = p[B + 1];
      t[q + 1] = t[B + 1];
      t[p[E] + f * 3 + 2] = m;
      q = p[D] + f * 3;
      p[q] = p[H];
      t[q] = t[H];
      p[q + 1] = p[H + 1];
      t[q + 1] = t[H + 1];
      t[p[I] + f * 3 + 2] = o;
      q = p[p[M] + f];
      var P = q + 11;
      p[P] = p[G];
      t[P] = t[G];
      p[P + 1] = p[G + 1];
      t[P + 1] = t[G + 1];
      t[q + 14] = m;
      m = q + 16;
      p[m] = p[S];
      t[m] = t[S];
      p[m + 1] = p[S + 1];
      t[m + 1] = t[S + 1];
      t[q + 18] = o;
      gk(q);
      f += 1;
      if (f >= p[e]) break a;
    }
  } while (0);
  pk(c, p[k + 10]);
  qk(k);
  b = g;
}

rk.X = 1;

function zc(c, d) {
  var e, f, g;
  e = Ri(c) == 0 ? 2 : 1;
  e == 1 && Q(xk, 109, yk, zk);
  e = Ri(c) ? 3 : 4;
  e == 3 ? f = 0 : e == 4 && (f = Th(c, 152), f == 0 ? (g = 0, e = 6) : e = 5, e == 5 && (Zi(f, d, c), g = f), p[g + 23] = 0, p[g + 24] = p[c + 102538], e = p[c + 102538] != 0 ? 7 : 8, e == 7 && (p[p[c + 102538] + 23] = g), p[c + 102538] = g, p[c + 102540] += 1, f = g);
  return f;
}

zc.X = 1;

function Ak(c) {
  p[c + 7] = 0;
  p[c + 9] = 0;
  p[c + 8] = 0;
}

function Bk(c, d) {
  (p[c + 7] < p[c + 10] ? 2 : 1) == 1 && Q(Ck, 54, Jk, Kk);
  p[d + 2] = p[c + 7];
  p[p[c + 2] + p[c + 7]] = d;
  p[c + 7] += 1;
}

function Uk(c, d) {
  (p[c + 9] < p[c + 11] ? 2 : 1) == 1 && Q(Ck, 62, Vk, Wk);
  var e = p[c + 9];
  p[c + 9] = e + 1;
  p[p[c + 3] + e] = d;
}

function Xk(c, d) {
  var e = b;
  b += 23;
  var f, g, i, h, j, k, l, m, n, o = e + 13, r = e + 21;
  t[c + 102555] = 0;
  t[c + 102556] = 0;
  t[c + 102557] = 0;
  fk(e, p[c + 102540], p[c + 102534], p[c + 102541], c + 17, p[c + 102536]);
  g = p[c + 102538];
  f = p[c + 102538] != 0 ? 1 : 2;
  a : do if (f == 1) for (;;) if (p[g + 1] &= 65534, g = i = p[g + 24], i == 0) break a; while (0);
  g = p[c + 102533];
  f = p[c + 102533] != 0 ? 3 : 4;
  a : do if (f == 3) for (;;) if (p[g + 1] &= -2, g = i = p[g + 3], i == 0) break a; while (0);
  g = p[c + 102539];
  f = p[c + 102539] != 0 ? 5 : 6;
  a : do if (f == 5) for (;;) if (p[g + 15] = 0, g = i = p[g + 3], i == 0) break a; while (0);
  g = p[c + 102540];
  i = Ti(c + 17, g << 2);
  h = p[c + 102538];
  var q = c + 102542, s = c + 102544, u = o + 3, x = c + 102555, v = o + 4, y = c + 102556, z = o + 5, B = c + 102557, E = e + 7, D = e + 2;
  for (f = p[c + 102538]; ; ) {
    if (f == 0) break;
    f = (p[h + 1] & 1) != 0 ? 65 : 18;
    a : do if (f == 18) if (Bj(h) == 0) f = 65; else if ((p[h + 1] & 32) == 32 == 0) f = 65; else if (p[h] == 0) f = 65; else {
      Ak(e);
      k = j = 0;
      j = k + 1;
      p[i + k] = h;
      p[h + 1] = (p[h + 1] | 1) & 65535;
      b : for (;;) {
        if (j <= 0) {
          f = 58;
          break;
        }
        j = f = j - 1;
        k = p[i + f];
        f = (p[k + 1] & 32) == 32 == 1 ? 29 : 28;
        f == 28 && Q(xk, 445, Yk, Zk);
        Bk(e, k);
        yc(k, 1);
        if (p[k] == 0) f = 25; else {
          l = p[k + 28];
          for (m = p[k + 28]; ; ) {
            if (m == 0) {
              f = 47;
              break;
            }
            m = p[l + 1];
            f = (p[m + 1] & 1) != 0 ? 46 : 36;
            f == 36 && ((p[m + 1] & 4) == 4 == 0 ? f = 46 : (p[m + 1] & 2) == 2 == 0 ? f = 46 : (f = p[p[m + 12] + 11] & 1, n = p[p[m + 13] + 11] & 1, f & 1 ? f = 46 : n & 1 ? f = 46 : (Uk(e, m), p[m + 1] |= 1, m = p[l], (p[m + 1] & 1) != 0 ? f = 46 : (f = j < g ? 45 : 44, f == 44 && Q(xk, 495, Yk, $k), n = j, j = n + 1, p[i + n] = m, p[m + 1] = (p[m + 1] | 1) & 65535))));
            l = m = p[l + 3];
          }
          l = p[k + 27];
          for (k = p[k + 27]; ; ) {
            if (k == 0) {
              f = 25;
              continue b;
            }
            f = (p[p[l + 1] + 15] & 1) == 1 ? 57 : 50;
            f == 50 && (k = p[l], (p[k + 1] & 32) == 32 == 0 ? f = 57 : (f = e, m = p[l + 1], (p[f + 8] < p[f + 12] ? 2 : 1) == 1 && Q(Ck, 68, al, bl), n = p[f + 8], p[f + 8] = n + 1, p[p[f + 4] + n] = m, p[p[l + 1] + 15] = 1, (p[k + 1] & 1) != 0 ? f = 57 : (f = j < g ? 56 : 55, f == 55 && Q(xk, 524, Yk, $k), m = j, j = m + 1, p[i + m] = k, p[k + 1] = (p[k + 1] | 1) & 65535)));
            l = k = p[l + 3];
          }
        }
      }
      hk(e, o, d, q, p[s] & 1);
      t[x] += t[u];
      t[y] += t[v];
      t[B] += t[z];
      for (j = 0; ; ) {
        if (j >= p[E]) break a;
        k = p[p[D] + j];
        f = p[k] == 0 ? 63 : 64;
        f == 63 && (p[k + 1] &= 65534);
        j += 1;
      }
    } while (0);
    h = f = p[h + 24];
  }
  Ni(c + 17, i);
  Wi(r);
  o = p[c + 102538];
  for (g = p[c + 102538]; ; ) {
    if (g == 0) break;
    f = (p[o + 1] & 1) == 0 ? 74 : 71;
    f == 71 && (p[o] == 0 || nj(o));
    o = g = p[o + 24];
  }
  o = c + 102518;
  Ij(o, o);
  r = Yi(r);
  t[c + 102558] = r;
  ek(e);
  b = e;
}

Xk.X = 1;

function cl(c, d) {
  var e = b;
  b += 83;
  var f, g, i, h, j, k, l, m, n, o, r, q, s, u, x = e + 13, v = e + 46, y = e + 48, z = e + 57, B = e + 66, E = e + 68, D = e + 77;
  fk(e, 64, 32, 0, c + 17, p[c + 102536]);
  f = p[c + 102551] & 1 ? 2 : 1;
  a : do if (f == 2) {
    g = p[c + 102538];
    f = p[c + 102538] != 0 ? 3 : 4;
    b : do if (f == 3) for (;;) {
      p[g + 1] &= 65534;
      t[g + 15] = 0;
      var H = p[g + 24];
      g = H;
      if (H == 0) {
        f = 4;
        break b;
      }
    } while (0);
    g = p[c + 102533];
    if (p[c + 102533] == 0) f = 1; else for (;;) if (p[g + 1] &= -34, p[g + 32] = 0, t[g + 33] = 1, g = H = p[g + 3], H == 0) {
      f = 1;
      break a;
    }
  } while (0);
  g = c + 102533;
  var H = x + 7, I = x + 14, M = x + 23, G = x + 32, S = v + 1, P = c + 102536, L = B + 1, T = e + 7, F = e + 10, Z = e + 9, aa = e + 11, W = c + 102536, ca = D + 1, la = D + 2, $ = D + 4, X = D + 3, ba = D + 5, ha = e + 7, na = e + 2, ia = c + 102518, ma = c + 102550;
  a : for (;;) {
    i = 0;
    h = 1;
    j = p[g];
    for (f = p[g]; ; ) {
      if (f == 0) break;
      f = (p[j + 1] & 4) == 4 == 0 ? 57 : 14;
      b : do if (f == 14) if (p[j + 32] > 8) f = 57; else {
        k = 1;
        f = (p[j + 1] & 32) != 0 ? 16 : 17;
        if (f == 16) k = t[j + 33]; else if (f == 17) {
          l = p[j + 12];
          m = p[j + 13];
          if (p[l + 11] & 1) break b;
          if (p[m + 11] & 1) break b;
          n = Aj(l);
          o = Aj(m);
          r = p[n];
          q = p[o];
          f = r == 2 ? 26 : 24;
          f == 24 && (q == 2 || Q(xk, 641, dl, el));
          if (Bj(n)) f = 28; else {
            var qa = 0;
            f = 29;
          }
          f == 28 && (qa = r != 0);
          s = qa;
          if (Bj(o)) f = 31; else {
            var xa = 0;
            f = 32;
          }
          f == 31 && (xa = q != 0);
          u = xa;
          f = (s & 1) == 0 ? 33 : 34;
          if (f == 33 && (u & 1) == 0) break b;
          if ((p[n + 1] & 8) == 8) {
            var Fa = 1;
            f = 36;
          } else f = 35;
          f == 35 && (Fa = r != 2);
          r = Fa;
          if ((p[o + 1] & 8) == 8) {
            var Pa = 1;
            f = 38;
          } else f = 37;
          f == 37 && (Pa = q != 2);
          q = Pa;
          f = (r & 1) == 0 ? 39 : 40;
          if (f == 39 && (q & 1) == 0) break b;
          q = t[n + 15];
          r = t[o + 15];
          f = t[n + 15] < t[o + 15] ? 41 : 42;
          f == 41 ? (q = r, fl(n + 7, q)) : f == 42 && r < t[n + 15] && (q = t[n + 15], fl(o + 7, q));
          f = q < 1 ? 46 : 45;
          f == 45 && Q(xk, 676, dl, gl);
          f = p[j + 14];
          r = p[j + 15];
          s = x;
          te(s);
          te(s + 7);
          ue(x, hl(l), f);
          ue(H, hl(m), r);
          l = f = n + 7;
          m = f + 9;
          for (s = I; l < m; l++, s++) p[s] = p[l], t[s] = t[l];
          l = f = o + 7;
          m = f + 9;
          for (s = M; l < m; l++, s++) p[s] = p[l], t[s] = t[l];
          t[G] = 1;
          lh(v, x);
          l = t[S];
          f = p[v] == 3 ? 52 : 53;
          f == 52 ? k = q + (1 - q) * l < 1 ? q + (1 - q) * l : 1 : f == 53 && (k = 1);
          t[j + 33] = k;
          p[j + 1] |= 32;
        }
        k < h ? (i = j, h = k) : f = 57;
      } while (0);
      j = f = p[j + 3];
    }
    if (i == 0) {
      f = 60;
      break;
    }
    if (.9999988079071045 < h) {
      f = 60;
      break;
    }
    j = p[i + 12];
    f = p[i + 13];
    j = Aj(j);
    k = Aj(f);
    l = f = j + 7;
    m = f + 9;
    for (s = y; l < m; l++, s++) p[s] = p[l], t[s] = t[l];
    l = f = k + 7;
    m = f + 9;
    for (s = z; l < m; l++, s++) p[s] = p[l], t[s] = t[l];
    il(j, h);
    il(k, h);
    Hj(i, p[P]);
    p[i + 1] &= -33;
    p[i + 32] += 1;
    f = (p[i + 1] & 4) == 4 == 0 ? 71 : 69;
    do if (f == 69) if ((p[i + 1] & 2) == 2 == 0) f = 71; else {
      yc(j, 1);
      yc(k, 1);
      Ak(e);
      Bk(e, j);
      Bk(e, k);
      Uk(e, i);
      p[j + 1] = (p[j + 1] | 1) & 65535;
      p[k + 1] = (p[k + 1] | 1) & 65535;
      p[i + 1] |= 1;
      p[B] = j;
      p[L] = k;
      for (f = i = 0; ; ) {
        if (f >= 2) break;
        o = p[B + i];
        f = p[o] == 2 ? 81 : 105;
        b : do if (f == 81) {
          n = p[o + 28];
          for (l = p[o + 28]; ; ) {
            if (l == 0) break b;
            if (p[T] == p[F]) break b;
            if (p[Z] == p[aa]) break b;
            q = p[n + 1];
            f = (p[q + 1] & 1) != 0 ? 104 : 86;
            c : do if (f == 86) {
              r = p[n];
              f = p[r] == 2 ? 87 : 89;
              do if (f == 87) if ((p[o + 1] & 8) == 8 != 0) f = 89; else if ((p[r + 1] & 8) == 8 == 0) {
                f = 104;
                break c;
              } while (0);
              f = p[p[q + 12] + 11] & 1;
              l = p[p[q + 13] + 11] & 1;
              if (f & 1) f = 104; else if (l & 1) f = 104; else {
                l = f = r + 7;
                m = f + 9;
                for (s = E; l < m; l++, s++) p[s] = p[l], t[s] = t[l];
                f = (p[r + 1] & 1) == 0 ? 92 : 93;
                f == 92 && il(r, h);
                Hj(q, p[W]);
                f = (p[q + 1] & 4) == 4 == 0 ? 95 : 96;
                if (f == 95) {
                  s = r + 7;
                  l = E;
                  for (m = E + 9; l < m; l++, s++) p[s] = p[l], t[s] = t[l];
                  gk(r);
                } else if (f == 96) if (f = (p[q + 1] & 2) == 2 == 0 ? 98 : 99, f == 98) {
                  s = r + 7;
                  l = E;
                  for (m = E + 9; l < m; l++, s++) p[s] = p[l], t[s] = t[l];
                  gk(r);
                } else if (f == 99) {
                  p[q + 1] |= 1;
                  Uk(e, q);
                  if ((p[r + 1] & 1) != 0) {
                    f = 104;
                    break c;
                  }
                  p[r + 1] = (p[r + 1] | 1) & 65535;
                  f = p[r] != 0 ? 102 : 103;
                  f == 102 && yc(r, 1);
                  Bk(e, r);
                }
              }
            } while (0);
            n = l = p[n + 3];
          }
        } while (0);
        i = f = i + 1;
      }
      t[D] = (1 - h) * t[d];
      t[ca] = 1 / t[D];
      t[la] = 1;
      p[$] = 20;
      p[X] = p[d + 3];
      p[ba] = 0;
      rk(e, D, p[j + 2], p[k + 2]);
      for (h = 0; ; ) {
        if (h >= p[ha]) break;
        i = p[p[na] + h];
        p[i + 1] &= 65534;
        f = p[i] != 2 ? 113 : 110;
        b : do if (f == 110) if (nj(i), j = p[i + 28], p[i + 28] == 0) f = 113; else for (;;) if (p[p[j + 1] + 1] &= -34, j = k = p[j + 3], k == 0) break b; while (0);
        h += 1;
      }
      Ij(ia, ia);
      if (p[ma] & 1) {
        f = 116;
        break a;
      } else {
        f = 6;
        continue a;
      }
    } while (0);
    h = i;
    i = da;
    l = p[h + 1];
    i = 2;
    i == 1 ? p[h + 1] = l | 4 : i == 2 && (p[h + 1] = l & -5);
    h = j + 7;
    l = y;
    m = y + 9;
    for (s = h; l < m; l++, s++) p[s] = p[l], t[s] = t[l];
    h = k + 7;
    l = z;
    m = z + 9;
    for (s = h; l < m; l++, s++) p[s] = p[l], t[s] = t[l];
    gk(j);
    gk(k);
  }
  f == 60 ? p[c + 102551] = 1 : f == 116 && (p[c + 102551] = 0);
  ek(e);
  b = e;
}

cl.X = 1;

function fl(c, d) {
  var e = b;
  b += 6;
  var f, g = e + 2, i = e + 4;
  (t[c + 8] < 1 ? 2 : 1) == 1 && Q(jl, 715, kl, gl);
  f = (d - t[c + 8]) / (1 - t[c + 8]);
  var h = c + 2;
  N(g, 1 - f, c + 2);
  N(i, f, c + 4);
  O(e, g, i);
  p[h] = p[e];
  t[h] = t[e];
  p[h + 1] = p[e + 1];
  t[h + 1] = t[e + 1];
  t[c + 6] = (1 - f) * t[c + 6] + f * t[c + 7];
  t[c + 8] = d;
  b = e;
}

fl.X = 1;

function hl(c) {
  return p[c + 3];
}

function il(c, d) {
  var e = b;
  b += 4;
  var f = e + 2;
  fl(c + 7, d);
  var g = c + 11, i = c + 9;
  p[g] = p[i];
  t[g] = t[i];
  p[g + 1] = p[i + 1];
  t[g + 1] = t[i + 1];
  t[c + 14] = t[c + 13];
  kh(c + 5, t[c + 14]);
  g = c + 3;
  i = c + 11;
  U(f, c + 5, c + 7);
  J(e, i, f);
  p[g] = p[e];
  t[g] = t[e];
  p[g + 1] = p[e + 1];
  t[g + 1] = t[e + 1];
  b = e;
}

function Dc(c, d, e, f) {
  var g = b;
  b += 14;
  var i, h = g + 2, j = g + 8, k = g + 10, l = g + 12;
  Wi(g);
  i = (p[c + 102517] & 1) != 0 ? 1 : 2;
  i == 1 && (i = c + 102518, Ij(i, i), p[c + 102517] &= -2);
  p[c + 102517] |= 2;
  t[h] = d;
  p[h + 3] = e;
  p[h + 4] = f;
  i = d > 0 ? 3 : 4;
  i == 3 ? t[h + 1] = 1 / d : i == 4 && (t[h + 1] = 0);
  t[h + 2] = t[c + 102547] * d;
  p[h + 5] = p[c + 102548] & 1;
  Wi(j);
  Ej(c + 102518);
  d = Yi(j);
  t[c + 102553] = d;
  i = p[c + 102551] & 1 ? 6 : 8;
  i == 6 && t[h] > 0 && (Wi(k), Xk(c, h), k = Yi(k), t[c + 102554] = k);
  i = p[c + 102549] & 1 ? 9 : 11;
  i == 9 && t[h] > 0 && (Wi(l), cl(c, h), l = Yi(l), t[c + 102559] = l);
  i = t[h] > 0 ? 12 : 13;
  i == 12 && (t[c + 102547] = t[h + 1]);
  i = (p[c + 102517] & 4) != 0 ? 14 : 15;
  if (i == 14) {
    l = p[c + 102538];
    h = p[c + 102538] != 0 ? 1 : 2;
    a : do if (h == 1) for (;;) if (hc(l + 19), t[l + 21] = 0, l = k = p[l + 24], k == 0) break a; while (0);
  }
  p[c + 102517] &= -3;
  h = Yi(g);
  t[c + 102552] = h;
  b = g;
}

Dc.X = 1;

function ll(c) {
  return p[p[c + 3] + 1];
}

function ml(c, d, e) {
  var f, c = d + 8, d = e + 8, e = p[c + 2] == p[d + 2] ? 1 : 3;
  e == 1 && (p[c + 2] == 0 ? e = 3 : (f = p[c + 2] > 0, e = 6));
  if (e == 3) {
    if ((p[d] & p[c + 1]) != 0) e = 4; else var g = 0, e = 5;
    e == 4 && (g = (p[d + 1] & p[c]) != 0);
    f = g & 1;
  }
  return f;
}

ml.X = 1;

function nl(c, d, e, f, g) {
  ol(c, d, e, f, g);
  p[c] = pl + 2;
  d = ll(p[c + 12]) == 3 ? 2 : 1;
  d == 1 && Q(ql, 43, rl, sl);
  d = ll(p[c + 13]) == 0 ? 4 : 3;
  d == 3 && Q(ql, 44, rl, tl);
}

nl.X = 1;

function ul(c, d, e, f) {
  var g = b;
  b += 13;
  var i;
  i = hl(p[c + 12]);
  ic(g);
  Eh(i, g, p[c + 14]);
  hd(d, g, e, hl(p[c + 13]), f);
  b = g;
}

ul.X = 1;

function vl(c, d, e, f, g) {
  ol(c, d, e, f, g);
  p[c] = wl + 2;
  d = ll(p[c + 12]) == 3 ? 2 : 1;
  d == 1 && Q(xl, 43, yl, sl);
  d = ll(p[c + 13]) == 2 ? 4 : 3;
  d == 3 && Q(xl, 44, yl, zl);
}

vl.X = 1;

function Al(c, d, e, f) {
  var g = b;
  b += 13;
  var i;
  i = hl(p[c + 12]);
  ic(g);
  Eh(i, g, p[c + 14]);
  c = hl(p[c + 13]);
  i = b;
  b += 63;
  Vd(i, d, g, e, c, f);
  b = i;
  b = g;
}

Al.X = 1;

function Bl(c, d, e) {
  ol(c, d, 0, e, 0);
  p[c] = Cl + 2;
  d = ll(p[c + 12]) == 0 ? 2 : 1;
  d == 1 && Q(Dl, 44, El, Fl);
  d = ll(p[c + 13]) == 0 ? 4 : 3;
  d == 3 && Q(Dl, 45, El, tl);
}

function Gl(c, d, e, f) {
  (0 <= e & e < 4 ? 2 : 1) == 1 && Q(Hl, 54, Il, Jl);
  (0 <= f & f < 4 ? 4 : 3) == 3 && Q(Hl, 55, Il, Kl);
  p[Ll + e * 12 + f * 3] = c;
  p[Ll + e * 12 + f * 3 + 1] = d;
  p[Ll + e * 12 + f * 3 + 2] = 1;
  if ((e != f ? 5 : 6) == 5) p[Ll + f * 12 + e * 3] = c, p[Ll + f * 12 + e * 3 + 1] = d, p[Ll + f * 12 + e * 3 + 2] = 0;
}

Gl.X = 1;

function Qj(c, d, e, f, g) {
  var i, h, j, k, l;
  i = (p[Ml] & 1) == 0 ? 1 : 2;
  i == 1 && (Gl(8, 10, 0, 0), Gl(12, 14, 2, 0), Gl(16, 18, 2, 2), Gl(20, 22, 1, 0), Gl(24, 26, 1, 2), Gl(28, 30, 3, 0), Gl(32, 34, 3, 2), p[Ml] = 1);
  j = ll(c);
  k = ll(e);
  (0 <= j & j < 4 ? 4 : 3) == 3 && Q(Hl, 80, Nl, Jl);
  (0 <= k & k < 4 ? 6 : 5) == 5 && Q(Hl, 81, Nl, Kl);
  l = p[Ll + j * 12 + k * 3];
  i = p[Ll + j * 12 + k * 3] != 0 ? 7 : 10;
  i == 7 ? (i = p[Ll + j * 12 + k * 3 + 2] & 1 ? 8 : 9, i == 8 ? h = qb[l](c, d, e, f, g) : i == 9 && (h = qb[l](e, f, c, d, g))) : i == 10 && (h = 0);
  return h;
}

Qj.X = 1;

function Dj(c, d) {
  var e, f, g;
  e = (p[Ml] & 1) == 1 ? 2 : 1;
  e == 1 && Q(Hl, 103, Ol, Pl);
  e = p[c + 31] > 0 ? 3 : 4;
  e == 3 && (yc(Aj(p[c + 12]), 1), yc(Aj(p[c + 13]), 1));
  f = ll(p[c + 12]);
  g = ll(p[c + 13]);
  e = 0 <= f ? 5 : 6;
  e == 5 && (e = g < 4 ? 7 : 6);
  e == 6 && Q(Hl, 114, Ol, Ql);
  e = 0 <= f ? 8 : 9;
  e == 8 && (e = g < 4 ? 10 : 9);
  e == 9 && Q(Hl, 115, Ol, Ql);
  qb[p[Ll + f * 12 + g * 3 + 1]](c, d);
}

Dj.X = 1;

function ol(c, d, e, f, g) {
  p[c] = Rl + 2;
  p[c + 1] = 4;
  p[c + 12] = d;
  p[c + 13] = f;
  p[c + 14] = e;
  p[c + 15] = g;
  p[c + 31] = 0;
  p[c + 2] = 0;
  p[c + 3] = 0;
  p[c + 5] = 0;
  p[c + 6] = 0;
  p[c + 7] = 0;
  p[c + 4] = 0;
  p[c + 9] = 0;
  p[c + 10] = 0;
  p[c + 11] = 0;
  p[c + 8] = 0;
  p[c + 32] = 0;
  d = gd(t[p[c + 12] + 4] * t[p[c + 13] + 4]);
  t[c + 34] = d;
  t[c + 35] = t[p[c + 12] + 5] > t[p[c + 13] + 5] ? t[p[c + 12] + 5] : t[p[c + 13] + 5];
}

ol.X = 1;

function Hj(c, d) {
  var e = b;
  b += 17;
  var f, g, i, h, j, k, l, m, n, o, r = e + 16, q, s;
  i = f = c + 16;
  f += 16;
  for (h = e; i < f; i++, h++) p[h] = p[i], t[h] = t[i];
  p[c + 1] |= 4;
  g = 0;
  i = (p[c + 1] & 2) == 2;
  f = p[p[c + 12] + 11] & 1;
  h = p[p[c + 13] + 11] & 1;
  f & 1 ? (j = 1, f = 2) : f = 1;
  f == 1 && (j = h & 1);
  h = Aj(p[c + 12]);
  k = Aj(p[c + 13]);
  l = h + 3;
  m = k + 3;
  f = j & 1 ? 3 : 4;
  do if (f == 3) {
    n = hl(p[c + 12]);
    g = hl(p[c + 13]);
    var u = n, x = p[c + 14], v = g, y = p[c + 15], z = l;
    n = m;
    g = b;
    b += 37;
    o = g + 23;
    q = g + 31;
    var B = g;
    te(B);
    te(B + 7);
    ue(g, u, x);
    ue(g + 7, v, y);
    u = g + 14;
    p[u] = p[z];
    t[u] = t[z];
    p[u + 1] = p[z + 1];
    t[u + 1] = t[z + 1];
    p[u + 2] = p[z + 2];
    t[u + 2] = t[z + 2];
    p[u + 3] = p[z + 3];
    t[u + 3] = t[z + 3];
    u = g + 18;
    p[u] = p[n];
    t[u] = t[n];
    p[u + 1] = p[n + 1];
    t[u + 1] = t[n + 1];
    p[u + 2] = p[n + 2];
    t[u + 2] = t[n + 2];
    p[u + 3] = p[n + 3];
    t[u + 3] = t[n + 3];
    p[g + 22] = 1;
    p[o + 1] = 0;
    Fe(q, o, g);
    n = t[q + 4] < 11920928955078125e-22;
    b = g;
    g = n;
    p[c + 31] = 0;
  } else if (f == 4) {
    qb[p[p[c]]](c, c + 16, l, m);
    g = p[c + 31] > 0;
    n = 0;
    u = c + 31;
    f = n < p[u] ? 5 : 12;
    a : do if (f == 5) {
      x = c + 16;
      z = r;
      v = e + 15;
      y = e;
      for (B = r; ; ) {
        o = x + n * 5;
        t[o + 2] = 0;
        t[o + 3] = 0;
        p[z] = p[o + 4];
        t[z] = t[o + 4];
        for (q = 0; ; ) {
          if (q >= p[v]) {
            f = 11;
            break;
          }
          s = y + q * 5;
          if (p[s + 4] == p[B]) {
            f = 9;
            break;
          }
          q += 1;
        }
        f == 9 && (t[o + 2] = t[s + 2], t[o + 3] = t[s + 3]);
        n += 1;
        if (n >= p[u]) {
          f = 12;
          break a;
        }
      }
    } while (0);
    (g & 1) == (i & 1) ? f = 14 : (yc(h, 1), yc(k, 1));
  } while (0);
  r = p[c + 1];
  f = g & 1 ? 15 : 16;
  f == 15 ? p[c + 1] = r | 2 : f == 16 && (p[c + 1] = r & -3);
  if (((i & 1) == 0 ? 18 : 21) == 18 && (g & 1) == 1 && d != 0) qb[p[p[d] + 2]](d, c);
  if (((i & 1) == 1 ? 22 : 25) == 22 && (g & 1) == 0 && d != 0) qb[p[p[d] + 3]](d, c);
  if (((j & 1) == 0 ? 26 : 29) == 26 && g & 1 && d != 0) qb[p[p[d] + 4]](d, c, e);
  b = e;
}

Hj.X = 1;

function Sl(c) {
  t[c] = 0;
  t[c + 2] = 0;
  t[c + 1] = 0;
  t[c + 3] = 0;
}

function qk(c) {
  Ni(p[c + 8], p[c + 10]);
  Ni(p[c + 8], p[c + 9]);
}

function jk(c, d) {
  var e, f, g, i, h, j, k, l, m, n;
  f = d;
  for (var o = d + 6, r = c; f < o; f++, r++) p[r] = p[f], t[r] = t[f];
  p[c + 8] = p[d + 10];
  p[c + 12] = p[d + 7];
  f = Ti(p[c + 8], p[c + 12] * 88);
  p[c + 9] = f;
  f = Ti(p[c + 8], p[c + 12] * 152);
  p[c + 10] = f;
  p[c + 6] = p[d + 8];
  p[c + 7] = p[d + 9];
  p[c + 11] = p[d + 6];
  f = 0;
  o = c + 12;
  e = f < p[o] ? 1 : 10;
  a : do if (e == 1) for (var r = c + 11, q = c + 10, s = c + 9, u = c + 5, x = c + 2, v = c + 2; ; ) {
    g = p[p[r] + f];
    i = p[g + 12];
    h = p[g + 13];
    j = hl(i);
    k = hl(h);
    j = t[j + 2];
    l = t[k + 2];
    m = Aj(i);
    n = Aj(h);
    h = g + 16;
    i = p[h + 15];
    e = p[h + 15] > 0 ? 4 : 3;
    e == 3 && Q(Tl, 71, Ul, Vl);
    k = p[q] + f * 38;
    t[k + 34] = t[g + 34];
    t[k + 35] = t[g + 35];
    p[k + 28] = p[m + 2];
    p[k + 29] = p[n + 2];
    t[k + 30] = t[m + 30];
    t[k + 31] = t[n + 30];
    t[k + 32] = t[m + 32];
    t[k + 33] = t[n + 32];
    p[k + 37] = f;
    p[k + 36] = i;
    Sl(k + 24);
    Sl(k + 20);
    g = p[s] + f * 22;
    p[g + 8] = p[m + 2];
    p[g + 9] = p[n + 2];
    t[g + 10] = t[m + 30];
    t[g + 11] = t[n + 30];
    e = g + 12;
    var y = m + 7;
    p[e] = p[y];
    t[e] = t[y];
    p[e + 1] = p[y + 1];
    t[e + 1] = t[y + 1];
    e = g + 14;
    y = n + 7;
    p[e] = p[y];
    t[e] = t[y];
    p[e + 1] = p[y + 1];
    t[e + 1] = t[y + 1];
    t[g + 16] = t[m + 32];
    t[g + 17] = t[n + 32];
    e = g + 4;
    m = h + 10;
    p[e] = p[m];
    t[e] = t[m];
    p[e + 1] = p[m + 1];
    t[e + 1] = t[m + 1];
    e = g + 6;
    m = h + 12;
    p[e] = p[m];
    t[e] = t[m];
    p[e + 1] = p[m + 1];
    t[e + 1] = t[m + 1];
    p[g + 21] = i;
    t[g + 19] = j;
    t[g + 20] = l;
    p[g + 18] = p[h + 14];
    j = 0;
    e = j < i ? 5 : 9;
    b : do if (e == 5) for (;;) if (l = h + j * 5, m = k + j * 9, e = p[u] & 1 ? 6 : 7, e == 6 ? (t[m + 4] = t[x] * t[l + 2], t[m + 5] = t[v] * t[l + 3]) : e == 7 && (t[m + 4] = 0, t[m + 5] = 0), hc(m), hc(m + 2), t[m + 6] = 0, t[m + 7] = 0, t[m + 8] = 0, m = g + (j << 1), p[m] = p[l], t[m] = t[l], p[m + 1] = p[l + 1], t[m + 1] = t[l + 1], j += 1, j >= i) {
      e = 9;
      break b;
    } while (0);
    f += 1;
    if (f >= p[o]) break a;
  } while (0);
}

jk.X = 1;

function kk(c) {
  var d = b;
  b += 54;
  var e, f, g, i, h, j, k, l, m, n, o, r, q, s = d + 2, u = d + 4, x, v = d + 6, y, z = d + 8, B, E = d + 10, D, H = d + 12, I = d + 16, M = d + 20, G = d + 22, S = d + 24, P = d + 26, L = d + 28, T, F, Z, aa = d + 34, W = d + 36, ca, la, $, X = d + 38, ba, ha, na, ia, ma = d + 40, qa = d + 42, xa = d + 44, Fa = d + 46, Pa = d + 48, Ga, Za, xb, La, bb, Ua, ra, ja, Ea, Da = d + 50;
  f = 0;
  var za = c + 12;
  e = f < p[za] ? 1 : 17;
  a : do if (e == 1) for (var Qa = c + 10, oa = c + 9, Ra = c + 11, Ma = d, Ba = s, Va = c + 6, Ha = u, Nb = c + 6, bc = c + 7, Wa = v, kc = c + 7, Ub = c + 6, cb = z, lc = c + 6, Cb = c + 7, db = E, Vb = c + 7, Ob = H + 2, Hb = I + 2, Ib = H + 2, jb = H, cc = M, dc = I + 2, kb = I, Db = S, lb = L, Oa = Da, ec = L + 2, mb = aa, Jb = L + 2, nb = W; ; ) {
    g = p[Qa] + f * 38;
    i = p[oa] + f * 22;
    h = t[i + 19];
    j = t[i + 20];
    k = p[p[Ra] + p[g + 37]] + 16;
    l = p[g + 28];
    m = p[g + 29];
    n = t[g + 30];
    o = t[g + 31];
    r = t[g + 32];
    q = t[g + 33];
    var Kb = i + 12;
    p[Ma] = p[Kb];
    t[Ma] = t[Kb];
    p[Ma + 1] = p[Kb + 1];
    t[Ma + 1] = t[Kb + 1];
    var mc = i + 14;
    p[Ba] = p[mc];
    t[Ba] = t[mc];
    p[Ba + 1] = p[mc + 1];
    t[Ba + 1] = t[mc + 1];
    var nc = p[Va] + l * 3;
    p[Ha] = p[nc];
    t[Ha] = t[nc];
    p[Ha + 1] = p[nc + 1];
    t[Ha + 1] = t[nc + 1];
    x = t[p[Nb] + l * 3 + 2];
    var yb = p[bc] + l * 3;
    p[Wa] = p[yb];
    t[Wa] = t[yb];
    p[Wa + 1] = p[yb + 1];
    t[Wa + 1] = t[yb + 1];
    y = t[p[kc] + l * 3 + 2];
    var Wb = p[Ub] + m * 3;
    p[cb] = p[Wb];
    t[cb] = t[Wb];
    p[cb + 1] = p[Wb + 1];
    t[cb + 1] = t[Wb + 1];
    B = t[p[lc] + m * 3 + 2];
    var Xb = p[Cb] + m * 3;
    p[db] = p[Xb];
    t[db] = t[Xb];
    p[db + 1] = p[Xb + 1];
    t[db + 1] = t[Xb + 1];
    D = t[p[Vb] + m * 3 + 2];
    e = p[k + 15] > 0 ? 4 : 3;
    e == 3 && Q(Tl, 168, Wl, Xl);
    kh(Ob, x);
    kh(Hb, B);
    U(G, Ib, d);
    J(M, u, G);
    p[jb] = p[cc];
    t[jb] = t[cc];
    p[jb + 1] = p[cc + 1];
    t[jb + 1] = t[cc + 1];
    U(P, dc, s);
    J(S, z, P);
    p[kb] = p[Db];
    t[kb] = t[Db];
    p[kb + 1] = p[Db + 1];
    t[kb + 1] = t[Db + 1];
    re(L, k, H, h, I, j);
    var zb = g + 18;
    p[zb] = p[lb];
    t[zb] = t[lb];
    p[zb + 1] = p[lb + 1];
    t[zb + 1] = t[lb + 1];
    T = p[g + 36];
    F = 0;
    if (F < T) {
      var fc = g;
      e = 5;
    } else {
      var Lb = g;
      e = 12;
    }
    b : do if (e == 5) for (;;) {
      var oc = Z = fc + F * 9;
      J(aa, ec + (F << 1), u);
      var Ab = oc;
      p[Ab] = p[mb];
      t[Ab] = t[mb];
      p[Ab + 1] = p[mb + 1];
      t[Ab + 1] = t[mb + 1];
      var Pb = Z + 2;
      J(W, Jb + (F << 1), z);
      var Bb = Pb;
      p[Bb] = p[nb];
      t[Bb] = t[nb];
      p[Bb + 1] = p[nb + 1];
      t[Bb + 1] = t[nb + 1];
      ca = R(Z, g + 18);
      la = R(Z + 2, g + 18);
      $ = n + o + r * ca * ca + q * la * la;
      if (n + o + r * ca * ca + q * la * la > 0) e = 6; else {
        var ob = 0;
        e = 7;
      }
      e == 6 && (ob = 1 / $);
      t[Z + 6] = ob;
      de(X, g + 18);
      ba = R(Z, X);
      ha = R(Z + 2, X);
      na = n + o + r * ba * ba + q * ha * ha;
      if (n + o + r * ba * ba + q * ha * ha > 0) e = 8; else {
        var gc = 0;
        e = 9;
      }
      e == 8 && (gc = 1 / na);
      t[Z + 7] = gc;
      t[Z + 8] = 0;
      var pc = g + 18;
      Ke(Fa, D, Z + 2);
      O(xa, E, Fa);
      J(qa, xa, v);
      Ke(Pa, y, Z);
      J(ma, qa, Pa);
      var Yb = K(pc, ma);
      ia = Yb;
      e = Yb < -1 ? 10 : 11;
      e == 10 && (t[Z + 8] = -t[g + 35] * ia);
      F += 1;
      if (F < T) fc = g; else {
        Lb = g;
        e = 12;
        break b;
      }
    } while (0);
    e = p[Lb + 36] == 2 ? 13 : 16;
    if (e == 13) {
      Ga = g;
      Za = g + 9;
      xb = R(Ga, g + 18);
      La = R(Ga + 2, g + 18);
      bb = R(Za, g + 18);
      Ua = R(Za + 2, g + 18);
      ra = n + o + r * xb * xb + q * La * La;
      ja = n + o + r * bb * bb + q * Ua * Ua;
      Ea = n + o + r * xb * bb + q * La * Ua;
      var Ic = g;
      e = ra * ra < (ra * ja - Ea * Ea) * 1e3 ? 14 : 15;
      if (e == 14) {
        sc(Ic + 24, ra, Ea);
        sc(g + 26, Ea, ja);
        var qc = g + 20;
        Yl(Da, g + 24);
        var pb = qc;
        p[pb] = p[Oa];
        t[pb] = t[Oa];
        p[pb + 1] = p[Oa + 1];
        t[pb + 1] = t[Oa + 1];
        p[pb + 2] = p[Oa + 2];
        t[pb + 2] = t[Oa + 2];
        p[pb + 3] = p[Oa + 3];
        t[pb + 3] = t[Oa + 3];
      } else e == 15 && (p[Ic + 36] = 1);
    }
    f += 1;
    if (f >= p[za]) {
      e = 17;
      break a;
    }
  } while (0);
  b = d;
}

kk.X = 1;

function Yl(c, d) {
  var e, f, g, i, h;
  e = t[d];
  f = t[d + 2];
  g = t[d + 1];
  i = t[d + 3];
  h = e * i - f * g;
  if ((h != 0 ? 1 : 2) == 1) h = 1 / h;
  t[c] = h * i;
  t[c + 2] = -h * f;
  t[c + 1] = -h * g;
  t[c + 3] = h * e;
}

Yl.X = 1;

function lk(c) {
  var d = b;
  b += 18;
  var e, f, g, i, h, j, k, l, m, n, o, r = d + 2, q, s = d + 4, u = d + 6, x, v, y = d + 8, z = d + 10, B = d + 12, E = d + 14, D = d + 16;
  f = 0;
  var H = c + 12;
  e = f < p[H] ? 1 : 5;
  a : do if (e == 1) for (var I = c + 10, M = c + 7, G = d, S = c + 7, P = c + 7, L = r, T = c + 7, F = s, Z = c + 7, aa = d, W = c + 7, ca = c + 7, la = r, $ = c + 7; ; ) {
    g = p[I] + f * 38;
    i = p[g + 28];
    h = p[g + 29];
    j = t[g + 30];
    k = t[g + 32];
    l = t[g + 31];
    m = t[g + 33];
    n = p[g + 36];
    o = p[M] + i * 3;
    p[G] = p[o];
    t[G] = t[o];
    p[G + 1] = p[o + 1];
    t[G + 1] = t[o + 1];
    o = t[p[S] + i * 3 + 2];
    q = p[P] + h * 3;
    p[L] = p[q];
    t[L] = t[q];
    p[L + 1] = p[q + 1];
    t[L + 1] = t[q + 1];
    q = t[p[T] + h * 3 + 2];
    e = g + 18;
    p[F] = p[e];
    t[F] = t[e];
    p[F + 1] = p[e + 1];
    t[F + 1] = t[e + 1];
    de(u, s);
    x = 0;
    e = x < n ? 3 : 4;
    b : do if (e == 3) for (;;) if (v = g + x * 9, N(z, t[v + 4], s), N(B, t[v + 5], u), O(y, z, B), o -= k * R(v, y), N(E, j, y), Se(d, E), q += m * R(v + 2, y), N(D, l, y), Sb(r, D), x += 1, x >= n) {
      e = 4;
      break b;
    } while (0);
    g = p[Z] + i * 3;
    p[g] = p[aa];
    t[g] = t[aa];
    p[g + 1] = p[aa + 1];
    t[g + 1] = t[aa + 1];
    t[p[W] + i * 3 + 2] = o;
    i = p[ca] + h * 3;
    p[i] = p[la];
    t[i] = t[la];
    p[i + 1] = p[la + 1];
    t[i + 1] = t[la + 1];
    t[p[$] + h * 3 + 2] = q;
    f += 1;
    if (f >= p[H]) break a;
  } while (0);
  b = d;
}

lk.X = 1;

function Zl(c, d, e) {
  tc(c, t[d] * t[e] + t[d + 2] * t[e + 1], t[d + 1] * t[e] + t[d + 3] * t[e + 1]);
}

function mk(c) {
  var d = b;
  b += 126;
  var e, f, g, i, h, j, k, l, m, n, o, r = d + 2, q, s = d + 4, u = d + 6, x, v, y, z = d + 8, B = d + 10, E = d + 12, D = d + 14, H = d + 16, I, M, G, S, P = d + 18, L = d + 20, T = d + 22, F, Z = d + 24, aa = d + 26, W = d + 28, ca = d + 30, la = d + 32, $, X, ba, ha = d + 34, na = d + 36, ia = d + 38, ma, qa, xa = d + 40, Fa = d + 42, Pa = d + 44, Ga = d + 46, Za = d + 48, xb = d + 50, La = d + 52, bb = d + 54, Ua = d + 56, ra = d + 58, ja = d + 60, Ea, Da, za = d + 62, Qa = d + 64, oa = d + 66, Ra = d + 68, Ma = d + 70, Ba = d + 72, Va = d + 74, Ha = d + 76, Nb = d + 78, bc = d + 80, Wa = d + 82, kc = d + 84, Ub = d + 86, cb = d + 88, lc = d + 90, Cb = d + 92, db = d + 94, Vb = d + 96, Ob = d + 98, Hb = d + 100, Ib = d + 102, jb = d + 104, cc = d + 106, dc = d + 108, kb = d + 110, Db = d + 112, lb = d + 114, Oa = d + 116, ec = d + 118, mb = d + 120, Jb = d + 122, nb = d + 124;
  f = 0;
  var Kb = c + 12;
  e = f < p[Kb] ? 1 : 24;
  a : do if (e == 1) for (var mc = c + 10, nc = c + 7, yb = d, Wb = c + 7, Xb = c + 7, zb = r, fc = c + 7, Lb = s, oc = c + 7, Ab = d, Pb = c + 7, Bb = c + 7, ob = r, gc = c + 7, pc = xa, Yb = xa + 1, Ic = za, qc = za + 1, pb = oa, he = oa + 1, af = Ma, bf = Ma + 1, kd = oa, ld = oa + 1, md = za, nd = oa, od = oa + 1, pd = oa, qd = za + 1, rd = oa, Lh = kc, sd = kc + 1, td = oa, Mh = oa + 1, ud = oa, vd = za + 1, ie = oa + 1, cf = oa + 1, df = za, wd = oa + 1, xd = Ob, yd = Ob + 1, zd = oa, Ad = oa + 1, Bd = oa, Cd = oa + 1, Dd = za, Nh = za + 1, Ed = Db, Fd = Db + 1, Oh = oa, Gd = oa + 1; ; ) {
    g = p[mc] + f * 38;
    i = p[g + 28];
    h = p[g + 29];
    j = t[g + 30];
    k = t[g + 32];
    l = t[g + 31];
    m = t[g + 33];
    n = p[g + 36];
    var Ac = p[nc] + i * 3;
    p[yb] = p[Ac];
    t[yb] = t[Ac];
    p[yb + 1] = p[Ac + 1];
    t[yb + 1] = t[Ac + 1];
    o = t[p[Wb] + i * 3 + 2];
    var Jc = p[Xb] + h * 3;
    p[zb] = p[Jc];
    t[zb] = t[Jc];
    p[zb + 1] = p[Jc + 1];
    t[zb + 1] = t[Jc + 1];
    q = t[p[fc] + h * 3 + 2];
    var Yc = g + 18;
    p[Lb] = p[Yc];
    t[Lb] = t[Yc];
    p[Lb + 1] = p[Yc + 1];
    t[Lb + 1] = t[Yc + 1];
    de(u, s);
    x = t[g + 34];
    e = n == 1 | n == 2 ? 4 : 3;
    e == 3 && Q(Tl, 311, $l, am);
    v = 0;
    if (v < n) {
      var je = g;
      e = 5;
    } else {
      var Zc = g;
      e = 6;
    }
    b : do if (e == 5) for (;;) if (y = je + v * 9, Ke(D, q, y + 2), O(E, r, D), J(B, E, d), Ke(H, o, y), J(z, B, H), I = K(z, u), M = t[y + 7] * -I, G = x * t[y + 4], S = ik(t[y + 5] + M, -G, G), M = S - t[y + 5], t[y + 5] = S, N(P, M, u), N(L, j, P), Se(d, L), o -= k * R(y, P), N(T, l, P), Sb(r, T), q += m * R(y + 2, P), v += 1, v < n) je = g; else {
      Zc = g;
      e = 6;
      break b;
    } while (0);
    var $c = g;
    e = p[Zc + 36] == 1 ? 7 : 8;
    b : do if (e == 7) F = $c, Ke(ca, q, F + 2), O(W, r, ca), J(aa, W, d), Ke(la, o, F), J(Z, aa, la), $ = K(Z, s), X = -t[F + 6] * ($ - t[F + 8]), ba = t[F + 4] + X > 0 ? t[F + 4] + X : 0, X = ba - t[F + 4], t[F + 4] = ba, N(ha, X, s), N(na, j, ha), Se(d, na), o -= k * R(F, ha), N(ia, l, ha), Sb(r, ia), q += m * R(F + 2, ha); else if (e == 8) {
      ma = $c;
      qa = g + 9;
      tc(xa, t[ma + 4], t[qa + 4]);
      e = t[pc] >= 0 ? 9 : 10;
      e == 9 && (e = t[Yb] >= 0 ? 11 : 10);
      e == 10 && Q(Tl, 406, $l, bm);
      Ke(Za, q, ma + 2);
      O(Ga, r, Za);
      J(Pa, Ga, d);
      Ke(xb, o, ma);
      J(Fa, Pa, xb);
      Ke(ra, q, qa + 2);
      O(Ua, r, ra);
      J(bb, Ua, d);
      Ke(ja, o, qa);
      J(La, bb, ja);
      Ea = K(Fa, s);
      Da = K(La, s);
      t[Ic] = Ea - t[ma + 8];
      t[qc] = Da - t[qa + 8];
      Zl(Qa, g + 24, xa);
      Se(za, Qa);
      Zl(Ra, g + 20, za);
      Xd(oa, Ra);
      e = t[pb] >= 0 ? 12 : 14;
      do if (e == 12) if (t[he] >= 0) {
        J(Ma, oa, xa);
        N(Ba, t[af], s);
        N(Va, t[bf], s);
        var Hd = j;
        O(Nb, Ba, Va);
        N(Ha, Hd, Nb);
        Se(d, Ha);
        o -= k * (R(ma, Ba) + R(qa, Va));
        var Id = l;
        O(Wa, Ba, Va);
        N(bc, Id, Wa);
        Sb(r, bc);
        q += m * (R(ma + 2, Ba) + R(qa + 2, Va));
        t[ma + 4] = t[kd];
        t[qa + 4] = t[ld];
        e = 23;
        break b;
      } else e = 14; while (0);
      t[nd] = -t[ma + 6] * t[md];
      Ea = t[od] = 0;
      Da = t[g + 25] * t[pd] + t[qd];
      e = t[rd] >= 0 ? 15 : 17;
      do if (e == 15) if (Da >= 0) {
        J(kc, oa, xa);
        N(Ub, t[Lh], s);
        N(cb, t[sd], s);
        var Jd = j;
        O(Cb, Ub, cb);
        N(lc, Jd, Cb);
        Se(d, lc);
        o -= k * (R(ma, Ub) + R(qa, cb));
        var Kd = l;
        O(Vb, Ub, cb);
        N(db, Kd, Vb);
        Sb(r, db);
        q += m * (R(ma + 2, Ub) + R(qa + 2, cb));
        t[ma + 4] = t[td];
        t[qa + 4] = t[Mh];
        e = 23;
        break b;
      } else e = 17; while (0);
      t[ud] = 0;
      t[ie] = -t[qa + 6] * t[vd];
      Ea = t[g + 26] * t[cf] + t[df];
      Da = 0;
      e = t[wd] >= 0 ? 18 : 20;
      do if (e == 18) if (Ea >= 0) {
        J(Ob, oa, xa);
        N(Hb, t[xd], s);
        N(Ib, t[yd], s);
        var Ld = j;
        O(cc, Hb, Ib);
        N(jb, Ld, cc);
        Se(d, jb);
        o -= k * (R(ma, Hb) + R(qa, Ib));
        var Md = l;
        O(kb, Hb, Ib);
        N(dc, Md, kb);
        Sb(r, dc);
        q += m * (R(ma + 2, Hb) + R(qa + 2, Ib));
        t[ma + 4] = t[zd];
        t[qa + 4] = t[Ad];
        e = 23;
        break b;
      } else e = 20; while (0);
      t[Bd] = 0;
      t[Cd] = 0;
      var ef = t[Dd];
      Ea = ef;
      Da = t[Nh];
      if (ef >= 0) if (Da >= 0) {
        J(Db, oa, xa);
        N(lb, t[Ed], s);
        N(Oa, t[Fd], s);
        var Nd = j;
        O(mb, lb, Oa);
        N(ec, Nd, mb);
        Se(d, ec);
        o -= k * (R(ma, lb) + R(qa, Oa));
        var Od = l;
        O(nb, lb, Oa);
        N(Jb, Od, nb);
        Sb(r, Jb);
        q += m * (R(ma + 2, lb) + R(qa + 2, Oa));
        t[ma + 4] = t[Oh];
        t[qa + 4] = t[Gd];
      } else e = 23; else e = 23;
    } while (0);
    var Pd = p[oc] + i * 3;
    p[Pd] = p[Ab];
    t[Pd] = t[Ab];
    p[Pd + 1] = p[Ab + 1];
    t[Pd + 1] = t[Ab + 1];
    t[p[Pb] + i * 3 + 2] = o;
    var Bc = p[Bb] + h * 3;
    p[Bc] = p[ob];
    t[Bc] = t[ob];
    p[Bc + 1] = p[ob + 1];
    t[Bc + 1] = t[ob + 1];
    t[p[gc] + h * 3 + 2] = q;
    f += 1;
    if (f >= p[Kb]) {
      e = 24;
      break a;
    }
  } while (0);
  b = d;
}

mk.X = 1;

function nk(c) {
  var d, e, f, g, i;
  e = 0;
  var h = c + 12;
  d = e < p[h] ? 1 : 5;
  a : do if (d == 1) for (var j = c + 10, k = c + 11; ; ) {
    f = p[j] + e * 38;
    g = p[p[k] + p[f + 37]] + 16;
    i = 0;
    d = i < p[f + 36] ? 3 : 4;
    b : do if (d == 3) for (;;) if (t[g + i * 5 + 2] = t[f + i * 9 + 4], t[g + i * 5 + 3] = t[f + i * 9 + 5], i += 1, i >= p[f + 36]) {
      d = 4;
      break b;
    } while (0);
    e += 1;
    if (e >= p[h]) break a;
  } while (0);
}

nk.X = 1;

function ok(c) {
  var d = b;
  b += 43;
  var e, f, g, i, h, j, k, l, m = d + 2, n, o, r, q = d + 4, s, u = d + 6, x, v, y = d + 8, z = d + 12, B = d + 16, E = d + 18, D = d + 20, H = d + 22, I = d + 24, M = d + 29, G = d + 31, S = d + 33, P = d + 35, L, T, F, Z = d + 37, aa = d + 39, W = d + 41;
  g = f = 0;
  var ca = c + 12;
  e = g < p[ca] ? 1 : 7;
  a : do if (e == 1) for (var la = c + 9, $ = d, X = m, ba = c + 6, ha = q, na = c + 6, ia = c + 6, ma = u, qa = c + 6, xa = c + 6, Fa = q, Pa = c + 6, Ga = c + 6, Za = u, xb = c + 6, La = y + 2, bb = z + 2, Ua = y + 2, ra = y, ja = B, Ea = z + 2, Da = z, za = D, Qa = M, oa = I, Ra = G, Ma = I + 2, Ba = I + 4; ; ) {
    i = p[la] + g * 22;
    h = p[i + 8];
    j = p[i + 9];
    k = i + 12;
    p[$] = p[k];
    t[$] = t[k];
    p[$ + 1] = p[k + 1];
    t[$ + 1] = t[k + 1];
    k = t[i + 10];
    l = t[i + 16];
    n = i + 14;
    p[X] = p[n];
    t[X] = t[n];
    p[X + 1] = p[n + 1];
    t[X + 1] = t[n + 1];
    n = t[i + 11];
    o = t[i + 17];
    r = p[i + 21];
    s = p[ba] + h * 3;
    p[ha] = p[s];
    t[ha] = t[s];
    p[ha + 1] = p[s + 1];
    t[ha + 1] = t[s + 1];
    s = t[p[na] + h * 3 + 2];
    x = p[ia] + j * 3;
    p[ma] = p[x];
    t[ma] = t[x];
    p[ma + 1] = p[x + 1];
    t[ma + 1] = t[x + 1];
    x = t[p[qa] + j * 3 + 2];
    v = 0;
    e = v < r ? 3 : 6;
    b : do if (e == 3) for (;;) {
      kh(La, s);
      kh(bb, x);
      U(E, Ua, d);
      J(B, q, E);
      p[ra] = p[ja];
      t[ra] = t[ja];
      p[ra + 1] = p[ja + 1];
      t[ra + 1] = t[ja + 1];
      U(H, Ea, m);
      J(D, u, H);
      p[Da] = p[za];
      t[Da] = t[za];
      p[Da + 1] = p[za + 1];
      t[Da + 1] = t[za + 1];
      cm(I, i, y, z, v);
      p[Qa] = p[oa];
      t[Qa] = t[oa];
      p[Qa + 1] = p[oa + 1];
      t[Qa + 1] = t[oa + 1];
      p[Ra] = p[Ma];
      t[Ra] = t[Ma];
      p[Ra + 1] = p[Ma + 1];
      t[Ra + 1] = t[Ma + 1];
      e = t[Ba];
      J(S, G, q);
      J(P, G, u);
      f = f < e ? f : e;
      L = ik((e + .004999999888241291) * .20000000298023224, -.20000000298023224, 0);
      e = R(S, M);
      T = R(P, M);
      F = k + n + l * e * e + o * T * T;
      if (k + n + l * e * e + o * T * T > 0) e = 4; else {
        var Va = 0;
        e = 5;
      }
      e == 4 && (Va = -L / F);
      L = Va;
      N(Z, L, M);
      N(aa, k, Z);
      Se(q, aa);
      s -= l * R(S, Z);
      N(W, n, Z);
      Sb(u, W);
      x += o * R(P, Z);
      v += 1;
      if (v >= r) {
        e = 6;
        break b;
      }
    } while (0);
    i = p[xa] + h * 3;
    p[i] = p[Fa];
    t[i] = t[Fa];
    p[i + 1] = p[Fa + 1];
    t[i + 1] = t[Fa + 1];
    t[p[Pa] + h * 3 + 2] = s;
    h = p[Ga] + j * 3;
    p[h] = p[Za];
    t[h] = t[Za];
    p[h + 1] = p[Za + 1];
    t[h + 1] = t[Za + 1];
    t[p[xb] + j * 3 + 2] = x;
    g += 1;
    if (g >= p[ca]) break a;
  } while (0);
  b = d;
  return f >= -.014999999664723873;
}

ok.X = 1;

function cm(c, d, e, f, g) {
  var i = b;
  b += 30;
  var h, j = i + 2, k = i + 4, l = i + 6, m = i + 8, n = i + 10, o = i + 12, r = i + 14, q = i + 16, s = i + 18, u = i + 20, x = i + 22, v = i + 24, y = i + 26, z = i + 28;
  h = p[d + 21] > 0 ? 2 : 1;
  h == 1 && Q(Tl, 617, dm, em);
  h = p[d + 18];
  h = h == 0 ? 3 : h == 1 ? 4 : h == 2 ? 5 : 6;
  h == 3 ? (Xc(i, e, d + 6), Xc(j, f, d), J(k, j, i), p[c] = p[k], t[c] = t[k], p[c + 1] = p[k + 1], t[c + 1] = t[k + 1], ed(c), q = c + 2, O(m, i, j), N(l, .5, m), p[q] = p[l], t[q] = t[l], p[q + 1] = p[l + 1], t[q + 1] = t[l + 1], J(n, j, i), t[c + 4] = K(n, c) - t[d + 19] - t[d + 20]) : h == 4 ? (U(o, e + 2, d + 4), p[c] = p[o], t[c] = t[o], p[c + 1] = p[o + 1], t[c + 1] = t[o + 1], Xc(r, e, d + 6), Xc(q, f, d + (g << 1)), J(s, q, r), t[c + 4] = K(s, c) - t[d + 19] - t[d + 20], c += 2, p[c] = p[q], t[c] = t[q], p[c + 1] = p[q + 1], t[c + 1] = t[q + 1]) : h == 5 && (U(u, f + 2, d + 4), p[c] = p[u], t[c] = t[u], p[c + 1] = p[u + 1], t[c + 1] = t[u + 1], Xc(x, f, d + 6), Xc(v, e, d + (g << 1)), J(y, v, x), t[c + 4] = K(y, c) - t[d + 19] - t[d + 20], d = c + 2, p[d] = p[v], t[d] = t[v], p[d + 1] = p[v + 1], t[d + 1] = t[v + 1], Xd(z, c), p[c] = p[z], t[c] = t[z], p[c + 1] = p[z + 1], t[c + 1] = t[z + 1]);
  b = i;
}

cm.X = 1;

function wk(c, d, e) {
  var f = b;
  b += 43;
  var g, i, h, j, k, l, m = f + 2, n, o, r, q, s, u = f + 4, x, v = f + 6, y, z, B = f + 8, E = f + 12, D = f + 16, H = f + 18, I = f + 20, M = f + 22, G = f + 24, S = f + 29, P = f + 31, L = f + 33, T = f + 35, F, Z, aa, W = f + 37, ca = f + 39, la = f + 41;
  h = i = 0;
  var $ = c + 12;
  g = h < p[$] ? 1 : 13;
  a : do if (g == 1) for (var X = c + 9, ba = f, ha = m, na = c + 6, ia = u, ma = c + 6, qa = c + 6, xa = v, Fa = c + 6, Pa = c + 6, Ga = u, Za = c + 6, xb = c + 6, La = v, bb = c + 6, Ua = B + 2, ra = E + 2, ja = B + 2, Ea = B, Da = D, za = E + 2, Qa = E, oa = I, Ra = S, Ma = G, Ba = P, Va = G + 2, Ha = G + 4; ; ) {
    j = p[X] + h * 22;
    k = p[j + 8];
    l = p[j + 9];
    n = j + 12;
    p[ba] = p[n];
    t[ba] = t[n];
    p[ba + 1] = p[n + 1];
    t[ba + 1] = t[n + 1];
    n = j + 14;
    p[ha] = p[n];
    t[ha] = t[n];
    p[ha + 1] = p[n + 1];
    t[ha + 1] = t[n + 1];
    n = p[j + 21];
    r = o = 0;
    g = k == d ? 4 : 3;
    g == 3 && (g = k == e ? 4 : 5);
    g == 4 && (o = t[j + 10], r = t[j + 16]);
    q = t[j + 11];
    s = t[j + 17];
    g = l == d ? 7 : 6;
    g == 6 && (g = l == e ? 7 : 8);
    g == 7 && (q = t[j + 11], s = t[j + 17]);
    x = p[na] + k * 3;
    p[ia] = p[x];
    t[ia] = t[x];
    p[ia + 1] = p[x + 1];
    t[ia + 1] = t[x + 1];
    x = t[p[ma] + k * 3 + 2];
    y = p[qa] + l * 3;
    p[xa] = p[y];
    t[xa] = t[y];
    p[xa + 1] = p[y + 1];
    t[xa + 1] = t[y + 1];
    y = t[p[Fa] + l * 3 + 2];
    z = 0;
    g = z < n ? 9 : 12;
    b : do if (g == 9) for (;;) {
      kh(Ua, x);
      kh(ra, y);
      U(H, ja, f);
      J(D, u, H);
      p[Ea] = p[Da];
      t[Ea] = t[Da];
      p[Ea + 1] = p[Da + 1];
      t[Ea + 1] = t[Da + 1];
      U(M, za, m);
      J(I, v, M);
      p[Qa] = p[oa];
      t[Qa] = t[oa];
      p[Qa + 1] = p[oa + 1];
      t[Qa + 1] = t[oa + 1];
      cm(G, j, B, E, z);
      p[Ra] = p[Ma];
      t[Ra] = t[Ma];
      p[Ra + 1] = p[Ma + 1];
      t[Ra + 1] = t[Ma + 1];
      p[Ba] = p[Va];
      t[Ba] = t[Va];
      p[Ba + 1] = p[Va + 1];
      t[Ba + 1] = t[Va + 1];
      g = t[Ha];
      J(L, P, u);
      J(T, P, v);
      i = i < g ? i : g;
      F = ik((g + .004999999888241291) * .75, -.20000000298023224, 0);
      g = R(L, S);
      Z = R(T, S);
      aa = o + q + r * g * g + s * Z * Z;
      if (o + q + r * g * g + s * Z * Z > 0) g = 10; else {
        var Nb = 0;
        g = 11;
      }
      g == 10 && (Nb = -F / aa);
      F = Nb;
      N(W, F, S);
      N(ca, o, W);
      Se(u, ca);
      x -= r * R(L, W);
      N(la, q, W);
      Sb(v, la);
      y += s * R(T, W);
      z += 1;
      if (z >= n) {
        g = 12;
        break b;
      }
    } while (0);
    j = p[Pa] + k * 3;
    p[j] = p[Ga];
    t[j] = t[Ga];
    p[j + 1] = p[Ga + 1];
    t[j + 1] = t[Ga + 1];
    t[p[Za] + k * 3 + 2] = x;
    k = p[xb] + l * 3;
    p[k] = p[La];
    t[k] = t[La];
    p[k + 1] = p[La + 1];
    t[k + 1] = t[La + 1];
    t[p[bb] + l * 3 + 2] = y;
    h += 1;
    if (h >= p[$]) break a;
  } while (0);
  b = f;
  return i >= -.007499999832361937;
}

wk.X = 1;

function fm(c, d, e) {
  ol(c, d, 0, e, 0);
  p[c] = gm + 2;
  d = ll(p[c + 12]) == 1 ? 2 : 1;
  d == 1 && Q(hm, 41, im, jm);
  d = ll(p[c + 13]) == 0 ? 4 : 3;
  d == 3 && Q(hm, 42, im, tl);
}

function km(c, d) {
  lm(c, d);
  p[c] = mm + 2;
  var e = c + 21, f = d + 5;
  p[e] = p[f];
  t[e] = t[f];
  p[e + 1] = p[f + 1];
  t[e + 1] = t[f + 1];
  e = c + 23;
  f = d + 7;
  p[e] = p[f];
  t[e] = t[f];
  p[e + 1] = p[f + 1];
  t[e + 1] = t[f + 1];
  t[c + 27] = t[d + 9];
  t[c + 18] = t[d + 10];
  t[c + 19] = t[d + 11];
  t[c + 26] = 0;
  t[c + 25] = 0;
  t[c + 20] = 0;
}

km.X = 1;

function nm(c, d, e) {
  ol(c, d, 0, e, 0);
  p[c] = om + 2;
  d = ll(p[c + 12]) == 1 ? 2 : 1;
  d == 1 && Q(pm, 41, qm, jm);
  d = ll(p[c + 13]) == 2 ? 4 : 3;
  d == 3 && Q(pm, 42, qm, zl);
}

function rm(c, d, e) {
  ol(c, d, 0, e, 0);
  p[c] = sm + 2;
  d = ll(p[c + 12]) == 2 ? 2 : 1;
  d == 1 && Q(tm, 41, um, vm);
  d = ll(p[c + 13]) == 0 ? 4 : 3;
  d == 3 && Q(tm, 42, um, tl);
}

function wm(c, d, e) {
  ol(c, d, 0, e, 0);
  p[c] = xm + 2;
  d = ll(p[c + 12]) == 2 ? 2 : 1;
  d == 1 && Q(ym, 44, zm, vm);
  d = ll(p[c + 13]) == 2 ? 4 : 3;
  d == 3 && Q(ym, 45, zm, zl);
}

function Am(c, d, e) {
  Xc(c, d + 3, e);
}

function Bm(c) {
  var d, e;
  d = p[p[c + 12] + 2];
  e = p[p[c + 13] + 2];
  V(Cm, C(1, "i32", w));
  V(Dm, C([ d ], "i32", w));
  V(Em, C([ e ], "i32", w));
  V(Fm, C([ p[c + 16] & 1 ], "i32", w));
  V(Gm, C([ t[c + 21], t[c + 22] ], "double", w));
  V(Hm, C([ t[c + 23], t[c + 24] ], "double", w));
  V(Im, C([ t[c + 27] ], "double", w));
  V(Jm, C([ t[c + 18] ], "double", w));
  V(Km, C([ t[c + 19] ], "double", w));
  V(Lm, C([ p[c + 14] ], "i32", w));
}

Bm.X = 1;

function Mm(c, d) {
  var e = b;
  b += 32;
  var f, g, i = e + 2, h, j = e + 4, k, l = e + 6, m, n = e + 8, o = e + 10, r = e + 12, q = e + 14, s = e + 16, u = e + 18;
  f = e + 20;
  var x = e + 22, v = e + 24, y, z = e + 26, B = e + 28, E = e + 30;
  p[c + 28] = p[p[c + 12] + 2];
  p[c + 29] = p[p[c + 13] + 2];
  h = c + 36;
  m = p[c + 12] + 7;
  p[h] = p[m];
  t[h] = t[m];
  p[h + 1] = p[m + 1];
  t[h + 1] = t[m + 1];
  h = c + 38;
  m = p[c + 13] + 7;
  p[h] = p[m];
  t[h] = t[m];
  p[h + 1] = p[m + 1];
  t[h + 1] = t[m + 1];
  t[c + 40] = t[p[c + 12] + 30];
  t[c + 41] = t[p[c + 13] + 30];
  t[c + 42] = t[p[c + 12] + 32];
  t[c + 43] = t[p[c + 13] + 32];
  h = p[d + 6] + p[c + 28] * 3;
  p[e] = p[h];
  t[e] = t[h];
  p[e + 1] = p[h + 1];
  t[e + 1] = t[h + 1];
  g = t[p[d + 6] + p[c + 28] * 3 + 2];
  h = p[d + 7] + p[c + 28] * 3;
  p[i] = p[h];
  t[i] = t[h];
  p[i + 1] = p[h + 1];
  t[i + 1] = t[h + 1];
  h = t[p[d + 7] + p[c + 28] * 3 + 2];
  m = p[d + 6] + p[c + 29] * 3;
  p[j] = p[m];
  t[j] = t[m];
  p[j + 1] = p[m + 1];
  t[j + 1] = t[m + 1];
  k = t[p[d + 6] + p[c + 29] * 3 + 2];
  m = p[d + 7] + p[c + 29] * 3;
  p[l] = p[m];
  t[l] = t[m];
  p[l + 1] = p[m + 1];
  t[l + 1] = t[m + 1];
  m = t[p[d + 7] + p[c + 29] * 3 + 2];
  Nm(n, g);
  Nm(o, k);
  g = c + 32;
  J(q, c + 21, c + 36);
  U(r, n, q);
  p[g] = p[r];
  t[g] = t[r];
  p[g + 1] = p[r + 1];
  t[g + 1] = t[r + 1];
  n = c + 34;
  J(u, c + 23, c + 38);
  U(s, o, u);
  p[n] = p[s];
  t[n] = t[s];
  p[n + 1] = p[s + 1];
  t[n + 1] = t[s + 1];
  o = c + 30;
  O(v, j, c + 34);
  J(x, v, e);
  J(f, x, c + 32);
  p[o] = p[f];
  t[o] = t[f];
  p[o + 1] = p[f + 1];
  t[o + 1] = t[f + 1];
  x = fd(c + 30);
  f = x > .004999999888241291 ? 1 : 2;
  f == 1 ? ci(c + 30, 1 / x) : f == 2 && sc(c + 30, 0, 0);
  f = R(c + 32, c + 30);
  v = R(c + 34, c + 30);
  j = t[c + 40] + t[c + 42] * f * f + t[c + 41] + t[c + 43] * v * v;
  t[c + 40] + t[c + 42] * f * f + t[c + 41] + t[c + 43] * v * v != 0 ? f = 4 : (y = 0, f = 5);
  f == 4 && (y = 1 / j);
  t[c + 44] = y;
  f = t[c + 18] > 0 ? 6 : 11;
  if (f == 6) {
    y = x - t[c + 27];
    x = t[c + 18] * 6.2831854820251465;
    f = t[c + 44] * 2 * t[c + 19] * x;
    x *= t[c + 44] * x;
    v = t[d];
    t[c + 25] = v * (f + v * x);
    if (t[c + 25] != 0) f = 7; else {
      var D = 0;
      f = 8;
    }
    f == 7 && (D = 1 / t[c + 25]);
    t[c + 25] = D;
    t[c + 20] = y * v * x * t[c + 25];
    D = j + t[c + 25];
    if (D != 0) f = 9; else {
      var H = 0;
      f = 10;
    }
    f == 9 && (H = 1 / D);
    t[c + 44] = H;
  } else f == 11 && (t[c + 25] = 0, t[c + 20] = 0);
  f = p[d + 5] & 1 ? 13 : 14;
  f == 13 ? (t[c + 26] *= t[d + 2], N(z, t[c + 26], c + 30), N(B, t[c + 40], z), Se(i, B), h -= t[c + 42] * R(c + 32, z), N(E, t[c + 41], z), Sb(l, E), m += t[c + 43] * R(c + 34, z)) : f == 14 && (t[c + 26] = 0);
  z = p[d + 7] + p[c + 28] * 3;
  p[z] = p[i];
  t[z] = t[i];
  p[z + 1] = p[i + 1];
  t[z + 1] = t[i + 1];
  t[p[d + 7] + p[c + 28] * 3 + 2] = h;
  i = p[d + 7] + p[c + 29] * 3;
  p[i] = p[l];
  t[i] = t[l];
  p[i + 1] = p[l + 1];
  t[i + 1] = t[l + 1];
  t[p[d + 7] + p[c + 29] * 3 + 2] = m;
  b = e;
}

Mm.X = 1;

function Om(c, d) {
  var e = b;
  b += 20;
  var f, g = e + 2, i, h = e + 4, j = e + 6, k = e + 8, l = e + 10, m = e + 12, n = e + 14, o = e + 16, r = e + 18;
  f = p[d + 7] + p[c + 28] * 3;
  p[e] = p[f];
  t[e] = t[f];
  p[e + 1] = p[f + 1];
  t[e + 1] = t[f + 1];
  f = t[p[d + 7] + p[c + 28] * 3 + 2];
  i = p[d + 7] + p[c + 29] * 3;
  p[g] = p[i];
  t[g] = t[i];
  p[g + 1] = p[i + 1];
  t[g + 1] = t[i + 1];
  i = t[p[d + 7] + p[c + 29] * 3 + 2];
  Ke(j, f, c + 32);
  O(h, e, j);
  Ke(l, i, c + 34);
  O(k, g, l);
  j = c + 30;
  J(m, k, h);
  h = -t[c + 44] * (K(j, m) + t[c + 20] + t[c + 25] * t[c + 26]);
  t[c + 26] += h;
  N(n, h, c + 30);
  N(o, t[c + 40], n);
  Se(e, o);
  f -= t[c + 42] * R(c + 32, n);
  N(r, t[c + 41], n);
  Sb(g, r);
  i += t[c + 43] * R(c + 34, n);
  n = p[d + 7] + p[c + 28] * 3;
  p[n] = p[e];
  t[n] = t[e];
  p[n + 1] = p[e + 1];
  t[n + 1] = t[e + 1];
  t[p[d + 7] + p[c + 28] * 3 + 2] = f;
  f = p[d + 7] + p[c + 29] * 3;
  p[f] = p[g];
  t[f] = t[g];
  p[f + 1] = p[g + 1];
  t[f + 1] = t[g + 1];
  t[p[d + 7] + p[c + 29] * 3 + 2] = i;
  b = e;
}

Om.X = 1;

function Pm(c, d) {
  var e = b;
  b += 28;
  var f, g, i = e + 2, h = e + 4, j = e + 6, k = e + 8, l = e + 10, m = e + 12, n = e + 14, o = e + 16, r = e + 18, q = e + 20, s = e + 22, u = e + 24, x = e + 26;
  f = t[c + 18] > 0 ? 1 : 2;
  f == 1 ? g = 1 : f == 2 && (f = p[d + 6] + p[c + 28] * 3, p[e] = p[f], t[e] = t[f], p[e + 1] = p[f + 1], t[e + 1] = t[f + 1], f = t[p[d + 6] + p[c + 28] * 3 + 2], g = p[d + 6] + p[c + 29] * 3, p[i] = p[g], t[i] = t[g], p[i + 1] = p[g + 1], t[i + 1] = t[g + 1], g = t[p[d + 6] + p[c + 29] * 3 + 2], Nm(h, f), Nm(j, g), J(l, c + 21, c + 36), U(k, h, l), J(n, c + 23, c + 38), U(m, j, n), O(q, i, m), J(r, q, e), J(o, r, k), h = ed(o), h -= t[c + 27], h = ik(h, -.20000000298023224, .20000000298023224), j = -t[c + 44] * h, N(s, j, o), N(u, t[c + 40], s), Se(e, u), f -= t[c + 42] * R(k, s), N(x, t[c + 41], s), Sb(i, x), g += t[c + 43] * R(m, s), k = p[d + 6] + p[c + 28] * 3, p[k] = p[e], t[k] = t[e], p[k + 1] = p[e + 1], t[k + 1] = t[e + 1], t[p[d + 6] + p[c + 28] * 3 + 2] = f, k = p[d + 6] + p[c + 29] * 3, p[k] = p[i], t[k] = t[i], p[k + 1] = p[i + 1], t[k + 1] = t[i + 1], t[p[d + 6] + p[c + 29] * 3 + 2] = g, g = se(h) < .004999999888241291);
  b = e;
  return g;
}

Pm.X = 1;

function Nm(c, d) {
  var e = Qh(d);
  t[c] = e;
  e = Rh(d);
  t[c + 1] = e;
}

function Qm(c, d) {
  lm(c, d);
  p[c] = Rm + 2;
  var e = c + 18, f = d + 5;
  p[e] = p[f];
  t[e] = t[f];
  p[e + 1] = p[f + 1];
  t[e + 1] = t[f + 1];
  e = c + 20;
  f = d + 7;
  p[e] = p[f];
  t[e] = t[f];
  p[e + 1] = p[f + 1];
  t[e + 1] = t[f + 1];
  hc(c + 22);
  t[c + 24] = 0;
  t[c + 25] = t[d + 9];
  t[c + 26] = t[d + 10];
}

Qm.X = 1;

function Sm(c) {
  var d, e;
  d = p[p[c + 12] + 2];
  e = p[p[c + 13] + 2];
  V(Tm, C(1, "i32", w));
  V(Dm, C([ d ], "i32", w));
  V(Em, C([ e ], "i32", w));
  V(Fm, C([ p[c + 16] & 1 ], "i32", w));
  V(Gm, C([ t[c + 18], t[c + 19] ], "double", w));
  V(Hm, C([ t[c + 20], t[c + 21] ], "double", w));
  V(Um, C([ t[c + 25] ], "double", w));
  V(Vm, C([ t[c + 26] ], "double", w));
  V(Lm, C([ p[c + 14] ], "i32", w));
}

Sm.X = 1;

function Wm(c, d) {
  var e = b;
  b += 30;
  var f, g, i, h, j = e + 2, k, l = e + 4, m = e + 6, n = e + 8, o = e + 10, r = e + 12, q = e + 14;
  f = e + 16;
  var s = e + 20, u = e + 24, x = e + 26, v = e + 28;
  p[c + 27] = p[p[c + 12] + 2];
  p[c + 28] = p[p[c + 13] + 2];
  i = c + 33;
  k = p[c + 12] + 7;
  p[i] = p[k];
  t[i] = t[k];
  p[i + 1] = p[k + 1];
  t[i + 1] = t[k + 1];
  i = c + 35;
  k = p[c + 13] + 7;
  p[i] = p[k];
  t[i] = t[k];
  p[i + 1] = p[k + 1];
  t[i + 1] = t[k + 1];
  t[c + 37] = t[p[c + 12] + 30];
  t[c + 38] = t[p[c + 13] + 30];
  t[c + 39] = t[p[c + 12] + 32];
  t[c + 40] = t[p[c + 13] + 32];
  g = t[p[d + 6] + p[c + 27] * 3 + 2];
  i = p[d + 7] + p[c + 27] * 3;
  p[e] = p[i];
  t[e] = t[i];
  p[e + 1] = p[i + 1];
  t[e + 1] = t[i + 1];
  i = t[p[d + 7] + p[c + 27] * 3 + 2];
  h = t[p[d + 6] + p[c + 28] * 3 + 2];
  k = p[d + 7] + p[c + 28] * 3;
  p[j] = p[k];
  t[j] = t[k];
  p[j + 1] = p[k + 1];
  t[j + 1] = t[k + 1];
  k = t[p[d + 7] + p[c + 28] * 3 + 2];
  Nm(l, g);
  Nm(m, h);
  g = c + 29;
  J(o, c + 18, c + 33);
  U(n, l, o);
  p[g] = p[n];
  t[g] = t[n];
  p[g + 1] = p[n + 1];
  t[g + 1] = t[n + 1];
  l = c + 31;
  J(q, c + 20, c + 35);
  U(r, m, q);
  p[l] = p[r];
  t[l] = t[r];
  p[l + 1] = p[r + 1];
  t[l + 1] = t[r + 1];
  m = t[c + 37];
  r = t[c + 38];
  q = t[c + 39];
  l = t[c + 40];
  t[f] = m + r + q * t[c + 30] * t[c + 30] + l * t[c + 32] * t[c + 32];
  t[f + 1] = -q * t[c + 29] * t[c + 30] - l * t[c + 31] * t[c + 32];
  t[f + 2] = t[f + 1];
  t[f + 3] = m + r + q * t[c + 29] * t[c + 29] + l * t[c + 31] * t[c + 31];
  n = c + 41;
  Yl(s, f);
  p[n] = p[s];
  t[n] = t[s];
  p[n + 1] = p[s + 1];
  t[n + 1] = t[s + 1];
  p[n + 2] = p[s + 2];
  t[n + 2] = t[s + 2];
  p[n + 3] = p[s + 3];
  t[n + 3] = t[s + 3];
  t[c + 45] = q + l;
  f = t[c + 45] > 0 ? 1 : 2;
  f == 1 && (t[c + 45] = 1 / t[c + 45]);
  s = c + 22;
  f = p[d + 5] & 1 ? 3 : 4;
  f == 3 ? (ci(s, t[d + 2]), t[c + 24] *= t[d + 2], tc(u, t[c + 22], t[c + 23]), N(x, m, u), Se(e, x), i -= q * (R(c + 29, u) + t[c + 24]), N(v, r, u), Sb(j, v), k += l * (R(c + 31, u) + t[c + 24])) : f == 4 && (hc(s), t[c + 24] = 0);
  u = p[d + 7] + p[c + 27] * 3;
  p[u] = p[e];
  t[u] = t[e];
  p[u + 1] = p[e + 1];
  t[u + 1] = t[e + 1];
  t[p[d + 7] + p[c + 27] * 3 + 2] = i;
  u = p[d + 7] + p[c + 28] * 3;
  p[u] = p[j];
  t[u] = t[j];
  p[u + 1] = p[j + 1];
  t[u + 1] = t[j + 1];
  t[p[d + 7] + p[c + 28] * 3 + 2] = k;
  b = e;
}

Wm.X = 1;

function Xm(c, d) {
  var e = b;
  b += 26;
  var f, g = e + 2, i, h, j, k, l, m, n, o, r, q = e + 4, s = e + 6, u = e + 8, x = e + 10, v = e + 12, y = e + 14, z = e + 16, B = e + 18, E = e + 20, D = e + 22, H = e + 24;
  f = p[d + 7] + p[c + 27] * 3;
  p[e] = p[f];
  t[e] = t[f];
  p[e + 1] = p[f + 1];
  t[e + 1] = t[f + 1];
  f = t[p[d + 7] + p[c + 27] * 3 + 2];
  i = p[d + 7] + p[c + 28] * 3;
  p[g] = p[i];
  t[g] = t[i];
  p[g + 1] = p[i + 1];
  t[g + 1] = t[i + 1];
  i = t[p[d + 7] + p[c + 28] * 3 + 2];
  h = t[c + 37];
  j = t[c + 38];
  k = t[c + 39];
  l = t[c + 40];
  m = t[d];
  n = -t[c + 45] * (i - f);
  o = t[c + 24];
  r = m * t[c + 26];
  t[c + 24] = ik(t[c + 24] + n, -r, r);
  n = t[c + 24] - o;
  f -= k * n;
  i += l * n;
  Ke(x, i, c + 31);
  O(u, g, x);
  J(s, u, e);
  Ke(v, f, c + 29);
  J(q, s, v);
  Zl(z, c + 41, q);
  Xd(y, z);
  q = c + 22;
  p[B] = p[q];
  t[B] = t[q];
  p[B + 1] = p[q + 1];
  t[B + 1] = t[q + 1];
  Sb(c + 22, y);
  q = m * t[c + 25];
  if ((De(c + 22) > q * q ? 1 : 2) == 1) ed(c + 22), ci(c + 22, q);
  J(E, c + 22, B);
  p[y] = p[E];
  t[y] = t[E];
  p[y + 1] = p[E + 1];
  t[y + 1] = t[E + 1];
  N(D, h, y);
  Se(e, D);
  f -= k * R(c + 29, y);
  N(H, j, y);
  Sb(g, H);
  i += l * R(c + 31, y);
  y = p[d + 7] + p[c + 27] * 3;
  p[y] = p[e];
  t[y] = t[e];
  p[y + 1] = p[e + 1];
  t[y + 1] = t[e + 1];
  t[p[d + 7] + p[c + 27] * 3 + 2] = f;
  f = p[d + 7] + p[c + 28] * 3;
  p[f] = p[g];
  t[f] = t[g];
  p[f + 1] = p[g + 1];
  t[f + 1] = t[g + 1];
  t[p[d + 7] + p[c + 28] * 3 + 2] = i;
  b = e;
}

Xm.X = 1;

function Ym(c, d) {
  var e = b;
  b += 40;
  var f, g, i, h, j = e + 4, k, l = e + 8, m = e + 10, n = e + 12, o = e + 14, r = e + 16, q = e + 18, s = e + 20, u = e + 24, x = e + 28, v = e + 30, y = e + 32, z = e + 34, B = e + 36, E = e + 38;
  lm(c, d);
  p[c] = Zm + 2;
  p[c + 18] = p[d + 5];
  p[c + 19] = p[d + 6];
  p[c + 20] = p[p[c + 18] + 1];
  p[c + 21] = p[p[c + 19] + 1];
  f = p[c + 20] == 1 ? 5 : 3;
  f == 3 && (p[c + 20] == 2 || Q($m, 53, an, bn));
  f = p[c + 21] == 1 ? 8 : 6;
  f == 6 && (p[c + 21] == 2 || Q($m, 54, an, cn));
  p[c + 22] = p[p[c + 18] + 12];
  p[c + 12] = p[p[c + 18] + 13];
  var D = p[c + 12] + 3;
  p[e] = p[D];
  t[e] = t[D];
  p[e + 1] = p[D + 1];
  t[e + 1] = t[D + 1];
  p[e + 2] = p[D + 2];
  t[e + 2] = t[D + 2];
  p[e + 3] = p[D + 3];
  t[e + 3] = t[D + 3];
  h = t[p[c + 12] + 14];
  D = p[c + 22] + 3;
  p[j] = p[D];
  t[j] = t[D];
  p[j + 1] = p[D + 1];
  t[j + 1] = t[D + 1];
  p[j + 2] = p[D + 2];
  t[j + 2] = t[D + 2];
  p[j + 3] = p[D + 3];
  t[j + 3] = t[D + 3];
  k = t[p[c + 22] + 14];
  D = p[d + 5];
  f = p[c + 20] == 1 ? 11 : 13;
  f == 11 ? (g = c + 28, j = D + 18, p[g] = p[j], t[g] = t[j], p[g + 1] = p[j + 1], t[g + 1] = t[j + 1], g = c + 24, j = D + 20, p[g] = p[j], t[g] = t[j], p[g + 1] = p[j + 1], t[g + 1] = t[j + 1], t[c + 36] = t[D + 30], hc(c + 32), g = h - k - t[c + 36]) : f == 13 && (g = c + 28, h = D + 18, p[g] = p[h], t[g] = t[h], p[g + 1] = p[h + 1], t[g + 1] = t[h + 1], g = c + 24, h = D + 20, p[g] = p[h], t[g] = t[h], p[g + 1] = p[h + 1], t[g + 1] = t[h + 1], t[c + 36] = t[D + 26], g = c + 32, D += 22, p[g] = p[D], t[g] = t[D], p[g + 1] = p[D + 1], t[g + 1] = t[D + 1], g = c + 28, p[l] = p[g], t[l] = t[g], p[l + 1] = p[g + 1], t[l + 1] = t[g + 1], g = j + 2, U(o, e + 2, c + 24), J(r, e, j), O(n, o, r), Wd(m, g, n), J(q, m, l), g = K(q, c + 32));
  p[c + 23] = p[p[c + 19] + 12];
  p[c + 13] = p[p[c + 19] + 13];
  j = p[c + 13] + 3;
  p[s] = p[j];
  t[s] = t[j];
  p[s + 1] = p[j + 1];
  t[s + 1] = t[j + 1];
  p[s + 2] = p[j + 2];
  t[s + 2] = t[j + 2];
  p[s + 3] = p[j + 3];
  t[s + 3] = t[j + 3];
  l = t[p[c + 13] + 14];
  j = p[c + 23] + 3;
  p[u] = p[j];
  t[u] = t[j];
  p[u + 1] = p[j + 1];
  t[u + 1] = t[j + 1];
  p[u + 2] = p[j + 2];
  t[u + 2] = t[j + 2];
  p[u + 3] = p[j + 3];
  t[u + 3] = t[j + 3];
  m = t[p[c + 23] + 14];
  j = p[d + 6];
  f = p[c + 21] == 1 ? 17 : 18;
  f == 17 ? (s = c + 30, u = j + 18, p[s] = p[u], t[s] = t[u], p[s + 1] = p[u + 1], t[s + 1] = t[u + 1], s = c + 26, u = j + 20, p[s] = p[u], t[s] = t[u], p[s + 1] = p[u + 1], t[s + 1] = t[u + 1], t[c + 37] = t[j + 30], hc(c + 34), i = l - m - t[c + 37]) : f == 18 && (i = c + 30, l = j + 18, p[i] = p[l], t[i] = t[l], p[i + 1] = p[l + 1], t[i + 1] = t[l + 1], i = c + 26, l = j + 20, p[i] = p[l], t[i] = t[l], p[i + 1] = p[l + 1], t[i + 1] = t[l + 1], t[c + 37] = t[j + 26], i = c + 34, j += 22, p[i] = p[j], t[i] = t[j], p[i + 1] = p[j + 1], t[i + 1] = t[j + 1], i = c + 30, p[x] = p[i], t[x] = t[i], p[x + 1] = p[i + 1], t[x + 1] = t[i + 1], i = u + 2, U(z, s + 2, c + 26), J(B, s, u), O(y, z, B), Wd(v, i, y), J(E, v, x), i = K(E, c + 34));
  t[c + 39] = t[d + 7];
  t[c + 38] = g + t[c + 39] * i;
  t[c + 40] = 0;
  b = e;
}

Ym.X = 1;

function dn(c, d) {
  var e = b;
  b += 54;
  var f, g = e + 2, i, h = e + 4, j, k = e + 6, l = e + 8, m, n = e + 10, o = e + 12, r, q = e + 14, s = e + 16, u = e + 18, x = e + 20, v = e + 22, y = e + 24, z = e + 26, B = e + 28, E = e + 30, D = e + 32, H = e + 34, I = e + 36, M = e + 38, G = e + 40, S = e + 42, P = e + 44, L = e + 46, T = e + 48, F = e + 50, Z = e + 52;
  p[c + 41] = p[p[c + 12] + 2];
  p[c + 42] = p[p[c + 13] + 2];
  p[c + 43] = p[p[c + 22] + 2];
  p[c + 44] = p[p[c + 23] + 2];
  i = c + 45;
  f = p[c + 12] + 7;
  p[i] = p[f];
  t[i] = t[f];
  p[i + 1] = p[f + 1];
  t[i + 1] = t[f + 1];
  i = c + 47;
  f = p[c + 13] + 7;
  p[i] = p[f];
  t[i] = t[f];
  p[i + 1] = p[f + 1];
  t[i + 1] = t[f + 1];
  i = c + 49;
  f = p[c + 22] + 7;
  p[i] = p[f];
  t[i] = t[f];
  p[i + 1] = p[f + 1];
  t[i + 1] = t[f + 1];
  i = c + 51;
  f = p[c + 23] + 7;
  p[i] = p[f];
  t[i] = t[f];
  p[i + 1] = p[f + 1];
  t[i + 1] = t[f + 1];
  t[c + 53] = t[p[c + 12] + 30];
  t[c + 54] = t[p[c + 13] + 30];
  t[c + 55] = t[p[c + 22] + 30];
  t[c + 56] = t[p[c + 23] + 30];
  t[c + 57] = t[p[c + 12] + 32];
  t[c + 58] = t[p[c + 13] + 32];
  t[c + 59] = t[p[c + 22] + 32];
  t[c + 60] = t[p[c + 23] + 32];
  i = p[d + 6] + p[c + 41] * 3;
  p[e] = p[i];
  t[e] = t[i];
  p[e + 1] = p[i + 1];
  t[e + 1] = t[i + 1];
  f = t[p[d + 6] + p[c + 41] * 3 + 2];
  i = p[d + 7] + p[c + 41] * 3;
  p[g] = p[i];
  t[g] = t[i];
  p[g + 1] = p[i + 1];
  t[g + 1] = t[i + 1];
  i = t[p[d + 7] + p[c + 41] * 3 + 2];
  j = p[d + 6] + p[c + 42] * 3;
  p[h] = p[j];
  t[h] = t[j];
  p[h + 1] = p[j + 1];
  t[h + 1] = t[j + 1];
  j = t[p[d + 6] + p[c + 42] * 3 + 2];
  h = p[d + 7] + p[c + 42] * 3;
  p[k] = p[h];
  t[k] = t[h];
  p[k + 1] = p[h + 1];
  t[k + 1] = t[h + 1];
  h = t[p[d + 7] + p[c + 42] * 3 + 2];
  m = p[d + 6] + p[c + 43] * 3;
  p[l] = p[m];
  t[l] = t[m];
  p[l + 1] = p[m + 1];
  t[l + 1] = t[m + 1];
  m = t[p[d + 6] + p[c + 43] * 3 + 2];
  l = p[d + 7] + p[c + 43] * 3;
  p[n] = p[l];
  t[n] = t[l];
  p[n + 1] = p[l + 1];
  t[n + 1] = t[l + 1];
  l = t[p[d + 7] + p[c + 43] * 3 + 2];
  r = p[d + 6] + p[c + 44] * 3;
  p[o] = p[r];
  t[o] = t[r];
  p[o + 1] = p[r + 1];
  t[o + 1] = t[r + 1];
  r = t[p[d + 6] + p[c + 44] * 3 + 2];
  o = p[d + 7] + p[c + 44] * 3;
  p[q] = p[o];
  t[q] = t[o];
  p[q + 1] = p[o + 1];
  t[q + 1] = t[o + 1];
  o = t[p[d + 7] + p[c + 44] * 3 + 2];
  Nm(s, f);
  Nm(u, j);
  Nm(x, m);
  Nm(v, r);
  t[c + 69] = 0;
  f = p[c + 20] == 1 ? 1 : 2;
  f == 1 ? (hc(c + 61), t[c + 65] = 1, t[c + 67] = 1, t[c + 69] += t[c + 57] + t[c + 59]) : f == 2 && (U(y, x, c + 32), J(B, c + 28, c + 49), U(z, x, B), J(D, c + 24, c + 45), U(E, s, D), s = c + 61, p[s] = p[y], t[s] = t[y], p[s + 1] = p[y + 1], t[s + 1] = t[y + 1], t[c + 67] = R(z, y), t[c + 65] = R(E, y), t[c + 69] += t[c + 55] + t[c + 53] + t[c + 59] * t[c + 67] * t[c + 67] + t[c + 57] * t[c + 65] * t[c + 65]);
  f = p[c + 21] == 1 ? 4 : 5;
  f == 4 ? (hc(c + 63), t[c + 66] = t[c + 39], t[c + 68] = t[c + 39], t[c + 69] += t[c + 39] * t[c + 39] * (t[c + 58] + t[c + 60])) : f == 5 && (U(H, v, c + 34), J(M, c + 30, c + 51), U(I, v, M), J(S, c + 26, c + 47), U(G, u, S), u = c + 63, N(P, t[c + 39], H), p[u] = p[P], t[u] = t[P], p[u + 1] = p[P + 1], t[u + 1] = t[P + 1], t[c + 68] = t[c + 39] * R(I, H), t[c + 66] = t[c + 39] * R(G, H), t[c + 69] += t[c + 39] * t[c + 39] * (t[c + 56] + t[c + 54]) + t[c + 60] * t[c + 68] * t[c + 68] + t[c + 58] * t[c + 66] * t[c + 66]);
  if (t[c + 69] > 0) f = 7; else {
    var aa = 0;
    f = 8;
  }
  f == 7 && (aa = 1 / t[c + 69]);
  t[c + 69] = aa;
  f = p[d + 5] & 1 ? 9 : 10;
  f == 9 ? (N(L, t[c + 53] * t[c + 40], c + 61), Sb(g, L), i += t[c + 57] * t[c + 40] * t[c + 65], N(T, t[c + 54] * t[c + 40], c + 63), Sb(k, T), h += t[c + 58] * t[c + 40] * t[c + 66], N(F, t[c + 55] * t[c + 40], c + 61), Se(n, F), l -= t[c + 59] * t[c + 40] * t[c + 67], N(Z, t[c + 56] * t[c + 40], c + 63), Se(q, Z), o -= t[c + 60] * t[c + 40] * t[c + 68]) : f == 10 && (t[c + 40] = 0);
  H = p[d + 7] + p[c + 41] * 3;
  p[H] = p[g];
  t[H] = t[g];
  p[H + 1] = p[g + 1];
  t[H + 1] = t[g + 1];
  t[p[d + 7] + p[c + 41] * 3 + 2] = i;
  g = p[d + 7] + p[c + 42] * 3;
  p[g] = p[k];
  t[g] = t[k];
  p[g + 1] = p[k + 1];
  t[g + 1] = t[k + 1];
  t[p[d + 7] + p[c + 42] * 3 + 2] = h;
  k = p[d + 7] + p[c + 43] * 3;
  p[k] = p[n];
  t[k] = t[n];
  p[k + 1] = p[n + 1];
  t[k + 1] = t[n + 1];
  t[p[d + 7] + p[c + 43] * 3 + 2] = l;
  n = p[d + 7] + p[c + 44] * 3;
  p[n] = p[q];
  t[n] = t[q];
  p[n + 1] = p[q + 1];
  t[n + 1] = t[q + 1];
  t[p[d + 7] + p[c + 44] * 3 + 2] = o;
  b = e;
}

dn.X = 1;

function en(c, d) {
  var e = b;
  b += 20;
  var f, g = e + 2, i, h = e + 4, j, k = e + 6, l, m, n = e + 8;
  m = e + 10;
  var o = e + 12, r = e + 14, q = e + 16, s = e + 18;
  f = p[d + 7] + p[c + 41] * 3;
  p[e] = p[f];
  t[e] = t[f];
  p[e + 1] = p[f + 1];
  t[e + 1] = t[f + 1];
  f = t[p[d + 7] + p[c + 41] * 3 + 2];
  i = p[d + 7] + p[c + 42] * 3;
  p[g] = p[i];
  t[g] = t[i];
  p[g + 1] = p[i + 1];
  t[g + 1] = t[i + 1];
  i = t[p[d + 7] + p[c + 42] * 3 + 2];
  j = p[d + 7] + p[c + 43] * 3;
  p[h] = p[j];
  t[h] = t[j];
  p[h + 1] = p[j + 1];
  t[h + 1] = t[j + 1];
  j = t[p[d + 7] + p[c + 43] * 3 + 2];
  l = p[d + 7] + p[c + 44] * 3;
  p[k] = p[l];
  t[k] = t[l];
  p[k + 1] = p[l + 1];
  t[k + 1] = t[l + 1];
  l = t[p[d + 7] + p[c + 44] * 3 + 2];
  var u = c + 61;
  J(n, e, h);
  n = K(u, n);
  u = c + 63;
  J(m, g, k);
  m = n + K(u, m);
  m += t[c + 65] * f - t[c + 67] * j + (t[c + 66] * i - t[c + 68] * l);
  m *= -t[c + 69];
  t[c + 40] += m;
  N(o, t[c + 53] * m, c + 61);
  Sb(e, o);
  f += t[c + 57] * m * t[c + 65];
  N(r, t[c + 54] * m, c + 63);
  Sb(g, r);
  i += t[c + 58] * m * t[c + 66];
  N(q, t[c + 55] * m, c + 61);
  Se(h, q);
  j -= t[c + 59] * m * t[c + 67];
  N(s, t[c + 56] * m, c + 63);
  Se(k, s);
  l -= t[c + 60] * m * t[c + 68];
  o = p[d + 7] + p[c + 41] * 3;
  p[o] = p[e];
  t[o] = t[e];
  p[o + 1] = p[e + 1];
  t[o + 1] = t[e + 1];
  t[p[d + 7] + p[c + 41] * 3 + 2] = f;
  f = p[d + 7] + p[c + 42] * 3;
  p[f] = p[g];
  t[f] = t[g];
  p[f + 1] = p[g + 1];
  t[f + 1] = t[g + 1];
  t[p[d + 7] + p[c + 42] * 3 + 2] = i;
  g = p[d + 7] + p[c + 43] * 3;
  p[g] = p[h];
  t[g] = t[h];
  p[g + 1] = p[h + 1];
  t[g + 1] = t[h + 1];
  t[p[d + 7] + p[c + 43] * 3 + 2] = j;
  h = p[d + 7] + p[c + 44] * 3;
  p[h] = p[k];
  t[h] = t[k];
  p[h + 1] = p[k + 1];
  t[h + 1] = t[k + 1];
  t[p[d + 7] + p[c + 44] * 3 + 2] = l;
  b = e;
}

en.X = 1;

function fn(c) {
  var d, e, f, g;
  d = p[p[c + 12] + 2];
  e = p[p[c + 13] + 2];
  f = p[p[c + 18] + 14];
  g = p[p[c + 19] + 14];
  V(gn, C(1, "i32", w));
  V(Dm, C([ d ], "i32", w));
  V(Em, C([ e ], "i32", w));
  V(Fm, C([ p[c + 16] & 1 ], "i32", w));
  V(hn, C([ f ], "i32", w));
  V(jn, C([ g ], "i32", w));
  V(kn, C([ t[c + 39] ], "double", w));
  V(Lm, C([ p[c + 14] ], "i32", w));
}

fn.X = 1;

function ln(c, d) {
  var e = b;
  b += 70;
  var f, g, i = e + 2, h, j = e + 4, k, l = e + 6, m, n = e + 8, o = e + 10, r = e + 12, q = e + 14, s, u, x = e + 16, v = e + 18, y, z, B, E, D, H = e + 20, I = e + 22, M = e + 24, G = e + 26, S = e + 28, P = e + 30, L = e + 32, T = e + 34, F = e + 36, Z = e + 38, aa = e + 40, W = e + 42, ca = e + 44, la = e + 46, $ = e + 48, X = e + 50, ba = e + 52, ha = e + 54, na = e + 56, ia = e + 58, ma = e + 60, qa = e + 62, xa = e + 64, Fa = e + 66, Pa = e + 68;
  g = p[d + 6] + p[c + 41] * 3;
  p[e] = p[g];
  t[e] = t[g];
  p[e + 1] = p[g + 1];
  t[e + 1] = t[g + 1];
  g = t[p[d + 6] + p[c + 41] * 3 + 2];
  h = p[d + 6] + p[c + 42] * 3;
  p[i] = p[h];
  t[i] = t[h];
  p[i + 1] = p[h + 1];
  t[i + 1] = t[h + 1];
  h = t[p[d + 6] + p[c + 42] * 3 + 2];
  k = p[d + 6] + p[c + 43] * 3;
  p[j] = p[k];
  t[j] = t[k];
  p[j + 1] = p[k + 1];
  t[j + 1] = t[k + 1];
  k = t[p[d + 6] + p[c + 43] * 3 + 2];
  m = p[d + 6] + p[c + 44] * 3;
  p[l] = p[m];
  t[l] = t[m];
  p[l + 1] = p[m + 1];
  t[l + 1] = t[m + 1];
  m = t[p[d + 6] + p[c + 44] * 3 + 2];
  Nm(n, g);
  Nm(o, h);
  Nm(r, k);
  Nm(q, m);
  D = 0;
  f = p[c + 20] == 1 ? 1 : 2;
  f == 1 ? (hc(x), B = y = 1, D += t[c + 57] + t[c + 59], s = g - k - t[c + 36]) : f == 2 && (U(H, r, c + 32), J(M, c + 28, c + 49), U(I, r, M), J(S, c + 24, c + 45), U(G, n, S), p[x] = p[H], t[x] = t[H], p[x + 1] = p[H + 1], t[x + 1] = t[H + 1], B = R(I, H), y = R(G, H), D += t[c + 55] + t[c + 53] + t[c + 59] * B * B + t[c + 57] * y * y, J(P, c + 28, c + 49), J(F, e, j), O(T, G, F), Wd(L, r, T), J(Z, L, P), s = K(Z, c + 32));
  f = p[c + 21] == 1 ? 4 : 5;
  f == 4 ? (hc(v), z = t[c + 39], E = t[c + 39], D += t[c + 39] * t[c + 39] * (t[c + 58] + t[c + 60]), u = h - m - t[c + 37]) : f == 5 && (U(aa, q, c + 34), J(ca, c + 30, c + 51), U(W, q, ca), J($, c + 26, c + 47), U(la, o, $), N(X, t[c + 39], aa), p[v] = p[X], t[v] = t[X], p[v + 1] = p[X + 1], t[v + 1] = t[X + 1], E = t[c + 39] * R(W, aa), z = t[c + 39] * R(la, aa), D += t[c + 39] * t[c + 39] * (t[c + 56] + t[c + 54]) + t[c + 60] * E * E + t[c + 58] * z * z, J(ba, c + 30, c + 51), J(ia, i, l), O(na, la, ia), Wd(ha, q, na), J(ma, ha, ba), u = K(ma, c + 34));
  n = s + t[c + 39] * u - t[c + 38];
  o = 0;
  (D > 0 ? 7 : 8) == 7 && (o = -n / D);
  N(qa, t[c + 53] * o, x);
  Sb(e, qa);
  g += t[c + 57] * o * y;
  N(xa, t[c + 54] * o, v);
  Sb(i, xa);
  h += t[c + 58] * o * z;
  N(Fa, t[c + 55] * o, x);
  Se(j, Fa);
  k -= t[c + 59] * o * B;
  N(Pa, t[c + 56] * o, v);
  Se(l, Pa);
  m -= t[c + 60] * o * E;
  x = p[d + 6] + p[c + 41] * 3;
  p[x] = p[e];
  t[x] = t[e];
  p[x + 1] = p[e + 1];
  t[x + 1] = t[e + 1];
  t[p[d + 6] + p[c + 41] * 3 + 2] = g;
  g = p[d + 6] + p[c + 42] * 3;
  p[g] = p[i];
  t[g] = t[i];
  p[g + 1] = p[i + 1];
  t[g + 1] = t[i + 1];
  t[p[d + 6] + p[c + 42] * 3 + 2] = h;
  i = p[d + 6] + p[c + 43] * 3;
  p[i] = p[j];
  t[i] = t[j];
  p[i + 1] = p[j + 1];
  t[i + 1] = t[j + 1];
  t[p[d + 6] + p[c + 43] * 3 + 2] = k;
  j = p[d + 6] + p[c + 44] * 3;
  p[j] = p[l];
  t[j] = t[l];
  p[j + 1] = p[l + 1];
  t[j + 1] = t[l + 1];
  t[p[d + 6] + p[c + 44] * 3 + 2] = m;
  b = e;
  return ea;
}

ln.X = 1;

function lm(c, d) {
  p[c] = mn + 2;
  (p[d + 2] != p[d + 3] ? 2 : 1) == 1 && Q(nn, 173, on, pn);
  p[c + 1] = p[d];
  p[c + 2] = 0;
  p[c + 3] = 0;
  p[c + 12] = p[d + 2];
  p[c + 13] = p[d + 3];
  p[c + 14] = 0;
  p[c + 16] = p[d + 4] & 1;
  p[c + 15] = 0;
  p[c + 17] = p[d + 1];
  p[c + 5] = 0;
  p[c + 4] = 0;
  p[c + 6] = 0;
  p[c + 7] = 0;
  p[c + 9] = 0;
  p[c + 8] = 0;
  p[c + 10] = 0;
  p[c + 11] = 0;
}

lm.X = 1;

function qn(c, d) {
  var e = b;
  b += 2;
  var f;
  lm(c, d);
  p[c] = rn + 2;
  f = $i(d + 5) ? 2 : 1;
  f == 1 && Q(sn, 34, tn, un);
  f = Gi(t[d + 7]) ? 3 : 4;
  f == 3 && (f = t[d + 7] >= 0 ? 5 : 4);
  f == 4 && Q(sn, 35, tn, vn);
  f = Gi(t[d + 8]) ? 6 : 7;
  f == 6 && (f = t[d + 8] >= 0 ? 8 : 7);
  f == 7 && Q(sn, 36, tn, wn);
  f = Gi(t[d + 9]) ? 9 : 10;
  f == 9 && (f = t[d + 9] >= 0 ? 11 : 10);
  f == 10 && Q(sn, 37, tn, xn);
  f = c + 20;
  var g = d + 5;
  p[f] = p[g];
  t[f] = t[g];
  p[f + 1] = p[g + 1];
  t[f + 1] = t[g + 1];
  f = c + 18;
  ad(e, p[c + 13] + 3, c + 20);
  p[f] = p[e];
  t[f] = t[e];
  p[f + 1] = p[e + 1];
  t[f + 1] = t[e + 1];
  t[c + 27] = t[d + 7];
  hc(c + 25);
  t[c + 22] = t[d + 8];
  t[c + 23] = t[d + 9];
  t[c + 24] = 0;
  t[c + 28] = 0;
  b = e;
}

qn.X = 1;

function yn(c, d) {
  var e = b;
  b += 24;
  var f, g = e + 2, i, h = e + 4, j, k, l = e + 6, m = e + 8, n = e + 10, o = e + 14, r = e + 18, q = e + 20, s = e + 22;
  p[c + 30] = p[p[c + 13] + 2];
  i = c + 33;
  f = p[c + 13] + 7;
  p[i] = p[f];
  t[i] = t[f];
  p[i + 1] = p[f + 1];
  t[i + 1] = t[f + 1];
  t[c + 35] = t[p[c + 13] + 30];
  t[c + 36] = t[p[c + 13] + 32];
  i = p[d + 6] + p[c + 30] * 3;
  p[e] = p[i];
  t[e] = t[i];
  p[e + 1] = p[i + 1];
  t[e + 1] = t[i + 1];
  f = t[p[d + 6] + p[c + 30] * 3 + 2];
  i = p[d + 7] + p[c + 30] * 3;
  p[g] = p[i];
  t[g] = t[i];
  p[g + 1] = p[i + 1];
  t[g + 1] = t[i + 1];
  i = t[p[d + 7] + p[c + 30] * 3 + 2];
  Nm(h, f);
  j = t[p[c + 13] + 29];
  k = t[c + 22] * 6.2831854820251465;
  f = j * 2 * t[c + 23] * k;
  j = j * k * k;
  k = t[d];
  (f + k * j > 1.1920928955078125e-7 ? 2 : 1) == 1 && Q(sn, 125, zn, An);
  t[c + 28] = k * (f + k * j);
  f = t[c + 28] != 0 ? 3 : 4;
  f == 3 && (t[c + 28] = 1 / t[c + 28]);
  t[c + 24] = k * j * t[c + 28];
  f = c + 31;
  J(m, c + 18, c + 33);
  U(l, h, m);
  p[f] = p[l];
  t[f] = t[l];
  p[f + 1] = p[l + 1];
  t[f + 1] = t[l + 1];
  t[n] = t[c + 35] + t[c + 36] * t[c + 32] * t[c + 32] + t[c + 28];
  t[n + 1] = -t[c + 36] * t[c + 31] * t[c + 32];
  t[n + 2] = t[n + 1];
  t[n + 3] = t[c + 35] + t[c + 36] * t[c + 31] * t[c + 31] + t[c + 28];
  h = c + 37;
  Yl(o, n);
  p[h] = p[o];
  t[h] = t[o];
  p[h + 1] = p[o + 1];
  t[h + 1] = t[o + 1];
  p[h + 2] = p[o + 2];
  t[h + 2] = t[o + 2];
  p[h + 3] = p[o + 3];
  t[h + 3] = t[o + 3];
  n = c + 41;
  O(q, e, c + 31);
  J(r, q, c + 20);
  p[n] = p[r];
  t[n] = t[r];
  p[n + 1] = p[r + 1];
  t[n + 1] = t[r + 1];
  ci(c + 41, t[c + 24]);
  i *= .9800000190734863;
  r = c + 25;
  f = p[d + 5] & 1 ? 5 : 6;
  f == 5 ? (ci(r, t[d + 2]), N(s, t[c + 35], c + 25), Sb(g, s), i += t[c + 36] * R(c + 31, c + 25)) : f == 6 && hc(r);
  s = p[d + 7] + p[c + 30] * 3;
  p[s] = p[g];
  t[s] = t[g];
  p[s + 1] = p[g + 1];
  t[s + 1] = t[g + 1];
  t[p[d + 7] + p[c + 30] * 3 + 2] = i;
  b = e;
}

yn.X = 1;

function Bn(c, d) {
  var e = b;
  b += 22;
  var f, g = e + 2, i = e + 4, h = e + 6, j = e + 8, k = e + 10, l = e + 12, m = e + 14, n = e + 16, o = e + 18, r = e + 20;
  f = p[d + 7] + p[c + 30] * 3;
  p[e] = p[f];
  t[e] = t[f];
  p[e + 1] = p[f + 1];
  t[e + 1] = t[f + 1];
  f = t[p[d + 7] + p[c + 30] * 3 + 2];
  Ke(i, f, c + 31);
  O(g, e, i);
  i = c + 37;
  O(k, g, c + 41);
  N(l, t[c + 28], c + 25);
  O(m, k, l);
  Xd(j, m);
  Zl(h, i, j);
  g = c + 25;
  p[n] = p[g];
  t[n] = t[g];
  p[n + 1] = p[g + 1];
  t[n + 1] = t[g + 1];
  Sb(c + 25, h);
  g = t[d] * t[c + 27];
  if ((De(c + 25) > g * g ? 1 : 2) == 1) j = c + 25, k = fd(c + 25), ci(j, g / k);
  J(o, c + 25, n);
  p[h] = p[o];
  t[h] = t[o];
  p[h + 1] = p[o + 1];
  t[h + 1] = t[o + 1];
  N(r, t[c + 35], h);
  Sb(e, r);
  f += t[c + 36] * R(c + 31, h);
  h = p[d + 7] + p[c + 30] * 3;
  p[h] = p[e];
  t[h] = t[e];
  p[h + 1] = p[e + 1];
  t[h + 1] = t[e + 1];
  t[p[d + 7] + p[c + 30] * 3 + 2] = f;
  b = e;
}

Bn.X = 1;

function Cn(c) {
  t[c] = 0;
  t[c + 1] = 0;
  t[c + 2] = 0;
}

function Dn(c, d, e, f) {
  t[c] = d;
  t[c + 1] = e;
  t[c + 2] = f;
}

function En(c, d) {
  t[c] *= d;
  t[c + 1] *= d;
  t[c + 2] *= d;
}

function Fn(c, d) {
  var e = b;
  b += 2;
  lm(c, d);
  p[c] = Gn + 2;
  var f = c + 18, g = d + 5;
  p[f] = p[g];
  t[f] = t[g];
  p[f + 1] = p[g + 1];
  t[f + 1] = t[g + 1];
  f = c + 20;
  g = d + 7;
  p[f] = p[g];
  t[f] = t[g];
  p[f + 1] = p[g + 1];
  t[f + 1] = t[g + 1];
  f = c + 22;
  g = d + 9;
  p[f] = p[g];
  t[f] = t[g];
  p[f + 1] = p[g + 1];
  t[f + 1] = t[g + 1];
  ed(c + 22);
  f = c + 24;
  Ke(e, 1, c + 22);
  p[f] = p[e];
  t[f] = t[e];
  p[f + 1] = p[e + 1];
  t[f + 1] = t[e + 1];
  t[c + 26] = t[d + 11];
  Cn(c + 27);
  t[c + 65] = 0;
  t[c + 30] = 0;
  t[c + 31] = t[d + 13];
  t[c + 32] = t[d + 14];
  t[c + 33] = t[d + 16];
  t[c + 34] = t[d + 17];
  p[c + 35] = p[d + 12] & 1;
  p[c + 36] = p[d + 15] & 1;
  p[c + 37] = 0;
  hc(c + 48);
  hc(c + 50);
  b = e;
}

Fn.X = 1;

function Hn(c, d) {
  var e = b;
  b += 44;
  var f, g, i = e + 2, h, j = e + 4, k, l = e + 6, m, n = e + 8, o = e + 10, r = e + 12, q = e + 14, s = e + 16, u = e + 18, x = e + 20, v = e + 22, y = e + 24;
  f = e + 26;
  var z = e + 28, B = e + 30, E = e + 32, D = e + 34, H = e + 36, I = e + 38, M = e + 40, G = e + 42;
  p[c + 38] = p[p[c + 12] + 2];
  p[c + 39] = p[p[c + 13] + 2];
  h = c + 40;
  m = p[c + 12] + 7;
  p[h] = p[m];
  t[h] = t[m];
  p[h + 1] = p[m + 1];
  t[h + 1] = t[m + 1];
  h = c + 42;
  m = p[c + 13] + 7;
  p[h] = p[m];
  t[h] = t[m];
  p[h + 1] = p[m + 1];
  t[h + 1] = t[m + 1];
  t[c + 44] = t[p[c + 12] + 30];
  t[c + 45] = t[p[c + 13] + 30];
  t[c + 46] = t[p[c + 12] + 32];
  t[c + 47] = t[p[c + 13] + 32];
  h = p[d + 6] + p[c + 38] * 3;
  p[e] = p[h];
  t[e] = t[h];
  p[e + 1] = p[h + 1];
  t[e + 1] = t[h + 1];
  g = t[p[d + 6] + p[c + 38] * 3 + 2];
  h = p[d + 7] + p[c + 38] * 3;
  p[i] = p[h];
  t[i] = t[h];
  p[i + 1] = p[h + 1];
  t[i + 1] = t[h + 1];
  h = t[p[d + 7] + p[c + 38] * 3 + 2];
  m = p[d + 6] + p[c + 39] * 3;
  p[j] = p[m];
  t[j] = t[m];
  p[j + 1] = p[m + 1];
  t[j + 1] = t[m + 1];
  k = t[p[d + 6] + p[c + 39] * 3 + 2];
  m = p[d + 7] + p[c + 39] * 3;
  p[l] = p[m];
  t[l] = t[m];
  p[l + 1] = p[m + 1];
  t[l + 1] = t[m + 1];
  m = t[p[d + 7] + p[c + 39] * 3 + 2];
  Nm(n, g);
  Nm(o, k);
  J(q, c + 18, c + 40);
  U(r, n, q);
  J(u, c + 20, c + 42);
  U(s, o, u);
  J(y, j, e);
  O(v, y, s);
  J(x, v, r);
  j = t[c + 44];
  o = t[c + 45];
  q = t[c + 46];
  u = t[c + 47];
  v = c + 48;
  U(f, n, c + 22);
  p[v] = p[f];
  t[v] = t[f];
  p[v + 1] = p[f + 1];
  t[v + 1] = t[f + 1];
  O(z, x, r);
  t[c + 54] = R(z, c + 48);
  t[c + 55] = R(s, c + 48);
  t[c + 65] = j + o + q * t[c + 54] * t[c + 54] + u * t[c + 55] * t[c + 55];
  f = t[c + 65] > 0 ? 1 : 2;
  f == 1 && (t[c + 65] = 1 / t[c + 65]);
  f = c + 50;
  U(B, n, c + 24);
  p[f] = p[B];
  t[f] = t[B];
  p[f + 1] = p[B + 1];
  t[f + 1] = t[B + 1];
  O(E, x, r);
  t[c + 52] = R(E, c + 50);
  t[c + 53] = R(s, c + 50);
  n = j + o + q * t[c + 52] * t[c + 52] + u * t[c + 53] * t[c + 53];
  r = q * t[c + 52] + u * t[c + 53];
  s = q * t[c + 52] * t[c + 54] + u * t[c + 53] * t[c + 55];
  B = q + u;
  (q + u == 0 ? 3 : 4) == 3 && (B = 1);
  E = q * t[c + 54] + u * t[c + 55];
  f = j + o + q * t[c + 54] * t[c + 54] + u * t[c + 55] * t[c + 55];
  Dn(c + 56, n, r, s);
  Dn(c + 59, r, B, E);
  Dn(c + 62, s, E, f);
  f = p[c + 35] & 1 ? 5 : 14;
  a : do if (f == 5) if (n = K(c + 48, x), f = se(t[c + 32] - t[c + 31]) < .009999999776482582 ? 6 : 7, f == 6) p[c + 37] = 3; else {
    if (f == 7) if (f = n <= t[c + 31] ? 8 : 10, f == 8) {
      if (p[c + 37] == 1) break a;
      p[c + 37] = 1;
      t[c + 29] = 0;
    } else if (f == 10) if (r = c + 37, f = n >= t[c + 32] ? 11 : 13, f == 11) {
      if (p[r] == 2) break a;
      p[c + 37] = 2;
      t[c + 29] = 0;
    } else f == 13 && (p[r] = 0, t[c + 29] = 0);
  } else f == 14 && (p[c + 37] = 0, t[c + 29] = 0); while (0);
  f = (p[c + 36] & 1) == 0 ? 16 : 17;
  f == 16 && (t[c + 30] = 0);
  x = c + 27;
  f = p[d + 5] & 1 ? 18 : 19;
  f == 18 ? (En(x, t[d + 2]), t[c + 30] *= t[d + 2], N(H, t[c + 27], c + 50), N(I, t[c + 30] + t[c + 29], c + 48), O(D, H, I), H = t[c + 27] * t[c + 52] + t[c + 28] + (t[c + 30] + t[c + 29]) * t[c + 54], I = t[c + 27] * t[c + 53] + t[c + 28] + (t[c + 30] + t[c + 29]) * t[c + 55], N(M, j, D), Se(i, M), h -= q * H, N(G, o, D), Sb(l, G), m += u * I) : f == 19 && (Cn(x), t[c + 30] = 0);
  D = p[d + 7] + p[c + 38] * 3;
  p[D] = p[i];
  t[D] = t[i];
  p[D + 1] = p[i + 1];
  t[D + 1] = t[i + 1];
  t[p[d + 7] + p[c + 38] * 3 + 2] = h;
  i = p[d + 7] + p[c + 39] * 3;
  p[i] = p[l];
  t[i] = t[l];
  p[i + 1] = p[l + 1];
  t[i + 1] = t[l + 1];
  t[p[d + 7] + p[c + 39] * 3 + 2] = m;
  b = e;
}

Hn.X = 1;

function In(c, d) {
  Dn(c, -t[d], -t[d + 1], -t[d + 2]);
}

function Jn(c, d) {
  t[c] += t[d];
  t[c + 1] += t[d + 1];
  t[c + 2] += t[d + 2];
}

function Kn(c, d, e) {
  tc(c, t[d] * t[e] + t[d + 3] * t[e + 1], t[d + 1] * t[e] + t[d + 4] * t[e + 1]);
}

function Ln(c, d) {
  var e = b;
  b += 73;
  var f, g, i = e + 2, h, j, k, l, m, n;
  n = e + 4;
  var o, r = e + 6, q = e + 8, s = e + 10, u = e + 12, x = e + 14, v;
  v = e + 16;
  var y = e + 18, z = e + 21, B = e + 24, E = e + 27, D = e + 30, H = e + 32, I = e + 34, M = e + 36, G = e + 38, S = e + 40, P = e + 42, L = e + 44, T = e + 47, F = e + 49, Z = e + 51, aa = e + 53, W = e + 55, ca = e + 57, la = e + 59, $ = e + 61, X = e + 63, ba = e + 65, ha = e + 67, na = e + 69, ia = e + 71;
  g = p[d + 7] + p[c + 38] * 3;
  p[e] = p[g];
  t[e] = t[g];
  p[e + 1] = p[g + 1];
  t[e + 1] = t[g + 1];
  g = t[p[d + 7] + p[c + 38] * 3 + 2];
  h = p[d + 7] + p[c + 39] * 3;
  p[i] = p[h];
  t[i] = t[h];
  p[i + 1] = p[h + 1];
  t[i + 1] = t[h + 1];
  h = t[p[d + 7] + p[c + 39] * 3 + 2];
  j = t[c + 44];
  k = t[c + 45];
  l = t[c + 46];
  m = t[c + 47];
  f = p[c + 36] & 1 ? 1 : 3;
  f == 1 && p[c + 37] != 3 && (f = c + 48, J(n, i, e), n = K(f, n) + t[c + 55] * h - t[c + 54] * g, n = t[c + 65] * (t[c + 34] - n), f = t[c + 30], o = t[d] * t[c + 33], t[c + 30] = ik(t[c + 30] + n, -o, o), n = t[c + 30] - f, N(r, n, c + 48), f = n * t[c + 54], n *= t[c + 55], N(q, j, r), Se(e, q), g -= l * f, N(s, k, r), Sb(i, s), h += m * n);
  r = c + 50;
  J(x, i, e);
  t[u] = K(r, x) + t[c + 53] * h - t[c + 52] * g;
  t[u + 1] = h - g;
  f = p[c + 35] & 1 ? 4 : 10;
  f == 4 && (p[c + 37] == 0 ? f = 10 : (x = c + 48, J(v, i, e), v = K(x, v) + t[c + 55] * h - t[c + 54] * g, zi(y, t[u], t[u + 1], v), v = c + 27, p[z] = p[v], t[z] = t[v], p[z + 1] = p[v + 1], t[z + 1] = t[v + 1], p[z + 2] = p[v + 2], t[z + 2] = t[v + 2], v = c + 56, In(E, y), Ei(B, v, E), Jn(c + 27, B), f = p[c + 37] == 1 ? 6 : 7, f == 6 ? t[c + 29] = t[c + 29] > 0 ? t[c + 29] : 0 : f == 7 && (p[c + 37] != 2 || (t[c + 29] = t[c + 29] < 0 ? t[c + 29] : 0)), Xd(H, u), y = t[c + 29] - t[z + 2], tc(M, t[c + 62], t[c + 63]), N(I, y, M), J(D, H, I), Ai(S, c + 56, D), tc(P, t[z], t[z + 1]), O(G, S, P), t[c + 27] = t[G], t[c + 28] = t[G + 1], D = c + 27, zi(L, t[D] - t[z], t[D + 1] - t[z + 1], t[D + 2] - t[z + 2]), p[B] = p[L], t[B] = t[L], p[B + 1] = p[L + 1], t[B + 1] = t[L + 1], p[B + 2] = p[L + 2], t[B + 2] = t[L + 2], N(F, t[B], c + 50), N(Z, t[B + 2], c + 48), O(T, F, Z), z = t[B] * t[c + 52] + t[B + 1] + t[B + 2] * t[c + 54], B = t[B] * t[c + 53] + t[B + 1] + t[B + 2] * t[c + 55], N(aa, j, T), Se(e, aa), g -= l * z, N(W, k, T), Sb(i, W), h += m * B, f = 13));
  a : do if (f == 10) {
    T = c + 56;
    Xd(la, u);
    Ai(ca, T, la);
    t[c + 27] += t[ca];
    t[c + 28] += t[ca + 1];
    N($, t[ca], c + 50);
    T = t[ca] * t[c + 52] + t[ca + 1];
    aa = t[ca] * t[c + 53] + t[ca + 1];
    N(X, j, $);
    Se(e, X);
    g -= l * T;
    N(ba, k, $);
    Sb(i, ba);
    h += m * aa;
    T = ha;
    aa = u;
    p[T] = p[aa];
    t[T] = t[aa];
    p[T + 1] = p[aa + 1];
    t[T + 1] = t[aa + 1];
    T = c + 50;
    J(na, i, e);
    t[u] = K(T, na) + t[c + 53] * h - t[c + 52] * g;
    t[u + 1] = h - g;
    f = se(t[u]) > .009999999776482582 ? 12 : 11;
    if (f == 11 && se(t[u + 1]) <= .009999999776482582) break a;
    Kn(ia, c + 56, ca);
    t[u] = t[u];
  } while (0);
  u = p[d + 7] + p[c + 38] * 3;
  p[u] = p[e];
  t[u] = t[e];
  p[u + 1] = p[e + 1];
  t[u + 1] = t[e + 1];
  t[p[d + 7] + p[c + 38] * 3 + 2] = g;
  g = p[d + 7] + p[c + 39] * 3;
  p[g] = p[i];
  t[g] = t[i];
  p[g + 1] = p[i + 1];
  t[g + 1] = t[i + 1];
  t[p[d + 7] + p[c + 39] * 3 + 2] = h;
  b = e;
}

Ln.X = 1;

function Mn(c, d, e) {
  var f, g, i, h;
  f = t[d];
  g = t[d + 2];
  i = t[d + 1];
  d = t[d + 3];
  h = f * d - g * i;
  if ((h != 0 ? 1 : 2) == 1) h = 1 / h;
  t[c] = h * (d * t[e] - g * t[e + 1]);
  t[c + 1] = h * (f * t[e + 1] - i * t[e]);
}

Mn.X = 1;

function Nn(c, d) {
  var e = b;
  b += 71;
  var f, g, i = e + 2, h, j = e + 4, k = e + 6, l, m, n, o, r = e + 8, q = e + 10, s = e + 12, u = e + 14, x = e + 16;
  f = e + 18;
  var v = e + 20, y = e + 22, z = e + 24, B = e + 26, E = e + 28, D = e + 30, H = e + 33, I, M, G, S = e + 35, P = e + 44, L = e + 47, T = e + 50;
  I = e + 53;
  M = e + 57;
  G = e + 59;
  var F = e + 61, Z = e + 63, aa = e + 65, W = e + 67, ca = e + 69;
  g = p[d + 6] + p[c + 38] * 3;
  p[e] = p[g];
  t[e] = t[g];
  p[e + 1] = p[g + 1];
  t[e + 1] = t[g + 1];
  g = t[p[d + 6] + p[c + 38] * 3 + 2];
  h = p[d + 6] + p[c + 39] * 3;
  p[i] = p[h];
  t[i] = t[h];
  p[i + 1] = p[h + 1];
  t[i + 1] = t[h + 1];
  h = t[p[d + 6] + p[c + 39] * 3 + 2];
  Nm(j, g);
  Nm(k, h);
  l = t[c + 44];
  m = t[c + 45];
  n = t[c + 46];
  o = t[c + 47];
  J(q, c + 18, c + 40);
  U(r, j, q);
  J(u, c + 20, c + 42);
  U(s, k, u);
  O(v, i, s);
  J(f, v, e);
  J(x, f, r);
  U(y, j, c + 22);
  O(z, x, r);
  q = R(z, y);
  k = R(s, y);
  U(B, j, c + 24);
  O(E, x, r);
  r = R(E, B);
  E = R(s, B);
  t[H] = K(B, x);
  t[H + 1] = h - g - t[c + 26];
  s = se(t[H]);
  j = se(t[H + 1]);
  u = v = 0;
  f = p[c + 35] & 1 ? 1 : 7;
  a : do if (f == 1) {
    var la = z = K(y, x);
    f = se(t[c + 32] - t[c + 31]) < .009999999776482582 ? 2 : 3;
    if (f == 2) u = ik(la, -.20000000298023224, .20000000298023224), s = s > se(z) ? s : se(z), v = 1; else if (f == 3) {
      var $ = z;
      f = la <= t[c + 31] ? 4 : 5;
      if (f == 4) u = ik($ - t[c + 31] + .004999999888241291, -.20000000298023224, 0), s = s > t[c + 31] - z ? s : t[c + 31] - z, v = 1; else if (f == 5) {
        if (!($ >= t[c + 32])) break a;
        u = ik(z - t[c + 32] - .004999999888241291, 0, .20000000298023224);
        s = s > z - t[c + 32] ? s : z - t[c + 32];
        v = 1;
      }
    }
  } while (0);
  x = l + m + n * r * r + o * E * E;
  f = v & 1 ? 8 : 11;
  f == 8 ? (I = n * r + o * E, M = n * r * q + o * E * k, G = n + o, (G == 0 ? 9 : 10) == 9 && (G = 1), f = n * q + o * k, v = l + m + n * q * q + o * k * k, Dn(S, x, I, M), Dn(S + 3, I, G, f), Dn(S + 6, M, f, v), t[P] = t[H], t[P + 1] = t[H + 1], t[P + 2] = u, In(T, P), Ei(L, S, T), p[D] = p[L], t[D] = t[L], p[D + 1] = p[L + 1], t[D + 1] = t[L + 1], p[D + 2] = p[L + 2], t[D + 2] = t[L + 2]) : f == 11 && (S = n * r + o * E, P = n + o, (P == 0 ? 12 : 13) == 12 && (P = 1), sc(I, x, S), sc(I + 2, S, P), Xd(G, H), Mn(M, I, G), t[D] = t[M], t[D + 1] = t[M + 1], t[D + 2] = 0);
  N(Z, t[D], B);
  N(aa, t[D + 2], y);
  O(F, Z, aa);
  y = t[D] * r + t[D + 1] + t[D + 2] * q;
  D = t[D] * E + t[D + 1] + t[D + 2] * k;
  N(W, l, F);
  Se(e, W);
  g -= n * y;
  N(ca, m, F);
  Sb(i, ca);
  h += o * D;
  F = p[d + 6] + p[c + 38] * 3;
  p[F] = p[e];
  t[F] = t[e];
  p[F + 1] = p[e + 1];
  t[F + 1] = t[e + 1];
  t[p[d + 6] + p[c + 38] * 3 + 2] = g;
  g = p[d + 6] + p[c + 39] * 3;
  p[g] = p[i];
  t[g] = t[i];
  p[g + 1] = p[i + 1];
  t[g + 1] = t[i + 1];
  t[p[d + 6] + p[c + 39] * 3 + 2] = h;
  if (s <= .004999999888241291) f = 15; else {
    var X = 0;
    f = 16;
  }
  f == 15 && (X = j <= .03490658849477768);
  b = e;
  return X;
}

Nn.X = 1;

function On(c) {
  var d, e;
  d = p[p[c + 12] + 2];
  e = p[p[c + 13] + 2];
  V(Pn, C(1, "i32", w));
  V(Dm, C([ d ], "i32", w));
  V(Em, C([ e ], "i32", w));
  V(Fm, C([ p[c + 16] & 1 ], "i32", w));
  V(Gm, C([ t[c + 18], t[c + 19] ], "double", w));
  V(Hm, C([ t[c + 20], t[c + 21] ], "double", w));
  V(Qn, C([ t[c + 22], t[c + 23] ], "double", w));
  V(Rn, C([ t[c + 26] ], "double", w));
  V(Sn, C([ p[c + 35] & 1 ], "i32", w));
  V(Tn, C([ t[c + 31] ], "double", w));
  V(Un, C([ t[c + 32] ], "double", w));
  V(Vn, C([ p[c + 36] & 1 ], "i32", w));
  V(Wn, C([ t[c + 34] ], "double", w));
  V(Xn, C([ t[c + 33] ], "double", w));
  V(Lm, C([ p[c + 14] ], "i32", w));
}

On.X = 1;

function Yn(c, d) {
  lm(c, d);
  p[c] = Zn + 2;
  var e = c + 18, f = d + 5;
  p[e] = p[f];
  t[e] = t[f];
  p[e + 1] = p[f + 1];
  t[e + 1] = t[f + 1];
  e = c + 20;
  f = d + 7;
  p[e] = p[f];
  t[e] = t[f];
  p[e + 1] = p[f + 1];
  t[e + 1] = t[f + 1];
  e = c + 24;
  f = d + 9;
  p[e] = p[f];
  t[e] = t[f];
  p[e + 1] = p[f + 1];
  t[e + 1] = t[f + 1];
  e = c + 26;
  f = d + 11;
  p[e] = p[f];
  t[e] = t[f];
  p[e + 1] = p[f + 1];
  t[e + 1] = t[f + 1];
  t[c + 22] = t[d + 13];
  t[c + 23] = t[d + 14];
  (t[d + 15] != 0 ? 2 : 1) == 1 && Q($n, 65, ao, bo);
  t[c + 29] = t[d + 15];
  t[c + 28] = t[d + 13] + t[c + 29] * t[d + 14];
  t[c + 30] = 0;
}

Yn.X = 1;

function co(c, d) {
  var e = b;
  b += 36;
  var f, g, i = e + 2, h;
  f = e + 4;
  var j, k = e + 6, l, m = e + 8, n = e + 10, o = e + 12, r = e + 14, q = e + 16, s = e + 18, u = e + 20, x = e + 22, v = e + 24, y = e + 26, z = e + 28, B = e + 30, E = e + 32, D = e + 34;
  p[c + 31] = p[p[c + 12] + 2];
  p[c + 32] = p[p[c + 13] + 2];
  h = c + 41;
  l = p[c + 12] + 7;
  p[h] = p[l];
  t[h] = t[l];
  p[h + 1] = p[l + 1];
  t[h + 1] = t[l + 1];
  h = c + 43;
  l = p[c + 13] + 7;
  p[h] = p[l];
  t[h] = t[l];
  p[h + 1] = p[l + 1];
  t[h + 1] = t[l + 1];
  t[c + 45] = t[p[c + 12] + 30];
  t[c + 46] = t[p[c + 13] + 30];
  t[c + 47] = t[p[c + 12] + 32];
  t[c + 48] = t[p[c + 13] + 32];
  h = p[d + 6] + p[c + 31] * 3;
  p[e] = p[h];
  t[e] = t[h];
  p[e + 1] = p[h + 1];
  t[e + 1] = t[h + 1];
  g = t[p[d + 6] + p[c + 31] * 3 + 2];
  h = p[d + 7] + p[c + 31] * 3;
  p[i] = p[h];
  t[i] = t[h];
  p[i + 1] = p[h + 1];
  t[i + 1] = t[h + 1];
  h = t[p[d + 7] + p[c + 31] * 3 + 2];
  l = p[d + 6] + p[c + 32] * 3;
  p[f] = p[l];
  t[f] = t[l];
  p[f + 1] = p[l + 1];
  t[f + 1] = t[l + 1];
  j = t[p[d + 6] + p[c + 32] * 3 + 2];
  l = p[d + 7] + p[c + 32] * 3;
  p[k] = p[l];
  t[k] = t[l];
  p[k + 1] = p[l + 1];
  t[k + 1] = t[l + 1];
  l = t[p[d + 7] + p[c + 32] * 3 + 2];
  Nm(m, g);
  Nm(n, j);
  g = c + 37;
  J(r, c + 24, c + 41);
  U(o, m, r);
  p[g] = p[o];
  t[g] = t[o];
  p[g + 1] = p[o + 1];
  t[g + 1] = t[o + 1];
  m = c + 39;
  J(s, c + 26, c + 43);
  U(q, n, s);
  p[m] = p[q];
  t[m] = t[q];
  p[m + 1] = p[q + 1];
  t[m + 1] = t[q + 1];
  n = c + 33;
  O(x, e, c + 37);
  J(u, x, c + 18);
  p[n] = p[u];
  t[n] = t[u];
  p[n + 1] = p[u + 1];
  t[n + 1] = t[u + 1];
  u = c + 35;
  O(y, f, c + 39);
  J(v, y, c + 20);
  p[u] = p[v];
  t[u] = t[v];
  p[u + 1] = p[v + 1];
  t[u + 1] = t[v + 1];
  v = fd(c + 33);
  y = fd(c + 35);
  f = v > .04999999701976776 ? 1 : 2;
  f == 1 ? ci(c + 33, 1 / v) : f == 2 && hc(c + 33);
  f = y > .04999999701976776 ? 4 : 5;
  f == 4 ? ci(c + 35, 1 / y) : f == 5 && hc(c + 35);
  f = R(c + 37, c + 33);
  v = R(c + 39, c + 35);
  t[c + 49] = t[c + 45] + t[c + 47] * f * f + t[c + 29] * t[c + 29] * (t[c + 46] + t[c + 48] * v * v);
  f = t[c + 49] > 0 ? 7 : 8;
  f == 7 && (t[c + 49] = 1 / t[c + 49]);
  f = p[d + 5] & 1 ? 9 : 10;
  f == 9 ? (t[c + 30] *= t[d + 2], N(z, -t[c + 30], c + 33), N(B, -t[c + 29] * t[c + 30], c + 35), N(E, t[c + 45], z), Sb(i, E), h += t[c + 47] * R(c + 37, z), N(D, t[c + 46], B), Sb(k, D), l += t[c + 48] * R(c + 39, B)) : f == 10 && (t[c + 30] = 0);
  z = p[d + 7] + p[c + 31] * 3;
  p[z] = p[i];
  t[z] = t[i];
  p[z + 1] = p[i + 1];
  t[z + 1] = t[i + 1];
  t[p[d + 7] + p[c + 31] * 3 + 2] = h;
  i = p[d + 7] + p[c + 32] * 3;
  p[i] = p[k];
  t[i] = t[k];
  p[i + 1] = p[k + 1];
  t[i + 1] = t[k + 1];
  t[p[d + 7] + p[c + 32] * 3 + 2] = l;
  b = e;
}

co.X = 1;

function eo(c, d) {
  var e = b;
  b += 20;
  var f, g = e + 2, i, h = e + 4, j = e + 6, k = e + 8, l = e + 10, m = e + 12, n = e + 14, o = e + 16, r = e + 18;
  f = p[d + 7] + p[c + 31] * 3;
  p[e] = p[f];
  t[e] = t[f];
  p[e + 1] = p[f + 1];
  t[e + 1] = t[f + 1];
  f = t[p[d + 7] + p[c + 31] * 3 + 2];
  i = p[d + 7] + p[c + 32] * 3;
  p[g] = p[i];
  t[g] = t[i];
  p[g + 1] = p[i + 1];
  t[g + 1] = t[i + 1];
  i = t[p[d + 7] + p[c + 32] * 3 + 2];
  Ke(j, f, c + 37);
  O(h, e, j);
  Ke(l, i, c + 39);
  O(k, g, l);
  h = -t[c + 49] * (-K(c + 33, h) - t[c + 29] * K(c + 35, k));
  t[c + 30] += h;
  N(m, -h, c + 33);
  N(n, -t[c + 29] * h, c + 35);
  N(o, t[c + 45], m);
  Sb(e, o);
  f += t[c + 47] * R(c + 37, m);
  N(r, t[c + 46], n);
  Sb(g, r);
  i += t[c + 48] * R(c + 39, n);
  m = p[d + 7] + p[c + 31] * 3;
  p[m] = p[e];
  t[m] = t[e];
  p[m + 1] = p[e + 1];
  t[m + 1] = t[e + 1];
  t[p[d + 7] + p[c + 31] * 3 + 2] = f;
  f = p[d + 7] + p[c + 32] * 3;
  p[f] = p[g];
  t[f] = t[g];
  p[f + 1] = p[g + 1];
  t[f + 1] = t[g + 1];
  t[p[d + 7] + p[c + 32] * 3 + 2] = i;
  b = e;
}

eo.X = 1;

function fo(c) {
  var d, e;
  d = p[p[c + 12] + 2];
  e = p[p[c + 13] + 2];
  V(go, C(1, "i32", w));
  V(Dm, C([ d ], "i32", w));
  V(Em, C([ e ], "i32", w));
  V(Fm, C([ p[c + 16] & 1 ], "i32", w));
  V(ho, C([ t[c + 18], t[c + 19] ], "double", w));
  V(io, C([ t[c + 20], t[c + 21] ], "double", w));
  V(Gm, C([ t[c + 24], t[c + 25] ], "double", w));
  V(Hm, C([ t[c + 26], t[c + 27] ], "double", w));
  V(jo, C([ t[c + 22] ], "double", w));
  V(ko, C([ t[c + 23] ], "double", w));
  V(kn, C([ t[c + 29] ], "double", w));
  V(Lm, C([ p[c + 14] ], "i32", w));
}

fo.X = 1;

function lo(c, d) {
  lm(c, d);
  p[c] = mo + 2;
  var e = c + 18, f = d + 5;
  p[e] = p[f];
  t[e] = t[f];
  p[e + 1] = p[f + 1];
  t[e + 1] = t[f + 1];
  e = c + 20;
  f = d + 7;
  p[e] = p[f];
  t[e] = t[f];
  p[e + 1] = p[f + 1];
  t[e + 1] = t[f + 1];
  t[c + 30] = t[d + 9];
  Cn(c + 22);
  t[c + 25] = 0;
  t[c + 31] = t[d + 11];
  t[c + 32] = t[d + 12];
  t[c + 27] = t[d + 15];
  t[c + 28] = t[d + 14];
  p[c + 29] = p[d + 10] & 1;
  p[c + 26] = p[d + 13] & 1;
  p[c + 57] = 0;
}

lo.X = 1;

function no(c, d) {
  var e = b;
  b += 32;
  var f, g, i = e + 2, h, j = e + 4, k = e + 6, l = e + 8, m = e + 10, n = e + 12;
  f = e + 14;
  var o = e + 16, r = e + 18, q = e + 20, s = e + 22, u = e + 24, x = e + 26, v = e + 28, y = e + 30;
  g = p[d + 6] + p[c + 31] * 3;
  p[e] = p[g];
  t[e] = t[g];
  p[e + 1] = p[g + 1];
  t[e + 1] = t[g + 1];
  g = t[p[d + 6] + p[c + 31] * 3 + 2];
  h = p[d + 6] + p[c + 32] * 3;
  p[i] = p[h];
  t[i] = t[h];
  p[i + 1] = p[h + 1];
  t[i + 1] = t[h + 1];
  h = t[p[d + 6] + p[c + 32] * 3 + 2];
  Nm(j, g);
  Nm(k, h);
  J(m, c + 24, c + 41);
  U(l, j, m);
  J(f, c + 26, c + 43);
  U(n, k, f);
  O(r, e, l);
  J(o, r, c + 18);
  O(s, i, n);
  J(q, s, c + 20);
  j = fd(o);
  k = fd(q);
  f = j > .04999999701976776 ? 1 : 2;
  f == 1 ? ci(o, 1 / j) : f == 2 && hc(o);
  f = k > .04999999701976776 ? 4 : 5;
  f == 4 ? ci(q, 1 / k) : f == 5 && hc(q);
  f = R(l, o);
  m = R(n, q);
  f = t[c + 45] + t[c + 47] * f * f;
  r = t[c + 46] + t[c + 48] * m * m;
  m = f + t[c + 29] * t[c + 29] * r;
  f = f + t[c + 29] * t[c + 29] * r > 0 ? 7 : 8;
  f == 7 && (m = 1 / m);
  k = t[c + 28] - j - t[c + 29] * k;
  j = se(k);
  k *= -m;
  N(u, -k, o);
  N(x, -t[c + 29] * k, q);
  N(v, t[c + 45], u);
  Sb(e, v);
  g += t[c + 47] * R(l, u);
  N(y, t[c + 46], x);
  Sb(i, y);
  h += t[c + 48] * R(n, x);
  l = p[d + 6] + p[c + 31] * 3;
  p[l] = p[e];
  t[l] = t[e];
  p[l + 1] = p[e + 1];
  t[l + 1] = t[e + 1];
  t[p[d + 6] + p[c + 31] * 3 + 2] = g;
  g = p[d + 6] + p[c + 32] * 3;
  p[g] = p[i];
  t[g] = t[i];
  p[g + 1] = p[i + 1];
  t[g + 1] = t[i + 1];
  t[p[d + 6] + p[c + 32] * 3 + 2] = h;
  b = e;
  return j < .004999999888241291;
}

no.X = 1;

function oo(c, d) {
  var e = b;
  b += 26;
  var f, g, i = e + 2, h, j = e + 4, k, l = e + 6, m = e + 8;
  f = e + 10;
  var n = e + 12, o = e + 14, r = e + 16, q = e + 18, s, u = e + 20, x = e + 22, v = e + 24;
  p[c + 33] = p[p[c + 12] + 2];
  p[c + 34] = p[p[c + 13] + 2];
  h = c + 39;
  g = p[c + 12] + 7;
  p[h] = p[g];
  t[h] = t[g];
  p[h + 1] = p[g + 1];
  t[h + 1] = t[g + 1];
  h = c + 41;
  g = p[c + 13] + 7;
  p[h] = p[g];
  t[h] = t[g];
  p[h + 1] = p[g + 1];
  t[h + 1] = t[g + 1];
  t[c + 43] = t[p[c + 12] + 30];
  t[c + 44] = t[p[c + 13] + 30];
  t[c + 45] = t[p[c + 12] + 32];
  t[c + 46] = t[p[c + 13] + 32];
  h = p[d + 6] + p[c + 33] * 3;
  p[e] = p[h];
  t[e] = t[h];
  p[e + 1] = p[h + 1];
  t[e + 1] = t[h + 1];
  g = t[p[d + 6] + p[c + 33] * 3 + 2];
  h = p[d + 7] + p[c + 33] * 3;
  p[i] = p[h];
  t[i] = t[h];
  p[i + 1] = p[h + 1];
  t[i + 1] = t[h + 1];
  h = t[p[d + 7] + p[c + 33] * 3 + 2];
  k = p[d + 6] + p[c + 34] * 3;
  p[j] = p[k];
  t[j] = t[k];
  p[j + 1] = p[k + 1];
  t[j + 1] = t[k + 1];
  k = t[p[d + 6] + p[c + 34] * 3 + 2];
  j = p[d + 7] + p[c + 34] * 3;
  p[l] = p[j];
  t[l] = t[j];
  p[l + 1] = p[j + 1];
  t[l + 1] = t[j + 1];
  j = t[p[d + 7] + p[c + 34] * 3 + 2];
  Nm(m, g);
  Nm(f, k);
  s = c + 35;
  J(o, c + 18, c + 39);
  U(n, m, o);
  p[s] = p[n];
  t[s] = t[n];
  p[s + 1] = p[n + 1];
  t[s + 1] = t[n + 1];
  m = c + 37;
  J(q, c + 20, c + 41);
  U(r, f, q);
  p[m] = p[r];
  t[m] = t[r];
  p[m + 1] = p[r + 1];
  t[m + 1] = t[r + 1];
  r = t[c + 43];
  q = t[c + 44];
  m = t[c + 45];
  n = t[c + 46];
  o = m + n == 0;
  t[c + 47] = r + q + t[c + 36] * t[c + 36] * m + t[c + 38] * t[c + 38] * n;
  t[c + 50] = -t[c + 36] * t[c + 35] * m - t[c + 38] * t[c + 37] * n;
  t[c + 53] = -t[c + 36] * m - t[c + 38] * n;
  t[c + 48] = t[c + 50];
  t[c + 51] = r + q + t[c + 35] * t[c + 35] * m + t[c + 37] * t[c + 37] * n;
  t[c + 54] = t[c + 35] * m + t[c + 37] * n;
  t[c + 49] = t[c + 53];
  t[c + 52] = t[c + 54];
  t[c + 55] = m + n;
  t[c + 56] = m + n;
  f = t[c + 56] > 0 ? 1 : 2;
  f == 1 && (t[c + 56] = 1 / t[c + 56]);
  f = (p[c + 26] & 1) == 0 ? 4 : 3;
  f == 3 && (f = o & 1 ? 4 : 5);
  f == 4 && (t[c + 25] = 0);
  f = p[c + 29] & 1 ? 6 : 18;
  a : do if (f == 6) if ((o & 1) != 0) f = 18; else if (s = k - g - t[c + 30], f = se(t[c + 32] - t[c + 31]) < .06981317698955536 ? 8 : 9, f == 8) {
    p[c + 57] = 3;
    f = 19;
    break a;
  } else if (f == 9) if (f = s <= t[c + 31] ? 10 : 13, f == 10) {
    f = p[c + 57] != 1 ? 11 : 12;
    f == 11 && (t[c + 24] = 0);
    p[c + 57] = 1;
    f = 19;
    break a;
  } else if (f == 13) {
    var y = c + 57;
    f = s >= t[c + 32] ? 14 : 17;
    if (f == 14) {
      f = p[y] != 2 ? 15 : 16;
      f == 15 && (t[c + 24] = 0);
      p[c + 57] = 2;
      f = 19;
      break a;
    } else if (f == 17) {
      p[y] = 0;
      t[c + 24] = 0;
      f = 19;
      break a;
    }
  } while (0);
  f == 18 && (p[c + 57] = 0);
  g = c + 22;
  f = p[d + 5] & 1 ? 20 : 21;
  f == 20 ? (En(g, t[d + 2]), t[c + 25] *= t[d + 2], tc(u, t[c + 22], t[c + 23]), N(x, r, u), Se(i, x), h -= m * (R(c + 35, u) + t[c + 25] + t[c + 24]), N(v, q, u), Sb(l, v), j += n * (R(c + 37, u) + t[c + 25] + t[c + 24])) : f == 21 && (Cn(g), t[c + 25] = 0);
  u = p[d + 7] + p[c + 33] * 3;
  p[u] = p[i];
  t[u] = t[i];
  p[u + 1] = p[i + 1];
  t[u + 1] = t[i + 1];
  t[p[d + 7] + p[c + 33] * 3 + 2] = h;
  i = p[d + 7] + p[c + 34] * 3;
  p[i] = p[l];
  t[i] = t[l];
  p[i + 1] = p[l + 1];
  t[i + 1] = t[l + 1];
  t[p[d + 7] + p[c + 34] * 3 + 2] = j;
  b = e;
}

oo.X = 1;

function po(c, d) {
  var e = b;
  b += 67;
  var f, g, i = e + 2, h, j, k, l, m, n, o, r, q = e + 4, s = e + 6, u = e + 8, x = e + 10, v = e + 12, y = e + 14, z = e + 17, B = e + 20, E = e + 23, D = e + 25, H = e + 27, I = e + 29, M = e + 31, G = e + 33, S = e + 35, P = e + 37, L = e + 39, T = e + 41, F = e + 43, Z = e + 45, aa = e + 47, W = e + 49, ca = e + 51, la = e + 53, $ = e + 55, X = e + 57, ba = e + 59, ha = e + 61, na = e + 63, ia = e + 65;
  g = p[d + 7] + p[c + 33] * 3;
  p[e] = p[g];
  t[e] = t[g];
  p[e + 1] = p[g + 1];
  t[e + 1] = t[g + 1];
  g = t[p[d + 7] + p[c + 33] * 3 + 2];
  h = p[d + 7] + p[c + 34] * 3;
  p[i] = p[h];
  t[i] = t[h];
  p[i + 1] = p[h + 1];
  t[i + 1] = t[h + 1];
  h = t[p[d + 7] + p[c + 34] * 3 + 2];
  j = t[c + 43];
  k = t[c + 44];
  l = t[c + 45];
  m = t[c + 46];
  n = l + m == 0;
  f = p[c + 26] & 1 ? 1 : 4;
  f == 1 && p[c + 57] != 3 && (n & 1) == 0 && (f = h - g - t[c + 28], f *= -t[c + 56], o = t[c + 25], r = t[d] * t[c + 27], t[c + 25] = ik(t[c + 25] + f, -r, r), f = t[c + 25] - o, g -= l * f, h += m * f);
  f = p[c + 29] & 1 ? 5 : 18;
  do if (f == 5) if (p[c + 57] == 0) f = 18; else if ((n & 1) != 0) f = 18; else {
    Ke(x, h, c + 37);
    O(u, i, x);
    J(s, u, e);
    Ke(v, g, c + 35);
    J(q, s, v);
    f = h - g;
    zi(y, t[q], t[q + 1], f);
    Ei(B, c + 47, y);
    In(z, B);
    f = p[c + 57] == 3 ? 8 : 9;
    a : do if (f == 8) Jn(c + 22, z); else if (f == 9) if (f = p[c + 57] == 1 ? 10 : 13, f == 10) f = t[c + 24] + t[z + 2], f = f < 0 ? 11 : 12, f == 11 ? (Xd(D, q), o = t[c + 24], tc(I, t[c + 53], t[c + 54]), N(H, o, I), O(E, D, H), Ai(M, c + 47, E), t[z] = t[M], t[z + 1] = t[M + 1], t[z + 2] = -t[c + 24], t[c + 22] += t[M], t[c + 23] += t[M + 1], t[c + 24] = 0) : f == 12 && Jn(c + 22, z); else if (f == 13) {
      if (p[c + 57] != 2) break a;
      f = t[c + 24] + t[z + 2];
      f = f > 0 ? 15 : 16;
      f == 15 ? (Xd(S, q), o = t[c + 24], tc(L, t[c + 53], t[c + 54]), N(P, o, L), O(G, S, P), Ai(T, c + 47, G), t[z] = t[T], t[z + 1] = t[T + 1], t[z + 2] = -t[c + 24], t[c + 22] += t[T], t[c + 23] += t[T + 1], t[c + 24] = 0) : f == 16 && Jn(c + 22, z);
    } while (0);
    tc(F, t[z], t[z + 1]);
    N(Z, j, F);
    Se(e, Z);
    g -= l * (R(c + 35, F) + t[z + 2]);
    N(aa, k, F);
    Sb(i, aa);
    h += m * (R(c + 37, F) + t[z + 2]);
    f = 19;
  } while (0);
  f == 18 && (Ke($, h, c + 37), O(la, i, $), J(ca, la, e), Ke(X, g, c + 35), J(W, ca, X), q = c + 47, Xd(ha, W), Ai(ba, q, ha), t[c + 22] += t[ba], t[c + 23] += t[ba + 1], N(na, j, ba), Se(e, na), g -= l * R(c + 35, ba), N(ia, k, ba), Sb(i, ia), h += m * R(c + 37, ba));
  W = p[d + 7] + p[c + 33] * 3;
  p[W] = p[e];
  t[W] = t[e];
  p[W + 1] = p[e + 1];
  t[W + 1] = t[e + 1];
  t[p[d + 7] + p[c + 33] * 3 + 2] = g;
  g = p[d + 7] + p[c + 34] * 3;
  p[g] = p[i];
  t[g] = t[i];
  p[g + 1] = p[i + 1];
  t[g + 1] = t[i + 1];
  t[p[d + 7] + p[c + 34] * 3 + 2] = h;
  b = e;
}

po.X = 1;

function qo(c, d) {
  var e = b;
  b += 34;
  var f, g, i = e + 2, h, j = e + 4, k = e + 6, l, m, n, o, r = e + 8, q = e + 10, s = e + 12, u = e + 14, x = e + 16, v = e + 18, y = e + 20, z = e + 22, B = e + 26, E = e + 28, D = e + 30, H = e + 32;
  g = p[d + 6] + p[c + 33] * 3;
  p[e] = p[g];
  t[e] = t[g];
  p[e + 1] = p[g + 1];
  t[e + 1] = t[g + 1];
  g = t[p[d + 6] + p[c + 33] * 3 + 2];
  h = p[d + 6] + p[c + 34] * 3;
  p[i] = p[h];
  t[i] = t[h];
  p[i + 1] = p[h + 1];
  t[i + 1] = t[h + 1];
  h = t[p[d + 6] + p[c + 34] * 3 + 2];
  Nm(j, g);
  Nm(k, h);
  l = 0;
  m = t[c + 45] + t[c + 46] == 0;
  f = p[c + 29] & 1 ? 1 : 10;
  do if (f == 1) if (p[c + 57] == 0) f = 10; else if ((m & 1) != 0) f = 10; else {
    n = h - g - t[c + 30];
    o = 0;
    f = p[c + 57] == 3 ? 4 : 5;
    a : do if (f == 4) l = ik(n - t[c + 31], -.13962635397911072, .13962635397911072), o = -t[c + 56] * l, l = se(l); else if (f == 5) if (f = p[c + 57] == 1 ? 6 : 7, f == 6) o = n - t[c + 31], l = -o, o = ik(o + .03490658849477768, -.13962635397911072, 0), o *= -t[c + 56]; else if (f == 7) {
      if (p[c + 57] != 2) {
        f = 9;
        break a;
      }
      l = o = n - t[c + 32];
      o = ik(o - .03490658849477768, 0, .13962635397911072);
      o *= -t[c + 56];
    } while (0);
    g -= t[c + 45] * o;
    h += t[c + 46] * o;
  } while (0);
  kh(j, g);
  kh(k, h);
  J(q, c + 18, c + 39);
  U(r, j, q);
  J(u, c + 20, c + 41);
  U(s, k, u);
  O(y, i, s);
  J(v, y, e);
  J(x, v, r);
  j = fd(x);
  k = t[c + 43];
  q = t[c + 44];
  u = t[c + 45];
  v = t[c + 46];
  t[z] = k + q + u * t[r + 1] * t[r + 1] + v * t[s + 1] * t[s + 1];
  t[z + 1] = -u * t[r] * t[r + 1] - v * t[s] * t[s + 1];
  t[z + 2] = t[z + 1];
  t[z + 3] = k + q + u * t[r] * t[r] + v * t[s] * t[s];
  Mn(E, z, x);
  Xd(B, E);
  N(D, k, B);
  Se(e, D);
  g -= u * R(r, B);
  N(H, q, B);
  Sb(i, H);
  h += v * R(s, B);
  r = p[d + 6] + p[c + 33] * 3;
  p[r] = p[e];
  t[r] = t[e];
  p[r + 1] = p[e + 1];
  t[r + 1] = t[e + 1];
  t[p[d + 6] + p[c + 33] * 3 + 2] = g;
  g = p[d + 6] + p[c + 34] * 3;
  p[g] = p[i];
  t[g] = t[i];
  p[g + 1] = p[i + 1];
  t[g + 1] = t[i + 1];
  t[p[d + 6] + p[c + 34] * 3 + 2] = h;
  if (j <= .004999999888241291) f = 11; else {
    var I = 0;
    f = 12;
  }
  f == 11 && (I = l <= .03490658849477768);
  b = e;
  return I;
}

qo.X = 1;

function ro(c) {
  var d, e;
  d = p[p[c + 12] + 2];
  e = p[p[c + 13] + 2];
  V(so, C(1, "i32", w));
  V(Dm, C([ d ], "i32", w));
  V(Em, C([ e ], "i32", w));
  V(Fm, C([ p[c + 16] & 1 ], "i32", w));
  V(Gm, C([ t[c + 18], t[c + 19] ], "double", w));
  V(Hm, C([ t[c + 20], t[c + 21] ], "double", w));
  V(Rn, C([ t[c + 30] ], "double", w));
  V(Sn, C([ p[c + 29] & 1 ], "i32", w));
  V(to, C([ t[c + 31] ], "double", w));
  V(uo, C([ t[c + 32] ], "double", w));
  V(Vn, C([ p[c + 26] & 1 ], "i32", w));
  V(Wn, C([ t[c + 28] ], "double", w));
  V(vo, C([ t[c + 27] ], "double", w));
  V(Lm, C([ p[c + 14] ], "i32", w));
}

ro.X = 1;

function wo(c, d) {
  lm(c, d);
  p[c] = xo + 2;
  var e = c + 18, f = d + 5;
  p[e] = p[f];
  t[e] = t[f];
  p[e + 1] = p[f + 1];
  t[e + 1] = t[f + 1];
  e = c + 20;
  f = d + 7;
  p[e] = p[f];
  t[e] = t[f];
  p[e + 1] = p[f + 1];
  t[e + 1] = t[f + 1];
  t[c + 22] = t[d + 9];
  t[c + 41] = 0;
  t[c + 24] = 0;
  p[c + 42] = 0;
  t[c + 23] = 0;
}

wo.X = 1;

function yo(c, d) {
  var e = b;
  b += 32;
  var f, g, i = e + 2, h;
  f = e + 4;
  var j, k = e + 6, l, m = e + 8, n = e + 10, o = e + 12, r = e + 14, q = e + 16, s = e + 18, u = e + 20, x = e + 22, v = e + 24, y = e + 26, z = e + 28, B = e + 30;
  p[c + 25] = p[p[c + 12] + 2];
  p[c + 26] = p[p[c + 13] + 2];
  h = c + 33;
  l = p[c + 12] + 7;
  p[h] = p[l];
  t[h] = t[l];
  p[h + 1] = p[l + 1];
  t[h + 1] = t[l + 1];
  h = c + 35;
  l = p[c + 13] + 7;
  p[h] = p[l];
  t[h] = t[l];
  p[h + 1] = p[l + 1];
  t[h + 1] = t[l + 1];
  t[c + 37] = t[p[c + 12] + 30];
  t[c + 38] = t[p[c + 13] + 30];
  t[c + 39] = t[p[c + 12] + 32];
  t[c + 40] = t[p[c + 13] + 32];
  h = p[d + 6] + p[c + 25] * 3;
  p[e] = p[h];
  t[e] = t[h];
  p[e + 1] = p[h + 1];
  t[e + 1] = t[h + 1];
  g = t[p[d + 6] + p[c + 25] * 3 + 2];
  h = p[d + 7] + p[c + 25] * 3;
  p[i] = p[h];
  t[i] = t[h];
  p[i + 1] = p[h + 1];
  t[i + 1] = t[h + 1];
  h = t[p[d + 7] + p[c + 25] * 3 + 2];
  l = p[d + 6] + p[c + 26] * 3;
  p[f] = p[l];
  t[f] = t[l];
  p[f + 1] = p[l + 1];
  t[f + 1] = t[l + 1];
  j = t[p[d + 6] + p[c + 26] * 3 + 2];
  l = p[d + 7] + p[c + 26] * 3;
  p[k] = p[l];
  t[k] = t[l];
  p[k + 1] = p[l + 1];
  t[k + 1] = t[l + 1];
  l = t[p[d + 7] + p[c + 26] * 3 + 2];
  Nm(m, g);
  Nm(n, j);
  g = c + 29;
  J(r, c + 18, c + 33);
  U(o, m, r);
  p[g] = p[o];
  t[g] = t[o];
  p[g + 1] = p[o + 1];
  t[g + 1] = t[o + 1];
  m = c + 31;
  J(s, c + 20, c + 35);
  U(q, n, s);
  p[m] = p[q];
  t[m] = t[q];
  p[m + 1] = p[q + 1];
  t[m + 1] = t[q + 1];
  n = c + 27;
  O(v, f, c + 31);
  J(x, v, e);
  J(u, x, c + 29);
  p[n] = p[u];
  t[n] = t[u];
  p[n + 1] = p[u + 1];
  t[n + 1] = t[u + 1];
  f = fd(c + 27);
  t[c + 23] = f;
  f = t[c + 23] - t[c + 22] > 0 ? 1 : 2;
  f == 1 ? p[c + 42] = 2 : f == 2 && (p[c + 42] = 0);
  u = c + 27;
  f = t[c + 23] > .004999999888241291 ? 4 : 5;
  if (f == 4) {
    ci(u, 1 / t[c + 23]);
    f = R(c + 29, c + 27);
    u = R(c + 31, c + 27);
    u = t[c + 37] + t[c + 39] * f * f + t[c + 38] + t[c + 40] * u * u;
    if (u != 0) f = 6; else {
      var E = 0;
      f = 7;
    }
    f == 6 && (E = 1 / u);
    t[c + 41] = E;
    f = p[d + 5] & 1 ? 8 : 9;
    f == 8 ? (t[c + 24] *= t[d + 2], N(y, t[c + 24], c + 27), N(z, t[c + 37], y), Se(i, z), h -= t[c + 39] * R(c + 29, y), N(B, t[c + 38], y), Sb(k, B), l += t[c + 40] * R(c + 31, y)) : f == 9 && (t[c + 24] = 0);
    y = p[d + 7] + p[c + 25] * 3;
    p[y] = p[i];
    t[y] = t[i];
    p[y + 1] = p[i + 1];
    t[y + 1] = t[i + 1];
    t[p[d + 7] + p[c + 25] * 3 + 2] = h;
    i = p[d + 7] + p[c + 26] * 3;
    p[i] = p[k];
    t[i] = t[k];
    p[i + 1] = p[k + 1];
    t[i + 1] = t[k + 1];
    t[p[d + 7] + p[c + 26] * 3 + 2] = l;
  } else f == 5 && (hc(u), t[c + 41] = 0, t[c + 24] = 0);
  b = e;
}

yo.X = 1;

function zo(c, d) {
  var e = b;
  b += 20;
  var f, g = e + 2, i, h = e + 4, j = e + 6, k = e + 8, l = e + 10, m = e + 12, n = e + 14, o = e + 16, r = e + 18;
  f = p[d + 7] + p[c + 25] * 3;
  p[e] = p[f];
  t[e] = t[f];
  p[e + 1] = p[f + 1];
  t[e + 1] = t[f + 1];
  f = t[p[d + 7] + p[c + 25] * 3 + 2];
  i = p[d + 7] + p[c + 26] * 3;
  p[g] = p[i];
  t[g] = t[i];
  p[g + 1] = p[i + 1];
  t[g + 1] = t[i + 1];
  i = t[p[d + 7] + p[c + 26] * 3 + 2];
  Ke(j, f, c + 29);
  O(h, e, j);
  Ke(l, i, c + 31);
  O(k, g, l);
  j = t[c + 23] - t[c + 22];
  l = c + 27;
  J(m, k, h);
  h = K(l, m);
  if ((j < 0 ? 1 : 2) == 1) h += t[d + 1] * j;
  h *= -t[c + 41];
  k = t[c + 24];
  t[c + 24] = 0 < t[c + 24] + h ? 0 : t[c + 24] + h;
  h = t[c + 24] - k;
  N(n, h, c + 27);
  N(o, t[c + 37], n);
  Se(e, o);
  f -= t[c + 39] * R(c + 29, n);
  N(r, t[c + 38], n);
  Sb(g, r);
  i += t[c + 40] * R(c + 31, n);
  n = p[d + 7] + p[c + 25] * 3;
  p[n] = p[e];
  t[n] = t[e];
  p[n + 1] = p[e + 1];
  t[n + 1] = t[e + 1];
  t[p[d + 7] + p[c + 25] * 3 + 2] = f;
  f = p[d + 7] + p[c + 26] * 3;
  p[f] = p[g];
  t[f] = t[g];
  p[f + 1] = p[g + 1];
  t[f + 1] = t[g + 1];
  t[p[d + 7] + p[c + 26] * 3 + 2] = i;
  b = e;
}

zo.X = 1;

function Ao(c) {
  var d, e;
  d = p[p[c + 12] + 2];
  e = p[p[c + 13] + 2];
  V(Bo, C(1, "i32", w));
  V(Dm, C([ d ], "i32", w));
  V(Em, C([ e ], "i32", w));
  V(Fm, C([ p[c + 16] & 1 ], "i32", w));
  V(Gm, C([ t[c + 18], t[c + 19] ], "double", w));
  V(Hm, C([ t[c + 20], t[c + 21] ], "double", w));
  V(Co, C([ t[c + 22] ], "double", w));
  V(Lm, C([ p[c + 14] ], "i32", w));
}

Ao.X = 1;

function Do(c, d) {
  lm(c, d);
  p[c] = Eo + 2;
  var e = c + 21, f = d + 5;
  p[e] = p[f];
  t[e] = t[f];
  p[e + 1] = p[f + 1];
  t[e + 1] = t[f + 1];
  e = c + 23;
  f = d + 7;
  p[e] = p[f];
  t[e] = t[f];
  p[e + 1] = p[f + 1];
  t[e + 1] = t[f + 1];
  t[c + 25] = t[d + 9];
  t[c + 18] = t[d + 10];
  t[c + 19] = t[d + 11];
  Cn(c + 27);
}

Do.X = 1;

function Fo(c, d) {
  var e = b;
  b += 28;
  var f, g = e + 2, i, h = e + 4, j = e + 6, k = e + 8, l = e + 10, m = e + 12, n = e + 14, o = e + 16, r = e + 18, q = e + 20, s = e + 22, u = e + 24, x = e + 26;
  f = p[d + 6] + p[c + 25] * 3;
  p[e] = p[f];
  t[e] = t[f];
  p[e + 1] = p[f + 1];
  t[e + 1] = t[f + 1];
  f = t[p[d + 6] + p[c + 25] * 3 + 2];
  i = p[d + 6] + p[c + 26] * 3;
  p[g] = p[i];
  t[g] = t[i];
  p[g + 1] = p[i + 1];
  t[g + 1] = t[i + 1];
  i = t[p[d + 6] + p[c + 26] * 3 + 2];
  Nm(h, f);
  Nm(j, i);
  J(l, c + 18, c + 33);
  U(k, h, l);
  J(n, c + 20, c + 35);
  U(m, j, n);
  O(q, g, m);
  J(r, q, e);
  J(o, r, k);
  h = ed(o);
  j = h - t[c + 22];
  j = ik(j, 0, .20000000298023224);
  N(s, -t[c + 41] * j, o);
  N(u, t[c + 37], s);
  Se(e, u);
  f -= t[c + 39] * R(k, s);
  N(x, t[c + 38], s);
  Sb(g, x);
  i += t[c + 40] * R(m, s);
  k = p[d + 6] + p[c + 25] * 3;
  p[k] = p[e];
  t[k] = t[e];
  p[k + 1] = p[e + 1];
  t[k + 1] = t[e + 1];
  t[p[d + 6] + p[c + 25] * 3 + 2] = f;
  f = p[d + 6] + p[c + 26] * 3;
  p[f] = p[g];
  t[f] = t[g];
  p[f + 1] = p[g + 1];
  t[f + 1] = t[g + 1];
  t[p[d + 6] + p[c + 26] * 3 + 2] = i;
  g = h - t[c + 22] < .004999999888241291;
  b = e;
  return g;
}

Fo.X = 1;

function Go(c, d) {
  var e = b;
  b += 35;
  var f, g, i = e + 2, h, j = e + 4, k, l = e + 6, m = e + 8, n = e + 10;
  f = e + 12;
  var o = e + 14, r = e + 16, q = e + 18, s = e + 20, u, x = e + 29, v = e + 31, y = e + 33;
  p[c + 30] = p[p[c + 12] + 2];
  p[c + 31] = p[p[c + 13] + 2];
  h = c + 36;
  g = p[c + 12] + 7;
  p[h] = p[g];
  t[h] = t[g];
  p[h + 1] = p[g + 1];
  t[h + 1] = t[g + 1];
  h = c + 38;
  g = p[c + 13] + 7;
  p[h] = p[g];
  t[h] = t[g];
  p[h + 1] = p[g + 1];
  t[h + 1] = t[g + 1];
  t[c + 40] = t[p[c + 12] + 30];
  t[c + 41] = t[p[c + 13] + 30];
  t[c + 42] = t[p[c + 12] + 32];
  t[c + 43] = t[p[c + 13] + 32];
  h = p[d + 6] + p[c + 30] * 3;
  p[e] = p[h];
  t[e] = t[h];
  p[e + 1] = p[h + 1];
  t[e + 1] = t[h + 1];
  g = t[p[d + 6] + p[c + 30] * 3 + 2];
  h = p[d + 7] + p[c + 30] * 3;
  p[i] = p[h];
  t[i] = t[h];
  p[i + 1] = p[h + 1];
  t[i + 1] = t[h + 1];
  h = t[p[d + 7] + p[c + 30] * 3 + 2];
  k = p[d + 6] + p[c + 31] * 3;
  p[j] = p[k];
  t[j] = t[k];
  p[j + 1] = p[k + 1];
  t[j + 1] = t[k + 1];
  k = t[p[d + 6] + p[c + 31] * 3 + 2];
  j = p[d + 7] + p[c + 31] * 3;
  p[l] = p[j];
  t[l] = t[j];
  p[l + 1] = p[j + 1];
  t[l + 1] = t[j + 1];
  j = t[p[d + 7] + p[c + 31] * 3 + 2];
  Nm(m, g);
  Nm(n, k);
  var z = c + 32;
  J(o, c + 21, c + 36);
  U(f, m, o);
  p[z] = p[f];
  t[z] = t[f];
  p[z + 1] = p[f + 1];
  t[z + 1] = t[f + 1];
  m = c + 34;
  J(q, c + 23, c + 38);
  U(r, n, q);
  p[m] = p[r];
  t[m] = t[r];
  p[m + 1] = p[r + 1];
  t[m + 1] = t[r + 1];
  n = t[c + 40];
  r = t[c + 41];
  q = t[c + 42];
  m = t[c + 43];
  t[s] = n + r + t[c + 33] * t[c + 33] * q + t[c + 35] * t[c + 35] * m;
  t[s + 3] = -t[c + 33] * t[c + 32] * q - t[c + 35] * t[c + 34] * m;
  t[s + 6] = -t[c + 33] * q - t[c + 35] * m;
  t[s + 1] = t[s + 3];
  t[s + 4] = n + r + t[c + 32] * t[c + 32] * q + t[c + 34] * t[c + 34] * m;
  t[s + 7] = t[c + 32] * q + t[c + 34] * m;
  t[s + 2] = t[s + 6];
  t[s + 5] = t[s + 7];
  t[s + 8] = q + m;
  f = t[c + 18] > 0 ? 1 : 8;
  if (f == 1) {
    Bi(s, c + 44);
    s = q + m;
    s > 0 ? f = 2 : (u = 0, f = 3);
    f == 2 && (u = 1 / s);
    f = u;
    u = k - g - t[c + 25];
    k = t[c + 18] * 6.2831854820251465;
    g = f * 2 * t[c + 19] * k;
    k *= f * k;
    o = t[d];
    t[c + 26] = o * (g + o * k);
    if (t[c + 26] != 0) f = 4; else {
      var B = 0;
      f = 5;
    }
    f == 4 && (B = 1 / t[c + 26]);
    t[c + 26] = B;
    t[c + 20] = u * o * k * t[c + 26];
    B = s + t[c + 26];
    if (B != 0) f = 6; else {
      var E = 0;
      f = 7;
    }
    f == 6 && (E = 1 / B);
    t[c + 52] = E;
  } else f == 8 && (Fi(s, c + 44), t[c + 26] = 0, t[c + 20] = 0);
  E = c + 27;
  f = p[d + 5] & 1 ? 10 : 11;
  f == 10 ? (En(E, t[d + 2]), tc(x, t[c + 27], t[c + 28]), N(v, n, x), Se(i, v), h -= q * (R(c + 32, x) + t[c + 29]), N(y, r, x), Sb(l, y), j += m * (R(c + 34, x) + t[c + 29])) : f == 11 && Cn(E);
  x = p[d + 7] + p[c + 30] * 3;
  p[x] = p[i];
  t[x] = t[i];
  p[x + 1] = p[i + 1];
  t[x + 1] = t[i + 1];
  t[p[d + 7] + p[c + 30] * 3 + 2] = h;
  i = p[d + 7] + p[c + 31] * 3;
  p[i] = p[l];
  t[i] = t[l];
  p[i + 1] = p[l + 1];
  t[i + 1] = t[l + 1];
  t[p[d + 7] + p[c + 31] * 3 + 2] = j;
  b = e;
}

Go.X = 1;

function Ho(c) {
  var d, e;
  d = p[p[c + 12] + 2];
  e = p[p[c + 13] + 2];
  V(Io, C(1, "i32", w));
  V(Dm, C([ d ], "i32", w));
  V(Em, C([ e ], "i32", w));
  V(Fm, C([ p[c + 16] & 1 ], "i32", w));
  V(Gm, C([ t[c + 21], t[c + 22] ], "double", w));
  V(Hm, C([ t[c + 23], t[c + 24] ], "double", w));
  V(Rn, C([ t[c + 25] ], "double", w));
  V(Jm, C([ t[c + 18] ], "double", w));
  V(Km, C([ t[c + 19] ], "double", w));
  V(Lm, C([ p[c + 14] ], "i32", w));
}

Ho.X = 1;

function Jo(c, d, e) {
  zi(c, t[d] + t[e], t[d + 1] + t[e + 1], t[d + 2] + t[e + 2]);
}

function Ko(c, d, e) {
  zi(c, d * t[e], d * t[e + 1], d * t[e + 2]);
}

function Lo(c, d) {
  var e = b;
  b += 49;
  var f, g, i = e + 2, h, j, k, l, m, n, o = e + 4, r = e + 6, q = e + 8, s = e + 10, u = e + 12, x = e + 14, v = e + 16, y = e + 18, z = e + 20, B = e + 22, E = e + 24, D = e + 26, H = e + 28, I = e + 30, M = e + 32;
  n = e + 34;
  var G = e + 37, S = e + 40, P = e + 43, L = e + 45, T = e + 47;
  g = p[d + 7] + p[c + 30] * 3;
  p[e] = p[g];
  t[e] = t[g];
  p[e + 1] = p[g + 1];
  t[e + 1] = t[g + 1];
  g = t[p[d + 7] + p[c + 30] * 3 + 2];
  h = p[d + 7] + p[c + 31] * 3;
  p[i] = p[h];
  t[i] = t[h];
  p[i + 1] = p[h + 1];
  t[i + 1] = t[h + 1];
  h = t[p[d + 7] + p[c + 31] * 3 + 2];
  j = t[c + 40];
  k = t[c + 41];
  l = t[c + 42];
  m = t[c + 43];
  var F = h;
  f = t[c + 18] > 0 ? 1 : 2;
  f == 1 ? (n = -t[c + 52] * (F - g + t[c + 20] + t[c + 26] * t[c + 29]), t[c + 29] += n, g -= l * n, h += m * n, Ke(s, h, c + 34), O(q, i, s), J(r, q, e), Ke(u, g, c + 32), J(o, r, u), Kn(v, c + 44, o), Xd(x, v), t[c + 27] += t[x], t[c + 28] += t[x + 1], p[y] = p[x], t[y] = t[x], p[y + 1] = p[x + 1], t[y + 1] = t[x + 1], N(z, j, y), Se(e, z), g -= l * R(c + 32, y), N(B, k, y), Sb(i, B), h += m * R(c + 34, y)) : f == 2 && (Ke(I, F, c + 34), O(H, i, I), J(D, H, e), Ke(M, g, c + 32), J(E, D, M), zi(n, t[E], t[E + 1], h - g), o = c + 44, r = b, b += 12, q = r + 3, s = r + 6, u = r + 9, Ko(q, t[n], o), Ko(s, t[n + 1], o + 3), Jo(r, q, s), Ko(u, t[n + 2], o + 6), Jo(S, r, u), b = r, In(G, S), Jn(c + 27, G), tc(P, t[G], t[G + 1]), N(L, j, P), Se(e, L), g -= l * (R(c + 32, P) + t[G + 2]), N(T, k, P), Sb(i, T), h += m * (R(c + 34, P) + t[G + 2]));
  n = p[d + 7] + p[c + 30] * 3;
  p[n] = p[e];
  t[n] = t[e];
  p[n + 1] = p[e + 1];
  t[n + 1] = t[e + 1];
  t[p[d + 7] + p[c + 30] * 3 + 2] = g;
  g = p[d + 7] + p[c + 31] * 3;
  p[g] = p[i];
  t[g] = t[i];
  p[g + 1] = p[i + 1];
  t[g + 1] = t[i + 1];
  t[p[d + 7] + p[c + 31] * 3 + 2] = h;
  b = e;
}

Lo.X = 1;

function Mo(c, d) {
  var e = b;
  b += 60;
  var f, g, i = e + 2, h;
  f = e + 4;
  var j = e + 6, k, l, m, n, o = e + 8, r = e + 10, q = e + 12, s = e + 14, u, x, v = e + 16, y = e + 25, z = e + 27, B = e + 29, E = e + 31, D = e + 33, H = e + 35, I = e + 37, M = e + 39, G = e + 41, S = e + 43, P = e + 45, L = e + 48, T = e + 51, F = e + 54, Z = e + 56, aa = e + 58;
  g = p[d + 6] + p[c + 30] * 3;
  p[e] = p[g];
  t[e] = t[g];
  p[e + 1] = p[g + 1];
  t[e + 1] = t[g + 1];
  g = t[p[d + 6] + p[c + 30] * 3 + 2];
  h = p[d + 6] + p[c + 31] * 3;
  p[i] = p[h];
  t[i] = t[h];
  p[i + 1] = p[h + 1];
  t[i + 1] = t[h + 1];
  h = t[p[d + 6] + p[c + 31] * 3 + 2];
  Nm(f, g);
  Nm(j, h);
  k = t[c + 40];
  l = t[c + 41];
  m = t[c + 42];
  n = t[c + 43];
  J(r, c + 21, c + 36);
  U(o, f, r);
  J(s, c + 23, c + 38);
  U(q, j, s);
  t[v] = k + l + t[o + 1] * t[o + 1] * m + t[q + 1] * t[q + 1] * n;
  t[v + 3] = -t[o + 1] * t[o] * m - t[q + 1] * t[q] * n;
  t[v + 6] = -t[o + 1] * m - t[q + 1] * n;
  t[v + 1] = t[v + 3];
  t[v + 4] = k + l + t[o] * t[o] * m + t[q] * t[q] * n;
  t[v + 7] = t[o] * m + t[q] * n;
  t[v + 2] = t[v + 6];
  t[v + 5] = t[v + 7];
  t[v + 8] = m + n;
  f = t[c + 18] > 0 ? 1 : 2;
  f == 1 ? (O(B, i, q), J(z, B, e), J(y, z, o), u = fd(y), x = 0, Ai(D, v, y), Xd(E, D), N(H, k, E), Se(e, H), g -= m * R(o, E), N(I, l, E), Sb(i, I), h += n * R(q, E)) : f == 2 && (O(S, i, q), J(G, S, e), J(M, G, o), y = h - g - t[c + 25], u = fd(M), x = se(y), zi(P, t[M], t[M + 1], y), Ei(T, v, P), In(L, T), tc(F, t[L], t[L + 1]), N(Z, k, F), Se(e, Z), g -= m * (R(o, F) + t[L + 2]), N(aa, l, F), Sb(i, aa), h += n * (R(q, F) + t[L + 2]));
  o = p[d + 6] + p[c + 30] * 3;
  p[o] = p[e];
  t[o] = t[e];
  p[o + 1] = p[e + 1];
  t[o + 1] = t[e + 1];
  t[p[d + 6] + p[c + 30] * 3 + 2] = g;
  g = p[d + 6] + p[c + 31] * 3;
  p[g] = p[i];
  t[g] = t[i];
  p[g + 1] = p[i + 1];
  t[g + 1] = t[i + 1];
  t[p[d + 6] + p[c + 31] * 3 + 2] = h;
  if (u <= .004999999888241291) f = 4; else {
    var W = 0;
    f = 5;
  }
  f == 4 && (W = x <= .03490658849477768);
  b = e;
  return W;
}

Mo.X = 1;

function No(c, d) {
  var e = b;
  b += 2;
  lm(c, d);
  p[c] = Oo + 2;
  var f = c + 20, g = d + 5;
  p[f] = p[g];
  t[f] = t[g];
  p[f + 1] = p[g + 1];
  t[f + 1] = t[g + 1];
  f = c + 22;
  g = d + 7;
  p[f] = p[g];
  t[f] = t[g];
  p[f + 1] = p[g + 1];
  t[f + 1] = t[g + 1];
  f = c + 24;
  g = d + 9;
  p[f] = p[g];
  t[f] = t[g];
  p[f + 1] = p[g + 1];
  t[f + 1] = t[g + 1];
  f = c + 26;
  Ke(e, 1, c + 24);
  p[f] = p[e];
  t[f] = t[e];
  p[f + 1] = p[e + 1];
  t[f + 1] = t[e + 1];
  t[c + 52] = 0;
  t[c + 28] = 0;
  t[c + 53] = 0;
  t[c + 29] = 0;
  t[c + 54] = 0;
  t[c + 30] = 0;
  t[c + 31] = t[d + 12];
  t[c + 32] = t[d + 13];
  p[c + 33] = p[d + 11] & 1;
  t[c + 18] = t[d + 14];
  t[c + 19] = t[d + 15];
  t[c + 55] = 0;
  t[c + 56] = 0;
  hc(c + 44);
  hc(c + 46);
  b = e;
}

No.X = 1;

function Po(c, d) {
  var e = b;
  b += 44;
  var f, g, i, h, j, k, l = e + 2, m, n = e + 4, o, r = e + 6, q, s = e + 8, u = e + 10, x = e + 12, v = e + 14, y = e + 16, z = e + 18, B = e + 20, E = e + 22, D = e + 24;
  f = e + 26;
  var H = e + 28, I = e + 30, M = e + 32, G = e + 34, S = e + 36, P = e + 38, L = e + 40, T = e + 42;
  p[c + 34] = p[p[c + 12] + 2];
  p[c + 35] = p[p[c + 13] + 2];
  m = c + 36;
  h = p[c + 12] + 7;
  p[m] = p[h];
  t[m] = t[h];
  p[m + 1] = p[h + 1];
  t[m + 1] = t[h + 1];
  m = c + 38;
  h = p[c + 13] + 7;
  p[m] = p[h];
  t[m] = t[h];
  p[m + 1] = p[h + 1];
  t[m + 1] = t[h + 1];
  t[c + 40] = t[p[c + 12] + 30];
  t[c + 41] = t[p[c + 13] + 30];
  t[c + 42] = t[p[c + 12] + 32];
  t[c + 43] = t[p[c + 13] + 32];
  g = t[c + 40];
  i = t[c + 41];
  h = t[c + 42];
  j = t[c + 43];
  m = p[d + 6] + p[c + 34] * 3;
  p[e] = p[m];
  t[e] = t[m];
  p[e + 1] = p[m + 1];
  t[e + 1] = t[m + 1];
  k = t[p[d + 6] + p[c + 34] * 3 + 2];
  m = p[d + 7] + p[c + 34] * 3;
  p[l] = p[m];
  t[l] = t[m];
  p[l + 1] = p[m + 1];
  t[l + 1] = t[m + 1];
  m = t[p[d + 7] + p[c + 34] * 3 + 2];
  q = p[d + 6] + p[c + 35] * 3;
  p[n] = p[q];
  t[n] = t[q];
  p[n + 1] = p[q + 1];
  t[n + 1] = t[q + 1];
  o = t[p[d + 6] + p[c + 35] * 3 + 2];
  q = p[d + 7] + p[c + 35] * 3;
  p[r] = p[q];
  t[r] = t[q];
  p[r + 1] = p[q + 1];
  t[r + 1] = t[q + 1];
  q = t[p[d + 7] + p[c + 35] * 3 + 2];
  Nm(s, k);
  Nm(u, o);
  J(v, c + 20, c + 36);
  U(x, s, v);
  J(z, c + 22, c + 38);
  U(y, u, z);
  O(D, n, y);
  J(E, D, e);
  J(B, E, x);
  n = c + 46;
  U(f, s, c + 26);
  p[n] = p[f];
  t[n] = t[f];
  p[n + 1] = p[f + 1];
  t[n + 1] = t[f + 1];
  O(H, B, x);
  t[c + 50] = R(H, c + 46);
  t[c + 51] = R(y, c + 46);
  t[c + 52] = g + i + h * t[c + 50] * t[c + 50] + j * t[c + 51] * t[c + 51];
  f = t[c + 52] > 0 ? 1 : 2;
  f == 1 && (t[c + 52] = 1 / t[c + 52]);
  t[c + 54] = 0;
  t[c + 55] = 0;
  t[c + 56] = 0;
  f = t[c + 18] > 0 ? 3 : 8;
  f == 3 ? (f = c + 44, U(I, s, c + 24), p[f] = p[I], t[f] = t[I], p[f + 1] = p[I + 1], t[f + 1] = t[I + 1], O(M, B, x), t[c + 48] = R(M, c + 44), t[c + 49] = R(y, c + 44), s = g + i + h * t[c + 48] * t[c + 48] + j * t[c + 49] * t[c + 49], s > 0 && (t[c + 54] = 1 / s, B = K(B, c + 44), y = t[c + 18] * 6.2831854820251465, x = t[c + 54] * 2 * t[c + 19] * y, y *= t[c + 54] * y, I = t[d], t[c + 56] = I * (x + I * y), f = t[c + 56] > 0 ? 5 : 6, f == 5 && (t[c + 56] = 1 / t[c + 56]), t[c + 55] = B * I * y * t[c + 56], t[c + 54] = s + t[c + 56], t[c + 54] > 0 && (t[c + 54] = 1 / t[c + 54]))) : f == 8 && (t[c + 30] = 0);
  f = p[c + 33] & 1 ? 10 : 12;
  f == 10 ? (t[c + 53] = h + j, t[c + 53] > 0 && (t[c + 53] = 1 / t[c + 53])) : f == 12 && (t[c + 53] = 0, t[c + 29] = 0);
  f = p[d + 5] & 1 ? 14 : 15;
  f == 14 ? (t[c + 28] *= t[d + 2], t[c + 30] *= t[d + 2], t[c + 29] *= t[d + 2], N(S, t[c + 28], c + 46), N(P, t[c + 30], c + 44), O(G, S, P), S = t[c + 28] * t[c + 50] + t[c + 30] * t[c + 48] + t[c + 29], P = t[c + 28] * t[c + 51] + t[c + 30] * t[c + 49] + t[c + 29], N(L, t[c + 40], G), Se(l, L), m -= t[c + 42] * S, N(T, t[c + 41], G), Sb(r, T), q += t[c + 43] * P) : f == 15 && (t[c + 28] = 0, t[c + 30] = 0, t[c + 29] = 0);
  G = p[d + 7] + p[c + 34] * 3;
  p[G] = p[l];
  t[G] = t[l];
  p[G + 1] = p[l + 1];
  t[G + 1] = t[l + 1];
  t[p[d + 7] + p[c + 34] * 3 + 2] = m;
  l = p[d + 7] + p[c + 35] * 3;
  p[l] = p[r];
  t[l] = t[r];
  p[l + 1] = p[r + 1];
  t[l + 1] = t[r + 1];
  t[p[d + 7] + p[c + 35] * 3 + 2] = q;
  b = e;
}

Po.X = 1;

function Qo(c, d) {
  var e = b;
  b += 20;
  var f, g, i, h, j, k = e + 2, l, m = e + 4, n, o = e + 6, r = e + 8, q = e + 10, s = e + 12, u = e + 14, x = e + 16, v = e + 18;
  f = t[c + 40];
  g = t[c + 41];
  i = t[c + 42];
  h = t[c + 43];
  j = p[d + 7] + p[c + 34] * 3;
  p[e] = p[j];
  t[e] = t[j];
  p[e + 1] = p[j + 1];
  t[e + 1] = t[j + 1];
  j = t[p[d + 7] + p[c + 34] * 3 + 2];
  l = p[d + 7] + p[c + 35] * 3;
  p[k] = p[l];
  t[k] = t[l];
  p[k + 1] = p[l + 1];
  t[k + 1] = t[l + 1];
  l = t[p[d + 7] + p[c + 35] * 3 + 2];
  n = c + 44;
  J(m, k, e);
  n = -t[c + 54] * (K(n, m) + t[c + 49] * l - t[c + 48] * j + t[c + 55] + t[c + 56] * t[c + 30]);
  t[c + 30] += n;
  N(o, n, c + 44);
  m = n * t[c + 48];
  n *= t[c + 49];
  N(r, f, o);
  Se(e, r);
  j -= i * m;
  N(q, g, o);
  Sb(k, q);
  l += h * n;
  o = -t[c + 53] * (l - j - t[c + 32]);
  r = t[c + 29];
  q = t[d] * t[c + 31];
  t[c + 29] = ik(t[c + 29] + o, -q, q);
  o = t[c + 29] - r;
  j -= i * o;
  l += h * o;
  o = c + 46;
  J(s, k, e);
  o = -t[c + 52] * (K(o, s) + t[c + 51] * l - t[c + 50] * j);
  t[c + 28] += o;
  N(u, o, c + 46);
  s = o * t[c + 50];
  o *= t[c + 51];
  N(x, f, u);
  Se(e, x);
  j -= i * s;
  N(v, g, u);
  Sb(k, v);
  l += h * o;
  f = p[d + 7] + p[c + 34] * 3;
  p[f] = p[e];
  t[f] = t[e];
  p[f + 1] = p[e + 1];
  t[f + 1] = t[e + 1];
  t[p[d + 7] + p[c + 34] * 3 + 2] = j;
  f = p[d + 7] + p[c + 35] * 3;
  p[f] = p[k];
  t[f] = t[k];
  p[f + 1] = p[k + 1];
  t[f + 1] = t[k + 1];
  t[p[d + 7] + p[c + 35] * 3 + 2] = l;
  b = e;
}

Qo.X = 1;

function Ro(c) {
  var d, e;
  d = p[p[c + 12] + 2];
  e = p[p[c + 13] + 2];
  V(So, C(1, "i32", w));
  V(Dm, C([ d ], "i32", w));
  V(Em, C([ e ], "i32", w));
  V(Fm, C([ p[c + 16] & 1 ], "i32", w));
  V(Gm, C([ t[c + 20], t[c + 21] ], "double", w));
  V(Hm, C([ t[c + 22], t[c + 23] ], "double", w));
  V(Qn, C([ t[c + 24], t[c + 25] ], "double", w));
  V(Vn, C([ p[c + 33] & 1 ], "i32", w));
  V(Wn, C([ t[c + 32] ], "double", w));
  V(vo, C([ t[c + 31] ], "double", w));
  V(Jm, C([ t[c + 18] ], "double", w));
  V(Km, C([ t[c + 19] ], "double", w));
  V(Lm, C([ p[c + 14] ], "i32", w));
}

Ro.X = 1;

function To(c, d) {
  var e = b;
  b += 32;
  var f, g, i = e + 2, h, j = e + 4;
  f = e + 6;
  var k = e + 8, l = e + 10, m = e + 12, n = e + 14, o = e + 16, r = e + 18, q = e + 20, s = e + 22, u = e + 24, x, v = e + 26, y = e + 28, z = e + 30;
  g = p[d + 6] + p[c + 34] * 3;
  p[e] = p[g];
  t[e] = t[g];
  p[e + 1] = p[g + 1];
  t[e + 1] = t[g + 1];
  g = t[p[d + 6] + p[c + 34] * 3 + 2];
  h = p[d + 6] + p[c + 35] * 3;
  p[i] = p[h];
  t[i] = t[h];
  p[i + 1] = p[h + 1];
  t[i + 1] = t[h + 1];
  h = t[p[d + 6] + p[c + 35] * 3 + 2];
  Nm(j, g);
  Nm(f, h);
  J(l, c + 20, c + 36);
  U(k, j, l);
  J(n, c + 22, c + 38);
  U(m, f, n);
  J(q, i, e);
  O(r, q, m);
  J(o, r, k);
  U(s, j, c + 26);
  O(u, o, k);
  j = R(u, s);
  m = R(m, s);
  o = K(o, s);
  k = t[c + 40] + t[c + 41] + t[c + 42] * t[c + 50] * t[c + 50] + t[c + 43] * t[c + 51] * t[c + 51];
  f = k != 0 ? 1 : 2;
  f == 1 ? x = -o / k : f == 2 && (x = 0);
  N(v, x, s);
  s = x * j;
  x *= m;
  N(y, t[c + 40], v);
  Se(e, y);
  g -= t[c + 42] * s;
  N(z, t[c + 41], v);
  Sb(i, z);
  h += t[c + 43] * x;
  v = p[d + 6] + p[c + 34] * 3;
  p[v] = p[e];
  t[v] = t[e];
  p[v + 1] = p[e + 1];
  t[v + 1] = t[e + 1];
  t[p[d + 6] + p[c + 34] * 3 + 2] = g;
  g = p[d + 6] + p[c + 35] * 3;
  p[g] = p[i];
  t[g] = t[i];
  p[g + 1] = p[i + 1];
  t[g + 1] = t[i + 1];
  t[p[d + 6] + p[c + 35] * 3 + 2] = h;
  i = se(o) <= .004999999888241291;
  b = e;
  return i;
}

To.X = 1;

function hb(c) {
  var d, e, f, g, i, h, j, k;
  d = c <= 244 ? 1 : 27;
  a : do if (d == 1) if (c < 11 ? (h = 16, d = 3) : d = 2, d == 2 && (h = c + 11 & -8), f = h, g = f >>> 3, i = p[Y] >>> g, d = (i & 3) != 0 ? 4 : 10, d == 4) {
    g += (i ^ -1) & 1;
    e = Y + 10 + (g << 1);
    c = p[e + 2];
    i = p[c + 2];
    d = e == i ? 5 : 6;
    d == 5 ? p[Y] &= 1 << g ^ -1 : d == 6 && (d = i >= p[Y + 4] == 1 != 0 ? 7 : 8, d == 7 ? (p[e + 2] = i, p[i + 3] = e) : d == 8 && (Uo(), a("Reached an unreachable!")));
    p[c + 1] = g << 3 | 3;
    p[c + (g << 3) + 1] |= 1;
    e = c + 8;
    d = 39;
    break a;
  } else {
    if (d == 10) {
      if (f <= p[Y + 2]) {
        d = 31;
        break a;
      }
      d = i != 0 ? 12 : 25;
      if (d == 12) {
        d = (-(1 << g << 1) | 1 << g << 1) & i << g;
        d &= -d;
        d -= 1;
        e = g = d >>> 12 & 16;
        d >>>= g;
        g = d >>> 5 & 8;
        e = (d >>> 5 & 8) + e;
        d >>>= g;
        g = d >>> 2 & 4;
        e = (d >>> 2 & 4) + e;
        d >>>= g;
        g = d >>> 1 & 2;
        e = (d >>> 1 & 2) + e;
        d >>>= g;
        g = d >>> 1 & 1;
        e = (d >>> 1 & 1) + e;
        d >>>= g;
        c = d + e;
        e = Y + 10 + (c << 1);
        g = p[e + 2];
        i = p[g + 2];
        d = e == i ? 13 : 14;
        d == 13 ? p[Y] &= 1 << c ^ -1 : d == 14 && (d = i >= p[Y + 4] == 1 != 0 ? 15 : 16, d == 15 ? (p[e + 2] = i, p[i + 3] = e) : d == 16 && (Uo(), a("Reached an unreachable!")));
        c = (c << 3) - f;
        p[g + 1] = f | 3;
        e = g + f;
        p[e + 1] = c | 1;
        p[e + c] = c;
        h = p[Y + 2];
        d = p[Y + 2] != 0 ? 18 : 24;
        d == 18 && (i = p[Y + 5], h >>>= 3, k = j = Y + 10 + (h << 1), d = (1 << h & p[Y]) != 0 ? 20 : 19, d == 20 ? (d = p[j + 2] >= p[Y + 4] == 1 != 0 ? 21 : 22, d == 21 ? k = p[j + 2] : d == 22 && (Uo(), a("Reached an unreachable!"))) : d == 19 && (p[Y] |= 1 << h), p[j + 2] = i, p[k + 3] = i, p[i + 2] = k, p[i + 3] = j);
        p[Y + 2] = c;
        p[Y + 5] = e;
        e = g + 8;
        d = 39;
        break a;
      } else if (d == 25) {
        if (p[Y + 1] == 0) {
          d = 31;
          break a;
        }
        e = d = Vo(f);
        d = d != 0 ? 39 : 31;
        break a;
      }
    }
  } else if (d == 27) if (d = c >= 4294967232 ? 28 : 29, d == 28) {
    f = -1;
    d = 31;
    break a;
  } else if (d == 29) {
    f = c + 11 & -8;
    if (p[Y + 1] == 0) {
      d = 31;
      break a;
    }
    e = d = Wo(f);
    d = d != 0 ? 39 : 31;
    break a;
  } while (0);
  d == 31 && (d = f <= p[Y + 2] ? 32 : 36, d == 32 ? (e = p[Y + 2] - f, g = p[Y + 5], d = e >= 16 ? 33 : 34, d == 33 ? (p[Y + 5] = g + f, d = g + f, p[Y + 2] = e, p[d + 1] = e | 1, p[d + e] = e, p[g + 1] = f | 3) : d == 34 && (f = p[Y + 2], p[Y + 2] = 0, p[Y + 5] = 0, p[g + 1] = f | 3, p[f + (g + 1)] |= 1), e = g + 8) : d == 36 && (d = f < p[Y + 3] ? 37 : 38, d == 37 ? (g = p[Y + 3] - f, p[Y + 3] = g, d = p[Y + 6], p[Y + 6] = d + f, p[d + f + 1] = g | 1, p[d + 1] = f | 3, e = d + 8) : d == 38 && (e = Xo(f))));
  return e;
}

hb.X = 1;

function Vo(c) {
  var d, e, f, g, i, h, j, k, l, m;
  e = Y;
  g = (-p[e + 1] & p[e + 1]) - 1;
  d = i = g >>> 12 & 16;
  g >>>= i;
  d = (g >>> 5 & 8) + d;
  g >>>= g >>> 5 & 8;
  d = (g >>> 2 & 4) + d;
  g >>>= g >>> 2 & 4;
  d = (g >>> 1 & 2) + d;
  g >>>= g >>> 1 & 2;
  d = (g >>> 1 & 1) + d;
  g >>>= g >>> 1 & 1;
  g += d;
  f = p[e + (g + 76)];
  g = p[e + (g + 76)];
  for (i = (p[f + 1] & -8) - c; ; ) {
    d = p[f + 4] != 0 ? 2 : 3;
    d == 2 ? h = p[f + 4] : d == 3 && (h = p[f + 5]);
    f = h;
    if (h == 0) break;
    d = (p[f + 1] & -8) - c;
    d < i && (i = d, g = f);
  }
  d = g >= p[e + 4] == 1 != 0 ? 8 : 52;
  do if (d == 8) if (h = g + c, g < h == 1 == 0) d = 52; else {
    f = p[g + 6];
    m = g;
    d = p[g + 3] != g ? 10 : 13;
    a : do if (d == 10) k = p[m + 2], j = p[g + 3], d = k >= p[e + 4] == 1 != 0 ? 11 : 12, d == 11 ? (p[k + 3] = j, p[j + 2] = k) : d == 12 && (Uo(), a("Reached an unreachable!")); else if (d == 13) {
      k = m + 5;
      j = p[m + 5];
      d = p[m + 5] != 0 ? 15 : 14;
      if (d == 14 && (k = g + 4, j = p[g + 4], p[g + 4] == 0)) break a;
      b : for (;;) {
        l = j + 5;
        d = p[j + 5] != 0 ? 17 : 16;
        if (d == 16 && (l = j + 4, p[j + 4] == 0)) break b;
        k = l;
        j = p[l];
      }
      d = k >= p[e + 4] == 1 != 0 ? 19 : 20;
      d == 19 ? p[k] = 0 : d == 20 && (Uo(), a("Reached an unreachable!"));
    } while (0);
    d = f != 0 ? 22 : 41;
    a : do if (d == 22) if (m = e + 76 + p[g + 7], d = g == p[m] ? 23 : 25, d == 23 ? (p[m] = j, j != 0 || (p[e + 1] &= 1 << p[g + 7] ^ -1)) : d == 25 && (d = f >= p[e + 4] == 1 != 0 ? 26 : 29, d == 26 ? (d = p[f + 4] == g ? 27 : 28, d == 27 ? p[f + 4] = j : d == 28 && (p[f + 5] = j)) : d == 29 && (Uo(), a("Reached an unreachable!"))), j == 0) d = 41; else if (d = j >= p[e + 4] == 1 != 0 ? 32 : 40, d == 32) {
      p[j + 6] = f;
      m = p[g + 4];
      d = p[g + 4] != 0 ? 33 : 36;
      d == 33 && (d = m >= p[e + 4] == 1 != 0 ? 34 : 35, d == 34 ? (p[j + 4] = m, p[m + 6] = j) : d == 35 && (Uo(), a("Reached an unreachable!")));
      m = p[g + 5];
      if (p[g + 5] == 0) break a;
      d = m >= p[e + 4] == 1 != 0 ? 38 : 39;
      d == 38 ? (p[j + 5] = m, p[m + 6] = j) : d == 39 && (Uo(), a("Reached an unreachable!"));
    } else d == 40 && (Uo(), a("Reached an unreachable!")); while (0);
    d = i < 16 ? 42 : 43;
    d == 42 ? (p[g + 1] = c + i | 3, p[i + (c + (g + 1))] |= 1) : d == 43 && (p[g + 1] = c | 3, p[h + 1] = i | 1, p[h + i] = i, j = p[e + 2], d = j != 0 ? 44 : 50, d == 44 && (c = p[e + 5], j >>>= 3, m = f = e + 10 + (j << 1), d = (1 << j & p[e]) != 0 ? 46 : 45, d == 46 ? (d = p[f + 2] >= p[e + 4] == 1 != 0 ? 47 : 48, d == 47 ? m = p[f + 2] : d == 48 && (Uo(), a("Reached an unreachable!"))) : d == 45 && (p[e] |= 1 << j), p[f + 2] = c, p[m + 3] = c, p[c + 2] = m, p[c + 3] = f), p[e + 2] = i, p[e + 5] = h);
    return g + 8;
  } while (0);
  Uo();
  a("Reached an unreachable!");
}

Vo.X = 1;

function Wo(c) {
  var d, e, f, g, i, h, j, k, l, m, n, o, r, q, s, u, x, v, y;
  f = Y;
  g = 0;
  i = -c;
  h = c >>> 8;
  d = h == 0 ? 1 : 2;
  d == 1 ? j = 0 : d == 2 && (d = h > 65535 ? 3 : 4, d == 3 ? j = 31 : d == 4 && (d = h - 256 >>> 16 & 8, j = h << d, h = j - 4096 >>> 16 & 4, d += h, h = j << h, j = h - 16384 >>> 16 & 2, h = -(j + d) + 14 + (h << j >>> 15), j = (c >>> h + 7 & 1) + (h << 1)));
  h = p[f + (j + 76)];
  d = p[f + (j + 76)] != 0 ? 6 : 18;
  do if (d == 6) {
    j == 31 ? (o = 0, d = 8) : d = 7;
    d == 7 && (o = -(j >>> 1) + 25);
    k = c << o;
    l = 0;
    a : for (;;) {
      m = (p[h + 1] & -8) - c;
      d = m < i ? 10 : 11;
      if (d == 10 && (g = h, i = m, m == 0)) {
        s = h;
        d = 17;
        break a;
      }
      m = p[h + 5];
      h = d = p[h + 4 + (k >>> 31 & 1)];
      if (m != 0) d = 12; else {
        var z = d;
        d = 14;
      }
      d == 12 && (m == h ? (z = h, d = 14) : (l = m, z = h));
      if (z == 0) {
        d = 15;
        break;
      }
      k <<= 1;
    }
    d == 15 && (s = h = l);
    d = s == 0 ? 18 : 21;
  } while (0);
  d == 18 && (g != 0 ? d = 21 : (d = (-(1 << j << 1) | 1 << j << 1) & p[f + 1], d == 0 ? d = 21 : (d = (-d & d) - 1, o = n = d >>> 12 & 16, d >>>= n, o = (d >>> 5 & 8) + o, d >>>= d >>> 5 & 8, o = (d >>> 2 & 4) + o, d >>>= d >>> 2 & 4, o = (d >>> 1 & 2) + o, d >>>= d >>> 1 & 2, o = (d >>> 1 & 1) + o, d >>>= d >>> 1 & 1, d += o, h = p[f + (d + 76)], n = p[f + (d + 76)], d = 22)));
  d == 21 && (n = h);
  d = n != 0 ? 23 : 29;
  a : do if (d == 23) for (;;) if (n = (p[h + 1] & -8) - c, d = n < i ? 24 : 25, d == 24 && (i = n, g = h), d = p[h + 4] != 0 ? 26 : 27, d == 26 ? r = p[h + 4] : d == 27 && (r = p[h + 5]), h = r, r == 0) break a; while (0);
  d = g != 0 ? 30 : 97;
  a : do if (d == 30) {
    if (i < p[f + 2] - c) {
      d = g >= p[f + 4] == 1 != 0 ? 32 : 96;
      do if (d == 32) if (r = g + c, g < r == 1 == 0) d = 96; else {
        e = p[g + 6];
        n = g;
        d = p[g + 3] != g ? 34 : 37;
        b : do if (d == 34) o = p[n + 2], q = p[g + 3], d = o >= p[f + 4] == 1 != 0 ? 35 : 36, d == 35 ? (p[o + 3] = q, p[q + 2] = o) : d == 36 && (Uo(), a("Reached an unreachable!")); else if (d == 37) {
          o = n + 5;
          q = p[n + 5];
          d = p[n + 5] != 0 ? 39 : 38;
          if (d == 38 && (o = g + 4, q = p[g + 4], p[g + 4] == 0)) break b;
          c : for (;;) {
            s = q + 5;
            d = p[q + 5] != 0 ? 41 : 40;
            if (d == 40 && (s = q + 4, p[q + 4] == 0)) break c;
            o = s;
            q = p[s];
          }
          d = o >= p[f + 4] == 1 != 0 ? 43 : 44;
          d == 43 ? p[o] = 0 : d == 44 && (Uo(), a("Reached an unreachable!"));
        } while (0);
        d = e != 0 ? 46 : 65;
        b : do if (d == 46) if (n = f + 76 + p[g + 7], d = g == p[n] ? 47 : 49, d == 47 ? (p[n] = q, q != 0 || (p[f + 1] &= 1 << p[g + 7] ^ -1)) : d == 49 && (d = e >= p[f + 4] == 1 != 0 ? 50 : 53, d == 50 ? (d = p[e + 4] == g ? 51 : 52, d == 51 ? p[e + 4] = q : d == 52 && (p[e + 5] = q)) : d == 53 && (Uo(), a("Reached an unreachable!"))), q == 0) d = 65; else if (d = q >= p[f + 4] == 1 != 0 ? 56 : 64, d == 56) {
          p[q + 6] = e;
          n = p[g + 4];
          d = p[g + 4] != 0 ? 57 : 60;
          d == 57 && (d = n >= p[f + 4] == 1 != 0 ? 58 : 59, d == 58 ? (p[q + 4] = n, p[n + 6] = q) : d == 59 && (Uo(), a("Reached an unreachable!")));
          n = p[g + 5];
          if (p[g + 5] == 0) break b;
          d = n >= p[f + 4] == 1 != 0 ? 62 : 63;
          d == 62 ? (p[q + 5] = n, p[n + 6] = q) : d == 63 && (Uo(), a("Reached an unreachable!"));
        } else d == 64 && (Uo(), a("Reached an unreachable!")); while (0);
        d = i < 16 ? 66 : 67;
        if (d == 66) p[g + 1] = c + i | 3, p[i + (c + (g + 1))] |= 1; else if (d == 67) if (p[g + 1] = c | 3, p[r + 1] = i | 1, p[r + i] = i, d = i >>> 3 < 32 ? 68 : 74, d == 68) u = i >>> 3, x = i = f + 10 + (u << 1), d = (1 << u & p[f]) != 0 ? 70 : 69, d == 70 ? (d = p[i + 2] >= p[f + 4] == 1 != 0 ? 71 : 72, d == 71 ? x = p[i + 2] : d == 72 && (Uo(), a("Reached an unreachable!"))) : d == 69 && (p[f] |= 1 << u), p[i + 2] = r, p[x + 3] = r, p[r + 2] = x, p[r + 3] = i; else if (d == 74) if (c = r, q = i >>> 8, d = q == 0 ? 75 : 76, d == 75 ? v = 0 : d == 76 && (d = q > 65535 ? 77 : 78, d == 77 ? v = 31 : d == 78 && (v = q, q = v - 256 >>> 16 & 8, v = d = v << q, d = d - 4096 >>> 16 & 4, q += d, v = d = v << d, d = e = d - 16384 >>> 16 & 2, q = e + q, d = -q + 14 + (v << d >>> 15), v = (i >>> d + 7 & 1) + (d << 1))), q = v + (f + 76), p[c + 7] = v, p[c + 5] = 0, p[c + 4] = 0, d = (1 << v & p[f + 1]) != 0 ? 81 : 80, d == 81) {
          q = p[q];
          v == 31 ? (y = 0, d = 83) : d = 82;
          d == 82 && (y = -(v >>> 1) + 25);
          for (y = i << y; ; ) {
            if ((p[q + 1] & -8) == i) {
              d = 90;
              break;
            }
            x = q + 4 + (y >>> 31 & 1);
            y <<= 1;
            var B = x;
            if (p[x] == 0) {
              d = 87;
              break;
            }
            q = p[B];
          }
          d == 90 ? (i = p[q + 2], q >= p[f + 4] ? d = 91 : (u = 0, d = 92), d == 91 && (u = i >= p[f + 4]), d = u == 1 != 0 ? 93 : 94, d == 93 ? (p[i + 3] = c, p[q + 2] = c, p[c + 2] = i, p[c + 3] = q, p[c + 6] = 0) : d == 94 && (Uo(), a("Reached an unreachable!"))) : d == 87 && (d = B >= p[f + 4] == 1 != 0 ? 88 : 89, d == 88 ? (p[x] = c, p[c + 6] = q, p[c + 3] = c, p[c + 2] = c) : d == 89 && (Uo(), a("Reached an unreachable!")));
        } else d == 80 && (p[f + 1] |= 1 << v, p[q] = c, p[c + 6] = q, p[c + 3] = c, p[c + 2] = c);
        e = g + 8;
        d = 98;
        break a;
      } while (0);
      Uo();
      a("Reached an unreachable!");
    }
    d = 97;
  } while (0);
  d == 97 && (e = 0);
  return e;
}

Wo.X = 1;

function Xo(c) {
  var d, e, f, g, i, h, j, k;
  f = Y;
  g = -1;
  h = i = 0;
  d = p[Yo] != 0 ? 2 : 1;
  d == 1 && Zo();
  d = (p[f + 110] & 1) != 0 ? 3 : 7;
  d == 3 && (c >= p[Yo + 3] ? p[f + 3] == 0 ? d = 7 : (d = $o(f, c), d == 0 ? d = 7 : (e = d, d = 82)) : d = 7);
  a : do if (d == 7) {
    d = (p[f + 110] & 4) != 0 ? 33 : 8;
    b : do if (d == 8) {
      e = -1;
      d = p[f + 6] == 0 ? 9 : 10;
      if (d == 9) j = 0, d = 11; else if (d == 10) if (d = k = ap(f, p[f + 6]), j = 0, k == 0) d = 11; else if (j = (p[Yo + 2] - 1 ^ -1) & c + 47 + -p[f + 3] + p[Yo + 2], j < 2147483647) if (e = k = bp(j), k != p[d] + p[d + 1]) d = 21; else {
        g = e;
        i = j;
        var l = e;
        d = 22;
      } else d = 21;
      if (d == 11) if (k = d = bp(0), d == -1) d = 21; else {
        j = (p[Yo + 2] - 1 ^ -1) & c + 47 + p[Yo + 2];
        d = (p[Yo + 1] - 1 & k) == 0 ? 14 : 13;
        if (d == 14) var m = j; else d == 13 && (j = m = (k - 1 + p[Yo + 1] & (p[Yo + 1] - 1 ^ -1)) - k + j);
        m < 2147483647 ? (e = d = bp(j), d != k ? d = 21 : (g = k, i = j, l = k, d = 22)) : d = 21;
      }
      d == 21 && (l = g);
      if (l == -1) {
        d = e != -1 ? 24 : 32;
        c : do if (d == 24) {
          d = j < 2147483647 ? 25 : 30;
          do if (d == 25) if (j < c + 48) if (k = (p[Yo + 2] - 1 ^ -1) & c + 47 + -j + p[Yo + 2], k < 2147483647) if (d = bp(k), d = d != -1 ? 28 : 29, d == 28) j += k; else {
            if (d == 29) {
              bp(-j);
              break c;
            }
          } else d = 30; else d = 30; while (0);
          if (e == -1) d = 32; else {
            g = e;
            i = j;
            var n = e;
            d = 34;
            break b;
          }
        } while (0);
        p[f + 110] |= 4;
      }
      d = 33;
    } while (0);
    d == 33 && (n = g);
    d = n == -1 ? 35 : 38;
    if (d == 35) if (e = (p[Yo + 2] - 1 ^ -1) & c + 47 + p[Yo + 2], e > c) if (d = cp(e), d == -1) d = 38; else {
      g = d;
      i = e;
      h = 1;
      var o = d;
      d = 39;
    } else d = 38;
    d == 38 && (o = g);
    d = o == -1 ? 40 : 46;
    if (d == 40) if (e = (p[Yo + 2] - 1 ^ -1) & c + 47 + p[Yo + 2], e < 2147483647) if (e = bp(e), d = bp(0), e == -1) d = 46; else if (d == -1) d = 46; else if (e < d) if (d -= e, d > c + 40) {
      g = e;
      i = d;
      var r = e;
      d = 47;
    } else d = 46; else d = 46; else d = 46;
    d == 46 && (r = g);
    d = r != -1 ? 48 : 81;
    do if (d == 48) {
      e = p[f + 108] + i;
      p[f + 108] = e;
      d = e > p[f + 109] ? 49 : 50;
      d == 49 && (p[f + 109] = p[f + 108]);
      e = f;
      d = p[f + 6] != 0 ? 57 : 51;
      b : do if (d == 57) {
        k = e + 111;
        for (var q = e + 111; ; ) {
          if (q == 0) {
            d = 59;
            break;
          }
          q = k;
          if (g == p[k] + p[k + 1]) {
            var s = q;
            d = 62;
            break;
          }
          k = q = p[q + 2];
        }
        d == 59 && (s = k);
        d = s != 0 ? 63 : 68;
        do if (d == 63) if ((p[k + 3] & 8) != 0) d = 68; else if ((p[k + 3] & 1) != h) d = 68; else if (p[f + 6] >= p[k]) if (p[f + 6] < p[k] + p[k + 1]) {
          p[k + 1] += i;
          dp(f, p[f + 6], i + p[f + 3]);
          break b;
        } else d = 68; else d = 68; while (0);
        d = g < p[f + 4] ? 69 : 70;
        d == 69 && (p[f + 4] = g);
        k = f + 111;
        for (q = f + 111; ; ) {
          d = k;
          if (q == 0) {
            var u = d;
            break;
          }
          q = k;
          if (p[d] == g + i) {
            u = q;
            break;
          }
          q = k = d = p[q + 2];
        }
        d = u != 0 ? 75 : 78;
        do if (d == 75) if ((p[k + 3] & 8) != 0) d = 78; else if ((p[k + 3] & 1) != h) d = 78; else {
          h = p[k];
          p[k] = g;
          p[k + 1] += i;
          e = ep(f, g, h, c);
          break a;
        } while (0);
        fp(f, g, i, h);
      } else if (d == 51) {
        d = p[e + 4] == 0 ? 53 : 52;
        d == 52 && (d = g < p[f + 4] ? 53 : 54);
        d == 53 && (p[f + 4] = g);
        p[f + 111] = g;
        p[f + 112] = i;
        p[f + 114] = h;
        p[f + 9] = p[Yo];
        p[f + 8] = 4095;
        d = f;
        q = k = da;
        for (k = 0; ; ) if (q = d + 10 + (k << 1), p[q + 3] = q, p[q + 2] = q, k = q = k + 1, q >= 32) break;
        d = f == Y ? 55 : 56;
        d == 55 ? dp(f, g, i - 40) : d == 56 && (k = f - 8 + (p[f - 8 + 1] & -8), dp(f, k, g + i - 40 + -k));
      } while (0);
      if (c < p[f + 3]) {
        g = p[f + 3] - c;
        p[f + 3] = g;
        i = p[f + 6];
        p[f + 6] = i + c;
        f = i + c;
        p[f + 1] = g | 1;
        p[i + 1] = c | 3;
        e = i + 8;
        break a;
      } else d = 81;
    } while (0);
    p[gp] = 12;
    e = 0;
  } while (0);
  return e;
}

Xo.X = 1;

function vc(c) {
  var d, e, f, g, i, h, j, k, l, m, n, o, r, q, s, u, x;
  d = c != 0 ? 1 : 141;
  a : do if (d == 1) {
    e = c - 8;
    if (e >= p[Y + 4]) d = 2; else {
      var v = 0;
      d = 3;
    }
    d == 2 && (v = (p[e + 1] & 3) != 1);
    d = v == 1 != 0 ? 4 : 140;
    b : do if (d == 4) {
      f = p[e + 1] & -8;
      g = e + f;
      d = (p[e + 1] & 1) != 0 ? 54 : 5;
      c : do if (d == 5) if (i = p[e], d = (p[e + 1] & 3) == 0 ? 6 : 8, d == 6) {
        vc(e + -i);
        break a;
      } else if (d == 8) {
        h = e + -i;
        f += i;
        e = h;
        if (h >= p[Y + 4] == 1 == 0) break b;
        d = e != p[Y + 5] ? 10 : 52;
        if (d == 10) if (h = e, d = i >>> 3 < 32 ? 11 : 20, d == 11) if (h = p[h + 2], j = p[e + 3], i >>>= 3, d = h == j ? 12 : 13, d == 12) p[Y] &= 1 << i ^ -1; else {
          if (d == 13) {
            d = h == Y + 10 + (i << 1) ? 15 : 14;
            if (d == 14) if (h >= p[Y + 4]) d = 15; else {
              var y = 0;
              d = 17;
            }
            d == 15 && (y = j == Y + 10 + (i << 1) ? 1 : j >= p[Y + 4]);
            d = y == 1 != 0 ? 18 : 19;
            d == 18 ? (p[h + 3] = j, p[j + 2] = h) : d == 19 && (Uo(), a("Reached an unreachable!"));
          }
        } else {
          if (d == 20) {
            i = h;
            h = p[i + 6];
            j = i;
            d = p[i + 3] != i ? 21 : 24;
            d : do if (d == 21) l = p[j + 2], k = p[i + 3], d = l >= p[Y + 4] == 1 != 0 ? 22 : 23, d == 22 ? (p[l + 3] = k, p[k + 2] = l) : d == 23 && (Uo(), a("Reached an unreachable!")); else if (d == 24) {
              l = j + 5;
              k = p[j + 5];
              d = p[j + 5] != 0 ? 26 : 25;
              if (d == 25 && (l = i + 4, k = p[i + 4], p[i + 4] == 0)) break d;
              e : for (;;) {
                m = k + 5;
                d = p[k + 5] != 0 ? 28 : 27;
                if (d == 27 && (m = k + 4, p[k + 4] == 0)) break e;
                l = m;
                k = p[m];
              }
              d = l >= p[Y + 4] == 1 != 0 ? 30 : 31;
              d == 30 ? p[l] = 0 : d == 31 && (Uo(), a("Reached an unreachable!"));
            } while (0);
            if (h == 0) break c;
            j = Y + 76 + p[i + 7];
            d = i == p[j] ? 34 : 36;
            d == 34 ? (p[j] = k, k != 0 || (p[Y + 1] &= 1 << p[i + 7] ^ -1)) : d == 36 && (d = h >= p[Y + 4] == 1 != 0 ? 37 : 40, d == 37 ? (d = p[h + 4] == i ? 38 : 39, d == 38 ? p[h + 4] = k : d == 39 && (p[h + 5] = k)) : d == 40 && (Uo(), a("Reached an unreachable!")));
            if (k == 0) break c;
            d = k >= p[Y + 4] == 1 != 0 ? 43 : 51;
            if (d == 43) {
              p[k + 6] = h;
              h = p[i + 4];
              d = p[i + 4] != 0 ? 44 : 47;
              d == 44 && (d = h >= p[Y + 4] == 1 != 0 ? 45 : 46, d == 45 ? (p[k + 4] = h, p[h + 6] = k) : d == 46 && (Uo(), a("Reached an unreachable!")));
              h = p[i + 5];
              if (p[i + 5] == 0) break c;
              d = h >= p[Y + 4] == 1 != 0 ? 49 : 50;
              d == 49 ? (p[k + 5] = h, p[h + 6] = k) : d == 50 && (Uo(), a("Reached an unreachable!"));
            } else d == 51 && (Uo(), a("Reached an unreachable!"));
          }
        } else if (d == 52) {
          if ((p[g + 1] & 3) != 3) break c;
          p[Y + 2] = f;
          p[g + 1] &= -2;
          p[e + 1] = f | 1;
          p[e + f] = f;
          break a;
        }
      } while (0);
      if (e < g) d = 55; else {
        var z = 0;
        d = 56;
      }
      d == 55 && (z = (p[g + 1] & 1) != 0);
      if (z == 1 == 0) d = 140; else {
        i = g;
        d = (p[g + 1] & 2) != 0 ? 109 : 58;
        c : do if (d == 109) p[i + 1] &= -2, p[e + 1] = f | 1, p[e + f] = f; else if (d == 58) if (d = i == p[Y + 6] ? 59 : 63, d == 59) {
          n = p[Y + 3] + f;
          p[Y + 3] = n;
          p[Y + 6] = e;
          p[e + 1] = n | 1;
          d = e == p[Y + 5] ? 60 : 61;
          d == 60 && (p[Y + 5] = 0, p[Y + 2] = 0);
          if (n <= p[Y + 7]) break a;
          hp(0);
          break a;
        } else if (d == 63) if (d = g == p[Y + 5] ? 64 : 65, d == 64) {
          n = p[Y + 2] + f;
          p[Y + 2] = n;
          p[Y + 5] = e;
          p[e + 1] = n | 1;
          p[e + n] = n;
          break a;
        } else if (d == 65) {
          i = p[g + 1] & -8;
          f += i;
          h = g;
          d = i >>> 3 < 32 ? 66 : 75;
          d : do if (d == 66) if (j = p[h + 2], l = p[g + 3], m = i >>> 3, d = j == l ? 67 : 68, d == 67) p[Y] &= 1 << m ^ -1; else {
            if (d == 68) {
              d = j == Y + 10 + (m << 1) ? 70 : 69;
              if (d == 69) if (j >= p[Y + 4]) d = 70; else {
                var B = 0;
                d = 72;
              }
              d == 70 && (B = l == Y + 10 + (m << 1) ? 1 : l >= p[Y + 4]);
              d = B == 1 != 0 ? 73 : 74;
              d == 73 ? (p[j + 3] = l, p[l + 2] = j) : d == 74 && (Uo(), a("Reached an unreachable!"));
            }
          } else if (d == 75) {
            j = h;
            l = p[j + 6];
            m = j;
            d = p[j + 3] != j ? 76 : 79;
            e : do if (d == 76) r = p[m + 2], o = p[j + 3], d = r >= p[Y + 4] == 1 != 0 ? 77 : 78, d == 77 ? (p[r + 3] = o, p[o + 2] = r) : d == 78 && (Uo(), a("Reached an unreachable!")); else if (d == 79) {
              r = m + 5;
              o = p[m + 5];
              d = p[m + 5] != 0 ? 81 : 80;
              if (d == 80 && (r = j + 4, o = p[j + 4], p[j + 4] == 0)) break e;
              f : for (;;) {
                q = o + 5;
                d = p[o + 5] != 0 ? 83 : 82;
                if (d == 82 && (q = o + 4, p[o + 4] == 0)) break f;
                r = q;
                o = p[q];
              }
              d = r >= p[Y + 4] == 1 != 0 ? 85 : 86;
              d == 85 ? p[r] = 0 : d == 86 && (Uo(), a("Reached an unreachable!"));
            } while (0);
            if (l == 0) d = 107; else if (m = Y + 76 + p[j + 7], d = j == p[m] ? 89 : 91, d == 89 ? (p[m] = o, o != 0 || (p[Y + 1] &= 1 << p[j + 7] ^ -1)) : d == 91 && (d = l >= p[Y + 4] == 1 != 0 ? 92 : 95, d == 92 ? (d = p[l + 4] == j ? 93 : 94, d == 93 ? p[l + 4] = o : d == 94 && (p[l + 5] = o)) : d == 95 && (Uo(), a("Reached an unreachable!"))), o == 0) d = 107; else if (d = o >= p[Y + 4] == 1 != 0 ? 98 : 106, d == 98) {
              p[o + 6] = l;
              l = p[j + 4];
              d = p[j + 4] != 0 ? 99 : 102;
              d == 99 && (d = l >= p[Y + 4] == 1 != 0 ? 100 : 101, d == 100 ? (p[o + 4] = l, p[l + 6] = o) : d == 101 && (Uo(), a("Reached an unreachable!")));
              l = p[j + 5];
              if (p[j + 5] == 0) break d;
              d = l >= p[Y + 4] == 1 != 0 ? 104 : 105;
              d == 104 ? (p[o + 5] = l, p[l + 6] = o) : d == 105 && (Uo(), a("Reached an unreachable!"));
            } else d == 106 && (Uo(), a("Reached an unreachable!"));
          } while (0);
          p[e + 1] = f | 1;
          p[e + f] = f;
          if (e != p[Y + 5]) break c;
          p[Y + 2] = f;
          break a;
        } while (0);
        d = f >>> 3 < 32 ? 111 : 117;
        if (d == 111) {
          n = f >>> 3;
          s = f = Y + 10 + (n << 1);
          d = (1 << n & p[Y]) != 0 ? 113 : 112;
          d == 113 ? (d = p[f + 2] >= p[Y + 4] == 1 != 0 ? 114 : 115, d == 114 ? s = p[f + 2] : d == 115 && (Uo(), a("Reached an unreachable!"))) : d == 112 && (p[Y] |= 1 << n);
          p[f + 2] = e;
          p[s + 3] = e;
          p[e + 2] = s;
          p[e + 3] = f;
          break a;
        } else if (d == 117) {
          c = f >>> 8;
          d = c == 0 ? 118 : 119;
          d == 118 ? u = 0 : d == 119 && (d = c > 65535 ? 120 : 121, d == 120 ? u = 31 : d == 121 && (d = c, u = d - 256 >>> 16 & 8, d = c = d << u, c = c - 4096 >>> 16 & 4, u += c, d = c = d << c, c = g = c - 16384 >>> 16 & 2, u = g + u, c = -u + 14 + (d << c >>> 15), u = (f >>> c + 7 & 1) + (c << 1)));
          c = u + (Y + 76);
          p[e + 7] = u;
          p[e + 5] = 0;
          p[e + 4] = 0;
          d = (1 << u & p[Y + 1]) != 0 ? 124 : 123;
          if (d == 124) {
            c = p[c];
            u == 31 ? (x = 0, d = 126) : d = 125;
            d == 125 && (x = -(u >>> 1) + 25);
            for (x = f << x; ; ) {
              if ((p[c + 1] & -8) == f) {
                d = 133;
                break;
              }
              s = c + 4 + (x >>> 31 & 1);
              x <<= 1;
              var E = s;
              if (p[s] == 0) {
                d = 130;
                break;
              }
              c = p[E];
            }
            d == 133 ? (f = p[c + 2], c >= p[Y + 4] ? d = 134 : (n = 0, d = 135), d == 134 && (n = f >= p[Y + 4]), d = n == 1 != 0 ? 136 : 137, d == 136 ? (p[f + 3] = e, p[c + 2] = e, p[e + 2] = f, p[e + 3] = c, p[e + 6] = 0) : d == 137 && (Uo(), a("Reached an unreachable!"))) : d == 130 && (d = E >= p[Y + 4] == 1 != 0 ? 131 : 132, d == 131 ? (p[s] = e, p[e + 6] = c, p[e + 3] = e, p[e + 2] = e) : d == 132 && (Uo(), a("Reached an unreachable!")));
          } else d == 123 && (p[Y + 1] |= 1 << u, p[c] = e, p[e + 6] = c, p[e + 3] = e, p[e + 2] = e);
          n = p[Y + 8] - 1;
          p[Y + 8] = n;
          if (n != 0) break a;
          ip(Y);
          break a;
        }
      }
    } while (0);
    Uo();
    a("Reached an unreachable!");
  } while (0);
}

vc.X = 1;

function hp(c) {
  var d, e, f, g, i, h;
  e = Y;
  f = 0;
  d = p[Yo] != 0 ? 2 : 1;
  d == 1 && Zo();
  d = c < 4294967232 ? 3 : 24;
  do if (d == 3) if (p[e + 6] == 0) d = 24; else {
    c += 40;
    d = p[e + 3] > c ? 5 : 21;
    do if (d == 5) {
      g = p[Yo + 2];
      i = (Math.floor((p[e + 3] - 1 + -c + g) / g) - 1) * g;
      h = ap(e, p[e + 6]);
      d = (p[h + 3] & 8) != 0 ? 18 : 6;
      a : do if (d == 6) if (d = (p[h + 3] & 1) != 0 ? 7 : 12, d == 7) {
        if (!(p[h + 1] >= i)) {
          d = 18;
          break a;
        }
        var j = g = d = da, j = e + 111;
        b : for (;;) {
          d = j >= p[h] ? 2 : 4;
          if (d == 2 && j < p[h] + p[h + 1]) {
            d = 3;
            break b;
          }
          var k = p[j + 2], j = k;
          if (k == 0) {
            d = 5;
            break;
          }
        }
        d == 3 ? g = 1 : d == 5 && (g = 0);
        if (g != 0) {
          d = 18;
          break a;
        }
        g = p[h + 1] - i;
        d = jp(p[h], p[h + 1], g, 0) != -1 ? 11 : 10;
        if (d = d == 10) vc(p[h] + g), d = ea;
        if (d) {
          d = 18;
          break a;
        }
        var l = f = i;
        d = 19;
        break a;
      } else if (d == 12) {
        d = i >= 2147483647 ? 13 : 14;
        d == 13 && (i = -2147483648 - g);
        d = bp(0);
        if (d != p[h] + p[h + 1]) {
          d = 18;
          break a;
        }
        i = bp(-i);
        g = bp(0);
        if (i == -1) {
          d = 18;
          break a;
        }
        if (g >= d) {
          d = 18;
          break a;
        }
        f = d - g;
        l = d - g;
        d = 19;
        break a;
      } while (0);
      d == 18 && (l = f);
      l == 0 ? d = 21 : (p[h + 1] -= f, p[e + 108] -= f, dp(e, p[e + 6], p[e + 3] - f));
    } while (0);
    h = ip(e);
    f = h = f + h;
    h != 0 ? d = 24 : p[e + 3] > p[e + 7] ? p[e + 7] = -1 : d = 24;
  } while (0);
  return f != 0 ? 1 : 0;
}

hp.X = 1;

function ip(c) {
  var d, e, f, g, i, h, j, k, l, m, n, o, r, q, s, u, x;
  f = e = 0;
  g = c + 111;
  i = p[g + 2];
  h = p[g + 2];
  a : for (;;) {
    if (h == 0) {
      d = 66;
      break;
    }
    h = p[i];
    j = p[i + 1];
    k = p[i + 2];
    f += 1;
    d = (p[i + 3] & 1) != 0 ? 3 : 65;
    do if (d == 3) if ((p[i + 3] & 8) != 0) d = 65; else {
      if ((h + 8 & 7) == 0) {
        var v = 0;
        d = 6;
      } else d = 5;
      d == 5 && (v = 8 - (h + 8 & 7) & 7);
      d = h + v;
      l = p[d + 1] & -8;
      if ((p[d + 1] & 3) != 1) d = 65; else if (d + l >= h + j - 40) {
        m = d;
        d = d == p[c + 5] ? 9 : 10;
        do if (d == 9) p[c + 5] = 0, p[c + 2] = 0; else if (d == 10) {
          n = p[m + 6];
          s = m;
          d = p[m + 3] != m ? 11 : 14;
          b : do if (d == 11) {
            r = p[s + 2];
            o = p[m + 3];
            if (r >= p[c + 4] == 1 == 0) {
              d = 13;
              break a;
            }
            p[r + 3] = o;
            p[o + 2] = r;
          } else if (d == 14) {
            r = s + 5;
            o = p[s + 5];
            d = p[s + 5] != 0 ? 16 : 15;
            if (d == 15 && (r = m + 4, o = p[m + 4], p[m + 4] == 0)) break b;
            c : for (;;) {
              q = o + 5;
              d = p[o + 5] != 0 ? 18 : 17;
              if (d == 17 && (q = o + 4, p[o + 4] == 0)) {
                d = 19;
                break c;
              }
              r = q;
              o = p[q];
            }
            if (r >= p[c + 4] == 1 == 0) {
              d = 21;
              break a;
            }
            p[r] = 0;
          } while (0);
          if (n == 0) d = 42; else {
            s = c + 76 + p[m + 7];
            d = m == p[s] ? 24 : 26;
            do if (d == 24) p[s] = o, o != 0 ? d = 31 : p[c + 1] &= 1 << p[m + 7] ^ -1; else if (d == 26) {
              if (n >= p[c + 4] == 1 == 0) {
                d = 30;
                break a;
              }
              d = p[n + 4] == m ? 28 : 29;
              d == 28 ? p[n + 4] = o : d == 29 && (p[n + 5] = o);
            } while (0);
            if (o == 0) d = 42; else {
              if (o >= p[c + 4] == 1 == 0) {
                d = 41;
                break a;
              }
              p[o + 6] = n;
              n = p[m + 4];
              d = p[m + 4] != 0 ? 34 : 37;
              if (d == 34) {
                if (n >= p[c + 4] == 1 == 0) {
                  d = 36;
                  break a;
                }
                p[o + 4] = n;
                p[n + 6] = o;
              }
              n = p[m + 5];
              if (p[m + 5] == 0) d = 42; else {
                if (n >= p[c + 4] == 1 == 0) {
                  d = 40;
                  break a;
                }
                p[o + 5] = n;
                p[n + 6] = o;
              }
            }
          }
        } while (0);
        vc(h);
        d = 44;
        if (d == 43) e += j, p[c + 108] -= j, i = g, p[i + 2] = k; else if (d == 44) if (n = l >>> 8, d = n == 0 ? 45 : 46, d == 45 ? u = 0 : d == 46 && (d = n > 65535 ? 47 : 48, d == 47 ? u = 31 : d == 48 && (u = n, d = u - 256 >>> 16 & 8, u = n = u << d, n = n - 4096 >>> 16 & 4, d += n, u = n = u << n, n = s = n - 16384 >>> 16 & 2, d = s + d, n = -d + 14 + (u << n >>> 15), u = (l >>> n + 7 & 1) + (n << 1))), n = u + (c + 76), p[m + 7] = u, p[m + 5] = 0, p[m + 4] = 0, d = (1 << u & p[c + 1]) != 0 ? 51 : 50, d == 51) {
          n = p[n];
          if (u == 31) {
            var y = 0;
            d = 53;
          } else d = 52;
          d == 52 && (y = -(u >>> 1) + 25);
          for (s = l << y; ; ) {
            if ((p[n + 1] & -8) == l) {
              d = 60;
              break;
            }
            x = n + 4 + (s >>> 31 & 1);
            s <<= 1;
            var z = x;
            if (p[x] == 0) {
              d = 57;
              break;
            }
            n = p[z];
          }
          if (d == 60) {
            l = p[n + 2];
            if (n >= p[c + 4]) d = 61; else {
              var B = 0;
              d = 62;
            }
            d == 61 && (B = l >= p[c + 4]);
            if (B == 1 == 0) {
              d = 64;
              break a;
            }
            p[l + 3] = m;
            p[n + 2] = m;
            p[m + 2] = l;
            p[m + 3] = n;
            p[m + 6] = 0;
          } else if (d == 57) {
            if (z >= p[c + 4] == 1 == 0) {
              d = 59;
              break a;
            }
            p[x] = m;
            p[m + 6] = n;
            p[m + 3] = m;
            p[m + 2] = m;
          }
        } else d == 50 && (p[c + 1] |= 1 << u, p[n] = m, p[m + 6] = n, p[m + 3] = m, p[m + 2] = m);
      } else d = 65;
    } while (0);
    g = i;
    h = i = k;
  }
  if (d == 66) return p[c + 8] = f > 4095 ? f : 4095, e;
  d == 13 && (Uo(), a("Reached an unreachable!"));
  d == 21 && (Uo(), a("Reached an unreachable!"));
  d == 30 && (Uo(), a("Reached an unreachable!"));
  d == 41 && (Uo(), a("Reached an unreachable!"));
  d == 36 && (Uo(), a("Reached an unreachable!"));
  d == 40 && (Uo(), a("Reached an unreachable!"));
  d == 59 && (Uo(), a("Reached an unreachable!"));
  d == 64 && (Uo(), a("Reached an unreachable!"));
  return fa;
}

ip.X = 1;

function Zo() {
  var c, d, e;
  c = p[Yo] == 0 ? 1 : 5;
  a : do if (c == 1) {
    e = d = kp();
    c = (e - 1 & e) != 0 ? 3 : 2;
    do if (c == 2) if ((d - 1 & d) != 0) c = 3; else {
      p[Yo + 2] = e;
      p[Yo + 1] = d;
      p[Yo + 3] = 262144;
      p[Yo + 4] = 2097152;
      p[Yo + 5] = 1;
      p[Y + 110] = p[Yo + 5];
      c = Math.floor(Date.now() / 1e3) ^ 1431655765;
      c |= 8;
      c &= -8;
      p[Yo] = c;
      break a;
    } while (0);
    Uo();
    a("Reached an unreachable!");
  } while (0);
}

function ap(c, d) {
  var e, f, g;
  g = c + 111;
  a : for (;;) {
    e = d >= p[g] ? 2 : 4;
    if (e == 2 && d < p[g] + p[g + 1]) {
      e = 3;
      break a;
    }
    var i = p[g + 2];
    g = i;
    if (i == 0) {
      e = 5;
      break;
    }
  }
  e == 3 ? f = g : e == 5 && (f = 0);
  return f;
}

function dp(c, d, e) {
  var f, g;
  (d + 8 & 7) == 0 ? (g = 0, f = 2) : f = 1;
  f == 1 && (g = 8 - (d + 8 & 7) & 7);
  d += g;
  e -= g;
  p[c + 6] = d;
  p[c + 3] = e;
  p[d + 1] = e | 1;
  p[e + (d + 1)] = 40;
  p[c + 7] = p[Yo + 4];
}

dp.X = 1;

function $o(c, d) {
  var e, f, g, i, h;
  g = (p[Yo + 1] - 1 ^ -1) & d + 30 + p[Yo + 1];
  e = g > d ? 1 : 10;
  e == 1 && (i = cp(g), i == -1 ? e = 10 : ((i + 8 & 7) == 0 ? (h = 0, e = 4) : e = 3, e == 3 && (h = 8 - (i + 8 & 7) & 7), e = h, h = g - 16 + -e, f = i + e, p[f] = e, p[f + 1] = h, p[h + (f + 1)] = 7, p[h + (f + 5)] = 0, e = p[c + 4] == 0 ? 6 : 5, e == 5 && (e = i < p[c + 4] ? 6 : 7), e == 6 && (p[c + 4] = i), g = p[c + 108] + g, p[c + 108] = g, e = g > p[c + 109] ? 8 : 9, e == 8 && (p[c + 109] = p[c + 108]), f += 8, e = 11));
  e == 10 && (f = 0);
  return f;
}

$o.X = 1;

function ep(c, d, e, f) {
  var g, i, h, j, k, l, m, n, o, r, q, s, u, x;
  (d + 8 & 7) == 0 ? (i = 0, g = 2) : g = 1;
  g == 1 && (i = 8 - (d + 8 & 7) & 7);
  d += i;
  (e + 8 & 7) == 0 ? (h = 0, g = 4) : g = 3;
  g == 3 && (h = 8 - (e + 8 & 7) & 7);
  i = e + h;
  e = d + f;
  h = i - d - f;
  p[d + 1] = f | 3;
  g = i == p[c + 6] ? 5 : 6;
  if (g == 5) r = p[c + 3] + h, p[c + 3] = r, p[c + 6] = e, p[e + 1] = r | 1; else if (g == 6) if (g = i == p[c + 5] ? 7 : 8, g == 7) r = p[c + 2] + h, p[c + 2] = r, p[c + 5] = e, p[e + 1] = r | 1, p[e + r] = r; else if (g == 8) {
    g = (p[i + 1] & 3) != 1 ? 52 : 9;
    if (g == 9) {
      var f = p[i + 1] & -8, v = i;
      g = f >>> 3 < 32 ? 10 : 19;
      a : do if (g == 10) if (j = p[v + 2], k = p[i + 3], l = f >>> 3, g = j == k ? 11 : 12, g == 11) p[c] &= 1 << l ^ -1; else {
        if (g == 12) {
          g = j == c + 10 + (l << 1) ? 14 : 13;
          if (g == 13) if (j >= p[c + 4]) g = 14; else {
            var y = 0;
            g = 16;
          }
          g == 14 && (y = k == c + 10 + (l << 1) ? 1 : k >= p[c + 4]);
          g = y == 1 != 0 ? 17 : 18;
          g == 17 ? (p[j + 3] = k, p[k + 2] = j) : g == 18 && (Uo(), a("Reached an unreachable!"));
        }
      } else if (g == 19) {
        j = v;
        k = p[j + 6];
        l = j;
        g = p[j + 3] != j ? 20 : 23;
        b : do if (g == 20) n = p[l + 2], m = p[j + 3], g = n >= p[c + 4] == 1 != 0 ? 21 : 22, g == 21 ? (p[n + 3] = m, p[m + 2] = n) : g == 22 && (Uo(), a("Reached an unreachable!")); else if (g == 23) {
          n = l + 5;
          m = p[l + 5];
          g = p[l + 5] != 0 ? 25 : 24;
          if (g == 24 && (n = j + 4, m = p[j + 4], p[j + 4] == 0)) break b;
          c : for (;;) {
            o = m + 5;
            g = p[m + 5] != 0 ? 27 : 26;
            if (g == 26 && (o = m + 4, p[m + 4] == 0)) break c;
            n = o;
            m = p[o];
          }
          g = n >= p[c + 4] == 1 != 0 ? 29 : 30;
          g == 29 ? p[n] = 0 : g == 30 && (Uo(), a("Reached an unreachable!"));
        } while (0);
        if (k == 0) g = 51; else if (l = c + 76 + p[j + 7], g = j == p[l] ? 33 : 35, g == 33 ? (p[l] = m, m != 0 || (p[c + 1] &= 1 << p[j + 7] ^ -1)) : g == 35 && (g = k >= p[c + 4] == 1 != 0 ? 36 : 39, g == 36 ? (g = p[k + 4] == j ? 37 : 38, g == 37 ? p[k + 4] = m : g == 38 && (p[k + 5] = m)) : g == 39 && (Uo(), a("Reached an unreachable!"))), m == 0) g = 51; else if (g = m >= p[c + 4] == 1 != 0 ? 42 : 50, g == 42) {
          p[m + 6] = k;
          k = p[j + 4];
          g = p[j + 4] != 0 ? 43 : 46;
          g == 43 && (g = k >= p[c + 4] == 1 != 0 ? 44 : 45, g == 44 ? (p[m + 4] = k, p[k + 6] = m) : g == 45 && (Uo(), a("Reached an unreachable!")));
          k = p[j + 5];
          if (p[j + 5] == 0) break a;
          g = k >= p[c + 4] == 1 != 0 ? 48 : 49;
          g == 48 ? (p[m + 5] = k, p[k + 6] = m) : g == 49 && (Uo(), a("Reached an unreachable!"));
        } else g == 50 && (Uo(), a("Reached an unreachable!"));
      } while (0);
      i += f;
      h += f;
    }
    p[i + 1] &= -2;
    p[e + 1] = h | 1;
    p[e + h] = h;
    g = h >>> 3 < 32 ? 53 : 59;
    if (g == 53) r = h >>> 3, s = q = c + 10 + (r << 1), g = (1 << r & p[c]) != 0 ? 55 : 54, g == 55 ? (g = p[q + 2] >= p[c + 4] == 1 != 0 ? 56 : 57, g == 56 ? s = p[q + 2] : g == 57 && (Uo(), a("Reached an unreachable!"))) : g == 54 && (p[c] |= 1 << r), p[q + 2] = e, p[s + 3] = e, p[e + 2] = s, p[e + 3] = q; else if (g == 59) if (m = h >>> 8, g = m == 0 ? 60 : 61, g == 60 ? u = 0 : g == 61 && (g = m > 65535 ? 62 : 63, g == 62 ? u = 31 : g == 63 && (u = m, g = u - 256 >>> 16 & 8, m = u << g, u = m - 4096 >>> 16 & 4, g += u, u = m << u, m = u - 16384 >>> 16 & 2, u = -(m + g) + 14 + (u << m >>> 15), u = (h >>> u + 7 & 1) + (u << 1))), m = u + (c + 76), p[e + 7] = u, p[e + 5] = 0, p[e + 4] = 0, g = (1 << u & p[c + 1]) != 0 ? 66 : 65, g == 66) {
      m = p[m];
      u == 31 ? (x = 0, g = 68) : g = 67;
      g == 67 && (x = -(u >>> 1) + 25);
      for (x = h << x; ; ) {
        if ((p[m + 1] & -8) == h) {
          g = 75;
          break;
        }
        q = m + 4 + (x >>> 31 & 1);
        x <<= 1;
        s = q;
        if (p[q] == 0) {
          g = 72;
          break;
        }
        m = p[s];
      }
      g == 75 ? (q = p[m + 2], m >= p[c + 4] ? g = 76 : (r = 0, g = 77), g == 76 && (r = q >= p[c + 4]), g = r == 1 != 0 ? 78 : 79, g == 78 ? (p[q + 3] = e, p[m + 2] = e, p[e + 2] = q, p[e + 3] = m, p[e + 6] = 0) : g == 79 && (Uo(), a("Reached an unreachable!"))) : g == 72 && (g = s >= p[c + 4] == 1 != 0 ? 73 : 74, g == 73 ? (p[q] = e, p[e + 6] = m, p[e + 3] = e, p[e + 2] = e) : g == 74 && (Uo(), a("Reached an unreachable!")));
    } else g == 65 && (p[c + 1] |= 1 << u, p[m] = e, p[e + 6] = m, p[e + 3] = e, p[e + 2] = e);
  }
  return d + 8;
}

ep.X = 1;

function fp(c, d, e, f) {
  var g, i, h, j, k, l, m, n, o, r, q;
  i = p[c + 6];
  g = ap(c, i);
  h = p[g] + p[g + 1];
  j = h + -47;
  (j + 8 & 7) == 0 ? (k = 0, g = 2) : g = 1;
  g == 1 && (k = 8 - (j + 8 & 7) & 7);
  g = j + k;
  k = g < i + 16 ? i : g;
  g = k + 8;
  j = k + 24;
  l = 0;
  dp(c, d, e - 40);
  p[k + 1] = 27;
  var s = c + 111;
  p[g] = p[s];
  t[g] = t[s];
  p[g + 1] = p[s + 1];
  t[g + 1] = t[s + 1];
  p[g + 2] = p[s + 2];
  t[g + 2] = t[s + 2];
  p[g + 3] = p[s + 3];
  t[g + 3] = t[s + 3];
  p[c + 111] = d;
  p[c + 112] = e;
  p[c + 114] = f;
  p[c + 113] = g;
  d = j + 4;
  p[j + 1] = 7;
  l += 1;
  g = d + 1 < h ? 3 : 4;
  a : do if (g == 3) for (;;) if (j = d, d = j + 4, p[j + 1] = 7, l += 1, d + 1 >= h) break a; while (0);
  if ((k != i ? 5 : 33) == 5) if (d = k - i, p[i + d + 1] &= -2, p[i + 1] = d | 1, p[i + d] = d, g = d >>> 3 < 32 ? 6 : 12, g == 6) m = d >>> 3, o = n = c + 10 + (m << 1), g = (1 << m & p[c]) != 0 ? 8 : 7, g == 8 ? (g = p[n + 2] >= p[c + 4] == 1 != 0 ? 9 : 10, g == 9 ? o = p[n + 2] : g == 10 && (Uo(), a("Reached an unreachable!"))) : g == 7 && (p[c] |= 1 << m), p[n + 2] = i, p[o + 3] = i, p[i + 2] = o, p[i + 3] = n; else if (g == 12) if (e = d >>> 8, g = e == 0 ? 13 : 14, g == 13 ? r = 0 : g == 14 && (g = e > 65535 ? 15 : 16, g == 15 ? r = 31 : g == 16 && (r = e, g = r - 256 >>> 16 & 8, e = r << g, r = e - 4096 >>> 16 & 4, g += r, r = e << r, e = r - 16384 >>> 16 & 2, r = -(e + g) + 14 + (r << e >>> 15), r = (d >>> r + 7 & 1) + (r << 1))), e = r + (c + 76), p[i + 7] = r, p[i + 5] = 0, p[i + 4] = 0, g = (1 << r & p[c + 1]) != 0 ? 19 : 18, g == 19) {
    e = p[e];
    r == 31 ? (q = 0, g = 21) : g = 20;
    g == 20 && (q = -(r >>> 1) + 25);
    for (q = d << q; ; ) {
      if ((p[e + 1] & -8) == d) {
        g = 28;
        break;
      }
      n = e + 4 + (q >>> 31 & 1);
      q <<= 1;
      o = n;
      if (p[n] == 0) {
        g = 25;
        break;
      }
      e = p[o];
    }
    g == 28 ? (n = p[e + 2], e >= p[c + 4] ? g = 29 : (m = 0, g = 30), g == 29 && (m = n >= p[c + 4]), g = m == 1 != 0 ? 31 : 32, g == 31 ? (p[n + 3] = i, p[e + 2] = i, p[i + 2] = n, p[i + 3] = e, p[i + 6] = 0) : g == 32 && (Uo(), a("Reached an unreachable!"))) : g == 25 && (g = o >= p[c + 4] == 1 != 0 ? 26 : 27, g == 26 ? (p[n] = i, p[i + 6] = e, p[i + 3] = i, p[i + 2] = i) : g == 27 && (Uo(), a("Reached an unreachable!")));
  } else g == 18 && (p[c + 1] |= 1 << r, p[e] = i, p[i + 6] = e, p[i + 3] = i, p[i + 2] = i);
}

fp.X = 1;

function mj(c, d) {
  for (var e = d, f = d + 2, g = c; e < f; e++, g++) p[g] = p[e], t[g] = t[e];
}

function Ec() {
  lp === da && (lp = Date.now());
  return Math.floor((Date.now() - lp) * 1);
}

var lp, mp = 13, np = 9, op = 22, pp = 5, qp = 21, rp = 6;

function sp(c) {
  gp || (gp = C([ 0 ], "i32", A));
  p[gp] = c;
}

var gp, tp = 0, Hc = 0, up = 0, vp = 2, Rc = [ fa ], wp = ea;

function xp(c, d) {
  if (typeof c !== "string") return fa;
  d === da && (d = "/");
  c && c[0] == "/" && (d = "");
  for (var e = (d + "/" + c).split("/").reverse(), f = [ "" ]; e.length; ) {
    var g = e.pop();
    g == "" || g == "." || (g == ".." ? f.length > 1 && f.pop() : f.push(g));
  }
  return f.length == 1 ? "/" : f.join("/");
}

function yp(c, d, e) {
  var f = {
    P: ga,
    m: ga,
    error: 0,
    name: fa,
    path: fa,
    object: fa,
    w: ga,
    A: fa,
    z: fa
  }, c = xp(c);
  if (c == "/") f.P = ea, f.m = f.w = ea, f.name = "/", f.path = f.A = "/", f.object = f.z = zp; else if (c !== fa) for (var e = e || 0, c = c.slice(1).split("/"), g = zp, i = [ "" ]; c.length; ) {
    if (c.length == 1 && g.c) f.w = ea, f.A = i.length == 1 ? "/" : i.join("/"), f.z = g, f.name = c[0];
    var h = c.shift();
    if (g.c) if (g.C) {
      if (!g.a.hasOwnProperty(h)) {
        f.error = 2;
        break;
      }
    } else {
      f.error = mp;
      break;
    } else {
      f.error = 20;
      break;
    }
    g = g.a[h];
    if (g.link && !(d && c.length == 0)) {
      if (e > 40) {
        f.error = 40;
        break;
      }
      f = xp(g.link, i.join("/"));
      return yp([ f ].concat(c).join("/"), d, e + 1);
    }
    i.push(h);
    if (c.length == 0) f.m = ea, f.path = i.join("/"), f.object = g;
  }
  return f;
}

function Ap(c, d, e, f, g) {
  c || (c = "/");
  if (typeof c === "string") Bp(), c = yp(c, da), c.m ? c = c.object : (sp(c.error), c = fa);
  c || (sp(mp), a(Error("Parent path must exist.")));
  c.c || (sp(20), a(Error("Parent must be a folder.")));
  !c.write && !wp && (sp(mp), a(Error("Parent folder must be writeable.")));
  if (!d || d == "." || d == "..") sp(2), a(Error("Name must not be empty."));
  c.a.hasOwnProperty(d) && (sp(17), a(Error("Can't overwrite object.")));
  c.a[d] = {
    C: f === da ? ea : f,
    write: g === da ? ga : g,
    timestamp: Date.now(),
    M: vp++
  };
  for (var i in e) e.hasOwnProperty(i) && (c.a[d][i] = e[i]);
  return c.a[d];
}

function Cp(c, d) {
  return Ap("/", c, {
    c: ea,
    h: ga,
    a: {}
  }, ea, d);
}

function Dp(c, d, e, f) {
  !e && !f && a(Error("A device must have at least one callback defined."));
  var g = {
    h: ea,
    input: e,
    d: f
  };
  g.c = ga;
  return Ap(c, d, g, Boolean(e), Boolean(f));
}

function Bp() {
  zp || (zp = {
    C: ea,
    write: ga,
    c: ea,
    h: ga,
    timestamp: Date.now(),
    M: 1,
    a: {}
  });
}

var Ep, zp;

function Qc(c, d, e) {
  var f = Rc[c];
  if (f) {
    if (f.i) {
      if (e < 0) return sp(op), -1;
      if (f.object.h) {
        if (f.object.d) {
          for (var g = 0; g < e; g++) try {
            f.object.d(p[d + g]);
          } catch (i) {
            return sp(pp), -1;
          }
          f.object.timestamp = Date.now();
          return g;
        }
        sp(rp);
        return -1;
      }
      g = f.position;
      c = Rc[c];
      if (!c || c.object.h) sp(np), d = -1; else if (c.i) if (c.object.c) sp(qp), d = -1; else if (e < 0 || g < 0) sp(op), d = -1; else {
        for (var h = c.object.a; h.length < g; ) h.push(0);
        for (var j = 0; j < e; j++) h[g + j] = Xa[d + j];
        c.object.timestamp = Date.now();
        d = j;
      } else sp(mp), d = -1;
      d != -1 && (f.position += d);
      return d;
    }
    sp(mp);
    return -1;
  }
  sp(np);
  return -1;
}

function Fp(c, d) {
  function e(c) {
    var e;
    e = c === "float" || c === "double" ? t[d + g] : p[d + g];
    g += Ia.L(c);
    return Number(e);
  }
  for (var f = c, g = 0, i = [], h, j; ; ) {
    var k = f;
    h = p[f];
    if (h === 0) break;
    j = p[f + 1];
    if (h == 37) {
      var l = ga, m = ga, n = ga, o = ga;
      a : for (;;) {
        switch (j) {
         case 43:
          l = ea;
          break;
         case 45:
          m = ea;
          break;
         case 35:
          n = ea;
          break;
         case 48:
          if (o) break a; else {
            o = ea;
            break;
          }
         default:
          break a;
        }
        f++;
        j = p[f + 1];
      }
      var r = 0;
      if (j == 42) r = e("i32"), f++, j = p[f + 1]; else for (; j >= 48 && j <= 57; ) r = r * 10 + (j - 48), f++, j = p[f + 1];
      var q = ga;
      if (j == 46) {
        var s = 0, q = ea;
        f++;
        j = p[f + 1];
        if (j == 42) s = e("i32"), f++; else for (;;) {
          j = p[f + 1];
          if (j < 48 || j > 57) break;
          s = s * 10 + (j - 48);
          f++;
        }
        j = p[f + 1];
      } else s = 6;
      var u;
      switch (String.fromCharCode(j)) {
       case "h":
        j = p[f + 2];
        j == 104 ? (f++, u = 1) : u = 2;
        break;
       case "l":
        j = p[f + 2];
        j == 108 ? (f++, u = 8) : u = 4;
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
        u = fa;
      }
      u && f++;
      j = p[f + 1];
      if ("d,i,u,o,x,X,p".split(",").indexOf(String.fromCharCode(j)) != -1) {
        k = j == 100 || j == 105;
        u = u || 4;
        h = e("i" + u * 8);
        u <= 4 && (h = (k ? Mb : Gb)(h & Math.pow(256, u) - 1, u * 8));
        var x = Math.abs(h), v, k = "";
        if (j == 100 || j == 105) v = Mb(h, 8 * u).toString(10); else if (j == 117) v = Gb(h, 8 * u).toString(10), h = Math.abs(h); else if (j == 111) v = (n ? "0" : "") + x.toString(8); else if (j == 120 || j == 88) {
          k = n ? "0x" : "";
          if (h < 0) {
            h = -h;
            v = (x - 1).toString(16);
            n = [];
            for (x = 0; x < v.length; x++) n.push((15 - parseInt(v[x], 16)).toString(16));
            for (v = n.join(""); v.length < u * 2; ) v = "f" + v;
          } else v = x.toString(16);
          j == 88 && (k = k.toUpperCase(), v = v.toUpperCase());
        } else j == 112 && (x === 0 ? v = "(nil)" : (k = "0x", v = x.toString(16)));
        if (q) for (; v.length < s; ) v = "0" + v;
        for (l && (k = h < 0 ? "-" + k : "+" + k); k.length + v.length < r; ) m ? v += " " : o ? v = "0" + v : k = " " + k;
        v = k + v;
        v.split("").forEach((function(c) {
          i.push(c.charCodeAt(0));
        }));
      } else if ("f,F,e,E,g,G".split(",").indexOf(String.fromCharCode(j)) != -1) {
        h = e(u === 4 ? "float" : "double");
        if (isNaN(h)) v = "nan", o = ga; else if (isFinite(h)) {
          q = ga;
          u = Math.min(s, 20);
          if (j == 103 || j == 71) q = ea, s = s || 1, u = parseInt(h.toExponential(u).split("e")[1], 10), s > u && u >= -4 ? (j = (j == 103 ? "f" : "F").charCodeAt(0), s -= u + 1) : (j = (j == 103 ? "e" : "E").charCodeAt(0), s--), u = Math.min(s, 20);
          if (j == 101 || j == 69) v = h.toExponential(u), /[eE][-+]\d$/.test(v) && (v = v.slice(0, -1) + "0" + v.slice(-1)); else if (j == 102 || j == 70) v = h.toFixed(u);
          k = v.split("e");
          if (q && !n) for (; k[0].length > 1 && k[0].indexOf(".") != -1 && (k[0].slice(-1) == "0" || k[0].slice(-1) == "."); ) k[0] = k[0].slice(0, -1); else for (n && v.indexOf(".") == -1 && (k[0] += "."); s > u++; ) k[0] += "0";
          v = k[0] + (k.length > 1 ? "e" + k[1] : "");
          j == 69 && (v = v.toUpperCase());
          l && h >= 0 && (v = "+" + v);
        } else v = (h < 0 ? "-" : "") + "inf", o = ga;
        for (; v.length < r; ) m ? v += " " : v = o && (v[0] == "-" || v[0] == "+") ? v[0] + "0" + v.slice(1) : (o ? "0" : " ") + v;
        j < 97 && (v = v.toUpperCase());
        v.split("").forEach((function(c) {
          i.push(c.charCodeAt(0));
        }));
      } else if (j == 115) {
        (l = e("i8*")) ? (l = Fb(l), q && l.length > s && (l = l.slice(0, s))) : l = tb("(null)", ea);
        if (!m) for (; l.length < r--; ) i.push(32);
        i = i.concat(l);
        if (m) for (; l.length < r--; ) i.push(32);
      } else if (j == 99) {
        for (m && i.push(e("i8")); --r > 0; ) i.push(32);
        m || i.push(e("i8"));
      } else if (j == 110) m = e("i32*"), p[m] = i.length; else if (j == 37) i.push(h); else for (x = k; x < f + 2; x++) i.push(p[x]);
      f += 2;
    } else i.push(h), f += 1;
  }
  return i;
}

function Fc(c, d) {
  var e = p[Hc], f = Fp(c, d), g = Ia.V();
  var i = C(f, "i8", w), f = f.length * 1;
  if (f == 0) e = 0; else if (i = Qc(e, i, f), i == -1) {
    if (Rc[e]) Rc[e].error = ea;
    e = -1;
  } else e = Math.floor(i / 1);
  Ia.U(g);
  return e;
}

var Gp = vc, gd = Math.sqrt;

function Q(c, d, e, f) {
  a("Assertion failed: " + ib(f) + ", at: " + [ ib(c), d, ib(e) ]);
}

var Qh = Math.sin, Rh = Math.cos, yh = Math.floor, Si = Fc;

function Xi(c) {
  var d = Ia.q({
    g: [ "i32", "i32" ]
  }), e = Date.now();
  p[c + d[0]] = Math.floor(e / 1e3);
  p[c + d[1]] = Math.floor((e - 1e3 * Math.floor(e / 1e3)) * 1e3);
}

function Uo() {
  a("ABORT: undefined, at " + Error().stack);
}

function kp() {
  switch (8) {
   case 8:
    return rb;
   case 54:
   case 56:
   case 21:
   case 61:
   case 63:
   case 22:
   case 67:
   case 23:
   case 24:
   case 25:
   case 26:
   case 27:
   case 69:
   case 28:
   case 101:
   case 70:
   case 71:
   case 29:
   case 30:
   case 199:
   case 75:
   case 76:
   case 32:
   case 43:
   case 44:
   case 80:
   case 46:
   case 47:
   case 45:
   case 48:
   case 49:
   case 42:
   case 82:
   case 33:
   case 7:
   case 108:
   case 109:
   case 107:
   case 112:
   case 119:
   case 121:
    return 200809;
   case 13:
   case 104:
   case 94:
   case 95:
   case 34:
   case 35:
   case 77:
   case 81:
   case 83:
   case 84:
   case 85:
   case 86:
   case 87:
   case 88:
   case 89:
   case 90:
   case 91:
   case 94:
   case 95:
   case 110:
   case 111:
   case 113:
   case 114:
   case 115:
   case 116:
   case 117:
   case 118:
   case 120:
   case 40:
   case 16:
   case 79:
   case 19:
    return -1;
   case 92:
   case 93:
   case 5:
   case 72:
   case 6:
   case 74:
   case 92:
   case 93:
   case 96:
   case 97:
   case 98:
   case 99:
   case 102:
   case 103:
   case 105:
    return 1;
   case 38:
   case 66:
   case 50:
   case 51:
   case 4:
    return 1024;
   case 15:
   case 64:
   case 41:
    return 32;
   case 55:
   case 37:
   case 17:
    return 2147483647;
   case 18:
   case 1:
    return 47839;
   case 59:
   case 57:
    return 99;
   case 68:
   case 58:
    return 2048;
   case 0:
    return 2097152;
   case 3:
    return 65536;
   case 14:
    return 32768;
   case 73:
    return 32767;
   case 39:
    return 16384;
   case 60:
    return 1e3;
   case 106:
    return 700;
   case 52:
    return 256;
   case 62:
    return 255;
   case 2:
    return 100;
   case 65:
    return 64;
   case 36:
    return 20;
   case 100:
    return 16;
   case 20:
    return 6;
   case 53:
    return 4;
  }
  sp(op);
  return -1;
}

var jp;

function bp(c) {
  Hp ? Ja(Hp == Ka, "No one should touch the heap!") : (Hp = Ka = Sa(Ka), Ip = 0);
  var d = Ka + Ip;
  Ip += Sa(c);
  return d;
}

var Hp, Ip;

function cp(c) {
  var d = Rc[-1];
  return !d ? -1 : C(d.object.a.slice(0, 0 + c), "i8", gb);
}

((function(c, d, e) {
  if (!Ep) {
    Ep = ea;
    Bp();
    c || (c = (function() {
      if (!c.l || !c.l.length) {
        var d;
        typeof window != "undefined" && typeof window.prompt == "function" ? d = window.prompt("Input: ") : typeof readline == "function" && (d = readline());
        d || (d = "");
        c.l = tb(d + "\n", ea);
      }
      return c.l.shift();
    }));
    d || (d = (function(c) {
      c === fa || c === 10 ? (d.B(d.buffer.join("")), d.buffer = []) : d.buffer.push(String.fromCharCode(c));
    }));
    if (!d.B) d.B = print;
    if (!d.buffer) d.buffer = [];
    e || (e = d);
    Cp("tmp", ea);
    var f = Cp("dev", ga), g = Dp(f, "stdin", c), i = Dp(f, "stdout", fa, d), e = Dp(f, "stderr", fa, e);
    Dp(f, "tty", c, d);
    Rc[1] = {
      path: "/dev/stdin",
      object: g,
      position: 0,
      v: ea,
      i: ga,
      u: ga,
      error: ga,
      r: ga,
      D: []
    };
    Rc[2] = {
      path: "/dev/stdout",
      object: i,
      position: 0,
      v: ga,
      i: ea,
      u: ga,
      error: ga,
      r: ga,
      D: []
    };
    Rc[3] = {
      path: "/dev/stderr",
      object: e,
      position: 0,
      v: ga,
      i: ea,
      u: ga,
      error: ga,
      r: ga,
      D: []
    };
    tp = C([ 1 ], "void*", A);
    Hc = C([ 2 ], "void*", A);
    up = C([ 3 ], "void*", A);
    Rc[tp] = Rc[1];
    Rc[Hc] = Rc[2];
    Rc[up] = Rc[3];
    C([ C([ 0, tp, Hc, up ], "void*", A) ], "void*", A);
  }
}))();

ab.push({
  n: (function() {
    Ep && (Rc[2].object.d.buffer.length > 0 && Rc[2].object.d(10), Rc[3].object.d.buffer.length > 0 && Rc[3].object.d(10));
  })
});

sp(0);

var Pc = C([ 0 ], "i8", A);

Module.H = (function(c) {
  function d() {
    for (var c = 0; c < 0; c++) f.push(0);
  }
  var e = c.length + 1, f = [ C(tb("/bin/this.program"), "i8", A) ];
  d();
  for (var g = 0; g < e - 1; g += 1) f.push(C(tb(c[g]), "i8", A)), d();
  f.push(0);
  f = C(f, "i32", A);
  return Qb();
});

var Gc, $b, Jp, Kp, Lp, id, jd, Ud, fe, ge, pe, qe, Ge, Ne, Oe, ve, we, ye, Ie, Gg, Ze, We, Xe, Ye, Je, Be, Te, Ue, Cg, Ig, Jg, Dg, Eg, Fg, Xg, Vg, Qg, Rg, Sg, $g, ah, bh, ch, dh, eh, fh, gh, hh, ih, mh, wh, xh, uh, vh, oh, ph, qh, Ph, Bh, zh, Ah, Dh, Fh, Vh, Uh, Wh, Gh, Hh, Yh, Kh, Jh, Mp, Np, Op, Pp, Qp, Rp, jc, Sp, Tp, fi, gi, hi, ji, ki, li, ac, Up, Vp, ri, si, ni, oi, pi, qi, Ci, vi, wi, Di, ui, Wp, Xp, Yp, Ce, $a = (function() {
  p[yj] = Zp + 2;
  ab.push({
    n: 4,
    k: yj
  });
  p[zj] = $p + 2;
  ab.push({
    n: 6,
    k: zj
  });
}), Ji, Ki, Li, Mi, Ui, Vi, Oi, Pi, Qi, aj, bj, cj, dj, ej, fj, gj, hj, sj, rj, jj, kj, lj, yj, zj, Pj, Wg, Sj, Tj, Uj, Oj, $p, aq, bq, ak, bk, ck, dk, sk, tk, uk, vk, xk, yk, zk, Yk, Zk, $k, dl, el, gl, Nj, jl, kl, Ck, al, bl, Vk, Wk, Jk, Kk, Zp, cq, dq, pl, ql, rl, eq, fq, gq, hq, wl, xl, yl, sl, iq, jq, Cl, Dl, El, Fl, kq, lq, Ll, Ml, Hl, Il, Jl, Kl, Nl, Ol, Pl, Ql, Rl, Tl, Ul, Vl, Wl, Xl, $l, am, bm, dm, em, gm, hm, im, mq, nq, om, pm, qm, jm, oq, pq, sm, tm, um, tl, qq, rq, xm, ym, zm, vm, zl, sq, tq, mm, Cm, Im, uq, vq, wq, xq, Rm, Tm, Um, Vm, yq, zq, Zm, $m, an, bn, cn, gn, hn, jn, Aq, Bq, nn, xe, mn, on, pn, Cq, rn, sn, tn, un, vn, wn, xn, zn, An, Dq, Eq, Fq, Gn, Pn, Tn, Un, Xn, Gq, Hq, $n, Zn, ao, bo, go, ho, io, jo, ko, kn, Iq, Yq, mo, so, Sn, to, uo, Zq, $q, xo, Bo, Co, ar, br, Eo, Io, Rn, cr, dr, Oo, So, Dm, Em, Fm, Gm, Hm, Qn, Vn, Wn, vo, Jm, Km, Lm, er, fr, Y, Yo;

Gc = C([ 37, 102, 10, 0 ], "i8", A);

$b = C([ 0, 0, 36, 38, 40, 40, 40, 40, 40, 40 ], "i8*", A);

C(1, "void*", A);

Kp = C([ 55, 98, 50, 83, 104, 97, 112, 101, 0 ], "i8", A);

Lp = C(2, "i8*", A);

id = C([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 108, 108, 105, 115, 105, 111, 110, 47, 98, 50, 67, 111, 108, 108, 105, 100, 101, 69, 100, 103, 101, 46, 99, 112, 112, 0 ], "i8", A);

jd = C([ 118, 111, 105, 100, 32, 98, 50, 67, 111, 108, 108, 105, 100, 101, 69, 100, 103, 101, 65, 110, 100, 67, 105, 114, 99, 108, 101, 40, 98, 50, 77, 97, 110, 105, 102, 111, 108, 100, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 69, 100, 103, 101, 83, 104, 97, 112, 101, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 67, 105, 114, 99, 108, 101, 83, 104, 97, 112, 101, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 41, 0 ], "i8", A);

Ud = C([ 100, 101, 110, 32, 62, 32, 48, 46, 48, 102, 0 ], "i8", A);

fe = C([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 108, 108, 105, 115, 105, 111, 110, 47, 98, 50, 67, 111, 108, 108, 105, 100, 101, 80, 111, 108, 121, 103, 111, 110, 46, 99, 112, 112, 0 ], "i8", A);

ge = C([ 118, 111, 105, 100, 32, 98, 50, 70, 105, 110, 100, 73, 110, 99, 105, 100, 101, 110, 116, 69, 100, 103, 101, 40, 98, 50, 67, 108, 105, 112, 86, 101, 114, 116, 101, 120, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 80, 111, 108, 121, 103, 111, 110, 83, 104, 97, 112, 101, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 44, 32, 105, 110, 116, 51, 50, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 80, 111, 108, 121, 103, 111, 110, 83, 104, 97, 112, 101, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 41, 0 ], "i8", A);

pe = C([ 48, 32, 60, 61, 32, 101, 100, 103, 101, 49, 32, 38, 38, 32, 101, 100, 103, 101, 49, 32, 60, 32, 112, 111, 108, 121, 49, 45, 62, 109, 95, 118, 101, 114, 116, 101, 120, 67, 111, 117, 110, 116, 0 ], "i8", A);

qe = C([ 102, 108, 111, 97, 116, 51, 50, 32, 98, 50, 69, 100, 103, 101, 83, 101, 112, 97, 114, 97, 116, 105, 111, 110, 40, 99, 111, 110, 115, 116, 32, 98, 50, 80, 111, 108, 121, 103, 111, 110, 83, 104, 97, 112, 101, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 44, 32, 105, 110, 116, 51, 50, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 80, 111, 108, 121, 103, 111, 110, 83, 104, 97, 112, 101, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 41, 0 ], "i8", A);

Ge = C(1, "i32", A);

Ne = C(1, "i32", A);

Oe = C(1, "i32", A);

ve = C([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 108, 108, 105, 115, 105, 111, 110, 47, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 46, 99, 112, 112, 0 ], "i8", A);

we = C([ 118, 111, 105, 100, 32, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 80, 114, 111, 120, 121, 58, 58, 83, 101, 116, 40, 99, 111, 110, 115, 116, 32, 98, 50, 83, 104, 97, 112, 101, 32, 42, 44, 32, 105, 110, 116, 51, 50, 41, 0 ], "i8", A);

ye = C([ 48, 32, 60, 61, 32, 105, 110, 100, 101, 120, 32, 38, 38, 32, 105, 110, 100, 101, 120, 32, 60, 32, 99, 104, 97, 105, 110, 45, 62, 109, 95, 99, 111, 117, 110, 116, 0 ], "i8", A);

Ie = C([ 118, 111, 105, 100, 32, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 40, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 79, 117, 116, 112, 117, 116, 32, 42, 44, 32, 98, 50, 83, 105, 109, 112, 108, 101, 120, 67, 97, 99, 104, 101, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 73, 110, 112, 117, 116, 32, 42, 41, 0 ], "i8", A);

Gg = C([ 102, 108, 111, 97, 116, 51, 50, 32, 98, 50, 83, 105, 109, 112, 108, 101, 120, 58, 58, 71, 101, 116, 77, 101, 116, 114, 105, 99, 40, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", A);

Ze = C([ 118, 111, 105, 100, 32, 98, 50, 83, 105, 109, 112, 108, 101, 120, 58, 58, 71, 101, 116, 87, 105, 116, 110, 101, 115, 115, 80, 111, 105, 110, 116, 115, 40, 98, 50, 86, 101, 99, 50, 32, 42, 44, 32, 98, 50, 86, 101, 99, 50, 32, 42, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", A);

We = C([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 108, 108, 105, 115, 105, 111, 110, 47, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 46, 104, 0 ], "i8", A);

Xe = C([ 99, 111, 110, 115, 116, 32, 98, 50, 86, 101, 99, 50, 32, 38, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 80, 114, 111, 120, 121, 58, 58, 71, 101, 116, 86, 101, 114, 116, 101, 120, 40, 105, 110, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", A);

Ye = C([ 48, 32, 60, 61, 32, 105, 110, 100, 101, 120, 32, 38, 38, 32, 105, 110, 100, 101, 120, 32, 60, 32, 109, 95, 99, 111, 117, 110, 116, 0 ], "i8", A);

Je = C([ 98, 50, 86, 101, 99, 50, 32, 98, 50, 83, 105, 109, 112, 108, 101, 120, 58, 58, 71, 101, 116, 83, 101, 97, 114, 99, 104, 68, 105, 114, 101, 99, 116, 105, 111, 110, 40, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", A);

Be = C([ 98, 50, 86, 101, 99, 50, 32, 98, 50, 83, 105, 109, 112, 108, 101, 120, 58, 58, 71, 101, 116, 67, 108, 111, 115, 101, 115, 116, 80, 111, 105, 110, 116, 40, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", A);

Te = C([ 118, 111, 105, 100, 32, 98, 50, 83, 105, 109, 112, 108, 101, 120, 58, 58, 82, 101, 97, 100, 67, 97, 99, 104, 101, 40, 99, 111, 110, 115, 116, 32, 98, 50, 83, 105, 109, 112, 108, 101, 120, 67, 97, 99, 104, 101, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 80, 114, 111, 120, 121, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 80, 114, 111, 120, 121, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 41, 0 ], "i8", A);

Ue = C([ 99, 97, 99, 104, 101, 45, 62, 99, 111, 117, 110, 116, 32, 60, 61, 32, 51, 0 ], "i8", A);

Cg = C([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 108, 108, 105, 115, 105, 111, 110, 47, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 46, 99, 112, 112, 0 ], "i8", A);

Ig = C([ 105, 110, 116, 51, 50, 32, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 65, 108, 108, 111, 99, 97, 116, 101, 78, 111, 100, 101, 40, 41, 0 ], "i8", A);

Jg = C([ 109, 95, 110, 111, 100, 101, 67, 111, 117, 110, 116, 32, 61, 61, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", A);

Dg = C([ 118, 111, 105, 100, 32, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 70, 114, 101, 101, 78, 111, 100, 101, 40, 105, 110, 116, 51, 50, 41, 0 ], "i8", A);

Eg = C([ 48, 32, 60, 61, 32, 110, 111, 100, 101, 73, 100, 32, 38, 38, 32, 110, 111, 100, 101, 73, 100, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", A);

Fg = C([ 48, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 111, 117, 110, 116, 0 ], "i8", A);

C([ 118, 111, 105, 100, 32, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 68, 101, 115, 116, 114, 111, 121, 80, 114, 111, 120, 121, 40, 105, 110, 116, 51, 50, 41, 0 ], "i8", A);

Xg = C([ 109, 95, 110, 111, 100, 101, 115, 91, 112, 114, 111, 120, 121, 73, 100, 93, 46, 73, 115, 76, 101, 97, 102, 40, 41, 0 ], "i8", A);

Vg = C([ 98, 111, 111, 108, 32, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 77, 111, 118, 101, 80, 114, 111, 120, 121, 40, 105, 110, 116, 51, 50, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 65, 65, 66, 66, 32, 38, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 86, 101, 99, 50, 32, 38, 41, 0 ], "i8", A);

Qg = C([ 118, 111, 105, 100, 32, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 73, 110, 115, 101, 114, 116, 76, 101, 97, 102, 40, 105, 110, 116, 51, 50, 41, 0 ], "i8", A);

Rg = C([ 99, 104, 105, 108, 100, 49, 32, 33, 61, 32, 40, 45, 49, 41, 0 ], "i8", A);

Sg = C([ 99, 104, 105, 108, 100, 50, 32, 33, 61, 32, 40, 45, 49, 41, 0 ], "i8", A);

$g = C([ 105, 110, 116, 51, 50, 32, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 66, 97, 108, 97, 110, 99, 101, 40, 105, 110, 116, 51, 50, 41, 0 ], "i8", A);

ah = C([ 105, 65, 32, 33, 61, 32, 40, 45, 49, 41, 0 ], "i8", A);

bh = C([ 48, 32, 60, 61, 32, 105, 66, 32, 38, 38, 32, 105, 66, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", A);

ch = C([ 48, 32, 60, 61, 32, 105, 67, 32, 38, 38, 32, 105, 67, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", A);

dh = C([ 48, 32, 60, 61, 32, 105, 70, 32, 38, 38, 32, 105, 70, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", A);

eh = C([ 48, 32, 60, 61, 32, 105, 71, 32, 38, 38, 32, 105, 71, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", A);

fh = C([ 109, 95, 110, 111, 100, 101, 115, 91, 67, 45, 62, 112, 97, 114, 101, 110, 116, 93, 46, 99, 104, 105, 108, 100, 50, 32, 61, 61, 32, 105, 65, 0 ], "i8", A);

gh = C([ 48, 32, 60, 61, 32, 105, 68, 32, 38, 38, 32, 105, 68, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", A);

hh = C([ 48, 32, 60, 61, 32, 105, 69, 32, 38, 38, 32, 105, 69, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", A);

ih = C([ 109, 95, 110, 111, 100, 101, 115, 91, 66, 45, 62, 112, 97, 114, 101, 110, 116, 93, 46, 99, 104, 105, 108, 100, 50, 32, 61, 61, 32, 105, 65, 0 ], "i8", A);

C([ 105, 110, 116, 51, 50, 32, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 67, 111, 109, 112, 117, 116, 101, 72, 101, 105, 103, 104, 116, 40, 105, 110, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", A);

C([ 118, 111, 105, 100, 32, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 86, 97, 108, 105, 100, 97, 116, 101, 83, 116, 114, 117, 99, 116, 117, 114, 101, 40, 105, 110, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", A);

C([ 109, 95, 110, 111, 100, 101, 115, 91, 105, 110, 100, 101, 120, 93, 46, 112, 97, 114, 101, 110, 116, 32, 61, 61, 32, 40, 45, 49, 41, 0 ], "i8", A);

C([ 99, 104, 105, 108, 100, 49, 32, 61, 61, 32, 40, 45, 49, 41, 0 ], "i8", A);

C([ 99, 104, 105, 108, 100, 50, 32, 61, 61, 32, 40, 45, 49, 41, 0 ], "i8", A);

C([ 110, 111, 100, 101, 45, 62, 104, 101, 105, 103, 104, 116, 32, 61, 61, 32, 48, 0 ], "i8", A);

C([ 48, 32, 60, 61, 32, 99, 104, 105, 108, 100, 49, 32, 38, 38, 32, 99, 104, 105, 108, 100, 49, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", A);

C([ 48, 32, 60, 61, 32, 99, 104, 105, 108, 100, 50, 32, 38, 38, 32, 99, 104, 105, 108, 100, 50, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", A);

C([ 109, 95, 110, 111, 100, 101, 115, 91, 99, 104, 105, 108, 100, 49, 93, 46, 112, 97, 114, 101, 110, 116, 32, 61, 61, 32, 105, 110, 100, 101, 120, 0 ], "i8", A);

C([ 109, 95, 110, 111, 100, 101, 115, 91, 99, 104, 105, 108, 100, 50, 93, 46, 112, 97, 114, 101, 110, 116, 32, 61, 61, 32, 105, 110, 100, 101, 120, 0 ], "i8", A);

C([ 118, 111, 105, 100, 32, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 86, 97, 108, 105, 100, 97, 116, 101, 77, 101, 116, 114, 105, 99, 115, 40, 105, 110, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", A);

C([ 110, 111, 100, 101, 45, 62, 104, 101, 105, 103, 104, 116, 32, 61, 61, 32, 104, 101, 105, 103, 104, 116, 0 ], "i8", A);

C([ 97, 97, 98, 98, 46, 108, 111, 119, 101, 114, 66, 111, 117, 110, 100, 32, 61, 61, 32, 110, 111, 100, 101, 45, 62, 97, 97, 98, 98, 46, 108, 111, 119, 101, 114, 66, 111, 117, 110, 100, 0 ], "i8", A);

C([ 97, 97, 98, 98, 46, 117, 112, 112, 101, 114, 66, 111, 117, 110, 100, 32, 61, 61, 32, 110, 111, 100, 101, 45, 62, 97, 97, 98, 98, 46, 117, 112, 112, 101, 114, 66, 111, 117, 110, 100, 0 ], "i8", A);

C([ 118, 111, 105, 100, 32, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 86, 97, 108, 105, 100, 97, 116, 101, 40, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", A);

C([ 48, 32, 60, 61, 32, 102, 114, 101, 101, 73, 110, 100, 101, 120, 32, 38, 38, 32, 102, 114, 101, 101, 73, 110, 100, 101, 120, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", A);

C([ 71, 101, 116, 72, 101, 105, 103, 104, 116, 40, 41, 32, 61, 61, 32, 67, 111, 109, 112, 117, 116, 101, 72, 101, 105, 103, 104, 116, 40, 41, 0 ], "i8", A);

C([ 109, 95, 110, 111, 100, 101, 67, 111, 117, 110, 116, 32, 43, 32, 102, 114, 101, 101, 67, 111, 117, 110, 116, 32, 61, 61, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", A);

C([ 105, 110, 116, 51, 50, 32, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 71, 101, 116, 77, 97, 120, 66, 97, 108, 97, 110, 99, 101, 40, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", A);

C([ 110, 111, 100, 101, 45, 62, 73, 115, 76, 101, 97, 102, 40, 41, 32, 61, 61, 32, 102, 97, 108, 115, 101, 0 ], "i8", A);

mh = C(1, "i32", A);

wh = C(1, "i32", A);

xh = C(1, "i32", A);

uh = C(1, "i32", A);

vh = C(1, "i32", A);

oh = C([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 108, 108, 105, 115, 105, 111, 110, 47, 98, 50, 84, 105, 109, 101, 79, 102, 73, 109, 112, 97, 99, 116, 46, 99, 112, 112, 0 ], "i8", A);

ph = C([ 118, 111, 105, 100, 32, 98, 50, 84, 105, 109, 101, 79, 102, 73, 109, 112, 97, 99, 116, 40, 98, 50, 84, 79, 73, 79, 117, 116, 112, 117, 116, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 79, 73, 73, 110, 112, 117, 116, 32, 42, 41, 0 ], "i8", A);

qh = C([ 116, 97, 114, 103, 101, 116, 32, 62, 32, 116, 111, 108, 101, 114, 97, 110, 99, 101, 0 ], "i8", A);

Ph = C([ 102, 108, 111, 97, 116, 51, 50, 32, 98, 50, 83, 101, 112, 97, 114, 97, 116, 105, 111, 110, 70, 117, 110, 99, 116, 105, 111, 110, 58, 58, 69, 118, 97, 108, 117, 97, 116, 101, 40, 105, 110, 116, 51, 50, 44, 32, 105, 110, 116, 51, 50, 44, 32, 102, 108, 111, 97, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", A);

Bh = C([ 102, 108, 111, 97, 116, 51, 50, 32, 98, 50, 83, 101, 112, 97, 114, 97, 116, 105, 111, 110, 70, 117, 110, 99, 116, 105, 111, 110, 58, 58, 70, 105, 110, 100, 77, 105, 110, 83, 101, 112, 97, 114, 97, 116, 105, 111, 110, 40, 105, 110, 116, 51, 50, 32, 42, 44, 32, 105, 110, 116, 51, 50, 32, 42, 44, 32, 102, 108, 111, 97, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", A);

zh = C([ 102, 108, 111, 97, 116, 51, 50, 32, 98, 50, 83, 101, 112, 97, 114, 97, 116, 105, 111, 110, 70, 117, 110, 99, 116, 105, 111, 110, 58, 58, 73, 110, 105, 116, 105, 97, 108, 105, 122, 101, 40, 99, 111, 110, 115, 116, 32, 98, 50, 83, 105, 109, 112, 108, 101, 120, 67, 97, 99, 104, 101, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 80, 114, 111, 120, 121, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 83, 119, 101, 101, 112, 32, 38, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 80, 114, 111, 120, 121, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 83, 119, 101, 101, 112, 32, 38, 44, 32, 102, 108, 111, 97, 116, 51, 50, 41, 0 ], "i8", A);

Ah = C([ 48, 32, 60, 32, 99, 111, 117, 110, 116, 32, 38, 38, 32, 99, 111, 117, 110, 116, 32, 60, 32, 51, 0 ], "i8", A);

Dh = C([ 0, 0, 42, 44, 46, 48, 50, 52, 54, 56 ], "i8*", A);

C(1, "void*", A);

Fh = C([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 108, 108, 105, 115, 105, 111, 110, 47, 83, 104, 97, 112, 101, 115, 47, 98, 50, 67, 104, 97, 105, 110, 83, 104, 97, 112, 101, 46, 99, 112, 112, 0 ], "i8", A);

C([ 118, 111, 105, 100, 32, 98, 50, 67, 104, 97, 105, 110, 83, 104, 97, 112, 101, 58, 58, 67, 114, 101, 97, 116, 101, 76, 111, 111, 112, 40, 99, 111, 110, 115, 116, 32, 98, 50, 86, 101, 99, 50, 32, 42, 44, 32, 105, 110, 116, 51, 50, 41, 0 ], "i8", A);

Vh = C([ 109, 95, 118, 101, 114, 116, 105, 99, 101, 115, 32, 61, 61, 32, 95, 95, 110, 117, 108, 108, 32, 38, 38, 32, 109, 95, 99, 111, 117, 110, 116, 32, 61, 61, 32, 48, 0 ], "i8", A);

Uh = C([ 118, 111, 105, 100, 32, 98, 50, 67, 104, 97, 105, 110, 83, 104, 97, 112, 101, 58, 58, 67, 114, 101, 97, 116, 101, 67, 104, 97, 105, 110, 40, 99, 111, 110, 115, 116, 32, 98, 50, 86, 101, 99, 50, 32, 42, 44, 32, 105, 110, 116, 51, 50, 41, 0 ], "i8", A);

Wh = C([ 99, 111, 117, 110, 116, 32, 62, 61, 32, 50, 0 ], "i8", A);

Gh = C([ 118, 111, 105, 100, 32, 98, 50, 67, 104, 97, 105, 110, 83, 104, 97, 112, 101, 58, 58, 71, 101, 116, 67, 104, 105, 108, 100, 69, 100, 103, 101, 40, 98, 50, 69, 100, 103, 101, 83, 104, 97, 112, 101, 32, 42, 44, 32, 105, 110, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", A);

Hh = C([ 48, 32, 60, 61, 32, 105, 110, 100, 101, 120, 32, 38, 38, 32, 105, 110, 100, 101, 120, 32, 60, 32, 109, 95, 99, 111, 117, 110, 116, 32, 45, 32, 49, 0 ], "i8", A);

Yh = C([ 118, 105, 114, 116, 117, 97, 108, 32, 98, 111, 111, 108, 32, 98, 50, 67, 104, 97, 105, 110, 83, 104, 97, 112, 101, 58, 58, 82, 97, 121, 67, 97, 115, 116, 40, 98, 50, 82, 97, 121, 67, 97, 115, 116, 79, 117, 116, 112, 117, 116, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 82, 97, 121, 67, 97, 115, 116, 73, 110, 112, 117, 116, 32, 38, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 44, 32, 105, 110, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", A);

Kh = C([ 99, 104, 105, 108, 100, 73, 110, 100, 101, 120, 32, 60, 32, 109, 95, 99, 111, 117, 110, 116, 0 ], "i8", A);

Jh = C([ 118, 105, 114, 116, 117, 97, 108, 32, 118, 111, 105, 100, 32, 98, 50, 67, 104, 97, 105, 110, 83, 104, 97, 112, 101, 58, 58, 67, 111, 109, 112, 117, 116, 101, 65, 65, 66, 66, 40, 98, 50, 65, 65, 66, 66, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 44, 32, 105, 110, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", A);

Np = C([ 49, 50, 98, 50, 67, 104, 97, 105, 110, 83, 104, 97, 112, 101, 0 ], "i8", A);

Op = C(3, "i8*", A);

Pp = C([ 0, 0, 58, 60, 62, 64, 66, 68, 70, 72 ], "i8*", A);

C(1, "void*", A);

Qp = C([ 49, 51, 98, 50, 67, 105, 114, 99, 108, 101, 83, 104, 97, 112, 101, 0 ], "i8", A);

Rp = C(3, "i8*", A);

jc = C([ 0, 0, 74, 76, 78, 80, 82, 84, 86, 88 ], "i8*", A);

C(1, "void*", A);

Sp = C([ 49, 49, 98, 50, 69, 100, 103, 101, 83, 104, 97, 112, 101, 0 ], "i8", A);

Tp = C(3, "i8*", A);

fi = C([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 108, 108, 105, 115, 105, 111, 110, 47, 83, 104, 97, 112, 101, 115, 47, 98, 50, 80, 111, 108, 121, 103, 111, 110, 83, 104, 97, 112, 101, 46, 99, 112, 112, 0 ], "i8", A);

C([ 118, 111, 105, 100, 32, 98, 50, 80, 111, 108, 121, 103, 111, 110, 83, 104, 97, 112, 101, 58, 58, 83, 101, 116, 40, 99, 111, 110, 115, 116, 32, 98, 50, 86, 101, 99, 50, 32, 42, 44, 32, 105, 110, 116, 51, 50, 41, 0 ], "i8", A);

C([ 51, 32, 60, 61, 32, 99, 111, 117, 110, 116, 32, 38, 38, 32, 99, 111, 117, 110, 116, 32, 60, 61, 32, 56, 0 ], "i8", A);

C([ 101, 100, 103, 101, 46, 76, 101, 110, 103, 116, 104, 83, 113, 117, 97, 114, 101, 100, 40, 41, 32, 62, 32, 49, 46, 49, 57, 50, 48, 57, 50, 57, 48, 69, 45, 48, 55, 70, 32, 42, 32, 49, 46, 49, 57, 50, 48, 57, 50, 57, 48, 69, 45, 48, 55, 70, 0 ], "i8", A);

gi = C([ 118, 105, 114, 116, 117, 97, 108, 32, 98, 111, 111, 108, 32, 98, 50, 80, 111, 108, 121, 103, 111, 110, 83, 104, 97, 112, 101, 58, 58, 82, 97, 121, 67, 97, 115, 116, 40, 98, 50, 82, 97, 121, 67, 97, 115, 116, 79, 117, 116, 112, 117, 116, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 82, 97, 121, 67, 97, 115, 116, 73, 110, 112, 117, 116, 32, 38, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 44, 32, 105, 110, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", A);

hi = C([ 48, 46, 48, 102, 32, 60, 61, 32, 108, 111, 119, 101, 114, 32, 38, 38, 32, 108, 111, 119, 101, 114, 32, 60, 61, 32, 105, 110, 112, 117, 116, 46, 109, 97, 120, 70, 114, 97, 99, 116, 105, 111, 110, 0 ], "i8", A);

ji = C([ 118, 105, 114, 116, 117, 97, 108, 32, 118, 111, 105, 100, 32, 98, 50, 80, 111, 108, 121, 103, 111, 110, 83, 104, 97, 112, 101, 58, 58, 67, 111, 109, 112, 117, 116, 101, 77, 97, 115, 115, 40, 98, 50, 77, 97, 115, 115, 68, 97, 116, 97, 32, 42, 44, 32, 102, 108, 111, 97, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", A);

ki = C([ 109, 95, 118, 101, 114, 116, 101, 120, 67, 111, 117, 110, 116, 32, 62, 61, 32, 51, 0 ], "i8", A);

li = C([ 97, 114, 101, 97, 32, 62, 32, 49, 46, 49, 57, 50, 48, 57, 50, 57, 48, 69, 45, 48, 55, 70, 0 ], "i8", A);

ac = C([ 0, 0, 90, 92, 94, 96, 98, 100, 102, 104 ], "i8*", A);

C(1, "void*", A);

Up = C([ 49, 52, 98, 50, 80, 111, 108, 121, 103, 111, 110, 83, 104, 97, 112, 101, 0 ], "i8", A);

Vp = C(3, "i8*", A);

C([ 98, 50, 86, 101, 99, 50, 32, 67, 111, 109, 112, 117, 116, 101, 67, 101, 110, 116, 114, 111, 105, 100, 40, 99, 111, 110, 115, 116, 32, 98, 50, 86, 101, 99, 50, 32, 42, 44, 32, 105, 110, 116, 51, 50, 41, 0 ], "i8", A);

C([ 99, 111, 117, 110, 116, 32, 62, 61, 32, 51, 0 ], "i8", A);

ri = C([ 16, 32, 64, 96, 128, 160, 192, 224, 256, 320, 384, 448, 512, 640 ], "i32", A);

si = C(641, "i8", A);

ni = C(1, "i8", A);

oi = C([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 109, 109, 111, 110, 47, 98, 50, 66, 108, 111, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 46, 99, 112, 112, 0 ], "i8", A);

pi = C([ 98, 50, 66, 108, 111, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 58, 58, 98, 50, 66, 108, 111, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 40, 41, 0 ], "i8", A);

qi = C([ 106, 32, 60, 32, 98, 50, 95, 98, 108, 111, 99, 107, 83, 105, 122, 101, 115, 0 ], "i8", A);

Ci = C([ 118, 111, 105, 100, 32, 42, 98, 50, 66, 108, 111, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 58, 58, 65, 108, 108, 111, 99, 97, 116, 101, 40, 105, 110, 116, 51, 50, 41, 0 ], "i8", A);

vi = C([ 48, 32, 60, 32, 115, 105, 122, 101, 0 ], "i8", A);

wi = C([ 48, 32, 60, 61, 32, 105, 110, 100, 101, 120, 32, 38, 38, 32, 105, 110, 100, 101, 120, 32, 60, 32, 98, 50, 95, 98, 108, 111, 99, 107, 83, 105, 122, 101, 115, 0 ], "i8", A);

Di = C([ 98, 108, 111, 99, 107, 67, 111, 117, 110, 116, 32, 42, 32, 98, 108, 111, 99, 107, 83, 105, 122, 101, 32, 60, 61, 32, 98, 50, 95, 99, 104, 117, 110, 107, 83, 105, 122, 101, 0 ], "i8", A);

ui = C([ 118, 111, 105, 100, 32, 98, 50, 66, 108, 111, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 58, 58, 70, 114, 101, 101, 40, 118, 111, 105, 100, 32, 42, 44, 32, 105, 110, 116, 51, 50, 41, 0 ], "i8", A);

Wp = C([ 0, 0, 106, 108, 40, 40, 40, 40, 40, 40 ], "i8*", A);

C(1, "void*", A);

Xp = C([ 54, 98, 50, 68, 114, 97, 119, 0 ], "i8", A);

Yp = C(2, "i8*", A);

Ce = C(2, "float", A);

C([ 2, 2, 1 ], "i32", A);

Ji = C([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 109, 109, 111, 110, 47, 98, 50, 83, 116, 97, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 46, 99, 112, 112, 0 ], "i8", A);

Ki = C([ 98, 50, 83, 116, 97, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 58, 58, 126, 98, 50, 83, 116, 97, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 40, 41, 0 ], "i8", A);

Li = C([ 109, 95, 105, 110, 100, 101, 120, 32, 61, 61, 32, 48, 0 ], "i8", A);

Mi = C([ 109, 95, 101, 110, 116, 114, 121, 67, 111, 117, 110, 116, 32, 61, 61, 32, 48, 0 ], "i8", A);

Ui = C([ 118, 111, 105, 100, 32, 42, 98, 50, 83, 116, 97, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 58, 58, 65, 108, 108, 111, 99, 97, 116, 101, 40, 105, 110, 116, 51, 50, 41, 0 ], "i8", A);

Vi = C([ 109, 95, 101, 110, 116, 114, 121, 67, 111, 117, 110, 116, 32, 60, 32, 98, 50, 95, 109, 97, 120, 83, 116, 97, 99, 107, 69, 110, 116, 114, 105, 101, 115, 0 ], "i8", A);

Oi = C([ 118, 111, 105, 100, 32, 98, 50, 83, 116, 97, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 58, 58, 70, 114, 101, 101, 40, 118, 111, 105, 100, 32, 42, 41, 0 ], "i8", A);

Pi = C([ 109, 95, 101, 110, 116, 114, 121, 67, 111, 117, 110, 116, 32, 62, 32, 48, 0 ], "i8", A);

Qi = C([ 112, 32, 61, 61, 32, 101, 110, 116, 114, 121, 45, 62, 100, 97, 116, 97, 0 ], "i8", A);

aj = C([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 98, 50, 66, 111, 100, 121, 46, 99, 112, 112, 0 ], "i8", A);

bj = C([ 98, 50, 66, 111, 100, 121, 58, 58, 98, 50, 66, 111, 100, 121, 40, 99, 111, 110, 115, 116, 32, 98, 50, 66, 111, 100, 121, 68, 101, 102, 32, 42, 44, 32, 98, 50, 87, 111, 114, 108, 100, 32, 42, 41, 0 ], "i8", A);

cj = C([ 98, 100, 45, 62, 112, 111, 115, 105, 116, 105, 111, 110, 46, 73, 115, 86, 97, 108, 105, 100, 40, 41, 0 ], "i8", A);

dj = C([ 98, 100, 45, 62, 108, 105, 110, 101, 97, 114, 86, 101, 108, 111, 99, 105, 116, 121, 46, 73, 115, 86, 97, 108, 105, 100, 40, 41, 0 ], "i8", A);

ej = C([ 98, 50, 73, 115, 86, 97, 108, 105, 100, 40, 98, 100, 45, 62, 97, 110, 103, 108, 101, 41, 0 ], "i8", A);

fj = C([ 98, 50, 73, 115, 86, 97, 108, 105, 100, 40, 98, 100, 45, 62, 97, 110, 103, 117, 108, 97, 114, 86, 101, 108, 111, 99, 105, 116, 121, 41, 0 ], "i8", A);

gj = C([ 98, 50, 73, 115, 86, 97, 108, 105, 100, 40, 98, 100, 45, 62, 97, 110, 103, 117, 108, 97, 114, 68, 97, 109, 112, 105, 110, 103, 41, 32, 38, 38, 32, 98, 100, 45, 62, 97, 110, 103, 117, 108, 97, 114, 68, 97, 109, 112, 105, 110, 103, 32, 62, 61, 32, 48, 46, 48, 102, 0 ], "i8", A);

hj = C([ 98, 50, 73, 115, 86, 97, 108, 105, 100, 40, 98, 100, 45, 62, 108, 105, 110, 101, 97, 114, 68, 97, 109, 112, 105, 110, 103, 41, 32, 38, 38, 32, 98, 100, 45, 62, 108, 105, 110, 101, 97, 114, 68, 97, 109, 112, 105, 110, 103, 32, 62, 61, 32, 48, 46, 48, 102, 0 ], "i8", A);

C([ 118, 111, 105, 100, 32, 98, 50, 66, 111, 100, 121, 58, 58, 83, 101, 116, 84, 121, 112, 101, 40, 98, 50, 66, 111, 100, 121, 84, 121, 112, 101, 41, 0 ], "i8", A);

sj = C([ 109, 95, 119, 111, 114, 108, 100, 45, 62, 73, 115, 76, 111, 99, 107, 101, 100, 40, 41, 32, 61, 61, 32, 102, 97, 108, 115, 101, 0 ], "i8", A);

rj = C([ 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 98, 50, 66, 111, 100, 121, 58, 58, 67, 114, 101, 97, 116, 101, 70, 105, 120, 116, 117, 114, 101, 40, 99, 111, 110, 115, 116, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 68, 101, 102, 32, 42, 41, 0 ], "i8", A);

C([ 118, 111, 105, 100, 32, 98, 50, 66, 111, 100, 121, 58, 58, 68, 101, 115, 116, 114, 111, 121, 70, 105, 120, 116, 117, 114, 101, 40, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 41, 0 ], "i8", A);

C([ 102, 105, 120, 116, 117, 114, 101, 45, 62, 109, 95, 98, 111, 100, 121, 32, 61, 61, 32, 116, 104, 105, 115, 0 ], "i8", A);

C([ 109, 95, 102, 105, 120, 116, 117, 114, 101, 67, 111, 117, 110, 116, 32, 62, 32, 48, 0 ], "i8", A);

C([ 102, 111, 117, 110, 100, 0 ], "i8", A);

jj = C([ 118, 111, 105, 100, 32, 98, 50, 66, 111, 100, 121, 58, 58, 82, 101, 115, 101, 116, 77, 97, 115, 115, 68, 97, 116, 97, 40, 41, 0 ], "i8", A);

kj = C([ 109, 95, 116, 121, 112, 101, 32, 61, 61, 32, 98, 50, 95, 100, 121, 110, 97, 109, 105, 99, 66, 111, 100, 121, 0 ], "i8", A);

lj = C([ 109, 95, 73, 32, 62, 32, 48, 46, 48, 102, 0 ], "i8", A);

C([ 118, 111, 105, 100, 32, 98, 50, 66, 111, 100, 121, 58, 58, 83, 101, 116, 77, 97, 115, 115, 68, 97, 116, 97, 40, 99, 111, 110, 115, 116, 32, 98, 50, 77, 97, 115, 115, 68, 97, 116, 97, 32, 42, 41, 0 ], "i8", A);

C([ 118, 111, 105, 100, 32, 98, 50, 66, 111, 100, 121, 58, 58, 83, 101, 116, 84, 114, 97, 110, 115, 102, 111, 114, 109, 40, 99, 111, 110, 115, 116, 32, 98, 50, 86, 101, 99, 50, 32, 38, 44, 32, 102, 108, 111, 97, 116, 51, 50, 41, 0 ], "i8", A);

C([ 118, 111, 105, 100, 32, 98, 50, 66, 111, 100, 121, 58, 58, 83, 101, 116, 65, 99, 116, 105, 118, 101, 40, 98, 111, 111, 108, 41, 0 ], "i8", A);

C([ 32, 32, 98, 50, 66, 111, 100, 121, 68, 101, 102, 32, 98, 100, 59, 10, 0 ], "i8", A);

C([ 32, 32, 98, 100, 46, 116, 121, 112, 101, 32, 61, 32, 98, 50, 66, 111, 100, 121, 84, 121, 112, 101, 40, 37, 100, 41, 59, 10, 0 ], "i8", A);

C([ 32, 32, 98, 100, 46, 112, 111, 115, 105, 116, 105, 111, 110, 46, 83, 101, 116, 40, 37, 46, 49, 53, 108, 101, 102, 44, 32, 37, 46, 49, 53, 108, 101, 102, 41, 59, 10, 0 ], "i8", A);

C([ 32, 32, 98, 100, 46, 97, 110, 103, 108, 101, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0 ], "i8", A);

C([ 32, 32, 98, 100, 46, 108, 105, 110, 101, 97, 114, 86, 101, 108, 111, 99, 105, 116, 121, 46, 83, 101, 116, 40, 37, 46, 49, 53, 108, 101, 102, 44, 32, 37, 46, 49, 53, 108, 101, 102, 41, 59, 10, 0 ], "i8", A);

C([ 32, 32, 98, 100, 46, 97, 110, 103, 117, 108, 97, 114, 86, 101, 108, 111, 99, 105, 116, 121, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0 ], "i8", A);

C([ 32, 32, 98, 100, 46, 108, 105, 110, 101, 97, 114, 68, 97, 109, 112, 105, 110, 103, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0 ], "i8", A);

C([ 32, 32, 98, 100, 46, 97, 110, 103, 117, 108, 97, 114, 68, 97, 109, 112, 105, 110, 103, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0 ], "i8", A);

C([ 32, 32, 98, 100, 46, 97, 108, 108, 111, 119, 83, 108, 101, 101, 112, 32, 61, 32, 98, 111, 111, 108, 40, 37, 100, 41, 59, 10, 0 ], "i8", A);

C([ 32, 32, 98, 100, 46, 97, 119, 97, 107, 101, 32, 61, 32, 98, 111, 111, 108, 40, 37, 100, 41, 59, 10, 0 ], "i8", A);

C([ 32, 32, 98, 100, 46, 102, 105, 120, 101, 100, 82, 111, 116, 97, 116, 105, 111, 110, 32, 61, 32, 98, 111, 111, 108, 40, 37, 100, 41, 59, 10, 0 ], "i8", A);

C([ 32, 32, 98, 100, 46, 98, 117, 108, 108, 101, 116, 32, 61, 32, 98, 111, 111, 108, 40, 37, 100, 41, 59, 10, 0 ], "i8", A);

C([ 32, 32, 98, 100, 46, 97, 99, 116, 105, 118, 101, 32, 61, 32, 98, 111, 111, 108, 40, 37, 100, 41, 59, 10, 0 ], "i8", A);

C([ 32, 32, 98, 100, 46, 103, 114, 97, 118, 105, 116, 121, 83, 99, 97, 108, 101, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0 ], "i8", A);

C([ 32, 32, 98, 111, 100, 105, 101, 115, 91, 37, 100, 93, 32, 61, 32, 109, 95, 119, 111, 114, 108, 100, 45, 62, 67, 114, 101, 97, 116, 101, 66, 111, 100, 121, 40, 38, 98, 100, 41, 59, 10, 0 ], "i8", A);

C([ 32, 32, 123, 10, 0 ], "i8", A);

C([ 32, 32, 125, 10, 0 ], "i8", A);

yj = C(1, "i32 (...)**", A);

zj = C(1, "i32 (...)**", A);

Pj = C([ 118, 111, 105, 100, 32, 42, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 71, 101, 116, 85, 115, 101, 114, 68, 97, 116, 97, 40, 105, 110, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", A);

Wg = C([ 48, 32, 60, 61, 32, 112, 114, 111, 120, 121, 73, 100, 32, 38, 38, 32, 112, 114, 111, 120, 121, 73, 100, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", A);

Sj = C([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 109, 109, 111, 110, 47, 98, 50, 71, 114, 111, 119, 97, 98, 108, 101, 83, 116, 97, 99, 107, 46, 104, 0 ], "i8", A);

Tj = C([ 105, 110, 116, 32, 98, 50, 71, 114, 111, 119, 97, 98, 108, 101, 83, 116, 97, 99, 107, 60, 105, 110, 116, 44, 32, 50, 53, 54, 62, 58, 58, 80, 111, 112, 40, 41, 0 ], "i8", A);

Uj = C([ 109, 95, 99, 111, 117, 110, 116, 32, 62, 32, 48, 0 ], "i8", A);

Oj = C([ 99, 111, 110, 115, 116, 32, 98, 50, 65, 65, 66, 66, 32, 38, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 71, 101, 116, 70, 97, 116, 65, 65, 66, 66, 40, 105, 110, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", A);

$p = C([ 0, 0, 6, 110, 112, 114, 116, 118 ], "i8*", A);

C(1, "void*", A);

aq = C([ 49, 55, 98, 50, 67, 111, 110, 116, 97, 99, 116, 76, 105, 115, 116, 101, 110, 101, 114, 0 ], "i8", A);

bq = C(2, "i8*", A);

ak = C([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 98, 50, 70, 105, 120, 116, 117, 114, 101, 46, 99, 112, 112, 0 ], "i8", A);

bk = C([ 118, 111, 105, 100, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 58, 58, 68, 101, 115, 116, 114, 111, 121, 40, 98, 50, 66, 108, 111, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 32, 42, 41, 0 ], "i8", A);

ck = C([ 109, 95, 112, 114, 111, 120, 121, 67, 111, 117, 110, 116, 32, 61, 61, 32, 48, 0 ], "i8", A);

dk = C([ 118, 111, 105, 100, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 58, 58, 67, 114, 101, 97, 116, 101, 80, 114, 111, 120, 105, 101, 115, 40, 98, 50, 66, 114, 111, 97, 100, 80, 104, 97, 115, 101, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 41, 0 ], "i8", A);

C([ 32, 32, 32, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 68, 101, 102, 32, 102, 100, 59, 10, 0 ], "i8", A);

C([ 32, 32, 32, 32, 102, 100, 46, 102, 114, 105, 99, 116, 105, 111, 110, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0 ], "i8", A);

C([ 32, 32, 32, 32, 102, 100, 46, 114, 101, 115, 116, 105, 116, 117, 116, 105, 111, 110, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0 ], "i8", A);

C([ 32, 32, 32, 32, 102, 100, 46, 100, 101, 110, 115, 105, 116, 121, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0 ], "i8", A);

C([ 32, 32, 32, 32, 102, 100, 46, 105, 115, 83, 101, 110, 115, 111, 114, 32, 61, 32, 98, 111, 111, 108, 40, 37, 100, 41, 59, 10, 0 ], "i8", A);

C([ 32, 32, 32, 32, 102, 100, 46, 102, 105, 108, 116, 101, 114, 46, 99, 97, 116, 101, 103, 111, 114, 121, 66, 105, 116, 115, 32, 61, 32, 117, 105, 110, 116, 49, 54, 40, 37, 100, 41, 59, 10, 0 ], "i8", A);

C([ 32, 32, 32, 32, 102, 100, 46, 102, 105, 108, 116, 101, 114, 46, 109, 97, 115, 107, 66, 105, 116, 115, 32, 61, 32, 117, 105, 110, 116, 49, 54, 40, 37, 100, 41, 59, 10, 0 ], "i8", A);

C([ 32, 32, 32, 32, 102, 100, 46, 102, 105, 108, 116, 101, 114, 46, 103, 114, 111, 117, 112, 73, 110, 100, 101, 120, 32, 61, 32, 105, 110, 116, 49, 54, 40, 37, 100, 41, 59, 10, 0 ], "i8", A);

C([ 32, 32, 32, 32, 98, 50, 67, 105, 114, 99, 108, 101, 83, 104, 97, 112, 101, 32, 115, 104, 97, 112, 101, 59, 10, 0 ], "i8", A);

C([ 32, 32, 32, 32, 115, 104, 97, 112, 101, 46, 109, 95, 114, 97, 100, 105, 117, 115, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0 ], "i8", A);

C([ 32, 32, 32, 32, 115, 104, 97, 112, 101, 46, 109, 95, 112, 46, 83, 101, 116, 40, 37, 46, 49, 53, 108, 101, 102, 44, 32, 37, 46, 49, 53, 108, 101, 102, 41, 59, 10, 0 ], "i8", A);

C([ 32, 32, 32, 32, 98, 50, 69, 100, 103, 101, 83, 104, 97, 112, 101, 32, 115, 104, 97, 112, 101, 59, 10, 0 ], "i8", A);

C([ 32, 32, 32, 32, 115, 104, 97, 112, 101, 46, 109, 95, 118, 101, 114, 116, 101, 120, 48, 46, 83, 101, 116, 40, 37, 46, 49, 53, 108, 101, 102, 44, 32, 37, 46, 49, 53, 108, 101, 102, 41, 59, 10, 0 ], "i8", A);

C([ 32, 32, 32, 32, 115, 104, 97, 112, 101, 46, 109, 95, 118, 101, 114, 116, 101, 120, 49, 46, 83, 101, 116, 40, 37, 46, 49, 53, 108, 101, 102, 44, 32, 37, 46, 49, 53, 108, 101, 102, 41, 59, 10, 0 ], "i8", A);

C([ 32, 32, 32, 32, 115, 104, 97, 112, 101, 46, 109, 95, 118, 101, 114, 116, 101, 120, 50, 46, 83, 101, 116, 40, 37, 46, 49, 53, 108, 101, 102, 44, 32, 37, 46, 49, 53, 108, 101, 102, 41, 59, 10, 0 ], "i8", A);

C([ 32, 32, 32, 32, 115, 104, 97, 112, 101, 46, 109, 95, 118, 101, 114, 116, 101, 120, 51, 46, 83, 101, 116, 40, 37, 46, 49, 53, 108, 101, 102, 44, 32, 37, 46, 49, 53, 108, 101, 102, 41, 59, 10, 0 ], "i8", A);

C([ 32, 32, 32, 32, 115, 104, 97, 112, 101, 46, 109, 95, 104, 97, 115, 86, 101, 114, 116, 101, 120, 48, 32, 61, 32, 98, 111, 111, 108, 40, 37, 100, 41, 59, 10, 0 ], "i8", A);

C([ 32, 32, 32, 32, 115, 104, 97, 112, 101, 46, 109, 95, 104, 97, 115, 86, 101, 114, 116, 101, 120, 51, 32, 61, 32, 98, 111, 111, 108, 40, 37, 100, 41, 59, 10, 0 ], "i8", A);

C([ 32, 32, 32, 32, 98, 50, 80, 111, 108, 121, 103, 111, 110, 83, 104, 97, 112, 101, 32, 115, 104, 97, 112, 101, 59, 10, 0 ], "i8", A);

C([ 32, 32, 32, 32, 98, 50, 86, 101, 99, 50, 32, 118, 115, 91, 37, 100, 93, 59, 10, 0 ], "i8", A);

C([ 32, 32, 32, 32, 118, 115, 91, 37, 100, 93, 46, 83, 101, 116, 40, 37, 46, 49, 53, 108, 101, 102, 44, 32, 37, 46, 49, 53, 108, 101, 102, 41, 59, 10, 0 ], "i8", A);

C([ 32, 32, 32, 32, 115, 104, 97, 112, 101, 46, 83, 101, 116, 40, 118, 115, 44, 32, 37, 100, 41, 59, 10, 0 ], "i8", A);

C([ 32, 32, 32, 32, 98, 50, 67, 104, 97, 105, 110, 83, 104, 97, 112, 101, 32, 115, 104, 97, 112, 101, 59, 10, 0 ], "i8", A);

C([ 32, 32, 32, 32, 115, 104, 97, 112, 101, 46, 67, 114, 101, 97, 116, 101, 67, 104, 97, 105, 110, 40, 118, 115, 44, 32, 37, 100, 41, 59, 10, 0 ], "i8", A);

C([ 32, 32, 32, 32, 115, 104, 97, 112, 101, 46, 109, 95, 112, 114, 101, 118, 86, 101, 114, 116, 101, 120, 46, 83, 101, 116, 40, 37, 46, 49, 53, 108, 101, 102, 44, 32, 37, 46, 49, 53, 108, 101, 102, 41, 59, 10, 0 ], "i8", A);

C([ 32, 32, 32, 32, 115, 104, 97, 112, 101, 46, 109, 95, 110, 101, 120, 116, 86, 101, 114, 116, 101, 120, 46, 83, 101, 116, 40, 37, 46, 49, 53, 108, 101, 102, 44, 32, 37, 46, 49, 53, 108, 101, 102, 41, 59, 10, 0 ], "i8", A);

C([ 32, 32, 32, 32, 115, 104, 97, 112, 101, 46, 109, 95, 104, 97, 115, 80, 114, 101, 118, 86, 101, 114, 116, 101, 120, 32, 61, 32, 98, 111, 111, 108, 40, 37, 100, 41, 59, 10, 0 ], "i8", A);

C([ 32, 32, 32, 32, 115, 104, 97, 112, 101, 46, 109, 95, 104, 97, 115, 78, 101, 120, 116, 86, 101, 114, 116, 101, 120, 32, 61, 32, 98, 111, 111, 108, 40, 37, 100, 41, 59, 10, 0 ], "i8", A);

C([ 10, 0 ], "i8", A);

C([ 32, 32, 32, 32, 102, 100, 46, 115, 104, 97, 112, 101, 32, 61, 32, 38, 115, 104, 97, 112, 101, 59, 10, 0 ], "i8", A);

C([ 32, 32, 32, 32, 98, 111, 100, 105, 101, 115, 91, 37, 100, 93, 45, 62, 67, 114, 101, 97, 116, 101, 70, 105, 120, 116, 117, 114, 101, 40, 38, 102, 100, 41, 59, 10, 0 ], "i8", A);

sk = C([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 98, 50, 73, 115, 108, 97, 110, 100, 46, 99, 112, 112, 0 ], "i8", A);

tk = C([ 118, 111, 105, 100, 32, 98, 50, 73, 115, 108, 97, 110, 100, 58, 58, 83, 111, 108, 118, 101, 84, 79, 73, 40, 99, 111, 110, 115, 116, 32, 98, 50, 84, 105, 109, 101, 83, 116, 101, 112, 32, 38, 44, 32, 105, 110, 116, 51, 50, 44, 32, 105, 110, 116, 51, 50, 41, 0 ], "i8", A);

uk = C([ 116, 111, 105, 73, 110, 100, 101, 120, 65, 32, 60, 32, 109, 95, 98, 111, 100, 121, 67, 111, 117, 110, 116, 0 ], "i8", A);

vk = C([ 116, 111, 105, 73, 110, 100, 101, 120, 66, 32, 60, 32, 109, 95, 98, 111, 100, 121, 67, 111, 117, 110, 116, 0 ], "i8", A);

xk = C([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 98, 50, 87, 111, 114, 108, 100, 46, 99, 112, 112, 0 ], "i8", A);

yk = C([ 98, 50, 66, 111, 100, 121, 32, 42, 98, 50, 87, 111, 114, 108, 100, 58, 58, 67, 114, 101, 97, 116, 101, 66, 111, 100, 121, 40, 99, 111, 110, 115, 116, 32, 98, 50, 66, 111, 100, 121, 68, 101, 102, 32, 42, 41, 0 ], "i8", A);

zk = C([ 73, 115, 76, 111, 99, 107, 101, 100, 40, 41, 32, 61, 61, 32, 102, 97, 108, 115, 101, 0 ], "i8", A);

C([ 118, 111, 105, 100, 32, 98, 50, 87, 111, 114, 108, 100, 58, 58, 68, 101, 115, 116, 114, 111, 121, 66, 111, 100, 121, 40, 98, 50, 66, 111, 100, 121, 32, 42, 41, 0 ], "i8", A);

C([ 109, 95, 98, 111, 100, 121, 67, 111, 117, 110, 116, 32, 62, 32, 48, 0 ], "i8", A);

C([ 98, 50, 74, 111, 105, 110, 116, 32, 42, 98, 50, 87, 111, 114, 108, 100, 58, 58, 67, 114, 101, 97, 116, 101, 74, 111, 105, 110, 116, 40, 99, 111, 110, 115, 116, 32, 98, 50, 74, 111, 105, 110, 116, 68, 101, 102, 32, 42, 41, 0 ], "i8", A);

C([ 118, 111, 105, 100, 32, 98, 50, 87, 111, 114, 108, 100, 58, 58, 68, 101, 115, 116, 114, 111, 121, 74, 111, 105, 110, 116, 40, 98, 50, 74, 111, 105, 110, 116, 32, 42, 41, 0 ], "i8", A);

C([ 109, 95, 106, 111, 105, 110, 116, 67, 111, 117, 110, 116, 32, 62, 32, 48, 0 ], "i8", A);

Yk = C([ 118, 111, 105, 100, 32, 98, 50, 87, 111, 114, 108, 100, 58, 58, 83, 111, 108, 118, 101, 40, 99, 111, 110, 115, 116, 32, 98, 50, 84, 105, 109, 101, 83, 116, 101, 112, 32, 38, 41, 0 ], "i8", A);

Zk = C([ 98, 45, 62, 73, 115, 65, 99, 116, 105, 118, 101, 40, 41, 32, 61, 61, 32, 116, 114, 117, 101, 0 ], "i8", A);

$k = C([ 115, 116, 97, 99, 107, 67, 111, 117, 110, 116, 32, 60, 32, 115, 116, 97, 99, 107, 83, 105, 122, 101, 0 ], "i8", A);

dl = C([ 118, 111, 105, 100, 32, 98, 50, 87, 111, 114, 108, 100, 58, 58, 83, 111, 108, 118, 101, 84, 79, 73, 40, 99, 111, 110, 115, 116, 32, 98, 50, 84, 105, 109, 101, 83, 116, 101, 112, 32, 38, 41, 0 ], "i8", A);

el = C([ 116, 121, 112, 101, 65, 32, 61, 61, 32, 98, 50, 95, 100, 121, 110, 97, 109, 105, 99, 66, 111, 100, 121, 32, 124, 124, 32, 116, 121, 112, 101, 66, 32, 61, 61, 32, 98, 50, 95, 100, 121, 110, 97, 109, 105, 99, 66, 111, 100, 121, 0 ], "i8", A);

gl = C([ 97, 108, 112, 104, 97, 48, 32, 60, 32, 49, 46, 48, 102, 0 ], "i8", A);

C([ 118, 111, 105, 100, 32, 98, 50, 87, 111, 114, 108, 100, 58, 58, 68, 114, 97, 119, 83, 104, 97, 112, 101, 40, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 67, 111, 108, 111, 114, 32, 38, 41, 0 ], "i8", A);

C([ 118, 101, 114, 116, 101, 120, 67, 111, 117, 110, 116, 32, 60, 61, 32, 56, 0 ], "i8", A);

C([ 98, 50, 86, 101, 99, 50, 32, 103, 40, 37, 46, 49, 53, 108, 101, 102, 44, 32, 37, 46, 49, 53, 108, 101, 102, 41, 59, 10, 0 ], "i8", A);

C([ 109, 95, 119, 111, 114, 108, 100, 45, 62, 83, 101, 116, 71, 114, 97, 118, 105, 116, 121, 40, 103, 41, 59, 10, 0 ], "i8", A);

C([ 98, 50, 66, 111, 100, 121, 42, 42, 32, 98, 111, 100, 105, 101, 115, 32, 61, 32, 40, 98, 50, 66, 111, 100, 121, 42, 42, 41, 98, 50, 65, 108, 108, 111, 99, 40, 37, 100, 32, 42, 32, 115, 105, 122, 101, 111, 102, 40, 98, 50, 66, 111, 100, 121, 42, 41, 41, 59, 10, 0 ], "i8", A);

C([ 98, 50, 74, 111, 105, 110, 116, 42, 42, 32, 106, 111, 105, 110, 116, 115, 32, 61, 32, 40, 98, 50, 74, 111, 105, 110, 116, 42, 42, 41, 98, 50, 65, 108, 108, 111, 99, 40, 37, 100, 32, 42, 32, 115, 105, 122, 101, 111, 102, 40, 98, 50, 74, 111, 105, 110, 116, 42, 41, 41, 59, 10, 0 ], "i8", A);

C([ 123, 10, 0 ], "i8", A);

C([ 125, 10, 0 ], "i8", A);

C([ 98, 50, 70, 114, 101, 101, 40, 106, 111, 105, 110, 116, 115, 41, 59, 10, 0 ], "i8", A);

C([ 98, 50, 70, 114, 101, 101, 40, 98, 111, 100, 105, 101, 115, 41, 59, 10, 0 ], "i8", A);

C([ 106, 111, 105, 110, 116, 115, 32, 61, 32, 78, 85, 76, 76, 59, 10, 0 ], "i8", A);

C([ 98, 111, 100, 105, 101, 115, 32, 61, 32, 78, 85, 76, 76, 59, 10, 0 ], "i8", A);

Nj = C([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 108, 108, 105, 115, 105, 111, 110, 47, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 46, 104, 0 ], "i8", A);

C([ 118, 111, 105, 100, 32, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 82, 97, 121, 67, 97, 115, 116, 40, 98, 50, 87, 111, 114, 108, 100, 82, 97, 121, 67, 97, 115, 116, 87, 114, 97, 112, 112, 101, 114, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 82, 97, 121, 67, 97, 115, 116, 73, 110, 112, 117, 116, 32, 38, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", A);

C([ 114, 46, 76, 101, 110, 103, 116, 104, 83, 113, 117, 97, 114, 101, 100, 40, 41, 32, 62, 32, 48, 46, 48, 102, 0 ], "i8", A);

jl = C([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 109, 109, 111, 110, 47, 98, 50, 77, 97, 116, 104, 46, 104, 0 ], "i8", A);

kl = C([ 118, 111, 105, 100, 32, 98, 50, 83, 119, 101, 101, 112, 58, 58, 65, 100, 118, 97, 110, 99, 101, 40, 102, 108, 111, 97, 116, 51, 50, 41, 0 ], "i8", A);

Ck = C([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 98, 50, 73, 115, 108, 97, 110, 100, 46, 104, 0 ], "i8", A);

al = C([ 118, 111, 105, 100, 32, 98, 50, 73, 115, 108, 97, 110, 100, 58, 58, 65, 100, 100, 40, 98, 50, 74, 111, 105, 110, 116, 32, 42, 41, 0 ], "i8", A);

bl = C([ 109, 95, 106, 111, 105, 110, 116, 67, 111, 117, 110, 116, 32, 60, 32, 109, 95, 106, 111, 105, 110, 116, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", A);

Vk = C([ 118, 111, 105, 100, 32, 98, 50, 73, 115, 108, 97, 110, 100, 58, 58, 65, 100, 100, 40, 98, 50, 67, 111, 110, 116, 97, 99, 116, 32, 42, 41, 0 ], "i8", A);

Wk = C([ 109, 95, 99, 111, 110, 116, 97, 99, 116, 67, 111, 117, 110, 116, 32, 60, 32, 109, 95, 99, 111, 110, 116, 97, 99, 116, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", A);

Jk = C([ 118, 111, 105, 100, 32, 98, 50, 73, 115, 108, 97, 110, 100, 58, 58, 65, 100, 100, 40, 98, 50, 66, 111, 100, 121, 32, 42, 41, 0 ], "i8", A);

Kk = C([ 109, 95, 98, 111, 100, 121, 67, 111, 117, 110, 116, 32, 60, 32, 109, 95, 98, 111, 100, 121, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", A);

Zp = C([ 0, 0, 4, 120, 122 ], "i8*", A);

C(1, "void*", A);

cq = C([ 49, 53, 98, 50, 67, 111, 110, 116, 97, 99, 116, 70, 105, 108, 116, 101, 114, 0 ], "i8", A);

dq = C(2, "i8*", A);

pl = C([ 0, 0, 124, 126, 128 ], "i8*", A);

C(1, "void*", A);

ql = C([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 67, 111, 110, 116, 97, 99, 116, 115, 47, 98, 50, 67, 104, 97, 105, 110, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 46, 99, 112, 112, 0 ], "i8", A);

rl = C([ 98, 50, 67, 104, 97, 105, 110, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 58, 58, 98, 50, 67, 104, 97, 105, 110, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 40, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 105, 110, 116, 51, 50, 44, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 105, 110, 116, 51, 50, 41, 0 ], "i8", A);

eq = C([ 50, 51, 98, 50, 67, 104, 97, 105, 110, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 0 ], "i8", A);

fq = C([ 57, 98, 50, 67, 111, 110, 116, 97, 99, 116, 0 ], "i8", A);

gq = C(2, "i8*", A);

hq = C(3, "i8*", A);

wl = C([ 0, 0, 130, 132, 134 ], "i8*", A);

C(1, "void*", A);

xl = C([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 67, 111, 110, 116, 97, 99, 116, 115, 47, 98, 50, 67, 104, 97, 105, 110, 65, 110, 100, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 46, 99, 112, 112, 0 ], "i8", A);

yl = C([ 98, 50, 67, 104, 97, 105, 110, 65, 110, 100, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 58, 58, 98, 50, 67, 104, 97, 105, 110, 65, 110, 100, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 40, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 105, 110, 116, 51, 50, 44, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 105, 110, 116, 51, 50, 41, 0 ], "i8", A);

sl = C([ 109, 95, 102, 105, 120, 116, 117, 114, 101, 65, 45, 62, 71, 101, 116, 84, 121, 112, 101, 40, 41, 32, 61, 61, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 101, 95, 99, 104, 97, 105, 110, 0 ], "i8", A);

iq = C([ 50, 52, 98, 50, 67, 104, 97, 105, 110, 65, 110, 100, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 0 ], "i8", A);

jq = C(3, "i8*", A);

Cl = C([ 0, 0, 136, 138, 140 ], "i8*", A);

C(1, "void*", A);

Dl = C([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 67, 111, 110, 116, 97, 99, 116, 115, 47, 98, 50, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 46, 99, 112, 112, 0 ], "i8", A);

El = C([ 98, 50, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 58, 58, 98, 50, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 40, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 41, 0 ], "i8", A);

Fl = C([ 109, 95, 102, 105, 120, 116, 117, 114, 101, 65, 45, 62, 71, 101, 116, 84, 121, 112, 101, 40, 41, 32, 61, 61, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 101, 95, 99, 105, 114, 99, 108, 101, 0 ], "i8", A);

kq = C([ 49, 53, 98, 50, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 0 ], "i8", A);

lq = C(3, "i8*", A);

Ll = C(48, "%class.b2Contact.289* (%class.b2Fixture.281*, i32, %class.b2Fixture.281*, i32, %class.b2BlockAllocator.74*)*;void (%class.b2Contact.289*, %class.b2BlockAllocator.74*)*;i8;%class.b2Contact.289* (%class.b2Fixture.281*, i32, %class.b2Fixture.281*, i32, %class.b2BlockAllocator.74*)*;void (%class.b2Contact.289*, %class.b2BlockAllocator.74*)*;i8;%class.b2Contact.289* (%class.b2Fixture.281*, i32, %class.b2Fixture.281*, i32, %class.b2BlockAllocator.74*)*;void (%class.b2Contact.289*, %class.b2BlockAllocator.74*)*;i8;%class.b2Contact.289* (%class.b2Fixture.281*, i32, %class.b2Fixture.281*, i32, %class.b2BlockAllocator.74*)*;void (%class.b2Contact.289*, %class.b2BlockAllocator.74*)*;i8;%class.b2Contact.289* (%class.b2Fixture.281*, i32, %class.b2Fixture.281*, i32, %class.b2BlockAllocator.74*)*;void (%class.b2Contact.289*, %class.b2BlockAllocator.74*)*;i8;%class.b2Contact.289* (%class.b2Fixture.281*, i32, %class.b2Fixture.281*, i32, %class.b2BlockAllocator.74*)*;void (%class.b2Contact.289*, %class.b2BlockAllocator.74*)*;i8;%class.b2Contact.289* (%class.b2Fixture.281*, i32, %class.b2Fixture.281*, i32, %class.b2BlockAllocator.74*)*;void (%class.b2Contact.289*, %class.b2BlockAllocator.74*)*;i8;%class.b2Contact.289* (%class.b2Fixture.281*, i32, %class.b2Fixture.281*, i32, %class.b2BlockAllocator.74*)*;void (%class.b2Contact.289*, %class.b2BlockAllocator.74*)*;i8;%class.b2Contact.289* (%class.b2Fixture.281*, i32, %class.b2Fixture.281*, i32, %class.b2BlockAllocator.74*)*;void (%class.b2Contact.289*, %class.b2BlockAllocator.74*)*;i8;%class.b2Contact.289* (%class.b2Fixture.281*, i32, %class.b2Fixture.281*, i32, %class.b2BlockAllocator.74*)*;void (%class.b2Contact.289*, %class.b2BlockAllocator.74*)*;i8;%class.b2Contact.289* (%class.b2Fixture.281*, i32, %class.b2Fixture.281*, i32, %class.b2BlockAllocator.74*)*;void (%class.b2Contact.289*, %class.b2BlockAllocator.74*)*;i8;%class.b2Contact.289* (%class.b2Fixture.281*, i32, %class.b2Fixture.281*, i32, %class.b2BlockAllocator.74*)*;void (%class.b2Contact.289*, %class.b2BlockAllocator.74*)*;i8;%class.b2Contact.289* (%class.b2Fixture.281*, i32, %class.b2Fixture.281*, i32, %class.b2BlockAllocator.74*)*;void (%class.b2Contact.289*, %class.b2BlockAllocator.74*)*;i8;%class.b2Contact.289* (%class.b2Fixture.281*, i32, %class.b2Fixture.281*, i32, %class.b2BlockAllocator.74*)*;void (%class.b2Contact.289*, %class.b2BlockAllocator.74*)*;i8;%class.b2Contact.289* (%class.b2Fixture.281*, i32, %class.b2Fixture.281*, i32, %class.b2BlockAllocator.74*)*;void (%class.b2Contact.289*, %class.b2BlockAllocator.74*)*;i8;%class.b2Contact.289* (%class.b2Fixture.281*, i32, %class.b2Fixture.281*, i32, %class.b2BlockAllocator.74*)*;void (%class.b2Contact.289*, %class.b2BlockAllocator.74*)*;i8".split(";"), A);

Ml = C(1, "i8", A);

Hl = C([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 67, 111, 110, 116, 97, 99, 116, 115, 47, 98, 50, 67, 111, 110, 116, 97, 99, 116, 46, 99, 112, 112, 0 ], "i8", A);

Il = C([ 115, 116, 97, 116, 105, 99, 32, 118, 111, 105, 100, 32, 98, 50, 67, 111, 110, 116, 97, 99, 116, 58, 58, 65, 100, 100, 84, 121, 112, 101, 40, 98, 50, 67, 111, 110, 116, 97, 99, 116, 67, 114, 101, 97, 116, 101, 70, 99, 110, 32, 42, 44, 32, 98, 50, 67, 111, 110, 116, 97, 99, 116, 68, 101, 115, 116, 114, 111, 121, 70, 99, 110, 32, 42, 44, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 84, 121, 112, 101, 44, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 84, 121, 112, 101, 41, 0 ], "i8", A);

Jl = C([ 48, 32, 60, 61, 32, 116, 121, 112, 101, 49, 32, 38, 38, 32, 116, 121, 112, 101, 49, 32, 60, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 101, 95, 116, 121, 112, 101, 67, 111, 117, 110, 116, 0 ], "i8", A);

Kl = C([ 48, 32, 60, 61, 32, 116, 121, 112, 101, 50, 32, 38, 38, 32, 116, 121, 112, 101, 50, 32, 60, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 101, 95, 116, 121, 112, 101, 67, 111, 117, 110, 116, 0 ], "i8", A);

Nl = C([ 115, 116, 97, 116, 105, 99, 32, 98, 50, 67, 111, 110, 116, 97, 99, 116, 32, 42, 98, 50, 67, 111, 110, 116, 97, 99, 116, 58, 58, 67, 114, 101, 97, 116, 101, 40, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 105, 110, 116, 51, 50, 44, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 105, 110, 116, 51, 50, 44, 32, 98, 50, 66, 108, 111, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 32, 42, 41, 0 ], "i8", A);

Ol = C([ 115, 116, 97, 116, 105, 99, 32, 118, 111, 105, 100, 32, 98, 50, 67, 111, 110, 116, 97, 99, 116, 58, 58, 68, 101, 115, 116, 114, 111, 121, 40, 98, 50, 67, 111, 110, 116, 97, 99, 116, 32, 42, 44, 32, 98, 50, 66, 108, 111, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 32, 42, 41, 0 ], "i8", A);

Pl = C([ 115, 95, 105, 110, 105, 116, 105, 97, 108, 105, 122, 101, 100, 32, 61, 61, 32, 116, 114, 117, 101, 0 ], "i8", A);

Ql = C([ 48, 32, 60, 61, 32, 116, 121, 112, 101, 65, 32, 38, 38, 32, 116, 121, 112, 101, 66, 32, 60, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 101, 95, 116, 121, 112, 101, 67, 111, 117, 110, 116, 0 ], "i8", A);

Rl = C([ 0, 0, 40, 142, 144 ], "i8*", A);

C(1, "void*", A);

Tl = C([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 67, 111, 110, 116, 97, 99, 116, 115, 47, 98, 50, 67, 111, 110, 116, 97, 99, 116, 83, 111, 108, 118, 101, 114, 46, 99, 112, 112, 0 ], "i8", A);

Ul = C([ 98, 50, 67, 111, 110, 116, 97, 99, 116, 83, 111, 108, 118, 101, 114, 58, 58, 98, 50, 67, 111, 110, 116, 97, 99, 116, 83, 111, 108, 118, 101, 114, 40, 98, 50, 67, 111, 110, 116, 97, 99, 116, 83, 111, 108, 118, 101, 114, 68, 101, 102, 32, 42, 41, 0 ], "i8", A);

Vl = C([ 112, 111, 105, 110, 116, 67, 111, 117, 110, 116, 32, 62, 32, 48, 0 ], "i8", A);

Wl = C([ 118, 111, 105, 100, 32, 98, 50, 67, 111, 110, 116, 97, 99, 116, 83, 111, 108, 118, 101, 114, 58, 58, 73, 110, 105, 116, 105, 97, 108, 105, 122, 101, 86, 101, 108, 111, 99, 105, 116, 121, 67, 111, 110, 115, 116, 114, 97, 105, 110, 116, 115, 40, 41, 0 ], "i8", A);

Xl = C([ 109, 97, 110, 105, 102, 111, 108, 100, 45, 62, 112, 111, 105, 110, 116, 67, 111, 117, 110, 116, 32, 62, 32, 48, 0 ], "i8", A);

$l = C([ 118, 111, 105, 100, 32, 98, 50, 67, 111, 110, 116, 97, 99, 116, 83, 111, 108, 118, 101, 114, 58, 58, 83, 111, 108, 118, 101, 86, 101, 108, 111, 99, 105, 116, 121, 67, 111, 110, 115, 116, 114, 97, 105, 110, 116, 115, 40, 41, 0 ], "i8", A);

am = C([ 112, 111, 105, 110, 116, 67, 111, 117, 110, 116, 32, 61, 61, 32, 49, 32, 124, 124, 32, 112, 111, 105, 110, 116, 67, 111, 117, 110, 116, 32, 61, 61, 32, 50, 0 ], "i8", A);

bm = C([ 97, 46, 120, 32, 62, 61, 32, 48, 46, 48, 102, 32, 38, 38, 32, 97, 46, 121, 32, 62, 61, 32, 48, 46, 48, 102, 0 ], "i8", A);

dm = C([ 118, 111, 105, 100, 32, 98, 50, 80, 111, 115, 105, 116, 105, 111, 110, 83, 111, 108, 118, 101, 114, 77, 97, 110, 105, 102, 111, 108, 100, 58, 58, 73, 110, 105, 116, 105, 97, 108, 105, 122, 101, 40, 98, 50, 67, 111, 110, 116, 97, 99, 116, 80, 111, 115, 105, 116, 105, 111, 110, 67, 111, 110, 115, 116, 114, 97, 105, 110, 116, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 44, 32, 105, 110, 116, 51, 50, 41, 0 ], "i8", A);

em = C([ 112, 99, 45, 62, 112, 111, 105, 110, 116, 67, 111, 117, 110, 116, 32, 62, 32, 48, 0 ], "i8", A);

gm = C([ 0, 0, 146, 148, 150 ], "i8*", A);

C(1, "void*", A);

hm = C([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 67, 111, 110, 116, 97, 99, 116, 115, 47, 98, 50, 69, 100, 103, 101, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 46, 99, 112, 112, 0 ], "i8", A);

im = C([ 98, 50, 69, 100, 103, 101, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 58, 58, 98, 50, 69, 100, 103, 101, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 40, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 41, 0 ], "i8", A);

mq = C([ 50, 50, 98, 50, 69, 100, 103, 101, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 0 ], "i8", A);

nq = C(3, "i8*", A);

om = C([ 0, 0, 152, 154, 156 ], "i8*", A);

C(1, "void*", A);

pm = C([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 67, 111, 110, 116, 97, 99, 116, 115, 47, 98, 50, 69, 100, 103, 101, 65, 110, 100, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 46, 99, 112, 112, 0 ], "i8", A);

qm = C([ 98, 50, 69, 100, 103, 101, 65, 110, 100, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 58, 58, 98, 50, 69, 100, 103, 101, 65, 110, 100, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 40, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 41, 0 ], "i8", A);

jm = C([ 109, 95, 102, 105, 120, 116, 117, 114, 101, 65, 45, 62, 71, 101, 116, 84, 121, 112, 101, 40, 41, 32, 61, 61, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 101, 95, 101, 100, 103, 101, 0 ], "i8", A);

oq = C([ 50, 51, 98, 50, 69, 100, 103, 101, 65, 110, 100, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 0 ], "i8", A);

pq = C(3, "i8*", A);

sm = C([ 0, 0, 158, 160, 162 ], "i8*", A);

C(1, "void*", A);

tm = C([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 67, 111, 110, 116, 97, 99, 116, 115, 47, 98, 50, 80, 111, 108, 121, 103, 111, 110, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 46, 99, 112, 112, 0 ], "i8", A);

um = C([ 98, 50, 80, 111, 108, 121, 103, 111, 110, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 58, 58, 98, 50, 80, 111, 108, 121, 103, 111, 110, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 40, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 41, 0 ], "i8", A);

tl = C([ 109, 95, 102, 105, 120, 116, 117, 114, 101, 66, 45, 62, 71, 101, 116, 84, 121, 112, 101, 40, 41, 32, 61, 61, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 101, 95, 99, 105, 114, 99, 108, 101, 0 ], "i8", A);

qq = C([ 50, 53, 98, 50, 80, 111, 108, 121, 103, 111, 110, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 0 ], "i8", A);

rq = C(3, "i8*", A);

xm = C([ 0, 0, 164, 166, 168 ], "i8*", A);

C(1, "void*", A);

ym = C([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 67, 111, 110, 116, 97, 99, 116, 115, 47, 98, 50, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 46, 99, 112, 112, 0 ], "i8", A);

zm = C([ 98, 50, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 58, 58, 98, 50, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 40, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 41, 0 ], "i8", A);

vm = C([ 109, 95, 102, 105, 120, 116, 117, 114, 101, 65, 45, 62, 71, 101, 116, 84, 121, 112, 101, 40, 41, 32, 61, 61, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 101, 95, 112, 111, 108, 121, 103, 111, 110, 0 ], "i8", A);

zl = C([ 109, 95, 102, 105, 120, 116, 117, 114, 101, 66, 45, 62, 71, 101, 116, 84, 121, 112, 101, 40, 41, 32, 61, 61, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 101, 95, 112, 111, 108, 121, 103, 111, 110, 0 ], "i8", A);

sq = C([ 49, 54, 98, 50, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 0 ], "i8", A);

tq = C(3, "i8*", A);

mm = C([ 0, 0, 170, 172, 174, 176, 178, 180, 182, 184, 186, 188 ], "i8*", A);

C(1, "void*", A);

Cm = C([ 32, 32, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 74, 111, 105, 110, 116, 68, 101, 102, 32, 106, 100, 59, 10, 0 ], "i8", A);

Im = C([ 32, 32, 106, 100, 46, 108, 101, 110, 103, 116, 104, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0 ], "i8", A);

uq = C([ 49, 53, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 74, 111, 105, 110, 116, 0 ], "i8", A);

vq = C([ 55, 98, 50, 74, 111, 105, 110, 116, 0 ], "i8", A);

wq = C(2, "i8*", A);

xq = C(3, "i8*", A);

Rm = C([ 0, 0, 190, 192, 194, 196, 198, 200, 202, 204, 206, 208 ], "i8*", A);

C(1, "void*", A);

C([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 74, 111, 105, 110, 116, 115, 47, 98, 50, 70, 114, 105, 99, 116, 105, 111, 110, 74, 111, 105, 110, 116, 46, 99, 112, 112, 0 ], "i8", A);

C([ 118, 111, 105, 100, 32, 98, 50, 70, 114, 105, 99, 116, 105, 111, 110, 74, 111, 105, 110, 116, 58, 58, 83, 101, 116, 77, 97, 120, 70, 111, 114, 99, 101, 40, 102, 108, 111, 97, 116, 51, 50, 41, 0 ], "i8", A);

C([ 98, 50, 73, 115, 86, 97, 108, 105, 100, 40, 102, 111, 114, 99, 101, 41, 32, 38, 38, 32, 102, 111, 114, 99, 101, 32, 62, 61, 32, 48, 46, 48, 102, 0 ], "i8", A);

C([ 118, 111, 105, 100, 32, 98, 50, 70, 114, 105, 99, 116, 105, 111, 110, 74, 111, 105, 110, 116, 58, 58, 83, 101, 116, 77, 97, 120, 84, 111, 114, 113, 117, 101, 40, 102, 108, 111, 97, 116, 51, 50, 41, 0 ], "i8", A);

C([ 98, 50, 73, 115, 86, 97, 108, 105, 100, 40, 116, 111, 114, 113, 117, 101, 41, 32, 38, 38, 32, 116, 111, 114, 113, 117, 101, 32, 62, 61, 32, 48, 46, 48, 102, 0 ], "i8", A);

Tm = C([ 32, 32, 98, 50, 70, 114, 105, 99, 116, 105, 111, 110, 74, 111, 105, 110, 116, 68, 101, 102, 32, 106, 100, 59, 10, 0 ], "i8", A);

Um = C([ 32, 32, 106, 100, 46, 109, 97, 120, 70, 111, 114, 99, 101, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0 ], "i8", A);

Vm = C([ 32, 32, 106, 100, 46, 109, 97, 120, 84, 111, 114, 113, 117, 101, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0 ], "i8", A);

yq = C([ 49, 53, 98, 50, 70, 114, 105, 99, 116, 105, 111, 110, 74, 111, 105, 110, 116, 0 ], "i8", A);

zq = C(3, "i8*", A);

Zm = C([ 0, 0, 210, 212, 214, 216, 218, 220, 222, 224, 226, 228 ], "i8*", A);

C(1, "void*", A);

$m = C([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 74, 111, 105, 110, 116, 115, 47, 98, 50, 71, 101, 97, 114, 74, 111, 105, 110, 116, 46, 99, 112, 112, 0 ], "i8", A);

an = C([ 98, 50, 71, 101, 97, 114, 74, 111, 105, 110, 116, 58, 58, 98, 50, 71, 101, 97, 114, 74, 111, 105, 110, 116, 40, 99, 111, 110, 115, 116, 32, 98, 50, 71, 101, 97, 114, 74, 111, 105, 110, 116, 68, 101, 102, 32, 42, 41, 0 ], "i8", A);

bn = C([ 109, 95, 116, 121, 112, 101, 65, 32, 61, 61, 32, 101, 95, 114, 101, 118, 111, 108, 117, 116, 101, 74, 111, 105, 110, 116, 32, 124, 124, 32, 109, 95, 116, 121, 112, 101, 65, 32, 61, 61, 32, 101, 95, 112, 114, 105, 115, 109, 97, 116, 105, 99, 74, 111, 105, 110, 116, 0 ], "i8", A);

cn = C([ 109, 95, 116, 121, 112, 101, 66, 32, 61, 61, 32, 101, 95, 114, 101, 118, 111, 108, 117, 116, 101, 74, 111, 105, 110, 116, 32, 124, 124, 32, 109, 95, 116, 121, 112, 101, 66, 32, 61, 61, 32, 101, 95, 112, 114, 105, 115, 109, 97, 116, 105, 99, 74, 111, 105, 110, 116, 0 ], "i8", A);

C([ 118, 111, 105, 100, 32, 98, 50, 71, 101, 97, 114, 74, 111, 105, 110, 116, 58, 58, 83, 101, 116, 82, 97, 116, 105, 111, 40, 102, 108, 111, 97, 116, 51, 50, 41, 0 ], "i8", A);

C([ 98, 50, 73, 115, 86, 97, 108, 105, 100, 40, 114, 97, 116, 105, 111, 41, 0 ], "i8", A);

gn = C([ 32, 32, 98, 50, 71, 101, 97, 114, 74, 111, 105, 110, 116, 68, 101, 102, 32, 106, 100, 59, 10, 0 ], "i8", A);

hn = C([ 32, 32, 106, 100, 46, 106, 111, 105, 110, 116, 49, 32, 61, 32, 106, 111, 105, 110, 116, 115, 91, 37, 100, 93, 59, 10, 0 ], "i8", A);

jn = C([ 32, 32, 106, 100, 46, 106, 111, 105, 110, 116, 50, 32, 61, 32, 106, 111, 105, 110, 116, 115, 91, 37, 100, 93, 59, 10, 0 ], "i8", A);

Aq = C([ 49, 49, 98, 50, 71, 101, 97, 114, 74, 111, 105, 110, 116, 0 ], "i8", A);

Bq = C(3, "i8*", A);

nn = C([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 74, 111, 105, 110, 116, 115, 47, 98, 50, 74, 111, 105, 110, 116, 46, 99, 112, 112, 0 ], "i8", A);

C([ 115, 116, 97, 116, 105, 99, 32, 98, 50, 74, 111, 105, 110, 116, 32, 42, 98, 50, 74, 111, 105, 110, 116, 58, 58, 67, 114, 101, 97, 116, 101, 40, 99, 111, 110, 115, 116, 32, 98, 50, 74, 111, 105, 110, 116, 68, 101, 102, 32, 42, 44, 32, 98, 50, 66, 108, 111, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 32, 42, 41, 0 ], "i8", A);

xe = C([ 102, 97, 108, 115, 101, 0 ], "i8", A);

C([ 115, 116, 97, 116, 105, 99, 32, 118, 111, 105, 100, 32, 98, 50, 74, 111, 105, 110, 116, 58, 58, 68, 101, 115, 116, 114, 111, 121, 40, 98, 50, 74, 111, 105, 110, 116, 32, 42, 44, 32, 98, 50, 66, 108, 111, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 32, 42, 41, 0 ], "i8", A);

mn = C([ 0, 0, 40, 40, 40, 40, 230, 232, 234, 40, 40, 40 ], "i8*", A);

C(1, "void*", A);

on = C([ 98, 50, 74, 111, 105, 110, 116, 58, 58, 98, 50, 74, 111, 105, 110, 116, 40, 99, 111, 110, 115, 116, 32, 98, 50, 74, 111, 105, 110, 116, 68, 101, 102, 32, 42, 41, 0 ], "i8", A);

pn = C([ 100, 101, 102, 45, 62, 98, 111, 100, 121, 65, 32, 33, 61, 32, 100, 101, 102, 45, 62, 98, 111, 100, 121, 66, 0 ], "i8", A);

Cq = C([ 47, 47, 32, 68, 117, 109, 112, 32, 105, 115, 32, 110, 111, 116, 32, 115, 117, 112, 112, 111, 114, 116, 101, 100, 32, 102, 111, 114, 32, 116, 104, 105, 115, 32, 106, 111, 105, 110, 116, 32, 116, 121, 112, 101, 46, 10, 0 ], "i8", A);

rn = C([ 0, 0, 236, 238, 240, 242, 244, 246, 248, 250, 252, 254 ], "i8*", A);

C(1, "void*", A);

sn = C([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 74, 111, 105, 110, 116, 115, 47, 98, 50, 77, 111, 117, 115, 101, 74, 111, 105, 110, 116, 46, 99, 112, 112, 0 ], "i8", A);

tn = C([ 98, 50, 77, 111, 117, 115, 101, 74, 111, 105, 110, 116, 58, 58, 98, 50, 77, 111, 117, 115, 101, 74, 111, 105, 110, 116, 40, 99, 111, 110, 115, 116, 32, 98, 50, 77, 111, 117, 115, 101, 74, 111, 105, 110, 116, 68, 101, 102, 32, 42, 41, 0 ], "i8", A);

un = C([ 100, 101, 102, 45, 62, 116, 97, 114, 103, 101, 116, 46, 73, 115, 86, 97, 108, 105, 100, 40, 41, 0 ], "i8", A);

vn = C([ 98, 50, 73, 115, 86, 97, 108, 105, 100, 40, 100, 101, 102, 45, 62, 109, 97, 120, 70, 111, 114, 99, 101, 41, 32, 38, 38, 32, 100, 101, 102, 45, 62, 109, 97, 120, 70, 111, 114, 99, 101, 32, 62, 61, 32, 48, 46, 48, 102, 0 ], "i8", A);

wn = C([ 98, 50, 73, 115, 86, 97, 108, 105, 100, 40, 100, 101, 102, 45, 62, 102, 114, 101, 113, 117, 101, 110, 99, 121, 72, 122, 41, 32, 38, 38, 32, 100, 101, 102, 45, 62, 102, 114, 101, 113, 117, 101, 110, 99, 121, 72, 122, 32, 62, 61, 32, 48, 46, 48, 102, 0 ], "i8", A);

xn = C([ 98, 50, 73, 115, 86, 97, 108, 105, 100, 40, 100, 101, 102, 45, 62, 100, 97, 109, 112, 105, 110, 103, 82, 97, 116, 105, 111, 41, 32, 38, 38, 32, 100, 101, 102, 45, 62, 100, 97, 109, 112, 105, 110, 103, 82, 97, 116, 105, 111, 32, 62, 61, 32, 48, 46, 48, 102, 0 ], "i8", A);

zn = C([ 118, 105, 114, 116, 117, 97, 108, 32, 118, 111, 105, 100, 32, 98, 50, 77, 111, 117, 115, 101, 74, 111, 105, 110, 116, 58, 58, 73, 110, 105, 116, 86, 101, 108, 111, 99, 105, 116, 121, 67, 111, 110, 115, 116, 114, 97, 105, 110, 116, 115, 40, 99, 111, 110, 115, 116, 32, 98, 50, 83, 111, 108, 118, 101, 114, 68, 97, 116, 97, 32, 38, 41, 0 ], "i8", A);

An = C([ 100, 32, 43, 32, 104, 32, 42, 32, 107, 32, 62, 32, 49, 46, 49, 57, 50, 48, 57, 50, 57, 48, 69, 45, 48, 55, 70, 0 ], "i8", A);

Dq = C([ 49, 50, 98, 50, 77, 111, 117, 115, 101, 74, 111, 105, 110, 116, 0 ], "i8", A);

Eq = C(3, "i8*", A);

Fq = C([ 77, 111, 117, 115, 101, 32, 106, 111, 105, 110, 116, 32, 100, 117, 109, 112, 105, 110, 103, 32, 105, 115, 32, 110, 111, 116, 32, 115, 117, 112, 112, 111, 114, 116, 101, 100, 46, 10, 0 ], "i8", A);

Gn = C([ 0, 0, 256, 258, 260, 262, 264, 266, 268, 270, 272, 274 ], "i8*", A);

C(1, "void*", A);

C([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 74, 111, 105, 110, 116, 115, 47, 98, 50, 80, 114, 105, 115, 109, 97, 116, 105, 99, 74, 111, 105, 110, 116, 46, 99, 112, 112, 0 ], "i8", A);

C([ 118, 111, 105, 100, 32, 98, 50, 80, 114, 105, 115, 109, 97, 116, 105, 99, 74, 111, 105, 110, 116, 58, 58, 83, 101, 116, 76, 105, 109, 105, 116, 115, 40, 102, 108, 111, 97, 116, 51, 50, 44, 32, 102, 108, 111, 97, 116, 51, 50, 41, 0 ], "i8", A);

Pn = C([ 32, 32, 98, 50, 80, 114, 105, 115, 109, 97, 116, 105, 99, 74, 111, 105, 110, 116, 68, 101, 102, 32, 106, 100, 59, 10, 0 ], "i8", A);

Tn = C([ 32, 32, 106, 100, 46, 108, 111, 119, 101, 114, 84, 114, 97, 110, 115, 108, 97, 116, 105, 111, 110, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0 ], "i8", A);

Un = C([ 32, 32, 106, 100, 46, 117, 112, 112, 101, 114, 84, 114, 97, 110, 115, 108, 97, 116, 105, 111, 110, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0 ], "i8", A);

Xn = C([ 32, 32, 106, 100, 46, 109, 97, 120, 77, 111, 116, 111, 114, 70, 111, 114, 99, 101, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0 ], "i8", A);

Gq = C([ 49, 54, 98, 50, 80, 114, 105, 115, 109, 97, 116, 105, 99, 74, 111, 105, 110, 116, 0 ], "i8", A);

Hq = C(3, "i8*", A);

$n = C([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 74, 111, 105, 110, 116, 115, 47, 98, 50, 80, 117, 108, 108, 101, 121, 74, 111, 105, 110, 116, 46, 99, 112, 112, 0 ], "i8", A);

C([ 118, 111, 105, 100, 32, 98, 50, 80, 117, 108, 108, 101, 121, 74, 111, 105, 110, 116, 68, 101, 102, 58, 58, 73, 110, 105, 116, 105, 97, 108, 105, 122, 101, 40, 98, 50, 66, 111, 100, 121, 32, 42, 44, 32, 98, 50, 66, 111, 100, 121, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 86, 101, 99, 50, 32, 38, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 86, 101, 99, 50, 32, 38, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 86, 101, 99, 50, 32, 38, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 86, 101, 99, 50, 32, 38, 44, 32, 102, 108, 111, 97, 116, 51, 50, 41, 0 ], "i8", A);

C([ 114, 97, 116, 105, 111, 32, 62, 32, 49, 46, 49, 57, 50, 48, 57, 50, 57, 48, 69, 45, 48, 55, 70, 0 ], "i8", A);

Zn = C([ 0, 0, 276, 278, 280, 282, 284, 286, 288, 290, 292, 294 ], "i8*", A);

C(1, "void*", A);

ao = C([ 98, 50, 80, 117, 108, 108, 101, 121, 74, 111, 105, 110, 116, 58, 58, 98, 50, 80, 117, 108, 108, 101, 121, 74, 111, 105, 110, 116, 40, 99, 111, 110, 115, 116, 32, 98, 50, 80, 117, 108, 108, 101, 121, 74, 111, 105, 110, 116, 68, 101, 102, 32, 42, 41, 0 ], "i8", A);

bo = C([ 100, 101, 102, 45, 62, 114, 97, 116, 105, 111, 32, 33, 61, 32, 48, 46, 48, 102, 0 ], "i8", A);

go = C([ 32, 32, 98, 50, 80, 117, 108, 108, 101, 121, 74, 111, 105, 110, 116, 68, 101, 102, 32, 106, 100, 59, 10, 0 ], "i8", A);

ho = C([ 32, 32, 106, 100, 46, 103, 114, 111, 117, 110, 100, 65, 110, 99, 104, 111, 114, 65, 46, 83, 101, 116, 40, 37, 46, 49, 53, 108, 101, 102, 44, 32, 37, 46, 49, 53, 108, 101, 102, 41, 59, 10, 0 ], "i8", A);

io = C([ 32, 32, 106, 100, 46, 103, 114, 111, 117, 110, 100, 65, 110, 99, 104, 111, 114, 66, 46, 83, 101, 116, 40, 37, 46, 49, 53, 108, 101, 102, 44, 32, 37, 46, 49, 53, 108, 101, 102, 41, 59, 10, 0 ], "i8", A);

jo = C([ 32, 32, 106, 100, 46, 108, 101, 110, 103, 116, 104, 65, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0 ], "i8", A);

ko = C([ 32, 32, 106, 100, 46, 108, 101, 110, 103, 116, 104, 66, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0 ], "i8", A);

kn = C([ 32, 32, 106, 100, 46, 114, 97, 116, 105, 111, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0 ], "i8", A);

Iq = C([ 49, 51, 98, 50, 80, 117, 108, 108, 101, 121, 74, 111, 105, 110, 116, 0 ], "i8", A);

Yq = C(3, "i8*", A);

mo = C([ 0, 0, 296, 298, 300, 302, 304, 306, 308, 310, 312, 314 ], "i8*", A);

C(1, "void*", A);

C([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 74, 111, 105, 110, 116, 115, 47, 98, 50, 82, 101, 118, 111, 108, 117, 116, 101, 74, 111, 105, 110, 116, 46, 99, 112, 112, 0 ], "i8", A);

C([ 118, 111, 105, 100, 32, 98, 50, 82, 101, 118, 111, 108, 117, 116, 101, 74, 111, 105, 110, 116, 58, 58, 83, 101, 116, 76, 105, 109, 105, 116, 115, 40, 102, 108, 111, 97, 116, 51, 50, 44, 32, 102, 108, 111, 97, 116, 51, 50, 41, 0 ], "i8", A);

C([ 108, 111, 119, 101, 114, 32, 60, 61, 32, 117, 112, 112, 101, 114, 0 ], "i8", A);

so = C([ 32, 32, 98, 50, 82, 101, 118, 111, 108, 117, 116, 101, 74, 111, 105, 110, 116, 68, 101, 102, 32, 106, 100, 59, 10, 0 ], "i8", A);

Sn = C([ 32, 32, 106, 100, 46, 101, 110, 97, 98, 108, 101, 76, 105, 109, 105, 116, 32, 61, 32, 98, 111, 111, 108, 40, 37, 100, 41, 59, 10, 0 ], "i8", A);

to = C([ 32, 32, 106, 100, 46, 108, 111, 119, 101, 114, 65, 110, 103, 108, 101, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0 ], "i8", A);

uo = C([ 32, 32, 106, 100, 46, 117, 112, 112, 101, 114, 65, 110, 103, 108, 101, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0 ], "i8", A);

Zq = C([ 49, 53, 98, 50, 82, 101, 118, 111, 108, 117, 116, 101, 74, 111, 105, 110, 116, 0 ], "i8", A);

$q = C(3, "i8*", A);

xo = C([ 0, 0, 316, 318, 320, 322, 324, 326, 328, 330, 332, 334 ], "i8*", A);

C(1, "void*", A);

Bo = C([ 32, 32, 98, 50, 82, 111, 112, 101, 74, 111, 105, 110, 116, 68, 101, 102, 32, 106, 100, 59, 10, 0 ], "i8", A);

Co = C([ 32, 32, 106, 100, 46, 109, 97, 120, 76, 101, 110, 103, 116, 104, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0 ], "i8", A);

ar = C([ 49, 49, 98, 50, 82, 111, 112, 101, 74, 111, 105, 110, 116, 0 ], "i8", A);

br = C(3, "i8*", A);

Eo = C([ 0, 0, 336, 338, 340, 342, 344, 346, 348, 350, 352, 354 ], "i8*", A);

C(1, "void*", A);

Io = C([ 32, 32, 98, 50, 87, 101, 108, 100, 74, 111, 105, 110, 116, 68, 101, 102, 32, 106, 100, 59, 10, 0 ], "i8", A);

Rn = C([ 32, 32, 106, 100, 46, 114, 101, 102, 101, 114, 101, 110, 99, 101, 65, 110, 103, 108, 101, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0 ], "i8", A);

cr = C([ 49, 49, 98, 50, 87, 101, 108, 100, 74, 111, 105, 110, 116, 0 ], "i8", A);

dr = C(3, "i8*", A);

Oo = C([ 0, 0, 356, 358, 360, 362, 364, 366, 368, 370, 372, 374 ], "i8*", A);

C(1, "void*", A);

So = C([ 32, 32, 98, 50, 87, 104, 101, 101, 108, 74, 111, 105, 110, 116, 68, 101, 102, 32, 106, 100, 59, 10, 0 ], "i8", A);

Dm = C([ 32, 32, 106, 100, 46, 98, 111, 100, 121, 65, 32, 61, 32, 98, 111, 100, 105, 101, 115, 91, 37, 100, 93, 59, 10, 0 ], "i8", A);

Em = C([ 32, 32, 106, 100, 46, 98, 111, 100, 121, 66, 32, 61, 32, 98, 111, 100, 105, 101, 115, 91, 37, 100, 93, 59, 10, 0 ], "i8", A);

Fm = C([ 32, 32, 106, 100, 46, 99, 111, 108, 108, 105, 100, 101, 67, 111, 110, 110, 101, 99, 116, 101, 100, 32, 61, 32, 98, 111, 111, 108, 40, 37, 100, 41, 59, 10, 0 ], "i8", A);

Gm = C([ 32, 32, 106, 100, 46, 108, 111, 99, 97, 108, 65, 110, 99, 104, 111, 114, 65, 46, 83, 101, 116, 40, 37, 46, 49, 53, 108, 101, 102, 44, 32, 37, 46, 49, 53, 108, 101, 102, 41, 59, 10, 0 ], "i8", A);

Hm = C([ 32, 32, 106, 100, 46, 108, 111, 99, 97, 108, 65, 110, 99, 104, 111, 114, 66, 46, 83, 101, 116, 40, 37, 46, 49, 53, 108, 101, 102, 44, 32, 37, 46, 49, 53, 108, 101, 102, 41, 59, 10, 0 ], "i8", A);

Qn = C([ 32, 32, 106, 100, 46, 108, 111, 99, 97, 108, 65, 120, 105, 115, 65, 46, 83, 101, 116, 40, 37, 46, 49, 53, 108, 101, 102, 44, 32, 37, 46, 49, 53, 108, 101, 102, 41, 59, 10, 0 ], "i8", A);

Vn = C([ 32, 32, 106, 100, 46, 101, 110, 97, 98, 108, 101, 77, 111, 116, 111, 114, 32, 61, 32, 98, 111, 111, 108, 40, 37, 100, 41, 59, 10, 0 ], "i8", A);

Wn = C([ 32, 32, 106, 100, 46, 109, 111, 116, 111, 114, 83, 112, 101, 101, 100, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0 ], "i8", A);

vo = C([ 32, 32, 106, 100, 46, 109, 97, 120, 77, 111, 116, 111, 114, 84, 111, 114, 113, 117, 101, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0 ], "i8", A);

Jm = C([ 32, 32, 106, 100, 46, 102, 114, 101, 113, 117, 101, 110, 99, 121, 72, 122, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0 ], "i8", A);

Km = C([ 32, 32, 106, 100, 46, 100, 97, 109, 112, 105, 110, 103, 82, 97, 116, 105, 111, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0 ], "i8", A);

Lm = C([ 32, 32, 106, 111, 105, 110, 116, 115, 91, 37, 100, 93, 32, 61, 32, 109, 95, 119, 111, 114, 108, 100, 45, 62, 67, 114, 101, 97, 116, 101, 74, 111, 105, 110, 116, 40, 38, 106, 100, 41, 59, 10, 0 ], "i8", A);

er = C([ 49, 50, 98, 50, 87, 104, 101, 101, 108, 74, 111, 105, 110, 116, 0 ], "i8", A);

fr = C(3, "i8*", A);

C([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 82, 111, 112, 101, 47, 98, 50, 82, 111, 112, 101, 46, 99, 112, 112, 0 ], "i8", A);

C([ 118, 111, 105, 100, 32, 98, 50, 82, 111, 112, 101, 58, 58, 73, 110, 105, 116, 105, 97, 108, 105, 122, 101, 40, 99, 111, 110, 115, 116, 32, 98, 50, 82, 111, 112, 101, 68, 101, 102, 32, 42, 41, 0 ], "i8", A);

C([ 100, 101, 102, 45, 62, 99, 111, 117, 110, 116, 32, 62, 61, 32, 51, 0 ], "i8", A);

Y = C(117, "i32,i32,i32,i32,i8*,%struct.malloc_chunk*,%struct.malloc_chunk*,i32,i32,i32,%struct.malloc_chunk*,%struct.malloc_chunk*,%struct.malloc_chunk*,%struct.malloc_chunk*,%struct.malloc_chunk*,%struct.malloc_chunk*,%struct.malloc_chunk*,%struct.malloc_chunk*,%struct.malloc_chunk*,%struct.malloc_chunk*,%struct.malloc_chunk*,%struct.malloc_chunk*,%struct.malloc_chunk*,%struct.malloc_chunk*,%struct.malloc_chunk*,%struct.malloc_chunk*,%struct.malloc_chunk*,%struct.malloc_chunk*,%struct.malloc_chunk*,%struct.malloc_chunk*,%struct.malloc_chunk*,%struct.malloc_chunk*,%struct.malloc_chunk*,%struct.malloc_chunk*,%struct.malloc_chunk*,%struct.malloc_chunk*,%struct.malloc_chunk*,%struct.malloc_chunk*,%struct.malloc_chunk*,%struct.malloc_chunk*,%struct.malloc_chunk*,%struct.malloc_chunk*,%struct.malloc_chunk*,%struct.malloc_chunk*,%struct.malloc_chunk*,%struct.malloc_chunk*,%struct.malloc_chunk*,%struct.malloc_chunk*,%struct.malloc_chunk*,%struct.malloc_chunk*,%struct.malloc_chunk*,%struct.malloc_chunk*,%struct.malloc_chunk*,%struct.malloc_chunk*,%struct.malloc_chunk*,%struct.malloc_chunk*,%struct.malloc_chunk*,%struct.malloc_chunk*,%struct.malloc_chunk*,%struct.malloc_chunk*,%struct.malloc_chunk*,%struct.malloc_chunk*,%struct.malloc_chunk*,%struct.malloc_chunk*,%struct.malloc_chunk*,%struct.malloc_chunk*,%struct.malloc_chunk*,%struct.malloc_chunk*,%struct.malloc_chunk*,%struct.malloc_chunk*,%struct.malloc_chunk*,%struct.malloc_chunk*,%struct.malloc_chunk*,%struct.malloc_chunk*,%struct.malloc_chunk*,%struct.malloc_chunk*,%struct.malloc_tree_chunk*,%struct.malloc_tree_chunk*,%struct.malloc_tree_chunk*,%struct.malloc_tree_chunk*,%struct.malloc_tree_chunk*,%struct.malloc_tree_chunk*,%struct.malloc_tree_chunk*,%struct.malloc_tree_chunk*,%struct.malloc_tree_chunk*,%struct.malloc_tree_chunk*,%struct.malloc_tree_chunk*,%struct.malloc_tree_chunk*,%struct.malloc_tree_chunk*,%struct.malloc_tree_chunk*,%struct.malloc_tree_chunk*,%struct.malloc_tree_chunk*,%struct.malloc_tree_chunk*,%struct.malloc_tree_chunk*,%struct.malloc_tree_chunk*,%struct.malloc_tree_chunk*,%struct.malloc_tree_chunk*,%struct.malloc_tree_chunk*,%struct.malloc_tree_chunk*,%struct.malloc_tree_chunk*,%struct.malloc_tree_chunk*,%struct.malloc_tree_chunk*,%struct.malloc_tree_chunk*,%struct.malloc_tree_chunk*,%struct.malloc_tree_chunk*,%struct.malloc_tree_chunk*,%struct.malloc_tree_chunk*,%struct.malloc_tree_chunk*,i32,i32,i32,i8*,i32,%struct.malloc_segment*,i32,i8*,i32".split(","), A);

Yo = C(6, "i32", A);

C([ 109, 97, 120, 32, 115, 121, 115, 116, 101, 109, 32, 98, 121, 116, 101, 115, 32, 61, 32, 37, 49, 48, 108, 117, 10, 0 ], "i8", A);

C([ 115, 121, 115, 116, 101, 109, 32, 98, 121, 116, 101, 115, 32, 32, 32, 32, 32, 61, 32, 37, 49, 48, 108, 117, 10, 0 ], "i8", A);

C([ 105, 110, 32, 117, 115, 101, 32, 98, 121, 116, 101, 115, 32, 32, 32, 32, 32, 61, 32, 37, 49, 48, 108, 117, 10, 0 ], "i8", A);

p[$b + 1] = Lp;

Jp = C([ 1, 0 ], [ "i8*", 0 ], A);

p[Lp] = Jp + 2;

p[Lp + 1] = Kp;

p[Dh + 1] = Op;

Mp = C([ 2, 0 ], [ "i8*", 0 ], A);

p[Op] = Mp + 2;

p[Op + 1] = Np;

p[Op + 2] = Lp;

p[Pp + 1] = Rp;

p[Rp] = Mp + 2;

p[Rp + 1] = Qp;

p[Rp + 2] = Lp;

p[jc + 1] = Tp;

p[Tp] = Mp + 2;

p[Tp + 1] = Sp;

p[Tp + 2] = Lp;

p[ac + 1] = Vp;

p[Vp] = Mp + 2;

p[Vp + 1] = Up;

p[Vp + 2] = Lp;

p[Wp + 1] = Yp;

p[Yp] = Jp + 2;

p[Yp + 1] = Xp;

p[$p + 1] = bq;

p[bq] = Jp + 2;

p[bq + 1] = aq;

p[Zp + 1] = dq;

p[dq] = Jp + 2;

p[dq + 1] = cq;

p[pl + 1] = hq;

p[gq] = Jp + 2;

p[gq + 1] = fq;

p[hq] = Mp + 2;

p[hq + 1] = eq;

p[hq + 2] = gq;

p[wl + 1] = jq;

p[jq] = Mp + 2;

p[jq + 1] = iq;

p[jq + 2] = gq;

p[Cl + 1] = lq;

p[lq] = Mp + 2;

p[lq + 1] = kq;

p[lq + 2] = gq;

p[Rl + 1] = gq;

p[gm + 1] = nq;

p[nq] = Mp + 2;

p[nq + 1] = mq;

p[nq + 2] = gq;

p[om + 1] = pq;

p[pq] = Mp + 2;

p[pq + 1] = oq;

p[pq + 2] = gq;

p[sm + 1] = rq;

p[rq] = Mp + 2;

p[rq + 1] = qq;

p[rq + 2] = gq;

p[xm + 1] = tq;

p[tq] = Mp + 2;

p[tq + 1] = sq;

p[tq + 2] = gq;

p[mm + 1] = xq;

p[wq] = Jp + 2;

p[wq + 1] = vq;

p[xq] = Mp + 2;

p[xq + 1] = uq;

p[xq + 2] = wq;

p[Rm + 1] = zq;

p[zq] = Mp + 2;

p[zq + 1] = yq;

p[zq + 2] = wq;

p[Zm + 1] = Bq;

p[Bq] = Mp + 2;

p[Bq + 1] = Aq;

p[Bq + 2] = wq;

p[mn + 1] = wq;

p[rn + 1] = Eq;

p[Eq] = Mp + 2;

p[Eq + 1] = Dq;

p[Eq + 2] = wq;

p[Gn + 1] = Hq;

p[Hq] = Mp + 2;

p[Hq + 1] = Gq;

p[Hq + 2] = wq;

p[Zn + 1] = Yq;

p[Yq] = Mp + 2;

p[Yq + 1] = Iq;

p[Yq + 2] = wq;

p[mo + 1] = $q;

p[$q] = Mp + 2;

p[$q + 1] = Zq;

p[$q + 2] = wq;

p[xo + 1] = br;

p[br] = Mp + 2;

p[br + 1] = ar;

p[br + 2] = wq;

p[Eo + 1] = dr;

p[dr] = Mp + 2;

p[dr + 1] = cr;

p[dr + 2] = wq;

p[Oo + 1] = fr;

p[fr] = Mp + 2;

p[fr + 1] = er;

p[fr + 2] = wq;

qb = [ 0, 0, (function(c, d) {
  var e, f;
  e = p[c] < p[d] ? 1 : 2;
  e == 1 ? f = 1 : e == 2 && (e = p[c] == p[d] ? 3 : 4, e == 3 ? f = p[c + 1] < p[d + 1] : e == 4 && (f = 0));
  return f;
}), 0, ka(), 0, ka(), 0, (function(c, d, e, f, g) {
  f = Th(g, 144);
  if (f == 0) var i = 0, d = 2; else d = 1;
  d == 1 && (Bl(f, c, e), i = f);
  return i;
}), 0, (function(c, d) {
  qb[p[p[c] + 1]](c);
  ti(d, c, 144);
}), 0, (function(c, d, e, f, g) {
  f = Th(g, 144);
  if (f == 0) var i = 0, d = 2; else d = 1;
  d == 1 && (rm(f, c, e), i = f);
  return i;
}), 0, (function(c, d) {
  qb[p[p[c] + 1]](c);
  ti(d, c, 144);
}), 0, (function(c, d, e, f, g) {
  f = Th(g, 144);
  if (f == 0) var i = 0, d = 2; else d = 1;
  d == 1 && (wm(f, c, e), i = f);
  return i;
}), 0, (function(c, d) {
  qb[p[p[c] + 1]](c);
  ti(d, c, 144);
}), 0, (function(c, d, e, f, g) {
  f = Th(g, 144);
  if (f == 0) var i = 0, d = 2; else d = 1;
  d == 1 && (fm(f, c, e), i = f);
  return i;
}), 0, (function(c, d) {
  qb[p[p[c] + 1]](c);
  ti(d, c, 144);
}), 0, (function(c, d, e, f, g) {
  f = Th(g, 144);
  if (f == 0) var i = 0, d = 2; else d = 1;
  d == 1 && (nm(f, c, e), i = f);
  return i;
}), 0, (function(c, d) {
  qb[p[p[c] + 1]](c);
  ti(d, c, 144);
}), 0, (function(c, d, e, f, g) {
  var i;
  i = Th(g, 144);
  if (i == 0) var h = 0, g = 2; else g = 1;
  g == 1 && (nl(i, c, d, e, f), h = i);
  return h;
}), 0, (function(c, d) {
  qb[p[p[c] + 1]](c);
  ti(d, c, 144);
}), 0, (function(c, d, e, f, g) {
  var i;
  i = Th(g, 144);
  if (i == 0) var h = 0, g = 2; else g = 1;
  g == 1 && (vl(i, c, d, e, f), h = i);
  return h;
}), 0, (function(c, d) {
  qb[p[p[c] + 1]](c);
  ti(d, c, 144);
}), 0, ka(), 0, (function(c) {
  Gp(c);
}), 0, (function() {
  a("Pure virtual function called!");
}), 0, Ch, 0, (function(c) {
  Ch(c);
  Gp(c);
}), 0, Sh, 0, (function(c) {
  return p[c + 4] - 1;
}), 0, pa(0), 0, Xh, 0, Ih, 0, (function(c, d) {
  t[d] = 0;
  hc(d + 1);
  t[d + 3] = 0;
}), 0, ka(), 0, (function(c) {
  Gp(c);
}), 0, (function(c, d) {
  var e, f;
  f = Th(d, 20);
  if (f == 0) {
    var g = 0;
    e = 2;
  } else e = 1;
  e == 1 && (p[f] = $b + 2, p[f] = Pp + 2, p[f + 1] = 0, t[f + 2] = 0, hc(f + 3), g = f);
  e = g;
  $h(e, c);
  f = e + 3;
  g = c + 3;
  p[f] = p[g];
  t[f] = t[g];
  p[f + 1] = p[g + 1];
  t[f + 1] = t[g + 1];
  return e;
}), 0, pa(1), 0, (function(c, d, e) {
  var f = b;
  b += 6;
  var g = f + 2, i = f + 4;
  U(g, d + 2, c + 3);
  O(f, d, g);
  J(i, e, f);
  c = K(i, i) <= t[c + 2] * t[c + 2];
  b = f;
  return c;
}), 0, ai, 0, (function(c, d, e) {
  var f = b;
  b += 4;
  var g = f + 2;
  U(g, e + 2, c + 3);
  O(f, e, g);
  sc(d, t[f] - t[c + 2], t[f + 1] - t[c + 2]);
  sc(d + 2, t[f] + t[c + 2], t[f + 1] + t[c + 2]);
  b = f;
}), 0, (function(c, d, e) {
  t[d] = e * 3.1415927410125732 * t[c + 2] * t[c + 2];
  var e = d + 1, f = c + 3;
  p[e] = p[f];
  t[e] = t[f];
  p[e + 1] = p[f + 1];
  t[e + 1] = t[f + 1];
  t[d + 3] = t[d] * (t[c + 2] * .5 * t[c + 2] + K(c + 3, c + 3));
}), 0, ka(), 0, (function(c) {
  Gp(c);
}), 0, (function(c, d) {
  var e, f;
  f = Th(d, 48);
  if (f == 0) {
    var g = 0;
    e = 2;
  } else e = 1;
  e == 1 && (ic(f), g = f);
  e = g;
  $h(e, c);
  f = e + 3;
  g = c + 3;
  p[f] = p[g];
  t[f] = t[g];
  p[f + 1] = p[g + 1];
  t[f + 1] = t[g + 1];
  f = e + 5;
  g = c + 5;
  p[f] = p[g];
  t[f] = t[g];
  p[f + 1] = p[g + 1];
  t[f + 1] = t[g + 1];
  f = e + 7;
  g = c + 7;
  p[f] = p[g];
  t[f] = t[g];
  p[f + 1] = p[g + 1];
  t[f + 1] = t[g + 1];
  f = e + 9;
  g = c + 9;
  p[f] = p[g];
  t[f] = t[g];
  p[f + 1] = p[g + 1];
  t[f + 1] = t[g + 1];
  p[e + 11] = p[c + 11] & 1;
  p[e + 12] = p[c + 12] & 1;
  return e;
}), 0, pa(1), 0, pa(0), 0, Zh, 0, (function(c, d, e) {
  var f = b;
  b += 14;
  var g = f + 2, i = f + 4, h = f + 6, j = f + 8, k = f + 10, l = f + 12;
  Xc(f, e, c + 3);
  Xc(g, e, c + 5);
  Yg(i, f, g);
  Zg(h, f, g);
  tc(j, t[c + 2], t[c + 2]);
  J(k, i, j);
  p[d] = p[k];
  t[d] = t[k];
  p[d + 1] = p[k + 1];
  t[d + 1] = t[k + 1];
  c = d + 2;
  O(l, h, j);
  p[c] = p[l];
  t[c] = t[l];
  p[c + 1] = p[l + 1];
  t[c + 1] = t[l + 1];
  b = f;
}), 0, (function(c, d) {
  var e = b;
  b += 4;
  var f = e + 2;
  t[d] = 0;
  var g = d + 1;
  O(f, c + 3, c + 5);
  N(e, .5, f);
  p[g] = p[e];
  t[g] = t[e];
  p[g + 1] = p[e + 1];
  t[g + 1] = t[e + 1];
  t[d + 3] = 0;
  b = e;
}), 0, ka(), 0, (function(c) {
  Gp(c);
}), 0, (function(c, d) {
  var e, f;
  f = Th(d, 152);
  if (f == 0) {
    var g = 0;
    e = 2;
  } else e = 1;
  e == 1 && (Tb(f), g = f);
  e = g;
  $h(e, c);
  f = e + 3;
  g = c + 3;
  p[f] = p[g];
  t[f] = t[g];
  p[f + 1] = p[g + 1];
  t[f + 1] = t[g + 1];
  f = g = c + 5;
  g += 16;
  for (var i = e + 5; f < g; f++, i++) p[i] = p[f], t[i] = t[f];
  f = g = c + 21;
  g += 16;
  for (i = e + 21; f < g; f++, i++) p[i] = p[f], t[i] = t[f];
  p[e + 37] = p[c + 37];
  return e;
}), 0, pa(1), 0, (function(c, d, e) {
  var f = b;
  b += 6;
  var g, i, h = f + 2, j, k = f + 4;
  j = d + 2;
  J(h, e, d);
  Wd(f, j, h);
  d = 0;
  e = c + 37;
  h = c + 21;
  for (c += 5; ; ) {
    if (d >= p[e]) {
      g = 5;
      break;
    }
    j = h + (d << 1);
    J(k, f, c + (d << 1));
    j = K(j, k);
    if (j > 0) {
      g = 3;
      break;
    }
    d += 1;
  }
  g == 5 ? i = 1 : g == 3 && (i = 0);
  b = f;
  return i;
}), 0, ei, 0, bi, 0, ii, 0, ka(), 0, (function(c) {
  Gp(c);
}), 0, (function(c) {
  Gp(c);
}), 0, ka(), 0, ka(), 0, ka(), 0, ka(), 0, (function(c) {
  Gp(c);
}), 0, ml, 0, ul, 0, ka(), 0, (function(c) {
  Gp(c);
}), 0, Al, 0, ka(), 0, (function(c) {
  Gp(c);
}), 0, (function(c, d, e, f) {
  bd(d, hl(p[c + 12]), e, hl(p[c + 13]), f);
}), 0, ka(), 0, (function(c) {
  Gp(c);
}), 0, ka(), 0, (function(c) {
  Gp(c);
}), 0, (function(c, d, e, f) {
  hd(d, hl(p[c + 12]), e, hl(p[c + 13]), f);
}), 0, ka(), 0, (function(c) {
  Gp(c);
}), 0, (function(c, d, e, f) {
  var g = hl(p[c + 12]), c = hl(p[c + 13]), i = b;
  b += 63;
  Vd(i, d, g, e, c, f);
  b = i;
}), 0, ka(), 0, (function(c) {
  Gp(c);
}), 0, (function(c, d, e, f) {
  cd(d, hl(p[c + 12]), e, hl(p[c + 13]), f);
}), 0, ka(), 0, (function(c) {
  Gp(c);
}), 0, (function(c, d, e, f) {
  ae(d, hl(p[c + 12]), e, hl(p[c + 13]), f);
}), 0, ka(), 0, (function(c) {
  Gp(c);
}), 0, (function(c, d) {
  Am(c, p[d + 12], d + 21);
}), 0, (function(c, d) {
  Am(c, p[d + 13], d + 23);
}), 0, (function(c, d, e) {
  N(c, e * t[d + 26], d + 30);
}), 0, pa(0), 0, Bm, 0, ka(), 0, (function(c) {
  Gp(c);
}), 0, Mm, 0, Om, 0, Pm, 0, (function(c, d) {
  Am(c, p[d + 12], d + 18);
}), 0, (function(c, d) {
  Am(c, p[d + 13], d + 20);
}), 0, (function(c, d, e) {
  N(c, e, d + 22);
}), 0, (function(c, d) {
  return d * t[c + 24];
}), 0, Sm, 0, ka(), 0, (function(c) {
  Gp(c);
}), 0, Wm, 0, Xm, 0, pa(1), 0, (function(c, d) {
  Am(c, p[d + 12], d + 24);
}), 0, (function(c, d) {
  Am(c, p[d + 13], d + 26);
}), 0, (function(c, d, e) {
  var f = b;
  b += 2;
  N(f, t[d + 40], d + 61);
  N(c, e, f);
  b = f;
}), 0, (function(c, d) {
  return d * t[c + 40] * t[c + 65];
}), 0, fn, 0, ka(), 0, (function(c) {
  Gp(c);
}), 0, dn, 0, en, 0, ln, 0, (function() {
  V(Cq, C(1, "i32", w));
}), 0, ka(), 0, (function(c) {
  Gp(c);
}), 0, (function(c, d) {
  var e = d + 20;
  p[c] = p[e];
  t[c] = t[e];
  p[c + 1] = p[e + 1];
  t[c + 1] = t[e + 1];
}), 0, (function(c, d) {
  Am(c, p[d + 13], d + 18);
}), 0, (function(c, d, e) {
  N(c, e, d + 25);
}), 0, pa(0), 0, (function() {
  V(Fq, C(1, "i32", w));
}), 0, ka(), 0, (function(c) {
  Gp(c);
}), 0, yn, 0, Bn, 0, pa(1), 0, (function(c, d) {
  Am(c, p[d + 12], d + 18);
}), 0, (function(c, d) {
  Am(c, p[d + 13], d + 20);
}), 0, (function(c, d, e) {
  var f = b;
  b += 6;
  var g = f + 2, i = f + 4;
  N(g, t[d + 27], d + 50);
  N(i, t[d + 30] + t[d + 29], d + 48);
  O(f, g, i);
  N(c, e, f);
  b = f;
}), 0, (function(c, d) {
  return d * t[c + 28];
}), 0, On, 0, ka(), 0, (function(c) {
  Gp(c);
}), 0, Hn, 0, Ln, 0, Nn, 0, (function(c, d) {
  Am(c, p[d + 12], d + 24);
}), 0, (function(c, d) {
  Am(c, p[d + 13], d + 26);
}), 0, (function(c, d, e) {
  var f = b;
  b += 2;
  N(f, t[d + 30], d + 35);
  N(c, e, f);
  b = f;
}), 0, pa(0), 0, fo, 0, ka(), 0, (function(c) {
  Gp(c);
}), 0, co, 0, eo, 0, no, 0, (function(c, d) {
  Am(c, p[d + 12], d + 18);
}), 0, (function(c, d) {
  Am(c, p[d + 13], d + 20);
}), 0, (function(c, d, e) {
  var f = b;
  b += 2;
  tc(f, t[d + 22], t[d + 23]);
  N(c, e, f);
  b = f;
}), 0, (function(c, d) {
  return d * t[c + 24];
}), 0, ro, 0, ka(), 0, (function(c) {
  Gp(c);
}), 0, oo, 0, po, 0, qo, 0, (function(c, d) {
  Am(c, p[d + 12], d + 18);
}), 0, (function(c, d) {
  Am(c, p[d + 13], d + 20);
}), 0, (function(c, d, e) {
  N(c, e * t[d + 24], d + 27);
}), 0, pa(0), 0, Ao, 0, ka(), 0, (function(c) {
  Gp(c);
}), 0, yo, 0, zo, 0, Fo, 0, (function(c, d) {
  Am(c, p[d + 12], d + 21);
}), 0, (function(c, d) {
  Am(c, p[d + 13], d + 23);
}), 0, (function(c, d, e) {
  var f = b;
  b += 2;
  tc(f, t[d + 27], t[d + 28]);
  N(c, e, f);
  b = f;
}), 0, (function(c, d) {
  return d * t[c + 29];
}), 0, Ho, 0, ka(), 0, (function(c) {
  Gp(c);
}), 0, Go, 0, Lo, 0, Mo, 0, (function(c, d) {
  Am(c, p[d + 12], d + 20);
}), 0, (function(c, d) {
  Am(c, p[d + 13], d + 22);
}), 0, (function(c, d, e) {
  var f = b;
  b += 6;
  var g = f + 2, i = f + 4;
  N(g, t[d + 28], d + 46);
  N(i, t[d + 30], d + 44);
  O(f, g, i);
  N(c, e, f);
  b = f;
}), 0, (function(c, d) {
  return d * t[c + 29];
}), 0, Ro, 0, ka(), 0, (function(c) {
  Gp(c);
}), 0, Po, 0, Qo, 0, To, 0, Tc, 0, uc, 0, Uc, 0, wc, 0, mi, 0, di, 0, Hi, 0, Ii, 0, (function(c) {
  Wi(c);
}), 0, Zi, 0, ka(), 0, xj, 0, tj, 0, fk, 0, ek, 0, xc, 0, Sc, 0, nl, 0, vl, 0, Bl, 0, jk, 0, qk, 0, fm, 0, nm, 0, rm, 0, wm, 0, km, 0, Qm, 0, Ym, 0, qn, 0, Fn, 0, Yn, 0, lo, 0, wo, 0, Do, 0, No, 0, (function(c) {
  p[c] = 0;
  p[c + 1] = 0;
  p[c + 2] = 0;
  p[c + 3] = 0;
  p[c + 4] = 0;
  p[c + 5] = 0;
  p[c + 6] = 0;
  hc(c + 7);
  t[c + 10] = 1;
  t[c + 11] = .10000000149011612;
}), 0, (function(c) {
  vc(p[c + 1]);
  vc(p[c + 2]);
  vc(p[c + 3]);
  vc(p[c + 4]);
  vc(p[c + 5]);
  vc(p[c + 6]);
}), 0 ];

Module.FUNCTION_TABLE = qb;

function gr(c) {
  c = c || Module.arguments;
  $a();
  var d = fa;
  if (Module._main) {
    for (d = Module.H(c); ab.length > 0; ) {
      var c = ab.pop(), e = c.n;
      typeof e === "number" && (e = qb[e]);
      e(c.k === da ? fa : c.k);
    }
    Ya();
  }
  return d;
}

Module.run = gr;

try {
  wp = ga;
} catch (hr) {}

Module.noInitialRun || gr();
