function oa(c) {
  throw c;
}

var wa = void 0, Ta = null;

function fb() {
  return (function() {});
}

var Sb = [], Bc = typeof process === "object", Ic = typeof window === "object", Jc = typeof importScripts === "function", Lc = !Ic && !Bc && !Jc;

if (Bc) {
  print = (function(c) {
    process.stdout.write(c + "\n");
  });
  printErr = (function(c) {
    process.stderr.write(c + "\n");
  });
  var bd = require("fs");
  read = (function(c) {
    var d = bd.readFileSync(c).toString();
    !d && c[0] != "/" && (c = __dirname.split("/").slice(0, -1).join("/") + "/src/" + c, d = bd.readFileSync(c).toString());
    return d;
  });
  Sb = process.argv.slice(2);
} else {
  Lc ? (this.read || (read = (function(c) {
    snarf(c);
  })), Sb = this.arguments ? arguments : scriptArgs) : Ic ? (print = printErr = (function(c) {
    console.log(c);
  }), read = (function(c) {
    var d = new XMLHttpRequest;
    d.open("GET", c, !1);
    d.send(Ta);
    return d.responseText;
  }), this.arguments && (Sb = arguments)) : Jc ? load = importScripts : oa("Unknown runtime environment. Where are we?");
}

function cd(c) {
  eval.call(Ta, c);
}

typeof load == "undefined" && typeof read != "undefined" && (load = (function(c) {
  cd(read(c));
}));

typeof printErr === "undefined" && (printErr = fb());

typeof print === "undefined" && (print = printErr);

try {
  this.Module = Module;
} catch (nd) {
  this.Module = Module = {};
}

if (!Module.arguments) {
  Module.arguments = Sb;
}

if (Module.print) {
  print = Module.print;
}

var Gd = {
  i1: 0,
  i8: 0,
  i16: 0,
  i32: 0,
  i64: 0
}, Jd = {
  "float": 0,
  "double": 0
};

function Zd(c) {
  if (ke == 1) {
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
  d || (c[c.length - 1] == "*" ? d = ke : c[0] == "i" && (c = parseInt(c.substr(1)), oe(c % 8 == 0), d = c / 8));
  return d;
}

function pe(c) {
  var d = {};
  c.filter((function(c) {
    return d[c] ? !1 : d[c] = !0;
  }));
}

function Ke() {
  var c, d, e;
  d = c = 0;
  var f = [], g = -1;
  e = [ "i32", "i32" ].map((function(e) {
    var j, m;
    e in Gd || e in Jd || e[e.length - 1] == "*" ? m = j = Zd(e) : (isPointerType(e) ? 0 : /^\[\d+\ x\ (.*)\]/.test(e) || /<?{ [^}]* }>?/.test(e) || e[0] == "%") ? (j = Types.types[e].Ic, m = Types.types[e].Hc) : oa("Unclear type in struct: " + e + ", in undefined :: " + dump(Types.types[wa]));
    m = Math.min(m, ke);
    d = Math.max(d, m);
    e = df(c, m);
    c = e + j;
    g >= 0 && f.push(e - g);
    return g = e;
  }));
  c = df(c, d);
  f.length == 0 || pe(f);
  return e;
}

function yf(c) {
  var d = Yf;
  Yf += c;
  Yf = Yf + 3 >> 2 << 2;
  return d;
}

function og(c) {
  var d = Tg;
  Tg += c;
  Tg = Tg + 3 >> 2 << 2;
  if (Tg >= Ug) {
    for (; Ug <= Tg; ) {
      Ug = Math.ceil(2 * Ug / Vg) * Vg;
    }
    var c = a, e = new ArrayBuffer(Ug);
    a = new Int8Array(e);
    b = new Int16Array(e);
    h = new Int32Array(e);
    Dh = new Uint8Array(e);
    Fh = new Uint16Array(e);
    k = new Uint32Array(e);
    l = new Float32Array(e);
    a.set(c);
  }
  return d;
}

function df(c, d) {
  return Math.ceil(c / (d ? d : 4)) * (d ? d : 4);
}

var ke = 4, Gh = {}, zi;

function Ai(c) {
  print(c + ":\n" + Error().stack);
  oa("Assertion: " + c);
}

function oe(c, d) {
  c || Ai("Assertion failed: " + d);
}

function tj(c, d, e) {
  e = e || "i8";
  e[e.length - 1] === "*" && (e = "i32");
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
    Ai("invalid type for setValue: " + e);
  }
}

Module.setValue = tj;

Module.getValue = (function(c, d) {
  d = d || "i8";
  d[d.length - 1] === "*" && (d = "i32");
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
    Ai("invalid type for setValue: " + d);
  }
  return Ta;
});

var uj = 1, t = 2;

Module.ALLOC_NORMAL = 0;

Module.ALLOC_STACK = uj;

Module.ALLOC_STATIC = t;

function v(c, d, e) {
  var f, g;
  typeof c === "number" ? (f = !0, g = c) : (f = !1, g = c.length);
  var i = typeof d === "string" ? d : Ta, e = [ vj, yf, og ][e === wa ? t : e](Math.max(g, i ? 1 : d.length));
  if (f) {
    return xk(e, g), e;
  }
  f = 0;
  for (var j; f < g; ) {
    var m = c[f];
    typeof m === "function" && (m = Gh.Jc(m));
    j = i || d[f];
    j === 0 ? f++ : (j == "i64" && (j = "i32"), tj(e + f, m, j), f += Zd(j));
  }
  return e;
}

Module.allocate = v;

function Fk(c, d) {
  for (var e = typeof d == "undefined", f = "", g = 0, i, j = String.fromCharCode(0); ; ) {
    i = String.fromCharCode(Dh[c + g]);
    if (e && i == j) {
      break;
    }
    f += i;
    g += 1;
    if (!e && g == d) {
      break;
    }
  }
  return f;
}

Module.Pointer_stringify = Fk;

Module.Array_stringify = (function(c) {
  for (var d = "", e = 0; e < c.length; e++) {
    d += String.fromCharCode(c[e]);
  }
  return d;
});

var im, Vg = 4096, a, Dh, b, Fh, h, k, l, Yf, Lm, Tg, Mm = Module.TOTAL_STACK || 5242880, Ug = Module.TOTAL_MEMORY || 10485760;

oe(!!Int32Array && !!Float64Array && !!(new Int32Array(1)).subarray && !!(new Int32Array(1)).set, "Cannot fallback to non-typed array case: Code is too specialized");

var Nm = new ArrayBuffer(Ug);

a = new Int8Array(Nm);

b = new Int16Array(Nm);

h = new Int32Array(Nm);

Dh = new Uint8Array(Nm);

Fh = new Uint16Array(Nm);

k = new Uint32Array(Nm);

l = new Float32Array(Nm);

h[0] = 255;

oe(Dh[0] === 255 && Dh[3] === 0, "Typed arrays 2 must be run on a little-endian system");

var Pm = Om("(null)");

Tg = Pm.length;

for (var Qm = 0; Qm < Pm.length; Qm++) {
  a[Qm] = Pm[Qm];
}

Module.HEAP = wa;

Module.HEAP8 = a;

Module.HEAP16 = b;

Module.HEAP32 = h;

Module.HEAPU8 = Dh;

Module.HEAPU16 = Fh;

Module.HEAPU32 = k;

Module.HEAPF32 = l;

Lm = (Yf = df(Tg)) + Mm;

var Rm = df(Lm, 8);

a.subarray(Rm);

var w = h.subarray(Rm >> 2), x = l.subarray(Rm >> 2);

(new Float64Array(a.buffer)).subarray(Rm >> 3);

Lm = Rm + 8;

Tg = Math.ceil(Lm / Vg) * Vg;

function Sm(c) {
  for (; c.length > 0; ) {
    var d = c.shift(), e = d.Ja;
    typeof e === "number" && (e = im[e]);
    e(d.Dc === wa ? Ta : d.Dc);
  }
}

var Tm = [], Um = [];

function Vm(c, d) {
  return Array.prototype.slice.call(a.subarray(c, c + d));
}

Module.Array_copy = Vm;

Module.TypedArray_copy = (function(c, d) {
  for (var e = new Uint8Array(d), f = 0; f < d; ++f) {
    e[f] = a[c + f];
  }
  return e.buffer;
});

function Wm(c) {
  for (var d = 0; a[c + d]; ) {
    d++;
  }
  return d;
}

Module.String_len = Wm;

function Xm(c, d) {
  var e = Wm(c);
  d && e++;
  var f = Vm(c, e);
  d && (f[e - 1] = 0);
  return f;
}

Module.String_copy = Xm;

function Om(c, d) {
  for (var e = [], f = 0; f < c.length; ) {
    var g = c.charCodeAt(f);
    g > 255 && (g &= 255);
    e.push(g);
    f += 1;
  }
  d || e.push(0);
  return e;
}

Module.intArrayFromString = Om;

Module.intArrayToString = (function(c) {
  for (var d = [], e = 0; e < c.length; e++) {
    var f = c[e];
    f > 255 && (f &= 255);
    d.push(String.fromCharCode(f));
  }
  return d.join("");
});

var y = [];

function Ym(c, d) {
  return c >= 0 ? c : d <= 32 ? 2 * Math.abs(1 << d - 1) + c : Math.pow(2, d) + c;
}

function Zm(c, d) {
  if (c <= 0) {
    return c;
  }
  var e = d <= 32 ? Math.abs(1 << d - 1) : Math.pow(2, d - 1);
  if (c >= e && (d <= 32 || c > e)) {
    c = -2 * e + c;
  }
  return c;
}

function $m(c, d, e, f, g) {
  var i, j = c >> 2;
  i = c + 60 >> 2;
  h[i] = 0;
  var m = f + 12, n = l[g + 12 >> 2], o = l[m >> 2], q = l[g + 8 >> 2], p = l[f + 16 >> 2], r = n * o - q * p + l[g >> 2] - l[e >> 2], g = q * o + n * p + l[g + 4 >> 2] - l[e + 4 >> 2], n = l[e + 12 >> 2], o = l[e + 8 >> 2], e = n * r + o * g, r = r * -o + n * g, n = d + 12, g = k[n >> 2], n = k[n + 4 >> 2], o = (w[0] = g, x[0]), q = (w[0] = n, x[0]), s = d + 20, p = k[s >> 2], s = k[s + 4 >> 2], u = (w[0] = p, x[0]), A = (w[0] = s, x[0]), E = u - o, z = A - q, I = E * (u - e) + z * (A - r), C = e - o, K = r - q, J = E * C + z * K, f = l[d + 8 >> 2] + l[f + 8 >> 2], M = J > 0;
  do {
    if (M) {
      if (I > 0) {
        var B = E * E + z * z;
        B > 0 || G(y.cc, 127, y.hb, y.Qb);
        var F = 1 / B, B = e - (o * I + u * J) * F, F = r - (q * I + A * J) * F;
        if (B * B + F * F <= f * f) {
          B = -z;
          C * B + E * K < 0 ? (F = z, B = -E) : (F = B, B = E);
          var H = an(F * F + B * B);
          H < 1.1920928955078125e-7 ? H = B : (H = 1 / H, F *= H, H *= B);
          h[i] = 1;
          h[j + 14] = 1;
          B = c + 40;
          F = (x[0] = F, w[0]);
          H = (x[0] = H, w[0]) | 0;
          h[B >> 2] = 0 | F;
          h[B + 4 >> 2] = H;
          B = c + 48;
          h[B >> 2] = g;
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
        if (B = e - u, F = r - A, B * B + F * F <= f * f) {
          if ((a[d + 45] & 1) != 0) {
            var P = d + 36, H = P;
            P += 4;
            P = h[P >> 2];
            H = (w[0] = h[H >> 2], x[0]);
            P = (w[0] = P, x[0]);
            if ((H - u) * B + (P - A) * F > 0) {
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
      if (C * C + K * K <= f * f) {
        if ((a[d + 44] & 1) != 0 && (H = B = d + 28, P = B + 4, B = h[P >> 2], F = (w[0] = h[H >> 2], x[0]), B = (w[0] = B, x[0]), (o - F) * (o - e) + (q - B) * (q - r) > 0)) {
          break;
        }
        h[i] = 1;
        h[j + 14] = 0;
        l[j + 10] = 0;
        l[j + 11] = 0;
        B = F = c + 48;
        h[B >> 2] = g;
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

function bn() {
  var c, d, e, f, g, i, j, m, n, o, q, p, r = Yf;
  Yf += 104412;
  var s = r + 28, u = r + 56;
  p = u >> 2;
  var A = r + 103084;
  q = A >> 2;
  var E = r + 103136;
  o = E >> 2;
  var z = r + 103184;
  n = z >> 2;
  var I = r + 103336, C = r + 103388, K = u + 8;
  h[K >> 2] = 128;
  h[p + 1] = 0;
  var J = vj(1024);
  h[p] = J;
  xk(J, h[K >> 2] << 3);
  for (var M = u + 12 >> 2, B = M + 14; M < B; M++) {
    h[M] = 0;
  }
  for (var F = 0, H = 1; ; ) {
    F < 14 || G(y.e, 73, y.nb, y.Ub);
    if (H > h[cn + (F << 2) >> 2]) {
      var P = F + 1;
      a[dn + H] = P & 255;
      var D = P;
    } else {
      a[dn + H] = F & 255, D = F;
    }
    var Q = H + 1;
    if (Q == 641) {
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
  var O = vj(576);
  j = u + 102876 >> 2;
  h[j] = O;
  xk(O, h[m] * 36);
  var L = h[m] - 1, ib = L > 0;
  a : do {
    if (ib) {
      for (var U = 0; ; ) {
        var N = U + 1;
        h[h[j] + U * 36 + 20 >> 2] = N;
        h[h[j] + U * 36 + 32 >> 2] = -1;
        var ja = h[m] - 1;
        if (N < ja) {
          U = N;
        } else {
          var ka = ja;
          break a;
        }
      }
    } else {
      ka = L;
    }
  } while (0);
  h[h[j] + ka * 36 + 20 >> 2] = -1;
  h[h[j] + (h[m] - 1) * 36 + 32 >> 2] = -1;
  h[p + 25722] = 0;
  h[p + 25723] = 0;
  h[p + 25724] = 0;
  h[p + 25725] = 0;
  h[p + 25730] = 16;
  h[p + 25731] = 0;
  var za = vj(192);
  h[p + 25729] = za;
  h[p + 25727] = 16;
  h[p + 25728] = 0;
  var S = vj(64);
  h[p + 25726] = S;
  h[p + 25733] = 0;
  h[p + 25734] = 0;
  h[p + 25735] = en;
  h[p + 25736] = fn;
  var T = u + 102948, $ = u + 102968;
  h[p + 25745] = 0;
  h[p + 25746] = 0;
  i = u + 102952 >> 2;
  h[i] = 0;
  h[p + 25739] = 0;
  g = u + 102960 >> 2;
  h[g] = 0;
  h[p + 25741] = 0;
  a[u + 102992] = 1;
  a[u + 102993] = 1;
  a[u + 102994] = 0;
  a[u + 102995] = 1;
  var Ea = u + 102976;
  a[Ea] = 1;
  h[$ >> 2] = 0;
  h[$ + 4 >> 2] = 3240099840;
  f = u + 102868 >> 2;
  h[f] = 4;
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
  a[Ea] = 0;
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
  var X = gn(u, 152);
  if (X == 0) {
    var aa = 0;
  } else {
    Xn(X, A, u), aa = X;
  }
  h[aa + 92 >> 2] = 0;
  h[aa + 96 >> 2] = h[i];
  var Ba = h[i];
  Ba != 0 && (h[Ba + 92 >> 2] = aa);
  h[i] = aa;
  h[g] += 1;
  h[o] = Yn + 8;
  h[o + 1] = 1;
  l[o + 2] = .009999999776482582;
  l[o + 7] = 0;
  l[o + 8] = 0;
  l[o + 9] = 0;
  l[o + 10] = 0;
  var Ca = E + 44, mb = E + 45, Qa = E + 12;
  h[Qa >> 2] = 3256877056;
  h[Qa + 4 >> 2] = 0;
  var pa = E + 20;
  h[pa >> 2] = 1109393408;
  h[pa + 4 >> 2] = 0;
  a[Ca] = 0;
  a[mb] = 0;
  b[r + 22 >> 1] = 1;
  b[r + 24 >> 1] = -1;
  b[r + 26 >> 1] = 0;
  h[r + 4 >> 2] = 0;
  l[r + 8 >> 2] = .20000000298023224;
  l[r + 12 >> 2] = 0;
  var ua = r + 16;
  a[r + 20] = 0;
  h[r >> 2] = E;
  l[ua >> 2] = 0;
  hp(aa, r);
  h[n] = ip + 8;
  h[n + 1] = 2;
  l[n + 2] = .009999999776482582;
  var Y = z + 12, Fa = z + 16;
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
  l[Fa >> 2] = 0;
  var va = I + 44, Ra = I + 36;
  c = I + 4 >> 2;
  for (var Wa = I + 37, Xa = I + 38, Ka = I + 39, Za = I + 40, jb = I + 48, $a = I + 4, pb = s + 22, ga = s + 24, da = s + 26, Ya = s + 4, ba = s + 8, ha = s + 12, qa = s + 16, ra = s + 20, ma = 0, la = -7, xa = .75; ; ) {
    if (ma < 40) {
      var ab = ma, ia = la, Ma = xa;
    } else {
      var bb = 0;
      break;
    }
    for (;;) {
      if (ab >= 40) {
        break;
      }
      h[va >> 2] = 0;
      h[c] = 0;
      h[c + 1] = 0;
      h[c + 2] = 0;
      h[c + 3] = 0;
      h[c + 4] = 0;
      h[c + 5] = 0;
      h[c + 6] = 0;
      h[c + 7] = 0;
      a[Ra] = 1;
      a[Wa] = 1;
      a[Xa] = 0;
      a[Ka] = 0;
      a[Za] = 1;
      l[jb >> 2] = 1;
      h[I >> 2] = 2;
      var wb = (x[0] = ia, w[0]), xb = (x[0] = Ma, w[0]) | 0;
      h[$a >> 2] = 0 | wb;
      h[$a + 4 >> 2] = xb;
      var Kb = h[f];
      if ((Kb & 2) == 0) {
        var Na = Kb;
      } else {
        G(y.r, 109, y.rb, y.Gb), Na = h[f];
      }
      if ((Na & 2) == 0) {
        var Ga = gn(u, 152);
        if (Ga == 0) {
          var sa = 0;
        } else {
          var Ha = Ga;
          Xn(Ga, I, u);
          sa = Ha;
        }
        h[sa + 92 >> 2] = 0;
        h[sa + 96 >> 2] = h[i];
        var Oa = h[i];
        Oa != 0 && (h[Oa + 92 >> 2] = sa);
        h[i] = sa;
        h[g] += 1;
        var Ua = sa;
      } else {
        Ua = 0;
      }
      b[pb >> 1] = 1;
      b[ga >> 1] = -1;
      b[da >> 1] = 0;
      h[Ya >> 2] = 0;
      l[ba >> 2] = .20000000298023224;
      l[ha >> 2] = 0;
      a[ra] = 0;
      h[s >> 2] = z;
      l[qa >> 2] = 5;
      hp(Ua, s);
      ab += 1;
      ia += 1.125;
    }
    ma += 1;
    la += .5625;
    xa += 1;
  }
  for (;;) {
    if (bb >= 64) {
      var ca = 0;
      break;
    }
    jp(u);
    bb += 1;
  }
  for (;;) {
    if (ca >= 256) {
      break;
    }
    var Aa = kp();
    jp(u);
    var cb = kp() - Aa;
    h[C + (ca << 2) >> 2] = cb;
    var na = cb / 1e3 * 1e3, La = (zi = Yf, Yf += 8, l[Rm >> 2] = na, h[zi >> 2] = h[Rm >> 2], h[zi + 4 >> 2] = h[Rm + 4 >> 2], zi);
    lp(La);
    ca += 1;
  }
  var db = h[mp >> 2];
  a[np] = Ym(10);
  if (op(db, np, 1) == -1 && db in pp) {
    pp[db].error = !0;
  }
  for (var qb = 0, ub = 0; ; ) {
    var rb = h[C + (ub << 2) >> 2] + qb, gb = ub + 1;
    if (gb == 256) {
      break;
    } else {
      qb = rb, ub = gb;
    }
  }
  var kb = rb * .00390625 / 1e3 * 1e3, Va = (zi = Yf, Yf += 8, l[Rm >> 2] = kb, h[zi >> 2] = h[Rm >> 2], h[zi + 4 >> 2] = h[Rm + 4 >> 2], zi);
  lp(Va);
  var ea, Da, Ia = u >> 2, Sa = h[Ia + 25738];
  a : for (;;) {
    if (Sa == 0) {
      break;
    }
    for (var vb = h[Sa + 96 >> 2], Pa = h[Sa + 100 >> 2]; ; ) {
      if (Pa == 0) {
        Sa = vb;
        continue a;
      }
      var eb = h[Pa + 4 >> 2];
      h[Pa + 28 >> 2] = 0;
      Da = Pa + 12 >> 2;
      var nb = h[Da], Db = im[h[h[nb >> 2] + 12 >> 2]](nb), Qb = Pa + 24, Ob = k[Qb >> 2], Eb = Ob, Ib = Db * 28, Jb = Ib == 0;
      b : do {
        if (!Jb) {
          var sb = Ib > 0;
          do {
            if (sb) {
              if (Ib > 640) {
                qp(Eb);
                break b;
              }
            } else {
              G(y.e, 164, y.h, y.za);
            }
          } while (0);
          var Lb = Dh[dn + Ib], Fb = Lb;
          Lb < 14 || G(y.e, 173, y.h, y.i);
          var ob = Ob, Bb = (Fb << 2) + u + 12;
          h[Ob >> 2] = h[Bb >> 2];
          h[Bb >> 2] = ob;
        }
      } while (0);
      h[Qb >> 2] = 0;
      var lb = k[Da];
      ea = lb >> 2;
      var tb = h[ea + 1];
      if (tb == 0) {
        im[h[h[ea] >> 2]](lb);
        var W = Dh[dn + 20], R = W;
        W < 14 || G(y.e, 173, y.h, y.i);
        var Xb = lb, Tb = (R << 2) + u + 12;
        h[ea] = h[Tb >> 2];
        h[Tb >> 2] = Xb;
      } else {
        if (tb == 1) {
          im[h[h[ea] >> 2]](lb);
          var yb = Dh[dn + 48], Cb = yb;
          yb < 14 || G(y.e, 173, y.h, y.i);
          var Ub = lb, bc = (Cb << 2) + u + 12;
          h[ea] = h[bc >> 2];
          h[bc >> 2] = Ub;
        } else {
          if (tb == 2) {
            im[h[h[ea] >> 2]](lb);
            var Ja = Dh[dn + 152], Mb = Ja;
            Ja < 14 || G(y.e, 173, y.h, y.i);
            var fa = lb, ya = (Mb << 2) + u + 12;
            h[ea] = h[ya >> 2];
            h[ya >> 2] = fa;
          } else {
            if (tb == 3) {
              im[h[h[ea] >> 2]](lb);
              var zb = Dh[dn + 40], ta = zb;
              zb < 14 || G(y.e, 173, y.h, y.i);
              var cc = lb, gc = (ta << 2) + u + 12;
              h[ea] = h[gc >> 2];
              h[gc >> 2] = cc;
            } else {
              G(y.Ob, 115, y.tb, y.f);
            }
          }
        }
      }
      h[Da] = 0;
      Pa = eb;
    }
  }
  qp(h[Ia + 25726]);
  qp(h[Ia + 25729]);
  qp(h[Ia + 25719]);
  h[Ia + 25617] != 0 && G(y.j, 32, y.da, y.Vb);
  h[Ia + 25716] != 0 && G(y.j, 33, y.da, y.ac);
  var Pb = u + 4, pc = h[Pb >> 2] > 0, Vb = h[u >> 2];
  a : do {
    if (pc) {
      for (var wc = 0, Xc = Vb; ; ) {
        qp(h[Xc + (wc << 3) + 4 >> 2]);
        var nc = wc + 1, uc = h[u >> 2];
        if (nc < h[Pb >> 2]) {
          wc = nc, Xc = uc;
        } else {
          var hc = uc;
          break a;
        }
      }
    } else {
      hc = Vb;
    }
  } while (0);
  qp(hc);
  Yf = r;
  return 0;
}

Module._main = bn;

function rp(c, d, e, f, g, i) {
  var j, m, n, o, q, p, r, s, u, A, E, z, I, C, K, J, M, B, F, H, P, D, Q, O, L, ib, U, N, ja, ka, za, S, T, $, Ea, Z, X, aa, Ba, Ca, mb, Qa, pa, ua, Y, Fa, va, Ra, Wa, Xa, Ka, Za, jb, $a, pb, ga = g >> 2, da = c >> 2, Ya = Yf;
  Yf += 72;
  var ba, ha = Ya + 24;
  pb = ha >> 2;
  var qa = Ya + 48;
  $a = qa >> 2;
  var ra = c + 132, ma = l[f + 12 >> 2], la = l[i + 8 >> 2], xa = l[f + 8 >> 2], ab = l[i + 12 >> 2], ia = ma * la - xa * ab, Ma = ma * ab + xa * la, bb = (x[0] = ia, w[0]), wb = (x[0] = Ma, w[0]), xb = 0 | bb, Kb = wb | 0, Na = l[i >> 2] - l[f >> 2], Ga = l[i + 4 >> 2] - l[f + 4 >> 2], sa = ma * Na + xa * Ga, Ha = Na * -xa + ma * Ga, Oa = (x[0] = sa, w[0]), Ua = (x[0] = Ha, w[0]) | 0;
  h[ra >> 2] = 0 | Oa;
  h[ra + 4 >> 2] = Ua;
  var ca = c + 140;
  h[ca >> 2] = xb;
  h[ca + 4 >> 2] = Kb;
  jb = c + 144 >> 2;
  var Aa = l[ga + 3];
  Za = c + 140 >> 2;
  var cb = l[ga + 4];
  Ka = ra >> 2;
  var na = Ma * Aa - ia * cb + sa;
  Xa = c + 136 >> 2;
  var La = ia * Aa + Ma * cb + Ha, db = c + 148, qb = (x[0] = na, w[0]), ub = (x[0] = La, w[0]) | 0;
  h[db >> 2] = 0 | qb;
  h[db + 4 >> 2] = ub;
  var rb = e + 28, gb = c + 156, kb = h[rb >> 2], Va = h[rb + 4 >> 2];
  h[gb >> 2] = kb;
  h[gb + 4 >> 2] = Va;
  var ea = e + 12, Da = c + 164, Ia = h[ea >> 2], Sa = h[ea + 4 >> 2];
  h[Da >> 2] = Ia;
  h[Da + 4 >> 2] = Sa;
  var vb = e + 20, Pa = c + 172, eb = h[vb >> 2], nb = h[vb + 4 >> 2];
  h[Pa >> 2] = eb;
  h[Pa + 4 >> 2] = nb;
  var Db = e + 36, Qb = c + 180, Ob = h[Db >> 2], Eb = h[Db + 4 >> 2];
  h[Qb >> 2] = Ob;
  h[Qb + 4 >> 2] = Eb;
  var Ib = a[e + 44] & 1, Jb = Ib != 0, sb = a[e + 45], Lb = (sb & 1) != 0, Fb = (w[0] = eb, x[0]), ob = (w[0] = Ia, x[0]), Bb = Fb - ob, lb = (w[0] = nb, x[0]), tb = c + 168, W = (w[0] = Sa, x[0]), R = lb - W, Xb = an(Bb * Bb + R * R), Tb = Xb < 1.1920928955078125e-7, yb = (w[0] = kb, x[0]), Cb = (w[0] = Va, x[0]), Ub = (w[0] = Ob, x[0]), bc = (w[0] = Eb, x[0]);
  if (Tb) {
    var Ja = Bb, Mb = R;
  } else {
    var fa = 1 / Xb, Ja = Bb * fa, Mb = R * fa;
  }
  var ya = c + 196, zb = -Ja;
  Wa = ya >> 2;
  l[Wa] = Mb;
  Ra = c + 200 >> 2;
  l[Ra] = zb;
  var ta = Mb * (na - ob) + (La - W) * zb;
  if (Jb) {
    var cc = ob - yb, gc = W - Cb, Pb = an(cc * cc + gc * gc);
    if (Pb < 1.1920928955078125e-7) {
      var pc = cc, Vb = gc;
    } else {
      var wc = 1 / Pb, pc = cc * wc, Vb = gc * wc;
    }
    var Xc = -pc;
    l[da + 47] = Vb;
    l[da + 48] = Xc;
    var nc = pc * Mb - Vb * Ja >= 0, uc = Vb * (na - yb) + (La - Cb) * Xc;
  } else {
    uc = nc = 0;
  }
  a : do {
    if (Lb) {
      var hc = Ub - Fb, ic = bc - lb, yc = an(hc * hc + ic * ic);
      if (yc < 1.1920928955078125e-7) {
        var Ab = hc, hb = ic;
      } else {
        var dc = 1 / yc, Ab = hc * dc, hb = ic * dc;
      }
      var ec = -Ab;
      va = c + 204 >> 2;
      l[va] = hb;
      Fa = c + 208 >> 2;
      l[Fa] = ec;
      var qc = Ja * hb - Mb * Ab > 0, Rc = hb * (na - Fb) + (La - lb) * ec;
      if ((Ib & sb) == 0) {
        var Cc = Rc, Yb = qc;
        ba = 37;
      } else {
        if (nc & qc) {
          var dd = uc < 0 & ta < 0;
          do {
            if (dd) {
              var Sc = Rc >= 0;
              a[c + 248] = Sc;
              var Gb = c + 212;
              if (Sc) {
                var Wb = Gb;
              } else {
                var jc = Gb, Dc = (x[0] = -Mb, w[0]), ed = (x[0] = Ja, w[0]), rc = 0 | Dc, Ec = ed | 0, Fc = jc;
                Y = Fc >> 2;
                h[Y] = rc;
                var fc = jc + 4;
                ua = fc >> 2;
                h[ua] = Ec;
                var sc = c + 228, fd = sc;
                pa = fd >> 2;
                h[pa] = rc;
                var Tc = sc + 4;
                Qa = Tc >> 2;
                h[Qa] = Ec;
                var wd = c + 236, kc = wd;
                mb = kc >> 2;
                h[mb] = rc;
                var vc = wd + 4;
                Ca = vc >> 2;
                h[Ca] = Ec;
                ba = 64;
                break a;
              }
            } else {
              a[c + 248] = 1, Wb = c + 212;
            }
          } while (0);
          var Kd = ya, xd = Wb, Nb = Kd;
          Ba = Nb >> 2;
          var lc = h[Ba], Rb = Kd + 4;
          aa = Rb >> 2;
          var Mc = h[aa], Zb = xd;
          X = Zb >> 2;
          h[X] = lc;
          var $b = xd + 4;
          Z = $b >> 2;
          h[Z] = Mc;
          var gd = c + 188, hd = c + 228, Gc = gd;
          Ea = Gc >> 2;
          var Rd = h[Ea], Uc = gd + 4;
          $ = Uc >> 2;
          var $d = h[$], tc = hd;
          T = tc >> 2;
          h[T] = Rd;
          var mc = hd + 4;
          S = mc >> 2;
          h[S] = $d;
          var od = c + 204, yd = c + 236, pd = od;
          za = pd >> 2;
          var Nc = h[za], Oc = od + 4;
          ka = Oc >> 2;
          var Sd = h[ka];
          h[yd >> 2] = Nc;
          h[yd + 4 >> 2] = Sd;
        } else {
          if (nc) {
            var ae = uc < 0;
            do {
              if (ae) {
                if (ta < 0) {
                  a[c + 248] = 0;
                  var zd = c + 212;
                } else {
                  var Yc = Rc >= 0;
                  a[c + 248] = Yc;
                  var Vc = c + 212;
                  if (Yc) {
                    var Hb = Vc;
                    break;
                  } else {
                    zd = Vc;
                  }
                }
                var Hc = zd, id = (x[0] = -Mb, w[0]), Hd = (x[0] = Ja, w[0]) | 0, ac = Hc;
                ja = ac >> 2;
                h[ja] = 0 | id;
                var oc = Hc + 4;
                N = oc >> 2;
                h[N] = Hd;
                var be = -l[Fa], Ad = c + 228, Bd = (x[0] = -l[va], w[0]), Td = (x[0] = be, w[0]) | 0, jd = Ad;
                U = jd >> 2;
                h[U] = 0 | Bd;
                var Ld = Ad + 4;
                ib = Ld >> 2;
                h[ib] = Td;
                var Cd = -l[Ra], Zc = c + 236, Pc = (x[0] = -l[Wa], w[0]), Md = (x[0] = Cd, w[0]) | 0;
                h[Zc >> 2] = 0 | Pc;
                h[Zc + 4 >> 2] = Md;
                ba = 64;
                break a;
              } else {
                a[c + 248] = 1, Hb = c + 212;
              }
            } while (0);
            var qd = ya, $c = Hb, Nb = qd;
            Ba = Nb >> 2;
            var ce = h[Ba], Rb = qd + 4;
            aa = Rb >> 2;
            var Ud = h[aa], Zb = $c;
            X = Zb >> 2;
            h[X] = ce;
            $b = $c + 4;
            Z = $b >> 2;
            h[Z] = Ud;
            var Ae = c + 188, Vd = c + 228, Gc = Ae;
            Ea = Gc >> 2;
            var qe = h[Ea], Uc = Ae + 4;
            $ = Uc >> 2;
            var de = h[$], tc = Vd;
            T = tc >> 2;
            h[T] = qe;
            mc = Vd + 4;
            S = mc >> 2;
            h[S] = de;
            var rd = c + 236, zc = qd;
            L = zc >> 2;
            var Wd = h[L], kd = qd + 4;
            O = kd >> 2;
            var ef = h[O], Wc = rd;
            Q = Wc >> 2;
            h[Q] = Wd;
            var ld = rd + 4;
            D = ld >> 2;
            h[D] = ef;
          } else {
            if (qc) {
              var re = Rc < 0;
              do {
                if (re) {
                  if (uc < 0) {
                    a[c + 248] = 0;
                    var ee = c + 212;
                  } else {
                    var Le = ta >= 0;
                    a[c + 248] = Le;
                    var Me = c + 212;
                    if (Le) {
                      var pg = Me;
                      break;
                    } else {
                      ee = Me;
                    }
                  }
                  var ff = ee, qg = (x[0] = -Mb, w[0]), rg = (x[0] = Ja, w[0]) | 0, ac = ff;
                  ja = ac >> 2;
                  h[ja] = 0 | qg;
                  oc = ff + 4;
                  N = oc >> 2;
                  h[N] = rg;
                  var Nd = -l[Ra], Be = c + 228, gf = (x[0] = -l[Wa], w[0]), zf = (x[0] = Nd, w[0]) | 0, jd = Be;
                  U = jd >> 2;
                  h[U] = 0 | gf;
                  Ld = Be + 4;
                  ib = Ld >> 2;
                  h[ib] = zf;
                  var Af = -l[da + 48], Ce = c + 236, Hh = (x[0] = -l[da + 47], w[0]), Wg = (x[0] = Af, w[0]) | 0, Zf = Ce;
                  h[Zf >> 2] = 0 | Hh;
                  var fe = Ce + 4;
                  h[fe >> 2] = Wg;
                  ba = 64;
                  break a;
                } else {
                  a[c + 248] = 1, pg = c + 212;
                }
              } while (0);
              var Bf = ya, sg = pg, Nb = Bf;
              Ba = Nb >> 2;
              var hf = h[Ba], Rb = Bf + 4;
              aa = Rb >> 2;
              var Ih = h[aa], Zb = sg;
              X = Zb >> 2;
              h[X] = hf;
              $b = sg + 4;
              Z = $b >> 2;
              h[Z] = Ih;
              var Cf = c + 228, ac = Bf;
              ja = ac >> 2;
              var Xg = h[ja], oc = Bf + 4;
              N = oc >> 2;
              var Yg = h[N];
              h[Cf >> 2] = Xg;
              h[Cf + 4 >> 2] = Yg;
              var $f = c + 204, ag = c + 236, zc = $f;
              L = zc >> 2;
              var jf = h[L], kd = $f + 4;
              O = kd >> 2;
              var Zg = h[O], Wc = ag;
              Q = Wc >> 2;
              h[Q] = jf;
              ld = ag + 4;
              D = ld >> 2;
              h[D] = Zg;
            } else {
              var $g = uc < 0 | ta < 0;
              do {
                if ($g) {
                  a[c + 248] = 0;
                  var bg = c + 212;
                } else {
                  var tg = Rc >= 0;
                  a[c + 248] = tg;
                  var cg = c + 212;
                  if (tg) {
                    var Df = ya, Ef = cg, md = Df;
                    P = md >> 2;
                    var Ff = k[P], Dd = Df + 4;
                    H = Dd >> 2;
                    var Ne = k[H], Ac = Ef;
                    F = Ac >> 2;
                    h[F] = Ff;
                    var ad = Ef + 4;
                    B = ad >> 2;
                    h[B] = Ne;
                    var ah = c + 228, Fc = ah;
                    Y = Fc >> 2;
                    h[Y] = Ff;
                    fc = ah + 4;
                    ua = fc >> 2;
                    h[ua] = Ne;
                    var bh = c + 236, fd = bh;
                    pa = fd >> 2;
                    h[pa] = Ff;
                    Tc = bh + 4;
                    Qa = Tc >> 2;
                    h[Qa] = Ne;
                    ba = 64;
                    break a;
                  } else {
                    bg = cg;
                  }
                }
              } while (0);
              var dg = bg, ch = (x[0] = -Mb, w[0]), Jh = (x[0] = Ja, w[0]) | 0, ac = dg;
              ja = ac >> 2;
              h[ja] = 0 | ch;
              oc = dg + 4;
              N = oc >> 2;
              h[N] = Jh;
              var ug = -l[Fa], Gf = c + 228, Qc = (x[0] = -l[va], w[0]), xc = (x[0] = ug, w[0]) | 0, jd = Gf;
              U = jd >> 2;
              h[U] = 0 | Qc;
              Ld = Gf + 4;
              ib = Ld >> 2;
              h[ib] = xc;
              var se = -l[da + 48], kf = c + 236, vg = (x[0] = -l[da + 47], w[0]), Hf = (x[0] = se, w[0]) | 0, Zf = kf;
              h[Zf >> 2] = 0 | vg;
              fe = kf + 4;
              h[fe >> 2] = Hf;
            }
          }
        }
        ba = 64;
      }
    } else {
      Yb = Cc = 0, ba = 37;
    }
  } while (0);
  a : do {
    if (ba == 37) {
      if (Jb) {
        var eg = uc >= 0;
        if (nc) {
          do {
            if (eg) {
              a[c + 248] = 1;
              var te = c + 212;
            } else {
              var ge = ta >= 0;
              a[c + 248] = ge;
              var ue = c + 212;
              if (ge) {
                te = ue;
              } else {
                var fg = ue, wg = (x[0] = -Mb, w[0]), Ed = (x[0] = Ja, w[0]), De = Ed | 0, Fc = fg;
                Y = Fc >> 2;
                h[Y] = 0 | wg;
                fc = fg + 4;
                ua = fc >> 2;
                h[ua] = De;
                var ve = ya, Oe = c + 228, tc = ve;
                T = tc >> 2;
                var Pe = h[T], mc = ve + 4;
                S = mc >> 2;
                var lf = h[S], he = Oe;
                M = he >> 2;
                h[M] = Pe;
                var Ee = Oe + 4;
                J = Ee >> 2;
                h[J] = lf;
                var xg = c + 236, yg = -(w[0] = Pe, x[0]), Id = xg, Fe = 0 | (x[0] = yg, w[0]), If = Ed | 0;
                h[Id >> 2] = Fe;
                h[Id + 4 >> 2] = If;
                break a;
              }
            }
          } while (0);
          var zg = ya, mf = te, Nb = zg;
          Ba = Nb >> 2;
          var nf = h[Ba], Rb = zg + 4;
          aa = Rb >> 2;
          var Jf = h[aa], Zb = mf;
          X = Zb >> 2;
          h[X] = nf;
          $b = mf + 4;
          Z = $b >> 2;
          h[Z] = Jf;
          var Kf = c + 188, Lf = c + 228, Gc = Kf;
          Ea = Gc >> 2;
          var dh = h[Ea], Uc = Kf + 4;
          $ = Uc >> 2;
          var gg = h[$], tc = Lf;
          T = tc >> 2;
          h[T] = dh;
          mc = Lf + 4;
          S = mc >> 2;
          h[S] = gg;
          var Ge = -l[Ra], we = c + 236, Qe = (x[0] = -l[Wa], w[0]), Ag = (x[0] = Ge, w[0]) | 0, Xd = we;
          h[Xd >> 2] = 0 | Qe;
          var of = we + 4;
          h[of >> 2] = Ag;
        } else {
          do {
            if (eg) {
              var pf = ta >= 0;
              a[c + 248] = pf;
              var Re = c + 212;
              if (pf) {
                var Fd = ya, qf = Re, md = Fd;
                P = md >> 2;
                var rf = k[P], Dd = Fd + 4;
                H = Dd >> 2;
                var Mf = k[H], Ac = qf;
                F = Ac >> 2;
                h[F] = rf;
                ad = qf + 4;
                B = ad >> 2;
                h[B] = Mf;
                var sf = c + 228, Fc = sf;
                Y = Fc >> 2;
                h[Y] = rf;
                fc = sf + 4;
                ua = fc >> 2;
                h[ua] = Mf;
                var Nf = c + 236, tf = -(w[0] = rf, x[0]), sd = Nf, eh = (x[0] = tf, w[0]), td = (x[0] = Ja, w[0]) | 0, He = sd;
                K = He >> 2;
                h[K] = 0 | eh;
                var Yd = sd + 4;
                C = Yd >> 2;
                h[C] = td;
                break a;
              } else {
                var Se = Re;
              }
            } else {
              a[c + 248] = 0, Se = c + 212;
            }
          } while (0);
          var fh = Se, uf = (x[0] = -Mb, w[0]), vf = (x[0] = Ja, w[0]) | 0, ac = fh;
          ja = ac >> 2;
          h[ja] = 0 | uf;
          oc = fh + 4;
          N = oc >> 2;
          h[N] = vf;
          var Kh = ya, gh = c + 228, Te = Kh;
          I = Te >> 2;
          var hh = h[I], Bg = Kh + 4;
          z = Bg >> 2;
          var Bi = h[z], kc = gh;
          mb = kc >> 2;
          h[mb] = hh;
          vc = gh + 4;
          Ca = vc >> 2;
          h[Ca] = Bi;
          var Ci = -l[da + 48], Lh = c + 236, Di = (x[0] = -l[da + 47], w[0]), wj = (x[0] = Ci, w[0]) | 0, Od = Lh;
          h[Od >> 2] = 0 | Di;
          var wf = Lh + 4;
          h[wf >> 2] = wj;
        }
      } else {
        var Ie = ta >= 0;
        if (Lb) {
          if (Yb) {
            do {
              if (Ie) {
                a[c + 248] = 1;
                var Mh = c + 212;
              } else {
                var Ei = Cc >= 0;
                a[c + 248] = Ei;
                var Fi = c + 212;
                if (Ei) {
                  Mh = Fi;
                } else {
                  var Nh = Fi, Oh = (x[0] = -Mb, w[0]), Cg = (x[0] = Ja, w[0]), Ph = 0 | Oh, Gi = Cg | 0, Fc = Nh;
                  Y = Fc >> 2;
                  h[Y] = Ph;
                  fc = Nh + 4;
                  ua = fc >> 2;
                  h[ua] = Gi;
                  var Dg = c + 228, fd = Dg;
                  pa = fd >> 2;
                  h[pa] = Ph;
                  Tc = Dg + 4;
                  Qa = Tc >> 2;
                  h[Qa] = Gi;
                  var ud = ya, Eg = c + 236, zc = ud;
                  L = zc >> 2;
                  var ih = h[L], kd = ud + 4;
                  O = kd >> 2;
                  var Hi = h[O], Wc = Eg;
                  Q = Wc >> 2;
                  h[Q] = ih;
                  ld = Eg + 4;
                  D = ld >> 2;
                  h[D] = Hi;
                  break a;
                }
              }
            } while (0);
            var ie = ya, jh = Mh, Nb = ie;
            Ba = Nb >> 2;
            var xj = h[Ba], Rb = ie + 4;
            aa = Rb >> 2;
            var Ii = h[aa], Zb = jh;
            X = Zb >> 2;
            h[X] = xj;
            $b = jh + 4;
            Z = $b >> 2;
            h[Z] = Ii;
            var kh = -l[Ra], xe = c + 228, Ue = (x[0] = -l[Wa], w[0]), yj = (x[0] = kh, w[0]) | 0, pd = xe;
            za = pd >> 2;
            h[za] = 0 | Ue;
            Oc = xe + 4;
            ka = Oc >> 2;
            h[ka] = yj;
            var Qh = c + 204, Ve = c + 236, Fg = Qh, Of = h[Fg >> 2], hg = Qh + 4, zj = h[hg >> 2], Xd = Ve;
            h[Xd >> 2] = Of;
            of = Ve + 4;
            h[of >> 2] = zj;
          } else {
            do {
              if (Ie) {
                var Rh = Cc >= 0;
                a[c + 248] = Rh;
                var Sh = c + 212;
                if (Rh) {
                  var Th = ya, Uh = Sh, md = Th;
                  P = md >> 2;
                  var Gg = k[P], Dd = Th + 4;
                  H = Dd >> 2;
                  var Ji = k[H], Ac = Uh;
                  F = Ac >> 2;
                  h[F] = Gg;
                  ad = Uh + 4;
                  B = ad >> 2;
                  h[B] = Ji;
                  var Ki = c + 228, Li = -(w[0] = Gg, x[0]), Pf = Ki, Aj = (x[0] = Li, w[0]), Vh = (x[0] = Ja, w[0]) | 0, lh = Pf;
                  h[lh >> 2] = 0 | Aj;
                  var Wh = Pf + 4;
                  h[Wh >> 2] = Vh;
                  var mh = c + 236, He = mh;
                  K = He >> 2;
                  h[K] = Gg;
                  Yd = mh + 4;
                  C = Yd >> 2;
                  h[C] = Ji;
                  break a;
                } else {
                  var Xh = Sh;
                }
              } else {
                a[c + 248] = 0, Xh = c + 212;
              }
            } while (0);
            var Qf = Xh, We = (x[0] = -Mb, w[0]), Yh = (x[0] = Ja, w[0]) | 0, ac = Qf;
            ja = ac >> 2;
            h[ja] = 0 | We;
            oc = Qf + 4;
            N = oc >> 2;
            h[N] = Yh;
            var Mi = -l[da + 52], Rf = c + 228, ig = (x[0] = -l[da + 51], w[0]), Ni = (x[0] = Mi, w[0]) | 0, Fg = Rf;
            h[Fg >> 2] = 0 | ig;
            hg = Rf + 4;
            h[hg >> 2] = Ni;
            var Zh = ya, $h = c + 236, Oi = h[Zh >> 2], jg = h[Zh + 4 >> 2], Od = $h;
            h[Od >> 2] = Oi;
            wf = $h + 4;
            h[wf >> 2] = jg;
          }
        } else {
          a[c + 248] = Ie;
          var ai = c + 212;
          if (Ie) {
            var Pi = ya, bi = ai, md = Pi;
            P = md >> 2;
            var nh = k[P], Dd = Pi + 4;
            H = Dd >> 2;
            var Qi = h[H], Ac = bi;
            F = Ac >> 2;
            h[F] = nh;
            ad = bi + 4;
            B = ad >> 2;
            h[B] = Qi;
            var Ri = c + 228, Bj = -(w[0] = nh, x[0]), oh = Ri, Cj = (x[0] = Bj, w[0]), ye = (x[0] = Ja, w[0]), Dj = 0 | Cj, ci = ye | 0, lh = oh;
            h[lh >> 2] = Dj;
            Wh = oh + 4;
            h[Wh >> 2] = ci;
            var di = c + 236, He = di;
            K = He >> 2;
            h[K] = Dj;
            Yd = di + 4;
            C = Yd >> 2;
            h[C] = ci;
          } else {
            var ei = ai, Ej = (x[0] = -Mb, w[0]), Si = (x[0] = Ja, w[0]) | 0, Fc = ei;
            Y = Fc >> 2;
            h[Y] = 0 | Ej;
            fc = ei + 4;
            ua = fc >> 2;
            h[ua] = Si;
            var Ti = ya, fi = c + 228, tc = Ti;
            T = tc >> 2;
            var ph = h[T], mc = Ti + 4;
            S = mc >> 2;
            var Hg = h[S], he = fi;
            M = he >> 2;
            h[M] = ph;
            Ee = fi + 4;
            J = Ee >> 2;
            h[J] = Hg;
            var Ig = c + 236, Wc = Ig;
            Q = Wc >> 2;
            h[Q] = ph;
            ld = Ig + 4;
            D = ld >> 2;
            h[D] = Hg;
          }
        }
      }
    }
  } while (0);
  E = g + 148 >> 2;
  var Sf = h[E];
  A = c + 128 >> 2;
  h[A] = Sf;
  var Ui = h[E] > 0;
  a : do {
    if (Ui) {
      for (var xf = 0; ; ) {
        var Tf = l[jb], gi = l[((xf << 3) + 20 >> 2) + ga], hi = l[Za], Vi = l[((xf << 3) + 24 >> 2) + ga], Uf = hi * gi + Tf * Vi + l[Xa], ii = (xf << 3) + c, Wi = (x[0] = Tf * gi - hi * Vi + l[Ka], w[0]), Fj = (x[0] = Uf, w[0]) | 0, Wc = ii;
        Q = Wc >> 2;
        h[Q] = 0 | Wi;
        ld = ii + 4;
        D = ld >> 2;
        h[D] = Fj;
        var Vf = l[jb], Je = l[((xf << 3) + 84 >> 2) + ga], qh = l[Za], Jg = l[((xf << 3) + 88 >> 2) + ga], Gk = qh * Je + Vf * Jg, ji = (xf << 3) + c + 64, Gj = (x[0] = Vf * Je - qh * Jg, w[0]), Hj = (x[0] = Gk, w[0]) | 0;
        h[ji >> 2] = 0 | Gj;
        h[ji + 4 >> 2] = Hj;
        var ki = xf + 1;
        if (ki < h[E]) {
          xf = ki;
        } else {
          break a;
        }
      }
    }
  } while (0);
  u = c + 244 >> 2;
  l[u] = .019999999552965164;
  var rh = d + 60;
  h[rh >> 2] = 0;
  var Kg = c + 248, Xe = h[A], sh = Xe > 0;
  a : do {
    if (sh) {
      for (var th = l[da + 41], Hk = l[tb >> 2], Ik = l[da + 53], hn = l[da + 54], Xi = 0, Ij = 3.4028234663852886e+38; ; ) {
        var Jk = Ik * (l[(Xi << 3 >> 2) + da] - th) + hn * (l[((Xi << 3) + 4 >> 2) + da] - Hk), Jj = Jk < Ij ? Jk : Ij, Kj = Xi + 1;
        if (Kj == Xe) {
          var uh = Jj;
          break a;
        } else {
          Xi = Kj, Ij = Jj;
        }
      }
    } else {
      uh = 3.4028234663852886e+38;
    }
  } while (0);
  var Lj = l[u], up = uh > Lj;
  a : do {
    if (!up) {
      for (var jn = c + 216, Kk = l[jn >> 2], kn = c + 212, Lk = l[kn >> 2], vp = c + 164, ln = c + 172, wp = c + 176, xp = c + 228, Mk = c + 232, Nk = c + 236, mn = c + 240, Lg = 0, Yi = -3.4028234663852886e+38, Mg = 0, vh = -1, Zi = -3.4028234663852886e+38; ; ) {
        if (Lg < Xe) {
          var Ok = l[((Lg << 3) + 64 >> 2) + da], je = -Ok, wh = -l[((Lg << 3) + 68 >> 2) + da], nn = l[(Lg << 3 >> 2) + da], Pk = l[((Lg << 3) + 4 >> 2) + da], Qk = (nn - l[vp >> 2]) * je + (Pk - l[tb >> 2]) * wh, Rk = (nn - l[ln >> 2]) * je + (Pk - l[wp >> 2]) * wh, Wf = Qk < Rk ? Qk : Rk;
          if (Wf > Lj) {
            var xh = Wf, li = Lg, Sk = 2;
            ba = 79;
            break;
          }
          if (Ok * Kk + Lk * wh < 0) {
            if ((je - l[xp >> 2]) * Lk + (wh - l[Mk >> 2]) * Kk >= -.03490658849477768 & Wf > Yi) {
              ba = 76;
            } else {
              var Mj = Yi, $i = Mg, Nj = vh, Oj = Zi;
              ba = 77;
            }
          } else {
            (je - l[Nk >> 2]) * Lk + (wh - l[mn >> 2]) * Kk >= -.03490658849477768 & Wf > Yi ? ba = 76 : (Mj = Yi, $i = Mg, Nj = vh, Oj = Zi, ba = 77);
          }
          ba == 76 && (Mj = Wf, $i = 2, Nj = Lg, Oj = Wf);
          Lg += 1;
          Yi = Mj;
          Mg = $i;
          vh = Nj;
          Zi = Oj;
        } else {
          var on = Mg, pn = vh, qn = Zi;
          on == 0 ? ba = 81 : (xh = qn, li = pn, Sk = on, ba = 79);
          break;
        }
      }
      do {
        if (ba == 79) {
          if (xh > Lj) {
            break a;
          }
          if (xh > uh * .9800000190734863 + .0010000000474974513) {
            var Pj = d + 56;
            if (Sk == 1) {
              var Tk = Pj;
              ba = 83;
            } else {
              h[Pj >> 2] = 2;
              var Uk = Ya, md = Da;
              P = md >> 2;
              var aj = h[P], Dd = Da + 4;
              H = Dd >> 2;
              var Qj = h[H], Ac = Uk;
              F = Ac >> 2;
              h[F] = aj;
              ad = Uk + 4;
              B = ad >> 2;
              h[B] = Qj;
              var Rj = Ya + 8, Vk = Rj;
              a[Rj] = 0;
              var Sj = li & 255;
              a[Vk + 1] = Sj;
              a[Vk + 2] = 0;
              a[Vk + 3] = 1;
              var Wk = Ya + 12, he = Pa;
              M = he >> 2;
              var Xk = h[M], Ee = Pa + 4;
              J = Ee >> 2;
              var Yk = h[J], pd = Wk;
              za = pd >> 2;
              h[za] = Xk;
              Oc = Wk + 4;
              ka = Oc >> 2;
              h[ka] = Yk;
              var bj = Ya + 20, Zk = bj;
              a[bj] = 0;
              a[Zk + 1] = Sj;
              a[Zk + 2] = 0;
              a[Zk + 3] = 1;
              var $k = li + 1, al = $k < h[A] ? $k : 0, bl = (li << 3) + c, rn = h[bl >> 2], yp = h[bl + 4 >> 2], sn = (al << 3) + c, Tj = h[sn >> 2], Uj = h[sn + 4 >> 2], cj = (li << 3) + c + 64, Vj = h[cj >> 2], Wj = h[cj + 4 >> 2], Xj = al & 255, cl = (w[0] = aj, x[0]), dl = (w[0] = Qj, x[0]), el = (w[0] = Xk, x[0]), fl = (w[0] = Yk, x[0]), yh = li, dj = Xj, Yj = rn, Zj = yp, gl = Tj, ej = Uj, mi = Vj, $j = Wj, hl = el, ak = cl, fj = fl, ni = dl, bk = Sj, oi = 0;
              ba = 90;
            }
          } else {
            ba = 81;
          }
        }
      } while (0);
      ba == 81 && (Tk = d + 56, ba = 83);
      if (ba == 83) {
        h[Tk >> 2] = 1;
        var il = h[A], jl = il > 1;
        b : do {
          if (jl) {
            for (var ck = l[jn >> 2], dk = l[kn >> 2], ek = 0, kl = dk * l[da + 16] + ck * l[da + 17], pi = 1; ; ) {
              var ll = dk * l[((pi << 3) + 64 >> 2) + da] + ck * l[((pi << 3) + 68 >> 2) + da], fk = ll < kl, ml = fk ? pi : ek, tn = fk ? ll : kl, nl = pi + 1;
              if (nl < il) {
                ek = ml, kl = tn, pi = nl;
              } else {
                var gj = ml;
                break b;
              }
            }
          } else {
            gj = 0;
          }
        } while (0);
        var ol = gj + 1, pl = ol < il ? ol : 0, ql = (gj << 3) + c, rl = Ya, Zb = ql;
        X = Zb >> 2;
        var sl = h[X], $b = ql + 4;
        Z = $b >> 2;
        var tl = h[Z];
        h[rl >> 2] = sl;
        h[rl + 4 >> 2] = tl;
        var ul = Ya + 8, qi = ul;
        a[ul] = 0;
        var hj = gj & 255;
        a[qi + 1] = hj;
        a[qi + 2] = 1;
        a[qi + 3] = 0;
        var vl = (pl << 3) + c, wl = Ya + 12, xl = h[vl >> 2], yl = h[vl + 4 >> 2];
        h[wl >> 2] = xl;
        h[wl + 4 >> 2] = yl;
        var zl = Ya + 20, gk = zl;
        a[zl] = 0;
        a[gk + 1] = pl & 255;
        a[gk + 2] = 1;
        a[gk + 3] = 0;
        var un = (a[Kg] & 1) == 0, vn = (w[0] = sl, x[0]), wn = (w[0] = tl, x[0]), xn = (w[0] = xl, x[0]), yn = (w[0] = yl, x[0]);
        if (un) {
          var hk = Pa, ik = Pa + 4, Al = h[hk >> 2], zp = h[ik >> 2], Bl = Da, Cl = Da + 4, Ap = h[Bl >> 2], zh = h[Cl >> 2], Ah = -l[Ra], zn = (x[0] = -l[Wa], w[0]), An = (x[0] = Ah, w[0]), yh = 1, dj = 0, Yj = Al, Zj = zp, gl = Ap, ej = zh, mi = zn, $j = An;
        } else {
          var hk = Da, ik = Da + 4, Bl = Pa, Cl = Pa + 4, Bn = ya, yh = 0, dj = 1, Yj = h[hk >> 2], Zj = h[ik >> 2], gl = h[Bl >> 2], ej = h[Cl >> 2], mi = h[Bn >> 2], $j = h[Bn + 4 >> 2];
        }
        hl = xn;
        ak = vn;
        fj = yn;
        ni = wn;
        bk = hj;
        oi = 1;
      }
      var ij = (w[0] = Yj, x[0]), jj = (w[0] = Zj, x[0]), Cn = (w[0] = ej, x[0]), ri = (w[0] = mi, x[0]), si = (w[0] = $j, x[0]), Dl = -ri, Ng = si * ij + jj * Dl, jk = ri * Cn, Dn = (w[0] = gl, x[0]), kk = -si, lk = Dn * kk + jk, kj = si * ak + ni * Dl - Ng, El = Ya + 12, mk = si * hl + fj * Dl - Ng;
      if (kj > 0) {
        var ti = 0;
      } else {
        s = ha >> 2, r = Ya >> 2, h[s] = h[r], h[s + 1] = h[r + 1], h[s + 2] = h[r + 2], ti = 1;
      }
      if (mk > 0) {
        var ui = ti;
      } else {
        p = ha + ti * 12 >> 2, q = El >> 2, h[p] = h[q], h[p + 1] = h[q + 1], h[p + 2] = h[q + 2], ui = ti + 1;
      }
      if (kj * mk < 0) {
        var Fl = kj / (kj - mk), Bp = ni + (fj - ni) * Fl, En = ha + ui * 12, Gl = (x[0] = ak + (hl - ak) * Fl, w[0]), Hl = (x[0] = Bp, w[0]) | 0, Te = En;
        I = Te >> 2;
        h[I] = 0 | Gl;
        Bg = En + 4;
        z = Bg >> 2;
        h[z] = Hl;
        var Fn = ha + ui * 12 + 8, nk = Fn;
        a[Fn] = yh & 255;
        a[nk + 1] = bk;
        a[nk + 2] = 0;
        a[nk + 3] = 1;
        var Il = ui + 1;
      } else {
        Il = ui;
      }
      if (Il >= 2) {
        var Jl = l[pb], Kl = l[pb + 1], ok = Jl * kk + ri * Kl - lk, Gn = ha + 12, Ll = l[Gn >> 2], Hn = l[pb + 4], Ml = Ll * kk + ri * Hn - lk;
        if (ok > 0) {
          var lj = 0;
        } else {
          o = qa >> 2, n = ha >> 2, h[o] = h[n], h[o + 1] = h[n + 1], h[o + 2] = h[n + 2], lj = 1;
        }
        if (Ml > 0) {
          var mj = lj;
        } else {
          m = qa + lj * 12 >> 2, j = Gn >> 2, h[m] = h[j], h[m + 1] = h[j + 1], h[m + 2] = h[j + 2], mj = lj + 1;
        }
        if (ok * Ml < 0) {
          var Nl = ok / (ok - Ml), Cp = Kl + (Hn - Kl) * Nl, Bh = qa + mj * 12, Dp = (x[0] = Jl + (Ll - Jl) * Nl, w[0]), Ol = (x[0] = Cp, w[0]) | 0, Te = Bh;
          I = Te >> 2;
          h[I] = 0 | Dp;
          Bg = Bh + 4;
          z = Bg >> 2;
          h[z] = Ol;
          var In = qa + mj * 12 + 8, Og = In;
          a[In] = dj;
          a[Og + 1] = a[ha + 9];
          a[Og + 2] = 0;
          a[Og + 3] = 1;
          var Pl = mj + 1;
        } else {
          Pl = mj;
        }
        if (Pl >= 2) {
          var Ql = d + 40;
          if (oi) {
            var Rl = Ql;
            h[Rl >> 2] = 0 | mi;
            h[Rl + 4 >> 2] = $j | 0;
            var nj = d + 48, he = nj;
            M = he >> 2;
            h[M] = 0 | Yj;
            Ee = nj + 4;
            J = Ee >> 2;
            h[J] = Zj | 0;
          } else {
            var pk = (yh << 3) + g + 84, Pg = Ql, Nb = pk;
            Ba = Nb >> 2;
            var Ep = h[Ba], Rb = pk + 4;
            aa = Rb >> 2;
            var qk = h[aa], Zb = Pg;
            X = Zb >> 2;
            h[X] = Ep;
            $b = Pg + 4;
            Z = $b >> 2;
            h[Z] = qk;
            var Jn = (yh << 3) + g + 20, Sl = d + 48, Gc = Jn;
            Ea = Gc >> 2;
            var Kn = h[Ea], Uc = Jn + 4;
            $ = Uc >> 2;
            var Ln = h[$], tc = Sl;
            T = tc >> 2;
            h[T] = Kn;
            mc = Sl + 4;
            S = mc >> 2;
            h[S] = Ln;
          }
          var Tl = l[$a], rk = l[$a + 1], Ul = l[u];
          if (ri * (Tl - ij) + si * (rk - jj) > Ul) {
            var Ch = 0, sk = Ul;
          } else {
            if (oi) {
              var Vl = Tl - l[Ka], Wl = rk - l[Xa], Xl = l[jb], Yl = l[Za], Fp = Vl * -Yl + Xl * Wl, tk = d, Mn = (x[0] = Xl * Vl + Yl * Wl, w[0]), Nn = (x[0] = Fp, w[0]) | 0, kc = tk;
              mb = kc >> 2;
              h[mb] = 0 | Mn;
              vc = tk + 4;
              Ca = vc >> 2;
              h[Ca] = Nn;
              h[d + 16 >> 2] = h[$a + 2];
            } else {
              var On = qa, Pn = d, md = On;
              P = md >> 2;
              var Gp = h[P], Dd = On + 4;
              H = Dd >> 2;
              var Hp = h[H], Ac = Pn;
              F = Ac >> 2;
              h[F] = Gp;
              ad = Pn + 4;
              B = ad >> 2;
              h[B] = Hp;
              var Zl = qa + 8, ze = Zl, Qn = d + 16, uk = Qn;
              a[uk + 2] = a[ze + 3];
              a[uk + 3] = a[ze + 2];
              a[Qn] = a[ze + 1];
              a[uk + 1] = a[Zl];
            }
            Ch = 1;
            sk = l[u];
          }
          var vk = qa + 12, wk = l[vk >> 2], $l = l[$a + 4];
          if (ri * (wk - ij) + si * ($l - jj) > sk) {
            var am = Ch;
          } else {
            var Rn = d + Ch * 20;
            if (oi) {
              var Sn = wk - l[Ka], Tn = $l - l[Xa], Un = l[jb], Vn = l[Za], Ip = Sn * -Vn + Un * Tn, bm = Rn, Jp = (x[0] = Un * Sn + Vn * Tn, w[0]), cm = (x[0] = Ip, w[0]) | 0, kc = bm;
              mb = kc >> 2;
              h[mb] = 0 | Jp;
              vc = bm + 4;
              Ca = vc >> 2;
              h[Ca] = cm;
              h[(d + 16 >> 2) + (Ch * 5 | 0)] = h[$a + 5];
            } else {
              var dm = vk, em = Rn, md = dm;
              P = md >> 2;
              var Kp = h[P], Dd = dm + 4;
              H = Dd >> 2;
              var Lp = h[H], Ac = em;
              F = Ac >> 2;
              h[F] = Kp;
              ad = em + 4;
              B = ad >> 2;
              h[B] = Lp;
              var Wn = qa + 20, fm = Wn, gm = d + Ch * 20 + 16, hm = gm;
              a[hm + 2] = a[fm + 3];
              a[hm + 3] = a[fm + 2];
              a[gm] = a[fm + 1];
              a[hm + 1] = a[Wn];
            }
            am = Ch + 1;
          }
          h[rh >> 2] = am;
        }
      }
    }
  } while (0);
  Yf = Ya;
}

function sp(c, d, e, f, g) {
  var i = d >> 2, j = h[i + 37], m = l[g + 12 >> 2], n = l[f + 12 >> 2], o = l[g + 8 >> 2], q = l[f + 16 >> 2], p = l[e + 12 >> 2], r = l[i + 3], s = l[e + 8 >> 2], u = l[i + 4], A = m * n - o * q + l[g >> 2] - (p * r - s * u + l[e >> 2]), n = o * n + m * q + l[g + 4 >> 2] - (s * r + p * u + l[e + 4 >> 2]), m = p * A + s * n, p = A * -s + p * n, s = j > 0;
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
  i = tp(d, e, E, f, g);
  m = (E > 0 ? E : j) - 1;
  p = tp(d, e, m, f, g);
  s = E + 1;
  s = s < j ? s : 0;
  A = tp(d, e, s, f, g);
  n = p > i & p > A;
  a : do {
    if (n) {
      o = p;
      for (q = m; ; ) {
        if (r = (q > 0 ? q : j) - 1, u = tp(d, e, r, f, g), u > o) {
          o = u, q = r;
        } else {
          var z = o, I = q;
          break a;
        }
      }
    } else {
      if (A > i) {
        o = A;
        for (q = s; ; ) {
          if (r = q + 1, r = r < j ? r : 0, u = tp(d, e, r, f, g), u > o) {
            o = u, q = r;
          } else {
            z = o;
            I = q;
            break a;
          }
        }
      } else {
        z = i, I = E;
      }
    }
  } while (0);
  h[c >> 2] = I;
  return z;
}

function tp(c, d, e, f, g) {
  f >>= 2;
  var i = c >> 2, j = h[f + 37];
  (e > -1 ? h[i + 37] > e ? 3 : 2 : 2) == 2 && G(y.Ga, 32, y.ib, y.ta);
  var c = l[d + 12 >> 2], m = l[((e << 3) + 84 >> 2) + i], n = l[d + 8 >> 2], o = l[((e << 3) + 88 >> 2) + i], q = c * m - n * o, m = n * m + c * o, o = l[g + 12 >> 2], p = l[g + 8 >> 2], r = o * q + p * m, s = q * -p + o * m, u = j > 0;
  a : do {
    if (u) {
      for (var A = 0, E = 3.4028234663852886e+38, z = 0; ; ) {
        var I = l[((z << 3) + 20 >> 2) + f] * r + l[((z << 3) + 24 >> 2) + f] * s, C = I < E, A = C ? z : A, E = C ? I : E;
        z += 1;
        if (z == j) {
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
  i = l[((K << 3) + 20 >> 2) + f];
  K = l[((K << 3) + 24 >> 2) + f];
  return (o * i - p * K + l[g >> 2] - (c * j - n * e + l[d >> 2])) * q + (p * i + o * K + l[g + 4 >> 2] - (n * j + c * e + l[d + 4 >> 2])) * m;
}

function Mp(c, d, e) {
  var f = d >> 2, g = c >> 2, i, j = h[f + 1];
  if (j == 0) {
    h[g + 4] = d + 12, h[g + 5] = 1, l[g + 6] = l[f + 2];
  } else {
    if (j == 2) {
      h[g + 4] = d + 20, h[g + 5] = h[f + 37], l[g + 6] = l[f + 2];
    } else {
      if (j == 3) {
        j = d + 16;
        i = e > -1 ? h[j >> 2] > e ? 6 : 5 : 5;
        i == 5 && G(y.g, 53, y.aa, y.Db);
        d += 12;
        i = (e << 3) + h[d >> 2];
        var m = h[i + 4 >> 2];
        h[c >> 2] = h[i >> 2];
        h[c + 4 >> 2] = m;
        i = e + 1;
        e = c + 8;
        d = h[d >> 2];
        i < h[j >> 2] ? (d = (i << 3) + d, j = h[d >> 2], d = h[d + 4 >> 2], h[e >> 2] = j, h[e + 4 >> 2] = d) : (j = h[d + 4 >> 2], h[e >> 2] = h[d >> 2], h[e + 4 >> 2] = j);
        h[g + 4] = c;
        h[g + 5] = 2;
        l[g + 6] = l[f + 2];
      } else {
        j == 1 ? (h[g + 4] = d + 12, h[g + 5] = 2, l[g + 6] = l[f + 2]) : G(y.g, 81, y.aa, y.f);
      }
    }
  }
}

function Np(c, d, e) {
  var f, g, i, j, m, n, o, q, p, r, s, u, A, E, z, I, C, K, J, M, B, F, H, P, D, Q = e >> 2, O = Yf;
  Yf += 136;
  var L;
  D = O >> 2;
  var ib = O + 112, U = O + 124;
  h[Op >> 2] += 1;
  var N = l[Q + 14], ja = l[Q + 15], ka = l[Q + 16], za = l[Q + 17], S = l[Q + 18], T = l[Q + 19], $ = l[Q + 20], Ea = l[Q + 21];
  P = d + 4 >> 1;
  var Z = Fh[P];
  if (Z < 4) {
    var X = Z;
  } else {
    G(y.g, 102, y.ub, y.pc), X = b[P];
  }
  var aa = X;
  H = O + 108 >> 2;
  h[H] = aa;
  F = O >> 2;
  var Ba = X == 0;
  a : do {
    if (Ba) {
      var Ca = aa;
    } else {
      for (var mb = e + 20, Qa = e + 16, pa = e + 48, ua = e + 44, Y = 0; ; ) {
        var Fa = O + Y * 36, va = Dh[d + (Y + 6)];
        h[F + (Y * 9 | 0) + 7] = va;
        var Ra = Dh[d + (Y + 9)], Wa = O + Y * 36 + 32;
        h[Wa >> 2] = Ra;
        if (h[mb >> 2] > va) {
          var Xa = Ra;
        } else {
          G(y.b, 103, y.a, y.c), Xa = h[Wa >> 2];
        }
        var Ka = (va << 3) + h[Qa >> 2], Za = h[Ka + 4 >> 2], jb = (w[0] = h[Ka >> 2], x[0]), $a = (w[0] = Za, x[0]);
        L = Xa > -1 ? h[pa >> 2] > Xa ? 9 : 8 : 8;
        L == 8 && G(y.b, 103, y.a, y.c);
        var pb = (Xa << 3) + h[ua >> 2], ga = pb;
        B = ga >> 2;
        var da = pb + 4;
        M = da >> 2;
        var Ya = h[M], ba = (w[0] = h[B], x[0]), ha = (w[0] = Ya, x[0]), qa = za * jb - ka * $a + N, ra = ka * jb + za * $a + ja, ma = Fa, la = (x[0] = qa, w[0]), xa = (x[0] = ra, w[0]) | 0, ab = ma;
        h[ab >> 2] = 0 | la;
        var ia = ma + 4;
        h[ia >> 2] = xa;
        var Ma = Ea * ba - $ * ha + S, bb = $ * ba + Ea * ha + T, wb = O + Y * 36 + 8, xb = (x[0] = Ma, w[0]), Kb = (x[0] = bb, w[0]) | 0, Na = wb;
        h[Na >> 2] = 0 | xb;
        var Ga = wb + 4;
        h[Ga >> 2] = Kb;
        var sa = l[F + (Y * 9 | 0) + 3] - l[F + (Y * 9 | 0) + 1], Ha = O + Y * 36 + 16, Oa = (x[0] = Ma - qa, w[0]), Ua = (x[0] = sa, w[0]) | 0;
        h[Ha >> 2] = 0 | Oa;
        h[Ha + 4 >> 2] = Ua;
        l[F + (Y * 9 | 0) + 6] = 0;
        var ca = Y + 1, Aa = h[H];
        if (ca < Aa) {
          Y = ca;
        } else {
          Ca = Aa;
          break a;
        }
      }
    }
  } while (0);
  var cb = Ca > 1;
  a : do {
    if (cb) {
      var na = l[d >> 2];
      if (Ca == 0) {
        G(y.g, 246, y.H, y.f);
        var La = 0;
      } else {
        if (Ca == 1) {
          La = 0;
        } else {
          if (Ca == 2) {
            var db = l[D + 4] - l[D + 13], qb = l[D + 5] - l[D + 14], La = an(db * db + qb * qb);
          } else {
            if (Ca == 3) {
              var ub = l[D + 4], rb = l[D + 5], La = (l[D + 13] - ub) * (l[D + 23] - rb) - (l[D + 14] - rb) * (l[D + 22] - ub);
            } else {
              G(y.g, 259, y.H, y.f), La = 0;
            }
          }
        }
      }
      var gb = La < na * .5;
      do {
        if (!gb && !(na * 2 < La | La < 1.1920928955078125e-7)) {
          var kb = h[H];
          L = 20;
          break a;
        }
      } while (0);
      h[H] = 0;
      L = 21;
    } else {
      kb = Ca, L = 20;
    }
  } while (0);
  if (L == 20) {
    if (kb == 0) {
      L = 21;
    } else {
      var Va = kb;
      Va == 0 ? G(y.g, 194, y.G, y.f) : Va == 1 || Va == 2 || Va == 3 || G(y.g, 207, y.G, y.f);
      L = 29;
    }
  }
  if (L == 21) {
    h[D + 7] = 0;
    h[D + 8] = 0;
    h[Q + 5] > 0 || G(y.b, 103, y.a, y.c);
    var ea = h[Q + 4], ga = ea;
    B = ga >> 2;
    da = ea + 4;
    M = da >> 2;
    var Da = h[M], Ia = (w[0] = h[B], x[0]), Sa = (w[0] = Da, x[0]);
    h[Q + 12] > 0 || G(y.b, 103, y.a, y.c);
    var vb = h[Q + 11], ga = vb;
    B = ga >> 2;
    da = vb + 4;
    M = da >> 2;
    var Pa = h[M], eb = (w[0] = h[B], x[0]), nb = (w[0] = Pa, x[0]), Db = za * Ia - ka * Sa + N, Qb = ka * Ia + za * Sa + ja, Ob = (x[0] = Db, w[0]), Eb = (x[0] = Qb, w[0]), Ib = 0 | Ob, Jb = Eb | 0, ab = O;
    h[ab >> 2] = Ib;
    ia = O + 4;
    h[ia >> 2] = Jb;
    var sb = Ea * eb - $ * nb + S, Lb = $ * eb + Ea * nb + T, Fb = O + 8, ob = (x[0] = sb, w[0]), Bb = (x[0] = Lb, w[0]), lb = 0 | ob, tb = Bb | 0, Na = Fb;
    h[Na >> 2] = lb;
    Ga = Fb + 4;
    h[Ga >> 2] = tb;
    var W = Lb - Qb, R = O + 16, Xb = (x[0] = sb - Db, w[0]), Tb = (x[0] = W, w[0]) | 0;
    h[R >> 2] = 0 | Xb;
    h[R + 4 >> 2] = Tb;
    h[H] = 1;
  }
  var yb = e + 16, Cb = e + 20, Ub = e + 44, bc = e + 48;
  J = O + 16 >> 2;
  K = O + 20 >> 2;
  C = O + 52 >> 2;
  I = O + 56 >> 2;
  var Ja = O + 16, Mb = O + 52;
  z = O + 24 >> 2;
  E = O + 60 >> 2;
  A = O >> 2;
  u = O + 36 >> 2;
  var fa = -$, ya = O + 88;
  s = O + 96 >> 2;
  r = O + 72 >> 2;
  var zb = 0;
  a : for (;;) {
    if (zb >= 20) {
      var ta = zb;
      break;
    }
    var cc = k[H], gc = cc > 0;
    b : do {
      if (gc) {
        for (var Pb = 0; ; ) {
          h[ib + (Pb << 2) >> 2] = h[F + (Pb * 9 | 0) + 7];
          h[U + (Pb << 2) >> 2] = h[F + (Pb * 9 | 0) + 8];
          var pc = Pb + 1;
          if (pc == cc) {
            break b;
          } else {
            Pb = pc;
          }
        }
      } else {
        L = 33;
      }
    } while (0);
    do {
      if (cc == 1) {
        L = 55;
      } else {
        if (cc == 2) {
          var Vb = Ja, wc = Ja + 4, Xc = h[wc >> 2], nc = (w[0] = h[Vb >> 2], x[0]), uc = (w[0] = Xc, x[0]), hc = Mb, ic = Mb + 4, yc = h[ic >> 2], Ab = (w[0] = h[hc >> 2], x[0]), hb = (w[0] = yc, x[0]), dc = Ab - nc, ec = hb - uc, qc = nc * dc + uc * ec, Rc = -qc;
          if (qc < 0) {
            var Cc = Ab * dc + hb * ec;
            if (Cc > 0) {
              var Yb = 1 / (Cc - qc);
              l[z] = Cc * Yb;
              l[E] = Yb * Rc;
              h[H] = 2;
              var dd = Ab, Sc = nc;
              L = 60;
            } else {
              l[E] = 1;
              h[H] = 1;
              for (var Gb = u, Wb = A, jc = Gb + 9; Gb < jc; Gb++, Wb++) {
                h[Wb] = h[Gb];
              }
              L = 57;
            }
          } else {
            l[z] = 1;
            h[H] = 1;
            var Dc = nc;
            L = 59;
          }
        } else {
          if (cc == 3) {
            var Vb = Ja, wc = Ja + 4, ed = h[wc >> 2], rc = (w[0] = h[Vb >> 2], x[0]), Ec = (w[0] = ed, x[0]), hc = Mb, ic = Mb + 4, Fc = h[ic >> 2], fc = (w[0] = h[hc >> 2], x[0]), sc = (w[0] = Fc, x[0]), fd = ya, Tc = ya + 4, wd = h[Tc >> 2], kc = (w[0] = h[fd >> 2], x[0]), vc = (w[0] = wd, x[0]), Kd = fc - rc, xd = sc - Ec, Nb = rc * Kd + Ec * xd, lc = fc * Kd + sc * xd, Rb = -Nb, Mc = kc - rc, Zb = vc - Ec, $b = rc * Mc + Ec * Zb, gd = kc * Mc + vc * Zb, hd = -$b, Gc = kc - fc, Rd = vc - sc, Uc = fc * Gc + sc * Rd, $d = kc * Gc + vc * Rd, tc = -Uc, mc = Kd * Zb - xd * Mc, od = mc * (fc * vc - sc * kc), yd = mc * (kc * Ec - vc * rc), pd = mc * (rc * sc - Ec * fc);
            if (Nb < 0 | $b < 0) {
              if (Nb >= 0 | lc <= 0 | pd > 0) {
                if ($b >= 0 | gd <= 0 | yd > 0) {
                  if (lc > 0 | Uc < 0) {
                    if (gd > 0 | $d > 0) {
                      if (Uc >= 0 | $d <= 0 | od > 0) {
                        var Nc = 1 / (od + yd + pd);
                        l[z] = od * Nc;
                        l[E] = yd * Nc;
                        l[s] = pd * Nc;
                        h[H] = 3;
                        ta = zb;
                        break a;
                      } else {
                        var Oc = 1 / ($d - Uc);
                        l[E] = $d * Oc;
                        l[s] = Oc * tc;
                        h[H] = 2;
                        Gb = r;
                        Wb = A;
                        for (jc = Gb + 9; Gb < jc; Gb++, Wb++) {
                          h[Wb] = h[Gb];
                        }
                        L = 58;
                      }
                    } else {
                      l[s] = 1;
                      h[H] = 1;
                      Gb = r;
                      Wb = A;
                      for (jc = Gb + 9; Gb < jc; Gb++, Wb++) {
                        h[Wb] = h[Gb];
                      }
                      L = 57;
                    }
                  } else {
                    l[E] = 1;
                    h[H] = 1;
                    Gb = u;
                    Wb = A;
                    for (jc = Gb + 9; Gb < jc; Gb++, Wb++) {
                      h[Wb] = h[Gb];
                    }
                    L = 57;
                  }
                } else {
                  var Sd = 1 / (gd - $b);
                  l[z] = gd * Sd;
                  l[s] = Sd * hd;
                  h[H] = 2;
                  Gb = r;
                  Wb = u;
                  for (jc = Gb + 9; Gb < jc; Gb++, Wb++) {
                    h[Wb] = h[Gb];
                  }
                  L = 58;
                }
              } else {
                var ae = 1 / (lc - Nb);
                l[z] = lc * ae;
                l[E] = ae * Rb;
                h[H] = 2;
                dd = fc;
                Sc = rc;
                L = 60;
              }
            } else {
              l[z] = 1, h[H] = 1, Dc = rc, L = 59;
            }
          } else {
            G(y.g, 498, y.fb, y.f);
            var zd = h[H];
            if (zd == 3) {
              ta = zb;
              break a;
            } else {
              if (zd == 0) {
                G(y.g, 194, y.G, y.f), L = 55;
              } else {
                if (zd == 1 || zd == 2) {
                  var Yc = zd;
                  L = 56;
                } else {
                  G(y.g, 207, y.G, y.f), L = 55;
                }
              }
            }
          }
        }
      }
    } while (0);
    L == 55 && (Yc = h[H], L = 56);
    if (L == 56) {
      if (Yc == 1) {
        L = 57;
      } else {
        if (Yc == 2) {
          L = 58;
        } else {
          G(y.g, 184, y.zb, y.f);
          var Vc = 0, Hb = 0;
          L = 64;
        }
      }
    }
    L == 57 ? (Dc = l[J], L = 59) : L == 58 && (dd = l[C], Sc = l[J], L = 60);
    if (L == 59) {
      Vc = -Dc, Hb = -l[K];
    } else {
      if (L == 60) {
        var Hc = dd - Sc, id = l[K], Hd = l[I] - id;
        Hc * -id - Hd * -Sc > 0 ? (Vc = Hd * -1, Hb = Hc) : (Vc = Hd, Hb = Hc * -1);
      }
    }
    if (Vc * Vc + Hb * Hb < 1.4210854715202004e-14) {
      ta = zb;
      break;
    }
    var ac = k[H], oc = O + ac * 36, be = -Hb, Ad = za * -Vc + ka * be, Bd = Vc * ka + za * be, Td = h[yb >> 2];
    p = Td >> 2;
    var jd = h[Cb >> 2], Ld = jd > 1;
    do {
      if (Ld) {
        for (var Cd = 0, Zc = l[p] * Ad + l[p + 1] * Bd, Pc = 1; ; ) {
          var Md = l[(Pc << 3 >> 2) + p] * Ad + l[((Pc << 3) + 4 >> 2) + p] * Bd, qd = Md > Zc, $c = qd ? Pc : Cd, ce = qd ? Md : Zc, Ud = Pc + 1;
          if (Ud == jd) {
            break;
          } else {
            Cd = $c, Zc = ce, Pc = Ud;
          }
        }
        var Ae = O + ac * 36 + 28;
        h[Ae >> 2] = $c;
        var Vd = oc;
        if ($c > -1) {
          var qe = $c, de = Ae, rd = Vd;
          L = 70;
        } else {
          var zc = $c, Wd = Ae, kd = Vd;
          L = 71;
        }
      } else {
        var ef = O + ac * 36 + 28, qe = h[ef >> 2] = 0, de = ef, rd = oc;
        L = 70;
      }
    } while (0);
    if (L == 70) {
      if (jd > qe) {
        var Wc = qe, ld = de, re = rd, ee = Td;
        L = 72;
      } else {
        zc = qe, Wd = de, kd = rd, L = 71;
      }
    }
    L == 71 && (G(y.b, 103, y.a, y.c), Wc = zc, ld = Wd, re = kd, ee = h[yb >> 2]);
    var Le = l[ee + (Wc << 3) >> 2], Me = l[ee + (Wc << 3) + 4 >> 2], pg = ka * Le + za * Me + ja, ff = oc, qg = (x[0] = za * Le - ka * Me + N, w[0]), rg = (x[0] = pg, w[0]) | 0, Nd = ff;
    q = Nd >> 2;
    h[q] = 0 | qg;
    var Be = ff + 4;
    o = Be >> 2;
    h[o] = rg;
    var gf = Ea * Vc + $ * Hb, zf = Vc * fa + Ea * Hb, Af = h[Ub >> 2];
    n = Af >> 2;
    var Ce = h[bc >> 2], Hh = Ce > 1;
    do {
      if (Hh) {
        for (var Wg = 0, Zf = l[n] * gf + l[n + 1] * zf, fe = 1; ; ) {
          var Bf = l[(fe << 3 >> 2) + n] * gf + l[((fe << 3) + 4 >> 2) + n] * zf, sg = Bf > Zf, hf = sg ? fe : Wg, Ih = sg ? Bf : Zf, Cf = fe + 1;
          if (Cf == Ce) {
            break;
          } else {
            Wg = hf, Zf = Ih, fe = Cf;
          }
        }
        var Xg = O + ac * 36 + 32;
        h[Xg >> 2] = hf;
        var Yg = O + ac * 36 + 8;
        if (hf > -1) {
          var $f = hf, ag = Xg, jf = Yg;
          L = 77;
        } else {
          var Zg = hf, $g = Xg, bg = Yg;
          L = 78;
        }
      } else {
        var tg = O + ac * 36 + 32, $f = h[tg >> 2] = 0, ag = tg, jf = O + ac * 36 + 8;
        L = 77;
      }
    } while (0);
    if (L == 77) {
      if (Ce > $f) {
        var cg = $f, Df = ag, Ef = jf, md = Af;
        L = 79;
      } else {
        Zg = $f, $g = ag, bg = jf, L = 78;
      }
    }
    L == 78 && (G(y.b, 103, y.a, y.c), cg = Zg, Df = $g, Ef = bg, md = h[Ub >> 2]);
    var Ff = l[md + (cg << 3) >> 2], Dd = l[md + (cg << 3) + 4 >> 2], Ne = Ea * Ff - $ * Dd + S, Ac = $ * Ff + Ea * Dd + T, ad = Ef, ah = (x[0] = Ne, w[0]), bh = (x[0] = Ac, w[0]) | 0, Nd = ad;
    q = Nd >> 2;
    h[q] = 0 | ah;
    Be = ad + 4;
    o = Be >> 2;
    h[o] = bh;
    var dg = Ac - l[re + 4 >> 2], ch = O + ac * 36 + 16, Jh = (x[0] = Ne - l[re >> 2], w[0]), ug = (x[0] = dg, w[0]) | 0;
    h[ch >> 2] = 0 | Jh;
    h[ch + 4 >> 2] = ug;
    var Gf = zb + 1;
    h[Pp >> 2] += 1;
    for (var Qc = 0; ; ) {
      if (Qc >= cc) {
        break;
      }
      if (h[ld >> 2] == h[ib + (Qc << 2) >> 2] && h[Df >> 2] == h[U + (Qc << 2) >> 2]) {
        ta = Gf;
        break a;
      }
      Qc += 1;
    }
    h[H] += 1;
    zb = Gf;
  }
  var xc = h[Qp >> 2];
  h[Qp >> 2] = xc > ta ? xc : ta;
  var se = c + 8, kf = h[H];
  if (kf == 0) {
    G(y.g, 217, y.pa, y.f);
  } else {
    if (kf == 1) {
      var vg = h[O + 4 >> 2];
      h[c >> 2] = h[O >> 2];
      h[c + 4 >> 2] = vg;
      var Hf = O + 8, eg = h[Hf + 4 >> 2];
      h[se >> 2] = h[Hf >> 2];
      h[se + 4 >> 2] = eg;
    } else {
      if (kf == 2) {
        var te = l[z], ge = l[E], ue = l[D + 1] * te + l[D + 10] * ge, fg = (x[0] = l[D] * te + l[D + 9] * ge, w[0]), wg = (x[0] = ue, w[0]) | 0, Nd = c;
        q = Nd >> 2;
        h[q] = 0 | fg;
        Be = c + 4;
        o = Be >> 2;
        h[o] = wg;
        var Ed = l[D + 3] * te + l[D + 12] * ge, De = (x[0] = l[D + 2] * te + l[D + 11] * ge, w[0]), ve = (x[0] = Ed, w[0]) | 0;
        h[se >> 2] = 0 | De;
        h[se + 4 >> 2] = ve;
      } else {
        if (kf == 3) {
          var Oe = l[z], Pe = l[E], lf = l[s], he = l[D + 1] * Oe + l[D + 10] * Pe + l[D + 19] * lf, Ee = (x[0] = l[D] * Oe + l[D + 9] * Pe + l[D + 18] * lf, w[0]), xg = (x[0] = he, w[0]), yg = 0 | Ee, Id = xg | 0;
          h[c >> 2] = yg;
          h[c + 4 >> 2] = Id;
          h[se >> 2] = yg;
          h[se + 4 >> 2] = Id;
        } else {
          G(y.g, 236, y.pa, y.f);
        }
      }
    }
  }
  m = c >> 2;
  j = se >> 2;
  var Fe = l[m] - l[j];
  i = c + 4 >> 2;
  g = c + 12 >> 2;
  var If = l[i] - l[g], zg = an(Fe * Fe + If * If);
  f = c + 16 >> 2;
  l[f] = zg;
  h[c + 20 >> 2] = ta;
  var mf = h[H];
  if (mf == 0) {
    G(y.g, 246, y.H, y.f);
    var nf = 0;
  } else {
    if (mf == 1) {
      nf = 0;
    } else {
      if (mf == 2) {
        var Jf = l[J] - l[C], Kf = l[K] - l[I], nf = an(Jf * Jf + Kf * Kf);
      } else {
        if (mf == 3) {
          var Lf = l[J], dh = l[K], nf = (l[C] - Lf) * (l[D + 23] - dh) - (l[I] - dh) * (l[D + 22] - Lf);
        } else {
          G(y.g, 259, y.H, y.f), nf = 0;
        }
      }
    }
  }
  l[d >> 2] = nf;
  var gg = h[H];
  b[P] = gg & 65535;
  var Ge = gg > 0;
  a : do {
    if (Ge) {
      for (var we = 0; ; ) {
        a[d + (we + 6)] = h[F + (we * 9 | 0) + 7] & 255;
        a[d + (we + 9)] = h[F + (we * 9 | 0) + 8] & 255;
        var Qe = we + 1;
        if (Qe < gg) {
          we = Qe;
        } else {
          break a;
        }
      }
    }
  } while (0);
  if ((a[e + 88] & 1) != 0) {
    var Ag = l[Q + 6], Xd = l[Q + 13], of = l[f], pf = Ag + Xd;
    if (of > pf & of > 1.1920928955078125e-7) {
      l[f] = of - pf;
      var Re = l[j], Fd = l[m], qf = Re - Fd, rf = l[g], Mf = l[i], sf = rf - Mf, Nf = an(qf * qf + sf * sf);
      if (Nf < 1.1920928955078125e-7) {
        var tf = qf, sd = sf;
      } else {
        var eh = 1 / Nf, tf = qf * eh, sd = sf * eh;
      }
      var td = sd * Ag;
      l[m] = Fd + tf * Ag;
      l[i] = Mf + td;
      var He = sd * Xd;
      l[j] = Re - tf * Xd;
      l[g] = rf - He;
    } else {
      var Yd = (l[i] + l[g]) * .5, Se = (x[0] = (l[m] + l[j]) * .5, w[0]), fh = (x[0] = Yd, w[0]), uf = 0 | Se, vf = fh | 0;
      h[c >> 2] = uf;
      h[c + 4 >> 2] = vf;
      fd = se;
      h[fd >> 2] = uf;
      Tc = se + 4;
      h[Tc >> 2] = vf;
      l[f] = 0;
    }
  }
  Yf = O;
}

function Rp(c) {
  var d, e, f, g;
  g = c + 16 >> 2;
  var i = h[g];
  if (i == -1) {
    i = c + 8;
    f = i >> 2;
    d = c + 12 >> 2;
    e = h[d];
    if (h[f] == e) {
      var j = e;
    } else {
      G(y.d, 61, y.kb, y.Eb), j = h[d];
    }
    c += 4;
    e = c >> 2;
    var m = h[e];
    h[d] = j << 1;
    j = vj(j * 72);
    h[e] = j;
    Sp(j, m, h[f] * 36);
    qp(m);
    var j = h[f], m = h[d] - 1, n = j < m;
    a : do {
      if (n) {
        for (var o = j; ; ) {
          var q = o + 1;
          h[h[e] + o * 36 + 20 >> 2] = q;
          h[h[e] + o * 36 + 32 >> 2] = -1;
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
    h[h[e] + p * 36 + 20 >> 2] = -1;
    h[h[e] + (h[d] - 1) * 36 + 32 >> 2] = -1;
    p = h[f];
    h[g] = p;
    d = c >> 2;
  } else {
    p = i, d = c + 4 >> 2, i = c + 8;
  }
  f = h[d] + p * 36 + 20;
  h[g] = h[f >> 2];
  h[f >> 2] = -1;
  h[h[d] + p * 36 + 24 >> 2] = -1;
  h[h[d] + p * 36 + 28 >> 2] = -1;
  h[h[d] + p * 36 + 32 >> 2] = 0;
  h[h[d] + p * 36 + 16 >> 2] = 0;
  h[i >> 2] += 1;
  return p;
}

function As(c, d) {
  var e, f, g, i, j;
  h[c + 24 >> 2] += 1;
  j = c >> 2;
  var m = h[j], n = m == -1;
  a : do {
    if (n) {
      h[j] = d, h[h[c + 4 >> 2] + d * 36 + 20 >> 2] = -1;
    } else {
      i = c + 4 >> 2;
      g = h[i] >> 2;
      var o = l[g + (d * 9 | 0)];
      e = l[g + (d * 9 | 0) + 1];
      for (var q = l[g + (d * 9 | 0) + 2], p = l[g + (d * 9 | 0) + 3], r = m; ; ) {
        var s = h[g + (r * 9 | 0) + 6];
        if (s == -1) {
          break;
        }
        var u = h[g + (r * 9 | 0) + 7], A = l[g + (r * 9 | 0) + 2], E = l[g + (r * 9 | 0)], z = l[g + (r * 9 | 0) + 3], I = l[g + (r * 9 | 0) + 1], C = ((A > q ? A : q) - (E < o ? E : o) + ((z > p ? z : p) - (I < e ? I : e))) * 2;
        f = C * 2;
        var A = (C - (A - E + (z - I)) * 2) * 2, E = l[g + (s * 9 | 0)], z = o < E ? o : E, I = l[g + (s * 9 | 0) + 1], C = e < I ? e : I, K = l[g + (s * 9 | 0) + 2], J = q > K ? q : K, M = l[g + (s * 9 | 0) + 3], B = p > M ? p : M, E = (h[g + (s * 9 | 0) + 6] == -1 ? (J - z + (B - C)) * 2 : (J - z + (B - C)) * 2 - (K - E + (M - I)) * 2) + A, z = l[g + (u * 9 | 0)], I = o < z ? o : z, C = l[g + (u * 9 | 0) + 1], K = e < C ? e : C, J = l[g + (u * 9 | 0) + 2], M = q > J ? q : J, B = l[g + (u * 9 | 0) + 3], F = p > B ? p : B, A = (h[g + (u * 9 | 0) + 6] == -1 ? (M - I + (F - K)) * 2 : (M - I + (F - K)) * 2 - (J - z + (B - C)) * 2) + A;
        if (f < E & f < A) {
          break;
        }
        r = E < A ? s : u;
      }
      g = h[g + (r * 9 | 0) + 5];
      s = Rp(c);
      h[h[i] + s * 36 + 20 >> 2] = g;
      h[h[i] + s * 36 + 16 >> 2] = 0;
      u = h[i];
      f = u >> 2;
      A = l[f + (r * 9 | 0)];
      E = l[f + (r * 9 | 0) + 1];
      E = e < E ? e : E;
      e = u + s * 36;
      o = (x[0] = o < A ? o : A, w[0]);
      A = (x[0] = E, w[0]) | 0;
      h[e >> 2] = 0 | o;
      h[e + 4 >> 2] = A;
      o = l[f + (r * 9 | 0) + 2];
      e = l[f + (r * 9 | 0) + 3];
      p = p > e ? p : e;
      e = u + s * 36 + 8;
      q = (x[0] = q > o ? q : o, w[0]);
      p = (x[0] = p, w[0]) | 0;
      h[e >> 2] = 0 | q;
      h[e + 4 >> 2] = p;
      q = h[i];
      h[q + s * 36 + 32 >> 2] = h[(q + 32 >> 2) + (r * 9 | 0)] + 1;
      q = h[i];
      g == -1 ? (h[q + s * 36 + 24 >> 2] = r, h[h[i] + s * 36 + 28 >> 2] = d, h[h[i] + r * 36 + 20 >> 2] = s, h[h[i] + d * 36 + 20 >> 2] = s, h[j] = s) : (p = q + g * 36 + 24, h[p >> 2] == r ? h[p >> 2] = s : h[q + g * 36 + 28 >> 2] = s, h[h[i] + s * 36 + 24 >> 2] = r, h[h[i] + s * 36 + 28 >> 2] = d, h[h[i] + r * 36 + 20 >> 2] = s, h[h[i] + d * 36 + 20 >> 2] = s);
      r = h[(h[i] + 20 >> 2) + (d * 9 | 0)];
      if (r != -1) {
        for (;;) {
          if (r = Bs(c, r), p = h[i], q = h[(p + 24 >> 2) + (r * 9 | 0)], p = h[(p + 28 >> 2) + (r * 9 | 0)], q == -1 && G(y.d, 307, y.X, y.wc), p == -1 && G(y.d, 308, y.X, y.zc), o = h[i], e = h[(o + 32 >> 2) + (q * 9 | 0)], g = h[(o + 32 >> 2) + (p * 9 | 0)], h[o + r * 36 + 32 >> 2] = (e > g ? e : g) + 1, o = h[i], e = o >> 2, g = l[e + (q * 9 | 0)], s = l[e + (p * 9 | 0)], u = l[e + (q * 9 | 0) + 1], f = l[e + (p * 9 | 0) + 1], f = u < f ? u : f, u = o + r * 36, g = (x[0] = g < s ? g : s, w[0]), s = (x[0] = f, w[0]) | 0, h[u >> 2] = 0 | g, h[u + 4 >> 2] = s, g = l[e + (q * 9 | 0) + 2], s = l[e + (p * 9 | 0) + 2], q = l[e + (q * 9 | 0) + 3], p = l[e + (p * 9 | 0) + 3], q = q > p ? q : p, p = o + r * 36 + 8, o = (x[0] = g > s ? g : s, w[0]), q = (x[0] = q, w[0]) | 0, h[p >> 2] = 0 | o, h[p + 4 >> 2] = q, r = h[(h[i] + 20 >> 2) + (r * 9 | 0)], r == -1) {
            break a;
          }
        }
      }
    }
  } while (0);
}

function Bs(c, d) {
  var e, f, g, i, j, m, n, o, q, p, r, s, u, A, E, z, I, C, K, J, M, B, F, H, P = c >> 2, D;
  d == -1 && G(y.d, 382, y.l, y.Bc);
  H = c + 4 >> 2;
  var Q = h[H];
  F = Q >> 2;
  var O = Q + d * 36;
  B = Q + d * 36 + 24 >> 2;
  var L = h[B];
  if (L == -1) {
    var ib = d;
  } else {
    if (M = Q + d * 36 + 32 >> 2, h[M] < 2) {
      ib = d;
    } else {
      J = Q + d * 36 + 28 >> 2;
      var U = h[J];
      D = L > -1 ? L < h[P + 3] ? 7 : 6 : 6;
      D == 6 && G(y.d, 392, y.l, y.Cc);
      D = U > -1 ? U < h[P + 3] ? 10 : 9 : 9;
      D == 9 && G(y.d, 393, y.l, y.Bb);
      var N = h[H];
      K = N >> 2;
      var ja = N + L * 36, ka = N + U * 36;
      C = N + U * 36 + 32 >> 2;
      I = N + L * 36 + 32 >> 2;
      var za = h[C] - h[I];
      if (za > 1) {
        var S = N + U * 36 + 24, T = h[S >> 2];
        z = N + U * 36 + 28 >> 2;
        var $ = h[z], Ea = N + T * 36, Z = N + $ * 36;
        D = T > -1 ? T < h[P + 3] ? 14 : 13 : 13;
        D == 13 && G(y.d, 407, y.l, y.Cb);
        D = $ > -1 ? $ < h[P + 3] ? 17 : 16 : 16;
        D == 16 && G(y.d, 408, y.l, y.Ib);
        h[S >> 2] = d;
        var X = Q + d * 36 + 20, aa = h[X >> 2];
        E = N + U * 36 + 20 >> 2;
        h[E] = aa;
        h[X >> 2] = U;
        var Ba = h[E];
        if (Ba == -1) {
          h[P] = U;
        } else {
          var Ca = h[H], mb = Ca + Ba * 36 + 24;
          if (h[mb >> 2] == d) {
            h[mb >> 2] = U;
          } else {
            if (h[(Ca + 28 >> 2) + (Ba * 9 | 0)] == d) {
              var Qa = Ba, pa = Ca;
            } else {
              G(y.d, 424, y.l, y.Nb), Qa = h[E], pa = h[H];
            }
            h[(pa + 28 >> 2) + (Qa * 9 | 0)] = U;
          }
        }
        A = N + T * 36 + 32 >> 2;
        u = N + $ * 36 + 32 >> 2;
        if (h[A] > h[u]) {
          h[z] = T;
          h[J] = $;
          h[N + $ * 36 + 20 >> 2] = d;
          var ua = l[ja >> 2], Y = l[Z >> 2], Fa = ua < Y ? ua : Y, va = l[K + (L * 9 | 0) + 1], Ra = l[K + ($ * 9 | 0) + 1], Wa = va < Ra ? va : Ra, Xa = (x[0] = Fa, w[0]), Ka = (x[0] = Wa, w[0]), Za = 0 | Xa, jb = Ka | 0, $a = O;
          s = $a >> 2;
          h[s] = Za;
          var pb = O + 4;
          r = pb >> 2;
          h[r] = jb;
          var ga = l[K + (L * 9 | 0) + 2], da = l[K + ($ * 9 | 0) + 2], Ya = l[K + (L * 9 | 0) + 3], ba = l[K + ($ * 9 | 0) + 3], ha = Ya > ba ? Ya : ba, qa = Q + d * 36 + 8, ra = (x[0] = ga > da ? ga : da, w[0]), ma = (x[0] = ha, w[0]), la = 0 | ra, xa = ma | 0, ab = qa;
          p = ab >> 2;
          h[p] = la;
          var ia = qa + 4;
          q = ia >> 2;
          h[q] = xa;
          var Ma = l[Ea >> 2], bb = l[F + (d * 9 | 0) + 1], wb = l[K + (T * 9 | 0) + 1], xb = bb < wb ? bb : wb, Kb = (x[0] = Fa < Ma ? Fa : Ma, w[0]), Na = (x[0] = xb, w[0]), Ga = 0 | Kb, sa = Na | 0, Ha = ka;
          o = Ha >> 2;
          h[o] = Ga;
          var Oa = ka + 4;
          n = Oa >> 2;
          h[n] = sa;
          var Ua = l[F + (d * 9 | 0) + 2], ca = l[K + (T * 9 | 0) + 2], Aa = l[F + (d * 9 | 0) + 3], cb = l[K + (T * 9 | 0) + 3], na = Aa > cb ? Aa : cb, La = N + U * 36 + 8, db = (x[0] = Ua > ca ? Ua : ca, w[0]), qb = (x[0] = na, w[0]), ub = 0 | db, rb = qb | 0, gb = La;
          m = gb >> 2;
          h[m] = ub;
          var kb = La + 4;
          j = kb >> 2;
          h[j] = rb;
          var Va = h[I], ea = h[u], Da = (Va > ea ? Va : ea) + 1;
          h[M] = Da;
          var Ia = h[A], Sa = Da > Ia ? Da : Ia;
        } else {
          h[z] = $;
          h[J] = T;
          h[N + T * 36 + 20 >> 2] = d;
          var vb = l[ja >> 2], Pa = l[Ea >> 2], eb = vb < Pa ? vb : Pa, nb = l[K + (L * 9 | 0) + 1], Db = l[K + (T * 9 | 0) + 1], Qb = nb < Db ? nb : Db, Ob = (x[0] = eb, w[0]), Eb = (x[0] = Qb, w[0]), Ib = 0 | Ob, Jb = Eb | 0, $a = O;
          s = $a >> 2;
          h[s] = Ib;
          pb = O + 4;
          r = pb >> 2;
          h[r] = Jb;
          var sb = l[K + (L * 9 | 0) + 2], Lb = l[K + (T * 9 | 0) + 2], Fb = l[K + (L * 9 | 0) + 3], ob = l[K + (T * 9 | 0) + 3], Bb = Fb > ob ? Fb : ob, lb = Q + d * 36 + 8, tb = (x[0] = sb > Lb ? sb : Lb, w[0]), W = (x[0] = Bb, w[0]), R = 0 | tb, Xb = W | 0, ab = lb;
          p = ab >> 2;
          h[p] = R;
          ia = lb + 4;
          q = ia >> 2;
          h[q] = Xb;
          var Tb = l[Z >> 2], yb = l[F + (d * 9 | 0) + 1], Cb = l[K + ($ * 9 | 0) + 1], Ub = yb < Cb ? yb : Cb, bc = (x[0] = eb < Tb ? eb : Tb, w[0]), Ja = (x[0] = Ub, w[0]), Mb = 0 | bc, fa = Ja | 0, Ha = ka;
          o = Ha >> 2;
          h[o] = Mb;
          Oa = ka + 4;
          n = Oa >> 2;
          h[n] = fa;
          var ya = l[F + (d * 9 | 0) + 2], zb = l[K + ($ * 9 | 0) + 2], ta = l[F + (d * 9 | 0) + 3], cc = l[K + ($ * 9 | 0) + 3], gc = ta > cc ? ta : cc, Pb = N + U * 36 + 8, pc = (x[0] = ya > zb ? ya : zb, w[0]), Vb = (x[0] = gc, w[0]), wc = 0 | pc, Xc = Vb | 0, gb = Pb;
          m = gb >> 2;
          h[m] = wc;
          kb = Pb + 4;
          j = kb >> 2;
          h[j] = Xc;
          var nc = h[I], uc = h[A], hc = (nc > uc ? nc : uc) + 1;
          h[M] = hc;
          var ic = h[u], Sa = hc > ic ? hc : ic;
        }
        h[C] = Sa + 1;
        ib = U;
      } else {
        if (za < -1) {
          var yc = N + L * 36 + 24, Ab = h[yc >> 2];
          i = N + L * 36 + 28 >> 2;
          var hb = h[i], dc = N + Ab * 36, ec = N + hb * 36;
          D = Ab > -1 ? Ab < h[P + 3] ? 32 : 31 : 31;
          D == 31 && G(y.d, 467, y.l, y.Rb);
          D = hb > -1 ? hb < h[P + 3] ? 35 : 34 : 34;
          D == 34 && G(y.d, 468, y.l, y.Sb);
          h[yc >> 2] = d;
          var qc = Q + d * 36 + 20, Rc = h[qc >> 2];
          g = N + L * 36 + 20 >> 2;
          h[g] = Rc;
          h[qc >> 2] = L;
          var Cc = h[g];
          if (Cc == -1) {
            h[P] = L;
          } else {
            var Yb = h[H], dd = Yb + Cc * 36 + 24;
            if (h[dd >> 2] == d) {
              h[dd >> 2] = L;
            } else {
              if (h[(Yb + 28 >> 2) + (Cc * 9 | 0)] == d) {
                var Sc = Cc, Gb = Yb;
              } else {
                G(y.d, 484, y.l, y.Tb), Sc = h[g], Gb = h[H];
              }
              h[(Gb + 28 >> 2) + (Sc * 9 | 0)] = L;
            }
          }
          f = N + Ab * 36 + 32 >> 2;
          e = N + hb * 36 + 32 >> 2;
          if (h[f] > h[e]) {
            h[i] = Ab;
            h[B] = hb;
            h[N + hb * 36 + 20 >> 2] = d;
            var Wb = l[ka >> 2], jc = l[ec >> 2], Dc = Wb < jc ? Wb : jc, ed = l[K + (U * 9 | 0) + 1], rc = l[K + (hb * 9 | 0) + 1], Ec = ed < rc ? ed : rc, Fc = (x[0] = Dc, w[0]), fc = (x[0] = Ec, w[0]), sc = 0 | Fc, fd = fc | 0, $a = O;
            s = $a >> 2;
            h[s] = sc;
            pb = O + 4;
            r = pb >> 2;
            h[r] = fd;
            var Tc = l[K + (U * 9 | 0) + 2], wd = l[K + (hb * 9 | 0) + 2], kc = l[K + (U * 9 | 0) + 3], vc = l[K + (hb * 9 | 0) + 3], Kd = kc > vc ? kc : vc, xd = Q + d * 36 + 8, Nb = (x[0] = Tc > wd ? Tc : wd, w[0]), lc = (x[0] = Kd, w[0]), Rb = 0 | Nb, Mc = lc | 0, ab = xd;
            p = ab >> 2;
            h[p] = Rb;
            ia = xd + 4;
            q = ia >> 2;
            h[q] = Mc;
            var Zb = l[dc >> 2], $b = l[F + (d * 9 | 0) + 1], gd = l[K + (Ab * 9 | 0) + 1], hd = $b < gd ? $b : gd, Gc = (x[0] = Dc < Zb ? Dc : Zb, w[0]), Rd = (x[0] = hd, w[0]), Uc = 0 | Gc, $d = Rd | 0, Ha = ja;
            o = Ha >> 2;
            h[o] = Uc;
            Oa = ja + 4;
            n = Oa >> 2;
            h[n] = $d;
            var tc = l[F + (d * 9 | 0) + 2], mc = l[K + (Ab * 9 | 0) + 2], od = l[F + (d * 9 | 0) + 3], yd = l[K + (Ab * 9 | 0) + 3], pd = od > yd ? od : yd, Nc = N + L * 36 + 8, Oc = (x[0] = tc > mc ? tc : mc, w[0]), Sd = (x[0] = pd, w[0]), ae = 0 | Oc, zd = Sd | 0, gb = Nc;
            m = gb >> 2;
            h[m] = ae;
            kb = Nc + 4;
            j = kb >> 2;
            h[j] = zd;
            var Yc = h[C], Vc = h[e], Hb = (Yc > Vc ? Yc : Vc) + 1;
            h[M] = Hb;
            var Hc = h[f], id = Hb > Hc ? Hb : Hc;
          } else {
            h[i] = hb;
            h[B] = Ab;
            h[N + Ab * 36 + 20 >> 2] = d;
            var Hd = l[ka >> 2], ac = l[dc >> 2], oc = Hd < ac ? Hd : ac, be = l[K + (U * 9 | 0) + 1], Ad = l[K + (Ab * 9 | 0) + 1], Bd = be < Ad ? be : Ad, Td = (x[0] = oc, w[0]), jd = (x[0] = Bd, w[0]), Ld = 0 | Td, Cd = jd | 0, $a = O;
            s = $a >> 2;
            h[s] = Ld;
            pb = O + 4;
            r = pb >> 2;
            h[r] = Cd;
            var Zc = l[K + (U * 9 | 0) + 2], Pc = l[K + (Ab * 9 | 0) + 2], Md = l[K + (U * 9 | 0) + 3], qd = l[K + (Ab * 9 | 0) + 3], $c = Md > qd ? Md : qd, ce = Q + d * 36 + 8, Ud = (x[0] = Zc > Pc ? Zc : Pc, w[0]), Ae = (x[0] = $c, w[0]), Vd = 0 | Ud, qe = Ae | 0, ab = ce;
            p = ab >> 2;
            h[p] = Vd;
            ia = ce + 4;
            q = ia >> 2;
            h[q] = qe;
            var de = l[ec >> 2], rd = l[F + (d * 9 | 0) + 1], zc = l[K + (hb * 9 | 0) + 1], Wd = rd < zc ? rd : zc, kd = (x[0] = oc < de ? oc : de, w[0]), ef = (x[0] = Wd, w[0]), Wc = 0 | kd, ld = ef | 0, Ha = ja;
            o = Ha >> 2;
            h[o] = Wc;
            Oa = ja + 4;
            n = Oa >> 2;
            h[n] = ld;
            var re = l[F + (d * 9 | 0) + 2], ee = l[K + (hb * 9 | 0) + 2], Le = l[F + (d * 9 | 0) + 3], Me = l[K + (hb * 9 | 0) + 3], pg = Le > Me ? Le : Me, ff = N + L * 36 + 8, qg = (x[0] = re > ee ? re : ee, w[0]), rg = (x[0] = pg, w[0]), Nd = 0 | qg, Be = rg | 0, gb = ff;
            m = gb >> 2;
            h[m] = Nd;
            kb = ff + 4;
            j = kb >> 2;
            h[j] = Be;
            var gf = h[C], zf = h[f], Af = (gf > zf ? gf : zf) + 1;
            h[M] = Af;
            var Ce = h[e], id = Af > Ce ? Af : Ce;
          }
          h[I] = id + 1;
          ib = L;
        } else {
          ib = d;
        }
      }
    }
  }
  return ib;
}

function Cs(c, d, e, f) {
  var g = c >> 2, i = 1 - f, j = l[g + 4] * i + l[g + 6] * f, m = l[g + 5] * i + l[g + 7] * f, n = i * l[g + 8] + l[g + 9] * f, o = Is(n), n = Js(n), q = l[g + 2], p = l[g + 3];
  j -= n * q - o * p;
  m -= o * q + n * p;
  var q = l[g + 13] * i + l[g + 15] * f, p = l[g + 14] * i + l[g + 16] * f, i = i * l[g + 17] + l[g + 18] * f, f = Is(i), i = Js(i), r = l[g + 11], s = l[g + 12];
  q -= i * r - f * s;
  p -= f * r + i * s;
  r = h[g + 20];
  if (r == 0) {
    var r = c + 92, s = c + 96, u = h[g], c = d > -1 ? h[u + 20 >> 2] > d ? 4 : 3 : 3;
    c == 3 && G(y.b, 103, y.a, y.c);
    d = (d << 3) + h[u + 16 >> 2];
    c = h[d + 4 >> 2];
    d = (w[0] = h[d >> 2], x[0]);
    u = (w[0] = c, x[0]);
    g = h[g + 1];
    c = e > -1 ? h[g + 20 >> 2] > e ? 7 : 6 : 6;
    c == 6 && G(y.b, 103, y.a, y.c);
    e = (e << 3) + h[g + 16 >> 2];
    g = h[e + 4 >> 2];
    e = (w[0] = h[e >> 2], x[0]);
    g = (w[0] = g, x[0]);
    o = (i * e - f * g + q - (n * d - o * u + j)) * l[r >> 2] + (f * e + i * g + p - (o * d + n * u + m)) * l[s >> 2];
  } else {
    r == 1 ? (c = l[g + 23], r = l[g + 24], d = n * c - o * r, r = o * c + n * r, c = l[g + 21], s = l[g + 22], j = n * c - o * s + j, o = o * c + n * s + m, n = h[g + 1], c = e > -1 ? h[n + 20 >> 2] > e ? 11 : 10 : 10, c == 10 && G(y.b, 103, y.a, y.c), m = (e << 3) + h[n + 16 >> 2], n = h[m + 4 >> 2], m = (w[0] = h[m >> 2], x[0]), n = (w[0] = n, x[0]), o = (i * m - f * n + q - j) * d + (f * m + i * n + p - o) * r) : r == 2 ? (c = l[g + 23], r = l[g + 24], e = i * c - f * r, r = f * c + i * r, c = l[g + 21], s = l[g + 22], q = i * c - f * s + q, f = f * c + i * s + p, i = h[g], c = d > -1 ? h[i + 20 >> 2] > d ? 15 : 14 : 14, c == 14 && G(y.b, 103, y.a, y.c), g = (d << 3) + h[i + 16 >> 2], i = h[g + 4 >> 2], g = (w[0] = h[g >> 2], x[0]), i = (w[0] = i, x[0]), o = (n * g - o * i + j - q) * e + (o * g + n * i + m - f) * r) : (G(y.K, 242, y.yb, y.f), o = 0);
  }
  return o;
}

function Ks(c, d, e) {
  var f;
  (e > -1 ? h[c + 16 >> 2] - 1 > e ? 3 : 2 : 2) == 2 && G(y.jc, 89, y.vb, y.kc);
  h[d + 4 >> 2] = 1;
  l[d + 8 >> 2] = l[c + 8 >> 2];
  f = c + 12 >> 2;
  var g = (e << 3) + h[f], i = d + 12, j = h[g + 4 >> 2];
  h[i >> 2] = h[g >> 2];
  h[i + 4 >> 2] = j;
  g = (e + 1 << 3) + h[f];
  i = d + 20;
  j = h[g + 4 >> 2];
  h[i >> 2] = h[g >> 2];
  h[i + 4 >> 2] = j;
  g = d + 28;
  e > 0 ? (i = (e - 1 << 3) + h[f], j = h[i + 4 >> 2], h[g >> 2] = h[i >> 2], h[g + 4 >> 2] = j, a[d + 44] = 1) : (i = c + 20, j = h[i + 4 >> 2], h[g >> 2] = h[i >> 2], h[g + 4 >> 2] = j, a[d + 44] = a[c + 36] & 1);
  g = d + 36;
  h[c + 16 >> 2] - 2 > e ? (e = (e + 2 << 3) + h[f], c = h[e >> 2], e = h[e + 4 >> 2], h[g >> 2] = c, h[g + 4 >> 2] = e, a[d + 45] = 1) : (f = c + 28, e = h[f >> 2], f = h[f + 4 >> 2], h[g >> 2] = e, h[g + 4 >> 2] = f, a[d + 45] = a[c + 37] & 1);
}

function gn(c, d) {
  var e, f, g, i = d == 0;
  a : do {
    if (i) {
      g = 0;
    } else {
      g = d > 0;
      do {
        if (g) {
          if (d > 640) {
            g = vj(d);
            break a;
          }
        } else {
          G(y.e, 104, y.N, y.za);
        }
      } while (0);
      var j = g = Dh[dn + d];
      g < 14 || G(y.e, 112, y.N, y.i);
      g = (j << 2) + c + 12 >> 2;
      f = k[g];
      if (f == 0) {
        f = c + 4 >> 2;
        var m = k[f], n = c + 8, o = h[n >> 2];
        e = c >> 2;
        m == o ? (m = h[e], o += 128, h[n >> 2] = o, n = vj(o << 3), h[e] = n, Sp(n, m, h[f] << 3), xk((h[f] << 3) + h[e], 1024), qp(m), n = h[f]) : n = m;
        o = h[e];
        m = vj(16384);
        e = (n << 3) + o + 4 >> 2;
        h[e] = m;
        j = h[cn + (j << 2) >> 2];
        h[(n << 3) + o >> 2] = j;
        n = 16384 / j | 0;
        n * j < 16385 ? o = m : (G(y.e, 140, y.N, y.mc), o = h[e]);
        n -= 1;
        m = n > 0;
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
        h[g] = h[h[e] >> 2];
        h[f] += 1;
        g = h[e];
      } else {
        h[g] = h[f >> 2], g = f;
      }
    }
  } while (0);
  return g;
}

function Ls(c, d) {
  var e;
  e = c + 102796 >> 2;
  var f = h[e];
  f > 0 || (G(y.j, 63, y.ca, y.nc), f = h[e]);
  f -= 1;
  h[(c + 102412 >> 2) + (f * 3 | 0)] != d && G(y.j, 65, y.ca, y.uc);
  (a[c + f * 12 + 102420] & 1) == 0 ? (f = c + f * 12 + 102416, h[c + 102400 >> 2] -= h[f >> 2]) : (qp(d), f = c + f * 12 + 102416);
  h[c + 102404 >> 2] -= h[f >> 2];
  h[e] -= 1;
}

function Xn(c, d, e) {
  var f, g, i = d >> 2, j = c >> 2, m = c + 12, n = c + 64, o = d + 4, q = l[o >> 2];
  (!isNaN(q) && !isNaN(0)) & q > -Infinity & q < Infinity ? (q = l[i + 2], g = (!isNaN(q) && !isNaN(0)) & q > -Infinity & q < Infinity ? 3 : 2) : g = 2;
  g == 2 && G(y.m, 27, y.q, y.Wb);
  q = d + 16;
  g = l[q >> 2];
  (!isNaN(g) && !isNaN(0)) & g > -Infinity & g < Infinity ? (g = l[i + 5], g = (!isNaN(g) && !isNaN(0)) & g > -Infinity & g < Infinity ? 6 : 5) : g = 5;
  g == 5 && G(y.m, 28, y.q, y.bc);
  g = d + 12 >> 2;
  var p = l[g];
  (!isNaN(p) && !isNaN(0)) & p > -Infinity & p < Infinity || G(y.m, 29, y.q, y.gc);
  var p = d + 24, r = l[p >> 2];
  (!isNaN(r) && !isNaN(0)) & r > -Infinity & r < Infinity || G(y.m, 30, y.q, y.oc);
  var r = d + 32, s = l[r >> 2];
  s < 0 | (!isNaN(s) && !isNaN(0)) & s > -Infinity & s < Infinity ^ 1 && G(y.m, 31, y.q, y.vc);
  s = d + 28;
  f = l[s >> 2];
  f < 0 | (!isNaN(f) && !isNaN(0)) & f > -Infinity & f < Infinity ^ 1 && G(y.m, 32, y.q, y.yc);
  f = c + 4 >> 1;
  b[f] = 0;
  var u = (a[d + 39] & 1) == 0 ? 0 : b[f] = 8;
  (a[d + 38] & 1) != 0 && (u |= 16, b[f] = u);
  (a[d + 36] & 1) != 0 && (u |= 4, b[f] = u);
  (a[d + 37] & 1) != 0 && (u |= 2, b[f] = u);
  (a[d + 40] & 1) != 0 && (b[f] = u | 32);
  h[j + 22] = e;
  d = h[o >> 2];
  o = h[o + 4 >> 2];
  h[m >> 2] = d;
  h[m + 4 >> 2] = o;
  m = l[g];
  e = Is(m);
  l[j + 5] = e;
  m = Js(m);
  l[j + 6] = m;
  l[j + 7] = 0;
  l[j + 8] = 0;
  m = c + 36;
  h[m >> 2] = d;
  h[m + 4 >> 2] = o;
  m = c + 44;
  h[m >> 2] = d;
  h[m + 4 >> 2] = o;
  l[j + 13] = l[g];
  l[j + 14] = l[g];
  l[j + 15] = 0;
  h[j + 27] = 0;
  h[j + 28] = 0;
  h[j + 23] = 0;
  h[j + 24] = 0;
  g = h[q + 4 >> 2];
  h[n >> 2] = h[q >> 2];
  h[n + 4 >> 2] = g;
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
  n == 2 ? (l[c >> 2] = 1, l[j + 30] = 1) : (l[c >> 2] = 0, l[j + 30] = 0);
  l[j + 31] = 0;
  l[j + 32] = 0;
  h[j + 37] = h[i + 11];
  h[j + 25] = 0;
  h[j + 26] = 0;
}

function hp(c, d) {
  var e, f, g, i, j, m, n, o, q, p, r, s, u, A, E, z, I = d >> 2, C = c >> 2, K = Yf;
  Yf += 16;
  var J;
  z = c + 88 >> 2;
  var M = h[z], B = h[M + 102868 >> 2];
  if ((B & 2) == 0) {
    var F = M, H = B;
  } else {
    G(y.m, 153, y.qb, y.Ac);
    var P = h[z], F = P, H = h[P + 102868 >> 2];
  }
  if ((H & 2) == 0) {
    var D = F, Q = gn(D, 44);
    if (Q == 0) {
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
    var ib = O + 4;
    h[ib >> 2] = 0;
    A = O + 32 >> 1;
    u = d + 22 >> 1;
    b[A] = b[u];
    b[A + 1] = b[u + 1];
    b[A + 2] = b[u + 2];
    a[O + 38] = a[d + 20] & 1;
    var U = h[I], N = im[h[h[U >> 2] + 8 >> 2]](U, D);
    s = O + 12 >> 2;
    h[s] = N;
    var ja = im[h[h[N >> 2] + 12 >> 2]](N), ka = gn(D, ja * 28);
    r = O + 24 >> 2;
    h[r] = ka;
    var za = ja > 0;
    a : do {
      if (za && (h[ka + 16 >> 2] = 0, h[h[r] + 24 >> 2] = -1, ja != 1)) {
        for (var S = 1; ; ) {
          h[h[r] + S * 28 + 16 >> 2] = 0;
          h[h[r] + S * 28 + 24 >> 2] = -1;
          var T = S + 1;
          if (T == ja) {
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
    var Ea = c + 4, Z = (b[Ea >> 1] & 32) == 0;
    a : do {
      if (!Z) {
        var X = h[z], aa = X + 102872, Ba = c + 12, Ca = h[s], mb = im[h[h[Ca >> 2] + 12 >> 2]](Ca);
        h[p] = mb;
        if (mb > 0) {
          var Qa = aa;
          q = X + 102876 >> 2;
          var pa = X + 102900;
          o = X + 102912 >> 2;
          var ua = X + 102908;
          n = X + 102904 >> 2;
          for (var Y = 0; ; ) {
            var Fa = h[r];
            m = Fa >> 2;
            var va = Fa + Y * 28, Ra = h[s];
            im[h[h[Ra >> 2] + 24 >> 2]](Ra, va, Ba, Y);
            var Wa = va, Xa = Rp(Qa), Ka = l[m + (Y * 7 | 0) + 1] - .10000000149011612, Za = h[q] + Xa * 36, jb = (x[0] = l[va >> 2] - .10000000149011612, w[0]), $a = (x[0] = Ka, w[0]) | 0;
            h[Za >> 2] = 0 | jb;
            h[Za + 4 >> 2] = $a;
            var pb = l[m + (Y * 7 | 0) + 3] + .10000000149011612, ga = h[q] + Xa * 36 + 8, da = (x[0] = l[m + (Y * 7 | 0) + 2] + .10000000149011612, w[0]), Ya = (x[0] = pb, w[0]) | 0;
            h[ga >> 2] = 0 | da;
            h[ga + 4 >> 2] = Ya;
            h[h[q] + Xa * 36 + 16 >> 2] = Wa;
            h[h[q] + Xa * 36 + 32 >> 2] = 0;
            As(Qa, Xa);
            h[pa >> 2] += 1;
            var ba = h[o], ha = h[ua >> 2];
            if (ba == ha) {
              var qa = h[n];
              h[ua >> 2] = ha << 1;
              var ra = vj(ha << 3);
              h[n] = ra;
              var ma = qa;
              Sp(ra, ma, h[o] << 2);
              qp(ma);
              var la = h[o];
            } else {
              la = ba;
            }
            h[(la << 2) + h[n] >> 2] = Xa;
            h[o] += 1;
            h[Fa + Y * 28 + 24 >> 2] = Xa;
            h[Fa + Y * 28 + 16 >> 2] = O;
            h[Fa + Y * 28 + 20 >> 2] = Y;
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
    h[ib >> 2] = h[j];
    h[j] = O;
    h[c + 104 >> 2] += 1;
    h[L >> 2] = c;
    var ab = l[$ >> 2] > 0;
    do {
      if (ab) {
        i = c + 116 >> 2;
        l[i] = 0;
        g = c + 120 >> 2;
        l[g] = 0;
        f = c + 124 >> 2;
        l[f] = 0;
        var ia = c + 128;
        l[ia >> 2] = 0;
        var Ma = c + 28;
        l[Ma >> 2] = 0;
        l[C + 8] = 0;
        var bb = h[C];
        if (bb == 0 || bb == 1) {
          var wb = c + 12, xb = c + 36, Kb = wb, Na = h[Kb >> 2], Ga = wb + 4, sa = h[Ga >> 2];
          h[xb >> 2] = Na;
          h[xb + 4 >> 2] = sa;
          var Ha = c + 44;
          h[Ha >> 2] = Na;
          h[Ha + 4 >> 2] = sa;
          l[C + 13] = l[C + 14];
        } else {
          bb != 2 && G(y.m, 284, y.ja, y.Hb);
          var Oa = h[j], Ua = Oa == 0;
          a : do {
            if (Ua) {
              var ca = 0, Aa = 0;
            } else {
              var cb = K, na = K + 4, La = K + 8, db = K + 12, qb = 0, ub = 0, rb = Oa;
              for (e = rb >> 2; ; ) {
                var gb = l[e];
                if (gb == 0) {
                  var kb = ub, Va = qb;
                } else {
                  var ea = h[e + 3];
                  im[h[h[ea >> 2] + 28 >> 2]](ea, K, gb);
                  var Da = l[cb >> 2];
                  l[i] += Da;
                  var Ia = ub + l[na >> 2] * Da, Sa = qb + l[La >> 2] * Da;
                  l[f] += l[db >> 2];
                  kb = Ia;
                  Va = Sa;
                }
                var vb = h[e + 1];
                if (vb == 0) {
                  ca = Va;
                  Aa = kb;
                  break a;
                } else {
                  qb = Va, ub = kb, rb = vb, e = rb >> 2;
                }
              }
            }
          } while (0);
          var Pa = l[i];
          if (Pa > 0) {
            var eb = 1 / Pa;
            l[g] = eb;
            var nb = Aa * eb, Db = ca * eb, Qb = Pa;
          } else {
            l[i] = 1, l[g] = 1, nb = Aa, Db = ca, Qb = 1;
          }
          var Ob = l[f];
          if (Ob > 0) {
            if ((b[Ea >> 1] & 16) != 0) {
              J = 31;
            } else {
              var Eb = Ob - Qb * (nb * nb + Db * Db);
              l[f] = Eb;
              if (Eb > 0) {
                var Ib = Eb;
              } else {
                G(y.m, 319, y.ja, y.Mb), Ib = l[f];
              }
              var Jb = 1 / Ib;
              J = 32;
            }
          } else {
            J = 31;
          }
          J == 31 && (Jb = l[f] = 0);
          l[ia >> 2] = Jb;
          var sb = c + 44, Kb = sb, Ga = sb + 4, Lb = h[Ga >> 2], Fb = (w[0] = h[Kb >> 2], x[0]), ob = (w[0] = Lb, x[0]), Bb = Ma, lb = (x[0] = nb, w[0]), tb = (x[0] = Db, w[0]) | 0;
          h[Bb >> 2] = 0 | lb;
          h[Bb + 4 >> 2] = tb;
          var W = c + 36, R = l[C + 6], Xb = l[C + 5], Tb = R * nb - Xb * Db + l[C + 3], yb = Xb * nb + R * Db + l[C + 4], Cb = (x[0] = Tb, w[0]), Ub = (x[0] = yb, w[0]), bc = 0 | Cb, Ja = Ub | 0;
          h[sb >> 2] = bc;
          h[sb + 4 >> 2] = Ja;
          var Mb = W;
          h[Mb >> 2] = bc;
          h[Mb + 4 >> 2] = Ja;
          var fa = l[C + 18], ya = (Tb - Fb) * fa;
          l[c + 64 >> 2] += (yb - ob) * -fa;
          l[c + 68 >> 2] += ya;
        }
      }
    } while (0);
    h[h[z] + 102868 >> 2] |= 1;
  }
  Yf = K;
}

function Ms(c, d) {
  var e, f, g;
  g = d + 48 >> 2;
  var i = d + 52;
  e = h[h[g] + 8 >> 2];
  var j = h[h[i >> 2] + 8 >> 2];
  f = h[c + 72 >> 2];
  if (f != 0 && (h[d + 4 >> 2] & 2) != 0) {
    im[h[h[f >> 2] + 12 >> 2]](f, d);
  }
  var m = d + 8, n = h[m >> 2];
  f = d + 12 >> 2;
  n != 0 && (h[n + 12 >> 2] = h[f]);
  n = h[f];
  n != 0 && (h[n + 8 >> 2] = h[m >> 2]);
  m = c + 60;
  h[m >> 2] == d && (h[m >> 2] = h[f]);
  m = d + 24;
  n = h[m >> 2];
  f = d + 28 >> 2;
  n != 0 && (h[n + 12 >> 2] = h[f]);
  n = h[f];
  n != 0 && (h[n + 8 >> 2] = h[m >> 2]);
  e += 112;
  d + 16 == h[e >> 2] && (h[e >> 2] = h[f]);
  f = d + 40;
  m = h[f >> 2];
  e = d + 44 >> 2;
  m != 0 && (h[m + 12 >> 2] = h[e]);
  m = h[e];
  m != 0 && (h[m + 8 >> 2] = h[f >> 2]);
  j += 112;
  d + 32 == h[j >> 2] && (h[j >> 2] = h[e]);
  j = h[c + 76 >> 2];
  Dh[Ns] || G(y.A, 103, y.Q, y.dc);
  h[d + 124 >> 2] > 0 && (e = h[h[g] + 8 >> 2], f = e + 4, m = b[f >> 1], (m & 2) == 0 && (b[f >> 1] = m | 2, l[e + 144 >> 2] = 0), e = h[h[i >> 2] + 8 >> 2], f = e + 4, m = b[f >> 1], (m & 2) == 0 && (b[f >> 1] = m | 2, l[e + 144 >> 2] = 0));
  g = h[h[h[g] + 12 >> 2] + 4 >> 2];
  i = h[h[h[i >> 2] + 12 >> 2] + 4 >> 2];
  g > -1 & i < 4 || (G(y.A, 114, y.Q, y.Fa), G(y.A, 115, y.Q, y.Fa));
  im[h[(Os + 4 >> 2) + (g * 12 | 0) + (i * 3 | 0)]](d, j);
  h[c + 64 >> 2] -= 1;
}

function Ps(c, d) {
  var e, f, g, i, j, m, n, o, q, p, r, s, u, A, E = Yf;
  Yf += 1040;
  var z, I = E + 1036;
  A = c + 52 >> 2;
  h[A] = 0;
  u = c + 40 >> 2;
  var C = h[u];
  if (C > 0) {
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
      if (Q == -1) {
        var O = D;
      } else {
        z = Q > -1 ? h[J >> 2] > Q ? 7 : 6 : 6;
        z == 6 && G(y.z, 159, y.R, y.s);
        var L = h[M >> 2];
        h[r] = B;
        h[q] = 256;
        h[B >> 2] = h[c >> 2];
        h[p] = 1;
        for (var ib = L + Q * 36, U = L + Q * 36 + 4, N = L + Q * 36 + 8, ja = L + Q * 36 + 12, ka = 1, za = B; ; ) {
          var S = ka - 1;
          h[p] = S;
          var T = h[za + (S << 2) >> 2];
          if (T == -1) {
            var $ = S;
          } else {
            var Ea = h[M >> 2];
            n = Ea >> 2;
            if (l[ib >> 2] - l[n + (T * 9 | 0) + 2] > 0 | l[U >> 2] - l[n + (T * 9 | 0) + 3] > 0 | l[n + (T * 9 | 0)] - l[N >> 2] > 0 | l[n + (T * 9 | 0) + 1] - l[ja >> 2] > 0) {
              $ = S;
            } else {
              var Z = Ea + T * 36 + 24;
              if (h[Z >> 2] == -1) {
                var X = h[s];
                if (X == T) {
                  $ = S;
                } else {
                  var aa = h[A], Ba = h[F >> 2];
                  if (aa == Ba) {
                    var Ca = h[o];
                    h[F >> 2] = Ba << 1;
                    var mb = vj(Ba * 24);
                    h[o] = mb;
                    var Qa = Ca;
                    Sp(mb, Qa, h[A] * 12);
                    qp(Qa);
                    var pa = h[s], ua = h[A];
                  } else {
                    pa = X, ua = aa;
                  }
                  h[h[o] + ua * 12 >> 2] = pa > T ? T : pa;
                  var Y = h[s];
                  h[h[o] + h[A] * 12 + 4 >> 2] = Y < T ? T : Y;
                  h[A] += 1;
                  $ = h[p];
                }
              } else {
                var Fa = h[q];
                if (S == Fa) {
                  h[q] = Fa << 1;
                  var va = vj(Fa << 3);
                  h[r] = va;
                  var Ra = za;
                  Sp(va, Ra, h[p] << 2);
                  za != B && qp(Ra);
                }
                h[(h[p] << 2) + h[r] >> 2] = h[Z >> 2];
                var Wa = h[p] + 1;
                h[p] = Wa;
                var Xa = Ea + T * 36 + 28, Ka = h[q];
                if (Wa == Ka) {
                  var Za = h[r];
                  h[q] = Ka << 1;
                  var jb = vj(Ka << 3);
                  h[r] = jb;
                  var $a = Za;
                  Sp(jb, $a, h[p] << 2);
                  Za != B && qp($a);
                }
                h[(h[p] << 2) + h[r] >> 2] = h[Xa >> 2];
                var pb = h[p] + 1, $ = h[p] = pb;
              }
            }
          }
          var ga = h[r];
          if ($ > 0) {
            ka = $, za = ga;
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
    var Ya = h[A], ba = H;
  } else {
    Ya = 0, ba = c + 44;
  }
  m = ba >> 2;
  h[u] = 0;
  var ha = h[m], qa = ha + Ya * 12;
  h[I >> 2] = 2;
  Qs(ha, qa, I);
  var ra = h[A] > 0;
  a : do {
    if (ra) {
      var ma = c + 12, la = c + 4, xa = d + 68, ab = d + 76;
      j = d + 60 >> 2;
      var ia = d + 64, Ma = h[m], bb = 0, wb = Ma, xb = h[Ma >> 2];
      b : for (;;) {
        var Kb = wb + bb * 12;
        z = xb > -1 ? h[ma >> 2] > xb ? 33 : 32 : 32;
        z == 32 && G(y.z, 153, y.na, y.s);
        var Na = h[la >> 2], Ga = h[(Na + 16 >> 2) + (xb * 9 | 0)], sa = wb + bb * 12 + 4, Ha = h[sa >> 2];
        if (Ha > -1) {
          if (h[ma >> 2] > Ha) {
            var Oa = Na;
            z = 36;
          } else {
            z = 35;
          }
        } else {
          z = 35;
        }
        z == 35 && (G(y.z, 153, y.na, y.s), Oa = h[la >> 2]);
        var Ua = h[(Oa + 16 >> 2) + (Ha * 9 | 0)], ca = h[Ga + 16 >> 2], Aa = h[Ua + 16 >> 2], cb = k[Ga + 20 >> 2], na = k[Ua + 20 >> 2], La = h[ca + 8 >> 2], db = h[Aa + 8 >> 2], qb = La == db;
        c : do {
          if (!qb) {
            for (var ub = db + 112; ; ) {
              var rb = h[ub >> 2];
              if (rb == 0) {
                break;
              }
              if (h[rb >> 2] == La) {
                i = h[rb + 4 >> 2] >> 2;
                var gb = h[i + 12], kb = h[i + 13], Va = h[i + 14], ea = h[i + 15];
                if (gb == ca & kb == Aa & Va == cb & ea == na) {
                  break c;
                }
                if (gb == Aa & kb == ca & Va == na & ea == cb) {
                  break c;
                }
              }
              ub = rb + 12;
            }
            var Da = La;
            if (!(h[db >> 2] != 2 && h[La >> 2] != 2)) {
              for (var Ia = db + 108; ; ) {
                var Sa = h[Ia >> 2];
                if (Sa == 0) {
                  break;
                }
                if (h[Sa >> 2] == Da && (a[h[Sa + 4 >> 2] + 61] & 1) == 0) {
                  break c;
                }
                Ia = Sa + 12;
              }
              var vb = h[xa >> 2];
              if (vb == 0 || im[h[h[vb >> 2] + 8 >> 2]](vb, ca, Aa)) {
                var Pa = ca, eb = Aa, nb = h[ab >> 2];
                Dh[Ns] || (h[Os >> 2] = 4, h[Os + 4 >> 2] = 6, a[Os + 8] = 1, h[Os + 96 >> 2] = 8, h[Os + 100 >> 2] = 10, a[Os + 104] = 1, h[Os + 24 >> 2] = 8, h[Os + 28 >> 2] = 10, a[Os + 32] = 0, h[Os + 120 >> 2] = 12, h[Os + 124 >> 2] = 14, a[Os + 128] = 1, h[Os + 48 >> 2] = 16, h[Os + 52 >> 2] = 18, a[Os + 56] = 1, h[Os + 12 >> 2] = 16, h[Os + 16 >> 2] = 18, a[Os + 20] = 0, h[Os + 72 >> 2] = 20, h[Os + 76 >> 2] = 22, a[Os + 80] = 1, h[Os + 108 >> 2] = 20, h[Os + 112 >> 2] = 22, a[Os + 116] = 0, h[Os + 144 >> 2] = 24, h[Os + 148 >> 2] = 26, a[Os + 152] = 1, h[Os + 36 >> 2] = 24, h[Os + 40 >> 2] = 26, a[Os + 44] = 0, h[Os + 168 >> 2] = 28, h[Os + 172 >> 2] = 30, a[Os + 176] = 1, h[Os + 132 >> 2] = 28, h[Os + 136 >> 2] = 30, a[Os + 140] = 0, a[Ns] = 1);
                var Db = k[h[ca + 12 >> 2] + 4 >> 2], Qb = k[h[Aa + 12 >> 2] + 4 >> 2];
                Db < 4 || G(y.A, 80, y.ma, y.Kb);
                Qb < 4 || G(y.A, 81, y.ma, y.Yb);
                var Ob = k[(Os >> 2) + (Db * 12 | 0) + (Qb * 3 | 0)];
                if (Ob != 0) {
                  var Eb = (a[Os + Db * 48 + Qb * 12 + 8] & 1) == 0 ? im[Ob](eb, na, Pa, cb, nb) : im[Ob](Pa, cb, eb, na, nb);
                  g = Eb >> 2;
                  var Ib = Eb;
                  if (Eb != 0) {
                    var Jb = k[h[g + 12] + 8 >> 2], sb = k[h[g + 13] + 8 >> 2];
                    h[g + 2] = 0;
                    h[g + 3] = h[j];
                    var Lb = h[j];
                    Lb != 0 && (h[Lb + 8 >> 2] = Ib);
                    h[j] = Ib;
                    var Fb = Eb + 16;
                    h[g + 5] = Eb;
                    h[Fb >> 2] = sb;
                    h[g + 6] = 0;
                    f = Jb + 112 >> 2;
                    h[g + 7] = h[f];
                    var ob = h[f];
                    ob != 0 && (h[ob + 8 >> 2] = Fb);
                    h[f] = Fb;
                    var Bb = Eb + 32;
                    h[g + 9] = Eb;
                    h[Bb >> 2] = Jb;
                    h[g + 10] = 0;
                    e = sb + 112 >> 2;
                    h[g + 11] = h[e];
                    var lb = h[e];
                    lb != 0 && (h[lb + 8 >> 2] = Bb);
                    h[e] = Bb;
                    var tb = Jb + 4, W = b[tb >> 1];
                    (W & 2) == 0 && (b[tb >> 1] = W | 2, l[Jb + 144 >> 2] = 0);
                    var R = sb + 4, Xb = b[R >> 1];
                    (Xb & 2) == 0 && (b[R >> 1] = Xb | 2, l[sb + 144 >> 2] = 0);
                    h[ia >> 2] += 1;
                  }
                }
              }
            }
          }
        } while (0);
        for (var Tb = h[A], yb = bb; ; ) {
          var Cb = yb + 1;
          if (Cb >= Tb) {
            break a;
          }
          var Ub = k[m], bc = k[(Ub >> 2) + (Cb * 3 | 0)];
          if (bc != h[Kb >> 2]) {
            bb = Cb;
            wb = Ub;
            xb = bc;
            continue b;
          }
          if (h[(Ub + 4 >> 2) + (Cb * 3 | 0)] == h[sa >> 2]) {
            yb = Cb;
          } else {
            bb = Cb;
            wb = Ub;
            xb = bc;
            continue b;
          }
        }
      }
    }
  } while (0);
  Yf = E;
}

function Qs(c, d, e) {
  var f, g, i, j, m, n, o, q, p, r, s, u, A, E, z, I, C, K, J, M, B = e >> 2, F = Yf;
  Yf += 12;
  var H, P = d, D = c;
  a : for (;;) {
    var Q = D, O = D + 12, L = D, ib = D + 4, U = D + 8;
    M = D >> 2;
    var N = P;
    b : for (;;) {
      var ja = N, ka = ja - Q, za = ka / 12 | 0;
      if (za == 0 || za == 1) {
        H = 52;
        break a;
      } else {
        if (za == 2) {
          var S = N - 12;
          if (!im[h[B]](S, D)) {
            H = 52;
            break a;
          }
          var T = h[L >> 2], $ = h[ib >> 2], Ea = h[U >> 2];
          J = S >> 2;
          h[M] = h[J];
          h[M + 1] = h[J + 1];
          h[M + 2] = h[J + 2];
          h[S >> 2] = T;
          h[N - 12 + 4 >> 2] = $;
          h[N - 12 + 8 >> 2] = Ea;
          H = 52;
          break a;
        } else {
          if (za == 3) {
            Rs(D, O, N - 12, e);
            H = 52;
            break a;
          } else {
            if (za == 4) {
              Ss(D, O, D + 24, N - 12, e);
              H = 52;
              break a;
            } else {
              if (za == 5) {
                Ts(D, O, D + 24, D + 36, N - 12, e);
                H = 52;
                break a;
              } else {
                if (ka < 372) {
                  H = 9;
                  break a;
                }
                var Z = N - 12, X = ka / 24 | 0, aa = D + X * 12;
                if (ka > 11988) {
                  var Ba = ka / 48 | 0, Ca = Ts(D, D + Ba * 12, aa, D + (Ba + X) * 12, Z, e);
                } else {
                  Ca = Rs(D, aa, Z, e);
                }
                if (im[h[B]](D, aa)) {
                  var mb = Z, Qa = Ca;
                } else {
                  for (var pa = Z; ; ) {
                    var ua = pa - 12, Y = k[B];
                    if (D == ua) {
                      break b;
                    }
                    if (im[Y](ua, aa)) {
                      break;
                    } else {
                      pa = ua;
                    }
                  }
                  var Fa = h[L >> 2], va = h[ib >> 2], Ra = h[U >> 2];
                  K = ua >> 2;
                  h[M] = h[K];
                  h[M + 1] = h[K + 1];
                  h[M + 2] = h[K + 2];
                  h[ua >> 2] = Fa;
                  h[pa - 12 + 4 >> 2] = va;
                  h[pa - 12 + 8 >> 2] = Ra;
                  mb = ua;
                  Qa = Ca + 1;
                }
                var Wa = O < mb;
                c : do {
                  if (Wa) {
                    for (var Xa = mb, Ka = O, Za = Qa, jb = aa; ; ) {
                      var $a = im[h[B]](Ka, jb);
                      d : do {
                        if ($a) {
                          for (var pb = Ka; ; ) {
                            var ga = pb + 12;
                            if (im[h[B]](ga, jb)) {
                              pb = ga;
                            } else {
                              var da = ga;
                              C = da >> 2;
                              break d;
                            }
                          }
                        } else {
                          da = Ka, C = da >> 2;
                        }
                      } while (0);
                      for (var Ya = Xa; ; ) {
                        var ba = Ya - 12;
                        if (im[h[B]](ba, jb)) {
                          break;
                        } else {
                          Ya = ba;
                        }
                      }
                      if (da > ba) {
                        var ha = da;
                        I = ha >> 2;
                        var qa = Za, ra = jb;
                        z = ra >> 2;
                        break c;
                      }
                      var ma = h[C], la = h[C + 1], xa = h[C + 2];
                      E = da >> 2;
                      A = ba >> 2;
                      h[E] = h[A];
                      h[E + 1] = h[A + 1];
                      h[E + 2] = h[A + 2];
                      h[ba >> 2] = ma;
                      h[Ya - 12 + 4 >> 2] = la;
                      h[Ya - 12 + 8 >> 2] = xa;
                      var ab = jb == da ? ba : jb, Xa = ba, Ka = da + 12;
                      Za += 1;
                      jb = ab;
                    }
                  } else {
                    ha = O, I = ha >> 2, qa = Qa, ra = aa, z = ra >> 2;
                  }
                } while (0);
                if (ha == ra) {
                  var ia = qa;
                } else {
                  if (im[h[B]](ra, ha)) {
                    var Ma = h[I], bb = h[I + 1], wb = h[I + 2];
                    u = ha >> 2;
                    s = ra >> 2;
                    h[u] = h[s];
                    h[u + 1] = h[s + 1];
                    h[u + 2] = h[s + 2];
                    h[z] = Ma;
                    h[z + 1] = bb;
                    h[z + 2] = wb;
                    ia = qa + 1;
                  } else {
                    ia = qa;
                  }
                }
                if (ia == 0) {
                  var xb = Us(D, ha, e), Kb = ha + 12;
                  if (Us(Kb, N, e)) {
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
                      D = Kb;
                      continue a;
                    }
                  }
                }
                var Na = ha;
                if (Na - Q < ja - Na) {
                  Qs(D, ha, e);
                  P = N;
                  D = ha + 12;
                  continue a;
                } else {
                  Qs(ha + 12, N, e), N = ha;
                }
              }
            }
          }
        }
      }
    }
    if (im[Y](D, Z)) {
      var Ga = O;
    } else {
      var sa = O;
      for (r = sa >> 2; ; ) {
        if (sa == Z) {
          H = 52;
          break a;
        }
        if (im[h[B]](D, sa)) {
          break;
        }
        sa += 12;
        r = sa >> 2;
      }
      var Ha = h[r], Oa = h[r + 1], Ua = h[r + 2];
      p = sa >> 2;
      q = Z >> 2;
      h[p] = h[q];
      h[p + 1] = h[q + 1];
      h[p + 2] = h[q + 2];
      h[Z >> 2] = Ha;
      h[N - 12 + 4 >> 2] = Oa;
      h[N - 12 + 8 >> 2] = Ua;
      Ga = sa + 12;
    }
    if (Ga == Z) {
      H = 52;
      break;
    } else {
      var ca = Z, Aa = Ga;
    }
    for (;;) {
      var cb = im[h[B]](D, Aa);
      b : do {
        if (cb) {
          var na = Aa;
          o = na >> 2;
        } else {
          for (var La = Aa; ; ) {
            var db = La + 12;
            if (im[h[B]](D, db)) {
              na = db;
              o = na >> 2;
              break b;
            } else {
              La = db;
            }
          }
        }
      } while (0);
      for (var qb = ca; ; ) {
        var ub = qb - 12;
        if (im[h[B]](D, ub)) {
          qb = ub;
        } else {
          break;
        }
      }
      if (na >= ub) {
        P = N;
        D = na;
        continue a;
      }
      var rb = h[o], gb = h[o + 1], kb = h[o + 2];
      n = na >> 2;
      m = ub >> 2;
      h[n] = h[m];
      h[n + 1] = h[m + 1];
      h[n + 2] = h[m + 2];
      h[ub >> 2] = rb;
      h[qb - 12 + 4 >> 2] = gb;
      h[qb - 12 + 8 >> 2] = kb;
      ca = ub;
      Aa = na + 12;
    }
  }
  a : do {
    if (H == 9) {
      j = F >> 2;
      var Va = D + 24;
      Rs(D, O, Va, e);
      var ea = D + 36;
      if (ea != N) {
        for (var Da = Va, Ia = ea; ; ) {
          if (im[h[B]](Ia, Da)) {
            i = Ia >> 2;
            h[j] = h[i];
            h[j + 1] = h[i + 1];
            h[j + 2] = h[i + 2];
            for (var Sa = Da, vb = Ia; ; ) {
              g = vb >> 2;
              f = Sa >> 2;
              h[g] = h[f];
              h[g + 1] = h[f + 1];
              h[g + 2] = h[f + 2];
              if (Sa == D) {
                break;
              }
              var Pa = Sa - 12;
              if (im[h[B]](F, Pa)) {
                vb = Sa, Sa = Pa;
              } else {
                break;
              }
            }
            h[f] = h[j];
            h[f + 1] = h[j + 1];
            h[f + 2] = h[j + 2];
          }
          var eb = Ia + 12;
          if (eb == N) {
            break a;
          } else {
            Da = Ia, Ia = eb;
          }
        }
      }
    }
  } while (0);
  Yf = F;
}

function Rs(c, d, e, f) {
  var g, i, j = e >> 2, m = c >> 2;
  g = im[h[f >> 2]](d, c);
  var n = im[h[f >> 2]](e, d);
  if (g) {
    var o = h[m];
    g = h[m + 1];
    m = h[m + 2];
    i = c >> 2;
    n ? (d = e >> 2, h[i] = h[d], h[i + 1] = h[d + 1], h[i + 2] = h[d + 2], h[j] = o, h[j + 1] = g, h[j + 2] = m, j = 1) : (c = d >> 2, h[i] = h[c], h[i + 1] = h[c + 1], h[i + 2] = h[c + 2], h[d >> 2] = o, o = d + 4, h[o >> 2] = g, g = d + 8, h[g >> 2] = m, im[h[f >> 2]](e, d) ? (d = h[d >> 2], f = h[o >> 2], m = h[g >> 2], e >>= 2, h[c] = h[e], h[c + 1] = h[e + 1], h[c + 2] = h[e + 2], h[j] = d, h[j + 1] = f, h[j + 2] = m, j = 2) : j = 1);
  } else {
    if (n) {
      i = h[d >> 2];
      var o = d + 4, q = h[o >> 2], n = d + 8, p = h[n >> 2];
      g = d >> 2;
      e >>= 2;
      h[g] = h[e];
      h[g + 1] = h[e + 1];
      h[g + 2] = h[e + 2];
      h[j] = i;
      h[j + 1] = q;
      h[j + 2] = p;
      im[h[f >> 2]](d, c) ? (j = h[m], e = h[m + 1], f = h[m + 2], c >>= 2, h[c] = h[g], h[c + 1] = h[g + 1], h[c + 2] = h[g + 2], h[d >> 2] = j, h[o >> 2] = e, h[n >> 2] = f, j = 2) : j = 1;
    } else {
      j = 0;
    }
  }
  return j;
}

function Ss(c, d, e, f, g) {
  var i, j, m = Rs(c, d, e, g);
  if (im[h[g >> 2]](f, e)) {
    var n = h[e >> 2], o = e + 4, q = h[o >> 2], p = e + 8, r = h[p >> 2];
    j = e >> 2;
    i = f >> 2;
    h[j] = h[i];
    h[j + 1] = h[i + 1];
    h[j + 2] = h[i + 2];
    h[f >> 2] = n;
    h[f + 4 >> 2] = q;
    h[f + 8 >> 2] = r;
    f = m + 1;
    if (im[h[g >> 2]](e, d)) {
      q = h[d >> 2];
      i = d + 4;
      var r = h[i >> 2], n = d + 8, s = h[n >> 2], f = d >> 2;
      h[f] = h[j];
      h[f + 1] = h[j + 1];
      h[f + 2] = h[j + 2];
      h[e >> 2] = q;
      h[o >> 2] = r;
      h[p >> 2] = s;
      e = m + 2;
      im[h[g >> 2]](d, c) ? (g = h[c >> 2], e = h[c + 4 >> 2], j = h[c + 8 >> 2], c >>= 2, h[c] = h[f], h[c + 1] = h[f + 1], h[c + 2] = h[f + 2], h[d >> 2] = g, h[i >> 2] = e, h[n >> 2] = j, d = m + 3) : d = e;
    } else {
      d = f;
    }
  } else {
    d = m;
  }
  return d;
}

function Ts(c, d, e, f, g, i) {
  var j, m, n = Ss(c, d, e, f, i);
  if (im[h[i >> 2]](g, f)) {
    var o = h[f >> 2], q = f + 4, p = h[q >> 2], r = f + 8, s = h[r >> 2];
    m = f >> 2;
    j = g >> 2;
    h[m] = h[j];
    h[m + 1] = h[j + 1];
    h[m + 2] = h[j + 2];
    h[g >> 2] = o;
    h[g + 4 >> 2] = p;
    h[g + 8 >> 2] = s;
    g = n + 1;
    if (im[h[i >> 2]](f, e)) {
      p = h[e >> 2];
      j = e + 4;
      var s = h[j >> 2], o = e + 8, u = h[o >> 2], g = e >> 2;
      h[g] = h[m];
      h[g + 1] = h[m + 1];
      h[g + 2] = h[m + 2];
      h[f >> 2] = p;
      h[q >> 2] = s;
      h[r >> 2] = u;
      f = n + 2;
      im[h[i >> 2]](e, d) ? (r = h[d >> 2], m = d + 4, p = h[m >> 2], q = d + 8, s = h[q >> 2], f = d >> 2, h[f] = h[g], h[f + 1] = h[g + 1], h[f + 2] = h[g + 2], h[e >> 2] = r, h[j >> 2] = p, h[o >> 2] = s, e = n + 3, im[h[i >> 2]](d, c) ? (i = h[c >> 2], e = h[c + 4 >> 2], g = h[c + 8 >> 2], c >>= 2, h[c] = h[f], h[c + 1] = h[f + 1], h[c + 2] = h[f + 2], h[d >> 2] = i, h[m >> 2] = e, h[q >> 2] = g, d = n + 4) : d = e) : d = f;
    } else {
      d = g;
    }
  } else {
    d = n;
  }
  return d;
}

function Us(c, d, e) {
  var f, g, i, j, m = Yf;
  Yf += 12;
  var n = (d - c) / 12 | 0;
  a : do {
    if (n == 0 || n == 1) {
      i = 1;
    } else {
      if (n == 2) {
        var o = d - 12;
        if (im[h[e >> 2]](o, c)) {
          var q = h[c >> 2];
          g = h[c + 4 >> 2];
          var p = h[c + 8 >> 2];
          j = c >> 2;
          i = o >> 2;
          h[j] = h[i];
          h[j + 1] = h[i + 1];
          h[j + 2] = h[i + 2];
          h[o >> 2] = q;
          h[d - 12 + 4 >> 2] = g;
          h[d - 12 + 8 >> 2] = p;
        }
        i = 1;
      } else {
        if (n == 3) {
          Rs(c, c + 12, d - 12, e), i = 1;
        } else {
          if (n == 4) {
            Ss(c, c + 12, c + 24, d - 12, e), i = 1;
          } else {
            if (n == 5) {
              Ts(c, c + 12, c + 24, c + 36, d - 12, e), i = 1;
            } else {
              q = c + 24;
              Rs(c, c + 12, q, e);
              i = m >> 2;
              j = c + 36;
              for (o = 0; ; ) {
                if (j == d) {
                  i = 1;
                  break a;
                }
                if (im[h[e >> 2]](j, q)) {
                  g = j >> 2;
                  h[i] = h[g];
                  h[i + 1] = h[g + 1];
                  h[i + 2] = h[g + 2];
                  for (g = j; ; ) {
                    g >>= 2;
                    f = q >> 2;
                    h[g] = h[f];
                    h[g + 1] = h[f + 1];
                    h[g + 2] = h[f + 2];
                    if (q == c) {
                      break;
                    }
                    p = q - 12;
                    if (im[h[e >> 2]](m, p)) {
                      g = q, q = p;
                    } else {
                      break;
                    }
                  }
                  h[f] = h[i];
                  h[f + 1] = h[i + 1];
                  h[f + 2] = h[i + 2];
                  o += 1;
                  if (o == 8) {
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
  Yf = m;
  return i;
}

function Vs(c, d, e, f) {
  var g, i, j, m, n, o, q, p, r, s, u, A, E = Yf;
  Yf += 32;
  var z, I = E + 16, C = c + 28, K = h[C >> 2] > 0;
  a : do {
    if (K) {
      var J = c + 24, M = c + 12, B = E, F = I, H = E + 4, P = I + 4, D = E + 8, Q = I + 8, O = E + 12, L = I + 12, ib = f, U = e, N = f + 4, ja = e + 4, ka = d;
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
        var $ = T + S * 28, Ea = h[M >> 2], Z = T + S * 28 + 20;
        im[h[h[Ea >> 2] + 24 >> 2]](Ea, E, e, h[Z >> 2]);
        var X = h[M >> 2];
        im[h[h[X >> 2] + 24 >> 2]](X, I, f, h[Z >> 2]);
        var aa = l[B >> 2], Ba = l[F >> 2], Ca = l[H >> 2], mb = l[P >> 2], Qa = Ca < mb ? Ca : mb, pa = $, ua = (x[0] = aa < Ba ? aa : Ba, w[0]), Y = (x[0] = Qa, w[0]) | 0;
        h[pa >> 2] = 0 | ua;
        h[pa + 4 >> 2] = Y;
        var Fa = l[D >> 2], va = l[Q >> 2], Ra = l[O >> 2], Wa = l[L >> 2], Xa = Ra > Wa ? Ra : Wa, Ka = T + S * 28 + 8, Za = (x[0] = Fa > va ? Fa : va, w[0]), jb = (x[0] = Xa, w[0]) | 0;
        h[Ka >> 2] = 0 | Za;
        h[Ka + 4 >> 2] = jb;
        var $a = l[ib >> 2] - l[U >> 2], pb = l[N >> 2] - l[ja >> 2], ga = k[n + (S * 7 | 0) + 6];
        z = ga > -1 ? h[s] > ga ? 5 : 4 : 4;
        z == 4 && G(y.d, 135, y.Y, y.s);
        var da = h[r], Ya = da;
        if (h[(Ya + 24 >> 2) + (ga * 9 | 0)] == -1) {
          var ba = Ya;
          m = ba >> 2;
          var ha = da;
        } else {
          G(y.d, 137, y.Y, y.qc);
          var qa = h[r], ba = qa;
          m = ba >> 2;
          ha = qa;
        }
        var ra = $;
        if (l[m + (ga * 9 | 0)] > l[ra >> 2]) {
          var ma = T + S * 28 + 4;
          z = 12;
        } else {
          var la = T + S * 28 + 4;
          l[m + (ga * 9 | 0) + 1] > l[la >> 2] ? (ma = la, z = 12) : l[n + (S * 7 | 0) + 2] > l[m + (ga * 9 | 0) + 2] ? (ma = la, z = 12) : l[n + (S * 7 | 0) + 3] > l[m + (ga * 9 | 0) + 3] ? (ma = la, z = 12) : z = 42;
        }
        if (z == 12) {
          var xa = h[p] == ga;
          b : do {
            if (xa) {
              h[p] = -1;
            } else {
              var ab = ha;
              j = ab >> 2;
              var ia = k[j + (ga * 9 | 0) + 5], Ma = k[j + (ia * 9 | 0) + 5], bb = h[j + (ia * 9 | 0) + 6], wb = bb == ga ? h[j + (ia * 9 | 0) + 7] : bb;
              if (Ma == -1) {
                h[p] = wb, h[j + (wb * 9 | 0) + 5] = -1, z = ia > -1 ? h[s] > ia ? 30 : 29 : 29, z == 29 && G(y.d, 97, y.D, y.va), h[q] > 0 || G(y.d, 98, y.D, y.Ea), h[h[r] + ia * 36 + 20 >> 2] = h[o], h[h[r] + ia * 36 + 32 >> 2] = -1, h[o] = ia, h[q] -= 1;
              } else {
                var xb = ab + Ma * 36 + 24;
                h[xb >> 2] == ia ? h[xb >> 2] = wb : h[j + (Ma * 9 | 0) + 7] = wb;
                h[h[r] + wb * 36 + 20 >> 2] = Ma;
                z = ia > -1 ? h[s] > ia ? 23 : 22 : 22;
                z == 22 && G(y.d, 97, y.D, y.va);
                h[q] > 0 || G(y.d, 98, y.D, y.Ea);
                h[h[r] + ia * 36 + 20 >> 2] = h[o];
                h[h[r] + ia * 36 + 32 >> 2] = -1;
                h[o] = ia;
                h[q] -= 1;
                for (var Kb = Ma; ; ) {
                  var Na = Bs(ka, Kb), Ga = h[r];
                  i = Ga >> 2;
                  var sa = h[i + (Na * 9 | 0) + 6], Ha = h[i + (Na * 9 | 0) + 7], Oa = l[i + (sa * 9 | 0)], Ua = l[i + (Ha * 9 | 0)], ca = l[i + (sa * 9 | 0) + 1], Aa = l[i + (Ha * 9 | 0) + 1], cb = ca < Aa ? ca : Aa, na = Ga + Na * 36, La = (x[0] = Oa < Ua ? Oa : Ua, w[0]), db = (x[0] = cb, w[0]) | 0;
                  h[na >> 2] = 0 | La;
                  h[na + 4 >> 2] = db;
                  var qb = l[i + (sa * 9 | 0) + 2], ub = l[i + (Ha * 9 | 0) + 2], rb = l[i + (sa * 9 | 0) + 3], gb = l[i + (Ha * 9 | 0) + 3], kb = rb > gb ? rb : gb, Va = Ga + Na * 36 + 8, ea = (x[0] = qb > ub ? qb : ub, w[0]), Da = (x[0] = kb, w[0]) | 0;
                  h[Va >> 2] = 0 | ea;
                  h[Va + 4 >> 2] = Da;
                  var Ia = h[r], Sa = h[(Ia + 32 >> 2) + (sa * 9 | 0)], vb = h[(Ia + 32 >> 2) + (Ha * 9 | 0)];
                  h[Ia + Na * 36 + 32 >> 2] = (Sa > vb ? Sa : vb) + 1;
                  var Pa = h[(h[r] + 20 >> 2) + (Na * 9 | 0)];
                  if (Pa == -1) {
                    break b;
                  } else {
                    Kb = Pa;
                  }
                }
              }
            }
          } while (0);
          var eb = l[ra >> 2] - .10000000149011612, nb = l[ma >> 2] - .10000000149011612, Db = l[n + (S * 7 | 0) + 2] + .10000000149011612, Qb = l[n + (S * 7 | 0) + 3] + .10000000149011612, Ob = $a * 2, Eb = pb * 2;
          if (Ob < 0) {
            var Ib = eb + Ob, Jb = Db;
          } else {
            Ib = eb, Jb = Db + Ob;
          }
          if (Eb < 0) {
            var sb = nb + Eb, Lb = Qb;
          } else {
            sb = nb, Lb = Qb + Eb;
          }
          g = h[r] >> 2;
          l[g + (ga * 9 | 0)] = Ib;
          l[g + (ga * 9 | 0) + 1] = sb;
          l[g + (ga * 9 | 0) + 2] = Jb;
          l[g + (ga * 9 | 0) + 3] = Lb;
          As(ka, ga);
          var Fb = h[A], ob = h[za >> 2];
          if (Fb == ob) {
            var Bb = h[u];
            h[za >> 2] = ob << 1;
            var lb = vj(ob << 3);
            h[u] = lb;
            var tb = Bb;
            Sp(lb, tb, h[A] << 2);
            qp(tb);
            var W = h[A];
          } else {
            W = Fb;
          }
          h[(W << 2) + h[u] >> 2] = ga;
          h[A] += 1;
        }
        var R = S + 1;
        if (R < h[C >> 2]) {
          S = R;
        } else {
          break a;
        }
      }
    }
  } while (0);
  Yf = E;
}

function Ws(c, d, e, f, g, i) {
  var j, m, n, o, q = c >> 2;
  j = c + 40 >> 2;
  h[j] = d;
  h[q + 11] = e;
  h[q + 12] = f;
  h[q + 7] = 0;
  h[q + 9] = 0;
  h[q + 8] = 0;
  c >>= 2;
  h[c] = g;
  h[q + 1] = i;
  m = d << 2;
  d = g + 102796 >> 2;
  i = h[d];
  i < 32 ? n = i : (G(y.j, 38, y.n, y.p), n = h[d]);
  i = g + n * 12 + 102412 >> 2;
  h[(g + 102416 >> 2) + (n * 3 | 0)] = m;
  o = g + 102400 >> 2;
  var p = h[o];
  p + m > 102400 ? (o = vj(m), h[i] = o, a[g + n * 12 + 102420] = 1) : (h[i] = g + p, a[g + n * 12 + 102420] = 0, h[o] += m);
  n = g + 102404;
  m = h[n >> 2] + m;
  h[n >> 2] = m;
  g += 102408;
  n = h[g >> 2];
  h[g >> 2] = n > m ? n : m;
  h[d] += 1;
  h[q + 2] = h[i];
  g = h[c];
  i = e << 2;
  e = g + 102796 >> 2;
  d = h[e];
  d < 32 ? m = d : (G(y.j, 38, y.n, y.p), m = h[e]);
  d = g + m * 12 + 102412;
  h[g + m * 12 + 102416 >> 2] = i;
  n = g + 102400 >> 2;
  o = h[n];
  o + i > 102400 ? (n = vj(i), h[d >> 2] = n, a[g + m * 12 + 102420] = 1) : (h[d >> 2] = g + o, a[g + m * 12 + 102420] = 0, h[n] += i);
  m = g + 102404;
  i = h[m >> 2] + i;
  h[m >> 2] = i;
  g += 102408;
  m = h[g >> 2];
  h[g >> 2] = m > i ? m : i;
  h[e] += 1;
  h[q + 3] = h[d >> 2];
  e = h[c];
  d = f << 2;
  f = e + 102796 >> 2;
  g = h[f];
  g < 32 ? i = g : (G(y.j, 38, y.n, y.p), i = h[f]);
  g = e + i * 12 + 102412;
  h[e + i * 12 + 102416 >> 2] = d;
  m = e + 102400 >> 2;
  n = h[m];
  n + d > 102400 ? (m = vj(d), h[g >> 2] = m, a[e + i * 12 + 102420] = 1) : (h[g >> 2] = e + n, a[e + i * 12 + 102420] = 0, h[m] += d);
  i = e + 102404;
  d = h[i >> 2] + d;
  h[i >> 2] = d;
  e += 102408;
  i = h[e >> 2];
  h[e >> 2] = i > d ? i : d;
  h[f] += 1;
  h[q + 4] = h[g >> 2];
  g = h[c];
  d = h[j] * 12;
  f = g + 102796 >> 2;
  e = h[f];
  e < 32 ? i = e : (G(y.j, 38, y.n, y.p), i = h[f]);
  e = g + i * 12 + 102412;
  h[g + i * 12 + 102416 >> 2] = d;
  m = g + 102400 >> 2;
  n = h[m];
  n + d > 102400 ? (m = vj(d), h[e >> 2] = m, a[g + i * 12 + 102420] = 1) : (h[e >> 2] = g + n, a[g + i * 12 + 102420] = 0, h[m] += d);
  i = g + 102404;
  d = h[i >> 2] + d;
  h[i >> 2] = d;
  g += 102408;
  i = h[g >> 2];
  h[g >> 2] = i > d ? i : d;
  h[f] += 1;
  h[q + 6] = h[e >> 2];
  c = h[c];
  e = h[j] * 12;
  j = c + 102796 >> 2;
  f = h[j];
  f < 32 ? g = f : (G(y.j, 38, y.n, y.p), g = h[j]);
  f = c + g * 12 + 102412;
  h[c + g * 12 + 102416 >> 2] = e;
  d = c + 102400 >> 2;
  i = h[d];
  i + e > 102400 ? (d = vj(e), h[f >> 2] = d, a[c + g * 12 + 102420] = 1) : (h[f >> 2] = c + i, a[c + g * 12 + 102420] = 0, h[d] += e);
  g = c + 102404;
  e = h[g >> 2] + e;
  h[g >> 2] = e;
  c += 102408;
  g = h[c >> 2];
  h[c >> 2] = g > e ? g : e;
  h[j] += 1;
  h[q + 5] = h[f >> 2];
}

function jp(c) {
  var d, e, f, g, i, j, m, n, o, q, p, r, s, u, A, E, z, I, C, K, J, M, B, F, H, P, D, Q, O, L, ib, U, N, ja, ka, za, S, T, $, Ea, Z, X, aa, Ba, Ca, mb, Qa, pa, ua, Y, Fa, va, Ra, Wa, Xa, Ka, Za, jb, $a, pb, ga, da, Ya, ba, ha, qa, ra, ma, la, xa, ab, ia, Ma, bb, wb, xb, Kb, Na, Ga, sa, Ha, Oa, Ua, ca, Aa, cb, na, La, db, qb, ub, rb, gb, kb, Va, ea, Da, Ia, Sa, vb, Pa, eb, nb, Db, Qb, Ob, Eb, Ib, Jb, sb, Lb, Fb, ob, Bb, lb, tb = c >> 2, W = Yf;
  Yf += 1012;
  var R, Xb = W + 16, Tb = W + 32, yb = W + 52, Cb = W + 72, Ub = W + 116, bc = W + 168, Ja = W + 180, Mb = W + 272, fa = W + 296, ya = W + 396, zb = W + 412, ta = W + 464, cc = W + 596, gc = W + 604, Pb = W + 608, pc = W + 624, Vb = W + 640, wc = W + 660, Xc = W + 668, nc = W + 676, uc = W + 684, hc = W + 692, ic = W + 700, yc = W + 708, Ab = W + 728, hb = W + 736, dc = W + 768, ec = W + 812, qc = W + 864, Rc = W + 880, Cc = W + 888, Yb = W + 896, dd = W + 948, Sc = W + 956, Gb = W + 964, Wb = W + 972, jc = W + 980, Dc = W + 988, ed = W + 996, rc = W + 1004;
  Xs(rc);
  var Ec = h[rc >> 2], Fc = Math.floor(h[rc + 4 >> 2] * .0010000000474974513);
  lb = c + 102868 >> 2;
  var fc = h[lb], sc = c + 102872;
  if ((fc & 1) == 0) {
    var fd = fc;
  } else {
    Ps(sc, sc);
    var Tc = h[lb] & -2, fd = h[lb] = Tc;
  }
  h[lb] = fd | 2;
  var wd = c + 102988, kc = l[wd >> 2] * .01666666753590107, vc = a[c + 102992] & 1;
  Xs(ed);
  var Kd = h[ed >> 2], xd = Math.floor(h[ed + 4 >> 2] * .0010000000474974513), Nb = c + 102932;
  Bb = Nb >> 2;
  var lc = h[Bb], Rb = lc == 0;
  a : do {
    if (!Rb) {
      var Mc = c + 102884, Zb = c + 102876, $b = c + 102944, gd = c + 102940, hd = lc;
      for (ob = hd >> 2; ; ) {
        var Gc = h[ob + 12], Rd = h[ob + 13], Uc = h[ob + 14], $d = h[ob + 15], tc = h[Gc + 8 >> 2], mc = h[Rd + 8 >> 2];
        Fb = hd + 4 >> 2;
        var od = h[Fb], yd = (od & 8) == 0;
        b : do {
          if (yd) {
            R = 19;
          } else {
            var pd = tc;
            R = h[mc >> 2] == 2 ? 7 : h[tc >> 2] == 2 ? 7 : 12;
            c : do {
              if (R == 7) {
                for (var Nc = mc + 108; ; ) {
                  var Oc = h[Nc >> 2];
                  if (Oc == 0) {
                    break;
                  }
                  if (h[Oc >> 2] == pd && (a[h[Oc + 4 >> 2] + 61] & 1) == 0) {
                    break c;
                  }
                  Nc = Oc + 12;
                }
                var Sd = h[gd >> 2];
                if (Sd == 0) {
                  var ae = od;
                } else {
                  if (im[h[h[Sd >> 2] + 8 >> 2]](Sd, Gc, Rd)) {
                    ae = h[Fb];
                  } else {
                    var zd = h[ob + 3];
                    Ms(sc, hd);
                    var Yc = zd;
                    R = 13;
                    break b;
                  }
                }
                h[Fb] = ae & -9;
                R = 19;
                break b;
              }
            } while (0);
            var Vc = h[ob + 3];
            Ms(sc, hd);
            Yc = Vc;
            R = 13;
          }
        } while (0);
        if (R == 19) {
          if (((b[tc + 4 >> 1] & 2) == 0 ? 0 : h[tc >> 2] != 0) | ((b[mc + 4 >> 1] & 2) == 0 ? 0 : h[mc >> 2] != 0)) {
            var Hb = h[(h[Gc + 24 >> 2] + 24 >> 2) + (Uc * 7 | 0)], Hc = h[(h[Rd + 24 >> 2] + 24 >> 2) + ($d * 7 | 0)];
            R = Hb > -1 ? h[Mc >> 2] > Hb ? 28 : 27 : 27;
            R == 27 && G(y.z, 159, y.R, y.s);
            var id = h[Zb >> 2];
            Lb = id >> 2;
            if (Hc > -1) {
              if (h[Mc >> 2] > Hc) {
                var Hd = id;
                sb = Hd >> 2;
                R = 31;
              } else {
                R = 30;
              }
            } else {
              R = 30;
            }
            R == 30 && (G(y.z, 159, y.R, y.s), Hd = h[Zb >> 2], sb = Hd >> 2);
            if (l[sb + (Hc * 9 | 0)] - l[Lb + (Hb * 9 | 0) + 2] > 0 | l[sb + (Hc * 9 | 0) + 1] - l[Lb + (Hb * 9 | 0) + 3] > 0 | l[Lb + (Hb * 9 | 0)] - l[sb + (Hc * 9 | 0) + 2] > 0 | l[Lb + (Hb * 9 | 0) + 1] - l[sb + (Hc * 9 | 0) + 3] > 0) {
              var ac = h[ob + 3];
              Ms(sc, hd);
              Yc = ac;
            } else {
              Ys(hd, h[$b >> 2]), Yc = h[ob + 3];
            }
          } else {
            Yc = h[ob + 3];
          }
        }
        if (Yc == 0) {
          break a;
        } else {
          hd = Yc, ob = hd >> 2;
        }
      }
    }
  } while (0);
  Xs(Dc);
  l[tb + 25750] = (h[Dc >> 2] - Kd) * 1e3 + h[Dc + 4 >> 2] * .0010000000474974513 - xd;
  var oc = c + 102995;
  if ((a[oc] & 1) != 0) {
    Xs(jc);
    var be = h[jc >> 2], Ad = Math.floor(h[jc + 4 >> 2] * .0010000000474974513);
    Jb = c + 103008 >> 2;
    l[Jb] = 0;
    Ib = c + 103012 >> 2;
    l[Ib] = 0;
    Eb = c + 103016 >> 2;
    l[Eb] = 0;
    var Bd = c + 102960, Td = c + 68;
    Ws(Yb, h[Bd >> 2], h[tb + 25734], h[tb + 25741], Td, h[tb + 25736]);
    var jd = c + 102952, Ld = h[jd >> 2], Cd = Ld == 0;
    a : do {
      if (!Cd) {
        for (var Zc = Ld; ; ) {
          b[Zc + 4 >> 1] &= -2;
          var Pc = h[Zc + 96 >> 2];
          if (Pc == 0) {
            break a;
          } else {
            Zc = Pc;
          }
        }
      }
    } while (0);
    var Md = h[Bb], qd = Md == 0;
    a : do {
      if (!qd) {
        for (var $c = Md; ; ) {
          h[$c + 4 >> 2] &= -2;
          var ce = h[$c + 12 >> 2];
          if (ce == 0) {
            break a;
          } else {
            $c = ce;
          }
        }
      }
    } while (0);
    var Ud = h[tb + 25739], Ae = Ud == 0;
    a : do {
      if (!Ae) {
        for (var Vd = Ud; ; ) {
          a[Vd + 60] = 0;
          var qe = h[Vd + 12 >> 2];
          if (qe == 0) {
            break a;
          } else {
            Vd = qe;
          }
        }
      }
    } while (0);
    var de = k[Bd >> 2], rd = de << 2;
    Ob = c + 102864 >> 2;
    var zc = h[Ob];
    if (zc < 32) {
      var Wd = zc;
    } else {
      G(y.j, 38, y.n, y.p), Wd = h[Ob];
    }
    Qb = c + Wd * 12 + 102480 >> 2;
    h[tb + (Wd * 3 | 0) + 25621] = rd;
    Db = c + 102468 >> 2;
    var kd = h[Db];
    if (kd + rd > 102400) {
      var ef = vj(rd);
      h[Qb] = ef;
      a[c + Wd * 12 + 102488] = 1;
    } else {
      h[Qb] = c + (kd + 68), a[c + Wd * 12 + 102488] = 0, h[Db] += rd;
    }
    var Wc = c + 102472, ld = h[Wc >> 2] + rd;
    h[Wc >> 2] = ld;
    var re = c + 102476, ee = h[re >> 2];
    h[re >> 2] = ee > ld ? ee : ld;
    h[Ob] += 1;
    var Le = k[Qb];
    nb = Le >> 2;
    eb = Yb + 28 >> 2;
    Pa = Yb + 36 >> 2;
    vb = Yb + 32 >> 2;
    var Me = Yb + 40;
    Sa = Yb + 8 >> 2;
    var pg = Yb + 44;
    Ia = Yb + 12 >> 2;
    var ff = Yb + 48;
    Da = Yb + 16 >> 2;
    var qg = c + 102976, rg = c + 102968, Nd = c + 102972;
    ea = Yb + 20 >> 2;
    Va = Yb + 24 >> 2;
    var Be = hc + 4, gf = hb + 4, zf = hb + 8, Af = hb + 12, Ce = hb + 16, Hh = hb + 20, Wg = hb + 24, Zf = hb + 28, fe = dc + 4, Bf = dc + 8, sg = dc + 12, hf = dc + 16, Ih = dc + 20, Cf = dc + 24, Xg = dc + 28, Yg = dc + 32, $f = dc + 36;
    kb = Yb >> 2;
    var ag = dc + 40, jf = vc == 0, Zg = uc + 4, $g = nc + 4, bg = ec + 48;
    gb = ec + 40 >> 2;
    for (var tg = ec + 44, cg = Xc + 4, Df = wc + 4, Ef = ec + 36, md = ec + 24, Ff = Pb + 8, Dd = Pb + 12, Ne = pc + 8, Ac = pc + 12, ad = Vb + 8, ah = Vb + 16, bh = ic + 4, dg = Yb + 4, ch = ec + 32, Jh = yc + 16, ug = ec + 28, Gf = jd; ; ) {
      var Qc = k[Gf >> 2];
      if (Qc == 0) {
        break;
      }
      rb = Qc + 4 >> 1;
      var xc = (b[rb] & 35) == 34;
      a : do {
        if (xc && h[Qc >> 2] != 0) {
          h[eb] = 0;
          h[Pa] = 0;
          h[vb] = 0;
          h[nb] = Qc;
          b[rb] |= 1;
          var se = 1, kf = 0, vg = 0, Hf = 0;
          b : for (;;) {
            for (var eg = se, te = kf; ; ) {
              if (eg <= 0) {
                break b;
              }
              var ge = eg - 1, ue = h[(ge << 2 >> 2) + nb];
              ub = ue + 4 >> 1;
              (b[ub] & 32) == 0 && G(y.r, 445, y.O, y.hc);
              te < h[Me >> 2] || G(y.o, 54, y.F, y.J);
              h[ue + 8 >> 2] = te;
              h[(te << 2) + h[Sa] >> 2] = ue;
              var fg = te + 1;
              h[eb] = fg;
              var wg = b[ub];
              (wg & 2) == 0 && (b[ub] = wg | 2, l[ue + 144 >> 2] = 0);
              if (h[ue >> 2] == 0) {
                eg = ge, te = fg;
              } else {
                break;
              }
            }
            for (var Ed = ue + 112, De = ge, ve = Hf; ; ) {
              var Oe = h[Ed >> 2];
              if (Oe == 0) {
                break;
              }
              var Pe = h[Oe + 4 >> 2];
              qb = Pe + 4 >> 2;
              if ((h[qb] & 7) == 6) {
                if ((a[h[Pe + 48 >> 2] + 38] & 1) != 0) {
                  var lf = De, he = ve;
                } else {
                  if ((a[h[Pe + 52 >> 2] + 38] & 1) != 0) {
                    lf = De, he = ve;
                  } else {
                    ve < h[pg >> 2] || G(y.o, 62, y.P, y.T);
                    var Ee = ve + 1;
                    h[Pa] = Ee;
                    h[(ve << 2) + h[Ia] >> 2] = Pe;
                    h[qb] |= 1;
                    var xg = h[Oe >> 2];
                    db = xg + 4 >> 1;
                    (b[db] & 1) != 0 ? lf = De : (De < de || G(y.r, 495, y.O, y.Ha), h[(De << 2 >> 2) + nb] = xg, b[db] |= 1, lf = De + 1);
                    he = Ee;
                  }
                }
              } else {
                lf = De, he = ve;
              }
              Ed = Oe + 12;
              De = lf;
              ve = he;
            }
            for (var yg = ue + 108, Id = De, Fe = vg; ; ) {
              var If = h[yg >> 2];
              if (If == 0) {
                se = Id;
                kf = fg;
                vg = Fe;
                Hf = ve;
                continue b;
              }
              var zg = If + 4, mf = h[zg >> 2];
              if ((a[mf + 60] & 1) == 0) {
                var nf = h[If >> 2];
                La = nf + 4 >> 1;
                if ((b[La] & 32) == 0) {
                  var Jf = Id, Kf = Fe;
                } else {
                  Fe < h[ff >> 2] || G(y.o, 68, y.sb, y.$b);
                  var Lf = Fe + 1;
                  h[vb] = Lf;
                  h[(Fe << 2) + h[Da] >> 2] = mf;
                  a[h[zg >> 2] + 60] = 1;
                  (b[La] & 1) != 0 ? Jf = Id : (Id < de || G(y.r, 524, y.O, y.Ha), h[(Id << 2 >> 2) + nb] = nf, b[La] |= 1, Jf = Id + 1);
                  Kf = Lf;
                }
              } else {
                Jf = Id, Kf = Fe;
              }
              yg = If + 12;
              Id = Jf;
              Fe = Kf;
            }
          }
          var dh = (a[qg] & 1) == 0;
          Xs(Ab);
          var gg = h[eb] > 0;
          b : do {
            if (gg) {
              for (var Ge = 0; ; ) {
                var we = h[h[Sa] + (Ge << 2) >> 2];
                na = we >> 2;
                var Qe = we + 44, Ag = l[Qe >> 2], Xd = l[na + 12], of = l[na + 14], pf = we + 64, Re = pf;
                cb = Re >> 2;
                var Fd = pf + 4;
                Aa = Fd >> 2;
                var qf = h[Aa], rf = (w[0] = h[cb], x[0]), Mf = (w[0] = qf, x[0]), sf = l[na + 18], Nf = Qe, tf = we + 36, sd = Nf;
                ca = sd >> 2;
                var eh = h[ca], td = Nf + 4;
                Ua = td >> 2;
                var He = h[Ua], Yd = tf;
                Oa = Yd >> 2;
                h[Oa] = eh;
                var Se = tf + 4;
                Ha = Se >> 2;
                h[Ha] = He;
                l[na + 13] = of;
                if (h[na] == 2) {
                  var fh = l[na + 35], uf = l[na + 30], vf = 1 - l[na + 33] * .01666666753590107, Kh = vf < 1 ? vf : 1, gh = Kh < 0 ? 0 : Kh, Te = 1 - l[na + 34] * .01666666753590107, hh = Te < 1 ? Te : 1, Bg = (sf + l[na + 32] * .01666666753590107 * l[na + 21]) * (hh < 0 ? 0 : hh), Bi = (rf + (l[rg >> 2] * fh + l[na + 19] * uf) * .01666666753590107) * gh, Ci = (Mf + (l[Nd >> 2] * fh + l[na + 20] * uf) * .01666666753590107) * gh;
                } else {
                  Bg = sf, Bi = rf, Ci = Mf;
                }
                var Lh = h[ea];
                l[(Lh >> 2) + (Ge * 3 | 0)] = Ag;
                l[(Lh + 4 >> 2) + (Ge * 3 | 0)] = Xd;
                l[(h[ea] + 8 >> 2) + (Ge * 3 | 0)] = of;
                var Di = h[Va] + Ge * 12, wj = (x[0] = Bi, w[0]), Od = (x[0] = Ci, w[0]) | 0, wf = Di;
                h[wf >> 2] = 0 | wj;
                var Ie = Di + 4;
                h[Ie >> 2] = Od;
                l[(h[Va] + 8 >> 2) + (Ge * 3 | 0)] = Bg;
                var Mh = Ge + 1;
                if (Mh < h[eb]) {
                  Ge = Mh;
                } else {
                  break b;
                }
              }
            }
          } while (0);
          Xs(hc);
          var Ei = h[hc >> 2], Fi = Math.floor(h[Be >> 2] * .0010000000474974513);
          l[hb >> 2] = .01666666753590107;
          l[gf >> 2] = 59.999996185302734;
          l[zf >> 2] = kc;
          h[Af >> 2] = 3;
          h[Ce >> 2] = 3;
          a[Hh] = vc;
          var Nh = h[ea];
          h[Wg >> 2] = Nh;
          var Oh = h[Va];
          h[Zf >> 2] = Oh;
          l[dc >> 2] = .01666666753590107;
          l[fe >> 2] = 59.999996185302734;
          l[Bf >> 2] = kc;
          h[sg >> 2] = 3;
          h[hf >> 2] = 3;
          a[Ih] = vc;
          h[Cf >> 2] = h[Ia];
          h[Xg >> 2] = h[Pa];
          h[Yg >> 2] = Nh;
          h[$f >> 2] = Oh;
          h[ag >> 2] = h[kb];
          Zs(ec, dc);
          $s(ec);
          b : do {
            if (jf) {
              var Cg = 0;
              R = 119;
            } else {
              var Ph = h[bg >> 2];
              if (Ph > 0) {
                var Gi = h[gb];
                sa = Gi >> 2;
                for (var Dg = h[ug >> 2], ud = 0; ; ) {
                  var Eg = h[sa + (ud * 38 | 0) + 28], ih = h[sa + (ud * 38 | 0) + 29], Hi = l[sa + (ud * 38 | 0) + 30], ie = l[sa + (ud * 38 | 0) + 32], jh = l[sa + (ud * 38 | 0) + 31], xj = l[sa + (ud * 38 | 0) + 33], Ii = h[sa + (ud * 38 | 0) + 36], kh = Dg + Eg * 12, xe = kh;
                  Ga = xe >> 2;
                  var Ue = kh + 4;
                  Na = Ue >> 2;
                  var yj = h[Na], Qh = (w[0] = h[Ga], x[0]), Ve = (w[0] = yj, x[0]), Fg = Dg + Eg * 12 + 8, Of = l[Fg >> 2], hg = Dg + ih * 12, zj = h[hg + 4 >> 2], Rh = (w[0] = h[hg >> 2], x[0]), Sh = (w[0] = zj, x[0]), Th = Dg + ih * 12 + 8, Uh = l[Th >> 2], Gg = Gi + ud * 152 + 72, Ji = h[Gg + 4 >> 2], Ki = (w[0] = h[Gg >> 2], x[0]), Li = (w[0] = Ji, x[0]), Pf = Ki * -1, Aj = Ii > 0;
                  c : do {
                    if (Aj) {
                      for (var Vh = Sh, lh = Rh, Wh = Ve, mh = Qh, Xh = Of, Qf = Uh, We = 0; ; ) {
                        var Yh = l[sa + (ud * 38 | 0) + (We * 9 | 0) + 4], Mi = l[sa + (ud * 38 | 0) + (We * 9 | 0) + 5], Rf = Ki * Yh + Li * Mi, ig = Li * Yh + Pf * Mi, Ni = Xh - ie * (l[sa + (ud * 38 | 0) + (We * 9 | 0)] * ig - l[sa + (ud * 38 | 0) + (We * 9 | 0) + 1] * Rf), Zh = mh - Rf * Hi, $h = Wh - ig * Hi, Oi = Qf + xj * (l[sa + (ud * 38 | 0) + (We * 9 | 0) + 2] * ig - l[sa + (ud * 38 | 0) + (We * 9 | 0) + 3] * Rf), jg = lh + Rf * jh, ai = Vh + ig * jh, Pi = We + 1;
                        if (Pi == Ii) {
                          var bi = ai, nh = jg, Qi = $h, Ri = Zh, Bj = Ni, oh = Oi;
                          break c;
                        } else {
                          Vh = ai, lh = jg, Wh = $h, mh = Zh, Xh = Ni, Qf = Oi, We = Pi;
                        }
                      }
                    } else {
                      bi = Sh, nh = Rh, Qi = Ve, Ri = Qh, Bj = Of, oh = Uh;
                    }
                  } while (0);
                  var Cj = (x[0] = Ri, w[0]), ye = (x[0] = Qi, w[0]) | 0;
                  h[kh >> 2] = 0 | Cj;
                  h[kh + 4 >> 2] = ye;
                  l[Fg >> 2] = Bj;
                  var Dj = (x[0] = nh, w[0]), ci = (x[0] = bi, w[0]) | 0, sd = hg;
                  ca = sd >> 2;
                  h[ca] = 0 | Dj;
                  td = hg + 4;
                  Ua = td >> 2;
                  h[Ua] = ci;
                  l[Th >> 2] = oh;
                  var di = ud + 1;
                  if (di < Ph) {
                    ud = di;
                  } else {
                    Cg = 0;
                    break b;
                  }
                }
              } else {
                Cg = 0;
              }
            }
          } while (0);
          for (;;) {
            if (Cg >= h[vb]) {
              break;
            }
            var ei = h[h[Da] + (Cg << 2) >> 2];
            im[h[h[ei >> 2] + 28 >> 2]](ei, hb);
            Cg += 1;
          }
          Xs(uc);
          var Ej = (h[uc >> 2] - Ei) * 1e3 + h[Zg >> 2] * .0010000000474974513 - Fi;
          Xs(nc);
          for (var Si = h[nc >> 2], Ti = Math.floor(h[$g >> 2] * .0010000000474974513), fi = 0; ; ) {
            if (fi < 3) {
              var ph = 0;
            } else {
              break;
            }
            for (;;) {
              if (ph >= h[vb]) {
                break;
              }
              var Hg = h[h[Da] + (ph << 2) >> 2];
              im[h[h[Hg >> 2] + 32 >> 2]](Hg, hb);
              ph += 1;
            }
            at(ec);
            fi += 1;
          }
          var Ig = k[bg >> 2], Sf = Ig > 0;
          b : do {
            if (Sf) {
              var Ui = h[gb];
              Kb = Ui >> 2;
              for (var xf = h[tg >> 2], Tf = 0; ; ) {
                var gi = h[xf + (h[Kb + (Tf * 38 | 0) + 37] << 2) >> 2], hi = Ui + Tf * 152 + 144, Vi = h[hi >> 2] > 0;
                c : do {
                  if (Vi) {
                    for (var Uf = 0; ; ) {
                      l[(gi + 72 >> 2) + (Uf * 5 | 0)] = l[Kb + (Tf * 38 | 0) + (Uf * 9 | 0) + 4];
                      l[(gi + 76 >> 2) + (Uf * 5 | 0)] = l[Kb + (Tf * 38 | 0) + (Uf * 9 | 0) + 5];
                      var ii = Uf + 1;
                      if (ii < h[hi >> 2]) {
                        Uf = ii;
                      } else {
                        break c;
                      }
                    }
                  }
                } while (0);
                var Wi = Tf + 1;
                if (Wi < Ig) {
                  Tf = Wi;
                } else {
                  break b;
                }
              }
            }
          } while (0);
          Xs(Xc);
          var Fj = (h[Xc >> 2] - Si) * 1e3 + h[cg >> 2] * .0010000000474974513 - Ti, Vf = h[eb] > 0;
          b : do {
            if (Vf) {
              for (var Je = 0; ; ) {
                var qh = h[ea], Jg = qh + Je * 12, Gk = h[Jg + 4 >> 2], ji = (w[0] = h[Jg >> 2], x[0]), Gj = (w[0] = Gk, x[0]), Hj = l[(qh + 8 >> 2) + (Je * 3 | 0)], ki = h[Va], rh = ki + Je * 12, Kg = rh;
                xb = Kg >> 2;
                var Xe = rh + 4;
                wb = Xe >> 2;
                var sh = h[wb], th = (w[0] = h[xb], x[0]), Hk = (w[0] = sh, x[0]), Ik = l[(ki + 8 >> 2) + (Je * 3 | 0)], hn = th * .01666666753590107, Xi = Hk * .01666666753590107, Ij = hn * hn + Xi * Xi;
                if (Ij > 4) {
                  var Jk = 2 / an(Ij), Jj = th * Jk, Kj = Hk * Jk;
                } else {
                  Jj = th, Kj = Hk;
                }
                var uh = Ik * .01666666753590107, Lj = uh * uh > 2.4674012660980225 ? Ik * (1.5707963705062866 / (uh > 0 ? uh : -uh)) : Ik, up = Gj + Kj * .01666666753590107, jn = Hj + Lj * .01666666753590107, Kk = (x[0] = ji + Jj * .01666666753590107, w[0]), kn = (x[0] = up, w[0]), Lk = 0 | Kk, vp = kn | 0, xe = Jg;
                Ga = xe >> 2;
                h[Ga] = Lk;
                Ue = Jg + 4;
                Na = Ue >> 2;
                h[Na] = vp;
                l[(h[ea] + 8 >> 2) + (Je * 3 | 0)] = jn;
                var ln = h[Va] + Je * 12, wp = (x[0] = Jj, w[0]), xp = (x[0] = Kj, w[0]) | 0, Mk = ln;
                h[Mk >> 2] = 0 | wp;
                var Nk = ln + 4;
                h[Nk >> 2] = xp;
                l[(h[Va] + 8 >> 2) + (Je * 3 | 0)] = Lj;
                var mn = Je + 1;
                if (mn < h[eb]) {
                  Je = mn;
                } else {
                  break b;
                }
              }
            }
          } while (0);
          Xs(wc);
          var Lg = h[wc >> 2], Yi = Math.floor(h[Df >> 2] * .0010000000474974513), Mg = k[Ef >> 2];
          bb = Mg >> 2;
          for (var vh = h[md >> 2], Zi = 0; ; ) {
            if (Zi >= 3) {
              var Ok = 1;
              break;
            }
            b : do {
              if (Sf) {
                for (var je = 0, wh = 0; ; ) {
                  var nn = Mg + je * 88, Pk = h[bb + (je * 22 | 0) + 8], Qk = h[bb + (je * 22 | 0) + 9], Rk = Mg + je * 88 + 48, Wf = Rk;
                  Ma = Wf >> 2;
                  var xh = Rk + 4;
                  ia = xh >> 2;
                  var li = h[ia], Sk = (w[0] = h[Ma], x[0]), Mj = (w[0] = li, x[0]), $i = l[bb + (je * 22 | 0) + 10], Nj = l[bb + (je * 22 | 0) + 16], Oj = Mg + je * 88 + 56, wf = Oj, Ie = Oj + 4, on = h[Ie >> 2], pn = (w[0] = h[wf >> 2], x[0]), qn = (w[0] = on, x[0]), Pj = l[bb + (je * 22 | 0) + 11], Tk = l[bb + (je * 22 | 0) + 17], Uk = h[bb + (je * 22 | 0) + 21], aj = vh + Pk * 12, Qj = aj, Rj = aj + 4, Vk = h[Rj >> 2], Sj = (w[0] = h[Qj >> 2], x[0]), Wk = (w[0] = Vk, x[0]), Xk = vh + Pk * 12 + 8, Yk = l[Xk >> 2], bj = vh + Qk * 12, Zk = h[bj + 4 >> 2], $k = (w[0] = h[bj >> 2], x[0]), al = (w[0] = Zk, x[0]), bl = vh + Qk * 12 + 8, rn = l[bl >> 2], yp = Uk > 0;
                  c : do {
                    if (yp) {
                      for (var sn = $i + Pj, Tj = al, Uj = $k, cj = Wk, Vj = Sj, Wj = Yk, Xj = rn, cl = wh, dl = 0; ; ) {
                        var el = Is(Wj);
                        l[Ff >> 2] = el;
                        var fl = Js(Wj);
                        l[Dd >> 2] = fl;
                        var yh = Is(Xj);
                        l[Ne >> 2] = yh;
                        var dj = Js(Xj);
                        l[Ac >> 2] = dj;
                        var Yj = cj - (el * Sk + fl * Mj), Zj = (x[0] = Vj - (fl * Sk - el * Mj), w[0]), gl = (x[0] = Yj, w[0]) | 0, ej = Pb;
                        h[ej >> 2] = 0 | Zj;
                        var mi = Pb + 4;
                        h[mi >> 2] = gl;
                        var $j = Tj - (yh * pn + dj * qn), hl = (x[0] = Uj - (dj * pn - yh * qn), w[0]), ak = (x[0] = $j, w[0]) | 0, fj = pc;
                        h[fj >> 2] = 0 | hl;
                        var ni = pc + 4;
                        h[ni >> 2] = ak;
                        bt(Vb, nn, Pb, pc, dl);
                        var bk = Vb, oi = Vb + 4, il = h[oi >> 2], jl = (w[0] = h[bk >> 2], x[0]), ck = (w[0] = il, x[0]), dk = ad, ek = ad + 4, kl = h[ek >> 2], pi = (w[0] = h[dk >> 2], x[0]), ll = (w[0] = kl, x[0]), fk = l[ah >> 2], ml = pi - Vj, tn = ll - cj, nl = pi - Uj, gj = ll - Tj, ol = cl < fk ? cl : fk, pl = (fk + .004999999888241291) * .20000000298023224, ql = pl < 0 ? pl : 0, rl = ml * ck - tn * jl, sl = nl * ck - gj * jl, tl = sn + Nj * rl * rl + Tk * sl * sl, ul = tl > 0 ? -(ql < -.20000000298023224 ? -.20000000298023224 : ql) / tl : 0, qi = jl * ul, hj = ck * ul, vl = Vj - qi * $i, wl = cj - hj * $i, xl = Wj - Nj * (ml * hj - tn * qi), yl = Uj + qi * Pj, zl = Tj + hj * Pj, gk = Xj + Tk * (nl * hj - gj * qi), un = dl + 1;
                        if (un == Uk) {
                          var vn = zl, wn = yl, xn = wl, yn = vl, hk = xl, ik = gk, Al = ol;
                          break c;
                        } else {
                          Tj = zl, Uj = yl, cj = wl, Vj = vl, Wj = xl, Xj = gk, cl = ol, dl = un;
                        }
                      }
                    } else {
                      vn = al, wn = $k, xn = Wk, yn = Sj, hk = Yk, ik = rn, Al = wh;
                    }
                  } while (0);
                  var zp = (x[0] = yn, w[0]), Bl = (x[0] = xn, w[0]) | 0, xe = aj;
                  Ga = xe >> 2;
                  h[Ga] = 0 | zp;
                  Ue = aj + 4;
                  Na = Ue >> 2;
                  h[Na] = Bl;
                  l[Xk >> 2] = hk;
                  var Cl = (x[0] = wn, w[0]), Ap = (x[0] = vn, w[0]) | 0, zh = bj;
                  ab = zh >> 2;
                  h[ab] = 0 | Cl;
                  var Ah = bj + 4;
                  xa = Ah >> 2;
                  h[xa] = Ap;
                  l[bl >> 2] = ik;
                  var zn = je + 1;
                  if (zn < Ig) {
                    je = zn, wh = Al;
                  } else {
                    var An = Al;
                    break b;
                  }
                }
              } else {
                An = 0;
              }
            } while (0);
            for (var Bn = An >= -.014999999664723873, ij = 0, jj = 1; ; ) {
              if (ij >= h[vb]) {
                break;
              }
              var Cn = h[h[Da] + (ij << 2) >> 2], ri = im[h[h[Cn >> 2] + 36 >> 2]](Cn, hb), si = jj & ri;
              ij += 1;
              jj = si;
            }
            if (Bn & jj) {
              Ok = 0;
              break;
            }
            Zi += 1;
          }
          var Dl = h[eb] > 0;
          b : do {
            if (Dl) {
              for (var Ng = 0; ; ) {
                var jk = h[h[Sa] + (Ng << 2) >> 2];
                la = jk >> 2;
                var Dn = h[ea] + Ng * 12, kk = jk + 44, lk = Dn, kj = h[lk >> 2], El = Dn + 4, mk = h[El >> 2];
                h[kk >> 2] = kj;
                h[kk + 4 >> 2] = mk;
                var ti = l[(h[ea] + 8 >> 2) + (Ng * 3 | 0)];
                l[la + 14] = ti;
                var ui = h[Va] + Ng * 12, Fl = jk + 64, sd = ui;
                ca = sd >> 2;
                var Bp = h[ca], td = ui + 4;
                Ua = td >> 2;
                var En = h[Ua], Yd = Fl;
                Oa = Yd >> 2;
                h[Oa] = Bp;
                Se = Fl + 4;
                Ha = Se >> 2;
                h[Ha] = En;
                l[la + 18] = l[(h[Va] + 8 >> 2) + (Ng * 3 | 0)];
                var Gl = Is(ti);
                l[la + 5] = Gl;
                var Hl = Js(ti);
                l[la + 6] = Hl;
                var Fn = jk + 12, nk = l[la + 7], Il = l[la + 8], Jl = Hl * nk - Gl * Il, Kl = Gl * nk + Hl * Il, ok = (w[0] = kj, x[0]) - Jl, Gn = (w[0] = mk, x[0]) - Kl, Ll = Fn, Hn = (x[0] = ok, w[0]), Ml = (x[0] = Gn, w[0]) | 0;
                h[Ll >> 2] = 0 | Hn;
                h[Ll + 4 >> 2] = Ml;
                var lj = Ng + 1;
                if (lj < h[eb]) {
                  Ng = lj;
                } else {
                  break b;
                }
              }
            }
          } while (0);
          Xs(ic);
          var mj = (h[ic >> 2] - Lg) * 1e3 + h[bh >> 2] * .0010000000474974513 - Yi, Nl = k[gb];
          ma = Nl >> 2;
          var Cp = h[dg >> 2] == 0;
          b : do {
            if (Cp) {
              R = 171;
            } else {
              if (h[Pa] > 0) {
                for (var Bh = 0; ; ) {
                  var Dp = h[h[Ia] + (Bh << 2) >> 2], Ol = h[ma + (Bh * 38 | 0) + 36];
                  h[Jh >> 2] = Ol;
                  var In = Ol > 0;
                  c : do {
                    if (In) {
                      for (var Og = 0; ; ) {
                        l[yc + (Og << 2) >> 2] = l[ma + (Bh * 38 | 0) + (Og * 9 | 0) + 4];
                        l[yc + (Og << 2) + 8 >> 2] = l[ma + (Bh * 38 | 0) + (Og * 9 | 0) + 5];
                        var Pl = Og + 1;
                        if (Pl == Ol) {
                          break c;
                        } else {
                          Og = Pl;
                        }
                      }
                    }
                  } while (0);
                  var Ql = h[dg >> 2];
                  im[h[h[Ql >> 2] + 20 >> 2]](Ql, Dp, yc);
                  var Rl = Bh + 1;
                  if (Rl < h[Pa]) {
                    Bh = Rl;
                  } else {
                    break b;
                  }
                }
              }
            }
          } while (0);
          b : do {
            if (!dh && h[eb] > 0) {
              for (var nj = 3.4028234663852886e+38, pk = 0; ; ) {
                var Pg = h[h[Sa] + (pk << 2) >> 2], Ep = h[Pg >> 2] == 0;
                c : do {
                  if (Ep) {
                    var qk = nj;
                  } else {
                    var Jn = (b[Pg + 4 >> 1] & 4) == 0;
                    do {
                      if (!Jn) {
                        var Sl = l[Pg + 72 >> 2];
                        if (Sl * Sl <= .001218469929881394) {
                          var Kn = l[Pg + 64 >> 2], Ln = l[Pg + 68 >> 2];
                          if (Kn * Kn + Ln * Ln <= 9999999747378752e-20) {
                            var Tl = Pg + 144, rk = l[Tl >> 2] + .01666666753590107;
                            l[Tl >> 2] = rk;
                            qk = nj < rk ? nj : rk;
                            break c;
                          }
                        }
                      }
                    } while (0);
                    qk = l[Pg + 144 >> 2] = 0;
                  }
                } while (0);
                var Ul = pk + 1, Ch = k[eb];
                if (Ul < Ch) {
                  nj = qk, pk = Ul;
                } else {
                  break;
                }
              }
              if (Ch > 0 & ((qk < .5 | Ok) ^ 1)) {
                for (var sk = 0; ; ) {
                  var Vl = k[h[Sa] + (sk << 2) >> 2];
                  ra = Vl >> 2;
                  b[Vl + 4 >> 1] &= -3;
                  l[ra + 36] = 0;
                  l[ra + 16] = 0;
                  l[ra + 17] = 0;
                  l[ra + 18] = 0;
                  l[ra + 19] = 0;
                  l[ra + 20] = 0;
                  l[ra + 21] = 0;
                  var Wl = sk + 1;
                  if (Wl < h[eb]) {
                    sk = Wl;
                  } else {
                    break b;
                  }
                }
              }
            }
          } while (0);
          var Xl = h[ch >> 2];
          Ls(Xl, Nl);
          Ls(Xl, Mg);
          l[Jb] += Ej;
          l[Ib] += Fj;
          l[Eb] += mj;
          var Yl = h[eb];
          if (Yl > 0) {
            for (var Fp = h[Sa], tk = 0; ; ) {
              var Mn = h[Fp + (tk << 2) >> 2];
              h[Mn >> 2] == 0 && (b[Mn + 4 >> 1] &= -2);
              var Nn = tk + 1;
              if (Nn < Yl) {
                tk = Nn;
              } else {
                break a;
              }
            }
          }
        }
      } while (0);
      Gf = Qc + 96;
    }
    Ls(Td, Le);
    Xs(Rc);
    for (var On = h[Rc >> 2], Pn = Math.floor(h[Rc + 4 >> 2] * .0010000000474974513), Gp = qc + 8, Hp = qc + 12, Zl = jd; ; ) {
      var ze = h[Zl >> 2];
      if (ze == 0) {
        break;
      }
      var Qn = (b[ze + 4 >> 1] & 1) == 0;
      a : do {
        if (!Qn && h[ze >> 2] != 0) {
          var uk = l[ze + 52 >> 2], vk = Is(uk);
          l[Gp >> 2] = vk;
          var wk = Js(uk);
          l[Hp >> 2] = wk;
          var $l = l[ze + 28 >> 2], am = l[ze + 32 >> 2], Rn = l[ze + 40 >> 2] - (vk * $l + wk * am), Sn = (x[0] = l[ze + 36 >> 2] - (wk * $l - vk * am), w[0]), Tn = (x[0] = Rn, w[0]), Un = 0 | Sn, Vn = Tn | 0, zh = qc;
          ab = zh >> 2;
          h[ab] = Un;
          Ah = qc + 4;
          xa = Ah >> 2;
          h[xa] = Vn;
          var Ip = h[ze + 88 >> 2] + 102872, bm = h[ze + 100 >> 2];
          if (bm != 0) {
            for (var Jp = ze + 12, cm = bm; ; ) {
              Vs(cm, Ip, qc, Jp);
              var dm = h[cm + 4 >> 2];
              if (dm == 0) {
                break a;
              } else {
                cm = dm;
              }
            }
          }
        }
      } while (0);
      Zl = ze + 96;
    }
    Ps(sc, sc);
    Xs(Cc);
    l[tb + 25755] = (h[Cc >> 2] - On) * 1e3 + h[Cc + 4 >> 2] * .0010000000474974513 - Pn;
    Ls(h[kb], h[ea]);
    Ls(h[kb], h[Va]);
    Ls(h[kb], h[Da]);
    var em = h[kb];
    Ls(em, h[Ia]);
    Ls(em, h[Sa]);
    Xs(Wb);
    l[tb + 25751] = (h[Wb >> 2] - be) * 1e3 + h[Wb + 4 >> 2] * .0010000000474974513 - Ad;
  }
  if ((a[c + 102993] & 1) != 0) {
    Xs(Gb);
    var Kp = h[Gb >> 2], Lp = Math.floor(h[Gb + 4 >> 2] * .0010000000474974513);
    qa = ta >> 2;
    var Wn = c + 68;
    ha = c + 102944 >> 2;
    Ws(zb, 64, 32, 0, Wn, h[ha]);
    var fm = (a[oc] & 1) == 0;
    a : do {
      if (!fm) {
        var gm = h[tb + 25738], hm = gm == 0;
        b : do {
          if (!hm) {
            for (var Zn = gm; ; ) {
              b[Zn + 4 >> 1] &= -2;
              l[Zn + 60 >> 2] = 0;
              var It = h[Zn + 96 >> 2];
              if (It == 0) {
                break b;
              } else {
                Zn = It;
              }
            }
          }
        } while (0);
        var Jt = h[Bb];
        if (Jt != 0) {
          var $n = Jt;
          for (ba = $n >> 2; ; ) {
            h[$n + 4 >> 2] &= -34;
            h[ba + 32] = 0;
            l[ba + 33] = 1;
            var Kt = h[ba + 3];
            if (Kt == 0) {
              break a;
            } else {
              $n = Kt, ba = $n >> 2;
            }
          }
        }
      }
    } while (0);
    var Lt = ta + 16, Mt = ta + 20, Nt = ta + 24;
    Ya = ta + 44 >> 2;
    da = ta + 48 >> 2;
    var Ot = ta + 52, Tp = ta + 28, Pt = ta + 56, Qt = ta + 92, Rt = ta + 128;
    ga = zb + 28 >> 2;
    pb = zb + 36 >> 2;
    var VA = zb + 32, St = zb + 40;
    $a = zb + 8 >> 2;
    var Tt = zb + 44;
    jb = zb + 12 >> 2;
    var WA = cc + 4, XA = ya + 8, YA = ya + 12, ZA = c + 102994;
    Za = zb + 20 >> 2;
    Ka = zb + 24 >> 2;
    var $A = Cb + 24, aB = Cb + 28, bB = Cb + 40, cB = Cb + 4, dB = Cb + 8, eB = Cb + 12, fB = Cb + 16, gB = Cb + 20, hB = Cb + 32, iB = Cb + 36, jB = Ub + 48, Ut = Ub + 36, kB = Ub + 24, lB = W + 8, mB = W + 12, nB = Xb + 8, oB = Xb + 12, Vt = Tb + 8, pB = Tb + 16, qB = Ub + 40, rB = zb + 4, sB = Ub + 32, tB = yb + 16;
    Xa = Ja >> 2;
    var uB = ta + 60, vB = ta + 64, wB = ta + 68, xB = ta + 72, yB = ta + 76, zB = ta + 80, AB = ta + 84, BB = ta + 88, CB = ta + 96, DB = ta + 100, EB = ta + 104, FB = ta + 108, GB = ta + 112, HB = ta + 116, IB = ta + 120, JB = ta + 124, Wt = bc + 4;
    Wa = Ja + 28 >> 2;
    Ra = Tp >> 2;
    var KB = Ja + 88, LB = Ja + 56, MB = Ja + 60, NB = Ja + 64, OB = Ja + 68, PB = Ja + 72, QB = Ja + 76, RB = Ja + 80, SB = Ja + 84, TB = Mb + 16;
    va = fa >> 2;
    Fa = fa + 4 >> 2;
    var UB = fa + 8, VB = fa + 12, WB = fa + 16, XB = fa + 20, YB = fa + 24, ZB = fa + 28, $B = fa + 32, aC = fa + 36, bC = fa + 40, cC = fa + 44, dC = fa + 48, eC = fa + 52, fC = fa + 56, gC = fa + 60, hC = fa + 64, iC = fa + 68, jC = fa + 72, kC = fa + 76, lC = fa + 16, mC = fa + 20, nC = fa + 24, oC = fa + 28, pC = fa + 32, qC = fa + 36, rC = fa + 12, sC = fa + 52, tC = fa + 56, uC = fa + 60, vC = fa + 64, wC = fa + 68, xC = fa + 72, yC = fa + 48;
    Y = fa + 80 >> 2;
    var Up = bc + 9, vi = fa + 92;
    ua = vi >> 2;
    pa = fa + 96 >> 2;
    Qa = vi >> 2;
    var zC = bc + 10, ao = fa + 84, AC = fa + 8, BC = fa + 44;
    mb = fa + 92 >> 2;
    for (var Xt = fa + 84, Yt = fa + 88, le = 0, Pd = 1, bo = Nb; ; ) {
      var jm = k[bo >> 2];
      Ca = jm >> 2;
      if (jm == 0) {
        if (le == 0 | Pd > .9999988079071045) {
          var Zt = 1, $t = h[$a], au = h[jb], bu = h[Za], cu = h[Ka];
          break;
        } else {
          var vd = k[h[le + 48 >> 2] + 8 >> 2], Qd = k[h[le + 52 >> 2] + 8 >> 2];
          Ba = vd + 28 >> 2;
          var du = l[Ba];
          aa = vd + 32 >> 2;
          var eu = l[aa], fu = vd + 36, gu = l[fu >> 2];
          X = vd + 40 >> 2;
          var hu = l[X];
          Z = vd + 44 >> 2;
          var iu = l[Z];
          Ea = vd + 48 >> 2;
          var ju = l[Ea];
          $ = vd + 52 >> 2;
          var ku = l[$];
          T = vd + 56 >> 2;
          var lu = l[T];
          S = vd + 60 >> 2;
          var Vp = l[S];
          za = Qd + 28 >> 2;
          var CC = l[za];
          ka = Qd + 32 >> 2;
          var DC = l[ka], mu = Qd + 36, EC = l[mu >> 2];
          ja = Qd + 40 >> 2;
          var FC = l[ja];
          N = Qd + 44 >> 2;
          var GC = l[N];
          U = Qd + 48 >> 2;
          var HC = l[U];
          ib = Qd + 52 >> 2;
          var IC = l[ib];
          L = Qd + 56 >> 2;
          var JC = l[L];
          O = Qd + 60 >> 2;
          var KC = l[O];
          if (Vp < 1) {
            var Wp = Vp, nu = gu, ou = hu, pu = iu, qu = ju, ru = ku, su = lu, Xp = du, Yp = eu, tu = vd + 36;
          } else {
            G(y.B, 715, y.w, y.t);
            var uu = vd + 36, Wp = l[S], nu = l[uu >> 2], ou = l[X], pu = l[Z], qu = l[Ea], ru = l[$], su = l[T], Xp = l[Ba], Yp = l[aa], tu = uu;
          }
          var co = (Pd - Wp) / (1 - Wp), Zp = 1 - co, vu = nu * Zp + pu * co, wu = ou * Zp + qu * co, xu = tu, LC = (x[0] = vu, w[0]), MC = (x[0] = wu, w[0]), yu = 0 | LC, zu = MC | 0, sd = xu;
          ca = sd >> 2;
          h[ca] = yu;
          td = xu + 4;
          Ua = td >> 2;
          h[Ua] = zu;
          var eo = Zp * ru + co * su;
          l[$] = eo;
          l[S] = Pd;
          var Au = vd + 44, $p = Au;
          h[$p >> 2] = yu;
          var aq = Au + 4;
          h[aq >> 2] = zu;
          l[T] = eo;
          var bq = Is(eo), Bu = vd + 20;
          l[Bu >> 2] = bq;
          var cq = Js(eo), Cu = vd + 24;
          l[Cu >> 2] = cq;
          var NC = wu - (bq * Xp + cq * Yp), fo = vd + 12, OC = (x[0] = vu - (cq * Xp - bq * Yp), w[0]), PC = (x[0] = NC, w[0]) | 0, dq = fo;
          h[dq >> 2] = 0 | OC;
          var eq = fo + 4;
          h[eq >> 2] = PC;
          var Du = l[O];
          if (Du < 1) {
            var fq = Du;
          } else {
            G(y.B, 715, y.w, y.t), fq = l[O];
          }
          var go = (Pd - fq) / (1 - fq), Eu = Qd + 36, gq = 1 - go, Fu = l[Eu >> 2] * gq + l[N] * go, Gu = l[ja] * gq + l[U] * go, Hu = Eu, QC = (x[0] = Fu, w[0]), RC = (x[0] = Gu, w[0]), Iu = 0 | QC, Ju = RC | 0, hq = Hu;
          h[hq >> 2] = Iu;
          var iq = Hu + 4;
          h[iq >> 2] = Ju;
          var ho = gq * l[ib] + go * l[L];
          l[ib] = ho;
          l[O] = Pd;
          var Ku = Qd + 44;
          h[Ku >> 2] = Iu;
          h[Ku + 4 >> 2] = Ju;
          l[L] = ho;
          var jq = Is(ho), Lu = Qd + 20;
          l[Lu >> 2] = jq;
          var kq = Js(ho), Mu = Qd + 24;
          l[Mu >> 2] = kq;
          var Nu = l[za], Ou = l[ka], SC = Gu - (jq * Nu + kq * Ou), io = Qd + 12, TC = (x[0] = Fu - (kq * Nu - jq * Ou), w[0]), UC = (x[0] = SC, w[0]) | 0;
          h[io >> 2] = 0 | TC;
          h[io + 4 >> 2] = UC;
          Ys(le, h[ha]);
          Q = le + 4 >> 2;
          var lq = h[Q];
          h[Q] = lq & -33;
          h[le + 128 >> 2] += 1;
          if ((lq & 6) == 6) {
            D = vd + 4 >> 1;
            var Pu = b[D];
            (Pu & 2) == 0 && (b[D] = Pu | 2, l[vd + 144 >> 2] = 0);
            P = Qd + 4 >> 1;
            var Qu = b[P];
            (Qu & 2) == 0 && (b[P] = Qu | 2, l[Qd + 144 >> 2] = 0);
            h[ga] = 0;
            h[pb] = 0;
            h[VA >> 2] = 0;
            var Ru = h[St >> 2];
            if (Ru > 0) {
              var mq = vd + 8;
              h[mq >> 2] = 0;
              var nq = h[$a];
              h[nq >> 2] = vd;
              h[ga] = 1;
              if (Ru > 1) {
                var Su = mq, Tu = nq;
                R = 367;
              } else {
                var Uu = mq, Vu = nq;
                R = 366;
              }
            } else {
              G(y.o, 54, y.F, y.J);
              var Wu = vd + 8;
              h[Wu >> 2] = 0;
              var Xu = h[$a];
              h[Xu >> 2] = vd;
              h[ga] = 1;
              Uu = Wu;
              Vu = Xu;
              R = 366;
            }
            R == 366 && (G(y.o, 54, y.F, y.J), Su = Uu, Tu = Vu);
            var Yu = Qd + 8;
            h[Yu >> 2] = 1;
            h[Tu + 4 >> 2] = Qd;
            h[ga] = 2;
            h[Tt >> 2] > 0 || G(y.o, 62, y.P, y.T);
            h[pb] = 1;
            h[h[jb] >> 2] = le;
            b[D] |= 1;
            b[P] |= 1;
            h[Q] |= 1;
            h[cc >> 2] = vd;
            h[WA >> 2] = Qd;
            for (var Zu = h[St >> 2], $u = h[Tt >> 2], oq = k[jb], jo = k[$a], pq = 0; ; ) {
              if (pq >= 2) {
                break;
              }
              var qq = h[cc + (pq << 2) >> 2], VC = h[qq >> 2] == 2;
              a : do {
                if (VC) {
                  for (var WC = qq + 4, av = qq + 112; ; ) {
                    var ko = h[av >> 2];
                    if (ko == 0) {
                      break a;
                    }
                    var km = h[ga];
                    if (km == Zu) {
                      break a;
                    }
                    var lo = h[pb];
                    if (lo == $u) {
                      break a;
                    }
                    var lm = h[ko + 4 >> 2];
                    H = lm + 4 >> 2;
                    var XC = (h[H] & 1) == 0;
                    b : do {
                      if (XC) {
                        var Kc = h[ko >> 2], bv = Kc, YC = h[bv >> 2] == 2;
                        do {
                          if (YC && (b[WC >> 1] & 8) == 0 && (b[Kc + 4 >> 1] & 8) == 0) {
                            break b;
                          }
                        } while (0);
                        if ((a[h[lm + 48 >> 2] + 38] & 1) == 0 && (a[h[lm + 52 >> 2] + 38] & 1) == 0) {
                          F = Kc + 28 >> 2;
                          var oj = l[F];
                          B = Kc + 32 >> 2;
                          var pj = l[B];
                          M = Kc + 36 >> 2;
                          var rq = l[M];
                          J = Kc + 40 >> 2;
                          var sq = l[J];
                          K = Kc + 44 >> 2;
                          var mm = l[K];
                          C = Kc + 48 >> 2;
                          var nm = l[C];
                          I = Kc + 52 >> 2;
                          var tq = l[I];
                          z = Kc + 56 >> 2;
                          var qj = l[z];
                          E = Kc + 60 >> 2;
                          var mo = l[E];
                          A = Kc + 4 >> 1;
                          if ((b[A] & 1) == 0) {
                            if (mo < 1) {
                              var uq = mo, cv = rq, dv = sq, ev = mm, fv = nm, gv = tq, hv = qj, vq = oj, wq = pj, iv = Kc + 36;
                            } else {
                              G(y.B, 715, y.w, y.t);
                              var jv = Kc + 36, uq = l[E], cv = l[jv >> 2], dv = l[J], ev = l[K], fv = l[C], gv = l[I], hv = l[z], vq = l[F], wq = l[B], iv = jv;
                            }
                            var no = (Pd - uq) / (1 - uq), xq = 1 - no, kv = cv * xq + ev * no, lv = dv * xq + fv * no, mv = iv, ZC = (x[0] = kv, w[0]), $C = (x[0] = lv, w[0]), nv = 0 | ZC, ov = $C | 0, sd = mv;
                            ca = sd >> 2;
                            h[ca] = nv;
                            td = mv + 4;
                            Ua = td >> 2;
                            h[Ua] = ov;
                            var oo = xq * gv + no * hv;
                            l[I] = oo;
                            l[E] = Pd;
                            var pv = Kc + 44, $p = pv;
                            h[$p >> 2] = nv;
                            aq = pv + 4;
                            h[aq >> 2] = ov;
                            l[z] = oo;
                            var yq = Is(oo);
                            l[Kc + 20 >> 2] = yq;
                            var zq = Js(oo);
                            l[Kc + 24 >> 2] = zq;
                            var aD = lv - (yq * vq + zq * wq), qv = Kc + 12, bD = (x[0] = kv - (zq * vq - yq * wq), w[0]), cD = (x[0] = aD, w[0]) | 0, dq = qv;
                            h[dq >> 2] = 0 | bD;
                            eq = qv + 4;
                            h[eq >> 2] = cD;
                          }
                          Ys(lm, h[ha]);
                          var Aq = h[H];
                          if ((Aq & 4) == 0) {
                            l[F] = oj;
                            l[B] = pj;
                            l[M] = rq;
                            l[J] = sq;
                            l[K] = mm;
                            l[C] = nm;
                            l[I] = tq;
                            l[z] = qj;
                            l[E] = mo;
                            var Bq = Is(qj);
                            l[Kc + 20 >> 2] = Bq;
                            var Cq = Js(qj);
                            l[Kc + 24 >> 2] = Cq;
                            var dD = nm - (Bq * oj + Cq * pj), rv = Kc + 12, eD = (x[0] = mm - (Cq * oj - Bq * pj), w[0]), fD = (x[0] = dD, w[0]) | 0, Yd = rv;
                            Oa = Yd >> 2;
                            h[Oa] = 0 | eD;
                            Se = rv + 4;
                            Ha = Se >> 2;
                            h[Ha] = fD;
                          } else {
                            if ((Aq & 2) == 0) {
                              l[F] = oj;
                              l[B] = pj;
                              l[M] = rq;
                              l[J] = sq;
                              l[K] = mm;
                              l[C] = nm;
                              l[I] = tq;
                              l[z] = qj;
                              l[E] = mo;
                              var Dq = Is(qj);
                              l[Kc + 20 >> 2] = Dq;
                              var Eq = Js(qj);
                              l[Kc + 24 >> 2] = Eq;
                              var gD = nm - (Dq * oj + Eq * pj), sv = Kc + 12, hD = (x[0] = mm - (Eq * oj - Dq * pj), w[0]), iD = (x[0] = gD, w[0]) | 0, Yd = sv;
                              Oa = Yd >> 2;
                              h[Oa] = 0 | hD;
                              Se = sv + 4;
                              Ha = Se >> 2;
                              h[Ha] = iD;
                            } else {
                              h[H] = Aq | 1;
                              lo < $u || G(y.o, 62, y.P, y.T);
                              h[pb] = lo + 1;
                              h[(lo << 2) + oq >> 2] = lm;
                              var po = b[A];
                              (po & 1) == 0 && (b[A] = po | 1, h[bv >> 2] != 0 && (po & 2) == 0 && (b[A] = po | 3, l[Kc + 144 >> 2] = 0), km < Zu || G(y.o, 54, y.F, y.J), h[Kc + 8 >> 2] = km, h[(km << 2) + jo >> 2] = Kc, h[ga] = km + 1);
                            }
                          }
                        }
                      }
                    } while (0);
                    av = ko + 12;
                  }
                }
              } while (0);
              pq += 1;
            }
            var wi = (1 - Pd) * .01666666753590107, jD = 1 / wi;
            a[gc] = 0;
            var om = k[Su >> 2], pm = k[Yu >> 2], qm = k[ga];
            qm > om || G(y.ua, 386, y.la, y.Fb);
            qm > pm || G(y.ua, 387, y.la, y.Xb);
            var tv = qm > 0, Fq = h[Za], Gq = h[Ka];
            a : do {
              if (tv) {
                for (var rj = 0; ; ) {
                  var qo = h[jo + (rj << 2) >> 2], uv = Fq, vv = qo + 44, wv = uv + rj * 12, Wf = vv;
                  Ma = Wf >> 2;
                  var kD = h[Ma], xh = vv + 4;
                  ia = xh >> 2;
                  var lD = h[ia];
                  h[wv >> 2] = kD;
                  h[wv + 4 >> 2] = lD;
                  l[(uv + 8 >> 2) + (rj * 3 | 0)] = l[qo + 56 >> 2];
                  var xv = Gq, yv = qo + 64, zv = xv + rj * 12, Hq = yv, Iq = yv + 4, mD = h[Iq >> 2], Jq = zv;
                  h[Jq >> 2] = h[Hq >> 2];
                  var Kq = zv + 4;
                  h[Kq >> 2] = mD;
                  l[(xv + 8 >> 2) + (rj * 3 | 0)] = l[qo + 72 >> 2];
                  var Av = rj + 1;
                  if (Av < qm) {
                    rj = Av;
                  } else {
                    var ro = Fq, so = Gq;
                    break a;
                  }
                }
              } else {
                ro = Fq, so = Gq;
              }
            } while (0);
            var Bv = oq;
            h[$A >> 2] = Bv;
            var Lq = k[pb];
            h[aB >> 2] = Lq;
            h[bB >> 2] = h[zb >> 2];
            l[Cb >> 2] = wi;
            l[cB >> 2] = jD;
            l[dB >> 2] = 1;
            h[eB >> 2] = 3;
            h[fB >> 2] = 20;
            a[gB] = 0;
            var rm = ro;
            h[hB >> 2] = rm;
            h[iB >> 2] = so;
            Zs(Ub, Cb);
            var Cv = h[jB >> 2], nD = Cv > 0, to = h[Ut >> 2];
            u = to >> 2;
            for (var uo = h[kB >> 2], Dv = 0; ; ) {
              if (Dv >= 20) {
                break;
              }
              a : do {
                if (nD) {
                  for (var Xf = 0, Mq = 0; ; ) {
                    var oD = to + Xf * 88, vo = h[u + (Xf * 22 | 0) + 8], Ev = h[u + (Xf * 22 | 0) + 9], Fv = to + Xf * 88 + 48, Wf = Fv;
                    Ma = Wf >> 2;
                    xh = Fv + 4;
                    ia = xh >> 2;
                    var pD = h[ia], Gv = (w[0] = h[Ma], x[0]), Hv = (w[0] = pD, x[0]), Iv = to + Xf * 88 + 56, Kg = Iv;
                    xb = Kg >> 2;
                    Xe = Iv + 4;
                    wb = Xe >> 2;
                    var qD = h[wb], Jv = (w[0] = h[xb], x[0]), Kv = (w[0] = qD, x[0]), Lv = h[u + (Xf * 22 | 0) + 21];
                    if (vo == om | vo == pm) {
                      var Nq = l[u + (Xf * 22 | 0) + 16], wo = l[u + (Xf * 22 | 0) + 10];
                    } else {
                      wo = Nq = 0;
                    }
                    var Mv = l[u + (Xf * 22 | 0) + 17], Oq = l[u + (Xf * 22 | 0) + 11], xo = uo + vo * 12, rD = h[xo + 4 >> 2], Nv = (w[0] = h[xo >> 2], x[0]), Ov = (w[0] = rD, x[0]), Pv = uo + vo * 12 + 8, Qv = l[Pv >> 2], yo = uo + Ev * 12, sD = h[yo + 4 >> 2], Rv = (w[0] = h[yo >> 2], x[0]), Sv = (w[0] = sD, x[0]), Tv = uo + Ev * 12 + 8, Uv = l[Tv >> 2], tD = Lv > 0;
                    b : do {
                      if (tD) {
                        for (var uD = wo + Oq, zo = Sv, Ao = Rv, Bo = Ov, Co = Nv, Pq = Mq, Do = Qv, Eo = Uv, Qq = 0; ; ) {
                          var Rq = Is(Do);
                          l[lB >> 2] = Rq;
                          var Sq = Js(Do);
                          l[mB >> 2] = Sq;
                          var Tq = Is(Eo);
                          l[nB >> 2] = Tq;
                          var Uq = Js(Eo);
                          l[oB >> 2] = Uq;
                          var vD = Bo - (Rq * Gv + Sq * Hv), wD = (x[0] = Co - (Sq * Gv - Rq * Hv), w[0]), xD = (x[0] = vD, w[0]), yD = 0 | wD, zD = xD | 0, ej = W;
                          h[ej >> 2] = yD;
                          mi = W + 4;
                          h[mi >> 2] = zD;
                          var AD = zo - (Tq * Jv + Uq * Kv), BD = (x[0] = Ao - (Uq * Jv - Tq * Kv), w[0]), CD = (x[0] = AD, w[0]), DD = 0 | BD, ED = CD | 0, fj = Xb;
                          h[fj >> 2] = DD;
                          ni = Xb + 4;
                          h[ni >> 2] = ED;
                          bt(Tb, oD, W, Xb, Qq);
                          var bk = Tb, oi = Tb + 4, FD = h[oi >> 2], Vq = (w[0] = h[bk >> 2], x[0]), Wq = (w[0] = FD, x[0]), dk = Vt, ek = Vt + 4, GD = h[ek >> 2], Vv = (w[0] = h[dk >> 2], x[0]), Wv = (w[0] = GD, x[0]), Xq = l[pB >> 2], Xv = Vv - Co, Yv = Wv - Bo, Zv = Vv - Ao, $v = Wv - zo, aw = Pq < Xq ? Pq : Xq, bw = (Xq + .004999999888241291) * .75, cw = bw < 0 ? bw : 0, dw = Xv * Wq - Yv * Vq, ew = Zv * Wq - $v * Vq, fw = uD + Nq * dw * dw + Mv * ew * ew, gw = fw > 0 ? -(cw < -.20000000298023224 ? -.20000000298023224 : cw) / fw : 0, Fo = Vq * gw, Go = Wq * gw, hw = Co - Fo * wo, iw = Bo - Go * wo, jw = Do - Nq * (Xv * Go - Yv * Fo), kw = Ao + Fo * Oq, lw = zo + Go * Oq, mw = Eo + Mv * (Zv * Go - $v * Fo), nw = Qq + 1;
                          if (nw == Lv) {
                            var ow = lw, pw = kw, qw = iw, rw = hw, Yq = aw, sw = jw, tw = mw;
                            break b;
                          } else {
                            zo = lw, Ao = kw, Bo = iw, Co = hw, Pq = aw, Do = jw, Eo = mw, Qq = nw;
                          }
                        }
                      } else {
                        ow = Sv, pw = Rv, qw = Ov, rw = Nv, Yq = Mq, sw = Qv, tw = Uv;
                      }
                    } while (0);
                    var HD = (x[0] = rw, w[0]), ID = (x[0] = qw, w[0]) | 0, xe = xo;
                    Ga = xe >> 2;
                    h[Ga] = 0 | HD;
                    Ue = xo + 4;
                    Na = Ue >> 2;
                    h[Na] = ID;
                    l[Pv >> 2] = sw;
                    var JD = (x[0] = pw, w[0]), KD = (x[0] = ow, w[0]) | 0, zh = yo;
                    ab = zh >> 2;
                    h[ab] = 0 | JD;
                    Ah = yo + 4;
                    xa = Ah >> 2;
                    h[xa] = KD;
                    l[Tv >> 2] = tw;
                    var uw = Xf + 1;
                    if (uw < Cv) {
                      Xf = uw, Mq = Yq;
                    } else {
                      var vw = Yq;
                      break a;
                    }
                  }
                } else {
                  vw = 0;
                }
              } while (0);
              if (vw >= -.007499999832361937) {
                break;
              }
              Dv += 1;
            }
            var ww = jo, xw = (om << 2) + ww, yw = rm + om * 12, zw = h[xw >> 2] + 36, LD = h[yw >> 2], MD = h[yw + 4 >> 2], lk = zw;
            h[lk >> 2] = LD;
            El = zw + 4;
            h[El >> 2] = MD;
            l[h[xw >> 2] + 52 >> 2] = l[(rm + 8 >> 2) + (om * 3 | 0)];
            var Aw = (pm << 2) + ww, Bw = rm + pm * 12, Cw = h[Aw >> 2] + 36, Hq = Bw, ND = h[Hq >> 2], Iq = Bw + 4, OD = h[Iq >> 2], Jq = Cw;
            h[Jq >> 2] = ND;
            Kq = Cw + 4;
            h[Kq >> 2] = OD;
            l[h[Aw >> 2] + 52 >> 2] = l[(rm + 8 >> 2) + (pm * 3 | 0)];
            $s(Ub);
            for (var Dw = 0; ; ) {
              if (Dw >= 3) {
                break;
              }
              at(Ub);
              Dw += 1;
            }
            a : do {
              if (tv) {
                for (var Qg = 0, Ew = ro, Fw = so; ; ) {
                  var Gw = Ew, Ho = Gw + Qg * 12, Zq = Ho, $q = Ho + 4, PD = h[$q >> 2], QD = (w[0] = h[Zq >> 2], x[0]), RD = (w[0] = PD, x[0]), SD = l[(Gw + 8 >> 2) + (Qg * 3 | 0)], Hw = Fw, Iw = Hw + Qg * 12, Kg = Iw;
                  xb = Kg >> 2;
                  Xe = Iw + 4;
                  wb = Xe >> 2;
                  var TD = h[wb], ar = (w[0] = h[xb], x[0]), br = (w[0] = TD, x[0]), cr = l[(Hw + 8 >> 2) + (Qg * 3 | 0)], Jw = ar * wi, Kw = br * wi, Lw = Jw * Jw + Kw * Kw;
                  if (Lw > 4) {
                    var Mw = 2 / an(Lw), dr = ar * Mw, er = br * Mw;
                  } else {
                    dr = ar, er = br;
                  }
                  var sm = wi * cr, fr = sm * sm > 2.4674012660980225 ? cr * (1.5707963705062866 / (sm > 0 ? sm : -sm)) : cr, Nw = QD + dr * wi, Ow = RD + er * wi, Io = SD + wi * fr, UD = (x[0] = Nw, w[0]), VD = (x[0] = Ow, w[0]), Pw = 0 | UD, Qw = VD | 0, xe = Ho;
                  Ga = xe >> 2;
                  h[Ga] = Pw;
                  Ue = Ho + 4;
                  Na = Ue >> 2;
                  h[Na] = Qw;
                  var gr = h[Za];
                  l[(gr + 8 >> 2) + (Qg * 3 | 0)] = Io;
                  var hr = h[Ka], Rw = hr, Sw = Rw + Qg * 12, WD = (x[0] = dr, w[0]), XD = (x[0] = er, w[0]), Tw = 0 | WD, Uw = XD | 0, Mk = Sw;
                  h[Mk >> 2] = Tw;
                  Nk = Sw + 4;
                  h[Nk >> 2] = Uw;
                  l[(Rw + 8 >> 2) + (Qg * 3 | 0)] = fr;
                  var Vw = h[$a], Jo = h[Vw + (Qg << 2) >> 2];
                  s = Jo >> 2;
                  var Ww = Jo + 44;
                  h[Ww >> 2] = Pw;
                  h[Ww + 4 >> 2] = Qw;
                  l[s + 14] = Io;
                  var Xw = Jo + 64;
                  h[Xw >> 2] = Tw;
                  h[Xw + 4 >> 2] = Uw;
                  l[s + 18] = fr;
                  var ir = Is(Io);
                  l[s + 5] = ir;
                  var jr = Js(Io);
                  l[s + 6] = jr;
                  var Yw = l[s + 7], Zw = l[s + 8], YD = Ow - (ir * Yw + jr * Zw), $w = Jo + 12, ZD = (x[0] = Nw - (jr * Yw - ir * Zw), w[0]), $D = (x[0] = YD, w[0]) | 0;
                  h[$w >> 2] = 0 | ZD;
                  h[$w + 4 >> 2] = $D;
                  var ax = Qg + 1, bx = h[ga];
                  if (ax < bx) {
                    Qg = ax, Ew = gr, Fw = hr;
                  } else {
                    var cx = bx, kr = Vw, dx = gr, ex = hr;
                    break a;
                  }
                }
              } else {
                cx = qm, kr = jo, dx = ro, ex = so;
              }
            } while (0);
            var fx = k[qB >> 2];
            r = fx >> 2;
            var lr = h[rB >> 2], aE = lr != 0 & Lq > 0;
            a : do {
              if (aE) {
                for (var yk = 0; ; ) {
                  var bE = h[Bv + (yk << 2) >> 2], mr = h[r + (yk * 38 | 0) + 36];
                  h[tB >> 2] = mr;
                  var cE = mr > 0;
                  b : do {
                    if (cE) {
                      for (var zk = 0; ; ) {
                        l[yb + (zk << 2) >> 2] = l[r + (yk * 38 | 0) + (zk * 9 | 0) + 4];
                        l[yb + (zk << 2) + 8 >> 2] = l[r + (yk * 38 | 0) + (zk * 9 | 0) + 5];
                        var gx = zk + 1;
                        if (gx == mr) {
                          break b;
                        } else {
                          zk = gx;
                        }
                      }
                    }
                  } while (0);
                  im[h[h[lr >> 2] + 20 >> 2]](lr, bE, yb);
                  var hx = yk + 1;
                  if (hx < Lq) {
                    yk = hx;
                  } else {
                    break a;
                  }
                }
              }
            } while (0);
            var ix = h[sB >> 2];
            Ls(ix, fx);
            Ls(ix, h[Ut >> 2]);
            for (var nr = 0; ; ) {
              if (nr >= cx) {
                break;
              }
              var or = h[kr + (nr << 2) >> 2];
              p = or >> 2;
              b[or + 4 >> 1] &= -2;
              var dE = h[p] == 2;
              a : do {
                if (dE) {
                  var jx = l[p + 13], pr = Is(jx);
                  l[XA >> 2] = pr;
                  var qr = Js(jx);
                  l[YA >> 2] = qr;
                  var kx = l[p + 7], lx = l[p + 8], eE = l[p + 10] - (pr * kx + qr * lx), fE = (x[0] = l[p + 9] - (qr * kx - pr * lx), w[0]), gE = (x[0] = eE, w[0]) | 0, zh = ya;
                  ab = zh >> 2;
                  h[ab] = 0 | fE;
                  Ah = ya + 4;
                  xa = Ah >> 2;
                  h[xa] = gE;
                  var hE = h[p + 22] + 102872, mx = h[p + 25], iE = mx == 0;
                  b : do {
                    if (!iE) {
                      for (var jE = or + 12, rr = mx; ; ) {
                        Vs(rr, hE, ya, jE);
                        var nx = h[rr + 4 >> 2];
                        if (nx == 0) {
                          break b;
                        } else {
                          rr = nx;
                        }
                      }
                    }
                  } while (0);
                  var ox = h[p + 28];
                  if (ox != 0) {
                    for (var sr = ox; ; ) {
                      h[h[sr + 4 >> 2] + 4 >> 2] &= -34;
                      var px = h[sr + 12 >> 2];
                      if (px == 0) {
                        break a;
                      } else {
                        sr = px;
                      }
                    }
                  }
                }
              } while (0);
              nr += 1;
            }
            Ps(sc, sc);
            if ((a[ZA] & 1) == 0) {
              le = 0, Pd = 1, bo = Nb;
            } else {
              Zt = 0;
              $t = kr;
              au = oq;
              bu = dx;
              cu = ex;
              break;
            }
          } else {
            h[Q] = lq & -37;
            l[Ba] = du;
            l[aa] = eu;
            l[fu >> 2] = gu;
            l[X] = hu;
            l[Z] = iu;
            l[Ea] = ju;
            l[$] = ku;
            l[T] = lu;
            l[S] = Vp;
            l[za] = CC;
            l[ka] = DC;
            l[mu >> 2] = EC;
            l[ja] = FC;
            l[N] = GC;
            l[U] = HC;
            l[ib] = IC;
            l[L] = JC;
            l[O] = KC;
            var qx = l[T], tr = Is(qx);
            l[Bu >> 2] = tr;
            var ur = Js(qx);
            l[Cu >> 2] = ur;
            var rx = l[Ba], sx = l[aa], kE = l[Ea] - (tr * rx + ur * sx), lE = (x[0] = l[Z] - (ur * rx - tr * sx), w[0]), mE = (x[0] = kE, w[0]) | 0, Qj = fo;
            h[Qj >> 2] = 0 | lE;
            Rj = fo + 4;
            h[Rj >> 2] = mE;
            var tx = l[L], vr = Is(tx);
            l[Lu >> 2] = vr;
            var wr = Js(tx);
            l[Mu >> 2] = wr;
            var ux = l[za], vx = l[ka], nE = l[U] - (vr * ux + wr * vx), oE = (x[0] = l[N] - (wr * ux - vr * vx), w[0]), pE = (x[0] = nE, w[0]) | 0;
            h[io >> 2] = 0 | oE;
            h[io + 4 >> 2] = pE;
            le = 0;
            Pd = 1;
            bo = Nb;
          }
        }
      } else {
        q = jm + 4 >> 2;
        var wx = h[q], qE = (wx & 4) == 0;
        do {
          if (qE) {
            var xi = le, yi = Pd;
          } else {
            if (h[Ca + 32] > 8) {
              xi = le, yi = Pd;
            } else {
              if ((wx & 32) == 0) {
                var xr = h[Ca + 12], yr = h[Ca + 13];
                if ((a[xr + 38] & 1) != 0) {
                  xi = le;
                  yi = Pd;
                  break;
                }
                if ((a[yr + 38] & 1) != 0) {
                  xi = le;
                  yi = Pd;
                  break;
                }
                var Rg = h[xr + 8 >> 2], Sg = h[yr + 8 >> 2], zr = h[Rg >> 2], Ar = h[Sg >> 2];
                zr == 2 | Ar == 2 || G(y.r, 641, y.ka, y.xc);
                var xx = b[Rg + 4 >> 1], yx = b[Sg + 4 >> 1];
                if (!((xx & 2) != 0 & zr != 0 | (yx & 2) != 0 & Ar != 0)) {
                  xi = le;
                  yi = Pd;
                  break;
                }
                if (!((xx & 8) != 0 | zr != 2 | (yx & 8) != 0 | Ar != 2)) {
                  xi = le;
                  yi = Pd;
                  break;
                }
                var rE = Rg + 28;
                o = Rg + 60 >> 2;
                var sj = l[o], sE = Sg + 28;
                n = Sg + 60 >> 2;
                var Ak = l[n];
                if (sj < Ak) {
                  if (sj < 1) {
                    var Br = sj;
                  } else {
                    G(y.B, 715, y.w, y.t), Br = l[o];
                  }
                  var Ko = (Ak - Br) / (1 - Br), zx = Rg + 36, Cr = 1 - Ko, tE = l[Rg + 40 >> 2] * Cr + l[Rg + 48 >> 2] * Ko, Ax = zx, uE = (x[0] = l[zx >> 2] * Cr + l[Rg + 44 >> 2] * Ko, w[0]), vE = (x[0] = tE, w[0]), wE = 0 | uE, xE = vE | 0, sd = Ax;
                  ca = sd >> 2;
                  h[ca] = wE;
                  td = Ax + 4;
                  Ua = td >> 2;
                  h[Ua] = xE;
                  var Bx = Rg + 52;
                  l[Bx >> 2] = Cr * l[Bx >> 2] + Ko * l[Rg + 56 >> 2];
                  var Lo = l[o] = Ak;
                } else {
                  if (Ak < sj) {
                    if (Ak < 1) {
                      var Dr = Ak;
                    } else {
                      G(y.B, 715, y.w, y.t), Dr = l[n];
                    }
                    var Mo = (sj - Dr) / (1 - Dr), Cx = Sg + 36, Er = 1 - Mo, yE = l[Sg + 40 >> 2] * Er + l[Sg + 48 >> 2] * Mo, Dx = Cx, zE = (x[0] = l[Cx >> 2] * Er + l[Sg + 44 >> 2] * Mo, w[0]), AE = (x[0] = yE, w[0]), BE = 0 | zE, CE = AE | 0, sd = Dx;
                    ca = sd >> 2;
                    h[ca] = BE;
                    td = Dx + 4;
                    Ua = td >> 2;
                    h[Ua] = CE;
                    var Ex = Sg + 52;
                    l[Ex >> 2] = Er * l[Ex >> 2] + Mo * l[Sg + 56 >> 2];
                    l[n] = sj;
                  }
                  Lo = sj;
                }
                Lo < 1 || G(y.r, 676, y.ka, y.t);
                var DE = h[Ca + 14], EE = h[Ca + 15];
                h[Lt >> 2] = 0;
                h[Mt >> 2] = 0;
                l[Nt >> 2] = 0;
                h[Ya] = 0;
                h[da] = 0;
                l[Ot >> 2] = 0;
                Mp(ta, h[xr + 12 >> 2], DE);
                Mp(Tp, h[yr + 12 >> 2], EE);
                for (var Eh = rE >> 2, tm = Pt >> 2, Fr = Eh + 9; Eh < Fr; Eh++, tm++) {
                  h[tm] = h[Eh];
                }
                Eh = sE >> 2;
                tm = Qt >> 2;
                for (Fr = Eh + 9; Eh < Fr; Eh++, tm++) {
                  h[tm] = h[Eh];
                }
                l[Rt >> 2] = 1;
                h[ct >> 2] += 1;
                var Gr = l[Pt >> 2], Hr = l[uB >> 2], Gx = l[vB >> 2], Hx = l[wB >> 2], Ix = l[xB >> 2], Jx = l[yB >> 2], Kx = l[zB >> 2], FE = l[AB >> 2], GE = l[BB >> 2], Ir = l[Qt >> 2], Jr = l[CB >> 2], Lx = l[DB >> 2], Mx = l[EB >> 2], Nx = l[FB >> 2], Ox = l[GB >> 2], Px = l[HB >> 2], HE = l[IB >> 2], IE = l[JB >> 2], Rx = dt(Kx / 6.2831854820251465) * 6.2831854820251465, Sx = Kx - Rx, Tx = FE - Rx, Ux = dt(Px / 6.2831854820251465) * 6.2831854820251465, Vx = Px - Ux, Wx = HE - Ux, um = l[Rt >> 2], Xx = l[Nt >> 2] + l[Ot >> 2] - .014999999664723873, Bk = Xx < .004999999888241291 ? .004999999888241291 : Xx;
                Bk > .0012499999720603228 || G(y.K, 280, y.gb, y.Pb);
                b[Wt >> 1] = 0;
                h[Xa] = h[qa];
                h[Xa + 1] = h[qa + 1];
                h[Xa + 2] = h[qa + 2];
                h[Xa + 3] = h[qa + 3];
                h[Xa + 4] = h[qa + 4];
                h[Xa + 5] = h[qa + 5];
                h[Xa + 6] = h[qa + 6];
                h[Wa] = h[Ra];
                h[Wa + 1] = h[Ra + 1];
                h[Wa + 2] = h[Ra + 2];
                h[Wa + 3] = h[Ra + 3];
                h[Wa + 4] = h[Ra + 4];
                h[Wa + 5] = h[Ra + 5];
                h[Wa + 6] = h[Ra + 6];
                a[KB] = 0;
                var Kr = Bk + .0012499999720603228, Yx = Bk - .0012499999720603228, Ye = 0, vm = 0;
                a : for (;;) {
                  var Ck = 1 - Ye, JE = Gx * Ck + Ix * Ye, KE = Hx * Ck + Jx * Ye, Zx = Ck * Sx + Tx * Ye, kg = Is(Zx), lg = Js(Zx), No = JE - (lg * Gr - kg * Hr), Oo = KE - (kg * Gr + lg * Hr), LE = Lx * Ck + Nx * Ye, ME = Mx * Ck + Ox * Ye, $x = Ck * Vx + Wx * Ye, mg = Is($x), ng = Js($x), Po = LE - (ng * Ir - mg * Jr), Qo = ME - (mg * Ir + ng * Jr);
                  l[LB >> 2] = No;
                  l[MB >> 2] = Oo;
                  l[NB >> 2] = kg;
                  l[OB >> 2] = lg;
                  l[PB >> 2] = Po;
                  l[QB >> 2] = Qo;
                  l[RB >> 2] = mg;
                  l[SB >> 2] = ng;
                  Np(Mb, bc, Ja);
                  var ay = l[TB >> 2];
                  if (ay <= 0) {
                    var wm = vm, Ro = 0, So = 2;
                    break;
                  }
                  if (ay < Kr) {
                    wm = vm;
                    Ro = Ye;
                    So = 3;
                    break;
                  }
                  h[va] = ta;
                  h[Fa] = Tp;
                  var Lr = k[Wt >> 2], Mr = Lr & 65535, To = Lr >>> 16, NE = To & 255, Nr = Lr >>> 24, OE = Nr & 255;
                  Mr != 0 & Mr < 3 || G(y.K, 50, y.ob, y.sc);
                  l[UB >> 2] = Gr;
                  l[VB >> 2] = Hr;
                  l[WB >> 2] = Gx;
                  l[XB >> 2] = Hx;
                  l[YB >> 2] = Ix;
                  l[ZB >> 2] = Jx;
                  l[$B >> 2] = Sx;
                  l[aC >> 2] = Tx;
                  l[bC >> 2] = GE;
                  l[cC >> 2] = Ir;
                  l[dC >> 2] = Jr;
                  l[eC >> 2] = Lx;
                  l[fC >> 2] = Mx;
                  l[gC >> 2] = Nx;
                  l[hC >> 2] = Ox;
                  l[iC >> 2] = Vx;
                  l[jC >> 2] = Wx;
                  l[kC >> 2] = IE;
                  var PE = Mr == 1;
                  do {
                    if (PE) {
                      h[Y] = 0;
                      var by = h[va], cy = To & 255;
                      h[by + 20 >> 2] > cy || G(y.b, 103, y.a, y.c);
                      var dy = (cy << 3) + h[by + 16 >> 2], me = dy;
                      m = me >> 2;
                      var ne = dy + 4;
                      j = ne >> 2;
                      var QE = h[j], ey = (w[0] = h[m], x[0]), fy = (w[0] = QE, x[0]), gy = h[Fa], hy = Dh[Up];
                      h[gy + 20 >> 2] > hy || G(y.b, 103, y.a, y.c);
                      var iy = (hy << 3) + h[gy + 16 >> 2], me = iy;
                      m = me >> 2;
                      ne = iy + 4;
                      j = ne >> 2;
                      var RE = h[j], jy = (w[0] = h[m], x[0]), ky = (w[0] = RE, x[0]), Uo = ng * jy - mg * ky + Po - (lg * ey - kg * fy + No), Vo = mg * jy + ng * ky + Qo - (kg * ey + lg * fy + Oo), SE = (x[0] = Uo, w[0]), TE = (x[0] = Vo, w[0]) | 0;
                      h[ua] = 0 | SE;
                      h[ua + 1] = TE;
                      var ly = an(Uo * Uo + Vo * Vo);
                      if (ly < 1.1920928955078125e-7) {
                        var xm = 1, Ze = um;
                        break;
                      }
                      var my = 1 / ly;
                      l[Qa] = Uo * my;
                      l[pa] = Vo * my;
                    } else {
                      if (NE == OE) {
                        h[Y] = 2;
                        var ny = Dh[Up], oy = h[da];
                        if (oy > ny) {
                          var py = oy;
                        } else {
                          G(y.b, 103, y.a, y.c), py = h[da];
                        }
                        var qy = k[Ya], ry = (ny << 3) + qy, me = ry;
                        m = me >> 2;
                        ne = ry + 4;
                        j = ne >> 2;
                        var UE = h[j], sy = (w[0] = h[m], x[0]), ty = (w[0] = UE, x[0]), uy = Dh[zC];
                        if (py > uy) {
                          var vy = qy;
                        } else {
                          G(y.b, 103, y.a, y.c), vy = h[Ya];
                        }
                        var wy = (uy << 3) + vy, Or = wy, Pr = wy + 4, VE = h[Pr >> 2], xy = (w[0] = h[Or >> 2], x[0]), yy = (w[0] = VE, x[0]), ym = yy - ty, zm = (xy - sy) * -1, WE = (x[0] = ym, w[0]), XE = (x[0] = zm, w[0]), YE = 0 | WE, ZE = XE | 0, hq = vi;
                        h[hq >> 2] = YE;
                        iq = vi + 4;
                        h[iq >> 2] = ZE;
                        var zy = an(ym * ym + zm * zm);
                        if (zy < 1.1920928955078125e-7) {
                          var Qr = ym, Rr = zm;
                        } else {
                          var Ay = 1 / zy, By = ym * Ay;
                          l[Qa] = By;
                          var Cy = zm * Ay;
                          l[pa] = Cy;
                          Qr = By;
                          Rr = Cy;
                        }
                        var $E = ng * Qr - mg * Rr, aF = mg * Qr + ng * Rr, Sr = (sy + xy) * .5, Tr = (ty + yy) * .5, bF = (x[0] = Sr, w[0]), cF = (x[0] = Tr, w[0]) | 0, Ur = ao;
                        h[Ur >> 2] = 0 | bF;
                        var Vr = ao + 4;
                        h[Vr >> 2] = cF;
                        var dF = ng * Sr - mg * Tr + Po, eF = mg * Sr + ng * Tr + Qo, Dy = To & 255;
                        h[Mt >> 2] > Dy || G(y.b, 103, y.a, y.c);
                        var Ey = (Dy << 3) + h[Lt >> 2], Or = Ey, Pr = Ey + 4, fF = h[Pr >> 2], Fy = (w[0] = h[Or >> 2], x[0]), Gy = (w[0] = fF, x[0]);
                        if ((lg * Fy - kg * Gy + No - dF) * $E + (kg * Fy + lg * Gy + Oo - eF) * aF >= 0) {
                          xm = 1;
                          Ze = um;
                          break;
                        }
                        var gF = -l[pa], hF = (x[0] = -l[Qa], w[0]), iF = (x[0] = gF, w[0]) | 0, Re = vi;
                        cb = Re >> 2;
                        h[cb] = 0 | hF;
                        Fd = vi + 4;
                        Aa = Fd >> 2;
                        h[Aa] = iF;
                      } else {
                        h[Y] = 1;
                        var Wr = h[va], Hy = To & 255, Iy = h[Wr + 20 >> 2];
                        if (Iy > Hy) {
                          var Jy = Wr, Ky = Iy;
                        } else {
                          G(y.b, 103, y.a, y.c);
                          var Ly = h[va], Jy = Ly, Ky = h[Ly + 20 >> 2];
                        }
                        var My = (Hy << 3) + h[Wr + 16 >> 2], Zq = My, $q = My + 4, jF = h[$q >> 2], Ny = (w[0] = h[Zq >> 2], x[0]), Oy = (w[0] = jF, x[0]);
                        Ky > Nr || G(y.b, 103, y.a, y.c);
                        var Py = (Nr << 3) + h[Jy + 16 >> 2], me = Py;
                        m = me >> 2;
                        ne = Py + 4;
                        j = ne >> 2;
                        var kF = h[j], Qy = (w[0] = h[m], x[0]), Ry = (w[0] = kF, x[0]), Am = Ry - Oy, Bm = (Qy - Ny) * -1, lF = (x[0] = Am, w[0]), mF = (x[0] = Bm, w[0]) | 0;
                        h[ua] = 0 | lF;
                        h[ua + 1] = mF;
                        var Sy = an(Am * Am + Bm * Bm);
                        if (Sy < 1.1920928955078125e-7) {
                          var Xr = Am, Yr = Bm;
                        } else {
                          var Ty = 1 / Sy, Uy = Am * Ty;
                          l[Qa] = Uy;
                          var Vy = Bm * Ty;
                          l[pa] = Vy;
                          Xr = Uy;
                          Yr = Vy;
                        }
                        var nF = lg * Xr - kg * Yr, oF = kg * Xr + lg * Yr, Zr = (Ny + Qy) * .5, $r = (Oy + Ry) * .5, pF = (x[0] = Zr, w[0]), qF = (x[0] = $r, w[0]), rF = 0 | pF, sF = qF | 0, Ur = ao;
                        h[Ur >> 2] = rF;
                        Vr = ao + 4;
                        h[Vr >> 2] = sF;
                        var tF = lg * Zr - kg * $r + No, uF = kg * Zr + lg * $r + Oo, Wy = h[Fa], Xy = Dh[Up];
                        h[Wy + 20 >> 2] > Xy || G(y.b, 103, y.a, y.c);
                        var Yy = (Xy << 3) + h[Wy + 16 >> 2], me = Yy;
                        m = me >> 2;
                        ne = Yy + 4;
                        j = ne >> 2;
                        var vF = h[j], Zy = (w[0] = h[m], x[0]), $y = (w[0] = vF, x[0]);
                        if ((ng * Zy - mg * $y + Po - tF) * nF + (mg * Zy + ng * $y + Qo - uF) * oF >= 0) {
                          xm = 1;
                          Ze = um;
                          break;
                        }
                        var wF = -l[pa], xF = (x[0] = -l[Qa], w[0]), yF = (x[0] = wF, w[0]) | 0, Re = vi;
                        cb = Re >> 2;
                        h[cb] = 0 | xF;
                        Fd = vi + 4;
                        Aa = Fd >> 2;
                        h[Aa] = yF;
                      }
                    }
                    xm = 1;
                    Ze = um;
                  } while (0);
                  b : for (;;) {
                    var Dk = 1 - Ze, zF = l[lC >> 2] * Dk + l[nC >> 2] * Ze, AF = l[mC >> 2] * Dk + l[oC >> 2] * Ze, az = Dk * l[pC >> 2] + l[qC >> 2] * Ze, $e = Is(az), af = Js(az), bz = l[AC >> 2], cz = l[rC >> 2], as = zF - (af * bz - $e * cz), bs = AF - ($e * bz + af * cz), BF = l[sC >> 2] * Dk + l[uC >> 2] * Ze, CF = l[tC >> 2] * Dk + l[vC >> 2] * Ze, dz = Dk * l[wC >> 2] + l[xC >> 2] * Ze, bf = Is(dz), cf = Js(dz), ez = l[BC >> 2], fz = l[yC >> 2], cs = BF - (cf * ez - bf * fz), ds = CF - (bf * ez + cf * fz), es = h[Y];
                    if (es == 0) {
                      var Wo = l[mb], fs = l[pa], gz = af * Wo + $e * fs, hz = Wo * -$e + af * fs, iz = -fs, jz = cf * -Wo + bf * iz, kz = Wo * bf + cf * iz, lz = h[va], mz = lz + 16, nz = h[mz >> 2];
                      i = nz >> 2;
                      var gs = h[lz + 20 >> 2], DF = gs > 1;
                      c : do {
                        if (DF) {
                          for (var oz = 0, hs = l[i] * gz + l[i + 1] * hz, Cm = 1; ; ) {
                            var pz = l[(Cm << 3 >> 2) + i] * gz + l[((Cm << 3) + 4 >> 2) + i] * hz, qz = pz > hs, rz = qz ? Cm : oz, EF = qz ? pz : hs, sz = Cm + 1;
                            if (sz == gs) {
                              var Dm = rz;
                              break c;
                            } else {
                              oz = rz, hs = EF, Cm = sz;
                            }
                          }
                        } else {
                          Dm = 0;
                        }
                      } while (0);
                      var is = h[Fa];
                      g = h[is + 16 >> 2] >> 2;
                      var tz = h[is + 20 >> 2], FF = tz > 1;
                      c : do {
                        if (FF) {
                          for (var uz = 0, js = l[g] * jz + l[g + 1] * kz, Em = 1; ; ) {
                            var vz = l[(Em << 3 >> 2) + g] * jz + l[((Em << 3) + 4 >> 2) + g] * kz, wz = vz > js, xz = wz ? Em : uz, GF = wz ? vz : js, yz = Em + 1;
                            if (yz == tz) {
                              var Fm = xz;
                              break c;
                            } else {
                              uz = xz, js = GF, Em = yz;
                            }
                          }
                        } else {
                          Fm = 0;
                        }
                      } while (0);
                      if (Dm > -1 & gs > Dm) {
                        var zz = nz, ks = is;
                      } else {
                        G(y.b, 103, y.a, y.c), zz = h[mz >> 2], ks = h[Fa];
                      }
                      var Az = (Dm << 3) + zz, me = Az;
                      m = me >> 2;
                      ne = Az + 4;
                      j = ne >> 2;
                      var HF = h[j], Bz = (w[0] = h[m], x[0]), Cz = (w[0] = HF, x[0]);
                      R = Fm > -1 ? h[ks + 20 >> 2] > Fm ? 305 : 304 : 304;
                      R == 304 && G(y.b, 103, y.a, y.c);
                      var Dz = (Fm << 3) + h[ks + 16 >> 2], me = Dz;
                      m = me >> 2;
                      ne = Dz + 4;
                      j = ne >> 2;
                      var IF = h[j], Ez = (w[0] = h[m], x[0]), Fz = (w[0] = IF, x[0]), Ek = (cf * Ez - bf * Fz + cs - (af * Bz - $e * Cz + as)) * l[mb] + (bf * Ez + cf * Fz + ds - ($e * Bz + af * Cz + bs)) * l[pa], Gm = Dm, Xo = Fm;
                    } else {
                      if (es == 1) {
                        var Gz = l[mb], Hz = l[pa], ls = af * Gz - $e * Hz, Iz = $e * Gz + af * Hz, Jz = l[Xt >> 2], Kz = l[Yt >> 2], JF = af * Jz - $e * Kz + as, KF = $e * Jz + af * Kz + bs, Lz = -Iz, Mz = cf * -ls + bf * Lz, Nz = ls * bf + cf * Lz, Oz = h[Fa], Pz = Oz + 16, Qz = h[Pz >> 2];
                        f = Qz >> 2;
                        var ms = h[Oz + 20 >> 2], LF = ms > 1;
                        do {
                          if (LF) {
                            for (var Rz = 0, ns = l[f] * Mz + l[f + 1] * Nz, Hm = 1; ; ) {
                              var Sz = l[(Hm << 3 >> 2) + f] * Mz + l[((Hm << 3) + 4 >> 2) + f] * Nz, Tz = Sz > ns, Yo = Tz ? Hm : Rz, MF = Tz ? Sz : ns, Uz = Hm + 1;
                              if (Uz == ms) {
                                break;
                              } else {
                                Rz = Yo, ns = MF, Hm = Uz;
                              }
                            }
                            if (Yo > -1) {
                              var Zo = Yo;
                              R = 310;
                            } else {
                              var Vz = Yo;
                              R = 311;
                            }
                          } else {
                            Zo = 0, R = 310;
                          }
                        } while (0);
                        if (R == 310) {
                          if (ms > Zo) {
                            var os = Zo, Wz = Qz;
                            R = 313;
                          } else {
                            Vz = Zo, R = 311;
                          }
                        }
                        R == 311 && (G(y.b, 103, y.a, y.c), os = Vz, Wz = h[Pz >> 2]);
                        var Xz = (os << 3) + Wz, me = Xz;
                        m = me >> 2;
                        ne = Xz + 4;
                        j = ne >> 2;
                        var NF = h[j], Yz = (w[0] = h[m], x[0]), Zz = (w[0] = NF, x[0]), Ek = (cf * Yz - bf * Zz + cs - JF) * ls + (bf * Yz + cf * Zz + ds - KF) * Iz, Gm = -1, Xo = os;
                      } else {
                        if (es == 2) {
                          var $z = l[mb], aA = l[pa], ps = cf * $z - bf * aA, bA = bf * $z + cf * aA, cA = l[Xt >> 2], dA = l[Yt >> 2], OF = cf * cA - bf * dA + cs, PF = bf * cA + cf * dA + ds, eA = -bA, fA = af * -ps + $e * eA, gA = ps * $e + af * eA, hA = h[va], iA = hA + 16, jA = h[iA >> 2];
                          e = jA >> 2;
                          var qs = h[hA + 20 >> 2], QF = qs > 1;
                          do {
                            if (QF) {
                              for (var kA = 0, rs = l[e] * fA + l[e + 1] * gA, Im = 1; ; ) {
                                var lA = l[(Im << 3 >> 2) + e] * fA + l[((Im << 3) + 4 >> 2) + e] * gA, mA = lA > rs, $o = mA ? Im : kA, RF = mA ? lA : rs, nA = Im + 1;
                                if (nA == qs) {
                                  break;
                                } else {
                                  kA = $o, rs = RF, Im = nA;
                                }
                              }
                              if ($o > -1) {
                                var ap = $o;
                                R = 318;
                              } else {
                                var oA = $o;
                                R = 319;
                              }
                            } else {
                              ap = 0, R = 318;
                            }
                          } while (0);
                          if (R == 318) {
                            if (qs > ap) {
                              var ss = ap, pA = jA;
                              R = 321;
                            } else {
                              oA = ap, R = 319;
                            }
                          }
                          R == 319 && (G(y.b, 103, y.a, y.c), ss = oA, pA = h[iA >> 2]);
                          var qA = (ss << 3) + pA, me = qA;
                          m = me >> 2;
                          ne = qA + 4;
                          j = ne >> 2;
                          var SF = h[j], rA = (w[0] = h[m], x[0]), sA = (w[0] = SF, x[0]), Ek = (af * rA - $e * sA + as - OF) * ps + ($e * rA + af * sA + bs - PF) * bA, Gm = ss;
                        } else {
                          G(y.K, 183, y.xb, y.f), Ek = 0, Gm = -1;
                        }
                        Xo = -1;
                      }
                    }
                    var TF = Ek > Kr;
                    c : do {
                      if (TF) {
                        var ts = um, us = 4;
                      } else {
                        var UF = Ek > Yx;
                        do {
                          if (UF) {
                            var vs = Ze;
                          } else {
                            var ws = Cs(fa, Gm, Xo, Ye);
                            if (ws < Yx) {
                              ts = Ye;
                              us = 1;
                              break c;
                            }
                            if (ws > Kr) {
                              var bp = Ze, Jm = Ye, cp = 0, dp = ws, xs = Ek;
                            } else {
                              ts = Ye;
                              us = 3;
                              break c;
                            }
                            for (;;) {
                              var ep = (cp & 1) == 0 ? (Jm + bp) * .5 : Jm + (Bk - dp) * (bp - Jm) / (xs - dp), fp = Cs(fa, Gm, Xo, ep), ys = fp - Bk;
                              if ((ys > 0 ? ys : -ys) < .0012499999720603228) {
                                var zs = cp, tA = ep;
                                break;
                              }
                              var gp = fp > Bk, VF = gp ? xs : fp, WF = gp ? fp : dp, XF = gp ? ep : Jm, YF = gp ? bp : ep, uA = cp + 1;
                              h[et >> 2] += 1;
                              if (uA == 50) {
                                zs = 50;
                                tA = Ze;
                                break;
                              } else {
                                bp = YF, Jm = XF, cp = uA, dp = WF, xs = VF;
                              }
                            }
                            var wA = h[ft >> 2];
                            h[ft >> 2] = wA > zs ? wA : zs;
                            if (xm == 8) {
                              vs = Ye;
                            } else {
                              xm += 1;
                              Ze = tA;
                              continue b;
                            }
                          }
                        } while (0);
                        var xA = vm + 1;
                        h[gt >> 2] += 1;
                        if (xA == 20) {
                          wm = 20;
                          Ro = vs;
                          So = 1;
                          break a;
                        } else {
                          Ye = vs;
                          vm = xA;
                          continue a;
                        }
                      }
                    } while (0);
                    h[gt >> 2] += 1;
                    wm = vm + 1;
                    Ro = ts;
                    So = us;
                    break a;
                  }
                }
                var yA = h[ht >> 2];
                h[ht >> 2] = yA > wm ? yA : wm;
                if (So == 3) {
                  var zA = Lo + (1 - Lo) * Ro, Ds = zA < 1 ? zA : 1;
                } else {
                  Ds = 1;
                }
                l[Ca + 33] = Ds;
                h[q] |= 32;
                var Es = Ds;
              } else {
                Es = l[Ca + 33];
              }
              Es < Pd ? (xi = jm, yi = Es) : (xi = le, yi = Pd);
            }
          }
        } while (0);
        le = xi;
        Pd = yi;
        bo = jm + 12;
      }
    }
    a[oc] = Zt;
    var Km = h[zb >> 2];
    Ls(Km, bu);
    Ls(Km, cu);
    Ls(Km, h[zb + 16 >> 2]);
    Ls(Km, au);
    Ls(Km, $t);
    Xs(Sc);
    l[tb + 25756] = (h[Sc >> 2] - Kp) * 1e3 + h[Sc + 4 >> 2] * .0010000000474974513 - Lp;
  }
  l[wd >> 2] = 59.999996185302734;
  var Fs = k[lb], ZF = (Fs & 4) == 0;
  do {
    if (ZF) {
      var Gs = Fs;
    } else {
      var AA = h[tb + 25738];
      if (AA == 0) {
        Gs = Fs;
      } else {
        var Hs = AA;
        for (d = Hs >> 2; ; ) {
          l[d + 19] = 0;
          l[d + 20] = 0;
          l[d + 21] = 0;
          var BA = h[d + 24];
          if (BA == 0) {
            break;
          } else {
            Hs = BA, d = Hs >> 2;
          }
        }
        Gs = h[lb];
      }
    }
  } while (0);
  h[lb] = Gs & -3;
  Xs(dd);
  l[tb + 25749] = (h[dd >> 2] - Ec) * 1e3 + h[dd + 4 >> 2] * .0010000000474974513 - Fc;
  Yf = W;
}

function Ys(c, d) {
  var e, f, g, i, j, m = c >> 2, n = Yf;
  Yf += 192;
  j = n >> 2;
  var o = n + 92, q = n + 104, p = n + 128;
  i = p >> 2;
  var r = c + 64, s = r >> 2;
  g = p >> 2;
  for (var u = s + 16; s < u; s++, g++) {
    h[g] = h[s];
  }
  g = c + 4 >> 2;
  s = k[g];
  h[g] = s | 4;
  var u = s >>> 1, A = k[m + 12], E = k[m + 13], s = ((a[E + 38] | a[A + 38]) & 1) != 0, z = k[A + 8 >> 2], I = k[E + 8 >> 2], C = z + 12, K = I + 12;
  do {
    if (s) {
      e = h[A + 12 >> 2];
      f = h[E + 12 >> 2];
      var J = h[m + 14], M = h[m + 15];
      h[j + 4] = 0;
      h[j + 5] = 0;
      l[j + 6] = 0;
      h[j + 11] = 0;
      h[j + 12] = 0;
      l[j + 13] = 0;
      Mp(n, e, J);
      Mp(n + 28, f, M);
      f = n + 56 >> 2;
      e = C >> 2;
      h[f] = h[e];
      h[f + 1] = h[e + 1];
      h[f + 2] = h[e + 2];
      h[f + 3] = h[e + 3];
      f = n + 72 >> 2;
      e = K >> 2;
      h[f] = h[e];
      h[f + 1] = h[e + 1];
      h[f + 2] = h[e + 2];
      h[f + 3] = h[e + 3];
      a[n + 88] = 1;
      b[o + 4 >> 1] = 0;
      Np(q, o, n);
      e = l[q + 16 >> 2] < 11920928955078125e-22;
      h[m + 31] = 0;
      f = e;
      e = u & 1;
    } else {
      im[h[h[m] >> 2]](c, r, C, K);
      J = c + 124;
      e = f = h[J >> 2] > 0;
      a : do {
        if (f) {
          for (var M = h[i + 15], B = 0; ; ) {
            var F = c + B * 20 + 72;
            l[F >> 2] = 0;
            var H = c + B * 20 + 76;
            l[H >> 2] = 0;
            for (var P = h[m + (B * 5 | 0) + 20], D = 0; ; ) {
              if (D >= M) {
                break;
              }
              if (h[i + (D * 5 | 0) + 4] == P) {
                l[F >> 2] = l[i + (D * 5 | 0) + 2];
                l[H >> 2] = l[i + (D * 5 | 0) + 3];
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
      f != J && (f = z + 4, M = b[f >> 1], (M & 2) == 0 && (b[f >> 1] = M | 2, l[z + 144 >> 2] = 0), f = I + 4, M = b[f >> 1], (M & 2) == 0 && (b[f >> 1] = M | 2, l[I + 144 >> 2] = 0));
      f = e;
      e = J;
    }
  } while (0);
  i = f != 0;
  j = h[g];
  h[g] = i ? j | 2 : j & -3;
  j = i ^ 1;
  m = d == 0;
  if (!(e != 0 | j | m)) {
    im[h[h[d >> 2] + 8 >> 2]](d, c);
  }
  if (!(i | e == 0 | m)) {
    im[h[h[d >> 2] + 12 >> 2]](d, c);
  }
  if (!(s | j | m)) {
    im[h[h[d >> 2] + 16 >> 2]](d, c, p);
  }
  Yf = n;
}

function Zs(c, d) {
  var e, f, g, i, j, m, n, o, q = d >> 2;
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
  var r = n * 88;
  n = p + 102796 >> 2;
  var s = h[n];
  if (s < 32) {
    var u = s;
  } else {
    G(y.j, 38, y.n, y.p), u = h[n];
  }
  s = p + u * 12 + 102412;
  h[p + u * 12 + 102416 >> 2] = r;
  j = p + 102400 >> 2;
  i = h[j];
  i + r > 102400 ? (j = vj(r), h[s >> 2] = j, a[p + u * 12 + 102420] = 1) : (h[s >> 2] = p + i, a[p + u * 12 + 102420] = 0, h[j] += r);
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
  r = h[o] * 152;
  m = p + 102796 >> 2;
  s = h[m];
  s < 32 ? u = s : (G(y.j, 38, y.n, y.p), u = h[m]);
  s = p + u * 12 + 102412;
  h[p + u * 12 + 102416 >> 2] = r;
  j = p + 102400 >> 2;
  i = h[j];
  i + r > 102400 ? (j = vj(r), h[s >> 2] = j, a[p + u * 12 + 102420] = 1) : (h[s >> 2] = p + i, a[p + u * 12 + 102420] = 0, h[j] += r);
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
  p = h[o] > 0;
  a : do {
    if (p) {
      r = c + 20;
      u = c + 8;
      j = 0;
      for (i = q; ; ) {
        var A = h[i + (j << 2) >> 2];
        i = A >> 2;
        var E = h[i + 12];
        g = h[i + 13];
        var z = l[h[E + 12 >> 2] + 8 >> 2], I = l[h[g + 12 >> 2] + 8 >> 2], C = h[E + 8 >> 2], K = h[g + 8 >> 2], E = h[i + 31], J = E > 0;
        J || G(y.C, 71, y.mb, y.Lb);
        f = h[m >> 2];
        g = f >> 2;
        l[g + (j * 38 | 0) + 34] = l[i + 34];
        l[g + (j * 38 | 0) + 35] = l[i + 35];
        var M = C + 8;
        h[f + j * 152 + 112 >> 2] = h[M >> 2];
        var B = K + 8;
        h[f + j * 152 + 116 >> 2] = h[B >> 2];
        var F = C + 120;
        l[g + (j * 38 | 0) + 30] = l[F >> 2];
        var H = K + 120;
        l[g + (j * 38 | 0) + 31] = l[H >> 2];
        var P = C + 128;
        l[g + (j * 38 | 0) + 32] = l[P >> 2];
        var D = K + 128;
        l[g + (j * 38 | 0) + 33] = l[D >> 2];
        h[f + j * 152 + 148 >> 2] = j;
        h[f + j * 152 + 144 >> 2] = E;
        f = f + j * 152 + 80 >> 2;
        h[f] = 0;
        h[f + 1] = 0;
        h[f + 2] = 0;
        h[f + 3] = 0;
        h[f + 4] = 0;
        h[f + 5] = 0;
        h[f + 6] = 0;
        h[f + 7] = 0;
        f = h[n >> 2];
        e = f >> 2;
        h[f + j * 88 + 32 >> 2] = h[M >> 2];
        h[f + j * 88 + 36 >> 2] = h[B >> 2];
        l[e + (j * 22 | 0) + 10] = l[F >> 2];
        l[e + (j * 22 | 0) + 11] = l[H >> 2];
        C += 28;
        M = f + j * 88 + 48;
        B = h[C + 4 >> 2];
        h[M >> 2] = h[C >> 2];
        h[M + 4 >> 2] = B;
        K += 28;
        C = f + j * 88 + 56;
        M = h[K + 4 >> 2];
        h[C >> 2] = h[K >> 2];
        h[C + 4 >> 2] = M;
        l[e + (j * 22 | 0) + 16] = l[P >> 2];
        l[e + (j * 22 | 0) + 17] = l[D >> 2];
        P = A + 104;
        D = f + j * 88 + 16;
        K = h[P + 4 >> 2];
        h[D >> 2] = h[P >> 2];
        h[D + 4 >> 2] = K;
        P = A + 112;
        D = f + j * 88 + 24;
        K = h[P + 4 >> 2];
        h[D >> 2] = h[P >> 2];
        h[D + 4 >> 2] = K;
        h[f + j * 88 + 84 >> 2] = E;
        l[e + (j * 22 | 0) + 19] = z;
        l[e + (j * 22 | 0) + 20] = I;
        h[f + j * 88 + 72 >> 2] = h[i + 30];
        b : do {
          if (J) {
            for (z = 0; ; ) {
              if (I = A + z * 20 + 64, (a[r] & 1) == 0 ? (l[g + (j * 38 | 0) + (z * 9 | 0) + 4] = 0, l[g + (j * 38 | 0) + (z * 9 | 0) + 5] = 0) : (l[g + (j * 38 | 0) + (z * 9 | 0) + 4] = l[u >> 2] * l[i + (z * 5 | 0) + 18], l[g + (j * 38 | 0) + (z * 9 | 0) + 5] = l[u >> 2] * l[i + (z * 5 | 0) + 19]), l[g + (j * 38 | 0) + (z * 9 | 0)] = 0, l[g + (j * 38 | 0) + (z * 9 | 0) + 1] = 0, l[g + (j * 38 | 0) + (z * 9 | 0) + 2] = 0, l[g + (j * 38 | 0) + (z * 9 | 0) + 3] = 0, l[g + (j * 38 | 0) + (z * 9 | 0) + 6] = 0, l[g + (j * 38 | 0) + (z * 9 | 0) + 7] = 0, l[g + (j * 38 | 0) + (z * 9 | 0) + 8] = 0, e = (z << 3) + f + j * 88, P = h[I + 4 >> 2], h[e >> 2] = h[I >> 2], h[e + 4 >> 2] = P, z += 1, z == E) {
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

function $s(c) {
  var d, e, f, g, i, j, m, n, o, q = Yf;
  Yf += 24;
  var p = c + 48, r = h[p >> 2] > 0;
  a : do {
    if (r) {
      var s = c + 40, u = c + 36, A = c + 44, E = c + 24, z = c + 28, I = q, C = q;
      o = C >> 2;
      n = q >> 2;
      m = q + 4 >> 2;
      for (var K = q + 8, J = 0; ; ) {
        var M = k[s >> 2];
        j = M >> 2;
        var B = h[u >> 2], F = l[(B + 76 >> 2) + (J * 22 | 0)], H = l[(B + 80 >> 2) + (J * 22 | 0)], P = h[h[A >> 2] + (h[j + (J * 38 | 0) + 37] << 2) >> 2];
        i = P >> 2;
        var D = P + 64, Q = h[j + (J * 38 | 0) + 28], O = h[j + (J * 38 | 0) + 29], L = l[j + (J * 38 | 0) + 30], ib = l[j + (J * 38 | 0) + 31], U = l[j + (J * 38 | 0) + 32], N = l[j + (J * 38 | 0) + 33], ja = B + J * 88 + 48, ka = h[ja + 4 >> 2], za = (w[0] = h[ja >> 2], x[0]), S = (w[0] = ka, x[0]), T = B + J * 88 + 56, $ = h[T + 4 >> 2], Ea = (w[0] = h[T >> 2], x[0]), Z = (w[0] = $, x[0]), X = h[E >> 2], aa = X + Q * 12, Ba = h[aa + 4 >> 2], Ca = (w[0] = h[aa >> 2], x[0]), mb = (w[0] = Ba, x[0]), Qa = l[(X + 8 >> 2) + (Q * 3 | 0)], pa = h[z >> 2], ua = pa + Q * 12, Y = h[ua + 4 >> 2], Fa = (w[0] = h[ua >> 2], x[0]), va = (w[0] = Y, x[0]), Ra = l[(pa + 8 >> 2) + (Q * 3 | 0)], Wa = X + O * 12, Xa = h[Wa + 4 >> 2], Ka = (w[0] = h[Wa >> 2], x[0]), Za = (w[0] = Xa, x[0]), jb = l[(X + 8 >> 2) + (O * 3 | 0)], $a = pa + O * 12, pb = h[$a + 4 >> 2], ga = (w[0] = h[$a >> 2], x[0]), da = (w[0] = pb, x[0]), Ya = l[(pa + 8 >> 2) + (O * 3 | 0)], ba = P + 124, ha = h[ba >> 2];
        if (ha > 0) {
          var qa = ha;
        } else {
          G(y.C, 168, y.lb, y.Zb), qa = h[ba >> 2];
        }
        var ra = Is(Qa), ma = Js(Qa), la = Is(jb), xa = Js(jb), ab = Ca - (ma * za - ra * S), ia = mb - (ra * za + ma * S), Ma = Ka - (xa * Ea - la * Z), bb = Za - (la * Ea + xa * Z);
        g = D >> 2;
        var wb = qa == 0;
        b : do {
          if (!wb) {
            var xb = h[i + 30];
            if (xb == 0) {
              l[n] = 1;
              l[m] = 0;
              var Kb = l[i + 28], Na = l[i + 29], Ga = ma * Kb - ra * Na + ab, sa = ra * Kb + ma * Na + ia, Ha = l[D >> 2], Oa = l[i + 17], Ua = xa * Ha - la * Oa + Ma, ca = la * Ha + xa * Oa + bb, Aa = Ga - Ua, cb = sa - ca;
              if (Aa * Aa + cb * cb > 1.4210854715202004e-14) {
                var na = Ua - Ga, La = ca - sa, db = (x[0] = na, w[0]), qb = (x[0] = La, w[0]) | 0;
                h[o] = 0 | db;
                h[o + 1] = qb;
                var ub = an(na * na + La * La);
                if (ub < 1.1920928955078125e-7) {
                  var rb = na, gb = La;
                } else {
                  var kb = 1 / ub, Va = na * kb;
                  l[n] = Va;
                  var ea = La * kb;
                  l[m] = ea;
                  rb = Va;
                  gb = ea;
                }
              } else {
                rb = 1, gb = 0;
              }
              var Da = (sa + gb * F + (ca - gb * H)) * .5, Ia = (x[0] = (Ga + rb * F + (Ua - rb * H)) * .5, w[0]), Sa = (x[0] = Da, w[0]) | 0;
              h[K >> 2] = 0 | Ia;
              h[K + 4 >> 2] = Sa;
            } else {
              if (xb == 1) {
                var vb = l[i + 26], Pa = l[i + 27], eb = ma * vb - ra * Pa, nb = ra * vb + ma * Pa, Db = (x[0] = eb, w[0]), Qb = (x[0] = nb, w[0]) | 0, Ob = C;
                h[Ob >> 2] = 0 | Db;
                var Eb = C + 4;
                h[Eb >> 2] = Qb;
                var Ib = l[i + 28], Jb = l[i + 29], sb = ma * Ib - ra * Jb + ab, Lb = ra * Ib + ma * Jb + ia;
                if (qa > 0) {
                  for (var Fb = 0, ob = eb, Bb = nb; ; ) {
                    var lb = l[g + (Fb * 5 | 0)], tb = l[g + (Fb * 5 | 0) + 1], W = xa * lb - la * tb + Ma, R = la * lb + xa * tb + bb, Xb = F - ((W - sb) * ob + (R - Lb) * Bb), Tb = (R + Bb * Xb + (R - Bb * H)) * .5, yb = (Fb << 3) + I + 8, Cb = (x[0] = (W + ob * Xb + (W - ob * H)) * .5, w[0]), Ub = (x[0] = Tb, w[0]) | 0, bc = yb;
                    h[bc >> 2] = 0 | Cb;
                    var Ja = yb + 4;
                    h[Ja >> 2] = Ub;
                    var Mb = Fb + 1;
                    if (Mb >= qa) {
                      break b;
                    }
                    Fb = Mb;
                    ob = l[n];
                    Bb = l[m];
                  }
                }
              } else {
                if (xb == 2) {
                  var fa = l[i + 26], ya = l[i + 27], zb = xa * fa - la * ya, ta = la * fa + xa * ya, cc = (x[0] = zb, w[0]), gc = (x[0] = ta, w[0]), Pb = 0 | cc, pc = gc | 0, Ob = C;
                  h[Ob >> 2] = Pb;
                  Eb = C + 4;
                  h[Eb >> 2] = pc;
                  var Vb = l[i + 28], wc = l[i + 29], Xc = xa * Vb - la * wc + Ma, nc = la * Vb + xa * wc + bb, uc = qa > 0;
                  c : do {
                    if (uc) {
                      for (var hc = 0, ic = zb, yc = ta; ; ) {
                        var Ab = l[g + (hc * 5 | 0)], hb = l[g + (hc * 5 | 0) + 1], dc = ma * Ab - ra * hb + ab, ec = ra * Ab + ma * hb + ia, qc = H - ((dc - Xc) * ic + (ec - nc) * yc), Rc = (ec - yc * F + ec + yc * qc) * .5, Cc = (hc << 3) + I + 8, Yb = (x[0] = (dc - ic * F + dc + ic * qc) * .5, w[0]), dd = (x[0] = Rc, w[0]), Sc = 0 | Yb, Gb = dd | 0, bc = Cc;
                        h[bc >> 2] = Sc;
                        Ja = Cc + 4;
                        h[Ja >> 2] = Gb;
                        var Wb = hc + 1, jc = l[n], Dc = l[m];
                        if (Wb < qa) {
                          hc = Wb, ic = jc, yc = Dc;
                        } else {
                          var ed = jc, rc = Dc;
                          break c;
                        }
                      }
                    } else {
                      ed = zb, rc = ta;
                    }
                  } while (0);
                  var Ec = (x[0] = -ed, w[0]), Fc = (x[0] = -rc, w[0]) | 0;
                  h[o] = 0 | Ec;
                  h[o + 1] = Fc;
                }
              }
            }
          }
        } while (0);
        var fc = M + J * 152 + 72, sc = fc, fd = h[o + 1];
        h[sc >> 2] = h[o];
        h[sc + 4 >> 2] = fd;
        f = M + J * 152 + 144 >> 2;
        var Tc = h[f], wd = Tc > 0;
        do {
          if (wd) {
            e = M + J * 152 + 76 >> 2;
            d = fc >> 2;
            for (var kc = L + ib, vc = -Ya, Kd = -Ra, xd = M + J * 152 + 140, Nb = 0; ; ) {
              var lc = l[q + (Nb << 3) + 8 >> 2], Rb = lc - Ca, Mc = l[q + (Nb << 3) + 12 >> 2], Zb = Mc - mb, $b = M + J * 152 + Nb * 36, gd = (x[0] = Rb, w[0]), hd = (x[0] = Zb, w[0]) | 0;
              h[$b >> 2] = 0 | gd;
              h[$b + 4 >> 2] = hd;
              var Gc = lc - Ka, Rd = Mc - Za, Uc = M + J * 152 + Nb * 36 + 8, $d = (x[0] = Gc, w[0]), tc = (x[0] = Rd, w[0]) | 0;
              h[Uc >> 2] = 0 | $d;
              h[Uc + 4 >> 2] = tc;
              var mc = l[e], od = l[j + (J * 38 | 0) + (Nb * 9 | 0) + 1], yd = l[d], pd = Rb * mc - od * yd, Nc = l[j + (J * 38 | 0) + (Nb * 9 | 0) + 3], Oc = Gc * mc - Nc * yd, Sd = kc + U * pd * pd + N * Oc * Oc;
              l[j + (J * 38 | 0) + (Nb * 9 | 0) + 6] = Sd > 0 ? 1 / Sd : 0;
              var ae = l[e], zd = l[d] * -1, Yc = Rb * zd - od * ae, Vc = Gc * zd - Nc * ae, Hb = kc + U * Yc * Yc + N * Vc * Vc;
              l[j + (J * 38 | 0) + (Nb * 9 | 0) + 7] = Hb > 0 ? 1 / Hb : 0;
              var Hc = M + J * 152 + Nb * 36 + 32;
              l[Hc >> 2] = 0;
              var id = l[d] * (ga + Nc * vc - Fa - od * Kd) + l[e] * (da + Gc * Ya - va - Rb * Ra);
              id < -1 && (l[Hc >> 2] = id * -l[xd >> 2]);
              var Hd = Nb + 1;
              if (Hd == Tc) {
                break;
              } else {
                Nb = Hd;
              }
            }
            if (h[f] == 2) {
              var ac = l[e], oc = l[d], be = l[j + (J * 38 | 0)] * ac - l[j + (J * 38 | 0) + 1] * oc, Ad = l[j + (J * 38 | 0) + 2] * ac - l[j + (J * 38 | 0) + 3] * oc, Bd = l[j + (J * 38 | 0) + 9] * ac - l[j + (J * 38 | 0) + 10] * oc, Td = l[j + (J * 38 | 0) + 11] * ac - l[j + (J * 38 | 0) + 12] * oc, jd = U * be, Ld = N * Ad, Cd = kc + jd * be + Ld * Ad, Zc = kc + U * Bd * Bd + N * Td * Td, Pc = kc + jd * Bd + Ld * Td, Md = Cd * Zc - Pc * Pc;
              if (Cd * Cd < Md * 1e3) {
                l[j + (J * 38 | 0) + 24] = Cd;
                l[j + (J * 38 | 0) + 25] = Pc;
                l[j + (J * 38 | 0) + 26] = Pc;
                l[j + (J * 38 | 0) + 27] = Zc;
                var qd = Md != 0 ? 1 / Md : Md, $c = Pc * -qd, ce = qd * Cd;
                l[j + (J * 38 | 0) + 20] = qd * Zc;
                l[j + (J * 38 | 0) + 21] = $c;
                l[j + (J * 38 | 0) + 22] = $c;
                l[j + (J * 38 | 0) + 23] = ce;
              } else {
                h[f] = 1;
              }
            }
          }
        } while (0);
        var Ud = J + 1;
        if (Ud < h[p >> 2]) {
          J = Ud;
        } else {
          break a;
        }
      }
    }
  } while (0);
  Yf = q;
}

function at(c) {
  var d, e, f, g, i = c + 48, j = h[i >> 2] > 0;
  a : do {
    if (j) {
      var m = c + 40;
      g = c + 28 >> 2;
      for (var n = 0; ; ) {
        var o = k[m >> 2];
        f = o >> 2;
        var q = o + n * 152, p = k[f + (n * 38 | 0) + 28], r = k[f + (n * 38 | 0) + 29], s = l[f + (n * 38 | 0) + 30], u = l[f + (n * 38 | 0) + 32], A = l[f + (n * 38 | 0) + 31], E = l[f + (n * 38 | 0) + 33], z = o + n * 152 + 144, I = k[z >> 2], C = h[g], K = C + p * 12, J = h[K + 4 >> 2], M = (w[0] = h[K >> 2], x[0]), B = (w[0] = J, x[0]), F = l[(C + 8 >> 2) + (p * 3 | 0)], H = C + r * 12, P = h[H + 4 >> 2], D = (w[0] = h[H >> 2], x[0]), Q = (w[0] = P, x[0]), O = l[(C + 8 >> 2) + (r * 3 | 0)], L = o + n * 152 + 72, ib = h[L + 4 >> 2], U = (w[0] = h[L >> 2], x[0]), N = (w[0] = ib, x[0]), ja = U * -1, ka = l[f + (n * 38 | 0) + 34];
        I - 1 < 2 || G(y.C, 311, y.$, y.ec);
        var za = I > 0;
        b : do {
          if (za) {
            for (var S = Q, T = D, $ = B, Ea = M, Z = F, X = O, aa = 0; ; ) {
              var Ba = l[f + (n * 38 | 0) + (aa * 9 | 0) + 3], Ca = l[f + (n * 38 | 0) + (aa * 9 | 0) + 2], mb = l[f + (n * 38 | 0) + (aa * 9 | 0) + 1], Qa = l[f + (n * 38 | 0) + (aa * 9 | 0)], pa = ka * l[f + (n * 38 | 0) + (aa * 9 | 0) + 4], ua = o + n * 152 + aa * 36 + 20, Y = l[ua >> 2], Fa = Y + l[f + (n * 38 | 0) + (aa * 9 | 0) + 7] * -((T + Ba * -X - Ea - mb * -Z) * N + (S + Ca * X - $ - Qa * Z) * ja), va = -pa, Ra = Fa < pa ? Fa : pa, Wa = Ra < va ? va : Ra, Xa = Wa - Y;
              l[ua >> 2] = Wa;
              var Ka = N * Xa, Za = ja * Xa, jb = Ea - Ka * s, $a = $ - Za * s, pb = Z - u * (Qa * Za - mb * Ka), ga = T + Ka * A, da = S + Za * A, Ya = X + E * (Ca * Za - Ba * Ka), ba = aa + 1;
              if (ba == I) {
                var ha = da, qa = ga, ra = $a, ma = jb, la = pb, xa = Ya;
                break b;
              } else {
                S = da, T = ga, $ = $a, Ea = jb, Z = pb, X = Ya, aa = ba;
              }
            }
          } else {
            ha = Q, qa = D, ra = B, ma = M, la = F, xa = O;
          }
        } while (0);
        var ab = h[z >> 2] == 1;
        b : do {
          if (ab) {
            var ia = l[f + (n * 38 | 0) + 3], Ma = l[f + (n * 38 | 0) + 2], bb = l[f + (n * 38 | 0) + 1], wb = l[q >> 2], xb = o + n * 152 + 16, Kb = l[xb >> 2], Na = Kb + ((qa + ia * -xa - ma - bb * -la) * U + (ha + Ma * xa - ra - wb * la) * N - l[f + (n * 38 | 0) + 8]) * -l[f + (n * 38 | 0) + 6], Ga = Na > 0 ? Na : 0, sa = Ga - Kb;
            l[xb >> 2] = Ga;
            var Ha = U * sa, Oa = N * sa, Ua = xa + E * (Ma * Oa - ia * Ha), ca = la - u * (wb * Oa - bb * Ha), Aa = ma - Ha * s, cb = ra - Oa * s, na = qa + Ha * A, La = ha + Oa * A;
          } else {
            e = o + n * 152 + 16 >> 2;
            var db = l[e];
            d = o + n * 152 + 52 >> 2;
            var qb = l[d];
            db < 0 | qb < 0 && G(y.C, 406, y.$, y.ic);
            var ub = -xa, rb = l[f + (n * 38 | 0) + 3], gb = l[f + (n * 38 | 0) + 2], kb = -la, Va = l[f + (n * 38 | 0) + 1], ea = l[q >> 2], Da = l[f + (n * 38 | 0) + 12], Ia = l[f + (n * 38 | 0) + 11], Sa = l[f + (n * 38 | 0) + 10], vb = l[f + (n * 38 | 0) + 9], Pa = l[f + (n * 38 | 0) + 26], eb = l[f + (n * 38 | 0) + 25], nb = (qa + rb * ub - ma - Va * kb) * U + (ha + gb * xa - ra - ea * la) * N - l[f + (n * 38 | 0) + 8] - (l[f + (n * 38 | 0) + 24] * db + Pa * qb), Db = (qa + Da * ub - ma - Sa * kb) * U + (ha + Ia * xa - ra - vb * la) * N - l[f + (n * 38 | 0) + 17] - (eb * db + l[f + (n * 38 | 0) + 27] * qb), Qb = l[f + (n * 38 | 0) + 20] * nb + l[f + (n * 38 | 0) + 22] * Db, Ob = l[f + (n * 38 | 0) + 21] * nb + l[f + (n * 38 | 0) + 23] * Db, Eb = -Qb, Ib = -Ob;
            if (Qb > 0 | Ob > 0) {
              var Jb = nb * -l[f + (n * 38 | 0) + 6], sb = Jb < 0;
              do {
                if (!sb && eb * Jb + Db >= 0) {
                  var Lb = Jb - db, Fb = -qb, ob = U * Lb, Bb = N * Lb, lb = U * Fb, tb = N * Fb, W = ob + lb, R = Bb + tb, Xb = ma - W * s, Tb = ra - R * s, yb = la - u * (ea * Bb - Va * ob + (vb * tb - Sa * lb)), Cb = qa + W * A, Ub = ha + R * A, bc = xa + E * (gb * Bb - rb * ob + (Ia * tb - Da * lb));
                  l[e] = Jb;
                  l[d] = 0;
                  Ua = bc;
                  ca = yb;
                  Aa = Xb;
                  cb = Tb;
                  na = Cb;
                  La = Ub;
                  break b;
                }
              } while (0);
              var Ja = Db * -l[f + (n * 38 | 0) + 15], Mb = Ja < 0;
              do {
                if (!Mb && Pa * Ja + nb >= 0) {
                  var fa = -db, ya = Ja - qb, zb = U * fa, ta = N * fa, cc = U * ya, gc = N * ya, Pb = zb + cc, pc = ta + gc, Vb = ma - Pb * s, wc = ra - pc * s, Xc = la - u * (ea * ta - Va * zb + (vb * gc - Sa * cc)), nc = qa + Pb * A, uc = ha + pc * A, hc = xa + E * (gb * ta - rb * zb + (Ia * gc - Da * cc));
                  l[e] = 0;
                  l[d] = Ja;
                  Ua = hc;
                  ca = Xc;
                  Aa = Vb;
                  cb = wc;
                  na = nc;
                  La = uc;
                  break b;
                }
              } while (0);
              if (nb < 0 | Db < 0) {
                Ua = xa, ca = la, Aa = ma, cb = ra, na = qa, La = ha;
              } else {
                var ic = -db, yc = -qb, Ab = U * ic, hb = N * ic, dc = U * yc, ec = N * yc, qc = Ab + dc, Rc = hb + ec, Cc = ma - qc * s, Yb = ra - Rc * s, dd = la - u * (ea * hb - Va * Ab + (vb * ec - Sa * dc)), Sc = qa + qc * A, Gb = ha + Rc * A, Wb = xa + E * (gb * hb - rb * Ab + (Ia * ec - Da * dc));
                l[e] = 0;
                l[d] = 0;
                Ua = Wb;
                ca = dd;
                Aa = Cc;
                cb = Yb;
                na = Sc;
                La = Gb;
              }
            } else {
              var jc = Eb - db, Dc = Ib - qb, ed = U * jc, rc = N * jc, Ec = U * Dc, Fc = N * Dc, fc = ed + Ec, sc = rc + Fc, fd = ma - fc * s, Tc = ra - sc * s, wd = la - u * (ea * rc - Va * ed + (vb * Fc - Sa * Ec)), kc = qa + fc * A, vc = ha + sc * A, Kd = xa + E * (gb * rc - rb * ed + (Ia * Fc - Da * Ec));
              l[e] = Eb;
              l[d] = Ib;
              Ua = Kd;
              ca = wd;
              Aa = fd;
              cb = Tc;
              na = kc;
              La = vc;
            }
          }
        } while (0);
        var xd = h[g] + p * 12, Nb = (x[0] = Aa, w[0]), lc = (x[0] = cb, w[0]) | 0;
        h[xd >> 2] = 0 | Nb;
        h[xd + 4 >> 2] = lc;
        l[(h[g] + 8 >> 2) + (p * 3 | 0)] = ca;
        var Rb = h[g] + r * 12, Mc = (x[0] = na, w[0]), Zb = (x[0] = La, w[0]) | 0;
        h[Rb >> 2] = 0 | Mc;
        h[Rb + 4 >> 2] = Zb;
        l[(h[g] + 8 >> 2) + (r * 3 | 0)] = Ua;
        var $b = n + 1;
        if ($b < h[i >> 2]) {
          n = $b;
        } else {
          break a;
        }
      }
    }
  } while (0);
}

function bt(c, d, e, f, g) {
  var i = f >> 2, j = e >> 2;
  d >>= 2;
  h[d + 21] > 0 || G(y.C, 617, y.pb, y.rc);
  var m = h[d + 18];
  if (m == 0) {
    var e = l[j + 3], m = l[d + 6], n = l[j + 2], o = l[d + 7], g = e * m - n * o + l[j], j = n * m + e * o + l[j + 1], m = l[i + 3], n = l[d], o = l[i + 2], f = l[d + 1], e = m * n - o * f + l[i], n = o * n + m * f + l[i + 1], i = e - g, m = n - j, o = (x[0] = i, w[0]), f = (x[0] = m, w[0]) | 0;
    h[c >> 2] = 0 | o;
    h[c + 4 >> 2] = f;
    o = an(i * i + m * m);
    o < 1.1920928955078125e-7 ? (o = i, f = m) : (f = 1 / o, o = i * f, l[c >> 2] = o, f *= m, l[c + 4 >> 2] = f);
    var q = c + 8, g = (x[0] = (g + e) * .5, w[0]), j = (x[0] = (j + n) * .5, w[0]) | 0;
    h[q >> 2] = 0 | g;
    h[q + 4 >> 2] = j;
    l[c + 16 >> 2] = i * o + m * f - l[d + 19] - l[d + 20];
  } else {
    if (m == 1) {
      var n = e + 12, m = l[n >> 2], o = l[d + 4], f = e + 8, q = l[f >> 2], p = l[d + 5], e = m * o - q * p, m = q * o + m * p, o = (x[0] = e, w[0]), q = (x[0] = m, w[0]) | 0;
      h[c >> 2] = 0 | o;
      h[c + 4 >> 2] = q;
      var n = l[n >> 2], o = l[d + 6], f = l[f >> 2], q = l[d + 7], p = l[i + 3], r = l[(g << 3 >> 2) + d], s = l[i + 2], u = l[((g << 3) + 4 >> 2) + d], g = p * r - s * u + l[i], i = s * r + p * u + l[i + 1];
      l[c + 16 >> 2] = (g - (n * o - f * q + l[j])) * e + (i - (f * o + n * q + l[j + 1])) * m - l[d + 19] - l[d + 20];
      c += 8;
      d = (x[0] = g, w[0]);
      i = (x[0] = i, w[0]) | 0;
      h[c >> 2] = 0 | d;
      h[c + 4 >> 2] = i;
    } else {
      m == 2 && (n = f + 12, m = l[n >> 2], o = l[d + 4], f += 8, q = l[f >> 2], p = l[d + 5], e = m * o - q * p, m = q * o + m * p, o = (x[0] = e, w[0]), q = (x[0] = m, w[0]) | 0, h[c >> 2] = 0 | o, h[c + 4 >> 2] = q, n = l[n >> 2], o = l[d + 6], f = l[f >> 2], q = l[d + 7], p = l[j + 3], r = l[(g << 3 >> 2) + d], s = l[j + 2], u = l[((g << 3) + 4 >> 2) + d], g = p * r - s * u + l[j], j = s * r + p * u + l[j + 1], l[c + 16 >> 2] = (g - (n * o - f * q + l[i])) * e + (j - (f * o + n * q + l[i + 1])) * m - l[d + 19] - l[d + 20], d = c + 8, i = (x[0] = g, w[0]), j = (x[0] = j, w[0]) | 0, h[d >> 2] = 0 | i, h[d + 4 >> 2] = j, d = (x[0] = -e, w[0]), i = (x[0] = -m, w[0]) | 0, h[c >> 2] = 0 | d, h[c + 4 >> 2] = i);
    }
  }
}

function vj(c) {
  var d, e, f, g, i, j, m, n, o, q, p, r, s, u, A, E, z, I, C, K = c < 245;
  a : do {
    if (K) {
      var J = c < 11 ? 16 : c + 11 & -8, M = J >>> 3, B = k[V >> 2], F = B >>> M;
      if ((F & 3) == 0) {
        if (J > k[V + 8 >> 2]) {
          if (F == 0) {
            var H = h[V + 4 >> 2];
            if (H == 0) {
              R = J, I = R >> 2, C = 156;
            } else {
              var P = (H & -H) - 1, D = P >>> 12 & 16, Q = P >>> D, O = Q >>> 5 & 8, L = Q >>> O, ib = L >>> 2 & 4, U = L >>> ib, N = U >>> 1 & 2, ja = U >>> N, ka = ja >>> 1 & 1, za = k[V + ((O | D | ib | N | ka) + (ja >>> ka) << 2) + 304 >> 2], S = za;
              z = S >> 2;
              var T = (h[za + 4 >> 2] & -8) - J;
              b : for (;;) {
                for (var $ = S; ; ) {
                  var Ea = h[$ + 16 >> 2];
                  if (Ea == 0) {
                    var Z = h[$ + 20 >> 2];
                    if (Z == 0) {
                      break b;
                    } else {
                      var X = Z;
                    }
                  } else {
                    X = Ea;
                  }
                  var aa = (h[X + 4 >> 2] & -8) - J;
                  if (aa < T) {
                    S = X;
                    z = S >> 2;
                    T = aa;
                    continue b;
                  } else {
                    $ = X;
                  }
                }
              }
              var Ba = S, Ca = k[V + 16 >> 2], mb = Ba < Ca;
              do {
                if (!mb) {
                  var Qa = Ba + J, pa = Qa;
                  if (Ba < Qa) {
                    var ua = k[z + 6], Y = k[z + 3], Fa = Y == S;
                    do {
                      if (Fa) {
                        var va = S + 20, Ra = h[va >> 2];
                        if (Ra == 0) {
                          var Wa = S + 16, Xa = h[Wa >> 2];
                          if (Xa == 0) {
                            var Ka = 0;
                            E = Ka >> 2;
                            break;
                          } else {
                            var Za = Wa, jb = Xa;
                          }
                        } else {
                          Za = va, jb = Ra, C = 38;
                        }
                        for (;;) {
                          var $a = jb + 20, pb = h[$a >> 2];
                          if (pb != 0) {
                            Za = $a, jb = pb;
                          } else {
                            var ga = jb + 16, da = k[ga >> 2];
                            if (da == 0) {
                              break;
                            } else {
                              Za = ga, jb = da;
                            }
                          }
                        }
                        Za < Ca ? (it(), oa("Reached an unreachable!")) : (h[Za >> 2] = 0, Ka = jb, E = Ka >> 2);
                      } else {
                        var Ya = k[z + 2];
                        Ya < Ca ? (it(), oa("Reached an unreachable!")) : (h[Ya + 12 >> 2] = Y, h[Y + 8 >> 2] = Ya, Ka = Y, E = Ka >> 2);
                      }
                    } while (0);
                    var ba = ua == 0;
                    b : do {
                      if (!ba) {
                        var ha = S + 28, qa = (h[ha >> 2] << 2) + V + 304, ra = S == h[qa >> 2];
                        do {
                          if (ra) {
                            if (h[qa >> 2] = Ka, Ka == 0) {
                              h[V + 4 >> 2] &= 1 << h[ha >> 2] ^ -1;
                              break b;
                            }
                          } else {
                            if (ua < k[V + 16 >> 2]) {
                              it(), oa("Reached an unreachable!");
                            } else {
                              var ma = ua + 16;
                              h[ma >> 2] == S ? h[ma >> 2] = Ka : h[ua + 20 >> 2] = Ka;
                              if (Ka == 0) {
                                break b;
                              }
                            }
                          }
                        } while (0);
                        if (Ka < k[V + 16 >> 2]) {
                          it(), oa("Reached an unreachable!");
                        } else {
                          h[E + 6] = ua;
                          var la = k[z + 4];
                          la != 0 && (la < k[V + 16 >> 2] ? (it(), oa("Reached an unreachable!")) : (h[E + 4] = la, h[la + 24 >> 2] = Ka));
                          var xa = k[z + 5];
                          xa != 0 && (xa < k[V + 16 >> 2] ? (it(), oa("Reached an unreachable!")) : (h[E + 5] = xa, h[xa + 24 >> 2] = Ka));
                        }
                      }
                    } while (0);
                    if (T < 16) {
                      var ab = T + J;
                      h[z + 1] = ab | 3;
                      h[Ba + (ab + 4) >> 2] |= 1;
                    } else {
                      h[z + 1] = J | 3;
                      h[Ba + (J | 4) >> 2] = T | 1;
                      h[Ba + T + J >> 2] = T;
                      var ia = k[V + 8 >> 2];
                      if (ia != 0) {
                        var Ma = k[V + 20 >> 2], bb = ia >>> 2 & 1073741822, wb = (bb << 2) + V + 40, xb = k[V >> 2], Kb = 1 << (ia >>> 3);
                        if ((xb & Kb) == 0) {
                          h[V >> 2] = xb | Kb;
                          var Na = wb, Ga = (bb + 2 << 2) + V + 40;
                        } else {
                          var sa = (bb + 2 << 2) + V + 40, Ha = k[sa >> 2];
                          Ha < k[V + 16 >> 2] ? (it(), oa("Reached an unreachable!")) : (Na = Ha, Ga = sa);
                        }
                        h[Ga >> 2] = Ma;
                        h[Na + 12 >> 2] = Ma;
                        h[Ma + 8 >> 2] = Na;
                        h[Ma + 12 >> 2] = wb;
                      }
                      h[V + 8 >> 2] = T;
                      h[V + 20 >> 2] = pa;
                    }
                    var Oa = S + 8, Ua = Oa;
                    if (Oa == 0) {
                      R = J, I = R >> 2, C = 156;
                    } else {
                      var ca = Ua;
                      C = 334;
                    }
                    break a;
                  }
                }
              } while (0);
              it();
              oa("Reached an unreachable!");
            }
          } else {
            var Aa = 2 << M, cb = F << M & (Aa | -Aa), na = (cb & -cb) - 1, La = na >>> 12 & 16, db = na >>> La, qb = db >>> 5 & 8, ub = db >>> qb, rb = ub >>> 2 & 4, gb = ub >>> rb, kb = gb >>> 1 & 2, Va = gb >>> kb, ea = Va >>> 1 & 1, Da = (qb | La | rb | kb | ea) + (Va >>> ea), Ia = Da << 1, Sa = (Ia << 2) + V + 40, vb = (Ia + 2 << 2) + V + 40, Pa = k[vb >> 2], eb = Pa + 8, nb = k[eb >> 2];
            Sa == nb ? h[V >> 2] = B & (1 << Da ^ -1) : nb < k[V + 16 >> 2] ? (it(), oa("Reached an unreachable!")) : (h[vb >> 2] = nb, h[nb + 12 >> 2] = Sa);
            var Db = Da << 3, Qb = Db - J;
            h[Pa + 4 >> 2] = J | 3;
            var Ob = Pa, Eb = Ob + J;
            h[Ob + (J | 4) >> 2] = Qb | 1;
            h[Ob + Db >> 2] = Qb;
            var Ib = k[V + 8 >> 2];
            if (Ib != 0) {
              var Jb = h[V + 20 >> 2], sb = Ib >>> 2 & 1073741822, Lb = (sb << 2) + V + 40, Fb = k[V >> 2], ob = 1 << (Ib >>> 3);
              if ((Fb & ob) == 0) {
                h[V >> 2] = Fb | ob;
                var Bb = Lb, lb = (sb + 2 << 2) + V + 40;
              } else {
                var tb = (sb + 2 << 2) + V + 40, W = k[tb >> 2];
                W < k[V + 16 >> 2] ? (it(), oa("Reached an unreachable!")) : (Bb = W, lb = tb);
              }
              h[lb >> 2] = Jb;
              h[Bb + 12 >> 2] = Jb;
              h[Jb + 8 >> 2] = Bb;
              h[Jb + 12 >> 2] = Lb;
            }
            h[V + 8 >> 2] = Qb;
            h[V + 20 >> 2] = Eb;
            ca = eb;
            C = 334;
          }
        } else {
          var R = J;
          I = R >> 2;
          C = 156;
        }
      } else {
        var Xb = (F & 1 ^ 1) + M, Tb = Xb << 1, yb = (Tb << 2) + V + 40, Cb = (Tb + 2 << 2) + V + 40, Ub = k[Cb >> 2], bc = Ub + 8, Ja = k[bc >> 2];
        yb == Ja ? h[V >> 2] = B & (1 << Xb ^ -1) : Ja < k[V + 16 >> 2] ? (it(), oa("Reached an unreachable!")) : (h[Cb >> 2] = Ja, h[Ja + 12 >> 2] = yb);
        var Mb = Xb << 3;
        h[Ub + 4 >> 2] = Mb | 3;
        h[Ub + (Mb | 4) >> 2] |= 1;
        ca = bc;
        C = 334;
      }
    } else {
      if (c > 4294967231) {
        R = -1, I = R >> 2, C = 156;
      } else {
        var fa = c + 11, ya = fa & -8;
        A = ya >> 2;
        var zb = k[V + 4 >> 2];
        if (zb == 0) {
          R = ya, I = R >> 2, C = 156;
        } else {
          var ta = -ya, cc = fa >>> 8;
          if (cc == 0) {
            var gc = 0;
          } else {
            if (ya > 16777215) {
              gc = 31;
            } else {
              var Pb = cc + 1048320 >>> 16 & 8, pc = cc << Pb, Vb = pc + 520192 >>> 16 & 4, wc = pc << Vb, Xc = wc + 245760 >>> 16 & 2, nc = 14 - (Vb | Pb | Xc) + (wc << Xc >>> 15), gc = ya >>> nc + 7 & 1 | nc << 1;
            }
          }
          var uc = k[V + (gc << 2) + 304 >> 2], hc = uc == 0;
          b : do {
            if (hc) {
              var ic = 0, yc = ta, Ab = 0;
            } else {
              var hb = gc == 31 ? 0 : 25 - (gc >>> 1), dc = 0, ec = ta, qc = uc;
              u = qc >> 2;
              for (var Rc = ya << hb, Cc = 0; ; ) {
                var Yb = h[u + 1] & -8, dd = Yb - ya;
                if (dd < ec) {
                  if (Yb == ya) {
                    ic = qc;
                    yc = dd;
                    Ab = qc;
                    break b;
                  } else {
                    var Sc = qc, Gb = dd;
                  }
                } else {
                  Sc = dc, Gb = ec;
                }
                var Wb = k[u + 5], jc = k[((Rc >>> 31 << 2) + 16 >> 2) + u], Dc = Wb == 0 | Wb == jc ? Cc : Wb;
                if (jc == 0) {
                  ic = Sc;
                  yc = Gb;
                  Ab = Dc;
                  break b;
                }
                dc = Sc;
                ec = Gb;
                qc = jc;
                u = qc >> 2;
                Rc <<= 1;
                Cc = Dc;
              }
            }
          } while (0);
          if (Ab == 0 & ic == 0) {
            var ed = 2 << gc, rc = zb & (ed | -ed);
            if (rc == 0) {
              var Ec = Ab;
            } else {
              var Fc = (rc & -rc) - 1, fc = Fc >>> 12 & 16, sc = Fc >>> fc, fd = sc >>> 5 & 8, Tc = sc >>> fd, wd = Tc >>> 2 & 4, kc = Tc >>> wd, vc = kc >>> 1 & 2, Kd = kc >>> vc, xd = Kd >>> 1 & 1, Ec = h[V + ((fd | fc | wd | vc | xd) + (Kd >>> xd) << 2) + 304 >> 2];
            }
          } else {
            Ec = Ab;
          }
          var Nb = Ec == 0;
          b : do {
            if (Nb) {
              var lc = yc, Rb = ic;
              s = Rb >> 2;
            } else {
              var Mc = Ec;
              r = Mc >> 2;
              for (var Zb = yc, $b = ic; ; ) {
                var gd = (h[r + 1] & -8) - ya, hd = gd < Zb, Gc = hd ? gd : Zb, Rd = hd ? Mc : $b, Uc = k[r + 4];
                if (Uc != 0) {
                  Mc = Uc, r = Mc >> 2, Zb = Gc, $b = Rd;
                } else {
                  var $d = k[r + 5];
                  if ($d == 0) {
                    lc = Gc;
                    Rb = Rd;
                    s = Rb >> 2;
                    break b;
                  } else {
                    Mc = $d, r = Mc >> 2, Zb = Gc, $b = Rd;
                  }
                }
              }
            }
          } while (0);
          if (Rb == 0) {
            R = ya, I = R >> 2, C = 156;
          } else {
            if (lc < h[V + 8 >> 2] - ya) {
              var tc = Rb;
              p = tc >> 2;
              var mc = k[V + 16 >> 2], od = tc < mc;
              do {
                if (!od) {
                  var yd = tc + ya, pd = yd;
                  if (tc < yd) {
                    var Nc = k[s + 6], Oc = k[s + 3], Sd = Oc == Rb;
                    do {
                      if (Sd) {
                        var ae = Rb + 20, zd = h[ae >> 2];
                        if (zd == 0) {
                          var Yc = Rb + 16, Vc = h[Yc >> 2];
                          if (Vc == 0) {
                            var Hb = 0;
                            q = Hb >> 2;
                            break;
                          } else {
                            var Hc = Yc, id = Vc;
                          }
                        } else {
                          Hc = ae, id = zd, C = 103;
                        }
                        for (;;) {
                          var Hd = id + 20, ac = h[Hd >> 2];
                          if (ac != 0) {
                            Hc = Hd, id = ac;
                          } else {
                            var oc = id + 16, be = k[oc >> 2];
                            if (be == 0) {
                              break;
                            } else {
                              Hc = oc, id = be;
                            }
                          }
                        }
                        Hc < mc ? (it(), oa("Reached an unreachable!")) : (h[Hc >> 2] = 0, Hb = id, q = Hb >> 2);
                      } else {
                        var Ad = k[s + 2];
                        Ad < mc ? (it(), oa("Reached an unreachable!")) : (h[Ad + 12 >> 2] = Oc, h[Oc + 8 >> 2] = Ad, Hb = Oc, q = Hb >> 2);
                      }
                    } while (0);
                    var Bd = Nc == 0;
                    b : do {
                      if (!Bd) {
                        var Td = Rb + 28, jd = (h[Td >> 2] << 2) + V + 304, Ld = Rb == h[jd >> 2];
                        do {
                          if (Ld) {
                            if (h[jd >> 2] = Hb, Hb == 0) {
                              h[V + 4 >> 2] &= 1 << h[Td >> 2] ^ -1;
                              break b;
                            }
                          } else {
                            if (Nc < k[V + 16 >> 2]) {
                              it(), oa("Reached an unreachable!");
                            } else {
                              var Cd = Nc + 16;
                              h[Cd >> 2] == Rb ? h[Cd >> 2] = Hb : h[Nc + 20 >> 2] = Hb;
                              if (Hb == 0) {
                                break b;
                              }
                            }
                          }
                        } while (0);
                        if (Hb < k[V + 16 >> 2]) {
                          it(), oa("Reached an unreachable!");
                        } else {
                          h[q + 6] = Nc;
                          var Zc = k[s + 4];
                          Zc != 0 && (Zc < k[V + 16 >> 2] ? (it(), oa("Reached an unreachable!")) : (h[q + 4] = Zc, h[Zc + 24 >> 2] = Hb));
                          var Pc = k[s + 5];
                          Pc != 0 && (Pc < k[V + 16 >> 2] ? (it(), oa("Reached an unreachable!")) : (h[q + 5] = Pc, h[Pc + 24 >> 2] = Hb));
                        }
                      }
                    } while (0);
                    var Md = lc < 16;
                    b : do {
                      if (Md) {
                        var qd = lc + ya;
                        h[s + 1] = qd | 3;
                        h[tc + (qd + 4) >> 2] |= 1;
                      } else {
                        if (h[s + 1] = ya | 3, h[((ya | 4) >> 2) + p] = lc | 1, h[(lc >> 2) + p + A] = lc, lc < 256) {
                          var $c = lc >>> 2 & 1073741822, ce = ($c << 2) + V + 40, Ud = k[V >> 2], Ae = 1 << (lc >>> 3);
                          if ((Ud & Ae) == 0) {
                            h[V >> 2] = Ud | Ae;
                            var Vd = ce, qe = ($c + 2 << 2) + V + 40;
                          } else {
                            var de = ($c + 2 << 2) + V + 40, rd = k[de >> 2];
                            rd < k[V + 16 >> 2] ? (it(), oa("Reached an unreachable!")) : (Vd = rd, qe = de);
                          }
                          h[qe >> 2] = pd;
                          h[Vd + 12 >> 2] = pd;
                          h[p + (A + 2)] = Vd;
                          h[p + (A + 3)] = ce;
                        } else {
                          var zc = yd, Wd = lc >>> 8;
                          if (Wd == 0) {
                            var kd = 0;
                          } else {
                            if (lc > 16777215) {
                              kd = 31;
                            } else {
                              var ef = Wd + 1048320 >>> 16 & 8, Wc = Wd << ef, ld = Wc + 520192 >>> 16 & 4, re = Wc << ld, ee = re + 245760 >>> 16 & 2, Le = 14 - (ld | ef | ee) + (re << ee >>> 15), kd = lc >>> Le + 7 & 1 | Le << 1;
                            }
                          }
                          var Me = (kd << 2) + V + 304;
                          h[p + (A + 7)] = kd;
                          var pg = tc + (ya + 16);
                          h[p + (A + 5)] = 0;
                          h[pg >> 2] = 0;
                          var ff = h[V + 4 >> 2], qg = 1 << kd;
                          if ((ff & qg) == 0) {
                            h[V + 4 >> 2] = ff | qg, h[Me >> 2] = zc, h[p + (A + 6)] = Me, h[p + (A + 3)] = zc, h[p + (A + 2)] = zc;
                          } else {
                            for (var rg = lc << (kd == 31 ? 0 : 25 - (kd >>> 1)), Nd = h[Me >> 2]; ; ) {
                              if ((h[Nd + 4 >> 2] & -8) == lc) {
                                var Be = Nd + 8, gf = k[Be >> 2], zf = k[V + 16 >> 2], Af = Nd < zf;
                                do {
                                  if (!Af && gf >= zf) {
                                    h[gf + 12 >> 2] = zc;
                                    h[Be >> 2] = zc;
                                    h[p + (A + 2)] = gf;
                                    h[p + (A + 3)] = Nd;
                                    h[p + (A + 6)] = 0;
                                    break b;
                                  }
                                } while (0);
                                it();
                                oa("Reached an unreachable!");
                              } else {
                                var Ce = (rg >>> 31 << 2) + Nd + 16, Hh = k[Ce >> 2];
                                if (Hh == 0) {
                                  if (Ce < k[V + 16 >> 2]) {
                                    it(), oa("Reached an unreachable!");
                                  } else {
                                    h[Ce >> 2] = zc;
                                    h[p + (A + 6)] = Nd;
                                    h[p + (A + 3)] = zc;
                                    h[p + (A + 2)] = zc;
                                    break b;
                                  }
                                } else {
                                  rg <<= 1, Nd = Hh;
                                }
                              }
                            }
                          }
                        }
                      }
                    } while (0);
                    var Wg = Rb + 8, Zf = Wg;
                    Wg == 0 ? (R = ya, I = R >> 2, C = 156) : (ca = Zf, C = 334);
                    break a;
                  }
                }
              } while (0);
              it();
              oa("Reached an unreachable!");
            } else {
              R = ya, I = R >> 2, C = 156;
            }
          }
        }
      }
    }
  } while (0);
  a : do {
    if (C == 156) {
      var fe = k[V + 8 >> 2];
      if (R > fe) {
        var Bf = k[V + 12 >> 2];
        if (R < Bf) {
          var sg = Bf - R;
          h[V + 12 >> 2] = sg;
          var hf = k[V + 24 >> 2], Ih = hf;
          h[V + 24 >> 2] = Ih + R;
          h[(Ih + 4 >> 2) + I] = sg | 1;
          h[hf + 4 >> 2] = R | 3;
          ca = hf + 8;
        } else {
          if (h[jt >> 2] == 0 && h[jt >> 2] == 0) {
            var Cf = kt();
            (Cf - 1 & Cf) == 0 ? (h[jt + 8 >> 2] = Cf, h[jt + 4 >> 2] = Cf, h[jt + 12 >> 2] = -1, h[jt + 16 >> 2] = 2097152, h[jt + 20 >> 2] = 0, h[V + 440 >> 2] = 0, h[jt >> 2] = Math.floor(Date.now() / 1e3) & -16 ^ 1431655768) : (it(), oa("Reached an unreachable!"));
          }
          var Xg = (h[V + 440 >> 2] & 4) == 0;
          do {
            if (Xg) {
              var Yg = h[V + 24 >> 2], $f = Yg == 0;
              b : do {
                if ($f) {
                  C = 175;
                } else {
                  for (var ag = Yg, jf = V + 444; ; ) {
                    var Zg = jf, $g = k[Zg >> 2];
                    if ($g <= ag) {
                      var bg = jf + 4;
                      if ($g + h[bg >> 2] > ag) {
                        break;
                      }
                    }
                    var tg = k[jf + 8 >> 2];
                    if (tg == 0) {
                      C = 175;
                      break b;
                    } else {
                      jf = tg;
                    }
                  }
                  if (jf == 0) {
                    C = 175;
                  } else {
                    var cg = h[jt + 8 >> 2], Df = R + 47 - h[V + 12 >> 2] + cg & -cg;
                    if (Df < 2147483647) {
                      var Ef = lt(Df);
                      if (Ef == h[Zg >> 2] + h[bg >> 2]) {
                        var md = Ef, Ff = Df, Dd = Ef;
                        C = 182;
                      } else {
                        var Ne = Ef, Ac = Df;
                        C = 184;
                      }
                    } else {
                      C = 183;
                    }
                  }
                }
              } while (0);
              if (C == 175) {
                var ad = lt(0);
                if (ad == -1) {
                  C = 183;
                } else {
                  var ah = h[jt + 8 >> 2], bh = R + (ah + 47) & -ah, dg = ad, ch = h[jt + 4 >> 2], Jh = ch - 1, ug = (Jh & dg) == 0 ? bh : bh - dg + (Jh + dg & -ch);
                  if (ug < 2147483647) {
                    var Gf = lt(ug);
                    Gf == ad ? (md = ad, Ff = ug, Dd = Gf, C = 182) : (Ne = Gf, Ac = ug, C = 184);
                  } else {
                    C = 183;
                  }
                }
              }
              if (C == 183) {
                h[V + 440 >> 2] |= 4, C = 192;
              } else {
                if (C == 182) {
                  if (md == -1) {
                    Ne = Dd, Ac = Ff;
                  } else {
                    var Qc = Ff, xc = md;
                    o = xc >> 2;
                    C = 195;
                    break;
                  }
                }
                var se = -Ac;
                if (Ne != -1 & Ac < 2147483647) {
                  if (Ac < R + 48) {
                    var kf = h[jt + 8 >> 2], vg = R + 47 - Ac + kf & -kf;
                    vg < 2147483647 ? lt(vg) == -1 ? (lt(se), C = 191) : (Hf = vg + Ac, C = 190) : (Hf = Ac, C = 190);
                  } else {
                    var Hf = Ac;
                    C = 190;
                  }
                } else {
                  Hf = Ac, C = 190;
                }
                C == 190 && Ne != -1 ? (Qc = Hf, xc = Ne, o = xc >> 2, C = 195) : (h[V + 440 >> 2] |= 4, C = 192);
              }
            } else {
              C = 192;
            }
          } while (0);
          if (C == 192) {
            var eg = h[jt + 8 >> 2], te = R + (eg + 47) & -eg;
            if (te < 2147483647) {
              var ge = lt(te), ue = lt(0);
              if (ue != -1 & ge != -1 & ge < ue) {
                var fg = ue - ge;
                fg <= R + 40 | ge == -1 ? C = 333 : (Qc = fg, xc = ge, o = xc >> 2, C = 195);
              } else {
                C = 333;
              }
            } else {
              C = 333;
            }
          }
          do {
            if (C == 195) {
              var wg = h[V + 432 >> 2] + Qc;
              h[V + 432 >> 2] = wg;
              wg > k[V + 436 >> 2] && (h[V + 436 >> 2] = wg);
              var Ed = k[V + 24 >> 2];
              n = Ed >> 2;
              var De = Ed == 0;
              b : do {
                if (De) {
                  var ve = k[V + 16 >> 2];
                  ve == 0 | xc < ve && (h[V + 16 >> 2] = xc);
                  h[V + 444 >> 2] = xc;
                  h[V + 448 >> 2] = Qc;
                  h[V + 456 >> 2] = 0;
                  h[V + 36 >> 2] = h[jt >> 2];
                  h[V + 32 >> 2] = -1;
                  for (var Oe = 0; ; ) {
                    var Pe = Oe << 1, lf = (Pe << 2) + V + 40;
                    h[V + (Pe + 3 << 2) + 40 >> 2] = lf;
                    h[V + (Pe + 2 << 2) + 40 >> 2] = lf;
                    var he = Oe + 1;
                    if (he == 32) {
                      break;
                    } else {
                      Oe = he;
                    }
                  }
                  var Ee = xc + 8, xg = (Ee & 7) == 0 ? 0 : -Ee & 7, yg = Qc - 40 - xg;
                  h[V + 24 >> 2] = xc + xg;
                  h[V + 12 >> 2] = yg;
                  h[(xg + 4 >> 2) + o] = yg | 1;
                  h[(Qc - 36 >> 2) + o] = 40;
                  h[V + 28 >> 2] = h[jt + 16 >> 2];
                } else {
                  var Id = V + 444;
                  for (m = Id >> 2; ; ) {
                    if (Id == 0) {
                      break;
                    }
                    var Fe = k[m], If = Id + 4, zg = k[If >> 2], mf = Fe + zg;
                    if (xc == mf) {
                      if ((h[m + 3] & 8) != 0) {
                        break;
                      }
                      var nf = Ed;
                      if (!(nf >= Fe & nf < mf)) {
                        break;
                      }
                      h[If >> 2] = zg + Qc;
                      var Jf = h[V + 24 >> 2], Kf = h[V + 12 >> 2] + Qc, Lf = Jf, dh = Jf + 8, gg = (dh & 7) == 0 ? 0 : -dh & 7, Ge = Kf - gg;
                      h[V + 24 >> 2] = Lf + gg;
                      h[V + 12 >> 2] = Ge;
                      h[Lf + (gg + 4) >> 2] = Ge | 1;
                      h[Lf + (Kf + 4) >> 2] = 40;
                      h[V + 28 >> 2] = h[jt + 16 >> 2];
                      break b;
                    } else {
                      Id = h[m + 2], m = Id >> 2;
                    }
                  }
                  xc < k[V + 16 >> 2] && (h[V + 16 >> 2] = xc);
                  for (var we = xc + Qc, Qe = V + 444; ; ) {
                    if (Qe == 0) {
                      C = 295;
                      break;
                    }
                    var Ag = Qe, Xd = k[Ag >> 2];
                    j = Xd >> 2;
                    if (Xd == we) {
                      C = 219;
                      break;
                    }
                    Qe = h[Qe + 8 >> 2];
                  }
                  do {
                    if (C == 219 && (h[Qe + 12 >> 2] & 8) == 0) {
                      h[Ag >> 2] = xc;
                      h[Qe + 4 >> 2] += Qc;
                      var of = xc + 8, pf = (of & 7) == 0 ? 0 : -of & 7, Re = Xd + 8, Fd = (Re & 7) == 0 ? 0 : -Re & 7;
                      i = Fd >> 2;
                      var qf = Xd + Fd, rf = qf, Mf = pf + R;
                      g = Mf >> 2;
                      var sf = xc + Mf, Nf = sf, tf = qf - (xc + pf) - R;
                      h[(pf + 4 >> 2) + o] = R | 3;
                      var sd = rf == h[V + 24 >> 2];
                      c : do {
                        if (sd) {
                          var eh = h[V + 12 >> 2] + tf;
                          h[V + 12 >> 2] = eh;
                          h[V + 24 >> 2] = Nf;
                          h[o + (g + 1)] = eh | 1;
                        } else {
                          if (rf == h[V + 20 >> 2]) {
                            var td = h[V + 8 >> 2] + tf;
                            h[V + 8 >> 2] = td;
                            h[V + 20 >> 2] = Nf;
                            h[o + (g + 1)] = td | 1;
                            h[xc + td + Mf >> 2] = td;
                          } else {
                            var He = k[j + (i + 1)];
                            if ((He & 3) == 1) {
                              var Yd = He & -8, Se = He >>> 3, fh = He < 256;
                              d : do {
                                if (fh) {
                                  var uf = k[((Fd | 8) >> 2) + j], vf = k[j + (i + 3)];
                                  if (uf == vf) {
                                    h[V >> 2] &= 1 << Se ^ -1;
                                  } else {
                                    var Kh = ((He >>> 2 & 1073741822) << 2) + V + 40;
                                    C = uf == Kh ? 234 : uf < k[V + 16 >> 2] ? 237 : 234;
                                    do {
                                      if (C == 234 && !(vf != Kh && vf < k[V + 16 >> 2])) {
                                        h[uf + 12 >> 2] = vf;
                                        h[vf + 8 >> 2] = uf;
                                        break d;
                                      }
                                    } while (0);
                                    it();
                                    oa("Reached an unreachable!");
                                  }
                                } else {
                                  var gh = qf, Te = k[((Fd | 24) >> 2) + j], hh = k[j + (i + 3)], Bg = hh == gh;
                                  do {
                                    if (Bg) {
                                      var Bi = Fd | 16, Ci = Xd + (Bi + 4), Lh = h[Ci >> 2];
                                      if (Lh == 0) {
                                        var Di = Xd + Bi, wj = h[Di >> 2];
                                        if (wj == 0) {
                                          var Od = 0;
                                          f = Od >> 2;
                                          break;
                                        } else {
                                          var wf = Di, Ie = wj;
                                        }
                                      } else {
                                        wf = Ci, Ie = Lh, C = 244;
                                      }
                                      for (;;) {
                                        var Mh = Ie + 20, Ei = h[Mh >> 2];
                                        if (Ei != 0) {
                                          wf = Mh, Ie = Ei;
                                        } else {
                                          var Fi = Ie + 16, Nh = k[Fi >> 2];
                                          if (Nh == 0) {
                                            break;
                                          } else {
                                            wf = Fi, Ie = Nh;
                                          }
                                        }
                                      }
                                      wf < k[V + 16 >> 2] ? (it(), oa("Reached an unreachable!")) : (h[wf >> 2] = 0, Od = Ie, f = Od >> 2);
                                    } else {
                                      var Oh = k[((Fd | 8) >> 2) + j];
                                      Oh < k[V + 16 >> 2] ? (it(), oa("Reached an unreachable!")) : (h[Oh + 12 >> 2] = hh, h[hh + 8 >> 2] = Oh, Od = hh, f = Od >> 2);
                                    }
                                  } while (0);
                                  if (Te != 0) {
                                    var Cg = Xd + (Fd + 28), Ph = (h[Cg >> 2] << 2) + V + 304, Gi = gh == h[Ph >> 2];
                                    do {
                                      if (Gi) {
                                        if (h[Ph >> 2] = Od, Od == 0) {
                                          h[V + 4 >> 2] &= 1 << h[Cg >> 2] ^ -1;
                                          break d;
                                        }
                                      } else {
                                        if (Te < k[V + 16 >> 2]) {
                                          it(), oa("Reached an unreachable!");
                                        } else {
                                          var Dg = Te + 16;
                                          h[Dg >> 2] == gh ? h[Dg >> 2] = Od : h[Te + 20 >> 2] = Od;
                                          if (Od == 0) {
                                            break d;
                                          }
                                        }
                                      }
                                    } while (0);
                                    if (Od < k[V + 16 >> 2]) {
                                      it(), oa("Reached an unreachable!");
                                    } else {
                                      h[f + 6] = Te;
                                      var ud = Fd | 16, Eg = k[(ud >> 2) + j];
                                      Eg != 0 && (Eg < k[V + 16 >> 2] ? (it(), oa("Reached an unreachable!")) : (h[f + 4] = Eg, h[Eg + 24 >> 2] = Od));
                                      var ih = k[(ud + 4 >> 2) + j];
                                      ih != 0 && (ih < k[V + 16 >> 2] ? (it(), oa("Reached an unreachable!")) : (h[f + 5] = ih, h[ih + 24 >> 2] = Od));
                                    }
                                  }
                                }
                              } while (0);
                              var Hi = Xd + (Yd | Fd), ie = Yd + tf;
                            } else {
                              Hi = rf, ie = tf;
                            }
                            h[Hi + 4 >> 2] &= -2;
                            h[o + (g + 1)] = ie | 1;
                            h[(ie >> 2) + o + g] = ie;
                            if (ie < 256) {
                              var jh = ie >>> 2 & 1073741822, xj = (jh << 2) + V + 40, Ii = k[V >> 2], kh = 1 << (ie >>> 3);
                              if ((Ii & kh) == 0) {
                                h[V >> 2] = Ii | kh;
                                var xe = xj, Ue = (jh + 2 << 2) + V + 40;
                              } else {
                                var yj = (jh + 2 << 2) + V + 40, Qh = k[yj >> 2];
                                Qh < k[V + 16 >> 2] ? (it(), oa("Reached an unreachable!")) : (xe = Qh, Ue = yj);
                              }
                              h[Ue >> 2] = Nf;
                              h[xe + 12 >> 2] = Nf;
                              h[o + (g + 2)] = xe;
                              h[o + (g + 3)] = xj;
                            } else {
                              var Ve = sf, Fg = ie >>> 8;
                              if (Fg == 0) {
                                var Of = 0;
                              } else {
                                if (ie > 16777215) {
                                  Of = 31;
                                } else {
                                  var hg = Fg + 1048320 >>> 16 & 8, zj = Fg << hg, Rh = zj + 520192 >>> 16 & 4, Sh = zj << Rh, Th = Sh + 245760 >>> 16 & 2, Uh = 14 - (Rh | hg | Th) + (Sh << Th >>> 15), Of = ie >>> Uh + 7 & 1 | Uh << 1;
                                }
                              }
                              var Gg = (Of << 2) + V + 304;
                              h[o + (g + 7)] = Of;
                              h[o + (g + 5)] = 0;
                              h[o + (g + 4)] = 0;
                              var Ji = h[V + 4 >> 2], Ki = 1 << Of;
                              if ((Ji & Ki) == 0) {
                                h[V + 4 >> 2] = Ji | Ki, h[Gg >> 2] = Ve, h[o + (g + 6)] = Gg, h[o + (g + 3)] = Ve, h[o + (g + 2)] = Ve;
                              } else {
                                for (var Li = ie << (Of == 31 ? 0 : 25 - (Of >>> 1)), Pf = h[Gg >> 2]; ; ) {
                                  if ((h[Pf + 4 >> 2] & -8) == ie) {
                                    var Aj = Pf + 8, Vh = k[Aj >> 2], lh = k[V + 16 >> 2], Wh = Pf < lh;
                                    do {
                                      if (!Wh && Vh >= lh) {
                                        h[Vh + 12 >> 2] = Ve;
                                        h[Aj >> 2] = Ve;
                                        h[o + (g + 2)] = Vh;
                                        h[o + (g + 3)] = Pf;
                                        h[o + (g + 6)] = 0;
                                        break c;
                                      }
                                    } while (0);
                                    it();
                                    oa("Reached an unreachable!");
                                  } else {
                                    var mh = (Li >>> 31 << 2) + Pf + 16, Xh = k[mh >> 2];
                                    if (Xh == 0) {
                                      if (mh < k[V + 16 >> 2]) {
                                        it(), oa("Reached an unreachable!");
                                      } else {
                                        h[mh >> 2] = Ve;
                                        h[o + (g + 6)] = Pf;
                                        h[o + (g + 3)] = Ve;
                                        h[o + (g + 2)] = Ve;
                                        break c;
                                      }
                                    } else {
                                      Li <<= 1, Pf = Xh;
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      } while (0);
                      ca = xc + (pf | 8);
                      break a;
                    }
                  } while (0);
                  var Qf = Ed, We = V + 444;
                  for (e = We >> 2; ; ) {
                    var Yh = k[e];
                    if (Yh <= Qf) {
                      var Mi = k[e + 1];
                      if (Yh + Mi > Qf) {
                        var Rf = Yh, ig = Mi;
                        break;
                      }
                    }
                    var Ni = k[e + 2];
                    if (Ni != 0) {
                      We = Ni, e = We >> 2;
                    } else {
                      Rf = 0;
                      ig = 4;
                      break;
                    }
                  }
                  var Zh = Rf + ig, $h = Rf + (ig - 39), Oi = Rf + (ig - 47) + (($h & 7) == 0 ? 0 : -$h & 7), jg = Oi < Ed + 16 ? Qf : Oi, ai = jg + 8;
                  d = ai >> 2;
                  var Pi = ai, bi = xc + 8, nh = (bi & 7) == 0 ? 0 : -bi & 7, Qi = Qc - 40 - nh;
                  h[V + 24 >> 2] = xc + nh;
                  h[V + 12 >> 2] = Qi;
                  h[(nh + 4 >> 2) + o] = Qi | 1;
                  h[(Qc - 36 >> 2) + o] = 40;
                  h[V + 28 >> 2] = h[jt + 16 >> 2];
                  h[jg + 4 >> 2] = 27;
                  h[d] = h[V + 444 >> 2];
                  h[d + 1] = h[V + 448 >> 2];
                  h[d + 2] = h[V + 452 >> 2];
                  h[d + 3] = h[V + 456 >> 2];
                  h[V + 444 >> 2] = xc;
                  h[V + 448 >> 2] = Qc;
                  h[V + 456 >> 2] = 0;
                  h[V + 452 >> 2] = Pi;
                  var Ri = jg + 28;
                  h[Ri >> 2] = 7;
                  var Bj = jg + 32 < Zh;
                  c : do {
                    if (Bj) {
                      for (var oh = Ri; ; ) {
                        var Cj = oh + 4;
                        h[Cj >> 2] = 7;
                        if (oh + 8 < Zh) {
                          oh = Cj;
                        } else {
                          break c;
                        }
                      }
                    }
                  } while (0);
                  if (jg != Qf) {
                    var ye = jg - Ed, Dj = Qf + ye;
                    h[Qf + (ye + 4) >> 2] &= -2;
                    h[n + 1] = ye | 1;
                    h[Dj >> 2] = ye;
                    if (ye < 256) {
                      var ci = ye >>> 2 & 1073741822, di = (ci << 2) + V + 40, ei = k[V >> 2], Ej = 1 << (ye >>> 3);
                      if ((ei & Ej) == 0) {
                        h[V >> 2] = ei | Ej;
                        var Si = di, Ti = (ci + 2 << 2) + V + 40;
                      } else {
                        var fi = (ci + 2 << 2) + V + 40, ph = k[fi >> 2];
                        ph < k[V + 16 >> 2] ? (it(), oa("Reached an unreachable!")) : (Si = ph, Ti = fi);
                      }
                      h[Ti >> 2] = Ed;
                      h[Si + 12 >> 2] = Ed;
                      h[n + 2] = Si;
                      h[n + 3] = di;
                    } else {
                      var Hg = Ed, Ig = ye >>> 8;
                      if (Ig == 0) {
                        var Sf = 0;
                      } else {
                        if (ye > 16777215) {
                          Sf = 31;
                        } else {
                          var Ui = Ig + 1048320 >>> 16 & 8, xf = Ig << Ui, Tf = xf + 520192 >>> 16 & 4, gi = xf << Tf, hi = gi + 245760 >>> 16 & 2, Vi = 14 - (Tf | Ui | hi) + (gi << hi >>> 15), Sf = ye >>> Vi + 7 & 1 | Vi << 1;
                        }
                      }
                      var Uf = (Sf << 2) + V + 304;
                      h[n + 7] = Sf;
                      h[n + 5] = 0;
                      h[n + 4] = 0;
                      var ii = h[V + 4 >> 2], Wi = 1 << Sf;
                      if ((ii & Wi) == 0) {
                        h[V + 4 >> 2] = ii | Wi, h[Uf >> 2] = Hg, h[n + 6] = Uf, h[n + 3] = Ed, h[n + 2] = Ed;
                      } else {
                        for (var Fj = ye << (Sf == 31 ? 0 : 25 - (Sf >>> 1)), Vf = h[Uf >> 2]; ; ) {
                          if ((h[Vf + 4 >> 2] & -8) == ye) {
                            var Je = Vf + 8, qh = k[Je >> 2], Jg = k[V + 16 >> 2], Gk = Vf < Jg;
                            do {
                              if (!Gk && qh >= Jg) {
                                h[qh + 12 >> 2] = Hg;
                                h[Je >> 2] = Hg;
                                h[n + 2] = qh;
                                h[n + 3] = Vf;
                                h[n + 6] = 0;
                                break b;
                              }
                            } while (0);
                            it();
                            oa("Reached an unreachable!");
                          } else {
                            var ji = (Fj >>> 31 << 2) + Vf + 16, Gj = k[ji >> 2];
                            if (Gj == 0) {
                              if (ji < k[V + 16 >> 2]) {
                                it(), oa("Reached an unreachable!");
                              } else {
                                h[ji >> 2] = Hg;
                                h[n + 6] = Vf;
                                h[n + 3] = Ed;
                                h[n + 2] = Ed;
                                break b;
                              }
                            } else {
                              Fj <<= 1, Vf = Gj;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              } while (0);
              var Hj = k[V + 12 >> 2];
              if (Hj > R) {
                var ki = Hj - R;
                h[V + 12 >> 2] = ki;
                var rh = k[V + 24 >> 2], Kg = rh;
                h[V + 24 >> 2] = Kg + R;
                h[(Kg + 4 >> 2) + I] = ki | 1;
                h[rh + 4 >> 2] = R | 3;
                ca = rh + 8;
                break a;
              }
            }
          } while (0);
          h[mt >> 2] = 12;
          ca = 0;
        }
      } else {
        var Xe = fe - R, sh = k[V + 20 >> 2];
        if (Xe > 15) {
          var th = sh;
          h[V + 20 >> 2] = th + R;
          h[V + 8 >> 2] = Xe;
          h[(th + 4 >> 2) + I] = Xe | 1;
          h[th + fe >> 2] = Xe;
          h[sh + 4 >> 2] = R | 3;
        } else {
          h[V + 8 >> 2] = 0, h[V + 20 >> 2] = 0, h[sh + 4 >> 2] = fe | 3, h[sh + (fe + 4) >> 2] |= 1;
        }
        ca = sh + 8;
      }
    }
  } while (0);
  return ca;
}

function qp(c) {
  var d, e, f, g, i, j, m, n, o = c >> 2, q, p = c == 0;
  a : do {
    if (!p) {
      var r = c - 8, s = r, u = k[V + 16 >> 2], A = r < u;
      b : do {
        if (!A) {
          var E = k[c - 4 >> 2], z = E & 3;
          if (z != 1) {
            var I = E & -8;
            n = I >> 2;
            var C = c + (I - 8), K = C, J = (E & 1) == 0;
            c : do {
              if (J) {
                var M = k[r >> 2];
                if (z == 0) {
                  break a;
                }
                var B = -8 - M;
                m = B >> 2;
                var F = c + B, H = F, P = M + I;
                if (F < u) {
                  break b;
                }
                if (H == h[V + 20 >> 2]) {
                  if (j = c + (I - 4) >> 2, (h[j] & 3) != 3) {
                    var D = H;
                    i = D >> 2;
                    var Q = P;
                  } else {
                    h[V + 8 >> 2] = P;
                    h[j] &= -2;
                    h[o + (m + 1)] = P | 1;
                    h[C >> 2] = P;
                    break a;
                  }
                } else {
                  if (M < 256) {
                    var O = k[o + (m + 2)], L = k[o + (m + 3)];
                    if (O == L) {
                      h[V >> 2] &= 1 << (M >>> 3) ^ -1, D = H, i = D >> 2, Q = P;
                    } else {
                      var ib = ((M >>> 2 & 1073741822) << 2) + V + 40, U = O != ib & O < u;
                      do {
                        if (!U && L == ib | L >= u) {
                          h[O + 12 >> 2] = L;
                          h[L + 8 >> 2] = O;
                          D = H;
                          i = D >> 2;
                          Q = P;
                          break c;
                        }
                      } while (0);
                      it();
                      oa("Reached an unreachable!");
                    }
                  } else {
                    var N = F, ja = k[o + (m + 6)], ka = k[o + (m + 3)], za = ka == N;
                    do {
                      if (za) {
                        var S = c + (B + 20), T = h[S >> 2];
                        if (T == 0) {
                          var $ = c + (B + 16), Ea = h[$ >> 2];
                          if (Ea == 0) {
                            var Z = 0;
                            g = Z >> 2;
                            break;
                          } else {
                            var X = $, aa = Ea;
                          }
                        } else {
                          X = S, aa = T, q = 20;
                        }
                        for (;;) {
                          var Ba = aa + 20, Ca = h[Ba >> 2];
                          if (Ca != 0) {
                            X = Ba, aa = Ca;
                          } else {
                            var mb = aa + 16, Qa = k[mb >> 2];
                            if (Qa == 0) {
                              break;
                            } else {
                              X = mb, aa = Qa;
                            }
                          }
                        }
                        X < u ? (it(), oa("Reached an unreachable!")) : (h[X >> 2] = 0, Z = aa, g = Z >> 2);
                      } else {
                        var pa = k[o + (m + 2)];
                        pa < u ? (it(), oa("Reached an unreachable!")) : (h[pa + 12 >> 2] = ka, h[ka + 8 >> 2] = pa, Z = ka, g = Z >> 2);
                      }
                    } while (0);
                    if (ja == 0) {
                      D = H, i = D >> 2, Q = P;
                    } else {
                      var ua = c + (B + 28), Y = (h[ua >> 2] << 2) + V + 304, Fa = N == h[Y >> 2];
                      do {
                        if (Fa) {
                          if (h[Y >> 2] = Z, Z == 0) {
                            h[V + 4 >> 2] &= 1 << h[ua >> 2] ^ -1;
                            D = H;
                            i = D >> 2;
                            Q = P;
                            break c;
                          }
                        } else {
                          if (ja < k[V + 16 >> 2]) {
                            it(), oa("Reached an unreachable!");
                          } else {
                            var va = ja + 16;
                            h[va >> 2] == N ? h[va >> 2] = Z : h[ja + 20 >> 2] = Z;
                            if (Z == 0) {
                              D = H;
                              i = D >> 2;
                              Q = P;
                              break c;
                            }
                          }
                        }
                      } while (0);
                      if (Z < k[V + 16 >> 2]) {
                        it(), oa("Reached an unreachable!");
                      } else {
                        h[g + 6] = ja;
                        var Ra = k[o + (m + 4)];
                        Ra != 0 && (Ra < k[V + 16 >> 2] ? (it(), oa("Reached an unreachable!")) : (h[g + 4] = Ra, h[Ra + 24 >> 2] = Z));
                        var Wa = k[o + (m + 5)];
                        Wa == 0 ? (D = H, i = D >> 2, Q = P) : Wa < k[V + 16 >> 2] ? (it(), oa("Reached an unreachable!")) : (h[g + 5] = Wa, h[Wa + 24 >> 2] = Z, D = H, i = D >> 2, Q = P);
                      }
                    }
                  }
                }
              } else {
                D = s, i = D >> 2, Q = I;
              }
            } while (0);
            var Xa = D;
            if (Xa < C) {
              var Ka = c + (I - 4), Za = k[Ka >> 2];
              if ((Za & 1) != 0) {
                var jb = (Za & 2) == 0;
                do {
                  if (jb) {
                    if (K == h[V + 24 >> 2]) {
                      var $a = h[V + 12 >> 2] + Q;
                      h[V + 12 >> 2] = $a;
                      h[V + 24 >> 2] = D;
                      h[i + 1] = $a | 1;
                      D == h[V + 20 >> 2] && (h[V + 20 >> 2] = 0, h[V + 8 >> 2] = 0);
                      if ($a <= k[V + 28 >> 2]) {
                        break a;
                      }
                      if (h[jt >> 2] == 0 && h[jt >> 2] == 0) {
                        var pb = kt();
                        (pb - 1 & pb) == 0 ? (h[jt + 8 >> 2] = pb, h[jt + 4 >> 2] = pb, h[jt + 12 >> 2] = -1, h[jt + 16 >> 2] = 2097152, h[jt + 20 >> 2] = 0, h[V + 440 >> 2] = 0, h[jt >> 2] = Math.floor(Date.now() / 1e3) & -16 ^ 1431655768) : (it(), oa("Reached an unreachable!"));
                      }
                      var ga = k[V + 24 >> 2];
                      if (ga == 0) {
                        break a;
                      }
                      var da = k[V + 12 >> 2], Ya = da > 40;
                      do {
                        if (Ya) {
                          var ba = k[jt + 8 >> 2], ha = (Math.floor((da - 41 + ba) / ba) - 1) * ba, qa = ga, ra = V + 444;
                          for (f = ra >> 2; ; ) {
                            var ma = k[f];
                            if (ma <= qa && ma + h[f + 1] > qa) {
                              var la = ra;
                              break;
                            }
                            var xa = k[f + 2];
                            if (xa == 0) {
                              la = 0;
                              break;
                            } else {
                              ra = xa, f = ra >> 2;
                            }
                          }
                          if ((h[la + 12 >> 2] & 8) == 0) {
                            var ab = lt(0);
                            e = la + 4 >> 2;
                            if (ab == h[la >> 2] + h[e]) {
                              var ia = lt(-(ha > 2147483646 ? -2147483648 - ba : ha)), Ma = lt(0);
                              if (ia != -1 & Ma < ab) {
                                var bb = ab - Ma;
                                if (ab != Ma) {
                                  h[e] -= bb;
                                  h[V + 432 >> 2] -= bb;
                                  var wb = h[V + 24 >> 2], xb = h[V + 12 >> 2] - bb, Kb = wb, Na = wb + 8, Ga = (Na & 7) == 0 ? 0 : -Na & 7, sa = xb - Ga;
                                  h[V + 24 >> 2] = Kb + Ga;
                                  h[V + 12 >> 2] = sa;
                                  h[Kb + (Ga + 4) >> 2] = sa | 1;
                                  h[Kb + (xb + 4) >> 2] = 40;
                                  h[V + 28 >> 2] = h[jt + 16 >> 2];
                                  break a;
                                }
                              }
                            }
                          }
                        }
                      } while (0);
                      if (k[V + 12 >> 2] <= k[V + 28 >> 2]) {
                        break a;
                      }
                      h[V + 28 >> 2] = -1;
                    } else {
                      if (K == h[V + 20 >> 2]) {
                        var Ha = h[V + 8 >> 2] + Q;
                        h[V + 8 >> 2] = Ha;
                        h[V + 20 >> 2] = D;
                        h[i + 1] = Ha | 1;
                        h[Xa + Ha >> 2] = Ha;
                      } else {
                        var Oa = (Za & -8) + Q, Ua = Za >>> 3, ca = Za < 256;
                        c : do {
                          if (ca) {
                            var Aa = k[o + n], cb = k[((I | 4) >> 2) + o];
                            if (Aa == cb) {
                              h[V >> 2] &= 1 << Ua ^ -1;
                            } else {
                              var na = ((Za >>> 2 & 1073741822) << 2) + V + 40;
                              q = Aa == na ? 81 : Aa < k[V + 16 >> 2] ? 84 : 81;
                              do {
                                if (q == 81 && !(cb != na && cb < k[V + 16 >> 2])) {
                                  h[Aa + 12 >> 2] = cb;
                                  h[cb + 8 >> 2] = Aa;
                                  break c;
                                }
                              } while (0);
                              it();
                              oa("Reached an unreachable!");
                            }
                          } else {
                            var La = C, db = k[o + (n + 4)], qb = k[((I | 4) >> 2) + o], ub = qb == La;
                            do {
                              if (ub) {
                                var rb = c + (I + 12), gb = h[rb >> 2];
                                if (gb == 0) {
                                  var kb = c + (I + 8), Va = h[kb >> 2];
                                  if (Va == 0) {
                                    var ea = 0;
                                    d = ea >> 2;
                                    break;
                                  } else {
                                    var Da = kb, Ia = Va;
                                  }
                                } else {
                                  Da = rb, Ia = gb, q = 91;
                                }
                                for (;;) {
                                  var Sa = Ia + 20, vb = h[Sa >> 2];
                                  if (vb != 0) {
                                    Da = Sa, Ia = vb;
                                  } else {
                                    var Pa = Ia + 16, eb = k[Pa >> 2];
                                    if (eb == 0) {
                                      break;
                                    } else {
                                      Da = Pa, Ia = eb;
                                    }
                                  }
                                }
                                Da < k[V + 16 >> 2] ? (it(), oa("Reached an unreachable!")) : (h[Da >> 2] = 0, ea = Ia, d = ea >> 2);
                              } else {
                                var nb = k[o + n];
                                nb < k[V + 16 >> 2] ? (it(), oa("Reached an unreachable!")) : (h[nb + 12 >> 2] = qb, h[qb + 8 >> 2] = nb, ea = qb, d = ea >> 2);
                              }
                            } while (0);
                            if (db != 0) {
                              var Db = c + (I + 20), Qb = (h[Db >> 2] << 2) + V + 304, Ob = La == h[Qb >> 2];
                              do {
                                if (Ob) {
                                  if (h[Qb >> 2] = ea, ea == 0) {
                                    h[V + 4 >> 2] &= 1 << h[Db >> 2] ^ -1;
                                    break c;
                                  }
                                } else {
                                  if (db < k[V + 16 >> 2]) {
                                    it(), oa("Reached an unreachable!");
                                  } else {
                                    var Eb = db + 16;
                                    h[Eb >> 2] == La ? h[Eb >> 2] = ea : h[db + 20 >> 2] = ea;
                                    if (ea == 0) {
                                      break c;
                                    }
                                  }
                                }
                              } while (0);
                              if (ea < k[V + 16 >> 2]) {
                                it(), oa("Reached an unreachable!");
                              } else {
                                h[d + 6] = db;
                                var Ib = k[o + (n + 2)];
                                Ib != 0 && (Ib < k[V + 16 >> 2] ? (it(), oa("Reached an unreachable!")) : (h[d + 4] = Ib, h[Ib + 24 >> 2] = ea));
                                var Jb = k[o + (n + 3)];
                                Jb != 0 && (Jb < k[V + 16 >> 2] ? (it(), oa("Reached an unreachable!")) : (h[d + 5] = Jb, h[Jb + 24 >> 2] = ea));
                              }
                            }
                          }
                        } while (0);
                        h[i + 1] = Oa | 1;
                        h[Xa + Oa >> 2] = Oa;
                        if (D != h[V + 20 >> 2]) {
                          var sb = Oa;
                          break;
                        }
                        h[V + 8 >> 2] = Oa;
                      }
                    }
                    break a;
                  } else {
                    h[Ka >> 2] = Za & -2, h[i + 1] = Q | 1, sb = h[Xa + Q >> 2] = Q;
                  }
                } while (0);
                if (sb < 256) {
                  var Lb = sb >>> 2 & 1073741822, Fb = (Lb << 2) + V + 40, ob = k[V >> 2], Bb = 1 << (sb >>> 3);
                  if ((ob & Bb) == 0) {
                    h[V >> 2] = ob | Bb;
                    var lb = Fb, tb = (Lb + 2 << 2) + V + 40;
                  } else {
                    var W = (Lb + 2 << 2) + V + 40, R = k[W >> 2];
                    R < k[V + 16 >> 2] ? (it(), oa("Reached an unreachable!")) : (lb = R, tb = W);
                  }
                  h[tb >> 2] = D;
                  h[lb + 12 >> 2] = D;
                  h[i + 2] = lb;
                  h[i + 3] = Fb;
                } else {
                  var Xb = D, Tb = sb >>> 8;
                  if (Tb == 0) {
                    var yb = 0;
                  } else {
                    if (sb > 16777215) {
                      yb = 31;
                    } else {
                      var Cb = Tb + 1048320 >>> 16 & 8, Ub = Tb << Cb, bc = Ub + 520192 >>> 16 & 4, Ja = Ub << bc, Mb = Ja + 245760 >>> 16 & 2, fa = 14 - (bc | Cb | Mb) + (Ja << Mb >>> 15), yb = sb >>> fa + 7 & 1 | fa << 1;
                    }
                  }
                  var ya = (yb << 2) + V + 304;
                  h[i + 7] = yb;
                  h[i + 5] = 0;
                  h[i + 4] = 0;
                  var zb = h[V + 4 >> 2], ta = 1 << yb, cc = (zb & ta) == 0;
                  c : do {
                    if (cc) {
                      h[V + 4 >> 2] = zb | ta, h[ya >> 2] = Xb, h[i + 6] = ya, h[i + 3] = D, h[i + 2] = D;
                    } else {
                      for (var gc = sb << (yb == 31 ? 0 : 25 - (yb >>> 1)), Pb = h[ya >> 2]; ; ) {
                        if ((h[Pb + 4 >> 2] & -8) == sb) {
                          var pc = Pb + 8, Vb = k[pc >> 2], wc = k[V + 16 >> 2], Xc = Pb < wc;
                          do {
                            if (!Xc && Vb >= wc) {
                              h[Vb + 12 >> 2] = Xb;
                              h[pc >> 2] = Xb;
                              h[i + 2] = Vb;
                              h[i + 3] = Pb;
                              h[i + 6] = 0;
                              break c;
                            }
                          } while (0);
                          it();
                          oa("Reached an unreachable!");
                        } else {
                          var nc = (gc >>> 31 << 2) + Pb + 16, uc = k[nc >> 2];
                          if (uc == 0) {
                            if (nc < k[V + 16 >> 2]) {
                              it(), oa("Reached an unreachable!");
                            } else {
                              h[nc >> 2] = Xb;
                              h[i + 6] = Pb;
                              h[i + 3] = D;
                              h[i + 2] = D;
                              break c;
                            }
                          } else {
                            gc <<= 1, Pb = uc;
                          }
                        }
                      }
                    }
                  } while (0);
                  var hc = h[V + 32 >> 2] - 1;
                  h[V + 32 >> 2] = hc;
                  if (hc != 0) {
                    break a;
                  }
                  var ic = h[V + 452 >> 2], yc = ic == 0;
                  c : do {
                    if (!yc) {
                      for (var Ab = ic; ; ) {
                        var hb = h[Ab + 8 >> 2];
                        if (hb == 0) {
                          break c;
                        } else {
                          Ab = hb;
                        }
                      }
                    }
                  } while (0);
                  h[V + 32 >> 2] = -1;
                }
                break a;
              }
            }
          }
        }
      } while (0);
      it();
      oa("Reached an unreachable!");
    }
  } while (0);
}

function Sp(c, d, e) {
  if (e >= 20 && d % 2 == c % 2) {
    if (d % 4 == c % 4) {
      for (e = d + e; d % 4; ) {
        a[c++] = a[d++];
      }
      d >>= 2;
      c >>= 2;
      for (var f = e >> 2; d < f; ) {
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
      for (f = e >> 1; d < f; ) {
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
  nt === wa && (nt = Date.now());
  return Math.floor((Date.now() - nt) * 1);
}

var nt, ot = 13, pt = 9, qt = 22, rt = 5, st = 21, tt = 6;

function ut(c) {
  mt || (mt = v([ 0 ], "i32", t));
  h[mt >> 2] = c;
}

var mt, vt = 0, mp = 0, wt = 0, xt = 2, pp = [ Ta ], yt = !0;

function zt(c, d) {
  if (typeof c !== "string") {
    return Ta;
  }
  d === wa && (d = "/");
  c && c[0] == "/" && (d = "");
  for (var e = (d + "/" + c).split("/").reverse(), f = [ "" ]; e.length; ) {
    var g = e.pop();
    g == "" || g == "." || (g == ".." ? f.length > 1 && f.pop() : f.push(g));
  }
  return f.length == 1 ? "/" : f.join("/");
}

function At(c, d, e) {
  var f = {
    Gc: !1,
    W: !1,
    error: 0,
    name: Ta,
    path: Ta,
    object: Ta,
    Ma: !1,
    Oa: Ta,
    Na: Ta
  }, c = zt(c);
  if (c == "/") {
    f.Gc = !0, f.W = f.Ma = !0, f.name = "/", f.path = f.Oa = "/", f.object = f.Na = Bt;
  } else {
    if (c !== Ta) {
      for (var e = e || 0, c = c.slice(1).split("/"), g = Bt, i = [ "" ]; c.length; ) {
        if (c.length == 1 && g.u) {
          f.Ma = !0, f.Oa = i.length == 1 ? "/" : i.join("/"), f.Na = g, f.name = c[0];
        }
        var j = c.shift();
        if (g.u) {
          if (g.Qa) {
            if (!g.k.hasOwnProperty(j)) {
              f.error = 2;
              break;
            }
          } else {
            f.error = ot;
            break;
          }
        } else {
          f.error = 20;
          break;
        }
        g = g.k[j];
        if (g.link && !(d && c.length == 0)) {
          if (e > 40) {
            f.error = 40;
            break;
          }
          f = zt(g.link, i.join("/"));
          return At([ f ].concat(c).join("/"), d, e + 1);
        }
        i.push(j);
        if (c.length == 0) {
          f.W = !0, f.path = i.join("/"), f.object = g;
        }
      }
    }
  }
  return f;
}

function Ct(c) {
  Dt();
  c = At(c, wa);
  return c.W ? c.object : (ut(c.error), Ta);
}

function Et(c, d, e, f, g) {
  c || (c = "/");
  typeof c === "string" && (c = Ct(c));
  c || (ut(ot), oa(Error("Parent path must exist.")));
  c.u || (ut(20), oa(Error("Parent must be a folder.")));
  !c.write && !yt && (ut(ot), oa(Error("Parent folder must be writeable.")));
  if (!d || d == "." || d == "..") {
    ut(2), oa(Error("Name must not be empty."));
  }
  c.k.hasOwnProperty(d) && (ut(17), oa(Error("Can't overwrite object.")));
  c.k[d] = {
    Qa: f === wa ? !0 : f,
    write: g === wa ? !1 : g,
    timestamp: Date.now(),
    Fc: xt++
  };
  for (var i in e) {
    e.hasOwnProperty(i) && (c.k[d][i] = e[i]);
  }
  return c.k[d];
}

function Ft(c, d) {
  return Et(c, d, {
    u: !0,
    L: !1,
    k: {}
  }, !0, !0);
}

function Gt() {
  var c = "dev/shm/tmp", d = Ct("/");
  d === Ta && oa(Error("Invalid parent."));
  for (c = c.split("/").reverse(); c.length; ) {
    var e = c.pop();
    e && (d.k.hasOwnProperty(e) || Ft(d, e), d = d.k[e]);
  }
}

function Ht(c, d, e, f) {
  !e && !f && oa(Error("A device must have at least one callback defined."));
  var g = {
    L: !0,
    input: e,
    v: f,
    u: !1
  };
  return Et(c, d, g, Boolean(e), Boolean(f));
}

function Dt() {
  Bt || (Bt = {
    Qa: !0,
    write: !0,
    u: !0,
    L: !1,
    timestamp: Date.now(),
    Fc: 1,
    k: {}
  });
}

function Fx() {
  var c, d, e;
  oe(!Qx, "FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)");
  Qx = !0;
  Dt();
  c || (c = (function() {
    if (!c.V || !c.V.length) {
      var d;
      typeof window != "undefined" && typeof window.prompt == "function" ? d = window.prompt("Input: ") : typeof readline == "function" && (d = readline());
      d || (d = "");
      c.V = Om(d + "\n", !0);
    }
    return c.V.shift();
  }));
  d || (d = (function(c) {
    c === Ta || c === "\n".charCodeAt(0) ? (d.Pa(d.buffer.join("")), d.buffer = []) : d.buffer.push(String.fromCharCode(c));
  }));
  if (!d.Pa) {
    d.Pa = print;
  }
  if (!d.buffer) {
    d.buffer = [];
  }
  e || (e = d);
  Ft("/", "tmp");
  var f = Ft("/", "dev"), g = Ht(f, "stdin", c), i = Ht(f, "stdout", Ta, d);
  e = Ht(f, "stderr", Ta, e);
  Ht(f, "tty", c, d);
  pp[1] = {
    path: "/dev/stdin",
    object: g,
    position: 0,
    La: !0,
    M: !1,
    Ka: !1,
    error: !1,
    Ia: !1,
    Ra: []
  };
  pp[2] = {
    path: "/dev/stdout",
    object: i,
    position: 0,
    La: !1,
    M: !0,
    Ka: !1,
    error: !1,
    Ia: !1,
    Ra: []
  };
  pp[3] = {
    path: "/dev/stderr",
    object: e,
    position: 0,
    La: !1,
    M: !0,
    Ka: !1,
    error: !1,
    Ia: !1,
    Ra: []
  };
  vt = v([ 1 ], "void*", t);
  mp = v([ 2 ], "void*", t);
  wt = v([ 3 ], "void*", t);
  Gt();
  pp[vt] = pp[1];
  pp[mp] = pp[2];
  pp[wt] = pp[3];
  v([ v([ 0, 0, 0, 0, vt, 0, 0, 0, mp, 0, 0, 0, wt, 0, 0, 0 ], "void*", t) ], "void*", t);
}

var Qx, Bt;

function op(c, d, e) {
  var f = pp[c];
  if (f) {
    if (f.M) {
      if (e < 0) {
        return ut(qt), -1;
      } else {
        if (f.object.L) {
          if (f.object.v) {
            for (var g = 0; g < e; g++) {
              try {
                f.object.v(a[d + g]);
              } catch (i) {
                return ut(rt), -1;
              }
            }
            f.object.timestamp = Date.now();
            return g;
          } else {
            return ut(tt), -1;
          }
        } else {
          g = f.position;
          c = pp[c];
          if (!c || c.object.L) {
            ut(pt), d = -1;
          } else {
            if (c.M) {
              if (c.object.u) {
                ut(st), d = -1;
              } else {
                if (e < 0 || g < 0) {
                  ut(qt), d = -1;
                } else {
                  for (var j = c.object.k; j.length < g; ) {
                    j.push(0);
                  }
                  for (var m = 0; m < e; m++) {
                    j[g + m] = Dh[d + m];
                  }
                  c.object.timestamp = Date.now();
                  d = m;
                }
              }
            } else {
              ut(ot), d = -1;
            }
          }
          d != -1 && (f.position += d);
          return d;
        }
      }
    } else {
      return ut(ot), -1;
    }
  } else {
    return ut(pt), -1;
  }
}

function vA(c) {
  function d(d) {
    var e;
    d === "double" ? e = l[c + f >> 2] : d == "i64" ? e = [ h[c + f >> 2], h[c + f + 4 >> 2] ] : (d = "i32", e = h[c + f >> 2]);
    f += Math.max(Zd(d), ke);
    return e;
  }
  for (var e = y.Ab, f = 0, g = [], i, j; ; ) {
    var m = e;
    i = a[e];
    if (i === 0) {
      break;
    }
    j = a[e + 1];
    if (i == "%".charCodeAt(0)) {
      var n = !1, o = !1, q = !1, p = !1;
      a : for (;;) {
        switch (j) {
         case "+".charCodeAt(0):
          n = !0;
          break;
         case "-".charCodeAt(0):
          o = !0;
          break;
         case "#".charCodeAt(0):
          q = !0;
          break;
         case "0".charCodeAt(0):
          if (p) {
            break a;
          } else {
            p = !0;
            break;
          }
         default:
          break a;
        }
        e++;
        j = a[e + 1];
      }
      var r = 0;
      if (j == "*".charCodeAt(0)) {
        r = d("i32"), e++, j = a[e + 1];
      } else {
        for (; j >= "0".charCodeAt(0) && j <= "9".charCodeAt(0); ) {
          r = r * 10 + (j - "0".charCodeAt(0)), e++, j = a[e + 1];
        }
      }
      var s = !1;
      if (j == ".".charCodeAt(0)) {
        var u = 0, s = !0;
        e++;
        j = a[e + 1];
        if (j == "*".charCodeAt(0)) {
          u = d("i32"), e++;
        } else {
          for (;;) {
            j = a[e + 1];
            if (j < "0".charCodeAt(0) || j > "9".charCodeAt(0)) {
              break;
            }
            u = u * 10 + (j - "0".charCodeAt(0));
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
        j == "h".charCodeAt(0) ? (e++, A = 1) : A = 2;
        break;
       case "l":
        j = a[e + 2];
        j == "l".charCodeAt(0) ? (e++, A = 8) : A = 4;
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
        A = Ta;
      }
      A && e++;
      j = a[e + 1];
      if ("d,i,u,o,x,X,p".split(",").indexOf(String.fromCharCode(j)) != -1) {
        m = j == "d".charCodeAt(0) || j == "i".charCodeAt(0);
        A = A || 4;
        i = d("i" + A * 8);
        A == 8 && (i = j == "u".charCodeAt(0) ? (i[0] >>> 0) + (i[1] >>> 0) * 4294967296 : (i[0] >>> 0) + (i[1] | 0) * 4294967296);
        A <= 4 && (i = (m ? Zm : Ym)(i & Math.pow(256, A) - 1, A * 8));
        var E = Math.abs(i), z, m = "";
        if (j == "d".charCodeAt(0) || j == "i".charCodeAt(0)) {
          z = Zm(i, 8 * A).toString(10);
        } else {
          if (j == "u".charCodeAt(0)) {
            z = Ym(i, 8 * A).toString(10), i = Math.abs(i);
          } else {
            if (j == "o".charCodeAt(0)) {
              z = (q ? "0" : "") + E.toString(8);
            } else {
              if (j == "x".charCodeAt(0) || j == "X".charCodeAt(0)) {
                m = q ? "0x" : "";
                if (i < 0) {
                  i = -i;
                  z = (E - 1).toString(16);
                  q = [];
                  for (E = 0; E < z.length; E++) {
                    q.push((15 - parseInt(z[E], 16)).toString(16));
                  }
                  for (z = q.join(""); z.length < A * 2; ) {
                    z = "f" + z;
                  }
                } else {
                  z = E.toString(16);
                }
                j == "X".charCodeAt(0) && (m = m.toUpperCase(), z = z.toUpperCase());
              } else {
                j == "p".charCodeAt(0) && (E === 0 ? z = "(nil)" : (m = "0x", z = E.toString(16)));
              }
            }
          }
        }
        if (s) {
          for (; z.length < u; ) {
            z = "0" + z;
          }
        }
        for (n && (m = i < 0 ? "-" + m : "+" + m); m.length + z.length < r; ) {
          o ? z += " " : p ? z = "0" + z : m = " " + m;
        }
        z = m + z;
        z.split("").forEach((function(c) {
          g.push(c.charCodeAt(0));
        }));
      } else {
        if ("f,F,e,E,g,G".split(",").indexOf(String.fromCharCode(j)) != -1) {
          i = d("double");
          if (isNaN(i)) {
            z = "nan", p = !1;
          } else {
            if (isFinite(i)) {
              s = !1;
              A = Math.min(u, 20);
              if (j == "g".charCodeAt(0) || j == "G".charCodeAt(0)) {
                s = !0, u = u || 1, A = parseInt(i.toExponential(A).split("e")[1], 10), u > A && A >= -4 ? (j = (j == "g".charCodeAt(0) ? "f" : "F").charCodeAt(0), u -= A + 1) : (j = (j == "g".charCodeAt(0) ? "e" : "E").charCodeAt(0), u--), A = Math.min(u, 20);
              }
              if (j == "e".charCodeAt(0) || j == "E".charCodeAt(0)) {
                z = i.toExponential(A), /[eE][-+]\d$/.test(z) && (z = z.slice(0, -1) + "0" + z.slice(-1));
              } else {
                if (j == "f".charCodeAt(0) || j == "F".charCodeAt(0)) {
                  z = i.toFixed(A);
                }
              }
              m = z.split("e");
              if (s && !q) {
                for (; m[0].length > 1 && m[0].indexOf(".") != -1 && (m[0].slice(-1) == "0" || m[0].slice(-1) == "."); ) {
                  m[0] = m[0].slice(0, -1);
                }
              } else {
                for (q && z.indexOf(".") == -1 && (m[0] += "."); u > A++; ) {
                  m[0] += "0";
                }
              }
              z = m[0] + (m.length > 1 ? "e" + m[1] : "");
              j == "E".charCodeAt(0) && (z = z.toUpperCase());
              n && i >= 0 && (z = "+" + z);
            } else {
              z = (i < 0 ? "-" : "") + "inf", p = !1;
            }
          }
          for (; z.length < r; ) {
            o ? z += " " : z = p && (z[0] == "-" || z[0] == "+") ? z[0] + "0" + z.slice(1) : (p ? "0" : " ") + z;
          }
          j < "a".charCodeAt(0) && (z = z.toUpperCase());
          z.split("").forEach((function(c) {
            g.push(c.charCodeAt(0));
          }));
        } else {
          if (j == "s".charCodeAt(0)) {
            (n = d("i8*")) ? (n = Xm(n), s && n.length > u && (n = n.slice(0, u))) : n = Om("(null)", !0);
            if (!o) {
              for (; n.length < r--; ) {
                g.push(" ".charCodeAt(0));
              }
            }
            g = g.concat(n);
            if (o) {
              for (; n.length < r--; ) {
                g.push(" ".charCodeAt(0));
              }
            }
          } else {
            if (j == "c".charCodeAt(0)) {
              for (o && g.push(d("i8")); --r > 0; ) {
                g.push(" ".charCodeAt(0));
              }
              o || g.push(d("i8"));
            } else {
              if (j == "n".charCodeAt(0)) {
                o = d("i32*"), h[o >> 2] = g.length;
              } else {
                if (j == "%".charCodeAt(0)) {
                  g.push(i);
                } else {
                  for (E = m; E < e + 2; E++) {
                    g.push(a[E]);
                  }
                }
              }
            }
          }
        }
      }
      e += 2;
    } else {
      g.push(i), e += 1;
    }
  }
  return g;
}

function lp(c) {
  var d = h[mp >> 2], e = vA(c), c = Yf;
  var f = v(e, "i8", uj), e = e.length * 1;
  if (e != 0 && op(d, f, e) == -1 && pp[d]) {
    pp[d].error = !0;
  }
  Yf = c;
}

var an = Math.sqrt;

function G(c, d, e, f) {
  oa("Assertion failed: " + Fk(f) + ", at: " + [ Fk(c), d, Fk(e) ]);
}

function xk(c, d) {
  var e = 0;
  if (d >= 20) {
    for (var f = c + d; c % 4; ) {
      a[c++] = e;
    }
    e < 0 && (e += 256);
    for (var g = c >> 2, i = f >> 2, j = e | e << 8 | e << 16 | e << 24; g < i; ) {
      h[g++] = j;
    }
    for (c = g << 2; c < f; ) {
      a[c++] = e;
    }
  } else {
    for (; d--; ) {
      a[c++] = e;
    }
  }
}

var Is = Math.sin, Js = Math.cos, dt = Math.floor;

function Xs(c) {
  var d = Ke(), e = Date.now();
  h[c + d[0] >> 2] = Math.floor(e / 1e3);
  h[c + d[1] >> 2] = Math.floor((e - 1e3 * Math.floor(e / 1e3)) * 1e3);
}

function it() {
  oa("ABORT: undefined, at " + Error().stack);
}

function kt() {
  switch (8) {
   case 8:
    return Vg;
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
  ut(qt);
  return -1;
}

function lt(c) {
  CA || (Tg = Math.ceil(Tg / Vg) * Vg, CA = !0);
  var d = Tg;
  c != 0 && og(c);
  return d;
}

var CA;

Tm.unshift({
  Ja: (function() {
    yt = !1;
    Qx || Fx();
  })
});

Um.push({
  Ja: (function() {
    Qx && (pp[2].object.v.buffer.length > 0 && pp[2].object.v("\n".charCodeAt(0)), pp[3].object.v.buffer.length > 0 && pp[3].object.v("\n".charCodeAt(0)));
  })
});

ut(0);

var np = v([ 0 ], "i8", t);

Module.Ec = (function(c) {
  function d() {
    for (var c = 0; c < 3; c++) {
      f.push(0);
    }
  }
  var e = c.length + 1, f = [ v(Om("/bin/this.program"), "i8", t) ];
  d();
  for (var g = 0; g < e - 1; g += 1) {
    f.push(v(Om(c[g]), "i8", t)), d();
  }
  f.push(0);
  f = v(f, "i32", t);
  return bn();
});

var DA, EA, Op, Pp, Qp, ct, gt, ht, et, ft, FA, Yn, GA, ip, HA, cn, dn, Tm = Tm.concat([]), en, fn, IA, JA, KA, LA, MA, NA, OA, PA, QA, RA, SA, Os, Ns, TA, UA, $F, aG, bG, cG, dG, eG, fG, V, jt;

y.Ab = v([ 37, 102, 10, 0 ], "i8", t);

y.cb = v([ 55, 98, 50, 83, 104, 97, 112, 101, 0 ], "i8", t);

EA = v(8, "*", t);

y.cc = v([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 108, 108, 105, 115, 105, 111, 110, 47, 98, 50, 67, 111, 108, 108, 105, 100, 101, 69, 100, 103, 101, 46, 99, 112, 112, 0 ], "i8", t);

y.hb = v([ 118, 111, 105, 100, 32, 98, 50, 67, 111, 108, 108, 105, 100, 101, 69, 100, 103, 101, 65, 110, 100, 67, 105, 114, 99, 108, 101, 40, 98, 50, 77, 97, 110, 105, 102, 111, 108, 100, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 69, 100, 103, 101, 83, 104, 97, 112, 101, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 67, 105, 114, 99, 108, 101, 83, 104, 97, 112, 101, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 41, 0 ], "i8", t);

y.Qb = v([ 100, 101, 110, 32, 62, 32, 48, 46, 48, 102, 0 ], "i8", t);

y.Ga = v([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 108, 108, 105, 115, 105, 111, 110, 47, 98, 50, 67, 111, 108, 108, 105, 100, 101, 80, 111, 108, 121, 103, 111, 110, 46, 99, 112, 112, 0 ], "i8", t);

y.jb = v([ 118, 111, 105, 100, 32, 98, 50, 70, 105, 110, 100, 73, 110, 99, 105, 100, 101, 110, 116, 69, 100, 103, 101, 40, 98, 50, 67, 108, 105, 112, 86, 101, 114, 116, 101, 120, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 80, 111, 108, 121, 103, 111, 110, 83, 104, 97, 112, 101, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 44, 32, 105, 110, 116, 51, 50, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 80, 111, 108, 121, 103, 111, 110, 83, 104, 97, 112, 101, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 41, 0 ], "i8", t);

y.ta = v([ 48, 32, 60, 61, 32, 101, 100, 103, 101, 49, 32, 38, 38, 32, 101, 100, 103, 101, 49, 32, 60, 32, 112, 111, 108, 121, 49, 45, 62, 109, 95, 118, 101, 114, 116, 101, 120, 67, 111, 117, 110, 116, 0 ], "i8", t);

y.ib = v([ 102, 108, 111, 97, 116, 51, 50, 32, 98, 50, 69, 100, 103, 101, 83, 101, 112, 97, 114, 97, 116, 105, 111, 110, 40, 99, 111, 110, 115, 116, 32, 98, 50, 80, 111, 108, 121, 103, 111, 110, 83, 104, 97, 112, 101, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 44, 32, 105, 110, 116, 51, 50, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 80, 111, 108, 121, 103, 111, 110, 83, 104, 97, 112, 101, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 41, 0 ], "i8", t);

Op = v(1, "i32", t);

Pp = v(1, "i32", t);

Qp = v(1, "i32", t);

y.g = v([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 108, 108, 105, 115, 105, 111, 110, 47, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 46, 99, 112, 112, 0 ], "i8", t);

y.aa = v([ 118, 111, 105, 100, 32, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 80, 114, 111, 120, 121, 58, 58, 83, 101, 116, 40, 99, 111, 110, 115, 116, 32, 98, 50, 83, 104, 97, 112, 101, 32, 42, 44, 32, 105, 110, 116, 51, 50, 41, 0 ], "i8", t);

y.Db = v([ 48, 32, 60, 61, 32, 105, 110, 100, 101, 120, 32, 38, 38, 32, 105, 110, 100, 101, 120, 32, 60, 32, 99, 104, 97, 105, 110, 45, 62, 109, 95, 99, 111, 117, 110, 116, 0 ], "i8", t);

y.fb = v([ 118, 111, 105, 100, 32, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 40, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 79, 117, 116, 112, 117, 116, 32, 42, 44, 32, 98, 50, 83, 105, 109, 112, 108, 101, 120, 67, 97, 99, 104, 101, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 73, 110, 112, 117, 116, 32, 42, 41, 0 ], "i8", t);

y.H = v([ 102, 108, 111, 97, 116, 51, 50, 32, 98, 50, 83, 105, 109, 112, 108, 101, 120, 58, 58, 71, 101, 116, 77, 101, 116, 114, 105, 99, 40, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", t);

y.pa = v([ 118, 111, 105, 100, 32, 98, 50, 83, 105, 109, 112, 108, 101, 120, 58, 58, 71, 101, 116, 87, 105, 116, 110, 101, 115, 115, 80, 111, 105, 110, 116, 115, 40, 98, 50, 86, 101, 99, 50, 32, 42, 44, 32, 98, 50, 86, 101, 99, 50, 32, 42, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", t);

y.b = v([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 108, 108, 105, 115, 105, 111, 110, 47, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 46, 104, 0 ], "i8", t);

y.a = v([ 99, 111, 110, 115, 116, 32, 98, 50, 86, 101, 99, 50, 32, 38, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 80, 114, 111, 120, 121, 58, 58, 71, 101, 116, 86, 101, 114, 116, 101, 120, 40, 105, 110, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", t);

y.c = v([ 48, 32, 60, 61, 32, 105, 110, 100, 101, 120, 32, 38, 38, 32, 105, 110, 100, 101, 120, 32, 60, 32, 109, 95, 99, 111, 117, 110, 116, 0 ], "i8", t);

y.zb = v([ 98, 50, 86, 101, 99, 50, 32, 98, 50, 83, 105, 109, 112, 108, 101, 120, 58, 58, 71, 101, 116, 83, 101, 97, 114, 99, 104, 68, 105, 114, 101, 99, 116, 105, 111, 110, 40, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", t);

y.G = v([ 98, 50, 86, 101, 99, 50, 32, 98, 50, 83, 105, 109, 112, 108, 101, 120, 58, 58, 71, 101, 116, 67, 108, 111, 115, 101, 115, 116, 80, 111, 105, 110, 116, 40, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", t);

y.ub = v([ 118, 111, 105, 100, 32, 98, 50, 83, 105, 109, 112, 108, 101, 120, 58, 58, 82, 101, 97, 100, 67, 97, 99, 104, 101, 40, 99, 111, 110, 115, 116, 32, 98, 50, 83, 105, 109, 112, 108, 101, 120, 67, 97, 99, 104, 101, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 80, 114, 111, 120, 121, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 80, 114, 111, 120, 121, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 41, 0 ], "i8", t);

y.pc = v([ 99, 97, 99, 104, 101, 45, 62, 99, 111, 117, 110, 116, 32, 60, 61, 32, 51, 0 ], "i8", t);

y.d = v([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 108, 108, 105, 115, 105, 111, 110, 47, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 46, 99, 112, 112, 0 ], "i8", t);

y.kb = v([ 105, 110, 116, 51, 50, 32, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 65, 108, 108, 111, 99, 97, 116, 101, 78, 111, 100, 101, 40, 41, 0 ], "i8", t);

y.Eb = v([ 109, 95, 110, 111, 100, 101, 67, 111, 117, 110, 116, 32, 61, 61, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", t);

y.D = v([ 118, 111, 105, 100, 32, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 70, 114, 101, 101, 78, 111, 100, 101, 40, 105, 110, 116, 51, 50, 41, 0 ], "i8", t);

y.va = v([ 48, 32, 60, 61, 32, 110, 111, 100, 101, 73, 100, 32, 38, 38, 32, 110, 111, 100, 101, 73, 100, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", t);

y.Ea = v([ 48, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 111, 117, 110, 116, 0 ], "i8", t);

y.qc = v([ 109, 95, 110, 111, 100, 101, 115, 91, 112, 114, 111, 120, 121, 73, 100, 93, 46, 73, 115, 76, 101, 97, 102, 40, 41, 0 ], "i8", t);

y.Y = v([ 98, 111, 111, 108, 32, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 77, 111, 118, 101, 80, 114, 111, 120, 121, 40, 105, 110, 116, 51, 50, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 65, 65, 66, 66, 32, 38, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 86, 101, 99, 50, 32, 38, 41, 0 ], "i8", t);

y.X = v([ 118, 111, 105, 100, 32, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 73, 110, 115, 101, 114, 116, 76, 101, 97, 102, 40, 105, 110, 116, 51, 50, 41, 0 ], "i8", t);

y.wc = v([ 99, 104, 105, 108, 100, 49, 32, 33, 61, 32, 40, 45, 49, 41, 0 ], "i8", t);

y.zc = v([ 99, 104, 105, 108, 100, 50, 32, 33, 61, 32, 40, 45, 49, 41, 0 ], "i8", t);

y.l = v([ 105, 110, 116, 51, 50, 32, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 66, 97, 108, 97, 110, 99, 101, 40, 105, 110, 116, 51, 50, 41, 0 ], "i8", t);

y.Bc = v([ 105, 65, 32, 33, 61, 32, 40, 45, 49, 41, 0 ], "i8", t);

y.Cc = v([ 48, 32, 60, 61, 32, 105, 66, 32, 38, 38, 32, 105, 66, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", t);

y.Bb = v([ 48, 32, 60, 61, 32, 105, 67, 32, 38, 38, 32, 105, 67, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", t);

y.Cb = v([ 48, 32, 60, 61, 32, 105, 70, 32, 38, 38, 32, 105, 70, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", t);

y.Ib = v([ 48, 32, 60, 61, 32, 105, 71, 32, 38, 38, 32, 105, 71, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", t);

y.Nb = v([ 109, 95, 110, 111, 100, 101, 115, 91, 67, 45, 62, 112, 97, 114, 101, 110, 116, 93, 46, 99, 104, 105, 108, 100, 50, 32, 61, 61, 32, 105, 65, 0 ], "i8", t);

y.Rb = v([ 48, 32, 60, 61, 32, 105, 68, 32, 38, 38, 32, 105, 68, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", t);

y.Sb = v([ 48, 32, 60, 61, 32, 105, 69, 32, 38, 38, 32, 105, 69, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", t);

y.Tb = v([ 109, 95, 110, 111, 100, 101, 115, 91, 66, 45, 62, 112, 97, 114, 101, 110, 116, 93, 46, 99, 104, 105, 108, 100, 50, 32, 61, 61, 32, 105, 65, 0 ], "i8", t);

ct = v(1, "i32", t);

gt = v(1, "i32", t);

ht = v(1, "i32", t);

et = v(1, "i32", t);

ft = v(1, "i32", t);

y.K = v([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 108, 108, 105, 115, 105, 111, 110, 47, 98, 50, 84, 105, 109, 101, 79, 102, 73, 109, 112, 97, 99, 116, 46, 99, 112, 112, 0 ], "i8", t);

y.gb = v([ 118, 111, 105, 100, 32, 98, 50, 84, 105, 109, 101, 79, 102, 73, 109, 112, 97, 99, 116, 40, 98, 50, 84, 79, 73, 79, 117, 116, 112, 117, 116, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 79, 73, 73, 110, 112, 117, 116, 32, 42, 41, 0 ], "i8", t);

y.Pb = v([ 116, 97, 114, 103, 101, 116, 32, 62, 32, 116, 111, 108, 101, 114, 97, 110, 99, 101, 0 ], "i8", t);

y.yb = v([ 102, 108, 111, 97, 116, 51, 50, 32, 98, 50, 83, 101, 112, 97, 114, 97, 116, 105, 111, 110, 70, 117, 110, 99, 116, 105, 111, 110, 58, 58, 69, 118, 97, 108, 117, 97, 116, 101, 40, 105, 110, 116, 51, 50, 44, 32, 105, 110, 116, 51, 50, 44, 32, 102, 108, 111, 97, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", t);

y.xb = v([ 102, 108, 111, 97, 116, 51, 50, 32, 98, 50, 83, 101, 112, 97, 114, 97, 116, 105, 111, 110, 70, 117, 110, 99, 116, 105, 111, 110, 58, 58, 70, 105, 110, 100, 77, 105, 110, 83, 101, 112, 97, 114, 97, 116, 105, 111, 110, 40, 105, 110, 116, 51, 50, 32, 42, 44, 32, 105, 110, 116, 51, 50, 32, 42, 44, 32, 102, 108, 111, 97, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", t);

y.ob = v([ 102, 108, 111, 97, 116, 51, 50, 32, 98, 50, 83, 101, 112, 97, 114, 97, 116, 105, 111, 110, 70, 117, 110, 99, 116, 105, 111, 110, 58, 58, 73, 110, 105, 116, 105, 97, 108, 105, 122, 101, 40, 99, 111, 110, 115, 116, 32, 98, 50, 83, 105, 109, 112, 108, 101, 120, 67, 97, 99, 104, 101, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 80, 114, 111, 120, 121, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 83, 119, 101, 101, 112, 32, 38, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 80, 114, 111, 120, 121, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 83, 119, 101, 101, 112, 32, 38, 44, 32, 102, 108, 111, 97, 116, 51, 50, 41, 0 ], "i8", t);

y.sc = v([ 48, 32, 60, 32, 99, 111, 117, 110, 116, 32, 38, 38, 32, 99, 111, 117, 110, 116, 32, 60, 32, 51, 0 ], "i8", t);

y.jc = v([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 108, 108, 105, 115, 105, 111, 110, 47, 83, 104, 97, 112, 101, 115, 47, 98, 50, 67, 104, 97, 105, 110, 83, 104, 97, 112, 101, 46, 99, 112, 112, 0 ], "i8", t);

y.vb = v([ 118, 111, 105, 100, 32, 98, 50, 67, 104, 97, 105, 110, 83, 104, 97, 112, 101, 58, 58, 71, 101, 116, 67, 104, 105, 108, 100, 69, 100, 103, 101, 40, 98, 50, 69, 100, 103, 101, 83, 104, 97, 112, 101, 32, 42, 44, 32, 105, 110, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", t);

y.kc = v([ 48, 32, 60, 61, 32, 105, 110, 100, 101, 120, 32, 38, 38, 32, 105, 110, 100, 101, 120, 32, 60, 32, 109, 95, 99, 111, 117, 110, 116, 32, 45, 32, 49, 0 ], "i8", t);

Yn = v([ 0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 0, 34, 0, 0, 0, 36, 0, 0, 0, 38, 0, 0, 0, 40, 0, 0, 0, 42, 0, 0, 0, 44, 0, 0, 0, 46, 0, 0, 0 ], [ "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0 ], t);

v(1, "void*", t);

y.Sa = v([ 49, 49, 98, 50, 69, 100, 103, 101, 83, 104, 97, 112, 101, 0 ], "i8", t);

GA = v(12, "*", t);

y.U = v([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 108, 108, 105, 115, 105, 111, 110, 47, 83, 104, 97, 112, 101, 115, 47, 98, 50, 80, 111, 108, 121, 103, 111, 110, 83, 104, 97, 112, 101, 46, 99, 112, 112, 0 ], "i8", t);

y.wb = v([ 118, 105, 114, 116, 117, 97, 108, 32, 98, 111, 111, 108, 32, 98, 50, 80, 111, 108, 121, 103, 111, 110, 83, 104, 97, 112, 101, 58, 58, 82, 97, 121, 67, 97, 115, 116, 40, 98, 50, 82, 97, 121, 67, 97, 115, 116, 79, 117, 116, 112, 117, 116, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 82, 97, 121, 67, 97, 115, 116, 73, 110, 112, 117, 116, 32, 38, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 44, 32, 105, 110, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", t);

y.fc = v([ 48, 46, 48, 102, 32, 60, 61, 32, 108, 111, 119, 101, 114, 32, 38, 38, 32, 108, 111, 119, 101, 114, 32, 60, 61, 32, 105, 110, 112, 117, 116, 46, 109, 97, 120, 70, 114, 97, 99, 116, 105, 111, 110, 0 ], "i8", t);

y.oa = v([ 118, 105, 114, 116, 117, 97, 108, 32, 118, 111, 105, 100, 32, 98, 50, 80, 111, 108, 121, 103, 111, 110, 83, 104, 97, 112, 101, 58, 58, 67, 111, 109, 112, 117, 116, 101, 77, 97, 115, 115, 40, 98, 50, 77, 97, 115, 115, 68, 97, 116, 97, 32, 42, 44, 32, 102, 108, 111, 97, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", t);

y.lc = v([ 109, 95, 118, 101, 114, 116, 101, 120, 67, 111, 117, 110, 116, 32, 62, 61, 32, 51, 0 ], "i8", t);

y.tc = v([ 97, 114, 101, 97, 32, 62, 32, 49, 46, 49, 57, 50, 48, 57, 50, 57, 48, 69, 45, 48, 55, 70, 0 ], "i8", t);

ip = v([ 0, 0, 0, 0, 0, 0, 0, 0, 48, 0, 0, 0, 50, 0, 0, 0, 52, 0, 0, 0, 54, 0, 0, 0, 56, 0, 0, 0, 58, 0, 0, 0, 60, 0, 0, 0, 62, 0, 0, 0 ], [ "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0 ], t);

v(1, "void*", t);

y.Ta = v([ 49, 52, 98, 50, 80, 111, 108, 121, 103, 111, 110, 83, 104, 97, 112, 101, 0 ], "i8", t);

HA = v(12, "*", t);

cn = v([ 16, 0, 0, 0, 32, 0, 0, 0, 64, 0, 0, 0, 96, 0, 0, 0, 128, 0, 0, 0, 160, 0, 0, 0, 192, 0, 0, 0, 224, 0, 0, 0, 256, 0, 0, 0, 320, 0, 0, 0, 384, 0, 0, 0, 448, 0, 0, 0, 512, 0, 0, 0, 640, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], t);

dn = v(641, "i8", t);

y.e = v([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 109, 109, 111, 110, 47, 98, 50, 66, 108, 111, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 46, 99, 112, 112, 0 ], "i8", t);

y.nb = v([ 98, 50, 66, 108, 111, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 58, 58, 98, 50, 66, 108, 111, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 40, 41, 0 ], "i8", t);

y.Ub = v([ 106, 32, 60, 32, 98, 50, 95, 98, 108, 111, 99, 107, 83, 105, 122, 101, 115, 0 ], "i8", t);

y.N = v([ 118, 111, 105, 100, 32, 42, 98, 50, 66, 108, 111, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 58, 58, 65, 108, 108, 111, 99, 97, 116, 101, 40, 105, 110, 116, 51, 50, 41, 0 ], "i8", t);

y.za = v([ 48, 32, 60, 32, 115, 105, 122, 101, 0 ], "i8", t);

y.i = v([ 48, 32, 60, 61, 32, 105, 110, 100, 101, 120, 32, 38, 38, 32, 105, 110, 100, 101, 120, 32, 60, 32, 98, 50, 95, 98, 108, 111, 99, 107, 83, 105, 122, 101, 115, 0 ], "i8", t);

y.mc = v([ 98, 108, 111, 99, 107, 67, 111, 117, 110, 116, 32, 42, 32, 98, 108, 111, 99, 107, 83, 105, 122, 101, 32, 60, 61, 32, 98, 50, 95, 99, 104, 117, 110, 107, 83, 105, 122, 101, 0 ], "i8", t);

y.h = v([ 118, 111, 105, 100, 32, 98, 50, 66, 108, 111, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 58, 58, 70, 114, 101, 101, 40, 118, 111, 105, 100, 32, 42, 44, 32, 105, 110, 116, 51, 50, 41, 0 ], "i8", t);

y.j = v([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 109, 109, 111, 110, 47, 98, 50, 83, 116, 97, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 46, 99, 112, 112, 0 ], "i8", t);

y.da = v([ 98, 50, 83, 116, 97, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 58, 58, 126, 98, 50, 83, 116, 97, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 40, 41, 0 ], "i8", t);

y.Vb = v([ 109, 95, 105, 110, 100, 101, 120, 32, 61, 61, 32, 48, 0 ], "i8", t);

y.ac = v([ 109, 95, 101, 110, 116, 114, 121, 67, 111, 117, 110, 116, 32, 61, 61, 32, 48, 0 ], "i8", t);

y.n = v([ 118, 111, 105, 100, 32, 42, 98, 50, 83, 116, 97, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 58, 58, 65, 108, 108, 111, 99, 97, 116, 101, 40, 105, 110, 116, 51, 50, 41, 0 ], "i8", t);

y.p = v([ 109, 95, 101, 110, 116, 114, 121, 67, 111, 117, 110, 116, 32, 60, 32, 98, 50, 95, 109, 97, 120, 83, 116, 97, 99, 107, 69, 110, 116, 114, 105, 101, 115, 0 ], "i8", t);

y.ca = v([ 118, 111, 105, 100, 32, 98, 50, 83, 116, 97, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 58, 58, 70, 114, 101, 101, 40, 118, 111, 105, 100, 32, 42, 41, 0 ], "i8", t);

y.nc = v([ 109, 95, 101, 110, 116, 114, 121, 67, 111, 117, 110, 116, 32, 62, 32, 48, 0 ], "i8", t);

y.uc = v([ 112, 32, 61, 61, 32, 101, 110, 116, 114, 121, 45, 62, 100, 97, 116, 97, 0 ], "i8", t);

y.m = v([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 98, 50, 66, 111, 100, 121, 46, 99, 112, 112, 0 ], "i8", t);

y.q = v([ 98, 50, 66, 111, 100, 121, 58, 58, 98, 50, 66, 111, 100, 121, 40, 99, 111, 110, 115, 116, 32, 98, 50, 66, 111, 100, 121, 68, 101, 102, 32, 42, 44, 32, 98, 50, 87, 111, 114, 108, 100, 32, 42, 41, 0 ], "i8", t);

y.Wb = v([ 98, 100, 45, 62, 112, 111, 115, 105, 116, 105, 111, 110, 46, 73, 115, 86, 97, 108, 105, 100, 40, 41, 0 ], "i8", t);

y.bc = v([ 98, 100, 45, 62, 108, 105, 110, 101, 97, 114, 86, 101, 108, 111, 99, 105, 116, 121, 46, 73, 115, 86, 97, 108, 105, 100, 40, 41, 0 ], "i8", t);

y.gc = v([ 98, 50, 73, 115, 86, 97, 108, 105, 100, 40, 98, 100, 45, 62, 97, 110, 103, 108, 101, 41, 0 ], "i8", t);

y.oc = v([ 98, 50, 73, 115, 86, 97, 108, 105, 100, 40, 98, 100, 45, 62, 97, 110, 103, 117, 108, 97, 114, 86, 101, 108, 111, 99, 105, 116, 121, 41, 0 ], "i8", t);

y.vc = v([ 98, 50, 73, 115, 86, 97, 108, 105, 100, 40, 98, 100, 45, 62, 97, 110, 103, 117, 108, 97, 114, 68, 97, 109, 112, 105, 110, 103, 41, 32, 38, 38, 32, 98, 100, 45, 62, 97, 110, 103, 117, 108, 97, 114, 68, 97, 109, 112, 105, 110, 103, 32, 62, 61, 32, 48, 46, 48, 102, 0 ], "i8", t);

y.yc = v([ 98, 50, 73, 115, 86, 97, 108, 105, 100, 40, 98, 100, 45, 62, 108, 105, 110, 101, 97, 114, 68, 97, 109, 112, 105, 110, 103, 41, 32, 38, 38, 32, 98, 100, 45, 62, 108, 105, 110, 101, 97, 114, 68, 97, 109, 112, 105, 110, 103, 32, 62, 61, 32, 48, 46, 48, 102, 0 ], "i8", t);

y.Ac = v([ 109, 95, 119, 111, 114, 108, 100, 45, 62, 73, 115, 76, 111, 99, 107, 101, 100, 40, 41, 32, 61, 61, 32, 102, 97, 108, 115, 101, 0 ], "i8", t);

y.qb = v([ 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 98, 50, 66, 111, 100, 121, 58, 58, 67, 114, 101, 97, 116, 101, 70, 105, 120, 116, 117, 114, 101, 40, 99, 111, 110, 115, 116, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 68, 101, 102, 32, 42, 41, 0 ], "i8", t);

y.ja = v([ 118, 111, 105, 100, 32, 98, 50, 66, 111, 100, 121, 58, 58, 82, 101, 115, 101, 116, 77, 97, 115, 115, 68, 97, 116, 97, 40, 41, 0 ], "i8", t);

y.Hb = v([ 109, 95, 116, 121, 112, 101, 32, 61, 61, 32, 98, 50, 95, 100, 121, 110, 97, 109, 105, 99, 66, 111, 100, 121, 0 ], "i8", t);

y.Mb = v([ 109, 95, 73, 32, 62, 32, 48, 46, 48, 102, 0 ], "i8", t);

en = v(4, "*", t);

fn = v(4, "*", t);

y.na = v([ 118, 111, 105, 100, 32, 42, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 71, 101, 116, 85, 115, 101, 114, 68, 97, 116, 97, 40, 105, 110, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", t);

y.s = v([ 48, 32, 60, 61, 32, 112, 114, 111, 120, 121, 73, 100, 32, 38, 38, 32, 112, 114, 111, 120, 121, 73, 100, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", t);

y.R = v([ 99, 111, 110, 115, 116, 32, 98, 50, 65, 65, 66, 66, 32, 38, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 71, 101, 116, 70, 97, 116, 65, 65, 66, 66, 40, 105, 110, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", t);

IA = v([ 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 66, 0, 0, 0, 68, 0, 0, 0, 70, 0, 0, 0, 72, 0, 0, 0, 74, 0, 0, 0 ], [ "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0 ], t);

v(1, "void*", t);

y.Xa = v([ 49, 55, 98, 50, 67, 111, 110, 116, 97, 99, 116, 76, 105, 115, 116, 101, 110, 101, 114, 0 ], "i8", t);

JA = v(8, "*", t);

y.Ob = v([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 98, 50, 70, 105, 120, 116, 117, 114, 101, 46, 99, 112, 112, 0 ], "i8", t);

y.tb = v([ 118, 111, 105, 100, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 58, 58, 68, 101, 115, 116, 114, 111, 121, 40, 98, 50, 66, 108, 111, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 32, 42, 41, 0 ], "i8", t);

y.ua = v([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 98, 50, 73, 115, 108, 97, 110, 100, 46, 99, 112, 112, 0 ], "i8", t);

y.la = v([ 118, 111, 105, 100, 32, 98, 50, 73, 115, 108, 97, 110, 100, 58, 58, 83, 111, 108, 118, 101, 84, 79, 73, 40, 99, 111, 110, 115, 116, 32, 98, 50, 84, 105, 109, 101, 83, 116, 101, 112, 32, 38, 44, 32, 105, 110, 116, 51, 50, 44, 32, 105, 110, 116, 51, 50, 41, 0 ], "i8", t);

y.Fb = v([ 116, 111, 105, 73, 110, 100, 101, 120, 65, 32, 60, 32, 109, 95, 98, 111, 100, 121, 67, 111, 117, 110, 116, 0 ], "i8", t);

y.Xb = v([ 116, 111, 105, 73, 110, 100, 101, 120, 66, 32, 60, 32, 109, 95, 98, 111, 100, 121, 67, 111, 117, 110, 116, 0 ], "i8", t);

y.r = v([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 98, 50, 87, 111, 114, 108, 100, 46, 99, 112, 112, 0 ], "i8", t);

y.rb = v([ 98, 50, 66, 111, 100, 121, 32, 42, 98, 50, 87, 111, 114, 108, 100, 58, 58, 67, 114, 101, 97, 116, 101, 66, 111, 100, 121, 40, 99, 111, 110, 115, 116, 32, 98, 50, 66, 111, 100, 121, 68, 101, 102, 32, 42, 41, 0 ], "i8", t);

y.Gb = v([ 73, 115, 76, 111, 99, 107, 101, 100, 40, 41, 32, 61, 61, 32, 102, 97, 108, 115, 101, 0 ], "i8", t);

y.O = v([ 118, 111, 105, 100, 32, 98, 50, 87, 111, 114, 108, 100, 58, 58, 83, 111, 108, 118, 101, 40, 99, 111, 110, 115, 116, 32, 98, 50, 84, 105, 109, 101, 83, 116, 101, 112, 32, 38, 41, 0 ], "i8", t);

y.hc = v([ 98, 45, 62, 73, 115, 65, 99, 116, 105, 118, 101, 40, 41, 32, 61, 61, 32, 116, 114, 117, 101, 0 ], "i8", t);

y.Ha = v([ 115, 116, 97, 99, 107, 67, 111, 117, 110, 116, 32, 60, 32, 115, 116, 97, 99, 107, 83, 105, 122, 101, 0 ], "i8", t);

y.ka = v([ 118, 111, 105, 100, 32, 98, 50, 87, 111, 114, 108, 100, 58, 58, 83, 111, 108, 118, 101, 84, 79, 73, 40, 99, 111, 110, 115, 116, 32, 98, 50, 84, 105, 109, 101, 83, 116, 101, 112, 32, 38, 41, 0 ], "i8", t);

y.xc = v([ 116, 121, 112, 101, 65, 32, 61, 61, 32, 98, 50, 95, 100, 121, 110, 97, 109, 105, 99, 66, 111, 100, 121, 32, 124, 124, 32, 116, 121, 112, 101, 66, 32, 61, 61, 32, 98, 50, 95, 100, 121, 110, 97, 109, 105, 99, 66, 111, 100, 121, 0 ], "i8", t);

y.t = v([ 97, 108, 112, 104, 97, 48, 32, 60, 32, 49, 46, 48, 102, 0 ], "i8", t);

y.z = v([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 108, 108, 105, 115, 105, 111, 110, 47, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 46, 104, 0 ], "i8", t);

y.B = v([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 109, 109, 111, 110, 47, 98, 50, 77, 97, 116, 104, 46, 104, 0 ], "i8", t);

y.w = v([ 118, 111, 105, 100, 32, 98, 50, 83, 119, 101, 101, 112, 58, 58, 65, 100, 118, 97, 110, 99, 101, 40, 102, 108, 111, 97, 116, 51, 50, 41, 0 ], "i8", t);

y.o = v([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 98, 50, 73, 115, 108, 97, 110, 100, 46, 104, 0 ], "i8", t);

y.sb = v([ 118, 111, 105, 100, 32, 98, 50, 73, 115, 108, 97, 110, 100, 58, 58, 65, 100, 100, 40, 98, 50, 74, 111, 105, 110, 116, 32, 42, 41, 0 ], "i8", t);

y.$b = v([ 109, 95, 106, 111, 105, 110, 116, 67, 111, 117, 110, 116, 32, 60, 32, 109, 95, 106, 111, 105, 110, 116, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", t);

y.P = v([ 118, 111, 105, 100, 32, 98, 50, 73, 115, 108, 97, 110, 100, 58, 58, 65, 100, 100, 40, 98, 50, 67, 111, 110, 116, 97, 99, 116, 32, 42, 41, 0 ], "i8", t);

y.T = v([ 109, 95, 99, 111, 110, 116, 97, 99, 116, 67, 111, 117, 110, 116, 32, 60, 32, 109, 95, 99, 111, 110, 116, 97, 99, 116, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", t);

y.F = v([ 118, 111, 105, 100, 32, 98, 50, 73, 115, 108, 97, 110, 100, 58, 58, 65, 100, 100, 40, 98, 50, 66, 111, 100, 121, 32, 42, 41, 0 ], "i8", t);

y.J = v([ 109, 95, 98, 111, 100, 121, 67, 111, 117, 110, 116, 32, 60, 32, 109, 95, 98, 111, 100, 121, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", t);

KA = v([ 0, 0, 0, 0, 0, 0, 0, 0, 76, 0, 0, 0, 78, 0, 0, 0, 80, 0, 0, 0 ], [ "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0 ], t);

v(1, "void*", t);

y.Va = v([ 49, 53, 98, 50, 67, 111, 110, 116, 97, 99, 116, 70, 105, 108, 116, 101, 114, 0 ], "i8", t);

LA = v(8, "*", t);

MA = v([ 0, 0, 0, 0, 0, 0, 0, 0, 82, 0, 0, 0, 84, 0, 0, 0, 86, 0, 0, 0 ], [ "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0 ], t);

v(1, "void*", t);

y.wa = v([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 67, 111, 110, 116, 97, 99, 116, 115, 47, 98, 50, 67, 104, 97, 105, 110, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 46, 99, 112, 112, 0 ], "i8", t);

y.fa = v([ 98, 50, 67, 104, 97, 105, 110, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 58, 58, 98, 50, 67, 104, 97, 105, 110, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 40, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 105, 110, 116, 51, 50, 44, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 105, 110, 116, 51, 50, 41, 0 ], "i8", t);

y.Za = v([ 50, 51, 98, 50, 67, 104, 97, 105, 110, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 0 ], "i8", t);

y.eb = v([ 57, 98, 50, 67, 111, 110, 116, 97, 99, 116, 0 ], "i8", t);

NA = v(8, "*", t);

OA = v(12, "*", t);

PA = v([ 0, 0, 0, 0, 0, 0, 0, 0, 88, 0, 0, 0, 90, 0, 0, 0, 92, 0, 0, 0 ], [ "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0 ], t);

v(1, "void*", t);

y.xa = v([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 67, 111, 110, 116, 97, 99, 116, 115, 47, 98, 50, 67, 104, 97, 105, 110, 65, 110, 100, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 46, 99, 112, 112, 0 ], "i8", t);

y.ha = v([ 98, 50, 67, 104, 97, 105, 110, 65, 110, 100, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 58, 58, 98, 50, 67, 104, 97, 105, 110, 65, 110, 100, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 40, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 105, 110, 116, 51, 50, 44, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 105, 110, 116, 51, 50, 41, 0 ], "i8", t);

y.qa = v([ 109, 95, 102, 105, 120, 116, 117, 114, 101, 65, 45, 62, 71, 101, 116, 84, 121, 112, 101, 40, 41, 32, 61, 61, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 101, 95, 99, 104, 97, 105, 110, 0 ], "i8", t);

y.ab = v([ 50, 52, 98, 50, 67, 104, 97, 105, 110, 65, 110, 100, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 0 ], "i8", t);

QA = v(12, "*", t);

RA = v([ 0, 0, 0, 0, 0, 0, 0, 0, 94, 0, 0, 0, 96, 0, 0, 0, 98, 0, 0, 0 ], [ "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0 ], t);

v(1, "void*", t);

y.ya = v([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 67, 111, 110, 116, 97, 99, 116, 115, 47, 98, 50, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 46, 99, 112, 112, 0 ], "i8", t);

y.Z = v([ 98, 50, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 58, 58, 98, 50, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 40, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 41, 0 ], "i8", t);

y.Jb = v([ 109, 95, 102, 105, 120, 116, 117, 114, 101, 65, 45, 62, 71, 101, 116, 84, 121, 112, 101, 40, 41, 32, 61, 61, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 101, 95, 99, 105, 114, 99, 108, 101, 0 ], "i8", t);

y.Ua = v([ 49, 53, 98, 50, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 0 ], "i8", t);

SA = v(12, "*", t);

Os = v(192, [ "*", 0, 0, 0, "*", 0, 0, 0, "i8", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i8", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i8", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i8", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i8", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i8", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i8", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i8", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i8", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i8", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i8", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i8", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i8", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i8", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i8", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i8", 0, 0, 0 ], t);

Ns = v(1, "i1", t);

y.A = v([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 67, 111, 110, 116, 97, 99, 116, 115, 47, 98, 50, 67, 111, 110, 116, 97, 99, 116, 46, 99, 112, 112, 0 ], "i8", t);

y.Kb = v([ 48, 32, 60, 61, 32, 116, 121, 112, 101, 49, 32, 38, 38, 32, 116, 121, 112, 101, 49, 32, 60, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 101, 95, 116, 121, 112, 101, 67, 111, 117, 110, 116, 0 ], "i8", t);

y.Yb = v([ 48, 32, 60, 61, 32, 116, 121, 112, 101, 50, 32, 38, 38, 32, 116, 121, 112, 101, 50, 32, 60, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 101, 95, 116, 121, 112, 101, 67, 111, 117, 110, 116, 0 ], "i8", t);

y.ma = v([ 115, 116, 97, 116, 105, 99, 32, 98, 50, 67, 111, 110, 116, 97, 99, 116, 32, 42, 98, 50, 67, 111, 110, 116, 97, 99, 116, 58, 58, 67, 114, 101, 97, 116, 101, 40, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 105, 110, 116, 51, 50, 44, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 105, 110, 116, 51, 50, 44, 32, 98, 50, 66, 108, 111, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 32, 42, 41, 0 ], "i8", t);

y.Q = v([ 115, 116, 97, 116, 105, 99, 32, 118, 111, 105, 100, 32, 98, 50, 67, 111, 110, 116, 97, 99, 116, 58, 58, 68, 101, 115, 116, 114, 111, 121, 40, 98, 50, 67, 111, 110, 116, 97, 99, 116, 32, 42, 44, 32, 98, 50, 66, 108, 111, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 32, 42, 41, 0 ], "i8", t);

y.dc = v([ 115, 95, 105, 110, 105, 116, 105, 97, 108, 105, 122, 101, 100, 32, 61, 61, 32, 116, 114, 117, 101, 0 ], "i8", t);

y.Fa = v([ 48, 32, 60, 61, 32, 116, 121, 112, 101, 65, 32, 38, 38, 32, 116, 121, 112, 101, 66, 32, 60, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 101, 95, 116, 121, 112, 101, 67, 111, 117, 110, 116, 0 ], "i8", t);

TA = v([ 0, 0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 102, 0, 0, 0, 104, 0, 0, 0 ], [ "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0 ], t);

v(1, "void*", t);

y.C = v([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 67, 111, 110, 116, 97, 99, 116, 115, 47, 98, 50, 67, 111, 110, 116, 97, 99, 116, 83, 111, 108, 118, 101, 114, 46, 99, 112, 112, 0 ], "i8", t);

y.mb = v([ 98, 50, 67, 111, 110, 116, 97, 99, 116, 83, 111, 108, 118, 101, 114, 58, 58, 98, 50, 67, 111, 110, 116, 97, 99, 116, 83, 111, 108, 118, 101, 114, 40, 98, 50, 67, 111, 110, 116, 97, 99, 116, 83, 111, 108, 118, 101, 114, 68, 101, 102, 32, 42, 41, 0 ], "i8", t);

y.Lb = v([ 112, 111, 105, 110, 116, 67, 111, 117, 110, 116, 32, 62, 32, 48, 0 ], "i8", t);

y.lb = v([ 118, 111, 105, 100, 32, 98, 50, 67, 111, 110, 116, 97, 99, 116, 83, 111, 108, 118, 101, 114, 58, 58, 73, 110, 105, 116, 105, 97, 108, 105, 122, 101, 86, 101, 108, 111, 99, 105, 116, 121, 67, 111, 110, 115, 116, 114, 97, 105, 110, 116, 115, 40, 41, 0 ], "i8", t);

y.Zb = v([ 109, 97, 110, 105, 102, 111, 108, 100, 45, 62, 112, 111, 105, 110, 116, 67, 111, 117, 110, 116, 32, 62, 32, 48, 0 ], "i8", t);

y.$ = v([ 118, 111, 105, 100, 32, 98, 50, 67, 111, 110, 116, 97, 99, 116, 83, 111, 108, 118, 101, 114, 58, 58, 83, 111, 108, 118, 101, 86, 101, 108, 111, 99, 105, 116, 121, 67, 111, 110, 115, 116, 114, 97, 105, 110, 116, 115, 40, 41, 0 ], "i8", t);

y.ec = v([ 112, 111, 105, 110, 116, 67, 111, 117, 110, 116, 32, 61, 61, 32, 49, 32, 124, 124, 32, 112, 111, 105, 110, 116, 67, 111, 117, 110, 116, 32, 61, 61, 32, 50, 0 ], "i8", t);

y.ic = v([ 97, 46, 120, 32, 62, 61, 32, 48, 46, 48, 102, 32, 38, 38, 32, 97, 46, 121, 32, 62, 61, 32, 48, 46, 48, 102, 0 ], "i8", t);

y.pb = v([ 118, 111, 105, 100, 32, 98, 50, 80, 111, 115, 105, 116, 105, 111, 110, 83, 111, 108, 118, 101, 114, 77, 97, 110, 105, 102, 111, 108, 100, 58, 58, 73, 110, 105, 116, 105, 97, 108, 105, 122, 101, 40, 98, 50, 67, 111, 110, 116, 97, 99, 116, 80, 111, 115, 105, 116, 105, 111, 110, 67, 111, 110, 115, 116, 114, 97, 105, 110, 116, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 44, 32, 105, 110, 116, 51, 50, 41, 0 ], "i8", t);

y.rc = v([ 112, 99, 45, 62, 112, 111, 105, 110, 116, 67, 111, 117, 110, 116, 32, 62, 32, 48, 0 ], "i8", t);

UA = v([ 0, 0, 0, 0, 0, 0, 0, 0, 106, 0, 0, 0, 108, 0, 0, 0, 110, 0, 0, 0 ], [ "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0 ], t);

v(1, "void*", t);

y.Aa = v([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 67, 111, 110, 116, 97, 99, 116, 115, 47, 98, 50, 69, 100, 103, 101, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 46, 99, 112, 112, 0 ], "i8", t);

y.ea = v([ 98, 50, 69, 100, 103, 101, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 58, 58, 98, 50, 69, 100, 103, 101, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 40, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 41, 0 ], "i8", t);

y.Ya = v([ 50, 50, 98, 50, 69, 100, 103, 101, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 0 ], "i8", t);

$F = v(12, "*", t);

aG = v([ 0, 0, 0, 0, 0, 0, 0, 0, 112, 0, 0, 0, 114, 0, 0, 0, 116, 0, 0, 0 ], [ "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0 ], t);

v(1, "void*", t);

y.Ba = v([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 67, 111, 110, 116, 97, 99, 116, 115, 47, 98, 50, 69, 100, 103, 101, 65, 110, 100, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 46, 99, 112, 112, 0 ], "i8", t);

y.ga = v([ 98, 50, 69, 100, 103, 101, 65, 110, 100, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 58, 58, 98, 50, 69, 100, 103, 101, 65, 110, 100, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 40, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 41, 0 ], "i8", t);

y.ra = v([ 109, 95, 102, 105, 120, 116, 117, 114, 101, 65, 45, 62, 71, 101, 116, 84, 121, 112, 101, 40, 41, 32, 61, 61, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 101, 95, 101, 100, 103, 101, 0 ], "i8", t);

y.$a = v([ 50, 51, 98, 50, 69, 100, 103, 101, 65, 110, 100, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 0 ], "i8", t);

bG = v(12, "*", t);

cG = v([ 0, 0, 0, 0, 0, 0, 0, 0, 118, 0, 0, 0, 120, 0, 0, 0, 122, 0, 0, 0 ], [ "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0 ], t);

v(1, "void*", t);

y.Ca = v([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 67, 111, 110, 116, 97, 99, 116, 115, 47, 98, 50, 80, 111, 108, 121, 103, 111, 110, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 46, 99, 112, 112, 0 ], "i8", t);

y.ia = v([ 98, 50, 80, 111, 108, 121, 103, 111, 110, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 58, 58, 98, 50, 80, 111, 108, 121, 103, 111, 110, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 40, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 41, 0 ], "i8", t);

y.I = v([ 109, 95, 102, 105, 120, 116, 117, 114, 101, 66, 45, 62, 71, 101, 116, 84, 121, 112, 101, 40, 41, 32, 61, 61, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 101, 95, 99, 105, 114, 99, 108, 101, 0 ], "i8", t);

y.bb = v([ 50, 53, 98, 50, 80, 111, 108, 121, 103, 111, 110, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 0 ], "i8", t);

dG = v(12, "*", t);

eG = v([ 0, 0, 0, 0, 0, 0, 0, 0, 124, 0, 0, 0, 126, 0, 0, 0, 128, 0, 0, 0 ], [ "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0 ], t);

v(1, "void*", t);

y.Da = v([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 67, 111, 110, 116, 97, 99, 116, 115, 47, 98, 50, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 46, 99, 112, 112, 0 ], "i8", t);

y.ba = v([ 98, 50, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 58, 58, 98, 50, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 40, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 41, 0 ], "i8", t);

y.sa = v([ 109, 95, 102, 105, 120, 116, 117, 114, 101, 65, 45, 62, 71, 101, 116, 84, 121, 112, 101, 40, 41, 32, 61, 61, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 101, 95, 112, 111, 108, 121, 103, 111, 110, 0 ], "i8", t);

y.S = v([ 109, 95, 102, 105, 120, 116, 117, 114, 101, 66, 45, 62, 71, 101, 116, 84, 121, 112, 101, 40, 41, 32, 61, 61, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 101, 95, 112, 111, 108, 121, 103, 111, 110, 0 ], "i8", t);

y.Wa = v([ 49, 54, 98, 50, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 0 ], "i8", t);

fG = v(12, "*", t);

y.f = v([ 102, 97, 108, 115, 101, 0 ], "i8", t);

V = v(468, [ "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0 ], t);

jt = v(24, "i32", t);

DA = v([ 1, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, 0 ], t);

h[EA >> 2] = DA + 8;

h[EA + 4 >> 2] = y.cb;

FA = v([ 2, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, 0 ], t);

h[Yn + 4 >> 2] = GA;

h[GA >> 2] = FA + 8;

h[GA + 4 >> 2] = y.Sa;

h[GA + 8 >> 2] = EA;

h[ip + 4 >> 2] = HA;

h[HA >> 2] = FA + 8;

h[HA + 4 >> 2] = y.Ta;

h[HA + 8 >> 2] = EA;

h[en >> 2] = KA + 8;

h[fn >> 2] = IA + 8;

h[IA + 4 >> 2] = JA;

h[JA >> 2] = DA + 8;

h[JA + 4 >> 2] = y.Xa;

h[KA + 4 >> 2] = LA;

h[LA >> 2] = DA + 8;

h[LA + 4 >> 2] = y.Va;

h[MA + 4 >> 2] = OA;

h[NA >> 2] = DA + 8;

h[NA + 4 >> 2] = y.eb;

h[OA >> 2] = FA + 8;

h[OA + 4 >> 2] = y.Za;

h[OA + 8 >> 2] = NA;

h[PA + 4 >> 2] = QA;

h[QA >> 2] = FA + 8;

h[QA + 4 >> 2] = y.ab;

h[QA + 8 >> 2] = NA;

h[RA + 4 >> 2] = SA;

h[SA >> 2] = FA + 8;

h[SA + 4 >> 2] = y.Ua;

h[SA + 8 >> 2] = NA;

h[TA + 4 >> 2] = NA;

h[UA + 4 >> 2] = $F;

h[$F >> 2] = FA + 8;

h[$F + 4 >> 2] = y.Ya;

h[$F + 8 >> 2] = NA;

h[aG + 4 >> 2] = bG;

h[bG >> 2] = FA + 8;

h[bG + 4 >> 2] = y.$a;

h[bG + 8 >> 2] = NA;

h[cG + 4 >> 2] = dG;

h[dG >> 2] = FA + 8;

h[dG + 4 >> 2] = y.bb;

h[dG + 8 >> 2] = NA;

h[eG + 4 >> 2] = fG;

h[fG >> 2] = FA + 8;

h[fG + 4 >> 2] = y.Wa;

h[fG + 8 >> 2] = NA;

im = [ 0, 0, (function(c, d) {
  var e = h[c >> 2], f = h[d >> 2];
  return e < f ? 1 : e != f ? 0 : h[c + 4 >> 2] < h[d + 4 >> 2];
}), 0, (function(c, d, e, f, g) {
  d = gn(g, 144);
  f = d >> 2;
  if (d == 0) {
    c = 0;
  } else {
    h[d >> 2] = TA + 8;
    h[f + 1] = 4;
    h[f + 12] = c;
    g = d + 52;
    h[g >> 2] = e;
    h[f + 14] = 0;
    h[f + 15] = 0;
    h[f + 31] = 0;
    h[f + 32] = 0;
    for (var i = d + 8 >> 2, j = i + 10; i < j; i++) {
      h[i] = 0;
    }
    i = an(l[c + 16 >> 2] * l[e + 16 >> 2]);
    l[f + 34] = i;
    i = l[c + 20 >> 2];
    j = l[e + 20 >> 2];
    l[f + 35] = i > j ? i : j;
    h[d >> 2] = RA + 8;
    h[h[c + 12 >> 2] + 4 >> 2] == 0 ? c = e : (G(y.ya, 44, y.Z, y.Jb), c = h[g >> 2]);
    h[h[c + 12 >> 2] + 4 >> 2] != 0 && G(y.ya, 45, y.Z, y.I);
    c = d;
  }
  return c;
}), 0, (function(c, d) {
  im[h[h[c >> 2] + 4 >> 2]](c);
  var e = Dh[dn + 144];
  e < 14 || G(y.e, 173, y.h, y.i);
  e = (e << 2) + d + 12;
  h[c >> 2] = h[e >> 2];
  h[e >> 2] = c;
}), 0, (function(c, d, e, f, g) {
  d = gn(g, 144);
  f = d >> 2;
  if (d == 0) {
    c = 0;
  } else {
    h[d >> 2] = TA + 8;
    h[f + 1] = 4;
    h[f + 12] = c;
    g = d + 52;
    h[g >> 2] = e;
    h[f + 14] = 0;
    h[f + 15] = 0;
    h[f + 31] = 0;
    h[f + 32] = 0;
    for (var i = d + 8 >> 2, j = i + 10; i < j; i++) {
      h[i] = 0;
    }
    i = an(l[c + 16 >> 2] * l[e + 16 >> 2]);
    l[f + 34] = i;
    i = l[c + 20 >> 2];
    j = l[e + 20 >> 2];
    l[f + 35] = i > j ? i : j;
    h[d >> 2] = cG + 8;
    h[h[c + 12 >> 2] + 4 >> 2] == 2 ? c = e : (G(y.Ca, 41, y.ia, y.sa), c = h[g >> 2]);
    h[h[c + 12 >> 2] + 4 >> 2] != 0 && G(y.Ca, 42, y.ia, y.I);
    c = d;
  }
  return c;
}), 0, (function(c, d) {
  im[h[h[c >> 2] + 4 >> 2]](c);
  var e = Dh[dn + 144];
  e < 14 || G(y.e, 173, y.h, y.i);
  e = (e << 2) + d + 12;
  h[c >> 2] = h[e >> 2];
  h[e >> 2] = c;
}), 0, (function(c, d, e, f, g) {
  d = gn(g, 144);
  f = d >> 2;
  if (d == 0) {
    c = 0;
  } else {
    h[d >> 2] = TA + 8;
    h[f + 1] = 4;
    h[f + 12] = c;
    g = d + 52;
    h[g >> 2] = e;
    h[f + 14] = 0;
    h[f + 15] = 0;
    h[f + 31] = 0;
    h[f + 32] = 0;
    for (var i = d + 8 >> 2, j = i + 10; i < j; i++) {
      h[i] = 0;
    }
    i = an(l[c + 16 >> 2] * l[e + 16 >> 2]);
    l[f + 34] = i;
    i = l[c + 20 >> 2];
    j = l[e + 20 >> 2];
    l[f + 35] = i > j ? i : j;
    h[d >> 2] = eG + 8;
    h[h[c + 12 >> 2] + 4 >> 2] == 2 ? c = e : (G(y.Da, 44, y.ba, y.sa), c = h[g >> 2]);
    h[h[c + 12 >> 2] + 4 >> 2] != 2 && G(y.Da, 45, y.ba, y.S);
    c = d;
  }
  return c;
}), 0, (function(c, d) {
  im[h[h[c >> 2] + 4 >> 2]](c);
  var e = Dh[dn + 144];
  e < 14 || G(y.e, 173, y.h, y.i);
  e = (e << 2) + d + 12;
  h[c >> 2] = h[e >> 2];
  h[e >> 2] = c;
}), 0, (function(c, d, e, f, g) {
  d = gn(g, 144);
  f = d >> 2;
  if (d == 0) {
    c = 0;
  } else {
    h[d >> 2] = TA + 8;
    h[f + 1] = 4;
    h[f + 12] = c;
    g = d + 52;
    h[g >> 2] = e;
    h[f + 14] = 0;
    h[f + 15] = 0;
    h[f + 31] = 0;
    h[f + 32] = 0;
    for (var i = d + 8 >> 2, j = i + 10; i < j; i++) {
      h[i] = 0;
    }
    i = an(l[c + 16 >> 2] * l[e + 16 >> 2]);
    l[f + 34] = i;
    i = l[c + 20 >> 2];
    j = l[e + 20 >> 2];
    l[f + 35] = i > j ? i : j;
    h[d >> 2] = UA + 8;
    h[h[c + 12 >> 2] + 4 >> 2] == 1 ? c = e : (G(y.Aa, 41, y.ea, y.ra), c = h[g >> 2]);
    h[h[c + 12 >> 2] + 4 >> 2] != 0 && G(y.Aa, 42, y.ea, y.I);
    c = d;
  }
  return c;
}), 0, (function(c, d) {
  im[h[h[c >> 2] + 4 >> 2]](c);
  var e = Dh[dn + 144];
  e < 14 || G(y.e, 173, y.h, y.i);
  e = (e << 2) + d + 12;
  h[c >> 2] = h[e >> 2];
  h[e >> 2] = c;
}), 0, (function(c, d, e, f, g) {
  d = gn(g, 144);
  f = d >> 2;
  if (d == 0) {
    c = 0;
  } else {
    h[d >> 2] = TA + 8;
    h[f + 1] = 4;
    h[f + 12] = c;
    g = d + 52;
    h[g >> 2] = e;
    h[f + 14] = 0;
    h[f + 15] = 0;
    h[f + 31] = 0;
    h[f + 32] = 0;
    for (var i = d + 8 >> 2, j = i + 10; i < j; i++) {
      h[i] = 0;
    }
    i = an(l[c + 16 >> 2] * l[e + 16 >> 2]);
    l[f + 34] = i;
    i = l[c + 20 >> 2];
    j = l[e + 20 >> 2];
    l[f + 35] = i > j ? i : j;
    h[d >> 2] = aG + 8;
    h[h[c + 12 >> 2] + 4 >> 2] == 1 ? c = e : (G(y.Ba, 41, y.ga, y.ra), c = h[g >> 2]);
    h[h[c + 12 >> 2] + 4 >> 2] != 2 && G(y.Ba, 42, y.ga, y.S);
    c = d;
  }
  return c;
}), 0, (function(c, d) {
  im[h[h[c >> 2] + 4 >> 2]](c);
  var e = Dh[dn + 144];
  e < 14 || G(y.e, 173, y.h, y.i);
  e = (e << 2) + d + 12;
  h[c >> 2] = h[e >> 2];
  h[e >> 2] = c;
}), 0, (function(c, d, e, f, g) {
  var i, g = gn(g, 144);
  i = g >> 2;
  if (g == 0) {
    c = 0;
  } else {
    h[g >> 2] = TA + 8;
    h[i + 1] = 4;
    h[i + 12] = c;
    var j = g + 52;
    h[j >> 2] = e;
    h[i + 14] = d;
    h[i + 15] = f;
    h[i + 31] = 0;
    h[i + 32] = 0;
    d = g + 8 >> 2;
    for (f = d + 10; d < f; d++) {
      h[d] = 0;
    }
    d = an(l[c + 16 >> 2] * l[e + 16 >> 2]);
    l[i + 34] = d;
    d = l[c + 20 >> 2];
    f = l[e + 20 >> 2];
    l[i + 35] = d > f ? d : f;
    h[g >> 2] = MA + 8;
    h[h[c + 12 >> 2] + 4 >> 2] == 3 ? c = e : (G(y.wa, 43, y.fa, y.qa), c = h[j >> 2]);
    h[h[c + 12 >> 2] + 4 >> 2] != 0 && G(y.wa, 44, y.fa, y.I);
    c = g;
  }
  return c;
}), 0, (function(c, d) {
  im[h[h[c >> 2] + 4 >> 2]](c);
  var e = Dh[dn + 144];
  e < 14 || G(y.e, 173, y.h, y.i);
  e = (e << 2) + d + 12;
  h[c >> 2] = h[e >> 2];
  h[e >> 2] = c;
}), 0, (function(c, d, e, f, g) {
  var i, g = gn(g, 144);
  i = g >> 2;
  if (g == 0) {
    c = 0;
  } else {
    h[g >> 2] = TA + 8;
    h[i + 1] = 4;
    h[i + 12] = c;
    var j = g + 52;
    h[j >> 2] = e;
    h[i + 14] = d;
    h[i + 15] = f;
    h[i + 31] = 0;
    h[i + 32] = 0;
    d = g + 8 >> 2;
    for (f = d + 10; d < f; d++) {
      h[d] = 0;
    }
    d = an(l[c + 16 >> 2] * l[e + 16 >> 2]);
    l[i + 34] = d;
    d = l[c + 20 >> 2];
    f = l[e + 20 >> 2];
    l[i + 35] = d > f ? d : f;
    h[g >> 2] = PA + 8;
    h[h[c + 12 >> 2] + 4 >> 2] == 3 ? c = e : (G(y.xa, 43, y.ha, y.qa), c = h[j >> 2]);
    h[h[c + 12 >> 2] + 4 >> 2] != 2 && G(y.xa, 44, y.ha, y.S);
    c = g;
  }
  return c;
}), 0, (function(c, d) {
  im[h[h[c >> 2] + 4 >> 2]](c);
  var e = Dh[dn + 144];
  e < 14 || G(y.e, 173, y.h, y.i);
  e = (e << 2) + d + 12;
  h[c >> 2] = h[e >> 2];
  h[e >> 2] = c;
}), 0, fb(), 0, (function(c) {
  c != 0 && qp(c);
}), 0, (function(c, d) {
  var e, f = gn(d, 48);
  e = f >> 2;
  f == 0 ? e = 0 : (h[e] = Yn + 8, h[e + 1] = 1, l[e + 2] = .009999999776482582, l[e + 7] = 0, l[e + 8] = 0, l[e + 9] = 0, l[e + 10] = 0, a[f + 44] = 0, a[f + 45] = 0, e = f);
  h[e + 4 >> 2] = h[c + 4 >> 2];
  l[e + 8 >> 2] = l[c + 8 >> 2];
  var f = c + 12, g = e + 12, i = h[f + 4 >> 2];
  h[g >> 2] = h[f >> 2];
  h[g + 4 >> 2] = i;
  f = c + 20;
  g = e + 20;
  i = h[f + 4 >> 2];
  h[g >> 2] = h[f >> 2];
  h[g + 4 >> 2] = i;
  f = c + 28;
  g = e + 28;
  i = h[f + 4 >> 2];
  h[g >> 2] = h[f >> 2];
  h[g + 4 >> 2] = i;
  f = c + 36;
  g = e + 36;
  i = h[f + 4 >> 2];
  h[g >> 2] = h[f >> 2];
  h[g + 4 >> 2] = i;
  a[e + 44] = a[c + 44] & 1;
  a[e + 45] = a[c + 45] & 1;
  return e;
}), 0, (function() {
  return 1;
}), 0, (function() {
  return 0;
}), 0, (function(c, d, e, f) {
  e >>= 2;
  var g = l[f >> 2], i = l[e] - g, j = l[f + 4 >> 2], m = l[e + 1] - j, n = l[f + 12 >> 2], o = l[f + 8 >> 2], f = n * i + o * m, q = -o, i = i * q + n * m, g = l[e + 2] - g, m = l[e + 3] - j, j = n * g + o * m - f, n = g * q + n * m - i, q = c + 12, o = h[q + 4 >> 2], q = (w[0] = h[q >> 2], x[0]), o = (w[0] = o, x[0]), g = c + 20, c = h[g + 4 >> 2], g = (w[0] = h[g >> 2], x[0]), m = (w[0] = c, x[0]), c = g - q, g = m - o, p = -c, r = g * g, s = c * c, m = an(r + s);
  if (m < 1.1920928955078125e-7) {
    m = g;
  } else {
    var u = 1 / m, m = g * u;
    p *= u;
  }
  var u = m * (q - f) + p * (o - i), A = m * j + p * n;
  A == 0 ? d = 0 : (A = u / A, A < 0 ? d = 0 : l[e + 4] < A ? d = 0 : (e = s + r, e == 0 ? d = 0 : (e = ((f + j * A - q) * c + (i + n * A - o) * g) / e, e < 0 | e > 1 ? d = 0 : (l[d + 8 >> 2] = A, u > 0 ? (e = (x[0] = -m, w[0]), f = (x[0] = -p, w[0]) | 0) : (e = (x[0] = m, w[0]), f = (x[0] = p, w[0]) | 0), h[d >> 2] = 0 | e, h[d + 4 >> 2] = f, d = 1))));
  return d;
}), 0, (function(c, d, e) {
  var f = c >> 2, g = l[e + 12 >> 2], i = l[f + 3], j = l[e + 8 >> 2], m = l[f + 4], n = l[e >> 2], c = g * i - j * m + n, o = l[e + 4 >> 2], e = j * i + g * m + o, i = l[f + 5], m = l[f + 6], n = g * i - j * m + n, g = j * i + g * m + o, f = l[f + 2], j = (x[0] = (c < n ? c : n) - f, w[0]), o = (x[0] = (e < g ? e : g) - f, w[0]) | 0;
  h[d >> 2] = 0 | j;
  h[d + 4 >> 2] = o;
  d += 8;
  c = (x[0] = (c > n ? c : n) + f, w[0]);
  e = (x[0] = (e > g ? e : g) + f, w[0]) | 0;
  h[d >> 2] = 0 | c;
  h[d + 4 >> 2] = e;
}), 0, (function(c, d) {
  l[d >> 2] = 0;
  var e = (l[c + 16 >> 2] + l[c + 24 >> 2]) * .5, f = d + 4, g = (x[0] = (l[c + 12 >> 2] + l[c + 20 >> 2]) * .5, w[0]), e = (x[0] = e, w[0]) | 0;
  h[f >> 2] = 0 | g;
  h[f + 4 >> 2] = e;
  l[d + 12 >> 2] = 0;
}), 0, fb(), 0, (function(c) {
  c != 0 && qp(c);
}), 0, (function(c, d) {
  var e, f = gn(d, 152);
  e = f >> 2;
  f == 0 ? f = 0 : (h[e] = ip + 8, h[e + 1] = 2, l[e + 2] = .009999999776482582, h[e + 37] = 0, l[e + 3] = 0, l[e + 4] = 0);
  e = f >> 2;
  h[e + 1] = h[c + 4 >> 2];
  l[e + 2] = l[c + 8 >> 2];
  var g = c + 12, i = f + 12, j = h[g + 4 >> 2];
  h[i >> 2] = h[g >> 2];
  h[i + 4 >> 2] = j;
  Sp(f + 20, c + 20, 64);
  Sp(f + 84, c + 84, 64);
  h[e + 37] = h[c + 148 >> 2];
  return f;
}), 0, (function() {
  return 1;
}), 0, (function(c, d, e) {
  c >>= 2;
  for (var f = l[e >> 2] - l[d >> 2], e = l[e + 4 >> 2] - l[d + 4 >> 2], g = l[d + 12 >> 2], i = l[d + 8 >> 2], d = g * f + i * e, f = f * -i + g * e, e = h[c + 37], g = 0; ; ) {
    if (g >= e) {
      var j = 1;
      break;
    }
    if (l[((g << 3) + 84 >> 2) + c] * (d - l[((g << 3) + 20 >> 2) + c]) + l[((g << 3) + 88 >> 2) + c] * (f - l[((g << 3) + 24 >> 2) + c]) > 0) {
      j = 0;
      break;
    }
    g += 1;
  }
  return j;
}), 0, (function(c, d, e, f) {
  var g = e >> 2;
  c >>= 2;
  var i = l[f >> 2], j = l[g] - i, m = l[f + 4 >> 2], n = l[g + 1] - m, e = f + 12, o = l[e >> 2];
  f += 8;
  var q = l[f >> 2], p = o * j + q * n, r = -q, j = j * r + o * n, i = l[g + 2] - i, n = l[g + 3] - m, m = o * i + q * n - p, o = i * r + o * n - j, r = l[g + 4], q = h[c + 37], i = 0, g = -1, n = r, s = 0;
  a : for (;;) {
    if (i < q) {
      var u = l[((i << 3) + 84 >> 2) + c], A = l[((i << 3) + 88 >> 2) + c], E = u * (l[((i << 3) + 20 >> 2) + c] - p) + A * (l[((i << 3) + 24 >> 2) + c] - j), u = u * m + A * o, A = u == 0;
      b : do {
        if (A) {
          if (E < 0) {
            var z = 0;
            break a;
          } else {
            var I = g, C = n, K = s;
          }
        } else {
          I = u < 0;
          do {
            if (I && E < s * u) {
              I = i;
              C = n;
              K = E / u;
              break b;
            }
          } while (0);
          u > 0 ? E < n * u ? (I = g, C = E / u) : (I = g, C = n) : (I = g, C = n);
          K = s;
        }
      } while (0);
      if (C < K) {
        z = 0;
        break;
      }
      i += 1;
      g = I;
      n = C;
      s = K;
    } else {
      s < 0 | s > r && G(y.U, 249, y.wb, y.fc);
      if (g <= -1) {
        z = 0;
        break;
      }
      l[d + 8 >> 2] = s;
      z = l[e >> 2];
      e = l[((g << 3) + 84 >> 2) + c];
      f = l[f >> 2];
      p = l[((g << 3) + 88 >> 2) + c];
      c = f * e + z * p;
      z = (x[0] = z * e - f * p, w[0]);
      c = (x[0] = c, w[0]) | 0;
      h[d >> 2] = 0 | z;
      h[d + 4 >> 2] = c;
      z = 1;
      break;
    }
  }
  return z;
}), 0, (function(c, d, e) {
  c >>= 2;
  var f = l[e + 12 >> 2], g = l[c + 5], i = l[e + 8 >> 2], j = l[c + 6], m = l[e >> 2], n = f * g - i * j + m, e = l[e + 4 >> 2], g = i * g + f * j + e, j = h[c + 37], o = j > 1;
  a : do {
    if (o) {
      for (var q = g, p = g, r = n, s = n, u = 1; ; ) {
        var A = l[((u << 3) + 20 >> 2) + c], E = l[((u << 3) + 24 >> 2) + c], z = f * A - i * E + m, A = i * A + f * E + e, s = s < z ? s : z, p = p < A ? p : A, r = r > z ? r : z, q = q > A ? q : A;
        u += 1;
        if (u >= j) {
          var I = q, C = p, K = r, J = s;
          break a;
        }
      }
    } else {
      C = I = g, J = K = n;
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
  var f;
  f = c + 148;
  var g = h[f >> 2];
  if (g > 2) {
    var i = g;
    f = 3;
  } else {
    if (G(y.U, 306, y.oa, y.lc), f = h[f >> 2], f > 0) {
      i = f, f = 3;
    } else {
      var j = l[d >> 2] = 0, m = 0, n = 0, o = 0, q = 0, p = 0, r = d;
      f = 10;
    }
  }
  do {
    if (f == 3) {
      for (var s = g = f = 0; ; ) {
        var u = g + l[c + (s << 3) + 20 >> 2], A = f + l[c + (s << 3) + 24 >> 2];
        s += 1;
        if (s < i) {
          f = A, g = u;
        } else {
          break;
        }
      }
      g = 1 / i;
      f = u * g;
      g *= A;
      for (var s = c + 20, E = c + 24, z = 0, I = 0, C = 0, K = 0, J = 0; ; ) {
        var M = l[c + (J << 3) + 20 >> 2] - f, B = l[c + (J << 3) + 24 >> 2] - g;
        J += 1;
        var F = J < i;
        if (F) {
          var H = (J << 3) + c + 20, P = (J << 3) + c + 24;
        } else {
          H = s, P = E;
        }
        var D = l[H >> 2] - f, Q = l[P >> 2] - g, O = M * Q - B * D, H = O * .5, P = C + H, L = H * .3333333432674408, H = I + (M + D) * L, L = z + (B + Q) * L, M = K + O * .0833333358168602 * (M * M + D * M + D * D + B * B + Q * B + Q * Q);
        if (F) {
          z = L, I = H, C = P, K = M;
        } else {
          break;
        }
      }
      s = P * e;
      E = d;
      l[E >> 2] = s;
      if (P > 1.1920928955078125e-7) {
        var ib = s, U = g, N = f, ja = M, ka = P, za = H, S = L;
        f = 11;
      } else {
        j = g, m = f, n = M, o = P, q = H, p = L, r = E, f = 10;
      }
    }
  } while (0);
  f == 10 && (G(y.U, 352, y.oa, y.tc), ib = l[r >> 2], U = j, N = m, ja = n, ka = o, za = q, S = p);
  c = 1 / ka;
  za *= c;
  S *= c;
  N = za + N;
  U = S + U;
  c = d + 4;
  i = (x[0] = N, w[0]);
  j = (x[0] = U, w[0]) | 0;
  h[c >> 2] = 0 | i;
  h[c + 4 >> 2] = j;
  l[d + 12 >> 2] = ja * e + ib * (N * N + U * U - (za * za + S * S));
}), 0, fb(), 0, (function(c) {
  c != 0 && qp(c);
}), 0, fb(), 0, fb(), 0, fb(), 0, fb(), 0, fb(), 0, (function(c) {
  c != 0 && qp(c);
}), 0, (function(c, d, e) {
  c = b[d + 36 >> 1];
  return c != b[e + 36 >> 1] | c == 0 ? (b[e + 32 >> 1] & b[d + 34 >> 1]) == 0 ? 0 : (b[e + 34 >> 1] & b[d + 32 >> 1]) != 0 : c > 0;
}), 0, (function(c, d, e, f) {
  var g, i = Yf;
  Yf += 48;
  g = i >> 2;
  var j = h[h[c + 48 >> 2] + 12 >> 2];
  h[g] = Yn + 8;
  h[g + 1] = 1;
  l[g + 2] = .009999999776482582;
  l[g + 7] = 0;
  l[g + 8] = 0;
  l[g + 9] = 0;
  l[g + 10] = 0;
  a[i + 44] = 0;
  a[i + 45] = 0;
  Ks(j, i, h[c + 56 >> 2]);
  $m(d, i, e, h[h[c + 52 >> 2] + 12 >> 2], f);
  Yf = i;
}), 0, fb(), 0, (function(c) {
  c != 0 && qp(c);
}), 0, (function(c, d, e, f) {
  var g, i = Yf;
  Yf += 300;
  var j = i + 252;
  g = j >> 2;
  var m = h[h[c + 48 >> 2] + 12 >> 2];
  h[g] = Yn + 8;
  h[g + 1] = 1;
  l[g + 2] = .009999999776482582;
  l[g + 7] = 0;
  l[g + 8] = 0;
  l[g + 9] = 0;
  l[g + 10] = 0;
  a[j + 44] = 0;
  a[j + 45] = 0;
  Ks(m, j, h[c + 56 >> 2]);
  rp(i, d, j, e, h[h[c + 52 >> 2] + 12 >> 2], f);
  Yf = i;
}), 0, fb(), 0, (function(c) {
  c != 0 && qp(c);
}), 0, (function(c, d, e, f) {
  var g = h[h[c + 48 >> 2] + 12 >> 2], i = h[h[c + 52 >> 2] + 12 >> 2], j = d + 60;
  h[j >> 2] = 0;
  var m = g + 12, n = l[e + 12 >> 2], o = l[m >> 2], q = l[e + 8 >> 2], p = l[g + 16 >> 2], c = i + 12, r = l[f + 12 >> 2], s = l[c >> 2], u = l[f + 8 >> 2], A = l[i + 16 >> 2], E = r * s - u * A + l[f >> 2] - (n * o - q * p + l[e >> 2]), e = u * s + r * A + l[f + 4 >> 2] - (q * o + n * p + l[e + 4 >> 2]), g = l[g + 8 >> 2] + l[i + 8 >> 2];
  E * E + e * e > g * g || (h[d + 56 >> 2] = 0, g = d + 48, E = h[m + 4 >> 2], h[g >> 2] = h[m >> 2], h[g + 4 >> 2] = E, l[d + 40 >> 2] = 0, l[d + 44 >> 2] = 0, h[j >> 2] = 1, j = h[c + 4 >> 2], h[d >> 2] = h[c >> 2], h[d + 4 >> 2] = j, h[d + 16 >> 2] = 0);
}), 0, fb(), 0, (function(c) {
  c != 0 && qp(c);
}), 0, (function() {
  oa("Pure virtual function called!");
}), 0, fb(), 0, (function(c) {
  c != 0 && qp(c);
}), 0, (function(c, d, e, f) {
  $m(d, h[h[c + 48 >> 2] + 12 >> 2], e, h[h[c + 52 >> 2] + 12 >> 2], f);
}), 0, fb(), 0, (function(c) {
  c != 0 && qp(c);
}), 0, (function(c, d, e, f) {
  var g = Yf;
  Yf += 252;
  rp(g, d, h[h[c + 48 >> 2] + 12 >> 2], e, h[h[c + 52 >> 2] + 12 >> 2], f);
  Yf = g;
}), 0, fb(), 0, (function(c) {
  c != 0 && qp(c);
}), 0, (function(c, d, e, f) {
  var g, i, j = d >> 2, m = h[h[c + 48 >> 2] + 12 >> 2], n = h[h[c + 52 >> 2] + 12 >> 2];
  i = m >> 2;
  g = d + 60 >> 2;
  h[g] = 0;
  for (var o = n + 12, q = l[f + 12 >> 2], p = l[o >> 2], r = l[f + 8 >> 2], s = l[n + 16 >> 2], u = q * p - r * s + l[f >> 2] - l[e >> 2], A = r * p + q * s + l[f + 4 >> 2] - l[e + 4 >> 2], E = l[e + 12 >> 2], z = l[e + 8 >> 2], I = E * u + z * A, C = u * -z + E * A, K = l[m + 8 >> 2] + l[n + 8 >> 2], J = h[m + 148 >> 2], M = 0, B = -3.4028234663852886e+38, F = 0; ; ) {
    if (M < J) {
      var H = l[((M << 3) + 84 >> 2) + i] * (I - l[((M << 3) + 20 >> 2) + i]) + l[((M << 3) + 88 >> 2) + i] * (C - l[((M << 3) + 24 >> 2) + i]);
      if (H > K) {
        break;
      }
      var P = H > B, D = P ? M : F, Q = P ? H : B;
      M += 1;
      B = Q;
      F = D;
    } else {
      var O = F + 1, L = O < J ? O : 0, ib = (F << 3) + m + 20, U = k[ib >> 2], N = k[ib + 4 >> 2], ja = (w[0] = U, x[0]), ka = (w[0] = N, x[0]), za = (L << 3) + m + 20, S = k[za >> 2], T = k[za + 4 >> 2], $ = (w[0] = S, x[0]), Ea = (w[0] = T, x[0]);
      if (B < 1.1920928955078125e-7) {
        h[g] = 1;
        h[j + 14] = 1;
        var Z = (F << 3) + m + 84, X = d + 40, aa = h[Z + 4 >> 2];
        h[X >> 2] = h[Z >> 2];
        h[X + 4 >> 2] = aa;
        var Ba = (ka + Ea) * .5, Ca = d + 48, mb = (x[0] = (ja + $) * .5, w[0]), Qa = (x[0] = Ba, w[0]) | 0;
        h[Ca >> 2] = 0 | mb;
        h[Ca + 4 >> 2] = Qa;
        var pa = o, ua = d, Y = h[pa + 4 >> 2];
        h[ua >> 2] = h[pa >> 2];
        h[ua + 4 >> 2] = Y;
      } else {
        var Fa = I - ja, va = C - ka, Ra = I - $, Wa = C - Ea;
        if (Fa * ($ - ja) + va * (Ea - ka) > 0) {
          if (Ra * (ja - $) + Wa * (ka - Ea) > 0) {
            var Xa = (ja + $) * .5, Ka = (ka + Ea) * .5, Za = (F << 3) + m + 84;
            if ((I - Xa) * l[Za >> 2] + (C - Ka) * l[((F << 3) + 88 >> 2) + i] > K) {
              break;
            }
            h[g] = 1;
            h[j + 14] = 1;
            var jb = Za, $a = d + 40, pb = h[jb + 4 >> 2];
            h[$a >> 2] = h[jb >> 2];
            h[$a + 4 >> 2] = pb;
            var ga = d + 48, da = (x[0] = Xa, w[0]), Ya = (x[0] = Ka, w[0]) | 0;
            h[ga >> 2] = 0 | da;
            h[ga + 4 >> 2] = Ya;
            var ba = o, ha = d, qa = h[ba + 4 >> 2];
            h[ha >> 2] = h[ba >> 2];
            h[ha + 4 >> 2] = qa;
          } else {
            var ra = Ra * Ra + Wa * Wa;
            if (ra > K * K) {
              break;
            }
            h[g] = 1;
            h[j + 14] = 1;
            var ma = d + 40, la = ma, xa = (x[0] = Ra, w[0]), ab = (x[0] = Wa, w[0]) | 0, ia = la;
            h[ia >> 2] = 0 | xa;
            var Ma = la + 4;
            h[Ma >> 2] = ab;
            var bb = an(ra);
            if (bb >= 1.1920928955078125e-7) {
              var wb = d + 44, xb = 1 / bb;
              l[ma >> 2] = Ra * xb;
              l[wb >> 2] = Wa * xb;
            }
            var Kb = d + 48, Na = Kb;
            h[Na >> 2] = S;
            var Ga = Kb + 4;
            h[Ga >> 2] = T;
            var sa = o, Ha = d, Oa = sa, Ua = sa + 4, ca = h[Ua >> 2], Aa = Ha;
            h[Aa >> 2] = h[Oa >> 2];
            var cb = Ha + 4;
            h[cb >> 2] = ca;
          }
        } else {
          var na = Fa * Fa + va * va;
          if (na > K * K) {
            break;
          }
          h[g] = 1;
          h[j + 14] = 1;
          var La = d + 40, db = La, qb = (x[0] = Fa, w[0]), ub = (x[0] = va, w[0]), rb = 0 | qb, gb = ub | 0, ia = db;
          h[ia >> 2] = rb;
          Ma = db + 4;
          h[Ma >> 2] = gb;
          var kb = an(na);
          if (kb >= 1.1920928955078125e-7) {
            var Va = d + 44, ea = 1 / kb;
            l[La >> 2] = Fa * ea;
            l[Va >> 2] = va * ea;
          }
          var Da = d + 48, Na = Da;
          h[Na >> 2] = U;
          Ga = Da + 4;
          h[Ga >> 2] = N;
          var Ia = o, Sa = d, Oa = Ia, vb = h[Oa >> 2], Ua = Ia + 4, Pa = h[Ua >> 2], Aa = Sa;
          h[Aa >> 2] = vb;
          cb = Sa + 4;
          h[cb >> 2] = Pa;
        }
      }
      h[j + 4] = 0;
      break;
    }
  }
}), 0, fb(), 0, (function(c) {
  c != 0 && qp(c);
}), 0, (function(c, d, e, f) {
  var g, i, j, m, n, o, q, p, r, s, u, A, E, z = f >> 2, I = e >> 2, C = Yf;
  Yf += 80;
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
  var O = sp(C, H, e, P, f), L = O > Q;
  do {
    if (!L) {
      h[J >> 2] = 0;
      var ib = sp(J, P, f, H, e);
      if (ib <= Q) {
        if (ib > O * .9800000190734863 + .0010000000474974513) {
          var U = l[z], N = l[z + 1], ja = l[z + 2], ka = l[z + 3], za = l[I], S = l[I + 1], T = l[I + 2], $ = l[I + 3], Ea = h[J >> 2];
          h[d + 56 >> 2] = 2;
          var Z = 1, X = Ea, aa = H;
          p = aa >> 2;
          var Ba = P;
          q = Ba >> 2;
          var Ca = U, mb = N, Qa = ja, pa = ka, ua = za, Y = S, Fa = T, va = $;
        } else {
          var Ra = l[I], Wa = l[I + 1], Xa = l[I + 2], Ka = l[I + 3], Za = l[z], jb = l[z + 1], $a = l[z + 2], pb = l[z + 3], ga = h[C >> 2];
          h[d + 56 >> 2] = 1;
          Z = 0;
          X = ga;
          aa = P;
          p = aa >> 2;
          Ba = H;
          q = Ba >> 2;
          Ca = Ra;
          mb = Wa;
          Qa = Xa;
          pa = Ka;
          ua = Za;
          Y = jb;
          Fa = $a;
          va = pb;
        }
        var da = h[p + 37];
        K = X > -1 ? h[q + 37] > X ? 8 : 7 : 7;
        K == 7 && G(y.Ga, 151, y.jb, y.ta);
        var Ya = l[((X << 3) + 84 >> 2) + q], ba = l[((X << 3) + 88 >> 2) + q], ha = pa * Ya - Qa * ba, qa = Qa * Ya + pa * ba, ra = va * ha + Fa * qa, ma = -Fa, la = ha * ma + va * qa, xa = da > 0;
        a : do {
          if (xa) {
            for (var ab = 0, ia = 3.4028234663852886e+38, Ma = 0; ; ) {
              var bb = ra * l[((Ma << 3) + 84 >> 2) + p] + la * l[((Ma << 3) + 88 >> 2) + p], wb = bb < ia, xb = wb ? Ma : ab, Kb = wb ? bb : ia, Na = Ma + 1;
              if (Na == da) {
                var Ga = xb;
                break a;
              } else {
                ab = xb, ia = Kb, Ma = Na;
              }
            }
          } else {
            Ga = 0;
          }
        } while (0);
        var sa = Ga + 1, Ha = sa < da ? sa : 0, Oa = l[((Ga << 3) + 20 >> 2) + p], Ua = l[((Ga << 3) + 24 >> 2) + p], ca = va * Oa - Fa * Ua + ua, Aa = Fa * Oa + va * Ua + Y, cb = M, na = (x[0] = ca, w[0]), La = (x[0] = Aa, w[0]) | 0;
        h[cb >> 2] = 0 | na;
        h[cb + 4 >> 2] = La;
        var db = X & 255, qb = M + 8, ub = qb;
        a[qb] = db;
        var rb = Ga & 255;
        a[ub + 1] = rb;
        a[ub + 2] = 1;
        a[ub + 3] = 0;
        var gb = M + 12, kb = l[((Ha << 3) + 20 >> 2) + p], Va = l[((Ha << 3) + 24 >> 2) + p], ea = va * kb - Fa * Va + ua, Da = Fa * kb + va * Va + Y, Ia = gb, Sa = (x[0] = ea, w[0]), vb = (x[0] = Da, w[0]) | 0;
        h[Ia >> 2] = 0 | Sa;
        h[Ia + 4 >> 2] = vb;
        var Pa = M + 20, eb = Pa;
        a[Pa] = db;
        a[eb + 1] = Ha & 255;
        a[eb + 2] = 1;
        a[eb + 3] = 0;
        var nb = X + 1, Db = nb < h[q + 37] ? nb : 0, Qb = (X << 3) + Ba + 20, Ob = h[Qb + 4 >> 2], Eb = (w[0] = h[Qb >> 2], x[0]), Ib = (w[0] = Ob, x[0]), Jb = (Db << 3) + Ba + 20, sb = h[Jb + 4 >> 2], Lb = (w[0] = h[Jb >> 2], x[0]), Fb = (w[0] = sb, x[0]), ob = Lb - Eb, Bb = Fb - Ib, lb = an(ob * ob + Bb * Bb);
        if (lb < 1.1920928955078125e-7) {
          var tb = ob, W = Bb;
        } else {
          var R = 1 / lb, tb = ob * R, W = Bb * R;
        }
        var Xb = (Eb + Lb) * .5, Tb = pa * tb - Qa * W, yb = Qa * tb + pa * W, Cb = Tb * -1, Ub = pa * Eb - Qa * Ib + Ca, bc = Qa * Eb + pa * Ib + mb, Ja = tb * -1, Mb = (Ib + Fb) * .5, fa = yb * Ub + Cb * bc, ya = Q - (Tb * Ub + yb * bc), zb = Tb * (pa * Lb - Qa * Fb + Ca) + yb * (Qa * Lb + pa * Fb + mb) + Q, ta = -Tb, cc = -yb, gc = ca * ta + Aa * cc - ya, Pb = ea * ta + Da * cc - ya;
        if (gc > 0) {
          var pc = 0;
        } else {
          h[s] = h[u], h[s + 1] = h[u + 1], h[s + 2] = h[u + 2], pc = 1;
        }
        if (Pb > 0) {
          var Vb = pc;
        } else {
          o = B + pc * 12 >> 2, n = gb >> 2, h[o] = h[n], h[o + 1] = h[n + 1], h[o + 2] = h[n + 2], Vb = pc + 1;
        }
        if (gc * Pb < 0) {
          var wc = gc / (gc - Pb), Xc = Aa + (Da - Aa) * wc, nc = B + Vb * 12, uc = (x[0] = ca + (ea - ca) * wc, w[0]), hc = (x[0] = Xc, w[0]), ic = 0 | uc, yc = hc | 0, Ab = nc;
          m = Ab >> 2;
          h[m] = ic;
          var hb = nc + 4;
          j = hb >> 2;
          h[j] = yc;
          var dc = B + Vb * 12 + 8, ec = dc;
          a[dc] = db;
          a[ec + 1] = rb;
          a[ec + 2] = 0;
          a[ec + 3] = 1;
          var qc = Vb + 1;
        } else {
          qc = Vb;
        }
        if (qc >= 2) {
          var Rc = l[E], Cc = l[E + 1], Yb = Tb * Rc + yb * Cc - zb, dd = B + 12, Sc = l[dd >> 2], Gb = l[E + 4], Wb = Tb * Sc + yb * Gb - zb;
          if (Yb > 0) {
            var jc = 0;
          } else {
            h[r] = h[s], h[r + 1] = h[s + 1], h[r + 2] = h[s + 2], jc = 1;
          }
          if (Wb > 0) {
            var Dc = jc;
          } else {
            i = F + jc * 12 >> 2, g = dd >> 2, h[i] = h[g], h[i + 1] = h[g + 1], h[i + 2] = h[g + 2], Dc = jc + 1;
          }
          if (Yb * Wb < 0) {
            var ed = Yb / (Yb - Wb), rc = Cc + (Gb - Cc) * ed, Ec = F + Dc * 12, Fc = (x[0] = Rc + (Sc - Rc) * ed, w[0]), fc = (x[0] = rc, w[0]), sc = 0 | Fc, fd = fc | 0, Ab = Ec;
            m = Ab >> 2;
            h[m] = sc;
            hb = Ec + 4;
            j = hb >> 2;
            h[j] = fd;
            var Tc = F + Dc * 12 + 8, wd = Tc;
            a[Tc] = Db & 255;
            a[wd + 1] = a[B + 9];
            a[wd + 2] = 0;
            a[wd + 3] = 1;
            var kc = Dc + 1;
          } else {
            kc = Dc;
          }
          if (kc >= 2) {
            var vc = d + 40, Kd = (x[0] = W, w[0]), xd = (x[0] = Ja, w[0]) | 0;
            h[vc >> 2] = 0 | Kd;
            h[vc + 4 >> 2] = xd;
            var Nb = d + 48, lc = (x[0] = Xb, w[0]), Rb = (x[0] = Mb, w[0]) | 0;
            h[Nb >> 2] = 0 | lc;
            h[Nb + 4 >> 2] = Rb;
            var Mc = l[A], Zb = l[A + 1], $b = yb * Mc + Cb * Zb - fa > Q;
            if (Z == 0) {
              if ($b) {
                var gd = 0;
              } else {
                var hd = Mc - ua, Gc = Zb - Y, Rd = hd * ma + va * Gc, Uc = d, $d = (x[0] = va * hd + Fa * Gc, w[0]), tc = (x[0] = Rd, w[0]) | 0, mc = Uc;
                h[mc >> 2] = 0 | $d;
                var od = Uc + 4;
                h[od >> 2] = tc;
                h[d + 16 >> 2] = h[A + 2];
                gd = 1;
              }
              var yd = l[A + 3], pd = l[A + 4];
              if (yb * yd + Cb * pd - fa > Q) {
                var Nc = gd;
              } else {
                var Oc = yd - ua, Sd = pd - Y, ae = Oc * ma + va * Sd, zd = d + gd * 20, Yc = (x[0] = va * Oc + Fa * Sd, w[0]), Vc = (x[0] = ae, w[0]) | 0, Ab = zd;
                m = Ab >> 2;
                h[m] = 0 | Yc;
                hb = zd + 4;
                j = hb >> 2;
                h[j] = Vc;
                h[(d + 16 >> 2) + (gd * 5 | 0)] = h[A + 5];
                Nc = gd + 1;
              }
            } else {
              if ($b) {
                var Hb = 0;
              } else {
                var Hc = Mc - ua, id = Zb - Y, Hd = Hc * ma + va * id, ac = d, oc = (x[0] = va * Hc + Fa * id, w[0]), be = (x[0] = Hd, w[0]) | 0, mc = ac;
                h[mc >> 2] = 0 | oc;
                od = ac + 4;
                h[od >> 2] = be;
                var Ad = d + 16, Bd = k[A + 2];
                h[Ad >> 2] = Bd;
                var Td = Bd >>> 24 & 255, jd = Bd >>> 16 & 255, Ld = Bd & 255, Cd = Ad, Zc = Cd + 1, Pc = Cd + 2, Md = Cd + 3;
                a[Ad] = Bd >>> 8 & 255;
                a[Zc] = Ld;
                a[Pc] = Td;
                a[Md] = jd;
                Hb = 1;
              }
              var qd = l[A + 3], $c = l[A + 4];
              if (yb * qd + Cb * $c - fa > Q) {
                Nc = Hb;
              } else {
                var ce = qd - ua, Ud = $c - Y, Ae = ce * ma + va * Ud, Vd = d + Hb * 20, qe = (x[0] = va * ce + Fa * Ud, w[0]), de = (x[0] = Ae, w[0]) | 0, Ab = Vd;
                m = Ab >> 2;
                h[m] = 0 | qe;
                hb = Vd + 4;
                j = hb >> 2;
                h[j] = de;
                var rd = d + Hb * 20 + 16, zc = k[A + 5];
                h[rd >> 2] = zc;
                var Wd = zc >>> 24 & 255, kd = zc >>> 16 & 255, ef = zc & 255, Wc = rd, ld = Wc + 1, re = Wc + 2, ee = Wc + 3;
                a[rd] = zc >>> 8 & 255;
                a[ld] = ef;
                a[re] = Wd;
                a[ee] = kd;
                Nc = Hb + 1;
              }
            }
            h[D >> 2] = Nc;
          }
        }
      }
    }
  } while (0);
  Yf = C;
}), 0, fb(), 0, (function(c) {
  c != 0 && qp(c);
}), 0 ];

Module.FUNCTION_TABLE = im;

function gG(c) {
  c = c || Module.arguments;
  Sm(Tm);
  var d = Ta;
  Module._main && (d = Module.Ec(c), Sm(Um));
  return d;
}

Module.run = gG;

Module.preRun && Module.preRun();

Module.noInitialRun || gG();

Module.postRun && Module.postRun();
