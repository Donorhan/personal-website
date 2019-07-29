---
title: The Grid package
description: This post is related to the gatsbyjs
date: '2019-07-29'
image: '../img/blog-posts/grid-package/thumbnail.jpg'
tags: ['module', 'echo']
---

In order to have something modular and reusable, I chose to develop a first module independently of the game, *the grid package*. That's why I'm going to give you a quick overview of the main features of this module.

This module should allow me several things:

- **Allow the addition, deletion and modification of rooms without restarting the game**
<span>There will be levels with few rooms and unlike much larger levels. We can also imagine a level with rooms that can be unlocked over time, so we must imagine a dynamic solution from the beginning.</span>
- **Have a group system**
<span>Not all rooms will be the same size, that's why we have to imagine a unit of measurement "the block", this unit will allow us to define the number of blocks for a room type.</span>
- **Have a path-finding system**
<span>The levels will be visited by the player but also by robots. These robots must be able to move freely while respecting the same rules as those applied to the player.</span>
- **Find the elements around a room**
<span>I want to be able to quickly detect nearby rooms, both during construction and for artificial intelligence.</span>

## The technical side
The purpose of this blog is not necessarily to get into the technique but I will make an exception, <u>for less technical people, you can skip to the next part</u>.

<small>Note: In general I avoid putting too much logic in Unity components, that's why I tend to create all the logic in models and then expose some methods to Unity components.</small>

### Core
The core is composed of a grid, composed of blocks, that makes two classes:
- **Grid**: It contains a collection of IGridElement
- **IGridElement**: An interface that defines what the elements of a grid should look like

```csharp
namespace Do.GridPackage.Core
{
    public interface IGridElement
    {
        void AddedToGrid(int col, int row);
        void RemovedFromGrid(int col, int row);
        void MovedInGrid(int col, int row);
        int AmountOfColsRequired();
        int AmountOfRowsRequired();
        void SetDimensions(int cols, int rows);
    }
}
```

### Modules
Okay, well, I lied about the title since there is only one module for the moment: path finding. Pathfinding will allow our characters to find the shortest path when they want to reach a particular room.

For the moment the path finding is quite light since I won't need many features. For the moment it implements the following features:
- Searching for a path (yes, this is the basis for a path finding algorithm but I thought it was important to remember it)
- Correct performance (1000 x 1000 levels without problems)
- A component to create units easily

## The components
Components are a way to expose the core to the Unity editor, the grid package module exposes four of them.

### GridComponent
The main element, the other components are useless without it, it allows you to create a grid, define the size of its cells and add events when an action occurs.

<center>

![Grid component](../../img/blog-posts/grid-package/grid-component.jpg)
</center>

### GridVisualizer
This is useful for debugging only, it allows you to see what the GridComponent looks like. It also allows you to display different information about the current manipulations on the grid.

<center>

![Grid component](../../img/blog-posts/grid-package/grid-visualizer.jpg)
</center>

### GridManipulator
A component that allows, as its name suggests, to manipulate the grid. This component also transmits events concerning the manipulations made on the grid. It has options to specify the type of cell to be added, the size of this cell, etc.

<center>

![Grid component](../../img/blog-posts/grid-package/grid-manipulator.jpg)
</center>

### GridPathFinding
Add path-finding support to the grid, nothing special to show here. There is a "Unit" component to add on the characters. This component offers some features such as the ability to move diagonally or not or the speed of movement of the component.

Later on I would like to add features like avoiding certain cells if possible.

## The result
The following video is not very informative in itself but it presents several things:
- Adding blocks in live
- The search for the shortest route for the units
- The blue display of the elements around our block in the grid

<div class="iframe" style='position:relative; padding-bottom:calc(56.25% + 44px)'><iframe src='https://gfycat.com/ifr/BowedGrimKitten' frameborder='0' scrolling='no' width='100%' height='100%' style='position:absolute;top:0;left:0;' allowfullscreen></iframe></div><p></p>

There you go! This small module is then used in Echo and is part of the basis of the game. It allows me to quickly manipulate the player's ship and the different levels on the planets.

If you liked this article, I invite you to wait for the next post that will talk about the inventory management module and which should be released very soon.
