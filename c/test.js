// js -m -n -e "load('box2d.js')" test.js

var DEBUG = 0;

var WARMUP = 64;
var FRAMES = 256;

var e_count = 40;

function bench() {
  var gravity = new Box2D.b2Vec2(0.0, -10.0);

  // Construct a world object, which will hold and simulate the rigid bodies.
  var world = new Box2D.b2World(gravity);
  world.SetAllowSleeping(false);

  var bd = new Box2D.b2BodyDef();
  var ground = world.CreateBody(bd);

  var shape = new Box2D.b2EdgeShape();
  shape.Set(new Box2D.b2Vec2(-40.0, 0.0), new Box2D.b2Vec2(40.0, 0.0));
  ground.CreateFixture(shape, 0.0);

  var topBody = new Box2D.b2Body();

  var a = 0.5;
  var shape = new Box2D.b2PolygonShape();
  shape.SetAsBox(a, a);

  var x = new Box2D.b2Vec2(-7.0, 0.75);
  var y = new Box2D.b2Vec2();
  var deltaX = new Box2D.b2Vec2(0.5625, 1);
  var deltaY = new Box2D.b2Vec2(1.125, 0.0);

  for (var i = 0; i < e_count; ++i) {
    y = x;

    for (var j = i; j < e_count; ++j) {
      var bd = new Box2D.b2BodyDef();
      bd.set_type(Box2D.b2_dynamicBody);
      bd.set_position(y);
      var body = world.CreateBody(bd);
      body.CreateFixture(shape, 5.0);

      topBody = body;

      y += deltaY;
    }

    x += deltaX;
  }

  for (var i = 0; i < WARMUP; ++i) {
    world.Step(1.0/60.0, 3, 3);
  }

  var times = new Array(FRAMES); 
  for (var i = 0; i < FRAMES; ++i) {
    var start = clock();
    world.Step(1.0/60.0, 3, 3);
    var end = clock();
    times[i] = end - start;
    if (DEBUG) print(topBody.GetPosition().get_y());
    print((end - start) / (1000 * 1000));
  }

  print('');

  var total = 0;
  for (var i = 0; i < FRAMES; ++i) {
    total += times[i];
  }
  printf(total / (FRAMES * (CLOCKS_PER_SEC * 1000)));
}

bench();

