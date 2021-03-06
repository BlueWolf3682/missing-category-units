const bullets = this.global.mcu.bullets;
const ais = this.global.mcu.ai;

const SuNavT5 = extendContent(UnitType, "urodela", {});
SuNavT5.constructor = () => extend(UnitWaterMove, {});
SuNavT5.defaultController = ais.groundRepairAI;

const AAbullet = extend(FlakBulletType, {});
AAbullet.sprite = "missile";
AAbullet.height = 8;
AAbullet.explodeRange = 25;
AAbullet.splashDamage = 20;
AAbullet.splashDamgeRadius = 45;
AAbullet.homingRange = 12 * 8;
AAbullet.homingPower = 0.15;
AAbullet.trailChance = 0.2;
AAbullet.lifetime = 35;
AAbullet.speed = 5;
AAbullet.backColor = Pal.missileYellowBack;
AAbullet.frontColor = Pal.missileYellow;
AAbullet.hitSound = Sounds.explosion;
AAbullet.weaveMag = 6;
AAbullet.weaveScale = 6;

const AA = extendContent(Weapon, "purple-air-renigata-aa", {});
AA.bullet = AAbullet;
AA.rotate = true;
AA.rotateSpeed = 8;
AA.reload = 5;
AA.inaccurcay = 5;
AA.shootSound = Sounds.missile;
AA.alternate = false;
AA.x = 98 / 4;
AA.y = 41 / 4;

const AA2 = extendContent(Weapon, "purple-air-renigata-aa", {});
AA2.bullet = AAbullet;
AA2.rotate = true;
AA2.rotateSpeed = 8;
AA2.reload = 5;
AA2.shootSound = Sounds.missile;
AA2.alternate = false;
AA2.x = 0;
AA2.y = 55 / 4;
AA2.mirror = false;

const AA3 = extendContent(Weapon, "purple-air-renigata-aa", {});
AA3.bullet = AAbullet;
AA3.rotate = true;
AA3.rotateSpeed = 8;
AA3.reload = 5;
AA3.shootSound = Sounds.missile;
AA3.alternate = false;
AA3.x = 0;
AA3.y = 96 / 4;
AA3.mirror = false;

const tractorBeam = bullets.newTractorBeam(11, 720);
var range = 142;
tractorBeam.length = range;
tractorBeam.maxRange = range;
tractorBeam.lifetime = 120;
//Doesn't work due to how the code works in BulletComp.java
/*tractorBeam.collidesTiles = true;
tractorBeam.collidesTeam = true;
tractorBeam.healPercent = 4;*/

const tBDouble = extendContent(Weapon, "purple-air-renigata-parallax", {});
tBDouble.x = 94 / 4;
tBDouble.y = -80 / 4;
tBDouble.shootY = 6;
tBDouble.recoil = 0;
tBDouble.reload = 29;
tBDouble.rotate = true;
tBDouble.continuous = true;
tBDouble.shootSound = Sounds.tractorbeam;
tBDouble.bullet = tractorBeam;
tBDouble.recoil = 0;

const fTBDouble = extendContent(Weapon, "purple-air-renigata-parallax", {});
fTBDouble.x = 41 / 4;
fTBDouble.y = 10 / 4;
fTBDouble.shootY = 6;
fTBDouble.recoil = 0;
fTBDouble.reload = 30;
fTBDouble.rotate = true;
fTBDouble.continuous = true;
fTBDouble.shootSound = Sounds.tractorbeam;
fTBDouble.bullet = tractorBeam;
fTBDouble.recoil = 0;


const ffTBDouble = extendContent(Weapon, "purple-air-renigata-parallax", {});
ffTBDouble.x = 35 / 4;
ffTBDouble.y = 122 / 4;
ffTBDouble.shootY = 6;
ffTBDouble.recoil = 0;
ffTBDouble.reload = 31;
ffTBDouble.rotate = true;
ffTBDouble.continuous = true;
ffTBDouble.shootSound = Sounds.tractorbeam;
ffTBDouble.bullet = tractorBeam;
ffTBDouble.recoil = 0;

//Fx.sapExplosion, but green
const plasmaExplosion = new Effect(25, e => {
  Draw.color(Pal.heal);

  e.scaled(6, s => {
    Lines.stroke(3 * s.fout());
    Lines.circle(e.x, e.y, 3 + s.fin() * 80);
  });

  Draw.color(Color.white);

  Angles.randLenVectors(e.id, 9, 2 + 70 * e.finpow(), (x, y) => {
    Fill.circle(e.x + x, e.y + y, e.fout() * 4 + 0.5);
  });

  Draw.color(Color.valueOf("73D188"));
  Lines.stroke(1 * e.fout());

  Angles.randLenVectors(e.id + 1, 8, 1 + 60 * e.finpow(), (x, y) => {
    Lines.lineAngle(e.x + x, e.y + y, Mathf.angle(x, y), 1 + e.fout() * 3);
  });
})

const cluster = extend(BasicBulletType, {});
cluster.speed = 3;
cluster.sprite = "large-bomb";
cluster.hitEffect = plasmaExplosion;
cluster.knockback = 0.6;
cluster.lifetime = 70;
cluster.width = 20;
cluster.height = 20;
cluster.shrinkX = 0.5;
cluster.shrinkY = 0.5;
cluster.spin = 2;
cluster.damage = 10;
cluster.splashDamageRadius = 50;
cluster.splashDamage = 15;
cluster.backColor = Pal.heal;
cluster.frontColor = Color.white;
cluster.mixColorTo = Color.white;
cluster.hitSound = Sounds.plasmaboom;
cluster.lightningColor = Pal.heal;
cluster.lightning = 2;
cluster.lightningLength = 5;
cluster.smokeEffect = Fx.shootBigSmoke2;
cluster.hitShake = 3;
cluster.scaleVelocity = true;
cluster.collidesTiles = false;
cluster.collides = false;
cluster.collidesAir = false;
cluster.shootEffect = Fx.shootBig;
cluster.trailEffect = Fx.artilleryTrail;
cluster.healPercent = 10;

const shell = extend(BasicBulletType, {});
shell.speed = 4;
shell.damage = 16;
shell.splashDamage = 40;
shell.splashDamageRadius = 60;
shell.knockback = 0.5;
shell.sprite = "large-bomb";
shell.width = 25;
shell.height = 25;
shell.shrinkX = 0.2;
shell.shrinkY = 0.2;
shell.spin = 2;
shell.lifetime = 90;
shell.despawnEffect = Fx.greenBomb;
shell.hitEffect = Fx.massiveExplosion;
shell.backColor = Pal.heal;
shell.frontColor = Color.white;
shell.mixColorTo = Color.white;
shell.hitSound = Sounds.plasmaboom;
shell.scaleVelocity = true;
shell.collidesTiles = false;
shell.collides = false;
shell.collidesAir = false;
shell.scaleVelocity = true;
shell.hitShake = 1;
shell.shootEffect = Fx.shootBig;
shell.trailEffect = Fx.artilleryTrail;
shell.healPercent = 10;
shell.fragLifeMin = 0.3;
//shell.fragLifeMax = 2;
shell.fragBullets = 20;
shell.fragBullet = cluster;

//Back center: (0, -116) Done: Giant heal artillery (Base off Toxopid)
const healxopid = extendContent(Weapon, "purple-air-urodela-cannon", {});
healxopid.x = 0;
healxopid.y = -116 / 4;
healxopid.shootY = 22;
healxopid.mirror = false;
healxopid.shake = 7;
healxopid.recoil = 10;
healxopid.shootSound = Sounds.artillery;
healxopid.reload = 190;
healxopid.rotateSpeed = 2;
healxopid.ejectEffect = Fx.casing3;
healxopid.rotate = true;
healxopid.occlusion = 30;
healxopid.bullet = shell;
healxopid.inaccurcay = 10;
healxopid.velocityRnd = 0.2;
//Front center: (0, 56) TODO: ???

var monoSec = 60;
var flareSec = 40;
var polySec = 75;

/*Spawn positions:
(58, 54)
(68, -34)
(52, -109)
*/
SuNavT5.abilities.add(new UnitSpawnAbility(UnitTypes.mono, monoSec * 60, 58 / 4, 54 / 4));
SuNavT5.abilities.add(new UnitSpawnAbility(UnitTypes.mono, monoSec * 60, -58 / 4, 54 / 4));
SuNavT5.abilities.add(new UnitSpawnAbility(UnitTypes.flare, flareSec * 60,68 / 4, -34 / 4));
SuNavT5.abilities.add(new UnitSpawnAbility(UnitTypes.flare, flareSec * 60, -68 / 4, -34 / 4));
SuNavT5.abilities.add(new UnitSpawnAbility(UnitTypes.poly, polySec * 60, 52 / 4, -109 / 4));
SuNavT5.abilities.add(new UnitSpawnAbility(UnitTypes.poly, polySec * 60, -52 / 4, -109 / 4));
SuNavT5.abilities.add(new ForceFieldAbility(80, 5, 10000, 60 * 20));

SuNavT5.ammoType = AmmoTypes.powerHigh;

SuNavT5.weapons.add(AA);
SuNavT5.weapons.add(AA2);
SuNavT5.weapons.add(AA3);
SuNavT5.weapons.add(ffTBDouble);
SuNavT5.weapons.add(fTBDouble);
SuNavT5.weapons.add(tBDouble);
SuNavT5.weapons.add(healxopid);