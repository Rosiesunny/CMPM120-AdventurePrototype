A simple adventure game by Ellen Brannon based on a simple adventure game engine by [Adam Smith](https://github.com/rndmcnlly).

Code requirements:
- **4+ scenes based on `AdventureScene`**: PathStart, PathBery, PathBike, PathCabin, PathStream
- **2+ scenes *not* based on `AdventureScene`**: introscene1, introscene2, introscene3, introscene4
- **2+ methods or other enhancement added to the adventure game engine to simplify my scenes**:
    - Enhancement 1: Moving scene objects into sceneData.json and using a function to load them.
    - Enhancement 2: WIP: flags. I made a flags.json I wanna reference to show if certain story beats or actions have taken place. 

Experience requirements:
- **4+ locations in the game world**: pathStart, pathBerry, pathBike, pathStream, pathCabin
- **2+ interactive objects in most scenes**: Arrows in all scenes, 3 berry types in berry scene, backpack and cabin in bike scene.
- **Many objects have `pointerover` messages**: Arrows in all scenes, 3 berry types in berry scene, backpack, cabin and bike in bike scene, cabin in the cabin scene, water in the stream scene

- **Many objects have `pointerdown` effects**: Arrows in start scene, 3 berry types in the berry scene, backpack in the bike scene
- **Some objects are themselves animated**: Arrows in start scene, 3 berry types in berry scene? I don't know if fading counts but the arrows move. 

Asset sources:

- All traditional image assets were made by me using index cards and colored pencil, photographed with my phone, and edited and cropped in Clip Studio Paint.

- All digital image assets were made by me using Clip Studio Paint.

- sceneData.json was referenced primarily from our classmate [Poom's Adventure Prototype](https://github.com/sirapatp257/CMPM120-Demo2). Heavily referenced Poom's work for the structuring of the code since I'm not as knowledgable in code. 
I'm looking to differentiate more from their work as I make more changes, like the flags system, but right now it's pretty similar except a few name changes for variables, edits to tween types and adding an alpha attribute it checks for. 
Plans are to edit the adventure.js changes as well once I get flags working so it checks if an item has the "checkFlags" attribute, and if it does, to check the flags and that will decide if the rest of the loop (loading the images) will actually happen. This is mostly because of a design flaw I found in my code where if I had my berries infinitely looping a fading tween, when they are picked up, the tween makes them reappear even though they should be fully transparent.  

Code sources:
- `adventure.js` and `index.html` were created for this project [Adam Smith](https://github.com/rndmcnlly) and edited by me.
- `game.js` was sketched by [Adam Smith](https://github.com/rndmcnlly) and rewritten by me.