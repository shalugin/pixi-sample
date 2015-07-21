function Engine() {
    var $this = this;

    $this.lines = [];
    $this.fire = function (x1, y1, x2, y2) {
        console.log(x1, y1, x2, y2);
    };
    $this.renderer = null;

    $this.updateProton = function() {
        if ($this.proton) {
            $this.proton.update();
        }
    };

    function initProton() {
        $this.proton = new Proton();
        $this.emitter = new Proton.Emitter();
        //set Rate
        $this.emitter.rate = new Proton.Rate(Proton.getSpan(10, 20), 0.1);
        //add Initialize
        $this.emitter.addInitialize(new Proton.Radius(1, 12));
        $this.emitter.addInitialize(new Proton.Life(2, 4));
        $this.emitter.addInitialize(new Proton.Velocity(3, Proton.getSpan(0, 360), 'polar'));
        //add Behaviour
        $this.emitter.addBehaviour(new Proton.Color('ff0000', 'random'));
        $this.emitter.addBehaviour(new Proton.Alpha(1, 0));
        //set emitter position
        $this.emitter.p.x = canvas.width / 2;
        $this.emitter.p.y = canvas.height / 2;
        //emitter.emit();
        $this.emitter.emit('once');
        //add emitter to the proton
        $this.proton.addEmitter($this.emitter);
        // add canvas renderer
        $this.renderer = new Proton.Renderer('canvas', $this.proton, canvas);
        $this.renderer.start();
    }

    initProton();
}