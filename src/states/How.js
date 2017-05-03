class How extends Phaser.State {
  create() {
    this.game.stage.backgroundColor = '#DFF4FF';

    this.instruction = this.game.add.sprite(this.game.width/1.7, this.game.heightHalf, 'instruction');
    this.instruction.anchor.setTo(0.5);

    this.instruction.animations.add('show');
		this.instruction.animations.play('show', 3, true);

    this.goBack = this.game.add.button(this.game.width/8, this.game.heightHalf, 'go-back', this.back, this);
    this.goBack.anchor.setTo(0.5);
    this.goBack.scale.setTo(this.game.aspectRatio/2, this.game.aspectRatio/2);
  }

  back() {
    this.game.state.start('Menu');
  }
}

export default How;
