class MainScene extends Phaser.Scene {
    constructor() {
        super({ key: "MainScene" });
    }
  
    create() {
      const logo = this.add.image(400, 300, "logo");
  
      // Exemplo de animação
      this.tweens.add({
        targets: logo,
        y: 500,
        duration: 2000,
        ease: "Power2",
        yoyo: true,
        loop: -1,
      });
    }
}

export default MainScene;