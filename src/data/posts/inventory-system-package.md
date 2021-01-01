---
title: The Inventory System
description: The second module for the game, an inventory system
date: '2019-08-19'
image: '../img/blog-posts/inventory-system-package/thumbnail.jpg'
tags: ['module', 'echo', 'inventory']
---

Here is finally the last post before really getting into the development of the game, this time I'm going to talk very very quickly about the inventory system in place.

here is the list of features I will need first:

- **Allow the addition, deletion and modification of items**
- **Can be used with keyboard, controller and touch screens**
- **Light, fast and stable**
- **Customizable**

## The technical side
As for the article about the grid package, I chose to separate the "pure" logic from the Unity components, again to avoid too much dependence on Unity and to have very simple components.

### Core
The core is composed of 4 main elements:
- **Inventory**: It contains a collection of Slot
- **Slot**: It's a simple class with an item and a quantity, nothing more
- **Item**: A simple class again with a link to an ItemDefinition, a state and few methods like "Clone"
- **ItemDefinition** A Scriptable Object with all the data about the object

```csharp
public abstract class ItemDefinition : Do.Collections.Document, IEquatable<ItemDefinition>
    {
        [SerializeField] new string name = "";
        [SerializeField] string description = "";
        [SerializeField] public Sprite thumbnail = null;
        [SerializeField] public GameObject prefab = null;
        [SerializeField] bool equipeable = false;
        [SerializeField] [Range(0, 999)] public int stackSize = 1;

        public bool Equals(ItemDefinition other) => other != null && other.Identifier == this.Identifier;
        public string Name => name;
        public string Description => description;
        public bool Equipeable =>equipeable;
    }
```

## The components
Components are a way to expose the core to the Unity editor, the grid package module exposes four of them.

### Inventory component
The main element, the other components are useless without it, it allows you to create an inventory an expose few methods, nothing more. Of course, I can add or remove items from the inventory from both the code and the Unity editor.

<center>

![The InventoryComponent](../../img/blog-posts/inventory-system-package/inventory-component.jpg)
</center>

### Inventory renderer
The module allowing to draw an inventory on the screen.

This allows you to define the appearance of the "Slot" but also other things such as the area in which to display the objects, the effects to play when interacting with the inventory or the current inventory mode.

<small>Note: I plan to move the management of the interaction mode with the inventory out of this component later.</small>

<center>

![The InventoryRenderer](../../img/blog-posts/inventory-system-package/inventory-renderer.jpg)
</center>

### Slot component
Customize slots appearances with this one.

<center>

![Grid component](../../img/blog-posts/inventory-system-package/slot-component.jpg)
</center>

## The result

<div class="iframe" style='position:relative; padding-bottom:calc(56.25% + 44px)'><iframe src='https://gfycat.com/ifr/kindlyhardtofindacornwoodpecker' frameBorder='0' scrolling='no' width='100%' height='100%' style='position:absolute;top:0;left:0;' allowfullscreen></iframe></div><p></p>

<div class="iframe" style='position:relative; padding-bottom:calc(56.25% + 44px)'><iframe src='https://gfycat.com/ifr/skeletaltautclumber' frameBorder='0' scrolling='no' width='100%' height='100%' style='position:absolute;top:0;left:0;' allowfullscreen></iframe></div><p></p>

<div class="iframe" style='position:relative; padding-bottom:calc(56.25% + 44px)'><iframe src='https://gfycat.com/ifr/masculinepalecaribou' frameBorder='0' scrolling='no' width='100%' height='100%' style='position:absolute;top:0;left:0;' allowfullscreen></iframe></div><p></p>

And that's all for the inventory system. See you soon to finally present the development of the game.