let AC_GAME_OBJECTS = [];
class AcGameObject {
    constructor() {
        AC_GAME_OBJECTS.push(this);
        this.has_called_start = false;
        this.timedelta = 0;
    }
    start() { // 只会在第一帧执行

    }
    update() { // 每一帧会执行一次

    }
    render() {

    }
    on_destroy() { // 在被销毁之前执行一次

    }
    destroy() {
        this.on_destroy();
        for (let i = 0; i < AC_GAME_OBJECTS.length; i++) {
            if (AC_GAME_OBJECTS[i] === this) {
                AC_GAME_OBJECTS.splice(i, 1);
                break;
            }
        }
    }

}
let last_timestamp = 0;
let AC_GAME_ANIMATION = function(timestamp) {
    for (let i = 0; i < AC_GAME_OBJECTS.length; i++) {
        let obj = AC_GAME_OBJECTS[i];
        if (!obj.has_called_start) {
            obj.start();
            obj.has_called_start = true;
        } else {
            obj.timedelta = timestamp - last_timestamp;
            obj.update();
        }

        last_timestamp = timestamp;
        requestAnimationFrame(AC_GAME_ANIMATION);
    }
}
requestAnimationFrame(AC_GAME_ANIMATION);