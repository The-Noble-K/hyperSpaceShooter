class SceneMainMenu extends Phaser.Scene {
    constructor() {
        super({ key: 'SceneMainMenu' });
    }
    
    preload() {
        this.load.image('sprBtnPlay', 'content/sprBtnPlay.png');
        this.load.image('sprBtnPlayHover', 'content/sprBtnPlayHover.png');
        this.load.image('sprBtnPlayDown', 'content/sprBtnPlayHover.png');
        this.load.image('sprBtnRestart', 'content/sprBtnRestart.png');
        this.load.image('sprBtnRestartHover', 'content/sprBtnRestartHover.png');
        this.load.image('sprBtnRestartDown', 'content/sprBtnRestartHover.png');
        
        this.load.audio('sndBtnOver', 'content/sndBtnOver.wav');
        this.load.audio('sendBtnDown', 'content/sndBtnOver.wav');
    }
    
    create() {
        this.scene.start('SceneMain');
    }
}