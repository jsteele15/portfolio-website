/*im thinking of making a carosell with all the games i've made over the years
or maybe a list will do
*/
<script setup>
    //list of games that includes; game image, game name, game date
    // game description, the tech used, 
    const gameList = [
        {
            title: "Machines Vs Mustache",
            date: "04/04/2026",
            image: new URL("@/assets/card_images/machinesvsmustache.png", import.meta.url).href,
            description: "Cruise the infinite highway, dodging the ruins of a lost world and smashing machines. Keep your mustache in good shape lest you fall to the clankers!",
            tech: "Godot",
            link: "https://jam-bone.itch.io/mustache-vs-machines",
        },
        {
            title: "Night Witches",
            date: "01/02/2026",
            image: new URL("@/assets/card_images/nightwitches.png", import.meta.url).href,
            description: "Play as the Soviet 588th Night Bomber Regiment during WW2. Destroy as much Nazi infrastructure as you can before the nights end. Happy hunting comrade.",
            tech: "Godot",
            link: "https://jam-bone.itch.io/night-witches",
        },
        {
            title: "Pill Bugs",
            date: "05/01/2026",
            image: new URL("@/assets/card_images/pillbug.png", import.meta.url).href,
            description: "Guide two pills bugs back home! work together on an epic quest to climb four steps.",
            tech: "Godot",
            link: "https://jam-bone.itch.io/pillbugs",
        },
        {
            title: "Wave Piracy",
            date: "01/12/2025",
            image: new URL("@/assets/card_images/wave.png", import.meta.url).href,
            description: "Fight your way across the Caribbean defeating ships and raiding towns. Find powerful equipment to upgrade your ship. Spend treasure on your town to build your pirate fortune. Acquire 25,000 treasure to win the game. Avoid the waves, lest you be sunk under the sea.",
            tech: "Godot",
            link: "https://jam-bone.itch.io/wave-piracy",
        },
        {
            title: "Charcoal",
            date: "06/10/2025",
            image: new URL("@/assets/card_images/charcoal.png", import.meta.url).href,
            description: "The world has ended. Scramble through the wastes, collect resources, build settlements in the ruins of the old world.  Protect your group and survive.",
            tech: "Godot",
            link: "https://jam-bone.itch.io/charcoal",
        },
        {
            title: "Blood Axe",
            date: "31/07/2025",
            image: new URL("@/assets/card_images/blood.png", import.meta.url).href,
            description: "Rise Eric Bloodaxe, King of Norway and Northumbria. It's time to cut a bloody path across England's shores.",
            tech: "Godot",
            link: "https://jam-bone.itch.io/blood-axe",
        },
        {
            title: "Four Minutes",
            date: "20/06/2025",
            image: new URL("@/assets/card_images/fourmin.png", import.meta.url).href,
            description: "This is the Wartime broadcast service. The country is about to be attacked by nuclear weapons. Stay calm, and find shelter within four minutes....",
            tech: "Godot",
            link: "https://jam-bone.itch.io/four-minutes",
        },
        {
            title: "Over the top",
            date: "30/04/2025",
            image: new URL("@/assets/card_images/overthetop.png", import.meta.url).href,
            description: "Over the top is a turn based tactical game where you travel across no mans land, get through the barbed wire and clear out the opposing trench. And if you fail? Well, someone else can try again tomorrow.",
            tech: "Godot",
            link: "https://jam-bone.itch.io/over-the-top",
        },
        {
            title: "Arctic Odyssey",
            date: "02/03/2025",
            image: new URL("@/assets/card_images/arctic.png", import.meta.url).href,
            description: "Uncover the mysteries of the frozen Arctic by assembling a team of famous explorers. Fund your adventure by discovering scientific curiosities and finding secrets. All with the aim of being the first to reach the North pole.",
            tech: "Godot",
            link: "https://jam-bone.itch.io/journey-to-the-north-pole",
        },
        {
            title: "Crab Tower Wizard Wars",
            date: "14/10/2024",
            image: new URL("@/assets/card_images/crabtower.png", import.meta.url).href,
            description: "Four brothers, all wizards, all driving giant mech like crabs. Bonecrusher, lord of the north. Screaming blood knuckle, master of the swamps. Lord hell knives, ruler of the underworld; and you, John, who's a pretty cool dude. Travel across the world, assemble the largest crab mech ever built, destroy your brothers, and become the ultimate crab mech rider",
            tech: "Godot",
            link: "https://jam-bone.itch.io/wizard-battle-spider",
        },
        {
            title: "The Mysterious Tale of Inheritance at the Manor of Increasingly Preposterous Accidents",
            date: "22/09/2024",
            image: new URL("@/assets/card_images/murdergame.png", import.meta.url).href,
            description: "Scandal! You have been denied your inheritance by your miserly old grandfather. There’s only one solution: collect all the items in the mansion and stage a series of wacky accidents, leaving you the sole survivor. Make sure you’re not spotted!",
            tech: "Python",
            link: "https://pyweek.org/e/Limegang/",
        },
        {
            title: "Surveillance States",
            date: "14/08/2024",
            image: new URL("@/assets/card_images/survailence.png", import.meta.url).href,
            description: "Surveillance States is a game about building a spy network in the Confederate states and getting vital military information to the North.",
            tech: "Godot",
            link: "https://jam-bone.itch.io/surveillance-states",
        },
        {
            title: "I am survivor",
            date: "26/04/2024",
            image: new URL("@/assets/card_images/survivor.png", import.meta.url).href,
            description: "Fight back against powerful humans with waves upon waves of Zombies",
            tech: "Python/Phaser 3",
            link: "https://jam-bone.itch.io/i-am-survivor",
        },
        {
            title: "Comrade bodyguard",
            date: "29/02/2024",
            image: new URL("@/assets/card_images/comrade.png", import.meta.url).href,
            description: "Completely, 100% historically accurate Fidel Castro's bodyguard simulator.",
            tech: "Godot",
            link: "https://jam-bone.itch.io/comrade-bodyguard",
        },
        {
            title: "Thomas the Minister of Transportation",
            date: "03/24/2024",
            image: new URL("@/assets/card_images/trains.png", import.meta.url).href,
            description: "Become Thomas the Transport Minister, managing all the trains on the London underground. Don't cause too many deaths Mr Minister, that would look bad.",
            tech: "Python",
            link: "https://pyweek.org/e/LimeGang3/",
        },
        {
            title: "Untitled Gravity puzzler",
            date: "24/09/2023",
            image: new URL("@/assets/card_images/grav.png", import.meta.url).href,
            description: "Untitled Gravity Puzzler(UGP) involves you using gravity created by dark matter to solve a series of puzzles.",
            tech: "Python",
            link: "https://pyweek.org/e/limegang2/",
        },
        {
            title: "In the Dark",
            date: "01/04/2023",
            image: new URL("@/assets/card_images/inthedark.png", import.meta.url).href,
            description: "A vampire town builder where you keep on moving around the world avoiding the sun. Collect resources, create new vampires and work towards a project to block out the sun.",
            tech: "Python",
            link: "https://pyweek.org/e/limegang/",
        },
    ]
</script>

<template>
    <p>Everything ive made in godot and python</p>
    <div class="game-card" v-for="game in gameList">
        <img :src="game.image" alt="" class="game-image" />
        <div class="game-info" >
            <h2 class="game-title">{{ game.title }}</h2>
            <p>{{ game.description }}</p>
            <p>{{ game.tech }}</p>
            <a :href=game.link target="_blank">{{ game.link }}</a>
        </div>
    </div>
</template>

<style scope>

.game-card {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.5rem;
    background: #1e1f2f;
    border-radius: 6px;
}

.game-card:hover {
    transform: scale(1.1);
}

.game-image {
    width: 150px;
    height: 150px;
}

.game-title {
    font-family: 'Cinzel', serif;
    text-decoration: underline;
}
</style>