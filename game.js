class PathStart extends AdventureScene {
    constructor() {
        super("pstart", "Path Start");
    }
    onEnter() {
        this.setupScene();
    }
}

class PathBerry extends AdventureScene {
    constructor() {
        super("pberry", "Path Berry");
    }
    onEnter() {
        this.setupScene();
    }
}
class PathBike extends AdventureScene {
    constructor() {
        super("pbike", "Path Bike");
    }
    onEnter() {
        this.setupScene();
    }
}

class PathCabin extends AdventureScene {
    constructor() {
        super("pcabin", "Path Cabin");
    }
    onEnter() {
        this.setupScene();
    }
}

class PathStream extends AdventureScene {
    constructor() {
        super("pstream", "Path Stream");
    }
    onEnter() {
        this.setupScene();
    }
}



class Demo2 extends AdventureScene {
    constructor() {
        super("demo2", "The second room has a long name (it truly does).");
    }
    onEnter() {
        this.add.text(this.w * 0.3, this.w * 0.4, "just go back")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("You've got no other choice, really.");
            })
            .on('pointerdown', () => {
                this.gotoScene('demo1');
            });

        let finish = this.add.text(this.w * 0.6, this.w * 0.2, '(finish the game)')
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage('*giggles*');
                this.tweens.add({
                    targets: finish,
                    x: this.s + (this.h - 2 * this.s) * Math.random(),
                    y: this.s + (this.h - 2 * this.s) * Math.random(),
                    ease: 'Sine.inOut',
                    duration: 500
                });
            })
            .on('pointerdown', () => this.gotoScene('outro'));
    }
}

class Intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }

    // PRELOAD ALL ITEMS HERE

    preload() {
        this.load.path = "./assets/";
        this.load.image("intro1", "images/backgrounds/intro1.png");
        this.load.image("intro2", "images/backgrounds/intro2.png");
        this.load.image("intro3", "images/backgrounds/intro3.png");
        this.load.image("intro4", "images/backgrounds/intro4.png");

        this.load.image("pathStart", "images/backgrounds/pathstart.png");
        this.load.image("pathBerry", "images/backgrounds/pathberry.png");
        this.load.image("pathBike", "images/backgrounds/pathbike.png");
        this.load.image("pathStream", "images/backgrounds/pathstream.png");
        this.load.image("pathCabin", "images/backgrounds/pathcabin.png");

        this.load.image("arrow", "images/arrow.png");
        this.load.image("circleBerries", "images/circleberries.png");
        this.load.image("squareBerries", "images/squareberries.png");
        this.load.image("triangleBerries", "images/triangleberries.png");
        this.load.image("brokenBike", "images/brokenbike.png");
        this.load.image("backpack", "images/backpack.png");
        this.load.image("cabinDistant", "images/cabindistant.png");
        this.load.image("cabinUpCloser", "images/cabinupcloser.png");
        this.load.image("stream", "images/stream.png");

        this.load.json("sceneData", "sceneData.json");



    }
    create() {
        this.add.text(50,50, "well then!").setFontSize(50);
        this.add.text(50,100, "Click anywhere to begin.").setFontSize(20);
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('introscene1'));
        });
    }
}

class IntroScene1 extends Phaser.Scene {
    constructor() {
        super('introscene1')
    }

    create() {
        this.time.delayedCall(800, () => this.scene.start('pstart'));//shortcut past intro scenes
        let img1 = this.add.image(960, -120, "intro1").setOrigin(0.5, 0).setScale(2).setAlpha(0);
        this.tweens.add({
            targets: img1,
            duration:1000,
            alpha: 1,
        })
        this.tweens.add({
            targets: img1,
            delay:1000,
            duration:8000,
            y:0,
        })
        this.add.text(50,50, "well then!").setFontSize(50);
        this.add.text(50,100, "Click anywhere to begin.").setFontSize(20);
        this.input.once('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('introscene2'));
        });
    }
}

class IntroScene2 extends Phaser.Scene {
    constructor() {
        super('introscene2')
    }

    create() {
        let img2 = this.add.image(960, 0, "intro2").setOrigin(0.5, 0).setScale(2).setAlpha(0);
        this.tweens.add({
            targets: img2,
            duration:1000,
            alpha: 1,
        })
        this.tweens.add({
            targets: img2,
            delay:1000,
            duration:8000,
            y:-120,
        })

        
        this.add.text(50,50, "well then!").setFontSize(50);
        this.add.text(50,100, "Click anywhere to begin.").setFontSize(20);
        this.input.once('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('introscene3'));
        });
    }
}

class IntroScene3 extends Phaser.Scene {
    constructor() {
        super('introscene3')
    }

    create() {
        let img3 = this.add.image(960, -120, "intro3").setOrigin(0.5, 0).setScale(2).setAlpha(0);
        this.tweens.add({
            targets: img3,
            duration:1000,
            alpha: 1,
        })
        this.tweens.add({
            targets: img3,
            delay:1000,
            duration:8000,
            y:0,
        })

        
        this.add.text(50,50, "well then!").setFontSize(50);
        this.add.text(50,100, "Click anywhere to begin.").setFontSize(20);
        this.input.once('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('introscene4'));
        });
    }
}

class IntroScene4 extends Phaser.Scene {
    constructor() {
        super('introscene4')
    }

    create() {
        let img4 = this.add.image(960, 0, "intro4").setOrigin(0.5, 0).setScale(2).setAlpha(0);
        this.tweens.add({
            targets: img4,
            duration:1000,
            alpha: 1,
        })
        this.tweens.add({
            targets: img4,
            delay:1000,
            duration:8000,
            y:-120,
        })

        
        this.add.text(50,50, "well then!").setFontSize(50);
        this.add.text(50,100, "Click anywhere to begin.").setFontSize(20);
        this.input.once('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('demo1'));
        });
    }
}


class Outro extends Phaser.Scene {
    constructor() {
        super('outro');
    }
    create() {
        this.add.text(50, 50, "That's all!").setFontSize(50);
        this.add.text(50, 100, "Click anywhere to restart.").setFontSize(20);
        this.input.on('pointerdown', () => this.scene.start('intro'));
    }
}


const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080,
        zoom: 5,
        pixelArt: true,
    },
    scene: [Intro, IntroScene1, IntroScene2, IntroScene3, IntroScene4, PathStart, PathBerry, PathBike, PathCabin, PathStream, Demo2, Outro],
    title: "Adventure Game",
});



// NOTES ON SIZES FOR SELF
// 1920X1080 = OVERALL FULLSCREEN SIZE
// 850 X 600 = IMAGES SIZE
// 1700 X 1200 = IMAGES SIZE X2
// 120 pixels vertically over the 1080 limit, can scroll up and down. -120 to start at the bottom of the pic, 0 to start at the top, assuming y origin is 0