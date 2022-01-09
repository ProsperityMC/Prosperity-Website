---
title: OptiFine Alternatices
authors: CarbonGhost
description: A list of mods you can use instead of OptiFine.
---

This is an exhastive list of all the mods you can use to replace OptiFine's functionality.

## Why ditch OptiFine?

OptiFine is a ubiquitous mod, and has been around for years. It's feature rich and, historically, has improved performance. However in recent years OptiFine's performance benefits have gotten smaller, and the mod now boasts list of bugs and drawbacks. OptiFine is known to replace large sections of vanilla code, and is now has years of technical debt, and this is all maintained by one person.

As stated above, OptiFine has a long list of issues, some of primary ones are:

- The mod breaks vanilla mechanics
- The mod updates slowly
- The mod has poor compatibility

Going through these point by point. OptiFine breaks vanilla mechanics with a few bugs, sometimes breaking world generation with fast math, as well as increasing player reach, bot to mention any rendering or stability issues that aren't present in vanilla.

OptiFine updates slowly, and Forge updates even slower, if you want to use the mod on the latest update, or in conjunction with other mods, you're likely to be waiting for awhile.

OptiFine has poor compatibility, this is a bigger issue, and not really something the mod can address. Without getting too technical, OptiFine is closed source, making fixing issues with other mods opaque to the end user; And unfortunately, this issue cannot be solved because of the way that OptiFine was developed.

### What about OptiFabric?

OptiFabric shares all of the same issues as OptiFine when run natively, along with a host of new incompatibilities and bugs. While this implementation of the mod is usable, I can't recommend that it be used.

## Your options

This list goes by feature and offers a list of mods to replace it, _all of these mods are tested and compatible unless otherwise stated_. This list is specifically targeted at Fabric, which is a preferable modloader to Forge. If you still wish to use Forge there is a brief section about it [here](#forge).

### Shaders & rendering

#### Shaders

**Iris** is a mod that intends to be fully compatible with OptiFine shaders while delivering great performance. You can see a list all the shaders I've tested in this Gist.

[Download](https://modrinth.com/mod/iris)

[Supported shaders](https://gist.github.com/CarbonGhost/748742abff3a7386940f1c5de42afe69#file-1-md)

#### Fast rendering

**Sodium** is the fastest rendering optimization mod available, use this if you're not going to use shaders or have a low end PC.

[Download](https://modrinth.com/mod/sodium)

> Note that Sodium and Iris are incompatible, choose one or the other, all other compatibility applies to both mods.

#### More rendering features

**Indium** adds a selection of features to Iris and Sodium, this mod is required for connected textures and better grass.

[Download](https://modrinth.com/mod/indium)

### Graphics features

#### Better grass & snow

**LambdaBetterGrass** adds a more detailed implementation of smooth grass as well as better snow and resource pack support
<small>Requires **[Indium](#more-rendering-features)**</small>

[Download](https://modrinth.com/mod/lambdabettergrass)

#### Connected textures

The **Connected Textures Mod** adds support for connected textures via resource packs. Note that by default the mod does not add any features without a resource pack; The mod also has a separate format from OptiFine's MCPatcher format so not all resource packs will work.
<small>Requires **[Indium](#more-rendering-features)**</small>

[Download](https://www.curseforge.com/minecraft/mc-mods/ctm-fabric)

[Pack that ports OptiFine's connected textures](https://www.curseforge.com/minecraft/texture-packs/simple-ct)

#### Fast leaves

**Cull Leaves** adds an option similar to OptiFine's fast leaves to improve performance.

[Download](https://modrinth.com/mod/cull-leaves)

#### Dynamic lighting

**LambDynamicLights** adds a better and more configurable implementation of dynamic lighting to the game.

[Download](https://modrinth.com/mod/lambdynamiclights)

#### Extended view distance

**Bobby** allows you to set your view distance higher than what is allowed on the server, by caching previously loaded chunks.

[Download](https://modrinth.com/mod/bobby)

#### Animations, particles, fog, and more

**Sodium Extra** adds additional features to Iris and Sodium, like fog customization, toggleable animations, togglable particles, configurable cloud height, and more.

[Download](https://modrinth.com/mod/sodium-extra)

### Resource pack features

#### Port OptiFIne packs to modern formats

**MCPPP** allows you to port some resource packs that use OptiFine's MCPatcher format to more modern formats.

[Download](https://modrinth.com/mod/mcpppp)

#### More block features

**More Block Predicates** adds features that allow further customization of resource packs.

[Download](https://modrinth.com/mod/mbp)

#### More GUI features

**Custom GUI** allows resource pack creators to further customize the GUI.

[Download](https://modrinth.com/mod/customgui)

#### Custom entity models (CEM)

The **Custom Entity Models** mod adapts MCPatcher's CEM system to be able to be used with modern Fabric mods.

[Download](https://www.curseforge.com/minecraft/mc-mods/custom-entity-models-cem)

#### Animated textures port

**Animatica** allows you to use animated textures with the OptiFine format.

[Download](https://modrinth.com/mod/animatica)

### Utilities

#### Zoom

**OK Zoomer** adds a zoom hotkey with adjustable magnification levels and animations.

[Download](https://modrinth.com/mod/ok-zoomer)

#### Hide armor

**Armor Visibility** allows you to hide yours or other's armor to see your skin more clearly.

[Download](https://modrinth.com/mod/armor-visibility)

#### Hide shields & totems when not in use

**Shield Disrupter** allows you to hide items (totems, and shields) in your offhand when not in use.

[Download](https://modrinth.com/mod/shielddisruptor)

### Performance

#### General game optimizations

<small>Singleplayer only</small>
**Lithium** is a complete game optimization mod that does not break any vanilla mechanics.

[Download](https://modrinth.com/mod/lithium)

#### Lighting engine optimization

<small>Singleplayer only</small>
**Starlight** is a mod that optimizes the light engine to be faster while maintaining vanilla mechanics.

[Download](https://modrinth.com/mod/starlight)

#### Faster load times

**Lazy DFU** is a simple mod that makes worlds and the game load faster by making some code execute only when needed.

[Download](https://modrinth.com/mod/lazydfu)

### Misic

#### Fully customizable capes

**Fabric Capes** allows you to fully customize your in-game cape for free.

[Download](https://www.curseforge.com/minecraft/mc-mods/capes)

#### Disable world view bob

**No View Bob Screen Shake** removes the lurching that can occur when view bobbing is enabled that may cause motion sickness.

[Download](https://modrinth.com/mod/viewbobbingmod)

#### Additional tooltips (shulker tooltips)

**Inspectio** is a fully featured tooltip extension mod, it adds bee hive info, shulker tooltips, and more.

[Download](https://modrinth.com/mod/inspecio)

### Forge

Forge currently does not have a suitable OptiFine replacement, due to many incompatibilities with mods, I cannot recommend either OptiFine nor the [Halogen](https://www.curseforge.com/error?aspxerrorpath=/minecraft/mc-mods/halogen) mod (port of Sodium and Lithium).

## Why does this have to be so hard?

If you have taken the time to read through the suggestions here, or have compiled this list of mods yourself, you may be wondering why this has to be so difficult, when OptiFine can be installed in about 3 clicks. The answer is that there is no reason for it.

It is my personal opinion that, if ever OptiFine were to fall out of use, the Fabric modding community needs to make an option that is as appealing and easy to use for the average person as OptiFine currently is. The mods exist to replace the majority of the mods features, with eqivilent or better results, the last obstacle is widespread adoption, and making the alternatives easy to use.
