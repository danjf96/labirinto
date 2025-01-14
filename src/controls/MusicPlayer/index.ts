class MusicPlayer {
  private music: Phaser.Sound.BaseSound

  constructor(scene: Phaser.Scene, key: string) {
    this.music = scene.sound.add(key)
  }

  play(loop: boolean = false) {
    this.music.play({ loop })
  }

  pause() {
    this.music.pause()
  }

  stop() {
    this.music.stop()
  }

  setVolume(volume: number) {
    ;(this.music as Phaser.Sound.WebAudioSound).setVolume(volume)
  }

  onEnd(callback: () => void) {
    this.music.on('complete', callback)
  }
}

export default MusicPlayer
