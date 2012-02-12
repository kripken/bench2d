function ea(c) {
  throw c;
}

var pa = void 0, ra = null;

function ta() {
  return (function() {});
}

var Aa = [], Ga = typeof process === "object", ab = typeof window === "object", Nb = typeof importScripts === "function", Rb = !ab && !Ga && !Nb;

if (Ga) {
  print = (function(c) {
    process.stdout.write(c + "\n");
  });
  printErr = (function(c) {
    process.stderr.write(c + "\n");
  });
  var Yb = require("fs");
  read = (function(c) {
    var d = Yb.readFileSync(c).toString();
    !d && c[0] != "/" && (c = __dirname.split("/").slice(0, -1).join("/") + "/src/" + c, d = Yb.readFileSync(c).toString());
    return d;
  });
  Aa = process.argv.slice(2);
} else {
  Rb ? (this.read || (read = (function(c) {
    snarf(c);
  })), Aa = this.arguments ? arguments : scriptArgs) : ab ? (print = printErr = (function(c) {
    console.log(c);
  }), read = (function(c) {
    var d = new XMLHttpRequest;
    d.open("GET", c, !1);
    d.send(ra);
    return d.responseText;
  }), this.arguments && (Aa = arguments)) : Nb ? load = importScripts : ea("Unknown runtime environment. Where are we?");
}

function ac(c) {
  eval.call(ra, c);
}

typeof load == "undefined" && typeof read != "undefined" && (load = (function(c) {
  ac(read(c));
}));

typeof printErr === "undefined" && (printErr = ta());

typeof print === "undefined" && (print = printErr);

try {
  this.Module = Module;
} catch (bc) {
  this.Module = Module = {};
}

if (!Module.arguments) {
  Module.arguments = Aa;
}

if (Module.print) {
  print = Module.print;
}

var gc = {
  i1: 0,
  i8: 0,
  i16: 0,
  i32: 0,
  i64: 0
}, hc = {
  "float": 0,
  "double": 0
};

function ic(c) {
  if (lc == 1) {
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
  d || (c[c.length - 1] == "*" ? d = lc : c[0] == "i" && (c = parseInt(c.substr(1)), mc(c % 8 == 0), d = c / 8));
  return d;
}

function rc(c) {
  var d = {};
  c.filter((function(c) {
    return d[c] ? !1 : d[c] = !0;
  }));
}

function uc() {
  var c, d, e;
  d = c = 0;
  var f = [], g = -1;
  e = [ "i32", "i32" ].map((function(e) {
    var i, j;
    e in gc || e in hc || e[e.length - 1] == "*" ? j = i = ic(e) : (isPointerType(e) ? 0 : /^\[\d+\ x\ (.*)\]/.test(e) || /<?{ [^}]* }>?/.test(e) || e[0] == "%") ? (i = Types.types[e].Pc, j = Types.types[e].Oc) : ea("Unclear type in struct: " + e + ", in undefined :: " + dump(Types.types[pa]));
    j = Math.min(j, lc);
    d = Math.max(d, j);
    e = vc(c, j);
    c = e + i;
    g >= 0 && f.push(e - g);
    return g = e;
  }));
  c = vc(c, d);
  f.length == 0 || rc(f);
  return e;
}

function Ic(c) {
  var d = a;
  a += c;
  a = a + 3 >> 2 << 2;
  return d;
}

function Sc(c) {
  var d = Tc;
  Tc += c;
  Tc = Tc + 3 >> 2 << 2;
  if (Tc >= cd) {
    for (; cd <= Tc; ) {
      cd = Math.ceil(2 * cd / gd) * gd;
    }
    var c = b, e = new ArrayBuffer(cd);
    b = new Int8Array(e);
    hd = new Int16Array(e);
    m = new Int32Array(e);
    id = new Uint8Array(e);
    jd = new Uint16Array(e);
    y = new Uint32Array(e);
    z = new Float32Array(e);
    b.set(c);
  }
  return d;
}

function vc(c, d) {
  return Math.ceil(c / (d ? d : 4)) * (d ? d : 4);
}

var lc = 4, rd = {}, sd;

function td(c) {
  print(c + ":\n" + Error().stack);
  ea("Assertion: " + c);
}

function mc(c, d) {
  c || td("Assertion failed: " + d);
}

function ud(c, d, e) {
  e = e || "i8";
  e[e.length - 1] === "*" && (e = "i32");
  switch (e) {
   case "i1":
    b[c] = d;
    break;
   case "i8":
    b[c] = d;
    break;
   case "i16":
    hd[c >> 1] = d;
    break;
   case "i32":
    m[c >> 2] = d;
    break;
   case "i64":
    m[c >> 2] = d;
    break;
   case "float":
    z[c >> 2] = d;
    break;
   case "double":
    z[c >> 2] = d;
    break;
   default:
    td("invalid type for setValue: " + e);
  }
}

Module.setValue = ud;

Module.getValue = (function(c, d) {
  d = d || "i8";
  d[d.length - 1] === "*" && (d = "i32");
  switch (d) {
   case "i1":
    return b[c];
   case "i8":
    return b[c];
   case "i16":
    return hd[c >> 1];
   case "i32":
    return m[c >> 2];
   case "i64":
    return m[c >> 2];
   case "float":
    return z[c >> 2];
   case "double":
    return z[c >> 2];
   default:
    td("invalid type for setValue: " + d);
  }
  return ra;
});

var yd = 1, B = 2;

Module.ALLOC_NORMAL = 0;

Module.ALLOC_STACK = yd;

Module.ALLOC_STATIC = B;

function D(c, d, e) {
  var f, g;
  typeof c === "number" ? (f = !0, g = c) : (f = !1, g = c.length);
  var h = typeof d === "string" ? d : ra, e = [ zd, Ic, Sc ][e === pa ? B : e](Math.max(g, h ? 1 : d.length));
  if (f) {
    return Dd(e, g), e;
  }
  f = 0;
  for (var i; f < g; ) {
    var j = c[f];
    typeof j === "function" && (j = rd.Qc(j));
    i = h || d[f];
    i === 0 ? f++ : (i == "i64" && (i = "i32"), ud(e + f, j, i), f += ic(i));
  }
  return e;
}

Module.allocate = D;

function Ed(c, d) {
  for (var e = typeof d == "undefined", f = "", g = 0, h, i = String.fromCharCode(0); ; ) {
    h = String.fromCharCode(id[c + g]);
    if (e && h == i) {
      break;
    }
    f += h;
    g += 1;
    if (!e && g == d) {
      break;
    }
  }
  return f;
}

Module.Pointer_stringify = Ed;

Module.Array_stringify = (function(c) {
  for (var d = "", e = 0; e < c.length; e++) {
    d += String.fromCharCode(c[e]);
  }
  return d;
});

var Fd, gd = 4096, b, id, hd, jd, m, y, z, a, Td, Tc, Ud = Module.TOTAL_STACK || 5242880, cd = Module.TOTAL_MEMORY || 10485760;

mc(!!Int32Array && !!Float64Array && !!(new Int32Array(1)).subarray && !!(new Int32Array(1)).set, "Cannot fallback to non-typed array case: Code is too specialized");

var Vd = new ArrayBuffer(cd);

b = new Int8Array(Vd);

hd = new Int16Array(Vd);

m = new Int32Array(Vd);

id = new Uint8Array(Vd);

jd = new Uint16Array(Vd);

y = new Uint32Array(Vd);

z = new Float32Array(Vd);

m[0] = 255;

mc(id[0] === 255 && id[3] === 0, "Typed arrays 2 must be run on a little-endian system");

var fe = Wd("(null)");

Tc = fe.length;

for (var ge = 0; ge < fe.length; ge++) {
  b[ge] = fe[ge];
}

Module.HEAP = pa;

Module.HEAP8 = b;

Module.HEAP16 = hd;

Module.HEAP32 = m;

Module.HEAPU8 = id;

Module.HEAPU16 = jd;

Module.HEAPU32 = y;

Module.HEAPF32 = z;

Td = (a = vc(Tc)) + Ud;

var he = vc(Td, 8);

b.subarray(he);

var E = m.subarray(he >> 2), F = z.subarray(he >> 2);

(new Float64Array(b.buffer)).subarray(he >> 3);

Td = he + 8;

Tc = Math.ceil(Td / gd) * gd;

function ie(c) {
  for (; c.length > 0; ) {
    var d = c.shift(), e = d.Ba;
    typeof e === "number" && (e = Fd[e]);
    e(d.Kc === pa ? ra : d.Kc);
  }
}

var je = [], ke = [];

function le(c, d) {
  return Array.prototype.slice.call(b.subarray(c, c + d));
}

Module.Array_copy = le;

Module.TypedArray_copy = (function(c, d) {
  for (var e = new Uint8Array(d), f = 0; f < d; ++f) {
    e[f] = b[c + f];
  }
  return e.buffer;
});

function me(c) {
  for (var d = 0; b[c + d]; ) {
    d++;
  }
  return d;
}

Module.String_len = me;

function Me(c, d) {
  var e = me(c);
  d && e++;
  var f = le(c, e);
  d && (f[e - 1] = 0);
  return f;
}

Module.String_copy = Me;

function Wd(c, d) {
  for (var e = [], f = 0; f < c.length; ) {
    var g = c.charCodeAt(f);
    g > 255 && (g &= 255);
    e.push(g);
    f += 1;
  }
  d || e.push(0);
  return e;
}

Module.intArrayFromString = Wd;

Module.intArrayToString = (function(c) {
  for (var d = [], e = 0; e < c.length; e++) {
    var f = c[e];
    f > 255 && (f &= 255);
    d.push(String.fromCharCode(f));
  }
  return d.join("");
});

var H = [];

function Ne(c, d) {
  return c >= 0 ? c : d <= 32 ? 2 * Math.abs(1 << d - 1) + c : Math.pow(2, d) + c;
}

function Oe(c, d) {
  if (c <= 0) {
    return c;
  }
  var e = d <= 32 ? Math.abs(1 << d - 1) : Math.pow(2, d - 1);
  if (c >= e && (d <= 32 || c > e)) {
    c = -2 * e + c;
  }
  return c;
}

function Pe(c, d) {
  z[c >> 2] += z[d >> 2];
  z[c + 4 >> 2] += z[d + 4 >> 2];
}

function Qe(c) {
  z[c >> 2] = 0;
  z[c + 4 >> 2] = 0;
}

function Re(c, d, e) {
  z[c >> 2] = d;
  z[c + 4 >> 2] = e;
}

function J(c, d, e) {
  z[c >> 2] = d;
  z[c + 4 >> 2] = e;
}

function ff() {
  gf();
  return 0;
}

Module._main = ff;

function hf(c) {
  m[c >> 2] = jf + 8;
  m[c >> 2] = kf + 8;
  m[c + 4 >> 2] = 2;
  z[c + 8 >> 2] = .009999999776482582;
  m[c + 148 >> 2] = 0;
  Qe(c + 12);
}

function lf(c) {
  var d = c >> 2;
  m[c >> 2] = jf + 8;
  m[d] = mf + 8;
  m[d + 1] = 1;
  z[d + 2] = .009999999776482582;
  z[d + 7] = 0;
  z[d + 8] = 0;
  z[d + 9] = 0;
  z[d + 10] = 0;
  b[c + 44] = 0;
  b[c + 45] = 0;
}

function nf(c) {
  var d = c >> 2, e = c + 16;
  m[d + 11] = 0;
  Re(c + 4, 0, 0);
  z[d + 3] = 0;
  Re(e, 0, 0);
  z[d + 6] = 0;
  z[d + 7] = 0;
  z[d + 8] = 0;
  b[c + 36] = 1;
  b[c + 37] = 1;
  b[c + 38] = 0;
  b[c + 39] = 0;
  m[d] = 0;
  b[c + 40] = 1;
  z[d + 12] = 1;
}

function of(c, d) {
  var e, f;
  f = c + 40 >> 2;
  var g = m[f], h = c + 36, i = m[h >> 2];
  e = c + 32 >> 2;
  g == i ? (g = m[e], m[h >> 2] = i << 1, h = zd(i << 3), m[e] = h, Mf(h, g, m[f] << 2), Pf(g), h = m[f]) : h = g;
  m[(h << 2) + m[e] >> 2] = d;
  m[f] += 1;
}

function Qf(c, d, e, f, g) {
  var h = a;
  a += 24;
  var i = h + 8, j = h + 16, k = c + 60;
  m[k >> 2] = 0;
  var l = d + 12;
  Rf(h, e, z[l >> 2], z[d + 16 >> 2]);
  e = f + 12;
  Rf(i, g, z[e >> 2], z[f + 16 >> 2]);
  J(j, z[i >> 2] - z[h >> 2], z[i + 4 >> 2] - z[h + 4 >> 2]);
  g = z[j >> 2];
  j = z[j + 4 >> 2];
  d = z[d + 8 >> 2] + z[f + 8 >> 2];
  g * g + j * j > d * d || (m[c + 56 >> 2] = 0, d = c + 48, f = m[l + 4 >> 2], m[d >> 2] = m[l >> 2], m[d + 4 >> 2] = f, Qe(c + 40), m[k >> 2] = 1, k = m[e + 4 >> 2], m[c >> 2] = m[e >> 2], m[c + 4 >> 2] = k, m[c + 16 >> 2] = 0);
  a = h;
}

Qf.X = 1;

function Rf(c, d, e, f) {
  var g = z[d + 12 >> 2], h = z[d + 8 >> 2];
  J(c, g * e - h * f + z[d >> 2], h * e + g * f + z[d + 4 >> 2]);
}

function Sf(c, d, e, f, g) {
  var h, i, j, k, l, o, p, n, s, q = d >> 2, r = c >> 2, t = a;
  a += 112;
  var u = t + 8, w = t + 16, A = t + 24, x = t + 32, v = t + 40, C = t + 48, I = t + 56, L = t + 64, G = t + 72, P = t + 80, N = t + 88, R = t + 96, Y = t + 104;
  s = c + 60 >> 2;
  m[s] = 0;
  var U = f + 12;
  Rf(t, g, z[U >> 2], z[f + 16 >> 2]);
  Tf(u, e, z[t >> 2], z[t + 4 >> 2]);
  for (var aa = z[q + 2] + z[f + 8 >> 2], ba = m[q + 37], Q = z[u >> 2], S = z[u + 4 >> 2], W = w + 4, M = 0, O = -3.4028234663852886e+38, Z = 0; ; ) {
    if (M < ba) {
      J(w, Q - z[((M << 3) + 20 >> 2) + q], S - z[((M << 3) + 24 >> 2) + q]);
      var X = z[((M << 3) + 84 >> 2) + q] * z[w >> 2] + z[((M << 3) + 88 >> 2) + q] * z[W >> 2];
      if (X > aa) {
        break;
      }
      var T = X > O, ka = T ? M : Z, Ha = T ? X : O;
      M += 1;
      O = Ha;
      Z = ka;
    } else {
      var gb = Z + 1, Va = gb < ba ? gb : 0, ya = (Z << 3) + d + 20, Na = y[ya >> 2], na = y[ya + 4 >> 2], fa = (E[0] = Na, F[0]), ha = (E[0] = na, F[0]), za = (Va << 3) + d + 20, Ra = y[za >> 2], wa = y[za + 4 >> 2], ua = (E[0] = Ra, F[0]), ga = (E[0] = wa, F[0]);
      if (O < 1.1920928955078125e-7) {
        m[s] = 1;
        m[r + 14] = 1;
        var qa = (Z << 3) + d + 84, Oa = c + 40, oa = qa;
        n = oa >> 2;
        var da = m[n], ca = qa + 4;
        p = ca >> 2;
        var Ea = m[p], la = Oa;
        o = la >> 2;
        m[o] = da;
        var xa = Oa + 4;
        l = xa >> 2;
        m[l] = Ea;
        var Xa = c + 48;
        J(x, fa + ua, ha + ga);
        Uf(A, .5, z[x >> 2], z[x + 4 >> 2]);
        var Ya = A, ma = Xa, ia = Ya;
        k = ia >> 2;
        var Pa = m[k], Ia = Ya + 4;
        j = Ia >> 2;
        var Ca = m[j], Sa = ma;
        i = Sa >> 2;
        m[i] = Pa;
        var Fa = ma + 4;
        h = Fa >> 2;
        m[h] = Ca;
        var Ja = U, ja = c, Da = m[Ja + 4 >> 2];
        m[ja >> 2] = m[Ja >> 2];
        m[ja + 4 >> 2] = Da;
      } else {
        J(v, Q - fa, S - ha);
        J(C, ua - fa, ga - ha);
        var va = z[v >> 2] * z[C >> 2] + z[v + 4 >> 2] * z[C + 4 >> 2];
        J(I, Q - ua, S - ga);
        J(L, fa - ua, ha - ga);
        if (va > 0) {
          if (z[I >> 2] * z[L >> 2] + z[I + 4 >> 2] * z[L + 4 >> 2] > 0) {
            J(R, fa + ua, ha + ga);
            Uf(N, .5, z[R >> 2], z[R + 4 >> 2]);
            J(Y, Q - z[N >> 2], S - z[N + 4 >> 2]);
            var sa = (Z << 3) + d + 84;
            if (z[Y >> 2] * z[sa >> 2] + z[Y + 4 >> 2] * z[((Z << 3) + 88 >> 2) + q] > aa) {
              break;
            }
            m[s] = 1;
            m[r + 14] = 1;
            var $ = sa, Ka = c + 40, ob = m[$ + 4 >> 2];
            m[Ka >> 2] = m[$ >> 2];
            m[Ka + 4 >> 2] = ob;
            var ib = N, jb = c + 48, tb = m[ib + 4 >> 2];
            m[jb >> 2] = m[ib >> 2];
            m[jb + 4 >> 2] = tb;
            var kb = U, vb = c, lb = m[kb + 4 >> 2];
            m[vb >> 2] = m[kb >> 2];
            m[vb + 4 >> 2] = lb;
          } else {
            if (Vf(Q, S, ua, ga) > aa * aa) {
              break;
            }
            m[s] = 1;
            m[r + 14] = 1;
            var mb = c + 40;
            J(P, Q - ua, S - ga);
            var Ba = P, sb = mb, oa = Ba;
            n = oa >> 2;
            var Za = m[n], ca = Ba + 4;
            p = ca >> 2;
            var hb = m[p], la = sb;
            o = la >> 2;
            m[o] = Za;
            xa = sb + 4;
            l = xa >> 2;
            m[l] = hb;
            Wf(mb);
            var bb = c + 48, cb = bb;
            m[cb >> 2] = Ra;
            var eb = bb + 4;
            m[eb >> 2] = wa;
            var wb = U, pb = c, ia = wb;
            k = ia >> 2;
            var qb = m[k], Ia = wb + 4;
            j = Ia >> 2;
            var fb = m[j], Sa = pb;
            i = Sa >> 2;
            m[i] = qb;
            Fa = pb + 4;
            h = Fa >> 2;
            m[h] = fb;
          }
        } else {
          if (Vf(Q, S, fa, ha) > aa * aa) {
            break;
          }
          m[s] = 1;
          m[r + 14] = 1;
          var La = c + 40;
          J(G, Q - fa, S - ha);
          var Wa = G, db = La, oa = Wa;
          n = oa >> 2;
          var ub = m[n], ca = Wa + 4;
          p = ca >> 2;
          var Ta = m[p], la = db;
          o = la >> 2;
          m[o] = ub;
          xa = db + 4;
          l = xa >> 2;
          m[l] = Ta;
          Wf(La);
          var Bb = c + 48, cb = Bb;
          m[cb >> 2] = Na;
          eb = Bb + 4;
          m[eb >> 2] = na;
          var xb = U, nb = c, ia = xb;
          k = ia >> 2;
          var yb = m[k], Ia = xb + 4;
          j = Ia >> 2;
          var Ua = m[j], Sa = nb;
          i = Sa >> 2;
          m[i] = yb;
          Fa = nb + 4;
          h = Fa >> 2;
          m[h] = Ua;
        }
      }
      m[r + 4] = 0;
      break;
    }
  }
  a = t;
}

Sf.X = 1;

function Tf(c, d, e, f) {
  e -= z[d >> 2];
  f -= z[d + 4 >> 2];
  var g = z[d + 12 >> 2], d = z[d + 8 >> 2];
  J(c, g * e + d * f, e * -d + g * f);
}

function Uf(c, d, e, f) {
  J(c, e * d, f * d);
}

function Vf(c, d, e, f) {
  var g = a;
  a += 8;
  J(g, c - e, d - f);
  c = z[g >> 2];
  d = z[g + 4 >> 2];
  a = g;
  return c * c + d * d;
}

function Wf(c) {
  var d = z[c >> 2], e = c + 4, f = z[e >> 2], g = Xf(d * d + f * f);
  g < 1.1920928955078125e-7 || (g = 1 / g, z[c >> 2] = d * g, z[e >> 2] = f * g);
}

function gf() {
  var c, d = a;
  a += 104412;
  var e = d + 8, f = d + 103036;
  c = d + 103088;
  var g = d + 103136, h = d + 103144, i = d + 103152, j = d + 103304, k = d + 103312, l = d + 103320, o = d + 103328, p = d + 103336, n = d + 103388;
  J(d, 0, -10);
  Yf(e, d);
  var s = e + 102976, q = (b[s] & 1) == 0;
  a : do {
    if (!q) {
      b[s] = 0;
      var r = m[e + 102952 >> 2];
      if (r != 0) {
        for (;;) {
          if (Zf(r, 1), r = m[r + 96 >> 2], r == 0) {
            break a;
          }
        }
      }
    }
  } while (0);
  nf(f);
  f = $f(e, f);
  lf(c);
  J(g, -40, 0);
  J(h, 40, 0);
  s = c + 12;
  q = m[g + 4 >> 2];
  m[s >> 2] = m[g >> 2];
  m[s + 4 >> 2] = q;
  g = c + 20;
  s = m[h + 4 >> 2];
  m[g >> 2] = m[h >> 2];
  m[g + 4 >> 2] = s;
  b[c + 44] = 0;
  b[c + 45] = 0;
  ag(f, c, 0);
  hf(i);
  m[i + 148 >> 2] = 4;
  Re(i + 20, -.5, -.5);
  Re(i + 28, .5, -.5);
  Re(i + 36, .5, .5);
  Re(i + 44, -.5, .5);
  Re(i + 84, 0, -1);
  Re(i + 92, 1, 0);
  Re(i + 100, 0, 1);
  Re(i + 108, -1, 0);
  Qe(i + 12);
  J(j, -7, .75);
  J(l, .5625, 1);
  J(o, 1.125, 0);
  c = k >> 2;
  h = p + 4;
  for (g = 0; ; ) {
    if (g >= 40) {
      var t = 0;
      break;
    }
    f = m[j + 4 >> 2];
    m[c] = m[j >> 2];
    m[c + 1] = f;
    for (f = g; ; ) {
      if (f >= 40) {
        break;
      }
      nf(p);
      m[p >> 2] = 2;
      s = m[c + 1];
      m[h >> 2] = m[c];
      m[h + 4 >> 2] = s;
      s = $f(e, p);
      ag(s, i, 5);
      Pe(k, o);
      f += 1;
    }
    Pe(j, l);
    g += 1;
  }
  for (;;) {
    if (t >= 64) {
      var u = 0;
      break;
    }
    bg(e);
    t += 1;
  }
  for (;;) {
    if (u >= 256) {
      break;
    }
    i = cg();
    bg(e);
    i = cg() - i;
    m[n + (u << 2) >> 2] = i;
    i = i / 1e3 * 1e3;
    i = (sd = a, a += 8, z[he >> 2] = i, m[sd >> 2] = m[he >> 2], m[sd + 4 >> 2] = m[he + 4 >> 2], sd);
    dg(i);
    u += 1;
  }
  u = m[eg >> 2];
  b[fg] = Ne(10);
  if (gg(u, fg, 1) == -1 && u in hg) {
    hg[u].error = !0;
  }
  for (i = u = 0; ; ) {
    var w = m[n + (i << 2) >> 2] + u;
    i += 1;
    if (i == 256) {
      break;
    } else {
      u = w;
    }
  }
  n = (sd = a, a += 8, z[he >> 2] = w * .00390625 / 1e3 * 1e3, m[sd >> 2] = m[he >> 2], m[sd + 4 >> 2] = m[he + 4 >> 2], sd);
  dg(n);
  ig(e);
  a = d;
}

gf.X = 1;

function jg(c, d, e, f, g) {
  var h, i, j, k = a;
  a += 144;
  var l = k + 8, o = k + 16, p = k + 24, n = k + 32, s = k + 40, q = k + 48, r = k + 56, t = k + 64, u = k + 72, w = k + 80, A = k + 88, x = k + 96, v = k + 104, C = k + 112, I = k + 120, L = k + 128, G = k + 136;
  j = c + 60 >> 2;
  m[j] = 0;
  var P = f + 12;
  Rf(l, g, z[P >> 2], z[f + 16 >> 2]);
  Tf(k, e, z[l >> 2], z[l + 4 >> 2]);
  var g = d + 12, e = y[g >> 2], g = y[g + 4 >> 2], l = (E[0] = e, F[0]), N = (E[0] = g, F[0]), R = d + 20, Y = y[R >> 2], R = y[R + 4 >> 2], U = (E[0] = Y, F[0]), aa = (E[0] = R, F[0]);
  J(o, U - l, aa - N);
  var ba = z[k >> 2], Q = z[k + 4 >> 2];
  J(p, U - ba, aa - Q);
  var S = z[o >> 2], o = z[o + 4 >> 2], p = S * z[p >> 2] + o * z[p + 4 >> 2];
  J(n, ba - l, Q - N);
  var n = S * z[n >> 2] + o * z[n + 4 >> 2], f = z[d + 8 >> 2] + z[f + 8 >> 2], W = n > 0;
  do {
    if (W) {
      if (p > 0) {
        var M = S * S + o * o;
        M > 0 || K(H.dc, 127, H.Za, H.Ob);
        M = 1 / M;
        Uf(v, p, l, N);
        Uf(C, n, U, aa);
        J(x, z[v >> 2] + z[C >> 2], z[v + 4 >> 2] + z[C + 4 >> 2]);
        Uf(A, M, z[x >> 2], z[x + 4 >> 2]);
        J(I, ba - z[A >> 2], Q - z[A + 4 >> 2]);
        M = z[I >> 2];
        i = z[I + 4 >> 2];
        M * M + i * i > f * f || (J(L, -o, S), J(G, ba - l, Q - N), M = z[L >> 2], i = z[L + 4 >> 2], M * z[G >> 2] + i * z[G + 4 >> 2] < 0 && Re(L, -M, -i), Wf(L), m[j] = 1, m[c + 56 >> 2] = 1, h = L, M = c + 40, i = h, i >>= 2, i = m[i], h += 4, h >>= 2, h = m[h], m[M >> 2] = i, m[M + 4 >> 2] = h, M = c + 48, m[M >> 2] = e, m[M + 4 >> 2] = g, M = c + 16, m[M >> 2] = 0, i = M, b[M] = 0, b[i + 1] = 0, b[i + 2] = 1, b[i + 3] = 0, M = P, i = c, h = m[M + 4 >> 2], m[i >> 2] = m[M >> 2], m[i + 4 >> 2] = h);
      } else {
        M = (E[0] = Y, F[0]);
        i = (E[0] = R, F[0]);
        J(t, ba - M, Q - i);
        h = z[t >> 2];
        var O = z[t + 4 >> 2];
        if (h * h + O * O <= f * f) {
          if ((b[d + 45] & 1) != 0 && (h = O = d + 36, O += 4, O = m[O >> 2], h = (E[0] = m[h >> 2], F[0]), O = (E[0] = O, F[0]), J(u, h - M, O - i), J(w, ba - M, Q - i), z[u >> 2] * z[w >> 2] + z[u + 4 >> 2] * z[w + 4 >> 2] > 0)) {
            break;
          }
          m[j] = 1;
          m[c + 56 >> 2] = 0;
          Qe(c + 40);
          i = M = c + 48;
          i >>= 2;
          m[i] = Y;
          h = M + 4;
          h >>= 2;
          m[h] = R;
          M = c + 16;
          m[M >> 2] = 0;
          i = M;
          b[M] = 1;
          b[i + 1] = 0;
          b[i + 2] = 0;
          b[i + 3] = 0;
          i = P;
          h = c;
          M = i;
          i += 4;
          O = m[i >> 2];
          i = h;
          m[i >> 2] = m[M >> 2];
          M = h + 4;
          m[M >> 2] = O;
        }
      }
    } else {
      if (M = (E[0] = e, F[0]), i = (E[0] = g, F[0]), J(s, ba - M, Q - i), h = z[s >> 2], O = z[s + 4 >> 2], h * h + O * O <= f * f) {
        if ((b[d + 44] & 1) != 0 && (h = O = d + 28, O += 4, O = m[O >> 2], h = (E[0] = m[h >> 2], F[0]), O = (E[0] = O, F[0]), J(q, M - h, i - O), J(r, M - ba, i - Q), z[q >> 2] * z[r >> 2] + z[q + 4 >> 2] * z[r + 4 >> 2] > 0)) {
          break;
        }
        m[j] = 1;
        m[c + 56 >> 2] = 0;
        Qe(c + 40);
        i = M = c + 48;
        i >>= 2;
        m[i] = e;
        h = M + 4;
        h >>= 2;
        m[h] = g;
        M = c + 16;
        m[M >> 2] = 0;
        i = M;
        b[M] = 0;
        b[i + 1] = 0;
        b[i + 2] = 0;
        b[i + 3] = 0;
        i = P;
        h = c;
        M = i;
        M = m[M >> 2];
        i += 4;
        O = m[i >> 2];
        i = h;
        m[i >> 2] = M;
        M = h + 4;
        m[M >> 2] = O;
      }
    }
  } while (0);
  a = k;
}

jg.X = 1;

function Sg(c, d, e, f, g, h) {
  var i, j, k, l, o, p, n, s, q, r, t, u, w, A, x, v, C, I, L, G, P, N, R, Y, U, aa, ba, Q, S, W, M, O, Z, X, T, ka, Ha, gb, Va, ya, Na, na, fa, ha, za, Ra, wa, ua, ga, qa, Oa, oa, da, ca, Ea, la, xa, Xa, Ya, ma, ia, Pa, Ia, Ca, Sa, Fa, Ja, ja, Da, va = g >> 2, sa = c >> 2, $ = a;
  a += 488;
  var Ka, ob = $ + 16, ib = $ + 24, jb = $ + 32, tb = $ + 40, kb = $ + 48, vb = $ + 56, lb = $ + 64, mb = $ + 72, Ba = $ + 80, sb = $ + 88, Za = $ + 96, hb = $ + 104, bb = $ + 112, cb = $ + 120, eb = $ + 128, wb = $ + 136, pb = $ + 144, qb = $ + 152, fb = $ + 160, La = $ + 168, Wa = $ + 176, db = $ + 184, ub = $ + 192, Ta = $ + 200, Bb = $ + 208, xb = $ + 216, nb = $ + 224, yb = $ + 232, Ua = $ + 240, Fb = $ + 248, Ma = $ + 256, rb = $ + 264, Db = $ + 272, zb = $ + 280, Eb = $ + 288, Gb = $ + 296, Cb = $ + 304;
  Da = Cb >> 2;
  var Lb = $ + 316;
  ja = Lb >> 2;
  var Ab = $ + 328, $a = $ + 352;
  Ja = $a >> 2;
  var Sb = $ + 408, Ob = $ + 416, Tb = $ + 424, Pb = $ + 448;
  Fa = Pb >> 2;
  var Hb = $ + 472, jc = $ + 480, Zb = c + 132, cc = a;
  a += 16;
  var kc = cc + 8, Uc = $ + 8, Jc = f + 8, sc = f + 12, wc = z[Jc >> 2], xc = z[sc >> 2], Vc = z[h + 8 >> 2], $b = z[h + 12 >> 2];
  z[cc >> 2] = xc * Vc - wc * $b;
  z[cc + 4 >> 2] = xc * $b + wc * Vc;
  var dc = m[cc + 4 >> 2];
  m[Uc >> 2] = m[cc >> 2];
  m[Uc + 4 >> 2] = dc;
  J(kc, z[h >> 2] - z[f >> 2], z[h + 4 >> 2] - z[f + 4 >> 2]);
  Tg($, z[Jc >> 2], z[sc >> 2], z[kc >> 2], z[kc + 4 >> 2]);
  a = cc;
  Sa = Zb >> 2;
  Ca = $ >> 2;
  m[Sa] = m[Ca];
  m[Sa + 1] = m[Ca + 1];
  m[Sa + 2] = m[Ca + 2];
  m[Sa + 3] = m[Ca + 3];
  var nc = c + 148;
  Rf(ob, Zb, z[va + 3], z[va + 4]);
  var ec = m[ob + 4 >> 2];
  m[nc >> 2] = m[ob >> 2];
  m[nc + 4 >> 2] = ec;
  var fc = c + 156, Kc = e + 28, Wc = m[Kc + 4 >> 2];
  m[fc >> 2] = m[Kc >> 2];
  m[fc + 4 >> 2] = Wc;
  var Ub = c + 164, kd = e + 12, dd = m[kd >> 2], Lc = m[kd + 4 >> 2];
  m[Ub >> 2] = dd;
  m[Ub + 4 >> 2] = Lc;
  var Vb = c + 172, Mc = e + 20, Xc = m[Mc >> 2], Yc = m[Mc + 4 >> 2];
  m[Vb >> 2] = Xc;
  m[Vb + 4 >> 2] = Yc;
  var Wb = c + 180, ed = e + 36, yc = m[ed + 4 >> 2];
  m[Wb >> 2] = m[ed >> 2];
  m[Wb + 4 >> 2] = yc;
  var ld = b[e + 44] & 1, Xb = ld != 0, zc = b[e + 45], Nc = (zc & 1) != 0, md = (E[0] = Xc, F[0]), Zc = c + 176, Se = (E[0] = Yc, F[0]), ne = (E[0] = dd, F[0]), oe = c + 168, Te = (E[0] = Lc, F[0]);
  J(ib, md - ne, Se - Te);
  Wf(ib);
  var Qb = c + 196, Xd = z[ib + 4 >> 2], pf = z[ib >> 2];
  Re(Qb, Xd, -pf);
  Ia = nc >> 2;
  var wh = z[Ia];
  Pa = c + 152 >> 2;
  J(jb, wh - z[Ub >> 2], z[Pa] - z[oe >> 2]);
  ia = Qb >> 2;
  var xh = z[ia];
  ma = c + 200 >> 2;
  var Gd = xh * z[jb >> 2] + z[ma] * z[jb + 4 >> 2];
  if (Xb) {
    var kg = c + 160;
    J(tb, z[Ub >> 2] - z[fc >> 2], z[oe >> 2] - z[kg >> 2]);
    Wf(tb);
    var lg = c + 188, mg = z[tb + 4 >> 2], ng = z[tb >> 2];
    Re(lg, mg, -ng);
    var Ue = ng * Xd - mg * pf >= 0;
    J(kb, z[Ia] - z[fc >> 2], z[Pa] - z[kg >> 2]);
    var Hd = Ue, Yd = z[lg >> 2] * z[kb >> 2] + z[sa + 48] * z[kb + 4 >> 2];
  } else {
    Yd = Hd = 0;
  }
  a : do {
    if (Nc) {
      J(vb, z[Wb >> 2] - z[Vb >> 2], z[sa + 46] - z[Zc >> 2]);
      Wf(vb);
      var Ve = c + 204, og = z[vb + 4 >> 2], pg = z[vb >> 2];
      Re(Ve, og, -pg);
      var Qa = pf * og - Xd * pg > 0;
      J(lb, z[Ia] - z[Vb >> 2], z[Pa] - z[Zc >> 2]);
      Ya = Ve >> 2;
      var Mb = z[Ya];
      Xa = c + 208 >> 2;
      var Zd = Mb * z[lb >> 2] + z[Xa] * z[lb + 4 >> 2];
      if ((ld & zc) == 0) {
        var $d = Zd, pe = Qa;
        Ka = 31;
      } else {
        if (Hd & Qa) {
          var ae = Yd < 0 & Gd < 0;
          do {
            if (ae) {
              var Id = Zd >= 0;
              b[c + 248] = Id;
              var Jd = c + 212;
              if (Id) {
                var Kd = Jd;
              } else {
                Ug(mb, z[ia], z[ma]);
                var qf = mb, We = Jd, Ac = qf;
                xa = Ac >> 2;
                var qg = m[xa], $c = qf + 4;
                la = $c >> 2;
                var rg = m[la], ad = We;
                Ea = ad >> 2;
                m[Ea] = qg;
                var bd = We + 4;
                ca = bd >> 2;
                m[ca] = rg;
                var sg = c + 228;
                Ug(Ba, z[ia], z[ma]);
                var rf = Ba, sf = sg, Bc = rf;
                da = Bc >> 2;
                var yh = m[da], Jb = rf + 4;
                oa = Jb >> 2;
                var Cc = m[oa], qe = sf;
                Oa = qe >> 2;
                m[Oa] = yh;
                var re = sf + 4;
                qa = re >> 2;
                m[qa] = Cc;
                var zh = c + 236;
                Ug(sb, z[ia], z[ma]);
                var tg = sb, ug = zh, fd = tg;
                ga = fd >> 2;
                var Ah = m[ga], tc = tg + 4;
                ua = tc >> 2;
                var se = m[ua], Ld = ug;
                wa = Ld >> 2;
                m[wa] = Ah;
                var Md = ug + 4;
                Ra = Md >> 2;
                m[Ra] = se;
                Ka = 58;
                break a;
              }
            } else {
              b[c + 248] = 1, Kd = c + 212;
            }
          } while (0);
          var Oc = Qb, tf = Kd, Dc = Oc;
          za = Dc >> 2;
          var vg = m[za], Ec = Oc + 4;
          ha = Ec >> 2;
          var wg = m[ha], oc = tf;
          fa = oc >> 2;
          m[fa] = vg;
          var pc = tf + 4;
          na = pc >> 2;
          m[na] = wg;
          var uf = c + 188, Nd = c + 228, nd = uf;
          Na = nd >> 2;
          var te = m[Na], od = uf + 4;
          ya = od >> 2;
          var Bh = m[ya], Bc = Nd;
          da = Bc >> 2;
          m[da] = te;
          Jb = Nd + 4;
          oa = Jb >> 2;
          m[oa] = Bh;
          var ue = Ve, ve = c + 236, Ad = ue;
          Va = Ad >> 2;
          var xg = m[Va], Bd = ue + 4;
          gb = Bd >> 2;
          var pd = m[gb], qc = ve;
          Ha = qc >> 2;
          m[Ha] = xg;
          var Od = ve + 4;
          ka = Od >> 2;
          m[ka] = pd;
        } else {
          if (Hd) {
            var yg = Yd < 0;
            do {
              if (yg) {
                if (Gd < 0) {
                  b[c + 248] = 0;
                  var vf = c + 212;
                } else {
                  var wf = Zd >= 0;
                  b[c + 248] = wf;
                  var xf = c + 212;
                  if (wf) {
                    var yf = xf;
                    break;
                  } else {
                    vf = xf;
                  }
                }
                Ug(Za, z[ia], z[ma]);
                var Xe = Za, zf = vf, Kb = Xe;
                T = Kb >> 2;
                var Ye = m[T], Ib = Xe + 4;
                X = Ib >> 2;
                var Ch = m[X], Fc = zf;
                Z = Fc >> 2;
                m[Z] = Ye;
                var Gc = zf + 4;
                O = Gc >> 2;
                m[O] = Ch;
                var Dh = c + 228;
                Ug(hb, z[Ya], z[Xa]);
                var Pd = hb, Qd = Dh, Pc = Pd;
                M = Pc >> 2;
                var zg = m[M], Hc = Pd + 4;
                W = Hc >> 2;
                var Ag = m[W], qd = Qd;
                S = qd >> 2;
                m[S] = zg;
                var vd = Qd + 4;
                Q = vd >> 2;
                m[Q] = Ag;
                var Eh = c + 236;
                Ug(bb, z[ia], z[ma]);
                var Bg = bb, Cg = Eh, Cd = Bg;
                ba = Cd >> 2;
                var Ze = m[ba], Rd = Bg + 4;
                aa = Rd >> 2;
                var Fh = m[aa];
                m[Cg >> 2] = Ze;
                m[Cg + 4 >> 2] = Fh;
                Ka = 58;
                break a;
              } else {
                b[c + 248] = 1, yf = c + 212;
              }
            } while (0);
            var be = Qb, we = yf, Dc = be;
            za = Dc >> 2;
            var $e = m[za], Ec = be + 4;
            ha = Ec >> 2;
            var af = m[ha], oc = we;
            fa = oc >> 2;
            m[fa] = $e;
            pc = we + 4;
            na = pc >> 2;
            m[na] = af;
            var xe = c + 188, Dg = c + 228, nd = xe;
            Na = nd >> 2;
            var Gh = m[Na], od = xe + 4;
            ya = od >> 2;
            var ye = m[ya], Bc = Dg;
            da = Bc >> 2;
            m[da] = Gh;
            Jb = Dg + 4;
            oa = Jb >> 2;
            m[oa] = ye;
            var Eg = c + 236, ce = be, bf = m[ce >> 2], de = be + 4, cf = m[de >> 2], wd = Eg;
            U = wd >> 2;
            m[U] = bf;
            var xd = Eg + 4;
            Y = xd >> 2;
            m[Y] = cf;
          } else {
            if (Qa) {
              var ze = Zd < 0;
              do {
                if (ze) {
                  if (Yd < 0) {
                    b[c + 248] = 0;
                    var Fg = c + 212;
                  } else {
                    var Ae = Gd >= 0;
                    b[c + 248] = Ae;
                    var Be = c + 212;
                    if (Ae) {
                      var Ce = Be;
                      break;
                    } else {
                      Fg = Be;
                    }
                  }
                  Ug(cb, z[ia], z[ma]);
                  var De = cb, Gg = Fg, Kb = De;
                  T = Kb >> 2;
                  var Hh = m[T], Ib = De + 4;
                  X = Ib >> 2;
                  var df = m[X], Fc = Gg;
                  Z = Fc >> 2;
                  m[Z] = Hh;
                  Gc = Gg + 4;
                  O = Gc >> 2;
                  m[O] = df;
                  var ef = c + 228;
                  Ug(eb, z[ia], z[ma]);
                  var Ee = eb, Fe = ef, Pc = Ee;
                  M = Pc >> 2;
                  var Ih = m[M], Hc = Ee + 4;
                  W = Hc >> 2;
                  var Jh = m[W], qd = Fe;
                  S = qd >> 2;
                  m[S] = Ih;
                  vd = Fe + 4;
                  Q = vd >> 2;
                  m[Q] = Jh;
                  var Hg = c + 236;
                  Ug(wb, z[sa + 47], z[sa + 48]);
                  var Ig = wb, Af = Hg, Sd = Ig;
                  R = Sd >> 2;
                  var Jg = m[R], Ge = Ig + 4;
                  N = Ge >> 2;
                  var Po = m[N], Kh = Af;
                  m[Kh >> 2] = Jg;
                  var Lh = Af + 4;
                  m[Lh >> 2] = Po;
                  Ka = 58;
                  break a;
                } else {
                  b[c + 248] = 1, Ce = c + 212;
                }
              } while (0);
              var Kg = Qb, yj = Ce, Dc = Kg;
              za = Dc >> 2;
              var Qo = m[za], Ec = Kg + 4;
              ha = Ec >> 2;
              var Ro = m[ha], oc = yj;
              fa = oc >> 2;
              m[fa] = Qo;
              pc = yj + 4;
              na = pc >> 2;
              m[na] = Ro;
              var zj = c + 228, Mh = Kg, So = m[Mh >> 2], Nh = Kg + 4, To = m[Nh >> 2], He = zj;
              P = He >> 2;
              m[P] = So;
              var Ie = zj + 4;
              G = Ie >> 2;
              m[G] = To;
              var Aj = Ve, Bj = c + 236, qd = Aj;
              S = qd >> 2;
              var Uo = m[S], vd = Aj + 4;
              Q = vd >> 2;
              var Vo = m[Q], Bf = Bj;
              L = Bf >> 2;
              m[L] = Uo;
              var Cf = Bj + 4;
              I = Cf >> 2;
              m[I] = Vo;
            } else {
              var Wo = Yd < 0 | Gd < 0;
              do {
                if (Wo) {
                  b[c + 248] = 0;
                  var Cj = c + 212;
                } else {
                  var Dj = Zd >= 0;
                  b[c + 248] = Dj;
                  var Ej = c + 212;
                  if (Dj) {
                    var Fj = Qb, Gj = Ej, Qc = Fj;
                    C = Qc >> 2;
                    var Oh = y[C], Rc = Fj + 4;
                    v = Rc >> 2;
                    var Ph = y[v], Kb = Gj;
                    T = Kb >> 2;
                    m[T] = Oh;
                    Ib = Gj + 4;
                    X = Ib >> 2;
                    m[X] = Ph;
                    var Hj = c + 228, Df = Hj;
                    x = Df >> 2;
                    m[x] = Oh;
                    var Ef = Hj + 4;
                    A = Ef >> 2;
                    m[A] = Ph;
                    var Ij = c + 236, Ff = Ij;
                    w = Ff >> 2;
                    m[w] = Oh;
                    var Gf = Ij + 4;
                    u = Gf >> 2;
                    m[u] = Ph;
                    Ka = 58;
                    break a;
                  } else {
                    Cj = Ej;
                  }
                }
              } while (0);
              Ug(pb, z[ia], z[ma]);
              var Jj = pb, Kj = Cj, Kb = Jj;
              T = Kb >> 2;
              var Xo = m[T], Ib = Jj + 4;
              X = Ib >> 2;
              var Yo = m[X], Fc = Kj;
              Z = Fc >> 2;
              m[Z] = Xo;
              Gc = Kj + 4;
              O = Gc >> 2;
              m[O] = Yo;
              var Zo = c + 228;
              Ug(qb, z[Ya], z[Xa]);
              var Lj = qb, Mj = Zo, Pc = Lj;
              M = Pc >> 2;
              var $o = m[M], Hc = Lj + 4;
              W = Hc >> 2;
              var ap = m[W], qd = Mj;
              S = qd >> 2;
              m[S] = $o;
              vd = Mj + 4;
              Q = vd >> 2;
              m[Q] = ap;
              var bp = c + 236;
              Ug(fb, z[sa + 47], z[sa + 48]);
              var Nj = fb, Oj = bp, Sd = Nj;
              R = Sd >> 2;
              var cp = m[R], Ge = Nj + 4;
              N = Ge >> 2;
              var dp = m[N], Kh = Oj;
              m[Kh >> 2] = cp;
              Lh = Oj + 4;
              m[Lh >> 2] = dp;
            }
          }
        }
        Ka = 58;
      }
    } else {
      pe = $d = 0, Ka = 31;
    }
  } while (0);
  a : do {
    if (Ka == 31) {
      if (Xb) {
        var Pj = Yd >= 0;
        if (Hd) {
          do {
            if (Pj) {
              b[c + 248] = 1;
              var Qj = c + 212;
            } else {
              var Rj = Gd >= 0;
              b[c + 248] = Rj;
              var Sj = c + 212;
              if (Rj) {
                Qj = Sj;
              } else {
                Ug(Wa, z[ia], z[ma]);
                var Tj = Wa, Uj = Sj, Ac = Tj;
                xa = Ac >> 2;
                var ep = m[xa], $c = Tj + 4;
                la = $c >> 2;
                var fp = m[la], ad = Uj;
                Ea = ad >> 2;
                m[Ea] = ep;
                bd = Uj + 4;
                ca = bd >> 2;
                m[ca] = fp;
                var Vj = Qb, Wj = c + 228, Je = Vj;
                t = Je >> 2;
                var Xj = m[t], Ke = Vj + 4;
                r = Ke >> 2;
                var gp = m[r], Pc = Wj;
                M = Pc >> 2;
                m[M] = Xj;
                Hc = Wj + 4;
                W = Hc >> 2;
                m[W] = gp;
                var hp = c + 236, ip = (E[0] = Xj, F[0]);
                Ug(db, ip, z[ma]);
                var Yj = db, Zj = hp, Hf = Yj;
                q = Hf >> 2;
                var jp = m[q], If = Yj + 4;
                s = If >> 2;
                var kp = m[s], Sd = Zj;
                R = Sd >> 2;
                m[R] = jp;
                Ge = Zj + 4;
                N = Ge >> 2;
                m[N] = kp;
                break a;
              }
            }
          } while (0);
          var $j = Qb, ak = Qj, Dc = $j;
          za = Dc >> 2;
          var lp = m[za], Ec = $j + 4;
          ha = Ec >> 2;
          var mp = m[ha], oc = ak;
          fa = oc >> 2;
          m[fa] = lp;
          pc = ak + 4;
          na = pc >> 2;
          m[na] = mp;
          var bk = c + 188, ck = c + 228, nd = bk;
          Na = nd >> 2;
          var np = m[Na], od = bk + 4;
          ya = od >> 2;
          var op = m[ya], Bc = ck;
          da = Bc >> 2;
          m[da] = np;
          Jb = ck + 4;
          oa = Jb >> 2;
          m[oa] = op;
          var pp = c + 236;
          Ug(La, z[ia], z[ma]);
          var dk = La, ek = pp, wd = dk;
          U = wd >> 2;
          var qp = m[U], xd = dk + 4;
          Y = xd >> 2;
          var rp = m[Y], fd = ek;
          ga = fd >> 2;
          m[ga] = qp;
          tc = ek + 4;
          ua = tc >> 2;
          m[ua] = rp;
        } else {
          do {
            if (Pj) {
              var fk = Gd >= 0;
              b[c + 248] = fk;
              var gk = c + 212;
              if (fk) {
                var hk = Qb, ik = gk, Qc = hk;
                C = Qc >> 2;
                var Qh = y[C], Rc = hk + 4;
                v = Rc >> 2;
                var jk = y[v], Kb = ik;
                T = Kb >> 2;
                m[T] = Qh;
                Ib = ik + 4;
                X = Ib >> 2;
                m[X] = jk;
                var kk = c + 228, Df = kk;
                x = Df >> 2;
                m[x] = Qh;
                Ef = kk + 4;
                A = Ef >> 2;
                m[A] = jk;
                var sp = c + 236, tp = (E[0] = Qh, F[0]);
                Ug(ub, tp, z[ma]);
                var lk = ub, mk = sp, qd = lk;
                S = qd >> 2;
                var up = m[S], vd = lk + 4;
                Q = vd >> 2;
                var vp = m[Q], Bf = mk;
                L = Bf >> 2;
                m[L] = up;
                Cf = mk + 4;
                I = Cf >> 2;
                m[I] = vp;
                break a;
              } else {
                var nk = gk;
              }
            } else {
              b[c + 248] = 0, nk = c + 212;
            }
          } while (0);
          Ug(Ta, z[ia], z[ma]);
          var ok = Ta, pk = nk, Kb = ok;
          T = Kb >> 2;
          var wp = m[T], Ib = ok + 4;
          X = Ib >> 2;
          var xp = m[X], Fc = pk;
          Z = Fc >> 2;
          m[Z] = wp;
          Gc = pk + 4;
          O = Gc >> 2;
          m[O] = xp;
          var qk = Qb, rk = c + 228, He = qk;
          P = He >> 2;
          var yp = m[P], Ie = qk + 4;
          G = Ie >> 2;
          var zp = m[G], Rh = rk;
          m[Rh >> 2] = yp;
          var Sh = rk + 4;
          m[Sh >> 2] = zp;
          var Ap = c + 236;
          Ug(Bb, z[sa + 47], z[sa + 48]);
          var sk = Bb, tk = Ap, fd = sk;
          ga = fd >> 2;
          var Bp = m[ga], tc = sk + 4;
          ua = tc >> 2;
          var Cp = m[ua], Ld = tk;
          wa = Ld >> 2;
          m[wa] = Bp;
          Md = tk + 4;
          Ra = Md >> 2;
          m[Ra] = Cp;
        }
      } else {
        var Lg = Gd >= 0;
        if (Nc) {
          if (pe) {
            do {
              if (Lg) {
                b[c + 248] = 1;
                var uk = c + 212;
              } else {
                var vk = $d >= 0;
                b[c + 248] = vk;
                var wk = c + 212;
                if (vk) {
                  uk = wk;
                } else {
                  Ug(nb, z[ia], z[ma]);
                  var xk = nb, yk = wk, Ac = xk;
                  xa = Ac >> 2;
                  var Dp = m[xa], $c = xk + 4;
                  la = $c >> 2;
                  var Ep = m[la], ad = yk;
                  Ea = ad >> 2;
                  m[Ea] = Dp;
                  bd = yk + 4;
                  ca = bd >> 2;
                  m[ca] = Ep;
                  var Fp = c + 228;
                  Ug(yb, z[ia], z[ma]);
                  var zk = yb, Ak = Fp, Bc = zk;
                  da = Bc >> 2;
                  var Gp = m[da], Jb = zk + 4;
                  oa = Jb >> 2;
                  var Hp = m[oa], qe = Ak;
                  Oa = qe >> 2;
                  m[Oa] = Gp;
                  re = Ak + 4;
                  qa = re >> 2;
                  m[qa] = Hp;
                  var Bk = Qb, Ck = c + 236, qc = Bk;
                  Ha = qc >> 2;
                  var Ip = m[Ha], Od = Bk + 4;
                  ka = Od >> 2;
                  var Jp = m[ka], Cd = Ck;
                  ba = Cd >> 2;
                  m[ba] = Ip;
                  Rd = Ck + 4;
                  aa = Rd >> 2;
                  m[aa] = Jp;
                  break a;
                }
              }
            } while (0);
            var Dk = Qb, Ek = uk, Dc = Dk;
            za = Dc >> 2;
            var Kp = m[za], Ec = Dk + 4;
            ha = Ec >> 2;
            var Lp = m[ha], oc = Ek;
            fa = oc >> 2;
            m[fa] = Kp;
            pc = Ek + 4;
            na = pc >> 2;
            m[na] = Lp;
            var Mp = c + 228;
            Ug(xb, z[ia], z[ma]);
            var Fk = xb, Gk = Mp, He = Fk;
            P = He >> 2;
            var Np = m[P], Ie = Fk + 4;
            G = Ie >> 2;
            var Op = m[G], Rh = Gk;
            m[Rh >> 2] = Np;
            Sh = Gk + 4;
            m[Sh >> 2] = Op;
            var Hk = c + 204, Ik = c + 236, wd = Hk;
            U = wd >> 2;
            var Pp = m[U], xd = Hk + 4;
            Y = xd >> 2;
            var Qp = m[Y], fd = Ik;
            ga = fd >> 2;
            m[ga] = Pp;
            tc = Ik + 4;
            ua = tc >> 2;
            m[ua] = Qp;
          } else {
            do {
              if (Lg) {
                var Jk = $d >= 0;
                b[c + 248] = Jk;
                var Kk = c + 212;
                if (Jk) {
                  var Mg = Qb, Lk = Kk, Qc = Mg;
                  C = Qc >> 2;
                  var Mk = y[C], Rc = Mg + 4;
                  v = Rc >> 2;
                  var Rp = m[v], Kb = Lk;
                  T = Kb >> 2;
                  m[T] = Mk;
                  Ib = Lk + 4;
                  X = Ib >> 2;
                  m[X] = Rp;
                  var Sp = c + 228, Tp = (E[0] = Mk, F[0]);
                  Ug(Ua, Tp, z[ma]);
                  var Nk = Ua, Ok = Sp, Ff = Nk;
                  w = Ff >> 2;
                  var Up = m[w], Gf = Nk + 4;
                  u = Gf >> 2;
                  var Vp = m[u], Jf = Ok;
                  n = Jf >> 2;
                  m[n] = Up;
                  var Kf = Ok + 4;
                  p = Kf >> 2;
                  m[p] = Vp;
                  var Pk = c + 236, Bf = Mg;
                  L = Bf >> 2;
                  var Wp = m[L], Cf = Mg + 4;
                  I = Cf >> 2;
                  var Xp = m[I], Hf = Pk;
                  q = Hf >> 2;
                  m[q] = Wp;
                  If = Pk + 4;
                  s = If >> 2;
                  m[s] = Xp;
                  break a;
                } else {
                  var Qk = Kk;
                }
              } else {
                b[c + 248] = 0, Qk = c + 212;
              }
            } while (0);
            Ug(Fb, z[ia], z[ma]);
            var Rk = Fb, Sk = Qk, Kb = Rk;
            T = Kb >> 2;
            var Yp = m[T], Ib = Rk + 4;
            X = Ib >> 2;
            var Zp = m[X], Fc = Sk;
            Z = Fc >> 2;
            m[Z] = Yp;
            Gc = Sk + 4;
            O = Gc >> 2;
            m[O] = Zp;
            var $p = c + 228;
            Ug(Ma, z[sa + 51], z[sa + 52]);
            var Tk = Ma, Uk = $p, Jf = Tk;
            n = Jf >> 2;
            var aq = m[n], Kf = Tk + 4;
            p = Kf >> 2;
            var bq = m[p], Ad = Uk;
            Va = Ad >> 2;
            m[Va] = aq;
            Bd = Uk + 4;
            gb = Bd >> 2;
            m[gb] = bq;
            var Vk = Qb, Wk = c + 236, fd = Vk;
            ga = fd >> 2;
            var cq = m[ga], tc = Vk + 4;
            ua = tc >> 2;
            var dq = m[ua], Ld = Wk;
            wa = Ld >> 2;
            m[wa] = cq;
            Md = Wk + 4;
            Ra = Md >> 2;
            m[Ra] = dq;
          }
        } else {
          b[c + 248] = Lg;
          var Xk = c + 212;
          if (Lg) {
            var Yk = Qb, Zk = Xk, Qc = Yk;
            C = Qc >> 2;
            var $k = y[C], Rc = Yk + 4;
            v = Rc >> 2;
            var eq = m[v], Kb = Zk;
            T = Kb >> 2;
            m[T] = $k;
            Ib = Zk + 4;
            X = Ib >> 2;
            m[X] = eq;
            var fq = c + 228, gq = (E[0] = $k, F[0]);
            Ug(rb, gq, z[ma]);
            var al = rb, bl = fq, Ff = al;
            w = Ff >> 2;
            var hq = m[w], Gf = al + 4;
            u = Gf >> 2;
            var iq = m[u], Jf = bl;
            n = Jf >> 2;
            m[n] = hq;
            Kf = bl + 4;
            p = Kf >> 2;
            m[p] = iq;
            var jq = c + 236;
            Ug(Db, z[ia], z[ma]);
            var cl = Db, dl = jq, Hf = cl;
            q = Hf >> 2;
            var kq = m[q], If = cl + 4;
            s = If >> 2;
            var lq = m[s], Sd = dl;
            R = Sd >> 2;
            m[R] = kq;
            Ge = dl + 4;
            N = Ge >> 2;
            m[N] = lq;
          } else {
            Ug(zb, z[ia], z[ma]);
            var el = zb, fl = Xk, Ac = el;
            xa = Ac >> 2;
            var mq = m[xa], $c = el + 4;
            la = $c >> 2;
            var nq = m[la], ad = fl;
            Ea = ad >> 2;
            m[Ea] = mq;
            bd = fl + 4;
            ca = bd >> 2;
            m[ca] = nq;
            var gl = Qb, hl = c + 228, Je = gl;
            t = Je >> 2;
            var il = m[t], Ke = gl + 4;
            r = Ke >> 2;
            var jl = m[r], Pc = hl;
            M = Pc >> 2;
            m[M] = il;
            Hc = hl + 4;
            W = Hc >> 2;
            m[W] = jl;
            var kl = c + 236, Ad = kl;
            Va = Ad >> 2;
            m[Va] = il;
            Bd = kl + 4;
            gb = Bd >> 2;
            m[gb] = jl;
          }
        }
      }
    }
  } while (0);
  o = g + 148 >> 2;
  var oq = m[o];
  l = c + 128 >> 2;
  m[l] = oq;
  var pq = m[o] > 0;
  a : do {
    if (pq) {
      for (var ll = Eb, ml = Gb, qq = c + 140, rq = c + 144, ee = 0; ; ) {
        var sq = (ee << 3) + c;
        Rf(Eb, Zb, z[((ee << 3) + 20 >> 2) + va], z[((ee << 3) + 24 >> 2) + va]);
        var nl = sq, Th = ll, tq = m[Th >> 2], Uh = ll + 4, uq = m[Uh >> 2], Df = nl;
        x = Df >> 2;
        m[x] = tq;
        Ef = nl + 4;
        A = Ef >> 2;
        m[A] = uq;
        var vq = (ee << 3) + c + 64;
        Vg(Gb, z[qq >> 2], z[rq >> 2], z[((ee << 3) + 84 >> 2) + va], z[((ee << 3) + 88 >> 2) + va]);
        var ol = vq, ce = ml, wq = m[ce >> 2], de = ml + 4, xq = m[de >> 2], wd = ol;
        U = wd >> 2;
        m[U] = wq;
        xd = ol + 4;
        Y = xd >> 2;
        m[Y] = xq;
        var pl = ee + 1;
        if (pl < m[o]) {
          ee = pl;
        } else {
          break a;
        }
      }
    }
  } while (0);
  k = c + 244 >> 2;
  z[k] = .019999999552965164;
  var ql = d + 60;
  m[ql >> 2] = 0;
  var Ng = a;
  a += 8;
  m[Cb >> 2] = 1;
  m[Cb + 4 >> 2] = b[c + 248] & 1 ^ 1;
  var rl = Cb + 8;
  z[rl >> 2] = 3.4028234663852886e+38;
  var sl = c + 128, yq = m[sl >> 2] > 0;
  a : do {
    if (yq) {
      for (var zq = c + 164, Aq = c + 168, Bq = c + 212, Cq = c + 216, Dq = Ng, Eq = Ng + 4, Og = 0, Vh = 3.4028234663852886e+38; ; ) {
        J(Ng, z[c + (Og << 3) >> 2] - z[zq >> 2], z[c + (Og << 3) + 4 >> 2] - z[Aq >> 2]);
        var tl = z[Bq >> 2] * z[Dq >> 2] + z[Cq >> 2] * z[Eq >> 2];
        var ul = tl < Vh ? z[rl >> 2] = tl : Vh;
        var vl = Og + 1;
        if (vl < m[sl >> 2]) {
          Og = vl, Vh = ul;
        } else {
          break a;
        }
      }
    }
  } while (0);
  a = Ng;
  var Wh = m[Da], Fq = Wh == 0;
  do {
    if (!Fq) {
      var wl = z[Da + 2];
      if (wl <= z[k]) {
        Wg(Lb, c);
        var yl = m[ja];
        if (yl == 0) {
          var Xh = Wh, Le = m[Da + 1];
        } else {
          var zl = z[ja + 2];
          if (zl > z[k]) {
            break;
          }
          zl > wl * .9800000190734863 + .0010000000474974513 ? (Xh = yl, Le = m[ja + 1]) : (Xh = Wh, Le = m[Da + 1]);
        }
        var Gq = Ab, Al = Xh == 1, Bl = d + 56;
        if (Al) {
          m[Bl >> 2] = 1;
          var Yh = m[l], Hq = Yh > 1;
          a : do {
            if (Hq) {
              for (var Cl = z[sa + 53], Dl = z[sa + 54], El = 0, Zh = Cl * z[sa + 16] + Dl * z[sa + 17], Lf = 1; ; ) {
                var Fl = Cl * z[((Lf << 3) + 64 >> 2) + sa] + Dl * z[((Lf << 3) + 68 >> 2) + sa], Gl = Fl < Zh, Hl = Gl ? Lf : El, Iq = Gl ? Fl : Zh, Il = Lf + 1;
                if (Il < Yh) {
                  El = Hl, Zh = Iq, Lf = Il;
                } else {
                  var Pg = Hl;
                  break a;
                }
              }
            } else {
              Pg = 0;
            }
          } while (0);
          var Jl = Pg + 1, Kl = Jl < Yh ? Jl : 0, Ll = (Pg << 3) + c, Ml = Ab, oc = Ll;
          fa = oc >> 2;
          var Jq = m[fa], pc = Ll + 4;
          na = pc >> 2;
          var Kq = m[na];
          m[Ml >> 2] = Jq;
          m[Ml + 4 >> 2] = Kq;
          var Nl = Ab + 8, $h = Nl;
          b[Nl] = 0;
          b[$h + 1] = Pg & 255;
          b[$h + 2] = 1;
          b[$h + 3] = 0;
          var Ol = (Kl << 3) + c, Pl = Ab + 12, qc = Ol;
          Ha = qc >> 2;
          var Lq = m[Ha], Od = Ol + 4;
          ka = Od >> 2;
          var Mq = m[ka], Cd = Pl;
          ba = Cd >> 2;
          m[ba] = Lq;
          Rd = Pl + 4;
          aa = Rd >> 2;
          m[aa] = Mq;
          var Ql = Ab + 20, ai = Ql;
          b[Ql] = 0;
          b[ai + 1] = Kl & 255;
          b[ai + 2] = 1;
          b[ai + 3] = 0;
          var Rl = $a;
          if ((b[c + 248] & 1) == 0) {
            m[Rl >> 2] = 1;
            m[Ja + 1] = 0;
            var Sl = $a + 8, Ac = Vb;
            xa = Ac >> 2;
            var Nq = m[xa], $c = Vb + 4;
            la = $c >> 2;
            var Oq = m[la], ad = Sl;
            Ea = ad >> 2;
            m[Ea] = Nq;
            bd = Sl + 4;
            ca = bd >> 2;
            m[ca] = Oq;
            var Tl = $a + 16, nd = Ub;
            Na = nd >> 2;
            var Pq = m[Na], od = Ub + 4;
            ya = od >> 2;
            var Qq = m[ya], Bc = Tl;
            da = Bc >> 2;
            m[da] = Pq;
            Jb = Tl + 4;
            oa = Jb >> 2;
            m[oa] = Qq;
            var Rq = $a + 24;
            Ug(Sb, z[ia], z[ma]);
            var Ul = Sb, Vl = Rq, wd = Ul;
            U = wd >> 2;
            var Wl = m[U], xd = Ul + 4;
            Y = xd >> 2;
            var Sq = m[Y], fd = Vl;
            ga = fd >> 2;
            m[ga] = Wl;
            tc = Vl + 4;
            ua = tc >> 2;
            var bi = m[ua] = Sq, ci = Wl;
          } else {
            m[Rl >> 2] = 0;
            m[Ja + 1] = 1;
            var Xl = $a + 8, Ac = Ub;
            xa = Ac >> 2;
            var Tq = m[xa], $c = Ub + 4;
            la = $c >> 2;
            var Uq = m[la], ad = Xl;
            Ea = ad >> 2;
            m[Ea] = Tq;
            bd = Xl + 4;
            ca = bd >> 2;
            m[ca] = Uq;
            var Yl = $a + 16, nd = Vb;
            Na = nd >> 2;
            var Vq = m[Na], od = Vb + 4;
            ya = od >> 2;
            var Wq = m[ya], Bc = Yl;
            da = Bc >> 2;
            m[da] = Vq;
            Jb = Yl + 4;
            oa = Jb >> 2;
            m[oa] = Wq;
            var Zl = Qb, $l = $a + 24, Ad = Zl;
            Va = Ad >> 2;
            var am = m[Va], Bd = Zl + 4;
            gb = Bd >> 2;
            var Xq = m[gb], qc = $l;
            Ha = qc >> 2;
            m[Ha] = am;
            Od = $l + 4;
            ka = Od >> 2;
            bi = m[ka] = Xq;
            ci = am;
          }
        } else {
          m[Bl >> 2] = 2;
          var bm = Ab, Qc = Ub;
          C = Qc >> 2;
          var Yq = m[C], Rc = Ub + 4;
          v = Rc >> 2;
          var Zq = m[v], Kb = bm;
          T = Kb >> 2;
          m[T] = Yq;
          Ib = bm + 4;
          X = Ib >> 2;
          m[X] = Zq;
          var cm = Ab + 8, di = cm;
          b[cm] = 0;
          var dm = Le & 255;
          b[di + 1] = dm;
          b[di + 2] = 0;
          b[di + 3] = 1;
          var em = Ab + 12, qe = Vb;
          Oa = qe >> 2;
          var $q = m[Oa], re = Vb + 4;
          qa = re >> 2;
          var ar = m[qa];
          m[em >> 2] = $q;
          m[em + 4 >> 2] = ar;
          var fm = Ab + 20, ei = fm;
          b[fm] = 0;
          b[ei + 1] = dm;
          b[ei + 2] = 0;
          b[ei + 3] = 1;
          m[Ja] = Le;
          var gm = Le + 1, hm = gm < m[l] ? gm : 0;
          m[Ja + 1] = hm;
          var im = (Le << 3) + c, jm = $a + 8, br = m[im + 4 >> 2];
          m[jm >> 2] = m[im >> 2];
          m[jm + 4 >> 2] = br;
          var km = (hm << 3) + c, lm = $a + 16, cr = m[km + 4 >> 2];
          m[lm >> 2] = m[km >> 2];
          m[lm + 4 >> 2] = cr;
          var mm = (Le << 3) + c + 64, nm = $a + 24, om = m[mm >> 2], dr = m[mm + 4 >> 2];
          m[nm >> 2] = om;
          bi = m[nm + 4 >> 2] = dr;
          ci = om;
        }
        var er = (E[0] = bi, F[0]), fr = (E[0] = ci, F[0]), pm = $a + 32, fi = $a + 24;
        Re(pm, er, -fr);
        var qm = $a + 44, rm = pm, sm = $a + 36;
        Ug(Ob, z[rm >> 2], z[sm >> 2]);
        var tm = Ob, um = qm, Je = tm;
        t = Je >> 2;
        var vm = m[t], Ke = tm + 4;
        r = Ke >> 2;
        var wm = m[r], Pc = um;
        M = Pc >> 2;
        m[M] = vm;
        Hc = um + 4;
        W = Hc >> 2;
        m[W] = wm;
        var xm = $a + 8, ym = z[rm >> 2], zm = z[sm >> 2];
        j = xm >> 2;
        var gr = z[j];
        i = $a + 12 >> 2;
        var Am = ym * gr + zm * z[i];
        z[Ja + 10] = Am;
        var hr = (E[0] = vm, F[0]), ir = (E[0] = wm, F[0]), Bm = $a + 52;
        z[Bm >> 2] = hr * z[Ja + 4] + ir * z[Ja + 5];
        var Cm = Tb, Dm = $a;
        if (Xg(Cm, Gq, ym, zm, Am, m[Dm >> 2]) >= 2 && Xg(Pb, Cm, z[qm >> 2], z[Ja + 12], z[Bm >> 2], m[Ja + 1]) >= 2) {
          var Em = d + 40;
          if (Al) {
            var Fm = fi, Gm = Em, Qc = Fm;
            C = Qc >> 2;
            var jr = m[C], Rc = Fm + 4;
            v = Rc >> 2;
            var kr = m[v], Kb = Gm;
            T = Kb >> 2;
            m[T] = jr;
            Ib = Gm + 4;
            X = Ib >> 2;
            m[X] = kr;
            var Hm = xm, Im = d + 48, Mh = Hm, Jm = m[Mh >> 2], Nh = Hm + 4, lr = m[Nh >> 2], He = Im;
            P = He >> 2;
            m[P] = Jm;
            Ie = Im + 4;
            G = Ie >> 2;
            m[G] = lr;
            var Qg = jc, Km = z[Fa], Lm = z[Fa + 1], mr = (E[0] = Jm, F[0]);
            J(Hb, Km - mr, Lm - z[i]);
            var Mm = fi, Nm = $a + 28, Om = Hb, Pm = Hb + 4;
            if (z[Mm >> 2] * z[Om >> 2] + z[Nm >> 2] * z[Pm >> 2] > z[k]) {
              var Nf = 0;
            } else {
              Tf(jc, Zb, Km, Lm);
              var Qm = d, Qc = Qg;
              C = Qc >> 2;
              var nr = m[C], Rc = Qg + 4;
              v = Rc >> 2;
              var or = m[v], Kb = Qm;
              T = Kb >> 2;
              m[T] = nr;
              Ib = Qm + 4;
              X = Ib >> 2;
              m[X] = or;
              m[d + 16 >> 2] = m[Fa + 2];
              Nf = 1;
            }
            var Rm = z[Fa + 3], Sm = z[Fa + 4];
            J(Hb, Rm - z[j], Sm - z[i]);
            if (z[Mm >> 2] * z[Om >> 2] + z[Nm >> 2] * z[Pm >> 2] > z[k]) {
              var Rg = Nf;
            } else {
              var pr = d + Nf * 20;
              Tf(jc, Zb, Rm, Sm);
              var Tm = pr, Dc = Qg;
              za = Dc >> 2;
              var qr = m[za], Ec = Qg + 4;
              ha = Ec >> 2;
              var rr = m[ha], oc = Tm;
              fa = oc >> 2;
              m[fa] = qr;
              pc = Tm + 4;
              na = pc >> 2;
              m[na] = rr;
              m[(d + 16 >> 2) + (Nf * 5 | 0)] = m[Fa + 5];
              Rg = Nf + 1;
            }
          } else {
            var Um = m[Dm >> 2], Vm = (Um << 3) + g + 84, Wm = Em, sr = m[Vm >> 2], tr = m[Vm + 4 >> 2], Th = Wm;
            m[Th >> 2] = sr;
            Uh = Wm + 4;
            m[Uh >> 2] = tr;
            var Xm = (Um << 3) + g + 20, Ym = d + 48, Je = Xm;
            t = Je >> 2;
            var ur = m[t], Ke = Xm + 4;
            r = Ke >> 2;
            var vr = m[r], Pc = Ym;
            M = Pc >> 2;
            m[M] = ur;
            Hc = Ym + 4;
            W = Hc >> 2;
            m[W] = vr;
            J(Hb, z[Fa] - z[j], z[Fa + 1] - z[i]);
            var Zm = fi, $m = $a + 28, an = Hb, bn = Hb + 4;
            if (z[Zm >> 2] * z[an >> 2] + z[$m >> 2] * z[bn >> 2] > z[k]) {
              var Of = 0;
            } else {
              var cn = Pb, dn = d, Qc = cn;
              C = Qc >> 2;
              var wr = m[C], Rc = cn + 4;
              v = Rc >> 2;
              var xr = m[v], Kb = dn;
              T = Kb >> 2;
              m[T] = wr;
              Ib = dn + 4;
              X = Ib >> 2;
              m[X] = xr;
              var en = Pb + 8, gi = en, fn = d + 16, hi = fn;
              b[hi + 2] = b[gi + 3];
              b[hi + 3] = b[gi + 2];
              b[fn] = b[gi + 1];
              b[hi + 1] = b[en];
              Of = 1;
            }
            var gn = Pb + 12;
            J(Hb, z[gn >> 2] - z[j], z[Fa + 4] - z[i]);
            if (z[Zm >> 2] * z[an >> 2] + z[$m >> 2] * z[bn >> 2] > z[k]) {
              Rg = Of;
            } else {
              var hn = gn, jn = d + Of * 20, Dc = hn;
              za = Dc >> 2;
              var yr = m[za], Ec = hn + 4;
              ha = Ec >> 2;
              var zr = m[ha], oc = jn;
              fa = oc >> 2;
              m[fa] = yr;
              pc = jn + 4;
              na = pc >> 2;
              m[na] = zr;
              var kn = Pb + 20, ii = kn, ln = d + Of * 20 + 16, ji = ln;
              b[ji + 2] = b[ii + 3];
              b[ji + 3] = b[ii + 2];
              b[ln] = b[ii + 1];
              b[ji + 1] = b[kn];
              Rg = Of + 1;
            }
          }
          m[ql >> 2] = Rg;
        }
      }
    }
  } while (0);
  a = $;
}

Sg.X = 1;

function Ug(c, d, e) {
  Re(c, -d, -e);
}

function Vg(c, d, e, f, g) {
  J(c, e * f - d * g, d * f + e * g);
}

function Wg(c, d) {
  var e, f, g, h, i, j = a;
  a += 48;
  var k, l = j + 8, o = j + 16, p = j + 24, n = j + 32, s = j + 40;
  i = c >> 2;
  m[i] = 0;
  h = c + 4 >> 2;
  m[h] = -1;
  g = c + 8 >> 2;
  z[g] = -3.4028234663852886e+38;
  f = d + 216 >> 2;
  var q = -z[f];
  e = d + 212 >> 2;
  J(j, q, z[e]);
  var q = d + 128, r = d + 244, t = d + 164, u = d + 168, w = l + 4, A = o + 4, x = d + 172, v = d + 176, C = p + 4, I = z[j >> 2], L = z[j + 4 >> 2], G = d + 228, P = d + 232, N = s + 4, R = d + 236, Y = d + 240, U = n + 4, aa = 0;
  for (k = -3.4028234663852886e+38; ; ) {
    if (aa >= m[q >> 2]) {
      break;
    }
    Ug(l, z[d + (aa << 3) + 64 >> 2], z[d + (aa << 3) + 68 >> 2]);
    var ba = (aa << 3) + d, Q = (aa << 3) + d + 4;
    J(o, z[ba >> 2] - z[t >> 2], z[Q >> 2] - z[u >> 2]);
    var S = z[l >> 2], W = z[w >> 2], M = S * z[o >> 2] + W * z[A >> 2];
    J(p, z[ba >> 2] - z[x >> 2], z[Q >> 2] - z[v >> 2]);
    ba = M < S * z[p >> 2] + W * z[C >> 2] ? M : S * z[p >> 2] + W * z[C >> 2];
    if (ba > z[r >> 2]) {
      m[i] = 2;
      m[h] = aa;
      z[g] = ba;
      break;
    } else {
      if (S * I + W * L < 0) {
        if (J(s, S - z[G >> 2], W - z[P >> 2]), z[s >> 2] * z[e] + z[N >> 2] * z[f] >= -.03490658849477768 & ba > k) {
          k = 7;
        } else {
          var O = k;
          k = 8;
        }
      } else {
        J(n, S - z[R >> 2], W - z[Y >> 2]), z[n >> 2] * z[e] + z[U >> 2] * z[f] >= -.03490658849477768 & ba > k ? k = 7 : (O = k, k = 8);
      }
      k == 7 && (m[i] = 2, m[h] = aa, O = z[g] = ba);
      aa += 1;
      k = O;
    }
  }
  a = j;
}

Wg.X = 1;

function Tg(c, d, e, f, g) {
  J(c, e * f + d * g, f * -d + e * g);
}

function Yg(c, d, e, f, g) {
  var h, i, j, k, l, o, p, n, s, q, r, t, u = a;
  a += 192;
  var w = u + 4, A = u + 8, x = u + 24, v = u + 40, C = u + 64, I = u + 72, L = u + 80, G = u + 88, P = u + 96, N = u + 104, R = u + 112, Y = u + 120, U = u + 128, aa = u + 152;
  t = aa >> 2;
  var ba = u + 176, Q = u + 184, S = c + 60;
  m[S >> 2] = 0;
  var W = z[d + 8 >> 2] + z[f + 8 >> 2];
  m[u >> 2] = 0;
  var M = Zg(u, d, e, f, g);
  if (M <= W) {
    m[w >> 2] = 0;
    var O = Zg(w, f, g, d, e);
    if (O <= W) {
      r = A >> 2;
      if (O > M * .9800000190734863 + .0010000000474974513) {
        q = g >> 2;
        m[r] = m[q];
        m[r + 1] = m[q + 1];
        m[r + 2] = m[q + 2];
        m[r + 3] = m[q + 3];
        s = x >> 2;
        n = e >> 2;
        m[s] = m[n];
        m[s + 1] = m[n + 1];
        m[s + 2] = m[n + 2];
        m[s + 3] = m[n + 3];
        var Z = m[w >> 2];
        m[c + 56 >> 2] = 2;
        var X = 1, T = Z, ka = d, Ha = f;
      } else {
        p = e >> 2;
        m[r] = m[p];
        m[r + 1] = m[p + 1];
        m[r + 2] = m[p + 2];
        m[r + 3] = m[p + 3];
        o = x >> 2;
        l = g >> 2;
        m[o] = m[l];
        m[o + 1] = m[l + 1];
        m[o + 2] = m[l + 2];
        m[o + 3] = m[l + 3];
        var gb = m[u >> 2];
        m[c + 56 >> 2] = 1;
        X = 0;
        T = gb;
        ka = f;
        Ha = d;
      }
      $g(v, Ha, A, T, ka, x);
      var Va = T + 1, ya = Va < m[Ha + 148 >> 2] ? Va : 0, Na = (T << 3) + Ha + 20, na = m[Na + 4 >> 2], fa = (E[0] = m[Na >> 2], F[0]), ha = (E[0] = na, F[0]), za = (ya << 3) + Ha + 20, Ra = m[za + 4 >> 2], wa = (E[0] = m[za >> 2], F[0]), ua = (E[0] = Ra, F[0]);
      J(C, wa - fa, ua - ha);
      Wf(C);
      var ga = z[C >> 2], qa = z[C + 4 >> 2];
      J(I, qa, ga * -1);
      J(G, fa + wa, ha + ua);
      Uf(L, .5, z[G >> 2], z[G + 4 >> 2]);
      Vg(P, z[A + 8 >> 2], z[A + 12 >> 2], ga, qa);
      var Oa = z[P >> 2], oa = z[P + 4 >> 2];
      J(N, oa, Oa * -1);
      Rf(R, A, fa, ha);
      var da = m[R + 4 >> 2], ca = (E[0] = m[R >> 2], F[0]), Ea = (E[0] = da, F[0]);
      Rf(Y, A, wa, ua);
      var la = m[Y >> 2], xa = m[Y + 4 >> 2], Xa = z[N >> 2], Ya = z[N + 4 >> 2], ma = Xa * ca + Ya * Ea, ia = W - (Oa * ca + oa * Ea);
      Ug(ba, Oa, oa);
      if (Xg(U, v, z[ba >> 2], z[ba + 4 >> 2], ia, T) >= 2) {
        var Pa = (E[0] = xa, F[0]), Ia = (E[0] = la, F[0]);
        if (Xg(aa, U, Oa, oa, Oa * Ia + oa * Pa + W, ya) >= 2) {
          var Ca = c + 40, Sa = I;
          k = Sa >> 2;
          var Fa = m[k], Ja = I + 4;
          j = Ja >> 2;
          var ja = m[j], Da = Ca;
          i = Da >> 2;
          m[i] = Fa;
          var va = Ca + 4;
          h = va >> 2;
          m[h] = ja;
          var sa = c + 48, $ = m[L + 4 >> 2];
          m[sa >> 2] = m[L >> 2];
          m[sa + 4 >> 2] = $;
          var Ka = z[t], ob = z[t + 1], ib = Xa * Ka + Ya * ob - ma > W;
          if (X == 0) {
            if (ib) {
              var jb = 0;
            } else {
              Tf(Q, x, Ka, ob);
              var tb = Q, kb = Q + 4, vb = m[kb >> 2], lb = c;
              m[lb >> 2] = m[tb >> 2];
              var mb = c + 4;
              m[mb >> 2] = vb;
              m[c + 16 >> 2] = m[t + 2];
              jb = 1;
            }
            var Ba = z[t + 3], sb = z[t + 4];
            if (Xa * Ba + Ya * sb - ma > W) {
              var Za = jb;
            } else {
              var hb = c + jb * 20;
              Tf(Q, x, Ba, sb);
              Sa = Q;
              k = Sa >> 2;
              var bb = m[k], Ja = Q + 4;
              j = Ja >> 2;
              var cb = m[j], Da = hb;
              i = Da >> 2;
              m[i] = bb;
              va = hb + 4;
              h = va >> 2;
              m[h] = cb;
              m[(c + 16 >> 2) + (jb * 5 | 0)] = m[t + 5];
              Za = jb + 1;
            }
          } else {
            if (ib) {
              var eb = 0;
            } else {
              Tf(Q, x, Ka, ob);
              var tb = Q, wb = m[tb >> 2], kb = Q + 4, pb = m[kb >> 2], lb = c;
              m[lb >> 2] = wb;
              mb = c + 4;
              m[mb >> 2] = pb;
              var qb = c + 16, fb = y[t + 2];
              m[qb >> 2] = fb;
              var La = fb >>> 24 & 255, Wa = fb >>> 16 & 255, db = fb & 255, ub = qb + 1, Ta = qb + 2, Bb = qb + 3;
              b[qb] = fb >>> 8 & 255;
              b[ub] = db;
              b[Ta] = La;
              b[Bb] = Wa;
              eb = 1;
            }
            var xb = z[t + 3], nb = z[t + 4];
            if (Xa * xb + Ya * nb - ma > W) {
              Za = eb;
            } else {
              var yb = c + eb * 20;
              Tf(Q, x, xb, nb);
              Sa = Q;
              k = Sa >> 2;
              var Ua = m[k], Ja = Q + 4;
              j = Ja >> 2;
              var Fb = m[j], Da = yb;
              i = Da >> 2;
              m[i] = Ua;
              va = yb + 4;
              h = va >> 2;
              m[h] = Fb;
              var Ma = c + eb * 20 + 16, rb = y[t + 5];
              m[Ma >> 2] = rb;
              var Db = rb >>> 24 & 255, zb = rb >>> 16 & 255, Eb = rb & 255, Gb = Ma + 1, Cb = Ma + 2, Lb = Ma + 3;
              b[Ma] = rb >>> 8 & 255;
              b[Gb] = Eb;
              b[Cb] = Db;
              b[Lb] = zb;
              Za = eb + 1;
            }
          }
          m[S >> 2] = Za;
        }
      }
    }
  }
  a = u;
}

Yg.X = 1;

function Zg(c, d, e, f, g) {
  var h = d >> 2, i = a;
  a += 32;
  var j = i + 8, k = i + 16, l = i + 24, o = m[h + 37];
  Rf(j, g, z[f + 12 >> 2], z[f + 16 >> 2]);
  Rf(k, e, z[h + 3], z[h + 4]);
  J(i, z[j >> 2] - z[k >> 2], z[j + 4 >> 2] - z[k + 4 >> 2]);
  Tg(l, z[e + 8 >> 2], z[e + 12 >> 2], z[i >> 2], z[i + 4 >> 2]);
  j = o > 0;
  a : do {
    if (j) {
      for (var k = z[l >> 2], p = z[l + 4 >> 2], n = 0, s = -3.4028234663852886e+38, q = 0; ; ) {
        var r = z[((q << 3) + 84 >> 2) + h] * k + z[((q << 3) + 88 >> 2) + h] * p, t = r > s, n = t ? q : n, s = t ? r : s;
        q += 1;
        if (q == o) {
          var u = n;
          break a;
        }
      }
    } else {
      u = 0;
    }
  } while (0);
  h = ah(d, e, u, f, g);
  l = (u > 0 ? u : o) - 1;
  j = ah(d, e, l, f, g);
  k = u + 1;
  k = k < o ? k : 0;
  p = ah(d, e, k, f, g);
  n = j > h & j > p;
  a : do {
    if (n) {
      s = j;
      for (q = l; ; ) {
        if (r = (q > 0 ? q : o) - 1, t = ah(d, e, r, f, g), t > s) {
          s = t, q = r;
        } else {
          var w = s, A = q;
          break a;
        }
      }
    } else {
      if (p > h) {
        s = p;
        for (q = k; ; ) {
          if (r = q + 1, r = r < o ? r : 0, t = ah(d, e, r, f, g), t > s) {
            s = t, q = r;
          } else {
            w = s;
            A = q;
            break a;
          }
        }
      } else {
        w = h, A = u;
      }
    }
  } while (0);
  m[c >> 2] = A;
  a = i;
  return w;
}

Zg.X = 1;

function $g(c, d, e, f, g, h) {
  var i = g >> 2, g = a;
  a += 32;
  var j = g + 8, k = g + 16, l = g + 24, o = m[i + 37];
  (f > -1 ? m[d + 148 >> 2] > f ? 3 : 2 : 2) == 2 && K(H.xa, 151, H.ab, H.ja);
  Vg(j, z[e + 8 >> 2], z[e + 12 >> 2], z[d + (f << 3) + 84 >> 2], z[d + (f << 3) + 88 >> 2]);
  Tg(g, z[h + 8 >> 2], z[h + 12 >> 2], z[j >> 2], z[j + 4 >> 2]);
  d = o > 0;
  a : do {
    if (d) {
      for (var e = z[g >> 2], j = z[g + 4 >> 2], p = 0, n = 3.4028234663852886e+38, s = 0; ; ) {
        var q = e * z[((s << 3) + 84 >> 2) + i] + j * z[((s << 3) + 88 >> 2) + i], r = q < n, p = r ? s : p, n = r ? q : n;
        s += 1;
        if (s == o) {
          var t = p;
          break a;
        }
      }
    } else {
      t = 0;
    }
  } while (0);
  d = t + 1;
  o = d < o ? d : 0;
  Rf(k, h, z[((t << 3) + 20 >> 2) + i], z[((t << 3) + 24 >> 2) + i]);
  d = m[k + 4 >> 2];
  m[c >> 2] = m[k >> 2];
  m[c + 4 >> 2] = d;
  f &= 255;
  k = c + 8;
  b[k] = f;
  b[k + 1] = t & 255;
  b[k + 2] = 1;
  b[k + 3] = 0;
  t = c + 12;
  Rf(l, h, z[((o << 3) + 20 >> 2) + i], z[((o << 3) + 24 >> 2) + i]);
  h = m[l + 4 >> 2];
  m[t >> 2] = m[l >> 2];
  m[t + 4 >> 2] = h;
  c += 20;
  b[c] = f;
  b[c + 1] = o & 255;
  b[c + 2] = 1;
  b[c + 3] = 0;
  a = g;
}

$g.X = 1;

function ah(c, d, e, f, g) {
  f >>= 2;
  var h = c >> 2, c = a;
  a += 40;
  var i = c + 8, j = c + 16, k = c + 24, l = c + 32, o = m[f + 37];
  (e > -1 ? m[h + 37] > e ? 3 : 2 : 2) == 2 && K(H.xa, 32, H.$a, H.ja);
  Vg(c, z[d + 8 >> 2], z[d + 12 >> 2], z[((e << 3) + 84 >> 2) + h], z[((e << 3) + 88 >> 2) + h]);
  var p = z[c >> 2], n = z[c + 4 >> 2];
  Tg(i, z[g + 8 >> 2], z[g + 12 >> 2], p, n);
  var s = o > 0;
  a : do {
    if (s) {
      for (var q = z[i >> 2], r = z[i + 4 >> 2], t = 0, u = 3.4028234663852886e+38, w = 0; ; ) {
        var A = z[((w << 3) + 20 >> 2) + f] * q + z[((w << 3) + 24 >> 2) + f] * r, x = A < u, t = x ? w : t, u = x ? A : u;
        w += 1;
        if (w == o) {
          var v = t;
          break a;
        }
      }
    } else {
      v = 0;
    }
  } while (0);
  Rf(j, d, z[((e << 3) + 20 >> 2) + h], z[((e << 3) + 24 >> 2) + h]);
  Rf(k, g, z[((v << 3) + 20 >> 2) + f], z[((v << 3) + 24 >> 2) + f]);
  J(l, z[k >> 2] - z[j >> 2], z[k + 4 >> 2] - z[j + 4 >> 2]);
  d = z[l >> 2] * p + z[l + 4 >> 2] * n;
  a = c;
  return d;
}

ah.X = 1;

function bh(c) {
  m[c + 16 >> 2] = 0;
  m[c + 20 >> 2] = 0;
  z[c + 24 >> 2] = 0;
}

function ch(c, d, e, f, g, h) {
  var i, j, k, l, o, p = d >> 2, n = a;
  a += 240;
  var s = n + 8, q = n + 16, r = n + 24, t = n + 32, u = n + 40, w = n + 48, A = n + 56, x = n + 64, v = n + 72, C = n + 80, I = n + 88, L = n + 96, G = n + 104, P = n + 112, N = n + 120, R = n + 128, Y = n + 136, U = n + 144, aa = n + 152, ba = n + 160, Q = n + 168, S = n + 176, W = n + 184, M = n + 192, O = n + 200, Z = n + 208, X = n + 216, T = n + 224, ka = n + 232;
  o = d + 60 >> 2;
  var Ha = m[o] == 0;
  a : do {
    if (!Ha) {
      var gb = m[p + 14];
      if (gb == 0) {
        var Va = c;
        Re(Va, 1, 0);
        Rf(n, e, z[p + 12], z[p + 13]);
        Rf(s, g, z[p], z[p + 1]);
        var ya = z[n >> 2], Na = z[n + 4 >> 2], na = z[s >> 2], fa = z[s + 4 >> 2];
        if (Vf(ya, Na, na, fa) > 1.4210854715202004e-14) {
          J(q, na - ya, fa - Na);
          var ha = q, za = c, Ra = m[ha + 4 >> 2];
          m[za >> 2] = m[ha >> 2];
          m[za + 4 >> 2] = Ra;
          Wf(Va);
        }
        var wa = c, ua = c + 4;
        Uf(t, f, z[wa >> 2], z[ua >> 2]);
        J(r, ya + z[t >> 2], Na + z[t + 4 >> 2]);
        Uf(w, h, z[wa >> 2], z[ua >> 2]);
        J(u, na - z[w >> 2], fa - z[w + 4 >> 2]);
        var ga = c + 8;
        J(x, z[r >> 2] + z[u >> 2], z[r + 4 >> 2] + z[u + 4 >> 2]);
        Uf(A, .5, z[x >> 2], z[x + 4 >> 2]);
        var qa = A, Oa = ga, oa = qa;
        l = oa >> 2;
        var da = m[l], ca = qa + 4;
        k = ca >> 2;
        var Ea = m[k], la = Oa;
        j = la >> 2;
        m[j] = da;
        var xa = Oa + 4;
        i = xa >> 2;
        m[i] = Ea;
      } else {
        if (gb == 1) {
          Vg(v, z[e + 8 >> 2], z[e + 12 >> 2], z[p + 10], z[p + 11]);
          var Xa = v, Ya = c, ma = Xa, ia = Xa + 4, Pa = m[ia >> 2], Ia = Ya;
          m[Ia >> 2] = m[ma >> 2];
          var Ca = Ya + 4;
          m[Ca >> 2] = Pa;
          Rf(C, e, z[p + 12], z[p + 13]);
          if (m[o] > 0) {
            for (var Sa = Y, Fa = I, Ja = I + 4, ja = z[C >> 2], Da = z[C + 4 >> 2], va = P, sa = P + 4, $ = c, Ka = c + 4, ob = G, ib = G + 4, jb = R, tb = R + 4, kb = L, vb = L + 4, lb = N, mb = N + 4, Ba = U, sb = U + 4, Za = 0; ; ) {
              Rf(I, g, z[p + (Za * 5 | 0)], z[p + (Za * 5 | 0) + 1]);
              var hb = z[Fa >> 2], bb = z[Ja >> 2];
              J(P, hb - ja, bb - Da);
              var cb = z[$ >> 2], eb = z[Ka >> 2];
              Uf(G, f - (z[va >> 2] * cb + z[sa >> 2] * eb), cb, eb);
              J(L, hb + z[ob >> 2], bb + z[ib >> 2]);
              Uf(R, h, z[$ >> 2], z[Ka >> 2]);
              J(N, hb - z[jb >> 2], bb - z[tb >> 2]);
              var wb = (Za << 3) + c + 8;
              J(U, z[kb >> 2] + z[lb >> 2], z[vb >> 2] + z[mb >> 2]);
              Uf(Y, .5, z[Ba >> 2], z[sb >> 2]);
              var pb = wb, oa = Sa;
              l = oa >> 2;
              var qb = m[l], ca = Sa + 4;
              k = ca >> 2;
              var fb = m[k], la = pb;
              j = la >> 2;
              m[j] = qb;
              xa = pb + 4;
              i = xa >> 2;
              m[i] = fb;
              var La = Za + 1;
              if (La < m[o]) {
                Za = La;
              } else {
                break a;
              }
            }
          }
        } else {
          if (gb == 2) {
            Vg(aa, z[g + 8 >> 2], z[g + 12 >> 2], z[p + 10], z[p + 11]);
            var Wa = aa, db = c, ma = Wa, ub = m[ma >> 2], ia = Wa + 4, Ta = m[ia >> 2], Ia = db;
            m[Ia >> 2] = ub;
            Ca = db + 4;
            m[Ca >> 2] = Ta;
            Rf(ba, g, z[p + 12], z[p + 13]);
            var Bb = m[o] > 0;
            b : do {
              if (Bb) {
                for (var xb = X, nb = Q, yb = Q + 4, Ua = z[ba >> 2], Fb = z[ba + 4 >> 2], Ma = M, rb = M + 4, Db = c, zb = c + 4, Eb = W, Gb = W + 4, Cb = Z, Lb = Z + 4, Ab = O, $a = O + 4, Sb = S, Ob = S + 4, Tb = T, Pb = T + 4, Hb = 0; ; ) {
                  Rf(Q, e, z[p + (Hb * 5 | 0)], z[p + (Hb * 5 | 0) + 1]);
                  var jc = z[nb >> 2], Zb = z[yb >> 2];
                  J(M, jc - Ua, Zb - Fb);
                  var cc = z[Db >> 2], kc = z[zb >> 2];
                  Uf(W, h - (z[Ma >> 2] * cc + z[rb >> 2] * kc), cc, kc);
                  J(S, jc + z[Eb >> 2], Zb + z[Gb >> 2]);
                  Uf(Z, f, z[Db >> 2], z[zb >> 2]);
                  J(O, jc - z[Cb >> 2], Zb - z[Lb >> 2]);
                  var Uc = (Hb << 3) + c + 8;
                  J(T, z[Ab >> 2] + z[Sb >> 2], z[$a >> 2] + z[Ob >> 2]);
                  Uf(X, .5, z[Tb >> 2], z[Pb >> 2]);
                  var Jc = Uc, oa = xb;
                  l = oa >> 2;
                  var sc = m[l], ca = xb + 4;
                  k = ca >> 2;
                  var wc = m[k], la = Jc;
                  j = la >> 2;
                  m[j] = sc;
                  xa = Jc + 4;
                  i = xa >> 2;
                  m[i] = wc;
                  var xc = Hb + 1;
                  if (xc < m[o]) {
                    Hb = xc;
                  } else {
                    var Vc = Db, $b = zb;
                    break b;
                  }
                }
              } else {
                Vc = c, $b = c + 4;
              }
            } while (0);
            Ug(ka, z[Vc >> 2], z[$b >> 2]);
            var dc = ka, nc = m[dc + 4 >> 2];
            m[db >> 2] = m[dc >> 2];
            m[db + 4 >> 2] = nc;
          }
        }
      }
    }
  } while (0);
  a = n;
}

ch.X = 1;

function Xg(c, d, e, f, g, h) {
  var i, j, k = a;
  a += 24;
  var l = k + 8, o = k + 16;
  j = d >> 2;
  var p = z[j];
  i = d + 4 >> 2;
  var n = e * p + f * z[i] - g, p = d + 12, s = d + 16, e = e * z[p >> 2] + f * z[s >> 2] - g;
  if (n > 0) {
    var q = 0;
  } else {
    g = c >> 2, f = d >> 2, m[g] = m[f], m[g + 1] = m[f + 1], m[g + 2] = m[f + 2], q = 1;
  }
  e > 0 ? f = q : (g = c + q * 12 >> 2, f = p >> 2, m[g] = m[f], m[g + 1] = m[f + 1], m[g + 2] = m[f + 2], f = q + 1);
  n * e < 0 ? (e = n / (n - e), n = c + f * 12, J(o, z[p >> 2] - z[j], z[s >> 2] - z[i]), Uf(l, e, z[o >> 2], z[o + 4 >> 2]), J(k, z[j] + z[l >> 2], z[i] + z[l + 4 >> 2]), i = m[k + 4 >> 2], m[n >> 2] = m[k >> 2], m[n + 4 >> 2] = i, c = c + f * 12 + 8, b[c] = h & 255, b[c + 1] = b[d + 9], b[c + 2] = 0, b[c + 3] = 1, d = f + 1) : d = f;
  a = k;
  return d;
}

Xg.X = 1;

function dh(c, d, e) {
  var f = d >> 2, g = c >> 2, h, i = m[f + 1];
  if (i == 0) {
    m[g + 4] = d + 12, m[g + 5] = 1, z[g + 6] = z[f + 2];
  } else {
    if (i == 2) {
      m[g + 4] = d + 20, m[g + 5] = m[f + 37], z[g + 6] = z[f + 2];
    } else {
      if (i == 3) {
        i = d + 16;
        h = e > -1 ? m[i >> 2] > e ? 6 : 5 : 5;
        h == 5 && K(H.c, 53, H.K, H.Db);
        d += 12;
        h = (e << 3) + m[d >> 2];
        var j = m[h + 4 >> 2];
        m[c >> 2] = m[h >> 2];
        m[c + 4 >> 2] = j;
        h = e + 1;
        e = c + 8;
        d = m[d >> 2];
        h < m[i >> 2] ? (d = (h << 3) + d, i = m[d >> 2], d = m[d + 4 >> 2], m[e >> 2] = i, m[e + 4 >> 2] = d) : (i = m[d + 4 >> 2], m[e >> 2] = m[d >> 2], m[e + 4 >> 2] = i);
        m[g + 4] = c;
        m[g + 5] = 2;
        z[g + 6] = z[f + 2];
      } else {
        i == 1 ? (m[g + 4] = d + 12, m[g + 5] = 2, z[g + 6] = z[f + 2]) : K(H.c, 81, H.K, H.b);
      }
    }
  }
}

dh.X = 1;

function eh(c) {
  var d = c >> 2, e = a;
  a += 8;
  var f = c + 16, g = m[f + 4 >> 2], f = (E[0] = m[f >> 2], F[0]), h = (E[0] = g, F[0]), g = c + 36, i = c + 52, j = m[i + 4 >> 2], i = (E[0] = m[i >> 2], F[0]), j = (E[0] = j, F[0]);
  J(e, i - f, j - h);
  var k = z[e >> 2], l = z[e + 4 >> 2], f = f * k + h * l;
  if (f < 0) {
    if (h = i * k + j * l, h > 0) {
      c = 1 / (h - f), z[d + 6] = h * c, z[d + 15] = c * -f, m[d + 27] = 2;
    } else {
      z[d + 15] = 1;
      m[d + 27] = 1;
      d = g >> 2;
      c >>= 2;
      for (g = d + 9; d < g; d++, c++) {
        m[c] = m[d];
      }
    }
  } else {
    z[d + 6] = 1, m[d + 27] = 1;
  }
  a = e;
}

eh.X = 1;

function fh(c) {
  var d = c >> 2, e = a;
  a += 24;
  var f = e + 8, g = e + 16, h = c + 16, i = m[h + 4 >> 2], h = (E[0] = m[h >> 2], F[0]), j = (E[0] = i, F[0]), i = c + 36, k = c + 52, l = m[k + 4 >> 2], k = (E[0] = m[k >> 2], F[0]), o = (E[0] = l, F[0]), l = c + 72, p = c + 88, n = m[p + 4 >> 2], s = (E[0] = m[p >> 2], F[0]), q = (E[0] = n, F[0]);
  J(e, k - h, o - j);
  var r = z[e >> 2], t = z[e + 4 >> 2], u = h * r + j * t, n = k * r + o * t, p = -u;
  J(f, s - h, q - j);
  var w = z[f >> 2], A = z[f + 4 >> 2], x = h * w + j * A, f = s * w + q * A, v = -x;
  J(g, s - k, q - o);
  var C = z[g >> 2], I = z[g + 4 >> 2], g = k * C + o * I, C = s * C + q * I, t = r * A - t * w, r = t * (k * q - o * s), s = t * (s * j - q * h), h = t * (h * o - j * k);
  if (u < 0 | x < 0) {
    if (u >= 0 | n <= 0 | h > 0) {
      if (x >= 0 | f <= 0 | s > 0) {
        if (n > 0 | g < 0) {
          if (f > 0 | C > 0) {
            if (g >= 0 | C <= 0 | r > 0) {
              c = 1 / (r + s + h), z[d + 6] = r * c, z[d + 15] = s * c, z[d + 24] = h * c, m[d + 27] = 3;
            } else {
              i = 1 / (C - g);
              z[d + 15] = C * i;
              z[d + 24] = i * -g;
              m[d + 27] = 2;
              d = l >> 2;
              c >>= 2;
              for (i = d + 9; d < i; d++, c++) {
                m[c] = m[d];
              }
            }
          } else {
            z[d + 24] = 1;
            m[d + 27] = 1;
            d = l >> 2;
            c >>= 2;
            for (i = d + 9; d < i; d++, c++) {
              m[c] = m[d];
            }
          }
        } else {
          z[d + 15] = 1;
          m[d + 27] = 1;
          d = i >> 2;
          c >>= 2;
          for (i = d + 9; d < i; d++, c++) {
            m[c] = m[d];
          }
        }
      } else {
        c = 1 / (f - x);
        z[d + 6] = f * c;
        z[d + 24] = c * v;
        m[d + 27] = 2;
        d = l >> 2;
        c = i >> 2;
        for (i = d + 9; d < i; d++, c++) {
          m[c] = m[d];
        }
      }
    } else {
      c = 1 / (n - u), z[d + 6] = n * c, z[d + 15] = c * p, m[d + 27] = 2;
    }
  } else {
    z[d + 6] = 1, m[d + 27] = 1;
  }
  a = e;
}

fh.X = 1;

function gh(c, d) {
  z[c >> 2] -= z[d >> 2];
  z[c + 4 >> 2] -= z[d + 4 >> 2];
}

function hh(c, d, e) {
  var f, g, h, i, j, k, l, o, p = a;
  a += 280;
  var n, s = p + 16, q = p + 32;
  g = p + 144;
  h = p + 156;
  k = p + 168;
  i = p + 176;
  j = p + 184;
  f = p + 192;
  var r = p + 200, t = p + 208, u = p + 216, w = p + 224, A = p + 232, x = p + 240, v = p + 248, C = p + 256, I = p + 264, L = p + 272;
  m[ih >> 2] += 1;
  var G = e + 28;
  o = p >> 2;
  l = e + 56 >> 2;
  m[o] = m[l];
  m[o + 1] = m[l + 1];
  m[o + 2] = m[l + 2];
  m[o + 3] = m[l + 3];
  o = s >> 2;
  l = e + 72 >> 2;
  m[o] = m[l];
  m[o + 1] = m[l + 1];
  m[o + 2] = m[l + 2];
  m[o + 3] = m[l + 3];
  jh(q, d, e, p, G, s);
  l = q >> 2;
  kh(k, q);
  k = q + 108 >> 2;
  o = j + 4;
  var P = p + 8, N = p + 12, R = r + 4, Y = f + 4, U = s + 8, aa = s + 12, ba = u + 4, Q = 0;
  a : for (;;) {
    if (Q >= 20) {
      var S = Q;
      break;
    }
    var W = m[k];
    n = W > 0;
    b : do {
      if (n) {
        for (var M = 0; ; ) {
          if (m[g + (M << 2) >> 2] = m[l + (M * 9 | 0) + 7], m[h + (M << 2) >> 2] = m[l + (M * 9 | 0) + 8], M += 1, M == W) {
            break b;
          }
        }
      }
    } while (0);
    W == 1 ? n = 9 : (W == 2 ? eh(q) : W == 3 ? fh(q) : K(H.c, 498, H.Xa, H.b), n = 8);
    if (n == 8 && m[k] == 3) {
      S = Q;
      break;
    }
    kh(i, q);
    n = j;
    var O = q, Z = O >> 2, M = a;
    a += 16;
    var X = M + 8, T = m[Z + 27];
    T == 1 ? Ug(n, z[Z + 4], z[Z + 5]) : T == 2 ? (T = O + 16, O += 20, J(M, z[Z + 13] - z[T >> 2], z[Z + 14] - z[O >> 2]), Ug(X, z[T >> 2], z[O >> 2]), Z = z[M >> 2], O = z[M + 4 >> 2], Z * z[X + 4 >> 2] - O * z[X >> 2] > 0 ? lh(n, 1, Z, O) : J(n, O, Z * -1)) : (K(H.c, 184, H.zb, H.b), m[n >> 2] = 0, m[n + 4 >> 2] = 0);
    a = M;
    Z = z[j >> 2];
    O = z[o >> 2];
    if (Z * Z + O * O < 1.4210854715202004e-14) {
      S = Q;
      break;
    }
    M = m[k];
    X = q + M * 36;
    Ug(r, Z, O);
    Tg(f, z[P >> 2], z[N >> 2], z[r >> 2], z[R >> 2]);
    T = mh(e, z[f >> 2], z[Y >> 2]);
    n = q + M * 36 + 28;
    m[n >> 2] = T;
    T = nh(e, T);
    Rf(t, p, z[T >> 2], z[T + 4 >> 2]);
    var T = X, ka = m[t + 4 >> 2];
    m[T >> 2] = m[t >> 2];
    m[T + 4 >> 2] = ka;
    Tg(u, z[U >> 2], z[aa >> 2], Z, O);
    T = mh(G, z[u >> 2], z[ba >> 2]);
    Z = q + M * 36 + 32;
    m[Z >> 2] = T;
    O = q + M * 36 + 8;
    T = nh(G, T);
    Rf(w, s, z[T >> 2], z[T + 4 >> 2]);
    T = O;
    O = m[w >> 2];
    ka = m[w + 4 >> 2];
    m[T >> 2] = O;
    m[T + 4 >> 2] = ka;
    T = q + M * 36 + 16;
    O = (E[0] = O, F[0]);
    J(A, O - z[X >> 2], z[l + (M * 9 | 0) + 3] - z[l + (M * 9 | 0) + 1]);
    M = T;
    X = m[A + 4 >> 2];
    m[M >> 2] = m[A >> 2];
    m[M + 4 >> 2] = X;
    Q += 1;
    m[oh >> 2] += 1;
    for (M = 0; ; ) {
      if (M >= W) {
        break;
      }
      if (m[n >> 2] == m[g + (M << 2) >> 2] && m[Z >> 2] == m[h + (M << 2) >> 2]) {
        S = Q;
        break a;
      }
      M += 1;
    }
    m[k] += 1;
  }
  m[ph >> 2] = m[ph >> 2] > S ? m[ph >> 2] : S;
  s = c + 8;
  qh(q, c, s);
  j = c >> 2;
  f = z[j];
  i = c + 4 >> 2;
  r = z[i];
  h = s >> 2;
  t = z[h];
  g = c + 12 >> 2;
  r = rh(f, r, t, z[g]);
  f = c + 16 >> 2;
  z[f] = r;
  m[c + 20 >> 2] = S;
  S = sh(q);
  z[d >> 2] = S;
  S = q + 108 >> 2;
  hd[d + 4 >> 1] = m[S] & 65535;
  r = m[S] > 0;
  a : do {
    if (r) {
      for (t = 0; ; ) {
        if (b[d + (t + 6)] = m[(q + 28 >> 2) + (t * 9 | 0)] & 255, b[d + (t + 9)] = m[(q + 32 >> 2) + (t * 9 | 0)] & 255, t += 1, t >= m[S]) {
          break a;
        }
      }
    }
  } while (0);
  (b[e + 88] & 1) != 0 && (d = z[e + 24 >> 2], e = z[e + 52 >> 2], q = z[f], S = d + e, q > S & q > 1.1920928955078125e-7 ? (z[f] = q - S, J(x, z[h] - z[j], z[g] - z[i]), Wf(x), I = z[x >> 2], x = z[x + 4 >> 2], Uf(v, d, I, x), Pe(c, v), Uf(C, e, I, x), gh(s, C)) : (J(L, z[j] + z[h], z[i] + z[g]), Uf(I, .5, z[L >> 2], z[L + 4 >> 2]), v = m[I >> 2], C = m[I + 4 >> 2], m[c >> 2] = v, m[c + 4 >> 2] = C, m[s >> 2] = v, m[s + 4 >> 2] = C, z[f] = 0));
  a = p;
}

hh.X = 1;

function jh(c, d, e, f, g, h) {
  var i, j, k = a;
  a += 48;
  var l, o = k + 8;
  l = k + 16;
  var p = k + 24, n = k + 32, s = k + 40;
  j = d + 4;
  i = jd[j >> 1];
  if (i < 4) {
    var q = i;
  } else {
    K(H.c, 102, H.rb, H.wc), q = hd[j >> 1];
  }
  var r = q;
  j = c + 108 >> 2;
  m[j] = r;
  i = c >> 2;
  q = q == 0;
  a : do {
    if (q) {
      var t = r;
    } else {
      for (var u = k, w = o, A = l, x = 0; ; ) {
        var v = c + x * 36, C = id[d + (x + 6)];
        m[i + (x * 9 | 0) + 7] = C;
        var I = c + x * 36 + 32;
        m[I >> 2] = id[d + (x + 9)];
        var L = nh(e, C), C = m[L + 4 >> 2], L = (E[0] = m[L >> 2], F[0]), G = (E[0] = C, F[0]), I = nh(g, m[I >> 2]), C = m[I + 4 >> 2], I = (E[0] = m[I >> 2], F[0]), C = (E[0] = C, F[0]);
        Rf(k, f, L, G);
        var G = v, L = m[u + 4 >> 2], P = G;
        m[P >> 2] = m[u >> 2];
        G += 4;
        m[G >> 2] = L;
        L = c + x * 36 + 8;
        Rf(o, h, I, C);
        C = L;
        I = m[w >> 2];
        L = m[w + 4 >> 2];
        m[C >> 2] = I;
        m[C + 4 >> 2] = L;
        C = c + x * 36 + 16;
        I = (E[0] = I, F[0]);
        J(l, I - z[v >> 2], z[i + (x * 9 | 0) + 3] - z[i + (x * 9 | 0) + 1]);
        v = C;
        I = m[A + 4 >> 2];
        m[v >> 2] = m[A >> 2];
        m[v + 4 >> 2] = I;
        z[i + (x * 9 | 0) + 6] = 0;
        x += 1;
        v = m[j];
        if (x >= v) {
          t = v;
          break a;
        }
      }
    }
  } while (0);
  o = t > 1;
  a : do {
    if (o) {
      l = z[d >> 2];
      i = sh(c);
      r = i < l * .5;
      do {
        if (!r && !(l * 2 < i | i < 1.1920928955078125e-7)) {
          var N = m[j];
          l = 10;
          break a;
        }
      } while (0);
      m[j] = 0;
      l = 11;
    } else {
      N = t, l = 10;
    }
  } while (0);
  l == 10 && (l = N == 0 ? 11 : 12);
  l == 11 && (m[c + 28 >> 2] = 0, m[c + 32 >> 2] = 0, d = nh(e, 0), e = m[d + 4 >> 2], d = (E[0] = m[d >> 2], F[0]), e = (E[0] = e, F[0]), g = nh(g, 0), t = m[g + 4 >> 2], g = (E[0] = m[g >> 2], F[0]), t = (E[0] = t, F[0]), Rf(p, f, d, e), f = m[p + 4 >> 2], m[c >> 2] = m[p >> 2], m[c + 4 >> 2] = f, p = c + 8, Rf(n, h, g, t), h = m[n >> 2], f = m[n + 4 >> 2], m[p >> 2] = h, m[p + 4 >> 2] = f, n = c + 16, h = (E[0] = h, F[0]), p = (E[0] = f, F[0]), J(s, h - z[c >> 2], p - z[c + 4 >> 2]), c = m[s + 4 >> 2], m[n >> 2] = m[s >> 2], m[n + 4 >> 2] = c, m[j] = 1);
  a = k;
}

jh.X = 1;

function kh(c, d) {
  var e = d >> 2, f = a;
  a += 16;
  var g = f + 8, h = m[e + 27];
  h == 0 ? (K(H.c, 194, H.ba, H.b), m[c >> 2] = 0, m[c + 4 >> 2] = 0) : h == 1 ? (e = d + 16, g = m[e + 4 >> 2], m[c >> 2] = m[e >> 2], m[c + 4 >> 2] = g) : h == 2 ? (Uf(f, z[e + 6], z[e + 4], z[e + 5]), Uf(g, z[e + 15], z[e + 13], z[e + 14]), J(c, z[f >> 2] + z[g >> 2], z[f + 4 >> 2] + z[g + 4 >> 2])) : (h != 3 && K(H.c, 207, H.ba, H.b), m[c >> 2] = 0, m[c + 4 >> 2] = 0);
  a = f;
}

kh.X = 1;

function mh(c, d, e) {
  var f, g = m[c + 20 >> 2], h = g > 1;
  a : do {
    if (h) {
      f = m[c + 16 >> 2] >> 2;
      for (var i = 0, j = z[f] * d + z[f + 1] * e, k = 1; ; ) {
        var l = z[(k << 3 >> 2) + f] * d + z[((k << 3) + 4 >> 2) + f] * e, o = l > j, i = o ? k : i, j = o ? l : j;
        k += 1;
        if (k >= g) {
          var p = i;
          break a;
        }
      }
    } else {
      p = 0;
    }
  } while (0);
  return p;
}

function nh(c, d) {
  (d > -1 ? m[c + 20 >> 2] > d ? 3 : 2 : 2) == 2 && K(H.ec, 103, H.wb, H.mc);
  return (d << 3) + m[c + 16 >> 2];
}

function qh(c, d, e) {
  var f = c >> 2, g = a;
  a += 88;
  var h = g + 8, i = g + 16, j = g + 24, k = g + 32, l = g + 40, o = g + 48, p = g + 56, n = g + 64, s = g + 72, q = g + 80, r = m[f + 27];
  r == 0 ? K(H.c, 217, H.ca, H.b) : r == 1 ? (j = m[c + 4 >> 2], m[d >> 2] = m[c >> 2], m[d + 4 >> 2] = j, d = c + 8, j = m[d + 4 >> 2], m[e >> 2] = m[d >> 2], m[e + 4 >> 2] = j) : r == 2 ? (o = c + 24, Uf(h, z[o >> 2], z[f], z[f + 1]), c += 60, Uf(i, z[c >> 2], z[f + 9], z[f + 10]), J(g, z[h >> 2] + z[i >> 2], z[h + 4 >> 2] + z[i + 4 >> 2]), h = m[g + 4 >> 2], m[d >> 2] = m[g >> 2], m[d + 4 >> 2] = h, Uf(k, z[o >> 2], z[f + 2], z[f + 3]), Uf(l, z[c >> 2], z[f + 11], z[f + 12]), J(j, z[k >> 2] + z[l >> 2], z[k + 4 >> 2] + z[l + 4 >> 2]), d = m[j + 4 >> 2], m[e >> 2] = m[j >> 2], m[e + 4 >> 2] = d) : r == 3 ? (Uf(n, z[f + 6], z[f], z[f + 1]), Uf(s, z[f + 15], z[f + 9], z[f + 10]), J(p, z[n >> 2] + z[s >> 2], z[n + 4 >> 2] + z[s + 4 >> 2]), Uf(q, z[f + 24], z[f + 18], z[f + 19]), J(o, z[p >> 2] + z[q >> 2], z[p + 4 >> 2] + z[q + 4 >> 2]), j = m[o >> 2], f = m[o + 4 >> 2], m[d >> 2] = j, m[d + 4 >> 2] = f, m[e >> 2] = j, m[e + 4 >> 2] = f) : K(H.c, 236, H.ca, H.b);
  a = g;
}

qh.X = 1;

function rh(c, d, e, f) {
  var g = a;
  a += 8;
  J(g, c - e, d - f);
  c = Xf(z[g >> 2] * z[g >> 2] + z[g + 4 >> 2] * z[g + 4 >> 2]);
  a = g;
  return c;
}

function sh(c) {
  var d = c >> 2, e = a;
  a += 16;
  var f = e + 8, g = m[d + 27];
  g == 0 ? (K(H.c, 246, H.da, H.b), d = 0) : g == 1 ? d = 0 : g == 2 ? d = rh(z[d + 4], z[d + 5], z[d + 13], z[d + 14]) : g == 3 ? (g = c + 16, c += 20, J(e, z[d + 13] - z[g >> 2], z[d + 14] - z[c >> 2]), J(f, z[d + 22] - z[g >> 2], z[d + 23] - z[c >> 2]), d = z[e >> 2] * z[f + 4 >> 2] - z[e + 4 >> 2] * z[f >> 2]) : (K(H.c, 259, H.da, H.b), d = 0);
  a = e;
  return d;
}

function lh(c, d, e, f) {
  J(c, f * -d, e * d);
}

function th(c) {
  return (z[c + 8 >> 2] - z[c >> 2] + (z[c + 12 >> 2] - z[c + 4 >> 2])) * 2;
}

function uh(c) {
  var d, e, f, g;
  g = c + 16 >> 2;
  var h = m[g];
  if (h == -1) {
    h = c + 8;
    f = h >> 2;
    d = c + 12 >> 2;
    e = m[d];
    if (m[f] == e) {
      var i = e;
    } else {
      K(H.a, 61, H.bb, H.Eb), i = m[d];
    }
    c += 4;
    e = c >> 2;
    var j = m[e];
    m[d] = i << 1;
    i = zd(i * 72);
    m[e] = i;
    Mf(i, j, m[f] * 36);
    Pf(j);
    var i = m[f], j = m[d] - 1, k = i < j;
    a : do {
      if (k) {
        for (var l = i; ; ) {
          var o = l + 1;
          m[m[e] + l * 36 + 20 >> 2] = o;
          m[m[e] + l * 36 + 32 >> 2] = -1;
          l = m[d] - 1;
          if (o < l) {
            l = o;
          } else {
            var p = l;
            break a;
          }
        }
      } else {
        p = j;
      }
    } while (0);
    m[m[e] + p * 36 + 20 >> 2] = -1;
    m[m[e] + (m[d] - 1) * 36 + 32 >> 2] = -1;
    p = m[f];
    m[g] = p;
    d = c >> 2;
  } else {
    p = h, d = c + 4 >> 2, h = c + 8;
  }
  f = m[d] + p * 36 + 20;
  m[g] = m[f >> 2];
  m[f >> 2] = -1;
  m[m[d] + p * 36 + 24 >> 2] = -1;
  m[m[d] + p * 36 + 28 >> 2] = -1;
  m[m[d] + p * 36 + 32 >> 2] = 0;
  m[m[d] + p * 36 + 16 >> 2] = 0;
  m[h >> 2] += 1;
  return p;
}

uh.X = 1;

function vh(c, d) {
  var e;
  (d > -1 ? m[c + 12 >> 2] > d ? 3 : 2 : 2) == 2 && K(H.a, 97, H.G, H.Wb);
  e = c + 8 >> 2;
  m[e] > 0 || K(H.a, 98, H.G, H.gc);
  var f = c + 16, g = c + 4;
  m[m[g >> 2] + d * 36 + 20 >> 2] = m[f >> 2];
  m[m[g >> 2] + d * 36 + 32 >> 2] = -1;
  m[f >> 2] = d;
  m[e] -= 1;
}

function ki(c, d, e) {
  var f, g = a;
  a += 24;
  var h = g + 8, i = g + 16, j = uh(c);
  J(g, .10000000149011612, .10000000149011612);
  f = c + 4 >> 2;
  var k = m[f] + j * 36, l = z[g >> 2], o = z[g + 4 >> 2];
  J(h, z[d >> 2] - l, z[d + 4 >> 2] - o);
  var p = m[h + 4 >> 2];
  m[k >> 2] = m[h >> 2];
  m[k + 4 >> 2] = p;
  h = m[f] + j * 36 + 8;
  J(i, z[d + 8 >> 2] + l, z[d + 12 >> 2] + o);
  d = m[i + 4 >> 2];
  m[h >> 2] = m[i >> 2];
  m[h + 4 >> 2] = d;
  m[m[f] + j * 36 + 16 >> 2] = e;
  m[m[f] + j * 36 + 32 >> 2] = 0;
  li(c, j);
  a = g;
  return j;
}

ki.X = 1;

function li(c, d) {
  var e, f, g, h, i = a;
  a += 96;
  var j = i + 16, k = i + 32, l = i + 48, o = i + 64, p = i + 80;
  m[c + 24 >> 2] += 1;
  h = c >> 2;
  var n = m[h], s = n == -1;
  a : do {
    if (s) {
      m[h] = d, m[m[c + 4 >> 2] + d * 36 + 20 >> 2] = -1;
    } else {
      g = c + 4 >> 2;
      var q = m[g];
      f = i >> 2;
      e = q + d * 36 >> 2;
      m[f] = m[e];
      m[f + 1] = m[e + 1];
      m[f + 2] = m[e + 2];
      m[f + 3] = m[e + 3];
      e = n;
      for (var r = q; ; ) {
        q = m[(r + 24 >> 2) + (e * 9 | 0)];
        if (q == -1) {
          var t = r;
          break;
        }
        f = m[(r + 28 >> 2) + (e * 9 | 0)];
        r += e * 36;
        var u = th(r);
        mi(j, r, i);
        var w = th(j), r = w * 2, u = (w - u) * 2, w = m[g], A = w + q * 36;
        m[(w + 24 >> 2) + (q * 9 | 0)] == -1 ? (mi(k, i, A), w = th(k), A = m[g]) : (mi(l, i, A), A = m[g], w = th(l) - th(A + q * 36));
        w += u;
        var x = A + f * 36;
        m[(A + 24 >> 2) + (f * 9 | 0)] == -1 ? (mi(o, i, x), A = th(o)) : (mi(p, i, x), A = th(p) - th(m[g] + f * 36));
        u = A + u;
        if (r < w & r < u) {
          t = m[g];
          break;
        } else {
          e = w < u ? q : f, r = m[g];
        }
      }
      q = m[(t + 20 >> 2) + (e * 9 | 0)];
      f = uh(c);
      m[m[g] + f * 36 + 20 >> 2] = q;
      m[m[g] + f * 36 + 16 >> 2] = 0;
      r = m[g];
      mi(r + f * 36, i, r + e * 36);
      r = m[g];
      m[r + f * 36 + 32 >> 2] = m[(r + 32 >> 2) + (e * 9 | 0)] + 1;
      r = m[g];
      q == -1 ? (m[r + f * 36 + 24 >> 2] = e, m[m[g] + f * 36 + 28 >> 2] = d, m[m[g] + e * 36 + 20 >> 2] = f, m[m[g] + d * 36 + 20 >> 2] = f, m[h] = f) : (u = r + q * 36 + 24, m[u >> 2] == e ? m[u >> 2] = f : m[r + q * 36 + 28 >> 2] = f, m[m[g] + f * 36 + 24 >> 2] = e, m[m[g] + f * 36 + 28 >> 2] = d, m[m[g] + e * 36 + 20 >> 2] = f, m[m[g] + d * 36 + 20 >> 2] = f);
      e = m[(m[g] + 20 >> 2) + (d * 9 | 0)];
      if (e != -1) {
        for (;;) {
          if (e = ni(c, e), f = m[g], q = m[(f + 24 >> 2) + (e * 9 | 0)], f = m[(f + 28 >> 2) + (e * 9 | 0)], q == -1 && K(H.a, 307, H.F, H.Dc), f == -1 && K(H.a, 308, H.F, H.Gc), r = m[g], m[r + e * 36 + 32 >> 2] = (m[(r + 32 >> 2) + (q * 9 | 0)] > m[(r + 32 >> 2) + (f * 9 | 0)] ? m[(r + 32 >> 2) + (q * 9 | 0)] : m[(r + 32 >> 2) + (f * 9 | 0)]) + 1, r = m[g], mi(r + e * 36, r + q * 36, r + f * 36), e = m[(m[g] + 20 >> 2) + (e * 9 | 0)], e == -1) {
            break a;
          }
        }
      }
    }
  } while (0);
  a = i;
}

li.X = 1;

function oi(c, d) {
  var e, f, g;
  g = c >> 2;
  var h = m[g] == d;
  a : do {
    if (h) {
      m[g] = -1;
    } else {
      f = c + 4 >> 2;
      var i = m[f];
      e = i >> 2;
      var j = m[e + (d * 9 | 0) + 5], k = m[e + (j * 9 | 0) + 5], l = m[e + (j * 9 | 0) + 6];
      e = l == d ? m[e + (j * 9 | 0) + 7] : l;
      if (k == -1) {
        m[g] = e, m[i + e * 36 + 20 >> 2] = -1, vh(c, j);
      } else {
        l = i + k * 36 + 24;
        m[l >> 2] == j ? m[l >> 2] = e : m[i + k * 36 + 28 >> 2] = e;
        m[m[f] + e * 36 + 20 >> 2] = k;
        vh(c, j);
        for (i = k; ; ) {
          if (i = ni(c, i), e = m[f], j = m[(e + 24 >> 2) + (i * 9 | 0)], k = m[(e + 28 >> 2) + (i * 9 | 0)], mi(e + i * 36, e + j * 36, e + k * 36), e = m[f], m[e + i * 36 + 32 >> 2] = (m[(e + 32 >> 2) + (j * 9 | 0)] > m[(e + 32 >> 2) + (k * 9 | 0)] ? m[(e + 32 >> 2) + (j * 9 | 0)] : m[(e + 32 >> 2) + (k * 9 | 0)]) + 1, i = m[(m[f] + 20 >> 2) + (i * 9 | 0)], i == -1) {
            break a;
          }
        }
      }
    }
  } while (0);
}

oi.X = 1;

function pi(c, d, e, f) {
  var g, h = a;
  a += 32;
  var i = h + 8, j = h + 16, k = h + 24;
  (d > -1 ? m[c + 12 >> 2] > d ? 3 : 2 : 2) == 2 && K(H.a, 135, H.H, H.w);
  g = c + 4 >> 2;
  var l = m[g];
  m[(l + 24 >> 2) + (d * 9 | 0)] != -1 && (K(H.a, 137, H.H, H.xc), l = m[g]);
  if (z[l + d * 36 >> 2] > z[e >> 2] ? 0 : z[l + d * 36 + 4 >> 2] > z[e + 4 >> 2] ? 0 : z[e + 8 >> 2] > z[l + d * 36 + 8 >> 2] ? 0 : z[e + 12 >> 2] <= z[l + d * 36 + 12 >> 2]) {
    c = 0;
  } else {
    oi(c, d);
    var o = z[e >> 2], p = z[e + 4 >> 2], l = z[e + 8 >> 2], e = z[e + 12 >> 2];
    J(h, .10000000149011612, .10000000149011612);
    var n = z[h >> 2], s = z[h + 4 >> 2];
    J(i, o - n, p - s);
    p = m[i + 4 >> 2];
    o = (E[0] = m[i >> 2], F[0]);
    i = (E[0] = p, F[0]);
    J(j, l + n, e + s);
    e = m[j + 4 >> 2];
    l = (E[0] = m[j >> 2], F[0]);
    j = (E[0] = e, F[0]);
    Uf(k, 2, z[f >> 2], z[f + 4 >> 2]);
    e = z[k >> 2];
    e < 0 ? f = o + e : (f = o, l += e);
    o = z[k + 4 >> 2];
    o < 0 ? k = i + o : (k = i, j += o);
    g = m[g] >> 2;
    z[g + (d * 9 | 0)] = f;
    z[g + (d * 9 | 0) + 1] = k;
    z[g + (d * 9 | 0) + 2] = l;
    z[g + (d * 9 | 0) + 3] = j;
    li(c, d);
    c = 1;
  }
  a = h;
  return c;
}

pi.X = 1;

function mi(c, d, e) {
  var f = a;
  a += 16;
  var g = f + 8;
  J(f, z[d >> 2] < z[e >> 2] ? z[d >> 2] : z[e >> 2], z[d + 4 >> 2] < z[e + 4 >> 2] ? z[d + 4 >> 2] : z[e + 4 >> 2]);
  var h = m[f + 4 >> 2];
  m[c >> 2] = m[f >> 2];
  m[c + 4 >> 2] = h;
  c += 8;
  J(g, z[d + 8 >> 2] > z[e + 8 >> 2] ? z[d + 8 >> 2] : z[e + 8 >> 2], z[d + 12 >> 2] > z[e + 12 >> 2] ? z[d + 12 >> 2] : z[e + 12 >> 2]);
  d = m[g + 4 >> 2];
  m[c >> 2] = m[g >> 2];
  m[c + 4 >> 2] = d;
  a = f;
}

function ni(c, d) {
  var e, f, g, h, i, j, k, l, o, p;
  f = c >> 2;
  var n;
  d == -1 && K(H.a, 382, H.e, H.Ic);
  e = c + 4 >> 2;
  g = m[e];
  var s = g + d * 36;
  p = g + d * 36 + 24 >> 2;
  i = m[p];
  if (i == -1) {
    o = d;
  } else {
    if (o = g + d * 36 + 32 >> 2, m[o] < 2) {
      o = d;
    } else {
      l = g + d * 36 + 28 >> 2;
      h = m[l];
      n = i > -1 ? i < m[f + 3] ? 7 : 6 : 6;
      n == 6 && K(H.a, 392, H.e, H.Jc);
      n = h > -1 ? h < m[f + 3] ? 10 : 9 : 9;
      n == 9 && K(H.a, 393, H.e, H.Bb);
      var q = m[e], r = q + i * 36, t = q + h * 36;
      k = q + h * 36 + 32 >> 2;
      j = q + i * 36 + 32 >> 2;
      var u = m[k] - m[j];
      if (u > 1) {
        var w = q + h * 36 + 24;
        p = m[w >> 2];
        i = q + h * 36 + 28 >> 2;
        var u = m[i], A = q + p * 36, x = q + u * 36;
        n = p > -1 ? p < m[f + 3] ? 14 : 13 : 13;
        n == 13 && K(H.a, 407, H.e, H.Cb);
        n = u > -1 ? u < m[f + 3] ? 17 : 16 : 16;
        n == 16 && K(H.a, 408, H.e, H.Ib);
        m[w >> 2] = d;
        n = g + d * 36 + 20;
        w = m[n >> 2];
        g = q + h * 36 + 20 >> 2;
        m[g] = w;
        m[n >> 2] = h;
        n = m[g];
        n == -1 ? m[f] = h : (f = m[e], w = f + n * 36 + 24, m[w >> 2] == d ? m[w >> 2] = h : (m[(f + 28 >> 2) + (n * 9 | 0)] == d ? (g = n, e = f) : (K(H.a, 424, H.e, H.Mb), g = m[g], e = m[e]), m[(e + 28 >> 2) + (g * 9 | 0)] = h));
        f = q + p * 36 + 32 >> 2;
        e = q + u * 36 + 32 >> 2;
        m[f] > m[e] ? (m[i] = p, m[l] = u, m[q + u * 36 + 20 >> 2] = d, mi(s, r, x), mi(t, s, A), j = (m[j] > m[e] ? m[j] : m[e]) + 1, m[o] = j, o = j > m[f] ? j : m[f]) : (m[i] = u, m[l] = p, m[q + p * 36 + 20 >> 2] = d, mi(s, r, A), mi(t, s, x), j = (m[j] > m[f] ? m[j] : m[f]) + 1, m[o] = j, o = j > m[e] ? j : m[e]);
        m[k] = o + 1;
        o = h;
      } else {
        u < -1 ? (w = q + i * 36 + 24, l = m[w >> 2], h = q + i * 36 + 28 >> 2, u = m[h], A = q + l * 36, x = q + u * 36, n = l > -1 ? l < m[f + 3] ? 32 : 31 : 31, n == 31 && K(H.a, 467, H.e, H.Pb), n = u > -1 ? u < m[f + 3] ? 35 : 34 : 34, n == 34 && K(H.a, 468, H.e, H.Qb), m[w >> 2] = d, n = g + d * 36 + 20, w = m[n >> 2], g = q + i * 36 + 20 >> 2, m[g] = w, m[n >> 2] = i, n = m[g], n == -1 ? m[f] = i : (f = m[e], w = f + n * 36 + 24, m[w >> 2] == d ? m[w >> 2] = i : (m[(f + 28 >> 2) + (n * 9 | 0)] == d ? (g = n, e = f) : (K(H.a, 484, H.e, H.Rb), g = m[g], e = m[e]), m[(e + 28 >> 2) + (g * 9 | 0)] = i)), f = q + l * 36 + 32 >> 2, e = q + u * 36 + 32 >> 2, m[f] > m[e] ? (m[h] = l, m[p] = u, m[q + u * 36 + 20 >> 2] = d, mi(s, t, x), mi(r, s, A), k = (m[k] > m[e] ? m[k] : m[e]) + 1, m[o] = k, o = k > m[f] ? k : m[f]) : (m[h] = u, m[p] = l, m[q + l * 36 + 20 >> 2] = d, mi(s, t, A), mi(r, s, x), k = (m[k] > m[f] ? m[k] : m[f]) + 1, m[o] = k, o = k > m[e] ? k : m[e]), m[j] = o + 1, o = i) : o = d;
      }
    }
  }
  return o;
}

ni.X = 1;

function qi(c, d) {
  var e, f, g, h, i, j, k = a;
  a += 340;
  var l, o = k + 36, p = k + 72, n = k + 84, s = k + 176, q = k + 192, r = k + 208, t = k + 232, u = k + 332, w = k + 336;
  m[ri >> 2] += 1;
  j = c >> 2;
  m[j] = 0;
  var A = d + 128, x = z[A >> 2];
  i = c + 4 >> 2;
  z[i] = x;
  var x = d + 28, v = d + 56 >> 2;
  e = k >> 2;
  for (f = v + 9; v < f; v++, e++) {
    m[e] = m[v];
  }
  v = d + 92 >> 2;
  e = o >> 2;
  for (f = v + 9; v < f; v++, e++) {
    m[e] = m[v];
  }
  si(k);
  si(o);
  A = z[A >> 2];
  v = .004999999888241291 > z[d + 24 >> 2] + z[d + 52 >> 2] - .014999999664723873 ? .004999999888241291 : z[d + 24 >> 2] + z[d + 52 >> 2] - .014999999664723873;
  v > .0012499999720603228 || K(H.p, 280, H.Ya, H.Nb);
  hd[p + 4 >> 1] = 0;
  bh(n);
  bh(n + 28);
  f = n >> 2;
  e = d >> 2;
  m[f] = m[e];
  m[f + 1] = m[e + 1];
  m[f + 2] = m[e + 2];
  m[f + 3] = m[e + 3];
  m[f + 4] = m[e + 4];
  m[f + 5] = m[e + 5];
  m[f + 6] = m[e + 6];
  f = n + 28 >> 2;
  e = x >> 2;
  m[f] = m[e];
  m[f + 1] = m[e + 1];
  m[f + 2] = m[e + 2];
  m[f + 3] = m[e + 3];
  m[f + 4] = m[e + 4];
  m[f + 5] = m[e + 5];
  m[f + 6] = m[e + 6];
  b[n + 88] = 0;
  h = n + 56 >> 2;
  g = s >> 2;
  f = n + 72 >> 2;
  e = q >> 2;
  var C = r + 16, I = v + .0012499999720603228, L = v - .0012499999720603228, G = 0, P = 0;
  a : for (;;) {
    ti(k, s, G);
    ti(o, q, G);
    m[h] = m[g];
    m[h + 1] = m[g + 1];
    m[h + 2] = m[g + 2];
    m[h + 3] = m[g + 3];
    m[f] = m[e];
    m[f + 1] = m[e + 1];
    m[f + 2] = m[e + 2];
    m[f + 3] = m[e + 3];
    hh(r, p, n);
    var N = z[C >> 2];
    if (N > 0) {
      if (N < I) {
        m[j] = 3;
        z[i] = G;
        var R = P;
        l = 24;
        break;
      } else {
        ui(t, p, d, k, x, o, G);
        for (var N = 0, Y = A; ; ) {
          var U = vi(t, u, w, Y);
          if (U > I) {
            m[j] = 4, z[i] = A, l = 21;
          } else {
            if (U > L) {
              G = Y;
            } else {
              var aa = y[u >> 2], ba = y[w >> 2], Q = wi(t, aa, ba, G);
              if (Q < L) {
                m[j] = 1;
                z[i] = G;
                l = 21;
                break a;
              } else {
                if (Q > I) {
                  for (var S = Y, W = G, M = 0, O = Q; ; ) {
                    var Q = (M & 1) == 0 ? (W + S) * .5 : W + (v - O) * (S - W) / (U - O), Z = wi(t, aa, ba, Q);
                    if ((Z - v > 0 ? Z - v : -(Z - v)) < .0012499999720603228) {
                      var X = M, T = Q;
                      break;
                    }
                    var ka = Z > v, U = ka ? U : Z, O = ka ? Z : O, W = ka ? Q : W, S = ka ? S : Q;
                    M += 1;
                    m[xi >> 2] += 1;
                    if (M == 50) {
                      X = 50;
                      T = Y;
                      break;
                    }
                  }
                  m[yi >> 2] = m[yi >> 2] > X ? m[yi >> 2] : X;
                  N += 1;
                  if (N != 8) {
                    Y = T;
                    continue;
                  }
                } else {
                  m[j] = 3;
                  z[i] = G;
                  l = 21;
                  break a;
                }
              }
            }
            N = P + 1;
            m[zi >> 2] += 1;
            if (N != 20) {
              P = N;
              continue a;
            }
            m[j] = 1;
            z[i] = G;
            R = 20;
            l = 24;
          }
          break a;
        }
      }
    } else {
      m[j] = 2;
      z[i] = 0;
      R = P;
      l = 24;
      break;
    }
  }
  l == 21 && (m[zi >> 2] += 1, R = P + 1);
  m[Ai >> 2] = m[Ai >> 2] > R ? m[Ai >> 2] : R;
  a = k;
}

qi.X = 1;

function si(c) {
  var d;
  d = c + 24 >> 2;
  var e = Bi(z[d] / 6.2831854820251465) * 6.2831854820251465;
  z[d] -= e;
  z[c + 28 >> 2] -= e;
}

function ti(c, d, e) {
  c >>= 2;
  var f = a;
  a += 32;
  var g = f + 8, h = f + 16, i = f + 24, j = 1 - e;
  Uf(g, j, z[c + 2], z[c + 3]);
  Uf(h, e, z[c + 4], z[c + 5]);
  J(f, z[g >> 2] + z[h >> 2], z[g + 4 >> 2] + z[h + 4 >> 2]);
  g = m[f + 4 >> 2];
  m[d >> 2] = m[f >> 2];
  m[d + 4 >> 2] = g;
  g = d + 8;
  Ci(g, j * z[c + 6] + z[c + 7] * e);
  Vg(i, z[g >> 2], z[d + 12 >> 2], z[c], z[c + 1]);
  gh(d, i);
  a = f;
}

ti.X = 1;

function ui(c, d, e, f, g, h, i) {
  var j, k, l, o, p = a;
  a += 200;
  var n = p + 16, s = p + 32, q = p + 40, r = p + 48, t = p + 56, u = p + 64, w = p + 72, A = p + 80, x = p + 88, v = p + 96, C = p + 104, I = p + 112, L = p + 120, G = p + 128, P = p + 136, N = p + 144, R = p + 152, Y = p + 160, U = p + 168, aa = p + 176, ba = p + 184, Q = p + 192;
  o = c >> 2;
  m[o] = e;
  l = c + 4 >> 2;
  m[l] = g;
  var S = jd[d + 4 >> 1];
  S != 0 & S < 3 || K(H.p, 50, H.ib, H.zc);
  for (var W = c + 8, M = f >> 2, O = W >> 2, Z = M + 9; M < Z; M++, O++) {
    m[O] = m[M];
  }
  for (var X = c + 44, M = h >> 2, O = X >> 2, Z = M + 9; M < Z; M++, O++) {
    m[O] = m[M];
  }
  ti(W, p, i);
  ti(X, n, i);
  if (S == 1) {
    m[c + 80 >> 2] = 0;
    var T = nh(m[o], id[d + 6]), ka = T;
    k = ka >> 2;
    var Ha = T + 4;
    j = Ha >> 2;
    var gb = m[j], Va = (E[0] = m[k], F[0]), ya = (E[0] = gb, F[0]), Na = nh(m[l], id[d + 9]), na = m[Na + 4 >> 2], fa = (E[0] = m[Na >> 2], F[0]), ha = (E[0] = na, F[0]);
    Rf(s, p, Va, ya);
    Rf(q, n, fa, ha);
    var za = c + 92;
    J(r, z[q >> 2] - z[s >> 2], z[q + 4 >> 2] - z[s + 4 >> 2]);
    var Ra = m[r + 4 >> 2];
    m[za >> 2] = m[r >> 2];
    m[za + 4 >> 2] = Ra;
    Wf(za);
  } else {
    var wa = d + 6, ua = d + 7, ga = c + 80;
    if (b[wa] == b[ua]) {
      m[ga >> 2] = 2;
      var qa = nh(g, id[d + 9]), Oa = qa, oa = qa + 4, da = m[oa >> 2], ca = (E[0] = m[Oa >> 2], F[0]), Ea = (E[0] = da, F[0]), la = nh(g, id[d + 10]), xa = la, Xa = la + 4, Ya = m[Xa >> 2], ma = (E[0] = m[xa >> 2], F[0]), ia = (E[0] = Ya, F[0]), Pa = c + 92;
      J(u, ma - ca, ia - Ea);
      J(t, z[u + 4 >> 2], z[u >> 2] * -1);
      var Ia = t, Ca = t + 4, Sa = m[Ca >> 2], Fa = Pa;
      m[Fa >> 2] = m[Ia >> 2];
      var Ja = Pa + 4;
      m[Ja >> 2] = Sa;
      Wf(Pa);
      var ja = c + 96;
      Vg(w, z[n + 8 >> 2], z[n + 12 >> 2], z[Pa >> 2], z[ja >> 2]);
      var Da = c + 84;
      J(x, ca + ma, Ea + ia);
      Uf(A, .5, z[x >> 2], z[x + 4 >> 2]);
      var va = A, sa = m[va >> 2], $ = A + 4, Ka = m[$ >> 2], ob = Da;
      m[ob >> 2] = sa;
      var ib = Da + 4;
      m[ib >> 2] = Ka;
      var jb = (E[0] = sa, F[0]), tb = (E[0] = Ka, F[0]);
      Rf(v, n, jb, tb);
      var kb = nh(e, id[wa]), vb = m[kb + 4 >> 2], lb = (E[0] = m[kb >> 2], F[0]), mb = (E[0] = vb, F[0]);
      Rf(C, p, lb, mb);
      J(I, z[C >> 2] - z[v >> 2], z[C + 4 >> 2] - z[v + 4 >> 2]);
      if (z[I >> 2] * z[w >> 2] + z[I + 4 >> 2] * z[w + 4 >> 2] < 0) {
        Ug(L, z[Pa >> 2], z[ja >> 2]);
        var Ba = L, sb = m[Ba >> 2], Za = L + 4, hb = m[Za >> 2], ka = Pa;
        k = ka >> 2;
        m[k] = sb;
        Ha = Pa + 4;
        j = Ha >> 2;
        m[j] = hb;
      }
    } else {
      m[ga >> 2] = 1;
      var bb = nh(m[o], id[wa]), Oa = bb, oa = bb + 4, cb = m[oa >> 2], eb = (E[0] = m[Oa >> 2], F[0]), wb = (E[0] = cb, F[0]), pb = nh(m[o], id[ua]), xa = pb, Xa = pb + 4, qb = m[Xa >> 2], fb = (E[0] = m[xa >> 2], F[0]), La = (E[0] = qb, F[0]), Wa = c + 92;
      J(P, fb - eb, La - wb);
      J(G, z[P + 4 >> 2], z[P >> 2] * -1);
      var Ia = G, db = m[Ia >> 2], Ca = G + 4, ub = m[Ca >> 2], Fa = Wa;
      m[Fa >> 2] = db;
      Ja = Wa + 4;
      m[Ja >> 2] = ub;
      Wf(Wa);
      var Ta = c + 96;
      Vg(N, z[p + 8 >> 2], z[p + 12 >> 2], z[Wa >> 2], z[Ta >> 2]);
      var Bb = c + 84;
      J(Y, eb + fb, wb + La);
      Uf(R, .5, z[Y >> 2], z[Y + 4 >> 2]);
      var va = R, xb = m[va >> 2], $ = R + 4, nb = m[$ >> 2], ob = Bb;
      m[ob >> 2] = xb;
      ib = Bb + 4;
      m[ib >> 2] = nb;
      var yb = (E[0] = xb, F[0]), Ua = (E[0] = nb, F[0]);
      Rf(U, p, yb, Ua);
      var Fb = nh(m[l], id[d + 9]), Ma = m[Fb + 4 >> 2], rb = (E[0] = m[Fb >> 2], F[0]), Db = (E[0] = Ma, F[0]);
      Rf(aa, n, rb, Db);
      J(ba, z[aa >> 2] - z[U >> 2], z[aa + 4 >> 2] - z[U + 4 >> 2]);
      if (z[ba >> 2] * z[N >> 2] + z[ba + 4 >> 2] * z[N + 4 >> 2] < 0) {
        Ug(Q, z[Wa >> 2], z[Ta >> 2]);
        var Ba = Q, zb = m[Ba >> 2], Za = Q + 4, Eb = m[Za >> 2], ka = Wa;
        k = ka >> 2;
        m[k] = zb;
        Ha = Wa + 4;
        j = Ha >> 2;
        m[j] = Eb;
      }
    }
  }
  a = p;
}

ui.X = 1;

function Di(c, d) {
  m[c + 4 >> 2] = m[d + 4 >> 2];
  z[c + 8 >> 2] = z[d + 8 >> 2];
}

function vi(c, d, e, f) {
  var g, h, i, j, k = e >> 2, l = d >> 2, o = c >> 2, d = a;
  a += 176;
  j = d >> 2;
  e = d + 16;
  i = e >> 2;
  var p = d + 32, n = d + 40, s = d + 48, q = d + 56, r = d + 64, t = d + 72, u = d + 80;
  g = d + 88;
  var w = d + 96, A = d + 104;
  h = d + 112;
  var x = d + 120, v = d + 128, C = d + 136, I = d + 144, L = d + 152, G = d + 160, P = d + 168;
  ti(c + 8, d, f);
  ti(c + 44, e, f);
  f = m[o + 20];
  f == 0 ? (x = z[j + 2], C = z[j + 3], h = c + 92 >> 2, G = z[h], g = c + 96 >> 2, Tg(p, x, C, G, z[g]), Ug(s, z[h], z[g]), Tg(n, z[i + 2], z[i + 3], z[s >> 2], z[s + 4 >> 2]), m[l] = mh(m[c >> 2], z[p >> 2], z[p + 4 >> 2]), x = c + 4, m[k] = mh(m[x >> 2], z[n >> 2], z[n + 4 >> 2]), c = nh(m[c >> 2], m[l]), l = m[c + 4 >> 2], c = (E[0] = m[c >> 2], F[0]), l = (E[0] = l, F[0]), x = nh(m[x >> 2], m[k]), k = m[x + 4 >> 2], x = (E[0] = m[x >> 2], F[0]), k = (E[0] = k, F[0]), Rf(q, d, c, l), Rf(r, e, x, k), J(t, z[r >> 2] - z[q >> 2], z[r + 4 >> 2] - z[q + 4 >> 2]), e = z[t >> 2] * z[h] + z[t + 4 >> 2] * z[g]) : f == 1 ? (Vg(u, z[j + 2], z[j + 3], z[o + 23], z[o + 24]), Rf(g, d, z[o + 21], z[o + 22]), q = z[u >> 2], r = z[u + 4 >> 2], Ug(A, q, r), Tg(w, z[i + 2], z[i + 3], z[A >> 2], z[A + 4 >> 2]), m[l] = -1, t = c + 4, c = mh(m[t >> 2], z[w >> 2], z[w + 4 >> 2]), m[k] = c, t = nh(m[t >> 2], c), k = m[t + 4 >> 2], t = (E[0] = m[t >> 2], F[0]), k = (E[0] = k, F[0]), Rf(h, e, t, k), J(x, z[h >> 2] - z[g >> 2], z[h + 4 >> 2] - z[g + 4 >> 2]), e = z[x >> 2] * q + z[x + 4 >> 2] * r) : f == 2 ? (Vg(v, z[i + 2], z[i + 3], z[o + 23], z[o + 24]), Rf(C, e, z[o + 21], z[o + 22]), e = z[v >> 2], q = z[v + 4 >> 2], Ug(L, e, q), Tg(I, z[j + 2], z[j + 3], z[L >> 2], z[L + 4 >> 2]), m[k] = -1, k = mh(m[c >> 2], z[I >> 2], z[I + 4 >> 2]), m[l] = k, r = nh(m[c >> 2], k), k = m[r + 4 >> 2], r = (E[0] = m[r >> 2], F[0]), k = (E[0] = k, F[0]), Rf(G, d, r, k), J(P, z[G >> 2] - z[C >> 2], z[G + 4 >> 2] - z[C + 4 >> 2]), e = z[P >> 2] * e + z[P + 4 >> 2] * q) : (K(H.p, 183, H.xb, H.b), m[l] = -1, m[k] = -1, e = 0);
  a = d;
  return e;
}

vi.X = 1;

function wi(c, d, e, f) {
  var g, h, i, j, k = c >> 2, l = a;
  a += 176;
  j = l >> 2;
  var o = l + 16;
  i = o >> 2;
  var p = l + 32, n = l + 40, s = l + 48, q = l + 56, r = l + 64, t = l + 72, u = l + 80;
  h = l + 88;
  var w = l + 96, A = l + 104;
  g = l + 112;
  var x = l + 120, v = l + 128, C = l + 136, I = l + 144, L = l + 152, G = l + 160, P = l + 168;
  ti(c + 8, l, f);
  ti(c + 44, o, f);
  f = m[k + 20];
  f == 0 ? (x = z[j + 2], C = z[j + 3], h = c + 92 >> 2, G = z[h], g = c + 96 >> 2, Tg(p, x, C, G, z[g]), Ug(s, z[h], z[g]), Tg(n, z[i + 2], z[i + 3], z[s >> 2], z[s + 4 >> 2]), d = nh(m[k], d), i = m[d + 4 >> 2], d = (E[0] = m[d >> 2], F[0]), i = (E[0] = i, F[0]), e = nh(m[k + 1], e), k = m[e + 4 >> 2], e = (E[0] = m[e >> 2], F[0]), k = (E[0] = k, F[0]), Rf(q, l, d, i), Rf(r, o, e, k), J(t, z[r >> 2] - z[q >> 2], z[r + 4 >> 2] - z[q + 4 >> 2]), o = z[t >> 2] * z[h] + z[t + 4 >> 2] * z[g]) : f == 1 ? (Vg(u, z[j + 2], z[j + 3], z[k + 23], z[k + 24]), Rf(h, l, z[k + 21], z[k + 22]), q = z[u >> 2], r = z[u + 4 >> 2], Ug(A, q, r), Tg(w, z[i + 2], z[i + 3], z[A >> 2], z[A + 4 >> 2]), t = nh(m[k + 1], e), k = m[t + 4 >> 2], t = (E[0] = m[t >> 2], F[0]), k = (E[0] = k, F[0]), Rf(g, o, t, k), J(x, z[g >> 2] - z[h >> 2], z[g + 4 >> 2] - z[h + 4 >> 2]), o = z[x >> 2] * q + z[x + 4 >> 2] * r) : f == 2 ? (Vg(v, z[i + 2], z[i + 3], z[k + 23], z[k + 24]), Rf(C, o, z[k + 21], z[k + 22]), o = z[v >> 2], q = z[v + 4 >> 2], Ug(L, o, q), Tg(I, z[j + 2], z[j + 3], z[L >> 2], z[L + 4 >> 2]), r = nh(m[k], d), k = m[r + 4 >> 2], r = (E[0] = m[r >> 2], F[0]), k = (E[0] = k, F[0]), Rf(G, l, r, k), J(P, z[G >> 2] - z[C >> 2], z[G + 4 >> 2] - z[C + 4 >> 2]), o = z[P >> 2] * o + z[P + 4 >> 2] * q) : (K(H.p, 242, H.yb, H.b), o = 0);
  a = l;
  return o;
}

wi.X = 1;

function Ci(c, d) {
  var e = Ei(d);
  z[c >> 2] = e;
  e = Fi(d);
  z[c + 4 >> 2] = e;
}

function Gi(c, d, e) {
  var f;
  (e > -1 ? m[c + 16 >> 2] - 1 > e ? 3 : 2 : 2) == 2 && K(H.qc, 89, H.sb, H.rc);
  m[d + 4 >> 2] = 1;
  z[d + 8 >> 2] = z[c + 8 >> 2];
  f = c + 12 >> 2;
  var g = (e << 3) + m[f], h = d + 12, i = m[g + 4 >> 2];
  m[h >> 2] = m[g >> 2];
  m[h + 4 >> 2] = i;
  g = (e + 1 << 3) + m[f];
  h = d + 20;
  i = m[g + 4 >> 2];
  m[h >> 2] = m[g >> 2];
  m[h + 4 >> 2] = i;
  g = d + 28;
  e > 0 ? (h = (e - 1 << 3) + m[f], i = m[h + 4 >> 2], m[g >> 2] = m[h >> 2], m[g + 4 >> 2] = i, b[d + 44] = 1) : (h = c + 20, i = m[h + 4 >> 2], m[g >> 2] = m[h >> 2], m[g + 4 >> 2] = i, b[d + 44] = b[c + 36] & 1);
  g = d + 36;
  m[c + 16 >> 2] - 2 > e ? (e = (e + 2 << 3) + m[f], c = m[e >> 2], e = m[e + 4 >> 2], m[g >> 2] = c, m[g + 4 >> 2] = e, b[d + 45] = 1) : (f = c + 28, e = m[f >> 2], f = m[f + 4 >> 2], m[g >> 2] = e, m[g + 4 >> 2] = f, b[d + 45] = b[c + 37] & 1);
}

Gi.X = 1;

function Hi(c, d) {
  Di(c, d);
  var e = d + 12, f = c + 12, g = m[e + 4 >> 2];
  m[f >> 2] = m[e >> 2];
  m[f + 4 >> 2] = g;
  e = d + 20;
  f = c + 20;
  g = m[e + 4 >> 2];
  m[f >> 2] = m[e >> 2];
  m[f + 4 >> 2] = g;
  e = d + 28;
  f = c + 28;
  g = m[e + 4 >> 2];
  m[f >> 2] = m[e >> 2];
  m[f + 4 >> 2] = g;
  e = d + 36;
  f = c + 36;
  g = m[e + 4 >> 2];
  m[f >> 2] = m[e >> 2];
  m[f + 4 >> 2] = g;
  b[c + 44] = b[d + 44] & 1;
  b[c + 45] = b[d + 45] & 1;
}

Hi.X = 1;

function Ii(c, d, e, f) {
  var g = e >> 2, e = a;
  a += 104;
  var h = e + 8, i = e + 16, j = e + 24, k = e + 32, l = e + 40, o = e + 48, p = e + 56, n = e + 64, s = e + 72, q = e + 80, r = e + 88, t = e + 96, u = f + 4;
  J(h, z[g] - z[f >> 2], z[g + 1] - z[u >> 2]);
  var w = f + 8, A = f + 12;
  Tg(e, z[w >> 2], z[A >> 2], z[h >> 2], z[h + 4 >> 2]);
  J(j, z[g + 2] - z[f >> 2], z[g + 3] - z[u >> 2]);
  Tg(i, z[w >> 2], z[A >> 2], z[j >> 2], z[j + 4 >> 2]);
  f = z[e >> 2];
  h = z[e + 4 >> 2];
  J(k, z[i >> 2] - f, z[i + 4 >> 2] - h);
  i = c + 12;
  j = m[i + 4 >> 2];
  i = (E[0] = m[i >> 2], F[0]);
  j = (E[0] = j, F[0]);
  u = c + 20;
  c = m[u + 4 >> 2];
  u = (E[0] = m[u >> 2], F[0]);
  w = (E[0] = c, F[0]);
  J(l, u - i, w - j);
  J(o, z[l + 4 >> 2], -z[l >> 2]);
  Wf(o);
  J(p, i - f, j - h);
  var l = z[o >> 2], c = z[o + 4 >> 2], p = l * z[p >> 2] + c * z[p + 4 >> 2], A = z[k >> 2], x = z[k + 4 >> 2], k = l * A + c * x;
  k == 0 ? d = 0 : (k = p / k, k < 0 ? d = 0 : z[g + 4] < k ? d = 0 : (Uf(s, k, A, x), J(n, f + z[s >> 2], h + z[s + 4 >> 2]), J(q, u - i, w - j), g = z[q >> 2], q = z[q + 4 >> 2], s = g * g + q * q, s == 0 ? d = 0 : (J(r, z[n >> 2] - i, z[n + 4 >> 2] - j), n = (z[r >> 2] * g + z[r + 4 >> 2] * q) / s, n < 0 | n > 1 ? d = 0 : (z[d + 8 >> 2] = k, p > 0 ? (Ug(t, l, c), o = m[t + 4 >> 2], m[d >> 2] = m[t >> 2], m[d + 4 >> 2] = o) : (t = m[o + 4 >> 2], m[d >> 2] = m[o >> 2], m[d + 4 >> 2] = t), d = 1))));
  a = e;
  return d;
}

Ii.X = 1;

function Ji(c, d, e) {
  var f = c >> 2, c = a;
  a += 56;
  var g = c + 8, h = c + 16, i = c + 24, j = c + 32, k = c + 40, l = c + 48;
  Rf(c, e, z[f + 3], z[f + 4]);
  Rf(g, e, z[f + 5], z[f + 6]);
  var e = z[c >> 2], o = z[c + 4 >> 2], p = z[g >> 2], g = z[g + 4 >> 2];
  J(h, e < p ? e : p, o < g ? o : g);
  J(i, e > p ? e : p, o > g ? o : g);
  f = z[f + 2];
  J(j, f, f);
  f = z[j >> 2];
  j = z[j + 4 >> 2];
  J(k, z[h >> 2] - f, z[h + 4 >> 2] - j);
  h = m[k + 4 >> 2];
  m[d >> 2] = m[k >> 2];
  m[d + 4 >> 2] = h;
  d += 8;
  J(l, z[i >> 2] + f, z[i + 4 >> 2] + j);
  i = m[l + 4 >> 2];
  m[d >> 2] = m[l >> 2];
  m[d + 4 >> 2] = i;
  a = c;
}

Ji.X = 1;

function Ki(c, d) {
  z[c >> 2] *= d;
  z[c + 4 >> 2] *= d;
}

function Li(c, d, e) {
  var f = a;
  a += 24;
  var g = f + 8, h = f + 16;
  J(g, z[e >> 2] - z[d >> 2], z[e + 4 >> 2] - z[d + 4 >> 2]);
  Tg(f, z[d + 8 >> 2], z[d + 12 >> 2], z[g >> 2], z[g + 4 >> 2]);
  for (var d = c + 148, e = z[f >> 2], g = z[f + 4 >> 2], i = h + 4, j = 0; ; ) {
    if (j >= m[d >> 2]) {
      var k = 1;
      break;
    }
    J(h, e - z[c + (j << 3) + 20 >> 2], g - z[c + (j << 3) + 24 >> 2]);
    if (z[c + (j << 3) + 84 >> 2] * z[h >> 2] + z[c + (j << 3) + 88 >> 2] * z[i >> 2] > 0) {
      k = 0;
      break;
    }
    j += 1;
  }
  a = f;
  return k;
}

Li.X = 1;

function Mi(c, d, e, f) {
  var g, h, i = c >> 2, j = a;
  a += 56;
  var k, l = j + 8, o = j + 16, p = j + 24, n = j + 32;
  k = j + 40;
  var s = j + 48, q = f + 4;
  J(l, z[e >> 2] - z[f >> 2], z[e + 4 >> 2] - z[q >> 2]);
  h = f + 8 >> 2;
  var r = z[h];
  g = f + 12 >> 2;
  Tg(j, r, z[g], z[l >> 2], z[l + 4 >> 2]);
  J(p, z[e + 8 >> 2] - z[f >> 2], z[e + 12 >> 2] - z[q >> 2]);
  Tg(o, z[h], z[g], z[p >> 2], z[p + 4 >> 2]);
  f = z[j >> 2];
  l = z[j + 4 >> 2];
  J(n, z[o >> 2] - f, z[o + 4 >> 2] - l);
  e += 16;
  c += 148;
  var o = k + 4, p = z[n >> 2], r = z[n + 4 >> 2], t = 0, n = -1, u = z[e >> 2], q = 0;
  a : for (;;) {
    if (t < m[c >> 2]) {
      J(k, z[((t << 3) + 20 >> 2) + i] - f, z[((t << 3) + 24 >> 2) + i] - l);
      var w = z[((t << 3) + 84 >> 2) + i], A = z[((t << 3) + 88 >> 2) + i], x = w * z[k >> 2] + A * z[o >> 2], w = w * p + A * r, A = w == 0;
      b : do {
        if (A) {
          if (x < 0) {
            var v = 0;
            break a;
          } else {
            var C = n, I = u, L = q;
          }
        } else {
          C = w < 0;
          do {
            if (C && x < q * w) {
              C = t;
              I = u;
              L = x / w;
              break b;
            }
          } while (0);
          w > 0 ? x < u * w ? (C = n, I = x / w) : (C = n, I = u) : (C = n, I = u);
          L = q;
        }
      } while (0);
      if (I < L) {
        v = 0;
        break;
      }
      t += 1;
      n = C;
      u = I;
      q = L;
    } else {
      k = q < 0 ? 14 : q > z[e >> 2] ? 14 : 15;
      k == 14 && K(H.B, 249, H.vb, H.jc);
      if (n <= -1) {
        v = 0;
        break;
      }
      z[d + 8 >> 2] = q;
      Vg(s, z[h], z[g], z[((n << 3) + 84 >> 2) + i], z[((n << 3) + 88 >> 2) + i]);
      g = s;
      h = m[g + 4 >> 2];
      m[d >> 2] = m[g >> 2];
      m[d + 4 >> 2] = h;
      v = 1;
      break;
    }
  }
  a = j;
  return v;
}

Mi.X = 1;

function Ni(c, d, e) {
  var f = c >> 2, g = a;
  a += 56;
  var h = g + 8, i = g + 16, j = g + 24, k = g + 32, l = g + 40, o = g + 48;
  Rf(g, e, z[f + 5], z[f + 6]);
  var p, n, s = m[g + 4 >> 2], q = (E[0] = m[g >> 2], F[0]), s = (E[0] = s, F[0]);
  c += 148;
  var r = m[c >> 2] > 1;
  a : do {
    if (r) {
      var t = i, u = i, w = j, A = j, x = h, v = h + 4, C = 1, I = q, L = s;
      p = q;
      for (n = z[g + 4 >> 2]; ; ) {
        Rf(h, e, z[((C << 3) + 20 >> 2) + f], z[((C << 3) + 24 >> 2) + f]);
        var G = z[x >> 2], P = z[v >> 2];
        J(t, p < G ? p : G, n < P ? n : P);
        p = u;
        p = m[p >> 2];
        n = u + 4;
        n = m[n >> 2];
        m[g >> 2] = p;
        m[g + 4 >> 2] = n;
        J(w, I > G ? I : G, L > P ? L : P);
        L = m[A + 4 >> 2];
        I = (E[0] = m[A >> 2], F[0]);
        L = (E[0] = L, F[0]);
        C += 1;
        G = C < m[c >> 2];
        p = (E[0] = p, F[0]);
        n = (E[0] = n, F[0]);
        if (!G) {
          var N = I, R = L, Y = p, U = n;
          break a;
        }
      }
    } else {
      N = q, R = s, Y = q, U = z[g + 4 >> 2];
    }
  } while (0);
  e = z[f + 2];
  J(k, e, e);
  e = z[k >> 2];
  k = z[k + 4 >> 2];
  J(l, Y - e, U - k);
  Y = m[l + 4 >> 2];
  m[d >> 2] = m[l >> 2];
  m[d + 4 >> 2] = Y;
  d += 8;
  J(o, N + e, R + k);
  N = m[o + 4 >> 2];
  m[d >> 2] = m[o >> 2];
  m[d + 4 >> 2] = N;
  a = g;
}

Ni.X = 1;

function Oi(c, d, e) {
  var f, g, h = a;
  a += 56;
  var i, j = h + 8;
  g = j >> 2;
  var k = h + 16, l = h + 24, o = h + 32, p = h + 40, n = h + 48;
  f = c + 148 >> 2;
  m[f] > 2 || K(H.B, 306, H.aa, H.sc);
  Re(h, 0, 0);
  J(j, 0, 0);
  i = m[f];
  var s = i > 0;
  a : do {
    if (s) {
      for (var q = 0; ; ) {
        Pe(j, (q << 3) + c + 20);
        q += 1;
        var r = m[f];
        if (q >= r) {
          var t = r;
          break a;
        }
      }
    } else {
      t = i;
    }
  } while (0);
  Ki(j, 1 / t);
  j = m[f] > 0;
  do {
    if (j) {
      var t = k, q = k + 4, r = l, u = l + 4;
      i = z[g];
      for (var s = z[g + 1], w = p, A = p + 4, x = c + 20, v = c + 24, C = 0, I = 0, L = 0; ; ) {
        J(k, z[c + (L << 3) + 20 >> 2] - i, z[c + (L << 3) + 24 >> 2] - s);
        L += 1;
        L < m[f] ? J(l, z[c + (L << 3) + 20 >> 2] - i, z[c + (L << 3) + 24 >> 2] - s) : J(l, z[x >> 2] - i, z[v >> 2] - s);
        var G = z[t >> 2], P = z[q >> 2], N = z[r >> 2], R = z[u >> 2], Y = G * R - P * N, U = Y * .5, aa = C + U, C = U * .3333333432674408;
        J(p, G + N, P + R);
        Uf(o, C, z[w >> 2], z[A >> 2]);
        Pe(h, o);
        G = I + Y * .0833333358168602 * (G * G + N * G + N * N + P * P + R * P + R * R);
        if (L < m[f]) {
          C = aa, I = G;
        } else {
          break;
        }
      }
      t = d;
      z[t >> 2] = aa * e;
      if (aa > 1.1920928955078125e-7) {
        var ba = G, Q = aa, S = t, W = i, M = s;
        i = 13;
      } else {
        var O = G, Z = aa, X = t, T = i, ka = s;
        i = 12;
      }
    } else {
      X = d, Z = O = z[X >> 2] = 0, T = z[g], ka = z[g + 1], i = 12;
    }
  } while (0);
  i == 12 && (K(H.B, 352, H.aa, H.Ac), ba = O, Q = Z, S = X, W = T, M = ka);
  Ki(h, 1 / Q);
  g = d + 4;
  c = z[h >> 2];
  f = z[h + 4 >> 2];
  J(n, c + W, f + M);
  W = m[n >> 2];
  n = m[n + 4 >> 2];
  m[g >> 2] = W;
  m[g + 4 >> 2] = n;
  e *= ba;
  d += 12;
  z[d >> 2] = e;
  S = z[S >> 2];
  ba = (E[0] = W, F[0]);
  n = (E[0] = n, F[0]);
  z[d >> 2] = e + S * (ba * ba + n * n - (c * c + f * f));
  a = h;
}

Oi.X = 1;

function Pi(c, d) {
  var e, f, g, h = d == 0;
  a : do {
    if (h) {
      g = 0;
    } else {
      g = d > 0;
      do {
        if (g) {
          if (d > 640) {
            g = zd(d);
            break a;
          }
        } else {
          K(H.j, 104, H.s, H.qa);
        }
      } while (0);
      var i = g = id[Qi + d];
      g < 14 || K(H.j, 112, H.s, H.va);
      g = (i << 2) + c + 12 >> 2;
      f = y[g];
      if (f == 0) {
        f = c + 4 >> 2;
        var j = y[f], k = c + 8, l = m[k >> 2];
        e = c >> 2;
        j == l ? (j = m[e], l += 128, m[k >> 2] = l, k = zd(l << 3), m[e] = k, Mf(k, j, m[f] << 3), Dd((m[f] << 3) + m[e], 1024), Pf(j), k = m[f]) : k = j;
        l = m[e];
        j = zd(16384);
        e = (k << 3) + l + 4 >> 2;
        m[e] = j;
        i = m[Ri + (i << 2) >> 2];
        m[(k << 3) + l >> 2] = i;
        k = 16384 / i | 0;
        k * i < 16385 ? l = j : (K(H.j, 140, H.s, H.tc), l = m[e]);
        k -= 1;
        j = k > 0;
        b : do {
          if (j) {
            for (var o = 0, p = l; ; ) {
              var n = o + 1;
              m[p + o * i >> 2] = p + n * i;
              p = m[e];
              if (n == k) {
                var s = p;
                break b;
              } else {
                o = n;
              }
            }
          } else {
            s = l;
          }
        } while (0);
        m[s + k * i >> 2] = 0;
        m[g] = m[m[e] >> 2];
        m[f] += 1;
        g = m[e];
      } else {
        m[g] = m[f >> 2], g = f;
      }
    }
  } while (0);
  return g;
}

Pi.X = 1;

function Si(c, d, e) {
  var f = e == 0;
  a : do {
    if (!f) {
      var g = e > 0;
      do {
        if (g) {
          if (e > 640) {
            Pf(d);
            break a;
          }
        } else {
          K(H.j, 164, H.L, H.qa);
        }
      } while (0);
      var h = id[Qi + e], g = h;
      h < 14 || K(H.j, 173, H.L, H.va);
      h = d;
      g = (g << 2) + c + 12;
      m[d >> 2] = m[g >> 2];
      m[g >> 2] = h;
    }
  } while (0);
}

function Ti(c, d) {
  var e, f, g;
  g = c + 102796 >> 2;
  f = m[g];
  if (f < 32) {
    var h = f;
  } else {
    K(H.n, 38, H.hb, H.kc), h = m[g];
  }
  f = c + h * 12 + 102412 >> 2;
  m[(c + 102416 >> 2) + (h * 3 | 0)] = d;
  e = c + 102400 >> 2;
  var i = m[e];
  i + d > 102400 ? (e = zd(d), m[f] = e, b[c + h * 12 + 102420] = 1) : (m[f] = c + i, b[c + h * 12 + 102420] = 0, m[e] += d);
  e = c + 102404;
  h = m[e >> 2] + d;
  m[e >> 2] = h;
  e = c + 102408;
  m[e >> 2] = m[e >> 2] > h ? m[e >> 2] : h;
  m[g] += 1;
  return m[f];
}

function Ui(c, d) {
  var e;
  e = c + 102796 >> 2;
  var f = m[e];
  f > 0 || (K(H.n, 63, H.N, H.uc), f = m[e]);
  f -= 1;
  m[(c + 102412 >> 2) + (f * 3 | 0)] != d && K(H.n, 65, H.N, H.Bc);
  (b[c + f * 12 + 102420] & 1) == 0 ? (f = c + f * 12 + 102416, m[c + 102400 >> 2] -= m[f >> 2]) : (Pf(d), f = c + f * 12 + 102416);
  m[c + 102404 >> 2] -= m[f >> 2];
  m[e] -= 1;
}

function Vi(c) {
  return (!isNaN(c) && !isNaN(0)) & c > -Infinity ? c < Infinity : 0;
}

function Wi(c, d) {
  var e;
  if (m[c >> 2] == 2) {
    e = 2;
  } else {
    if (m[d >> 2] == 2) {
      e = 2;
    } else {
      var f = 0;
      e = 7;
    }
  }
  a : do {
    if (e == 2) {
      for (var g = c + 108; ; ) {
        g = m[g >> 2];
        if (g == 0) {
          f = 1;
          break a;
        }
        if (m[g >> 2] == d && (b[m[g + 4 >> 2] + 61] & 1) == 0) {
          f = 0;
          break a;
        }
        g += 12;
      }
    }
  } while (0);
  return f;
}

function Xi(c) {
  hd[c >> 1] = 1;
  hd[c + 2 >> 1] = -1;
  hd[c + 4 >> 1] = 0;
}

function Yi(c) {
  var d = a;
  a += 8;
  Zi(d);
  m[c >> 2] = m[d >> 2];
  m[c + 4 >> 2] = Math.floor(m[d + 4 >> 2] * .0010000000474974513);
  a = d;
}

function $i(c) {
  var d = a;
  a += 8;
  Zi(d);
  c = (m[d >> 2] - m[c >> 2]) * 1e3 + m[d + 4 >> 2] * .0010000000474974513 - y[c + 4 >> 2];
  a = d;
  return c;
}

function aj(c, d, e) {
  var f, g, h = c >> 2, i = c + 12, j = c + 64, k = c + 76, l = d + 4;
  Vi(z[l >> 2]) && Vi(z[l + 4 >> 2]) || K(H.f, 27, H.h, H.Ub);
  var o = d + 16;
  Vi(z[o >> 2]) && Vi(z[o + 4 >> 2]) || K(H.f, 28, H.h, H.cc);
  g = d + 12 >> 2;
  Vi(z[g]) || K(H.f, 29, H.h, H.lc);
  var p = d + 24;
  Vi(z[p >> 2]) || K(H.f, 30, H.h, H.vc);
  var n = d + 32, s = z[n >> 2];
  s < 0 | Vi(s) ^ 1 && K(H.f, 31, H.h, H.Cc);
  s = d + 28;
  f = z[s >> 2];
  f < 0 | Vi(f) ^ 1 && K(H.f, 32, H.h, H.Fc);
  f = c + 4 >> 1;
  hd[f] = 0;
  var q = (b[d + 39] & 1) == 0 ? 0 : hd[f] = 8;
  (b[d + 38] & 1) != 0 && (q |= 16, hd[f] = q);
  (b[d + 36] & 1) != 0 && (q |= 4, hd[f] = q);
  (b[d + 37] & 1) != 0 && (q |= 2, hd[f] = q);
  (b[d + 40] & 1) != 0 && (hd[f] = q | 32);
  m[h + 22] = e;
  e = i >> 2;
  i = m[l + 4 >> 2];
  m[e] = m[l >> 2];
  m[e + 1] = i;
  Ci(c + 20, z[g]);
  Qe(c + 28);
  i = c + 36;
  l = m[e];
  e = m[e + 1];
  m[i >> 2] = l;
  m[i + 4 >> 2] = e;
  i = c + 44;
  m[i >> 2] = l;
  m[i + 4 >> 2] = e;
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
  z[h + 18] = z[p >> 2];
  z[h + 33] = z[s >> 2];
  z[h + 34] = z[n >> 2];
  z[h + 35] = z[d + 48 >> 2];
  Qe(k);
  z[h + 21] = 0;
  z[h + 36] = 0;
  j = m[d >> 2];
  m[h] = j;
  c += 116;
  j == 2 ? (z[c >> 2] = 1, z[h + 30] = 1) : (z[c >> 2] = 0, z[h + 30] = 0);
  z[h + 31] = 0;
  z[h + 32] = 0;
  m[h + 37] = m[d + 44 >> 2];
  m[h + 25] = 0;
  m[h + 26] = 0;
}

aj.X = 1;

function bj(c) {
  var d, e, f, g, h, i = a;
  a += 56;
  var j, k = i + 8, l = i + 24, o = i + 32, p = i + 40, n = i + 48;
  h = c + 116 >> 2;
  z[h] = 0;
  g = c + 120 >> 2;
  z[g] = 0;
  f = c + 124 >> 2;
  z[f] = 0;
  var s = c + 128;
  z[s >> 2] = 0;
  var q = c + 28;
  Qe(q);
  e = m[c >> 2];
  if (e == 0 || e == 1) {
    var r = c + 12;
    j = c + 36;
    e = m[r >> 2];
    r = m[r + 4 >> 2];
    m[j >> 2] = e;
    m[j + 4 >> 2] = r;
    j = c + 44;
    m[j >> 2] = e;
    m[j + 4 >> 2] = r;
    z[c + 52 >> 2] = z[c + 56 >> 2];
    j = 18;
  } else {
    e != 2 && K(H.f, 284, H.U, H.Hb), j = 3;
  }
  if (j == 3) {
    e = i >> 2;
    m[e] = 0;
    m[e + 1] = 0;
    j = m[c + 100 >> 2];
    r = j == 0;
    a : do {
      if (!r) {
        var t = k, u = k + 12, w = k + 4, A = k + 8;
        d = j;
        for (d >>= 2; ; ) {
          var x = z[d];
          if (x != 0) {
            var v = m[d + 3];
            Fd[m[m[v >> 2] + 28 >> 2]](v, k, x);
            x = z[t >> 2];
            z[h] += x;
            Uf(l, x, z[w >> 2], z[A >> 2]);
            Pe(i, l);
            z[f] += z[u >> 2];
          }
          d = m[d + 1];
          if (d == 0) {
            break a;
          } else {
            d >>= 2;
          }
        }
      }
    } while (0);
    k = z[h];
    k > 0 ? (k = 1 / k, z[g] = k, Ki(i, k)) : (z[h] = 1, z[g] = 1);
    g = z[f];
    if (g > 0) {
      if ((hd[c + 4 >> 1] & 16) != 0) {
        j = 16;
      } else {
        var C = z[i >> 2], k = z[i + 4 >> 2];
        h = g - z[h] * (C * C + k * k);
        z[f] = h;
        h > 0 || (K(H.f, 319, H.U, H.Lb), h = z[f]);
        C = 1 / h;
        j = 17;
      }
    } else {
      j = 16;
    }
    j == 16 && (C = z[f] = 0);
    z[s >> 2] = C;
    h = c + 44;
    s = m[h + 4 >> 2];
    f = (E[0] = m[h >> 2], F[0]);
    s = (E[0] = s, F[0]);
    C = m[e];
    e = m[e + 1];
    m[q >> 2] = C;
    m[q + 4 >> 2] = e;
    q = c + 36;
    C = (E[0] = C, F[0]);
    e = (E[0] = e, F[0]);
    Rf(o, c + 12, C, e);
    e = m[o >> 2];
    o = m[o + 4 >> 2];
    m[h >> 2] = e;
    m[h + 4 >> 2] = o;
    m[q >> 2] = e;
    m[q + 4 >> 2] = o;
    q = c + 64;
    c = z[c + 72 >> 2];
    e = (E[0] = e, F[0]);
    o = (E[0] = o, F[0]);
    J(n, e - f, o - s);
    lh(p, c, z[n >> 2], z[n + 4 >> 2]);
    Pe(q, p);
  }
  a = i;
}

bj.X = 1;

function cj(c) {
  var d = c >> 2, e = a;
  a += 32;
  var f = e + 16, g = e + 24, h = e + 8;
  Ci(h, z[d + 13]);
  Vg(g, z[h >> 2], z[e + 12 >> 2], z[d + 7], z[d + 8]);
  J(f, z[d + 9] - z[g >> 2], z[d + 10] - z[g + 4 >> 2]);
  g = m[f + 4 >> 2];
  m[e >> 2] = m[f >> 2];
  m[e + 4 >> 2] = g;
  f = m[d + 22] + 102872;
  d = m[d + 25];
  g = d == 0;
  a : do {
    if (!g) {
      for (var h = c + 12, i = d; ; ) {
        if (dj(i, f, e, h), i = m[i + 4 >> 2], i == 0) {
          break a;
        }
      }
    }
  } while (0);
  a = e;
}

cj.X = 1;

function Zf(c, d) {
  var e;
  e = c + 4 >> 1;
  var f = hd[e];
  d ? (f & 2) == 0 && (hd[e] = f | 2, z[c + 144 >> 2] = 0) : (hd[e] = f & -3, z[c + 144 >> 2] = 0, Qe(c + 64), z[c + 72 >> 2] = 0, Qe(c + 76), z[c + 84 >> 2] = 0);
}

function ej(c, d) {
  var e, f;
  f = c + 88 >> 2;
  e = m[f];
  var g = m[e + 102868 >> 2];
  (g & 2) != 0 && (K(H.f, 153, H.kb, H.Hc), e = g = m[f], g = m[g + 102868 >> 2]);
  if ((g & 2) == 0) {
    var h = e;
    e = Pi(h, 44);
    e == 0 ? g = 0 : (g = e >> 2, Xi(e + 32), m[g + 10] = 0, m[g + 2] = 0, m[g + 1] = 0, m[g + 6] = 0, m[g + 7] = 0, m[g + 3] = 0, z[g] = 0, g = e);
    e = g >> 2;
    fj(g, h, c, d);
    if ((hd[c + 4 >> 1] & 32) != 0) {
      var h = g, i = m[f] + 102872, j = c + 12, k;
      k = h + 28 >> 2;
      m[k] != 0 && K(H.v, 124, H.qb, H.ea);
      var l = h + 12, o = m[l >> 2], o = Fd[m[m[o >> 2] + 12 >> 2]](o);
      m[k] = o;
      o = o > 0;
      a : do {
        if (o) {
          for (var p = h + 24, n = i, s = 0; ; ) {
            var q = m[p >> 2], r = q + s * 28, t = m[l >> 2];
            Fd[m[m[t >> 2] + 24 >> 2]](t, r, j, s);
            t = n;
            r = ki(t, r, r);
            m[t + 28 >> 2] += 1;
            of(t, r);
            m[q + s * 28 + 24 >> 2] = r;
            m[q + s * 28 + 16 >> 2] = h;
            m[q + s * 28 + 20 >> 2] = s;
            s += 1;
            if (s >= m[k]) {
              break a;
            }
          }
        }
      } while (0);
    }
    h = c + 100;
    m[e + 1] = m[h >> 2];
    m[h >> 2] = g;
    m[c + 104 >> 2] += 1;
    m[e + 2] = c;
    z[e] > 0 && bj(c);
    m[m[f] + 102868 >> 2] |= 1;
  }
}

ej.X = 1;

function ag(c, d, e) {
  var f = a;
  a += 28;
  var g = f >> 2;
  Xi(f + 22);
  m[g] = 0;
  m[g + 1] = 0;
  z[g + 2] = .20000000298023224;
  z[g + 3] = 0;
  z[g + 4] = 0;
  b[f + 20] = 0;
  m[f >> 2] = d;
  z[f + 16 >> 2] = e;
  ej(c, f);
  a = f;
}

function gj(c, d) {
  var e, f;
  e = m[m[d + 48 >> 2] + 8 >> 2];
  var g = m[m[d + 52 >> 2] + 8 >> 2];
  f = m[c + 72 >> 2];
  if (f != 0 && (m[d + 4 >> 2] & 2) != 0) {
    Fd[m[m[f >> 2] + 12 >> 2]](f, d);
  }
  var h = d + 8, i = m[h >> 2];
  f = d + 12 >> 2;
  i != 0 && (m[i + 12 >> 2] = m[f]);
  i = m[f];
  i != 0 && (m[i + 8 >> 2] = m[h >> 2]);
  h = c + 60;
  m[h >> 2] == d && (m[h >> 2] = m[f]);
  h = d + 24;
  i = m[h >> 2];
  f = d + 28 >> 2;
  i != 0 && (m[i + 12 >> 2] = m[f]);
  i = m[f];
  i != 0 && (m[i + 8 >> 2] = m[h >> 2]);
  e += 112;
  d + 16 == m[e >> 2] && (m[e >> 2] = m[f]);
  f = d + 40;
  h = m[f >> 2];
  e = d + 44 >> 2;
  h != 0 && (m[h + 12 >> 2] = m[e]);
  h = m[e];
  h != 0 && (m[h + 8 >> 2] = m[f >> 2]);
  g += 112;
  d + 32 == m[g >> 2] && (m[g >> 2] = m[e]);
  hj(d, m[c + 76 >> 2]);
  m[c + 64 >> 2] -= 1;
}

gj.X = 1;

function ij(c) {
  var d, e, f, g = m[c + 60 >> 2], h = g == 0;
  a : do {
    if (!h) {
      var i = c, j = c + 72, k = c + 68, l = g;
      for (e = l >> 2; ; ) {
        var o = m[e + 12], p = o, n = m[e + 13], s = n, q = m[e + 14], r = m[e + 15], t = m[o + 8 >> 2], u = m[n + 8 >> 2];
        d = l + 4 >> 2;
        var w = m[d], A = (w & 8) == 0;
        do {
          if (A) {
            f = 11;
          } else {
            if (Wi(u, t)) {
              f = m[k >> 2];
              if (f == 0) {
                f = w;
              } else {
                if (Fd[m[m[f >> 2] + 8 >> 2]](f, p, s)) {
                  f = m[d];
                } else {
                  d = m[e + 3];
                  gj(c, l);
                  var x = d;
                  f = 5;
                  break;
                }
              }
              m[d] = f & -9;
              f = 11;
            } else {
              x = m[e + 3], gj(c, l), f = 5;
            }
          }
        } while (0);
        f == 11 && (((hd[t + 4 >> 1] & 2) != 0 ? m[t >> 2] != 0 : 0) | ((hd[u + 4 >> 1] & 2) != 0 ? m[u >> 2] != 0 : 0) ? (t = i, n = m[(m[n + 24 >> 2] + 24 >> 2) + (r * 7 | 0)], o = jj(t, m[(m[o + 24 >> 2] + 24 >> 2) + (q * 7 | 0)]), q = jj(t, n), kj(o, q) ? (lj(l, m[j >> 2]), x = m[e + 3]) : (e = m[e + 3], gj(c, l), x = e)) : x = m[e + 3]);
        if (x == 0) {
          break a;
        } else {
          l = x, e = l >> 2;
        }
      }
    }
  } while (0);
}

ij.X = 1;

function mj(c, d) {
  var e, f, g = a;
  a += 4;
  f = c + 52 >> 2;
  m[f] = 0;
  e = c + 40 >> 2;
  var h = m[e];
  if (h > 0) {
    for (var i = c + 32, j = c + 56, k = 0; ; ) {
      var l = m[m[i >> 2] + (k << 2) >> 2];
      m[j >> 2] = l;
      if (l != -1) {
        var h = jj(c, l), o = c, l = c, p = h, h = a;
        a += 1036;
        var n = h;
        m[n >> 2] = n + 4;
        m[n + 1028 >> 2] = 0;
        m[n + 1032 >> 2] = 256;
        nj(h, o);
        o += 4;
        for (n = h + 1028; ; ) {
          if (m[n >> 2] <= 0) {
            break;
          }
          var s;
          s = h;
          var q = pa, q = s + 1028 >> 2, r = m[q];
          r > 0 || (K(H.fc, 67, H.fb, H.nc), r = m[q]);
          r -= 1;
          m[q] = r;
          s = m[m[s >> 2] + (r << 2) >> 2];
          if (s != -1 && (q = m[o >> 2], kj(q + s * 36, p))) {
            if (r = q + s * 36 + 24, m[r >> 2] == -1) {
              var t = r = q = pa, t = l + 56 >> 2, u = m[t];
              if (u != s) {
                var r = l + 52 >> 2, w = m[r], A = l + 48, x = m[A >> 2], q = l + 44 >> 2;
                w == x ? (w = m[q], m[A >> 2] = x << 1, A = zd(x * 24), m[q] = A, Mf(A, w, m[r] * 12), Pf(w), A = m[t], w = m[r]) : A = u;
                m[m[q] + w * 12 >> 2] = s < A ? s : A;
                m[m[q] + m[r] * 12 + 4 >> 2] = s > m[t] ? s : m[t];
                m[r] += 1;
              }
            } else {
              nj(h, r), nj(h, q + s * 36 + 28);
            }
          }
        }
        l = h;
        p = m[l >> 2];
        p != l + 4 && (Pf(p), m[l >> 2] = 0);
        a = h;
        h = m[e];
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
  m[e] = 0;
  e = c + 44 >> 2;
  j = m[e];
  m[g >> 2] = 2;
  oj(j, j + i * 12, g);
  i = m[f] > 0;
  a : do {
    if (i) {
      j = c;
      l = m[e];
      k = 0;
      h = l;
      l = m[l >> 2];
      b : for (;;) {
        p = h + k * 12;
        n = pj(j, l);
        o = h + k * 12 + 4;
        s = pj(j, m[o >> 2]);
        qj(d, n, s);
        n = m[f];
        for (s = k; ; ) {
          s += 1;
          if (s >= n) {
            break a;
          }
          q = m[e];
          r = m[(q >> 2) + (s * 3 | 0)];
          if (r != m[p >> 2]) {
            k = s;
            h = q;
            l = r;
            continue b;
          }
          if (m[(q + 4 >> 2) + (s * 3 | 0)] != m[o >> 2]) {
            k = s;
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

mj.X = 1;

function qj(c, d, e) {
  var f, g, h, i = m[d + 16 >> 2], j = m[e + 16 >> 2], d = m[d + 20 >> 2], e = m[e + 20 >> 2], k = m[i + 8 >> 2], l = m[j + 8 >> 2], o = k == l;
  a : do {
    if (!o) {
      var p = m[l + 112 >> 2];
      for (h = p >> 2; ; ) {
        if (p == 0) {
          break;
        }
        if (m[h] == k) {
          f = m[h + 1] >> 2;
          var p = m[f + 12], n = m[f + 13];
          g = m[f + 14];
          f = m[f + 15];
          if (p == i & n == j & g == d & f == e) {
            break a;
          }
          if (p == j & n == i & g == e & f == d) {
            break a;
          }
        }
        p = m[h + 3];
        h = p >> 2;
      }
      if (Wi(l, k) && (h = m[c + 68 >> 2], h == 0 || Fd[m[m[h >> 2] + 8 >> 2]](h, i, j))) {
        h = i;
        p = d;
        n = j;
        g = e;
        f = m[c + 76 >> 2];
        id[rj] || (sj(4, 6, 0, 0), sj(8, 10, 2, 0), sj(12, 14, 2, 2), sj(16, 18, 1, 0), sj(20, 22, 1, 2), sj(24, 26, 3, 0), sj(28, 30, 3, 2), b[rj] = 1);
        var s = m[m[h + 12 >> 2] + 4 >> 2], q = m[m[n + 12 >> 2] + 4 >> 2];
        s < 4 || K(H.g, 80, H.Y, H.ga);
        q < 4 || K(H.g, 81, H.Y, H.ma);
        var r = y[(tj >> 2) + (s * 12 | 0) + (q * 3 | 0)];
        f = n = r == 0 ? 0 : (b[tj + s * 48 + q * 12 + 8] & 1) == 0 ? Fd[r](n, g, h, p, f) : Fd[r](h, p, n, g, f);
        n != 0 && (h = m[m[n + 48 >> 2] + 8 >> 2], p = m[m[n + 52 >> 2] + 8 >> 2], m[n + 8 >> 2] = 0, g = c + 60 >> 2, m[n + 12 >> 2] = m[g], s = m[g], s != 0 && (m[s + 8 >> 2] = f), m[g] = f, g = f = n + 16, m[n + 20 >> 2] = n, m[f >> 2] = p, m[n + 24 >> 2] = 0, f = h + 112 >> 2, m[n + 28 >> 2] = m[f], s = m[f], s != 0 && (m[s + 8 >> 2] = g), m[f] = g, g = f = n + 32, m[n + 36 >> 2] = n, m[f >> 2] = h, m[n + 40 >> 2] = 0, f = p + 112 >> 2, m[n + 44 >> 2] = m[f], n = m[f], n != 0 && (m[n + 8 >> 2] = g), m[f] = g, Zf(h, 1), Zf(p, 1), m[c + 64 >> 2] += 1);
      }
    }
  } while (0);
}

qj.X = 1;

function jj(c, d) {
  (d > -1 ? m[c + 12 >> 2] > d ? 3 : 2 : 2) == 2 && K(H.la, 159, H.tb, H.w);
  return m[c + 4 >> 2] + d * 36;
}

function pj(c, d) {
  (d > -1 ? m[c + 12 >> 2] > d ? 3 : 2 : 2) == 2 && K(H.la, 153, H.ub, H.w);
  return m[(m[c + 4 >> 2] + 16 >> 2) + (d * 9 | 0)];
}

function oj(c, d, e) {
  var f, g, h, i, j, k, l, o, p, n, s, q, r, t, u, w, A = e >> 2, x = d, v = c;
  a : for (;;) {
    var C = v, I = v + 12, L = v, G = v + 4, P = v + 8;
    w = v >> 2;
    var N = x;
    b : for (;;) {
      var R = N, Y = R - C, U = Y / 12 | 0;
      if (U == 0 || U == 1) {
        break a;
      } else {
        if (U == 2) {
          var aa = N - 12;
          if (!Fd[m[A]](aa, v)) {
            break a;
          }
          var ba = m[L >> 2], Q = m[G >> 2], S = m[P >> 2];
          u = aa >> 2;
          m[w] = m[u];
          m[w + 1] = m[u + 1];
          m[w + 2] = m[u + 2];
          m[aa >> 2] = ba;
          m[N - 12 + 4 >> 2] = Q;
          m[N - 12 + 8 >> 2] = S;
          break a;
        } else {
          if (U == 3) {
            uj(v, I, N - 12, e);
            break a;
          } else {
            if (U == 4) {
              vj(v, I, v + 24, N - 12, e);
              break a;
            } else {
              if (U == 5) {
                wj(v, I, v + 24, v + 36, N - 12, e);
                break a;
              } else {
                if (Y < 372) {
                  var W = v, M = N, O = e, Z = pa, X = pa, T = pa, ka = pa, Ha = a;
                  a += 12;
                  var gb = W + 24;
                  uj(W, W + 12, gb, O);
                  var Va = W + 36, ya = Va == M;
                  c : do {
                    if (!ya) {
                      for (var ka = Ha >> 2, Na = gb, na = Va; ; ) {
                        if (Fd[m[O >> 2]](na, Na)) {
                          T = na >> 2;
                          m[ka] = m[T];
                          m[ka + 1] = m[T + 1];
                          m[ka + 2] = m[T + 2];
                          for (var fa = Na, ha = na; ; ) {
                            X = ha >> 2;
                            Z = fa >> 2;
                            m[X] = m[Z];
                            m[X + 1] = m[Z + 1];
                            m[X + 2] = m[Z + 2];
                            if (fa == W) {
                              break;
                            }
                            var za = fa - 12;
                            if (Fd[m[O >> 2]](Ha, za)) {
                              ha = fa, fa = za;
                            } else {
                              break;
                            }
                          }
                          m[Z] = m[ka];
                          m[Z + 1] = m[ka + 1];
                          m[Z + 2] = m[ka + 2];
                        }
                        var Ra = na + 12;
                        if (Ra == M) {
                          break c;
                        } else {
                          Na = na, na = Ra;
                        }
                      }
                    }
                  } while (0);
                  a = Ha;
                  break a;
                } else {
                  var wa = N - 12, ua = Y / 24 | 0, ga = v + ua * 12;
                  if (Y > 11988) {
                    var qa = Y / 48 | 0, Oa = wj(v, v + qa * 12, ga, v + (qa + ua) * 12, wa, e);
                  } else {
                    Oa = uj(v, ga, wa, e);
                  }
                  if (Fd[m[A]](v, ga)) {
                    var oa = wa, da = Oa;
                  } else {
                    for (var ca = wa; ; ) {
                      var Ea = ca - 12, la = y[A];
                      if (v == Ea) {
                        break b;
                      }
                      if (Fd[la](Ea, ga)) {
                        break;
                      } else {
                        ca = Ea;
                      }
                    }
                    var xa = m[L >> 2], Xa = m[G >> 2], Ya = m[P >> 2];
                    t = Ea >> 2;
                    m[w] = m[t];
                    m[w + 1] = m[t + 1];
                    m[w + 2] = m[t + 2];
                    m[Ea >> 2] = xa;
                    m[ca - 12 + 4 >> 2] = Xa;
                    m[ca - 12 + 8 >> 2] = Ya;
                    oa = Ea;
                    da = Oa + 1;
                  }
                  var ma = I < oa;
                  c : do {
                    if (ma) {
                      for (var ia = oa, Pa = I, Ia = da, Ca = ga; ; ) {
                        var Sa = Fd[m[A]](Pa, Ca);
                        d : do {
                          if (Sa) {
                            for (var Fa = Pa; ; ) {
                              var Ja = Fa + 12;
                              if (Fd[m[A]](Ja, Ca)) {
                                Fa = Ja;
                              } else {
                                var ja = Ja;
                                r = ja >> 2;
                                break d;
                              }
                            }
                          } else {
                            ja = Pa, r = ja >> 2;
                          }
                        } while (0);
                        for (var Da = ia; ; ) {
                          var va = Da - 12;
                          if (Fd[m[A]](va, Ca)) {
                            break;
                          } else {
                            Da = va;
                          }
                        }
                        if (ja > va) {
                          var sa = ja;
                          q = sa >> 2;
                          var $ = Ia, Ka = Ca;
                          s = Ka >> 2;
                          break c;
                        }
                        var ob = m[r], ib = m[r + 1], jb = m[r + 2];
                        n = ja >> 2;
                        p = va >> 2;
                        m[n] = m[p];
                        m[n + 1] = m[p + 1];
                        m[n + 2] = m[p + 2];
                        m[va >> 2] = ob;
                        m[Da - 12 + 4 >> 2] = ib;
                        m[Da - 12 + 8 >> 2] = jb;
                        var tb = Ca == ja ? va : Ca, ia = va, Pa = ja + 12;
                        Ia += 1;
                        Ca = tb;
                      }
                    } else {
                      sa = I, q = sa >> 2, $ = da, Ka = ga, s = Ka >> 2;
                    }
                  } while (0);
                  if (sa == Ka) {
                    var kb = $;
                  } else {
                    if (Fd[m[A]](Ka, sa)) {
                      var vb = m[q], lb = m[q + 1], mb = m[q + 2];
                      o = sa >> 2;
                      l = Ka >> 2;
                      m[o] = m[l];
                      m[o + 1] = m[l + 1];
                      m[o + 2] = m[l + 2];
                      m[s] = vb;
                      m[s + 1] = lb;
                      m[s + 2] = mb;
                      kb = $ + 1;
                    } else {
                      kb = $;
                    }
                  }
                  if (kb == 0) {
                    var Ba = xj(v, sa, e), sb = sa + 12;
                    if (xj(sb, N, e)) {
                      if (Ba) {
                        break a;
                      } else {
                        N = sa;
                        continue;
                      }
                    } else {
                      if (Ba) {
                        x = N;
                        v = sb;
                        continue a;
                      }
                    }
                  }
                  var Za = sa;
                  if (Za - C < R - Za) {
                    oj(v, sa, e);
                    x = N;
                    v = sa + 12;
                    continue a;
                  } else {
                    oj(sa + 12, N, e), N = sa;
                  }
                }
              }
            }
          }
        }
      }
    }
    if (Fd[la](v, wa)) {
      var hb = I;
    } else {
      var bb = I;
      for (k = bb >> 2; ; ) {
        if (bb == wa) {
          break a;
        }
        if (Fd[m[A]](v, bb)) {
          break;
        }
        bb += 12;
        k = bb >> 2;
      }
      var cb = m[k], eb = m[k + 1], wb = m[k + 2];
      j = bb >> 2;
      i = wa >> 2;
      m[j] = m[i];
      m[j + 1] = m[i + 1];
      m[j + 2] = m[i + 2];
      m[wa >> 2] = cb;
      m[N - 12 + 4 >> 2] = eb;
      m[N - 12 + 8 >> 2] = wb;
      hb = bb + 12;
    }
    if (hb == wa) {
      break;
    } else {
      var pb = wa, qb = hb;
    }
    for (;;) {
      var fb = Fd[m[A]](v, qb);
      b : do {
        if (fb) {
          var La = qb;
          h = La >> 2;
        } else {
          for (var Wa = qb; ; ) {
            var db = Wa + 12;
            if (Fd[m[A]](v, db)) {
              La = db;
              h = La >> 2;
              break b;
            } else {
              Wa = db;
            }
          }
        }
      } while (0);
      for (var ub = pb; ; ) {
        var Ta = ub - 12;
        if (Fd[m[A]](v, Ta)) {
          ub = Ta;
        } else {
          break;
        }
      }
      if (La >= Ta) {
        x = N;
        v = La;
        continue a;
      }
      var Bb = m[h], xb = m[h + 1], nb = m[h + 2];
      g = La >> 2;
      f = Ta >> 2;
      m[g] = m[f];
      m[g + 1] = m[f + 1];
      m[g + 2] = m[f + 2];
      m[Ta >> 2] = Bb;
      m[ub - 12 + 4 >> 2] = xb;
      m[ub - 12 + 8 >> 2] = nb;
      pb = Ta;
      qb = La + 12;
    }
  }
}

oj.X = 1;

function uj(c, d, e, f) {
  var g, h, i = e >> 2, j = c >> 2;
  g = Fd[m[f >> 2]](d, c);
  var k = Fd[m[f >> 2]](e, d);
  if (g) {
    var l = m[j];
    g = m[j + 1];
    j = m[j + 2];
    h = c >> 2;
    k ? (d = e >> 2, m[h] = m[d], m[h + 1] = m[d + 1], m[h + 2] = m[d + 2], m[i] = l, m[i + 1] = g, m[i + 2] = j, i = 1) : (c = d >> 2, m[h] = m[c], m[h + 1] = m[c + 1], m[h + 2] = m[c + 2], m[d >> 2] = l, l = d + 4, m[l >> 2] = g, g = d + 8, m[g >> 2] = j, Fd[m[f >> 2]](e, d) ? (d = m[d >> 2], f = m[l >> 2], j = m[g >> 2], e >>= 2, m[c] = m[e], m[c + 1] = m[e + 1], m[c + 2] = m[e + 2], m[i] = d, m[i + 1] = f, m[i + 2] = j, i = 2) : i = 1);
  } else {
    if (k) {
      h = m[d >> 2];
      var l = d + 4, o = m[l >> 2], k = d + 8, p = m[k >> 2];
      g = d >> 2;
      e >>= 2;
      m[g] = m[e];
      m[g + 1] = m[e + 1];
      m[g + 2] = m[e + 2];
      m[i] = h;
      m[i + 1] = o;
      m[i + 2] = p;
      Fd[m[f >> 2]](d, c) ? (i = m[j], e = m[j + 1], f = m[j + 2], c >>= 2, m[c] = m[g], m[c + 1] = m[g + 1], m[c + 2] = m[g + 2], m[d >> 2] = i, m[l >> 2] = e, m[k >> 2] = f, i = 2) : i = 1;
    } else {
      i = 0;
    }
  }
  return i;
}

uj.X = 1;

function vj(c, d, e, f, g) {
  var h, i, j = uj(c, d, e, g);
  if (Fd[m[g >> 2]](f, e)) {
    var k = m[e >> 2], l = e + 4, o = m[l >> 2], p = e + 8, n = m[p >> 2];
    i = e >> 2;
    h = f >> 2;
    m[i] = m[h];
    m[i + 1] = m[h + 1];
    m[i + 2] = m[h + 2];
    m[f >> 2] = k;
    m[f + 4 >> 2] = o;
    m[f + 8 >> 2] = n;
    f = j + 1;
    if (Fd[m[g >> 2]](e, d)) {
      o = m[d >> 2];
      h = d + 4;
      var n = m[h >> 2], k = d + 8, s = m[k >> 2], f = d >> 2;
      m[f] = m[i];
      m[f + 1] = m[i + 1];
      m[f + 2] = m[i + 2];
      m[e >> 2] = o;
      m[l >> 2] = n;
      m[p >> 2] = s;
      e = j + 2;
      Fd[m[g >> 2]](d, c) ? (g = m[c >> 2], e = m[c + 4 >> 2], i = m[c + 8 >> 2], c >>= 2, m[c] = m[f], m[c + 1] = m[f + 1], m[c + 2] = m[f + 2], m[d >> 2] = g, m[h >> 2] = e, m[k >> 2] = i, d = j + 3) : d = e;
    } else {
      d = f;
    }
  } else {
    d = j;
  }
  return d;
}

vj.X = 1;

function wj(c, d, e, f, g, h) {
  var i, j, k = vj(c, d, e, f, h);
  if (Fd[m[h >> 2]](g, f)) {
    var l = m[f >> 2], o = f + 4, p = m[o >> 2], n = f + 8, s = m[n >> 2];
    j = f >> 2;
    i = g >> 2;
    m[j] = m[i];
    m[j + 1] = m[i + 1];
    m[j + 2] = m[i + 2];
    m[g >> 2] = l;
    m[g + 4 >> 2] = p;
    m[g + 8 >> 2] = s;
    g = k + 1;
    if (Fd[m[h >> 2]](f, e)) {
      p = m[e >> 2];
      i = e + 4;
      var s = m[i >> 2], l = e + 8, q = m[l >> 2], g = e >> 2;
      m[g] = m[j];
      m[g + 1] = m[j + 1];
      m[g + 2] = m[j + 2];
      m[f >> 2] = p;
      m[o >> 2] = s;
      m[n >> 2] = q;
      f = k + 2;
      Fd[m[h >> 2]](e, d) ? (n = m[d >> 2], j = d + 4, p = m[j >> 2], o = d + 8, s = m[o >> 2], f = d >> 2, m[f] = m[g], m[f + 1] = m[g + 1], m[f + 2] = m[g + 2], m[e >> 2] = n, m[i >> 2] = p, m[l >> 2] = s, e = k + 3, Fd[m[h >> 2]](d, c) ? (h = m[c >> 2], e = m[c + 4 >> 2], g = m[c + 8 >> 2], c >>= 2, m[c] = m[f], m[c + 1] = m[f + 1], m[c + 2] = m[f + 2], m[d >> 2] = h, m[j >> 2] = e, m[o >> 2] = g, d = k + 4) : d = e) : d = f;
    } else {
      d = g;
    }
  } else {
    d = k;
  }
  return d;
}

wj.X = 1;

function xj(c, d, e) {
  var f, g, h, i, j = a;
  a += 12;
  var k = (d - c) / 12 | 0;
  a : do {
    if (k == 0 || k == 1) {
      h = 1;
    } else {
      if (k == 2) {
        var l = d - 12;
        if (Fd[m[e >> 2]](l, c)) {
          var o = m[c >> 2];
          g = m[c + 4 >> 2];
          var p = m[c + 8 >> 2];
          i = c >> 2;
          h = l >> 2;
          m[i] = m[h];
          m[i + 1] = m[h + 1];
          m[i + 2] = m[h + 2];
          m[l >> 2] = o;
          m[d - 12 + 4 >> 2] = g;
          m[d - 12 + 8 >> 2] = p;
        }
        h = 1;
      } else {
        if (k == 3) {
          uj(c, c + 12, d - 12, e), h = 1;
        } else {
          if (k == 4) {
            vj(c, c + 12, c + 24, d - 12, e), h = 1;
          } else {
            if (k == 5) {
              wj(c, c + 12, c + 24, c + 36, d - 12, e), h = 1;
            } else {
              o = c + 24;
              uj(c, c + 12, o, e);
              h = j >> 2;
              i = c + 36;
              for (l = 0; ; ) {
                if (i == d) {
                  h = 1;
                  break a;
                }
                if (Fd[m[e >> 2]](i, o)) {
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
                    p = o - 12;
                    if (Fd[m[e >> 2]](j, p)) {
                      g = o, o = p;
                    } else {
                      break;
                    }
                  }
                  m[f] = m[h];
                  m[f + 1] = m[h + 1];
                  m[f + 2] = m[h + 2];
                  l += 1;
                  if (l == 8) {
                    break;
                  }
                }
                o = i;
                i += 12;
              }
              h = i + 12 == d;
            }
          }
        }
      }
    }
  } while (0);
  a = j;
  return h;
}

xj.X = 1;

function nj(c, d) {
  var e, f;
  f = c + 1028 >> 2;
  var g = c + 1032, h = m[g >> 2], i = m[f] == h;
  e = c >> 2;
  i && (i = m[e], m[g >> 2] = h << 1, g = zd(h << 3), m[e] = g, Mf(g, i, m[f] << 2), i != c + 4 && Pf(i));
  m[(m[f] << 2) + m[e] >> 2] = m[d >> 2];
  m[f] += 1;
}

function kj(c, d) {
  var e = a;
  a += 16;
  var f = e + 8;
  J(e, z[d >> 2] - z[c + 8 >> 2], z[d + 4 >> 2] - z[c + 12 >> 2]);
  var g = m[e >> 2], h = m[e + 4 >> 2];
  J(f, z[c >> 2] - z[d + 8 >> 2], z[c + 4 >> 2] - z[d + 12 >> 2]);
  var i = m[f >> 2], f = m[f + 4 >> 2];
  (E[0] = g, F[0]) > 0 ? h = 0 : (g = (E[0] = f, F[0]), i = (E[0] = i, F[0]), h = (E[0] = h, F[0]) > 0 | i > 0 | g > 0 ? 0 : 1);
  a = e;
  return h;
}

kj.X = 1;

function fj(c, d, e, f) {
  var g, h = f >> 2, i = c >> 2;
  m[i + 10] = m[h + 1];
  z[i + 4] = z[h + 2];
  z[i + 5] = z[h + 3];
  m[i + 2] = e;
  m[i + 1] = 0;
  g = c + 32 >> 1;
  e = f + 22 >> 1;
  hd[g] = hd[e];
  hd[g + 1] = hd[e + 1];
  hd[g + 2] = hd[e + 2];
  b[c + 38] = b[f + 20] & 1;
  f = m[h];
  f = Fd[m[m[f >> 2] + 8 >> 2]](f, d);
  m[i + 3] = f;
  f = Fd[m[m[f >> 2] + 12 >> 2]](f);
  d = Pi(d, f * 28);
  c = c + 24 >> 2;
  m[c] = d;
  e = f > 0;
  a : do {
    if (e) {
      g = 0;
      for (var j = d; ; ) {
        m[(j + 16 >> 2) + (g * 7 | 0)] = 0;
        m[m[c] + g * 28 + 24 >> 2] = -1;
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

fj.X = 1;

function xl(c, d) {
  var e, f;
  m[c + 28 >> 2] != 0 && K(H.v, 72, H.$, H.ea);
  f = c + 12 >> 2;
  e = m[f];
  e = Fd[m[m[e >> 2] + 12 >> 2]](e);
  var g = c + 24;
  Si(d, m[g >> 2], e * 28);
  m[g >> 2] = 0;
  g = m[f];
  e = g >> 2;
  var h = m[e + 1];
  h == 0 ? (Fd[m[m[e] >> 2]](g), Si(d, g, 20)) : h == 1 ? (Fd[m[m[e] >> 2]](g), Si(d, g, 48)) : h == 2 ? (Fd[m[m[e] >> 2]](g), Si(d, g, 152)) : h == 3 ? (Fd[m[m[e] >> 2]](g), Si(d, g, 40)) : K(H.v, 115, H.$, H.b);
  m[f] = 0;
}

xl.X = 1;

function dj(c, d, e, f) {
  var g = a;
  a += 40;
  var h = g + 16, i = g + 32, j = c + 28, k = m[j >> 2] > 0;
  a : do {
    if (k) {
      for (var l = c + 24, o = g, p = h, n = c + 12, s = d, q = i, r = f, t = f + 4, u = e, w = e + 4, A = 0; ; ) {
        var x = m[l >> 2], v = x + A * 28, C = m[n >> 2], I = x + A * 28 + 20;
        Fd[m[m[C >> 2] + 24 >> 2]](C, g, e, m[I >> 2]);
        C = m[n >> 2];
        Fd[m[m[C >> 2] + 24 >> 2]](C, h, f, m[I >> 2]);
        mi(v, o, p);
        J(i, z[r >> 2] - z[u >> 2], z[t >> 2] - z[w >> 2]);
        I = s;
        x = m[(x + 24 >> 2) + (A * 7 | 0)];
        pi(I, x, v, q) && of(I, x);
        A += 1;
        if (A >= m[j >> 2]) {
          break a;
        }
      }
    }
  } while (0);
  a = g;
}

dj.X = 1;

function mn(c, d, e, f, g, h) {
  var i, j = c >> 2;
  i = c + 40 >> 2;
  m[i] = d;
  m[j + 11] = e;
  m[j + 12] = f;
  m[j + 7] = 0;
  m[j + 9] = 0;
  m[j + 8] = 0;
  c >>= 2;
  m[c] = g;
  m[j + 1] = h;
  d = Ti(g, d << 2);
  m[j + 2] = d;
  e = Ti(m[c], e << 2);
  m[j + 3] = e;
  f = Ti(m[c], f << 2);
  m[j + 4] = f;
  f = Ti(m[c], m[i] * 12);
  m[j + 6] = f;
  i = Ti(m[c], m[i] * 12);
  m[j + 5] = i;
}

function nn(c) {
  var d = c >> 2;
  c >>= 2;
  Ui(m[c], m[d + 5]);
  Ui(m[c], m[d + 6]);
  Ui(m[c], m[d + 4]);
  Ui(m[c], m[d + 3]);
  Ui(m[c], m[d + 2]);
}

function on(c) {
  var d = c >> 2, e = a;
  a += 16;
  var f = e + 8, g = c + 20;
  Ci(g, z[d + 14]);
  c += 12;
  Vg(f, z[g >> 2], z[d + 6], z[d + 7], z[d + 8]);
  J(e, z[d + 11] - z[f >> 2], z[d + 12] - z[f + 4 >> 2]);
  d = m[e + 4 >> 2];
  m[c >> 2] = m[e >> 2];
  m[c + 4 >> 2] = d;
  a = e;
}

function pn(c, d) {
  var e = a;
  a += 20;
  var f = c + 4, g = m[f >> 2] == 0;
  a : do {
    if (!g) {
      var h = c + 36;
      if (m[h >> 2] > 0) {
        for (var i = c + 12, j = e + 16, k = 0; ; ) {
          var l = m[m[i >> 2] + (k << 2) >> 2], o = m[(d + 144 >> 2) + (k * 38 | 0)];
          m[j >> 2] = o;
          var p = o > 0;
          b : do {
            if (p) {
              for (var n = 0; ; ) {
                if (z[e + (n << 2) >> 2] = z[(d + 16 >> 2) + (k * 38 | 0) + (n * 9 | 0)], z[e + (n << 2) + 8 >> 2] = z[(d + 20 >> 2) + (k * 38 | 0) + (n * 9 | 0)], n += 1, n >= o) {
                  break b;
                }
              }
            }
          } while (0);
          o = m[f >> 2];
          Fd[m[m[o >> 2] + 20 >> 2]](o, l, e);
          k += 1;
          if (k >= m[h >> 2]) {
            break a;
          }
        }
      }
    }
  } while (0);
  a = e;
}

function qn(c, d, e, f, g) {
  var h, i, j, k, l, o, p, n, s, q, r, t, u = a;
  a += 208;
  var w = u + 8, A = u + 16, x = u + 24, v = u + 32, C = u + 40, I = u + 48, L = u + 80;
  t = L >> 2;
  var G = u + 124, P = u + 176, N = u + 184, R = u + 192, Y = u + 200;
  Yi(u);
  var U = z[e >> 2];
  r = c + 28 >> 2;
  var aa = m[r] > 0;
  a : do {
    if (aa) {
      for (var ba = c + 8, Q = w, S = c + 20, W = c + 24, M = f, O = f + 4, Z = v, X = v + 4, T = C, ka = C + 4, Ha = x, gb = x + 4, Va = 0; ; ) {
        var ya = m[m[ba >> 2] + (Va << 2) >> 2];
        q = ya >> 2;
        var Na = ya + 44, na = z[Na >> 2], fa = z[q + 12], ha = z[q + 14], za = ya + 64, Ra = za, wa = m[Ra >> 2], ua = za + 4, ga = m[ua >> 2], qa = Q;
        m[qa >> 2] = wa;
        var Oa = Q + 4;
        m[Oa >> 2] = ga;
        var oa = z[q + 18], da = Na, ca = ya + 36, Ea = m[da + 4 >> 2];
        m[ca >> 2] = m[da >> 2];
        m[ca + 4 >> 2] = Ea;
        z[q + 13] = ha;
        if (m[q] == 2) {
          Uf(v, z[q + 35], z[M >> 2], z[O >> 2]);
          Uf(C, z[q + 30], z[q + 19], z[q + 20]);
          J(x, z[Z >> 2] + z[T >> 2], z[X >> 2] + z[ka >> 2]);
          Uf(A, U, z[Ha >> 2], z[gb >> 2]);
          Pe(w, A);
          var la = oa + U * z[q + 32] * z[q + 21];
          Ki(w, 0 > (1 - U * z[q + 33] < 1 ? 1 - U * z[q + 33] : 1) ? 0 : 1 - U * z[q + 33] < 1 ? 1 - U * z[q + 33] : 1);
          var xa = la * (0 > (1 - U * z[q + 34] < 1 ? 1 - U * z[q + 34] : 1) ? 0 : 1 - U * z[q + 34] < 1 ? 1 - U * z[q + 34] : 1), Xa = m[Q + 4 >> 2], Ya = m[Q >> 2];
        } else {
          xa = oa, Xa = ga, Ya = wa;
        }
        var ma = m[S >> 2];
        z[(ma >> 2) + (Va * 3 | 0)] = na;
        z[(ma + 4 >> 2) + (Va * 3 | 0)] = fa;
        z[(m[S >> 2] + 8 >> 2) + (Va * 3 | 0)] = ha;
        var ia = m[W >> 2] + Va * 12, Pa = ia;
        m[Pa >> 2] = Ya;
        var Ia = ia + 4;
        m[Ia >> 2] = Xa;
        z[(m[W >> 2] + 8 >> 2) + (Va * 3 | 0)] = xa;
        var Ca = Va + 1;
        if (Ca < m[r]) {
          Va = Ca;
        } else {
          var Sa = S;
          s = Sa >> 2;
          var Fa = W;
          n = Fa >> 2;
          break a;
        }
      }
    } else {
      Sa = c + 20, s = Sa >> 2, Fa = c + 24, n = Fa >> 2;
    }
  } while (0);
  Yi(u);
  p = I >> 2;
  o = e >> 2;
  m[p] = m[o];
  m[p + 1] = m[o + 1];
  m[p + 2] = m[o + 2];
  m[p + 3] = m[o + 3];
  m[p + 4] = m[o + 4];
  m[p + 5] = m[o + 5];
  var Ja = m[s];
  m[I + 24 >> 2] = Ja;
  var ja = m[n];
  m[I + 28 >> 2] = ja;
  l = L >> 2;
  m[l] = m[o];
  m[l + 1] = m[o + 1];
  m[l + 2] = m[o + 2];
  m[l + 3] = m[o + 3];
  m[l + 4] = m[o + 4];
  m[l + 5] = m[o + 5];
  m[t + 6] = m[c + 12 >> 2];
  m[t + 7] = m[c + 36 >> 2];
  m[t + 8] = Ja;
  m[t + 9] = ja;
  m[t + 10] = m[c >> 2];
  rn(G, L);
  sn(G);
  (b[e + 20] & 1) != 0 && tn(G);
  k = c + 32 >> 2;
  j = c + 16 >> 2;
  for (var Da = 0; ; ) {
    if (Da >= m[k]) {
      break;
    }
    var va = m[m[j] + (Da << 2) >> 2];
    Fd[m[m[va >> 2] + 28 >> 2]](va, I);
    Da += 1;
  }
  var sa = $i(u);
  z[d + 12 >> 2] = sa;
  Yi(u);
  for (var $ = e + 12, Ka = 0; ; ) {
    if (Ka < m[$ >> 2]) {
      var ob = 0;
    } else {
      break;
    }
    for (;;) {
      if (ob >= m[k]) {
        break;
      }
      var ib = m[m[j] + (ob << 2) >> 2];
      Fd[m[m[ib >> 2] + 32 >> 2]](ib, I);
      ob += 1;
    }
    un(G);
    Ka += 1;
  }
  var jb, tb = G + 48, kb = m[tb >> 2], vb = kb > 0;
  a : do {
    if (vb) {
      for (var lb = G + 40, mb = G + 44, Ba = 0, sb = kb; ; ) {
        var Za = m[lb >> 2];
        jb = Za >> 2;
        var hb = m[m[mb >> 2] + (m[jb + (Ba * 38 | 0) + 37] << 2) >> 2] + 64, bb = Za + Ba * 152 + 144;
        if (m[bb >> 2] > 0) {
          for (var cb = 0; ; ) {
            z[(hb + 8 >> 2) + (cb * 5 | 0)] = z[jb + (Ba * 38 | 0) + (cb * 9 | 0) + 4];
            z[(hb + 12 >> 2) + (cb * 5 | 0)] = z[jb + (Ba * 38 | 0) + (cb * 9 | 0) + 5];
            var eb = cb + 1;
            if (eb < m[bb >> 2]) {
              cb = eb;
            } else {
              break;
            }
          }
          var wb = m[tb >> 2];
        } else {
          wb = sb;
        }
        var pb = Ba + 1;
        if (pb < wb) {
          Ba = pb, sb = wb;
        } else {
          break a;
        }
      }
    }
  } while (0);
  var qb = $i(u);
  z[d + 16 >> 2] = qb;
  var fb = m[r] > 0;
  a : do {
    if (fb) {
      i = P >> 2;
      h = N >> 2;
      for (var La = N, Wa = N + 4, db = R, ub = R + 4, Ta = 0; ; ) {
        var Bb = m[s], xb = Bb + Ta * 12, nb = m[xb + 4 >> 2];
        m[i] = m[xb >> 2];
        m[i + 1] = nb;
        var yb = z[(Bb + 8 >> 2) + (Ta * 3 | 0)], Ua = m[n], Fb = Ua + Ta * 12, qa = Fb, Ma = m[qa >> 2], Oa = Fb + 4, rb = m[Oa >> 2];
        m[h] = Ma;
        m[h + 1] = rb;
        var Db = z[(Ua + 8 >> 2) + (Ta * 3 | 0)], zb = (E[0] = Ma, F[0]), Eb = (E[0] = rb, F[0]);
        Uf(R, U, zb, Eb);
        var Gb = z[db >> 2], Cb = z[ub >> 2];
        if (Gb * Gb + Cb * Cb > 4) {
          var Lb = 2 / Xf(Gb * Gb + Cb * Cb);
          Ki(N, Lb);
        }
        var Ab = U * Db, $a = Ab * Ab > 2.4674012660980225 ? Db * (1.5707963705062866 / (Ab > 0 ? Ab : -Ab)) : Db;
        Uf(Y, U, z[La >> 2], z[Wa >> 2]);
        Pe(P, Y);
        var Sb = yb + U * $a, Ob = m[s] + Ta * 12, Tb = m[i], Pb = m[i + 1], Pa = Ob;
        m[Pa >> 2] = Tb;
        Ia = Ob + 4;
        m[Ia >> 2] = Pb;
        z[(m[s] + 8 >> 2) + (Ta * 3 | 0)] = Sb;
        var Hb = m[n] + Ta * 12, jc = m[h + 1];
        m[Hb >> 2] = m[h];
        m[Hb + 4 >> 2] = jc;
        z[(m[n] + 8 >> 2) + (Ta * 3 | 0)] = $a;
        var Zb = Ta + 1;
        if (Zb < m[r]) {
          Ta = Zb;
        } else {
          break a;
        }
      }
    }
  } while (0);
  Yi(u);
  for (var cc = e + 16, kc = 0; ; ) {
    if (kc >= m[cc >> 2]) {
      var Uc = 1;
      break;
    }
    for (var Jc = vn(G), sc = 0, wc = 1; ; ) {
      if (sc >= m[k]) {
        break;
      }
      var xc = m[m[j] + (sc << 2) >> 2], Vc = Fd[m[m[xc >> 2] + 36 >> 2]](xc, I), $b = wc & Vc;
      sc += 1;
      wc = $b;
    }
    if (Jc & wc) {
      Uc = 0;
      break;
    }
    kc += 1;
  }
  var dc = m[r] > 0;
  a : do {
    if (dc) {
      for (var nc = c + 8, ec = 0; ; ) {
        var fc = m[m[nc >> 2] + (ec << 2) >> 2], Kc = m[s] + ec * 12, Wc = fc + 44, Ub = m[Kc >> 2], kd = m[Kc + 4 >> 2], Ra = Wc;
        m[Ra >> 2] = Ub;
        ua = Wc + 4;
        m[ua >> 2] = kd;
        z[fc + 56 >> 2] = z[(m[s] + 8 >> 2) + (ec * 3 | 0)];
        var dd = m[n] + ec * 12, Lc = fc + 64, Vb = m[dd + 4 >> 2];
        m[Lc >> 2] = m[dd >> 2];
        m[Lc + 4 >> 2] = Vb;
        z[fc + 72 >> 2] = z[(m[n] + 8 >> 2) + (ec * 3 | 0)];
        on(fc);
        var Mc = ec + 1;
        if (Mc < m[r]) {
          ec = Mc;
        } else {
          break a;
        }
      }
    }
  } while (0);
  var Xc = $i(u);
  z[d + 20 >> 2] = Xc;
  pn(c, m[G + 40 >> 2]);
  a : do {
    if (g && m[r] > 0) {
      for (var Yc = c + 8, Wb = 3.4028234663852886e+38, ed = 0; ; ) {
        var yc = m[m[Yc >> 2] + (ed << 2) >> 2], ld = m[yc >> 2] == 0;
        b : do {
          if (ld) {
            var Xb = Wb;
          } else {
            var zc = (hd[yc + 4 >> 1] & 4) == 0;
            do {
              if (!zc) {
                var Nc = z[yc + 72 >> 2];
                if (Nc * Nc <= .001218469929881394) {
                  var md = z[yc + 64 >> 2], Zc = z[yc + 68 >> 2];
                  if (md * md + Zc * Zc <= 9999999747378752e-20) {
                    var Se = yc + 144, ne = z[Se >> 2] + U;
                    z[Se >> 2] = ne;
                    Xb = Wb < ne ? Wb : ne;
                    break b;
                  }
                }
              }
            } while (0);
            Xb = z[yc + 144 >> 2] = 0;
          }
        } while (0);
        var oe = ed + 1, Te = y[r];
        if (oe < Te) {
          Wb = Xb, ed = oe;
        } else {
          break;
        }
      }
      if (Te > 0 & ((Xb < .5 | Uc) ^ 1)) {
        for (var Qb = 0; ; ) {
          Zf(m[m[Yc >> 2] + (Qb << 2) >> 2], 0);
          var Xd = Qb + 1;
          if (Xd < m[r]) {
            Qb = Xd;
          } else {
            break a;
          }
        }
      }
    }
  } while (0);
  wn(G);
  a = u;
}

qn.X = 1;

function Yf(c, d) {
  var e = c >> 2, f = c + 8;
  m[f >> 2] = 128;
  m[c + 4 >> 2] = 0;
  var g = zd(1024);
  m[c >> 2] = g;
  Dd(g, m[f >> 2] << 3);
  Dd(c + 12, 56);
  if (!id[xn]) {
    g = 0;
    for (f = 1; ; ) {
      if (g < 14 || K(H.j, 73, H.gb, H.Sb), f > m[Ri + (g << 2) >> 2] && (g += 1), b[Qi + f] = g & 255, f += 1, f == 641) {
        break;
      }
    }
    b[xn] = 1;
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
  var k = zd(576), h = h + 4 >> 2;
  m[h] = k;
  Dd(k, m[i] * 36);
  var k = m[i] - 1, l = k > 0;
  a : do {
    if (l) {
      for (var o = 0; ; ) {
        var p = o + 1;
        m[m[h] + o * 36 + 20 >> 2] = p;
        m[m[h] + o * 36 + 32 >> 2] = -1;
        o = m[i] - 1;
        if (p < o) {
          o = p;
        } else {
          var n = o;
          break a;
        }
      }
    } else {
      n = k;
    }
  } while (0);
  m[m[h] + n * 36 + 20 >> 2] = -1;
  m[m[h] + (m[i] - 1) * 36 + 32 >> 2] = -1;
  m[j + 4] = 0;
  m[j + 5] = 0;
  m[j + 6] = 0;
  m[g + 7] = 0;
  m[g + 12] = 16;
  m[g + 13] = 0;
  n = zd(192);
  m[g + 11] = n;
  m[g + 9] = 16;
  m[g + 10] = 0;
  n = zd(64);
  m[g + 8] = n;
  m[f + 15] = 0;
  m[f + 16] = 0;
  m[f + 17] = yn;
  m[f + 18] = zn;
  m[f + 19] = 0;
  n = c + 102968;
  m[e + 25745] = 0;
  m[e + 25746] = 0;
  m[e + 25738] = 0;
  m[e + 25739] = 0;
  m[e + 25740] = 0;
  m[e + 25741] = 0;
  b[c + 102992] = 1;
  b[c + 102993] = 1;
  b[c + 102994] = 0;
  b[c + 102995] = 1;
  b[c + 102976] = 1;
  f = m[d + 4 >> 2];
  m[n >> 2] = m[d >> 2];
  m[n + 4 >> 2] = f;
  m[e + 25717] = 4;
  z[e + 25747] = 0;
  m[e + 25737] = c;
  Dd(c + 102996, 32);
}

Yf.X = 1;

function $f(c, d) {
  var e;
  e = c + 102868;
  var f = m[e >> 2];
  (f & 2) != 0 ? (K(H.i, 109, H.mb, H.Gb), e = m[e >> 2]) : e = f;
  if ((e & 2) != 0) {
    e = 0;
  } else {
    e = Pi(c, 152);
    e == 0 ? f = 0 : (aj(e, d, c), f = e);
    m[f + 92 >> 2] = 0;
    e = c + 102952 >> 2;
    m[f + 96 >> 2] = m[e];
    var g = m[e];
    g != 0 && (m[g + 92 >> 2] = f);
    m[e] = f;
    m[c + 102960 >> 2] += 1;
    e = f;
  }
  return e;
}

function An(c, d, e, f) {
  var g, h, i, j, k, l, o = a;
  a += 128;
  g = o >> 2;
  var p = o + 44, n = o + 96, s = o + 104, q = o + 112, r = o + 120;
  l = c + 28 >> 2;
  h = m[l];
  h > e || (K(H.ka, 386, H.W, H.Fb), h = m[l]);
  h > f || (K(H.ka, 387, H.W, H.Vb), h = m[l]);
  h = h > 0;
  a : do {
    if (h) {
      var t = c + 8, u = c + 20;
      i = c + 24;
      for (var w = 0; ; ) {
        var A = m[m[t >> 2] + (w << 2) >> 2], x = A + 44, v = m[u >> 2] + w * 12, C = x;
        x += 4;
        var x = m[x >> 2], I = v;
        m[I >> 2] = m[C >> 2];
        v += 4;
        m[v >> 2] = x;
        z[(m[u >> 2] + 8 >> 2) + (w * 3 | 0)] = z[A + 56 >> 2];
        v = A + 64;
        C = m[i >> 2] + w * 12;
        x = m[v + 4 >> 2];
        m[C >> 2] = m[v >> 2];
        m[C + 4 >> 2] = x;
        z[(m[i >> 2] + 8 >> 2) + (w * 3 | 0)] = z[A + 72 >> 2];
        w += 1;
        if (w >= m[l]) {
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
  h = d >> 2;
  m[i] = m[h];
  m[i + 1] = m[h + 1];
  m[i + 2] = m[h + 2];
  m[i + 3] = m[h + 3];
  m[i + 4] = m[h + 4];
  m[i + 5] = m[h + 5];
  m[g + 8] = m[k];
  m[g + 9] = m[j];
  rn(p, o);
  g = d + 16;
  for (h = 0; ; ) {
    if (h >= m[g >> 2]) {
      break;
    }
    if (Bn(p, e, f)) {
      break;
    }
    h += 1;
  }
  g = c + 8 >> 2;
  t = m[k] + e * 12;
  h = m[m[g] + (e << 2) >> 2] + 36;
  i = m[t >> 2];
  t = m[t + 4 >> 2];
  m[h >> 2] = i;
  m[h + 4 >> 2] = t;
  z[m[m[g] + (e << 2) >> 2] + 52 >> 2] = z[(m[k] + 8 >> 2) + (e * 3 | 0)];
  e = m[k] + f * 12;
  h = m[m[g] + (f << 2) >> 2] + 36;
  i = m[e + 4 >> 2];
  m[h >> 2] = m[e >> 2];
  m[h + 4 >> 2] = i;
  z[m[m[g] + (f << 2) >> 2] + 52 >> 2] = z[(m[k] + 8 >> 2) + (f * 3 | 0)];
  sn(p);
  f = d + 12;
  for (e = 0; ; ) {
    if (e >= m[f >> 2]) {
      break;
    }
    un(p);
    e += 1;
  }
  e = z[d >> 2];
  h = m[l] > 0;
  a : do {
    if (h) {
      f = n >> 2;
      d = s >> 2;
      i = s;
      t = s + 4;
      u = q;
      w = q + 4;
      for (A = 0; ; ) {
        v = m[k];
        C = v + A * 12;
        x = m[C + 4 >> 2];
        m[f] = m[C >> 2];
        m[f + 1] = x;
        v = z[(v + 8 >> 2) + (A * 3 | 0)];
        C = m[j];
        I = C + A * 12;
        x = m[I >> 2];
        I = m[I + 4 >> 2];
        m[d] = x;
        m[d + 1] = I;
        C = z[(C + 8 >> 2) + (A * 3 | 0)];
        x = (E[0] = x, F[0]);
        I = (E[0] = I, F[0]);
        Uf(q, e, x, I);
        x = z[u >> 2];
        I = z[w >> 2];
        x * x + I * I > 4 && (x = 2 / Xf(x * x + I * I), Ki(s, x));
        x = e * C;
        C = x * x > 2.4674012660980225 ? C * (1.5707963705062866 / (x > 0 ? x : -x)) : C;
        Uf(r, e, z[i >> 2], z[t >> 2]);
        Pe(n, r);
        v += e * C;
        var L = m[k] + A * 12, x = m[f], I = m[f + 1];
        m[L >> 2] = x;
        m[L + 4 >> 2] = I;
        z[(m[k] + 8 >> 2) + (A * 3 | 0)] = v;
        var G = m[j] + A * 12, L = m[d], P = m[d + 1];
        m[G >> 2] = L;
        m[G + 4 >> 2] = P;
        z[(m[j] + 8 >> 2) + (A * 3 | 0)] = C;
        var G = m[m[g] + (A << 2) >> 2], N = G + 44;
        m[N >> 2] = x;
        m[N + 4 >> 2] = I;
        z[G + 56 >> 2] = v;
        v = G + 64;
        m[v >> 2] = L;
        m[v + 4 >> 2] = P;
        z[G + 72 >> 2] = C;
        on(G);
        A += 1;
        if (A >= m[l]) {
          break a;
        }
      }
    }
  } while (0);
  pn(c, m[p + 40 >> 2]);
  wn(p);
  a = o;
}

An.X = 1;

function ig(c) {
  var d = m[c + 102952 >> 2];
  a : for (;;) {
    if (d == 0) {
      break;
    }
    for (var e = m[d + 96 >> 2], f = m[d + 100 >> 2]; ; ) {
      if (f == 0) {
        d = e;
        continue a;
      }
      var g = m[f + 4 >> 2];
      m[f + 28 >> 2] = 0;
      xl(f, c);
      f = g;
    }
  }
  d = c + 102872;
  Pf(m[d + 32 >> 2]);
  Pf(m[d + 44 >> 2]);
  Pf(m[d + 4 >> 2]);
  d = c + 68;
  m[d + 102400 >> 2] != 0 && K(H.n, 32, H.O, H.Tb);
  m[d + 102796 >> 2] != 0 && K(H.n, 33, H.O, H.ac);
  d = c + 4;
  e = m[d >> 2] > 0;
  f = m[c >> 2];
  a : do {
    if (e) {
      for (var g = 0, h = f; ; ) {
        if (Pf(m[h + (g << 3) + 4 >> 2]), g += 1, h = m[c >> 2], g >= m[d >> 2]) {
          var i = h;
          break a;
        }
      }
    } else {
      i = f;
    }
  } while (0);
  Pf(i);
}

ig.X = 1;

function Cn(c) {
  m[c + 28 >> 2] = 0;
  m[c + 36 >> 2] = 0;
  m[c + 32 >> 2] = 0;
}

function Dn(c, d) {
  var e;
  e = c + 28 >> 2;
  var f = m[e];
  f < m[c + 40 >> 2] || (K(H.A, 54, H.nb, H.bc), f = m[e]);
  m[d + 8 >> 2] = f;
  m[(m[e] << 2) + m[c + 8 >> 2] >> 2] = d;
  m[e] += 1;
}

function En(c, d) {
  var e;
  e = c + 36 >> 2;
  var f = m[e];
  f < m[c + 44 >> 2] || (K(H.A, 62, H.pb, H.$b), f = m[e]);
  m[e] = f + 1;
  m[(f << 2) + m[c + 12 >> 2] >> 2] = d;
}

function Fn(c, d) {
  var e, f, g, h, i, j, k = c >> 2, l = a;
  a += 92;
  var o = l + 52, p = l + 84;
  j = c + 103008 >> 2;
  z[j] = 0;
  i = c + 103012 >> 2;
  z[i] = 0;
  h = c + 103016 >> 2;
  z[h] = 0;
  var n = c + 102960, s = c + 102872, q = c + 68;
  mn(l, m[n >> 2], m[k + 25734], m[k + 25741], q, m[k + 25736]);
  var r = c + 102952, t = m[r >> 2], u = t == 0;
  a : do {
    if (!u) {
      for (var w = t; ; ) {
        if (hd[w + 4 >> 1] &= -2, w = m[w + 96 >> 2], w == 0) {
          break a;
        }
      }
    }
  } while (0);
  t = m[k + 25733];
  u = t == 0;
  a : do {
    if (!u) {
      for (w = t; ; ) {
        if (m[w + 4 >> 2] &= -2, w = m[w + 12 >> 2], w == 0) {
          break a;
        }
      }
    }
  } while (0);
  t = m[k + 25739];
  u = t == 0;
  a : do {
    if (!u) {
      for (w = t; ; ) {
        if (b[w + 60] = 0, w = m[w + 12 >> 2], w == 0) {
          break a;
        }
      }
    }
  } while (0);
  var n = m[n >> 2], t = Ti(q, n << 2), u = c + 102968, w = c + 102976, A = o + 12, x = o + 16, v = o + 20, C = l + 28, I = l + 8;
  for (g = r; ; ) {
    var L = m[g >> 2];
    if (L == 0) {
      break;
    }
    g = L + 4 >> 1;
    var G = hd[g], P = (G & 1) == 0;
    a : do {
      if (P && (G & 2) != 0 && (G & 32) != 0 && m[L >> 2] != 0) {
        Cn(l);
        m[t >> 2] = L;
        hd[g] |= 1;
        var N = 1;
        b : for (;;) {
          if (N <= 0) {
            break;
          }
          var R = N - 1, Y = m[t + (R << 2) >> 2];
          e = Y;
          (hd[Y + 4 >> 1] & 32) != 0 || K(H.i, 445, H.t, H.oc);
          Dn(l, Y);
          Zf(e, 1);
          if (m[Y >> 2] == 0) {
            N = R;
          } else {
            for (e = Y + 112; ; ) {
              e = m[e >> 2];
              if (e == 0) {
                break;
              }
              var U = m[e + 4 >> 2];
              f = U + 4 >> 2;
              var aa = m[f];
              (aa & 1) == 0 && (aa & 4) != 0 && (aa & 2) != 0 && (b[m[U + 48 >> 2] + 38] & 1) == 0 && (b[m[U + 52 >> 2] + 38] & 1) == 0 && (En(l, U), m[f] |= 1, U = m[e >> 2], f = U + 4 >> 1, (hd[f] & 1) == 0 && (R < n || K(H.i, 495, H.t, H.ya), m[(R << 2) + t >> 2] = U, hd[f] |= 1, R += 1));
              e += 12;
            }
            e = Y + 108;
            for (Y = R; ; ) {
              R = m[e >> 2];
              if (R == 0) {
                N = Y;
                continue b;
              }
              f = R + 4;
              var ba = m[f >> 2];
              if ((b[ba + 60] & 1) == 0 && (U = m[R >> 2], e = U + 4 >> 1, (hd[e] & 32) != 0)) {
                var aa = l, Q = pa, Q = aa + 32 >> 2, S = m[Q];
                S < m[aa + 48 >> 2] || (K(H.A, 68, H.ob, H.Zb), S = m[Q]);
                m[Q] = S + 1;
                m[(S << 2) + m[aa + 16 >> 2] >> 2] = ba;
                b[m[f >> 2] + 60] = 1;
                (hd[e] & 1) == 0 && (Y < n || K(H.i, 524, H.t, H.ya), m[(Y << 2) + t >> 2] = U, hd[e] |= 1, Y += 1);
              }
              e = R + 12;
            }
          }
        }
        qn(l, o, d, u, (b[w] & 1) != 0);
        z[j] += z[A >> 2];
        z[i] += z[x >> 2];
        z[h] += z[v >> 2];
        N = m[C >> 2];
        if (N > 0) {
          Y = m[I >> 2];
          for (R = 0; ; ) {
            if (e = m[Y + (R << 2) >> 2], m[e >> 2] == 0 && (hd[e + 4 >> 1] &= -2), R += 1, R >= N) {
              break a;
            }
          }
        }
      }
    } while (0);
    g = L + 96;
  }
  Ui(q, t);
  Yi(p);
  for (h = m[r >> 2]; ; ) {
    if (h == 0) {
      break;
    }
    (hd[h + 4 >> 1] & 1) != 0 && m[h >> 2] != 0 && cj(h);
    h = m[h + 96 >> 2];
  }
  mj(s, s);
  p = $i(p);
  z[k + 25755] = p;
  nn(l);
  a = l;
}

Fn.X = 1;

function Gn(c, d) {
  var e, f = a;
  a += 24;
  var g = f + 8, h = f + 16;
  e = c + 32 >> 2;
  var i = z[e];
  i < 1 || (K(H.Yb, 715, H.lb, H.za), i = z[e]);
  var i = (d - i) / (1 - i), j = c + 8, k = 1 - i;
  Uf(g, k, z[j >> 2], z[c + 12 >> 2]);
  Uf(h, i, z[c + 16 >> 2], z[c + 20 >> 2]);
  J(f, z[g >> 2] + z[h >> 2], z[g + 4 >> 2] + z[h + 4 >> 2]);
  g = m[f + 4 >> 2];
  m[j >> 2] = m[f >> 2];
  m[j + 4 >> 2] = g;
  g = c + 24;
  z[g >> 2] = k * z[g >> 2] + i * z[c + 28 >> 2];
  z[e] = d;
  a = f;
}

Gn.X = 1;

function Hn(c, d) {
  var e = c >> 2, f = a;
  a += 16;
  var g = f + 8, h = c + 28;
  Gn(h, d);
  var i = c + 44, j = c + 36, k = m[j + 4 >> 2];
  m[i >> 2] = m[j >> 2];
  m[i + 4 >> 2] = k;
  k = z[e + 13];
  z[e + 14] = k;
  j = c + 20;
  Ci(j, k);
  k = c + 12;
  Vg(g, z[j >> 2], z[e + 6], z[h >> 2], z[e + 8]);
  J(f, z[i >> 2] - z[g >> 2], z[e + 12] - z[g + 4 >> 2]);
  e = m[f + 4 >> 2];
  m[k >> 2] = m[f >> 2];
  m[k + 4 >> 2] = e;
  a = f;
}

Hn.X = 1;

function bg(c) {
  var d, e, f, g = c >> 2, h = a;
  a += 56;
  var i = h + 8;
  f = i >> 2;
  var j = h + 32, k = h + 40, l = h + 48;
  Yi(h);
  e = c + 102868 >> 2;
  d = m[e];
  var o = c + 102872;
  (d & 1) != 0 && (mj(o, o), d = m[e] & -2, m[e] = d);
  m[e] = d | 2;
  d = i >> 2;
  z[d] = .01666666753590107;
  m[f + 3] = 3;
  m[f + 4] = 3;
  var p = i + 4;
  z[p >> 2] = 59.999996185302734;
  var n = c + 102988;
  z[f + 2] = z[n >> 2] * .01666666753590107;
  b[i + 20] = b[c + 102992] & 1;
  Yi(j);
  ij(o);
  f = $i(j);
  z[g + 25750] = f;
  (b[c + 102995] & 1) != 0 && (Yi(k), Fn(c, i), k = $i(k), z[g + 25751] = k);
  if ((b[c + 102993] & 1) == 0) {
    c = 7;
  } else {
    if (k = z[d], k > 0) {
      Yi(l), In(c, i), c = $i(l), z[g + 25756] = c, c = 7;
    } else {
      var s = k, c = 8;
    }
  }
  c == 7 && (s = z[d]);
  s > 0 && (z[n >> 2] = z[p >> 2]);
  s = m[e];
  if ((s & 4) != 0) {
    s = m[g + 25738];
    c = s == 0;
    a : do {
      if (!c) {
        for (i = s; ; ) {
          if (Qe(i + 76), z[i + 84 >> 2] = 0, i = m[i + 96 >> 2], i == 0) {
            break a;
          }
        }
      }
    } while (0);
    s = m[e];
  }
  m[e] = s & -3;
  e = $i(h);
  z[g + 25749] = e;
  a = h;
}

bg.X = 1;

function In(c, d) {
  var e, f, g, h, i, j, k, l, o, p, n, s, q, r, t, u, w = a;
  a += 224;
  var A = w + 52, x = w + 184, v = w + 192, C = w + 200, I = c + 68, L = c + 102872;
  u = c + 102944 >> 2;
  mn(w, 64, 32, 0, I, m[u]);
  var G = c + 102995, P = (b[G] & 1) == 0;
  a : do {
    if (P) {
      var N = c + 102932;
    } else {
      var R = m[c + 102952 >> 2], Y = R == 0;
      b : do {
        if (!Y) {
          for (var U = R; ; ) {
            hd[U + 4 >> 1] &= -2;
            z[U + 60 >> 2] = 0;
            var aa = m[U + 96 >> 2];
            if (aa == 0) {
              break b;
            } else {
              U = aa;
            }
          }
        }
      } while (0);
      var ba = c + 102932, Q = m[ba >> 2];
      if (Q == 0) {
        N = ba;
      } else {
        var S = Q;
        for (t = S >> 2; ; ) {
          m[S + 4 >> 2] &= -34;
          m[t + 32] = 0;
          z[t + 33] = 1;
          var W = m[t + 3];
          if (W == 0) {
            N = ba;
            break a;
          } else {
            S = W, t = S >> 2;
          }
        }
      }
    }
  } while (0);
  var M = A + 28, O = A + 56, Z = A + 92, X = A + 128, T = x + 4, ka = v + 4, Ha = w + 28, gb = w + 40, Va = w + 36, ya = w + 44, Na = C + 4, na = C + 8, fa = C + 16, ha = d + 12, za = C + 12, Ra = C + 20, wa = w + 8, ua = c + 102994, ga = 0, qa = 1, Oa = N;
  a : for (;;) {
    var oa = m[Oa >> 2];
    r = oa >> 2;
    if (oa == 0) {
      if (ga == 0 | qa > .9999988079071045) {
        var da = 1;
        break;
      }
      var ca = m[m[ga + 48 >> 2] + 8 >> 2], Ea = ca, la = m[m[ga + 52 >> 2] + 8 >> 2], xa = la, Xa = ca + 28, Ya = z[Xa >> 2], ma = ca + 32, ia = z[ma >> 2], Pa = ca + 36, Ia = z[Pa >> 2], Ca = ca + 40, Sa = z[Ca >> 2], Fa = ca + 44, Ja = z[Fa >> 2], ja = ca + 48, Da = z[ja >> 2], va = ca + 52, sa = z[va >> 2], $ = ca + 56, Ka = z[$ >> 2], ob = ca + 60, ib = z[ob >> 2], jb = la + 28, tb = z[jb >> 2], kb = la + 32, vb = z[kb >> 2], lb = la + 36, mb = z[lb >> 2], Ba = la + 40, sb = z[Ba >> 2], Za = la + 44, hb = z[Za >> 2], bb = la + 48, cb = z[bb >> 2], eb = la + 52, wb = z[eb >> 2], pb = la + 56, qb = z[pb >> 2], fb = la + 60, La = z[fb >> 2];
      Hn(Ea, qa);
      Hn(xa, qa);
      lj(ga, m[u]);
      q = ga + 4 >> 2;
      var Wa = m[q] & -33;
      m[q] = Wa;
      m[ga + 128 >> 2] += 1;
      var db = (Wa & 4) != 0;
      do {
        if (db && (Wa & 2) != 0) {
          Zf(ca, 1);
          Zf(la, 1);
          Cn(w);
          Dn(w, Ea);
          Dn(w, xa);
          En(w, ga);
          hd[ca + 4 >> 1] |= 1;
          hd[la + 4 >> 1] |= 1;
          m[q] |= 1;
          m[v >> 2] = Ea;
          m[ka >> 2] = xa;
          for (var ub = 0; ; ) {
            if (ub >= 2) {
              break;
            }
            var Ta = m[v + (ub << 2) >> 2], Bb = m[Ta >> 2] == 2;
            b : do {
              if (Bb) {
                for (var xb = Ta + 4, nb = Ta + 112; ; ) {
                  var yb = m[nb >> 2];
                  if (yb == 0) {
                    break b;
                  }
                  if (m[Ha >> 2] == m[gb >> 2]) {
                    break b;
                  }
                  if (m[Va >> 2] == m[ya >> 2]) {
                    break b;
                  }
                  var Ua = m[yb + 4 >> 2];
                  s = Ua + 4 >> 2;
                  var Fb = (m[s] & 1) == 0;
                  c : do {
                    if (Fb) {
                      var Ma = m[yb >> 2], rb = Ma, Db = m[rb >> 2] == 2;
                      do {
                        if (Db && (hd[xb >> 1] & 8) == 0 && (hd[Ma + 4 >> 1] & 8) == 0) {
                          break c;
                        }
                      } while (0);
                      if ((b[m[Ua + 48 >> 2] + 38] & 1) == 0 && (b[m[Ua + 52 >> 2] + 38] & 1) == 0) {
                        n = Ma + 28 >> 2;
                        var zb = z[n];
                        p = Ma + 32 >> 2;
                        var Eb = z[p];
                        o = Ma + 36 >> 2;
                        var Gb = z[o];
                        l = Ma + 40 >> 2;
                        var Cb = z[l];
                        k = Ma + 44 >> 2;
                        var Lb = z[k];
                        j = Ma + 48 >> 2;
                        var Ab = z[j];
                        i = Ma + 52 >> 2;
                        var $a = z[i];
                        h = Ma + 56 >> 2;
                        var Sb = z[h];
                        g = Ma + 60 >> 2;
                        var Ob = z[g];
                        f = Ma + 4 >> 1;
                        (hd[f] & 1) == 0 && Hn(Ma, qa);
                        lj(Ua, m[u]);
                        var Tb = m[s];
                        if ((Tb & 4) != 0) {
                          if ((Tb & 2) != 0) {
                            m[s] = Tb | 1;
                            En(w, Ua);
                            var Pb = hd[f];
                            (Pb & 1) == 0 && (hd[f] = Pb | 1, m[rb >> 2] != 0 && Zf(Ma, 1), Dn(w, Ma));
                          } else {
                            z[n] = zb, z[p] = Eb, z[o] = Gb, z[l] = Cb, z[k] = Lb, z[j] = Ab, z[i] = $a, z[h] = Sb, z[g] = Ob, on(Ma);
                          }
                        } else {
                          z[n] = zb, z[p] = Eb, z[o] = Gb, z[l] = Cb, z[k] = Lb, z[j] = Ab, z[i] = $a, z[h] = Sb, z[g] = Ob, on(Ma);
                        }
                      }
                    }
                  } while (0);
                  nb = yb + 12;
                }
              }
            } while (0);
            ub += 1;
          }
          var Hb = (1 - qa) * z[d >> 2];
          z[C >> 2] = Hb;
          z[Na >> 2] = 1 / Hb;
          z[na >> 2] = 1;
          m[fa >> 2] = 20;
          m[za >> 2] = m[ha >> 2];
          b[Ra] = 0;
          An(w, C, m[ca + 8 >> 2], m[la + 8 >> 2]);
          for (var jc = m[Ha >> 2], Zb = m[wa >> 2], cc = 0; ; ) {
            if (cc >= jc) {
              break;
            }
            var kc = m[Zb + (cc << 2) >> 2];
            hd[kc + 4 >> 1] &= -2;
            var Uc = m[kc >> 2] == 2;
            b : do {
              if (Uc) {
                cj(kc);
                var Jc = m[kc + 112 >> 2];
                if (Jc != 0) {
                  for (var sc = Jc; ; ) {
                    m[m[sc + 4 >> 2] + 4 >> 2] &= -34;
                    var wc = m[sc + 12 >> 2];
                    if (wc == 0) {
                      break b;
                    } else {
                      sc = wc;
                    }
                  }
                }
              }
            } while (0);
            cc += 1;
          }
          mj(L, L);
          if ((b[ua] & 1) == 0) {
            ga = 0;
            qa = 1;
            Oa = N;
            continue a;
          } else {
            da = 0;
            break a;
          }
        }
      } while (0);
      m[ga + 4 >> 2] &= -5;
      z[Xa >> 2] = Ya;
      z[ma >> 2] = ia;
      z[Pa >> 2] = Ia;
      z[Ca >> 2] = Sa;
      z[Fa >> 2] = Ja;
      z[ja >> 2] = Da;
      z[va >> 2] = sa;
      z[$ >> 2] = Ka;
      z[ob >> 2] = ib;
      z[jb >> 2] = tb;
      z[kb >> 2] = vb;
      z[lb >> 2] = mb;
      z[Ba >> 2] = sb;
      z[Za >> 2] = hb;
      z[bb >> 2] = cb;
      z[eb >> 2] = wb;
      z[pb >> 2] = qb;
      z[fb >> 2] = La;
      on(ca);
      on(la);
      ga = 0;
      qa = 1;
      Oa = N;
    } else {
      e = oa + 4 >> 2;
      var xc = m[e], Vc = (xc & 4) != 0;
      do {
        if (Vc) {
          if (m[r + 32] > 8) {
            var $b = ga, dc = qa;
          } else {
            if ((xc & 32) == 0) {
              var nc = m[r + 12], ec = m[r + 13];
              if ((b[nc + 38] & 1) != 0) {
                $b = ga;
                dc = qa;
                break;
              }
              if ((b[ec + 38] & 1) != 0) {
                $b = ga;
                dc = qa;
                break;
              }
              var fc = m[nc + 8 >> 2], Kc = m[ec + 8 >> 2], Wc = m[fc >> 2], Ub = m[Kc >> 2];
              Wc == 2 | Ub == 2 || K(H.i, 641, H.V, H.Ec);
              var kd = hd[fc + 4 >> 1], dd = hd[Kc + 4 >> 1];
              if (!((kd & 2) != 0 & Wc != 0 | (dd & 2) != 0 & Ub != 0)) {
                $b = ga;
                dc = qa;
                break;
              }
              if (!((kd & 8) != 0 | Wc != 2 | (dd & 8) != 0 | Ub != 2)) {
                $b = ga;
                dc = qa;
                break;
              }
              var Lc = fc + 28, Vb = z[fc + 60 >> 2], Mc = Kc + 28, Xc = Mc, Yc = z[Kc + 60 >> 2];
              if (Vb < Yc) {
                Gn(Lc, Yc);
                var Wb = Yc;
              } else {
                Yc < Vb && Gn(Xc, Vb), Wb = Vb;
              }
              Wb < 1 || K(H.i, 676, H.V, H.za);
              var ed = m[r + 14], yc = m[r + 15], ld = A;
              bh(ld);
              bh(ld + 28);
              dh(A, m[nc + 12 >> 2], ed);
              dh(M, m[ec + 12 >> 2], yc);
              for (var Xb = Lc >> 2, zc = O >> 2, Nc = Xb + 9; Xb < Nc; Xb++, zc++) {
                m[zc] = m[Xb];
              }
              Xb = Mc >> 2;
              zc = Z >> 2;
              for (Nc = Xb + 9; Xb < Nc; Xb++, zc++) {
                m[zc] = m[Xb];
              }
              z[X >> 2] = 1;
              qi(x, A);
              var md = m[x >> 2] == 3 ? Wb + (1 - Wb) * z[T >> 2] < 1 ? Wb + (1 - Wb) * z[T >> 2] : 1 : 1;
              z[r + 33] = md;
              m[e] |= 32;
              var Zc = md;
            } else {
              Zc = z[r + 33];
            }
            Zc < qa ? ($b = oa, dc = Zc) : ($b = ga, dc = qa);
          }
        } else {
          $b = ga, dc = qa;
        }
      } while (0);
      ga = $b;
      qa = dc;
      Oa = oa + 12;
    }
  }
  b[G] = da;
  nn(w);
  a = w;
}

In.X = 1;

function sj(c, d, e, f) {
  e < 4 || K(H.g, 54, H.Z, H.ga);
  f < 4 || K(H.g, 55, H.Z, H.ma);
  m[(tj >> 2) + (e * 12 | 0) + (f * 3 | 0)] = c;
  m[(tj + 4 >> 2) + (e * 12 | 0) + (f * 3 | 0)] = d;
  b[tj + e * 48 + f * 12 + 8] = 1;
  e != f && (m[(tj >> 2) + (f * 12 | 0) + (e * 3 | 0)] = c, m[(tj + 4 >> 2) + (f * 12 | 0) + (e * 3 | 0)] = d, b[tj + f * 48 + e * 12 + 8] = 0);
}

function hj(c, d) {
  id[rj] || K(H.g, 103, H.u, H.hc);
  var e = c + 48;
  if (m[c + 124 >> 2] > 0) {
    Zf(m[m[e >> 2] + 8 >> 2], 1);
    var f = c + 52;
    Zf(m[m[f >> 2] + 8 >> 2], 1);
  } else {
    f = c + 52;
  }
  e = m[m[m[e >> 2] + 12 >> 2] + 4 >> 2];
  f = m[m[m[f >> 2] + 12 >> 2] + 4 >> 2];
  e > -1 & f < 4 || (K(H.g, 114, H.u, H.wa), K(H.g, 115, H.u, H.wa));
  Fd[m[(tj + 4 >> 2) + (e * 12 | 0) + (f * 3 | 0)]](c, d);
}

hj.X = 1;

function Jn(c, d, e, f, g) {
  var h = c >> 2;
  m[h] = Kn + 8;
  m[h + 1] = 4;
  m[h + 12] = d;
  m[h + 13] = f;
  m[h + 14] = e;
  m[h + 15] = g;
  m[h + 31] = 0;
  m[h + 32] = 0;
  c = c + 8 >> 2;
  for (e = c + 10; c < e; c++) {
    m[c] = 0;
  }
  c = Xf(z[d + 16 >> 2] * z[f + 16 >> 2]);
  z[h + 34] = c;
  z[h + 35] = z[d + 20 >> 2] > z[f + 20 >> 2] ? z[d + 20 >> 2] : z[f + 20 >> 2];
}

function lj(c, d) {
  var e, f, g = c >> 2, h = a;
  a += 64;
  f = h >> 2;
  var i = c + 64, j = i >> 2;
  e = h >> 2;
  for (var k = j + 16; j < k; j++, e++) {
    m[e] = m[j];
  }
  e = c + 4 >> 2;
  j = y[e];
  m[e] = j | 4;
  var k = j >>> 1, l = y[g + 12], o = y[g + 13], j = (b[l + 38] & 1) != 0 | (b[o + 38] & 1) != 0, p = m[l + 8 >> 2], n = m[o + 8 >> 2], s = p + 12, q = n + 12;
  do {
    if (j) {
      var r, t = m[l + 12 >> 2], u = m[g + 14], w = m[o + 12 >> 2], A = m[g + 15], x = s, v = q, C = pa, I = pa, I = C = pa;
      r = a;
      a += 128;
      var L = r + 92, G = r + 104, C = r;
      bh(C);
      bh(C + 28);
      dh(r, t, u);
      dh(r + 28, w, A);
      I = r + 56 >> 2;
      C = x >> 2;
      m[I] = m[C];
      m[I + 1] = m[C + 1];
      m[I + 2] = m[C + 2];
      m[I + 3] = m[C + 3];
      I = r + 72 >> 2;
      C = v >> 2;
      m[I] = m[C];
      m[I + 1] = m[C + 1];
      m[I + 2] = m[C + 2];
      m[I + 3] = m[C + 3];
      b[r + 88] = 1;
      hd[L + 4 >> 1] = 0;
      hh(G, L, r);
      t = z[G + 16 >> 2] < 11920928955078125e-22;
      a = r;
      r = t;
      m[g + 31] = 0;
      t = r;
      r = k & 1;
    } else {
      Fd[m[m[g] >> 2]](c, i, s, q);
      u = c + 124;
      t = r = m[u >> 2] > 0;
      a : do {
        if (r) {
          w = m[f + 15];
          for (A = 0; ; ) {
            x = c + A * 20 + 72;
            z[x >> 2] = 0;
            v = c + A * 20 + 76;
            z[v >> 2] = 0;
            L = m[g + (A * 5 | 0) + 20];
            for (G = 0; ; ) {
              if (G >= w) {
                break;
              }
              if (m[f + (G * 5 | 0) + 4] == L) {
                z[x >> 2] = z[f + (G * 5 | 0) + 2];
                z[v >> 2] = z[f + (G * 5 | 0) + 3];
                break;
              } else {
                G += 1;
              }
            }
            A += 1;
            if (A >= m[u >> 2]) {
              break a;
            }
          }
        }
      } while (0);
      u = k & 1;
      r != u && (Zf(p, 1), Zf(n, 1));
      r = u;
    }
  } while (0);
  f = t != 0;
  g = m[e];
  m[e] = f ? g | 2 : g & -3;
  g = f ^ 1;
  i = d == 0;
  if (!(r != 0 | g | i)) {
    Fd[m[m[d >> 2] + 8 >> 2]](d, c);
  }
  if (!(f | r == 0 | i)) {
    Fd[m[m[d >> 2] + 12 >> 2]](d, c);
  }
  if (!(j | g | i)) {
    Fd[m[m[d >> 2] + 16 >> 2]](d, c, h);
  }
  a = h;
}

lj.X = 1;

function Ln(c) {
  z[c >> 2] = 0;
  z[c + 8 >> 2] = 0;
  z[c + 4 >> 2] = 0;
  z[c + 12 >> 2] = 0;
}

function rn(c, d) {
  var e, f, g, h, i, j, k = d >> 2;
  j = c >> 2;
  i = d >> 2;
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
  o = Ti(j, o * 88);
  j = c + 36;
  m[j >> 2] = o;
  o = Ti(m[l >> 2], m[i] * 152);
  l = c + 40;
  m[l >> 2] = o;
  m[c + 24 >> 2] = m[k + 8];
  m[c + 28 >> 2] = m[k + 9];
  k = m[k + 6];
  o = c + 44;
  m[o >> 2] = k;
  var p = m[i] > 0;
  a : do {
    if (p) {
      var n = c + 20, s = c + 8, q = 0;
      for (f = k; ; ) {
        f = m[f + (q << 2) >> 2];
        h = f >> 2;
        var r = m[h + 12];
        g = m[h + 13];
        var t = z[m[r + 12 >> 2] + 8 >> 2], u = z[m[g + 12 >> 2] + 8 >> 2], w = m[r + 8 >> 2], A = m[g + 8 >> 2], r = f + 64;
        g = r >> 2;
        var x = m[g + 15], v = x > 0;
        v || K(H.m, 71, H.eb, H.Kb);
        var C = m[l >> 2];
        f = C >> 2;
        z[f + (q * 38 | 0) + 34] = z[h + 34];
        z[f + (q * 38 | 0) + 35] = z[h + 35];
        var I = w + 8;
        m[C + q * 152 + 112 >> 2] = m[I >> 2];
        var L = A + 8;
        m[C + q * 152 + 116 >> 2] = m[L >> 2];
        var G = w + 120;
        z[f + (q * 38 | 0) + 30] = z[G >> 2];
        var P = A + 120;
        z[f + (q * 38 | 0) + 31] = z[P >> 2];
        var N = w + 128;
        z[f + (q * 38 | 0) + 32] = z[N >> 2];
        var R = A + 128;
        z[f + (q * 38 | 0) + 33] = z[R >> 2];
        m[C + q * 152 + 148 >> 2] = q;
        m[C + q * 152 + 144 >> 2] = x;
        Ln(C + q * 152 + 96);
        Ln(C + q * 152 + 80);
        h = m[j >> 2];
        e = h >> 2;
        m[h + q * 88 + 32 >> 2] = m[I >> 2];
        m[h + q * 88 + 36 >> 2] = m[L >> 2];
        z[e + (q * 22 | 0) + 10] = z[G >> 2];
        z[e + (q * 22 | 0) + 11] = z[P >> 2];
        w += 28;
        I = h + q * 88 + 48;
        L = m[w + 4 >> 2];
        m[I >> 2] = m[w >> 2];
        m[I + 4 >> 2] = L;
        A += 28;
        w = h + q * 88 + 56;
        I = m[A + 4 >> 2];
        m[w >> 2] = m[A >> 2];
        m[w + 4 >> 2] = I;
        z[e + (q * 22 | 0) + 16] = z[N >> 2];
        z[e + (q * 22 | 0) + 17] = z[R >> 2];
        N = r + 40;
        R = h + q * 88 + 16;
        A = m[N + 4 >> 2];
        m[R >> 2] = m[N >> 2];
        m[R + 4 >> 2] = A;
        N = r + 48;
        R = h + q * 88 + 24;
        A = m[N + 4 >> 2];
        m[R >> 2] = m[N >> 2];
        m[R + 4 >> 2] = A;
        m[h + q * 88 + 84 >> 2] = x;
        z[e + (q * 22 | 0) + 19] = t;
        z[e + (q * 22 | 0) + 20] = u;
        m[h + q * 88 + 72 >> 2] = m[g + 14];
        b : do {
          if (v) {
            for (t = 0; ; ) {
              if (u = r + t * 20, (b[n] & 1) == 0 ? (z[f + (q * 38 | 0) + (t * 9 | 0) + 4] = 0, z[f + (q * 38 | 0) + (t * 9 | 0) + 5] = 0) : (z[f + (q * 38 | 0) + (t * 9 | 0) + 4] = z[s >> 2] * z[g + (t * 5 | 0) + 2], z[f + (q * 38 | 0) + (t * 9 | 0) + 5] = z[s >> 2] * z[g + (t * 5 | 0) + 3]), Qe(C + q * 152 + t * 36), Qe(C + q * 152 + t * 36 + 8), z[f + (q * 38 | 0) + (t * 9 | 0) + 6] = 0, z[f + (q * 38 | 0) + (t * 9 | 0) + 7] = 0, z[f + (q * 38 | 0) + (t * 9 | 0) + 8] = 0, e = (t << 3) + h + q * 88, N = m[u + 4 >> 2], m[e >> 2] = m[u >> 2], m[e + 4 >> 2] = N, t += 1, t == x) {
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

rn.X = 1;

function wn(c) {
  var d = c + 32;
  Ui(m[d >> 2], m[c + 40 >> 2]);
  Ui(m[d >> 2], m[c + 36 >> 2]);
}

function sn(c) {
  var d, e, f, g, h, i, j, k, l = a;
  a += 152;
  var o = l + 16, p = l + 32, n = l + 40, s = l + 48, q = l + 72, r = l + 80, t = l + 88, u = l + 96, w = l + 104, A = l + 112, x = l + 120, v = l + 128, C = l + 136, I = c + 48, L = m[I >> 2] > 0;
  a : do {
    if (L) {
      var G = c + 40, P = c + 36, N = c + 44, R = c + 24, Y = c + 28, U = l + 8, aa = o + 8, ba = s, Q = s;
      k = C >> 2;
      for (var S = q, W = r, M = U, O = l + 12, Z = l, X = p, T = p + 4, ka = aa, Ha = o + 12, gb = o, Va = n, ya = n + 4, Na = t, na = t + 4, fa = x, ha = x + 4, za = A, Ra = A + 4, wa = w, ua = w + 4, ga = v, qa = v + 4, Oa = u, oa = u + 4, da = 0; ; ) {
        var ca = m[G >> 2];
        j = ca >> 2;
        var Ea = m[P >> 2], la = z[(Ea + 76 >> 2) + (da * 22 | 0)], xa = z[(Ea + 80 >> 2) + (da * 22 | 0)], Xa = m[m[N >> 2] + (m[j + (da * 38 | 0) + 37] << 2) >> 2] + 64, Ya = m[j + (da * 38 | 0) + 28], ma = m[j + (da * 38 | 0) + 29], ia = z[j + (da * 38 | 0) + 30], Pa = z[j + (da * 38 | 0) + 31], Ia = z[j + (da * 38 | 0) + 32], Ca = z[j + (da * 38 | 0) + 33], Sa = Ea + da * 88 + 48, Fa = m[Sa + 4 >> 2], Ja = (E[0] = m[Sa >> 2], F[0]), ja = (E[0] = Fa, F[0]), Da = Ea + da * 88 + 56, va = m[Da + 4 >> 2], sa = (E[0] = m[Da >> 2], F[0]), $ = (E[0] = va, F[0]), Ka = m[R >> 2], ob = Ka + Ya * 12, ib = m[ob + 4 >> 2], jb = (E[0] = m[ob >> 2], F[0]), tb = (E[0] = ib, F[0]), kb = z[(Ka + 8 >> 2) + (Ya * 3 | 0)], vb = m[Y >> 2], lb = vb + Ya * 12, mb = m[lb + 4 >> 2], Ba = (E[0] = m[lb >> 2], F[0]), sb = (E[0] = mb, F[0]), Za = z[(vb + 8 >> 2) + (Ya * 3 | 0)], hb = Ka + ma * 12, bb = m[hb + 4 >> 2], cb = (E[0] = m[hb >> 2], F[0]), eb = (E[0] = bb, F[0]), wb = z[(Ka + 8 >> 2) + (ma * 3 | 0)], pb = vb + ma * 12, qb = m[pb + 4 >> 2], fb = (E[0] = m[pb >> 2], F[0]), La = (E[0] = qb, F[0]), Wa = z[(vb + 8 >> 2) + (ma * 3 | 0)];
        m[Xa + 60 >> 2] > 0 || K(H.m, 168, H.cb, H.Xb);
        Ci(U, kb);
        Ci(aa, wb);
        Vg(p, z[M >> 2], z[O >> 2], Ja, ja);
        J(Z, jb - z[X >> 2], tb - z[T >> 2]);
        Vg(n, z[ka >> 2], z[Ha >> 2], sa, $);
        J(gb, cb - z[Va >> 2], eb - z[ya >> 2]);
        ch(ba, Xa, l, la, o, xa);
        var db = ca + da * 152 + 72, ub = db, Ta = m[Q + 4 >> 2];
        m[ub >> 2] = m[Q >> 2];
        m[ub + 4 >> 2] = Ta;
        i = ca + da * 152 + 144 >> 2;
        var Bb = m[i], xb = Bb > 0;
        do {
          if (xb) {
            var nb = ia + Pa, yb = ca + da * 152 + 140;
            h = db >> 2;
            g = ca + da * 152 + 76 >> 2;
            for (var Ua = 0; ; ) {
              var Fb = ca + da * 152 + Ua * 36, Ma = z[s + (Ua << 3) + 8 >> 2], rb = z[s + (Ua << 3) + 12 >> 2];
              J(q, Ma - jb, rb - tb);
              var Db = Fb, zb = m[S + 4 >> 2];
              m[Db >> 2] = m[S >> 2];
              m[Db + 4 >> 2] = zb;
              var Eb = ca + da * 152 + Ua * 36 + 8;
              J(r, Ma - cb, rb - eb);
              var Gb = Eb, Cb = m[W >> 2], Lb = m[W + 4 >> 2];
              m[Gb >> 2] = Cb;
              m[Gb + 4 >> 2] = Lb;
              f = Fb >> 2;
              var Ab = z[f];
              e = ca + da * 152 + Ua * 36 + 4 >> 2;
              var $a = z[h], Sb = z[g], Ob = Ab * Sb - z[e] * $a, Tb = Eb, Pb = (E[0] = Cb, F[0]), Hb = ca + da * 152 + Ua * 36 + 12, jc = Pb * Sb - z[Hb >> 2] * $a, Zb = nb + Ia * Ob * Ob + Ca * jc * jc;
              z[j + (da * 38 | 0) + (Ua * 9 | 0) + 6] = Zb > 0 ? 1 / Zb : 0;
              J(t, z[g], z[h] * -1);
              var cc = z[Na >> 2], kc = z[na >> 2], Uc = z[f] * kc - z[e] * cc, Jc = z[Tb >> 2], sc = z[Hb >> 2], wc = Jc * kc - sc * cc, xc = nb + Ia * Uc * Uc + Ca * wc * wc;
              z[j + (da * 38 | 0) + (Ua * 9 | 0) + 7] = xc > 0 ? 1 / xc : 0;
              var Vc = ca + da * 152 + Ua * 36 + 32;
              z[Vc >> 2] = 0;
              lh(x, Wa, Jc, sc);
              J(A, fb + z[fa >> 2], La + z[ha >> 2]);
              J(w, z[za >> 2] - Ba, z[Ra >> 2] - sb);
              lh(v, Za, z[f], z[e]);
              J(u, z[wa >> 2] - z[ga >> 2], z[ua >> 2] - z[qa >> 2]);
              var $b = z[h] * z[Oa >> 2] + z[g] * z[oa >> 2];
              $b < -1 && (z[Vc >> 2] = $b * -z[yb >> 2]);
              var dc = Ua + 1;
              if (dc == Bb) {
                break;
              } else {
                Ua = dc;
              }
            }
            if (m[i] == 2) {
              var nc = z[h], ec = z[g], fc = z[j + (da * 38 | 0)] * ec - z[j + (da * 38 | 0) + 1] * nc, Kc = z[j + (da * 38 | 0) + 2] * ec - z[j + (da * 38 | 0) + 3] * nc, Wc = z[j + (da * 38 | 0) + 9] * ec - z[j + (da * 38 | 0) + 10] * nc, Ub = z[j + (da * 38 | 0) + 11] * ec - z[j + (da * 38 | 0) + 12] * nc, kd = Ia * fc, dd = Ca * Kc, Lc = nb + kd * fc + dd * Kc, Vb = nb + Ia * Wc * Wc + Ca * Ub * Ub, Mc = nb + kd * Wc + dd * Ub;
              if (Lc * Lc < (Lc * Vb - Mc * Mc) * 1e3) {
                var Xc = ca + da * 152 + 96;
                Re(Xc, Lc, Mc);
                Re(ca + da * 152 + 104, Mc, Vb);
                var Yc = ca + da * 152 + 80, Wb = C, ed = z[Xc >> 2], yc = z[Xc + 8 >> 2], ld = z[Xc + 4 >> 2], Xb = z[Xc + 12 >> 2], zc = ed * Xb - yc * ld, Nc = zc != 0 ? 1 / zc : zc;
                z[Wb >> 2] = Nc * Xb;
                var md = -Nc;
                z[Wb + 8 >> 2] = yc * md;
                z[Wb + 4 >> 2] = ld * md;
                z[Wb + 12 >> 2] = Nc * ed;
                d = Yc >> 2;
                m[d] = m[k];
                m[d + 1] = m[k + 1];
                m[d + 2] = m[k + 2];
                m[d + 3] = m[k + 3];
              } else {
                m[i] = 1;
              }
            }
          }
        } while (0);
        var Zc = da + 1;
        if (Zc < m[I >> 2]) {
          da = Zc;
        } else {
          break a;
        }
      }
    }
  } while (0);
  a = l;
}

sn.X = 1;

function tn(c) {
  var d, e, f, g, h = a;
  a += 64;
  var i = h + 8, j = h + 16, k = h + 24, l = h + 32, o = h + 40, p = h + 48, n = h + 56, s = c + 48, q = m[s >> 2] > 0;
  a : do {
    if (q) {
      var r = c + 40;
      g = c + 28 >> 2;
      f = h >> 2;
      e = i >> 2;
      for (var t = j, u = j + 4, w = l, A = l + 4, x = o, v = o + 4, C = k, I = k + 4, L = 0; ; ) {
        var G = m[r >> 2];
        d = G >> 2;
        var P = m[d + (L * 38 | 0) + 28], N = m[d + (L * 38 | 0) + 29], R = z[d + (L * 38 | 0) + 30], Y = z[d + (L * 38 | 0) + 32], U = z[d + (L * 38 | 0) + 31], aa = z[d + (L * 38 | 0) + 33], ba = m[d + (L * 38 | 0) + 36], Q = m[g], S = Q + P * 12, W = S, W = m[W >> 2];
        S += 4;
        var M = m[S >> 2];
        m[f] = W;
        m[f + 1] = M;
        var O = z[(Q + 8 >> 2) + (P * 3 | 0)], Z = Q + N * 12, S = m[Z >> 2], Z = m[Z + 4 >> 2];
        m[e] = S;
        m[e + 1] = Z;
        var X = z[(Q + 8 >> 2) + (N * 3 | 0)], G = G + L * 152 + 72, Q = m[G + 4 >> 2], G = (E[0] = m[G >> 2], F[0]), Q = (E[0] = Q, F[0]);
        J(j, Q, G * -1);
        if (ba > 0) {
          W = z[t >> 2];
          S = z[u >> 2];
          Z = O;
          M = X;
          for (O = 0; ; ) {
            Uf(l, z[d + (L * 38 | 0) + (O * 9 | 0) + 4], G, Q);
            Uf(o, z[d + (L * 38 | 0) + (O * 9 | 0) + 5], W, S);
            J(k, z[w >> 2] + z[x >> 2], z[A >> 2] + z[v >> 2]);
            var X = z[C >> 2], T = z[I >> 2], ka = Z - Y * (z[d + (L * 38 | 0) + (O * 9 | 0)] * T - z[d + (L * 38 | 0) + (O * 9 | 0) + 1] * X);
            Uf(p, R, X, T);
            gh(h, p);
            var Ha = M + aa * (z[d + (L * 38 | 0) + (O * 9 | 0) + 2] * T - z[d + (L * 38 | 0) + (O * 9 | 0) + 3] * X);
            Uf(n, U, X, T);
            Pe(i, n);
            O += 1;
            if (O == ba) {
              break;
            } else {
              Z = ka, M = Ha;
            }
          }
          R = ka;
          d = Ha;
          U = m[f + 1];
          aa = m[f];
          Y = m[e + 1];
          ba = m[e];
        } else {
          R = O, d = X, U = M, aa = W, Y = Z, ba = S;
        }
        W = m[g] + P * 12;
        m[W >> 2] = aa;
        m[W + 4 >> 2] = U;
        z[(m[g] + 8 >> 2) + (P * 3 | 0)] = R;
        W = P = m[g] + N * 12;
        m[W >> 2] = ba;
        S = P + 4;
        m[S >> 2] = Y;
        z[(m[g] + 8 >> 2) + (N * 3 | 0)] = d;
        L += 1;
        if (L >= m[s >> 2]) {
          break a;
        }
      }
    }
  } while (0);
  a = h;
}

tn.X = 1;

function un(c) {
  var d, e, f, g, h, i, j, k, l, o, p, n, s, q, r, t, u, w, A, x, v = a;
  a += 496;
  var C = v + 8, I = v + 16, L = v + 24, G = v + 32, P = v + 40, N = v + 48, R = v + 56, Y = v + 64, U = v + 72, aa = v + 80, ba = v + 88, Q = v + 96, S = v + 104, W = v + 112, M = v + 120, O = v + 128, Z = v + 136, X = v + 144, T = v + 152, ka = v + 160, Ha = v + 168, gb = v + 176, Va = v + 184, ya = v + 192, Na = v + 200, na = v + 208, fa = v + 216, ha = v + 224, za = v + 232, Ra = v + 240, wa = v + 248, ua = v + 256, ga = v + 264, qa = v + 272, Oa = v + 280, oa = v + 288, da = v + 296, ca = v + 304, Ea = v + 312, la = v + 320, xa = v + 328, Xa = v + 336, Ya = v + 344, ma = v + 352, ia = v + 360, Pa = v + 368, Ia = v + 376, Ca = v + 384, Sa = v + 392, Fa = v + 400, Ja = v + 408, ja = v + 416, Da = v + 424, va = v + 432, sa = v + 440, $ = v + 448, Ka = v + 456, ob = v + 464, ib = v + 472, jb = v + 480, tb = v + 488, kb = c + 48, vb = m[kb >> 2] > 0;
  a : do {
    if (vb) {
      var lb = c + 40;
      x = c + 28 >> 2;
      A = v >> 2;
      w = C >> 2;
      var mb = T, Ba = Ra, sb = Ra + 4;
      u = ua >> 2;
      t = ua + 4 >> 2;
      var Za = sa, hb = sa + 4, bb = Ca, cb = Ca + 4, eb = xa, wb = xa + 4, pb = qa, qb = qa + 4, fb = T + 4;
      r = C >> 2;
      q = C + 4 >> 2;
      var La = W, Wa = W + 4, db = S, ub = S + 4;
      s = v >> 2;
      n = v + 4 >> 2;
      for (var Ta = Q, Bb = Q + 4, xb = M, nb = M + 4, yb = ba, Ua = ba + 4, Fb = O, Ma = O + 4, rb = Va, Db = Va + 4, zb = gb, Eb = gb + 4, Gb = Ha, Cb = Ha + 4, Lb = ya, Ab = ya + 4, $a = ha, Sb = ha + 4, Ob = fa, Tb = fa + 4, Pb = na, Hb = na + 4, jc = za, Zb = za + 4, cc = ka, kc = ka + 4, Uc = Na, Jc = Na + 4, sc = ga, wc = ga + 4, xc = $, Vc = $ + 4, $b = Ka, dc = Ka + 4, nc = ib, ec = ib + 4, fc = tb, Kc = tb + 4, Wc = Sa, Ub = Sa + 4, kd = Fa, dd = Fa + 4, Lc = ja, Vb = ja + 4, Mc = va, Xc = va + 4, Yc = Xa, Wb = Xa + 4, ed = Ya, yc = Ya + 4, ld = ia, Xb = ia + 4, zc = Ia, Nc = Ia + 4, md = Oa, Zc = Oa + 4, Se = oa, ne = oa + 4, oe = ca, Te = ca + 4, Qb = la, Xd = la + 4, pf = N, wh = N + 4, xh = P, Gd = P + 4, kg = G, lg = G + 4, mg = R, ng = R + 4, Ue = L, Hd = L + 4, Yd = I, Ve = I + 4, og = Y, pg = Y + 4, Qa = 0; ; ) {
        var Mb = y[lb >> 2];
        p = Mb >> 2;
        var Zd = Mb + Qa * 152, $d = y[p + (Qa * 38 | 0) + 28], pe = y[p + (Qa * 38 | 0) + 29], ae = z[p + (Qa * 38 | 0) + 30], Id = z[p + (Qa * 38 | 0) + 32], Jd = z[p + (Qa * 38 | 0) + 31], Kd = z[p + (Qa * 38 | 0) + 33], qf = Mb + Qa * 152 + 144, We = y[qf >> 2], Ac = m[x], qg = Ac + $d * 12, $c = y[qg >> 2], rg = y[qg + 4 >> 2];
        m[A] = $c;
        m[A + 1] = rg;
        var ad = z[(Ac + 8 >> 2) + ($d * 3 | 0)], bd = Ac + pe * 12, sg = y[bd >> 2], rf = y[bd + 4 >> 2];
        m[w] = sg;
        m[w + 1] = rf;
        var sf = z[(Ac + 8 >> 2) + (pe * 3 | 0)], Bc = Mb + Qa * 152 + 72, yh = m[Bc + 4 >> 2], Jb = (E[0] = m[Bc >> 2], F[0]), Cc = (E[0] = yh, F[0]);
        J(I, Cc, Jb * -1);
        var qe = z[p + (Qa * 38 | 0) + 34], re = We - 1 < 2, zh = (E[0] = sg, F[0]), tg = (E[0] = rf, F[0]), ug = (E[0] = $c, F[0]), fd = (E[0] = rg, F[0]);
        re || K(H.m, 311, H.J, H.ic);
        var Ah = We > 0;
        b : do {
          if (Ah) {
            for (var tc = z[Yd >> 2], se = z[Ve >> 2], Ld = ad, Md = sf, Oc = 0, tf = zh, Dc = tg, vg = ug, Ec = fd; ; ) {
              var wg = Mb + Qa * 152 + Oc * 36 + 8, oc = Mb + Qa * 152 + Oc * 36 + 12;
              lh(N, Md, z[wg >> 2], z[oc >> 2]);
              J(P, tf + z[pf >> 2], Dc + z[wh >> 2]);
              J(G, z[xh >> 2] - vg, z[Gd >> 2] - Ec);
              var pc = Mb + Qa * 152 + Oc * 36, uf = Mb + Qa * 152 + Oc * 36 + 4;
              lh(R, Ld, z[pc >> 2], z[uf >> 2]);
              J(L, z[kg >> 2] - z[mg >> 2], z[lg >> 2] - z[ng >> 2]);
              var Nd = qe * z[p + (Qa * 38 | 0) + (Oc * 9 | 0) + 4], nd = Mb + Qa * 152 + Oc * 36 + 20, te = z[nd >> 2], od = -Nd > (te + z[p + (Qa * 38 | 0) + (Oc * 9 | 0) + 7] * -(z[Ue >> 2] * tc + z[Hd >> 2] * se) < Nd ? te + z[p + (Qa * 38 | 0) + (Oc * 9 | 0) + 7] * -(z[Ue >> 2] * tc + z[Hd >> 2] * se) : Nd) ? -Nd : te + z[p + (Qa * 38 | 0) + (Oc * 9 | 0) + 7] * -(z[Ue >> 2] * tc + z[Hd >> 2] * se) < Nd ? te + z[p + (Qa * 38 | 0) + (Oc * 9 | 0) + 7] * -(z[Ue >> 2] * tc + z[Hd >> 2] * se) : Nd, Bh = od - te;
              z[nd >> 2] = od;
              Uf(Y, Bh, tc, se);
              var ue = z[og >> 2], ve = z[pg >> 2];
              Uf(U, ae, ue, ve);
              gh(v, U);
              var Ad = Ld - Id * (z[pc >> 2] * ve - z[uf >> 2] * ue);
              Uf(aa, Jd, ue, ve);
              Pe(C, aa);
              var xg = Md + Kd * (z[wg >> 2] * ve - z[oc >> 2] * ue), Bd = Oc + 1;
              if (Bd == We) {
                var pd = Ad, qc = xg;
                break b;
              }
              Ld = Ad;
              Md = xg;
              Oc = Bd;
              tf = z[r];
              Dc = z[q];
              vg = z[s];
              Ec = z[n];
            }
          } else {
            pd = ad, qc = sf;
          }
        } while (0);
        var Od = m[qf >> 2] == 1;
        b : do {
          if (Od) {
            var yg = Mb + Qa * 152 + 8, vf = Mb + Qa * 152 + 12;
            lh(W, qc, z[yg >> 2], z[vf >> 2]);
            J(S, z[r] + z[La >> 2], z[q] + z[Wa >> 2]);
            J(Q, z[db >> 2] - z[s], z[ub >> 2] - z[n]);
            var wf = Zd, xf = Mb + Qa * 152 + 4;
            lh(M, pd, z[wf >> 2], z[xf >> 2]);
            J(ba, z[Ta >> 2] - z[xb >> 2], z[Bb >> 2] - z[nb >> 2]);
            var yf = Mb + Qa * 152 + 16, Xe = z[yf >> 2], zf = Xe + (z[yb >> 2] * Jb + z[Ua >> 2] * Cc - z[p + (Qa * 38 | 0) + 8]) * -z[p + (Qa * 38 | 0) + 6] > 0 ? Xe + (z[yb >> 2] * Jb + z[Ua >> 2] * Cc - z[p + (Qa * 38 | 0) + 8]) * -z[p + (Qa * 38 | 0) + 6] : 0, Kb = zf - Xe;
            z[yf >> 2] = zf;
            Uf(O, Kb, Jb, Cc);
            var Ye = z[Fb >> 2], Ib = z[Ma >> 2];
            Uf(Z, ae, Ye, Ib);
            gh(v, Z);
            var Ch = pd - Id * (z[wf >> 2] * Ib - z[xf >> 2] * Ye);
            Uf(X, Jd, Ye, Ib);
            Pe(C, X);
            var Fc = qc + Kd * (z[yg >> 2] * Ib - z[vf >> 2] * Ye), Gc = Ch;
          } else {
            o = Mb + Qa * 152 + 16 >> 2;
            var Dh = z[o];
            l = Mb + Qa * 152 + 52 >> 2;
            J(T, Dh, z[l]);
            var Pd = z[mb >> 2], Qd = z[fb >> 2];
            Pd < 0 | Qd < 0 && K(H.m, 406, H.J, H.pc);
            k = Mb + Qa * 152 + 8 >> 2;
            var Pc = z[k];
            j = Mb + Qa * 152 + 12 >> 2;
            lh(Va, qc, Pc, z[j]);
            var zg = z[r], Hc = z[q];
            J(gb, zg + z[rb >> 2], Hc + z[Db >> 2]);
            var Ag = z[s], qd = z[n];
            J(Ha, z[zb >> 2] - Ag, z[Eb >> 2] - qd);
            i = Zd >> 2;
            var vd = z[i];
            h = Mb + Qa * 152 + 4 >> 2;
            lh(ya, pd, vd, z[h]);
            J(ka, z[Gb >> 2] - z[Lb >> 2], z[Cb >> 2] - z[Ab >> 2]);
            g = Mb + Qa * 152 + 44 >> 2;
            var Eh = z[g];
            f = Mb + Qa * 152 + 48 >> 2;
            lh(ha, qc, Eh, z[f]);
            J(fa, zg + z[$a >> 2], Hc + z[Sb >> 2]);
            J(na, z[Ob >> 2] - Ag, z[Tb >> 2] - qd);
            e = Mb + Qa * 152 + 36 >> 2;
            var Bg = z[e];
            d = Mb + Qa * 152 + 40 >> 2;
            lh(za, pd, Bg, z[d]);
            J(Na, z[Pb >> 2] - z[jc >> 2], z[Hb >> 2] - z[Zb >> 2]);
            var Cg = z[Uc >> 2] * Jb + z[Jc >> 2] * Cc;
            z[Ba >> 2] = z[cc >> 2] * Jb + z[kc >> 2] * Cc - z[p + (Qa * 38 | 0) + 8];
            z[sb >> 2] = Cg - z[p + (Qa * 38 | 0) + 17];
            Mn(wa, Mb + Qa * 152 + 96, Pd, Qd);
            gh(Ra, wa);
            var Cd = z[Ba >> 2], Ze = z[sb >> 2];
            Mn(ga, Mb + Qa * 152 + 80, Cd, Ze);
            Ug(ua, z[sc >> 2], z[wc >> 2]);
            var Rd = z[u], Fh = Rd < 0;
            do {
              if (!Fh) {
                var be = z[t];
                if (be >= 0) {
                  J(qa, Rd - Pd, be - Qd);
                  Uf(Oa, z[pb >> 2], Jb, Cc);
                  Uf(oa, z[qb >> 2], Jb, Cc);
                  var we = z[md >> 2], $e = z[Zc >> 2], af = z[Se >> 2], xe = z[ne >> 2];
                  J(ca, we + af, $e + xe);
                  Uf(da, ae, z[oe >> 2], z[Te >> 2]);
                  gh(v, da);
                  var Dg = pd - Id * (z[i] * $e - z[h] * we + (z[e] * xe - z[d] * af));
                  J(la, we + af, $e + xe);
                  Uf(Ea, Jd, z[Qb >> 2], z[Xd >> 2]);
                  Pe(C, Ea);
                  var Gh = qc + Kd * (z[k] * $e - z[j] * we + (z[g] * xe - z[f] * af));
                  z[o] = Rd;
                  z[l] = be;
                  Fc = Gh;
                  Gc = Dg;
                  break b;
                }
              }
            } while (0);
            var ye = Cd * -z[p + (Qa * 38 | 0) + 6];
            z[u] = ye;
            z[t] = 0;
            var Eg = ye < 0;
            do {
              if (!Eg && z[p + (Qa * 38 | 0) + 25] * ye + Ze >= 0) {
                J(xa, ye - Pd, 0 - Qd);
                Uf(Xa, z[eb >> 2], Jb, Cc);
                Uf(Ya, z[wb >> 2], Jb, Cc);
                var ce = z[Yc >> 2], bf = z[Wb >> 2], de = z[ed >> 2], cf = z[yc >> 2];
                J(ia, ce + de, bf + cf);
                Uf(ma, ae, z[ld >> 2], z[Xb >> 2]);
                gh(v, ma);
                var wd = pd - Id * (z[i] * bf - z[h] * ce + (z[e] * cf - z[d] * de));
                J(Ia, ce + de, bf + cf);
                Uf(Pa, Jd, z[zc >> 2], z[Nc >> 2]);
                Pe(C, Pa);
                var xd = qc + Kd * (z[k] * bf - z[j] * ce + (z[g] * cf - z[f] * de));
                z[o] = ye;
                z[l] = 0;
                Fc = xd;
                Gc = wd;
                break b;
              }
            } while (0);
            z[u] = 0;
            var ze = Ze * -z[p + (Qa * 38 | 0) + 15];
            z[t] = ze;
            var Fg = ze < 0;
            do {
              if (!Fg && z[p + (Qa * 38 | 0) + 26] * ze + Cd >= 0) {
                J(Ca, 0 - Pd, ze - Qd);
                Uf(Sa, z[bb >> 2], Jb, Cc);
                Uf(Fa, z[cb >> 2], Jb, Cc);
                var Ae = z[Wc >> 2], Be = z[Ub >> 2], Ce = z[kd >> 2], De = z[dd >> 2];
                J(ja, Ae + Ce, Be + De);
                Uf(Ja, ae, z[Lc >> 2], z[Vb >> 2]);
                gh(v, Ja);
                var Gg = pd - Id * (z[i] * Be - z[h] * Ae + (z[e] * De - z[d] * Ce));
                J(va, Ae + Ce, Be + De);
                Uf(Da, Jd, z[Mc >> 2], z[Xc >> 2]);
                Pe(C, Da);
                var Hh = qc + Kd * (z[k] * Be - z[j] * Ae + (z[g] * De - z[f] * Ce));
                z[o] = 0;
                z[l] = ze;
                Fc = Hh;
                Gc = Gg;
                break b;
              }
            } while (0);
            z[u] = 0;
            z[t] = 0;
            if (Cd < 0 | Ze < 0) {
              Fc = qc, Gc = pd;
            } else {
              J(sa, 0 - Pd, 0 - Qd);
              Uf($, z[Za >> 2], Jb, Cc);
              Uf(Ka, z[hb >> 2], Jb, Cc);
              var df = z[xc >> 2], ef = z[Vc >> 2], Ee = z[$b >> 2], Fe = z[dc >> 2];
              J(ib, df + Ee, ef + Fe);
              Uf(ob, ae, z[nc >> 2], z[ec >> 2]);
              gh(v, ob);
              var Ih = pd - Id * (z[i] * ef - z[h] * df + (z[e] * Fe - z[d] * Ee));
              J(tb, df + Ee, ef + Fe);
              Uf(jb, Jd, z[fc >> 2], z[Kc >> 2]);
              Pe(C, jb);
              var Jh = qc + Kd * (z[k] * ef - z[j] * df + (z[g] * Fe - z[f] * Ee));
              z[o] = 0;
              z[l] = 0;
              Fc = Jh;
              Gc = Ih;
            }
          }
        } while (0);
        var Hg = m[x] + $d * 12, Ig = m[A + 1];
        m[Hg >> 2] = m[A];
        m[Hg + 4 >> 2] = Ig;
        z[(m[x] + 8 >> 2) + ($d * 3 | 0)] = Gc;
        var Af = m[x] + pe * 12, Sd = m[w + 1];
        m[Af >> 2] = m[w];
        m[Af + 4 >> 2] = Sd;
        z[(m[x] + 8 >> 2) + (pe * 3 | 0)] = Fc;
        var Jg = Qa + 1;
        if (Jg < m[kb >> 2]) {
          Qa = Jg;
        } else {
          break a;
        }
      }
    }
  } while (0);
  a = v;
}

un.X = 1;

function Mn(c, d, e, f) {
  J(c, z[d >> 2] * e + z[d + 8 >> 2] * f, z[d + 4 >> 2] * e + z[d + 12 >> 2] * f);
}

function vn(c) {
  var d, e, f, g, h = a;
  a += 124;
  var i = h + 8, j = h + 16, k = h + 32, l = h + 48, o = h + 56, p = h + 64, n = h + 84, s = h + 92, q = h + 100, r = h + 108, t = h + 116, u = c + 48, w = m[u >> 2] > 0;
  a : do {
    if (w) {
      var A = c + 36;
      g = c + 24 >> 2;
      f = h >> 2;
      e = i >> 2;
      for (var x = j + 8, v = k + 8, C = p, I = p + 8, L = p + 16, G = x, P = j + 12, N = j, R = h, Y = h + 4, U = l, aa = l + 4, ba = v, Q = k + 12, S = k, W = i, M = i + 4, O = o, Z = o + 4, X = n, T = n + 4, ka = s, Ha = s + 4, gb = q, Va = q + 4, ya = 0, Na = 0; ; ) {
        var na = m[A >> 2];
        d = na >> 2;
        var fa = na + ya * 88, ha = m[d + (ya * 22 | 0) + 8], za = m[d + (ya * 22 | 0) + 9], Ra = na + ya * 88 + 48, wa = Ra, ua = Ra + 4, ga = m[ua >> 2], qa = (E[0] = m[wa >> 2], F[0]), Oa = (E[0] = ga, F[0]), oa = z[d + (ya * 22 | 0) + 10], da = z[d + (ya * 22 | 0) + 16], ca = na + ya * 88 + 56, Ea = m[ca + 4 >> 2], la = (E[0] = m[ca >> 2], F[0]), xa = (E[0] = Ea, F[0]), Xa = z[d + (ya * 22 | 0) + 11], Ya = z[d + (ya * 22 | 0) + 17], ma = m[d + (ya * 22 | 0) + 21], ia = m[g], Pa = ia + ha * 12, Ia = m[Pa >> 2], Ca = m[Pa + 4 >> 2];
        m[f] = Ia;
        m[f + 1] = Ca;
        var Sa = z[(ia + 8 >> 2) + (ha * 3 | 0)], Fa = ia + za * 12, Ja = m[Fa >> 2], ja = m[Fa + 4 >> 2];
        m[e] = Ja;
        m[e + 1] = ja;
        var Da = z[(ia + 8 >> 2) + (za * 3 | 0)];
        if (ma > 0) {
          for (var va = Ja, sa = Ca, $ = Ia, Ka = (E[0] = ja, F[0]), ob = (E[0] = va, F[0]), ib = (E[0] = sa, F[0]), jb = (E[0] = $, F[0]), tb = oa + Xa, kb = Sa, vb = Da, lb = Na, mb = 0, Ba = jb, sb = ib, Za = ob, hb = Ka; ; ) {
            Ci(x, kb);
            Ci(v, vb);
            Vg(l, z[G >> 2], z[P >> 2], qa, Oa);
            J(N, Ba - z[U >> 2], sb - z[aa >> 2]);
            Vg(o, z[ba >> 2], z[Q >> 2], la, xa);
            J(S, Za - z[O >> 2], hb - z[Z >> 2]);
            Nn(p, fa, j, k, mb);
            var bb = m[C + 4 >> 2], cb = (E[0] = m[C >> 2], F[0]), eb = (E[0] = bb, F[0]), wb = m[I + 4 >> 2], pb = (E[0] = m[I >> 2], F[0]), qb = (E[0] = wb, F[0]), fb = z[L >> 2];
            J(n, pb - Ba, qb - sb);
            J(s, pb - Za, qb - hb);
            var La = lb < fb ? lb : fb, Wa = z[X >> 2], db = z[T >> 2], ub = Wa * eb - db * cb, Ta = z[ka >> 2], Bb = z[Ha >> 2], xb = Ta * eb - Bb * cb, nb = tb + da * ub * ub + Ya * xb * xb;
            Uf(q, nb > 0 ? -(-.20000000298023224 > ((fb + .004999999888241291) * .20000000298023224 < 0 ? (fb + .004999999888241291) * .20000000298023224 : 0) ? -.20000000298023224 : (fb + .004999999888241291) * .20000000298023224 < 0 ? (fb + .004999999888241291) * .20000000298023224 : 0) / nb : 0, cb, eb);
            var yb = z[gb >> 2], Ua = z[Va >> 2];
            Uf(r, oa, yb, Ua);
            gh(h, r);
            var Fb = kb - da * (Wa * Ua - db * yb);
            Uf(t, Xa, yb, Ua);
            Pe(i, t);
            var Ma = vb + Ya * (Ta * Ua - Bb * yb), rb = mb + 1;
            if (rb == ma) {
              break;
            }
            kb = Fb;
            vb = Ma;
            lb = La;
            mb = rb;
            Ba = z[R >> 2];
            sb = z[Y >> 2];
            Za = z[W >> 2];
            hb = z[M >> 2];
          }
          var Db = Fb, zb = Ma, Eb = La, Gb = m[g], Cb = m[f + 1], Lb = m[f], Ab = m[e + 1], $a = m[e];
        } else {
          Db = Sa, zb = Da, Eb = Na, Gb = ia, Cb = Ca, Lb = Ia, Ab = ja, $a = Ja;
        }
        var Sb = Gb + ha * 12, wa = Sb;
        m[wa >> 2] = Lb;
        ua = Sb + 4;
        m[ua >> 2] = Cb;
        z[(m[g] + 8 >> 2) + (ha * 3 | 0)] = Db;
        var Ob = m[g] + za * 12;
        m[Ob >> 2] = $a;
        m[Ob + 4 >> 2] = Ab;
        z[(m[g] + 8 >> 2) + (za * 3 | 0)] = zb;
        var Tb = ya + 1;
        if (Tb < m[u >> 2]) {
          ya = Tb, Na = Eb;
        } else {
          var Pb = Eb;
          break a;
        }
      }
    } else {
      Pb = 0;
    }
  } while (0);
  var Hb = Pb >= -.014999999664723873;
  a = h;
  return Hb;
}

vn.X = 1;

function Nn(c, d, e, f, g) {
  var h = d >> 2, i = c >> 2, d = a;
  a += 120;
  var j = d + 8, k = d + 16, l = d + 24, o = d + 32, p = d + 40, n = d + 48, s = d + 56, q = d + 64, r = d + 72, t = d + 80, u = d + 88, w = d + 96, A = d + 104, x = d + 112;
  m[h + 21] > 0 || K(H.m, 617, H.jb, H.yc);
  var v = m[h + 18];
  v == 0 ? (Rf(d, e, z[h + 6], z[h + 7]), Rf(j, f, z[h], z[h + 1]), x = z[j >> 2], w = z[j + 4 >> 2], e = z[d >> 2], f = z[d + 4 >> 2], J(k, x - e, w - f), g = m[k + 4 >> 2], m[c >> 2] = m[k >> 2], m[c + 4 >> 2] = g, Wf(c), c += 8, J(o, e + x, f + w), Uf(l, .5, z[o >> 2], z[o + 4 >> 2]), o = m[l + 4 >> 2], m[c >> 2] = m[l >> 2], m[c + 4 >> 2] = o, J(p, x - e, w - f), z[i + 4] = z[p >> 2] * z[i] + z[p + 4 >> 2] * z[i + 1] - z[h + 19] - z[h + 20]) : v == 1 ? (Vg(n, z[e + 8 >> 2], z[e + 12 >> 2], z[h + 4], z[h + 5]), x = m[n + 4 >> 2], m[c >> 2] = m[n >> 2], m[c + 4 >> 2] = x, Rf(s, e, z[h + 6], z[h + 7]), Rf(q, f, z[(g << 3 >> 2) + h], z[((g << 3) + 4 >> 2) + h]), J(r, z[q >> 2] - z[s >> 2], z[q + 4 >> 2] - z[s + 4 >> 2]), z[i + 4] = z[r >> 2] * z[i] + z[r + 4 >> 2] * z[i + 1] - z[h + 19] - z[h + 20], c += 8, h = m[q + 4 >> 2], m[c >> 2] = m[q >> 2], m[c + 4 >> 2] = h) : v == 2 && (Vg(t, z[f + 8 >> 2], z[f + 12 >> 2], z[h + 4], z[h + 5]), l = m[t >> 2], p = m[t + 4 >> 2], m[c >> 2] = l, m[c + 4 >> 2] = p, Rf(u, f, z[h + 6], z[h + 7]), Rf(w, e, z[(g << 3 >> 2) + h], z[((g << 3) + 4 >> 2) + h]), J(A, z[w >> 2] - z[u >> 2], z[w + 4 >> 2] - z[u + 4 >> 2]), l = z[i], p = z[i + 1], z[i + 4] = z[A >> 2] * l + z[A + 4 >> 2] * p - z[h + 19] - z[h + 20], h = c + 8, i = m[w >> 2], o = m[w + 4 >> 2], m[h >> 2] = i, m[h + 4 >> 2] = o, Ug(x, l, p), h = m[x + 4 >> 2], m[c >> 2] = m[x >> 2], m[c + 4 >> 2] = h);
  a = d;
}

Nn.X = 1;

function Bn(c, d, e) {
  var f, g, h, i, j = a;
  a += 124;
  var k = j + 8, l = j + 16, o = j + 32, p = j + 48, n = j + 56, s = j + 64, q = j + 84, r = j + 92, t = j + 100, u = j + 108, w = j + 116, A = c + 48, x = m[A >> 2] > 0;
  a : do {
    if (x) {
      var v = c + 36;
      i = c + 24 >> 2;
      h = j >> 2;
      g = k >> 2;
      for (var C = l + 8, I = o + 8, L = s, G = s + 8, P = s + 16, N = C, R = l + 12, Y = l, U = j, aa = j + 4, ba = p, Q = p + 4, S = I, W = o + 12, M = o, O = k, Z = k + 4, X = n, T = n + 4, ka = q, Ha = q + 4, gb = r, Va = r + 4, ya = t, Na = t + 4, na = 0, fa = 0; ; ) {
        var ha = m[v >> 2];
        f = ha >> 2;
        var za = ha + na * 88, Ra = m[f + (na * 22 | 0) + 8], wa = m[f + (na * 22 | 0) + 9], ua = ha + na * 88 + 48, ga = ua, qa = ua + 4, Oa = m[qa >> 2], oa = (E[0] = m[ga >> 2], F[0]), da = (E[0] = Oa, F[0]), ca = ha + na * 88 + 56, Ea = m[ca + 4 >> 2], la = (E[0] = m[ca >> 2], F[0]), xa = (E[0] = Ea, F[0]), Xa = m[f + (na * 22 | 0) + 21];
        if (Ra == d | Ra == e) {
          var Ya = z[f + (na * 22 | 0) + 16], ma = z[f + (na * 22 | 0) + 10];
        } else {
          ma = Ya = 0;
        }
        var ia = z[f + (na * 22 | 0) + 17], Pa = z[f + (na * 22 | 0) + 11], Ia = m[i], Ca = Ia + Ra * 12, Sa = m[Ca >> 2], Fa = m[Ca + 4 >> 2];
        m[h] = Sa;
        m[h + 1] = Fa;
        var Ja = z[(Ia + 8 >> 2) + (Ra * 3 | 0)], ja = Ia + wa * 12, Da = m[ja >> 2], va = m[ja + 4 >> 2];
        m[g] = Da;
        m[g + 1] = va;
        var sa = z[(Ia + 8 >> 2) + (wa * 3 | 0)];
        if (Xa > 0) {
          for (var $ = Da, Ka = Fa, ob = Sa, ib = (E[0] = va, F[0]), jb = (E[0] = $, F[0]), tb = (E[0] = Ka, F[0]), kb = (E[0] = ob, F[0]), vb = ma + Pa, lb = fa, mb = Ja, Ba = sa, sb = 0, Za = kb, hb = tb, bb = jb, cb = ib; ; ) {
            Ci(C, mb);
            Ci(I, Ba);
            Vg(p, z[N >> 2], z[R >> 2], oa, da);
            J(Y, Za - z[ba >> 2], hb - z[Q >> 2]);
            Vg(n, z[S >> 2], z[W >> 2], la, xa);
            J(M, bb - z[X >> 2], cb - z[T >> 2]);
            Nn(s, za, l, o, sb);
            var eb = m[L + 4 >> 2], wb = (E[0] = m[L >> 2], F[0]), pb = (E[0] = eb, F[0]), qb = m[G + 4 >> 2], fb = (E[0] = m[G >> 2], F[0]), La = (E[0] = qb, F[0]), Wa = z[P >> 2];
            J(q, fb - Za, La - hb);
            J(r, fb - bb, La - cb);
            var db = lb < Wa ? lb : Wa, ub = z[ka >> 2], Ta = z[Ha >> 2], Bb = ub * pb - Ta * wb, xb = z[gb >> 2], nb = z[Va >> 2], yb = xb * pb - nb * wb, Ua = vb + Ya * Bb * Bb + ia * yb * yb;
            Uf(t, Ua > 0 ? -(-.20000000298023224 > ((Wa + .004999999888241291) * .75 < 0 ? (Wa + .004999999888241291) * .75 : 0) ? -.20000000298023224 : (Wa + .004999999888241291) * .75 < 0 ? (Wa + .004999999888241291) * .75 : 0) / Ua : 0, wb, pb);
            var Fb = z[ya >> 2], Ma = z[Na >> 2];
            Uf(u, ma, Fb, Ma);
            gh(j, u);
            var rb = mb - Ya * (ub * Ma - Ta * Fb);
            Uf(w, Pa, Fb, Ma);
            Pe(k, w);
            var Db = Ba + ia * (xb * Ma - nb * Fb), zb = sb + 1;
            if (zb == Xa) {
              break;
            }
            lb = db;
            mb = rb;
            Ba = Db;
            sb = zb;
            Za = z[U >> 2];
            hb = z[aa >> 2];
            bb = z[O >> 2];
            cb = z[Z >> 2];
          }
          var Eb = db, Gb = rb, Cb = Db, Lb = m[i], Ab = m[h + 1], $a = m[h], Sb = m[g + 1], Ob = m[g];
        } else {
          Eb = fa, Gb = Ja, Cb = sa, Lb = Ia, Ab = Fa, $a = Sa, Sb = va, Ob = Da;
        }
        var Tb = Lb + Ra * 12, ga = Tb;
        m[ga >> 2] = $a;
        qa = Tb + 4;
        m[qa >> 2] = Ab;
        z[(m[i] + 8 >> 2) + (Ra * 3 | 0)] = Gb;
        var Pb = m[i] + wa * 12;
        m[Pb >> 2] = Ob;
        m[Pb + 4 >> 2] = Sb;
        z[(m[i] + 8 >> 2) + (wa * 3 | 0)] = Cb;
        var Hb = na + 1;
        if (Hb < m[A >> 2]) {
          na = Hb, fa = Eb;
        } else {
          var jc = Eb;
          break a;
        }
      }
    } else {
      jc = 0;
    }
  } while (0);
  var Zb = jc >= -.007499999832361937;
  a = j;
  return Zb;
}

Bn.X = 1;

function zd(c) {
  var d;
  if (c < 245) {
    var e = c < 11 ? 16 : c + 11 & -8, f = e >>> 3, c = y[V >> 2], g = c >>> f;
    if ((g & 3) == 0) {
      if (e > y[V + 8 >> 2]) {
        if (g == 0) {
          if (m[V + 4 >> 2] == 0) {
            o = e, d = 29;
          } else {
            if (d = On(e), d == 0) {
              o = e, d = 29;
            } else {
              var h = d;
              d = 37;
            }
          }
        } else {
          var h = 2 << f, h = g << f & (h | -h), f = (h & -h) - 1, h = f >>> 12 & 16, g = f >>> h, f = g >>> 5 & 8, i = g >>> f, g = i >>> 2 & 4, j = i >>> g, i = j >>> 1 & 2;
          j >>>= i;
          var k = j >>> 1 & 1, f = (f | h | g | i | k) + (j >>> k), h = f << 1, i = (h << 2) + V + 40, j = (h + 2 << 2) + V + 40, g = y[j >> 2], h = g + 8, k = y[h >> 2];
          i == k ? m[V >> 2] = c & (1 << f ^ -1) : k < y[V + 16 >> 2] ? (Pn(), ea("Reached an unreachable!")) : (m[j >> 2] = k, m[k + 12 >> 2] = i);
          i = f << 3;
          c = i - e;
          m[g + 4 >> 2] = e | 3;
          f = g + e;
          m[g + (e | 4) >> 2] = c | 1;
          m[g + i >> 2] = c;
          k = y[V + 8 >> 2];
          if (k != 0) {
            e = m[V + 20 >> 2];
            i = k >>> 2 & 1073741822;
            g = (i << 2) + V + 40;
            j = y[V >> 2];
            k = 1 << (k >>> 3);
            if ((j & k) == 0) {
              m[V >> 2] = j | k;
              d = g;
              var l = (i + 2 << 2) + V + 40;
            } else {
              i = (i + 2 << 2) + V + 40, j = y[i >> 2], j < y[V + 16 >> 2] ? (Pn(), ea("Reached an unreachable!")) : (d = j, l = i);
            }
            m[l >> 2] = e;
            m[d + 12 >> 2] = e;
            m[e + 8 >> 2] = d;
            m[e + 12 >> 2] = g;
          }
          m[V + 8 >> 2] = c;
          m[V + 20 >> 2] = f;
          d = 37;
        }
      } else {
        var o = e;
        d = 29;
      }
    } else {
      d = (g & 1 ^ 1) + f, e = d << 1, l = (e << 2) + V + 40, f = (e + 2 << 2) + V + 40, e = y[f >> 2], h = e + 8, g = y[h >> 2], l == g ? m[V >> 2] = c & (1 << d ^ -1) : g < y[V + 16 >> 2] ? (Pn(), ea("Reached an unreachable!")) : (m[f >> 2] = g, m[g + 12 >> 2] = l), d <<= 3, m[e + 4 >> 2] = d | 3, m[e + (d | 4) >> 2] |= 1, d = 37;
    }
  } else {
    c > 4294967231 ? (o = -1, d = 29) : (d = c + 11 & -8, m[V + 4 >> 2] == 0 ? (o = d, d = 29) : (l = Qn(d), l == 0 ? (o = d, d = 29) : (h = l, d = 37)));
  }
  d == 29 && (d = y[V + 8 >> 2], o > d ? (d = y[V + 12 >> 2], o < d ? (d -= o, m[V + 12 >> 2] = d, l = y[V + 24 >> 2], m[V + 24 >> 2] = l + o, m[l + (o + 4) >> 2] = d | 1, m[l + 4 >> 2] = o | 3, h = l + 8) : h = Rn(o)) : (l = d - o, c = y[V + 20 >> 2], l > 15 ? (m[V + 20 >> 2] = c + o, m[V + 8 >> 2] = l, m[c + (o + 4) >> 2] = l | 1, m[c + d >> 2] = l, m[c + 4 >> 2] = o | 3) : (m[V + 8 >> 2] = 0, m[V + 20 >> 2] = 0, m[c + 4 >> 2] = d | 3, m[c + (d + 4) >> 2] |= 1), h = c + 8));
  return h;
}

zd.X = 1;

function On(c) {
  var d, e, f = m[V + 4 >> 2], g = (f & -f) - 1, f = g >>> 12 & 16, h = g >>> f, g = h >>> 5 & 8;
  e = h >>> g;
  var h = e >>> 2 & 4, i = e >>> h;
  e = i >>> 1 & 2;
  i >>>= e;
  var j = i >>> 1 & 1, f = g = y[V + ((g | f | h | e | j) + (i >>> j) << 2) + 304 >> 2];
  e = f >> 2;
  g = (m[g + 4 >> 2] & -8) - c;
  a : for (;;) {
    for (h = f; ; ) {
      i = m[h + 16 >> 2];
      if (i == 0) {
        if (h = m[h + 20 >> 2], h == 0) {
          break a;
        }
      } else {
        h = i;
      }
      i = (m[h + 4 >> 2] & -8) - c;
      if (i < g) {
        f = h;
        e = f >> 2;
        g = i;
        continue a;
      }
    }
  }
  var i = f, k = y[V + 16 >> 2], j = i < k;
  do {
    if (!j) {
      var l = i + c, h = l;
      if (i < l) {
        var j = y[e + 6], l = y[e + 3], o = l == f;
        do {
          if (o) {
            var p = f + 20, n = m[p >> 2];
            if (n == 0 && (p = f + 16, n = m[p >> 2], n == 0)) {
              var s = 0;
              d = s >> 2;
              break;
            }
            for (;;) {
              var q = n + 20, r = m[q >> 2];
              if (r != 0) {
                p = q, n = r;
              } else {
                if (q = n + 16, r = y[q >> 2], r == 0) {
                  break;
                } else {
                  p = q, n = r;
                }
              }
            }
            p < k ? (Pn(), ea("Reached an unreachable!")) : (m[p >> 2] = 0, s = n, d = s >> 2);
          } else {
            p = y[e + 2], p < k ? (Pn(), ea("Reached an unreachable!")) : (m[p + 12 >> 2] = l, m[l + 8 >> 2] = p, s = l, d = s >> 2);
          }
        } while (0);
        k = j == 0;
        a : do {
          if (!k) {
            l = f + 28;
            o = (m[l >> 2] << 2) + V + 304;
            p = f == m[o >> 2];
            do {
              if (p) {
                if (m[o >> 2] = s, s == 0) {
                  m[V + 4 >> 2] &= 1 << m[l >> 2] ^ -1;
                  break a;
                }
              } else {
                if (j < y[V + 16 >> 2]) {
                  Pn(), ea("Reached an unreachable!");
                } else {
                  if (n = j + 16, m[n >> 2] == f ? m[n >> 2] = s : m[j + 20 >> 2] = s, s == 0) {
                    break a;
                  }
                }
              }
            } while (0);
            s < y[V + 16 >> 2] ? (Pn(), ea("Reached an unreachable!")) : (m[d + 6] = j, l = y[e + 4], l != 0 && (l < y[V + 16 >> 2] ? (Pn(), ea("Reached an unreachable!")) : (m[d + 4] = l, m[l + 24 >> 2] = s)), l = y[e + 5], l != 0 && (l < y[V + 16 >> 2] ? (Pn(), ea("Reached an unreachable!")) : (m[d + 5] = l, m[l + 24 >> 2] = s)));
          }
        } while (0);
        if (g < 16) {
          var t = g + c;
          m[e + 1] = t | 3;
          m[i + (t + 4) >> 2] |= 1;
        } else {
          m[e + 1] = c | 3;
          m[i + (c + 4) >> 2] = g | 1;
          m[i + g + c >> 2] = g;
          i = y[V + 8 >> 2];
          if (i != 0) {
            c = y[V + 20 >> 2];
            s = i >>> 2 & 1073741822;
            d = (s << 2) + V + 40;
            e = y[V >> 2];
            i = 1 << (i >>> 3);
            if ((e & i) == 0) {
              m[V >> 2] = e | i;
              var t = d, u = (s + 2 << 2) + V + 40;
            } else {
              s = (s + 2 << 2) + V + 40, e = y[s >> 2], e < y[V + 16 >> 2] ? (Pn(), ea("Reached an unreachable!")) : (t = e, u = s);
            }
            m[u >> 2] = c;
            m[t + 12 >> 2] = c;
            m[c + 8 >> 2] = t;
            m[c + 12 >> 2] = d;
          }
          m[V + 8 >> 2] = g;
          m[V + 20 >> 2] = h;
        }
        return f + 8;
      }
    }
  } while (0);
  Pn();
  ea("Reached an unreachable!");
}

On.X = 1;

function Rn(c) {
  var d, e;
  m[Sn >> 2] == 0 && Tn();
  var f = (m[V + 440 >> 2] & 4) == 0;
  do {
    if (f) {
      e = m[V + 24 >> 2];
      if (e == 0) {
        e = 5;
      } else {
        if (e = Un(e), e == 0) {
          e = 5;
        } else {
          var g = m[Sn + 8 >> 2], g = c + 47 - m[V + 12 >> 2] + g & -g;
          if (g < 2147483647) {
            var h = Vn(g);
            if (h == m[e >> 2] + m[e + 4 >> 2]) {
              var i = h, j = g;
              d = h;
              e = 12;
            } else {
              var k = h, l = g;
              e = 14;
            }
          } else {
            e = 13;
          }
        }
      }
      if (e == 5) {
        if (e = Vn(0), e == -1) {
          e = 13;
        } else {
          var g = m[Sn + 8 >> 2], g = c + (g + 47) & -g, h = e, o = m[Sn + 4 >> 2], p = o - 1, g = (p & h) == 0 ? g : g - h + (p + h & -o);
          g < 2147483647 ? (h = Vn(g), h == e ? (i = e, j = g, d = h, e = 12) : (k = h, l = g, e = 14)) : e = 13;
        }
      }
      if (e == 13) {
        m[V + 440 >> 2] |= 4, e = 22;
      } else {
        if (e == 12) {
          if (i == -1) {
            k = d, l = j;
          } else {
            var n = j, s = i;
            e = 25;
            break;
          }
        }
        e = -l;
        if (k != -1 & l < 2147483647) {
          if (l < c + 48) {
            g = m[Sn + 8 >> 2], g = c + 47 - l + g & -g, g < 2147483647 ? Vn(g) == -1 ? (Vn(e), e = 21) : (q = g + l, e = 20) : (q = l, e = 20);
          } else {
            var q = l;
            e = 20;
          }
        } else {
          q = l, e = 20;
        }
        e == 20 && k != -1 ? (n = q, s = k, e = 25) : (m[V + 440 >> 2] |= 4, e = 22);
      }
    } else {
      e = 22;
    }
  } while (0);
  e == 22 && (f = m[Sn + 8 >> 2], f = c + (f + 47) & -f, f < 2147483647 ? (f = Vn(f), i = Vn(0), i != -1 & f != -1 & f < i ? (i -= f, i <= c + 40 | f == -1 ? e = 48 : (n = i, s = f, e = 25)) : e = 48) : e = 48);
  a : do {
    if (e == 25) {
      f = m[V + 432 >> 2] + n;
      m[V + 432 >> 2] = f;
      f > y[V + 436 >> 2] && (m[V + 436 >> 2] = f);
      f = y[V + 24 >> 2];
      i = f == 0;
      b : do {
        if (i) {
          j = y[V + 16 >> 2];
          j == 0 | s < j && (m[V + 16 >> 2] = s);
          m[V + 444 >> 2] = s;
          m[V + 448 >> 2] = n;
          m[V + 456 >> 2] = 0;
          m[V + 36 >> 2] = m[Sn >> 2];
          m[V + 32 >> 2] = -1;
          for (j = 0; ; ) {
            if (d = j << 1, k = (d << 2) + V + 40, m[V + (d + 3 << 2) + 40 >> 2] = k, m[V + (d + 2 << 2) + 40 >> 2] = k, j += 1, j == 32) {
              break;
            }
          }
          Wn(s, n - 40);
        } else {
          k = V + 444;
          for (d = k >> 2; ; ) {
            if (k == 0) {
              break;
            }
            j = y[d];
            k += 4;
            l = y[k >> 2];
            q = j + l;
            if (s == q) {
              if ((m[d + 3] & 8) != 0) {
                break;
              }
              d = f;
              if (!(d >= j & d < q)) {
                break;
              }
              m[k >> 2] = l + n;
              Wn(m[V + 24 >> 2], m[V + 12 >> 2] + n);
              break b;
            } else {
              k = m[d + 2], d = k >> 2;
            }
          }
          s < y[V + 16 >> 2] && (m[V + 16 >> 2] = s);
          j = s + n;
          for (d = V + 444; ; ) {
            if (d == 0) {
              break;
            }
            k = d;
            l = y[k >> 2];
            if (l == j) {
              if ((m[d + 12 >> 2] & 8) != 0) {
                break;
              }
              m[k >> 2] = s;
              m[d + 4 >> 2] += n;
              var r = Xn(s, l, c);
              e = 49;
              break a;
            } else {
              d = m[d + 8 >> 2];
            }
          }
          Yn(s, n);
        }
      } while (0);
      f = y[V + 12 >> 2];
      f > c ? (r = f - c, m[V + 12 >> 2] = r, i = f = y[V + 24 >> 2], m[V + 24 >> 2] = i + c, m[i + (c + 4) >> 2] = r | 1, m[f + 4 >> 2] = c | 3, r = f + 8, e = 49) : e = 48;
    }
  } while (0);
  e == 48 && (m[Zn >> 2] = 12, r = 0);
  return r;
}

Rn.X = 1;

function Qn(c) {
  var d, e, f, g, h, i = c >> 2, j = -c, k = c >>> 8;
  if (k == 0) {
    var l = 0;
  } else {
    if (c > 16777215) {
      l = 31;
    } else {
      var o = k + 1048320 >>> 16 & 8, p = k << o, n = p + 520192 >>> 16 & 4, s = p << n, q = s + 245760 >>> 16 & 2, r = 14 - (n | o | q) + (s << q >>> 15), l = c >>> r + 7 & 1 | r << 1;
    }
  }
  var t = y[V + (l << 2) + 304 >> 2], u = t == 0;
  a : do {
    if (u) {
      var w = 0, A = j, x = 0;
    } else {
      var v = l == 31 ? 0 : 25 - (l >>> 1), C = 0, I = j, L = t;
      h = L >> 2;
      for (var G = c << v, P = 0; ; ) {
        var N = m[h + 1] & -8, R = N - c;
        if (R < I) {
          if (N == c) {
            w = L;
            A = R;
            x = L;
            break a;
          } else {
            var Y = L, U = R;
          }
        } else {
          Y = C, U = I;
        }
        var aa = y[h + 5], ba = y[((G >>> 31 << 2) + 16 >> 2) + h], Q = aa == 0 | aa == ba ? P : aa;
        if (ba == 0) {
          w = Y;
          A = U;
          x = Q;
          break a;
        }
        C = Y;
        I = U;
        L = ba;
        h = L >> 2;
        G <<= 1;
        P = Q;
      }
    }
  } while (0);
  if (x == 0 & w == 0) {
    var S = 2 << l, W = m[V + 4 >> 2] & (S | -S);
    if (W == 0) {
      var M = x;
    } else {
      var O = (W & -W) - 1, Z = O >>> 12 & 16, X = O >>> Z, T = X >>> 5 & 8, ka = X >>> T, Ha = ka >>> 2 & 4, gb = ka >>> Ha, Va = gb >>> 1 & 2, ya = gb >>> Va, Na = ya >>> 1 & 1, M = m[V + ((T | Z | Ha | Va | Na) + (ya >>> Na) << 2) + 304 >> 2];
    }
  } else {
    M = x;
  }
  var na = M == 0;
  a : do {
    if (na) {
      var fa = A, ha = w;
      g = ha >> 2;
    } else {
      var za = M;
      f = za >> 2;
      for (var Ra = A, wa = w; ; ) {
        var ua = (m[f + 1] & -8) - c, ga = ua < Ra, qa = ga ? ua : Ra, Oa = ga ? za : wa, oa = y[f + 4];
        if (oa != 0) {
          za = oa, f = za >> 2, Ra = qa, wa = Oa;
        } else {
          var da = y[f + 5];
          if (da == 0) {
            fa = qa;
            ha = Oa;
            g = ha >> 2;
            break a;
          } else {
            za = da, f = za >> 2, Ra = qa, wa = Oa;
          }
        }
      }
    }
  } while (0);
  var ca = ha == 0;
  a : do {
    if (ca) {
      var Ea = 0;
    } else {
      if (fa < m[V + 8 >> 2] - c) {
        var la = ha;
        e = la >> 2;
        var xa = y[V + 16 >> 2], Xa = la < xa;
        do {
          if (!Xa) {
            var Ya = la + c, ma = Ya;
            if (la < Ya) {
              var ia = y[g + 6], Pa = y[g + 3], Ia = Pa == ha;
              do {
                if (Ia) {
                  var Ca = ha + 20, Sa = m[Ca >> 2];
                  if (Sa == 0) {
                    var Fa = ha + 16, Ja = m[Fa >> 2];
                    if (Ja == 0) {
                      var ja = 0;
                      d = ja >> 2;
                      break;
                    } else {
                      var Da = Fa, va = Ja;
                    }
                  } else {
                    Da = Ca, va = Sa;
                  }
                  for (;;) {
                    var sa = va + 20, $ = m[sa >> 2];
                    if ($ != 0) {
                      Da = sa, va = $;
                    } else {
                      var Ka = va + 16, ob = y[Ka >> 2];
                      if (ob == 0) {
                        break;
                      } else {
                        Da = Ka, va = ob;
                      }
                    }
                  }
                  Da < xa ? (Pn(), ea("Reached an unreachable!")) : (m[Da >> 2] = 0, ja = va, d = ja >> 2);
                } else {
                  var ib = y[g + 2];
                  ib < xa ? (Pn(), ea("Reached an unreachable!")) : (m[ib + 12 >> 2] = Pa, m[Pa + 8 >> 2] = ib, ja = Pa, d = ja >> 2);
                }
              } while (0);
              var jb = ia == 0;
              b : do {
                if (!jb) {
                  var tb = ha + 28, kb = (m[tb >> 2] << 2) + V + 304, vb = ha == m[kb >> 2];
                  do {
                    if (vb) {
                      if (m[kb >> 2] = ja, ja == 0) {
                        m[V + 4 >> 2] &= 1 << m[tb >> 2] ^ -1;
                        break b;
                      }
                    } else {
                      if (ia < y[V + 16 >> 2]) {
                        Pn(), ea("Reached an unreachable!");
                      } else {
                        var lb = ia + 16;
                        m[lb >> 2] == ha ? m[lb >> 2] = ja : m[ia + 20 >> 2] = ja;
                        if (ja == 0) {
                          break b;
                        }
                      }
                    }
                  } while (0);
                  if (ja < y[V + 16 >> 2]) {
                    Pn(), ea("Reached an unreachable!");
                  } else {
                    m[d + 6] = ia;
                    var mb = y[g + 4];
                    mb != 0 && (mb < y[V + 16 >> 2] ? (Pn(), ea("Reached an unreachable!")) : (m[d + 4] = mb, m[mb + 24 >> 2] = ja));
                    var Ba = y[g + 5];
                    Ba != 0 && (Ba < y[V + 16 >> 2] ? (Pn(), ea("Reached an unreachable!")) : (m[d + 5] = Ba, m[Ba + 24 >> 2] = ja));
                  }
                }
              } while (0);
              var sb = fa < 16;
              b : do {
                if (sb) {
                  var Za = fa + c;
                  m[g + 1] = Za | 3;
                  m[la + (Za + 4) >> 2] |= 1;
                } else {
                  if (m[g + 1] = c | 3, m[e + (i + 1)] = fa | 1, m[(fa >> 2) + e + i] = fa, fa < 256) {
                    var hb = fa >>> 2 & 1073741822, bb = (hb << 2) + V + 40, cb = y[V >> 2], eb = 1 << (fa >>> 3);
                    if ((cb & eb) == 0) {
                      m[V >> 2] = cb | eb;
                      var wb = bb, pb = (hb + 2 << 2) + V + 40;
                    } else {
                      var qb = (hb + 2 << 2) + V + 40, fb = y[qb >> 2];
                      fb < y[V + 16 >> 2] ? (Pn(), ea("Reached an unreachable!")) : (wb = fb, pb = qb);
                    }
                    m[pb >> 2] = ma;
                    m[wb + 12 >> 2] = ma;
                    m[e + (i + 2)] = wb;
                    m[e + (i + 3)] = bb;
                  } else {
                    var La = Ya, Wa = fa >>> 8;
                    if (Wa == 0) {
                      var db = 0;
                    } else {
                      if (fa > 16777215) {
                        db = 31;
                      } else {
                        var ub = Wa + 1048320 >>> 16 & 8, Ta = Wa << ub, Bb = Ta + 520192 >>> 16 & 4, xb = Ta << Bb, nb = xb + 245760 >>> 16 & 2, yb = 14 - (Bb | ub | nb) + (xb << nb >>> 15), db = fa >>> yb + 7 & 1 | yb << 1;
                      }
                    }
                    var Ua = (db << 2) + V + 304;
                    m[e + (i + 7)] = db;
                    var Fb = la + (c + 16);
                    m[e + (i + 5)] = 0;
                    m[Fb >> 2] = 0;
                    var Ma = m[V + 4 >> 2], rb = 1 << db;
                    if ((Ma & rb) == 0) {
                      m[V + 4 >> 2] = Ma | rb, m[Ua >> 2] = La, m[e + (i + 6)] = Ua, m[e + (i + 3)] = La, m[e + (i + 2)] = La;
                    } else {
                      for (var Db = fa << (db == 31 ? 0 : 25 - (db >>> 1)), zb = m[Ua >> 2]; ; ) {
                        if ((m[zb + 4 >> 2] & -8) == fa) {
                          var Eb = zb + 8, Gb = y[Eb >> 2], Cb = y[V + 16 >> 2], Lb = zb < Cb;
                          do {
                            if (!Lb && Gb >= Cb) {
                              m[Gb + 12 >> 2] = La;
                              m[Eb >> 2] = La;
                              m[e + (i + 2)] = Gb;
                              m[e + (i + 3)] = zb;
                              m[e + (i + 6)] = 0;
                              break b;
                            }
                          } while (0);
                          Pn();
                          ea("Reached an unreachable!");
                        } else {
                          var Ab = (Db >>> 31 << 2) + zb + 16, $a = y[Ab >> 2];
                          if ($a == 0) {
                            if (Ab < y[V + 16 >> 2]) {
                              Pn(), ea("Reached an unreachable!");
                            } else {
                              m[Ab >> 2] = La;
                              m[e + (i + 6)] = zb;
                              m[e + (i + 3)] = La;
                              m[e + (i + 2)] = La;
                              break b;
                            }
                          } else {
                            Db <<= 1, zb = $a;
                          }
                        }
                      }
                    }
                  }
                }
              } while (0);
              Ea = ha + 8;
              break a;
            }
          }
        } while (0);
        Pn();
        ea("Reached an unreachable!");
      } else {
        Ea = 0;
      }
    }
  } while (0);
  return Ea;
}

Qn.X = 1;

function $n() {
  var c;
  m[Sn >> 2] == 0 && Tn();
  var d = y[V + 24 >> 2], e = d == 0;
  a : do {
    if (!e) {
      var f = y[V + 12 >> 2], g = f > 40;
      do {
        if (g) {
          var h = y[Sn + 8 >> 2], i = (Math.floor((f - 41 + h) / h) - 1) * h, j = Un(d);
          if ((m[j + 12 >> 2] & 8) == 0) {
            var k = Vn(0);
            c = j + 4 >> 2;
            if (k == m[j >> 2] + m[c] && (i = Vn(-(i > 2147483646 ? -2147483648 - h : i)), h = Vn(0), i != -1 & h < k && (i = k - h, k != h))) {
              m[c] -= i;
              m[V + 432 >> 2] -= i;
              Wn(m[V + 24 >> 2], m[V + 12 >> 2] - i);
              break a;
            }
          }
        }
      } while (0);
      y[V + 12 >> 2] > y[V + 28 >> 2] && (m[V + 28 >> 2] = -1);
    }
  } while (0);
}

$n.X = 1;

function Pf(c) {
  var d, e, f, g, h, i, j = c >> 2, k, l = c == 0;
  a : do {
    if (!l) {
      var o = c - 8, p = o, n = y[V + 16 >> 2], s = o < n;
      b : do {
        if (!s) {
          var q = y[c - 4 >> 2], r = q & 3;
          if (r != 1) {
            var t = q & -8;
            i = t >> 2;
            var u = c + (t - 8), w = u, A = (q & 1) == 0;
            c : do {
              if (A) {
                var x = y[o >> 2];
                if (r == 0) {
                  break a;
                }
                var v = -8 - x;
                h = v >> 2;
                var C = c + v, I = C, L = x + t;
                if (C < n) {
                  break b;
                }
                if (I == m[V + 20 >> 2]) {
                  if (g = c + (t - 4) >> 2, (m[g] & 3) != 3) {
                    var G = I;
                    f = G >> 2;
                    var P = L;
                  } else {
                    m[V + 8 >> 2] = L;
                    m[g] &= -2;
                    m[j + (h + 1)] = L | 1;
                    m[u >> 2] = L;
                    break a;
                  }
                } else {
                  if (x < 256) {
                    var N = y[j + (h + 2)], R = y[j + (h + 3)];
                    if (N == R) {
                      m[V >> 2] &= 1 << (x >>> 3) ^ -1, G = I, f = G >> 2, P = L;
                    } else {
                      var Y = ((x >>> 2 & 1073741822) << 2) + V + 40, U = N != Y & N < n;
                      do {
                        if (!U && R == Y | R >= n) {
                          m[N + 12 >> 2] = R;
                          m[R + 8 >> 2] = N;
                          G = I;
                          f = G >> 2;
                          P = L;
                          break c;
                        }
                      } while (0);
                      Pn();
                      ea("Reached an unreachable!");
                    }
                  } else {
                    var aa = C, ba = y[j + (h + 6)], Q = y[j + (h + 3)], S = Q == aa;
                    do {
                      if (S) {
                        var W = c + (v + 20), M = m[W >> 2];
                        if (M == 0) {
                          var O = c + (v + 16), Z = m[O >> 2];
                          if (Z == 0) {
                            var X = 0;
                            e = X >> 2;
                            break;
                          } else {
                            var T = O, ka = Z;
                          }
                        } else {
                          T = W, ka = M, k = 20;
                        }
                        for (;;) {
                          var Ha = ka + 20, gb = m[Ha >> 2];
                          if (gb != 0) {
                            T = Ha, ka = gb;
                          } else {
                            var Va = ka + 16, ya = y[Va >> 2];
                            if (ya == 0) {
                              break;
                            } else {
                              T = Va, ka = ya;
                            }
                          }
                        }
                        T < n ? (Pn(), ea("Reached an unreachable!")) : (m[T >> 2] = 0, X = ka, e = X >> 2);
                      } else {
                        var Na = y[j + (h + 2)];
                        Na < n ? (Pn(), ea("Reached an unreachable!")) : (m[Na + 12 >> 2] = Q, m[Q + 8 >> 2] = Na, X = Q, e = X >> 2);
                      }
                    } while (0);
                    if (ba == 0) {
                      G = I, f = G >> 2, P = L;
                    } else {
                      var na = c + (v + 28), fa = (m[na >> 2] << 2) + V + 304, ha = aa == m[fa >> 2];
                      do {
                        if (ha) {
                          if (m[fa >> 2] = X, X == 0) {
                            m[V + 4 >> 2] &= 1 << m[na >> 2] ^ -1;
                            G = I;
                            f = G >> 2;
                            P = L;
                            break c;
                          }
                        } else {
                          if (ba < y[V + 16 >> 2]) {
                            Pn(), ea("Reached an unreachable!");
                          } else {
                            var za = ba + 16;
                            m[za >> 2] == aa ? m[za >> 2] = X : m[ba + 20 >> 2] = X;
                            if (X == 0) {
                              G = I;
                              f = G >> 2;
                              P = L;
                              break c;
                            }
                          }
                        }
                      } while (0);
                      if (X < y[V + 16 >> 2]) {
                        Pn(), ea("Reached an unreachable!");
                      } else {
                        m[e + 6] = ba;
                        var Ra = y[j + (h + 4)];
                        Ra != 0 && (Ra < y[V + 16 >> 2] ? (Pn(), ea("Reached an unreachable!")) : (m[e + 4] = Ra, m[Ra + 24 >> 2] = X));
                        var wa = y[j + (h + 5)];
                        wa == 0 ? (G = I, f = G >> 2, P = L) : wa < y[V + 16 >> 2] ? (Pn(), ea("Reached an unreachable!")) : (m[e + 5] = wa, m[wa + 24 >> 2] = X, G = I, f = G >> 2, P = L);
                      }
                    }
                  }
                }
              } else {
                G = p, f = G >> 2, P = t;
              }
            } while (0);
            var ua = G;
            if (ua < u) {
              var ga = c + (t - 4), qa = y[ga >> 2];
              if ((qa & 1) != 0) {
                var Oa = (qa & 2) == 0;
                do {
                  if (Oa) {
                    if (w == m[V + 24 >> 2]) {
                      var oa = m[V + 12 >> 2] + P;
                      m[V + 12 >> 2] = oa;
                      m[V + 24 >> 2] = G;
                      m[f + 1] = oa | 1;
                      G == m[V + 20 >> 2] && (m[V + 20 >> 2] = 0, m[V + 8 >> 2] = 0);
                      if (oa <= y[V + 28 >> 2]) {
                        break a;
                      }
                      $n();
                    } else {
                      if (w == m[V + 20 >> 2]) {
                        var da = m[V + 8 >> 2] + P;
                        m[V + 8 >> 2] = da;
                        m[V + 20 >> 2] = G;
                        m[f + 1] = da | 1;
                        m[ua + da >> 2] = da;
                      } else {
                        var ca = (qa & -8) + P, Ea = qa >>> 3, la = qa < 256;
                        c : do {
                          if (la) {
                            var xa = y[j + i], Xa = y[((t | 4) >> 2) + j];
                            if (xa == Xa) {
                              m[V >> 2] &= 1 << Ea ^ -1;
                            } else {
                              var Ya = ((qa >>> 2 & 1073741822) << 2) + V + 40;
                              k = xa == Ya ? 62 : xa < y[V + 16 >> 2] ? 65 : 62;
                              do {
                                if (k == 62 && !(Xa != Ya && Xa < y[V + 16 >> 2])) {
                                  m[xa + 12 >> 2] = Xa;
                                  m[Xa + 8 >> 2] = xa;
                                  break c;
                                }
                              } while (0);
                              Pn();
                              ea("Reached an unreachable!");
                            }
                          } else {
                            var ma = u, ia = y[j + (i + 4)], Pa = y[((t | 4) >> 2) + j], Ia = Pa == ma;
                            do {
                              if (Ia) {
                                var Ca = c + (t + 12), Sa = m[Ca >> 2];
                                if (Sa == 0) {
                                  var Fa = c + (t + 8), Ja = m[Fa >> 2];
                                  if (Ja == 0) {
                                    var ja = 0;
                                    d = ja >> 2;
                                    break;
                                  } else {
                                    var Da = Fa, va = Ja;
                                  }
                                } else {
                                  Da = Ca, va = Sa, k = 72;
                                }
                                for (;;) {
                                  var sa = va + 20, $ = m[sa >> 2];
                                  if ($ != 0) {
                                    Da = sa, va = $;
                                  } else {
                                    var Ka = va + 16, ob = y[Ka >> 2];
                                    if (ob == 0) {
                                      break;
                                    } else {
                                      Da = Ka, va = ob;
                                    }
                                  }
                                }
                                Da < y[V + 16 >> 2] ? (Pn(), ea("Reached an unreachable!")) : (m[Da >> 2] = 0, ja = va, d = ja >> 2);
                              } else {
                                var ib = y[j + i];
                                ib < y[V + 16 >> 2] ? (Pn(), ea("Reached an unreachable!")) : (m[ib + 12 >> 2] = Pa, m[Pa + 8 >> 2] = ib, ja = Pa, d = ja >> 2);
                              }
                            } while (0);
                            if (ia != 0) {
                              var jb = c + (t + 20), tb = (m[jb >> 2] << 2) + V + 304, kb = ma == m[tb >> 2];
                              do {
                                if (kb) {
                                  if (m[tb >> 2] = ja, ja == 0) {
                                    m[V + 4 >> 2] &= 1 << m[jb >> 2] ^ -1;
                                    break c;
                                  }
                                } else {
                                  if (ia < y[V + 16 >> 2]) {
                                    Pn(), ea("Reached an unreachable!");
                                  } else {
                                    var vb = ia + 16;
                                    m[vb >> 2] == ma ? m[vb >> 2] = ja : m[ia + 20 >> 2] = ja;
                                    if (ja == 0) {
                                      break c;
                                    }
                                  }
                                }
                              } while (0);
                              if (ja < y[V + 16 >> 2]) {
                                Pn(), ea("Reached an unreachable!");
                              } else {
                                m[d + 6] = ia;
                                var lb = y[j + (i + 2)];
                                lb != 0 && (lb < y[V + 16 >> 2] ? (Pn(), ea("Reached an unreachable!")) : (m[d + 4] = lb, m[lb + 24 >> 2] = ja));
                                var mb = y[j + (i + 3)];
                                mb != 0 && (mb < y[V + 16 >> 2] ? (Pn(), ea("Reached an unreachable!")) : (m[d + 5] = mb, m[mb + 24 >> 2] = ja));
                              }
                            }
                          }
                        } while (0);
                        m[f + 1] = ca | 1;
                        m[ua + ca >> 2] = ca;
                        if (G != m[V + 20 >> 2]) {
                          var Ba = ca;
                          break;
                        }
                        m[V + 8 >> 2] = ca;
                      }
                    }
                    break a;
                  } else {
                    m[ga >> 2] = qa & -2, m[f + 1] = P | 1, Ba = m[ua + P >> 2] = P;
                  }
                } while (0);
                if (Ba < 256) {
                  var sb = Ba >>> 2 & 1073741822, Za = (sb << 2) + V + 40, hb = y[V >> 2], bb = 1 << (Ba >>> 3);
                  if ((hb & bb) == 0) {
                    m[V >> 2] = hb | bb;
                    var cb = Za, eb = (sb + 2 << 2) + V + 40;
                  } else {
                    var wb = (sb + 2 << 2) + V + 40, pb = y[wb >> 2];
                    pb < y[V + 16 >> 2] ? (Pn(), ea("Reached an unreachable!")) : (cb = pb, eb = wb);
                  }
                  m[eb >> 2] = G;
                  m[cb + 12 >> 2] = G;
                  m[f + 2] = cb;
                  m[f + 3] = Za;
                } else {
                  var qb = G, fb = Ba >>> 8;
                  if (fb == 0) {
                    var La = 0;
                  } else {
                    if (Ba > 16777215) {
                      La = 31;
                    } else {
                      var Wa = fb + 1048320 >>> 16 & 8, db = fb << Wa, ub = db + 520192 >>> 16 & 4, Ta = db << ub, Bb = Ta + 245760 >>> 16 & 2, xb = 14 - (ub | Wa | Bb) + (Ta << Bb >>> 15), La = Ba >>> xb + 7 & 1 | xb << 1;
                    }
                  }
                  var nb = (La << 2) + V + 304;
                  m[f + 7] = La;
                  m[f + 5] = 0;
                  m[f + 4] = 0;
                  var yb = m[V + 4 >> 2], Ua = 1 << La, Fb = (yb & Ua) == 0;
                  c : do {
                    if (Fb) {
                      m[V + 4 >> 2] = yb | Ua, m[nb >> 2] = qb, m[f + 6] = nb, m[f + 3] = G, m[f + 2] = G;
                    } else {
                      for (var Ma = Ba << (La == 31 ? 0 : 25 - (La >>> 1)), rb = m[nb >> 2]; ; ) {
                        if ((m[rb + 4 >> 2] & -8) == Ba) {
                          var Db = rb + 8, zb = y[Db >> 2], Eb = y[V + 16 >> 2], Gb = rb < Eb;
                          do {
                            if (!Gb && zb >= Eb) {
                              m[zb + 12 >> 2] = qb;
                              m[Db >> 2] = qb;
                              m[f + 2] = zb;
                              m[f + 3] = rb;
                              m[f + 6] = 0;
                              break c;
                            }
                          } while (0);
                          Pn();
                          ea("Reached an unreachable!");
                        } else {
                          var Cb = (Ma >>> 31 << 2) + rb + 16, Lb = y[Cb >> 2];
                          if (Lb == 0) {
                            if (Cb < y[V + 16 >> 2]) {
                              Pn(), ea("Reached an unreachable!");
                            } else {
                              m[Cb >> 2] = qb;
                              m[f + 6] = rb;
                              m[f + 3] = G;
                              m[f + 2] = G;
                              break c;
                            }
                          } else {
                            Ma <<= 1, rb = Lb;
                          }
                        }
                      }
                    }
                  } while (0);
                  var Ab = m[V + 32 >> 2] - 1;
                  m[V + 32 >> 2] = Ab;
                  if (Ab != 0) {
                    break a;
                  }
                  var $a = m[V + 452 >> 2], Sb = $a == 0;
                  c : do {
                    if (!Sb) {
                      for (var Ob = $a; ; ) {
                        var Tb = m[Ob + 8 >> 2];
                        if (Tb == 0) {
                          break c;
                        } else {
                          Ob = Tb;
                        }
                      }
                    }
                  } while (0);
                  m[V + 32 >> 2] = -1;
                }
                break a;
              }
            }
          }
        }
      } while (0);
      Pn();
      ea("Reached an unreachable!");
    }
  } while (0);
}

Pf.X = 1;

function Un(c) {
  var d, e = V + 444;
  for (d = e >> 2; ; ) {
    var f = y[d];
    if (f <= c && f + m[d + 1] > c) {
      var g = e;
      break;
    }
    d = y[d + 2];
    if (d == 0) {
      g = 0;
      break;
    } else {
      e = d, d = e >> 2;
    }
  }
  return g;
}

function Wn(c, d) {
  var e = c + 8, e = (e & 7) == 0 ? 0 : -e & 7, f = d - e;
  m[V + 24 >> 2] = c + e;
  m[V + 12 >> 2] = f;
  m[c + (e + 4) >> 2] = f | 1;
  m[c + (d + 4) >> 2] = 40;
  m[V + 28 >> 2] = m[Sn + 16 >> 2];
}

function Tn() {
  if (m[Sn >> 2] == 0) {
    var c = ao();
    (c - 1 & c) == 0 ? (m[Sn + 8 >> 2] = c, m[Sn + 4 >> 2] = c, m[Sn + 12 >> 2] = -1, m[Sn + 16 >> 2] = 2097152, m[Sn + 20 >> 2] = 0, m[V + 440 >> 2] = 0, m[Sn >> 2] = Math.floor(Date.now() / 1e3) & -16 ^ 1431655768) : (Pn(), ea("Reached an unreachable!"));
  }
}

function Xn(c, d, e) {
  var f, g, h, i = d >> 2, j = c >> 2, k, l = c + 8, l = (l & 7) == 0 ? 0 : -l & 7;
  g = d + 8;
  var o = (g & 7) == 0 ? 0 : -g & 7;
  h = o >> 2;
  var p = d + o, n = l + e;
  g = n >> 2;
  var s = c + n, q = p - (c + l) - e;
  m[(l + 4 >> 2) + j] = e | 3;
  e = p == m[V + 24 >> 2];
  a : do {
    if (e) {
      var r = m[V + 12 >> 2] + q;
      m[V + 12 >> 2] = r;
      m[V + 24 >> 2] = s;
      m[j + (g + 1)] = r | 1;
    } else {
      if (p == m[V + 20 >> 2]) {
        r = m[V + 8 >> 2] + q, m[V + 8 >> 2] = r, m[V + 20 >> 2] = s, m[j + (g + 1)] = r | 1, m[c + r + n >> 2] = r;
      } else {
        var t = y[i + (h + 1)];
        if ((t & 3) == 1) {
          var r = t & -8, u = t >>> 3, w = t < 256;
          b : do {
            if (w) {
              var A = y[((o | 8) >> 2) + i], x = y[i + (h + 3)];
              if (A == x) {
                m[V >> 2] &= 1 << u ^ -1;
              } else {
                var v = ((t >>> 2 & 1073741822) << 2) + V + 40;
                k = A == v ? 14 : A < y[V + 16 >> 2] ? 17 : 14;
                do {
                  if (k == 14 && !(x != v && x < y[V + 16 >> 2])) {
                    m[A + 12 >> 2] = x;
                    m[x + 8 >> 2] = A;
                    break b;
                  }
                } while (0);
                Pn();
                ea("Reached an unreachable!");
              }
            } else {
              k = p;
              A = y[((o | 24) >> 2) + i];
              x = y[i + (h + 3)];
              v = x == k;
              do {
                if (v) {
                  var C = o | 16, I = d + (C + 4), L = m[I >> 2];
                  if (L == 0) {
                    if (C = d + C, L = m[C >> 2], L == 0) {
                      var G = 0;
                      f = G >> 2;
                      break;
                    }
                  } else {
                    C = I;
                  }
                  for (;;) {
                    var I = L + 20, P = m[I >> 2];
                    if (P != 0) {
                      C = I, L = P;
                    } else {
                      if (I = L + 16, P = y[I >> 2], P == 0) {
                        break;
                      } else {
                        C = I, L = P;
                      }
                    }
                  }
                  C < y[V + 16 >> 2] ? (Pn(), ea("Reached an unreachable!")) : (m[C >> 2] = 0, G = L, f = G >> 2);
                } else {
                  C = y[((o | 8) >> 2) + i], C < y[V + 16 >> 2] ? (Pn(), ea("Reached an unreachable!")) : (m[C + 12 >> 2] = x, m[x + 8 >> 2] = C, G = x, f = G >> 2);
                }
              } while (0);
              if (A != 0) {
                x = d + (o + 28);
                v = (m[x >> 2] << 2) + V + 304;
                C = k == m[v >> 2];
                do {
                  if (C) {
                    if (m[v >> 2] = G, G == 0) {
                      m[V + 4 >> 2] &= 1 << m[x >> 2] ^ -1;
                      break b;
                    }
                  } else {
                    if (A < y[V + 16 >> 2]) {
                      Pn(), ea("Reached an unreachable!");
                    } else {
                      if (L = A + 16, m[L >> 2] == k ? m[L >> 2] = G : m[A + 20 >> 2] = G, G == 0) {
                        break b;
                      }
                    }
                  }
                } while (0);
                G < y[V + 16 >> 2] ? (Pn(), ea("Reached an unreachable!")) : (m[f + 6] = A, k = o | 16, A = y[(k >> 2) + i], A != 0 && (A < y[V + 16 >> 2] ? (Pn(), ea("Reached an unreachable!")) : (m[f + 4] = A, m[A + 24 >> 2] = G)), k = y[(k + 4 >> 2) + i], k != 0 && (k < y[V + 16 >> 2] ? (Pn(), ea("Reached an unreachable!")) : (m[f + 5] = k, m[k + 24 >> 2] = G)));
              }
            }
          } while (0);
          t = d + (r | o);
          r += q;
        } else {
          t = p, r = q;
        }
        m[t + 4 >> 2] &= -2;
        m[j + (g + 1)] = r | 1;
        m[(r >> 2) + j + g] = r;
        if (r < 256) {
          u = r >>> 2 & 1073741822;
          t = (u << 2) + V + 40;
          w = y[V >> 2];
          r = 1 << (r >>> 3);
          if ((w & r) == 0) {
            m[V >> 2] = w | r;
            var N = t, R = (u + 2 << 2) + V + 40;
          } else {
            r = (u + 2 << 2) + V + 40, u = y[r >> 2], u < y[V + 16 >> 2] ? (Pn(), ea("Reached an unreachable!")) : (N = u, R = r);
          }
          m[R >> 2] = s;
          m[N + 12 >> 2] = s;
          m[j + (g + 2)] = N;
          m[j + (g + 3)] = t;
        } else {
          if (t = s, w = r >>> 8, w == 0 ? u = 0 : r > 16777215 ? u = 31 : (u = w + 1048320 >>> 16 & 8, k = w << u, w = k + 520192 >>> 16 & 4, k <<= w, A = k + 245760 >>> 16 & 2, u = 14 - (w | u | A) + (k << A >>> 15), u = r >>> u + 7 & 1 | u << 1), w = (u << 2) + V + 304, m[j + (g + 7)] = u, k = c + (n + 16), m[j + (g + 5)] = 0, m[k >> 2] = 0, k = m[V + 4 >> 2], A = 1 << u, (k & A) == 0) {
            m[V + 4 >> 2] = k | A, m[w >> 2] = t, m[j + (g + 6)] = w, m[j + (g + 3)] = t, m[j + (g + 2)] = t;
          } else {
            u = r << (u == 31 ? 0 : 25 - (u >>> 1));
            for (w = m[w >> 2]; ; ) {
              if ((m[w + 4 >> 2] & -8) == r) {
                k = w + 8;
                A = y[k >> 2];
                x = y[V + 16 >> 2];
                v = w < x;
                do {
                  if (!v && A >= x) {
                    m[A + 12 >> 2] = t;
                    m[k >> 2] = t;
                    m[j + (g + 2)] = A;
                    m[j + (g + 3)] = w;
                    m[j + (g + 6)] = 0;
                    break a;
                  }
                } while (0);
                Pn();
                ea("Reached an unreachable!");
              } else {
                if (k = (u >>> 31 << 2) + w + 16, A = y[k >> 2], A == 0) {
                  if (k < y[V + 16 >> 2]) {
                    Pn(), ea("Reached an unreachable!");
                  } else {
                    m[k >> 2] = t;
                    m[j + (g + 6)] = w;
                    m[j + (g + 3)] = t;
                    m[j + (g + 2)] = t;
                    break a;
                  }
                } else {
                  u <<= 1, w = A;
                }
              }
            }
          }
        }
      }
    }
  } while (0);
  return c + (l | 8);
}

Xn.X = 1;

function Yn(c, d) {
  var e, f, g = y[V + 24 >> 2];
  f = g >> 2;
  var h = Un(g), i = m[h >> 2];
  e = m[h + 4 >> 2];
  var h = i + e, j = i + (e - 39), i = i + (e - 47) + ((j & 7) == 0 ? 0 : -j & 7), i = i < g + 16 ? g : i, j = i + 8;
  e = j >> 2;
  Wn(c, d - 40);
  m[i + 4 >> 2] = 27;
  m[e] = m[V + 444 >> 2];
  m[e + 1] = m[V + 448 >> 2];
  m[e + 2] = m[V + 452 >> 2];
  m[e + 3] = m[V + 456 >> 2];
  m[V + 444 >> 2] = c;
  m[V + 448 >> 2] = d;
  m[V + 456 >> 2] = 0;
  m[V + 452 >> 2] = j;
  e = i + 28;
  m[e >> 2] = 7;
  j = i + 32 < h;
  a : do {
    if (j) {
      for (var k = e; ; ) {
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
      if (e = i - g, j = g + e, m[g + (e + 4) >> 2] &= -2, m[f + 1] = e | 1, m[j >> 2] = e, e < 256) {
        k = e >>> 2 & 1073741822;
        j = (k << 2) + V + 40;
        l = y[V >> 2];
        e = 1 << (e >>> 3);
        if ((l & e) == 0) {
          m[V >> 2] = l | e;
          var o = j, p = (k + 2 << 2) + V + 40;
        } else {
          e = (k + 2 << 2) + V + 40, k = y[e >> 2], k < y[V + 16 >> 2] ? (Pn(), ea("Reached an unreachable!")) : (o = k, p = e);
        }
        m[p >> 2] = g;
        m[o + 12 >> 2] = g;
        m[f + 2] = o;
        m[f + 3] = j;
      } else {
        j = g;
        l = e >>> 8;
        if (l == 0) {
          k = 0;
        } else {
          if (e > 16777215) {
            k = 31;
          } else {
            var k = l + 1048320 >>> 16 & 8, n = l << k, l = n + 520192 >>> 16 & 4;
            n <<= l;
            var s = n + 245760 >>> 16 & 2, k = 14 - (l | k | s) + (n << s >>> 15), k = e >>> k + 7 & 1 | k << 1;
          }
        }
        l = (k << 2) + V + 304;
        m[f + 7] = k;
        m[f + 5] = 0;
        m[f + 4] = 0;
        n = m[V + 4 >> 2];
        s = 1 << k;
        if ((n & s) == 0) {
          m[V + 4 >> 2] = n | s, m[l >> 2] = j, m[f + 6] = l, m[f + 3] = g, m[f + 2] = g;
        } else {
          k = e << (k == 31 ? 0 : 25 - (k >>> 1));
          for (l = m[l >> 2]; ; ) {
            if ((m[l + 4 >> 2] & -8) == e) {
              var n = l + 8, s = y[n >> 2], q = y[V + 16 >> 2], r = l < q;
              do {
                if (!r && s >= q) {
                  m[s + 12 >> 2] = j;
                  m[n >> 2] = j;
                  m[f + 2] = s;
                  m[f + 3] = l;
                  m[f + 6] = 0;
                  break a;
                }
              } while (0);
              Pn();
              ea("Reached an unreachable!");
            } else {
              if (n = (k >>> 31 << 2) + l + 16, s = y[n >> 2], s == 0) {
                if (n < y[V + 16 >> 2]) {
                  Pn(), ea("Reached an unreachable!");
                } else {
                  m[n >> 2] = j;
                  m[f + 6] = l;
                  m[f + 3] = g;
                  m[f + 2] = g;
                  break a;
                }
              } else {
                k <<= 1, l = s;
              }
            }
          }
        }
      }
    }
  } while (0);
}

Yn.X = 1;

function bo(c) {
  c != 0 && Pf(c);
}

function Mf(c, d, e) {
  if (e >= 20 && d % 2 == c % 2) {
    if (d % 4 == c % 4) {
      for (e = d + e; d % 4; ) {
        b[c++] = b[d++];
      }
      d >>= 2;
      c >>= 2;
      for (var f = e >> 2; d < f; ) {
        m[c++] = m[d++];
      }
      d <<= 2;
      for (c <<= 2; d < e; ) {
        b[c++] = b[d++];
      }
    } else {
      e = d + e;
      d % 2 && (b[c++] = b[d++]);
      d >>= 1;
      c >>= 1;
      for (f = e >> 1; d < f; ) {
        hd[c++] = hd[d++];
      }
      d <<= 1;
      c <<= 1;
      d < e && (b[c++] = b[d++]);
    }
  } else {
    for (; e--; ) {
      b[c++] = b[d++];
    }
  }
}

function cg() {
  co === pa && (co = Date.now());
  return Math.floor((Date.now() - co) * 1);
}

var co, eo = 13, fo = 9, go = 22, ho = 5, io = 21, jo = 6;

function ko(c) {
  Zn || (Zn = D([ 0 ], "i32", B));
  m[Zn >> 2] = c;
}

var Zn, lo = 0, eg = 0, mo = 0, no = 2, hg = [ ra ], oo = !0;

function po(c, d) {
  if (typeof c !== "string") {
    return ra;
  }
  d === pa && (d = "/");
  c && c[0] == "/" && (d = "");
  for (var e = (d + "/" + c).split("/").reverse(), f = [ "" ]; e.length; ) {
    var g = e.pop();
    g == "" || g == "." || (g == ".." ? f.length > 1 && f.pop() : f.push(g));
  }
  return f.length == 1 ? "/" : f.join("/");
}

function qo(c, d, e) {
  var f = {
    Nc: !1,
    D: !1,
    error: 0,
    name: ra,
    path: ra,
    object: ra,
    Ea: !1,
    Ga: ra,
    Fa: ra
  }, c = po(c);
  if (c == "/") {
    f.Nc = !0, f.D = f.Ea = !0, f.name = "/", f.path = f.Ga = "/", f.object = f.Fa = ro;
  } else {
    if (c !== ra) {
      for (var e = e || 0, c = c.slice(1).split("/"), g = ro, h = [ "" ]; c.length; ) {
        if (c.length == 1 && g.k) {
          f.Ea = !0, f.Ga = h.length == 1 ? "/" : h.join("/"), f.Fa = g, f.name = c[0];
        }
        var i = c.shift();
        if (g.k) {
          if (g.Ia) {
            if (!g.d.hasOwnProperty(i)) {
              f.error = 2;
              break;
            }
          } else {
            f.error = eo;
            break;
          }
        } else {
          f.error = 20;
          break;
        }
        g = g.d[i];
        if (g.link && !(d && c.length == 0)) {
          if (e > 40) {
            f.error = 40;
            break;
          }
          f = po(g.link, h.join("/"));
          return qo([ f ].concat(c).join("/"), d, e + 1);
        }
        h.push(i);
        if (c.length == 0) {
          f.D = !0, f.path = h.join("/"), f.object = g;
        }
      }
    }
  }
  return f;
}

function so(c) {
  to();
  c = qo(c, pa);
  return c.D ? c.object : (ko(c.error), ra);
}

function uo(c, d, e, f, g) {
  c || (c = "/");
  typeof c === "string" && (c = so(c));
  c || (ko(eo), ea(Error("Parent path must exist.")));
  c.k || (ko(20), ea(Error("Parent must be a folder.")));
  !c.write && !oo && (ko(eo), ea(Error("Parent folder must be writeable.")));
  if (!d || d == "." || d == "..") {
    ko(2), ea(Error("Name must not be empty."));
  }
  c.d.hasOwnProperty(d) && (ko(17), ea(Error("Can't overwrite object.")));
  c.d[d] = {
    Ia: f === pa ? !0 : f,
    write: g === pa ? !1 : g,
    timestamp: Date.now(),
    Mc: no++
  };
  for (var h in e) {
    e.hasOwnProperty(h) && (c.d[d][h] = e[h]);
  }
  return c.d[d];
}

function vo(c, d) {
  return uo(c, d, {
    k: !0,
    q: !1,
    d: {}
  }, !0, !0);
}

function wo() {
  var c = "dev/shm/tmp", d = so("/");
  d === ra && ea(Error("Invalid parent."));
  for (c = c.split("/").reverse(); c.length; ) {
    var e = c.pop();
    e && (d.d.hasOwnProperty(e) || vo(d, e), d = d.d[e]);
  }
}

function xo(c, d, e, f) {
  !e && !f && ea(Error("A device must have at least one callback defined."));
  var g = {
    q: !0,
    input: e,
    l: f,
    k: !1
  };
  return uo(c, d, g, Boolean(e), Boolean(f));
}

function to() {
  ro || (ro = {
    Ia: !0,
    write: !0,
    k: !0,
    q: !1,
    timestamp: Date.now(),
    Mc: 1,
    d: {}
  });
}

function yo() {
  var c, d, e;
  mc(!zo, "FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)");
  zo = !0;
  to();
  c || (c = (function() {
    if (!c.C || !c.C.length) {
      var d;
      typeof window != "undefined" && typeof window.prompt == "function" ? d = window.prompt("Input: ") : typeof readline == "function" && (d = readline());
      d || (d = "");
      c.C = Wd(d + "\n", !0);
    }
    return c.C.shift();
  }));
  d || (d = (function(c) {
    c === ra || c === "\n".charCodeAt(0) ? (d.Ha(d.buffer.join("")), d.buffer = []) : d.buffer.push(String.fromCharCode(c));
  }));
  if (!d.Ha) {
    d.Ha = print;
  }
  if (!d.buffer) {
    d.buffer = [];
  }
  e || (e = d);
  vo("/", "tmp");
  var f = vo("/", "dev"), g = xo(f, "stdin", c), h = xo(f, "stdout", ra, d);
  e = xo(f, "stderr", ra, e);
  xo(f, "tty", c, d);
  hg[1] = {
    path: "/dev/stdin",
    object: g,
    position: 0,
    Da: !0,
    r: !1,
    Ca: !1,
    error: !1,
    Aa: !1,
    Ja: []
  };
  hg[2] = {
    path: "/dev/stdout",
    object: h,
    position: 0,
    Da: !1,
    r: !0,
    Ca: !1,
    error: !1,
    Aa: !1,
    Ja: []
  };
  hg[3] = {
    path: "/dev/stderr",
    object: e,
    position: 0,
    Da: !1,
    r: !0,
    Ca: !1,
    error: !1,
    Aa: !1,
    Ja: []
  };
  lo = D([ 1 ], "void*", B);
  eg = D([ 2 ], "void*", B);
  mo = D([ 3 ], "void*", B);
  wo();
  hg[lo] = hg[1];
  hg[eg] = hg[2];
  hg[mo] = hg[3];
  D([ D([ 0, 0, 0, 0, lo, 0, 0, 0, eg, 0, 0, 0, mo, 0, 0, 0 ], "void*", B) ], "void*", B);
}

var zo, ro;

function gg(c, d, e) {
  var f = hg[c];
  if (f) {
    if (f.r) {
      if (e < 0) {
        return ko(go), -1;
      } else {
        if (f.object.q) {
          if (f.object.l) {
            for (var g = 0; g < e; g++) {
              try {
                f.object.l(b[d + g]);
              } catch (h) {
                return ko(ho), -1;
              }
            }
            f.object.timestamp = Date.now();
            return g;
          } else {
            return ko(jo), -1;
          }
        } else {
          g = f.position;
          c = hg[c];
          if (!c || c.object.q) {
            ko(fo), d = -1;
          } else {
            if (c.r) {
              if (c.object.k) {
                ko(io), d = -1;
              } else {
                if (e < 0 || g < 0) {
                  ko(go), d = -1;
                } else {
                  for (var i = c.object.d; i.length < g; ) {
                    i.push(0);
                  }
                  for (var j = 0; j < e; j++) {
                    i[g + j] = id[d + j];
                  }
                  c.object.timestamp = Date.now();
                  d = j;
                }
              }
            } else {
              ko(eo), d = -1;
            }
          }
          d != -1 && (f.position += d);
          return d;
        }
      }
    } else {
      return ko(eo), -1;
    }
  } else {
    return ko(fo), -1;
  }
}

function Ao(c) {
  function d(d) {
    var e;
    d === "double" ? e = z[c + f >> 2] : d == "i64" ? e = [ m[c + f >> 2], m[c + f + 4 >> 2] ] : (d = "i32", e = m[c + f >> 2]);
    f += Math.max(ic(d), lc);
    return e;
  }
  for (var e = H.Ab, f = 0, g = [], h, i; ; ) {
    var j = e;
    h = b[e];
    if (h === 0) {
      break;
    }
    i = b[e + 1];
    if (h == "%".charCodeAt(0)) {
      var k = !1, l = !1, o = !1, p = !1;
      a : for (;;) {
        switch (i) {
         case "+".charCodeAt(0):
          k = !0;
          break;
         case "-".charCodeAt(0):
          l = !0;
          break;
         case "#".charCodeAt(0):
          o = !0;
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
        i = b[e + 1];
      }
      var n = 0;
      if (i == "*".charCodeAt(0)) {
        n = d("i32"), e++, i = b[e + 1];
      } else {
        for (; i >= "0".charCodeAt(0) && i <= "9".charCodeAt(0); ) {
          n = n * 10 + (i - "0".charCodeAt(0)), e++, i = b[e + 1];
        }
      }
      var s = !1;
      if (i == ".".charCodeAt(0)) {
        var q = 0, s = !0;
        e++;
        i = b[e + 1];
        if (i == "*".charCodeAt(0)) {
          q = d("i32"), e++;
        } else {
          for (;;) {
            i = b[e + 1];
            if (i < "0".charCodeAt(0) || i > "9".charCodeAt(0)) {
              break;
            }
            q = q * 10 + (i - "0".charCodeAt(0));
            e++;
          }
        }
        i = b[e + 1];
      } else {
        q = 6;
      }
      var r;
      switch (String.fromCharCode(i)) {
       case "h":
        i = b[e + 2];
        i == "h".charCodeAt(0) ? (e++, r = 1) : r = 2;
        break;
       case "l":
        i = b[e + 2];
        i == "l".charCodeAt(0) ? (e++, r = 8) : r = 4;
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
      r && e++;
      i = b[e + 1];
      if ("d,i,u,o,x,X,p".split(",").indexOf(String.fromCharCode(i)) != -1) {
        j = i == "d".charCodeAt(0) || i == "i".charCodeAt(0);
        r = r || 4;
        h = d("i" + r * 8);
        r == 8 && (h = i == "u".charCodeAt(0) ? (h[0] >>> 0) + (h[1] >>> 0) * 4294967296 : (h[0] >>> 0) + (h[1] | 0) * 4294967296);
        r <= 4 && (h = (j ? Oe : Ne)(h & Math.pow(256, r) - 1, r * 8));
        var t = Math.abs(h), u, j = "";
        if (i == "d".charCodeAt(0) || i == "i".charCodeAt(0)) {
          u = Oe(h, 8 * r).toString(10);
        } else {
          if (i == "u".charCodeAt(0)) {
            u = Ne(h, 8 * r).toString(10), h = Math.abs(h);
          } else {
            if (i == "o".charCodeAt(0)) {
              u = (o ? "0" : "") + t.toString(8);
            } else {
              if (i == "x".charCodeAt(0) || i == "X".charCodeAt(0)) {
                j = o ? "0x" : "";
                if (h < 0) {
                  h = -h;
                  u = (t - 1).toString(16);
                  o = [];
                  for (t = 0; t < u.length; t++) {
                    o.push((15 - parseInt(u[t], 16)).toString(16));
                  }
                  for (u = o.join(""); u.length < r * 2; ) {
                    u = "f" + u;
                  }
                } else {
                  u = t.toString(16);
                }
                i == "X".charCodeAt(0) && (j = j.toUpperCase(), u = u.toUpperCase());
              } else {
                i == "p".charCodeAt(0) && (t === 0 ? u = "(nil)" : (j = "0x", u = t.toString(16)));
              }
            }
          }
        }
        if (s) {
          for (; u.length < q; ) {
            u = "0" + u;
          }
        }
        for (k && (j = h < 0 ? "-" + j : "+" + j); j.length + u.length < n; ) {
          l ? u += " " : p ? u = "0" + u : j = " " + j;
        }
        u = j + u;
        u.split("").forEach((function(c) {
          g.push(c.charCodeAt(0));
        }));
      } else {
        if ("f,F,e,E,g,G".split(",").indexOf(String.fromCharCode(i)) != -1) {
          h = d("double");
          if (isNaN(h)) {
            u = "nan", p = !1;
          } else {
            if (isFinite(h)) {
              s = !1;
              r = Math.min(q, 20);
              if (i == "g".charCodeAt(0) || i == "G".charCodeAt(0)) {
                s = !0, q = q || 1, r = parseInt(h.toExponential(r).split("e")[1], 10), q > r && r >= -4 ? (i = (i == "g".charCodeAt(0) ? "f" : "F").charCodeAt(0), q -= r + 1) : (i = (i == "g".charCodeAt(0) ? "e" : "E").charCodeAt(0), q--), r = Math.min(q, 20);
              }
              if (i == "e".charCodeAt(0) || i == "E".charCodeAt(0)) {
                u = h.toExponential(r), /[eE][-+]\d$/.test(u) && (u = u.slice(0, -1) + "0" + u.slice(-1));
              } else {
                if (i == "f".charCodeAt(0) || i == "F".charCodeAt(0)) {
                  u = h.toFixed(r);
                }
              }
              j = u.split("e");
              if (s && !o) {
                for (; j[0].length > 1 && j[0].indexOf(".") != -1 && (j[0].slice(-1) == "0" || j[0].slice(-1) == "."); ) {
                  j[0] = j[0].slice(0, -1);
                }
              } else {
                for (o && u.indexOf(".") == -1 && (j[0] += "."); q > r++; ) {
                  j[0] += "0";
                }
              }
              u = j[0] + (j.length > 1 ? "e" + j[1] : "");
              i == "E".charCodeAt(0) && (u = u.toUpperCase());
              k && h >= 0 && (u = "+" + u);
            } else {
              u = (h < 0 ? "-" : "") + "inf", p = !1;
            }
          }
          for (; u.length < n; ) {
            l ? u += " " : u = p && (u[0] == "-" || u[0] == "+") ? u[0] + "0" + u.slice(1) : (p ? "0" : " ") + u;
          }
          i < "a".charCodeAt(0) && (u = u.toUpperCase());
          u.split("").forEach((function(c) {
            g.push(c.charCodeAt(0));
          }));
        } else {
          if (i == "s".charCodeAt(0)) {
            (k = d("i8*")) ? (k = Me(k), s && k.length > q && (k = k.slice(0, q))) : k = Wd("(null)", !0);
            if (!l) {
              for (; k.length < n--; ) {
                g.push(" ".charCodeAt(0));
              }
            }
            g = g.concat(k);
            if (l) {
              for (; k.length < n--; ) {
                g.push(" ".charCodeAt(0));
              }
            }
          } else {
            if (i == "c".charCodeAt(0)) {
              for (l && g.push(d("i8")); --n > 0; ) {
                g.push(" ".charCodeAt(0));
              }
              l || g.push(d("i8"));
            } else {
              if (i == "n".charCodeAt(0)) {
                l = d("i32*"), m[l >> 2] = g.length;
              } else {
                if (i == "%".charCodeAt(0)) {
                  g.push(h);
                } else {
                  for (t = j; t < e + 2; t++) {
                    g.push(b[t]);
                  }
                }
              }
            }
          }
        }
      }
      e += 2;
    } else {
      g.push(h), e += 1;
    }
  }
  return g;
}

function dg(c) {
  var d = m[eg >> 2], e = Ao(c), c = a;
  var f = D(e, "i8", yd), e = e.length * 1;
  if (e != 0 && gg(d, f, e) == -1 && hg[d]) {
    hg[d].error = !0;
  }
  a = c;
}

var Xf = Math.sqrt;

function K(c, d, e, f) {
  ea("Assertion failed: " + Ed(f) + ", at: " + [ Ed(c), d, Ed(e) ]);
}

function Dd(c, d) {
  var e = 0;
  if (d >= 20) {
    for (var f = c + d; c % 4; ) {
      b[c++] = e;
    }
    e < 0 && (e += 256);
    for (var g = c >> 2, h = f >> 2, i = e | e << 8 | e << 16 | e << 24; g < h; ) {
      m[g++] = i;
    }
    for (c = g << 2; c < f; ) {
      b[c++] = e;
    }
  } else {
    for (; d--; ) {
      b[c++] = e;
    }
  }
}

var Ei = Math.sin, Fi = Math.cos, Bi = Math.floor;

function Zi(c) {
  var d = uc(), e = Date.now();
  m[c + d[0] >> 2] = Math.floor(e / 1e3);
  m[c + d[1] >> 2] = Math.floor((e - 1e3 * Math.floor(e / 1e3)) * 1e3);
}

function Pn() {
  ea("ABORT: undefined, at " + Error().stack);
}

function ao() {
  switch (8) {
   case 8:
    return gd;
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
  ko(go);
  return -1;
}

function Vn(c) {
  Bo || (Tc = Math.ceil(Tc / gd) * gd, Bo = !0);
  var d = Tc;
  c != 0 && Sc(c);
  return d;
}

var Bo;

je.unshift({
  Ba: (function() {
    oo = !1;
    zo || yo();
  })
});

ke.push({
  Ba: (function() {
    zo && (hg[2].object.l.buffer.length > 0 && hg[2].object.l("\n".charCodeAt(0)), hg[3].object.l.buffer.length > 0 && hg[3].object.l("\n".charCodeAt(0)));
  })
});

ko(0);

var fg = D([ 0 ], "i8", B);

Module.Lc = (function(c) {
  function d() {
    for (var c = 0; c < 3; c++) {
      f.push(0);
    }
  }
  var e = c.length + 1, f = [ D(Wd("/bin/this.program"), "i8", B) ];
  d();
  for (var g = 0; g < e - 1; g += 1) {
    f.push(D(Wd(c[g]), "i8", B)), d();
  }
  f.push(0);
  f = D(f, "i32", B);
  return ff();
});

var jf, Co, Do, ih, oh, ph, ri, zi, Ai, xi, yi, Eo, mf, Fo, kf, Go, Ri, Qi, xn, je = je.concat([]), yn, zn, Ho, Io, Jo, Ko, Lo, Mo, No, Oo, Ar, Br, Cr, tj, rj, Kn, Dr, Er, Fr, Gr, Hr, Ir, Jr, Kr, V, Sn;

H.Ab = D([ 37, 102, 10, 0 ], "i8", B);

jf = D([ 0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 0, 34, 0, 0, 0, 36, 0, 0, 0, 36, 0, 0, 0, 36, 0, 0, 0, 36, 0, 0, 0, 36, 0, 0, 0, 36, 0, 0, 0 ], [ "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0 ], B);

D(1, "void*", B);

H.Va = D([ 55, 98, 50, 83, 104, 97, 112, 101, 0 ], "i8", B);

Do = D(8, "*", B);

H.dc = D([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 108, 108, 105, 115, 105, 111, 110, 47, 98, 50, 67, 111, 108, 108, 105, 100, 101, 69, 100, 103, 101, 46, 99, 112, 112, 0 ], "i8", B);

H.Za = D([ 118, 111, 105, 100, 32, 98, 50, 67, 111, 108, 108, 105, 100, 101, 69, 100, 103, 101, 65, 110, 100, 67, 105, 114, 99, 108, 101, 40, 98, 50, 77, 97, 110, 105, 102, 111, 108, 100, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 69, 100, 103, 101, 83, 104, 97, 112, 101, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 67, 105, 114, 99, 108, 101, 83, 104, 97, 112, 101, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 41, 0 ], "i8", B);

H.Ob = D([ 100, 101, 110, 32, 62, 32, 48, 46, 48, 102, 0 ], "i8", B);

H.xa = D([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 108, 108, 105, 115, 105, 111, 110, 47, 98, 50, 67, 111, 108, 108, 105, 100, 101, 80, 111, 108, 121, 103, 111, 110, 46, 99, 112, 112, 0 ], "i8", B);

H.ab = D([ 118, 111, 105, 100, 32, 98, 50, 70, 105, 110, 100, 73, 110, 99, 105, 100, 101, 110, 116, 69, 100, 103, 101, 40, 98, 50, 67, 108, 105, 112, 86, 101, 114, 116, 101, 120, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 80, 111, 108, 121, 103, 111, 110, 83, 104, 97, 112, 101, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 44, 32, 105, 110, 116, 51, 50, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 80, 111, 108, 121, 103, 111, 110, 83, 104, 97, 112, 101, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 41, 0 ], "i8", B);

H.ja = D([ 48, 32, 60, 61, 32, 101, 100, 103, 101, 49, 32, 38, 38, 32, 101, 100, 103, 101, 49, 32, 60, 32, 112, 111, 108, 121, 49, 45, 62, 109, 95, 118, 101, 114, 116, 101, 120, 67, 111, 117, 110, 116, 0 ], "i8", B);

H.$a = D([ 102, 108, 111, 97, 116, 51, 50, 32, 98, 50, 69, 100, 103, 101, 83, 101, 112, 97, 114, 97, 116, 105, 111, 110, 40, 99, 111, 110, 115, 116, 32, 98, 50, 80, 111, 108, 121, 103, 111, 110, 83, 104, 97, 112, 101, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 44, 32, 105, 110, 116, 51, 50, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 80, 111, 108, 121, 103, 111, 110, 83, 104, 97, 112, 101, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 41, 0 ], "i8", B);

ih = D(1, "i32", B);

oh = D(1, "i32", B);

ph = D(1, "i32", B);

H.c = D([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 108, 108, 105, 115, 105, 111, 110, 47, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 46, 99, 112, 112, 0 ], "i8", B);

H.K = D([ 118, 111, 105, 100, 32, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 80, 114, 111, 120, 121, 58, 58, 83, 101, 116, 40, 99, 111, 110, 115, 116, 32, 98, 50, 83, 104, 97, 112, 101, 32, 42, 44, 32, 105, 110, 116, 51, 50, 41, 0 ], "i8", B);

H.Db = D([ 48, 32, 60, 61, 32, 105, 110, 100, 101, 120, 32, 38, 38, 32, 105, 110, 100, 101, 120, 32, 60, 32, 99, 104, 97, 105, 110, 45, 62, 109, 95, 99, 111, 117, 110, 116, 0 ], "i8", B);

H.Xa = D([ 118, 111, 105, 100, 32, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 40, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 79, 117, 116, 112, 117, 116, 32, 42, 44, 32, 98, 50, 83, 105, 109, 112, 108, 101, 120, 67, 97, 99, 104, 101, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 73, 110, 112, 117, 116, 32, 42, 41, 0 ], "i8", B);

H.da = D([ 102, 108, 111, 97, 116, 51, 50, 32, 98, 50, 83, 105, 109, 112, 108, 101, 120, 58, 58, 71, 101, 116, 77, 101, 116, 114, 105, 99, 40, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", B);

H.ca = D([ 118, 111, 105, 100, 32, 98, 50, 83, 105, 109, 112, 108, 101, 120, 58, 58, 71, 101, 116, 87, 105, 116, 110, 101, 115, 115, 80, 111, 105, 110, 116, 115, 40, 98, 50, 86, 101, 99, 50, 32, 42, 44, 32, 98, 50, 86, 101, 99, 50, 32, 42, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", B);

H.ec = D([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 108, 108, 105, 115, 105, 111, 110, 47, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 46, 104, 0 ], "i8", B);

H.wb = D([ 99, 111, 110, 115, 116, 32, 98, 50, 86, 101, 99, 50, 32, 38, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 80, 114, 111, 120, 121, 58, 58, 71, 101, 116, 86, 101, 114, 116, 101, 120, 40, 105, 110, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", B);

H.mc = D([ 48, 32, 60, 61, 32, 105, 110, 100, 101, 120, 32, 38, 38, 32, 105, 110, 100, 101, 120, 32, 60, 32, 109, 95, 99, 111, 117, 110, 116, 0 ], "i8", B);

H.zb = D([ 98, 50, 86, 101, 99, 50, 32, 98, 50, 83, 105, 109, 112, 108, 101, 120, 58, 58, 71, 101, 116, 83, 101, 97, 114, 99, 104, 68, 105, 114, 101, 99, 116, 105, 111, 110, 40, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", B);

H.ba = D([ 98, 50, 86, 101, 99, 50, 32, 98, 50, 83, 105, 109, 112, 108, 101, 120, 58, 58, 71, 101, 116, 67, 108, 111, 115, 101, 115, 116, 80, 111, 105, 110, 116, 40, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", B);

H.rb = D([ 118, 111, 105, 100, 32, 98, 50, 83, 105, 109, 112, 108, 101, 120, 58, 58, 82, 101, 97, 100, 67, 97, 99, 104, 101, 40, 99, 111, 110, 115, 116, 32, 98, 50, 83, 105, 109, 112, 108, 101, 120, 67, 97, 99, 104, 101, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 80, 114, 111, 120, 121, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 80, 114, 111, 120, 121, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 41, 0 ], "i8", B);

H.wc = D([ 99, 97, 99, 104, 101, 45, 62, 99, 111, 117, 110, 116, 32, 60, 61, 32, 51, 0 ], "i8", B);

H.a = D([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 108, 108, 105, 115, 105, 111, 110, 47, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 46, 99, 112, 112, 0 ], "i8", B);

H.bb = D([ 105, 110, 116, 51, 50, 32, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 65, 108, 108, 111, 99, 97, 116, 101, 78, 111, 100, 101, 40, 41, 0 ], "i8", B);

H.Eb = D([ 109, 95, 110, 111, 100, 101, 67, 111, 117, 110, 116, 32, 61, 61, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", B);

H.G = D([ 118, 111, 105, 100, 32, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 70, 114, 101, 101, 78, 111, 100, 101, 40, 105, 110, 116, 51, 50, 41, 0 ], "i8", B);

H.Wb = D([ 48, 32, 60, 61, 32, 110, 111, 100, 101, 73, 100, 32, 38, 38, 32, 110, 111, 100, 101, 73, 100, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", B);

H.gc = D([ 48, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 111, 117, 110, 116, 0 ], "i8", B);

H.xc = D([ 109, 95, 110, 111, 100, 101, 115, 91, 112, 114, 111, 120, 121, 73, 100, 93, 46, 73, 115, 76, 101, 97, 102, 40, 41, 0 ], "i8", B);

H.H = D([ 98, 111, 111, 108, 32, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 77, 111, 118, 101, 80, 114, 111, 120, 121, 40, 105, 110, 116, 51, 50, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 65, 65, 66, 66, 32, 38, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 86, 101, 99, 50, 32, 38, 41, 0 ], "i8", B);

H.F = D([ 118, 111, 105, 100, 32, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 73, 110, 115, 101, 114, 116, 76, 101, 97, 102, 40, 105, 110, 116, 51, 50, 41, 0 ], "i8", B);

H.Dc = D([ 99, 104, 105, 108, 100, 49, 32, 33, 61, 32, 40, 45, 49, 41, 0 ], "i8", B);

H.Gc = D([ 99, 104, 105, 108, 100, 50, 32, 33, 61, 32, 40, 45, 49, 41, 0 ], "i8", B);

H.e = D([ 105, 110, 116, 51, 50, 32, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 66, 97, 108, 97, 110, 99, 101, 40, 105, 110, 116, 51, 50, 41, 0 ], "i8", B);

H.Ic = D([ 105, 65, 32, 33, 61, 32, 40, 45, 49, 41, 0 ], "i8", B);

H.Jc = D([ 48, 32, 60, 61, 32, 105, 66, 32, 38, 38, 32, 105, 66, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", B);

H.Bb = D([ 48, 32, 60, 61, 32, 105, 67, 32, 38, 38, 32, 105, 67, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", B);

H.Cb = D([ 48, 32, 60, 61, 32, 105, 70, 32, 38, 38, 32, 105, 70, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", B);

H.Ib = D([ 48, 32, 60, 61, 32, 105, 71, 32, 38, 38, 32, 105, 71, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", B);

H.Mb = D([ 109, 95, 110, 111, 100, 101, 115, 91, 67, 45, 62, 112, 97, 114, 101, 110, 116, 93, 46, 99, 104, 105, 108, 100, 50, 32, 61, 61, 32, 105, 65, 0 ], "i8", B);

H.Pb = D([ 48, 32, 60, 61, 32, 105, 68, 32, 38, 38, 32, 105, 68, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", B);

H.Qb = D([ 48, 32, 60, 61, 32, 105, 69, 32, 38, 38, 32, 105, 69, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", B);

H.Rb = D([ 109, 95, 110, 111, 100, 101, 115, 91, 66, 45, 62, 112, 97, 114, 101, 110, 116, 93, 46, 99, 104, 105, 108, 100, 50, 32, 61, 61, 32, 105, 65, 0 ], "i8", B);

ri = D(1, "i32", B);

zi = D(1, "i32", B);

Ai = D(1, "i32", B);

xi = D(1, "i32", B);

yi = D(1, "i32", B);

H.p = D([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 108, 108, 105, 115, 105, 111, 110, 47, 98, 50, 84, 105, 109, 101, 79, 102, 73, 109, 112, 97, 99, 116, 46, 99, 112, 112, 0 ], "i8", B);

H.Ya = D([ 118, 111, 105, 100, 32, 98, 50, 84, 105, 109, 101, 79, 102, 73, 109, 112, 97, 99, 116, 40, 98, 50, 84, 79, 73, 79, 117, 116, 112, 117, 116, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 79, 73, 73, 110, 112, 117, 116, 32, 42, 41, 0 ], "i8", B);

H.Nb = D([ 116, 97, 114, 103, 101, 116, 32, 62, 32, 116, 111, 108, 101, 114, 97, 110, 99, 101, 0 ], "i8", B);

H.yb = D([ 102, 108, 111, 97, 116, 51, 50, 32, 98, 50, 83, 101, 112, 97, 114, 97, 116, 105, 111, 110, 70, 117, 110, 99, 116, 105, 111, 110, 58, 58, 69, 118, 97, 108, 117, 97, 116, 101, 40, 105, 110, 116, 51, 50, 44, 32, 105, 110, 116, 51, 50, 44, 32, 102, 108, 111, 97, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", B);

H.xb = D([ 102, 108, 111, 97, 116, 51, 50, 32, 98, 50, 83, 101, 112, 97, 114, 97, 116, 105, 111, 110, 70, 117, 110, 99, 116, 105, 111, 110, 58, 58, 70, 105, 110, 100, 77, 105, 110, 83, 101, 112, 97, 114, 97, 116, 105, 111, 110, 40, 105, 110, 116, 51, 50, 32, 42, 44, 32, 105, 110, 116, 51, 50, 32, 42, 44, 32, 102, 108, 111, 97, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", B);

H.ib = D([ 102, 108, 111, 97, 116, 51, 50, 32, 98, 50, 83, 101, 112, 97, 114, 97, 116, 105, 111, 110, 70, 117, 110, 99, 116, 105, 111, 110, 58, 58, 73, 110, 105, 116, 105, 97, 108, 105, 122, 101, 40, 99, 111, 110, 115, 116, 32, 98, 50, 83, 105, 109, 112, 108, 101, 120, 67, 97, 99, 104, 101, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 80, 114, 111, 120, 121, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 83, 119, 101, 101, 112, 32, 38, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 80, 114, 111, 120, 121, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 83, 119, 101, 101, 112, 32, 38, 44, 32, 102, 108, 111, 97, 116, 51, 50, 41, 0 ], "i8", B);

H.zc = D([ 48, 32, 60, 32, 99, 111, 117, 110, 116, 32, 38, 38, 32, 99, 111, 117, 110, 116, 32, 60, 32, 51, 0 ], "i8", B);

H.qc = D([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 108, 108, 105, 115, 105, 111, 110, 47, 83, 104, 97, 112, 101, 115, 47, 98, 50, 67, 104, 97, 105, 110, 83, 104, 97, 112, 101, 46, 99, 112, 112, 0 ], "i8", B);

H.sb = D([ 118, 111, 105, 100, 32, 98, 50, 67, 104, 97, 105, 110, 83, 104, 97, 112, 101, 58, 58, 71, 101, 116, 67, 104, 105, 108, 100, 69, 100, 103, 101, 40, 98, 50, 69, 100, 103, 101, 83, 104, 97, 112, 101, 32, 42, 44, 32, 105, 110, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", B);

H.rc = D([ 48, 32, 60, 61, 32, 105, 110, 100, 101, 120, 32, 38, 38, 32, 105, 110, 100, 101, 120, 32, 60, 32, 109, 95, 99, 111, 117, 110, 116, 32, 45, 32, 49, 0 ], "i8", B);

mf = D([ 0, 0, 0, 0, 0, 0, 0, 0, 38, 0, 0, 0, 40, 0, 0, 0, 42, 0, 0, 0, 44, 0, 0, 0, 46, 0, 0, 0, 48, 0, 0, 0, 50, 0, 0, 0, 52, 0, 0, 0 ], [ "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0 ], B);

D(1, "void*", B);

H.Ka = D([ 49, 49, 98, 50, 69, 100, 103, 101, 83, 104, 97, 112, 101, 0 ], "i8", B);

Fo = D(12, "*", B);

H.B = D([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 108, 108, 105, 115, 105, 111, 110, 47, 83, 104, 97, 112, 101, 115, 47, 98, 50, 80, 111, 108, 121, 103, 111, 110, 83, 104, 97, 112, 101, 46, 99, 112, 112, 0 ], "i8", B);

H.vb = D([ 118, 105, 114, 116, 117, 97, 108, 32, 98, 111, 111, 108, 32, 98, 50, 80, 111, 108, 121, 103, 111, 110, 83, 104, 97, 112, 101, 58, 58, 82, 97, 121, 67, 97, 115, 116, 40, 98, 50, 82, 97, 121, 67, 97, 115, 116, 79, 117, 116, 112, 117, 116, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 82, 97, 121, 67, 97, 115, 116, 73, 110, 112, 117, 116, 32, 38, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 44, 32, 105, 110, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", B);

H.jc = D([ 48, 46, 48, 102, 32, 60, 61, 32, 108, 111, 119, 101, 114, 32, 38, 38, 32, 108, 111, 119, 101, 114, 32, 60, 61, 32, 105, 110, 112, 117, 116, 46, 109, 97, 120, 70, 114, 97, 99, 116, 105, 111, 110, 0 ], "i8", B);

H.aa = D([ 118, 105, 114, 116, 117, 97, 108, 32, 118, 111, 105, 100, 32, 98, 50, 80, 111, 108, 121, 103, 111, 110, 83, 104, 97, 112, 101, 58, 58, 67, 111, 109, 112, 117, 116, 101, 77, 97, 115, 115, 40, 98, 50, 77, 97, 115, 115, 68, 97, 116, 97, 32, 42, 44, 32, 102, 108, 111, 97, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", B);

H.sc = D([ 109, 95, 118, 101, 114, 116, 101, 120, 67, 111, 117, 110, 116, 32, 62, 61, 32, 51, 0 ], "i8", B);

H.Ac = D([ 97, 114, 101, 97, 32, 62, 32, 49, 46, 49, 57, 50, 48, 57, 50, 57, 48, 69, 45, 48, 55, 70, 0 ], "i8", B);

kf = D([ 0, 0, 0, 0, 0, 0, 0, 0, 54, 0, 0, 0, 56, 0, 0, 0, 58, 0, 0, 0, 60, 0, 0, 0, 62, 0, 0, 0, 64, 0, 0, 0, 66, 0, 0, 0, 68, 0, 0, 0 ], [ "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0 ], B);

D(1, "void*", B);

H.La = D([ 49, 52, 98, 50, 80, 111, 108, 121, 103, 111, 110, 83, 104, 97, 112, 101, 0 ], "i8", B);

Go = D(12, "*", B);

Ri = D([ 16, 0, 0, 0, 32, 0, 0, 0, 64, 0, 0, 0, 96, 0, 0, 0, 128, 0, 0, 0, 160, 0, 0, 0, 192, 0, 0, 0, 224, 0, 0, 0, 256, 0, 0, 0, 320, 0, 0, 0, 384, 0, 0, 0, 448, 0, 0, 0, 512, 0, 0, 0, 640, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], B);

Qi = D(641, "i8", B);

xn = D(1, "i1", B);

H.j = D([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 109, 109, 111, 110, 47, 98, 50, 66, 108, 111, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 46, 99, 112, 112, 0 ], "i8", B);

H.gb = D([ 98, 50, 66, 108, 111, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 58, 58, 98, 50, 66, 108, 111, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 40, 41, 0 ], "i8", B);

H.Sb = D([ 106, 32, 60, 32, 98, 50, 95, 98, 108, 111, 99, 107, 83, 105, 122, 101, 115, 0 ], "i8", B);

H.s = D([ 118, 111, 105, 100, 32, 42, 98, 50, 66, 108, 111, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 58, 58, 65, 108, 108, 111, 99, 97, 116, 101, 40, 105, 110, 116, 51, 50, 41, 0 ], "i8", B);

H.qa = D([ 48, 32, 60, 32, 115, 105, 122, 101, 0 ], "i8", B);

H.va = D([ 48, 32, 60, 61, 32, 105, 110, 100, 101, 120, 32, 38, 38, 32, 105, 110, 100, 101, 120, 32, 60, 32, 98, 50, 95, 98, 108, 111, 99, 107, 83, 105, 122, 101, 115, 0 ], "i8", B);

H.tc = D([ 98, 108, 111, 99, 107, 67, 111, 117, 110, 116, 32, 42, 32, 98, 108, 111, 99, 107, 83, 105, 122, 101, 32, 60, 61, 32, 98, 50, 95, 99, 104, 117, 110, 107, 83, 105, 122, 101, 0 ], "i8", B);

H.L = D([ 118, 111, 105, 100, 32, 98, 50, 66, 108, 111, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 58, 58, 70, 114, 101, 101, 40, 118, 111, 105, 100, 32, 42, 44, 32, 105, 110, 116, 51, 50, 41, 0 ], "i8", B);

H.n = D([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 109, 109, 111, 110, 47, 98, 50, 83, 116, 97, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 46, 99, 112, 112, 0 ], "i8", B);

H.O = D([ 98, 50, 83, 116, 97, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 58, 58, 126, 98, 50, 83, 116, 97, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 40, 41, 0 ], "i8", B);

H.Tb = D([ 109, 95, 105, 110, 100, 101, 120, 32, 61, 61, 32, 48, 0 ], "i8", B);

H.ac = D([ 109, 95, 101, 110, 116, 114, 121, 67, 111, 117, 110, 116, 32, 61, 61, 32, 48, 0 ], "i8", B);

H.hb = D([ 118, 111, 105, 100, 32, 42, 98, 50, 83, 116, 97, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 58, 58, 65, 108, 108, 111, 99, 97, 116, 101, 40, 105, 110, 116, 51, 50, 41, 0 ], "i8", B);

H.kc = D([ 109, 95, 101, 110, 116, 114, 121, 67, 111, 117, 110, 116, 32, 60, 32, 98, 50, 95, 109, 97, 120, 83, 116, 97, 99, 107, 69, 110, 116, 114, 105, 101, 115, 0 ], "i8", B);

H.N = D([ 118, 111, 105, 100, 32, 98, 50, 83, 116, 97, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 58, 58, 70, 114, 101, 101, 40, 118, 111, 105, 100, 32, 42, 41, 0 ], "i8", B);

H.uc = D([ 109, 95, 101, 110, 116, 114, 121, 67, 111, 117, 110, 116, 32, 62, 32, 48, 0 ], "i8", B);

H.Bc = D([ 112, 32, 61, 61, 32, 101, 110, 116, 114, 121, 45, 62, 100, 97, 116, 97, 0 ], "i8", B);

H.f = D([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 98, 50, 66, 111, 100, 121, 46, 99, 112, 112, 0 ], "i8", B);

H.h = D([ 98, 50, 66, 111, 100, 121, 58, 58, 98, 50, 66, 111, 100, 121, 40, 99, 111, 110, 115, 116, 32, 98, 50, 66, 111, 100, 121, 68, 101, 102, 32, 42, 44, 32, 98, 50, 87, 111, 114, 108, 100, 32, 42, 41, 0 ], "i8", B);

H.Ub = D([ 98, 100, 45, 62, 112, 111, 115, 105, 116, 105, 111, 110, 46, 73, 115, 86, 97, 108, 105, 100, 40, 41, 0 ], "i8", B);

H.cc = D([ 98, 100, 45, 62, 108, 105, 110, 101, 97, 114, 86, 101, 108, 111, 99, 105, 116, 121, 46, 73, 115, 86, 97, 108, 105, 100, 40, 41, 0 ], "i8", B);

H.lc = D([ 98, 50, 73, 115, 86, 97, 108, 105, 100, 40, 98, 100, 45, 62, 97, 110, 103, 108, 101, 41, 0 ], "i8", B);

H.vc = D([ 98, 50, 73, 115, 86, 97, 108, 105, 100, 40, 98, 100, 45, 62, 97, 110, 103, 117, 108, 97, 114, 86, 101, 108, 111, 99, 105, 116, 121, 41, 0 ], "i8", B);

H.Cc = D([ 98, 50, 73, 115, 86, 97, 108, 105, 100, 40, 98, 100, 45, 62, 97, 110, 103, 117, 108, 97, 114, 68, 97, 109, 112, 105, 110, 103, 41, 32, 38, 38, 32, 98, 100, 45, 62, 97, 110, 103, 117, 108, 97, 114, 68, 97, 109, 112, 105, 110, 103, 32, 62, 61, 32, 48, 46, 48, 102, 0 ], "i8", B);

H.Fc = D([ 98, 50, 73, 115, 86, 97, 108, 105, 100, 40, 98, 100, 45, 62, 108, 105, 110, 101, 97, 114, 68, 97, 109, 112, 105, 110, 103, 41, 32, 38, 38, 32, 98, 100, 45, 62, 108, 105, 110, 101, 97, 114, 68, 97, 109, 112, 105, 110, 103, 32, 62, 61, 32, 48, 46, 48, 102, 0 ], "i8", B);

H.Hc = D([ 109, 95, 119, 111, 114, 108, 100, 45, 62, 73, 115, 76, 111, 99, 107, 101, 100, 40, 41, 32, 61, 61, 32, 102, 97, 108, 115, 101, 0 ], "i8", B);

H.kb = D([ 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 98, 50, 66, 111, 100, 121, 58, 58, 67, 114, 101, 97, 116, 101, 70, 105, 120, 116, 117, 114, 101, 40, 99, 111, 110, 115, 116, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 68, 101, 102, 32, 42, 41, 0 ], "i8", B);

H.U = D([ 118, 111, 105, 100, 32, 98, 50, 66, 111, 100, 121, 58, 58, 82, 101, 115, 101, 116, 77, 97, 115, 115, 68, 97, 116, 97, 40, 41, 0 ], "i8", B);

H.Hb = D([ 109, 95, 116, 121, 112, 101, 32, 61, 61, 32, 98, 50, 95, 100, 121, 110, 97, 109, 105, 99, 66, 111, 100, 121, 0 ], "i8", B);

H.Lb = D([ 109, 95, 73, 32, 62, 32, 48, 46, 48, 102, 0 ], "i8", B);

yn = D(4, "*", B);

zn = D(4, "*", B);

H.ub = D([ 118, 111, 105, 100, 32, 42, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 71, 101, 116, 85, 115, 101, 114, 68, 97, 116, 97, 40, 105, 110, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", B);

H.w = D([ 48, 32, 60, 61, 32, 112, 114, 111, 120, 121, 73, 100, 32, 38, 38, 32, 112, 114, 111, 120, 121, 73, 100, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", B);

H.fc = D([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 109, 109, 111, 110, 47, 98, 50, 71, 114, 111, 119, 97, 98, 108, 101, 83, 116, 97, 99, 107, 46, 104, 0 ], "i8", B);

H.fb = D([ 105, 110, 116, 32, 98, 50, 71, 114, 111, 119, 97, 98, 108, 101, 83, 116, 97, 99, 107, 60, 105, 110, 116, 44, 32, 50, 53, 54, 62, 58, 58, 80, 111, 112, 40, 41, 0 ], "i8", B);

H.nc = D([ 109, 95, 99, 111, 117, 110, 116, 32, 62, 32, 48, 0 ], "i8", B);

H.tb = D([ 99, 111, 110, 115, 116, 32, 98, 50, 65, 65, 66, 66, 32, 38, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 71, 101, 116, 70, 97, 116, 65, 65, 66, 66, 40, 105, 110, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0 ], "i8", B);

Ho = D([ 0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 72, 0, 0, 0, 74, 0, 0, 0, 76, 0, 0, 0, 78, 0, 0, 0, 80, 0, 0, 0 ], [ "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0 ], B);

D(1, "void*", B);

H.Pa = D([ 49, 55, 98, 50, 67, 111, 110, 116, 97, 99, 116, 76, 105, 115, 116, 101, 110, 101, 114, 0 ], "i8", B);

Io = D(8, "*", B);

H.v = D([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 98, 50, 70, 105, 120, 116, 117, 114, 101, 46, 99, 112, 112, 0 ], "i8", B);

H.$ = D([ 118, 111, 105, 100, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 58, 58, 68, 101, 115, 116, 114, 111, 121, 40, 98, 50, 66, 108, 111, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 32, 42, 41, 0 ], "i8", B);

H.ea = D([ 109, 95, 112, 114, 111, 120, 121, 67, 111, 117, 110, 116, 32, 61, 61, 32, 48, 0 ], "i8", B);

H.qb = D([ 118, 111, 105, 100, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 58, 58, 67, 114, 101, 97, 116, 101, 80, 114, 111, 120, 105, 101, 115, 40, 98, 50, 66, 114, 111, 97, 100, 80, 104, 97, 115, 101, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 41, 0 ], "i8", B);

H.ka = D([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 98, 50, 73, 115, 108, 97, 110, 100, 46, 99, 112, 112, 0 ], "i8", B);

H.W = D([ 118, 111, 105, 100, 32, 98, 50, 73, 115, 108, 97, 110, 100, 58, 58, 83, 111, 108, 118, 101, 84, 79, 73, 40, 99, 111, 110, 115, 116, 32, 98, 50, 84, 105, 109, 101, 83, 116, 101, 112, 32, 38, 44, 32, 105, 110, 116, 51, 50, 44, 32, 105, 110, 116, 51, 50, 41, 0 ], "i8", B);

H.Fb = D([ 116, 111, 105, 73, 110, 100, 101, 120, 65, 32, 60, 32, 109, 95, 98, 111, 100, 121, 67, 111, 117, 110, 116, 0 ], "i8", B);

H.Vb = D([ 116, 111, 105, 73, 110, 100, 101, 120, 66, 32, 60, 32, 109, 95, 98, 111, 100, 121, 67, 111, 117, 110, 116, 0 ], "i8", B);

H.i = D([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 98, 50, 87, 111, 114, 108, 100, 46, 99, 112, 112, 0 ], "i8", B);

H.mb = D([ 98, 50, 66, 111, 100, 121, 32, 42, 98, 50, 87, 111, 114, 108, 100, 58, 58, 67, 114, 101, 97, 116, 101, 66, 111, 100, 121, 40, 99, 111, 110, 115, 116, 32, 98, 50, 66, 111, 100, 121, 68, 101, 102, 32, 42, 41, 0 ], "i8", B);

H.Gb = D([ 73, 115, 76, 111, 99, 107, 101, 100, 40, 41, 32, 61, 61, 32, 102, 97, 108, 115, 101, 0 ], "i8", B);

H.t = D([ 118, 111, 105, 100, 32, 98, 50, 87, 111, 114, 108, 100, 58, 58, 83, 111, 108, 118, 101, 40, 99, 111, 110, 115, 116, 32, 98, 50, 84, 105, 109, 101, 83, 116, 101, 112, 32, 38, 41, 0 ], "i8", B);

H.oc = D([ 98, 45, 62, 73, 115, 65, 99, 116, 105, 118, 101, 40, 41, 32, 61, 61, 32, 116, 114, 117, 101, 0 ], "i8", B);

H.ya = D([ 115, 116, 97, 99, 107, 67, 111, 117, 110, 116, 32, 60, 32, 115, 116, 97, 99, 107, 83, 105, 122, 101, 0 ], "i8", B);

H.V = D([ 118, 111, 105, 100, 32, 98, 50, 87, 111, 114, 108, 100, 58, 58, 83, 111, 108, 118, 101, 84, 79, 73, 40, 99, 111, 110, 115, 116, 32, 98, 50, 84, 105, 109, 101, 83, 116, 101, 112, 32, 38, 41, 0 ], "i8", B);

H.Ec = D([ 116, 121, 112, 101, 65, 32, 61, 61, 32, 98, 50, 95, 100, 121, 110, 97, 109, 105, 99, 66, 111, 100, 121, 32, 124, 124, 32, 116, 121, 112, 101, 66, 32, 61, 61, 32, 98, 50, 95, 100, 121, 110, 97, 109, 105, 99, 66, 111, 100, 121, 0 ], "i8", B);

H.za = D([ 97, 108, 112, 104, 97, 48, 32, 60, 32, 49, 46, 48, 102, 0 ], "i8", B);

H.la = D([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 108, 108, 105, 115, 105, 111, 110, 47, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 46, 104, 0 ], "i8", B);

H.Yb = D([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 109, 109, 111, 110, 47, 98, 50, 77, 97, 116, 104, 46, 104, 0 ], "i8", B);

H.lb = D([ 118, 111, 105, 100, 32, 98, 50, 83, 119, 101, 101, 112, 58, 58, 65, 100, 118, 97, 110, 99, 101, 40, 102, 108, 111, 97, 116, 51, 50, 41, 0 ], "i8", B);

H.A = D([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 98, 50, 73, 115, 108, 97, 110, 100, 46, 104, 0 ], "i8", B);

H.ob = D([ 118, 111, 105, 100, 32, 98, 50, 73, 115, 108, 97, 110, 100, 58, 58, 65, 100, 100, 40, 98, 50, 74, 111, 105, 110, 116, 32, 42, 41, 0 ], "i8", B);

H.Zb = D([ 109, 95, 106, 111, 105, 110, 116, 67, 111, 117, 110, 116, 32, 60, 32, 109, 95, 106, 111, 105, 110, 116, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", B);

H.pb = D([ 118, 111, 105, 100, 32, 98, 50, 73, 115, 108, 97, 110, 100, 58, 58, 65, 100, 100, 40, 98, 50, 67, 111, 110, 116, 97, 99, 116, 32, 42, 41, 0 ], "i8", B);

H.$b = D([ 109, 95, 99, 111, 110, 116, 97, 99, 116, 67, 111, 117, 110, 116, 32, 60, 32, 109, 95, 99, 111, 110, 116, 97, 99, 116, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", B);

H.nb = D([ 118, 111, 105, 100, 32, 98, 50, 73, 115, 108, 97, 110, 100, 58, 58, 65, 100, 100, 40, 98, 50, 66, 111, 100, 121, 32, 42, 41, 0 ], "i8", B);

H.bc = D([ 109, 95, 98, 111, 100, 121, 67, 111, 117, 110, 116, 32, 60, 32, 109, 95, 98, 111, 100, 121, 67, 97, 112, 97, 99, 105, 116, 121, 0 ], "i8", B);

Jo = D([ 0, 0, 0, 0, 0, 0, 0, 0, 82, 0, 0, 0, 84, 0, 0, 0, 86, 0, 0, 0 ], [ "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0 ], B);

D(1, "void*", B);

H.Na = D([ 49, 53, 98, 50, 67, 111, 110, 116, 97, 99, 116, 70, 105, 108, 116, 101, 114, 0 ], "i8", B);

Ko = D(8, "*", B);

Lo = D([ 0, 0, 0, 0, 0, 0, 0, 0, 88, 0, 0, 0, 90, 0, 0, 0, 92, 0, 0, 0 ], [ "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0 ], B);

D(1, "void*", B);

H.na = D([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 67, 111, 110, 116, 97, 99, 116, 115, 47, 98, 50, 67, 104, 97, 105, 110, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 46, 99, 112, 112, 0 ], "i8", B);

H.Q = D([ 98, 50, 67, 104, 97, 105, 110, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 58, 58, 98, 50, 67, 104, 97, 105, 110, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 40, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 105, 110, 116, 51, 50, 44, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 105, 110, 116, 51, 50, 41, 0 ], "i8", B);

H.Ra = D([ 50, 51, 98, 50, 67, 104, 97, 105, 110, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 0 ], "i8", B);

H.Wa = D([ 57, 98, 50, 67, 111, 110, 116, 97, 99, 116, 0 ], "i8", B);

Mo = D(8, "*", B);

No = D(12, "*", B);

Oo = D([ 0, 0, 0, 0, 0, 0, 0, 0, 94, 0, 0, 0, 96, 0, 0, 0, 98, 0, 0, 0 ], [ "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0 ], B);

D(1, "void*", B);

H.oa = D([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 67, 111, 110, 116, 97, 99, 116, 115, 47, 98, 50, 67, 104, 97, 105, 110, 65, 110, 100, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 46, 99, 112, 112, 0 ], "i8", B);

H.S = D([ 98, 50, 67, 104, 97, 105, 110, 65, 110, 100, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 58, 58, 98, 50, 67, 104, 97, 105, 110, 65, 110, 100, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 40, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 105, 110, 116, 51, 50, 44, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 105, 110, 116, 51, 50, 41, 0 ], "i8", B);

H.fa = D([ 109, 95, 102, 105, 120, 116, 117, 114, 101, 65, 45, 62, 71, 101, 116, 84, 121, 112, 101, 40, 41, 32, 61, 61, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 101, 95, 99, 104, 97, 105, 110, 0 ], "i8", B);

H.Ta = D([ 50, 52, 98, 50, 67, 104, 97, 105, 110, 65, 110, 100, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 0 ], "i8", B);

Ar = D(12, "*", B);

Br = D([ 0, 0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 102, 0, 0, 0, 104, 0, 0, 0 ], [ "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0 ], B);

D(1, "void*", B);

H.pa = D([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 67, 111, 110, 116, 97, 99, 116, 115, 47, 98, 50, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 46, 99, 112, 112, 0 ], "i8", B);

H.I = D([ 98, 50, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 58, 58, 98, 50, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 40, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 41, 0 ], "i8", B);

H.Jb = D([ 109, 95, 102, 105, 120, 116, 117, 114, 101, 65, 45, 62, 71, 101, 116, 84, 121, 112, 101, 40, 41, 32, 61, 61, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 101, 95, 99, 105, 114, 99, 108, 101, 0 ], "i8", B);

H.Ma = D([ 49, 53, 98, 50, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 0 ], "i8", B);

Cr = D(12, "*", B);

tj = D(192, [ "*", 0, 0, 0, "*", 0, 0, 0, "i8", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i8", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i8", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i8", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i8", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i8", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i8", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i8", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i8", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i8", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i8", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i8", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i8", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i8", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i8", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i8", 0, 0, 0 ], B);

rj = D(1, "i1", B);

H.g = D([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 67, 111, 110, 116, 97, 99, 116, 115, 47, 98, 50, 67, 111, 110, 116, 97, 99, 116, 46, 99, 112, 112, 0 ], "i8", B);

H.Z = D([ 115, 116, 97, 116, 105, 99, 32, 118, 111, 105, 100, 32, 98, 50, 67, 111, 110, 116, 97, 99, 116, 58, 58, 65, 100, 100, 84, 121, 112, 101, 40, 98, 50, 67, 111, 110, 116, 97, 99, 116, 67, 114, 101, 97, 116, 101, 70, 99, 110, 32, 42, 44, 32, 98, 50, 67, 111, 110, 116, 97, 99, 116, 68, 101, 115, 116, 114, 111, 121, 70, 99, 110, 32, 42, 44, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 84, 121, 112, 101, 44, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 84, 121, 112, 101, 41, 0 ], "i8", B);

H.ga = D([ 48, 32, 60, 61, 32, 116, 121, 112, 101, 49, 32, 38, 38, 32, 116, 121, 112, 101, 49, 32, 60, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 101, 95, 116, 121, 112, 101, 67, 111, 117, 110, 116, 0 ], "i8", B);

H.ma = D([ 48, 32, 60, 61, 32, 116, 121, 112, 101, 50, 32, 38, 38, 32, 116, 121, 112, 101, 50, 32, 60, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 101, 95, 116, 121, 112, 101, 67, 111, 117, 110, 116, 0 ], "i8", B);

H.Y = D([ 115, 116, 97, 116, 105, 99, 32, 98, 50, 67, 111, 110, 116, 97, 99, 116, 32, 42, 98, 50, 67, 111, 110, 116, 97, 99, 116, 58, 58, 67, 114, 101, 97, 116, 101, 40, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 105, 110, 116, 51, 50, 44, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 105, 110, 116, 51, 50, 44, 32, 98, 50, 66, 108, 111, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 32, 42, 41, 0 ], "i8", B);

H.u = D([ 115, 116, 97, 116, 105, 99, 32, 118, 111, 105, 100, 32, 98, 50, 67, 111, 110, 116, 97, 99, 116, 58, 58, 68, 101, 115, 116, 114, 111, 121, 40, 98, 50, 67, 111, 110, 116, 97, 99, 116, 32, 42, 44, 32, 98, 50, 66, 108, 111, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 32, 42, 41, 0 ], "i8", B);

H.hc = D([ 115, 95, 105, 110, 105, 116, 105, 97, 108, 105, 122, 101, 100, 32, 61, 61, 32, 116, 114, 117, 101, 0 ], "i8", B);

H.wa = D([ 48, 32, 60, 61, 32, 116, 121, 112, 101, 65, 32, 38, 38, 32, 116, 121, 112, 101, 66, 32, 60, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 101, 95, 116, 121, 112, 101, 67, 111, 117, 110, 116, 0 ], "i8", B);

Kn = D([ 0, 0, 0, 0, 0, 0, 0, 0, 36, 0, 0, 0, 106, 0, 0, 0, 108, 0, 0, 0 ], [ "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0 ], B);

D(1, "void*", B);

H.m = D([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 67, 111, 110, 116, 97, 99, 116, 115, 47, 98, 50, 67, 111, 110, 116, 97, 99, 116, 83, 111, 108, 118, 101, 114, 46, 99, 112, 112, 0 ], "i8", B);

H.eb = D([ 98, 50, 67, 111, 110, 116, 97, 99, 116, 83, 111, 108, 118, 101, 114, 58, 58, 98, 50, 67, 111, 110, 116, 97, 99, 116, 83, 111, 108, 118, 101, 114, 40, 98, 50, 67, 111, 110, 116, 97, 99, 116, 83, 111, 108, 118, 101, 114, 68, 101, 102, 32, 42, 41, 0 ], "i8", B);

H.Kb = D([ 112, 111, 105, 110, 116, 67, 111, 117, 110, 116, 32, 62, 32, 48, 0 ], "i8", B);

H.cb = D([ 118, 111, 105, 100, 32, 98, 50, 67, 111, 110, 116, 97, 99, 116, 83, 111, 108, 118, 101, 114, 58, 58, 73, 110, 105, 116, 105, 97, 108, 105, 122, 101, 86, 101, 108, 111, 99, 105, 116, 121, 67, 111, 110, 115, 116, 114, 97, 105, 110, 116, 115, 40, 41, 0 ], "i8", B);

H.Xb = D([ 109, 97, 110, 105, 102, 111, 108, 100, 45, 62, 112, 111, 105, 110, 116, 67, 111, 117, 110, 116, 32, 62, 32, 48, 0 ], "i8", B);

H.J = D([ 118, 111, 105, 100, 32, 98, 50, 67, 111, 110, 116, 97, 99, 116, 83, 111, 108, 118, 101, 114, 58, 58, 83, 111, 108, 118, 101, 86, 101, 108, 111, 99, 105, 116, 121, 67, 111, 110, 115, 116, 114, 97, 105, 110, 116, 115, 40, 41, 0 ], "i8", B);

H.ic = D([ 112, 111, 105, 110, 116, 67, 111, 117, 110, 116, 32, 61, 61, 32, 49, 32, 124, 124, 32, 112, 111, 105, 110, 116, 67, 111, 117, 110, 116, 32, 61, 61, 32, 50, 0 ], "i8", B);

H.pc = D([ 97, 46, 120, 32, 62, 61, 32, 48, 46, 48, 102, 32, 38, 38, 32, 97, 46, 121, 32, 62, 61, 32, 48, 46, 48, 102, 0 ], "i8", B);

H.jb = D([ 118, 111, 105, 100, 32, 98, 50, 80, 111, 115, 105, 116, 105, 111, 110, 83, 111, 108, 118, 101, 114, 77, 97, 110, 105, 102, 111, 108, 100, 58, 58, 73, 110, 105, 116, 105, 97, 108, 105, 122, 101, 40, 98, 50, 67, 111, 110, 116, 97, 99, 116, 80, 111, 115, 105, 116, 105, 111, 110, 67, 111, 110, 115, 116, 114, 97, 105, 110, 116, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 44, 32, 105, 110, 116, 51, 50, 41, 0 ], "i8", B);

H.yc = D([ 112, 99, 45, 62, 112, 111, 105, 110, 116, 67, 111, 117, 110, 116, 32, 62, 32, 48, 0 ], "i8", B);

Dr = D([ 0, 0, 0, 0, 0, 0, 0, 0, 110, 0, 0, 0, 112, 0, 0, 0, 114, 0, 0, 0 ], [ "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0 ], B);

D(1, "void*", B);

H.ra = D([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 67, 111, 110, 116, 97, 99, 116, 115, 47, 98, 50, 69, 100, 103, 101, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 46, 99, 112, 112, 0 ], "i8", B);

H.P = D([ 98, 50, 69, 100, 103, 101, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 58, 58, 98, 50, 69, 100, 103, 101, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 40, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 41, 0 ], "i8", B);

H.Qa = D([ 50, 50, 98, 50, 69, 100, 103, 101, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 0 ], "i8", B);

Er = D(12, "*", B);

Fr = D([ 0, 0, 0, 0, 0, 0, 0, 0, 116, 0, 0, 0, 118, 0, 0, 0, 120, 0, 0, 0 ], [ "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0 ], B);

D(1, "void*", B);

H.sa = D([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 67, 111, 110, 116, 97, 99, 116, 115, 47, 98, 50, 69, 100, 103, 101, 65, 110, 100, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 46, 99, 112, 112, 0 ], "i8", B);

H.R = D([ 98, 50, 69, 100, 103, 101, 65, 110, 100, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 58, 58, 98, 50, 69, 100, 103, 101, 65, 110, 100, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 40, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 41, 0 ], "i8", B);

H.ha = D([ 109, 95, 102, 105, 120, 116, 117, 114, 101, 65, 45, 62, 71, 101, 116, 84, 121, 112, 101, 40, 41, 32, 61, 61, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 101, 95, 101, 100, 103, 101, 0 ], "i8", B);

H.Sa = D([ 50, 51, 98, 50, 69, 100, 103, 101, 65, 110, 100, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 0 ], "i8", B);

Gr = D(12, "*", B);

Hr = D([ 0, 0, 0, 0, 0, 0, 0, 0, 122, 0, 0, 0, 124, 0, 0, 0, 126, 0, 0, 0 ], [ "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0 ], B);

D(1, "void*", B);

H.ta = D([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 67, 111, 110, 116, 97, 99, 116, 115, 47, 98, 50, 80, 111, 108, 121, 103, 111, 110, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 46, 99, 112, 112, 0 ], "i8", B);

H.T = D([ 98, 50, 80, 111, 108, 121, 103, 111, 110, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 58, 58, 98, 50, 80, 111, 108, 121, 103, 111, 110, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 40, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 41, 0 ], "i8", B);

H.o = D([ 109, 95, 102, 105, 120, 116, 117, 114, 101, 66, 45, 62, 71, 101, 116, 84, 121, 112, 101, 40, 41, 32, 61, 61, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 101, 95, 99, 105, 114, 99, 108, 101, 0 ], "i8", B);

H.Ua = D([ 50, 53, 98, 50, 80, 111, 108, 121, 103, 111, 110, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 0 ], "i8", B);

Ir = D(12, "*", B);

Jr = D([ 0, 0, 0, 0, 0, 0, 0, 0, 128, 0, 0, 0, 130, 0, 0, 0, 132, 0, 0, 0 ], [ "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0 ], B);

D(1, "void*", B);

H.ua = D([ 66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 67, 111, 110, 116, 97, 99, 116, 115, 47, 98, 50, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 46, 99, 112, 112, 0 ], "i8", B);

H.M = D([ 98, 50, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 58, 58, 98, 50, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 40, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 41, 0 ], "i8", B);

H.ia = D([ 109, 95, 102, 105, 120, 116, 117, 114, 101, 65, 45, 62, 71, 101, 116, 84, 121, 112, 101, 40, 41, 32, 61, 61, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 101, 95, 112, 111, 108, 121, 103, 111, 110, 0 ], "i8", B);

H.z = D([ 109, 95, 102, 105, 120, 116, 117, 114, 101, 66, 45, 62, 71, 101, 116, 84, 121, 112, 101, 40, 41, 32, 61, 61, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 101, 95, 112, 111, 108, 121, 103, 111, 110, 0 ], "i8", B);

H.Oa = D([ 49, 54, 98, 50, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 0 ], "i8", B);

Kr = D(12, "*", B);

H.b = D([ 102, 97, 108, 115, 101, 0 ], "i8", B);

V = D(468, [ "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0 ], B);

Sn = D(24, "i32", B);

m[jf + 4 >> 2] = Do;

Co = D([ 1, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, 0 ], B);

m[Do >> 2] = Co + 8;

m[Do + 4 >> 2] = H.Va;

Eo = D([ 2, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, 0 ], B);

m[mf + 4 >> 2] = Fo;

m[Fo >> 2] = Eo + 8;

m[Fo + 4 >> 2] = H.Ka;

m[Fo + 8 >> 2] = Do;

m[kf + 4 >> 2] = Go;

m[Go >> 2] = Eo + 8;

m[Go + 4 >> 2] = H.La;

m[Go + 8 >> 2] = Do;

m[yn >> 2] = Jo + 8;

m[zn >> 2] = Ho + 8;

m[Ho + 4 >> 2] = Io;

m[Io >> 2] = Co + 8;

m[Io + 4 >> 2] = H.Pa;

m[Jo + 4 >> 2] = Ko;

m[Ko >> 2] = Co + 8;

m[Ko + 4 >> 2] = H.Na;

m[Lo + 4 >> 2] = No;

m[Mo >> 2] = Co + 8;

m[Mo + 4 >> 2] = H.Wa;

m[No >> 2] = Eo + 8;

m[No + 4 >> 2] = H.Ra;

m[No + 8 >> 2] = Mo;

m[Oo + 4 >> 2] = Ar;

m[Ar >> 2] = Eo + 8;

m[Ar + 4 >> 2] = H.Ta;

m[Ar + 8 >> 2] = Mo;

m[Br + 4 >> 2] = Cr;

m[Cr >> 2] = Eo + 8;

m[Cr + 4 >> 2] = H.Ma;

m[Cr + 8 >> 2] = Mo;

m[Kn + 4 >> 2] = Mo;

m[Dr + 4 >> 2] = Er;

m[Er >> 2] = Eo + 8;

m[Er + 4 >> 2] = H.Qa;

m[Er + 8 >> 2] = Mo;

m[Fr + 4 >> 2] = Gr;

m[Gr >> 2] = Eo + 8;

m[Gr + 4 >> 2] = H.Sa;

m[Gr + 8 >> 2] = Mo;

m[Hr + 4 >> 2] = Ir;

m[Ir >> 2] = Eo + 8;

m[Ir + 4 >> 2] = H.Ua;

m[Ir + 8 >> 2] = Mo;

m[Jr + 4 >> 2] = Kr;

m[Kr >> 2] = Eo + 8;

m[Kr + 4 >> 2] = H.Oa;

m[Kr + 8 >> 2] = Mo;

Fd = [ 0, 0, (function(c, d) {
  var e = m[c >> 2], f = m[d >> 2];
  return e < f ? 1 : e != f ? 0 : m[c + 4 >> 2] < m[d + 4 >> 2];
}), 0, (function(c, d, e, f, g) {
  d = Pi(g, 144);
  d == 0 ? c = 0 : (Jn(d, c, 0, e, 0), m[d >> 2] = Br + 8, m[m[m[d + 48 >> 2] + 12 >> 2] + 4 >> 2] != 0 && K(H.pa, 44, H.I, H.Jb), m[m[m[d + 52 >> 2] + 12 >> 2] + 4 >> 2] != 0 && K(H.pa, 45, H.I, H.o), c = d);
  return c;
}), 0, (function(c, d) {
  Fd[m[m[c >> 2] + 4 >> 2]](c);
  Si(d, c, 144);
}), 0, (function(c, d, e, f, g) {
  d = Pi(g, 144);
  d == 0 ? c = 0 : (Jn(d, c, 0, e, 0), m[d >> 2] = Hr + 8, m[m[m[d + 48 >> 2] + 12 >> 2] + 4 >> 2] != 2 && K(H.ta, 41, H.T, H.ia), m[m[m[d + 52 >> 2] + 12 >> 2] + 4 >> 2] != 0 && K(H.ta, 42, H.T, H.o), c = d);
  return c;
}), 0, (function(c, d) {
  Fd[m[m[c >> 2] + 4 >> 2]](c);
  Si(d, c, 144);
}), 0, (function(c, d, e, f, g) {
  d = Pi(g, 144);
  d == 0 ? c = 0 : (Jn(d, c, 0, e, 0), m[d >> 2] = Jr + 8, m[m[m[d + 48 >> 2] + 12 >> 2] + 4 >> 2] != 2 && K(H.ua, 44, H.M, H.ia), m[m[m[d + 52 >> 2] + 12 >> 2] + 4 >> 2] != 2 && K(H.ua, 45, H.M, H.z), c = d);
  return c;
}), 0, (function(c, d) {
  Fd[m[m[c >> 2] + 4 >> 2]](c);
  Si(d, c, 144);
}), 0, (function(c, d, e, f, g) {
  d = Pi(g, 144);
  d == 0 ? c = 0 : (Jn(d, c, 0, e, 0), m[d >> 2] = Dr + 8, m[m[m[d + 48 >> 2] + 12 >> 2] + 4 >> 2] != 1 && K(H.ra, 41, H.P, H.ha), m[m[m[d + 52 >> 2] + 12 >> 2] + 4 >> 2] != 0 && K(H.ra, 42, H.P, H.o), c = d);
  return c;
}), 0, (function(c, d) {
  Fd[m[m[c >> 2] + 4 >> 2]](c);
  Si(d, c, 144);
}), 0, (function(c, d, e, f, g) {
  d = Pi(g, 144);
  d == 0 ? c = 0 : (Jn(d, c, 0, e, 0), m[d >> 2] = Fr + 8, m[m[m[d + 48 >> 2] + 12 >> 2] + 4 >> 2] != 1 && K(H.sa, 41, H.R, H.ha), m[m[m[d + 52 >> 2] + 12 >> 2] + 4 >> 2] != 2 && K(H.sa, 42, H.R, H.z), c = d);
  return c;
}), 0, (function(c, d) {
  Fd[m[m[c >> 2] + 4 >> 2]](c);
  Si(d, c, 144);
}), 0, (function(c, d, e, f, g) {
  g = Pi(g, 144);
  g == 0 ? c = 0 : (Jn(g, c, d, e, f), m[g >> 2] = Lo + 8, m[m[m[g + 48 >> 2] + 12 >> 2] + 4 >> 2] != 3 && K(H.na, 43, H.Q, H.fa), m[m[m[g + 52 >> 2] + 12 >> 2] + 4 >> 2] != 0 && K(H.na, 44, H.Q, H.o), c = g);
  return c;
}), 0, (function(c, d) {
  Fd[m[m[c >> 2] + 4 >> 2]](c);
  Si(d, c, 144);
}), 0, (function(c, d, e, f, g) {
  g = Pi(g, 144);
  g == 0 ? c = 0 : (Jn(g, c, d, e, f), m[g >> 2] = Oo + 8, m[m[m[g + 48 >> 2] + 12 >> 2] + 4 >> 2] != 3 && K(H.oa, 43, H.S, H.fa), m[m[m[g + 52 >> 2] + 12 >> 2] + 4 >> 2] != 2 && K(H.oa, 44, H.S, H.z), c = g);
  return c;
}), 0, (function(c, d) {
  Fd[m[m[c >> 2] + 4 >> 2]](c);
  Si(d, c, 144);
}), 0, ta(), 0, (function(c) {
  bo(c);
}), 0, (function() {
  ea("Pure virtual function called!");
}), 0, ta(), 0, (function(c) {
  bo(c);
}), 0, (function(c, d) {
  var e = Pi(d, 48);
  e == 0 ? e = 0 : lf(e);
  Hi(e, c);
  return e;
}), 0, (function() {
  return 1;
}), 0, (function() {
  return 0;
}), 0, Ii, 0, Ji, 0, (function(c, d) {
  var e = a;
  a += 16;
  var f = e + 8;
  z[d >> 2] = 0;
  var g = d + 4;
  J(f, z[c + 12 >> 2] + z[c + 20 >> 2], z[c + 16 >> 2] + z[c + 24 >> 2]);
  Uf(e, .5, z[f >> 2], z[f + 4 >> 2]);
  f = m[e + 4 >> 2];
  m[g >> 2] = m[e >> 2];
  m[g + 4 >> 2] = f;
  z[d + 12 >> 2] = 0;
  a = e;
}), 0, ta(), 0, (function(c) {
  bo(c);
}), 0, (function(c, d) {
  var e = Pi(d, 152);
  e == 0 ? e = 0 : hf(e);
  var f = e;
  Di(f, c);
  var g = c + 12, h = f + 12, i = m[g + 4 >> 2];
  m[h >> 2] = m[g >> 2];
  m[h + 4 >> 2] = i;
  Mf(f + 20, c + 20, 64);
  Mf(f + 84, c + 84, 64);
  m[f + 148 >> 2] = m[c + 148 >> 2];
  return e;
}), 0, (function() {
  return 1;
}), 0, Li, 0, Mi, 0, Ni, 0, Oi, 0, ta(), 0, (function(c) {
  bo(c);
}), 0, ta(), 0, ta(), 0, ta(), 0, ta(), 0, ta(), 0, (function(c) {
  bo(c);
}), 0, (function(c, d, e) {
  c = d + 32 >> 1;
  e = e + 32 >> 1;
  d = hd[c + 2];
  return d != hd[e + 2] | d == 0 ? (hd[e] & hd[c + 1]) == 0 ? 0 : (hd[e + 1] & hd[c]) != 0 : d > 0;
}), 0, (function(c, d, e, f) {
  var g = a;
  a += 48;
  var h = m[m[c + 48 >> 2] + 12 >> 2];
  lf(g);
  Gi(h, g, m[c + 56 >> 2]);
  jg(d, g, e, m[m[c + 52 >> 2] + 12 >> 2], f);
  a = g;
}), 0, ta(), 0, (function(c) {
  bo(c);
}), 0, (function(c, d, e, f) {
  var g = a;
  a += 48;
  var h = m[m[c + 48 >> 2] + 12 >> 2];
  lf(g);
  Gi(h, g, m[c + 56 >> 2]);
  c = m[m[c + 52 >> 2] + 12 >> 2];
  h = a;
  a += 252;
  Sg(h, d, g, e, c, f);
  a = h;
  a = g;
}), 0, ta(), 0, (function(c) {
  bo(c);
}), 0, (function(c, d, e, f) {
  Qf(d, m[m[c + 48 >> 2] + 12 >> 2], e, m[m[c + 52 >> 2] + 12 >> 2], f);
}), 0, ta(), 0, (function(c) {
  bo(c);
}), 0, ta(), 0, (function(c) {
  bo(c);
}), 0, (function(c, d, e, f) {
  jg(d, m[m[c + 48 >> 2] + 12 >> 2], e, m[m[c + 52 >> 2] + 12 >> 2], f);
}), 0, ta(), 0, (function(c) {
  bo(c);
}), 0, (function(c, d, e, f) {
  var g = m[m[c + 48 >> 2] + 12 >> 2], c = m[m[c + 52 >> 2] + 12 >> 2], h = a;
  a += 252;
  Sg(h, d, g, e, c, f);
  a = h;
}), 0, ta(), 0, (function(c) {
  bo(c);
}), 0, (function(c, d, e, f) {
  Sf(d, m[m[c + 48 >> 2] + 12 >> 2], e, m[m[c + 52 >> 2] + 12 >> 2], f);
}), 0, ta(), 0, (function(c) {
  bo(c);
}), 0, (function(c, d, e, f) {
  Yg(d, m[m[c + 48 >> 2] + 12 >> 2], e, m[m[c + 52 >> 2] + 12 >> 2], f);
}), 0, ta(), 0, (function(c) {
  bo(c);
}), 0 ];

Module.FUNCTION_TABLE = Fd;

function Lr(c) {
  c = c || Module.arguments;
  ie(je);
  var d = ra;
  Module._main && (d = Module.Lc(c), ie(ke));
  return d;
}

Module.run = Lr;

Module.preRun && Module.preRun();

Module.noInitialRun || Lr();

Module.postRun && Module.postRun();
