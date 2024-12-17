class PreloadScene extends Phaser.Scene {
    constructor() {
      super({ key: "PreloadScene" });
    }
  
    preload() {
        this.load.image("logo", "/cdn/images/img.png");
        var txtLoading = this.add.text(this.cameras.main.centerX, 150,'LOADING...', { font:'15px emulogic', color: '#fff'});
        txtLoading.setOrigin(0.5, 0.5);

        const progressBar = this.add.sprite(this.cameras.main.centerX, 250, 'progressBar');
        progressBar.setOrigin(0.5, 0.5);
    
        this.load.on('progress', (value: number) => {
          progressBar.setScale(value, 1);
        });
    }
  
    create() {
      this.scene.start("MainScene");
    }
}

export default PreloadScene;