# Starborn: Mars Defense — Music, Sound & Font Credits

All music in Starborn is **original** and was written for this game: a hybrid sci-fi action score in E minor / E Phrygian
(pulsing synth-bass ostinatos, distorted-guitar chugs, brass "braams", taiko and choir). No existing melodies are used or quoted.
It was composed as MIDI, rendered offline with sampled instruments, then mixed and mastered (convolution hall reverb, EQ,
glue compression, limiter, about -16 LUFS).

All sound effects (plasma shots, impacts, credit pickups, alarms) are synthesized live in the browser with the Web Audio API. No samples are used.

## Sampled instruments

**FluidR3_GM SoundFont** (v3, 2008)
- Copyright © 2000-2002, 2008 Frank Wen; © 2008 Toby Smithe
- Built in part from public-domain samples, with contributions by Suren M. Seron, Scott Hanan, Steve Aupperle, Chris Gillman,
  Alex Taubr, Chris Prola, Andrew Klenk, Winfried Hubbe, Dylan, Tim, Gort, Uros Katic and Ethan Winer.
- Licence: **MIT** ("I hereby release Fluid under the MIT license"). You may redistribute rendered audio in games.
- Source: Debian package `fluid-soundfont-gm` (upstream: musescore.org fluid-soundfont).

> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation
> files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy,
> modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software
> is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND.

## Tracks
| File | Length (loop) | What's in it |
|---|---|---|
| music/defend_base.m4a | 96 s @120 bpm | 16th-note synth-bass pulse, poly-synth pad, saw arpeggiator, saw lead (main theme), synth strings, crystal bell, voice pad, electronic kit |
| music/defend_battle.m4a (intensity layer) | 96 s | taiko, timpani rolls, distorted-guitar chugs, trombone and brass braams/stabs, synth-brass call, choir, orchestra hits |
| music/buildup_base.m4a + buildup_rise.m4a | 12.8 s @150 bpm | boss-incoming riser: heartbeat taiko, accelerating synth bass/timpani/synth drums, rising synth-string cluster, choir and trombone swell |
| music/boss_hit.m4a | 4.6 s one-shot | boss-arrival impact: taiko, timpani, crash/china, brass and guitar braam, orchestra hit |
| music/boss.m4a | 51.2 s @150 bpm | Phrygian synth-bass and guitar grind, tuba, synth strings, choir, double-time taiko, full kit, trombone braams, saw-lead motif, sweep pad |
| music/raid.m4a | 61.44 s @125 bpm | galloping synth bass, overdriven-guitar gallop, saw arps, march snare rudiments, taiko, synth-brass fanfare, lead theme, choir |

## Fonts
- **Exo 2** by Natanael Gama, and **Orbitron** by Matt McInerney. Both use the SIL Open Font License 1.1 and are self-hosted in `fonts/` (from Google Fonts).

## Art
All in-game art (the Starborn and hover bike, aliens, bosses, the Ark starship, turrets, terrain, hives and icons) is original and drawn procedurally in code.
