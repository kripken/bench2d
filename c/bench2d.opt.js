function da(c) {
  throw c;
}

var ha = void 0, pa = !0, ra = null, Ba = !1;

function Ia() {
  return (function() {});
}

var ab = [], Hb = "object" === typeof process, Ib = "object" === typeof window, Rb = "function" === typeof importScripts, Ub = !Ib && !Hb && !Rb;

if (Hb) {
  print = (function(c) {
    process.stdout.write(c + "\n");
  });
  printErr = (function(c) {
    process.stderr.write(c + "\n");
  });
  var Wb = require("fs");
  read = (function(c) {
    var e = Wb.readFileSync(c).toString();
    !e && "/" != c[0] && (c = __dirname.split("/").slice(0, -1).join("/") + "/src/" + c, e = Wb.readFileSync(c).toString());
    return e;
  });
  ab = process.argv.slice(2);
} else {
  Ub ? (this.read || (read = (function(c) {
    snarf(c);
  })), ab = this.arguments ? arguments : scriptArgs) : Ib ? (print = printErr = (function(c) {
    console.log(c);
  }), read = (function(c) {
    var e = new XMLHttpRequest;
    e.open("GET", c, Ba);
    e.send(ra);
    return e.responseText;
  }), this.arguments && (ab = arguments)) : Rb ? load = importScripts : da("Unknown runtime environment. Where are we?");
}

function Zb(c) {
  eval.call(ra, c);
}

"undefined" == typeof load && "undefined" != typeof read && (load = (function(c) {
  Zb(read(c));
}));

"undefined" === typeof printErr && (printErr = Ia());

"undefined" === typeof print && (print = printErr);

try {
  this.Module = Module;
} catch ($b) {
  this.Module = Module = {};
}

Module.arguments || (Module.arguments = ab);

Module.print && (print = Module.print);

var dc = {
  i1: 0,
  i8: 0,
  i16: 0,
  i32: 0,
  i64: 0
}, ec = {
  "float": 0,
  "double": 0
};

function fc(c) {
  if (1 == gc) {
    return 1;
  }
  var e = {
    "%i1": 1,
    "%i8": 1,
    "%i16": 2,
    "%i32": 4,
    "%i64": 8,
    "%float": 4,
    "%double": 8
  }["%" + c];
  e || ("*" == c[c.length - 1] ? e = gc : "i" == c[0] && (c = parseInt(c.substr(1)), kc(0 == c % 8), e = c / 8));
  return e;
}

function uc(c) {
  var e = {};
  c.filter((function(c) {
    return e[c] ? Ba : e[c] = pa;
  }));
}

function Bc() {
  var c, e, d;
  e = c = 0;
  var f = [], g = -1;
  d = [ "i32", "i32" ].map((function(d) {
    var i, j;
    d in dc || d in ec || "*" == d[d.length - 1] ? j = i = fc(d) : (isPointerType(d) ? 0 : /^\[\d+\ x\ (.*)\]/.test(d) || /<?{ [^}]* }>?/.test(d) || "%" == d[0]) ? (i = Types.types[d].Pc, j = Types.types[d].Oc) : da("Unclear type in struct: " + d + ", in undefined :: " + dump(Types.types[ha]));
    j = Math.min(j, gc);
    e = Math.max(e, j);
    d = Cc(c, j);
    c = d + i;
    0 <= g && f.push(d - g);
    return g = d;
  }));
  c = Cc(c, e);
  0 == f.length || uc(f);
  return d;
}

function Oc(c) {
  var e = a;
  a += c;
  a = a + 3 >> 2 << 2;
  return e;
}

function Vc(c) {
  var e = Wc;
  Wc += c;
  Wc = Wc + 3 >> 2 << 2;
  if (Wc >= ed) {
    for (; ed <= Wc; ) {
      ed = Math.ceil(2 * ed / fd) * fd;
    }
    var c = b, d = new ArrayBuffer(ed);
    b = new Int8Array(d);
    md = new Int16Array(d);
    m = new Int32Array(d);
    nd = new Uint8Array(d);
    od = new Uint16Array(d);
    v = new Uint32Array(d);
    z = new Float32Array(d);
    b.set(c);
  }
  return e;
}

function Cc(c, e) {
  return Math.ceil(c / (e ? e : 4)) * (e ? e : 4);
}

var gc = 4, vd = {}, wd;

function xd(c) {
  print(c + ":\n" + Error().stack);
  da("Assertion: " + c);
}

function kc(c, e) {
  c || xd("Assertion failed: " + e);
}

function yd(c, e, d) {
  d = d || "i8";
  "*" === d[d.length - 1] && (d = "i32");
  switch (d) {
   case "i1":
    b[c] = e;
    break;
   case "i8":
    b[c] = e;
    break;
   case "i16":
    md[c >> 1] = e;
    break;
   case "i32":
    m[c >> 2] = e;
    break;
   case "i64":
    m[c >> 2] = e;
    break;
   case "float":
    z[c >> 2] = e;
    break;
   case "double":
    z[c >> 2] = e;
    break;
   default:
    xd("invalid type for setValue: " + d);
  }
}

Module.setValue = yd;

Module.getValue = (function(c, e) {
  e = e || "i8";
  "*" === e[e.length - 1] && (e = "i32");
  switch (e) {
   case "i1":
    return b[c];
   case "i8":
    return b[c];
   case "i16":
    return md[c >> 1];
   case "i32":
    return m[c >> 2];
   case "i64":
    return m[c >> 2];
   case "float":
    return z[c >> 2];
   case "double":
    return z[c >> 2];
   default:
    xd("invalid type for setValue: " + e);
  }
  return ra;
});

var Cd = 1, A = 2;

Module.ALLOC_NORMAL = 0;

Module.ALLOC_STACK = Cd;

Module.ALLOC_STATIC = A;

function C(c, e, d) {
  var f, g;
  "number" === typeof c ? (f = pa, g = c) : (f = Ba, g = c.length);
  var h = "string" === typeof e ? e : ra, d = [ Dd, Oc, Vc ][d === ha ? A : d](Math.max(g, h ? 1 : e.length));
  if (f) {
    return Id(d, g), d;
  }
  f = 0;
  for (var i; f < g; ) {
    var j = c[f];
    "function" === typeof j && (j = vd.Qc(j));
    i = h || e[f];
    0 === i ? f++ : ("i64" == i && (i = "i32"), yd(d + f, j, i), f += fc(i));
  }
  return d;
}

Module.allocate = C;

function Jd(c, e) {
  for (var d = "undefined" == typeof e, f = "", g = 0, h, i = String.fromCharCode(0); ; ) {
    h = String.fromCharCode(nd[c + g]);
    if (d && h == i) {
      break;
    }
    f += h;
    g += 1;
    if (!d && g == e) {
      break;
    }
  }
  return f;
}

Module.Pointer_stringify = Jd;

Module.Array_stringify = (function(c) {
  for (var e = "", d = 0; d < c.length; d++) {
    e += String.fromCharCode(c[d]);
  }
  return e;
});

var Kd, fd = 4096, b, nd, md, od, m, v, z, a, Zd, Wc, $d = Module.TOTAL_STACK || 5242880, ed = Module.TOTAL_MEMORY || 10485760;

kc(!!Int32Array && !!Float64Array && !!(new Int32Array(1)).subarray && !!(new Int32Array(1)).set, "Cannot fallback to non-typed array case: Code is too specialized");

var ae = new ArrayBuffer(ed);

b = new Int8Array(ae);

md = new Int16Array(ae);

m = new Int32Array(ae);

nd = new Uint8Array(ae);

od = new Uint16Array(ae);

v = new Uint32Array(ae);

z = new Float32Array(ae);

m[0] = 255;

kc(255 === nd[0] && 0 === nd[3], "Typed arrays 2 must be run on a little-endian system");

var me = be("(null)");

Wc = me.length;

for (var ne = 0; ne < me.length; ne++) {
  b[ne] = me[ne];
}

Module.HEAP = ha;

Module.HEAP8 = b;

Module.HEAP16 = md;

Module.HEAP32 = m;

Module.HEAPU8 = nd;

Module.HEAPU16 = od;

Module.HEAPU32 = v;

Module.HEAPF32 = z;

Zd = (a = Cc(Wc)) + $d;

var oe = Cc(Zd, 8);

b.subarray(oe);

var E = m.subarray(oe >> 2), F = z.subarray(oe >> 2);

(new Float64Array(b.buffer)).subarray(oe >> 3);

Zd = oe + 8;

Wc = Math.ceil(Zd / fd) * fd;

function pe(c) {
  for (; 0 < c.length; ) {
    var e = c.shift(), d = e.Ba;
    "number" === typeof d && (d = Kd[d]);
    d(e.Kc === ha ? ra : e.Kc);
  }
}

var qe = [], re = [];

function se(c, e) {
  return Array.prototype.slice.call(b.subarray(c, c + e));
}

Module.Array_copy = se;

Module.TypedArray_copy = (function(c, e) {
  for (var d = new Uint8Array(e), f = 0; f < e; ++f) {
    d[f] = b[c + f];
  }
  return d.buffer;
});

function te(c) {
  for (var e = 0; b[c + e]; ) {
    e++;
  }
  return e;
}

Module.String_len = te;

function Se(c, e) {
  var d = te(c);
  e && d++;
  var f = se(c, d);
  e && (f[d - 1] = 0);
  return f;
}

Module.String_copy = Se;

function be(c, e) {
  for (var d = [], f = 0; f < c.length; ) {
    var g = c.charCodeAt(f);
    255 < g && (g &= 255);
    d.push(g);
    f += 1;
  }
  e || d.push(0);
  return d;
}

Module.intArrayFromString = be;

Module.intArrayToString = (function(c) {
  for (var e = [], d = 0; d < c.length; d++) {
    var f = c[d];
    255 < f && (f &= 255);
    e.push(String.fromCharCode(f));
  }
  return e.join("");
});

var H = [];

function Te(c, e) {
  return 0 <= c ? c : 32 >= e ? 2 * Math.abs(1 << e - 1) + c : Math.pow(2, e) + c;
}

function Ue(c, e) {
  if (0 >= c) {
    return c;
  }
  var d = 32 >= e ? Math.abs(1 << e - 1) : Math.pow(2, e - 1);
  if (c >= d && (32 >= e || c > d)) {
    c = -2 * d + c;
  }
  return c;
}

function Ve(c, e) {
  z[c >> 2] += z[e >> 2];
  var d = c + 4;
  z[d >> 2] += z[e + 4 >> 2];
}

function We(c) {
  z[c >> 2] = 0;
  z[c + 4 >> 2] = 0;
}

function Xe(c, e, d) {
  z[c >> 2] = e;
  z[c + 4 >> 2] = d;
}

function J(c, e, d) {
  z[c >> 2] = e;
  z[c + 4 >> 2] = d;
}

function kf() {
  lf();
  return 0;
}

Module._main = kf;

function mf(c) {
  m[c >> 2] = nf + 8;
  m[c >> 2] = of + 8;
  m[c + 4 >> 2] = 2;
  z[c + 8 >> 2] = .009999999776482582;
  m[c + 148 >> 2] = 0;
  We(c + 12);
}

function pf(c) {
  var e = c >> 2;
  m[c >> 2] = nf + 8;
  m[e] = qf + 8;
  m[e + 1] = 1;
  z[e + 2] = .009999999776482582;
  z[e + 7] = 0;
  z[e + 8] = 0;
  z[e + 9] = 0;
  z[e + 10] = 0;
  b[c + 44] = 0;
  b[c + 45] = 0;
}

function rf(c) {
  var e = c >> 2, d = c + 16;
  m[e + 11] = 0;
  Xe(c + 4, 0, 0);
  z[e + 3] = 0;
  Xe(d, 0, 0);
  z[e + 6] = 0;
  z[e + 7] = 0;
  z[e + 8] = 0;
  b[c + 36] = 1;
  b[c + 37] = 1;
  b[c + 38] = 0;
  b[c + 39] = 0;
  m[e] = 0;
  b[c + 40] = 1;
  z[e + 12] = 1;
}

function sf(c, e) {
  var d, f;
  f = c + 40 >> 2;
  var g = m[f], h = c + 36, i = m[h >> 2];
  d = c + 32 >> 2;
  g == i ? (g = m[d], m[h >> 2] = i << 1, h = Dd(i << 3), m[d] = h, Pf(h, g, m[f] << 2), Sf(g), h = m[f]) : h = g;
  m[(h << 2) + m[d] >> 2] = e;
  m[f] += 1;
}

function Tf(c, e, d, f, g) {
  var h = a;
  a += 24;
  var i = h + 8, j = h + 16, k = c + 60;
  m[k >> 2] = 0;
  var l = e + 12;
  Uf(h, d, z[l >> 2], z[e + 16 >> 2]);
  d = f + 12;
  Uf(i, g, z[d >> 2], z[f + 16 >> 2]);
  J(j, z[i >> 2] - z[h >> 2], z[i + 4 >> 2] - z[h + 4 >> 2]);
  g = z[j >> 2];
  j = z[j + 4 >> 2];
  e = z[e + 8 >> 2] + z[f + 8 >> 2];
  g * g + j * j > e * e || (m[c + 56 >> 2] = 0, e = c + 48, f = m[l + 4 >> 2], m[e >> 2] = m[l >> 2], m[e + 4 >> 2] = f, We(c + 40), m[k >> 2] = 1, k = m[d + 4 >> 2], m[c >> 2] = m[d >> 2], m[c + 4 >> 2] = k, m[c + 16 >> 2] = 0);
  a = h;
}

Tf.X = 1;

function Uf(c, e, d, f) {
  var g = z[e + 12 >> 2], h = z[e + 8 >> 2];
  J(c, g * d - h * f + z[e >> 2], h * d + g * f + z[e + 4 >> 2]);
}

function Vf(c, e, d, f, g) {
  var h, i, j, k, l, o, n, p, t, q = e >> 2, r = c >> 2, s = a;
  a += 112;
  var u = s + 8, x = s + 16, B = s + 24, y = s + 32, w = s + 40, D = s + 48, G = s + 56, M = s + 64, I = s + 72, S = s + 80, N = s + 88, Q = s + 96, Y = s + 104;
  t = c + 60 >> 2;
  m[t] = 0;
  var T = f + 12;
  Uf(s, g, z[T >> 2], z[f + 16 >> 2]);
  Wf(u, d, z[s >> 2], z[s + 4 >> 2]);
  for (var $ = z[q + 2] + z[f + 8 >> 2], ba = m[q + 37], P = z[u >> 2], R = z[u + 4 >> 2], V = x + 4, L = 0, O = -3.4028234663852886e+38, Z = 0; ; ) {
    if (L < ba) {
      J(x, P - z[((L << 3) + 20 >> 2) + q], R - z[((L << 3) + 24 >> 2) + q]);
      var X = z[((L << 3) + 84 >> 2) + q] * z[x >> 2] + z[((L << 3) + 88 >> 2) + q] * z[V >> 2];
      if (X > $) {
        break;
      }
      var U = X > O, ka = U ? L : Z, Ja = U ? X : O, L = L + 1, O = Ja, Z = ka;
    } else {
      var gb = Z + 1, Ta = gb < ba ? gb : 0, ya = (Z << 3) + e + 20, Na = v[ya >> 2], oa = v[ya + 4 >> 2], ga = (E[0] = Na, F[0]), ia = (E[0] = oa, F[0]), za = (Ta << 3) + e + 20, Ra = v[za >> 2], va = v[za + 4 >> 2], ta = (E[0] = Ra, F[0]), Aa = (E[0] = va, F[0]);
      if (1.1920928955078125e-7 > O) {
        m[t] = 1;
        m[r + 14] = 1;
        var Oa = (Z << 3) + e + 84, qa = c + 40, ea = Oa;
        p = ea >> 2;
        var ca = m[p], fa = Oa + 4;
        n = fa >> 2;
        var Ka = m[n], la = qa;
        o = la >> 2;
        m[o] = ca;
        var wa = qa + 4;
        l = wa >> 2;
        m[l] = Ka;
        var xa = c + 48;
        J(y, ga + ta, ia + Aa);
        Xf(B, .5, z[y >> 2], z[y + 4 >> 2]);
        var Ua = B, ma = xa, ja = Ua;
        k = ja >> 2;
        var Pa = m[k], Fa = Ua + 4;
        j = Fa >> 2;
        var Ea = m[j], Sa = ma;
        i = Sa >> 2;
        m[i] = Pa;
        var Ga = ma + 4;
        h = Ga >> 2;
        m[h] = Ea;
        var La = T, na = c, Ca = m[La + 4 >> 2];
        m[na >> 2] = m[La >> 2];
        m[na + 4 >> 2] = Ca;
      } else {
        J(w, P - ga, R - ia);
        J(D, ta - ga, Aa - ia);
        var ua = z[w >> 2] * z[D >> 2] + z[w + 4 >> 2] * z[D + 4 >> 2];
        J(G, P - ta, R - Aa);
        J(M, ga - ta, ia - Aa);
        if (0 < ua) {
          if (0 < z[G >> 2] * z[M >> 2] + z[G + 4 >> 2] * z[M + 4 >> 2]) {
            J(Q, ga + ta, ia + Aa);
            Xf(N, .5, z[Q >> 2], z[Q + 4 >> 2]);
            J(Y, P - z[N >> 2], R - z[N + 4 >> 2]);
            var sa = (Z << 3) + e + 84;
            if (z[Y >> 2] * z[sa >> 2] + z[Y + 4 >> 2] * z[((Z << 3) + 88 >> 2) + q] > $) {
              break;
            }
            m[t] = 1;
            m[r + 14] = 1;
            var aa = sa, Ha = c + 40, hb = m[aa + 4 >> 2];
            m[Ha >> 2] = m[aa >> 2];
            m[Ha + 4 >> 2] = hb;
            var ib = N, jb = c + 48, ub = m[ib + 4 >> 2];
            m[jb >> 2] = m[ib >> 2];
            m[jb + 4 >> 2] = ub;
            var kb = T, wb = c, lb = m[kb + 4 >> 2];
            m[wb >> 2] = m[kb >> 2];
            m[wb + 4 >> 2] = lb;
          } else {
            if (Yf(P, R, ta, Aa) > $ * $) {
              break;
            }
            m[t] = 1;
            m[r + 14] = 1;
            var mb = c + 40;
            J(S, P - ta, R - Aa);
            var Da = S, tb = mb, ea = Da;
            p = ea >> 2;
            var Xa = m[p], fa = Da + 4;
            n = fa >> 2;
            var nb = m[n], la = tb;
            o = la >> 2;
            m[o] = Xa;
            wa = tb + 4;
            l = wa >> 2;
            m[l] = nb;
            Zf(mb);
            var Ya = c + 48, cb = Ya;
            m[cb >> 2] = Ra;
            var db = Ya + 4;
            m[db >> 2] = va;
            var yb = T, ob = c, ja = yb;
            k = ja >> 2;
            var qb = m[k], Fa = yb + 4;
            j = Fa >> 2;
            var eb = m[j], Sa = ob;
            i = Sa >> 2;
            m[i] = qb;
            Ga = ob + 4;
            h = Ga >> 2;
            m[h] = eb;
          }
        } else {
          if (Yf(P, R, ga, ia) > $ * $) {
            break;
          }
          m[t] = 1;
          m[r + 14] = 1;
          var Za = c + 40;
          J(I, P - ga, R - ia);
          var Ma = I, rb = Za, ea = Ma;
          p = ea >> 2;
          var fb = m[p], fa = Ma + 4;
          n = fa >> 2;
          var Va = m[n], la = rb;
          o = la >> 2;
          m[o] = fb;
          wa = rb + 4;
          l = wa >> 2;
          m[l] = Va;
          Zf(Za);
          var zb = c + 48, cb = zb;
          m[cb >> 2] = Na;
          db = zb + 4;
          m[db >> 2] = oa;
          var vb = T, pb = c, ja = vb;
          k = ja >> 2;
          var xb = m[k], Fa = vb + 4;
          j = Fa >> 2;
          var $a = m[j], Sa = pb;
          i = Sa >> 2;
          m[i] = xb;
          Ga = pb + 4;
          h = Ga >> 2;
          m[h] = $a;
        }
      }
      m[r + 4] = 0;
      break;
    }
  }
  a = s;
}

Vf.X = 1;

function Wf(c, e, d, f) {
  var d = d - z[e >> 2], f = f - z[e + 4 >> 2], g = z[e + 12 >> 2], e = z[e + 8 >> 2];
  J(c, g * d + e * f, d * -e + g * f);
}

function Xf(c, e, d, f) {
  J(c, d * e, f * e);
}

function Yf(c, e, d, f) {
  var g = a;
  a += 8;
  J(g, c - d, e - f);
  c = z[g >> 2];
  e = z[g + 4 >> 2];
  a = g;
  return c * c + e * e;
}

function Zf(c) {
  var e = z[c >> 2], d = c + 4, f = z[d >> 2], g = $f(e * e + f * f);
  1.1920928955078125e-7 > g || (g = 1 / g, z[c >> 2] = e * g, z[d >> 2] = f * g);
}

function lf() {
  var c, e = a;
  a += 104412;
  var d = e + 8, f = e + 103036;
  c = e + 103088;
  var g = e + 103136, h = e + 103144, i = e + 103152, j = e + 103304, k = e + 103312, l = e + 103320, o = e + 103328, n = e + 103336, p = e + 103388;
  J(e, 0, -10);
  ag(d, e);
  var t = d + 102976, q = 0 == (b[t] & 1);
  a : do {
    if (!q) {
      b[t] = 0;
      var r = m[d + 102952 >> 2];
      if (0 != r) {
        for (;;) {
          if (bg(r, 1), r = m[r + 96 >> 2], 0 == r) {
            break a;
          }
        }
      }
    }
  } while (0);
  rf(f);
  f = cg(d, f);
  pf(c);
  J(g, -40, 0);
  J(h, 40, 0);
  t = c + 12;
  q = m[g + 4 >> 2];
  m[t >> 2] = m[g >> 2];
  m[t + 4 >> 2] = q;
  g = c + 20;
  t = m[h + 4 >> 2];
  m[g >> 2] = m[h >> 2];
  m[g + 4 >> 2] = t;
  b[c + 44] = 0;
  b[c + 45] = 0;
  dg(f, c, 0);
  mf(i);
  m[i + 148 >> 2] = 4;
  Xe(i + 20, -.5, -.5);
  Xe(i + 28, .5, -.5);
  Xe(i + 36, .5, .5);
  Xe(i + 44, -.5, .5);
  Xe(i + 84, 0, -1);
  Xe(i + 92, 1, 0);
  Xe(i + 100, 0, 1);
  Xe(i + 108, -1, 0);
  We(i + 12);
  J(j, -7, .75);
  J(l, .5625, 1);
  J(o, 1.125, 0);
  c = k >> 2;
  h = n + 4;
  for (g = 0; ; ) {
    if (40 <= g) {
      var s = 0;
      break;
    }
    f = m[j + 4 >> 2];
    m[c] = m[j >> 2];
    m[c + 1] = f;
    for (f = g; 40 > f; ) {
      rf(n);
      m[n >> 2] = 2;
      t = m[c + 1];
      m[h >> 2] = m[c];
      m[h + 4 >> 2] = t;
      t = cg(d, n);
      dg(t, i, 5);
      Ve(k, o);
      f += 1;
    }
    Ve(j, l);
    g += 1;
  }
  for (;;) {
    if (64 <= s) {
      var u = 0;
      break;
    }
    eg(d);
    s += 1;
  }
  for (; 256 > u; ) {
    i = fg();
    eg(d);
    i = fg() - i;
    m[p + (u << 2) >> 2] = i;
    i = 1e3 * (i / 1e3);
    i = (wd = a, a += 8, z[oe >> 2] = i, m[wd >> 2] = m[oe >> 2], m[wd + 4 >> 2] = m[oe + 4 >> 2], wd);
    gg(i);
    u += 1;
  }
  u = m[hg >> 2];
  b[ig] = Te(10);
  -1 == jg(u, ig, 1) && u in kg && (kg[u].error = pa);
  for (i = u = 0; ; ) {
    var x = m[p + (i << 2) >> 2] + u, i = i + 1;
    if (256 == i) {
      break;
    } else {
      u = x;
    }
  }
  p = (wd = a, a += 8, z[oe >> 2] = 1e3 * (.00390625 * x / 1e3), m[wd >> 2] = m[oe >> 2], m[wd + 4 >> 2] = m[oe + 4 >> 2], wd);
  gg(p);
  lg(d);
  a = e;
}

lf.X = 1;

function mg(c, e, d, f, g) {
  var h, i, j, k = a;
  a += 144;
  var l = k + 8, o = k + 16, n = k + 24, p = k + 32, t = k + 40, q = k + 48, r = k + 56, s = k + 64, u = k + 72, x = k + 80, B = k + 88, y = k + 96, w = k + 104, D = k + 112, G = k + 120, M = k + 128, I = k + 136;
  j = c + 60 >> 2;
  m[j] = 0;
  var S = f + 12;
  Uf(l, g, z[S >> 2], z[f + 16 >> 2]);
  Wf(k, d, z[l >> 2], z[l + 4 >> 2]);
  var g = e + 12, d = v[g >> 2], g = v[g + 4 >> 2], l = (E[0] = d, F[0]), N = (E[0] = g, F[0]), Q = e + 20, Y = v[Q >> 2], Q = v[Q + 4 >> 2], T = (E[0] = Y, F[0]), $ = (E[0] = Q, F[0]);
  J(o, T - l, $ - N);
  var ba = z[k >> 2], P = z[k + 4 >> 2];
  J(n, T - ba, $ - P);
  var R = z[o >> 2], o = z[o + 4 >> 2], n = R * z[n >> 2] + o * z[n + 4 >> 2];
  J(p, ba - l, P - N);
  var p = R * z[p >> 2] + o * z[p + 4 >> 2], f = z[e + 8 >> 2] + z[f + 8 >> 2], V = 0 < p;
  do {
    if (V) {
      if (0 < n) {
        var L = R * R + o * o;
        0 < L || K(H.dc, 127, H.Za, H.Ob);
        L = 1 / L;
        Xf(w, n, l, N);
        Xf(D, p, T, $);
        J(y, z[w >> 2] + z[D >> 2], z[w + 4 >> 2] + z[D + 4 >> 2]);
        Xf(B, L, z[y >> 2], z[y + 4 >> 2]);
        J(G, ba - z[B >> 2], P - z[B + 4 >> 2]);
        L = z[G >> 2];
        i = z[G + 4 >> 2];
        L * L + i * i > f * f || (J(M, -o, R), J(I, ba - l, P - N), L = z[M >> 2], i = z[M + 4 >> 2], 0 > L * z[I >> 2] + i * z[I + 4 >> 2] && Xe(M, -L, -i), Zf(M), m[j] = 1, m[c + 56 >> 2] = 1, h = M, L = c + 40, i = h, i >>= 2, i = m[i], h += 4, h >>= 2, h = m[h], m[L >> 2] = i, m[L + 4 >> 2] = h, L = c + 48, m[L >> 2] = d, m[L + 4 >> 2] = g, L = c + 16, m[L >> 2] = 0, i = L, b[L] = 0, b[i + 1] = 0, b[i + 2] = 1, b[i + 3] = 0, L = S, i = c, h = m[L + 4 >> 2], m[i >> 2] = m[L >> 2], m[i + 4 >> 2] = h);
      } else {
        L = (E[0] = Y, F[0]);
        i = (E[0] = Q, F[0]);
        J(s, ba - L, P - i);
        h = z[s >> 2];
        var O = z[s + 4 >> 2];
        if (h * h + O * O <= f * f) {
          if (0 != (b[e + 45] & 1) && (h = O = e + 36, O += 4, O = m[O >> 2], h = (E[0] = m[h >> 2], F[0]), O = (E[0] = O, F[0]), J(u, h - L, O - i), J(x, ba - L, P - i), 0 < z[u >> 2] * z[x >> 2] + z[u + 4 >> 2] * z[x + 4 >> 2])) {
            break;
          }
          m[j] = 1;
          m[c + 56 >> 2] = 0;
          We(c + 40);
          i = L = c + 48;
          i >>= 2;
          m[i] = Y;
          h = L + 4;
          h >>= 2;
          m[h] = Q;
          L = c + 16;
          m[L >> 2] = 0;
          i = L;
          b[L] = 1;
          b[i + 1] = 0;
          b[i + 2] = 0;
          b[i + 3] = 0;
          i = S;
          h = c;
          L = i;
          i += 4;
          O = m[i >> 2];
          i = h;
          m[i >> 2] = m[L >> 2];
          L = h + 4;
          m[L >> 2] = O;
        }
      }
    } else {
      if (L = (E[0] = d, F[0]), i = (E[0] = g, F[0]), J(t, ba - L, P - i), h = z[t >> 2], O = z[t + 4 >> 2], h * h + O * O <= f * f) {
        if (0 != (b[e + 44] & 1) && (h = O = e + 28, O += 4, O = m[O >> 2], h = (E[0] = m[h >> 2], F[0]), O = (E[0] = O, F[0]), J(q, L - h, i - O), J(r, L - ba, i - P), 0 < z[q >> 2] * z[r >> 2] + z[q + 4 >> 2] * z[r + 4 >> 2])) {
          break;
        }
        m[j] = 1;
        m[c + 56 >> 2] = 0;
        We(c + 40);
        i = L = c + 48;
        i >>= 2;
        m[i] = d;
        h = L + 4;
        h >>= 2;
        m[h] = g;
        L = c + 16;
        m[L >> 2] = 0;
        i = L;
        b[L] = 0;
        b[i + 1] = 0;
        b[i + 2] = 0;
        b[i + 3] = 0;
        i = S;
        h = c;
        L = i;
        L = m[L >> 2];
        i += 4;
        O = m[i >> 2];
        i = h;
        m[i >> 2] = L;
        L = h + 4;
        m[L >> 2] = O;
      }
    }
  } while (0);
  a = k;
}

mg.X = 1;

function ng(c, e, d, f, g, h) {
  var i, j, k, l, o, n, p, t, q, r, s, u, x, B, y, w, D, G, M, I, S, N, Q, Y, T, $, ba, P, R, V, L, O, Z, X, U, ka, Ja, gb, Ta, ya, Na, oa, ga, ia, za, Ra, va, ta, Aa, Oa, qa, ea, ca, fa, Ka, la, wa, xa, Ua, ma, ja, Pa, Fa, Ea, Sa, Ga, La, na, Ca, ua = g >> 2, sa = c >> 2, aa = a;
  a += 488;
  var Ha, hb = aa + 16, ib = aa + 24, jb = aa + 32, ub = aa + 40, kb = aa + 48, wb = aa + 56, lb = aa + 64, mb = aa + 72, Da = aa + 80, tb = aa + 88, Xa = aa + 96, nb = aa + 104, Ya = aa + 112, cb = aa + 120, db = aa + 128, yb = aa + 136, ob = aa + 144, qb = aa + 152, eb = aa + 160, Za = aa + 168, Ma = aa + 176, rb = aa + 184, fb = aa + 192, Va = aa + 200, zb = aa + 208, vb = aa + 216, pb = aa + 224, xb = aa + 232, $a = aa + 240, Gb = aa + 248, Ab = aa + 256, sb = aa + 264, Bb = aa + 272, Cb = aa + 280, Db = aa + 288, bb = aa + 296, Eb = aa + 304;
  Ca = Eb >> 2;
  var Ob = aa + 316;
  na = Ob >> 2;
  var Fb = aa + 328, Wa = aa + 352;
  La = Wa >> 2;
  var Qb = aa + 408, Sb = aa + 416, Xb = aa + 424, Tb = aa + 448;
  Ga = Tb >> 2;
  var Jb = aa + 472, ac = aa + 480, Vb = c + 132, bc = a;
  a += 16;
  var lc = bc + 8, Pc = aa + 8, Xc = f + 8, Dc = f + 12, mc = z[Xc >> 2], nc = z[Dc >> 2], Qc = z[h + 8 >> 2], Yc = z[h + 12 >> 2];
  z[bc >> 2] = nc * Qc - mc * Yc;
  z[bc + 4 >> 2] = nc * Yc + mc * Qc;
  var Zc = m[bc + 4 >> 2];
  m[Pc >> 2] = m[bc >> 2];
  m[Pc + 4 >> 2] = Zc;
  J(lc, z[h >> 2] - z[f >> 2], z[h + 4 >> 2] - z[f + 4 >> 2]);
  Wg(aa, z[Xc >> 2], z[Dc >> 2], z[lc >> 2], z[lc + 4 >> 2]);
  a = bc;
  Sa = Vb >> 2;
  Ea = aa >> 2;
  m[Sa] = m[Ea];
  m[Sa + 1] = m[Ea + 1];
  m[Sa + 2] = m[Ea + 2];
  m[Sa + 3] = m[Ea + 3];
  var oc = c + 148;
  Uf(hb, Vb, z[ua + 3], z[ua + 4]);
  var hc = m[hb + 4 >> 2];
  m[oc >> 2] = m[hb >> 2];
  m[oc + 4 >> 2] = hc;
  var pc = c + 156, gd = d + 28, hd = m[gd + 4 >> 2];
  m[pc >> 2] = m[gd >> 2];
  m[pc + 4 >> 2] = hd;
  var cc = c + 164, qc = d + 12, ic = m[qc >> 2], Ec = m[qc + 4 >> 2];
  m[cc >> 2] = ic;
  m[cc + 4 >> 2] = Ec;
  var Yb = c + 172, vc = d + 20, wc = m[vc >> 2], id = m[vc + 4 >> 2];
  m[Yb >> 2] = wc;
  m[Yb + 4 >> 2] = id;
  var jc = c + 180, $c = d + 36, xc = m[$c + 4 >> 2];
  m[jc >> 2] = m[$c >> 2];
  m[jc + 4 >> 2] = xc;
  var pd = b[d + 44] & 1, yc = 0 != pd, jd = b[d + 45], kd = 0 != (jd & 1), ad = (E[0] = wc, F[0]), zc = c + 176, ce = (E[0] = id, F[0]), Ld = (E[0] = ic, F[0]), Ed = c + 168, Fc = (E[0] = Ec, F[0]);
  J(ib, ad - Ld, ce - Fc);
  Zf(ib);
  var Lb = c + 196, qd = z[ib + 4 >> 2], de = z[ib >> 2];
  Xe(Lb, qd, -de);
  Fa = oc >> 2;
  var ue = z[Fa];
  Pa = c + 152 >> 2;
  J(jb, ue - z[cc >> 2], z[Pa] - z[Ed >> 2]);
  ja = Lb >> 2;
  var Ah = z[ja];
  ma = c + 200 >> 2;
  var Md = Ah * z[jb >> 2] + z[ma] * z[jb + 4 >> 2];
  if (yc) {
    var og = c + 160;
    J(ub, z[cc >> 2] - z[pc >> 2], z[Ed >> 2] - z[og >> 2]);
    Zf(ub);
    var pg = c + 188, qg = z[ub + 4 >> 2], rg = z[ub >> 2];
    Xe(pg, qg, -rg);
    var Ye = 0 <= rg * qd - qg * de;
    J(kb, z[Fa] - z[pc >> 2], z[Pa] - z[og >> 2]);
    var Nd = Ye, ee = z[pg >> 2] * z[kb >> 2] + z[sa + 48] * z[kb + 4 >> 2];
  } else {
    ee = Nd = 0;
  }
  a : do {
    if (kd) {
      J(wb, z[jc >> 2] - z[Yb >> 2], z[sa + 46] - z[zc >> 2]);
      Zf(wb);
      var Ze = c + 204, sg = z[wb + 4 >> 2], tg = z[wb >> 2];
      Xe(Ze, sg, -tg);
      var Qa = 0 < de * sg - qd * tg;
      J(lb, z[Fa] - z[Yb >> 2], z[Pa] - z[zc >> 2]);
      Ua = Ze >> 2;
      var Pb = z[Ua];
      xa = c + 208 >> 2;
      var fe = Pb * z[lb >> 2] + z[xa] * z[lb + 4 >> 2];
      if (0 == (pd & jd)) {
        var ge = fe, ve = Qa;
        Ha = 31;
      } else {
        if (Nd & Qa) {
          var he = 0 > ee & 0 > Md;
          do {
            if (he) {
              var Od = 0 <= fe;
              b[c + 248] = Od;
              var Pd = c + 212;
              if (Od) {
                var Qd = Pd;
              } else {
                Xg(mb, z[ja], z[ma]);
                var tf = mb, $e = Pd, Gc = tf;
                wa = Gc >> 2;
                var ug = m[wa], bd = tf + 4;
                la = bd >> 2;
                var vg = m[la], cd = $e;
                Ka = cd >> 2;
                m[Ka] = ug;
                var dd = $e + 4;
                fa = dd >> 2;
                m[fa] = vg;
                var wg = c + 228;
                Xg(Da, z[ja], z[ma]);
                var uf = Da, vf = wg, Hc = uf;
                ca = Hc >> 2;
                var Bh = m[ca], Mb = uf + 4;
                ea = Mb >> 2;
                var Ic = m[ea], we = vf;
                qa = we >> 2;
                m[qa] = Bh;
                var xe = vf + 4;
                Oa = xe >> 2;
                m[Oa] = Ic;
                var Ch = c + 236;
                Xg(tb, z[ja], z[ma]);
                var xg = tb, yg = Ch, ld = xg;
                Aa = ld >> 2;
                var Dh = m[Aa], Ac = xg + 4;
                ta = Ac >> 2;
                var ye = m[ta], Rd = yg;
                va = Rd >> 2;
                m[va] = Dh;
                var Sd = yg + 4;
                Ra = Sd >> 2;
                m[Ra] = ye;
                Ha = 58;
                break a;
              }
            } else {
              b[c + 248] = 1, Qd = c + 212;
            }
          } while (0);
          var Rc = Lb, wf = Qd, Jc = Rc;
          za = Jc >> 2;
          var zg = m[za], Kc = Rc + 4;
          ia = Kc >> 2;
          var Ag = m[ia], rc = wf;
          ga = rc >> 2;
          m[ga] = zg;
          var sc = wf + 4;
          oa = sc >> 2;
          m[oa] = Ag;
          var xf = c + 188, Td = c + 228, rd = xf;
          Na = rd >> 2;
          var ze = m[Na], sd = xf + 4;
          ya = sd >> 2;
          var Eh = m[ya], Hc = Td;
          ca = Hc >> 2;
          m[ca] = ze;
          Mb = Td + 4;
          ea = Mb >> 2;
          m[ea] = Eh;
          var Ae = Ze, Be = c + 236, Fd = Ae;
          Ta = Fd >> 2;
          var Bg = m[Ta], Gd = Ae + 4;
          gb = Gd >> 2;
          var td = m[gb], tc = Be;
          Ja = tc >> 2;
          m[Ja] = Bg;
          var Ud = Be + 4;
          ka = Ud >> 2;
          m[ka] = td;
        } else {
          if (Nd) {
            var Cg = 0 > ee;
            do {
              if (Cg) {
                if (0 > Md) {
                  b[c + 248] = 0;
                  var yf = c + 212;
                } else {
                  var zf = 0 <= fe;
                  b[c + 248] = zf;
                  var Af = c + 212;
                  if (zf) {
                    var Bf = Af;
                    break;
                  } else {
                    yf = Af;
                  }
                }
                Xg(Xa, z[ja], z[ma]);
                var af = Xa, Cf = yf, Nb = af;
                U = Nb >> 2;
                var bf = m[U], Kb = af + 4;
                X = Kb >> 2;
                var Fh = m[X], Lc = Cf;
                Z = Lc >> 2;
                m[Z] = bf;
                var Mc = Cf + 4;
                O = Mc >> 2;
                m[O] = Fh;
                var Gh = c + 228;
                Xg(nb, z[Ua], z[xa]);
                var Vd = nb, Wd = Gh, Sc = Vd;
                L = Sc >> 2;
                var Dg = m[L], Nc = Vd + 4;
                V = Nc >> 2;
                var Eg = m[V], ud = Wd;
                R = ud >> 2;
                m[R] = Dg;
                var zd = Wd + 4;
                P = zd >> 2;
                m[P] = Eg;
                var Hh = c + 236;
                Xg(Ya, z[ja], z[ma]);
                var Fg = Ya, Gg = Hh, Hd = Fg;
                ba = Hd >> 2;
                var cf = m[ba], Xd = Fg + 4;
                $ = Xd >> 2;
                var Ih = m[$];
                m[Gg >> 2] = cf;
                m[Gg + 4 >> 2] = Ih;
                Ha = 58;
                break a;
              } else {
                b[c + 248] = 1, Bf = c + 212;
              }
            } while (0);
            var ie = Lb, Ce = Bf, Jc = ie;
            za = Jc >> 2;
            var df = m[za], Kc = ie + 4;
            ia = Kc >> 2;
            var ef = m[ia], rc = Ce;
            ga = rc >> 2;
            m[ga] = df;
            sc = Ce + 4;
            oa = sc >> 2;
            m[oa] = ef;
            var De = c + 188, Hg = c + 228, rd = De;
            Na = rd >> 2;
            var Jh = m[Na], sd = De + 4;
            ya = sd >> 2;
            var Ee = m[ya], Hc = Hg;
            ca = Hc >> 2;
            m[ca] = Jh;
            Mb = Hg + 4;
            ea = Mb >> 2;
            m[ea] = Ee;
            var Ig = c + 236, je = ie, ff = m[je >> 2], ke = ie + 4, gf = m[ke >> 2], Ad = Ig;
            T = Ad >> 2;
            m[T] = ff;
            var Bd = Ig + 4;
            Y = Bd >> 2;
            m[Y] = gf;
          } else {
            if (Qa) {
              var Fe = 0 > fe;
              do {
                if (Fe) {
                  if (0 > ee) {
                    b[c + 248] = 0;
                    var Jg = c + 212;
                  } else {
                    var Ge = 0 <= Md;
                    b[c + 248] = Ge;
                    var He = c + 212;
                    if (Ge) {
                      var Ie = He;
                      break;
                    } else {
                      Jg = He;
                    }
                  }
                  Xg(cb, z[ja], z[ma]);
                  var Je = cb, Kg = Jg, Nb = Je;
                  U = Nb >> 2;
                  var Kh = m[U], Kb = Je + 4;
                  X = Kb >> 2;
                  var hf = m[X], Lc = Kg;
                  Z = Lc >> 2;
                  m[Z] = Kh;
                  Mc = Kg + 4;
                  O = Mc >> 2;
                  m[O] = hf;
                  var jf = c + 228;
                  Xg(db, z[ja], z[ma]);
                  var Ke = db, Le = jf, Sc = Ke;
                  L = Sc >> 2;
                  var Lh = m[L], Nc = Ke + 4;
                  V = Nc >> 2;
                  var Mh = m[V], ud = Le;
                  R = ud >> 2;
                  m[R] = Lh;
                  zd = Le + 4;
                  P = zd >> 2;
                  m[P] = Mh;
                  var Lg = c + 236;
                  Xg(yb, z[sa + 47], z[sa + 48]);
                  var Mg = yb, Df = Lg, Yd = Mg;
                  Q = Yd >> 2;
                  var Ng = m[Q], Me = Mg + 4;
                  N = Me >> 2;
                  var Ro = m[N], Nh = Df;
                  m[Nh >> 2] = Ng;
                  var Oh = Df + 4;
                  m[Oh >> 2] = Ro;
                  Ha = 58;
                  break a;
                } else {
                  b[c + 248] = 1, Ie = c + 212;
                }
              } while (0);
              var Og = Lb, Ej = Ie, Jc = Og;
              za = Jc >> 2;
              var So = m[za], Kc = Og + 4;
              ia = Kc >> 2;
              var To = m[ia], rc = Ej;
              ga = rc >> 2;
              m[ga] = So;
              sc = Ej + 4;
              oa = sc >> 2;
              m[oa] = To;
              var Fj = c + 228, Ph = Og, Uo = m[Ph >> 2], Qh = Og + 4, Vo = m[Qh >> 2], Ne = Fj;
              S = Ne >> 2;
              m[S] = Uo;
              var Oe = Fj + 4;
              I = Oe >> 2;
              m[I] = Vo;
              var Gj = Ze, Hj = c + 236, ud = Gj;
              R = ud >> 2;
              var Wo = m[R], zd = Gj + 4;
              P = zd >> 2;
              var Xo = m[P], Ef = Hj;
              M = Ef >> 2;
              m[M] = Wo;
              var Ff = Hj + 4;
              G = Ff >> 2;
              m[G] = Xo;
            } else {
              var Yo = 0 > ee | 0 > Md;
              do {
                if (Yo) {
                  b[c + 248] = 0;
                  var Ij = c + 212;
                } else {
                  var Jj = 0 <= fe;
                  b[c + 248] = Jj;
                  var Kj = c + 212;
                  if (Jj) {
                    var Lj = Lb, Mj = Kj, Tc = Lj;
                    D = Tc >> 2;
                    var Rh = v[D], Uc = Lj + 4;
                    w = Uc >> 2;
                    var Sh = v[w], Nb = Mj;
                    U = Nb >> 2;
                    m[U] = Rh;
                    Kb = Mj + 4;
                    X = Kb >> 2;
                    m[X] = Sh;
                    var Nj = c + 228, Gf = Nj;
                    y = Gf >> 2;
                    m[y] = Rh;
                    var Hf = Nj + 4;
                    B = Hf >> 2;
                    m[B] = Sh;
                    var Oj = c + 236, If = Oj;
                    x = If >> 2;
                    m[x] = Rh;
                    var Jf = Oj + 4;
                    u = Jf >> 2;
                    m[u] = Sh;
                    Ha = 58;
                    break a;
                  } else {
                    Ij = Kj;
                  }
                }
              } while (0);
              Xg(ob, z[ja], z[ma]);
              var Pj = ob, Qj = Ij, Nb = Pj;
              U = Nb >> 2;
              var Zo = m[U], Kb = Pj + 4;
              X = Kb >> 2;
              var $o = m[X], Lc = Qj;
              Z = Lc >> 2;
              m[Z] = Zo;
              Mc = Qj + 4;
              O = Mc >> 2;
              m[O] = $o;
              var ap = c + 228;
              Xg(qb, z[Ua], z[xa]);
              var Rj = qb, Sj = ap, Sc = Rj;
              L = Sc >> 2;
              var bp = m[L], Nc = Rj + 4;
              V = Nc >> 2;
              var cp = m[V], ud = Sj;
              R = ud >> 2;
              m[R] = bp;
              zd = Sj + 4;
              P = zd >> 2;
              m[P] = cp;
              var dp = c + 236;
              Xg(eb, z[sa + 47], z[sa + 48]);
              var Tj = eb, Uj = dp, Yd = Tj;
              Q = Yd >> 2;
              var ep = m[Q], Me = Tj + 4;
              N = Me >> 2;
              var fp = m[N], Nh = Uj;
              m[Nh >> 2] = ep;
              Oh = Uj + 4;
              m[Oh >> 2] = fp;
            }
          }
        }
        Ha = 58;
      }
    } else {
      ve = ge = 0, Ha = 31;
    }
  } while (0);
  a : do {
    if (31 == Ha) {
      if (yc) {
        var Vj = 0 <= ee;
        if (Nd) {
          do {
            if (Vj) {
              b[c + 248] = 1;
              var Wj = c + 212;
            } else {
              var Xj = 0 <= Md;
              b[c + 248] = Xj;
              var Yj = c + 212;
              if (Xj) {
                Wj = Yj;
              } else {
                Xg(Ma, z[ja], z[ma]);
                var Zj = Ma, $j = Yj, Gc = Zj;
                wa = Gc >> 2;
                var gp = m[wa], bd = Zj + 4;
                la = bd >> 2;
                var hp = m[la], cd = $j;
                Ka = cd >> 2;
                m[Ka] = gp;
                dd = $j + 4;
                fa = dd >> 2;
                m[fa] = hp;
                var ak = Lb, bk = c + 228, Pe = ak;
                s = Pe >> 2;
                var ck = m[s], Qe = ak + 4;
                r = Qe >> 2;
                var ip = m[r], Sc = bk;
                L = Sc >> 2;
                m[L] = ck;
                Nc = bk + 4;
                V = Nc >> 2;
                m[V] = ip;
                var jp = c + 236, kp = (E[0] = ck, F[0]);
                Xg(rb, kp, z[ma]);
                var dk = rb, ek = jp, Kf = dk;
                q = Kf >> 2;
                var lp = m[q], Lf = dk + 4;
                t = Lf >> 2;
                var mp = m[t], Yd = ek;
                Q = Yd >> 2;
                m[Q] = lp;
                Me = ek + 4;
                N = Me >> 2;
                m[N] = mp;
                break a;
              }
            }
          } while (0);
          var fk = Lb, gk = Wj, Jc = fk;
          za = Jc >> 2;
          var np = m[za], Kc = fk + 4;
          ia = Kc >> 2;
          var op = m[ia], rc = gk;
          ga = rc >> 2;
          m[ga] = np;
          sc = gk + 4;
          oa = sc >> 2;
          m[oa] = op;
          var hk = c + 188, ik = c + 228, rd = hk;
          Na = rd >> 2;
          var pp = m[Na], sd = hk + 4;
          ya = sd >> 2;
          var qp = m[ya], Hc = ik;
          ca = Hc >> 2;
          m[ca] = pp;
          Mb = ik + 4;
          ea = Mb >> 2;
          m[ea] = qp;
          var rp = c + 236;
          Xg(Za, z[ja], z[ma]);
          var jk = Za, kk = rp, Ad = jk;
          T = Ad >> 2;
          var sp = m[T], Bd = jk + 4;
          Y = Bd >> 2;
          var tp = m[Y], ld = kk;
          Aa = ld >> 2;
          m[Aa] = sp;
          Ac = kk + 4;
          ta = Ac >> 2;
          m[ta] = tp;
        } else {
          do {
            if (Vj) {
              var lk = 0 <= Md;
              b[c + 248] = lk;
              var mk = c + 212;
              if (lk) {
                var nk = Lb, ok = mk, Tc = nk;
                D = Tc >> 2;
                var Th = v[D], Uc = nk + 4;
                w = Uc >> 2;
                var pk = v[w], Nb = ok;
                U = Nb >> 2;
                m[U] = Th;
                Kb = ok + 4;
                X = Kb >> 2;
                m[X] = pk;
                var qk = c + 228, Gf = qk;
                y = Gf >> 2;
                m[y] = Th;
                Hf = qk + 4;
                B = Hf >> 2;
                m[B] = pk;
                var up = c + 236, vp = (E[0] = Th, F[0]);
                Xg(fb, vp, z[ma]);
                var rk = fb, sk = up, ud = rk;
                R = ud >> 2;
                var wp = m[R], zd = rk + 4;
                P = zd >> 2;
                var xp = m[P], Ef = sk;
                M = Ef >> 2;
                m[M] = wp;
                Ff = sk + 4;
                G = Ff >> 2;
                m[G] = xp;
                break a;
              } else {
                var tk = mk;
              }
            } else {
              b[c + 248] = 0, tk = c + 212;
            }
          } while (0);
          Xg(Va, z[ja], z[ma]);
          var uk = Va, vk = tk, Nb = uk;
          U = Nb >> 2;
          var yp = m[U], Kb = uk + 4;
          X = Kb >> 2;
          var zp = m[X], Lc = vk;
          Z = Lc >> 2;
          m[Z] = yp;
          Mc = vk + 4;
          O = Mc >> 2;
          m[O] = zp;
          var wk = Lb, xk = c + 228, Ne = wk;
          S = Ne >> 2;
          var Ap = m[S], Oe = wk + 4;
          I = Oe >> 2;
          var Bp = m[I], Uh = xk;
          m[Uh >> 2] = Ap;
          var Vh = xk + 4;
          m[Vh >> 2] = Bp;
          var Cp = c + 236;
          Xg(zb, z[sa + 47], z[sa + 48]);
          var yk = zb, zk = Cp, ld = yk;
          Aa = ld >> 2;
          var Dp = m[Aa], Ac = yk + 4;
          ta = Ac >> 2;
          var Ep = m[ta], Rd = zk;
          va = Rd >> 2;
          m[va] = Dp;
          Sd = zk + 4;
          Ra = Sd >> 2;
          m[Ra] = Ep;
        }
      } else {
        var Pg = 0 <= Md;
        if (kd) {
          if (ve) {
            do {
              if (Pg) {
                b[c + 248] = 1;
                var Ak = c + 212;
              } else {
                var Bk = 0 <= ge;
                b[c + 248] = Bk;
                var Ck = c + 212;
                if (Bk) {
                  Ak = Ck;
                } else {
                  Xg(pb, z[ja], z[ma]);
                  var Dk = pb, Ek = Ck, Gc = Dk;
                  wa = Gc >> 2;
                  var Fp = m[wa], bd = Dk + 4;
                  la = bd >> 2;
                  var Gp = m[la], cd = Ek;
                  Ka = cd >> 2;
                  m[Ka] = Fp;
                  dd = Ek + 4;
                  fa = dd >> 2;
                  m[fa] = Gp;
                  var Hp = c + 228;
                  Xg(xb, z[ja], z[ma]);
                  var Fk = xb, Gk = Hp, Hc = Fk;
                  ca = Hc >> 2;
                  var Ip = m[ca], Mb = Fk + 4;
                  ea = Mb >> 2;
                  var Jp = m[ea], we = Gk;
                  qa = we >> 2;
                  m[qa] = Ip;
                  xe = Gk + 4;
                  Oa = xe >> 2;
                  m[Oa] = Jp;
                  var Hk = Lb, Ik = c + 236, tc = Hk;
                  Ja = tc >> 2;
                  var Kp = m[Ja], Ud = Hk + 4;
                  ka = Ud >> 2;
                  var Lp = m[ka], Hd = Ik;
                  ba = Hd >> 2;
                  m[ba] = Kp;
                  Xd = Ik + 4;
                  $ = Xd >> 2;
                  m[$] = Lp;
                  break a;
                }
              }
            } while (0);
            var Jk = Lb, Kk = Ak, Jc = Jk;
            za = Jc >> 2;
            var Mp = m[za], Kc = Jk + 4;
            ia = Kc >> 2;
            var Np = m[ia], rc = Kk;
            ga = rc >> 2;
            m[ga] = Mp;
            sc = Kk + 4;
            oa = sc >> 2;
            m[oa] = Np;
            var Op = c + 228;
            Xg(vb, z[ja], z[ma]);
            var Lk = vb, Mk = Op, Ne = Lk;
            S = Ne >> 2;
            var Pp = m[S], Oe = Lk + 4;
            I = Oe >> 2;
            var Qp = m[I], Uh = Mk;
            m[Uh >> 2] = Pp;
            Vh = Mk + 4;
            m[Vh >> 2] = Qp;
            var Nk = c + 204, Ok = c + 236, Ad = Nk;
            T = Ad >> 2;
            var Rp = m[T], Bd = Nk + 4;
            Y = Bd >> 2;
            var Sp = m[Y], ld = Ok;
            Aa = ld >> 2;
            m[Aa] = Rp;
            Ac = Ok + 4;
            ta = Ac >> 2;
            m[ta] = Sp;
          } else {
            do {
              if (Pg) {
                var Pk = 0 <= ge;
                b[c + 248] = Pk;
                var Qk = c + 212;
                if (Pk) {
                  var Qg = Lb, Rk = Qk, Tc = Qg;
                  D = Tc >> 2;
                  var Sk = v[D], Uc = Qg + 4;
                  w = Uc >> 2;
                  var Tp = m[w], Nb = Rk;
                  U = Nb >> 2;
                  m[U] = Sk;
                  Kb = Rk + 4;
                  X = Kb >> 2;
                  m[X] = Tp;
                  var Up = c + 228, Vp = (E[0] = Sk, F[0]);
                  Xg($a, Vp, z[ma]);
                  var Tk = $a, Uk = Up, If = Tk;
                  x = If >> 2;
                  var Wp = m[x], Jf = Tk + 4;
                  u = Jf >> 2;
                  var Xp = m[u], Mf = Uk;
                  p = Mf >> 2;
                  m[p] = Wp;
                  var Nf = Uk + 4;
                  n = Nf >> 2;
                  m[n] = Xp;
                  var Vk = c + 236, Ef = Qg;
                  M = Ef >> 2;
                  var Yp = m[M], Ff = Qg + 4;
                  G = Ff >> 2;
                  var Zp = m[G], Kf = Vk;
                  q = Kf >> 2;
                  m[q] = Yp;
                  Lf = Vk + 4;
                  t = Lf >> 2;
                  m[t] = Zp;
                  break a;
                } else {
                  var Wk = Qk;
                }
              } else {
                b[c + 248] = 0, Wk = c + 212;
              }
            } while (0);
            Xg(Gb, z[ja], z[ma]);
            var Xk = Gb, Yk = Wk, Nb = Xk;
            U = Nb >> 2;
            var $p = m[U], Kb = Xk + 4;
            X = Kb >> 2;
            var aq = m[X], Lc = Yk;
            Z = Lc >> 2;
            m[Z] = $p;
            Mc = Yk + 4;
            O = Mc >> 2;
            m[O] = aq;
            var bq = c + 228;
            Xg(Ab, z[sa + 51], z[sa + 52]);
            var Zk = Ab, $k = bq, Mf = Zk;
            p = Mf >> 2;
            var cq = m[p], Nf = Zk + 4;
            n = Nf >> 2;
            var dq = m[n], Fd = $k;
            Ta = Fd >> 2;
            m[Ta] = cq;
            Gd = $k + 4;
            gb = Gd >> 2;
            m[gb] = dq;
            var al = Lb, bl = c + 236, ld = al;
            Aa = ld >> 2;
            var eq = m[Aa], Ac = al + 4;
            ta = Ac >> 2;
            var fq = m[ta], Rd = bl;
            va = Rd >> 2;
            m[va] = eq;
            Sd = bl + 4;
            Ra = Sd >> 2;
            m[Ra] = fq;
          }
        } else {
          b[c + 248] = Pg;
          var cl = c + 212;
          if (Pg) {
            var dl = Lb, el = cl, Tc = dl;
            D = Tc >> 2;
            var fl = v[D], Uc = dl + 4;
            w = Uc >> 2;
            var gq = m[w], Nb = el;
            U = Nb >> 2;
            m[U] = fl;
            Kb = el + 4;
            X = Kb >> 2;
            m[X] = gq;
            var hq = c + 228, iq = (E[0] = fl, F[0]);
            Xg(sb, iq, z[ma]);
            var gl = sb, hl = hq, If = gl;
            x = If >> 2;
            var jq = m[x], Jf = gl + 4;
            u = Jf >> 2;
            var kq = m[u], Mf = hl;
            p = Mf >> 2;
            m[p] = jq;
            Nf = hl + 4;
            n = Nf >> 2;
            m[n] = kq;
            var lq = c + 236;
            Xg(Bb, z[ja], z[ma]);
            var il = Bb, jl = lq, Kf = il;
            q = Kf >> 2;
            var mq = m[q], Lf = il + 4;
            t = Lf >> 2;
            var nq = m[t], Yd = jl;
            Q = Yd >> 2;
            m[Q] = mq;
            Me = jl + 4;
            N = Me >> 2;
            m[N] = nq;
          } else {
            Xg(Cb, z[ja], z[ma]);
            var kl = Cb, ll = cl, Gc = kl;
            wa = Gc >> 2;
            var oq = m[wa], bd = kl + 4;
            la = bd >> 2;
            var pq = m[la], cd = ll;
            Ka = cd >> 2;
            m[Ka] = oq;
            dd = ll + 4;
            fa = dd >> 2;
            m[fa] = pq;
            var ml = Lb, nl = c + 228, Pe = ml;
            s = Pe >> 2;
            var ol = m[s], Qe = ml + 4;
            r = Qe >> 2;
            var pl = m[r], Sc = nl;
            L = Sc >> 2;
            m[L] = ol;
            Nc = nl + 4;
            V = Nc >> 2;
            m[V] = pl;
            var ql = c + 236, Fd = ql;
            Ta = Fd >> 2;
            m[Ta] = ol;
            Gd = ql + 4;
            gb = Gd >> 2;
            m[gb] = pl;
          }
        }
      }
    }
  } while (0);
  o = g + 148 >> 2;
  var qq = m[o];
  l = c + 128 >> 2;
  m[l] = qq;
  var rq = 0 < m[o];
  a : do {
    if (rq) {
      for (var rl = Db, sl = bb, sq = c + 140, tq = c + 144, le = 0; ; ) {
        var uq = (le << 3) + c;
        Uf(Db, Vb, z[((le << 3) + 20 >> 2) + ua], z[((le << 3) + 24 >> 2) + ua]);
        var tl = uq, Wh = rl, vq = m[Wh >> 2], Xh = rl + 4, wq = m[Xh >> 2], Gf = tl;
        y = Gf >> 2;
        m[y] = vq;
        Hf = tl + 4;
        B = Hf >> 2;
        m[B] = wq;
        var xq = (le << 3) + c + 64;
        Yg(bb, z[sq >> 2], z[tq >> 2], z[((le << 3) + 84 >> 2) + ua], z[((le << 3) + 88 >> 2) + ua]);
        var ul = xq, je = sl, yq = m[je >> 2], ke = sl + 4, zq = m[ke >> 2], Ad = ul;
        T = Ad >> 2;
        m[T] = yq;
        Bd = ul + 4;
        Y = Bd >> 2;
        m[Y] = zq;
        var vl = le + 1;
        if (vl < m[o]) {
          le = vl;
        } else {
          break a;
        }
      }
    }
  } while (0);
  k = c + 244 >> 2;
  z[k] = .019999999552965164;
  var wl = e + 60;
  m[wl >> 2] = 0;
  var Rg = a;
  a += 8;
  m[Eb >> 2] = 1;
  m[Eb + 4 >> 2] = b[c + 248] & 1 ^ 1;
  var xl = Eb + 8;
  z[xl >> 2] = 3.4028234663852886e+38;
  var yl = c + 128, Aq = 0 < m[yl >> 2];
  a : do {
    if (Aq) {
      for (var Bq = c + 164, Cq = c + 168, Dq = c + 212, Eq = c + 216, Fq = Rg, Gq = Rg + 4, Sg = 0, Yh = 3.4028234663852886e+38; ; ) {
        J(Rg, z[c + (Sg << 3) >> 2] - z[Bq >> 2], z[c + (Sg << 3) + 4 >> 2] - z[Cq >> 2]);
        var zl = z[Dq >> 2] * z[Fq >> 2] + z[Eq >> 2] * z[Gq >> 2];
        var Al = zl < Yh ? z[xl >> 2] = zl : Yh;
        var Bl = Sg + 1;
        if (Bl < m[yl >> 2]) {
          Sg = Bl, Yh = Al;
        } else {
          break a;
        }
      }
    }
  } while (0);
  a = Rg;
  var Zh = m[Ca], Hq = 0 == Zh;
  do {
    if (!Hq) {
      var Cl = z[Ca + 2];
      if (Cl <= z[k]) {
        Zg(Ob, c);
        var El = m[na];
        if (0 == El) {
          var $h = Zh, Re = m[Ca + 1];
        } else {
          var Fl = z[na + 2];
          if (Fl > z[k]) {
            break;
          }
          Fl > .9800000190734863 * Cl + .0010000000474974513 ? ($h = El, Re = m[na + 1]) : ($h = Zh, Re = m[Ca + 1]);
        }
        var Iq = Fb, Gl = 1 == $h, Hl = e + 56;
        if (Gl) {
          m[Hl >> 2] = 1;
          var ai = m[l], Jq = 1 < ai;
          a : do {
            if (Jq) {
              for (var Il = z[sa + 53], Jl = z[sa + 54], Kl = 0, bi = Il * z[sa + 16] + Jl * z[sa + 17], Of = 1; ; ) {
                var Ll = Il * z[((Of << 3) + 64 >> 2) + sa] + Jl * z[((Of << 3) + 68 >> 2) + sa], Ml = Ll < bi, Nl = Ml ? Of : Kl, Kq = Ml ? Ll : bi, Ol = Of + 1;
                if (Ol < ai) {
                  Kl = Nl, bi = Kq, Of = Ol;
                } else {
                  var Tg = Nl;
                  break a;
                }
              }
            } else {
              Tg = 0;
            }
          } while (0);
          var Pl = Tg + 1, Ql = Pl < ai ? Pl : 0, Rl = (Tg << 3) + c, Sl = Fb, rc = Rl;
          ga = rc >> 2;
          var Lq = m[ga], sc = Rl + 4;
          oa = sc >> 2;
          var Mq = m[oa];
          m[Sl >> 2] = Lq;
          m[Sl + 4 >> 2] = Mq;
          var Tl = Fb + 8, ci = Tl;
          b[Tl] = 0;
          b[ci + 1] = Tg & 255;
          b[ci + 2] = 1;
          b[ci + 3] = 0;
          var Ul = (Ql << 3) + c, Vl = Fb + 12, tc = Ul;
          Ja = tc >> 2;
          var Nq = m[Ja], Ud = Ul + 4;
          ka = Ud >> 2;
          var Oq = m[ka], Hd = Vl;
          ba = Hd >> 2;
          m[ba] = Nq;
          Xd = Vl + 4;
          $ = Xd >> 2;
          m[$] = Oq;
          var Wl = Fb + 20, di = Wl;
          b[Wl] = 0;
          b[di + 1] = Ql & 255;
          b[di + 2] = 1;
          b[di + 3] = 0;
          var Xl = Wa;
          if (0 == (b[c + 248] & 1)) {
            m[Xl >> 2] = 1;
            m[La + 1] = 0;
            var Yl = Wa + 8, Gc = Yb;
            wa = Gc >> 2;
            var Pq = m[wa], bd = Yb + 4;
            la = bd >> 2;
            var Qq = m[la], cd = Yl;
            Ka = cd >> 2;
            m[Ka] = Pq;
            dd = Yl + 4;
            fa = dd >> 2;
            m[fa] = Qq;
            var Zl = Wa + 16, rd = cc;
            Na = rd >> 2;
            var Rq = m[Na], sd = cc + 4;
            ya = sd >> 2;
            var Sq = m[ya], Hc = Zl;
            ca = Hc >> 2;
            m[ca] = Rq;
            Mb = Zl + 4;
            ea = Mb >> 2;
            m[ea] = Sq;
            var Tq = Wa + 24;
            Xg(Qb, z[ja], z[ma]);
            var $l = Qb, am = Tq, Ad = $l;
            T = Ad >> 2;
            var bm = m[T], Bd = $l + 4;
            Y = Bd >> 2;
            var Uq = m[Y], ld = am;
            Aa = ld >> 2;
            m[Aa] = bm;
            Ac = am + 4;
            ta = Ac >> 2;
            var ei = m[ta] = Uq, fi = bm;
          } else {
            m[Xl >> 2] = 0;
            m[La + 1] = 1;
            var cm = Wa + 8, Gc = cc;
            wa = Gc >> 2;
            var Vq = m[wa], bd = cc + 4;
            la = bd >> 2;
            var Wq = m[la], cd = cm;
            Ka = cd >> 2;
            m[Ka] = Vq;
            dd = cm + 4;
            fa = dd >> 2;
            m[fa] = Wq;
            var dm = Wa + 16, rd = Yb;
            Na = rd >> 2;
            var Xq = m[Na], sd = Yb + 4;
            ya = sd >> 2;
            var Yq = m[ya], Hc = dm;
            ca = Hc >> 2;
            m[ca] = Xq;
            Mb = dm + 4;
            ea = Mb >> 2;
            m[ea] = Yq;
            var em = Lb, fm = Wa + 24, Fd = em;
            Ta = Fd >> 2;
            var gm = m[Ta], Gd = em + 4;
            gb = Gd >> 2;
            var Zq = m[gb], tc = fm;
            Ja = tc >> 2;
            m[Ja] = gm;
            Ud = fm + 4;
            ka = Ud >> 2;
            ei = m[ka] = Zq;
            fi = gm;
          }
        } else {
          m[Hl >> 2] = 2;
          var hm = Fb, Tc = cc;
          D = Tc >> 2;
          var $q = m[D], Uc = cc + 4;
          w = Uc >> 2;
          var ar = m[w], Nb = hm;
          U = Nb >> 2;
          m[U] = $q;
          Kb = hm + 4;
          X = Kb >> 2;
          m[X] = ar;
          var im = Fb + 8, gi = im;
          b[im] = 0;
          var jm = Re & 255;
          b[gi + 1] = jm;
          b[gi + 2] = 0;
          b[gi + 3] = 1;
          var km = Fb + 12, we = Yb;
          qa = we >> 2;
          var br = m[qa], xe = Yb + 4;
          Oa = xe >> 2;
          var cr = m[Oa];
          m[km >> 2] = br;
          m[km + 4 >> 2] = cr;
          var lm = Fb + 20, hi = lm;
          b[lm] = 0;
          b[hi + 1] = jm;
          b[hi + 2] = 0;
          b[hi + 3] = 1;
          m[La] = Re;
          var mm = Re + 1, nm = mm < m[l] ? mm : 0;
          m[La + 1] = nm;
          var om = (Re << 3) + c, pm = Wa + 8, dr = m[om + 4 >> 2];
          m[pm >> 2] = m[om >> 2];
          m[pm + 4 >> 2] = dr;
          var qm = (nm << 3) + c, rm = Wa + 16, er = m[qm + 4 >> 2];
          m[rm >> 2] = m[qm >> 2];
          m[rm + 4 >> 2] = er;
          var sm = (Re << 3) + c + 64, tm = Wa + 24, um = m[sm >> 2], fr = m[sm + 4 >> 2];
          m[tm >> 2] = um;
          ei = m[tm + 4 >> 2] = fr;
          fi = um;
        }
        var gr = (E[0] = ei, F[0]), hr = (E[0] = fi, F[0]), vm = Wa + 32, ii = Wa + 24;
        Xe(vm, gr, -hr);
        var wm = Wa + 44, xm = vm, ym = Wa + 36;
        Xg(Sb, z[xm >> 2], z[ym >> 2]);
        var zm = Sb, Am = wm, Pe = zm;
        s = Pe >> 2;
        var Bm = m[s], Qe = zm + 4;
        r = Qe >> 2;
        var Cm = m[r], Sc = Am;
        L = Sc >> 2;
        m[L] = Bm;
        Nc = Am + 4;
        V = Nc >> 2;
        m[V] = Cm;
        var Dm = Wa + 8, Em = z[xm >> 2], Fm = z[ym >> 2];
        j = Dm >> 2;
        var ir = z[j];
        i = Wa + 12 >> 2;
        var Gm = Em * ir + Fm * z[i];
        z[La + 10] = Gm;
        var jr = (E[0] = Bm, F[0]), kr = (E[0] = Cm, F[0]), Hm = Wa + 52;
        z[Hm >> 2] = jr * z[La + 4] + kr * z[La + 5];
        var Im = Xb, Jm = Wa;
        if (2 <= $g(Im, Iq, Em, Fm, Gm, m[Jm >> 2]) && 2 <= $g(Tb, Im, z[wm >> 2], z[La + 12], z[Hm >> 2], m[La + 1])) {
          var Km = e + 40;
          if (Gl) {
            var Lm = ii, Mm = Km, Tc = Lm;
            D = Tc >> 2;
            var lr = m[D], Uc = Lm + 4;
            w = Uc >> 2;
            var mr = m[w], Nb = Mm;
            U = Nb >> 2;
            m[U] = lr;
            Kb = Mm + 4;
            X = Kb >> 2;
            m[X] = mr;
            var Nm = Dm, Om = e + 48, Ph = Nm, Pm = m[Ph >> 2], Qh = Nm + 4, nr = m[Qh >> 2], Ne = Om;
            S = Ne >> 2;
            m[S] = Pm;
            Oe = Om + 4;
            I = Oe >> 2;
            m[I] = nr;
            var Ug = ac, Qm = z[Ga], Rm = z[Ga + 1], or = (E[0] = Pm, F[0]);
            J(Jb, Qm - or, Rm - z[i]);
            var Sm = ii, Tm = Wa + 28, Um = Jb, Vm = Jb + 4;
            if (z[Sm >> 2] * z[Um >> 2] + z[Tm >> 2] * z[Vm >> 2] > z[k]) {
              var Qf = 0;
            } else {
              Wf(ac, Vb, Qm, Rm);
              var Wm = e, Tc = Ug;
              D = Tc >> 2;
              var pr = m[D], Uc = Ug + 4;
              w = Uc >> 2;
              var qr = m[w], Nb = Wm;
              U = Nb >> 2;
              m[U] = pr;
              Kb = Wm + 4;
              X = Kb >> 2;
              m[X] = qr;
              m[e + 16 >> 2] = m[Ga + 2];
              Qf = 1;
            }
            var Xm = z[Ga + 3], Ym = z[Ga + 4];
            J(Jb, Xm - z[j], Ym - z[i]);
            if (z[Sm >> 2] * z[Um >> 2] + z[Tm >> 2] * z[Vm >> 2] > z[k]) {
              var Vg = Qf;
            } else {
              var rr = e + 20 * Qf;
              Wf(ac, Vb, Xm, Ym);
              var Zm = rr, Jc = Ug;
              za = Jc >> 2;
              var sr = m[za], Kc = Ug + 4;
              ia = Kc >> 2;
              var tr = m[ia], rc = Zm;
              ga = rc >> 2;
              m[ga] = sr;
              sc = Zm + 4;
              oa = sc >> 2;
              m[oa] = tr;
              m[(e + 16 >> 2) + (5 * Qf | 0)] = m[Ga + 5];
              Vg = Qf + 1;
            }
          } else {
            var $m = m[Jm >> 2], an = ($m << 3) + g + 84, bn = Km, ur = m[an >> 2], vr = m[an + 4 >> 2], Wh = bn;
            m[Wh >> 2] = ur;
            Xh = bn + 4;
            m[Xh >> 2] = vr;
            var cn = ($m << 3) + g + 20, dn = e + 48, Pe = cn;
            s = Pe >> 2;
            var wr = m[s], Qe = cn + 4;
            r = Qe >> 2;
            var xr = m[r], Sc = dn;
            L = Sc >> 2;
            m[L] = wr;
            Nc = dn + 4;
            V = Nc >> 2;
            m[V] = xr;
            J(Jb, z[Ga] - z[j], z[Ga + 1] - z[i]);
            var en = ii, fn = Wa + 28, gn = Jb, hn = Jb + 4;
            if (z[en >> 2] * z[gn >> 2] + z[fn >> 2] * z[hn >> 2] > z[k]) {
              var Rf = 0;
            } else {
              var jn = Tb, kn = e, Tc = jn;
              D = Tc >> 2;
              var yr = m[D], Uc = jn + 4;
              w = Uc >> 2;
              var zr = m[w], Nb = kn;
              U = Nb >> 2;
              m[U] = yr;
              Kb = kn + 4;
              X = Kb >> 2;
              m[X] = zr;
              var ln = Tb + 8, ji = ln, mn = e + 16, ki = mn;
              b[ki + 2] = b[ji + 3];
              b[ki + 3] = b[ji + 2];
              b[mn] = b[ji + 1];
              b[ki + 1] = b[ln];
              Rf = 1;
            }
            var nn = Tb + 12;
            J(Jb, z[nn >> 2] - z[j], z[Ga + 4] - z[i]);
            if (z[en >> 2] * z[gn >> 2] + z[fn >> 2] * z[hn >> 2] > z[k]) {
              Vg = Rf;
            } else {
              var on = nn, pn = e + 20 * Rf, Jc = on;
              za = Jc >> 2;
              var Ar = m[za], Kc = on + 4;
              ia = Kc >> 2;
              var Br = m[ia], rc = pn;
              ga = rc >> 2;
              m[ga] = Ar;
              sc = pn + 4;
              oa = sc >> 2;
              m[oa] = Br;
              var qn = Tb + 20, li = qn, rn = e + 20 * Rf + 16, mi = rn;
              b[mi + 2] = b[li + 3];
              b[mi + 3] = b[li + 2];
              b[rn] = b[li + 1];
              b[mi + 1] = b[qn];
              Vg = Rf + 1;
            }
          }
          m[wl >> 2] = Vg;
        }
      }
    }
  } while (0);
  a = aa;
}

ng.X = 1;

function Xg(c, e, d) {
  Xe(c, -e, -d);
}

function Yg(c, e, d, f, g) {
  J(c, d * f - e * g, e * f + d * g);
}

function Zg(c, e) {
  var d, f, g, h, i, j = a;
  a += 48;
  var k, l = j + 8, o = j + 16, n = j + 24, p = j + 32, t = j + 40;
  i = c >> 2;
  m[i] = 0;
  h = c + 4 >> 2;
  m[h] = -1;
  g = c + 8 >> 2;
  z[g] = -3.4028234663852886e+38;
  f = e + 216 >> 2;
  var q = -z[f];
  d = e + 212 >> 2;
  J(j, q, z[d]);
  var q = e + 128, r = e + 244, s = e + 164, u = e + 168, x = l + 4, B = o + 4, y = e + 172, w = e + 176, D = n + 4, G = z[j >> 2], M = z[j + 4 >> 2], I = e + 228, S = e + 232, N = t + 4, Q = e + 236, Y = e + 240, T = p + 4, $ = 0;
  for (k = -3.4028234663852886e+38; $ < m[q >> 2]; ) {
    Xg(l, z[e + ($ << 3) + 64 >> 2], z[e + ($ << 3) + 68 >> 2]);
    var ba = ($ << 3) + e, P = ($ << 3) + e + 4;
    J(o, z[ba >> 2] - z[s >> 2], z[P >> 2] - z[u >> 2]);
    var R = z[l >> 2], V = z[x >> 2], L = R * z[o >> 2] + V * z[B >> 2];
    J(n, z[ba >> 2] - z[y >> 2], z[P >> 2] - z[w >> 2]);
    ba = L < R * z[n >> 2] + V * z[D >> 2] ? L : R * z[n >> 2] + V * z[D >> 2];
    if (ba > z[r >> 2]) {
      m[i] = 2;
      m[h] = $;
      z[g] = ba;
      break;
    } else {
      if (0 > R * G + V * M) {
        if (J(t, R - z[I >> 2], V - z[S >> 2]), -.03490658849477768 <= z[t >> 2] * z[d] + z[N >> 2] * z[f] & ba > k) {
          k = 7;
        } else {
          var O = k;
          k = 8;
        }
      } else {
        J(p, R - z[Q >> 2], V - z[Y >> 2]), -.03490658849477768 <= z[p >> 2] * z[d] + z[T >> 2] * z[f] & ba > k ? k = 7 : (O = k, k = 8);
      }
      7 == k && (m[i] = 2, m[h] = $, O = z[g] = ba);
      $ += 1;
      k = O;
    }
  }
  a = j;
}

Zg.X = 1;

function Wg(c, e, d, f, g) {
  J(c, d * f + e * g, f * -e + d * g);
}

function ah(c, e, d, f, g) {
  var h, i, j, k, l, o, n, p, t, q, r, s, u = a;
  a += 192;
  var x = u + 4, B = u + 8, y = u + 24, w = u + 40, D = u + 64, G = u + 72, M = u + 80, I = u + 88, S = u + 96, N = u + 104, Q = u + 112, Y = u + 120, T = u + 128, $ = u + 152;
  s = $ >> 2;
  var ba = u + 176, P = u + 184, R = c + 60;
  m[R >> 2] = 0;
  var V = z[e + 8 >> 2] + z[f + 8 >> 2];
  m[u >> 2] = 0;
  var L = bh(u, e, d, f, g);
  if (L <= V) {
    m[x >> 2] = 0;
    var O = bh(x, f, g, e, d);
    if (O <= V) {
      r = B >> 2;
      if (O > .9800000190734863 * L + .0010000000474974513) {
        q = g >> 2;
        m[r] = m[q];
        m[r + 1] = m[q + 1];
        m[r + 2] = m[q + 2];
        m[r + 3] = m[q + 3];
        t = y >> 2;
        p = d >> 2;
        m[t] = m[p];
        m[t + 1] = m[p + 1];
        m[t + 2] = m[p + 2];
        m[t + 3] = m[p + 3];
        var Z = m[x >> 2];
        m[c + 56 >> 2] = 2;
        var X = 1, U = Z, ka = e, Ja = f;
      } else {
        n = d >> 2;
        m[r] = m[n];
        m[r + 1] = m[n + 1];
        m[r + 2] = m[n + 2];
        m[r + 3] = m[n + 3];
        o = y >> 2;
        l = g >> 2;
        m[o] = m[l];
        m[o + 1] = m[l + 1];
        m[o + 2] = m[l + 2];
        m[o + 3] = m[l + 3];
        var gb = m[u >> 2];
        m[c + 56 >> 2] = 1;
        X = 0;
        U = gb;
        ka = f;
        Ja = e;
      }
      ch(w, Ja, B, U, ka, y);
      var Ta = U + 1, ya = Ta < m[Ja + 148 >> 2] ? Ta : 0, Na = (U << 3) + Ja + 20, oa = m[Na + 4 >> 2], ga = (E[0] = m[Na >> 2], F[0]), ia = (E[0] = oa, F[0]), za = (ya << 3) + Ja + 20, Ra = m[za + 4 >> 2], va = (E[0] = m[za >> 2], F[0]), ta = (E[0] = Ra, F[0]);
      J(D, va - ga, ta - ia);
      Zf(D);
      var Aa = z[D >> 2], Oa = z[D + 4 >> 2];
      J(G, Oa, -1 * Aa);
      J(I, ga + va, ia + ta);
      Xf(M, .5, z[I >> 2], z[I + 4 >> 2]);
      Yg(S, z[B + 8 >> 2], z[B + 12 >> 2], Aa, Oa);
      var qa = z[S >> 2], ea = z[S + 4 >> 2];
      J(N, ea, -1 * qa);
      Uf(Q, B, ga, ia);
      var ca = m[Q + 4 >> 2], fa = (E[0] = m[Q >> 2], F[0]), Ka = (E[0] = ca, F[0]);
      Uf(Y, B, va, ta);
      var la = m[Y >> 2], wa = m[Y + 4 >> 2], xa = z[N >> 2], Ua = z[N + 4 >> 2], ma = xa * fa + Ua * Ka, ja = V - (qa * fa + ea * Ka);
      Xg(ba, qa, ea);
      if (2 <= $g(T, w, z[ba >> 2], z[ba + 4 >> 2], ja, U)) {
        var Pa = (E[0] = wa, F[0]), Fa = (E[0] = la, F[0]);
        if (2 <= $g($, T, qa, ea, qa * Fa + ea * Pa + V, ya)) {
          var Ea = c + 40, Sa = G;
          k = Sa >> 2;
          var Ga = m[k], La = G + 4;
          j = La >> 2;
          var na = m[j], Ca = Ea;
          i = Ca >> 2;
          m[i] = Ga;
          var ua = Ea + 4;
          h = ua >> 2;
          m[h] = na;
          var sa = c + 48, aa = m[M + 4 >> 2];
          m[sa >> 2] = m[M >> 2];
          m[sa + 4 >> 2] = aa;
          var Ha = z[s], hb = z[s + 1], ib = xa * Ha + Ua * hb - ma > V;
          if (0 == X) {
            if (ib) {
              var jb = 0;
            } else {
              Wf(P, y, Ha, hb);
              var ub = P, kb = P + 4, wb = m[kb >> 2], lb = c;
              m[lb >> 2] = m[ub >> 2];
              var mb = c + 4;
              m[mb >> 2] = wb;
              m[c + 16 >> 2] = m[s + 2];
              jb = 1;
            }
            var Da = z[s + 3], tb = z[s + 4];
            if (xa * Da + Ua * tb - ma > V) {
              var Xa = jb;
            } else {
              var nb = c + 20 * jb;
              Wf(P, y, Da, tb);
              Sa = P;
              k = Sa >> 2;
              var Ya = m[k], La = P + 4;
              j = La >> 2;
              var cb = m[j], Ca = nb;
              i = Ca >> 2;
              m[i] = Ya;
              ua = nb + 4;
              h = ua >> 2;
              m[h] = cb;
              m[(c + 16 >> 2) + (5 * jb | 0)] = m[s + 5];
              Xa = jb + 1;
            }
          } else {
            if (ib) {
              var db = 0;
            } else {
              Wf(P, y, Ha, hb);
              var ub = P, yb = m[ub >> 2], kb = P + 4, ob = m[kb >> 2], lb = c;
              m[lb >> 2] = yb;
              mb = c + 4;
              m[mb >> 2] = ob;
              var qb = c + 16, eb = v[s + 2];
              m[qb >> 2] = eb;
              var Za = eb >>> 24 & 255, Ma = eb >>> 16 & 255, rb = eb & 255, fb = qb + 1, Va = qb + 2, zb = qb + 3;
              b[qb] = eb >>> 8 & 255;
              b[fb] = rb;
              b[Va] = Za;
              b[zb] = Ma;
              db = 1;
            }
            var vb = z[s + 3], pb = z[s + 4];
            if (xa * vb + Ua * pb - ma > V) {
              Xa = db;
            } else {
              var xb = c + 20 * db;
              Wf(P, y, vb, pb);
              Sa = P;
              k = Sa >> 2;
              var $a = m[k], La = P + 4;
              j = La >> 2;
              var Gb = m[j], Ca = xb;
              i = Ca >> 2;
              m[i] = $a;
              ua = xb + 4;
              h = ua >> 2;
              m[h] = Gb;
              var Ab = c + 20 * db + 16, sb = v[s + 5];
              m[Ab >> 2] = sb;
              var Bb = sb >>> 24 & 255, Cb = sb >>> 16 & 255, Db = sb & 255, bb = Ab + 1, Eb = Ab + 2, Ob = Ab + 3;
              b[Ab] = sb >>> 8 & 255;
              b[bb] = Db;
              b[Eb] = Bb;
              b[Ob] = Cb;
              Xa = db + 1;
            }
          }
          m[R >> 2] = Xa;
        }
      }
    }
  }
  a = u;
}

ah.X = 1;

function bh(c, e, d, f, g) {
  var h = e >> 2, i = a;
  a += 32;
  var j = i + 8, k = i + 16, l = i + 24, o = m[h + 37];
  Uf(j, g, z[f + 12 >> 2], z[f + 16 >> 2]);
  Uf(k, d, z[h + 3], z[h + 4]);
  J(i, z[j >> 2] - z[k >> 2], z[j + 4 >> 2] - z[k + 4 >> 2]);
  Wg(l, z[d + 8 >> 2], z[d + 12 >> 2], z[i >> 2], z[i + 4 >> 2]);
  j = 0 < o;
  a : do {
    if (j) {
      for (var k = z[l >> 2], n = z[l + 4 >> 2], p = 0, t = -3.4028234663852886e+38, q = 0; ; ) {
        var r = z[((q << 3) + 84 >> 2) + h] * k + z[((q << 3) + 88 >> 2) + h] * n, s = r > t, p = s ? q : p, t = s ? r : t, q = q + 1;
        if (q == o) {
          var u = p;
          break a;
        }
      }
    } else {
      u = 0;
    }
  } while (0);
  h = dh(e, d, u, f, g);
  l = (0 < u ? u : o) - 1;
  j = dh(e, d, l, f, g);
  k = u + 1;
  k = k < o ? k : 0;
  n = dh(e, d, k, f, g);
  p = j > h & j > n;
  a : do {
    if (p) {
      t = j;
      for (q = l; ; ) {
        if (r = (0 < q ? q : o) - 1, s = dh(e, d, r, f, g), s > t) {
          t = s, q = r;
        } else {
          var x = t, B = q;
          break a;
        }
      }
    } else {
      if (n > h) {
        t = n;
        for (q = k; ; ) {
          if (r = q + 1, r = r < o ? r : 0, s = dh(e, d, r, f, g), s > t) {
            t = s, q = r;
          } else {
            x = t;
            B = q;
            break a;
          }
        }
      } else {
        x = h, B = u;
      }
    }
  } while (0);
  m[c >> 2] = B;
  a = i;
  return x;
}

bh.X = 1;

function ch(c, e, d, f, g, h) {
  var i = g >> 2, g = a;
  a += 32;
  var j = g + 8, k = g + 16, l = g + 24, o = m[i + 37];
  2 == (-1 < f ? m[e + 148 >> 2] > f ? 3 : 2 : 2) && K(H.xa, 151, H.ab, H.ja);
  Yg(j, z[d + 8 >> 2], z[d + 12 >> 2], z[e + (f << 3) + 84 >> 2], z[e + (f << 3) + 88 >> 2]);
  Wg(g, z[h + 8 >> 2], z[h + 12 >> 2], z[j >> 2], z[j + 4 >> 2]);
  e = 0 < o;
  a : do {
    if (e) {
      for (var d = z[g >> 2], j = z[g + 4 >> 2], n = 0, p = 3.4028234663852886e+38, t = 0; ; ) {
        var q = d * z[((t << 3) + 84 >> 2) + i] + j * z[((t << 3) + 88 >> 2) + i], r = q < p, n = r ? t : n, p = r ? q : p, t = t + 1;
        if (t == o) {
          var s = n;
          break a;
        }
      }
    } else {
      s = 0;
    }
  } while (0);
  e = s + 1;
  o = e < o ? e : 0;
  Uf(k, h, z[((s << 3) + 20 >> 2) + i], z[((s << 3) + 24 >> 2) + i]);
  e = m[k + 4 >> 2];
  m[c >> 2] = m[k >> 2];
  m[c + 4 >> 2] = e;
  f &= 255;
  k = c + 8;
  b[k] = f;
  b[k + 1] = s & 255;
  b[k + 2] = 1;
  b[k + 3] = 0;
  s = c + 12;
  Uf(l, h, z[((o << 3) + 20 >> 2) + i], z[((o << 3) + 24 >> 2) + i]);
  h = m[l + 4 >> 2];
  m[s >> 2] = m[l >> 2];
  m[s + 4 >> 2] = h;
  c += 20;
  b[c] = f;
  b[c + 1] = o & 255;
  b[c + 2] = 1;
  b[c + 3] = 0;
  a = g;
}

ch.X = 1;

function dh(c, e, d, f, g) {
  var f = f >> 2, h = c >> 2, c = a;
  a += 40;
  var i = c + 8, j = c + 16, k = c + 24, l = c + 32, o = m[f + 37];
  2 == (-1 < d ? m[h + 37] > d ? 3 : 2 : 2) && K(H.xa, 32, H.$a, H.ja);
  Yg(c, z[e + 8 >> 2], z[e + 12 >> 2], z[((d << 3) + 84 >> 2) + h], z[((d << 3) + 88 >> 2) + h]);
  var n = z[c >> 2], p = z[c + 4 >> 2];
  Wg(i, z[g + 8 >> 2], z[g + 12 >> 2], n, p);
  var t = 0 < o;
  a : do {
    if (t) {
      for (var q = z[i >> 2], r = z[i + 4 >> 2], s = 0, u = 3.4028234663852886e+38, x = 0; ; ) {
        var B = z[((x << 3) + 20 >> 2) + f] * q + z[((x << 3) + 24 >> 2) + f] * r, y = B < u, s = y ? x : s, u = y ? B : u, x = x + 1;
        if (x == o) {
          var w = s;
          break a;
        }
      }
    } else {
      w = 0;
    }
  } while (0);
  Uf(j, e, z[((d << 3) + 20 >> 2) + h], z[((d << 3) + 24 >> 2) + h]);
  Uf(k, g, z[((w << 3) + 20 >> 2) + f], z[((w << 3) + 24 >> 2) + f]);
  J(l, z[k >> 2] - z[j >> 2], z[k + 4 >> 2] - z[j + 4 >> 2]);
  e = z[l >> 2] * n + z[l + 4 >> 2] * p;
  a = c;
  return e;
}

dh.X = 1;

function eh(c) {
  m[c + 16 >> 2] = 0;
  m[c + 20 >> 2] = 0;
  z[c + 24 >> 2] = 0;
}

function fh(c, e, d, f, g, h) {
  var i, j, k, l, o, n = e >> 2, p = a;
  a += 240;
  var t = p + 8, q = p + 16, r = p + 24, s = p + 32, u = p + 40, x = p + 48, B = p + 56, y = p + 64, w = p + 72, D = p + 80, G = p + 88, M = p + 96, I = p + 104, S = p + 112, N = p + 120, Q = p + 128, Y = p + 136, T = p + 144, $ = p + 152, ba = p + 160, P = p + 168, R = p + 176, V = p + 184, L = p + 192, O = p + 200, Z = p + 208, X = p + 216, U = p + 224, ka = p + 232;
  o = e + 60 >> 2;
  var Ja = 0 == m[o];
  a : do {
    if (!Ja) {
      var gb = m[n + 14];
      if (0 == gb) {
        var Ta = c;
        Xe(Ta, 1, 0);
        Uf(p, d, z[n + 12], z[n + 13]);
        Uf(t, g, z[n], z[n + 1]);
        var ya = z[p >> 2], Na = z[p + 4 >> 2], oa = z[t >> 2], ga = z[t + 4 >> 2];
        if (1.4210854715202004e-14 < Yf(ya, Na, oa, ga)) {
          J(q, oa - ya, ga - Na);
          var ia = q, za = c, Ra = m[ia + 4 >> 2];
          m[za >> 2] = m[ia >> 2];
          m[za + 4 >> 2] = Ra;
          Zf(Ta);
        }
        var va = c, ta = c + 4;
        Xf(s, f, z[va >> 2], z[ta >> 2]);
        J(r, ya + z[s >> 2], Na + z[s + 4 >> 2]);
        Xf(x, h, z[va >> 2], z[ta >> 2]);
        J(u, oa - z[x >> 2], ga - z[x + 4 >> 2]);
        var Aa = c + 8;
        J(y, z[r >> 2] + z[u >> 2], z[r + 4 >> 2] + z[u + 4 >> 2]);
        Xf(B, .5, z[y >> 2], z[y + 4 >> 2]);
        var Oa = B, qa = Aa, ea = Oa;
        l = ea >> 2;
        var ca = m[l], fa = Oa + 4;
        k = fa >> 2;
        var Ka = m[k], la = qa;
        j = la >> 2;
        m[j] = ca;
        var wa = qa + 4;
        i = wa >> 2;
        m[i] = Ka;
      } else {
        if (1 == gb) {
          Yg(w, z[d + 8 >> 2], z[d + 12 >> 2], z[n + 10], z[n + 11]);
          var xa = w, Ua = c, ma = xa, ja = xa + 4, Pa = m[ja >> 2], Fa = Ua;
          m[Fa >> 2] = m[ma >> 2];
          var Ea = Ua + 4;
          m[Ea >> 2] = Pa;
          Uf(D, d, z[n + 12], z[n + 13]);
          if (0 < m[o]) {
            for (var Sa = Y, Ga = G, La = G + 4, na = z[D >> 2], Ca = z[D + 4 >> 2], ua = S, sa = S + 4, aa = c, Ha = c + 4, hb = I, ib = I + 4, jb = Q, ub = Q + 4, kb = M, wb = M + 4, lb = N, mb = N + 4, Da = T, tb = T + 4, Xa = 0; ; ) {
              Uf(G, g, z[n + (5 * Xa | 0)], z[n + (5 * Xa | 0) + 1]);
              var nb = z[Ga >> 2], Ya = z[La >> 2];
              J(S, nb - na, Ya - Ca);
              var cb = z[aa >> 2], db = z[Ha >> 2];
              Xf(I, f - (z[ua >> 2] * cb + z[sa >> 2] * db), cb, db);
              J(M, nb + z[hb >> 2], Ya + z[ib >> 2]);
              Xf(Q, h, z[aa >> 2], z[Ha >> 2]);
              J(N, nb - z[jb >> 2], Ya - z[ub >> 2]);
              var yb = (Xa << 3) + c + 8;
              J(T, z[kb >> 2] + z[lb >> 2], z[wb >> 2] + z[mb >> 2]);
              Xf(Y, .5, z[Da >> 2], z[tb >> 2]);
              var ob = yb, ea = Sa;
              l = ea >> 2;
              var qb = m[l], fa = Sa + 4;
              k = fa >> 2;
              var eb = m[k], la = ob;
              j = la >> 2;
              m[j] = qb;
              wa = ob + 4;
              i = wa >> 2;
              m[i] = eb;
              var Za = Xa + 1;
              if (Za < m[o]) {
                Xa = Za;
              } else {
                break a;
              }
            }
          }
        } else {
          if (2 == gb) {
            Yg($, z[g + 8 >> 2], z[g + 12 >> 2], z[n + 10], z[n + 11]);
            var Ma = $, rb = c, ma = Ma, fb = m[ma >> 2], ja = Ma + 4, Va = m[ja >> 2], Fa = rb;
            m[Fa >> 2] = fb;
            Ea = rb + 4;
            m[Ea >> 2] = Va;
            Uf(ba, g, z[n + 12], z[n + 13]);
            var zb = 0 < m[o];
            b : do {
              if (zb) {
                for (var vb = X, pb = P, xb = P + 4, $a = z[ba >> 2], Gb = z[ba + 4 >> 2], Ab = L, sb = L + 4, Bb = c, Cb = c + 4, Db = V, bb = V + 4, Eb = Z, Ob = Z + 4, Fb = O, Wa = O + 4, Qb = R, Sb = R + 4, Xb = U, Tb = U + 4, Jb = 0; ; ) {
                  Uf(P, d, z[n + (5 * Jb | 0)], z[n + (5 * Jb | 0) + 1]);
                  var ac = z[pb >> 2], Vb = z[xb >> 2];
                  J(L, ac - $a, Vb - Gb);
                  var bc = z[Bb >> 2], lc = z[Cb >> 2];
                  Xf(V, h - (z[Ab >> 2] * bc + z[sb >> 2] * lc), bc, lc);
                  J(R, ac + z[Db >> 2], Vb + z[bb >> 2]);
                  Xf(Z, f, z[Bb >> 2], z[Cb >> 2]);
                  J(O, ac - z[Eb >> 2], Vb - z[Ob >> 2]);
                  var Pc = (Jb << 3) + c + 8;
                  J(U, z[Fb >> 2] + z[Qb >> 2], z[Wa >> 2] + z[Sb >> 2]);
                  Xf(X, .5, z[Xb >> 2], z[Tb >> 2]);
                  var Xc = Pc, ea = vb;
                  l = ea >> 2;
                  var Dc = m[l], fa = vb + 4;
                  k = fa >> 2;
                  var mc = m[k], la = Xc;
                  j = la >> 2;
                  m[j] = Dc;
                  wa = Xc + 4;
                  i = wa >> 2;
                  m[i] = mc;
                  var nc = Jb + 1;
                  if (nc < m[o]) {
                    Jb = nc;
                  } else {
                    var Qc = Bb, Yc = Cb;
                    break b;
                  }
                }
              } else {
                Qc = c, Yc = c + 4;
              }
            } while (0);
            Xg(ka, z[Qc >> 2], z[Yc >> 2]);
            var Zc = ka, oc = m[Zc + 4 >> 2];
            m[rb >> 2] = m[Zc >> 2];
            m[rb + 4 >> 2] = oc;
          }
        }
      }
    }
  } while (0);
  a = p;
}

fh.X = 1;

function $g(c, e, d, f, g, h) {
  var i, j, k = a;
  a += 24;
  var l = k + 8, o = k + 16;
  j = e >> 2;
  var n = z[j];
  i = e + 4 >> 2;
  var p = d * n + f * z[i] - g, n = e + 12, t = e + 16, d = d * z[n >> 2] + f * z[t >> 2] - g;
  if (0 < p) {
    var q = 0;
  } else {
    g = c >> 2, f = e >> 2, m[g] = m[f], m[g + 1] = m[f + 1], m[g + 2] = m[f + 2], q = 1;
  }
  0 < d ? f = q : (g = c + 12 * q >> 2, f = n >> 2, m[g] = m[f], m[g + 1] = m[f + 1], m[g + 2] = m[f + 2], f = q + 1);
  0 > p * d ? (d = p / (p - d), p = c + 12 * f, J(o, z[n >> 2] - z[j], z[t >> 2] - z[i]), Xf(l, d, z[o >> 2], z[o + 4 >> 2]), J(k, z[j] + z[l >> 2], z[i] + z[l + 4 >> 2]), i = m[k + 4 >> 2], m[p >> 2] = m[k >> 2], m[p + 4 >> 2] = i, c = c + 12 * f + 8, b[c] = h & 255, b[c + 1] = b[e + 9], b[c + 2] = 0, b[c + 3] = 1, e = f + 1) : e = f;
  a = k;
  return e;
}

$g.X = 1;

function gh(c, e, d) {
  var f = e >> 2, g = c >> 2, h, i = m[f + 1];
  if (0 == i) {
    m[g + 4] = e + 12, m[g + 5] = 1, z[g + 6] = z[f + 2];
  } else {
    if (2 == i) {
      m[g + 4] = e + 20, m[g + 5] = m[f + 37], z[g + 6] = z[f + 2];
    } else {
      if (3 == i) {
        i = e + 16;
        h = -1 < d ? m[i >> 2] > d ? 6 : 5 : 5;
        5 == h && K(H.c, 53, H.K, H.Db);
        e += 12;
        h = (d << 3) + m[e >> 2];
        var j = m[h + 4 >> 2];
        m[c >> 2] = m[h >> 2];
        m[c + 4 >> 2] = j;
        h = d + 1;
        d = c + 8;
        e = m[e >> 2];
        h < m[i >> 2] ? (e = (h << 3) + e, i = m[e >> 2], e = m[e + 4 >> 2], m[d >> 2] = i, m[d + 4 >> 2] = e) : (i = m[e + 4 >> 2], m[d >> 2] = m[e >> 2], m[d + 4 >> 2] = i);
        m[g + 4] = c;
        m[g + 5] = 2;
        z[g + 6] = z[f + 2];
      } else {
        1 == i ? (m[g + 4] = e + 12, m[g + 5] = 2, z[g + 6] = z[f + 2]) : K(H.c, 81, H.K, H.b);
      }
    }
  }
}

gh.X = 1;

function hh(c) {
  var e = c >> 2, d = a;
  a += 8;
  var f = c + 16, g = m[f + 4 >> 2], f = (E[0] = m[f >> 2], F[0]), h = (E[0] = g, F[0]), g = c + 36, i = c + 52, j = m[i + 4 >> 2], i = (E[0] = m[i >> 2], F[0]), j = (E[0] = j, F[0]);
  J(d, i - f, j - h);
  var k = z[d >> 2], l = z[d + 4 >> 2], f = f * k + h * l;
  if (0 > f) {
    if (h = i * k + j * l, 0 < h) {
      c = 1 / (h - f), z[e + 6] = h * c, z[e + 15] = c * -f, m[e + 27] = 2;
    } else {
      z[e + 15] = 1;
      m[e + 27] = 1;
      e = g >> 2;
      c >>= 2;
      for (g = e + 9; e < g; e++, c++) {
        m[c] = m[e];
      }
    }
  } else {
    z[e + 6] = 1, m[e + 27] = 1;
  }
  a = d;
}

hh.X = 1;

function ih(c) {
  var e = c >> 2, d = a;
  a += 24;
  var f = d + 8, g = d + 16, h = c + 16, i = m[h + 4 >> 2], h = (E[0] = m[h >> 2], F[0]), j = (E[0] = i, F[0]), i = c + 36, k = c + 52, l = m[k + 4 >> 2], k = (E[0] = m[k >> 2], F[0]), o = (E[0] = l, F[0]), l = c + 72, n = c + 88, p = m[n + 4 >> 2], t = (E[0] = m[n >> 2], F[0]), q = (E[0] = p, F[0]);
  J(d, k - h, o - j);
  var r = z[d >> 2], s = z[d + 4 >> 2], u = h * r + j * s, p = k * r + o * s, n = -u;
  J(f, t - h, q - j);
  var x = z[f >> 2], B = z[f + 4 >> 2], y = h * x + j * B, f = t * x + q * B, w = -y;
  J(g, t - k, q - o);
  var D = z[g >> 2], G = z[g + 4 >> 2], g = k * D + o * G, D = t * D + q * G, s = r * B - s * x, r = s * (k * q - o * t), t = s * (t * j - q * h), h = s * (h * o - j * k);
  if (0 > u | 0 > y) {
    if (0 <= u | 0 >= p | 0 < h) {
      if (0 <= y | 0 >= f | 0 < t) {
        if (0 < p | 0 > g) {
          if (0 < f | 0 < D) {
            if (0 <= g | 0 >= D | 0 < r) {
              c = 1 / (r + t + h), z[e + 6] = r * c, z[e + 15] = t * c, z[e + 24] = h * c, m[e + 27] = 3;
            } else {
              i = 1 / (D - g);
              z[e + 15] = D * i;
              z[e + 24] = i * -g;
              m[e + 27] = 2;
              e = l >> 2;
              c >>= 2;
              for (i = e + 9; e < i; e++, c++) {
                m[c] = m[e];
              }
            }
          } else {
            z[e + 24] = 1;
            m[e + 27] = 1;
            e = l >> 2;
            c >>= 2;
            for (i = e + 9; e < i; e++, c++) {
              m[c] = m[e];
            }
          }
        } else {
          z[e + 15] = 1;
          m[e + 27] = 1;
          e = i >> 2;
          c >>= 2;
          for (i = e + 9; e < i; e++, c++) {
            m[c] = m[e];
          }
        }
      } else {
        c = 1 / (f - y);
        z[e + 6] = f * c;
        z[e + 24] = c * w;
        m[e + 27] = 2;
        e = l >> 2;
        c = i >> 2;
        for (i = e + 9; e < i; e++, c++) {
          m[c] = m[e];
        }
      }
    } else {
      c = 1 / (p - u), z[e + 6] = p * c, z[e + 15] = c * n, m[e + 27] = 2;
    }
  } else {
    z[e + 6] = 1, m[e + 27] = 1;
  }
  a = d;
}

ih.X = 1;

function jh(c, e) {
  z[c >> 2] -= z[e >> 2];
  var d = c + 4;
  z[d >> 2] -= z[e + 4 >> 2];
}

function kh(c, e, d) {
  var f, g, h, i, j, k, l, o, n = a;
  a += 280;
  var p, t = n + 16, q = n + 32;
  g = n + 144;
  h = n + 156;
  k = n + 168;
  i = n + 176;
  j = n + 184;
  f = n + 192;
  var r = n + 200, s = n + 208, u = n + 216, x = n + 224, B = n + 232, y = n + 240, w = n + 248, D = n + 256, G = n + 264, M = n + 272;
  m[lh >> 2] += 1;
  var I = d + 28;
  o = n >> 2;
  l = d + 56 >> 2;
  m[o] = m[l];
  m[o + 1] = m[l + 1];
  m[o + 2] = m[l + 2];
  m[o + 3] = m[l + 3];
  o = t >> 2;
  l = d + 72 >> 2;
  m[o] = m[l];
  m[o + 1] = m[l + 1];
  m[o + 2] = m[l + 2];
  m[o + 3] = m[l + 3];
  mh(q, e, d, n, I, t);
  l = q >> 2;
  nh(k, q);
  k = q + 108 >> 2;
  o = j + 4;
  var S = n + 8, N = n + 12, Q = r + 4, Y = f + 4, T = t + 8, $ = t + 12, ba = u + 4, P = 0;
  a : for (;;) {
    if (20 <= P) {
      var R = P;
      break;
    }
    var V = m[k];
    p = 0 < V;
    b : do {
      if (p) {
        for (var L = 0; ; ) {
          if (m[g + (L << 2) >> 2] = m[l + (9 * L | 0) + 7], m[h + (L << 2) >> 2] = m[l + (9 * L | 0) + 8], L += 1, L == V) {
            break b;
          }
        }
      }
    } while (0);
    1 == V ? p = 9 : (2 == V ? hh(q) : 3 == V ? ih(q) : K(H.c, 498, H.Xa, H.b), p = 8);
    if (8 == p && 3 == m[k]) {
      R = P;
      break;
    }
    nh(i, q);
    p = j;
    var O = q, Z = O >> 2, L = a;
    a += 16;
    var X = L + 8, U = m[Z + 27];
    1 == U ? Xg(p, z[Z + 4], z[Z + 5]) : 2 == U ? (U = O + 16, O += 20, J(L, z[Z + 13] - z[U >> 2], z[Z + 14] - z[O >> 2]), Xg(X, z[U >> 2], z[O >> 2]), Z = z[L >> 2], O = z[L + 4 >> 2], 0 < Z * z[X + 4 >> 2] - O * z[X >> 2] ? oh(p, 1, Z, O) : J(p, O, -1 * Z)) : (K(H.c, 184, H.zb, H.b), m[p >> 2] = 0, m[p + 4 >> 2] = 0);
    a = L;
    Z = z[j >> 2];
    O = z[o >> 2];
    if (1.4210854715202004e-14 > Z * Z + O * O) {
      R = P;
      break;
    }
    L = m[k];
    X = q + 36 * L;
    Xg(r, Z, O);
    Wg(f, z[S >> 2], z[N >> 2], z[r >> 2], z[Q >> 2]);
    U = ph(d, z[f >> 2], z[Y >> 2]);
    p = q + 36 * L + 28;
    m[p >> 2] = U;
    U = qh(d, U);
    Uf(s, n, z[U >> 2], z[U + 4 >> 2]);
    var U = X, ka = m[s + 4 >> 2];
    m[U >> 2] = m[s >> 2];
    m[U + 4 >> 2] = ka;
    Wg(u, z[T >> 2], z[$ >> 2], Z, O);
    U = ph(I, z[u >> 2], z[ba >> 2]);
    Z = q + 36 * L + 32;
    m[Z >> 2] = U;
    O = q + 36 * L + 8;
    U = qh(I, U);
    Uf(x, t, z[U >> 2], z[U + 4 >> 2]);
    U = O;
    O = m[x >> 2];
    ka = m[x + 4 >> 2];
    m[U >> 2] = O;
    m[U + 4 >> 2] = ka;
    U = q + 36 * L + 16;
    O = (E[0] = O, F[0]);
    J(B, O - z[X >> 2], z[l + (9 * L | 0) + 3] - z[l + (9 * L | 0) + 1]);
    L = U;
    X = m[B + 4 >> 2];
    m[L >> 2] = m[B >> 2];
    m[L + 4 >> 2] = X;
    P += 1;
    m[rh >> 2] += 1;
    for (L = 0; L < V; ) {
      if (m[p >> 2] == m[g + (L << 2) >> 2] && m[Z >> 2] == m[h + (L << 2) >> 2]) {
        R = P;
        break a;
      }
      L += 1;
    }
    m[k] += 1;
  }
  m[sh >> 2] = m[sh >> 2] > R ? m[sh >> 2] : R;
  t = c + 8;
  th(q, c, t);
  j = c >> 2;
  f = z[j];
  i = c + 4 >> 2;
  r = z[i];
  h = t >> 2;
  s = z[h];
  g = c + 12 >> 2;
  r = uh(f, r, s, z[g]);
  f = c + 16 >> 2;
  z[f] = r;
  m[c + 20 >> 2] = R;
  R = vh(q);
  z[e >> 2] = R;
  R = q + 108 >> 2;
  md[e + 4 >> 1] = m[R] & 65535;
  r = 0 < m[R];
  a : do {
    if (r) {
      for (s = 0; ; ) {
        if (b[e + (s + 6)] = m[(q + 28 >> 2) + (9 * s | 0)] & 255, b[e + (s + 9)] = m[(q + 32 >> 2) + (9 * s | 0)] & 255, s += 1, s >= m[R]) {
          break a;
        }
      }
    }
  } while (0);
  0 != (b[d + 88] & 1) && (e = z[d + 24 >> 2], d = z[d + 52 >> 2], q = z[f], R = e + d, q > R & 1.1920928955078125e-7 < q ? (z[f] = q - R, J(y, z[h] - z[j], z[g] - z[i]), Zf(y), G = z[y >> 2], y = z[y + 4 >> 2], Xf(w, e, G, y), Ve(c, w), Xf(D, d, G, y), jh(t, D)) : (J(M, z[j] + z[h], z[i] + z[g]), Xf(G, .5, z[M >> 2], z[M + 4 >> 2]), w = m[G >> 2], D = m[G + 4 >> 2], m[c >> 2] = w, m[c + 4 >> 2] = D, m[t >> 2] = w, m[t + 4 >> 2] = D, z[f] = 0));
  a = n;
}

kh.X = 1;

function mh(c, e, d, f, g, h) {
  var i, j, k = a;
  a += 48;
  var l, o = k + 8;
  l = k + 16;
  var n = k + 24, p = k + 32, t = k + 40;
  j = e + 4;
  i = od[j >> 1];
  if (4 > i) {
    var q = i;
  } else {
    K(H.c, 102, H.rb, H.wc), q = md[j >> 1];
  }
  var r = q;
  j = c + 108 >> 2;
  m[j] = r;
  i = c >> 2;
  q = 0 == q;
  a : do {
    if (q) {
      var s = r;
    } else {
      for (var u = k, x = o, B = l, y = 0; ; ) {
        var w = c + 36 * y, D = nd[e + (y + 6)];
        m[i + (9 * y | 0) + 7] = D;
        var G = c + 36 * y + 32;
        m[G >> 2] = nd[e + (y + 9)];
        var M = qh(d, D), D = m[M + 4 >> 2], M = (E[0] = m[M >> 2], F[0]), I = (E[0] = D, F[0]), G = qh(g, m[G >> 2]), D = m[G + 4 >> 2], G = (E[0] = m[G >> 2], F[0]), D = (E[0] = D, F[0]);
        Uf(k, f, M, I);
        var I = w, M = m[u + 4 >> 2], S = I;
        m[S >> 2] = m[u >> 2];
        I += 4;
        m[I >> 2] = M;
        M = c + 36 * y + 8;
        Uf(o, h, G, D);
        D = M;
        G = m[x >> 2];
        M = m[x + 4 >> 2];
        m[D >> 2] = G;
        m[D + 4 >> 2] = M;
        D = c + 36 * y + 16;
        G = (E[0] = G, F[0]);
        J(l, G - z[w >> 2], z[i + (9 * y | 0) + 3] - z[i + (9 * y | 0) + 1]);
        w = D;
        G = m[B + 4 >> 2];
        m[w >> 2] = m[B >> 2];
        m[w + 4 >> 2] = G;
        z[i + (9 * y | 0) + 6] = 0;
        y += 1;
        w = m[j];
        if (y >= w) {
          s = w;
          break a;
        }
      }
    }
  } while (0);
  o = 1 < s;
  a : do {
    if (o) {
      l = z[e >> 2];
      i = vh(c);
      r = i < .5 * l;
      do {
        if (!r && !(2 * l < i | 1.1920928955078125e-7 > i)) {
          var N = m[j];
          l = 10;
          break a;
        }
      } while (0);
      m[j] = 0;
      l = 11;
    } else {
      N = s, l = 10;
    }
  } while (0);
  10 == l && (l = 0 == N ? 11 : 12);
  11 == l && (m[c + 28 >> 2] = 0, m[c + 32 >> 2] = 0, e = qh(d, 0), d = m[e + 4 >> 2], e = (E[0] = m[e >> 2], F[0]), d = (E[0] = d, F[0]), g = qh(g, 0), s = m[g + 4 >> 2], g = (E[0] = m[g >> 2], F[0]), s = (E[0] = s, F[0]), Uf(n, f, e, d), f = m[n + 4 >> 2], m[c >> 2] = m[n >> 2], m[c + 4 >> 2] = f, n = c + 8, Uf(p, h, g, s), h = m[p >> 2], f = m[p + 4 >> 2], m[n >> 2] = h, m[n + 4 >> 2] = f, p = c + 16, h = (E[0] = h, F[0]), n = (E[0] = f, F[0]), J(t, h - z[c >> 2], n - z[c + 4 >> 2]), c = m[t + 4 >> 2], m[p >> 2] = m[t >> 2], m[p + 4 >> 2] = c, m[j] = 1);
  a = k;
}

mh.X = 1;

function nh(c, e) {
  var d = e >> 2, f = a;
  a += 16;
  var g = f + 8, h = m[d + 27];
  0 == h ? (K(H.c, 194, H.ba, H.b), m[c >> 2] = 0, m[c + 4 >> 2] = 0) : 1 == h ? (d = e + 16, g = m[d + 4 >> 2], m[c >> 2] = m[d >> 2], m[c + 4 >> 2] = g) : 2 == h ? (Xf(f, z[d + 6], z[d + 4], z[d + 5]), Xf(g, z[d + 15], z[d + 13], z[d + 14]), J(c, z[f >> 2] + z[g >> 2], z[f + 4 >> 2] + z[g + 4 >> 2])) : (3 != h && K(H.c, 207, H.ba, H.b), m[c >> 2] = 0, m[c + 4 >> 2] = 0);
  a = f;
}

nh.X = 1;

function ph(c, e, d) {
  var f, g = m[c + 20 >> 2], h = 1 < g;
  a : do {
    if (h) {
      f = m[c + 16 >> 2] >> 2;
      for (var i = 0, j = z[f] * e + z[f + 1] * d, k = 1; ; ) {
        var l = z[(k << 3 >> 2) + f] * e + z[((k << 3) + 4 >> 2) + f] * d, o = l > j, i = o ? k : i, j = o ? l : j, k = k + 1;
        if (k >= g) {
          var n = i;
          break a;
        }
      }
    } else {
      n = 0;
    }
  } while (0);
  return n;
}

function qh(c, e) {
  2 == (-1 < e ? m[c + 20 >> 2] > e ? 3 : 2 : 2) && K(H.ec, 103, H.wb, H.mc);
  return (e << 3) + m[c + 16 >> 2];
}

function th(c, e, d) {
  var f = c >> 2, g = a;
  a += 88;
  var h = g + 8, i = g + 16, j = g + 24, k = g + 32, l = g + 40, o = g + 48, n = g + 56, p = g + 64, t = g + 72, q = g + 80, r = m[f + 27];
  0 == r ? K(H.c, 217, H.ca, H.b) : 1 == r ? (j = m[c + 4 >> 2], m[e >> 2] = m[c >> 2], m[e + 4 >> 2] = j, e = c + 8, j = m[e + 4 >> 2], m[d >> 2] = m[e >> 2], m[d + 4 >> 2] = j) : 2 == r ? (o = c + 24, Xf(h, z[o >> 2], z[f], z[f + 1]), c += 60, Xf(i, z[c >> 2], z[f + 9], z[f + 10]), J(g, z[h >> 2] + z[i >> 2], z[h + 4 >> 2] + z[i + 4 >> 2]), h = m[g + 4 >> 2], m[e >> 2] = m[g >> 2], m[e + 4 >> 2] = h, Xf(k, z[o >> 2], z[f + 2], z[f + 3]), Xf(l, z[c >> 2], z[f + 11], z[f + 12]), J(j, z[k >> 2] + z[l >> 2], z[k + 4 >> 2] + z[l + 4 >> 2]), e = m[j + 4 >> 2], m[d >> 2] = m[j >> 2], m[d + 4 >> 2] = e) : 3 == r ? (Xf(p, z[f + 6], z[f], z[f + 1]), Xf(t, z[f + 15], z[f + 9], z[f + 10]), J(n, z[p >> 2] + z[t >> 2], z[p + 4 >> 2] + z[t + 4 >> 2]), Xf(q, z[f + 24], z[f + 18], z[f + 19]), J(o, z[n >> 2] + z[q >> 2], z[n + 4 >> 2] + z[q + 4 >> 2]), j = m[o >> 2], f = m[o + 4 >> 2], m[e >> 2] = j, m[e + 4 >> 2] = f, m[d >> 2] = j, m[d + 4 >> 2] = f) : K(H.c, 236, H.ca, H.b);
  a = g;
}

th.X = 1;

function uh(c, e, d, f) {
  var g = a;
  a += 8;
  J(g, c - d, e - f);
  c = $f(z[g >> 2] * z[g >> 2] + z[g + 4 >> 2] * z[g + 4 >> 2]);
  a = g;
  return c;
}

function vh(c) {
  var e = c >> 2, d = a;
  a += 16;
  var f = d + 8, g = m[e + 27];
  0 == g ? (K(H.c, 246, H.da, H.b), e = 0) : 1 == g ? e = 0 : 2 == g ? e = uh(z[e + 4], z[e + 5], z[e + 13], z[e + 14]) : 3 == g ? (g = c + 16, c += 20, J(d, z[e + 13] - z[g >> 2], z[e + 14] - z[c >> 2]), J(f, z[e + 22] - z[g >> 2], z[e + 23] - z[c >> 2]), e = z[d >> 2] * z[f + 4 >> 2] - z[d + 4 >> 2] * z[f >> 2]) : (K(H.c, 259, H.da, H.b), e = 0);
  a = d;
  return e;
}

function oh(c, e, d, f) {
  J(c, f * -e, d * e);
}

function wh(c) {
  return 2 * (z[c + 8 >> 2] - z[c >> 2] + (z[c + 12 >> 2] - z[c + 4 >> 2]));
}

function xh(c) {
  var e, d, f, g;
  g = c + 16 >> 2;
  var h = m[g];
  if (-1 == h) {
    h = c + 8;
    f = h >> 2;
    e = c + 12 >> 2;
    d = m[e];
    if (m[f] == d) {
      var i = d;
    } else {
      K(H.a, 61, H.bb, H.Eb), i = m[e];
    }
    c += 4;
    d = c >> 2;
    var j = m[d];
    m[e] = i << 1;
    i = Dd(72 * i);
    m[d] = i;
    Pf(i, j, 36 * m[f]);
    Sf(j);
    var i = m[f], j = m[e] - 1, k = i < j;
    a : do {
      if (k) {
        for (var l = i; ; ) {
          var o = l + 1;
          m[m[d] + 36 * l + 20 >> 2] = o;
          m[m[d] + 36 * l + 32 >> 2] = -1;
          l = m[e] - 1;
          if (o < l) {
            l = o;
          } else {
            var n = l;
            break a;
          }
        }
      } else {
        n = j;
      }
    } while (0);
    m[m[d] + 36 * n + 20 >> 2] = -1;
    m[m[d] + 36 * (m[e] - 1) + 32 >> 2] = -1;
    n = m[f];
    m[g] = n;
    e = c >> 2;
  } else {
    n = h, e = c + 4 >> 2, h = c + 8;
  }
  f = m[e] + 36 * n + 20;
  m[g] = m[f >> 2];
  m[f >> 2] = -1;
  m[m[e] + 36 * n + 24 >> 2] = -1;
  m[m[e] + 36 * n + 28 >> 2] = -1;
  m[m[e] + 36 * n + 32 >> 2] = 0;
  m[m[e] + 36 * n + 16 >> 2] = 0;
  m[h >> 2] += 1;
  return n;
}

xh.X = 1;

function yh(c, e) {
  var d;
  2 == (-1 < e ? m[c + 12 >> 2] > e ? 3 : 2 : 2) && K(H.a, 97, H.G, H.Wb);
  d = c + 8 >> 2;
  0 < m[d] || K(H.a, 98, H.G, H.gc);
  var f = c + 16, g = c + 4;
  m[m[g >> 2] + 36 * e + 20 >> 2] = m[f >> 2];
  m[m[g >> 2] + 36 * e + 32 >> 2] = -1;
  m[f >> 2] = e;
  m[d] -= 1;
}

function zh(c, e, d) {
  var f, g = a;
  a += 24;
  var h = g + 8, i = g + 16, j = xh(c);
  J(g, .10000000149011612, .10000000149011612);
  f = c + 4 >> 2;
  var k = m[f] + 36 * j, l = z[g >> 2], o = z[g + 4 >> 2];
  J(h, z[e >> 2] - l, z[e + 4 >> 2] - o);
  var n = m[h + 4 >> 2];
  m[k >> 2] = m[h >> 2];
  m[k + 4 >> 2] = n;
  h = m[f] + 36 * j + 8;
  J(i, z[e + 8 >> 2] + l, z[e + 12 >> 2] + o);
  e = m[i + 4 >> 2];
  m[h >> 2] = m[i >> 2];
  m[h + 4 >> 2] = e;
  m[m[f] + 36 * j + 16 >> 2] = d;
  m[m[f] + 36 * j + 32 >> 2] = 0;
  ni(c, j);
  a = g;
  return j;
}

zh.X = 1;

function ni(c, e) {
  var d, f, g, h, i = a;
  a += 96;
  var j = i + 16, k = i + 32, l = i + 48, o = i + 64, n = i + 80;
  g = c + 24;
  m[g >> 2] += 1;
  h = c >> 2;
  var p = m[h], t = -1 == p;
  a : do {
    if (t) {
      m[h] = e, m[m[c + 4 >> 2] + 36 * e + 20 >> 2] = -1;
    } else {
      g = c + 4 >> 2;
      var q = m[g];
      f = i >> 2;
      d = q + 36 * e >> 2;
      m[f] = m[d];
      m[f + 1] = m[d + 1];
      m[f + 2] = m[d + 2];
      m[f + 3] = m[d + 3];
      d = p;
      for (var r = q; ; ) {
        q = m[(r + 24 >> 2) + (9 * d | 0)];
        if (-1 == q) {
          var s = r;
          break;
        }
        f = m[(r + 28 >> 2) + (9 * d | 0)];
        var r = r + 36 * d, u = wh(r);
        oi(j, r, i);
        var x = wh(j), r = 2 * x, u = 2 * (x - u), x = m[g], B = x + 36 * q;
        -1 == m[(x + 24 >> 2) + (9 * q | 0)] ? (oi(k, i, B), x = wh(k), B = m[g]) : (oi(l, i, B), B = m[g], x = wh(l) - wh(B + 36 * q));
        var x = x + u, y = B + 36 * f;
        -1 == m[(B + 24 >> 2) + (9 * f | 0)] ? (oi(o, i, y), B = wh(o)) : (oi(n, i, y), B = wh(n) - wh(m[g] + 36 * f));
        u = B + u;
        if (r < x & r < u) {
          s = m[g];
          break;
        } else {
          d = x < u ? q : f, r = m[g];
        }
      }
      q = m[(s + 20 >> 2) + (9 * d | 0)];
      f = xh(c);
      m[m[g] + 36 * f + 20 >> 2] = q;
      m[m[g] + 36 * f + 16 >> 2] = 0;
      r = m[g];
      oi(r + 36 * f, i, r + 36 * d);
      r = m[g];
      m[r + 36 * f + 32 >> 2] = m[(r + 32 >> 2) + (9 * d | 0)] + 1;
      r = m[g];
      -1 == q ? (m[r + 36 * f + 24 >> 2] = d, m[m[g] + 36 * f + 28 >> 2] = e, m[m[g] + 36 * d + 20 >> 2] = f, m[m[g] + 36 * e + 20 >> 2] = f, m[h] = f) : (u = r + 36 * q + 24, m[u >> 2] == d ? m[u >> 2] = f : m[r + 36 * q + 28 >> 2] = f, m[m[g] + 36 * f + 24 >> 2] = d, m[m[g] + 36 * f + 28 >> 2] = e, m[m[g] + 36 * d + 20 >> 2] = f, m[m[g] + 36 * e + 20 >> 2] = f);
      d = m[(m[g] + 20 >> 2) + (9 * e | 0)];
      if (-1 != d) {
        for (;;) {
          if (d = pi(c, d), f = m[g], q = m[(f + 24 >> 2) + (9 * d | 0)], f = m[(f + 28 >> 2) + (9 * d | 0)], -1 == q && K(H.a, 307, H.F, H.Dc), -1 == f && K(H.a, 308, H.F, H.Gc), r = m[g], m[r + 36 * d + 32 >> 2] = (m[(r + 32 >> 2) + (9 * q | 0)] > m[(r + 32 >> 2) + (9 * f | 0)] ? m[(r + 32 >> 2) + (9 * q | 0)] : m[(r + 32 >> 2) + (9 * f | 0)]) + 1, r = m[g], oi(r + 36 * d, r + 36 * q, r + 36 * f), d = m[(m[g] + 20 >> 2) + (9 * d | 0)], -1 == d) {
            break a;
          }
        }
      }
    }
  } while (0);
  a = i;
}

ni.X = 1;

function qi(c, e) {
  var d, f, g;
  g = c >> 2;
  var h = m[g] == e;
  a : do {
    if (h) {
      m[g] = -1;
    } else {
      f = c + 4 >> 2;
      var i = m[f];
      d = i >> 2;
      var j = m[d + (9 * e | 0) + 5], k = m[d + (9 * j | 0) + 5], l = m[d + (9 * j | 0) + 6];
      d = l == e ? m[d + (9 * j | 0) + 7] : l;
      if (-1 == k) {
        m[g] = d, m[i + 36 * d + 20 >> 2] = -1, yh(c, j);
      } else {
        l = i + 36 * k + 24;
        m[l >> 2] == j ? m[l >> 2] = d : m[i + 36 * k + 28 >> 2] = d;
        m[m[f] + 36 * d + 20 >> 2] = k;
        yh(c, j);
        for (i = k; ; ) {
          if (i = pi(c, i), d = m[f], j = m[(d + 24 >> 2) + (9 * i | 0)], k = m[(d + 28 >> 2) + (9 * i | 0)], oi(d + 36 * i, d + 36 * j, d + 36 * k), d = m[f], m[d + 36 * i + 32 >> 2] = (m[(d + 32 >> 2) + (9 * j | 0)] > m[(d + 32 >> 2) + (9 * k | 0)] ? m[(d + 32 >> 2) + (9 * j | 0)] : m[(d + 32 >> 2) + (9 * k | 0)]) + 1, i = m[(m[f] + 20 >> 2) + (9 * i | 0)], -1 == i) {
            break a;
          }
        }
      }
    }
  } while (0);
}

qi.X = 1;

function ri(c, e, d, f) {
  var g, h = a;
  a += 32;
  var i = h + 8, j = h + 16, k = h + 24;
  2 == (-1 < e ? m[c + 12 >> 2] > e ? 3 : 2 : 2) && K(H.a, 135, H.H, H.w);
  g = c + 4 >> 2;
  var l = m[g];
  -1 != m[(l + 24 >> 2) + (9 * e | 0)] && (K(H.a, 137, H.H, H.xc), l = m[g]);
  if (z[l + 36 * e >> 2] > z[d >> 2] ? 0 : z[l + 36 * e + 4 >> 2] > z[d + 4 >> 2] ? 0 : z[d + 8 >> 2] > z[l + 36 * e + 8 >> 2] ? 0 : z[d + 12 >> 2] <= z[l + 36 * e + 12 >> 2]) {
    c = 0;
  } else {
    qi(c, e);
    var o = z[d >> 2], n = z[d + 4 >> 2], l = z[d + 8 >> 2], d = z[d + 12 >> 2];
    J(h, .10000000149011612, .10000000149011612);
    var p = z[h >> 2], t = z[h + 4 >> 2];
    J(i, o - p, n - t);
    n = m[i + 4 >> 2];
    o = (E[0] = m[i >> 2], F[0]);
    i = (E[0] = n, F[0]);
    J(j, l + p, d + t);
    d = m[j + 4 >> 2];
    l = (E[0] = m[j >> 2], F[0]);
    j = (E[0] = d, F[0]);
    Xf(k, 2, z[f >> 2], z[f + 4 >> 2]);
    d = z[k >> 2];
    0 > d ? f = o + d : (f = o, l += d);
    o = z[k + 4 >> 2];
    0 > o ? k = i + o : (k = i, j += o);
    g = m[g] >> 2;
    z[g + (9 * e | 0)] = f;
    z[g + (9 * e | 0) + 1] = k;
    z[g + (9 * e | 0) + 2] = l;
    z[g + (9 * e | 0) + 3] = j;
    ni(c, e);
    c = 1;
  }
  a = h;
  return c;
}

ri.X = 1;

function oi(c, e, d) {
  var f = a;
  a += 16;
  var g = f + 8;
  J(f, z[e >> 2] < z[d >> 2] ? z[e >> 2] : z[d >> 2], z[e + 4 >> 2] < z[d + 4 >> 2] ? z[e + 4 >> 2] : z[d + 4 >> 2]);
  var h = m[f + 4 >> 2];
  m[c >> 2] = m[f >> 2];
  m[c + 4 >> 2] = h;
  c += 8;
  J(g, z[e + 8 >> 2] > z[d + 8 >> 2] ? z[e + 8 >> 2] : z[d + 8 >> 2], z[e + 12 >> 2] > z[d + 12 >> 2] ? z[e + 12 >> 2] : z[d + 12 >> 2]);
  e = m[g + 4 >> 2];
  m[c >> 2] = m[g >> 2];
  m[c + 4 >> 2] = e;
  a = f;
}

function pi(c, e) {
  var d, f, g, h, i, j, k, l, o, n;
  f = c >> 2;
  var p;
  -1 == e && K(H.a, 382, H.e, H.Ic);
  d = c + 4 >> 2;
  g = m[d];
  var t = g + 36 * e;
  n = g + 36 * e + 24 >> 2;
  i = m[n];
  if (-1 == i) {
    o = e;
  } else {
    if (o = g + 36 * e + 32 >> 2, 2 > m[o]) {
      o = e;
    } else {
      l = g + 36 * e + 28 >> 2;
      h = m[l];
      p = -1 < i ? i < m[f + 3] ? 7 : 6 : 6;
      6 == p && K(H.a, 392, H.e, H.Jc);
      p = -1 < h ? h < m[f + 3] ? 10 : 9 : 9;
      9 == p && K(H.a, 393, H.e, H.Bb);
      var q = m[d], r = q + 36 * i, s = q + 36 * h;
      k = q + 36 * h + 32 >> 2;
      j = q + 36 * i + 32 >> 2;
      var u = m[k] - m[j];
      if (1 < u) {
        var x = q + 36 * h + 24;
        n = m[x >> 2];
        i = q + 36 * h + 28 >> 2;
        var u = m[i], B = q + 36 * n, y = q + 36 * u;
        p = -1 < n ? n < m[f + 3] ? 14 : 13 : 13;
        13 == p && K(H.a, 407, H.e, H.Cb);
        p = -1 < u ? u < m[f + 3] ? 17 : 16 : 16;
        16 == p && K(H.a, 408, H.e, H.Ib);
        m[x >> 2] = e;
        p = g + 36 * e + 20;
        x = m[p >> 2];
        g = q + 36 * h + 20 >> 2;
        m[g] = x;
        m[p >> 2] = h;
        p = m[g];
        -1 == p ? m[f] = h : (f = m[d], x = f + 36 * p + 24, m[x >> 2] == e ? m[x >> 2] = h : (m[(f + 28 >> 2) + (9 * p | 0)] == e ? (g = p, d = f) : (K(H.a, 424, H.e, H.Mb), g = m[g], d = m[d]), m[(d + 28 >> 2) + (9 * g | 0)] = h));
        f = q + 36 * n + 32 >> 2;
        d = q + 36 * u + 32 >> 2;
        m[f] > m[d] ? (m[i] = n, m[l] = u, m[q + 36 * u + 20 >> 2] = e, oi(t, r, y), oi(s, t, B), j = (m[j] > m[d] ? m[j] : m[d]) + 1, m[o] = j, o = j > m[f] ? j : m[f]) : (m[i] = u, m[l] = n, m[q + 36 * n + 20 >> 2] = e, oi(t, r, B), oi(s, t, y), j = (m[j] > m[f] ? m[j] : m[f]) + 1, m[o] = j, o = j > m[d] ? j : m[d]);
        m[k] = o + 1;
        o = h;
      } else {
        -1 > u ? (x = q + 36 * i + 24, l = m[x >> 2], h = q + 36 * i + 28 >> 2, u = m[h], B = q + 36 * l, y = q + 36 * u, p = -1 < l ? l < m[f + 3] ? 32 : 31 : 31, 31 == p && K(H.a, 467, H.e, H.Pb), p = -1 < u ? u < m[f + 3] ? 35 : 34 : 34, 34 == p && K(H.a, 468, H.e, H.Qb), m[x >> 2] = e, p = g + 36 * e + 20, x = m[p >> 2], g = q + 36 * i + 20 >> 2, m[g] = x, m[p >> 2] = i, p = m[g], -1 == p ? m[f] = i : (f = m[d], x = f + 36 * p + 24, m[x >> 2] == e ? m[x >> 2] = i : (m[(f + 28 >> 2) + (9 * p | 0)] == e ? (g = p, d = f) : (K(H.a, 484, H.e, H.Rb), g = m[g], d = m[d]), m[(d + 28 >> 2) + (9 * g | 0)] = i)), f = q + 36 * l + 32 >> 2, d = q + 36 * u + 32 >> 2, m[f] > m[d] ? (m[h] = l, m[n] = u, m[q + 36 * u + 20 >> 2] = e, oi(t, s, y), oi(r, t, B), k = (m[k] > m[d] ? m[k] : m[d]) + 1, m[o] = k, o = k > m[f] ? k : m[f]) : (m[h] = u, m[n] = l, m[q + 36 * l + 20 >> 2] = e, oi(t, s, B), oi(r, t, y), k = (m[k] > m[f] ? m[k] : m[f]) + 1, m[o] = k, o = k > m[d] ? k : m[d]), m[j] = o + 1, o = i) : o = e;
      }
    }
  }
  return o;
}

pi.X = 1;

function si(c, e) {
  var d, f, g, h, i, j, k = a;
  a += 340;
  var l, o = k + 36, n = k + 72, p = k + 84, t = k + 176, q = k + 192, r = k + 208, s = k + 232, u = k + 332, x = k + 336;
  m[ti >> 2] += 1;
  j = c >> 2;
  m[j] = 0;
  var B = e + 128, y = z[B >> 2];
  i = c + 4 >> 2;
  z[i] = y;
  var y = e + 28, w = e + 56 >> 2;
  d = k >> 2;
  for (f = w + 9; w < f; w++, d++) {
    m[d] = m[w];
  }
  w = e + 92 >> 2;
  d = o >> 2;
  for (f = w + 9; w < f; w++, d++) {
    m[d] = m[w];
  }
  ui(k);
  ui(o);
  B = z[B >> 2];
  w = .004999999888241291 > z[e + 24 >> 2] + z[e + 52 >> 2] - .014999999664723873 ? .004999999888241291 : z[e + 24 >> 2] + z[e + 52 >> 2] - .014999999664723873;
  .0012499999720603228 < w || K(H.p, 280, H.Ya, H.Nb);
  md[n + 4 >> 1] = 0;
  eh(p);
  eh(p + 28);
  f = p >> 2;
  d = e >> 2;
  m[f] = m[d];
  m[f + 1] = m[d + 1];
  m[f + 2] = m[d + 2];
  m[f + 3] = m[d + 3];
  m[f + 4] = m[d + 4];
  m[f + 5] = m[d + 5];
  m[f + 6] = m[d + 6];
  f = p + 28 >> 2;
  d = y >> 2;
  m[f] = m[d];
  m[f + 1] = m[d + 1];
  m[f + 2] = m[d + 2];
  m[f + 3] = m[d + 3];
  m[f + 4] = m[d + 4];
  m[f + 5] = m[d + 5];
  m[f + 6] = m[d + 6];
  b[p + 88] = 0;
  h = p + 56 >> 2;
  g = t >> 2;
  f = p + 72 >> 2;
  d = q >> 2;
  var D = r + 16, G = w + .0012499999720603228, M = w - .0012499999720603228, I = 0, S = 0;
  a : for (;;) {
    vi(k, t, I);
    vi(o, q, I);
    m[h] = m[g];
    m[h + 1] = m[g + 1];
    m[h + 2] = m[g + 2];
    m[h + 3] = m[g + 3];
    m[f] = m[d];
    m[f + 1] = m[d + 1];
    m[f + 2] = m[d + 2];
    m[f + 3] = m[d + 3];
    kh(r, n, p);
    var N = z[D >> 2];
    if (0 < N) {
      if (N < G) {
        m[j] = 3;
        z[i] = I;
        var Q = S;
        l = 24;
        break;
      } else {
        wi(s, n, e, k, y, o, I);
        for (var N = 0, Y = B; ; ) {
          var T = xi(s, u, x, Y);
          if (T > G) {
            m[j] = 4, z[i] = B, l = 21;
          } else {
            if (T > M) {
              I = Y;
            } else {
              var $ = v[u >> 2], ba = v[x >> 2], P = yi(s, $, ba, I);
              if (P < M) {
                m[j] = 1;
                z[i] = I;
                l = 21;
                break a;
              } else {
                if (P > G) {
                  for (var R = Y, V = I, L = 0, O = P; ; ) {
                    var P = 0 == (L & 1) ? .5 * (V + R) : V + (w - O) * (R - V) / (T - O), Z = yi(s, $, ba, P);
                    if (.0012499999720603228 > (0 < Z - w ? Z - w : -(Z - w))) {
                      var X = L, U = P;
                      break;
                    }
                    var ka = Z > w, T = ka ? T : Z, O = ka ? Z : O, V = ka ? P : V, R = ka ? R : P, L = L + 1;
                    m[zi >> 2] += 1;
                    if (50 == L) {
                      X = 50;
                      U = Y;
                      break;
                    }
                  }
                  m[Ai >> 2] = m[Ai >> 2] > X ? m[Ai >> 2] : X;
                  N += 1;
                  if (8 != N) {
                    Y = U;
                    continue;
                  }
                } else {
                  m[j] = 3;
                  z[i] = I;
                  l = 21;
                  break a;
                }
              }
            }
            N = S + 1;
            m[Bi >> 2] += 1;
            if (20 != N) {
              S = N;
              continue a;
            }
            m[j] = 1;
            z[i] = I;
            Q = 20;
            l = 24;
          }
          break a;
        }
      }
    } else {
      m[j] = 2;
      z[i] = 0;
      Q = S;
      l = 24;
      break;
    }
  }
  21 == l && (m[Bi >> 2] += 1, Q = S + 1);
  m[Ci >> 2] = m[Ci >> 2] > Q ? m[Ci >> 2] : Q;
  a = k;
}

si.X = 1;

function ui(c) {
  var e;
  e = c + 24 >> 2;
  var d = 6.2831854820251465 * Di(z[e] / 6.2831854820251465);
  z[e] -= d;
  c += 28;
  z[c >> 2] -= d;
}

function vi(c, e, d) {
  var c = c >> 2, f = a;
  a += 32;
  var g = f + 8, h = f + 16, i = f + 24, j = 1 - d;
  Xf(g, j, z[c + 2], z[c + 3]);
  Xf(h, d, z[c + 4], z[c + 5]);
  J(f, z[g >> 2] + z[h >> 2], z[g + 4 >> 2] + z[h + 4 >> 2]);
  g = m[f + 4 >> 2];
  m[e >> 2] = m[f >> 2];
  m[e + 4 >> 2] = g;
  g = e + 8;
  Ei(g, j * z[c + 6] + z[c + 7] * d);
  Yg(i, z[g >> 2], z[e + 12 >> 2], z[c], z[c + 1]);
  jh(e, i);
  a = f;
}

vi.X = 1;

function wi(c, e, d, f, g, h, i) {
  var j, k, l, o, n = a;
  a += 200;
  var p = n + 16, t = n + 32, q = n + 40, r = n + 48, s = n + 56, u = n + 64, x = n + 72, B = n + 80, y = n + 88, w = n + 96, D = n + 104, G = n + 112, M = n + 120, I = n + 128, S = n + 136, N = n + 144, Q = n + 152, Y = n + 160, T = n + 168, $ = n + 176, ba = n + 184, P = n + 192;
  o = c >> 2;
  m[o] = d;
  l = c + 4 >> 2;
  m[l] = g;
  var R = od[e + 4 >> 1];
  0 != R & 3 > R || K(H.p, 50, H.ib, H.zc);
  for (var V = c + 8, L = f >> 2, O = V >> 2, Z = L + 9; L < Z; L++, O++) {
    m[O] = m[L];
  }
  for (var X = c + 44, L = h >> 2, O = X >> 2, Z = L + 9; L < Z; L++, O++) {
    m[O] = m[L];
  }
  vi(V, n, i);
  vi(X, p, i);
  if (1 == R) {
    m[c + 80 >> 2] = 0;
    var U = qh(m[o], nd[e + 6]), ka = U;
    k = ka >> 2;
    var Ja = U + 4;
    j = Ja >> 2;
    var gb = m[j], Ta = (E[0] = m[k], F[0]), ya = (E[0] = gb, F[0]), Na = qh(m[l], nd[e + 9]), oa = m[Na + 4 >> 2], ga = (E[0] = m[Na >> 2], F[0]), ia = (E[0] = oa, F[0]);
    Uf(t, n, Ta, ya);
    Uf(q, p, ga, ia);
    var za = c + 92;
    J(r, z[q >> 2] - z[t >> 2], z[q + 4 >> 2] - z[t + 4 >> 2]);
    var Ra = m[r + 4 >> 2];
    m[za >> 2] = m[r >> 2];
    m[za + 4 >> 2] = Ra;
    Zf(za);
  } else {
    var va = e + 6, ta = e + 7, Aa = c + 80;
    if (b[va] == b[ta]) {
      m[Aa >> 2] = 2;
      var Oa = qh(g, nd[e + 9]), qa = Oa, ea = Oa + 4, ca = m[ea >> 2], fa = (E[0] = m[qa >> 2], F[0]), Ka = (E[0] = ca, F[0]), la = qh(g, nd[e + 10]), wa = la, xa = la + 4, Ua = m[xa >> 2], ma = (E[0] = m[wa >> 2], F[0]), ja = (E[0] = Ua, F[0]), Pa = c + 92;
      J(u, ma - fa, ja - Ka);
      J(s, z[u + 4 >> 2], -1 * z[u >> 2]);
      var Fa = s, Ea = s + 4, Sa = m[Ea >> 2], Ga = Pa;
      m[Ga >> 2] = m[Fa >> 2];
      var La = Pa + 4;
      m[La >> 2] = Sa;
      Zf(Pa);
      var na = c + 96;
      Yg(x, z[p + 8 >> 2], z[p + 12 >> 2], z[Pa >> 2], z[na >> 2]);
      var Ca = c + 84;
      J(y, fa + ma, Ka + ja);
      Xf(B, .5, z[y >> 2], z[y + 4 >> 2]);
      var ua = B, sa = m[ua >> 2], aa = B + 4, Ha = m[aa >> 2], hb = Ca;
      m[hb >> 2] = sa;
      var ib = Ca + 4;
      m[ib >> 2] = Ha;
      var jb = (E[0] = sa, F[0]), ub = (E[0] = Ha, F[0]);
      Uf(w, p, jb, ub);
      var kb = qh(d, nd[va]), wb = m[kb + 4 >> 2], lb = (E[0] = m[kb >> 2], F[0]), mb = (E[0] = wb, F[0]);
      Uf(D, n, lb, mb);
      J(G, z[D >> 2] - z[w >> 2], z[D + 4 >> 2] - z[w + 4 >> 2]);
      if (0 > z[G >> 2] * z[x >> 2] + z[G + 4 >> 2] * z[x + 4 >> 2]) {
        Xg(M, z[Pa >> 2], z[na >> 2]);
        var Da = M, tb = m[Da >> 2], Xa = M + 4, nb = m[Xa >> 2], ka = Pa;
        k = ka >> 2;
        m[k] = tb;
        Ja = Pa + 4;
        j = Ja >> 2;
        m[j] = nb;
      }
    } else {
      m[Aa >> 2] = 1;
      var Ya = qh(m[o], nd[va]), qa = Ya, ea = Ya + 4, cb = m[ea >> 2], db = (E[0] = m[qa >> 2], F[0]), yb = (E[0] = cb, F[0]), ob = qh(m[o], nd[ta]), wa = ob, xa = ob + 4, qb = m[xa >> 2], eb = (E[0] = m[wa >> 2], F[0]), Za = (E[0] = qb, F[0]), Ma = c + 92;
      J(S, eb - db, Za - yb);
      J(I, z[S + 4 >> 2], -1 * z[S >> 2]);
      var Fa = I, rb = m[Fa >> 2], Ea = I + 4, fb = m[Ea >> 2], Ga = Ma;
      m[Ga >> 2] = rb;
      La = Ma + 4;
      m[La >> 2] = fb;
      Zf(Ma);
      var Va = c + 96;
      Yg(N, z[n + 8 >> 2], z[n + 12 >> 2], z[Ma >> 2], z[Va >> 2]);
      var zb = c + 84;
      J(Y, db + eb, yb + Za);
      Xf(Q, .5, z[Y >> 2], z[Y + 4 >> 2]);
      var ua = Q, vb = m[ua >> 2], aa = Q + 4, pb = m[aa >> 2], hb = zb;
      m[hb >> 2] = vb;
      ib = zb + 4;
      m[ib >> 2] = pb;
      var xb = (E[0] = vb, F[0]), $a = (E[0] = pb, F[0]);
      Uf(T, n, xb, $a);
      var Gb = qh(m[l], nd[e + 9]), Ab = m[Gb + 4 >> 2], sb = (E[0] = m[Gb >> 2], F[0]), Bb = (E[0] = Ab, F[0]);
      Uf($, p, sb, Bb);
      J(ba, z[$ >> 2] - z[T >> 2], z[$ + 4 >> 2] - z[T + 4 >> 2]);
      if (0 > z[ba >> 2] * z[N >> 2] + z[ba + 4 >> 2] * z[N + 4 >> 2]) {
        Xg(P, z[Ma >> 2], z[Va >> 2]);
        var Da = P, Cb = m[Da >> 2], Xa = P + 4, Db = m[Xa >> 2], ka = Ma;
        k = ka >> 2;
        m[k] = Cb;
        Ja = Ma + 4;
        j = Ja >> 2;
        m[j] = Db;
      }
    }
  }
  a = n;
}

wi.X = 1;

function Fi(c, e) {
  m[c + 4 >> 2] = m[e + 4 >> 2];
  z[c + 8 >> 2] = z[e + 8 >> 2];
}

function xi(c, e, d, f) {
  var g, h, i, j, k = d >> 2, l = e >> 2, o = c >> 2, e = a;
  a += 176;
  j = e >> 2;
  d = e + 16;
  i = d >> 2;
  var n = e + 32, p = e + 40, t = e + 48, q = e + 56, r = e + 64, s = e + 72, u = e + 80;
  g = e + 88;
  var x = e + 96, B = e + 104;
  h = e + 112;
  var y = e + 120, w = e + 128, D = e + 136, G = e + 144, M = e + 152, I = e + 160, S = e + 168;
  vi(c + 8, e, f);
  vi(c + 44, d, f);
  f = m[o + 20];
  0 == f ? (y = z[j + 2], D = z[j + 3], h = c + 92 >> 2, I = z[h], g = c + 96 >> 2, Wg(n, y, D, I, z[g]), Xg(t, z[h], z[g]), Wg(p, z[i + 2], z[i + 3], z[t >> 2], z[t + 4 >> 2]), m[l] = ph(m[c >> 2], z[n >> 2], z[n + 4 >> 2]), y = c + 4, m[k] = ph(m[y >> 2], z[p >> 2], z[p + 4 >> 2]), c = qh(m[c >> 2], m[l]), l = m[c + 4 >> 2], c = (E[0] = m[c >> 2], F[0]), l = (E[0] = l, F[0]), y = qh(m[y >> 2], m[k]), k = m[y + 4 >> 2], y = (E[0] = m[y >> 2], F[0]), k = (E[0] = k, F[0]), Uf(q, e, c, l), Uf(r, d, y, k), J(s, z[r >> 2] - z[q >> 2], z[r + 4 >> 2] - z[q + 4 >> 2]), d = z[s >> 2] * z[h] + z[s + 4 >> 2] * z[g]) : 1 == f ? (Yg(u, z[j + 2], z[j + 3], z[o + 23], z[o + 24]), Uf(g, e, z[o + 21], z[o + 22]), q = z[u >> 2], r = z[u + 4 >> 2], Xg(B, q, r), Wg(x, z[i + 2], z[i + 3], z[B >> 2], z[B + 4 >> 2]), m[l] = -1, s = c + 4, c = ph(m[s >> 2], z[x >> 2], z[x + 4 >> 2]), m[k] = c, s = qh(m[s >> 2], c), k = m[s + 4 >> 2], s = (E[0] = m[s >> 2], F[0]), k = (E[0] = k, F[0]), Uf(h, d, s, k), J(y, z[h >> 2] - z[g >> 2], z[h + 4 >> 2] - z[g + 4 >> 2]), d = z[y >> 2] * q + z[y + 4 >> 2] * r) : 2 == f ? (Yg(w, z[i + 2], z[i + 3], z[o + 23], z[o + 24]), Uf(D, d, z[o + 21], z[o + 22]), d = z[w >> 2], q = z[w + 4 >> 2], Xg(M, d, q), Wg(G, z[j + 2], z[j + 3], z[M >> 2], z[M + 4 >> 2]), m[k] = -1, k = ph(m[c >> 2], z[G >> 2], z[G + 4 >> 2]), m[l] = k, r = qh(m[c >> 2], k), k = m[r + 4 >> 2], r = (E[0] = m[r >> 2], F[0]), k = (E[0] = k, F[0]), Uf(I, e, r, k), J(S, z[I >> 2] - z[D >> 2], z[I + 4 >> 2] - z[D + 4 >> 2]), d = z[S >> 2] * d + z[S + 4 >> 2] * q) : (K(H.p, 183, H.xb, H.b), m[l] = -1, m[k] = -1, d = 0);
  a = e;
  return d;
}

xi.X = 1;

function yi(c, e, d, f) {
  var g, h, i, j, k = c >> 2, l = a;
  a += 176;
  j = l >> 2;
  var o = l + 16;
  i = o >> 2;
  var n = l + 32, p = l + 40, t = l + 48, q = l + 56, r = l + 64, s = l + 72, u = l + 80;
  h = l + 88;
  var x = l + 96, B = l + 104;
  g = l + 112;
  var y = l + 120, w = l + 128, D = l + 136, G = l + 144, M = l + 152, I = l + 160, S = l + 168;
  vi(c + 8, l, f);
  vi(c + 44, o, f);
  f = m[k + 20];
  0 == f ? (y = z[j + 2], D = z[j + 3], h = c + 92 >> 2, I = z[h], g = c + 96 >> 2, Wg(n, y, D, I, z[g]), Xg(t, z[h], z[g]), Wg(p, z[i + 2], z[i + 3], z[t >> 2], z[t + 4 >> 2]), e = qh(m[k], e), i = m[e + 4 >> 2], e = (E[0] = m[e >> 2], F[0]), i = (E[0] = i, F[0]), d = qh(m[k + 1], d), k = m[d + 4 >> 2], d = (E[0] = m[d >> 2], F[0]), k = (E[0] = k, F[0]), Uf(q, l, e, i), Uf(r, o, d, k), J(s, z[r >> 2] - z[q >> 2], z[r + 4 >> 2] - z[q + 4 >> 2]), o = z[s >> 2] * z[h] + z[s + 4 >> 2] * z[g]) : 1 == f ? (Yg(u, z[j + 2], z[j + 3], z[k + 23], z[k + 24]), Uf(h, l, z[k + 21], z[k + 22]), q = z[u >> 2], r = z[u + 4 >> 2], Xg(B, q, r), Wg(x, z[i + 2], z[i + 3], z[B >> 2], z[B + 4 >> 2]), s = qh(m[k + 1], d), k = m[s + 4 >> 2], s = (E[0] = m[s >> 2], F[0]), k = (E[0] = k, F[0]), Uf(g, o, s, k), J(y, z[g >> 2] - z[h >> 2], z[g + 4 >> 2] - z[h + 4 >> 2]), o = z[y >> 2] * q + z[y + 4 >> 2] * r) : 2 == f ? (Yg(w, z[i + 2], z[i + 3], z[k + 23], z[k + 24]), Uf(D, o, z[k + 21], z[k + 22]), o = z[w >> 2], q = z[w + 4 >> 2], Xg(M, o, q), Wg(G, z[j + 2], z[j + 3], z[M >> 2], z[M + 4 >> 2]), r = qh(m[k], e), k = m[r + 4 >> 2], r = (E[0] = m[r >> 2], F[0]), k = (E[0] = k, F[0]), Uf(I, l, r, k), J(S, z[I >> 2] - z[D >> 2], z[I + 4 >> 2] - z[D + 4 >> 2]), o = z[S >> 2] * o + z[S + 4 >> 2] * q) : (K(H.p, 242, H.yb, H.b), o = 0);
  a = l;
  return o;
}

yi.X = 1;

function Ei(c, e) {
  var d = Gi(e);
  z[c >> 2] = d;
  d = Hi(e);
  z[c + 4 >> 2] = d;
}

function Ii(c, e, d) {
  var f;
  2 == (-1 < d ? m[c + 16 >> 2] - 1 > d ? 3 : 2 : 2) && K(H.qc, 89, H.sb, H.rc);
  m[e + 4 >> 2] = 1;
  z[e + 8 >> 2] = z[c + 8 >> 2];
  f = c + 12 >> 2;
  var g = (d << 3) + m[f], h = e + 12, i = m[g + 4 >> 2];
  m[h >> 2] = m[g >> 2];
  m[h + 4 >> 2] = i;
  g = (d + 1 << 3) + m[f];
  h = e + 20;
  i = m[g + 4 >> 2];
  m[h >> 2] = m[g >> 2];
  m[h + 4 >> 2] = i;
  g = e + 28;
  0 < d ? (h = (d - 1 << 3) + m[f], i = m[h + 4 >> 2], m[g >> 2] = m[h >> 2], m[g + 4 >> 2] = i, b[e + 44] = 1) : (h = c + 20, i = m[h + 4 >> 2], m[g >> 2] = m[h >> 2], m[g + 4 >> 2] = i, b[e + 44] = b[c + 36] & 1);
  g = e + 36;
  m[c + 16 >> 2] - 2 > d ? (d = (d + 2 << 3) + m[f], c = m[d >> 2], d = m[d + 4 >> 2], m[g >> 2] = c, m[g + 4 >> 2] = d, b[e + 45] = 1) : (f = c + 28, d = m[f >> 2], f = m[f + 4 >> 2], m[g >> 2] = d, m[g + 4 >> 2] = f, b[e + 45] = b[c + 37] & 1);
}

Ii.X = 1;

function Ji(c, e) {
  Fi(c, e);
  var d = e + 12, f = c + 12, g = m[d + 4 >> 2];
  m[f >> 2] = m[d >> 2];
  m[f + 4 >> 2] = g;
  d = e + 20;
  f = c + 20;
  g = m[d + 4 >> 2];
  m[f >> 2] = m[d >> 2];
  m[f + 4 >> 2] = g;
  d = e + 28;
  f = c + 28;
  g = m[d + 4 >> 2];
  m[f >> 2] = m[d >> 2];
  m[f + 4 >> 2] = g;
  d = e + 36;
  f = c + 36;
  g = m[d + 4 >> 2];
  m[f >> 2] = m[d >> 2];
  m[f + 4 >> 2] = g;
  b[c + 44] = b[e + 44] & 1;
  b[c + 45] = b[e + 45] & 1;
}

Ji.X = 1;

function Ki(c, e, d, f) {
  var g = d >> 2, d = a;
  a += 104;
  var h = d + 8, i = d + 16, j = d + 24, k = d + 32, l = d + 40, o = d + 48, n = d + 56, p = d + 64, t = d + 72, q = d + 80, r = d + 88, s = d + 96, u = f + 4;
  J(h, z[g] - z[f >> 2], z[g + 1] - z[u >> 2]);
  var x = f + 8, B = f + 12;
  Wg(d, z[x >> 2], z[B >> 2], z[h >> 2], z[h + 4 >> 2]);
  J(j, z[g + 2] - z[f >> 2], z[g + 3] - z[u >> 2]);
  Wg(i, z[x >> 2], z[B >> 2], z[j >> 2], z[j + 4 >> 2]);
  f = z[d >> 2];
  h = z[d + 4 >> 2];
  J(k, z[i >> 2] - f, z[i + 4 >> 2] - h);
  i = c + 12;
  j = m[i + 4 >> 2];
  i = (E[0] = m[i >> 2], F[0]);
  j = (E[0] = j, F[0]);
  u = c + 20;
  c = m[u + 4 >> 2];
  u = (E[0] = m[u >> 2], F[0]);
  x = (E[0] = c, F[0]);
  J(l, u - i, x - j);
  J(o, z[l + 4 >> 2], -z[l >> 2]);
  Zf(o);
  J(n, i - f, j - h);
  var l = z[o >> 2], c = z[o + 4 >> 2], n = l * z[n >> 2] + c * z[n + 4 >> 2], B = z[k >> 2], y = z[k + 4 >> 2], k = l * B + c * y;
  0 == k ? e = 0 : (k = n / k, 0 > k ? e = 0 : z[g + 4] < k ? e = 0 : (Xf(t, k, B, y), J(p, f + z[t >> 2], h + z[t + 4 >> 2]), J(q, u - i, x - j), g = z[q >> 2], q = z[q + 4 >> 2], t = g * g + q * q, 0 == t ? e = 0 : (J(r, z[p >> 2] - i, z[p + 4 >> 2] - j), p = (z[r >> 2] * g + z[r + 4 >> 2] * q) / t, 0 > p | 1 < p ? e = 0 : (z[e + 8 >> 2] = k, 0 < n ? (Xg(s, l, c), o = m[s + 4 >> 2], m[e >> 2] = m[s >> 2], m[e + 4 >> 2] = o) : (s = m[o + 4 >> 2], m[e >> 2] = m[o >> 2], m[e + 4 >> 2] = s), e = 1))));
  a = d;
  return e;
}

Ki.X = 1;

function Li(c, e, d) {
  var f = c >> 2, c = a;
  a += 56;
  var g = c + 8, h = c + 16, i = c + 24, j = c + 32, k = c + 40, l = c + 48;
  Uf(c, d, z[f + 3], z[f + 4]);
  Uf(g, d, z[f + 5], z[f + 6]);
  var d = z[c >> 2], o = z[c + 4 >> 2], n = z[g >> 2], g = z[g + 4 >> 2];
  J(h, d < n ? d : n, o < g ? o : g);
  J(i, d > n ? d : n, o > g ? o : g);
  f = z[f + 2];
  J(j, f, f);
  f = z[j >> 2];
  j = z[j + 4 >> 2];
  J(k, z[h >> 2] - f, z[h + 4 >> 2] - j);
  h = m[k + 4 >> 2];
  m[e >> 2] = m[k >> 2];
  m[e + 4 >> 2] = h;
  e += 8;
  J(l, z[i >> 2] + f, z[i + 4 >> 2] + j);
  i = m[l + 4 >> 2];
  m[e >> 2] = m[l >> 2];
  m[e + 4 >> 2] = i;
  a = c;
}

Li.X = 1;

function Mi(c, e) {
  z[c >> 2] *= e;
  var d = c + 4;
  z[d >> 2] *= e;
}

function Ni(c, e, d) {
  var f = a;
  a += 24;
  var g = f + 8, h = f + 16;
  J(g, z[d >> 2] - z[e >> 2], z[d + 4 >> 2] - z[e + 4 >> 2]);
  Wg(f, z[e + 8 >> 2], z[e + 12 >> 2], z[g >> 2], z[g + 4 >> 2]);
  for (var e = c + 148, d = z[f >> 2], g = z[f + 4 >> 2], i = h + 4, j = 0; ; ) {
    if (j >= m[e >> 2]) {
      var k = 1;
      break;
    }
    J(h, d - z[c + (j << 3) + 20 >> 2], g - z[c + (j << 3) + 24 >> 2]);
    if (0 < z[c + (j << 3) + 84 >> 2] * z[h >> 2] + z[c + (j << 3) + 88 >> 2] * z[i >> 2]) {
      k = 0;
      break;
    }
    j += 1;
  }
  a = f;
  return k;
}

Ni.X = 1;

function Oi(c, e, d, f) {
  var g, h, i = c >> 2, j = a;
  a += 56;
  var k, l = j + 8, o = j + 16, n = j + 24, p = j + 32;
  k = j + 40;
  var t = j + 48, q = f + 4;
  J(l, z[d >> 2] - z[f >> 2], z[d + 4 >> 2] - z[q >> 2]);
  h = f + 8 >> 2;
  var r = z[h];
  g = f + 12 >> 2;
  Wg(j, r, z[g], z[l >> 2], z[l + 4 >> 2]);
  J(n, z[d + 8 >> 2] - z[f >> 2], z[d + 12 >> 2] - z[q >> 2]);
  Wg(o, z[h], z[g], z[n >> 2], z[n + 4 >> 2]);
  f = z[j >> 2];
  l = z[j + 4 >> 2];
  J(p, z[o >> 2] - f, z[o + 4 >> 2] - l);
  var d = d + 16, c = c + 148, o = k + 4, n = z[p >> 2], r = z[p + 4 >> 2], s = 0, p = -1, u = z[d >> 2], q = 0;
  a : for (;;) {
    if (s < m[c >> 2]) {
      J(k, z[((s << 3) + 20 >> 2) + i] - f, z[((s << 3) + 24 >> 2) + i] - l);
      var x = z[((s << 3) + 84 >> 2) + i], B = z[((s << 3) + 88 >> 2) + i], y = x * z[k >> 2] + B * z[o >> 2], x = x * n + B * r, B = 0 == x;
      b : do {
        if (B) {
          if (0 > y) {
            var w = 0;
            break a;
          } else {
            var D = p, G = u, M = q;
          }
        } else {
          D = 0 > x;
          do {
            if (D && y < q * x) {
              D = s;
              G = u;
              M = y / x;
              break b;
            }
          } while (0);
          0 < x ? y < u * x ? (D = p, G = y / x) : (D = p, G = u) : (D = p, G = u);
          M = q;
        }
      } while (0);
      if (G < M) {
        w = 0;
        break;
      }
      s += 1;
      p = D;
      u = G;
      q = M;
    } else {
      k = 0 > q ? 14 : q > z[d >> 2] ? 14 : 15;
      14 == k && K(H.B, 249, H.vb, H.jc);
      if (-1 >= p) {
        w = 0;
        break;
      }
      z[e + 8 >> 2] = q;
      Yg(t, z[h], z[g], z[((p << 3) + 84 >> 2) + i], z[((p << 3) + 88 >> 2) + i]);
      g = t;
      h = m[g + 4 >> 2];
      m[e >> 2] = m[g >> 2];
      m[e + 4 >> 2] = h;
      w = 1;
      break;
    }
  }
  a = j;
  return w;
}

Oi.X = 1;

function Pi(c, e, d) {
  var f = c >> 2, g = a;
  a += 56;
  var h = g + 8, i = g + 16, j = g + 24, k = g + 32, l = g + 40, o = g + 48;
  Uf(g, d, z[f + 5], z[f + 6]);
  var n, p, t = m[g + 4 >> 2], q = (E[0] = m[g >> 2], F[0]), t = (E[0] = t, F[0]), c = c + 148, r = 1 < m[c >> 2];
  a : do {
    if (r) {
      var s = i, u = i, x = j, B = j, y = h, w = h + 4, D = 1, G = q, M = t;
      n = q;
      for (p = z[g + 4 >> 2]; ; ) {
        Uf(h, d, z[((D << 3) + 20 >> 2) + f], z[((D << 3) + 24 >> 2) + f]);
        var I = z[y >> 2], S = z[w >> 2];
        J(s, n < I ? n : I, p < S ? p : S);
        n = u;
        n = m[n >> 2];
        p = u + 4;
        p = m[p >> 2];
        m[g >> 2] = n;
        m[g + 4 >> 2] = p;
        J(x, G > I ? G : I, M > S ? M : S);
        M = m[B + 4 >> 2];
        G = (E[0] = m[B >> 2], F[0]);
        M = (E[0] = M, F[0]);
        D += 1;
        I = D < m[c >> 2];
        n = (E[0] = n, F[0]);
        p = (E[0] = p, F[0]);
        if (!I) {
          var N = G, Q = M, Y = n, T = p;
          break a;
        }
      }
    } else {
      N = q, Q = t, Y = q, T = z[g + 4 >> 2];
    }
  } while (0);
  d = z[f + 2];
  J(k, d, d);
  d = z[k >> 2];
  k = z[k + 4 >> 2];
  J(l, Y - d, T - k);
  Y = m[l + 4 >> 2];
  m[e >> 2] = m[l >> 2];
  m[e + 4 >> 2] = Y;
  e += 8;
  J(o, N + d, Q + k);
  N = m[o + 4 >> 2];
  m[e >> 2] = m[o >> 2];
  m[e + 4 >> 2] = N;
  a = g;
}

Pi.X = 1;

function Qi(c, e, d) {
  var f, g, h = a;
  a += 56;
  var i, j = h + 8;
  g = j >> 2;
  var k = h + 16, l = h + 24, o = h + 32, n = h + 40, p = h + 48;
  f = c + 148 >> 2;
  2 < m[f] || K(H.B, 306, H.aa, H.sc);
  Xe(h, 0, 0);
  J(j, 0, 0);
  i = m[f];
  var t = 0 < i;
  a : do {
    if (t) {
      for (var q = 0; ; ) {
        Ve(j, (q << 3) + c + 20);
        var q = q + 1, r = m[f];
        if (q >= r) {
          var s = r;
          break a;
        }
      }
    } else {
      s = i;
    }
  } while (0);
  Mi(j, 1 / s);
  j = 0 < m[f];
  do {
    if (j) {
      var s = k, q = k + 4, r = l, u = l + 4;
      i = z[g];
      for (var t = z[g + 1], x = n, B = n + 4, y = c + 20, w = c + 24, D = 0, G = 0, M = 0; ; ) {
        J(k, z[c + (M << 3) + 20 >> 2] - i, z[c + (M << 3) + 24 >> 2] - t);
        M += 1;
        M < m[f] ? J(l, z[c + (M << 3) + 20 >> 2] - i, z[c + (M << 3) + 24 >> 2] - t) : J(l, z[y >> 2] - i, z[w >> 2] - t);
        var I = z[s >> 2], S = z[q >> 2], N = z[r >> 2], Q = z[u >> 2], Y = I * Q - S * N, T = .5 * Y, $ = D + T, D = .3333333432674408 * T;
        J(n, I + N, S + Q);
        Xf(o, D, z[x >> 2], z[B >> 2]);
        Ve(h, o);
        I = G + .0833333358168602 * Y * (I * I + N * I + N * N + S * S + Q * S + Q * Q);
        if (M < m[f]) {
          D = $, G = I;
        } else {
          break;
        }
      }
      s = e;
      z[s >> 2] = $ * d;
      if (1.1920928955078125e-7 < $) {
        var ba = I, P = $, R = s, V = i, L = t;
        i = 13;
      } else {
        var O = I, Z = $, X = s, U = i, ka = t;
        i = 12;
      }
    } else {
      X = e, Z = O = z[X >> 2] = 0, U = z[g], ka = z[g + 1], i = 12;
    }
  } while (0);
  12 == i && (K(H.B, 352, H.aa, H.Ac), ba = O, P = Z, R = X, V = U, L = ka);
  Mi(h, 1 / P);
  g = e + 4;
  c = z[h >> 2];
  f = z[h + 4 >> 2];
  J(p, c + V, f + L);
  V = m[p >> 2];
  p = m[p + 4 >> 2];
  m[g >> 2] = V;
  m[g + 4 >> 2] = p;
  d *= ba;
  e += 12;
  z[e >> 2] = d;
  R = z[R >> 2];
  ba = (E[0] = V, F[0]);
  p = (E[0] = p, F[0]);
  z[e >> 2] = d + R * (ba * ba + p * p - (c * c + f * f));
  a = h;
}

Qi.X = 1;

function Ri(c, e) {
  var d, f, g, h = 0 == e;
  a : do {
    if (h) {
      g = 0;
    } else {
      g = 0 < e;
      do {
        if (g) {
          if (640 < e) {
            g = Dd(e);
            break a;
          }
        } else {
          K(H.j, 104, H.s, H.qa);
        }
      } while (0);
      var i = g = nd[Si + e];
      14 > g || K(H.j, 112, H.s, H.va);
      g = (i << 2) + c + 12 >> 2;
      f = v[g];
      if (0 == f) {
        f = c + 4 >> 2;
        var j = v[f], k = c + 8, l = m[k >> 2];
        d = c >> 2;
        j == l ? (j = m[d], l += 128, m[k >> 2] = l, k = Dd(l << 3), m[d] = k, Pf(k, j, m[f] << 3), Id((m[f] << 3) + m[d], 1024), Sf(j), k = m[f]) : k = j;
        l = m[d];
        j = Dd(16384);
        d = (k << 3) + l + 4 >> 2;
        m[d] = j;
        i = m[Ti + (i << 2) >> 2];
        m[(k << 3) + l >> 2] = i;
        k = 16384 / i | 0;
        16385 > k * i ? l = j : (K(H.j, 140, H.s, H.tc), l = m[d]);
        k -= 1;
        j = 0 < k;
        b : do {
          if (j) {
            for (var o = 0, n = l; ; ) {
              var p = o + 1;
              m[n + o * i >> 2] = n + p * i;
              n = m[d];
              if (p == k) {
                var t = n;
                break b;
              } else {
                o = p;
              }
            }
          } else {
            t = l;
          }
        } while (0);
        m[t + k * i >> 2] = 0;
        m[g] = m[m[d] >> 2];
        m[f] += 1;
        g = m[d];
      } else {
        m[g] = m[f >> 2], g = f;
      }
    }
  } while (0);
  return g;
}

Ri.X = 1;

function Ui(c, e, d) {
  var f = 0 == d;
  a : do {
    if (!f) {
      var g = 0 < d;
      do {
        if (g) {
          if (640 < d) {
            Sf(e);
            break a;
          }
        } else {
          K(H.j, 164, H.L, H.qa);
        }
      } while (0);
      var h = nd[Si + d], g = h;
      14 > h || K(H.j, 173, H.L, H.va);
      h = e;
      g = (g << 2) + c + 12;
      m[e >> 2] = m[g >> 2];
      m[g >> 2] = h;
    }
  } while (0);
}

function Vi(c, e) {
  var d, f, g;
  g = c + 102796 >> 2;
  f = m[g];
  if (32 > f) {
    var h = f;
  } else {
    K(H.n, 38, H.hb, H.kc), h = m[g];
  }
  f = c + 12 * h + 102412 >> 2;
  m[(c + 102416 >> 2) + (3 * h | 0)] = e;
  d = c + 102400 >> 2;
  var i = m[d];
  102400 < i + e ? (d = Dd(e), m[f] = d, b[c + 12 * h + 102420] = 1) : (m[f] = c + i, b[c + 12 * h + 102420] = 0, m[d] += e);
  d = c + 102404;
  h = m[d >> 2] + e;
  m[d >> 2] = h;
  d = c + 102408;
  m[d >> 2] = m[d >> 2] > h ? m[d >> 2] : h;
  m[g] += 1;
  return m[f];
}

function Wi(c, e) {
  var d;
  d = c + 102796 >> 2;
  var f = m[d];
  0 < f || (K(H.n, 63, H.N, H.uc), f = m[d]);
  f -= 1;
  m[(c + 102412 >> 2) + (3 * f | 0)] != e && K(H.n, 65, H.N, H.Bc);
  if (0 == (b[c + 12 * f + 102420] & 1)) {
    var f = c + 12 * f + 102416, g = c + 102400;
    m[g >> 2] -= m[f >> 2];
  } else {
    Sf(e), f = c + 12 * f + 102416;
  }
  g = c + 102404;
  m[g >> 2] -= m[f >> 2];
  m[d] -= 1;
}

function Xi(c) {
  return (!isNaN(c) && !isNaN(0)) & -Infinity < c ? Infinity > c : 0;
}

function Yi(c, e) {
  var d;
  if (2 == m[c >> 2]) {
    d = 2;
  } else {
    if (2 == m[e >> 2]) {
      d = 2;
    } else {
      var f = 0;
      d = 7;
    }
  }
  a : do {
    if (2 == d) {
      for (var g = c + 108; ; ) {
        g = m[g >> 2];
        if (0 == g) {
          f = 1;
          break a;
        }
        if (m[g >> 2] == e && 0 == (b[m[g + 4 >> 2] + 61] & 1)) {
          f = 0;
          break a;
        }
        g += 12;
      }
    }
  } while (0);
  return f;
}

function Zi(c) {
  md[c >> 1] = 1;
  md[c + 2 >> 1] = -1;
  md[c + 4 >> 1] = 0;
}

function $i(c) {
  var e = a;
  a += 8;
  aj(e);
  m[c >> 2] = m[e >> 2];
  m[c + 4 >> 2] = Math.floor(.0010000000474974513 * m[e + 4 >> 2]);
  a = e;
}

function bj(c) {
  var e = a;
  a += 8;
  aj(e);
  c = 1e3 * (m[e >> 2] - m[c >> 2]) + .0010000000474974513 * m[e + 4 >> 2] - v[c + 4 >> 2];
  a = e;
  return c;
}

function cj(c, e, d) {
  var f, g, h = c >> 2, i = c + 12, j = c + 64, k = c + 76, l = e + 4;
  Xi(z[l >> 2]) && Xi(z[l + 4 >> 2]) || K(H.f, 27, H.h, H.Ub);
  var o = e + 16;
  Xi(z[o >> 2]) && Xi(z[o + 4 >> 2]) || K(H.f, 28, H.h, H.cc);
  g = e + 12 >> 2;
  Xi(z[g]) || K(H.f, 29, H.h, H.lc);
  var n = e + 24;
  Xi(z[n >> 2]) || K(H.f, 30, H.h, H.vc);
  var p = e + 32, t = z[p >> 2];
  0 > t | Xi(t) ^ 1 && K(H.f, 31, H.h, H.Cc);
  t = e + 28;
  f = z[t >> 2];
  0 > f | Xi(f) ^ 1 && K(H.f, 32, H.h, H.Fc);
  f = c + 4 >> 1;
  md[f] = 0;
  var q = 0 == (b[e + 39] & 1) ? 0 : md[f] = 8;
  0 != (b[e + 38] & 1) && (q |= 16, md[f] = q);
  0 != (b[e + 36] & 1) && (q |= 4, md[f] = q);
  0 != (b[e + 37] & 1) && (q |= 2, md[f] = q);
  0 != (b[e + 40] & 1) && (md[f] = q | 32);
  m[h + 22] = d;
  d = i >> 2;
  i = m[l + 4 >> 2];
  m[d] = m[l >> 2];
  m[d + 1] = i;
  Ei(c + 20, z[g]);
  We(c + 28);
  i = c + 36;
  l = m[d];
  d = m[d + 1];
  m[i >> 2] = l;
  m[i + 4 >> 2] = d;
  i = c + 44;
  m[i >> 2] = l;
  m[i + 4 >> 2] = d;
  z[h + 13] = z[g];
  z[h + 14] = z[g];
  z[h + 15] = 0;
  m[h + 27] = 0;
  m[h + 28] = 0;
  m[h + 23] = 0;
  m[h + 24] = 0;
  g = m[o + 4 >> 2];
  m[j >> 2] = m[o >> 2];
  m[j + 4 >> 2] = g;
  z[h + 18] = z[n >> 2];
  z[h + 33] = z[t >> 2];
  z[h + 34] = z[p >> 2];
  z[h + 35] = z[e + 48 >> 2];
  We(k);
  z[h + 21] = 0;
  z[h + 36] = 0;
  j = m[e >> 2];
  m[h] = j;
  c += 116;
  2 == j ? (z[c >> 2] = 1, z[h + 30] = 1) : (z[c >> 2] = 0, z[h + 30] = 0);
  z[h + 31] = 0;
  z[h + 32] = 0;
  m[h + 37] = m[e + 44 >> 2];
  m[h + 25] = 0;
  m[h + 26] = 0;
}

cj.X = 1;

function dj(c) {
  var e, d, f, g, h, i = a;
  a += 56;
  var j, k = i + 8, l = i + 24, o = i + 32, n = i + 40, p = i + 48;
  h = c + 116 >> 2;
  z[h] = 0;
  g = c + 120 >> 2;
  z[g] = 0;
  f = c + 124 >> 2;
  z[f] = 0;
  var t = c + 128;
  z[t >> 2] = 0;
  var q = c + 28;
  We(q);
  d = m[c >> 2];
  if (0 == d || 1 == d) {
    var r = c + 12;
    j = c + 36;
    d = m[r >> 2];
    r = m[r + 4 >> 2];
    m[j >> 2] = d;
    m[j + 4 >> 2] = r;
    j = c + 44;
    m[j >> 2] = d;
    m[j + 4 >> 2] = r;
    z[c + 52 >> 2] = z[c + 56 >> 2];
    j = 18;
  } else {
    2 != d && K(H.f, 284, H.U, H.Hb), j = 3;
  }
  if (3 == j) {
    d = i >> 2;
    m[d] = 0;
    m[d + 1] = 0;
    j = m[c + 100 >> 2];
    r = 0 == j;
    a : do {
      if (!r) {
        var s = k, u = k + 12, x = k + 4, B = k + 8;
        e = j;
        for (e >>= 2; ; ) {
          var y = z[e];
          if (0 != y) {
            var w = m[e + 3];
            Kd[m[m[w >> 2] + 28 >> 2]](w, k, y);
            y = z[s >> 2];
            z[h] += y;
            Xf(l, y, z[x >> 2], z[B >> 2]);
            Ve(i, l);
            z[f] += z[u >> 2];
          }
          e = m[e + 1];
          if (0 == e) {
            break a;
          } else {
            e >>= 2;
          }
        }
      }
    } while (0);
    k = z[h];
    0 < k ? (k = 1 / k, z[g] = k, Mi(i, k)) : (z[h] = 1, z[g] = 1);
    g = z[f];
    if (0 < g) {
      if (0 != (md[c + 4 >> 1] & 16)) {
        j = 16;
      } else {
        var D = z[i >> 2], k = z[i + 4 >> 2];
        h = g - z[h] * (D * D + k * k);
        z[f] = h;
        0 < h || (K(H.f, 319, H.U, H.Lb), h = z[f]);
        D = 1 / h;
        j = 17;
      }
    } else {
      j = 16;
    }
    16 == j && (D = z[f] = 0);
    z[t >> 2] = D;
    h = c + 44;
    t = m[h + 4 >> 2];
    f = (E[0] = m[h >> 2], F[0]);
    t = (E[0] = t, F[0]);
    D = m[d];
    d = m[d + 1];
    m[q >> 2] = D;
    m[q + 4 >> 2] = d;
    q = c + 36;
    D = (E[0] = D, F[0]);
    d = (E[0] = d, F[0]);
    Uf(o, c + 12, D, d);
    d = m[o >> 2];
    o = m[o + 4 >> 2];
    m[h >> 2] = d;
    m[h + 4 >> 2] = o;
    m[q >> 2] = d;
    m[q + 4 >> 2] = o;
    q = c + 64;
    c = z[c + 72 >> 2];
    d = (E[0] = d, F[0]);
    o = (E[0] = o, F[0]);
    J(p, d - f, o - t);
    oh(n, c, z[p >> 2], z[p + 4 >> 2]);
    Ve(q, n);
  }
  a = i;
}

dj.X = 1;

function ej(c) {
  var e = c >> 2, d = a;
  a += 32;
  var f = d + 16, g = d + 24, h = d + 8;
  Ei(h, z[e + 13]);
  Yg(g, z[h >> 2], z[d + 12 >> 2], z[e + 7], z[e + 8]);
  J(f, z[e + 9] - z[g >> 2], z[e + 10] - z[g + 4 >> 2]);
  g = m[f + 4 >> 2];
  m[d >> 2] = m[f >> 2];
  m[d + 4 >> 2] = g;
  f = m[e + 22] + 102872;
  e = m[e + 25];
  g = 0 == e;
  a : do {
    if (!g) {
      for (var h = c + 12, i = e; ; ) {
        if (fj(i, f, d, h), i = m[i + 4 >> 2], 0 == i) {
          break a;
        }
      }
    }
  } while (0);
  a = d;
}

ej.X = 1;

function bg(c, e) {
  var d;
  d = c + 4 >> 1;
  var f = md[d];
  e ? 0 == (f & 2) && (md[d] = f | 2, z[c + 144 >> 2] = 0) : (md[d] = f & -3, z[c + 144 >> 2] = 0, We(c + 64), z[c + 72 >> 2] = 0, We(c + 76), z[c + 84 >> 2] = 0);
}

function gj(c, e) {
  var d, f;
  f = c + 88 >> 2;
  d = m[f];
  var g = m[d + 102868 >> 2];
  0 != (g & 2) && (K(H.f, 153, H.kb, H.Hc), d = g = m[f], g = m[g + 102868 >> 2]);
  if (0 == (g & 2)) {
    var h = d;
    d = Ri(h, 44);
    0 == d ? g = 0 : (g = d >> 2, Zi(d + 32), m[g + 10] = 0, m[g + 2] = 0, m[g + 1] = 0, m[g + 6] = 0, m[g + 7] = 0, m[g + 3] = 0, z[g] = 0, g = d);
    d = g >> 2;
    hj(g, h, c, e);
    if (0 != (md[c + 4 >> 1] & 32)) {
      var h = g, i = m[f] + 102872, j = c + 12, k;
      k = h + 28 >> 2;
      0 != m[k] && K(H.v, 124, H.qb, H.ea);
      var l = h + 12, o = m[l >> 2], o = Kd[m[m[o >> 2] + 12 >> 2]](o);
      m[k] = o;
      o = 0 < o;
      a : do {
        if (o) {
          for (var n = h + 24, p = i, t = 0; ; ) {
            var q = m[n >> 2], r = q + 28 * t, s = m[l >> 2];
            Kd[m[m[s >> 2] + 24 >> 2]](s, r, j, t);
            var s = p, r = zh(s, r, r), u = s + 28;
            m[u >> 2] += 1;
            sf(s, r);
            m[q + 28 * t + 24 >> 2] = r;
            m[q + 28 * t + 16 >> 2] = h;
            m[q + 28 * t + 20 >> 2] = t;
            t += 1;
            if (t >= m[k]) {
              break a;
            }
          }
        }
      } while (0);
    }
    h = c + 100;
    m[d + 1] = m[h >> 2];
    m[h >> 2] = g;
    g = c + 104;
    m[g >> 2] += 1;
    m[d + 2] = c;
    0 < z[d] && dj(c);
    f = m[f] + 102868;
    m[f >> 2] |= 1;
  }
}

gj.X = 1;

function dg(c, e, d) {
  var f = a;
  a += 28;
  var g = f >> 2;
  Zi(f + 22);
  m[g] = 0;
  m[g + 1] = 0;
  z[g + 2] = .20000000298023224;
  z[g + 3] = 0;
  z[g + 4] = 0;
  b[f + 20] = 0;
  m[f >> 2] = e;
  z[f + 16 >> 2] = d;
  gj(c, f);
  a = f;
}

function ij(c, e) {
  var d, f;
  d = m[m[e + 48 >> 2] + 8 >> 2];
  var g = m[m[e + 52 >> 2] + 8 >> 2];
  f = m[c + 72 >> 2];
  if (0 != f && 0 != (m[e + 4 >> 2] & 2)) {
    Kd[m[m[f >> 2] + 12 >> 2]](f, e);
  }
  var h = e + 8, i = m[h >> 2];
  f = e + 12 >> 2;
  0 != i && (m[i + 12 >> 2] = m[f]);
  i = m[f];
  0 != i && (m[i + 8 >> 2] = m[h >> 2]);
  h = c + 60;
  m[h >> 2] == e && (m[h >> 2] = m[f]);
  h = e + 24;
  i = m[h >> 2];
  f = e + 28 >> 2;
  0 != i && (m[i + 12 >> 2] = m[f]);
  i = m[f];
  0 != i && (m[i + 8 >> 2] = m[h >> 2]);
  d += 112;
  e + 16 == m[d >> 2] && (m[d >> 2] = m[f]);
  f = e + 40;
  h = m[f >> 2];
  d = e + 44 >> 2;
  0 != h && (m[h + 12 >> 2] = m[d]);
  h = m[d];
  0 != h && (m[h + 8 >> 2] = m[f >> 2]);
  g += 112;
  e + 32 == m[g >> 2] && (m[g >> 2] = m[d]);
  jj(e, m[c + 76 >> 2]);
  g = c + 64;
  m[g >> 2] -= 1;
}

ij.X = 1;

function kj(c) {
  var e, d, f, g = m[c + 60 >> 2], h = 0 == g;
  a : do {
    if (!h) {
      var i = c, j = c + 72, k = c + 68, l = g;
      for (d = l >> 2; ; ) {
        var o = m[d + 12], n = o, p = m[d + 13], t = p, q = m[d + 14], r = m[d + 15], s = m[o + 8 >> 2], u = m[p + 8 >> 2];
        e = l + 4 >> 2;
        var x = m[e], B = 0 == (x & 8);
        do {
          if (B) {
            f = 11;
          } else {
            if (Yi(u, s)) {
              f = m[k >> 2];
              if (0 == f) {
                f = x;
              } else {
                if (Kd[m[m[f >> 2] + 8 >> 2]](f, n, t)) {
                  f = m[e];
                } else {
                  e = m[d + 3];
                  ij(c, l);
                  var y = e;
                  f = 5;
                  break;
                }
              }
              m[e] = f & -9;
              f = 11;
            } else {
              y = m[d + 3], ij(c, l), f = 5;
            }
          }
        } while (0);
        11 == f && ((0 != (md[s + 4 >> 1] & 2) ? 0 != m[s >> 2] : 0) | (0 != (md[u + 4 >> 1] & 2) ? 0 != m[u >> 2] : 0) ? (s = i, p = m[(m[p + 24 >> 2] + 24 >> 2) + (7 * r | 0)], o = lj(s, m[(m[o + 24 >> 2] + 24 >> 2) + (7 * q | 0)]), q = lj(s, p), mj(o, q) ? (nj(l, m[j >> 2]), y = m[d + 3]) : (d = m[d + 3], ij(c, l), y = d)) : y = m[d + 3]);
        if (0 == y) {
          break a;
        } else {
          l = y, d = l >> 2;
        }
      }
    }
  } while (0);
}

kj.X = 1;

function oj(c, e) {
  var d, f, g = a;
  a += 4;
  f = c + 52 >> 2;
  m[f] = 0;
  d = c + 40 >> 2;
  var h = m[d];
  if (0 < h) {
    for (var i = c + 32, j = c + 56, k = 0; ; ) {
      var l = m[m[i >> 2] + (k << 2) >> 2];
      m[j >> 2] = l;
      if (-1 != l) {
        var h = lj(c, l), o = c, l = c, n = h, h = a;
        a += 1036;
        var p = h;
        m[p >> 2] = p + 4;
        m[p + 1028 >> 2] = 0;
        m[p + 1032 >> 2] = 256;
        pj(h, o);
        o += 4;
        for (p = h + 1028; 0 < m[p >> 2]; ) {
          var t;
          t = h;
          var q = ha, q = t + 1028 >> 2, r = m[q];
          0 < r || (K(H.fc, 67, H.fb, H.nc), r = m[q]);
          r -= 1;
          m[q] = r;
          t = m[m[t >> 2] + (r << 2) >> 2];
          if (-1 != t && (q = m[o >> 2], mj(q + 36 * t, n))) {
            if (r = q + 36 * t + 24, -1 == m[r >> 2]) {
              var s = r = q = ha, s = l + 56 >> 2, u = m[s];
              if (u != t) {
                var r = l + 52 >> 2, x = m[r], B = l + 48, y = m[B >> 2], q = l + 44 >> 2;
                x == y ? (x = m[q], m[B >> 2] = y << 1, B = Dd(24 * y), m[q] = B, Pf(B, x, 12 * m[r]), Sf(x), B = m[s], x = m[r]) : B = u;
                m[m[q] + 12 * x >> 2] = t < B ? t : B;
                m[m[q] + 12 * m[r] + 4 >> 2] = t > m[s] ? t : m[s];
                m[r] += 1;
              }
            } else {
              pj(h, r), pj(h, q + 36 * t + 28);
            }
          }
        }
        l = h;
        n = m[l >> 2];
        n != l + 4 && (Sf(n), m[l >> 2] = 0);
        a = h;
        h = m[d];
      }
      k += 1;
      if (k >= h) {
        break;
      }
    }
    i = m[f];
  } else {
    i = 0;
  }
  m[d] = 0;
  d = c + 44 >> 2;
  j = m[d];
  m[g >> 2] = 2;
  qj(j, j + 12 * i, g);
  i = 0 < m[f];
  a : do {
    if (i) {
      j = c;
      l = m[d];
      k = 0;
      h = l;
      l = m[l >> 2];
      b : for (;;) {
        n = h + 12 * k;
        p = rj(j, l);
        o = h + 12 * k + 4;
        t = rj(j, m[o >> 2]);
        sj(e, p, t);
        p = m[f];
        for (t = k; ; ) {
          t += 1;
          if (t >= p) {
            break a;
          }
          q = m[d];
          r = m[(q >> 2) + (3 * t | 0)];
          if (r != m[n >> 2]) {
            k = t;
            h = q;
            l = r;
            continue b;
          }
          if (m[(q + 4 >> 2) + (3 * t | 0)] != m[o >> 2]) {
            k = t;
            h = q;
            l = r;
            continue b;
          }
        }
      }
    }
  } while (0);
  a = g;
}

oj.X = 1;

function sj(c, e, d) {
  var f, g, h, i = m[e + 16 >> 2], j = m[d + 16 >> 2], e = m[e + 20 >> 2], d = m[d + 20 >> 2], k = m[i + 8 >> 2], l = m[j + 8 >> 2], o = k == l;
  a : do {
    if (!o) {
      var n = m[l + 112 >> 2];
      for (h = n >> 2; 0 != n; ) {
        if (m[h] == k) {
          f = m[h + 1] >> 2;
          var n = m[f + 12], p = m[f + 13];
          g = m[f + 14];
          f = m[f + 15];
          if (n == i & p == j & g == e & f == d) {
            break a;
          }
          if (n == j & p == i & g == d & f == e) {
            break a;
          }
        }
        n = m[h + 3];
        h = n >> 2;
      }
      if (Yi(l, k) && (h = m[c + 68 >> 2], 0 == h || Kd[m[m[h >> 2] + 8 >> 2]](h, i, j))) {
        h = i;
        n = e;
        p = j;
        g = d;
        f = m[c + 76 >> 2];
        nd[tj] || (uj(4, 6, 0, 0), uj(8, 10, 2, 0), uj(12, 14, 2, 2), uj(16, 18, 1, 0), uj(20, 22, 1, 2), uj(24, 26, 3, 0), uj(28, 30, 3, 2), b[tj] = 1);
        var t = m[m[h + 12 >> 2] + 4 >> 2], q = m[m[p + 12 >> 2] + 4 >> 2];
        4 > t || K(H.g, 80, H.Y, H.ga);
        4 > q || K(H.g, 81, H.Y, H.ma);
        var r = v[(vj >> 2) + (12 * t | 0) + (3 * q | 0)];
        f = p = 0 == r ? 0 : 0 == (b[vj + 48 * t + 12 * q + 8] & 1) ? Kd[r](p, g, h, n, f) : Kd[r](h, n, p, g, f);
        0 != p && (h = m[m[p + 48 >> 2] + 8 >> 2], n = m[m[p + 52 >> 2] + 8 >> 2], m[p + 8 >> 2] = 0, g = c + 60 >> 2, m[p + 12 >> 2] = m[g], t = m[g], 0 != t && (m[t + 8 >> 2] = f), m[g] = f, g = f = p + 16, m[p + 20 >> 2] = p, m[f >> 2] = n, m[p + 24 >> 2] = 0, f = h + 112 >> 2, m[p + 28 >> 2] = m[f], t = m[f], 0 != t && (m[t + 8 >> 2] = g), m[f] = g, g = f = p + 32, m[p + 36 >> 2] = p, m[f >> 2] = h, m[p + 40 >> 2] = 0, f = n + 112 >> 2, m[p + 44 >> 2] = m[f], p = m[f], 0 != p && (m[p + 8 >> 2] = g), m[f] = g, bg(h, 1), bg(n, 1), h = c + 64, m[h >> 2] += 1);
      }
    }
  } while (0);
}

sj.X = 1;

function lj(c, e) {
  2 == (-1 < e ? m[c + 12 >> 2] > e ? 3 : 2 : 2) && K(H.la, 159, H.tb, H.w);
  return m[c + 4 >> 2] + 36 * e;
}

function rj(c, e) {
  2 == (-1 < e ? m[c + 12 >> 2] > e ? 3 : 2 : 2) && K(H.la, 153, H.ub, H.w);
  return m[(m[c + 4 >> 2] + 16 >> 2) + (9 * e | 0)];
}

function qj(c, e, d) {
  var f, g, h, i, j, k, l, o, n, p, t, q, r, s, u, x, B = d >> 2, y = e, w = c;
  a : for (;;) {
    var D = w, G = w + 12, M = w, I = w + 4, S = w + 8;
    x = w >> 2;
    var N = y;
    b : for (;;) {
      var Q = N, Y = Q - D, T = Y / 12 | 0;
      if (0 == T || 1 == T) {
        break a;
      } else {
        if (2 == T) {
          var $ = N - 12;
          if (!Kd[m[B]]($, w)) {
            break a;
          }
          var ba = m[M >> 2], P = m[I >> 2], R = m[S >> 2];
          u = $ >> 2;
          m[x] = m[u];
          m[x + 1] = m[u + 1];
          m[x + 2] = m[u + 2];
          m[$ >> 2] = ba;
          m[N - 12 + 4 >> 2] = P;
          m[N - 12 + 8 >> 2] = R;
          break a;
        } else {
          if (3 == T) {
            wj(w, G, N - 12, d);
            break a;
          } else {
            if (4 == T) {
              xj(w, G, w + 24, N - 12, d);
              break a;
            } else {
              if (5 == T) {
                yj(w, G, w + 24, w + 36, N - 12, d);
                break a;
              } else {
                if (372 > Y) {
                  var V = w, L = N, O = d, Z = ha, X = ha, U = ha, ka = ha, Ja = a;
                  a += 12;
                  var gb = V + 24;
                  wj(V, V + 12, gb, O);
                  var Ta = V + 36, ya = Ta == L;
                  c : do {
                    if (!ya) {
                      for (var ka = Ja >> 2, Na = gb, oa = Ta; ; ) {
                        if (Kd[m[O >> 2]](oa, Na)) {
                          U = oa >> 2;
                          m[ka] = m[U];
                          m[ka + 1] = m[U + 1];
                          m[ka + 2] = m[U + 2];
                          for (var ga = Na, ia = oa; ; ) {
                            X = ia >> 2;
                            Z = ga >> 2;
                            m[X] = m[Z];
                            m[X + 1] = m[Z + 1];
                            m[X + 2] = m[Z + 2];
                            if (ga == V) {
                              break;
                            }
                            var za = ga - 12;
                            if (Kd[m[O >> 2]](Ja, za)) {
                              ia = ga, ga = za;
                            } else {
                              break;
                            }
                          }
                          m[Z] = m[ka];
                          m[Z + 1] = m[ka + 1];
                          m[Z + 2] = m[ka + 2];
                        }
                        var Ra = oa + 12;
                        if (Ra == L) {
                          break c;
                        } else {
                          Na = oa, oa = Ra;
                        }
                      }
                    }
                  } while (0);
                  a = Ja;
                  break a;
                } else {
                  var va = N - 12, ta = Y / 24 | 0, Aa = w + 12 * ta;
                  if (11988 < Y) {
                    var Oa = Y / 48 | 0, qa = yj(w, w + 12 * Oa, Aa, w + 12 * (Oa + ta), va, d);
                  } else {
                    qa = wj(w, Aa, va, d);
                  }
                  if (Kd[m[B]](w, Aa)) {
                    var ea = va, ca = qa;
                  } else {
                    for (var fa = va; ; ) {
                      var Ka = fa - 12, la = v[B];
                      if (w == Ka) {
                        break b;
                      }
                      if (Kd[la](Ka, Aa)) {
                        break;
                      } else {
                        fa = Ka;
                      }
                    }
                    var wa = m[M >> 2], xa = m[I >> 2], Ua = m[S >> 2];
                    s = Ka >> 2;
                    m[x] = m[s];
                    m[x + 1] = m[s + 1];
                    m[x + 2] = m[s + 2];
                    m[Ka >> 2] = wa;
                    m[fa - 12 + 4 >> 2] = xa;
                    m[fa - 12 + 8 >> 2] = Ua;
                    ea = Ka;
                    ca = qa + 1;
                  }
                  var ma = G < ea;
                  c : do {
                    if (ma) {
                      for (var ja = ea, Pa = G, Fa = ca, Ea = Aa; ; ) {
                        var Sa = Kd[m[B]](Pa, Ea);
                        d : do {
                          if (Sa) {
                            for (var Ga = Pa; ; ) {
                              var La = Ga + 12;
                              if (Kd[m[B]](La, Ea)) {
                                Ga = La;
                              } else {
                                var na = La;
                                r = na >> 2;
                                break d;
                              }
                            }
                          } else {
                            na = Pa, r = na >> 2;
                          }
                        } while (0);
                        for (var Ca = ja; ; ) {
                          var ua = Ca - 12;
                          if (Kd[m[B]](ua, Ea)) {
                            break;
                          } else {
                            Ca = ua;
                          }
                        }
                        if (na > ua) {
                          var sa = na;
                          q = sa >> 2;
                          var aa = Fa, Ha = Ea;
                          t = Ha >> 2;
                          break c;
                        }
                        var hb = m[r], ib = m[r + 1], jb = m[r + 2];
                        p = na >> 2;
                        n = ua >> 2;
                        m[p] = m[n];
                        m[p + 1] = m[n + 1];
                        m[p + 2] = m[n + 2];
                        m[ua >> 2] = hb;
                        m[Ca - 12 + 4 >> 2] = ib;
                        m[Ca - 12 + 8 >> 2] = jb;
                        var ub = Ea == na ? ua : Ea, ja = ua, Pa = na + 12, Fa = Fa + 1, Ea = ub;
                      }
                    } else {
                      sa = G, q = sa >> 2, aa = ca, Ha = Aa, t = Ha >> 2;
                    }
                  } while (0);
                  if (sa == Ha) {
                    var kb = aa;
                  } else {
                    if (Kd[m[B]](Ha, sa)) {
                      var wb = m[q], lb = m[q + 1], mb = m[q + 2];
                      o = sa >> 2;
                      l = Ha >> 2;
                      m[o] = m[l];
                      m[o + 1] = m[l + 1];
                      m[o + 2] = m[l + 2];
                      m[t] = wb;
                      m[t + 1] = lb;
                      m[t + 2] = mb;
                      kb = aa + 1;
                    } else {
                      kb = aa;
                    }
                  }
                  if (0 == kb) {
                    var Da = zj(w, sa, d), tb = sa + 12;
                    if (zj(tb, N, d)) {
                      if (Da) {
                        break a;
                      } else {
                        N = sa;
                        continue;
                      }
                    } else {
                      if (Da) {
                        y = N;
                        w = tb;
                        continue a;
                      }
                    }
                  }
                  var Xa = sa;
                  if (Xa - D < Q - Xa) {
                    qj(w, sa, d);
                    y = N;
                    w = sa + 12;
                    continue a;
                  } else {
                    qj(sa + 12, N, d), N = sa;
                  }
                }
              }
            }
          }
        }
      }
    }
    if (Kd[la](w, va)) {
      var nb = G;
    } else {
      var Ya = G;
      for (k = Ya >> 2; ; ) {
        if (Ya == va) {
          break a;
        }
        if (Kd[m[B]](w, Ya)) {
          break;
        }
        Ya += 12;
        k = Ya >> 2;
      }
      var cb = m[k], db = m[k + 1], yb = m[k + 2];
      j = Ya >> 2;
      i = va >> 2;
      m[j] = m[i];
      m[j + 1] = m[i + 1];
      m[j + 2] = m[i + 2];
      m[va >> 2] = cb;
      m[N - 12 + 4 >> 2] = db;
      m[N - 12 + 8 >> 2] = yb;
      nb = Ya + 12;
    }
    if (nb == va) {
      break;
    } else {
      var ob = va, qb = nb;
    }
    for (;;) {
      var eb = Kd[m[B]](w, qb);
      b : do {
        if (eb) {
          var Za = qb;
          h = Za >> 2;
        } else {
          for (var Ma = qb; ; ) {
            var rb = Ma + 12;
            if (Kd[m[B]](w, rb)) {
              Za = rb;
              h = Za >> 2;
              break b;
            } else {
              Ma = rb;
            }
          }
        }
      } while (0);
      for (var fb = ob; ; ) {
        var Va = fb - 12;
        if (Kd[m[B]](w, Va)) {
          fb = Va;
        } else {
          break;
        }
      }
      if (Za >= Va) {
        y = N;
        w = Za;
        continue a;
      }
      var zb = m[h], vb = m[h + 1], pb = m[h + 2];
      g = Za >> 2;
      f = Va >> 2;
      m[g] = m[f];
      m[g + 1] = m[f + 1];
      m[g + 2] = m[f + 2];
      m[Va >> 2] = zb;
      m[fb - 12 + 4 >> 2] = vb;
      m[fb - 12 + 8 >> 2] = pb;
      ob = Va;
      qb = Za + 12;
    }
  }
}

qj.X = 1;

function wj(c, e, d, f) {
  var g, h, i = d >> 2, j = c >> 2;
  g = Kd[m[f >> 2]](e, c);
  var k = Kd[m[f >> 2]](d, e);
  if (g) {
    var l = m[j];
    g = m[j + 1];
    j = m[j + 2];
    h = c >> 2;
    k ? (e = d >> 2, m[h] = m[e], m[h + 1] = m[e + 1], m[h + 2] = m[e + 2], m[i] = l, m[i + 1] = g, m[i + 2] = j, i = 1) : (c = e >> 2, m[h] = m[c], m[h + 1] = m[c + 1], m[h + 2] = m[c + 2], m[e >> 2] = l, l = e + 4, m[l >> 2] = g, g = e + 8, m[g >> 2] = j, Kd[m[f >> 2]](d, e) ? (e = m[e >> 2], f = m[l >> 2], j = m[g >> 2], d >>= 2, m[c] = m[d], m[c + 1] = m[d + 1], m[c + 2] = m[d + 2], m[i] = e, m[i + 1] = f, m[i + 2] = j, i = 2) : i = 1);
  } else {
    if (k) {
      h = m[e >> 2];
      var l = e + 4, o = m[l >> 2], k = e + 8, n = m[k >> 2];
      g = e >> 2;
      d >>= 2;
      m[g] = m[d];
      m[g + 1] = m[d + 1];
      m[g + 2] = m[d + 2];
      m[i] = h;
      m[i + 1] = o;
      m[i + 2] = n;
      Kd[m[f >> 2]](e, c) ? (i = m[j], d = m[j + 1], f = m[j + 2], c >>= 2, m[c] = m[g], m[c + 1] = m[g + 1], m[c + 2] = m[g + 2], m[e >> 2] = i, m[l >> 2] = d, m[k >> 2] = f, i = 2) : i = 1;
    } else {
      i = 0;
    }
  }
  return i;
}

wj.X = 1;

function xj(c, e, d, f, g) {
  var h, i, j = wj(c, e, d, g);
  if (Kd[m[g >> 2]](f, d)) {
    var k = m[d >> 2], l = d + 4, o = m[l >> 2], n = d + 8, p = m[n >> 2];
    i = d >> 2;
    h = f >> 2;
    m[i] = m[h];
    m[i + 1] = m[h + 1];
    m[i + 2] = m[h + 2];
    m[f >> 2] = k;
    m[f + 4 >> 2] = o;
    m[f + 8 >> 2] = p;
    f = j + 1;
    if (Kd[m[g >> 2]](d, e)) {
      o = m[e >> 2];
      h = e + 4;
      var p = m[h >> 2], k = e + 8, t = m[k >> 2], f = e >> 2;
      m[f] = m[i];
      m[f + 1] = m[i + 1];
      m[f + 2] = m[i + 2];
      m[d >> 2] = o;
      m[l >> 2] = p;
      m[n >> 2] = t;
      d = j + 2;
      Kd[m[g >> 2]](e, c) ? (g = m[c >> 2], d = m[c + 4 >> 2], i = m[c + 8 >> 2], c >>= 2, m[c] = m[f], m[c + 1] = m[f + 1], m[c + 2] = m[f + 2], m[e >> 2] = g, m[h >> 2] = d, m[k >> 2] = i, e = j + 3) : e = d;
    } else {
      e = f;
    }
  } else {
    e = j;
  }
  return e;
}

xj.X = 1;

function yj(c, e, d, f, g, h) {
  var i, j, k = xj(c, e, d, f, h);
  if (Kd[m[h >> 2]](g, f)) {
    var l = m[f >> 2], o = f + 4, n = m[o >> 2], p = f + 8, t = m[p >> 2];
    j = f >> 2;
    i = g >> 2;
    m[j] = m[i];
    m[j + 1] = m[i + 1];
    m[j + 2] = m[i + 2];
    m[g >> 2] = l;
    m[g + 4 >> 2] = n;
    m[g + 8 >> 2] = t;
    g = k + 1;
    if (Kd[m[h >> 2]](f, d)) {
      n = m[d >> 2];
      i = d + 4;
      var t = m[i >> 2], l = d + 8, q = m[l >> 2], g = d >> 2;
      m[g] = m[j];
      m[g + 1] = m[j + 1];
      m[g + 2] = m[j + 2];
      m[f >> 2] = n;
      m[o >> 2] = t;
      m[p >> 2] = q;
      f = k + 2;
      Kd[m[h >> 2]](d, e) ? (p = m[e >> 2], j = e + 4, n = m[j >> 2], o = e + 8, t = m[o >> 2], f = e >> 2, m[f] = m[g], m[f + 1] = m[g + 1], m[f + 2] = m[g + 2], m[d >> 2] = p, m[i >> 2] = n, m[l >> 2] = t, d = k + 3, Kd[m[h >> 2]](e, c) ? (h = m[c >> 2], d = m[c + 4 >> 2], g = m[c + 8 >> 2], c >>= 2, m[c] = m[f], m[c + 1] = m[f + 1], m[c + 2] = m[f + 2], m[e >> 2] = h, m[j >> 2] = d, m[o >> 2] = g, e = k + 4) : e = d) : e = f;
    } else {
      e = g;
    }
  } else {
    e = k;
  }
  return e;
}

yj.X = 1;

function zj(c, e, d) {
  var f, g, h, i, j = a;
  a += 12;
  var k = (e - c) / 12 | 0;
  a : do {
    if (0 == k || 1 == k) {
      h = 1;
    } else {
      if (2 == k) {
        var l = e - 12;
        if (Kd[m[d >> 2]](l, c)) {
          var o = m[c >> 2];
          g = m[c + 4 >> 2];
          var n = m[c + 8 >> 2];
          i = c >> 2;
          h = l >> 2;
          m[i] = m[h];
          m[i + 1] = m[h + 1];
          m[i + 2] = m[h + 2];
          m[l >> 2] = o;
          m[e - 12 + 4 >> 2] = g;
          m[e - 12 + 8 >> 2] = n;
        }
        h = 1;
      } else {
        if (3 == k) {
          wj(c, c + 12, e - 12, d), h = 1;
        } else {
          if (4 == k) {
            xj(c, c + 12, c + 24, e - 12, d), h = 1;
          } else {
            if (5 == k) {
              yj(c, c + 12, c + 24, c + 36, e - 12, d), h = 1;
            } else {
              o = c + 24;
              wj(c, c + 12, o, d);
              h = j >> 2;
              i = c + 36;
              for (l = 0; ; ) {
                if (i == e) {
                  h = 1;
                  break a;
                }
                if (Kd[m[d >> 2]](i, o)) {
                  g = i >> 2;
                  m[h] = m[g];
                  m[h + 1] = m[g + 1];
                  m[h + 2] = m[g + 2];
                  for (g = i; ; ) {
                    g >>= 2;
                    f = o >> 2;
                    m[g] = m[f];
                    m[g + 1] = m[f + 1];
                    m[g + 2] = m[f + 2];
                    if (o == c) {
                      break;
                    }
                    n = o - 12;
                    if (Kd[m[d >> 2]](j, n)) {
                      g = o, o = n;
                    } else {
                      break;
                    }
                  }
                  m[f] = m[h];
                  m[f + 1] = m[h + 1];
                  m[f + 2] = m[h + 2];
                  l += 1;
                  if (8 == l) {
                    break;
                  }
                }
                o = i;
                i += 12;
              }
              h = i + 12 == e;
            }
          }
        }
      }
    }
  } while (0);
  a = j;
  return h;
}

zj.X = 1;

function pj(c, e) {
  var d, f;
  f = c + 1028 >> 2;
  var g = c + 1032, h = m[g >> 2], i = m[f] == h;
  d = c >> 2;
  i && (i = m[d], m[g >> 2] = h << 1, g = Dd(h << 3), m[d] = g, Pf(g, i, m[f] << 2), i != c + 4 && Sf(i));
  m[(m[f] << 2) + m[d] >> 2] = m[e >> 2];
  m[f] += 1;
}

function mj(c, e) {
  var d = a;
  a += 16;
  var f = d + 8;
  J(d, z[e >> 2] - z[c + 8 >> 2], z[e + 4 >> 2] - z[c + 12 >> 2]);
  var g = m[d >> 2], h = m[d + 4 >> 2];
  J(f, z[c >> 2] - z[e + 8 >> 2], z[c + 4 >> 2] - z[e + 12 >> 2]);
  var i = m[f >> 2], f = m[f + 4 >> 2];
  0 < (E[0] = g, F[0]) ? h = 0 : (g = (E[0] = f, F[0]), i = (E[0] = i, F[0]), h = 0 < (E[0] = h, F[0]) | 0 < i | 0 < g ? 0 : 1);
  a = d;
  return h;
}

mj.X = 1;

function hj(c, e, d, f) {
  var g, h = f >> 2, i = c >> 2;
  m[i + 10] = m[h + 1];
  z[i + 4] = z[h + 2];
  z[i + 5] = z[h + 3];
  m[i + 2] = d;
  m[i + 1] = 0;
  g = c + 32 >> 1;
  d = f + 22 >> 1;
  md[g] = md[d];
  md[g + 1] = md[d + 1];
  md[g + 2] = md[d + 2];
  b[c + 38] = b[f + 20] & 1;
  f = m[h];
  f = Kd[m[m[f >> 2] + 8 >> 2]](f, e);
  m[i + 3] = f;
  f = Kd[m[m[f >> 2] + 12 >> 2]](f);
  e = Ri(e, 28 * f);
  c = c + 24 >> 2;
  m[c] = e;
  d = 0 < f;
  a : do {
    if (d) {
      g = 0;
      for (var j = e; ; ) {
        m[(j + 16 >> 2) + (7 * g | 0)] = 0;
        m[m[c] + 28 * g + 24 >> 2] = -1;
        g += 1;
        if (g == f) {
          break a;
        }
        j = m[c];
      }
    }
  } while (0);
  m[i + 7] = 0;
  z[i] = z[h + 4];
}

hj.X = 1;

function Aj(c, e) {
  var d, f;
  0 != m[c + 28 >> 2] && K(H.v, 72, H.$, H.ea);
  f = c + 12 >> 2;
  d = m[f];
  d = Kd[m[m[d >> 2] + 12 >> 2]](d);
  var g = c + 24;
  Ui(e, m[g >> 2], 28 * d);
  m[g >> 2] = 0;
  g = m[f];
  d = g >> 2;
  var h = m[d + 1];
  0 == h ? (Kd[m[m[d] >> 2]](g), Ui(e, g, 20)) : 1 == h ? (Kd[m[m[d] >> 2]](g), Ui(e, g, 48)) : 2 == h ? (Kd[m[m[d] >> 2]](g), Ui(e, g, 152)) : 3 == h ? (Kd[m[m[d] >> 2]](g), Ui(e, g, 40)) : K(H.v, 115, H.$, H.b);
  m[f] = 0;
}

Aj.X = 1;

function fj(c, e, d, f) {
  var g = a;
  a += 40;
  var h = g + 16, i = g + 32, j = c + 28, k = 0 < m[j >> 2];
  a : do {
    if (k) {
      for (var l = c + 24, o = g, n = h, p = c + 12, t = e, q = i, r = f, s = f + 4, u = d, x = d + 4, B = 0; ; ) {
        var y = m[l >> 2], w = y + 28 * B, D = m[p >> 2], G = y + 28 * B + 20;
        Kd[m[m[D >> 2] + 24 >> 2]](D, g, d, m[G >> 2]);
        D = m[p >> 2];
        Kd[m[m[D >> 2] + 24 >> 2]](D, h, f, m[G >> 2]);
        oi(w, o, n);
        J(i, z[r >> 2] - z[u >> 2], z[s >> 2] - z[x >> 2]);
        G = t;
        y = m[(y + 24 >> 2) + (7 * B | 0)];
        ri(G, y, w, q) && sf(G, y);
        B += 1;
        if (B >= m[j >> 2]) {
          break a;
        }
      }
    }
  } while (0);
  a = g;
}

fj.X = 1;

function Bj(c, e, d, f, g, h) {
  var i, j = c >> 2;
  i = c + 40 >> 2;
  m[i] = e;
  m[j + 11] = d;
  m[j + 12] = f;
  m[j + 7] = 0;
  m[j + 9] = 0;
  m[j + 8] = 0;
  c >>= 2;
  m[c] = g;
  m[j + 1] = h;
  e = Vi(g, e << 2);
  m[j + 2] = e;
  d = Vi(m[c], d << 2);
  m[j + 3] = d;
  f = Vi(m[c], f << 2);
  m[j + 4] = f;
  f = Vi(m[c], 12 * m[i]);
  m[j + 6] = f;
  i = Vi(m[c], 12 * m[i]);
  m[j + 5] = i;
}

function Cj(c) {
  var e = c >> 2, c = c >> 2;
  Wi(m[c], m[e + 5]);
  Wi(m[c], m[e + 6]);
  Wi(m[c], m[e + 4]);
  Wi(m[c], m[e + 3]);
  Wi(m[c], m[e + 2]);
}

function Dj(c) {
  var e = c >> 2, d = a;
  a += 16;
  var f = d + 8, g = c + 20;
  Ei(g, z[e + 14]);
  c += 12;
  Yg(f, z[g >> 2], z[e + 6], z[e + 7], z[e + 8]);
  J(d, z[e + 11] - z[f >> 2], z[e + 12] - z[f + 4 >> 2]);
  e = m[d + 4 >> 2];
  m[c >> 2] = m[d >> 2];
  m[c + 4 >> 2] = e;
  a = d;
}

function Dl(c, e) {
  var d = a;
  a += 20;
  var f = c + 4, g = 0 == m[f >> 2];
  a : do {
    if (!g) {
      var h = c + 36;
      if (0 < m[h >> 2]) {
        for (var i = c + 12, j = d + 16, k = 0; ; ) {
          var l = m[m[i >> 2] + (k << 2) >> 2], o = m[(e + 144 >> 2) + (38 * k | 0)];
          m[j >> 2] = o;
          var n = 0 < o;
          b : do {
            if (n) {
              for (var p = 0; ; ) {
                if (z[d + (p << 2) >> 2] = z[(e + 16 >> 2) + (38 * k | 0) + (9 * p | 0)], z[d + (p << 2) + 8 >> 2] = z[(e + 20 >> 2) + (38 * k | 0) + (9 * p | 0)], p += 1, p >= o) {
                  break b;
                }
              }
            }
          } while (0);
          o = m[f >> 2];
          Kd[m[m[o >> 2] + 20 >> 2]](o, l, d);
          k += 1;
          if (k >= m[h >> 2]) {
            break a;
          }
        }
      }
    }
  } while (0);
  a = d;
}

function sn(c, e, d, f, g) {
  var h, i, j, k, l, o, n, p, t, q, r, s, u = a;
  a += 208;
  var x = u + 8, B = u + 16, y = u + 24, w = u + 32, D = u + 40, G = u + 48, M = u + 80;
  s = M >> 2;
  var I = u + 124, S = u + 176, N = u + 184, Q = u + 192, Y = u + 200;
  $i(u);
  var T = z[d >> 2];
  r = c + 28 >> 2;
  var $ = 0 < m[r];
  a : do {
    if ($) {
      for (var ba = c + 8, P = x, R = c + 20, V = c + 24, L = f, O = f + 4, Z = w, X = w + 4, U = D, ka = D + 4, Ja = y, gb = y + 4, Ta = 0; ; ) {
        var ya = m[m[ba >> 2] + (Ta << 2) >> 2];
        q = ya >> 2;
        var Na = ya + 44, oa = z[Na >> 2], ga = z[q + 12], ia = z[q + 14], za = ya + 64, Ra = za, va = m[Ra >> 2], ta = za + 4, Aa = m[ta >> 2], Oa = P;
        m[Oa >> 2] = va;
        var qa = P + 4;
        m[qa >> 2] = Aa;
        var ea = z[q + 18], ca = Na, fa = ya + 36, Ka = m[ca + 4 >> 2];
        m[fa >> 2] = m[ca >> 2];
        m[fa + 4 >> 2] = Ka;
        z[q + 13] = ia;
        if (2 == m[q]) {
          Xf(w, z[q + 35], z[L >> 2], z[O >> 2]);
          Xf(D, z[q + 30], z[q + 19], z[q + 20]);
          J(y, z[Z >> 2] + z[U >> 2], z[X >> 2] + z[ka >> 2]);
          Xf(B, T, z[Ja >> 2], z[gb >> 2]);
          Ve(x, B);
          var la = ea + T * z[q + 32] * z[q + 21];
          Mi(x, 0 > (1 > 1 - T * z[q + 33] ? 1 - T * z[q + 33] : 1) ? 0 : 1 > 1 - T * z[q + 33] ? 1 - T * z[q + 33] : 1);
          var wa = la * (0 > (1 > 1 - T * z[q + 34] ? 1 - T * z[q + 34] : 1) ? 0 : 1 > 1 - T * z[q + 34] ? 1 - T * z[q + 34] : 1), xa = m[P + 4 >> 2], Ua = m[P >> 2];
        } else {
          wa = ea, xa = Aa, Ua = va;
        }
        var ma = m[R >> 2];
        z[(ma >> 2) + (3 * Ta | 0)] = oa;
        z[(ma + 4 >> 2) + (3 * Ta | 0)] = ga;
        z[(m[R >> 2] + 8 >> 2) + (3 * Ta | 0)] = ia;
        var ja = m[V >> 2] + 12 * Ta, Pa = ja;
        m[Pa >> 2] = Ua;
        var Fa = ja + 4;
        m[Fa >> 2] = xa;
        z[(m[V >> 2] + 8 >> 2) + (3 * Ta | 0)] = wa;
        var Ea = Ta + 1;
        if (Ea < m[r]) {
          Ta = Ea;
        } else {
          var Sa = R;
          t = Sa >> 2;
          var Ga = V;
          p = Ga >> 2;
          break a;
        }
      }
    } else {
      Sa = c + 20, t = Sa >> 2, Ga = c + 24, p = Ga >> 2;
    }
  } while (0);
  $i(u);
  n = G >> 2;
  o = d >> 2;
  m[n] = m[o];
  m[n + 1] = m[o + 1];
  m[n + 2] = m[o + 2];
  m[n + 3] = m[o + 3];
  m[n + 4] = m[o + 4];
  m[n + 5] = m[o + 5];
  var La = m[t];
  m[G + 24 >> 2] = La;
  var na = m[p];
  m[G + 28 >> 2] = na;
  l = M >> 2;
  m[l] = m[o];
  m[l + 1] = m[o + 1];
  m[l + 2] = m[o + 2];
  m[l + 3] = m[o + 3];
  m[l + 4] = m[o + 4];
  m[l + 5] = m[o + 5];
  m[s + 6] = m[c + 12 >> 2];
  m[s + 7] = m[c + 36 >> 2];
  m[s + 8] = La;
  m[s + 9] = na;
  m[s + 10] = m[c >> 2];
  tn(I, M);
  un(I);
  0 != (b[d + 20] & 1) && vn(I);
  k = c + 32 >> 2;
  j = c + 16 >> 2;
  for (var Ca = 0; Ca < m[k]; ) {
    var ua = m[m[j] + (Ca << 2) >> 2];
    Kd[m[m[ua >> 2] + 28 >> 2]](ua, G);
    Ca += 1;
  }
  var sa = bj(u);
  z[e + 12 >> 2] = sa;
  $i(u);
  for (var aa = d + 12, Ha = 0; ; ) {
    if (Ha < m[aa >> 2]) {
      var hb = 0;
    } else {
      break;
    }
    for (; hb < m[k]; ) {
      var ib = m[m[j] + (hb << 2) >> 2];
      Kd[m[m[ib >> 2] + 32 >> 2]](ib, G);
      hb += 1;
    }
    wn(I);
    Ha += 1;
  }
  var jb, ub = I + 48, kb = m[ub >> 2], wb = 0 < kb;
  a : do {
    if (wb) {
      for (var lb = I + 40, mb = I + 44, Da = 0, tb = kb; ; ) {
        var Xa = m[lb >> 2];
        jb = Xa >> 2;
        var nb = m[m[mb >> 2] + (m[jb + (38 * Da | 0) + 37] << 2) >> 2] + 64, Ya = Xa + 152 * Da + 144;
        if (0 < m[Ya >> 2]) {
          for (var cb = 0; ; ) {
            z[(nb + 8 >> 2) + (5 * cb | 0)] = z[jb + (38 * Da | 0) + (9 * cb | 0) + 4];
            z[(nb + 12 >> 2) + (5 * cb | 0)] = z[jb + (38 * Da | 0) + (9 * cb | 0) + 5];
            var db = cb + 1;
            if (db < m[Ya >> 2]) {
              cb = db;
            } else {
              break;
            }
          }
          var yb = m[ub >> 2];
        } else {
          yb = tb;
        }
        var ob = Da + 1;
        if (ob < yb) {
          Da = ob, tb = yb;
        } else {
          break a;
        }
      }
    }
  } while (0);
  var qb = bj(u);
  z[e + 16 >> 2] = qb;
  var eb = 0 < m[r];
  a : do {
    if (eb) {
      i = S >> 2;
      h = N >> 2;
      for (var Za = N, Ma = N + 4, rb = Q, fb = Q + 4, Va = 0; ; ) {
        var zb = m[t], vb = zb + 12 * Va, pb = m[vb + 4 >> 2];
        m[i] = m[vb >> 2];
        m[i + 1] = pb;
        var xb = z[(zb + 8 >> 2) + (3 * Va | 0)], $a = m[p], Gb = $a + 12 * Va, Oa = Gb, Ab = m[Oa >> 2], qa = Gb + 4, sb = m[qa >> 2];
        m[h] = Ab;
        m[h + 1] = sb;
        var Bb = z[($a + 8 >> 2) + (3 * Va | 0)], Cb = (E[0] = Ab, F[0]), Db = (E[0] = sb, F[0]);
        Xf(Q, T, Cb, Db);
        var bb = z[rb >> 2], Eb = z[fb >> 2];
        if (4 < bb * bb + Eb * Eb) {
          var Ob = 2 / $f(bb * bb + Eb * Eb);
          Mi(N, Ob);
        }
        var Fb = T * Bb, Wa = 2.4674012660980225 < Fb * Fb ? Bb * (1.5707963705062866 / (0 < Fb ? Fb : -Fb)) : Bb;
        Xf(Y, T, z[Za >> 2], z[Ma >> 2]);
        Ve(S, Y);
        var Qb = xb + T * Wa, Sb = m[t] + 12 * Va, Xb = m[i], Tb = m[i + 1], Pa = Sb;
        m[Pa >> 2] = Xb;
        Fa = Sb + 4;
        m[Fa >> 2] = Tb;
        z[(m[t] + 8 >> 2) + (3 * Va | 0)] = Qb;
        var Jb = m[p] + 12 * Va, ac = m[h + 1];
        m[Jb >> 2] = m[h];
        m[Jb + 4 >> 2] = ac;
        z[(m[p] + 8 >> 2) + (3 * Va | 0)] = Wa;
        var Vb = Va + 1;
        if (Vb < m[r]) {
          Va = Vb;
        } else {
          break a;
        }
      }
    }
  } while (0);
  $i(u);
  for (var bc = d + 16, lc = 0; ; ) {
    if (lc >= m[bc >> 2]) {
      var Pc = 1;
      break;
    }
    for (var Xc = xn(I), Dc = 0, mc = 1; Dc < m[k]; ) {
      var nc = m[m[j] + (Dc << 2) >> 2], Qc = Kd[m[m[nc >> 2] + 36 >> 2]](nc, G), Yc = mc & Qc, Dc = Dc + 1, mc = Yc;
    }
    if (Xc & mc) {
      Pc = 0;
      break;
    }
    lc += 1;
  }
  var Zc = 0 < m[r];
  a : do {
    if (Zc) {
      for (var oc = c + 8, hc = 0; ; ) {
        var pc = m[m[oc >> 2] + (hc << 2) >> 2], gd = m[t] + 12 * hc, hd = pc + 44, cc = m[gd >> 2], qc = m[gd + 4 >> 2], Ra = hd;
        m[Ra >> 2] = cc;
        ta = hd + 4;
        m[ta >> 2] = qc;
        z[pc + 56 >> 2] = z[(m[t] + 8 >> 2) + (3 * hc | 0)];
        var ic = m[p] + 12 * hc, Ec = pc + 64, Yb = m[ic + 4 >> 2];
        m[Ec >> 2] = m[ic >> 2];
        m[Ec + 4 >> 2] = Yb;
        z[pc + 72 >> 2] = z[(m[p] + 8 >> 2) + (3 * hc | 0)];
        Dj(pc);
        var vc = hc + 1;
        if (vc < m[r]) {
          hc = vc;
        } else {
          break a;
        }
      }
    }
  } while (0);
  var wc = bj(u);
  z[e + 20 >> 2] = wc;
  Dl(c, m[I + 40 >> 2]);
  a : do {
    if (g && 0 < m[r]) {
      for (var id = c + 8, jc = 3.4028234663852886e+38, $c = 0; ; ) {
        var xc = m[m[id >> 2] + ($c << 2) >> 2], pd = 0 == m[xc >> 2];
        b : do {
          if (pd) {
            var yc = jc;
          } else {
            var jd = 0 == (md[xc + 4 >> 1] & 4);
            do {
              if (!jd) {
                var kd = z[xc + 72 >> 2];
                if (.001218469929881394 >= kd * kd) {
                  var ad = z[xc + 64 >> 2], zc = z[xc + 68 >> 2];
                  if (9999999747378752e-20 >= ad * ad + zc * zc) {
                    var ce = xc + 144, Ld = z[ce >> 2] + T;
                    z[ce >> 2] = Ld;
                    yc = jc < Ld ? jc : Ld;
                    break b;
                  }
                }
              }
            } while (0);
            yc = z[xc + 144 >> 2] = 0;
          }
        } while (0);
        var Ed = $c + 1, Fc = v[r];
        if (Ed < Fc) {
          jc = yc, $c = Ed;
        } else {
          break;
        }
      }
      if (0 < Fc & ((.5 > yc | Pc) ^ 1)) {
        for (var Lb = 0; ; ) {
          bg(m[m[id >> 2] + (Lb << 2) >> 2], 0);
          var qd = Lb + 1;
          if (qd < m[r]) {
            Lb = qd;
          } else {
            break a;
          }
        }
      }
    }
  } while (0);
  yn(I);
  a = u;
}

sn.X = 1;

function ag(c, e) {
  var d = c >> 2, f = c + 8;
  m[f >> 2] = 128;
  m[c + 4 >> 2] = 0;
  var g = Dd(1024);
  m[c >> 2] = g;
  Id(g, m[f >> 2] << 3);
  Id(c + 12, 56);
  if (!nd[zn]) {
    g = 0;
    for (f = 1; !(14 > g || K(H.j, 73, H.gb, H.Sb), f > m[Ti + (g << 2) >> 2] && (g += 1), b[Si + f] = g & 255, f += 1, 641 == f); ) {}
    b[zn] = 1;
  }
  f = c + 68;
  m[f + 102400 >> 2] = 0;
  m[f + 102404 >> 2] = 0;
  m[f + 102408 >> 2] = 0;
  m[f + 102796 >> 2] = 0;
  var h = c + 102872, f = h >> 2, g = h >> 2, i, j = h >> 2;
  m[j] = -1;
  i = h + 12 >> 2;
  m[i] = 16;
  m[j + 2] = 0;
  var k = Dd(576), h = h + 4 >> 2;
  m[h] = k;
  Id(k, 36 * m[i]);
  var k = m[i] - 1, l = 0 < k;
  a : do {
    if (l) {
      for (var o = 0; ; ) {
        var n = o + 1;
        m[m[h] + 36 * o + 20 >> 2] = n;
        m[m[h] + 36 * o + 32 >> 2] = -1;
        o = m[i] - 1;
        if (n < o) {
          o = n;
        } else {
          var p = o;
          break a;
        }
      }
    } else {
      p = k;
    }
  } while (0);
  m[m[h] + 36 * p + 20 >> 2] = -1;
  m[m[h] + 36 * (m[i] - 1) + 32 >> 2] = -1;
  m[j + 4] = 0;
  m[j + 5] = 0;
  m[j + 6] = 0;
  m[g + 7] = 0;
  m[g + 12] = 16;
  m[g + 13] = 0;
  p = Dd(192);
  m[g + 11] = p;
  m[g + 9] = 16;
  m[g + 10] = 0;
  p = Dd(64);
  m[g + 8] = p;
  m[f + 15] = 0;
  m[f + 16] = 0;
  m[f + 17] = An;
  m[f + 18] = Bn;
  m[f + 19] = 0;
  p = c + 102968;
  m[d + 25745] = 0;
  m[d + 25746] = 0;
  m[d + 25738] = 0;
  m[d + 25739] = 0;
  m[d + 25740] = 0;
  m[d + 25741] = 0;
  b[c + 102992] = 1;
  b[c + 102993] = 1;
  b[c + 102994] = 0;
  b[c + 102995] = 1;
  b[c + 102976] = 1;
  f = m[e + 4 >> 2];
  m[p >> 2] = m[e >> 2];
  m[p + 4 >> 2] = f;
  m[d + 25717] = 4;
  z[d + 25747] = 0;
  m[d + 25737] = c;
  Id(c + 102996, 32);
}

ag.X = 1;

function cg(c, e) {
  var d, f = c + 102868;
  d = m[f >> 2];
  0 != (d & 2) ? (K(H.i, 109, H.mb, H.Gb), f = m[f >> 2]) : f = d;
  if (0 != (f & 2)) {
    f = 0;
  } else {
    f = Ri(c, 152);
    0 == f ? f = 0 : cj(f, e, c);
    m[f + 92 >> 2] = 0;
    d = c + 102952 >> 2;
    m[f + 96 >> 2] = m[d];
    var g = m[d];
    0 != g && (m[g + 92 >> 2] = f);
    m[d] = f;
    d = c + 102960;
    m[d >> 2] += 1;
  }
  return f;
}

function Cn(c, e, d, f) {
  var g, h, i, j, k, l, o = a;
  a += 128;
  g = o >> 2;
  var n = o + 44, p = o + 96, t = o + 104, q = o + 112, r = o + 120;
  l = c + 28 >> 2;
  h = m[l];
  h > d || (K(H.ka, 386, H.W, H.Fb), h = m[l]);
  h > f || (K(H.ka, 387, H.W, H.Vb), h = m[l]);
  h = 0 < h;
  a : do {
    if (h) {
      var s = c + 8, u = c + 20;
      i = c + 24;
      for (var x = 0; ; ) {
        var B = m[m[s >> 2] + (x << 2) >> 2], y = B + 44, w = m[u >> 2] + 12 * x, D = y, y = y + 4, y = m[y >> 2], G = w;
        m[G >> 2] = m[D >> 2];
        w += 4;
        m[w >> 2] = y;
        z[(m[u >> 2] + 8 >> 2) + (3 * x | 0)] = z[B + 56 >> 2];
        w = B + 64;
        D = m[i >> 2] + 12 * x;
        y = m[w + 4 >> 2];
        m[D >> 2] = m[w >> 2];
        m[D + 4 >> 2] = y;
        z[(m[i >> 2] + 8 >> 2) + (3 * x | 0)] = z[B + 72 >> 2];
        x += 1;
        if (x >= m[l]) {
          k = u;
          k >>= 2;
          j = i;
          j >>= 2;
          break a;
        }
      }
    } else {
      k = c + 20, k >>= 2, j = c + 24, j >>= 2;
    }
  } while (0);
  m[g + 6] = m[c + 12 >> 2];
  m[g + 7] = m[c + 36 >> 2];
  m[g + 10] = m[c >> 2];
  i = o >> 2;
  h = e >> 2;
  m[i] = m[h];
  m[i + 1] = m[h + 1];
  m[i + 2] = m[h + 2];
  m[i + 3] = m[h + 3];
  m[i + 4] = m[h + 4];
  m[i + 5] = m[h + 5];
  m[g + 8] = m[k];
  m[g + 9] = m[j];
  tn(n, o);
  g = e + 16;
  for (h = 0; h < m[g >> 2]; ) {
    if (Dn(n, d, f)) {
      break;
    }
    h += 1;
  }
  g = c + 8 >> 2;
  s = m[k] + 12 * d;
  h = m[m[g] + (d << 2) >> 2] + 36;
  i = m[s >> 2];
  s = m[s + 4 >> 2];
  m[h >> 2] = i;
  m[h + 4 >> 2] = s;
  z[m[m[g] + (d << 2) >> 2] + 52 >> 2] = z[(m[k] + 8 >> 2) + (3 * d | 0)];
  d = m[k] + 12 * f;
  h = m[m[g] + (f << 2) >> 2] + 36;
  i = m[d + 4 >> 2];
  m[h >> 2] = m[d >> 2];
  m[h + 4 >> 2] = i;
  z[m[m[g] + (f << 2) >> 2] + 52 >> 2] = z[(m[k] + 8 >> 2) + (3 * f | 0)];
  un(n);
  f = e + 12;
  for (d = 0; d < m[f >> 2]; ) {
    wn(n);
    d += 1;
  }
  d = z[e >> 2];
  h = 0 < m[l];
  a : do {
    if (h) {
      f = p >> 2;
      e = t >> 2;
      i = t;
      s = t + 4;
      u = q;
      x = q + 4;
      for (B = 0; ; ) {
        w = m[k];
        D = w + 12 * B;
        y = m[D + 4 >> 2];
        m[f] = m[D >> 2];
        m[f + 1] = y;
        w = z[(w + 8 >> 2) + (3 * B | 0)];
        D = m[j];
        G = D + 12 * B;
        y = m[G >> 2];
        G = m[G + 4 >> 2];
        m[e] = y;
        m[e + 1] = G;
        D = z[(D + 8 >> 2) + (3 * B | 0)];
        y = (E[0] = y, F[0]);
        G = (E[0] = G, F[0]);
        Xf(q, d, y, G);
        y = z[u >> 2];
        G = z[x >> 2];
        4 < y * y + G * G && (y = 2 / $f(y * y + G * G), Mi(t, y));
        y = d * D;
        D = 2.4674012660980225 < y * y ? D * (1.5707963705062866 / (0 < y ? y : -y)) : D;
        Xf(r, d, z[i >> 2], z[s >> 2]);
        Ve(p, r);
        var w = w + d * D, M = m[k] + 12 * B, y = m[f], G = m[f + 1];
        m[M >> 2] = y;
        m[M + 4 >> 2] = G;
        z[(m[k] + 8 >> 2) + (3 * B | 0)] = w;
        var I = m[j] + 12 * B, M = m[e], S = m[e + 1];
        m[I >> 2] = M;
        m[I + 4 >> 2] = S;
        z[(m[j] + 8 >> 2) + (3 * B | 0)] = D;
        var I = m[m[g] + (B << 2) >> 2], N = I + 44;
        m[N >> 2] = y;
        m[N + 4 >> 2] = G;
        z[I + 56 >> 2] = w;
        w = I + 64;
        m[w >> 2] = M;
        m[w + 4 >> 2] = S;
        z[I + 72 >> 2] = D;
        Dj(I);
        B += 1;
        if (B >= m[l]) {
          break a;
        }
      }
    }
  } while (0);
  Dl(c, m[n + 40 >> 2]);
  yn(n);
  a = o;
}

Cn.X = 1;

function lg(c) {
  var e = m[c + 102952 >> 2];
  a : for (; 0 != e; ) {
    for (var d = m[e + 96 >> 2], f = m[e + 100 >> 2]; ; ) {
      if (0 == f) {
        e = d;
        continue a;
      }
      var g = m[f + 4 >> 2];
      m[f + 28 >> 2] = 0;
      Aj(f, c);
      f = g;
    }
  }
  e = c + 102872;
  Sf(m[e + 32 >> 2]);
  Sf(m[e + 44 >> 2]);
  Sf(m[e + 4 >> 2]);
  e = c + 68;
  0 != m[e + 102400 >> 2] && K(H.n, 32, H.O, H.Tb);
  0 != m[e + 102796 >> 2] && K(H.n, 33, H.O, H.ac);
  e = c + 4;
  d = 0 < m[e >> 2];
  f = m[c >> 2];
  a : do {
    if (d) {
      for (var g = 0, h = f; ; ) {
        if (Sf(m[h + (g << 3) + 4 >> 2]), g += 1, h = m[c >> 2], g >= m[e >> 2]) {
          var i = h;
          break a;
        }
      }
    } else {
      i = f;
    }
  } while (0);
  Sf(i);
}

lg.X = 1;

function En(c) {
  m[c + 28 >> 2] = 0;
  m[c + 36 >> 2] = 0;
  m[c + 32 >> 2] = 0;
}

function Fn(c, e) {
  var d;
  d = c + 28 >> 2;
  var f = m[d];
  f < m[c + 40 >> 2] || (K(H.A, 54, H.nb, H.bc), f = m[d]);
  m[e + 8 >> 2] = f;
  m[(m[d] << 2) + m[c + 8 >> 2] >> 2] = e;
  m[d] += 1;
}

function Gn(c, e) {
  var d;
  d = c + 36 >> 2;
  var f = m[d];
  f < m[c + 44 >> 2] || (K(H.A, 62, H.pb, H.$b), f = m[d]);
  m[d] = f + 1;
  m[(f << 2) + m[c + 12 >> 2] >> 2] = e;
}

function Hn(c, e) {
  var d, f, g, h, i, j, k = c >> 2, l = a;
  a += 92;
  var o = l + 52, n = l + 84;
  j = c + 103008 >> 2;
  z[j] = 0;
  i = c + 103012 >> 2;
  z[i] = 0;
  h = c + 103016 >> 2;
  z[h] = 0;
  var p = c + 102960, t = c + 102872, q = c + 68;
  Bj(l, m[p >> 2], m[k + 25734], m[k + 25741], q, m[k + 25736]);
  var r = c + 102952, s = m[r >> 2], u = 0 == s;
  a : do {
    if (!u) {
      for (var x = s; ; ) {
        var B = x + 4;
        md[B >> 1] &= -2;
        x = m[x + 96 >> 2];
        if (0 == x) {
          break a;
        }
      }
    }
  } while (0);
  s = m[k + 25733];
  u = 0 == s;
  a : do {
    if (!u) {
      for (x = s; ; ) {
        if (B = x + 4, m[B >> 2] &= -2, x = m[x + 12 >> 2], 0 == x) {
          break a;
        }
      }
    }
  } while (0);
  s = m[k + 25739];
  u = 0 == s;
  a : do {
    if (!u) {
      for (x = s; ; ) {
        if (b[x + 60] = 0, x = m[x + 12 >> 2], 0 == x) {
          break a;
        }
      }
    }
  } while (0);
  var p = m[p >> 2], s = Vi(q, p << 2), u = c + 102968, x = c + 102976, B = o + 12, y = o + 16, w = o + 20, D = l + 28, G = l + 8;
  for (g = r; ; ) {
    var M = m[g >> 2];
    if (0 == M) {
      break;
    }
    g = M + 4 >> 1;
    var I = md[g], S = 0 == (I & 1);
    a : do {
      if (S && 0 != (I & 2) && 0 != (I & 32) && 0 != m[M >> 2]) {
        En(l);
        m[s >> 2] = M;
        md[g] |= 1;
        var N = 1;
        b : for (; 0 < N; ) {
          var Q = N - 1, Y = m[s + (Q << 2) >> 2];
          d = Y;
          0 != (md[Y + 4 >> 1] & 32) || K(H.i, 445, H.t, H.oc);
          Fn(l, Y);
          bg(d, 1);
          if (0 == m[Y >> 2]) {
            N = Q;
          } else {
            for (d = Y + 112; ; ) {
              d = m[d >> 2];
              if (0 == d) {
                break;
              }
              var T = m[d + 4 >> 2];
              f = T + 4 >> 2;
              var $ = m[f];
              0 == ($ & 1) && 0 != ($ & 4) && 0 != ($ & 2) && 0 == (b[m[T + 48 >> 2] + 38] & 1) && 0 == (b[m[T + 52 >> 2] + 38] & 1) && (Gn(l, T), m[f] |= 1, T = m[d >> 2], f = T + 4 >> 1, 0 == (md[f] & 1) && (Q < p || K(H.i, 495, H.t, H.ya), m[(Q << 2) + s >> 2] = T, md[f] |= 1, Q += 1));
              d += 12;
            }
            d = Y + 108;
            for (Y = Q; ; ) {
              Q = m[d >> 2];
              if (0 == Q) {
                N = Y;
                continue b;
              }
              f = Q + 4;
              var ba = m[f >> 2];
              if (0 == (b[ba + 60] & 1) && (T = m[Q >> 2], d = T + 4 >> 1, 0 != (md[d] & 32))) {
                var $ = l, P = ha, P = $ + 32 >> 2, R = m[P];
                R < m[$ + 48 >> 2] || (K(H.A, 68, H.ob, H.Zb), R = m[P]);
                m[P] = R + 1;
                m[(R << 2) + m[$ + 16 >> 2] >> 2] = ba;
                b[m[f >> 2] + 60] = 1;
                0 == (md[d] & 1) && (Y < p || K(H.i, 524, H.t, H.ya), m[(Y << 2) + s >> 2] = T, md[d] |= 1, Y += 1);
              }
              d = Q + 12;
            }
          }
        }
        sn(l, o, e, u, 0 != (b[x] & 1));
        z[j] += z[B >> 2];
        z[i] += z[y >> 2];
        z[h] += z[w >> 2];
        N = m[D >> 2];
        if (0 < N) {
          Y = m[G >> 2];
          for (Q = 0; ; ) {
            if (d = m[Y + (Q << 2) >> 2], 0 == m[d >> 2] && (d += 4, md[d >> 1] &= -2), Q += 1, Q >= N) {
              break a;
            }
          }
        }
      }
    } while (0);
    g = M + 96;
  }
  Wi(q, s);
  $i(n);
  for (h = m[r >> 2]; 0 != h; ) {
    0 != (md[h + 4 >> 1] & 1) && 0 != m[h >> 2] && ej(h);
    h = m[h + 96 >> 2];
  }
  oj(t, t);
  n = bj(n);
  z[k + 25755] = n;
  Cj(l);
  a = l;
}

Hn.X = 1;

function In(c, e) {
  var d, f = a;
  a += 24;
  var g = f + 8, h = f + 16;
  d = c + 32 >> 2;
  var i = z[d];
  1 > i || (K(H.Yb, 715, H.lb, H.za), i = z[d]);
  var i = (e - i) / (1 - i), j = c + 8, k = 1 - i;
  Xf(g, k, z[j >> 2], z[c + 12 >> 2]);
  Xf(h, i, z[c + 16 >> 2], z[c + 20 >> 2]);
  J(f, z[g >> 2] + z[h >> 2], z[g + 4 >> 2] + z[h + 4 >> 2]);
  g = m[f + 4 >> 2];
  m[j >> 2] = m[f >> 2];
  m[j + 4 >> 2] = g;
  g = c + 24;
  z[g >> 2] = k * z[g >> 2] + i * z[c + 28 >> 2];
  z[d] = e;
  a = f;
}

In.X = 1;

function Jn(c, e) {
  var d = c >> 2, f = a;
  a += 16;
  var g = f + 8, h = c + 28;
  In(h, e);
  var i = c + 44, j = c + 36, k = m[j + 4 >> 2];
  m[i >> 2] = m[j >> 2];
  m[i + 4 >> 2] = k;
  k = z[d + 13];
  z[d + 14] = k;
  j = c + 20;
  Ei(j, k);
  k = c + 12;
  Yg(g, z[j >> 2], z[d + 6], z[h >> 2], z[d + 8]);
  J(f, z[i >> 2] - z[g >> 2], z[d + 12] - z[g + 4 >> 2]);
  d = m[f + 4 >> 2];
  m[k >> 2] = m[f >> 2];
  m[k + 4 >> 2] = d;
  a = f;
}

Jn.X = 1;

function eg(c) {
  var e, d, f, g = c >> 2, h = a;
  a += 56;
  var i = h + 8;
  f = i >> 2;
  var j = h + 32, k = h + 40, l = h + 48;
  $i(h);
  d = c + 102868 >> 2;
  e = m[d];
  var o = c + 102872;
  0 != (e & 1) && (oj(o, o), e = m[d] & -2, m[d] = e);
  m[d] = e | 2;
  e = i >> 2;
  z[e] = .01666666753590107;
  m[f + 3] = 3;
  m[f + 4] = 3;
  var n = i + 4;
  z[n >> 2] = 59.999996185302734;
  var p = c + 102988;
  z[f + 2] = .01666666753590107 * z[p >> 2];
  b[i + 20] = b[c + 102992] & 1;
  $i(j);
  kj(o);
  f = bj(j);
  z[g + 25750] = f;
  0 != (b[c + 102995] & 1) && ($i(k), Hn(c, i), k = bj(k), z[g + 25751] = k);
  if (0 == (b[c + 102993] & 1)) {
    c = 7;
  } else {
    if (k = z[e], 0 < k) {
      $i(l), Kn(c, i), c = bj(l), z[g + 25756] = c, c = 7;
    } else {
      var t = k, c = 8;
    }
  }
  7 == c && (t = z[e]);
  0 < t && (z[p >> 2] = z[n >> 2]);
  t = m[d];
  if (0 != (t & 4)) {
    t = m[g + 25738];
    c = 0 == t;
    a : do {
      if (!c) {
        for (i = t; ; ) {
          if (We(i + 76), z[i + 84 >> 2] = 0, i = m[i + 96 >> 2], 0 == i) {
            break a;
          }
        }
      }
    } while (0);
    t = m[d];
  }
  m[d] = t & -3;
  d = bj(h);
  z[g + 25749] = d;
  a = h;
}

eg.X = 1;

function Kn(c, e) {
  var d, f, g, h, i, j, k, l, o, n, p, t, q, r, s, u, x = a;
  a += 224;
  var B = x + 52, y = x + 184, w = x + 192, D = x + 200, G = c + 68, M = c + 102872;
  u = c + 102944 >> 2;
  Bj(x, 64, 32, 0, G, m[u]);
  var I = c + 102995, S = 0 == (b[I] & 1);
  a : do {
    if (S) {
      var N = c + 102932;
    } else {
      var Q = m[c + 102952 >> 2], Y = 0 == Q;
      b : do {
        if (!Y) {
          for (var T = Q; ; ) {
            var $ = T + 4;
            md[$ >> 1] &= -2;
            z[T + 60 >> 2] = 0;
            var ba = m[T + 96 >> 2];
            if (0 == ba) {
              break b;
            } else {
              T = ba;
            }
          }
        }
      } while (0);
      var P = c + 102932, R = m[P >> 2];
      if (0 == R) {
        N = P;
      } else {
        var V = R;
        for (s = V >> 2; ; ) {
          var L = V + 4;
          m[L >> 2] &= -34;
          m[s + 32] = 0;
          z[s + 33] = 1;
          var O = m[s + 3];
          if (0 == O) {
            N = P;
            break a;
          } else {
            V = O, s = V >> 2;
          }
        }
      }
    }
  } while (0);
  var Z = B + 28, X = B + 56, U = B + 92, ka = B + 128, Ja = y + 4, gb = w + 4, Ta = x + 28, ya = x + 40, Na = x + 36, oa = x + 44, ga = D + 4, ia = D + 8, za = D + 16, Ra = e + 12, va = D + 12, ta = D + 20, Aa = x + 8, Oa = c + 102994, qa = 0, ea = 1, ca = N;
  a : for (;;) {
    var fa = m[ca >> 2];
    r = fa >> 2;
    if (0 == fa) {
      if (0 == qa | .9999988079071045 < ea) {
        var Ka = 1;
        break;
      }
      var la = m[m[qa + 48 >> 2] + 8 >> 2], wa = la, xa = m[m[qa + 52 >> 2] + 8 >> 2], Ua = xa, ma = la + 28, ja = z[ma >> 2], Pa = la + 32, Fa = z[Pa >> 2], Ea = la + 36, Sa = z[Ea >> 2], Ga = la + 40, La = z[Ga >> 2], na = la + 44, Ca = z[na >> 2], ua = la + 48, sa = z[ua >> 2], aa = la + 52, Ha = z[aa >> 2], hb = la + 56, ib = z[hb >> 2], jb = la + 60, ub = z[jb >> 2], kb = xa + 28, wb = z[kb >> 2], lb = xa + 32, mb = z[lb >> 2], Da = xa + 36, tb = z[Da >> 2], Xa = xa + 40, nb = z[Xa >> 2], Ya = xa + 44, cb = z[Ya >> 2], db = xa + 48, yb = z[db >> 2], ob = xa + 52, qb = z[ob >> 2], eb = xa + 56, Za = z[eb >> 2], Ma = xa + 60, rb = z[Ma >> 2];
      Jn(wa, ea);
      Jn(Ua, ea);
      nj(qa, m[u]);
      q = qa + 4 >> 2;
      var fb = m[q] & -33;
      m[q] = fb;
      var Va = qa + 128;
      m[Va >> 2] += 1;
      var zb = 0 != (fb & 4);
      do {
        if (zb && 0 != (fb & 2)) {
          bg(la, 1);
          bg(xa, 1);
          En(x);
          Fn(x, wa);
          Fn(x, Ua);
          Gn(x, qa);
          var vb = la + 4;
          md[vb >> 1] |= 1;
          var pb = xa + 4;
          md[pb >> 1] |= 1;
          m[q] |= 1;
          m[w >> 2] = wa;
          m[gb >> 2] = Ua;
          for (var xb = 0; 2 > xb; ) {
            var $a = m[w + (xb << 2) >> 2], Gb = 2 == m[$a >> 2];
            b : do {
              if (Gb) {
                for (var Ab = $a + 4, sb = $a + 112; ; ) {
                  var Bb = m[sb >> 2];
                  if (0 == Bb) {
                    break b;
                  }
                  if (m[Ta >> 2] == m[ya >> 2]) {
                    break b;
                  }
                  if (m[Na >> 2] == m[oa >> 2]) {
                    break b;
                  }
                  var Cb = m[Bb + 4 >> 2];
                  t = Cb + 4 >> 2;
                  var Db = 0 == (m[t] & 1);
                  c : do {
                    if (Db) {
                      var bb = m[Bb >> 2], Eb = bb, Ob = 2 == m[Eb >> 2];
                      do {
                        if (Ob && 0 == (md[Ab >> 1] & 8) && 0 == (md[bb + 4 >> 1] & 8)) {
                          break c;
                        }
                      } while (0);
                      if (0 == (b[m[Cb + 48 >> 2] + 38] & 1) && 0 == (b[m[Cb + 52 >> 2] + 38] & 1)) {
                        p = bb + 28 >> 2;
                        var Fb = z[p];
                        n = bb + 32 >> 2;
                        var Wa = z[n];
                        o = bb + 36 >> 2;
                        var Qb = z[o];
                        l = bb + 40 >> 2;
                        var Sb = z[l];
                        k = bb + 44 >> 2;
                        var Xb = z[k];
                        j = bb + 48 >> 2;
                        var Tb = z[j];
                        i = bb + 52 >> 2;
                        var Jb = z[i];
                        h = bb + 56 >> 2;
                        var ac = z[h];
                        g = bb + 60 >> 2;
                        var Vb = z[g];
                        f = bb + 4 >> 1;
                        0 == (md[f] & 1) && Jn(bb, ea);
                        nj(Cb, m[u]);
                        var bc = m[t];
                        if (0 != (bc & 4)) {
                          if (0 != (bc & 2)) {
                            m[t] = bc | 1;
                            Gn(x, Cb);
                            var lc = md[f];
                            0 == (lc & 1) && (md[f] = lc | 1, 0 != m[Eb >> 2] && bg(bb, 1), Fn(x, bb));
                          } else {
                            z[p] = Fb, z[n] = Wa, z[o] = Qb, z[l] = Sb, z[k] = Xb, z[j] = Tb, z[i] = Jb, z[h] = ac, z[g] = Vb, Dj(bb);
                          }
                        } else {
                          z[p] = Fb, z[n] = Wa, z[o] = Qb, z[l] = Sb, z[k] = Xb, z[j] = Tb, z[i] = Jb, z[h] = ac, z[g] = Vb, Dj(bb);
                        }
                      }
                    }
                  } while (0);
                  sb = Bb + 12;
                }
              }
            } while (0);
            xb += 1;
          }
          var Pc = (1 - ea) * z[e >> 2];
          z[D >> 2] = Pc;
          z[ga >> 2] = 1 / Pc;
          z[ia >> 2] = 1;
          m[za >> 2] = 20;
          m[va >> 2] = m[Ra >> 2];
          b[ta] = 0;
          Cn(x, D, m[la + 8 >> 2], m[xa + 8 >> 2]);
          for (var Xc = m[Ta >> 2], Dc = m[Aa >> 2], mc = 0; mc < Xc; ) {
            var nc = m[Dc + (mc << 2) >> 2], Qc = nc + 4;
            md[Qc >> 1] &= -2;
            var Yc = 2 == m[nc >> 2];
            b : do {
              if (Yc) {
                ej(nc);
                var Zc = m[nc + 112 >> 2];
                if (0 != Zc) {
                  for (var oc = Zc; ; ) {
                    var hc = m[oc + 4 >> 2] + 4;
                    m[hc >> 2] &= -34;
                    var pc = m[oc + 12 >> 2];
                    if (0 == pc) {
                      break b;
                    } else {
                      oc = pc;
                    }
                  }
                }
              }
            } while (0);
            mc += 1;
          }
          oj(M, M);
          if (0 == (b[Oa] & 1)) {
            qa = 0;
            ea = 1;
            ca = N;
            continue a;
          } else {
            Ka = 0;
            break a;
          }
        }
      } while (0);
      var gd = qa + 4;
      m[gd >> 2] &= -5;
      z[ma >> 2] = ja;
      z[Pa >> 2] = Fa;
      z[Ea >> 2] = Sa;
      z[Ga >> 2] = La;
      z[na >> 2] = Ca;
      z[ua >> 2] = sa;
      z[aa >> 2] = Ha;
      z[hb >> 2] = ib;
      z[jb >> 2] = ub;
      z[kb >> 2] = wb;
      z[lb >> 2] = mb;
      z[Da >> 2] = tb;
      z[Xa >> 2] = nb;
      z[Ya >> 2] = cb;
      z[db >> 2] = yb;
      z[ob >> 2] = qb;
      z[eb >> 2] = Za;
      z[Ma >> 2] = rb;
      Dj(la);
      Dj(xa);
      qa = 0;
      ea = 1;
      ca = N;
    } else {
      d = fa + 4 >> 2;
      var hd = m[d], cc = 0 != (hd & 4);
      do {
        if (cc) {
          if (8 < m[r + 32]) {
            var qc = qa, ic = ea;
          } else {
            if (0 == (hd & 32)) {
              var Ec = m[r + 12], Yb = m[r + 13];
              if (0 != (b[Ec + 38] & 1)) {
                qc = qa;
                ic = ea;
                break;
              }
              if (0 != (b[Yb + 38] & 1)) {
                qc = qa;
                ic = ea;
                break;
              }
              var vc = m[Ec + 8 >> 2], wc = m[Yb + 8 >> 2], id = m[vc >> 2], jc = m[wc >> 2];
              2 == id | 2 == jc || K(H.i, 641, H.V, H.Ec);
              var $c = md[vc + 4 >> 1], xc = md[wc + 4 >> 1];
              if (!(0 != ($c & 2) & 0 != id | 0 != (xc & 2) & 0 != jc)) {
                qc = qa;
                ic = ea;
                break;
              }
              if (!(0 != ($c & 8) | 2 != id | 0 != (xc & 8) | 2 != jc)) {
                qc = qa;
                ic = ea;
                break;
              }
              var pd = vc + 28, yc = z[vc + 60 >> 2], jd = wc + 28, kd = jd, ad = z[wc + 60 >> 2];
              if (yc < ad) {
                In(pd, ad);
                var zc = ad;
              } else {
                ad < yc && In(kd, yc), zc = yc;
              }
              1 > zc || K(H.i, 676, H.V, H.za);
              var ce = m[r + 14], Ld = m[r + 15], Ed = B;
              eh(Ed);
              eh(Ed + 28);
              gh(B, m[Ec + 12 >> 2], ce);
              gh(Z, m[Yb + 12 >> 2], Ld);
              for (var Fc = pd >> 2, Lb = X >> 2, qd = Fc + 9; Fc < qd; Fc++, Lb++) {
                m[Lb] = m[Fc];
              }
              Fc = jd >> 2;
              Lb = U >> 2;
              for (qd = Fc + 9; Fc < qd; Fc++, Lb++) {
                m[Lb] = m[Fc];
              }
              z[ka >> 2] = 1;
              si(y, B);
              var de = 3 == m[y >> 2] ? 1 > zc + (1 - zc) * z[Ja >> 2] ? zc + (1 - zc) * z[Ja >> 2] : 1 : 1;
              z[r + 33] = de;
              m[d] |= 32;
              var ue = de;
            } else {
              ue = z[r + 33];
            }
            ue < ea ? (qc = fa, ic = ue) : (qc = qa, ic = ea);
          }
        } else {
          qc = qa, ic = ea;
        }
      } while (0);
      qa = qc;
      ea = ic;
      ca = fa + 12;
    }
  }
  b[I] = Ka;
  Cj(x);
  a = x;
}

Kn.X = 1;

function uj(c, e, d, f) {
  4 > d || K(H.g, 54, H.Z, H.ga);
  4 > f || K(H.g, 55, H.Z, H.ma);
  m[(vj >> 2) + (12 * d | 0) + (3 * f | 0)] = c;
  m[(vj + 4 >> 2) + (12 * d | 0) + (3 * f | 0)] = e;
  b[vj + 48 * d + 12 * f + 8] = 1;
  d != f && (m[(vj >> 2) + (12 * f | 0) + (3 * d | 0)] = c, m[(vj + 4 >> 2) + (12 * f | 0) + (3 * d | 0)] = e, b[vj + 48 * f + 12 * d + 8] = 0);
}

function jj(c, e) {
  nd[tj] || K(H.g, 103, H.u, H.hc);
  var d = c + 48;
  if (0 < m[c + 124 >> 2]) {
    bg(m[m[d >> 2] + 8 >> 2], 1);
    var f = c + 52;
    bg(m[m[f >> 2] + 8 >> 2], 1);
  } else {
    f = c + 52;
  }
  d = m[m[m[d >> 2] + 12 >> 2] + 4 >> 2];
  f = m[m[m[f >> 2] + 12 >> 2] + 4 >> 2];
  -1 < d & 4 > f || (K(H.g, 114, H.u, H.wa), K(H.g, 115, H.u, H.wa));
  Kd[m[(vj + 4 >> 2) + (12 * d | 0) + (3 * f | 0)]](c, e);
}

jj.X = 1;

function Ln(c, e, d, f, g) {
  var h = c >> 2;
  m[h] = Mn + 8;
  m[h + 1] = 4;
  m[h + 12] = e;
  m[h + 13] = f;
  m[h + 14] = d;
  m[h + 15] = g;
  m[h + 31] = 0;
  m[h + 32] = 0;
  c = c + 8 >> 2;
  for (d = c + 10; c < d; c++) {
    m[c] = 0;
  }
  c = $f(z[e + 16 >> 2] * z[f + 16 >> 2]);
  z[h + 34] = c;
  z[h + 35] = z[e + 20 >> 2] > z[f + 20 >> 2] ? z[e + 20 >> 2] : z[f + 20 >> 2];
}

function nj(c, e) {
  var d, f, g = c >> 2, h = a;
  a += 64;
  f = h >> 2;
  var i = c + 64, j = i >> 2;
  d = h >> 2;
  for (var k = j + 16; j < k; j++, d++) {
    m[d] = m[j];
  }
  d = c + 4 >> 2;
  j = v[d];
  m[d] = j | 4;
  var k = j >>> 1, l = v[g + 12], o = v[g + 13], j = 0 != (b[l + 38] & 1) | 0 != (b[o + 38] & 1), n = m[l + 8 >> 2], p = m[o + 8 >> 2], t = n + 12, q = p + 12;
  do {
    if (j) {
      var r, s = m[l + 12 >> 2], u = m[g + 14], x = m[o + 12 >> 2], B = m[g + 15], y = t, w = q, D = ha, G = ha, G = D = ha;
      r = a;
      a += 128;
      var M = r + 92, I = r + 104, D = r;
      eh(D);
      eh(D + 28);
      gh(r, s, u);
      gh(r + 28, x, B);
      G = r + 56 >> 2;
      D = y >> 2;
      m[G] = m[D];
      m[G + 1] = m[D + 1];
      m[G + 2] = m[D + 2];
      m[G + 3] = m[D + 3];
      G = r + 72 >> 2;
      D = w >> 2;
      m[G] = m[D];
      m[G + 1] = m[D + 1];
      m[G + 2] = m[D + 2];
      m[G + 3] = m[D + 3];
      b[r + 88] = 1;
      md[M + 4 >> 1] = 0;
      kh(I, M, r);
      s = 11920928955078125e-22 > z[I + 16 >> 2];
      a = r;
      r = s;
      m[g + 31] = 0;
      s = r;
      r = k & 1;
    } else {
      Kd[m[m[g] >> 2]](c, i, t, q);
      u = c + 124;
      s = r = 0 < m[u >> 2];
      a : do {
        if (r) {
          x = m[f + 15];
          for (B = 0; ; ) {
            y = c + 20 * B + 72;
            z[y >> 2] = 0;
            w = c + 20 * B + 76;
            z[w >> 2] = 0;
            M = m[g + (5 * B | 0) + 20];
            for (I = 0; I < x; ) {
              if (m[f + (5 * I | 0) + 4] == M) {
                z[y >> 2] = z[f + (5 * I | 0) + 2];
                z[w >> 2] = z[f + (5 * I | 0) + 3];
                break;
              } else {
                I += 1;
              }
            }
            B += 1;
            if (B >= m[u >> 2]) {
              break a;
            }
          }
        }
      } while (0);
      u = k & 1;
      r != u && (bg(n, 1), bg(p, 1));
      r = u;
    }
  } while (0);
  f = 0 != s;
  g = m[d];
  m[d] = f ? g | 2 : g & -3;
  g = f ^ 1;
  i = 0 == e;
  if (!(0 != r | g | i)) {
    Kd[m[m[e >> 2] + 8 >> 2]](e, c);
  }
  if (!(f | 0 == r | i)) {
    Kd[m[m[e >> 2] + 12 >> 2]](e, c);
  }
  if (!(j | g | i)) {
    Kd[m[m[e >> 2] + 16 >> 2]](e, c, h);
  }
  a = h;
}

nj.X = 1;

function Nn(c) {
  z[c >> 2] = 0;
  z[c + 8 >> 2] = 0;
  z[c + 4 >> 2] = 0;
  z[c + 12 >> 2] = 0;
}

function tn(c, e) {
  var d, f, g, h, i, j, k = e >> 2;
  j = c >> 2;
  i = e >> 2;
  m[j] = m[i];
  m[j + 1] = m[i + 1];
  m[j + 2] = m[i + 2];
  m[j + 3] = m[i + 3];
  m[j + 4] = m[i + 4];
  m[j + 5] = m[i + 5];
  j = m[k + 10];
  var l = c + 32;
  m[l >> 2] = j;
  var o = m[k + 7];
  i = c + 48 >> 2;
  m[i] = o;
  o = Vi(j, 88 * o);
  j = c + 36;
  m[j >> 2] = o;
  o = Vi(m[l >> 2], 152 * m[i]);
  l = c + 40;
  m[l >> 2] = o;
  m[c + 24 >> 2] = m[k + 8];
  m[c + 28 >> 2] = m[k + 9];
  k = m[k + 6];
  o = c + 44;
  m[o >> 2] = k;
  var n = 0 < m[i];
  a : do {
    if (n) {
      var p = c + 20, t = c + 8, q = 0;
      for (f = k; ; ) {
        f = m[f + (q << 2) >> 2];
        h = f >> 2;
        var r = m[h + 12];
        g = m[h + 13];
        var s = z[m[r + 12 >> 2] + 8 >> 2], u = z[m[g + 12 >> 2] + 8 >> 2], x = m[r + 8 >> 2], B = m[g + 8 >> 2], r = f + 64;
        g = r >> 2;
        var y = m[g + 15], w = 0 < y;
        w || K(H.m, 71, H.eb, H.Kb);
        var D = m[l >> 2];
        f = D >> 2;
        z[f + (38 * q | 0) + 34] = z[h + 34];
        z[f + (38 * q | 0) + 35] = z[h + 35];
        var G = x + 8;
        m[D + 152 * q + 112 >> 2] = m[G >> 2];
        var M = B + 8;
        m[D + 152 * q + 116 >> 2] = m[M >> 2];
        var I = x + 120;
        z[f + (38 * q | 0) + 30] = z[I >> 2];
        var S = B + 120;
        z[f + (38 * q | 0) + 31] = z[S >> 2];
        var N = x + 128;
        z[f + (38 * q | 0) + 32] = z[N >> 2];
        var Q = B + 128;
        z[f + (38 * q | 0) + 33] = z[Q >> 2];
        m[D + 152 * q + 148 >> 2] = q;
        m[D + 152 * q + 144 >> 2] = y;
        Nn(D + 152 * q + 96);
        Nn(D + 152 * q + 80);
        h = m[j >> 2];
        d = h >> 2;
        m[h + 88 * q + 32 >> 2] = m[G >> 2];
        m[h + 88 * q + 36 >> 2] = m[M >> 2];
        z[d + (22 * q | 0) + 10] = z[I >> 2];
        z[d + (22 * q | 0) + 11] = z[S >> 2];
        x += 28;
        G = h + 88 * q + 48;
        M = m[x + 4 >> 2];
        m[G >> 2] = m[x >> 2];
        m[G + 4 >> 2] = M;
        B += 28;
        x = h + 88 * q + 56;
        G = m[B + 4 >> 2];
        m[x >> 2] = m[B >> 2];
        m[x + 4 >> 2] = G;
        z[d + (22 * q | 0) + 16] = z[N >> 2];
        z[d + (22 * q | 0) + 17] = z[Q >> 2];
        N = r + 40;
        Q = h + 88 * q + 16;
        B = m[N + 4 >> 2];
        m[Q >> 2] = m[N >> 2];
        m[Q + 4 >> 2] = B;
        N = r + 48;
        Q = h + 88 * q + 24;
        B = m[N + 4 >> 2];
        m[Q >> 2] = m[N >> 2];
        m[Q + 4 >> 2] = B;
        m[h + 88 * q + 84 >> 2] = y;
        z[d + (22 * q | 0) + 19] = s;
        z[d + (22 * q | 0) + 20] = u;
        m[h + 88 * q + 72 >> 2] = m[g + 14];
        b : do {
          if (w) {
            for (s = 0; ; ) {
              if (u = r + 20 * s, 0 == (b[p] & 1) ? (z[f + (38 * q | 0) + (9 * s | 0) + 4] = 0, z[f + (38 * q | 0) + (9 * s | 0) + 5] = 0) : (z[f + (38 * q | 0) + (9 * s | 0) + 4] = z[t >> 2] * z[g + (5 * s | 0) + 2], z[f + (38 * q | 0) + (9 * s | 0) + 5] = z[t >> 2] * z[g + (5 * s | 0) + 3]), We(D + 152 * q + 36 * s), We(D + 152 * q + 36 * s + 8), z[f + (38 * q | 0) + (9 * s | 0) + 6] = 0, z[f + (38 * q | 0) + (9 * s | 0) + 7] = 0, z[f + (38 * q | 0) + (9 * s | 0) + 8] = 0, d = (s << 3) + h + 88 * q, N = m[u + 4 >> 2], m[d >> 2] = m[u >> 2], m[d + 4 >> 2] = N, s += 1, s == y) {
                break b;
              }
            }
          }
        } while (0);
        q += 1;
        if (q >= m[i]) {
          break a;
        }
        f = m[o >> 2];
      }
    }
  } while (0);
}

tn.X = 1;

function yn(c) {
  var e = c + 32;
  Wi(m[e >> 2], m[c + 40 >> 2]);
  Wi(m[e >> 2], m[c + 36 >> 2]);
}

function un(c) {
  var e, d, f, g, h, i, j, k, l = a;
  a += 152;
  var o = l + 16, n = l + 32, p = l + 40, t = l + 48, q = l + 72, r = l + 80, s = l + 88, u = l + 96, x = l + 104, B = l + 112, y = l + 120, w = l + 128, D = l + 136, G = c + 48, M = 0 < m[G >> 2];
  a : do {
    if (M) {
      var I = c + 40, S = c + 36, N = c + 44, Q = c + 24, Y = c + 28, T = l + 8, $ = o + 8, ba = t, P = t;
      k = D >> 2;
      for (var R = q, V = r, L = T, O = l + 12, Z = l, X = n, U = n + 4, ka = $, Ja = o + 12, gb = o, Ta = p, ya = p + 4, Na = s, oa = s + 4, ga = y, ia = y + 4, za = B, Ra = B + 4, va = x, ta = x + 4, Aa = w, Oa = w + 4, qa = u, ea = u + 4, ca = 0; ; ) {
        var fa = m[I >> 2];
        j = fa >> 2;
        var Ka = m[S >> 2], la = z[(Ka + 76 >> 2) + (22 * ca | 0)], wa = z[(Ka + 80 >> 2) + (22 * ca | 0)], xa = m[m[N >> 2] + (m[j + (38 * ca | 0) + 37] << 2) >> 2] + 64, Ua = m[j + (38 * ca | 0) + 28], ma = m[j + (38 * ca | 0) + 29], ja = z[j + (38 * ca | 0) + 30], Pa = z[j + (38 * ca | 0) + 31], Fa = z[j + (38 * ca | 0) + 32], Ea = z[j + (38 * ca | 0) + 33], Sa = Ka + 88 * ca + 48, Ga = m[Sa + 4 >> 2], La = (E[0] = m[Sa >> 2], F[0]), na = (E[0] = Ga, F[0]), Ca = Ka + 88 * ca + 56, ua = m[Ca + 4 >> 2], sa = (E[0] = m[Ca >> 2], F[0]), aa = (E[0] = ua, F[0]), Ha = m[Q >> 2], hb = Ha + 12 * Ua, ib = m[hb + 4 >> 2], jb = (E[0] = m[hb >> 2], F[0]), ub = (E[0] = ib, F[0]), kb = z[(Ha + 8 >> 2) + (3 * Ua | 0)], wb = m[Y >> 2], lb = wb + 12 * Ua, mb = m[lb + 4 >> 2], Da = (E[0] = m[lb >> 2], F[0]), tb = (E[0] = mb, F[0]), Xa = z[(wb + 8 >> 2) + (3 * Ua | 0)], nb = Ha + 12 * ma, Ya = m[nb + 4 >> 2], cb = (E[0] = m[nb >> 2], F[0]), db = (E[0] = Ya, F[0]), yb = z[(Ha + 8 >> 2) + (3 * ma | 0)], ob = wb + 12 * ma, qb = m[ob + 4 >> 2], eb = (E[0] = m[ob >> 2], F[0]), Za = (E[0] = qb, F[0]), Ma = z[(wb + 8 >> 2) + (3 * ma | 0)];
        0 < m[xa + 60 >> 2] || K(H.m, 168, H.cb, H.Xb);
        Ei(T, kb);
        Ei($, yb);
        Yg(n, z[L >> 2], z[O >> 2], La, na);
        J(Z, jb - z[X >> 2], ub - z[U >> 2]);
        Yg(p, z[ka >> 2], z[Ja >> 2], sa, aa);
        J(gb, cb - z[Ta >> 2], db - z[ya >> 2]);
        fh(ba, xa, l, la, o, wa);
        var rb = fa + 152 * ca + 72, fb = rb, Va = m[P + 4 >> 2];
        m[fb >> 2] = m[P >> 2];
        m[fb + 4 >> 2] = Va;
        i = fa + 152 * ca + 144 >> 2;
        var zb = m[i], vb = 0 < zb;
        do {
          if (vb) {
            var pb = ja + Pa, xb = fa + 152 * ca + 140;
            h = rb >> 2;
            g = fa + 152 * ca + 76 >> 2;
            for (var $a = 0; ; ) {
              var Gb = fa + 152 * ca + 36 * $a, Ab = z[t + ($a << 3) + 8 >> 2], sb = z[t + ($a << 3) + 12 >> 2];
              J(q, Ab - jb, sb - ub);
              var Bb = Gb, Cb = m[R + 4 >> 2];
              m[Bb >> 2] = m[R >> 2];
              m[Bb + 4 >> 2] = Cb;
              var Db = fa + 152 * ca + 36 * $a + 8;
              J(r, Ab - cb, sb - db);
              var bb = Db, Eb = m[V >> 2], Ob = m[V + 4 >> 2];
              m[bb >> 2] = Eb;
              m[bb + 4 >> 2] = Ob;
              f = Gb >> 2;
              var Fb = z[f];
              d = fa + 152 * ca + 36 * $a + 4 >> 2;
              var Wa = z[h], Qb = z[g], Sb = Fb * Qb - z[d] * Wa, Xb = Db, Tb = (E[0] = Eb, F[0]), Jb = fa + 152 * ca + 36 * $a + 12, ac = Tb * Qb - z[Jb >> 2] * Wa, Vb = pb + Fa * Sb * Sb + Ea * ac * ac;
              z[j + (38 * ca | 0) + (9 * $a | 0) + 6] = 0 < Vb ? 1 / Vb : 0;
              J(s, z[g], -1 * z[h]);
              var bc = z[Na >> 2], lc = z[oa >> 2], Pc = z[f] * lc - z[d] * bc, Xc = z[Xb >> 2], Dc = z[Jb >> 2], mc = Xc * lc - Dc * bc, nc = pb + Fa * Pc * Pc + Ea * mc * mc;
              z[j + (38 * ca | 0) + (9 * $a | 0) + 7] = 0 < nc ? 1 / nc : 0;
              var Qc = fa + 152 * ca + 36 * $a + 32;
              z[Qc >> 2] = 0;
              oh(y, Ma, Xc, Dc);
              J(B, eb + z[ga >> 2], Za + z[ia >> 2]);
              J(x, z[za >> 2] - Da, z[Ra >> 2] - tb);
              oh(w, Xa, z[f], z[d]);
              J(u, z[va >> 2] - z[Aa >> 2], z[ta >> 2] - z[Oa >> 2]);
              var Yc = z[h] * z[qa >> 2] + z[g] * z[ea >> 2];
              -1 > Yc && (z[Qc >> 2] = Yc * -z[xb >> 2]);
              var Zc = $a + 1;
              if (Zc == zb) {
                break;
              } else {
                $a = Zc;
              }
            }
            if (2 == m[i]) {
              var oc = z[h], hc = z[g], pc = z[j + (38 * ca | 0)] * hc - z[j + (38 * ca | 0) + 1] * oc, gd = z[j + (38 * ca | 0) + 2] * hc - z[j + (38 * ca | 0) + 3] * oc, hd = z[j + (38 * ca | 0) + 9] * hc - z[j + (38 * ca | 0) + 10] * oc, cc = z[j + (38 * ca | 0) + 11] * hc - z[j + (38 * ca | 0) + 12] * oc, qc = Fa * pc, ic = Ea * gd, Ec = pb + qc * pc + ic * gd, Yb = pb + Fa * hd * hd + Ea * cc * cc, vc = pb + qc * hd + ic * cc;
              if (Ec * Ec < 1e3 * (Ec * Yb - vc * vc)) {
                var wc = fa + 152 * ca + 96;
                Xe(wc, Ec, vc);
                Xe(fa + 152 * ca + 104, vc, Yb);
                var id = fa + 152 * ca + 80, jc = D, $c = z[wc >> 2], xc = z[wc + 8 >> 2], pd = z[wc + 4 >> 2], yc = z[wc + 12 >> 2], jd = $c * yc - xc * pd, kd = 0 != jd ? 1 / jd : jd;
                z[jc >> 2] = kd * yc;
                var ad = -kd;
                z[jc + 8 >> 2] = xc * ad;
                z[jc + 4 >> 2] = pd * ad;
                z[jc + 12 >> 2] = kd * $c;
                e = id >> 2;
                m[e] = m[k];
                m[e + 1] = m[k + 1];
                m[e + 2] = m[k + 2];
                m[e + 3] = m[k + 3];
              } else {
                m[i] = 1;
              }
            }
          }
        } while (0);
        var zc = ca + 1;
        if (zc < m[G >> 2]) {
          ca = zc;
        } else {
          break a;
        }
      }
    }
  } while (0);
  a = l;
}

un.X = 1;

function vn(c) {
  var e, d, f, g, h = a;
  a += 64;
  var i = h + 8, j = h + 16, k = h + 24, l = h + 32, o = h + 40, n = h + 48, p = h + 56, t = c + 48, q = 0 < m[t >> 2];
  a : do {
    if (q) {
      var r = c + 40;
      g = c + 28 >> 2;
      f = h >> 2;
      d = i >> 2;
      for (var s = j, u = j + 4, x = l, B = l + 4, y = o, w = o + 4, D = k, G = k + 4, M = 0; ; ) {
        var I = m[r >> 2];
        e = I >> 2;
        var S = m[e + (38 * M | 0) + 28], N = m[e + (38 * M | 0) + 29], Q = z[e + (38 * M | 0) + 30], Y = z[e + (38 * M | 0) + 32], T = z[e + (38 * M | 0) + 31], $ = z[e + (38 * M | 0) + 33], ba = m[e + (38 * M | 0) + 36], P = m[g], R = P + 12 * S, V = R, V = m[V >> 2], R = R + 4, L = m[R >> 2];
        m[f] = V;
        m[f + 1] = L;
        var O = z[(P + 8 >> 2) + (3 * S | 0)], Z = P + 12 * N, R = m[Z >> 2], Z = m[Z + 4 >> 2];
        m[d] = R;
        m[d + 1] = Z;
        var X = z[(P + 8 >> 2) + (3 * N | 0)], I = I + 152 * M + 72, P = m[I + 4 >> 2], I = (E[0] = m[I >> 2], F[0]), P = (E[0] = P, F[0]);
        J(j, P, -1 * I);
        if (0 < ba) {
          V = z[s >> 2];
          R = z[u >> 2];
          Z = O;
          L = X;
          for (O = 0; ; ) {
            Xf(l, z[e + (38 * M | 0) + (9 * O | 0) + 4], I, P);
            Xf(o, z[e + (38 * M | 0) + (9 * O | 0) + 5], V, R);
            J(k, z[x >> 2] + z[y >> 2], z[B >> 2] + z[w >> 2]);
            var X = z[D >> 2], U = z[G >> 2], ka = Z - Y * (z[e + (38 * M | 0) + (9 * O | 0)] * U - z[e + (38 * M | 0) + (9 * O | 0) + 1] * X);
            Xf(n, Q, X, U);
            jh(h, n);
            var Ja = L + $ * (z[e + (38 * M | 0) + (9 * O | 0) + 2] * U - z[e + (38 * M | 0) + (9 * O | 0) + 3] * X);
            Xf(p, T, X, U);
            Ve(i, p);
            O += 1;
            if (O == ba) {
              break;
            } else {
              Z = ka, L = Ja;
            }
          }
          Q = ka;
          e = Ja;
          T = m[f + 1];
          $ = m[f];
          Y = m[d + 1];
          ba = m[d];
        } else {
          Q = O, e = X, T = L, $ = V, Y = Z, ba = R;
        }
        V = m[g] + 12 * S;
        m[V >> 2] = $;
        m[V + 4 >> 2] = T;
        z[(m[g] + 8 >> 2) + (3 * S | 0)] = Q;
        V = S = m[g] + 12 * N;
        m[V >> 2] = ba;
        R = S + 4;
        m[R >> 2] = Y;
        z[(m[g] + 8 >> 2) + (3 * N | 0)] = e;
        M += 1;
        if (M >= m[t >> 2]) {
          break a;
        }
      }
    }
  } while (0);
  a = h;
}

vn.X = 1;

function wn(c) {
  var e, d, f, g, h, i, j, k, l, o, n, p, t, q, r, s, u, x, B, y, w = a;
  a += 496;
  var D = w + 8, G = w + 16, M = w + 24, I = w + 32, S = w + 40, N = w + 48, Q = w + 56, Y = w + 64, T = w + 72, $ = w + 80, ba = w + 88, P = w + 96, R = w + 104, V = w + 112, L = w + 120, O = w + 128, Z = w + 136, X = w + 144, U = w + 152, ka = w + 160, Ja = w + 168, gb = w + 176, Ta = w + 184, ya = w + 192, Na = w + 200, oa = w + 208, ga = w + 216, ia = w + 224, za = w + 232, Ra = w + 240, va = w + 248, ta = w + 256, Aa = w + 264, Oa = w + 272, qa = w + 280, ea = w + 288, ca = w + 296, fa = w + 304, Ka = w + 312, la = w + 320, wa = w + 328, xa = w + 336, Ua = w + 344, ma = w + 352, ja = w + 360, Pa = w + 368, Fa = w + 376, Ea = w + 384, Sa = w + 392, Ga = w + 400, La = w + 408, na = w + 416, Ca = w + 424, ua = w + 432, sa = w + 440, aa = w + 448, Ha = w + 456, hb = w + 464, ib = w + 472, jb = w + 480, ub = w + 488, kb = c + 48, wb = 0 < m[kb >> 2];
  a : do {
    if (wb) {
      var lb = c + 40;
      y = c + 28 >> 2;
      B = w >> 2;
      x = D >> 2;
      var mb = U, Da = Ra, tb = Ra + 4;
      u = ta >> 2;
      s = ta + 4 >> 2;
      var Xa = sa, nb = sa + 4, Ya = Ea, cb = Ea + 4, db = wa, yb = wa + 4, ob = Oa, qb = Oa + 4, eb = U + 4;
      r = D >> 2;
      q = D + 4 >> 2;
      var Za = V, Ma = V + 4, rb = R, fb = R + 4;
      t = w >> 2;
      p = w + 4 >> 2;
      for (var Va = P, zb = P + 4, vb = L, pb = L + 4, xb = ba, $a = ba + 4, Gb = O, Ab = O + 4, sb = Ta, Bb = Ta + 4, Cb = gb, Db = gb + 4, bb = Ja, Eb = Ja + 4, Ob = ya, Fb = ya + 4, Wa = ia, Qb = ia + 4, Sb = ga, Xb = ga + 4, Tb = oa, Jb = oa + 4, ac = za, Vb = za + 4, bc = ka, lc = ka + 4, Pc = Na, Xc = Na + 4, Dc = Aa, mc = Aa + 4, nc = aa, Qc = aa + 4, Yc = Ha, Zc = Ha + 4, oc = ib, hc = ib + 4, pc = ub, gd = ub + 4, hd = Sa, cc = Sa + 4, qc = Ga, ic = Ga + 4, Ec = na, Yb = na + 4, vc = ua, wc = ua + 4, id = xa, jc = xa + 4, $c = Ua, xc = Ua + 4, pd = ja, yc = ja + 4, jd = Fa, kd = Fa + 4, ad = qa, zc = qa + 4, ce = ea, Ld = ea + 4, Ed = fa, Fc = fa + 4, Lb = la, qd = la + 4, de = N, ue = N + 4, Ah = S, Md = S + 4, og = I, pg = I + 4, qg = Q, rg = Q + 4, Ye = M, Nd = M + 4, ee = G, Ze = G + 4, sg = Y, tg = Y + 4, Qa = 0; ; ) {
        var Pb = v[lb >> 2];
        n = Pb >> 2;
        var fe = Pb + 152 * Qa, ge = v[n + (38 * Qa | 0) + 28], ve = v[n + (38 * Qa | 0) + 29], he = z[n + (38 * Qa | 0) + 30], Od = z[n + (38 * Qa | 0) + 32], Pd = z[n + (38 * Qa | 0) + 31], Qd = z[n + (38 * Qa | 0) + 33], tf = Pb + 152 * Qa + 144, $e = v[tf >> 2], Gc = m[y], ug = Gc + 12 * ge, bd = v[ug >> 2], vg = v[ug + 4 >> 2];
        m[B] = bd;
        m[B + 1] = vg;
        var cd = z[(Gc + 8 >> 2) + (3 * ge | 0)], dd = Gc + 12 * ve, wg = v[dd >> 2], uf = v[dd + 4 >> 2];
        m[x] = wg;
        m[x + 1] = uf;
        var vf = z[(Gc + 8 >> 2) + (3 * ve | 0)], Hc = Pb + 152 * Qa + 72, Bh = m[Hc + 4 >> 2], Mb = (E[0] = m[Hc >> 2], F[0]), Ic = (E[0] = Bh, F[0]);
        J(G, Ic, -1 * Mb);
        var we = z[n + (38 * Qa | 0) + 34], xe = 2 > $e - 1, Ch = (E[0] = wg, F[0]), xg = (E[0] = uf, F[0]), yg = (E[0] = bd, F[0]), ld = (E[0] = vg, F[0]);
        xe || K(H.m, 311, H.J, H.ic);
        var Dh = 0 < $e;
        b : do {
          if (Dh) {
            for (var Ac = z[ee >> 2], ye = z[Ze >> 2], Rd = cd, Sd = vf, Rc = 0, wf = Ch, Jc = xg, zg = yg, Kc = ld; ; ) {
              var Ag = Pb + 152 * Qa + 36 * Rc + 8, rc = Pb + 152 * Qa + 36 * Rc + 12;
              oh(N, Sd, z[Ag >> 2], z[rc >> 2]);
              J(S, wf + z[de >> 2], Jc + z[ue >> 2]);
              J(I, z[Ah >> 2] - zg, z[Md >> 2] - Kc);
              var sc = Pb + 152 * Qa + 36 * Rc, xf = Pb + 152 * Qa + 36 * Rc + 4;
              oh(Q, Rd, z[sc >> 2], z[xf >> 2]);
              J(M, z[og >> 2] - z[qg >> 2], z[pg >> 2] - z[rg >> 2]);
              var Td = we * z[n + (38 * Qa | 0) + (9 * Rc | 0) + 4], rd = Pb + 152 * Qa + 36 * Rc + 20, ze = z[rd >> 2], sd = -Td > (ze + z[n + (38 * Qa | 0) + (9 * Rc | 0) + 7] * -(z[Ye >> 2] * Ac + z[Nd >> 2] * ye) < Td ? ze + z[n + (38 * Qa | 0) + (9 * Rc | 0) + 7] * -(z[Ye >> 2] * Ac + z[Nd >> 2] * ye) : Td) ? -Td : ze + z[n + (38 * Qa | 0) + (9 * Rc | 0) + 7] * -(z[Ye >> 2] * Ac + z[Nd >> 2] * ye) < Td ? ze + z[n + (38 * Qa | 0) + (9 * Rc | 0) + 7] * -(z[Ye >> 2] * Ac + z[Nd >> 2] * ye) : Td, Eh = sd - ze;
              z[rd >> 2] = sd;
              Xf(Y, Eh, Ac, ye);
              var Ae = z[sg >> 2], Be = z[tg >> 2];
              Xf(T, he, Ae, Be);
              jh(w, T);
              var Fd = Rd - Od * (z[sc >> 2] * Be - z[xf >> 2] * Ae);
              Xf($, Pd, Ae, Be);
              Ve(D, $);
              var Bg = Sd + Qd * (z[Ag >> 2] * Be - z[rc >> 2] * Ae), Gd = Rc + 1;
              if (Gd == $e) {
                var td = Fd, tc = Bg;
                break b;
              }
              Rd = Fd;
              Sd = Bg;
              Rc = Gd;
              wf = z[r];
              Jc = z[q];
              zg = z[t];
              Kc = z[p];
            }
          } else {
            td = cd, tc = vf;
          }
        } while (0);
        var Ud = 1 == m[tf >> 2];
        b : do {
          if (Ud) {
            var Cg = Pb + 152 * Qa + 8, yf = Pb + 152 * Qa + 12;
            oh(V, tc, z[Cg >> 2], z[yf >> 2]);
            J(R, z[r] + z[Za >> 2], z[q] + z[Ma >> 2]);
            J(P, z[rb >> 2] - z[t], z[fb >> 2] - z[p]);
            var zf = fe, Af = Pb + 152 * Qa + 4;
            oh(L, td, z[zf >> 2], z[Af >> 2]);
            J(ba, z[Va >> 2] - z[vb >> 2], z[zb >> 2] - z[pb >> 2]);
            var Bf = Pb + 152 * Qa + 16, af = z[Bf >> 2], Cf = 0 < af + (z[xb >> 2] * Mb + z[$a >> 2] * Ic - z[n + (38 * Qa | 0) + 8]) * -z[n + (38 * Qa | 0) + 6] ? af + (z[xb >> 2] * Mb + z[$a >> 2] * Ic - z[n + (38 * Qa | 0) + 8]) * -z[n + (38 * Qa | 0) + 6] : 0, Nb = Cf - af;
            z[Bf >> 2] = Cf;
            Xf(O, Nb, Mb, Ic);
            var bf = z[Gb >> 2], Kb = z[Ab >> 2];
            Xf(Z, he, bf, Kb);
            jh(w, Z);
            var Fh = td - Od * (z[zf >> 2] * Kb - z[Af >> 2] * bf);
            Xf(X, Pd, bf, Kb);
            Ve(D, X);
            var Lc = tc + Qd * (z[Cg >> 2] * Kb - z[yf >> 2] * bf), Mc = Fh;
          } else {
            o = Pb + 152 * Qa + 16 >> 2;
            var Gh = z[o];
            l = Pb + 152 * Qa + 52 >> 2;
            J(U, Gh, z[l]);
            var Vd = z[mb >> 2], Wd = z[eb >> 2];
            0 > Vd | 0 > Wd && K(H.m, 406, H.J, H.pc);
            k = Pb + 152 * Qa + 8 >> 2;
            var Sc = z[k];
            j = Pb + 152 * Qa + 12 >> 2;
            oh(Ta, tc, Sc, z[j]);
            var Dg = z[r], Nc = z[q];
            J(gb, Dg + z[sb >> 2], Nc + z[Bb >> 2]);
            var Eg = z[t], ud = z[p];
            J(Ja, z[Cb >> 2] - Eg, z[Db >> 2] - ud);
            i = fe >> 2;
            var zd = z[i];
            h = Pb + 152 * Qa + 4 >> 2;
            oh(ya, td, zd, z[h]);
            J(ka, z[bb >> 2] - z[Ob >> 2], z[Eb >> 2] - z[Fb >> 2]);
            g = Pb + 152 * Qa + 44 >> 2;
            var Hh = z[g];
            f = Pb + 152 * Qa + 48 >> 2;
            oh(ia, tc, Hh, z[f]);
            J(ga, Dg + z[Wa >> 2], Nc + z[Qb >> 2]);
            J(oa, z[Sb >> 2] - Eg, z[Xb >> 2] - ud);
            d = Pb + 152 * Qa + 36 >> 2;
            var Fg = z[d];
            e = Pb + 152 * Qa + 40 >> 2;
            oh(za, td, Fg, z[e]);
            J(Na, z[Tb >> 2] - z[ac >> 2], z[Jb >> 2] - z[Vb >> 2]);
            var Gg = z[Pc >> 2] * Mb + z[Xc >> 2] * Ic;
            z[Da >> 2] = z[bc >> 2] * Mb + z[lc >> 2] * Ic - z[n + (38 * Qa | 0) + 8];
            z[tb >> 2] = Gg - z[n + (38 * Qa | 0) + 17];
            On(va, Pb + 152 * Qa + 96, Vd, Wd);
            jh(Ra, va);
            var Hd = z[Da >> 2], cf = z[tb >> 2];
            On(Aa, Pb + 152 * Qa + 80, Hd, cf);
            Xg(ta, z[Dc >> 2], z[mc >> 2]);
            var Xd = z[u], Ih = 0 > Xd;
            do {
              if (!Ih) {
                var ie = z[s];
                if (0 <= ie) {
                  J(Oa, Xd - Vd, ie - Wd);
                  Xf(qa, z[ob >> 2], Mb, Ic);
                  Xf(ea, z[qb >> 2], Mb, Ic);
                  var Ce = z[ad >> 2], df = z[zc >> 2], ef = z[ce >> 2], De = z[Ld >> 2];
                  J(fa, Ce + ef, df + De);
                  Xf(ca, he, z[Ed >> 2], z[Fc >> 2]);
                  jh(w, ca);
                  var Hg = td - Od * (z[i] * df - z[h] * Ce + (z[d] * De - z[e] * ef));
                  J(la, Ce + ef, df + De);
                  Xf(Ka, Pd, z[Lb >> 2], z[qd >> 2]);
                  Ve(D, Ka);
                  var Jh = tc + Qd * (z[k] * df - z[j] * Ce + (z[g] * De - z[f] * ef));
                  z[o] = Xd;
                  z[l] = ie;
                  Lc = Jh;
                  Mc = Hg;
                  break b;
                }
              }
            } while (0);
            var Ee = Hd * -z[n + (38 * Qa | 0) + 6];
            z[u] = Ee;
            z[s] = 0;
            var Ig = 0 > Ee;
            do {
              if (!Ig && 0 <= z[n + (38 * Qa | 0) + 25] * Ee + cf) {
                J(wa, Ee - Vd, 0 - Wd);
                Xf(xa, z[db >> 2], Mb, Ic);
                Xf(Ua, z[yb >> 2], Mb, Ic);
                var je = z[id >> 2], ff = z[jc >> 2], ke = z[$c >> 2], gf = z[xc >> 2];
                J(ja, je + ke, ff + gf);
                Xf(ma, he, z[pd >> 2], z[yc >> 2]);
                jh(w, ma);
                var Ad = td - Od * (z[i] * ff - z[h] * je + (z[d] * gf - z[e] * ke));
                J(Fa, je + ke, ff + gf);
                Xf(Pa, Pd, z[jd >> 2], z[kd >> 2]);
                Ve(D, Pa);
                var Bd = tc + Qd * (z[k] * ff - z[j] * je + (z[g] * gf - z[f] * ke));
                z[o] = Ee;
                z[l] = 0;
                Lc = Bd;
                Mc = Ad;
                break b;
              }
            } while (0);
            z[u] = 0;
            var Fe = cf * -z[n + (38 * Qa | 0) + 15];
            z[s] = Fe;
            var Jg = 0 > Fe;
            do {
              if (!Jg && 0 <= z[n + (38 * Qa | 0) + 26] * Fe + Hd) {
                J(Ea, 0 - Vd, Fe - Wd);
                Xf(Sa, z[Ya >> 2], Mb, Ic);
                Xf(Ga, z[cb >> 2], Mb, Ic);
                var Ge = z[hd >> 2], He = z[cc >> 2], Ie = z[qc >> 2], Je = z[ic >> 2];
                J(na, Ge + Ie, He + Je);
                Xf(La, he, z[Ec >> 2], z[Yb >> 2]);
                jh(w, La);
                var Kg = td - Od * (z[i] * He - z[h] * Ge + (z[d] * Je - z[e] * Ie));
                J(ua, Ge + Ie, He + Je);
                Xf(Ca, Pd, z[vc >> 2], z[wc >> 2]);
                Ve(D, Ca);
                var Kh = tc + Qd * (z[k] * He - z[j] * Ge + (z[g] * Je - z[f] * Ie));
                z[o] = 0;
                z[l] = Fe;
                Lc = Kh;
                Mc = Kg;
                break b;
              }
            } while (0);
            z[u] = 0;
            z[s] = 0;
            if (0 > Hd | 0 > cf) {
              Lc = tc, Mc = td;
            } else {
              J(sa, 0 - Vd, 0 - Wd);
              Xf(aa, z[Xa >> 2], Mb, Ic);
              Xf(Ha, z[nb >> 2], Mb, Ic);
              var hf = z[nc >> 2], jf = z[Qc >> 2], Ke = z[Yc >> 2], Le = z[Zc >> 2];
              J(ib, hf + Ke, jf + Le);
              Xf(hb, he, z[oc >> 2], z[hc >> 2]);
              jh(w, hb);
              var Lh = td - Od * (z[i] * jf - z[h] * hf + (z[d] * Le - z[e] * Ke));
              J(ub, hf + Ke, jf + Le);
              Xf(jb, Pd, z[pc >> 2], z[gd >> 2]);
              Ve(D, jb);
              var Mh = tc + Qd * (z[k] * jf - z[j] * hf + (z[g] * Le - z[f] * Ke));
              z[o] = 0;
              z[l] = 0;
              Lc = Mh;
              Mc = Lh;
            }
          }
        } while (0);
        var Lg = m[y] + 12 * ge, Mg = m[B + 1];
        m[Lg >> 2] = m[B];
        m[Lg + 4 >> 2] = Mg;
        z[(m[y] + 8 >> 2) + (3 * ge | 0)] = Mc;
        var Df = m[y] + 12 * ve, Yd = m[x + 1];
        m[Df >> 2] = m[x];
        m[Df + 4 >> 2] = Yd;
        z[(m[y] + 8 >> 2) + (3 * ve | 0)] = Lc;
        var Ng = Qa + 1;
        if (Ng < m[kb >> 2]) {
          Qa = Ng;
        } else {
          break a;
        }
      }
    }
  } while (0);
  a = w;
}

wn.X = 1;

function On(c, e, d, f) {
  J(c, z[e >> 2] * d + z[e + 8 >> 2] * f, z[e + 4 >> 2] * d + z[e + 12 >> 2] * f);
}

function xn(c) {
  var e, d, f, g, h = a;
  a += 124;
  var i = h + 8, j = h + 16, k = h + 32, l = h + 48, o = h + 56, n = h + 64, p = h + 84, t = h + 92, q = h + 100, r = h + 108, s = h + 116, u = c + 48, x = 0 < m[u >> 2];
  a : do {
    if (x) {
      var B = c + 36;
      g = c + 24 >> 2;
      f = h >> 2;
      d = i >> 2;
      for (var y = j + 8, w = k + 8, D = n, G = n + 8, M = n + 16, I = y, S = j + 12, N = j, Q = h, Y = h + 4, T = l, $ = l + 4, ba = w, P = k + 12, R = k, V = i, L = i + 4, O = o, Z = o + 4, X = p, U = p + 4, ka = t, Ja = t + 4, gb = q, Ta = q + 4, ya = 0, Na = 0; ; ) {
        var oa = m[B >> 2];
        e = oa >> 2;
        var ga = oa + 88 * ya, ia = m[e + (22 * ya | 0) + 8], za = m[e + (22 * ya | 0) + 9], Ra = oa + 88 * ya + 48, va = Ra, ta = Ra + 4, Aa = m[ta >> 2], Oa = (E[0] = m[va >> 2], F[0]), qa = (E[0] = Aa, F[0]), ea = z[e + (22 * ya | 0) + 10], ca = z[e + (22 * ya | 0) + 16], fa = oa + 88 * ya + 56, Ka = m[fa + 4 >> 2], la = (E[0] = m[fa >> 2], F[0]), wa = (E[0] = Ka, F[0]), xa = z[e + (22 * ya | 0) + 11], Ua = z[e + (22 * ya | 0) + 17], ma = m[e + (22 * ya | 0) + 21], ja = m[g], Pa = ja + 12 * ia, Fa = m[Pa >> 2], Ea = m[Pa + 4 >> 2];
        m[f] = Fa;
        m[f + 1] = Ea;
        var Sa = z[(ja + 8 >> 2) + (3 * ia | 0)], Ga = ja + 12 * za, La = m[Ga >> 2], na = m[Ga + 4 >> 2];
        m[d] = La;
        m[d + 1] = na;
        var Ca = z[(ja + 8 >> 2) + (3 * za | 0)];
        if (0 < ma) {
          for (var ua = La, sa = Ea, aa = Fa, Ha = (E[0] = na, F[0]), hb = (E[0] = ua, F[0]), ib = (E[0] = sa, F[0]), jb = (E[0] = aa, F[0]), ub = ea + xa, kb = Sa, wb = Ca, lb = Na, mb = 0, Da = jb, tb = ib, Xa = hb, nb = Ha; ; ) {
            Ei(y, kb);
            Ei(w, wb);
            Yg(l, z[I >> 2], z[S >> 2], Oa, qa);
            J(N, Da - z[T >> 2], tb - z[$ >> 2]);
            Yg(o, z[ba >> 2], z[P >> 2], la, wa);
            J(R, Xa - z[O >> 2], nb - z[Z >> 2]);
            Pn(n, ga, j, k, mb);
            var Ya = m[D + 4 >> 2], cb = (E[0] = m[D >> 2], F[0]), db = (E[0] = Ya, F[0]), yb = m[G + 4 >> 2], ob = (E[0] = m[G >> 2], F[0]), qb = (E[0] = yb, F[0]), eb = z[M >> 2];
            J(p, ob - Da, qb - tb);
            J(t, ob - Xa, qb - nb);
            var Za = lb < eb ? lb : eb, Ma = z[X >> 2], rb = z[U >> 2], fb = Ma * db - rb * cb, Va = z[ka >> 2], zb = z[Ja >> 2], vb = Va * db - zb * cb, pb = ub + ca * fb * fb + Ua * vb * vb;
            Xf(q, 0 < pb ? -(-.20000000298023224 > (0 > .20000000298023224 * (eb + .004999999888241291) ? .20000000298023224 * (eb + .004999999888241291) : 0) ? -.20000000298023224 : 0 > .20000000298023224 * (eb + .004999999888241291) ? .20000000298023224 * (eb + .004999999888241291) : 0) / pb : 0, cb, db);
            var xb = z[gb >> 2], $a = z[Ta >> 2];
            Xf(r, ea, xb, $a);
            jh(h, r);
            var Gb = kb - ca * (Ma * $a - rb * xb);
            Xf(s, xa, xb, $a);
            Ve(i, s);
            var Ab = wb + Ua * (Va * $a - zb * xb), sb = mb + 1;
            if (sb == ma) {
              break;
            }
            kb = Gb;
            wb = Ab;
            lb = Za;
            mb = sb;
            Da = z[Q >> 2];
            tb = z[Y >> 2];
            Xa = z[V >> 2];
            nb = z[L >> 2];
          }
          var Bb = Gb, Cb = Ab, Db = Za, bb = m[g], Eb = m[f + 1], Ob = m[f], Fb = m[d + 1], Wa = m[d];
        } else {
          Bb = Sa, Cb = Ca, Db = Na, bb = ja, Eb = Ea, Ob = Fa, Fb = na, Wa = La;
        }
        var Qb = bb + 12 * ia, va = Qb;
        m[va >> 2] = Ob;
        ta = Qb + 4;
        m[ta >> 2] = Eb;
        z[(m[g] + 8 >> 2) + (3 * ia | 0)] = Bb;
        var Sb = m[g] + 12 * za;
        m[Sb >> 2] = Wa;
        m[Sb + 4 >> 2] = Fb;
        z[(m[g] + 8 >> 2) + (3 * za | 0)] = Cb;
        var Xb = ya + 1;
        if (Xb < m[u >> 2]) {
          ya = Xb, Na = Db;
        } else {
          var Tb = Db;
          break a;
        }
      }
    } else {
      Tb = 0;
    }
  } while (0);
  var Jb = -.014999999664723873 <= Tb;
  a = h;
  return Jb;
}

xn.X = 1;

function Pn(c, e, d, f, g) {
  var h = e >> 2, i = c >> 2, e = a;
  a += 120;
  var j = e + 8, k = e + 16, l = e + 24, o = e + 32, n = e + 40, p = e + 48, t = e + 56, q = e + 64, r = e + 72, s = e + 80, u = e + 88, x = e + 96, B = e + 104, y = e + 112;
  0 < m[h + 21] || K(H.m, 617, H.jb, H.yc);
  var w = m[h + 18];
  0 == w ? (Uf(e, d, z[h + 6], z[h + 7]), Uf(j, f, z[h], z[h + 1]), y = z[j >> 2], x = z[j + 4 >> 2], d = z[e >> 2], f = z[e + 4 >> 2], J(k, y - d, x - f), g = m[k + 4 >> 2], m[c >> 2] = m[k >> 2], m[c + 4 >> 2] = g, Zf(c), c += 8, J(o, d + y, f + x), Xf(l, .5, z[o >> 2], z[o + 4 >> 2]), o = m[l + 4 >> 2], m[c >> 2] = m[l >> 2], m[c + 4 >> 2] = o, J(n, y - d, x - f), z[i + 4] = z[n >> 2] * z[i] + z[n + 4 >> 2] * z[i + 1] - z[h + 19] - z[h + 20]) : 1 == w ? (Yg(p, z[d + 8 >> 2], z[d + 12 >> 2], z[h + 4], z[h + 5]), y = m[p + 4 >> 2], m[c >> 2] = m[p >> 2], m[c + 4 >> 2] = y, Uf(t, d, z[h + 6], z[h + 7]), Uf(q, f, z[(g << 3 >> 2) + h], z[((g << 3) + 4 >> 2) + h]), J(r, z[q >> 2] - z[t >> 2], z[q + 4 >> 2] - z[t + 4 >> 2]), z[i + 4] = z[r >> 2] * z[i] + z[r + 4 >> 2] * z[i + 1] - z[h + 19] - z[h + 20], c += 8, h = m[q + 4 >> 2], m[c >> 2] = m[q >> 2], m[c + 4 >> 2] = h) : 2 == w && (Yg(s, z[f + 8 >> 2], z[f + 12 >> 2], z[h + 4], z[h + 5]), l = m[s >> 2], n = m[s + 4 >> 2], m[c >> 2] = l, m[c + 4 >> 2] = n, Uf(u, f, z[h + 6], z[h + 7]), Uf(x, d, z[(g << 3 >> 2) + h], z[((g << 3) + 4 >> 2) + h]), J(B, z[x >> 2] - z[u >> 2], z[x + 4 >> 2] - z[u + 4 >> 2]), l = z[i], n = z[i + 1], z[i + 4] = z[B >> 2] * l + z[B + 4 >> 2] * n - z[h + 19] - z[h + 20], h = c + 8, i = m[x >> 2], o = m[x + 4 >> 2], m[h >> 2] = i, m[h + 4 >> 2] = o, Xg(y, l, n), h = m[y + 4 >> 2], m[c >> 2] = m[y >> 2], m[c + 4 >> 2] = h);
  a = e;
}

Pn.X = 1;

function Dn(c, e, d) {
  var f, g, h, i, j = a;
  a += 124;
  var k = j + 8, l = j + 16, o = j + 32, n = j + 48, p = j + 56, t = j + 64, q = j + 84, r = j + 92, s = j + 100, u = j + 108, x = j + 116, B = c + 48, y = 0 < m[B >> 2];
  a : do {
    if (y) {
      var w = c + 36;
      i = c + 24 >> 2;
      h = j >> 2;
      g = k >> 2;
      for (var D = l + 8, G = o + 8, M = t, I = t + 8, S = t + 16, N = D, Q = l + 12, Y = l, T = j, $ = j + 4, ba = n, P = n + 4, R = G, V = o + 12, L = o, O = k, Z = k + 4, X = p, U = p + 4, ka = q, Ja = q + 4, gb = r, Ta = r + 4, ya = s, Na = s + 4, oa = 0, ga = 0; ; ) {
        var ia = m[w >> 2];
        f = ia >> 2;
        var za = ia + 88 * oa, Ra = m[f + (22 * oa | 0) + 8], va = m[f + (22 * oa | 0) + 9], ta = ia + 88 * oa + 48, Aa = ta, Oa = ta + 4, qa = m[Oa >> 2], ea = (E[0] = m[Aa >> 2], F[0]), ca = (E[0] = qa, F[0]), fa = ia + 88 * oa + 56, Ka = m[fa + 4 >> 2], la = (E[0] = m[fa >> 2], F[0]), wa = (E[0] = Ka, F[0]), xa = m[f + (22 * oa | 0) + 21];
        if (Ra == e | Ra == d) {
          var Ua = z[f + (22 * oa | 0) + 16], ma = z[f + (22 * oa | 0) + 10];
        } else {
          ma = Ua = 0;
        }
        var ja = z[f + (22 * oa | 0) + 17], Pa = z[f + (22 * oa | 0) + 11], Fa = m[i], Ea = Fa + 12 * Ra, Sa = m[Ea >> 2], Ga = m[Ea + 4 >> 2];
        m[h] = Sa;
        m[h + 1] = Ga;
        var La = z[(Fa + 8 >> 2) + (3 * Ra | 0)], na = Fa + 12 * va, Ca = m[na >> 2], ua = m[na + 4 >> 2];
        m[g] = Ca;
        m[g + 1] = ua;
        var sa = z[(Fa + 8 >> 2) + (3 * va | 0)];
        if (0 < xa) {
          for (var aa = Ca, Ha = Ga, hb = Sa, ib = (E[0] = ua, F[0]), jb = (E[0] = aa, F[0]), ub = (E[0] = Ha, F[0]), kb = (E[0] = hb, F[0]), wb = ma + Pa, lb = ga, mb = La, Da = sa, tb = 0, Xa = kb, nb = ub, Ya = jb, cb = ib; ; ) {
            Ei(D, mb);
            Ei(G, Da);
            Yg(n, z[N >> 2], z[Q >> 2], ea, ca);
            J(Y, Xa - z[ba >> 2], nb - z[P >> 2]);
            Yg(p, z[R >> 2], z[V >> 2], la, wa);
            J(L, Ya - z[X >> 2], cb - z[U >> 2]);
            Pn(t, za, l, o, tb);
            var db = m[M + 4 >> 2], yb = (E[0] = m[M >> 2], F[0]), ob = (E[0] = db, F[0]), qb = m[I + 4 >> 2], eb = (E[0] = m[I >> 2], F[0]), Za = (E[0] = qb, F[0]), Ma = z[S >> 2];
            J(q, eb - Xa, Za - nb);
            J(r, eb - Ya, Za - cb);
            var rb = lb < Ma ? lb : Ma, fb = z[ka >> 2], Va = z[Ja >> 2], zb = fb * ob - Va * yb, vb = z[gb >> 2], pb = z[Ta >> 2], xb = vb * ob - pb * yb, $a = wb + Ua * zb * zb + ja * xb * xb;
            Xf(s, 0 < $a ? -(-.20000000298023224 > (0 > .75 * (Ma + .004999999888241291) ? .75 * (Ma + .004999999888241291) : 0) ? -.20000000298023224 : 0 > .75 * (Ma + .004999999888241291) ? .75 * (Ma + .004999999888241291) : 0) / $a : 0, yb, ob);
            var Gb = z[ya >> 2], Ab = z[Na >> 2];
            Xf(u, ma, Gb, Ab);
            jh(j, u);
            var sb = mb - Ua * (fb * Ab - Va * Gb);
            Xf(x, Pa, Gb, Ab);
            Ve(k, x);
            var Bb = Da + ja * (vb * Ab - pb * Gb), Cb = tb + 1;
            if (Cb == xa) {
              break;
            }
            lb = rb;
            mb = sb;
            Da = Bb;
            tb = Cb;
            Xa = z[T >> 2];
            nb = z[$ >> 2];
            Ya = z[O >> 2];
            cb = z[Z >> 2];
          }
          var Db = rb, bb = sb, Eb = Bb, Ob = m[i], Fb = m[h + 1], Wa = m[h], Qb = m[g + 1], Sb = m[g];
        } else {
          Db = ga, bb = La, Eb = sa, Ob = Fa, Fb = Ga, Wa = Sa, Qb = ua, Sb = Ca;
        }
        var Xb = Ob + 12 * Ra, Aa = Xb;
        m[Aa >> 2] = Wa;
        Oa = Xb + 4;
        m[Oa >> 2] = Fb;
        z[(m[i] + 8 >> 2) + (3 * Ra | 0)] = bb;
        var Tb = m[i] + 12 * va;
        m[Tb >> 2] = Sb;
        m[Tb + 4 >> 2] = Qb;
        z[(m[i] + 8 >> 2) + (3 * va | 0)] = Eb;
        var Jb = oa + 1;
        if (Jb < m[B >> 2]) {
          oa = Jb, ga = Db;
        } else {
          var ac = Db;
          break a;
        }
      }
    } else {
      ac = 0;
    }
  } while (0);
  var Vb = -.007499999832361937 <= ac;
  a = j;
  return Vb;
}

Dn.X = 1;

function Dd(c) {
  if (245 > c) {
    var e = 11 > c ? 16 : c + 11 & -8, d = e >>> 3, c = v[W >> 2], f = c >>> d;
    if (0 == (f & 3)) {
      if (e > v[W + 8 >> 2]) {
        if (0 == f) {
          if (0 == m[W + 4 >> 2]) {
            k = e, c = 29;
          } else {
            if (c = Qn(e), 0 == c) {
              k = e, c = 29;
            } else {
              var g = c, c = 37;
            }
          }
        } else {
          var g = 2 << d, g = f << d & (g | -g), d = (g & -g) - 1, g = d >>> 12 & 16, f = d >>> g, d = f >>> 5 & 8, h = f >>> d, f = h >>> 2 & 4, i = h >>> f, h = i >>> 1 & 2, i = i >>> h, j = i >>> 1 & 1, d = (d | g | f | h | j) + (i >>> j), g = d << 1, h = (g << 2) + W + 40, i = (g + 2 << 2) + W + 40, f = v[i >> 2], g = f + 8, j = v[g >> 2];
          h == j ? m[W >> 2] = c & (1 << d ^ -1) : (j < v[W + 16 >> 2] && (Rn(), da("Reached an unreachable!")), m[i >> 2] = j, m[j + 12 >> 2] = h);
          h = d << 3;
          c = h - e;
          m[f + 4 >> 2] = e | 3;
          d = f + e;
          m[f + (e | 4) >> 2] = c | 1;
          m[f + h >> 2] = c;
          j = v[W + 8 >> 2];
          0 != j && (e = m[W + 20 >> 2], h = j >>> 2 & 1073741822, f = (h << 2) + W + 40, i = v[W >> 2], j = 1 << (j >>> 3), 0 == (i & j) ? (m[W >> 2] = i | j, i = f, h = (h + 2 << 2) + W + 40) : (h = (h + 2 << 2) + W + 40, i = v[h >> 2], i < v[W + 16 >> 2] && (Rn(), da("Reached an unreachable!"))), m[h >> 2] = e, m[i + 12 >> 2] = e, m[e + 8 >> 2] = i, m[e + 12 >> 2] = f);
          m[W + 8 >> 2] = c;
          m[W + 20 >> 2] = d;
          c = 37;
        }
      } else {
        var k = e, c = 29;
      }
    } else {
      g = (f & 1 ^ 1) + d, e = g << 1, d = (e << 2) + W + 40, h = (e + 2 << 2) + W + 40, f = v[h >> 2], e = f + 8, i = v[e >> 2], d == i ? m[W >> 2] = c & (1 << g ^ -1) : (i < v[W + 16 >> 2] && (Rn(), da("Reached an unreachable!")), m[h >> 2] = i, m[i + 12 >> 2] = d), c = g << 3, m[f + 4 >> 2] = c | 3, c = f + (c | 4), m[c >> 2] |= 1, g = e, c = 37;
    }
  } else {
    4294967231 < c ? (k = -1, c = 29) : (c = c + 11 & -8, 0 == m[W + 4 >> 2] ? (k = c, c = 29) : (e = Sn(c), 0 == e ? (k = c, c = 29) : (g = e, c = 37)));
  }
  29 == c && (e = v[W + 8 >> 2], k > e ? (c = v[W + 12 >> 2], k < c ? (c -= k, m[W + 12 >> 2] = c, e = v[W + 24 >> 2], m[W + 24 >> 2] = e + k, m[e + (k + 4) >> 2] = c | 1, m[e + 4 >> 2] = k | 3, g = e + 8) : g = Tn(k)) : (g = e - k, c = v[W + 20 >> 2], 15 < g ? (m[W + 20 >> 2] = c + k, m[W + 8 >> 2] = g, m[c + (k + 4) >> 2] = g | 1, m[c + e >> 2] = g, m[c + 4 >> 2] = k | 3) : (m[W + 8 >> 2] = 0, m[W + 20 >> 2] = 0, m[c + 4 >> 2] = e | 3, k = c + (e + 4), m[k >> 2] |= 1), g = c + 8));
  return g;
}

Dd.X = 1;

function Qn(c) {
  var e, d, f = m[W + 4 >> 2], g = (f & -f) - 1, f = g >>> 12 & 16, h = g >>> f, g = h >>> 5 & 8;
  d = h >>> g;
  var h = d >>> 2 & 4, i = d >>> h;
  d = i >>> 1 & 2;
  var i = i >>> d, j = i >>> 1 & 1, f = g = v[W + ((g | f | h | d | j) + (i >>> j) << 2) + 304 >> 2];
  d = f >> 2;
  g = (m[g + 4 >> 2] & -8) - c;
  a : for (;;) {
    for (h = f; ; ) {
      i = m[h + 16 >> 2];
      if (0 == i) {
        if (h = m[h + 20 >> 2], 0 == h) {
          break a;
        }
      } else {
        h = i;
      }
      i = (m[h + 4 >> 2] & -8) - c;
      if (i < g) {
        f = h;
        d = f >> 2;
        g = i;
        continue a;
      }
    }
  }
  var i = f, k = v[W + 16 >> 2], j = i < k;
  do {
    if (!j) {
      var l = i + c, h = l;
      if (i < l) {
        var j = v[d + 6], l = v[d + 3], o = l == f;
        do {
          if (o) {
            e = f + 20;
            var n = m[e >> 2];
            if (0 == n && (e = f + 16, n = m[e >> 2], 0 == n)) {
              n = 0;
              e = n >> 2;
              break;
            }
            for (;;) {
              var p = n + 20, t = m[p >> 2];
              if (0 != t) {
                e = p, n = t;
              } else {
                if (p = n + 16, t = v[p >> 2], 0 == t) {
                  break;
                } else {
                  e = p, n = t;
                }
              }
            }
            e < k && (Rn(), da("Reached an unreachable!"));
            m[e >> 2] = 0;
          } else {
            e = v[d + 2], e < k && (Rn(), da("Reached an unreachable!")), m[e + 12 >> 2] = l, m[l + 8 >> 2] = e, n = l;
          }
          e = n >> 2;
        } while (0);
        k = 0 == j;
        a : do {
          if (!k) {
            l = f + 28;
            o = (m[l >> 2] << 2) + W + 304;
            p = f == m[o >> 2];
            do {
              if (p) {
                if (m[o >> 2] = n, 0 == n) {
                  m[W + 4 >> 2] &= 1 << m[l >> 2] ^ -1;
                  break a;
                }
              } else {
                if (j < v[W + 16 >> 2] && (Rn(), da("Reached an unreachable!")), t = j + 16, m[t >> 2] == f ? m[t >> 2] = n : m[j + 20 >> 2] = n, 0 == n) {
                  break a;
                }
              }
            } while (0);
            n < v[W + 16 >> 2] && (Rn(), da("Reached an unreachable!"));
            m[e + 6] = j;
            l = v[d + 4];
            0 != l && (l < v[W + 16 >> 2] && (Rn(), da("Reached an unreachable!")), m[e + 4] = l, m[l + 24 >> 2] = n);
            l = v[d + 5];
            0 != l && (l < v[W + 16 >> 2] && (Rn(), da("Reached an unreachable!")), m[e + 5] = l, m[l + 24 >> 2] = n);
          }
        } while (0);
        16 > g ? (c = g + c, m[d + 1] = c | 3, c = i + (c + 4), m[c >> 2] |= 1) : (m[d + 1] = c | 3, m[i + (c + 4) >> 2] = g | 1, m[i + g + c >> 2] = g, k = v[W + 8 >> 2], 0 != k && (c = v[W + 20 >> 2], i = k >>> 2 & 1073741822, d = (i << 2) + W + 40, j = v[W >> 2], k = 1 << (k >>> 3), 0 == (j & k) ? (m[W >> 2] = j | k, j = d, i = (i + 2 << 2) + W + 40) : (i = (i + 2 << 2) + W + 40, j = v[i >> 2], j < v[W + 16 >> 2] && (Rn(), da("Reached an unreachable!"))), m[i >> 2] = c, m[j + 12 >> 2] = c, m[c + 8 >> 2] = j, m[c + 12 >> 2] = d), m[W + 8 >> 2] = g, m[W + 20 >> 2] = h);
        return f + 8;
      }
    }
  } while (0);
  Rn();
  da("Reached an unreachable!");
}

Qn.X = 1;

function Tn(c) {
  var e, d;
  0 == m[Un >> 2] && Vn();
  var f = 0 == (m[W + 440 >> 2] & 4);
  do {
    if (f) {
      d = m[W + 24 >> 2];
      if (0 == d) {
        d = 5;
      } else {
        if (d = Wn(d), 0 == d) {
          d = 5;
        } else {
          var g = m[Un + 8 >> 2], g = c + 47 - m[W + 12 >> 2] + g & -g;
          if (2147483647 > g) {
            var h = Xn(g);
            if (h == m[d >> 2] + m[d + 4 >> 2]) {
              var i = h, j = g;
              e = h;
              d = 12;
            } else {
              var k = h, l = g;
              d = 14;
            }
          } else {
            d = 13;
          }
        }
      }
      if (5 == d) {
        if (d = Xn(0), -1 == d) {
          d = 13;
        } else {
          var g = m[Un + 8 >> 2], g = c + (g + 47) & -g, h = d, o = m[Un + 4 >> 2], n = o - 1, g = 0 == (n & h) ? g : g - h + (n + h & -o);
          2147483647 > g ? (h = Xn(g), h == d ? (i = d, j = g, e = h, d = 12) : (k = h, l = g, d = 14)) : d = 13;
        }
      }
      if (13 == d) {
        m[W + 440 >> 2] |= 4, d = 22;
      } else {
        if (12 == d) {
          if (-1 == i) {
            k = e, l = j;
          } else {
            var p = j, t = i;
            d = 25;
            break;
          }
        }
        d = -l;
        if (-1 != k & 2147483647 > l) {
          if (l < c + 48) {
            g = m[Un + 8 >> 2], g = c + 47 - l + g & -g, 2147483647 > g ? -1 == Xn(g) ? (Xn(d), d = 21) : (q = g + l, d = 20) : (q = l, d = 20);
          } else {
            var q = l;
            d = 20;
          }
        } else {
          q = l, d = 20;
        }
        20 == d && -1 != k ? (p = q, t = k, d = 25) : (m[W + 440 >> 2] |= 4, d = 22);
      }
    } else {
      d = 22;
    }
  } while (0);
  22 == d && (f = m[Un + 8 >> 2], f = c + (f + 47) & -f, 2147483647 > f ? (f = Xn(f), i = Xn(0), -1 != i & -1 != f & f < i ? (i -= f, i <= c + 40 | -1 == f ? d = 48 : (p = i, t = f, d = 25)) : d = 48) : d = 48);
  a : do {
    if (25 == d) {
      f = m[W + 432 >> 2] + p;
      m[W + 432 >> 2] = f;
      f > v[W + 436 >> 2] && (m[W + 436 >> 2] = f);
      f = v[W + 24 >> 2];
      i = 0 == f;
      b : do {
        if (i) {
          j = v[W + 16 >> 2];
          0 == j | t < j && (m[W + 16 >> 2] = t);
          m[W + 444 >> 2] = t;
          m[W + 448 >> 2] = p;
          m[W + 456 >> 2] = 0;
          m[W + 36 >> 2] = m[Un >> 2];
          m[W + 32 >> 2] = -1;
          for (j = 0; !(e = j << 1, k = (e << 2) + W + 40, m[W + (e + 3 << 2) + 40 >> 2] = k, m[W + (e + 2 << 2) + 40 >> 2] = k, j += 1, 32 == j); ) {}
          Yn(t, p - 40);
        } else {
          k = W + 444;
          for (e = k >> 2; 0 != k; ) {
            j = v[e];
            k += 4;
            l = v[k >> 2];
            q = j + l;
            if (t == q) {
              if (0 != (m[e + 3] & 8)) {
                break;
              }
              e = f;
              if (!(e >= j & e < q)) {
                break;
              }
              m[k >> 2] = l + p;
              Yn(m[W + 24 >> 2], m[W + 12 >> 2] + p);
              break b;
            } else {
              k = m[e + 2], e = k >> 2;
            }
          }
          t < v[W + 16 >> 2] && (m[W + 16 >> 2] = t);
          e = t + p;
          for (k = W + 444; 0 != k; ) {
            l = k;
            j = v[l >> 2];
            if (j == e) {
              if (0 != (m[k + 12 >> 2] & 8)) {
                break;
              }
              m[l >> 2] = t;
              var r = k + 4;
              m[r >> 2] += p;
              r = Zn(t, j, c);
              d = 49;
              break a;
            } else {
              k = m[k + 8 >> 2];
            }
          }
          $n(t, p);
        }
      } while (0);
      f = v[W + 12 >> 2];
      f > c ? (r = f - c, m[W + 12 >> 2] = r, i = f = v[W + 24 >> 2], m[W + 24 >> 2] = i + c, m[i + (c + 4) >> 2] = r | 1, m[f + 4 >> 2] = c | 3, r = f + 8, d = 49) : d = 48;
    }
  } while (0);
  48 == d && (m[ao >> 2] = 12, r = 0);
  return r;
}

Tn.X = 1;

function Sn(c) {
  var e, d, f, g, h, i = c >> 2, j = -c, k = c >>> 8;
  if (0 == k) {
    var l = 0;
  } else {
    if (16777215 < c) {
      l = 31;
    } else {
      var o = k + 1048320 >>> 16 & 8, n = k << o, p = n + 520192 >>> 16 & 4, t = n << p, q = t + 245760 >>> 16 & 2, r = 14 - (p | o | q) + (t << q >>> 15), l = c >>> r + 7 & 1 | r << 1;
    }
  }
  var s = v[W + (l << 2) + 304 >> 2], u = 0 == s;
  a : do {
    if (u) {
      var x = 0, B = j, y = 0;
    } else {
      var w = 31 == l ? 0 : 25 - (l >>> 1), D = 0, G = j, M = s;
      h = M >> 2;
      for (var I = c << w, S = 0; ; ) {
        var N = m[h + 1] & -8, Q = N - c;
        if (Q < G) {
          if (N == c) {
            x = M;
            B = Q;
            y = M;
            break a;
          } else {
            var Y = M, T = Q;
          }
        } else {
          Y = D, T = G;
        }
        var $ = v[h + 5], ba = v[((I >>> 31 << 2) + 16 >> 2) + h], P = 0 == $ | $ == ba ? S : $;
        if (0 == ba) {
          x = Y;
          B = T;
          y = P;
          break a;
        }
        D = Y;
        G = T;
        M = ba;
        h = M >> 2;
        I <<= 1;
        S = P;
      }
    }
  } while (0);
  if (0 == y & 0 == x) {
    var R = 2 << l, V = m[W + 4 >> 2] & (R | -R);
    if (0 == V) {
      var L = y;
    } else {
      var O = (V & -V) - 1, Z = O >>> 12 & 16, X = O >>> Z, U = X >>> 5 & 8, ka = X >>> U, Ja = ka >>> 2 & 4, gb = ka >>> Ja, Ta = gb >>> 1 & 2, ya = gb >>> Ta, Na = ya >>> 1 & 1, L = m[W + ((U | Z | Ja | Ta | Na) + (ya >>> Na) << 2) + 304 >> 2];
    }
  } else {
    L = y;
  }
  var oa = 0 == L;
  a : do {
    if (oa) {
      var ga = B, ia = x;
      g = ia >> 2;
    } else {
      var za = L;
      f = za >> 2;
      for (var Ra = B, va = x; ; ) {
        var ta = (m[f + 1] & -8) - c, Aa = ta < Ra, Oa = Aa ? ta : Ra, qa = Aa ? za : va, ea = v[f + 4];
        if (0 != ea) {
          za = ea, f = za >> 2, Ra = Oa, va = qa;
        } else {
          var ca = v[f + 5];
          if (0 == ca) {
            ga = Oa;
            ia = qa;
            g = ia >> 2;
            break a;
          } else {
            za = ca, f = za >> 2, Ra = Oa, va = qa;
          }
        }
      }
    }
  } while (0);
  var fa = 0 == ia;
  a : do {
    if (fa) {
      var Ka = 0;
    } else {
      if (ga < m[W + 8 >> 2] - c) {
        var la = ia;
        d = la >> 2;
        var wa = v[W + 16 >> 2], xa = la < wa;
        do {
          if (!xa) {
            var Ua = la + c, ma = Ua;
            if (la < Ua) {
              var ja = v[g + 6], Pa = v[g + 3], Fa = Pa == ia;
              do {
                if (Fa) {
                  var Ea = ia + 20, Sa = m[Ea >> 2];
                  if (0 == Sa) {
                    var Ga = ia + 16, La = m[Ga >> 2];
                    if (0 == La) {
                      var na = 0;
                      e = na >> 2;
                      break;
                    } else {
                      var Ca = Ga, ua = La;
                    }
                  } else {
                    Ca = Ea, ua = Sa;
                  }
                  for (;;) {
                    var sa = ua + 20, aa = m[sa >> 2];
                    if (0 != aa) {
                      Ca = sa, ua = aa;
                    } else {
                      var Ha = ua + 16, hb = v[Ha >> 2];
                      if (0 == hb) {
                        break;
                      } else {
                        Ca = Ha, ua = hb;
                      }
                    }
                  }
                  Ca < wa && (Rn(), da("Reached an unreachable!"));
                  m[Ca >> 2] = 0;
                  na = ua;
                } else {
                  var ib = v[g + 2];
                  ib < wa && (Rn(), da("Reached an unreachable!"));
                  m[ib + 12 >> 2] = Pa;
                  m[Pa + 8 >> 2] = ib;
                  na = Pa;
                }
                e = na >> 2;
              } while (0);
              var jb = 0 == ja;
              b : do {
                if (!jb) {
                  var ub = ia + 28, kb = (m[ub >> 2] << 2) + W + 304, wb = ia == m[kb >> 2];
                  do {
                    if (wb) {
                      if (m[kb >> 2] = na, 0 == na) {
                        m[W + 4 >> 2] &= 1 << m[ub >> 2] ^ -1;
                        break b;
                      }
                    } else {
                      ja < v[W + 16 >> 2] && (Rn(), da("Reached an unreachable!"));
                      var lb = ja + 16;
                      m[lb >> 2] == ia ? m[lb >> 2] = na : m[ja + 20 >> 2] = na;
                      if (0 == na) {
                        break b;
                      }
                    }
                  } while (0);
                  na < v[W + 16 >> 2] && (Rn(), da("Reached an unreachable!"));
                  m[e + 6] = ja;
                  var mb = v[g + 4];
                  0 != mb && (mb < v[W + 16 >> 2] && (Rn(), da("Reached an unreachable!")), m[e + 4] = mb, m[mb + 24 >> 2] = na);
                  var Da = v[g + 5];
                  0 != Da && (Da < v[W + 16 >> 2] && (Rn(), da("Reached an unreachable!")), m[e + 5] = Da, m[Da + 24 >> 2] = na);
                }
              } while (0);
              var tb = 16 > ga;
              b : do {
                if (tb) {
                  var Xa = ga + c;
                  m[g + 1] = Xa | 3;
                  var nb = la + (Xa + 4);
                  m[nb >> 2] |= 1;
                } else {
                  if (m[g + 1] = c | 3, m[d + (i + 1)] = ga | 1, m[(ga >> 2) + d + i] = ga, 256 > ga) {
                    var Ya = ga >>> 2 & 1073741822, cb = (Ya << 2) + W + 40, db = v[W >> 2], yb = 1 << (ga >>> 3);
                    if (0 == (db & yb)) {
                      m[W >> 2] = db | yb;
                      var ob = cb, qb = (Ya + 2 << 2) + W + 40;
                    } else {
                      var eb = (Ya + 2 << 2) + W + 40, Za = v[eb >> 2];
                      Za < v[W + 16 >> 2] && (Rn(), da("Reached an unreachable!"));
                      ob = Za;
                      qb = eb;
                    }
                    m[qb >> 2] = ma;
                    m[ob + 12 >> 2] = ma;
                    m[d + (i + 2)] = ob;
                    m[d + (i + 3)] = cb;
                  } else {
                    var Ma = Ua, rb = ga >>> 8;
                    if (0 == rb) {
                      var fb = 0;
                    } else {
                      if (16777215 < ga) {
                        fb = 31;
                      } else {
                        var Va = rb + 1048320 >>> 16 & 8, zb = rb << Va, vb = zb + 520192 >>> 16 & 4, pb = zb << vb, xb = pb + 245760 >>> 16 & 2, $a = 14 - (vb | Va | xb) + (pb << xb >>> 15), fb = ga >>> $a + 7 & 1 | $a << 1;
                      }
                    }
                    var Gb = (fb << 2) + W + 304;
                    m[d + (i + 7)] = fb;
                    var Ab = la + (c + 16);
                    m[d + (i + 5)] = 0;
                    m[Ab >> 2] = 0;
                    var sb = m[W + 4 >> 2], Bb = 1 << fb;
                    if (0 == (sb & Bb)) {
                      m[W + 4 >> 2] = sb | Bb, m[Gb >> 2] = Ma, m[d + (i + 6)] = Gb, m[d + (i + 3)] = Ma, m[d + (i + 2)] = Ma;
                    } else {
                      for (var Cb = ga << (31 == fb ? 0 : 25 - (fb >>> 1)), Db = m[Gb >> 2]; ; ) {
                        if ((m[Db + 4 >> 2] & -8) == ga) {
                          var bb = Db + 8, Eb = v[bb >> 2], Ob = v[W + 16 >> 2], Fb = Db < Ob;
                          do {
                            if (!Fb && Eb >= Ob) {
                              m[Eb + 12 >> 2] = Ma;
                              m[bb >> 2] = Ma;
                              m[d + (i + 2)] = Eb;
                              m[d + (i + 3)] = Db;
                              m[d + (i + 6)] = 0;
                              break b;
                            }
                          } while (0);
                          Rn();
                          da("Reached an unreachable!");
                        }
                        var Wa = (Cb >>> 31 << 2) + Db + 16, Qb = v[Wa >> 2];
                        if (0 == Qb) {
                          Wa < v[W + 16 >> 2] && (Rn(), da("Reached an unreachable!"));
                          m[Wa >> 2] = Ma;
                          m[d + (i + 6)] = Db;
                          m[d + (i + 3)] = Ma;
                          m[d + (i + 2)] = Ma;
                          break b;
                        } else {
                          Cb <<= 1, Db = Qb;
                        }
                      }
                    }
                  }
                }
              } while (0);
              Ka = ia + 8;
              break a;
            }
          }
        } while (0);
        Rn();
        da("Reached an unreachable!");
      }
      Ka = 0;
    }
  } while (0);
  return Ka;
}

Sn.X = 1;

function bo() {
  var c;
  0 == m[Un >> 2] && Vn();
  var e = v[W + 24 >> 2], d = 0 == e;
  a : do {
    if (!d) {
      var f = v[W + 12 >> 2], g = 40 < f;
      do {
        if (g) {
          var h = v[Un + 8 >> 2], i = (Math.floor((f - 41 + h) / h) - 1) * h, j = Wn(e);
          if (0 == (m[j + 12 >> 2] & 8)) {
            var k = Xn(0);
            c = j + 4 >> 2;
            if (k == m[j >> 2] + m[c] && (i = Xn(-(2147483646 < i ? -2147483648 - h : i)), h = Xn(0), -1 != i & h < k && (i = k - h, k != h))) {
              m[c] -= i;
              m[W + 432 >> 2] -= i;
              Yn(m[W + 24 >> 2], m[W + 12 >> 2] - i);
              break a;
            }
          }
        }
      } while (0);
      v[W + 12 >> 2] > v[W + 28 >> 2] && (m[W + 28 >> 2] = -1);
    }
  } while (0);
}

bo.X = 1;

function Sf(c) {
  var e, d, f, g, h, i, j = c >> 2, k, l = 0 == c;
  a : do {
    if (!l) {
      var o = c - 8, n = o, p = v[W + 16 >> 2], t = o < p;
      b : do {
        if (!t) {
          var q = v[c - 4 >> 2], r = q & 3;
          if (1 != r) {
            var s = q & -8;
            i = s >> 2;
            var u = c + (s - 8), x = u, B = 0 == (q & 1);
            c : do {
              if (B) {
                var y = v[o >> 2];
                if (0 == r) {
                  break a;
                }
                var w = -8 - y;
                h = w >> 2;
                var D = c + w, G = D, M = y + s;
                if (D < p) {
                  break b;
                }
                if (G == m[W + 20 >> 2]) {
                  if (g = c + (s - 4) >> 2, 3 != (m[g] & 3)) {
                    var I = G;
                    f = I >> 2;
                    var S = M;
                  } else {
                    m[W + 8 >> 2] = M;
                    m[g] &= -2;
                    m[j + (h + 1)] = M | 1;
                    m[u >> 2] = M;
                    break a;
                  }
                } else {
                  if (256 > y) {
                    var N = v[j + (h + 2)], Q = v[j + (h + 3)];
                    if (N == Q) {
                      m[W >> 2] &= 1 << (y >>> 3) ^ -1, I = G, f = I >> 2, S = M;
                    } else {
                      var Y = ((y >>> 2 & 1073741822) << 2) + W + 40, T = N != Y & N < p;
                      do {
                        if (!T && Q == Y | Q >= p) {
                          m[N + 12 >> 2] = Q;
                          m[Q + 8 >> 2] = N;
                          I = G;
                          f = I >> 2;
                          S = M;
                          break c;
                        }
                      } while (0);
                      Rn();
                      da("Reached an unreachable!");
                    }
                  } else {
                    var $ = D, ba = v[j + (h + 6)], P = v[j + (h + 3)], R = P == $;
                    do {
                      if (R) {
                        var V = c + (w + 20), L = m[V >> 2];
                        if (0 == L) {
                          var O = c + (w + 16), Z = m[O >> 2];
                          if (0 == Z) {
                            var X = 0;
                            d = X >> 2;
                            break;
                          } else {
                            var U = O, ka = Z;
                          }
                        } else {
                          U = V, ka = L, k = 20;
                        }
                        for (;;) {
                          var Ja = ka + 20, gb = m[Ja >> 2];
                          if (0 != gb) {
                            U = Ja, ka = gb;
                          } else {
                            var Ta = ka + 16, ya = v[Ta >> 2];
                            if (0 == ya) {
                              break;
                            } else {
                              U = Ta, ka = ya;
                            }
                          }
                        }
                        U < p && (Rn(), da("Reached an unreachable!"));
                        m[U >> 2] = 0;
                        X = ka;
                      } else {
                        var Na = v[j + (h + 2)];
                        Na < p && (Rn(), da("Reached an unreachable!"));
                        m[Na + 12 >> 2] = P;
                        m[P + 8 >> 2] = Na;
                        X = P;
                      }
                      d = X >> 2;
                    } while (0);
                    if (0 != ba) {
                      var oa = c + (w + 28), ga = (m[oa >> 2] << 2) + W + 304, ia = $ == m[ga >> 2];
                      do {
                        if (ia) {
                          if (m[ga >> 2] = X, 0 == X) {
                            m[W + 4 >> 2] &= 1 << m[oa >> 2] ^ -1;
                            I = G;
                            f = I >> 2;
                            S = M;
                            break c;
                          }
                        } else {
                          ba < v[W + 16 >> 2] && (Rn(), da("Reached an unreachable!"));
                          var za = ba + 16;
                          m[za >> 2] == $ ? m[za >> 2] = X : m[ba + 20 >> 2] = X;
                          if (0 == X) {
                            I = G;
                            f = I >> 2;
                            S = M;
                            break c;
                          }
                        }
                      } while (0);
                      X < v[W + 16 >> 2] && (Rn(), da("Reached an unreachable!"));
                      m[d + 6] = ba;
                      var Ra = v[j + (h + 4)];
                      0 != Ra && (Ra < v[W + 16 >> 2] && (Rn(), da("Reached an unreachable!")), m[d + 4] = Ra, m[Ra + 24 >> 2] = X);
                      var va = v[j + (h + 5)];
                      0 != va && (va < v[W + 16 >> 2] && (Rn(), da("Reached an unreachable!")), m[d + 5] = va, m[va + 24 >> 2] = X);
                    }
                    I = G;
                    f = I >> 2;
                    S = M;
                  }
                }
              } else {
                I = n, f = I >> 2, S = s;
              }
            } while (0);
            var ta = I;
            if (ta < u) {
              var Aa = c + (s - 4), Oa = v[Aa >> 2];
              if (0 != (Oa & 1)) {
                var qa = 0 == (Oa & 2);
                do {
                  if (qa) {
                    if (x == m[W + 24 >> 2]) {
                      var ea = m[W + 12 >> 2] + S;
                      m[W + 12 >> 2] = ea;
                      m[W + 24 >> 2] = I;
                      m[f + 1] = ea | 1;
                      I == m[W + 20 >> 2] && (m[W + 20 >> 2] = 0, m[W + 8 >> 2] = 0);
                      if (ea <= v[W + 28 >> 2]) {
                        break a;
                      }
                      bo();
                    } else {
                      if (x == m[W + 20 >> 2]) {
                        var ca = m[W + 8 >> 2] + S;
                        m[W + 8 >> 2] = ca;
                        m[W + 20 >> 2] = I;
                        m[f + 1] = ca | 1;
                        m[ta + ca >> 2] = ca;
                      } else {
                        var fa = (Oa & -8) + S, Ka = Oa >>> 3, la = 256 > Oa;
                        c : do {
                          if (la) {
                            var wa = v[j + i], xa = v[((s | 4) >> 2) + j];
                            if (wa == xa) {
                              m[W >> 2] &= 1 << Ka ^ -1;
                            } else {
                              var Ua = ((Oa >>> 2 & 1073741822) << 2) + W + 40;
                              k = wa == Ua ? 62 : wa < v[W + 16 >> 2] ? 65 : 62;
                              do {
                                if (62 == k && !(xa != Ua && xa < v[W + 16 >> 2])) {
                                  m[wa + 12 >> 2] = xa;
                                  m[xa + 8 >> 2] = wa;
                                  break c;
                                }
                              } while (0);
                              Rn();
                              da("Reached an unreachable!");
                            }
                          } else {
                            var ma = u, ja = v[j + (i + 4)], Pa = v[((s | 4) >> 2) + j], Fa = Pa == ma;
                            do {
                              if (Fa) {
                                var Ea = c + (s + 12), Sa = m[Ea >> 2];
                                if (0 == Sa) {
                                  var Ga = c + (s + 8), La = m[Ga >> 2];
                                  if (0 == La) {
                                    var na = 0;
                                    e = na >> 2;
                                    break;
                                  } else {
                                    var Ca = Ga, ua = La;
                                  }
                                } else {
                                  Ca = Ea, ua = Sa, k = 72;
                                }
                                for (;;) {
                                  var sa = ua + 20, aa = m[sa >> 2];
                                  if (0 != aa) {
                                    Ca = sa, ua = aa;
                                  } else {
                                    var Ha = ua + 16, hb = v[Ha >> 2];
                                    if (0 == hb) {
                                      break;
                                    } else {
                                      Ca = Ha, ua = hb;
                                    }
                                  }
                                }
                                Ca < v[W + 16 >> 2] && (Rn(), da("Reached an unreachable!"));
                                m[Ca >> 2] = 0;
                                na = ua;
                              } else {
                                var ib = v[j + i];
                                ib < v[W + 16 >> 2] && (Rn(), da("Reached an unreachable!"));
                                m[ib + 12 >> 2] = Pa;
                                m[Pa + 8 >> 2] = ib;
                                na = Pa;
                              }
                              e = na >> 2;
                            } while (0);
                            if (0 != ja) {
                              var jb = c + (s + 20), ub = (m[jb >> 2] << 2) + W + 304, kb = ma == m[ub >> 2];
                              do {
                                if (kb) {
                                  if (m[ub >> 2] = na, 0 == na) {
                                    m[W + 4 >> 2] &= 1 << m[jb >> 2] ^ -1;
                                    break c;
                                  }
                                } else {
                                  ja < v[W + 16 >> 2] && (Rn(), da("Reached an unreachable!"));
                                  var wb = ja + 16;
                                  m[wb >> 2] == ma ? m[wb >> 2] = na : m[ja + 20 >> 2] = na;
                                  if (0 == na) {
                                    break c;
                                  }
                                }
                              } while (0);
                              na < v[W + 16 >> 2] && (Rn(), da("Reached an unreachable!"));
                              m[e + 6] = ja;
                              var lb = v[j + (i + 2)];
                              0 != lb && (lb < v[W + 16 >> 2] && (Rn(), da("Reached an unreachable!")), m[e + 4] = lb, m[lb + 24 >> 2] = na);
                              var mb = v[j + (i + 3)];
                              0 != mb && (mb < v[W + 16 >> 2] && (Rn(), da("Reached an unreachable!")), m[e + 5] = mb, m[mb + 24 >> 2] = na);
                            }
                          }
                        } while (0);
                        m[f + 1] = fa | 1;
                        m[ta + fa >> 2] = fa;
                        if (I != m[W + 20 >> 2]) {
                          var Da = fa;
                          break;
                        }
                        m[W + 8 >> 2] = fa;
                      }
                    }
                    break a;
                  } else {
                    m[Aa >> 2] = Oa & -2, m[f + 1] = S | 1, Da = m[ta + S >> 2] = S;
                  }
                } while (0);
                if (256 > Da) {
                  var tb = Da >>> 2 & 1073741822, Xa = (tb << 2) + W + 40, nb = v[W >> 2], Ya = 1 << (Da >>> 3);
                  if (0 == (nb & Ya)) {
                    m[W >> 2] = nb | Ya;
                    var cb = Xa, db = (tb + 2 << 2) + W + 40;
                  } else {
                    var yb = (tb + 2 << 2) + W + 40, ob = v[yb >> 2];
                    ob < v[W + 16 >> 2] && (Rn(), da("Reached an unreachable!"));
                    cb = ob;
                    db = yb;
                  }
                  m[db >> 2] = I;
                  m[cb + 12 >> 2] = I;
                  m[f + 2] = cb;
                  m[f + 3] = Xa;
                } else {
                  var qb = I, eb = Da >>> 8;
                  if (0 == eb) {
                    var Za = 0;
                  } else {
                    if (16777215 < Da) {
                      Za = 31;
                    } else {
                      var Ma = eb + 1048320 >>> 16 & 8, rb = eb << Ma, fb = rb + 520192 >>> 16 & 4, Va = rb << fb, zb = Va + 245760 >>> 16 & 2, vb = 14 - (fb | Ma | zb) + (Va << zb >>> 15), Za = Da >>> vb + 7 & 1 | vb << 1;
                    }
                  }
                  var pb = (Za << 2) + W + 304;
                  m[f + 7] = Za;
                  m[f + 5] = 0;
                  m[f + 4] = 0;
                  var xb = m[W + 4 >> 2], $a = 1 << Za, Gb = 0 == (xb & $a);
                  c : do {
                    if (Gb) {
                      m[W + 4 >> 2] = xb | $a, m[pb >> 2] = qb, m[f + 6] = pb, m[f + 3] = I, m[f + 2] = I;
                    } else {
                      for (var Ab = Da << (31 == Za ? 0 : 25 - (Za >>> 1)), sb = m[pb >> 2]; ; ) {
                        if ((m[sb + 4 >> 2] & -8) == Da) {
                          var Bb = sb + 8, Cb = v[Bb >> 2], Db = v[W + 16 >> 2], bb = sb < Db;
                          do {
                            if (!bb && Cb >= Db) {
                              m[Cb + 12 >> 2] = qb;
                              m[Bb >> 2] = qb;
                              m[f + 2] = Cb;
                              m[f + 3] = sb;
                              m[f + 6] = 0;
                              break c;
                            }
                          } while (0);
                          Rn();
                          da("Reached an unreachable!");
                        }
                        var Eb = (Ab >>> 31 << 2) + sb + 16, Ob = v[Eb >> 2];
                        if (0 == Ob) {
                          Eb < v[W + 16 >> 2] && (Rn(), da("Reached an unreachable!"));
                          m[Eb >> 2] = qb;
                          m[f + 6] = sb;
                          m[f + 3] = I;
                          m[f + 2] = I;
                          break c;
                        } else {
                          Ab <<= 1, sb = Ob;
                        }
                      }
                    }
                  } while (0);
                  var Fb = m[W + 32 >> 2] - 1;
                  m[W + 32 >> 2] = Fb;
                  if (0 != Fb) {
                    break a;
                  }
                  var Wa = m[W + 452 >> 2], Qb = 0 == Wa;
                  c : do {
                    if (!Qb) {
                      for (var Sb = Wa; ; ) {
                        var Xb = m[Sb + 8 >> 2];
                        if (0 == Xb) {
                          break c;
                        } else {
                          Sb = Xb;
                        }
                      }
                    }
                  } while (0);
                  m[W + 32 >> 2] = -1;
                }
                break a;
              }
            }
          }
        }
      } while (0);
      Rn();
      da("Reached an unreachable!");
    }
  } while (0);
}

Sf.X = 1;

function Wn(c) {
  var e, d = W + 444;
  for (e = d >> 2; ; ) {
    var f = v[e];
    if (f <= c && f + m[e + 1] > c) {
      var g = d;
      break;
    }
    e = v[e + 2];
    if (0 == e) {
      g = 0;
      break;
    } else {
      d = e, e = d >> 2;
    }
  }
  return g;
}

function Yn(c, e) {
  var d = c + 8, d = 0 == (d & 7) ? 0 : -d & 7, f = e - d;
  m[W + 24 >> 2] = c + d;
  m[W + 12 >> 2] = f;
  m[c + (d + 4) >> 2] = f | 1;
  m[c + (e + 4) >> 2] = 40;
  m[W + 28 >> 2] = m[Un + 16 >> 2];
}

function Vn() {
  if (0 == m[Un >> 2]) {
    var c = co();
    0 == (c - 1 & c) ? (m[Un + 8 >> 2] = c, m[Un + 4 >> 2] = c, m[Un + 12 >> 2] = -1, m[Un + 16 >> 2] = 2097152, m[Un + 20 >> 2] = 0, m[W + 440 >> 2] = 0, m[Un >> 2] = Math.floor(Date.now() / 1e3) & -16 ^ 1431655768) : (Rn(), da("Reached an unreachable!"));
  }
}

function Zn(c, e, d) {
  var f, g, h, i = e >> 2, j = c >> 2, k, l = c + 8, l = 0 == (l & 7) ? 0 : -l & 7;
  g = e + 8;
  var o = 0 == (g & 7) ? 0 : -g & 7;
  h = o >> 2;
  var n = e + o, p = l + d;
  g = p >> 2;
  var t = c + p, q = n - (c + l) - d;
  m[(l + 4 >> 2) + j] = d | 3;
  d = n == m[W + 24 >> 2];
  a : do {
    if (d) {
      var r = m[W + 12 >> 2] + q;
      m[W + 12 >> 2] = r;
      m[W + 24 >> 2] = t;
      m[j + (g + 1)] = r | 1;
    } else {
      if (n == m[W + 20 >> 2]) {
        r = m[W + 8 >> 2] + q, m[W + 8 >> 2] = r, m[W + 20 >> 2] = t, m[j + (g + 1)] = r | 1, m[c + r + p >> 2] = r;
      } else {
        var s = v[i + (h + 1)];
        if (1 == (s & 3)) {
          var r = s & -8, u = s >>> 3, x = 256 > s;
          b : do {
            if (x) {
              var B = v[((o | 8) >> 2) + i], y = v[i + (h + 3)];
              if (B == y) {
                m[W >> 2] &= 1 << u ^ -1;
              } else {
                var w = ((s >>> 2 & 1073741822) << 2) + W + 40;
                k = B == w ? 14 : B < v[W + 16 >> 2] ? 17 : 14;
                do {
                  if (14 == k && !(y != w && y < v[W + 16 >> 2])) {
                    m[B + 12 >> 2] = y;
                    m[y + 8 >> 2] = B;
                    break b;
                  }
                } while (0);
                Rn();
                da("Reached an unreachable!");
              }
            } else {
              k = n;
              B = v[((o | 24) >> 2) + i];
              y = v[i + (h + 3)];
              w = y == k;
              do {
                if (w) {
                  f = o | 16;
                  var D = e + (f + 4), G = m[D >> 2];
                  if (0 == G) {
                    if (f = e + f, G = m[f >> 2], 0 == G) {
                      G = 0;
                      f = G >> 2;
                      break;
                    }
                  } else {
                    f = D;
                  }
                  for (;;) {
                    var D = G + 20, M = m[D >> 2];
                    if (0 != M) {
                      f = D, G = M;
                    } else {
                      if (D = G + 16, M = v[D >> 2], 0 == M) {
                        break;
                      } else {
                        f = D, G = M;
                      }
                    }
                  }
                  f < v[W + 16 >> 2] && (Rn(), da("Reached an unreachable!"));
                  m[f >> 2] = 0;
                } else {
                  f = v[((o | 8) >> 2) + i], f < v[W + 16 >> 2] && (Rn(), da("Reached an unreachable!")), m[f + 12 >> 2] = y, m[y + 8 >> 2] = f, G = y;
                }
                f = G >> 2;
              } while (0);
              if (0 != B) {
                y = e + (o + 28);
                w = (m[y >> 2] << 2) + W + 304;
                D = k == m[w >> 2];
                do {
                  if (D) {
                    if (m[w >> 2] = G, 0 == G) {
                      m[W + 4 >> 2] &= 1 << m[y >> 2] ^ -1;
                      break b;
                    }
                  } else {
                    if (B < v[W + 16 >> 2] && (Rn(), da("Reached an unreachable!")), M = B + 16, m[M >> 2] == k ? m[M >> 2] = G : m[B + 20 >> 2] = G, 0 == G) {
                      break b;
                    }
                  }
                } while (0);
                G < v[W + 16 >> 2] && (Rn(), da("Reached an unreachable!"));
                m[f + 6] = B;
                k = o | 16;
                B = v[(k >> 2) + i];
                0 != B && (B < v[W + 16 >> 2] && (Rn(), da("Reached an unreachable!")), m[f + 4] = B, m[B + 24 >> 2] = G);
                k = v[(k + 4 >> 2) + i];
                0 != k && (k < v[W + 16 >> 2] && (Rn(), da("Reached an unreachable!")), m[f + 5] = k, m[k + 24 >> 2] = G);
              }
            }
          } while (0);
          s = e + (r | o);
          r += q;
        } else {
          s = n, r = q;
        }
        s += 4;
        m[s >> 2] &= -2;
        m[j + (g + 1)] = r | 1;
        m[(r >> 2) + j + g] = r;
        if (256 > r) {
          u = r >>> 2 & 1073741822, s = (u << 2) + W + 40, x = v[W >> 2], r = 1 << (r >>> 3), 0 == (x & r) ? (m[W >> 2] = x | r, r = s, u = (u + 2 << 2) + W + 40) : (u = (u + 2 << 2) + W + 40, r = v[u >> 2], r < v[W + 16 >> 2] && (Rn(), da("Reached an unreachable!"))), m[u >> 2] = t, m[r + 12 >> 2] = t, m[j + (g + 2)] = r, m[j + (g + 3)] = s;
        } else {
          if (s = t, x = r >>> 8, 0 == x ? u = 0 : 16777215 < r ? u = 31 : (u = x + 1048320 >>> 16 & 8, k = x << u, x = k + 520192 >>> 16 & 4, k <<= x, B = k + 245760 >>> 16 & 2, u = 14 - (x | u | B) + (k << B >>> 15), u = r >>> u + 7 & 1 | u << 1), x = (u << 2) + W + 304, m[j + (g + 7)] = u, k = c + (p + 16), m[j + (g + 5)] = 0, m[k >> 2] = 0, k = m[W + 4 >> 2], B = 1 << u, 0 == (k & B)) {
            m[W + 4 >> 2] = k | B, m[x >> 2] = s, m[j + (g + 6)] = x, m[j + (g + 3)] = s, m[j + (g + 2)] = s;
          } else {
            u = r << (31 == u ? 0 : 25 - (u >>> 1));
            for (x = m[x >> 2]; ; ) {
              if ((m[x + 4 >> 2] & -8) == r) {
                k = x + 8;
                B = v[k >> 2];
                y = v[W + 16 >> 2];
                w = x < y;
                do {
                  if (!w && B >= y) {
                    m[B + 12 >> 2] = s;
                    m[k >> 2] = s;
                    m[j + (g + 2)] = B;
                    m[j + (g + 3)] = x;
                    m[j + (g + 6)] = 0;
                    break a;
                  }
                } while (0);
                Rn();
                da("Reached an unreachable!");
              }
              k = (u >>> 31 << 2) + x + 16;
              B = v[k >> 2];
              if (0 == B) {
                k < v[W + 16 >> 2] && (Rn(), da("Reached an unreachable!"));
                m[k >> 2] = s;
                m[j + (g + 6)] = x;
                m[j + (g + 3)] = s;
                m[j + (g + 2)] = s;
                break a;
              } else {
                u <<= 1, x = B;
              }
            }
          }
        }
      }
    }
  } while (0);
  return c + (l | 8);
}

Zn.X = 1;

function $n(c, e) {
  var d, f, g = v[W + 24 >> 2];
  f = g >> 2;
  var h = Wn(g), i = m[h >> 2];
  d = m[h + 4 >> 2];
  var h = i + d, j = i + (d - 39), i = i + (d - 47) + (0 == (j & 7) ? 0 : -j & 7), i = i < g + 16 ? g : i, j = i + 8;
  d = j >> 2;
  Yn(c, e - 40);
  m[i + 4 >> 2] = 27;
  m[d] = m[W + 444 >> 2];
  m[d + 1] = m[W + 448 >> 2];
  m[d + 2] = m[W + 452 >> 2];
  m[d + 3] = m[W + 456 >> 2];
  m[W + 444 >> 2] = c;
  m[W + 448 >> 2] = e;
  m[W + 456 >> 2] = 0;
  m[W + 452 >> 2] = j;
  d = i + 28;
  m[d >> 2] = 7;
  j = i + 32 < h;
  a : do {
    if (j) {
      for (var k = d; ; ) {
        var l = k + 4;
        m[l >> 2] = 7;
        if (k + 8 < h) {
          k = l;
        } else {
          break a;
        }
      }
    }
  } while (0);
  h = i == g;
  a : do {
    if (!h) {
      if (d = i - g, j = g + d, k = g + (d + 4), m[k >> 2] &= -2, m[f + 1] = d | 1, m[j >> 2] = d, 256 > d) {
        k = d >>> 2 & 1073741822, j = (k << 2) + W + 40, l = v[W >> 2], d = 1 << (d >>> 3), 0 == (l & d) ? (m[W >> 2] = l | d, d = j, k = (k + 2 << 2) + W + 40) : (k = (k + 2 << 2) + W + 40, d = v[k >> 2], d < v[W + 16 >> 2] && (Rn(), da("Reached an unreachable!"))), m[k >> 2] = g, m[d + 12 >> 2] = g, m[f + 2] = d, m[f + 3] = j;
      } else {
        j = g;
        l = d >>> 8;
        if (0 == l) {
          k = 0;
        } else {
          if (16777215 < d) {
            k = 31;
          } else {
            var k = l + 1048320 >>> 16 & 8, o = l << k, l = o + 520192 >>> 16 & 4, o = o << l, n = o + 245760 >>> 16 & 2, k = 14 - (l | k | n) + (o << n >>> 15), k = d >>> k + 7 & 1 | k << 1;
          }
        }
        l = (k << 2) + W + 304;
        m[f + 7] = k;
        m[f + 5] = 0;
        m[f + 4] = 0;
        o = m[W + 4 >> 2];
        n = 1 << k;
        if (0 == (o & n)) {
          m[W + 4 >> 2] = o | n, m[l >> 2] = j, m[f + 6] = l, m[f + 3] = g, m[f + 2] = g;
        } else {
          k = d << (31 == k ? 0 : 25 - (k >>> 1));
          for (l = m[l >> 2]; ; ) {
            if ((m[l + 4 >> 2] & -8) == d) {
              var o = l + 8, n = v[o >> 2], p = v[W + 16 >> 2], t = l < p;
              do {
                if (!t && n >= p) {
                  m[n + 12 >> 2] = j;
                  m[o >> 2] = j;
                  m[f + 2] = n;
                  m[f + 3] = l;
                  m[f + 6] = 0;
                  break a;
                }
              } while (0);
              Rn();
              da("Reached an unreachable!");
            }
            o = (k >>> 31 << 2) + l + 16;
            n = v[o >> 2];
            if (0 == n) {
              o < v[W + 16 >> 2] && (Rn(), da("Reached an unreachable!"));
              m[o >> 2] = j;
              m[f + 6] = l;
              m[f + 3] = g;
              m[f + 2] = g;
              break a;
            } else {
              k <<= 1, l = n;
            }
          }
        }
      }
    }
  } while (0);
}

$n.X = 1;

function eo(c) {
  0 != c && Sf(c);
}

function Pf(c, e, d) {
  if (20 <= d && e % 2 == c % 2) {
    if (e % 4 == c % 4) {
      for (d = e + d; e % 4; ) {
        b[c++] = b[e++];
      }
      for (var e = e >> 2, c = c >> 2, f = d >> 2; e < f; ) {
        m[c++] = m[e++];
      }
      e <<= 2;
      for (c <<= 2; e < d; ) {
        b[c++] = b[e++];
      }
    } else {
      d = e + d;
      e % 2 && (b[c++] = b[e++]);
      e >>= 1;
      c >>= 1;
      for (f = d >> 1; e < f; ) {
        md[c++] = md[e++];
      }
      e <<= 1;
      c <<= 1;
      e < d && (b[c++] = b[e++]);
    }
  } else {
    for (; d--; ) {
      b[c++] = b[e++];
    }
  }
}

function fg() {
  fo === ha && (fo = Date.now());
  return Math.floor(1 * (Date.now() - fo));
}

var fo, go = 13, ho = 9, io = 22, jo = 5, ko = 21, lo = 6;

function mo(c) {
  ao || (ao = C([ 0 ], "i32", A));
  m[ao >> 2] = c;
}

var ao, no = 0, hg = 0, oo = 0, po = 2, kg = [ ra ], qo = pa;

function ro(c, e) {
  if ("string" !== typeof c) {
    return ra;
  }
  e === ha && (e = "/");
  c && "/" == c[0] && (e = "");
  for (var d = (e + "/" + c).split("/").reverse(), f = [ "" ]; d.length; ) {
    var g = d.pop();
    "" == g || "." == g || (".." == g ? 1 < f.length && f.pop() : f.push(g));
  }
  return 1 == f.length ? "/" : f.join("/");
}

function so(c, e, d) {
  var f = {
    Nc: Ba,
    D: Ba,
    error: 0,
    name: ra,
    path: ra,
    object: ra,
    Ea: Ba,
    Ga: ra,
    Fa: ra
  }, c = ro(c);
  if ("/" == c) {
    f.Nc = pa, f.D = f.Ea = pa, f.name = "/", f.path = f.Ga = "/", f.object = f.Fa = to;
  } else {
    if (c !== ra) {
      for (var d = d || 0, c = c.slice(1).split("/"), g = to, h = [ "" ]; c.length; ) {
        1 == c.length && g.k && (f.Ea = pa, f.Ga = 1 == h.length ? "/" : h.join("/"), f.Fa = g, f.name = c[0]);
        var i = c.shift();
        if (g.k) {
          if (g.Ia) {
            if (!g.d.hasOwnProperty(i)) {
              f.error = 2;
              break;
            }
          } else {
            f.error = go;
            break;
          }
        } else {
          f.error = 20;
          break;
        }
        g = g.d[i];
        if (g.link && !(e && 0 == c.length)) {
          if (40 < d) {
            f.error = 40;
            break;
          }
          f = ro(g.link, h.join("/"));
          return so([ f ].concat(c).join("/"), e, d + 1);
        }
        h.push(i);
        0 == c.length && (f.D = pa, f.path = h.join("/"), f.object = g);
      }
    }
  }
  return f;
}

function uo(c) {
  vo();
  c = so(c, ha);
  if (c.D) {
    return c.object;
  }
  mo(c.error);
  return ra;
}

function wo(c, e, d, f, g) {
  c || (c = "/");
  "string" === typeof c && (c = uo(c));
  c || (mo(go), da(Error("Parent path must exist.")));
  c.k || (mo(20), da(Error("Parent must be a folder.")));
  !c.write && !qo && (mo(go), da(Error("Parent folder must be writeable.")));
  if (!e || "." == e || ".." == e) {
    mo(2), da(Error("Name must not be empty."));
  }
  c.d.hasOwnProperty(e) && (mo(17), da(Error("Can't overwrite object.")));
  c.d[e] = {
    Ia: f === ha ? pa : f,
    write: g === ha ? Ba : g,
    timestamp: Date.now(),
    Mc: po++
  };
  for (var h in d) {
    d.hasOwnProperty(h) && (c.d[e][h] = d[h]);
  }
  return c.d[e];
}

function xo(c, e) {
  return wo(c, e, {
    k: pa,
    q: Ba,
    d: {}
  }, pa, pa);
}

function yo() {
  var c = "dev/shm/tmp", e = uo("/");
  e === ra && da(Error("Invalid parent."));
  for (c = c.split("/").reverse(); c.length; ) {
    var d = c.pop();
    d && (e.d.hasOwnProperty(d) || xo(e, d), e = e.d[d]);
  }
}

function zo(c, e, d, f) {
  !d && !f && da(Error("A device must have at least one callback defined."));
  var g = {
    q: pa,
    input: d,
    l: f
  };
  g.k = Ba;
  return wo(c, e, g, Boolean(d), Boolean(f));
}

function vo() {
  to || (to = {
    Ia: pa,
    write: pa,
    k: pa,
    q: Ba,
    timestamp: Date.now(),
    Mc: 1,
    d: {}
  });
}

function Ao() {
  var c, e, d;
  kc(!Bo, "FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)");
  Bo = pa;
  vo();
  c || (c = (function() {
    if (!c.C || !c.C.length) {
      var d;
      "undefined" != typeof window && "function" == typeof window.prompt ? d = window.prompt("Input: ") : "function" == typeof readline && (d = readline());
      d || (d = "");
      c.C = be(d + "\n", pa);
    }
    return c.C.shift();
  }));
  e || (e = (function(c) {
    c === ra || 10 === c ? (e.Ha(e.buffer.join("")), e.buffer = []) : e.buffer.push(String.fromCharCode(c));
  }));
  e.Ha || (e.Ha = print);
  e.buffer || (e.buffer = []);
  d || (d = e);
  xo("/", "tmp");
  var f = xo("/", "dev"), g = zo(f, "stdin", c), h = zo(f, "stdout", ra, e);
  d = zo(f, "stderr", ra, d);
  zo(f, "tty", c, e);
  kg[1] = {
    path: "/dev/stdin",
    object: g,
    position: 0,
    Da: pa,
    r: Ba,
    Ca: Ba,
    error: Ba,
    Aa: Ba,
    Ja: []
  };
  kg[2] = {
    path: "/dev/stdout",
    object: h,
    position: 0,
    Da: Ba,
    r: pa,
    Ca: Ba,
    error: Ba,
    Aa: Ba,
    Ja: []
  };
  kg[3] = {
    path: "/dev/stderr",
    object: d,
    position: 0,
    Da: Ba,
    r: pa,
    Ca: Ba,
    error: Ba,
    Aa: Ba,
    Ja: []
  };
  no = C([ 1 ], "void*", A);
  hg = C([ 2 ], "void*", A);
  oo = C([ 3 ], "void*", A);
  yo();
  kg[no] = kg[1];
  kg[hg] = kg[2];
  kg[oo] = kg[3];
  C([ C([ 0, 0, 0, 0, no, 0, 0, 0, hg, 0, 0, 0, oo, 0, 0, 0 ], "void*", A) ], "void*", A);
}

var Bo, to;

function jg(c, e, d) {
  var f = kg[c];
  if (f) {
    if (f.r) {
      if (0 > d) {
        return mo(io), -1;
      }
      if (f.object.q) {
        if (f.object.l) {
          for (var g = 0; g < d; g++) {
            try {
              f.object.l(b[e + g]);
            } catch (h) {
              return mo(jo), -1;
            }
          }
          f.object.timestamp = Date.now();
          return g;
        }
        mo(lo);
        return -1;
      }
      g = f.position;
      c = kg[c];
      if (!c || c.object.q) {
        mo(ho), e = -1;
      } else {
        if (c.r) {
          if (c.object.k) {
            mo(ko), e = -1;
          } else {
            if (0 > d || 0 > g) {
              mo(io), e = -1;
            } else {
              for (var i = c.object.d; i.length < g; ) {
                i.push(0);
              }
              for (var j = 0; j < d; j++) {
                i[g + j] = nd[e + j];
              }
              c.object.timestamp = Date.now();
              e = j;
            }
          }
        } else {
          mo(go), e = -1;
        }
      }
      -1 != e && (f.position += e);
      return e;
    }
    mo(go);
    return -1;
  }
  mo(ho);
  return -1;
}

function Co(c) {
  function e(d) {
    var e;
    "double" === d ? e = z[c + f >> 2] : "i64" == d ? e = [ m[c + f >> 2], m[c + f + 4 >> 2] ] : (d = "i32", e = m[c + f >> 2]);
    f += Math.max(fc(d), gc);
    return e;
  }
  for (var d = H.Ab, f = 0, g = [], h, i; ; ) {
    var j = d;
    h = b[d];
    if (0 === h) {
      break;
    }
    i = b[d + 1];
    if (37 == h) {
      var k = Ba, l = Ba, o = Ba, n = Ba;
      a : for (;;) {
        switch (i) {
         case 43:
          k = pa;
          break;
         case 45:
          l = pa;
          break;
         case 35:
          o = pa;
          break;
         case 48:
          if (n) {
            break a;
          } else {
            n = pa;
            break;
          }
         default:
          break a;
        }
        d++;
        i = b[d + 1];
      }
      var p = 0;
      if (42 == i) {
        p = e("i32"), d++, i = b[d + 1];
      } else {
        for (; 48 <= i && 57 >= i; ) {
          p = 10 * p + (i - 48), d++, i = b[d + 1];
        }
      }
      var t = Ba;
      if (46 == i) {
        var q = 0, t = pa;
        d++;
        i = b[d + 1];
        if (42 == i) {
          q = e("i32"), d++;
        } else {
          for (;;) {
            i = b[d + 1];
            if (48 > i || 57 < i) {
              break;
            }
            q = 10 * q + (i - 48);
            d++;
          }
        }
        i = b[d + 1];
      } else {
        q = 6;
      }
      var r;
      switch (String.fromCharCode(i)) {
       case "h":
        i = b[d + 2];
        104 == i ? (d++, r = 1) : r = 2;
        break;
       case "l":
        i = b[d + 2];
        108 == i ? (d++, r = 8) : r = 4;
        break;
       case "L":
       case "q":
       case "j":
        r = 8;
        break;
       case "z":
       case "t":
       case "I":
        r = 4;
        break;
       default:
        r = ra;
      }
      r && d++;
      i = b[d + 1];
      if (-1 != "d,i,u,o,x,X,p".split(",").indexOf(String.fromCharCode(i))) {
        j = 100 == i || 105 == i;
        r = r || 4;
        h = e("i" + 8 * r);
        8 == r && (h = 117 == i ? (h[0] >>> 0) + 4294967296 * (h[1] >>> 0) : (h[0] >>> 0) + 4294967296 * (h[1] | 0));
        4 >= r && (h = (j ? Ue : Te)(h & Math.pow(256, r) - 1, 8 * r));
        var s = Math.abs(h), u, j = "";
        if (100 == i || 105 == i) {
          u = Ue(h, 8 * r).toString(10);
        } else {
          if (117 == i) {
            u = Te(h, 8 * r).toString(10), h = Math.abs(h);
          } else {
            if (111 == i) {
              u = (o ? "0" : "") + s.toString(8);
            } else {
              if (120 == i || 88 == i) {
                j = o ? "0x" : "";
                if (0 > h) {
                  h = -h;
                  u = (s - 1).toString(16);
                  o = [];
                  for (s = 0; s < u.length; s++) {
                    o.push((15 - parseInt(u[s], 16)).toString(16));
                  }
                  for (u = o.join(""); u.length < 2 * r; ) {
                    u = "f" + u;
                  }
                } else {
                  u = s.toString(16);
                }
                88 == i && (j = j.toUpperCase(), u = u.toUpperCase());
              } else {
                112 == i && (0 === s ? u = "(nil)" : (j = "0x", u = s.toString(16)));
              }
            }
          }
        }
        if (t) {
          for (; u.length < q; ) {
            u = "0" + u;
          }
        }
        for (k && (j = 0 > h ? "-" + j : "+" + j); j.length + u.length < p; ) {
          l ? u += " " : n ? u = "0" + u : j = " " + j;
        }
        u = j + u;
        u.split("").forEach((function(c) {
          g.push(c.charCodeAt(0));
        }));
      } else {
        if (-1 != "f,F,e,E,g,G".split(",").indexOf(String.fromCharCode(i))) {
          h = e("double");
          if (isNaN(h)) {
            u = "nan", n = Ba;
          } else {
            if (isFinite(h)) {
              t = Ba;
              r = Math.min(q, 20);
              if (103 == i || 71 == i) {
                t = pa, q = q || 1, r = parseInt(h.toExponential(r).split("e")[1], 10), q > r && -4 <= r ? (i = (103 == i ? "f" : "F").charCodeAt(0), q -= r + 1) : (i = (103 == i ? "e" : "E").charCodeAt(0), q--), r = Math.min(q, 20);
              }
              if (101 == i || 69 == i) {
                u = h.toExponential(r), /[eE][-+]\d$/.test(u) && (u = u.slice(0, -1) + "0" + u.slice(-1));
              } else {
                if (102 == i || 70 == i) {
                  u = h.toFixed(r);
                }
              }
              j = u.split("e");
              if (t && !o) {
                for (; 1 < j[0].length && -1 != j[0].indexOf(".") && ("0" == j[0].slice(-1) || "." == j[0].slice(-1)); ) {
                  j[0] = j[0].slice(0, -1);
                }
              } else {
                for (o && -1 == u.indexOf(".") && (j[0] += "."); q > r++; ) {
                  j[0] += "0";
                }
              }
              u = j[0] + (1 < j.length ? "e" + j[1] : "");
              69 == i && (u = u.toUpperCase());
              k && 0 <= h && (u = "+" + u);
            } else {
              u = (0 > h ? "-" : "") + "inf", n = Ba;
            }
          }
          for (; u.length < p; ) {
            u = l ? u + " " : n && ("-" == u[0] || "+" == u[0]) ? u[0] + "0" + u.slice(1) : (n ? "0" : " ") + u;
          }
          97 > i && (u = u.toUpperCase());
          u.split("").forEach((function(c) {
            g.push(c.charCodeAt(0));
          }));
        } else {
          if (115 == i) {
            (k = e("i8*")) ? (k = Se(k), t && k.length > q && (k = k.slice(0, q))) : k = be("(null)", pa);
            if (!l) {
              for (; k.length < p--; ) {
                g.push(32);
              }
            }
            g = g.concat(k);
            if (l) {
              for (; k.length < p--; ) {
                g.push(32);
              }
            }
          } else {
            if (99 == i) {
              for (l && g.push(e("i8")); 0 < --p; ) {
                g.push(32);
              }
              l || g.push(e("i8"));
            } else {
              if (110 == i) {
                l = e("i32*"), m[l >> 2] = g.length;
              } else {
                if (37 == i) {
                  g.push(h);
                } else {
                  for (s = j; s < d + 2; s++) {
                    g.push(b[s]);
                  }
                }
              }
            }
          }
        }
      }
      d += 2;
    } else {
      g.push(h), d += 1;
    }
  }
  return g;
}

function gg(c) {
  var e = m[hg >> 2], d = Co(c), c = a;
  var f = C(d, "i8", Cd), d = 1 * d.length;
  0 != d && -1 == jg(e, f, d) && kg[e] && (kg[e].error = pa);
  a = c;
}

var $f = Math.sqrt;

function K(c, e, d, f) {
  da("Assertion failed: " + Jd(f) + ", at: " + [ Jd(c), e, Jd(d) ]);
}

function Id(c, e) {
  var d = 0;
  if (20 <= e) {
    for (var f = c + e; c % 4; ) {
      b[c++] = d;
    }
    0 > d && (d += 256);
    for (var g = c >> 2, h = f >> 2, i = d | d << 8 | d << 16 | d << 24; g < h; ) {
      m[g++] = i;
    }
    for (c = g << 2; c < f; ) {
      b[c++] = d;
    }
  } else {
    for (; e--; ) {
      b[c++] = d;
    }
  }
}

var Gi = Math.sin, Hi = Math.cos, Di = Math.floor;

function aj(c) {
  var e = Bc(), d = Date.now();
  m[c + e[0] >> 2] = Math.floor(d / 1e3);
  m[c + e[1] >> 2] = Math.floor(1e3 * (d - 1e3 * Math.floor(d / 1e3)));
}

function Rn() {
  da("ABORT: undefined, at " + Error().stack);
}

function co() {
  switch (8) {
   case 8:
    return fd;
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
  mo(io);
  return -1;
}

function Xn(c) {
  Do || (Wc = Math.ceil(Wc / fd) * fd, Do = pa);
  var e = Wc;
  0 != c && Vc(c);
  return e;
}

var Do;

qe.unshift({
  Ba: (function() {
    qo = Ba;
    Bo || Ao();
  })
});

re.push({
  Ba: (function() {
    Bo && (0 < kg[2].object.l.buffer.length && kg[2].object.l(10), 0 < kg[3].object.l.buffer.length && kg[3].object.l(10));
  })
});

mo(0);

var ig = C([ 0 ], "i8", A);

Module.Lc = (function(c) {
  function e() {
    for (var c = 0; 3 > c; c++) {
      f.push(0);
    }
  }
  var d = c.length + 1, f = [ C(be("/bin/this.program"), "i8", A) ];
  e();
  for (var g = 0; g < d - 1; g += 1) {
    f.push(C(be(c[g]), "i8", A)), e();
  }
  f.push(0);
  f = C(f, "i32", A);
  return kf();
});

var nf, Eo, Fo, lh, rh, sh, ti, Bi, Ci, zi, Ai, Go, qf, Ho, of, Io, Ti, Si, zn, qe = qe.concat([]), An, Bn, Jo, Ko, Lo, Mo, No, Oo, Po, Qo, Cr, Dr, Er, vj, tj, Mn, Fr, Gr, Hr, Ir, Jr, Kr, Lr, Mr, W, Un;

H.Ab = C([ 37, 102, 10, 0 ], "i8", A);

nf = C([ 0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 0, 34, 0, 0, 0, 36, 0, 0, 0, 36, 0, 0, 0, 36, 0, 0, 0, 36, 0, 0, 0, 36, 0, 0, 0, 36, 0, 0, 0 ], [ "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0 ], A);

C(1, "void*", A);

H.Va = C([ 55, 98, 50, 83, 104, 97, 112, 101, 0 ], "i8", A);

Fo = C(8, "*", A);

H.dc = C([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 108, 108, 105, 115, 105, 111, 110, 47, 98, 50, 67, 111, 108, 108, 105, 100, 101, 69, 100, 103, 101, 46, 99, 112, 112, 0 ], "i8", A);

H.Za = C([ 118, 111, 105, 100, 32, 98, 50, 67, 111, 108, 108, 105, 100, 101, 69, 100, 103, 101, 65, 110, 100, 67, 105, 114, 99, 108, 101, 40, 98, 50, 77, 97, 110, 105, 102, 111, 108, 100, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 69, 100, 103, 101, 83, 104, 97, 112, 101, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 67, 105, 114, 99, 108, 101, 83, 104, 97, 112, 101, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 41, 0 ], "i8", A);

H.Ob = C([ 100, 101, 110, 32, 62, 32, 48, 46, 48, 102, 0 ], "i8", A);

H.xa = C([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 108, 108, 105, 115, 105, 111, 110, 47, 98, 50, 67, 111, 108, 108, 105, 100, 101, 80, 111, 108, 121, 103, 111, 110, 46, 99, 112, 112, 0 ], "i8", A);

H.ab = C([ 118, 111, 105, 100, 32, 98, 50, 70, 105, 110, 100, 73, 110, 99, 105, 100, 101, 110, 116, 69, 100, 103, 101, 40, 98, 50, 67, 108, 105, 112, 86, 101, 114, 116, 101, 120, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 80, 111, 108, 121, 103, 111, 110, 83, 104, 97, 112, 101, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 44, 32, 105, 110, 116, 51, 50, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 80, 111, 108, 121, 103, 111, 110, 83, 104, 97, 112, 101, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 41, 0 ], "i8", A);

H.ja = C([ 48, 32, 60, 61, 32, 101, 100, 103, 101, 49, 32, 38, 38, 32, 101, 100, 103, 101, 49, 32, 60, 32, 112, 111, 108, 121, 49, 45, 62, 109, 95, 118, 101, 114, 116, 101, 120, 67, 111, 117, 110, 116, 0 ], "i8", A);

H.$a = C([ 102, 108, 111, 97, 116, 51, 50, 32, 98, 50, 69, 100, 103, 101, 83, 101, 112, 97, 114, 97, 116, 105, 111, 110, 40, 99, 111, 110, 115, 116, 32, 98, 50, 80, 111, 108, 121, 103, 111, 110, 83, 104, 97, 112, 101, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 44, 32, 105, 110, 116, 51, 50, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 80, 111, 108, 121, 103, 111, 110, 83, 104, 97, 112, 101, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 41, 0 ], "i8", A);

lh = C(1, "i32", A);

rh = C(1, "i32", A);

sh = C(1, "i32", A);

H.c = C([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 108, 108, 105, 115, 105, 111, 110, 47, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 46, 99, 112, 112, 0 ], "i8", A);

H.K = C([ 118, 111, 105, 100, 32, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 80, 114, 111, 120, 121, 58, 58, 83, 101, 116, 40, 99, 111, 110, 115, 116, 32, 98, 50, 83, 104, 97, 112, 101, 32, 42, 44, 32, 105, 110, 116, 51, 50, 41, 0 ], "i8", A);

H.Db = C([ 48, 32, 60, 61, 32, 105, 110, 100, 101, 120, 32, 38, 38, 32, 105, 110, 100, 101, 120, 32, 60, 32, 99, 104, 97, 105, 110, 45, 62, 109, 95, 99, 111, 117, 110, 116, 0 ], "i8", A);

H.Xa = C([ 118, 111, 105, 100, 32, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 40, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 79, 117, 116, 112, 117, 116, 32, 42, 44, 32, 98, 50, 83, 105, 109, 112, 108, 101, 120, 67, 97, 99, 104, 101, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 73, 110, 112, 117, 116, 32, 42, 41, 0 ], "i8", A);

H.da = C([ 102, 108, 111, 97, 116, 51, 50, 32, 98, 50, 83, 105, 109, 112, 108, 101, 120, 58, 58, 71, 101, 116, 77, 101, 116, 114, 105, 99, 40, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", A);

H.ca = C([ 118, 111, 105, 100, 32, 98, 50, 83, 105, 109, 112, 108, 101, 120, 58, 58, 71, 101, 116, 87, 105, 116, 110, 101, 115, 115, 80, 111, 105, 110, 116, 115, 40, 98, 50, 86, 101, 99, 50, 32, 42, 44, 32, 98, 50, 86, 101, 99, 50, 32, 42, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", A);

H.ec = C([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 108, 108, 105, 115, 105, 111, 110, 47, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 46, 104, 0 ], "i8", A);

H.wb = C([ 99, 111, 110, 115, 116, 32, 98, 50, 86, 101, 99, 50, 32, 38, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 80, 114, 111, 120, 121, 58, 58, 71, 101, 116, 86, 101, 114, 116, 101, 120, 40, 105, 110, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", A);

H.mc = C([ 48, 32, 60, 61, 32, 105, 110, 100, 101, 120, 32, 38, 38, 32, 105, 110, 100, 101, 120, 32, 60, 32, 109, 95, 99, 111, 117, 110, 116, 0 ], "i8", A);

H.zb = C([ 98, 50, 86, 101, 99, 50, 32, 98, 50, 83, 105, 109, 112, 108, 101, 120, 58, 58, 71, 101, 116, 83, 101, 97, 114, 99, 104, 68, 105, 114, 101, 99, 116, 105, 111, 110, 40, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", A);

H.ba = C([ 98, 50, 86, 101, 99, 50, 32, 98, 50, 83, 105, 109, 112, 108, 101, 120, 58, 58, 71, 101, 116, 67, 108, 111, 115, 101, 115, 116, 80, 111, 105, 110, 116, 40, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", A);

H.rb = C([ 118, 111, 105, 100, 32, 98, 50, 83, 105, 109, 112, 108, 101, 120, 58, 58, 82, 101, 97, 100, 67, 97, 99, 104, 101, 40, 99, 111, 110, 115, 116, 32, 98, 50, 83, 105, 109, 112, 108, 101, 120, 67, 97, 99, 104, 101, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 80, 114, 111, 120, 121, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 80, 114, 111, 120, 121, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 41, 0 ], "i8", A);

H.wc = C([ 99, 97, 99, 104, 101, 45, 62, 99, 111, 117, 110, 116, 32, 60, 61, 32, 51, 0 ], "i8", A);

H.a = C([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 108, 108, 105, 115, 105, 111, 110, 47, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 46, 99, 112, 112, 0 ], "i8", A);

H.bb = C([ 105, 110, 116, 51, 50, 32, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 65, 108, 108, 111, 99, 97, 116, 101, 78, 111, 100, 101, 40, 41, 0 ], "i8", A);

H.Eb = C([ 109, 95, 110, 111, 100, 101, 67, 111, 117, 110, 116, 32, 61, 61, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", A);

H.G = C([ 118, 111, 105, 100, 32, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 70, 114, 101, 101, 78, 111, 100, 101, 40, 105, 110, 116, 51, 50, 41, 0 ], "i8", A);

H.Wb = C([ 48, 32, 60, 61, 32, 110, 111, 100, 101, 73, 100, 32, 38, 38, 32, 110, 111, 100, 101, 73, 100, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", A);

H.gc = C([ 48, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 111, 117, 110, 116, 0 ], "i8", A);

H.xc = C([ 109, 95, 110, 111, 100, 101, 115, 91, 112, 114, 111, 120, 121, 73, 100, 93, 46, 73, 115, 76, 101, 97, 102, 40, 41, 0 ], "i8", A);

H.H = C([ 98, 111, 111, 108, 32, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 77, 111, 118, 101, 80, 114, 111, 120, 121, 40, 105, 110, 116, 51, 50, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 65, 65, 66, 66, 32, 38, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 86, 101, 99, 50, 32, 38, 41, 0 ], "i8", A);

H.F = C([ 118, 111, 105, 100, 32, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 73, 110, 115, 101, 114, 116, 76, 101, 97, 102, 40, 105, 110, 116, 51, 50, 41, 0 ], "i8", A);

H.Dc = C([ 99, 104, 105, 108, 100, 49, 32, 33, 61, 32, 40, 45, 49, 41, 0 ], "i8", A);

H.Gc = C([ 99, 104, 105, 108, 100, 50, 32, 33, 61, 32, 40, 45, 49, 41, 0 ], "i8", A);

H.e = C([ 105, 110, 116, 51, 50, 32, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 66, 97, 108, 97, 110, 99, 101, 40, 105, 110, 116, 51, 50, 41, 0 ], "i8", A);

H.Ic = C([ 105, 65, 32, 33, 61, 32, 40, 45, 49, 41, 0 ], "i8", A);

H.Jc = C([ 48, 32, 60, 61, 32, 105, 66, 32, 38, 38, 32, 105, 66, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", A);

H.Bb = C([ 48, 32, 60, 61, 32, 105, 67, 32, 38, 38, 32, 105, 67, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", A);

H.Cb = C([ 48, 32, 60, 61, 32, 105, 70, 32, 38, 38, 32, 105, 70, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", A);

H.Ib = C([ 48, 32, 60, 61, 32, 105, 71, 32, 38, 38, 32, 105, 71, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", A);

H.Mb = C([ 109, 95, 110, 111, 100, 101, 115, 91, 67, 45, 62, 112, 97, 114, 101, 110, 116, 93, 46, 99, 104, 105, 108, 100, 50, 32, 61, 61, 32, 105, 65, 0 ], "i8", A);

H.Pb = C([ 48, 32, 60, 61, 32, 105, 68, 32, 38, 38, 32, 105, 68, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", A);

H.Qb = C([ 48, 32, 60, 61, 32, 105, 69, 32, 38, 38, 32, 105, 69, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", A);

H.Rb = C([ 109, 95, 110, 111, 100, 101, 115, 91, 66, 45, 62, 112, 97, 114, 101, 110, 116, 93, 46, 99, 104, 105, 108, 100, 50, 32, 61, 61, 32, 105, 65, 0 ], "i8", A);

ti = C(1, "i32", A);

Bi = C(1, "i32", A);

Ci = C(1, "i32", A);

zi = C(1, "i32", A);

Ai = C(1, "i32", A);

H.p = C([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 108, 108, 105, 115, 105, 111, 110, 47, 98, 50, 84, 105, 109, 101, 79, 102, 73, 109, 112, 97, 99, 116, 46, 99, 112, 112, 0 ], "i8", A);

H.Ya = C([ 118, 111, 105, 100, 32, 98, 50, 84, 105, 109, 101, 79, 102, 73, 109, 112, 97, 99, 116, 40, 98, 50, 84, 79, 73, 79, 117, 116, 112, 117, 116, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 79, 73, 73, 110, 112, 117, 116, 32, 42, 41, 0 ], "i8", A);

H.Nb = C([ 116, 97, 114, 103, 101, 116, 32, 62, 32, 116, 111, 108, 101, 114, 97, 110, 99, 101, 0 ], "i8", A);

H.yb = C([ 102, 108, 111, 97, 116, 51, 50, 32, 98, 50, 83, 101, 112, 97, 114, 97, 116, 105, 111, 110, 70, 117, 110, 99, 116, 105, 111, 110, 58, 58, 69, 118, 97, 108, 117, 97, 116, 101, 40, 105, 110, 116, 51, 50, 44, 32, 105, 110, 116, 51, 50, 44, 32, 102, 108, 111, 97, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", A);

H.xb = C([ 102, 108, 111, 97, 116, 51, 50, 32, 98, 50, 83, 101, 112, 97, 114, 97, 116, 105, 111, 110, 70, 117, 110, 99, 116, 105, 111, 110, 58, 58, 70, 105, 110, 100, 77, 105, 110, 83, 101, 112, 97, 114, 97, 116, 105, 111, 110, 40, 105, 110, 116, 51, 50, 32, 42, 44, 32, 105, 110, 116, 51, 50, 32, 42, 44, 32, 102, 108, 111, 97, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", A);

H.ib = C([ 102, 108, 111, 97, 116, 51, 50, 32, 98, 50, 83, 101, 112, 97, 114, 97, 116, 105, 111, 110, 70, 117, 110, 99, 116, 105, 111, 110, 58, 58, 73, 110, 105, 116, 105, 97, 108, 105, 122, 101, 40, 99, 111, 110, 115, 116, 32, 98, 50, 83, 105, 109, 112, 108, 101, 120, 67, 97, 99, 104, 101, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 80, 114, 111, 120, 121, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 83, 119, 101, 101, 112, 32, 38, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 80, 114, 111, 120, 121, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 83, 119, 101, 101, 112, 32, 38, 44, 32, 102, 108, 111, 97, 116, 51, 50, 41, 0 ], "i8", A);

H.zc = C([ 48, 32, 60, 32, 99, 111, 117, 110, 116, 32, 38, 38, 32, 99, 111, 117, 110, 116, 32, 60, 32, 51, 0 ], "i8", A);

H.qc = C([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 108, 108, 105, 115, 105, 111, 110, 47, 83, 104, 97, 112, 101, 115, 47, 98, 50, 67, 104, 97, 105, 110, 83, 104, 97, 112, 101, 46, 99, 112, 112, 0 ], "i8", A);

H.sb = C([ 118, 111, 105, 100, 32, 98, 50, 67, 104, 97, 105, 110, 83, 104, 97, 112, 101, 58, 58, 71, 101, 116, 67, 104, 105, 108, 100, 69, 100, 103, 101, 40, 98, 50, 69, 100, 103, 101, 83, 104, 97, 112, 101, 32, 42, 44, 32, 105, 110, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", A);

H.rc = C([ 48, 32, 60, 61, 32, 105, 110, 100, 101, 120, 32, 38, 38, 32, 105, 110, 100, 101, 120, 32, 60, 32, 109, 95, 99, 111, 117, 110, 116, 32, 45, 32, 49, 0 ], "i8", A);

qf = C([ 0, 0, 0, 0, 0, 0, 0, 0, 38, 0, 0, 0, 40, 0, 0, 0, 42, 0, 0, 0, 44, 0, 0, 0, 46, 0, 0, 0, 48, 0, 0, 0, 50, 0, 0, 0, 52, 0, 0, 0 ], [ "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0 ], A);

C(1, "void*", A);

H.Ka = C([ 49, 49, 98, 50, 69, 100, 103, 101, 83, 104, 97, 112, 101, 0 ], "i8", A);

Ho = C(12, "*", A);

H.B = C([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 108, 108, 105, 115, 105, 111, 110, 47, 83, 104, 97, 112, 101, 115, 47, 98, 50, 80, 111, 108, 121, 103, 111, 110, 83, 104, 97, 112, 101, 46, 99, 112, 112, 0 ], "i8", A);

H.vb = C([ 118, 105, 114, 116, 117, 97, 108, 32, 98, 111, 111, 108, 32, 98, 50, 80, 111, 108, 121, 103, 111, 110, 83, 104, 97, 112, 101, 58, 58, 82, 97, 121, 67, 97, 115, 116, 40, 98, 50, 82, 97, 121, 67, 97, 115, 116, 79, 117, 116, 112, 117, 116, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 82, 97, 121, 67, 97, 115, 116, 73, 110, 112, 117, 116, 32, 38, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 44, 32, 105, 110, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", A);

H.jc = C([ 48, 46, 48, 102, 32, 60, 61, 32, 108, 111, 119, 101, 114, 32, 38, 38, 32, 108, 111, 119, 101, 114, 32, 60, 61, 32, 105, 110, 112, 117, 116, 46, 109, 97, 120, 70, 114, 97, 99, 116, 105, 111, 110, 0 ], "i8", A);

H.aa = C([ 118, 105, 114, 116, 117, 97, 108, 32, 118, 111, 105, 100, 32, 98, 50, 80, 111, 108, 121, 103, 111, 110, 83, 104, 97, 112, 101, 58, 58, 67, 111, 109, 112, 117, 116, 101, 77, 97, 115, 115, 40, 98, 50, 77, 97, 115, 115, 68, 97, 116, 97, 32, 42, 44, 32, 102, 108, 111, 97, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", A);

H.sc = C([ 109, 95, 118, 101, 114, 116, 101, 120, 67, 111, 117, 110, 116, 32, 62, 61, 32, 51, 0 ], "i8", A);

H.Ac = C([ 97, 114, 101, 97, 32, 62, 32, 49, 46, 49, 57, 50, 48, 57, 50, 57, 48, 69, 45, 48, 55, 70, 0 ], "i8", A);

of = C([ 0, 0, 0, 0, 0, 0, 0, 0, 54, 0, 0, 0, 56, 0, 0, 0, 58, 0, 0, 0, 60, 0, 0, 0, 62, 0, 0, 0, 64, 0, 0, 0, 66, 0, 0, 0, 68, 0, 0, 0 ], [ "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0 ], A);

C(1, "void*", A);

H.La = C([ 49, 52, 98, 50, 80, 111, 108, 121, 103, 111, 110, 83, 104, 97, 112, 101, 0 ], "i8", A);

Io = C(12, "*", A);

Ti = C([ 16, 0, 0, 0, 32, 0, 0, 0, 64, 0, 0, 0, 96, 0, 0, 0, 128, 0, 0, 0, 160, 0, 0, 0, 192, 0, 0, 0, 224, 0, 0, 0, 256, 0, 0, 0, 320, 0, 0, 0, 384, 0, 0, 0, 448, 0, 0, 0, 512, 0, 0, 0, 640, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], A);

Si = C(641, "i8", A);

zn = C(1, "i1", A);

H.j = C([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 109, 109, 111, 110, 47, 98, 50, 66, 108, 111, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 46, 99, 112, 112, 0 ], "i8", A);

H.gb = C([ 98, 50, 66, 108, 111, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 58, 58, 98, 50, 66, 108, 111, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 40, 41, 0 ], "i8", A);

H.Sb = C([ 106, 32, 60, 32, 98, 50, 95, 98, 108, 111, 99, 107, 83, 105, 122, 101, 115, 0 ], "i8", A);

H.s = C([ 118, 111, 105, 100, 32, 42, 98, 50, 66, 108, 111, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 58, 58, 65, 108, 108, 111, 99, 97, 116, 101, 40, 105, 110, 116, 51, 50, 41, 0 ], "i8", A);

H.qa = C([ 48, 32, 60, 32, 115, 105, 122, 101, 0 ], "i8", A);

H.va = C([ 48, 32, 60, 61, 32, 105, 110, 100, 101, 120, 32, 38, 38, 32, 105, 110, 100, 101, 120, 32, 60, 32, 98, 50, 95, 98, 108, 111, 99, 107, 83, 105, 122, 101, 115, 0 ], "i8", A);

H.tc = C([ 98, 108, 111, 99, 107, 67, 111, 117, 110, 116, 32, 42, 32, 98, 108, 111, 99, 107, 83, 105, 122, 101, 32, 60, 61, 32, 98, 50, 95, 99, 104, 117, 110, 107, 83, 105, 122, 101, 0 ], "i8", A);

H.L = C([ 118, 111, 105, 100, 32, 98, 50, 66, 108, 111, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 58, 58, 70, 114, 101, 101, 40, 118, 111, 105, 100, 32, 42, 44, 32, 105, 110, 116, 51, 50, 41, 0 ], "i8", A);

H.n = C([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 109, 109, 111, 110, 47, 98, 50, 83, 116, 97, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 46, 99, 112, 112, 0 ], "i8", A);

H.O = C([ 98, 50, 83, 116, 97, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 58, 58, 126, 98, 50, 83, 116, 97, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 40, 41, 0 ], "i8", A);

H.Tb = C([ 109, 95, 105, 110, 100, 101, 120, 32, 61, 61, 32, 48, 0 ], "i8", A);

H.ac = C([ 109, 95, 101, 110, 116, 114, 121, 67, 111, 117, 110, 116, 32, 61, 61, 32, 48, 0 ], "i8", A);

H.hb = C([ 118, 111, 105, 100, 32, 42, 98, 50, 83, 116, 97, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 58, 58, 65, 108, 108, 111, 99, 97, 116, 101, 40, 105, 110, 116, 51, 50, 41, 0 ], "i8", A);

H.kc = C([ 109, 95, 101, 110, 116, 114, 121, 67, 111, 117, 110, 116, 32, 60, 32, 98, 50, 95, 109, 97, 120, 83, 116, 97, 99, 107, 69, 110, 116, 114, 105, 101, 115, 0 ], "i8", A);

H.N = C([ 118, 111, 105, 100, 32, 98, 50, 83, 116, 97, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 58, 58, 70, 114, 101, 101, 40, 118, 111, 105, 100, 32, 42, 41, 0 ], "i8", A);

H.uc = C([ 109, 95, 101, 110, 116, 114, 121, 67, 111, 117, 110, 116, 32, 62, 32, 48, 0 ], "i8", A);

H.Bc = C([ 112, 32, 61, 61, 32, 101, 110, 116, 114, 121, 45, 62, 100, 97, 116, 97, 0 ], "i8", A);

H.f = C([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 98, 50, 66, 111, 100, 121, 46, 99, 112, 112, 0 ], "i8", A);

H.h = C([ 98, 50, 66, 111, 100, 121, 58, 58, 98, 50, 66, 111, 100, 121, 40, 99, 111, 110, 115, 116, 32, 98, 50, 66, 111, 100, 121, 68, 101, 102, 32, 42, 44, 32, 98, 50, 87, 111, 114, 108, 100, 32, 42, 41, 0 ], "i8", A);

H.Ub = C([ 98, 100, 45, 62, 112, 111, 115, 105, 116, 105, 111, 110, 46, 73, 115, 86, 97, 108, 105, 100, 40, 41, 0 ], "i8", A);

H.cc = C([ 98, 100, 45, 62, 108, 105, 110, 101, 97, 114, 86, 101, 108, 111, 99, 105, 116, 121, 46, 73, 115, 86, 97, 108, 105, 100, 40, 41, 0 ], "i8", A);

H.lc = C([ 98, 50, 73, 115, 86, 97, 108, 105, 100, 40, 98, 100, 45, 62, 97, 110, 103, 108, 101, 41, 0 ], "i8", A);

H.vc = C([ 98, 50, 73, 115, 86, 97, 108, 105, 100, 40, 98, 100, 45, 62, 97, 110, 103, 117, 108, 97, 114, 86, 101, 108, 111, 99, 105, 116, 121, 41, 0 ], "i8", A);

H.Cc = C([ 98, 50, 73, 115, 86, 97, 108, 105, 100, 40, 98, 100, 45, 62, 97, 110, 103, 117, 108, 97, 114, 68, 97, 109, 112, 105, 110, 103, 41, 32, 38, 38, 32, 98, 100, 45, 62, 97, 110, 103, 117, 108, 97, 114, 68, 97, 109, 112, 105, 110, 103, 32, 62, 61, 32, 48, 46, 48, 102, 0 ], "i8", A);

H.Fc = C([ 98, 50, 73, 115, 86, 97, 108, 105, 100, 40, 98, 100, 45, 62, 108, 105, 110, 101, 97, 114, 68, 97, 109, 112, 105, 110, 103, 41, 32, 38, 38, 32, 98, 100, 45, 62, 108, 105, 110, 101, 97, 114, 68, 97, 109, 112, 105, 110, 103, 32, 62, 61, 32, 48, 46, 48, 102, 0 ], "i8", A);

H.Hc = C([ 109, 95, 119, 111, 114, 108, 100, 45, 62, 73, 115, 76, 111, 99, 107, 101, 100, 40, 41, 32, 61, 61, 32, 102, 97, 108, 115, 101, 0 ], "i8", A);

H.kb = C([ 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 98, 50, 66, 111, 100, 121, 58, 58, 67, 114, 101, 97, 116, 101, 70, 105, 120, 116, 117, 114, 101, 40, 99, 111, 110, 115, 116, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 68, 101, 102, 32, 42, 41, 0 ], "i8", A);

H.U = C([ 118, 111, 105, 100, 32, 98, 50, 66, 111, 100, 121, 58, 58, 82, 101, 115, 101, 116, 77, 97, 115, 115, 68, 97, 116, 97, 40, 41, 0 ], "i8", A);

H.Hb = C([ 109, 95, 116, 121, 112, 101, 32, 61, 61, 32, 98, 50, 95, 100, 121, 110, 97, 109, 105, 99, 66, 111, 100, 121, 0 ], "i8", A);

H.Lb = C([ 109, 95, 73, 32, 62, 32, 48, 46, 48, 102, 0 ], "i8", A);

An = C(4, "*", A);

Bn = C(4, "*", A);

H.ub = C([ 118, 111, 105, 100, 32, 42, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 71, 101, 116, 85, 115, 101, 114, 68, 97, 116, 97, 40, 105, 110, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", A);

H.w = C([ 48, 32, 60, 61, 32, 112, 114, 111, 120, 121, 73, 100, 32, 38, 38, 32, 112, 114, 111, 120, 121, 73, 100, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", A);

H.fc = C([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 109, 109, 111, 110, 47, 98, 50, 71, 114, 111, 119, 97, 98, 108, 101, 83, 116, 97, 99, 107, 46, 104, 0 ], "i8", A);

H.fb = C([ 105, 110, 116, 32, 98, 50, 71, 114, 111, 119, 97, 98, 108, 101, 83, 116, 97, 99, 107, 60, 105, 110, 116, 44, 32, 50, 53, 54, 62, 58, 58, 80, 111, 112, 40, 41, 0 ], "i8", A);

H.nc = C([ 109, 95, 99, 111, 117, 110, 116, 32, 62, 32, 48, 0 ], "i8", A);

H.tb = C([ 99, 111, 110, 115, 116, 32, 98, 50, 65, 65, 66, 66, 32, 38, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 71, 101, 116, 70, 97, 116, 65, 65, 66, 66, 40, 105, 110, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", A);

Jo = C([ 0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 72, 0, 0, 0, 74, 0, 0, 0, 76, 0, 0, 0, 78, 0, 0, 0, 80, 0, 0, 0 ], [ "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0 ], A);

C(1, "void*", A);

H.Pa = C([ 49, 55, 98, 50, 67, 111, 110, 116, 97, 99, 116, 76, 105, 115, 116, 101, 110, 101, 114, 0 ], "i8", A);

Ko = C(8, "*", A);

H.v = C([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 98, 50, 70, 105, 120, 116, 117, 114, 101, 46, 99, 112, 112, 0 ], "i8", A);

H.$ = C([ 118, 111, 105, 100, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 58, 58, 68, 101, 115, 116, 114, 111, 121, 40, 98, 50, 66, 108, 111, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 32, 42, 41, 0 ], "i8", A);

H.ea = C([ 109, 95, 112, 114, 111, 120, 121, 67, 111, 117, 110, 116, 32, 61, 61, 32, 48, 0 ], "i8", A);

H.qb = C([ 118, 111, 105, 100, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 58, 58, 67, 114, 101, 97, 116, 101, 80, 114, 111, 120, 105, 101, 115, 40, 98, 50, 66, 114, 111, 97, 100, 80, 104, 97, 115, 101, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 41, 0 ], "i8", A);

H.ka = C([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 98, 50, 73, 115, 108, 97, 110, 100, 46, 99, 112, 112, 0 ], "i8", A);

H.W = C([ 118, 111, 105, 100, 32, 98, 50, 73, 115, 108, 97, 110, 100, 58, 58, 83, 111, 108, 118, 101, 84, 79, 73, 40, 99, 111, 110, 115, 116, 32, 98, 50, 84, 105, 109, 101, 83, 116, 101, 112, 32, 38, 44, 32, 105, 110, 116, 51, 50, 44, 32, 105, 110, 116, 51, 50, 41, 0 ], "i8", A);

H.Fb = C([ 116, 111, 105, 73, 110, 100, 101, 120, 65, 32, 60, 32, 109, 95, 98, 111, 100, 121, 67, 111, 117, 110, 116, 0 ], "i8", A);

H.Vb = C([ 116, 111, 105, 73, 110, 100, 101, 120, 66, 32, 60, 32, 109, 95, 98, 111, 100, 121, 67, 111, 117, 110, 116, 0 ], "i8", A);

H.i = C([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 98, 50, 87, 111, 114, 108, 100, 46, 99, 112, 112, 0 ], "i8", A);

H.mb = C([ 98, 50, 66, 111, 100, 121, 32, 42, 98, 50, 87, 111, 114, 108, 100, 58, 58, 67, 114, 101, 97, 116, 101, 66, 111, 100, 121, 40, 99, 111, 110, 115, 116, 32, 98, 50, 66, 111, 100, 121, 68, 101, 102, 32, 42, 41, 0 ], "i8", A);

H.Gb = C([ 73, 115, 76, 111, 99, 107, 101, 100, 40, 41, 32, 61, 61, 32, 102, 97, 108, 115, 101, 0 ], "i8", A);

H.t = C([ 118, 111, 105, 100, 32, 98, 50, 87, 111, 114, 108, 100, 58, 58, 83, 111, 108, 118, 101, 40, 99, 111, 110, 115, 116, 32, 98, 50, 84, 105, 109, 101, 83, 116, 101, 112, 32, 38, 41, 0 ], "i8", A);

H.oc = C([ 98, 45, 62, 73, 115, 65, 99, 116, 105, 118, 101, 40, 41, 32, 61, 61, 32, 116, 114, 117, 101, 0 ], "i8", A);

H.ya = C([ 115, 116, 97, 99, 107, 67, 111, 117, 110, 116, 32, 60, 32, 115, 116, 97, 99, 107, 83, 105, 122, 101, 0 ], "i8", A);

H.V = C([ 118, 111, 105, 100, 32, 98, 50, 87, 111, 114, 108, 100, 58, 58, 83, 111, 108, 118, 101, 84, 79, 73, 40, 99, 111, 110, 115, 116, 32, 98, 50, 84, 105, 109, 101, 83, 116, 101, 112, 32, 38, 41, 0 ], "i8", A);

H.Ec = C([ 116, 121, 112, 101, 65, 32, 61, 61, 32, 98, 50, 95, 100, 121, 110, 97, 109, 105, 99, 66, 111, 100, 121, 32, 124, 124, 32, 116, 121, 112, 101, 66, 32, 61, 61, 32, 98, 50, 95, 100, 121, 110, 97, 109, 105, 99, 66, 111, 100, 121, 0 ], "i8", A);

H.za = C([ 97, 108, 112, 104, 97, 48, 32, 60, 32, 49, 46, 48, 102, 0 ], "i8", A);

H.la = C([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 108, 108, 105, 115, 105, 111, 110, 47, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 46, 104, 0 ], "i8", A);

H.Yb = C([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 109, 109, 111, 110, 47, 98, 50, 77, 97, 116, 104, 46, 104, 0 ], "i8", A);

H.lb = C([ 118, 111, 105, 100, 32, 98, 50, 83, 119, 101, 101, 112, 58, 58, 65, 100, 118, 97, 110, 99, 101, 40, 102, 108, 111, 97, 116, 51, 50, 41, 0 ], "i8", A);

H.A = C([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 98, 50, 73, 115, 108, 97, 110, 100, 46, 104, 0 ], "i8", A);

H.ob = C([ 118, 111, 105, 100, 32, 98, 50, 73, 115, 108, 97, 110, 100, 58, 58, 65, 100, 100, 40, 98, 50, 74, 111, 105, 110, 116, 32, 42, 41, 0 ], "i8", A);

H.Zb = C([ 109, 95, 106, 111, 105, 110, 116, 67, 111, 117, 110, 116, 32, 60, 32, 109, 95, 106, 111, 105, 110, 116, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", A);

H.pb = C([ 118, 111, 105, 100, 32, 98, 50, 73, 115, 108, 97, 110, 100, 58, 58, 65, 100, 100, 40, 98, 50, 67, 111, 110, 116, 97, 99, 116, 32, 42, 41, 0 ], "i8", A);

H.$b = C([ 109, 95, 99, 111, 110, 116, 97, 99, 116, 67, 111, 117, 110, 116, 32, 60, 32, 109, 95, 99, 111, 110, 116, 97, 99, 116, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", A);

H.nb = C([ 118, 111, 105, 100, 32, 98, 50, 73, 115, 108, 97, 110, 100, 58, 58, 65, 100, 100, 40, 98, 50, 66, 111, 100, 121, 32, 42, 41, 0 ], "i8", A);

H.bc = C([ 109, 95, 98, 111, 100, 121, 67, 111, 117, 110, 116, 32, 60, 32, 109, 95, 98, 111, 100, 121, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", A);

Lo = C([ 0, 0, 0, 0, 0, 0, 0, 0, 82, 0, 0, 0, 84, 0, 0, 0, 86, 0, 0, 0 ], [ "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0 ], A);

C(1, "void*", A);

H.Na = C([ 49, 53, 98, 50, 67, 111, 110, 116, 97, 99, 116, 70, 105, 108, 116, 101, 114, 0 ], "i8", A);

Mo = C(8, "*", A);

No = C([ 0, 0, 0, 0, 0, 0, 0, 0, 88, 0, 0, 0, 90, 0, 0, 0, 92, 0, 0, 0 ], [ "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0 ], A);

C(1, "void*", A);

H.na = C([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 67, 111, 110, 116, 97, 99, 116, 115, 47, 98, 50, 67, 104, 97, 105, 110, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 46, 99, 112, 112, 0 ], "i8", A);

H.Q = C([ 98, 50, 67, 104, 97, 105, 110, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 58, 58, 98, 50, 67, 104, 97, 105, 110, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 40, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 105, 110, 116, 51, 50, 44, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 105, 110, 116, 51, 50, 41, 0 ], "i8", A);

H.Ra = C([ 50, 51, 98, 50, 67, 104, 97, 105, 110, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 0 ], "i8", A);

H.Wa = C([ 57, 98, 50, 67, 111, 110, 116, 97, 99, 116, 0 ], "i8", A);

Oo = C(8, "*", A);

Po = C(12, "*", A);

Qo = C([ 0, 0, 0, 0, 0, 0, 0, 0, 94, 0, 0, 0, 96, 0, 0, 0, 98, 0, 0, 0 ], [ "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0 ], A);

C(1, "void*", A);

H.oa = C([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 67, 111, 110, 116, 97, 99, 116, 115, 47, 98, 50, 67, 104, 97, 105, 110, 65, 110, 100, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 46, 99, 112, 112, 0 ], "i8", A);

H.S = C([ 98, 50, 67, 104, 97, 105, 110, 65, 110, 100, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 58, 58, 98, 50, 67, 104, 97, 105, 110, 65, 110, 100, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 40, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 105, 110, 116, 51, 50, 44, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 105, 110, 116, 51, 50, 41, 0 ], "i8", A);

H.fa = C([ 109, 95, 102, 105, 120, 116, 117, 114, 101, 65, 45, 62, 71, 101, 116, 84, 121, 112, 101, 40, 41, 32, 61, 61, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 101, 95, 99, 104, 97, 105, 110, 0 ], "i8", A);

H.Ta = C([ 50, 52, 98, 50, 67, 104, 97, 105, 110, 65, 110, 100, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 0 ], "i8", A);

Cr = C(12, "*", A);

Dr = C([ 0, 0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 102, 0, 0, 0, 104, 0, 0, 0 ], [ "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0 ], A);

C(1, "void*", A);

H.pa = C([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 67, 111, 110, 116, 97, 99, 116, 115, 47, 98, 50, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 46, 99, 112, 112, 0 ], "i8", A);

H.I = C([ 98, 50, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 58, 58, 98, 50, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 40, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 41, 0 ], "i8", A);

H.Jb = C([ 109, 95, 102, 105, 120, 116, 117, 114, 101, 65, 45, 62, 71, 101, 116, 84, 121, 112, 101, 40, 41, 32, 61, 61, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 101, 95, 99, 105, 114, 99, 108, 101, 0 ], "i8", A);

H.Ma = C([ 49, 53, 98, 50, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 0 ], "i8", A);

Er = C(12, "*", A);

vj = C(192, [ "*", 0, 0, 0, "*", 0, 0, 0, "i8", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i8", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i8", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i8", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i8", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i8", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i8", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i8", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i8", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i8", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i8", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i8", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i8", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i8", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i8", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i8", 0, 0, 0 ], A);

tj = C(1, "i1", A);

H.g = C([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 67, 111, 110, 116, 97, 99, 116, 115, 47, 98, 50, 67, 111, 110, 116, 97, 99, 116, 46, 99, 112, 112, 0 ], "i8", A);

H.Z = C([ 115, 116, 97, 116, 105, 99, 32, 118, 111, 105, 100, 32, 98, 50, 67, 111, 110, 116, 97, 99, 116, 58, 58, 65, 100, 100, 84, 121, 112, 101, 40, 98, 50, 67, 111, 110, 116, 97, 99, 116, 67, 114, 101, 97, 116, 101, 70, 99, 110, 32, 42, 44, 32, 98, 50, 67, 111, 110, 116, 97, 99, 116, 68, 101, 115, 116, 114, 111, 121, 70, 99, 110, 32, 42, 44, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 84, 121, 112, 101, 44, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 84, 121, 112, 101, 41, 0 ], "i8", A);

H.ga = C([ 48, 32, 60, 61, 32, 116, 121, 112, 101, 49, 32, 38, 38, 32, 116, 121, 112, 101, 49, 32, 60, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 101, 95, 116, 121, 112, 101, 67, 111, 117, 110, 116, 0 ], "i8", A);

H.ma = C([ 48, 32, 60, 61, 32, 116, 121, 112, 101, 50, 32, 38, 38, 32, 116, 121, 112, 101, 50, 32, 60, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 101, 95, 116, 121, 112, 101, 67, 111, 117, 110, 116, 0 ], "i8", A);

H.Y = C([ 115, 116, 97, 116, 105, 99, 32, 98, 50, 67, 111, 110, 116, 97, 99, 116, 32, 42, 98, 50, 67, 111, 110, 116, 97, 99, 116, 58, 58, 67, 114, 101, 97, 116, 101, 40, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 105, 110, 116, 51, 50, 44, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 105, 110, 116, 51, 50, 44, 32, 98, 50, 66, 108, 111, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 32, 42, 41, 0 ], "i8", A);

H.u = C([ 115, 116, 97, 116, 105, 99, 32, 118, 111, 105, 100, 32, 98, 50, 67, 111, 110, 116, 97, 99, 116, 58, 58, 68, 101, 115, 116, 114, 111, 121, 40, 98, 50, 67, 111, 110, 116, 97, 99, 116, 32, 42, 44, 32, 98, 50, 66, 108, 111, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 32, 42, 41, 0 ], "i8", A);

H.hc = C([ 115, 95, 105, 110, 105, 116, 105, 97, 108, 105, 122, 101, 100, 32, 61, 61, 32, 116, 114, 117, 101, 0 ], "i8", A);

H.wa = C([ 48, 32, 60, 61, 32, 116, 121, 112, 101, 65, 32, 38, 38, 32, 116, 121, 112, 101, 66, 32, 60, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 101, 95, 116, 121, 112, 101, 67, 111, 117, 110, 116, 0 ], "i8", A);

Mn = C([ 0, 0, 0, 0, 0, 0, 0, 0, 36, 0, 0, 0, 106, 0, 0, 0, 108, 0, 0, 0 ], [ "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0 ], A);

C(1, "void*", A);

H.m = C([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 67, 111, 110, 116, 97, 99, 116, 115, 47, 98, 50, 67, 111, 110, 116, 97, 99, 116, 83, 111, 108, 118, 101, 114, 46, 99, 112, 112, 0 ], "i8", A);

H.eb = C([ 98, 50, 67, 111, 110, 116, 97, 99, 116, 83, 111, 108, 118, 101, 114, 58, 58, 98, 50, 67, 111, 110, 116, 97, 99, 116, 83, 111, 108, 118, 101, 114, 40, 98, 50, 67, 111, 110, 116, 97, 99, 116, 83, 111, 108, 118, 101, 114, 68, 101, 102, 32, 42, 41, 0 ], "i8", A);

H.Kb = C([ 112, 111, 105, 110, 116, 67, 111, 117, 110, 116, 32, 62, 32, 48, 0 ], "i8", A);

H.cb = C([ 118, 111, 105, 100, 32, 98, 50, 67, 111, 110, 116, 97, 99, 116, 83, 111, 108, 118, 101, 114, 58, 58, 73, 110, 105, 116, 105, 97, 108, 105, 122, 101, 86, 101, 108, 111, 99, 105, 116, 121, 67, 111, 110, 115, 116, 114, 97, 105, 110, 116, 115, 40, 41, 0 ], "i8", A);

H.Xb = C([ 109, 97, 110, 105, 102, 111, 108, 100, 45, 62, 112, 111, 105, 110, 116, 67, 111, 117, 110, 116, 32, 62, 32, 48, 0 ], "i8", A);

H.J = C([ 118, 111, 105, 100, 32, 98, 50, 67, 111, 110, 116, 97, 99, 116, 83, 111, 108, 118, 101, 114, 58, 58, 83, 111, 108, 118, 101, 86, 101, 108, 111, 99, 105, 116, 121, 67, 111, 110, 115, 116, 114, 97, 105, 110, 116, 115, 40, 41, 0 ], "i8", A);

H.ic = C([ 112, 111, 105, 110, 116, 67, 111, 117, 110, 116, 32, 61, 61, 32, 49, 32, 124, 124, 32, 112, 111, 105, 110, 116, 67, 111, 117, 110, 116, 32, 61, 61, 32, 50, 0 ], "i8", A);

H.pc = C([ 97, 46, 120, 32, 62, 61, 32, 48, 46, 48, 102, 32, 38, 38, 32, 97, 46, 121, 32, 62, 61, 32, 48, 46, 48, 102, 0 ], "i8", A);

H.jb = C([ 118, 111, 105, 100, 32, 98, 50, 80, 111, 115, 105, 116, 105, 111, 110, 83, 111, 108, 118, 101, 114, 77, 97, 110, 105, 102, 111, 108, 100, 58, 58, 73, 110, 105, 116, 105, 97, 108, 105, 122, 101, 40, 98, 50, 67, 111, 110, 116, 97, 99, 116, 80, 111, 115, 105, 116, 105, 111, 110, 67, 111, 110, 115, 116, 114, 97, 105, 110, 116, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 44, 32, 105, 110, 116, 51, 50, 41, 0 ], "i8", A);

H.yc = C([ 112, 99, 45, 62, 112, 111, 105, 110, 116, 67, 111, 117, 110, 116, 32, 62, 32, 48, 0 ], "i8", A);

Fr = C([ 0, 0, 0, 0, 0, 0, 0, 0, 110, 0, 0, 0, 112, 0, 0, 0, 114, 0, 0, 0 ], [ "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0 ], A);

C(1, "void*", A);

H.ra = C([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 67, 111, 110, 116, 97, 99, 116, 115, 47, 98, 50, 69, 100, 103, 101, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 46, 99, 112, 112, 0 ], "i8", A);

H.P = C([ 98, 50, 69, 100, 103, 101, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 58, 58, 98, 50, 69, 100, 103, 101, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 40, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 41, 0 ], "i8", A);

H.Qa = C([ 50, 50, 98, 50, 69, 100, 103, 101, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 0 ], "i8", A);

Gr = C(12, "*", A);

Hr = C([ 0, 0, 0, 0, 0, 0, 0, 0, 116, 0, 0, 0, 118, 0, 0, 0, 120, 0, 0, 0 ], [ "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0 ], A);

C(1, "void*", A);

H.sa = C([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 67, 111, 110, 116, 97, 99, 116, 115, 47, 98, 50, 69, 100, 103, 101, 65, 110, 100, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 46, 99, 112, 112, 0 ], "i8", A);

H.R = C([ 98, 50, 69, 100, 103, 101, 65, 110, 100, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 58, 58, 98, 50, 69, 100, 103, 101, 65, 110, 100, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 40, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 41, 0 ], "i8", A);

H.ha = C([ 109, 95, 102, 105, 120, 116, 117, 114, 101, 65, 45, 62, 71, 101, 116, 84, 121, 112, 101, 40, 41, 32, 61, 61, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 101, 95, 101, 100, 103, 101, 0 ], "i8", A);

H.Sa = C([ 50, 51, 98, 50, 69, 100, 103, 101, 65, 110, 100, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 0 ], "i8", A);

Ir = C(12, "*", A);

Jr = C([ 0, 0, 0, 0, 0, 0, 0, 0, 122, 0, 0, 0, 124, 0, 0, 0, 126, 0, 0, 0 ], [ "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0 ], A);

C(1, "void*", A);

H.ta = C([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 67, 111, 110, 116, 97, 99, 116, 115, 47, 98, 50, 80, 111, 108, 121, 103, 111, 110, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 46, 99, 112, 112, 0 ], "i8", A);

H.T = C([ 98, 50, 80, 111, 108, 121, 103, 111, 110, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 58, 58, 98, 50, 80, 111, 108, 121, 103, 111, 110, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 40, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 41, 0 ], "i8", A);

H.o = C([ 109, 95, 102, 105, 120, 116, 117, 114, 101, 66, 45, 62, 71, 101, 116, 84, 121, 112, 101, 40, 41, 32, 61, 61, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 101, 95, 99, 105, 114, 99, 108, 101, 0 ], "i8", A);

H.Ua = C([ 50, 53, 98, 50, 80, 111, 108, 121, 103, 111, 110, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 0 ], "i8", A);

Kr = C(12, "*", A);

Lr = C([ 0, 0, 0, 0, 0, 0, 0, 0, 128, 0, 0, 0, 130, 0, 0, 0, 132, 0, 0, 0 ], [ "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0 ], A);

C(1, "void*", A);

H.ua = C([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 67, 111, 110, 116, 97, 99, 116, 115, 47, 98, 50, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 46, 99, 112, 112, 0 ], "i8", A);

H.M = C([ 98, 50, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 58, 58, 98, 50, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 40, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 41, 0 ], "i8", A);

H.ia = C([ 109, 95, 102, 105, 120, 116, 117, 114, 101, 65, 45, 62, 71, 101, 116, 84, 121, 112, 101, 40, 41, 32, 61, 61, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 101, 95, 112, 111, 108, 121, 103, 111, 110, 0 ], "i8", A);

H.z = C([ 109, 95, 102, 105, 120, 116, 117, 114, 101, 66, 45, 62, 71, 101, 116, 84, 121, 112, 101, 40, 41, 32, 61, 61, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 101, 95, 112, 111, 108, 121, 103, 111, 110, 0 ], "i8", A);

H.Oa = C([ 49, 54, 98, 50, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 0 ], "i8", A);

Mr = C(12, "*", A);

H.b = C([ 102, 97, 108, 115, 101, 0 ], "i8", A);

W = C(468, [ "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0 ], A);

Un = C(24, "i32", A);

m[nf + 4 >> 2] = Fo;

Eo = C([ 1, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, 0 ], A);

m[Fo >> 2] = Eo + 8;

m[Fo + 4 >> 2] = H.Va;

Go = C([ 2, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, 0 ], A);

m[qf + 4 >> 2] = Ho;

m[Ho >> 2] = Go + 8;

m[Ho + 4 >> 2] = H.Ka;

m[Ho + 8 >> 2] = Fo;

m[of + 4 >> 2] = Io;

m[Io >> 2] = Go + 8;

m[Io + 4 >> 2] = H.La;

m[Io + 8 >> 2] = Fo;

m[An >> 2] = Lo + 8;

m[Bn >> 2] = Jo + 8;

m[Jo + 4 >> 2] = Ko;

m[Ko >> 2] = Eo + 8;

m[Ko + 4 >> 2] = H.Pa;

m[Lo + 4 >> 2] = Mo;

m[Mo >> 2] = Eo + 8;

m[Mo + 4 >> 2] = H.Na;

m[No + 4 >> 2] = Po;

m[Oo >> 2] = Eo + 8;

m[Oo + 4 >> 2] = H.Wa;

m[Po >> 2] = Go + 8;

m[Po + 4 >> 2] = H.Ra;

m[Po + 8 >> 2] = Oo;

m[Qo + 4 >> 2] = Cr;

m[Cr >> 2] = Go + 8;

m[Cr + 4 >> 2] = H.Ta;

m[Cr + 8 >> 2] = Oo;

m[Dr + 4 >> 2] = Er;

m[Er >> 2] = Go + 8;

m[Er + 4 >> 2] = H.Ma;

m[Er + 8 >> 2] = Oo;

m[Mn + 4 >> 2] = Oo;

m[Fr + 4 >> 2] = Gr;

m[Gr >> 2] = Go + 8;

m[Gr + 4 >> 2] = H.Qa;

m[Gr + 8 >> 2] = Oo;

m[Hr + 4 >> 2] = Ir;

m[Ir >> 2] = Go + 8;

m[Ir + 4 >> 2] = H.Sa;

m[Ir + 8 >> 2] = Oo;

m[Jr + 4 >> 2] = Kr;

m[Kr >> 2] = Go + 8;

m[Kr + 4 >> 2] = H.Ua;

m[Kr + 8 >> 2] = Oo;

m[Lr + 4 >> 2] = Mr;

m[Mr >> 2] = Go + 8;

m[Mr + 4 >> 2] = H.Oa;

m[Mr + 8 >> 2] = Oo;

Kd = [ 0, 0, (function(c, e) {
  var d = m[c >> 2], f = m[e >> 2];
  return d < f ? 1 : d != f ? 0 : m[c + 4 >> 2] < m[e + 4 >> 2];
}), 0, (function(c, e, d, f, g) {
  e = Ri(g, 144);
  0 == e ? c = 0 : (Ln(e, c, 0, d, 0), m[e >> 2] = Dr + 8, 0 != m[m[m[e + 48 >> 2] + 12 >> 2] + 4 >> 2] && K(H.pa, 44, H.I, H.Jb), 0 != m[m[m[e + 52 >> 2] + 12 >> 2] + 4 >> 2] && K(H.pa, 45, H.I, H.o), c = e);
  return c;
}), 0, (function(c, e) {
  Kd[m[m[c >> 2] + 4 >> 2]](c);
  Ui(e, c, 144);
}), 0, (function(c, e, d, f, g) {
  e = Ri(g, 144);
  0 == e ? c = 0 : (Ln(e, c, 0, d, 0), m[e >> 2] = Jr + 8, 2 != m[m[m[e + 48 >> 2] + 12 >> 2] + 4 >> 2] && K(H.ta, 41, H.T, H.ia), 0 != m[m[m[e + 52 >> 2] + 12 >> 2] + 4 >> 2] && K(H.ta, 42, H.T, H.o), c = e);
  return c;
}), 0, (function(c, e) {
  Kd[m[m[c >> 2] + 4 >> 2]](c);
  Ui(e, c, 144);
}), 0, (function(c, e, d, f, g) {
  e = Ri(g, 144);
  0 == e ? c = 0 : (Ln(e, c, 0, d, 0), m[e >> 2] = Lr + 8, 2 != m[m[m[e + 48 >> 2] + 12 >> 2] + 4 >> 2] && K(H.ua, 44, H.M, H.ia), 2 != m[m[m[e + 52 >> 2] + 12 >> 2] + 4 >> 2] && K(H.ua, 45, H.M, H.z), c = e);
  return c;
}), 0, (function(c, e) {
  Kd[m[m[c >> 2] + 4 >> 2]](c);
  Ui(e, c, 144);
}), 0, (function(c, e, d, f, g) {
  e = Ri(g, 144);
  0 == e ? c = 0 : (Ln(e, c, 0, d, 0), m[e >> 2] = Fr + 8, 1 != m[m[m[e + 48 >> 2] + 12 >> 2] + 4 >> 2] && K(H.ra, 41, H.P, H.ha), 0 != m[m[m[e + 52 >> 2] + 12 >> 2] + 4 >> 2] && K(H.ra, 42, H.P, H.o), c = e);
  return c;
}), 0, (function(c, e) {
  Kd[m[m[c >> 2] + 4 >> 2]](c);
  Ui(e, c, 144);
}), 0, (function(c, e, d, f, g) {
  e = Ri(g, 144);
  0 == e ? c = 0 : (Ln(e, c, 0, d, 0), m[e >> 2] = Hr + 8, 1 != m[m[m[e + 48 >> 2] + 12 >> 2] + 4 >> 2] && K(H.sa, 41, H.R, H.ha), 2 != m[m[m[e + 52 >> 2] + 12 >> 2] + 4 >> 2] && K(H.sa, 42, H.R, H.z), c = e);
  return c;
}), 0, (function(c, e) {
  Kd[m[m[c >> 2] + 4 >> 2]](c);
  Ui(e, c, 144);
}), 0, (function(c, e, d, f, g) {
  g = Ri(g, 144);
  0 == g ? c = 0 : (Ln(g, c, e, d, f), m[g >> 2] = No + 8, 3 != m[m[m[g + 48 >> 2] + 12 >> 2] + 4 >> 2] && K(H.na, 43, H.Q, H.fa), 0 != m[m[m[g + 52 >> 2] + 12 >> 2] + 4 >> 2] && K(H.na, 44, H.Q, H.o), c = g);
  return c;
}), 0, (function(c, e) {
  Kd[m[m[c >> 2] + 4 >> 2]](c);
  Ui(e, c, 144);
}), 0, (function(c, e, d, f, g) {
  g = Ri(g, 144);
  0 == g ? c = 0 : (Ln(g, c, e, d, f), m[g >> 2] = Qo + 8, 3 != m[m[m[g + 48 >> 2] + 12 >> 2] + 4 >> 2] && K(H.oa, 43, H.S, H.fa), 2 != m[m[m[g + 52 >> 2] + 12 >> 2] + 4 >> 2] && K(H.oa, 44, H.S, H.z), c = g);
  return c;
}), 0, (function(c, e) {
  Kd[m[m[c >> 2] + 4 >> 2]](c);
  Ui(e, c, 144);
}), 0, Ia(), 0, (function(c) {
  eo(c);
}), 0, (function() {
  da("Pure virtual function called!");
}), 0, Ia(), 0, (function(c) {
  eo(c);
}), 0, (function(c, e) {
  var d = Ri(e, 48);
  0 == d ? d = 0 : pf(d);
  Ji(d, c);
  return d;
}), 0, (function() {
  return 1;
}), 0, (function() {
  return 0;
}), 0, Ki, 0, Li, 0, (function(c, e) {
  var d = a;
  a += 16;
  var f = d + 8;
  z[e >> 2] = 0;
  var g = e + 4;
  J(f, z[c + 12 >> 2] + z[c + 20 >> 2], z[c + 16 >> 2] + z[c + 24 >> 2]);
  Xf(d, .5, z[f >> 2], z[f + 4 >> 2]);
  f = m[d + 4 >> 2];
  m[g >> 2] = m[d >> 2];
  m[g + 4 >> 2] = f;
  z[e + 12 >> 2] = 0;
  a = d;
}), 0, Ia(), 0, (function(c) {
  eo(c);
}), 0, (function(c, e) {
  var d = Ri(e, 152);
  0 == d ? d = 0 : mf(d);
  var f = d;
  Fi(f, c);
  var g = c + 12, h = f + 12, i = m[g + 4 >> 2];
  m[h >> 2] = m[g >> 2];
  m[h + 4 >> 2] = i;
  Pf(f + 20, c + 20, 64);
  Pf(f + 84, c + 84, 64);
  m[f + 148 >> 2] = m[c + 148 >> 2];
  return d;
}), 0, (function() {
  return 1;
}), 0, Ni, 0, Oi, 0, Pi, 0, Qi, 0, Ia(), 0, (function(c) {
  eo(c);
}), 0, Ia(), 0, Ia(), 0, Ia(), 0, Ia(), 0, Ia(), 0, (function(c) {
  eo(c);
}), 0, (function(c, e, d) {
  c = e + 32 >> 1;
  d = d + 32 >> 1;
  e = md[c + 2];
  return e != md[d + 2] | 0 == e ? 0 == (md[d] & md[c + 1]) ? 0 : 0 != (md[d + 1] & md[c]) : 0 < e;
}), 0, (function(c, e, d, f) {
  var g = a;
  a += 48;
  var h = m[m[c + 48 >> 2] + 12 >> 2];
  pf(g);
  Ii(h, g, m[c + 56 >> 2]);
  mg(e, g, d, m[m[c + 52 >> 2] + 12 >> 2], f);
  a = g;
}), 0, Ia(), 0, (function(c) {
  eo(c);
}), 0, (function(c, e, d, f) {
  var g = a;
  a += 48;
  var h = m[m[c + 48 >> 2] + 12 >> 2];
  pf(g);
  Ii(h, g, m[c + 56 >> 2]);
  c = m[m[c + 52 >> 2] + 12 >> 2];
  h = a;
  a += 252;
  ng(h, e, g, d, c, f);
  a = h;
  a = g;
}), 0, Ia(), 0, (function(c) {
  eo(c);
}), 0, (function(c, e, d, f) {
  Tf(e, m[m[c + 48 >> 2] + 12 >> 2], d, m[m[c + 52 >> 2] + 12 >> 2], f);
}), 0, Ia(), 0, (function(c) {
  eo(c);
}), 0, Ia(), 0, (function(c) {
  eo(c);
}), 0, (function(c, e, d, f) {
  mg(e, m[m[c + 48 >> 2] + 12 >> 2], d, m[m[c + 52 >> 2] + 12 >> 2], f);
}), 0, Ia(), 0, (function(c) {
  eo(c);
}), 0, (function(c, e, d, f) {
  var g = m[m[c + 48 >> 2] + 12 >> 2], c = m[m[c + 52 >> 2] + 12 >> 2], h = a;
  a += 252;
  ng(h, e, g, d, c, f);
  a = h;
}), 0, Ia(), 0, (function(c) {
  eo(c);
}), 0, (function(c, e, d, f) {
  Vf(e, m[m[c + 48 >> 2] + 12 >> 2], d, m[m[c + 52 >> 2] + 12 >> 2], f);
}), 0, Ia(), 0, (function(c) {
  eo(c);
}), 0, (function(c, e, d, f) {
  ah(e, m[m[c + 48 >> 2] + 12 >> 2], d, m[m[c + 52 >> 2] + 12 >> 2], f);
}), 0, Ia(), 0, (function(c) {
  eo(c);
}), 0 ];

Module.FUNCTION_TABLE = Kd;

function Nr(c) {
  c = c || Module.arguments;
  pe(qe);
  var e = ra;
  Module._main && (e = Module.Lc(c), pe(re));
  return e;
}

Module.run = Nr;

Module.preRun && Module.preRun();

Module.noInitialRun || Nr();

Module.postRun && Module.postRun();
