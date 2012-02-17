function aa(c) {
  throw c;
}

var sa = void 0, ya = !0, ib = null, Tb = !1;

function qc() {
  return (function() {});
}

var vc = [], Dc = "object" === typeof process, Gc = "object" === typeof window, Hc = "function" === typeof importScripts, Lc = !Gc && !Dc && !Hc;

if (Dc) {
  print = (function(c) {
    process.stdout.write(c + "\n");
  });
  printErr = (function(c) {
    process.stderr.write(c + "\n");
  });
  var fd = require("fs");
  read = (function(c) {
    var d = fd.readFileSync(c).toString();
    !d && "/" != c[0] && (c = __dirname.split("/").slice(0, -1).join("/") + "/src/" + c, d = fd.readFileSync(c).toString());
    return d;
  });
  vc = process.argv.slice(2);
} else {
  Lc ? (this.read || (read = (function(c) {
    snarf(c);
  })), vc = this.arguments ? arguments : scriptArgs) : Gc ? (print = printErr = (function(c) {
    console.log(c);
  }), read = (function(c) {
    var d = new XMLHttpRequest;
    d.open("GET", c, Tb);
    d.send(ib);
    return d.responseText;
  }), this.arguments && (vc = arguments)) : Hc ? load = importScripts : aa("Unknown runtime environment. Where are we?");
}

function gd(c) {
  eval.call(ib, c);
}

"undefined" == typeof load && "undefined" != typeof read && (load = (function(c) {
  gd(read(c));
}));

"undefined" === typeof printErr && (printErr = qc());

"undefined" === typeof print && (print = printErr);

try {
  this.Module = Module;
} catch (nd) {
  this.Module = Module = {};
}

Module.arguments || (Module.arguments = vc);

Module.print && (print = Module.print);

var Gd = {
  i1: 0,
  i8: 0,
  i16: 0,
  i32: 0,
  i64: 0
}, Od = {
  "float": 0,
  "double": 0
};

function ee(c) {
  if (1 == re) {
    return 1;
  }
  var d = {
    "%i1": 1,
    "%i8": 1,
    "%i16": 2,
    "%i32": 4,
    "%i64": 8,
    "%float": 4,
    "%double": 8
  }["%" + c];
  d || ("*" == c[c.length - 1] ? d = re : "i" == c[0] && (c = parseInt(c.substr(1)), ve(0 == c % 8), d = c / 8));
  return d;
}

function we(c) {
  var d = {};
  c.filter((function(c) {
    return d[c] ? Tb : d[c] = ya;
  }));
}

function Pe() {
  var c, d, e;
  d = c = 0;
  var g = [], f = -1;
  e = [ "i32", "i32" ].map((function(e) {
    var j, m;
    e in Gd || e in Od || "*" == e[e.length - 1] ? m = j = ee(e) : (isPointerType(e) ? 0 : /^\[\d+\ x\ (.*)\]/.test(e) || /<?{ [^}]* }>?/.test(e) || "%" == e[0]) ? (j = Types.types[e].Ic, m = Types.types[e].Hc) : aa("Unclear type in struct: " + e + ", in undefined :: " + dump(Types.types[sa]));
    m = Math.min(m, re);
    d = Math.max(d, m);
    e = hf(c, m);
    c = e + j;
    0 <= f && g.push(e - f);
    return f = e;
  }));
  c = hf(c, d);
  0 == g.length || we(g);
  return e;
}

function jf(c) {
  var d = Qf;
  Qf += c;
  Qf = Qf + 3 >> 2 << 2;
  return d;
}

function qg(c) {
  var d = Yg;
  Yg += c;
  Yg = Yg + 3 >> 2 << 2;
  if (Yg >= Zg) {
    for (; Zg <= Yg; ) {
      Zg = Math.ceil(2 * Zg / $g) * $g;
    }
    var c = a, e = new ArrayBuffer(Zg);
    a = new Int8Array(e);
    b = new Int16Array(e);
    h = new Int32Array(e);
    Hh = new Uint8Array(e);
    Jh = new Uint16Array(e);
    k = new Uint32Array(e);
    l = new Float32Array(e);
    a.set(c);
  }
  return d;
}

function hf(c, d) {
  return Math.ceil(c / (d ? d : 4)) * (d ? d : 4);
}

var re = 4, Kh = {}, Ki;

function Li(c) {
  print(c + ":\n" + Error().stack);
  aa("Assertion: " + c);
}

function ve(c, d) {
  c || Li("Assertion failed: " + d);
}

function Lj(c, d, e) {
  e = e || "i8";
  "*" === e[e.length - 1] && (e = "i32");
  switch (e) {
   case "i1":
    a[c] = d;
    break;
   case "i8":
    a[c] = d;
    break;
   case "i16":
    b[c >> 1] = d;
    break;
   case "i32":
    h[c >> 2] = d;
    break;
   case "i64":
    h[c >> 2] = d;
    break;
   case "float":
    l[c >> 2] = d;
    break;
   case "double":
    l[c >> 2] = d;
    break;
   default:
    Li("invalid type for setValue: " + e);
  }
}

Module.setValue = Lj;

Module.getValue = (function(c, d) {
  d = d || "i8";
  "*" === d[d.length - 1] && (d = "i32");
  switch (d) {
   case "i1":
    return a[c];
   case "i8":
    return a[c];
   case "i16":
    return b[c >> 1];
   case "i32":
    return h[c >> 2];
   case "i64":
    return h[c >> 2];
   case "float":
    return l[c >> 2];
   case "double":
    return l[c >> 2];
   default:
    Li("invalid type for setValue: " + d);
  }
  return ib;
});

var Mj = 1, t = 2;

Module.ALLOC_NORMAL = 0;

Module.ALLOC_STACK = Mj;

Module.ALLOC_STATIC = t;

function v(c, d, e) {
  var g, f;
  "number" === typeof c ? (g = ya, f = c) : (g = Tb, f = c.length);
  var i = "string" === typeof d ? d : ib, e = [ Nj, jf, qg ][e === sa ? t : e](Math.max(f, i ? 1 : d.length));
  if (g) {
    return Kk(e, f), e;
  }
  g = 0;
  for (var j; g < f; ) {
    var m = c[g];
    "function" === typeof m && (m = Kh.Jc(m));
    j = i || d[g];
    0 === j ? g++ : ("i64" == j && (j = "i32"), Lj(e + g, m, j), g += ee(j));
  }
  return e;
}

Module.allocate = v;

function Tk(c, d) {
  for (var e = "undefined" == typeof d, g = "", f = 0, i, j = String.fromCharCode(0); ; ) {
    i = String.fromCharCode(Hh[c + f]);
    if (e && i == j) {
      break;
    }
    g += i;
    f += 1;
    if (!e && f == d) {
      break;
    }
  }
  return g;
}

Module.Pointer_stringify = Tk;

Module.Array_stringify = (function(c) {
  for (var d = "", e = 0; e < c.length; e++) {
    d += String.fromCharCode(c[e]);
  }
  return d;
});

var km, $g = 4096, a, Hh, b, Jh, h, k, l, Qf, Lm, Yg, Nm = Module.TOTAL_STACK || 5242880, Zg = Module.TOTAL_MEMORY || 10485760;

ve(!!Int32Array && !!Float64Array && !!(new Int32Array(1)).subarray && !!(new Int32Array(1)).set, "Cannot fallback to non-typed array case: Code is too specialized");

var Om = new ArrayBuffer(Zg);

a = new Int8Array(Om);

b = new Int16Array(Om);

h = new Int32Array(Om);

Hh = new Uint8Array(Om);

Jh = new Uint16Array(Om);

k = new Uint32Array(Om);

l = new Float32Array(Om);

h[0] = 255;

ve(255 === Hh[0] && 0 === Hh[3], "Typed arrays 2 must be run on a little-endian system");

var Qm = Pm("(null)");

Yg = Qm.length;

for (var Rm = 0; Rm < Qm.length; Rm++) {
  a[Rm] = Qm[Rm];
}

Module.HEAP = sa;

Module.HEAP8 = a;

Module.HEAP16 = b;

Module.HEAP32 = h;

Module.HEAPU8 = Hh;

Module.HEAPU16 = Jh;

Module.HEAPU32 = k;

Module.HEAPF32 = l;

Lm = (Qf = hf(Yg)) + Nm;

var Sm = hf(Lm, 8);

a.subarray(Sm);

var w = h.subarray(Sm >> 2), x = l.subarray(Sm >> 2);

(new Float64Array(a.buffer)).subarray(Sm >> 3);

Lm = Sm + 8;

Yg = Math.ceil(Lm / $g) * $g;

function Tm(c) {
  for (; 0 < c.length; ) {
    var d = c.shift(), e = d.Ja;
    "number" === typeof e && (e = km[e]);
    e(d.Dc === sa ? ib : d.Dc);
  }
}

var Um = [], Vm = [];

function Wm(c, d) {
  return Array.prototype.slice.call(a.subarray(c, c + d));
}

Module.Array_copy = Wm;

Module.TypedArray_copy = (function(c, d) {
  for (var e = new Uint8Array(d), g = 0; g < d; ++g) {
    e[g] = a[c + g];
  }
  return e.buffer;
});

function Xm(c) {
  for (var d = 0; a[c + d]; ) {
    d++;
  }
  return d;
}

Module.String_len = Xm;

function Ym(c, d) {
  var e = Xm(c);
  d && e++;
  var g = Wm(c, e);
  d && (g[e - 1] = 0);
  return g;
}

Module.String_copy = Ym;

function Pm(c, d) {
  for (var e = [], g = 0; g < c.length; ) {
    var f = c.charCodeAt(g);
    255 < f && (f &= 255);
    e.push(f);
    g += 1;
  }
  d || e.push(0);
  return e;
}

Module.intArrayFromString = Pm;

Module.intArrayToString = (function(c) {
  for (var d = [], e = 0; e < c.length; e++) {
    var g = c[e];
    255 < g && (g &= 255);
    d.push(String.fromCharCode(g));
  }
  return d.join("");
});

var z = [];

function Zm(c, d) {
  return 0 <= c ? c : 32 >= d ? 2 * Math.abs(1 << d - 1) + c : Math.pow(2, d) + c;
}

function $m(c, d) {
  if (0 >= c) {
    return c;
  }
  var e = 32 >= d ? Math.abs(1 << d - 1) : Math.pow(2, d - 1);
  if (c >= e && (32 >= d || c > e)) {
    c = -2 * e + c;
  }
  return c;
}

function an(c, d, e, g, f) {
  var i, j = c >> 2;
  i = c + 60 >> 2;
  h[i] = 0;
  var m = g + 12, n = l[f + 12 >> 2], o = l[m >> 2], q = l[f + 8 >> 2], p = l[g + 16 >> 2], r = n * o - q * p + l[f >> 2] - l[e >> 2], f = q * o + n * p + l[f + 4 >> 2] - l[e + 4 >> 2], n = l[e + 12 >> 2], o = l[e + 8 >> 2], e = n * r + o * f, r = r * -o + n * f, n = d + 12, f = k[n >> 2], n = k[n + 4 >> 2], o = (w[0] = f, x[0]), q = (w[0] = n, x[0]), s = d + 20, p = k[s >> 2], s = k[s + 4 >> 2], u = (w[0] = p, x[0]), A = (w[0] = s, x[0]), E = u - o, y = A - q, I = E * (u - e) + y * (A - r), C = e - o, K = r - q, J = E * C + y * K, g = l[d + 8 >> 2] + l[g + 8 >> 2], M = 0 < J;
  do {
    if (M) {
      if (0 < I) {
        var B = E * E + y * y;
        0 < B || G(z.cc, 127, z.hb, z.Qb);
        var F = 1 / B, B = e - (o * I + u * J) * F, F = r - (q * I + A * J) * F;
        if (B * B + F * F <= g * g) {
          B = -y;
          0 > C * B + E * K ? (F = y, B = -E) : (F = B, B = E);
          var H = bn(F * F + B * B);
          1.1920928955078125e-7 > H ? H = B : (H = 1 / H, F *= H, H *= B);
          h[i] = 1;
          h[j + 14] = 1;
          B = c + 40;
          F = (x[0] = F, w[0]);
          H = (x[0] = H, w[0]) | 0;
          h[B >> 2] = 0 | F;
          h[B + 4 >> 2] = H;
          B = c + 48;
          h[B >> 2] = f;
          h[B + 4 >> 2] = n;
          B = c + 16;
          h[B >> 2] = 0;
          F = B;
          a[B] = 0;
          a[F + 1] = 0;
          a[F + 2] = 1;
          a[F + 3] = 0;
          B = m;
          F = c;
          H = h[B + 4 >> 2];
          h[F >> 2] = h[B >> 2];
          h[F + 4 >> 2] = H;
        }
      } else {
        if (B = e - u, F = r - A, B * B + F * F <= g * g) {
          if (0 != (a[d + 45] & 1)) {
            var P = d + 36, H = P, P = P + 4, P = h[P >> 2], H = (w[0] = h[H >> 2], x[0]), P = (w[0] = P, x[0]);
            if (0 < (H - u) * B + (P - A) * F) {
              break;
            }
          }
          h[i] = 1;
          h[j + 14] = 0;
          l[j + 10] = 0;
          l[j + 11] = 0;
          B = F = c + 48;
          h[B >> 2] = p;
          B = F + 4;
          h[B >> 2] = s;
          B = c + 16;
          h[B >> 2] = 0;
          F = B;
          a[B] = 1;
          a[F + 1] = 0;
          a[F + 2] = 0;
          a[F + 3] = 0;
          F = m;
          H = c;
          B = F;
          F += 4;
          P = h[F >> 2];
          F = H;
          h[F >> 2] = h[B >> 2];
          B = H + 4;
          h[B >> 2] = P;
        }
      }
    } else {
      if (C * C + K * K <= g * g) {
        if (0 != (a[d + 44] & 1) && (H = B = d + 28, P = B + 4, B = h[P >> 2], F = (w[0] = h[H >> 2], x[0]), B = (w[0] = B, x[0]), 0 < (o - F) * (o - e) + (q - B) * (q - r))) {
          break;
        }
        h[i] = 1;
        h[j + 14] = 0;
        l[j + 10] = 0;
        l[j + 11] = 0;
        B = F = c + 48;
        h[B >> 2] = f;
        B = F + 4;
        h[B >> 2] = n;
        B = c + 16;
        h[B >> 2] = 0;
        F = B;
        a[B] = 0;
        a[F + 1] = 0;
        a[F + 2] = 0;
        a[F + 3] = 0;
        F = m;
        H = c;
        B = F;
        B = h[B >> 2];
        F += 4;
        P = h[F >> 2];
        F = H;
        h[F >> 2] = B;
        B = H + 4;
        h[B >> 2] = P;
      }
    }
  } while (0);
}

function cn() {
  var c, d, e, g, f, i, j, m, n, o, q, p, r = Qf;
  Qf += 104412;
  var s = r + 28, u = r + 56;
  p = u >> 2;
  var A = r + 103084;
  q = A >> 2;
  var E = r + 103136;
  o = E >> 2;
  var y = r + 103184;
  n = y >> 2;
  var I = r + 103336, C = r + 103388, K = u + 8;
  h[K >> 2] = 128;
  h[p + 1] = 0;
  var J = Nj(1024);
  h[p] = J;
  Kk(J, h[K >> 2] << 3);
  for (var M = u + 12 >> 2, B = M + 14; M < B; M++) {
    h[M] = 0;
  }
  for (var F = 0, H = 1; ; ) {
    14 > F || G(z.e, 73, z.nb, z.Ub);
    if (H > h[dn + (F << 2) >> 2]) {
      var P = F + 1;
      a[en + H] = P & 255;
      var D = P;
    } else {
      a[en + H] = F & 255, D = F;
    }
    var Q = H + 1;
    if (641 == Q) {
      break;
    } else {
      F = D, H = Q;
    }
  }
  h[p + 25617] = 0;
  h[p + 25618] = 0;
  h[p + 25619] = 0;
  h[p + 25716] = 0;
  h[p + 25718] = -1;
  m = u + 102884 >> 2;
  h[m] = 16;
  h[p + 25720] = 0;
  var O = Nj(576);
  j = u + 102876 >> 2;
  h[j] = O;
  Kk(O, 36 * h[m]);
  var L = h[m] - 1, jb = 0 < L;
  a : do {
    if (jb) {
      for (var U = 0; ; ) {
        var N = U + 1;
        h[h[j] + 36 * U + 20 >> 2] = N;
        h[h[j] + 36 * U + 32 >> 2] = -1;
        var ma = h[m] - 1;
        if (N < ma) {
          U = N;
        } else {
          var na = ma;
          break a;
        }
      }
    } else {
      na = L;
    }
  } while (0);
  h[h[j] + 36 * na + 20 >> 2] = -1;
  h[h[j] + 36 * (h[m] - 1) + 32 >> 2] = -1;
  h[p + 25722] = 0;
  h[p + 25723] = 0;
  h[p + 25724] = 0;
  h[p + 25725] = 0;
  h[p + 25730] = 16;
  h[p + 25731] = 0;
  var za = Nj(192);
  h[p + 25729] = za;
  h[p + 25727] = 16;
  h[p + 25728] = 0;
  var S = Nj(64);
  h[p + 25726] = S;
  h[p + 25733] = 0;
  h[p + 25734] = 0;
  h[p + 25735] = fn;
  h[p + 25736] = gn;
  var T = u + 102948, $ = u + 102968;
  h[p + 25745] = 0;
  h[p + 25746] = 0;
  i = u + 102952 >> 2;
  h[i] = 0;
  h[p + 25739] = 0;
  f = u + 102960 >> 2;
  h[f] = 0;
  h[p + 25741] = 0;
  a[u + 102992] = 1;
  a[u + 102993] = 1;
  a[u + 102994] = 0;
  a[u + 102995] = 1;
  var Fa = u + 102976;
  a[Fa] = 1;
  h[$ >> 2] = 0;
  h[$ + 4 >> 2] = 3240099840;
  g = u + 102868 >> 2;
  h[g] = 4;
  l[p + 25747] = 0;
  h[T >> 2] = u;
  e = u + 102996 >> 2;
  h[e] = 0;
  h[e + 1] = 0;
  h[e + 2] = 0;
  h[e + 3] = 0;
  h[e + 4] = 0;
  h[e + 5] = 0;
  h[e + 6] = 0;
  h[e + 7] = 0;
  a[Fa] = 0;
  h[q + 11] = 0;
  var Z = A + 36;
  d = A + 4 >> 2;
  h[d] = 0;
  h[d + 1] = 0;
  h[d + 2] = 0;
  h[d + 3] = 0;
  h[d + 4] = 0;
  h[d + 5] = 0;
  h[d + 6] = 0;
  h[d + 7] = 0;
  a[Z] = 1;
  a[A + 37] = 1;
  a[A + 38] = 0;
  a[A + 39] = 0;
  h[q] = 0;
  a[A + 40] = 1;
  l[q + 12] = 1;
  var X = hn(u, 152);
  if (0 == X) {
    var ba = 0;
  } else {
    jn(X, A, u), ba = X;
  }
  h[ba + 92 >> 2] = 0;
  h[ba + 96 >> 2] = h[i];
  var Da = h[i];
  0 != Da && (h[Da + 92 >> 2] = ba);
  h[i] = ba;
  h[f] += 1;
  h[o] = Wn + 8;
  h[o + 1] = 1;
  l[o + 2] = .009999999776482582;
  l[o + 7] = 0;
  l[o + 8] = 0;
  l[o + 9] = 0;
  l[o + 10] = 0;
  var Ea = E + 44, lb = E + 45, Qa = E + 12;
  h[Qa >> 2] = 3256877056;
  h[Qa + 4 >> 2] = 0;
  var qa = E + 20;
  h[qa >> 2] = 1109393408;
  h[qa + 4 >> 2] = 0;
  a[Ea] = 0;
  a[lb] = 0;
  b[r + 22 >> 1] = 1;
  b[r + 24 >> 1] = -1;
  b[r + 26 >> 1] = 0;
  h[r + 4 >> 2] = 0;
  l[r + 8 >> 2] = .20000000298023224;
  l[r + 12 >> 2] = 0;
  var va = r + 16;
  a[r + 20] = 0;
  h[r >> 2] = E;
  l[va >> 2] = 0;
  Xn(ba, r);
  h[n] = ip + 8;
  h[n + 1] = 2;
  l[n + 2] = .009999999776482582;
  var Y = y + 12, Ga = y + 16;
  h[n + 37] = 4;
  l[n + 5] = -.5;
  l[n + 6] = -.5;
  l[n + 7] = .5;
  l[n + 8] = -.5;
  l[n + 9] = .5;
  l[n + 10] = .5;
  l[n + 11] = -.5;
  l[n + 12] = .5;
  l[n + 21] = 0;
  l[n + 22] = -1;
  l[n + 23] = 1;
  l[n + 24] = 0;
  l[n + 25] = 0;
  l[n + 26] = 1;
  l[n + 27] = -1;
  l[n + 28] = 0;
  l[Y >> 2] = 0;
  l[Ga >> 2] = 0;
  var wa = I + 44, Ra = I + 36;
  c = I + 4 >> 2;
  for (var Za = I + 37, $a = I + 38, La = I + 39, ab = I + 40, kb = I + 48, fb = I + 4, pb = s + 22, ga = s + 24, da = s + 26, bb = s + 4, ca = s + 8, ha = s + 12, ta = s + 16, ua = s + 20, oa = 0, ka = -7, xa = .75; ; ) {
    if (40 > oa) {
      var Ua = oa, la = ka, Sa = xa;
    } else {
      var cb = 0;
      break;
    }
    for (; 40 > Ua; ) {
      h[wa >> 2] = 0;
      h[c] = 0;
      h[c + 1] = 0;
      h[c + 2] = 0;
      h[c + 3] = 0;
      h[c + 4] = 0;
      h[c + 5] = 0;
      h[c + 6] = 0;
      h[c + 7] = 0;
      a[Ra] = 1;
      a[Za] = 1;
      a[$a] = 0;
      a[La] = 0;
      a[ab] = 1;
      l[kb >> 2] = 1;
      h[I >> 2] = 2;
      var qb = (x[0] = la, w[0]), xb = (x[0] = Sa, w[0]) | 0;
      h[fb >> 2] = 0 | qb;
      h[fb + 4 >> 2] = xb;
      var Pb = h[g];
      if (0 == (Pb & 2)) {
        var Na = Pb;
      } else {
        G(z.r, 109, z.rb, z.Gb), Na = h[g];
      }
      if (0 == (Na & 2)) {
        var Ha = hn(u, 152);
        if (0 == Ha) {
          var pa = 0;
        } else {
          var Ia = Ha;
          jn(Ha, I, u);
          pa = Ia;
        }
        h[pa + 92 >> 2] = 0;
        h[pa + 96 >> 2] = h[i];
        var Oa = h[i];
        0 != Oa && (h[Oa + 92 >> 2] = pa);
        h[i] = pa;
        h[f] += 1;
        var Pa = pa;
      } else {
        Pa = 0;
      }
      b[pb >> 1] = 1;
      b[ga >> 1] = -1;
      b[da >> 1] = 0;
      h[bb >> 2] = 0;
      l[ca >> 2] = .20000000298023224;
      l[ha >> 2] = 0;
      a[ua] = 0;
      h[s >> 2] = y;
      l[ta >> 2] = 5;
      Xn(Pa, s);
      Ua += 1;
      la += 1.125;
    }
    oa += 1;
    ka += .5625;
    xa += 1;
  }
  for (;;) {
    if (64 <= cb) {
      var Aa = 0;
      break;
    }
    jp(u);
    cb += 1;
  }
  for (; 256 > Aa; ) {
    var ia = kp();
    jp(u);
    var Va = kp() - ia;
    h[C + (Aa << 2) >> 2] = Va;
    var ra = 1e3 * (Va / 1e3), Ka = (Ki = Qf, Qf += 8, l[Sm >> 2] = ra, h[Ki >> 2] = h[Sm >> 2], h[Ki + 4 >> 2] = h[Sm + 4 >> 2], Ki);
    lp(Ka);
    Aa += 1;
  }
  var db = h[mp >> 2];
  a[np] = Zm(10);
  -1 == op(db, np, 1) && db in pp && (pp[db].error = ya);
  for (var ub = 0, vb = 0; ; ) {
    var mb = h[C + (vb << 2) >> 2] + ub, gb = vb + 1;
    if (256 == gb) {
      break;
    } else {
      ub = mb, vb = gb;
    }
  }
  var nb = 1e3 * (.00390625 * mb / 1e3), Wa = (Ki = Qf, Qf += 8, l[Sm >> 2] = nb, h[Ki >> 2] = h[Sm >> 2], h[Ki + 4 >> 2] = h[Sm + 4 >> 2], Ki);
  lp(Wa);
  var ea, Ja, Ba = u >> 2, Ta = h[Ba + 25738];
  a : for (; 0 != Ta; ) {
    for (var yb = h[Ta + 96 >> 2], Xa = h[Ta + 100 >> 2]; ; ) {
      if (0 == Xa) {
        Ta = yb;
        continue a;
      }
      var eb = h[Xa + 4 >> 2];
      h[Xa + 28 >> 2] = 0;
      Ja = Xa + 12 >> 2;
      var Eb = h[Ja], zb = km[h[h[Eb >> 2] + 12 >> 2]](Eb), Nb = Xa + 24, Qb = k[Nb >> 2], Bb = Qb, Ib = 28 * zb, Jb = 0 == Ib;
      b : do {
        if (!Jb) {
          var wb = 0 < Ib;
          do {
            if (wb) {
              if (640 < Ib) {
                qp(Bb);
                break b;
              }
            } else {
              G(z.e, 164, z.h, z.za);
            }
          } while (0);
          var Fb = Hh[en + Ib], Gb = Fb;
          14 > Fb || G(z.e, 173, z.h, z.i);
          var ob = Qb, Kb = (Gb << 2) + u + 12;
          h[Qb >> 2] = h[Kb >> 2];
          h[Kb >> 2] = ob;
        }
      } while (0);
      h[Nb >> 2] = 0;
      var hb = k[Ja];
      ea = hb >> 2;
      var rb = h[ea + 1];
      if (0 == rb) {
        km[h[h[ea] >> 2]](hb);
        var W = Hh[en + 20], ja = W;
        14 > W || G(z.e, 173, z.h, z.i);
        var Ca = hb, Ub = (ja << 2) + u + 12;
        h[ea] = h[Ub >> 2];
        h[Ub >> 2] = Ca;
      } else {
        if (1 == rb) {
          km[h[h[ea] >> 2]](hb);
          var Ab = Hh[en + 48], Cb = Ab;
          14 > Ab || G(z.e, 173, z.h, z.i);
          var Xb = hb, dc = (Cb << 2) + u + 12;
          h[ea] = h[dc >> 2];
          h[dc >> 2] = Xb;
        } else {
          if (2 == rb) {
            km[h[h[ea] >> 2]](hb);
            var Ma = Hh[en + 152], Lb = Ma;
            14 > Ma || G(z.e, 173, z.h, z.i);
            var fa = hb, sb = (Lb << 2) + u + 12;
            h[ea] = h[sb >> 2];
            h[sb >> 2] = fa;
          } else {
            if (3 == rb) {
              km[h[h[ea] >> 2]](hb);
              var tb = Hh[en + 40], V = tb;
              14 > tb || G(z.e, 173, z.h, z.i);
              var Yb = hb, gc = (V << 2) + u + 12;
              h[ea] = h[gc >> 2];
              h[gc >> 2] = Yb;
            } else {
              G(z.Ob, 115, z.tb, z.f);
            }
          }
        }
      }
      h[Ja] = 0;
      Xa = eb;
    }
  }
  qp(h[Ba + 25726]);
  qp(h[Ba + 25729]);
  qp(h[Ba + 25719]);
  0 != h[Ba + 25617] && G(z.j, 32, z.da, z.Vb);
  0 != h[Ba + 25716] && G(z.j, 33, z.da, z.ac);
  var Rb = u + 4, cc = 0 < h[Rb >> 2], Zb = h[u >> 2];
  a : do {
    if (cc) {
      for (var wc = 0, Xc = Zb; ; ) {
        qp(h[Xc + (wc << 3) + 4 >> 2]);
        var kc = wc + 1, rc = h[u >> 2];
        if (kc < h[Rb >> 2]) {
          wc = kc, Xc = rc;
        } else {
          var ec = rc;
          break a;
        }
      }
    } else {
      ec = Zb;
    }
  } while (0);
  qp(ec);
  Qf = r;
  return 0;
}

Module._main = cn;

function rp(c, d, e, g, f, i) {
  var j, m, n, o, q, p, r, s, u, A, E, y, I, C, K, J, M, B, F, H, P, D, Q, O, L, jb, U, N, ma, na, za, S, T, $, Fa, Z, X, ba, Da, Ea, lb, Qa, qa, va, Y, Ga, wa, Ra, Za, $a, La, ab, kb, fb, pb, ga = f >> 2, da = c >> 2, bb = Qf;
  Qf += 72;
  var ca, ha = bb + 24;
  pb = ha >> 2;
  var ta = bb + 48;
  fb = ta >> 2;
  var ua = c + 132, oa = l[g + 12 >> 2], ka = l[i + 8 >> 2], xa = l[g + 8 >> 2], Ua = l[i + 12 >> 2], la = oa * ka - xa * Ua, Sa = oa * Ua + xa * ka, cb = (x[0] = la, w[0]), qb = (x[0] = Sa, w[0]), xb = 0 | cb, Pb = qb | 0, Na = l[i >> 2] - l[g >> 2], Ha = l[i + 4 >> 2] - l[g + 4 >> 2], pa = oa * Na + xa * Ha, Ia = Na * -xa + oa * Ha, Oa = (x[0] = pa, w[0]), Pa = (x[0] = Ia, w[0]) | 0;
  h[ua >> 2] = 0 | Oa;
  h[ua + 4 >> 2] = Pa;
  var Aa = c + 140;
  h[Aa >> 2] = xb;
  h[Aa + 4 >> 2] = Pb;
  kb = c + 144 >> 2;
  var ia = l[ga + 3];
  ab = c + 140 >> 2;
  var Va = l[ga + 4];
  La = ua >> 2;
  var ra = Sa * ia - la * Va + pa;
  $a = c + 136 >> 2;
  var Ka = la * ia + Sa * Va + Ia, db = c + 148, ub = (x[0] = ra, w[0]), vb = (x[0] = Ka, w[0]) | 0;
  h[db >> 2] = 0 | ub;
  h[db + 4 >> 2] = vb;
  var mb = e + 28, gb = c + 156, nb = h[mb >> 2], Wa = h[mb + 4 >> 2];
  h[gb >> 2] = nb;
  h[gb + 4 >> 2] = Wa;
  var ea = e + 12, Ja = c + 164, Ba = h[ea >> 2], Ta = h[ea + 4 >> 2];
  h[Ja >> 2] = Ba;
  h[Ja + 4 >> 2] = Ta;
  var yb = e + 20, Xa = c + 172, eb = h[yb >> 2], Eb = h[yb + 4 >> 2];
  h[Xa >> 2] = eb;
  h[Xa + 4 >> 2] = Eb;
  var zb = e + 36, Nb = c + 180, Qb = h[zb >> 2], Bb = h[zb + 4 >> 2];
  h[Nb >> 2] = Qb;
  h[Nb + 4 >> 2] = Bb;
  var Ib = a[e + 44] & 1, Jb = 0 != Ib, wb = a[e + 45], Fb = 0 != (wb & 1), Gb = (w[0] = eb, x[0]), ob = (w[0] = Ba, x[0]), Kb = Gb - ob, hb = (w[0] = Eb, x[0]), rb = c + 168, W = (w[0] = Ta, x[0]), ja = hb - W, Ca = bn(Kb * Kb + ja * ja), Ub = 1.1920928955078125e-7 > Ca, Ab = (w[0] = nb, x[0]), Cb = (w[0] = Wa, x[0]), Xb = (w[0] = Qb, x[0]), dc = (w[0] = Bb, x[0]);
  if (Ub) {
    var Ma = Kb, Lb = ja;
  } else {
    var fa = 1 / Ca, Ma = Kb * fa, Lb = ja * fa;
  }
  var sb = c + 196, tb = -Ma;
  Za = sb >> 2;
  l[Za] = Lb;
  Ra = c + 200 >> 2;
  l[Ra] = tb;
  var V = Lb * (ra - ob) + (Ka - W) * tb;
  if (Jb) {
    var Yb = ob - Ab, gc = W - Cb, Rb = bn(Yb * Yb + gc * gc);
    if (1.1920928955078125e-7 > Rb) {
      var cc = Yb, Zb = gc;
    } else {
      var wc = 1 / Rb, cc = Yb * wc, Zb = gc * wc;
    }
    var Xc = -cc;
    l[da + 47] = Zb;
    l[da + 48] = Xc;
    var kc = 0 <= cc * Lb - Zb * Ma, rc = Zb * (ra - Ab) + (Ka - Cb) * Xc;
  } else {
    rc = kc = 0;
  }
  a : do {
    if (Fb) {
      var ec = Xb - Gb, sc = dc - hb, Mc = bn(ec * ec + sc * sc);
      if (1.1920928955078125e-7 > Mc) {
        var Db = ec, Ya = sc;
      } else {
        var Wb = 1 / Mc, Db = ec * Wb, Ya = sc * Wb;
      }
      var lc = -Db;
      wa = c + 204 >> 2;
      l[wa] = Ya;
      Ga = c + 208 >> 2;
      l[Ga] = lc;
      var Ec = 0 < Ma * Ya - Lb * Db, Nc = Ya * (ra - Gb) + (Ka - hb) * lc;
      if (0 == (Ib & wb)) {
        var oc = Nc, $b = Ec;
        ca = 37;
      } else {
        if (kc & Ec) {
          var od = 0 > rc & 0 > V;
          do {
            if (od) {
              var Yc = 0 <= Nc;
              a[c + 248] = Yc;
              var Hb = c + 212;
              if (Yc) {
                var ac = Hb;
              } else {
                var hc = Hb, yc = (x[0] = -Lb, w[0]), Zc = (x[0] = Ma, w[0]), tc = 0 | yc, Oc = Zc | 0, zc = hc;
                Y = zc >> 2;
                h[Y] = tc;
                var bc = hc + 4;
                va = bc >> 2;
                h[va] = Oc;
                var pc = c + 228, hd = pc;
                qa = hd >> 2;
                h[qa] = tc;
                var Sc = pc + 4;
                Qa = Sc >> 2;
                h[Qa] = Oc;
                var xd = c + 236, ic = xd;
                lb = ic >> 2;
                h[lb] = tc;
                var uc = xd + 4;
                Ea = uc >> 2;
                h[Ea] = Oc;
                ca = 64;
                break a;
              }
            } else {
              a[c + 248] = 1, ac = c + 212;
            }
          } while (0);
          var Pd = sb, yd = ac, Ob = Pd;
          Da = Ob >> 2;
          var zd = h[Da], Ac = Pd + 4;
          ba = Ac >> 2;
          var fc = h[ba], Mb = yd;
          X = Mb >> 2;
          h[X] = zd;
          var Vb = yd + 4;
          Z = Vb >> 2;
          h[Z] = fc;
          var Tc = c + 188, $c = c + 228, Ic = Tc;
          Fa = Ic >> 2;
          var fe = h[Fa], Pc = Tc + 4;
          $ = Pc >> 2;
          var Wd = h[$], Fc = $c;
          T = Fc >> 2;
          h[T] = fe;
          var mc = $c + 4;
          S = mc >> 2;
          h[S] = Wd;
          var Jc = c + 204, Ad = c + 236, Bd = Jc;
          za = Bd >> 2;
          var ad = h[za], bd = Jc + 4;
          na = bd >> 2;
          var pd = h[na];
          h[Ad >> 2] = ad;
          h[Ad + 4 >> 2] = pd;
        } else {
          if (kc) {
            var Qd = 0 > rc;
            do {
              if (Qd) {
                if (0 > V) {
                  a[c + 248] = 0;
                  var Hd = c + 212;
                } else {
                  var cd = 0 <= Nc;
                  a[c + 248] = cd;
                  var Uc = c + 212;
                  if (cd) {
                    var jc = Uc;
                    break;
                  } else {
                    Hd = Uc;
                  }
                }
                var Vc = Hd, Bc = (x[0] = -Lb, w[0]), id = (x[0] = Ma, w[0]) | 0, Sb = Vc;
                ma = Sb >> 2;
                h[ma] = 0 | Bc;
                var nc = Vc + 4;
                N = nc >> 2;
                h[N] = id;
                var ge = -l[Ga], Id = c + 228, qd = (x[0] = -l[wa], w[0]), Rd = (x[0] = ge, w[0]) | 0, rd = Id;
                U = rd >> 2;
                h[U] = 0 | qd;
                var Jd = Id + 4;
                jb = Jd >> 2;
                h[jb] = Rd;
                var Cd = -l[Ra], Dd = c + 236, dd = (x[0] = -l[Za], w[0]), sd = (x[0] = Cd, w[0]) | 0;
                h[Dd >> 2] = 0 | dd;
                h[Dd + 4 >> 2] = sd;
                ca = 64;
                break a;
              } else {
                a[c + 248] = 1, jc = c + 212;
              }
            } while (0);
            var Wc = sb, Kd = jc, Ob = Wc;
            Da = Ob >> 2;
            var Xd = h[Da], Ac = Wc + 4;
            ba = Ac >> 2;
            var Yd = h[ba], Mb = Kd;
            X = Mb >> 2;
            h[X] = Xd;
            Vb = Kd + 4;
            Z = Vb >> 2;
            h[Z] = Yd;
            var he = c + 188, xe = c + 228, Ic = he;
            Fa = Ic >> 2;
            var Ge = h[Fa], Pc = he + 4;
            $ = Pc >> 2;
            var ie = h[$], Fc = xe;
            T = Fc >> 2;
            h[T] = Ge;
            mc = xe + 4;
            S = mc >> 2;
            h[S] = ie;
            var Ld = c + 236, ed = Wc;
            L = ed >> 2;
            var je = h[L], Zd = Wc + 4;
            O = Zd >> 2;
            var jd = h[O], Qc = Ld;
            Q = Qc >> 2;
            h[Q] = je;
            var Rc = Ld + 4;
            D = Rc >> 2;
            h[D] = jd;
          } else {
            if (Ec) {
              var ye = 0 > Nc;
              do {
                if (ye) {
                  if (0 > rc) {
                    a[c + 248] = 0;
                    var $d = c + 212;
                  } else {
                    var Qe = 0 <= V;
                    a[c + 248] = Qe;
                    var Re = c + 212;
                    if (Qe) {
                      var Bf = Re;
                      break;
                    } else {
                      $d = Re;
                    }
                  }
                  var kf = $d, Rf = (x[0] = -Lb, w[0]), ah = (x[0] = Ma, w[0]) | 0, Sb = kf;
                  ma = Sb >> 2;
                  h[ma] = 0 | Rf;
                  nc = kf + 4;
                  N = nc >> 2;
                  h[N] = ah;
                  var Se = -l[Ra], He = c + 228, lf = (x[0] = -l[Za], w[0]), ke = (x[0] = Se, w[0]) | 0, rd = He;
                  U = rd >> 2;
                  h[U] = 0 | lf;
                  Jd = He + 4;
                  jb = Jd >> 2;
                  h[jb] = ke;
                  var mf = -l[da + 48], Ie = c + 236, Lh = (x[0] = -l[da + 47], w[0]), Mh = (x[0] = mf, w[0]) | 0, nf = Ie;
                  h[nf >> 2] = 0 | Lh;
                  var Te = Ie + 4;
                  h[Te >> 2] = Mh;
                  ca = 64;
                  break a;
                } else {
                  a[c + 248] = 1, Bf = c + 212;
                }
              } while (0);
              var Cf = sb, bh = Bf, Ob = Cf;
              Da = Ob >> 2;
              var Je = h[Da], Ac = Cf + 4;
              ba = Ac >> 2;
              var Nh = h[ba], Mb = bh;
              X = Mb >> 2;
              h[X] = Je;
              Vb = bh + 4;
              Z = Vb >> 2;
              h[Z] = Nh;
              var rg = c + 228, Sb = Cf;
              ma = Sb >> 2;
              var Sf = h[ma], nc = Cf + 4;
              N = nc >> 2;
              var ch = h[N];
              h[rg >> 2] = Sf;
              h[rg + 4 >> 2] = ch;
              var Ue = c + 204, sg = c + 236, ed = Ue;
              L = ed >> 2;
              var tg = h[L], Zd = Ue + 4;
              O = Zd >> 2;
              var Oh = h[O], Qc = sg;
              Q = Qc >> 2;
              h[Q] = tg;
              Rc = sg + 4;
              D = Rc >> 2;
              h[D] = Oh;
            } else {
              var dh = 0 > rc | 0 > V;
              do {
                if (dh) {
                  a[c + 248] = 0;
                  var of = c + 212;
                } else {
                  var ug = 0 <= Nc;
                  a[c + 248] = ug;
                  var Df = c + 212;
                  if (ug) {
                    var vg = sb, wg = Df, td = vg;
                    P = td >> 2;
                    var pf = k[P], kd = vg + 4;
                    H = kd >> 2;
                    var Ef = k[H], ud = wg;
                    F = ud >> 2;
                    h[F] = pf;
                    var Ed = wg + 4;
                    B = Ed >> 2;
                    h[B] = Ef;
                    var Ff = c + 228, zc = Ff;
                    Y = zc >> 2;
                    h[Y] = pf;
                    bc = Ff + 4;
                    va = bc >> 2;
                    h[va] = Ef;
                    var ae = c + 236, hd = ae;
                    qa = hd >> 2;
                    h[qa] = pf;
                    Sc = ae + 4;
                    Qa = Sc >> 2;
                    h[Qa] = Ef;
                    ca = 64;
                    break a;
                  } else {
                    of = Df;
                  }
                }
              } while (0);
              var Tf = of, eh = (x[0] = -Lb, w[0]), fh = (x[0] = Ma, w[0]) | 0, Sb = Tf;
              ma = Sb >> 2;
              h[ma] = 0 | eh;
              nc = Tf + 4;
              N = nc >> 2;
              h[N] = fh;
              var gh = -l[Ga], xg = c + 228, Gf = (x[0] = -l[wa], w[0]), Hf = (x[0] = gh, w[0]) | 0, rd = xg;
              U = rd >> 2;
              h[U] = 0 | Gf;
              Jd = xg + 4;
              jb = Jd >> 2;
              h[jb] = Hf;
              var Fd = -l[da + 48], ld = c + 236, xc = (x[0] = -l[da + 47], w[0]), hh = (x[0] = Fd, w[0]) | 0, nf = ld;
              h[nf >> 2] = 0 | xc;
              Te = ld + 4;
              h[Te >> 2] = hh;
            }
          }
        }
        ca = 64;
      }
    } else {
      $b = oc = 0, ca = 37;
    }
  } while (0);
  a : do {
    if (37 == ca) {
      if (Jb) {
        var yg = 0 <= rc;
        if (kc) {
          do {
            if (yg) {
              a[c + 248] = 1;
              var Ve = c + 212;
            } else {
              var ze = 0 <= V;
              a[c + 248] = ze;
              var qf = c + 212;
              if (ze) {
                Ve = qf;
              } else {
                var Uf = qf, le = (x[0] = -Lb, w[0]), If = (x[0] = Ma, w[0]), ih = If | 0, zc = Uf;
                Y = zc >> 2;
                h[Y] = 0 | le;
                bc = Uf + 4;
                va = bc >> 2;
                h[va] = ih;
                var Vf = sb, Cc = c + 228, Fc = Vf;
                T = Fc >> 2;
                var Ae = h[T], mc = Vf + 4;
                S = mc >> 2;
                var Jf = h[S], be = Cc;
                M = be >> 2;
                h[M] = Ae;
                var Sd = Cc + 4;
                J = Sd >> 2;
                h[J] = Jf;
                var Wf = c + 236, zg = -(w[0] = Ae, x[0]), Xf = Wf, Yf = 0 | (x[0] = zg, w[0]), Be = If | 0;
                h[Xf >> 2] = Yf;
                h[Xf + 4 >> 2] = Be;
                break a;
              }
            }
          } while (0);
          var ce = sb, Ke = Ve, Ob = ce;
          Da = Ob >> 2;
          var rf = h[Da], Ac = ce + 4;
          ba = Ac >> 2;
          var Ag = h[ba], Mb = Ke;
          X = Mb >> 2;
          h[X] = rf;
          Vb = Ke + 4;
          Z = Vb >> 2;
          h[Z] = Ag;
          var Zf = c + 188, sf = c + 228, Ic = Zf;
          Fa = Ic >> 2;
          var $f = h[Fa], Pc = Zf + 4;
          $ = Pc >> 2;
          var ag = h[$], Fc = sf;
          T = Fc >> 2;
          h[T] = $f;
          mc = sf + 4;
          S = mc >> 2;
          h[S] = ag;
          var jh = -l[Ra], We = c + 236, me = (x[0] = -l[Za], w[0]), tf = (x[0] = jh, w[0]) | 0, Kf = We;
          h[Kf >> 2] = 0 | me;
          var Ce = We + 4;
          h[Ce >> 2] = tf;
        } else {
          do {
            if (yg) {
              var Bg = 0 <= V;
              a[c + 248] = Bg;
              var ne = c + 212;
              if (Bg) {
                var bg = sb, De = ne, td = bg;
                P = td >> 2;
                var oe = k[P], kd = bg + 4;
                H = kd >> 2;
                var Cg = k[H], ud = De;
                F = ud >> 2;
                h[F] = oe;
                Ed = De + 4;
                B = Ed >> 2;
                h[B] = Cg;
                var Md = c + 228, zc = Md;
                Y = zc >> 2;
                h[Y] = oe;
                bc = Md + 4;
                va = bc >> 2;
                h[va] = Cg;
                var cg = c + 236, Lf = -(w[0] = oe, x[0]), uf = cg, Dg = (x[0] = Lf, w[0]), vd = (x[0] = Ma, w[0]) | 0, Xe = uf;
                K = Xe >> 2;
                h[K] = 0 | Dg;
                var md = uf + 4;
                C = md >> 2;
                h[C] = vd;
                break a;
              } else {
                var kh = ne;
              }
            } else {
              a[c + 248] = 0, kh = c + 212;
            }
          } while (0);
          var pe = kh, de = (x[0] = -Lb, w[0]), Eg = (x[0] = Ma, w[0]) | 0, Sb = pe;
          ma = Sb >> 2;
          h[ma] = 0 | de;
          nc = pe + 4;
          N = nc >> 2;
          h[N] = Eg;
          var Mi = sb, Ni = c + 228, Ye = Mi;
          I = Ye >> 2;
          var Fg = h[I], dg = Mi + 4;
          y = dg >> 2;
          var Ph = h[y], ic = Ni;
          lb = ic >> 2;
          h[lb] = Fg;
          uc = Ni + 4;
          Ea = uc >> 2;
          h[Ea] = Ph;
          var Gg = -l[da + 48], Hg = c + 236, Oj = (x[0] = -l[da + 47], w[0]), Oi = (x[0] = Gg, w[0]) | 0, lh = Hg;
          h[lh >> 2] = 0 | Oj;
          var Qh = Hg + 4;
          h[Qh >> 2] = Oi;
        }
      } else {
        var mh = 0 <= V;
        if (Fb) {
          if ($b) {
            do {
              if (mh) {
                a[c + 248] = 1;
                var nh = c + 212;
              } else {
                var Td = 0 <= oc;
                a[c + 248] = Td;
                var eg = c + 212;
                if (Td) {
                  nh = eg;
                } else {
                  var fg = eg, Pj = (x[0] = -Lb, w[0]), Pi = (x[0] = Ma, w[0]), Rh = 0 | Pj, Mf = Pi | 0, zc = fg;
                  Y = zc >> 2;
                  h[Y] = Rh;
                  bc = fg + 4;
                  va = bc >> 2;
                  h[va] = Mf;
                  var oh = c + 228, hd = oh;
                  qa = hd >> 2;
                  h[qa] = Rh;
                  Sc = oh + 4;
                  Qa = Sc >> 2;
                  h[Qa] = Mf;
                  var Sh = sb, Ig = c + 236, ed = Sh;
                  L = ed >> 2;
                  var Nd = h[L], Zd = Sh + 4;
                  O = Zd >> 2;
                  var Qi = h[O], Qc = Ig;
                  Q = Qc >> 2;
                  h[Q] = Nd;
                  Rc = Ig + 4;
                  D = Rc >> 2;
                  h[D] = Qi;
                  break a;
                }
              }
            } while (0);
            var Th = sb, Jg = nh, Ob = Th;
            Da = Ob >> 2;
            var Uh = h[Da], Ac = Th + 4;
            ba = Ac >> 2;
            var Ri = h[ba], Mb = Jg;
            X = Mb >> 2;
            h[X] = Uh;
            Vb = Jg + 4;
            Z = Vb >> 2;
            h[Z] = Ri;
            var Ee = -l[Ra], Vh = c + 228, Kg = (x[0] = -l[Za], w[0]), Ze = (x[0] = Ee, w[0]) | 0, Bd = Vh;
            za = Bd >> 2;
            h[za] = 0 | Kg;
            bd = Vh + 4;
            na = bd >> 2;
            h[na] = Ze;
            var Le = c + 204, Si = c + 236, Lg = Le, Ti = h[Lg >> 2], ph = Le + 4, Ui = h[ph >> 2], Kf = Si;
            h[Kf >> 2] = Ti;
            Ce = Si + 4;
            h[Ce >> 2] = Ui;
          } else {
            do {
              if (mh) {
                var Fe = 0 <= oc;
                a[c + 248] = Fe;
                var Wh = c + 212;
                if (Fe) {
                  var vf = sb, Xh = Wh, td = vf;
                  P = td >> 2;
                  var qh = k[P], kd = vf + 4;
                  H = kd >> 2;
                  var Yh = k[H], ud = Xh;
                  F = ud >> 2;
                  h[F] = qh;
                  Ed = Xh + 4;
                  B = Ed >> 2;
                  h[B] = Yh;
                  var Vi = c + 228, Qj = -(w[0] = qh, x[0]), Zh = Vi, $h = (x[0] = Qj, w[0]), Rj = (x[0] = Ma, w[0]) | 0, ai = Zh;
                  h[ai >> 2] = 0 | $h;
                  var Mg = Zh + 4;
                  h[Mg >> 2] = Rj;
                  var wf = c + 236, Xe = wf;
                  K = Xe >> 2;
                  h[K] = qh;
                  md = wf + 4;
                  C = md >> 2;
                  h[C] = Yh;
                  break a;
                } else {
                  var bi = Wh;
                }
              } else {
                a[c + 248] = 0, bi = c + 212;
              }
            } while (0);
            var rh = bi, Wi = (x[0] = -Lb, w[0]), Sj = (x[0] = Ma, w[0]) | 0, Sb = rh;
            ma = Sb >> 2;
            h[ma] = 0 | Wi;
            nc = rh + 4;
            N = nc >> 2;
            h[N] = Sj;
            var $e = -l[da + 52], ci = c + 228, gg = (x[0] = -l[da + 51], w[0]), Ng = (x[0] = $e, w[0]) | 0, Lg = ci;
            h[Lg >> 2] = 0 | gg;
            ph = ci + 4;
            h[ph >> 2] = Ng;
            var hg = sb, di = c + 236, sh = h[hg >> 2], th = h[hg + 4 >> 2], lh = di;
            h[lh >> 2] = sh;
            Qh = di + 4;
            h[Qh >> 2] = th;
          }
        } else {
          a[c + 248] = mh;
          var ei = c + 212;
          if (mh) {
            var fi = sb, gi = ei, td = fi;
            P = td >> 2;
            var hi = k[P], kd = fi + 4;
            H = kd >> 2;
            var ig = h[H], ud = gi;
            F = ud >> 2;
            h[F] = hi;
            Ed = gi + 4;
            B = Ed >> 2;
            h[B] = ig;
            var Xi = c + 228, Tj = -(w[0] = hi, x[0]), ii = Xi, ji = (x[0] = Tj, w[0]), Yi = (x[0] = Ma, w[0]), Zi = 0 | ji, Uj = Yi | 0, ai = ii;
            h[ai >> 2] = Zi;
            Mg = ii + 4;
            h[Mg >> 2] = Uj;
            var ki = c + 236, Xe = ki;
            K = Xe >> 2;
            h[K] = Zi;
            md = ki + 4;
            C = md >> 2;
            h[C] = Uj;
          } else {
            var $i = ei, qe = (x[0] = -Lb, w[0]), Vj = (x[0] = Ma, w[0]) | 0, zc = $i;
            Y = zc >> 2;
            h[Y] = 0 | qe;
            bc = $i + 4;
            va = bc >> 2;
            h[va] = Vj;
            var aj = sb, li = c + 228, Fc = aj;
            T = Fc >> 2;
            var bj = h[T], mc = aj + 4;
            S = mc >> 2;
            var uh = h[S], be = li;
            M = be >> 2;
            h[M] = bj;
            Sd = li + 4;
            J = Sd >> 2;
            h[J] = uh;
            var Og = c + 236, Qc = Og;
            Q = Qc >> 2;
            h[Q] = bj;
            Rc = Og + 4;
            D = Rc >> 2;
            h[D] = uh;
          }
        }
      }
    }
  } while (0);
  E = f + 148 >> 2;
  var mi = h[E];
  A = c + 128 >> 2;
  h[A] = mi;
  var ni = 0 < h[E];
  a : do {
    if (ni) {
      for (var af = 0; ; ) {
        var oi = l[kb], vh = l[((af << 3) + 20 >> 2) + ga], xf = l[ab], yf = l[((af << 3) + 24 >> 2) + ga], cj = xf * vh + oi * yf + l[$a], dj = (af << 3) + c, jg = (x[0] = oi * vh - xf * yf + l[La], w[0]), ej = (x[0] = cj, w[0]) | 0, Qc = dj;
        Q = Qc >> 2;
        h[Q] = 0 | jg;
        Rc = dj + 4;
        D = Rc >> 2;
        h[D] = ej;
        var pi = l[kb], fj = l[((af << 3) + 84 >> 2) + ga], qi = l[ab], Me = l[((af << 3) + 88 >> 2) + ga], gj = qi * fj + pi * Me, kg = (af << 3) + c + 64, lg = (x[0] = pi * fj - qi * Me, w[0]), Wj = (x[0] = gj, w[0]) | 0;
        h[kg >> 2] = 0 | lg;
        h[kg + 4 >> 2] = Wj;
        var ri = af + 1;
        if (ri < h[E]) {
          af = ri;
        } else {
          break a;
        }
      }
    }
  } while (0);
  u = c + 244 >> 2;
  l[u] = .019999999552965164;
  var hj = d + 60;
  h[hj >> 2] = 0;
  var Xj = c + 248, Pg = h[A], Qg = 0 < Pg;
  a : do {
    if (Qg) {
      for (var Rg = l[da + 41], Yj = l[rb >> 2], wh = l[da + 53], si = l[da + 54], zf = 0, Nf = 3.4028234663852886e+38; ; ) {
        var xh = wh * (l[(zf << 3 >> 2) + da] - Rg) + si * (l[((zf << 3) + 4 >> 2) + da] - Yj), ti = xh < Nf ? xh : Nf, Uk = zf + 1;
        if (Uk == Pg) {
          var ij = ti;
          break a;
        } else {
          zf = Uk, Nf = ti;
        }
      }
    } else {
      ij = 3.4028234663852886e+38;
    }
  } while (0);
  var jj = l[u], kj = ij > jj;
  a : do {
    if (!kj) {
      for (var Vk = c + 216, Wk = l[Vk >> 2], kn = c + 212, Xk = l[kn >> 2], vp = c + 164, wp = c + 172, xp = c + 176, ln = c + 228, yp = c + 232, zp = c + 236, Yk = c + 240, Af = 0, ui = -3.4028234663852886e+38, Zj = 0, $j = -1, Sg = -3.4028234663852886e+38; ; ) {
        if (Af < Pg) {
          var lj = l[((Af << 3) + 64 >> 2) + da], vi = -lj, wi = -l[((Af << 3) + 68 >> 2) + da], Ne = l[(Af << 3 >> 2) + da], ak = l[((Af << 3) + 4 >> 2) + da], mn = (Ne - l[vp >> 2]) * vi + (ak - l[rb >> 2]) * wi, Zk = (Ne - l[wp >> 2]) * vi + (ak - l[xp >> 2]) * wi, yh = mn < Zk ? mn : Zk;
          if (yh > jj) {
            var bk = yh, Of = Af, xi = 2;
            ca = 79;
            break;
          }
          if (0 > lj * Wk + Xk * wi) {
            if (-.03490658849477768 <= (vi - l[ln >> 2]) * Xk + (wi - l[yp >> 2]) * Wk & yh > ui) {
              ca = 76;
            } else {
              var $k = ui, ck = Zj, dk = $j, mj = Sg;
              ca = 77;
            }
          } else {
            -.03490658849477768 <= (vi - l[zp >> 2]) * Xk + (wi - l[Yk >> 2]) * Wk & yh > ui ? ca = 76 : ($k = ui, ck = Zj, dk = $j, mj = Sg, ca = 77);
          }
          76 == ca && ($k = yh, ck = 2, dk = Af, mj = yh);
          Af += 1;
          ui = $k;
          Zj = ck;
          $j = dk;
          Sg = mj;
        } else {
          var al = Zj, nn = $j, Ap = Sg;
          0 == al ? ca = 81 : (bk = Ap, Of = nn, xi = al, ca = 79);
          break;
        }
      }
      do {
        if (79 == ca) {
          if (bk > jj) {
            break a;
          }
          if (bk > .9800000190734863 * ij + .0010000000474974513) {
            var bl = d + 56;
            if (1 == xi) {
              var cl = bl;
              ca = 83;
            } else {
              h[bl >> 2] = 2;
              var ek = bb, td = Ja;
              P = td >> 2;
              var dl = h[P], kd = Ja + 4;
              H = kd >> 2;
              var el = h[H], ud = ek;
              F = ud >> 2;
              h[F] = dl;
              Ed = ek + 4;
              B = Ed >> 2;
              h[B] = el;
              var nj = bb + 8, oj = nj;
              a[nj] = 0;
              var pj = Of & 255;
              a[oj + 1] = pj;
              a[oj + 2] = 0;
              a[oj + 3] = 1;
              var on = bb + 12, be = Xa;
              M = be >> 2;
              var fl = h[M], Sd = Xa + 4;
              J = Sd >> 2;
              var gl = h[J], Bd = on;
              za = Bd >> 2;
              h[za] = fl;
              bd = on + 4;
              na = bd >> 2;
              h[na] = gl;
              var hl = bb + 20, fk = hl;
              a[hl] = 0;
              a[fk + 1] = pj;
              a[fk + 2] = 0;
              a[fk + 3] = 1;
              var qj = Of + 1, pn = qj < h[A] ? qj : 0, il = (Of << 3) + c, qn = h[il >> 2], rn = h[il + 4 >> 2], jl = (pn << 3) + c, Bp = h[jl >> 2], Cp = h[jl + 4 >> 2], rj = (Of << 3) + c + 64, gk = h[rj >> 2], hk = h[rj + 4 >> 2], ik = pn & 255, jk = (w[0] = dl, x[0]), kk = (w[0] = el, x[0]), kl = (w[0] = fl, x[0]), ll = (w[0] = gl, x[0]), zh = Of, sj = ik, yi = qn, zi = rn, ml = Bp, nl = Cp, lk = gk, Ai = hk, tj = kl, mk = jk, ol = ll, nk = kk, ok = pj, Bi = 0;
              ca = 90;
            }
          } else {
            ca = 81;
          }
        }
      } while (0);
      81 == ca && (cl = d + 56, ca = 83);
      if (83 == ca) {
        h[cl >> 2] = 1;
        var uj = h[A], pl = 1 < uj;
        b : do {
          if (pl) {
            for (var sn = l[Vk >> 2], pk = l[kn >> 2], qk = 0, vj = pk * l[da + 16] + sn * l[da + 17], Ah = 1; ; ) {
              var tn = pk * l[((Ah << 3) + 64 >> 2) + da] + sn * l[((Ah << 3) + 68 >> 2) + da], ql = tn < vj, rl = ql ? Ah : qk, sl = ql ? tn : vj, tl = Ah + 1;
              if (tl < uj) {
                qk = rl, vj = sl, Ah = tl;
              } else {
                var wj = rl;
                break b;
              }
            }
          } else {
            wj = 0;
          }
        } while (0);
        var ul = wj + 1, vl = ul < uj ? ul : 0, wl = (wj << 3) + c, xl = bb, Mb = wl;
        X = Mb >> 2;
        var yl = h[X], Vb = wl + 4;
        Z = Vb >> 2;
        var zl = h[Z];
        h[xl >> 2] = yl;
        h[xl + 4 >> 2] = zl;
        var Al = bb + 8, rk = Al;
        a[Al] = 0;
        var Bl = wj & 255;
        a[rk + 1] = Bl;
        a[rk + 2] = 1;
        a[rk + 3] = 0;
        var xj = (vl << 3) + c, yj = bb + 12, Cl = h[xj >> 2], Dl = h[xj + 4 >> 2];
        h[yj >> 2] = Cl;
        h[yj + 4 >> 2] = Dl;
        var El = bb + 20, sk = El;
        a[El] = 0;
        a[sk + 1] = vl & 255;
        a[sk + 2] = 1;
        a[sk + 3] = 0;
        var un = 0 == (a[Xj] & 1), vn = (w[0] = yl, x[0]), wn = (w[0] = zl, x[0]), xn = (w[0] = Cl, x[0]), yn = (w[0] = Dl, x[0]);
        if (un) {
          var tk = Xa, uk = Xa + 4, zn = h[tk >> 2], An = h[uk >> 2], zj = Ja, Fl = Ja + 4, Dp = h[zj >> 2], Ep = h[Fl >> 2], Fp = -l[Ra], Bh = (x[0] = -l[Za], w[0]), Ch = (x[0] = Fp, w[0]), zh = 1, sj = 0, yi = zn, zi = An, ml = Dp, nl = Ep, lk = Bh, Ai = Ch;
        } else {
          var tk = Ja, uk = Ja + 4, zj = Xa, Fl = Xa + 4, Gl = sb, zh = 0, sj = 1, yi = h[tk >> 2], zi = h[uk >> 2], ml = h[zj >> 2], nl = h[Fl >> 2], lk = h[Gl >> 2], Ai = h[Gl + 4 >> 2];
        }
        tj = xn;
        mk = vn;
        ol = yn;
        nk = wn;
        ok = Bl;
        Bi = 1;
      }
      var vk = (w[0] = yi, x[0]), Hl = (w[0] = zi, x[0]), wk = (w[0] = nl, x[0]), Tg = (w[0] = lk, x[0]), Dh = (w[0] = Ai, x[0]), Il = -Tg, Bn = Dh * vk + Hl * Il, Gp = Tg * wk, Eh = (w[0] = ml, x[0]), Ci = -Dh, Jl = Eh * Ci + Gp, Aj = Dh * mk + nk * Il - Bn, Kl = bb + 12, xk = Dh * tj + ol * Il - Bn;
      if (0 < Aj) {
        var Di = 0;
      } else {
        s = ha >> 2, r = bb >> 2, h[s] = h[r], h[s + 1] = h[r + 1], h[s + 2] = h[r + 2], Di = 1;
      }
      if (0 < xk) {
        var Ei = Di;
      } else {
        p = ha + 12 * Di >> 2, q = Kl >> 2, h[p] = h[q], h[p + 1] = h[q + 1], h[p + 2] = h[q + 2], Ei = Di + 1;
      }
      if (0 > Aj * xk) {
        var yk = Aj / (Aj - xk), Cn = nk + (ol - nk) * yk, Ll = ha + 12 * Ei, Hp = (x[0] = mk + (tj - mk) * yk, w[0]), Ip = (x[0] = Cn, w[0]) | 0, Ye = Ll;
        I = Ye >> 2;
        h[I] = 0 | Hp;
        dg = Ll + 4;
        y = dg >> 2;
        h[y] = Ip;
        var zk = ha + 12 * Ei + 8, Bj = zk;
        a[zk] = zh & 255;
        a[Bj + 1] = ok;
        a[Bj + 2] = 0;
        a[Bj + 3] = 1;
        var Dn = Ei + 1;
      } else {
        Dn = Ei;
      }
      if (2 <= Dn) {
        var Ak = l[pb], Bk = l[pb + 1], Ck = Ak * Ci + Tg * Bk - Jl, En = ha + 12, Fn = l[En >> 2], Gn = l[pb + 4], Dk = Fn * Ci + Tg * Gn - Jl;
        if (0 < Ck) {
          var Ek = 0;
        } else {
          o = ta >> 2, n = ha >> 2, h[o] = h[n], h[o + 1] = h[n + 1], h[o + 2] = h[n + 2], Ek = 1;
        }
        if (0 < Dk) {
          var Cj = Ek;
        } else {
          m = ta + 12 * Ek >> 2, j = En >> 2, h[m] = h[j], h[m + 1] = h[j + 1], h[m + 2] = h[j + 2], Cj = Ek + 1;
        }
        if (0 > Ck * Dk) {
          var Ml = Ck / (Ck - Dk), Jp = Bk + (Gn - Bk) * Ml, Nl = ta + 12 * Cj, Kp = (x[0] = Ak + (Fn - Ak) * Ml, w[0]), Fi = (x[0] = Jp, w[0]) | 0, Ye = Nl;
          I = Ye >> 2;
          h[I] = 0 | Kp;
          dg = Nl + 4;
          y = dg >> 2;
          h[y] = Fi;
          var Hn = ta + 12 * Cj + 8, Dj = Hn;
          a[Hn] = sj;
          a[Dj + 1] = a[ha + 9];
          a[Dj + 2] = 0;
          a[Dj + 3] = 1;
          var In = Cj + 1;
        } else {
          In = Cj;
        }
        if (2 <= In) {
          var Fh = d + 40;
          if (Bi) {
            var Ol = Fh;
            h[Ol >> 2] = 0 | lk;
            h[Ol + 4 >> 2] = Ai | 0;
            var Pl = d + 48, be = Pl;
            M = be >> 2;
            h[M] = 0 | yi;
            Sd = Pl + 4;
            J = Sd >> 2;
            h[J] = zi | 0;
          } else {
            var Ql = (zh << 3) + f + 84, Ej = Fh, Ob = Ql;
            Da = Ob >> 2;
            var Rl = h[Da], Ac = Ql + 4;
            ba = Ac >> 2;
            var Gh = h[ba], Mb = Ej;
            X = Mb >> 2;
            h[X] = Rl;
            Vb = Ej + 4;
            Z = Vb >> 2;
            h[Z] = Gh;
            var Jn = (zh << 3) + f + 20, Fj = d + 48, Ic = Jn;
            Fa = Ic >> 2;
            var Lp = h[Fa], Pc = Jn + 4;
            $ = Pc >> 2;
            var Kn = h[$], Fc = Fj;
            T = Fc >> 2;
            h[T] = Lp;
            mc = Fj + 4;
            S = mc >> 2;
            h[S] = Kn;
          }
          var Sl = l[fb], Tl = l[fb + 1], Ul = l[u];
          if (Tg * (Sl - vk) + Dh * (Tl - Hl) > Ul) {
            var Ug = 0, Vl = Ul;
          } else {
            if (Bi) {
              var Wl = Sl - l[La], Fk = Tl - l[$a], Xl = l[kb], Yl = l[ab], Ln = Wl * -Yl + Xl * Fk, Zl = d, Mn = (x[0] = Xl * Wl + Yl * Fk, w[0]), Mp = (x[0] = Ln, w[0]) | 0, ic = Zl;
              lb = ic >> 2;
              h[lb] = 0 | Mn;
              uc = Zl + 4;
              Ea = uc >> 2;
              h[Ea] = Mp;
              h[d + 16 >> 2] = h[fb + 2];
            } else {
              var Gk = ta, $l = d, td = Gk;
              P = td >> 2;
              var Nn = h[P], kd = Gk + 4;
              H = kd >> 2;
              var On = h[H], ud = $l;
              F = ud >> 2;
              h[F] = Nn;
              Ed = $l + 4;
              B = Ed >> 2;
              h[B] = On;
              var Pn = ta + 8, am = Pn, Qn = d + 16, bm = Qn;
              a[bm + 2] = a[am + 3];
              a[bm + 3] = a[am + 2];
              a[Qn] = a[am + 1];
              a[bm + 1] = a[Pn];
            }
            Ug = 1;
            Vl = l[u];
          }
          var cm = ta + 12, Oe = l[cm >> 2], Rn = l[fb + 4];
          if (Tg * (Oe - vk) + Dh * (Rn - Hl) > Vl) {
            var dm = Ug;
          } else {
            var Hk = d + 20 * Ug;
            if (Bi) {
              var Ik = Oe - l[La], em = Rn - l[$a], fm = l[kb], Sn = l[ab], Np = Ik * -Sn + fm * em, Tn = Hk, Op = (x[0] = fm * Ik + Sn * em, w[0]), Pp = (x[0] = Np, w[0]) | 0, ic = Tn;
              lb = ic >> 2;
              h[lb] = 0 | Op;
              uc = Tn + 4;
              Ea = uc >> 2;
              h[Ea] = Pp;
              h[(d + 16 >> 2) + (5 * Ug | 0)] = h[fb + 5];
            } else {
              var Un = cm, gm = Hk, td = Un;
              P = td >> 2;
              var Qp = h[P], kd = Un + 4;
              H = kd >> 2;
              var hm = h[H], ud = gm;
              F = ud >> 2;
              h[F] = Qp;
              Ed = gm + 4;
              B = Ed >> 2;
              h[B] = hm;
              var im = ta + 20, Jk = im, Vn = d + 20 * Ug + 16, jm = Vn;
              a[jm + 2] = a[Jk + 3];
              a[jm + 3] = a[Jk + 2];
              a[Vn] = a[Jk + 1];
              a[jm + 1] = a[im];
            }
            dm = Ug + 1;
          }
          h[hj >> 2] = dm;
        }
      }
    }
  } while (0);
  Qf = bb;
}

function sp(c, d, e, g, f) {
  var i = d >> 2, j = h[i + 37], m = l[f + 12 >> 2], n = l[g + 12 >> 2], o = l[f + 8 >> 2], q = l[g + 16 >> 2], p = l[e + 12 >> 2], r = l[i + 3], s = l[e + 8 >> 2], u = l[i + 4], A = m * n - o * q + l[f >> 2] - (p * r - s * u + l[e >> 2]), n = o * n + m * q + l[f + 4 >> 2] - (s * r + p * u + l[e + 4 >> 2]), m = p * A + s * n, p = A * -s + p * n, s = 0 < j;
  a : do {
    if (s) {
      A = 0;
      n = -3.4028234663852886e+38;
      for (o = 0; ; ) {
        if (q = l[((o << 3) + 84 >> 2) + i] * m + l[((o << 3) + 88 >> 2) + i] * p, A = (r = q > n) ? o : A, n = r ? q : n, o += 1, o == j) {
          var E = A;
          break a;
        }
      }
    } else {
      E = 0;
    }
  } while (0);
  i = tp(d, e, E, g, f);
  m = (0 < E ? E : j) - 1;
  p = tp(d, e, m, g, f);
  s = E + 1;
  s = s < j ? s : 0;
  A = tp(d, e, s, g, f);
  n = p > i & p > A;
  a : do {
    if (n) {
      o = p;
      for (q = m; ; ) {
        if (r = (0 < q ? q : j) - 1, u = tp(d, e, r, g, f), u > o) {
          o = u, q = r;
        } else {
          var y = o, I = q;
          break a;
        }
      }
    } else {
      if (A > i) {
        o = A;
        for (q = s; ; ) {
          if (r = q + 1, r = r < j ? r : 0, u = tp(d, e, r, g, f), u > o) {
            o = u, q = r;
          } else {
            y = o;
            I = q;
            break a;
          }
        }
      } else {
        y = i, I = E;
      }
    }
  } while (0);
  h[c >> 2] = I;
  return y;
}

function tp(c, d, e, g, f) {
  var g = g >> 2, i = c >> 2, j = h[g + 37];
  2 == (-1 < e ? h[i + 37] > e ? 3 : 2 : 2) && G(z.Ga, 32, z.ib, z.ta);
  var c = l[d + 12 >> 2], m = l[((e << 3) + 84 >> 2) + i], n = l[d + 8 >> 2], o = l[((e << 3) + 88 >> 2) + i], q = c * m - n * o, m = n * m + c * o, o = l[f + 12 >> 2], p = l[f + 8 >> 2], r = o * q + p * m, s = q * -p + o * m, u = 0 < j;
  a : do {
    if (u) {
      for (var A = 0, E = 3.4028234663852886e+38, y = 0; ; ) {
        var I = l[((y << 3) + 20 >> 2) + g] * r + l[((y << 3) + 24 >> 2) + g] * s, C = I < E, A = C ? y : A, E = C ? I : E, y = y + 1;
        if (y == j) {
          var K = A;
          break a;
        }
      }
    } else {
      K = 0;
    }
  } while (0);
  j = l[((e << 3) + 20 >> 2) + i];
  e = l[((e << 3) + 24 >> 2) + i];
  i = l[((K << 3) + 20 >> 2) + g];
  K = l[((K << 3) + 24 >> 2) + g];
  return (o * i - p * K + l[f >> 2] - (c * j - n * e + l[d >> 2])) * q + (p * i + o * K + l[f + 4 >> 2] - (n * j + c * e + l[d + 4 >> 2])) * m;
}

function up(c, d, e) {
  var g = d >> 2, f = c >> 2, i, j = h[g + 1];
  if (0 == j) {
    h[f + 4] = d + 12, h[f + 5] = 1, l[f + 6] = l[g + 2];
  } else {
    if (2 == j) {
      h[f + 4] = d + 20, h[f + 5] = h[g + 37], l[f + 6] = l[g + 2];
    } else {
      if (3 == j) {
        j = d + 16;
        i = -1 < e ? h[j >> 2] > e ? 6 : 5 : 5;
        5 == i && G(z.g, 53, z.aa, z.Db);
        d += 12;
        i = (e << 3) + h[d >> 2];
        var m = h[i + 4 >> 2];
        h[c >> 2] = h[i >> 2];
        h[c + 4 >> 2] = m;
        i = e + 1;
        e = c + 8;
        d = h[d >> 2];
        i < h[j >> 2] ? (d = (i << 3) + d, j = h[d >> 2], d = h[d + 4 >> 2], h[e >> 2] = j, h[e + 4 >> 2] = d) : (j = h[d + 4 >> 2], h[e >> 2] = h[d >> 2], h[e + 4 >> 2] = j);
        h[f + 4] = c;
        h[f + 5] = 2;
        l[f + 6] = l[g + 2];
      } else {
        1 == j ? (h[f + 4] = d + 12, h[f + 5] = 2, l[f + 6] = l[g + 2]) : G(z.g, 81, z.aa, z.f);
      }
    }
  }
}

function Rp(c, d, e) {
  var g, f, i, j, m, n, o, q, p, r, s, u, A, E, y, I, C, K, J, M, B, F, H, P, D, Q = e >> 2, O = Qf;
  Qf += 136;
  var L;
  D = O >> 2;
  var jb = O + 112, U = O + 124;
  h[Sp >> 2] += 1;
  var N = l[Q + 14], ma = l[Q + 15], na = l[Q + 16], za = l[Q + 17], S = l[Q + 18], T = l[Q + 19], $ = l[Q + 20], Fa = l[Q + 21];
  P = d + 4 >> 1;
  var Z = Jh[P];
  if (4 > Z) {
    var X = Z;
  } else {
    G(z.g, 102, z.ub, z.pc), X = b[P];
  }
  var ba = X;
  H = O + 108 >> 2;
  h[H] = ba;
  F = O >> 2;
  var Da = 0 == X;
  a : do {
    if (Da) {
      var Ea = ba;
    } else {
      for (var lb = e + 20, Qa = e + 16, qa = e + 48, va = e + 44, Y = 0; ; ) {
        var Ga = O + 36 * Y, wa = Hh[d + (Y + 6)];
        h[F + (9 * Y | 0) + 7] = wa;
        var Ra = Hh[d + (Y + 9)], Za = O + 36 * Y + 32;
        h[Za >> 2] = Ra;
        if (h[lb >> 2] > wa) {
          var $a = Ra;
        } else {
          G(z.b, 103, z.a, z.c), $a = h[Za >> 2];
        }
        var La = (wa << 3) + h[Qa >> 2], ab = h[La + 4 >> 2], kb = (w[0] = h[La >> 2], x[0]), fb = (w[0] = ab, x[0]);
        L = -1 < $a ? h[qa >> 2] > $a ? 9 : 8 : 8;
        8 == L && G(z.b, 103, z.a, z.c);
        var pb = ($a << 3) + h[va >> 2], ga = pb;
        B = ga >> 2;
        var da = pb + 4;
        M = da >> 2;
        var bb = h[M], ca = (w[0] = h[B], x[0]), ha = (w[0] = bb, x[0]), ta = za * kb - na * fb + N, ua = na * kb + za * fb + ma, oa = Ga, ka = (x[0] = ta, w[0]), xa = (x[0] = ua, w[0]) | 0, Ua = oa;
        h[Ua >> 2] = 0 | ka;
        var la = oa + 4;
        h[la >> 2] = xa;
        var Sa = Fa * ca - $ * ha + S, cb = $ * ca + Fa * ha + T, qb = O + 36 * Y + 8, xb = (x[0] = Sa, w[0]), Pb = (x[0] = cb, w[0]) | 0, Na = qb;
        h[Na >> 2] = 0 | xb;
        var Ha = qb + 4;
        h[Ha >> 2] = Pb;
        var pa = l[F + (9 * Y | 0) + 3] - l[F + (9 * Y | 0) + 1], Ia = O + 36 * Y + 16, Oa = (x[0] = Sa - ta, w[0]), Pa = (x[0] = pa, w[0]) | 0;
        h[Ia >> 2] = 0 | Oa;
        h[Ia + 4 >> 2] = Pa;
        l[F + (9 * Y | 0) + 6] = 0;
        var Aa = Y + 1, ia = h[H];
        if (Aa < ia) {
          Y = Aa;
        } else {
          Ea = ia;
          break a;
        }
      }
    }
  } while (0);
  var Va = 1 < Ea;
  a : do {
    if (Va) {
      var ra = l[d >> 2];
      if (0 == Ea) {
        G(z.g, 246, z.H, z.f);
        var Ka = 0;
      } else {
        if (1 == Ea) {
          Ka = 0;
        } else {
          if (2 == Ea) {
            var db = l[D + 4] - l[D + 13], ub = l[D + 5] - l[D + 14], Ka = bn(db * db + ub * ub);
          } else {
            if (3 == Ea) {
              var vb = l[D + 4], mb = l[D + 5], Ka = (l[D + 13] - vb) * (l[D + 23] - mb) - (l[D + 14] - mb) * (l[D + 22] - vb);
            } else {
              G(z.g, 259, z.H, z.f), Ka = 0;
            }
          }
        }
      }
      var gb = Ka < .5 * ra;
      do {
        if (!gb && !(2 * ra < Ka | 1.1920928955078125e-7 > Ka)) {
          var nb = h[H];
          L = 20;
          break a;
        }
      } while (0);
      h[H] = 0;
      L = 21;
    } else {
      nb = Ea, L = 20;
    }
  } while (0);
  if (20 == L) {
    if (0 == nb) {
      L = 21;
    } else {
      var Wa = nb;
      0 == Wa ? G(z.g, 194, z.G, z.f) : 1 == Wa || 2 == Wa || 3 == Wa || G(z.g, 207, z.G, z.f);
      L = 29;
    }
  }
  if (21 == L) {
    h[D + 7] = 0;
    h[D + 8] = 0;
    0 < h[Q + 5] || G(z.b, 103, z.a, z.c);
    var ea = h[Q + 4], ga = ea;
    B = ga >> 2;
    da = ea + 4;
    M = da >> 2;
    var Ja = h[M], Ba = (w[0] = h[B], x[0]), Ta = (w[0] = Ja, x[0]);
    0 < h[Q + 12] || G(z.b, 103, z.a, z.c);
    var yb = h[Q + 11], ga = yb;
    B = ga >> 2;
    da = yb + 4;
    M = da >> 2;
    var Xa = h[M], eb = (w[0] = h[B], x[0]), Eb = (w[0] = Xa, x[0]), zb = za * Ba - na * Ta + N, Nb = na * Ba + za * Ta + ma, Qb = (x[0] = zb, w[0]), Bb = (x[0] = Nb, w[0]), Ib = 0 | Qb, Jb = Bb | 0, Ua = O;
    h[Ua >> 2] = Ib;
    la = O + 4;
    h[la >> 2] = Jb;
    var wb = Fa * eb - $ * Eb + S, Fb = $ * eb + Fa * Eb + T, Gb = O + 8, ob = (x[0] = wb, w[0]), Kb = (x[0] = Fb, w[0]), hb = 0 | ob, rb = Kb | 0, Na = Gb;
    h[Na >> 2] = hb;
    Ha = Gb + 4;
    h[Ha >> 2] = rb;
    var W = Fb - Nb, ja = O + 16, Ca = (x[0] = wb - zb, w[0]), Ub = (x[0] = W, w[0]) | 0;
    h[ja >> 2] = 0 | Ca;
    h[ja + 4 >> 2] = Ub;
    h[H] = 1;
  }
  var Ab = e + 16, Cb = e + 20, Xb = e + 44, dc = e + 48;
  J = O + 16 >> 2;
  K = O + 20 >> 2;
  C = O + 52 >> 2;
  I = O + 56 >> 2;
  var Ma = O + 16, Lb = O + 52;
  y = O + 24 >> 2;
  E = O + 60 >> 2;
  A = O >> 2;
  u = O + 36 >> 2;
  var fa = -$, sb = O + 88;
  s = O + 96 >> 2;
  r = O + 72 >> 2;
  var tb = 0;
  a : for (;;) {
    if (20 <= tb) {
      var V = tb;
      break;
    }
    var Yb = k[H], gc = 0 < Yb;
    b : do {
      if (gc) {
        for (var Rb = 0; ; ) {
          h[jb + (Rb << 2) >> 2] = h[F + (9 * Rb | 0) + 7];
          h[U + (Rb << 2) >> 2] = h[F + (9 * Rb | 0) + 8];
          var cc = Rb + 1;
          if (cc == Yb) {
            break b;
          } else {
            Rb = cc;
          }
        }
      } else {
        L = 33;
      }
    } while (0);
    do {
      if (1 == Yb) {
        L = 55;
      } else {
        if (2 == Yb) {
          var Zb = Ma, wc = Ma + 4, Xc = h[wc >> 2], kc = (w[0] = h[Zb >> 2], x[0]), rc = (w[0] = Xc, x[0]), ec = Lb, sc = Lb + 4, Mc = h[sc >> 2], Db = (w[0] = h[ec >> 2], x[0]), Ya = (w[0] = Mc, x[0]), Wb = Db - kc, lc = Ya - rc, Ec = kc * Wb + rc * lc, Nc = -Ec;
          if (0 > Ec) {
            var oc = Db * Wb + Ya * lc;
            if (0 < oc) {
              var $b = 1 / (oc - Ec);
              l[y] = oc * $b;
              l[E] = $b * Nc;
              h[H] = 2;
              var od = Db, Yc = kc;
              L = 60;
            } else {
              l[E] = 1;
              h[H] = 1;
              for (var Hb = u, ac = A, hc = Hb + 9; Hb < hc; Hb++, ac++) {
                h[ac] = h[Hb];
              }
              L = 57;
            }
          } else {
            l[y] = 1;
            h[H] = 1;
            var yc = kc;
            L = 59;
          }
        } else {
          if (3 == Yb) {
            var Zb = Ma, wc = Ma + 4, Zc = h[wc >> 2], tc = (w[0] = h[Zb >> 2], x[0]), Oc = (w[0] = Zc, x[0]), ec = Lb, sc = Lb + 4, zc = h[sc >> 2], bc = (w[0] = h[ec >> 2], x[0]), pc = (w[0] = zc, x[0]), hd = sb, Sc = sb + 4, xd = h[Sc >> 2], ic = (w[0] = h[hd >> 2], x[0]), uc = (w[0] = xd, x[0]), Pd = bc - tc, yd = pc - Oc, Ob = tc * Pd + Oc * yd, zd = bc * Pd + pc * yd, Ac = -Ob, fc = ic - tc, Mb = uc - Oc, Vb = tc * fc + Oc * Mb, Tc = ic * fc + uc * Mb, $c = -Vb, Ic = ic - bc, fe = uc - pc, Pc = bc * Ic + pc * fe, Wd = ic * Ic + uc * fe, Fc = -Pc, mc = Pd * Mb - yd * fc, Jc = mc * (bc * uc - pc * ic), Ad = mc * (ic * Oc - uc * tc), Bd = mc * (tc * pc - Oc * bc);
            if (0 > Ob | 0 > Vb) {
              if (0 <= Ob | 0 >= zd | 0 < Bd) {
                if (0 <= Vb | 0 >= Tc | 0 < Ad) {
                  if (0 < zd | 0 > Pc) {
                    if (0 < Tc | 0 < Wd) {
                      if (0 <= Pc | 0 >= Wd | 0 < Jc) {
                        var ad = 1 / (Jc + Ad + Bd);
                        l[y] = Jc * ad;
                        l[E] = Ad * ad;
                        l[s] = Bd * ad;
                        h[H] = 3;
                        V = tb;
                        break a;
                      } else {
                        var bd = 1 / (Wd - Pc);
                        l[E] = Wd * bd;
                        l[s] = bd * Fc;
                        h[H] = 2;
                        Hb = r;
                        ac = A;
                        for (hc = Hb + 9; Hb < hc; Hb++, ac++) {
                          h[ac] = h[Hb];
                        }
                        L = 58;
                      }
                    } else {
                      l[s] = 1;
                      h[H] = 1;
                      Hb = r;
                      ac = A;
                      for (hc = Hb + 9; Hb < hc; Hb++, ac++) {
                        h[ac] = h[Hb];
                      }
                      L = 57;
                    }
                  } else {
                    l[E] = 1;
                    h[H] = 1;
                    Hb = u;
                    ac = A;
                    for (hc = Hb + 9; Hb < hc; Hb++, ac++) {
                      h[ac] = h[Hb];
                    }
                    L = 57;
                  }
                } else {
                  var pd = 1 / (Tc - Vb);
                  l[y] = Tc * pd;
                  l[s] = pd * $c;
                  h[H] = 2;
                  Hb = r;
                  ac = u;
                  for (hc = Hb + 9; Hb < hc; Hb++, ac++) {
                    h[ac] = h[Hb];
                  }
                  L = 58;
                }
              } else {
                var Qd = 1 / (zd - Ob);
                l[y] = zd * Qd;
                l[E] = Qd * Ac;
                h[H] = 2;
                od = bc;
                Yc = tc;
                L = 60;
              }
            } else {
              l[y] = 1, h[H] = 1, yc = tc, L = 59;
            }
          } else {
            G(z.g, 498, z.fb, z.f);
            var Hd = h[H];
            if (3 == Hd) {
              V = tb;
              break a;
            } else {
              if (0 == Hd) {
                G(z.g, 194, z.G, z.f), L = 55;
              } else {
                if (1 == Hd || 2 == Hd) {
                  var cd = Hd;
                  L = 56;
                } else {
                  G(z.g, 207, z.G, z.f), L = 55;
                }
              }
            }
          }
        }
      }
    } while (0);
    55 == L && (cd = h[H], L = 56);
    if (56 == L) {
      if (1 == cd) {
        L = 57;
      } else {
        if (2 == cd) {
          L = 58;
        } else {
          G(z.g, 184, z.zb, z.f);
          var Uc = 0, jc = 0;
          L = 64;
        }
      }
    }
    57 == L ? (yc = l[J], L = 59) : 58 == L && (od = l[C], Yc = l[J], L = 60);
    if (59 == L) {
      Uc = -yc, jc = -l[K];
    } else {
      if (60 == L) {
        var Vc = od - Yc, Bc = l[K], id = l[I] - Bc;
        0 < Vc * -Bc - id * -Yc ? (Uc = -1 * id, jc = Vc) : (Uc = id, jc = -1 * Vc);
      }
    }
    if (1.4210854715202004e-14 > Uc * Uc + jc * jc) {
      V = tb;
      break;
    }
    var Sb = k[H], nc = O + 36 * Sb, ge = -jc, Id = za * -Uc + na * ge, qd = Uc * na + za * ge, Rd = h[Ab >> 2];
    p = Rd >> 2;
    var rd = h[Cb >> 2], Jd = 1 < rd;
    do {
      if (Jd) {
        for (var Cd = 0, Dd = l[p] * Id + l[p + 1] * qd, dd = 1; ; ) {
          var sd = l[(dd << 3 >> 2) + p] * Id + l[((dd << 3) + 4 >> 2) + p] * qd, Wc = sd > Dd, Kd = Wc ? dd : Cd, Xd = Wc ? sd : Dd, Yd = dd + 1;
          if (Yd == rd) {
            break;
          } else {
            Cd = Kd, Dd = Xd, dd = Yd;
          }
        }
        var he = O + 36 * Sb + 28;
        h[he >> 2] = Kd;
        var xe = nc;
        if (-1 < Kd) {
          var Ge = Kd, ie = he, Ld = xe;
          L = 70;
        } else {
          var ed = Kd, je = he, Zd = xe;
          L = 71;
        }
      } else {
        var jd = O + 36 * Sb + 28, Ge = h[jd >> 2] = 0, ie = jd, Ld = nc;
        L = 70;
      }
    } while (0);
    if (70 == L) {
      if (rd > Ge) {
        var Qc = Ge, Rc = ie, ye = Ld, $d = Rd;
        L = 72;
      } else {
        ed = Ge, je = ie, Zd = Ld, L = 71;
      }
    }
    71 == L && (G(z.b, 103, z.a, z.c), Qc = ed, Rc = je, ye = Zd, $d = h[Ab >> 2]);
    var Qe = l[$d + (Qc << 3) >> 2], Re = l[$d + (Qc << 3) + 4 >> 2], Bf = na * Qe + za * Re + ma, kf = nc, Rf = (x[0] = za * Qe - na * Re + N, w[0]), ah = (x[0] = Bf, w[0]) | 0, Se = kf;
    q = Se >> 2;
    h[q] = 0 | Rf;
    var He = kf + 4;
    o = He >> 2;
    h[o] = ah;
    var lf = Fa * Uc + $ * jc, ke = Uc * fa + Fa * jc, mf = h[Xb >> 2];
    n = mf >> 2;
    var Ie = h[dc >> 2], Lh = 1 < Ie;
    do {
      if (Lh) {
        for (var Mh = 0, nf = l[n] * lf + l[n + 1] * ke, Te = 1; ; ) {
          var Cf = l[(Te << 3 >> 2) + n] * lf + l[((Te << 3) + 4 >> 2) + n] * ke, bh = Cf > nf, Je = bh ? Te : Mh, Nh = bh ? Cf : nf, rg = Te + 1;
          if (rg == Ie) {
            break;
          } else {
            Mh = Je, nf = Nh, Te = rg;
          }
        }
        var Sf = O + 36 * Sb + 32;
        h[Sf >> 2] = Je;
        var ch = O + 36 * Sb + 8;
        if (-1 < Je) {
          var Ue = Je, sg = Sf, tg = ch;
          L = 77;
        } else {
          var Oh = Je, dh = Sf, of = ch;
          L = 78;
        }
      } else {
        var ug = O + 36 * Sb + 32, Ue = h[ug >> 2] = 0, sg = ug, tg = O + 36 * Sb + 8;
        L = 77;
      }
    } while (0);
    if (77 == L) {
      if (Ie > Ue) {
        var Df = Ue, vg = sg, wg = tg, td = mf;
        L = 79;
      } else {
        Oh = Ue, dh = sg, of = tg, L = 78;
      }
    }
    78 == L && (G(z.b, 103, z.a, z.c), Df = Oh, vg = dh, wg = of, td = h[Xb >> 2]);
    var pf = l[td + (Df << 3) >> 2], kd = l[td + (Df << 3) + 4 >> 2], Ef = Fa * pf - $ * kd + S, ud = $ * pf + Fa * kd + T, Ed = wg, Ff = (x[0] = Ef, w[0]), ae = (x[0] = ud, w[0]) | 0, Se = Ed;
    q = Se >> 2;
    h[q] = 0 | Ff;
    He = Ed + 4;
    o = He >> 2;
    h[o] = ae;
    var Tf = ud - l[ye + 4 >> 2], eh = O + 36 * Sb + 16, fh = (x[0] = Ef - l[ye >> 2], w[0]), gh = (x[0] = Tf, w[0]) | 0;
    h[eh >> 2] = 0 | fh;
    h[eh + 4 >> 2] = gh;
    var xg = tb + 1;
    h[Tp >> 2] += 1;
    for (var Gf = 0; Gf < Yb; ) {
      if (h[Rc >> 2] == h[jb + (Gf << 2) >> 2] && h[vg >> 2] == h[U + (Gf << 2) >> 2]) {
        V = xg;
        break a;
      }
      Gf += 1;
    }
    h[H] += 1;
    tb = xg;
  }
  var Hf = h[Up >> 2];
  h[Up >> 2] = Hf > V ? Hf : V;
  var Fd = c + 8, ld = h[H];
  if (0 == ld) {
    G(z.g, 217, z.pa, z.f);
  } else {
    if (1 == ld) {
      var xc = h[O + 4 >> 2];
      h[c >> 2] = h[O >> 2];
      h[c + 4 >> 2] = xc;
      var hh = O + 8, yg = h[hh + 4 >> 2];
      h[Fd >> 2] = h[hh >> 2];
      h[Fd + 4 >> 2] = yg;
    } else {
      if (2 == ld) {
        var Ve = l[y], ze = l[E], qf = l[D + 1] * Ve + l[D + 10] * ze, Uf = (x[0] = l[D] * Ve + l[D + 9] * ze, w[0]), le = (x[0] = qf, w[0]) | 0, Se = c;
        q = Se >> 2;
        h[q] = 0 | Uf;
        He = c + 4;
        o = He >> 2;
        h[o] = le;
        var If = l[D + 3] * Ve + l[D + 12] * ze, ih = (x[0] = l[D + 2] * Ve + l[D + 11] * ze, w[0]), Vf = (x[0] = If, w[0]) | 0;
        h[Fd >> 2] = 0 | ih;
        h[Fd + 4 >> 2] = Vf;
      } else {
        if (3 == ld) {
          var Cc = l[y], Ae = l[E], Jf = l[s], be = l[D + 1] * Cc + l[D + 10] * Ae + l[D + 19] * Jf, Sd = (x[0] = l[D] * Cc + l[D + 9] * Ae + l[D + 18] * Jf, w[0]), Wf = (x[0] = be, w[0]), zg = 0 | Sd, Xf = Wf | 0;
          h[c >> 2] = zg;
          h[c + 4 >> 2] = Xf;
          h[Fd >> 2] = zg;
          h[Fd + 4 >> 2] = Xf;
        } else {
          G(z.g, 236, z.pa, z.f);
        }
      }
    }
  }
  m = c >> 2;
  j = Fd >> 2;
  var Yf = l[m] - l[j];
  i = c + 4 >> 2;
  f = c + 12 >> 2;
  var Be = l[i] - l[f], ce = bn(Yf * Yf + Be * Be);
  g = c + 16 >> 2;
  l[g] = ce;
  h[c + 20 >> 2] = V;
  var Ke = h[H];
  if (0 == Ke) {
    G(z.g, 246, z.H, z.f);
    var rf = 0;
  } else {
    if (1 == Ke) {
      rf = 0;
    } else {
      if (2 == Ke) {
        var Ag = l[J] - l[C], Zf = l[K] - l[I], rf = bn(Ag * Ag + Zf * Zf);
      } else {
        if (3 == Ke) {
          var sf = l[J], $f = l[K], rf = (l[C] - sf) * (l[D + 23] - $f) - (l[I] - $f) * (l[D + 22] - sf);
        } else {
          G(z.g, 259, z.H, z.f), rf = 0;
        }
      }
    }
  }
  l[d >> 2] = rf;
  var ag = h[H];
  b[P] = ag & 65535;
  var jh = 0 < ag;
  a : do {
    if (jh) {
      for (var We = 0; ; ) {
        a[d + (We + 6)] = h[F + (9 * We | 0) + 7] & 255;
        a[d + (We + 9)] = h[F + (9 * We | 0) + 8] & 255;
        var me = We + 1;
        if (me < ag) {
          We = me;
        } else {
          break a;
        }
      }
    }
  } while (0);
  if (0 != (a[e + 88] & 1)) {
    var tf = l[Q + 6], Kf = l[Q + 13], Ce = l[g], Bg = tf + Kf;
    if (Ce > Bg & 1.1920928955078125e-7 < Ce) {
      l[g] = Ce - Bg;
      var ne = l[j], bg = l[m], De = ne - bg, oe = l[f], Cg = l[i], Md = oe - Cg, cg = bn(De * De + Md * Md);
      if (1.1920928955078125e-7 > cg) {
        var Lf = De, uf = Md;
      } else {
        var Dg = 1 / cg, Lf = De * Dg, uf = Md * Dg;
      }
      var vd = uf * tf;
      l[m] = bg + Lf * tf;
      l[i] = Cg + vd;
      var Xe = uf * Kf;
      l[j] = ne - Lf * Kf;
      l[f] = oe - Xe;
    } else {
      var md = .5 * (l[i] + l[f]), kh = (x[0] = .5 * (l[m] + l[j]), w[0]), pe = (x[0] = md, w[0]), de = 0 | kh, Eg = pe | 0;
      h[c >> 2] = de;
      h[c + 4 >> 2] = Eg;
      hd = Fd;
      h[hd >> 2] = de;
      Sc = Fd + 4;
      h[Sc >> 2] = Eg;
      l[g] = 0;
    }
  }
  Qf = O;
}

function Vp(c) {
  var d, e, g, f;
  f = c + 16 >> 2;
  var i = h[f];
  if (-1 == i) {
    i = c + 8;
    g = i >> 2;
    d = c + 12 >> 2;
    e = h[d];
    if (h[g] == e) {
      var j = e;
    } else {
      G(z.d, 61, z.kb, z.Eb), j = h[d];
    }
    c += 4;
    e = c >> 2;
    var m = h[e];
    h[d] = j << 1;
    j = Nj(72 * j);
    h[e] = j;
    Wp(j, m, 36 * h[g]);
    qp(m);
    var j = h[g], m = h[d] - 1, n = j < m;
    a : do {
      if (n) {
        for (var o = j; ; ) {
          var q = o + 1;
          h[h[e] + 36 * o + 20 >> 2] = q;
          h[h[e] + 36 * o + 32 >> 2] = -1;
          o = h[d] - 1;
          if (q < o) {
            o = q;
          } else {
            var p = o;
            break a;
          }
        }
      } else {
        p = m;
      }
    } while (0);
    h[h[e] + 36 * p + 20 >> 2] = -1;
    h[h[e] + 36 * (h[d] - 1) + 32 >> 2] = -1;
    p = h[g];
    h[f] = p;
    d = c >> 2;
  } else {
    p = i, d = c + 4 >> 2, i = c + 8;
  }
  g = h[d] + 36 * p + 20;
  h[f] = h[g >> 2];
  h[g >> 2] = -1;
  h[h[d] + 36 * p + 24 >> 2] = -1;
  h[h[d] + 36 * p + 28 >> 2] = -1;
  h[h[d] + 36 * p + 32 >> 2] = 0;
  h[h[d] + 36 * p + 16 >> 2] = 0;
  h[i >> 2] += 1;
  return p;
}

function Xp(c, d) {
  var e, g, f, i, j;
  i = c + 24;
  h[i >> 2] += 1;
  j = c >> 2;
  var m = h[j], n = -1 == m;
  a : do {
    if (n) {
      h[j] = d, h[h[c + 4 >> 2] + 36 * d + 20 >> 2] = -1;
    } else {
      i = c + 4 >> 2;
      f = h[i] >> 2;
      var o = l[f + (9 * d | 0)];
      e = l[f + (9 * d | 0) + 1];
      for (var q = l[f + (9 * d | 0) + 2], p = l[f + (9 * d | 0) + 3], r = m; ; ) {
        var s = h[f + (9 * r | 0) + 6];
        if (-1 == s) {
          break;
        }
        var u = h[f + (9 * r | 0) + 7], A = l[f + (9 * r | 0) + 2], E = l[f + (9 * r | 0)], y = l[f + (9 * r | 0) + 3], I = l[f + (9 * r | 0) + 1], C = 2 * ((A > q ? A : q) - (E < o ? E : o) + ((y > p ? y : p) - (I < e ? I : e)));
        g = 2 * C;
        var A = 2 * (C - 2 * (A - E + (y - I))), E = l[f + (9 * s | 0)], y = o < E ? o : E, I = l[f + (9 * s | 0) + 1], C = e < I ? e : I, K = l[f + (9 * s | 0) + 2], J = q > K ? q : K, M = l[f + (9 * s | 0) + 3], B = p > M ? p : M, E = (-1 == h[f + (9 * s | 0) + 6] ? 2 * (J - y + (B - C)) : 2 * (J - y + (B - C)) - 2 * (K - E + (M - I))) + A, y = l[f + (9 * u | 0)], I = o < y ? o : y, C = l[f + (9 * u | 0) + 1], K = e < C ? e : C, J = l[f + (9 * u | 0) + 2], M = q > J ? q : J, B = l[f + (9 * u | 0) + 3], F = p > B ? p : B, A = (-1 == h[f + (9 * u | 0) + 6] ? 2 * (M - I + (F - K)) : 2 * (M - I + (F - K)) - 2 * (J - y + (B - C))) + A;
        if (g < E & g < A) {
          break;
        }
        r = E < A ? s : u;
      }
      f = h[f + (9 * r | 0) + 5];
      s = Vp(c);
      h[h[i] + 36 * s + 20 >> 2] = f;
      h[h[i] + 36 * s + 16 >> 2] = 0;
      u = h[i];
      g = u >> 2;
      A = l[g + (9 * r | 0)];
      E = l[g + (9 * r | 0) + 1];
      E = e < E ? e : E;
      e = u + 36 * s;
      o = (x[0] = o < A ? o : A, w[0]);
      A = (x[0] = E, w[0]) | 0;
      h[e >> 2] = 0 | o;
      h[e + 4 >> 2] = A;
      o = l[g + (9 * r | 0) + 2];
      e = l[g + (9 * r | 0) + 3];
      p = p > e ? p : e;
      e = u + 36 * s + 8;
      q = (x[0] = q > o ? q : o, w[0]);
      p = (x[0] = p, w[0]) | 0;
      h[e >> 2] = 0 | q;
      h[e + 4 >> 2] = p;
      q = h[i];
      h[q + 36 * s + 32 >> 2] = h[(q + 32 >> 2) + (9 * r | 0)] + 1;
      q = h[i];
      -1 == f ? (h[q + 36 * s + 24 >> 2] = r, h[h[i] + 36 * s + 28 >> 2] = d, h[h[i] + 36 * r + 20 >> 2] = s, h[h[i] + 36 * d + 20 >> 2] = s, h[j] = s) : (p = q + 36 * f + 24, h[p >> 2] == r ? h[p >> 2] = s : h[q + 36 * f + 28 >> 2] = s, h[h[i] + 36 * s + 24 >> 2] = r, h[h[i] + 36 * s + 28 >> 2] = d, h[h[i] + 36 * r + 20 >> 2] = s, h[h[i] + 36 * d + 20 >> 2] = s);
      r = h[(h[i] + 20 >> 2) + (9 * d | 0)];
      if (-1 != r) {
        for (;;) {
          if (r = Yp(c, r), p = h[i], q = h[(p + 24 >> 2) + (9 * r | 0)], p = h[(p + 28 >> 2) + (9 * r | 0)], -1 == q && G(z.d, 307, z.X, z.wc), -1 == p && G(z.d, 308, z.X, z.zc), o = h[i], e = h[(o + 32 >> 2) + (9 * q | 0)], f = h[(o + 32 >> 2) + (9 * p | 0)], h[o + 36 * r + 32 >> 2] = (e > f ? e : f) + 1, o = h[i], e = o >> 2, f = l[e + (9 * q | 0)], s = l[e + (9 * p | 0)], u = l[e + (9 * q | 0) + 1], g = l[e + (9 * p | 0) + 1], g = u < g ? u : g, u = o + 36 * r, f = (x[0] = f < s ? f : s, w[0]), s = (x[0] = g, w[0]) | 0, h[u >> 2] = 0 | f, h[u + 4 >> 2] = s, f = l[e + (9 * q | 0) + 2], s = l[e + (9 * p | 0) + 2], q = l[e + (9 * q | 0) + 3], p = l[e + (9 * p | 0) + 3], q = q > p ? q : p, p = o + 36 * r + 8, o = (x[0] = f > s ? f : s, w[0]), q = (x[0] = q, w[0]) | 0, h[p >> 2] = 0 | o, h[p + 4 >> 2] = q, r = h[(h[i] + 20 >> 2) + (9 * r | 0)], -1 == r) {
            break a;
          }
        }
      }
    }
  } while (0);
}

function Yp(c, d) {
  var e, g, f, i, j, m, n, o, q, p, r, s, u, A, E, y, I, C, K, J, M, B, F, H, P = c >> 2, D;
  -1 == d && G(z.d, 382, z.l, z.Bc);
  H = c + 4 >> 2;
  var Q = h[H];
  F = Q >> 2;
  var O = Q + 36 * d;
  B = Q + 36 * d + 24 >> 2;
  var L = h[B];
  if (-1 == L) {
    var jb = d;
  } else {
    if (M = Q + 36 * d + 32 >> 2, 2 > h[M]) {
      jb = d;
    } else {
      J = Q + 36 * d + 28 >> 2;
      var U = h[J];
      D = -1 < L ? L < h[P + 3] ? 7 : 6 : 6;
      6 == D && G(z.d, 392, z.l, z.Cc);
      D = -1 < U ? U < h[P + 3] ? 10 : 9 : 9;
      9 == D && G(z.d, 393, z.l, z.Bb);
      var N = h[H];
      K = N >> 2;
      var ma = N + 36 * L, na = N + 36 * U;
      C = N + 36 * U + 32 >> 2;
      I = N + 36 * L + 32 >> 2;
      var za = h[C] - h[I];
      if (1 < za) {
        var S = N + 36 * U + 24, T = h[S >> 2];
        y = N + 36 * U + 28 >> 2;
        var $ = h[y], Fa = N + 36 * T, Z = N + 36 * $;
        D = -1 < T ? T < h[P + 3] ? 14 : 13 : 13;
        13 == D && G(z.d, 407, z.l, z.Cb);
        D = -1 < $ ? $ < h[P + 3] ? 17 : 16 : 16;
        16 == D && G(z.d, 408, z.l, z.Ib);
        h[S >> 2] = d;
        var X = Q + 36 * d + 20, ba = h[X >> 2];
        E = N + 36 * U + 20 >> 2;
        h[E] = ba;
        h[X >> 2] = U;
        var Da = h[E];
        if (-1 == Da) {
          h[P] = U;
        } else {
          var Ea = h[H], lb = Ea + 36 * Da + 24;
          if (h[lb >> 2] == d) {
            h[lb >> 2] = U;
          } else {
            if (h[(Ea + 28 >> 2) + (9 * Da | 0)] == d) {
              var Qa = Da, qa = Ea;
            } else {
              G(z.d, 424, z.l, z.Nb), Qa = h[E], qa = h[H];
            }
            h[(qa + 28 >> 2) + (9 * Qa | 0)] = U;
          }
        }
        A = N + 36 * T + 32 >> 2;
        u = N + 36 * $ + 32 >> 2;
        if (h[A] > h[u]) {
          h[y] = T;
          h[J] = $;
          h[N + 36 * $ + 20 >> 2] = d;
          var va = l[ma >> 2], Y = l[Z >> 2], Ga = va < Y ? va : Y, wa = l[K + (9 * L | 0) + 1], Ra = l[K + (9 * $ | 0) + 1], Za = wa < Ra ? wa : Ra, $a = (x[0] = Ga, w[0]), La = (x[0] = Za, w[0]), ab = 0 | $a, kb = La | 0, fb = O;
          s = fb >> 2;
          h[s] = ab;
          var pb = O + 4;
          r = pb >> 2;
          h[r] = kb;
          var ga = l[K + (9 * L | 0) + 2], da = l[K + (9 * $ | 0) + 2], bb = l[K + (9 * L | 0) + 3], ca = l[K + (9 * $ | 0) + 3], ha = bb > ca ? bb : ca, ta = Q + 36 * d + 8, ua = (x[0] = ga > da ? ga : da, w[0]), oa = (x[0] = ha, w[0]), ka = 0 | ua, xa = oa | 0, Ua = ta;
          p = Ua >> 2;
          h[p] = ka;
          var la = ta + 4;
          q = la >> 2;
          h[q] = xa;
          var Sa = l[Fa >> 2], cb = l[F + (9 * d | 0) + 1], qb = l[K + (9 * T | 0) + 1], xb = cb < qb ? cb : qb, Pb = (x[0] = Ga < Sa ? Ga : Sa, w[0]), Na = (x[0] = xb, w[0]), Ha = 0 | Pb, pa = Na | 0, Ia = na;
          o = Ia >> 2;
          h[o] = Ha;
          var Oa = na + 4;
          n = Oa >> 2;
          h[n] = pa;
          var Pa = l[F + (9 * d | 0) + 2], Aa = l[K + (9 * T | 0) + 2], ia = l[F + (9 * d | 0) + 3], Va = l[K + (9 * T | 0) + 3], ra = ia > Va ? ia : Va, Ka = N + 36 * U + 8, db = (x[0] = Pa > Aa ? Pa : Aa, w[0]), ub = (x[0] = ra, w[0]), vb = 0 | db, mb = ub | 0, gb = Ka;
          m = gb >> 2;
          h[m] = vb;
          var nb = Ka + 4;
          j = nb >> 2;
          h[j] = mb;
          var Wa = h[I], ea = h[u], Ja = (Wa > ea ? Wa : ea) + 1;
          h[M] = Ja;
          var Ba = h[A], Ta = Ja > Ba ? Ja : Ba;
        } else {
          h[y] = $;
          h[J] = T;
          h[N + 36 * T + 20 >> 2] = d;
          var yb = l[ma >> 2], Xa = l[Fa >> 2], eb = yb < Xa ? yb : Xa, Eb = l[K + (9 * L | 0) + 1], zb = l[K + (9 * T | 0) + 1], Nb = Eb < zb ? Eb : zb, Qb = (x[0] = eb, w[0]), Bb = (x[0] = Nb, w[0]), Ib = 0 | Qb, Jb = Bb | 0, fb = O;
          s = fb >> 2;
          h[s] = Ib;
          pb = O + 4;
          r = pb >> 2;
          h[r] = Jb;
          var wb = l[K + (9 * L | 0) + 2], Fb = l[K + (9 * T | 0) + 2], Gb = l[K + (9 * L | 0) + 3], ob = l[K + (9 * T | 0) + 3], Kb = Gb > ob ? Gb : ob, hb = Q + 36 * d + 8, rb = (x[0] = wb > Fb ? wb : Fb, w[0]), W = (x[0] = Kb, w[0]), ja = 0 | rb, Ca = W | 0, Ua = hb;
          p = Ua >> 2;
          h[p] = ja;
          la = hb + 4;
          q = la >> 2;
          h[q] = Ca;
          var Ub = l[Z >> 2], Ab = l[F + (9 * d | 0) + 1], Cb = l[K + (9 * $ | 0) + 1], Xb = Ab < Cb ? Ab : Cb, dc = (x[0] = eb < Ub ? eb : Ub, w[0]), Ma = (x[0] = Xb, w[0]), Lb = 0 | dc, fa = Ma | 0, Ia = na;
          o = Ia >> 2;
          h[o] = Lb;
          Oa = na + 4;
          n = Oa >> 2;
          h[n] = fa;
          var sb = l[F + (9 * d | 0) + 2], tb = l[K + (9 * $ | 0) + 2], V = l[F + (9 * d | 0) + 3], Yb = l[K + (9 * $ | 0) + 3], gc = V > Yb ? V : Yb, Rb = N + 36 * U + 8, cc = (x[0] = sb > tb ? sb : tb, w[0]), Zb = (x[0] = gc, w[0]), wc = 0 | cc, Xc = Zb | 0, gb = Rb;
          m = gb >> 2;
          h[m] = wc;
          nb = Rb + 4;
          j = nb >> 2;
          h[j] = Xc;
          var kc = h[I], rc = h[A], ec = (kc > rc ? kc : rc) + 1;
          h[M] = ec;
          var sc = h[u], Ta = ec > sc ? ec : sc;
        }
        h[C] = Ta + 1;
        jb = U;
      } else {
        if (-1 > za) {
          var Mc = N + 36 * L + 24, Db = h[Mc >> 2];
          i = N + 36 * L + 28 >> 2;
          var Ya = h[i], Wb = N + 36 * Db, lc = N + 36 * Ya;
          D = -1 < Db ? Db < h[P + 3] ? 32 : 31 : 31;
          31 == D && G(z.d, 467, z.l, z.Rb);
          D = -1 < Ya ? Ya < h[P + 3] ? 35 : 34 : 34;
          34 == D && G(z.d, 468, z.l, z.Sb);
          h[Mc >> 2] = d;
          var Ec = Q + 36 * d + 20, Nc = h[Ec >> 2];
          f = N + 36 * L + 20 >> 2;
          h[f] = Nc;
          h[Ec >> 2] = L;
          var oc = h[f];
          if (-1 == oc) {
            h[P] = L;
          } else {
            var $b = h[H], od = $b + 36 * oc + 24;
            if (h[od >> 2] == d) {
              h[od >> 2] = L;
            } else {
              if (h[($b + 28 >> 2) + (9 * oc | 0)] == d) {
                var Yc = oc, Hb = $b;
              } else {
                G(z.d, 484, z.l, z.Tb), Yc = h[f], Hb = h[H];
              }
              h[(Hb + 28 >> 2) + (9 * Yc | 0)] = L;
            }
          }
          g = N + 36 * Db + 32 >> 2;
          e = N + 36 * Ya + 32 >> 2;
          if (h[g] > h[e]) {
            h[i] = Db;
            h[B] = Ya;
            h[N + 36 * Ya + 20 >> 2] = d;
            var ac = l[na >> 2], hc = l[lc >> 2], yc = ac < hc ? ac : hc, Zc = l[K + (9 * U | 0) + 1], tc = l[K + (9 * Ya | 0) + 1], Oc = Zc < tc ? Zc : tc, zc = (x[0] = yc, w[0]), bc = (x[0] = Oc, w[0]), pc = 0 | zc, hd = bc | 0, fb = O;
            s = fb >> 2;
            h[s] = pc;
            pb = O + 4;
            r = pb >> 2;
            h[r] = hd;
            var Sc = l[K + (9 * U | 0) + 2], xd = l[K + (9 * Ya | 0) + 2], ic = l[K + (9 * U | 0) + 3], uc = l[K + (9 * Ya | 0) + 3], Pd = ic > uc ? ic : uc, yd = Q + 36 * d + 8, Ob = (x[0] = Sc > xd ? Sc : xd, w[0]), zd = (x[0] = Pd, w[0]), Ac = 0 | Ob, fc = zd | 0, Ua = yd;
            p = Ua >> 2;
            h[p] = Ac;
            la = yd + 4;
            q = la >> 2;
            h[q] = fc;
            var Mb = l[Wb >> 2], Vb = l[F + (9 * d | 0) + 1], Tc = l[K + (9 * Db | 0) + 1], $c = Vb < Tc ? Vb : Tc, Ic = (x[0] = yc < Mb ? yc : Mb, w[0]), fe = (x[0] = $c, w[0]), Pc = 0 | Ic, Wd = fe | 0, Ia = ma;
            o = Ia >> 2;
            h[o] = Pc;
            Oa = ma + 4;
            n = Oa >> 2;
            h[n] = Wd;
            var Fc = l[F + (9 * d | 0) + 2], mc = l[K + (9 * Db | 0) + 2], Jc = l[F + (9 * d | 0) + 3], Ad = l[K + (9 * Db | 0) + 3], Bd = Jc > Ad ? Jc : Ad, ad = N + 36 * L + 8, bd = (x[0] = Fc > mc ? Fc : mc, w[0]), pd = (x[0] = Bd, w[0]), Qd = 0 | bd, Hd = pd | 0, gb = ad;
            m = gb >> 2;
            h[m] = Qd;
            nb = ad + 4;
            j = nb >> 2;
            h[j] = Hd;
            var cd = h[C], Uc = h[e], jc = (cd > Uc ? cd : Uc) + 1;
            h[M] = jc;
            var Vc = h[g], Bc = jc > Vc ? jc : Vc;
          } else {
            h[i] = Ya;
            h[B] = Db;
            h[N + 36 * Db + 20 >> 2] = d;
            var id = l[na >> 2], Sb = l[Wb >> 2], nc = id < Sb ? id : Sb, ge = l[K + (9 * U | 0) + 1], Id = l[K + (9 * Db | 0) + 1], qd = ge < Id ? ge : Id, Rd = (x[0] = nc, w[0]), rd = (x[0] = qd, w[0]), Jd = 0 | Rd, Cd = rd | 0, fb = O;
            s = fb >> 2;
            h[s] = Jd;
            pb = O + 4;
            r = pb >> 2;
            h[r] = Cd;
            var Dd = l[K + (9 * U | 0) + 2], dd = l[K + (9 * Db | 0) + 2], sd = l[K + (9 * U | 0) + 3], Wc = l[K + (9 * Db | 0) + 3], Kd = sd > Wc ? sd : Wc, Xd = Q + 36 * d + 8, Yd = (x[0] = Dd > dd ? Dd : dd, w[0]), he = (x[0] = Kd, w[0]), xe = 0 | Yd, Ge = he | 0, Ua = Xd;
            p = Ua >> 2;
            h[p] = xe;
            la = Xd + 4;
            q = la >> 2;
            h[q] = Ge;
            var ie = l[lc >> 2], Ld = l[F + (9 * d | 0) + 1], ed = l[K + (9 * Ya | 0) + 1], je = Ld < ed ? Ld : ed, Zd = (x[0] = nc < ie ? nc : ie, w[0]), jd = (x[0] = je, w[0]), Qc = 0 | Zd, Rc = jd | 0, Ia = ma;
            o = Ia >> 2;
            h[o] = Qc;
            Oa = ma + 4;
            n = Oa >> 2;
            h[n] = Rc;
            var ye = l[F + (9 * d | 0) + 2], $d = l[K + (9 * Ya | 0) + 2], Qe = l[F + (9 * d | 0) + 3], Re = l[K + (9 * Ya | 0) + 3], Bf = Qe > Re ? Qe : Re, kf = N + 36 * L + 8, Rf = (x[0] = ye > $d ? ye : $d, w[0]), ah = (x[0] = Bf, w[0]), Se = 0 | Rf, He = ah | 0, gb = kf;
            m = gb >> 2;
            h[m] = Se;
            nb = kf + 4;
            j = nb >> 2;
            h[j] = He;
            var lf = h[C], ke = h[g], mf = (lf > ke ? lf : ke) + 1;
            h[M] = mf;
            var Ie = h[e], Bc = mf > Ie ? mf : Ie;
          }
          h[I] = Bc + 1;
          jb = L;
        } else {
          jb = d;
        }
      }
    }
  }
  return jb;
}

function Zp(c, d, e, g) {
  var f = c >> 2, i = 1 - g, j = l[f + 4] * i + l[f + 6] * g, m = l[f + 5] * i + l[f + 7] * g, n = i * l[f + 8] + l[f + 9] * g, o = Nr(n), n = Is(n), q = l[f + 2], p = l[f + 3], j = j - (n * q - o * p), m = m - (o * q + n * p), q = l[f + 13] * i + l[f + 15] * g, p = l[f + 14] * i + l[f + 16] * g, i = i * l[f + 17] + l[f + 18] * g, g = Nr(i), i = Is(i), r = l[f + 11], s = l[f + 12], q = q - (i * r - g * s), p = p - (g * r + i * s), r = h[f + 20];
  if (0 == r) {
    var r = c + 92, s = c + 96, u = h[f], c = -1 < d ? h[u + 20 >> 2] > d ? 4 : 3 : 3;
    3 == c && G(z.b, 103, z.a, z.c);
    d = (d << 3) + h[u + 16 >> 2];
    c = h[d + 4 >> 2];
    d = (w[0] = h[d >> 2], x[0]);
    u = (w[0] = c, x[0]);
    f = h[f + 1];
    c = -1 < e ? h[f + 20 >> 2] > e ? 7 : 6 : 6;
    6 == c && G(z.b, 103, z.a, z.c);
    e = (e << 3) + h[f + 16 >> 2];
    f = h[e + 4 >> 2];
    e = (w[0] = h[e >> 2], x[0]);
    f = (w[0] = f, x[0]);
    o = (i * e - g * f + q - (n * d - o * u + j)) * l[r >> 2] + (g * e + i * f + p - (o * d + n * u + m)) * l[s >> 2];
  } else {
    1 == r ? (c = l[f + 23], r = l[f + 24], d = n * c - o * r, r = o * c + n * r, c = l[f + 21], s = l[f + 22], j = n * c - o * s + j, o = o * c + n * s + m, n = h[f + 1], c = -1 < e ? h[n + 20 >> 2] > e ? 11 : 10 : 10, 10 == c && G(z.b, 103, z.a, z.c), m = (e << 3) + h[n + 16 >> 2], n = h[m + 4 >> 2], m = (w[0] = h[m >> 2], x[0]), n = (w[0] = n, x[0]), o = (i * m - g * n + q - j) * d + (g * m + i * n + p - o) * r) : 2 == r ? (c = l[f + 23], r = l[f + 24], e = i * c - g * r, r = g * c + i * r, c = l[f + 21], s = l[f + 22], q = i * c - g * s + q, g = g * c + i * s + p, i = h[f], c = -1 < d ? h[i + 20 >> 2] > d ? 15 : 14 : 14, 14 == c && G(z.b, 103, z.a, z.c), f = (d << 3) + h[i + 16 >> 2], i = h[f + 4 >> 2], f = (w[0] = h[f >> 2], x[0]), i = (w[0] = i, x[0]), o = (n * f - o * i + j - q) * e + (o * f + n * i + m - g) * r) : (G(z.K, 242, z.yb, z.f), o = 0);
  }
  return o;
}

function Js(c, d, e) {
  var g;
  2 == (-1 < e ? h[c + 16 >> 2] - 1 > e ? 3 : 2 : 2) && G(z.jc, 89, z.vb, z.kc);
  h[d + 4 >> 2] = 1;
  l[d + 8 >> 2] = l[c + 8 >> 2];
  g = c + 12 >> 2;
  var f = (e << 3) + h[g], i = d + 12, j = h[f + 4 >> 2];
  h[i >> 2] = h[f >> 2];
  h[i + 4 >> 2] = j;
  f = (e + 1 << 3) + h[g];
  i = d + 20;
  j = h[f + 4 >> 2];
  h[i >> 2] = h[f >> 2];
  h[i + 4 >> 2] = j;
  f = d + 28;
  0 < e ? (i = (e - 1 << 3) + h[g], j = h[i + 4 >> 2], h[f >> 2] = h[i >> 2], h[f + 4 >> 2] = j, a[d + 44] = 1) : (i = c + 20, j = h[i + 4 >> 2], h[f >> 2] = h[i >> 2], h[f + 4 >> 2] = j, a[d + 44] = a[c + 36] & 1);
  f = d + 36;
  h[c + 16 >> 2] - 2 > e ? (e = (e + 2 << 3) + h[g], c = h[e >> 2], e = h[e + 4 >> 2], h[f >> 2] = c, h[f + 4 >> 2] = e, a[d + 45] = 1) : (g = c + 28, e = h[g >> 2], g = h[g + 4 >> 2], h[f >> 2] = e, h[f + 4 >> 2] = g, a[d + 45] = a[c + 37] & 1);
}

function hn(c, d) {
  var e, g, f, i = 0 == d;
  a : do {
    if (i) {
      f = 0;
    } else {
      f = 0 < d;
      do {
        if (f) {
          if (640 < d) {
            f = Nj(d);
            break a;
          }
        } else {
          G(z.e, 104, z.N, z.za);
        }
      } while (0);
      var j = f = Hh[en + d];
      14 > f || G(z.e, 112, z.N, z.i);
      f = (j << 2) + c + 12 >> 2;
      g = k[f];
      if (0 == g) {
        g = c + 4 >> 2;
        var m = k[g], n = c + 8, o = h[n >> 2];
        e = c >> 2;
        m == o ? (m = h[e], o += 128, h[n >> 2] = o, n = Nj(o << 3), h[e] = n, Wp(n, m, h[g] << 3), Kk((h[g] << 3) + h[e], 1024), qp(m), n = h[g]) : n = m;
        o = h[e];
        m = Nj(16384);
        e = (n << 3) + o + 4 >> 2;
        h[e] = m;
        j = h[dn + (j << 2) >> 2];
        h[(n << 3) + o >> 2] = j;
        n = 16384 / j | 0;
        16385 > n * j ? o = m : (G(z.e, 140, z.N, z.mc), o = h[e]);
        n -= 1;
        m = 0 < n;
        b : do {
          if (m) {
            for (var q = 0, p = o; ; ) {
              var r = q + 1;
              h[p + q * j >> 2] = p + r * j;
              p = h[e];
              if (r == n) {
                var s = p;
                break b;
              } else {
                q = r;
              }
            }
          } else {
            s = o;
          }
        } while (0);
        h[s + n * j >> 2] = 0;
        h[f] = h[h[e] >> 2];
        h[g] += 1;
        f = h[e];
      } else {
        h[f] = h[g >> 2], f = g;
      }
    }
  } while (0);
  return f;
}

function Ks(c, d) {
  var e;
  e = c + 102796 >> 2;
  var g = h[e];
  0 < g || (G(z.j, 63, z.ca, z.nc), g = h[e]);
  g -= 1;
  h[(c + 102412 >> 2) + (3 * g | 0)] != d && G(z.j, 65, z.ca, z.uc);
  if (0 == (a[c + 12 * g + 102420] & 1)) {
    var g = c + 12 * g + 102416, f = c + 102400;
    h[f >> 2] -= h[g >> 2];
  } else {
    qp(d), g = c + 12 * g + 102416;
  }
  f = c + 102404;
  h[f >> 2] -= h[g >> 2];
  h[e] -= 1;
}

function jn(c, d, e) {
  var g, f, i = d >> 2, j = c >> 2, m = c + 12, n = c + 64, o = d + 4, q = l[o >> 2];
  (!isNaN(q) && !isNaN(0)) & -Infinity < q & Infinity > q ? (q = l[i + 2], f = (!isNaN(q) && !isNaN(0)) & -Infinity < q & Infinity > q ? 3 : 2) : f = 2;
  2 == f && G(z.m, 27, z.q, z.Wb);
  q = d + 16;
  f = l[q >> 2];
  (!isNaN(f) && !isNaN(0)) & -Infinity < f & Infinity > f ? (f = l[i + 5], f = (!isNaN(f) && !isNaN(0)) & -Infinity < f & Infinity > f ? 6 : 5) : f = 5;
  5 == f && G(z.m, 28, z.q, z.bc);
  f = d + 12 >> 2;
  var p = l[f];
  (!isNaN(p) && !isNaN(0)) & -Infinity < p & Infinity > p || G(z.m, 29, z.q, z.gc);
  var p = d + 24, r = l[p >> 2];
  (!isNaN(r) && !isNaN(0)) & -Infinity < r & Infinity > r || G(z.m, 30, z.q, z.oc);
  var r = d + 32, s = l[r >> 2];
  0 > s | (!isNaN(s) && !isNaN(0)) & -Infinity < s & Infinity > s ^ 1 && G(z.m, 31, z.q, z.vc);
  s = d + 28;
  g = l[s >> 2];
  0 > g | (!isNaN(g) && !isNaN(0)) & -Infinity < g & Infinity > g ^ 1 && G(z.m, 32, z.q, z.yc);
  g = c + 4 >> 1;
  b[g] = 0;
  var u = 0 == (a[d + 39] & 1) ? 0 : b[g] = 8;
  0 != (a[d + 38] & 1) && (u |= 16, b[g] = u);
  0 != (a[d + 36] & 1) && (u |= 4, b[g] = u);
  0 != (a[d + 37] & 1) && (u |= 2, b[g] = u);
  0 != (a[d + 40] & 1) && (b[g] = u | 32);
  h[j + 22] = e;
  d = h[o >> 2];
  o = h[o + 4 >> 2];
  h[m >> 2] = d;
  h[m + 4 >> 2] = o;
  m = l[f];
  e = Nr(m);
  l[j + 5] = e;
  m = Is(m);
  l[j + 6] = m;
  l[j + 7] = 0;
  l[j + 8] = 0;
  m = c + 36;
  h[m >> 2] = d;
  h[m + 4 >> 2] = o;
  m = c + 44;
  h[m >> 2] = d;
  h[m + 4 >> 2] = o;
  l[j + 13] = l[f];
  l[j + 14] = l[f];
  l[j + 15] = 0;
  h[j + 27] = 0;
  h[j + 28] = 0;
  h[j + 23] = 0;
  h[j + 24] = 0;
  f = h[q + 4 >> 2];
  h[n >> 2] = h[q >> 2];
  h[n + 4 >> 2] = f;
  l[j + 18] = l[p >> 2];
  l[j + 33] = l[s >> 2];
  l[j + 34] = l[r >> 2];
  l[j + 35] = l[i + 12];
  l[j + 19] = 0;
  l[j + 20] = 0;
  l[j + 21] = 0;
  l[j + 36] = 0;
  n = h[i];
  h[j] = n;
  c += 116;
  2 == n ? (l[c >> 2] = 1, l[j + 30] = 1) : (l[c >> 2] = 0, l[j + 30] = 0);
  l[j + 31] = 0;
  l[j + 32] = 0;
  h[j + 37] = h[i + 11];
  h[j + 25] = 0;
  h[j + 26] = 0;
}

function Xn(c, d) {
  var e, g, f, i, j, m, n, o, q, p, r, s, u, A, E, y, I = d >> 2, C = c >> 2, K = Qf;
  Qf += 16;
  var J;
  y = c + 88 >> 2;
  var M = h[y], B = h[M + 102868 >> 2];
  if (0 == (B & 2)) {
    var F = M, H = B;
  } else {
    G(z.m, 153, z.qb, z.Ac);
    var P = h[y], F = P, H = h[P + 102868 >> 2];
  }
  if (0 == (H & 2)) {
    var D = F, Q = hn(D, 44);
    if (0 == Q) {
      var O = 0;
    } else {
      b[Q + 32 >> 1] = 1, b[Q + 34 >> 1] = -1, b[Q + 36 >> 1] = 0, h[Q + 40 >> 2] = 0, h[Q + 8 >> 2] = 0, h[Q + 4 >> 2] = 0, h[Q + 24 >> 2] = 0, h[Q + 28 >> 2] = 0, h[Q + 12 >> 2] = 0, l[Q >> 2] = 0, O = Q;
    }
    E = O >> 2;
    h[E + 10] = h[I + 1];
    l[E + 4] = l[I + 2];
    l[E + 5] = l[I + 3];
    var L = O + 8;
    h[L >> 2] = c;
    var jb = O + 4;
    h[jb >> 2] = 0;
    A = O + 32 >> 1;
    u = d + 22 >> 1;
    b[A] = b[u];
    b[A + 1] = b[u + 1];
    b[A + 2] = b[u + 2];
    a[O + 38] = a[d + 20] & 1;
    var U = h[I], N = km[h[h[U >> 2] + 8 >> 2]](U, D);
    s = O + 12 >> 2;
    h[s] = N;
    var ma = km[h[h[N >> 2] + 12 >> 2]](N), na = hn(D, 28 * ma);
    r = O + 24 >> 2;
    h[r] = na;
    var za = 0 < ma;
    a : do {
      if (za && (h[na + 16 >> 2] = 0, h[h[r] + 24 >> 2] = -1, 1 != ma)) {
        for (var S = 1; ; ) {
          h[h[r] + 28 * S + 16 >> 2] = 0;
          h[h[r] + 28 * S + 24 >> 2] = -1;
          var T = S + 1;
          if (T == ma) {
            break a;
          } else {
            S = T;
          }
        }
      }
    } while (0);
    p = O + 28 >> 2;
    h[p] = 0;
    var $ = O;
    l[$ >> 2] = l[I + 4];
    var Fa = c + 4, Z = 0 == (b[Fa >> 1] & 32);
    a : do {
      if (!Z) {
        var X = h[y], ba = X + 102872, Da = c + 12, Ea = h[s], lb = km[h[h[Ea >> 2] + 12 >> 2]](Ea);
        h[p] = lb;
        if (0 < lb) {
          var Qa = ba;
          q = X + 102876 >> 2;
          var qa = X + 102900;
          o = X + 102912 >> 2;
          var va = X + 102908;
          n = X + 102904 >> 2;
          for (var Y = 0; ; ) {
            var Ga = h[r];
            m = Ga >> 2;
            var wa = Ga + 28 * Y, Ra = h[s];
            km[h[h[Ra >> 2] + 24 >> 2]](Ra, wa, Da, Y);
            var Za = wa, $a = Vp(Qa), La = l[m + (7 * Y | 0) + 1] - .10000000149011612, ab = h[q] + 36 * $a, kb = (x[0] = l[wa >> 2] - .10000000149011612, w[0]), fb = (x[0] = La, w[0]) | 0;
            h[ab >> 2] = 0 | kb;
            h[ab + 4 >> 2] = fb;
            var pb = l[m + (7 * Y | 0) + 3] + .10000000149011612, ga = h[q] + 36 * $a + 8, da = (x[0] = l[m + (7 * Y | 0) + 2] + .10000000149011612, w[0]), bb = (x[0] = pb, w[0]) | 0;
            h[ga >> 2] = 0 | da;
            h[ga + 4 >> 2] = bb;
            h[h[q] + 36 * $a + 16 >> 2] = Za;
            h[h[q] + 36 * $a + 32 >> 2] = 0;
            Xp(Qa, $a);
            h[qa >> 2] += 1;
            var ca = h[o], ha = h[va >> 2];
            if (ca == ha) {
              var ta = h[n];
              h[va >> 2] = ha << 1;
              var ua = Nj(ha << 3);
              h[n] = ua;
              var oa = ta;
              Wp(ua, oa, h[o] << 2);
              qp(oa);
              var ka = h[o];
            } else {
              ka = ca;
            }
            h[(ka << 2) + h[n] >> 2] = $a;
            h[o] += 1;
            h[Ga + 28 * Y + 24 >> 2] = $a;
            h[Ga + 28 * Y + 16 >> 2] = O;
            h[Ga + 28 * Y + 20 >> 2] = Y;
            var xa = Y + 1;
            if (xa < h[p]) {
              Y = xa;
            } else {
              break a;
            }
          }
        }
      }
    } while (0);
    j = c + 100 >> 2;
    h[jb >> 2] = h[j];
    h[j] = O;
    var Ua = c + 104;
    h[Ua >> 2] += 1;
    h[L >> 2] = c;
    var la = 0 < l[$ >> 2];
    do {
      if (la) {
        i = c + 116 >> 2;
        l[i] = 0;
        f = c + 120 >> 2;
        l[f] = 0;
        g = c + 124 >> 2;
        l[g] = 0;
        var Sa = c + 128;
        l[Sa >> 2] = 0;
        var cb = c + 28;
        l[cb >> 2] = 0;
        l[C + 8] = 0;
        var qb = h[C];
        if (0 == qb || 1 == qb) {
          var xb = c + 12, Pb = c + 36, Na = xb, Ha = h[Na >> 2], pa = xb + 4, Ia = h[pa >> 2];
          h[Pb >> 2] = Ha;
          h[Pb + 4 >> 2] = Ia;
          var Oa = c + 44;
          h[Oa >> 2] = Ha;
          h[Oa + 4 >> 2] = Ia;
          l[C + 13] = l[C + 14];
        } else {
          2 != qb && G(z.m, 284, z.ja, z.Hb);
          var Pa = h[j], Aa = 0 == Pa;
          a : do {
            if (Aa) {
              var ia = 0, Va = 0;
            } else {
              var ra = K, Ka = K + 4, db = K + 8, ub = K + 12, vb = 0, mb = 0, gb = Pa;
              for (e = gb >> 2; ; ) {
                var nb = l[e];
                if (0 == nb) {
                  var Wa = mb, ea = vb;
                } else {
                  var Ja = h[e + 3];
                  km[h[h[Ja >> 2] + 28 >> 2]](Ja, K, nb);
                  var Ba = l[ra >> 2];
                  l[i] += Ba;
                  var Ta = mb + l[Ka >> 2] * Ba, yb = vb + l[db >> 2] * Ba;
                  l[g] += l[ub >> 2];
                  Wa = Ta;
                  ea = yb;
                }
                var Xa = h[e + 1];
                if (0 == Xa) {
                  ia = ea;
                  Va = Wa;
                  break a;
                } else {
                  vb = ea, mb = Wa, gb = Xa, e = gb >> 2;
                }
              }
            }
          } while (0);
          var eb = l[i];
          if (0 < eb) {
            var Eb = 1 / eb;
            l[f] = Eb;
            var zb = Va * Eb, Nb = ia * Eb, Qb = eb;
          } else {
            l[i] = 1, l[f] = 1, zb = Va, Nb = ia, Qb = 1;
          }
          var Bb = l[g];
          if (0 < Bb) {
            if (0 != (b[Fa >> 1] & 16)) {
              J = 31;
            } else {
              var Ib = Bb - Qb * (zb * zb + Nb * Nb);
              l[g] = Ib;
              if (0 < Ib) {
                var Jb = Ib;
              } else {
                G(z.m, 319, z.ja, z.Mb), Jb = l[g];
              }
              var wb = 1 / Jb;
              J = 32;
            }
          } else {
            J = 31;
          }
          31 == J && (wb = l[g] = 0);
          l[Sa >> 2] = wb;
          var Fb = c + 44, Na = Fb, pa = Fb + 4, Gb = h[pa >> 2], ob = (w[0] = h[Na >> 2], x[0]), Kb = (w[0] = Gb, x[0]), hb = cb, rb = (x[0] = zb, w[0]), W = (x[0] = Nb, w[0]) | 0;
          h[hb >> 2] = 0 | rb;
          h[hb + 4 >> 2] = W;
          var ja = c + 36, Ca = l[C + 6], Ub = l[C + 5], Ab = Ca * zb - Ub * Nb + l[C + 3], Cb = Ub * zb + Ca * Nb + l[C + 4], Xb = (x[0] = Ab, w[0]), dc = (x[0] = Cb, w[0]), Ma = 0 | Xb, Lb = dc | 0;
          h[Fb >> 2] = Ma;
          h[Fb + 4 >> 2] = Lb;
          var fa = ja;
          h[fa >> 2] = Ma;
          h[fa + 4 >> 2] = Lb;
          var sb = l[C + 18], tb = (Ab - ob) * sb, V = c + 64;
          l[V >> 2] += (Cb - Kb) * -sb;
          var Yb = c + 68;
          l[Yb >> 2] += tb;
        }
      }
    } while (0);
    var gc = h[y] + 102868;
    h[gc >> 2] |= 1;
  }
  Qf = K;
}

function Qs(c, d) {
  var e, g, f;
  f = d + 48 >> 2;
  var i = d + 52;
  e = h[h[f] + 8 >> 2];
  var j = h[h[i >> 2] + 8 >> 2];
  g = h[c + 72 >> 2];
  if (0 != g && 0 != (h[d + 4 >> 2] & 2)) {
    km[h[h[g >> 2] + 12 >> 2]](g, d);
  }
  var m = d + 8, n = h[m >> 2];
  g = d + 12 >> 2;
  0 != n && (h[n + 12 >> 2] = h[g]);
  n = h[g];
  0 != n && (h[n + 8 >> 2] = h[m >> 2]);
  m = c + 60;
  h[m >> 2] == d && (h[m >> 2] = h[g]);
  m = d + 24;
  n = h[m >> 2];
  g = d + 28 >> 2;
  0 != n && (h[n + 12 >> 2] = h[g]);
  n = h[g];
  0 != n && (h[n + 8 >> 2] = h[m >> 2]);
  e += 112;
  d + 16 == h[e >> 2] && (h[e >> 2] = h[g]);
  g = d + 40;
  m = h[g >> 2];
  e = d + 44 >> 2;
  0 != m && (h[m + 12 >> 2] = h[e]);
  m = h[e];
  0 != m && (h[m + 8 >> 2] = h[g >> 2]);
  j += 112;
  d + 32 == h[j >> 2] && (h[j >> 2] = h[e]);
  j = h[c + 76 >> 2];
  Hh[Rs] || G(z.A, 103, z.Q, z.dc);
  0 < h[d + 124 >> 2] && (e = h[h[f] + 8 >> 2], g = e + 4, m = b[g >> 1], 0 == (m & 2) && (b[g >> 1] = m | 2, l[e + 144 >> 2] = 0), e = h[h[i >> 2] + 8 >> 2], g = e + 4, m = b[g >> 1], 0 == (m & 2) && (b[g >> 1] = m | 2, l[e + 144 >> 2] = 0));
  f = h[h[h[f] + 12 >> 2] + 4 >> 2];
  i = h[h[h[i >> 2] + 12 >> 2] + 4 >> 2];
  -1 < f & 4 > i || (G(z.A, 114, z.Q, z.Fa), G(z.A, 115, z.Q, z.Fa));
  km[h[(Ss + 4 >> 2) + (12 * f | 0) + (3 * i | 0)]](d, j);
  f = c + 64;
  h[f >> 2] -= 1;
}

function Ts(c, d) {
  var e, g, f, i, j, m, n, o, q, p, r, s, u, A, E = Qf;
  Qf += 1040;
  var y, I = E + 1036;
  A = c + 52 >> 2;
  h[A] = 0;
  u = c + 40 >> 2;
  var C = h[u];
  if (0 < C) {
    var K = c + 32;
    s = c + 56 >> 2;
    var J = c + 12, M = c + 4, B = E + 4;
    r = E >> 2;
    p = E + 1028 >> 2;
    q = E + 1032 >> 2;
    var F = c + 48, H = c + 44;
    o = H >> 2;
    for (var P = 0, D = C; ; ) {
      var Q = h[h[K >> 2] + (P << 2) >> 2];
      h[s] = Q;
      if (-1 == Q) {
        var O = D;
      } else {
        y = -1 < Q ? h[J >> 2] > Q ? 7 : 6 : 6;
        6 == y && G(z.z, 159, z.R, z.s);
        var L = h[M >> 2];
        h[r] = B;
        h[q] = 256;
        h[B >> 2] = h[c >> 2];
        h[p] = 1;
        for (var jb = L + 36 * Q, U = L + 36 * Q + 4, N = L + 36 * Q + 8, ma = L + 36 * Q + 12, na = 1, za = B; ; ) {
          var S = na - 1;
          h[p] = S;
          var T = h[za + (S << 2) >> 2];
          if (-1 == T) {
            var $ = S;
          } else {
            var Fa = h[M >> 2];
            n = Fa >> 2;
            if (0 < l[jb >> 2] - l[n + (9 * T | 0) + 2] | 0 < l[U >> 2] - l[n + (9 * T | 0) + 3] | 0 < l[n + (9 * T | 0)] - l[N >> 2] | 0 < l[n + (9 * T | 0) + 1] - l[ma >> 2]) {
              $ = S;
            } else {
              var Z = Fa + 36 * T + 24;
              if (-1 == h[Z >> 2]) {
                var X = h[s];
                if (X == T) {
                  $ = S;
                } else {
                  var ba = h[A], Da = h[F >> 2];
                  if (ba == Da) {
                    var Ea = h[o];
                    h[F >> 2] = Da << 1;
                    var lb = Nj(24 * Da);
                    h[o] = lb;
                    var Qa = Ea;
                    Wp(lb, Qa, 12 * h[A]);
                    qp(Qa);
                    var qa = h[s], va = h[A];
                  } else {
                    qa = X, va = ba;
                  }
                  h[h[o] + 12 * va >> 2] = qa > T ? T : qa;
                  var Y = h[s];
                  h[h[o] + 12 * h[A] + 4 >> 2] = Y < T ? T : Y;
                  h[A] += 1;
                  $ = h[p];
                }
              } else {
                var Ga = h[q];
                if (S == Ga) {
                  h[q] = Ga << 1;
                  var wa = Nj(Ga << 3);
                  h[r] = wa;
                  var Ra = za;
                  Wp(wa, Ra, h[p] << 2);
                  za != B && qp(Ra);
                }
                h[(h[p] << 2) + h[r] >> 2] = h[Z >> 2];
                var Za = h[p] + 1;
                h[p] = Za;
                var $a = Fa + 36 * T + 28, La = h[q];
                if (Za == La) {
                  var ab = h[r];
                  h[q] = La << 1;
                  var kb = Nj(La << 3);
                  h[r] = kb;
                  var fb = ab;
                  Wp(kb, fb, h[p] << 2);
                  ab != B && qp(fb);
                }
                h[(h[p] << 2) + h[r] >> 2] = h[$a >> 2];
                var pb = h[p] + 1, $ = h[p] = pb;
              }
            }
          }
          var ga = h[r];
          if (0 < $) {
            na = $, za = ga;
          } else {
            break;
          }
        }
        ga != B && (qp(ga), h[r] = 0);
        O = h[u];
      }
      var da = P + 1;
      if (da < O) {
        P = da, D = O;
      } else {
        break;
      }
    }
    var bb = h[A], ca = H;
  } else {
    bb = 0, ca = c + 44;
  }
  m = ca >> 2;
  h[u] = 0;
  var ha = h[m], ta = ha + 12 * bb;
  h[I >> 2] = 2;
  Us(ha, ta, I);
  var ua = 0 < h[A];
  a : do {
    if (ua) {
      var oa = c + 12, ka = c + 4, xa = d + 68, Ua = d + 76;
      j = d + 60 >> 2;
      var la = d + 64, Sa = h[m], cb = 0, qb = Sa, xb = h[Sa >> 2];
      b : for (;;) {
        var Pb = qb + 12 * cb;
        y = -1 < xb ? h[oa >> 2] > xb ? 33 : 32 : 32;
        32 == y && G(z.z, 153, z.na, z.s);
        var Na = h[ka >> 2], Ha = h[(Na + 16 >> 2) + (9 * xb | 0)], pa = qb + 12 * cb + 4, Ia = h[pa >> 2];
        if (-1 < Ia) {
          if (h[oa >> 2] > Ia) {
            var Oa = Na;
            y = 36;
          } else {
            y = 35;
          }
        } else {
          y = 35;
        }
        35 == y && (G(z.z, 153, z.na, z.s), Oa = h[ka >> 2]);
        var Pa = h[(Oa + 16 >> 2) + (9 * Ia | 0)], Aa = h[Ha + 16 >> 2], ia = h[Pa + 16 >> 2], Va = k[Ha + 20 >> 2], ra = k[Pa + 20 >> 2], Ka = h[Aa + 8 >> 2], db = h[ia + 8 >> 2], ub = Ka == db;
        c : do {
          if (!ub) {
            for (var vb = db + 112; ; ) {
              var mb = h[vb >> 2];
              if (0 == mb) {
                break;
              }
              if (h[mb >> 2] == Ka) {
                i = h[mb + 4 >> 2] >> 2;
                var gb = h[i + 12], nb = h[i + 13], Wa = h[i + 14], ea = h[i + 15];
                if (gb == Aa & nb == ia & Wa == Va & ea == ra) {
                  break c;
                }
                if (gb == ia & nb == Aa & Wa == ra & ea == Va) {
                  break c;
                }
              }
              vb = mb + 12;
            }
            var Ja = Ka;
            if (!(2 != h[db >> 2] && 2 != h[Ka >> 2])) {
              for (var Ba = db + 108; ; ) {
                var Ta = h[Ba >> 2];
                if (0 == Ta) {
                  break;
                }
                if (h[Ta >> 2] == Ja && 0 == (a[h[Ta + 4 >> 2] + 61] & 1)) {
                  break c;
                }
                Ba = Ta + 12;
              }
              var yb = h[xa >> 2];
              if (0 == yb || km[h[h[yb >> 2] + 8 >> 2]](yb, Aa, ia)) {
                var Xa = Aa, eb = ia, Eb = h[Ua >> 2];
                Hh[Rs] || (h[Ss >> 2] = 4, h[Ss + 4 >> 2] = 6, a[Ss + 8] = 1, h[Ss + 96 >> 2] = 8, h[Ss + 100 >> 2] = 10, a[Ss + 104] = 1, h[Ss + 24 >> 2] = 8, h[Ss + 28 >> 2] = 10, a[Ss + 32] = 0, h[Ss + 120 >> 2] = 12, h[Ss + 124 >> 2] = 14, a[Ss + 128] = 1, h[Ss + 48 >> 2] = 16, h[Ss + 52 >> 2] = 18, a[Ss + 56] = 1, h[Ss + 12 >> 2] = 16, h[Ss + 16 >> 2] = 18, a[Ss + 20] = 0, h[Ss + 72 >> 2] = 20, h[Ss + 76 >> 2] = 22, a[Ss + 80] = 1, h[Ss + 108 >> 2] = 20, h[Ss + 112 >> 2] = 22, a[Ss + 116] = 0, h[Ss + 144 >> 2] = 24, h[Ss + 148 >> 2] = 26, a[Ss + 152] = 1, h[Ss + 36 >> 2] = 24, h[Ss + 40 >> 2] = 26, a[Ss + 44] = 0, h[Ss + 168 >> 2] = 28, h[Ss + 172 >> 2] = 30, a[Ss + 176] = 1, h[Ss + 132 >> 2] = 28, h[Ss + 136 >> 2] = 30, a[Ss + 140] = 0, a[Rs] = 1);
                var zb = k[h[Aa + 12 >> 2] + 4 >> 2], Nb = k[h[ia + 12 >> 2] + 4 >> 2];
                4 > zb || G(z.A, 80, z.ma, z.Kb);
                4 > Nb || G(z.A, 81, z.ma, z.Yb);
                var Qb = k[(Ss >> 2) + (12 * zb | 0) + (3 * Nb | 0)];
                if (0 != Qb) {
                  var Bb = 0 == (a[Ss + 48 * zb + 12 * Nb + 8] & 1) ? km[Qb](eb, ra, Xa, Va, Eb) : km[Qb](Xa, Va, eb, ra, Eb);
                  f = Bb >> 2;
                  var Ib = Bb;
                  if (0 != Bb) {
                    var Jb = k[h[f + 12] + 8 >> 2], wb = k[h[f + 13] + 8 >> 2];
                    h[f + 2] = 0;
                    h[f + 3] = h[j];
                    var Fb = h[j];
                    0 != Fb && (h[Fb + 8 >> 2] = Ib);
                    h[j] = Ib;
                    var Gb = Bb + 16;
                    h[f + 5] = Bb;
                    h[Gb >> 2] = wb;
                    h[f + 6] = 0;
                    g = Jb + 112 >> 2;
                    h[f + 7] = h[g];
                    var ob = h[g];
                    0 != ob && (h[ob + 8 >> 2] = Gb);
                    h[g] = Gb;
                    var Kb = Bb + 32;
                    h[f + 9] = Bb;
                    h[Kb >> 2] = Jb;
                    h[f + 10] = 0;
                    e = wb + 112 >> 2;
                    h[f + 11] = h[e];
                    var hb = h[e];
                    0 != hb && (h[hb + 8 >> 2] = Kb);
                    h[e] = Kb;
                    var rb = Jb + 4, W = b[rb >> 1];
                    0 == (W & 2) && (b[rb >> 1] = W | 2, l[Jb + 144 >> 2] = 0);
                    var ja = wb + 4, Ca = b[ja >> 1];
                    0 == (Ca & 2) && (b[ja >> 1] = Ca | 2, l[wb + 144 >> 2] = 0);
                    h[la >> 2] += 1;
                  }
                }
              }
            }
          }
        } while (0);
        for (var Ub = h[A], Ab = cb; ; ) {
          var Cb = Ab + 1;
          if (Cb >= Ub) {
            break a;
          }
          var Xb = k[m], dc = k[(Xb >> 2) + (3 * Cb | 0)];
          if (dc != h[Pb >> 2]) {
            cb = Cb;
            qb = Xb;
            xb = dc;
            continue b;
          }
          if (h[(Xb + 4 >> 2) + (3 * Cb | 0)] == h[pa >> 2]) {
            Ab = Cb;
          } else {
            cb = Cb;
            qb = Xb;
            xb = dc;
            continue b;
          }
        }
      }
    }
  } while (0);
  Qf = E;
}

function Us(c, d, e) {
  var g, f, i, j, m, n, o, q, p, r, s, u, A, E, y, I, C, K, J, M, B = e >> 2, F = Qf;
  Qf += 12;
  var H, P = d, D = c;
  a : for (;;) {
    var Q = D, O = D + 12, L = D, jb = D + 4, U = D + 8;
    M = D >> 2;
    var N = P;
    b : for (;;) {
      var ma = N, na = ma - Q, za = na / 12 | 0;
      if (0 == za || 1 == za) {
        H = 52;
        break a;
      } else {
        if (2 == za) {
          var S = N - 12;
          if (!km[h[B]](S, D)) {
            H = 52;
            break a;
          }
          var T = h[L >> 2], $ = h[jb >> 2], Fa = h[U >> 2];
          J = S >> 2;
          h[M] = h[J];
          h[M + 1] = h[J + 1];
          h[M + 2] = h[J + 2];
          h[S >> 2] = T;
          h[N - 12 + 4 >> 2] = $;
          h[N - 12 + 8 >> 2] = Fa;
          H = 52;
          break a;
        } else {
          if (3 == za) {
            Vs(D, O, N - 12, e);
            H = 52;
            break a;
          } else {
            if (4 == za) {
              Ws(D, O, D + 24, N - 12, e);
              H = 52;
              break a;
            } else {
              if (5 == za) {
                Xs(D, O, D + 24, D + 36, N - 12, e);
                H = 52;
                break a;
              } else {
                if (372 > na) {
                  H = 9;
                  break a;
                }
                var Z = N - 12, X = na / 24 | 0, ba = D + 12 * X;
                if (11988 < na) {
                  var Da = na / 48 | 0, Ea = Xs(D, D + 12 * Da, ba, D + 12 * (Da + X), Z, e);
                } else {
                  Ea = Vs(D, ba, Z, e);
                }
                if (km[h[B]](D, ba)) {
                  var lb = Z, Qa = Ea;
                } else {
                  for (var qa = Z; ; ) {
                    var va = qa - 12, Y = k[B];
                    if (D == va) {
                      break b;
                    }
                    if (km[Y](va, ba)) {
                      break;
                    } else {
                      qa = va;
                    }
                  }
                  var Ga = h[L >> 2], wa = h[jb >> 2], Ra = h[U >> 2];
                  K = va >> 2;
                  h[M] = h[K];
                  h[M + 1] = h[K + 1];
                  h[M + 2] = h[K + 2];
                  h[va >> 2] = Ga;
                  h[qa - 12 + 4 >> 2] = wa;
                  h[qa - 12 + 8 >> 2] = Ra;
                  lb = va;
                  Qa = Ea + 1;
                }
                var Za = O < lb;
                c : do {
                  if (Za) {
                    for (var $a = lb, La = O, ab = Qa, kb = ba; ; ) {
                      var fb = km[h[B]](La, kb);
                      d : do {
                        if (fb) {
                          for (var pb = La; ; ) {
                            var ga = pb + 12;
                            if (km[h[B]](ga, kb)) {
                              pb = ga;
                            } else {
                              var da = ga;
                              C = da >> 2;
                              break d;
                            }
                          }
                        } else {
                          da = La, C = da >> 2;
                        }
                      } while (0);
                      for (var bb = $a; ; ) {
                        var ca = bb - 12;
                        if (km[h[B]](ca, kb)) {
                          break;
                        } else {
                          bb = ca;
                        }
                      }
                      if (da > ca) {
                        var ha = da;
                        I = ha >> 2;
                        var ta = ab, ua = kb;
                        y = ua >> 2;
                        break c;
                      }
                      var oa = h[C], ka = h[C + 1], xa = h[C + 2];
                      E = da >> 2;
                      A = ca >> 2;
                      h[E] = h[A];
                      h[E + 1] = h[A + 1];
                      h[E + 2] = h[A + 2];
                      h[ca >> 2] = oa;
                      h[bb - 12 + 4 >> 2] = ka;
                      h[bb - 12 + 8 >> 2] = xa;
                      var Ua = kb == da ? ca : kb, $a = ca, La = da + 12, ab = ab + 1, kb = Ua;
                    }
                  } else {
                    ha = O, I = ha >> 2, ta = Qa, ua = ba, y = ua >> 2;
                  }
                } while (0);
                if (ha == ua) {
                  var la = ta;
                } else {
                  if (km[h[B]](ua, ha)) {
                    var Sa = h[I], cb = h[I + 1], qb = h[I + 2];
                    u = ha >> 2;
                    s = ua >> 2;
                    h[u] = h[s];
                    h[u + 1] = h[s + 1];
                    h[u + 2] = h[s + 2];
                    h[y] = Sa;
                    h[y + 1] = cb;
                    h[y + 2] = qb;
                    la = ta + 1;
                  } else {
                    la = ta;
                  }
                }
                if (0 == la) {
                  var xb = Ys(D, ha, e), Pb = ha + 12;
                  if (Ys(Pb, N, e)) {
                    if (xb) {
                      H = 52;
                      break a;
                    } else {
                      N = ha;
                      continue;
                    }
                  } else {
                    if (xb) {
                      P = N;
                      D = Pb;
                      continue a;
                    }
                  }
                }
                var Na = ha;
                if (Na - Q < ma - Na) {
                  Us(D, ha, e);
                  P = N;
                  D = ha + 12;
                  continue a;
                } else {
                  Us(ha + 12, N, e), N = ha;
                }
              }
            }
          }
        }
      }
    }
    if (km[Y](D, Z)) {
      var Ha = O;
    } else {
      var pa = O;
      for (r = pa >> 2; ; ) {
        if (pa == Z) {
          H = 52;
          break a;
        }
        if (km[h[B]](D, pa)) {
          break;
        }
        pa += 12;
        r = pa >> 2;
      }
      var Ia = h[r], Oa = h[r + 1], Pa = h[r + 2];
      p = pa >> 2;
      q = Z >> 2;
      h[p] = h[q];
      h[p + 1] = h[q + 1];
      h[p + 2] = h[q + 2];
      h[Z >> 2] = Ia;
      h[N - 12 + 4 >> 2] = Oa;
      h[N - 12 + 8 >> 2] = Pa;
      Ha = pa + 12;
    }
    if (Ha == Z) {
      H = 52;
      break;
    } else {
      var Aa = Z, ia = Ha;
    }
    for (;;) {
      var Va = km[h[B]](D, ia);
      b : do {
        if (Va) {
          var ra = ia;
          o = ra >> 2;
        } else {
          for (var Ka = ia; ; ) {
            var db = Ka + 12;
            if (km[h[B]](D, db)) {
              ra = db;
              o = ra >> 2;
              break b;
            } else {
              Ka = db;
            }
          }
        }
      } while (0);
      for (var ub = Aa; ; ) {
        var vb = ub - 12;
        if (km[h[B]](D, vb)) {
          ub = vb;
        } else {
          break;
        }
      }
      if (ra >= vb) {
        P = N;
        D = ra;
        continue a;
      }
      var mb = h[o], gb = h[o + 1], nb = h[o + 2];
      n = ra >> 2;
      m = vb >> 2;
      h[n] = h[m];
      h[n + 1] = h[m + 1];
      h[n + 2] = h[m + 2];
      h[vb >> 2] = mb;
      h[ub - 12 + 4 >> 2] = gb;
      h[ub - 12 + 8 >> 2] = nb;
      Aa = vb;
      ia = ra + 12;
    }
  }
  a : do {
    if (9 == H) {
      j = F >> 2;
      var Wa = D + 24;
      Vs(D, O, Wa, e);
      var ea = D + 36;
      if (ea != N) {
        for (var Ja = Wa, Ba = ea; ; ) {
          if (km[h[B]](Ba, Ja)) {
            i = Ba >> 2;
            h[j] = h[i];
            h[j + 1] = h[i + 1];
            h[j + 2] = h[i + 2];
            for (var Ta = Ja, yb = Ba; ; ) {
              f = yb >> 2;
              g = Ta >> 2;
              h[f] = h[g];
              h[f + 1] = h[g + 1];
              h[f + 2] = h[g + 2];
              if (Ta == D) {
                break;
              }
              var Xa = Ta - 12;
              if (km[h[B]](F, Xa)) {
                yb = Ta, Ta = Xa;
              } else {
                break;
              }
            }
            h[g] = h[j];
            h[g + 1] = h[j + 1];
            h[g + 2] = h[j + 2];
          }
          var eb = Ba + 12;
          if (eb == N) {
            break a;
          } else {
            Ja = Ba, Ba = eb;
          }
        }
      }
    }
  } while (0);
  Qf = F;
}

function Vs(c, d, e, g) {
  var f, i, j = e >> 2, m = c >> 2;
  f = km[h[g >> 2]](d, c);
  var n = km[h[g >> 2]](e, d);
  if (f) {
    var o = h[m];
    f = h[m + 1];
    m = h[m + 2];
    i = c >> 2;
    n ? (d = e >> 2, h[i] = h[d], h[i + 1] = h[d + 1], h[i + 2] = h[d + 2], h[j] = o, h[j + 1] = f, h[j + 2] = m, j = 1) : (c = d >> 2, h[i] = h[c], h[i + 1] = h[c + 1], h[i + 2] = h[c + 2], h[d >> 2] = o, o = d + 4, h[o >> 2] = f, f = d + 8, h[f >> 2] = m, km[h[g >> 2]](e, d) ? (d = h[d >> 2], g = h[o >> 2], m = h[f >> 2], e >>= 2, h[c] = h[e], h[c + 1] = h[e + 1], h[c + 2] = h[e + 2], h[j] = d, h[j + 1] = g, h[j + 2] = m, j = 2) : j = 1);
  } else {
    if (n) {
      i = h[d >> 2];
      var o = d + 4, q = h[o >> 2], n = d + 8, p = h[n >> 2];
      f = d >> 2;
      e >>= 2;
      h[f] = h[e];
      h[f + 1] = h[e + 1];
      h[f + 2] = h[e + 2];
      h[j] = i;
      h[j + 1] = q;
      h[j + 2] = p;
      km[h[g >> 2]](d, c) ? (j = h[m], e = h[m + 1], g = h[m + 2], c >>= 2, h[c] = h[f], h[c + 1] = h[f + 1], h[c + 2] = h[f + 2], h[d >> 2] = j, h[o >> 2] = e, h[n >> 2] = g, j = 2) : j = 1;
    } else {
      j = 0;
    }
  }
  return j;
}

function Ws(c, d, e, g, f) {
  var i, j, m = Vs(c, d, e, f);
  if (km[h[f >> 2]](g, e)) {
    var n = h[e >> 2], o = e + 4, q = h[o >> 2], p = e + 8, r = h[p >> 2];
    j = e >> 2;
    i = g >> 2;
    h[j] = h[i];
    h[j + 1] = h[i + 1];
    h[j + 2] = h[i + 2];
    h[g >> 2] = n;
    h[g + 4 >> 2] = q;
    h[g + 8 >> 2] = r;
    g = m + 1;
    if (km[h[f >> 2]](e, d)) {
      q = h[d >> 2];
      i = d + 4;
      var r = h[i >> 2], n = d + 8, s = h[n >> 2], g = d >> 2;
      h[g] = h[j];
      h[g + 1] = h[j + 1];
      h[g + 2] = h[j + 2];
      h[e >> 2] = q;
      h[o >> 2] = r;
      h[p >> 2] = s;
      e = m + 2;
      km[h[f >> 2]](d, c) ? (f = h[c >> 2], e = h[c + 4 >> 2], j = h[c + 8 >> 2], c >>= 2, h[c] = h[g], h[c + 1] = h[g + 1], h[c + 2] = h[g + 2], h[d >> 2] = f, h[i >> 2] = e, h[n >> 2] = j, d = m + 3) : d = e;
    } else {
      d = g;
    }
  } else {
    d = m;
  }
  return d;
}

function Xs(c, d, e, g, f, i) {
  var j, m, n = Ws(c, d, e, g, i);
  if (km[h[i >> 2]](f, g)) {
    var o = h[g >> 2], q = g + 4, p = h[q >> 2], r = g + 8, s = h[r >> 2];
    m = g >> 2;
    j = f >> 2;
    h[m] = h[j];
    h[m + 1] = h[j + 1];
    h[m + 2] = h[j + 2];
    h[f >> 2] = o;
    h[f + 4 >> 2] = p;
    h[f + 8 >> 2] = s;
    f = n + 1;
    if (km[h[i >> 2]](g, e)) {
      p = h[e >> 2];
      j = e + 4;
      var s = h[j >> 2], o = e + 8, u = h[o >> 2], f = e >> 2;
      h[f] = h[m];
      h[f + 1] = h[m + 1];
      h[f + 2] = h[m + 2];
      h[g >> 2] = p;
      h[q >> 2] = s;
      h[r >> 2] = u;
      g = n + 2;
      km[h[i >> 2]](e, d) ? (r = h[d >> 2], m = d + 4, p = h[m >> 2], q = d + 8, s = h[q >> 2], g = d >> 2, h[g] = h[f], h[g + 1] = h[f + 1], h[g + 2] = h[f + 2], h[e >> 2] = r, h[j >> 2] = p, h[o >> 2] = s, e = n + 3, km[h[i >> 2]](d, c) ? (i = h[c >> 2], e = h[c + 4 >> 2], f = h[c + 8 >> 2], c >>= 2, h[c] = h[g], h[c + 1] = h[g + 1], h[c + 2] = h[g + 2], h[d >> 2] = i, h[m >> 2] = e, h[q >> 2] = f, d = n + 4) : d = e) : d = g;
    } else {
      d = f;
    }
  } else {
    d = n;
  }
  return d;
}

function Ys(c, d, e) {
  var g, f, i, j, m = Qf;
  Qf += 12;
  var n = (d - c) / 12 | 0;
  a : do {
    if (0 == n || 1 == n) {
      i = 1;
    } else {
      if (2 == n) {
        var o = d - 12;
        if (km[h[e >> 2]](o, c)) {
          var q = h[c >> 2];
          f = h[c + 4 >> 2];
          var p = h[c + 8 >> 2];
          j = c >> 2;
          i = o >> 2;
          h[j] = h[i];
          h[j + 1] = h[i + 1];
          h[j + 2] = h[i + 2];
          h[o >> 2] = q;
          h[d - 12 + 4 >> 2] = f;
          h[d - 12 + 8 >> 2] = p;
        }
        i = 1;
      } else {
        if (3 == n) {
          Vs(c, c + 12, d - 12, e), i = 1;
        } else {
          if (4 == n) {
            Ws(c, c + 12, c + 24, d - 12, e), i = 1;
          } else {
            if (5 == n) {
              Xs(c, c + 12, c + 24, c + 36, d - 12, e), i = 1;
            } else {
              q = c + 24;
              Vs(c, c + 12, q, e);
              i = m >> 2;
              j = c + 36;
              for (o = 0; ; ) {
                if (j == d) {
                  i = 1;
                  break a;
                }
                if (km[h[e >> 2]](j, q)) {
                  f = j >> 2;
                  h[i] = h[f];
                  h[i + 1] = h[f + 1];
                  h[i + 2] = h[f + 2];
                  for (f = j; ; ) {
                    f >>= 2;
                    g = q >> 2;
                    h[f] = h[g];
                    h[f + 1] = h[g + 1];
                    h[f + 2] = h[g + 2];
                    if (q == c) {
                      break;
                    }
                    p = q - 12;
                    if (km[h[e >> 2]](m, p)) {
                      f = q, q = p;
                    } else {
                      break;
                    }
                  }
                  h[g] = h[i];
                  h[g + 1] = h[i + 1];
                  h[g + 2] = h[i + 2];
                  o += 1;
                  if (8 == o) {
                    break;
                  }
                }
                q = j;
                j += 12;
              }
              i = j + 12 == d;
            }
          }
        }
      }
    }
  } while (0);
  Qf = m;
  return i;
}

function Zs(c, d, e, g) {
  var f, i, j, m, n, o, q, p, r, s, u, A, E = Qf;
  Qf += 32;
  var y, I = E + 16, C = c + 28, K = 0 < h[C >> 2];
  a : do {
    if (K) {
      var J = c + 24, M = c + 12, B = E, F = I, H = E + 4, P = I + 4, D = E + 8, Q = I + 8, O = E + 12, L = I + 12, jb = g, U = e, N = g + 4, ma = e + 4, na = d;
      A = d + 40 >> 2;
      var za = d + 36;
      u = d + 32 >> 2;
      s = d + 12 >> 2;
      r = d + 4 >> 2;
      p = d >> 2;
      q = d + 8 >> 2;
      o = d + 16 >> 2;
      for (var S = 0; ; ) {
        var T = k[J >> 2];
        n = T >> 2;
        var $ = T + 28 * S, Fa = h[M >> 2], Z = T + 28 * S + 20;
        km[h[h[Fa >> 2] + 24 >> 2]](Fa, E, e, h[Z >> 2]);
        var X = h[M >> 2];
        km[h[h[X >> 2] + 24 >> 2]](X, I, g, h[Z >> 2]);
        var ba = l[B >> 2], Da = l[F >> 2], Ea = l[H >> 2], lb = l[P >> 2], Qa = Ea < lb ? Ea : lb, qa = $, va = (x[0] = ba < Da ? ba : Da, w[0]), Y = (x[0] = Qa, w[0]) | 0;
        h[qa >> 2] = 0 | va;
        h[qa + 4 >> 2] = Y;
        var Ga = l[D >> 2], wa = l[Q >> 2], Ra = l[O >> 2], Za = l[L >> 2], $a = Ra > Za ? Ra : Za, La = T + 28 * S + 8, ab = (x[0] = Ga > wa ? Ga : wa, w[0]), kb = (x[0] = $a, w[0]) | 0;
        h[La >> 2] = 0 | ab;
        h[La + 4 >> 2] = kb;
        var fb = l[jb >> 2] - l[U >> 2], pb = l[N >> 2] - l[ma >> 2], ga = k[n + (7 * S | 0) + 6];
        y = -1 < ga ? h[s] > ga ? 5 : 4 : 4;
        4 == y && G(z.d, 135, z.Y, z.s);
        var da = h[r], bb = da;
        if (-1 == h[(bb + 24 >> 2) + (9 * ga | 0)]) {
          var ca = bb;
          m = ca >> 2;
          var ha = da;
        } else {
          G(z.d, 137, z.Y, z.qc);
          var ta = h[r], ca = ta;
          m = ca >> 2;
          ha = ta;
        }
        var ua = $;
        if (l[m + (9 * ga | 0)] > l[ua >> 2]) {
          var oa = T + 28 * S + 4;
          y = 12;
        } else {
          var ka = T + 28 * S + 4;
          l[m + (9 * ga | 0) + 1] > l[ka >> 2] ? (oa = ka, y = 12) : l[n + (7 * S | 0) + 2] > l[m + (9 * ga | 0) + 2] ? (oa = ka, y = 12) : l[n + (7 * S | 0) + 3] > l[m + (9 * ga | 0) + 3] ? (oa = ka, y = 12) : y = 42;
        }
        if (12 == y) {
          var xa = h[p] == ga;
          b : do {
            if (xa) {
              h[p] = -1;
            } else {
              var Ua = ha;
              j = Ua >> 2;
              var la = k[j + (9 * ga | 0) + 5], Sa = k[j + (9 * la | 0) + 5], cb = h[j + (9 * la | 0) + 6], qb = cb == ga ? h[j + (9 * la | 0) + 7] : cb;
              if (-1 == Sa) {
                h[p] = qb, h[j + (9 * qb | 0) + 5] = -1, y = -1 < la ? h[s] > la ? 30 : 29 : 29, 29 == y && G(z.d, 97, z.D, z.va), 0 < h[q] || G(z.d, 98, z.D, z.Ea), h[h[r] + 36 * la + 20 >> 2] = h[o], h[h[r] + 36 * la + 32 >> 2] = -1, h[o] = la, h[q] -= 1;
              } else {
                var xb = Ua + 36 * Sa + 24;
                h[xb >> 2] == la ? h[xb >> 2] = qb : h[j + (9 * Sa | 0) + 7] = qb;
                h[h[r] + 36 * qb + 20 >> 2] = Sa;
                y = -1 < la ? h[s] > la ? 23 : 22 : 22;
                22 == y && G(z.d, 97, z.D, z.va);
                0 < h[q] || G(z.d, 98, z.D, z.Ea);
                h[h[r] + 36 * la + 20 >> 2] = h[o];
                h[h[r] + 36 * la + 32 >> 2] = -1;
                h[o] = la;
                h[q] -= 1;
                for (var Pb = Sa; ; ) {
                  var Na = Yp(na, Pb), Ha = h[r];
                  i = Ha >> 2;
                  var pa = h[i + (9 * Na | 0) + 6], Ia = h[i + (9 * Na | 0) + 7], Oa = l[i + (9 * pa | 0)], Pa = l[i + (9 * Ia | 0)], Aa = l[i + (9 * pa | 0) + 1], ia = l[i + (9 * Ia | 0) + 1], Va = Aa < ia ? Aa : ia, ra = Ha + 36 * Na, Ka = (x[0] = Oa < Pa ? Oa : Pa, w[0]), db = (x[0] = Va, w[0]) | 0;
                  h[ra >> 2] = 0 | Ka;
                  h[ra + 4 >> 2] = db;
                  var ub = l[i + (9 * pa | 0) + 2], vb = l[i + (9 * Ia | 0) + 2], mb = l[i + (9 * pa | 0) + 3], gb = l[i + (9 * Ia | 0) + 3], nb = mb > gb ? mb : gb, Wa = Ha + 36 * Na + 8, ea = (x[0] = ub > vb ? ub : vb, w[0]), Ja = (x[0] = nb, w[0]) | 0;
                  h[Wa >> 2] = 0 | ea;
                  h[Wa + 4 >> 2] = Ja;
                  var Ba = h[r], Ta = h[(Ba + 32 >> 2) + (9 * pa | 0)], yb = h[(Ba + 32 >> 2) + (9 * Ia | 0)];
                  h[Ba + 36 * Na + 32 >> 2] = (Ta > yb ? Ta : yb) + 1;
                  var Xa = h[(h[r] + 20 >> 2) + (9 * Na | 0)];
                  if (-1 == Xa) {
                    break b;
                  } else {
                    Pb = Xa;
                  }
                }
              }
            }
          } while (0);
          var eb = l[ua >> 2] - .10000000149011612, Eb = l[oa >> 2] - .10000000149011612, zb = l[n + (7 * S | 0) + 2] + .10000000149011612, Nb = l[n + (7 * S | 0) + 3] + .10000000149011612, Qb = 2 * fb, Bb = 2 * pb;
          if (0 > Qb) {
            var Ib = eb + Qb, Jb = zb;
          } else {
            Ib = eb, Jb = zb + Qb;
          }
          if (0 > Bb) {
            var wb = Eb + Bb, Fb = Nb;
          } else {
            wb = Eb, Fb = Nb + Bb;
          }
          f = h[r] >> 2;
          l[f + (9 * ga | 0)] = Ib;
          l[f + (9 * ga | 0) + 1] = wb;
          l[f + (9 * ga | 0) + 2] = Jb;
          l[f + (9 * ga | 0) + 3] = Fb;
          Xp(na, ga);
          var Gb = h[A], ob = h[za >> 2];
          if (Gb == ob) {
            var Kb = h[u];
            h[za >> 2] = ob << 1;
            var hb = Nj(ob << 3);
            h[u] = hb;
            var rb = Kb;
            Wp(hb, rb, h[A] << 2);
            qp(rb);
            var W = h[A];
          } else {
            W = Gb;
          }
          h[(W << 2) + h[u] >> 2] = ga;
          h[A] += 1;
        }
        var ja = S + 1;
        if (ja < h[C >> 2]) {
          S = ja;
        } else {
          break a;
        }
      }
    }
  } while (0);
  Qf = E;
}

function $s(c, d, e, g, f, i) {
  var j, m, n, o, q = c >> 2;
  j = c + 40 >> 2;
  h[j] = d;
  h[q + 11] = e;
  h[q + 12] = g;
  h[q + 7] = 0;
  h[q + 9] = 0;
  h[q + 8] = 0;
  c >>= 2;
  h[c] = f;
  h[q + 1] = i;
  m = d << 2;
  d = f + 102796 >> 2;
  i = h[d];
  32 > i ? n = i : (G(z.j, 38, z.n, z.p), n = h[d]);
  i = f + 12 * n + 102412 >> 2;
  h[(f + 102416 >> 2) + (3 * n | 0)] = m;
  o = f + 102400 >> 2;
  var p = h[o];
  102400 < p + m ? (o = Nj(m), h[i] = o, a[f + 12 * n + 102420] = 1) : (h[i] = f + p, a[f + 12 * n + 102420] = 0, h[o] += m);
  n = f + 102404;
  m = h[n >> 2] + m;
  h[n >> 2] = m;
  f += 102408;
  n = h[f >> 2];
  h[f >> 2] = n > m ? n : m;
  h[d] += 1;
  h[q + 2] = h[i];
  f = h[c];
  i = e << 2;
  e = f + 102796 >> 2;
  d = h[e];
  32 > d ? m = d : (G(z.j, 38, z.n, z.p), m = h[e]);
  d = f + 12 * m + 102412;
  h[f + 12 * m + 102416 >> 2] = i;
  n = f + 102400 >> 2;
  o = h[n];
  102400 < o + i ? (n = Nj(i), h[d >> 2] = n, a[f + 12 * m + 102420] = 1) : (h[d >> 2] = f + o, a[f + 12 * m + 102420] = 0, h[n] += i);
  m = f + 102404;
  i = h[m >> 2] + i;
  h[m >> 2] = i;
  f += 102408;
  m = h[f >> 2];
  h[f >> 2] = m > i ? m : i;
  h[e] += 1;
  h[q + 3] = h[d >> 2];
  e = h[c];
  d = g << 2;
  g = e + 102796 >> 2;
  f = h[g];
  32 > f ? i = f : (G(z.j, 38, z.n, z.p), i = h[g]);
  f = e + 12 * i + 102412;
  h[e + 12 * i + 102416 >> 2] = d;
  m = e + 102400 >> 2;
  n = h[m];
  102400 < n + d ? (m = Nj(d), h[f >> 2] = m, a[e + 12 * i + 102420] = 1) : (h[f >> 2] = e + n, a[e + 12 * i + 102420] = 0, h[m] += d);
  i = e + 102404;
  d = h[i >> 2] + d;
  h[i >> 2] = d;
  e += 102408;
  i = h[e >> 2];
  h[e >> 2] = i > d ? i : d;
  h[g] += 1;
  h[q + 4] = h[f >> 2];
  f = h[c];
  d = 12 * h[j];
  g = f + 102796 >> 2;
  e = h[g];
  32 > e ? i = e : (G(z.j, 38, z.n, z.p), i = h[g]);
  e = f + 12 * i + 102412;
  h[f + 12 * i + 102416 >> 2] = d;
  m = f + 102400 >> 2;
  n = h[m];
  102400 < n + d ? (m = Nj(d), h[e >> 2] = m, a[f + 12 * i + 102420] = 1) : (h[e >> 2] = f + n, a[f + 12 * i + 102420] = 0, h[m] += d);
  i = f + 102404;
  d = h[i >> 2] + d;
  h[i >> 2] = d;
  f += 102408;
  i = h[f >> 2];
  h[f >> 2] = i > d ? i : d;
  h[g] += 1;
  h[q + 6] = h[e >> 2];
  c = h[c];
  e = 12 * h[j];
  j = c + 102796 >> 2;
  g = h[j];
  32 > g ? f = g : (G(z.j, 38, z.n, z.p), f = h[j]);
  g = c + 12 * f + 102412;
  h[c + 12 * f + 102416 >> 2] = e;
  d = c + 102400 >> 2;
  i = h[d];
  102400 < i + e ? (d = Nj(e), h[g >> 2] = d, a[c + 12 * f + 102420] = 1) : (h[g >> 2] = c + i, a[c + 12 * f + 102420] = 0, h[d] += e);
  f = c + 102404;
  e = h[f >> 2] + e;
  h[f >> 2] = e;
  c += 102408;
  f = h[c >> 2];
  h[c >> 2] = f > e ? f : e;
  h[j] += 1;
  h[q + 5] = h[g >> 2];
}

function jp(c) {
  var d, e, g, f, i, j, m, n, o, q, p, r, s, u, A, E, y, I, C, K, J, M, B, F, H, P, D, Q, O, L, jb, U, N, ma, na, za, S, T, $, Fa, Z, X, ba, Da, Ea, lb, Qa, qa, va, Y, Ga, wa, Ra, Za, $a, La, ab, kb, fb, pb, ga, da, bb, ca, ha, ta, ua, oa, ka, xa, Ua, la, Sa, cb, qb, xb, Pb, Na, Ha, pa, Ia, Oa, Pa, Aa, ia, Va, ra, Ka, db, ub, vb, mb, gb, nb, Wa, ea, Ja, Ba, Ta, yb, Xa, eb, Eb, zb, Nb, Qb, Bb, Ib, Jb, wb, Fb, Gb, ob, Kb, hb, rb = c >> 2, W = Qf;
  Qf += 1012;
  var ja, Ca = W + 16, Ub = W + 32, Ab = W + 52, Cb = W + 72, Xb = W + 116, dc = W + 168, Ma = W + 180, Lb = W + 272, fa = W + 296, sb = W + 396, tb = W + 412, V = W + 464, Yb = W + 596, gc = W + 604, Rb = W + 608, cc = W + 624, Zb = W + 640, wc = W + 660, Xc = W + 668, kc = W + 676, rc = W + 684, ec = W + 692, sc = W + 700, Mc = W + 708, Db = W + 728, Ya = W + 736, Wb = W + 768, lc = W + 812, Ec = W + 864, Nc = W + 880, oc = W + 888, $b = W + 896, od = W + 948, Yc = W + 956, Hb = W + 964, ac = W + 972, hc = W + 980, yc = W + 988, Zc = W + 996, tc = W + 1004;
  at(tc);
  var Oc = h[tc >> 2], zc = Math.floor(.0010000000474974513 * h[tc + 4 >> 2]);
  hb = c + 102868 >> 2;
  var bc = h[hb], pc = c + 102872;
  if (0 == (bc & 1)) {
    var hd = bc;
  } else {
    Ts(pc, pc);
    var Sc = h[hb] & -2, hd = h[hb] = Sc;
  }
  h[hb] = hd | 2;
  var xd = c + 102988, ic = .01666666753590107 * l[xd >> 2], uc = a[c + 102992] & 1;
  at(Zc);
  var Pd = h[Zc >> 2], yd = Math.floor(.0010000000474974513 * h[Zc + 4 >> 2]), Ob = c + 102932;
  Kb = Ob >> 2;
  var zd = h[Kb], Ac = 0 == zd;
  a : do {
    if (!Ac) {
      var fc = c + 102884, Mb = c + 102876, Vb = c + 102944, Tc = c + 102940, $c = zd;
      for (ob = $c >> 2; ; ) {
        var Ic = h[ob + 12], fe = h[ob + 13], Pc = h[ob + 14], Wd = h[ob + 15], Fc = h[Ic + 8 >> 2], mc = h[fe + 8 >> 2];
        Gb = $c + 4 >> 2;
        var Jc = h[Gb], Ad = 0 == (Jc & 8);
        b : do {
          if (Ad) {
            ja = 19;
          } else {
            var Bd = Fc;
            ja = 2 == h[mc >> 2] ? 7 : 2 == h[Fc >> 2] ? 7 : 12;
            c : do {
              if (7 == ja) {
                for (var ad = mc + 108; ; ) {
                  var bd = h[ad >> 2];
                  if (0 == bd) {
                    break;
                  }
                  if (h[bd >> 2] == Bd && 0 == (a[h[bd + 4 >> 2] + 61] & 1)) {
                    break c;
                  }
                  ad = bd + 12;
                }
                var pd = h[Tc >> 2];
                if (0 == pd) {
                  var Qd = Jc;
                } else {
                  if (km[h[h[pd >> 2] + 8 >> 2]](pd, Ic, fe)) {
                    Qd = h[Gb];
                  } else {
                    var Hd = h[ob + 3];
                    Qs(pc, $c);
                    var cd = Hd;
                    ja = 13;
                    break b;
                  }
                }
                h[Gb] = Qd & -9;
                ja = 19;
                break b;
              }
            } while (0);
            var Uc = h[ob + 3];
            Qs(pc, $c);
            cd = Uc;
            ja = 13;
          }
        } while (0);
        if (19 == ja) {
          if ((0 == (b[Fc + 4 >> 1] & 2) ? 0 : 0 != h[Fc >> 2]) | (0 == (b[mc + 4 >> 1] & 2) ? 0 : 0 != h[mc >> 2])) {
            var jc = h[(h[Ic + 24 >> 2] + 24 >> 2) + (7 * Pc | 0)], Vc = h[(h[fe + 24 >> 2] + 24 >> 2) + (7 * Wd | 0)];
            ja = -1 < jc ? h[fc >> 2] > jc ? 28 : 27 : 27;
            27 == ja && G(z.z, 159, z.R, z.s);
            var Bc = h[Mb >> 2];
            Fb = Bc >> 2;
            if (-1 < Vc) {
              if (h[fc >> 2] > Vc) {
                var id = Bc;
                wb = id >> 2;
                ja = 31;
              } else {
                ja = 30;
              }
            } else {
              ja = 30;
            }
            30 == ja && (G(z.z, 159, z.R, z.s), id = h[Mb >> 2], wb = id >> 2);
            if (0 < l[wb + (9 * Vc | 0)] - l[Fb + (9 * jc | 0) + 2] | 0 < l[wb + (9 * Vc | 0) + 1] - l[Fb + (9 * jc | 0) + 3] | 0 < l[Fb + (9 * jc | 0)] - l[wb + (9 * Vc | 0) + 2] | 0 < l[Fb + (9 * jc | 0) + 1] - l[wb + (9 * Vc | 0) + 3]) {
              var Sb = h[ob + 3];
              Qs(pc, $c);
              cd = Sb;
            } else {
              bt($c, h[Vb >> 2]), cd = h[ob + 3];
            }
          } else {
            cd = h[ob + 3];
          }
        }
        if (0 == cd) {
          break a;
        } else {
          $c = cd, ob = $c >> 2;
        }
      }
    }
  } while (0);
  at(yc);
  l[rb + 25750] = 1e3 * (h[yc >> 2] - Pd) + .0010000000474974513 * h[yc + 4 >> 2] - yd;
  var nc = c + 102995;
  if (0 != (a[nc] & 1)) {
    at(hc);
    var ge = h[hc >> 2], Id = Math.floor(.0010000000474974513 * h[hc + 4 >> 2]);
    Jb = c + 103008 >> 2;
    l[Jb] = 0;
    Ib = c + 103012 >> 2;
    l[Ib] = 0;
    Bb = c + 103016 >> 2;
    l[Bb] = 0;
    var qd = c + 102960, Rd = c + 68;
    $s($b, h[qd >> 2], h[rb + 25734], h[rb + 25741], Rd, h[rb + 25736]);
    var rd = c + 102952, Jd = h[rd >> 2], Cd = 0 == Jd;
    a : do {
      if (!Cd) {
        for (var Dd = Jd; ; ) {
          var dd = Dd + 4;
          b[dd >> 1] &= -2;
          var sd = h[Dd + 96 >> 2];
          if (0 == sd) {
            break a;
          } else {
            Dd = sd;
          }
        }
      }
    } while (0);
    var Wc = h[Kb], Kd = 0 == Wc;
    a : do {
      if (!Kd) {
        for (var Xd = Wc; ; ) {
          var Yd = Xd + 4;
          h[Yd >> 2] &= -2;
          var he = h[Xd + 12 >> 2];
          if (0 == he) {
            break a;
          } else {
            Xd = he;
          }
        }
      }
    } while (0);
    var xe = h[rb + 25739], Ge = 0 == xe;
    a : do {
      if (!Ge) {
        for (var ie = xe; ; ) {
          a[ie + 60] = 0;
          var Ld = h[ie + 12 >> 2];
          if (0 == Ld) {
            break a;
          } else {
            ie = Ld;
          }
        }
      }
    } while (0);
    var ed = k[qd >> 2], je = ed << 2;
    Qb = c + 102864 >> 2;
    var Zd = h[Qb];
    if (32 > Zd) {
      var jd = Zd;
    } else {
      G(z.j, 38, z.n, z.p), jd = h[Qb];
    }
    Nb = c + 12 * jd + 102480 >> 2;
    h[rb + (3 * jd | 0) + 25621] = je;
    zb = c + 102468 >> 2;
    var Qc = h[zb];
    if (102400 < Qc + je) {
      var Rc = Nj(je);
      h[Nb] = Rc;
      a[c + 12 * jd + 102488] = 1;
    } else {
      h[Nb] = c + (Qc + 68), a[c + 12 * jd + 102488] = 0, h[zb] += je;
    }
    var ye = c + 102472, $d = h[ye >> 2] + je;
    h[ye >> 2] = $d;
    var Qe = c + 102476, Re = h[Qe >> 2];
    h[Qe >> 2] = Re > $d ? Re : $d;
    h[Qb] += 1;
    var Bf = k[Nb];
    Eb = Bf >> 2;
    eb = $b + 28 >> 2;
    Xa = $b + 36 >> 2;
    yb = $b + 32 >> 2;
    var kf = $b + 40;
    Ta = $b + 8 >> 2;
    var Rf = $b + 44;
    Ba = $b + 12 >> 2;
    var ah = $b + 48;
    Ja = $b + 16 >> 2;
    var Se = c + 102976, He = c + 102968, lf = c + 102972;
    ea = $b + 20 >> 2;
    Wa = $b + 24 >> 2;
    var ke = ec + 4, mf = Ya + 4, Ie = Ya + 8, Lh = Ya + 12, Mh = Ya + 16, nf = Ya + 20, Te = Ya + 24, Cf = Ya + 28, bh = Wb + 4, Je = Wb + 8, Nh = Wb + 12, rg = Wb + 16, Sf = Wb + 20, ch = Wb + 24, Ue = Wb + 28, sg = Wb + 32, tg = Wb + 36;
    nb = $b >> 2;
    var Oh = Wb + 40, dh = 0 == uc, of = rc + 4, ug = kc + 4, Df = lc + 48;
    gb = lc + 40 >> 2;
    for (var vg = lc + 44, wg = Xc + 4, td = wc + 4, pf = lc + 36, kd = lc + 24, Ef = Rb + 8, ud = Rb + 12, Ed = cc + 8, Ff = cc + 12, ae = Zb + 8, Tf = Zb + 16, eh = sc + 4, fh = $b + 4, gh = lc + 32, xg = Mc + 16, Gf = lc + 28, Hf = rd; ; ) {
      var Fd = k[Hf >> 2];
      if (0 == Fd) {
        break;
      }
      mb = Fd + 4 >> 1;
      var ld = 34 == (b[mb] & 35);
      a : do {
        if (ld && 0 != h[Fd >> 2]) {
          h[eb] = 0;
          h[Xa] = 0;
          h[yb] = 0;
          h[Eb] = Fd;
          b[mb] |= 1;
          var xc = 1, hh = 0, yg = 0, Ve = 0;
          b : for (;;) {
            for (var ze = xc, qf = hh; ; ) {
              if (0 >= ze) {
                break b;
              }
              var Uf = ze - 1, le = h[(Uf << 2 >> 2) + Eb];
              vb = le + 4 >> 1;
              0 == (b[vb] & 32) && G(z.r, 445, z.O, z.hc);
              qf < h[kf >> 2] || G(z.o, 54, z.F, z.J);
              h[le + 8 >> 2] = qf;
              h[(qf << 2) + h[Ta] >> 2] = le;
              var If = qf + 1;
              h[eb] = If;
              var ih = b[vb];
              0 == (ih & 2) && (b[vb] = ih | 2, l[le + 144 >> 2] = 0);
              if (0 == h[le >> 2]) {
                ze = Uf, qf = If;
              } else {
                break;
              }
            }
            for (var Vf = le + 112, Cc = Uf, Ae = Ve; ; ) {
              var Jf = h[Vf >> 2];
              if (0 == Jf) {
                break;
              }
              var be = h[Jf + 4 >> 2];
              ub = be + 4 >> 2;
              if (6 == (h[ub] & 7)) {
                if (0 != (a[h[be + 48 >> 2] + 38] & 1)) {
                  var Sd = Cc, Wf = Ae;
                } else {
                  if (0 != (a[h[be + 52 >> 2] + 38] & 1)) {
                    Sd = Cc, Wf = Ae;
                  } else {
                    Ae < h[Rf >> 2] || G(z.o, 62, z.P, z.T);
                    var zg = Ae + 1;
                    h[Xa] = zg;
                    h[(Ae << 2) + h[Ba] >> 2] = be;
                    h[ub] |= 1;
                    var Xf = h[Jf >> 2];
                    db = Xf + 4 >> 1;
                    0 != (b[db] & 1) ? Sd = Cc : (Cc < ed || G(z.r, 495, z.O, z.Ha), h[(Cc << 2 >> 2) + Eb] = Xf, b[db] |= 1, Sd = Cc + 1);
                    Wf = zg;
                  }
                }
              } else {
                Sd = Cc, Wf = Ae;
              }
              Vf = Jf + 12;
              Cc = Sd;
              Ae = Wf;
            }
            for (var Yf = le + 108, Be = Cc, ce = yg; ; ) {
              var Ke = h[Yf >> 2];
              if (0 == Ke) {
                xc = Be;
                hh = If;
                yg = ce;
                Ve = Ae;
                continue b;
              }
              var rf = Ke + 4, Ag = h[rf >> 2];
              if (0 == (a[Ag + 60] & 1)) {
                var Zf = h[Ke >> 2];
                Ka = Zf + 4 >> 1;
                if (0 == (b[Ka] & 32)) {
                  var sf = Be, $f = ce;
                } else {
                  ce < h[ah >> 2] || G(z.o, 68, z.sb, z.$b);
                  var ag = ce + 1;
                  h[yb] = ag;
                  h[(ce << 2) + h[Ja] >> 2] = Ag;
                  a[h[rf >> 2] + 60] = 1;
                  0 != (b[Ka] & 1) ? sf = Be : (Be < ed || G(z.r, 524, z.O, z.Ha), h[(Be << 2 >> 2) + Eb] = Zf, b[Ka] |= 1, sf = Be + 1);
                  $f = ag;
                }
              } else {
                sf = Be, $f = ce;
              }
              Yf = Ke + 12;
              Be = sf;
              ce = $f;
            }
          }
          var jh = 0 == (a[Se] & 1);
          at(Db);
          var We = 0 < h[eb];
          b : do {
            if (We) {
              for (var me = 0; ; ) {
                var tf = h[h[Ta] + (me << 2) >> 2];
                ra = tf >> 2;
                var Kf = tf + 44, Ce = l[Kf >> 2], Bg = l[ra + 12], ne = l[ra + 14], bg = tf + 64, De = bg;
                Va = De >> 2;
                var oe = bg + 4;
                ia = oe >> 2;
                var Cg = h[ia], Md = (w[0] = h[Va], x[0]), cg = (w[0] = Cg, x[0]), Lf = l[ra + 18], uf = Kf, Dg = tf + 36, vd = uf;
                Aa = vd >> 2;
                var Xe = h[Aa], md = uf + 4;
                Pa = md >> 2;
                var kh = h[Pa], pe = Dg;
                Oa = pe >> 2;
                h[Oa] = Xe;
                var de = Dg + 4;
                Ia = de >> 2;
                h[Ia] = kh;
                l[ra + 13] = ne;
                if (2 == h[ra]) {
                  var Eg = l[ra + 35], Mi = l[ra + 30], Ni = 1 - .01666666753590107 * l[ra + 33], Ye = 1 > Ni ? Ni : 1, Fg = 0 > Ye ? 0 : Ye, dg = 1 - .01666666753590107 * l[ra + 34], Ph = 1 > dg ? dg : 1, Gg = (Lf + .01666666753590107 * l[ra + 32] * l[ra + 21]) * (0 > Ph ? 0 : Ph), Hg = (Md + .01666666753590107 * (l[He >> 2] * Eg + l[ra + 19] * Mi)) * Fg, Oj = (cg + .01666666753590107 * (l[lf >> 2] * Eg + l[ra + 20] * Mi)) * Fg;
                } else {
                  Gg = Lf, Hg = Md, Oj = cg;
                }
                var Oi = h[ea];
                l[(Oi >> 2) + (3 * me | 0)] = Ce;
                l[(Oi + 4 >> 2) + (3 * me | 0)] = Bg;
                l[(h[ea] + 8 >> 2) + (3 * me | 0)] = ne;
                var lh = h[Wa] + 12 * me, Qh = (x[0] = Hg, w[0]), mh = (x[0] = Oj, w[0]) | 0, nh = lh;
                h[nh >> 2] = 0 | Qh;
                var Td = lh + 4;
                h[Td >> 2] = mh;
                l[(h[Wa] + 8 >> 2) + (3 * me | 0)] = Gg;
                var eg = me + 1;
                if (eg < h[eb]) {
                  me = eg;
                } else {
                  break b;
                }
              }
            }
          } while (0);
          at(ec);
          var fg = h[ec >> 2], Pj = Math.floor(.0010000000474974513 * h[ke >> 2]);
          l[Ya >> 2] = .01666666753590107;
          l[mf >> 2] = 59.999996185302734;
          l[Ie >> 2] = ic;
          h[Lh >> 2] = 3;
          h[Mh >> 2] = 3;
          a[nf] = uc;
          var Pi = h[ea];
          h[Te >> 2] = Pi;
          var Rh = h[Wa];
          h[Cf >> 2] = Rh;
          l[Wb >> 2] = .01666666753590107;
          l[bh >> 2] = 59.999996185302734;
          l[Je >> 2] = ic;
          h[Nh >> 2] = 3;
          h[rg >> 2] = 3;
          a[Sf] = uc;
          h[ch >> 2] = h[Ba];
          h[Ue >> 2] = h[Xa];
          h[sg >> 2] = Pi;
          h[tg >> 2] = Rh;
          h[Oh >> 2] = h[nb];
          ct(lc, Wb);
          dt(lc);
          b : do {
            if (dh) {
              var Mf = 0;
              ja = 119;
            } else {
              var oh = h[Df >> 2];
              if (0 < oh) {
                var Sh = h[gb];
                pa = Sh >> 2;
                for (var Ig = h[Gf >> 2], Nd = 0; ; ) {
                  var Qi = h[pa + (38 * Nd | 0) + 28], Th = h[pa + (38 * Nd | 0) + 29], Jg = l[pa + (38 * Nd | 0) + 30], Uh = l[pa + (38 * Nd | 0) + 32], Ri = l[pa + (38 * Nd | 0) + 31], Ee = l[pa + (38 * Nd | 0) + 33], Vh = h[pa + (38 * Nd | 0) + 36], Kg = Ig + 12 * Qi, Ze = Kg;
                  Ha = Ze >> 2;
                  var Le = Kg + 4;
                  Na = Le >> 2;
                  var Si = h[Na], Lg = (w[0] = h[Ha], x[0]), Ti = (w[0] = Si, x[0]), ph = Ig + 12 * Qi + 8, Ui = l[ph >> 2], Fe = Ig + 12 * Th, Wh = h[Fe + 4 >> 2], vf = (w[0] = h[Fe >> 2], x[0]), Xh = (w[0] = Wh, x[0]), qh = Ig + 12 * Th + 8, Yh = l[qh >> 2], Vi = Sh + 152 * Nd + 72, Qj = h[Vi + 4 >> 2], Zh = (w[0] = h[Vi >> 2], x[0]), $h = (w[0] = Qj, x[0]), Rj = -1 * Zh, ai = 0 < Vh;
                  c : do {
                    if (ai) {
                      for (var Mg = Xh, wf = vf, bi = Ti, rh = Lg, Wi = Ui, Sj = Yh, $e = 0; ; ) {
                        var ci = l[pa + (38 * Nd | 0) + (9 * $e | 0) + 4], gg = l[pa + (38 * Nd | 0) + (9 * $e | 0) + 5], Ng = Zh * ci + $h * gg, hg = $h * ci + Rj * gg, di = Wi - Uh * (l[pa + (38 * Nd | 0) + (9 * $e | 0)] * hg - l[pa + (38 * Nd | 0) + (9 * $e | 0) + 1] * Ng), sh = rh - Ng * Jg, th = bi - hg * Jg, ei = Sj + Ee * (l[pa + (38 * Nd | 0) + (9 * $e | 0) + 2] * hg - l[pa + (38 * Nd | 0) + (9 * $e | 0) + 3] * Ng), fi = wf + Ng * Ri, gi = Mg + hg * Ri, hi = $e + 1;
                        if (hi == Vh) {
                          var ig = gi, Xi = fi, Tj = th, ii = sh, ji = di, Yi = ei;
                          break c;
                        } else {
                          Mg = gi, wf = fi, bi = th, rh = sh, Wi = di, Sj = ei, $e = hi;
                        }
                      }
                    } else {
                      ig = Xh, Xi = vf, Tj = Ti, ii = Lg, ji = Ui, Yi = Yh;
                    }
                  } while (0);
                  var Zi = (x[0] = ii, w[0]), Uj = (x[0] = Tj, w[0]) | 0;
                  h[Kg >> 2] = 0 | Zi;
                  h[Kg + 4 >> 2] = Uj;
                  l[ph >> 2] = ji;
                  var ki = (x[0] = Xi, w[0]), $i = (x[0] = ig, w[0]) | 0, vd = Fe;
                  Aa = vd >> 2;
                  h[Aa] = 0 | ki;
                  md = Fe + 4;
                  Pa = md >> 2;
                  h[Pa] = $i;
                  l[qh >> 2] = Yi;
                  var qe = Nd + 1;
                  if (qe < oh) {
                    Nd = qe;
                  } else {
                    Mf = 0;
                    break b;
                  }
                }
              } else {
                Mf = 0;
              }
            }
          } while (0);
          for (; Mf < h[yb]; ) {
            var Vj = h[h[Ja] + (Mf << 2) >> 2];
            km[h[h[Vj >> 2] + 28 >> 2]](Vj, Ya);
            Mf += 1;
          }
          at(rc);
          var aj = 1e3 * (h[rc >> 2] - fg) + .0010000000474974513 * h[of >> 2] - Pj;
          at(kc);
          for (var li = h[kc >> 2], bj = Math.floor(.0010000000474974513 * h[ug >> 2]), uh = 0; ; ) {
            if (3 > uh) {
              var Og = 0;
            } else {
              break;
            }
            for (; Og < h[yb]; ) {
              var mi = h[h[Ja] + (Og << 2) >> 2];
              km[h[h[mi >> 2] + 32 >> 2]](mi, Ya);
              Og += 1;
            }
            et(lc);
            uh += 1;
          }
          var ni = k[Df >> 2], af = 0 < ni;
          b : do {
            if (af) {
              var oi = h[gb];
              Pb = oi >> 2;
              for (var vh = h[vg >> 2], xf = 0; ; ) {
                var yf = h[vh + (h[Pb + (38 * xf | 0) + 37] << 2) >> 2], cj = oi + 152 * xf + 144, dj = 0 < h[cj >> 2];
                c : do {
                  if (dj) {
                    for (var jg = 0; ; ) {
                      l[(yf + 72 >> 2) + (5 * jg | 0)] = l[Pb + (38 * xf | 0) + (9 * jg | 0) + 4];
                      l[(yf + 76 >> 2) + (5 * jg | 0)] = l[Pb + (38 * xf | 0) + (9 * jg | 0) + 5];
                      var ej = jg + 1;
                      if (ej < h[cj >> 2]) {
                        jg = ej;
                      } else {
                        break c;
                      }
                    }
                  }
                } while (0);
                var pi = xf + 1;
                if (pi < ni) {
                  xf = pi;
                } else {
                  break b;
                }
              }
            }
          } while (0);
          at(Xc);
          var fj = 1e3 * (h[Xc >> 2] - li) + .0010000000474974513 * h[wg >> 2] - bj, qi = 0 < h[eb];
          b : do {
            if (qi) {
              for (var Me = 0; ; ) {
                var gj = h[ea], kg = gj + 12 * Me, lg = h[kg + 4 >> 2], Wj = (w[0] = h[kg >> 2], x[0]), ri = (w[0] = lg, x[0]), hj = l[(gj + 8 >> 2) + (3 * Me | 0)], Xj = h[Wa], Pg = Xj + 12 * Me, Qg = Pg;
                xb = Qg >> 2;
                var Rg = Pg + 4;
                qb = Rg >> 2;
                var Yj = h[qb], wh = (w[0] = h[xb], x[0]), si = (w[0] = Yj, x[0]), zf = l[(Xj + 8 >> 2) + (3 * Me | 0)], Nf = .01666666753590107 * wh, xh = .01666666753590107 * si, ti = Nf * Nf + xh * xh;
                if (4 < ti) {
                  var Uk = 2 / bn(ti), ij = wh * Uk, jj = si * Uk;
                } else {
                  ij = wh, jj = si;
                }
                var kj = .01666666753590107 * zf, Vk = 2.4674012660980225 < kj * kj ? zf * (1.5707963705062866 / (0 < kj ? kj : -kj)) : zf, Wk = ri + .01666666753590107 * jj, kn = hj + .01666666753590107 * Vk, Xk = (x[0] = Wj + .01666666753590107 * ij, w[0]), vp = (x[0] = Wk, w[0]), wp = 0 | Xk, xp = vp | 0, Ze = kg;
                Ha = Ze >> 2;
                h[Ha] = wp;
                Le = kg + 4;
                Na = Le >> 2;
                h[Na] = xp;
                l[(h[ea] + 8 >> 2) + (3 * Me | 0)] = kn;
                var ln = h[Wa] + 12 * Me, yp = (x[0] = ij, w[0]), zp = (x[0] = jj, w[0]) | 0, Yk = ln;
                h[Yk >> 2] = 0 | yp;
                var Af = ln + 4;
                h[Af >> 2] = zp;
                l[(h[Wa] + 8 >> 2) + (3 * Me | 0)] = Vk;
                var ui = Me + 1;
                if (ui < h[eb]) {
                  Me = ui;
                } else {
                  break b;
                }
              }
            }
          } while (0);
          at(wc);
          var Zj = h[wc >> 2], $j = Math.floor(.0010000000474974513 * h[td >> 2]), Sg = k[pf >> 2];
          cb = Sg >> 2;
          for (var lj = h[kd >> 2], vi = 0; ; ) {
            if (3 <= vi) {
              var wi = 1;
              break;
            }
            b : do {
              if (af) {
                for (var Ne = 0, ak = 0; ; ) {
                  var mn = Sg + 88 * Ne, Zk = h[cb + (22 * Ne | 0) + 8], yh = h[cb + (22 * Ne | 0) + 9], bk = Sg + 88 * Ne + 48, Of = bk;
                  Sa = Of >> 2;
                  var xi = bk + 4;
                  la = xi >> 2;
                  var $k = h[la], ck = (w[0] = h[Sa], x[0]), dk = (w[0] = $k, x[0]), mj = l[cb + (22 * Ne | 0) + 10], al = l[cb + (22 * Ne | 0) + 16], nn = Sg + 88 * Ne + 56, nh = nn, Td = nn + 4, Ap = h[Td >> 2], bl = (w[0] = h[nh >> 2], x[0]), cl = (w[0] = Ap, x[0]), ek = l[cb + (22 * Ne | 0) + 11], dl = l[cb + (22 * Ne | 0) + 17], el = h[cb + (22 * Ne | 0) + 21], nj = lj + 12 * Zk, oj = nj, pj = nj + 4, on = h[pj >> 2], fl = (w[0] = h[oj >> 2], x[0]), gl = (w[0] = on, x[0]), hl = lj + 12 * Zk + 8, fk = l[hl >> 2], qj = lj + 12 * yh, pn = h[qj + 4 >> 2], il = (w[0] = h[qj >> 2], x[0]), qn = (w[0] = pn, x[0]), rn = lj + 12 * yh + 8, jl = l[rn >> 2], Bp = 0 < el;
                  c : do {
                    if (Bp) {
                      for (var Cp = mj + ek, rj = qn, gk = il, hk = gl, ik = fl, jk = fk, kk = jl, kl = ak, ll = 0; ; ) {
                        var zh = Nr(jk);
                        l[Ef >> 2] = zh;
                        var sj = Is(jk);
                        l[ud >> 2] = sj;
                        var yi = Nr(kk);
                        l[Ed >> 2] = yi;
                        var zi = Is(kk);
                        l[Ff >> 2] = zi;
                        var ml = hk - (zh * ck + sj * dk), nl = (x[0] = ik - (sj * ck - zh * dk), w[0]), lk = (x[0] = ml, w[0]) | 0, Ai = Rb;
                        h[Ai >> 2] = 0 | nl;
                        var tj = Rb + 4;
                        h[tj >> 2] = lk;
                        var mk = rj - (yi * bl + zi * cl), ol = (x[0] = gk - (zi * bl - yi * cl), w[0]), nk = (x[0] = mk, w[0]) | 0, ok = cc;
                        h[ok >> 2] = 0 | ol;
                        var Bi = cc + 4;
                        h[Bi >> 2] = nk;
                        ft(Zb, mn, Rb, cc, ll);
                        var uj = Zb, pl = Zb + 4, sn = h[pl >> 2], pk = (w[0] = h[uj >> 2], x[0]), qk = (w[0] = sn, x[0]), vj = ae, Ah = ae + 4, tn = h[Ah >> 2], ql = (w[0] = h[vj >> 2], x[0]), rl = (w[0] = tn, x[0]), sl = l[Tf >> 2], tl = ql - ik, wj = rl - hk, ul = ql - gk, vl = rl - rj, wl = kl < sl ? kl : sl, xl = .20000000298023224 * (sl + .004999999888241291), yl = 0 > xl ? xl : 0, zl = tl * qk - wj * pk, Al = ul * qk - vl * pk, rk = Cp + al * zl * zl + dl * Al * Al, Bl = 0 < rk ? -(-.20000000298023224 > yl ? -.20000000298023224 : yl) / rk : 0, xj = pk * Bl, yj = qk * Bl, Cl = ik - xj * mj, Dl = hk - yj * mj, El = jk - al * (tl * yj - wj * xj), sk = gk + xj * ek, un = rj + yj * ek, vn = kk + dl * (ul * yj - vl * xj), wn = ll + 1;
                        if (wn == el) {
                          var xn = un, yn = sk, tk = Dl, uk = Cl, zn = El, An = vn, zj = wl;
                          break c;
                        } else {
                          rj = un, gk = sk, hk = Dl, ik = Cl, jk = El, kk = vn, kl = wl, ll = wn;
                        }
                      }
                    } else {
                      xn = qn, yn = il, tk = gl, uk = fl, zn = fk, An = jl, zj = ak;
                    }
                  } while (0);
                  var Fl = (x[0] = uk, w[0]), Dp = (x[0] = tk, w[0]) | 0, Ze = nj;
                  Ha = Ze >> 2;
                  h[Ha] = 0 | Fl;
                  Le = nj + 4;
                  Na = Le >> 2;
                  h[Na] = Dp;
                  l[hl >> 2] = zn;
                  var Ep = (x[0] = yn, w[0]), Fp = (x[0] = xn, w[0]) | 0, Bh = qj;
                  Ua = Bh >> 2;
                  h[Ua] = 0 | Ep;
                  var Ch = qj + 4;
                  xa = Ch >> 2;
                  h[xa] = Fp;
                  l[rn >> 2] = An;
                  var Gl = Ne + 1;
                  if (Gl < ni) {
                    Ne = Gl, ak = zj;
                  } else {
                    var vk = zj;
                    break b;
                  }
                }
              } else {
                vk = 0;
              }
            } while (0);
            for (var Hl = -.014999999664723873 <= vk, wk = 0, Tg = 1; wk < h[yb]; ) {
              var Dh = h[h[Ja] + (wk << 2) >> 2], Il = km[h[h[Dh >> 2] + 36 >> 2]](Dh, Ya), Bn = Tg & Il, wk = wk + 1, Tg = Bn;
            }
            if (Hl & Tg) {
              wi = 0;
              break;
            }
            vi += 1;
          }
          var Gp = 0 < h[eb];
          b : do {
            if (Gp) {
              for (var Eh = 0; ; ) {
                var Ci = h[h[Ta] + (Eh << 2) >> 2];
                ka = Ci >> 2;
                var Jl = h[ea] + 12 * Eh, Aj = Ci + 44, Kl = Jl, xk = h[Kl >> 2], Di = Jl + 4, Ei = h[Di >> 2];
                h[Aj >> 2] = xk;
                h[Aj + 4 >> 2] = Ei;
                var yk = l[(h[ea] + 8 >> 2) + (3 * Eh | 0)];
                l[ka + 14] = yk;
                var Cn = h[Wa] + 12 * Eh, Ll = Ci + 64, vd = Cn;
                Aa = vd >> 2;
                var Hp = h[Aa], md = Cn + 4;
                Pa = md >> 2;
                var Ip = h[Pa], pe = Ll;
                Oa = pe >> 2;
                h[Oa] = Hp;
                de = Ll + 4;
                Ia = de >> 2;
                h[Ia] = Ip;
                l[ka + 18] = l[(h[Wa] + 8 >> 2) + (3 * Eh | 0)];
                var zk = Nr(yk);
                l[ka + 5] = zk;
                var Bj = Is(yk);
                l[ka + 6] = Bj;
                var Dn = Ci + 12, Ak = l[ka + 7], Bk = l[ka + 8], Ck = Bj * Ak - zk * Bk, En = zk * Ak + Bj * Bk, Fn = (w[0] = xk, x[0]) - Ck, Gn = (w[0] = Ei, x[0]) - En, Dk = Dn, Ek = (x[0] = Fn, w[0]), Cj = (x[0] = Gn, w[0]) | 0;
                h[Dk >> 2] = 0 | Ek;
                h[Dk + 4 >> 2] = Cj;
                var Ml = Eh + 1;
                if (Ml < h[eb]) {
                  Eh = Ml;
                } else {
                  break b;
                }
              }
            }
          } while (0);
          at(sc);
          var Jp = 1e3 * (h[sc >> 2] - Zj) + .0010000000474974513 * h[eh >> 2] - $j, Nl = k[gb];
          oa = Nl >> 2;
          var Kp = 0 == h[fh >> 2];
          b : do {
            if (Kp) {
              ja = 171;
            } else {
              if (0 < h[Xa]) {
                for (var Fi = 0; ; ) {
                  var Hn = h[h[Ba] + (Fi << 2) >> 2], Dj = h[oa + (38 * Fi | 0) + 36];
                  h[xg >> 2] = Dj;
                  var In = 0 < Dj;
                  c : do {
                    if (In) {
                      for (var Fh = 0; ; ) {
                        l[Mc + (Fh << 2) >> 2] = l[oa + (38 * Fi | 0) + (9 * Fh | 0) + 4];
                        l[Mc + (Fh << 2) + 8 >> 2] = l[oa + (38 * Fi | 0) + (9 * Fh | 0) + 5];
                        var Ol = Fh + 1;
                        if (Ol == Dj) {
                          break c;
                        } else {
                          Fh = Ol;
                        }
                      }
                    }
                  } while (0);
                  var Pl = h[fh >> 2];
                  km[h[h[Pl >> 2] + 20 >> 2]](Pl, Hn, Mc);
                  var Ql = Fi + 1;
                  if (Ql < h[Xa]) {
                    Fi = Ql;
                  } else {
                    break b;
                  }
                }
              }
            }
          } while (0);
          b : do {
            if (!jh && 0 < h[eb]) {
              for (var Ej = 3.4028234663852886e+38, Rl = 0; ; ) {
                var Gh = h[h[Ta] + (Rl << 2) >> 2], Jn = 0 == h[Gh >> 2];
                c : do {
                  if (Jn) {
                    var Fj = Ej;
                  } else {
                    var Lp = 0 == (b[Gh + 4 >> 1] & 4);
                    do {
                      if (!Lp) {
                        var Kn = l[Gh + 72 >> 2];
                        if (.001218469929881394 >= Kn * Kn) {
                          var Sl = l[Gh + 64 >> 2], Tl = l[Gh + 68 >> 2];
                          if (9999999747378752e-20 >= Sl * Sl + Tl * Tl) {
                            var Ul = Gh + 144, Ug = l[Ul >> 2] + .01666666753590107;
                            l[Ul >> 2] = Ug;
                            Fj = Ej < Ug ? Ej : Ug;
                            break c;
                          }
                        }
                      }
                    } while (0);
                    Fj = l[Gh + 144 >> 2] = 0;
                  }
                } while (0);
                var Vl = Rl + 1, Wl = k[eb];
                if (Vl < Wl) {
                  Ej = Fj, Rl = Vl;
                } else {
                  break;
                }
              }
              if (0 < Wl & ((.5 > Fj | wi) ^ 1)) {
                for (var Fk = 0; ; ) {
                  var Xl = k[h[Ta] + (Fk << 2) >> 2];
                  ua = Xl >> 2;
                  var Yl = Xl + 4;
                  b[Yl >> 1] &= -3;
                  l[ua + 36] = 0;
                  l[ua + 16] = 0;
                  l[ua + 17] = 0;
                  l[ua + 18] = 0;
                  l[ua + 19] = 0;
                  l[ua + 20] = 0;
                  l[ua + 21] = 0;
                  var Ln = Fk + 1;
                  if (Ln < h[eb]) {
                    Fk = Ln;
                  } else {
                    break b;
                  }
                }
              }
            }
          } while (0);
          var Zl = h[gh >> 2];
          Ks(Zl, Nl);
          Ks(Zl, Sg);
          l[Jb] += aj;
          l[Ib] += fj;
          l[Bb] += Jp;
          var Mn = h[eb];
          if (0 < Mn) {
            for (var Mp = h[Ta], Gk = 0; ; ) {
              var $l = h[Mp + (Gk << 2) >> 2];
              if (0 == h[$l >> 2]) {
                var Nn = $l + 4;
                b[Nn >> 1] &= -2;
              }
              var On = Gk + 1;
              if (On < Mn) {
                Gk = On;
              } else {
                break a;
              }
            }
          }
        }
      } while (0);
      Hf = Fd + 96;
    }
    Ks(Rd, Bf);
    at(Nc);
    for (var Pn = h[Nc >> 2], am = Math.floor(.0010000000474974513 * h[Nc + 4 >> 2]), Qn = Ec + 8, bm = Ec + 12, cm = rd; ; ) {
      var Oe = h[cm >> 2];
      if (0 == Oe) {
        break;
      }
      var Rn = 0 == (b[Oe + 4 >> 1] & 1);
      a : do {
        if (!Rn && 0 != h[Oe >> 2]) {
          var dm = l[Oe + 52 >> 2], Hk = Nr(dm);
          l[Qn >> 2] = Hk;
          var Ik = Is(dm);
          l[bm >> 2] = Ik;
          var em = l[Oe + 28 >> 2], fm = l[Oe + 32 >> 2], Sn = l[Oe + 40 >> 2] - (Hk * em + Ik * fm), Np = (x[0] = l[Oe + 36 >> 2] - (Ik * em - Hk * fm), w[0]), Tn = (x[0] = Sn, w[0]), Op = 0 | Np, Pp = Tn | 0, Bh = Ec;
          Ua = Bh >> 2;
          h[Ua] = Op;
          Ch = Ec + 4;
          xa = Ch >> 2;
          h[xa] = Pp;
          var Un = h[Oe + 88 >> 2] + 102872, gm = h[Oe + 100 >> 2];
          if (0 != gm) {
            for (var Qp = Oe + 12, hm = gm; ; ) {
              Zs(hm, Un, Ec, Qp);
              var im = h[hm + 4 >> 2];
              if (0 == im) {
                break a;
              } else {
                hm = im;
              }
            }
          }
        }
      } while (0);
      cm = Oe + 96;
    }
    Ts(pc, pc);
    at(oc);
    l[rb + 25755] = 1e3 * (h[oc >> 2] - Pn) + .0010000000474974513 * h[oc + 4 >> 2] - am;
    Ks(h[nb], h[ea]);
    Ks(h[nb], h[Wa]);
    Ks(h[nb], h[Ja]);
    var Jk = h[nb];
    Ks(Jk, h[Ba]);
    Ks(Jk, h[Ta]);
    at(ac);
    l[rb + 25751] = 1e3 * (h[ac >> 2] - ge) + .0010000000474974513 * h[ac + 4 >> 2] - Id;
  }
  if (0 != (a[c + 102993] & 1)) {
    at(Hb);
    var Vn = h[Hb >> 2], jm = Math.floor(.0010000000474974513 * h[Hb + 4 >> 2]);
    ta = V >> 2;
    var cB = c + 68;
    ha = c + 102944 >> 2;
    $s(tb, 64, 32, 0, cB, h[ha]);
    var dB = 0 == (a[nc] & 1);
    a : do {
      if (!dB) {
        var Ot = h[rb + 25738], eB = 0 == Ot;
        b : do {
          if (!eB) {
            for (var Yn = Ot; ; ) {
              var Pt = Yn + 4;
              b[Pt >> 1] &= -2;
              l[Yn + 60 >> 2] = 0;
              var Qt = h[Yn + 96 >> 2];
              if (0 == Qt) {
                break b;
              } else {
                Yn = Qt;
              }
            }
          }
        } while (0);
        var Rt = h[Kb];
        if (0 != Rt) {
          var Zn = Rt;
          for (ca = Zn >> 2; ; ) {
            var St = Zn + 4;
            h[St >> 2] &= -34;
            h[ca + 32] = 0;
            l[ca + 33] = 1;
            var Tt = h[ca + 3];
            if (0 == Tt) {
              break a;
            } else {
              Zn = Tt, ca = Zn >> 2;
            }
          }
        }
      }
    } while (0);
    var Ut = V + 16, Vt = V + 20, Wt = V + 24;
    bb = V + 44 >> 2;
    da = V + 48 >> 2;
    var Xt = V + 52, $p = V + 28, Yt = V + 56, Zt = V + 92, $t = V + 128;
    ga = tb + 28 >> 2;
    pb = tb + 36 >> 2;
    var fB = tb + 32, au = tb + 40;
    fb = tb + 8 >> 2;
    var bu = tb + 44;
    kb = tb + 12 >> 2;
    var gB = Yb + 4, hB = sb + 8, iB = sb + 12, jB = c + 102994;
    ab = tb + 20 >> 2;
    La = tb + 24 >> 2;
    var kB = Cb + 24, lB = Cb + 28, mB = Cb + 40, nB = Cb + 4, oB = Cb + 8, pB = Cb + 12, qB = Cb + 16, rB = Cb + 20, sB = Cb + 32, tB = Cb + 36, uB = Xb + 48, cu = Xb + 36, vB = Xb + 24, wB = W + 8, xB = W + 12, yB = Ca + 8, zB = Ca + 12, du = Ub + 8, AB = Ub + 16, BB = Xb + 40, CB = tb + 4, DB = Xb + 32, EB = Ab + 16;
    $a = Ma >> 2;
    var FB = V + 60, GB = V + 64, HB = V + 68, IB = V + 72, JB = V + 76, KB = V + 80, LB = V + 84, MB = V + 88, NB = V + 96, OB = V + 100, PB = V + 104, QB = V + 108, RB = V + 112, SB = V + 116, TB = V + 120, UB = V + 124, eu = dc + 4;
    Za = Ma + 28 >> 2;
    Ra = $p >> 2;
    var VB = Ma + 88, WB = Ma + 56, XB = Ma + 60, YB = Ma + 64, ZB = Ma + 68, $B = Ma + 72, aC = Ma + 76, bC = Ma + 80, cC = Ma + 84, dC = Lb + 16;
    wa = fa >> 2;
    Ga = fa + 4 >> 2;
    var eC = fa + 8, fC = fa + 12, gC = fa + 16, hC = fa + 20, iC = fa + 24, jC = fa + 28, kC = fa + 32, lC = fa + 36, mC = fa + 40, nC = fa + 44, oC = fa + 48, pC = fa + 52, qC = fa + 56, rC = fa + 60, sC = fa + 64, tC = fa + 68, uC = fa + 72, vC = fa + 76, wC = fa + 16, xC = fa + 20, yC = fa + 24, zC = fa + 28, AC = fa + 32, BC = fa + 36, CC = fa + 12, DC = fa + 52, EC = fa + 56, FC = fa + 60, GC = fa + 64, HC = fa + 68, IC = fa + 72, JC = fa + 48;
    Y = fa + 80 >> 2;
    var aq = dc + 9, Gi = fa + 92;
    va = Gi >> 2;
    qa = fa + 96 >> 2;
    Qa = Gi >> 2;
    var KC = dc + 10, $n = fa + 84, LC = fa + 8, MC = fa + 44;
    lb = fa + 92 >> 2;
    for (var fu = fa + 84, gu = fa + 88, se = 0, Ud = 1, ao = Ob; ; ) {
      var lm = k[ao >> 2];
      Ea = lm >> 2;
      if (0 == lm) {
        if (0 == se | .9999988079071045 < Ud) {
          var hu = 1, iu = h[fb], ju = h[kb], ku = h[ab], lu = h[La];
          break;
        } else {
          var wd = k[h[se + 48 >> 2] + 8 >> 2], Vd = k[h[se + 52 >> 2] + 8 >> 2];
          Da = wd + 28 >> 2;
          var mu = l[Da];
          ba = wd + 32 >> 2;
          var nu = l[ba], ou = wd + 36, pu = l[ou >> 2];
          X = wd + 40 >> 2;
          var qu = l[X];
          Z = wd + 44 >> 2;
          var ru = l[Z];
          Fa = wd + 48 >> 2;
          var su = l[Fa];
          $ = wd + 52 >> 2;
          var tu = l[$];
          T = wd + 56 >> 2;
          var uu = l[T];
          S = wd + 60 >> 2;
          var bq = l[S];
          za = Vd + 28 >> 2;
          var NC = l[za];
          na = Vd + 32 >> 2;
          var OC = l[na], vu = Vd + 36, PC = l[vu >> 2];
          ma = Vd + 40 >> 2;
          var QC = l[ma];
          N = Vd + 44 >> 2;
          var RC = l[N];
          U = Vd + 48 >> 2;
          var SC = l[U];
          jb = Vd + 52 >> 2;
          var TC = l[jb];
          L = Vd + 56 >> 2;
          var UC = l[L];
          O = Vd + 60 >> 2;
          var VC = l[O];
          if (1 > bq) {
            var cq = bq, wu = pu, xu = qu, yu = ru, zu = su, Au = tu, Bu = uu, dq = mu, eq = nu, Cu = wd + 36;
          } else {
            G(z.B, 715, z.w, z.t);
            var Du = wd + 36, cq = l[S], wu = l[Du >> 2], xu = l[X], yu = l[Z], zu = l[Fa], Au = l[$], Bu = l[T], dq = l[Da], eq = l[ba], Cu = Du;
          }
          var bo = (Ud - cq) / (1 - cq), fq = 1 - bo, Eu = wu * fq + yu * bo, Fu = xu * fq + zu * bo, Gu = Cu, WC = (x[0] = Eu, w[0]), XC = (x[0] = Fu, w[0]), Hu = 0 | WC, Iu = XC | 0, vd = Gu;
          Aa = vd >> 2;
          h[Aa] = Hu;
          md = Gu + 4;
          Pa = md >> 2;
          h[Pa] = Iu;
          var co = fq * Au + bo * Bu;
          l[$] = co;
          l[S] = Ud;
          var Ju = wd + 44, gq = Ju;
          h[gq >> 2] = Hu;
          var hq = Ju + 4;
          h[hq >> 2] = Iu;
          l[T] = co;
          var iq = Nr(co), Ku = wd + 20;
          l[Ku >> 2] = iq;
          var jq = Is(co), Lu = wd + 24;
          l[Lu >> 2] = jq;
          var YC = Fu - (iq * dq + jq * eq), eo = wd + 12, ZC = (x[0] = Eu - (jq * dq - iq * eq), w[0]), $C = (x[0] = YC, w[0]) | 0, kq = eo;
          h[kq >> 2] = 0 | ZC;
          var lq = eo + 4;
          h[lq >> 2] = $C;
          var Mu = l[O];
          if (1 > Mu) {
            var mq = Mu;
          } else {
            G(z.B, 715, z.w, z.t), mq = l[O];
          }
          var fo = (Ud - mq) / (1 - mq), Nu = Vd + 36, nq = 1 - fo, Ou = l[Nu >> 2] * nq + l[N] * fo, Pu = l[ma] * nq + l[U] * fo, Qu = Nu, aD = (x[0] = Ou, w[0]), bD = (x[0] = Pu, w[0]), Ru = 0 | aD, Su = bD | 0, oq = Qu;
          h[oq >> 2] = Ru;
          var pq = Qu + 4;
          h[pq >> 2] = Su;
          var go = nq * l[jb] + fo * l[L];
          l[jb] = go;
          l[O] = Ud;
          var Tu = Vd + 44;
          h[Tu >> 2] = Ru;
          h[Tu + 4 >> 2] = Su;
          l[L] = go;
          var qq = Nr(go), Uu = Vd + 20;
          l[Uu >> 2] = qq;
          var rq = Is(go), Vu = Vd + 24;
          l[Vu >> 2] = rq;
          var Wu = l[za], Xu = l[na], cD = Pu - (qq * Wu + rq * Xu), ho = Vd + 12, dD = (x[0] = Ou - (rq * Wu - qq * Xu), w[0]), eD = (x[0] = cD, w[0]) | 0;
          h[ho >> 2] = 0 | dD;
          h[ho + 4 >> 2] = eD;
          bt(se, h[ha]);
          Q = se + 4 >> 2;
          var sq = h[Q];
          h[Q] = sq & -33;
          var Yu = se + 128;
          h[Yu >> 2] += 1;
          if (6 == (sq & 6)) {
            D = wd + 4 >> 1;
            var Zu = b[D];
            0 == (Zu & 2) && (b[D] = Zu | 2, l[wd + 144 >> 2] = 0);
            P = Vd + 4 >> 1;
            var $u = b[P];
            0 == ($u & 2) && (b[P] = $u | 2, l[Vd + 144 >> 2] = 0);
            h[ga] = 0;
            h[pb] = 0;
            h[fB >> 2] = 0;
            var av = h[au >> 2];
            if (0 < av) {
              var tq = wd + 8;
              h[tq >> 2] = 0;
              var uq = h[fb];
              h[uq >> 2] = wd;
              h[ga] = 1;
              if (1 < av) {
                var bv = tq, cv = uq;
                ja = 367;
              } else {
                var dv = tq, ev = uq;
                ja = 366;
              }
            } else {
              G(z.o, 54, z.F, z.J);
              var fv = wd + 8;
              h[fv >> 2] = 0;
              var gv = h[fb];
              h[gv >> 2] = wd;
              h[ga] = 1;
              dv = fv;
              ev = gv;
              ja = 366;
            }
            366 == ja && (G(z.o, 54, z.F, z.J), bv = dv, cv = ev);
            var hv = Vd + 8;
            h[hv >> 2] = 1;
            h[cv + 4 >> 2] = Vd;
            h[ga] = 2;
            0 < h[bu >> 2] || G(z.o, 62, z.P, z.T);
            h[pb] = 1;
            h[h[kb] >> 2] = se;
            b[D] |= 1;
            b[P] |= 1;
            h[Q] |= 1;
            h[Yb >> 2] = wd;
            h[gB >> 2] = Vd;
            for (var iv = h[au >> 2], jv = h[bu >> 2], vq = k[kb], io = k[fb], jo = 0; 2 > jo; ) {
              var wq = h[Yb + (jo << 2) >> 2], fD = 2 == h[wq >> 2];
              a : do {
                if (fD) {
                  for (var gD = wq + 4, kv = wq + 112; ; ) {
                    var ko = h[kv >> 2];
                    if (0 == ko) {
                      break a;
                    }
                    var mm = h[ga];
                    if (mm == iv) {
                      break a;
                    }
                    var lo = h[pb];
                    if (lo == jv) {
                      break a;
                    }
                    var nm = h[ko + 4 >> 2];
                    H = nm + 4 >> 2;
                    var hD = 0 == (h[H] & 1);
                    b : do {
                      if (hD) {
                        var Kc = h[ko >> 2], lv = Kc, iD = 2 == h[lv >> 2];
                        do {
                          if (iD && 0 == (b[gD >> 1] & 8) && 0 == (b[Kc + 4 >> 1] & 8)) {
                            break b;
                          }
                        } while (0);
                        if (0 == (a[h[nm + 48 >> 2] + 38] & 1) && 0 == (a[h[nm + 52 >> 2] + 38] & 1)) {
                          F = Kc + 28 >> 2;
                          var Gj = l[F];
                          B = Kc + 32 >> 2;
                          var Hj = l[B];
                          M = Kc + 36 >> 2;
                          var xq = l[M];
                          J = Kc + 40 >> 2;
                          var yq = l[J];
                          K = Kc + 44 >> 2;
                          var om = l[K];
                          C = Kc + 48 >> 2;
                          var pm = l[C];
                          I = Kc + 52 >> 2;
                          var zq = l[I];
                          y = Kc + 56 >> 2;
                          var Ij = l[y];
                          E = Kc + 60 >> 2;
                          var mo = l[E];
                          A = Kc + 4 >> 1;
                          if (0 == (b[A] & 1)) {
                            if (1 > mo) {
                              var Aq = mo, mv = xq, nv = yq, ov = om, pv = pm, qv = zq, rv = Ij, Bq = Gj, Cq = Hj, sv = Kc + 36;
                            } else {
                              G(z.B, 715, z.w, z.t);
                              var tv = Kc + 36, Aq = l[E], mv = l[tv >> 2], nv = l[J], ov = l[K], pv = l[C], qv = l[I], rv = l[y], Bq = l[F], Cq = l[B], sv = tv;
                            }
                            var no = (Ud - Aq) / (1 - Aq), Dq = 1 - no, uv = mv * Dq + ov * no, vv = nv * Dq + pv * no, wv = sv, jD = (x[0] = uv, w[0]), kD = (x[0] = vv, w[0]), xv = 0 | jD, yv = kD | 0, vd = wv;
                            Aa = vd >> 2;
                            h[Aa] = xv;
                            md = wv + 4;
                            Pa = md >> 2;
                            h[Pa] = yv;
                            var oo = Dq * qv + no * rv;
                            l[I] = oo;
                            l[E] = Ud;
                            var zv = Kc + 44, gq = zv;
                            h[gq >> 2] = xv;
                            hq = zv + 4;
                            h[hq >> 2] = yv;
                            l[y] = oo;
                            var Eq = Nr(oo);
                            l[Kc + 20 >> 2] = Eq;
                            var Fq = Is(oo);
                            l[Kc + 24 >> 2] = Fq;
                            var lD = vv - (Eq * Bq + Fq * Cq), Av = Kc + 12, mD = (x[0] = uv - (Fq * Bq - Eq * Cq), w[0]), nD = (x[0] = lD, w[0]) | 0, kq = Av;
                            h[kq >> 2] = 0 | mD;
                            lq = Av + 4;
                            h[lq >> 2] = nD;
                          }
                          bt(nm, h[ha]);
                          var Gq = h[H];
                          if (0 == (Gq & 4)) {
                            l[F] = Gj;
                            l[B] = Hj;
                            l[M] = xq;
                            l[J] = yq;
                            l[K] = om;
                            l[C] = pm;
                            l[I] = zq;
                            l[y] = Ij;
                            l[E] = mo;
                            var Hq = Nr(Ij);
                            l[Kc + 20 >> 2] = Hq;
                            var Iq = Is(Ij);
                            l[Kc + 24 >> 2] = Iq;
                            var oD = pm - (Hq * Gj + Iq * Hj), Bv = Kc + 12, pD = (x[0] = om - (Iq * Gj - Hq * Hj), w[0]), qD = (x[0] = oD, w[0]) | 0, pe = Bv;
                            Oa = pe >> 2;
                            h[Oa] = 0 | pD;
                            de = Bv + 4;
                            Ia = de >> 2;
                            h[Ia] = qD;
                          } else {
                            if (0 == (Gq & 2)) {
                              l[F] = Gj;
                              l[B] = Hj;
                              l[M] = xq;
                              l[J] = yq;
                              l[K] = om;
                              l[C] = pm;
                              l[I] = zq;
                              l[y] = Ij;
                              l[E] = mo;
                              var Jq = Nr(Ij);
                              l[Kc + 20 >> 2] = Jq;
                              var Kq = Is(Ij);
                              l[Kc + 24 >> 2] = Kq;
                              var rD = pm - (Jq * Gj + Kq * Hj), Cv = Kc + 12, sD = (x[0] = om - (Kq * Gj - Jq * Hj), w[0]), tD = (x[0] = rD, w[0]) | 0, pe = Cv;
                              Oa = pe >> 2;
                              h[Oa] = 0 | sD;
                              de = Cv + 4;
                              Ia = de >> 2;
                              h[Ia] = tD;
                            } else {
                              h[H] = Gq | 1;
                              lo < jv || G(z.o, 62, z.P, z.T);
                              h[pb] = lo + 1;
                              h[(lo << 2) + vq >> 2] = nm;
                              var po = b[A];
                              0 == (po & 1) && (b[A] = po | 1, 0 != h[lv >> 2] && 0 == (po & 2) && (b[A] = po | 3, l[Kc + 144 >> 2] = 0), mm < iv || G(z.o, 54, z.F, z.J), h[Kc + 8 >> 2] = mm, h[(mm << 2) + io >> 2] = Kc, h[ga] = mm + 1);
                            }
                          }
                        }
                      }
                    } while (0);
                    kv = ko + 12;
                  }
                }
              } while (0);
              jo += 1;
            }
            var Hi = .01666666753590107 * (1 - Ud), uD = 1 / Hi;
            a[gc] = 0;
            var qm = k[bv >> 2], rm = k[hv >> 2], sm = k[ga];
            sm > qm || G(z.ua, 386, z.la, z.Fb);
            sm > rm || G(z.ua, 387, z.la, z.Xb);
            var Dv = 0 < sm, Lq = h[ab], Mq = h[La];
            a : do {
              if (Dv) {
                for (var Jj = 0; ; ) {
                  var qo = h[io + (Jj << 2) >> 2], Ev = Lq, Fv = qo + 44, Gv = Ev + 12 * Jj, Of = Fv;
                  Sa = Of >> 2;
                  var vD = h[Sa], xi = Fv + 4;
                  la = xi >> 2;
                  var wD = h[la];
                  h[Gv >> 2] = vD;
                  h[Gv + 4 >> 2] = wD;
                  l[(Ev + 8 >> 2) + (3 * Jj | 0)] = l[qo + 56 >> 2];
                  var Hv = Mq, Iv = qo + 64, Jv = Hv + 12 * Jj, Nq = Iv, Oq = Iv + 4, xD = h[Oq >> 2], Pq = Jv;
                  h[Pq >> 2] = h[Nq >> 2];
                  var Qq = Jv + 4;
                  h[Qq >> 2] = xD;
                  l[(Hv + 8 >> 2) + (3 * Jj | 0)] = l[qo + 72 >> 2];
                  var Kv = Jj + 1;
                  if (Kv < sm) {
                    Jj = Kv;
                  } else {
                    var ro = Lq, so = Mq;
                    break a;
                  }
                }
              } else {
                ro = Lq, so = Mq;
              }
            } while (0);
            var Lv = vq;
            h[kB >> 2] = Lv;
            var Rq = k[pb];
            h[lB >> 2] = Rq;
            h[mB >> 2] = h[tb >> 2];
            l[Cb >> 2] = Hi;
            l[nB >> 2] = uD;
            l[oB >> 2] = 1;
            h[pB >> 2] = 3;
            h[qB >> 2] = 20;
            a[rB] = 0;
            var tm = ro;
            h[sB >> 2] = tm;
            h[tB >> 2] = so;
            ct(Xb, Cb);
            var Mv = h[uB >> 2], yD = 0 < Mv, to = h[cu >> 2];
            u = to >> 2;
            for (var uo = h[vB >> 2], Sq = 0; 20 > Sq; ) {
              a : do {
                if (yD) {
                  for (var Pf = 0, Tq = 0; ; ) {
                    var zD = to + 88 * Pf, vo = h[u + (22 * Pf | 0) + 8], Nv = h[u + (22 * Pf | 0) + 9], Ov = to + 88 * Pf + 48, Of = Ov;
                    Sa = Of >> 2;
                    xi = Ov + 4;
                    la = xi >> 2;
                    var AD = h[la], Pv = (w[0] = h[Sa], x[0]), Qv = (w[0] = AD, x[0]), Rv = to + 88 * Pf + 56, Qg = Rv;
                    xb = Qg >> 2;
                    Rg = Rv + 4;
                    qb = Rg >> 2;
                    var BD = h[qb], Sv = (w[0] = h[xb], x[0]), Tv = (w[0] = BD, x[0]), Uv = h[u + (22 * Pf | 0) + 21];
                    if (vo == qm | vo == rm) {
                      var Uq = l[u + (22 * Pf | 0) + 16], wo = l[u + (22 * Pf | 0) + 10];
                    } else {
                      wo = Uq = 0;
                    }
                    var Vv = l[u + (22 * Pf | 0) + 17], Vq = l[u + (22 * Pf | 0) + 11], xo = uo + 12 * vo, CD = h[xo + 4 >> 2], Wv = (w[0] = h[xo >> 2], x[0]), Xv = (w[0] = CD, x[0]), Yv = uo + 12 * vo + 8, Zv = l[Yv >> 2], yo = uo + 12 * Nv, DD = h[yo + 4 >> 2], $v = (w[0] = h[yo >> 2], x[0]), aw = (w[0] = DD, x[0]), bw = uo + 12 * Nv + 8, cw = l[bw >> 2], ED = 0 < Uv;
                    b : do {
                      if (ED) {
                        for (var FD = wo + Vq, zo = aw, Ao = $v, Bo = Xv, Co = Wv, Wq = Tq, Do = Zv, Eo = cw, Xq = 0; ; ) {
                          var Yq = Nr(Do);
                          l[wB >> 2] = Yq;
                          var Zq = Is(Do);
                          l[xB >> 2] = Zq;
                          var $q = Nr(Eo);
                          l[yB >> 2] = $q;
                          var ar = Is(Eo);
                          l[zB >> 2] = ar;
                          var GD = Bo - (Yq * Pv + Zq * Qv), HD = (x[0] = Co - (Zq * Pv - Yq * Qv), w[0]), ID = (x[0] = GD, w[0]), JD = 0 | HD, KD = ID | 0, Ai = W;
                          h[Ai >> 2] = JD;
                          tj = W + 4;
                          h[tj >> 2] = KD;
                          var LD = zo - ($q * Sv + ar * Tv), MD = (x[0] = Ao - (ar * Sv - $q * Tv), w[0]), ND = (x[0] = LD, w[0]), OD = 0 | MD, PD = ND | 0, ok = Ca;
                          h[ok >> 2] = OD;
                          Bi = Ca + 4;
                          h[Bi >> 2] = PD;
                          ft(Ub, zD, W, Ca, Xq);
                          var uj = Ub, pl = Ub + 4, QD = h[pl >> 2], br = (w[0] = h[uj >> 2], x[0]), cr = (w[0] = QD, x[0]), vj = du, Ah = du + 4, RD = h[Ah >> 2], dw = (w[0] = h[vj >> 2], x[0]), ew = (w[0] = RD, x[0]), dr = l[AB >> 2], fw = dw - Co, gw = ew - Bo, hw = dw - Ao, iw = ew - zo, jw = Wq < dr ? Wq : dr, kw = .75 * (dr + .004999999888241291), lw = 0 > kw ? kw : 0, mw = fw * cr - gw * br, nw = hw * cr - iw * br, ow = FD + Uq * mw * mw + Vv * nw * nw, pw = 0 < ow ? -(-.20000000298023224 > lw ? -.20000000298023224 : lw) / ow : 0, Fo = br * pw, Go = cr * pw, qw = Co - Fo * wo, rw = Bo - Go * wo, sw = Do - Uq * (fw * Go - gw * Fo), tw = Ao + Fo * Vq, uw = zo + Go * Vq, vw = Eo + Vv * (hw * Go - iw * Fo), ww = Xq + 1;
                          if (ww == Uv) {
                            var xw = uw, yw = tw, zw = rw, Aw = qw, er = jw, Bw = sw, Cw = vw;
                            break b;
                          } else {
                            zo = uw, Ao = tw, Bo = rw, Co = qw, Wq = jw, Do = sw, Eo = vw, Xq = ww;
                          }
                        }
                      } else {
                        xw = aw, yw = $v, zw = Xv, Aw = Wv, er = Tq, Bw = Zv, Cw = cw;
                      }
                    } while (0);
                    var SD = (x[0] = Aw, w[0]), TD = (x[0] = zw, w[0]) | 0, Ze = xo;
                    Ha = Ze >> 2;
                    h[Ha] = 0 | SD;
                    Le = xo + 4;
                    Na = Le >> 2;
                    h[Na] = TD;
                    l[Yv >> 2] = Bw;
                    var UD = (x[0] = yw, w[0]), VD = (x[0] = xw, w[0]) | 0, Bh = yo;
                    Ua = Bh >> 2;
                    h[Ua] = 0 | UD;
                    Ch = yo + 4;
                    xa = Ch >> 2;
                    h[xa] = VD;
                    l[bw >> 2] = Cw;
                    var Dw = Pf + 1;
                    if (Dw < Mv) {
                      Pf = Dw, Tq = er;
                    } else {
                      var Ew = er;
                      break a;
                    }
                  }
                } else {
                  Ew = 0;
                }
              } while (0);
              if (-.007499999832361937 <= Ew) {
                break;
              }
              Sq += 1;
            }
            var Fw = io, Gw = (qm << 2) + Fw, Hw = tm + 12 * qm, Iw = h[Gw >> 2] + 36, WD = h[Hw >> 2], XD = h[Hw + 4 >> 2], Kl = Iw;
            h[Kl >> 2] = WD;
            Di = Iw + 4;
            h[Di >> 2] = XD;
            l[h[Gw >> 2] + 52 >> 2] = l[(tm + 8 >> 2) + (3 * qm | 0)];
            var Jw = (rm << 2) + Fw, Kw = tm + 12 * rm, Lw = h[Jw >> 2] + 36, Nq = Kw, YD = h[Nq >> 2], Oq = Kw + 4, ZD = h[Oq >> 2], Pq = Lw;
            h[Pq >> 2] = YD;
            Qq = Lw + 4;
            h[Qq >> 2] = ZD;
            l[h[Jw >> 2] + 52 >> 2] = l[(tm + 8 >> 2) + (3 * rm | 0)];
            dt(Xb);
            for (var fr = 0; 3 > fr; ) {
              et(Xb);
              fr += 1;
            }
            a : do {
              if (Dv) {
                for (var Vg = 0, Mw = ro, Nw = so; ; ) {
                  var Ow = Mw, Ho = Ow + 12 * Vg, gr = Ho, hr = Ho + 4, $D = h[hr >> 2], aE = (w[0] = h[gr >> 2], x[0]), bE = (w[0] = $D, x[0]), cE = l[(Ow + 8 >> 2) + (3 * Vg | 0)], Pw = Nw, Qw = Pw + 12 * Vg, Qg = Qw;
                  xb = Qg >> 2;
                  Rg = Qw + 4;
                  qb = Rg >> 2;
                  var dE = h[qb], ir = (w[0] = h[xb], x[0]), jr = (w[0] = dE, x[0]), kr = l[(Pw + 8 >> 2) + (3 * Vg | 0)], Rw = ir * Hi, Sw = jr * Hi, Tw = Rw * Rw + Sw * Sw;
                  if (4 < Tw) {
                    var Uw = 2 / bn(Tw), lr = ir * Uw, mr = jr * Uw;
                  } else {
                    lr = ir, mr = jr;
                  }
                  var um = Hi * kr, nr = 2.4674012660980225 < um * um ? kr * (1.5707963705062866 / (0 < um ? um : -um)) : kr, Vw = aE + lr * Hi, Ww = bE + mr * Hi, Io = cE + Hi * nr, eE = (x[0] = Vw, w[0]), fE = (x[0] = Ww, w[0]), Xw = 0 | eE, Yw = fE | 0, Ze = Ho;
                  Ha = Ze >> 2;
                  h[Ha] = Xw;
                  Le = Ho + 4;
                  Na = Le >> 2;
                  h[Na] = Yw;
                  var or = h[ab];
                  l[(or + 8 >> 2) + (3 * Vg | 0)] = Io;
                  var pr = h[La], Zw = pr, $w = Zw + 12 * Vg, gE = (x[0] = lr, w[0]), hE = (x[0] = mr, w[0]), ax = 0 | gE, bx = hE | 0, Yk = $w;
                  h[Yk >> 2] = ax;
                  Af = $w + 4;
                  h[Af >> 2] = bx;
                  l[(Zw + 8 >> 2) + (3 * Vg | 0)] = nr;
                  var cx = h[fb], Jo = h[cx + (Vg << 2) >> 2];
                  s = Jo >> 2;
                  var dx = Jo + 44;
                  h[dx >> 2] = Xw;
                  h[dx + 4 >> 2] = Yw;
                  l[s + 14] = Io;
                  var ex = Jo + 64;
                  h[ex >> 2] = ax;
                  h[ex + 4 >> 2] = bx;
                  l[s + 18] = nr;
                  var qr = Nr(Io);
                  l[s + 5] = qr;
                  var rr = Is(Io);
                  l[s + 6] = rr;
                  var fx = l[s + 7], gx = l[s + 8], iE = Ww - (qr * fx + rr * gx), hx = Jo + 12, jE = (x[0] = Vw - (rr * fx - qr * gx), w[0]), kE = (x[0] = iE, w[0]) | 0;
                  h[hx >> 2] = 0 | jE;
                  h[hx + 4 >> 2] = kE;
                  var ix = Vg + 1, jx = h[ga];
                  if (ix < jx) {
                    Vg = ix, Mw = or, Nw = pr;
                  } else {
                    var kx = jx, sr = cx, lx = or, mx = pr;
                    break a;
                  }
                }
              } else {
                kx = sm, sr = io, lx = ro, mx = so;
              }
            } while (0);
            var nx = k[BB >> 2];
            r = nx >> 2;
            var tr = h[CB >> 2], lE = 0 != tr & 0 < Rq;
            a : do {
              if (lE) {
                for (var Lk = 0; ; ) {
                  var mE = h[Lv + (Lk << 2) >> 2], ur = h[r + (38 * Lk | 0) + 36];
                  h[EB >> 2] = ur;
                  var nE = 0 < ur;
                  b : do {
                    if (nE) {
                      for (var Mk = 0; ; ) {
                        l[Ab + (Mk << 2) >> 2] = l[r + (38 * Lk | 0) + (9 * Mk | 0) + 4];
                        l[Ab + (Mk << 2) + 8 >> 2] = l[r + (38 * Lk | 0) + (9 * Mk | 0) + 5];
                        var ox = Mk + 1;
                        if (ox == ur) {
                          break b;
                        } else {
                          Mk = ox;
                        }
                      }
                    }
                  } while (0);
                  km[h[h[tr >> 2] + 20 >> 2]](tr, mE, Ab);
                  var px = Lk + 1;
                  if (px < Rq) {
                    Lk = px;
                  } else {
                    break a;
                  }
                }
              }
            } while (0);
            var qx = h[DB >> 2];
            Ks(qx, nx);
            Ks(qx, h[cu >> 2]);
            for (var Ko = 0; Ko < kx; ) {
              var vr = h[sr + (Ko << 2) >> 2];
              p = vr >> 2;
              var rx = vr + 4;
              b[rx >> 1] &= -2;
              var oE = 2 == h[p];
              a : do {
                if (oE) {
                  var sx = l[p + 13], wr = Nr(sx);
                  l[hB >> 2] = wr;
                  var xr = Is(sx);
                  l[iB >> 2] = xr;
                  var tx = l[p + 7], ux = l[p + 8], pE = l[p + 10] - (wr * tx + xr * ux), qE = (x[0] = l[p + 9] - (xr * tx - wr * ux), w[0]), rE = (x[0] = pE, w[0]) | 0, Bh = sb;
                  Ua = Bh >> 2;
                  h[Ua] = 0 | qE;
                  Ch = sb + 4;
                  xa = Ch >> 2;
                  h[xa] = rE;
                  var sE = h[p + 22] + 102872, vx = h[p + 25], tE = 0 == vx;
                  b : do {
                    if (!tE) {
                      for (var uE = vr + 12, yr = vx; ; ) {
                        Zs(yr, sE, sb, uE);
                        var wx = h[yr + 4 >> 2];
                        if (0 == wx) {
                          break b;
                        } else {
                          yr = wx;
                        }
                      }
                    }
                  } while (0);
                  var xx = h[p + 28];
                  if (0 != xx) {
                    for (var zr = xx; ; ) {
                      var yx = h[zr + 4 >> 2] + 4;
                      h[yx >> 2] &= -34;
                      var zx = h[zr + 12 >> 2];
                      if (0 == zx) {
                        break a;
                      } else {
                        zr = zx;
                      }
                    }
                  }
                }
              } while (0);
              Ko += 1;
            }
            Ts(pc, pc);
            if (0 == (a[jB] & 1)) {
              se = 0, Ud = 1, ao = Ob;
            } else {
              hu = 0;
              iu = sr;
              ju = vq;
              ku = lx;
              lu = mx;
              break;
            }
          } else {
            h[Q] = sq & -37;
            l[Da] = mu;
            l[ba] = nu;
            l[ou >> 2] = pu;
            l[X] = qu;
            l[Z] = ru;
            l[Fa] = su;
            l[$] = tu;
            l[T] = uu;
            l[S] = bq;
            l[za] = NC;
            l[na] = OC;
            l[vu >> 2] = PC;
            l[ma] = QC;
            l[N] = RC;
            l[U] = SC;
            l[jb] = TC;
            l[L] = UC;
            l[O] = VC;
            var Ax = l[T], Ar = Nr(Ax);
            l[Ku >> 2] = Ar;
            var Br = Is(Ax);
            l[Lu >> 2] = Br;
            var Bx = l[Da], Cx = l[ba], vE = l[Fa] - (Ar * Bx + Br * Cx), wE = (x[0] = l[Z] - (Br * Bx - Ar * Cx), w[0]), xE = (x[0] = vE, w[0]) | 0, oj = eo;
            h[oj >> 2] = 0 | wE;
            pj = eo + 4;
            h[pj >> 2] = xE;
            var Dx = l[L], Cr = Nr(Dx);
            l[Uu >> 2] = Cr;
            var Dr = Is(Dx);
            l[Vu >> 2] = Dr;
            var Ex = l[za], Fx = l[na], yE = l[U] - (Cr * Ex + Dr * Fx), zE = (x[0] = l[N] - (Dr * Ex - Cr * Fx), w[0]), AE = (x[0] = yE, w[0]) | 0;
            h[ho >> 2] = 0 | zE;
            h[ho + 4 >> 2] = AE;
            se = 0;
            Ud = 1;
            ao = Ob;
          }
        }
      } else {
        q = lm + 4 >> 2;
        var Gx = h[q], BE = 0 == (Gx & 4);
        do {
          if (BE) {
            var Ii = se, Ji = Ud;
          } else {
            if (8 < h[Ea + 32]) {
              Ii = se, Ji = Ud;
            } else {
              if (0 == (Gx & 32)) {
                var Er = h[Ea + 12], Fr = h[Ea + 13];
                if (0 != (a[Er + 38] & 1)) {
                  Ii = se;
                  Ji = Ud;
                  break;
                }
                if (0 != (a[Fr + 38] & 1)) {
                  Ii = se;
                  Ji = Ud;
                  break;
                }
                var Wg = h[Er + 8 >> 2], Xg = h[Fr + 8 >> 2], Gr = h[Wg >> 2], Hr = h[Xg >> 2];
                2 == Gr | 2 == Hr || G(z.r, 641, z.ka, z.xc);
                var Hx = b[Wg + 4 >> 1], Ix = b[Xg + 4 >> 1];
                if (!(0 != (Hx & 2) & 0 != Gr | 0 != (Ix & 2) & 0 != Hr)) {
                  Ii = se;
                  Ji = Ud;
                  break;
                }
                if (!(0 != (Hx & 8) | 2 != Gr | 0 != (Ix & 8) | 2 != Hr)) {
                  Ii = se;
                  Ji = Ud;
                  break;
                }
                var CE = Wg + 28;
                o = Wg + 60 >> 2;
                var Kj = l[o], DE = Xg + 28;
                n = Xg + 60 >> 2;
                var Nk = l[n];
                if (Kj < Nk) {
                  if (1 > Kj) {
                    var Ir = Kj;
                  } else {
                    G(z.B, 715, z.w, z.t), Ir = l[o];
                  }
                  var Lo = (Nk - Ir) / (1 - Ir), Jx = Wg + 36, Jr = 1 - Lo, EE = l[Wg + 40 >> 2] * Jr + l[Wg + 48 >> 2] * Lo, Kx = Jx, FE = (x[0] = l[Jx >> 2] * Jr + l[Wg + 44 >> 2] * Lo, w[0]), GE = (x[0] = EE, w[0]), HE = 0 | FE, IE = GE | 0, vd = Kx;
                  Aa = vd >> 2;
                  h[Aa] = HE;
                  md = Kx + 4;
                  Pa = md >> 2;
                  h[Pa] = IE;
                  var Lx = Wg + 52;
                  l[Lx >> 2] = Jr * l[Lx >> 2] + Lo * l[Wg + 56 >> 2];
                  var Mo = l[o] = Nk;
                } else {
                  if (Nk < Kj) {
                    if (1 > Nk) {
                      var Kr = Nk;
                    } else {
                      G(z.B, 715, z.w, z.t), Kr = l[n];
                    }
                    var No = (Kj - Kr) / (1 - Kr), Mx = Xg + 36, Lr = 1 - No, JE = l[Xg + 40 >> 2] * Lr + l[Xg + 48 >> 2] * No, Nx = Mx, KE = (x[0] = l[Mx >> 2] * Lr + l[Xg + 44 >> 2] * No, w[0]), LE = (x[0] = JE, w[0]), ME = 0 | KE, NE = LE | 0, vd = Nx;
                    Aa = vd >> 2;
                    h[Aa] = ME;
                    md = Nx + 4;
                    Pa = md >> 2;
                    h[Pa] = NE;
                    var Ox = Xg + 52;
                    l[Ox >> 2] = Lr * l[Ox >> 2] + No * l[Xg + 56 >> 2];
                    l[n] = Kj;
                  }
                  Mo = Kj;
                }
                1 > Mo || G(z.r, 676, z.ka, z.t);
                var OE = h[Ea + 14], PE = h[Ea + 15];
                h[Ut >> 2] = 0;
                h[Vt >> 2] = 0;
                l[Wt >> 2] = 0;
                h[bb] = 0;
                h[da] = 0;
                l[Xt >> 2] = 0;
                up(V, h[Er + 12 >> 2], OE);
                up($p, h[Fr + 12 >> 2], PE);
                for (var Ih = CE >> 2, vm = Yt >> 2, Mr = Ih + 9; Ih < Mr; Ih++, vm++) {
                  h[vm] = h[Ih];
                }
                Ih = DE >> 2;
                vm = Zt >> 2;
                for (Mr = Ih + 9; Ih < Mr; Ih++, vm++) {
                  h[vm] = h[Ih];
                }
                l[$t >> 2] = 1;
                h[gt >> 2] += 1;
                var Or = l[Yt >> 2], Pr = l[FB >> 2], Px = l[GB >> 2], Qx = l[HB >> 2], Rx = l[IB >> 2], Sx = l[JB >> 2], Tx = l[KB >> 2], QE = l[LB >> 2], RE = l[MB >> 2], Qr = l[Zt >> 2], Rr = l[NB >> 2], Ux = l[OB >> 2], Vx = l[PB >> 2], Wx = l[QB >> 2], Xx = l[RB >> 2], Yx = l[SB >> 2], SE = l[TB >> 2], TE = l[UB >> 2], $x = 6.2831854820251465 * ht(Tx / 6.2831854820251465), ay = Tx - $x, by = QE - $x, cy = 6.2831854820251465 * ht(Yx / 6.2831854820251465), dy = Yx - cy, ey = SE - cy, wm = l[$t >> 2], fy = l[Wt >> 2] + l[Xt >> 2] - .014999999664723873, Ok = .004999999888241291 > fy ? .004999999888241291 : fy;
                .0012499999720603228 < Ok || G(z.K, 280, z.gb, z.Pb);
                b[eu >> 1] = 0;
                h[$a] = h[ta];
                h[$a + 1] = h[ta + 1];
                h[$a + 2] = h[ta + 2];
                h[$a + 3] = h[ta + 3];
                h[$a + 4] = h[ta + 4];
                h[$a + 5] = h[ta + 5];
                h[$a + 6] = h[ta + 6];
                h[Za] = h[Ra];
                h[Za + 1] = h[Ra + 1];
                h[Za + 2] = h[Ra + 2];
                h[Za + 3] = h[Ra + 3];
                h[Za + 4] = h[Ra + 4];
                h[Za + 5] = h[Ra + 5];
                h[Za + 6] = h[Ra + 6];
                a[VB] = 0;
                var Sr = Ok + .0012499999720603228, gy = Ok - .0012499999720603228, bf = 0, xm = 0;
                a : for (;;) {
                  var Pk = 1 - bf, UE = Px * Pk + Rx * bf, VE = Qx * Pk + Sx * bf, hy = Pk * ay + by * bf, mg = Nr(hy), ng = Is(hy), Oo = UE - (ng * Or - mg * Pr), Po = VE - (mg * Or + ng * Pr), WE = Ux * Pk + Wx * bf, XE = Vx * Pk + Xx * bf, iy = Pk * dy + ey * bf, og = Nr(iy), pg = Is(iy), Qo = WE - (pg * Qr - og * Rr), Ro = XE - (og * Qr + pg * Rr);
                  l[WB >> 2] = Oo;
                  l[XB >> 2] = Po;
                  l[YB >> 2] = mg;
                  l[ZB >> 2] = ng;
                  l[$B >> 2] = Qo;
                  l[aC >> 2] = Ro;
                  l[bC >> 2] = og;
                  l[cC >> 2] = pg;
                  Rp(Lb, dc, Ma);
                  var jy = l[dC >> 2];
                  if (0 >= jy) {
                    var ym = xm, So = 0, To = 2;
                    break;
                  }
                  if (jy < Sr) {
                    ym = xm;
                    So = bf;
                    To = 3;
                    break;
                  }
                  h[wa] = V;
                  h[Ga] = $p;
                  var Tr = k[eu >> 2], Ur = Tr & 65535, Uo = Tr >>> 16, YE = Uo & 255, Vr = Tr >>> 24, ZE = Vr & 255;
                  0 != Ur & 3 > Ur || G(z.K, 50, z.ob, z.sc);
                  l[eC >> 2] = Or;
                  l[fC >> 2] = Pr;
                  l[gC >> 2] = Px;
                  l[hC >> 2] = Qx;
                  l[iC >> 2] = Rx;
                  l[jC >> 2] = Sx;
                  l[kC >> 2] = ay;
                  l[lC >> 2] = by;
                  l[mC >> 2] = RE;
                  l[nC >> 2] = Qr;
                  l[oC >> 2] = Rr;
                  l[pC >> 2] = Ux;
                  l[qC >> 2] = Vx;
                  l[rC >> 2] = Wx;
                  l[sC >> 2] = Xx;
                  l[tC >> 2] = dy;
                  l[uC >> 2] = ey;
                  l[vC >> 2] = TE;
                  var $E = 1 == Ur;
                  do {
                    if ($E) {
                      h[Y] = 0;
                      var ky = h[wa], ly = Uo & 255;
                      h[ky + 20 >> 2] > ly || G(z.b, 103, z.a, z.c);
                      var my = (ly << 3) + h[ky + 16 >> 2], te = my;
                      m = te >> 2;
                      var ue = my + 4;
                      j = ue >> 2;
                      var aF = h[j], ny = (w[0] = h[m], x[0]), oy = (w[0] = aF, x[0]), py = h[Ga], qy = Hh[aq];
                      h[py + 20 >> 2] > qy || G(z.b, 103, z.a, z.c);
                      var ry = (qy << 3) + h[py + 16 >> 2], te = ry;
                      m = te >> 2;
                      ue = ry + 4;
                      j = ue >> 2;
                      var bF = h[j], sy = (w[0] = h[m], x[0]), ty = (w[0] = bF, x[0]), Vo = pg * sy - og * ty + Qo - (ng * ny - mg * oy + Oo), Wo = og * sy + pg * ty + Ro - (mg * ny + ng * oy + Po), cF = (x[0] = Vo, w[0]), dF = (x[0] = Wo, w[0]) | 0;
                      h[va] = 0 | cF;
                      h[va + 1] = dF;
                      var uy = bn(Vo * Vo + Wo * Wo);
                      if (1.1920928955078125e-7 > uy) {
                        var Qk = 1, cf = wm;
                        break;
                      }
                      var vy = 1 / uy;
                      l[Qa] = Vo * vy;
                      l[qa] = Wo * vy;
                    } else {
                      if (YE == ZE) {
                        h[Y] = 2;
                        var wy = Hh[aq], xy = h[da];
                        if (xy > wy) {
                          var yy = xy;
                        } else {
                          G(z.b, 103, z.a, z.c), yy = h[da];
                        }
                        var zy = k[bb], Ay = (wy << 3) + zy, te = Ay;
                        m = te >> 2;
                        ue = Ay + 4;
                        j = ue >> 2;
                        var eF = h[j], By = (w[0] = h[m], x[0]), Cy = (w[0] = eF, x[0]), Dy = Hh[KC];
                        if (yy > Dy) {
                          var Ey = zy;
                        } else {
                          G(z.b, 103, z.a, z.c), Ey = h[bb];
                        }
                        var Fy = (Dy << 3) + Ey, Wr = Fy, Xr = Fy + 4, fF = h[Xr >> 2], Gy = (w[0] = h[Wr >> 2], x[0]), Hy = (w[0] = fF, x[0]), zm = Hy - Cy, Am = -1 * (Gy - By), gF = (x[0] = zm, w[0]), hF = (x[0] = Am, w[0]), iF = 0 | gF, jF = hF | 0, oq = Gi;
                        h[oq >> 2] = iF;
                        pq = Gi + 4;
                        h[pq >> 2] = jF;
                        var Iy = bn(zm * zm + Am * Am);
                        if (1.1920928955078125e-7 > Iy) {
                          var Yr = zm, Zr = Am;
                        } else {
                          var Jy = 1 / Iy, Ky = zm * Jy;
                          l[Qa] = Ky;
                          var Ly = Am * Jy;
                          l[qa] = Ly;
                          Yr = Ky;
                          Zr = Ly;
                        }
                        var kF = pg * Yr - og * Zr, lF = og * Yr + pg * Zr, $r = .5 * (By + Gy), as = .5 * (Cy + Hy), mF = (x[0] = $r, w[0]), nF = (x[0] = as, w[0]) | 0, bs = $n;
                        h[bs >> 2] = 0 | mF;
                        var cs = $n + 4;
                        h[cs >> 2] = nF;
                        var oF = pg * $r - og * as + Qo, pF = og * $r + pg * as + Ro, My = Uo & 255;
                        h[Vt >> 2] > My || G(z.b, 103, z.a, z.c);
                        var Ny = (My << 3) + h[Ut >> 2], Wr = Ny, Xr = Ny + 4, qF = h[Xr >> 2], Oy = (w[0] = h[Wr >> 2], x[0]), Py = (w[0] = qF, x[0]);
                        if (0 <= (ng * Oy - mg * Py + Oo - oF) * kF + (mg * Oy + ng * Py + Po - pF) * lF) {
                          Qk = 1;
                          cf = wm;
                          break;
                        }
                        var rF = -l[qa], sF = (x[0] = -l[Qa], w[0]), tF = (x[0] = rF, w[0]) | 0, De = Gi;
                        Va = De >> 2;
                        h[Va] = 0 | sF;
                        oe = Gi + 4;
                        ia = oe >> 2;
                        h[ia] = tF;
                      } else {
                        h[Y] = 1;
                        var ds = h[wa], Qy = Uo & 255, Ry = h[ds + 20 >> 2];
                        if (Ry > Qy) {
                          var Sy = ds, Ty = Ry;
                        } else {
                          G(z.b, 103, z.a, z.c);
                          var Uy = h[wa], Sy = Uy, Ty = h[Uy + 20 >> 2];
                        }
                        var Vy = (Qy << 3) + h[ds + 16 >> 2], gr = Vy, hr = Vy + 4, uF = h[hr >> 2], Wy = (w[0] = h[gr >> 2], x[0]), Xy = (w[0] = uF, x[0]);
                        Ty > Vr || G(z.b, 103, z.a, z.c);
                        var Yy = (Vr << 3) + h[Sy + 16 >> 2], te = Yy;
                        m = te >> 2;
                        ue = Yy + 4;
                        j = ue >> 2;
                        var vF = h[j], Zy = (w[0] = h[m], x[0]), $y = (w[0] = vF, x[0]), Bm = $y - Xy, Cm = -1 * (Zy - Wy), wF = (x[0] = Bm, w[0]), xF = (x[0] = Cm, w[0]) | 0;
                        h[va] = 0 | wF;
                        h[va + 1] = xF;
                        var az = bn(Bm * Bm + Cm * Cm);
                        if (1.1920928955078125e-7 > az) {
                          var es = Bm, fs = Cm;
                        } else {
                          var bz = 1 / az, cz = Bm * bz;
                          l[Qa] = cz;
                          var dz = Cm * bz;
                          l[qa] = dz;
                          es = cz;
                          fs = dz;
                        }
                        var yF = ng * es - mg * fs, zF = mg * es + ng * fs, gs = .5 * (Wy + Zy), hs = .5 * (Xy + $y), AF = (x[0] = gs, w[0]), BF = (x[0] = hs, w[0]), CF = 0 | AF, DF = BF | 0, bs = $n;
                        h[bs >> 2] = CF;
                        cs = $n + 4;
                        h[cs >> 2] = DF;
                        var EF = ng * gs - mg * hs + Oo, FF = mg * gs + ng * hs + Po, ez = h[Ga], fz = Hh[aq];
                        h[ez + 20 >> 2] > fz || G(z.b, 103, z.a, z.c);
                        var gz = (fz << 3) + h[ez + 16 >> 2], te = gz;
                        m = te >> 2;
                        ue = gz + 4;
                        j = ue >> 2;
                        var GF = h[j], hz = (w[0] = h[m], x[0]), iz = (w[0] = GF, x[0]);
                        if (0 <= (pg * hz - og * iz + Qo - EF) * yF + (og * hz + pg * iz + Ro - FF) * zF) {
                          Qk = 1;
                          cf = wm;
                          break;
                        }
                        var HF = -l[qa], IF = (x[0] = -l[Qa], w[0]), JF = (x[0] = HF, w[0]) | 0, De = Gi;
                        Va = De >> 2;
                        h[Va] = 0 | IF;
                        oe = Gi + 4;
                        ia = oe >> 2;
                        h[ia] = JF;
                      }
                    }
                    Qk = 1;
                    cf = wm;
                  } while (0);
                  b : for (;;) {
                    var Rk = 1 - cf, KF = l[wC >> 2] * Rk + l[yC >> 2] * cf, LF = l[xC >> 2] * Rk + l[zC >> 2] * cf, jz = Rk * l[AC >> 2] + l[BC >> 2] * cf, df = Nr(jz), ef = Is(jz), kz = l[LC >> 2], lz = l[CC >> 2], is = KF - (ef * kz - df * lz), js = LF - (df * kz + ef * lz), MF = l[DC >> 2] * Rk + l[FC >> 2] * cf, NF = l[EC >> 2] * Rk + l[GC >> 2] * cf, mz = Rk * l[HC >> 2] + l[IC >> 2] * cf, ff = Nr(mz), gf = Is(mz), nz = l[MC >> 2], oz = l[JC >> 2], ks = MF - (gf * nz - ff * oz), ls = NF - (ff * nz + gf * oz), ms = h[Y];
                    if (0 == ms) {
                      var Xo = l[lb], ns = l[qa], pz = ef * Xo + df * ns, qz = Xo * -df + ef * ns, rz = -ns, sz = gf * -Xo + ff * rz, tz = Xo * ff + gf * rz, uz = h[wa], vz = uz + 16, wz = h[vz >> 2];
                      i = wz >> 2;
                      var os = h[uz + 20 >> 2], OF = 1 < os;
                      c : do {
                        if (OF) {
                          for (var xz = 0, ps = l[i] * pz + l[i + 1] * qz, Dm = 1; ; ) {
                            var yz = l[(Dm << 3 >> 2) + i] * pz + l[((Dm << 3) + 4 >> 2) + i] * qz, zz = yz > ps, Az = zz ? Dm : xz, PF = zz ? yz : ps, Bz = Dm + 1;
                            if (Bz == os) {
                              var Em = Az;
                              break c;
                            } else {
                              xz = Az, ps = PF, Dm = Bz;
                            }
                          }
                        } else {
                          Em = 0;
                        }
                      } while (0);
                      var qs = h[Ga];
                      f = h[qs + 16 >> 2] >> 2;
                      var Cz = h[qs + 20 >> 2], QF = 1 < Cz;
                      c : do {
                        if (QF) {
                          for (var Dz = 0, rs = l[f] * sz + l[f + 1] * tz, Fm = 1; ; ) {
                            var Ez = l[(Fm << 3 >> 2) + f] * sz + l[((Fm << 3) + 4 >> 2) + f] * tz, Fz = Ez > rs, Gz = Fz ? Fm : Dz, RF = Fz ? Ez : rs, Hz = Fm + 1;
                            if (Hz == Cz) {
                              var Gm = Gz;
                              break c;
                            } else {
                              Dz = Gz, rs = RF, Fm = Hz;
                            }
                          }
                        } else {
                          Gm = 0;
                        }
                      } while (0);
                      if (-1 < Em & os > Em) {
                        var Iz = wz, ss = qs;
                      } else {
                        G(z.b, 103, z.a, z.c), Iz = h[vz >> 2], ss = h[Ga];
                      }
                      var Jz = (Em << 3) + Iz, te = Jz;
                      m = te >> 2;
                      ue = Jz + 4;
                      j = ue >> 2;
                      var SF = h[j], Kz = (w[0] = h[m], x[0]), Lz = (w[0] = SF, x[0]);
                      ja = -1 < Gm ? h[ss + 20 >> 2] > Gm ? 305 : 304 : 304;
                      304 == ja && G(z.b, 103, z.a, z.c);
                      var Mz = (Gm << 3) + h[ss + 16 >> 2], te = Mz;
                      m = te >> 2;
                      ue = Mz + 4;
                      j = ue >> 2;
                      var TF = h[j], Nz = (w[0] = h[m], x[0]), Oz = (w[0] = TF, x[0]), Sk = (gf * Nz - ff * Oz + ks - (ef * Kz - df * Lz + is)) * l[lb] + (ff * Nz + gf * Oz + ls - (df * Kz + ef * Lz + js)) * l[qa], Hm = Em, Yo = Gm;
                    } else {
                      if (1 == ms) {
                        var Pz = l[lb], Qz = l[qa], ts = ef * Pz - df * Qz, Rz = df * Pz + ef * Qz, Sz = l[fu >> 2], Tz = l[gu >> 2], UF = ef * Sz - df * Tz + is, VF = df * Sz + ef * Tz + js, Uz = -Rz, Vz = gf * -ts + ff * Uz, Wz = ts * ff + gf * Uz, Xz = h[Ga], Yz = Xz + 16, Zz = h[Yz >> 2];
                        g = Zz >> 2;
                        var us = h[Xz + 20 >> 2], WF = 1 < us;
                        do {
                          if (WF) {
                            for (var $z = 0, vs = l[g] * Vz + l[g + 1] * Wz, Im = 1; ; ) {
                              var aA = l[(Im << 3 >> 2) + g] * Vz + l[((Im << 3) + 4 >> 2) + g] * Wz, bA = aA > vs, Zo = bA ? Im : $z, XF = bA ? aA : vs, cA = Im + 1;
                              if (cA == us) {
                                break;
                              } else {
                                $z = Zo, vs = XF, Im = cA;
                              }
                            }
                            if (-1 < Zo) {
                              var $o = Zo;
                              ja = 310;
                            } else {
                              var dA = Zo;
                              ja = 311;
                            }
                          } else {
                            $o = 0, ja = 310;
                          }
                        } while (0);
                        if (310 == ja) {
                          if (us > $o) {
                            var ws = $o, eA = Zz;
                            ja = 313;
                          } else {
                            dA = $o, ja = 311;
                          }
                        }
                        311 == ja && (G(z.b, 103, z.a, z.c), ws = dA, eA = h[Yz >> 2]);
                        var fA = (ws << 3) + eA, te = fA;
                        m = te >> 2;
                        ue = fA + 4;
                        j = ue >> 2;
                        var YF = h[j], gA = (w[0] = h[m], x[0]), hA = (w[0] = YF, x[0]), Sk = (gf * gA - ff * hA + ks - UF) * ts + (ff * gA + gf * hA + ls - VF) * Rz, Hm = -1, Yo = ws;
                      } else {
                        if (2 == ms) {
                          var iA = l[lb], jA = l[qa], xs = gf * iA - ff * jA, kA = ff * iA + gf * jA, lA = l[fu >> 2], mA = l[gu >> 2], ZF = gf * lA - ff * mA + ks, $F = ff * lA + gf * mA + ls, nA = -kA, oA = ef * -xs + df * nA, pA = xs * df + ef * nA, qA = h[wa], rA = qA + 16, sA = h[rA >> 2];
                          e = sA >> 2;
                          var ys = h[qA + 20 >> 2], aG = 1 < ys;
                          do {
                            if (aG) {
                              for (var tA = 0, zs = l[e] * oA + l[e + 1] * pA, Jm = 1; ; ) {
                                var uA = l[(Jm << 3 >> 2) + e] * oA + l[((Jm << 3) + 4 >> 2) + e] * pA, vA = uA > zs, ap = vA ? Jm : tA, bG = vA ? uA : zs, wA = Jm + 1;
                                if (wA == ys) {
                                  break;
                                } else {
                                  tA = ap, zs = bG, Jm = wA;
                                }
                              }
                              if (-1 < ap) {
                                var bp = ap;
                                ja = 318;
                              } else {
                                var xA = ap;
                                ja = 319;
                              }
                            } else {
                              bp = 0, ja = 318;
                            }
                          } while (0);
                          if (318 == ja) {
                            if (ys > bp) {
                              var As = bp, yA = sA;
                              ja = 321;
                            } else {
                              xA = bp, ja = 319;
                            }
                          }
                          319 == ja && (G(z.b, 103, z.a, z.c), As = xA, yA = h[rA >> 2]);
                          var zA = (As << 3) + yA, te = zA;
                          m = te >> 2;
                          ue = zA + 4;
                          j = ue >> 2;
                          var cG = h[j], AA = (w[0] = h[m], x[0]), BA = (w[0] = cG, x[0]), Sk = (ef * AA - df * BA + is - ZF) * xs + (df * AA + ef * BA + js - $F) * kA, Hm = As;
                        } else {
                          G(z.K, 183, z.xb, z.f), Sk = 0, Hm = -1;
                        }
                        Yo = -1;
                      }
                    }
                    var dG = Sk > Sr;
                    c : do {
                      if (dG) {
                        var Bs = wm, Cs = 4;
                      } else {
                        var eG = Sk > gy;
                        do {
                          if (eG) {
                            var Ds = cf;
                          } else {
                            var Es = Zp(fa, Hm, Yo, bf);
                            if (Es < gy) {
                              Bs = bf;
                              Cs = 1;
                              break c;
                            }
                            if (Es > Sr) {
                              var cp = cf, Km = bf, dp = 0, ep = Es, Fs = Sk;
                            } else {
                              Bs = bf;
                              Cs = 3;
                              break c;
                            }
                            for (;;) {
                              var fp = 0 == (dp & 1) ? .5 * (Km + cp) : Km + (Ok - ep) * (cp - Km) / (Fs - ep), gp = Zp(fa, Hm, Yo, fp), Gs = gp - Ok;
                              if (.0012499999720603228 > (0 < Gs ? Gs : -Gs)) {
                                var Hs = dp, CA = fp;
                                break;
                              }
                              var hp = gp > Ok, fG = hp ? Fs : gp, gG = hp ? gp : ep, hG = hp ? fp : Km, iG = hp ? cp : fp, DA = dp + 1;
                              h[it >> 2] += 1;
                              if (50 == DA) {
                                Hs = 50;
                                CA = cf;
                                break;
                              } else {
                                cp = iG, Km = hG, dp = DA, ep = gG, Fs = fG;
                              }
                            }
                            var EA = h[jt >> 2];
                            h[jt >> 2] = EA > Hs ? EA : Hs;
                            if (8 == Qk) {
                              Ds = bf;
                            } else {
                              Qk += 1;
                              cf = CA;
                              continue b;
                            }
                          }
                        } while (0);
                        var FA = xm + 1;
                        h[kt >> 2] += 1;
                        if (20 == FA) {
                          ym = 20;
                          So = Ds;
                          To = 1;
                          break a;
                        } else {
                          bf = Ds;
                          xm = FA;
                          continue a;
                        }
                      }
                    } while (0);
                    h[kt >> 2] += 1;
                    ym = xm + 1;
                    So = Bs;
                    To = Cs;
                    break a;
                  }
                }
                var GA = h[lt >> 2];
                h[lt >> 2] = GA > ym ? GA : ym;
                if (3 == To) {
                  var HA = Mo + (1 - Mo) * So, Ls = 1 > HA ? HA : 1;
                } else {
                  Ls = 1;
                }
                l[Ea + 33] = Ls;
                h[q] |= 32;
                var Ms = Ls;
              } else {
                Ms = l[Ea + 33];
              }
              Ms < Ud ? (Ii = lm, Ji = Ms) : (Ii = se, Ji = Ud);
            }
          }
        } while (0);
        se = Ii;
        Ud = Ji;
        ao = lm + 12;
      }
    }
    a[nc] = hu;
    var Mm = h[tb >> 2];
    Ks(Mm, ku);
    Ks(Mm, lu);
    Ks(Mm, h[tb + 16 >> 2]);
    Ks(Mm, ju);
    Ks(Mm, iu);
    at(Yc);
    l[rb + 25756] = 1e3 * (h[Yc >> 2] - Vn) + .0010000000474974513 * h[Yc + 4 >> 2] - jm;
  }
  l[xd >> 2] = 59.999996185302734;
  var Ns = k[hb], jG = 0 == (Ns & 4);
  do {
    if (jG) {
      var Os = Ns;
    } else {
      var IA = h[rb + 25738];
      if (0 == IA) {
        Os = Ns;
      } else {
        var Ps = IA;
        for (d = Ps >> 2; ; ) {
          l[d + 19] = 0;
          l[d + 20] = 0;
          l[d + 21] = 0;
          var JA = h[d + 24];
          if (0 == JA) {
            break;
          } else {
            Ps = JA, d = Ps >> 2;
          }
        }
        Os = h[hb];
      }
    }
  } while (0);
  h[hb] = Os & -3;
  at(od);
  l[rb + 25749] = 1e3 * (h[od >> 2] - Oc) + .0010000000474974513 * h[od + 4 >> 2] - zc;
  Qf = W;
}

function bt(c, d) {
  var e, g, f, i, j, m = c >> 2, n = Qf;
  Qf += 192;
  j = n >> 2;
  var o = n + 92, q = n + 104, p = n + 128;
  i = p >> 2;
  var r = c + 64, s = r >> 2;
  f = p >> 2;
  for (var u = s + 16; s < u; s++, f++) {
    h[f] = h[s];
  }
  f = c + 4 >> 2;
  s = k[f];
  h[f] = s | 4;
  var u = s >>> 1, A = k[m + 12], E = k[m + 13], s = 0 != ((a[E + 38] | a[A + 38]) & 1), y = k[A + 8 >> 2], I = k[E + 8 >> 2], C = y + 12, K = I + 12;
  do {
    if (s) {
      e = h[A + 12 >> 2];
      g = h[E + 12 >> 2];
      var J = h[m + 14], M = h[m + 15];
      h[j + 4] = 0;
      h[j + 5] = 0;
      l[j + 6] = 0;
      h[j + 11] = 0;
      h[j + 12] = 0;
      l[j + 13] = 0;
      up(n, e, J);
      up(n + 28, g, M);
      g = n + 56 >> 2;
      e = C >> 2;
      h[g] = h[e];
      h[g + 1] = h[e + 1];
      h[g + 2] = h[e + 2];
      h[g + 3] = h[e + 3];
      g = n + 72 >> 2;
      e = K >> 2;
      h[g] = h[e];
      h[g + 1] = h[e + 1];
      h[g + 2] = h[e + 2];
      h[g + 3] = h[e + 3];
      a[n + 88] = 1;
      b[o + 4 >> 1] = 0;
      Rp(q, o, n);
      e = 11920928955078125e-22 > l[q + 16 >> 2];
      h[m + 31] = 0;
      g = e;
      e = u & 1;
    } else {
      km[h[h[m] >> 2]](c, r, C, K);
      J = c + 124;
      e = g = 0 < h[J >> 2];
      a : do {
        if (g) {
          for (var M = h[i + 15], B = 0; ; ) {
            var F = c + 20 * B + 72;
            l[F >> 2] = 0;
            var H = c + 20 * B + 76;
            l[H >> 2] = 0;
            for (var P = h[m + (5 * B | 0) + 20], D = 0; D < M; ) {
              if (h[i + (5 * D | 0) + 4] == P) {
                l[F >> 2] = l[i + (5 * D | 0) + 2];
                l[H >> 2] = l[i + (5 * D | 0) + 3];
                break;
              } else {
                D += 1;
              }
            }
            B += 1;
            if (B >= h[J >> 2]) {
              break a;
            }
          }
        }
      } while (0);
      J = u & 1;
      g != J && (g = y + 4, M = b[g >> 1], 0 == (M & 2) && (b[g >> 1] = M | 2, l[y + 144 >> 2] = 0), g = I + 4, M = b[g >> 1], 0 == (M & 2) && (b[g >> 1] = M | 2, l[I + 144 >> 2] = 0));
      g = e;
      e = J;
    }
  } while (0);
  i = 0 != g;
  j = h[f];
  h[f] = i ? j | 2 : j & -3;
  j = i ^ 1;
  m = 0 == d;
  if (!(0 != e | j | m)) {
    km[h[h[d >> 2] + 8 >> 2]](d, c);
  }
  if (!(i | 0 == e | m)) {
    km[h[h[d >> 2] + 12 >> 2]](d, c);
  }
  if (!(s | j | m)) {
    km[h[h[d >> 2] + 16 >> 2]](d, c, p);
  }
  Qf = n;
}

function ct(c, d) {
  var e, g, f, i, j, m, n, o, q = d >> 2;
  n = c >> 2;
  o = d >> 2;
  h[n] = h[o];
  h[n + 1] = h[o + 1];
  h[n + 2] = h[o + 2];
  h[n + 3] = h[o + 3];
  h[n + 4] = h[o + 4];
  h[n + 5] = h[o + 5];
  var p = h[q + 10];
  m = c + 32;
  h[m >> 2] = p;
  n = h[q + 7];
  o = c + 48 >> 2;
  h[o] = n;
  var r = 88 * n;
  n = p + 102796 >> 2;
  var s = h[n];
  if (32 > s) {
    var u = s;
  } else {
    G(z.j, 38, z.n, z.p), u = h[n];
  }
  s = p + 12 * u + 102412;
  h[p + 12 * u + 102416 >> 2] = r;
  j = p + 102400 >> 2;
  i = h[j];
  102400 < i + r ? (j = Nj(r), h[s >> 2] = j, a[p + 12 * u + 102420] = 1) : (h[s >> 2] = p + i, a[p + 12 * u + 102420] = 0, h[j] += r);
  u = p + 102404;
  r = h[u >> 2] + r;
  h[u >> 2] = r;
  p += 102408;
  u = h[p >> 2];
  h[p >> 2] = u > r ? u : r;
  h[n] += 1;
  n = c + 36;
  h[n >> 2] = h[s >> 2];
  p = h[m >> 2];
  r = 152 * h[o];
  m = p + 102796 >> 2;
  s = h[m];
  32 > s ? u = s : (G(z.j, 38, z.n, z.p), u = h[m]);
  s = p + 12 * u + 102412;
  h[p + 12 * u + 102416 >> 2] = r;
  j = p + 102400 >> 2;
  i = h[j];
  102400 < i + r ? (j = Nj(r), h[s >> 2] = j, a[p + 12 * u + 102420] = 1) : (h[s >> 2] = p + i, a[p + 12 * u + 102420] = 0, h[j] += r);
  u = p + 102404;
  r = h[u >> 2] + r;
  h[u >> 2] = r;
  p += 102408;
  u = h[p >> 2];
  h[p >> 2] = u > r ? u : r;
  h[m] += 1;
  m = c + 40;
  h[m >> 2] = h[s >> 2];
  h[c + 24 >> 2] = h[q + 8];
  h[c + 28 >> 2] = h[q + 9];
  q = h[q + 6];
  s = c + 44;
  h[s >> 2] = q;
  p = 0 < h[o];
  a : do {
    if (p) {
      r = c + 20;
      u = c + 8;
      j = 0;
      for (i = q; ; ) {
        var A = h[i + (j << 2) >> 2];
        i = A >> 2;
        var E = h[i + 12];
        f = h[i + 13];
        var y = l[h[E + 12 >> 2] + 8 >> 2], I = l[h[f + 12 >> 2] + 8 >> 2], C = h[E + 8 >> 2], K = h[f + 8 >> 2], E = h[i + 31], J = 0 < E;
        J || G(z.C, 71, z.mb, z.Lb);
        g = h[m >> 2];
        f = g >> 2;
        l[f + (38 * j | 0) + 34] = l[i + 34];
        l[f + (38 * j | 0) + 35] = l[i + 35];
        var M = C + 8;
        h[g + 152 * j + 112 >> 2] = h[M >> 2];
        var B = K + 8;
        h[g + 152 * j + 116 >> 2] = h[B >> 2];
        var F = C + 120;
        l[f + (38 * j | 0) + 30] = l[F >> 2];
        var H = K + 120;
        l[f + (38 * j | 0) + 31] = l[H >> 2];
        var P = C + 128;
        l[f + (38 * j | 0) + 32] = l[P >> 2];
        var D = K + 128;
        l[f + (38 * j | 0) + 33] = l[D >> 2];
        h[g + 152 * j + 148 >> 2] = j;
        h[g + 152 * j + 144 >> 2] = E;
        g = g + 152 * j + 80 >> 2;
        h[g] = 0;
        h[g + 1] = 0;
        h[g + 2] = 0;
        h[g + 3] = 0;
        h[g + 4] = 0;
        h[g + 5] = 0;
        h[g + 6] = 0;
        h[g + 7] = 0;
        g = h[n >> 2];
        e = g >> 2;
        h[g + 88 * j + 32 >> 2] = h[M >> 2];
        h[g + 88 * j + 36 >> 2] = h[B >> 2];
        l[e + (22 * j | 0) + 10] = l[F >> 2];
        l[e + (22 * j | 0) + 11] = l[H >> 2];
        C += 28;
        M = g + 88 * j + 48;
        B = h[C + 4 >> 2];
        h[M >> 2] = h[C >> 2];
        h[M + 4 >> 2] = B;
        K += 28;
        C = g + 88 * j + 56;
        M = h[K + 4 >> 2];
        h[C >> 2] = h[K >> 2];
        h[C + 4 >> 2] = M;
        l[e + (22 * j | 0) + 16] = l[P >> 2];
        l[e + (22 * j | 0) + 17] = l[D >> 2];
        P = A + 104;
        D = g + 88 * j + 16;
        K = h[P + 4 >> 2];
        h[D >> 2] = h[P >> 2];
        h[D + 4 >> 2] = K;
        P = A + 112;
        D = g + 88 * j + 24;
        K = h[P + 4 >> 2];
        h[D >> 2] = h[P >> 2];
        h[D + 4 >> 2] = K;
        h[g + 88 * j + 84 >> 2] = E;
        l[e + (22 * j | 0) + 19] = y;
        l[e + (22 * j | 0) + 20] = I;
        h[g + 88 * j + 72 >> 2] = h[i + 30];
        b : do {
          if (J) {
            for (y = 0; ; ) {
              if (I = A + 20 * y + 64, 0 == (a[r] & 1) ? (l[f + (38 * j | 0) + (9 * y | 0) + 4] = 0, l[f + (38 * j | 0) + (9 * y | 0) + 5] = 0) : (l[f + (38 * j | 0) + (9 * y | 0) + 4] = l[u >> 2] * l[i + (5 * y | 0) + 18], l[f + (38 * j | 0) + (9 * y | 0) + 5] = l[u >> 2] * l[i + (5 * y | 0) + 19]), l[f + (38 * j | 0) + (9 * y | 0)] = 0, l[f + (38 * j | 0) + (9 * y | 0) + 1] = 0, l[f + (38 * j | 0) + (9 * y | 0) + 2] = 0, l[f + (38 * j | 0) + (9 * y | 0) + 3] = 0, l[f + (38 * j | 0) + (9 * y | 0) + 6] = 0, l[f + (38 * j | 0) + (9 * y | 0) + 7] = 0, l[f + (38 * j | 0) + (9 * y | 0) + 8] = 0, e = (y << 3) + g + 88 * j, P = h[I + 4 >> 2], h[e >> 2] = h[I >> 2], h[e + 4 >> 2] = P, y += 1, y == E) {
                break b;
              }
            }
          }
        } while (0);
        j += 1;
        if (j >= h[o]) {
          break a;
        }
        i = h[s >> 2];
      }
    }
  } while (0);
}

function dt(c) {
  var d, e, g, f, i, j, m, n, o, q = Qf;
  Qf += 24;
  var p = c + 48, r = 0 < h[p >> 2];
  a : do {
    if (r) {
      var s = c + 40, u = c + 36, A = c + 44, E = c + 24, y = c + 28, I = q, C = q;
      o = C >> 2;
      n = q >> 2;
      m = q + 4 >> 2;
      for (var K = q + 8, J = 0; ; ) {
        var M = k[s >> 2];
        j = M >> 2;
        var B = h[u >> 2], F = l[(B + 76 >> 2) + (22 * J | 0)], H = l[(B + 80 >> 2) + (22 * J | 0)], P = h[h[A >> 2] + (h[j + (38 * J | 0) + 37] << 2) >> 2];
        i = P >> 2;
        var D = P + 64, Q = h[j + (38 * J | 0) + 28], O = h[j + (38 * J | 0) + 29], L = l[j + (38 * J | 0) + 30], jb = l[j + (38 * J | 0) + 31], U = l[j + (38 * J | 0) + 32], N = l[j + (38 * J | 0) + 33], ma = B + 88 * J + 48, na = h[ma + 4 >> 2], za = (w[0] = h[ma >> 2], x[0]), S = (w[0] = na, x[0]), T = B + 88 * J + 56, $ = h[T + 4 >> 2], Fa = (w[0] = h[T >> 2], x[0]), Z = (w[0] = $, x[0]), X = h[E >> 2], ba = X + 12 * Q, Da = h[ba + 4 >> 2], Ea = (w[0] = h[ba >> 2], x[0]), lb = (w[0] = Da, x[0]), Qa = l[(X + 8 >> 2) + (3 * Q | 0)], qa = h[y >> 2], va = qa + 12 * Q, Y = h[va + 4 >> 2], Ga = (w[0] = h[va >> 2], x[0]), wa = (w[0] = Y, x[0]), Ra = l[(qa + 8 >> 2) + (3 * Q | 0)], Za = X + 12 * O, $a = h[Za + 4 >> 2], La = (w[0] = h[Za >> 2], x[0]), ab = (w[0] = $a, x[0]), kb = l[(X + 8 >> 2) + (3 * O | 0)], fb = qa + 12 * O, pb = h[fb + 4 >> 2], ga = (w[0] = h[fb >> 2], x[0]), da = (w[0] = pb, x[0]), bb = l[(qa + 8 >> 2) + (3 * O | 0)], ca = P + 124, ha = h[ca >> 2];
        if (0 < ha) {
          var ta = ha;
        } else {
          G(z.C, 168, z.lb, z.Zb), ta = h[ca >> 2];
        }
        var ua = Nr(Qa), oa = Is(Qa), ka = Nr(kb), xa = Is(kb), Ua = Ea - (oa * za - ua * S), la = lb - (ua * za + oa * S), Sa = La - (xa * Fa - ka * Z), cb = ab - (ka * Fa + xa * Z);
        f = D >> 2;
        var qb = 0 == ta;
        b : do {
          if (!qb) {
            var xb = h[i + 30];
            if (0 == xb) {
              l[n] = 1;
              l[m] = 0;
              var Pb = l[i + 28], Na = l[i + 29], Ha = oa * Pb - ua * Na + Ua, pa = ua * Pb + oa * Na + la, Ia = l[D >> 2], Oa = l[i + 17], Pa = xa * Ia - ka * Oa + Sa, Aa = ka * Ia + xa * Oa + cb, ia = Ha - Pa, Va = pa - Aa;
              if (1.4210854715202004e-14 < ia * ia + Va * Va) {
                var ra = Pa - Ha, Ka = Aa - pa, db = (x[0] = ra, w[0]), ub = (x[0] = Ka, w[0]) | 0;
                h[o] = 0 | db;
                h[o + 1] = ub;
                var vb = bn(ra * ra + Ka * Ka);
                if (1.1920928955078125e-7 > vb) {
                  var mb = ra, gb = Ka;
                } else {
                  var nb = 1 / vb, Wa = ra * nb;
                  l[n] = Wa;
                  var ea = Ka * nb;
                  l[m] = ea;
                  mb = Wa;
                  gb = ea;
                }
              } else {
                mb = 1, gb = 0;
              }
              var Ja = .5 * (pa + gb * F + (Aa - gb * H)), Ba = (x[0] = .5 * (Ha + mb * F + (Pa - mb * H)), w[0]), Ta = (x[0] = Ja, w[0]) | 0;
              h[K >> 2] = 0 | Ba;
              h[K + 4 >> 2] = Ta;
            } else {
              if (1 == xb) {
                var yb = l[i + 26], Xa = l[i + 27], eb = oa * yb - ua * Xa, Eb = ua * yb + oa * Xa, zb = (x[0] = eb, w[0]), Nb = (x[0] = Eb, w[0]) | 0, Qb = C;
                h[Qb >> 2] = 0 | zb;
                var Bb = C + 4;
                h[Bb >> 2] = Nb;
                var Ib = l[i + 28], Jb = l[i + 29], wb = oa * Ib - ua * Jb + Ua, Fb = ua * Ib + oa * Jb + la;
                if (0 < ta) {
                  for (var Gb = 0, ob = eb, Kb = Eb; ; ) {
                    var hb = l[f + (5 * Gb | 0)], rb = l[f + (5 * Gb | 0) + 1], W = xa * hb - ka * rb + Sa, ja = ka * hb + xa * rb + cb, Ca = F - ((W - wb) * ob + (ja - Fb) * Kb), Ub = .5 * (ja + Kb * Ca + (ja - Kb * H)), Ab = (Gb << 3) + I + 8, Cb = (x[0] = .5 * (W + ob * Ca + (W - ob * H)), w[0]), Xb = (x[0] = Ub, w[0]) | 0, dc = Ab;
                    h[dc >> 2] = 0 | Cb;
                    var Ma = Ab + 4;
                    h[Ma >> 2] = Xb;
                    var Lb = Gb + 1;
                    if (Lb >= ta) {
                      break b;
                    }
                    Gb = Lb;
                    ob = l[n];
                    Kb = l[m];
                  }
                }
              } else {
                if (2 == xb) {
                  var fa = l[i + 26], sb = l[i + 27], tb = xa * fa - ka * sb, V = ka * fa + xa * sb, Yb = (x[0] = tb, w[0]), gc = (x[0] = V, w[0]), Rb = 0 | Yb, cc = gc | 0, Qb = C;
                  h[Qb >> 2] = Rb;
                  Bb = C + 4;
                  h[Bb >> 2] = cc;
                  var Zb = l[i + 28], wc = l[i + 29], Xc = xa * Zb - ka * wc + Sa, kc = ka * Zb + xa * wc + cb, rc = 0 < ta;
                  c : do {
                    if (rc) {
                      for (var ec = 0, sc = tb, Mc = V; ; ) {
                        var Db = l[f + (5 * ec | 0)], Ya = l[f + (5 * ec | 0) + 1], Wb = oa * Db - ua * Ya + Ua, lc = ua * Db + oa * Ya + la, Ec = H - ((Wb - Xc) * sc + (lc - kc) * Mc), Nc = .5 * (lc - Mc * F + lc + Mc * Ec), oc = (ec << 3) + I + 8, $b = (x[0] = .5 * (Wb - sc * F + Wb + sc * Ec), w[0]), od = (x[0] = Nc, w[0]), Yc = 0 | $b, Hb = od | 0, dc = oc;
                        h[dc >> 2] = Yc;
                        Ma = oc + 4;
                        h[Ma >> 2] = Hb;
                        var ac = ec + 1, hc = l[n], yc = l[m];
                        if (ac < ta) {
                          ec = ac, sc = hc, Mc = yc;
                        } else {
                          var Zc = hc, tc = yc;
                          break c;
                        }
                      }
                    } else {
                      Zc = tb, tc = V;
                    }
                  } while (0);
                  var Oc = (x[0] = -Zc, w[0]), zc = (x[0] = -tc, w[0]) | 0;
                  h[o] = 0 | Oc;
                  h[o + 1] = zc;
                }
              }
            }
          }
        } while (0);
        var bc = M + 152 * J + 72, pc = bc, hd = h[o + 1];
        h[pc >> 2] = h[o];
        h[pc + 4 >> 2] = hd;
        g = M + 152 * J + 144 >> 2;
        var Sc = h[g], xd = 0 < Sc;
        do {
          if (xd) {
            e = M + 152 * J + 76 >> 2;
            d = bc >> 2;
            for (var ic = L + jb, uc = -bb, Pd = -Ra, yd = M + 152 * J + 140, Ob = 0; ; ) {
              var zd = l[q + (Ob << 3) + 8 >> 2], Ac = zd - Ea, fc = l[q + (Ob << 3) + 12 >> 2], Mb = fc - lb, Vb = M + 152 * J + 36 * Ob, Tc = (x[0] = Ac, w[0]), $c = (x[0] = Mb, w[0]) | 0;
              h[Vb >> 2] = 0 | Tc;
              h[Vb + 4 >> 2] = $c;
              var Ic = zd - La, fe = fc - ab, Pc = M + 152 * J + 36 * Ob + 8, Wd = (x[0] = Ic, w[0]), Fc = (x[0] = fe, w[0]) | 0;
              h[Pc >> 2] = 0 | Wd;
              h[Pc + 4 >> 2] = Fc;
              var mc = l[e], Jc = l[j + (38 * J | 0) + (9 * Ob | 0) + 1], Ad = l[d], Bd = Ac * mc - Jc * Ad, ad = l[j + (38 * J | 0) + (9 * Ob | 0) + 3], bd = Ic * mc - ad * Ad, pd = ic + U * Bd * Bd + N * bd * bd;
              l[j + (38 * J | 0) + (9 * Ob | 0) + 6] = 0 < pd ? 1 / pd : 0;
              var Qd = l[e], Hd = -1 * l[d], cd = Ac * Hd - Jc * Qd, Uc = Ic * Hd - ad * Qd, jc = ic + U * cd * cd + N * Uc * Uc;
              l[j + (38 * J | 0) + (9 * Ob | 0) + 7] = 0 < jc ? 1 / jc : 0;
              var Vc = M + 152 * J + 36 * Ob + 32;
              l[Vc >> 2] = 0;
              var Bc = l[d] * (ga + ad * uc - Ga - Jc * Pd) + l[e] * (da + Ic * bb - wa - Ac * Ra);
              -1 > Bc && (l[Vc >> 2] = Bc * -l[yd >> 2]);
              var id = Ob + 1;
              if (id == Sc) {
                break;
              } else {
                Ob = id;
              }
            }
            if (2 == h[g]) {
              var Sb = l[e], nc = l[d], ge = l[j + (38 * J | 0)] * Sb - l[j + (38 * J | 0) + 1] * nc, Id = l[j + (38 * J | 0) + 2] * Sb - l[j + (38 * J | 0) + 3] * nc, qd = l[j + (38 * J | 0) + 9] * Sb - l[j + (38 * J | 0) + 10] * nc, Rd = l[j + (38 * J | 0) + 11] * Sb - l[j + (38 * J | 0) + 12] * nc, rd = U * ge, Jd = N * Id, Cd = ic + rd * ge + Jd * Id, Dd = ic + U * qd * qd + N * Rd * Rd, dd = ic + rd * qd + Jd * Rd, sd = Cd * Dd - dd * dd;
              if (Cd * Cd < 1e3 * sd) {
                l[j + (38 * J | 0) + 24] = Cd;
                l[j + (38 * J | 0) + 25] = dd;
                l[j + (38 * J | 0) + 26] = dd;
                l[j + (38 * J | 0) + 27] = Dd;
                var Wc = 0 != sd ? 1 / sd : sd, Kd = dd * -Wc, Xd = Wc * Cd;
                l[j + (38 * J | 0) + 20] = Wc * Dd;
                l[j + (38 * J | 0) + 21] = Kd;
                l[j + (38 * J | 0) + 22] = Kd;
                l[j + (38 * J | 0) + 23] = Xd;
              } else {
                h[g] = 1;
              }
            }
          }
        } while (0);
        var Yd = J + 1;
        if (Yd < h[p >> 2]) {
          J = Yd;
        } else {
          break a;
        }
      }
    }
  } while (0);
  Qf = q;
}

function et(c) {
  var d, e, g, f, i = c + 48, j = 0 < h[i >> 2];
  a : do {
    if (j) {
      var m = c + 40;
      f = c + 28 >> 2;
      for (var n = 0; ; ) {
        var o = k[m >> 2];
        g = o >> 2;
        var q = o + 152 * n, p = k[g + (38 * n | 0) + 28], r = k[g + (38 * n | 0) + 29], s = l[g + (38 * n | 0) + 30], u = l[g + (38 * n | 0) + 32], A = l[g + (38 * n | 0) + 31], E = l[g + (38 * n | 0) + 33], y = o + 152 * n + 144, I = k[y >> 2], C = h[f], K = C + 12 * p, J = h[K + 4 >> 2], M = (w[0] = h[K >> 2], x[0]), B = (w[0] = J, x[0]), F = l[(C + 8 >> 2) + (3 * p | 0)], H = C + 12 * r, P = h[H + 4 >> 2], D = (w[0] = h[H >> 2], x[0]), Q = (w[0] = P, x[0]), O = l[(C + 8 >> 2) + (3 * r | 0)], L = o + 152 * n + 72, jb = h[L + 4 >> 2], U = (w[0] = h[L >> 2], x[0]), N = (w[0] = jb, x[0]), ma = -1 * U, na = l[g + (38 * n | 0) + 34];
        2 > I - 1 || G(z.C, 311, z.$, z.ec);
        var za = 0 < I;
        b : do {
          if (za) {
            for (var S = Q, T = D, $ = B, Fa = M, Z = F, X = O, ba = 0; ; ) {
              var Da = l[g + (38 * n | 0) + (9 * ba | 0) + 3], Ea = l[g + (38 * n | 0) + (9 * ba | 0) + 2], lb = l[g + (38 * n | 0) + (9 * ba | 0) + 1], Qa = l[g + (38 * n | 0) + (9 * ba | 0)], qa = na * l[g + (38 * n | 0) + (9 * ba | 0) + 4], va = o + 152 * n + 36 * ba + 20, Y = l[va >> 2], Ga = Y + l[g + (38 * n | 0) + (9 * ba | 0) + 7] * -((T + Da * -X - Fa - lb * -Z) * N + (S + Ea * X - $ - Qa * Z) * ma), wa = -qa, Ra = Ga < qa ? Ga : qa, Za = Ra < wa ? wa : Ra, $a = Za - Y;
              l[va >> 2] = Za;
              var La = N * $a, ab = ma * $a, kb = Fa - La * s, fb = $ - ab * s, pb = Z - u * (Qa * ab - lb * La), ga = T + La * A, da = S + ab * A, bb = X + E * (Ea * ab - Da * La), ca = ba + 1;
              if (ca == I) {
                var ha = da, ta = ga, ua = fb, oa = kb, ka = pb, xa = bb;
                break b;
              } else {
                S = da, T = ga, $ = fb, Fa = kb, Z = pb, X = bb, ba = ca;
              }
            }
          } else {
            ha = Q, ta = D, ua = B, oa = M, ka = F, xa = O;
          }
        } while (0);
        var Ua = 1 == h[y >> 2];
        b : do {
          if (Ua) {
            var la = l[g + (38 * n | 0) + 3], Sa = l[g + (38 * n | 0) + 2], cb = l[g + (38 * n | 0) + 1], qb = l[q >> 2], xb = o + 152 * n + 16, Pb = l[xb >> 2], Na = Pb + ((ta + la * -xa - oa - cb * -ka) * U + (ha + Sa * xa - ua - qb * ka) * N - l[g + (38 * n | 0) + 8]) * -l[g + (38 * n | 0) + 6], Ha = 0 < Na ? Na : 0, pa = Ha - Pb;
            l[xb >> 2] = Ha;
            var Ia = U * pa, Oa = N * pa, Pa = xa + E * (Sa * Oa - la * Ia), Aa = ka - u * (qb * Oa - cb * Ia), ia = oa - Ia * s, Va = ua - Oa * s, ra = ta + Ia * A, Ka = ha + Oa * A;
          } else {
            e = o + 152 * n + 16 >> 2;
            var db = l[e];
            d = o + 152 * n + 52 >> 2;
            var ub = l[d];
            0 > db | 0 > ub && G(z.C, 406, z.$, z.ic);
            var vb = -xa, mb = l[g + (38 * n | 0) + 3], gb = l[g + (38 * n | 0) + 2], nb = -ka, Wa = l[g + (38 * n | 0) + 1], ea = l[q >> 2], Ja = l[g + (38 * n | 0) + 12], Ba = l[g + (38 * n | 0) + 11], Ta = l[g + (38 * n | 0) + 10], yb = l[g + (38 * n | 0) + 9], Xa = l[g + (38 * n | 0) + 26], eb = l[g + (38 * n | 0) + 25], Eb = (ta + mb * vb - oa - Wa * nb) * U + (ha + gb * xa - ua - ea * ka) * N - l[g + (38 * n | 0) + 8] - (l[g + (38 * n | 0) + 24] * db + Xa * ub), zb = (ta + Ja * vb - oa - Ta * nb) * U + (ha + Ba * xa - ua - yb * ka) * N - l[g + (38 * n | 0) + 17] - (eb * db + l[g + (38 * n | 0) + 27] * ub), Nb = l[g + (38 * n | 0) + 20] * Eb + l[g + (38 * n | 0) + 22] * zb, Qb = l[g + (38 * n | 0) + 21] * Eb + l[g + (38 * n | 0) + 23] * zb, Bb = -Nb, Ib = -Qb;
            if (0 < Nb | 0 < Qb) {
              var Jb = Eb * -l[g + (38 * n | 0) + 6], wb = 0 > Jb;
              do {
                if (!wb && 0 <= eb * Jb + zb) {
                  var Fb = Jb - db, Gb = -ub, ob = U * Fb, Kb = N * Fb, hb = U * Gb, rb = N * Gb, W = ob + hb, ja = Kb + rb, Ca = oa - W * s, Ub = ua - ja * s, Ab = ka - u * (ea * Kb - Wa * ob + (yb * rb - Ta * hb)), Cb = ta + W * A, Xb = ha + ja * A, dc = xa + E * (gb * Kb - mb * ob + (Ba * rb - Ja * hb));
                  l[e] = Jb;
                  l[d] = 0;
                  Pa = dc;
                  Aa = Ab;
                  ia = Ca;
                  Va = Ub;
                  ra = Cb;
                  Ka = Xb;
                  break b;
                }
              } while (0);
              var Ma = zb * -l[g + (38 * n | 0) + 15], Lb = 0 > Ma;
              do {
                if (!Lb && 0 <= Xa * Ma + Eb) {
                  var fa = -db, sb = Ma - ub, tb = U * fa, V = N * fa, Yb = U * sb, gc = N * sb, Rb = tb + Yb, cc = V + gc, Zb = oa - Rb * s, wc = ua - cc * s, Xc = ka - u * (ea * V - Wa * tb + (yb * gc - Ta * Yb)), kc = ta + Rb * A, rc = ha + cc * A, ec = xa + E * (gb * V - mb * tb + (Ba * gc - Ja * Yb));
                  l[e] = 0;
                  l[d] = Ma;
                  Pa = ec;
                  Aa = Xc;
                  ia = Zb;
                  Va = wc;
                  ra = kc;
                  Ka = rc;
                  break b;
                }
              } while (0);
              if (0 > Eb | 0 > zb) {
                Pa = xa, Aa = ka, ia = oa, Va = ua, ra = ta, Ka = ha;
              } else {
                var sc = -db, Mc = -ub, Db = U * sc, Ya = N * sc, Wb = U * Mc, lc = N * Mc, Ec = Db + Wb, Nc = Ya + lc, oc = oa - Ec * s, $b = ua - Nc * s, od = ka - u * (ea * Ya - Wa * Db + (yb * lc - Ta * Wb)), Yc = ta + Ec * A, Hb = ha + Nc * A, ac = xa + E * (gb * Ya - mb * Db + (Ba * lc - Ja * Wb));
                l[e] = 0;
                l[d] = 0;
                Pa = ac;
                Aa = od;
                ia = oc;
                Va = $b;
                ra = Yc;
                Ka = Hb;
              }
            } else {
              var hc = Bb - db, yc = Ib - ub, Zc = U * hc, tc = N * hc, Oc = U * yc, zc = N * yc, bc = Zc + Oc, pc = tc + zc, hd = oa - bc * s, Sc = ua - pc * s, xd = ka - u * (ea * tc - Wa * Zc + (yb * zc - Ta * Oc)), ic = ta + bc * A, uc = ha + pc * A, Pd = xa + E * (gb * tc - mb * Zc + (Ba * zc - Ja * Oc));
              l[e] = Bb;
              l[d] = Ib;
              Pa = Pd;
              Aa = xd;
              ia = hd;
              Va = Sc;
              ra = ic;
              Ka = uc;
            }
          }
        } while (0);
        var yd = h[f] + 12 * p, Ob = (x[0] = ia, w[0]), zd = (x[0] = Va, w[0]) | 0;
        h[yd >> 2] = 0 | Ob;
        h[yd + 4 >> 2] = zd;
        l[(h[f] + 8 >> 2) + (3 * p | 0)] = Aa;
        var Ac = h[f] + 12 * r, fc = (x[0] = ra, w[0]), Mb = (x[0] = Ka, w[0]) | 0;
        h[Ac >> 2] = 0 | fc;
        h[Ac + 4 >> 2] = Mb;
        l[(h[f] + 8 >> 2) + (3 * r | 0)] = Pa;
        var Vb = n + 1;
        if (Vb < h[i >> 2]) {
          n = Vb;
        } else {
          break a;
        }
      }
    }
  } while (0);
}

function ft(c, d, e, g, f) {
  var i = g >> 2, j = e >> 2, d = d >> 2;
  0 < h[d + 21] || G(z.C, 617, z.pb, z.rc);
  var m = h[d + 18];
  if (0 == m) {
    var e = l[j + 3], m = l[d + 6], n = l[j + 2], o = l[d + 7], f = e * m - n * o + l[j], j = n * m + e * o + l[j + 1], m = l[i + 3], n = l[d], o = l[i + 2], g = l[d + 1], e = m * n - o * g + l[i], n = o * n + m * g + l[i + 1], i = e - f, m = n - j, o = (x[0] = i, w[0]), g = (x[0] = m, w[0]) | 0;
    h[c >> 2] = 0 | o;
    h[c + 4 >> 2] = g;
    o = bn(i * i + m * m);
    1.1920928955078125e-7 > o ? (o = i, g = m) : (g = 1 / o, o = i * g, l[c >> 2] = o, g *= m, l[c + 4 >> 2] = g);
    var q = c + 8, f = (x[0] = .5 * (f + e), w[0]), j = (x[0] = .5 * (j + n), w[0]) | 0;
    h[q >> 2] = 0 | f;
    h[q + 4 >> 2] = j;
    l[c + 16 >> 2] = i * o + m * g - l[d + 19] - l[d + 20];
  } else {
    if (1 == m) {
      var n = e + 12, m = l[n >> 2], o = l[d + 4], g = e + 8, q = l[g >> 2], p = l[d + 5], e = m * o - q * p, m = q * o + m * p, o = (x[0] = e, w[0]), q = (x[0] = m, w[0]) | 0;
      h[c >> 2] = 0 | o;
      h[c + 4 >> 2] = q;
      var n = l[n >> 2], o = l[d + 6], g = l[g >> 2], q = l[d + 7], p = l[i + 3], r = l[(f << 3 >> 2) + d], s = l[i + 2], u = l[((f << 3) + 4 >> 2) + d], f = p * r - s * u + l[i], i = s * r + p * u + l[i + 1];
      l[c + 16 >> 2] = (f - (n * o - g * q + l[j])) * e + (i - (g * o + n * q + l[j + 1])) * m - l[d + 19] - l[d + 20];
      c += 8;
      d = (x[0] = f, w[0]);
      i = (x[0] = i, w[0]) | 0;
      h[c >> 2] = 0 | d;
      h[c + 4 >> 2] = i;
    } else {
      2 == m && (n = g + 12, m = l[n >> 2], o = l[d + 4], g += 8, q = l[g >> 2], p = l[d + 5], e = m * o - q * p, m = q * o + m * p, o = (x[0] = e, w[0]), q = (x[0] = m, w[0]) | 0, h[c >> 2] = 0 | o, h[c + 4 >> 2] = q, n = l[n >> 2], o = l[d + 6], g = l[g >> 2], q = l[d + 7], p = l[j + 3], r = l[(f << 3 >> 2) + d], s = l[j + 2], u = l[((f << 3) + 4 >> 2) + d], f = p * r - s * u + l[j], j = s * r + p * u + l[j + 1], l[c + 16 >> 2] = (f - (n * o - g * q + l[i])) * e + (j - (g * o + n * q + l[i + 1])) * m - l[d + 19] - l[d + 20], d = c + 8, i = (x[0] = f, w[0]), j = (x[0] = j, w[0]) | 0, h[d >> 2] = 0 | i, h[d + 4 >> 2] = j, d = (x[0] = -e, w[0]), i = (x[0] = -m, w[0]) | 0, h[c >> 2] = 0 | d, h[c + 4 >> 2] = i);
    }
  }
}

function Nj(c) {
  var d, e, g, f, i, j, m, n, o, q, p, r, s, u, A, E, y, I, C, K = 245 > c;
  a : do {
    if (K) {
      var J = 11 > c ? 16 : c + 11 & -8, M = J >>> 3, B = k[R >> 2], F = B >>> M;
      if (0 == (F & 3)) {
        if (J > k[R + 8 >> 2]) {
          if (0 == F) {
            var H = h[R + 4 >> 2];
            if (0 == H) {
              Ca = J;
              I = Ca >> 2;
              C = 156;
              break;
            }
            var P = (H & -H) - 1, D = P >>> 12 & 16, Q = P >>> D, O = Q >>> 5 & 8, L = Q >>> O, jb = L >>> 2 & 4, U = L >>> jb, N = U >>> 1 & 2, ma = U >>> N, na = ma >>> 1 & 1, za = k[R + ((O | D | jb | N | na) + (ma >>> na) << 2) + 304 >> 2], S = za;
            y = S >> 2;
            var T = (h[za + 4 >> 2] & -8) - J;
            b : for (;;) {
              for (var $ = S; ; ) {
                var Fa = h[$ + 16 >> 2];
                if (0 == Fa) {
                  var Z = h[$ + 20 >> 2];
                  if (0 == Z) {
                    break b;
                  } else {
                    var X = Z;
                  }
                } else {
                  X = Fa;
                }
                var ba = (h[X + 4 >> 2] & -8) - J;
                if (ba < T) {
                  S = X;
                  y = S >> 2;
                  T = ba;
                  continue b;
                } else {
                  $ = X;
                }
              }
            }
            var Da = S, Ea = k[R + 16 >> 2], lb = Da < Ea;
            do {
              if (!lb) {
                var Qa = Da + J, qa = Qa;
                if (Da < Qa) {
                  var va = k[y + 6], Y = k[y + 3], Ga = Y == S;
                  do {
                    if (Ga) {
                      var wa = S + 20, Ra = h[wa >> 2];
                      if (0 == Ra) {
                        var Za = S + 16, $a = h[Za >> 2];
                        if (0 == $a) {
                          var La = 0;
                          E = La >> 2;
                          break;
                        } else {
                          var ab = Za, kb = $a;
                        }
                      } else {
                        ab = wa, kb = Ra, C = 38;
                      }
                      for (;;) {
                        var fb = kb + 20, pb = h[fb >> 2];
                        if (0 != pb) {
                          ab = fb, kb = pb;
                        } else {
                          var ga = kb + 16, da = k[ga >> 2];
                          if (0 == da) {
                            break;
                          } else {
                            ab = ga, kb = da;
                          }
                        }
                      }
                      ab < Ea && (mt(), aa("Reached an unreachable!"));
                      h[ab >> 2] = 0;
                      La = kb;
                    } else {
                      var bb = k[y + 2];
                      bb < Ea && (mt(), aa("Reached an unreachable!"));
                      h[bb + 12 >> 2] = Y;
                      h[Y + 8 >> 2] = bb;
                      La = Y;
                    }
                    E = La >> 2;
                  } while (0);
                  var ca = 0 == va;
                  b : do {
                    if (!ca) {
                      var ha = S + 28, ta = (h[ha >> 2] << 2) + R + 304, ua = S == h[ta >> 2];
                      do {
                        if (ua) {
                          if (h[ta >> 2] = La, 0 == La) {
                            h[R + 4 >> 2] &= 1 << h[ha >> 2] ^ -1;
                            break b;
                          }
                        } else {
                          va < k[R + 16 >> 2] && (mt(), aa("Reached an unreachable!"));
                          var oa = va + 16;
                          h[oa >> 2] == S ? h[oa >> 2] = La : h[va + 20 >> 2] = La;
                          if (0 == La) {
                            break b;
                          }
                        }
                      } while (0);
                      La < k[R + 16 >> 2] && (mt(), aa("Reached an unreachable!"));
                      h[E + 6] = va;
                      var ka = k[y + 4];
                      0 != ka && (ka < k[R + 16 >> 2] && (mt(), aa("Reached an unreachable!")), h[E + 4] = ka, h[ka + 24 >> 2] = La);
                      var xa = k[y + 5];
                      0 != xa && (xa < k[R + 16 >> 2] && (mt(), aa("Reached an unreachable!")), h[E + 5] = xa, h[xa + 24 >> 2] = La);
                    }
                  } while (0);
                  if (16 > T) {
                    var Ua = T + J;
                    h[y + 1] = Ua | 3;
                    var la = Da + (Ua + 4);
                    h[la >> 2] |= 1;
                  } else {
                    h[y + 1] = J | 3;
                    h[Da + (J | 4) >> 2] = T | 1;
                    h[Da + T + J >> 2] = T;
                    var Sa = k[R + 8 >> 2];
                    if (0 != Sa) {
                      var cb = k[R + 20 >> 2], qb = Sa >>> 2 & 1073741822, xb = (qb << 2) + R + 40, Pb = k[R >> 2], Na = 1 << (Sa >>> 3);
                      if (0 == (Pb & Na)) {
                        h[R >> 2] = Pb | Na;
                        var Ha = xb, pa = (qb + 2 << 2) + R + 40;
                      } else {
                        var Ia = (qb + 2 << 2) + R + 40, Oa = k[Ia >> 2];
                        Oa < k[R + 16 >> 2] && (mt(), aa("Reached an unreachable!"));
                        Ha = Oa;
                        pa = Ia;
                      }
                      h[pa >> 2] = cb;
                      h[Ha + 12 >> 2] = cb;
                      h[cb + 8 >> 2] = Ha;
                      h[cb + 12 >> 2] = xb;
                    }
                    h[R + 8 >> 2] = T;
                    h[R + 20 >> 2] = qa;
                  }
                  var Pa = S + 8, Aa = Pa;
                  if (0 == Pa) {
                    Ca = J, I = Ca >> 2, C = 156;
                  } else {
                    var ia = Aa;
                    C = 334;
                  }
                  break a;
                }
              }
            } while (0);
            mt();
            aa("Reached an unreachable!");
          }
          var Va = 2 << M, ra = F << M & (Va | -Va), Ka = (ra & -ra) - 1, db = Ka >>> 12 & 16, ub = Ka >>> db, vb = ub >>> 5 & 8, mb = ub >>> vb, gb = mb >>> 2 & 4, nb = mb >>> gb, Wa = nb >>> 1 & 2, ea = nb >>> Wa, Ja = ea >>> 1 & 1, Ba = (vb | db | gb | Wa | Ja) + (ea >>> Ja), Ta = Ba << 1, yb = (Ta << 2) + R + 40, Xa = (Ta + 2 << 2) + R + 40, eb = k[Xa >> 2], Eb = eb + 8, zb = k[Eb >> 2];
          yb == zb ? h[R >> 2] = B & (1 << Ba ^ -1) : (zb < k[R + 16 >> 2] && (mt(), aa("Reached an unreachable!")), h[Xa >> 2] = zb, h[zb + 12 >> 2] = yb);
          var Nb = Ba << 3, Qb = Nb - J;
          h[eb + 4 >> 2] = J | 3;
          var Bb = eb, Ib = Bb + J;
          h[Bb + (J | 4) >> 2] = Qb | 1;
          h[Bb + Nb >> 2] = Qb;
          var Jb = k[R + 8 >> 2];
          if (0 != Jb) {
            var wb = h[R + 20 >> 2], Fb = Jb >>> 2 & 1073741822, Gb = (Fb << 2) + R + 40, ob = k[R >> 2], Kb = 1 << (Jb >>> 3);
            if (0 == (ob & Kb)) {
              h[R >> 2] = ob | Kb;
              var hb = Gb, rb = (Fb + 2 << 2) + R + 40;
            } else {
              var W = (Fb + 2 << 2) + R + 40, ja = k[W >> 2];
              ja < k[R + 16 >> 2] && (mt(), aa("Reached an unreachable!"));
              hb = ja;
              rb = W;
            }
            h[rb >> 2] = wb;
            h[hb + 12 >> 2] = wb;
            h[wb + 8 >> 2] = hb;
            h[wb + 12 >> 2] = Gb;
          }
          h[R + 8 >> 2] = Qb;
          h[R + 20 >> 2] = Ib;
          ia = Eb;
          C = 334;
        } else {
          var Ca = J;
          I = Ca >> 2;
          C = 156;
        }
      } else {
        var Ub = (F & 1 ^ 1) + M, Ab = Ub << 1, Cb = (Ab << 2) + R + 40, Xb = (Ab + 2 << 2) + R + 40, dc = k[Xb >> 2], Ma = dc + 8, Lb = k[Ma >> 2];
        Cb == Lb ? h[R >> 2] = B & (1 << Ub ^ -1) : (Lb < k[R + 16 >> 2] && (mt(), aa("Reached an unreachable!")), h[Xb >> 2] = Lb, h[Lb + 12 >> 2] = Cb);
        var fa = Ub << 3;
        h[dc + 4 >> 2] = fa | 3;
        var sb = dc + (fa | 4);
        h[sb >> 2] |= 1;
        ia = Ma;
        C = 334;
      }
    } else {
      if (4294967231 < c) {
        Ca = -1;
      } else {
        var tb = c + 11, V = tb & -8;
        A = V >> 2;
        var Yb = k[R + 4 >> 2];
        if (0 != Yb) {
          var gc = -V, Rb = tb >>> 8;
          if (0 == Rb) {
            var cc = 0;
          } else {
            if (16777215 < V) {
              cc = 31;
            } else {
              var Zb = Rb + 1048320 >>> 16 & 8, wc = Rb << Zb, Xc = wc + 520192 >>> 16 & 4, kc = wc << Xc, rc = kc + 245760 >>> 16 & 2, ec = 14 - (Xc | Zb | rc) + (kc << rc >>> 15), cc = V >>> ec + 7 & 1 | ec << 1;
            }
          }
          var sc = k[R + (cc << 2) + 304 >> 2], Mc = 0 == sc;
          b : do {
            if (Mc) {
              var Db = 0, Ya = gc, Wb = 0;
            } else {
              var lc = 31 == cc ? 0 : 25 - (cc >>> 1), Ec = 0, Nc = gc, oc = sc;
              u = oc >> 2;
              for (var $b = V << lc, od = 0; ; ) {
                var Yc = h[u + 1] & -8, Hb = Yc - V;
                if (Hb < Nc) {
                  if (Yc == V) {
                    Db = oc;
                    Ya = Hb;
                    Wb = oc;
                    break b;
                  } else {
                    var ac = oc, hc = Hb;
                  }
                } else {
                  ac = Ec, hc = Nc;
                }
                var yc = k[u + 5], Zc = k[(($b >>> 31 << 2) + 16 >> 2) + u], tc = 0 == yc | yc == Zc ? od : yc;
                if (0 == Zc) {
                  Db = ac;
                  Ya = hc;
                  Wb = tc;
                  break b;
                }
                Ec = ac;
                Nc = hc;
                oc = Zc;
                u = oc >> 2;
                $b <<= 1;
                od = tc;
              }
            }
          } while (0);
          if (0 == Wb & 0 == Db) {
            var Oc = 2 << cc, zc = Yb & (Oc | -Oc);
            if (0 == zc) {
              var bc = Wb;
            } else {
              var pc = (zc & -zc) - 1, hd = pc >>> 12 & 16, Sc = pc >>> hd, xd = Sc >>> 5 & 8, ic = Sc >>> xd, uc = ic >>> 2 & 4, Pd = ic >>> uc, yd = Pd >>> 1 & 2, Ob = Pd >>> yd, zd = Ob >>> 1 & 1, bc = h[R + ((xd | hd | uc | yd | zd) + (Ob >>> zd) << 2) + 304 >> 2];
            }
          } else {
            bc = Wb;
          }
          var Ac = 0 == bc;
          b : do {
            if (Ac) {
              var fc = Ya, Mb = Db;
              s = Mb >> 2;
            } else {
              var Vb = bc;
              r = Vb >> 2;
              for (var Tc = Ya, $c = Db; ; ) {
                var Ic = (h[r + 1] & -8) - V, fe = Ic < Tc, Pc = fe ? Ic : Tc, Wd = fe ? Vb : $c, Fc = k[r + 4];
                if (0 != Fc) {
                  Vb = Fc, r = Vb >> 2, Tc = Pc, $c = Wd;
                } else {
                  var mc = k[r + 5];
                  if (0 == mc) {
                    fc = Pc;
                    Mb = Wd;
                    s = Mb >> 2;
                    break b;
                  } else {
                    Vb = mc, r = Vb >> 2, Tc = Pc, $c = Wd;
                  }
                }
              }
            }
          } while (0);
          if (0 != Mb && fc < h[R + 8 >> 2] - V) {
            var Jc = Mb;
            p = Jc >> 2;
            var Ad = k[R + 16 >> 2], Bd = Jc < Ad;
            do {
              if (!Bd) {
                var ad = Jc + V, bd = ad;
                if (Jc < ad) {
                  var pd = k[s + 6], Qd = k[s + 3], Hd = Qd == Mb;
                  do {
                    if (Hd) {
                      var cd = Mb + 20, Uc = h[cd >> 2];
                      if (0 == Uc) {
                        var jc = Mb + 16, Vc = h[jc >> 2];
                        if (0 == Vc) {
                          var Bc = 0;
                          q = Bc >> 2;
                          break;
                        } else {
                          var id = jc, Sb = Vc;
                        }
                      } else {
                        id = cd, Sb = Uc, C = 103;
                      }
                      for (;;) {
                        var nc = Sb + 20, ge = h[nc >> 2];
                        if (0 != ge) {
                          id = nc, Sb = ge;
                        } else {
                          var Id = Sb + 16, qd = k[Id >> 2];
                          if (0 == qd) {
                            break;
                          } else {
                            id = Id, Sb = qd;
                          }
                        }
                      }
                      id < Ad && (mt(), aa("Reached an unreachable!"));
                      h[id >> 2] = 0;
                      Bc = Sb;
                    } else {
                      var Rd = k[s + 2];
                      Rd < Ad && (mt(), aa("Reached an unreachable!"));
                      h[Rd + 12 >> 2] = Qd;
                      h[Qd + 8 >> 2] = Rd;
                      Bc = Qd;
                    }
                    q = Bc >> 2;
                  } while (0);
                  var rd = 0 == pd;
                  b : do {
                    if (!rd) {
                      var Jd = Mb + 28, Cd = (h[Jd >> 2] << 2) + R + 304, Dd = Mb == h[Cd >> 2];
                      do {
                        if (Dd) {
                          if (h[Cd >> 2] = Bc, 0 == Bc) {
                            h[R + 4 >> 2] &= 1 << h[Jd >> 2] ^ -1;
                            break b;
                          }
                        } else {
                          pd < k[R + 16 >> 2] && (mt(), aa("Reached an unreachable!"));
                          var dd = pd + 16;
                          h[dd >> 2] == Mb ? h[dd >> 2] = Bc : h[pd + 20 >> 2] = Bc;
                          if (0 == Bc) {
                            break b;
                          }
                        }
                      } while (0);
                      Bc < k[R + 16 >> 2] && (mt(), aa("Reached an unreachable!"));
                      h[q + 6] = pd;
                      var sd = k[s + 4];
                      0 != sd && (sd < k[R + 16 >> 2] && (mt(), aa("Reached an unreachable!")), h[q + 4] = sd, h[sd + 24 >> 2] = Bc);
                      var Wc = k[s + 5];
                      0 != Wc && (Wc < k[R + 16 >> 2] && (mt(), aa("Reached an unreachable!")), h[q + 5] = Wc, h[Wc + 24 >> 2] = Bc);
                    }
                  } while (0);
                  var Kd = 16 > fc;
                  b : do {
                    if (Kd) {
                      var Xd = fc + V;
                      h[s + 1] = Xd | 3;
                      var Yd = Jc + (Xd + 4);
                      h[Yd >> 2] |= 1;
                    } else {
                      if (h[s + 1] = V | 3, h[((V | 4) >> 2) + p] = fc | 1, h[(fc >> 2) + p + A] = fc, 256 > fc) {
                        var he = fc >>> 2 & 1073741822, xe = (he << 2) + R + 40, Ge = k[R >> 2], ie = 1 << (fc >>> 3);
                        if (0 == (Ge & ie)) {
                          h[R >> 2] = Ge | ie;
                          var Ld = xe, ed = (he + 2 << 2) + R + 40;
                        } else {
                          var je = (he + 2 << 2) + R + 40, Zd = k[je >> 2];
                          Zd < k[R + 16 >> 2] && (mt(), aa("Reached an unreachable!"));
                          Ld = Zd;
                          ed = je;
                        }
                        h[ed >> 2] = bd;
                        h[Ld + 12 >> 2] = bd;
                        h[p + (A + 2)] = Ld;
                        h[p + (A + 3)] = xe;
                      } else {
                        var jd = ad, Qc = fc >>> 8;
                        if (0 == Qc) {
                          var Rc = 0;
                        } else {
                          if (16777215 < fc) {
                            Rc = 31;
                          } else {
                            var ye = Qc + 1048320 >>> 16 & 8, $d = Qc << ye, Qe = $d + 520192 >>> 16 & 4, Re = $d << Qe, Bf = Re + 245760 >>> 16 & 2, kf = 14 - (Qe | ye | Bf) + (Re << Bf >>> 15), Rc = fc >>> kf + 7 & 1 | kf << 1;
                          }
                        }
                        var Rf = (Rc << 2) + R + 304;
                        h[p + (A + 7)] = Rc;
                        var ah = Jc + (V + 16);
                        h[p + (A + 5)] = 0;
                        h[ah >> 2] = 0;
                        var Se = h[R + 4 >> 2], He = 1 << Rc;
                        if (0 == (Se & He)) {
                          h[R + 4 >> 2] = Se | He, h[Rf >> 2] = jd, h[p + (A + 6)] = Rf, h[p + (A + 3)] = jd, h[p + (A + 2)] = jd;
                        } else {
                          for (var lf = fc << (31 == Rc ? 0 : 25 - (Rc >>> 1)), ke = h[Rf >> 2]; ; ) {
                            if ((h[ke + 4 >> 2] & -8) == fc) {
                              var mf = ke + 8, Ie = k[mf >> 2], Lh = k[R + 16 >> 2], Mh = ke < Lh;
                              do {
                                if (!Mh && Ie >= Lh) {
                                  h[Ie + 12 >> 2] = jd;
                                  h[mf >> 2] = jd;
                                  h[p + (A + 2)] = Ie;
                                  h[p + (A + 3)] = ke;
                                  h[p + (A + 6)] = 0;
                                  break b;
                                }
                              } while (0);
                              mt();
                              aa("Reached an unreachable!");
                            }
                            var nf = (lf >>> 31 << 2) + ke + 16, Te = k[nf >> 2];
                            if (0 == Te) {
                              nf < k[R + 16 >> 2] && (mt(), aa("Reached an unreachable!"));
                              h[nf >> 2] = jd;
                              h[p + (A + 6)] = ke;
                              h[p + (A + 3)] = jd;
                              h[p + (A + 2)] = jd;
                              break b;
                            } else {
                              lf <<= 1, ke = Te;
                            }
                          }
                        }
                      }
                    }
                  } while (0);
                  var Cf = Mb + 8, bh = Cf;
                  0 == Cf ? (Ca = V, I = Ca >> 2, C = 156) : (ia = bh, C = 334);
                  break a;
                }
              }
            } while (0);
            mt();
            aa("Reached an unreachable!");
          }
        }
        Ca = V;
      }
      I = Ca >> 2;
      C = 156;
    }
  } while (0);
  a : do {
    if (156 == C) {
      var Je = k[R + 8 >> 2];
      if (Ca > Je) {
        var Nh = k[R + 12 >> 2];
        if (Ca < Nh) {
          var rg = Nh - Ca;
          h[R + 12 >> 2] = rg;
          var Sf = k[R + 24 >> 2], ch = Sf;
          h[R + 24 >> 2] = ch + Ca;
          h[(ch + 4 >> 2) + I] = rg | 1;
          h[Sf + 4 >> 2] = Ca | 3;
          ia = Sf + 8;
        } else {
          if (0 == h[nt >> 2] && 0 == h[nt >> 2]) {
            var Ue = ot();
            0 == (Ue - 1 & Ue) ? (h[nt + 8 >> 2] = Ue, h[nt + 4 >> 2] = Ue, h[nt + 12 >> 2] = -1, h[nt + 16 >> 2] = 2097152, h[nt + 20 >> 2] = 0, h[R + 440 >> 2] = 0, h[nt >> 2] = Math.floor(Date.now() / 1e3) & -16 ^ 1431655768) : (mt(), aa("Reached an unreachable!"));
          }
          var sg = 0 == (h[R + 440 >> 2] & 4);
          do {
            if (sg) {
              var tg = h[R + 24 >> 2], Oh = 0 == tg;
              b : do {
                if (Oh) {
                  C = 175;
                } else {
                  for (var dh = tg, of = R + 444; ; ) {
                    var ug = of, Df = k[ug >> 2];
                    if (Df <= dh) {
                      var vg = of + 4;
                      if (Df + h[vg >> 2] > dh) {
                        break;
                      }
                    }
                    var wg = k[of + 8 >> 2];
                    if (0 == wg) {
                      C = 175;
                      break b;
                    } else {
                      of = wg;
                    }
                  }
                  if (0 == of) {
                    C = 175;
                  } else {
                    var td = h[nt + 8 >> 2], pf = Ca + 47 - h[R + 12 >> 2] + td & -td;
                    if (2147483647 > pf) {
                      var kd = pt(pf);
                      if (kd == h[ug >> 2] + h[vg >> 2]) {
                        var Ef = kd, ud = pf, Ed = kd;
                        C = 182;
                      } else {
                        var Ff = kd, ae = pf;
                        C = 184;
                      }
                    } else {
                      C = 183;
                    }
                  }
                }
              } while (0);
              if (175 == C) {
                var Tf = pt(0);
                if (-1 == Tf) {
                  C = 183;
                } else {
                  var eh = h[nt + 8 >> 2], fh = Ca + (eh + 47) & -eh, gh = Tf, xg = h[nt + 4 >> 2], Gf = xg - 1, Hf = 0 == (Gf & gh) ? fh : fh - gh + (Gf + gh & -xg);
                  if (2147483647 > Hf) {
                    var Fd = pt(Hf);
                    Fd == Tf ? (Ef = Tf, ud = Hf, Ed = Fd, C = 182) : (Ff = Fd, ae = Hf, C = 184);
                  } else {
                    C = 183;
                  }
                }
              }
              if (183 == C) {
                h[R + 440 >> 2] |= 4, C = 192;
              } else {
                if (182 == C) {
                  if (-1 == Ef) {
                    Ff = Ed, ae = ud;
                  } else {
                    var ld = ud, xc = Ef;
                    o = xc >> 2;
                    C = 195;
                    break;
                  }
                }
                var hh = -ae;
                if (-1 != Ff & 2147483647 > ae) {
                  if (ae < Ca + 48) {
                    var yg = h[nt + 8 >> 2], Ve = Ca + 47 - ae + yg & -yg;
                    2147483647 > Ve ? -1 == pt(Ve) ? (pt(hh), C = 191) : (ze = Ve + ae, C = 190) : (ze = ae, C = 190);
                  } else {
                    var ze = ae;
                    C = 190;
                  }
                } else {
                  ze = ae, C = 190;
                }
                190 == C && -1 != Ff ? (ld = ze, xc = Ff, o = xc >> 2, C = 195) : (h[R + 440 >> 2] |= 4, C = 192);
              }
            } else {
              C = 192;
            }
          } while (0);
          if (192 == C) {
            var qf = h[nt + 8 >> 2], Uf = Ca + (qf + 47) & -qf;
            if (2147483647 > Uf) {
              var le = pt(Uf), If = pt(0);
              if (-1 != If & -1 != le & le < If) {
                var ih = If - le;
                ih <= Ca + 40 | -1 == le ? C = 333 : (ld = ih, xc = le, o = xc >> 2, C = 195);
              } else {
                C = 333;
              }
            } else {
              C = 333;
            }
          }
          do {
            if (195 == C) {
              var Vf = h[R + 432 >> 2] + ld;
              h[R + 432 >> 2] = Vf;
              Vf > k[R + 436 >> 2] && (h[R + 436 >> 2] = Vf);
              var Cc = k[R + 24 >> 2];
              n = Cc >> 2;
              var Ae = 0 == Cc;
              b : do {
                if (Ae) {
                  var Jf = k[R + 16 >> 2];
                  0 == Jf | xc < Jf && (h[R + 16 >> 2] = xc);
                  h[R + 444 >> 2] = xc;
                  h[R + 448 >> 2] = ld;
                  h[R + 456 >> 2] = 0;
                  h[R + 36 >> 2] = h[nt >> 2];
                  h[R + 32 >> 2] = -1;
                  for (var be = 0; ; ) {
                    var Sd = be << 1, Wf = (Sd << 2) + R + 40;
                    h[R + (Sd + 3 << 2) + 40 >> 2] = Wf;
                    h[R + (Sd + 2 << 2) + 40 >> 2] = Wf;
                    var zg = be + 1;
                    if (32 == zg) {
                      break;
                    } else {
                      be = zg;
                    }
                  }
                  var Xf = xc + 8, Yf = 0 == (Xf & 7) ? 0 : -Xf & 7, Be = ld - 40 - Yf;
                  h[R + 24 >> 2] = xc + Yf;
                  h[R + 12 >> 2] = Be;
                  h[(Yf + 4 >> 2) + o] = Be | 1;
                  h[(ld - 36 >> 2) + o] = 40;
                  h[R + 28 >> 2] = h[nt + 16 >> 2];
                } else {
                  var ce = R + 444;
                  for (m = ce >> 2; 0 != ce; ) {
                    var Ke = k[m], rf = ce + 4, Ag = k[rf >> 2], Zf = Ke + Ag;
                    if (xc == Zf) {
                      if (0 != (h[m + 3] & 8)) {
                        break;
                      }
                      var sf = Cc;
                      if (!(sf >= Ke & sf < Zf)) {
                        break;
                      }
                      h[rf >> 2] = Ag + ld;
                      var $f = h[R + 24 >> 2], ag = h[R + 12 >> 2] + ld, jh = $f, We = $f + 8, me = 0 == (We & 7) ? 0 : -We & 7, tf = ag - me;
                      h[R + 24 >> 2] = jh + me;
                      h[R + 12 >> 2] = tf;
                      h[jh + (me + 4) >> 2] = tf | 1;
                      h[jh + (ag + 4) >> 2] = 40;
                      h[R + 28 >> 2] = h[nt + 16 >> 2];
                      break b;
                    } else {
                      ce = h[m + 2], m = ce >> 2;
                    }
                  }
                  xc < k[R + 16 >> 2] && (h[R + 16 >> 2] = xc);
                  for (var Kf = xc + ld, Ce = R + 444; ; ) {
                    if (0 == Ce) {
                      C = 295;
                      break;
                    }
                    var Bg = Ce, ne = k[Bg >> 2];
                    j = ne >> 2;
                    if (ne == Kf) {
                      C = 219;
                      break;
                    }
                    Ce = h[Ce + 8 >> 2];
                  }
                  do {
                    if (219 == C && 0 == (h[Ce + 12 >> 2] & 8)) {
                      h[Bg >> 2] = xc;
                      var bg = Ce + 4;
                      h[bg >> 2] += ld;
                      var De = xc + 8, oe = 0 == (De & 7) ? 0 : -De & 7, Cg = ne + 8, Md = 0 == (Cg & 7) ? 0 : -Cg & 7;
                      i = Md >> 2;
                      var cg = ne + Md, Lf = cg, uf = oe + Ca;
                      f = uf >> 2;
                      var Dg = xc + uf, vd = Dg, Xe = cg - (xc + oe) - Ca;
                      h[(oe + 4 >> 2) + o] = Ca | 3;
                      var md = Lf == h[R + 24 >> 2];
                      c : do {
                        if (md) {
                          var kh = h[R + 12 >> 2] + Xe;
                          h[R + 12 >> 2] = kh;
                          h[R + 24 >> 2] = vd;
                          h[o + (f + 1)] = kh | 1;
                        } else {
                          if (Lf == h[R + 20 >> 2]) {
                            var pe = h[R + 8 >> 2] + Xe;
                            h[R + 8 >> 2] = pe;
                            h[R + 20 >> 2] = vd;
                            h[o + (f + 1)] = pe | 1;
                            h[xc + pe + uf >> 2] = pe;
                          } else {
                            var de = k[j + (i + 1)];
                            if (1 == (de & 3)) {
                              var Eg = de & -8, Mi = de >>> 3, Ni = 256 > de;
                              d : do {
                                if (Ni) {
                                  var Ye = k[((Md | 8) >> 2) + j], Fg = k[j + (i + 3)];
                                  if (Ye == Fg) {
                                    h[R >> 2] &= 1 << Mi ^ -1;
                                  } else {
                                    var dg = ((de >>> 2 & 1073741822) << 2) + R + 40;
                                    C = Ye == dg ? 234 : Ye < k[R + 16 >> 2] ? 237 : 234;
                                    do {
                                      if (234 == C && !(Fg != dg && Fg < k[R + 16 >> 2])) {
                                        h[Ye + 12 >> 2] = Fg;
                                        h[Fg + 8 >> 2] = Ye;
                                        break d;
                                      }
                                    } while (0);
                                    mt();
                                    aa("Reached an unreachable!");
                                  }
                                } else {
                                  var Ph = cg, Gg = k[((Md | 24) >> 2) + j], Hg = k[j + (i + 3)], Oj = Hg == Ph;
                                  do {
                                    if (Oj) {
                                      var Oi = Md | 16, lh = ne + (Oi + 4), Qh = h[lh >> 2];
                                      if (0 == Qh) {
                                        var mh = ne + Oi, nh = h[mh >> 2];
                                        if (0 == nh) {
                                          var Td = 0;
                                          g = Td >> 2;
                                          break;
                                        } else {
                                          var eg = mh, fg = nh;
                                        }
                                      } else {
                                        eg = lh, fg = Qh, C = 244;
                                      }
                                      for (;;) {
                                        var Pj = fg + 20, Pi = h[Pj >> 2];
                                        if (0 != Pi) {
                                          eg = Pj, fg = Pi;
                                        } else {
                                          var Rh = fg + 16, Mf = k[Rh >> 2];
                                          if (0 == Mf) {
                                            break;
                                          } else {
                                            eg = Rh, fg = Mf;
                                          }
                                        }
                                      }
                                      eg < k[R + 16 >> 2] && (mt(), aa("Reached an unreachable!"));
                                      h[eg >> 2] = 0;
                                      Td = fg;
                                    } else {
                                      var oh = k[((Md | 8) >> 2) + j];
                                      oh < k[R + 16 >> 2] && (mt(), aa("Reached an unreachable!"));
                                      h[oh + 12 >> 2] = Hg;
                                      h[Hg + 8 >> 2] = oh;
                                      Td = Hg;
                                    }
                                    g = Td >> 2;
                                  } while (0);
                                  if (0 != Gg) {
                                    var Sh = ne + (Md + 28), Ig = (h[Sh >> 2] << 2) + R + 304, Nd = Ph == h[Ig >> 2];
                                    do {
                                      if (Nd) {
                                        if (h[Ig >> 2] = Td, 0 == Td) {
                                          h[R + 4 >> 2] &= 1 << h[Sh >> 2] ^ -1;
                                          break d;
                                        }
                                      } else {
                                        Gg < k[R + 16 >> 2] && (mt(), aa("Reached an unreachable!"));
                                        var Qi = Gg + 16;
                                        h[Qi >> 2] == Ph ? h[Qi >> 2] = Td : h[Gg + 20 >> 2] = Td;
                                        if (0 == Td) {
                                          break d;
                                        }
                                      }
                                    } while (0);
                                    Td < k[R + 16 >> 2] && (mt(), aa("Reached an unreachable!"));
                                    h[g + 6] = Gg;
                                    var Th = Md | 16, Jg = k[(Th >> 2) + j];
                                    0 != Jg && (Jg < k[R + 16 >> 2] && (mt(), aa("Reached an unreachable!")), h[g + 4] = Jg, h[Jg + 24 >> 2] = Td);
                                    var Uh = k[(Th + 4 >> 2) + j];
                                    0 != Uh && (Uh < k[R + 16 >> 2] && (mt(), aa("Reached an unreachable!")), h[g + 5] = Uh, h[Uh + 24 >> 2] = Td);
                                  }
                                }
                              } while (0);
                              var Ri = ne + (Eg | Md), Ee = Eg + Xe;
                            } else {
                              Ri = Lf, Ee = Xe;
                            }
                            var Vh = Ri + 4;
                            h[Vh >> 2] &= -2;
                            h[o + (f + 1)] = Ee | 1;
                            h[(Ee >> 2) + o + f] = Ee;
                            if (256 > Ee) {
                              var Kg = Ee >>> 2 & 1073741822, Ze = (Kg << 2) + R + 40, Le = k[R >> 2], Si = 1 << (Ee >>> 3);
                              if (0 == (Le & Si)) {
                                h[R >> 2] = Le | Si;
                                var Lg = Ze, Ti = (Kg + 2 << 2) + R + 40;
                              } else {
                                var ph = (Kg + 2 << 2) + R + 40, Ui = k[ph >> 2];
                                Ui < k[R + 16 >> 2] && (mt(), aa("Reached an unreachable!"));
                                Lg = Ui;
                                Ti = ph;
                              }
                              h[Ti >> 2] = vd;
                              h[Lg + 12 >> 2] = vd;
                              h[o + (f + 2)] = Lg;
                              h[o + (f + 3)] = Ze;
                            } else {
                              var Fe = Dg, Wh = Ee >>> 8;
                              if (0 == Wh) {
                                var vf = 0;
                              } else {
                                if (16777215 < Ee) {
                                  vf = 31;
                                } else {
                                  var Xh = Wh + 1048320 >>> 16 & 8, qh = Wh << Xh, Yh = qh + 520192 >>> 16 & 4, Vi = qh << Yh, Qj = Vi + 245760 >>> 16 & 2, Zh = 14 - (Yh | Xh | Qj) + (Vi << Qj >>> 15), vf = Ee >>> Zh + 7 & 1 | Zh << 1;
                                }
                              }
                              var $h = (vf << 2) + R + 304;
                              h[o + (f + 7)] = vf;
                              h[o + (f + 5)] = 0;
                              h[o + (f + 4)] = 0;
                              var Rj = h[R + 4 >> 2], ai = 1 << vf;
                              if (0 == (Rj & ai)) {
                                h[R + 4 >> 2] = Rj | ai, h[$h >> 2] = Fe, h[o + (f + 6)] = $h, h[o + (f + 3)] = Fe, h[o + (f + 2)] = Fe;
                              } else {
                                for (var Mg = Ee << (31 == vf ? 0 : 25 - (vf >>> 1)), wf = h[$h >> 2]; ; ) {
                                  if ((h[wf + 4 >> 2] & -8) == Ee) {
                                    var bi = wf + 8, rh = k[bi >> 2], Wi = k[R + 16 >> 2], Sj = wf < Wi;
                                    do {
                                      if (!Sj && rh >= Wi) {
                                        h[rh + 12 >> 2] = Fe;
                                        h[bi >> 2] = Fe;
                                        h[o + (f + 2)] = rh;
                                        h[o + (f + 3)] = wf;
                                        h[o + (f + 6)] = 0;
                                        break c;
                                      }
                                    } while (0);
                                    mt();
                                    aa("Reached an unreachable!");
                                  }
                                  var $e = (Mg >>> 31 << 2) + wf + 16, ci = k[$e >> 2];
                                  if (0 == ci) {
                                    $e < k[R + 16 >> 2] && (mt(), aa("Reached an unreachable!"));
                                    h[$e >> 2] = Fe;
                                    h[o + (f + 6)] = wf;
                                    h[o + (f + 3)] = Fe;
                                    h[o + (f + 2)] = Fe;
                                    break c;
                                  } else {
                                    Mg <<= 1, wf = ci;
                                  }
                                }
                              }
                            }
                          }
                        }
                      } while (0);
                      ia = xc + (oe | 8);
                      break a;
                    }
                  } while (0);
                  var gg = Cc, Ng = R + 444;
                  for (e = Ng >> 2; ; ) {
                    var hg = k[e];
                    if (hg <= gg) {
                      var di = k[e + 1];
                      if (hg + di > gg) {
                        var sh = hg, th = di;
                        break;
                      }
                    }
                    var ei = k[e + 2];
                    if (0 != ei) {
                      Ng = ei, e = Ng >> 2;
                    } else {
                      sh = 0;
                      th = 4;
                      break;
                    }
                  }
                  var fi = sh + th, gi = sh + (th - 39), hi = sh + (th - 47) + (0 == (gi & 7) ? 0 : -gi & 7), ig = hi < Cc + 16 ? gg : hi, Xi = ig + 8;
                  d = Xi >> 2;
                  var Tj = Xi, ii = xc + 8, ji = 0 == (ii & 7) ? 0 : -ii & 7, Yi = ld - 40 - ji;
                  h[R + 24 >> 2] = xc + ji;
                  h[R + 12 >> 2] = Yi;
                  h[(ji + 4 >> 2) + o] = Yi | 1;
                  h[(ld - 36 >> 2) + o] = 40;
                  h[R + 28 >> 2] = h[nt + 16 >> 2];
                  h[ig + 4 >> 2] = 27;
                  h[d] = h[R + 444 >> 2];
                  h[d + 1] = h[R + 448 >> 2];
                  h[d + 2] = h[R + 452 >> 2];
                  h[d + 3] = h[R + 456 >> 2];
                  h[R + 444 >> 2] = xc;
                  h[R + 448 >> 2] = ld;
                  h[R + 456 >> 2] = 0;
                  h[R + 452 >> 2] = Tj;
                  var Zi = ig + 28;
                  h[Zi >> 2] = 7;
                  var Uj = ig + 32 < fi;
                  c : do {
                    if (Uj) {
                      for (var ki = Zi; ; ) {
                        var $i = ki + 4;
                        h[$i >> 2] = 7;
                        if (ki + 8 < fi) {
                          ki = $i;
                        } else {
                          break c;
                        }
                      }
                    }
                  } while (0);
                  if (ig != gg) {
                    var qe = ig - Cc, Vj = gg + qe, aj = gg + (qe + 4);
                    h[aj >> 2] &= -2;
                    h[n + 1] = qe | 1;
                    h[Vj >> 2] = qe;
                    if (256 > qe) {
                      var li = qe >>> 2 & 1073741822, bj = (li << 2) + R + 40, uh = k[R >> 2], Og = 1 << (qe >>> 3);
                      if (0 == (uh & Og)) {
                        h[R >> 2] = uh | Og;
                        var mi = bj, ni = (li + 2 << 2) + R + 40;
                      } else {
                        var af = (li + 2 << 2) + R + 40, oi = k[af >> 2];
                        oi < k[R + 16 >> 2] && (mt(), aa("Reached an unreachable!"));
                        mi = oi;
                        ni = af;
                      }
                      h[ni >> 2] = Cc;
                      h[mi + 12 >> 2] = Cc;
                      h[n + 2] = mi;
                      h[n + 3] = bj;
                    } else {
                      var vh = Cc, xf = qe >>> 8;
                      if (0 == xf) {
                        var yf = 0;
                      } else {
                        if (16777215 < qe) {
                          yf = 31;
                        } else {
                          var cj = xf + 1048320 >>> 16 & 8, dj = xf << cj, jg = dj + 520192 >>> 16 & 4, ej = dj << jg, pi = ej + 245760 >>> 16 & 2, fj = 14 - (jg | cj | pi) + (ej << pi >>> 15), yf = qe >>> fj + 7 & 1 | fj << 1;
                        }
                      }
                      var qi = (yf << 2) + R + 304;
                      h[n + 7] = yf;
                      h[n + 5] = 0;
                      h[n + 4] = 0;
                      var Me = h[R + 4 >> 2], gj = 1 << yf;
                      if (0 == (Me & gj)) {
                        h[R + 4 >> 2] = Me | gj, h[qi >> 2] = vh, h[n + 6] = qi, h[n + 3] = Cc, h[n + 2] = Cc;
                      } else {
                        for (var kg = qe << (31 == yf ? 0 : 25 - (yf >>> 1)), lg = h[qi >> 2]; ; ) {
                          if ((h[lg + 4 >> 2] & -8) == qe) {
                            var Wj = lg + 8, ri = k[Wj >> 2], hj = k[R + 16 >> 2], Xj = lg < hj;
                            do {
                              if (!Xj && ri >= hj) {
                                h[ri + 12 >> 2] = vh;
                                h[Wj >> 2] = vh;
                                h[n + 2] = ri;
                                h[n + 3] = lg;
                                h[n + 6] = 0;
                                break b;
                              }
                            } while (0);
                            mt();
                            aa("Reached an unreachable!");
                          }
                          var Pg = (kg >>> 31 << 2) + lg + 16, Qg = k[Pg >> 2];
                          if (0 == Qg) {
                            Pg < k[R + 16 >> 2] && (mt(), aa("Reached an unreachable!"));
                            h[Pg >> 2] = vh;
                            h[n + 6] = lg;
                            h[n + 3] = Cc;
                            h[n + 2] = Cc;
                            break b;
                          } else {
                            kg <<= 1, lg = Qg;
                          }
                        }
                      }
                    }
                  }
                }
              } while (0);
              var Rg = k[R + 12 >> 2];
              if (Rg > Ca) {
                var Yj = Rg - Ca;
                h[R + 12 >> 2] = Yj;
                var wh = k[R + 24 >> 2], si = wh;
                h[R + 24 >> 2] = si + Ca;
                h[(si + 4 >> 2) + I] = Yj | 1;
                h[wh + 4 >> 2] = Ca | 3;
                ia = wh + 8;
                break a;
              }
            }
          } while (0);
          h[qt >> 2] = 12;
          ia = 0;
        }
      } else {
        var zf = Je - Ca, Nf = k[R + 20 >> 2];
        if (15 < zf) {
          var xh = Nf;
          h[R + 20 >> 2] = xh + Ca;
          h[R + 8 >> 2] = zf;
          h[(xh + 4 >> 2) + I] = zf | 1;
          h[xh + Je >> 2] = zf;
          h[Nf + 4 >> 2] = Ca | 3;
        } else {
          h[R + 8 >> 2] = 0;
          h[R + 20 >> 2] = 0;
          h[Nf + 4 >> 2] = Je | 3;
          var ti = Nf + (Je + 4);
          h[ti >> 2] |= 1;
        }
        ia = Nf + 8;
      }
    }
  } while (0);
  return ia;
}

function qp(c) {
  var d, e, g, f, i, j, m, n, o = c >> 2, q, p = 0 == c;
  a : do {
    if (!p) {
      var r = c - 8, s = r, u = k[R + 16 >> 2], A = r < u;
      b : do {
        if (!A) {
          var E = k[c - 4 >> 2], y = E & 3;
          if (1 != y) {
            var I = E & -8;
            n = I >> 2;
            var C = c + (I - 8), K = C, J = 0 == (E & 1);
            c : do {
              if (J) {
                var M = k[r >> 2];
                if (0 == y) {
                  break a;
                }
                var B = -8 - M;
                m = B >> 2;
                var F = c + B, H = F, P = M + I;
                if (F < u) {
                  break b;
                }
                if (H == h[R + 20 >> 2]) {
                  if (j = c + (I - 4) >> 2, 3 != (h[j] & 3)) {
                    var D = H;
                    i = D >> 2;
                    var Q = P;
                  } else {
                    h[R + 8 >> 2] = P;
                    h[j] &= -2;
                    h[o + (m + 1)] = P | 1;
                    h[C >> 2] = P;
                    break a;
                  }
                } else {
                  if (256 > M) {
                    var O = k[o + (m + 2)], L = k[o + (m + 3)];
                    if (O == L) {
                      h[R >> 2] &= 1 << (M >>> 3) ^ -1, D = H, i = D >> 2, Q = P;
                    } else {
                      var jb = ((M >>> 2 & 1073741822) << 2) + R + 40, U = O != jb & O < u;
                      do {
                        if (!U && L == jb | L >= u) {
                          h[O + 12 >> 2] = L;
                          h[L + 8 >> 2] = O;
                          D = H;
                          i = D >> 2;
                          Q = P;
                          break c;
                        }
                      } while (0);
                      mt();
                      aa("Reached an unreachable!");
                    }
                  } else {
                    var N = F, ma = k[o + (m + 6)], na = k[o + (m + 3)], za = na == N;
                    do {
                      if (za) {
                        var S = c + (B + 20), T = h[S >> 2];
                        if (0 == T) {
                          var $ = c + (B + 16), Fa = h[$ >> 2];
                          if (0 == Fa) {
                            var Z = 0;
                            f = Z >> 2;
                            break;
                          } else {
                            var X = $, ba = Fa;
                          }
                        } else {
                          X = S, ba = T, q = 20;
                        }
                        for (;;) {
                          var Da = ba + 20, Ea = h[Da >> 2];
                          if (0 != Ea) {
                            X = Da, ba = Ea;
                          } else {
                            var lb = ba + 16, Qa = k[lb >> 2];
                            if (0 == Qa) {
                              break;
                            } else {
                              X = lb, ba = Qa;
                            }
                          }
                        }
                        X < u && (mt(), aa("Reached an unreachable!"));
                        h[X >> 2] = 0;
                        Z = ba;
                      } else {
                        var qa = k[o + (m + 2)];
                        qa < u && (mt(), aa("Reached an unreachable!"));
                        h[qa + 12 >> 2] = na;
                        h[na + 8 >> 2] = qa;
                        Z = na;
                      }
                      f = Z >> 2;
                    } while (0);
                    if (0 != ma) {
                      var va = c + (B + 28), Y = (h[va >> 2] << 2) + R + 304, Ga = N == h[Y >> 2];
                      do {
                        if (Ga) {
                          if (h[Y >> 2] = Z, 0 == Z) {
                            h[R + 4 >> 2] &= 1 << h[va >> 2] ^ -1;
                            D = H;
                            i = D >> 2;
                            Q = P;
                            break c;
                          }
                        } else {
                          ma < k[R + 16 >> 2] && (mt(), aa("Reached an unreachable!"));
                          var wa = ma + 16;
                          h[wa >> 2] == N ? h[wa >> 2] = Z : h[ma + 20 >> 2] = Z;
                          if (0 == Z) {
                            D = H;
                            i = D >> 2;
                            Q = P;
                            break c;
                          }
                        }
                      } while (0);
                      Z < k[R + 16 >> 2] && (mt(), aa("Reached an unreachable!"));
                      h[f + 6] = ma;
                      var Ra = k[o + (m + 4)];
                      0 != Ra && (Ra < k[R + 16 >> 2] && (mt(), aa("Reached an unreachable!")), h[f + 4] = Ra, h[Ra + 24 >> 2] = Z);
                      var Za = k[o + (m + 5)];
                      0 != Za && (Za < k[R + 16 >> 2] && (mt(), aa("Reached an unreachable!")), h[f + 5] = Za, h[Za + 24 >> 2] = Z);
                    }
                    D = H;
                    i = D >> 2;
                    Q = P;
                  }
                }
              } else {
                D = s, i = D >> 2, Q = I;
              }
            } while (0);
            var $a = D;
            if ($a < C) {
              var La = c + (I - 4), ab = k[La >> 2];
              if (0 != (ab & 1)) {
                var kb = 0 == (ab & 2);
                do {
                  if (kb) {
                    if (K == h[R + 24 >> 2]) {
                      var fb = h[R + 12 >> 2] + Q;
                      h[R + 12 >> 2] = fb;
                      h[R + 24 >> 2] = D;
                      h[i + 1] = fb | 1;
                      D == h[R + 20 >> 2] && (h[R + 20 >> 2] = 0, h[R + 8 >> 2] = 0);
                      if (fb <= k[R + 28 >> 2]) {
                        break a;
                      }
                      if (0 == h[nt >> 2] && 0 == h[nt >> 2]) {
                        var pb = ot();
                        0 == (pb - 1 & pb) ? (h[nt + 8 >> 2] = pb, h[nt + 4 >> 2] = pb, h[nt + 12 >> 2] = -1, h[nt + 16 >> 2] = 2097152, h[nt + 20 >> 2] = 0, h[R + 440 >> 2] = 0, h[nt >> 2] = Math.floor(Date.now() / 1e3) & -16 ^ 1431655768) : (mt(), aa("Reached an unreachable!"));
                      }
                      var ga = k[R + 24 >> 2];
                      if (0 == ga) {
                        break a;
                      }
                      var da = k[R + 12 >> 2], bb = 40 < da;
                      do {
                        if (bb) {
                          var ca = k[nt + 8 >> 2], ha = (Math.floor((da - 41 + ca) / ca) - 1) * ca, ta = ga, ua = R + 444;
                          for (g = ua >> 2; ; ) {
                            var oa = k[g];
                            if (oa <= ta && oa + h[g + 1] > ta) {
                              var ka = ua;
                              break;
                            }
                            var xa = k[g + 2];
                            if (0 == xa) {
                              ka = 0;
                              break;
                            } else {
                              ua = xa, g = ua >> 2;
                            }
                          }
                          if (0 == (h[ka + 12 >> 2] & 8)) {
                            var Ua = pt(0);
                            e = ka + 4 >> 2;
                            if (Ua == h[ka >> 2] + h[e]) {
                              var la = pt(-(2147483646 < ha ? -2147483648 - ca : ha)), Sa = pt(0);
                              if (-1 != la & Sa < Ua) {
                                var cb = Ua - Sa;
                                if (Ua != Sa) {
                                  h[e] -= cb;
                                  h[R + 432 >> 2] -= cb;
                                  var qb = h[R + 24 >> 2], xb = h[R + 12 >> 2] - cb, Pb = qb, Na = qb + 8, Ha = 0 == (Na & 7) ? 0 : -Na & 7, pa = xb - Ha;
                                  h[R + 24 >> 2] = Pb + Ha;
                                  h[R + 12 >> 2] = pa;
                                  h[Pb + (Ha + 4) >> 2] = pa | 1;
                                  h[Pb + (xb + 4) >> 2] = 40;
                                  h[R + 28 >> 2] = h[nt + 16 >> 2];
                                  break a;
                                }
                              }
                            }
                          }
                        }
                      } while (0);
                      if (k[R + 12 >> 2] <= k[R + 28 >> 2]) {
                        break a;
                      }
                      h[R + 28 >> 2] = -1;
                    } else {
                      if (K == h[R + 20 >> 2]) {
                        var Ia = h[R + 8 >> 2] + Q;
                        h[R + 8 >> 2] = Ia;
                        h[R + 20 >> 2] = D;
                        h[i + 1] = Ia | 1;
                        h[$a + Ia >> 2] = Ia;
                      } else {
                        var Oa = (ab & -8) + Q, Pa = ab >>> 3, Aa = 256 > ab;
                        c : do {
                          if (Aa) {
                            var ia = k[o + n], Va = k[((I | 4) >> 2) + o];
                            if (ia == Va) {
                              h[R >> 2] &= 1 << Pa ^ -1;
                            } else {
                              var ra = ((ab >>> 2 & 1073741822) << 2) + R + 40;
                              q = ia == ra ? 81 : ia < k[R + 16 >> 2] ? 84 : 81;
                              do {
                                if (81 == q && !(Va != ra && Va < k[R + 16 >> 2])) {
                                  h[ia + 12 >> 2] = Va;
                                  h[Va + 8 >> 2] = ia;
                                  break c;
                                }
                              } while (0);
                              mt();
                              aa("Reached an unreachable!");
                            }
                          } else {
                            var Ka = C, db = k[o + (n + 4)], ub = k[((I | 4) >> 2) + o], vb = ub == Ka;
                            do {
                              if (vb) {
                                var mb = c + (I + 12), gb = h[mb >> 2];
                                if (0 == gb) {
                                  var nb = c + (I + 8), Wa = h[nb >> 2];
                                  if (0 == Wa) {
                                    var ea = 0;
                                    d = ea >> 2;
                                    break;
                                  } else {
                                    var Ja = nb, Ba = Wa;
                                  }
                                } else {
                                  Ja = mb, Ba = gb, q = 91;
                                }
                                for (;;) {
                                  var Ta = Ba + 20, yb = h[Ta >> 2];
                                  if (0 != yb) {
                                    Ja = Ta, Ba = yb;
                                  } else {
                                    var Xa = Ba + 16, eb = k[Xa >> 2];
                                    if (0 == eb) {
                                      break;
                                    } else {
                                      Ja = Xa, Ba = eb;
                                    }
                                  }
                                }
                                Ja < k[R + 16 >> 2] && (mt(), aa("Reached an unreachable!"));
                                h[Ja >> 2] = 0;
                                ea = Ba;
                              } else {
                                var Eb = k[o + n];
                                Eb < k[R + 16 >> 2] && (mt(), aa("Reached an unreachable!"));
                                h[Eb + 12 >> 2] = ub;
                                h[ub + 8 >> 2] = Eb;
                                ea = ub;
                              }
                              d = ea >> 2;
                            } while (0);
                            if (0 != db) {
                              var zb = c + (I + 20), Nb = (h[zb >> 2] << 2) + R + 304, Qb = Ka == h[Nb >> 2];
                              do {
                                if (Qb) {
                                  if (h[Nb >> 2] = ea, 0 == ea) {
                                    h[R + 4 >> 2] &= 1 << h[zb >> 2] ^ -1;
                                    break c;
                                  }
                                } else {
                                  db < k[R + 16 >> 2] && (mt(), aa("Reached an unreachable!"));
                                  var Bb = db + 16;
                                  h[Bb >> 2] == Ka ? h[Bb >> 2] = ea : h[db + 20 >> 2] = ea;
                                  if (0 == ea) {
                                    break c;
                                  }
                                }
                              } while (0);
                              ea < k[R + 16 >> 2] && (mt(), aa("Reached an unreachable!"));
                              h[d + 6] = db;
                              var Ib = k[o + (n + 2)];
                              0 != Ib && (Ib < k[R + 16 >> 2] && (mt(), aa("Reached an unreachable!")), h[d + 4] = Ib, h[Ib + 24 >> 2] = ea);
                              var Jb = k[o + (n + 3)];
                              0 != Jb && (Jb < k[R + 16 >> 2] && (mt(), aa("Reached an unreachable!")), h[d + 5] = Jb, h[Jb + 24 >> 2] = ea);
                            }
                          }
                        } while (0);
                        h[i + 1] = Oa | 1;
                        h[$a + Oa >> 2] = Oa;
                        if (D != h[R + 20 >> 2]) {
                          var wb = Oa;
                          break;
                        }
                        h[R + 8 >> 2] = Oa;
                      }
                    }
                    break a;
                  } else {
                    h[La >> 2] = ab & -2, h[i + 1] = Q | 1, wb = h[$a + Q >> 2] = Q;
                  }
                } while (0);
                if (256 > wb) {
                  var Fb = wb >>> 2 & 1073741822, Gb = (Fb << 2) + R + 40, ob = k[R >> 2], Kb = 1 << (wb >>> 3);
                  if (0 == (ob & Kb)) {
                    h[R >> 2] = ob | Kb;
                    var hb = Gb, rb = (Fb + 2 << 2) + R + 40;
                  } else {
                    var W = (Fb + 2 << 2) + R + 40, ja = k[W >> 2];
                    ja < k[R + 16 >> 2] && (mt(), aa("Reached an unreachable!"));
                    hb = ja;
                    rb = W;
                  }
                  h[rb >> 2] = D;
                  h[hb + 12 >> 2] = D;
                  h[i + 2] = hb;
                  h[i + 3] = Gb;
                } else {
                  var Ca = D, Ub = wb >>> 8;
                  if (0 == Ub) {
                    var Ab = 0;
                  } else {
                    if (16777215 < wb) {
                      Ab = 31;
                    } else {
                      var Cb = Ub + 1048320 >>> 16 & 8, Xb = Ub << Cb, dc = Xb + 520192 >>> 16 & 4, Ma = Xb << dc, Lb = Ma + 245760 >>> 16 & 2, fa = 14 - (dc | Cb | Lb) + (Ma << Lb >>> 15), Ab = wb >>> fa + 7 & 1 | fa << 1;
                    }
                  }
                  var sb = (Ab << 2) + R + 304;
                  h[i + 7] = Ab;
                  h[i + 5] = 0;
                  h[i + 4] = 0;
                  var tb = h[R + 4 >> 2], V = 1 << Ab, Yb = 0 == (tb & V);
                  c : do {
                    if (Yb) {
                      h[R + 4 >> 2] = tb | V, h[sb >> 2] = Ca, h[i + 6] = sb, h[i + 3] = D, h[i + 2] = D;
                    } else {
                      for (var gc = wb << (31 == Ab ? 0 : 25 - (Ab >>> 1)), Rb = h[sb >> 2]; ; ) {
                        if ((h[Rb + 4 >> 2] & -8) == wb) {
                          var cc = Rb + 8, Zb = k[cc >> 2], wc = k[R + 16 >> 2], Xc = Rb < wc;
                          do {
                            if (!Xc && Zb >= wc) {
                              h[Zb + 12 >> 2] = Ca;
                              h[cc >> 2] = Ca;
                              h[i + 2] = Zb;
                              h[i + 3] = Rb;
                              h[i + 6] = 0;
                              break c;
                            }
                          } while (0);
                          mt();
                          aa("Reached an unreachable!");
                        }
                        var kc = (gc >>> 31 << 2) + Rb + 16, rc = k[kc >> 2];
                        if (0 == rc) {
                          kc < k[R + 16 >> 2] && (mt(), aa("Reached an unreachable!"));
                          h[kc >> 2] = Ca;
                          h[i + 6] = Rb;
                          h[i + 3] = D;
                          h[i + 2] = D;
                          break c;
                        } else {
                          gc <<= 1, Rb = rc;
                        }
                      }
                    }
                  } while (0);
                  var ec = h[R + 32 >> 2] - 1;
                  h[R + 32 >> 2] = ec;
                  if (0 != ec) {
                    break a;
                  }
                  var sc = h[R + 452 >> 2], Mc = 0 == sc;
                  c : do {
                    if (!Mc) {
                      for (var Db = sc; ; ) {
                        var Ya = h[Db + 8 >> 2];
                        if (0 == Ya) {
                          break c;
                        } else {
                          Db = Ya;
                        }
                      }
                    }
                  } while (0);
                  h[R + 32 >> 2] = -1;
                }
                break a;
              }
            }
          }
        }
      } while (0);
      mt();
      aa("Reached an unreachable!");
    }
  } while (0);
}

function Wp(c, d, e) {
  if (20 <= e && d % 2 == c % 2) {
    if (d % 4 == c % 4) {
      for (e = d + e; d % 4; ) {
        a[c++] = a[d++];
      }
      for (var d = d >> 2, c = c >> 2, g = e >> 2; d < g; ) {
        h[c++] = h[d++];
      }
      d <<= 2;
      for (c <<= 2; d < e; ) {
        a[c++] = a[d++];
      }
    } else {
      e = d + e;
      d % 2 && (a[c++] = a[d++]);
      d >>= 1;
      c >>= 1;
      for (g = e >> 1; d < g; ) {
        b[c++] = b[d++];
      }
      d <<= 1;
      c <<= 1;
      d < e && (a[c++] = a[d++]);
    }
  } else {
    for (; e--; ) {
      a[c++] = a[d++];
    }
  }
}

function kp() {
  rt === sa && (rt = Date.now());
  return Math.floor(1 * (Date.now() - rt));
}

var rt, st = 13, tt = 9, ut = 22, vt = 5, wt = 21, xt = 6;

function yt(c) {
  qt || (qt = v([ 0 ], "i32", t));
  h[qt >> 2] = c;
}

var qt, zt = 0, mp = 0, At = 0, Bt = 2, pp = [ ib ], Ct = ya;

function Dt(c, d) {
  if ("string" !== typeof c) {
    return ib;
  }
  d === sa && (d = "/");
  c && "/" == c[0] && (d = "");
  for (var e = (d + "/" + c).split("/").reverse(), g = [ "" ]; e.length; ) {
    var f = e.pop();
    "" == f || "." == f || (".." == f ? 1 < g.length && g.pop() : g.push(f));
  }
  return 1 == g.length ? "/" : g.join("/");
}

function Et(c, d, e) {
  var g = {
    Gc: Tb,
    W: Tb,
    error: 0,
    name: ib,
    path: ib,
    object: ib,
    Ma: Tb,
    Oa: ib,
    Na: ib
  }, c = Dt(c);
  if ("/" == c) {
    g.Gc = ya, g.W = g.Ma = ya, g.name = "/", g.path = g.Oa = "/", g.object = g.Na = Ft;
  } else {
    if (c !== ib) {
      for (var e = e || 0, c = c.slice(1).split("/"), f = Ft, i = [ "" ]; c.length; ) {
        1 == c.length && f.u && (g.Ma = ya, g.Oa = 1 == i.length ? "/" : i.join("/"), g.Na = f, g.name = c[0]);
        var j = c.shift();
        if (f.u) {
          if (f.Qa) {
            if (!f.k.hasOwnProperty(j)) {
              g.error = 2;
              break;
            }
          } else {
            g.error = st;
            break;
          }
        } else {
          g.error = 20;
          break;
        }
        f = f.k[j];
        if (f.link && !(d && 0 == c.length)) {
          if (40 < e) {
            g.error = 40;
            break;
          }
          g = Dt(f.link, i.join("/"));
          return Et([ g ].concat(c).join("/"), d, e + 1);
        }
        i.push(j);
        0 == c.length && (g.W = ya, g.path = i.join("/"), g.object = f);
      }
    }
  }
  return g;
}

function Gt(c) {
  Ht();
  c = Et(c, sa);
  if (c.W) {
    return c.object;
  }
  yt(c.error);
  return ib;
}

function It(c, d, e, g, f) {
  c || (c = "/");
  "string" === typeof c && (c = Gt(c));
  c || (yt(st), aa(Error("Parent path must exist.")));
  c.u || (yt(20), aa(Error("Parent must be a folder.")));
  !c.write && !Ct && (yt(st), aa(Error("Parent folder must be writeable.")));
  if (!d || "." == d || ".." == d) {
    yt(2), aa(Error("Name must not be empty."));
  }
  c.k.hasOwnProperty(d) && (yt(17), aa(Error("Can't overwrite object.")));
  c.k[d] = {
    Qa: g === sa ? ya : g,
    write: f === sa ? Tb : f,
    timestamp: Date.now(),
    Fc: Bt++
  };
  for (var i in e) {
    e.hasOwnProperty(i) && (c.k[d][i] = e[i]);
  }
  return c.k[d];
}

function Jt(c, d) {
  return It(c, d, {
    u: ya,
    L: Tb,
    k: {}
  }, ya, ya);
}

function Kt() {
  var c = "dev/shm/tmp", d = Gt("/");
  d === ib && aa(Error("Invalid parent."));
  for (c = c.split("/").reverse(); c.length; ) {
    var e = c.pop();
    e && (d.k.hasOwnProperty(e) || Jt(d, e), d = d.k[e]);
  }
}

function Lt(c, d, e, g) {
  !e && !g && aa(Error("A device must have at least one callback defined."));
  var f = {
    L: ya,
    input: e,
    v: g
  };
  f.u = Tb;
  return It(c, d, f, Boolean(e), Boolean(g));
}

function Ht() {
  Ft || (Ft = {
    Qa: ya,
    write: ya,
    u: ya,
    L: Tb,
    timestamp: Date.now(),
    Fc: 1,
    k: {}
  });
}

function Mt() {
  var c, d, e;
  ve(!Nt, "FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)");
  Nt = ya;
  Ht();
  c || (c = (function() {
    if (!c.V || !c.V.length) {
      var d;
      "undefined" != typeof window && "function" == typeof window.prompt ? d = window.prompt("Input: ") : "function" == typeof readline && (d = readline());
      d || (d = "");
      c.V = Pm(d + "\n", ya);
    }
    return c.V.shift();
  }));
  d || (d = (function(c) {
    c === ib || 10 === c ? (d.Pa(d.buffer.join("")), d.buffer = []) : d.buffer.push(String.fromCharCode(c));
  }));
  d.Pa || (d.Pa = print);
  d.buffer || (d.buffer = []);
  e || (e = d);
  Jt("/", "tmp");
  var g = Jt("/", "dev"), f = Lt(g, "stdin", c), i = Lt(g, "stdout", ib, d);
  e = Lt(g, "stderr", ib, e);
  Lt(g, "tty", c, d);
  pp[1] = {
    path: "/dev/stdin",
    object: f,
    position: 0,
    La: ya,
    M: Tb,
    Ka: Tb,
    error: Tb,
    Ia: Tb,
    Ra: []
  };
  pp[2] = {
    path: "/dev/stdout",
    object: i,
    position: 0,
    La: Tb,
    M: ya,
    Ka: Tb,
    error: Tb,
    Ia: Tb,
    Ra: []
  };
  pp[3] = {
    path: "/dev/stderr",
    object: e,
    position: 0,
    La: Tb,
    M: ya,
    Ka: Tb,
    error: Tb,
    Ia: Tb,
    Ra: []
  };
  zt = v([ 1 ], "void*", t);
  mp = v([ 2 ], "void*", t);
  At = v([ 3 ], "void*", t);
  Kt();
  pp[zt] = pp[1];
  pp[mp] = pp[2];
  pp[At] = pp[3];
  v([ v([ 0, 0, 0, 0, zt, 0, 0, 0, mp, 0, 0, 0, At, 0, 0, 0 ], "void*", t) ], "void*", t);
}

var Nt, Ft;

function op(c, d, e) {
  var g = pp[c];
  if (g) {
    if (g.M) {
      if (0 > e) {
        return yt(ut), -1;
      }
      if (g.object.L) {
        if (g.object.v) {
          for (var f = 0; f < e; f++) {
            try {
              g.object.v(a[d + f]);
            } catch (i) {
              return yt(vt), -1;
            }
          }
          g.object.timestamp = Date.now();
          return f;
        }
        yt(xt);
        return -1;
      }
      f = g.position;
      c = pp[c];
      if (!c || c.object.L) {
        yt(tt), d = -1;
      } else {
        if (c.M) {
          if (c.object.u) {
            yt(wt), d = -1;
          } else {
            if (0 > e || 0 > f) {
              yt(ut), d = -1;
            } else {
              for (var j = c.object.k; j.length < f; ) {
                j.push(0);
              }
              for (var m = 0; m < e; m++) {
                j[f + m] = Hh[d + m];
              }
              c.object.timestamp = Date.now();
              d = m;
            }
          }
        } else {
          yt(st), d = -1;
        }
      }
      -1 != d && (g.position += d);
      return d;
    }
    yt(st);
    return -1;
  }
  yt(tt);
  return -1;
}

function Zx(c) {
  function d(d) {
    var e;
    "double" === d ? e = l[c + g >> 2] : "i64" == d ? e = [ h[c + g >> 2], h[c + g + 4 >> 2] ] : (d = "i32", e = h[c + g >> 2]);
    g += Math.max(ee(d), re);
    return e;
  }
  for (var e = z.Ab, g = 0, f = [], i, j; ; ) {
    var m = e;
    i = a[e];
    if (0 === i) {
      break;
    }
    j = a[e + 1];
    if (37 == i) {
      var n = Tb, o = Tb, q = Tb, p = Tb;
      a : for (;;) {
        switch (j) {
         case 43:
          n = ya;
          break;
         case 45:
          o = ya;
          break;
         case 35:
          q = ya;
          break;
         case 48:
          if (p) {
            break a;
          } else {
            p = ya;
            break;
          }
         default:
          break a;
        }
        e++;
        j = a[e + 1];
      }
      var r = 0;
      if (42 == j) {
        r = d("i32"), e++, j = a[e + 1];
      } else {
        for (; 48 <= j && 57 >= j; ) {
          r = 10 * r + (j - 48), e++, j = a[e + 1];
        }
      }
      var s = Tb;
      if (46 == j) {
        var u = 0, s = ya;
        e++;
        j = a[e + 1];
        if (42 == j) {
          u = d("i32"), e++;
        } else {
          for (;;) {
            j = a[e + 1];
            if (48 > j || 57 < j) {
              break;
            }
            u = 10 * u + (j - 48);
            e++;
          }
        }
        j = a[e + 1];
      } else {
        u = 6;
      }
      var A;
      switch (String.fromCharCode(j)) {
       case "h":
        j = a[e + 2];
        104 == j ? (e++, A = 1) : A = 2;
        break;
       case "l":
        j = a[e + 2];
        108 == j ? (e++, A = 8) : A = 4;
        break;
       case "L":
       case "q":
       case "j":
        A = 8;
        break;
       case "z":
       case "t":
       case "I":
        A = 4;
        break;
       default:
        A = ib;
      }
      A && e++;
      j = a[e + 1];
      if (-1 != "d,i,u,o,x,X,p".split(",").indexOf(String.fromCharCode(j))) {
        m = 100 == j || 105 == j;
        A = A || 4;
        i = d("i" + 8 * A);
        8 == A && (i = 117 == j ? (i[0] >>> 0) + 4294967296 * (i[1] >>> 0) : (i[0] >>> 0) + 4294967296 * (i[1] | 0));
        4 >= A && (i = (m ? $m : Zm)(i & Math.pow(256, A) - 1, 8 * A));
        var E = Math.abs(i), y, m = "";
        if (100 == j || 105 == j) {
          y = $m(i, 8 * A).toString(10);
        } else {
          if (117 == j) {
            y = Zm(i, 8 * A).toString(10), i = Math.abs(i);
          } else {
            if (111 == j) {
              y = (q ? "0" : "") + E.toString(8);
            } else {
              if (120 == j || 88 == j) {
                m = q ? "0x" : "";
                if (0 > i) {
                  i = -i;
                  y = (E - 1).toString(16);
                  q = [];
                  for (E = 0; E < y.length; E++) {
                    q.push((15 - parseInt(y[E], 16)).toString(16));
                  }
                  for (y = q.join(""); y.length < 2 * A; ) {
                    y = "f" + y;
                  }
                } else {
                  y = E.toString(16);
                }
                88 == j && (m = m.toUpperCase(), y = y.toUpperCase());
              } else {
                112 == j && (0 === E ? y = "(nil)" : (m = "0x", y = E.toString(16)));
              }
            }
          }
        }
        if (s) {
          for (; y.length < u; ) {
            y = "0" + y;
          }
        }
        for (n && (m = 0 > i ? "-" + m : "+" + m); m.length + y.length < r; ) {
          o ? y += " " : p ? y = "0" + y : m = " " + m;
        }
        y = m + y;
        y.split("").forEach((function(c) {
          f.push(c.charCodeAt(0));
        }));
      } else {
        if (-1 != "f,F,e,E,g,G".split(",").indexOf(String.fromCharCode(j))) {
          i = d("double");
          if (isNaN(i)) {
            y = "nan", p = Tb;
          } else {
            if (isFinite(i)) {
              s = Tb;
              A = Math.min(u, 20);
              if (103 == j || 71 == j) {
                s = ya, u = u || 1, A = parseInt(i.toExponential(A).split("e")[1], 10), u > A && -4 <= A ? (j = (103 == j ? "f" : "F").charCodeAt(0), u -= A + 1) : (j = (103 == j ? "e" : "E").charCodeAt(0), u--), A = Math.min(u, 20);
              }
              if (101 == j || 69 == j) {
                y = i.toExponential(A), /[eE][-+]\d$/.test(y) && (y = y.slice(0, -1) + "0" + y.slice(-1));
              } else {
                if (102 == j || 70 == j) {
                  y = i.toFixed(A);
                }
              }
              m = y.split("e");
              if (s && !q) {
                for (; 1 < m[0].length && -1 != m[0].indexOf(".") && ("0" == m[0].slice(-1) || "." == m[0].slice(-1)); ) {
                  m[0] = m[0].slice(0, -1);
                }
              } else {
                for (q && -1 == y.indexOf(".") && (m[0] += "."); u > A++; ) {
                  m[0] += "0";
                }
              }
              y = m[0] + (1 < m.length ? "e" + m[1] : "");
              69 == j && (y = y.toUpperCase());
              n && 0 <= i && (y = "+" + y);
            } else {
              y = (0 > i ? "-" : "") + "inf", p = Tb;
            }
          }
          for (; y.length < r; ) {
            y = o ? y + " " : p && ("-" == y[0] || "+" == y[0]) ? y[0] + "0" + y.slice(1) : (p ? "0" : " ") + y;
          }
          97 > j && (y = y.toUpperCase());
          y.split("").forEach((function(c) {
            f.push(c.charCodeAt(0));
          }));
        } else {
          if (115 == j) {
            (n = d("i8*")) ? (n = Ym(n), s && n.length > u && (n = n.slice(0, u))) : n = Pm("(null)", ya);
            if (!o) {
              for (; n.length < r--; ) {
                f.push(32);
              }
            }
            f = f.concat(n);
            if (o) {
              for (; n.length < r--; ) {
                f.push(32);
              }
            }
          } else {
            if (99 == j) {
              for (o && f.push(d("i8")); 0 < --r; ) {
                f.push(32);
              }
              o || f.push(d("i8"));
            } else {
              if (110 == j) {
                o = d("i32*"), h[o >> 2] = f.length;
              } else {
                if (37 == j) {
                  f.push(i);
                } else {
                  for (E = m; E < e + 2; E++) {
                    f.push(a[E]);
                  }
                }
              }
            }
          }
        }
      }
      e += 2;
    } else {
      f.push(i), e += 1;
    }
  }
  return f;
}

function lp(c) {
  var d = h[mp >> 2], e = Zx(c), c = Qf;
  var g = v(e, "i8", Mj), e = 1 * e.length;
  0 != e && -1 == op(d, g, e) && pp[d] && (pp[d].error = ya);
  Qf = c;
}

var bn = Math.sqrt;

function G(c, d, e, g) {
  aa("Assertion failed: " + Tk(g) + ", at: " + [ Tk(c), d, Tk(e) ]);
}

function Kk(c, d) {
  var e = 0;
  if (20 <= d) {
    for (var g = c + d; c % 4; ) {
      a[c++] = e;
    }
    0 > e && (e += 256);
    for (var f = c >> 2, i = g >> 2, j = e | e << 8 | e << 16 | e << 24; f < i; ) {
      h[f++] = j;
    }
    for (c = f << 2; c < g; ) {
      a[c++] = e;
    }
  } else {
    for (; d--; ) {
      a[c++] = e;
    }
  }
}

var Nr = Math.sin, Is = Math.cos, ht = Math.floor;

function at(c) {
  var d = Pe(), e = Date.now();
  h[c + d[0] >> 2] = Math.floor(e / 1e3);
  h[c + d[1] >> 2] = Math.floor(1e3 * (e - 1e3 * Math.floor(e / 1e3)));
}

function mt() {
  aa("ABORT: undefined, at " + Error().stack);
}

function ot() {
  switch (8) {
   case 8:
    return $g;
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
  yt(ut);
  return -1;
}

function pt(c) {
  KA || (Yg = Math.ceil(Yg / $g) * $g, KA = ya);
  var d = Yg;
  0 != c && qg(c);
  return d;
}

var KA;

Um.unshift({
  Ja: (function() {
    Ct = Tb;
    Nt || Mt();
  })
});

Vm.push({
  Ja: (function() {
    Nt && (0 < pp[2].object.v.buffer.length && pp[2].object.v(10), 0 < pp[3].object.v.buffer.length && pp[3].object.v(10));
  })
});

yt(0);

var np = v([ 0 ], "i8", t);

Module.Ec = (function(c) {
  function d() {
    for (var c = 0; 3 > c; c++) {
      g.push(0);
    }
  }
  var e = c.length + 1, g = [ v(Pm("/bin/this.program"), "i8", t) ];
  d();
  for (var f = 0; f < e - 1; f += 1) {
    g.push(v(Pm(c[f]), "i8", t)), d();
  }
  g.push(0);
  g = v(g, "i32", t);
  return cn();
});

var LA, MA, Sp, Tp, Up, gt, kt, lt, it, jt, NA, Wn, OA, ip, PA, dn, en, Um = Um.concat([]), fn, gn, QA, RA, SA, TA, UA, VA, WA, XA, YA, ZA, $A, Ss, Rs, aB, bB, kG, lG, mG, nG, oG, pG, qG, R, nt;

z.Ab = v([ 37, 102, 10, 0 ], "i8", t);

z.cb = v([ 55, 98, 50, 83, 104, 97, 112, 101, 0 ], "i8", t);

MA = v(8, "*", t);

z.cc = v([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 108, 108, 105, 115, 105, 111, 110, 47, 98, 50, 67, 111, 108, 108, 105, 100, 101, 69, 100, 103, 101, 46, 99, 112, 112, 0 ], "i8", t);

z.hb = v([ 118, 111, 105, 100, 32, 98, 50, 67, 111, 108, 108, 105, 100, 101, 69, 100, 103, 101, 65, 110, 100, 67, 105, 114, 99, 108, 101, 40, 98, 50, 77, 97, 110, 105, 102, 111, 108, 100, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 69, 100, 103, 101, 83, 104, 97, 112, 101, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 67, 105, 114, 99, 108, 101, 83, 104, 97, 112, 101, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 41, 0 ], "i8", t);

z.Qb = v([ 100, 101, 110, 32, 62, 32, 48, 46, 48, 102, 0 ], "i8", t);

z.Ga = v([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 108, 108, 105, 115, 105, 111, 110, 47, 98, 50, 67, 111, 108, 108, 105, 100, 101, 80, 111, 108, 121, 103, 111, 110, 46, 99, 112, 112, 0 ], "i8", t);

z.jb = v([ 118, 111, 105, 100, 32, 98, 50, 70, 105, 110, 100, 73, 110, 99, 105, 100, 101, 110, 116, 69, 100, 103, 101, 40, 98, 50, 67, 108, 105, 112, 86, 101, 114, 116, 101, 120, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 80, 111, 108, 121, 103, 111, 110, 83, 104, 97, 112, 101, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 44, 32, 105, 110, 116, 51, 50, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 80, 111, 108, 121, 103, 111, 110, 83, 104, 97, 112, 101, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 41, 0 ], "i8", t);

z.ta = v([ 48, 32, 60, 61, 32, 101, 100, 103, 101, 49, 32, 38, 38, 32, 101, 100, 103, 101, 49, 32, 60, 32, 112, 111, 108, 121, 49, 45, 62, 109, 95, 118, 101, 114, 116, 101, 120, 67, 111, 117, 110, 116, 0 ], "i8", t);

z.ib = v([ 102, 108, 111, 97, 116, 51, 50, 32, 98, 50, 69, 100, 103, 101, 83, 101, 112, 97, 114, 97, 116, 105, 111, 110, 40, 99, 111, 110, 115, 116, 32, 98, 50, 80, 111, 108, 121, 103, 111, 110, 83, 104, 97, 112, 101, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 44, 32, 105, 110, 116, 51, 50, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 80, 111, 108, 121, 103, 111, 110, 83, 104, 97, 112, 101, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 41, 0 ], "i8", t);

Sp = v(1, "i32", t);

Tp = v(1, "i32", t);

Up = v(1, "i32", t);

z.g = v([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 108, 108, 105, 115, 105, 111, 110, 47, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 46, 99, 112, 112, 0 ], "i8", t);

z.aa = v([ 118, 111, 105, 100, 32, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 80, 114, 111, 120, 121, 58, 58, 83, 101, 116, 40, 99, 111, 110, 115, 116, 32, 98, 50, 83, 104, 97, 112, 101, 32, 42, 44, 32, 105, 110, 116, 51, 50, 41, 0 ], "i8", t);

z.Db = v([ 48, 32, 60, 61, 32, 105, 110, 100, 101, 120, 32, 38, 38, 32, 105, 110, 100, 101, 120, 32, 60, 32, 99, 104, 97, 105, 110, 45, 62, 109, 95, 99, 111, 117, 110, 116, 0 ], "i8", t);

z.fb = v([ 118, 111, 105, 100, 32, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 40, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 79, 117, 116, 112, 117, 116, 32, 42, 44, 32, 98, 50, 83, 105, 109, 112, 108, 101, 120, 67, 97, 99, 104, 101, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 73, 110, 112, 117, 116, 32, 42, 41, 0 ], "i8", t);

z.H = v([ 102, 108, 111, 97, 116, 51, 50, 32, 98, 50, 83, 105, 109, 112, 108, 101, 120, 58, 58, 71, 101, 116, 77, 101, 116, 114, 105, 99, 40, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", t);

z.pa = v([ 118, 111, 105, 100, 32, 98, 50, 83, 105, 109, 112, 108, 101, 120, 58, 58, 71, 101, 116, 87, 105, 116, 110, 101, 115, 115, 80, 111, 105, 110, 116, 115, 40, 98, 50, 86, 101, 99, 50, 32, 42, 44, 32, 98, 50, 86, 101, 99, 50, 32, 42, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", t);

z.b = v([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 108, 108, 105, 115, 105, 111, 110, 47, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 46, 104, 0 ], "i8", t);

z.a = v([ 99, 111, 110, 115, 116, 32, 98, 50, 86, 101, 99, 50, 32, 38, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 80, 114, 111, 120, 121, 58, 58, 71, 101, 116, 86, 101, 114, 116, 101, 120, 40, 105, 110, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", t);

z.c = v([ 48, 32, 60, 61, 32, 105, 110, 100, 101, 120, 32, 38, 38, 32, 105, 110, 100, 101, 120, 32, 60, 32, 109, 95, 99, 111, 117, 110, 116, 0 ], "i8", t);

z.zb = v([ 98, 50, 86, 101, 99, 50, 32, 98, 50, 83, 105, 109, 112, 108, 101, 120, 58, 58, 71, 101, 116, 83, 101, 97, 114, 99, 104, 68, 105, 114, 101, 99, 116, 105, 111, 110, 40, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", t);

z.G = v([ 98, 50, 86, 101, 99, 50, 32, 98, 50, 83, 105, 109, 112, 108, 101, 120, 58, 58, 71, 101, 116, 67, 108, 111, 115, 101, 115, 116, 80, 111, 105, 110, 116, 40, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", t);

z.ub = v([ 118, 111, 105, 100, 32, 98, 50, 83, 105, 109, 112, 108, 101, 120, 58, 58, 82, 101, 97, 100, 67, 97, 99, 104, 101, 40, 99, 111, 110, 115, 116, 32, 98, 50, 83, 105, 109, 112, 108, 101, 120, 67, 97, 99, 104, 101, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 80, 114, 111, 120, 121, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 80, 114, 111, 120, 121, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 41, 0 ], "i8", t);

z.pc = v([ 99, 97, 99, 104, 101, 45, 62, 99, 111, 117, 110, 116, 32, 60, 61, 32, 51, 0 ], "i8", t);

z.d = v([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 108, 108, 105, 115, 105, 111, 110, 47, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 46, 99, 112, 112, 0 ], "i8", t);

z.kb = v([ 105, 110, 116, 51, 50, 32, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 65, 108, 108, 111, 99, 97, 116, 101, 78, 111, 100, 101, 40, 41, 0 ], "i8", t);

z.Eb = v([ 109, 95, 110, 111, 100, 101, 67, 111, 117, 110, 116, 32, 61, 61, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", t);

z.D = v([ 118, 111, 105, 100, 32, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 70, 114, 101, 101, 78, 111, 100, 101, 40, 105, 110, 116, 51, 50, 41, 0 ], "i8", t);

z.va = v([ 48, 32, 60, 61, 32, 110, 111, 100, 101, 73, 100, 32, 38, 38, 32, 110, 111, 100, 101, 73, 100, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", t);

z.Ea = v([ 48, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 111, 117, 110, 116, 0 ], "i8", t);

z.qc = v([ 109, 95, 110, 111, 100, 101, 115, 91, 112, 114, 111, 120, 121, 73, 100, 93, 46, 73, 115, 76, 101, 97, 102, 40, 41, 0 ], "i8", t);

z.Y = v([ 98, 111, 111, 108, 32, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 77, 111, 118, 101, 80, 114, 111, 120, 121, 40, 105, 110, 116, 51, 50, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 65, 65, 66, 66, 32, 38, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 86, 101, 99, 50, 32, 38, 41, 0 ], "i8", t);

z.X = v([ 118, 111, 105, 100, 32, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 73, 110, 115, 101, 114, 116, 76, 101, 97, 102, 40, 105, 110, 116, 51, 50, 41, 0 ], "i8", t);

z.wc = v([ 99, 104, 105, 108, 100, 49, 32, 33, 61, 32, 40, 45, 49, 41, 0 ], "i8", t);

z.zc = v([ 99, 104, 105, 108, 100, 50, 32, 33, 61, 32, 40, 45, 49, 41, 0 ], "i8", t);

z.l = v([ 105, 110, 116, 51, 50, 32, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 66, 97, 108, 97, 110, 99, 101, 40, 105, 110, 116, 51, 50, 41, 0 ], "i8", t);

z.Bc = v([ 105, 65, 32, 33, 61, 32, 40, 45, 49, 41, 0 ], "i8", t);

z.Cc = v([ 48, 32, 60, 61, 32, 105, 66, 32, 38, 38, 32, 105, 66, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", t);

z.Bb = v([ 48, 32, 60, 61, 32, 105, 67, 32, 38, 38, 32, 105, 67, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", t);

z.Cb = v([ 48, 32, 60, 61, 32, 105, 70, 32, 38, 38, 32, 105, 70, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", t);

z.Ib = v([ 48, 32, 60, 61, 32, 105, 71, 32, 38, 38, 32, 105, 71, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", t);

z.Nb = v([ 109, 95, 110, 111, 100, 101, 115, 91, 67, 45, 62, 112, 97, 114, 101, 110, 116, 93, 46, 99, 104, 105, 108, 100, 50, 32, 61, 61, 32, 105, 65, 0 ], "i8", t);

z.Rb = v([ 48, 32, 60, 61, 32, 105, 68, 32, 38, 38, 32, 105, 68, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", t);

z.Sb = v([ 48, 32, 60, 61, 32, 105, 69, 32, 38, 38, 32, 105, 69, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", t);

z.Tb = v([ 109, 95, 110, 111, 100, 101, 115, 91, 66, 45, 62, 112, 97, 114, 101, 110, 116, 93, 46, 99, 104, 105, 108, 100, 50, 32, 61, 61, 32, 105, 65, 0 ], "i8", t);

gt = v(1, "i32", t);

kt = v(1, "i32", t);

lt = v(1, "i32", t);

it = v(1, "i32", t);

jt = v(1, "i32", t);

z.K = v([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 108, 108, 105, 115, 105, 111, 110, 47, 98, 50, 84, 105, 109, 101, 79, 102, 73, 109, 112, 97, 99, 116, 46, 99, 112, 112, 0 ], "i8", t);

z.gb = v([ 118, 111, 105, 100, 32, 98, 50, 84, 105, 109, 101, 79, 102, 73, 109, 112, 97, 99, 116, 40, 98, 50, 84, 79, 73, 79, 117, 116, 112, 117, 116, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 79, 73, 73, 110, 112, 117, 116, 32, 42, 41, 0 ], "i8", t);

z.Pb = v([ 116, 97, 114, 103, 101, 116, 32, 62, 32, 116, 111, 108, 101, 114, 97, 110, 99, 101, 0 ], "i8", t);

z.yb = v([ 102, 108, 111, 97, 116, 51, 50, 32, 98, 50, 83, 101, 112, 97, 114, 97, 116, 105, 111, 110, 70, 117, 110, 99, 116, 105, 111, 110, 58, 58, 69, 118, 97, 108, 117, 97, 116, 101, 40, 105, 110, 116, 51, 50, 44, 32, 105, 110, 116, 51, 50, 44, 32, 102, 108, 111, 97, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", t);

z.xb = v([ 102, 108, 111, 97, 116, 51, 50, 32, 98, 50, 83, 101, 112, 97, 114, 97, 116, 105, 111, 110, 70, 117, 110, 99, 116, 105, 111, 110, 58, 58, 70, 105, 110, 100, 77, 105, 110, 83, 101, 112, 97, 114, 97, 116, 105, 111, 110, 40, 105, 110, 116, 51, 50, 32, 42, 44, 32, 105, 110, 116, 51, 50, 32, 42, 44, 32, 102, 108, 111, 97, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", t);

z.ob = v([ 102, 108, 111, 97, 116, 51, 50, 32, 98, 50, 83, 101, 112, 97, 114, 97, 116, 105, 111, 110, 70, 117, 110, 99, 116, 105, 111, 110, 58, 58, 73, 110, 105, 116, 105, 97, 108, 105, 122, 101, 40, 99, 111, 110, 115, 116, 32, 98, 50, 83, 105, 109, 112, 108, 101, 120, 67, 97, 99, 104, 101, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 80, 114, 111, 120, 121, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 83, 119, 101, 101, 112, 32, 38, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 80, 114, 111, 120, 121, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 83, 119, 101, 101, 112, 32, 38, 44, 32, 102, 108, 111, 97, 116, 51, 50, 41, 0 ], "i8", t);

z.sc = v([ 48, 32, 60, 32, 99, 111, 117, 110, 116, 32, 38, 38, 32, 99, 111, 117, 110, 116, 32, 60, 32, 51, 0 ], "i8", t);

z.jc = v([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 108, 108, 105, 115, 105, 111, 110, 47, 83, 104, 97, 112, 101, 115, 47, 98, 50, 67, 104, 97, 105, 110, 83, 104, 97, 112, 101, 46, 99, 112, 112, 0 ], "i8", t);

z.vb = v([ 118, 111, 105, 100, 32, 98, 50, 67, 104, 97, 105, 110, 83, 104, 97, 112, 101, 58, 58, 71, 101, 116, 67, 104, 105, 108, 100, 69, 100, 103, 101, 40, 98, 50, 69, 100, 103, 101, 83, 104, 97, 112, 101, 32, 42, 44, 32, 105, 110, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", t);

z.kc = v([ 48, 32, 60, 61, 32, 105, 110, 100, 101, 120, 32, 38, 38, 32, 105, 110, 100, 101, 120, 32, 60, 32, 109, 95, 99, 111, 117, 110, 116, 32, 45, 32, 49, 0 ], "i8", t);

Wn = v([ 0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 0, 34, 0, 0, 0, 36, 0, 0, 0, 38, 0, 0, 0, 40, 0, 0, 0, 42, 0, 0, 0, 44, 0, 0, 0, 46, 0, 0, 0 ], [ "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0 ], t);

v(1, "void*", t);

z.Sa = v([ 49, 49, 98, 50, 69, 100, 103, 101, 83, 104, 97, 112, 101, 0 ], "i8", t);

OA = v(12, "*", t);

z.U = v([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 108, 108, 105, 115, 105, 111, 110, 47, 83, 104, 97, 112, 101, 115, 47, 98, 50, 80, 111, 108, 121, 103, 111, 110, 83, 104, 97, 112, 101, 46, 99, 112, 112, 0 ], "i8", t);

z.wb = v([ 118, 105, 114, 116, 117, 97, 108, 32, 98, 111, 111, 108, 32, 98, 50, 80, 111, 108, 121, 103, 111, 110, 83, 104, 97, 112, 101, 58, 58, 82, 97, 121, 67, 97, 115, 116, 40, 98, 50, 82, 97, 121, 67, 97, 115, 116, 79, 117, 116, 112, 117, 116, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 82, 97, 121, 67, 97, 115, 116, 73, 110, 112, 117, 116, 32, 38, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 44, 32, 105, 110, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", t);

z.fc = v([ 48, 46, 48, 102, 32, 60, 61, 32, 108, 111, 119, 101, 114, 32, 38, 38, 32, 108, 111, 119, 101, 114, 32, 60, 61, 32, 105, 110, 112, 117, 116, 46, 109, 97, 120, 70, 114, 97, 99, 116, 105, 111, 110, 0 ], "i8", t);

z.oa = v([ 118, 105, 114, 116, 117, 97, 108, 32, 118, 111, 105, 100, 32, 98, 50, 80, 111, 108, 121, 103, 111, 110, 83, 104, 97, 112, 101, 58, 58, 67, 111, 109, 112, 117, 116, 101, 77, 97, 115, 115, 40, 98, 50, 77, 97, 115, 115, 68, 97, 116, 97, 32, 42, 44, 32, 102, 108, 111, 97, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", t);

z.lc = v([ 109, 95, 118, 101, 114, 116, 101, 120, 67, 111, 117, 110, 116, 32, 62, 61, 32, 51, 0 ], "i8", t);

z.tc = v([ 97, 114, 101, 97, 32, 62, 32, 49, 46, 49, 57, 50, 48, 57, 50, 57, 48, 69, 45, 48, 55, 70, 0 ], "i8", t);

ip = v([ 0, 0, 0, 0, 0, 0, 0, 0, 48, 0, 0, 0, 50, 0, 0, 0, 52, 0, 0, 0, 54, 0, 0, 0, 56, 0, 0, 0, 58, 0, 0, 0, 60, 0, 0, 0, 62, 0, 0, 0 ], [ "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0 ], t);

v(1, "void*", t);

z.Ta = v([ 49, 52, 98, 50, 80, 111, 108, 121, 103, 111, 110, 83, 104, 97, 112, 101, 0 ], "i8", t);

PA = v(12, "*", t);

dn = v([ 16, 0, 0, 0, 32, 0, 0, 0, 64, 0, 0, 0, 96, 0, 0, 0, 128, 0, 0, 0, 160, 0, 0, 0, 192, 0, 0, 0, 224, 0, 0, 0, 256, 0, 0, 0, 320, 0, 0, 0, 384, 0, 0, 0, 448, 0, 0, 0, 512, 0, 0, 0, 640, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], t);

en = v(641, "i8", t);

z.e = v([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 109, 109, 111, 110, 47, 98, 50, 66, 108, 111, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 46, 99, 112, 112, 0 ], "i8", t);

z.nb = v([ 98, 50, 66, 108, 111, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 58, 58, 98, 50, 66, 108, 111, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 40, 41, 0 ], "i8", t);

z.Ub = v([ 106, 32, 60, 32, 98, 50, 95, 98, 108, 111, 99, 107, 83, 105, 122, 101, 115, 0 ], "i8", t);

z.N = v([ 118, 111, 105, 100, 32, 42, 98, 50, 66, 108, 111, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 58, 58, 65, 108, 108, 111, 99, 97, 116, 101, 40, 105, 110, 116, 51, 50, 41, 0 ], "i8", t);

z.za = v([ 48, 32, 60, 32, 115, 105, 122, 101, 0 ], "i8", t);

z.i = v([ 48, 32, 60, 61, 32, 105, 110, 100, 101, 120, 32, 38, 38, 32, 105, 110, 100, 101, 120, 32, 60, 32, 98, 50, 95, 98, 108, 111, 99, 107, 83, 105, 122, 101, 115, 0 ], "i8", t);

z.mc = v([ 98, 108, 111, 99, 107, 67, 111, 117, 110, 116, 32, 42, 32, 98, 108, 111, 99, 107, 83, 105, 122, 101, 32, 60, 61, 32, 98, 50, 95, 99, 104, 117, 110, 107, 83, 105, 122, 101, 0 ], "i8", t);

z.h = v([ 118, 111, 105, 100, 32, 98, 50, 66, 108, 111, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 58, 58, 70, 114, 101, 101, 40, 118, 111, 105, 100, 32, 42, 44, 32, 105, 110, 116, 51, 50, 41, 0 ], "i8", t);

z.j = v([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 109, 109, 111, 110, 47, 98, 50, 83, 116, 97, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 46, 99, 112, 112, 0 ], "i8", t);

z.da = v([ 98, 50, 83, 116, 97, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 58, 58, 126, 98, 50, 83, 116, 97, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 40, 41, 0 ], "i8", t);

z.Vb = v([ 109, 95, 105, 110, 100, 101, 120, 32, 61, 61, 32, 48, 0 ], "i8", t);

z.ac = v([ 109, 95, 101, 110, 116, 114, 121, 67, 111, 117, 110, 116, 32, 61, 61, 32, 48, 0 ], "i8", t);

z.n = v([ 118, 111, 105, 100, 32, 42, 98, 50, 83, 116, 97, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 58, 58, 65, 108, 108, 111, 99, 97, 116, 101, 40, 105, 110, 116, 51, 50, 41, 0 ], "i8", t);

z.p = v([ 109, 95, 101, 110, 116, 114, 121, 67, 111, 117, 110, 116, 32, 60, 32, 98, 50, 95, 109, 97, 120, 83, 116, 97, 99, 107, 69, 110, 116, 114, 105, 101, 115, 0 ], "i8", t);

z.ca = v([ 118, 111, 105, 100, 32, 98, 50, 83, 116, 97, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 58, 58, 70, 114, 101, 101, 40, 118, 111, 105, 100, 32, 42, 41, 0 ], "i8", t);

z.nc = v([ 109, 95, 101, 110, 116, 114, 121, 67, 111, 117, 110, 116, 32, 62, 32, 48, 0 ], "i8", t);

z.uc = v([ 112, 32, 61, 61, 32, 101, 110, 116, 114, 121, 45, 62, 100, 97, 116, 97, 0 ], "i8", t);

z.m = v([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 98, 50, 66, 111, 100, 121, 46, 99, 112, 112, 0 ], "i8", t);

z.q = v([ 98, 50, 66, 111, 100, 121, 58, 58, 98, 50, 66, 111, 100, 121, 40, 99, 111, 110, 115, 116, 32, 98, 50, 66, 111, 100, 121, 68, 101, 102, 32, 42, 44, 32, 98, 50, 87, 111, 114, 108, 100, 32, 42, 41, 0 ], "i8", t);

z.Wb = v([ 98, 100, 45, 62, 112, 111, 115, 105, 116, 105, 111, 110, 46, 73, 115, 86, 97, 108, 105, 100, 40, 41, 0 ], "i8", t);

z.bc = v([ 98, 100, 45, 62, 108, 105, 110, 101, 97, 114, 86, 101, 108, 111, 99, 105, 116, 121, 46, 73, 115, 86, 97, 108, 105, 100, 40, 41, 0 ], "i8", t);

z.gc = v([ 98, 50, 73, 115, 86, 97, 108, 105, 100, 40, 98, 100, 45, 62, 97, 110, 103, 108, 101, 41, 0 ], "i8", t);

z.oc = v([ 98, 50, 73, 115, 86, 97, 108, 105, 100, 40, 98, 100, 45, 62, 97, 110, 103, 117, 108, 97, 114, 86, 101, 108, 111, 99, 105, 116, 121, 41, 0 ], "i8", t);

z.vc = v([ 98, 50, 73, 115, 86, 97, 108, 105, 100, 40, 98, 100, 45, 62, 97, 110, 103, 117, 108, 97, 114, 68, 97, 109, 112, 105, 110, 103, 41, 32, 38, 38, 32, 98, 100, 45, 62, 97, 110, 103, 117, 108, 97, 114, 68, 97, 109, 112, 105, 110, 103, 32, 62, 61, 32, 48, 46, 48, 102, 0 ], "i8", t);

z.yc = v([ 98, 50, 73, 115, 86, 97, 108, 105, 100, 40, 98, 100, 45, 62, 108, 105, 110, 101, 97, 114, 68, 97, 109, 112, 105, 110, 103, 41, 32, 38, 38, 32, 98, 100, 45, 62, 108, 105, 110, 101, 97, 114, 68, 97, 109, 112, 105, 110, 103, 32, 62, 61, 32, 48, 46, 48, 102, 0 ], "i8", t);

z.Ac = v([ 109, 95, 119, 111, 114, 108, 100, 45, 62, 73, 115, 76, 111, 99, 107, 101, 100, 40, 41, 32, 61, 61, 32, 102, 97, 108, 115, 101, 0 ], "i8", t);

z.qb = v([ 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 98, 50, 66, 111, 100, 121, 58, 58, 67, 114, 101, 97, 116, 101, 70, 105, 120, 116, 117, 114, 101, 40, 99, 111, 110, 115, 116, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 68, 101, 102, 32, 42, 41, 0 ], "i8", t);

z.ja = v([ 118, 111, 105, 100, 32, 98, 50, 66, 111, 100, 121, 58, 58, 82, 101, 115, 101, 116, 77, 97, 115, 115, 68, 97, 116, 97, 40, 41, 0 ], "i8", t);

z.Hb = v([ 109, 95, 116, 121, 112, 101, 32, 61, 61, 32, 98, 50, 95, 100, 121, 110, 97, 109, 105, 99, 66, 111, 100, 121, 0 ], "i8", t);

z.Mb = v([ 109, 95, 73, 32, 62, 32, 48, 46, 48, 102, 0 ], "i8", t);

fn = v(4, "*", t);

gn = v(4, "*", t);

z.na = v([ 118, 111, 105, 100, 32, 42, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 71, 101, 116, 85, 115, 101, 114, 68, 97, 116, 97, 40, 105, 110, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", t);

z.s = v([ 48, 32, 60, 61, 32, 112, 114, 111, 120, 121, 73, 100, 32, 38, 38, 32, 112, 114, 111, 120, 121, 73, 100, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", t);

z.R = v([ 99, 111, 110, 115, 116, 32, 98, 50, 65, 65, 66, 66, 32, 38, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 71, 101, 116, 70, 97, 116, 65, 65, 66, 66, 40, 105, 110, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", t);

QA = v([ 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 66, 0, 0, 0, 68, 0, 0, 0, 70, 0, 0, 0, 72, 0, 0, 0, 74, 0, 0, 0 ], [ "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0 ], t);

v(1, "void*", t);

z.Xa = v([ 49, 55, 98, 50, 67, 111, 110, 116, 97, 99, 116, 76, 105, 115, 116, 101, 110, 101, 114, 0 ], "i8", t);

RA = v(8, "*", t);

z.Ob = v([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 98, 50, 70, 105, 120, 116, 117, 114, 101, 46, 99, 112, 112, 0 ], "i8", t);

z.tb = v([ 118, 111, 105, 100, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 58, 58, 68, 101, 115, 116, 114, 111, 121, 40, 98, 50, 66, 108, 111, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 32, 42, 41, 0 ], "i8", t);

z.ua = v([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 98, 50, 73, 115, 108, 97, 110, 100, 46, 99, 112, 112, 0 ], "i8", t);

z.la = v([ 118, 111, 105, 100, 32, 98, 50, 73, 115, 108, 97, 110, 100, 58, 58, 83, 111, 108, 118, 101, 84, 79, 73, 40, 99, 111, 110, 115, 116, 32, 98, 50, 84, 105, 109, 101, 83, 116, 101, 112, 32, 38, 44, 32, 105, 110, 116, 51, 50, 44, 32, 105, 110, 116, 51, 50, 41, 0 ], "i8", t);

z.Fb = v([ 116, 111, 105, 73, 110, 100, 101, 120, 65, 32, 60, 32, 109, 95, 98, 111, 100, 121, 67, 111, 117, 110, 116, 0 ], "i8", t);

z.Xb = v([ 116, 111, 105, 73, 110, 100, 101, 120, 66, 32, 60, 32, 109, 95, 98, 111, 100, 121, 67, 111, 117, 110, 116, 0 ], "i8", t);

z.r = v([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 98, 50, 87, 111, 114, 108, 100, 46, 99, 112, 112, 0 ], "i8", t);

z.rb = v([ 98, 50, 66, 111, 100, 121, 32, 42, 98, 50, 87, 111, 114, 108, 100, 58, 58, 67, 114, 101, 97, 116, 101, 66, 111, 100, 121, 40, 99, 111, 110, 115, 116, 32, 98, 50, 66, 111, 100, 121, 68, 101, 102, 32, 42, 41, 0 ], "i8", t);

z.Gb = v([ 73, 115, 76, 111, 99, 107, 101, 100, 40, 41, 32, 61, 61, 32, 102, 97, 108, 115, 101, 0 ], "i8", t);

z.O = v([ 118, 111, 105, 100, 32, 98, 50, 87, 111, 114, 108, 100, 58, 58, 83, 111, 108, 118, 101, 40, 99, 111, 110, 115, 116, 32, 98, 50, 84, 105, 109, 101, 83, 116, 101, 112, 32, 38, 41, 0 ], "i8", t);

z.hc = v([ 98, 45, 62, 73, 115, 65, 99, 116, 105, 118, 101, 40, 41, 32, 61, 61, 32, 116, 114, 117, 101, 0 ], "i8", t);

z.Ha = v([ 115, 116, 97, 99, 107, 67, 111, 117, 110, 116, 32, 60, 32, 115, 116, 97, 99, 107, 83, 105, 122, 101, 0 ], "i8", t);

z.ka = v([ 118, 111, 105, 100, 32, 98, 50, 87, 111, 114, 108, 100, 58, 58, 83, 111, 108, 118, 101, 84, 79, 73, 40, 99, 111, 110, 115, 116, 32, 98, 50, 84, 105, 109, 101, 83, 116, 101, 112, 32, 38, 41, 0 ], "i8", t);

z.xc = v([ 116, 121, 112, 101, 65, 32, 61, 61, 32, 98, 50, 95, 100, 121, 110, 97, 109, 105, 99, 66, 111, 100, 121, 32, 124, 124, 32, 116, 121, 112, 101, 66, 32, 61, 61, 32, 98, 50, 95, 100, 121, 110, 97, 109, 105, 99, 66, 111, 100, 121, 0 ], "i8", t);

z.t = v([ 97, 108, 112, 104, 97, 48, 32, 60, 32, 49, 46, 48, 102, 0 ], "i8", t);

z.z = v([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 108, 108, 105, 115, 105, 111, 110, 47, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 46, 104, 0 ], "i8", t);

z.B = v([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 109, 109, 111, 110, 47, 98, 50, 77, 97, 116, 104, 46, 104, 0 ], "i8", t);

z.w = v([ 118, 111, 105, 100, 32, 98, 50, 83, 119, 101, 101, 112, 58, 58, 65, 100, 118, 97, 110, 99, 101, 40, 102, 108, 111, 97, 116, 51, 50, 41, 0 ], "i8", t);

z.o = v([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 98, 50, 73, 115, 108, 97, 110, 100, 46, 104, 0 ], "i8", t);

z.sb = v([ 118, 111, 105, 100, 32, 98, 50, 73, 115, 108, 97, 110, 100, 58, 58, 65, 100, 100, 40, 98, 50, 74, 111, 105, 110, 116, 32, 42, 41, 0 ], "i8", t);

z.$b = v([ 109, 95, 106, 111, 105, 110, 116, 67, 111, 117, 110, 116, 32, 60, 32, 109, 95, 106, 111, 105, 110, 116, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", t);

z.P = v([ 118, 111, 105, 100, 32, 98, 50, 73, 115, 108, 97, 110, 100, 58, 58, 65, 100, 100, 40, 98, 50, 67, 111, 110, 116, 97, 99, 116, 32, 42, 41, 0 ], "i8", t);

z.T = v([ 109, 95, 99, 111, 110, 116, 97, 99, 116, 67, 111, 117, 110, 116, 32, 60, 32, 109, 95, 99, 111, 110, 116, 97, 99, 116, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", t);

z.F = v([ 118, 111, 105, 100, 32, 98, 50, 73, 115, 108, 97, 110, 100, 58, 58, 65, 100, 100, 40, 98, 50, 66, 111, 100, 121, 32, 42, 41, 0 ], "i8", t);

z.J = v([ 109, 95, 98, 111, 100, 121, 67, 111, 117, 110, 116, 32, 60, 32, 109, 95, 98, 111, 100, 121, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", t);

SA = v([ 0, 0, 0, 0, 0, 0, 0, 0, 76, 0, 0, 0, 78, 0, 0, 0, 80, 0, 0, 0 ], [ "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0 ], t);

v(1, "void*", t);

z.Va = v([ 49, 53, 98, 50, 67, 111, 110, 116, 97, 99, 116, 70, 105, 108, 116, 101, 114, 0 ], "i8", t);

TA = v(8, "*", t);

UA = v([ 0, 0, 0, 0, 0, 0, 0, 0, 82, 0, 0, 0, 84, 0, 0, 0, 86, 0, 0, 0 ], [ "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0 ], t);

v(1, "void*", t);

z.wa = v([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 67, 111, 110, 116, 97, 99, 116, 115, 47, 98, 50, 67, 104, 97, 105, 110, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 46, 99, 112, 112, 0 ], "i8", t);

z.fa = v([ 98, 50, 67, 104, 97, 105, 110, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 58, 58, 98, 50, 67, 104, 97, 105, 110, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 40, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 105, 110, 116, 51, 50, 44, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 105, 110, 116, 51, 50, 41, 0 ], "i8", t);

z.Za = v([ 50, 51, 98, 50, 67, 104, 97, 105, 110, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 0 ], "i8", t);

z.eb = v([ 57, 98, 50, 67, 111, 110, 116, 97, 99, 116, 0 ], "i8", t);

VA = v(8, "*", t);

WA = v(12, "*", t);

XA = v([ 0, 0, 0, 0, 0, 0, 0, 0, 88, 0, 0, 0, 90, 0, 0, 0, 92, 0, 0, 0 ], [ "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0 ], t);

v(1, "void*", t);

z.xa = v([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 67, 111, 110, 116, 97, 99, 116, 115, 47, 98, 50, 67, 104, 97, 105, 110, 65, 110, 100, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 46, 99, 112, 112, 0 ], "i8", t);

z.ha = v([ 98, 50, 67, 104, 97, 105, 110, 65, 110, 100, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 58, 58, 98, 50, 67, 104, 97, 105, 110, 65, 110, 100, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 40, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 105, 110, 116, 51, 50, 44, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 105, 110, 116, 51, 50, 41, 0 ], "i8", t);

z.qa = v([ 109, 95, 102, 105, 120, 116, 117, 114, 101, 65, 45, 62, 71, 101, 116, 84, 121, 112, 101, 40, 41, 32, 61, 61, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 101, 95, 99, 104, 97, 105, 110, 0 ], "i8", t);

z.ab = v([ 50, 52, 98, 50, 67, 104, 97, 105, 110, 65, 110, 100, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 0 ], "i8", t);

YA = v(12, "*", t);

ZA = v([ 0, 0, 0, 0, 0, 0, 0, 0, 94, 0, 0, 0, 96, 0, 0, 0, 98, 0, 0, 0 ], [ "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0 ], t);

v(1, "void*", t);

z.ya = v([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 67, 111, 110, 116, 97, 99, 116, 115, 47, 98, 50, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 46, 99, 112, 112, 0 ], "i8", t);

z.Z = v([ 98, 50, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 58, 58, 98, 50, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 40, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 41, 0 ], "i8", t);

z.Jb = v([ 109, 95, 102, 105, 120, 116, 117, 114, 101, 65, 45, 62, 71, 101, 116, 84, 121, 112, 101, 40, 41, 32, 61, 61, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 101, 95, 99, 105, 114, 99, 108, 101, 0 ], "i8", t);

z.Ua = v([ 49, 53, 98, 50, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 0 ], "i8", t);

$A = v(12, "*", t);

Ss = v(192, [ "*", 0, 0, 0, "*", 0, 0, 0, "i8", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i8", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i8", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i8", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i8", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i8", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i8", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i8", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i8", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i8", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i8", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i8", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i8", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i8", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i8", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i8", 0, 0, 0 ], t);

Rs = v(1, "i1", t);

z.A = v([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 67, 111, 110, 116, 97, 99, 116, 115, 47, 98, 50, 67, 111, 110, 116, 97, 99, 116, 46, 99, 112, 112, 0 ], "i8", t);

z.Kb = v([ 48, 32, 60, 61, 32, 116, 121, 112, 101, 49, 32, 38, 38, 32, 116, 121, 112, 101, 49, 32, 60, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 101, 95, 116, 121, 112, 101, 67, 111, 117, 110, 116, 0 ], "i8", t);

z.Yb = v([ 48, 32, 60, 61, 32, 116, 121, 112, 101, 50, 32, 38, 38, 32, 116, 121, 112, 101, 50, 32, 60, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 101, 95, 116, 121, 112, 101, 67, 111, 117, 110, 116, 0 ], "i8", t);

z.ma = v([ 115, 116, 97, 116, 105, 99, 32, 98, 50, 67, 111, 110, 116, 97, 99, 116, 32, 42, 98, 50, 67, 111, 110, 116, 97, 99, 116, 58, 58, 67, 114, 101, 97, 116, 101, 40, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 105, 110, 116, 51, 50, 44, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 105, 110, 116, 51, 50, 44, 32, 98, 50, 66, 108, 111, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 32, 42, 41, 0 ], "i8", t);

z.Q = v([ 115, 116, 97, 116, 105, 99, 32, 118, 111, 105, 100, 32, 98, 50, 67, 111, 110, 116, 97, 99, 116, 58, 58, 68, 101, 115, 116, 114, 111, 121, 40, 98, 50, 67, 111, 110, 116, 97, 99, 116, 32, 42, 44, 32, 98, 50, 66, 108, 111, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 32, 42, 41, 0 ], "i8", t);

z.dc = v([ 115, 95, 105, 110, 105, 116, 105, 97, 108, 105, 122, 101, 100, 32, 61, 61, 32, 116, 114, 117, 101, 0 ], "i8", t);

z.Fa = v([ 48, 32, 60, 61, 32, 116, 121, 112, 101, 65, 32, 38, 38, 32, 116, 121, 112, 101, 66, 32, 60, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 101, 95, 116, 121, 112, 101, 67, 111, 117, 110, 116, 0 ], "i8", t);

aB = v([ 0, 0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 102, 0, 0, 0, 104, 0, 0, 0 ], [ "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0 ], t);

v(1, "void*", t);

z.C = v([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 67, 111, 110, 116, 97, 99, 116, 115, 47, 98, 50, 67, 111, 110, 116, 97, 99, 116, 83, 111, 108, 118, 101, 114, 46, 99, 112, 112, 0 ], "i8", t);

z.mb = v([ 98, 50, 67, 111, 110, 116, 97, 99, 116, 83, 111, 108, 118, 101, 114, 58, 58, 98, 50, 67, 111, 110, 116, 97, 99, 116, 83, 111, 108, 118, 101, 114, 40, 98, 50, 67, 111, 110, 116, 97, 99, 116, 83, 111, 108, 118, 101, 114, 68, 101, 102, 32, 42, 41, 0 ], "i8", t);

z.Lb = v([ 112, 111, 105, 110, 116, 67, 111, 117, 110, 116, 32, 62, 32, 48, 0 ], "i8", t);

z.lb = v([ 118, 111, 105, 100, 32, 98, 50, 67, 111, 110, 116, 97, 99, 116, 83, 111, 108, 118, 101, 114, 58, 58, 73, 110, 105, 116, 105, 97, 108, 105, 122, 101, 86, 101, 108, 111, 99, 105, 116, 121, 67, 111, 110, 115, 116, 114, 97, 105, 110, 116, 115, 40, 41, 0 ], "i8", t);

z.Zb = v([ 109, 97, 110, 105, 102, 111, 108, 100, 45, 62, 112, 111, 105, 110, 116, 67, 111, 117, 110, 116, 32, 62, 32, 48, 0 ], "i8", t);

z.$ = v([ 118, 111, 105, 100, 32, 98, 50, 67, 111, 110, 116, 97, 99, 116, 83, 111, 108, 118, 101, 114, 58, 58, 83, 111, 108, 118, 101, 86, 101, 108, 111, 99, 105, 116, 121, 67, 111, 110, 115, 116, 114, 97, 105, 110, 116, 115, 40, 41, 0 ], "i8", t);

z.ec = v([ 112, 111, 105, 110, 116, 67, 111, 117, 110, 116, 32, 61, 61, 32, 49, 32, 124, 124, 32, 112, 111, 105, 110, 116, 67, 111, 117, 110, 116, 32, 61, 61, 32, 50, 0 ], "i8", t);

z.ic = v([ 97, 46, 120, 32, 62, 61, 32, 48, 46, 48, 102, 32, 38, 38, 32, 97, 46, 121, 32, 62, 61, 32, 48, 46, 48, 102, 0 ], "i8", t);

z.pb = v([ 118, 111, 105, 100, 32, 98, 50, 80, 111, 115, 105, 116, 105, 111, 110, 83, 111, 108, 118, 101, 114, 77, 97, 110, 105, 102, 111, 108, 100, 58, 58, 73, 110, 105, 116, 105, 97, 108, 105, 122, 101, 40, 98, 50, 67, 111, 110, 116, 97, 99, 116, 80, 111, 115, 105, 116, 105, 111, 110, 67, 111, 110, 115, 116, 114, 97, 105, 110, 116, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 44, 32, 105, 110, 116, 51, 50, 41, 0 ], "i8", t);

z.rc = v([ 112, 99, 45, 62, 112, 111, 105, 110, 116, 67, 111, 117, 110, 116, 32, 62, 32, 48, 0 ], "i8", t);

bB = v([ 0, 0, 0, 0, 0, 0, 0, 0, 106, 0, 0, 0, 108, 0, 0, 0, 110, 0, 0, 0 ], [ "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0 ], t);

v(1, "void*", t);

z.Aa = v([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 67, 111, 110, 116, 97, 99, 116, 115, 47, 98, 50, 69, 100, 103, 101, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 46, 99, 112, 112, 0 ], "i8", t);

z.ea = v([ 98, 50, 69, 100, 103, 101, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 58, 58, 98, 50, 69, 100, 103, 101, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 40, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 41, 0 ], "i8", t);

z.Ya = v([ 50, 50, 98, 50, 69, 100, 103, 101, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 0 ], "i8", t);

kG = v(12, "*", t);

lG = v([ 0, 0, 0, 0, 0, 0, 0, 0, 112, 0, 0, 0, 114, 0, 0, 0, 116, 0, 0, 0 ], [ "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0 ], t);

v(1, "void*", t);

z.Ba = v([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 67, 111, 110, 116, 97, 99, 116, 115, 47, 98, 50, 69, 100, 103, 101, 65, 110, 100, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 46, 99, 112, 112, 0 ], "i8", t);

z.ga = v([ 98, 50, 69, 100, 103, 101, 65, 110, 100, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 58, 58, 98, 50, 69, 100, 103, 101, 65, 110, 100, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 40, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 41, 0 ], "i8", t);

z.ra = v([ 109, 95, 102, 105, 120, 116, 117, 114, 101, 65, 45, 62, 71, 101, 116, 84, 121, 112, 101, 40, 41, 32, 61, 61, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 101, 95, 101, 100, 103, 101, 0 ], "i8", t);

z.$a = v([ 50, 51, 98, 50, 69, 100, 103, 101, 65, 110, 100, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 0 ], "i8", t);

mG = v(12, "*", t);

nG = v([ 0, 0, 0, 0, 0, 0, 0, 0, 118, 0, 0, 0, 120, 0, 0, 0, 122, 0, 0, 0 ], [ "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0 ], t);

v(1, "void*", t);

z.Ca = v([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 67, 111, 110, 116, 97, 99, 116, 115, 47, 98, 50, 80, 111, 108, 121, 103, 111, 110, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 46, 99, 112, 112, 0 ], "i8", t);

z.ia = v([ 98, 50, 80, 111, 108, 121, 103, 111, 110, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 58, 58, 98, 50, 80, 111, 108, 121, 103, 111, 110, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 40, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 41, 0 ], "i8", t);

z.I = v([ 109, 95, 102, 105, 120, 116, 117, 114, 101, 66, 45, 62, 71, 101, 116, 84, 121, 112, 101, 40, 41, 32, 61, 61, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 101, 95, 99, 105, 114, 99, 108, 101, 0 ], "i8", t);

z.bb = v([ 50, 53, 98, 50, 80, 111, 108, 121, 103, 111, 110, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 0 ], "i8", t);

oG = v(12, "*", t);

pG = v([ 0, 0, 0, 0, 0, 0, 0, 0, 124, 0, 0, 0, 126, 0, 0, 0, 128, 0, 0, 0 ], [ "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0 ], t);

v(1, "void*", t);

z.Da = v([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 67, 111, 110, 116, 97, 99, 116, 115, 47, 98, 50, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 46, 99, 112, 112, 0 ], "i8", t);

z.ba = v([ 98, 50, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 58, 58, 98, 50, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 40, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 41, 0 ], "i8", t);

z.sa = v([ 109, 95, 102, 105, 120, 116, 117, 114, 101, 65, 45, 62, 71, 101, 116, 84, 121, 112, 101, 40, 41, 32, 61, 61, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 101, 95, 112, 111, 108, 121, 103, 111, 110, 0 ], "i8", t);

z.S = v([ 109, 95, 102, 105, 120, 116, 117, 114, 101, 66, 45, 62, 71, 101, 116, 84, 121, 112, 101, 40, 41, 32, 61, 61, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 101, 95, 112, 111, 108, 121, 103, 111, 110, 0 ], "i8", t);

z.Wa = v([ 49, 54, 98, 50, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 0 ], "i8", t);

qG = v(12, "*", t);

z.f = v([ 102, 97, 108, 115, 101, 0 ], "i8", t);

R = v(468, [ "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0 ], t);

nt = v(24, "i32", t);

LA = v([ 1, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, 0 ], t);

h[MA >> 2] = LA + 8;

h[MA + 4 >> 2] = z.cb;

NA = v([ 2, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, 0 ], t);

h[Wn + 4 >> 2] = OA;

h[OA >> 2] = NA + 8;

h[OA + 4 >> 2] = z.Sa;

h[OA + 8 >> 2] = MA;

h[ip + 4 >> 2] = PA;

h[PA >> 2] = NA + 8;

h[PA + 4 >> 2] = z.Ta;

h[PA + 8 >> 2] = MA;

h[fn >> 2] = SA + 8;

h[gn >> 2] = QA + 8;

h[QA + 4 >> 2] = RA;

h[RA >> 2] = LA + 8;

h[RA + 4 >> 2] = z.Xa;

h[SA + 4 >> 2] = TA;

h[TA >> 2] = LA + 8;

h[TA + 4 >> 2] = z.Va;

h[UA + 4 >> 2] = WA;

h[VA >> 2] = LA + 8;

h[VA + 4 >> 2] = z.eb;

h[WA >> 2] = NA + 8;

h[WA + 4 >> 2] = z.Za;

h[WA + 8 >> 2] = VA;

h[XA + 4 >> 2] = YA;

h[YA >> 2] = NA + 8;

h[YA + 4 >> 2] = z.ab;

h[YA + 8 >> 2] = VA;

h[ZA + 4 >> 2] = $A;

h[$A >> 2] = NA + 8;

h[$A + 4 >> 2] = z.Ua;

h[$A + 8 >> 2] = VA;

h[aB + 4 >> 2] = VA;

h[bB + 4 >> 2] = kG;

h[kG >> 2] = NA + 8;

h[kG + 4 >> 2] = z.Ya;

h[kG + 8 >> 2] = VA;

h[lG + 4 >> 2] = mG;

h[mG >> 2] = NA + 8;

h[mG + 4 >> 2] = z.$a;

h[mG + 8 >> 2] = VA;

h[nG + 4 >> 2] = oG;

h[oG >> 2] = NA + 8;

h[oG + 4 >> 2] = z.bb;

h[oG + 8 >> 2] = VA;

h[pG + 4 >> 2] = qG;

h[qG >> 2] = NA + 8;

h[qG + 4 >> 2] = z.Wa;

h[qG + 8 >> 2] = VA;

km = [ 0, 0, (function(c, d) {
  var e = h[c >> 2], g = h[d >> 2];
  return e < g ? 1 : e != g ? 0 : h[c + 4 >> 2] < h[d + 4 >> 2];
}), 0, (function(c, d, e, g, f) {
  d = hn(f, 144);
  g = d >> 2;
  if (0 == d) {
    c = 0;
  } else {
    h[d >> 2] = aB + 8;
    h[g + 1] = 4;
    h[g + 12] = c;
    f = d + 52;
    h[f >> 2] = e;
    h[g + 14] = 0;
    h[g + 15] = 0;
    h[g + 31] = 0;
    h[g + 32] = 0;
    for (var i = d + 8 >> 2, j = i + 10; i < j; i++) {
      h[i] = 0;
    }
    i = bn(l[c + 16 >> 2] * l[e + 16 >> 2]);
    l[g + 34] = i;
    i = l[c + 20 >> 2];
    j = l[e + 20 >> 2];
    l[g + 35] = i > j ? i : j;
    h[d >> 2] = ZA + 8;
    0 == h[h[c + 12 >> 2] + 4 >> 2] ? c = e : (G(z.ya, 44, z.Z, z.Jb), c = h[f >> 2]);
    0 != h[h[c + 12 >> 2] + 4 >> 2] && G(z.ya, 45, z.Z, z.I);
    c = d;
  }
  return c;
}), 0, (function(c, d) {
  km[h[h[c >> 2] + 4 >> 2]](c);
  var e = Hh[en + 144];
  14 > e || G(z.e, 173, z.h, z.i);
  e = (e << 2) + d + 12;
  h[c >> 2] = h[e >> 2];
  h[e >> 2] = c;
}), 0, (function(c, d, e, g, f) {
  d = hn(f, 144);
  g = d >> 2;
  if (0 == d) {
    c = 0;
  } else {
    h[d >> 2] = aB + 8;
    h[g + 1] = 4;
    h[g + 12] = c;
    f = d + 52;
    h[f >> 2] = e;
    h[g + 14] = 0;
    h[g + 15] = 0;
    h[g + 31] = 0;
    h[g + 32] = 0;
    for (var i = d + 8 >> 2, j = i + 10; i < j; i++) {
      h[i] = 0;
    }
    i = bn(l[c + 16 >> 2] * l[e + 16 >> 2]);
    l[g + 34] = i;
    i = l[c + 20 >> 2];
    j = l[e + 20 >> 2];
    l[g + 35] = i > j ? i : j;
    h[d >> 2] = nG + 8;
    2 == h[h[c + 12 >> 2] + 4 >> 2] ? c = e : (G(z.Ca, 41, z.ia, z.sa), c = h[f >> 2]);
    0 != h[h[c + 12 >> 2] + 4 >> 2] && G(z.Ca, 42, z.ia, z.I);
    c = d;
  }
  return c;
}), 0, (function(c, d) {
  km[h[h[c >> 2] + 4 >> 2]](c);
  var e = Hh[en + 144];
  14 > e || G(z.e, 173, z.h, z.i);
  e = (e << 2) + d + 12;
  h[c >> 2] = h[e >> 2];
  h[e >> 2] = c;
}), 0, (function(c, d, e, g, f) {
  d = hn(f, 144);
  g = d >> 2;
  if (0 == d) {
    c = 0;
  } else {
    h[d >> 2] = aB + 8;
    h[g + 1] = 4;
    h[g + 12] = c;
    f = d + 52;
    h[f >> 2] = e;
    h[g + 14] = 0;
    h[g + 15] = 0;
    h[g + 31] = 0;
    h[g + 32] = 0;
    for (var i = d + 8 >> 2, j = i + 10; i < j; i++) {
      h[i] = 0;
    }
    i = bn(l[c + 16 >> 2] * l[e + 16 >> 2]);
    l[g + 34] = i;
    i = l[c + 20 >> 2];
    j = l[e + 20 >> 2];
    l[g + 35] = i > j ? i : j;
    h[d >> 2] = pG + 8;
    2 == h[h[c + 12 >> 2] + 4 >> 2] ? c = e : (G(z.Da, 44, z.ba, z.sa), c = h[f >> 2]);
    2 != h[h[c + 12 >> 2] + 4 >> 2] && G(z.Da, 45, z.ba, z.S);
    c = d;
  }
  return c;
}), 0, (function(c, d) {
  km[h[h[c >> 2] + 4 >> 2]](c);
  var e = Hh[en + 144];
  14 > e || G(z.e, 173, z.h, z.i);
  e = (e << 2) + d + 12;
  h[c >> 2] = h[e >> 2];
  h[e >> 2] = c;
}), 0, (function(c, d, e, g, f) {
  d = hn(f, 144);
  g = d >> 2;
  if (0 == d) {
    c = 0;
  } else {
    h[d >> 2] = aB + 8;
    h[g + 1] = 4;
    h[g + 12] = c;
    f = d + 52;
    h[f >> 2] = e;
    h[g + 14] = 0;
    h[g + 15] = 0;
    h[g + 31] = 0;
    h[g + 32] = 0;
    for (var i = d + 8 >> 2, j = i + 10; i < j; i++) {
      h[i] = 0;
    }
    i = bn(l[c + 16 >> 2] * l[e + 16 >> 2]);
    l[g + 34] = i;
    i = l[c + 20 >> 2];
    j = l[e + 20 >> 2];
    l[g + 35] = i > j ? i : j;
    h[d >> 2] = bB + 8;
    1 == h[h[c + 12 >> 2] + 4 >> 2] ? c = e : (G(z.Aa, 41, z.ea, z.ra), c = h[f >> 2]);
    0 != h[h[c + 12 >> 2] + 4 >> 2] && G(z.Aa, 42, z.ea, z.I);
    c = d;
  }
  return c;
}), 0, (function(c, d) {
  km[h[h[c >> 2] + 4 >> 2]](c);
  var e = Hh[en + 144];
  14 > e || G(z.e, 173, z.h, z.i);
  e = (e << 2) + d + 12;
  h[c >> 2] = h[e >> 2];
  h[e >> 2] = c;
}), 0, (function(c, d, e, g, f) {
  d = hn(f, 144);
  g = d >> 2;
  if (0 == d) {
    c = 0;
  } else {
    h[d >> 2] = aB + 8;
    h[g + 1] = 4;
    h[g + 12] = c;
    f = d + 52;
    h[f >> 2] = e;
    h[g + 14] = 0;
    h[g + 15] = 0;
    h[g + 31] = 0;
    h[g + 32] = 0;
    for (var i = d + 8 >> 2, j = i + 10; i < j; i++) {
      h[i] = 0;
    }
    i = bn(l[c + 16 >> 2] * l[e + 16 >> 2]);
    l[g + 34] = i;
    i = l[c + 20 >> 2];
    j = l[e + 20 >> 2];
    l[g + 35] = i > j ? i : j;
    h[d >> 2] = lG + 8;
    1 == h[h[c + 12 >> 2] + 4 >> 2] ? c = e : (G(z.Ba, 41, z.ga, z.ra), c = h[f >> 2]);
    2 != h[h[c + 12 >> 2] + 4 >> 2] && G(z.Ba, 42, z.ga, z.S);
    c = d;
  }
  return c;
}), 0, (function(c, d) {
  km[h[h[c >> 2] + 4 >> 2]](c);
  var e = Hh[en + 144];
  14 > e || G(z.e, 173, z.h, z.i);
  e = (e << 2) + d + 12;
  h[c >> 2] = h[e >> 2];
  h[e >> 2] = c;
}), 0, (function(c, d, e, g, f) {
  var i, f = hn(f, 144);
  i = f >> 2;
  if (0 == f) {
    c = 0;
  } else {
    h[f >> 2] = aB + 8;
    h[i + 1] = 4;
    h[i + 12] = c;
    var j = f + 52;
    h[j >> 2] = e;
    h[i + 14] = d;
    h[i + 15] = g;
    h[i + 31] = 0;
    h[i + 32] = 0;
    d = f + 8 >> 2;
    for (g = d + 10; d < g; d++) {
      h[d] = 0;
    }
    d = bn(l[c + 16 >> 2] * l[e + 16 >> 2]);
    l[i + 34] = d;
    d = l[c + 20 >> 2];
    g = l[e + 20 >> 2];
    l[i + 35] = d > g ? d : g;
    h[f >> 2] = UA + 8;
    3 == h[h[c + 12 >> 2] + 4 >> 2] ? c = e : (G(z.wa, 43, z.fa, z.qa), c = h[j >> 2]);
    0 != h[h[c + 12 >> 2] + 4 >> 2] && G(z.wa, 44, z.fa, z.I);
    c = f;
  }
  return c;
}), 0, (function(c, d) {
  km[h[h[c >> 2] + 4 >> 2]](c);
  var e = Hh[en + 144];
  14 > e || G(z.e, 173, z.h, z.i);
  e = (e << 2) + d + 12;
  h[c >> 2] = h[e >> 2];
  h[e >> 2] = c;
}), 0, (function(c, d, e, g, f) {
  var i, f = hn(f, 144);
  i = f >> 2;
  if (0 == f) {
    c = 0;
  } else {
    h[f >> 2] = aB + 8;
    h[i + 1] = 4;
    h[i + 12] = c;
    var j = f + 52;
    h[j >> 2] = e;
    h[i + 14] = d;
    h[i + 15] = g;
    h[i + 31] = 0;
    h[i + 32] = 0;
    d = f + 8 >> 2;
    for (g = d + 10; d < g; d++) {
      h[d] = 0;
    }
    d = bn(l[c + 16 >> 2] * l[e + 16 >> 2]);
    l[i + 34] = d;
    d = l[c + 20 >> 2];
    g = l[e + 20 >> 2];
    l[i + 35] = d > g ? d : g;
    h[f >> 2] = XA + 8;
    3 == h[h[c + 12 >> 2] + 4 >> 2] ? c = e : (G(z.xa, 43, z.ha, z.qa), c = h[j >> 2]);
    2 != h[h[c + 12 >> 2] + 4 >> 2] && G(z.xa, 44, z.ha, z.S);
    c = f;
  }
  return c;
}), 0, (function(c, d) {
  km[h[h[c >> 2] + 4 >> 2]](c);
  var e = Hh[en + 144];
  14 > e || G(z.e, 173, z.h, z.i);
  e = (e << 2) + d + 12;
  h[c >> 2] = h[e >> 2];
  h[e >> 2] = c;
}), 0, qc(), 0, (function(c) {
  0 != c && qp(c);
}), 0, (function(c, d) {
  var e, g = hn(d, 48);
  e = g >> 2;
  0 == g ? e = 0 : (h[e] = Wn + 8, h[e + 1] = 1, l[e + 2] = .009999999776482582, l[e + 7] = 0, l[e + 8] = 0, l[e + 9] = 0, l[e + 10] = 0, a[g + 44] = 0, a[g + 45] = 0, e = g);
  h[e + 4 >> 2] = h[c + 4 >> 2];
  l[e + 8 >> 2] = l[c + 8 >> 2];
  var g = c + 12, f = e + 12, i = h[g + 4 >> 2];
  h[f >> 2] = h[g >> 2];
  h[f + 4 >> 2] = i;
  g = c + 20;
  f = e + 20;
  i = h[g + 4 >> 2];
  h[f >> 2] = h[g >> 2];
  h[f + 4 >> 2] = i;
  g = c + 28;
  f = e + 28;
  i = h[g + 4 >> 2];
  h[f >> 2] = h[g >> 2];
  h[f + 4 >> 2] = i;
  g = c + 36;
  f = e + 36;
  i = h[g + 4 >> 2];
  h[f >> 2] = h[g >> 2];
  h[f + 4 >> 2] = i;
  a[e + 44] = a[c + 44] & 1;
  a[e + 45] = a[c + 45] & 1;
  return e;
}), 0, (function() {
  return 1;
}), 0, (function() {
  return 0;
}), 0, (function(c, d, e, g) {
  var e = e >> 2, f = l[g >> 2], i = l[e] - f, j = l[g + 4 >> 2], m = l[e + 1] - j, n = l[g + 12 >> 2], o = l[g + 8 >> 2], g = n * i + o * m, q = -o, i = i * q + n * m, f = l[e + 2] - f, m = l[e + 3] - j, j = n * f + o * m - g, n = f * q + n * m - i, q = c + 12, o = h[q + 4 >> 2], q = (w[0] = h[q >> 2], x[0]), o = (w[0] = o, x[0]), f = c + 20, c = h[f + 4 >> 2], f = (w[0] = h[f >> 2], x[0]), m = (w[0] = c, x[0]), c = f - q, f = m - o, p = -c, r = f * f, s = c * c, m = bn(r + s);
  if (1.1920928955078125e-7 > m) {
    m = f;
  } else {
    var u = 1 / m, m = f * u, p = u * p;
  }
  var u = m * (q - g) + p * (o - i), A = m * j + p * n;
  0 == A ? d = 0 : (A = u / A, 0 > A ? d = 0 : l[e + 4] < A ? d = 0 : (e = s + r, 0 == e ? d = 0 : (e = ((g + j * A - q) * c + (i + n * A - o) * f) / e, 0 > e | 1 < e ? d = 0 : (l[d + 8 >> 2] = A, 0 < u ? (e = (x[0] = -m, w[0]), g = (x[0] = -p, w[0]) | 0) : (e = (x[0] = m, w[0]), g = (x[0] = p, w[0]) | 0), h[d >> 2] = 0 | e, h[d + 4 >> 2] = g, d = 1))));
  return d;
}), 0, (function(c, d, e) {
  var g = c >> 2, f = l[e + 12 >> 2], i = l[g + 3], j = l[e + 8 >> 2], m = l[g + 4], n = l[e >> 2], c = f * i - j * m + n, o = l[e + 4 >> 2], e = j * i + f * m + o, i = l[g + 5], m = l[g + 6], n = f * i - j * m + n, f = j * i + f * m + o, g = l[g + 2], j = (x[0] = (c < n ? c : n) - g, w[0]), o = (x[0] = (e < f ? e : f) - g, w[0]) | 0;
  h[d >> 2] = 0 | j;
  h[d + 4 >> 2] = o;
  d += 8;
  c = (x[0] = (c > n ? c : n) + g, w[0]);
  e = (x[0] = (e > f ? e : f) + g, w[0]) | 0;
  h[d >> 2] = 0 | c;
  h[d + 4 >> 2] = e;
}), 0, (function(c, d) {
  l[d >> 2] = 0;
  var e = .5 * (l[c + 16 >> 2] + l[c + 24 >> 2]), g = d + 4, f = (x[0] = .5 * (l[c + 12 >> 2] + l[c + 20 >> 2]), w[0]), e = (x[0] = e, w[0]) | 0;
  h[g >> 2] = 0 | f;
  h[g + 4 >> 2] = e;
  l[d + 12 >> 2] = 0;
}), 0, qc(), 0, (function(c) {
  0 != c && qp(c);
}), 0, (function(c, d) {
  var e, g = hn(d, 152);
  e = g >> 2;
  0 == g ? g = 0 : (h[e] = ip + 8, h[e + 1] = 2, l[e + 2] = .009999999776482582, h[e + 37] = 0, l[e + 3] = 0, l[e + 4] = 0);
  e = g >> 2;
  h[e + 1] = h[c + 4 >> 2];
  l[e + 2] = l[c + 8 >> 2];
  var f = c + 12, i = g + 12, j = h[f + 4 >> 2];
  h[i >> 2] = h[f >> 2];
  h[i + 4 >> 2] = j;
  Wp(g + 20, c + 20, 64);
  Wp(g + 84, c + 84, 64);
  h[e + 37] = h[c + 148 >> 2];
  return g;
}), 0, (function() {
  return 1;
}), 0, (function(c, d, e) {
  for (var c = c >> 2, g = l[e >> 2] - l[d >> 2], e = l[e + 4 >> 2] - l[d + 4 >> 2], f = l[d + 12 >> 2], i = l[d + 8 >> 2], d = f * g + i * e, g = g * -i + f * e, e = h[c + 37], f = 0; ; ) {
    if (f >= e) {
      var j = 1;
      break;
    }
    if (0 < l[((f << 3) + 84 >> 2) + c] * (d - l[((f << 3) + 20 >> 2) + c]) + l[((f << 3) + 88 >> 2) + c] * (g - l[((f << 3) + 24 >> 2) + c])) {
      j = 0;
      break;
    }
    f += 1;
  }
  return j;
}), 0, (function(c, d, e, g) {
  var f = e >> 2, c = c >> 2, i = l[g >> 2], j = l[f] - i, m = l[g + 4 >> 2], n = l[f + 1] - m, e = g + 12, o = l[e >> 2], g = g + 8, q = l[g >> 2], p = o * j + q * n, r = -q, j = j * r + o * n, i = l[f + 2] - i, n = l[f + 3] - m, m = o * i + q * n - p, o = i * r + o * n - j, r = l[f + 4], q = h[c + 37], i = 0, f = -1, n = r, s = 0;
  a : for (;;) {
    if (i < q) {
      var u = l[((i << 3) + 84 >> 2) + c], A = l[((i << 3) + 88 >> 2) + c], E = u * (l[((i << 3) + 20 >> 2) + c] - p) + A * (l[((i << 3) + 24 >> 2) + c] - j), u = u * m + A * o, A = 0 == u;
      b : do {
        if (A) {
          if (0 > E) {
            var y = 0;
            break a;
          } else {
            var I = f, C = n, K = s;
          }
        } else {
          I = 0 > u;
          do {
            if (I && E < s * u) {
              I = i;
              C = n;
              K = E / u;
              break b;
            }
          } while (0);
          0 < u ? E < n * u ? (I = f, C = E / u) : (I = f, C = n) : (I = f, C = n);
          K = s;
        }
      } while (0);
      if (C < K) {
        y = 0;
        break;
      }
      i += 1;
      f = I;
      n = C;
      s = K;
    } else {
      0 > s | s > r && G(z.U, 249, z.wb, z.fc);
      if (-1 >= f) {
        y = 0;
        break;
      }
      l[d + 8 >> 2] = s;
      y = l[e >> 2];
      e = l[((f << 3) + 84 >> 2) + c];
      g = l[g >> 2];
      p = l[((f << 3) + 88 >> 2) + c];
      c = g * e + y * p;
      y = (x[0] = y * e - g * p, w[0]);
      c = (x[0] = c, w[0]) | 0;
      h[d >> 2] = 0 | y;
      h[d + 4 >> 2] = c;
      y = 1;
      break;
    }
  }
  return y;
}), 0, (function(c, d, e) {
  var c = c >> 2, g = l[e + 12 >> 2], f = l[c + 5], i = l[e + 8 >> 2], j = l[c + 6], m = l[e >> 2], n = g * f - i * j + m, e = l[e + 4 >> 2], f = i * f + g * j + e, j = h[c + 37], o = 1 < j;
  a : do {
    if (o) {
      for (var q = f, p = f, r = n, s = n, u = 1; ; ) {
        var A = l[((u << 3) + 20 >> 2) + c], E = l[((u << 3) + 24 >> 2) + c], y = g * A - i * E + m, A = i * A + g * E + e, s = s < y ? s : y, p = p < A ? p : A, r = r > y ? r : y, q = q > A ? q : A, u = u + 1;
        if (u >= j) {
          var I = q, C = p, K = r, J = s;
          break a;
        }
      }
    } else {
      C = I = f, J = K = n;
    }
  } while (0);
  c = l[c + 2];
  J = (x[0] = J - c, w[0]);
  C = (x[0] = C - c, w[0]) | 0;
  h[d >> 2] = 0 | J;
  h[d + 4 >> 2] = C;
  d += 8;
  K = (x[0] = K + c, w[0]);
  I = (x[0] = I + c, w[0]) | 0;
  h[d >> 2] = 0 | K;
  h[d + 4 >> 2] = I;
}), 0, (function(c, d, e) {
  var g;
  g = c + 148;
  var f = h[g >> 2];
  if (2 < f) {
    var i = f;
    g = 3;
  } else {
    if (G(z.U, 306, z.oa, z.lc), g = h[g >> 2], 0 < g) {
      i = g, g = 3;
    } else {
      var j = l[d >> 2] = 0, m = 0, n = 0, o = 0, q = 0, p = 0, r = d;
      g = 10;
    }
  }
  do {
    if (3 == g) {
      for (var s = f = g = 0; ; ) {
        var u = f + l[c + (s << 3) + 20 >> 2], A = g + l[c + (s << 3) + 24 >> 2], s = s + 1;
        if (s < i) {
          g = A, f = u;
        } else {
          break;
        }
      }
      f = 1 / i;
      g = u * f;
      for (var f = A * f, s = c + 20, E = c + 24, y = 0, I = 0, C = 0, K = 0, J = 0; ; ) {
        var M = l[c + (J << 3) + 20 >> 2] - g, B = l[c + (J << 3) + 24 >> 2] - f, J = J + 1, F = J < i;
        if (F) {
          var H = (J << 3) + c + 20, P = (J << 3) + c + 24;
        } else {
          H = s, P = E;
        }
        var D = l[H >> 2] - g, Q = l[P >> 2] - f, O = M * Q - B * D, H = .5 * O, P = C + H, L = .3333333432674408 * H, H = I + (M + D) * L, L = y + (B + Q) * L, M = K + .0833333358168602 * O * (M * M + D * M + D * D + B * B + Q * B + Q * Q);
        if (F) {
          y = L, I = H, C = P, K = M;
        } else {
          break;
        }
      }
      s = P * e;
      E = d;
      l[E >> 2] = s;
      if (1.1920928955078125e-7 < P) {
        var jb = s, U = f, N = g, ma = M, na = P, za = H, S = L;
        g = 11;
      } else {
        j = f, m = g, n = M, o = P, q = H, p = L, r = E, g = 10;
      }
    }
  } while (0);
  10 == g && (G(z.U, 352, z.oa, z.tc), jb = l[r >> 2], U = j, N = m, ma = n, na = o, za = q, S = p);
  c = 1 / na;
  za *= c;
  S *= c;
  N = za + N;
  U = S + U;
  c = d + 4;
  i = (x[0] = N, w[0]);
  j = (x[0] = U, w[0]) | 0;
  h[c >> 2] = 0 | i;
  h[c + 4 >> 2] = j;
  l[d + 12 >> 2] = ma * e + jb * (N * N + U * U - (za * za + S * S));
}), 0, qc(), 0, (function(c) {
  0 != c && qp(c);
}), 0, qc(), 0, qc(), 0, qc(), 0, qc(), 0, qc(), 0, (function(c) {
  0 != c && qp(c);
}), 0, (function(c, d, e) {
  c = b[d + 36 >> 1];
  return c != b[e + 36 >> 1] | 0 == c ? 0 == (b[e + 32 >> 1] & b[d + 34 >> 1]) ? 0 : 0 != (b[e + 34 >> 1] & b[d + 32 >> 1]) : 0 < c;
}), 0, (function(c, d, e, g) {
  var f, i = Qf;
  Qf += 48;
  f = i >> 2;
  var j = h[h[c + 48 >> 2] + 12 >> 2];
  h[f] = Wn + 8;
  h[f + 1] = 1;
  l[f + 2] = .009999999776482582;
  l[f + 7] = 0;
  l[f + 8] = 0;
  l[f + 9] = 0;
  l[f + 10] = 0;
  a[i + 44] = 0;
  a[i + 45] = 0;
  Js(j, i, h[c + 56 >> 2]);
  an(d, i, e, h[h[c + 52 >> 2] + 12 >> 2], g);
  Qf = i;
}), 0, qc(), 0, (function(c) {
  0 != c && qp(c);
}), 0, (function(c, d, e, g) {
  var f, i = Qf;
  Qf += 300;
  var j = i + 252;
  f = j >> 2;
  var m = h[h[c + 48 >> 2] + 12 >> 2];
  h[f] = Wn + 8;
  h[f + 1] = 1;
  l[f + 2] = .009999999776482582;
  l[f + 7] = 0;
  l[f + 8] = 0;
  l[f + 9] = 0;
  l[f + 10] = 0;
  a[j + 44] = 0;
  a[j + 45] = 0;
  Js(m, j, h[c + 56 >> 2]);
  rp(i, d, j, e, h[h[c + 52 >> 2] + 12 >> 2], g);
  Qf = i;
}), 0, qc(), 0, (function(c) {
  0 != c && qp(c);
}), 0, (function(c, d, e, g) {
  var f = h[h[c + 48 >> 2] + 12 >> 2], i = h[h[c + 52 >> 2] + 12 >> 2], j = d + 60;
  h[j >> 2] = 0;
  var m = f + 12, n = l[e + 12 >> 2], o = l[m >> 2], q = l[e + 8 >> 2], p = l[f + 16 >> 2], c = i + 12, r = l[g + 12 >> 2], s = l[c >> 2], u = l[g + 8 >> 2], A = l[i + 16 >> 2], E = r * s - u * A + l[g >> 2] - (n * o - q * p + l[e >> 2]), e = u * s + r * A + l[g + 4 >> 2] - (q * o + n * p + l[e + 4 >> 2]), f = l[f + 8 >> 2] + l[i + 8 >> 2];
  E * E + e * e > f * f || (h[d + 56 >> 2] = 0, f = d + 48, E = h[m + 4 >> 2], h[f >> 2] = h[m >> 2], h[f + 4 >> 2] = E, l[d + 40 >> 2] = 0, l[d + 44 >> 2] = 0, h[j >> 2] = 1, j = h[c + 4 >> 2], h[d >> 2] = h[c >> 2], h[d + 4 >> 2] = j, h[d + 16 >> 2] = 0);
}), 0, qc(), 0, (function(c) {
  0 != c && qp(c);
}), 0, (function() {
  aa("Pure virtual function called!");
}), 0, qc(), 0, (function(c) {
  0 != c && qp(c);
}), 0, (function(c, d, e, g) {
  an(d, h[h[c + 48 >> 2] + 12 >> 2], e, h[h[c + 52 >> 2] + 12 >> 2], g);
}), 0, qc(), 0, (function(c) {
  0 != c && qp(c);
}), 0, (function(c, d, e, g) {
  var f = Qf;
  Qf += 252;
  rp(f, d, h[h[c + 48 >> 2] + 12 >> 2], e, h[h[c + 52 >> 2] + 12 >> 2], g);
  Qf = f;
}), 0, qc(), 0, (function(c) {
  0 != c && qp(c);
}), 0, (function(c, d, e, g) {
  var f, i, j = d >> 2, m = h[h[c + 48 >> 2] + 12 >> 2], n = h[h[c + 52 >> 2] + 12 >> 2];
  i = m >> 2;
  f = d + 60 >> 2;
  h[f] = 0;
  for (var o = n + 12, q = l[g + 12 >> 2], p = l[o >> 2], r = l[g + 8 >> 2], s = l[n + 16 >> 2], u = q * p - r * s + l[g >> 2] - l[e >> 2], A = r * p + q * s + l[g + 4 >> 2] - l[e + 4 >> 2], E = l[e + 12 >> 2], y = l[e + 8 >> 2], I = E * u + y * A, C = u * -y + E * A, K = l[m + 8 >> 2] + l[n + 8 >> 2], J = h[m + 148 >> 2], M = 0, B = -3.4028234663852886e+38, F = 0; ; ) {
    if (M < J) {
      var H = l[((M << 3) + 84 >> 2) + i] * (I - l[((M << 3) + 20 >> 2) + i]) + l[((M << 3) + 88 >> 2) + i] * (C - l[((M << 3) + 24 >> 2) + i]);
      if (H > K) {
        break;
      }
      var P = H > B, D = P ? M : F, Q = P ? H : B, M = M + 1, B = Q, F = D;
    } else {
      var O = F + 1, L = O < J ? O : 0, jb = (F << 3) + m + 20, U = k[jb >> 2], N = k[jb + 4 >> 2], ma = (w[0] = U, x[0]), na = (w[0] = N, x[0]), za = (L << 3) + m + 20, S = k[za >> 2], T = k[za + 4 >> 2], $ = (w[0] = S, x[0]), Fa = (w[0] = T, x[0]);
      if (1.1920928955078125e-7 > B) {
        h[f] = 1;
        h[j + 14] = 1;
        var Z = (F << 3) + m + 84, X = d + 40, ba = h[Z + 4 >> 2];
        h[X >> 2] = h[Z >> 2];
        h[X + 4 >> 2] = ba;
        var Da = .5 * (na + Fa), Ea = d + 48, lb = (x[0] = .5 * (ma + $), w[0]), Qa = (x[0] = Da, w[0]) | 0;
        h[Ea >> 2] = 0 | lb;
        h[Ea + 4 >> 2] = Qa;
        var qa = o, va = d, Y = h[qa + 4 >> 2];
        h[va >> 2] = h[qa >> 2];
        h[va + 4 >> 2] = Y;
      } else {
        var Ga = I - ma, wa = C - na, Ra = I - $, Za = C - Fa;
        if (0 < Ga * ($ - ma) + wa * (Fa - na)) {
          if (0 < Ra * (ma - $) + Za * (na - Fa)) {
            var $a = .5 * (ma + $), La = .5 * (na + Fa), ab = (F << 3) + m + 84;
            if ((I - $a) * l[ab >> 2] + (C - La) * l[((F << 3) + 88 >> 2) + i] > K) {
              break;
            }
            h[f] = 1;
            h[j + 14] = 1;
            var kb = ab, fb = d + 40, pb = h[kb + 4 >> 2];
            h[fb >> 2] = h[kb >> 2];
            h[fb + 4 >> 2] = pb;
            var ga = d + 48, da = (x[0] = $a, w[0]), bb = (x[0] = La, w[0]) | 0;
            h[ga >> 2] = 0 | da;
            h[ga + 4 >> 2] = bb;
            var ca = o, ha = d, ta = h[ca + 4 >> 2];
            h[ha >> 2] = h[ca >> 2];
            h[ha + 4 >> 2] = ta;
          } else {
            var ua = Ra * Ra + Za * Za;
            if (ua > K * K) {
              break;
            }
            h[f] = 1;
            h[j + 14] = 1;
            var oa = d + 40, ka = oa, xa = (x[0] = Ra, w[0]), Ua = (x[0] = Za, w[0]) | 0, la = ka;
            h[la >> 2] = 0 | xa;
            var Sa = ka + 4;
            h[Sa >> 2] = Ua;
            var cb = bn(ua);
            if (1.1920928955078125e-7 <= cb) {
              var qb = d + 44, xb = 1 / cb;
              l[oa >> 2] = Ra * xb;
              l[qb >> 2] = Za * xb;
            }
            var Pb = d + 48, Na = Pb;
            h[Na >> 2] = S;
            var Ha = Pb + 4;
            h[Ha >> 2] = T;
            var pa = o, Ia = d, Oa = pa, Pa = pa + 4, Aa = h[Pa >> 2], ia = Ia;
            h[ia >> 2] = h[Oa >> 2];
            var Va = Ia + 4;
            h[Va >> 2] = Aa;
          }
        } else {
          var ra = Ga * Ga + wa * wa;
          if (ra > K * K) {
            break;
          }
          h[f] = 1;
          h[j + 14] = 1;
          var Ka = d + 40, db = Ka, ub = (x[0] = Ga, w[0]), vb = (x[0] = wa, w[0]), mb = 0 | ub, gb = vb | 0, la = db;
          h[la >> 2] = mb;
          Sa = db + 4;
          h[Sa >> 2] = gb;
          var nb = bn(ra);
          if (1.1920928955078125e-7 <= nb) {
            var Wa = d + 44, ea = 1 / nb;
            l[Ka >> 2] = Ga * ea;
            l[Wa >> 2] = wa * ea;
          }
          var Ja = d + 48, Na = Ja;
          h[Na >> 2] = U;
          Ha = Ja + 4;
          h[Ha >> 2] = N;
          var Ba = o, Ta = d, Oa = Ba, yb = h[Oa >> 2], Pa = Ba + 4, Xa = h[Pa >> 2], ia = Ta;
          h[ia >> 2] = yb;
          Va = Ta + 4;
          h[Va >> 2] = Xa;
        }
      }
      h[j + 4] = 0;
      break;
    }
  }
}), 0, qc(), 0, (function(c) {
  0 != c && qp(c);
}), 0, (function(c, d, e, g) {
  var f, i, j, m, n, o, q, p, r, s, u, A, E, y = g >> 2, I = e >> 2, C = Qf;
  Qf += 80;
  var K, J = C + 4, M = C + 8, B = C + 32;
  E = B >> 2;
  var F = C + 56;
  A = F >> 2;
  var H = h[h[c + 48 >> 2] + 12 >> 2], P = h[h[c + 52 >> 2] + 12 >> 2];
  u = M >> 2;
  s = B >> 2;
  r = F >> 2;
  var D = d + 60;
  h[D >> 2] = 0;
  var Q = l[H + 8 >> 2] + l[P + 8 >> 2];
  h[C >> 2] = 0;
  var O = sp(C, H, e, P, g), L = O > Q;
  do {
    if (!L) {
      h[J >> 2] = 0;
      var jb = sp(J, P, g, H, e);
      if (jb <= Q) {
        if (jb > .9800000190734863 * O + .0010000000474974513) {
          var U = l[y], N = l[y + 1], ma = l[y + 2], na = l[y + 3], za = l[I], S = l[I + 1], T = l[I + 2], $ = l[I + 3], Fa = h[J >> 2];
          h[d + 56 >> 2] = 2;
          var Z = 1, X = Fa, ba = H;
          p = ba >> 2;
          var Da = P;
          q = Da >> 2;
          var Ea = U, lb = N, Qa = ma, qa = na, va = za, Y = S, Ga = T, wa = $;
        } else {
          var Ra = l[I], Za = l[I + 1], $a = l[I + 2], La = l[I + 3], ab = l[y], kb = l[y + 1], fb = l[y + 2], pb = l[y + 3], ga = h[C >> 2];
          h[d + 56 >> 2] = 1;
          Z = 0;
          X = ga;
          ba = P;
          p = ba >> 2;
          Da = H;
          q = Da >> 2;
          Ea = Ra;
          lb = Za;
          Qa = $a;
          qa = La;
          va = ab;
          Y = kb;
          Ga = fb;
          wa = pb;
        }
        var da = h[p + 37];
        K = -1 < X ? h[q + 37] > X ? 8 : 7 : 7;
        7 == K && G(z.Ga, 151, z.jb, z.ta);
        var bb = l[((X << 3) + 84 >> 2) + q], ca = l[((X << 3) + 88 >> 2) + q], ha = qa * bb - Qa * ca, ta = Qa * bb + qa * ca, ua = wa * ha + Ga * ta, oa = -Ga, ka = ha * oa + wa * ta, xa = 0 < da;
        a : do {
          if (xa) {
            for (var Ua = 0, la = 3.4028234663852886e+38, Sa = 0; ; ) {
              var cb = ua * l[((Sa << 3) + 84 >> 2) + p] + ka * l[((Sa << 3) + 88 >> 2) + p], qb = cb < la, xb = qb ? Sa : Ua, Pb = qb ? cb : la, Na = Sa + 1;
              if (Na == da) {
                var Ha = xb;
                break a;
              } else {
                Ua = xb, la = Pb, Sa = Na;
              }
            }
          } else {
            Ha = 0;
          }
        } while (0);
        var pa = Ha + 1, Ia = pa < da ? pa : 0, Oa = l[((Ha << 3) + 20 >> 2) + p], Pa = l[((Ha << 3) + 24 >> 2) + p], Aa = wa * Oa - Ga * Pa + va, ia = Ga * Oa + wa * Pa + Y, Va = M, ra = (x[0] = Aa, w[0]), Ka = (x[0] = ia, w[0]) | 0;
        h[Va >> 2] = 0 | ra;
        h[Va + 4 >> 2] = Ka;
        var db = X & 255, ub = M + 8, vb = ub;
        a[ub] = db;
        var mb = Ha & 255;
        a[vb + 1] = mb;
        a[vb + 2] = 1;
        a[vb + 3] = 0;
        var gb = M + 12, nb = l[((Ia << 3) + 20 >> 2) + p], Wa = l[((Ia << 3) + 24 >> 2) + p], ea = wa * nb - Ga * Wa + va, Ja = Ga * nb + wa * Wa + Y, Ba = gb, Ta = (x[0] = ea, w[0]), yb = (x[0] = Ja, w[0]) | 0;
        h[Ba >> 2] = 0 | Ta;
        h[Ba + 4 >> 2] = yb;
        var Xa = M + 20, eb = Xa;
        a[Xa] = db;
        a[eb + 1] = Ia & 255;
        a[eb + 2] = 1;
        a[eb + 3] = 0;
        var Eb = X + 1, zb = Eb < h[q + 37] ? Eb : 0, Nb = (X << 3) + Da + 20, Qb = h[Nb + 4 >> 2], Bb = (w[0] = h[Nb >> 2], x[0]), Ib = (w[0] = Qb, x[0]), Jb = (zb << 3) + Da + 20, wb = h[Jb + 4 >> 2], Fb = (w[0] = h[Jb >> 2], x[0]), Gb = (w[0] = wb, x[0]), ob = Fb - Bb, Kb = Gb - Ib, hb = bn(ob * ob + Kb * Kb);
        if (1.1920928955078125e-7 > hb) {
          var rb = ob, W = Kb;
        } else {
          var ja = 1 / hb, rb = ob * ja, W = Kb * ja;
        }
        var Ca = .5 * (Bb + Fb), Ub = qa * rb - Qa * W, Ab = Qa * rb + qa * W, Cb = -1 * Ub, Xb = qa * Bb - Qa * Ib + Ea, dc = Qa * Bb + qa * Ib + lb, Ma = -1 * rb, Lb = .5 * (Ib + Gb), fa = Ab * Xb + Cb * dc, sb = Q - (Ub * Xb + Ab * dc), tb = Ub * (qa * Fb - Qa * Gb + Ea) + Ab * (Qa * Fb + qa * Gb + lb) + Q, V = -Ub, Yb = -Ab, gc = Aa * V + ia * Yb - sb, Rb = ea * V + Ja * Yb - sb;
        if (0 < gc) {
          var cc = 0;
        } else {
          h[s] = h[u], h[s + 1] = h[u + 1], h[s + 2] = h[u + 2], cc = 1;
        }
        if (0 < Rb) {
          var Zb = cc;
        } else {
          o = B + 12 * cc >> 2, n = gb >> 2, h[o] = h[n], h[o + 1] = h[n + 1], h[o + 2] = h[n + 2], Zb = cc + 1;
        }
        if (0 > gc * Rb) {
          var wc = gc / (gc - Rb), Xc = ia + (Ja - ia) * wc, kc = B + 12 * Zb, rc = (x[0] = Aa + (ea - Aa) * wc, w[0]), ec = (x[0] = Xc, w[0]), sc = 0 | rc, Mc = ec | 0, Db = kc;
          m = Db >> 2;
          h[m] = sc;
          var Ya = kc + 4;
          j = Ya >> 2;
          h[j] = Mc;
          var Wb = B + 12 * Zb + 8, lc = Wb;
          a[Wb] = db;
          a[lc + 1] = mb;
          a[lc + 2] = 0;
          a[lc + 3] = 1;
          var Ec = Zb + 1;
        } else {
          Ec = Zb;
        }
        if (2 <= Ec) {
          var Nc = l[E], oc = l[E + 1], $b = Ub * Nc + Ab * oc - tb, od = B + 12, Yc = l[od >> 2], Hb = l[E + 4], ac = Ub * Yc + Ab * Hb - tb;
          if (0 < $b) {
            var hc = 0;
          } else {
            h[r] = h[s], h[r + 1] = h[s + 1], h[r + 2] = h[s + 2], hc = 1;
          }
          if (0 < ac) {
            var yc = hc;
          } else {
            i = F + 12 * hc >> 2, f = od >> 2, h[i] = h[f], h[i + 1] = h[f + 1], h[i + 2] = h[f + 2], yc = hc + 1;
          }
          if (0 > $b * ac) {
            var Zc = $b / ($b - ac), tc = oc + (Hb - oc) * Zc, Oc = F + 12 * yc, zc = (x[0] = Nc + (Yc - Nc) * Zc, w[0]), bc = (x[0] = tc, w[0]), pc = 0 | zc, hd = bc | 0, Db = Oc;
            m = Db >> 2;
            h[m] = pc;
            Ya = Oc + 4;
            j = Ya >> 2;
            h[j] = hd;
            var Sc = F + 12 * yc + 8, xd = Sc;
            a[Sc] = zb & 255;
            a[xd + 1] = a[B + 9];
            a[xd + 2] = 0;
            a[xd + 3] = 1;
            var ic = yc + 1;
          } else {
            ic = yc;
          }
          if (2 <= ic) {
            var uc = d + 40, Pd = (x[0] = W, w[0]), yd = (x[0] = Ma, w[0]) | 0;
            h[uc >> 2] = 0 | Pd;
            h[uc + 4 >> 2] = yd;
            var Ob = d + 48, zd = (x[0] = Ca, w[0]), Ac = (x[0] = Lb, w[0]) | 0;
            h[Ob >> 2] = 0 | zd;
            h[Ob + 4 >> 2] = Ac;
            var fc = l[A], Mb = l[A + 1], Vb = Ab * fc + Cb * Mb - fa > Q;
            if (0 == Z) {
              if (Vb) {
                var Tc = 0;
              } else {
                var $c = fc - va, Ic = Mb - Y, fe = $c * oa + wa * Ic, Pc = d, Wd = (x[0] = wa * $c + Ga * Ic, w[0]), Fc = (x[0] = fe, w[0]) | 0, mc = Pc;
                h[mc >> 2] = 0 | Wd;
                var Jc = Pc + 4;
                h[Jc >> 2] = Fc;
                h[d + 16 >> 2] = h[A + 2];
                Tc = 1;
              }
              var Ad = l[A + 3], Bd = l[A + 4];
              if (Ab * Ad + Cb * Bd - fa > Q) {
                var ad = Tc;
              } else {
                var bd = Ad - va, pd = Bd - Y, Qd = bd * oa + wa * pd, Hd = d + 20 * Tc, cd = (x[0] = wa * bd + Ga * pd, w[0]), Uc = (x[0] = Qd, w[0]) | 0, Db = Hd;
                m = Db >> 2;
                h[m] = 0 | cd;
                Ya = Hd + 4;
                j = Ya >> 2;
                h[j] = Uc;
                h[(d + 16 >> 2) + (5 * Tc | 0)] = h[A + 5];
                ad = Tc + 1;
              }
            } else {
              if (Vb) {
                var jc = 0;
              } else {
                var Vc = fc - va, Bc = Mb - Y, id = Vc * oa + wa * Bc, Sb = d, nc = (x[0] = wa * Vc + Ga * Bc, w[0]), ge = (x[0] = id, w[0]) | 0, mc = Sb;
                h[mc >> 2] = 0 | nc;
                Jc = Sb + 4;
                h[Jc >> 2] = ge;
                var Id = d + 16, qd = k[A + 2];
                h[Id >> 2] = qd;
                var Rd = qd >>> 24 & 255, rd = qd >>> 16 & 255, Jd = qd & 255, Cd = Id, Dd = Cd + 1, dd = Cd + 2, sd = Cd + 3;
                a[Id] = qd >>> 8 & 255;
                a[Dd] = Jd;
                a[dd] = Rd;
                a[sd] = rd;
                jc = 1;
              }
              var Wc = l[A + 3], Kd = l[A + 4];
              if (Ab * Wc + Cb * Kd - fa > Q) {
                ad = jc;
              } else {
                var Xd = Wc - va, Yd = Kd - Y, he = Xd * oa + wa * Yd, xe = d + 20 * jc, Ge = (x[0] = wa * Xd + Ga * Yd, w[0]), ie = (x[0] = he, w[0]) | 0, Db = xe;
                m = Db >> 2;
                h[m] = 0 | Ge;
                Ya = xe + 4;
                j = Ya >> 2;
                h[j] = ie;
                var Ld = d + 20 * jc + 16, ed = k[A + 5];
                h[Ld >> 2] = ed;
                var je = ed >>> 24 & 255, Zd = ed >>> 16 & 255, jd = ed & 255, Qc = Ld, Rc = Qc + 1, ye = Qc + 2, $d = Qc + 3;
                a[Ld] = ed >>> 8 & 255;
                a[Rc] = jd;
                a[ye] = je;
                a[$d] = Zd;
                ad = jc + 1;
              }
            }
            h[D >> 2] = ad;
          }
        }
      }
    }
  } while (0);
  Qf = C;
}), 0, qc(), 0, (function(c) {
  0 != c && qp(c);
}), 0 ];

Module.FUNCTION_TABLE = km;

function rG(c) {
  c = c || Module.arguments;
  Tm(Um);
  var d = ib;
  Module._main && (d = Module.Ec(c), Tm(Vm));
  return d;
}

Module.run = rG;

Module.preRun && Module.preRun();

Module.noInitialRun || rG();

Module.postRun && Module.postRun();
