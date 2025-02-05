class MusicPlayer {
  private music: Phaser.Sound.BaseSound

  constructor(scene: Phaser.Scene, key: string) {
    this.music = scene.sound.add(key)
  }

  play(loop: boolean = false) {
    if (this.music.isPaused) this.music.resume()
    else this.music.play({ loop })
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

  destroy() {
    this.music.stop()
    this.music.destroy()
  }
}

export default MusicPlayer
