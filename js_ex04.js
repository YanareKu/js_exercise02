var cat = {
        tiredness: 20,
        hunger: 20,
        loneliness: 3,
        happiness: 15,
        obedience: -5000,
        feed: function (food) {
            var kibble,
                salmon,
                mouse;
            if (food === 'kibble') {
                this.hunger = this.hunger - 10;
                console.log("Om nom. Kibble is yummy! My hunger is at", cat.hunger);
            } else if (food === 'salmon') {
                this.hunger = this.hunger - 20;
                console.log("Om nom. I LOVE SALMON! My hunger is at", cat.hunger);
            } else if (food === 'mouse') {
                this.hunger = this.hunger - 5;
                console.log("Om nom. Woo mouse! My hunger is at", cat.hunger);
            } else {
                this.hunger = this.hunger - 5;
                console.log("Om nom nom. My hunger is at", cat.hunger);
            }
        },
        sleep: function (length) {
            if (length > 10 && length < 20) {
                this.tiredness = this.tiredness - 5;
                console.log("ZZzzZZz. My tiredness is at ", cat.tiredness);
            } else if (length > 20 && length < 30) {
                this.tiredness = this.tiredness - 10;
                console.log("ZZzzZZz. My tiredness is at ", cat.tiredness);
            } else if (length > 30) {
                this.tiredness = this.tiredness - 20;
                console.log("ZZzzZZz. My tiredness is at ", cat.tiredness);
            } else {
                this.tiredness = this.tiredness -2;
                console.log("ZZzzZZz. My tiredness is at ", cat.tiredness);
            }
        },
        buddy: function () {
            this.loneliness = this.loneliness -3;
            console.log("Purr, purr! My loneliness is at", cat.loneliness);
        },
        fun: function (joy) {
            var pet,
                laser;
            if (joy === 'pet') {
                this.happiness = this.happiness + 10;
                this.tiredness = this.tiredness + 5;
                console.log("Mew! My happiness is at " + cat.happiness +
                    " but my tiredness is at" + cat.tiredness);
            } else if (joy === 'laser') {
                this.happiness = this.happiness + 10;
                this.hunger = this.hunger + 5;
                console.log("Mew! My happiness is at " + cat.happiness +
                    " but my hunger is at" + cat.hunger);
            } else { this.happiness = this.happiness +10;
                console.log("Mew, mew! My happiness is at", cat.happiness);
            }
        },
        waterBottle: function () {
            this.obedience = this.obedience +5;
            console.log("Hisss! My obedience is at", cat.obedience);
        }
    };

cat.feed('kibble');
cat.feed('salmon');
cat.sleep(24);
cat.buddy();
cat.fun('laser');
cat.waterBottle();