let isMuted = true;
const soundbutton = document.getElementById("soundbutton");
const sound = document.getElementById("sound");
// Music
soundbutton.addEventListener("click", function() {
        if (isMuted) {
            sound.play();
            soundbutton.style.filter = "brightness(100%)";
        } else {
            sound.pause();
            soundbutton.style.filter = "brightness(40%)";
        }
        isMuted = !isMuted
})

const startbutton = document.getElementById("startbutton");
// Starting Game by Click
startbutton.addEventListener("click", function() {
    
    document.getElementById("startscreen").style.display = "none";
    document.getElementById("game").style.display = "block";
    
    // Counting IDs
    let seedCounter = 0; 
    let seedlingCounter = 0;
    let flowerCounter = 0;
    let megaFlowerCounter = 0;
    // for "First-Time-Block"
    let seedlingArray = [false];
    let flowerArrayOne = [false, false, false, false];
    let flowerArrayTwo = [false, false, false, false, false, false, false, false, false, false];

    // Seed
    function spawnSeed() {
        const dropArea = document.getElementById("dropArea");

        let seed = document.createElement("img");
        seed.src = "https://firebasestorage.googleapis.com/v0/b/codedex-io.appspot.com/o/buildAssets%2Fgrj7Uul6QPOgcp6YSmLq%2Fseed.png?alt=media&token=52fb5027-578c-40b6-85ac-b9dbd71626d0";
        seed.classList.add("seed");
        seed.draggable = true;
        seed.id = "seed-" + seedCounter++; // Unique ID
        seed.style.position = "absolute";
        seed.dataset.type = "seed";

        // Random position within the container
        let x = Math.random() * (dropArea.clientWidth - 30);
        let y = Math.random() * (dropArea.clientHeight - 30);
        seed.style.left = `${x}px`;
        seed.style.top = `${y}px`;

        dropArea.appendChild(seed);
        addDragAndDrop(seed);
    }

    // Seedling
    function spawnSeedling(x, y) {
        const dropArea = document.getElementById("dropArea");

        let seedling = document.createElement("img");
        seedling.src = "https://firebasestorage.googleapis.com/v0/b/codedex-io.appspot.com/o/buildAssets%2Fgrj7Uul6QPOgcp6YSmLq%2Fseedling.png?alt=media&token=4c78b386-6299-4f10-a60c-d2955c257bfb";
        seedling.classList.add("seedling");
        seedling.style.position = "absolute";
        seedling.style.left = `${x}px`;
        seedling.style.top = `${y}px`;
        seedling.draggable = true;
        seedling.id = "seedling-" + seedlingCounter++; // Unique ID
        seedling.dataset.type = "seedling";

        if (seedlingArray[0] === false) {
            seedlingArray[0] = true;
            block();
            brightAgain("seed-1-1", "seed-1-2", "seedling-1-3");
        }
    
        dropArea.appendChild(seedling);
        addDragAndDrop(seedling);
    }

    // Flower 
    function spawnFlower(x, y) {
        const dropArea = document.getElementById("dropArea");

        let flower = document.createElement("img");
        flower.classList.add("flower");
        flower.style.position = "absolute";
        flower.style.left = `${x}px`;
        flower.style.top = `${y}px`;
        flower.draggable = true;
        flower.id = "flower-" + flowerCounter++; // Unique ID
        flower.dataset.type = "flower"; 

    const flowerUrls = [
        "https://firebasestorage.googleapis.com/v0/b/codedex-io.appspot.com/o/buildAssets%2Fgrj7Uul6QPOgcp6YSmLq%2Fearthflower.png?alt=media&token=8672315f-7e71-4c2b-9cc2-015e52e4e5ba",
        "https://firebasestorage.googleapis.com/v0/b/codedex-io.appspot.com/o/buildAssets%2Fgrj7Uul6QPOgcp6YSmLq%2Fwaterflower.png?alt=media&token=f57ded42-7a98-4688-b842-d1c4d065d8ae",
        "https://firebasestorage.googleapis.com/v0/b/codedex-io.appspot.com/o/buildAssets%2Fgrj7Uul6QPOgcp6YSmLq%2Ffireflower.png?alt=media&token=21df8102-28c9-4e2d-86b3-141455fefc9b",
        "https://firebasestorage.googleapis.com/v0/b/codedex-io.appspot.com/o/buildAssets%2Fgrj7Uul6QPOgcp6YSmLq%2Fwindflower.png?alt=media&token=a81d5058-48b2-4d55-b997-55a231478b66"
        ];

    const randomFlower = Math.floor(Math.random() * flowerUrls.length);
    let flowerImage = document.getElementById("flowerImage");
    let content = document.getElementById("content");
    let flowerDiscovered = document.getElementById("flowerDiscovered");

    // Earth Flower
    if (randomFlower === 0) {
        flower.src = flowerUrls[0];
        if (flowerArrayOne[0] === false) {
            flowerArrayOne[0] = true;
            flowerImage.src = flowerUrls[0];
            flowerDiscovered.innerText = "You discovered a new flower: The Earthflower!"
            content.innerText = "This flower is often seen growing in the woods. It's very fertile and its seeds could grow into various plants or even fruits.";
            block();
            brightAgain("seedling-2-1", "seedling-2-2", "earthflower-2-3");
            visibleAgain("earthflower");
            }
        }
    //Water FLower
    else if (randomFlower === 1) {
        flower.src = flowerUrls[1];
        if (flowerArrayOne[1] === false) {
            flowerArrayOne[1] = true;
            flowerImage.src = flowerUrls[1];
            flowerDiscovered.innerText = "You discovered a new flower: The Waterflower!"
            content.innerText = "This flower often grows along streams or rivers. If the roots can absorb enough water, small bubbles appear on the flower.";
            block();
            brightAgain("seedling-3-1", "seedling-3-2", "waterflower-3-3");
            visibleAgain("waterflower");
            }
        } 
    // Fire Flower
    else if (randomFlower === 2) {
        flower.src = flowerUrls[2];
        if (flowerArrayOne[2] === false) {
            flowerArrayOne[2] = true;
            flowerImage.src = flowerUrls[2];
            flowerDiscovered.innerText = "You discovered a new flower: The Fireflower!"
            content.innerText = "This flower grows out of the ashes like a phoenix. But be careful when you touch it, it could burn your finger.";
            block();
            brightAgain("seedling-4-1", "seedling-4-2", "fireflower-4-3");
            visibleAgain("fireflower");
            }
        } 
    // Wind FLower
    else if (randomFlower === 3) {
        flower.src = flowerUrls[3];
        if (flowerArrayOne[3] === false) {
            flowerArrayOne[3] = true;
            flowerImage.src = flowerUrls[3];
            flowerDiscovered.innerText = "You discovered a new flower: The Windflower!"
            content.innerText = "This flower grows in open and free meadows. With its special petals, it magically shapes the wind.";
            block();
            brightAgain("seedling-5-1", "seedling-5-2", "windflower-5-3");
            visibleAgain("windflower");
            }
        } 

        dropArea.appendChild(flower);
        addDragAndDrop(flower);
    }

    // Mega Flower
    function spawnMegaFlower(x, y, element) {
        const dropArea = document.getElementById("dropArea");

        let megaFlower = document.createElement("img");
        megaFlower.classList.add("megaFlower");
        megaFlower.style.position = "absolute";
        megaFlower.style.left = `${x}px`;
        megaFlower.style.top = `${y}px`;
        megaFlower.draggable = true;
        megaFlower.id = "megaFlower-" + megaFlowerCounter++; // Unique ID

        const megaFlowerUrls = [
            "https://firebasestorage.googleapis.com/v0/b/codedex-io.appspot.com/o/buildAssets%2Fgrj7Uul6QPOgcp6YSmLq%2Fstormflower.png?alt=media&token=b4b265ea-5d2a-4296-9190-5e49f165bc08",
            "https://firebasestorage.googleapis.com/v0/b/codedex-io.appspot.com/o/buildAssets%2Fgrj7Uul6QPOgcp6YSmLq%2Fmysticflower.png?alt=media&token=af76264c-9dac-46df-9add-c36c4b334496",
            "https://firebasestorage.googleapis.com/v0/b/codedex-io.appspot.com/o/buildAssets%2Fgrj7Uul6QPOgcp6YSmLq%2Ficeflower_-_kopie.png?alt=media&token=69feeafc-46eb-4ac3-96c6-fd3b9e159298",
            "https://firebasestorage.googleapis.com/v0/b/codedex-io.appspot.com/o/buildAssets%2Fgrj7Uul6QPOgcp6YSmLq%2Fmagmaflower_-_kopie.png?alt=media&token=1ebe8241-6020-4f65-9871-6ea6b862f90e",
            "https://firebasestorage.googleapis.com/v0/b/codedex-io.appspot.com/o/buildAssets%2Fgrj7Uul6QPOgcp6YSmLq%2Fdarkflower_-_kopie.png?alt=media&token=d54cc785-7935-4dc7-b961-8359feff9d1c",
            "https://firebasestorage.googleapis.com/v0/b/codedex-io.appspot.com/o/buildAssets%2Fgrj7Uul6QPOgcp6YSmLq%2Flightflower.png?alt=media&token=8a8c8719-97e1-44c8-9fdf-3e9551f7bdb7",
            "https://firebasestorage.googleapis.com/v0/b/codedex-io.appspot.com/o/buildAssets%2Fgrj7Uul6QPOgcp6YSmLq%2Fmountainflower1.png?alt=media&token=9aead628-5f01-47bf-840e-181f9d48b0e6",
            "https://firebasestorage.googleapis.com/v0/b/codedex-io.appspot.com/o/buildAssets%2Fgrj7Uul6QPOgcp6YSmLq%2Fwaterfallflower.png?alt=media&token=3e9d7735-7c98-4b65-bb3e-3c849e10df92",
            "https://firebasestorage.googleapis.com/v0/b/codedex-io.appspot.com/o/buildAssets%2Fgrj7Uul6QPOgcp6YSmLq%2Fsunflower.png?alt=media&token=444f2e6c-d343-4d2c-ac12-ab5b5bb6959f",
            "https://firebasestorage.googleapis.com/v0/b/codedex-io.appspot.com/o/buildAssets%2Fgrj7Uul6QPOgcp6YSmLq%2Ftornadoflower.png?alt=media&token=c872ed78-01db-483b-94db-44779560d299"
            ];
            
        // Stormflower    
        if (element === "StormFlower") {
            megaFlower.src = megaFlowerUrls[0];
            if (flowerArrayTwo[0] === false) {
            flowerArrayTwo[0] = true;
            flowerImage.src = megaFlowerUrls[0];
            flowerDiscovered.innerText = "You discovered a new flower: The Stormflower!"
            content.innerText = "This flower is a very energetic plant. Yet, humans have still not managed to absorb these vast amounts of energy. Be careful if you get close to it, strong lightning is possible.";
            block();
            brightAgain("windflower-6-1", "fireflower-6-2", "stormflower-6-3");
            visibleAgain("stormflower");
            }
        }
        // Mysticflower
        else if (element === "MysticFlower") {
            megaFlower.src = megaFlowerUrls[1];
            if (flowerArrayTwo[1] === false) {
            flowerArrayTwo[1] = true;
            flowerImage.src = megaFlowerUrls[1];
            flowerDiscovered.innerText = "You discovered a new flower: The Mysticflower!"
            content.innerText = "This flower shines with such beauty that you can't take your eyes off it. This plant is also very beloved by butterflies.";
            block();
            brightAgain("earthflower-7-1", "waterflower-7-2", "mysticflower-7-3");
            visibleAgain("mysticflower");
            }
        }
        // Iceflower
        else if (element === "IceFlower") {
            megaFlower.src = megaFlowerUrls[2];
            if (flowerArrayTwo[2] === false) {
            flowerArrayTwo[2] = true;
            flowerImage.src = megaFlowerUrls[2];
            flowerDiscovered.innerText = "You discovered a new flower: The Iceflower!"
            content.innerText = "This flower, as well as its stems and roots, are solidified by ice so that it can store plenty of nutrients. Legends say that this flower lets you freeze from its sparkling beauty.";
            block();
            brightAgain("waterflower-8-1", "windflower-8-2", "iceflower-8-3");
            visibleAgain("iceflower");
            }
        }
        // Magmaflower
        else if (element === "MagmaFlower") {
            megaFlower.src = megaFlowerUrls[3];
            if (flowerArrayTwo[3] === false) {
            flowerArrayTwo[3] = true;
            flowerImage.src = megaFlowerUrls[3];
            flowerDiscovered.innerText = "You discovered a new flower: The Magmaflower!"
            content.innerText = "An aggressive flower whose feelings should not be played with. Once destroyed a village or two when it broke out.";
            block();
            brightAgain("fireflower-9-1", "earthflower-9-2", "magmaflower-9-3");
            visibleAgain("magmaflower");
            }
        }
        // Darkflower
        else if (element === "DarkFlower") {
            megaFlower.src = megaFlowerUrls[4];
            if (flowerArrayTwo[4] === false) {
            flowerArrayTwo[4] = true;
            flowerImage.src = megaFlowerUrls[4];
            flowerDiscovered.innerText = "You discovered a new flower: The Darkflower!"
            content.innerText = "This flower only grows under moonlight in dark places. Its beautiful petals contract in daylight. Legends say that it is a magical flower.";
            block();
            brightAgain("fireflower-10-1", "waterflower-10-2", "darkflower-10-3");
            visibleAgain("darkflower");
            }
        }
        // Lightflower
        else if (element === "LightFlower") {
            megaFlower.src = megaFlowerUrls[5];
            if (flowerArrayTwo[5] === false) {
            flowerArrayTwo[5] = true;
            flowerImage.src = megaFlowerUrls[5];
            flowerDiscovered.innerText = "You discovered a new flower: The Lightflower!"
            content.innerText = "This mysterious flower needs plenty of sunlight. It is said to fulfill your deepest wishes, but be careful what you wish for...";
            block();
            brightAgain("earthflower-11-1", "windflower-11-2", "lightflower-11-3");
            visibleAgain("lightflower");
            }
        }
        // Mountainflower
        else if (element === "MountainFlower") {
            megaFlower.src = megaFlowerUrls[6];
            if (flowerArrayTwo[6] === false) {
            flowerArrayTwo[6] = true;
            flowerImage.src = megaFlowerUrls[6];
            flowerDiscovered.innerText = "You discovered a new flower: The Mountainflower!"
            content.innerText = "This flower only grows in high places like mountains and can grow as tall as a tree. Unfortunately, it can produce earthquakes and therefore destroys landscapes as it grows.";
            block();
            brightAgain("earthflower-12-1", "earthflower-12-2", "mountainflower-12-3");
            visibleAgain("mountainflower");
            }
        }
        // Waterfallflower
        else if (element === "WaterfallFlower") {
            megaFlower.src = megaFlowerUrls[7];
            if (flowerArrayTwo[7] === false) {
            flowerArrayTwo[7] = true;
            flowerImage.src = megaFlowerUrls[7];
            flowerDiscovered.innerText = "You discovered a new flower: The Waterfallflower!"
            content.innerText = "This flower spits out water like a waterfall. The water is even the cleanest water you can get. But don't give this plant too much water, otherwise it could flood the land.";
            block();
            brightAgain("waterflower-13-1", "waterflower-13-2", "waterfallflower-13-3");
            visibleAgain("waterfallflower");
            }
        }
        // Sunflower
        else if (element === "SunFlower") {
            megaFlower.src = megaFlowerUrls[8];
            if (flowerArrayTwo[8] === false) {
            flowerArrayTwo[8] = true;
            flowerImage.src = megaFlowerUrls[8];
            flowerDiscovered.innerText = "You discovered a new flower: The Sunflower!"
            content.innerText = "Under no circumstances should this flower be confused with the conventional sunflower. It can extract a lot of energy from the sun, which is why it burns like one. It has already caused the odd forest fire.";
            block();
            brightAgain("fireflower-14-1", "fireflower-14-2", "sunflower-14-3");
            visibleAgain("sunflower");
            }
        }
        // Tornadoflower
        else if (element === "TornadoFlower") {
            megaFlower.src = megaFlowerUrls[9];
            if (flowerArrayTwo[9] === false) {
            flowerArrayTwo[9] = true;
            flowerImage.src = megaFlowerUrls[9];
            flowerDiscovered.innerText = "You discovered a new flower: The Tornadoflower!"
            content.innerText = "This flower is not to be trifled with! If it doesn't get enough nutrients, it goes on a rampage through fields and villages and takes everything it needs to be able to grow.";
            block();
            brightAgain("windflower-15-1", "windflower-15-2", "tornadoflower-15-3");
            visibleAgain("tornadoflower");
            }
        }
        
        dropArea.appendChild(megaFlower);
        addDragAndDrop(megaFlower);
    }
    
    // "First-Time-Block"
    function block() {
        let box = document.getElementById("box");
        let closeButton = document.getElementById("closeButton");
        let gardenpicture = document.getElementById("gardenpicture");
        box.style.display = "block";
        gardenpicture.style.filter = "blur(5px) brightness(50%)";

        closeButton.addEventListener("click", () => {
            box.style.display = "none";
            gardenpicture.style.filter = "blur(0px) brightness(100%)";

        });
    }
    // Formulas on the left go bright again
    function brightAgain(element1, element2, element3) {
        document.getElementById(element1).style.filter = "brightness(100%)";
        document.getElementById(element2).style.filter = "brightness(100%)";
        document.getElementById(element3).style.filter = "brightness(100%)";
    }
    // Flowers on the right go visible again
    function visibleAgain(element) {
        document.getElementById(element).style.visibility ="visible";
    }

    // Drag&Drop
    function addDragAndDrop(element) {
        element.addEventListener("dragstart", event => {
            event.dataTransfer.setData("id", event.target.id);
            event.target.style.opacity = "0.5";
        });

        element.addEventListener("dragend", event => {
            event.target.style.opacity = "1";
        });

        document.getElementById("dropArea").addEventListener("dragover", event => {
            event.preventDefault();
        });

        document.getElementById("dropArea").addEventListener("drop", event => {
            event.preventDefault();
            let draggedId = event.dataTransfer.getData("id");
            let draggedItem = document.getElementById(draggedId);

            if (draggedItem) {
                let dropAreaRect = event.currentTarget.getBoundingClientRect();
                let parentOffset = getTotalOffset(event.currentTarget); // can be removed now

                let newX = event.clientX - dropAreaRect.left - draggedItem.offsetWidth / 2;
                let newY = event.clientY - dropAreaRect.top - draggedItem.offsetHeight / 2;

                draggedItem.style.left = `${newX}px`;
                draggedItem.style.top = `${newY}px`;

                checkForCombination(draggedItem);
                checkForCombination2(draggedItem);
                checkForCombination3(draggedItem);
            }
        });
    }

    // Seeds - Check Combination
    function checkForCombination(movedSeed) {
        // Ensure the moved element is a seed
        if (!movedSeed.classList.contains("seed")) {
            return;
        }
        let seeds = document.querySelectorAll(".seed");

        seeds.forEach(seed => {
            if (seed !== movedSeed && seed.dataset.type === "seed" && isOverlappingSeed(seed, movedSeed)) {
                let seedX = (parseInt(seed.style.left) + parseInt(movedSeed.style.left)) / 2;
                let seedY = (parseInt(seed.style.top) + parseInt(movedSeed.style.top)) / 2;

                // Remove both seeds
                seed.remove();
                movedSeed.remove();

                // Create seedling in the middle of both seeds
                spawnSeedling(seedX, seedY);
            }
        });
    }

    // Seedlings - Check Combination
    function checkForCombination2(movedSeedling) {
        // Ensure the moved element is a seedling
        if (!movedSeedling.classList.contains("seedling")) {
            return;
        }

        let seedlings = document.querySelectorAll(".seedling");

        seedlings.forEach(seedling => {
            if (seedling !== movedSeedling && seedling.dataset.type === "seedling" && isOverlappingSeedling(seedling, movedSeedling)) {
                let seedlingX = (parseInt(seedling.style.left) + parseInt(movedSeedling.style.left)) / 2;
                let seedlingY = (parseInt(seedling.style.top) + parseInt(movedSeedling.style.top)) / 2;

                // Reemove both seedlings
                seedling.remove();
                movedSeedling.remove();

                // Create flower in the middle of both seedligs
                spawnFlower(seedlingX, seedlingY);
            }
        });
    }

    // Flowers - Check Combination
    function checkForCombination3(movedFlower) {
        // Ensure the moved element is a flower
        if (!movedFlower.classList.contains("flower")) {
            return;
        }

        let flowers = document.querySelectorAll(".flower");

        flowers.forEach(flower => {
            if (flower !== movedFlower && flower.dataset.type === "flower" && isOverlappingFlower(flower, movedFlower)) {

                let flowerX = (parseInt(flower.style.left) + parseInt(movedFlower.style.left)) / 2;
                let flowerY = (parseInt(flower.style.top) + parseInt(movedFlower.style.top)) / 2;

                // Remove both flowers
                flower.remove();
                movedFlower.remove();

                const flowerUrls = [
                    "https://firebasestorage.googleapis.com/v0/b/codedex-io.appspot.com/o/buildAssets%2Fgrj7Uul6QPOgcp6YSmLq%2Fearthflower.png?alt=media&token=8672315f-7e71-4c2b-9cc2-015e52e4e5ba",
                    "https://firebasestorage.googleapis.com/v0/b/codedex-io.appspot.com/o/buildAssets%2Fgrj7Uul6QPOgcp6YSmLq%2Fwaterflower.png?alt=media&token=f57ded42-7a98-4688-b842-d1c4d065d8ae",
                    "https://firebasestorage.googleapis.com/v0/b/codedex-io.appspot.com/o/buildAssets%2Fgrj7Uul6QPOgcp6YSmLq%2Ffireflower.png?alt=media&token=21df8102-28c9-4e2d-86b3-141455fefc9b",
                    "https://firebasestorage.googleapis.com/v0/b/codedex-io.appspot.com/o/buildAssets%2Fgrj7Uul6QPOgcp6YSmLq%2Fwindflower.png?alt=media&token=a81d5058-48b2-4d55-b997-55a231478b66"
                    ];

                if (flower.src === (String(flowerUrls[0])) && movedFlower.src === (String(flowerUrls[1])) || flower.src === (String(flowerUrls[1])) && movedFlower.src === (String(flowerUrls[0]))) {
                    // MegaFlower = MysticFlower
                    spawnMegaFlower(flowerX, flowerY, "MysticFlower");
                } else if (flower.src === (String(flowerUrls[0])) && movedFlower.src === (String(flowerUrls[2])) || flower.src === (String(flowerUrls[2])) && movedFlower.src === (String(flowerUrls[0]))) {
                    // MegaFlower = MagmaFlower
                    spawnMegaFlower(flowerX, flowerY, "MagmaFlower");
                } else if (flower.src === (String(flowerUrls[1])) && movedFlower.src === (String(flowerUrls[3])) || flower.src === (String(flowerUrls[3])) && movedFlower.src === (String(flowerUrls[1]))) {
                    // MegaFlower = IceFlower
                    spawnMegaFlower(flowerX, flowerY, "IceFlower");
                } else if (flower.src === (String(flowerUrls[2])) && movedFlower.src === (String(flowerUrls[3])) || flower.src === (String(flowerUrls[3])) && movedFlower.src === (String(flowerUrls[2]))) {
                    // MegaFlower = StormFlower
                    spawnMegaFlower(flowerX, flowerY, "StormFlower");
                } else if (flower.src === (String(flowerUrls[0])) && movedFlower.src === (String(flowerUrls[3])) || flower.src === (String(flowerUrls[3])) && movedFlower.src === (String(flowerUrls[0]))) {
                    // MegaFlower = LightFlower
                    spawnMegaFlower(flowerX, flowerY, "LightFlower");
                } else if (flower.src === (String(flowerUrls[1])) && movedFlower.src === (String(flowerUrls[2])) || flower.src === (String(flowerUrls[2])) && movedFlower.src === (String(flowerUrls[1]))) {
                    // MegaFlower = DarkFlower
                    spawnMegaFlower(flowerX, flowerY, "DarkFlower");
                } else if (flower.src === (String(flowerUrls[0])) && movedFlower.src === (String(flowerUrls[0]))) {
                    // MegaFlower = MountainFlower
                    spawnMegaFlower(flowerX, flowerY, "MountainFlower");
                } else if (flower.src === (String(flowerUrls[1])) && movedFlower.src === (String(flowerUrls[1]))) {
                    // MegaFlower = WaterfallFlower
                    spawnMegaFlower(flowerX, flowerY, "WaterfallFlower");
                } else if (flower.src === (String(flowerUrls[2])) && movedFlower.src === (String(flowerUrls[2]))) {
                    // MegaFlower = SunFlower
                    spawnMegaFlower(flowerX, flowerY, "SunFlower");
                } else if (flower.src === (String(flowerUrls[3])) && movedFlower.src === (String(flowerUrls[3]))) {
                    // MegaFlower = TornadoFlower
                    spawnMegaFlower(flowerX, flowerY, "TornadoFlower");
                }
            }
        });

    }

    // Check Overlapping 
    function isOverlappingSeed(seed1, seed2) {
        let r1 = seed1.getBoundingClientRect();
        let r2 = seed2.getBoundingClientRect();

        return !(r1.right < r2.left || r1.left > r2.right || r1.bottom < r2.top || r1.top > r2.bottom);
    }
    function isOverlappingSeedling(seedling1, seedling2) {
        let r1 = seedling1.getBoundingClientRect();
        let r2 = seedling2.getBoundingClientRect();

        return !(r1.right < r2.left || r1.left > r2.right || r1.bottom < r2.top || r1.top > r2.bottom);
    }
    function isOverlappingFlower(flower1, flower2) {
        let r1 = flower1.getBoundingClientRect();
        let r2 = flower2.getBoundingClientRect();

        return !(r1.right < r2.left || r1.left > r2.right || r1.bottom < r2.top || r1.top > r2.bottom);
    }

    // Total Offset (can be removed now)
    function getTotalOffset(element) {
        let top = 0, left = 0;
        while(element) {
            top += element.offsetTop  || 0;
            left += element.offsetLeft || 0;
            element = element.offsetParent;
        }
        return { top: top, left:left };
    }

    // Every 5 seconds, a seed spawns 
    setInterval(spawnSeed, 5000);
    
})
