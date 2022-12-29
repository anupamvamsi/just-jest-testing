import { caesarCipher } from './caesarCipher';

test('abc -> bcd (1)', () => {
  expect(caesarCipher('abc', 1)).toBe('bcd');
});

test('xyz -> yza (1)', () => {
  expect(caesarCipher('xyz', 1)).toBe('yza');
});

test('cleaning -> cleaning (0)', () => {
  expect(caesarCipher('cleaning', 0)).toBe('cleaning');
});

test('mathematical -> eslzweslausd (18)', () => {
  expect(caesarCipher('mathematical', 18)).toBe('eslzweslausd');
});

test('calculator -> kitkctibwz (8)', () => {
  expect(caesarCipher('calculator', 8)).toBe('kitkctibwz');
});

test('kitkctibwz -> sqbskbqjeh (-8)', () => {
  expect(caesarCipher('kitkctibwz', 8)).toBe('sqbskbqjeh');
});

test('zxpaleo -> ljbmxqa (12)', () => {
  expect(caesarCipher('zxpaleo', 12)).toBe('ljbmxqa');
});

test('defend the east wall of the castle -> pqrqzp ftq qmef imxx ar ftq omefxq', () => {
  expect(caesarCipher('defend the east wall of the castle', 12)).toBe(
    'pqrqzp ftq qmef imxx ar ftq omefxq'
  );
});

test('long paragraph', () => {
  expect(
    caesarCipher(
      `RegExr was created by gskinner.com.

Edit the Expression & Text to see matches. Roll over matches or the expression for details. PCRE & JavaScript flavors of RegEx are supported. Validate your expression with Tests mode.

The side bar includes a Cheatsheet, full Reference, and Help. You can also Save & Share with the Community and view patterns you create or favorite in My Patterns.

Explore results with the Tools below. Replace & List output custom results. Details lists capture groups. Explain describes your expression in plain English.`,
      3
    )
  ).toBe(`uhjhau zdv fuhdwhg eb jvnlqqhu.frp.

hglw wkh hasuhvvlrq & whaw wr vhh pdwfkhv. uroo ryhu pdwfkhv ru wkh hasuhvvlrq iru ghwdlov. sfuh & mdydvfulsw iodyruv ri uhjha duh vxssruwhg. ydolgdwh brxu hasuhvvlrq zlwk whvwv prgh.

wkh vlgh edu lqfoxghv d fkhdwvkhhw, ixoo uhihuhqfh, dqg khos. brx fdq dovr vdyh & vkduh zlwk wkh frppxqlwb dqg ylhz sdwwhuqv brx fuhdwh ru idyrulwh lq pb sdwwhuqv.

hasoruh uhvxowv zlwk wkh wrrov ehorz. uhsodfh & olvw rxwsxw fxvwrp uhvxowv. ghwdlov olvwv fdswxuh jurxsv. hasodlq ghvfulehv brxu hasuhvvlrq lq sodlq hqjolvk.`);
});
